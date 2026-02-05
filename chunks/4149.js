"use strict";
n.d(t, { PF: () => T, aF: () => v }),
    n(321073),
    n(508300),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var r = n(659416),
    i = n(652215);
let a = "vd1:",
    s = "⁣",
    o = 128,
    l = 0,
    u = 1,
    c = 2,
    d = 3,
    _ = 4,
    f = 5,
    p = 6,
    h = 7,
    m = 8,
    g = 9,
    E = "vd:";
function A(e, t) {
    return `${E}${e}:${t}`;
}
function I(e) {
    if (!e.startsWith(E)) return null;
    let t = e.slice(E.length),
        n = t.indexOf(":");
    return -1 === n ? null : { guildId: t.slice(0, n), channelId: t.slice(n + 1) };
}
function T(e) {
    let t = D(JSON.stringify(N(e))),
        n = {};
    "" !== e.prompt && (n.name = e.prompt), (n.partyId = A(e.guildId ?? "", e.channelId ?? ""));
    let r = a.length,
        i = o - r,
        s = o - r;
    if (t.length <= i) n.state = `${a}${t}`;
    else {
        let e = y(t, i, s);
        if (e.length > 2) return null;
        null != e[0] && (n.state = `${a}${e[0]}`), null != e[1] && (n.details = `${a}${e[1]}`);
    }
    return n;
}
function y(e, t, n) {
    let r = [],
        i = 0;
    for (e.length > 0 && (r.push(e.slice(0, t)), (i = t)); i < e.length; ) r.push(e.slice(i, i + n)), (i += n);
    return r;
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        r = [];
    for (let t of e) {
        if (!t.startsWith(a)) return null;
        r.push(t.slice(a.length));
    }
    let i = L(r.join(""));
    if (null == i) return null;
    let s = P(i);
    return O(s) ? R(s, t, n) : null;
}
function v(e) {
    if (null == e || e.type !== i.$pd.CUSTOM_STATUS) return null;
    let t = "",
        n = "";
    if (e.party?.id != null) {
        let r = I(e.party.id);
        null != r && ((t = r.guildId), (n = r.channelId));
    }
    let r = [],
        a = C(e.state);
    null != a && r.push(a);
    let s = b(e.details);
    if ((null != s && r.push(s), 0 === r.length)) return null;
    let o = S(r, t, n);
    return null == o ? null : "" !== e.name && "Custom Status" !== e.name ? { ...o, prompt: e.name } : o;
}
function C(e) {
    if (null == e || "" === e) return null;
    let t = e.indexOf(s);
    return -1 === t ? null : b(e.slice(t + s.length));
}
function b(e) {
    return null != e && "" !== e && e.startsWith(a) ? e : null;
}
function N(e) {
    let t = [e.senderId, e.targetId, e.kind, e.durationSec, e.spiciness, e.failAfterHours];
    switch (e.messageKind) {
        case r.cn.OFFER:
            return [e.dareId, r.cn.OFFER, ...t];
        case r.cn.STATE: {
            let n = [e.dareId, r.cn.STATE, ...t, e.phase];
            return null != e.startedAtMs && n.push(e.startedAtMs), n;
        }
        case r.cn.COMMAND:
            return [e.dareId, r.cn.COMMAND, ...t, e.commandType];
    }
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        i = {
            dareId: e[l],
            guildId: t,
            channelId: n,
            senderId: e[c],
            targetId: e[d],
            kind: e[_],
            prompt: "",
            durationSec: e[f],
            failAfterHours: e[h],
            spiciness: e[p],
            messageKind: e[u],
        };
    switch (e[u]) {
        case r.cn.OFFER:
            return { ...i, messageKind: r.cn.OFFER };
        case r.cn.STATE:
            return { ...i, messageKind: r.cn.STATE, phase: e[m], startedAtMs: e[g] };
        case r.cn.COMMAND:
            return { ...i, messageKind: r.cn.COMMAND, commandType: e[m] };
    }
}
function O(e) {
    if (!Array.isArray(e) || e.length < 2 || !M(e[l]) || !U(r.cn, e[u])) return !1;
    let t = e[u];
    switch (t) {
        case r.cn.OFFER:
            if (8 !== e.length) return !1;
            break;
        case r.cn.STATE:
            if (e.length < 9 || e.length > 10) return !1;
            break;
        case r.cn.COMMAND:
            if (9 !== e.length) return !1;
            break;
        default:
            return !1;
    }
    if (!M(e[c]) || !M(e[d]) || !U(r.H9, e[_]) || !k(e[f])) return !1;
    let n = 60,
        i = 3600;
    if (e[f] < n || e[f] > i || !U(r.sb, e[p]) || !k(e[h]) || e[h] < 1 || e[h] > 24) return !1;
    switch (t) {
        case r.cn.OFFER:
            return !0;
        case r.cn.STATE:
            if (!U(r.Ob, e[m]) || (10 === e.length && !k(e[g]))) return !1;
            return !0;
        case r.cn.COMMAND:
            return U(r.Cy, e[m]);
    }
}
function D(e) {
    return btoa(x(new TextEncoder().encode(e)))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/u, "");
}
function L(e) {
    try {
        let t = w(e),
            n = atob(t),
            r = Uint8Array.from(n, (e) => e.charCodeAt(0));
        return new TextDecoder().decode(r);
    } catch {
        return null;
    }
}
function w(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/"),
        n = t.length % 4;
    return 0 === n ? t : `${t}${"=".repeat(4 - n)}`;
}
function x(e) {
    let t = "";
    for (let n of e) t += String.fromCharCode(n);
    return t;
}
function P(e) {
    try {
        return JSON.parse(e);
    } catch {
        return null;
    }
}
function M(e) {
    return "string" == typeof e && e.trim().length > 0;
}
function k(e) {
    return "number" == typeof e && Number.isFinite(e);
}
function U(e, t) {
    return "number" == typeof t && Object.values(e).includes(t);
}

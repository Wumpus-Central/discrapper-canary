"use strict";
n.d(t, {
    $l: () => W,
    D4: () => k,
    D8: () => U,
    En: () => L,
    FZ: () => w,
    G4: () => b,
    J8: () => Y,
    R2: () => v,
    Sx: () => j,
    Tg: () => T,
    Uu: () => y,
    Vh: () => F,
    Wx: () => $,
    X0: () => B,
    YV: () => V,
    bQ: () => S,
    cN: () => x,
    d6: () => H,
    fb: () => D,
    gG: () => O,
    iC: () => P,
    j6: () => M,
    qr: () => K,
    rZ: () => R,
    rw: () => I,
    ss: () => N,
    uh: () => z,
    wH: () => C,
});
var i = n(17928),
    r = n(554146),
    s = n(228366),
    a = n(594061),
    o = n(617617),
    l = n(174459),
    u = n(935208),
    c = n(105565),
    d = n(787925),
    _ = n(541689),
    f = n(199773),
    h = n(558845),
    p = n(256787),
    E = n(757792),
    m = n(853735),
    g = n(49999),
    A = n(652215);
let I = 2592e6;
function T(e) {
    let t = o.A.settings.userContent?.recurringDismissibleContentStates[e];
    return {
        lastDismissedVersion: (0, p.L0)(e) ? (0, m.c)(e) : 0,
        lastDismissedAtMs: new Date().getTime().toString(),
        lastDismissedObjectId: (0, p.IL)(e) ? u.default.fromTimestamp(Date.now() + I) : "0",
        numTimesDismissed: t?.numTimesDismissed ?? 0,
    };
}
function S(e, t, n) {
    return (0, a.$w)(e, {
        lastDismissedVersion: t,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function N(e, t) {
    return (0, a.$w)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: t,
    });
}
function y(e, t, n) {
    return (0, a.$w)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: n,
    });
}
function C(e, t, n) {
    return (0, a.xs)(e, t, {
        dismissed: !0,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function v(e, t, n) {
    return (0, a.xs)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function O(e, t, n) {
    return (0, a.xs)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function R(e, t, n) {
    return (0, a.xs)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function b(e, t, n, i) {
    return (0, a.xs)(e, n, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: i,
    });
}
function D(e, t, n) {
    return (0, a.xs)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function L(e, t) {
    if ((0, E.P3)(e)) return { isDismissed: !0, lastDismissedVersion: null };
    let n = o.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedVersion,
        i = t ?? (0, m.c)(e);
    return { isDismissed: null != n && n >= i, lastDismissedVersion: n };
}
function w(e, t) {
    if ((0, E.P3)(e)) return { isDismissed: !0, lastDismissedAtMs: null };
    let n = o.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedAtMs,
        i = null != n && "0" !== n ? (Number.isNaN(Number(n)) ? void 0 : Number(n)) : void 0;
    if (void 0 === i) return { isDismissed: !1, lastDismissedAtMs: void 0 };
    let r = !0;
    if (null != t) {
        let e = i + t.cooldownDurationMs,
            n = Date.now(),
            s = null == t.showAfterTimestamp || (n >= t.showAfterTimestamp && i <= t.showAfterTimestamp);
        r = n < e || !s;
    }
    return { isDismissed: r, lastDismissedAtMs: i };
}
function M(e, t, n) {
    if ((0, E.P3)(e)) return !0;
    let i = o.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedObjectId,
        r = o.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedAtMs,
        s = null != r && "0" !== r ? (Number.isNaN(Number(r)) ? void 0 : Number(r)) : void 0,
        a = !1;
    if (null != n && null != s) {
        let e = s + n.cooldownDurationMs,
            t = Date.now(),
            i = null == n.showAfterTimestamp || (t >= n.showAfterTimestamp && s <= n.showAfterTimestamp);
        a = t < e || !i;
    }
    let l = null != i && 1 !== u.default.compare(t, i);
    return a && l;
}
function P(e, t) {
    if ((0, E.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && !0 === n[e].dismissed;
}
function x(e, t) {
    return (0, i.bG)([o.A], () => P(e, t));
}
function U(e, t) {
    if ((0, E.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedAtMs && "0" !== n[e].lastDismissedAtMs;
}
function k(e, t) {
    if ((0, E.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedObjectId && "0" !== n[e].lastDismissedObjectId;
}
let G = new Set([r.M.ACCOUNT_LINK_INVITE_FRIENDS, r.M.ACCOUNT_LINK_PROMPT]);
function F(e, t, n, i) {
    if ((0, h.dD)(e) || f.A.hasUserHitDCCap(e, t?.guildId)) return;
    let r = null == i && G.has(e);
    (!n || r) &&
        (s.h.dispatch({ type: "DCF_EVENT_LOGGED", eventType: c.r.DC_SHOW_REQUEST, dismissibleContent: e }),
        (0, h.oo)({
            content: e,
            groupName: t?.groupName,
            onAdded: () => {
                (0, _.rF)(e, t?.guildId), $(e, t), t?.onShown?.();
            },
        }));
}
function V(e, t) {
    ((0, h.dD)(e) || t.forceTrack) &&
        (function (e, t) {
            let [n] = (0, h.oF)(),
                i = f.A.getRenderedAtTimestamp(e),
                s = new Date(),
                a = null == i ? null : s.getTime() - i,
                o = t?.guildId != null ? j(e, t.guildId) : Y(e, t ?? {});
            l.default.track(A.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
                type: r.M[e],
                action: t?.dismissAction ?? g.i.UNKNOWN,
                content_count: n,
                group_name: t?.groupName,
                bypass_fatigue: d.C.has(e),
                guild_id: t?.guildId,
                shown_duration: a,
                version: t?.version,
                num_times_dismissed: o,
                snowflake_id: t?.snowflakeId,
            });
        })(e, t),
        (0, _.Xw)(e, t.guildId ?? void 0);
}
function B(e, t) {
    let n = !f.A.hasUserHitDCCap();
    (0, h.pd)({ content: e, groupName: t?.groupName }, n);
}
async function H(e, t) {
    let n = (0, m.c)(e);
    await W(e, n, t);
}
function j(e, t) {
    let n = o.A.getGuildDismissedContentState(t)?.[e];
    return (n?.numTimesDismissed ?? 0) + 1;
}
function Y(e, t) {
    if (null != t.numTimesDismissed) return t.numTimesDismissed;
    let n = o.A.settings.userContent?.recurringDismissibleContentStates[e];
    return (n?.numTimesDismissed ?? 0) + 1;
}
async function W(e, t, n) {
    let i = Y(e, n);
    V(e, n), await S(e, t, i), B(e, n);
}
async function K(e, t, n) {
    let i = Y(e, n);
    V(e, { ...n, snowflakeId: t }), await y(e, t, i), B(e, n);
}
async function z(e, t) {
    let n = Y(e, t);
    V(e, t), await N(e, n), B(e, t);
}
function $(e, t) {
    let [n, i] = (0, h.oF)();
    l.default.track(A.HAw.DISMISSIBLE_CONTENT_SHOWN, {
        type: r.M[e],
        content_count: n,
        fatigable_content_count: i,
        group_name: t?.groupName,
        bypass_fatigue: d.C.has(e),
        guild_id: t?.guildId,
        version: t?.version,
        snowflake_id: t?.snowflakeId,
    });
}

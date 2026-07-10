"use strict";
n.d(t, {
    $l: () => W,
    D4: () => x,
    D8: () => G,
    En: () => b,
    FZ: () => M,
    G4: () => y,
    J8: () => j,
    R2: () => O,
    Sx: () => H,
    Tg: () => g,
    Uu: () => C,
    Vh: () => F,
    Wx: () => $,
    X0: () => B,
    YV: () => V,
    bQ: () => S,
    cN: () => w,
    fb: () => v,
    gG: () => L,
    iC: () => U,
    j6: () => P,
    qr: () => Y,
    rZ: () => D,
    rw: () => m,
    ss: () => N,
    uh: () => K,
    wH: () => R,
});
var i = n(17928),
    r = n(554146),
    a = n(228366),
    s = n(594061),
    l = n(617617),
    o = n(174459),
    d = n(935208),
    c = n(105565),
    u = n(787925),
    _ = n(541689),
    E = n(199773),
    A = n(558845),
    h = n(256787),
    I = n(757792),
    f = n(853735),
    p = n(49999),
    T = n(652215);
let m = 2592e6;
function g(e) {
    let t = l.A.settings.userContent?.recurringDismissibleContentStates[e];
    return {
        lastDismissedVersion: (0, h.L0)(e) ? (0, f.c)(e) : 0,
        lastDismissedAtMs: new Date().getTime().toString(),
        lastDismissedObjectId: (0, h.IL)(e) ? d.default.fromTimestamp(Date.now() + m) : "0",
        numTimesDismissed: t?.numTimesDismissed ?? 0,
    };
}
function S(e, t, n) {
    return (0, s.$w)(e, {
        lastDismissedVersion: t,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function N(e, t) {
    return (0, s.$w)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: t,
    });
}
function C(e, t, n) {
    return (0, s.$w)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: n,
    });
}
function R(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !0,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function O(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function L(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function D(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function y(e, t, n, i) {
    return (0, s.xs)(e, n, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: i,
    });
}
function v(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function b(e, t) {
    if ((0, I.P3)(e)) return { isDismissed: !0, lastDismissedVersion: null };
    let n = l.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedVersion,
        i = t ?? (0, f.c)(e);
    return { isDismissed: null != n && n >= i, lastDismissedVersion: n };
}
function M(e, t) {
    if ((0, I.P3)(e)) return { isDismissed: !0, lastDismissedAtMs: null };
    let n = l.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedAtMs,
        i = null != n && "0" !== n ? (Number.isNaN(Number(n)) ? void 0 : Number(n)) : void 0;
    if (void 0 === i) return { isDismissed: !1, lastDismissedAtMs: void 0 };
    let r = !0;
    if (null != t) {
        let e = i + t.cooldownDurationMs,
            n = Date.now(),
            a = null == t.showAfterTimestamp || (n >= t.showAfterTimestamp && i <= t.showAfterTimestamp);
        r = n < e || !a;
    }
    return { isDismissed: r, lastDismissedAtMs: i };
}
function P(e, t, n) {
    if ((0, I.P3)(e)) return !0;
    let i = l.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedObjectId,
        r = l.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedAtMs,
        a = null != r && "0" !== r ? (Number.isNaN(Number(r)) ? void 0 : Number(r)) : void 0,
        s = !1;
    if (null != n && null != a) {
        let e = a + n.cooldownDurationMs,
            t = Date.now(),
            i = null == n.showAfterTimestamp || (t >= n.showAfterTimestamp && a <= n.showAfterTimestamp);
        s = t < e || !i;
    }
    let o = null != i && 1 !== d.default.compare(t, i);
    return s && o;
}
function U(e, t) {
    if ((0, I.P3)(e)) return !0;
    let n = l.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && !0 === n[e].dismissed;
}
function w(e, t) {
    return (0, i.bG)([l.A], () => null != e && U(e, t));
}
function G(e, t) {
    if ((0, I.P3)(e)) return !0;
    let n = l.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedAtMs && "0" !== n[e].lastDismissedAtMs;
}
function x(e, t) {
    if ((0, I.P3)(e)) return !0;
    let n = l.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedObjectId && "0" !== n[e].lastDismissedObjectId;
}
let k = new Set([r.M.ACCOUNT_LINK_INVITE_FRIENDS, r.M.ACCOUNT_LINK_PROMPT, r.M.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK]);
function F(e, t, n, i) {
    if ((0, A.dD)(e) || E.A.hasUserHitDCCap(e, t?.guildId)) return;
    let r = null == i && k.has(e);
    (!n || r) &&
        (a.h.dispatch({ type: "DCF_EVENT_LOGGED", eventType: c.r.DC_SHOW_REQUEST, dismissibleContent: e }),
        (0, A.oo)({
            content: e,
            groupName: t?.groupName,
            onAdded: () => {
                (0, _.rF)(e, t?.guildId), $(e, t), t?.onShown?.();
            },
        }));
}
function V(e, t) {
    ((0, A.dD)(e) || t.forceTrack) &&
        (function (e, t) {
            let [n] = (0, A.oF)(),
                i = E.A.getRenderedAtTimestamp(e),
                a = new Date(),
                s = null == i ? null : a.getTime() - i,
                l = t?.guildId != null ? H(e, t.guildId) : j(e, t ?? {});
            o.default.track(T.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
                type: r.M[e],
                action: t?.dismissAction ?? p.i.UNKNOWN,
                content_count: n,
                group_name: t?.groupName,
                bypass_fatigue: u.C.has(e),
                guild_id: t?.guildId,
                shown_duration: s,
                version: t?.version,
                num_times_dismissed: l,
                snowflake_id: t?.snowflakeId,
            });
        })(e, t),
        (0, _.Xw)(e, t.guildId ?? void 0);
}
function B(e, t) {
    let n = !E.A.hasUserHitDCCap();
    (0, A.pd)({ content: e, groupName: t?.groupName }, n);
}
function H(e, t) {
    let n = l.A.getGuildDismissedContentState(t)?.[e];
    return (n?.numTimesDismissed ?? 0) + 1;
}
function j(e, t) {
    if (null != t.numTimesDismissed) return t.numTimesDismissed;
    let n = l.A.settings.userContent?.recurringDismissibleContentStates[e];
    return (n?.numTimesDismissed ?? 0) + 1;
}
async function W(e, t, n) {
    let i = j(e, n);
    V(e, n), await S(e, t, i), B(e, n);
}
async function Y(e, t, n) {
    let i = j(e, n);
    V(e, { ...n, snowflakeId: t }), await C(e, t, i), B(e, n);
}
async function K(e, t) {
    let n = j(e, t);
    V(e, t), await N(e, n), B(e, t);
}
function $(e, t) {
    let [n, i] = (0, A.oF)();
    o.default.track(T.HAw.DISMISSIBLE_CONTENT_SHOWN, {
        type: r.M[e],
        content_count: n,
        fatigable_content_count: i,
        group_name: t?.groupName,
        bypass_fatigue: u.C.has(e),
        guild_id: t?.guildId,
        version: t?.version,
        snowflake_id: t?.snowflakeId,
    });
}

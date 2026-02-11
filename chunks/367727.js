"use strict";
n.d(t, {
    $l: () => $,
    D4: () => F,
    D8: () => G,
    En: () => x,
    FZ: () => P,
    G4: () => L,
    J8: () => K,
    R2: () => R,
    Sx: () => W,
    Tg: () => S,
    Uu: () => b,
    Vh: () => B,
    X0: () => H,
    YV: () => j,
    bQ: () => v,
    cN: () => U,
    d6: () => Y,
    fb: () => w,
    gG: () => O,
    iC: () => k,
    j6: () => M,
    qr: () => z,
    rZ: () => D,
    rw: () => y,
    ss: () => C,
    uh: () => q,
    wH: () => N,
});
var r = n(311907),
    i = n(554146),
    a = n(73153),
    s = n(594061),
    o = n(617617),
    l = n(954571),
    u = n(661191),
    c = n(105565),
    d = n(497816),
    _ = n(787925),
    f = n(541689),
    h = n(199773),
    p = n(771781),
    g = n(256787),
    E = n(757792),
    A = n(357186),
    I = n(49999),
    T = n(652215);
let y = 2592e6;
function S(e) {
    let t = o.A.settings.userContent?.recurringDismissibleContentStates[e];
    return {
        lastDismissedVersion: (0, g.L0)(e) ? (0, A.c)(e) : 0,
        lastDismissedAtMs: new Date().getTime().toString(),
        lastDismissedObjectId: (0, g.IL)(e) ? u.default.fromTimestamp(Date.now() + y) : "0",
        numTimesDismissed: t?.numTimesDismissed ?? 0,
    };
}
function v(e, t, n) {
    return (0, s.$w)(e, {
        lastDismissedVersion: t,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function C(e, t) {
    return (0, s.$w)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: t,
    });
}
function b(e, t, n) {
    return (0, s.$w)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: n,
    });
}
function N(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !0,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function R(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !1,
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
function D(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function L(e, t, n, r) {
    return (0, s.xs)(e, n, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: r,
    });
}
function w(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function x(e, t) {
    if ((0, E.P3)(e)) return { isDismissed: !0, lastDismissedVersion: null };
    let n = o.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedVersion,
        r = t ?? (0, A.c)(e);
    return { isDismissed: null != n && n >= r, lastDismissedVersion: n };
}
function P(e, t) {
    if ((0, E.P3)(e)) return { isDismissed: !0, lastDismissedAtMs: null };
    let n = o.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedAtMs,
        r = null != n && "0" !== n ? (Number.isNaN(Number(n)) ? void 0 : Number(n)) : void 0;
    if (void 0 === r) return { isDismissed: !1, lastDismissedAtMs: void 0 };
    let i = !0;
    if (null != t) {
        let e = r + t.cooldownDurationMs,
            n = Date.now(),
            a = null == t.showAfterTimestamp || (n >= t.showAfterTimestamp && r <= t.showAfterTimestamp);
        i = n < e || !a;
    }
    return { isDismissed: i, lastDismissedAtMs: r };
}
function M(e, t, n) {
    if ((0, E.P3)(e)) return !0;
    let r = o.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedObjectId,
        i = o.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedAtMs,
        a = null != i && "0" !== i ? (Number.isNaN(Number(i)) ? void 0 : Number(i)) : void 0,
        s = !1;
    if (null != n && null != a) {
        let e = a + n.cooldownDurationMs,
            t = Date.now(),
            r = null == n.showAfterTimestamp || (t >= n.showAfterTimestamp && a <= n.showAfterTimestamp);
        s = t < e || !r;
    }
    let l = null != r && 1 !== u.default.compare(t, r);
    return s && l;
}
function k(e, t) {
    if ((0, E.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && !0 === n[e].dismissed;
}
function U(e, t) {
    return (0, r.bG)([o.A], () => k(e, t));
}
function G(e, t) {
    if ((0, E.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedAtMs && "0" !== n[e].lastDismissedAtMs;
}
function F(e, t) {
    if ((0, E.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedObjectId && "0" !== n[e].lastDismissedObjectId;
}
let V = new Set([i.M.ACCOUNT_LINK_INVITE_FRIENDS, i.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER, i.M.ACCOUNT_LINK_PROMPT]);
function B(e, t, n, r) {
    if ((0, p.dD)(e) || h.A.hasUserHitDCCap(e, t?.guildId)) return;
    let s = d.A.getConfig({ location: "requestMarkDismissibleContentAsShown" }).enabled && null == r && V.has(e);
    (!n || s) &&
        (a.h.dispatch({ type: "DCF_EVENT_LOGGED", eventType: c.r.DC_SHOW_REQUEST, dismissibleContent: e }),
        (0, p.oo)({
            content: e,
            groupName: t?.groupName,
            onAdded: () => {
                let [n, r] = (0, p.oF)();
                (0, f.rF)(e, t?.guildId),
                    l.default.track(T.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                        type: i.M[e],
                        content_count: n,
                        fatigable_content_count: r,
                        group_name: t?.groupName,
                        bypass_fatigue: _.C.has(e),
                        guild_id: t?.guildId,
                        version: t?.version,
                    }),
                    t?.onShown?.();
            },
        }));
}
function j(e, t) {
    ((0, p.dD)(e) || t.forceTrack) && X(e, t), (0, f.Xw)(e);
}
function H(e, t) {
    let n = !h.A.hasUserHitDCCap();
    (0, p.pd)({ content: e, groupName: t?.groupName }, n);
}
async function Y(e, t) {
    let n = (0, A.c)(e);
    await $(e, n, t);
}
function W(e, t) {
    let n = o.A.getGuildDismissedContentState(t)?.[e];
    return (n?.numTimesDismissed ?? 0) + 1;
}
function K(e, t) {
    if (null != t.numTimesDismissed) return t.numTimesDismissed;
    let n = o.A.settings.userContent?.recurringDismissibleContentStates[e];
    return (n?.numTimesDismissed ?? 0) + 1;
}
async function $(e, t, n) {
    let r = K(e, n);
    j(e, n), await v(e, t, r), H(e, n);
}
async function z(e, t, n) {
    let r = K(e, n);
    j(e, n), await b(e, t, r), H(e, n);
}
async function q(e, t) {
    let n = K(e, t);
    j(e, t), await C(e, n), H(e, t);
}
function X(e, t) {
    let [n] = (0, p.oF)(),
        r = h.A.getRenderedAtTimestamp(e),
        a = new Date(),
        s = null == r ? null : a.getTime() - r,
        o = t?.guildId != null ? W(e, t.guildId) : K(e, t ?? {});
    l.default.track(T.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
        type: i.M[e],
        action: t?.dismissAction ?? I.i.UNKNOWN,
        content_count: n,
        group_name: t?.groupName,
        bypass_fatigue: _.C.has(e),
        guild_id: t?.guildId,
        shown_duration: s,
        version: t?.version,
        num_times_dismissed: o,
    });
}

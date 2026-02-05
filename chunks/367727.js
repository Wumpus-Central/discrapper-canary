"use strict";
n.d(t, {
    $l: () => W,
    D4: () => G,
    D8: () => U,
    En: () => w,
    FZ: () => x,
    G4: () => D,
    J8: () => Y,
    R2: () => N,
    Sx: () => H,
    Tg: () => y,
    Uu: () => C,
    Vh: () => F,
    X0: () => j,
    YV: () => B,
    bQ: () => S,
    cN: () => k,
    fb: () => L,
    gG: () => R,
    iC: () => M,
    j6: () => P,
    qr: () => K,
    rZ: () => O,
    rw: () => T,
    ss: () => v,
    uh: () => z,
    wH: () => b,
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
    p = n(199773),
    h = n(771781),
    m = n(256787),
    g = n(757792),
    E = n(357186),
    A = n(49999),
    I = n(652215);
let T = 2592e6;
function y(e) {
    let t = o.A.settings.userContent?.recurringDismissibleContentStates[e];
    return {
        lastDismissedVersion: (0, m.L0)(e) ? (0, E.c)(e) : 0,
        lastDismissedAtMs: new Date().getTime().toString(),
        lastDismissedObjectId: (0, m.IL)(e) ? u.default.fromTimestamp(Date.now() + T) : "0",
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
function v(e, t) {
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
function b(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !0,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function N(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !1,
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
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function D(e, t, n, r) {
    return (0, s.xs)(e, n, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: r,
    });
}
function L(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function w(e, t) {
    if ((0, g.P3)(e)) return { isDismissed: !0, lastDismissedVersion: null };
    let n = o.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedVersion,
        r = t ?? (0, E.c)(e);
    return { isDismissed: null != n && n >= r, lastDismissedVersion: n };
}
function x(e, t) {
    if ((0, g.P3)(e)) return { isDismissed: !0, lastDismissedAtMs: null };
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
function P(e, t, n) {
    if ((0, g.P3)(e)) return !0;
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
function M(e, t) {
    if ((0, g.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && !0 === n[e].dismissed;
}
function k(e, t) {
    return (0, r.bG)([o.A], () => M(e, t));
}
function U(e, t) {
    if ((0, g.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedAtMs && "0" !== n[e].lastDismissedAtMs;
}
function G(e, t) {
    if ((0, g.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedObjectId && "0" !== n[e].lastDismissedObjectId;
}
let V = new Set([i.M.ACCOUNT_LINK_INVITE_FRIENDS, i.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER, i.M.ACCOUNT_LINK_PROMPT]);
function F(e, t, n, r) {
    if ((0, h.dD)(e) || p.A.hasUserHitDCCap(e, t?.guildId)) return;
    let s = d.A.getConfig({ location: "requestMarkDismissibleContentAsShown" }).enabled && null == r && V.has(e);
    (!n || s) &&
        (a.h.dispatch({ type: "DCF_EVENT_LOGGED", eventType: c.r.DC_SHOW_REQUEST, dismissibleContent: e }),
        (0, h.oo)({
            content: e,
            groupName: t?.groupName,
            onAdded: () => {
                let [n, r] = (0, h.oF)();
                (0, f.rF)(e, t?.guildId),
                    l.default.track(I.HAw.DISMISSIBLE_CONTENT_SHOWN, {
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
function B(e, t) {
    ((0, h.dD)(e) || t.forceTrack) && $(e, t), (0, f.Xw)(e);
}
function j(e, t) {
    let n = !p.A.hasUserHitDCCap();
    (0, h.pd)({ content: e, groupName: t?.groupName }, n);
}
function H(e, t) {
    let n = o.A.getGuildDismissedContentState(t)?.[e];
    return (n?.numTimesDismissed ?? 0) + 1;
}
function Y(e, t) {
    if (null != t.numTimesDismissed) return t.numTimesDismissed;
    let n = o.A.settings.userContent?.recurringDismissibleContentStates[e];
    return (n?.numTimesDismissed ?? 0) + 1;
}
async function W(e, t, n) {
    let r = Y(e, n);
    B(e, n), await S(e, t, r), j(e, n);
}
async function K(e, t, n) {
    let r = Y(e, n);
    B(e, n), await C(e, t, r), j(e, n);
}
async function z(e, t) {
    let n = Y(e, t);
    B(e, t), await v(e, n), j(e, t);
}
function $(e, t) {
    let [n] = (0, h.oF)(),
        r = p.A.getRenderedAtTimestamp(e),
        a = new Date(),
        s = null == r ? null : a.getTime() - r,
        o = t?.guildId != null ? H(e, t.guildId) : Y(e, t ?? {});
    l.default.track(I.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
        type: i.M[e],
        action: t?.dismissAction ?? A.i.UNKNOWN,
        content_count: n,
        group_name: t?.groupName,
        bypass_fatigue: _.C.has(e),
        guild_id: t?.guildId,
        shown_duration: s,
        version: t?.version,
        num_times_dismissed: o,
    });
}

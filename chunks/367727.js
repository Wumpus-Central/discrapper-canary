"use strict";
n.d(t, {
    $l: () => K,
    D4: () => G,
    D8: () => U,
    En: () => w,
    FZ: () => M,
    G4: () => D,
    J8: () => W,
    R2: () => R,
    Sx: () => Y,
    Tg: () => S,
    Uu: () => N,
    Vh: () => V,
    Wx: () => q,
    X0: () => H,
    YV: () => B,
    bQ: () => y,
    cN: () => k,
    d6: () => j,
    fb: () => L,
    gG: () => O,
    iC: () => x,
    j6: () => P,
    qr: () => $,
    rZ: () => b,
    rw: () => T,
    ss: () => v,
    uh: () => z,
    wH: () => C,
});
var r = n(311907),
    i = n(554146),
    s = n(73153),
    a = n(594061),
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
    E = n(757792),
    g = n(357186),
    A = n(49999),
    I = n(652215);
let T = 2592e6;
function S(e) {
    let t = o.A.settings.userContent?.recurringDismissibleContentStates[e];
    return {
        lastDismissedVersion: (0, m.L0)(e) ? (0, g.c)(e) : 0,
        lastDismissedAtMs: new Date().getTime().toString(),
        lastDismissedObjectId: (0, m.IL)(e) ? u.default.fromTimestamp(Date.now() + T) : "0",
        numTimesDismissed: t?.numTimesDismissed ?? 0,
    };
}
function y(e, t, n) {
    return (0, a.$w)(e, {
        lastDismissedVersion: t,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function v(e, t) {
    return (0, a.$w)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: t,
    });
}
function N(e, t, n) {
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
function R(e, t, n) {
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
function b(e, t, n) {
    return (0, a.xs)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function D(e, t, n, r) {
    return (0, a.xs)(e, n, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: r,
    });
}
function L(e, t, n) {
    return (0, a.xs)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function w(e, t) {
    if ((0, E.P3)(e)) return { isDismissed: !0, lastDismissedVersion: null };
    let n = o.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedVersion,
        r = t ?? (0, g.c)(e);
    return { isDismissed: null != n && n >= r, lastDismissedVersion: n };
}
function M(e, t) {
    if ((0, E.P3)(e)) return { isDismissed: !0, lastDismissedAtMs: null };
    let n = o.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedAtMs,
        r = null != n && "0" !== n ? (Number.isNaN(Number(n)) ? void 0 : Number(n)) : void 0;
    if (void 0 === r) return { isDismissed: !1, lastDismissedAtMs: void 0 };
    let i = !0;
    if (null != t) {
        let e = r + t.cooldownDurationMs,
            n = Date.now(),
            s = null == t.showAfterTimestamp || (n >= t.showAfterTimestamp && r <= t.showAfterTimestamp);
        i = n < e || !s;
    }
    return { isDismissed: i, lastDismissedAtMs: r };
}
function P(e, t, n) {
    if ((0, E.P3)(e)) return !0;
    let r = o.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedObjectId,
        i = o.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedAtMs,
        s = null != i && "0" !== i ? (Number.isNaN(Number(i)) ? void 0 : Number(i)) : void 0,
        a = !1;
    if (null != n && null != s) {
        let e = s + n.cooldownDurationMs,
            t = Date.now(),
            r = null == n.showAfterTimestamp || (t >= n.showAfterTimestamp && s <= n.showAfterTimestamp);
        a = t < e || !r;
    }
    let l = null != r && 1 !== u.default.compare(t, r);
    return a && l;
}
function x(e, t) {
    if ((0, E.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && !0 === n[e].dismissed;
}
function k(e, t) {
    return (0, r.bG)([o.A], () => x(e, t));
}
function U(e, t) {
    if ((0, E.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedAtMs && "0" !== n[e].lastDismissedAtMs;
}
function G(e, t) {
    if ((0, E.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedObjectId && "0" !== n[e].lastDismissedObjectId;
}
let F = new Set([i.M.ACCOUNT_LINK_INVITE_FRIENDS, i.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER, i.M.ACCOUNT_LINK_PROMPT]);
function V(e, t, n, r) {
    if ((0, h.dD)(e) || p.A.hasUserHitDCCap(e, t?.guildId)) return;
    let i = d.A.getConfig({ location: "requestMarkDismissibleContentAsShown" }).enabled && null == r && F.has(e);
    (!n || i) &&
        (s.h.dispatch({ type: "DCF_EVENT_LOGGED", eventType: c.r.DC_SHOW_REQUEST, dismissibleContent: e }),
        (0, h.oo)({
            content: e,
            groupName: t?.groupName,
            onAdded: () => {
                (0, f.rF)(e, t?.guildId), q(e, t), t?.onShown?.();
            },
        }));
}
function B(e, t) {
    ((0, h.dD)(e) || t.forceTrack) && Z(e, t), (0, f.Xw)(e, t.guildId ?? void 0);
}
function H(e, t) {
    let n = !p.A.hasUserHitDCCap();
    (0, h.pd)({ content: e, groupName: t?.groupName }, n);
}
async function j(e, t) {
    let n = (0, g.c)(e);
    await K(e, n, t);
}
function Y(e, t) {
    let n = o.A.getGuildDismissedContentState(t)?.[e];
    return (n?.numTimesDismissed ?? 0) + 1;
}
function W(e, t) {
    if (null != t.numTimesDismissed) return t.numTimesDismissed;
    let n = o.A.settings.userContent?.recurringDismissibleContentStates[e];
    return (n?.numTimesDismissed ?? 0) + 1;
}
async function K(e, t, n) {
    let r = W(e, n);
    B(e, n), await y(e, t, r), H(e, n);
}
async function $(e, t, n) {
    let r = W(e, n);
    B(e, n), await N(e, t, r), H(e, n);
}
async function z(e, t) {
    let n = W(e, t);
    B(e, t), await v(e, n), H(e, t);
}
function q(e, t) {
    let [n, r] = (0, h.oF)();
    l.default.track(I.HAw.DISMISSIBLE_CONTENT_SHOWN, {
        type: i.M[e],
        content_count: n,
        fatigable_content_count: r,
        group_name: t?.groupName,
        bypass_fatigue: _.C.has(e),
        guild_id: t?.guildId,
        version: t?.version,
    });
}
function Z(e, t) {
    let [n] = (0, h.oF)(),
        r = p.A.getRenderedAtTimestamp(e),
        s = new Date(),
        a = null == r ? null : s.getTime() - r,
        o = t?.guildId != null ? Y(e, t.guildId) : W(e, t ?? {});
    l.default.track(I.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
        type: i.M[e],
        action: t?.dismissAction ?? A.i.UNKNOWN,
        content_count: n,
        group_name: t?.groupName,
        bypass_fatigue: _.C.has(e),
        guild_id: t?.guildId,
        shown_duration: a,
        version: t?.version,
        num_times_dismissed: o,
    });
}

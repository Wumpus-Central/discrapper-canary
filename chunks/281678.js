"use strict";
n.d(t, {
    FZ: () => M,
    fb: () => L,
    rw: () => T,
    D4: () => G,
    iC: () => x,
    ss: () => y,
    Tg: () => S,
    j6: () => P,
    D8: () => k,
    R2: () => O,
    X0: () => H,
    YV: () => B,
    bQ: () => N,
    Sx: () => Y,
    d6: () => j,
    $l: () => K,
    Vh: () => V,
    Wx: () => q,
    Uu: () => C,
    cN: () => U,
    En: () => w,
    uh: () => $,
    gG: () => R,
    qr: () => z,
    G4: () => D,
    wH: () => v,
    rZ: () => b,
    J8: () => W,
});
var i = n(17928),
    r = n(554146),
    s = n(228366),
    a = n(594061),
    o = n(617617),
    l = n(174459),
    u = n(935208),
    c = n(105565);
let d = (0, n(945810).mj)({
    name: "2025-09-dcf-overlay-lock-bypass",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var _ = n(787925),
    f = n(541689),
    h = n(199773),
    p = n(558845),
    E = n(256787),
    m = n(757792),
    g = n(853735),
    A = n(49999),
    I = n(652215);
let T = 2592e6;
function S(e) {
    let t = o.A.settings.userContent?.recurringDismissibleContentStates[e];
    return {
        lastDismissedVersion: (0, E.L0)(e) ? (0, g.c)(e) : 0,
        lastDismissedAtMs: new Date().getTime().toString(),
        lastDismissedObjectId: (0, E.IL)(e) ? u.default.fromTimestamp(Date.now() + T) : "0",
        numTimesDismissed: t?.numTimesDismissed ?? 0,
    };
}
function N(e, t, n) {
    return (0, a.$w)(e, {
        lastDismissedVersion: t,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function y(e, t) {
    return (0, a.$w)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: t,
    });
}
function C(e, t, n) {
    return (0, a.$w)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: n,
    });
}
function v(e, t, n) {
    return (0, a.xs)(e, t, {
        dismissed: !0,
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
function D(e, t, n, i) {
    return (0, a.xs)(e, n, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: i,
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
    if ((0, m.P3)(e)) return { isDismissed: !0, lastDismissedVersion: null };
    let n = o.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedVersion,
        i = t ?? (0, g.c)(e);
    return { isDismissed: null != n && n >= i, lastDismissedVersion: n };
}
function M(e, t) {
    if ((0, m.P3)(e)) return { isDismissed: !0, lastDismissedAtMs: null };
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
function P(e, t, n) {
    if ((0, m.P3)(e)) return !0;
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
function x(e, t) {
    if ((0, m.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && !0 === n[e].dismissed;
}
function U(e, t) {
    return (0, i.bG)([o.A], () => x(e, t));
}
function k(e, t) {
    if ((0, m.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedAtMs && "0" !== n[e].lastDismissedAtMs;
}
function G(e, t) {
    if ((0, m.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedObjectId && "0" !== n[e].lastDismissedObjectId;
}
let F = new Set([r.M.ACCOUNT_LINK_INVITE_FRIENDS, r.M.ACCOUNT_LINK_PROMPT]);
function V(e, t, n, i) {
    if ((0, p.dD)(e) || h.A.hasUserHitDCCap(e, t?.guildId)) return;
    let r = d.getConfig({ location: "requestMarkDismissibleContentAsShown" }).enabled && null == i && F.has(e);
    (!n || r) &&
        (s.h.dispatch({ type: "DCF_EVENT_LOGGED", eventType: c.r.DC_SHOW_REQUEST, dismissibleContent: e }),
        (0, p.oo)({
            content: e,
            groupName: t?.groupName,
            onAdded: () => {
                (0, f.rF)(e, t?.guildId), q(e, t), t?.onShown?.();
            },
        }));
}
function B(e, t) {
    ((0, p.dD)(e) || t.forceTrack) &&
        (function (e, t) {
            let [n] = (0, p.oF)(),
                i = h.A.getRenderedAtTimestamp(e),
                s = new Date(),
                a = null == i ? null : s.getTime() - i,
                o = t?.guildId != null ? Y(e, t.guildId) : W(e, t ?? {});
            l.default.track(I.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
                type: r.M[e],
                action: t?.dismissAction ?? A.i.UNKNOWN,
                content_count: n,
                group_name: t?.groupName,
                bypass_fatigue: _.C.has(e),
                guild_id: t?.guildId,
                shown_duration: a,
                version: t?.version,
                num_times_dismissed: o,
            });
        })(e, t),
        (0, f.Xw)(e, t.guildId ?? void 0);
}
function H(e, t) {
    let n = !h.A.hasUserHitDCCap();
    (0, p.pd)({ content: e, groupName: t?.groupName }, n);
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
    let i = W(e, n);
    B(e, n), await N(e, t, i), H(e, n);
}
async function z(e, t, n) {
    let i = W(e, n);
    B(e, n), await C(e, t, i), H(e, n);
}
async function $(e, t) {
    let n = W(e, t);
    B(e, t), await y(e, n), H(e, t);
}
function q(e, t) {
    let [n, i] = (0, p.oF)();
    l.default.track(I.HAw.DISMISSIBLE_CONTENT_SHOWN, {
        type: r.M[e],
        content_count: n,
        fatigable_content_count: i,
        group_name: t?.groupName,
        bypass_fatigue: _.C.has(e),
        guild_id: t?.guildId,
        version: t?.version,
    });
}

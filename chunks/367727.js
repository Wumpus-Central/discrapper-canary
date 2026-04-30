n.d(t, {
    $l: () => K,
    D4: () => V,
    D8: () => x,
    En: () => U,
    FZ: () => v,
    G4: () => M,
    J8: () => W,
    R2: () => L,
    Sx: () => Y,
    Tg: () => m,
    Uu: () => R,
    Vh: () => F,
    Wx: () => q,
    X0: () => H,
    YV: () => k,
    bQ: () => O,
    cN: () => w,
    d6: () => j,
    fb: () => P,
    gG: () => D,
    iC: () => G,
    j6: () => y,
    qr: () => $,
    rZ: () => b,
    rw: () => p,
    ss: () => C,
    uh: () => Z,
    wH: () => g,
});
var i = n(17928),
    a = n(554146),
    r = n(228366),
    s = n(594061),
    l = n(617617),
    o = n(954571),
    d = n(935208),
    c = n(105565),
    _ = n(497816),
    E = n(787925),
    u = n(541689),
    A = n(199773),
    I = n(771781),
    T = n(256787),
    h = n(757792),
    S = n(853735),
    N = n(49999),
    f = n(652215);
let p = 2592e6;
function m(e) {
    let t = l.A.settings.userContent?.recurringDismissibleContentStates[e];
    return {
        lastDismissedVersion: (0, T.L0)(e) ? (0, S.c)(e) : 0,
        lastDismissedAtMs: new Date().getTime().toString(),
        lastDismissedObjectId: (0, T.IL)(e) ? d.default.fromTimestamp(Date.now() + p) : "0",
        numTimesDismissed: t?.numTimesDismissed ?? 0,
    };
}
function O(e, t, n) {
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
function R(e, t, n) {
    return (0, s.$w)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: n,
    });
}
function g(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !0,
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
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function b(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function M(e, t, n, i) {
    return (0, s.xs)(e, n, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: i,
    });
}
function P(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function U(e, t) {
    if ((0, h.P3)(e)) return { isDismissed: !0, lastDismissedVersion: null };
    let n = l.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedVersion,
        i = t ?? (0, S.c)(e);
    return { isDismissed: null != n && n >= i, lastDismissedVersion: n };
}
function v(e, t) {
    if ((0, h.P3)(e)) return { isDismissed: !0, lastDismissedAtMs: null };
    let n = l.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedAtMs,
        i = null != n && "0" !== n ? (Number.isNaN(Number(n)) ? void 0 : Number(n)) : void 0;
    if (void 0 === i) return { isDismissed: !1, lastDismissedAtMs: void 0 };
    let a = !0;
    if (null != t) {
        let e = i + t.cooldownDurationMs,
            n = Date.now(),
            r = null == t.showAfterTimestamp || (n >= t.showAfterTimestamp && i <= t.showAfterTimestamp);
        a = n < e || !r;
    }
    return { isDismissed: a, lastDismissedAtMs: i };
}
function y(e, t, n) {
    if ((0, h.P3)(e)) return !0;
    let i = l.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedObjectId,
        a = l.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedAtMs,
        r = null != a && "0" !== a ? (Number.isNaN(Number(a)) ? void 0 : Number(a)) : void 0,
        s = !1;
    if (null != n && null != r) {
        let e = r + n.cooldownDurationMs,
            t = Date.now(),
            i = null == n.showAfterTimestamp || (t >= n.showAfterTimestamp && r <= n.showAfterTimestamp);
        s = t < e || !i;
    }
    let o = null != i && 1 !== d.default.compare(t, i);
    return s && o;
}
function G(e, t) {
    if ((0, h.P3)(e)) return !0;
    let n = l.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && !0 === n[e].dismissed;
}
function w(e, t) {
    return (0, i.bG)([l.A], () => G(e, t));
}
function x(e, t) {
    if ((0, h.P3)(e)) return !0;
    let n = l.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedAtMs && "0" !== n[e].lastDismissedAtMs;
}
function V(e, t) {
    if ((0, h.P3)(e)) return !0;
    let n = l.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedObjectId && "0" !== n[e].lastDismissedObjectId;
}
let B = new Set([a.M.ACCOUNT_LINK_INVITE_FRIENDS, a.M.ACCOUNT_LINK_PROMPT]);
function F(e, t, n, i) {
    if ((0, I.dD)(e) || A.A.hasUserHitDCCap(e, t?.guildId)) return;
    let a = _.A.getConfig({ location: "requestMarkDismissibleContentAsShown" }).enabled && null == i && B.has(e);
    (!n || a) &&
        (r.h.dispatch({ type: "DCF_EVENT_LOGGED", eventType: c.r.DC_SHOW_REQUEST, dismissibleContent: e }),
        (0, I.oo)({
            content: e,
            groupName: t?.groupName,
            onAdded: () => {
                (0, u.rF)(e, t?.guildId), q(e, t), t?.onShown?.();
            },
        }));
}
function k(e, t) {
    ((0, I.dD)(e) || t.forceTrack) &&
        (function (e, t) {
            let [n] = (0, I.oF)(),
                i = A.A.getRenderedAtTimestamp(e),
                r = new Date(),
                s = null == i ? null : r.getTime() - i,
                l = t?.guildId != null ? Y(e, t.guildId) : W(e, t ?? {});
            o.default.track(f.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
                type: a.M[e],
                action: t?.dismissAction ?? N.i.UNKNOWN,
                content_count: n,
                group_name: t?.groupName,
                bypass_fatigue: E.C.has(e),
                guild_id: t?.guildId,
                shown_duration: s,
                version: t?.version,
                num_times_dismissed: l,
            });
        })(e, t),
        (0, u.Xw)(e, t.guildId ?? void 0);
}
function H(e, t) {
    let n = !A.A.hasUserHitDCCap();
    (0, I.pd)({ content: e, groupName: t?.groupName }, n);
}
async function j(e, t) {
    let n = (0, S.c)(e);
    await K(e, n, t);
}
function Y(e, t) {
    let n = l.A.getGuildDismissedContentState(t)?.[e];
    return (n?.numTimesDismissed ?? 0) + 1;
}
function W(e, t) {
    if (null != t.numTimesDismissed) return t.numTimesDismissed;
    let n = l.A.settings.userContent?.recurringDismissibleContentStates[e];
    return (n?.numTimesDismissed ?? 0) + 1;
}
async function K(e, t, n) {
    let i = W(e, n);
    k(e, n), await O(e, t, i), H(e, n);
}
async function $(e, t, n) {
    let i = W(e, n);
    k(e, n), await R(e, t, i), H(e, n);
}
async function Z(e, t) {
    let n = W(e, t);
    k(e, t), await C(e, n), H(e, t);
}
function q(e, t) {
    let [n, i] = (0, I.oF)();
    o.default.track(f.HAw.DISMISSIBLE_CONTENT_SHOWN, {
        type: a.M[e],
        content_count: n,
        fatigable_content_count: i,
        group_name: t?.groupName,
        bypass_fatigue: E.C.has(e),
        guild_id: t?.guildId,
        version: t?.version,
    });
}

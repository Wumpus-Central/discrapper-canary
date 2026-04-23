n.d(t, {
    $l: () => K,
    D4: () => F,
    D8: () => w,
    En: () => M,
    FZ: () => y,
    G4: () => U,
    J8: () => j,
    R2: () => h,
    Sx: () => Y,
    Tg: () => C,
    Uu: () => L,
    Vh: () => H,
    Wx: () => q,
    X0: () => x,
    YV: () => k,
    bQ: () => p,
    cN: () => B,
    d6: () => W,
    fb: () => P,
    gG: () => g,
    iC: () => v,
    j6: () => G,
    qr: () => $,
    rZ: () => b,
    rw: () => f,
    ss: () => m,
    uh: () => Q,
    wH: () => D,
});
var i = n(17928),
    r = n(554146),
    a = n(228366),
    s = n(594061),
    _ = n(617617),
    l = n(954571),
    o = n(935208),
    E = n(105565),
    d = n(497816),
    c = n(787925),
    u = n(541689),
    I = n(199773),
    A = n(771781),
    T = n(256787),
    S = n(757792),
    N = n(853735),
    O = n(49999),
    R = n(652215);
let f = 2592e6;
function C(e) {
    let t = _.A.settings.userContent?.recurringDismissibleContentStates[e];
    return {
        lastDismissedVersion: (0, T.L0)(e) ? (0, N.c)(e) : 0,
        lastDismissedAtMs: new Date().getTime().toString(),
        lastDismissedObjectId: (0, T.IL)(e) ? o.default.fromTimestamp(Date.now() + f) : "0",
        numTimesDismissed: t?.numTimesDismissed ?? 0,
    };
}
function p(e, t, n) {
    return (0, s.$w)(e, {
        lastDismissedVersion: t,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function m(e, t) {
    return (0, s.$w)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: t,
    });
}
function L(e, t, n) {
    return (0, s.$w)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: n,
    });
}
function D(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !0,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function h(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function g(e, t, n) {
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
function U(e, t, n, i) {
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
function M(e, t) {
    if ((0, S.P3)(e)) return { isDismissed: !0, lastDismissedVersion: null };
    let n = _.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedVersion,
        i = t ?? (0, N.c)(e);
    return { isDismissed: null != n && n >= i, lastDismissedVersion: n };
}
function y(e, t) {
    if ((0, S.P3)(e)) return { isDismissed: !0, lastDismissedAtMs: null };
    let n = _.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedAtMs,
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
function G(e, t, n) {
    if ((0, S.P3)(e)) return !0;
    let i = _.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedObjectId,
        r = _.A.settings.userContent?.recurringDismissibleContentStates[e]?.lastDismissedAtMs,
        a = null != r && "0" !== r ? (Number.isNaN(Number(r)) ? void 0 : Number(r)) : void 0,
        s = !1;
    if (null != n && null != a) {
        let e = a + n.cooldownDurationMs,
            t = Date.now(),
            i = null == n.showAfterTimestamp || (t >= n.showAfterTimestamp && a <= n.showAfterTimestamp);
        s = t < e || !i;
    }
    let l = null != i && 1 !== o.default.compare(t, i);
    return s && l;
}
function v(e, t) {
    if ((0, S.P3)(e)) return !0;
    let n = _.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && !0 === n[e].dismissed;
}
function B(e, t) {
    return (0, i.bG)([_.A], () => v(e, t));
}
function w(e, t) {
    if ((0, S.P3)(e)) return !0;
    let n = _.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedAtMs && "0" !== n[e].lastDismissedAtMs;
}
function F(e, t) {
    if ((0, S.P3)(e)) return !0;
    let n = _.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedObjectId && "0" !== n[e].lastDismissedObjectId;
}
let V = new Set([r.M.ACCOUNT_LINK_INVITE_FRIENDS, r.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER, r.M.ACCOUNT_LINK_PROMPT]);
function H(e, t, n, i) {
    if ((0, A.dD)(e) || I.A.hasUserHitDCCap(e, t?.guildId)) return;
    let r = d.A.getConfig({ location: "requestMarkDismissibleContentAsShown" }).enabled && null == i && V.has(e);
    (!n || r) &&
        (a.h.dispatch({ type: "DCF_EVENT_LOGGED", eventType: E.r.DC_SHOW_REQUEST, dismissibleContent: e }),
        (0, A.oo)({
            content: e,
            groupName: t?.groupName,
            onAdded: () => {
                (0, u.rF)(e, t?.guildId), q(e, t), t?.onShown?.();
            },
        }));
}
function k(e, t) {
    ((0, A.dD)(e) || t.forceTrack) &&
        (function (e, t) {
            let [n] = (0, A.oF)(),
                i = I.A.getRenderedAtTimestamp(e),
                a = new Date(),
                s = null == i ? null : a.getTime() - i,
                _ = t?.guildId != null ? Y(e, t.guildId) : j(e, t ?? {});
            l.default.track(R.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
                type: r.M[e],
                action: t?.dismissAction ?? O.i.UNKNOWN,
                content_count: n,
                group_name: t?.groupName,
                bypass_fatigue: c.C.has(e),
                guild_id: t?.guildId,
                shown_duration: s,
                version: t?.version,
                num_times_dismissed: _,
            });
        })(e, t),
        (0, u.Xw)(e, t.guildId ?? void 0);
}
function x(e, t) {
    let n = !I.A.hasUserHitDCCap();
    (0, A.pd)({ content: e, groupName: t?.groupName }, n);
}
async function W(e, t) {
    let n = (0, N.c)(e);
    await K(e, n, t);
}
function Y(e, t) {
    let n = _.A.getGuildDismissedContentState(t)?.[e];
    return (n?.numTimesDismissed ?? 0) + 1;
}
function j(e, t) {
    if (null != t.numTimesDismissed) return t.numTimesDismissed;
    let n = _.A.settings.userContent?.recurringDismissibleContentStates[e];
    return (n?.numTimesDismissed ?? 0) + 1;
}
async function K(e, t, n) {
    let i = j(e, n);
    k(e, n), await p(e, t, i), x(e, n);
}
async function $(e, t, n) {
    let i = j(e, n);
    k(e, n), await L(e, t, i), x(e, n);
}
async function Q(e, t) {
    let n = j(e, t);
    k(e, t), await m(e, n), x(e, t);
}
function q(e, t) {
    let [n, i] = (0, A.oF)();
    l.default.track(R.HAw.DISMISSIBLE_CONTENT_SHOWN, {
        type: r.M[e],
        content_count: n,
        fatigable_content_count: i,
        group_name: t?.groupName,
        bypass_fatigue: c.C.has(e),
        guild_id: t?.guildId,
        version: t?.version,
    });
}

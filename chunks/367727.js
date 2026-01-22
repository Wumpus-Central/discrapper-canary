n.d(t, {
    $l: () => K,
    D4: () => U,
    D8: () => k,
    En: () => D,
    FZ: () => x,
    G4: () => w,
    J8: () => W,
    R2: () => C,
    Sx: () => Y,
    Tg: () => A,
    Uu: () => I,
    Vh: () => V,
    X0: () => B,
    YV: () => F,
    bQ: () => v,
    cN: () => M,
    d6: () => H,
    fb: () => P,
    gG: () => N,
    iC: () => j,
    j6: () => L,
    qr: () => z,
    rZ: () => R,
    rw: () => O,
    ss: () => S,
    uh: () => q,
    wH: () => T,
}),
    n(896048);
var r = n(311907),
    i = n(554146),
    a = n(73153),
    s = n(594061),
    o = n(617617),
    l = n(954571),
    c = n(661191),
    u = n(105565),
    d = n(497816),
    f = n(787925),
    p = n(541689),
    _ = n(199773),
    h = n(771781),
    m = n(256787),
    g = n(757792),
    E = n(357186),
    b = n(49999),
    y = n(652215);
let O = 2592e6;

function A(e) {
    var t, n;
    let r = null == (n = o.A.settings.userContent) ? void 0 : n.recurringDismissibleContentStates[e];
    return {
        lastDismissedVersion: (0, m.L0)(e) ? (0, E.c)(e) : 0,
        lastDismissedAtMs: new Date().getTime().toString(),
        lastDismissedObjectId: (0, m.IL)(e) ? c.default.fromTimestamp(Date.now() + O) : "0",
        numTimesDismissed: null != (t = null == r ? void 0 : r.numTimesDismissed) ? t : 0,
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

function S(e, t) {
    return (0, s.$w)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: t,
    });
}

function I(e, t, n) {
    return (0, s.$w)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: n,
    });
}

function T(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !0,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}

function C(e, t, n) {
    return (0, s.xs)(e, t, {
        dismissed: !1,
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
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}

function w(e, t, n, r) {
    return (0, s.xs)(e, n, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: r,
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

function D(e, t) {
    var n, r;
    if ((0, g.P3)(e))
        return {
            isDismissed: !0,
            lastDismissedVersion: null,
        };
    let i =
            null == (r = o.A.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e])
                ? void 0
                : n.lastDismissedVersion,
        a = null != t ? t : (0, E.c)(e);
    return {
        isDismissed: null != i && i >= a,
        lastDismissedVersion: i,
    };
}

function x(e, t) {
    var n, r;
    if ((0, g.P3)(e))
        return {
            isDismissed: !0,
            lastDismissedAtMs: null,
        };
    let i =
            null == (r = o.A.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e])
                ? void 0
                : n.lastDismissedAtMs,
        a = null != i && "0" !== i ? (Number.isNaN(Number(i)) ? void 0 : Number(i)) : void 0;
    if (void 0 === a)
        return {
            isDismissed: !1,
            lastDismissedAtMs: void 0,
        };
    let s = !0;
    if (null != t) {
        let e = a + t.cooldownDurationMs,
            n = Date.now(),
            r = null == t.showAfterTimestamp || (n >= t.showAfterTimestamp && a <= t.showAfterTimestamp);
        s = n < e || !r;
    }
    return {
        isDismissed: s,
        lastDismissedAtMs: a,
    };
}

function L(e, t, n) {
    var r, i, a, s;
    if ((0, g.P3)(e)) return !0;
    let l =
            null == (i = o.A.settings.userContent) || null == (r = i.recurringDismissibleContentStates[e])
                ? void 0
                : r.lastDismissedObjectId,
        u =
            null == (s = o.A.settings.userContent) || null == (a = s.recurringDismissibleContentStates[e])
                ? void 0
                : a.lastDismissedAtMs,
        d = null != u && "0" !== u ? (Number.isNaN(Number(u)) ? void 0 : Number(u)) : void 0,
        f = !1;
    if (null != n && null != d) {
        let e = d + n.cooldownDurationMs,
            t = Date.now(),
            r = null == n.showAfterTimestamp || (t >= n.showAfterTimestamp && d <= n.showAfterTimestamp);
        f = t < e || !r;
    }
    let p = null != l && 1 !== c.default.compare(t, l);
    return f && p;
}

function j(e, t) {
    if ((0, g.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && !0 === n[e].dismissed;
}

function M(e, t) {
    return (0, r.bG)([o.A], () => j(e, t));
}

function k(e, t) {
    if ((0, g.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedAtMs && "0" !== n[e].lastDismissedAtMs;
}

function U(e, t) {
    if ((0, g.P3)(e)) return !0;
    let n = o.A.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedObjectId && "0" !== n[e].lastDismissedObjectId;
}
let G = new Set([i.M.ACCOUNT_LINK_INVITE_FRIENDS, i.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER, i.M.ACCOUNT_LINK_PROMPT]);

function V(e, t, n, r) {
    if ((0, h.dD)(e) || _.A.hasUserHitDCCap(e, null == t ? void 0 : t.guildId)) return;
    let s =
        d.A.getConfig({
            location: "requestMarkDismissibleContentAsShown",
        }).enabled &&
        null == r &&
        G.has(e);
    (!n || s) &&
        (a.h.dispatch({
            type: "DCF_EVENT_LOGGED",
            eventType: u.r.DC_SHOW_REQUEST,
            dismissibleContent: e,
        }),
        (0, h.oo)({
            content: e,
            groupName: null == t ? void 0 : t.groupName,
            onAdded: () => {
                var n;
                let [r, a] = (0, h.oF)();
                (0, p.rF)(e, null == t ? void 0 : t.guildId),
                    l.default.track(y.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                        type: i.M[e],
                        content_count: r,
                        fatigable_content_count: a,
                        group_name: null == t ? void 0 : t.groupName,
                        bypass_fatigue: f.C.has(e),
                        guild_id: null == t ? void 0 : t.guildId,
                        version: null == t ? void 0 : t.version,
                    }),
                    null == t || null == (n = t.onShown) || n.call(t);
            },
        }));
}

function F(e, t) {
    ((0, h.dD)(e) || t.forceTrack) && X(e, t), (0, p.Xw)(e);
}

function B(e, t) {
    let n = !_.A.hasUserHitDCCap();
    (0, h.pd)(
        {
            content: e,
            groupName: null == t ? void 0 : t.groupName,
        },
        n,
    );
}
async function H(e, t) {
    let n = (0, E.c)(e);
    await K(e, n, t);
}

function Y(e, t) {
    var n, r;
    let i = null == (r = o.A.getGuildDismissedContentState(t)) ? void 0 : r[e];
    return (null != (n = null == i ? void 0 : i.numTimesDismissed) ? n : 0) + 1;
}

function W(e, t) {
    var n, r;
    if (null != t.numTimesDismissed) return t.numTimesDismissed;
    let i = null == (r = o.A.settings.userContent) ? void 0 : r.recurringDismissibleContentStates[e];
    return (null != (n = null == i ? void 0 : i.numTimesDismissed) ? n : 0) + 1;
}
async function K(e, t, n) {
    let r = W(e, n);
    F(e, n), await v(e, t, r), B(e, n);
}
async function z(e, t, n) {
    let r = W(e, n);
    F(e, n), await I(e, t, r), B(e, n);
}
async function q(e, t) {
    let n = W(e, t);
    F(e, t), await S(e, n), B(e, t);
}

function X(e, t) {
    var n;
    let [r] = (0, h.oF)(),
        a = _.A.getRenderedAtTimestamp(e),
        s = new Date(),
        o = null == a ? null : s.getTime() - a,
        c = (null == t ? void 0 : t.guildId) != null ? Y(e, t.guildId) : W(e, null != t ? t : {});
    l.default.track(y.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
        type: i.M[e],
        action: null != (n = null == t ? void 0 : t.dismissAction) ? n : b.i.UNKNOWN,
        content_count: r,
        group_name: null == t ? void 0 : t.groupName,
        bypass_fatigue: f.C.has(e),
        guild_id: null == t ? void 0 : t.guildId,
        shown_duration: o,
        version: null == t ? void 0 : t.version,
        num_times_dismissed: c,
    });
}

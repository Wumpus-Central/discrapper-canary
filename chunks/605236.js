n.d(t, {
    Bn: () => I,
    Ei: () => N,
    F8: () => v,
    Fo: () => w,
    H4: () => P,
    J0: () => R,
    JO: () => H,
    ME: () => G,
    OA: () => L,
    Ow: () => Y,
    UJ: () => D,
    XM: () => A,
    XY: () => x,
    ZF: () => C,
    bj: () => B,
    kk: () => k,
    mA: () => F,
    oK: () => j,
    po: () => S,
    qN: () => Z,
    u9: () => U,
    wH: () => V,
    wx: () => O,
    z2: () => T,
}),
    n(388685);
var r = n(442837),
    i = n(704215),
    a = n(570140),
    o = n(675478),
    s = n(581883),
    l = n(626135),
    c = n(709054),
    u = n(713284),
    d = n(96145),
    f = n(261376),
    _ = n(883904),
    p = n(68985),
    h = n(211644),
    m = n(428967),
    g = n(57207),
    E = n(644916),
    b = n(921944),
    y = n(981631);
let O = 2592000000;
function v(e) {
    var t, n;
    let r = null == (t = s.Z.settings.userContent) ? void 0 : t.recurringDismissibleContentStates[e];
    return {
        lastDismissedVersion: (0, m.lg)(e) ? (0, E.t)(e) : 0,
        lastDismissedAtMs: new Date().getTime().toString(),
        lastDismissedObjectId: (0, m.I0)(e) ? c.default.fromTimestamp(Date.now() + O) : "0",
        numTimesDismissed: null != (n = null == r ? void 0 : r.numTimesDismissed) ? n : 0,
    };
}
function I(e, t, n) {
    return (0, o.Cd)(e, {
        lastDismissedVersion: t,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function T(e, t) {
    return (0, o.Cd)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: t,
    });
}
function S(e, t, n) {
    return (0, o.Cd)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t,
        numTimesDismissed: n,
    });
}
function A(e, t, n) {
    return (0, o.m9)(e, t, {
        dismissed: !0,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function C(e, t, n) {
    return (0, o.m9)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function N(e, t, n) {
    return (0, o.m9)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function R(e, t, n) {
    return (0, o.m9)(e, t, {
        dismissed: !1,
        lastDismissedVersion: 0,
        lastDismissedAtMs: "0",
        lastDismissedObjectId: "0",
        numTimesDismissed: n,
    });
}
function P(e, t) {
    var n, r;
    if ((0, g.Bh)(e))
        return {
            isDismissed: !0,
            lastDismissedVersion: null,
        };
    let i =
            null == (r = s.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e])
                ? void 0
                : n.lastDismissedVersion,
        a = null != t ? t : (0, E.t)(e);
    return {
        isDismissed: null != i && i >= a,
        lastDismissedVersion: i,
    };
}
function w(e, t) {
    var n, r;
    if ((0, g.Bh)(e))
        return {
            isDismissed: !0,
            lastDismissedAtMs: null,
        };
    let i =
            null == (r = s.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e])
                ? void 0
                : n.lastDismissedAtMs,
        a = null != i && "0" !== i ? (Number.isNaN(Number(i)) ? void 0 : Number(i)) : void 0;
    if (void 0 === a)
        return {
            isDismissed: !1,
            lastDismissedAtMs: void 0,
        };
    let o = !0;
    if (null != t) {
        let e = a + t.cooldownDurationMs,
            n = Date.now(),
            r = null == t.showAfterTimestamp || (n >= t.showAfterTimestamp && a <= t.showAfterTimestamp);
        o = n < e || !r;
    }
    return {
        isDismissed: o,
        lastDismissedAtMs: a,
    };
}
function D(e, t, n) {
    var r, i, a, o;
    if ((0, g.Bh)(e)) return !0;
    let l =
            null == (i = s.Z.settings.userContent) || null == (r = i.recurringDismissibleContentStates[e])
                ? void 0
                : r.lastDismissedObjectId,
        u =
            null == (o = s.Z.settings.userContent) || null == (a = o.recurringDismissibleContentStates[e])
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
    let _ = null != l && 1 !== c.default.compare(t, l);
    return f && _;
}
function x(e, t) {
    if ((0, g.Bh)(e)) return !0;
    let n = s.Z.getGuildDismissedContentState(t);
    return null != n && null != n[e] && !0 === n[e].dismissed;
}
function L(e, t) {
    return (0, r.e7)([s.Z], () => x(e, t));
}
function j(e, t) {
    if ((0, g.Bh)(e)) return !0;
    let n = s.Z.getGuildDismissedContentState(t);
    return null != n && null != n[e] && null != n[e].lastDismissedAtMs && "0" !== n[e].lastDismissedAtMs;
}
let M = new Set([i.z.ACCOUNT_LINK_INVITE_FRIENDS, i.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER, i.z.ACCOUNT_LINK_PROMPT]);
function k(e, t, n, r) {
    if ((0, h.cI)(e) || p.Z.hasUserHitDCCap(e, null == t ? void 0 : t.guildId)) return;
    let o = d.Z.getConfig({ location: "requestMarkDismissibleContentAsShown" }).enabled && null == r && M.has(e);
    (!n || o) &&
        (a.Z.dispatch({
            type: "DCF_EVENT_LOGGED",
            eventType: u.D.DC_SHOW_REQUEST,
            dismissibleContent: e,
        }),
        (0, h.f0)({
            content: e,
            groupName: null == t ? void 0 : t.groupName,
            onAdded: () => {
                var n;
                let [r, a] = (0, h.Aq)();
                (0, _.cm)(e, null == t ? void 0 : t.guildId),
                    l.default.track(y.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                        type: i.z[e],
                        content_count: r,
                        fatigable_content_count: a,
                        group_name: null == t ? void 0 : t.groupName,
                        bypass_fatigue: f.O.has(e),
                        guild_id: null == t ? void 0 : t.guildId,
                        version: null == t ? void 0 : t.version,
                    }),
                    null == t || null == (n = t.onShown) || n.call(t);
            },
        }));
}
function U(e, t) {
    ((0, h.cI)(e) || t.forceTrack) && W(e, t), (0, _.Vr)(e);
}
function G(e, t) {
    let n = !p.Z.hasUserHitDCCap();
    (0, h.gE)(
        {
            content: e,
            groupName: null == t ? void 0 : t.groupName,
        },
        n,
    );
}
async function B(e, t) {
    let n = (0, E.t)(e);
    await V(e, n, t);
}
function Z(e, t) {
    var n, r;
    let i = null == (n = s.Z.getGuildDismissedContentState(t)) ? void 0 : n[e];
    return (null != (r = null == i ? void 0 : i.numTimesDismissed) ? r : 0) + 1;
}
function F(e, t) {
    var n, r;
    if (null != t.numTimesDismissed) return t.numTimesDismissed;
    let i = null == (n = s.Z.settings.userContent) ? void 0 : n.recurringDismissibleContentStates[e];
    return (null != (r = null == i ? void 0 : i.numTimesDismissed) ? r : 0) + 1;
}
async function V(e, t, n) {
    let r = F(e, n);
    U(e, n), await I(e, t, r), G(e, n);
}
async function H(e, t, n) {
    let r = F(e, n);
    U(e, n), await S(e, t, r), G(e, n);
}
async function Y(e, t) {
    let n = F(e, t);
    U(e, t), await T(e, n), G(e, t);
}
function W(e, t) {
    var n;
    let [r] = (0, h.Aq)(),
        a = p.Z.getRenderedAtTimestamp(e),
        o = new Date(),
        s = null == a ? null : o.getTime() - a,
        c = (null == t ? void 0 : t.guildId) != null ? Z(e, t.guildId) : F(e, null != t ? t : {});
    l.default.track(y.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
        type: i.z[e],
        action: null != (n = null == t ? void 0 : t.dismissAction) ? n : b.L.UNKNOWN,
        content_count: r,
        group_name: null == t ? void 0 : t.groupName,
        bypass_fatigue: f.O.has(e),
        guild_id: null == t ? void 0 : t.guildId,
        shown_duration: s,
        version: null == t ? void 0 : t.version,
        num_times_dismissed: c,
    });
}

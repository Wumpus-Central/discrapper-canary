n.d(t, {
    $J: () => P,
    Bn: () => I,
    EW: () => M,
    F8: () => v,
    Fo: () => R,
    H4: () => C,
    JO: () => U,
    Ow: () => G,
    UJ: () => w,
    bj: () => k,
    kk: () => D,
    po: () => S,
    un: () => A,
    wE: () => N,
    wH: () => j,
    wx: () => O,
    z2: () => T
}),
    n(388685);
var r = n(442837),
    i = n(704215),
    a = n(570140),
    o = n(675478),
    s = n(581883),
    l = n(626135),
    c = n(709054),
    u = n(915486),
    d = n(713284),
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
    return {
        lastDismissedVersion: (0, m.lg)(e) ? (0, E.t)(e) : 0,
        lastDismissedAtMs: new Date().getTime().toString(),
        lastDismissedObjectId: (0, m.I0)(e) ? c.default.fromTimestamp(Date.now() + O) : '0'
    };
}
function I(e, t) {
    return (0, o.Cd)(e, {
        lastDismissedVersion: t,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: '0'
    });
}
function T(e) {
    return (0, o.Cd)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: '0'
    });
}
function S(e, t) {
    return (0, o.Cd)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t
    });
}
function A(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!n && (0, g.B)(e)) return !0;
    let r = null == (t = s.Z.settings.userContent) ? void 0 : t.dismissedContents;
    return null != r && (0, u.jl)(r, e);
}
function N(e) {
    return (0, r.e7)([s.Z], () => A(e));
}
function C(e, t) {
    var n, r;
    if ((0, g.B)(e))
        return {
            isDismissed: !0,
            lastDismissedVersion: null
        };
    let i = null == (r = s.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e]) ? void 0 : n.lastDismissedVersion,
        a = null != t ? t : (0, E.t)(e);
    return {
        isDismissed: null != i && i >= a,
        lastDismissedVersion: i
    };
}
function R(e, t) {
    var n, r;
    if ((0, g.B)(e))
        return {
            isDismissed: !0,
            lastDismissedAtMs: null
        };
    let i = null == (r = s.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e]) ? void 0 : n.lastDismissedAtMs,
        a = null != i && '0' !== i ? (Number.isNaN(Number(i)) ? void 0 : Number(i)) : void 0;
    if (void 0 === a)
        return {
            isDismissed: !1,
            lastDismissedAtMs: void 0
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
        lastDismissedAtMs: a
    };
}
function P(e, t) {
    var n, r;
    if ((0, g.B)(e))
        return {
            isDismissed: !0,
            lastDismissedSnowflakeId: null
        };
    let i = null == (r = s.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e]) ? void 0 : n.lastDismissedObjectId;
    return {
        isDismissed: null != i && 1 !== c.default.compare(t, i),
        lastDismissedSnowflakeId: i
    };
}
function w(e, t, n) {
    var r, i, a, o;
    if ((0, g.B)(e)) return !0;
    let l = null == (i = s.Z.settings.userContent) || null == (r = i.recurringDismissibleContentStates[e]) ? void 0 : r.lastDismissedObjectId,
        u = null == (o = s.Z.settings.userContent) || null == (a = o.recurringDismissibleContentStates[e]) ? void 0 : a.lastDismissedAtMs,
        d = null != u && '0' !== u ? (Number.isNaN(Number(u)) ? void 0 : Number(u)) : void 0,
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
function D(e, t, n) {
    !((0, h.cI)(e) || p.Z.hasUserHitDCCap(e)) &&
        (n ||
            (a.Z.dispatch({
                type: 'DCF_EVENT_LOGGED',
                eventType: d.D.DC_SHOW_REQUEST,
                dismissibleContent: e
            }),
            (0, h.f0)({
                content: e,
                groupName: null == t ? void 0 : t.groupName,
                onAdded: () => {
                    var n;
                    let [r, a] = (0, h.Aq)();
                    (0, _.cm)(e),
                        l.default.track(y.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                            type: i.z[e],
                            content_count: r,
                            fatigable_content_count: a,
                            group_name: null == t ? void 0 : t.groupName,
                            bypass_fatigue: f.O.has(e),
                            guild_id: null == t ? void 0 : t.guildId,
                            version: null == t ? void 0 : t.version
                        }),
                        null == t || null == (n = t.onShown) || n.call(t);
                }
            })));
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ((0, h.cI)(e) || t.forceTrack) && B(e, t), (0, _.Vr)(e);
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !p.Z.hasUserHitDCCap();
    (0, h.gE)(
        {
            content: e,
            groupName: null == t ? void 0 : t.groupName
        },
        n
    );
}
async function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    A(e, !0) || (L(e, t), await (0, o.nm)(e), x(e, t));
}
async function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = (0, E.t)(e);
    await j(e, n, t);
}
async function j(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    L(e, n), await I(e, t), x(e, n);
}
async function U(e, t, n) {
    L(e, n), await S(e, t), x(e, n);
}
async function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    L(e, t), await T(e), x(e, t);
}
function B(e, t) {
    var n;
    let [r] = (0, h.Aq)(),
        a = p.Z.getRenderedAtTimestamp(e),
        o = new Date(),
        s = null == a ? null : o.getTime() - a;
    l.default.track(y.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
        type: i.z[e],
        action: null != (n = null == t ? void 0 : t.dismissAction) ? n : b.L.UNKNOWN,
        content_count: r,
        group_name: null == t ? void 0 : t.groupName,
        bypass_fatigue: f.O.has(e),
        guild_id: null == t ? void 0 : t.guildId,
        shown_duration: s,
        version: null == t ? void 0 : t.version
    });
}

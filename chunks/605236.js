(n.d(t, {
    $J: () => A,
    Bn: () => O,
    F8: () => y,
    Fo: () => S,
    H4: () => T,
    JO: () => L,
    ME: () => P,
    Ow: () => x,
    UJ: () => N,
    bj: () => w,
    kk: () => C,
    po: () => I,
    u9: () => R,
    wH: () => D,
    wx: () => b,
    z2: () => v
}),
    n(388685));
var r = n(704215),
    i = n(570140),
    a = n(675478),
    o = n(581883),
    s = n(626135),
    l = n(709054),
    c = n(713284),
    u = n(261376),
    d = n(883904),
    f = n(68985),
    _ = n(211644),
    p = n(428967),
    h = n(57207),
    m = n(644916),
    g = n(921944),
    E = n(981631);
let b = 2592000000;
function y(e) {
    return {
        lastDismissedVersion: (0, p.lg)(e) ? (0, m.t)(e) : 0,
        lastDismissedAtMs: new Date().getTime().toString(),
        lastDismissedObjectId: (0, p.I0)(e) ? l.default.fromTimestamp(Date.now() + b) : '0'
    };
}
function O(e, t) {
    return (0, a.Cd)(e, {
        lastDismissedVersion: t,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: '0'
    });
}
function v(e) {
    return (0, a.Cd)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: '0'
    });
}
function I(e, t) {
    return (0, a.Cd)(e, {
        lastDismissedVersion: 0,
        lastDismissedAtMs: Date.now().toString(),
        lastDismissedObjectId: t
    });
}
function T(e, t) {
    var n, r;
    if ((0, h.B)(e))
        return {
            isDismissed: !0,
            lastDismissedVersion: null
        };
    let i = null == (r = o.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e]) ? void 0 : n.lastDismissedVersion,
        a = null != t ? t : (0, m.t)(e);
    return {
        isDismissed: null != i && i >= a,
        lastDismissedVersion: i
    };
}
function S(e, t) {
    var n, r;
    if ((0, h.B)(e))
        return {
            isDismissed: !0,
            lastDismissedAtMs: null
        };
    let i = null == (r = o.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e]) ? void 0 : n.lastDismissedAtMs,
        a = null != i && '0' !== i ? (Number.isNaN(Number(i)) ? void 0 : Number(i)) : void 0;
    if (void 0 === a)
        return {
            isDismissed: !1,
            lastDismissedAtMs: void 0
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
        lastDismissedAtMs: a
    };
}
function A(e, t) {
    var n, r;
    if ((0, h.B)(e))
        return {
            isDismissed: !0,
            lastDismissedSnowflakeId: null
        };
    let i = null == (r = o.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e]) ? void 0 : n.lastDismissedObjectId;
    return {
        isDismissed: null != i && 1 !== l.default.compare(t, i),
        lastDismissedSnowflakeId: i
    };
}
function N(e, t, n) {
    var r, i, a, s;
    if ((0, h.B)(e)) return !0;
    let c = null == (i = o.Z.settings.userContent) || null == (r = i.recurringDismissibleContentStates[e]) ? void 0 : r.lastDismissedObjectId,
        u = null == (s = o.Z.settings.userContent) || null == (a = s.recurringDismissibleContentStates[e]) ? void 0 : a.lastDismissedAtMs,
        d = null != u && '0' !== u ? (Number.isNaN(Number(u)) ? void 0 : Number(u)) : void 0,
        f = !1;
    if (null != n && null != d) {
        let e = d + n.cooldownDurationMs,
            t = Date.now(),
            r = null == n.showAfterTimestamp || (t >= n.showAfterTimestamp && d <= n.showAfterTimestamp);
        f = t < e || !r;
    }
    let _ = null != c && 1 !== l.default.compare(t, c);
    return f && _;
}
function C(e, t, n) {
    !((0, _.cI)(e) || f.Z.hasUserHitDCCap(e)) &&
        (n ||
            (i.Z.dispatch({
                type: 'DCF_EVENT_LOGGED',
                eventType: c.D.DC_SHOW_REQUEST,
                dismissibleContent: e
            }),
            (0, _.f0)({
                content: e,
                groupName: null == t ? void 0 : t.groupName,
                onAdded: () => {
                    var n;
                    let [i, a] = (0, _.Aq)();
                    ((0, d.cm)(e),
                        s.default.track(E.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                            type: r.z[e],
                            content_count: i,
                            fatigable_content_count: a,
                            group_name: null == t ? void 0 : t.groupName,
                            bypass_fatigue: u.O.has(e),
                            guild_id: null == t ? void 0 : t.guildId,
                            version: null == t ? void 0 : t.version
                        }),
                        null == t || null == (n = t.onShown) || n.call(t));
                }
            })));
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    (((0, _.cI)(e) || t.forceTrack) && k(e, t), (0, d.Vr)(e));
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !f.Z.hasUserHitDCCap();
    (0, _.gE)(
        {
            content: e,
            groupName: null == t ? void 0 : t.groupName
        },
        n
    );
}
async function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = (0, m.t)(e);
    await D(e, n, t);
}
async function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    (R(e, n), await O(e, t), P(e, n));
}
async function L(e, t, n) {
    (R(e, n), await I(e, t), P(e, n));
}
async function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    (R(e, t), await v(e), P(e, t));
}
function k(e, t) {
    var n;
    let [i] = (0, _.Aq)(),
        a = f.Z.getRenderedAtTimestamp(e),
        o = new Date(),
        l = null == a ? null : o.getTime() - a;
    s.default.track(E.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
        type: r.z[e],
        action: null != (n = null == t ? void 0 : t.dismissAction) ? n : g.L.UNKNOWN,
        content_count: i,
        group_name: null == t ? void 0 : t.groupName,
        bypass_fatigue: u.O.has(e),
        guild_id: null == t ? void 0 : t.guildId,
        shown_duration: l,
        version: null == t ? void 0 : t.version
    });
}

n.d(t, {
    $J: () => S,
    EW: () => R,
    Fo: () => I,
    H4: () => v,
    JO: () => w,
    Ow: () => D,
    UJ: () => T,
    kk: () => A,
    un: () => y,
    wE: () => O,
    wH: () => P
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
    m = n(57207),
    g = n(644916),
    E = n(921944),
    b = n(981631);
function y(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!n && (0, m.B)(e)) return !0;
    let r = null == (t = s.Z.settings.userContent) ? void 0 : t.dismissedContents;
    return null != r && (0, u.jl)(r, e);
}
function O(e) {
    return (0, r.e7)([s.Z], () => y(e));
}
function v(e) {
    var t, n;
    if ((0, m.B)(e))
        return {
            isDismissed: !0,
            lastDismissedVersion: null
        };
    let r = null == (n = s.Z.settings.userContent) || null == (t = n.recurringDismissibleContentStates[e]) ? void 0 : t.lastDismissedVersion,
        i = (0, g.t)(e);
    return {
        isDismissed: null != r && r >= i,
        lastDismissedVersion: r
    };
}
function I(e, t) {
    var n, r;
    if ((0, m.B)(e))
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
function S(e, t) {
    var n, r;
    if ((0, m.B)(e))
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
function T(e, t, n) {
    var r, i, a, o;
    if ((0, m.B)(e)) return !0;
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
function A(e, t, n) {
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
                        l.default.track(b.rMx.DISMISSIBLE_CONTENT_SHOWN, {
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
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ((0, h.cI)(e) || t.forceTrack) && L(e, t), (0, _.Vr)(e);
}
function C(e) {
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
async function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    y(e, !0) || (N(e, t), await (0, o.nm)(e), C(e, t));
}
async function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    N(e, n), await (0, o.Bn)(e, t), C(e, n);
}
async function w(e, t, n) {
    N(e, n), await (0, o.po)(e, t), C(e, n);
}
async function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    N(e, t), await (0, o.z2)(e), C(e, t);
}
function L(e, t) {
    var n;
    let [r] = (0, h.Aq)(),
        a = p.Z.getRenderedAtTimestamp(e),
        o = new Date(),
        s = null == a ? null : o.getTime() - a;
    l.default.track(b.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
        type: i.z[e],
        action: null != (n = null == t ? void 0 : t.dismissAction) ? n : E.L.UNKNOWN,
        content_count: r,
        group_name: null == t ? void 0 : t.groupName,
        bypass_fatigue: f.O.has(e),
        guild_id: null == t ? void 0 : t.guildId,
        shown_duration: s,
        version: null == t ? void 0 : t.version
    });
}

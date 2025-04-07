n.d(t, {
    $J: () => S,
    EW: () => C,
    Fo: () => I,
    H4: () => O,
    Ow: () => P,
    kk: () => T,
    un: () => y,
    wE: () => v,
    wH: () => R
}),
    n(388685);
var r = n(442837),
    i = n(704215),
    o = n(570140),
    a = n(675478),
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
function v(e) {
    return (0, r.e7)([s.Z], () => y(e));
}
function O(e) {
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
        o = null != i && '0' !== i ? (Number.isNaN(Number(i)) ? void 0 : Number(i)) : void 0;
    if (void 0 === o)
        return {
            isDismissed: !1,
            lastDismissedAtMs: void 0
        };
    let a = !0;
    if (null != t) {
        let e = o + t.cooldownDurationMs,
            n = Date.now(),
            r = null == t.showAfterTimestamp || (n >= t.showAfterTimestamp && o <= t.showAfterTimestamp);
        a = n < e || !r;
    }
    return {
        isDismissed: a,
        lastDismissedAtMs: o
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
    !((0, h.cI)(e) || p.Z.hasUserHitDCCap(e)) &&
        (n ||
            (o.Z.dispatch({
                type: 'DCF_EVENT_LOGGED',
                eventType: d.D.DC_SHOW_REQUEST,
                dismissibleContent: e
            }),
            (0, h.f0)({
                content: e,
                groupName: null == t ? void 0 : t.groupName,
                onAdded: () => {
                    var n;
                    let [r, o] = (0, h.Aq)();
                    (0, _.cm)(e),
                        l.default.track(b.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                            type: i.z[e],
                            content_count: r,
                            fatigable_content_count: o,
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
    ((0, h.cI)(e) || t.forceTrack) && w(e, t), (0, _.Vr)(e);
}
function A(e) {
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
async function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    y(e, !0) || (N(e, t), await (0, a.nm)(e), A(e, t));
}
async function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    N(e, n), await (0, a.Bn)(e, t), A(e, n);
}
async function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    N(e, t), await (0, a.z2)(e), A(e, t);
}
function w(e, t) {
    var n;
    let [r] = (0, h.Aq)(),
        o = p.Z.getRenderedAtTimestamp(e),
        a = new Date(),
        s = null == o ? null : a.getTime() - o;
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

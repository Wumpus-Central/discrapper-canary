n.d(t, {
    EW: () => N,
    Fo: () => O,
    H4: () => y,
    Ow: () => C,
    kk: () => S,
    un: () => v,
    wE: () => b,
    wH: () => A
}),
    n(47120);
var r = n(442837),
    i = n(704215),
    o = n(570140),
    a = n(675478),
    s = n(581883),
    l = n(626135),
    c = n(915486),
    u = n(713284),
    d = n(261376),
    f = n(883904),
    p = n(68985),
    _ = n(211644),
    h = n(57207),
    m = n(644916),
    g = n(921944),
    E = n(981631);
function v(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!n && (0, h.B)(e)) return !0;
    let r = null === (t = s.Z.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents;
    return null != r && (0, c.jl)(r, e);
}
function b(e) {
    return (0, r.e7)([s.Z], () => v(e));
}
function y(e) {
    var t, n;
    if ((0, h.B)(e))
        return {
            isDismissed: !0,
            lastDismissedVersion: null
        };
    let r = null === (n = s.Z.settings.userContent) || void 0 === n ? void 0 : null === (t = n.recurringDismissibleContentStates[e]) || void 0 === t ? void 0 : t.lastDismissedVersion,
        i = (0, m.t)(e);
    return {
        isDismissed: null != r && r >= i,
        lastDismissedVersion: r
    };
}
function O(e, t) {
    var n, r;
    if ((0, h.B)(e))
        return {
            isDismissed: !0,
            lastDismissedAtMs: null
        };
    let i = null === (r = s.Z.settings.userContent) || void 0 === r ? void 0 : null === (n = r.recurringDismissibleContentStates[e]) || void 0 === n ? void 0 : n.lastDismissedAtMs,
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
function S(e, t, n) {
    !((0, _.cI)(e) || p.Z.hasUserHitDCCap(e)) &&
        !n &&
        (o.Z.dispatch({
            type: 'DCF_EVENT_LOGGED',
            eventType: u.D.DC_SHOW_REQUEST,
            dismissibleContent: e
        }),
        (0, _.f0)({
            content: e,
            groupName: null == t ? void 0 : t.groupName,
            onAdded: () => {
                var n;
                let [r, o] = (0, _.Aq)();
                (0, f.cm)(e),
                    l.default.track(E.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                        type: i.z[e],
                        content_count: r,
                        fatigable_content_count: o,
                        group_name: null == t ? void 0 : t.groupName,
                        bypass_fatigue: d.O.has(e),
                        guild_id: null == t ? void 0 : t.guildId,
                        version: null == t ? void 0 : t.version
                    }),
                    null == t || null === (n = t.onShown) || void 0 === n || n.call(t);
            }
        }));
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ((0, _.cI)(e) || t.forceTrack) && R(e, t), (0, f.Vr)(e);
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !p.Z.hasUserHitDCCap();
    (0, _.gE)(
        {
            content: e,
            groupName: null == t ? void 0 : t.groupName
        },
        n
    );
}
async function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    !v(e, !0) && (I(e, t), await (0, a.nm)(e), T(e, t));
}
async function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    I(e, n), await (0, a.Bn)(e, t), T(e, n);
}
async function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    I(e, t), await (0, a.z2)(e), T(e, t);
}
function R(e, t) {
    var n;
    let [r] = (0, _.Aq)(),
        o = p.Z.getRenderedAtTimestamp(e),
        a = new Date(),
        s = null == o ? null : a.getTime() - o;
    l.default.track(E.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
        type: i.z[e],
        action: null !== (n = null == t ? void 0 : t.dismissAction) && void 0 !== n ? n : g.L.UNKNOWN,
        content_count: r,
        group_name: null == t ? void 0 : t.groupName,
        bypass_fatigue: d.O.has(e),
        guild_id: null == t ? void 0 : t.guildId,
        shown_duration: s,
        version: null == t ? void 0 : t.version
    });
}

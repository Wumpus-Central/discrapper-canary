n.d(t, {
    EW: () => N,
    Fo: () => T,
    H4: () => I,
    Ow: () => R,
    kk: () => b,
    un: () => v,
    wE: () => y,
    wH: () => C
}),
    n(47120);
var i = n(442837),
    r = n(704215),
    a = n(570140),
    s = n(675478),
    o = n(581883),
    l = n(626135),
    u = n(915486),
    c = n(713284),
    d = n(261376),
    f = n(883904),
    _ = n(68985),
    p = n(211644),
    h = n(57207),
    m = n(644916),
    g = n(921944),
    E = n(981631);
function v(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!n && (0, h.B)(e)) return !0;
    let i = null === (t = o.Z.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents;
    return null != i && (0, u.jl)(i, e);
}
function y(e) {
    return (0, i.e7)([o.Z], () => v(e));
}
function I(e) {
    var t, n;
    if ((0, h.B)(e))
        return {
            isDismissed: !0,
            lastDismissedVersion: null
        };
    let i = null === (n = o.Z.settings.userContent) || void 0 === n ? void 0 : null === (t = n.recurringDismissibleContentStates[e]) || void 0 === t ? void 0 : t.lastDismissedVersion,
        r = (0, m.t)(e);
    return {
        isDismissed: null != i && i >= r,
        lastDismissedVersion: i
    };
}
function T(e, t) {
    var n, i;
    if ((0, h.B)(e))
        return {
            isDismissed: !0,
            lastDismissedAtMs: null
        };
    let r = null === (i = o.Z.settings.userContent) || void 0 === i ? void 0 : null === (n = i.recurringDismissibleContentStates[e]) || void 0 === n ? void 0 : n.lastDismissedAtMs,
        a = null != r && '0' !== r ? (Number.isNaN(Number(r)) ? void 0 : Number(r)) : void 0;
    if (void 0 === a)
        return {
            isDismissed: !1,
            lastDismissedAtMs: void 0
        };
    let s = !0;
    if (null != t) {
        let e = a + t.cooldownDurationMs,
            n = Date.now(),
            i = null == t.showAfterTimestamp || (n >= t.showAfterTimestamp && a <= t.showAfterTimestamp);
        s = n < e || !i;
    }
    return {
        isDismissed: s,
        lastDismissedAtMs: a
    };
}
function b(e, t, n) {
    !((0, p.cI)(e) || _.Z.hasUserHitDCCap(e)) &&
        !n &&
        (a.Z.dispatch({
            type: 'DCF_EVENT_LOGGED',
            eventType: c.D.DC_SHOW_REQUEST,
            dismissibleContent: e
        }),
        (0, p.f0)({
            content: e,
            groupName: null == t ? void 0 : t.groupName,
            onAdded: () => {
                var n;
                let [i, a] = (0, p.Aq)();
                (0, f.cm)(e),
                    l.default.track(E.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                        type: r.z[e],
                        content_count: i,
                        fatigable_content_count: a,
                        group_name: null == t ? void 0 : t.groupName,
                        bypass_fatigue: d.O.has(e),
                        guild_id: null == t ? void 0 : t.guildId,
                        version: null == t ? void 0 : t.version
                    }),
                    null == t || null === (n = t.onShown) || void 0 === n || n.call(t);
            }
        }));
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ((0, p.cI)(e) || t.forceTrack) && O(e, t), (0, f.Vr)(e);
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !_.Z.hasUserHitDCCap();
    (0, p.gE)(
        {
            content: e,
            groupName: null == t ? void 0 : t.groupName
        },
        n
    );
}
async function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    !v(e, !0) && (S(e, t), await (0, s.nm)(e), A(e, t));
}
async function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    S(e, n), await (0, s.Bn)(e, t), A(e, n);
}
async function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    S(e, t), await (0, s.z2)(e), A(e, t);
}
function O(e, t) {
    var n;
    let [i] = (0, p.Aq)(),
        a = _.Z.getRenderedAtTimestamp(e),
        s = new Date(),
        o = null == a ? null : s.getTime() - a;
    l.default.track(E.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
        type: r.z[e],
        action: null !== (n = null == t ? void 0 : t.dismissAction) && void 0 !== n ? n : g.L.UNKNOWN,
        content_count: i,
        group_name: null == t ? void 0 : t.groupName,
        bypass_fatigue: d.O.has(e),
        guild_id: null == t ? void 0 : t.guildId,
        shown_duration: o,
        version: null == t ? void 0 : t.version
    });
}

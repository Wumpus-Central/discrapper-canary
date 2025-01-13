r.d(n, {
    EW: function () {
        return D;
    },
    Fo: function () {
        return N;
    },
    H4: function () {
        return A;
    },
    Ow: function () {
        return x;
    },
    kk: function () {
        return C;
    },
    un: function () {
        return y;
    },
    wE: function () {
        return S;
    },
    wH: function () {
        return L;
    }
});
var i = r(47120);
var a = r(442837),
    s = r(704215),
    o = r(570140),
    l = r(561746),
    u = r(675478),
    c = r(581883),
    d = r(626135),
    f = r(915486),
    _ = r(713284),
    h = r(261376),
    p = r(883904),
    m = r(68985),
    g = r(952193),
    E = r(211644),
    v = r(57207),
    I = r(644916),
    T = r(921944),
    b = r(981631);
function y(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!r && (0, v.B)(e)) return !0;
    let i = null === (n = c.Z.settings.userContent) || void 0 === n ? void 0 : n.dismissedContents;
    return null != i && (0, f.jl)(i, e);
}
function S(e) {
    return (0, a.e7)([c.Z], () => y(e));
}
function A(e) {
    var n, r;
    if ((0, v.B)(e))
        return {
            isDismissed: !0,
            lastDismissedVersion: null
        };
    let i = null === (r = c.Z.settings.userContent) || void 0 === r ? void 0 : null === (n = r.recurringDismissibleContentStates[e]) || void 0 === n ? void 0 : n.lastDismissedVersion,
        a = (0, I.t)(e);
    return {
        isDismissed: null != i && i >= a,
        lastDismissedVersion: i
    };
}
function N(e, n) {
    var r, i;
    if ((0, v.B)(e))
        return {
            isDismissed: !0,
            lastDismissedAtMs: null
        };
    let a = null === (i = c.Z.settings.userContent) || void 0 === i ? void 0 : null === (r = i.recurringDismissibleContentStates[e]) || void 0 === r ? void 0 : r.lastDismissedAtMs,
        s = null != a && '0' !== a ? (Number.isNaN(Number(a)) ? void 0 : Number(a)) : void 0;
    if (void 0 === s)
        return {
            isDismissed: !1,
            lastDismissedAtMs: void 0
        };
    let o = !0;
    if (null != n) {
        let e = s + n.cooldownDurationMs,
            r = Date.now(),
            i = null == n.showAfterTimestamp || (r >= n.showAfterTimestamp && s <= n.showAfterTimestamp);
        o = r < e || !i;
    }
    return {
        isDismissed: o,
        lastDismissedAtMs: s
    };
}
function C(e, n, r) {
    if (!((0, E.cI)(e) || m.Z.hasUserHitDCCap(e) || P(e)) && !r)
        o.Z.dispatch({
            type: 'DCF_EVENT_LOGGED',
            eventType: _.D.DC_SHOW_REQUEST,
            dismissibleContent: e
        }),
            (0, E.f0)({
                content: e,
                groupName: null == n ? void 0 : n.groupName,
                onAdded: () => {
                    var r;
                    let [i, a] = (0, E.Aq)();
                    (0, p.cm)(e),
                        d.default.track(b.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                            type: s.z[e],
                            content_count: i,
                            fatigable_content_count: a,
                            group_name: null == n ? void 0 : n.groupName,
                            bypass_fatigue: h.O.has(e),
                            guild_id: null == n ? void 0 : n.guildId,
                            version: null == n ? void 0 : n.version
                        }),
                        null == n || null === (r = n.onShown) || void 0 === r || r.call(n);
                }
            });
}
function R(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ((0, E.cI)(e) || n.forceTrack) && w(e, n), (0, p.Vr)(e);
}
function O(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = !m.Z.hasUserHitDCCap();
    (0, E.gE)(
        {
            content: e,
            groupName: null == n ? void 0 : n.groupName
        },
        r
    );
}
async function D(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!y(e, !0)) R(e, n), await (0, u.nm)(e), O(e, n);
}
async function L(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    R(e, r), await (0, u.Bn)(e, n), O(e, r);
}
async function x(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    R(e, n), await (0, u.z2)(e), O(e, n);
}
function w(e, n) {
    var r;
    let [i] = (0, E.Aq)(),
        a = m.Z.getRenderedAtTimestamp(e),
        o = new Date(),
        l = null == a ? null : o.getTime() - a;
    d.default.track(b.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
        type: s.z[e],
        action: null !== (r = null == n ? void 0 : n.dismissAction) && void 0 !== r ? r : T.L.UNKNOWN,
        content_count: i,
        group_name: null == n ? void 0 : n.groupName,
        bypass_fatigue: h.O.has(e),
        guild_id: null == n ? void 0 : n.guildId,
        shown_duration: l,
        version: null == n ? void 0 : n.version
    });
}
function P(e) {
    let n = g.$.has(e),
        { enabled: r } = l.Z.getCurrentConfig({ location: 'isUserSubjectToDCFHoldout' }, { autoTrackExposure: !n });
    return r && !n;
}

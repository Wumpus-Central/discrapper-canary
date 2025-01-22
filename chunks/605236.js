r.d(n, {
    EW: function () {
        return R;
    },
    Fo: function () {
        return S;
    },
    H4: function () {
        return T;
    },
    Ow: function () {
        return D;
    },
    kk: function () {
        return A;
    },
    un: function () {
        return b;
    },
    wE: function () {
        return I;
    },
    wH: function () {
        return O;
    }
});
var i = r(47120);
var a = r(442837),
    o = r(704215),
    s = r(570140),
    l = r(675478),
    u = r(581883),
    c = r(626135),
    d = r(915486),
    f = r(713284),
    p = r(261376),
    h = r(883904),
    _ = r(68985),
    m = r(211644),
    g = r(57207),
    E = r(644916),
    v = r(921944),
    y = r(981631);
function b(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!r && (0, g.B)(e)) return !0;
    let i = null === (n = u.Z.settings.userContent) || void 0 === n ? void 0 : n.dismissedContents;
    return null != i && (0, d.jl)(i, e);
}
function I(e) {
    return (0, a.e7)([u.Z], () => b(e));
}
function T(e) {
    var n, r;
    if ((0, g.B)(e))
        return {
            isDismissed: !0,
            lastDismissedVersion: null
        };
    let i = null === (r = u.Z.settings.userContent) || void 0 === r ? void 0 : null === (n = r.recurringDismissibleContentStates[e]) || void 0 === n ? void 0 : n.lastDismissedVersion,
        a = (0, E.t)(e);
    return {
        isDismissed: null != i && i >= a,
        lastDismissedVersion: i
    };
}
function S(e, n) {
    var r, i;
    if ((0, g.B)(e))
        return {
            isDismissed: !0,
            lastDismissedAtMs: null
        };
    let a = null === (i = u.Z.settings.userContent) || void 0 === i ? void 0 : null === (r = i.recurringDismissibleContentStates[e]) || void 0 === r ? void 0 : r.lastDismissedAtMs,
        o = null != a && '0' !== a ? (Number.isNaN(Number(a)) ? void 0 : Number(a)) : void 0;
    if (void 0 === o)
        return {
            isDismissed: !1,
            lastDismissedAtMs: void 0
        };
    let s = !0;
    if (null != n) {
        let e = o + n.cooldownDurationMs,
            r = Date.now(),
            i = null == n.showAfterTimestamp || (r >= n.showAfterTimestamp && o <= n.showAfterTimestamp);
        s = r < e || !i;
    }
    return {
        isDismissed: s,
        lastDismissedAtMs: o
    };
}
function A(e, n, r) {
    if (!((0, m.cI)(e) || _.Z.hasUserHitDCCap(e)) && !r)
        s.Z.dispatch({
            type: 'DCF_EVENT_LOGGED',
            eventType: f.D.DC_SHOW_REQUEST,
            dismissibleContent: e
        }),
            (0, m.f0)({
                content: e,
                groupName: null == n ? void 0 : n.groupName,
                onAdded: () => {
                    var r;
                    let [i, a] = (0, m.Aq)();
                    (0, h.cm)(e),
                        c.default.track(y.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                            type: o.z[e],
                            content_count: i,
                            fatigable_content_count: a,
                            group_name: null == n ? void 0 : n.groupName,
                            bypass_fatigue: p.O.has(e),
                            guild_id: null == n ? void 0 : n.guildId,
                            version: null == n ? void 0 : n.version
                        }),
                        null == n || null === (r = n.onShown) || void 0 === r || r.call(n);
                }
            });
}
function C(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ((0, m.cI)(e) || n.forceTrack) && x(e, n), (0, h.Vr)(e);
}
function N(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = !_.Z.hasUserHitDCCap();
    (0, m.gE)(
        {
            content: e,
            groupName: null == n ? void 0 : n.groupName
        },
        r
    );
}
async function R(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!b(e, !0)) C(e, n), await (0, l.nm)(e), N(e, n);
}
async function O(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    C(e, r), await (0, l.Bn)(e, n), N(e, r);
}
async function D(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    C(e, n), await (0, l.z2)(e), N(e, n);
}
function x(e, n) {
    var r;
    let [i] = (0, m.Aq)(),
        a = _.Z.getRenderedAtTimestamp(e),
        s = new Date(),
        l = null == a ? null : s.getTime() - a;
    c.default.track(y.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
        type: o.z[e],
        action: null !== (r = null == n ? void 0 : n.dismissAction) && void 0 !== r ? r : v.L.UNKNOWN,
        content_count: i,
        group_name: null == n ? void 0 : n.groupName,
        bypass_fatigue: p.O.has(e),
        guild_id: null == n ? void 0 : n.guildId,
        shown_duration: l,
        version: null == n ? void 0 : n.version
    });
}

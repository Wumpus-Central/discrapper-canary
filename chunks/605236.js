r.d(n, {
    EW: function () {
        return R;
    },
    Fo: function () {
        return S;
    },
    H4: function () {
        return y;
    },
    Ow: function () {
        return D;
    },
    kk: function () {
        return A;
    },
    un: function () {
        return T;
    },
    wE: function () {
        return b;
    },
    wH: function () {
        return O;
    }
});
var i = r(47120);
var a = r(442837),
    s = r(704215),
    o = r(570140),
    l = r(675478),
    u = r(581883),
    c = r(626135),
    d = r(915486),
    f = r(713284),
    _ = r(261376),
    h = r(883904),
    p = r(68985),
    m = r(211644),
    g = r(57207),
    E = r(644916),
    v = r(921944),
    I = r(981631);
function T(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!r && (0, g.B)(e)) return !0;
    let i = null === (n = u.Z.settings.userContent) || void 0 === n ? void 0 : n.dismissedContents;
    return null != i && (0, d.jl)(i, e);
}
function b(e) {
    return (0, a.e7)([u.Z], () => T(e));
}
function y(e) {
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
function A(e, n, r) {
    if (!((0, m.cI)(e) || p.Z.hasUserHitDCCap(e)) && !r)
        o.Z.dispatch({
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
                        c.default.track(I.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                            type: s.z[e],
                            content_count: i,
                            fatigable_content_count: a,
                            group_name: null == n ? void 0 : n.groupName,
                            bypass_fatigue: _.O.has(e),
                            guild_id: null == n ? void 0 : n.guildId,
                            version: null == n ? void 0 : n.version
                        }),
                        null == n || null === (r = n.onShown) || void 0 === r || r.call(n);
                }
            });
}
function N(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ((0, m.cI)(e) || n.forceTrack) && L(e, n), (0, h.Vr)(e);
}
function C(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = !p.Z.hasUserHitDCCap();
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
    if (!T(e, !0)) N(e, n), await (0, l.nm)(e), C(e, n);
}
async function O(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    N(e, r), await (0, l.Bn)(e, n), C(e, r);
}
async function D(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    N(e, n), await (0, l.z2)(e), C(e, n);
}
function L(e, n) {
    var r;
    let [i] = (0, m.Aq)(),
        a = p.Z.getRenderedAtTimestamp(e),
        o = new Date(),
        l = null == a ? null : o.getTime() - a;
    c.default.track(I.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
        type: s.z[e],
        action: null !== (r = null == n ? void 0 : n.dismissAction) && void 0 !== r ? r : v.L.UNKNOWN,
        content_count: i,
        group_name: null == n ? void 0 : n.groupName,
        bypass_fatigue: _.O.has(e),
        guild_id: null == n ? void 0 : n.guildId,
        shown_duration: l,
        version: null == n ? void 0 : n.version
    });
}

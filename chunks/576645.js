r.d(n, {
    J: function () {
        return P;
    },
    Ou: function () {
        return B;
    },
    R2: function () {
        return x;
    },
    T$: function () {
        return D;
    },
    Uu: function () {
        return M;
    },
    Zm: function () {
        return L;
    },
    bK: function () {
        return k;
    },
    mx: function () {
        return U;
    },
    t6: function () {
        return w;
    },
    tv: function () {
        return G;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(525654),
    s = r.n(o),
    l = r(259443),
    u = r(442837),
    c = r(846027),
    d = r(607070),
    f = r(578976),
    p = r(569545),
    h = r(199902),
    _ = r(430824),
    m = r(131951),
    g = r(158776),
    E = r(959457),
    v = r(594174),
    y = r(451478),
    b = r(626135),
    I = r(980463),
    T = r(823961),
    S = r(896835),
    A = r(981631),
    C = r(37113);
let N = 3500000,
    R = 10000,
    O = new l.Yd('HDStreamingConsumableModal'),
    D = (e) => {
        let n = (0, u.e7)([_.Z], () => _.Z.getGuild(null == e ? void 0 : e.guild_id)),
            r = (0, u.e7)([v.default], () => {
                var e;
                return null === (e = v.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            i = (0, u.Wu)([h.Z], () => (null == e ? [] : h.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== r))),
            o = i.some((e) => {
                let n = v.default.getUser(e.ownerId);
                return null != n && g.Z.isMobileOnline(n.id);
            }),
            [s, l] = (0, a.useState)(null),
            [c, d] = (0, a.useState)([]);
        (0, u.e7)(
            [E.Z],
            () => {
                if (null == s || Date.now() - s > R) {
                    let e = i.map((e) => {
                        var n;
                        let r = (0, p.V9)(e),
                            i = E.Z.getRTCConnection(r);
                        return null == i ? void 0 : null === (n = i.getVideoStats()) || void 0 === n ? void 0 : n.inbound_bitrate_estimate_percentile99;
                    });
                    O.info('Setting bitrates', e), d(e), l(Date.now());
                }
            },
            [s, i]
        );
        let f = (0, a.useMemo)(() => 0 === c.length || (!c.some((e) => null == e || e < N) && !0), [c]);
        return ((null == n ? void 0 : n.premiumTier) === A.Eu4.NONE || (null == n ? void 0 : n.premiumTier) === A.Eu4.TIER_1) && f && !o;
    },
    L = (e, n) => {
        let r = (0, u.e7)([v.default], () => {
                var e;
                return null === (e = v.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            i = (0, u.Wu)([h.Z], () => (null == e ? [] : h.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== r))),
            a = (0, S.j)(n),
            o = D(e);
        return a && o && i.length > 0;
    };
function x(e) {
    let [n, r, i] = (0, u.Wu)([T.Z], () => [T.Z.isFetchingPrice(e), T.Z.getPrice(e), T.Z.getErrored(e)]);
    return (
        (0, a.useEffect)(() => {
            !n && null == r && !i && (0, I.Gq)(e);
        }, [n, r, i, e]),
        {
            price: r,
            fetchingPrice: n,
            error: i
        }
    );
}
function w(e) {
    let [n, r, i, o, s] = (0, u.Wu)([T.Z], () => [T.Z.isEntitlementFetched(e), T.Z.fetchPotionCount(e), T.Z.isEntitlementFetching(e), T.Z.getEntitlement(e), T.Z.getErrored(e)]);
    return (
        (0, a.useEffect)(() => {
            !n && !i && (0, I.gA)(e);
        }, [n, i, e]),
        {
            entitlement: o,
            numPotions: r,
            fetchedEntitlement: n,
            error: s
        }
    );
}
function P(e, n) {
    let r = (0, a.useRef)(!0),
        i = null == e ? void 0 : e.hdStreamingUntil,
        o = (0, a.useRef)(n);
    (0, a.useEffect)(() => {
        o.current = n;
    }),
        (0, a.useEffect)(() => {
            if (r.current) {
                r.current = !1;
                return;
            }
            if (null != i && new Date(i) > new Date()) return o.current();
        }, [i]);
}
function M(e) {
    P(e, () => {
        let n = h.Z.getCurrentUserActiveStream();
        if (null != n && n.channelId === e.id) {
            let e = m.Z.getState().goLiveSource;
            (0, I.x8)(null == e ? void 0 : e.quality);
            let n = (0, f.s)(C.LY.RESOLUTION_1440, C.ws.FPS_60, e);
            c.Z.setGoLiveSource(n);
        }
    });
}
function k() {
    var e;
    let n = (null !== (e = s().name) && void 0 !== e ? e : 'unknown').toLowerCase(),
        r = (0, u.e7)([y.Z], () => y.Z.isFocused()),
        i = (0, u.e7)([d.Z], () => d.Z.useReducedMotion);
    return 'safari' === n || !r || i;
}
function U(e) {
    b.default.track(A.rMx.CONSUMABLE_HD_STREAMING_ENTRYPOINT, { location: e });
}
function B(e) {
    let n = (0, u.e7)([_.Z], () => _.Z.getGuild(null == e ? void 0 : e.guild_id)),
        r = (0, S.j)('VoiceEffectsActionBar');
    return ((null == n ? void 0 : n.premiumTier) === A.Eu4.NONE || (null == n ? void 0 : n.premiumTier) === A.Eu4.TIER_1) && (null == e ? void 0 : e.type) === A.d4z.GUILD_VOICE && !(null == e ? void 0 : e.isHDStreamSplashed) && r;
}
function G(e, n, r, i) {
    return '' !== e && !n && null == r && (null == i || 0 === i.length);
}

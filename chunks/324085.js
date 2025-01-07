n.d(t, {
    J: function () {
        return y;
    },
    Ou: function () {
        return F;
    },
    R2: function () {
        return O;
    },
    T$: function () {
        return R;
    },
    Uu: function () {
        return M;
    },
    Zm: function () {
        return L;
    },
    bK: function () {
        return b;
    },
    mx: function () {
        return U;
    },
    t6: function () {
        return Z;
    }
}),
    n(47120);
var r = n(192379),
    i = n(525654),
    u = n.n(i),
    l = n(259443),
    s = n(442837),
    o = n(846027),
    d = n(607070),
    a = n(569545),
    c = n(199902),
    E = n(430824),
    f = n(131951),
    S = n(158776),
    _ = n(959457),
    p = n(594174),
    C = n(451478),
    T = n(626135),
    m = n(997323),
    h = n(120619),
    I = n(215339),
    g = n(578976),
    N = n(981631),
    v = n(37113);
let A = new l.Yd('HDStreamingConsumableModal'),
    R = (e) => {
        let t = (0, s.e7)([E.Z], () => E.Z.getGuild(null == e ? void 0 : e.guild_id)),
            n = (0, s.e7)([p.default], () => {
                var e;
                return null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            i = (0, s.Wu)([c.Z], () => (null == e ? [] : c.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n))),
            u = i.some((e) => {
                let t = p.default.getUser(e.ownerId);
                return null != t && S.Z.isMobileOnline(t.id);
            }),
            [l, o] = (0, r.useState)(null),
            [d, f] = (0, r.useState)([]);
        (0, s.e7)(
            [_.Z],
            () => {
                if (null == l || Date.now() - l > 10000) {
                    let e = i.map((e) => {
                        var t;
                        let n = (0, a.V9)(e),
                            r = _.Z.getRTCConnection(n);
                        return null == r ? void 0 : null === (t = r.getVideoStats()) || void 0 === t ? void 0 : t.inbound_bitrate_estimate_percentile99;
                    });
                    A.info('Setting bitrates', e), f(e), o(Date.now());
                }
            },
            [l, i]
        );
        let C = (0, r.useMemo)(() => 0 === d.length || (!d.some((e) => null == e || e < 3500000) && !0), [d]),
            T = (null == t ? void 0 : t.premiumTier) === N.Eu4.NONE || (null == t ? void 0 : t.premiumTier) === N.Eu4.TIER_1;
        return T && C && !u;
    },
    L = (e, t) => {
        let n = (0, s.e7)([p.default], () => {
                var e;
                return null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            r = (0, s.Wu)([c.Z], () => (null == e ? [] : c.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n))),
            i = (0, I.j)(t),
            u = R(e);
        return i && u && r.length > 0;
    };
function O(e) {
    let [t, n, i] = (0, s.Wu)([h.Z], () => [h.Z.isFetchingPrice(e), h.Z.getPrice(e), h.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && null == n && !i && (0, m.Gq)(e);
        }, [t, n, i, e]),
        {
            price: n,
            fetchingPrice: t,
            error: i
        }
    );
}
function Z(e) {
    let [t, n, i, u] = (0, s.Wu)([h.Z], () => [h.Z.isEntitlementFetched(e), h.Z.isEntitlementFetching(e), h.Z.getEntitlement(e), h.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && !n && (0, m.gA)(e);
        }, [t, n, e]),
        {
            entitlement: i,
            fetchedEntitlement: t,
            error: u
        }
    );
}
function y(e, t) {
    let n = (0, r.useRef)(!0),
        i = null == e ? void 0 : e.hdStreamingUntil,
        u = (0, r.useRef)(t);
    (0, r.useEffect)(() => {
        u.current = t;
    }),
        (0, r.useEffect)(() => {
            if (n.current) {
                n.current = !1;
                return;
            }
            if (null != i && new Date(i) > new Date()) return u.current();
        }, [i]);
}
function M(e) {
    y(e, () => {
        let t = c.Z.getCurrentUserActiveStream();
        if (null != t && t.channelId === e.id) {
            let e = f.Z.getState().goLiveSource;
            (0, m.x8)(null == e ? void 0 : e.quality);
            let t = (0, g.s)(v.LY.RESOLUTION_1440, v.ws.FPS_60, e);
            o.Z.setGoLiveSource(t);
        }
    });
}
function b() {
    var e;
    let t = (null !== (e = u().name) && void 0 !== e ? e : 'unknown').toLowerCase(),
        n = (0, s.e7)([C.Z], () => C.Z.isFocused()),
        r = (0, s.e7)([d.Z], () => d.Z.useReducedMotion);
    return 'safari' === t || !n || r;
}
function U(e) {
    T.default.track(N.rMx.CONSUMABLE_HD_STREAMING_ENTRYPOINT, { location: e });
}
function F(e) {
    let t = (0, s.e7)([E.Z], () => E.Z.getGuild(null == e ? void 0 : e.guild_id)),
        n = (0, I.j)('VoiceEffectsActionBar');
    return ((null == t ? void 0 : t.premiumTier) === N.Eu4.NONE || (null == t ? void 0 : t.premiumTier) === N.Eu4.TIER_1) && (null == e ? void 0 : e.type) === N.d4z.GUILD_VOICE && !(null == e ? void 0 : e.isHDStreamSplashed) && n;
}

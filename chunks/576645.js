n.d(t, {
    J: function () {
        return O;
    },
    Ou: function () {
        return w;
    },
    R2: function () {
        return b;
    },
    T$: function () {
        return y;
    },
    Uu: function () {
        return R;
    },
    Zm: function () {
        return A;
    },
    bK: function () {
        return L;
    },
    mx: function () {
        return D;
    },
    t6: function () {
        return M;
    }
}),
    n(47120);
var r = n(192379),
    i = n(525654),
    u = n.n(i),
    l = n(259443),
    o = n(442837),
    a = n(846027),
    c = n(607070),
    s = n(578976),
    d = n(569545),
    E = n(199902),
    f = n(430824),
    p = n(131951),
    _ = n(158776),
    m = n(959457),
    S = n(594174),
    C = n(451478),
    T = n(626135),
    h = n(980463),
    v = n(823961),
    N = n(896835),
    g = n(981631),
    I = n(37113);
let Z = new l.Yd('HDStreamingConsumableModal'),
    y = (e) => {
        let t = (0, o.e7)([f.Z], () => f.Z.getGuild(null == e ? void 0 : e.guild_id)),
            n = (0, o.e7)([S.default], () => {
                var e;
                return null === (e = S.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            i = (0, o.Wu)([E.Z], () => (null == e ? [] : E.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n))),
            u = i.some((e) => {
                let t = S.default.getUser(e.ownerId);
                return null != t && _.Z.isMobileOnline(t.id);
            }),
            [l, a] = (0, r.useState)(null),
            [c, s] = (0, r.useState)([]);
        (0, o.e7)(
            [m.Z],
            () => {
                if (null == l || Date.now() - l > 10000) {
                    let e = i.map((e) => {
                        var t;
                        let n = (0, d.V9)(e),
                            r = m.Z.getRTCConnection(n);
                        return null == r ? void 0 : null === (t = r.getVideoStats()) || void 0 === t ? void 0 : t.inbound_bitrate_estimate_percentile99;
                    });
                    Z.info('Setting bitrates', e), s(e), a(Date.now());
                }
            },
            [l, i]
        );
        let p = (0, r.useMemo)(() => 0 === c.length || (!c.some((e) => null == e || e < 3500000) && !0), [c]),
            C = (null == t ? void 0 : t.premiumTier) === g.Eu4.NONE || (null == t ? void 0 : t.premiumTier) === g.Eu4.TIER_1;
        return C && p && !u;
    },
    A = (e, t) => {
        let n = (0, o.e7)([S.default], () => {
                var e;
                return null === (e = S.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            r = (0, o.Wu)([E.Z], () => (null == e ? [] : E.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n))),
            i = (0, N.j)(t),
            u = y(e);
        return i && u && r.length > 0;
    };
function b(e) {
    let [t, n, i] = (0, o.Wu)([v.Z], () => [v.Z.isFetchingPrice(e), v.Z.getPrice(e), v.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && null == n && !i && (0, h.Gq)(e);
        }, [t, n, i, e]),
        {
            price: n,
            fetchingPrice: t,
            error: i
        }
    );
}
function M(e) {
    let [t, n, i, u, l] = (0, o.Wu)([v.Z], () => [v.Z.isEntitlementFetched(e), v.Z.fetchPotionCount(e), v.Z.isEntitlementFetching(e), v.Z.getEntitlement(e), v.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            !t && !i && (0, h.gA)(e);
        }, [t, i, e]),
        {
            entitlement: u,
            numPotions: n,
            fetchedEntitlement: t,
            error: l
        }
    );
}
function O(e, t) {
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
function R(e) {
    O(e, () => {
        let t = E.Z.getCurrentUserActiveStream();
        if (null != t && t.channelId === e.id) {
            let e = p.Z.getState().goLiveSource;
            (0, h.x8)(null == e ? void 0 : e.quality);
            let t = (0, s.s)(I.LY.RESOLUTION_1440, I.ws.FPS_60, e);
            a.Z.setGoLiveSource(t);
        }
    });
}
function L() {
    var e;
    let t = (null !== (e = u().name) && void 0 !== e ? e : 'unknown').toLowerCase(),
        n = (0, o.e7)([C.Z], () => C.Z.isFocused()),
        r = (0, o.e7)([c.Z], () => c.Z.useReducedMotion);
    return 'safari' === t || !n || r;
}
function D(e) {
    T.default.track(g.rMx.CONSUMABLE_HD_STREAMING_ENTRYPOINT, { location: e });
}
function w(e) {
    let t = (0, o.e7)([f.Z], () => f.Z.getGuild(null == e ? void 0 : e.guild_id)),
        n = (0, N.j)('VoiceEffectsActionBar');
    return ((null == t ? void 0 : t.premiumTier) === g.Eu4.NONE || (null == t ? void 0 : t.premiumTier) === g.Eu4.TIER_1) && (null == e ? void 0 : e.type) === g.d4z.GUILD_VOICE && !(null == e ? void 0 : e.isHDStreamSplashed) && n;
}

n.d(t, {
    J: function () {
        return R;
    },
    Ou: function () {
        return F;
    },
    R2: function () {
        return O;
    },
    T$: function () {
        return M;
    },
    Uu: function () {
        return Z;
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
        return y;
    }
}),
    n(47120);
var r = n(192379),
    i = n(525654),
    u = n.n(i),
    l = n(259443),
    o = n(442837),
    s = n(846027),
    a = n(607070),
    E = n(569545),
    c = n(199902),
    d = n(430824),
    _ = n(131951),
    f = n(158776),
    S = n(959457),
    T = n(594174),
    C = n(451478),
    p = n(626135),
    m = n(997323),
    N = n(120619),
    h = n(215339),
    I = n(578976),
    g = n(981631),
    A = n(37113);
let v = new l.Yd('HDStreamingConsumableModal'),
    M = (e) => {
        let t = (0, o.e7)([d.Z], () => d.Z.getGuild(null == e ? void 0 : e.guild_id)),
            n = (0, o.e7)([T.default], () => {
                var e;
                return null === (e = T.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            i = (0, o.Wu)([c.Z], () => (null == e ? [] : c.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n))),
            u = i.some((e) => {
                let t = T.default.getUser(e.ownerId);
                return null != t && f.Z.isMobileOnline(t.id);
            }),
            [l, s] = (0, r.useState)(null),
            [a, _] = (0, r.useState)([]);
        (0, o.e7)(
            [S.Z],
            () => {
                if (null == l || Date.now() - l > 10000) {
                    let e = i.map((e) => {
                        var t;
                        let n = (0, E.V9)(e),
                            r = S.Z.getRTCConnection(n);
                        return null == r ? void 0 : null === (t = r.getVideoStats()) || void 0 === t ? void 0 : t.inbound_bitrate_estimate_percentile99;
                    });
                    v.info('Setting bitrates', e), _(e), s(Date.now());
                }
            },
            [l, i]
        );
        let C = (0, r.useMemo)(() => 0 === a.length || (!a.some((e) => null == e || e < 3500000) && !0), [a]),
            p = (null == t ? void 0 : t.premiumTier) === g.Eu4.NONE || (null == t ? void 0 : t.premiumTier) === g.Eu4.TIER_1;
        return p && C && !u;
    },
    L = (e, t) => {
        let n = (0, o.e7)([T.default], () => {
                var e;
                return null === (e = T.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            r = (0, o.Wu)([c.Z], () => (null == e ? [] : c.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n))),
            i = (0, h.j)(t),
            u = M(e);
        return i && u && r.length > 0;
    };
function O(e) {
    let [t, n, i] = (0, o.Wu)([N.Z], () => [N.Z.isFetchingPrice(e), N.Z.getPrice(e), N.Z.getErrored(e)]);
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
function y(e) {
    let [t, n, i, u] = (0, o.Wu)([N.Z], () => [N.Z.isEntitlementFetched(e), N.Z.isEntitlementFetching(e), N.Z.getEntitlement(e), N.Z.getErrored(e)]);
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
function R(e, t) {
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
function Z(e) {
    R(e, () => {
        let t = c.Z.getCurrentUserActiveStream();
        if (null != t && t.channelId === e.id) {
            let e = _.Z.getState().goLiveSource;
            (0, m.x8)(null == e ? void 0 : e.quality);
            let t = (0, I.s)(A.LY.RESOLUTION_1440, A.ws.FPS_60, e);
            s.Z.setGoLiveSource(t);
        }
    });
}
function b() {
    var e;
    let t = (null !== (e = u().name) && void 0 !== e ? e : 'unknown').toLowerCase(),
        n = (0, o.e7)([C.Z], () => C.Z.isFocused()),
        r = (0, o.e7)([a.Z], () => a.Z.useReducedMotion);
    return 'safari' === t || !n || r;
}
function U(e) {
    p.default.track(g.rMx.CONSUMABLE_HD_STREAMING_ENTRYPOINT, { location: e });
}
function F(e) {
    let t = (0, o.e7)([d.Z], () => d.Z.getGuild(null == e ? void 0 : e.guild_id)),
        n = (0, h.j)('VoiceEffectsActionBar');
    return ((null == t ? void 0 : t.premiumTier) === g.Eu4.NONE || (null == t ? void 0 : t.premiumTier) === g.Eu4.TIER_1) && (null == e ? void 0 : e.type) === g.d4z.GUILD_VOICE && !(null == e ? void 0 : e.isHDStreamSplashed) && n;
}

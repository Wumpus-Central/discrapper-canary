n.d(t, {
    J: () => x,
    Ou: () => j,
    R2: () => w,
    T$: () => R,
    Uu: () => L,
    ZC: () => B,
    Zm: () => P,
    bK: () => M,
    mx: () => k,
    t6: () => D,
    tv: () => U,
    vY: () => G
}),
    n(47120);
var r = n(192379),
    i = n(525654),
    o = n.n(i),
    a = n(259443),
    s = n(442837),
    l = n(846027),
    c = n(607070),
    u = n(578976),
    d = n(569545),
    f = n(199902),
    p = n(430824),
    _ = n(131951),
    h = n(158776),
    m = n(959457),
    g = n(594174),
    E = n(451478),
    v = n(626135),
    b = n(980463),
    y = n(823961),
    O = n(896835),
    S = n(477931),
    I = n(981631),
    T = n(37113);
let N = 3500000,
    A = 10000,
    C = new a.Yd('HDStreamingConsumableModal'),
    R = (e) => {
        let t = (0, s.e7)([p.Z], () => p.Z.getGuild(null == e ? void 0 : e.guild_id)),
            n = (0, s.e7)([g.default], () => {
                var e;
                return null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            i = (0, s.Wu)([f.Z], () => (null == e ? [] : f.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n))),
            o = i.some((e) => {
                let t = g.default.getUser(e.ownerId);
                return null != t && h.Z.isMobileOnline(t.id);
            }),
            [a, l] = (0, r.useState)(null),
            [c, u] = (0, r.useState)([]);
        (0, s.e7)(
            [m.Z],
            () => {
                if (null == a || Date.now() - a > A) {
                    let e = i.map((e) => {
                        var t;
                        let n = (0, d.V9)(e),
                            r = m.Z.getRTCConnection(n);
                        return null == r ? void 0 : null === (t = r.getVideoStats()) || void 0 === t ? void 0 : t.inbound_bitrate_estimate_percentile99;
                    });
                    C.info('Setting bitrates', e), u(e), l(Date.now());
                }
            },
            [a, i]
        );
        let _ = (0, r.useMemo)(() => 0 === c.length || !c.some((e) => null == e || e < N), [c]);
        return ((null == t ? void 0 : t.premiumTier) === I.Eu4.NONE || (null == t ? void 0 : t.premiumTier) === I.Eu4.TIER_1) && _ && !o;
    },
    P = (e, t) => {
        let n = (0, s.e7)([g.default], () => {
                var e;
                return null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            r = (0, s.Wu)([f.Z], () => (null == e ? [] : f.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n))),
            i = (0, O.j)(t),
            o = R(e);
        return i && o && r.length > 0;
    };
function w(e) {
    let [t, n, i] = (0, s.Wu)([y.Z], () => [y.Z.isFetchingPrice(e), y.Z.getPrice(e), y.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            t || null != n || i || (0, b.Gq)(e);
        }, [t, n, i, e]),
        {
            price: n,
            fetchingPrice: t,
            error: i
        }
    );
}
function D(e) {
    let [t, n, i, o, a] = (0, s.Wu)([y.Z], () => [y.Z.isEntitlementFetched(e), y.Z.fetchPotionCount(e), y.Z.isEntitlementFetching(e), y.Z.getEntitlement(e), y.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            t || i || (0, b.gA)(e);
        }, [t, i, e]),
        {
            entitlement: o,
            numPotions: n,
            fetchedEntitlement: t,
            error: a
        }
    );
}
function x(e, t) {
    let n = (0, r.useRef)(!0),
        i = null == e ? void 0 : e.hdStreamingUntil,
        o = (0, r.useRef)(t);
    (0, r.useEffect)(() => {
        o.current = t;
    }),
        (0, r.useEffect)(() => {
            if (n.current) {
                n.current = !1;
                return;
            }
            if (null != i && new Date(i) > new Date()) return o.current();
        }, [i]);
}
function L(e) {
    x(e, () => {
        let t = f.Z.getCurrentUserActiveStream();
        if (null != t && t.channelId === e.id) {
            let e = _.Z.getState().goLiveSource;
            (0, b.x8)(null == e ? void 0 : e.quality);
            let t = (0, u.s)(T.LY.RESOLUTION_1440, T.ws.FPS_60, e);
            l.Z.setGoLiveSource(t);
        }
    });
}
function M() {
    var e;
    let t = (null !== (e = o().name) && void 0 !== e ? e : 'unknown').toLowerCase(),
        n = (0, s.e7)([E.Z], () => E.Z.isFocused()),
        r = (0, s.e7)([c.Z], () => c.Z.useReducedMotion);
    return 'safari' === t || !n || r;
}
function k(e) {
    v.default.track(I.rMx.CONSUMABLE_HD_STREAMING_ENTRYPOINT, { location: e });
}
function j(e) {
    let t = (0, s.e7)([p.Z], () => p.Z.getGuild(null == e ? void 0 : e.guild_id)),
        n = (0, O.j)('VoiceEffectsActionBar');
    return ((null == t ? void 0 : t.premiumTier) === I.Eu4.NONE || (null == t ? void 0 : t.premiumTier) === I.Eu4.TIER_1) && (null == e ? void 0 : e.type) === I.d4z.GUILD_VOICE && !(null == e ? void 0 : e.isHDStreamSplashed) && n;
}
function U(e, t, n, r) {
    return !t && null == n && ('' !== e || (null != r && r.length > 0));
}
function G(e) {
    if (null != e)
        return {
            message_emoji: {
                id: e.emoji.id,
                name: (0, b.zI)(e.emoji)
            }
        };
}
function B(e) {
    if (null == e || null == e.potions || 0 === e.potions.length) return null;
    for (let r of e.potions) {
        var t, n;
        if (r.type === S.B.CONFETTI && r.used_by === (null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (null === (n = r.emoji) || void 0 === n ? void 0 : n.length) > 0) return r.emoji[0];
    }
    return null;
}

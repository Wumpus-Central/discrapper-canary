n.d(t, {
    J: () => P,
    Ou: () => U,
    R2: () => x,
    T$: () => O,
    Uu: () => w,
    ZC: () => Z,
    Zm: () => D,
    bK: () => M,
    mx: () => k,
    t6: () => L,
    tv: () => G,
    vY: () => B
}),
    n(47120);
var i = n(192379),
    r = n(525654),
    a = n.n(r),
    s = n(259443),
    o = n(442837),
    l = n(846027),
    u = n(607070),
    c = n(578976),
    d = n(569545),
    f = n(199902),
    _ = n(430824),
    p = n(131951),
    h = n(158776),
    m = n(959457),
    g = n(594174),
    E = n(451478),
    v = n(626135),
    y = n(980463),
    I = n(823961),
    T = n(896835),
    b = n(477931),
    S = n(981631),
    A = n(37113);
let N = 3500000,
    C = 10000,
    R = new s.Yd('HDStreamingConsumableModal'),
    O = (e) => {
        let t = (0, o.e7)([_.Z], () => _.Z.getGuild(null == e ? void 0 : e.guild_id)),
            n = (0, o.e7)([g.default], () => {
                var e;
                return null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            r = (0, o.Wu)([f.Z], () => (null == e ? [] : f.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n))),
            a = r.some((e) => {
                let t = g.default.getUser(e.ownerId);
                return null != t && h.Z.isMobileOnline(t.id);
            }),
            [s, l] = (0, i.useState)(null),
            [u, c] = (0, i.useState)([]);
        (0, o.e7)(
            [m.Z],
            () => {
                if (null == s || Date.now() - s > C) {
                    let e = r.map((e) => {
                        var t;
                        let n = (0, d.V9)(e),
                            i = m.Z.getRTCConnection(n);
                        return null == i ? void 0 : null === (t = i.getVideoStats()) || void 0 === t ? void 0 : t.inbound_bitrate_estimate_percentile99;
                    });
                    R.info('Setting bitrates', e), c(e), l(Date.now());
                }
            },
            [s, r]
        );
        let p = (0, i.useMemo)(() => 0 === u.length || !u.some((e) => null == e || e < N), [u]);
        return ((null == t ? void 0 : t.premiumTier) === S.Eu4.NONE || (null == t ? void 0 : t.premiumTier) === S.Eu4.TIER_1) && p && !a;
    },
    D = (e, t) => {
        let n = (0, o.e7)([g.default], () => {
                var e;
                return null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            i = (0, o.Wu)([f.Z], () => (null == e ? [] : f.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n))),
            r = (0, T.j)(t),
            a = O(e);
        return r && a && i.length > 0;
    };
function x(e) {
    let [t, n, r] = (0, o.Wu)([I.Z], () => [I.Z.isFetchingPrice(e), I.Z.getPrice(e), I.Z.getErrored(e)]);
    return (
        (0, i.useEffect)(() => {
            t || null != n || r || (0, y.Gq)(e);
        }, [t, n, r, e]),
        {
            price: n,
            fetchingPrice: t,
            error: r
        }
    );
}
function L(e) {
    let [t, n, r, a, s] = (0, o.Wu)([I.Z], () => [I.Z.isEntitlementFetched(e), I.Z.fetchPotionCount(e), I.Z.isEntitlementFetching(e), I.Z.getEntitlement(e), I.Z.getErrored(e)]);
    return (
        (0, i.useEffect)(() => {
            t || r || (0, y.gA)(e);
        }, [t, r, e]),
        {
            entitlement: a,
            numPotions: n,
            fetchedEntitlement: t,
            error: s
        }
    );
}
function P(e, t) {
    let n = (0, i.useRef)(!0),
        r = null == e ? void 0 : e.hdStreamingUntil,
        a = (0, i.useRef)(t);
    (0, i.useEffect)(() => {
        a.current = t;
    }),
        (0, i.useEffect)(() => {
            if (n.current) {
                n.current = !1;
                return;
            }
            if (null != r && new Date(r) > new Date()) return a.current();
        }, [r]);
}
function w(e) {
    P(e, () => {
        let t = f.Z.getCurrentUserActiveStream();
        if (null != t && t.channelId === e.id) {
            let e = p.Z.getState().goLiveSource;
            (0, y.x8)(null == e ? void 0 : e.quality);
            let t = (0, c.s)(A.LY.RESOLUTION_1440, A.ws.FPS_60, e);
            l.Z.setGoLiveSource(t);
        }
    });
}
function M() {
    var e;
    let t = (null !== (e = a().name) && void 0 !== e ? e : 'unknown').toLowerCase(),
        n = (0, o.e7)([E.Z], () => E.Z.isFocused()),
        i = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
    return 'safari' === t || !n || i;
}
function k(e) {
    v.default.track(S.rMx.CONSUMABLE_HD_STREAMING_ENTRYPOINT, { location: e });
}
function U(e) {
    let t = (0, o.e7)([_.Z], () => _.Z.getGuild(null == e ? void 0 : e.guild_id)),
        n = (0, T.j)('VoiceEffectsActionBar');
    return ((null == t ? void 0 : t.premiumTier) === S.Eu4.NONE || (null == t ? void 0 : t.premiumTier) === S.Eu4.TIER_1) && (null == e ? void 0 : e.type) === S.d4z.GUILD_VOICE && !(null == e ? void 0 : e.isHDStreamSplashed) && n;
}
function G(e, t, n, i) {
    return !t && null == n && ('' !== e || (null != i && i.length > 0));
}
function B(e) {
    if (null != e)
        return {
            message_emoji: {
                id: e.emoji.id,
                name: (0, y.zI)(e.emoji)
            }
        };
}
function Z(e) {
    if (null == e || null == e.potions || 0 === e.potions.length) return null;
    for (let i of e.potions) {
        var t, n;
        if (i.type === b.B.CONFETTI && i.used_by === (null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (null === (n = i.emoji) || void 0 === n ? void 0 : n.length) > 0) return i.emoji[0];
    }
    return null;
}

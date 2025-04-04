n.d(t, {
    J: () => M,
    Nt: () => Z,
    Ou: () => G,
    R2: () => L,
    T$: () => w,
    Uu: () => k,
    ZC: () => V,
    Zm: () => D,
    bK: () => j,
    mx: () => U,
    t6: () => x,
    tv: () => B,
    vY: () => F
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
    _ = n(430824),
    p = n(131951),
    h = n(158776),
    m = n(959457),
    g = n(594174),
    E = n(451478),
    b = n(626135),
    y = n(980463),
    v = n(823961),
    O = n(317951),
    I = n(111810),
    S = n(896835),
    T = n(477931),
    N = n(981631),
    A = n(37113);
let C = 3500000,
    R = 10000,
    P = new a.Yd('HDStreamingConsumableModal'),
    w = (e) => {
        let t = (0, s.e7)([_.Z], () => _.Z.getGuild(null == e ? void 0 : e.guild_id)),
            n = (0, s.e7)([g.default], () => {
                var e;
                return null == (e = g.default.getCurrentUser()) ? void 0 : e.id;
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
                if (null == a || Date.now() - a > R) {
                    let e = i.map((e) => {
                        var t;
                        let n = (0, d.V9)(e),
                            r = m.Z.getRTCConnection(n);
                        return null == r || null == (t = r.getVideoStats()) ? void 0 : t.inbound_bitrate_estimate_percentile99;
                    });
                    P.info('Setting bitrates', e), u(e), l(Date.now());
                }
            },
            [a, i]
        );
        let p = (0, r.useMemo)(() => 0 === c.length || !c.some((e) => null == e || e < C), [c]);
        return ((null == t ? void 0 : t.premiumTier) === N.Eu4.NONE || (null == t ? void 0 : t.premiumTier) === N.Eu4.TIER_1) && p && !o;
    },
    D = (e, t) => {
        let n = (0, s.e7)([g.default], () => {
                var e;
                return null == (e = g.default.getCurrentUser()) ? void 0 : e.id;
            }),
            r = (0, s.Wu)([f.Z], () => (null == e ? [] : f.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== n))),
            i = (0, S.j)(t),
            o = w(e);
        return i && o && r.length > 0;
    };
function L(e) {
    let [t, n, i] = (0, s.Wu)([v.Z], () => [v.Z.isFetchingPrice(e), v.Z.getPrice(e), v.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            t || null != n || i || (0, y.Gq)(e);
        }, [t, n, i, e]),
        {
            price: n,
            fetchingPrice: t,
            error: i
        }
    );
}
function x(e) {
    let t = (0, I.V1)('Utils.tsx'),
        [n, i, o, a, l] = (0, s.Wu)([v.Z], () => [v.Z.isEntitlementFetched(e), v.Z.fetchPotionCount(e), v.Z.isEntitlementFetching(e), v.Z.getEntitlement(e), v.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            n || o || !t || (0, y.gA)(e);
        }, [n, o, e, t]),
        {
            entitlement: a,
            numPotions: i,
            fetchedEntitlement: n,
            error: l
        }
    );
}
function M(e, t) {
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
function k(e) {
    M(e, () => {
        let t = f.Z.getCurrentUserActiveStream();
        if (null != t && t.channelId === e.id) {
            let e = p.Z.getState().goLiveSource;
            (0, y.x8)(null == e ? void 0 : e.quality);
            let t = (0, u.s_)(A.LY.RESOLUTION_1440, A.ws.FPS_60, e);
            l.Z.setGoLiveSource(t);
        }
    });
}
function j() {
    var e;
    let t = (null != (e = o().name) ? e : 'unknown').toLowerCase(),
        n = (0, s.e7)([E.Z], () => E.Z.isFocused()),
        r = (0, s.e7)([c.Z], () => c.Z.useReducedMotion);
    return 'safari' === t || !n || r;
}
function U(e) {
    b.default.track(N.rMx.CONSUMABLE_HD_STREAMING_ENTRYPOINT, { location: e });
}
function G(e) {
    let t = (0, s.e7)([_.Z], () => _.Z.getGuild(null == e ? void 0 : e.guild_id)),
        n = (0, S.j)('VoiceEffectsActionBar');
    return ((null == t ? void 0 : t.premiumTier) === N.Eu4.NONE || (null == t ? void 0 : t.premiumTier) === N.Eu4.TIER_1) && (null == e ? void 0 : e.type) === N.d4z.GUILD_VOICE && !(null == e ? void 0 : e.isHDStreamSplashed) && n;
}
function B(e, t, n, r) {
    return !t && null == n && ('' !== e || (null != r && r.length > 0));
}
function F(e) {
    if (null != e)
        return {
            message_emoji: {
                id: e.emoji.id,
                name: (0, y.zI)(e.emoji)
            }
        };
}
function V(e) {
    if (null == e || null == e.potions || 0 === e.potions.length) return null;
    for (let r of e.potions) {
        var t, n;
        if (r.type === T.B.CONFETTI && r.used_by === (null == (t = g.default.getCurrentUser()) ? void 0 : t.id) && (null == (n = r.emoji) ? void 0 : n.length) > 0) return r.emoji[0];
    }
    return null;
}
let Z = () => {
    let { entitlement: e, numPotions: t } = x(O.D1);
    return null != e && e.type === N.qc2.PURCHASE && null != t && t > 0;
};

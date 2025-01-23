r.d(n, {
    J: function () {
        return M;
    },
    Ou: function () {
        return G;
    },
    R2: function () {
        return w;
    },
    T$: function () {
        return L;
    },
    Uu: function () {
        return k;
    },
    ZC: function () {
        return V;
    },
    Zm: function () {
        return x;
    },
    bK: function () {
        return U;
    },
    mx: function () {
        return B;
    },
    t6: function () {
        return P;
    },
    tv: function () {
        return Z;
    },
    vY: function () {
        return F;
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
    A = r(477931),
    C = r(981631),
    N = r(37113);
let R = 3500000,
    O = 10000,
    D = new l.Yd('HDStreamingConsumableModal'),
    L = (e) => {
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
                if (null == s || Date.now() - s > O) {
                    let e = i.map((e) => {
                        var n;
                        let r = (0, p.V9)(e),
                            i = E.Z.getRTCConnection(r);
                        return null == i ? void 0 : null === (n = i.getVideoStats()) || void 0 === n ? void 0 : n.inbound_bitrate_estimate_percentile99;
                    });
                    D.info('Setting bitrates', e), d(e), l(Date.now());
                }
            },
            [s, i]
        );
        let f = (0, a.useMemo)(() => 0 === c.length || (!c.some((e) => null == e || e < R) && !0), [c]);
        return ((null == n ? void 0 : n.premiumTier) === C.Eu4.NONE || (null == n ? void 0 : n.premiumTier) === C.Eu4.TIER_1) && f && !o;
    },
    x = (e, n) => {
        let r = (0, u.e7)([v.default], () => {
                var e;
                return null === (e = v.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
            }),
            i = (0, u.Wu)([h.Z], () => (null == e ? [] : h.Z.getAllActiveStreamsForChannel(e.id).filter((e) => e.ownerId !== r))),
            a = (0, S.j)(n),
            o = L(e);
        return a && o && i.length > 0;
    };
function w(e) {
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
function P(e) {
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
function M(e, n) {
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
function k(e) {
    M(e, () => {
        let n = h.Z.getCurrentUserActiveStream();
        if (null != n && n.channelId === e.id) {
            let e = m.Z.getState().goLiveSource;
            (0, I.x8)(null == e ? void 0 : e.quality);
            let n = (0, f.s)(N.LY.RESOLUTION_1440, N.ws.FPS_60, e);
            c.Z.setGoLiveSource(n);
        }
    });
}
function U() {
    var e;
    let n = (null !== (e = s().name) && void 0 !== e ? e : 'unknown').toLowerCase(),
        r = (0, u.e7)([y.Z], () => y.Z.isFocused()),
        i = (0, u.e7)([d.Z], () => d.Z.useReducedMotion);
    return 'safari' === n || !r || i;
}
function B(e) {
    b.default.track(C.rMx.CONSUMABLE_HD_STREAMING_ENTRYPOINT, { location: e });
}
function G(e) {
    let n = (0, u.e7)([_.Z], () => _.Z.getGuild(null == e ? void 0 : e.guild_id)),
        r = (0, S.j)('VoiceEffectsActionBar');
    return ((null == n ? void 0 : n.premiumTier) === C.Eu4.NONE || (null == n ? void 0 : n.premiumTier) === C.Eu4.TIER_1) && (null == e ? void 0 : e.type) === C.d4z.GUILD_VOICE && !(null == e ? void 0 : e.isHDStreamSplashed) && r;
}
function Z(e, n, r, i) {
    return !n && null == r && ('' !== e || (null != i && i.length > 0));
}
function F(e) {
    if (null != e)
        return {
            message_emoji: {
                id: e.emoji.id,
                name: (0, I.zI)(e.emoji)
            }
        };
}
function V(e) {
    if (null == e || null == e.potions || 0 === e.potions.length) return null;
    for (let i of e.potions) {
        var n, r;
        if (i.type === A.B.CONFETTI && i.used_by === (null === (n = v.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && (null === (r = i.emoji) || void 0 === r ? void 0 : r.length) > 0) return i.emoji[0];
    }
    return null;
}

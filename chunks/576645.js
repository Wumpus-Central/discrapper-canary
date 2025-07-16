(n.d(t, {
    J: () => I,
    Nt: () => R,
    R2: () => O,
    Uu: () => T,
    ZC: () => C,
    bK: () => S,
    t6: () => v,
    tv: () => A,
    vY: () => N
}),
    n(388685));
var r = n(73800),
    i = n(525654),
    a = n.n(i),
    o = n(442837),
    s = n(846027),
    l = n(607070),
    c = n(578976),
    u = n(199902),
    d = n(131951),
    f = n(594174),
    _ = n(451478),
    p = n(980463),
    h = n(823961),
    m = n(317951),
    g = n(111810),
    E = n(477931),
    b = n(981631),
    y = n(37113);
function O(e) {
    let [t, n, i] = (0, o.Wu)([h.Z], () => [h.Z.isFetchingPrice(e), h.Z.getPrice(e), h.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            t || null != n || i || (0, p.Gq)(e);
        }, [t, n, i, e]),
        {
            price: n,
            fetchingPrice: t,
            error: i
        }
    );
}
function v(e) {
    let t = (0, g.V1)('Utils.tsx'),
        [n, i, a, s, l] = (0, o.Wu)([h.Z], () => [h.Z.isEntitlementFetched(e), h.Z.fetchPotionCount(e), h.Z.isEntitlementFetching(e), h.Z.getEntitlement(e), h.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            null != l || n || a || !t || (0, p.gA)(e);
        }, [n, a, e, t, l]),
        {
            entitlement: s,
            numPotions: i,
            fetchedEntitlement: n,
            error: l
        }
    );
}
function I(e, t) {
    let n = (0, r.useRef)(!0),
        i = null == e ? void 0 : e.hdStreamingUntil,
        a = (0, r.useRef)(t);
    ((0, r.useEffect)(() => {
        a.current = t;
    }),
        (0, r.useEffect)(() => {
            if (n.current) {
                n.current = !1;
                return;
            }
            if (null != i && new Date(i) > new Date()) return a.current();
        }, [i]));
}
function T(e) {
    I(e, () => {
        let t = u.Z.getCurrentUserActiveStream();
        if (null != t && t.channelId === e.id) {
            let e = d.Z.getState().goLiveSource;
            (0, p.x8)(null == e ? void 0 : e.quality);
            let t = (0, c.s_)(y.LY.RESOLUTION_1440, y.ws.FPS_60, e);
            s.Z.setGoLiveSource(t);
        }
    });
}
function S() {
    var e;
    let t = (null != (e = a().name) ? e : 'unknown').toLowerCase(),
        n = (0, o.e7)([_.Z], () => _.Z.isFocused()),
        r = (0, o.e7)([l.Z], () => l.Z.useReducedMotion);
    return 'safari' === t || !n || r;
}
function A(e, t, n, r) {
    return !t && null == n && ('' !== e || (null != r && r.length > 0));
}
function N(e) {
    if (null != e)
        return {
            message_emoji: {
                id: e.emoji.id,
                name: (0, p.zI)(e.emoji)
            }
        };
}
function C(e) {
    if (null == e || null == e.potions || 0 === e.potions.length) return null;
    for (let r of e.potions) {
        var t, n;
        if (r.type === E.B.CONFETTI && r.used_by === (null == (t = f.default.getCurrentUser()) ? void 0 : t.id) && (null == (n = r.emoji) ? void 0 : n.length) > 0) return r.emoji[0];
    }
    return null;
}
let R = () => {
    let { entitlement: e, numPotions: t } = v(m.D1);
    return null != e && e.type === b.qc2.PURCHASE && null != t && t > 0;
};

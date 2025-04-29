n.d(t, { Z: () => p }), n(388685);
var i = n(73800),
    r = n(442837),
    s = n(607070),
    l = n(597688),
    a = n(350327),
    o = n(626135),
    c = n(211712),
    d = n(981631);
let u = Object.keys(c.hq),
    m = (e) => {
        let t = null == e ? u : u.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
function p() {
    let e = (0, r.e7)([s.Z], () => s.Z.useReducedMotion),
        [t, n] = (0, i.useState)(m()),
        {
            banner: u,
            themeColors: p,
            avatarDecorationSkuId: g
        } = (0, i.useMemo)(() => {
            let n = (0, c.Ib)(t);
            return {
                banner: n.getBannerSrc(e),
                themeColors: n.themeColors,
                avatarDecorationSkuId: n.avatarDecorationSkuId
            };
        }, [t, e]),
        h = (0, r.e7)([l.Z], () => {
            if (null == g) return;
            let e = l.Z.getProduct(g);
            if (null != e && 0 !== e.items.length) return e.items[0];
        });
    (0, i.useEffect)(() => {
        (0, a.x3)({
            banner: u,
            themeColors: p,
            avatarDecoration: h
        });
    }, [u, p, h]);
    let f = (0, i.useCallback)(() => {
        let e = m(t);
        n(e), o.default.track(d.rMx.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
    }, [t]);
    return {
        preset: t,
        onShuffle: f
    };
}

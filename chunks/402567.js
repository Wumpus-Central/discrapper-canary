n.d(t, { Z: () => g }), n(47120);
var r = n(192379),
    i = n(442837),
    s = n(607070),
    a = n(597688),
    o = n(350327),
    l = n(626135),
    c = n(211712),
    d = n(981631);
let u = Object.keys(c.hq),
    m = (e) => {
        let t = null == e ? u : u.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
function g() {
    let e = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        [t, n] = (0, r.useState)(m()),
        {
            banner: u,
            themeColors: g,
            avatarDecorationSkuId: p
        } = (0, r.useMemo)(() => {
            let n = (0, c.Ib)(t);
            return {
                banner: n.getBannerSrc(e),
                themeColors: n.themeColors,
                avatarDecorationSkuId: n.avatarDecorationSkuId
            };
        }, [t, e]),
        h = (0, i.e7)([a.Z], () => {
            if (null == p) return;
            let e = a.Z.getProduct(p);
            if (null != e && 0 !== e.items.length) return e.items[0];
        });
    (0, r.useEffect)(() => {
        (0, o.x3)({
            banner: u,
            themeColors: g,
            avatarDecoration: h
        });
    }, [u, g, h]);
    let f = (0, r.useCallback)(() => {
        let e = m(t);
        n(e), l.default.track(d.rMx.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
    }, [t]);
    return {
        preset: t,
        onShuffle: f
    };
}

n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(775602),
    s = n(590180),
    o = n(898461),
    l = n(207803),
    c = n(954571),
    u = n(461797),
    d = n(652215);
let f = Object.keys(u.jB),
    p = (e) => {
        let t = null == e ? f : f.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };

function _() {
    let e = (0, i.bG)([a.A], () => a.A.useReducedMotion),
        [t, n] = (0, r.useState)(p()),
        {
            banner: f,
            themeColors: _,
            avatarDecorationSkuId: h,
            displayNameStyles: m,
        } = (0, r.useMemo)(() => {
            let n = (0, u.Wt)(t);
            return {
                banner: n.getBannerSrc(e),
                themeColors: n.themeColors,
                avatarDecorationSkuId: n.avatarDecorationSkuId,
                displayNameStyles: n.displayNameStyles,
            };
        }, [t, e]),
        g = (0, i.bG)([s.A], () => {
            let e = s.A.getProduct(h);
            return (0, o.T)(null == e ? void 0 : e.items[0]) ? e.items[0] : null;
        });
    (0, r.useEffect)(() => {
        (0, l.w5)({
            banner: f,
            themeColors: _,
            avatarDecoration: g,
            displayNameStyles: m,
        });
    }, [f, _, g, m]);
    let E = (0, r.useCallback)(() => {
        let e = p(t);
        n(e),
            c.default.track(d.HAw.TRY_IT_OUT_PRESET_SHUFFLED, {
                preset: e,
            });
    }, [t]);
    return {
        preset: t,
        onShuffle: E,
    };
}

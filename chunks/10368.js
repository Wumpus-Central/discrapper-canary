n.d(t, { A: () => A });
var i = n(64700),
    s = n(311907),
    r = n(775602),
    a = n(590180),
    l = n(898461),
    o = n(207803),
    c = n(954571),
    d = n(461797),
    u = n(652215);
let _ = Object.keys(d.jB),
    m = (e) => {
        let t = null == e ? _ : _.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
function A() {
    let e = (0, s.bG)([r.A], () => r.A.useReducedMotion),
        [t, n] = (0, i.useState)(m()),
        {
            banner: _,
            themeColors: A,
            avatarDecorationSkuId: g,
            displayNameStyles: E,
        } = (0, i.useMemo)(() => {
            let n = (0, d.Wt)(t);
            return {
                banner: n.getBannerSrc(e),
                themeColors: n.themeColors,
                avatarDecorationSkuId: n.avatarDecorationSkuId,
                displayNameStyles: n.displayNameStyles,
            };
        }, [t, e]),
        h = (0, s.bG)([a.A], () => {
            let e = a.A.getProduct(g);
            return (0, l.T)(e?.items[0]) ? e.items[0] : null;
        });
    (0, i.useEffect)(() => {
        (0, o.w5)({ banner: _, themeColors: A, avatarDecoration: h, displayNameStyles: E });
    }, [_, A, h, E]);
    let p = (0, i.useCallback)(() => {
        let e = m(t);
        n(e), c.default.track(u.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
    }, [t]);
    return { preset: t, onShuffle: p };
}

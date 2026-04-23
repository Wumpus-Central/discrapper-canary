n.d(t, { A: () => _ });
var i = n(64700),
    s = n(311907),
    l = n(775602),
    a = n(590180),
    r = n(898461),
    o = n(207803),
    d = n(954571),
    u = n(461797),
    c = n(652215);
let g = Object.keys(u.jB),
    m = (e) => {
        let t = null == e ? g : g.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
function _() {
    let e = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        [t, n] = (0, i.useState)(m()),
        {
            banner: g,
            themeColors: _,
            avatarDecorationSkuId: A,
            displayNameStyles: h,
        } = (0, i.useMemo)(() => {
            let n = (0, u.Wt)(t);
            return {
                banner: n.getBannerSrc(e),
                themeColors: n.themeColors,
                avatarDecorationSkuId: n.avatarDecorationSkuId,
                displayNameStyles: n.displayNameStyles,
            };
        }, [t, e]),
        p = (0, s.bG)([a.A], () => {
            let e = a.A.getProduct(A);
            return (0, r.T)(e?.items[0]) ? e.items[0] : null;
        });
    (0, i.useEffect)(() => {
        (0, o.w5)({ banner: g, themeColors: _, avatarDecoration: p, displayNameStyles: h });
    }, [g, _, p, h]);
    let x = (0, i.useCallback)(() => {
        let e = m(t);
        n(e), d.default.track(c.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
    }, [t]);
    return { preset: t, onShuffle: x };
}

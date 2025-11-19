n.d(t, { Z: () => p }), n(388685);
var r = n(473749),
    i = n(442837),
    a = n(607070),
    o = n(597688),
    s = n(922347),
    l = n(350327),
    c = n(626135),
    u = n(211712),
    d = n(981631);
let f = Object.keys(u.hq),
    _ = (e) => {
        let t = null == e ? f : f.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
function p() {
    let e = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        [t, n] = (0, r.useState)(_()),
        {
            banner: f,
            themeColors: p,
            avatarDecorationSkuId: h,
            displayNameStyles: m,
        } = (0, r.useMemo)(() => {
            let n = (0, u.Ib)(t);
            return {
                banner: n.getBannerSrc(e),
                themeColors: n.themeColors,
                avatarDecorationSkuId: n.avatarDecorationSkuId,
                displayNameStyles: n.displayNameStyles,
            };
        }, [t, e]),
        g = (0, i.e7)([o.Z], () => {
            let e = o.Z.getProduct(h);
            return (0, s.M)(null == e ? void 0 : e.items[0]) ? e.items[0] : null;
        });
    (0, r.useEffect)(() => {
        (0, l.x3)({
            banner: f,
            themeColors: p,
            avatarDecoration: g,
            displayNameStyles: m,
        });
    }, [f, p, g, m]);
    let E = (0, r.useCallback)(() => {
        let e = _(t);
        n(e), c.default.track(d.rMx.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
    }, [t]);
    return {
        preset: t,
        onShuffle: E,
    };
}

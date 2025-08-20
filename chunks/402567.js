n.d(t, { Z: () => _ }), n(388685);
var r = n(647438),
    i = n(442837),
    a = n(607070),
    o = n(597688),
    s = n(350327),
    l = n(626135),
    c = n(211712),
    u = n(981631);
let d = Object.keys(c.hq),
    f = (e) => {
        let t = null == e ? d : d.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
function _() {
    let e = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        [t, n] = (0, r.useState)(f()),
        {
            banner: d,
            themeColors: _,
            avatarDecorationSkuId: p,
        } = (0, r.useMemo)(() => {
            let n = (0, c.Ib)(t);
            return {
                banner: n.getBannerSrc(e),
                themeColors: n.themeColors,
                avatarDecorationSkuId: n.avatarDecorationSkuId,
            };
        }, [t, e]),
        h = (0, i.e7)([o.Z], () => {
            if (null == p) return;
            let e = o.Z.getProduct(p);
            if (null != e && 0 !== e.items.length) return e.items[0];
        });
    (0, r.useEffect)(() => {
        (0, s.x3)({
            banner: d,
            themeColors: _,
            avatarDecoration: h,
        });
    }, [d, _, h]);
    let m = (0, r.useCallback)(() => {
        let e = f(t);
        n(e), l.default.track(u.rMx.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
    }, [t]);
    return {
        preset: t,
        onShuffle: m,
    };
}

n.d(t, {
    Qo: function () {
        return r;
    }
});
var i,
    r,
    a = n(200651),
    s = n(192379),
    l = n(120356),
    o = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(607070),
    g = n(821982),
    m = n(967538),
    f = n(885302),
    p = n(914677),
    _ = n(830164);
((i = r || (r = {}))[(i.NITRO_GEM = 0)] = 'NITRO_GEM'), (i[(i.NITRO_LOGO = 1)] = 'NITRO_LOGO'), (i[(i.AVATAR_DECO = 2)] = 'AVATAR_DECO');
let h = (e) => {
    let { avatarDecoAssetId: t, avatarDecoAssetDescription: n } = e,
        i = s.useMemo(() => (0, g.Z)(t, d.AvatarSizes.SIZE_120, !1), [t]);
    return (0, a.jsx)('div', {
        className: _.avatarDecoContainer,
        children: (0, a.jsx)('div', {
            className: _.avatarDeco,
            children: (0, a.jsx)('img', {
                className: _.avatarDecoImage,
                alt: n,
                src: i
            })
        })
    });
};
t.ZP = (e) => {
    let { showAnimations: t = !0, iconClassName: n, staticPercentage: i, innerCircleClassName: r, progressCircleStrokeSize: s, backgroundCircleSize: l, percentage: d, initialPercentage: g, progressCircleVariation: x = 0, avatarDecoAssetId: E, avatarDecoAssetDescription: b, ellipseOpacity: C, customAnimationClassName: v, circleColor: T, circleStroke: N } = e,
        I = (0, c.e7)([u.Z], () => u.Z.useReducedMotion),
        S = t && !I;
    return (0, a.jsx)('div', {
        className: o()(_.progressCircle, n),
        children: (0, a.jsx)(p.Z, {
            animationClassName: o()(_.activeProgressCircle, {
                [_.activeProgressCircleAnimation]: S,
                [null != v ? v : '']: S
            }),
            progressCircleStroke: N,
            progressCircleStrokeSize: s,
            percentage: null != i ? i : d,
            initialPercentage: null != i ? i : g,
            progressCircleVariation: x,
            children: (() => {
                switch (x) {
                    case 0:
                        return (0, a.jsx)(m.Z, {
                            className: S ? _.nitroGemAnimation : void 0,
                            backgroundColor: o()(_.gemBackgroundFill, r),
                            backgroundCircleSize: l
                        });
                    case 1:
                        return (0, a.jsx)(f.Z, {
                            circleColor: T,
                            ellipseOpacity: C
                        });
                    case 2:
                        if (null != E)
                            return (0, a.jsx)(h, {
                                avatarDecoAssetId: E,
                                avatarDecoAssetDescription: b
                            });
                        return null;
                    default:
                        return null;
                }
            })()
        })
    });
};

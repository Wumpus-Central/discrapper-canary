n.d(t, {
    Qo: () => m,
    ZP: () => g
});
var r,
    i = n(200651),
    o = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(821982),
    p = n(967538),
    _ = n(885302),
    f = n(914677),
    h = n(914242),
    m = (((r = {})[(r.NITRO_GEM = 0)] = 'NITRO_GEM'), (r[(r.NITRO_LOGO = 1)] = 'NITRO_LOGO'), (r[(r.AVATAR_DECO = 2)] = 'AVATAR_DECO'), r);
let b = (e) => {
        let { avatarDecoAssetId: t, avatarDecoAssetDescription: n } = e,
            r = o.useMemo(() => (0, d.Z)(t, c.EFr.SIZE_120, !1), [t]);
        return (0, i.jsx)('div', {
            className: h.avatarDecoContainer,
            children: (0, i.jsx)('div', {
                className: h.avatarDeco,
                children: (0, i.jsx)('img', {
                    className: h.avatarDecoImage,
                    alt: n,
                    src: r
                })
            })
        });
    },
    g = (e) => {
        let { showAnimations: t = !0, iconClassName: n, staticPercentage: r, innerCircleClassName: o, progressCircleStrokeSize: l, backgroundCircleSize: c, percentage: d, initialPercentage: m, progressCircleVariation: g = 0, avatarDecoAssetId: E, avatarDecoAssetDescription: C, ellipseOpacity: O, customAnimationClassName: y, circleColor: v, circleStroke: N } = e,
            S = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
            x = t && !S;
        return (0, i.jsx)('div', {
            className: s()(h.progressCircle, n),
            children: (0, i.jsx)(f.Z, {
                animationClassName: s()(h.activeProgressCircle, {
                    [h.activeProgressCircleAnimation]: x,
                    [null != y ? y : '']: x
                }),
                progressCircleStroke: N,
                progressCircleStrokeSize: l,
                percentage: null != r ? r : d,
                initialPercentage: null != r ? r : m,
                progressCircleVariation: g,
                children: (() => {
                    switch (g) {
                        case 0:
                            return (0, i.jsx)(p.Z, {
                                className: x ? h.nitroGemAnimation : void 0,
                                backgroundColor: s()(h.gemBackgroundFill, o),
                                backgroundCircleSize: c
                            });
                        case 1:
                            return (0, i.jsx)(_.Z, {
                                circleColor: v,
                                ellipseOpacity: O
                            });
                        case 2:
                            if (null != E)
                                return (0, i.jsx)(b, {
                                    avatarDecoAssetId: E,
                                    avatarDecoAssetDescription: C
                                });
                            return null;
                        default:
                            return null;
                    }
                })()
            })
        });
    };

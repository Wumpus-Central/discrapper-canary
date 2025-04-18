n.d(t, {
    Qo: () => m,
    ZP: () => y
});
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    a = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(821982),
    h = n(967538),
    p = n(885302),
    f = n(914677),
    g = n(914242),
    m = (((r = {})[(r.NITRO_GEM = 0)] = 'NITRO_GEM'), (r[(r.NITRO_LOGO = 1)] = 'NITRO_LOGO'), (r[(r.AVATAR_DECO = 2)] = 'AVATAR_DECO'), r);
let b = (e) => {
        let { avatarDecoAssetId: t, avatarDecoAssetDescription: n } = e,
            r = l.useMemo(() => (0, d.Z)(t, c.EFr.SIZE_120, !1), [t]);
        return (0, i.jsx)('div', {
            className: g.avatarDecoContainer,
            children: (0, i.jsx)('div', {
                className: g.avatarDeco,
                children: (0, i.jsx)('img', {
                    className: g.avatarDecoImage,
                    alt: n,
                    src: r
                })
            })
        });
    },
    y = (e) => {
        let { showAnimations: t = !0, iconClassName: n, staticPercentage: r, innerCircleClassName: l, progressCircleStrokeSize: o, backgroundCircleSize: c, percentage: d, initialPercentage: m, progressCircleVariation: y = 0, avatarDecoAssetId: _, avatarDecoAssetDescription: O, ellipseOpacity: v, customAnimationClassName: C, circleColor: j, circleStroke: S } = e,
            x = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
            E = t && !x;
        return (0, i.jsx)('div', {
            className: s()(g.progressCircle, n),
            children: (0, i.jsx)(f.Z, {
                animationClassName: s()(g.activeProgressCircle, {
                    [g.activeProgressCircleAnimation]: E,
                    [null != C ? C : '']: E
                }),
                progressCircleStroke: S,
                progressCircleStrokeSize: o,
                percentage: null != r ? r : d,
                initialPercentage: null != r ? r : m,
                progressCircleVariation: y,
                children: (() => {
                    switch (y) {
                        case 0:
                            return (0, i.jsx)(h.Z, {
                                className: E ? g.nitroGemAnimation : void 0,
                                backgroundColor: s()(g.gemBackgroundFill, l),
                                backgroundCircleSize: c
                            });
                        case 1:
                            return (0, i.jsx)(p.Z, {
                                circleColor: j,
                                ellipseOpacity: v
                            });
                        case 2:
                            if (null != _)
                                return (0, i.jsx)(b, {
                                    avatarDecoAssetId: _,
                                    avatarDecoAssetDescription: O
                                });
                            return null;
                        default:
                            return null;
                    }
                })()
            })
        });
    };

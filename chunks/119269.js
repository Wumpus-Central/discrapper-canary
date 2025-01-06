s.d(t, {
    Qo: function () {
        return r;
    }
});
var n,
    r,
    i = s(200651),
    a = s(192379),
    o = s(120356),
    c = s.n(o),
    l = s(442837),
    u = s(481060),
    d = s(607070),
    p = s(821982),
    f = s(967538),
    g = s(885302),
    x = s(914677),
    C = s(830164);
((n = r || (r = {}))[(n.NITRO_GEM = 0)] = 'NITRO_GEM'), (n[(n.NITRO_LOGO = 1)] = 'NITRO_LOGO'), (n[(n.AVATAR_DECO = 2)] = 'AVATAR_DECO');
let _ = (e) => {
    let { avatarDecoAssetId: t, avatarDecoAssetDescription: s } = e,
        n = a.useMemo(() => (0, p.Z)(t, u.AvatarSizes.SIZE_120, !1), [t]);
    return (0, i.jsx)('div', {
        className: C.avatarDecoContainer,
        children: (0, i.jsx)('div', {
            className: C.avatarDeco,
            children: (0, i.jsx)('img', {
                className: C.avatarDecoImage,
                alt: s,
                src: n
            })
        })
    });
};
t.ZP = (e) => {
    let { showAnimations: t = !0, iconClassName: s, staticPercentage: n, innerCircleClassName: r, progressCircleStrokeSize: a, backgroundCircleSize: o, percentage: u, initialPercentage: p, progressCircleVariation: h = 0, avatarDecoAssetId: m, avatarDecoAssetDescription: v, ellipseOpacity: L, customAnimationClassName: b, circleColor: E, circleStroke: A } = e,
        j = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        O = t && !j;
    return (0, i.jsx)('div', {
        className: c()(C.progressCircle, s),
        children: (0, i.jsx)(x.Z, {
            animationClassName: c()(C.activeProgressCircle, {
                [C.activeProgressCircleAnimation]: O,
                [null != b ? b : '']: O
            }),
            progressCircleStroke: A,
            progressCircleStrokeSize: a,
            percentage: null != n ? n : u,
            initialPercentage: null != n ? n : p,
            progressCircleVariation: h,
            children: (() => {
                switch (h) {
                    case 0:
                        return (0, i.jsx)(f.Z, {
                            className: O ? C.nitroGemAnimation : void 0,
                            backgroundColor: c()(C.gemBackgroundFill, r),
                            backgroundCircleSize: o
                        });
                    case 1:
                        return (0, i.jsx)(g.Z, {
                            circleColor: E,
                            ellipseOpacity: L
                        });
                    case 2:
                        if (null != m)
                            return (0, i.jsx)(_, {
                                avatarDecoAssetId: m,
                                avatarDecoAssetDescription: v
                            });
                        return null;
                    default:
                        return null;
                }
            })()
        })
    });
};

n.d(t, {
    Qo: function () {
        return r;
    }
});
var i,
    r,
    s = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(607070),
    m = n(821982),
    g = n(967538),
    h = n(885302),
    p = n(914677),
    x = n(830164);
((i = r || (r = {}))[(i.NITRO_GEM = 0)] = 'NITRO_GEM'), (i[(i.NITRO_LOGO = 1)] = 'NITRO_LOGO'), (i[(i.AVATAR_DECO = 2)] = 'AVATAR_DECO');
let f = (e) => {
    let { avatarDecoAssetId: t, avatarDecoAssetDescription: n } = e,
        i = a.useMemo(() => (0, m.Z)(t, d.AvatarSizes.SIZE_120, !1), [t]);
    return (0, s.jsx)('div', {
        className: x.avatarDecoContainer,
        children: (0, s.jsx)('div', {
            className: x.avatarDeco,
            children: (0, s.jsx)('img', {
                className: x.avatarDecoImage,
                alt: n,
                src: i
            })
        })
    });
};
t.ZP = (e) => {
    let { showAnimations: t = !0, iconClassName: n, staticPercentage: i, innerCircleClassName: r, progressCircleStrokeSize: a, backgroundCircleSize: l, percentage: d, initialPercentage: m, progressCircleVariation: _ = 0, avatarDecoAssetId: E, avatarDecoAssetDescription: C, ellipseOpacity: T, customAnimationClassName: S, circleColor: b, circleStroke: I } = e,
        N = (0, c.e7)([u.Z], () => u.Z.useReducedMotion),
        v = t && !N;
    return (0, s.jsx)('div', {
        className: o()(x.progressCircle, n),
        children: (0, s.jsx)(p.Z, {
            animationClassName: o()(x.activeProgressCircle, {
                [x.activeProgressCircleAnimation]: v,
                [null != S ? S : '']: v
            }),
            progressCircleStroke: I,
            progressCircleStrokeSize: a,
            percentage: null != i ? i : d,
            initialPercentage: null != i ? i : m,
            progressCircleVariation: _,
            children: (() => {
                switch (_) {
                    case 0:
                        return (0, s.jsx)(g.Z, {
                            className: v ? x.nitroGemAnimation : void 0,
                            backgroundColor: o()(x.gemBackgroundFill, r),
                            backgroundCircleSize: l
                        });
                    case 1:
                        return (0, s.jsx)(h.Z, {
                            circleColor: b,
                            ellipseOpacity: T
                        });
                    case 2:
                        if (null != E)
                            return (0, s.jsx)(f, {
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

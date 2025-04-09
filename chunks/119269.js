n.d(t, {
    Qo: () => m,
    ZP: () => b
});
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(821982),
    p = n(967538),
    h = n(885302),
    g = n(914677),
    f = n(914242),
    m = (((r = {})[(r.NITRO_GEM = 0)] = 'NITRO_GEM'), (r[(r.NITRO_LOGO = 1)] = 'NITRO_LOGO'), (r[(r.AVATAR_DECO = 2)] = 'AVATAR_DECO'), r);
let _ = (e) => {
        let { avatarDecoAssetId: t, avatarDecoAssetDescription: n } = e,
            r = o.useMemo(() => (0, d.Z)(t, c.EFr.SIZE_120, !1), [t]);
        return (0, i.jsx)('div', {
            className: f.avatarDecoContainer,
            children: (0, i.jsx)('div', {
                className: f.avatarDeco,
                children: (0, i.jsx)('img', {
                    className: f.avatarDecoImage,
                    alt: n,
                    src: r
                })
            })
        });
    },
    b = (e) => {
        let { showAnimations: t = !0, iconClassName: n, staticPercentage: r, innerCircleClassName: o, progressCircleStrokeSize: a, backgroundCircleSize: c, percentage: d, initialPercentage: m, progressCircleVariation: b = 0, avatarDecoAssetId: x, avatarDecoAssetDescription: N, ellipseOpacity: v, customAnimationClassName: E, circleColor: I, circleStroke: j } = e,
            S = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
            O = t && !S;
        return (0, i.jsx)('div', {
            className: l()(f.progressCircle, n),
            children: (0, i.jsx)(g.Z, {
                animationClassName: l()(f.activeProgressCircle, {
                    [f.activeProgressCircleAnimation]: O,
                    [null != E ? E : '']: O
                }),
                progressCircleStroke: j,
                progressCircleStrokeSize: a,
                percentage: null != r ? r : d,
                initialPercentage: null != r ? r : m,
                progressCircleVariation: b,
                children: (() => {
                    switch (b) {
                        case 0:
                            return (0, i.jsx)(p.Z, {
                                className: O ? f.nitroGemAnimation : void 0,
                                backgroundColor: l()(f.gemBackgroundFill, o),
                                backgroundCircleSize: c
                            });
                        case 1:
                            return (0, i.jsx)(h.Z, {
                                circleColor: I,
                                ellipseOpacity: v
                            });
                        case 2:
                            if (null != x)
                                return (0, i.jsx)(_, {
                                    avatarDecoAssetId: x,
                                    avatarDecoAssetDescription: N
                                });
                            return null;
                        default:
                            return null;
                    }
                })()
            })
        });
    };

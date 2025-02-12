n.d(t, {
    Qo: () => f,
    ZP: () => x
});
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(821982),
    m = n(967538),
    g = n(885302),
    _ = n(914677),
    p = n(5904),
    f = (((i = {})[(i.NITRO_GEM = 0)] = 'NITRO_GEM'), (i[(i.NITRO_LOGO = 1)] = 'NITRO_LOGO'), (i[(i.AVATAR_DECO = 2)] = 'AVATAR_DECO'), i);
let h = (e) => {
        let { avatarDecoAssetId: t, avatarDecoAssetDescription: n } = e,
            i = a.useMemo(() => (0, u.Z)(t, c.EFr.SIZE_120, !1), [t]);
        return (0, r.jsx)('div', {
            className: p.avatarDecoContainer,
            children: (0, r.jsx)('div', {
                className: p.avatarDeco,
                children: (0, r.jsx)('img', {
                    className: p.avatarDecoImage,
                    alt: n,
                    src: i
                })
            })
        });
    },
    x = (e) => {
        let { showAnimations: t = !0, iconClassName: n, staticPercentage: i, innerCircleClassName: a, progressCircleStrokeSize: s, backgroundCircleSize: c, percentage: u, initialPercentage: f, progressCircleVariation: x = 0, avatarDecoAssetId: E, avatarDecoAssetDescription: C, ellipseOpacity: b, customAnimationClassName: v, circleColor: T, circleStroke: N } = e,
            I = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
            R = t && !I;
        return (0, r.jsx)('div', {
            className: l()(p.progressCircle, n),
            children: (0, r.jsx)(_.Z, {
                animationClassName: l()(p.activeProgressCircle, {
                    [p.activeProgressCircleAnimation]: R,
                    [null != v ? v : '']: R
                }),
                progressCircleStroke: N,
                progressCircleStrokeSize: s,
                percentage: null != i ? i : u,
                initialPercentage: null != i ? i : f,
                progressCircleVariation: x,
                children: (() => {
                    switch (x) {
                        case 0:
                            return (0, r.jsx)(m.Z, {
                                className: R ? p.nitroGemAnimation : void 0,
                                backgroundColor: l()(p.gemBackgroundFill, a),
                                backgroundCircleSize: c
                            });
                        case 1:
                            return (0, r.jsx)(g.Z, {
                                circleColor: T,
                                ellipseOpacity: b
                            });
                        case 2:
                            if (null != E)
                                return (0, r.jsx)(h, {
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

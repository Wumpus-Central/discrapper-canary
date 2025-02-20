n.d(t, {
    Qo: () => f,
    ZP: () => N
});
var r,
    i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(821982),
    m = n(967538),
    g = n(885302),
    p = n(914677),
    h = n(647508),
    f = (((r = {})[(r.NITRO_GEM = 0)] = 'NITRO_GEM'), (r[(r.NITRO_LOGO = 1)] = 'NITRO_LOGO'), (r[(r.AVATAR_DECO = 2)] = 'AVATAR_DECO'), r);
let b = (e) => {
        let { avatarDecoAssetId: t, avatarDecoAssetDescription: n } = e,
            r = s.useMemo(() => (0, u.Z)(t, c.EFr.SIZE_120, !1), [t]);
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
    N = (e) => {
        let { showAnimations: t = !0, iconClassName: n, staticPercentage: r, innerCircleClassName: s, progressCircleStrokeSize: a, backgroundCircleSize: c, percentage: u, initialPercentage: f, progressCircleVariation: N = 0, avatarDecoAssetId: x, avatarDecoAssetDescription: _, ellipseOpacity: E, customAnimationClassName: j, circleColor: C, circleStroke: O } = e,
            v = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
            S = t && !v;
        return (0, i.jsx)('div', {
            className: l()(h.progressCircle, n),
            children: (0, i.jsx)(p.Z, {
                animationClassName: l()(h.activeProgressCircle, {
                    [h.activeProgressCircleAnimation]: S,
                    [null != j ? j : '']: S
                }),
                progressCircleStroke: O,
                progressCircleStrokeSize: a,
                percentage: null != r ? r : u,
                initialPercentage: null != r ? r : f,
                progressCircleVariation: N,
                children: (() => {
                    switch (N) {
                        case 0:
                            return (0, i.jsx)(m.Z, {
                                className: S ? h.nitroGemAnimation : void 0,
                                backgroundColor: l()(h.gemBackgroundFill, s),
                                backgroundCircleSize: c
                            });
                        case 1:
                            return (0, i.jsx)(g.Z, {
                                circleColor: C,
                                ellipseOpacity: E
                            });
                        case 2:
                            if (null != x)
                                return (0, i.jsx)(b, {
                                    avatarDecoAssetId: x,
                                    avatarDecoAssetDescription: _
                                });
                            return null;
                        default:
                            return null;
                    }
                })()
            })
        });
    };

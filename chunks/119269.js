n.d(t, {
    Qo: () => f,
    ZP: () => x
});
var i,
    r = n(255367),
    s = n(73800),
    a = n(120356),
    l = n.n(a),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(821982),
    m = n(967538),
    p = n(885302),
    g = n(914677),
    h = n(914242),
    f = (((i = {})[(i.NITRO_GEM = 0)] = 'NITRO_GEM'), (i[(i.NITRO_LOGO = 1)] = 'NITRO_LOGO'), (i[(i.AVATAR_DECO = 2)] = 'AVATAR_DECO'), i);
let b = (e) => {
        let { avatarDecoAssetId: t, avatarDecoAssetDescription: n } = e,
            i = s.useMemo(() => (0, u.Z)(t, c.EFr.SIZE_120, !1), [t]);
        return (0, r.jsx)('div', {
            className: h.avatarDecoContainer,
            children: (0, r.jsx)('div', {
                className: h.avatarDeco,
                children: (0, r.jsx)('img', {
                    className: h.avatarDecoImage,
                    alt: n,
                    src: i
                })
            })
        });
    },
    x = (e) => {
        let { showAnimations: t = !0, iconClassName: n, staticPercentage: i, innerCircleClassName: s, progressCircleStrokeSize: a, backgroundCircleSize: c, percentage: u, initialPercentage: f, progressCircleVariation: x = 0, avatarDecoAssetId: _, avatarDecoAssetDescription: j, ellipseOpacity: C, customAnimationClassName: O, circleColor: E, circleStroke: v } = e,
            S = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
            T = t && !S;
        return (0, r.jsx)('div', {
            className: l()(h.progressCircle, n),
            children: (0, r.jsx)(g.Z, {
                animationClassName: l()(h.activeProgressCircle, {
                    [h.activeProgressCircleAnimation]: T,
                    [null != O ? O : '']: T
                }),
                progressCircleStroke: v,
                progressCircleStrokeSize: a,
                percentage: null != i ? i : u,
                initialPercentage: null != i ? i : f,
                progressCircleVariation: x,
                children: (() => {
                    switch (x) {
                        case 0:
                            return (0, r.jsx)(m.Z, {
                                className: T ? h.nitroGemAnimation : void 0,
                                backgroundColor: l()(h.gemBackgroundFill, s),
                                backgroundCircleSize: c
                            });
                        case 1:
                            return (0, r.jsx)(p.Z, {
                                circleColor: E,
                                ellipseOpacity: C
                            });
                        case 2:
                            if (null != _)
                                return (0, r.jsx)(b, {
                                    avatarDecoAssetId: _,
                                    avatarDecoAssetDescription: j
                                });
                            return null;
                        default:
                            return null;
                    }
                })()
            })
        });
    };

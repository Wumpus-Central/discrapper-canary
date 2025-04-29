n.d(t, {
    Qo: () => f,
    ZP: () => _
});
var i,
    r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
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
    _ = (e) => {
        let { showAnimations: t = !0, iconClassName: n, staticPercentage: i, innerCircleClassName: s, progressCircleStrokeSize: l, backgroundCircleSize: c, percentage: u, initialPercentage: f, progressCircleVariation: _ = 0, avatarDecoAssetId: x, avatarDecoAssetDescription: E, ellipseOpacity: j, customAnimationClassName: C, circleColor: O, circleStroke: S } = e,
            v = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
            T = t && !v;
        return (0, r.jsx)('div', {
            className: a()(h.progressCircle, n),
            children: (0, r.jsx)(g.Z, {
                animationClassName: a()(h.activeProgressCircle, {
                    [h.activeProgressCircleAnimation]: T,
                    [null != C ? C : '']: T
                }),
                progressCircleStroke: S,
                progressCircleStrokeSize: l,
                percentage: null != i ? i : u,
                initialPercentage: null != i ? i : f,
                progressCircleVariation: _,
                children: (() => {
                    switch (_) {
                        case 0:
                            return (0, r.jsx)(m.Z, {
                                className: T ? h.nitroGemAnimation : void 0,
                                backgroundColor: a()(h.gemBackgroundFill, s),
                                backgroundCircleSize: c
                            });
                        case 1:
                            return (0, r.jsx)(p.Z, {
                                circleColor: O,
                                ellipseOpacity: j
                            });
                        case 2:
                            if (null != x)
                                return (0, r.jsx)(b, {
                                    avatarDecoAssetId: x,
                                    avatarDecoAssetDescription: E
                                });
                            return null;
                        default:
                            return null;
                    }
                })()
            })
        });
    };

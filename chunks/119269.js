o.d(n, {
    Qo: () => C,
    ZP: () => f
});
var a,
    t = o(200651),
    r = o(192379),
    i = o(120356),
    c = o.n(i),
    l = o(442837),
    s = o(481060),
    d = o(607070),
    _ = o(821982),
    u = o(967538),
    b = o(885302),
    m = o(914677),
    g = o(914242),
    C = (((a = {})[(a.NITRO_GEM = 0)] = 'NITRO_GEM'), (a[(a.NITRO_LOGO = 1)] = 'NITRO_LOGO'), (a[(a.AVATAR_DECO = 2)] = 'AVATAR_DECO'), a);
let p = (e) => {
        let { avatarDecoAssetId: n, avatarDecoAssetDescription: o } = e,
            a = r.useMemo(() => (0, _.Z)(n, s.EFr.SIZE_120, !1), [n]);
        return (0, t.jsx)('div', {
            className: g.avatarDecoContainer,
            children: (0, t.jsx)('div', {
                className: g.avatarDeco,
                children: (0, t.jsx)('img', {
                    className: g.avatarDecoImage,
                    alt: o,
                    src: a
                })
            })
        });
    },
    f = (e) => {
        let { showAnimations: n = !0, iconClassName: o, staticPercentage: a, innerCircleClassName: r, progressCircleStrokeSize: i, backgroundCircleSize: s, percentage: _, initialPercentage: C, progressCircleVariation: f = 0, avatarDecoAssetId: h, avatarDecoAssetDescription: B, ellipseOpacity: k, customAnimationClassName: x, circleColor: w, circleStroke: S } = e,
            T = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
            R = n && !T;
        return (0, t.jsx)('div', {
            className: c()(g.progressCircle, o),
            children: (0, t.jsx)(m.Z, {
                animationClassName: c()(g.activeProgressCircle, {
                    [g.activeProgressCircleAnimation]: R,
                    [null != x ? x : '']: R
                }),
                progressCircleStroke: S,
                progressCircleStrokeSize: i,
                percentage: null != a ? a : _,
                initialPercentage: null != a ? a : C,
                progressCircleVariation: f,
                children: (() => {
                    switch (f) {
                        case 0:
                            return (0, t.jsx)(u.Z, {
                                className: R ? g.nitroGemAnimation : void 0,
                                backgroundColor: c()(g.gemBackgroundFill, r),
                                backgroundCircleSize: s
                            });
                        case 1:
                            return (0, t.jsx)(b.Z, {
                                circleColor: w,
                                ellipseOpacity: k
                            });
                        case 2:
                            if (null != h)
                                return (0, t.jsx)(p, {
                                    avatarDecoAssetId: h,
                                    avatarDecoAssetDescription: B
                                });
                            return null;
                        default:
                            return null;
                    }
                })()
            })
        });
    };

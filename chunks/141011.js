n.d(t, { Z: () => h });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(399606),
    l = n(692547),
    u = n(607070),
    c = n(302221),
    d = n(884697),
    f = n(372654),
    _ = n(695935);
let p = (e) => null != e && /^http/i.test(e),
    h = (e) => {
        let { asset: t, size: n = f.yV, className: a, style: h, children: m, categoryBannerOverride: g } = e,
            E = (0, o.e7)([u.Z], () => u.Z.saturation),
            v = r.useMemo(() => {
                if (null == t) return h;
                let e = p(t)
                        ? t
                        : (0, d.uV)(t, {
                              size: n,
                              format: 'jpg'
                          }),
                    i = (null == g ? void 0 : g.blur)
                        ? {
                              filter: 'blur(2px)',
                              transform: 'scale(1.02)'
                          }
                        : {};
                if (1 === E)
                    return {
                        ...h,
                        backgroundImage: (null == g ? void 0 : g.addGradient) ? 'url('.concat(e, '), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)') : 'url('.concat(e, ')'),
                        backgroundBlendMode: 'multiply',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        ...i
                    };
                let r = (0, c.aD)(l.Z.unsafe_rawColors.BLACK_500.resolve().hex(), 1 - E);
                return {
                    ...h,
                    backgroundImage: 'linear-gradient('.concat(r, ', ').concat(r, '), url(').concat(e, ')'),
                    backgroundBlendMode: 'saturation',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    ...i
                };
            }, [t, n, E, h, null == g ? void 0 : g.blur, null == g ? void 0 : g.addGradient]);
        return (0, i.jsx)('div', {
            className: s()(_.banner, a),
            style: v,
            children: m
        });
    };

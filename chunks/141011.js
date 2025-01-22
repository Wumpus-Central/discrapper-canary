var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(399606),
    u = r(376345),
    c = r(607070),
    d = r(302221),
    f = r(884697),
    p = r(372654),
    h = r(695935);
let _ = (e) => null != e && /^http/i.test(e),
    m = (e) => {
        let { asset: n, size: r = p.yV, className: o, style: m, children: g, categoryBannerOverride: E } = e,
            v = (0, l.e7)([c.Z], () => c.Z.saturation),
            y = a.useMemo(() => {
                if (null == n) return m;
                let e = _(n)
                        ? n
                        : (0, f.uV)(n, {
                              size: r,
                              format: 'jpg'
                          }),
                    i = (null == E ? void 0 : E.blur)
                        ? {
                              filter: 'blur(2px)',
                              transform: 'scale(1.02)'
                          }
                        : {};
                if (1 === v)
                    return {
                        ...m,
                        backgroundImage: (null == E ? void 0 : E.addGradient) ? 'url('.concat(e, '), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)') : 'url('.concat(e, ')'),
                        backgroundBlendMode: 'multiply',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        ...i
                    };
                let a = (0, d.aD)(u.ZP.unsafe_rawColors.BLACK_500, 1 - v);
                return {
                    ...m,
                    backgroundImage: 'linear-gradient('.concat(a, ', ').concat(a, '), url(').concat(e, ')'),
                    backgroundBlendMode: 'saturation',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    ...i
                };
            }, [n, r, v, m, null == E ? void 0 : E.blur, null == E ? void 0 : E.addGradient]);
        return (0, i.jsx)('div', {
            className: s()(h.banner, o),
            style: y,
            children: g
        });
    };
n.Z = m;

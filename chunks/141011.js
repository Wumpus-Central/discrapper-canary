n.d(t, { Z: () => v }), n(301563);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(399606),
    l = n(692547),
    c = n(607070),
    u = n(302221),
    d = n(884697),
    f = n(372654),
    p = n(99649);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = (e) => null != e && /^http/i.test(e),
    v = (e) => {
        let { asset: t, size: n = f.yV, className: o, style: _, children: m, categoryBannerOverride: v } = e,
            b = (0, s.e7)([c.Z], () => c.Z.saturation),
            y = i.useMemo(() => {
                if (null == t) return _;
                let e = E(t)
                        ? t
                        : (0, d.uV)(t, {
                              size: n,
                              format: 'jpg'
                          }),
                    r = (null == v ? void 0 : v.blur)
                        ? {
                              filter: 'blur(2px)',
                              transform: 'scale(1.02)'
                          }
                        : {};
                if (1 === b)
                    return h(
                        g(h({}, _), {
                            backgroundImage: (null == v ? void 0 : v.addGradient) ? 'url('.concat(e, '), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)') : 'url('.concat(e, ')'),
                            backgroundBlendMode: 'multiply',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }),
                        r
                    );
                let i = (0, u.aD)(l.Z.unsafe_rawColors.BLACK_500.resolve().hex(), 1 - b);
                return h(
                    g(h({}, _), {
                        backgroundImage: 'linear-gradient('.concat(i, ', ').concat(i, '), url(').concat(e, ')'),
                        backgroundBlendMode: 'saturation',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }),
                    r
                );
            }, [t, n, b, _, null == v ? void 0 : v.blur, null == v ? void 0 : v.addGradient]);
        return (0, r.jsx)('div', {
            className: a()(p.banner, o),
            style: y,
            children: m
        });
    };

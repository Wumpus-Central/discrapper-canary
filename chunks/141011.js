n.d(t, { Z: () => y }), n(301563);
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
    _ = n(534215);
function p(e, t, n) {
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
                p(e, t, n[t]);
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
    b = (e) => null != e && /^blob:https?:\/\/[^\/]+\//i.test(e),
    y = (e) => {
        let { asset: t, size: n = f.yV, className: o, style: p, children: m, categoryBannerOverride: y } = e,
            v = (0, s.e7)([c.Z], () => c.Z.saturation),
            O = i.useMemo(() => {
                if (null == t) return p;
                let e =
                        E(t) || b(t)
                            ? t
                            : (0, d.uV)(t, {
                                  size: n,
                                  format: 'jpg'
                              }),
                    r = (null == y ? void 0 : y.blur)
                        ? {
                              filter: 'blur(2px)',
                              transform: 'scale(1.02)'
                          }
                        : {};
                if (1 === v)
                    return h(
                        g(h({}, p), {
                            backgroundImage: (null == y ? void 0 : y.addGradient) ? 'url('.concat(e, '), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)') : 'url('.concat(e, ')'),
                            backgroundBlendMode: 'multiply',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }),
                        r
                    );
                let i = (0, u.aD)(l.Z.unsafe_rawColors.BLACK_500.resolve().hex(), 1 - v);
                return h(
                    g(h({}, p), {
                        backgroundImage: 'linear-gradient('.concat(i, ', ').concat(i, '), url(').concat(e, ')'),
                        backgroundBlendMode: 'saturation',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }),
                    r
                );
            }, [t, n, v, p, null == y ? void 0 : y.blur, null == y ? void 0 : y.addGradient]);
        return (0, r.jsx)('div', {
            className: a()(_.banner, o),
            style: O,
            children: m
        });
    };

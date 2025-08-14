r.d(n, { Z: () => O }), r(35282);
var l = r(255367),
    t = r(73800),
    o = r(120356),
    a = r.n(o),
    u = r(399606),
    i = r(692547),
    s = r(607070),
    c = r(302221),
    d = r(884697),
    g = r(372654),
    b = r(992171);
function m(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = r[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function v(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, l);
                  }
                  return r;
              })(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
              }),
        e
    );
}
let O = (e) => {
    let { asset: n, size: r = g.yV, className: o, style: O, children: p, categoryBannerOverride: f } = e,
        y = (0, u.e7)([s.Z], () => s.Z.saturation),
        j = t.useMemo(() => {
            if (null == n) return O;
            let e =
                    (null != n && /^http/i.test(n)) || (null != n && /^blob:https?:\/\/[^\/]+\//i.test(n))
                        ? n
                        : (0, d.uV)(n, {
                              size: r,
                              format: "jpg",
                          }),
                l = (null == f ? void 0 : f.blur)
                    ? {
                          filter: "blur(2px)",
                          transform: "scale(1.02)",
                      }
                    : {};
            if (1 === y)
                return m(
                    v(m({}, O), {
                        backgroundImage: (null == f ? void 0 : f.addGradient)
                            ? "url(".concat(
                                  e,
                                  "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)",
                              )
                            : "url(".concat(e, ")"),
                        backgroundBlendMode: "multiply",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }),
                    l,
                );
            let t = (0, c.aD)(i.Z.unsafe_rawColors.BLACK_500.resolve().hex(), 1 - y);
            return m(
                v(m({}, O), {
                    backgroundImage: "linear-gradient(".concat(t, ", ").concat(t, "), url(").concat(e, ")"),
                    backgroundBlendMode: "saturation",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }),
                l,
            );
        }, [n, r, y, O, null == f ? void 0 : f.blur, null == f ? void 0 : f.addGradient]);
    return (0, l.jsx)("div", {
        className: a()(b.banner, o),
        style: j,
        children: p,
    });
};

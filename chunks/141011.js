r.d(t, { Z: () => m }), r(35282);
var n = r(951288),
    l = r(647438),
    a = r(120356),
    i = r.n(a),
    o = r(399606),
    s = r(692547),
    c = r(607070),
    u = r(302221),
    d = r(884697),
    p = r(372654),
    g = r(992171);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let m = (e) => {
    let { asset: t, size: r = p.yV, className: a, style: m, children: h, categoryBannerOverride: _ } = e,
        v = (0, o.e7)([c.Z], () => c.Z.saturation),
        O = l.useMemo(() => {
            if (null == t) return m;
            let e =
                    (null != t && /^http/i.test(t)) || (null != t && /^blob:https?:\/\/[^\/]+\//i.test(t))
                        ? t
                        : (0, d.uV)(t, {
                              size: r,
                              format: "jpg",
                          }),
                n = (null == _ ? void 0 : _.blur)
                    ? {
                          filter: "blur(2px)",
                          transform: "scale(1.02)",
                      }
                    : {};
            if (1 === v)
                return f(
                    b(f({}, m), {
                        backgroundImage: (null == _ ? void 0 : _.addGradient)
                            ? "url(".concat(
                                  e,
                                  "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)",
                              )
                            : "url(".concat(e, ")"),
                        backgroundBlendMode: "multiply",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }),
                    n,
                );
            let l = (0, u.aD)(s.Z.unsafe_rawColors.BLACK_500.resolve().hex(), 1 - v);
            return f(
                b(f({}, m), {
                    backgroundImage: "linear-gradient(".concat(l, ", ").concat(l, "), url(").concat(e, ")"),
                    backgroundBlendMode: "saturation",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }),
                n,
            );
        }, [t, r, v, m, null == _ ? void 0 : _.blur, null == _ ? void 0 : _.addGradient]);
    return (0, n.jsx)("div", {
        className: i()(g.banner, a),
        style: O,
        children: h,
    });
};

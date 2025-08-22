n.d(t, { Z: () => _ }), n(35282);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(399606),
    o = n(692547),
    c = n(607070),
    u = n(302221),
    d = n(884697),
    g = n(372654),
    f = n(992171);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = (e) => {
    let { asset: t, size: n = g.yV, className: a, style: _, children: h, categoryBannerOverride: b } = e,
        C = (0, i.e7)([c.Z], () => c.Z.saturation),
        E = l.useMemo(() => {
            if (null == t) return _;
            let e =
                    (null != t && /^http/i.test(t)) || (null != t && /^blob:https?:\/\/[^\/]+\//i.test(t))
                        ? t
                        : (0, d.uV)(t, {
                              size: n,
                              format: "jpg",
                          }),
                r = (null == b ? void 0 : b.blur)
                    ? {
                          filter: "blur(2px)",
                          transform: "scale(1.02)",
                      }
                    : {};
            if (1 === C)
                return p(
                    m(p({}, _), {
                        backgroundImage: (null == b ? void 0 : b.addGradient)
                            ? "url(".concat(
                                  e,
                                  "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)",
                              )
                            : "url(".concat(e, ")"),
                        backgroundBlendMode: "multiply",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }),
                    r,
                );
            let l = (0, u.aD)(o.Z.unsafe_rawColors.BLACK_500.resolve().hex(), 1 - C);
            return p(
                m(p({}, _), {
                    backgroundImage: "linear-gradient(".concat(l, ", ").concat(l, "), url(").concat(e, ")"),
                    backgroundBlendMode: "saturation",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }),
                r,
            );
        }, [t, n, C, _, null == b ? void 0 : b.blur, null == b ? void 0 : b.addGradient]);
    return (0, r.jsx)("div", {
        className: s()(f.banner, a),
        style: E,
        children: h,
    });
};

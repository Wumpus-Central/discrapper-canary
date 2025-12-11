n.d(t, { Z: () => c });
var r = n(54381),
    l = n(473749),
    i = n(481060),
    a = n(454585),
    s = n(273744),
    o = n(388032),
    d = n(316515);
let c = (e) => {
    let {
            node: { header: t, subheader: n, button: c },
            isModeratorReport: u,
            isTidaReport: m = !1,
        } = e,
        b = (null == c ? void 0 : c.type) === "submit",
        p = l.useMemo(() => {
            var e, t;
            return a.Z.reactParserFor(
                ((e = (function (e) {
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
                })({}, a.Z.defaultRules)),
                (t = t = { link: s.s }),
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
                e),
            );
        }, []);
    return (0, r.jsxs)("div", {
        className: d.headerContainer,
        children: [
            null != t && "" !== t
                ? (0, r.jsx)(i.Heading, {
                      variant: "heading-xl/semibold",
                      color: "text-strong",
                      children: t,
                  })
                : null,
            null != n && "" !== t
                ? (0, r.jsx)(i.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: p(n),
                  })
                : null,
            b &&
                !u &&
                !m &&
                (0, r.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    children: o.intl.format(o.t.Q0tSKT, {}),
                }),
        ],
    });
};

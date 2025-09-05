n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    s = n(647438),
    i = n(120356),
    a = n.n(i),
    l = n(261616),
    o = n(481060),
    c = n(144114),
    u = n(317175),
    d = n(597313);
function p(e) {
    let { show: t, alpha2: n, countryCode: i } = e,
        p = s.useRef(null),
        h = s.useRef(null),
        [f, m] = s.useState(0),
        [g, y] = s.useState(!1);
    s.useEffect(() => {
        function e() {
            var e, n;
            m(t && null != (n = null == (e = h.current) ? void 0 : e.getBoundingClientRect().width) ? n : 0);
        }
        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
    }, [t, n, i]);
    let b = (0, o.q_F)({
        width: "".concat(f, "px"),
        onStart: () => {
            y(!0);
        },
        onRest: () => {
            y(!1);
        },
    });
    return (0, r.jsx)(o.yRy, {
        targetElementRef: p,
        position: "top",
        renderPopout: (e) =>
            (0, r.jsx)(u.Z, {
                className: d.popout,
                onClick: (t) => {
                    c.Z.setCountryCode(t), e.closePopout();
                },
            }),
        children: (e) => {
            var s, c;
            return (0, r.jsx)("div", {
                className: a()(d.outerContainer, { [d.hidden]: !(t || g) }),
                ref: p,
                children: (0, r.jsx)(l.animated.div, {
                    className: d.container,
                    style: b,
                    children: (0, r.jsxs)("div", {
                        className: d.innerContainer,
                        ref: h,
                        children: [
                            (0, r.jsxs)(
                                o.P3F,
                                ((s = (function (e) {
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
                                })({}, e)),
                                (c = c =
                                    {
                                        className: d.countryCode,
                                        children: [n, " ", i],
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(c))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(c)).forEach(function (e) {
                                          Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(c, e));
                                      }),
                                s),
                            ),
                            (0, r.jsx)("div", { className: d.separator }),
                        ],
                    }),
                }),
            });
        },
    });
}

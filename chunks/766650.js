(r.d(t, { Z: () => d }), r(388685));
var n = r(255367),
    s = r(73800),
    i = r(120356),
    l = r.n(i),
    o = r(652141),
    a = r(481060),
    c = r(144114),
    u = r(317175),
    h = r(764731);
function d(e) {
    let { show: t, alpha2: r, countryCode: i } = e,
        d = s.useRef(null),
        p = s.useRef(null),
        [m, f] = s.useState(0),
        [g, b] = s.useState(!1);
    s.useEffect(() => {
        function e() {
            var e, r;
            f(t && null != (r = null == (e = p.current) ? void 0 : e.getBoundingClientRect().width) ? r : 0);
        }
        return (e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e));
    }, [t, r, i]);
    let j = (0, a.q_F)({
            width: ''.concat(m, 'px'),
            onStart: () => {
                b(!0);
            },
            onRest: () => {
                b(!1);
            }
        }),
        y = (e) => {
            c.Z.setCountryCode(e);
        };
    return (0, n.jsx)(a.yRy, {
        targetElementRef: d,
        position: 'top',
        renderPopout: (e) =>
            (0, n.jsx)(u.Z, {
                className: h.popout,
                onClick: (t) => {
                    (y(t), e.closePopout());
                }
            }),
        children: (e) => {
            var s, c;
            return (0, n.jsx)('div', {
                className: l()(h.outerContainer, { [h.hidden]: !(t || g) }),
                ref: d,
                children: (0, n.jsx)(o.animated.div, {
                    className: h.container,
                    style: j,
                    children: (0, n.jsxs)('div', {
                        className: h.innerContainer,
                        ref: p,
                        children: [
                            (0, n.jsxs)(
                                a.P3F,
                                ((s = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(r);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (n = n.concat(
                                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                })
                                            )),
                                            n.forEach(function (t) {
                                                var n;
                                                ((n = r[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: n,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = n));
                                            }));
                                    }
                                    return e;
                                })({}, e)),
                                (c = c =
                                    {
                                        className: h.countryCode,
                                        children: [r, ' ', i]
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(c))
                                    : (function (e, t) {
                                          var r = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var n = Object.getOwnPropertySymbols(e);
                                              r.push.apply(r, n);
                                          }
                                          return r;
                                      })(Object(c)).forEach(function (e) {
                                          Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(c, e));
                                      }),
                                s)
                            ),
                            (0, n.jsx)('div', { className: h.separator })
                        ]
                    })
                })
            });
        }
    });
}

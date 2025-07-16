(n.d(t, { Z: () => h }), n(388685));
var r = n(255367),
    s = n(73800),
    i = n(120356),
    l = n.n(i),
    a = n(71347),
    o = n(481060),
    c = n(144114),
    u = n(317175),
    d = n(764731);
function h(e) {
    let { show: t, alpha2: n, countryCode: i } = e,
        h = s.useRef(null),
        p = s.useRef(null),
        [m, f] = s.useState(0),
        [x, g] = s.useState(!1);
    s.useEffect(() => {
        function e() {
            var e, n;
            f(t && null != (n = null == (e = p.current) ? void 0 : e.getBoundingClientRect().width) ? n : 0);
        }
        return (e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e));
    }, [t, n, i]);
    let j = (0, o.q_F)({
            width: ''.concat(m, 'px'),
            onStart: () => {
                g(!0);
            },
            onRest: () => {
                g(!1);
            }
        }),
        v = (e) => {
            c.Z.setCountryCode(e);
        };
    return (0, r.jsx)(o.yRy, {
        targetElementRef: h,
        position: 'top',
        renderPopout: (e) =>
            (0, r.jsx)(u.Z, {
                className: d.popout,
                onClick: (t) => {
                    (v(t), e.closePopout());
                }
            }),
        children: (e) => {
            var s, c;
            return (0, r.jsx)('div', {
                className: l()(d.outerContainer, { [d.hidden]: !(t || x) }),
                ref: h,
                children: (0, r.jsx)(a.animated.div, {
                    className: d.container,
                    style: j,
                    children: (0, r.jsxs)('div', {
                        className: d.innerContainer,
                        ref: p,
                        children: [
                            (0, r.jsxs)(
                                o.P3F,
                                ((s = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                ((r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r));
                                            }));
                                    }
                                    return e;
                                })({}, e)),
                                (c = c =
                                    {
                                        className: d.countryCode,
                                        children: [n, ' ', i]
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
                                s)
                            ),
                            (0, r.jsx)('div', { className: d.separator })
                        ]
                    })
                })
            });
        }
    });
}

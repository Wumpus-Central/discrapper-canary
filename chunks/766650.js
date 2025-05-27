r.d(t, { Z: () => h }), r(388685);
var n = r(255367),
    s = r(73800),
    i = r(120356),
    l = r.n(i),
    a = r(714673),
    o = r(481060),
    c = r(144114),
    u = r(317175),
    d = r(764731);
function h(e) {
    let { show: t, alpha2: r, countryCode: i } = e,
        h = s.useRef(null),
        p = s.useRef(null),
        [m, f] = s.useState(0),
        [x, g] = s.useState(!1);
    s.useEffect(() => {
        function e() {
            var e, r;
            f(t && null != (r = null == (e = p.current) ? void 0 : e.getBoundingClientRect().width) ? r : 0);
        }
        return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
    }, [t, r, i]);
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
    return (0, n.jsx)(o.yRy, {
        targetElementRef: h,
        position: 'top',
        renderPopout: (e) =>
            (0, n.jsx)(u.Z, {
                className: d.popout,
                onClick: (t) => {
                    v(t), e.closePopout();
                }
            }),
        children: (e) => {
            var s, c;
            return (0, n.jsx)('div', {
                className: l()(d.outerContainer, { [d.hidden]: !(t || x) }),
                ref: h,
                children: (0, n.jsx)(a.animated.div, {
                    className: d.container,
                    style: j,
                    children: (0, n.jsxs)('div', {
                        className: d.innerContainer,
                        ref: p,
                        children: [
                            (0, n.jsxs)(
                                o.P3F,
                                ((s = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(r);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (n = n.concat(
                                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                })
                                            )),
                                            n.forEach(function (t) {
                                                var n;
                                                (n = r[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: n,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = n);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (c = c =
                                    {
                                        className: d.countryCode,
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
                            (0, n.jsx)('div', { className: d.separator })
                        ]
                    })
                })
            });
        }
    });
}

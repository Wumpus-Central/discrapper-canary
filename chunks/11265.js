n.d(t, { Z: () => m }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(481752),
    o = n(481060),
    c = n(393238),
    u = n(388032),
    d = n(212787);
let m = i.memo(function (e) {
    var t, n;
    let { renderHeader: l, children: m, isExpanded: g, isStuck: p, onExpand: h, disableAnimation: f, disableBackground: x } = e,
        [b, j] = i.useState(!0),
        [_, v] = i.useState(!1),
        { ref: O, height: C = 0 } = (0, c.ZP)(),
        { ref: y, height: N = 0 } = (0, c.ZP)(),
        [I, E] = i.useState(g),
        S = (0, o.q_F)(
            {
                height: I ? N + C : C,
                config:
                    ((t = (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, a.config.stiff)),
                    (n = n = { clamp: !0 }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                onStart: () => {
                    v(!1);
                },
                onRest: () => {
                    v(!0);
                }
            },
            b || f ? 'animate-never' : 'respect-motion-settings'
        );
    return (
        i.useLayoutEffect(() => {
            v(!1), E(g);
        }, [g]),
        i.useLayoutEffect(() => {
            let e = setTimeout(() => {
                j(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)(o.P3F, {
            className: s()(d.editCard, {
                [d.toggled]: g,
                [d.noBackground]: x
            }),
            children: (0, r.jsxs)(a.animated.div, {
                className: s()(d.contentExpandContainer, { [d.showOverflow]: g && _ }),
                style: S,
                children: [
                    (0, r.jsx)(o.P3F, {
                        innerRef: O,
                        onClick: p ? void 0 : h,
                        className: s()(d.innerHeader, { [d.toggled]: g && p }),
                        'aria-label': u.intl.string(u.t.dcl9MT),
                        children: l
                    }),
                    (0, r.jsx)('div', {
                        ref: y,
                        children: m
                    })
                ]
            })
        })
    );
});

n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    c = n.n(o),
    s = n(642128),
    a = n(481060),
    l = n(393238),
    u = n(388032),
    d = n(212787);
let f = i.memo(function (e) {
    var t, n;
    let { renderHeader: o, children: f, isExpanded: p, isStuck: b, onExpand: j, disableAnimation: y, disableBackground: m } = e,
        [g, O] = i.useState(!0),
        [h, v] = i.useState(!1),
        { ref: x, height: P = 0 } = (0, l.Z)(),
        { ref: w, height: N = 0 } = (0, l.Z)(),
        [C, E] = i.useState(p),
        S = (0, a.q_F)(
            {
                height: C ? N + P : P,
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
                    })({}, s.config.stiff)),
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
            g || y ? 'animate-never' : 'respect-motion-settings'
        );
    return (
        i.useLayoutEffect(() => {
            v(!1), E(p);
        }, [p]),
        i.useLayoutEffect(() => {
            let e = setTimeout(() => {
                O(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)(a.P3F, {
            className: c()(d.editCard, {
                [d.toggled]: p,
                [d.noBackground]: m
            }),
            children: (0, r.jsxs)(s.animated.div, {
                className: c()(d.contentExpandContainer, { [d.showOverflow]: p && h }),
                style: S,
                children: [
                    (0, r.jsx)(a.P3F, {
                        innerRef: x,
                        onClick: b ? void 0 : j,
                        className: c()(d.innerHeader, { [d.toggled]: p && b }),
                        'aria-label': u.NW.string(u.t.dcl9MT),
                        children: o
                    }),
                    (0, r.jsx)('div', {
                        ref: w,
                        children: f
                    })
                ]
            })
        })
    );
});

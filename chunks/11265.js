n.d(t, { Z: () => m }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(200100),
    o = n(481060),
    c = n(393238),
    d = n(388032),
    u = n(933485);
let m = i.memo(function (e) {
    var t, n;
    let { renderHeader: s, children: m, isExpanded: g, isStuck: p, onExpand: h, disableAnimation: f, disableBackground: x } = e,
        [b, j] = i.useState(!0),
        [N, _] = i.useState(!1),
        { ref: v, height: O = 0 } = (0, c.ZP)(),
        { ref: C, height: y = 0 } = (0, c.ZP)(),
        [I, E] = i.useState(g),
        S = (0, o.q_F)(
            {
                height: I ? y + O : O,
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
                    _(!1);
                },
                onRest: () => {
                    _(!0);
                }
            },
            b || f ? 'animate-never' : 'respect-motion-settings'
        );
    return (
        i.useLayoutEffect(() => {
            _(!1), E(g);
        }, [g]),
        i.useLayoutEffect(() => {
            let e = setTimeout(() => {
                j(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)(o.P3F, {
            className: l()(u.editCard, {
                [u.toggled]: g,
                [u.noBackground]: x
            }),
            children: (0, r.jsxs)(a.animated.div, {
                className: l()(u.contentExpandContainer, { [u.showOverflow]: g && N }),
                style: S,
                children: [
                    (0, r.jsx)(o.P3F, {
                        innerRef: v,
                        onClick: p ? void 0 : h,
                        className: l()(u.innerHeader, { [u.toggled]: g && p }),
                        'aria-label': d.NW.string(d.t.dcl9MT),
                        children: s
                    }),
                    (0, r.jsx)('div', {
                        ref: C,
                        children: m
                    })
                ]
            })
        })
    );
});

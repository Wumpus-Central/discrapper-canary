n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(205120),
    o = n(481060),
    c = n(393238),
    d = n(388032),
    u = n(165121);
let g = i.memo(function (e) {
    var t, n;
    let {
            renderHeader: l,
            children: g,
            isExpanded: m,
            isStuck: p,
            onExpand: f,
            disableAnimation: h,
            disableBackground: b,
        } = e,
        [x, j] = i.useState(!0),
        [_, v] = i.useState(!1),
        { ref: O, height: C = 0 } = (0, c.ZP)(),
        { ref: y, height: N = 0 } = (0, c.ZP)(),
        [E, I] = i.useState(m),
        S = (0, o.q_F)(
            {
                height: E ? N + C : C,
                config:
                    ((t = (function (e) {
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
                },
            },
            x || h ? "animate-never" : "respect-motion-settings",
        );
    return (
        i.useLayoutEffect(() => {
            v(!1), I(m);
        }, [m]),
        i.useLayoutEffect(() => {
            let e = setTimeout(() => {
                j(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)(o.P3F, {
            className: a()(u.editCard, {
                [u.toggled]: m,
                [u.noBackground]: b,
            }),
            children: (0, r.jsxs)(s.animated.div, {
                className: a()(u.contentExpandContainer, { [u.showOverflow]: m && _ }),
                style: S,
                children: [
                    (0, r.jsx)(o.P3F, {
                        innerRef: O,
                        onClick: p ? void 0 : f,
                        className: a()(u.innerHeader, { [u.toggled]: m && p }),
                        "aria-label": d.intl.string(d.t.dcl9MQ),
                        children: l,
                    }),
                    (0, r.jsx)("div", {
                        ref: y,
                        children: g,
                    }),
                ],
            }),
        })
    );
});

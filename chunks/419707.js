n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(92674),
    o = n(397927),
    c = n(765671),
    d = n(985018),
    u = n(301563);
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
        [_, O] = i.useState(!1),
        { ref: v, height: y = 0 } = (0, c.Ay)(),
        { ref: A, height: E = 0 } = (0, c.Ay)(),
        [N, S] = i.useState(m),
        I = (0, o.zhh)(
            {
                height: N ? E + y : y,
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
                    })({}, a.config.stiff)),
                    (n = n =
                        {
                            clamp: !0,
                        }),
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
                    O(!1);
                },
                onRest: () => {
                    O(!0);
                },
            },
            x || h ? "animate-never" : "respect-motion-settings",
        );
    return (
        i.useLayoutEffect(() => {
            O(!1), S(m);
        }, [m]),
        i.useLayoutEffect(() => {
            let e = setTimeout(() => {
                j(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)(o.DUT, {
            className: s()(u.Lo, {
                [u.$M]: m,
                [u._$]: b,
            }),
            children: (0, r.jsxs)(a.animated.div, {
                className: s()(u.N0, {
                    [u.Mm]: m && _,
                }),
                style: I,
                children: [
                    (0, r.jsx)(o.DUT, {
                        innerRef: v,
                        onClick: p ? void 0 : f,
                        className: s()(u.MU, {
                            [u.$M]: m && p,
                        }),
                        "aria-label": d.intl.string(d.t.dcl9MQ),
                        children: l,
                    }),
                    (0, r.jsx)("div", {
                        ref: A,
                        children: g,
                    }),
                ],
            }),
        })
    );
});

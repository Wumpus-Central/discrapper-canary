n.d(t, { A: () => f }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(432022),
    c = n(397927),
    o = n(765671),
    d = n(985018),
    u = n(301563);
let f = i.memo(function (e) {
    var t, n;
    let {
            renderHeader: l,
            children: f,
            isExpanded: g,
            isStuck: b,
            onExpand: m,
            disableAnimation: p,
            disableBackground: x,
        } = e,
        [h, j] = i.useState(!0),
        [O, y] = i.useState(!1),
        { ref: v, height: A = 0 } = (0, o.Ay)(),
        { ref: E, height: N = 0 } = (0, o.Ay)(),
        [_, S] = i.useState(g),
        T = (0, c.zhh)(
            {
                height: _ ? N + A : A,
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
                    y(!1);
                },
                onRest: () => {
                    y(!0);
                },
            },
            h || p ? "animate-never" : "respect-motion-settings",
        );
    return (
        i.useLayoutEffect(() => {
            y(!1), S(g);
        }, [g]),
        i.useLayoutEffect(() => {
            let e = setTimeout(() => {
                j(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)(c.DUT, {
            className: s()(u.Lo, {
                [u.$M]: g,
                [u._$]: x,
            }),
            children: (0, r.jsxs)(a.animated.div, {
                className: s()(u.N0, { [u.Mm]: g && O }),
                style: T,
                children: [
                    (0, r.jsx)(c.DUT, {
                        innerRef: v,
                        onClick: b ? void 0 : m,
                        className: s()(u.MU, { [u.$M]: g && b }),
                        "aria-label": d.intl.string(d.t.dcl9MQ),
                        children: l,
                    }),
                    (0, r.jsx)("div", {
                        ref: E,
                        children: f,
                    }),
                ],
            }),
        })
    );
});

n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(81239),
    o = n(481060),
    c = n(393238),
    d = n(388032),
    u = n(192072);
let g = i.memo(function (e) {
    var t, n;
    let {
            renderHeader: l,
            children: g,
            isExpanded: f,
            isStuck: m,
            onExpand: b,
            disableAnimation: p,
            disableBackground: h,
        } = e,
        [x, j] = i.useState(!0),
        [v, O] = i.useState(!1),
        { ref: y, height: C = 0 } = (0, c.ZP)(),
        { ref: N, height: E = 0 } = (0, c.ZP)(),
        [I, S] = i.useState(f),
        _ = (0, o.q_F)(
            {
                height: I ? E + C : C,
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
                    O(!1);
                },
                onRest: () => {
                    O(!0);
                },
            },
            x || p ? "animate-never" : "respect-motion-settings",
        );
    return (
        i.useLayoutEffect(() => {
            O(!1), S(f);
        }, [f]),
        i.useLayoutEffect(() => {
            let e = setTimeout(() => {
                j(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)(o.P3F, {
            className: a()(u.editCard, {
                [u.toggled]: f,
                [u.noBackground]: h,
            }),
            children: (0, r.jsxs)(s.animated.div, {
                className: a()(u.contentExpandContainer, { [u.showOverflow]: f && v }),
                style: _,
                children: [
                    (0, r.jsx)(o.P3F, {
                        innerRef: y,
                        onClick: m ? void 0 : b,
                        className: a()(u.innerHeader, { [u.toggled]: f && m }),
                        "aria-label": d.intl.string(d.t.dcl9MQ),
                        children: l,
                    }),
                    (0, r.jsx)("div", {
                        ref: N,
                        children: g,
                    }),
                ],
            }),
        })
    );
});

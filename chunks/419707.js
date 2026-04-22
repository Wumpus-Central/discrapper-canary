n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(517738),
    o = n(717421),
    d = n(939249),
    c = n(765671),
    u = n(985018),
    m = n(884060);
let g = l.memo(function (e) {
    let {
            renderHeader: t,
            children: n,
            isExpanded: s,
            isStuck: g,
            onExpand: h,
            disableAnimation: x,
            disableBackground: _,
        } = e,
        [p, A] = l.useState(!0),
        [E, f] = l.useState(!1),
        { ref: j, height: N = 0 } = (0, c.Ay)(),
        { ref: I, height: C = 0 } = (0, c.Ay)(),
        [b, v] = l.useState(s),
        S = (0, o.z)(
            {
                height: b ? C + N : N,
                config: { ...a.config.stiff, clamp: !0 },
                onStart: () => {
                    f(!1);
                },
                onRest: () => {
                    f(!0);
                },
            },
            p || x ? "animate-never" : "respect-motion-settings",
        );
    return (
        l.useLayoutEffect(() => {
            f(!1), v(s);
        }, [s]),
        l.useLayoutEffect(() => {
            let e = setTimeout(() => {
                A(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        (0, i.jsx)(d.D, {
            className: r()(m.Lo, { [m.$M]: s, [m._$]: _ }),
            children: (0, i.jsxs)(a.animated.div, {
                className: r()(m.N0, { [m.Mm]: s && E }),
                style: S,
                children: [
                    (0, i.jsx)(d.D, {
                        innerRef: j,
                        onClick: g ? void 0 : h,
                        className: r()(m.MU, { [m.$M]: s && g }),
                        "aria-label": u.intl.string(u.t.dcl9MQ),
                        children: t,
                    }),
                    (0, i.jsx)("div", { ref: I, children: n }),
                ],
            }),
        })
    );
});

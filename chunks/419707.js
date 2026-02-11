"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(563495),
    o = n(397927),
    d = n(765671),
    c = n(985018),
    u = n(349429);
let g = s.memo(function (e) {
    let {
            renderHeader: t,
            children: n,
            isExpanded: l,
            isStuck: g,
            onExpand: m,
            disableAnimation: x,
            disableBackground: h,
        } = e,
        [_, A] = s.useState(!0),
        [p, f] = s.useState(!1),
        { ref: j, height: N = 0 } = (0, d.Ay)(),
        { ref: E, height: b = 0 } = (0, d.Ay)(),
        [T, C] = s.useState(l),
        I = (0, o.zhh)(
            {
                height: T ? b + N : N,
                config: { ...a.config.stiff, clamp: !0 },
                onStart: () => {
                    f(!1);
                },
                onRest: () => {
                    f(!0);
                },
            },
            _ || x ? "animate-never" : "respect-motion-settings",
        );
    return (
        s.useLayoutEffect(() => {
            f(!1), C(l);
        }, [l]),
        s.useLayoutEffect(() => {
            let e = setTimeout(() => {
                A(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        (0, i.jsx)(o.DUT, {
            className: r()(u.Lo, { [u.$M]: l, [u._$]: h }),
            children: (0, i.jsxs)(a.animated.div, {
                className: r()(u.N0, { [u.Mm]: l && p }),
                style: I,
                children: [
                    (0, i.jsx)(o.DUT, {
                        innerRef: j,
                        onClick: g ? void 0 : m,
                        className: r()(u.MU, { [u.$M]: l && g }),
                        "aria-label": c.intl.string(c.t.dcl9MQ),
                        children: t,
                    }),
                    (0, i.jsx)("div", { ref: E, children: n }),
                ],
            }),
        })
    );
});

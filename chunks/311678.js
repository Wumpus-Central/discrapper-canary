n.d(t, {
    N: () => f,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(92674),
    l = n(397927),
    c = n(765671),
    u = n(342860);
let d = 100;

function f(e) {
    let { children: t, className: n, collapsibleContent: a, isExpanded: f } = e,
        [p, _] = i.useState(!1),
        [h, m] = i.useState(!0),
        [g, E] = i.useState(!1),
        y = null != f ? f : p,
        { ref: b, height: O = 0 } = (0, c.Ay)(),
        { ref: v, height: A = 0 } = (0, c.Ay)(),
        I = (0, l.zhh)(
            {
                height: y ? O + A : A,
                config: s.config.stiff,
                onRest: () => E(!0),
            },
            h ? "animate-never" : "respect-motion-settings",
        ),
        S = i.useCallback(() => {
            _(!p);
        }, [p, _]);
    return (
        i.useLayoutEffect(() => {
            let e = setTimeout(() => {
                m(!1);
            }, d);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)("div", {
            className: o()(
                u.uR,
                {
                    [u.$M]: y,
                },
                n,
            ),
            children: (0, r.jsxs)(s.animated.div, {
                className: o()(u.N0, {
                    [u.Mm]: y && g,
                }),
                style: I,
                children: [
                    (0, r.jsx)("div", {
                        ref: v,
                        className: o()(u.wx, {
                            [u.$M]: y,
                        }),
                        children: t({
                            onClick: S,
                        }),
                    }),
                    (0, r.jsx)(l.M1G, {
                        enabled: !y,
                        children: (0, r.jsx)("div", {
                            ref: b,
                            "aria-hidden": !y,
                            children: a,
                        }),
                    }),
                ],
            }),
        })
    );
}

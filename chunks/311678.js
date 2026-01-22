n.d(t, {
    N: () => f,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(108531),
    l = n(397927),
    c = n(765671),
    u = n(342860);
let d = 100;

function f(e) {
    let { children: t, className: n, collapsibleContent: a, isExpanded: f } = e,
        [p, _] = i.useState(!1),
        [h, m] = i.useState(!0),
        [g, E] = i.useState(!1),
        b = null != f ? f : p,
        { ref: y, height: O = 0 } = (0, c.Ay)(),
        { ref: A, height: v = 0 } = (0, c.Ay)(),
        S = (0, l.zhh)(
            {
                height: b ? O + v : v,
                config: o.config.stiff,
                onRest: () => E(!0),
            },
            h ? "animate-never" : "respect-motion-settings",
        ),
        I = i.useCallback(() => {
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
            className: s()(
                u.uR,
                {
                    [u.$M]: b,
                },
                n,
            ),
            children: (0, r.jsxs)(o.animated.div, {
                className: s()(u.N0, {
                    [u.Mm]: b && g,
                }),
                style: S,
                children: [
                    (0, r.jsx)("div", {
                        ref: A,
                        className: s()(u.wx, {
                            [u.$M]: b,
                        }),
                        children: t({
                            onClick: I,
                        }),
                    }),
                    (0, r.jsx)(l.M1G, {
                        enabled: !b,
                        children: (0, r.jsx)("div", {
                            ref: y,
                            "aria-hidden": !b,
                            children: a,
                        }),
                    }),
                ],
            }),
        })
    );
}

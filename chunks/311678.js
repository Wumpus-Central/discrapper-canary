"use strict";
n.d(t, { N: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(4208),
    l = n(397927),
    u = n(765671),
    c = n(941033);
let d = 100;
function _(e) {
    let { children: t, className: n, collapsibleContent: s, isExpanded: _ } = e,
        [f, p] = i.useState(!1),
        [h, m] = i.useState(!0),
        [E, g] = i.useState(!1),
        A = _ ?? f,
        { ref: I, height: T = 0 } = (0, u.Ay)(),
        { ref: S, height: y = 0 } = (0, u.Ay)(),
        v = (0, l.zhh)(
            { height: A ? T + y : y, config: o.config.stiff, onRest: () => g(!0) },
            h ? "animate-never" : "respect-motion-settings",
        ),
        N = i.useCallback(() => {
            p(!f);
        }, [f, p]);
    return (
        i.useLayoutEffect(() => {
            let e = setTimeout(() => {
                m(!1);
            }, d);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)("div", {
            className: a()(c.uR, { [c.$M]: A }, n),
            children: (0, r.jsxs)(o.animated.div, {
                className: a()(c.N0, { [c.Mm]: A && E }),
                style: v,
                children: [
                    (0, r.jsx)("div", { ref: S, className: a()(c.wx, { [c.$M]: A }), children: t({ onClick: N }) }),
                    (0, r.jsx)(l.M1G, {
                        enabled: !A,
                        children: (0, r.jsx)("div", { ref: I, "aria-hidden": !A, children: s }),
                    }),
                ],
            }),
        })
    );
}

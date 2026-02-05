"use strict";
n.d(t, { N: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(92674),
    l = n(397927),
    u = n(765671),
    c = n(342860);
let d = 100;
function _(e) {
    let { children: t, className: n, collapsibleContent: a, isExpanded: _ } = e,
        [f, p] = i.useState(!1),
        [h, m] = i.useState(!0),
        [g, E] = i.useState(!1),
        A = _ ?? f,
        { ref: I, height: T = 0 } = (0, u.Ay)(),
        { ref: y, height: S = 0 } = (0, u.Ay)(),
        v = (0, l.zhh)(
            { height: A ? T + S : S, config: o.config.stiff, onRest: () => E(!0) },
            h ? "animate-never" : "respect-motion-settings",
        ),
        C = i.useCallback(() => {
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
            className: s()(c.uR, { [c.$M]: A }, n),
            children: (0, r.jsxs)(o.animated.div, {
                className: s()(c.N0, { [c.Mm]: A && g }),
                style: v,
                children: [
                    (0, r.jsx)("div", { ref: y, className: s()(c.wx, { [c.$M]: A }), children: t({ onClick: C }) }),
                    (0, r.jsx)(l.M1G, {
                        enabled: !A,
                        children: (0, r.jsx)("div", { ref: I, "aria-hidden": !A, children: a }),
                    }),
                ],
            }),
        })
    );
}

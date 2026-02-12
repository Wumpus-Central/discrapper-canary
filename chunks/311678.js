"use strict";
n.d(t, { N: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(40153),
    l = n(397927),
    u = n(765671),
    c = n(342860);
let d = 100;
function _(e) {
    let { children: t, className: n, collapsibleContent: a, isExpanded: _ } = e,
        [f, h] = i.useState(!1),
        [p, g] = i.useState(!0),
        [E, A] = i.useState(!1),
        I = _ ?? f,
        { ref: T, height: y = 0 } = (0, u.Ay)(),
        { ref: S, height: v = 0 } = (0, u.Ay)(),
        C = (0, l.zhh)(
            { height: I ? y + v : v, config: o.config.stiff, onRest: () => A(!0) },
            p ? "animate-never" : "respect-motion-settings",
        ),
        b = i.useCallback(() => {
            h(!f);
        }, [f, h]);
    return (
        i.useLayoutEffect(() => {
            let e = setTimeout(() => {
                g(!1);
            }, d);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)("div", {
            className: s()(c.uR, { [c.$M]: I }, n),
            children: (0, r.jsxs)(o.animated.div, {
                className: s()(c.N0, { [c.Mm]: I && E }),
                style: C,
                children: [
                    (0, r.jsx)("div", { ref: S, className: s()(c.wx, { [c.$M]: I }), children: t({ onClick: b }) }),
                    (0, r.jsx)(l.M1G, {
                        enabled: !I,
                        children: (0, r.jsx)("div", { ref: T, "aria-hidden": !I, children: a }),
                    }),
                ],
            }),
        })
    );
}

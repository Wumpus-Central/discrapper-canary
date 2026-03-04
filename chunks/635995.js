n.d(t, { In: () => E, T0: () => u, fY: () => d });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(732955),
    s = n(397927),
    o = n(818348),
    c = n(985018),
    _ = n(659039);
let E = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(s.Heading, {
            variant: "heading-sm/medium",
            color: "text-strong",
            className: _.ut,
            children: t,
        });
    },
    d = (e) => {
        let { text: t, onClick: n } = e;
        return (0, i.jsx)(a.$nd, { onClick: n, text: t, size: "sm", icon: s.tvc, variant: "secondary" });
    };
function u(e) {
    let { className: t, ref: n, children: l, onClick: a } = e;
    return (0, i.jsx)(s.NPJ, {
        theme: o.NJ.DARKER,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: n,
                className: r()(_.lm, e, t),
                children: [
                    (0, i.jsx)("div", { className: _.qZ, children: l }),
                    (0, i.jsx)(s.DUT, {
                        focusProps: { offset: 6 },
                        className: _.b,
                        onClick: a,
                        "aria-label": c.intl.string(c.t.WAI6xu),
                        children: (0, i.jsx)(s.PGe, { size: "sm" }),
                    }),
                ],
            }),
    });
}

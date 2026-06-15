a.d(t, { In: () => g, T0: () => x, fY: () => p });
var s = a(627968);
a(64700);
var i = a(503698),
    n = a.n(i),
    r = a(821609),
    l = a(534514),
    c = a(403581),
    o = a(43990),
    d = a(939249),
    u = a(789645),
    m = a(818348),
    A = a(375708),
    N = a(192842);
let g = (e) => {
        let { children: t } = e;
        return (0, s.jsx)(l.D, { variant: "heading-sm/medium", color: "text-strong", className: N.ut, children: t });
    },
    p = (e) => {
        let { text: t, onClick: a } = e;
        return (0, s.jsx)(r.$, { onClick: a, text: t, size: "sm", icon: c.t, variant: "overlay-primary" });
    };
function x(e) {
    let { className: t, ref: a, children: i, onClick: r } = e;
    return (0, s.jsx)(o.N, {
        theme: m.NJ.DARKER,
        children: (e) =>
            (0, s.jsxs)("div", {
                ref: a,
                className: n()(N.lm, e, t),
                children: [
                    (0, s.jsx)("div", { className: N.qZ, children: i }),
                    (0, s.jsx)(d.D, {
                        focusProps: { offset: 6 },
                        className: N.b,
                        onClick: r,
                        "aria-label": A.intl.string(A.t.WAI6xu),
                        children: (0, s.jsx)(u.P, { size: "sm" }),
                    }),
                ],
            }),
    });
}

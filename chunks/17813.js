e.d(s, { A: () => l });
var i = e(477900);
e(582128);
var n = e(31300),
    t = e(834730),
    c = e(276983),
    a = e(733767);
function d(r) {
    let { permission: s } = r;
    if ("screen_capture" === s) return (0, i.jsx)(n.k, { size: "md", color: "currentColor", "aria-hidden": !0 });
}
function l(r) {
    let { permissions: s } = r;
    return (0, i.jsx)("ul", {
        className: a.p,
        children: s.map((r) =>
            (0, i.jsxs)(
                "li",
                {
                    className: a.n,
                    children: [
                        (0, i.jsx)(d, { permission: r }),
                        (0, i.jsx)(t.E, { variant: "text-md/medium", color: "text-strong", children: (0, c.Us)(r) }),
                    ],
                },
                r,
            ),
        ),
    });
}

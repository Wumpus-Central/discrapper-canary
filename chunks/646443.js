l.d(t, { l: () => d });
var a = l(627968),
    n = l(624479),
    r = l(408278),
    i = l(834730),
    o = l(957565),
    s = l(534472);
let d = (e) => {
    let { label: t, value: l } = e;
    return (0, a.jsxs)("div", {
        className: s.I,
        children: [
            (0, a.jsxs)(i.E, { variant: "text-sm/medium", children: [t, ":"] }),
            (0, a.jsx)(i.E, { variant: "text-sm/normal", children: l }),
            (0, a.jsx)(r.K, {
                size: "sm",
                "aria-label": "Copy Link",
                variant: "icon-only",
                icon: n.T,
                onClick: () => (0, o.C)(l),
            }),
        ],
    });
};

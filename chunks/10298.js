n.d(t, { N: () => s });
var r = n(951288),
    i = n(481060),
    a = n(526665),
    o = n(812278);
let s = (e) => {
    let { children: t, header: n, notice: s } = e,
        l = (0, a.wy)("LegacySettingsPage");
    return (0, r.jsxs)("div", {
        className: o.settingsPage,
        children: [
            s,
            !l &&
                (0, r.jsx)(i.y5t, {
                    children: (0, r.jsx)(i.X6q, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        children: n,
                    }),
                }),
            (0, r.jsx)("div", { children: t }),
        ],
    });
};

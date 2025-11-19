n.d(t, { N: () => s });
var r = n(54381),
    i = n(481060),
    a = n(438976),
    o = n(306900);
let s = (e) => {
    let { children: t, header: n, notice: s } = e,
        l = (0, a.Z)();
    return (0, r.jsxs)("div", {
        className: o.settingsPage,
        children: [
            s,
            !l &&
                (0, r.jsx)(i.y5t, {
                    children: (0, r.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        children: n,
                    }),
                }),
            (0, r.jsx)("div", { children: t }),
        ],
    });
};

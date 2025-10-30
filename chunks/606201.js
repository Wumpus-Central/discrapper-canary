n.d(t, {
    $0: () => d,
    BZ: () => u,
    E_: () => c,
    pg: () => m,
});
var a = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    i = n(481060),
    o = n(88510);
let s = () => (0, a.jsx)("hr", { className: o.sectionDivider }),
    c = (e) => {
        let { label: t, children: n, direction: r = "horizontal", className: c } = e;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(s, {}),
                (0, a.jsx)(i.Text, {
                    variant: "text-md/semibold",
                    className: o.labelSpacing,
                    children: t,
                }),
                (0, a.jsx)("div", {
                    className: l()(o.container, c, { [o.verticalContainer]: "vertical" === r }),
                    children: n,
                }),
            ],
        });
    },
    d = (e) => {
        let { children: t } = e;
        return (0, a.jsx)("div", {
            className: o.section,
            children: t,
        });
    },
    u = (e) =>
        (0, a.jsx)("div", {
            className: o.inputGroup,
            children: e.children,
        }),
    m = (e) =>
        (0, a.jsx)("fieldset", {
            className: o.fieldset,
            children: e.children,
        });

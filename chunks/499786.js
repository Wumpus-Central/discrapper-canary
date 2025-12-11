n.d(t, {
    $0: () => u,
    BZ: () => d,
    E_: () => c,
    dv: () => l,
    pg: () => f,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(23393);
let l = () => (0, r.jsx)("hr", { className: s.sectionDivider }),
    c = (e) => {
        let { label: t, children: n, direction: i = "horizontal", className: c } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l, {}),
                (0, r.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    className: s.labelSpacing,
                    children: t,
                }),
                (0, r.jsx)("div", {
                    className: a()(s.container, c, { [s.verticalContainer]: "vertical" === i }),
                    children: n,
                }),
            ],
        });
    },
    u = (e) => {
        let { children: t } = e;
        return (0, r.jsx)("div", {
            className: s.section,
            children: t,
        });
    },
    d = (e) =>
        (0, r.jsx)("div", {
            className: s.inputGroup,
            children: e.children,
        }),
    f = (e) =>
        (0, r.jsx)("fieldset", {
            className: s.fieldset,
            children: e.children,
        });

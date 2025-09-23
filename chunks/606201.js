n.d(t, {
    $0: () => d,
    BZ: () => u,
    E_: () => c,
    pg: () => m,
});
var a = n(951288);
n(647438);
var r = n(120356),
    i = n.n(r),
    l = n(481060),
    s = n(88510);
let o = () => (0, a.jsx)("hr", { className: s.sectionDivider }),
    c = (e) => {
        let { label: t, children: n, direction: r = "horizontal", className: c } = e;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(o, {}),
                (0, a.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    className: s.labelSpacing,
                    children: t,
                }),
                (0, a.jsx)("div", {
                    className: i()(s.container, c, { [s.verticalContainer]: "vertical" === r }),
                    children: n,
                }),
            ],
        });
    },
    d = (e) => {
        let { children: t } = e;
        return (0, a.jsx)("div", {
            className: s.section,
            children: t,
        });
    },
    u = (e) =>
        (0, a.jsx)("div", {
            className: s.inputGroup,
            children: e.children,
        }),
    m = (e) =>
        (0, a.jsx)("fieldset", {
            className: s.fieldset,
            children: e.children,
        });

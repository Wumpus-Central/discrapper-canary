n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var a = n(397927),
    i = n(573435),
    r = n(486020),
    s = n(985018),
    d = n(488751);
let o = (e) => {
    let { entry: t } = e,
        { id: n, icon: o, name: c } = t,
        u = r.Ay.getGuildIconURL({ id: n, icon: o, size: 32 }) ?? void 0;
    return (0, l.jsxs)("div", {
        className: d.kL,
        children: [
            (0, l.jsx)(a.Heading, {
                className: d.wx,
                variant: "heading-sm/semibold",
                children: s.intl.string(s.t.nTe4HC),
            }),
            (0, l.jsx)("div", {
                className: d.bo,
                children: (0, l.jsxs)("div", {
                    className: d.OA,
                    children: [
                        (0, l.jsx)(i.Ay, {
                            mask: i.Ay.Masks.SQUIRCLE,
                            width: 32,
                            height: 32,
                            className: d.$d,
                            children: (0, l.jsx)("img", { src: u, alt: "", className: d.$f }),
                        }),
                        (0, l.jsx)(a.Text, { color: "text-default", variant: "text-sm/normal", children: c }),
                    ],
                }),
            }),
        ],
    });
};

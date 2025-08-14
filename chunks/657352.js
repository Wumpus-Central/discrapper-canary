n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(388032),
    a = n(576385);
let s = (e) => {
    let { guild: t, onClose: s } = e;
    return (0, r.jsxs)("div", {
        className: a.container,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: a.image,
                src: n(238980),
            }),
            (0, r.jsxs)("div", {
                className: a.content,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: "heading-md/semibold",
                        children: o.intl.format(o.t.THgVCA, { guild: t.name }),
                    }),
                    (0, r.jsx)(i.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: o.intl.string(o.t["1yq3nJ"]),
                    }),
                    (0, r.jsx)("div", {
                        className: a.buttonContainer,
                        children: (0, r.jsx)(i.zxk, {
                            variant: "primary",
                            text: o.intl.string(o.t.hLw0wc),
                            onClick: s,
                        }),
                    }),
                ],
            }),
        ],
    });
};

n.d(t, { Z: () => o });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(388032),
    a = n(29030);
let o = (e) => {
    let { guild: t, onClose: o } = e;
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
                    (0, r.jsx)(i.Heading, {
                        variant: "heading-md/semibold",
                        children: l.intl.format(l.t.THgVCC, { guild: t.name }),
                    }),
                    (0, r.jsx)(i.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: l.intl.string(l.t["1yq3nO"]),
                    }),
                    (0, r.jsx)("div", {
                        className: a.buttonContainer,
                        children: (0, r.jsx)(i.Button, {
                            variant: "primary",
                            text: l.intl.string(l.t.hLw0wc),
                            onClick: o,
                        }),
                    }),
                ],
            }),
        ],
    });
};

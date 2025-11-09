n.d(t, { Z: () => o });
var i = n(951288);
n(647438);
var r = n(481060),
    l = n(388032),
    a = n(29030);
let o = (e) => {
    let { guild: t, onClose: o } = e;
    return (0, i.jsxs)("div", {
        className: a.container,
        children: [
            (0, i.jsx)("img", {
                alt: "",
                className: a.image,
                src: n(238980),
            }),
            (0, i.jsxs)("div", {
                className: a.content,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        children: l.intl.format(l.t.THgVCC, { guild: t.name }),
                    }),
                    (0, i.jsx)(r.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: l.intl.string(l.t["1yq3nO"]),
                    }),
                    (0, i.jsx)("div", {
                        className: a.buttonContainer,
                        children: (0, i.jsx)(r.Button, {
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

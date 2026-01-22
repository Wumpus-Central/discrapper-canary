n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(985018),
    a = n(270920);
let s = (e) => {
    let { guild: t, onClose: s } = e;
    return (0, r.jsxs)("div", {
        className: a.kL,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: a.Sl,
                src: n(960416),
            }),
            (0, r.jsxs)("div", {
                className: a.Qs,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        children: i.intl.format(i.t.THgVCC, { guild: t.name }),
                    }),
                    (0, r.jsx)(l.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: i.intl.string(i.t["1yq3nO"]),
                    }),
                    (0, r.jsx)("div", {
                        className: a.UD,
                        children: (0, r.jsx)(l.Button, {
                            variant: "primary",
                            text: i.intl.string(i.t.hLw0wc),
                            onClick: s,
                        }),
                    }),
                ],
            }),
        ],
    });
};

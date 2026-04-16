n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(985018),
    s = n(35787);
let r = (e) => {
    let { guild: t, onClose: r } = e;
    return (0, i.jsxs)("div", {
        className: s.kL,
        children: [
            (0, i.jsx)("img", { alt: "", className: s.Sl, src: n(960416) }),
            (0, i.jsxs)("div", {
                className: s.Qs,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        children: a.intl.format(a.t.THgVCC, { guild: t.name }),
                    }),
                    (0, i.jsx)(l.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: a.intl.string(a.t["1yq3nO"]),
                    }),
                    (0, i.jsx)("div", {
                        className: s.UD,
                        children: (0, i.jsx)(l.Button, {
                            variant: "primary",
                            text: a.intl.string(a.t.hLw0wc),
                            onClick: r,
                        }),
                    }),
                ],
            }),
        ],
    });
};

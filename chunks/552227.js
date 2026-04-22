n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(534514),
    a = n(834730),
    s = n(821609),
    r = n(985018),
    o = n(292939);
let c = (e) => {
    let { guild: t, onClose: c } = e;
    return (0, i.jsxs)("div", {
        className: o.kL,
        children: [
            (0, i.jsx)("img", { alt: "", className: o.Sl, src: n(960416) }),
            (0, i.jsxs)("div", {
                className: o.Qs,
                children: [
                    (0, i.jsx)(l.D, {
                        variant: "heading-md/semibold",
                        children: r.intl.format(r.t.THgVCC, { guild: t.name }),
                    }),
                    (0, i.jsx)(a.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: r.intl.string(r.t["1yq3nO"]),
                    }),
                    (0, i.jsx)("div", {
                        className: o.UD,
                        children: (0, i.jsx)(s.$, { variant: "primary", text: r.intl.string(r.t.hLw0wc), onClick: c }),
                    }),
                ],
            }),
        ],
    });
};

n.d(t, {
    A: () => c,
});
var l = n(627968);
n(64700);
var r = n(397927),
    a = n(573435),
    i = n(486020),
    s = n(985018),
    o = n(248065);
let c = (e) => {
    var t;
    let { entry: n } = e,
        { id: c, icon: d, name: u } = n,
        m =
            null !=
            (t = i.Ay.getGuildIconURL({
                id: c,
                icon: d,
                size: 32,
            }))
                ? t
                : void 0;
    return (0, l.jsxs)("div", {
        className: o.kL,
        children: [
            (0, l.jsx)(r.Heading, {
                className: o.wx,
                variant: "heading-sm/semibold",
                children: s.intl.string(s.t.nTe4HC),
            }),
            (0, l.jsx)("div", {
                className: o.bo,
                children: (0, l.jsxs)("div", {
                    className: o.OA,
                    children: [
                        (0, l.jsx)(a.Ay, {
                            mask: a.Ay.Masks.SQUIRCLE,
                            width: 32,
                            height: 32,
                            className: o.$d,
                            children: (0, l.jsx)("img", {
                                src: m,
                                alt: "",
                                className: o.$f,
                            }),
                        }),
                        (0, l.jsx)(r.Text, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: u,
                        }),
                    ],
                }),
            }),
        ],
    });
};

n.d(t, {
    A: () => o,
});
var l = n(627968);
n(64700);
var r = n(397927),
    a = n(263063),
    i = n(985018),
    s = n(345303);
let o = (e) => {
    let { guild: t } = e;
    return (0, l.jsxs)("div", {
        className: s.kL,
        children: [
            (0, l.jsx)(r.Heading, {
                className: s.wx,
                variant: "heading-sm/semibold",
                children: i.intl.string(i.t["0ox7Hq"]),
            }),
            (0, l.jsx)("div", {
                className: s.bo,
                children: (0, l.jsxs)("div", {
                    className: s.OA,
                    children: [
                        (0, l.jsx)("div", {
                            className: s.$f,
                            children: (0, l.jsx)(a.A, {
                                guild: t,
                                size: a.A.Sizes.LARGE,
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: t.name,
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
};

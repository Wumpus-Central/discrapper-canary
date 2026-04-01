n.d(t, { A: () => d });
var l = n(627968);
n(64700);
var a = n(397927),
    i = n(730134),
    r = n(985018),
    s = n(83760);
let d = (e) => {
    let { user: t } = e;
    return (0, l.jsxs)("div", {
        className: s.kL,
        children: [
            (0, l.jsx)(a.Heading, {
                className: s.wx,
                variant: "heading-sm/semibold",
                children: r.intl.string(r.t.Rsth7z),
            }),
            (0, l.jsx)("div", {
                className: s.f1,
                children: (0, l.jsxs)("div", {
                    className: s.eF,
                    children: [
                        (0, l.jsx)(i.A, { className: s.Hk, user: t, size: a._3J.SIZE_40 }),
                        (0, l.jsxs)("div", {
                            children: [
                                null != t.globalName &&
                                    (0, l.jsx)(a.Text, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        children: t.globalName,
                                    }),
                                (0, l.jsx)(a.Text, {
                                    color: "text-default",
                                    variant: "text-sm/normal",
                                    children: t.username,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
};

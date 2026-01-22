n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var r = n(397927),
    a = n(730134),
    i = n(985018),
    s = n(388889);
let o = (e) => {
    let { user: t } = e;
    return (0, l.jsxs)("div", {
        className: s.kL,
        children: [
            (0, l.jsx)(r.Heading, {
                className: s.wx,
                variant: "heading-sm/semibold",
                children: i.intl.string(i.t.Rsth7z),
            }),
            (0, l.jsx)("div", {
                className: s.f1,
                children: (0, l.jsxs)("div", {
                    className: s.eF,
                    children: [
                        (0, l.jsx)(a.A, {
                            className: s.Hk,
                            user: t,
                            size: r._3J.SIZE_40,
                        }),
                        (0, l.jsxs)("div", {
                            children: [
                                null != t.globalName &&
                                    (0, l.jsx)(r.Text, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        children: t.globalName,
                                    }),
                                (0, l.jsx)(r.Text, {
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

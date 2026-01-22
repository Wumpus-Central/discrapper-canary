n.d(t, {
    A: () => l,
    G: () => o,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(195043),
    s = n(645022);
function o(e) {
    let { children: t, title: n, description: a } = e;
    return (0, r.jsxs)("div", {
        className: s.L1,
        children: [
            (null != n || null != a) &&
                (0, r.jsxs)("div", {
                    className: s.Km,
                    children: [
                        null != n &&
                            (0, r.jsx)(i.Heading, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: n,
                            }),
                        null != a &&
                            (0, r.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: a,
                            }),
                    ],
                }),
            (0, r.jsx)("div", {
                className: s.Yq,
                children: t,
            }),
            (0, r.jsx)(i.cGx, { className: s.yj }),
        ],
    });
}
function l(e) {
    let { children: t, title: n, description: i, webSetting: s } = e;
    return (0, r.jsx)(a.x, {
        setting: s,
        children: (0, r.jsx)(o, {
            title: n,
            description: i,
            children: t,
        }),
    });
}

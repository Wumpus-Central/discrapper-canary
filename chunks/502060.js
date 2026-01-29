n.d(t, {
    G: () => s,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(397927);
n(195043);
var l = n(645022);

function s(e) {
    let { children: t, title: n, description: s } = e;
    return (0, r.jsxs)("div", {
        className: l.L1,
        children: [
            (null != n || null != s) &&
                (0, r.jsxs)("div", {
                    className: l.Km,
                    children: [
                        null != n &&
                            (0, r.jsx)(i.Heading, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: n,
                            }),
                        null != s &&
                            (0, r.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: s,
                            }),
                    ],
                }),
            (0, r.jsx)("div", {
                className: l.Yq,
                children: t,
            }),
            (0, r.jsx)(i.cGx, {
                className: l.yj,
            }),
        ],
    });
}

n.d(t, {
    N: () => s,
    Z: () => l,
}),
    n(953529);
var r = n(54381);
n(473749);
var i = n(481060),
    o = n(921801),
    a = n(198840);
function s(e) {
    let { children: t, title: n, description: o } = e;
    return (0, r.jsxs)("div", {
        className: a.category,
        children: [
            (null != n || null != o) &&
                (0, r.jsxs)("div", {
                    className: a.categoryHeader,
                    children: [
                        null != n &&
                            (0, r.jsx)(i.Heading, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: n,
                            }),
                        null != o &&
                            (0, r.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: o,
                            }),
                    ],
                }),
            (0, r.jsx)("div", {
                className: a.categoryContent,
                children: t,
            }),
            (0, r.jsx)(i.izJ, { className: a.categoryDivider }),
        ],
    });
}
function l(e) {
    let { children: t, title: n, description: i, webSetting: a } = e;
    return (0, r.jsx)(o.F, {
        setting: a,
        children: (0, r.jsx)(s, {
            title: n,
            description: i,
            children: t,
        }),
    });
}

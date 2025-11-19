n.d(t, {
    N: () => s,
    Z: () => l,
}),
    n(953529);
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(921801),
    o = n(778214);
function s(e) {
    let { children: t, title: n, description: a } = e;
    return (0, r.jsxs)("div", {
        className: o.category,
        children: [
            (null != n || null != a) &&
                (0, r.jsxs)("div", {
                    className: o.categoryHeader,
                    children: [
                        null != n &&
                            (0, r.jsx)(i.Heading, {
                                variant: "heading-lg/semibold",
                                color: "header-primary",
                                children: n,
                            }),
                        null != a &&
                            (0, r.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: a,
                            }),
                    ],
                }),
            (0, r.jsx)("div", {
                className: o.categoryContent,
                children: t,
            }),
            (0, r.jsx)(i.izJ, { className: o.categoryDivider }),
        ],
    });
}
function l(e) {
    let { children: t, title: n, description: i, webSetting: o } = e;
    return (0, r.jsx)(a.F, {
        setting: o,
        children: (0, r.jsx)(s, {
            title: n,
            description: i,
            children: t,
        }),
    });
}

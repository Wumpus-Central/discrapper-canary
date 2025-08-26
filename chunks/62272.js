n.d(t, { Q: () => s });
var r = n(951288);
n(647438);
var i = n(103866),
    a = n(481060),
    l = n(697674),
    c = n(345262),
    o = n(393201);
let s = (e) => {
    let { children: t, actions: n, footerInput: s, title: u } = e;
    return (0, r.jsxs)(a.Kqy, {
        direction: "vertical",
        justify: "start",
        padding: c.h,
        className: o.container,
        children: [
            (0, r.jsx)(a.X6q, {
                variant: "heading-lg/semibold",
                className: o.heading,
                children: u,
            }),
            (0, r.jsx)(i.f, { children: t }),
            (0, r.jsx)("div", { className: o.footerSpacer }),
            (0, r.jsx)(l.A, {
                actions: n,
                footerInput: s,
            }),
        ],
    });
};

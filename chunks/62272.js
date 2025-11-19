n.d(t, { Q: () => c });
var a = n(54381);
n(473749);
var l = n(793030),
    i = n(481060),
    r = n(697674),
    s = n(345262),
    o = n(393201);
let c = (e) => {
    let { children: t, actions: n, footerInput: c, title: d } = e;
    return (0, a.jsxs)(i.Kqy, {
        direction: "vertical",
        justify: "start",
        padding: s.h,
        className: o.container,
        children: [
            (0, a.jsx)(i.Heading, {
                variant: "heading-lg/semibold",
                className: o.heading,
                children: d,
            }),
            (0, a.jsx)(l.fef, { children: t }),
            (0, a.jsx)("div", { className: o.footerSpacer }),
            (0, a.jsx)(r.A, {
                actions: n,
                footerInput: c,
            }),
        ],
    });
};

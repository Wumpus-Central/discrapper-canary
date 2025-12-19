n.d(t, { Q: () => c });
var a = n(54381);
n(473749);
var r = n(793030),
    i = n(481060),
    l = n(697674),
    s = n(345262),
    o = n(175705);
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
            (0, a.jsx)(r.fef, { children: t }),
            (0, a.jsx)("div", { className: o.footerSpacer }),
            (0, a.jsx)(l.A, {
                actions: n,
                footerInput: c,
            }),
        ],
    });
};

n.d(t, { Q: () => c });
var a = n(951288);
n(647438);
var r = n(793030),
    l = n(481060),
    i = n(697674),
    o = n(345262),
    s = n(393201);
let c = (e) => {
    let { children: t, actions: n, footerInput: c, title: d } = e;
    return (0, a.jsxs)(l.Kqy, {
        direction: "vertical",
        justify: "start",
        padding: o.h,
        className: s.container,
        children: [
            (0, a.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                className: s.heading,
                children: d,
            }),
            (0, a.jsx)(r.fef, { children: t }),
            (0, a.jsx)("div", { className: s.footerSpacer }),
            (0, a.jsx)(i.A, {
                actions: n,
                footerInput: c,
            }),
        ],
    });
};

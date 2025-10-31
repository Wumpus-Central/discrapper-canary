n.d(t, { Q: () => c });
var a = n(951288);
n(647438);
var i = n(793030),
    l = n(481060),
    r = n(697674),
    s = n(345262),
    o = n(393201);
let c = (e) => {
    let { children: t, actions: n, footerInput: c, title: d } = e;
    return (0, a.jsxs)(l.Kqy, {
        direction: "vertical",
        justify: "start",
        padding: s.h,
        className: o.container,
        children: [
            (0, a.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                className: o.heading,
                children: d,
            }),
            (0, a.jsx)(i.fef, { children: t }),
            (0, a.jsx)("div", { className: o.footerSpacer }),
            (0, a.jsx)(r.A, {
                actions: n,
                footerInput: c,
            }),
        ],
    });
};

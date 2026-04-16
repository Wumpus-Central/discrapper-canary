"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(2242),
    r = n(985018),
    a = n(273971),
    o = n(348437),
    d = n(80098),
    c = n(142699);
function u(e) {
    let { imageSrc: t, description: n } = e;
    return (0, i.jsxs)("div", {
        className: a.kD,
        children: [
            (0, i.jsx)("div", { className: a.sM, children: (0, i.jsx)("img", { className: a.Bp, src: t, alt: "" }) }),
            (0, i.jsx)("div", {
                className: a.Q7,
                children: (0, i.jsx)(s.Text, { variant: "text-sm/normal", color: "text-strong", children: n }),
            }),
        ],
    });
}
function m() {
    let e = [
        { imageSrc: c, description: r.intl.string(r.t.lT0ZNS) },
        { imageSrc: o, description: r.intl.string(r.t.ihN2Wb) },
        { imageSrc: d, description: r.intl.string(r.t.c8krDQ) },
    ];
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: r.intl.string(r.t.R9rNIk),
            }),
            (0, i.jsx)(s.hKd, { size: 24 }),
            (0, i.jsx)("div", {
                className: a.LL,
                children: e.map((e) => (0, i.jsx)(u, { imageSrc: e.imageSrc, description: e.description }, e.imageSrc)),
            }),
            (0, i.jsx)(s.hKd, { size: 24 }),
            (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: r.intl.format(r.t.oxW30N, { creatorPortalUrl: l.nd }),
            }),
        ],
    });
}

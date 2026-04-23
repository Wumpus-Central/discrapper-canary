n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(834730),
    s = n(534514),
    r = n(696986),
    a = n(2242),
    o = n(985018),
    d = n(273971),
    c = n(348437),
    u = n(80098),
    m = n(142699);
function g(e) {
    let { imageSrc: t, description: n } = e;
    return (0, i.jsxs)("div", {
        className: d.kD,
        children: [
            (0, i.jsx)("div", { className: d.sM, children: (0, i.jsx)("img", { className: d.Bp, src: t, alt: "" }) }),
            (0, i.jsx)("div", {
                className: d.Q7,
                children: (0, i.jsx)(l.E, { variant: "text-sm/normal", color: "text-strong", children: n }),
            }),
        ],
    });
}
function h() {
    let e = [
        { imageSrc: m, description: o.intl.string(o.t.lT0ZNS) },
        { imageSrc: c, description: o.intl.string(o.t.ihN2Wb) },
        { imageSrc: u, description: o.intl.string(o.t.c8krDQ) },
    ];
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(s.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: o.intl.string(o.t.R9rNIk),
            }),
            (0, i.jsx)(r.h, { size: 24 }),
            (0, i.jsx)("div", {
                className: d.LL,
                children: e.map((e) => (0, i.jsx)(g, { imageSrc: e.imageSrc, description: e.description }, e.imageSrc)),
            }),
            (0, i.jsx)(r.h, { size: 24 }),
            (0, i.jsx)(l.E, {
                variant: "text-sm/normal",
                color: "text-default",
                children: o.intl.format(o.t.oxW30N, { creatorPortalUrl: a.nd }),
            }),
        ],
    });
}

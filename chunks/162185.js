t.d(e, { b: () => u });
var n = t(477900);
t(582128);
var r = t(935462),
    s = t(534514),
    i = t(834730),
    l = t(821609),
    c = t(235986),
    o = t(936525),
    d = t(105292),
    m = t(844768);
function u(a) {
    let { onClose: e, img: t, title: u, body: x, content: N } = a;
    return (0, n.jsxs)(o.A, {
        children: [
            (0, n.jsxs)(r.rQ, {
                "data-migration-pending": !0,
                direction: c.A.Direction.VERTICAL,
                className: m.wx,
                separator: !1,
                children: [
                    (0, n.jsx)("div", { className: m.bm, children: t }),
                    (0, n.jsx)(s.D, { className: m.DD, variant: "heading-xl/semibold", children: u }),
                    (0, n.jsx)(r.s_, { "data-migration-pending": !0, className: m.b, onClick: e }),
                ],
            }),
            (0, n.jsxs)(r.$m, {
                "data-migration-pending": !0,
                className: m.rf,
                scrollbarGutter: !1,
                children: [
                    (0, n.jsx)(i.E, { tag: "p", variant: "text-md/normal", color: "text-default", children: x }),
                    N,
                ],
            }),
            (0, n.jsx)(r.jl, {
                "data-migration-pending": !0,
                className: m.qr,
                children: (0, n.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: m.wC,
                    children: (0, n.jsx)(l.$, { variant: "primary", text: d.intl.string(d.t.i4jeWR), onClick: e }),
                }),
            }),
        ],
    });
}

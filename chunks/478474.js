t.d(e, { s: () => N });
var r = t(477900);
t(582128);
var n = t(935462),
    s = t(297264),
    l = t(834730),
    i = t(821609),
    c = t(811893),
    o = t(235986),
    d = t(936525),
    m = t(375708),
    x = t(952052),
    u = t(332633);
function N(a) {
    let { onContinue: e, onClose: t, title: N, body: h } = a;
    return (0, r.jsxs)(d.A, {
        children: [
            (0, r.jsxs)(n.rQ, {
                "data-migration-pending": !0,
                direction: o.A.Direction.VERTICAL,
                className: x.wx,
                separator: !1,
                children: [
                    (0, r.jsx)("img", { src: u, className: x.bm, width: "254", height: "127", alt: "" }),
                    (0, r.jsx)(s.D, { className: x.DD, variant: "heading-xl/extrabold", children: N }),
                    null != t && (0, r.jsx)(n.s_, { "data-migration-pending": !0, className: x.b, onClick: t }),
                ],
            }),
            (0, r.jsx)(n.$m, {
                "data-migration-pending": !0,
                className: x.rf,
                scrollbarGutter: !1,
                children: (0, r.jsx)(l.E, { tag: "p", variant: "text-md/normal", color: "text-default", children: h }),
            }),
            (0, r.jsx)(n.jl, {
                "data-migration-pending": !0,
                className: x.qr,
                children: (0, r.jsx)(i.$, {
                    text: m.intl.format(m.t["4X7vPo"], {
                        popoutWindowIcon: {},
                        popoutWindowIconHook: () =>
                            (0, r.jsx)(c.t, { color: "currentColor", className: x.LE, size: "xs" }),
                    }),
                    onClick: e,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}

var n = t(477900);
t(582128);
var r = t(935462),
    s = t(534514),
    i = t(834730),
    l = t(821609),
    c = t(811893),
    o = t(235986),
    d = t(936525),
    m = t(792996),
    u = t(844768),
    x = t(332633);
t.d(
    e,
    {},
    {
        s: function (a) {
            let { onContinue: e, onClose: t, title: N, body: h } = a;
            return (0, n.jsxs)(d.A, {
                children: [
                    (0, n.jsxs)(r.rQ, {
                        "data-migration-pending": !0,
                        direction: o.A.Direction.VERTICAL,
                        className: u.wx,
                        separator: !1,
                        children: [
                            (0, n.jsx)("img", { src: x, className: u.bm, width: "254", height: "127", alt: "" }),
                            (0, n.jsx)(s.D, { className: u.DD, variant: "heading-xl/semibold", children: N }),
                            null != t && (0, n.jsx)(r.s_, { "data-migration-pending": !0, className: u.b, onClick: t }),
                        ],
                    }),
                    (0, n.jsx)(r.$m, {
                        "data-migration-pending": !0,
                        className: u.rf,
                        scrollbarGutter: !1,
                        children: (0, n.jsx)(i.E, {
                            tag: "p",
                            variant: "body-md/normal",
                            color: "text-default",
                            children: h,
                        }),
                    }),
                    (0, n.jsx)(r.jl, {
                        "data-migration-pending": !0,
                        className: u.qr,
                        children: (0, n.jsx)(l.$, {
                            text: m.intl.format(m.t["4X7vPo"], {
                                popoutWindowIcon: {},
                                popoutWindowIconHook: () =>
                                    (0, n.jsx)(c.t, { color: "currentColor", className: u.LE, size: "xs" }),
                            }),
                            onClick: e,
                            fullWidth: !0,
                        }),
                    }),
                ],
            });
        },
    },
);

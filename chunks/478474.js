var t = n(477900);
n(582128);
var r = n(935462),
    s = n(534514),
    i = n(834730),
    l = n(821609),
    c = n(811893),
    o = n(235986),
    d = n(936525),
    m = n(792996),
    u = n(844768),
    N = n(332633);
n.d(
    e,
    {},
    {
        s: function (a) {
            let { onContinue: e, onClose: n, title: x, body: h } = a;
            return (0, t.jsxs)(d.A, {
                children: [
                    (0, t.jsxs)(r.rQ, {
                        "data-migration-pending": !0,
                        direction: o.A.Direction.VERTICAL,
                        className: u.wx,
                        separator: !1,
                        children: [
                            (0, t.jsx)("img", { src: N, className: u.bm, width: "254", height: "127", alt: "" }),
                            (0, t.jsx)(s.D, { className: u.DD, variant: "heading-xl/semibold", children: x }),
                            null != n && (0, t.jsx)(r.s_, { "data-migration-pending": !0, className: u.b, onClick: n }),
                        ],
                    }),
                    (0, t.jsx)(r.$m, {
                        "data-migration-pending": !0,
                        className: u.rf,
                        scrollbarGutter: !1,
                        children: (0, t.jsx)(i.E, {
                            tag: "p",
                            variant: "body-md/normal",
                            color: "text-default",
                            children: h,
                        }),
                    }),
                    (0, t.jsx)(r.jl, {
                        "data-migration-pending": !0,
                        className: u.qr,
                        children: (0, t.jsx)(l.$, {
                            text: m.intl.format(m.t["4X7vPo"], {
                                popoutWindowIcon: {},
                                popoutWindowIconHook: () =>
                                    (0, t.jsx)(c.WindowLaunchIcon, {
                                        color: "currentColor",
                                        className: u.LE,
                                        size: "xs",
                                    }),
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

"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(331322),
    r = n(534514),
    l = n(834730),
    a = n(821609),
    o = n(289873),
    c = n(854378),
    d = n(794347);
function u(e) {
    let { title: t, subtitle: n, buttonText: u, image: _, onButtonClick: h, loading: m } = e;
    return (0, i.jsx)(c.Ay, {
        className: d.kL,
        children: (0, i.jsxs)(s.B, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, i.jsxs)(s.B, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, i.jsxs)(s.B, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != _ &&
                                    (0, i.jsx)(s.B, {
                                        align: "center",
                                        justify: "center",
                                        className: d.Sl,
                                        children: _,
                                    }),
                                m && (0, i.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE }),
                                (0, i.jsx)(r.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, i.jsx)(l.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                className: d.VA,
                                children: n,
                            }),
                    ],
                }),
                !m && (0, i.jsx)(a.$, { onClick: h, text: u, variant: "overlay-primary" }),
            ],
        }),
    });
}

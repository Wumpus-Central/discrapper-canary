"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(158954),
    r = n(732955),
    l = n(397927),
    a = n(854378),
    o = n(819670);
function c(e) {
    let { title: t, subtitle: n, buttonText: c, image: d, onButtonClick: u, loading: h } = e;
    return (0, i.jsx)(a.Ay, {
        className: o.kL,
        children: (0, i.jsxs)(s.BJc, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, i.jsxs)(s.BJc, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, i.jsxs)(s.BJc, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != d &&
                                    (0, i.jsx)(s.BJc, {
                                        align: "center",
                                        justify: "center",
                                        className: o.Sl,
                                        children: d,
                                    }),
                                h && (0, i.jsx)(l.y$y, { type: l.y$y.Type.SPINNING_CIRCLE }),
                                (0, i.jsx)(s.DZT, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    children: t,
                                }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, i.jsx)(s.EYj, {
                                variant: "text-md/normal",
                                color: "text-default",
                                className: o.VA,
                                children: n,
                            }),
                    ],
                }),
                !h && (0, i.jsx)(r.$nd, { onClick: u, text: c, variant: "overlay-primary" }),
            ],
        }),
    });
}

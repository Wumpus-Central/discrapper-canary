n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(158954),
    s = n(732955),
    l = n(397927),
    a = n(854378),
    o = n(819670);
function c(e) {
    let { title: t, subtitle: n, buttonText: c, image: u, onButtonClick: d, loading: h } = e;
    return (0, r.jsx)(a.Ay, {
        className: o.kL,
        children: (0, r.jsxs)(i.BJc, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, r.jsxs)(i.BJc, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, r.jsxs)(i.BJc, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != u &&
                                    (0, r.jsx)(i.BJc, {
                                        align: "center",
                                        justify: "center",
                                        className: o.Sl,
                                        children: u,
                                    }),
                                h && (0, r.jsx)(l.y$y, { type: l.y$y.Type.SPINNING_CIRCLE }),
                                (0, r.jsx)(i.DZT, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    children: t,
                                }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, r.jsx)(i.EYj, {
                                variant: "text-md/normal",
                                color: "text-default",
                                className: o.VA,
                                children: n,
                            }),
                    ],
                }),
                !h &&
                    (0, r.jsx)(s.$nd, {
                        onClick: d,
                        text: c,
                        variant: "overlay-primary",
                    }),
            ],
        }),
    });
}

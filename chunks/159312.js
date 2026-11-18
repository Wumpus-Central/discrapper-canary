var n = i(477900);
i(582128);
var e = i(331322),
    r = i(534514),
    s = i(834730),
    t = i(580342),
    d = i(845079),
    o = i(641655),
    c = i(252753),
    u = i(191850),
    p = i(792996),
    h = i(566600);
i.d(
    a,
    {},
    {
        default: function (l) {
            let { projectId: a } = l,
                i = (0, o.A)(a);
            (0, t.A)(a);
            let { project: j } = i,
                x = p.intl.formatToPlainString(u.default.pgxjO4, { app: j?.name ?? "" });
            return (0, n.jsxs)("div", {
                className: h.n,
                role: "dialog",
                "aria-label": x,
                children: [
                    null != j ? (0, n.jsx)(d.A, { project: j, size: "dialog" }) : null,
                    (0, n.jsxs)(e.B, {
                        gap: 4,
                        children: [
                            (0, n.jsx)(r.D, { variant: "heading-md/semibold", children: x }),
                            (0, n.jsx)(s.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: p.intl.string(u.default.mbybxl),
                            }),
                        ],
                    }),
                    null == j ? null : (0, n.jsx)(c.A, { project: j, sharing: i }),
                ],
            });
        },
    },
);

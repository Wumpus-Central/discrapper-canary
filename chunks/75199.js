a.d(s, { default: () => x });
var e = a(477900);
a(582128);
var l = a(536637),
    i = a.n(l),
    n = a(189213),
    r = a(834730),
    d = a(58703),
    c = a(127181),
    u = a(759967),
    o = a(375708),
    m = a(413927);
function x(t) {
    let { transitionState: s, onClose: a } = t,
        l = (0, c.tn)("desktop");
    return (0, e.jsx)(n.Modal, {
        transitionState: s,
        onClose: a,
        title: o.intl.string(u.default.x07mpp),
        actions: [],
        children: (0, e.jsx)("ol", {
            className: m.V,
            children: l.map((t) =>
                (0, e.jsxs)(
                    "li",
                    {
                        className: m.S3,
                        children: [
                            (0, e.jsxs)(r.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: m.VO,
                                children: [
                                    (0, d.i$)(i()(t.date, "YYYY-MM-DD"), "LL"),
                                    (0, c.MZ)(t) ? ` \xb7 ${o.intl.string(u.default.vvxuUI)}` : null,
                                ],
                            }),
                            (0, e.jsx)(r.E, { variant: "text-sm/normal", color: "text-subtle", children: t.summary }),
                        ],
                    },
                    `${t.date}-${t.summary}`,
                ),
            ),
        }),
    });
}

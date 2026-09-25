a.d(s, { default: () => x });
var e = a(477900);
a(582128);
var i = a(536637),
    l = a.n(i),
    n = a(189213),
    r = a(834730),
    d = a(58703),
    c = a(127181),
    u = a(50617),
    m = a(375708),
    o = a(413927);
function x(t) {
    let { transitionState: s, onClose: a } = t,
        i = (0, c.tn)("desktop");
    return (0, e.jsx)(n.a, {
        transitionState: s,
        onClose: a,
        title: m.intl.string(u.default.x07mpp),
        actions: [],
        children: (0, e.jsx)("ol", {
            className: o.V,
            children: i.map((t) =>
                (0, e.jsxs)(
                    "li",
                    {
                        className: o.S3,
                        children: [
                            (0, e.jsxs)(r.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                className: o.VO,
                                children: [
                                    (0, d.i$)(l()(t.date, "YYYY-MM-DD"), "LL"),
                                    (0, c.MZ)(t) ? ` \xb7 ${m.intl.string(u.default.vvxuUI)}` : null,
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

a.d(t, { A: () => g });
var n = a(627968),
    i = a(64700),
    s = a(158954),
    l = a(403362),
    r = a(767599),
    o = a(372694),
    c = a(455542),
    d = a(9086),
    u = a(475356),
    h = a(198625),
    m = a(125862),
    p = a(985018),
    _ = a(100669);
function g(e) {
    let { application: t } = e,
        a = i.useMemo(() => (t.directory_entry?.carousel_items ?? []).map(r.xb).filter(l.Vq) ?? [], [t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: _.Xb,
                children: [
                    (0, n.jsx)(o.A, { application: t, carouselItems: a }),
                    (0, n.jsx)(h.A, { application: t }),
                    (0, n.jsx)(c.A, { application: t }),
                    (0, n.jsx)(m.A, { application: t }),
                    (0, n.jsx)(d.A, { application: t }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: _.Q9,
                children: [
                    (0, n.jsx)("div", { className: _.yF }),
                    (0, n.jsx)(s.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: p.intl.string(p.t["mD+J/i"]),
                    }),
                    (0, n.jsx)(u.A, { application: t, view: "embedded" }),
                ],
            }),
        ],
    });
}

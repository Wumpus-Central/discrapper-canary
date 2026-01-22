n.d(t, { A: () => f });
var l = n(627968),
    a = n(64700),
    r = n(158954),
    i = n(403362),
    s = n(767599),
    c = n(372694),
    o = n(455542),
    d = n(9086),
    u = n(475356),
    p = n(198625),
    h = n(125862),
    m = n(985018),
    b = n(100669);
function f(e) {
    let { application: t } = e,
        n = a.useMemo(() => {
            var e, n, l;
            return null !=
                (e = (null != (n = null == (l = t.directory_entry) ? void 0 : l.carousel_items) ? n : [])
                    .map(s.xb)
                    .filter(i.Vq))
                ? e
                : [];
        }, [t]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: b.Xb,
                children: [
                    (0, l.jsx)(c.A, {
                        application: t,
                        carouselItems: n,
                    }),
                    (0, l.jsx)(p.A, { application: t }),
                    (0, l.jsx)(o.A, { application: t }),
                    (0, l.jsx)(h.A, { application: t }),
                    (0, l.jsx)(d.A, { application: t }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: b.Q9,
                children: [
                    (0, l.jsx)("div", { className: b.yF }),
                    (0, l.jsx)(r.DZT, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: m.intl.string(m.t["mD+J/i"]),
                    }),
                    (0, l.jsx)(u.A, {
                        application: t,
                        view: "embedded",
                    }),
                ],
            }),
        ],
    });
}

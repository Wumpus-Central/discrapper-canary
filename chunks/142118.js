n.d(t, { Z: () => c });
var r = n(54381),
    l = n(473749),
    i = n(481060),
    o = n(36361),
    a = n(598612),
    s = n(175993);
let c = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, useNavigationTitle: c, layout: u, init: d, useBadge: f, useNotice: p } = t,
        b = null == n ? void 0 : n(),
        y = null == f ? void 0 : f(),
        g = null == p ? void 0 : p();
    return (
        l.useEffect(() => {
            null == d || d();
        }, [d]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != b &&
                    (0, r.jsx)(a.Y, {
                        title: b,
                        badge: y,
                    }),
                (0, r.jsx)("div", {
                    "data-settings-category-key": null != n || null != c ? t.key : void 0,
                    "aria-hidden": !0,
                    style: { height: 1 },
                }),
                (0, r.jsxs)(i.Kqy, {
                    gap: 16,
                    children: [
                        null != g && (0, r.jsx)(s.Z, { notice: g }),
                        u.map((e) => (0, r.jsx)(o.Z, { node: e }, e.key)),
                    ],
                }),
            ],
        })
    );
});

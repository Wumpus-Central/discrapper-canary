n.d(t, { Z: () => c });
var r = n(54381),
    l = n(473749),
    i = n(481060),
    o = n(36361),
    a = n(598612),
    s = n(175993);
let c = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, useNavigationTitle: c, layout: u, init: d, useBadge: f, useNotice: b } = t,
        y = null == n ? void 0 : n(),
        p = null == f ? void 0 : f(),
        v = null == b ? void 0 : b();
    return (
        l.useEffect(() => {
            null == d || d();
        }, [d]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != y &&
                    (0, r.jsx)(a.Y, {
                        title: y,
                        badge: p,
                    }),
                (0, r.jsx)("div", {
                    "data-settings-category-key": null != n || null != c ? t.key : void 0,
                    "aria-hidden": !0,
                    style: { height: 1 },
                }),
                (0, r.jsxs)(i.Kqy, {
                    gap: 16,
                    children: [
                        null != v && (0, r.jsx)(s.Z, { notice: v }),
                        u.map((e) => (0, r.jsx)(o.Z, { node: e }, e.key)),
                    ],
                }),
            ],
        })
    );
});

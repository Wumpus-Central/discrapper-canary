n.d(t, { Z: () => u });
var r = n(54381),
    l = n(473749),
    i = n(481060),
    o = n(36361),
    a = n(598612),
    c = n(175993),
    s = n(476804);
let u = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, useNavigationTitle: u, layout: d, init: f, useBadge: b, useNotice: y } = t,
        p = null == n ? void 0 : n(),
        v = null == b ? void 0 : b(),
        m = null == y ? void 0 : y();
    return (
        l.useEffect(() => {
            null == f || f();
        }, [f]),
        (0, r.jsxs)(i.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(a.Y, {
                    title: p,
                    badge: v,
                }),
                (0, r.jsx)("div", {
                    "data-settings-category-key": null != n || null != u ? t.key : void 0,
                    "aria-hidden": !0,
                    style: { height: 1 },
                }),
                null != m &&
                    (0, r.jsx)("div", {
                        className: s.notice,
                        children: (0, r.jsx)(c.Z, { notice: m }),
                    }),
                d.map((e) => (0, r.jsx)(o.Z, { node: e }, e.key)),
            ],
        })
    );
});

n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(36361),
    s = n(598612),
    l = n(175993);
function c(e) {
    let { node: t } = e,
        { useTitle: n, useNavigationTitle: c, layout: u, init: d, useBadge: f, useNotice: p } = t,
        _ = null == n ? void 0 : n(),
        m = null == f ? void 0 : f(),
        h = null == p ? void 0 : p(),
        g = null != n || null != c;
    return (
        i.useEffect(() => {
            null == d || d();
        }, [d]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != _ &&
                    (0, r.jsx)(s.Y, {
                        title: _,
                        badge: m,
                    }),
                (0, r.jsx)("div", {
                    "data-settings-category-key": g ? t.key : void 0,
                    "aria-hidden": !0,
                    style: { height: 1 },
                }),
                (0, r.jsxs)(a.Kqy, {
                    gap: 16,
                    children: [
                        null != h && (0, r.jsx)(l.Z, { notice: h }),
                        u.map((e) => (0, r.jsx)(o.Z, { node: e }, e.key)),
                    ],
                }),
            ],
        })
    );
}
let u = i.memo(c);

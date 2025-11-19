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
        { useTitle: n, layout: u, init: d, useBadge: f, useNotice: b } = t,
        p = null == n ? void 0 : n(),
        y = null == f ? void 0 : f(),
        j = null == b ? void 0 : b();
    return (
        l.useEffect(() => {
            null == d || d();
        }, [d]),
        (0, r.jsxs)(i.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(a.Y, {
                    title: p,
                    badge: y,
                }),
                null != j &&
                    (0, r.jsx)("div", {
                        className: s.notice,
                        children: (0, r.jsx)(c.Z, { notice: j }),
                    }),
                u.map((e) => (0, r.jsx)(o.Z, { node: e }, e.key)),
            ],
        })
    );
});

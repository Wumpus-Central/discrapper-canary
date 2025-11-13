n.d(t, { Z: () => u });
var r = n(951288),
    l = n(647438),
    o = n(481060),
    i = n(36361),
    a = n(598612),
    c = n(175993),
    s = n(476804);
let u = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: u, init: d, useBadge: f, notice: b } = t,
        p = null == n ? void 0 : n(),
        y = null == f ? void 0 : f();
    return (
        l.useEffect(() => {
            null == d || d();
        }, [d]),
        (0, r.jsxs)(o.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(a.Y, {
                    title: p,
                    badge: y,
                }),
                null != b &&
                    (0, r.jsx)("div", {
                        className: s.notice,
                        children: (0, r.jsx)(c.Z, { notice: b }),
                    }),
                u.map((e) => (0, r.jsx)(i.Z, { node: e }, e.key)),
            ],
        })
    );
});

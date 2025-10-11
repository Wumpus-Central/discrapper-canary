n.d(t, { Z: () => s });
var r = n(951288),
    l = n(647438),
    o = n(481060),
    i = n(36361),
    a = n(598612);
let s = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: s, init: c } = t,
        u = null == n ? void 0 : n();
    return (
        l.useEffect(() => {
            null == c || c();
        }, [c]),
        (0, r.jsxs)(o.Kqy, {
            gap: 16,
            children: [(0, r.jsx)(a.Y, { title: u }), s.map((e) => (0, r.jsx)(i.Z, { node: e }, e.key))],
        })
    );
});

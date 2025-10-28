n.d(t, { Z: () => c });
var r = n(951288),
    o = n(647438),
    l = n(481060),
    i = n(36361),
    a = n(598612);
let c = o.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: c, init: s } = t,
        u = null == n ? void 0 : n();
    return (
        o.useEffect(() => {
            null == s || s();
        }, [s]),
        (0, r.jsxs)(l.Kqy, {
            gap: 16,
            children: [(0, r.jsx)(a.Y, { title: u }), c.map((e) => (0, r.jsx)(i.Z, { node: e }, e.key))],
        })
    );
});

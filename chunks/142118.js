n.d(t, { Z: () => c });
var r = n(951288),
    l = n(647438),
    o = n(481060),
    i = n(36361),
    a = n(598612);
let c = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: c, init: s, useBadge: u } = t,
        d = null == n ? void 0 : n(),
        f = null == u ? void 0 : u();
    return (
        l.useEffect(() => {
            null == s || s();
        }, [s]),
        (0, r.jsxs)(o.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(a.Y, {
                    title: d,
                    badge: f,
                }),
                c.map((e) => (0, r.jsx)(i.Z, { node: e }, e.key)),
            ],
        })
    );
});

n.d(t, { Z: () => a });
var r = n(951288),
    l = n(647438),
    o = n(481060),
    i = n(36361);
let a = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: a, init: s } = t,
        c = null == n ? void 0 : n();
    return (
        l.useEffect(() => {
            null == s || s();
        }, [s]),
        (0, r.jsxs)(o.Kqy, {
            gap: 24,
            children: [
                (0, r.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    children: c,
                }),
                a.map((e) => (0, r.jsx)(i.Z, { node: e }, e.key)),
            ],
        })
    );
});

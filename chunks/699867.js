n.d(t, { Z: () => o }), n(388685);
var a = n(54381),
    l = n(473749),
    i = n(793030),
    r = n(98460),
    s = n(87454);
function o(e) {
    let { items: t, onChange: n } = e,
        [o, c] = (0, r.Z)(),
        d = (0, l.useCallback)(
            (e) => {
                c(e), null == n || n(e);
            },
            [c, n],
        );
    return (0, a.jsx)(i.Kqy, {
        gap: 16,
        children: t
            .filter((e) => isNaN(Number(e)))
            .map((e) =>
                (0, a.jsx)(
                    s.Z,
                    {
                        content: e,
                        onChange: d,
                    },
                    e,
                ),
            ),
    });
}

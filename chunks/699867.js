n.d(t, { Z: () => o }), n(388685);
var a = n(951288),
    i = n(647438),
    r = n(793030),
    l = n(98460),
    s = n(87454);
function o(e) {
    let { items: t, onChange: n } = e,
        [o, c] = (0, l.Z)(),
        d = (0, i.useCallback)(
            (e) => {
                c(e), null == n || n(e);
            },
            [c, n],
        );
    return (0, a.jsx)(r.Kqy, {
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

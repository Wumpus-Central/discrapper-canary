n.d(t, { Z: () => s }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(793030),
    l = n(98460),
    o = n(87454);
function s(e) {
    let { items: t, onChange: n } = e,
        [s, c] = (0, l.Z)(),
        d = (0, r.useCallback)(
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
                    o.Z,
                    {
                        content: e,
                        onChange: d,
                    },
                    e,
                ),
            ),
    });
}

n.d(t, { Z: () => s }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(98460),
    o = n(87454);
function s(e) {
    let { items: t, onChange: n } = e,
        [s, l] = (0, a.Z)(),
        c = (0, i.useCallback)(
            (e) => {
                l(e), null == n || n(e);
            },
            [l, n],
        );
    return (0, r.jsx)(r.Fragment, {
        children: t
            .filter((e) => isNaN(Number(e)))
            .map((e) =>
                (0, r.jsx)(
                    o.Z,
                    {
                        content: e,
                        onChange: c,
                    },
                    e,
                ),
            ),
    });
}

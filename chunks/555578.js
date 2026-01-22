n.d(t, { G: () => a });
var r = n(530702),
    i = n(64700);
function a(e, t, n) {
    let a = (0, i.useMemo)(() => new (0, r.G)(), []),
        { children: s, items: o, collection: l } = e;
    return (0, i.useMemo)(
        () =>
            l ||
            t(
                a.build(
                    {
                        children: s,
                        items: o,
                    },
                    n,
                ),
            ),
        [a, s, o, l, n, t],
    );
}

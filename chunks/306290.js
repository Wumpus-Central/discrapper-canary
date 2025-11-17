n.d(t, { _: () => s });
var r = n(587157),
    i = n(944576),
    a = n(852058),
    o = n(473749);
function s(e) {
    let { selectionManager: t, collection: n, disabledKeys: s, ref: l, keyboardDelegate: c, layoutDelegate: u } = e,
        d = (0, a.X)({
            usage: "search",
            sensitivity: "base",
        }),
        f = t.disabledBehavior,
        _ = (0, o.useMemo)(
            () =>
                c ||
                new (0, i.d)({
                    collection: n,
                    disabledKeys: s,
                    disabledBehavior: f,
                    ref: l,
                    collator: d,
                    layoutDelegate: u,
                }),
            [c, u, n, s, l, d, f],
        ),
        { collectionProps: p } = (0, r.g)({
            ...e,
            ref: l,
            selectionManager: t,
            keyboardDelegate: _,
        });
    return { listProps: p };
}

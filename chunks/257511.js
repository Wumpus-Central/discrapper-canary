(n.d(t, { Z: () => s }), n(388685));
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(479099),
    a = n(33976);
function s(e) {
    let { appliedTags: t, setAppliedTags: n, wrap: i } = e,
        s =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, r.jsx)('div', {
        className: l()(a.tags, { [a.wrap]: i }),
        children: Array.from(t).map((e) =>
            (0, r.jsx)(
                o.Z,
                {
                    tag: e,
                    onRemove: s,
                    size: null == s ? o.Z.Sizes.SMALL : o.Z.Sizes.MEDIUM
                },
                e.id
            )
        )
    });
}

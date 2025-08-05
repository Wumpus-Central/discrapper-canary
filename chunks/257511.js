(n.d(t, { Z: () => l }), n(388685));
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(479099),
    s = n(33976);
function l(e) {
    let { appliedTags: t, setAppliedTags: n, wrap: i } = e,
        l =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, r.jsx)('div', {
        className: a()(s.tags, { [s.wrap]: i }),
        children: Array.from(t).map((e) =>
            (0, r.jsx)(
                o.Z,
                {
                    tag: e,
                    onRemove: l,
                    size: null == l ? o.Z.Sizes.SMALL : o.Z.Sizes.MEDIUM
                },
                e.id
            )
        )
    });
}

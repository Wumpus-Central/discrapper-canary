n.d(t, { Z: () => s }), n(388685);
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(479099),
    o = n(281052);
function s(e) {
    let { appliedTags: t, setAppliedTags: n, wrap: i } = e,
        s =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, r.jsx)('div', {
        className: l()(o.tags, { [o.wrap]: i }),
        children: Array.from(t).map((e) =>
            (0, r.jsx)(
                a.Z,
                {
                    tag: e,
                    onRemove: s,
                    size: null == s ? a.Z.Sizes.SMALL : a.Z.Sizes.MEDIUM
                },
                e.id
            )
        )
    });
}

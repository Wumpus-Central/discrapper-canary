n.d(t, { Z: () => s }), n(388685);
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    a = n(479099),
    o = n(488948);
function s(e) {
    let { appliedTags: t, setAppliedTags: n, wrap: r } = e,
        s =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, i.jsx)("div", {
        className: l()(o.tags, { [o.wrap]: r }),
        children: Array.from(t).map((e) =>
            (0, i.jsx)(
                a.Z,
                {
                    tag: e,
                    onRemove: s,
                    size: null == s ? a.Z.Sizes.SMALL : a.Z.Sizes.MEDIUM,
                },
                e.id,
            ),
        ),
    });
}

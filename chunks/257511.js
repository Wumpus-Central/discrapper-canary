n.d(t, { Z: () => a }), n(388685);
var r = n(255367);
n(73800);
var i = n(479099),
    l = n(33976);
function a(e) {
    let { appliedTags: t, setAppliedTags: n } = e,
        a =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, r.jsx)('div', {
        className: l.tags,
        children: Array.from(t).map((e) =>
            (0, r.jsx)(
                i.Z,
                {
                    tag: e,
                    onRemove: a,
                    size: null == a ? i.Z.Sizes.SMALL : i.Z.Sizes.MEDIUM
                },
                e.id
            )
        )
    });
}

n.d(t, { Z: () => o }), n(47120);
var r = n(200651);
n(192379);
var i = n(479099),
    l = n(33976);
function o(e) {
    let { appliedTags: t, setAppliedTags: n } = e,
        o =
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
                    onRemove: o,
                    size: null == o ? i.Z.Sizes.SMALL : i.Z.Sizes.MEDIUM
                },
                e.id
            )
        )
    });
}

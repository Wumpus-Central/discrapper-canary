n.d(t, { Z: () => r }), n(47120);
var i = n(200651);
n(192379);
var l = n(479099),
    a = n(112118);
function r(e) {
    let { appliedTags: t, setAppliedTags: n } = e,
        r =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, i.jsx)('div', {
        className: a.tags,
        children: Array.from(t).map((e) =>
            (0, i.jsx)(
                l.Z,
                {
                    tag: e,
                    onRemove: r,
                    size: null == r ? l.Z.Sizes.SMALL : l.Z.Sizes.MEDIUM
                },
                e.id
            )
        )
    });
}

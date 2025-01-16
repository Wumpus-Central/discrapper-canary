n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(479099),
    r = n(283728);
function a(e) {
    let { appliedTags: t, setAppliedTags: n } = e,
        a =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, i.jsx)('div', {
        className: r.tags,
        children: Array.from(t).map((e) =>
            (0, i.jsx)(
                l.Z,
                {
                    tag: e,
                    onRemove: a,
                    size: null == a ? l.Z.Sizes.SMALL : l.Z.Sizes.MEDIUM
                },
                e.id
            )
        )
    });
}

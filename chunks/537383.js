n.d(t, { Z: () => i });
var r = n(54381),
    l = n(473749),
    o = n(794433);
let i = l.forwardRef(function (e, t) {
    let {
        query: n,
        onQueryChange: l,
        onRemoveTag: i,
        onSelect: s,
        onSelectionChange: a,
        selectedSection: c,
        selectedRow: u,
        tags: d,
        sections: m,
        placeholder: x = "",
        focusAfterReady: h,
        isReady: b,
        "aria-labelledby": w,
        "aria-controls": f,
    } = e;
    return (0, r.jsx)(o.Z, {
        autoFocus: !0,
        maxHeight: 100,
        onQueryChange: l,
        onRemoveTag: i,
        selectedSection: c,
        selectedRow: u,
        onSelect: s,
        onSelectionChange: a,
        placeholder: 0 === d.length ? x : "",
        query: n,
        ref: t,
        size: o.Z.Sizes.MEDIUM,
        tags: d,
        sections: m,
        focusAfterReady: h,
        isReady: b,
        inputProps: {
            "aria-labelledby": w,
            "aria-controls": f,
            "aria-expanded": !0,
            "aria-activedescendant": "user-row-".concat(u),
        },
    });
});

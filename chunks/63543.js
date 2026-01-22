n.d(t, { A: () => s });
var r = n(627968),
    l = n(64700),
    o = n(39255);
let s = l.forwardRef(function (e, t) {
    let {
        query: n,
        onQueryChange: l,
        onRemoveTag: s,
        onSelect: i,
        onSelectionChange: a,
        selectedSection: c,
        selectedRow: u,
        tags: d,
        sections: x,
        placeholder: h = "",
        focusAfterReady: f,
        isReady: m,
        "aria-labelledby": b,
        "aria-controls": w,
    } = e;
    return (0, r.jsx)(o.A, {
        autoFocus: !0,
        maxHeight: 100,
        onQueryChange: l,
        onRemoveTag: s,
        selectedSection: c,
        selectedRow: u,
        onSelect: i,
        onSelectionChange: a,
        placeholder: 0 === d.length ? h : "",
        query: n,
        ref: t,
        size: o.A.Sizes.MEDIUM,
        tags: d,
        sections: x,
        focusAfterReady: f,
        isReady: m,
        inputProps: {
            "aria-labelledby": b,
            "aria-controls": w,
            "aria-expanded": !0,
            "aria-activedescendant": "user-row-".concat(u),
        },
    });
});

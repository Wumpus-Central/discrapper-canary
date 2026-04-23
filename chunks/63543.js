n.d(t, { A: () => o });
var l = n(627968),
    r = n(64700),
    s = n(39255);
let o = r.forwardRef(function (e, t) {
    let {
        query: n,
        onQueryChange: r,
        onRemoveTag: o,
        onSelect: i,
        onSelectionChange: a,
        selectedSection: c,
        selectedRow: u,
        tags: d,
        sections: x,
        placeholder: h = "",
        focusAfterReady: m,
        isReady: w,
        "aria-labelledby": g,
        "aria-controls": E,
    } = e;
    return (0, l.jsx)(s.A, {
        autoFocus: !0,
        maxHeight: 100,
        onQueryChange: r,
        onRemoveTag: o,
        selectedSection: c,
        selectedRow: u,
        onSelect: i,
        onSelectionChange: a,
        placeholder: 0 === d.length ? h : "",
        query: n,
        ref: t,
        size: s.A.Sizes.MEDIUM,
        tags: d,
        sections: x,
        focusAfterReady: m,
        isReady: w,
        inputProps: {
            "aria-labelledby": g,
            "aria-controls": E,
            "aria-expanded": !0,
            "aria-activedescendant": `user-row-${u}`,
        },
    });
});

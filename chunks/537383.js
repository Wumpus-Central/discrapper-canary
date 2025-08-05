n.d(t, { Z: () => o });
var r = n(255367),
    i = n(73800),
    a = n(794433);
let o = i.forwardRef(function (e, t) {
    let { query: n, onQueryChange: i, onRemoveTag: o, onSelect: s, onSelectionChange: l, selectedSection: c, selectedRow: u, tags: d, sections: f, placeholder: _ = '', focusAfterReady: p, isReady: h, 'aria-labelledby': m, 'aria-controls': g } = e;
    return (0, r.jsx)(a.Z, {
        autoFocus: !0,
        maxHeight: 100,
        onQueryChange: i,
        onRemoveTag: o,
        selectedSection: c,
        selectedRow: u,
        onSelect: s,
        onSelectionChange: l,
        placeholder: 0 === d.length ? _ : '',
        query: n,
        ref: t,
        size: a.Z.Sizes.MEDIUM,
        tags: d,
        sections: f,
        focusAfterReady: p,
        isReady: h,
        inputProps: {
            'aria-labelledby': m,
            'aria-controls': g,
            'aria-expanded': !0,
            'aria-activedescendant': 'user-row-'.concat(u)
        }
    });
});

n.d(t, { Z: () => a });
var r = n(255367),
    l = n(73800),
    i = n(794433);
let a = l.forwardRef(function (e, t) {
    let { query: n, onQueryChange: l, onRemoveTag: a, onSelect: s, onSelectionChange: o, selectedSection: c, selectedRow: d, tags: u, sections: m, placeholder: x = '', focusAfterReady: h, isReady: b, 'aria-labelledby': y, 'aria-controls': f } = e;
    return (0, r.jsx)(i.Z, {
        autoFocus: !0,
        maxHeight: 100,
        onQueryChange: l,
        onRemoveTag: a,
        selectedSection: c,
        selectedRow: d,
        onSelect: s,
        onSelectionChange: o,
        placeholder: 0 === u.length ? x : '',
        query: n,
        ref: t,
        size: i.Z.Sizes.MEDIUM,
        tags: u,
        sections: m,
        focusAfterReady: h,
        isReady: b,
        inputProps: {
            'aria-labelledby': y,
            'aria-controls': f,
            'aria-expanded': !0,
            'aria-activedescendant': 'user-row-'.concat(d)
        }
    });
});

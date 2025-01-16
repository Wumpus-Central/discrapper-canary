var l = n(200651),
    i = n(192379),
    r = n(461745),
    a = n(259597);
let s = i.forwardRef(function (e, t) {
    let { query: n, onQueryChange: i, onRemoveTag: s, onSelect: o, onSelectionChange: c, selectedSection: d, selectedRow: u, tags: m, sections: x, placeholder: h = '', focusAfterReady: g, isReady: b, 'aria-labelledby': T, 'aria-controls': E } = e;
    return (0, l.jsx)(r.ZP, {
        autoFocus: !0,
        className: a.searchBar,
        maxHeight: 100,
        onQueryChange: i,
        onRemoveTag: s,
        selectedSection: d,
        selectedRow: u,
        onSelect: o,
        onSelectionChange: c,
        placeholder: 0 === m.length ? h : '',
        query: n,
        ref: t,
        size: r.ZP.Sizes.MEDIUM,
        tags: m,
        sections: x,
        focusAfterReady: g,
        isReady: b,
        inputProps: {
            'aria-labelledby': T,
            'aria-controls': E,
            'aria-expanded': !0,
            'aria-activedescendant': 'user-row-'.concat(u)
        }
    });
});
t.Z = s;

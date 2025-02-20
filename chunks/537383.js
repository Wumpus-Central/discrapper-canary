r.d(t, { Z: () => s });
var n = r(200651),
    l = r(192379),
    i = r(461745),
    a = r(595510);
let s = l.forwardRef(function (e, t) {
    let { query: r, onQueryChange: l, onRemoveTag: s, onSelect: o, onSelectionChange: c, selectedSection: d, selectedRow: u, tags: m, sections: x, placeholder: h = '', focusAfterReady: b, isReady: y, 'aria-labelledby': f, 'aria-controls': p } = e;
    return (0, n.jsx)(i.ZP, {
        autoFocus: !0,
        className: a.searchBar,
        maxHeight: 100,
        onQueryChange: l,
        onRemoveTag: s,
        selectedSection: d,
        selectedRow: u,
        onSelect: o,
        onSelectionChange: c,
        placeholder: 0 === m.length ? h : '',
        query: r,
        ref: t,
        size: i.ZP.Sizes.MEDIUM,
        tags: m,
        sections: x,
        focusAfterReady: b,
        isReady: y,
        inputProps: {
            'aria-labelledby': f,
            'aria-controls': p,
            'aria-expanded': !0,
            'aria-activedescendant': 'user-row-'.concat(u)
        }
    });
});

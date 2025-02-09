n.d(t, { Z: () => a });
var l = n(200651),
    i = n(192379),
    s = n(461745),
    r = n(295470);
let a = i.forwardRef(function (e, t) {
    let { query: n, onQueryChange: i, onRemoveTag: a, onSelect: o, onSelectionChange: c, selectedSection: d, selectedRow: u, tags: x, sections: m, placeholder: h = '', focusAfterReady: g, isReady: E, 'aria-labelledby': b, 'aria-controls': T } = e;
    return (0, l.jsx)(s.ZP, {
        autoFocus: !0,
        className: r.searchBar,
        maxHeight: 100,
        onQueryChange: i,
        onRemoveTag: a,
        selectedSection: d,
        selectedRow: u,
        onSelect: o,
        onSelectionChange: c,
        placeholder: 0 === x.length ? h : '',
        query: n,
        ref: t,
        size: s.ZP.Sizes.MEDIUM,
        tags: x,
        sections: m,
        focusAfterReady: g,
        isReady: E,
        inputProps: {
            'aria-labelledby': b,
            'aria-controls': T,
            'aria-expanded': !0,
            'aria-activedescendant': 'user-row-'.concat(u)
        }
    });
});

(n.d(t, { Z: () => u }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(481060),
    i = n(501431),
    a = n(215023),
    s = n(388032),
    c = n(234209);
function u(e) {
    let { handleTransition: t, selectedTab: n } = e,
        { searchQuery: u, onSetSearchQuery: d } = (0, i.S)(),
        [p, g] = l.useState('');
    return (
        l.useEffect(() => {
            let e = setTimeout(() => {
                d(p);
            }, 250);
            return () => clearTimeout(e);
        }, [p, d]),
        l.useEffect(() => {
            g(u);
        }, [u]),
        (0, r.jsx)(o.E1j, {
            onFocus: () => {
                n !== a.AW.CATALOG && t(a.AW.CATALOG);
            },
            className: c.searchBar,
            onKeyDown: (e) => {
                'Enter' === e.key && d(p);
            },
            query: p,
            onChange: g,
            onClear: () => g(''),
            placeholder: s.intl.string(s.t['hIt/Nj'])
        })
    );
}

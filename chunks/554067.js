(r.d(t, { Z: () => u }), r(388685));
var n = r(255367),
    l = r(73800),
    o = r(481060),
    i = r(501431),
    a = r(215023),
    s = r(388032),
    c = r(234209);
function u(e) {
    let { handleTransition: t, selectedTab: r } = e,
        { searchQuery: u, onSetSearchQuery: d } = (0, i.S)(),
        [p, f] = l.useState('');
    return (
        l.useEffect(() => {
            let e = setTimeout(() => {
                d(p);
            }, 250);
            return () => clearTimeout(e);
        }, [p, d]),
        l.useEffect(() => {
            f(u);
        }, [u]),
        (0, n.jsx)(o.E1j, {
            onFocus: () => {
                r !== a.AW.CATALOG && t(a.AW.CATALOG);
            },
            className: c.searchBar,
            onKeyDown: (e) => {
                'Enter' === e.key && d(p);
            },
            query: p,
            onChange: f,
            onClear: () => f(''),
            placeholder: s.intl.string(s.t['hIt/Nj'])
        })
    );
}

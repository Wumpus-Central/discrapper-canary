(r.d(t, { Z: () => u }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(481060),
    o = r(501431),
    a = r(215023),
    s = r(388032),
    c = r(234209);
function u(e) {
    let { handleTransition: t, selectedTab: r } = e,
        { searchQuery: u, onSetSearchQuery: d } = (0, o.S)(),
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
        (0, n.jsx)(i.P3F, {
            ignoreKeyPress: !0,
            onClick: () => {
                r !== a.AW.CATALOG && t(a.AW.CATALOG);
            },
            children: (0, n.jsx)(i.E1j, {
                className: c.searchBar,
                onKeyDown: (e) => {
                    'Enter' === e.key && d(p);
                },
                query: p,
                onChange: f,
                onClear: () => f(''),
                placeholder: s.intl.string(s.t['hIt/Nj'])
            })
        })
    );
}

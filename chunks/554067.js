(n.d(t, { Z: () => u }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(481060),
    i = n(501431),
    a = n(215023),
    s = n(388032),
    c = n(234209);
function u(e) {
    let { handleTransition: t } = e,
        { searchQuery: n, onSetSearchQuery: u } = (0, i.S)(),
        [d, p] = l.useState('');
    return (
        l.useEffect(() => {
            let e = setTimeout(() => {
                u(d);
            }, 1000);
            return () => clearTimeout(e);
        }, [d, u]),
        l.useEffect(() => {
            p(n);
        }, [n]),
        (0, r.jsx)(o.E1j, {
            onFocus: () => t(a.AW.CATALOG),
            className: c.searchBar,
            query: d,
            onChange: p,
            onClear: () => p(''),
            placeholder: s.intl.string(s.t['hIt/Nj'])
        })
    );
}

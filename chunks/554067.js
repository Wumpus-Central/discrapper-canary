(n.d(t, { Z: () => u }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(392711),
    o = n(481060),
    a = n(501431),
    s = n(388032),
    c = n(234209);
function u() {
    let [e, t] = l.useState(''),
        [n, u] = l.useState(''),
        { searchQuery: d, onSetSearchQuery: p } = (0, a.S0)(),
        g = l.useMemo(
            () =>
                (0, i.debounce)((e) => {
                    (p(e), u(e));
                }, 250),
            [p]
        );
    return (
        l.useEffect(() => {
            if ('' === d && '' !== n) {
                (t(''), u(''));
                return;
            }
            e !== d && g(e);
        }, [e, d, n, g]),
        l.useEffect(
            () => () => {
                g.cancel();
            },
            [g]
        ),
        (0, r.jsx)(o.E1j, {
            className: c.searchBar,
            query: e,
            onChange: t,
            onClear: () => t(''),
            placeholder: s.intl.string(s.t['hIt/Nj'])
        })
    );
}

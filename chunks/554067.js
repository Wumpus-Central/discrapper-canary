(n.d(t, { Z: () => d }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(392711),
    o = n(481060),
    a = n(501431),
    s = n(149705),
    c = n(388032),
    u = n(234209);
function d() {
    let [e, t] = l.useState(''),
        [n, d] = l.useState(''),
        { searchQuery: p, onSetSearchQuery: f, setQueryPageOffset: g } = (0, a.S)(),
        { clear: h } = (0, s.a)(),
        b = l.useMemo(
            () =>
                (0, i.debounce)((e) => {
                    (h(), g(0), f(e), d(e));
                }, 500),
            [f, h, g]
        );
    return (
        l.useEffect(() => {
            if ('' === p && '' !== n) {
                (t(''), d(''));
                return;
            }
            e !== p && b(e);
        }, [e, p, n, b]),
        l.useEffect(
            () => () => {
                b.cancel();
            },
            [b]
        ),
        (0, r.jsx)(o.E1j, {
            className: u.searchBar,
            query: e,
            onChange: t,
            onClear: () => t(''),
            placeholder: c.intl.string(c.t['hIt/Nj'])
        })
    );
}

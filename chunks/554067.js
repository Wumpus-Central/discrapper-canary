(n.d(t, { Z: () => d }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(392711),
    i = n(481060),
    a = n(501431),
    s = n(149705),
    c = n(388032),
    u = n(234209);
function d() {
    let [e, t] = l.useState(''),
        [n, d] = l.useState(''),
        { searchQuery: p, onSetSearchQuery: g, setQueryPageOffset: f } = (0, a.S)(),
        { clear: h } = (0, s.a)(),
        b = l.useMemo(
            () =>
                (0, o.debounce)((e) => {
                    (h(), f(0), g(e), d(e));
                }, 500),
            [g, h, f]
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
        (0, r.jsx)(i.E1j, {
            className: u.searchBar,
            query: e,
            onChange: t,
            onClear: () => t(''),
            placeholder: c.intl.string(c.t['hIt/Nj'])
        })
    );
}

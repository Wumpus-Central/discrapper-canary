n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var l = n(481060),
    o = n(501431),
    i = n(215023),
    a = n(388032),
    s = n(234209);
function c(e) {
    let { handleTransition: t } = e,
        { searchQuery: n, onSetSearchQuery: c } = (0, o.S)();
    return (0, r.jsx)(l.E1j, {
        onFocus: () => t(i.AW.CATALOG),
        className: s.searchBar,
        query: n,
        onChange: c,
        onClear: () => c(''),
        placeholder: a.intl.string(a.t['hIt/Nj'])
    });
}

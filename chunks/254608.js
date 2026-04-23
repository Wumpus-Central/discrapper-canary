a.d(t, { l: () => _ });
var s = a(627968),
    n = a(64700),
    l = a(892547),
    r = a(457417),
    i = a(985018);
let _ = () => {
    let { searchText: e, updateSearchText: t } = (0, r.Vw)(),
        a = n.useRef(null);
    return (
        (0, n.useEffect)(() => {
            null !== a.current && "" === e && a.current.focus();
        }, [e, a]),
        (0, s.jsx)(l.I, {
            ref: a,
            query: e,
            onChange: (e) => {
                t(e);
            },
            onClear: () => {
                t("");
            },
            placeholder: i.intl.string(i.t["5h0QOP"]),
            "aria-label": i.intl.string(i.t["5h0QOP"]),
            autoFocus: !0,
        })
    );
};

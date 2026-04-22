a.d(t, { l: () => o });
var i = a(627968),
    r = a(64700),
    l = a(892547),
    n = a(457417),
    s = a(985018);
let o = () => {
    let { searchText: e, updateSearchText: t } = (0, n.Vw)(),
        a = r.useRef(null);
    return (
        (0, r.useEffect)(() => {
            null !== a.current && "" === e && a.current.focus();
        }, [e, a]),
        (0, i.jsx)(l.I, {
            ref: a,
            query: e,
            onChange: (e) => {
                t(e);
            },
            onClear: () => {
                t("");
            },
            placeholder: s.intl.string(s.t["5h0QOP"]),
            "aria-label": s.intl.string(s.t["5h0QOP"]),
            autoFocus: !0,
        })
    );
};

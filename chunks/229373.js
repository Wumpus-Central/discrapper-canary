n.d(t, { K: () => i });
var r = n(54381),
    a = n(473749),
    o = n(481060),
    l = n(135102),
    s = n(388032);
let i = () => {
    let { searchText: e, updateSearchText: t } = (0, l.C$)(),
        n = a.useRef(null);
    return (
        (0, a.useEffect)(() => {
            null !== n.current && "" === e && n.current.focus();
        }, [e, n]),
        (0, r.jsx)(o.E1j, {
            ref: n,
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

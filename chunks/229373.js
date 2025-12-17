n.d(t, { K: () => s });
var r = n(54381),
    a = n(473749),
    o = n(481060),
    l = n(135102),
    c = n(388032);
let s = () => {
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
            placeholder: c.intl.string(c.t["5h0QOP"]),
            "aria-label": c.intl.string(c.t["5h0QOP"]),
            autoFocus: !0,
        })
    );
};

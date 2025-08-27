n.d(t, { K: () => i });
var a = n(951288),
    o = n(647438),
    r = n(481060),
    s = n(135102),
    l = n(388032);
let i = () => {
    let { searchText: e, updateSearchText: t } = (0, s.C$)(),
        n = o.useRef(null);
    return (
        (0, o.useEffect)(() => {
            null !== n.current && "" === e && n.current.focus();
        }, [e, n]),
        (0, a.jsx)(r.E1j, {
            ref: n,
            query: e,
            onChange: (e) => {
                t(e);
            },
            onClear: () => {
                t("");
            },
            placeholder: l.intl.string(l.t["5h0QOD"]),
            "aria-label": l.intl.string(l.t["5h0QOD"]),
            autoFocus: !0,
        })
    );
};

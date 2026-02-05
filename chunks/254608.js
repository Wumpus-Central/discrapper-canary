n.d(t, { l: () => i });
var a = n(627968),
    l = n(64700),
    r = n(397927),
    s = n(457417),
    o = n(985018);
let i = () => {
    let { searchText: e, updateSearchText: t } = (0, s.Vw)(),
        n = l.useRef(null);
    return (
        (0, l.useEffect)(() => {
            null !== n.current && "" === e && n.current.focus();
        }, [e, n]),
        (0, a.jsx)(r.IWV, {
            ref: n,
            query: e,
            onChange: (e) => {
                t(e);
            },
            onClear: () => {
                t("");
            },
            placeholder: o.intl.string(o.t["5h0QOP"]),
            "aria-label": o.intl.string(o.t["5h0QOP"]),
            autoFocus: !0,
        })
    );
};

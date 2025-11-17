n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    a = n(374470),
    o = n(442837),
    s = n(481060),
    l = n(663389),
    c = n(996733),
    u = n(388032);
function d() {
    let e = c.Z.useField("query"),
        t = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), c.Z.setState({ isActive: e });
        }, []),
        n = i.useCallback(() => {
            c.Z.setState({
                query: "",
                isActive: !1,
            });
        }, []),
        d = i.useRef(null),
        f = (0, o.e7)([l.Z], () => l.Z.getSection());
    i.useEffect(() => {
        let e = (e) => {
            var t;
            let n = d.current;
            (null == (t = (0, a.uB)(e)) ? void 0 : t.activeElement) === document.body && (null == n || n.focus());
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [f]);
    let _ = i.useCallback((e) => {
        c.Z.setState({ query: e });
    }, []);
    return (0, r.jsx)("div", {
        style: { marginBottom: "8px" },
        children: (0, r.jsx)(s.E1j, {
            ref: d,
            query: e,
            onClear: n,
            onChange: _,
            placeholder: u.intl.string(u.t["5h0QOP"]),
            inputProps: {
                "aria-label": u.intl.string(u.t.pk9BWW),
                "aria-expanded": !0,
                onFocus: (e) => t(!0, e),
                onBlur: (e) => t(!1, e),
            },
        }),
    });
}

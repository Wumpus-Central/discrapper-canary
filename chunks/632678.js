n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(621466),
    s = n(311907),
    o = n(397927),
    l = n(628965),
    c = n(152056),
    u = n(985018);
function d() {
    let e = c.A.useField("query"),
        t = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), c.A.setState({ isActive: e });
        }, []),
        n = i.useCallback(() => {
            c.A.setState({
                query: "",
                isActive: !1,
            });
        }, []),
        d = i.useRef(null),
        f = (0, s.bG)([l.A], () => l.A.getSection());
    i.useEffect(() => {
        let e = (e) => {
            var t;
            let n = d.current;
            (null == (t = (0, a.BF)(e)) ? void 0 : t.activeElement) === document.body && (null == n || n.focus());
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [f]);
    let p = i.useCallback((e) => {
        c.A.setState({ query: e });
    }, []);
    return (0, r.jsx)("div", {
        style: { marginBottom: "8px" },
        children: (0, r.jsx)(o.IWV, {
            ref: d,
            query: e,
            onClear: n,
            onChange: p,
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

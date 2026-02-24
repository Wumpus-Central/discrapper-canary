n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    r = n(621466),
    l = n(311907),
    o = n(397927),
    a = n(324593),
    c = n(187559),
    d = n(628965),
    u = n(152056),
    h = n(985018);
function _() {
    let e = u.A.useField("query"),
        t = s.useCallback((e, t) => {
            t.stopPropagation(),
                t.preventDefault(),
                e && !a.A.isSessionActive() && (a.A.initialize(), (0, c.f1)()),
                u.A.setState({ isActive: e });
        }, []),
        n = s.useCallback(() => {
            a.A.terminate(), u.A.setState({ query: "", isActive: !1 });
        }, []),
        _ = s.useRef(null),
        S = (0, l.bG)([d.A], () => d.A.getSection());
    s.useEffect(() => {
        let e = (e) => {
            let t = _.current;
            (0, r.BF)(e)?.activeElement === document.body && t?.focus();
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [S]);
    let p = s.useCallback((e) => {
        u.A.setState({ query: e });
    }, []);
    return (0, i.jsx)("div", {
        style: { marginBottom: "8px" },
        children: (0, i.jsx)(o.IWV, {
            ref: _,
            query: e,
            onClear: n,
            onChange: p,
            placeholder: h.intl.string(h.t["5h0QOP"]),
            inputProps: {
                "aria-label": h.intl.string(h.t.pk9BWW),
                "aria-expanded": !0,
                onFocus: (e) => t(!0, e),
                onBlur: (e) => t(!1, e),
            },
        }),
    });
}

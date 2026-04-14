n.d(t, { A: () => m });
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
function m() {
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
        m = s.useRef(null),
        p = (0, l.bG)([d.A], () => d.A.getSection());
    s.useEffect(() => {
        let e = (e) => {
            let t = m.current;
            (0, r.BF)(e)?.activeElement === document.body && t?.focus();
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [p]);
    let E = s.useCallback((e) => {
        u.A.setState({ query: e }), a.A.maybeTrackQueryEntered();
    }, []);
    return (
        s.useEffect(
            () => () => {
                a.A.terminate();
            },
            [],
        ),
        (0, i.jsx)("div", {
            style: { marginBottom: "8px" },
            children: (0, i.jsx)(o.IWV, {
                ref: m,
                query: e,
                onClear: n,
                onChange: E,
                onFocus: (e) => t(!0, e),
                onBlur: (e) => t(!1, e),
                placeholder: h.intl.string(h.t["5h0QOP"]),
                inputProps: { "aria-label": h.intl.string(h.t.pk9BWW), "aria-expanded": !0 },
            }),
        })
    );
}

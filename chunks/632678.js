"use strict";
n.d(t, { A: () => c });
var s = n(627968),
    i = n(64700),
    r = n(621466),
    l = n(311907),
    a = n(397927),
    o = n(628965),
    d = n(152056),
    h = n(985018);
function c() {
    let e = d.A.useField("query"),
        t = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), d.A.setState({ isActive: e });
        }, []),
        n = i.useCallback(() => {
            d.A.setState({ query: "", isActive: !1 });
        }, []),
        c = i.useRef(null),
        u = (0, l.bG)([o.A], () => o.A.getSection());
    i.useEffect(() => {
        let e = (e) => {
            let t = c.current;
            (0, r.BF)(e)?.activeElement === document.body && t?.focus();
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [u]);
    let g = i.useCallback((e) => {
        d.A.setState({ query: e });
    }, []);
    return (0, s.jsx)("div", {
        style: { marginBottom: "8px" },
        children: (0, s.jsx)(a.IWV, {
            ref: c,
            query: e,
            onClear: n,
            onChange: g,
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

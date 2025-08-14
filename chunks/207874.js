n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    s = n(663389),
    c = n(5967),
    a = n(996733),
    u = n(388032);
function d(e) {
    let { style: t } = e,
        n = (0, a.Z7)(),
        d = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, a.QH)(e);
        }, []),
        f = i.useCallback(() => {
            (0, a.QH)(!1), (0, a.yN)("");
        }, []),
        p = i.useRef(null),
        b = (0, l.e7)([s.Z], () => s.Z.getSection());
    return (
        i.useEffect(() => {
            let e = (e) => {
                var t;
                let n = p.current;
                (null == (t = (0, c.uB)(e)) ? void 0 : t.activeElement) === document.body && (null == n || n.focus());
            };
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
        }, [b]),
        (0, r.jsx)("div", {
            style: { marginBottom: "8px" },
            children: (0, r.jsx)(o.E1j, {
                ref: p,
                query: n,
                onClear: f,
                onChange: a.yN,
                placeholder: u.intl.string(u.t["5h0QOD"]),
                className: t,
                inputProps: {
                    "aria-label": u.intl.string(u.t.pk9BWV),
                    "aria-expanded": !0,
                    onFocus: (e) => d(!0, e),
                    onBlur: (e) => d(!1, e),
                },
            }),
        })
    );
}

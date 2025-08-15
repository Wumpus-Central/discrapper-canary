n.d(t, { Z: () => d });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(481060),
    o = n(663389),
    a = n(5967),
    u = n(996733),
    c = n(388032);
function d(e) {
    let { style: t } = e,
        n = (0, u.Z7)(),
        d = r.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, u.QH)(e);
        }, []),
        h = r.useCallback(() => {
            (0, u.QH)(!1), (0, u.yN)("");
        }, []),
        p = r.useRef(null),
        g = (0, s.e7)([o.Z], () => o.Z.getSection());
    return (
        r.useEffect(() => {
            let e = (e) => {
                var t;
                let n = p.current;
                (null == (t = (0, a.uB)(e)) ? void 0 : t.activeElement) === document.body && (null == n || n.focus());
            };
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
        }, [g]),
        (0, i.jsx)("div", {
            style: { marginBottom: "8px" },
            children: (0, i.jsx)(l.E1j, {
                ref: p,
                query: n,
                onClear: h,
                onChange: u.yN,
                placeholder: c.intl.string(c.t["5h0QOD"]),
                className: t,
                inputProps: {
                    "aria-label": c.intl.string(c.t.pk9BWV),
                    "aria-expanded": !0,
                    onFocus: (e) => d(!0, e),
                    onBlur: (e) => d(!1, e),
                },
            }),
        })
    );
}

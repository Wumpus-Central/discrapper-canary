n.d(t, { Z: () => d });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(663389),
    l = n(5967),
    c = n(996733),
    u = n(388032);
function d() {
    let e = (0, c.Z7)(),
        t = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, c.QH)(e);
        }, []),
        n = i.useCallback(() => {
            (0, c.QH)(!1), (0, c.yN)("");
        }, []),
        d = i.useRef(null),
        f = (0, a.e7)([s.Z], () => s.Z.getSection());
    return (
        i.useEffect(() => {
            let e = (e) => {
                var t;
                let n = d.current;
                (null == (t = (0, l.uB)(e)) ? void 0 : t.activeElement) === document.body && (null == n || n.focus());
            };
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
        }, [f]),
        (0, r.jsx)("div", {
            style: { marginBottom: "8px" },
            children: (0, r.jsx)(o.E1j, {
                ref: d,
                query: e,
                onClear: n,
                onChange: c.yN,
                placeholder: u.intl.string(u.t["5h0QOD"]),
                inputProps: {
                    "aria-label": u.intl.string(u.t.pk9BWV),
                    "aria-expanded": !0,
                    onFocus: (e) => t(!0, e),
                    onBlur: (e) => t(!1, e),
                },
            }),
        })
    );
}

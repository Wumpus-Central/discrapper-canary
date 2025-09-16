n.d(t, { Z: () => d });
var r = n(951288),
    i = n(647438),
    a = n(374470),
    o = n(442837),
    s = n(481060),
    l = n(663389),
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
        f = (0, o.e7)([l.Z], () => l.Z.getSection());
    return (
        i.useEffect(() => {
            let e = (e) => {
                var t;
                let n = d.current;
                (null == (t = (0, a.uB)(e)) ? void 0 : t.activeElement) === document.body && (null == n || n.focus());
            };
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
        }, [f]),
        (0, r.jsx)("div", {
            style: { marginBottom: "8px" },
            children: (0, r.jsx)(s.E1j, {
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

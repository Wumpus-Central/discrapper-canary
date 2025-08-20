n.d(t, { Z: () => d });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(663389),
    l = n(5967),
    c = n(996733),
    u = n(388032);
function d(e) {
    let { style: t } = e,
        n = (0, c.Z7)(),
        d = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, c.QH)(e);
        }, []),
        f = i.useCallback(() => {
            (0, c.QH)(!1), (0, c.yN)("");
        }, []),
        _ = i.useRef(null),
        p = (0, a.e7)([s.Z], () => s.Z.getSection());
    return (
        i.useEffect(() => {
            let e = (e) => {
                var t;
                let n = _.current;
                (null == (t = (0, l.uB)(e)) ? void 0 : t.activeElement) === document.body && (null == n || n.focus());
            };
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
        }, [p]),
        (0, r.jsx)("div", {
            style: { marginBottom: "8px" },
            children: (0, r.jsx)(o.E1j, {
                ref: _,
                query: n,
                onClear: f,
                onChange: c.yN,
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

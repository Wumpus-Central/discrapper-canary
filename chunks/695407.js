n.d(t, { n: () => l });
var r = n(54381),
    i = n(473749),
    a = n(670596),
    o = n(481060),
    s = n(388032);
let l = i.forwardRef(function (e, t) {
    let {
            query: n,
            onChange: l,
            disabled: c = !1,
            placeholder: u = s.intl.string(s.t["5h0QOP"]),
            "aria-label": d,
            onInteraction: f,
        } = e,
        p = i.useRef(null);
    i.useImperativeHandle(
        t,
        () => ({
            focus: () => {
                var e;
                return null == (e = p.current) ? void 0 : e.focus();
            },
            blur: () => {
                var e;
                return null == (e = p.current) ? void 0 : e.blur();
            },
            activate: () => !1,
        }),
        [],
    );
    let _ = (e) => {
            l(e), null == f || f(a.U.SEARCH);
        },
        m = () => {
            l(""), null == f || f(a.U.SEARCH);
        };
    return (0, r.jsx)(o.E1j, {
        size: "sm",
        disabled: c,
        onChange: _,
        onClear: m,
        query: n,
        placeholder: u,
        autoFocus: !1,
        "aria-label": d,
        ref: p,
    });
});

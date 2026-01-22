n.d(t, { V: () => l });
var r = n(627968),
    i = n(64700),
    a = n(900283),
    s = n(397927),
    o = n(985018);
let l = i.forwardRef(function (e, t) {
    let {
            query: n,
            onChange: l,
            disabled: c = !1,
            placeholder: u = o.intl.string(o.t["5h0QOP"]),
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
            l(e), null == f || f(a.Q.SEARCH);
        },
        h = () => {
            l(""), null == f || f(a.Q.SEARCH);
        };
    return (0, r.jsx)(s.IWV, {
        size: "sm",
        disabled: c,
        onChange: _,
        onClear: h,
        query: n,
        placeholder: u,
        autoFocus: !1,
        "aria-label": d,
        ref: p,
    });
});

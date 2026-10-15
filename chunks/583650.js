n.d(t, { V: () => o });
var i = n(477900),
    r = n(582128),
    a = n(683438),
    s = n(900283),
    l = n(105292);
function o(e) {
    let { ref: t, ...n } = e,
        {
            query: o,
            onChange: d,
            disabled: c = !1,
            placeholder: u = l.intl.string(l.t["5h0QOP"]),
            "aria-label": _,
            onInteraction: E,
            onKeyDown: A,
        } = n,
        h = r.useRef(null);
    return (
        r.useImperativeHandle(
            t,
            () => ({ focus: () => h.current?.focus(), blur: () => h.current?.blur(), activate: () => !1 }),
            [],
        ),
        (0, i.jsx)(a.I, {
            size: "sm",
            disabled: c,
            onChange: function (e) {
                (d(e), E?.(s.Q.SEARCH));
            },
            onClear: function () {
                (d(""), E?.(s.Q.SEARCH));
            },
            onKeyDown: A,
            query: o,
            placeholder: u,
            autoFocus: !1,
            "aria-label": _,
            ref: h,
            focusProps: { offset: { top: 2, bottom: 2, left: 4, right: 4 } },
        })
    );
}

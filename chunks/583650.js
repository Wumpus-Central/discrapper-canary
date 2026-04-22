"use strict";
n.d(t, { V: () => l });
var r = n(627968),
    i = n(64700),
    s = n(900283),
    a = n(892547),
    o = n(985018);
let l = i.forwardRef(function (e, t) {
    let {
            query: n,
            onChange: l,
            disabled: u = !1,
            placeholder: d = o.intl.string(o.t["5h0QOP"]),
            "aria-label": c,
            onInteraction: _,
        } = e,
        f = i.useRef(null);
    return (
        i.useImperativeHandle(
            t,
            () => ({ focus: () => f.current?.focus(), blur: () => f.current?.blur(), activate: () => !1 }),
            [],
        ),
        (0, r.jsx)(a.I, {
            size: "sm",
            disabled: u,
            onChange: (e) => {
                l(e), _?.(s.Q.SEARCH);
            },
            onClear: () => {
                l(""), _?.(s.Q.SEARCH);
            },
            query: n,
            placeholder: d,
            autoFocus: !1,
            "aria-label": c,
            ref: f,
        })
    );
});

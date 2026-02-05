"use strict";
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
            disabled: u = !1,
            placeholder: c = o.intl.string(o.t["5h0QOP"]),
            "aria-label": d,
            onInteraction: _,
        } = e,
        f = i.useRef(null);
    i.useImperativeHandle(
        t,
        () => ({ focus: () => f.current?.focus(), blur: () => f.current?.blur(), activate: () => !1 }),
        [],
    );
    let p = (e) => {
            l(e), _?.(a.Q.SEARCH);
        },
        h = () => {
            l(""), _?.(a.Q.SEARCH);
        };
    return (0, r.jsx)(s.IWV, {
        size: "sm",
        disabled: u,
        onChange: p,
        onClear: h,
        query: n,
        placeholder: c,
        autoFocus: !1,
        "aria-label": d,
        ref: f,
    });
});

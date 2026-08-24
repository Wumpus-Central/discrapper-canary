"use strict";
n.d(t, { V: () => o });
var i = n(477900),
    r = n(582128),
    a = n(683438),
    s = n(900283),
    l = n(375708);
let o = r.forwardRef(function (e, t) {
    let {
            query: n,
            onChange: o,
            disabled: d = !1,
            placeholder: c = l.intl.string(l.t["5h0QOP"]),
            "aria-label": u,
            onInteraction: _,
        } = e,
        E = r.useRef(null);
    return (
        r.useImperativeHandle(
            t,
            () => ({ focus: () => E.current?.focus(), blur: () => E.current?.blur(), activate: () => !1 }),
            [],
        ),
        (0, i.jsx)(a.I, {
            size: "sm",
            disabled: d,
            onChange: function (e) {
                o(e), _?.(s.Q.SEARCH);
            },
            onClear: function () {
                o(""), _?.(s.Q.SEARCH);
            },
            query: n,
            placeholder: c,
            autoFocus: !1,
            "aria-label": u,
            ref: E,
            focusProps: { offset: { top: 2, bottom: 2, left: 4, right: 4 } },
        })
    );
});

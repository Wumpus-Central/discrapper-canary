"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(73392),
    u = n(291594),
    c = n(959);
function d(e) {
    let { user: t, text: n, channel: a, textClassName: d, onPopoutClosed: _, enableDisplayNameStyles: f = !1 } = e,
        p = i.useMemo(() => [t], [t]),
        h = i.useRef(null),
        m = (0, l.a)({ displayNameStyles: t?.displayNameStyles });
    return (0, r.jsx)(c.A, {
        targetElementRef: h,
        participants: p,
        channel: a,
        onPopoutClosed: _,
        children: (e) =>
            (0, r.jsx)(u.A, {
                ...e,
                tag: "span",
                children: (0, r.jsx)(o.EYj, {
                    ref: h,
                    className: f ? s()(d, m) : d,
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    lineClamp: 1,
                    scaleFontToUserSetting: !0,
                    children: n,
                }),
            }),
    });
}

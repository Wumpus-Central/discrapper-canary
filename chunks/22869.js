"use strict";
n.d(t, { A: () => d });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(834730),
    o = n(252545),
    c = n(291594),
    u = n(959);
function d(e) {
    let { user: t, text: n, channel: s, textClassName: d, onPopoutClosed: h, enableDisplayNameStyles: m = !1 } = e,
        p = i.useMemo(() => [t], [t]),
        f = i.useRef(null),
        g = (0, o.a)({ displayNameStyles: t?.displayNameStyles });
    return (0, l.jsx)(u.A, {
        targetElementRef: f,
        participants: p,
        channel: s,
        onPopoutClosed: h,
        children: (e) =>
            (0, l.jsx)(c.A, {
                ...e,
                tag: "span",
                children: (0, l.jsx)(a.E, {
                    ref: f,
                    className: m ? r()(d, g) : d,
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    lineClamp: 1,
                    scaleFontToUserSetting: !0,
                    children: n,
                }),
            }),
    });
}

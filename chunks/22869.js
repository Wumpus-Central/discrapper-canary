"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(834730),
    o = n(73392),
    c = n(291594),
    u = n(959);
function d(e) {
    let { user: t, text: n, channel: s, textClassName: d, onPopoutClosed: h, enableDisplayNameStyles: m = !1 } = e,
        p = l.useMemo(() => [t], [t]),
        f = l.useRef(null),
        g = (0, o.a)({ displayNameStyles: t?.displayNameStyles });
    return (0, i.jsx)(u.A, {
        targetElementRef: f,
        participants: p,
        channel: s,
        onPopoutClosed: h,
        children: (e) =>
            (0, i.jsx)(c.A, {
                ...e,
                tag: "span",
                children: (0, i.jsx)(a.E, {
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

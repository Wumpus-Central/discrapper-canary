"use strict";
n.d(t, { A: () => u });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(834730),
    o = n(73392),
    d = n(291594),
    c = n(959);
function u(e) {
    let { user: t, text: n, channel: a, textClassName: u, onPopoutClosed: _, enableDisplayNameStyles: E = !1 } = e,
        A = r.useMemo(() => [t], [t]),
        h = r.useRef(null),
        I = (0, o.a)({ displayNameStyles: t?.displayNameStyles });
    return (0, i.jsx)(c.A, {
        targetElementRef: h,
        participants: A,
        channel: a,
        onPopoutClosed: _,
        children: (e) =>
            (0, i.jsx)(d.A, {
                ...e,
                tag: "span",
                children: (0, i.jsx)(l.E, {
                    ref: h,
                    className: E ? s()(u, I) : u,
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    lineClamp: 1,
                    scaleFontToUserSetting: !0,
                    children: n,
                }),
            }),
    });
}

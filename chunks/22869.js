n.d(t, { A: () => u });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(834730),
    o = n(73392),
    c = n(291594),
    d = n(959);
function u(e) {
    let { user: t, text: n, channel: r, textClassName: u, onPopoutClosed: m, enableDisplayNameStyles: p = !1 } = e,
        h = a.useMemo(() => [t], [t]),
        x = a.useRef(null),
        f = (0, o.a)({ displayNameStyles: t?.displayNameStyles });
    return (0, l.jsx)(d.A, {
        targetElementRef: x,
        participants: h,
        channel: r,
        onPopoutClosed: m,
        children: (e) =>
            (0, l.jsx)(c.A, {
                ...e,
                tag: "span",
                children: (0, l.jsx)(i.E, {
                    ref: x,
                    className: p ? s()(u, f) : u,
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    lineClamp: 1,
                    scaleFontToUserSetting: !0,
                    children: n,
                }),
            }),
    });
}

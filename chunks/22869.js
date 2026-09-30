n.d(t, { A: () => d });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(834730),
    o = n(73392),
    u = n(291594),
    c = n(959);
function d(e) {
    let { user: t, text: n, channel: s, textClassName: d, onPopoutClosed: m, enableDisplayNameStyles: h = !1 } = e,
        p = i.useMemo(() => [t], [t]),
        f = i.useRef(null),
        g = (0, o.a)({ displayNameStyles: t?.displayNameStyles });
    return (0, l.jsx)(c.A, {
        targetElementRef: f,
        participants: p,
        channel: s,
        onPopoutClosed: m,
        children: (e) =>
            (0, l.jsx)(u.A, {
                ...e,
                tag: "span",
                children: (0, l.jsx)(a.E, {
                    ref: f,
                    className: h ? r()(d, g) : d,
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    lineClamp: 1,
                    scaleFontToUserSetting: !0,
                    children: n,
                }),
            }),
    });
}

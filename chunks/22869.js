n.d(t, { A: () => d });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    i = n(834730),
    c = n(73392),
    o = n(291594),
    u = n(959);
function d(e) {
    let { user: t, text: n, channel: a, textClassName: d, onPopoutClosed: m, enableDisplayNameStyles: h = !1 } = e,
        x = r.useMemo(() => [t], [t]),
        g = r.useRef(null),
        f = (0, c.a)({ displayNameStyles: t?.displayNameStyles });
    return (0, l.jsx)(u.A, {
        targetElementRef: g,
        participants: x,
        channel: a,
        onPopoutClosed: m,
        children: (e) =>
            (0, l.jsx)(o.A, {
                ...e,
                tag: "span",
                children: (0, l.jsx)(i.E, {
                    ref: g,
                    className: h ? s()(d, f) : d,
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    lineClamp: 1,
                    scaleFontToUserSetting: !0,
                    children: n,
                }),
            }),
    });
}

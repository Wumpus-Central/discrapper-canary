n.d(t, { A: () => d });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(834730),
    o = n(73392),
    u = n(291594),
    c = n(959);
function d(e) {
    let { user: t, text: n, channel: a, textClassName: d, onPopoutClosed: m, enableDisplayNameStyles: h = !1 } = e,
        p = r.useMemo(() => [t], [t]),
        x = r.useRef(null),
        f = (0, o.a)({ displayNameStyles: t?.displayNameStyles });
    return (0, l.jsx)(c.A, {
        targetElementRef: x,
        participants: p,
        channel: a,
        onPopoutClosed: m,
        children: (e) =>
            (0, l.jsx)(u.A, {
                ...e,
                tag: "span",
                children: (0, l.jsx)(s.E, {
                    ref: x,
                    className: h ? i()(d, f) : d,
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    lineClamp: 1,
                    scaleFontToUserSetting: !0,
                    children: n,
                }),
            }),
    });
}

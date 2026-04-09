n.d(t, { M: () => m });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(265872),
    o = n(990078),
    c = n(397927),
    d = n(535296),
    u = n(985018),
    h = n(633916);
function m(e) {
    let { userId: t, applicationId: n, channel: s, hideWhenInactive: m, idle: A } = e,
        [g, p] = l.useState(!1),
        _ = l.useRef(null),
        f = l.useCallback(() => p(!0), []),
        E = l.useCallback(() => p(!1), []),
        x = u.intl.string(u.t["wg/30i"]);
    return (0, i.jsx)(r.Y, {
        targetElementRef: _,
        shouldShow: g,
        animation: r.Y.Animation.FADE,
        position: "top",
        align: "center",
        spacing: 8,
        onRequestClose: E,
        renderPopout: () => (0, i.jsx)(d.Z, { userId: t, channel: s, applicationId: n, onClose: E }),
        children: () =>
            (0, i.jsx)("div", {
                ref: _,
                children: (0, i.jsx)(o.m, {
                    text: x,
                    shouldShow: !g && void 0,
                    children: (0, i.jsx)("div", {
                        className: a()(h.V7, { [h.kl]: m, [h.N7]: A }),
                        children: (0, i.jsx)(c.K0, {
                            size: "sm",
                            variant: "overlay-secondary",
                            onClick: (e) => {
                                e.stopPropagation(), f();
                            },
                            "aria-label": x,
                            icon: c.okO,
                        }),
                    }),
                }),
            }),
    });
}

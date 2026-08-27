n.d(t, { A: () => E });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(273875),
    c = n(798618),
    d = n(331322),
    u = n(834730),
    h = n(748562),
    p = n(661531),
    m = n(922016),
    f = n(43990),
    A = n(939249),
    x = n(140735),
    g = n(421773),
    C = n(363195),
    y = n(809369),
    j = n(1195),
    I = n(375708),
    N = n(531281);
function v(e) {
    let { title: t, image: n } = e;
    return (0, i.jsxs)(d.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        padding: 12,
        className: N.rv,
        children: [
            n,
            (0, i.jsxs)(d.B, {
                gap: 0,
                fullWidth: !1,
                className: N.x8,
                children: [
                    (0, i.jsx)(u.E, { variant: "text-md/medium", lineClamp: 1, className: N.x9, children: t }),
                    (0, i.jsxs)(d.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 4,
                        fullWidth: !1,
                        children: [
                            (0, i.jsx)(h.U, { size: "xs", color: p.A.colors.TEXT_FEEDBACK_POSITIVE }),
                            (0, i.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-positive",
                                children: I.intl.string(j.default["2Ll0vk"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function E(e) {
    let { title: t, image: n, shouldShow: a = !0, forceOpen: d = !1, spacing: h, className: p, children: E } = e,
        b = l.useId(),
        T = l.useRef(null),
        _ = (0, r.bG)([C.A], () => C.A.theme),
        { isHovered: R, setIsHovered: S, onMouseEnter: L, onMouseLeave: O } = (0, g.A)(100, 100);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.Y, {
                targetElementRef: T,
                shouldShow: a && (R || d),
                position: "top",
                align: "center",
                spacing: h + 10,
                animation: m.Y.Animation.FADE,
                onRequestClose: () => S(!1),
                renderPopout: (l) => {
                    let { closePopout: a, setPopoutRef: r, position: d, nudge: u } = l;
                    return (0, i.jsx)(o.e.Provider, {
                        value: { position: d ?? "top", caretConfig: { align: "custom", customOffset: u } },
                        children: (0, i.jsx)(f.N, {
                            theme: _,
                            children: (l) =>
                                e.clickable
                                    ? (0, i.jsx)(A.D, {
                                          tag: "div",
                                          className: p,
                                          "aria-label": I.intl.formatToPlainString(j.default.hZobvN, { username: t }),
                                          onMouseEnter: L,
                                          onMouseLeave: O,
                                          onFocus: L,
                                          onBlur: O,
                                          onClick: () => {
                                              (0, y.k)(e.stream), a();
                                          },
                                          children: (0, i.jsxs)("div", {
                                              ref: r,
                                              className: s()(N.hB, l),
                                              children: [(0, i.jsx)(c.F, {}), (0, i.jsx)(v, { title: t, image: n })],
                                          }),
                                      })
                                    : (0, i.jsxs)("div", {
                                          ref: r,
                                          className: s()(N.hB, N.Kc, p, l),
                                          children: [(0, i.jsx)(c.F, {}), (0, i.jsx)(v, { title: t, image: n })],
                                      }),
                        }),
                    });
                },
                children: (e) =>
                    (0, i.jsx)("div", {
                        ref: T,
                        onMouseEnter: L,
                        onMouseLeave: O,
                        onFocus: L,
                        onBlur: O,
                        ...e,
                        children: l.cloneElement(E, { "aria-describedby": b }),
                    }),
            }),
            (0, i.jsxs)(x.A, {
                id: b,
                children: [
                    (0, i.jsx)(u.E, { variant: "text-sm/medium", children: t }),
                    (0, i.jsx)(u.E, { variant: "text-sm/normal", children: I.intl.string(j.default["2Ll0vk"]) }),
                ],
            }),
        ],
    });
}

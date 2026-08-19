n.d(t, { A: () => v });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(331322),
    c = n(834730),
    d = n(748562),
    u = n(661531),
    h = n(922016),
    p = n(43990),
    m = n(939249),
    f = n(140735),
    A = n(421773),
    x = n(363195),
    g = n(809369),
    C = n(1195),
    y = n(375708),
    j = n(50044);
function I(e) {
    let { title: t, image: n } = e;
    return (0, i.jsxs)(o.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        padding: 8,
        className: j.rv,
        children: [
            n,
            (0, i.jsxs)(o.B, {
                gap: 0,
                fullWidth: !1,
                className: j.x8,
                children: [
                    (0, i.jsx)(c.E, { variant: "text-md/medium", lineClamp: 1, children: t }),
                    (0, i.jsxs)(o.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 4,
                        fullWidth: !1,
                        children: [
                            (0, i.jsx)(d.U, { size: "xs", color: u.A.colors.TEXT_FEEDBACK_POSITIVE }),
                            (0, i.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-positive",
                                children: y.intl.string(C.default["2Ll0vk"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function v(e) {
    let { title: t, image: n, shouldShow: a = !0, forceOpen: o = !1, spacing: d, className: u, children: v } = e,
        N = l.useId(),
        E = l.useRef(null),
        b = (0, r.bG)([x.A], () => x.A.theme),
        { isHovered: _, setIsHovered: T, onMouseEnter: R, onMouseLeave: S } = (0, A.A)(100, 100);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.Y, {
                targetElementRef: E,
                shouldShow: a && (_ || o),
                position: "top",
                align: "center",
                spacing: d,
                animation: h.Y.Animation.FADE,
                onRequestClose: () => T(!1),
                renderPopout: (l) => {
                    let { closePopout: a, setPopoutRef: r } = l;
                    return (0, i.jsx)(p.N, {
                        theme: b,
                        children: (l) =>
                            e.clickable
                                ? (0, i.jsx)(m.D, {
                                      tag: "div",
                                      className: u,
                                      "aria-label": y.intl.formatToPlainString(C.default.hZobvN, { username: t }),
                                      onMouseEnter: R,
                                      onMouseLeave: S,
                                      onFocus: R,
                                      onBlur: S,
                                      onClick: () => {
                                          (0, g.k)(e.stream), a();
                                      },
                                      children: (0, i.jsx)("div", {
                                          ref: r,
                                          className: s()(j.hB, l),
                                          children: (0, i.jsx)(I, { title: t, image: n }),
                                      }),
                                  })
                                : (0, i.jsx)("div", {
                                      ref: r,
                                      className: s()(j.hB, j.Kc, u, l),
                                      children: (0, i.jsx)(I, { title: t, image: n }),
                                  }),
                    });
                },
                children: (e) =>
                    (0, i.jsx)("div", {
                        ref: E,
                        onMouseEnter: R,
                        onMouseLeave: S,
                        onFocus: R,
                        onBlur: S,
                        ...e,
                        children: l.cloneElement(v, { "aria-describedby": N }),
                    }),
            }),
            (0, i.jsxs)(f.A, {
                id: N,
                children: [
                    (0, i.jsx)(c.E, { variant: "text-sm/medium", children: t }),
                    (0, i.jsx)(c.E, { variant: "text-sm/normal", children: y.intl.string(C.default["2Ll0vk"]) }),
                ],
            }),
        ],
    });
}

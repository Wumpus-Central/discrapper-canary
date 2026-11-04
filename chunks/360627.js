var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(855986),
    o = n(195118),
    d = n(31188),
    c = n(331322),
    u = n(834730),
    h = n(748562),
    p = n(646514),
    m = n(265872),
    A = n(43990),
    f = n(939249),
    g = n(140735),
    x = n(421773),
    C = n(413599),
    y = n(809369),
    j = n(687782),
    I = n(792996),
    N = n(531281);
function v(e) {
    let { title: t, image: n } = e;
    return (0, i.jsxs)(c.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        fullWidth: !1,
        padding: 12,
        className: N.rv,
        children: [
            n,
            (0, i.jsxs)(c.B, {
                gap: 0,
                fullWidth: !1,
                className: N.x8,
                children: [
                    (0, i.jsx)(u.E, { variant: "body-md/medium", lineClamp: 1, className: N.x9, children: t }),
                    (0, i.jsxs)(c.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 4,
                        fullWidth: !1,
                        children: [
                            (0, i.jsx)(h.U, { size: "xs", color: p.A.colors.TEXT_FEEDBACK_POSITIVE }),
                            (0, i.jsx)(u.E, {
                                variant: "body-sm/normal",
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
    let { position: t, nudge: n, children: a } = e,
        s = l.useMemo(() => ({ position: t, caretConfig: { align: "custom", customOffset: n } }), [t, n]);
    return (0, i.jsx)(o.e.Provider, { value: s, children: a });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    title: t,
                    image: n,
                    shouldShow: a = !0,
                    forceOpen: o = !1,
                    spacing: c,
                    className: h,
                    children: p,
                } = e,
                b = l.useId(),
                S = l.useRef(null),
                _ = (0, r.bG)([C.A], () => C.A.theme),
                { isHovered: T, setIsHovered: R, onMouseEnter: O, onMouseLeave: P } = (0, x.A)(100, 100);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(m.Y, {
                        targetElementRef: S,
                        shouldShow: a && (T || o),
                        position: "top",
                        align: "center",
                        spacing: c + 10,
                        animation: m.Y.Animation.FADE,
                        onRequestClose: () => R(!1),
                        renderPopout: (l) => {
                            let { closePopout: a, setPopoutRef: r, position: o, nudge: c } = l;
                            return (0, i.jsx)(E, {
                                position: o ?? "top",
                                nudge: c,
                                children: (0, i.jsx)(A.N, {
                                    theme: _,
                                    children: (l) =>
                                        e.clickable
                                            ? (0, i.jsx)(f.D, {
                                                  tag: "div",
                                                  className: h,
                                                  "aria-label": I.intl.formatToPlainString(j.default.hZobvN, {
                                                      username: t,
                                                  }),
                                                  onMouseEnter: O,
                                                  onMouseLeave: P,
                                                  onFocus: O,
                                                  onBlur: P,
                                                  onClick: () => {
                                                      ((0, y.k)(e.stream), a());
                                                  },
                                                  children: (0, i.jsxs)("div", {
                                                      ref: r,
                                                      className: s()(N.hB, l),
                                                      children: [
                                                          (0, i.jsx)(d.F, {}),
                                                          (0, i.jsx)(v, { title: t, image: n }),
                                                      ],
                                                  }),
                                              })
                                            : (0, i.jsxs)("div", {
                                                  ref: r,
                                                  className: s()(N.hB, N.Kc, h, l),
                                                  children: [
                                                      (0, i.jsx)(d.F, {}),
                                                      (0, i.jsx)(v, { title: t, image: n }),
                                                  ],
                                              }),
                                }),
                            });
                        },
                        children: (e) =>
                            (0, i.jsx)("div", {
                                ref: S,
                                onMouseEnter: O,
                                onMouseLeave: P,
                                onFocus: O,
                                onBlur: P,
                                ...e,
                                children: l.cloneElement(p, { "aria-describedby": b }),
                            }),
                    }),
                    (0, i.jsxs)(g.A, {
                        id: b,
                        children: [
                            (0, i.jsx)(u.E, { variant: "body-sm/medium", children: t }),
                            (0, i.jsx)(u.E, {
                                variant: "body-sm/normal",
                                children: I.intl.string(j.default["2Ll0vk"]),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
);

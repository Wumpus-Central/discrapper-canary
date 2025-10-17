n.d(t, { S: () => j });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(79116),
    s = n(793030),
    c = n(594174),
    u = n(947790),
    d = n(747101),
    f = n(817053),
    g = n(533815),
    p = n(919498),
    m = n(853072),
    b = n(388032),
    h = n(932366),
    v = n(133458);
function y(e) {
    let { index: t, widgetType: n, game: a, children: o } = e,
        c = i.useRef(null),
        d = i.useRef(null),
        { isDragging: f, dragSourcePosition: g } = (0, u.g)({
            dragRef: c,
            dropRef: d,
            index: t,
            widgetType: n,
            game: a,
        }),
        p = null != g,
        m = p && t < g,
        h = p && t > g;
    return (0, r.jsx)("div", {
        ref: d,
        className: l()(v.container, {
            [v.isDragging]: f,
            [v.dropIndicatorBefore]: m,
            [v.dropIndicatorAfter]: h,
        }),
        "aria-label": b.intl.formatToPlainString(b.t["0dR3g4"], { positionNumber: t + 1 }),
        children: (0, r.jsxs)("div", {
            ref: c,
            className: v.dragTarget,
            children: [
                o,
                (0, r.jsx)(s.P3F, {
                    "aria-label": b.intl.string(b.t.Zc1neH),
                    className: v.dragHandle,
                    focusProps: { ringTarget: c },
                    children: (0, r.jsx)(s.Vni, {
                        size: "sm",
                        color: "currentColor",
                    }),
                }),
            ],
        }),
    });
}
function j(e) {
    let { game: t, userId: n, widgetType: i, guildId: a, channelId: s, disableInteraction: u = !1, index: b } = e,
        j = (0, m.Z)(t.applicationId).length > 0,
        O = c.default.getCurrentUser(),
        x = (null == O ? void 0 : O.id) === n,
        _ = !u && x,
        P = (0, d.kO)(t.applicationId),
        { isDragging: I } = (0, o.f)((e) => ({ isDragging: e.isDragging() })),
        w = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(f.Z, {
                        imageSrc: t.imageSrc,
                        gameName: t.gameName,
                        applicationId: t.applicationId,
                        userId: n,
                        disableInteraction: u,
                        className: l()(
                            j ? v.socialProofBackdrop : void 0,
                            (null == t ? void 0 : t.imageSrc) == null || u ? void 0 : h.hoverActiveEffect,
                        ),
                        hideTooltip: I,
                    }),
                    _ &&
                        (0, r.jsx)(g.Z, {
                            game: t,
                            widgetType: i,
                            className: v.removeGameButton,
                            iconSize: "xs",
                        }),
                    !u &&
                        (0, r.jsx)(p.Z, {
                            className: v.socialProof,
                            applicationId: t.applicationId,
                            guildId: a,
                            channelId: s,
                            visuallyHideLabel: !0,
                        }),
                ],
            });
    return P
        ? (0, r.jsx)("div", { className: h.loadingCover })
        : _
          ? (0, r.jsx)(y, {
                widgetType: i,
                index: null != b ? b : 0,
                game: t,
                children: w(),
            })
          : (0, r.jsx)("div", {
                className: v.container,
                children: w(),
            });
}

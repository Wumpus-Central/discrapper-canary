r.d(t, { S: () => j });
var n = r(951288),
    i = r(647438),
    a = r(120356),
    o = r.n(a),
    l = r(79116),
    c = r(594174),
    s = r(947790),
    u = r(747101),
    d = r(817053),
    g = r(533815),
    f = r(919498),
    p = r(853072),
    b = r(388032),
    m = r(932366),
    O = r(133458);
function y(e) {
    let { index: t, widgetType: r, game: a, children: l } = e,
        c = i.useRef(null),
        { isDragging: u, dragSourcePosition: d } = (0, s.g)({
            dragRef: c,
            dropRef: c,
            index: t,
            widgetType: r,
            game: a,
        }),
        g = null != d,
        f = g && t < d,
        p = g && t > d;
    return (0, n.jsx)("div", {
        ref: c,
        className: o()(O.container, {
            [O.isDragging]: u,
            [O.dropIndicatorBefore]: f,
            [O.dropIndicatorAfter]: p,
        }),
        "aria-label": b.intl.formatToPlainString(b.t["0dR3g4"], { positionNumber: t + 1 }),
        children: l,
    });
}
function j(e) {
    let { game: t, userId: r, widgetType: i, guildId: a, channelId: s, disableInteraction: b = !1, index: j } = e,
        x = (0, p.Z)(t.applicationId).length > 0,
        v = c.default.getCurrentUser(),
        h = (null == v ? void 0 : v.id) === r,
        _ = !b && h,
        w = (0, u.kO)(t.applicationId),
        { isDragging: P } = (0, l.f)((e) => ({ isDragging: e.isDragging() })),
        I = () =>
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(d.Z, {
                        imageSrc: t.imageSrc,
                        gameName: t.gameName,
                        applicationId: t.applicationId,
                        userId: r,
                        disableInteraction: b,
                        className: o()(
                            x ? O.socialProofBackdrop : void 0,
                            (null == t ? void 0 : t.imageSrc) == null || b ? void 0 : m.hoverActiveEffect,
                        ),
                        hideTooltip: P,
                    }),
                    _ &&
                        (0, n.jsx)(g.Z, {
                            game: t,
                            widgetType: i,
                            className: O.removeGameButton,
                            iconSize: "xs",
                        }),
                    !b &&
                        (0, n.jsx)(f.Z, {
                            className: O.socialProof,
                            applicationId: t.applicationId,
                            guildId: a,
                            channelId: s,
                            visuallyHideLabel: !0,
                        }),
                ],
            });
    return w
        ? (0, n.jsx)("div", { className: m.loadingCover })
        : _
          ? (0, n.jsx)(y, {
                widgetType: i,
                index: null != j ? j : 0,
                game: t,
                children: I(),
            })
          : (0, n.jsx)("div", {
                className: O.container,
                children: I(),
            });
}

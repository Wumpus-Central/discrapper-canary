n.d(t, { S: () => O });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(79116),
    c = n(793030),
    s = n(594174),
    u = n(947790),
    d = n(747101),
    f = n(733231),
    g = n(817053),
    p = n(533815),
    m = n(919498),
    b = n(853072),
    h = n(388032),
    v = n(932366),
    y = n(133458);
function j(e) {
    let { index: t, widgetType: n, game: a, children: o } = e,
        s = i.useRef(null),
        d = i.useRef(null),
        { registerDragHandleRef: g, manageFocusOnReorder: p } = (0, f.C)(),
        { isDragging: m, dragSourcePosition: b } = (0, u.g)({
            dragRef: s,
            dropRef: d,
            index: t,
            widgetType: n,
            game: a,
            onReorder: () => p(a.applicationId),
        }),
        v = null != b,
        j = v && t < b,
        O = v && t > b;
    return (0, r.jsx)("div", {
        ref: d,
        className: l()(y.container, {
            [y.isDragging]: m,
            [y.dropIndicatorBefore]: j,
            [y.dropIndicatorAfter]: O,
        }),
        "aria-label": h.intl.formatToPlainString(h.t["0dR3g4"], { positionNumber: t + 1 }),
        children: (0, r.jsxs)("div", {
            ref: s,
            className: y.dragTarget,
            children: [
                o,
                (0, r.jsx)(c.P3F, {
                    innerRef: g(a.applicationId),
                    "aria-label": h.intl.string(h.t.Zc1neH),
                    className: y.dragHandle,
                    focusProps: { ringTarget: s },
                    children: (0, r.jsx)(c.Vni, {
                        size: "sm",
                        color: "currentColor",
                    }),
                }),
            ],
        }),
    });
}
function O(e) {
    let {
            game: t,
            userId: n,
            widgetType: i,
            guildId: a,
            channelId: c,
            disableInteraction: u = !1,
            index: f,
            onRemoveGame: h,
            coverRef: O,
        } = e,
        x = (0, b.Z)(t.applicationId).length > 0,
        _ = s.default.getCurrentUser(),
        I = (null == _ ? void 0 : _.id) === n,
        P = !u && I,
        w = (0, d.kO)(t.applicationId),
        { isDragging: S } = (0, o.f)((e) => ({ isDragging: e.isDragging() })),
        E = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(g.Z, {
                        imageSrc: t.imageSrc,
                        gameName: t.gameName,
                        applicationId: t.applicationId,
                        userId: n,
                        disableInteraction: u,
                        className: l()(
                            x ? y.socialProofBackdrop : void 0,
                            (null == t ? void 0 : t.imageSrc) == null || u ? void 0 : v.hoverActiveEffect,
                        ),
                        hideTooltip: S,
                        coverRef: O,
                    }),
                    P &&
                        (0, r.jsx)(p.Z, {
                            game: t,
                            widgetType: i,
                            className: y.removeGameButton,
                            iconSize: "xs",
                            onRemove: () => (null == h ? void 0 : h(t.applicationId)),
                        }),
                    !u &&
                        (0, r.jsx)(m.Z, {
                            className: y.socialProof,
                            applicationId: t.applicationId,
                            guildId: a,
                            channelId: c,
                            visuallyHideLabel: !0,
                        }),
                ],
            });
    return w
        ? (0, r.jsx)("div", { className: v.loadingCover })
        : P
          ? (0, r.jsx)(j, {
                widgetType: i,
                index: null != f ? f : 0,
                game: t,
                children: E(),
            })
          : (0, r.jsx)("div", {
                className: y.container,
                children: E(),
            });
}

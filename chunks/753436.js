n.d(t, { S: () => O });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(79116),
    s = n(594174),
    c = n(86419),
    u = n(747101),
    d = n(780899),
    f = n(733231),
    g = n(817053),
    p = n(533815),
    m = n(919498),
    b = n(853072),
    h = n(388032),
    v = n(932366),
    y = n(133458);
function j(e) {
    let { index: t, widgetType: n, game: a, children: l } = e,
        { registerDragHandleRef: o, manageFocusOnReorder: s } = (0, f.C)(),
        u = i.useRef(null),
        g = {
            imageSrc: a.imageSrc,
            gameName: a.gameName,
        };
    return (0, r.jsx)(d.yW, {
        index: t,
        itemId: a.applicationId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: g,
        "aria-label": h.intl.formatToPlainString(h.t["0dR3g4"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, c.Eq)(n, e, t),
        onEnd: () => s(a.applicationId),
        className: y.container,
        dropBeforeClassName: y.dropIndicatorBefore,
        dropAfterClassName: y.dropIndicatorAfter,
        draggingClassName: y.isDragging,
        children: (0, r.jsxs)("div", {
            ref: u,
            className: y.dragHandleContainer,
            children: [
                l,
                (0, r.jsx)(d.e_, {
                    buttonRef: o(a.applicationId),
                    className: y.dragHandle,
                    focusProps: { ringTarget: u },
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
            disableInteraction: d = !1,
            index: f,
            onRemoveGame: h,
            coverRef: O,
        } = e,
        x = (0, b.Z)(t.applicationId).length > 0,
        _ = s.default.getCurrentUser(),
        I = (null == _ ? void 0 : _.id) === n,
        P = !d && I,
        w = (0, u.kO)(t.applicationId),
        { isDragging: S } = (0, o.f)((e) => ({ isDragging: e.isDragging() })),
        E = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(g.Z, {
                        imageSrc: t.imageSrc,
                        gameName: t.gameName,
                        applicationId: t.applicationId,
                        userId: n,
                        disableInteraction: d,
                        className: l()(
                            x ? y.socialProofBackdrop : void 0,
                            (null == t ? void 0 : t.imageSrc) == null || d ? void 0 : v.hoverActiveEffect,
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
                    !d &&
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

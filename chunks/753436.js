n.d(t, { S: () => j });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(79116),
    c = n(594174),
    s = n(86419),
    u = n(747101),
    d = n(780899),
    f = n(733231),
    g = n(817053),
    p = n(533815),
    m = n(919498),
    b = n(853072),
    h = n(388032),
    y = n(932366),
    v = n(133458);
function O(e) {
    let { index: t, widgetType: n, game: a, children: l } = e,
        { registerDragHandleRef: o, manageFocusOnReorder: c } = (0, f.C)(),
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
        "aria-label": h.intl.formatToPlainString(h.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, s.Eq)(n, e, t),
        onEnd: () => c(a.applicationId),
        className: v.container,
        dropBeforeClassName: v.dropIndicatorBefore,
        dropAfterClassName: v.dropIndicatorAfter,
        draggingClassName: v.isDragging,
        children: (0, r.jsxs)("div", {
            ref: u,
            className: v.dragHandleContainer,
            children: [
                l,
                (0, r.jsx)(d.e_, {
                    buttonRef: o(a.applicationId),
                    className: v.dragHandle,
                    focusProps: { ringTarget: u },
                }),
            ],
        }),
    });
}
function j(e) {
    let {
            game: t,
            userId: n,
            widgetType: i,
            guildId: a,
            channelId: s,
            disableInteraction: d = !1,
            index: f,
            onRemoveGame: h,
            coverRef: j,
        } = e,
        x = (0, b.Z)(t.applicationId).length > 0,
        _ = c.default.getCurrentUser(),
        P = (null == _ ? void 0 : _.id) === n,
        I = !d && P,
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
                            x ? v.socialProofBackdrop : void 0,
                            (null == t ? void 0 : t.imageSrc) == null || d ? void 0 : y.hoverActiveEffect,
                        ),
                        hideTooltip: S,
                        coverRef: j,
                    }),
                    I &&
                        (0, r.jsx)(p.Z, {
                            game: t,
                            widgetType: i,
                            className: v.removeGameButton,
                            iconSize: "xs",
                            onRemove: () => (null == h ? void 0 : h(t.applicationId)),
                        }),
                    !d &&
                        (0, r.jsx)(m.Z, {
                            className: v.socialProof,
                            applicationId: t.applicationId,
                            guildId: a,
                            channelId: s,
                            visuallyHideLabel: !0,
                        }),
                ],
            });
    return w
        ? (0, r.jsx)("div", { className: y.loadingCover })
        : I
          ? (0, r.jsx)(O, {
                widgetType: i,
                index: null != f ? f : 0,
                game: t,
                children: E(),
            })
          : (0, r.jsx)("div", {
                className: v.container,
                children: E(),
            });
}

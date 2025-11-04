n.d(t, { S: () => j });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(79116),
    c = n(594174),
    s = n(86419),
    u = n(780899),
    d = n(733231),
    f = n(817053),
    g = n(533815),
    p = n(919498),
    m = n(394606),
    b = n(853072),
    y = n(388032),
    h = n(932366),
    v = n(133458);
function O(e) {
    let { index: t, widgetType: n, game: a, coverImageUrl: l, gameName: o, children: c } = e,
        { registerDragHandleRef: f, manageFocusOnReorder: g } = (0, d.C)(),
        p = i.useRef(null);
    return (0, r.jsx)(u.yW, {
        index: t,
        itemId: a.applicationId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: {
            imageSrc: l,
            gameName: o,
        },
        "aria-label": y.intl.formatToPlainString(y.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, s.Eq)(n, e, t),
        onEnd: () => g(a.applicationId),
        className: v.container,
        dropBeforeClassName: v.dropIndicatorBefore,
        dropAfterClassName: v.dropIndicatorAfter,
        draggingClassName: v.isDragging,
        children: (0, r.jsxs)("div", {
            ref: p,
            className: v.dragHandleContainer,
            children: [
                c,
                (0, r.jsx)(u.e_, {
                    buttonRef: f(a.applicationId),
                    className: v.dragHandle,
                    focusProps: { ringTarget: p },
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
            disableInteraction: u = !1,
            index: d,
            onRemoveGame: y,
            coverRef: j,
        } = e,
        { coverImageUrl: x, gameName: _, isLoading: P } = (0, m.Z)(t.applicationId),
        I = (0, b.Z)(t.applicationId).length > 0,
        w = c.default.getCurrentUser(),
        S = (null == w ? void 0 : w.id) === n,
        E = !u && S,
        { isDragging: T } = (0, o.f)((e) => ({ isDragging: e.isDragging() })),
        C = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(f.Z, {
                        imageSrc: x,
                        gameName: _,
                        applicationId: t.applicationId,
                        userId: n,
                        disableInteraction: u,
                        className: l()(
                            I ? v.socialProofBackdrop : void 0,
                            null == x || u ? void 0 : h.hoverActiveEffect,
                        ),
                        hideTooltip: T,
                        coverRef: j,
                    }),
                    E &&
                        (0, r.jsx)(g.Z, {
                            game: t,
                            widgetType: i,
                            className: v.removeGameButton,
                            iconSize: "xs",
                            onRemove: () => (null == y ? void 0 : y(t.applicationId)),
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
        : E
          ? (0, r.jsx)(O, {
                widgetType: i,
                index: null != d ? d : 0,
                game: t,
                coverImageUrl: x,
                gameName: _,
                children: C(),
            })
          : (0, r.jsx)("div", {
                className: v.container,
                children: C(),
            });
}

n.d(t, { S: () => O });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(85707),
    o = n(594174),
    c = n(86419),
    s = n(780899),
    u = n(733231),
    d = n(817053),
    f = n(533815),
    g = n(919498),
    p = n(394606),
    m = n(853072),
    b = n(388032),
    h = n(932366),
    y = n(133458);
function v(e) {
    let { index: t, widgetType: n, game: i, coverImageUrl: l, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, u.C)();
    return (0, r.jsx)(s.yW, {
        index: t,
        itemId: i.applicationId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: {
            imageSrc: l,
            gameName: a,
        },
        "aria-label": b.intl.formatToPlainString(b.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, c.Eq)(n, e, t),
        onEnd: () => d(i.applicationId),
        className: y.container,
        dropBeforeClassName: y.dropIndicatorBefore,
        dropAfterClassName: y.dropIndicatorAfter,
        draggingClassName: y.isDragging,
        children: (0, r.jsx)("div", {
            className: y.dragHandleContainer,
            children: o,
        }),
    });
}
function O(e) {
    let {
            game: t,
            userId: n,
            widgetType: i,
            guildId: c,
            channelId: b,
            disableInteraction: O = !1,
            index: j,
            onRemoveGame: x,
            coverRef: _,
        } = e,
        { coverImageUrl: P, gameName: I, isLoading: w } = (0, p.Z)(t.applicationId),
        { registerDragHandleRef: S } = (0, u.C)(),
        E = (0, m.Z)(t.applicationId).length > 0,
        T = o.default.getCurrentUser(),
        C = (null == T ? void 0 : T.id) === n,
        D = !O && C,
        { isDragging: k } = (0, a.f)((e) => ({ isDragging: e.isDragging() })),
        N = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(d.Z, {
                        imageSrc: P,
                        gameName: I,
                        applicationId: t.applicationId,
                        userId: n,
                        disableInteraction: O,
                        className: l()(
                            E ? y.socialProofBackdrop : void 0,
                            null == P || O ? void 0 : h.hoverActiveEffect,
                        ),
                        hideTooltip: k,
                        coverRef: _,
                    }),
                    D &&
                        (0, r.jsx)(s.e_, {
                            buttonRef: S(t.applicationId),
                            className: y.dragHandle,
                        }),
                    !O &&
                        (0, r.jsx)(g.L, {
                            userId: n,
                            applicationId: t.applicationId,
                            guildId: c,
                            channelId: b,
                            className: y.socialProof,
                        }),
                    D &&
                        (0, r.jsx)(f.Z, {
                            game: t,
                            widgetType: i,
                            className: y.removeGameButton,
                            iconSize: "xs",
                            onRemove: () => (null == x ? void 0 : x(t.applicationId)),
                        }),
                ],
            });
    return w
        ? (0, r.jsx)("div", { className: h.loadingCover })
        : D
          ? (0, r.jsx)(v, {
                widgetType: i,
                index: null != j ? j : 0,
                game: t,
                coverImageUrl: P,
                gameName: I,
                children: N(),
            })
          : (0, r.jsx)("div", {
                className: y.container,
                children: N(),
            });
}

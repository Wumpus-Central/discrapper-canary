n.d(t, { S: () => O });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    l = n(505805),
    o = n(594174),
    c = n(86419),
    s = n(780899),
    u = n(733231),
    d = n(817053),
    f = n(533815),
    g = n(919498),
    p = n(394606),
    b = n(853072),
    m = n(388032),
    h = n(713603),
    y = n(507683);
function v(e) {
    let { index: t, widgetType: n, game: i, coverImageUrl: a, gameName: l, children: o } = e,
        { manageFocusOnReorder: d } = (0, u.C)();
    return (0, r.jsx)(s.yW, {
        index: t,
        itemId: i.applicationId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: {
            imageSrc: a,
            gameName: l,
        },
        "aria-label": m.intl.formatToPlainString(m.t["0dR3gw"], { positionNumber: t + 1 }),
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
            channelId: m,
            disableInteraction: O = !1,
            index: j,
            onRemoveGame: x,
            coverRef: P,
        } = e,
        { coverImageUrl: I, gameName: w, isLoading: S } = (0, p.Z)(t.applicationId),
        { registerDragHandleRef: E } = (0, u.C)(),
        T = (0, b.Z)(t.applicationId).length > 0,
        _ = o.default.getCurrentUser(),
        C = (null == _ ? void 0 : _.id) === n,
        D = !O && C,
        { isDragging: k } = (0, l.f)((e) => ({ isDragging: e.isDragging() })),
        N = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(d.Z, {
                        imageSrc: I,
                        gameName: w,
                        applicationId: t.applicationId,
                        userId: n,
                        disableInteraction: O,
                        className: a()(
                            T ? y.socialProofBackdrop : void 0,
                            null == I || O ? void 0 : h.hoverActiveEffect,
                        ),
                        hideTooltip: k,
                        coverRef: P,
                    }),
                    D &&
                        (0, r.jsx)(s.e_, {
                            buttonRef: E(t.applicationId),
                            className: y.dragHandle,
                        }),
                    !O &&
                        (0, r.jsx)(g.L, {
                            userId: n,
                            applicationId: t.applicationId,
                            guildId: c,
                            channelId: m,
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
    return S
        ? (0, r.jsx)("div", { className: h.loadingCover })
        : D
          ? (0, r.jsx)(v, {
                widgetType: i,
                index: null != j ? j : 0,
                game: t,
                coverImageUrl: I,
                gameName: w,
                children: N(),
            })
          : (0, r.jsx)("div", {
                className: y.container,
                children: N(),
            });
}

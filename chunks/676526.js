n.d(t, {
    h: () => x,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(688807),
    s = n(287809),
    o = n(735321),
    c = n(451395),
    u = n(823016),
    d = n(788593),
    f = n(858808),
    p = n(685049),
    b = n(973397),
    g = n(617086),
    m = n(985018),
    y = n(461349),
    O = n(616060);

function j(e) {
    let { index: t, widgetType: n, game: l, coverImageUrl: i, gameName: a, children: s } = e,
        { manageFocusOnReorder: d } = (0, u.r)();
    return (0, r.jsx)(c.mG, {
        index: t,
        itemId: l.applicationId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: {
            imageSrc: i,
            gameName: a,
        },
        "aria-label": m.intl.formatToPlainString(m.t["0dR3gw"], {
            positionNumber: t + 1,
        }),
        onReorder: (e, t) => (0, o.Un)(n, e, t),
        onEnd: () => d(l.applicationId),
        className: O.kL,
        dropBeforeClassName: O.A,
        dropAfterClassName: O.Ze,
        draggingClassName: O.Id,
        children: (0, r.jsx)("div", {
            className: O.An,
            children: s,
        }),
    });
}

function x(e) {
    let {
            game: t,
            userId: n,
            widgetType: l,
            guildId: o,
            channelId: m,
            disableInteraction: x = !1,
            index: h,
            onRemoveGame: v,
            coverRef: A,
        } = e,
        { coverImageUrl: w, gameName: I, isLoading: P } = (0, b.A)(t.applicationId),
        { registerDragHandleRef: E } = (0, u.r)(),
        S = (0, g.A)(t.applicationId).length > 0,
        T = s.default.getCurrentUser(),
        _ = (null == T ? void 0 : T.id) === n,
        N = !x && _,
        { isDragging: D } = (0, a.V)((e) => ({
            isDragging: e.isDragging(),
        })),
        R = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(d.A, {
                        imageSrc: w,
                        gameName: I,
                        applicationId: t.applicationId,
                        userId: n,
                        disableInteraction: x,
                        className: i()(S ? O.kO : void 0, null == w || x ? void 0 : y.iL),
                        hideTooltip: D,
                        coverRef: A,
                    }),
                    N &&
                        (0, r.jsx)(c.jV, {
                            buttonRef: E(t.applicationId),
                            className: O.BU,
                        }),
                    !x &&
                        (0, r.jsx)(p.d, {
                            userId: n,
                            applicationId: t.applicationId,
                            guildId: o,
                            channelId: m,
                            className: O.Ez,
                        }),
                    N &&
                        (0, r.jsx)(f.A, {
                            game: t,
                            widgetType: l,
                            className: O.vS,
                            iconSize: "xs",
                            onRemove: () => (null == v ? void 0 : v(t.applicationId)),
                        }),
                ],
            });
    return P
        ? (0, r.jsx)("div", {
              className: y.mD,
          })
        : N
          ? (0, r.jsx)(j, {
                widgetType: l,
                index: null != h ? h : 0,
                game: t,
                coverImageUrl: w,
                gameName: I,
                children: R(),
            })
          : (0, r.jsx)("div", {
                className: O.kL,
                children: R(),
            });
}

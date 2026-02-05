n.d(t, { h: () => I });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(688807),
    s = n(287809),
    o = n(735321),
    d = n(451395),
    c = n(823016),
    u = n(788593),
    g = n(858808),
    m = n(685049),
    x = n(973397),
    f = n(617086),
    h = n(985018),
    p = n(461349),
    _ = n(616060);
function A(e) {
    let { index: t, widgetType: n, game: l, coverImageUrl: a, gameName: r, children: s } = e,
        { manageFocusOnReorder: u } = (0, c.r)();
    return (0, i.jsx)(d.mG, {
        index: t,
        itemId: l.applicationId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: a, gameName: r },
        "aria-label": h.intl.formatToPlainString(h.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, o.Un)(n, e, t),
        onEnd: () => u(l.applicationId),
        className: _.kL,
        dropBeforeClassName: _.A,
        dropAfterClassName: _.Ze,
        draggingClassName: _.Id,
        children: (0, i.jsx)("div", { className: _.An, children: s }),
    });
}
function I(e) {
    let {
            game: t,
            userId: n,
            widgetType: l,
            guildId: o,
            channelId: h,
            disableInteraction: I = !1,
            index: j,
            onRemoveGame: v,
            coverRef: T,
        } = e,
        { coverImageUrl: E, gameName: b, isLoading: y } = (0, x.A)(t.applicationId),
        { registerDragHandleRef: C } = (0, c.r)(),
        N = (0, f.A)(t.applicationId).length > 0,
        S = s.default.getCurrentUser(),
        w = S?.id === n,
        k = !I && w,
        { isDragging: R } = (0, r.V)((e) => ({ isDragging: e.isDragging() })),
        O = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(u.A, {
                        imageSrc: E,
                        gameName: b,
                        applicationId: t.applicationId,
                        userId: n,
                        disableInteraction: I,
                        className: a()(N ? _.kO : void 0, null == E || I ? void 0 : p.iL),
                        hideTooltip: R,
                        coverRef: T,
                    }),
                    k && (0, i.jsx)(d.jV, { buttonRef: C(t.applicationId), className: _.BU }),
                    !I &&
                        (0, i.jsx)(m.d, {
                            userId: n,
                            applicationId: t.applicationId,
                            guildId: o,
                            channelId: h,
                            className: _.Ez,
                        }),
                    k &&
                        (0, i.jsx)(g.A, {
                            game: t,
                            widgetType: l,
                            className: _.vS,
                            iconSize: "xs",
                            onRemove: () => v?.(t.applicationId),
                        }),
                ],
            });
    return y
        ? (0, i.jsx)("div", { className: p.mD })
        : k
          ? (0, i.jsx)(A, { widgetType: l, index: j ?? 0, game: t, coverImageUrl: E, gameName: b, children: O() })
          : (0, i.jsx)("div", { className: _.kL, children: O() });
}

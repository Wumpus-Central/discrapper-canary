i.d(t, { h: () => v });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(688807),
    o = i(201438),
    d = i(287809),
    c = i(735321),
    u = i(451395),
    g = i(823016),
    m = i(788593),
    h = i(858808),
    x = i(685049),
    p = i(617086),
    A = i(985018),
    f = i(522500),
    I = i(51631);
function j(e) {
    let { index: t, widgetType: i, game: l, coverImageUrl: a, gameName: r, children: o } = e,
        { manageFocusOnReorder: d } = (0, g.r)(),
        m = s.useRef(null);
    return (0, n.jsx)(u.mG, {
        index: t,
        itemId: l.applicationId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: a, gameName: r, getWidth: () => m.current?.offsetWidth },
        "aria-label": A.intl.formatToPlainString(A.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, c.Un)(i, e, t),
        onEnd: () => d(l.applicationId),
        className: I.kL,
        dropBeforeClassName: I.A,
        dropAfterClassName: I.Ze,
        draggingClassName: I.Id,
        children: (0, n.jsx)("div", { ref: m, className: I.An, children: o }),
    });
}
function v(e) {
    let {
            game: t,
            userId: i,
            widgetType: s,
            guildId: l,
            channelId: c,
            disableInteraction: A = !1,
            index: v,
            onRemoveGame: S,
            coverRef: b,
        } = e,
        { coverImageUrl: y, gameName: E, isLoading: T } = (0, o.A)(t.applicationId),
        { registerDragHandleRef: C } = (0, g.r)(),
        w = (0, p.A)(t.applicationId).length > 0,
        N = d.default.getCurrentUser(),
        R = N?.id === i,
        k = !A && R,
        { isDragging: L } = (0, r.V)((e) => ({ isDragging: e.isDragging() })),
        O = () =>
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(m.A, {
                        imageSrc: y,
                        gameName: E,
                        applicationId: t.applicationId,
                        userId: i,
                        disableInteraction: A,
                        className: a()(w ? I.kO : void 0, null == y || A ? void 0 : f.iL),
                        hideTooltip: L,
                        coverRef: b,
                    }),
                    k && (0, n.jsx)(u.jV, { buttonRef: C(t.applicationId), className: I.BU }),
                    !A &&
                        (0, n.jsx)(x.d, {
                            userId: i,
                            applicationId: t.applicationId,
                            guildId: l,
                            channelId: c,
                            className: I.Ez,
                        }),
                    k &&
                        (0, n.jsx)(h.A, {
                            game: t,
                            widgetType: s,
                            className: I.vS,
                            iconSize: "xs",
                            onRemove: () => S?.(t.applicationId),
                        }),
                ],
            });
    return T
        ? (0, n.jsx)("div", { className: f.mD })
        : k
          ? (0, n.jsx)(j, { widgetType: s, index: v ?? 0, game: t, coverImageUrl: y, gameName: E, children: O() })
          : (0, n.jsx)("div", { className: I.kL, children: O() });
}

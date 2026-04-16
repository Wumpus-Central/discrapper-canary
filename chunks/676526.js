i.d(t, { h: () => v });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(688807),
    d = i(201438),
    o = i(287809),
    c = i(735321),
    u = i(451395),
    g = i(823016),
    m = i(788593),
    h = i(858808),
    x = i(685049),
    A = i(617086),
    p = i(985018),
    f = i(442356),
    I = i(163391);
function j(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: a, gameName: r, children: d } = e,
        { manageFocusOnReorder: o } = (0, g.r)(),
        m = l.useRef(null);
    return (0, n.jsx)(u.mG, {
        index: t,
        itemId: s.applicationId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: a, gameName: r, getWidth: () => m.current?.offsetWidth },
        "aria-label": p.intl.formatToPlainString(p.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, c.Un)(i, e, t),
        onEnd: () => o(s.applicationId),
        className: I.kL,
        dropBeforeClassName: I.A,
        dropAfterClassName: I.Ze,
        draggingClassName: I.Id,
        children: (0, n.jsx)("div", { ref: m, className: I.An, children: d }),
    });
}
function v(e) {
    let {
            game: t,
            userId: i,
            widgetType: l,
            guildId: s,
            channelId: c,
            disableInteraction: p = !1,
            index: v,
            onRemoveGame: S,
            coverRef: E,
        } = e,
        { coverImageUrl: b, gameName: T, isLoading: y } = (0, d.A)(t.applicationId),
        { registerDragHandleRef: C } = (0, g.r)(),
        N = (0, A.A)(t.applicationId).length > 0,
        w = o.default.getCurrentUser(),
        R = w?.id === i,
        k = !p && R,
        { isDragging: O } = (0, r.V)((e) => ({ isDragging: e.isDragging() })),
        L = () =>
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(m.A, {
                        imageSrc: b,
                        gameName: T,
                        applicationId: t.applicationId,
                        userId: i,
                        disableInteraction: p,
                        className: a()(N ? I.kO : void 0, null == b || p ? void 0 : f.iL),
                        hideTooltip: O,
                        coverRef: E,
                    }),
                    k && (0, n.jsx)(u.jV, { buttonRef: C(t.applicationId), className: I.BU }),
                    !p &&
                        (0, n.jsx)(x.d, {
                            userId: i,
                            applicationId: t.applicationId,
                            guildId: s,
                            channelId: c,
                            className: I.Ez,
                        }),
                    k &&
                        (0, n.jsx)(h.A, {
                            game: t,
                            widgetType: l,
                            className: I.vS,
                            iconSize: "xs",
                            onRemove: () => S?.(t.applicationId),
                        }),
                ],
            });
    return y
        ? (0, n.jsx)("div", { className: f.mD })
        : k
          ? (0, n.jsx)(j, { widgetType: l, index: v ?? 0, game: t, coverImageUrl: b, gameName: T, children: L() })
          : (0, n.jsx)("div", { className: I.kL, children: L() });
}

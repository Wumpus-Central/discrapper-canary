n.d(t, { h: () => j });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(688807),
    o = n(201438),
    d = n(287809),
    c = n(735321),
    u = n(451395),
    g = n(823016),
    m = n(788593),
    x = n(858808),
    f = n(685049),
    p = n(617086),
    h = n(985018),
    _ = n(522500),
    A = n(51631);
function I(e) {
    let { index: t, widgetType: n, game: l, coverImageUrl: s, gameName: r, children: o } = e,
        { manageFocusOnReorder: d } = (0, g.r)(),
        m = a.useRef(null);
    return (0, i.jsx)(u.mG, {
        index: t,
        itemId: l.applicationId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: s, gameName: r, getWidth: () => m.current?.offsetWidth },
        "aria-label": h.intl.formatToPlainString(h.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, c.Un)(n, e, t),
        onEnd: () => d(l.applicationId),
        className: A.kL,
        dropBeforeClassName: A.A,
        dropAfterClassName: A.Ze,
        draggingClassName: A.Id,
        children: (0, i.jsx)("div", { ref: m, className: A.An, children: o }),
    });
}
function j(e) {
    let {
            game: t,
            userId: n,
            widgetType: a,
            guildId: l,
            channelId: c,
            disableInteraction: h = !1,
            index: j,
            onRemoveGame: v,
            coverRef: E,
        } = e,
        { coverImageUrl: T, gameName: b, isLoading: C } = (0, o.A)(t.applicationId),
        { registerDragHandleRef: S } = (0, g.r)(),
        N = (0, p.A)(t.applicationId).length > 0,
        y = d.default.getCurrentUser(),
        R = y?.id === n,
        k = !h && R,
        { isDragging: O } = (0, r.V)((e) => ({ isDragging: e.isDragging() })),
        w = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(m.A, {
                        imageSrc: T,
                        gameName: b,
                        applicationId: t.applicationId,
                        userId: n,
                        disableInteraction: h,
                        className: s()(N ? A.kO : void 0, null == T || h ? void 0 : _.iL),
                        hideTooltip: O,
                        coverRef: E,
                    }),
                    k && (0, i.jsx)(u.jV, { buttonRef: S(t.applicationId), className: A.BU }),
                    !h &&
                        (0, i.jsx)(f.d, {
                            userId: n,
                            applicationId: t.applicationId,
                            guildId: l,
                            channelId: c,
                            className: A.Ez,
                        }),
                    k &&
                        (0, i.jsx)(x.A, {
                            game: t,
                            widgetType: a,
                            className: A.vS,
                            iconSize: "xs",
                            onRemove: () => v?.(t.applicationId),
                        }),
                ],
            });
    return C
        ? (0, i.jsx)("div", { className: _.mD })
        : k
          ? (0, i.jsx)(I, { widgetType: a, index: j ?? 0, game: t, coverImageUrl: T, gameName: b, children: w() })
          : (0, i.jsx)("div", { className: A.kL, children: w() });
}

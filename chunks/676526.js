n.d(t, { h: () => v });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(688807),
    o = n(152621),
    c = n(287809),
    d = n(735321),
    u = n(451395),
    m = n(823016),
    g = n(788593),
    p = n(858808),
    x = n(685049),
    f = n(617086),
    _ = n(985018),
    h = n(522500),
    A = n(51631);
function I(e) {
    let { index: t, widgetType: n, game: l, coverImageUrl: s, gameName: r, children: o } = e,
        { manageFocusOnReorder: c } = (0, m.r)(),
        g = a.useRef(null);
    return (0, i.jsx)(u.mG, {
        index: t,
        itemId: l.applicationId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: s, gameName: r, getWidth: () => g.current?.offsetWidth },
        "aria-label": _.intl.formatToPlainString(_.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, d.Un)(n, e, t),
        onEnd: () => c(l.applicationId),
        className: A.kL,
        dropBeforeClassName: A.A,
        dropAfterClassName: A.Ze,
        draggingClassName: A.Id,
        children: (0, i.jsx)("div", { ref: g, className: A.An, children: o }),
    });
}
function v(e) {
    let {
            game: t,
            userId: n,
            widgetType: a,
            guildId: l,
            channelId: d,
            disableInteraction: _ = !1,
            index: v,
            onRemoveGame: j,
            coverRef: E,
        } = e,
        { coverImageUrl: T, gameName: N, isLoading: C } = (0, o.A)(t.applicationId),
        { registerDragHandleRef: b } = (0, m.r)(),
        S = (0, f.A)(t.applicationId).length > 0,
        y = c.default.getCurrentUser(),
        R = y?.id === n,
        O = !_ && R,
        { isDragging: w } = (0, r.V)((e) => ({ isDragging: e.isDragging() })),
        k = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(g.A, {
                        imageSrc: T,
                        gameName: N,
                        applicationId: t.applicationId,
                        userId: n,
                        disableInteraction: _,
                        className: s()(S ? A.kO : void 0, null == T || _ ? void 0 : h.iL),
                        hideTooltip: w,
                        coverRef: E,
                    }),
                    O && (0, i.jsx)(u.jV, { buttonRef: b(t.applicationId), className: A.BU }),
                    !_ &&
                        (0, i.jsx)(x.d, {
                            userId: n,
                            applicationId: t.applicationId,
                            guildId: l,
                            channelId: d,
                            className: A.Ez,
                        }),
                    O &&
                        (0, i.jsx)(p.A, {
                            game: t,
                            widgetType: a,
                            className: A.vS,
                            iconSize: "xs",
                            onRemove: () => j?.(t.applicationId),
                        }),
                ],
            });
    return C
        ? (0, i.jsx)("div", { className: h.mD })
        : O
          ? (0, i.jsx)(I, { widgetType: a, index: v ?? 0, game: t, coverImageUrl: T, gameName: N, children: k() })
          : (0, i.jsx)("div", { className: A.kL, children: k() });
}

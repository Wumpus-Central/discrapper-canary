n.d(t, { h: () => j });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(688807),
    o = n(152621),
    d = n(287809),
    c = n(735321),
    u = n(451395),
    g = n(823016),
    m = n(788593),
    x = n(858808),
    p = n(685049),
    f = n(617086),
    h = n(985018),
    _ = n(461349),
    A = n(616060);
function I(e) {
    let { index: t, widgetType: n, game: a, coverImageUrl: s, gameName: r, children: o } = e,
        { manageFocusOnReorder: d } = (0, g.r)(),
        m = l.useRef(null);
    return (0, i.jsx)(u.mG, {
        index: t,
        itemId: a.applicationId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: s, gameName: r, getWidth: () => m.current?.offsetWidth },
        "aria-label": h.intl.formatToPlainString(h.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, c.Un)(n, e, t),
        onEnd: () => d(a.applicationId),
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
            widgetType: l,
            guildId: a,
            channelId: c,
            disableInteraction: h = !1,
            index: j,
            onRemoveGame: v,
            coverRef: E,
        } = e,
        { coverImageUrl: T, gameName: b, isLoading: N } = (0, o.A)(t.applicationId),
        { registerDragHandleRef: y } = (0, g.r)(),
        S = (0, f.A)(t.applicationId).length > 0,
        C = d.default.getCurrentUser(),
        R = C?.id === n,
        k = !h && R,
        { isDragging: w } = (0, r.V)((e) => ({ isDragging: e.isDragging() })),
        L = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(m.A, {
                        imageSrc: T,
                        gameName: b,
                        applicationId: t.applicationId,
                        userId: n,
                        disableInteraction: h,
                        className: s()(S ? A.kO : void 0, null == T || h ? void 0 : _.iL),
                        hideTooltip: w,
                        coverRef: E,
                    }),
                    k && (0, i.jsx)(u.jV, { buttonRef: y(t.applicationId), className: A.BU }),
                    !h &&
                        (0, i.jsx)(p.d, {
                            userId: n,
                            applicationId: t.applicationId,
                            guildId: a,
                            channelId: c,
                            className: A.Ez,
                        }),
                    k &&
                        (0, i.jsx)(x.A, {
                            game: t,
                            widgetType: l,
                            className: A.vS,
                            iconSize: "xs",
                            onRemove: () => v?.(t.applicationId),
                        }),
                ],
            });
    return N
        ? (0, i.jsx)("div", { className: _.mD })
        : k
          ? (0, i.jsx)(I, { widgetType: l, index: j ?? 0, game: t, coverImageUrl: T, gameName: b, children: L() })
          : (0, i.jsx)("div", { className: A.kL, children: L() });
}

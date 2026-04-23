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
    p = i(617086),
    A = i(985018),
    f = i(442356),
    j = i(163391);
function I(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: a, gameName: r, children: d } = e,
        { manageFocusOnReorder: o } = (0, g.r)(),
        m = l.useRef(null);
    return (0, n.jsx)(u.mG, {
        index: t,
        itemId: s.applicationId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: a, gameName: r, getWidth: () => m.current?.offsetWidth },
        "aria-label": A.intl.formatToPlainString(A.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, c.Un)(i, e, t),
        onEnd: () => o(s.applicationId),
        className: j.kL,
        dropBeforeClassName: j.A,
        dropAfterClassName: j.Ze,
        draggingClassName: j.Id,
        children: (0, n.jsx)("div", { ref: m, className: j.An, children: d }),
    });
}
function v(e) {
    let {
            game: t,
            userId: i,
            widgetType: l,
            guildId: s,
            channelId: c,
            disableInteraction: A = !1,
            index: v,
            onRemoveGame: S,
            coverRef: E,
        } = e,
        { coverImageUrl: y, gameName: w, isLoading: b } = (0, d.A)(t.applicationId),
        { registerDragHandleRef: N } = (0, g.r)(),
        T = (0, p.A)(t.applicationId).length > 0,
        C = o.default.getCurrentUser(),
        R = C?.id === i,
        O = !A && R,
        { isDragging: k } = (0, r.V)((e) => ({ isDragging: e.isDragging() })),
        L = () =>
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(m.A, {
                        imageSrc: y,
                        gameName: w,
                        applicationId: t.applicationId,
                        userId: i,
                        disableInteraction: A,
                        className: a()(T ? j.kO : void 0, null == y || A ? void 0 : f.iL),
                        hideTooltip: k,
                        coverRef: E,
                    }),
                    O && (0, n.jsx)(u.jV, { buttonRef: N(t.applicationId), className: j.BU }),
                    !A &&
                        (0, n.jsx)(x.d, {
                            userId: i,
                            applicationId: t.applicationId,
                            guildId: s,
                            channelId: c,
                            className: j.Ez,
                        }),
                    O &&
                        (0, n.jsx)(h.A, {
                            game: t,
                            widgetType: l,
                            className: j.vS,
                            iconSize: "xs",
                            onRemove: () => S?.(t.applicationId),
                        }),
                ],
            });
    return b
        ? (0, n.jsx)("div", { className: f.mD })
        : O
          ? (0, n.jsx)(I, { widgetType: l, index: v ?? 0, game: t, coverImageUrl: y, gameName: w, children: L() })
          : (0, n.jsx)("div", { className: j.kL, children: L() });
}

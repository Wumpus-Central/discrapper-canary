"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(540185),
    s = n(311907),
    o = n(289173),
    l = n(735321),
    u = n(950191),
    c = n(657331),
    d = n(993401),
    _ = n(961350),
    f = n(760751),
    p = n(518477),
    h = n(985018);
function m(e) {
    let { applicationId: t, onAction: n, onClose: m } = e,
        g = (0, s.bG)([_.default], () => _.default.getId()),
        E = (0, u.Ay)(g, null),
        A = (0, s.bG)([f.A], () => f.A.getDetectableGame(t)),
        I = i.useMemo(
            () =>
                !(
                    null == A ||
                    E?.widgets?.some(
                        (e) =>
                            e instanceof o.Yy &&
                            e.type === a.x.CURRENT_GAMES &&
                            e.games?.some((e) => e.applicationId === t),
                    )
                ) && (0, l.XX)(A),
            [t, E?.widgets, A],
        ),
        T = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    n?.({ action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET" }),
                    (0, l.ew)({ widgetType: a.x.CURRENT_GAMES, game: { applicationId: t }, ignoreMaxGames: !0 }),
                    (0, c.openUserProfileModal)({
                        userId: g,
                        tabSection: p.RP.WIDGETS,
                        scrollTarget: a.x.CURRENT_GAMES,
                    }),
                    m?.();
            },
            [t, g, n, m],
        );
    return I ? (0, r.jsx)(d.FD, { text: h.intl.string(h.t.BjYzmC), onClick: T, fullWidth: !0 }) : null;
}

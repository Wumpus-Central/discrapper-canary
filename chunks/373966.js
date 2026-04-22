e.d(n, { A: () => _ });
var i = e(627968),
    l = e(64700),
    r = e(540185),
    a = e(311907),
    s = e(289173),
    o = e(735321),
    c = e(950191),
    u = e(657331),
    d = e(993401),
    A = e(961350),
    x = e(760751),
    p = e(518477),
    f = e(985018);
function _(t) {
    let { applicationId: n, onAction: e, onClose: _ } = t,
        m = (0, a.bG)([A.default], () => A.default.getId()),
        E = (0, c.Ay)(m, null),
        T = (0, a.bG)([x.A], () => x.A.getDetectableGame(n)),
        g = l.useMemo(
            () =>
                !(
                    null == T ||
                    E?.widgets?.some(
                        (t) =>
                            t instanceof s.Yy &&
                            t.type === r.x.CURRENT_GAMES &&
                            t.games?.some((t) => t.applicationId === n),
                    )
                ) && (0, o.XX)(T),
            [n, E?.widgets, T],
        ),
        N = l.useCallback(
            (t) => {
                t.stopPropagation(),
                    e?.({ action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET" }),
                    (0, o.ew)({ widgetType: r.x.CURRENT_GAMES, game: { applicationId: n }, ignoreMaxGames: !0 }),
                    (0, u.openUserProfileModal)({
                        userId: m,
                        tabSection: p.RP.WIDGETS,
                        scrollTarget: r.x.CURRENT_GAMES,
                    }),
                    _?.();
            },
            [n, m, e, _],
        );
    return g ? (0, i.jsx)(d.FD, { text: f.intl.string(f.t.BjYzmC), onClick: N, fullWidth: !0 }) : null;
}

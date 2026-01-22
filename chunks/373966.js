n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(540185),
    s = n(311907),
    o = n(289173),
    l = n(735321),
    c = n(950191),
    u = n(657331),
    d = n(993401),
    f = n(961350),
    p = n(760751),
    _ = n(518477),
    h = n(985018);
function m(e) {
    let { applicationId: t, onAction: n, onClose: m } = e,
        g = (0, s.bG)([f.default], () => f.default.getId()),
        E = (0, c.Ay)(g, null),
        b = (0, s.bG)([p.A], () => p.A.getDetectableGame(t)),
        y = i.useMemo(() => {
            var e;
            return (
                !(
                    null == b ||
                    (null == E || null == (e = E.widgets)
                        ? void 0
                        : e.some((e) => {
                              var n;
                              return (
                                  e instanceof o.Yy &&
                                  e.type === a.x.CURRENT_GAMES &&
                                  (null == (n = e.games) ? void 0 : n.some((e) => e.applicationId === t))
                              );
                          }))
                ) && (0, l.XX)(b)
            );
        }, [t, null == E ? void 0 : E.widgets, b]),
        O = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    null == n || n({ action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET" }),
                    (0, l.ew)({
                        widgetType: a.x.CURRENT_GAMES,
                        game: { applicationId: t },
                        ignoreMaxGames: !0,
                    }),
                    (0, u.openUserProfileModal)({
                        userId: g,
                        tabSection: _.RP.WIDGETS,
                        scrollTarget: a.x.CURRENT_GAMES,
                    }),
                    null == m || m();
            },
            [t, g, n, m],
        );
    return y
        ? (0, r.jsx)(d.FD, {
              text: h.intl.string(h.t.BjYzmC),
              onClick: O,
              fullWidth: !0,
          })
        : null;
}

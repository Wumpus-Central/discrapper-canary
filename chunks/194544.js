n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    a = n(296009),
    o = n(442837),
    s = n(836197),
    l = n(86419),
    c = n(687158),
    u = n(892001),
    d = n(475413),
    f = n(314897),
    p = n(404577),
    _ = n(228168),
    h = n(388032);
function m(e) {
    let { applicationId: t, onAction: n, onClose: m } = e,
        g = (0, o.e7)([f.default], () => f.default.getId()),
        E = (0, c.ZP)(g, null),
        b = (0, o.e7)([p.Z], () => p.Z.getDetectableGame(t)),
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
                                  e instanceof s.zy &&
                                  e.type === a.l.CURRENT_GAMES &&
                                  (null == (n = e.games) ? void 0 : n.some((e) => e.applicationId === t))
                              );
                          }))
                ) && (0, l.pZ)(b)
            );
        }, [t, null == E ? void 0 : E.widgets, b]),
        O = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    null == n || n({ action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET" }),
                    (0, l.ES)({
                        widgetType: a.l.CURRENT_GAMES,
                        game: { applicationId: t },
                        ignoreMaxGames: !0,
                    }),
                    (0, u.openUserProfileModal)({
                        userId: g,
                        tabSection: _.oh.WIDGETS,
                        scrollTarget: a.l.CURRENT_GAMES,
                    }),
                    null == m || m();
            },
            [t, g, n, m],
        );
    return y
        ? (0, r.jsx)(d.i6, {
              text: h.intl.string(h.t.BjYzmC),
              onClick: O,
              fullWidth: !0,
          })
        : null;
}

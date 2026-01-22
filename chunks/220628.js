n.d(t, { A: () => b });
var r = n(64700),
    l = n(311907),
    i = n(397927),
    a = n(688810),
    s = n(987144),
    o = n(71393),
    c = n(485970),
    u = n(181940),
    d = n(299975),
    f = n(568065),
    p = n(652215);
function h(e, t, n) {
    n && (0, i.s7G)(), (0, d.h)(e, t);
}
function b(e, t) {
    let { analyticsLocations: n } = (0, a.Ay)(),
        { onToggle: i, isLoading: d, error: b } = (0, u.A)(e, t),
        g = (0, l.bG)([o.A], () => o.A.getGuild(e)),
        m = (0, c.A)(e, t);
    return {
        onActivate: r.useCallback(
            function () {
                var e;
                let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { shouldCloseAllModals: l = !0 } = r;
                if (null != g && null != t)
                    return m < t.cost
                        ? void (0, s.g)({
                              analyticsLocation: {
                                  page: p.liQ.GUILD_POWERUPS_OVERVIEW,
                                  section: p.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                              },
                              numberOfBoostsToAdd: t.cost - m,
                              analyticsLocations: n,
                              guild: g,
                              intent: t.type === f.o9.LEVEL ? f.Pn.LEVEL : f.Pn.PERK,
                              onSubscribeComplete: () => {
                                  var e;
                                  return null == (e = i(!0))
                                      ? void 0
                                      : e.then(() => {
                                            h(g.id, t, l);
                                        });
                              },
                          })
                        : null == (e = i(!0))
                          ? void 0
                          : e.then(() => {
                                h(g.id, t, l);
                            });
            },
            [i, t, m, n, g],
        ),
        isLoading: d,
        error: b,
    };
}

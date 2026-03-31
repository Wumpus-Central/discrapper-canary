n.d(t, { A: () => m });
var i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(688810),
    r = n(987144),
    o = n(71393),
    c = n(485970),
    d = n(181940),
    u = n(299975),
    h = n(568065),
    A = n(652215);
function _(e, t, n) {
    n && (0, s.s7G)(), (0, u.h)(e, t);
}
function m(e, t) {
    let { analyticsLocations: n } = (0, a.Ay)(),
        { onToggle: s, isLoading: u, error: m } = (0, d.A)(e, t),
        g = (0, l.bG)([o.A], () => o.A.getGuild(e)),
        p = (0, c.A)(e, t);
    return {
        onActivate: i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { shouldCloseAllModals: i = !0 } = e;
                if (null != g && null != t)
                    return p < t.cost
                        ? void (0, r.g)({
                              analyticsLocation: {
                                  page: A.liQ.GUILD_POWERUPS_OVERVIEW,
                                  section: A.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                              },
                              numberOfBoostsToAdd: t.cost - p,
                              analyticsLocations: n,
                              guild: g,
                              intent: t.type === h.o9.LEVEL ? h.Pn.LEVEL : h.Pn.PERK,
                              onSubscribeComplete: () =>
                                  s(!0)?.then(() => {
                                      _(g.id, t, i);
                                  }),
                          })
                        : s(!0)?.then(() => {
                              _(g.id, t, i);
                          });
            },
            [s, t, p, n, g],
        ),
        isLoading: u,
        error: m,
    };
}

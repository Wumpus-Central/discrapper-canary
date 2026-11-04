n.d(t, { default: () => U });
var i = n(477900);
n(582128);
var l = n(165862),
    a = n(477782),
    r = n(442433),
    s = n(847767),
    d = n(358367),
    c = n(793574),
    u = n(398590),
    o = n(727419),
    A = n(652215),
    T = n(792996),
    O = n(957316),
    b = n(855986),
    E = n(192308),
    g = n(834409),
    h = n(903093),
    j = n(610136),
    p = n(71393);
let U = (0, d.A)(
    (0, s.A)(
        function (e) {
            let t,
                s,
                d,
                { guildId: c, context: U, onSelect: x } = e,
                D =
                    U === A.BRT.POPOUT
                        ? null
                        : (0, i.jsx)(a.Dr, {
                              id: "report-raid",
                              label: T.intl.string(T.t.cswId3),
                              action: () => {
                                  ((0, u.jH)(), (0, O.M)(c));
                              },
                          }),
                I =
                    ((t = U === A.BRT.POPOUT),
                    (s = (0, b.bG)([p.A], () => p.A.getGuild(c), [c])),
                    (d = (0, b.bG)([j.A], () => (null != s ? j.A.getGuildIncident(s.id) : null))),
                    t
                        ? null
                        : (0, i.jsx)(a.Dr, {
                              id: "nav-security-actions",
                              label: T.intl.string(T.t.UgXhdn),
                              action: () => {
                                  let e = { source: g.Eo.MESSAGE, alertType: (0, h.$5)(d) };
                                  (0, E.mM)(async () => {
                                      let { default: t } = await Promise.all([
                                          n.e(231541),
                                          n.e(142753),
                                          n.e(660608),
                                          n.e(268582),
                                          n.e(940258),
                                          n.e(710727),
                                          n.e(346313),
                                          n.e(343233),
                                          n.e(697116),
                                      ]).then(n.bind(n, 671576));
                                      return (n) => (0, i.jsx)(t, { ...n, guildId: c, analyticsData: e });
                                  });
                              },
                          })),
                M =
                    U === A.BRT.POPOUT
                        ? null
                        : (0, i.jsx)(a.Dr, {
                              id: "nav-server-settings",
                              label: T.intl.string(T.t["154/bL"]),
                              action: () => {
                                  ((0, u.jH)(), o.A.open(c, A.BEX.MODERATION));
                              },
                          });
            return (0, i.jsxs)(l.W, {
                "data-menu-migrated-auto": !0,
                navId: "moderation-raid-context",
                onClose: r.Z_,
                "aria-label": T.intl.string(T.t.liqwPJ),
                onSelect: x,
                children: [(0, i.jsx)(a.rX, { children: I }), (0, i.jsxs)(a.rX, { children: [M, D] })],
            });
        },
        { object: A.ZSU.CONTEXT_MENU },
    ),
    [c.A.CONTEXT_MENU, c.A.GUILD_MODERATION_RAID_MENU],
);

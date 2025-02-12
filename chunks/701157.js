n.d(t, { Z: () => m }), n(653041);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    a = n(165630),
    o = n(771845),
    c = n(11844),
    d = n(300037),
    u = n(388032),
    h = n(50685);
let m = function (e) {
    let { canAddBoosts: t, canApplyBoosts: n } = e,
        m = (0, l.e7)([a.Z], () => a.Z.affinities),
        g = (0, l.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds()),
        x = s.useMemo(() => {
            let e = m.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < g.length && !(e.length >= 3); t++) {
                let n = g[t];
                e.includes(n) || e.push(n);
            }
            return e;
        }, [m, g]);
    return 0 === x.length
        ? null
        : (0, i.jsxs)('div', {
              className: h.wrapper,
              children: [
                  t &&
                      (0, i.jsx)(r.X6q, {
                          variant: 'heading-lg/semibold',
                          className: h.header,
                          children: u.intl.string(u.t.r90Wgo)
                      }),
                  x.map((e) =>
                      (0, i.jsx)(
                          d.Z,
                          {
                              className: h.recommendedServerCard,
                              guildId: e,
                              boostingVariant: !0
                          },
                          e
                      )
                  ),
                  g.length > 3 && n && (0, i.jsx)(c.Z, {})
              ]
          });
};

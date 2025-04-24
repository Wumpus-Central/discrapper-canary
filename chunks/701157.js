n.d(t, { Z: () => p }), n(539854);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(165630),
    o = n(771845),
    c = n(11844),
    d = n(300037),
    u = n(388032),
    m = n(831613);
let p = function (e) {
    let { canAddBoosts: t, canApplyBoosts: n } = e,
        p = (0, s.e7)([a.Z], () => a.Z.affinities),
        g = (0, s.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds()),
        h = r.useMemo(() => {
            let e = p.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < g.length && !(e.length >= 3); t++) {
                let n = g[t];
                e.includes(n) || e.push(n);
            }
            return e;
        }, [p, g]);
    return 0 === h.length
        ? null
        : (0, i.jsxs)('div', {
              className: m.wrapper,
              children: [
                  t &&
                      (0, i.jsx)(l.X6q, {
                          variant: 'heading-lg/semibold',
                          className: m.header,
                          children: u.intl.string(u.t.r90Wgo)
                      }),
                  h.map((e) =>
                      (0, i.jsx)(
                          d.Z,
                          {
                              className: m.recommendedServerCard,
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

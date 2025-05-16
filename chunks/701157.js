n.d(t, { Z: () => m }), n(539854);
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(481060),
    a = n(165630),
    o = n(771845),
    c = n(11844),
    d = n(300037),
    u = n(388032),
    g = n(831613);
let m = function (e) {
    let { canAddBoosts: t, canApplyBoosts: n } = e,
        m = (0, s.e7)([a.Z], () => a.Z.affinities),
        p = (0, s.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds()),
        h = r.useMemo(() => {
            let e = m.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < p.length && !(e.length >= 3); t++) {
                let n = p[t];
                e.includes(n) || e.push(n);
            }
            return e;
        }, [m, p]);
    return 0 === h.length
        ? null
        : (0, i.jsxs)('div', {
              className: g.wrapper,
              children: [
                  t &&
                      (0, i.jsx)(l.X6q, {
                          variant: 'heading-lg/semibold',
                          className: g.header,
                          children: u.intl.string(u.t.r90Wgo)
                      }),
                  h.map((e) =>
                      (0, i.jsx)(
                          d.Z,
                          {
                              className: g.recommendedServerCard,
                              guildId: e,
                              boostingVariant: !0
                          },
                          e
                      )
                  ),
                  p.length > 3 && n && (0, i.jsx)(c.Z, {})
              ]
          });
};

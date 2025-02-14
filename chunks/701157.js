n.d(t, { Z: () => g }), n(653041);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(165630),
    o = n(771845),
    c = n(11844),
    d = n(300037),
    u = n(388032),
    m = n(161838);
let g = function (e) {
    let { canAddBoosts: t, canApplyBoosts: n } = e,
        g = (0, r.e7)([a.Z], () => a.Z.affinities),
        h = (0, r.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds()),
        x = s.useMemo(() => {
            let e = g.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < h.length && !(e.length >= 3); t++) {
                let n = h[t];
                e.includes(n) || e.push(n);
            }
            return e;
        }, [g, h]);
    return 0 === x.length
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
                  x.map((e) =>
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
                  h.length > 3 && n && (0, i.jsx)(c.Z, {})
              ]
          });
};

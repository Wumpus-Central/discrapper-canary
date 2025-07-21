(n.d(t, { Z: () => N }), n(953529));
var r = n(255367),
    o = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    l = n(481060),
    c = n(984370),
    u = n(713081),
    d = n(905128),
    p = n(639777),
    m = n(27237),
    _ = n(51859),
    f = n(184478),
    x = n(877362),
    v = n(460608),
    g = n(279604),
    b = n(332538),
    j = n(535396),
    E = n(93841),
    h = n(388032),
    C = n(782285);
let I = [j.Us.LEVEL, j.Us.PERK];
function N(e) {
    let { guildId: t, powerupSkuId: n } = e;
    (o.useEffect(() => {
        ((0, u.Sn)(t), (0, u.Fm)(t));
    }, [t]),
        (0, b.Wj)(t));
    let i = (0, a.e7)([d.Z], () => d.Z.getStateForGuild(t)),
        N = (0, p.Z)(t),
        Z = o.useRef(!1);
    return (o.useEffect(() => {
        var e;
        if (null == n) return;
        let r = null == i || null == (e = i.allPowerups) ? void 0 : e[n];
        null == r || Z.current || ((0, g.KE)(t, r), (Z.current = !0));
    }, [t, n, null == i ? void 0 : i.allPowerups]),
    (null == i ? void 0 : i.powerupCatalog) == null)
        ? null
        : (0, r.jsxs)('div', {
              className: C.container,
              children: [
                  (0, r.jsxs)(c.Z, {
                      className: C.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)('div', {}),
                      children: [
                          (0, r.jsx)(c.Z.Icon, {
                              icon: l.$Eu,
                              'aria-label': ''
                          }),
                          (0, r.jsx)(c.Z.Title, { children: h.intl.string(E.default.yv3DJC) })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: C.contentContainer,
                      children: [
                          (0, r.jsx)(l.zJl, {
                              className: C.powerupsContainer,
                              children: I.map((e) => {
                                  let n = i.powerupCatalog[e];
                                  if (null == n) return;
                                  let { title: o, description: a } = (function (e) {
                                          switch (e) {
                                              case j.Us.LEVEL:
                                                  return {
                                                      title: h.intl.string(E.default['TXY/b2']),
                                                      description: h.intl.string(E.default.aJv4PD)
                                                  };
                                              case j.Us.PERK:
                                                  return {
                                                      title: h.intl.string(E.default.TV3Vm5),
                                                      description: h.intl.string(E.default.STx9ho)
                                                  };
                                          }
                                      })(e),
                                      c = e === j.Us.LEVEL ? l.zJl : 'div';
                                  return (0, r.jsxs)(
                                      'div',
                                      {
                                          className: C.powerupsSection,
                                          children: [
                                              (0, r.jsxs)('div', {
                                                  className: C.powerupHorizontalPadding,
                                                  children: [
                                                      (0, r.jsx)(l.X6q, {
                                                          color: 'header-primary',
                                                          variant: 'heading-lg/semibold',
                                                          children: o
                                                      }),
                                                      (0, r.jsx)(l.Text, {
                                                          color: 'text-muted',
                                                          variant: 'text-sm/medium',
                                                          children: a
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)(c, {
                                                  orientation: 'horizontal',
                                                  className: s()(C.powerupContainer, C.powerupHorizontalPadding, { [C.powerupsLevelContainer]: e === j.Us.LEVEL }),
                                                  fade: !0,
                                                  children: n.map((e, o) => {
                                                      switch (e.type) {
                                                          case j.Us.LEVEL:
                                                              return (0, r.jsx)(
                                                                  m.ZP,
                                                                  {
                                                                      guildId: t,
                                                                      index: o,
                                                                      powerup: e,
                                                                      nextPowerup: n[o + 1]
                                                                  },
                                                                  'powerup-'.concat(e.skuId)
                                                              );
                                                          case j.Us.PERK:
                                                              return (0, r.jsx)(
                                                                  _.Z,
                                                                  {
                                                                      guildId: t,
                                                                      powerup: e
                                                                  },
                                                                  'powerup-'.concat(e.skuId)
                                                              );
                                                      }
                                                  })
                                              })
                                          ]
                                      },
                                      'section-'.concat(e)
                                  );
                              })
                          }),
                          (0, r.jsxs)('div', {
                              className: C.sidebarContainer,
                              children: [N ? (0, r.jsx)(f.Z, { guildId: t }) : (0, r.jsx)(x.Z, { guildId: t }), (0, r.jsx)(v.Z, { guildId: t })]
                          })
                      ]
                  })
              ]
          });
}

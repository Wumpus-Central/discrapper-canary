t.d(n, { Z: () => Z }), t(953529);
var r = t(255367),
    i = t(73800),
    o = t(120356),
    s = t.n(o),
    a = t(442837),
    l = t(481060),
    c = t(984370),
    u = t(713081),
    d = t(905128),
    p = t(27237),
    m = t(51859),
    _ = t(953478),
    x = t(460608),
    f = t(279604),
    v = t(332538),
    g = t(535396),
    j = t(93841),
    b = t(388032),
    h = t(782285);
let C = [g.Us.LEVEL, g.Us.PERK];
function Z(e) {
    let { guildId: n, powerupSkuId: t } = e;
    i.useEffect(() => {
        (0, u.Sn)(n), (0, u.Fm)(n);
    }, [n]),
        (0, v.Wj)(n);
    let o = (0, a.e7)([d.Z], () => d.Z.getStateForGuild(n)),
        Z = i.useRef(!1);
    return (i.useEffect(() => {
        var e;
        if (null == t) return;
        let r = null == o || null == (e = o.allPowerups) ? void 0 : e[t];
        null == r || Z.current || ((0, f.KE)(n, r), (Z.current = !0));
    }, [n, t, null == o ? void 0 : o.allPowerups]),
    (null == o ? void 0 : o.powerupCatalog) == null)
        ? null
        : (0, r.jsxs)('div', {
              className: h.container,
              children: [
                  (0, r.jsxs)(c.Z, {
                      className: h.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)('div', {}),
                      children: [
                          (0, r.jsx)(c.Z.Icon, {
                              icon: l.$Eu,
                              'aria-label': ''
                          }),
                          (0, r.jsx)(c.Z.Title, { children: b.intl.string(j.default.yv3DJC) })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: h.contentContainer,
                      children: [
                          (0, r.jsx)(l.zJl, {
                              className: h.powerupsContainer,
                              children: C.map((e) => {
                                  let t = o.powerupCatalog[e];
                                  if (null == t) return;
                                  let { title: i, description: a } = (function (e) {
                                          switch (e) {
                                              case g.Us.LEVEL:
                                                  return {
                                                      title: b.intl.string(j.default['TXY/b2']),
                                                      description: b.intl.string(j.default.aJv4PD)
                                                  };
                                              case g.Us.PERK:
                                                  return {
                                                      title: b.intl.string(j.default.TV3Vm5),
                                                      description: b.intl.string(j.default.STx9ho)
                                                  };
                                          }
                                      })(e),
                                      c = e === g.Us.LEVEL ? l.zJl : 'div';
                                  return (0, r.jsxs)(
                                      'div',
                                      {
                                          className: h.powerupsSection,
                                          children: [
                                              (0, r.jsxs)('div', {
                                                  className: h.powerupHorizontalPadding,
                                                  children: [
                                                      (0, r.jsx)(l.X6q, {
                                                          color: 'header-primary',
                                                          variant: 'heading-lg/semibold',
                                                          children: i
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
                                                  className: s()(h.powerupContainer, h.powerupHorizontalPadding, { [h.powerupsLevelContainer]: e === g.Us.LEVEL }),
                                                  fade: !0,
                                                  children: t.map((e, i) => {
                                                      switch (e.type) {
                                                          case g.Us.LEVEL:
                                                              return (0, r.jsx)(
                                                                  p.ZP,
                                                                  {
                                                                      guildId: n,
                                                                      index: i,
                                                                      powerup: e,
                                                                      nextPowerup: t[i + 1]
                                                                  },
                                                                  'powerup-'.concat(e.skuId)
                                                              );
                                                          case g.Us.PERK:
                                                              return (0, r.jsx)(
                                                                  m.Z,
                                                                  {
                                                                      guildId: n,
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
                              className: h.sidebarContainer,
                              children: [(0, r.jsx)(_.Z, { guildId: n }), (0, r.jsx)(x.Z, { guildId: n })]
                          })
                      ]
                  })
              ]
          });
}

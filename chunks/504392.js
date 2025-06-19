t.d(n, { Z: () => N }), t(953529);
var r = t(255367),
    i = t(73800),
    o = t(120356),
    a = t.n(o),
    s = t(442837),
    l = t(481060),
    c = t(984370),
    u = t(713081),
    d = t(905128),
    p = t(639777),
    m = t(27237),
    _ = t(51859),
    f = t(184478),
    x = t(877362),
    b = t(460608),
    v = t(279604),
    g = t(332538),
    h = t(535396),
    j = t(93841),
    C = t(388032),
    E = t(782285);
let Z = [h.Us.LEVEL, h.Us.PERK];
function N(e) {
    let { guildId: n, powerupSkuId: t } = e;
    i.useEffect(() => {
        (0, u.Sn)(n), (0, u.Fm)(n);
    }, [n]),
        (0, g.Wj)(n);
    let o = (0, s.e7)([d.Z], () => d.Z.getStateForGuild(n)),
        N = (0, p.Z)(n),
        w = i.useRef(!1);
    return (i.useEffect(() => {
        var e;
        if (null == t) return;
        let r = null == o || null == (e = o.allPowerups) ? void 0 : e[t];
        null == r || w.current || ((0, v.KE)(n, r), (w.current = !0));
    }, [n, t, null == o ? void 0 : o.allPowerups]),
    (null == o ? void 0 : o.powerupCatalog) == null)
        ? null
        : (0, r.jsxs)('div', {
              className: E.container,
              children: [
                  (0, r.jsxs)(c.Z, {
                      className: E.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)('div', {}),
                      children: [
                          (0, r.jsx)(c.Z.Icon, {
                              icon: l.$Eu,
                              'aria-label': ''
                          }),
                          (0, r.jsx)(c.Z.Title, { children: C.intl.string(j.default.yv3DJC) })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: E.contentContainer,
                      children: [
                          (0, r.jsx)(l.zJl, {
                              className: E.powerupsContainer,
                              children: Z.map((e) => {
                                  let t = o.powerupCatalog[e];
                                  if (null == t) return;
                                  let { title: i, description: s } = (function (e) {
                                          switch (e) {
                                              case h.Us.LEVEL:
                                                  return {
                                                      title: C.intl.string(j.default['TXY/b2']),
                                                      description: C.intl.string(j.default.aJv4PD)
                                                  };
                                              case h.Us.PERK:
                                                  return {
                                                      title: C.intl.string(j.default.TV3Vm5),
                                                      description: C.intl.string(j.default.STx9ho)
                                                  };
                                          }
                                      })(e),
                                      c = e === h.Us.LEVEL ? l.zJl : 'div';
                                  return (0, r.jsxs)(
                                      'div',
                                      {
                                          className: E.powerupsSection,
                                          children: [
                                              (0, r.jsxs)('div', {
                                                  className: E.powerupHorizontalPadding,
                                                  children: [
                                                      (0, r.jsx)(l.X6q, {
                                                          color: 'header-primary',
                                                          variant: 'heading-lg/semibold',
                                                          children: i
                                                      }),
                                                      (0, r.jsx)(l.Text, {
                                                          color: 'text-muted',
                                                          variant: 'text-sm/medium',
                                                          children: s
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)(c, {
                                                  orientation: 'horizontal',
                                                  className: a()(E.powerupContainer, E.powerupHorizontalPadding, { [E.powerupsLevelContainer]: e === h.Us.LEVEL }),
                                                  fade: !0,
                                                  children: t.map((e, i) => {
                                                      switch (e.type) {
                                                          case h.Us.LEVEL:
                                                              return (0, r.jsx)(
                                                                  m.ZP,
                                                                  {
                                                                      guildId: n,
                                                                      index: i,
                                                                      powerup: e,
                                                                      nextPowerup: t[i + 1]
                                                                  },
                                                                  'powerup-'.concat(e.skuId)
                                                              );
                                                          case h.Us.PERK:
                                                              return (0, r.jsx)(
                                                                  _.Z,
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
                              className: E.sidebarContainer,
                              children: [N ? (0, r.jsx)(f.Z, { guildId: n }) : (0, r.jsx)(x.Z, { guildId: n }), (0, r.jsx)(b.Z, { guildId: n })]
                          })
                      ]
                  })
              ]
          });
}

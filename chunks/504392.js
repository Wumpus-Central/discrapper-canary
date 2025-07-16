(n.d(t, { Z: () => I }), n(953529));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(984370),
    d = n(713081),
    u = n(905128),
    p = n(639777),
    m = n(27237),
    _ = n(51859),
    f = n(184478),
    x = n(877362),
    b = n(460608),
    v = n(279604),
    g = n(332538),
    h = n(535396),
    E = n(93841),
    j = n(388032),
    C = n(782285);
let N = [h.Us.LEVEL, h.Us.PERK];
function I(e) {
    let { guildId: t, powerupSkuId: n } = e;
    (i.useEffect(() => {
        ((0, d.Sn)(t), (0, d.Fm)(t));
    }, [t]),
        (0, g.Wj)(t));
    let o = (0, s.e7)([u.Z], () => u.Z.getStateForGuild(t)),
        I = (0, p.Z)(t),
        O = i.useRef(!1);
    return (i.useEffect(() => {
        var e;
        if (null == n) return;
        let r = null == o || null == (e = o.allPowerups) ? void 0 : e[n];
        null == r || O.current || ((0, v.KE)(t, r), (O.current = !0));
    }, [t, n, null == o ? void 0 : o.allPowerups]),
    (null == o ? void 0 : o.powerupCatalog) == null)
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
                          (0, r.jsx)(c.Z.Title, { children: j.intl.string(E.default.yv3DJC) })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: C.contentContainer,
                      children: [
                          (0, r.jsx)(l.zJl, {
                              className: C.powerupsContainer,
                              children: N.map((e) => {
                                  let n = o.powerupCatalog[e];
                                  if (null == n) return;
                                  let { title: i, description: s } = (function (e) {
                                          switch (e) {
                                              case h.Us.LEVEL:
                                                  return {
                                                      title: j.intl.string(E.default['TXY/b2']),
                                                      description: j.intl.string(E.default.aJv4PD)
                                                  };
                                              case h.Us.PERK:
                                                  return {
                                                      title: j.intl.string(E.default.TV3Vm5),
                                                      description: j.intl.string(E.default.STx9ho)
                                                  };
                                          }
                                      })(e),
                                      c = e === h.Us.LEVEL ? l.zJl : 'div';
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
                                                  className: a()(C.powerupContainer, C.powerupHorizontalPadding, { [C.powerupsLevelContainer]: e === h.Us.LEVEL }),
                                                  fade: !0,
                                                  children: n.map((e, i) => {
                                                      switch (e.type) {
                                                          case h.Us.LEVEL:
                                                              return (0, r.jsx)(
                                                                  m.ZP,
                                                                  {
                                                                      guildId: t,
                                                                      index: i,
                                                                      powerup: e,
                                                                      nextPowerup: n[i + 1]
                                                                  },
                                                                  'powerup-'.concat(e.skuId)
                                                              );
                                                          case h.Us.PERK:
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
                              children: [I ? (0, r.jsx)(f.Z, { guildId: t }) : (0, r.jsx)(x.Z, { guildId: t }), (0, r.jsx)(b.Z, { guildId: t })]
                          })
                      ]
                  })
              ]
          });
}

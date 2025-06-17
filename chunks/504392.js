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
    p = t(639777),
    m = t(27237),
    _ = t(51859),
    x = t(184478),
    f = t(877362),
    v = t(460608),
    g = t(279604),
    j = t(332538),
    b = t(535396),
    h = t(93841),
    C = t(388032),
    E = t(782285);
let N = [b.Us.LEVEL, b.Us.PERK];
function Z(e) {
    let { guildId: n, powerupSkuId: t } = e;
    i.useEffect(() => {
        (0, u.Sn)(n), (0, u.Fm)(n);
    }, [n]),
        (0, j.Wj)(n);
    let o = (0, a.e7)([d.Z], () => d.Z.getStateForGuild(n)),
        Z = (0, p.Z)(n),
        I = i.useRef(!1);
    return (i.useEffect(() => {
        var e;
        if (null == t) return;
        let r = null == o || null == (e = o.allPowerups) ? void 0 : e[t];
        null == r || I.current || ((0, g.KE)(n, r), (I.current = !0));
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
                          (0, r.jsx)(c.Z.Title, { children: C.intl.string(h.default.yv3DJC) })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: E.contentContainer,
                      children: [
                          (0, r.jsx)(l.zJl, {
                              className: E.powerupsContainer,
                              children: N.map((e) => {
                                  let t = o.powerupCatalog[e];
                                  if (null == t) return;
                                  let { title: i, description: a } = (function (e) {
                                          switch (e) {
                                              case b.Us.LEVEL:
                                                  return {
                                                      title: C.intl.string(h.default['TXY/b2']),
                                                      description: C.intl.string(h.default.aJv4PD)
                                                  };
                                              case b.Us.PERK:
                                                  return {
                                                      title: C.intl.string(h.default.TV3Vm5),
                                                      description: C.intl.string(h.default.STx9ho)
                                                  };
                                          }
                                      })(e),
                                      c = e === b.Us.LEVEL ? l.zJl : 'div';
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
                                                          children: a
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)(c, {
                                                  orientation: 'horizontal',
                                                  className: s()(E.powerupContainer, E.powerupHorizontalPadding, { [E.powerupsLevelContainer]: e === b.Us.LEVEL }),
                                                  fade: !0,
                                                  children: t.map((e, i) => {
                                                      switch (e.type) {
                                                          case b.Us.LEVEL:
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
                                                          case b.Us.PERK:
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
                          (0, r.jsx)('div', {
                              className: E.sidebarContainer,
                              children: Z
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)(x.Z, { guildId: n }), (0, r.jsx)(v.Z, { guildId: n })]
                                    })
                                  : (0, r.jsx)(f.Z, { guildId: n })
                          })
                      ]
                  })
              ]
          });
}

t.d(n, { Z: () => Z }), t(953529);
var r = t(200651),
    i = t(192379),
    o = t(120356),
    s = t.n(o),
    a = t(442837),
    l = t(481060),
    c = t(377171),
    u = t(984370),
    d = t(713081),
    p = t(905128),
    m = t(27237),
    x = t(51859),
    _ = t(953478),
    f = t(460608),
    v = t(279604),
    g = t(332538),
    j = t(535396),
    b = t(680278),
    h = t(388032),
    C = t(782285);
let N = [j.Us.LEVEL, j.Us.PERK];
function Z(e) {
    let { guildId: n, powerupSkuId: t } = e;
    i.useEffect(() => {
        (0, d.Sn)(n), (0, d.Fm)(n);
    }, [n]),
        (0, g.Wj)(n);
    let o = (0, a.e7)([p.Z], () => p.Z.getStateForGuild(n)),
        Z = i.useRef(!1);
    return (i.useEffect(() => {
        var e;
        if (null == t) return;
        let r = null == o || null == (e = o.allPowerups) ? void 0 : e[t];
        null == r || Z.current || ((0, v.KE)(n, r), (Z.current = !0));
    }, [n, t, null == o ? void 0 : o.allPowerups]),
    (null == o ? void 0 : o.powerupCatalog) == null)
        ? null
        : (0, r.jsxs)('div', {
              className: C.container,
              children: [
                  (0, r.jsxs)(u.Z, {
                      className: C.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)('div', {}),
                      children: [
                          (0, r.jsx)(u.Z.Icon, {
                              icon: l.$Eu,
                              'aria-label': ''
                          }),
                          (0, r.jsx)(u.Z.Title, { children: h.intl.string(b.default.yv3DJC) })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: C.contentContainer,
                      children: [
                          (0, r.jsx)(l.zJl, {
                              className: C.powerupsContainer,
                              children: N.map((e) => {
                                  let t = o.powerupCatalog[e];
                                  if (null == t) return;
                                  let { title: i, description: a } = (function (e) {
                                          switch (e) {
                                              case j.Us.LEVEL:
                                                  return {
                                                      title: h.intl.string(b.default['TXY/b2']),
                                                      description: h.intl.string(b.default.aJv4PD)
                                                  };
                                              case j.Us.PERK:
                                                  return {
                                                      title: h.intl.string(b.default.TV3Vm5),
                                                      description: h.intl.string(b.default.NHjM1t)
                                                  };
                                          }
                                      })(e),
                                      u = e === j.Us.LEVEL ? l.zJl : 'div';
                                  return (0, r.jsxs)(
                                      'div',
                                      {
                                          className: C.powerupsSection,
                                          children: [
                                              (0, r.jsxs)('div', {
                                                  className: C.powerupHorizontalPadding,
                                                  children: [
                                                      (0, r.jsxs)('div', {
                                                          className: C.headerContainer,
                                                          children: [
                                                              (0, r.jsx)(l.X6q, {
                                                                  color: 'header-primary',
                                                                  variant: 'heading-lg/semibold',
                                                                  children: i
                                                              }),
                                                              e === j.Us.PERK &&
                                                                  (0, r.jsx)(l.IGR, {
                                                                      text: h.intl.string(h.t.oW0eUV),
                                                                      color: c.Z.BG_BRAND
                                                                  })
                                                          ]
                                                      }),
                                                      (0, r.jsx)(l.Text, {
                                                          color: 'text-muted',
                                                          variant: 'text-sm/medium',
                                                          children: a
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)(u, {
                                                  orientation: 'horizontal',
                                                  className: s()(C.powerupContainer, C.powerupHorizontalPadding, { [C.powerupsLevelContainer]: e === j.Us.LEVEL }),
                                                  fade: !0,
                                                  children: t.map((e, i) => {
                                                      switch (e.type) {
                                                          case j.Us.LEVEL:
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
                                                          case j.Us.PERK:
                                                              return (0, r.jsx)(
                                                                  x.Z,
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
                              className: C.sidebarContainer,
                              children: [(0, r.jsx)(_.Z, { guildId: n }), (0, r.jsx)(f.Z, { guildId: n })]
                          })
                      ]
                  })
              ]
          });
}

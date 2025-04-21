t.d(n, { Z: () => Z }), t(953529);
var r = t(200651),
    i = t(192379),
    o = t(120356),
    s = t.n(o),
    a = t(442837),
    l = t(481060),
    c = t(377171),
    d = t(984370),
    u = t(713081),
    p = t(905128),
    m = t(27237),
    x = t(51859),
    _ = t(953478),
    f = t(460608),
    v = t(279604),
    g = t(332538),
    j = t(535396),
    h = t(680278),
    b = t(388032),
    C = t(782285);
let N = [j.Us.LEVEL, j.Us.PERK];
function Z(e) {
    let { guildId: n, powerupSkuId: t } = e;
    i.useEffect(() => {
        (0, u.Sn)(n), (0, u.Fm)(n);
    }, [n]),
        (0, g.Wj)(n);
    let o = (0, a.e7)([p.Z], () => p.Z.getStateForGuild(n)),
        Z = i.useRef(!1);
    return (i.useEffect(() => {
        var e, r;
        if (null == t) return;
        let i = null == o || null == (r = o.powerups) || null == (e = r.get) ? void 0 : e.call(r, t);
        null == i || Z.current || ((0, v.KE)(n, i), (Z.current = !0));
    }, [n, t, null == o ? void 0 : o.powerups]),
    (null == o ? void 0 : o.catalog) == null)
        ? null
        : (0, r.jsxs)('div', {
              className: C.container,
              children: [
                  (0, r.jsxs)(d.Z, {
                      className: C.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)('div', {}),
                      children: [
                          (0, r.jsx)(d.Z.Icon, {
                              icon: l.$Eu,
                              'aria-label': ''
                          }),
                          (0, r.jsx)(d.Z.Title, { children: b.intl.string(h.default.yv3DJC) })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: C.contentContainer,
                      children: [
                          (0, r.jsx)(l.zJl, {
                              className: C.powerupsContainer,
                              children: N.map((e) => {
                                  let t = o.catalog.get(e);
                                  if (null == t) return;
                                  let { title: i, description: a } = (function (e) {
                                          switch (e) {
                                              case j.Us.LEVEL:
                                                  return {
                                                      title: b.intl.string(h.default['TXY/b2']),
                                                      description: b.intl.string(h.default.aJv4PD)
                                                  };
                                              case j.Us.PERK:
                                                  return {
                                                      title: b.intl.string(h.default.TV3Vm5),
                                                      description: b.intl.string(h.default.NHjM1t)
                                                  };
                                          }
                                      })(e),
                                      d = e === j.Us.LEVEL ? l.zJl : 'div';
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
                                                                      text: b.intl.string(b.t.oW0eUV),
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
                                              (0, r.jsx)(d, {
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

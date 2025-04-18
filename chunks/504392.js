t.d(n, { Z: () => C }), t(953529);
var r = t(200651),
    o = t(192379),
    i = t(120356),
    s = t.n(i),
    a = t(442837),
    l = t(481060),
    c = t(377171),
    d = t(984370),
    u = t(713081),
    p = t(905128),
    m = t(27237),
    x = t(51859),
    _ = t(953478),
    v = t(460608),
    f = t(279604),
    g = t(332538),
    j = t(535396),
    h = t(696672),
    b = t(388032),
    N = t(988702);
let Z = [j.Us.LEVEL, j.Us.PERK];
function C(e) {
    let { guildId: n, powerupSkuId: t } = e;
    o.useEffect(() => {
        (0, u.Sn)(n), (0, u.Fm)(n);
    }, [n]),
        (0, g.Wj)(n);
    let i = (0, a.e7)([p.Z], () => p.Z.getStateForGuild(n)),
        C = o.useRef(!1);
    return (o.useEffect(() => {
        var e, r;
        if (null == t) return;
        let o = null == i || null == (r = i.powerups) || null == (e = r.get) ? void 0 : e.call(r, t);
        null == o || C.current || ((0, f.KE)(n, o), (C.current = !0));
    }, [n, t, null == i ? void 0 : i.powerups]),
    (null == i ? void 0 : i.catalog) == null)
        ? null
        : (0, r.jsxs)('div', {
              className: N.container,
              children: [
                  (0, r.jsxs)(d.Z, {
                      className: N.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)('div', {}),
                      children: [
                          (0, r.jsx)(d.Z.Icon, {
                              icon: l.$Eu,
                              'aria-label': ''
                          }),
                          (0, r.jsx)(d.Z.Title, { children: b.NW.string(h.Z.yv3DJC) })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: N.contentContainer,
                      children: [
                          (0, r.jsx)(l.zJl, {
                              className: N.powerupsContainer,
                              children: Z.map((e) => {
                                  let t = i.catalog.get(e);
                                  if (null == t) return;
                                  let { title: o, description: a } = (function (e) {
                                          switch (e) {
                                              case j.Us.LEVEL:
                                                  return {
                                                      title: b.NW.string(h.Z['TXY/b2']),
                                                      description: b.NW.string(h.Z.aJv4PD)
                                                  };
                                              case j.Us.PERK:
                                                  return {
                                                      title: b.NW.string(h.Z.TV3Vm5),
                                                      description: b.NW.string(h.Z.NHjM1t)
                                                  };
                                          }
                                      })(e),
                                      d = e === j.Us.LEVEL ? l.zJl : 'div';
                                  return (0, r.jsxs)(
                                      'div',
                                      {
                                          className: N.powerupsSection,
                                          children: [
                                              (0, r.jsxs)('div', {
                                                  className: N.powerupHorizontalPadding,
                                                  children: [
                                                      (0, r.jsxs)('div', {
                                                          className: N.headerContainer,
                                                          children: [
                                                              (0, r.jsx)(l.X6q, {
                                                                  color: 'header-primary',
                                                                  variant: 'heading-lg/semibold',
                                                                  children: o
                                                              }),
                                                              e === j.Us.PERK &&
                                                                  (0, r.jsx)(l.IGR, {
                                                                      text: b.NW.string(b.t.oW0eUV),
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
                                                  className: s()(N.powerupContainer, N.powerupHorizontalPadding, { [N.powerupsLevelContainer]: e === j.Us.LEVEL }),
                                                  fade: !0,
                                                  children: t.map((e, o) => {
                                                      switch (e.type) {
                                                          case j.Us.LEVEL:
                                                              return (0, r.jsx)(
                                                                  m.ZP,
                                                                  {
                                                                      guildId: n,
                                                                      index: o,
                                                                      powerup: e,
                                                                      nextPowerup: t[o + 1]
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
                              className: N.sidebarContainer,
                              children: [(0, r.jsx)(_.Z, { guildId: n }), (0, r.jsx)(v.Z, { guildId: n })]
                          })
                      ]
                  })
              ]
          });
}

t.d(n, { Z: () => f }), t(266796);
var r = t(200651),
    i = t(192379),
    o = t(442837),
    s = t(481060),
    a = t(413335),
    l = t(984370),
    c = t(713081),
    d = t(905128),
    u = t(27237),
    x = t(51859),
    p = t(953478),
    m = t(460608),
    v = t(279604),
    b = t(535396),
    _ = t(730621),
    j = t(388032),
    h = t(518871);
let g = [b.Us.LEVEL, b.Us.PERK];
function f(e) {
    let { guildId: n, powerupSkuId: t } = e;
    i.useEffect(() => {
        (0, c.Sn)(n), (0, c.Fm)(n);
    }, [n]);
    let f = (0, o.e7)([d.Z], () => d.Z.getStateForGuild(n)),
        Z = i.useRef(!1);
    return (i.useEffect(() => {
        var e, r;
        if (null == t) return;
        let i = null == f ? void 0 : null === (r = f.powerups) || void 0 === r ? void 0 : null === (e = r.get) || void 0 === e ? void 0 : e.call(r, t);
        null == i || Z.current || ((0, v.KE)(n, i), (Z.current = !0));
    }, [n, t, null == f ? void 0 : f.powerups]),
    (null == f ? void 0 : f.catalog) == null)
        ? null
        : (0, r.jsxs)('div', {
              className: h.container,
              children: [
                  (0, r.jsxs)(l.Z, {
                      hideSearch: !0,
                      toolbar: (0, r.jsx)('div', {}),
                      children: [
                          (0, r.jsx)(l.Z.Icon, {
                              icon: a.Z,
                              disabled: !0,
                              'aria-label': ''
                          }),
                          (0, r.jsx)(l.Z.Title, { children: j.NW.string(_.Z.yv3DJC) }),
                          (0, r.jsx)(l.Z.Divider, {})
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: h.contentContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: h.powerupsContainer,
                              children: g.map((e) => {
                                  let t = f.catalog.get(e);
                                  if (null == t) return;
                                  let { title: o, description: a } = (function (e) {
                                      switch (e) {
                                          case b.Us.LEVEL:
                                              return {
                                                  title: j.NW.string(_.Z['TXY/b2']),
                                                  description: j.NW.string(_.Z.aJv4PD)
                                              };
                                          case b.Us.PERK:
                                              return {
                                                  title: j.NW.string(_.Z.TV3Vm5),
                                                  description: j.NW.string(_.Z.NHjM1t)
                                              };
                                      }
                                  })(e);
                                  return (0, r.jsxs)(
                                      i.Fragment,
                                      {
                                          children: [
                                              (0, r.jsxs)('div', {
                                                  className: h.powerupTextContainer,
                                                  children: [
                                                      (0, r.jsx)(s.X6q, {
                                                          variant: 'heading-lg/semibold',
                                                          children: o
                                                      }),
                                                      (0, r.jsx)(s.Text, {
                                                          variant: 'text-sm/medium',
                                                          children: a
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)('div', {
                                                  className: h.powerupContainer,
                                                  children: t.map((e, i) => {
                                                      switch (e.type) {
                                                          case b.Us.LEVEL:
                                                              return (0, r.jsx)(
                                                                  u.ZP,
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
                              className: h.sidebarContainer,
                              children: [(0, r.jsx)(p.Z, { guildId: n }), (0, r.jsx)(m.Z, { guildId: n })]
                          })
                      ]
                  })
              ]
          });
}

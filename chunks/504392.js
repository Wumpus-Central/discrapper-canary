t.d(n, { Z: () => C }), t(266796);
var r = t(200651),
    i = t(192379),
    o = t(120356),
    s = t.n(o),
    a = t(442837),
    l = t(481060),
    c = t(413335),
    d = t(984370),
    u = t(713081),
    m = t(905128),
    x = t(27237),
    p = t(51859),
    v = t(953478),
    _ = t(460608),
    b = t(279604),
    j = t(332538),
    g = t(535396),
    Z = t(705507),
    h = t(388032),
    f = t(518871);
let N = [g.Us.LEVEL, g.Us.PERK];
function C(e) {
    let { guildId: n, powerupSkuId: t } = e,
        o = (0, j.Z)(n);
    i.useEffect(() => {
        (0, u.Sn)(n), (0, u.Fm)(n);
    }, [n]),
        i.useEffect(() => {
            (0, u.jd)(n);
        }, [n, o]);
    let C = (0, a.e7)([m.Z], () => m.Z.getStateForGuild(n)),
        w = i.useRef(!1);
    return (i.useEffect(() => {
        var e, r;
        if (null == t) return;
        let i = null == C ? void 0 : null === (r = C.powerups) || void 0 === r ? void 0 : null === (e = r.get) || void 0 === e ? void 0 : e.call(r, t);
        null == i || w.current || ((0, b.KE)(n, i), (w.current = !0));
    }, [n, t, null == C ? void 0 : C.powerups]),
    (null == C ? void 0 : C.catalog) == null)
        ? null
        : (0, r.jsxs)('div', {
              className: f.container,
              children: [
                  (0, r.jsxs)(d.Z, {
                      className: f.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)('div', {}),
                      children: [
                          (0, r.jsx)(d.Z.Icon, {
                              icon: c.Z,
                              disabled: !0,
                              'aria-label': ''
                          }),
                          (0, r.jsx)(d.Z.Title, { children: h.NW.string(Z.Z.yv3DJC) })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: f.contentContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: f.powerupsContainer,
                              children: N.map((e) => {
                                  let t = C.catalog.get(e);
                                  if (null == t) return;
                                  let { title: i, description: o } = (function (e) {
                                      switch (e) {
                                          case g.Us.LEVEL:
                                              return {
                                                  title: h.NW.string(Z.Z['TXY/b2']),
                                                  description: h.NW.string(Z.Z.aJv4PD)
                                              };
                                          case g.Us.PERK:
                                              return {
                                                  title: h.NW.string(Z.Z.TV3Vm5),
                                                  description: h.NW.string(Z.Z.NHjM1t)
                                              };
                                      }
                                  })(e);
                                  return (0, r.jsxs)(
                                      'div',
                                      {
                                          className: f.powerupsSection,
                                          children: [
                                              (0, r.jsxs)('div', {
                                                  children: [
                                                      (0, r.jsx)(l.X6q, {
                                                          color: 'header-primary',
                                                          variant: 'heading-lg/semibold',
                                                          children: i
                                                      }),
                                                      (0, r.jsx)(l.Text, {
                                                          color: 'text-muted',
                                                          variant: 'text-sm/medium',
                                                          children: o
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)('div', {
                                                  className: s()(f.powerupContainer, { [f.powerupsLevelContainer]: e === g.Us.LEVEL }),
                                                  children: t.map((e, i) => {
                                                      switch (e.type) {
                                                          case g.Us.LEVEL:
                                                              return (0, r.jsx)(
                                                                  x.ZP,
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
                                                                  p.Z,
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
                              className: f.sidebarContainer,
                              children: [(0, r.jsx)(v.Z, { guildId: n }), (0, r.jsx)(_.Z, { guildId: n })]
                          })
                      ]
                  })
              ]
          });
}

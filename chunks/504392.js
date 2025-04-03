t.d(n, { Z: () => C }), t(266796);
var r = t(200651),
    o = t(192379),
    i = t(120356),
    s = t.n(i),
    a = t(442837),
    l = t(481060),
    c = t(413335),
    d = t(984370),
    u = t(713081),
    p = t(905128),
    m = t(27237),
    x = t(51859),
    _ = t(953478),
    v = t(460608),
    f = t(279604),
    b = t(332538),
    g = t(535396),
    j = t(680278),
    h = t(388032),
    Z = t(782285);
let N = [g.Us.LEVEL, g.Us.PERK];
function C(e) {
    let { guildId: n, powerupSkuId: t } = e,
        i = (0, b.Z)(n);
    o.useEffect(() => {
        (0, u.Sn)(n), (0, u.Fm)(n);
    }, [n]),
        o.useEffect(() => {
            (0, u.jd)(n);
        }, [n, i]);
    let C = (0, a.e7)([p.Z], () => p.Z.getStateForGuild(n)),
        w = o.useRef(!1);
    return (o.useEffect(() => {
        var e, r;
        if (null == t) return;
        let o = null == C || null == (r = C.powerups) || null == (e = r.get) ? void 0 : e.call(r, t);
        null == o || w.current || ((0, f.KE)(n, o), (w.current = !0));
    }, [n, t, null == C ? void 0 : C.powerups]),
    (null == C ? void 0 : C.catalog) == null)
        ? null
        : (0, r.jsxs)('div', {
              className: Z.container,
              children: [
                  (0, r.jsxs)(d.Z, {
                      className: Z.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)('div', {}),
                      children: [
                          (0, r.jsx)(d.Z.Icon, {
                              icon: c.Z,
                              disabled: !0,
                              'aria-label': ''
                          }),
                          (0, r.jsx)(d.Z.Title, { children: h.NW.string(j.Z.yv3DJC) })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: Z.contentContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: Z.powerupsContainer,
                              children: N.map((e) => {
                                  let t = C.catalog.get(e);
                                  if (null == t) return;
                                  let { title: o, description: i } = (function (e) {
                                      switch (e) {
                                          case g.Us.LEVEL:
                                              return {
                                                  title: h.NW.string(j.Z['TXY/b2']),
                                                  description: h.NW.string(j.Z.aJv4PD)
                                              };
                                          case g.Us.PERK:
                                              return {
                                                  title: h.NW.string(j.Z.TV3Vm5),
                                                  description: h.NW.string(j.Z.NHjM1t)
                                              };
                                      }
                                  })(e);
                                  return (0, r.jsxs)(
                                      'div',
                                      {
                                          className: Z.powerupsSection,
                                          children: [
                                              (0, r.jsxs)('div', {
                                                  children: [
                                                      (0, r.jsx)(l.X6q, {
                                                          color: 'header-primary',
                                                          variant: 'heading-lg/semibold',
                                                          children: o
                                                      }),
                                                      (0, r.jsx)(l.Text, {
                                                          color: 'text-muted',
                                                          variant: 'text-sm/medium',
                                                          children: i
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)('div', {
                                                  className: s()(Z.powerupContainer, { [Z.powerupsLevelContainer]: e === g.Us.LEVEL }),
                                                  children: t.map((e, o) => {
                                                      switch (e.type) {
                                                          case g.Us.LEVEL:
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
                                                          case g.Us.PERK:
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
                              className: Z.sidebarContainer,
                              children: [(0, r.jsx)(_.Z, { guildId: n }), (0, r.jsx)(v.Z, { guildId: n })]
                          })
                      ]
                  })
              ]
          });
}

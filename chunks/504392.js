t.d(n, { Z: () => C }), t(953529);
var r = t(200651),
    o = t(192379),
    s = t(120356),
    i = t.n(s),
    a = t(442837),
    l = t(481060),
    c = t(984370),
    u = t(713081),
    d = t(905128),
    m = t(27237),
    p = t(51859),
    x = t(953478),
    _ = t(460608),
    v = t(279604),
    g = t(332538),
    f = t(535396),
    b = t(921944),
    j = t(680278),
    h = t(388032),
    Z = t(782285);
let N = [f.Us.LEVEL, f.Us.PERK];
function C(e) {
    let { guildId: n, powerupSkuId: t } = e,
        s = (0, g.ZP)(n);
    o.useEffect(() => {
        (0, u.Sn)(n), (0, u.Fm)(n);
    }, [n]),
        o.useEffect(() => {
            var e;
            (0, u.jd)(n), null == s || null == (e = s.popout) || e.markAsDismissed(b.L.AUTO_DISMISS);
        }, [n, s]);
    let C = (0, a.e7)([d.Z], () => d.Z.getStateForGuild(n)),
        E = o.useRef(!1);
    return (o.useEffect(() => {
        var e, r;
        if (null == t) return;
        let o = null == C || null == (r = C.powerups) || null == (e = r.get) ? void 0 : e.call(r, t);
        null == o || E.current || ((0, v.KE)(n, o), (E.current = !0));
    }, [n, t, null == C ? void 0 : C.powerups]),
    (null == C ? void 0 : C.catalog) == null)
        ? null
        : (0, r.jsxs)('div', {
              className: Z.container,
              children: [
                  (0, r.jsxs)(c.Z, {
                      className: Z.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)('div', {}),
                      children: [
                          (0, r.jsx)(c.Z.Icon, {
                              icon: l.$Eu,
                              disabled: !0,
                              'aria-label': ''
                          }),
                          (0, r.jsx)(c.Z.Title, { children: h.NW.string(j.Z.yv3DJC) })
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
                                  let { title: o, description: s } = (function (e) {
                                      switch (e) {
                                          case f.Us.LEVEL:
                                              return {
                                                  title: h.NW.string(j.Z['TXY/b2']),
                                                  description: h.NW.string(j.Z.aJv4PD)
                                              };
                                          case f.Us.PERK:
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
                                                          children: s
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)('div', {
                                                  className: i()(Z.powerupContainer, { [Z.powerupsLevelContainer]: e === f.Us.LEVEL }),
                                                  children: t.map((e, o) => {
                                                      switch (e.type) {
                                                          case f.Us.LEVEL:
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
                                                          case f.Us.PERK:
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
                              className: Z.sidebarContainer,
                              children: [(0, r.jsx)(x.Z, { guildId: n }), (0, r.jsx)(_.Z, { guildId: n })]
                          })
                      ]
                  })
              ]
          });
}

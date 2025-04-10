t.d(n, { Z: () => I }), t(953529);
var r = t(200651),
    o = t(192379),
    s = t(120356),
    i = t.n(s),
    a = t(442837),
    l = t(481060),
    c = t(377171),
    u = t(984370),
    d = t(713081),
    m = t(905128),
    p = t(27237),
    x = t(51859),
    _ = t(953478),
    v = t(460608),
    g = t(279604),
    f = t(332538),
    b = t(535396),
    j = t(921944),
    h = t(680278),
    Z = t(388032),
    N = t(782285);
let C = [b.Us.LEVEL, b.Us.PERK];
function I(e) {
    let { guildId: n, powerupSkuId: t } = e,
        s = (0, f.ZP)(n);
    o.useEffect(() => {
        (0, d.Sn)(n), (0, d.Fm)(n);
    }, [n]),
        o.useEffect(() => {
            var e;
            (0, d.jd)(n), null == s || null == (e = s.popout) || e.markAsDismissed(j.L.AUTO_DISMISS);
        }, [n, s]);
    let I = (0, a.e7)([m.Z], () => m.Z.getStateForGuild(n)),
        E = o.useRef(!1);
    return (o.useEffect(() => {
        var e, r;
        if (null == t) return;
        let o = null == I || null == (r = I.powerups) || null == (e = r.get) ? void 0 : e.call(r, t);
        null == o || E.current || ((0, g.KE)(n, o), (E.current = !0));
    }, [n, t, null == I ? void 0 : I.powerups]),
    (null == I ? void 0 : I.catalog) == null)
        ? null
        : (0, r.jsxs)('div', {
              className: N.container,
              children: [
                  (0, r.jsxs)(u.Z, {
                      className: N.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)('div', {}),
                      children: [
                          (0, r.jsx)(u.Z.Icon, {
                              icon: l.$Eu,
                              disabled: !0,
                              'aria-label': ''
                          }),
                          (0, r.jsx)(u.Z.Title, { children: Z.NW.string(h.Z.yv3DJC) })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: N.contentContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: N.powerupsContainer,
                              children: C.map((e) => {
                                  let t = I.catalog.get(e);
                                  if (null == t) return;
                                  let { title: o, description: s } = (function (e) {
                                      switch (e) {
                                          case b.Us.LEVEL:
                                              return {
                                                  title: Z.NW.string(h.Z['TXY/b2']),
                                                  description: Z.NW.string(h.Z.aJv4PD)
                                              };
                                          case b.Us.PERK:
                                              return {
                                                  title: Z.NW.string(h.Z.TV3Vm5),
                                                  description: Z.NW.string(h.Z.NHjM1t)
                                              };
                                      }
                                  })(e);
                                  return (0, r.jsxs)(
                                      'div',
                                      {
                                          className: N.powerupsSection,
                                          children: [
                                              (0, r.jsxs)('div', {
                                                  children: [
                                                      (0, r.jsxs)('div', {
                                                          className: N.headerContainer,
                                                          children: [
                                                              (0, r.jsx)(l.X6q, {
                                                                  color: 'header-primary',
                                                                  variant: 'heading-lg/semibold',
                                                                  children: o
                                                              }),
                                                              e === b.Us.PERK &&
                                                                  (0, r.jsx)(l.IGR, {
                                                                      text: Z.NW.string(Z.t.oW0eUV),
                                                                      color: c.Z.BG_BRAND
                                                                  })
                                                          ]
                                                      }),
                                                      (0, r.jsx)(l.Text, {
                                                          color: 'text-muted',
                                                          variant: 'text-sm/medium',
                                                          children: s
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)('div', {
                                                  className: i()(N.powerupContainer, { [N.powerupsLevelContainer]: e === b.Us.LEVEL }),
                                                  children: t.map((e, o) => {
                                                      switch (e.type) {
                                                          case b.Us.LEVEL:
                                                              return (0, r.jsx)(
                                                                  p.ZP,
                                                                  {
                                                                      guildId: n,
                                                                      index: o,
                                                                      powerup: e,
                                                                      nextPowerup: t[o + 1]
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
                              className: N.sidebarContainer,
                              children: [(0, r.jsx)(_.Z, { guildId: n }), (0, r.jsx)(v.Z, { guildId: n })]
                          })
                      ]
                  })
              ]
          });
}

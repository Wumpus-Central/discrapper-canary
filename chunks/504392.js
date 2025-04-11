t.d(n, { Z: () => E }), t(953529);
var r = t(200651),
    o = t(192379),
    s = t(120356),
    i = t.n(s),
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
    b = t(921944),
    h = t(680278),
    N = t(388032),
    Z = t(782285);
let C = [j.Us.LEVEL, j.Us.PERK];
function E(e) {
    let { guildId: n, powerupSkuId: t } = e,
        s = (0, g.ZP)(n);
    o.useEffect(() => {
        (0, u.Sn)(n), (0, u.Fm)(n);
    }, [n]),
        o.useEffect(() => {
            var e;
            (0, u.jd)(n), null == s || null == (e = s.popout) || e.markAsDismissed(b.L.AUTO_DISMISS);
        }, [n, s]);
    let E = (0, a.e7)([p.Z], () => p.Z.getStateForGuild(n)),
        I = o.useRef(!1);
    return (o.useEffect(() => {
        var e, r;
        if (null == t) return;
        let o = null == E || null == (r = E.powerups) || null == (e = r.get) ? void 0 : e.call(r, t);
        null == o || I.current || ((0, f.KE)(n, o), (I.current = !0));
    }, [n, t, null == E ? void 0 : E.powerups]),
    (null == E ? void 0 : E.catalog) == null)
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
                              icon: l.$Eu,
                              disabled: !0,
                              'aria-label': ''
                          }),
                          (0, r.jsx)(d.Z.Title, { children: N.NW.string(h.Z.yv3DJC) })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: Z.contentContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: Z.powerupsContainer,
                              children: C.map((e) => {
                                  let t = E.catalog.get(e);
                                  if (null == t) return;
                                  let { title: o, description: s } = (function (e) {
                                          switch (e) {
                                              case j.Us.LEVEL:
                                                  return {
                                                      title: N.NW.string(h.Z['TXY/b2']),
                                                      description: N.NW.string(h.Z.aJv4PD)
                                                  };
                                              case j.Us.PERK:
                                                  return {
                                                      title: N.NW.string(h.Z.TV3Vm5),
                                                      description: N.NW.string(h.Z.NHjM1t)
                                                  };
                                          }
                                      })(e),
                                      a = e === j.Us.LEVEL ? l.zJl : 'div';
                                  return (0, r.jsxs)(
                                      'div',
                                      {
                                          className: Z.powerupsSection,
                                          children: [
                                              (0, r.jsxs)('div', {
                                                  children: [
                                                      (0, r.jsxs)('div', {
                                                          className: Z.headerContainer,
                                                          children: [
                                                              (0, r.jsx)(l.X6q, {
                                                                  color: 'header-primary',
                                                                  variant: 'heading-lg/semibold',
                                                                  children: o
                                                              }),
                                                              e === j.Us.PERK &&
                                                                  (0, r.jsx)(l.IGR, {
                                                                      text: N.NW.string(N.t.oW0eUV),
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
                                              (0, r.jsx)(a, {
                                                  orientation: 'horizontal',
                                                  className: i()(Z.powerupContainer, { [Z.powerupsLevelContainer]: e === j.Us.LEVEL }),
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
                              className: Z.sidebarContainer,
                              children: [(0, r.jsx)(_.Z, { guildId: n }), (0, r.jsx)(v.Z, { guildId: n })]
                          })
                      ]
                  })
              ]
          });
}

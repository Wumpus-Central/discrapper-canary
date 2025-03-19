t.d(n, { Z: () => Z }), t(266796);
var i = t(200651),
    r = t(192379),
    s = t(442837),
    o = t(481060),
    a = t(413335),
    l = t(984370),
    c = t(713081),
    d = t(905128),
    u = t(27237),
    x = t(51859),
    m = t(953478),
    v = t(460608),
    _ = t(279604),
    p = t(332538),
    b = t(535396),
    j = t(367123),
    h = t(388032),
    g = t(518871);
let f = [b.Us.LEVEL, b.Us.PERK];
function Z(e) {
    let { guildId: n, powerupSkuId: t } = e,
        Z = (0, p.Z)(n);
    r.useEffect(() => {
        (0, c.Sn)(n), (0, c.Fm)(n);
    }, [n]),
        r.useEffect(() => {
            (0, c.jd)(n);
        }, [n, Z]);
    let N = (0, s.e7)([d.Z], () => d.Z.getStateForGuild(n)),
        C = r.useRef(!1);
    return (r.useEffect(() => {
        var e, i;
        if (null == t) return;
        let r = null == N ? void 0 : null === (i = N.powerups) || void 0 === i ? void 0 : null === (e = i.get) || void 0 === e ? void 0 : e.call(i, t);
        null == r || C.current || ((0, _.KE)(n, r), (C.current = !0));
    }, [n, t, null == N ? void 0 : N.powerups]),
    (null == N ? void 0 : N.catalog) == null)
        ? null
        : (0, i.jsxs)('div', {
              className: g.container,
              children: [
                  (0, i.jsxs)(l.Z, {
                      hideSearch: !0,
                      toolbar: (0, i.jsx)('div', {}),
                      children: [
                          (0, i.jsx)(l.Z.Icon, {
                              icon: a.Z,
                              disabled: !0,
                              'aria-label': ''
                          }),
                          (0, i.jsx)(l.Z.Title, { children: h.NW.string(j.Z.yv3DJC) }),
                          (0, i.jsx)(l.Z.Divider, {})
                      ]
                  }),
                  (0, i.jsxs)('div', {
                      className: g.contentContainer,
                      children: [
                          (0, i.jsx)('div', {
                              className: g.powerupsContainer,
                              children: f.map((e) => {
                                  let t = N.catalog.get(e);
                                  if (null == t) return;
                                  let { title: s, description: a } = (function (e) {
                                      switch (e) {
                                          case b.Us.LEVEL:
                                              return {
                                                  title: h.NW.string(j.Z['TXY/b2']),
                                                  description: h.NW.string(j.Z.aJv4PD)
                                              };
                                          case b.Us.PERK:
                                              return {
                                                  title: h.NW.string(j.Z.TV3Vm5),
                                                  description: h.NW.string(j.Z.NHjM1t)
                                              };
                                      }
                                  })(e);
                                  return (0, i.jsxs)(
                                      r.Fragment,
                                      {
                                          children: [
                                              (0, i.jsxs)('div', {
                                                  className: g.powerupTextContainer,
                                                  children: [
                                                      (0, i.jsx)(o.X6q, {
                                                          variant: 'heading-lg/semibold',
                                                          children: s
                                                      }),
                                                      (0, i.jsx)(o.Text, {
                                                          variant: 'text-sm/medium',
                                                          children: a
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)('div', {
                                                  className: g.powerupContainer,
                                                  children: t.map((e, r) => {
                                                      switch (e.type) {
                                                          case b.Us.LEVEL:
                                                              return (0, i.jsx)(
                                                                  u.ZP,
                                                                  {
                                                                      guildId: n,
                                                                      index: r,
                                                                      powerup: e,
                                                                      nextPowerup: t[r + 1]
                                                                  },
                                                                  'powerup-'.concat(e.skuId)
                                                              );
                                                          case b.Us.PERK:
                                                              return (0, i.jsx)(
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
                          (0, i.jsxs)('div', {
                              className: g.sidebarContainer,
                              children: [(0, i.jsx)(m.Z, { guildId: n }), (0, i.jsx)(v.Z, { guildId: n })]
                          })
                      ]
                  })
              ]
          });
}

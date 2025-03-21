t.d(n, { Z: () => f }), t(266796);
var i = t(200651),
    r = t(192379),
    o = t(442837),
    s = t(481060),
    a = t(413335),
    l = t(984370),
    c = t(713081),
    d = t(905128),
    u = t(27237),
    m = t(51859),
    x = t(953478),
    v = t(460608),
    p = t(279604),
    _ = t(332538),
    b = t(535396),
    j = t(367123),
    g = t(388032),
    h = t(518871);
let Z = [b.Us.LEVEL, b.Us.PERK];
function f(e) {
    let { guildId: n, powerupSkuId: t } = e,
        f = (0, _.Z)(n);
    r.useEffect(() => {
        (0, c.Sn)(n), (0, c.Fm)(n);
    }, [n]),
        r.useEffect(() => {
            (0, c.jd)(n);
        }, [n, f]);
    let N = (0, o.e7)([d.Z], () => d.Z.getStateForGuild(n)),
        C = r.useRef(!1);
    return (r.useEffect(() => {
        var e, i;
        if (null == t) return;
        let r = null == N ? void 0 : null === (i = N.powerups) || void 0 === i ? void 0 : null === (e = i.get) || void 0 === e ? void 0 : e.call(i, t);
        null == r || C.current || ((0, p.KE)(n, r), (C.current = !0));
    }, [n, t, null == N ? void 0 : N.powerups]),
    (null == N ? void 0 : N.catalog) == null)
        ? null
        : (0, i.jsxs)('div', {
              className: h.container,
              children: [
                  (0, i.jsxs)(l.Z, {
                      className: h.toolbar,
                      hideSearch: !0,
                      toolbar: (0, i.jsx)('div', {}),
                      children: [
                          (0, i.jsx)(l.Z.Icon, {
                              icon: a.Z,
                              disabled: !0,
                              'aria-label': ''
                          }),
                          (0, i.jsx)(l.Z.Title, { children: g.NW.string(j.Z.yv3DJC) })
                      ]
                  }),
                  (0, i.jsxs)('div', {
                      className: h.contentContainer,
                      children: [
                          (0, i.jsx)('div', {
                              className: h.powerupsContainer,
                              children: Z.map((e) => {
                                  let t = N.catalog.get(e);
                                  if (null == t) return;
                                  let { title: r, description: o } = (function (e) {
                                      switch (e) {
                                          case b.Us.LEVEL:
                                              return {
                                                  title: g.NW.string(j.Z['TXY/b2']),
                                                  description: g.NW.string(j.Z.aJv4PD)
                                              };
                                          case b.Us.PERK:
                                              return {
                                                  title: g.NW.string(j.Z.TV3Vm5),
                                                  description: g.NW.string(j.Z.NHjM1t)
                                              };
                                      }
                                  })(e);
                                  return (0, i.jsxs)(
                                      'div',
                                      {
                                          className: h.powerupsSection,
                                          children: [
                                              (0, i.jsxs)('div', {
                                                  children: [
                                                      (0, i.jsx)(s.X6q, {
                                                          color: 'header-primary',
                                                          variant: 'heading-lg/semibold',
                                                          children: r
                                                      }),
                                                      (0, i.jsx)(s.Text, {
                                                          color: 'text-muted',
                                                          variant: 'text-sm/medium',
                                                          children: o
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)('div', {
                                                  className: h.powerupContainer,
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
                                                                  m.Z,
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
                              className: h.sidebarContainer,
                              children: [(0, i.jsx)(x.Z, { guildId: n }), (0, i.jsx)(v.Z, { guildId: n })]
                          })
                      ]
                  })
              ]
          });
}

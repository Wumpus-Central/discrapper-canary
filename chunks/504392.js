t.d(n, { Z: () => _ });
var r = t(200651),
    i = t(192379),
    o = t(481060),
    a = t(413335),
    s = t(984370),
    l = t(713081),
    c = t(111360),
    d = t(27237),
    u = t(51859),
    x = t(953478),
    p = t(460608),
    b = t(535396),
    v = t(730621),
    j = t(388032),
    m = t(518871);
let h = [b.U.LEVEL, b.U.PERK];
function _(e) {
    let { guildId: n } = e;
    i.useEffect(() => {
        (0, l.T7)(n);
    }, [n]);
    let t = (0, c.Z)(n);
    return null == t
        ? null
        : (0, r.jsxs)('div', {
              className: m.container,
              children: [
                  (0, r.jsxs)(s.Z, {
                      hideSearch: !0,
                      toolbar: (0, r.jsx)('div', {}),
                      children: [
                          (0, r.jsx)(s.Z.Icon, {
                              icon: (0, o.GSL)(a.Z),
                              disabled: !0,
                              'aria-label': ''
                          }),
                          (0, r.jsx)(s.Z.Title, { children: j.NW.string(v.Z.yv3DJC) }),
                          (0, r.jsx)(s.Z.Divider, {})
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: m.contentContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: m.powerupsContainer,
                              children: h.map((e) => {
                                  let a = t[e];
                                  if (null != a)
                                      return (0, r.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, r.jsxs)('div', {
                                                      className: m.powerupTextContainer,
                                                      children: [
                                                          (0, r.jsx)(o.X6q, {
                                                              variant: 'heading-lg/semibold',
                                                              children: j.NW.string(v.Z['TXY/b2'])
                                                          }),
                                                          (0, r.jsx)(o.Text, {
                                                              variant: 'text-sm/medium',
                                                              children: j.NW.string(v.Z.aJv4PD)
                                                          })
                                                      ]
                                                  }),
                                                  (0, r.jsx)('div', {
                                                      className: m.powerupContainer,
                                                      children: a.map((e, t) => {
                                                          switch (e.type) {
                                                              case b.U.LEVEL:
                                                                  return (0, r.jsx)(
                                                                      d.ZP,
                                                                      {
                                                                          guildId: n,
                                                                          index: t,
                                                                          powerup: e,
                                                                          nextPowerup: a[t + 1]
                                                                      },
                                                                      'powerup-'.concat(e.skuId)
                                                                  );
                                                              case b.U.PERK:
                                                                  return (0, r.jsx)(
                                                                      u.Z,
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
                              className: m.sidebarContainer,
                              children: [(0, r.jsx)(x.Z, { guildId: n }), (0, r.jsx)(p.Z, { guildId: n })]
                          })
                      ]
                  })
              ]
          });
}

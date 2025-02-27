t.d(n, { Z: () => f });
var i = t(200651),
    r = t(192379),
    o = t(442837),
    a = t(481060),
    s = t(413335),
    c = t(984370),
    l = t(713081),
    d = t(905128),
    u = t(27237),
    x = t(51859),
    v = t(953478),
    p = t(460608),
    _ = t(535396),
    b = t(783684),
    m = t(388032),
    h = t(748448);
let j = [_.U.LEVEL, _.U.PERK];
function f(e) {
    let { guildId: n } = e;
    r.useEffect(() => {
        (0, l.T7)(n, !0);
    }, [n]);
    let t = (0, o.e7)([d.Z], () => {
        var e;
        return null === (e = d.Z.getStateForGuild(n)) || void 0 === e ? void 0 : e.catalog;
    });
    return null == t
        ? null
        : (0, i.jsxs)('div', {
              className: h.container,
              children: [
                  (0, i.jsxs)(c.Z, {
                      hideSearch: !0,
                      toolbar: (0, i.jsx)('div', {}),
                      children: [
                          (0, i.jsx)(c.Z.Icon, {
                              icon: (0, a.GSL)(s.Z),
                              disabled: !0,
                              'aria-label': ''
                          }),
                          (0, i.jsx)(c.Z.Title, { children: m.NW.string(b.Z.yv3DJC) }),
                          (0, i.jsx)(c.Z.Divider, {})
                      ]
                  }),
                  (0, i.jsxs)('div', {
                      className: h.contentContainer,
                      children: [
                          (0, i.jsx)('div', {
                              className: h.powerupsContainer,
                              children: j.map((e) => {
                                  let o = t[e];
                                  if (null != o)
                                      return (0, i.jsxs)(
                                          r.Fragment,
                                          {
                                              children: [
                                                  (0, i.jsxs)('div', {
                                                      className: h.powerupTextContainer,
                                                      children: [
                                                          (0, i.jsx)(a.X6q, {
                                                              variant: 'heading-lg/semibold',
                                                              children: m.NW.string(b.Z['TXY/b2'])
                                                          }),
                                                          (0, i.jsx)(a.Text, {
                                                              variant: 'text-sm/medium',
                                                              children: m.NW.string(b.Z.aJv4PD)
                                                          })
                                                      ]
                                                  }),
                                                  (0, i.jsx)('div', {
                                                      className: h.powerupContainer,
                                                      children: o.map((e, t) => {
                                                          switch (e.type) {
                                                              case _.U.LEVEL:
                                                                  return (0, i.jsx)(
                                                                      u.ZP,
                                                                      {
                                                                          guildId: n,
                                                                          index: t,
                                                                          powerup: e,
                                                                          nextPowerup: o[t + 1]
                                                                      },
                                                                      'powerup-'.concat(e.skuId)
                                                                  );
                                                              case _.U.PERK:
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
                              className: h.sidebarContainer,
                              children: [(0, i.jsx)(v.Z, { guildId: n }), (0, i.jsx)(p.Z, { guildId: n })]
                          })
                      ]
                  })
              ]
          });
}

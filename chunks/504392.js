t.d(n, { Z: () => C });
var r = t(200651),
    i = t(192379),
    o = t(442837),
    a = t(481060),
    s = t(413335),
    c = t(984370),
    l = t(713081),
    d = t(905128),
    u = t(11658),
    x = t(166351),
    v = t(953478),
    m = t(460608),
    p = t(535396),
    j = t(783684),
    b = t(388032),
    h = t(748448);
let _ = [p.U.LEVEL, p.U.PERK];
function C(e) {
    let { guildId: n } = e;
    i.useEffect(() => {
        (0, l.T7)(n);
    }, [n]);
    let t = (0, o.e7)([d.Z], () => {
        var e;
        return null === (e = d.Z.getStateForGuild(n)) || void 0 === e ? void 0 : e.catalog;
    });
    return null == t
        ? null
        : (0, r.jsxs)('div', {
              className: h.container,
              children: [
                  (0, r.jsxs)(c.Z, {
                      hideSearch: !0,
                      toolbar: (0, r.jsx)('div', {}),
                      children: [
                          (0, r.jsx)(c.Z.Icon, {
                              icon: (0, a.GSL)(s.Z),
                              disabled: !0,
                              'aria-label': ''
                          }),
                          (0, r.jsx)(c.Z.Title, { children: b.NW.string(j.Z.yv3DJC) }),
                          (0, r.jsx)(c.Z.Divider, {})
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: h.contentContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: h.powerupsContainer,
                              children: _.map((e) => {
                                  let n = t[e];
                                  if (null != n)
                                      return (0, r.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, r.jsxs)('div', {
                                                      className: h.powerupTextContainer,
                                                      children: [
                                                          (0, r.jsx)(a.X6q, {
                                                              variant: 'heading-lg/semibold',
                                                              children: b.NW.string(j.Z['TXY/b2'])
                                                          }),
                                                          (0, r.jsx)(a.Text, {
                                                              variant: 'text-sm/medium',
                                                              children: b.NW.string(j.Z.aJv4PD)
                                                          })
                                                      ]
                                                  }),
                                                  (0, r.jsx)('div', {
                                                      className: h.powerupContainer,
                                                      children: n.map((e, t) => {
                                                          switch (e.type) {
                                                              case p.U.LEVEL:
                                                                  return (0, r.jsx)(
                                                                      u.ZP,
                                                                      {
                                                                          index: t,
                                                                          powerup: e,
                                                                          nextPowerup: n[t + 1]
                                                                      },
                                                                      'powerup-'.concat(e.skuId)
                                                                  );
                                                              case p.U.PERK:
                                                                  return (0, r.jsx)(x.Z, { powerup: e }, 'powerup-'.concat(e.skuId));
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
                              children: [(0, r.jsx)(v.Z, { guildId: n }), (0, r.jsx)(m.Z, { guildId: n })]
                          })
                      ]
                  })
              ]
          });
}

t.d(n, { Z: () => Z });
var r = t(200651),
    i = t(192379),
    o = t(442837),
    a = t(481060),
    s = t(413335),
    l = t(984370),
    c = t(713081),
    d = t(905128),
    u = t(111360),
    v = t(27237),
    p = t(51859),
    x = t(953478),
    b = t(460608),
    m = t(279604),
    j = t(535396),
    _ = t(730621),
    f = t(388032),
    h = t(518871);
let g = [j.Us.LEVEL, j.Us.PERK];
function Z(e) {
    let { guildId: n, powerupSkuId: t } = e;
    i.useEffect(() => {
        (0, c.Sn)(n), (0, c.Fm)(n);
    }, [n]);
    let Z = (0, u.Z)(n),
        C = (0, o.e7)([d.Z], () => {
            var e;
            return null === (e = d.Z.getStateForGuild(n)) || void 0 === e ? void 0 : e.powerups;
        }),
        N = i.useRef(!1);
    return (i.useEffect(() => {
        var e;
        if (null == t) return;
        let r = null == C ? void 0 : null === (e = C.get) || void 0 === e ? void 0 : e.call(C, t);
        null == r || N.current || ((0, m.KE)(n, r), (N.current = !0));
    }, [n, t, C]),
    null == Z)
        ? null
        : (0, r.jsxs)('div', {
              className: h.container,
              children: [
                  (0, r.jsxs)(l.Z, {
                      hideSearch: !0,
                      toolbar: (0, r.jsx)('div', {}),
                      children: [
                          (0, r.jsx)(l.Z.Icon, {
                              icon: s.Z,
                              disabled: !0,
                              'aria-label': ''
                          }),
                          (0, r.jsx)(l.Z.Title, { children: f.NW.string(_.Z.yv3DJC) }),
                          (0, r.jsx)(l.Z.Divider, {})
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: h.contentContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: h.powerupsContainer,
                              children: g.map((e) => {
                                  let t = Z.get(e);
                                  if (null != t)
                                      return (0, r.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, r.jsxs)('div', {
                                                      className: h.powerupTextContainer,
                                                      children: [
                                                          (0, r.jsx)(a.X6q, {
                                                              variant: 'heading-lg/semibold',
                                                              children: f.NW.string(_.Z['TXY/b2'])
                                                          }),
                                                          (0, r.jsx)(a.Text, {
                                                              variant: 'text-sm/medium',
                                                              children: f.NW.string(_.Z.aJv4PD)
                                                          })
                                                      ]
                                                  }),
                                                  (0, r.jsx)('div', {
                                                      className: h.powerupContainer,
                                                      children: t.map((e, i) => {
                                                          switch (e.type) {
                                                              case j.Us.LEVEL:
                                                                  return (0, r.jsx)(
                                                                      v.ZP,
                                                                      {
                                                                          guildId: n,
                                                                          index: i,
                                                                          powerup: e,
                                                                          nextPowerup: t[i + 1]
                                                                      },
                                                                      'powerup-'.concat(e.skuId)
                                                                  );
                                                              case j.Us.PERK:
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
                              className: h.sidebarContainer,
                              children: [(0, r.jsx)(x.Z, { guildId: n }), (0, r.jsx)(b.Z, { guildId: n })]
                          })
                      ]
                  })
              ]
          });
}

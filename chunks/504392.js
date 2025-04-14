t.d(n, { Z: () => w }), t(953529);
var r = t(200651),
    o = t(192379),
    s = t(120356),
    i = t.n(s),
    a = t(442837),
    l = t(481060),
    c = t(377171),
    d = t(984370),
    u = t(430824),
    m = t(713081),
    p = t(905128),
    x = t(27237),
    _ = t(51859),
    v = t(953478),
    f = t(460608),
    g = t(279604),
    h = t(332538),
    j = t(535396),
    b = t(981631),
    N = t(921944),
    C = t(680278),
    Z = t(388032),
    E = t(782285);
let I = [j.Us.LEVEL, j.Us.PERK];
function w(e) {
    let { guildId: n, powerupSkuId: t } = e,
        s = (0, h.ZP)(n);
    o.useEffect(() => {
        (0, m.Sn)(n), (0, m.Fm)(n);
    }, [n]),
        o.useEffect(() => {
            var e;
            (0, m.jd)(n), null == s || null == (e = s.popout) || e.markAsDismissed(N.L.AUTO_DISMISS);
        }, [n, s]);
    let w = (0, a.e7)([p.Z], () => p.Z.getStateForGuild(n)),
        S = (0, a.e7)([u.Z], () => {
            var e;
            return (null == (e = u.Z.getGuild(n)) ? void 0 : e.hasFeature(b.oNc.INTERNAL_EMPLOYEE_ONLY)) === !0;
        }),
        T = o.useRef(!1);
    return (o.useEffect(() => {
        var e, r;
        if (null == t) return;
        let o = null == w || null == (r = w.powerups) || null == (e = r.get) ? void 0 : e.call(r, t);
        null == o || T.current || ((0, g.KE)(n, o), (T.current = !0));
    }, [n, t, null == w ? void 0 : w.powerups]),
    (null == w ? void 0 : w.catalog) == null)
        ? null
        : (0, r.jsxs)('div', {
              className: E.container,
              children: [
                  (0, r.jsxs)(d.Z, {
                      className: E.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)('div', {}),
                      children: [
                          (0, r.jsx)(d.Z.Icon, {
                              icon: l.$Eu,
                              disabled: !0,
                              'aria-label': ''
                          }),
                          (0, r.jsx)(d.Z.Title, { children: Z.NW.string(C.Z.yv3DJC) })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: E.contentContainer,
                      children: [
                          (0, r.jsxs)('div', {
                              className: E.powerupsContainer,
                              children: [
                                  S &&
                                      (0, r.jsxs)('div', {
                                          className: E.staffContainer,
                                          children: [
                                              (0, r.jsxs)('div', {
                                                  className: E.staffHeader,
                                                  children: [
                                                      (0, r.jsx)(l.Ymb, {
                                                          color: l.TVs.colors.TEXT_BRAND,
                                                          size: 'sm'
                                                      }),
                                                      (0, r.jsx)(l.X6q, {
                                                          variant: 'heading-sm/semibold',
                                                          children: 'Staff Server Notice'
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)(l.Text, {
                                                  variant: 'text-sm/medium',
                                                  children: 'Staff servers have the perks of every level, even if they\u2019re not enabled. This may (read: will) break parts of the Boosting UI. Additional perks such as Enhanced Role Colors and Server Tags still need to be purchased with boosts.'
                                              })
                                          ]
                                      }),
                                  I.map((e) => {
                                      let t = w.catalog.get(e);
                                      if (null == t) return;
                                      let { title: o, description: s } = (function (e) {
                                              switch (e) {
                                                  case j.Us.LEVEL:
                                                      return {
                                                          title: Z.NW.string(C.Z['TXY/b2']),
                                                          description: Z.NW.string(C.Z.aJv4PD)
                                                      };
                                                  case j.Us.PERK:
                                                      return {
                                                          title: Z.NW.string(C.Z.TV3Vm5),
                                                          description: Z.NW.string(C.Z.NHjM1t)
                                                      };
                                              }
                                          })(e),
                                          a = e === j.Us.LEVEL ? l.zJl : 'div';
                                      return (0, r.jsxs)(
                                          'div',
                                          {
                                              className: E.powerupsSection,
                                              children: [
                                                  (0, r.jsxs)('div', {
                                                      children: [
                                                          (0, r.jsxs)('div', {
                                                              className: E.headerContainer,
                                                              children: [
                                                                  (0, r.jsx)(l.X6q, {
                                                                      color: 'header-primary',
                                                                      variant: 'heading-lg/semibold',
                                                                      children: o
                                                                  }),
                                                                  e === j.Us.PERK &&
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
                                                  (0, r.jsx)(a, {
                                                      orientation: 'horizontal',
                                                      className: i()(E.powerupContainer, { [E.powerupsLevelContainer]: e === j.Us.LEVEL }),
                                                      fade: !0,
                                                      children: t.map((e, o) => {
                                                          switch (e.type) {
                                                              case j.Us.LEVEL:
                                                                  return (0, r.jsx)(
                                                                      x.ZP,
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
                                                                      _.Z,
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
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: E.sidebarContainer,
                              children: [(0, r.jsx)(v.Z, { guildId: n }), (0, r.jsx)(f.Z, { guildId: n })]
                          })
                      ]
                  })
              ]
          });
}

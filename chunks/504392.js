(n.d(t, { Z: () => w }), n(539854), n(388685), n(953529));
var r = n(255367),
    o = n(73800),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    a = n(704215),
    c = n(481060),
    u = n(243778),
    d = n(984370),
    p = n(713081),
    m = n(905128),
    f = n(639777),
    _ = n(27237),
    x = n(51859),
    v = n(184478),
    b = n(877362),
    g = n(460608),
    j = n(279604),
    E = n(385902),
    h = n(332538),
    C = n(535396),
    I = n(921944),
    N = n(93841),
    O = n(388032),
    P = n(782285);
let Z = [C.Us.LEVEL, C.Us.PERK];
function w(e) {
    let { guildId: t, powerupSkuId: i } = e;
    (o.useEffect(() => {
        ((0, p.Sn)(t), (0, p.Fm)(t));
    }, [t]),
        (0, h.Wj)(t));
    let w = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(t)),
        S = (0, f.Z)(t),
        y = o.useRef(!1),
        { shouldShow: T, modalConfig: A } = (0, E.K)(t, 'GuildPowerupsOverview'),
        R = null == i && null != A,
        L = [];
    T && R && L.push(a.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [k, D] = (0, u.US)(L);
    return (o.useEffect(() => {
        var e;
        if (null == i) return;
        let n = null == w || null == (e = w.allPowerups) ? void 0 : e[i];
        null == n || y.current || ((0, j.KE)(t, n), (y.current = !0));
    }, [t, i, null == w ? void 0 : w.allPowerups]),
    o.useEffect(() => {
        null != k &&
            null != A &&
            (0, c.ZDy)(
                async () => {
                    let { default: e } = await n.e('61879').then(n.bind(n, 802426));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            ((r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r));
                                        }));
                                }
                                return e;
                            })(
                                {
                                    modalConfig: A,
                                    markAsDismissed: D
                                },
                                t
                            )
                        );
                },
                {
                    onCloseCallback: () => {
                        D(I.L.USER_DISMISS);
                    },
                    modalKey: 'dismissible_content_'.concat(k)
                }
            );
    }, [t, k, D, A]),
    (null == w ? void 0 : w.powerupCatalog) == null)
        ? null
        : (0, r.jsxs)('div', {
              className: P.container,
              children: [
                  (0, r.jsxs)(d.Z, {
                      className: P.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)('div', {}),
                      children: [
                          (0, r.jsx)(d.Z.Icon, {
                              icon: c.$Eu,
                              'aria-label': ''
                          }),
                          (0, r.jsx)(d.Z.Title, { children: O.intl.string(N.default.yv3DJC) })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: P.contentContainer,
                      children: [
                          (0, r.jsx)(c.zJl, {
                              className: P.powerupsContainer,
                              children: Z.map((e) => {
                                  let n = w.powerupCatalog[e];
                                  if (null == n) return;
                                  let { title: o, description: i } = (function (e) {
                                          switch (e) {
                                              case C.Us.LEVEL:
                                                  return {
                                                      title: O.intl.string(N.default['TXY/b2']),
                                                      description: O.intl.string(N.default.aJv4PD)
                                                  };
                                              case C.Us.PERK:
                                                  return {
                                                      title: O.intl.string(N.default.TV3Vm5),
                                                      description: O.intl.string(N.default.STx9ho)
                                                  };
                                          }
                                      })(e),
                                      s = e === C.Us.LEVEL ? c.zJl : 'div';
                                  return (0, r.jsxs)(
                                      'div',
                                      {
                                          className: P.powerupsSection,
                                          children: [
                                              (0, r.jsxs)('div', {
                                                  className: P.powerupHorizontalPadding,
                                                  children: [
                                                      (0, r.jsx)(c.X6q, {
                                                          color: 'header-primary',
                                                          variant: 'heading-lg/semibold',
                                                          children: o
                                                      }),
                                                      (0, r.jsx)(c.Text, {
                                                          color: 'text-muted',
                                                          variant: 'text-sm/medium',
                                                          children: i
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)(s, {
                                                  orientation: 'horizontal',
                                                  className: l()(P.powerupContainer, P.powerupHorizontalPadding, { [P.powerupsLevelContainer]: e === C.Us.LEVEL }),
                                                  fade: !0,
                                                  children: n.map((e, o) => {
                                                      switch (e.type) {
                                                          case C.Us.LEVEL:
                                                              return (0, r.jsx)(
                                                                  _.ZP,
                                                                  {
                                                                      guildId: t,
                                                                      index: o,
                                                                      powerup: e,
                                                                      nextPowerup: n[o + 1]
                                                                  },
                                                                  'powerup-'.concat(e.skuId)
                                                              );
                                                          case C.Us.PERK:
                                                              return (0, r.jsx)(
                                                                  x.Z,
                                                                  {
                                                                      guildId: t,
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
                              className: P.sidebarContainer,
                              children: [S ? (0, r.jsx)(v.Z, { guildId: t }) : (0, r.jsx)(b.Z, { guildId: t }), (0, r.jsx)(g.Z, { guildId: t })]
                          })
                      ]
                  })
              ]
          });
}

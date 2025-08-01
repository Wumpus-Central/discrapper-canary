(n.d(t, { Z: () => y }), n(539854), n(388685), n(953529));
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
    _ = n(169010),
    x = n(27237),
    g = n(51859),
    v = n(184478),
    b = n(877362),
    j = n(460608),
    h = n(279604),
    E = n(385902),
    C = n(332538),
    I = n(535396),
    N = n(921944),
    O = n(93841),
    w = n(388032),
    P = n(782285);
let Z = [I.Us.LEVEL, I.Us.PERK];
function y(e) {
    let { guildId: t, powerupSkuId: i } = e;
    (o.useEffect(() => {
        ((0, p.Sn)(t), (0, p.Fm)(t));
    }, [t]),
        (0, C.Wj)(t));
    let y = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(t)),
        S = (0, f.Z)(t),
        T = o.useRef(!1),
        { shouldShow: A, modalConfig: R } = (0, E.K)(t, 'GuildPowerupsOverview'),
        L = null == i && null != R,
        k = [];
    A && L && k.push(a.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [D, U] = (0, u.US)(k),
        V = o.useMemo(
            () =>
                Z.reduce((e, t) => {
                    let n = null == y ? void 0 : y.powerupCatalog[t];
                    if (null == n) return e;
                    let r = (0, _.S)(n);
                    return (
                        e.push({
                            type: t,
                            listings: r
                        }),
                        e
                    );
                }, []),
            [null == y ? void 0 : y.powerupCatalog]
        );
    return (o.useEffect(() => {
        var e;
        if (null == i) return;
        let n = null == y || null == (e = y.allPowerups) ? void 0 : e[i];
        null == n || T.current || ((0, h.KE)(t, n), (T.current = !0));
    }, [t, i, null == y ? void 0 : y.allPowerups]),
    o.useEffect(() => {
        null != D &&
            null != R &&
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
                                    modalConfig: R,
                                    markAsDismissed: U
                                },
                                t
                            )
                        );
                },
                {
                    onCloseCallback: () => {
                        U(N.L.USER_DISMISS);
                    },
                    modalKey: 'dismissible_content_'.concat(D)
                }
            );
    }, [t, D, U, R]),
    (null == y ? void 0 : y.powerupCatalog) == null)
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
                          (0, r.jsx)(d.Z.Title, { children: w.intl.string(O.default.yv3DJC) })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: P.contentContainer,
                      children: [
                          (0, r.jsx)(c.zJl, {
                              className: P.powerupsContainer,
                              children: V.map((e) => {
                                  let { type: n, listings: o } = e,
                                      { title: i, description: s } = (function (e) {
                                          switch (e) {
                                              case I.Us.LEVEL:
                                                  return {
                                                      title: w.intl.string(O.default['TXY/b2']),
                                                      description: w.intl.string(O.default.aJv4PD)
                                                  };
                                              case I.Us.PERK:
                                                  return {
                                                      title: w.intl.string(O.default.TV3Vm5),
                                                      description: w.intl.string(O.default.STx9ho)
                                                  };
                                          }
                                      })(n),
                                      a = n === I.Us.LEVEL ? c.zJl : 'div';
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
                                                          children: i
                                                      }),
                                                      (0, r.jsx)(c.Text, {
                                                          color: 'text-muted',
                                                          variant: 'text-sm/medium',
                                                          children: s
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)(a, {
                                                  orientation: 'horizontal',
                                                  className: l()(P.powerupContainer, P.powerupHorizontalPadding, { [P.powerupsLevelContainer]: n === I.Us.LEVEL }),
                                                  fade: !0,
                                                  children: o.map((e, n) => {
                                                      switch (e.type) {
                                                          case 'singleLevel':
                                                              var i;
                                                              return (0, r.jsx)(
                                                                  x.ZP,
                                                                  {
                                                                      guildId: t,
                                                                      index: n,
                                                                      powerup: e.powerup,
                                                                      nextPowerup: null == (i = o[n + 1]) ? void 0 : i.powerup
                                                                  },
                                                                  'powerup-'.concat(e.powerup.skuId)
                                                              );
                                                          case 'singlePerk':
                                                              return (0, r.jsx)(
                                                                  g.Z,
                                                                  {
                                                                      guildId: t,
                                                                      powerup: e.powerup
                                                                  },
                                                                  'powerup-'.concat(e.powerup.skuId)
                                                              );
                                                          case 'multiPerk':
                                                              return null;
                                                      }
                                                  })
                                              })
                                          ]
                                      },
                                      'section-'.concat(n)
                                  );
                              })
                          }),
                          (0, r.jsxs)('div', {
                              className: P.sidebarContainer,
                              children: [S ? (0, r.jsx)(v.Z, { guildId: t }) : (0, r.jsx)(b.Z, { guildId: t }), (0, r.jsx)(j.Z, { guildId: t })]
                          })
                      ]
                  })
              ]
          });
}

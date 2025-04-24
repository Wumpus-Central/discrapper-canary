n.d(t, { Z: () => B }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(525654),
    o = n.n(a),
    c = n(442837),
    u = n(846519),
    d = n(481060),
    m = n(232567),
    g = n(596454),
    p = n(410030),
    h = n(100527),
    f = n(906732),
    x = n(623624),
    b = n(357156),
    j = n(208049),
    _ = n(763296),
    v = n(22382),
    O = n(747071),
    C = n(286654),
    y = n(892001),
    N = n(430824),
    I = n(594174),
    E = n(15385),
    S = n(768581),
    T = n(267642),
    P = n(358085),
    w = n(51144),
    R = n(999382),
    Z = n(70409),
    D = n(981631),
    k = n(710111),
    A = n(388032),
    L = n(832183);
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = P.isPlatformEmbedded || ('Safari' !== o().name && 'Firefox' !== o().name);
function B() {
    let e = (0, c.e7)([R.Z], () => R.Z.getProps().guild),
        { analyticsLocations: t } = (0, f.ZP)(h.Z.GUILD_SETTINGS_SOUNDBOARD);
    return null == e
        ? null
        : (0, r.jsx)(f.Gt, {
              value: t,
              children: (0, r.jsx)(d.hjN, {
                  tag: d.RB0.H1,
                  title: A.intl.string(A.t.OWQNYm),
                  children: (0, r.jsx)(V, { guild: e })
              })
          });
}
function F(e) {
    let { children: t } = e;
    return (0, r.jsx)(d.X6q, {
        className: L.tableHeader,
        variant: 'heading-sm/semibold',
        color: 'header-secondary',
        children: t
    });
}
function z(e) {
    let { currentTier: t, availableSounds: n, guildId: i } = e,
        l = N.Z.getGuild(i),
        s = null != l ? (0, T.nL)(l) : 0;
    return 0 === t
        ? (0, r.jsx)(r.Fragment, {
              children: A.intl.format(A.t['7E9Hd3'], {
                  slots: n,
                  totalSlots: s
              })
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(d.ua7, {
                      text: A.intl.formatToPlainString(A.t.tuuJJS, { currentBoostLevel: t }),
                      children: (e) =>
                          (0, r.jsx)(d.P3F, {
                              className: L.boostingIconWrapper,
                              onClick: () => {
                                  (0, x.f)({
                                      guildId: i,
                                      location: {
                                          section: D.jXE.GUILD_SETTINGS_SOUNDBOARD,
                                          object: D.qAy.BOOST_GEM_ICON
                                      }
                                  });
                              },
                              tabIndex: -1,
                              children: (0, r.jsx)(E.Z, M({}, e))
                          })
                  }),
                  A.intl.format(A.t.HHCdvb, {
                      slots: n,
                      totalSlots: s,
                      boostLevel: t
                  })
              ]
          });
}
let H = (e) => {
        var { renderPopoutBody: t, renderPopoutChildren: n } = e,
            l = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['renderPopoutBody', 'renderPopoutChildren']);
        let [s, a] = i.useState(!1),
            o = i.useMemo(() => new u.V7(), []),
            c = i.useCallback(() => {
                o.stop(), a(!0);
            }, [o]),
            m = i.useCallback(() => {
                o.start(200, () => a(!1));
            }, [o]);
        return (0, r.jsx)(
            d.yRy,
            G(
                M(
                    {
                        shouldShow: s,
                        renderPopout: (e) =>
                            (0, r.jsx)(d.VqE, {
                                className: L.browserUnsupportedDialog,
                                onMouseEnter: c,
                                onMouseLeave: m,
                                children: t(e)
                            })
                    },
                    l
                ),
                { children: (e) => n(e) }
            )
        );
    },
    W = () =>
        (0, r.jsx)(H, {
            renderPopoutBody: () =>
                (0, r.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: A.intl.format(A.t.bGXPVl, {})
                }),
            renderPopoutChildren: (e) =>
                (0, r.jsx)(
                    d.zxk,
                    G(M({}, e), {
                        disabled: !0,
                        children: A.intl.string(A.t['/uNYPD'])
                    })
                )
        });
function V(e) {
    let { guild: t } = e,
        [l, s] = (0, c.Wu)([_.Z], () => {
            var e;
            return [null != (e = _.Z.getSoundsForGuild(t.id)) ? e : k.Hy, _.Z.isFetchingSounds() || _.Z.isFetchingDefaultSounds()];
        }),
        { canCreateExpressions: a } = (0, b.XJ)(t),
        o = i.useRef(null),
        u = (0, p.ZP)(),
        m = t.premiumTier,
        g = (0, T.yw)(t, l, m);
    i.useEffect(() => {
        (0, j.w)();
    }, []);
    let h = i.useMemo(() => l.reduce((e, t) => ((e[t.soundId] = new Audio((0, v.Z)(t.soundId))), e), {}), [l]),
        f = 0 === l.length && !s;
    function x(e) {
        var t;
        null == (t = o.current) || t.pause();
        let n = h[e.soundId];
        null != n && ((o.current = n), (n.currentTime = 0), (n.volume = (0, O.Z)(e.volume)), n.play());
    }
    if (
        (i.useEffect(
            () => () => {
                var e;
                null == (e = o.current) || e.pause();
            },
            []
        ),
        s)
    )
        return (0, r.jsx)(d.$jN, {});
    let C = U
        ? (0, r.jsx)(d.zxk, {
              onClick: function () {
                  (0, d.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('56035'), n.e('15878')]).then(n.bind(n, 758961));
                      return (n) => (0, r.jsx)(e, G(M({}, n), { guildId: t.id }));
                  });
              },
              disabled: g <= 0 || !a,
              children: A.intl.string(A.t['/uNYPD'])
          })
        : (0, r.jsx)(W, {});
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(d.Text, {
                        className: L.helpText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: A.intl.string(A.t.BohnsL)
                    }),
                    (0, r.jsx)('div', {
                        className: L.buttons,
                        children: !f && C
                    })
                ]
            }),
            f
                ? (0, r.jsxs)(d.ubH, {
                      theme: u,
                      className: L.empty,
                      children: [
                          (0, r.jsx)(d.oxh, {
                              darkSrc: n(458601),
                              lightSrc: n(673557),
                              width: 272,
                              height: 212
                          }),
                          (0, r.jsx)(d.OZU, {
                              note: A.intl.string(A.t.ZhoSBA),
                              noteClassName: L.emptyText,
                              children: A.intl.string(A.t.I6P1p6)
                          }),
                          C
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(d.$i$, { className: L.divider }),
                          (0, r.jsx)(d.X6q, {
                              className: L.tableTitle,
                              variant: 'heading-md/bold',
                              color: 'header-primary',
                              children: (0, r.jsx)(z, {
                                  guildId: t.id,
                                  currentTier: m,
                                  availableSounds: g
                              })
                          }),
                          (0, r.jsx)(Z.Z, {
                              guild: t,
                              numSounds: l.length,
                              isOutOfSlots: 0 === g
                          }),
                          (0, r.jsxs)('div', {
                              className: L.soundTable,
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: L.tableHeaders,
                                      children: [(0, r.jsx)(F, { children: A.intl.string(A.t.sMOuub) }), (0, r.jsx)(F, { children: A.intl.string(A.t.lLFvlZ) }), (0, r.jsx)(F, { children: A.intl.string(A.t['85qMS0']) })]
                                  }),
                                  l.map((e) =>
                                      (0, r.jsx)(
                                          Y,
                                          {
                                              sound: e,
                                              isPlaying: !1,
                                              guild: t,
                                              onPlaySound: x
                                          },
                                          e.soundId
                                      )
                                  )
                              ]
                          })
                      ]
                  })
        ]
    });
}
function Y(e) {
    let { sound: t, isPlaying: l, onPlaySound: a, guild: o } = e,
        { soundId: u, name: p, user: h, userId: x, emojiId: _, emojiName: v } = t,
        { analyticsLocations: O } = (0, f.ZP)(),
        N = (0, c.e7)([I.default], () => (null != h ? h : I.default.getUser(x)), [x, h]),
        { canManageGuildExpression: E } = (0, b.XJ)(o),
        T = i.useMemo(() => E(t), [t, E]),
        P = null != _ || null != v,
        [R, Z] = i.useState(!1),
        D = (0, C.z)(t, o.id);
    async function k() {
        if (!R) {
            Z(!0);
            try {
                await (0, j.AA)(o.id, u);
            } catch (e) {
                Z(!1);
            }
        }
    }
    i.useEffect(() => {
        null == N && e();
        async function e() {
            await (0, m.PR)(x);
        }
    }, [N, x]);
    let U = i.useCallback(() => {
            null != N &&
                (0, y.openUserProfileModal)({
                    userId: N.id,
                    guildId: o.id,
                    sourceAnalyticsLocations: O
                });
        }, [N, o.id, O]),
        B = w.ZP.useUserTag(N);
    return (0, r.jsxs)('div', {
        className: s()(L.row, { [L.active]: l }),
        children: [
            P
                ? (0, r.jsx)(g.Z, {
                      emojiId: _,
                      emojiName: v,
                      className: L.emoji
                  })
                : (0, r.jsx)(d.XBm, {
                      size: 'md',
                      color: 'currentColor',
                      className: L.emoji
                  }),
            (0, r.jsx)(d.P3F, {
                onClick: () => {
                    R || a(t);
                },
                onContextMenu: D,
                className: L.soundName,
                children: (0, r.jsxs)(d.Text, {
                    variant: 'text-sm/normal',
                    className: L.soundName,
                    children: [
                        p,
                        ' ',
                        (0, r.jsx)(d.gj8, {
                            size: 'md',
                            color: 'currentColor',
                            className: L.soundPreviewIcon
                        })
                    ]
                })
            }),
            null != N &&
                (0, r.jsxs)(d.P3F, {
                    className: L.uploader,
                    onClick: U,
                    children: [
                        (0, r.jsx)(d.qEK, {
                            'aria-label': B,
                            size: d.EFr.SIZE_24,
                            className: L.uploaderAvatar,
                            src: (0, S.ov)(N, !1, 24)
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            lineClamp: 1,
                            children: B
                        })
                    ]
                }),
            T
                ? (0, r.jsxs)('div', {
                      className: L.soundEditContainer,
                      children: [
                          (0, r.jsx)(d.P3F, {
                              className: L.soundUpdate,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, d.ZDy)(async () => {
                                          let { default: e } = await Promise.all([n.e('56035'), n.e('15878')]).then(n.bind(n, 758961));
                                          return (n) =>
                                              (0, r.jsx)(
                                                  e,
                                                  G(M({}, n), {
                                                      guildId: o.id,
                                                      existingSound: t
                                                  })
                                              );
                                      });
                              },
                              'aria-label': A.intl.string(A.t.bt75u7),
                              children: (0, r.jsx)(d.vdY, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: L.soundEditIcon
                              })
                          }),
                          (0, r.jsx)(d.P3F, {
                              className: L.soundRemove,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, d.h7j)((e) =>
                                          (0, r.jsx)(
                                              d.ConfirmModal,
                                              G(
                                                  M(
                                                      {
                                                          header: A.intl.formatToPlainString(A.t['PR/VbG'], { soundName: p }),
                                                          confirmText: A.intl.string(A.t.oyYWHB),
                                                          cancelText: A.intl.string(A.t['ETE/oK']),
                                                          onConfirm: k
                                                      },
                                                      e
                                                  ),
                                                  {
                                                      children: (0, r.jsx)(d.Text, {
                                                          variant: 'text-md/normal',
                                                          children: A.intl.format(A.t['u6+CmJ'], { soundName: p })
                                                      })
                                                  }
                                              )
                                          )
                                      );
                              },
                              'aria-label': A.intl.string(A.t.N86XcH),
                              children: (0, r.jsx)(d.Dio, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: L.soundEditIcon
                              })
                          })
                      ]
                  })
                : null
        ]
    });
}

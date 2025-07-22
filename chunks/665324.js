(n.d(t, { Z: () => F }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(525654),
    o = n.n(a),
    c = n(442837),
    d = n(846519),
    u = n(755721),
    m = n(481060),
    g = n(232567),
    p = n(596454),
    f = n(410030),
    h = n(100527),
    x = n(906732),
    b = n(623624),
    j = n(357156),
    _ = n(208049),
    v = n(763296),
    O = n(22382),
    C = n(747071),
    y = n(286654),
    N = n(892001),
    I = n(430824),
    E = n(594174),
    S = n(15385),
    T = n(768581),
    P = n(267642),
    w = n(358085),
    R = n(51144),
    Z = n(999382),
    D = n(70409),
    A = n(981631),
    L = n(710111),
    k = n(388032),
    M = n(832183);
function G(e) {
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
}
function U(e, t) {
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
let B = w.isPlatformEmbedded || 'Safari' !== o().name;
function F() {
    let e = (0, c.e7)([Z.Z], () => Z.Z.getProps().guild),
        { analyticsLocations: t } = (0, x.ZP)(h.Z.GUILD_SETTINGS_SOUNDBOARD);
    return null == e
        ? null
        : (0, r.jsx)(x.Gt, {
              value: t,
              children: (0, r.jsx)(m.hjN, {
                  tag: m.RB0.H1,
                  title: k.intl.string(k.t.OWQNYm),
                  children: (0, r.jsx)(Y, { guild: e })
              })
          });
}
function H(e) {
    let { children: t } = e;
    return (0, r.jsx)(m.X6q, {
        className: M.tableHeader,
        variant: 'heading-sm/semibold',
        color: 'header-secondary',
        children: t
    });
}
function z(e) {
    let { currentTier: t, availableSounds: n, guildId: i } = e,
        l = I.Z.getGuild(i),
        s = null != l ? (0, P.nL)(l) : 0;
    return 0 === t
        ? (0, r.jsx)(r.Fragment, {
              children: k.intl.format(k.t['7E9Hd3'], {
                  slots: n,
                  totalSlots: s
              })
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(m.ua7, {
                      text: k.intl.formatToPlainString(k.t.tuuJJS, { currentBoostLevel: t }),
                      children: (e) =>
                          (0, r.jsx)(m.P3F, {
                              className: M.boostingIconWrapper,
                              onClick: () => {
                                  (0, b.f)({
                                      guildId: i,
                                      location: {
                                          section: A.jXE.GUILD_SETTINGS_SOUNDBOARD,
                                          object: A.qAy.BOOST_GEM_ICON
                                      }
                                  });
                              },
                              tabIndex: -1,
                              children: (0, r.jsx)(S.Z, G({}, e))
                          })
                  }),
                  k.intl.format(k.t.HHCdvb, {
                      slots: n,
                      totalSlots: s,
                      boostLevel: t
                  })
              ]
          });
}
let W = (e) => {
        var { renderPopoutBody: t, renderPopoutChildren: n, popoutTargetRef: l } = e,
            s = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(e, ['renderPopoutBody', 'renderPopoutChildren', 'popoutTargetRef']);
        let [a, o] = i.useState(!1),
            c = i.useMemo(() => new d.V7(), []),
            u = i.useCallback(() => {
                (c.stop(), o(!0));
            }, [c]),
            g = i.useCallback(() => {
                c.start(200, () => o(!1));
            }, [c]);
        return (0, r.jsx)(
            m.yRy,
            U(
                G(
                    {
                        shouldShow: a,
                        renderPopout: (e) =>
                            (0, r.jsx)(m.VqE, {
                                className: M.browserUnsupportedDialog,
                                onMouseEnter: u,
                                onMouseLeave: g,
                                children: t(e)
                            })
                    },
                    s
                ),
                {
                    targetElementRef: l,
                    children: (e) => n(e)
                }
            )
        );
    },
    V = () => {
        let e = i.useRef(null);
        return (0, r.jsx)(W, {
            renderPopoutBody: () =>
                (0, r.jsx)(m.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: k.intl.format(k.t.bGXPVl, {})
                }),
            renderPopoutChildren: (t) =>
                (0, r.jsx)(
                    u.zx,
                    U(G({}, t), {
                        disabled: !0,
                        buttonRef: e,
                        children: k.intl.string(k.t['/uNYPD'])
                    })
                ),
            popoutTargetRef: e
        });
    };
function Y(e) {
    let { guild: t } = e,
        [l, s] = (0, c.Wu)([v.Z], () => {
            var e;
            return [null != (e = v.Z.getSoundsForGuild(t.id)) ? e : L.Hy, v.Z.isFetchingSounds() || v.Z.isFetchingDefaultSounds()];
        }),
        { canCreateExpressions: a } = (0, j.XJ)(t),
        o = i.useRef(null),
        d = (0, f.ZP)(),
        u = t.premiumTier,
        g = (0, P.yw)(t, l, u);
    i.useEffect(() => {
        (0, _.w)();
    }, []);
    let p = i.useMemo(() => l.reduce((e, t) => ((e[t.soundId] = new Audio((0, O.Z)(t.soundId))), e), {}), [l]),
        h = 0 === l.length && !s;
    function x(e) {
        var t;
        null == (t = o.current) || t.pause();
        let n = p[e.soundId];
        null != n && ((o.current = n), (n.currentTime = 0), (n.volume = (0, C.Z)(e.volume)), n.play());
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
        return (0, r.jsx)(m.$jN, {});
    let b = B
        ? (0, r.jsx)(m.zxk, {
              variant: 'primary',
              text: k.intl.string(k.t['/uNYPD']),
              onClick: function () {
                  (0, m.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('56035'), n.e('15878')]).then(n.bind(n, 758961));
                      return (n) => (0, r.jsx)(e, U(G({}, n), { guildId: t.id }));
                  });
              },
              disabled: g <= 0 || !a
          })
        : (0, r.jsx)(V, {});
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(m.Text, {
                        className: M.helpText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: k.intl.string(k.t.BohnsL)
                    }),
                    (0, r.jsx)('div', {
                        className: M.buttons,
                        children: !h && b
                    })
                ]
            }),
            h
                ? (0, r.jsxs)(m.ubH, {
                      theme: d,
                      className: M.empty,
                      children: [
                          (0, r.jsx)(m.oxh, {
                              darkSrc: n(458601),
                              lightSrc: n(673557),
                              width: 272,
                              height: 212
                          }),
                          (0, r.jsx)(m.OZU, {
                              note: k.intl.string(k.t.ZhoSBA),
                              noteClassName: M.emptyText,
                              children: k.intl.string(k.t.I6P1p6)
                          }),
                          b
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(m.$i$, { className: M.divider }),
                          (0, r.jsx)(m.X6q, {
                              className: M.tableTitle,
                              variant: 'heading-md/bold',
                              color: 'header-primary',
                              children: (0, r.jsx)(z, {
                                  guildId: t.id,
                                  currentTier: u,
                                  availableSounds: g
                              })
                          }),
                          (0, r.jsx)(D.Z, {
                              guild: t,
                              numSounds: l.length,
                              isOutOfSlots: 0 === g
                          }),
                          (0, r.jsxs)('div', {
                              className: M.soundTable,
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: M.tableHeaders,
                                      children: [(0, r.jsx)(H, { children: k.intl.string(k.t.sMOuub) }), (0, r.jsx)(H, { children: k.intl.string(k.t.lLFvlZ) }), (0, r.jsx)(H, { children: k.intl.string(k.t['85qMS0']) })]
                                  }),
                                  l.map((e) =>
                                      (0, r.jsx)(
                                          K,
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
function K(e) {
    let { sound: t, isPlaying: l, onPlaySound: a, guild: o } = e,
        { soundId: d, name: u, user: f, userId: h, emojiId: b, emojiName: v } = t,
        { analyticsLocations: O } = (0, x.ZP)(),
        C = (0, c.e7)([E.default], () => (null != f ? f : E.default.getUser(h)), [h, f]),
        { canManageGuildExpression: I } = (0, j.XJ)(o),
        S = i.useMemo(() => I(t), [t, I]),
        P = null != b || null != v,
        [w, Z] = i.useState(!1),
        D = (0, y.z)(t, o.id);
    async function A() {
        if (!w) {
            Z(!0);
            try {
                await (0, _.AA)(o.id, d);
            } catch (e) {
                Z(!1);
            }
        }
    }
    i.useEffect(() => {
        null == C && e();
        async function e() {
            await (0, g.PR)(h);
        }
    }, [C, h]);
    let L = i.useCallback(() => {
            null != C &&
                (0, N.openUserProfileModal)({
                    userId: C.id,
                    guildId: o.id,
                    sourceAnalyticsLocations: O
                });
        }, [C, o.id, O]),
        B = R.ZP.useUserTag(C);
    return (0, r.jsxs)('div', {
        className: s()(M.row, { [M.active]: l }),
        children: [
            P
                ? (0, r.jsx)(p.Z, {
                      emojiId: b,
                      emojiName: v,
                      className: M.emoji
                  })
                : (0, r.jsx)(m.XBm, {
                      size: 'md',
                      color: 'currentColor',
                      className: M.emoji
                  }),
            (0, r.jsx)(m.P3F, {
                onClick: () => {
                    w || a(t);
                },
                onContextMenu: D,
                className: M.soundName,
                children: (0, r.jsxs)(m.Text, {
                    variant: 'text-sm/normal',
                    className: M.soundName,
                    children: [
                        u,
                        ' ',
                        (0, r.jsx)(m.gj8, {
                            size: 'md',
                            color: 'currentColor',
                            className: M.soundPreviewIcon
                        })
                    ]
                })
            }),
            null != C &&
                (0, r.jsxs)(m.P3F, {
                    className: M.uploader,
                    onClick: L,
                    children: [
                        (0, r.jsx)(m.qEK, {
                            'aria-label': B,
                            size: m.EFr.SIZE_24,
                            className: M.uploaderAvatar,
                            src: (0, T.ov)(C, !1, 24)
                        }),
                        (0, r.jsx)(m.Text, {
                            variant: 'text-sm/normal',
                            lineClamp: 1,
                            children: B
                        })
                    ]
                }),
            S
                ? (0, r.jsxs)('div', {
                      className: M.soundEditContainer,
                      children: [
                          (0, r.jsx)(m.P3F, {
                              className: M.soundUpdate,
                              onClick: function (e) {
                                  (e.stopPropagation(),
                                      (0, m.ZDy)(async () => {
                                          let { default: e } = await Promise.all([n.e('56035'), n.e('15878')]).then(n.bind(n, 758961));
                                          return (n) =>
                                              (0, r.jsx)(
                                                  e,
                                                  U(G({}, n), {
                                                      guildId: o.id,
                                                      existingSound: t
                                                  })
                                              );
                                      }));
                              },
                              'aria-label': k.intl.string(k.t.bt75u7),
                              children: (0, r.jsx)(m.vdY, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: M.soundEditIcon
                              })
                          }),
                          (0, r.jsx)(m.P3F, {
                              className: M.soundRemove,
                              onClick: function (e) {
                                  (e.stopPropagation(),
                                      (0, m.h7j)((e) =>
                                          (0, r.jsx)(
                                              m.ConfirmModal,
                                              U(
                                                  G(
                                                      {
                                                          header: k.intl.formatToPlainString(k.t['PR/VbG'], { soundName: u }),
                                                          confirmText: k.intl.string(k.t.oyYWHB),
                                                          cancelText: k.intl.string(k.t['ETE/oK']),
                                                          onConfirm: A
                                                      },
                                                      e
                                                  ),
                                                  {
                                                      children: (0, r.jsx)(m.Text, {
                                                          variant: 'text-md/normal',
                                                          children: k.intl.format(k.t['u6+CmJ'], { soundName: u })
                                                      })
                                                  }
                                              )
                                          )
                                      ));
                              },
                              'aria-label': k.intl.string(k.t.N86XcH),
                              children: (0, r.jsx)(m.Dio, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: M.soundEditIcon
                              })
                          })
                      ]
                  })
                : null
        ]
    });
}

n.d(t, { Z: () => M }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(525654),
    o = n.n(l),
    c = n(442837),
    d = n(846519),
    u = n(481060),
    m = n(232567),
    g = n(596454),
    p = n(410030),
    f = n(623624),
    h = n(357156),
    b = n(208049),
    x = n(763296),
    j = n(22382),
    N = n(747071),
    v = n(286654),
    _ = n(171368),
    y = n(430824),
    O = n(594174),
    C = n(15385),
    I = n(768581),
    E = n(267642),
    S = n(358085),
    T = n(51144),
    P = n(999382),
    w = n(70409),
    R = n(981631),
    Z = n(710111),
    D = n(388032),
    k = n(832183);
function W(e) {
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
function A(e, t) {
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
let L = S.isPlatformEmbedded || ('Safari' !== o().name && 'Firefox' !== o().name);
function M() {
    let e = (0, c.e7)([P.Z], () => P.Z.getProps().guild);
    return null == e
        ? null
        : (0, r.jsx)(u.hjN, {
              tag: u.RB0.H1,
              title: D.NW.string(D.t.OWQNYm),
              children: (0, r.jsx)(z, { guild: e })
          });
}
function G(e) {
    let { children: t } = e;
    return (0, r.jsx)(u.X6q, {
        className: k.tableHeader,
        variant: 'heading-sm/semibold',
        color: 'header-secondary',
        children: t
    });
}
function U(e) {
    let { currentTier: t, availableSounds: n, guildId: i } = e,
        s = y.Z.getGuild(i),
        a = null != s ? (0, E.nL)(s) : 0;
    return 0 === t
        ? (0, r.jsx)(r.Fragment, {
              children: D.NW.format(D.t['7E9Hd3'], {
                  slots: n,
                  totalSlots: a
              })
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.ua7, {
                      text: D.NW.formatToPlainString(D.t.tuuJJS, { currentBoostLevel: t }),
                      children: (e) =>
                          (0, r.jsx)(u.P3F, {
                              className: k.boostingIconWrapper,
                              onClick: () => {
                                  (0, f.f)({
                                      guildId: i,
                                      location: {
                                          section: R.jXE.GUILD_SETTINGS_SOUNDBOARD,
                                          object: R.qAy.BOOST_GEM_ICON
                                      }
                                  });
                              },
                              tabIndex: -1,
                              children: (0, r.jsx)(C.Z, W({}, e))
                          })
                  }),
                  D.NW.format(D.t.HHCdvb, {
                      slots: n,
                      totalSlots: a,
                      boostLevel: t
                  })
              ]
          });
}
let B = (e) => {
        var { renderPopoutBody: t, renderPopoutChildren: n } = e,
            s = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['renderPopoutBody', 'renderPopoutChildren']);
        let [a, l] = i.useState(!1),
            o = i.useMemo(() => new d.V7(), []),
            c = i.useCallback(() => {
                o.stop(), l(!0);
            }, [o]),
            m = i.useCallback(() => {
                o.start(200, () => l(!1));
            }, [o]);
        return (0, r.jsx)(
            u.yRy,
            A(
                W(
                    {
                        shouldShow: a,
                        renderPopout: (e) =>
                            (0, r.jsx)(u.VqE, {
                                className: k.browserUnsupportedDialog,
                                onMouseEnter: c,
                                onMouseLeave: m,
                                children: t(e)
                            })
                    },
                    s
                ),
                { children: (e) => n(e) }
            )
        );
    },
    F = () =>
        (0, r.jsx)(B, {
            renderPopoutBody: () =>
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: D.NW.format(D.t.bGXPVl, {})
                }),
            renderPopoutChildren: (e) =>
                (0, r.jsx)(
                    u.zxk,
                    A(W({}, e), {
                        disabled: !0,
                        children: D.NW.string(D.t['/uNYPD'])
                    })
                )
        });
function z(e) {
    let { guild: t } = e,
        [s, a] = (0, c.Wu)([x.Z], () => {
            var e;
            return [null != (e = x.Z.getSoundsForGuild(t.id)) ? e : Z.Hy, x.Z.isFetchingSounds() || x.Z.isFetchingDefaultSounds()];
        }),
        { canCreateExpressions: l } = (0, h.XJ)(t),
        o = i.useRef(null),
        d = (0, p.ZP)(),
        m = t.premiumTier,
        g = (0, E.yw)(t, s, m);
    i.useEffect(() => {
        (0, b.w)();
    }, []);
    let f = i.useMemo(() => s.reduce((e, t) => ((e[t.soundId] = new Audio((0, j.Z)(t.soundId))), e), {}), [s]),
        v = 0 === s.length && !a;
    function _(e) {
        var t;
        null == (t = o.current) || t.pause();
        let n = f[e.soundId];
        null != n && ((o.current = n), (n.currentTime = 0), (n.volume = (0, N.Z)(e.volume)), n.play());
    }
    if (
        (i.useEffect(
            () => () => {
                var e;
                null == (e = o.current) || e.pause();
            },
            []
        ),
        a)
    )
        return (0, r.jsx)(u.$jN, {});
    let y = L
        ? (0, r.jsx)(u.zxk, {
              onClick: function () {
                  (0, u.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('56035'), n.e('15878')]).then(n.bind(n, 758961));
                      return (n) => (0, r.jsx)(e, A(W({}, n), { guildId: t.id }));
                  });
              },
              disabled: g <= 0 || !l,
              children: D.NW.string(D.t['/uNYPD'])
          })
        : (0, r.jsx)(F, {});
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(u.Text, {
                        className: k.helpText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: D.NW.string(D.t.BohnsL)
                    }),
                    (0, r.jsx)('div', {
                        className: k.buttons,
                        children: !v && y
                    })
                ]
            }),
            v
                ? (0, r.jsxs)(u.ubH, {
                      theme: d,
                      className: k.empty,
                      children: [
                          (0, r.jsx)(u.oxh, {
                              darkSrc: n(458601),
                              lightSrc: n(673557),
                              width: 272,
                              height: 212
                          }),
                          (0, r.jsx)(u.OZU, {
                              note: D.NW.string(D.t.ZhoSBA),
                              noteClassName: k.emptyText,
                              children: D.NW.string(D.t.I6P1p6)
                          }),
                          y
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.$i$, { className: k.divider }),
                          (0, r.jsx)(u.X6q, {
                              className: k.tableTitle,
                              variant: 'heading-md/bold',
                              color: 'header-primary',
                              children: (0, r.jsx)(U, {
                                  guildId: t.id,
                                  currentTier: m,
                                  availableSounds: g
                              })
                          }),
                          (0, r.jsx)(w.Z, {
                              guild: t,
                              numSounds: s.length,
                              isOutOfSlots: 0 === g
                          }),
                          (0, r.jsxs)('div', {
                              className: k.soundTable,
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: k.tableHeaders,
                                      children: [(0, r.jsx)(G, { children: D.NW.string(D.t.sMOuub) }), (0, r.jsx)(G, { children: D.NW.string(D.t.lLFvlZ) }), (0, r.jsx)(G, { children: D.NW.string(D.t['85qMS0']) })]
                                  }),
                                  s.map((e) =>
                                      (0, r.jsx)(
                                          H,
                                          {
                                              sound: e,
                                              isPlaying: !1,
                                              guild: t,
                                              onPlaySound: _
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
function H(e) {
    let { sound: t, isPlaying: s, onPlaySound: l, guild: o } = e,
        { soundId: d, name: p, user: f, userId: x, emojiId: j, emojiName: N } = t,
        y = (0, c.e7)([O.default], () => (null != f ? f : O.default.getUser(x)), [x, f]),
        { canManageGuildExpression: C } = (0, h.XJ)(o),
        E = i.useMemo(() => C(t), [t, C]),
        S = null != j || null != N,
        [P, w] = i.useState(!1),
        Z = (0, v.z)(t, o.id);
    async function L() {
        if (!P) {
            w(!0);
            try {
                await (0, b.AA)(o.id, d);
            } catch (e) {
                w(!1);
            }
        }
    }
    i.useEffect(() => {
        null == y && e();
        async function e() {
            await (0, m.PR)(x);
        }
    }, [y, x]);
    let M = i.useCallback(() => {
            null != y &&
                (0, _.openUserProfileModal)({
                    userId: y.id,
                    guildId: o.id,
                    analyticsLocation: { section: R.jXE.GUILD_SETTINGS_SOUNDBOARD }
                });
        }, [y, o.id]),
        G = T.ZP.useUserTag(y);
    return (0, r.jsxs)('div', {
        className: a()(k.row, { [k.active]: s }),
        children: [
            S
                ? (0, r.jsx)(g.Z, {
                      emojiId: j,
                      emojiName: N,
                      className: k.emoji
                  })
                : (0, r.jsx)(u.XBm, {
                      size: 'md',
                      color: 'currentColor',
                      className: k.emoji
                  }),
            (0, r.jsx)(u.P3F, {
                onClick: () => {
                    P || l(t);
                },
                onContextMenu: Z,
                className: k.soundName,
                children: (0, r.jsxs)(u.Text, {
                    variant: 'text-sm/normal',
                    className: k.soundName,
                    children: [
                        p,
                        ' ',
                        (0, r.jsx)(u.gj8, {
                            size: 'md',
                            color: 'currentColor',
                            className: k.soundPreviewIcon
                        })
                    ]
                })
            }),
            null != y &&
                (0, r.jsxs)(u.P3F, {
                    className: k.uploader,
                    onClick: M,
                    children: [
                        (0, r.jsx)(u.qEK, {
                            'aria-label': G,
                            size: u.EFr.SIZE_24,
                            className: k.uploaderAvatar,
                            src: (0, I.ov)(y, !1, 24)
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            lineClamp: 1,
                            children: G
                        })
                    ]
                }),
            E
                ? (0, r.jsxs)('div', {
                      className: k.soundEditContainer,
                      children: [
                          (0, r.jsx)(u.P3F, {
                              className: k.soundUpdate,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.ZDy)(async () => {
                                          let { default: e } = await Promise.all([n.e('56035'), n.e('15878')]).then(n.bind(n, 758961));
                                          return (n) =>
                                              (0, r.jsx)(
                                                  e,
                                                  A(W({}, n), {
                                                      guildId: o.id,
                                                      existingSound: t
                                                  })
                                              );
                                      });
                              },
                              'aria-label': D.NW.string(D.t.bt75u7),
                              children: (0, r.jsx)(u.vdY, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: k.soundEditIcon
                              })
                          }),
                          (0, r.jsx)(u.P3F, {
                              className: k.soundRemove,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.h7j)((e) =>
                                          (0, r.jsx)(
                                              u.ConfirmModal,
                                              A(
                                                  W(
                                                      {
                                                          header: D.NW.formatToPlainString(D.t['PR/VbG'], { soundName: p }),
                                                          confirmText: D.NW.string(D.t.oyYWHB),
                                                          cancelText: D.NW.string(D.t['ETE/oK']),
                                                          onConfirm: L
                                                      },
                                                      e
                                                  ),
                                                  {
                                                      children: (0, r.jsx)(u.Text, {
                                                          variant: 'text-md/normal',
                                                          children: D.NW.format(D.t['u6+CmJ'], { soundName: p })
                                                      })
                                                  }
                                              )
                                          )
                                      );
                              },
                              'aria-label': D.NW.string(D.t.N86XcH),
                              children: (0, r.jsx)(u.Dio, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: k.soundEditIcon
                              })
                          })
                      ]
                  })
                : null
        ]
    });
}

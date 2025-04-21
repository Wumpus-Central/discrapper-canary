n.d(t, { Z: () => G }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(525654),
    o = n.n(a),
    c = n(442837),
    d = n(846519),
    u = n(481060),
    m = n(232567),
    g = n(596454),
    p = n(410030),
    h = n(623624),
    f = n(357156),
    x = n(208049),
    b = n(763296),
    j = n(22382),
    _ = n(747071),
    v = n(286654),
    O = n(171368),
    C = n(430824),
    y = n(594174),
    N = n(15385),
    I = n(768581),
    E = n(267642),
    S = n(358085),
    T = n(51144),
    P = n(999382),
    w = n(70409),
    R = n(981631),
    Z = n(710111),
    D = n(388032),
    A = n(832183);
function k(e) {
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
function L(e, t) {
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
let M = S.isPlatformEmbedded || ('Safari' !== o().name && 'Firefox' !== o().name);
function G() {
    let e = (0, c.e7)([P.Z], () => P.Z.getProps().guild);
    return null == e
        ? null
        : (0, r.jsx)(u.hjN, {
              tag: u.RB0.H1,
              title: D.intl.string(D.t.OWQNYm),
              children: (0, r.jsx)(H, { guild: e })
          });
}
function U(e) {
    let { children: t } = e;
    return (0, r.jsx)(u.X6q, {
        className: A.tableHeader,
        variant: 'heading-sm/semibold',
        color: 'header-secondary',
        children: t
    });
}
function B(e) {
    let { currentTier: t, availableSounds: n, guildId: i } = e,
        l = C.Z.getGuild(i),
        s = null != l ? (0, E.nL)(l) : 0;
    return 0 === t
        ? (0, r.jsx)(r.Fragment, {
              children: D.intl.format(D.t['7E9Hd3'], {
                  slots: n,
                  totalSlots: s
              })
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.ua7, {
                      text: D.intl.formatToPlainString(D.t.tuuJJS, { currentBoostLevel: t }),
                      children: (e) =>
                          (0, r.jsx)(u.P3F, {
                              className: A.boostingIconWrapper,
                              onClick: () => {
                                  (0, h.f)({
                                      guildId: i,
                                      location: {
                                          section: R.jXE.GUILD_SETTINGS_SOUNDBOARD,
                                          object: R.qAy.BOOST_GEM_ICON
                                      }
                                  });
                              },
                              tabIndex: -1,
                              children: (0, r.jsx)(N.Z, k({}, e))
                          })
                  }),
                  D.intl.format(D.t.HHCdvb, {
                      slots: n,
                      totalSlots: s,
                      boostLevel: t
                  })
              ]
          });
}
let F = (e) => {
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
            o = i.useMemo(() => new d.V7(), []),
            c = i.useCallback(() => {
                o.stop(), a(!0);
            }, [o]),
            m = i.useCallback(() => {
                o.start(200, () => a(!1));
            }, [o]);
        return (0, r.jsx)(
            u.yRy,
            L(
                k(
                    {
                        shouldShow: s,
                        renderPopout: (e) =>
                            (0, r.jsx)(u.VqE, {
                                className: A.browserUnsupportedDialog,
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
    z = () =>
        (0, r.jsx)(F, {
            renderPopoutBody: () =>
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: D.intl.format(D.t.bGXPVl, {})
                }),
            renderPopoutChildren: (e) =>
                (0, r.jsx)(
                    u.zxk,
                    L(k({}, e), {
                        disabled: !0,
                        children: D.intl.string(D.t['/uNYPD'])
                    })
                )
        });
function H(e) {
    let { guild: t } = e,
        [l, s] = (0, c.Wu)([b.Z], () => {
            var e;
            return [null != (e = b.Z.getSoundsForGuild(t.id)) ? e : Z.Hy, b.Z.isFetchingSounds() || b.Z.isFetchingDefaultSounds()];
        }),
        { canCreateExpressions: a } = (0, f.XJ)(t),
        o = i.useRef(null),
        d = (0, p.ZP)(),
        m = t.premiumTier,
        g = (0, E.yw)(t, l, m);
    i.useEffect(() => {
        (0, x.w)();
    }, []);
    let h = i.useMemo(() => l.reduce((e, t) => ((e[t.soundId] = new Audio((0, j.Z)(t.soundId))), e), {}), [l]),
        v = 0 === l.length && !s;
    function O(e) {
        var t;
        null == (t = o.current) || t.pause();
        let n = h[e.soundId];
        null != n && ((o.current = n), (n.currentTime = 0), (n.volume = (0, _.Z)(e.volume)), n.play());
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
        return (0, r.jsx)(u.$jN, {});
    let C = M
        ? (0, r.jsx)(u.zxk, {
              onClick: function () {
                  (0, u.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('56035'), n.e('15878')]).then(n.bind(n, 758961));
                      return (n) => (0, r.jsx)(e, L(k({}, n), { guildId: t.id }));
                  });
              },
              disabled: g <= 0 || !a,
              children: D.intl.string(D.t['/uNYPD'])
          })
        : (0, r.jsx)(z, {});
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(u.Text, {
                        className: A.helpText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: D.intl.string(D.t.BohnsL)
                    }),
                    (0, r.jsx)('div', {
                        className: A.buttons,
                        children: !v && C
                    })
                ]
            }),
            v
                ? (0, r.jsxs)(u.ubH, {
                      theme: d,
                      className: A.empty,
                      children: [
                          (0, r.jsx)(u.oxh, {
                              darkSrc: n(458601),
                              lightSrc: n(673557),
                              width: 272,
                              height: 212
                          }),
                          (0, r.jsx)(u.OZU, {
                              note: D.intl.string(D.t.ZhoSBA),
                              noteClassName: A.emptyText,
                              children: D.intl.string(D.t.I6P1p6)
                          }),
                          C
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.$i$, { className: A.divider }),
                          (0, r.jsx)(u.X6q, {
                              className: A.tableTitle,
                              variant: 'heading-md/bold',
                              color: 'header-primary',
                              children: (0, r.jsx)(B, {
                                  guildId: t.id,
                                  currentTier: m,
                                  availableSounds: g
                              })
                          }),
                          (0, r.jsx)(w.Z, {
                              guild: t,
                              numSounds: l.length,
                              isOutOfSlots: 0 === g
                          }),
                          (0, r.jsxs)('div', {
                              className: A.soundTable,
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: A.tableHeaders,
                                      children: [(0, r.jsx)(U, { children: D.intl.string(D.t.sMOuub) }), (0, r.jsx)(U, { children: D.intl.string(D.t.lLFvlZ) }), (0, r.jsx)(U, { children: D.intl.string(D.t['85qMS0']) })]
                                  }),
                                  l.map((e) =>
                                      (0, r.jsx)(
                                          V,
                                          {
                                              sound: e,
                                              isPlaying: !1,
                                              guild: t,
                                              onPlaySound: O
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
function V(e) {
    let { sound: t, isPlaying: l, onPlaySound: a, guild: o } = e,
        { soundId: d, name: p, user: h, userId: b, emojiId: j, emojiName: _ } = t,
        C = (0, c.e7)([y.default], () => (null != h ? h : y.default.getUser(b)), [b, h]),
        { canManageGuildExpression: N } = (0, f.XJ)(o),
        E = i.useMemo(() => N(t), [t, N]),
        S = null != j || null != _,
        [P, w] = i.useState(!1),
        Z = (0, v.z)(t, o.id);
    async function M() {
        if (!P) {
            w(!0);
            try {
                await (0, x.AA)(o.id, d);
            } catch (e) {
                w(!1);
            }
        }
    }
    i.useEffect(() => {
        null == C && e();
        async function e() {
            await (0, m.PR)(b);
        }
    }, [C, b]);
    let G = i.useCallback(() => {
            null != C &&
                (0, O.openUserProfileModal)({
                    userId: C.id,
                    guildId: o.id,
                    analyticsLocation: { section: R.jXE.GUILD_SETTINGS_SOUNDBOARD }
                });
        }, [C, o.id]),
        U = T.ZP.useUserTag(C);
    return (0, r.jsxs)('div', {
        className: s()(A.row, { [A.active]: l }),
        children: [
            S
                ? (0, r.jsx)(g.Z, {
                      emojiId: j,
                      emojiName: _,
                      className: A.emoji
                  })
                : (0, r.jsx)(u.XBm, {
                      size: 'md',
                      color: 'currentColor',
                      className: A.emoji
                  }),
            (0, r.jsx)(u.P3F, {
                onClick: () => {
                    P || a(t);
                },
                onContextMenu: Z,
                className: A.soundName,
                children: (0, r.jsxs)(u.Text, {
                    variant: 'text-sm/normal',
                    className: A.soundName,
                    children: [
                        p,
                        ' ',
                        (0, r.jsx)(u.gj8, {
                            size: 'md',
                            color: 'currentColor',
                            className: A.soundPreviewIcon
                        })
                    ]
                })
            }),
            null != C &&
                (0, r.jsxs)(u.P3F, {
                    className: A.uploader,
                    onClick: G,
                    children: [
                        (0, r.jsx)(u.qEK, {
                            'aria-label': U,
                            size: u.EFr.SIZE_24,
                            className: A.uploaderAvatar,
                            src: (0, I.ov)(C, !1, 24)
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            lineClamp: 1,
                            children: U
                        })
                    ]
                }),
            E
                ? (0, r.jsxs)('div', {
                      className: A.soundEditContainer,
                      children: [
                          (0, r.jsx)(u.P3F, {
                              className: A.soundUpdate,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.ZDy)(async () => {
                                          let { default: e } = await Promise.all([n.e('56035'), n.e('15878')]).then(n.bind(n, 758961));
                                          return (n) =>
                                              (0, r.jsx)(
                                                  e,
                                                  L(k({}, n), {
                                                      guildId: o.id,
                                                      existingSound: t
                                                  })
                                              );
                                      });
                              },
                              'aria-label': D.intl.string(D.t.bt75u7),
                              children: (0, r.jsx)(u.vdY, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: A.soundEditIcon
                              })
                          }),
                          (0, r.jsx)(u.P3F, {
                              className: A.soundRemove,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.h7j)((e) =>
                                          (0, r.jsx)(
                                              u.ConfirmModal,
                                              L(
                                                  k(
                                                      {
                                                          header: D.intl.formatToPlainString(D.t['PR/VbG'], { soundName: p }),
                                                          confirmText: D.intl.string(D.t.oyYWHB),
                                                          cancelText: D.intl.string(D.t['ETE/oK']),
                                                          onConfirm: M
                                                      },
                                                      e
                                                  ),
                                                  {
                                                      children: (0, r.jsx)(u.Text, {
                                                          variant: 'text-md/normal',
                                                          children: D.intl.format(D.t['u6+CmJ'], { soundName: p })
                                                      })
                                                  }
                                              )
                                          )
                                      );
                              },
                              'aria-label': D.intl.string(D.t.N86XcH),
                              children: (0, r.jsx)(u.Dio, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: A.soundEditIcon
                              })
                          })
                      ]
                  })
                : null
        ]
    });
}

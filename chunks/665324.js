n.d(t, { Z: () => M }), n(47120);
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
    h = n(623624),
    f = n(357156),
    b = n(208049),
    x = n(763296),
    j = n(22382),
    N = n(747071),
    _ = n(286654),
    v = n(171368),
    C = n(430824),
    O = n(594174),
    y = n(15385),
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
function W(e, t) {
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
        className: A.tableHeader,
        variant: 'heading-sm/semibold',
        color: 'header-secondary',
        children: t
    });
}
function U(e) {
    let { currentTier: t, availableSounds: n, guildId: i } = e,
        s = C.Z.getGuild(i),
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
                              children: (0, r.jsx)(y.Z, k({}, e))
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
            W(
                k(
                    {
                        shouldShow: a,
                        renderPopout: (e) =>
                            (0, r.jsx)(u.VqE, {
                                className: A.browserUnsupportedDialog,
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
                    W(k({}, e), {
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
        { canCreateExpressions: l } = (0, f.XJ)(t),
        o = i.useRef(null),
        d = (0, p.ZP)(),
        m = t.premiumTier,
        g = (0, E.yw)(t, s, m);
    i.useEffect(() => {
        (0, b.w)();
    }, []);
    let h = i.useMemo(() => s.reduce((e, t) => ((e[t.soundId] = new Audio((0, j.Z)(t.soundId))), e), {}), [s]),
        _ = 0 === s.length && !a;
    function v(e) {
        var t;
        null == (t = o.current) || t.pause();
        let n = h[e.soundId];
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
    let C = L
        ? (0, r.jsx)(u.zxk, {
              onClick: function () {
                  (0, u.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('56035'), n.e('15878')]).then(n.bind(n, 758961));
                      return (n) => (0, r.jsx)(e, W(k({}, n), { guildId: t.id }));
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
                        className: A.helpText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: D.NW.string(D.t.BohnsL)
                    }),
                    (0, r.jsx)('div', {
                        className: A.buttons,
                        children: !_ && C
                    })
                ]
            }),
            _
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
                              note: D.NW.string(D.t.ZhoSBA),
                              noteClassName: A.emptyText,
                              children: D.NW.string(D.t.I6P1p6)
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
                              className: A.soundTable,
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: A.tableHeaders,
                                      children: [(0, r.jsx)(G, { children: D.NW.string(D.t.sMOuub) }), (0, r.jsx)(G, { children: D.NW.string(D.t.lLFvlZ) }), (0, r.jsx)(G, { children: D.NW.string(D.t['85qMS0']) })]
                                  }),
                                  s.map((e) =>
                                      (0, r.jsx)(
                                          H,
                                          {
                                              sound: e,
                                              isPlaying: !1,
                                              guild: t,
                                              onPlaySound: v
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
        { soundId: d, name: p, user: h, userId: x, emojiId: j, emojiName: N } = t,
        C = (0, c.e7)([O.default], () => (null != h ? h : O.default.getUser(x)), [x, h]),
        { canManageGuildExpression: y } = (0, f.XJ)(o),
        E = i.useMemo(() => y(t), [t, y]),
        S = null != j || null != N,
        [P, w] = i.useState(!1),
        Z = (0, _.z)(t, o.id);
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
        null == C && e();
        async function e() {
            await (0, m.PR)(x);
        }
    }, [C, x]);
    let M = i.useCallback(() => {
            null != C &&
                (0, v.openUserProfileModal)({
                    userId: C.id,
                    guildId: o.id,
                    analyticsLocation: { section: R.jXE.GUILD_SETTINGS_SOUNDBOARD }
                });
        }, [C, o.id]),
        G = T.ZP.useUserTag(C);
    return (0, r.jsxs)('div', {
        className: a()(A.row, { [A.active]: s }),
        children: [
            S
                ? (0, r.jsx)(g.Z, {
                      emojiId: j,
                      emojiName: N,
                      className: A.emoji
                  })
                : (0, r.jsx)(u.XBm, {
                      size: 'md',
                      color: 'currentColor',
                      className: A.emoji
                  }),
            (0, r.jsx)(u.P3F, {
                onClick: () => {
                    P || l(t);
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
                    onClick: M,
                    children: [
                        (0, r.jsx)(u.qEK, {
                            'aria-label': G,
                            size: u.EFr.SIZE_24,
                            className: A.uploaderAvatar,
                            src: (0, I.ov)(C, !1, 24)
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
                                                  W(k({}, n), {
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
                                              W(
                                                  k(
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
                                  className: A.soundEditIcon
                              })
                          })
                      ]
                  })
                : null
        ]
    });
}

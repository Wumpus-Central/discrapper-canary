n.d(t, { Z: () => w }), n(47120), n(724458);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(525654),
    o = n.n(a),
    c = n(442837),
    d = n(846519),
    u = n(481060),
    m = n(232567),
    h = n(596454),
    g = n(410030),
    x = n(623624),
    p = n(357156),
    _ = n(208049),
    C = n(763296),
    f = n(22382),
    v = n(747071),
    N = n(286654),
    j = n(171368),
    I = n(430824),
    E = n(594174),
    b = n(15385),
    T = n(768581),
    S = n(267642),
    R = n(358085),
    Z = n(51144),
    y = n(999382),
    A = n(70409),
    L = n(981631),
    D = n(710111),
    k = n(388032),
    O = n(643884);
let P = R.isPlatformEmbedded || ('Safari' !== o().name && 'Firefox' !== o().name);
function w() {
    let e = (0, c.e7)([y.Z], () => y.Z.getProps().guild);
    return null == e
        ? null
        : (0, i.jsx)(u.hjN, {
              tag: u.RB0.H1,
              title: k.intl.string(k.t.OWQNYm),
              children: (0, i.jsx)(F, { guild: e })
          });
}
function M(e) {
    let { children: t } = e;
    return (0, i.jsx)(u.X6q, {
        className: O.tableHeader,
        variant: 'heading-sm/semibold',
        color: 'header-secondary',
        children: t
    });
}
function U(e) {
    let { currentTier: t, availableSounds: n, guildId: r } = e,
        l = I.Z.getGuild(r),
        s = (0, S.U2)(t, l);
    return 0 === t
        ? (0, i.jsx)(i.Fragment, {
              children: k.intl.format(k.t['7E9Hd3'], {
                  slots: n,
                  totalSlots: s
              })
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(u.ua7, {
                      text: k.intl.formatToPlainString(k.t.tuuJJS, { currentBoostLevel: t }),
                      children: (e) =>
                          (0, i.jsx)(u.P3F, {
                              className: O.boostingIconWrapper,
                              onClick: () => {
                                  (0, x.f)({
                                      guildId: r,
                                      location: {
                                          section: L.jXE.GUILD_SETTINGS_SOUNDBOARD,
                                          object: L.qAy.BOOST_GEM_ICON
                                      }
                                  });
                              },
                              tabIndex: -1,
                              children: (0, i.jsx)(b.Z, { ...e })
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
let G = (e) => {
        let { renderPopoutBody: t, renderPopoutChildren: n, ...l } = e,
            [s, a] = r.useState(!1),
            o = r.useMemo(() => new d.V7(), []),
            c = r.useCallback(() => {
                o.stop(), a(!0);
            }, [o]),
            m = r.useCallback(() => {
                o.start(200, () => a(!1));
            }, [o]);
        return (0, i.jsx)(u.yRy, {
            shouldShow: s,
            renderPopout: (e) =>
                (0, i.jsx)(u.VqE, {
                    className: O.browserUnsupportedDialog,
                    onMouseEnter: c,
                    onMouseLeave: m,
                    children: t(e)
                }),
            ...l,
            children: (e) => n(e)
        });
    },
    B = () =>
        (0, i.jsx)(G, {
            renderPopoutBody: () =>
                (0, i.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: k.intl.format(k.t.bGXPVl, {})
                }),
            renderPopoutChildren: (e) =>
                (0, i.jsx)(u.zxk, {
                    ...e,
                    disabled: !0,
                    children: k.intl.string(k.t['/uNYPD'])
                })
        });
function F(e) {
    let { guild: t } = e,
        [l, s] = (0, c.Wu)([C.Z], () => {
            var e;
            return [null !== (e = C.Z.getSoundsForGuild(t.id)) && void 0 !== e ? e : D.Hy, C.Z.isFetchingSounds() || C.Z.isFetchingDefaultSounds()];
        }),
        { canCreateExpressions: a } = (0, p.XJ)(t),
        o = r.useRef(null),
        d = (0, g.ZP)(),
        m = t.premiumTier,
        h = (0, S.yw)(t, l, m);
    r.useEffect(() => {
        (0, _.w)();
    }, []);
    let x = r.useMemo(() => l.reduce((e, t) => ((e[t.soundId] = new Audio((0, f.Z)(t.soundId))), e), {}), [l]),
        N = 0 === l.length && !s;
    function j(e) {
        var t;
        null === (t = o.current) || void 0 === t || t.pause();
        let n = x[e.soundId];
        null != n && ((o.current = n), (n.currentTime = 0), (n.volume = (0, v.Z)(e.volume)), n.play());
    }
    if (
        (r.useEffect(
            () => () => {
                var e;
                null === (e = o.current) || void 0 === e || e.pause();
            },
            []
        ),
        s)
    )
        return (0, i.jsx)(u.$jN, {});
    let I = P
        ? (0, i.jsx)(u.zxk, {
              onClick: function () {
                  (0, u.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('56035'), n.e('88315')]).then(n.bind(n, 758961));
                      return (n) =>
                          (0, i.jsx)(e, {
                              ...n,
                              guildId: t.id
                          });
                  });
              },
              disabled: h <= 0 || !a,
              children: k.intl.string(k.t['/uNYPD'])
          })
        : (0, i.jsx)(B, {});
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(u.Text, {
                        className: O.helpText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: k.intl.string(k.t.BohnsL)
                    }),
                    (0, i.jsx)('div', {
                        className: O.buttons,
                        children: !N && I
                    })
                ]
            }),
            N
                ? (0, i.jsxs)(u.ubH, {
                      theme: d,
                      className: O.empty,
                      children: [
                          (0, i.jsx)(u.oxh, {
                              darkSrc: n(458601),
                              lightSrc: n(673557),
                              width: 272,
                              height: 212
                          }),
                          (0, i.jsx)(u.OZU, {
                              note: k.intl.string(k.t.ZhoSBA),
                              noteClassName: O.emptyText,
                              children: k.intl.string(k.t.I6P1p6)
                          }),
                          I
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.$i$, { className: O.divider }),
                          (0, i.jsx)(u.X6q, {
                              className: O.tableTitle,
                              variant: 'heading-md/bold',
                              color: 'header-primary',
                              children: (0, i.jsx)(U, {
                                  guildId: t.id,
                                  currentTier: m,
                                  availableSounds: h
                              })
                          }),
                          (0, i.jsx)(A.Z, {
                              guild: t,
                              numSounds: l.length,
                              isOutOfSlots: 0 === h
                          }),
                          (0, i.jsxs)('div', {
                              className: O.soundTable,
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: O.tableHeaders,
                                      children: [(0, i.jsx)(M, { children: k.intl.string(k.t.sMOuub) }), (0, i.jsx)(M, { children: k.intl.string(k.t.lLFvlZ) }), (0, i.jsx)(M, { children: k.intl.string(k.t['85qMS0']) })]
                                  }),
                                  l.map((e) =>
                                      (0, i.jsx)(
                                          z,
                                          {
                                              sound: e,
                                              isPlaying: !1,
                                              guild: t,
                                              onPlaySound: j
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
function z(e) {
    let { sound: t, isPlaying: l, onPlaySound: a, guild: o } = e,
        { soundId: d, name: g, user: x, userId: C, emojiId: f, emojiName: v } = t,
        I = (0, c.e7)([E.default], () => (null != x ? x : E.default.getUser(C)), [C, x]),
        { canManageGuildExpression: b } = (0, p.XJ)(o),
        S = r.useMemo(() => b(t), [t, b]),
        R = null != f || null != v,
        [y, A] = r.useState(!1),
        D = (0, N.z)(t, o.id);
    async function P() {
        if (!y) {
            A(!0);
            try {
                await (0, _.AA)(o.id, d);
            } catch {
                A(!1);
            }
        }
    }
    r.useEffect(() => {
        null == I && e();
        async function e() {
            await (0, m.PR)(C);
        }
    }, [I, C]);
    let w = r.useCallback(() => {
            null != I &&
                (0, j.openUserProfileModal)({
                    userId: I.id,
                    guildId: o.id,
                    analyticsLocation: { section: L.jXE.GUILD_SETTINGS_SOUNDBOARD }
                });
        }, [I, o.id]),
        M = Z.ZP.useUserTag(I);
    return (0, i.jsxs)('div', {
        className: s()(O.row, { [O.active]: l }),
        children: [
            R
                ? (0, i.jsx)(h.Z, {
                      emojiId: f,
                      emojiName: v,
                      className: O.emoji
                  })
                : (0, i.jsx)(u.XBm, {
                      size: 'md',
                      color: 'currentColor',
                      className: O.emoji
                  }),
            (0, i.jsx)(u.P3F, {
                onClick: () => {
                    y || a(t);
                },
                onContextMenu: D,
                className: O.soundName,
                children: (0, i.jsxs)(u.Text, {
                    variant: 'text-sm/normal',
                    className: O.soundName,
                    children: [
                        g,
                        ' ',
                        (0, i.jsx)(u.gj8, {
                            size: 'md',
                            color: 'currentColor',
                            className: O.soundPreviewIcon
                        })
                    ]
                })
            }),
            null != I &&
                (0, i.jsxs)(u.P3F, {
                    className: O.uploader,
                    onClick: w,
                    children: [
                        (0, i.jsx)(u.qEK, {
                            'aria-label': M,
                            size: u.EFr.SIZE_24,
                            className: O.uploaderAvatar,
                            src: (0, T.ov)(I, !1, 24)
                        }),
                        (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            lineClamp: 1,
                            children: M
                        })
                    ]
                }),
            S
                ? (0, i.jsxs)('div', {
                      className: O.soundEditContainer,
                      children: [
                          (0, i.jsx)(u.P3F, {
                              className: O.soundUpdate,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.ZDy)(async () => {
                                          let { default: e } = await Promise.all([n.e('56035'), n.e('88315')]).then(n.bind(n, 758961));
                                          return (n) =>
                                              (0, i.jsx)(e, {
                                                  ...n,
                                                  guildId: o.id,
                                                  existingSound: t
                                              });
                                      });
                              },
                              'aria-label': k.intl.string(k.t.bt75u7),
                              children: (0, i.jsx)(u.vdY, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: O.soundEditIcon
                              })
                          }),
                          (0, i.jsx)(u.P3F, {
                              className: O.soundRemove,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.h7j)((e) =>
                                          (0, i.jsx)(u.ConfirmModal, {
                                              header: k.intl.formatToPlainString(k.t['PR/VbG'], { soundName: g }),
                                              confirmText: k.intl.string(k.t.oyYWHB),
                                              cancelText: k.intl.string(k.t['ETE/oK']),
                                              onConfirm: P,
                                              ...e,
                                              children: (0, i.jsx)(u.Text, {
                                                  variant: 'text-md/normal',
                                                  children: k.intl.format(k.t['u6+CmJ'], { soundName: g })
                                              })
                                          })
                                      );
                              },
                              'aria-label': k.intl.string(k.t.N86XcH),
                              children: (0, i.jsx)(u.Dio, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: O.soundEditIcon
                              })
                          })
                      ]
                  })
                : null
        ]
    });
}

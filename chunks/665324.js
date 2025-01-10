n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120),
    n(724458);
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
    f = n(208049),
    C = n(763296),
    v = n(22382),
    I = n(747071),
    N = n(286654),
    _ = n(171368),
    T = n(430824),
    j = n(594174),
    b = n(15385),
    E = n(768581),
    S = n(267642),
    R = n(358085),
    y = n(51144),
    A = n(999382),
    Z = n(70409),
    L = n(981631),
    D = n(710111),
    O = n(388032),
    M = n(572005);
let P = R.isPlatformEmbedded || ('Safari' !== o().name && 'Firefox' !== o().name);
function k() {
    let e = (0, c.e7)([A.Z], () => A.Z.getProps().guild);
    return null == e
        ? null
        : (0, i.jsx)(u.FormSection, {
              tag: u.FormTitleTags.H1,
              title: O.intl.string(O.t.OWQNYm),
              children: (0, i.jsx)(F, { guild: e })
          });
}
function w(e) {
    let { children: t } = e;
    return (0, i.jsx)(u.Heading, {
        className: M.tableHeader,
        variant: 'heading-sm/semibold',
        color: 'header-secondary',
        children: t
    });
}
function B(e) {
    let { currentTier: t, availableSounds: n, guildId: r } = e,
        l = T.Z.getGuild(r),
        s = (0, S.U2)(t, l);
    return 0 === t
        ? (0, i.jsx)(i.Fragment, {
              children: O.intl.format(O.t['7E9Hd3'], {
                  slots: n,
                  totalSlots: s
              })
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(u.Tooltip, {
                      text: O.intl.formatToPlainString(O.t.tuuJJS, { currentBoostLevel: t }),
                      children: (e) =>
                          (0, i.jsx)(u.Clickable, {
                              className: M.boostingIconWrapper,
                              onClick: () => {
                                  var e;
                                  return (
                                      (e = r),
                                      void (0, x.f)({
                                          guildId: e,
                                          location: {
                                              section: L.jXE.GUILD_SETTINGS_SOUNDBOARD,
                                              object: L.qAy.BOOST_GEM_ICON
                                          }
                                      })
                                  );
                              },
                              tabIndex: -1,
                              children: (0, i.jsx)(b.Z, { ...e })
                          })
                  }),
                  O.intl.format(O.t.HHCdvb, {
                      slots: n,
                      totalSlots: s,
                      boostLevel: t
                  })
              ]
          });
}
let U = (e) => {
        let { renderPopoutBody: t, renderPopoutChildren: n, ...l } = e,
            [s, a] = r.useState(!1),
            o = r.useMemo(() => new d.V7(), []),
            c = r.useCallback(() => {
                o.stop(), a(!0);
            }, [o]),
            m = r.useCallback(() => {
                o.start(200, () => a(!1));
            }, [o]);
        return (0, i.jsx)(u.Popout, {
            shouldShow: s,
            renderPopout: (e) =>
                (0, i.jsx)(u.Dialog, {
                    className: M.browserUnsupportedDialog,
                    onMouseEnter: c,
                    onMouseLeave: m,
                    children: t(e)
                }),
            ...l,
            children: (e) => n(e)
        });
    },
    G = () =>
        (0, i.jsx)(U, {
            renderPopoutBody: () =>
                (0, i.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: O.intl.format(O.t.bGXPVl, {})
                }),
            renderPopoutChildren: (e) =>
                (0, i.jsx)(u.Button, {
                    ...e,
                    disabled: !0,
                    children: O.intl.string(O.t['/uNYPD'])
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
        (0, f.w)();
    }, []);
    let x = r.useMemo(() => l.reduce((e, t) => ((e[t.soundId] = new Audio((0, v.Z)(t.soundId))), e), {}), [l]),
        N = 0 === l.length && !s;
    function _(e) {
        var t;
        null === (t = o.current) || void 0 === t || t.pause();
        let n = x[e.soundId];
        null != n && ((o.current = n), (n.currentTime = 0), (n.volume = (0, I.Z)(e.volume)), n.play());
    }
    r.useEffect(
        () => () => {
            var e;
            null === (e = o.current) || void 0 === e || e.pause();
        },
        []
    );
    if (s) return (0, i.jsx)(u.Spinner, {});
    let T = P
        ? (0, i.jsx)(u.Button, {
              onClick: function () {
                  (0, u.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e('56035'), n.e('48750')]).then(n.bind(n, 758961));
                      return (n) =>
                          (0, i.jsx)(e, {
                              ...n,
                              guildId: t.id
                          });
                  });
              },
              disabled: h <= 0 || !a,
              children: O.intl.string(O.t['/uNYPD'])
          })
        : (0, i.jsx)(G, {});
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(u.Text, {
                        className: M.helpText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: O.intl.string(O.t.BohnsL)
                    }),
                    (0, i.jsx)('div', {
                        className: M.buttons,
                        children: !N && T
                    })
                ]
            }),
            N
                ? (0, i.jsxs)(u.EmptyState, {
                      theme: d,
                      className: M.empty,
                      children: [
                          (0, i.jsx)(u.EmptyStateImage, {
                              darkSrc: n(458601),
                              lightSrc: n(673557),
                              width: 272,
                              height: 212
                          }),
                          (0, i.jsx)(u.EmptyStateText, {
                              note: O.intl.string(O.t.ZhoSBA),
                              noteClassName: M.emptyText,
                              children: O.intl.string(O.t.I6P1p6)
                          }),
                          T
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.FormDivider, { className: M.divider }),
                          (0, i.jsx)(u.Heading, {
                              className: M.tableTitle,
                              variant: 'heading-md/bold',
                              color: 'header-primary',
                              children: (0, i.jsx)(B, {
                                  guildId: t.id,
                                  currentTier: m,
                                  availableSounds: h
                              })
                          }),
                          (0, i.jsx)(Z.Z, {
                              guild: t,
                              numSounds: l.length,
                              isOutOfSlots: 0 === h
                          }),
                          (0, i.jsxs)('div', {
                              className: M.soundTable,
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: M.tableHeaders,
                                      children: [(0, i.jsx)(w, { children: O.intl.string(O.t.sMOuub) }), (0, i.jsx)(w, { children: O.intl.string(O.t.lLFvlZ) }), (0, i.jsx)(w, { children: O.intl.string(O.t['85qMS0']) })]
                                  }),
                                  l.map((e) =>
                                      (0, i.jsx)(
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
    let { sound: t, isPlaying: l, onPlaySound: a, guild: o } = e,
        { soundId: d, name: g, user: x, userId: C, emojiId: v, emojiName: I } = t,
        T = (0, c.e7)([j.default], () => (null != x ? x : j.default.getUser(C)), [C, x]),
        { canManageGuildExpression: b } = (0, p.XJ)(o),
        S = r.useMemo(() => b(t), [t, b]),
        R = null != v || null != I,
        [A, Z] = r.useState(!1),
        D = (0, N.z)(t, o.id);
    async function P() {
        if (!A) {
            Z(!0);
            try {
                await (0, f.AA)(o.id, d);
            } catch {
                Z(!1);
            }
        }
    }
    r.useEffect(() => {
        null == T && e();
        async function e() {
            await (0, m.PR)(C);
        }
    }, [T, C]);
    let k = r.useCallback(() => {
            null != T &&
                (0, _.openUserProfileModal)({
                    userId: T.id,
                    guildId: o.id,
                    analyticsLocation: { section: L.jXE.GUILD_SETTINGS_SOUNDBOARD }
                });
        }, [T, o.id]),
        w = y.ZP.useUserTag(T);
    return (0, i.jsxs)('div', {
        className: s()(M.row, { [M.active]: l }),
        children: [
            R
                ? (0, i.jsx)(h.Z, {
                      emojiId: v,
                      emojiName: I,
                      className: M.emoji
                  })
                : (0, i.jsx)(u.ImageIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: M.emoji
                  }),
            (0, i.jsx)(u.Clickable, {
                onClick: () => {
                    !A && a(t);
                },
                onContextMenu: D,
                className: M.soundName,
                children: (0, i.jsxs)(u.Text, {
                    variant: 'text-sm/normal',
                    className: M.soundName,
                    children: [
                        g,
                        ' ',
                        (0, i.jsx)(u.VoiceNormalIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: M.soundPreviewIcon
                        })
                    ]
                })
            }),
            null != T &&
                (0, i.jsxs)(u.Clickable, {
                    className: M.uploader,
                    onClick: k,
                    children: [
                        (0, i.jsx)(u.Avatar, {
                            'aria-label': w,
                            size: u.AvatarSizes.SIZE_24,
                            className: M.uploaderAvatar,
                            src: (0, E.ov)(T, !1, 24)
                        }),
                        (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            lineClamp: 1,
                            children: w
                        })
                    ]
                }),
            S
                ? (0, i.jsxs)('div', {
                      className: M.soundEditContainer,
                      children: [
                          (0, i.jsx)(u.Clickable, {
                              className: M.soundUpdate,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([n.e('56035'), n.e('48750')]).then(n.bind(n, 758961));
                                          return (n) =>
                                              (0, i.jsx)(e, {
                                                  ...n,
                                                  guildId: o.id,
                                                  existingSound: t
                                              });
                                      });
                              },
                              'aria-label': O.intl.string(O.t.bt75u7),
                              children: (0, i.jsx)(u.PencilIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: M.soundEditIcon
                              })
                          }),
                          (0, i.jsx)(u.Clickable, {
                              className: M.soundRemove,
                              onClick: function (e) {
                                  e.stopPropagation(),
                                      (0, u.openModal)((e) =>
                                          (0, i.jsx)(u.ConfirmModal, {
                                              header: O.intl.formatToPlainString(O.t['PR/VbG'], { soundName: g }),
                                              confirmText: O.intl.string(O.t.oyYWHB),
                                              cancelText: O.intl.string(O.t['ETE/oK']),
                                              onConfirm: P,
                                              ...e,
                                              children: (0, i.jsx)(u.Text, {
                                                  variant: 'text-md/normal',
                                                  children: O.intl.format(O.t['u6+CmJ'], { soundName: g })
                                              })
                                          })
                                      );
                              },
                              'aria-label': O.intl.string(O.t.N86XcH),
                              children: (0, i.jsx)(u.XSmallIcon, {
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

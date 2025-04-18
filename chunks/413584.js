n.d(t, { Z: () => G }), n(388685), n(953529), n(781311), n(539854);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(348327),
    o = n.n(a),
    c = n(999153),
    d = n(584922),
    u = n(442837),
    m = n(481060),
    g = n(239091),
    p = n(596454),
    h = n(493773),
    f = n(607070),
    x = n(933557),
    b = n(471445),
    j = n(339085),
    N = n(565138),
    _ = n(372769),
    v = n(690221),
    O = n(524329),
    C = n(575258),
    y = n(514698),
    I = n(592125),
    E = n(4912),
    S = n(626135),
    T = n(700785),
    P = n(434404),
    w = n(92160),
    R = n(981631),
    Z = n(231338),
    D = n(388032),
    A = n(804729);
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
let L = 'WELCOME_CHANNEL',
    M = (e) => {
        var t;
        let s,
            { guildId: a, welcomeChannel: o, onEdit: h, onChannelReorder: f, isDropHovered: N, index: _ } = e,
            [v, O] = i.useState(!1),
            C = i.useRef(null),
            S = (0, u.e7)([I.Z], () => I.Z.getChannel(o.channel_id)),
            P = (0, u.e7)([j.ZP], () => (null != o.emoji_id ? j.ZP.getUsableCustomEmojiById(o.emoji_id) : null)),
            w = null != S && T.Uu(R.Plq.VIEW_CHANNEL, S),
            M = null != (t = (0, b.KS)(S)) ? t : m.VL1,
            G = (0, x.ZP)(S, !1),
            [, U] = (0, c.c)({
                type: L,
                item: {
                    channel: o,
                    index: _
                },
                end: (e, t) => {
                    null == e || t.didDrop() || f(e.channel, null, !0);
                }
            }),
            [, B] = (0, d.L)({
                accept: L,
                hover: (e) => {
                    f(e.channel, _, !1);
                },
                drop: (e) => {
                    f(e.channel, _, !0);
                }
            });
        return (
            i.useLayoutEffect(
                () => (
                    U(B(C)),
                    () => {
                        U(null), B(null);
                    }
                ),
                [U, B]
            ),
            (s = w
                ? null != P || null != o.emoji_name
                    ? (0, r.jsx)(p.Z, {
                          emojiId: null == P ? void 0 : P.id,
                          emojiName: null != P ? P.name : o.emoji_name,
                          animated: !!(null == P ? void 0 : P.animated)
                      })
                    : (0, r.jsx)(M, {
                          size: 'md',
                          color: 'currentColor',
                          className: A.channelIcon
                      })
                : (0, r.jsx)(E.Z, {
                      width: 24,
                      height: 24,
                      className: A.warningIcon
                  })),
            (0, r.jsxs)('div', {
                className: l()(A.welcomeChannel, { [A.dragging]: N }),
                ref: C,
                'data-dnd-name': o.description,
                onContextMenu: (e) => {
                    (0, g.jW)(e, async () => {
                        let { default: e } = await n.e('68535').then(n.bind(n, 602320));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                W(k({}, t), {
                                    guildId: a,
                                    welcomeChannel: o,
                                    onChannelReorder: f,
                                    setShowConfirmModal: O,
                                    onEdit: h,
                                    index: _
                                })
                            );
                    });
                },
                children: [
                    s,
                    (0, r.jsxs)('div', {
                        className: A.channelDescriptionWrapper,
                        children: [
                            (0, r.jsx)(m.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: o.description
                            }),
                            (0, r.jsxs)(m.Text, {
                                className: w ? void 0 : A.channelWarning,
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                children: [
                                    (0, r.jsx)(M, {
                                        className: A.channelTitleIcon,
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    (0, r.jsx)('span', { children: w ? G : D.NW.string(D.t.zFuCsL) })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(m.zxk, {
                        color: m.zxk.Colors.PRIMARY,
                        size: m.zxk.Sizes.SMALL,
                        disabled: !0,
                        onClick: () =>
                            (0, m.ZDy)(
                                async () => {
                                    let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                                    return (t) =>
                                        (0, r.jsx)(
                                            e,
                                            W(k({}, t), {
                                                welcomeChannel: o,
                                                guildId: a,
                                                onSave: h
                                            })
                                        );
                                },
                                { onCloseRequest: () => Z.Vq }
                            ),
                        children: D.NW.string(D.t.bt75u7)
                    }),
                    v &&
                        (0, r.jsx)(y.Z, {
                            onConfirm: () => h(),
                            onCancel: () => O(!1),
                            channelId: o.channel_id
                        })
                ]
            })
        );
    },
    G = (e) => {
        let { guild: t, showCreateModal: s } = e,
            { welcomeSettings: l, originalWelcomeSettings: a } = (0, u.e7)([C.Z], () => C.Z.getSettingsProps()),
            c = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
            [d, g] = i.useState(null),
            [p, x] = i.useState(!1),
            [b, j] = i.useState(!1),
            { description: y, channels: I, enabled: T } = l,
            L = () => {
                null != t && y !== a.description && ((0, O.Es)(t.id, { description: null == y ? void 0 : y.trim() }), x(!0));
            },
            G = (e) => {
                null != t && (o()(e, a.channels) || ((0, O.Es)(t.id, { channels: e }), x(!0)));
            },
            U = (e) => {
                null != t && e !== a.enabled && ((0, O.Es)(t.id, { enabled: e }), j(!c), x(!0));
            },
            B = (e) => {
                if (null == e) return;
                let t = [...(null != I ? I : []), e];
                (0, O.VP)({ channels: t }), G(t);
            },
            F = (e) => (t) => {
                let n = [...(null != I ? I : [])];
                null == t ? n.splice(e, 1) : (n[e] = t), (0, O.VP)({ channels: n }), G(n), 0 === n.length && T && ((0, O.VP)({ enabled: !1 }), U(!1));
            },
            z = (e, t, n) => {
                if (null == I) return;
                let r = I.indexOf(e),
                    i = [...I];
                null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), (0, O.VP)({ channels: i })), n ? (G(i), g(null)) : g(t);
            },
            H = i.useRef(!1);
        (0, h.ZP)(
            () => (
                null != t &&
                    s &&
                    (0, m.ZDy)(
                        async () => {
                            let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    W(k({}, n), {
                                        guildId: t.id,
                                        onSave: B
                                    })
                                );
                        },
                        { onCloseRequest: () => Z.Vq }
                    ),
                () => {
                    H.current = !0;
                }
            )
        ),
            i.useEffect(
                () => () => {
                    if (H.current && p) {
                        let e = [],
                            n = [],
                            r = !1;
                        null == I ||
                            I.forEach((t) => {
                                e.push(t.description), n.push(t.channel_id), null != t.emoji_id && (r = !0);
                            }),
                            S.default.track(R.rMx.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
                                guild_id: null == t ? void 0 : t.id,
                                options: e,
                                options_channel_ids: n,
                                guild_description: y,
                                has_custom_emojis: r,
                                is_enabled: T
                            });
                    }
                },
                [p, I, y, T, t, H]
            ),
            i.useEffect(() => () => (0, O.sm)(), []);
        let V = i.useCallback(() => {
            null != t && P.Z.open(t.id, R.pNK.ONBOARDING);
        }, [t]);
        return null == t
            ? null
            : (0, r.jsxs)(m.hjN, {
                  title: D.NW.string(D.t['2rkmDg']),
                  tag: m.RB0.H1,
                  children: [
                      (0, r.jsx)('div', {
                          className: A.notice,
                          children: (0, r.jsxs)(m.Text, {
                              variant: 'text-md/normal',
                              children: [
                                  (0, r.jsx)(E.Z, { className: A.noticeIcon }),
                                  D.NW.format(D.t.oj2vi4, {
                                      onboardingLink: (e) =>
                                          (0, r.jsx)(v.Z, {
                                              onClick: V,
                                              children: e
                                          })
                                  })
                              ]
                          })
                      }),
                      (0, r.jsx)(m.Text, {
                          variant: 'text-sm/normal',
                          children: D.NW.string(D.t['w2d74+'])
                      }),
                      (0, r.jsx)(w.Z, {
                          enabled: T,
                          onPreview:
                              (null == I ? void 0 : I.length) === 0
                                  ? void 0
                                  : () => {
                                        null != t &&
                                            (0, m.ZDy)(async () => {
                                                let { default: e } = await n.e('90542').then(n.bind(n, 184782));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        e,
                                                        W(k({}, n), {
                                                            guildId: t.id,
                                                            isPreview: !0
                                                        })
                                                    );
                                            });
                                    },
                          onToggle:
                              T || (null == I ? void 0 : I.length) !== 0
                                  ? () => {
                                        U(!T);
                                    }
                                  : void 0,
                          animateStatus: b,
                          firstLine: T ? D.NW.string(D.t.JbB7Qk) : D.NW.string(D.t['/bd0Qk']),
                          secondLine: T ? D.NW.string(D.t['TA1g7+']) : D.NW.string(D.t.nc6r1N)
                      }),
                      (0, r.jsxs)('div', {
                          className: A.previewContainer,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: A.welcomeHeader,
                                  children: [
                                      (0, r.jsx)(N.Z, {
                                          size: N.Z.Sizes.LARGER,
                                          className: A.icon,
                                          guild: t,
                                          animate: !0,
                                          tabIndex: -1
                                      }),
                                      (0, r.jsx)(m.X6q, {
                                          className: A.welcomeTitle,
                                          variant: 'heading-xl/semibold',
                                          children: D.NW.format(D.t['0aydCA'], {
                                              guildName: t.name,
                                              guildNameHook: (e, n) =>
                                                  (0, r.jsxs)(
                                                      'span',
                                                      {
                                                          children: [
                                                              (0, r.jsx)(_.Z, {
                                                                  guild: t,
                                                                  className: A.headerGuildBadge,
                                                                  flowerStarClassName: A.flowerStar
                                                              }),
                                                              (0, r.jsx)('strong', { children: e })
                                                          ]
                                                      },
                                                      n
                                                  )
                                          })
                                      }),
                                      (0, r.jsx)('div', {
                                          className: A.descriptionWrapper,
                                          children: (0, r.jsx)(m.Kx8, {
                                              className: A.descriptionInput,
                                              placeholder: D.NW.string(D.t.qzZHaW),
                                              onChange: (e) => {
                                                  (0, O.VP)({ description: e });
                                              },
                                              onBlur: () => {
                                                  L();
                                              },
                                              onKeyDown: (e) => {
                                                  e.keyCode === R.yXg.ENTER && e.preventDefault();
                                              },
                                              value: y,
                                              maxLength: 140,
                                              disabled: !0
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsx)(m.$i$, { className: A.divider }),
                              (0, r.jsxs)('div', {
                                  className: A.welcomeChannels,
                                  children: [
                                      (0, r.jsx)(m.vwX, { children: D.NW.string(D.t.euJXzc) }),
                                      (0, r.jsx)(m.Text, {
                                          variant: 'text-sm/normal',
                                          className: A.addChannelSubtext,
                                          children: D.NW.string(D.t.VOnnn5)
                                      }),
                                      null == I
                                          ? void 0
                                          : I.map((e, n) =>
                                                (0, r.jsx)(
                                                    M,
                                                    {
                                                        guildId: t.id,
                                                        welcomeChannel: e,
                                                        onEdit: F(n),
                                                        onChannelReorder: z,
                                                        isDropHovered: n === d,
                                                        index: n
                                                    },
                                                    n
                                                )
                                            ),
                                      (null == I || I.length < 5) &&
                                          (0, r.jsx)(m.zxk, {
                                              onClick: () =>
                                                  (0, m.ZDy)(
                                                      async () => {
                                                          let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                                                          return (n) =>
                                                              (0, r.jsx)(
                                                                  e,
                                                                  W(k({}, n), {
                                                                      guildId: t.id,
                                                                      onSave: B
                                                                  })
                                                              );
                                                      },
                                                      { onCloseRequest: () => Z.Vq }
                                                  ),
                                              className: A.addChannelButton,
                                              disabled: !0,
                                              color: m.zxk.Colors.PRIMARY,
                                              children: D.NW.string(D.t.U1BDe3)
                                          })
                                  ]
                              })
                          ]
                      })
                  ]
              });
    };

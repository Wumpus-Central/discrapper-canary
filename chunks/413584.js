n.d(t, { Z: () => U }), n(388685), n(953529), n(781311), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(348327),
    o = n.n(a),
    c = n(999153),
    u = n(584922),
    d = n(442837),
    m = n(481060),
    g = n(239091),
    p = n(596454),
    h = n(493773),
    f = n(607070),
    x = n(933557),
    b = n(471445),
    j = n(339085),
    _ = n(565138),
    v = n(372769),
    O = n(690221),
    C = n(524329),
    y = n(575258),
    N = n(514698),
    I = n(592125),
    E = n(4912),
    S = n(626135),
    T = n(700785),
    P = n(434404),
    w = n(92160),
    R = n(981631),
    Z = n(231338),
    D = n(388032),
    k = n(983459);
function A(e) {
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
let M = 'WELCOME_CHANNEL',
    G = (e) => {
        var t;
        let l,
            { guildId: a, welcomeChannel: o, onEdit: h, onChannelReorder: f, isDropHovered: _, index: v } = e,
            [O, C] = i.useState(!1),
            y = i.useRef(null),
            S = (0, d.e7)([I.Z], () => I.Z.getChannel(o.channel_id)),
            P = (0, d.e7)([j.ZP], () => (null != o.emoji_id ? j.ZP.getUsableCustomEmojiById(o.emoji_id) : null)),
            w = null != S && T.Uu(R.Plq.VIEW_CHANNEL, S),
            G = null != (t = (0, b.KS)(S)) ? t : m.VL1,
            U = (0, x.ZP)(S, !1),
            [, B] = (0, c.c)({
                type: M,
                item: {
                    channel: o,
                    index: v
                },
                end: (e, t) => {
                    null == e || t.didDrop() || f(e.channel, null, !0);
                }
            }),
            [, F] = (0, u.L)({
                accept: M,
                hover: (e) => {
                    f(e.channel, v, !1);
                },
                drop: (e) => {
                    f(e.channel, v, !0);
                }
            });
        return (
            i.useLayoutEffect(
                () => (
                    B(F(y)),
                    () => {
                        B(null), F(null);
                    }
                ),
                [B, F]
            ),
            (l = w
                ? null != P || null != o.emoji_name
                    ? (0, r.jsx)(p.Z, {
                          emojiId: null == P ? void 0 : P.id,
                          emojiName: null != P ? P.name : o.emoji_name,
                          animated: !!(null == P ? void 0 : P.animated)
                      })
                    : (0, r.jsx)(G, {
                          size: 'md',
                          color: 'currentColor',
                          className: k.channelIcon
                      })
                : (0, r.jsx)(E.Z, {
                      width: 24,
                      height: 24,
                      className: k.warningIcon
                  })),
            (0, r.jsxs)('div', {
                className: s()(k.welcomeChannel, { [k.dragging]: _ }),
                ref: y,
                'data-dnd-name': o.description,
                onContextMenu: (e) => {
                    (0, g.jW)(e, async () => {
                        let { default: e } = await n.e('68535').then(n.bind(n, 602320));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                L(A({}, t), {
                                    guildId: a,
                                    welcomeChannel: o,
                                    onChannelReorder: f,
                                    setShowConfirmModal: C,
                                    onEdit: h,
                                    index: v
                                })
                            );
                    });
                },
                children: [
                    l,
                    (0, r.jsxs)('div', {
                        className: k.channelDescriptionWrapper,
                        children: [
                            (0, r.jsx)(m.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: o.description
                            }),
                            (0, r.jsxs)(m.Text, {
                                className: w ? void 0 : k.channelWarning,
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                children: [
                                    (0, r.jsx)(G, {
                                        className: k.channelTitleIcon,
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    (0, r.jsx)('span', { children: w ? U : D.intl.string(D.t.zFuCsL) })
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
                                            L(A({}, t), {
                                                welcomeChannel: o,
                                                guildId: a,
                                                onSave: h
                                            })
                                        );
                                },
                                { onCloseRequest: () => Z.Vq }
                            ),
                        children: D.intl.string(D.t.bt75u7)
                    }),
                    O &&
                        (0, r.jsx)(N.Z, {
                            onConfirm: () => h(),
                            onCancel: () => C(!1),
                            channelId: o.channel_id
                        })
                ]
            })
        );
    },
    U = (e) => {
        let { guild: t, showCreateModal: l } = e,
            { welcomeSettings: s, originalWelcomeSettings: a } = (0, d.e7)([y.Z], () => y.Z.getSettingsProps()),
            c = (0, d.e7)([f.Z], () => f.Z.useReducedMotion),
            [u, g] = i.useState(null),
            [p, x] = i.useState(!1),
            [b, j] = i.useState(!1),
            { description: N, channels: I, enabled: T } = s,
            M = () => {
                null != t && N !== a.description && ((0, C.Es)(t.id, { description: null == N ? void 0 : N.trim() }), x(!0));
            },
            U = (e) => {
                null != t && (o()(e, a.channels) || ((0, C.Es)(t.id, { channels: e }), x(!0)));
            },
            B = (e) => {
                null != t && e !== a.enabled && ((0, C.Es)(t.id, { enabled: e }), j(!c), x(!0));
            },
            F = (e) => {
                if (null == e) return;
                let t = [...(null != I ? I : []), e];
                (0, C.VP)({ channels: t }), U(t);
            },
            z = (e) => (t) => {
                let n = [...(null != I ? I : [])];
                null == t ? n.splice(e, 1) : (n[e] = t), (0, C.VP)({ channels: n }), U(n), 0 === n.length && T && ((0, C.VP)({ enabled: !1 }), B(!1));
            },
            H = (e, t, n) => {
                if (null == I) return;
                let r = I.indexOf(e),
                    i = [...I];
                null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), (0, C.VP)({ channels: i })), n ? (U(i), g(null)) : g(t);
            },
            W = i.useRef(!1);
        (0, h.ZP)(
            () => (
                null != t &&
                    l &&
                    (0, m.ZDy)(
                        async () => {
                            let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    L(A({}, n), {
                                        guildId: t.id,
                                        onSave: F
                                    })
                                );
                        },
                        { onCloseRequest: () => Z.Vq }
                    ),
                () => {
                    W.current = !0;
                }
            )
        ),
            i.useEffect(
                () => () => {
                    if (W.current && p) {
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
                                guild_description: N,
                                has_custom_emojis: r,
                                is_enabled: T
                            });
                    }
                },
                [p, I, N, T, t, W]
            ),
            i.useEffect(() => () => (0, C.sm)(), []);
        let V = i.useCallback(() => {
            null != t && P.Z.open(t.id, R.pNK.ONBOARDING);
        }, [t]);
        return null == t
            ? null
            : (0, r.jsxs)(m.hjN, {
                  title: D.intl.string(D.t['2rkmDg']),
                  tag: m.RB0.H1,
                  children: [
                      (0, r.jsx)('div', {
                          className: k.notice,
                          children: (0, r.jsxs)(m.Text, {
                              variant: 'text-md/normal',
                              children: [
                                  (0, r.jsx)(E.Z, { className: k.noticeIcon }),
                                  D.intl.format(D.t.oj2vi4, {
                                      onboardingLink: (e) =>
                                          (0, r.jsx)(O.Z, {
                                              onClick: V,
                                              children: e
                                          })
                                  })
                              ]
                          })
                      }),
                      (0, r.jsx)(m.Text, {
                          variant: 'text-sm/normal',
                          children: D.intl.string(D.t['w2d74+'])
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
                                                        L(A({}, n), {
                                                            guildId: t.id,
                                                            isPreview: !0
                                                        })
                                                    );
                                            });
                                    },
                          onToggle:
                              T || (null == I ? void 0 : I.length) !== 0
                                  ? () => {
                                        B(!T);
                                    }
                                  : void 0,
                          animateStatus: b,
                          firstLine: T ? D.intl.string(D.t.JbB7Qk) : D.intl.string(D.t['/bd0Qk']),
                          secondLine: T ? D.intl.string(D.t['TA1g7+']) : D.intl.string(D.t.nc6r1N)
                      }),
                      (0, r.jsxs)('div', {
                          className: k.previewContainer,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: k.welcomeHeader,
                                  children: [
                                      (0, r.jsx)(_.Z, {
                                          size: _.Z.Sizes.LARGER,
                                          className: k.icon,
                                          guild: t,
                                          animate: !0,
                                          tabIndex: -1
                                      }),
                                      (0, r.jsx)(m.X6q, {
                                          className: k.welcomeTitle,
                                          variant: 'heading-xl/semibold',
                                          children: D.intl.format(D.t['0aydCA'], {
                                              guildName: t.name,
                                              guildNameHook: (e, n) =>
                                                  (0, r.jsxs)(
                                                      'span',
                                                      {
                                                          children: [
                                                              (0, r.jsx)(v.Z, {
                                                                  guild: t,
                                                                  className: k.headerGuildBadge,
                                                                  flowerStarClassName: k.flowerStar
                                                              }),
                                                              (0, r.jsx)('strong', { children: e })
                                                          ]
                                                      },
                                                      n
                                                  )
                                          })
                                      }),
                                      (0, r.jsx)('div', {
                                          className: k.descriptionWrapper,
                                          children: (0, r.jsx)(m.Kx8, {
                                              className: k.descriptionInput,
                                              placeholder: D.intl.string(D.t.qzZHaW),
                                              onChange: (e) => {
                                                  (0, C.VP)({ description: e });
                                              },
                                              onBlur: () => {
                                                  M();
                                              },
                                              onKeyDown: (e) => {
                                                  e.keyCode === R.yXg.ENTER && e.preventDefault();
                                              },
                                              value: N,
                                              maxLength: 140,
                                              disabled: !0
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsx)(m.$i$, { className: k.divider }),
                              (0, r.jsxs)('div', {
                                  className: k.welcomeChannels,
                                  children: [
                                      (0, r.jsx)(m.vwX, { children: D.intl.string(D.t.euJXzc) }),
                                      (0, r.jsx)(m.Text, {
                                          variant: 'text-sm/normal',
                                          className: k.addChannelSubtext,
                                          children: D.intl.string(D.t.VOnnn5)
                                      }),
                                      null == I
                                          ? void 0
                                          : I.map((e, n) =>
                                                (0, r.jsx)(
                                                    G,
                                                    {
                                                        guildId: t.id,
                                                        welcomeChannel: e,
                                                        onEdit: z(n),
                                                        onChannelReorder: H,
                                                        isDropHovered: n === u,
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
                                                                  L(A({}, n), {
                                                                      guildId: t.id,
                                                                      onSave: F
                                                                  })
                                                              );
                                                      },
                                                      { onCloseRequest: () => Z.Vq }
                                                  ),
                                              className: k.addChannelButton,
                                              disabled: !0,
                                              color: m.zxk.Colors.PRIMARY,
                                              children: D.intl.string(D.t.U1BDe3)
                                          })
                                  ]
                              })
                          ]
                      })
                  ]
              });
    };

(n.d(t, { Z: () => B }), n(388685), n(953529), n(781311), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(348327),
    o = n.n(s),
    c = n(562075),
    d = n(539202),
    u = n(442837),
    m = n(755721),
    g = n(481060),
    p = n(239091),
    h = n(596454),
    f = n(493773),
    x = n(607070),
    b = n(933557),
    j = n(471445),
    v = n(339085),
    _ = n(565138),
    O = n(372769),
    y = n(690221),
    C = n(524329),
    N = n(575258),
    I = n(514698),
    E = n(592125),
    S = n(4912),
    T = n(626135),
    P = n(700785),
    w = n(434404),
    R = n(92160),
    Z = n(981631),
    D = n(231338),
    A = n(388032),
    k = n(983459);
function L(e) {
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
function M(e, t) {
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
let G = 'WELCOME_CHANNEL',
    U = (e) => {
        var t;
        let l,
            { guildId: s, welcomeChannel: o, onEdit: m, onChannelReorder: f, isDropHovered: x, index: _ } = e,
            [O, y] = i.useState(!1),
            C = i.useRef(null),
            N = (0, u.e7)([E.Z], () => E.Z.getChannel(o.channel_id)),
            T = (0, u.e7)([v.ZP], () => (null != o.emoji_id ? v.ZP.getUsableCustomEmojiById(o.emoji_id) : null)),
            w = null != N && P.Uu(Z.Plq.VIEW_CHANNEL, N),
            R = null != (t = (0, j.KS)(N)) ? t : g.VL1,
            U = (0, b.ZP)(N, !1),
            [, B] = (0, c.c)({
                type: G,
                item: {
                    channel: o,
                    index: _
                },
                end: (e, t) => {
                    null == e || t.didDrop() || f(e.channel, null, !0);
                }
            }),
            [, F] = (0, d.L)({
                accept: G,
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
                    B(F(C)),
                    () => {
                        (B(null), F(null));
                    }
                ),
                [B, F]
            ),
            (l = w
                ? null != T || null != o.emoji_name
                    ? (0, r.jsx)(h.Z, {
                          emojiId: null == T ? void 0 : T.id,
                          emojiName: null != T ? T.name : o.emoji_name,
                          animated: !!(null == T ? void 0 : T.animated)
                      })
                    : (0, r.jsx)(R, {
                          size: 'md',
                          color: 'currentColor',
                          className: k.channelIcon
                      })
                : (0, r.jsx)(S.Z, {
                      width: 24,
                      height: 24,
                      className: k.warningIcon
                  })),
            (0, r.jsxs)('div', {
                className: a()(k.welcomeChannel, { [k.dragging]: x }),
                ref: C,
                'data-dnd-name': o.description,
                onContextMenu: (e) => {
                    (0, p.jW)(e, async () => {
                        let { default: e } = await n.e('68535').then(n.bind(n, 602320));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                M(L({}, t), {
                                    guildId: s,
                                    welcomeChannel: o,
                                    onChannelReorder: f,
                                    setShowConfirmModal: y,
                                    onEdit: m,
                                    index: _
                                })
                            );
                    });
                },
                children: [
                    l,
                    (0, r.jsxs)('div', {
                        className: k.channelDescriptionWrapper,
                        children: [
                            (0, r.jsx)(g.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: o.description
                            }),
                            (0, r.jsxs)(g.Text, {
                                className: w ? void 0 : k.channelWarning,
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                children: [
                                    (0, r.jsx)(R, {
                                        className: k.channelTitleIcon,
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    (0, r.jsx)('span', { children: w ? U : A.intl.string(A.t.zFuCsL) })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(g.zxk, {
                        variant: 'secondary',
                        size: 'sm',
                        text: A.intl.string(A.t.bt75u7),
                        disabled: !0,
                        onClick: () =>
                            (0, g.ZDy)(
                                async () => {
                                    let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                                    return (t) =>
                                        (0, r.jsx)(
                                            e,
                                            M(L({}, t), {
                                                welcomeChannel: o,
                                                guildId: s,
                                                onSave: m
                                            })
                                        );
                                },
                                { onCloseRequest: () => D.Vq }
                            )
                    }),
                    O &&
                        (0, r.jsx)(I.Z, {
                            onConfirm: () => m(),
                            onCancel: () => y(!1),
                            channelId: o.channel_id
                        })
                ]
            })
        );
    },
    B = (e) => {
        let { guild: t, showCreateModal: l } = e,
            { welcomeSettings: a, originalWelcomeSettings: s } = (0, u.e7)([N.Z], () => N.Z.getSettingsProps()),
            c = (0, u.e7)([x.Z], () => x.Z.useReducedMotion),
            [d, p] = i.useState(null),
            [h, b] = i.useState(!1),
            [j, v] = i.useState(!1),
            { description: I, channels: E, enabled: P } = a,
            G = () => {
                null != t && I !== s.description && ((0, C.Es)(t.id, { description: null == I ? void 0 : I.trim() }), b(!0));
            },
            B = (e) => {
                null != t && (o()(e, s.channels) || ((0, C.Es)(t.id, { channels: e }), b(!0)));
            },
            F = (e) => {
                null != t && e !== s.enabled && ((0, C.Es)(t.id, { enabled: e }), v(!c), b(!0));
            },
            H = (e) => {
                if (null == e) return;
                let t = [...(null != E ? E : []), e];
                ((0, C.VP)({ channels: t }), B(t));
            },
            z = (e) => (t) => {
                let n = [...(null != E ? E : [])];
                (null == t ? n.splice(e, 1) : (n[e] = t), (0, C.VP)({ channels: n }), B(n), 0 === n.length && P && ((0, C.VP)({ enabled: !1 }), F(!1)));
            },
            W = (e, t, n) => {
                if (null == E) return;
                let r = E.indexOf(e),
                    i = [...E];
                (null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), (0, C.VP)({ channels: i })), n ? (B(i), p(null)) : p(t));
            },
            V = i.useRef(!1);
        ((0, f.ZP)(
            () => (
                null != t &&
                    l &&
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    M(L({}, n), {
                                        guildId: t.id,
                                        onSave: H
                                    })
                                );
                        },
                        { onCloseRequest: () => D.Vq }
                    ),
                () => {
                    V.current = !0;
                }
            )
        ),
            i.useEffect(
                () => () => {
                    if (V.current && h) {
                        let e = [],
                            n = [],
                            r = !1;
                        (null == E ||
                            E.forEach((t) => {
                                (e.push(t.description), n.push(t.channel_id), null != t.emoji_id && (r = !0));
                            }),
                            T.default.track(Z.rMx.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
                                guild_id: null == t ? void 0 : t.id,
                                options: e,
                                options_channel_ids: n,
                                guild_description: I,
                                has_custom_emojis: r,
                                is_enabled: P
                            }));
                    }
                },
                [h, E, I, P, t, V]
            ),
            i.useEffect(() => () => (0, C.sm)(), []));
        let Y = i.useCallback(() => {
            null != t && w.Z.open(t.id, Z.pNK.ONBOARDING);
        }, [t]);
        return null == t
            ? null
            : (0, r.jsxs)(g.hjN, {
                  title: A.intl.string(A.t['2rkmDg']),
                  tag: g.RB0.H1,
                  children: [
                      (0, r.jsx)('div', {
                          className: k.notice,
                          children: (0, r.jsxs)(g.Text, {
                              variant: 'text-md/normal',
                              children: [
                                  (0, r.jsx)(S.Z, { className: k.noticeIcon }),
                                  A.intl.format(A.t.oj2vi4, {
                                      onboardingLink: (e) =>
                                          (0, r.jsx)(y.Z, {
                                              onClick: Y,
                                              children: e
                                          })
                                  })
                              ]
                          })
                      }),
                      (0, r.jsx)(g.Text, {
                          variant: 'text-sm/normal',
                          children: A.intl.string(A.t['w2d74+'])
                      }),
                      (0, r.jsx)(R.Z, {
                          enabled: P,
                          onPreview:
                              (null == E ? void 0 : E.length) === 0
                                  ? void 0
                                  : () => {
                                        null != t &&
                                            (0, g.ZDy)(async () => {
                                                let { default: e } = await n.e('90542').then(n.bind(n, 184782));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        e,
                                                        M(L({}, n), {
                                                            guildId: t.id,
                                                            isPreview: !0
                                                        })
                                                    );
                                            });
                                    },
                          onToggle:
                              P || (null == E ? void 0 : E.length) !== 0
                                  ? () => {
                                        F(!P);
                                    }
                                  : void 0,
                          animateStatus: j,
                          firstLine: P ? A.intl.string(A.t.JbB7Qk) : A.intl.string(A.t['/bd0Qk']),
                          secondLine: P ? A.intl.string(A.t['TA1g7+']) : A.intl.string(A.t.nc6r1N)
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
                                      (0, r.jsx)(g.X6q, {
                                          className: k.welcomeTitle,
                                          variant: 'heading-xl/semibold',
                                          children: A.intl.format(A.t['0aydCA'], {
                                              guildName: t.name,
                                              guildNameHook: (e, n) =>
                                                  (0, r.jsxs)(
                                                      'span',
                                                      {
                                                          children: [
                                                              (0, r.jsx)(O.Z, {
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
                                          children: (0, r.jsx)(m.iS, {
                                              className: k.descriptionInput,
                                              placeholder: A.intl.string(A.t.qzZHaW),
                                              onChange: (e) => {
                                                  (0, C.VP)({ description: e });
                                              },
                                              onBlur: () => {
                                                  G();
                                              },
                                              onKeyDown: (e) => {
                                                  e.keyCode === Z.yXg.ENTER && e.preventDefault();
                                              },
                                              value: I,
                                              maxLength: 140,
                                              disabled: !0
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsx)(g.$i$, { className: k.divider }),
                              (0, r.jsxs)('div', {
                                  className: k.welcomeChannels,
                                  children: [
                                      (0, r.jsx)(g.vwX, { children: A.intl.string(A.t.euJXzc) }),
                                      (0, r.jsx)(g.Text, {
                                          variant: 'text-sm/normal',
                                          className: k.addChannelSubtext,
                                          children: A.intl.string(A.t.VOnnn5)
                                      }),
                                      null == E
                                          ? void 0
                                          : E.map((e, n) =>
                                                (0, r.jsx)(
                                                    U,
                                                    {
                                                        guildId: t.id,
                                                        welcomeChannel: e,
                                                        onEdit: z(n),
                                                        onChannelReorder: W,
                                                        isDropHovered: n === d,
                                                        index: n
                                                    },
                                                    n
                                                )
                                            ),
                                      (null == E || E.length < 5) &&
                                          (0, r.jsx)('div', {
                                              'data-button-hoisted-classname-wrapper': !0,
                                              className: k.addChannelButton,
                                              children: (0, r.jsx)(g.zxk, {
                                                  variant: 'secondary',
                                                  text: A.intl.string(A.t.U1BDe3),
                                                  onClick: () =>
                                                      (0, g.ZDy)(
                                                          async () => {
                                                              let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                                                              return (n) =>
                                                                  (0, r.jsx)(
                                                                      e,
                                                                      M(L({}, n), {
                                                                          guildId: t.id,
                                                                          onSave: H
                                                                      })
                                                                  );
                                                          },
                                                          { onCloseRequest: () => D.Vq }
                                                      ),
                                                  disabled: !0
                                              })
                                          })
                                  ]
                              })
                          ]
                      })
                  ]
              });
    };

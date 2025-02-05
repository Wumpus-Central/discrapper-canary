n.d(t, { Z: () => M }), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(348327),
    o = n.n(a),
    c = n(999153),
    d = n(584922),
    u = n(442837),
    m = n(481060),
    h = n(239091),
    g = n(596454),
    x = n(493773),
    p = n(607070),
    _ = n(933557),
    C = n(471445),
    f = n(339085),
    v = n(565138),
    N = n(372769),
    j = n(690221),
    I = n(524329),
    E = n(575258),
    b = n(514698),
    T = n(592125),
    S = n(4912),
    R = n(626135),
    Z = n(700785),
    y = n(434404),
    A = n(92160),
    L = n(981631),
    D = n(231338),
    O = n(388032),
    k = n(86592);
let P = 'WELCOME_CHANNEL',
    w = (e) => {
        var t;
        let l,
            { guildId: a, welcomeChannel: o, onEdit: x, onChannelReorder: p, isDropHovered: v, index: N } = e,
            [j, I] = r.useState(!1),
            E = r.useRef(null),
            R = (0, u.e7)([T.Z], () => T.Z.getChannel(o.channel_id)),
            y = (0, u.e7)([f.ZP], () => (null != o.emoji_id ? f.ZP.getUsableCustomEmojiById(o.emoji_id) : null)),
            A = null != R && Z.Uu(L.Plq.VIEW_CHANNEL, R),
            w = null !== (t = (0, C.KS)(R)) && void 0 !== t ? t : m.VL1,
            M = (0, _.ZP)(R, !1),
            [, U] = (0, c.c)({
                type: P,
                item: {
                    channel: o,
                    index: N
                },
                end: (e, t) => {
                    null == e || t.didDrop() || p(e.channel, null, !0);
                }
            }),
            [, G] = (0, d.L)({
                accept: P,
                hover: (e) => {
                    p(e.channel, N, !1);
                },
                drop: (e) => {
                    p(e.channel, N, !0);
                }
            });
        return (
            r.useLayoutEffect(
                () => (
                    U(G(E)),
                    () => {
                        U(null), G(null);
                    }
                ),
                [U, G]
            ),
            (l = A
                ? null != y || null != o.emoji_name
                    ? (0, i.jsx)(g.Z, {
                          emojiId: null == y ? void 0 : y.id,
                          emojiName: null != y ? y.name : o.emoji_name,
                          animated: !!(null == y ? void 0 : y.animated)
                      })
                    : (0, i.jsx)(w, {
                          size: 'md',
                          color: 'currentColor',
                          className: k.channelIcon
                      })
                : (0, i.jsx)(S.Z, {
                      width: 24,
                      height: 24,
                      className: k.warningIcon
                  })),
            (0, i.jsxs)('div', {
                className: s()(k.welcomeChannel, { [k.dragging]: v }),
                ref: E,
                'data-dnd-name': o.description,
                onContextMenu: (e) => {
                    (0, h.jW)(e, async () => {
                        let { default: e } = await n.e('68535').then(n.bind(n, 602320));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guildId: a,
                                welcomeChannel: o,
                                onChannelReorder: p,
                                setShowConfirmModal: I,
                                onEdit: x,
                                index: N
                            });
                    });
                },
                children: [
                    l,
                    (0, i.jsxs)('div', {
                        className: k.channelDescriptionWrapper,
                        children: [
                            (0, i.jsx)(m.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: o.description
                            }),
                            (0, i.jsxs)(m.Text, {
                                className: A ? void 0 : k.channelWarning,
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                children: [
                                    (0, i.jsx)(w, {
                                        className: k.channelTitleIcon,
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    (0, i.jsx)('span', { children: A ? M : O.intl.string(O.t.zFuCsL) })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(m.zxk, {
                        color: m.zxk.Colors.PRIMARY,
                        size: m.zxk.Sizes.SMALL,
                        disabled: !0,
                        onClick: () =>
                            (0, m.ZDy)(
                                async () => {
                                    let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            welcomeChannel: o,
                                            guildId: a,
                                            onSave: x
                                        });
                                },
                                { onCloseRequest: () => D.Vq }
                            ),
                        children: O.intl.string(O.t.bt75u7)
                    }),
                    j &&
                        (0, i.jsx)(b.Z, {
                            onConfirm: () => x(),
                            onCancel: () => I(!1),
                            channelId: o.channel_id
                        })
                ]
            })
        );
    },
    M = (e) => {
        let { guild: t, showCreateModal: l } = e,
            { welcomeSettings: s, originalWelcomeSettings: a } = (0, u.e7)([E.Z], () => E.Z.getSettingsProps()),
            c = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            [d, h] = r.useState(null),
            [g, _] = r.useState(!1),
            [C, f] = r.useState(!1),
            { description: b, channels: T, enabled: Z } = s,
            P = () => {
                null != t && b !== a.description && ((0, I.Es)(t.id, { description: null == b ? void 0 : b.trim() }), _(!0));
            },
            M = (e) => {
                null != t && (o()(e, a.channels) || ((0, I.Es)(t.id, { channels: e }), _(!0)));
            },
            U = (e) => {
                null != t && e !== a.enabled && ((0, I.Es)(t.id, { enabled: e }), f(!c), _(!0));
            },
            G = (e) => {
                if (null == e) return;
                let t = [...(null != T ? T : []), e];
                (0, I.VP)({ channels: t }), M(t);
            },
            B = (e) => (t) => {
                let n = [...(null != T ? T : [])];
                null == t ? n.splice(e, 1) : (n[e] = t), (0, I.VP)({ channels: n }), M(n), 0 === n.length && Z && ((0, I.VP)({ enabled: !1 }), U(!1));
            },
            F = (e, t, n) => {
                if (null == T) return;
                let i = T.indexOf(e),
                    r = [...T];
                null != t && t !== i && (r.splice(i, 1), r.splice(t, 0, e), (0, I.VP)({ channels: r })), n ? (M(r), h(null)) : h(t);
            },
            z = r.useRef(!1);
        (0, x.ZP)(
            () => (
                null != t &&
                    l &&
                    (0, m.ZDy)(
                        async () => {
                            let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    guildId: t.id,
                                    onSave: G
                                });
                        },
                        { onCloseRequest: () => D.Vq }
                    ),
                () => {
                    z.current = !0;
                }
            )
        ),
            r.useEffect(
                () => () => {
                    if (z.current && g) {
                        let e = [],
                            n = [],
                            i = !1;
                        null == T ||
                            T.forEach((t) => {
                                e.push(t.description), n.push(t.channel_id), null != t.emoji_id && (i = !0);
                            }),
                            R.default.track(L.rMx.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
                                guild_id: null == t ? void 0 : t.id,
                                options: e,
                                options_channel_ids: n,
                                guild_description: b,
                                has_custom_emojis: i,
                                is_enabled: Z
                            });
                    }
                },
                [g, T, b, Z, t, z]
            ),
            r.useEffect(() => () => (0, I.sm)(), []);
        let H = r.useCallback(() => {
            null != t && y.Z.open(t.id, L.pNK.ONBOARDING);
        }, [t]);
        return null == t
            ? null
            : (0, i.jsxs)(m.hjN, {
                  title: O.intl.string(O.t['2rkmDg']),
                  tag: m.RB0.H1,
                  children: [
                      (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsx)('div', {
                              className: k.notice,
                              children: (0, i.jsxs)(m.Text, {
                                  variant: 'text-md/normal',
                                  children: [
                                      (0, i.jsx)(S.Z, { className: k.noticeIcon }),
                                      O.intl.format(O.t.oj2vi4, {
                                          onboardingLink: (e) =>
                                              (0, i.jsx)(j.Z, {
                                                  onClick: H,
                                                  children: e
                                              })
                                      })
                                  ]
                              })
                          })
                      }),
                      (0, i.jsx)(m.Text, {
                          className: k.__invalid_description,
                          variant: 'text-sm/normal',
                          children: O.intl.string(O.t['w2d74+'])
                      }),
                      (0, i.jsx)(A.Z, {
                          enabled: Z,
                          onPreview:
                              (null == T ? void 0 : T.length) === 0
                                  ? void 0
                                  : () => {
                                        null != t &&
                                            (0, m.ZDy)(async () => {
                                                let { default: e } = await n.e('90542').then(n.bind(n, 184782));
                                                return (n) =>
                                                    (0, i.jsx)(e, {
                                                        ...n,
                                                        guildId: t.id,
                                                        isPreview: !0
                                                    });
                                            });
                                    },
                          onToggle:
                              Z || (null == T ? void 0 : T.length) !== 0
                                  ? () => {
                                        U(!Z);
                                    }
                                  : void 0,
                          animateStatus: C,
                          firstLine: Z ? O.intl.string(O.t.JbB7Qk) : O.intl.string(O.t['/bd0Qk']),
                          secondLine: Z ? O.intl.string(O.t['TA1g7+']) : O.intl.string(O.t.nc6r1N)
                      }),
                      (0, i.jsxs)('div', {
                          className: k.previewContainer,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: k.welcomeHeader,
                                  children: [
                                      (0, i.jsx)(v.Z, {
                                          size: v.Z.Sizes.LARGER,
                                          className: k.icon,
                                          guild: t,
                                          animate: !0,
                                          tabIndex: -1
                                      }),
                                      (0, i.jsx)(m.X6q, {
                                          className: k.welcomeTitle,
                                          variant: 'heading-xl/semibold',
                                          children: O.intl.format(O.t['0aydCA'], {
                                              guildName: t.name,
                                              guildNameHook: (e, n) =>
                                                  (0, i.jsxs)(
                                                      'span',
                                                      {
                                                          children: [
                                                              (0, i.jsx)(N.Z, {
                                                                  guild: t,
                                                                  className: k.headerGuildBadge,
                                                                  flowerStarClassName: k.flowerStar
                                                              }),
                                                              (0, i.jsx)('strong', { children: e })
                                                          ]
                                                      },
                                                      n
                                                  )
                                          })
                                      }),
                                      (0, i.jsx)('div', {
                                          className: k.descriptionWrapper,
                                          children: (0, i.jsx)(m.Kx8, {
                                              className: k.descriptionInput,
                                              placeholder: O.intl.string(O.t.qzZHaW),
                                              onChange: (e) => {
                                                  (0, I.VP)({ description: e });
                                              },
                                              onBlur: () => {
                                                  P();
                                              },
                                              onKeyDown: (e) => {
                                                  e.keyCode === L.yXg.ENTER && e.preventDefault();
                                              },
                                              value: b,
                                              maxLength: 140,
                                              disabled: !0
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)(m.$i$, { className: k.divider }),
                              (0, i.jsxs)('div', {
                                  className: k.welcomeChannels,
                                  children: [
                                      (0, i.jsx)(m.vwX, { children: O.intl.string(O.t.euJXzc) }),
                                      (0, i.jsx)(m.Text, {
                                          variant: 'text-sm/normal',
                                          className: k.addChannelSubtext,
                                          children: O.intl.string(O.t.VOnnn5)
                                      }),
                                      null == T
                                          ? void 0
                                          : T.map((e, n) =>
                                                (0, i.jsx)(
                                                    w,
                                                    {
                                                        guildId: t.id,
                                                        welcomeChannel: e,
                                                        onEdit: B(n),
                                                        onChannelReorder: F,
                                                        isDropHovered: n === d,
                                                        index: n
                                                    },
                                                    n
                                                )
                                            ),
                                      (null == T || T.length < 5) &&
                                          (0, i.jsx)(m.zxk, {
                                              onClick: () =>
                                                  (0, m.ZDy)(
                                                      async () => {
                                                          let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                                                          return (n) =>
                                                              (0, i.jsx)(e, {
                                                                  ...n,
                                                                  guildId: t.id,
                                                                  onSave: G
                                                              });
                                                      },
                                                      { onCloseRequest: () => D.Vq }
                                                  ),
                                              className: k.addChannelButton,
                                              disabled: !0,
                                              color: m.zxk.Colors.PRIMARY,
                                              children: O.intl.string(O.t.U1BDe3)
                                          })
                                  ]
                              })
                          ]
                      })
                  ]
              });
    };

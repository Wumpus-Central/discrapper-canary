n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(348327),
    o = n.n(s),
    c = n(999153),
    d = n(584922),
    u = n(442837),
    m = n(481060),
    h = n(239091),
    g = n(596454),
    x = n(493773),
    p = n(607070),
    f = n(933557),
    C = n(471445),
    v = n(339085),
    _ = n(565138),
    N = n(372769),
    I = n(690221),
    T = n(524329),
    j = n(575258),
    b = n(514698),
    S = n(592125),
    E = n(4912),
    R = n(626135),
    y = n(700785),
    A = n(434404),
    Z = n(92160),
    L = n(981631),
    D = n(231338),
    O = n(388032),
    k = n(86592);
let M = 'WELCOME_CHANNEL',
    P = (e) => {
        var t;
        let l,
            { guildId: s, welcomeChannel: o, onEdit: x, onChannelReorder: p, isDropHovered: _, index: N } = e,
            [I, T] = r.useState(!1),
            j = r.useRef(null),
            R = (0, u.e7)([S.Z], () => S.Z.getChannel(o.channel_id)),
            A = (0, u.e7)([v.ZP], () => (null != o.emoji_id ? v.ZP.getUsableCustomEmojiById(o.emoji_id) : null)),
            Z = null != R && y.Uu(L.Plq.VIEW_CHANNEL, R),
            P = null !== (t = (0, C.KS)(R)) && void 0 !== t ? t : m.TextIcon,
            w = (0, f.ZP)(R, !1),
            [, B] = (0, c.c)({
                type: M,
                item: {
                    channel: o,
                    index: N
                },
                end: (e, t) => {
                    null != e && !t.didDrop() && p(e.channel, null, !0);
                }
            }),
            [, U] = (0, d.L)({
                accept: M,
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
                    B(U(j)),
                    () => {
                        B(null), U(null);
                    }
                ),
                [B, U]
            ),
            (l = Z
                ? null != A || null != o.emoji_name
                    ? (0, i.jsx)(g.Z, {
                          emojiId: null == A ? void 0 : A.id,
                          emojiName: null != A ? A.name : o.emoji_name,
                          animated: !!(null == A ? void 0 : A.animated)
                      })
                    : (0, i.jsx)(P, {
                          size: 'md',
                          color: 'currentColor',
                          className: k.channelIcon
                      })
                : (0, i.jsx)(E.Z, {
                      width: 24,
                      height: 24,
                      className: k.warningIcon
                  })),
            (0, i.jsxs)('div', {
                className: a()(k.welcomeChannel, { [k.dragging]: _ }),
                ref: j,
                'data-dnd-name': o.description,
                onContextMenu: (e) => {
                    (0, h.jW)(e, async () => {
                        let { default: e } = await n.e('68535').then(n.bind(n, 602320));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guildId: s,
                                welcomeChannel: o,
                                onChannelReorder: p,
                                setShowConfirmModal: T,
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
                                className: Z ? void 0 : k.channelWarning,
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                children: [
                                    (0, i.jsx)(P, {
                                        className: k.channelTitleIcon,
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    (0, i.jsx)('span', { children: Z ? w : O.intl.string(O.t.zFuCsL) })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(m.Button, {
                        color: m.Button.Colors.PRIMARY,
                        size: m.Button.Sizes.SMALL,
                        disabled: !0,
                        onClick: () =>
                            (0, m.openModalLazy)(
                                async () => {
                                    let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            welcomeChannel: o,
                                            guildId: s,
                                            onSave: x
                                        });
                                },
                                { onCloseRequest: () => D.Vq }
                            ),
                        children: O.intl.string(O.t.bt75u7)
                    }),
                    I &&
                        (0, i.jsx)(b.Z, {
                            onConfirm: () => x(),
                            onCancel: () => T(!1),
                            channelId: o.channel_id
                        })
                ]
            })
        );
    };
t.Z = (e) => {
    let { guild: t, showCreateModal: l } = e,
        { welcomeSettings: a, originalWelcomeSettings: s } = (0, u.e7)([j.Z], () => j.Z.getSettingsProps()),
        c = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
        [d, h] = r.useState(null),
        [g, f] = r.useState(!1),
        [C, v] = r.useState(!1),
        { description: b, channels: S, enabled: y } = a,
        M = () => {
            if (null != t) b !== s.description && ((0, T.Es)(t.id, { description: null == b ? void 0 : b.trim() }), f(!0));
        },
        w = (e) => {
            if (null != t) !o()(e, s.channels) && ((0, T.Es)(t.id, { channels: e }), f(!0));
        },
        B = (e) => {
            if (null != t) e !== s.enabled && ((0, T.Es)(t.id, { enabled: e }), v(!c), f(!0));
        },
        U = (e) => {
            if (null == e) return;
            let t = [...(null != S ? S : []), e];
            (0, T.VP)({ channels: t }), w(t);
        },
        G = (e) => (t) => {
            let n = [...(null != S ? S : [])];
            null == t ? n.splice(e, 1) : (n[e] = t), (0, T.VP)({ channels: n }), w(n), 0 === n.length && y && ((0, T.VP)({ enabled: !1 }), B(!1));
        },
        F = (e, t, n) => {
            if (null == S) return;
            let i = S.indexOf(e),
                r = [...S];
            null != t && t !== i && (r.splice(i, 1), r.splice(t, 0, e), (0, T.VP)({ channels: r })), n ? (w(r), h(null)) : h(t);
        },
        H = r.useRef(!1);
    (0, x.Z)(
        () => (
            null != t &&
                l &&
                (0, m.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guildId: t.id,
                                onSave: U
                            });
                    },
                    { onCloseRequest: () => D.Vq }
                ),
            () => {
                H.current = !0;
            }
        )
    ),
        r.useEffect(
            () => () => {
                if (H.current && g) {
                    let e = [],
                        n = [],
                        i = !1;
                    null == S ||
                        S.forEach((t) => {
                            e.push(t.description), n.push(t.channel_id), null != t.emoji_id && (i = !0);
                        }),
                        R.default.track(L.rMx.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
                            guild_id: null == t ? void 0 : t.id,
                            options: e,
                            options_channel_ids: n,
                            guild_description: b,
                            has_custom_emojis: i,
                            is_enabled: y
                        });
                }
            },
            [g, S, b, y, t, H]
        ),
        r.useEffect(() => () => (0, T.sm)(), []);
    let z = r.useCallback(() => {
        null != t && A.Z.open(t.id, L.pNK.ONBOARDING);
    }, [t]);
    return null == t
        ? null
        : (0, i.jsxs)(m.FormSection, {
              title: O.intl.string(O.t['2rkmDg']),
              tag: m.FormTitleTags.H1,
              children: [
                  (0, i.jsx)(i.Fragment, {
                      children: (0, i.jsx)('div', {
                          className: k.notice,
                          children: (0, i.jsxs)(m.Text, {
                              variant: 'text-md/normal',
                              children: [
                                  (0, i.jsx)(E.Z, { className: k.noticeIcon }),
                                  O.intl.format(O.t.oj2vi4, {
                                      onboardingLink: (e) =>
                                          (0, i.jsx)(I.Z, {
                                              onClick: z,
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
                  (0, i.jsx)(Z.Z, {
                      enabled: y,
                      onPreview:
                          (null == S ? void 0 : S.length) === 0
                              ? void 0
                              : () => {
                                    null != t &&
                                        (0, m.openModalLazy)(async () => {
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
                          y || (null == S ? void 0 : S.length) !== 0
                              ? () => {
                                    B(!y);
                                }
                              : void 0,
                      animateStatus: C,
                      firstLine: y ? O.intl.string(O.t.JbB7Qk) : O.intl.string(O.t['/bd0Qk']),
                      secondLine: y ? O.intl.string(O.t['TA1g7+']) : O.intl.string(O.t.nc6r1N)
                  }),
                  (0, i.jsxs)('div', {
                      className: k.previewContainer,
                      children: [
                          (0, i.jsxs)('div', {
                              className: k.welcomeHeader,
                              children: [
                                  (0, i.jsx)(_.Z, {
                                      size: _.Z.Sizes.LARGER,
                                      className: k.icon,
                                      guild: t,
                                      animate: !0,
                                      tabIndex: -1
                                  }),
                                  (0, i.jsx)(m.Heading, {
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
                                      children: (0, i.jsx)(m.TextArea, {
                                          className: k.descriptionInput,
                                          placeholder: O.intl.string(O.t.qzZHaW),
                                          onChange: (e) => {
                                              (0, T.VP)({ description: e });
                                          },
                                          onBlur: () => {
                                              M();
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
                          (0, i.jsx)(m.FormDivider, { className: k.divider }),
                          (0, i.jsxs)('div', {
                              className: k.welcomeChannels,
                              children: [
                                  (0, i.jsx)(m.FormTitle, { children: O.intl.string(O.t.euJXzc) }),
                                  (0, i.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      className: k.addChannelSubtext,
                                      children: O.intl.string(O.t.VOnnn5)
                                  }),
                                  null == S
                                      ? void 0
                                      : S.map((e, n) =>
                                            (0, i.jsx)(
                                                P,
                                                {
                                                    guildId: t.id,
                                                    welcomeChannel: e,
                                                    onEdit: G(n),
                                                    onChannelReorder: F,
                                                    isDropHovered: n === d,
                                                    index: n
                                                },
                                                n
                                            )
                                        ),
                                  (null == S || S.length < 5) &&
                                      (0, i.jsx)(m.Button, {
                                          onClick: () =>
                                              (0, m.openModalLazy)(
                                                  async () => {
                                                      let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                                                      return (n) =>
                                                          (0, i.jsx)(e, {
                                                              ...n,
                                                              guildId: t.id,
                                                              onSave: U
                                                          });
                                                  },
                                                  { onCloseRequest: () => D.Vq }
                                              ),
                                          className: k.addChannelButton,
                                          disabled: !0,
                                          color: m.Button.Colors.PRIMARY,
                                          children: O.intl.string(O.t.U1BDe3)
                                      })
                              ]
                          })
                      ]
                  })
              ]
          });
};

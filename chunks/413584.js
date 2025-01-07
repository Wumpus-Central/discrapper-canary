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
    x = n(607070),
    p = n(933557),
    f = n(471445),
    C = n(339085),
    v = n(565138),
    _ = n(372769),
    I = n(690221),
    N = n(524329),
    T = n(575258),
    j = n(514698),
    b = n(592125),
    S = n(4912),
    E = n(626135),
    R = n(700785),
    y = n(434404),
    A = n(92160),
    Z = n(981631),
    L = n(231338),
    D = n(388032),
    O = n(86592);
let k = 'WELCOME_CHANNEL',
    P = (e) => {
        var t;
        let l,
            { guildId: s, welcomeChannel: o, onEdit: x, onChannelReorder: v, isDropHovered: _, index: I } = e,
            [N, T] = r.useState(!1),
            E = r.useRef(null),
            y = (0, u.e7)([b.Z], () => b.Z.getChannel(o.channel_id)),
            A = (0, u.e7)([C.ZP], () => (null != o.emoji_id ? C.ZP.getUsableCustomEmojiById(o.emoji_id) : null)),
            P = null != y && R.Uu(Z.Plq.VIEW_CHANNEL, y),
            M = null !== (t = (0, f.KS)(y)) && void 0 !== t ? t : m.TextIcon,
            w = (0, p.ZP)(y, !1),
            [, B] = (0, c.c)({
                type: k,
                item: {
                    channel: o,
                    index: I
                },
                end: (e, t) => {
                    null != e && !t.didDrop() && v(e.channel, null, !0);
                }
            }),
            [, U] = (0, d.L)({
                accept: k,
                hover: (e) => {
                    v(e.channel, I, !1);
                },
                drop: (e) => {
                    v(e.channel, I, !0);
                }
            });
        return (
            r.useLayoutEffect(
                () => (
                    B(U(E)),
                    () => {
                        B(null), U(null);
                    }
                ),
                [B, U]
            ),
            (l = P
                ? null != A || null != o.emoji_name
                    ? (0, i.jsx)(g.Z, {
                          emojiId: null == A ? void 0 : A.id,
                          emojiName: null != A ? A.name : o.emoji_name,
                          animated: !!(null == A ? void 0 : A.animated)
                      })
                    : (0, i.jsx)(M, {
                          size: 'md',
                          color: 'currentColor',
                          className: O.channelIcon
                      })
                : (0, i.jsx)(S.Z, {
                      width: 24,
                      height: 24,
                      className: O.warningIcon
                  })),
            (0, i.jsxs)('div', {
                className: a()(O.welcomeChannel, { [O.dragging]: _ }),
                ref: E,
                'data-dnd-name': o.description,
                onContextMenu: (e) => {
                    (0, h.jW)(e, async () => {
                        let { default: e } = await n.e('68535').then(n.bind(n, 602320));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guildId: s,
                                welcomeChannel: o,
                                onChannelReorder: v,
                                setShowConfirmModal: T,
                                onEdit: x,
                                index: I
                            });
                    });
                },
                children: [
                    l,
                    (0, i.jsxs)('div', {
                        className: O.channelDescriptionWrapper,
                        children: [
                            (0, i.jsx)(m.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: o.description
                            }),
                            (0, i.jsxs)(m.Text, {
                                className: P ? void 0 : O.channelWarning,
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                children: [
                                    (0, i.jsx)(M, {
                                        className: O.channelTitleIcon,
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    (0, i.jsx)('span', { children: P ? w : D.intl.string(D.t.zFuCsL) })
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
                                { onCloseRequest: () => L.Vq }
                            ),
                        children: D.intl.string(D.t.bt75u7)
                    }),
                    N &&
                        (0, i.jsx)(j.Z, {
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
        { welcomeSettings: a, originalWelcomeSettings: s } = (0, u.e7)([T.Z], () => T.Z.getSettingsProps()),
        c = (0, u.e7)([x.Z], () => x.Z.useReducedMotion),
        [d, h] = r.useState(null),
        [g, p] = r.useState(!1),
        [f, C] = r.useState(!1),
        { description: j, channels: b, enabled: R } = a,
        k = () => {
            if (null != t) j !== s.description && ((0, N.Es)(t.id, { description: null == j ? void 0 : j.trim() }), p(!0));
        },
        M = (e) => {
            if (null != t) !o()(e, s.channels) && ((0, N.Es)(t.id, { channels: e }), p(!0));
        },
        w = (e) => {
            if (null != t) e !== s.enabled && ((0, N.Es)(t.id, { enabled: e }), C(!c), p(!0));
        },
        B = (e) => {
            if (null == e) return;
            let t = [...(null != b ? b : []), e];
            (0, N.VP)({ channels: t }), M(t);
        },
        U = (e) => (t) => {
            let n = [...(null != b ? b : [])];
            null == t ? n.splice(e, 1) : (n[e] = t), (0, N.VP)({ channels: n }), M(n), 0 === n.length && R && ((0, N.VP)({ enabled: !1 }), w(!1));
        },
        G = (e, t, n) => {
            if (null == b) return;
            let i = b.indexOf(e),
                r = [...b];
            null != t && t !== i && (r.splice(i, 1), r.splice(t, 0, e), (0, N.VP)({ channels: r })), n ? (M(r), h(null)) : h(t);
        },
        F = r.useRef(!1);
    r.useEffect(
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
                                onSave: B
                            });
                    },
                    { onCloseRequest: () => L.Vq }
                ),
            () => {
                F.current = !0;
            }
        ),
        []
    ),
        r.useEffect(
            () => () => {
                if (F.current && g) {
                    let e = [],
                        n = [],
                        i = !1;
                    null == b ||
                        b.forEach((t) => {
                            e.push(t.description), n.push(t.channel_id), null != t.emoji_id && (i = !0);
                        }),
                        E.default.track(Z.rMx.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
                            guild_id: null == t ? void 0 : t.id,
                            options: e,
                            options_channel_ids: n,
                            guild_description: j,
                            has_custom_emojis: i,
                            is_enabled: R
                        });
                }
            },
            [g, b, j, R, t, F]
        ),
        r.useEffect(() => () => (0, N.sm)(), []);
    let H = r.useCallback(() => {
        null != t && y.Z.open(t.id, Z.pNK.ONBOARDING);
    }, [t]);
    return null == t
        ? null
        : (0, i.jsxs)(m.FormSection, {
              title: D.intl.string(D.t['2rkmDg']),
              tag: m.FormTitleTags.H1,
              children: [
                  (0, i.jsx)(i.Fragment, {
                      children: (0, i.jsx)('div', {
                          className: O.notice,
                          children: (0, i.jsxs)(m.Text, {
                              variant: 'text-md/normal',
                              children: [
                                  (0, i.jsx)(S.Z, { className: O.noticeIcon }),
                                  D.intl.format(D.t.oj2vi4, {
                                      onboardingLink: (e) =>
                                          (0, i.jsx)(I.Z, {
                                              onClick: H,
                                              children: e
                                          })
                                  })
                              ]
                          })
                      })
                  }),
                  (0, i.jsx)(m.Text, {
                      className: O.__invalid_description,
                      variant: 'text-sm/normal',
                      children: D.intl.string(D.t['w2d74+'])
                  }),
                  (0, i.jsx)(A.Z, {
                      enabled: R,
                      onPreview:
                          (null == b ? void 0 : b.length) === 0
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
                          R || (null == b ? void 0 : b.length) !== 0
                              ? () => {
                                    w(!R);
                                }
                              : void 0,
                      animateStatus: f,
                      firstLine: R ? D.intl.string(D.t.JbB7Qk) : D.intl.string(D.t['/bd0Qk']),
                      secondLine: R ? D.intl.string(D.t['TA1g7+']) : D.intl.string(D.t.nc6r1N)
                  }),
                  (0, i.jsxs)('div', {
                      className: O.previewContainer,
                      children: [
                          (0, i.jsxs)('div', {
                              className: O.welcomeHeader,
                              children: [
                                  (0, i.jsx)(v.Z, {
                                      size: v.Z.Sizes.LARGER,
                                      className: O.icon,
                                      guild: t,
                                      animate: !0,
                                      tabIndex: -1
                                  }),
                                  (0, i.jsx)(m.Heading, {
                                      className: O.welcomeTitle,
                                      variant: 'heading-xl/semibold',
                                      children: D.intl.format(D.t['0aydCA'], {
                                          guildName: t.name,
                                          guildNameHook: (e, n) =>
                                              (0, i.jsxs)(
                                                  'span',
                                                  {
                                                      children: [
                                                          (0, i.jsx)(_.Z, {
                                                              guild: t,
                                                              className: O.headerGuildBadge,
                                                              flowerStarClassName: O.flowerStar
                                                          }),
                                                          (0, i.jsx)('strong', { children: e })
                                                      ]
                                                  },
                                                  n
                                              )
                                      })
                                  }),
                                  (0, i.jsx)('div', {
                                      className: O.descriptionWrapper,
                                      children: (0, i.jsx)(m.TextArea, {
                                          className: O.descriptionInput,
                                          placeholder: D.intl.string(D.t.qzZHaW),
                                          onChange: (e) => {
                                              (0, N.VP)({ description: e });
                                          },
                                          onBlur: () => {
                                              k();
                                          },
                                          onKeyDown: (e) => {
                                              e.keyCode === Z.yXg.ENTER && e.preventDefault();
                                          },
                                          value: j,
                                          maxLength: 140,
                                          disabled: !0
                                      })
                                  })
                              ]
                          }),
                          (0, i.jsx)(m.FormDivider, { className: O.divider }),
                          (0, i.jsxs)('div', {
                              className: O.welcomeChannels,
                              children: [
                                  (0, i.jsx)(m.FormTitle, { children: D.intl.string(D.t.euJXzc) }),
                                  (0, i.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      className: O.addChannelSubtext,
                                      children: D.intl.string(D.t.VOnnn5)
                                  }),
                                  null == b
                                      ? void 0
                                      : b.map((e, n) =>
                                            (0, i.jsx)(
                                                P,
                                                {
                                                    guildId: t.id,
                                                    welcomeChannel: e,
                                                    onEdit: U(n),
                                                    onChannelReorder: G,
                                                    isDropHovered: n === d,
                                                    index: n
                                                },
                                                n
                                            )
                                        ),
                                  (null == b || b.length < 5) &&
                                      (0, i.jsx)(m.Button, {
                                          onClick: () =>
                                              (0, m.openModalLazy)(
                                                  async () => {
                                                      let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                                                      return (n) =>
                                                          (0, i.jsx)(e, {
                                                              ...n,
                                                              guildId: t.id,
                                                              onSave: B
                                                          });
                                                  },
                                                  { onCloseRequest: () => L.Vq }
                                              ),
                                          className: O.addChannelButton,
                                          disabled: !0,
                                          color: m.Button.Colors.PRIMARY,
                                          children: D.intl.string(D.t.U1BDe3)
                                      })
                              ]
                          })
                      ]
                  })
              ]
          });
};

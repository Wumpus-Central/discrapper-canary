n.d(t, { Z: () => z });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    a = n(114858),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    h = n(904245),
    p = n(45114),
    f = n(884338),
    g = n(933557),
    m = n(471445),
    b = n(111028),
    O = n(978003),
    y = n(245216),
    _ = n(172751),
    v = n(739566),
    C = n(930282),
    j = n(318713),
    S = n(47930),
    x = n(123145),
    E = n(25015),
    P = n(178480),
    I = n(703656),
    N = n(518950),
    w = n(592125),
    Z = n(720202),
    T = n(430824),
    A = n(538397),
    R = n(987889),
    D = n(586694),
    L = n(981631),
    M = n(388032),
    k = n(539499);
function U(e) {
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
function G(e, t) {
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
function B(e) {
    let { message: t, channel: n, focusProps: l, isSelected: s, isUnread: a, groupedMessages: d } = e,
        h = (0, m.KS)(n, null),
        p = (0, g.ZP)(n, !1),
        f = (0, c.e7)([T.Z], () => T.Z.getGuild(n.getGuildId())),
        { nick: O, colorString: y, primaryGuild: C } = (0, v.ZP)(t),
        {
            avatarDecorationSrc: j,
            avatarSrc: E,
            eventHandlers: P
        } = (0, N.Z)({
            user: t.author,
            size: u.EFr.SIZE_32,
            guildId: null == f ? void 0 : f.id,
            animateOnHover: !0
        }),
        I = n.type !== L.d4z.GUILD_ANNOUNCEMENT || null == f,
        w = (0, S.x)({
            channel: n,
            message: t,
            user: t.author,
            compact: !0,
            isRepliedMessage: !0
        }),
        A = (0, r.jsxs)('div', {
            className: k.usernameTagContainer,
            children: [
                (0, r.jsx)(x.Z, {
                    channel: n,
                    message: t,
                    hideGuildTag: !0,
                    hideSystemTag: !0,
                    className: k.username
                }),
                null != C &&
                    (0, r.jsx)(_.ZP, {
                        primaryGuild: C,
                        userId: t.author.id,
                        inline: !0,
                        disableGuildProfile: !0,
                        className: k.clanTag
                    })
            ]
        });
    return (
        (0, i.useEffect)(() => {
            null != f && Z.Z.requestMember(f.id, t.author.id);
        }, [f, t.author.id]),
        (0, r.jsx)(
            u.tEY,
            G(U({}, l), {
                children: (0, r.jsxs)('div', {
                    onMouseLeave: P.onMouseLeave,
                    onMouseEnter: P.onMouseEnter,
                    className: k.messageContainer,
                    children: [
                        a && (0, r.jsx)('div', { className: k.unreadDot }),
                        (0, r.jsx)(u.Kqy, {
                            align: 'start',
                            style: {
                                width: 'fit-content',
                                marginTop: '4px'
                            },
                            children: I
                                ? (0, r.jsx)(D.q, {
                                      'aria-label': 'User Avatar',
                                      src: E,
                                      size: u.EFr.SIZE_32,
                                      cornerIconUrl: null != f ? f.getIconURL(24) : void 0,
                                      cornerIconOffsetX: 4,
                                      cornerIconOffsetY: 3,
                                      avatarDecoration: j
                                  })
                                : (0, r.jsx)(D.E, {
                                      'aria-label': 'Guild Icon',
                                      src: f.getIconURL(32),
                                      size: u.EFr.SIZE_32,
                                      cornerIconUrl: t.author.getAvatarURL(f.id, 24),
                                      cornerIconOffsetX: 4,
                                      cornerIconOffsetY: 3
                                  })
                        }),
                        (0, r.jsxs)(u.Kqy, {
                            gap: 0,
                            style: { minWidth: 0 },
                            children: [
                                (0, r.jsxs)(u.Kqy, {
                                    direction: 'horizontal',
                                    gap: 4,
                                    style: {
                                        whiteSpace: 'nowrap',
                                        minWidth: 0,
                                        justifyContent: 'space-between'
                                    },
                                    children: [
                                        I
                                            ? (0, r.jsxs)('div', {
                                                  className: k.usernameOuterContainer,
                                                  children: [
                                                      (0, r.jsx)('div', {
                                                          className: k.username,
                                                          style: { color: y },
                                                          children: (0, r.jsx)(b.Z, { children: A })
                                                      }),
                                                      w
                                                  ]
                                              })
                                            : (0, r.jsx)(b.Z, {
                                                  children: (0, r.jsx)(u.X6q, {
                                                      variant: 'text-md/semibold',
                                                      style: { color: y },
                                                      className: k.username,
                                                      children: f.name
                                                  })
                                              }),
                                        (0, r.jsxs)(u.Kqy, {
                                            direction: 'horizontal',
                                            gap: 4,
                                            align: 'center',
                                            style: { width: 'fit-content' },
                                            children: [
                                                (0, r.jsx)(R.Z, {
                                                    message: t,
                                                    channel: n,
                                                    isUnread: a
                                                }),
                                                (0, r.jsx)(H, { message: t })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(u.Kqy, {
                                    direction: 'horizontal',
                                    align: 'center',
                                    gap: 4,
                                    className: o()(k.channelName, {
                                        [k.unread]: a,
                                        [k.selected]: s
                                    }),
                                    children: [
                                        null !== h &&
                                            (0, r.jsx)(h, {
                                                size: 'xxs',
                                                className: k.inlineIcon
                                            }),
                                        (0, r.jsxs)(u.Text, {
                                            variant: 'text-sm/medium',
                                            lineClamp: 1,
                                            className: o()(k.channelName, {
                                                [k.unread]: a,
                                                [k.selected]: s
                                            }),
                                            children: [p, !I && ' \xB7 '.concat(O)]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(F, {
                                    message: t,
                                    isUnread: a,
                                    isSelected: s,
                                    channel: n
                                }),
                                null != d &&
                                    (0, r.jsx)(u.Kqy, {
                                        gap: 4,
                                        style: { minWidth: 0 },
                                        children: (null == d ? void 0 : d.length) > 0 && (0, r.jsx)(V, { overflowMessages: d })
                                    })
                            ]
                        })
                    ]
                })
            })
        )
    );
}
function V(e) {
    let { overflowMessages: t } = e,
        n = (0, s.uniqBy)(
            t.map((e) => e.author),
            (e) => e.id
        ).slice(0, 3);
    return (0, r.jsxs)(u.Kqy, {
        direction: 'horizontal',
        gap: 4,
        children: [
            (0, r.jsx)(f.Z, {
                users: n,
                useFallbackUserForPopout: !0,
                size: f.u.SIZE_16
            }),
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/medium',
                className: k.overflowText,
                children: M.intl.formatToPlainString(M.t.NzUuLC, { count: t.length })
            })
        ]
    });
}
function H(e) {
    let { message: t } = e,
        n = (0, P.a3)(t.timestamp.getTime());
    return (0, r.jsx)(j.Z, {
        timestamp: t.timestamp,
        className: k.timestamp,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n
    });
}
function F(e) {
    let { message: t, channel: n, isUnread: l, isSelected: s } = e,
        { previewContent: a, Icon: c } = (function (e) {
            let { message: t, isUnread: n, isSelected: l } = e,
                { content: s } = (0, E.Z)(t, {
                    hideSimpleEmbedContent: !0,
                    allowList: !1,
                    allowHeading: !0,
                    allowLinks: !0,
                    previewLinkTarget: !1,
                    formatInline: !0,
                    noStyleAndInteraction: !0
                });
            return (0, i.useMemo)(() => {
                let e = '' === t.content,
                    i = t.embeds.some((e) => e.type === L.hBH.GIFV),
                    a = (function (e) {
                        let t = e.embeds.some((e) => e.type === L.hBH.GIFV);
                        return e.attachments.length + +!!t;
                    })(t),
                    c = (0, O.Z)(t),
                    d = t.stickerItems.length > 0,
                    h = t.isPoll(),
                    p = t.type === L.uaV.POLL_RESULT,
                    f = t.hasFlag(L.iLy.IS_VOICE_MESSAGE),
                    g = t.type === L.uaV.USER_JOIN,
                    m = null;
                1 === a ? (m = u.XBm) : a > 1 ? (m = u.Ka2) : c ? (m = y.Z) : h || p ? (m = u.QDj) : d ? (m = u.SlE) : f && (m = u.gj8);
                let b = !0,
                    _ = null;
                if (e)
                    if (c) _ = M.intl.string(M.t['9ddYKi']);
                    else if (h) {
                        var v;
                        (b = !1), (_ = null == (v = t.poll) ? void 0 : v.question.text);
                    } else _ = p ? M.intl.string(M.t.sad2PD) : i ? M.intl.string(M.t.p0oZm5) : a > 1 ? M.intl.formatToPlainString(M.t.rtfTKi, { count: a }) : 1 === a ? M.intl.string(M.t.tCcq5u) : d ? M.intl.format(M.t.zY4v1N, { stickerName: t.stickerItems[0].name }) : f ? M.intl.string(M.t.slFYgo) : g ? M.intl.string(M.t.Yvvfw8) : M.intl.string(M.t.sDqZHB);
                else
                    (b = !1),
                        (_ = (0, r.jsx)(C.ZP, {
                            content: s,
                            message: t,
                            compact: !1,
                            className: o()(k.message, {
                                [k.unread]: n,
                                [k.selected]: l
                            })
                        }));
                return (
                    e &&
                        (_ = (0, r.jsx)('div', {
                            className: o()(k.message, {
                                [k.unread]: n,
                                [k.selected]: l,
                                [k.descriptionMessage]: b
                            }),
                            children: _
                        })),
                    {
                        previewContent: _,
                        Icon: m
                    }
                );
            }, [t, s, n, l]);
        })({
            message: t,
            channel: n,
            isUnread: l,
            isSelected: s
        });
    return (0, r.jsxs)(u.Kqy, {
        direction: 'horizontal',
        gap: 4,
        align: 'center',
        children: [
            null != c &&
                (0, r.jsx)(c, {
                    size: 'xxs',
                    className: k.inlineIcon
                }),
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/normal',
                lineClamp: 1,
                className: k.message,
                children: a
            })
        ]
    });
}
let z = (0, i.memo)(
    function (e) {
        let { message: t, goToSidebar: i, groupedMessages: l, isUnread: s } = e,
            { params: f } = (0, a.$B)(),
            g = (0, c.e7)([w.Z], () => w.Z.getChannel(t.channel_id));
        return null == t || null == g
            ? null
            : (0, r.jsx)(u.P3F, {
                  className: o()(k.messageClickableContainer, { [k.selected]: t.id === f.messageId }),
                  onClick: () => {
                      (0, A.Qz)({
                          interactionType: A.s_.CLICK,
                          message: t
                      }),
                          h.Z.trackJump(g.id, t.id, 'Notifications Inbox'),
                          s &&
                              p.In(
                                  t.channel_id,
                                  {
                                      section: L.jXE.INBOX,
                                      object: L.qAy.ACK_MESSAGE_VIEWED,
                                      objectType: L.Qqv.ACK_SEMI_AUTOMATIC
                                  },
                                  !0,
                                  void 0,
                                  t.id
                              );
                      let e = i ? L.Z5c.NOTIFICATIONS_INBOX(g.id, t.id) : L.Z5c.CHANNEL(g.guild_id, g.id, t.id);
                      (0, I.uL)(e);
                  },
                  onContextMenuCapture: (e) => {
                      e.preventDefault();
                  },
                  onContextMenu: (e) => {
                      (0, A.Qz)({
                          interactionType: A.s_.CONTEXT_MENU,
                          message: t
                      }),
                          (0, d.jW)(
                              e,
                              async () => {
                                  let { default: e } = await n.e('74922').then(n.bind(n, 550265));
                                  return (t) => (0, r.jsx)(e, G(U({}, t), { channel: g }));
                              },
                              { disableClickTrap: !0 }
                          );
                  },
                  children: (0, r.jsx)(B, {
                      message: t,
                      channel: g,
                      isSelected: t.id === f.messageId,
                      groupedMessages: l,
                      isUnread: s
                  })
              });
    },
    (e, t) => {
        var n, r;
        return e.isUnread === t.isUnread && e.message.id === t.message.id && (null == (n = e.groupedMessages) ? void 0 : n.length) === (null == (r = t.groupedMessages) ? void 0 : r.length);
    }
);

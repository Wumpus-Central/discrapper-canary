n.d(t, { Z: () => W });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n(114858),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    h = n(904245),
    p = n(45114),
    f = n(884338),
    g = n(933557),
    m = n(471445),
    b = n(111028),
    _ = n(978003),
    O = n(245216),
    y = n(739566),
    v = n(930282),
    C = n(318713),
    j = n(47930),
    E = n(123145),
    S = n(25015),
    x = n(178480),
    I = n(703656),
    P = n(518950),
    N = n(601964),
    w = n(592125),
    Z = n(720202),
    T = n(430824),
    A = n(538397),
    R = n(987889),
    D = n(586694),
    L = n(981631),
    M = n(144717),
    k = n(388032),
    U = n(539499);
function G(e) {
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
function B(e, t) {
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
function V(e) {
    let { message: t, channel: n, focusProps: l, isSelected: a, isUnread: s, groupedMessages: d } = e,
        h = (0, m.KS)(n, null),
        p = (0, g.ZP)(n, !1),
        f = (0, c.e7)([T.Z], () => T.Z.getGuild(n.getGuildId())),
        { nick: _, colorString: O } = (0, y.ZP)(t),
        {
            avatarDecorationSrc: v,
            avatarSrc: C,
            eventHandlers: S
        } = (0, P.Z)({
            user: t.author,
            size: u.EFr.SIZE_32,
            guildId: null == f ? void 0 : f.id,
            animateOnHover: !0
        }),
        x = n.type !== L.d4z.GUILD_ANNOUNCEMENT || null == f,
        I = (0, j.x)({
            channel: n,
            message: t,
            user: t.author,
            compact: !0,
            isRepliedMessage: !0
        }),
        w = (0, r.jsx)('div', {
            className: U.usernameTagContainer,
            children: (0, r.jsx)(E.Z, {
                channel: n,
                message: t,
                hideGuildTag: !0,
                hideSystemTag: !0,
                className: U.username
            })
        });
    return (
        (0, i.useEffect)(() => {
            null != f && Z.Z.requestMember(f.id, t.author.id);
        }, [f, t.author.id]),
        (0, r.jsx)(
            u.tEY,
            B(G({}, l), {
                children: (0, r.jsxs)('div', {
                    onMouseLeave: S.onMouseLeave,
                    onMouseEnter: S.onMouseEnter,
                    className: U.messageContainer,
                    children: [
                        s && (0, r.jsx)('div', { className: U.unreadDot }),
                        (0, r.jsx)(u.Kqy, {
                            align: 'start',
                            style: {
                                width: 'fit-content',
                                marginTop: '4px'
                            },
                            children: x
                                ? (0, r.jsx)(D.q, {
                                      'aria-label': 'User Avatar',
                                      src: C,
                                      size: u.EFr.SIZE_32,
                                      cornerIconUrl: null != f ? (0, N.EB)(f, 24) : void 0,
                                      cornerIconOffsetX: 4,
                                      cornerIconOffsetY: 3,
                                      avatarDecoration: v
                                  })
                                : (0, r.jsx)(D.E, {
                                      'aria-label': 'Guild Icon',
                                      src: (0, N.EB)(f, 32),
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
                                        x
                                            ? (0, r.jsxs)('div', {
                                                  className: U.usernameOuterContainer,
                                                  children: [
                                                      (0, r.jsx)('div', {
                                                          className: U.username,
                                                          style: { color: O },
                                                          children: (0, r.jsx)(b.Z, { children: w })
                                                      }),
                                                      I
                                                  ]
                                              })
                                            : (0, r.jsx)(b.Z, {
                                                  children: (0, r.jsx)(u.X6q, {
                                                      variant: 'text-md/semibold',
                                                      style: { color: O },
                                                      className: U.username,
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
                                                    isUnread: s
                                                }),
                                                t.mentioned && s
                                                    ? (0, r.jsx)(u.mAB, {
                                                          className: U.mentionBadge,
                                                          count: 1
                                                      })
                                                    : (0, r.jsx)(H, { message: t })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(u.Kqy, {
                                    direction: 'horizontal',
                                    align: 'center',
                                    gap: 4,
                                    className: o()(U.channelName, {
                                        [U.unread]: s,
                                        [U.selected]: a
                                    }),
                                    children: [
                                        null !== h &&
                                            (0, r.jsx)(h, {
                                                size: 'xxs',
                                                className: U.inlineIcon
                                            }),
                                        (0, r.jsxs)(u.Text, {
                                            variant: 'text-sm/medium',
                                            lineClamp: 1,
                                            className: o()(U.channelName, {
                                                [U.unread]: s,
                                                [U.selected]: a
                                            }),
                                            children: [p, !x && ' \xB7 '.concat(_)]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(z, {
                                    message: t,
                                    isUnread: s,
                                    isSelected: a,
                                    channel: n
                                }),
                                d.length > 0 &&
                                    (0, r.jsx)(u.Kqy, {
                                        gap: 4,
                                        style: { minWidth: 0 },
                                        children: (0, r.jsx)(F, { overflowMessages: d })
                                    })
                            ]
                        })
                    ]
                })
            })
        )
    );
}
function F(e) {
    let { overflowMessages: t } = e,
        n = (0, a.uniqBy)(
            t.map((e) => e.author),
            (e) => e.id
        ).slice(0, 3);
    return (0, r.jsxs)(u.Kqy, {
        direction: 'horizontal',
        gap: 4,
        children: [
            (0, r.jsx)(f.ZP, {
                users: n,
                useFallbackUserForPopout: !0,
                size: f.u8.SIZE_16
            }),
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/medium',
                className: U.overflowText,
                children: k.intl.formatToPlainString(M.default.NzUuLC, { count: t.length })
            })
        ]
    });
}
function H(e) {
    let { message: t } = e,
        n = (0, x.a3)(t.timestamp.getTime());
    return (0, r.jsx)(C.Z, {
        timestamp: t.timestamp,
        className: U.timestamp,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n
    });
}
function z(e) {
    let { message: t, channel: n, isUnread: l, isSelected: a } = e,
        { previewContent: s, Icon: c } = (function (e) {
            let { message: t, isUnread: n, isSelected: l } = e,
                { content: a } = (0, S.Z)(t, {
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
                    s = (function (e) {
                        let t = e.embeds.some((e) => e.type === L.hBH.GIFV);
                        return e.attachments.length + +!!t;
                    })(t),
                    c = (0, _.Z)(t),
                    d = t.stickerItems.length > 0,
                    h = t.isPoll(),
                    p = t.type === L.uaV.POLL_RESULT,
                    f = t.hasFlag(L.iLy.IS_VOICE_MESSAGE),
                    g = t.type === L.uaV.USER_JOIN,
                    m = null;
                1 === s ? (m = u.XBm) : s > 1 ? (m = u.Ka2) : c ? (m = O.Z) : h || p ? (m = u.QDj) : d ? (m = u.SlE) : f && (m = u.gj8);
                let b = !0,
                    y = null;
                if (e)
                    if (c) y = k.intl.string(k.t['9ddYKi']);
                    else if (h) {
                        var C;
                        ((b = !1), (y = null == (C = t.poll) ? void 0 : C.question.text));
                    } else y = p ? k.intl.string(k.t.sad2PD) : i ? k.intl.string(k.t.p0oZm5) : s > 1 ? k.intl.formatToPlainString(k.t.rtfTKi, { count: s }) : 1 === s ? k.intl.string(k.t.tCcq5u) : d ? k.intl.format(k.t.zY4v1N, { stickerName: t.stickerItems[0].name }) : f ? k.intl.string(k.t.slFYgo) : g ? k.intl.string(k.t.Yvvfw8) : k.intl.string(k.t.sDqZHB);
                else
                    ((b = !1),
                        (y = (0, r.jsx)(v.ZP, {
                            content: a,
                            message: t,
                            compact: !1,
                            className: o()(U.message, {
                                [U.unread]: n,
                                [U.selected]: l
                            })
                        })));
                return (
                    e &&
                        (y = (0, r.jsx)('div', {
                            className: o()(U.message, {
                                [U.unread]: n,
                                [U.selected]: l,
                                [U.descriptionMessage]: b
                            }),
                            children: y
                        })),
                    {
                        previewContent: y,
                        Icon: m
                    }
                );
            }, [t, a, n, l]);
        })({
            message: t,
            channel: n,
            isUnread: l,
            isSelected: a
        });
    return (0, r.jsxs)(u.Kqy, {
        direction: 'horizontal',
        gap: 4,
        align: 'center',
        children: [
            null != c &&
                (0, r.jsx)(c, {
                    size: 'xxs',
                    className: U.inlineIcon
                }),
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/normal',
                lineClamp: 1,
                className: U.message,
                children: s
            })
        ]
    });
}
let W = (0, i.memo)(
    function (e) {
        var t;
        let { message: i, goToSidebar: l, groupedMessages: a, isUnread: f } = e,
            g = i.message,
            { params: m } = (0, s.$B)(),
            b = (0, c.e7)([w.Z], () => w.Z.getChannel(i.channelId)),
            _ = null != (t = null == a ? void 0 : a.map((e) => e.message).filter((e) => null != e)) ? t : [];
        return null == g || null == b
            ? null
            : (0, r.jsx)(u.P3F, {
                  className: o()(U.messageClickableContainer, { [U.selected]: g.id === m.messageId }),
                  onClick: () => {
                      ((0, A.Qz)({
                          interactionType: A.s_.CLICK,
                          message: g
                      }),
                          h.Z.trackJump(b.id, g.id, 'Notifications Inbox'),
                          f &&
                              p.In(
                                  g.channel_id,
                                  {
                                      section: L.jXE.INBOX,
                                      object: L.qAy.ACK_MESSAGE_VIEWED,
                                      objectType: L.Qqv.ACK_SEMI_AUTOMATIC
                                  },
                                  !0,
                                  void 0,
                                  g.id
                              ));
                      let e = l ? L.Z5c.NOTIFICATIONS_INBOX(b.id, g.id) : L.Z5c.CHANNEL(b.guild_id, b.id, g.id);
                      (0, I.uL)(e);
                  },
                  onContextMenuCapture: (e) => {
                      e.preventDefault();
                  },
                  onContextMenu: (e) => {
                      ((0, A.Qz)({
                          interactionType: A.s_.CONTEXT_MENU,
                          message: g
                      }),
                          (0, d.jW)(
                              e,
                              async () => {
                                  let { default: e } = await n.e('74922').then(n.bind(n, 550265));
                                  return (t) => (0, r.jsx)(e, B(G({}, t), { channel: b }));
                              },
                              { disableClickTrap: !0 }
                          ));
                  },
                  children: (0, r.jsx)(V, {
                      message: g,
                      channel: b,
                      isSelected: g.id === m.messageId,
                      groupedMessages: _,
                      isUnread: f
                  })
              });
    },
    (e, t) => {
        var n, r;
        return e.isUnread === t.isUnread && e.message.id === t.message.id && (null == (n = e.groupedMessages) ? void 0 : n.length) === (null == (r = t.groupedMessages) ? void 0 : r.length);
    }
);

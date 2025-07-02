n.d(t, { Z: () => z });
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
    N = n(592125),
    w = n(720202),
    Z = n(430824),
    T = n(538397),
    A = n(987889),
    R = n(586694),
    D = n(981631),
    L = n(144717),
    M = n(388032),
    k = n(539499);
function U(e) {
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
    let { message: t, channel: n, focusProps: l, isSelected: a, isUnread: s, groupedMessages: d } = e,
        h = (0, m.KS)(n, null),
        p = (0, g.ZP)(n, !1),
        f = (0, c.e7)([Z.Z], () => Z.Z.getGuild(n.getGuildId())),
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
        x = n.type !== D.d4z.GUILD_ANNOUNCEMENT || null == f,
        I = (0, j.x)({
            channel: n,
            message: t,
            user: t.author,
            compact: !0,
            isRepliedMessage: !0
        }),
        N = (0, r.jsx)('div', {
            className: k.usernameTagContainer,
            children: (0, r.jsx)(E.Z, {
                channel: n,
                message: t,
                hideGuildTag: !0,
                hideSystemTag: !0,
                className: k.username
            })
        });
    return (
        (0, i.useEffect)(() => {
            null != f && w.Z.requestMember(f.id, t.author.id);
        }, [f, t.author.id]),
        (0, r.jsx)(
            u.tEY,
            G(U({}, l), {
                children: (0, r.jsxs)('div', {
                    onMouseLeave: S.onMouseLeave,
                    onMouseEnter: S.onMouseEnter,
                    className: k.messageContainer,
                    children: [
                        s && (0, r.jsx)('div', { className: k.unreadDot }),
                        (0, r.jsx)(u.Kqy, {
                            align: 'start',
                            style: {
                                width: 'fit-content',
                                marginTop: '4px'
                            },
                            children: x
                                ? (0, r.jsx)(R.q, {
                                      'aria-label': 'User Avatar',
                                      src: C,
                                      size: u.EFr.SIZE_32,
                                      cornerIconUrl: null != f ? f.getIconURL(24) : void 0,
                                      cornerIconOffsetX: 4,
                                      cornerIconOffsetY: 3,
                                      avatarDecoration: v
                                  })
                                : (0, r.jsx)(R.E, {
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
                                        x
                                            ? (0, r.jsxs)('div', {
                                                  className: k.usernameOuterContainer,
                                                  children: [
                                                      (0, r.jsx)('div', {
                                                          className: k.username,
                                                          style: { color: O },
                                                          children: (0, r.jsx)(b.Z, { children: N })
                                                      }),
                                                      I
                                                  ]
                                              })
                                            : (0, r.jsx)(b.Z, {
                                                  children: (0, r.jsx)(u.X6q, {
                                                      variant: 'text-md/semibold',
                                                      style: { color: O },
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
                                                (0, r.jsx)(A.Z, {
                                                    message: t,
                                                    channel: n,
                                                    isUnread: s
                                                }),
                                                t.mentioned && s
                                                    ? (0, r.jsx)(u.mAB, {
                                                          className: k.mentionBadge,
                                                          count: 1
                                                      })
                                                    : (0, r.jsx)(V, { message: t })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(u.Kqy, {
                                    direction: 'horizontal',
                                    align: 'center',
                                    gap: 4,
                                    className: o()(k.channelName, {
                                        [k.unread]: s,
                                        [k.selected]: a
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
                                                [k.unread]: s,
                                                [k.selected]: a
                                            }),
                                            children: [p, !x && ' \xB7 '.concat(_)]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(H, {
                                    message: t,
                                    isUnread: s,
                                    isSelected: a,
                                    channel: n
                                }),
                                null != d &&
                                    (0, r.jsx)(u.Kqy, {
                                        gap: 4,
                                        style: { minWidth: 0 },
                                        children: (null == d ? void 0 : d.length) > 0 && (0, r.jsx)(F, { overflowMessages: d })
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
                className: k.overflowText,
                children: M.intl.formatToPlainString(L.default.NzUuLC, { count: t.length })
            })
        ]
    });
}
function V(e) {
    let { message: t } = e,
        n = (0, x.a3)(t.timestamp.getTime());
    return (0, r.jsx)(C.Z, {
        timestamp: t.timestamp,
        className: k.timestamp,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n
    });
}
function H(e) {
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
                    i = t.embeds.some((e) => e.type === D.hBH.GIFV),
                    s = (function (e) {
                        let t = e.embeds.some((e) => e.type === D.hBH.GIFV);
                        return e.attachments.length + +!!t;
                    })(t),
                    c = (0, _.Z)(t),
                    d = t.stickerItems.length > 0,
                    h = t.isPoll(),
                    p = t.type === D.uaV.POLL_RESULT,
                    f = t.hasFlag(D.iLy.IS_VOICE_MESSAGE),
                    g = t.type === D.uaV.USER_JOIN,
                    m = null;
                1 === s ? (m = u.XBm) : s > 1 ? (m = u.Ka2) : c ? (m = O.Z) : h || p ? (m = u.QDj) : d ? (m = u.SlE) : f && (m = u.gj8);
                let b = !0,
                    y = null;
                if (e)
                    if (c) y = M.intl.string(M.t['9ddYKi']);
                    else if (h) {
                        var C;
                        ((b = !1), (y = null == (C = t.poll) ? void 0 : C.question.text));
                    } else y = p ? M.intl.string(M.t.sad2PD) : i ? M.intl.string(M.t.p0oZm5) : s > 1 ? M.intl.formatToPlainString(M.t.rtfTKi, { count: s }) : 1 === s ? M.intl.string(M.t.tCcq5u) : d ? M.intl.format(M.t.zY4v1N, { stickerName: t.stickerItems[0].name }) : f ? M.intl.string(M.t.slFYgo) : g ? M.intl.string(M.t.Yvvfw8) : M.intl.string(M.t.sDqZHB);
                else
                    ((b = !1),
                        (y = (0, r.jsx)(v.ZP, {
                            content: a,
                            message: t,
                            compact: !1,
                            className: o()(k.message, {
                                [k.unread]: n,
                                [k.selected]: l
                            })
                        })));
                return (
                    e &&
                        (y = (0, r.jsx)('div', {
                            className: o()(k.message, {
                                [k.unread]: n,
                                [k.selected]: l,
                                [k.descriptionMessage]: b
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
                    className: k.inlineIcon
                }),
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/normal',
                lineClamp: 1,
                className: k.message,
                children: s
            })
        ]
    });
}
let z = (0, i.memo)(
    function (e) {
        let { message: t, goToSidebar: i, groupedMessages: l, isUnread: a } = e,
            { params: f } = (0, s.$B)(),
            g = (0, c.e7)([N.Z], () => N.Z.getChannel(t.channel_id));
        return null == t || null == g
            ? null
            : (0, r.jsx)(u.P3F, {
                  className: o()(k.messageClickableContainer, { [k.selected]: t.id === f.messageId }),
                  onClick: () => {
                      ((0, T.Qz)({
                          interactionType: T.s_.CLICK,
                          message: t
                      }),
                          h.Z.trackJump(g.id, t.id, 'Notifications Inbox'),
                          a &&
                              p.In(
                                  t.channel_id,
                                  {
                                      section: D.jXE.INBOX,
                                      object: D.qAy.ACK_MESSAGE_VIEWED,
                                      objectType: D.Qqv.ACK_SEMI_AUTOMATIC
                                  },
                                  !0,
                                  void 0,
                                  t.id
                              ));
                      let e = i ? D.Z5c.NOTIFICATIONS_INBOX(g.id, t.id) : D.Z5c.CHANNEL(g.guild_id, g.id, t.id);
                      (0, I.uL)(e);
                  },
                  onContextMenuCapture: (e) => {
                      e.preventDefault();
                  },
                  onContextMenu: (e) => {
                      ((0, T.Qz)({
                          interactionType: T.s_.CONTEXT_MENU,
                          message: t
                      }),
                          (0, d.jW)(
                              e,
                              async () => {
                                  let { default: e } = await n.e('74922').then(n.bind(n, 550265));
                                  return (t) => (0, r.jsx)(e, G(U({}, t), { channel: g }));
                              },
                              { disableClickTrap: !0 }
                          ));
                  },
                  children: (0, r.jsx)(B, {
                      message: t,
                      channel: g,
                      isSelected: t.id === f.messageId,
                      groupedMessages: l,
                      isUnread: a
                  })
              });
    },
    (e, t) => {
        var n, r;
        return e.isUnread === t.isUnread && e.message.id === t.message.id && (null == (n = e.groupedMessages) ? void 0 : n.length) === (null == (r = t.groupedMessages) ? void 0 : r.length);
    }
);

n.d(t, { Z: () => K });
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
    _ = n(978003),
    O = n(245216),
    y = n(739566),
    v = n(930282),
    C = n(318713),
    j = n(47930),
    E = n(123145),
    x = n(25015),
    S = n(178480),
    I = n(703656),
    P = n(518950),
    N = n(131704),
    w = n(601964),
    Z = n(592125),
    T = n(720202),
    A = n(430824),
    R = n(804932),
    D = n(987889),
    L = n(586694),
    M = n(981631),
    k = n(144717),
    U = n(388032),
    G = n(539499);
function B(e) {
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
function V(e, t) {
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
function F(e) {
    let { message: t, channel: n, focusProps: l, isSelected: s, isUnread: a, groupedMessages: d } = e,
        h = n.type === M.d4z.UNKNOWN ? u.VL1 : (0, m.KS)(n, null),
        p = (0, g.ZP)(n, !1),
        f = (0, c.e7)([A.Z], () => A.Z.getGuild(n.getGuildId())),
        { nick: _, colorString: O } = (0, y.ZP)(t),
        {
            avatarDecorationSrc: v,
            avatarSrc: C,
            eventHandlers: x
        } = (0, P.Z)({
            userId: t.author.id,
            size: u.EFr.SIZE_32,
            guildId: null == f ? void 0 : f.id,
            animateOnHover: !0
        }),
        S = n.type !== M.d4z.GUILD_ANNOUNCEMENT || null == f,
        I = (0, j.x)({
            channel: n,
            message: t,
            user: t.author,
            compact: !0,
            isRepliedMessage: !0
        }),
        N = (0, r.jsx)('div', {
            className: G.usernameTagContainer,
            children: (0, r.jsx)(E.Z, {
                channel: n,
                message: t,
                hideGuildTag: !0,
                hideSystemTag: !0,
                className: G.username
            })
        });
    return (
        (0, i.useEffect)(() => {
            null != f && T.Z.requestMember(f.id, t.author.id);
        }, [f, t.author.id]),
        (0, r.jsx)(
            u.tEY,
            V(B({}, l), {
                children: (0, r.jsxs)('div', {
                    onMouseLeave: x.onMouseLeave,
                    onMouseEnter: x.onMouseEnter,
                    className: G.messageContainer,
                    children: [
                        a && (0, r.jsx)('div', { className: G.unreadDot }),
                        (0, r.jsx)(u.Kqy, {
                            align: 'start',
                            style: {
                                width: 'fit-content',
                                marginTop: '4px'
                            },
                            children: S
                                ? (0, r.jsx)(L.q, {
                                      'aria-label': 'User Avatar',
                                      src: C,
                                      size: u.EFr.SIZE_32,
                                      cornerIconUrl: null != f ? (0, w.EB)(f, 24) : void 0,
                                      cornerIconOffsetX: 4,
                                      cornerIconOffsetY: 3,
                                      avatarDecoration: v
                                  })
                                : (0, r.jsx)(L.E, {
                                      'aria-label': 'Guild Icon',
                                      src: (0, w.EB)(f, 32),
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
                                        S
                                            ? (0, r.jsxs)('div', {
                                                  className: G.usernameOuterContainer,
                                                  children: [
                                                      (0, r.jsx)('div', {
                                                          className: G.username,
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
                                                      className: G.username,
                                                      children: f.name
                                                  })
                                              }),
                                        (0, r.jsxs)(u.Kqy, {
                                            direction: 'horizontal',
                                            gap: 4,
                                            align: 'center',
                                            style: { width: 'fit-content' },
                                            children: [
                                                (0, r.jsx)(D.Z, {
                                                    message: t,
                                                    channel: n,
                                                    isUnread: a
                                                }),
                                                t.mentioned && a
                                                    ? (0, r.jsx)(u.mAB, {
                                                          className: G.mentionBadge,
                                                          count: 1
                                                      })
                                                    : (0, r.jsx)(z, { message: t })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(u.Kqy, {
                                    direction: 'horizontal',
                                    align: 'center',
                                    gap: 4,
                                    className: o()(G.channelName, {
                                        [G.unread]: a,
                                        [G.selected]: s
                                    }),
                                    children: [
                                        null !== h &&
                                            (0, r.jsx)(h, {
                                                size: 'xxs',
                                                className: G.inlineIcon
                                            }),
                                        (0, r.jsxs)(u.Text, {
                                            variant: 'text-sm/medium',
                                            lineClamp: 1,
                                            className: o()(G.channelName, {
                                                [G.unread]: a,
                                                [G.selected]: s
                                            }),
                                            children: [p, !S && ' \xB7 '.concat(_)]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(W, {
                                    message: t,
                                    isUnread: a,
                                    isSelected: s,
                                    channel: n
                                }),
                                d.length > 0 &&
                                    (0, r.jsx)(u.Kqy, {
                                        gap: 4,
                                        style: { minWidth: 0 },
                                        children: (0, r.jsx)(H, { overflowMessages: d })
                                    })
                            ]
                        })
                    ]
                })
            })
        )
    );
}
function H(e) {
    let { overflowMessages: t } = e,
        n = (0, s.uniqBy)(
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
                className: G.overflowText,
                children: U.intl.formatToPlainString(k.default.NzUuLC, { count: t.length })
            })
        ]
    });
}
function z(e) {
    let { message: t } = e,
        n = (0, S.a3)(t.timestamp.getTime());
    return (0, r.jsx)(C.Z, {
        timestamp: t.timestamp,
        className: G.timestamp,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n
    });
}
function W(e) {
    let { message: t, channel: n, isUnread: l, isSelected: s } = e,
        { previewContent: a, Icon: c } = (function (e) {
            let { message: t, isUnread: n, isSelected: l } = e,
                { content: s } = (0, x.Z)(t, {
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
                    i = t.embeds.some((e) => e.type === M.hBH.GIFV),
                    a = (function (e) {
                        let t = e.embeds.some((e) => e.type === M.hBH.GIFV);
                        return e.attachments.length + +!!t;
                    })(t),
                    c = (0, _.Z)(t),
                    d = t.stickerItems.length > 0,
                    h = t.isPoll(),
                    p = t.type === M.uaV.POLL_RESULT,
                    f = t.hasFlag(M.iLy.IS_VOICE_MESSAGE),
                    g = t.type === M.uaV.USER_JOIN,
                    m = null;
                1 === a ? (m = u.XBm) : a > 1 ? (m = u.Ka2) : c ? (m = O.Z) : h || p ? (m = u.QDj) : d ? (m = u.SlE) : f && (m = u.gj8);
                let b = !0,
                    y = null;
                if (e)
                    if (c) y = U.intl.string(U.t['9ddYKi']);
                    else if (h) {
                        var C;
                        ((b = !1), (y = null == (C = t.poll) ? void 0 : C.question.text));
                    } else y = p ? U.intl.string(U.t.sad2PD) : i ? U.intl.string(U.t.p0oZm5) : a > 1 ? U.intl.formatToPlainString(U.t.rtfTKi, { count: a }) : 1 === a ? U.intl.string(U.t.tCcq5u) : d ? U.intl.format(U.t.zY4v1N, { stickerName: t.stickerItems[0].name }) : f ? U.intl.string(U.t.slFYgo) : g ? U.intl.string(U.t.Yvvfw8) : U.intl.string(U.t.sDqZHB);
                else
                    ((b = !1),
                        (y = (0, r.jsx)(v.ZP, {
                            content: s,
                            message: t,
                            compact: !1,
                            className: o()(G.message, {
                                [G.unread]: n,
                                [G.selected]: l
                            })
                        })));
                return (
                    e &&
                        (y = (0, r.jsx)('div', {
                            className: o()(G.message, {
                                [G.unread]: n,
                                [G.selected]: l,
                                [G.descriptionMessage]: b
                            }),
                            children: y
                        })),
                    {
                        previewContent: y,
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
                    className: G.inlineIcon
                }),
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/normal',
                lineClamp: 1,
                className: G.message,
                children: a
            })
        ]
    });
}
let K = (0, i.memo)(
    function (e) {
        var t;
        let { message: i, goToSidebar: l, groupedMessages: s, isUnread: f } = e,
            g = i.message,
            { params: m } = (0, a.$B)(),
            b = (0, c.e7)([Z.Z], () => {
                if (null == g) return null;
                let e = Z.Z.getChannel(i.channelId);
                return null != e
                    ? e
                    : new N.nl({
                          id: i.channelId,
                          guild_id: i.guildId,
                          type: M.d4z.UNKNOWN,
                          name: U.intl.string(U.t.J90oLS)
                      });
            }),
            _ = null != (t = null == s ? void 0 : s.map((e) => e.message).filter((e) => null != e)) ? t : [];
        return null == g || null == b
            ? null
            : (0, r.jsx)(u.P3F, {
                  className: o()(G.messageClickableContainer, { [G.selected]: g.id === m.messageId }),
                  onClick: () => {
                      ((0, R.Qz)({
                          interactionType: R.s_.CLICK,
                          message: g
                      }),
                          h.Z.trackJump(b.id, g.id, 'Notifications Inbox'),
                          f &&
                              p.In(
                                  g.channel_id,
                                  {
                                      section: M.jXE.INBOX,
                                      object: M.qAy.ACK_MESSAGE_VIEWED,
                                      objectType: M.Qqv.ACK_SEMI_AUTOMATIC
                                  },
                                  !0,
                                  void 0,
                                  g.id
                              ));
                      let e = l ? M.Z5c.NOTIFICATIONS_INBOX(b.id, g.id) : M.Z5c.CHANNEL(b.guild_id, b.id, g.id);
                      (0, I.uL)(e);
                  },
                  onContextMenuCapture: (e) => {
                      e.preventDefault();
                  },
                  onContextMenu: (e) => {
                      ((0, R.Qz)({
                          interactionType: R.s_.CONTEXT_MENU,
                          message: g
                      }),
                          (0, d.jW)(
                              e,
                              async () => {
                                  let { default: e } = await n.e('74922').then(n.bind(n, 550265));
                                  return (t) => (0, r.jsx)(e, V(B({}, t), { channel: b }));
                              },
                              { disableClickTrap: !0 }
                          ));
                  },
                  children: (0, r.jsx)(F, {
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

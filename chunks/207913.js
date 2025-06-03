n.d(t, { B: () => F });
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
    y = n(978003),
    O = n(245216),
    v = n(172751),
    _ = n(739566),
    C = n(930282),
    j = n(318713),
    S = n(47930),
    E = n(123145),
    x = n(25015),
    P = n(178480),
    I = n(703656),
    w = n(518950),
    N = n(592125),
    Z = n(720202),
    T = n(430824),
    R = n(375954),
    A = n(306680),
    D = n(594174),
    L = n(709054),
    k = n(987889),
    M = n(586694),
    U = n(981631),
    G = n(388032),
    B = n(539499);
function V(e) {
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
function H(e, t) {
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
    let { message: t, goToSidebar: i, groupedMessages: l } = e,
        { params: s } = (0, a.$B)(),
        f = (0, c.e7)([N.Z], () => N.Z.getChannel(t.channel_id)),
        g = (0, c.e7)(
            [A.ZP],
            () => {
                if (null == f) return !1;
                let e = A.ZP.getTrackedAckMessageId(null == f ? void 0 : f.id);
                return L.default.compare(t.id, e) > 0;
            },
            [f, t.id]
        );
    return null == t || null == f
        ? null
        : (0, r.jsx)(u.P3F, {
              className: o()(B.messageClickableContainer, { [B.selected]: t.id === s.messageId }),
              onClick: () => {
                  h.Z.trackJump(f.id, t.id, 'Notifications Inbox'), g && p.In(t.channel_id, !0, void 0, t.id);
                  let e = i ? U.Z5c.NOTIFICATIONS_INBOX(f.id, t.id) : U.Z5c.CHANNEL(f.guild_id, f.id, t.id);
                  (0, I.uL)(e);
              },
              onContextMenuCapture: (e) => {
                  e.preventDefault();
              },
              onContextMenu: (e) => {
                  (0, d.jW)(
                      e,
                      async () => {
                          let { default: e } = await n.e('74922').then(n.bind(n, 550265));
                          return (t) => (0, r.jsx)(e, H(V({}, t), { channel: f }));
                      },
                      { disableClickTrap: !0 }
                  );
              },
              children: (0, r.jsx)(z, {
                  message: t,
                  channel: f,
                  isSelected: t.id === s.messageId,
                  groupedMessages: l,
                  isUnread: g
              })
          });
}
function z(e) {
    let { message: t, channel: n, focusProps: l, isSelected: s, isUnread: a, groupedMessages: d } = e,
        h = (0, m.KS)(n, null),
        p = (0, g.ZP)(n, !1),
        f = (0, c.e7)([T.Z], () => T.Z.getGuild(n.getGuildId())),
        { nick: y, colorString: O, primaryGuild: C } = (0, _.ZP)(t),
        {
            avatarDecorationSrc: j,
            avatarSrc: x,
            eventHandlers: P
        } = (0, w.Z)({
            user: t.author,
            size: u.EFr.SIZE_32,
            guildId: null == f ? void 0 : f.id,
            animateOnHover: !0
        }),
        I = n.type !== U.d4z.GUILD_ANNOUNCEMENT || null == f,
        N = (0, S.x)({
            channel: n,
            message: t,
            user: t.author,
            compact: !0,
            isRepliedMessage: !0
        }),
        R = (0, r.jsxs)('div', {
            className: B.usernameTagContainer,
            children: [
                (0, r.jsx)(E.Z, {
                    channel: n,
                    message: t,
                    hideGuildTag: !0,
                    hideSystemTag: !0,
                    className: B.username
                }),
                null != C &&
                    (0, r.jsx)(v.ZP, {
                        primaryGuild: C,
                        userId: t.author.id,
                        inline: !0,
                        disableGuildProfile: !0,
                        className: B.clanTag
                    })
            ]
        });
    return (
        (0, i.useEffect)(() => {
            null != f && Z.Z.requestMember(f.id, t.author.id);
        }, [f, t.author.id]),
        (0, r.jsx)(
            u.tEY,
            H(V({}, l), {
                children: (0, r.jsxs)('div', {
                    onMouseLeave: P.onMouseLeave,
                    onMouseEnter: P.onMouseEnter,
                    className: B.messageContainer,
                    children: [
                        a && (0, r.jsx)('div', { className: B.unreadDot }),
                        (0, r.jsx)(u.Kqy, {
                            align: 'start',
                            style: {
                                width: 'fit-content',
                                marginTop: '4px'
                            },
                            children: I
                                ? (0, r.jsx)(M.q, {
                                      'aria-label': 'User Avatar',
                                      src: x,
                                      size: u.EFr.SIZE_32,
                                      cornerIconUrl: null != f ? f.getIconURL(24) : void 0,
                                      cornerIconOffsetX: 4,
                                      cornerIconOffsetY: 3,
                                      avatarDecoration: j
                                  })
                                : (0, r.jsx)(M.E, {
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
                                                  className: B.usernameOuterContainer,
                                                  children: [
                                                      (0, r.jsx)('div', {
                                                          className: B.username,
                                                          style: { color: O },
                                                          children: (0, r.jsx)(b.Z, { children: R })
                                                      }),
                                                      N
                                                  ]
                                              })
                                            : (0, r.jsx)(b.Z, {
                                                  children: (0, r.jsx)(u.X6q, {
                                                      variant: 'text-md/semibold',
                                                      style: { color: O },
                                                      className: B.username,
                                                      children: f.name
                                                  })
                                              }),
                                        (0, r.jsxs)(u.Kqy, {
                                            direction: 'horizontal',
                                            gap: 4,
                                            align: 'center',
                                            style: { width: 'fit-content' },
                                            children: [
                                                (0, r.jsx)(k.Z, {
                                                    message: t,
                                                    channel: n,
                                                    isUnread: a
                                                }),
                                                (0, r.jsx)(Y, { message: t })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(u.Kqy, {
                                    direction: 'horizontal',
                                    align: 'center',
                                    gap: 4,
                                    className: o()(B.channelName, {
                                        [B.unread]: a,
                                        [B.selected]: s
                                    }),
                                    children: [
                                        null !== h &&
                                            (0, r.jsx)(h, {
                                                size: 'xxs',
                                                className: B.inlineIcon
                                            }),
                                        (0, r.jsxs)(u.Text, {
                                            variant: 'text-sm/medium',
                                            lineClamp: 1,
                                            className: o()(B.channelName, {
                                                [B.unread]: a,
                                                [B.selected]: s
                                            }),
                                            children: [p, !I && ' \xB7 '.concat(y)]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(K, {
                                    message: t,
                                    isUnread: a,
                                    isSelected: s,
                                    channel: n
                                }),
                                null != d &&
                                    (0, r.jsx)(u.Kqy, {
                                        gap: 4,
                                        style: { minWidth: 0 },
                                        children: (null == d ? void 0 : d.length) > 0 && (0, r.jsx)(W, { overflowMessages: d })
                                    })
                            ]
                        })
                    ]
                })
            })
        )
    );
}
function W(e) {
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
                className: B.overflowText,
                children: G.intl.formatToPlainString(G.t.NzUuLC, { count: t.length })
            })
        ]
    });
}
function Y(e) {
    let { message: t } = e,
        n = (0, P.a3)(t.timestamp.getTime());
    return (0, r.jsx)(j.Z, {
        timestamp: t.timestamp,
        className: B.timestamp,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n
    });
}
function K(e) {
    let { message: t, isUnread: n, isSelected: l } = e,
        { previewContent: s, Icon: a } = (function (e) {
            let { message: t, isUnread: n, isSelected: l } = e,
                { content: s } = (0, x.Z)(t, {
                    hideSimpleEmbedContent: !0,
                    allowList: !1,
                    allowHeading: !0,
                    allowLinks: !0,
                    previewLinkTarget: !1,
                    formatInline: !0,
                    noStyleAndInteraction: !0
                }),
                a = (function (e) {
                    let t = (0, c.e7)([R.Z], () => {
                            var t, n;
                            return (null == (t = e.messageReference) ? void 0 : t.message_id) == null ? null : R.Z.getMessage(e.channel_id, null == (n = e.messageReference) ? void 0 : n.message_id);
                        }),
                        n = (0, c.e7)([D.default], () => D.default.getCurrentUser());
                    return e.type === U.uaV.REPLY && null != t && t.author.id === (null == n ? void 0 : n.id);
                })(t);
            return (0, i.useMemo)(() => {
                let e = '' === t.content,
                    i = t.embeds.some((e) => e.type === U.hBH.GIFV),
                    c = (function (e) {
                        let t = e.embeds.some((e) => e.type === U.hBH.GIFV);
                        return e.attachments.length + +!!t;
                    })(t),
                    d = (0, y.Z)(t),
                    h = t.stickerItems.length > 0,
                    p = t.isPoll(),
                    f = t.type === U.uaV.POLL_RESULT,
                    g = t.hasFlag(U.iLy.IS_VOICE_MESSAGE),
                    m = null;
                1 === c ? (m = u.XBm) : c > 1 ? (m = u.Ka2) : d ? (m = O.Z) : p || f ? (m = u.QDj) : a ? (m = u.n$P) : h ? (m = u.SlE) : g && (m = u.gj8);
                let b = !0,
                    v = null;
                if (e)
                    if (d) v = G.intl.string(G.t['9ddYKi']);
                    else if (p) {
                        var _;
                        (b = !1), (v = null == (_ = t.poll) ? void 0 : _.question.text);
                    } else v = f ? G.intl.string(G.t.sad2PD) : i ? G.intl.string(G.t.p0oZm5) : c > 1 ? G.intl.formatToPlainString(G.t.rtfTKi, { count: c }) : 1 === c ? G.intl.string(G.t.tCcq5u) : h ? G.intl.format(G.t.zY4v1N, { stickerName: t.stickerItems[0].name }) : g ? G.intl.string(G.t.slFYgo) : G.intl.string(G.t.sDqZHB);
                else
                    (b = !1),
                        (v = (0, r.jsx)(C.ZP, {
                            content: s,
                            message: t,
                            compact: !1,
                            className: o()(B.message, {
                                [B.unread]: n,
                                [B.selected]: l
                            })
                        }));
                return (
                    e &&
                        (v = (0, r.jsx)('div', {
                            className: o()(B.message, {
                                [B.unread]: n,
                                [B.selected]: l,
                                [B.descriptionMessage]: b
                            }),
                            children: v
                        })),
                    {
                        previewContent: v,
                        Icon: m
                    }
                );
            }, [t, s, n, l, a]);
        })({
            message: t,
            isUnread: n,
            isSelected: l
        });
    return (0, r.jsxs)(u.Kqy, {
        direction: 'horizontal',
        gap: 4,
        align: 'center',
        children: [
            null != a &&
                (0, r.jsx)(a, {
                    size: 'xxs',
                    className: B.inlineIcon
                }),
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/normal',
                lineClamp: 1,
                className: B.message,
                children: s
            })
        ]
    });
}

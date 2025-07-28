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
    h = n(884338),
    p = n(933557),
    f = n(471445),
    g = n(111028),
    m = n(978003),
    b = n(245216),
    _ = n(739566),
    O = n(930282),
    y = n(318713),
    C = n(47930),
    v = n(123145),
    j = n(25015),
    E = n(178480),
    S = n(518950),
    x = n(131704),
    I = n(601964),
    P = n(592125),
    N = n(720202),
    w = n(430824),
    T = n(821020),
    Z = n(948154),
    A = n(804932),
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
        h = n.type === L.d4z.UNKNOWN ? u.VL1 : (0, f.KS)(n, null),
        m = (0, p.ZP)(n, !1),
        b = (0, c.e7)([w.Z], () => w.Z.getGuild(n.getGuildId())),
        { nick: O, colorString: y } = (0, _.ZP)(t),
        { avatarSrc: j, eventHandlers: E } = (0, S.Z)({
            userId: t.author.id,
            size: u.EFr.SIZE_32,
            guildId: null == b ? void 0 : b.id,
            animateOnHover: !0
        }),
        x = n.type !== L.d4z.GUILD_ANNOUNCEMENT || null == b,
        P = (0, C.x)({
            channel: n,
            message: t,
            user: t.author,
            compact: !0,
            isRepliedMessage: !0
        }),
        T = (0, r.jsx)('div', {
            className: U.usernameTagContainer,
            children: (0, r.jsx)(v.Z, {
                channel: n,
                message: t,
                hideGuildTag: !0,
                hideSystemTag: !0,
                className: U.username
            })
        });
    return (
        (0, i.useEffect)(() => {
            null != b && N.Z.requestMember(b.id, t.author.id);
        }, [b, t.author.id]),
        (0, r.jsx)(
            u.tEY,
            B(G({}, l), {
                children: (0, r.jsxs)('div', {
                    onMouseLeave: E.onMouseLeave,
                    onMouseEnter: E.onMouseEnter,
                    className: U.messageContainer,
                    children: [
                        s && !a && (0, r.jsx)('div', { className: U.unreadDot }),
                        (0, r.jsx)(u.Kqy, {
                            align: 'start',
                            style: {
                                width: 'fit-content',
                                marginTop: '4px'
                            },
                            children: x
                                ? (0, r.jsx)(D.q, {
                                      'aria-label': 'User Avatar',
                                      src: j,
                                      size: u.EFr.SIZE_32,
                                      cornerIconUrl: null != b ? (0, I.EB)(b, 24) : void 0,
                                      cornerIconOffsetX: 4,
                                      cornerIconOffsetY: 3
                                  })
                                : (0, r.jsx)(D.E, {
                                      'aria-label': 'Guild Icon',
                                      src: (0, I.EB)(b, 32),
                                      size: u.EFr.SIZE_32,
                                      cornerIconUrl: t.author.getAvatarURL(b.id, 24),
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
                                                          style: { color: null != y ? y : void 0 },
                                                          children: (0, r.jsx)(g.Z, { children: T })
                                                      }),
                                                      P
                                                  ]
                                              })
                                            : (0, r.jsx)(g.Z, {
                                                  children: (0, r.jsx)(u.X6q, {
                                                      variant: 'text-md/semibold',
                                                      style: { color: null != y ? y : void 0 },
                                                      className: U.username,
                                                      children: b.name
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
                                            children: [m, !x && ' \xB7 '.concat(O)]
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
                                        style: {
                                            minWidth: 0,
                                            marginTop: 4,
                                            marginBottom: 4
                                        },
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
            (0, r.jsx)(h.ZP, {
                users: n,
                useFallbackUserForPopout: !0,
                size: h.u8.SIZE_16
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
        n = (0, E.a3)(t.timestamp.getTime());
    return (0, r.jsx)(y.Z, {
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
                { content: a } = (0, j.Z)(t, {
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
                    c = (0, m.Z)(t),
                    d = t.stickerItems.length > 0,
                    h = t.isPoll(),
                    p = t.type === L.uaV.POLL_RESULT,
                    f = t.hasFlag(L.iLy.IS_VOICE_MESSAGE),
                    g = t.type === L.uaV.USER_JOIN,
                    _ = null;
                1 === s ? (_ = u.XBm) : s > 1 ? (_ = u.Ka2) : c ? (_ = b.Z) : h || p ? (_ = u.QDj) : d ? (_ = u.SlE) : f && (_ = u.gj8);
                let y = !0,
                    C = null;
                if (e)
                    if (c) C = k.intl.string(k.t['9ddYKi']);
                    else if (h) {
                        var v;
                        ((y = !1), (C = null == (v = t.poll) ? void 0 : v.question.text));
                    } else C = p ? k.intl.string(k.t.sad2PD) : i ? k.intl.string(k.t.p0oZm5) : s > 1 ? k.intl.formatToPlainString(k.t.rtfTKi, { count: s }) : 1 === s ? k.intl.string(k.t.tCcq5u) : d ? k.intl.format(k.t.zY4v1N, { stickerName: t.stickerItems[0].name }) : f ? k.intl.string(k.t.slFYgo) : g ? k.intl.string(k.t.Yvvfw8) : k.intl.string(k.t.sDqZHB);
                else
                    ((y = !1),
                        (C = (0, r.jsx)(O.ZP, {
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
                        (C = (0, r.jsx)('div', {
                            className: o()(U.message, {
                                [U.unread]: n,
                                [U.selected]: l,
                                [U.descriptionMessage]: y
                            }),
                            children: C
                        })),
                    {
                        previewContent: C,
                        Icon: _
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
        let { message: i, groupedMessages: l, isUnread: a } = e,
            h = i.message,
            p = (0, A.fJ)(),
            { params: f } = (0, s.$B)(),
            g = (0, c.e7)([P.Z], () => {
                if (null == h) return null;
                let e = P.Z.getChannel(i.channelId);
                return null != e
                    ? e
                    : new x.nl({
                          id: i.channelId,
                          guild_id: i.guildId,
                          type: L.d4z.UNKNOWN,
                          name: k.intl.string(k.t.J90oLS)
                      });
            }),
            { notificationCenterVariant: m } = T.Lk.useExperiment({ location: 'NotificationsInboxMessageUnit' }),
            b = null != (t = null == l ? void 0 : l.map((e) => e.message).filter((e) => null != e)) ? t : [];
        return null == h || null == g
            ? null
            : (0, r.jsx)(u.P3F, {
                  className: o()(U.messageClickableContainer, { [U.selected]: h.id === f.messageId }),
                  onClick: () => {
                      Z.Z.inboxItemClick({
                          message: h,
                          channel: g,
                          isUnread: a,
                          isSidebar: m === T.jP.SIDEBAR,
                          viewId: p
                      });
                  },
                  onContextMenuCapture: (e) => {
                      e.preventDefault();
                  },
                  onContextMenu: (e) => {
                      ((0, A.Qz)({
                          interactionType: A.s_.CONTEXT_MENU,
                          message: h,
                          viewId: p
                      }),
                          (0, d.jW)(
                              e,
                              async () => {
                                  let { default: e } = await n.e('74922').then(n.bind(n, 550265));
                                  return (t) => (0, r.jsx)(e, B(G({}, t), { channel: g }));
                              },
                              { disableClickTrap: !0 }
                          ));
                  },
                  children: (0, r.jsx)(V, {
                      message: h,
                      channel: g,
                      isSelected: h.id === f.messageId,
                      groupedMessages: b,
                      isUnread: a
                  })
              });
    },
    (e, t) => {
        var n, r;
        return e.isUnread === t.isUnread && e.message.id === t.message.id && (null == (n = e.groupedMessages) ? void 0 : n.length) === (null == (r = t.groupedMessages) ? void 0 : r.length);
    }
);

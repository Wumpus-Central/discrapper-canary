n.d(t, { B: () => G });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(114858),
    a = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(904245),
    h = n(45114),
    p = n(933557),
    f = n(471445),
    g = n(111028),
    m = n(978003),
    b = n(245216),
    y = n(172751),
    O = n(739566),
    v = n(930282),
    _ = n(318713),
    C = n(47930),
    j = n(123145),
    S = n(25015),
    E = n(178480),
    x = n(703656),
    P = n(518950),
    I = n(592125),
    w = n(720202),
    N = n(430824),
    Z = n(306680),
    T = n(709054),
    A = n(987889),
    R = n(586694),
    D = n(981631),
    L = n(388032),
    k = n(539499);
function M(e) {
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
function U(e, t) {
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
function G(e) {
    let { message: t, goToSidebar: i, groupedMessages: l } = e,
        { params: p } = (0, s.$B)(),
        f = (0, a.e7)([I.Z], () => I.Z.getChannel(t.channel_id)),
        g = (0, a.e7)(
            [Z.ZP],
            () => {
                if (null == f) return !1;
                let e = Z.ZP.getTrackedAckMessageId(null == f ? void 0 : f.id);
                return T.default.compare(t.id, e) > 0;
            },
            [f, t.id]
        );
    return null == t || null == f
        ? null
        : (0, r.jsx)(c.P3F, {
              className: o()(k.messageClickableContainer, { [k.selected]: t.id === p.messageId }),
              onClick: () => {
                  d.Z.trackJump(f.id, t.id, 'Notifications Inbox'), g && h.In(t.channel_id, !0, void 0, t.id);
                  let e = i ? D.Z5c.NOTIFICATIONS_INBOX(f.id, t.id) : D.Z5c.CHANNEL(f.guild_id, f.id, t.id);
                  (0, x.uL)(e);
              },
              onContextMenuCapture: (e) => {
                  e.preventDefault();
              },
              onContextMenu: (e) => {
                  (0, u.jW)(
                      e,
                      async () => {
                          let { default: e } = await n.e('74922').then(n.bind(n, 550265));
                          return (t) => (0, r.jsx)(e, U(M({}, t), { channel: f }));
                      },
                      { disableClickTrap: !0 }
                  );
              },
              children: (0, r.jsx)(B, {
                  message: t,
                  channel: f,
                  isSelected: t.id === p.messageId,
                  groupedMessages: l,
                  isUnread: g
              })
          });
}
function B(e) {
    let { message: t, channel: n, focusProps: l, isSelected: s, isUnread: u, groupedMessages: d } = e,
        h = (0, f.KS)(n, null),
        m = (0, p.ZP)(n, !1),
        b = (0, a.e7)([N.Z], () => N.Z.getGuild(n.getGuildId())),
        { nick: v, colorString: _, primaryGuild: S } = (0, O.ZP)(t),
        {
            avatarDecorationSrc: E,
            avatarSrc: x,
            eventHandlers: I
        } = (0, P.Z)({
            user: t.author,
            size: c.EFr.SIZE_32,
            guildId: null == b ? void 0 : b.id,
            animateOnHover: !0
        }),
        Z = n.type !== D.d4z.GUILD_ANNOUNCEMENT || null == b,
        T = (0, C.x)({
            channel: n,
            message: t,
            user: t.author,
            compact: !0,
            isRepliedMessage: !0
        }),
        L = (0, r.jsxs)('div', {
            className: k.usernameTagContainer,
            children: [
                (0, r.jsx)(j.Z, {
                    channel: n,
                    message: t,
                    hideGuildTag: !0,
                    hideSystemTag: !0,
                    className: k.username
                }),
                null != S &&
                    (0, r.jsx)(y.ZP, {
                        primaryGuild: S,
                        userId: t.author.id,
                        inline: !0,
                        disableGuildProfile: !0,
                        className: k.clanTag
                    })
            ]
        });
    return (
        (0, i.useEffect)(() => {
            null != b && w.Z.requestMember(b.id, t.author.id);
        }, [b, t.author.id]),
        (0, r.jsx)(
            c.tEY,
            U(M({}, l), {
                children: (0, r.jsxs)('div', {
                    onMouseLeave: I.onMouseLeave,
                    onMouseEnter: I.onMouseEnter,
                    className: k.messageContainer,
                    children: [
                        u && (0, r.jsx)('div', { className: k.unreadDot }),
                        (0, r.jsx)(c.Kqy, {
                            align: 'start',
                            style: {
                                width: 'fit-content',
                                marginTop: '4px'
                            },
                            children: Z
                                ? (0, r.jsx)(R.q, {
                                      'aria-label': 'User Avatar',
                                      src: x,
                                      size: c.EFr.SIZE_32,
                                      cornerIconUrl: null != b ? b.getIconURL(24) : void 0,
                                      cornerIconOffsetX: 4,
                                      cornerIconOffsetY: 3,
                                      avatarDecoration: E
                                  })
                                : (0, r.jsx)(R.E, {
                                      'aria-label': 'Guild Icon',
                                      src: b.getIconURL(32),
                                      size: c.EFr.SIZE_32,
                                      cornerIconUrl: t.author.getAvatarURL(b.id, 24),
                                      cornerIconOffsetX: 4,
                                      cornerIconOffsetY: 3
                                  })
                        }),
                        (0, r.jsxs)(c.Kqy, {
                            gap: 0,
                            style: { minWidth: 0 },
                            children: [
                                (0, r.jsxs)(c.Kqy, {
                                    direction: 'horizontal',
                                    gap: 4,
                                    style: {
                                        whiteSpace: 'nowrap',
                                        minWidth: 0,
                                        justifyContent: 'space-between'
                                    },
                                    children: [
                                        Z
                                            ? (0, r.jsxs)('div', {
                                                  className: k.usernameOuterContainer,
                                                  children: [
                                                      (0, r.jsx)('div', {
                                                          className: k.username,
                                                          style: { color: _ },
                                                          children: (0, r.jsx)(g.Z, { children: L })
                                                      }),
                                                      T
                                                  ]
                                              })
                                            : (0, r.jsx)(g.Z, {
                                                  children: (0, r.jsx)(c.X6q, {
                                                      variant: 'text-md/semibold',
                                                      style: { color: _ },
                                                      className: k.username,
                                                      children: b.name
                                                  })
                                              }),
                                        (0, r.jsxs)(c.Kqy, {
                                            direction: 'horizontal',
                                            gap: 4,
                                            align: 'center',
                                            style: { width: 'fit-content' },
                                            children: [
                                                (0, r.jsx)(A.Z, {
                                                    message: t,
                                                    channel: n,
                                                    isUnread: u
                                                }),
                                                (0, r.jsx)(z, { message: t })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(c.Kqy, {
                                    direction: 'horizontal',
                                    align: 'center',
                                    gap: 4,
                                    className: o()(k.channelName, {
                                        [k.unread]: u,
                                        [k.selected]: s
                                    }),
                                    children: [
                                        null !== h &&
                                            (0, r.jsx)(h, {
                                                size: 'xxs',
                                                className: k.inlineIcon
                                            }),
                                        (0, r.jsxs)(c.Text, {
                                            variant: 'text-sm/medium',
                                            lineClamp: 1,
                                            className: o()(k.channelName, {
                                                [k.unread]: u,
                                                [k.selected]: s
                                            }),
                                            children: [m, !Z && ' \xB7 '.concat(v)]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(W, {
                                    message: t,
                                    isUnread: u,
                                    isSelected: s,
                                    channel: n
                                }),
                                null != d &&
                                    (0, r.jsxs)(c.Kqy, {
                                        gap: 4,
                                        style: {
                                            minWidth: 0,
                                            marginTop: 4
                                        },
                                        children: [
                                            null == d
                                                ? void 0
                                                : d.slice(0, V(d.length)).map((e) =>
                                                      (0, r.jsx)(
                                                          F,
                                                          {
                                                              message: e,
                                                              channel: n,
                                                              isSelected: s
                                                          },
                                                          e.id
                                                      )
                                                  ),
                                            null != d && (null == d ? void 0 : d.length) > V(d.length) ? (0, r.jsx)(H, { overflowMessages: d.slice(V(d.length)) }) : null
                                        ]
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
    return 3 === e ? 3 : 2;
}
function H(e) {
    let { overflowMessages: t } = e;
    return (0, r.jsx)(c.Kqy, {
        direction: 'horizontal',
        gap: 8,
        children: (0, r.jsx)(c.Text, {
            variant: 'text-sm/normal',
            className: k.overflowText,
            children: L.intl.formatToPlainString(L.t.NzUuLC, { count: t.length })
        })
    });
}
function F(e) {
    let { message: t, channel: n, isSelected: i } = e,
        l = (0, a.e7)([Z.ZP], () => {
            let e = Z.ZP.getTrackedAckMessageId(n.id);
            return T.default.compare(t.id, e) > 0;
        });
    return (0, r.jsxs)(c.Kqy, {
        direction: 'horizontal',
        align: 'end',
        children: [
            (0, r.jsx)(j.Z, {
                hideGuildTag: !0,
                hideSystemTag: !0,
                compact: !0,
                channel: n,
                message: t,
                className: k.groupedMessageUsername
            }),
            (0, r.jsx)('div', {
                className: k.groupedMessageContent,
                children: (0, r.jsx)(W, {
                    message: t,
                    channel: n,
                    isSelected: i,
                    isUnread: l
                })
            })
        ]
    });
}
function z(e) {
    let { message: t } = e,
        n = (0, E.a3)(t.timestamp.getTime());
    return (0, r.jsx)(_.Z, {
        timestamp: t.timestamp,
        className: k.timestamp,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n
    });
}
function W(e) {
    let { message: t, isUnread: n, isSelected: l } = e,
        { previewContent: s, Icon: a } = (function (e) {
            let { message: t, isUnread: n, isSelected: l } = e,
                { content: s } = (0, S.Z)(t, {
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
                    a = (function (e) {
                        let t = e.embeds.some((e) => e.type === D.hBH.GIFV);
                        return e.attachments.length + +!!t;
                    })(t),
                    u = (0, m.Z)(t),
                    d = t.type === D.uaV.REPLY,
                    h = t.stickerItems.length > 0,
                    p = t.isPoll(),
                    f = t.type === D.uaV.POLL_RESULT,
                    g = t.hasFlag(D.iLy.IS_VOICE_MESSAGE),
                    y = null;
                1 === a ? (y = c.XBm) : a > 1 ? (y = c.Ka2) : u ? (y = b.Z) : p || f ? (y = c.QDj) : d ? (y = c.n$P) : h ? (y = c.SlE) : g && (y = c.gj8);
                let O = !0,
                    _ = null;
                if (e)
                    if (u) _ = L.intl.string(L.t['9ddYKi']);
                    else if (p) {
                        var C;
                        (O = !1), (_ = null == (C = t.poll) ? void 0 : C.question.text);
                    } else _ = f ? L.intl.string(L.t.sad2PD) : i ? L.intl.string(L.t.p0oZm5) : a > 1 ? L.intl.formatToPlainString(L.t.rtfTKi, { count: a }) : 1 === a ? L.intl.string(L.t.tCcq5u) : h ? L.intl.format(L.t.zY4v1N, { stickerName: t.stickerItems[0].name }) : g ? L.intl.string(L.t.slFYgo) : L.intl.string(L.t.sDqZHB);
                else
                    (O = !1),
                        (_ = (0, r.jsx)(v.ZP, {
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
                                [k.descriptionMessage]: O
                            }),
                            children: _
                        })),
                    {
                        previewContent: _,
                        Icon: y
                    }
                );
            }, [t, s, n, l]);
        })({
            message: t,
            isUnread: n,
            isSelected: l
        });
    return (0, r.jsxs)(c.Kqy, {
        direction: 'horizontal',
        gap: 4,
        align: 'center',
        children: [
            null != a &&
                (0, r.jsx)(a, {
                    size: 'xxs',
                    className: k.inlineIcon
                }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                lineClamp: 1,
                className: k.message,
                children: s
            })
        ]
    });
}

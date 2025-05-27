n.d(t, { B: () => k });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(114858),
    a = n(442837),
    c = n(481060),
    u = n(904245),
    d = n(45114),
    h = n(933557),
    p = n(471445),
    f = n(111028),
    g = n(978003),
    m = n(245216),
    b = n(172751),
    y = n(739566),
    O = n(930282),
    v = n(318713),
    _ = n(47930),
    C = n(123145),
    j = n(25015),
    S = n(178480),
    E = n(703656),
    x = n(518950),
    P = n(592125),
    I = n(720202),
    w = n(430824),
    N = n(306680),
    Z = n(709054),
    T = n(987889),
    A = n(586694),
    R = n(981631),
    D = n(388032),
    L = n(539499);
function k(e) {
    let { message: t, goToSidebar: n, groupedMessages: i } = e,
        { params: l } = (0, s.$B)(),
        h = (0, a.e7)([P.Z], () => P.Z.getChannel(t.channel_id)),
        p = (0, a.e7)(
            [N.ZP],
            () => {
                if (null == h) return !1;
                let e = N.ZP.getTrackedAckMessageId(null == h ? void 0 : h.id);
                return Z.default.compare(t.id, e) > 0;
            },
            [h, t.id]
        );
    return null == t || null == h
        ? null
        : (0, r.jsx)(c.P3F, {
              className: o()(L.messageClickableContainer, { [L.selected]: t.id === l.messageId }),
              onClick: () => {
                  u.Z.trackJump(h.id, t.id, 'Notifications Inbox'), p && d.In(t.channel_id, !0, void 0, t.id);
                  let e = n ? R.Z5c.NOTIFICATIONS_INBOX(h.id, t.id) : R.Z5c.CHANNEL(h.guild_id, h.id, t.id);
                  (0, E.uL)(e);
              },
              children: (0, r.jsx)(M, {
                  message: t,
                  channel: h,
                  isSelected: t.id === l.messageId,
                  groupedMessages: i,
                  isUnread: p
              })
          });
}
function M(e) {
    var t, n;
    let { message: l, channel: s, focusProps: u, isSelected: d, isUnread: g, groupedMessages: m } = e,
        O = (0, p.KS)(s, null),
        v = (0, h.ZP)(s, !1),
        j = (0, a.e7)([w.Z], () => w.Z.getGuild(s.getGuildId())),
        { nick: S, colorString: E, primaryGuild: P } = (0, y.ZP)(l),
        {
            avatarDecorationSrc: N,
            avatarSrc: Z,
            eventHandlers: D
        } = (0, x.Z)({
            user: l.author,
            size: c.EFr.SIZE_32,
            guildId: null == j ? void 0 : j.id,
            animateOnHover: !0
        }),
        k = s.type !== R.d4z.GUILD_ANNOUNCEMENT || null == j,
        M = (0, _.x)({
            channel: s,
            message: l,
            user: l.author,
            compact: !0,
            isRepliedMessage: !0
        }),
        F = (0, r.jsxs)('div', {
            className: L.usernameTagContainer,
            children: [
                (0, r.jsx)(C.Z, {
                    channel: s,
                    message: l,
                    hideGuildTag: !0,
                    hideSystemTag: !0,
                    className: L.username
                }),
                null != P &&
                    (0, r.jsx)(b.ZP, {
                        primaryGuild: P,
                        userId: l.author.id,
                        inline: !0,
                        disableGuildProfile: !0,
                        className: L.clanTag
                    })
            ]
        });
    return (
        (0, i.useEffect)(() => {
            null != j && I.Z.requestMember(j.id, l.author.id);
        }, [j, l.author.id]),
        (0, r.jsx)(
            c.tEY,
            ((t = (function (e) {
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
            })({}, u)),
            (n = n =
                {
                    children: (0, r.jsxs)('div', {
                        onMouseLeave: D.onMouseLeave,
                        onMouseEnter: D.onMouseEnter,
                        className: L.messageContainer,
                        children: [
                            g && (0, r.jsx)('div', { className: L.unreadDot }),
                            (0, r.jsx)(c.Kqy, {
                                align: 'start',
                                style: {
                                    width: 'fit-content',
                                    marginTop: '4px'
                                },
                                children: k
                                    ? (0, r.jsx)(A.q, {
                                          'aria-label': 'User Avatar',
                                          src: Z,
                                          size: c.EFr.SIZE_32,
                                          cornerIconUrl: null != j ? j.getIconURL(24) : void 0,
                                          cornerIconOffsetX: 4,
                                          cornerIconOffsetY: 3,
                                          avatarDecoration: N
                                      })
                                    : (0, r.jsx)(A.E, {
                                          'aria-label': 'Guild Icon',
                                          src: j.getIconURL(32),
                                          size: c.EFr.SIZE_32,
                                          cornerIconUrl: l.author.getAvatarURL(j.id, 24),
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
                                            k
                                                ? (0, r.jsxs)('div', {
                                                      className: L.usernameOuterContainer,
                                                      children: [
                                                          (0, r.jsx)('div', {
                                                              className: L.username,
                                                              style: { color: E },
                                                              children: (0, r.jsx)(f.Z, { children: F })
                                                          }),
                                                          M
                                                      ]
                                                  })
                                                : (0, r.jsx)(f.Z, {
                                                      children: (0, r.jsx)(c.X6q, {
                                                          variant: 'text-md/semibold',
                                                          style: { color: E },
                                                          className: L.username,
                                                          children: j.name
                                                      })
                                                  }),
                                            (0, r.jsxs)(c.Kqy, {
                                                direction: 'horizontal',
                                                gap: 4,
                                                align: 'center',
                                                style: { width: 'fit-content' },
                                                children: [
                                                    (0, r.jsx)(T.Z, {
                                                        message: l,
                                                        channel: s,
                                                        isUnread: g
                                                    }),
                                                    (0, r.jsx)(V, { message: l })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(c.Kqy, {
                                        direction: 'horizontal',
                                        align: 'center',
                                        gap: 4,
                                        className: o()(L.channelName, {
                                            [L.unread]: g,
                                            [L.selected]: d
                                        }),
                                        children: [
                                            null !== O &&
                                                (0, r.jsx)(O, {
                                                    size: 'xxs',
                                                    className: L.inlineIcon
                                                }),
                                            (0, r.jsxs)(c.Text, {
                                                variant: 'text-sm/medium',
                                                lineClamp: 1,
                                                className: o()(L.channelName, {
                                                    [L.unread]: g,
                                                    [L.selected]: d
                                                }),
                                                children: [v, !k && ' \xB7 '.concat(S)]
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)(H, {
                                        message: l,
                                        isUnread: g,
                                        isSelected: d,
                                        channel: s
                                    }),
                                    null != m &&
                                        (0, r.jsxs)(c.Kqy, {
                                            gap: 4,
                                            style: {
                                                minWidth: 0,
                                                marginTop: 4
                                            },
                                            children: [
                                                null == m
                                                    ? void 0
                                                    : m.slice(0, U(m.length)).map((e) =>
                                                          (0, r.jsx)(
                                                              B,
                                                              {
                                                                  message: e,
                                                                  channel: s,
                                                                  isSelected: d
                                                              },
                                                              e.id
                                                          )
                                                      ),
                                                null != m && (null == m ? void 0 : m.length) > U(m.length) ? (0, r.jsx)(G, { overflowMessages: m.slice(U(m.length)) }) : null
                                            ]
                                        })
                                ]
                            })
                        ]
                    })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        )
    );
}
function U(e) {
    return 3 === e ? 3 : 2;
}
function G(e) {
    let { overflowMessages: t } = e;
    return (0, r.jsx)(c.Kqy, {
        direction: 'horizontal',
        gap: 8,
        children: (0, r.jsx)(c.Text, {
            variant: 'text-sm/normal',
            className: L.overflowText,
            children: D.intl.formatToPlainString(D.t.NzUuLC, { count: t.length })
        })
    });
}
function B(e) {
    let { message: t, channel: n, isSelected: i } = e,
        l = (0, a.e7)([N.ZP], () => {
            let e = N.ZP.getTrackedAckMessageId(n.id);
            return Z.default.compare(t.id, e) > 0;
        });
    return (0, r.jsxs)(c.Kqy, {
        direction: 'horizontal',
        align: 'end',
        children: [
            (0, r.jsx)(C.Z, {
                hideGuildTag: !0,
                hideSystemTag: !0,
                compact: !0,
                channel: n,
                message: t,
                className: L.groupedMessageUsername
            }),
            (0, r.jsx)('div', {
                className: L.groupedMessageContent,
                children: (0, r.jsx)(H, {
                    message: t,
                    channel: n,
                    isSelected: i,
                    isUnread: l
                })
            })
        ]
    });
}
function V(e) {
    let { message: t } = e,
        n = (0, S.a3)(t.timestamp.getTime());
    return (0, r.jsx)(v.Z, {
        timestamp: t.timestamp,
        className: L.timestamp,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n
    });
}
function H(e) {
    let { message: t, isUnread: n, isSelected: l } = e,
        { previewContent: s, Icon: a } = (function (e) {
            let { message: t, isUnread: n, isSelected: l } = e,
                { content: s } = (0, j.Z)(t, {
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
                    i = t.embeds.some((e) => e.type === R.hBH.GIFV),
                    a = (function (e) {
                        let t = e.embeds.some((e) => e.type === R.hBH.GIFV);
                        return e.attachments.length + +!!t;
                    })(t),
                    u = (0, g.Z)(t),
                    d = t.type === R.uaV.REPLY,
                    h = t.stickerItems.length > 0,
                    p = t.isPoll(),
                    f = t.type === R.uaV.POLL_RESULT,
                    b = t.hasFlag(R.iLy.IS_VOICE_MESSAGE),
                    y = null;
                1 === a ? (y = c.XBm) : a > 1 ? (y = c.Ka2) : u ? (y = m.Z) : p || f ? (y = c.QDj) : d ? (y = c.n$P) : h ? (y = c.SlE) : b && (y = c.gj8);
                let v = !0,
                    _ = null;
                if (e)
                    if (u) _ = D.intl.string(D.t['9ddYKi']);
                    else if (p) {
                        var C;
                        (v = !1), (_ = null == (C = t.poll) ? void 0 : C.question.text);
                    } else _ = f ? D.intl.string(D.t.sad2PD) : i ? D.intl.string(D.t.p0oZm5) : a > 1 ? D.intl.formatToPlainString(D.t.rtfTKi, { count: a }) : 1 === a ? D.intl.string(D.t.tCcq5u) : h ? D.intl.format(D.t.zY4v1N, { stickerName: t.stickerItems[0].name }) : b ? D.intl.string(D.t.slFYgo) : D.intl.string(D.t.sDqZHB);
                else
                    (v = !1),
                        (_ = (0, r.jsx)(O.ZP, {
                            content: s,
                            message: t,
                            compact: !1,
                            className: o()(L.message, {
                                [L.unread]: n,
                                [L.selected]: l
                            })
                        }));
                return (
                    e &&
                        (_ = (0, r.jsx)('div', {
                            className: o()(L.message, {
                                [L.unread]: n,
                                [L.selected]: l,
                                [L.descriptionMessage]: v
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
                    className: L.inlineIcon
                }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                lineClamp: 1,
                className: L.message,
                children: s
            })
        ]
    });
}

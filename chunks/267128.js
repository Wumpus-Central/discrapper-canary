r.d(n, {
    Z: function () {
        return Z;
    },
    f: function () {
        return G;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(913527),
    c = r.n(u),
    d = r(481060),
    f = r(100527),
    p = r(906732),
    h = r(407477),
    _ = r(978003),
    m = r(39154),
    g = r(245216),
    E = r(79390),
    v = r(869765),
    y = r(403132),
    b = r(378233),
    I = r(768581),
    T = r(55935),
    S = r(823379),
    A = r(453687),
    C = r(930282),
    N = r(123145),
    R = r(223021),
    O = r(217702),
    D = r(981631),
    x = r(388032),
    L = r(507304);
function w(e) {
    let { width: n = 12, height: r = 8, color: i = 'currentColor', className: o, foreground: s } = e;
    return (0, a.jsx)('svg', {
        className: o,
        width: n,
        height: r,
        viewBox: '0 0 12 8',
        children: (0, a.jsx)('path', {
            d: 'M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z',
            className: s,
            fill: i
        })
    });
}
function P(e) {
    let { width: n = 18, height: r = 18, className: i, foreground: o } = e;
    return (0, a.jsx)('svg', {
        className: i,
        width: n,
        height: r,
        viewBox: '0 0 18 18',
        children: (0, a.jsx)('path', {
            fill: '#3ba55c',
            d: 'M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0',
            className: o
        })
    });
}
function M(e, n, r, i, o) {
    return (0, a.jsx)('img', {
        alt: '',
        src:
            (null == n ? void 0 : n.guildMemberAvatar) != null && null != r
                ? (0, I.JM)({
                      guildId: r,
                      userId: e.id,
                      avatar: n.guildMemberAvatar
                  })
                : e.getAvatarURL(r, 16),
        onClick: i,
        onContextMenu: o,
        className: l()({
            [L.replyAvatar]: !0,
            [L.clickable]: null != i
        })
    });
}
function k(e, n, r) {
    let { referencedMessage: i, channel: o, compact: s, isReplyAuthorBlocked: l, repliedAuthor: u, showAvatarPopout: c, onClickAvatar: h, onContextMenu: _, onPopoutRequestClose: m } = e,
        { analyticsLocations: g } = (0, p.ZP)(f.Z.AVATAR);
    if (s || i.state !== v.Y.LOADED || l)
        return r === D.uaV.CONTEXT_MENU_COMMAND
            ? (0, a.jsx)('div', {
                  className: L.replyChatIconContainer,
                  children: (0, a.jsx)(d.ChatIcon, { size: 'xs' })
              })
            : (0, a.jsx)('div', {
                  className: L.replyBadge,
                  children: (0, a.jsx)(w, { className: L.replyIcon })
              });
    if (i.message.type === D.uaV.USER_JOIN || i.message.type === D.uaV.ROLE_SUBSCRIPTION_PURCHASE || i.message.type === D.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || i.message.type === D.uaV.GUILD_GAMING_STATS_PROMPT) return (0, a.jsx)(P, { className: L.userJoinSystemMessageIcon });
    if (i.message.type === D.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
        return (0, a.jsx)(d.TicketIcon, {
            size: 'md',
            color: 'currentColor',
            className: L.ticketIcon
        });
    if (i.message.type === D.uaV.POLL_RESULT)
        return (0, a.jsx)(d.PollsIcon, {
            className: L.repliedTextContentLeadingIcon,
            width: O.WW,
            height: O.WW,
            size: 'custom'
        });
    let E = () => M(i.message.author, u, o.guild_id, h, _);
    return null != n && null != c
        ? (0, a.jsx)(p.Gt, {
              value: g,
              children: (0, a.jsx)(d.Popout, {
                  renderPopout: n,
                  shouldShow: c,
                  position: 'right',
                  onRequestClose: m,
                  children: E
              })
          })
        : (0, a.jsx)(p.Gt, {
              value: g,
              children: E()
          });
}
function U(e, n) {
    let { baseMessage: r, channel: i, referencedMessage: o, showUsernamePopout: s, onClickUsername: l, onContextMenu: u, onPopoutRequestClose: c } = e,
        d = (null == o ? void 0 : o.state) === v.Y.LOADED ? o.message : void 0;
    return null == d || d.type === D.uaV.USER_JOIN || d.type === D.uaV.ROLE_SUBSCRIPTION_PURCHASE || d.type === D.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || d.type === D.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || d.type === D.uaV.GUILD_GAMING_STATS_PROMPT || d.type === D.uaV.POLL_RESULT
        ? null
        : (0, a.jsx)(N.Z, {
              message: d,
              channel: i,
              compact: !0,
              withMentionPrefix: (0, y.Z)(r, d),
              showPopout: s,
              renderPopout: n,
              onClick: l,
              onContextMenu: u,
              onPopoutRequestClose: c,
              isRepliedMessage: !0
          });
}
function B(e, n, r) {
    let { content: i, referencedMessage: o, isReplyAuthorBlocked: s, isReplyAuthorIgnored: u, onClickReply: c } = e,
        f = o.state !== v.Y.DELETED ? c : void 0;
    switch (o.state) {
        case v.Y.LOADED: {
            let {
                contentPlaceholder: e,
                renderedContent: c,
                trailingIcon: p,
                leadingIcon: h
            } = G(o.message, i, s, u, L.repliedTextContent, {
                trailingIconClass: L.repliedTextContentTrailingIcon,
                leadingIconClass: L.repliedTextContentLeadingIcon,
                iconSize: O.WW
            });
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    h,
                    (0, a.jsx)(d.Clickable, {
                        className: l()(L.repliedTextPreview, L.clickable, { [L.repliedMessageClickableSpineHovered]: n }),
                        onClick: f,
                        onMouseEnter: r,
                        onMouseLeave: r,
                        children: (0, a.jsx)(d.BlockInteractions, {
                            children:
                                null != c
                                    ? c
                                    : (0, a.jsx)('span', {
                                          className: L.repliedTextPlaceholder,
                                          children: e
                                      })
                        })
                    }),
                    p
                ]
            });
        }
        case v.Y.NOT_LOADED:
            return (0, a.jsx)(d.Clickable, {
                className: l()(L.repliedTextPreview, L.clickable),
                onClick: f,
                children: (0, a.jsx)('span', {
                    className: L.repliedTextPlaceholder,
                    children: x.intl.string(x.t['1i+hMj'])
                })
            });
        case v.Y.DELETED:
            return (0, a.jsx)('div', {
                className: L.repliedTextPreview,
                children: (0, a.jsx)('span', {
                    className: L.repliedTextPlaceholder,
                    children: x.intl.string(x.t.mE3KJC)
                })
            });
        default:
            (0, S.vE)(o);
    }
}
function G(e, n, r, i, o, s) {
    let l, u, c, f;
    let p = (0, m.Z)(e),
        { trailingIconClass: h, leadingIconClass: v, iconSize: y } = s,
        I = null == n || '' === n || (Array.isArray(n) && 0 === n.length),
        T = (0, b.cv)(p).length > 0,
        S = null != p.interaction,
        A = p.hasFlag(D.iLy.IS_VOICE_MESSAGE),
        N = p.isPoll(),
        R = p.type === D.uaV.POLL_RESULT;
    if (
        ((0, _.Z)(e) &&
            (f = (0, a.jsx)(g.Z, {
                size: 'custom',
                className: v,
                width: y,
                height: y
            })),
        r)
    )
        l = x.intl.string(x.t.XAkOo6);
    else if (i) l = x.intl.string(x.t.G7p6v7);
    else if (p.type === D.uaV.CHANNEL_PINNED_MESSAGE) l = x.intl.string(x.t.sCfDDg);
    else if (I) {
        if (N) {
            var O, L;
            u = null == p ? void 0 : null === (L = p.poll) || void 0 === L ? void 0 : null === (O = L.question) || void 0 === O ? void 0 : O.text;
        } else
            R
                ? (l = (0, E.N4)(p))
                : T
                  ? (l = x.intl.string(x.t.kHdYCQ))
                  : S
                    ? (l = x.intl.string(x.t['E+6SSU']))
                    : A
                      ? (l = x.intl.string(x.t['XC3A5+']))
                      : ((l = x.intl.string(x.t['6hGo0d'])),
                        (c = (0, a.jsx)(d.ImageIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            className: h,
                            width: y,
                            height: y
                        })));
    } else
        u = (0, a.jsx)(C.ZP, {
            message: p,
            content: n,
            className: o
        });
    return (
        T
            ? (c = (0, a.jsx)(d.StickerSmallIcon, {
                  size: 'custom',
                  color: 'currentColor',
                  className: h,
                  width: y,
                  height: y
              }))
            : S
              ? (c = (0, a.jsx)(d.SlashBoxIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: h,
                    width: y,
                    height: y
                }))
              : A
                ? (c = (0, a.jsx)(d.MicrophoneIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      className: h,
                      width: (19 / 24) * y,
                      height: y
                  }))
                : (p.attachments.length > 0 || p.embeds.length > 0) &&
                  !R &&
                  (c = (0, a.jsx)(d.ImageIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      className: h,
                      width: y,
                      height: y
                  })),
        {
            contentPlaceholder: l,
            renderedContent: u,
            trailingIcon: c,
            leadingIcon: f
        }
    );
}
function Z(e) {
    let n;
    let { repliedAuthor: r, baseAuthor: i, baseMessage: s, referencedMessage: u, renderPopout: f, isReplySpineClickable: p, showReplySpine: _ } = e,
        { canShowReactionsOnMessageHover: m } = h.ZP.useExperiment({ location: 'RepliedMessage' }, { autoTrackExposure: !1 }),
        [g, E] = o.useState(!1),
        y = o.useMemo(() => (null != f && u.state === v.Y.LOADED ? (e) => f(e, u.message) : void 0), [u, f]),
        b = o.useCallback(() => E((e) => !e), []),
        I = k(e, y, s.type),
        S = U(e, y),
        C = B(e, g, b),
        N = o.useMemo(() => (e.compact ? (0, R.Z)((0, T.vc)(c()(), 'LT')) : null), [e.compact]);
    null != r &&
        null != i &&
        (n = x.intl.formatToPlainString(x.t.RhbQ2N, {
            author: null == i ? void 0 : i.nick,
            repliedAuthor: null == r ? void 0 : r.nick
        }));
    let O = s.type === D.uaV.CONTEXT_MENU_COMMAND;
    return (0, a.jsxs)('div', {
        id: (0, A.Gq)(s),
        className: l()(L.repliedMessage, N, O ? L.contextCommandMessage : { [L.messageSpine]: !m || (!p && _) }),
        'aria-label': n,
        children: [
            m &&
                p &&
                _ &&
                (0, a.jsx)(d.Clickable, {
                    tag: 'div',
                    'aria-label': x.intl.string(x.t.dpjpOj),
                    className: l()(L.repliedMessageClickableSpine, { [L.repliedMessageContentHovered]: g }),
                    onClick: e.onClickReply,
                    onMouseEnter: b,
                    onMouseLeave: b
                }),
            I,
            S,
            C
        ]
    });
}

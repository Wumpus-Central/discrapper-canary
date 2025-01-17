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
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(913527),
    c = r.n(u),
    d = r(481060),
    f = r(100527),
    _ = r(906732),
    h = r(407477),
    p = r(978003),
    m = r(39154),
    g = r(245216),
    E = r(79390),
    v = r(869765),
    I = r(403132),
    T = r(378233),
    b = r(768581),
    y = r(55935),
    S = r(823379),
    A = r(453687),
    N = r(930282),
    C = r(123145),
    R = r(223021),
    O = r(217702),
    D = r(981631),
    L = r(388032),
    x = r(507304);
function w(e) {
    let { width: n = 12, height: r = 8, color: i = 'currentColor', className: s, foreground: o } = e;
    return (0, a.jsx)('svg', {
        className: s,
        width: n,
        height: r,
        viewBox: '0 0 12 8',
        children: (0, a.jsx)('path', {
            d: 'M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z',
            className: o,
            fill: i
        })
    });
}
function P(e) {
    let { width: n = 18, height: r = 18, className: i, foreground: s } = e;
    return (0, a.jsx)('svg', {
        className: i,
        width: n,
        height: r,
        viewBox: '0 0 18 18',
        children: (0, a.jsx)('path', {
            fill: '#3ba55c',
            d: 'M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0',
            className: s
        })
    });
}
function M(e, n, r, i, s) {
    return (0, a.jsx)('img', {
        alt: '',
        src:
            (null == n ? void 0 : n.guildMemberAvatar) != null && null != r
                ? (0, b.JM)({
                      guildId: r,
                      userId: e.id,
                      avatar: n.guildMemberAvatar
                  })
                : e.getAvatarURL(r, 16),
        onClick: i,
        onContextMenu: s,
        className: l()({
            [x.replyAvatar]: !0,
            [x.clickable]: null != i
        })
    });
}
function k(e, n, r) {
    let { referencedMessage: i, channel: s, compact: o, isReplyAuthorBlocked: l, repliedAuthor: u, showAvatarPopout: c, onClickAvatar: h, onContextMenu: p, onPopoutRequestClose: m } = e,
        { analyticsLocations: g } = (0, _.ZP)(f.Z.AVATAR);
    if (o || i.state !== v.Y.LOADED || l)
        return r === D.uaV.CONTEXT_MENU_COMMAND
            ? (0, a.jsx)('div', {
                  className: x.replyChatIconContainer,
                  children: (0, a.jsx)(d.ChatIcon, { size: 'xs' })
              })
            : (0, a.jsx)('div', {
                  className: x.replyBadge,
                  children: (0, a.jsx)(w, { className: x.replyIcon })
              });
    if (i.message.type === D.uaV.USER_JOIN || i.message.type === D.uaV.ROLE_SUBSCRIPTION_PURCHASE || i.message.type === D.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || i.message.type === D.uaV.GUILD_GAMING_STATS_PROMPT) return (0, a.jsx)(P, { className: x.userJoinSystemMessageIcon });
    if (i.message.type === D.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
        return (0, a.jsx)(d.TicketIcon, {
            size: 'md',
            color: 'currentColor',
            className: x.ticketIcon
        });
    if (i.message.type === D.uaV.POLL_RESULT)
        return (0, a.jsx)(d.PollsIcon, {
            className: x.repliedTextContentLeadingIcon,
            width: O.WW,
            height: O.WW,
            size: 'custom'
        });
    let E = () => M(i.message.author, u, s.guild_id, h, p);
    return null != n && null != c
        ? (0, a.jsx)(_.Gt, {
              value: g,
              children: (0, a.jsx)(d.Popout, {
                  renderPopout: n,
                  shouldShow: c,
                  position: 'right',
                  onRequestClose: m,
                  children: E
              })
          })
        : (0, a.jsx)(_.Gt, {
              value: g,
              children: E()
          });
}
function U(e, n) {
    let { baseMessage: r, channel: i, referencedMessage: s, showUsernamePopout: o, onClickUsername: l, onContextMenu: u, onPopoutRequestClose: c } = e,
        d = (null == s ? void 0 : s.state) === v.Y.LOADED ? s.message : void 0;
    return null == d || d.type === D.uaV.USER_JOIN || d.type === D.uaV.ROLE_SUBSCRIPTION_PURCHASE || d.type === D.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || d.type === D.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || d.type === D.uaV.GUILD_GAMING_STATS_PROMPT || d.type === D.uaV.POLL_RESULT
        ? null
        : (0, a.jsx)(C.Z, {
              message: d,
              channel: i,
              compact: !0,
              withMentionPrefix: (0, I.Z)(r, d),
              showPopout: o,
              renderPopout: n,
              onClick: l,
              onContextMenu: u,
              onPopoutRequestClose: c,
              isRepliedMessage: !0
          });
}
function B(e, n, r) {
    let { content: i, referencedMessage: s, isReplyAuthorBlocked: o, isReplyAuthorIgnored: u, onClickReply: c } = e,
        f = s.state !== v.Y.DELETED ? c : void 0;
    switch (s.state) {
        case v.Y.LOADED: {
            let {
                contentPlaceholder: e,
                renderedContent: c,
                trailingIcon: _,
                leadingIcon: h
            } = G(s.message, i, o, u, x.repliedTextContent, {
                trailingIconClass: x.repliedTextContentTrailingIcon,
                leadingIconClass: x.repliedTextContentLeadingIcon,
                iconSize: O.WW
            });
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    h,
                    (0, a.jsx)(d.Clickable, {
                        className: l()(x.repliedTextPreview, x.clickable, { [x.repliedMessageClickableSpineHovered]: n }),
                        onClick: f,
                        onMouseEnter: r,
                        onMouseLeave: r,
                        children: (0, a.jsx)(d.BlockInteractions, {
                            children:
                                null != c
                                    ? c
                                    : (0, a.jsx)('span', {
                                          className: x.repliedTextPlaceholder,
                                          children: e
                                      })
                        })
                    }),
                    _
                ]
            });
        }
        case v.Y.NOT_LOADED:
            return (0, a.jsx)(d.Clickable, {
                className: l()(x.repliedTextPreview, x.clickable),
                onClick: f,
                children: (0, a.jsx)('span', {
                    className: x.repliedTextPlaceholder,
                    children: L.intl.string(L.t['1i+hMj'])
                })
            });
        case v.Y.DELETED:
            return (0, a.jsx)('div', {
                className: x.repliedTextPreview,
                children: (0, a.jsx)('span', {
                    className: x.repliedTextPlaceholder,
                    children: L.intl.string(L.t.mE3KJC)
                })
            });
        default:
            (0, S.vE)(s);
    }
}
function G(e, n, r, i, s, o) {
    let l, u, c, f;
    let _ = (0, m.Z)(e),
        { trailingIconClass: h, leadingIconClass: v, iconSize: I } = o,
        b = null == n || '' === n || (Array.isArray(n) && 0 === n.length),
        y = (0, T.cv)(_).length > 0,
        S = null != _.interaction,
        A = _.hasFlag(D.iLy.IS_VOICE_MESSAGE),
        C = _.isPoll(),
        R = _.type === D.uaV.POLL_RESULT;
    if (
        ((0, p.Z)(e) &&
            (f = (0, a.jsx)(g.Z, {
                size: 'custom',
                className: v,
                width: I,
                height: I
            })),
        r)
    )
        l = L.intl.string(L.t.XAkOo6);
    else if (i) l = L.intl.string(L.t.G7p6v7);
    else if (_.type === D.uaV.CHANNEL_PINNED_MESSAGE) l = L.intl.string(L.t.sCfDDg);
    else if (b) {
        if (C) {
            var O, x;
            u = null == _ ? void 0 : null === (x = _.poll) || void 0 === x ? void 0 : null === (O = x.question) || void 0 === O ? void 0 : O.text;
        } else
            R
                ? (l = (0, E.N4)(_))
                : y
                  ? (l = L.intl.string(L.t.kHdYCQ))
                  : S
                    ? (l = L.intl.string(L.t['E+6SSU']))
                    : A
                      ? (l = L.intl.string(L.t['XC3A5+']))
                      : ((l = L.intl.string(L.t['6hGo0d'])),
                        (c = (0, a.jsx)(d.ImageIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            className: h,
                            width: I,
                            height: I
                        })));
    } else
        u = (0, a.jsx)(N.ZP, {
            message: _,
            content: n,
            className: s
        });
    return (
        y
            ? (c = (0, a.jsx)(d.StickerSmallIcon, {
                  size: 'custom',
                  color: 'currentColor',
                  className: h,
                  width: I,
                  height: I
              }))
            : S
              ? (c = (0, a.jsx)(d.SlashBoxIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: h,
                    width: I,
                    height: I
                }))
              : A
                ? (c = (0, a.jsx)(d.MicrophoneIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      className: h,
                      width: (19 / 24) * I,
                      height: I
                  }))
                : (_.attachments.length > 0 || _.embeds.length > 0) &&
                  !R &&
                  (c = (0, a.jsx)(d.ImageIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      className: h,
                      width: I,
                      height: I
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
    let { repliedAuthor: r, baseAuthor: i, baseMessage: o, referencedMessage: u, renderPopout: f, isReplySpineClickable: _, showReplySpine: p } = e,
        { canShowReactionsOnMessageHover: m } = h.ZP.useExperiment({ location: 'RepliedMessage' }, { autoTrackExposure: !1 }),
        [g, E] = s.useState(!1),
        I = s.useMemo(() => (null != f && u.state === v.Y.LOADED ? (e) => f(e, u.message) : void 0), [u, f]),
        T = s.useCallback(() => E((e) => !e), []),
        b = k(e, I, o.type),
        S = U(e, I),
        N = B(e, g, T),
        C = s.useMemo(() => (e.compact ? (0, R.Z)((0, y.vc)(c()(), 'LT')) : null), [e.compact]);
    null != r &&
        null != i &&
        (n = L.intl.formatToPlainString(L.t.RhbQ2N, {
            author: null == i ? void 0 : i.nick,
            repliedAuthor: null == r ? void 0 : r.nick
        }));
    let O = o.type === D.uaV.CONTEXT_MENU_COMMAND;
    return (0, a.jsxs)('div', {
        id: (0, A.Gq)(o),
        className: l()(x.repliedMessage, C, O ? x.contextCommandMessage : { [x.messageSpine]: !m || (!_ && p) }),
        'aria-label': n,
        children: [
            m &&
                _ &&
                p &&
                (0, a.jsx)(d.Clickable, {
                    tag: 'div',
                    'aria-label': L.intl.string(L.t.dpjpOj),
                    className: l()(x.repliedMessageClickableSpine, { [x.repliedMessageContentHovered]: g }),
                    onClick: e.onClickReply,
                    onMouseEnter: T,
                    onMouseLeave: T
                }),
            b,
            S,
            N
        ]
    });
}

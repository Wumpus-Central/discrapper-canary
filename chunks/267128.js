n.d(t, {
    Z: () => G,
    f: () => U
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(913527),
    l = n.n(o),
    u = n(481060),
    c = n(100527),
    d = n(906732),
    f = n(407477),
    _ = n(978003),
    p = n(39154),
    h = n(245216),
    m = n(79390),
    g = n(869765),
    E = n(403132),
    v = n(378233),
    y = n(768581),
    I = n(55935),
    b = n(823379),
    T = n(453687),
    S = n(930282),
    A = n(123145),
    N = n(223021),
    C = n(217702),
    R = n(981631),
    O = n(388032),
    D = n(507304);
function x(e) {
    let { width: t = 12, height: n = 8, color: r = 'currentColor', className: a, foreground: s } = e;
    return (0, i.jsx)('svg', {
        className: a,
        width: t,
        height: n,
        viewBox: '0 0 12 8',
        children: (0, i.jsx)('path', {
            d: 'M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z',
            className: s,
            fill: r
        })
    });
}
function L(e) {
    let { width: t = 18, height: n = 18, className: r, foreground: a } = e;
    return (0, i.jsx)('svg', {
        className: r,
        width: t,
        height: n,
        viewBox: '0 0 18 18',
        children: (0, i.jsx)('path', {
            fill: '#3ba55c',
            d: 'M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0',
            className: a
        })
    });
}
function P(e, t, n, r, a) {
    return (0, i.jsx)('img', {
        alt: '',
        src:
            (null == t ? void 0 : t.guildMemberAvatar) != null && null != n
                ? (0, y.JM)({
                      guildId: n,
                      userId: e.id,
                      avatar: t.guildMemberAvatar
                  })
                : e.getAvatarURL(n, 16),
        onClick: r,
        onContextMenu: a,
        className: s()({
            [D.replyAvatar]: !0,
            [D.clickable]: null != r
        })
    });
}
function w(e, t, n) {
    let { referencedMessage: r, channel: a, compact: s, isReplyAuthorBlocked: o, repliedAuthor: l, showAvatarPopout: f, onClickAvatar: _, onContextMenu: p, onPopoutRequestClose: h } = e,
        { analyticsLocations: m } = (0, d.ZP)(c.Z.AVATAR);
    if (s || r.state !== g.Y.LOADED || o)
        return n === R.uaV.CONTEXT_MENU_COMMAND
            ? (0, i.jsx)('div', {
                  className: D.replyChatIconContainer,
                  children: (0, i.jsx)(u.kBi, { size: 'xs' })
              })
            : (0, i.jsx)('div', {
                  className: D.replyBadge,
                  children: (0, i.jsx)(x, { className: D.replyIcon })
              });
    if (r.message.type === R.uaV.USER_JOIN || r.message.type === R.uaV.ROLE_SUBSCRIPTION_PURCHASE || r.message.type === R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || r.message.type === R.uaV.GUILD_GAMING_STATS_PROMPT) return (0, i.jsx)(L, { className: D.userJoinSystemMessageIcon });
    if (r.message.type === R.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
        return (0, i.jsx)(u.Prq, {
            size: 'md',
            color: 'currentColor',
            className: D.ticketIcon
        });
    if (r.message.type === R.uaV.POLL_RESULT)
        return (0, i.jsx)(u.QDj, {
            className: D.repliedTextContentLeadingIcon,
            width: C.WW,
            height: C.WW,
            size: 'custom'
        });
    let E = () => P(r.message.author, l, a.guild_id, _, p);
    return null != t && null != f
        ? (0, i.jsx)(d.Gt, {
              value: m,
              children: (0, i.jsx)(u.yRy, {
                  renderPopout: t,
                  shouldShow: f,
                  position: 'right',
                  onRequestClose: h,
                  children: E
              })
          })
        : (0, i.jsx)(d.Gt, {
              value: m,
              children: E()
          });
}
function M(e, t) {
    let { baseMessage: n, channel: r, referencedMessage: a, showUsernamePopout: s, onClickUsername: o, onContextMenu: l, onPopoutRequestClose: u } = e,
        c = (null == a ? void 0 : a.state) === g.Y.LOADED ? a.message : void 0;
    return null == c || c.type === R.uaV.USER_JOIN || c.type === R.uaV.ROLE_SUBSCRIPTION_PURCHASE || c.type === R.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || c.type === R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || c.type === R.uaV.GUILD_GAMING_STATS_PROMPT || c.type === R.uaV.POLL_RESULT
        ? null
        : (0, i.jsx)(A.Z, {
              message: c,
              channel: r,
              compact: !0,
              withMentionPrefix: (0, E.Z)(n, c),
              showPopout: s,
              renderPopout: t,
              onClick: o,
              onContextMenu: l,
              onPopoutRequestClose: u,
              isRepliedMessage: !0
          });
}
function k(e, t, n) {
    let { content: r, referencedMessage: a, isReplyAuthorBlocked: o, isReplyAuthorIgnored: l, onClickReply: c } = e,
        d = a.state !== g.Y.DELETED ? c : void 0;
    switch (a.state) {
        case g.Y.LOADED: {
            let {
                contentPlaceholder: e,
                renderedContent: c,
                trailingIcon: f,
                leadingIcon: _
            } = U(a.message, r, o, l, D.repliedTextContent, {
                trailingIconClass: D.repliedTextContentTrailingIcon,
                leadingIconClass: D.repliedTextContentLeadingIcon,
                iconSize: C.WW
            });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    _,
                    (0, i.jsx)(u.P3F, {
                        className: s()(D.repliedTextPreview, D.clickable, { [D.repliedMessageClickableSpineHovered]: t }),
                        onClick: d,
                        onMouseEnter: n,
                        onMouseLeave: n,
                        children: (0, i.jsx)(u.nuw, {
                            children:
                                null != c
                                    ? c
                                    : (0, i.jsx)('span', {
                                          className: D.repliedTextPlaceholder,
                                          children: e
                                      })
                        })
                    }),
                    f
                ]
            });
        }
        case g.Y.NOT_LOADED:
            return (0, i.jsx)(u.P3F, {
                className: s()(D.repliedTextPreview, D.clickable),
                onClick: d,
                children: (0, i.jsx)('span', {
                    className: D.repliedTextPlaceholder,
                    children: O.intl.string(O.t['1i+hMj'])
                })
            });
        case g.Y.DELETED:
            return (0, i.jsx)('div', {
                className: D.repliedTextPreview,
                children: (0, i.jsx)('span', {
                    className: D.repliedTextPlaceholder,
                    children: O.intl.string(O.t.mE3KJC)
                })
            });
        default:
            (0, b.vE)(a);
    }
}
function U(e, t, n, r, a, s) {
    let o, l, c, d;
    let f = (0, p.Z)(e),
        { trailingIconClass: g, leadingIconClass: E, iconSize: y } = s,
        I = null == t || '' === t || (Array.isArray(t) && 0 === t.length),
        b = (0, v.cv)(f).length > 0,
        T = null != f.interaction,
        A = f.hasFlag(R.iLy.IS_VOICE_MESSAGE),
        N = f.isPoll(),
        C = f.type === R.uaV.POLL_RESULT;
    if (
        ((0, _.Z)(e) &&
            (d = (0, i.jsx)(h.Z, {
                size: 'custom',
                className: E,
                width: y,
                height: y
            })),
        n)
    )
        o = O.intl.string(O.t.XAkOo6);
    else if (r) o = O.intl.string(O.t.G7p6v7);
    else if (f.type === R.uaV.CHANNEL_PINNED_MESSAGE) o = O.intl.string(O.t.sCfDDg);
    else if (I) {
        if (N) {
            var D, x;
            l = null == f ? void 0 : null === (x = f.poll) || void 0 === x ? void 0 : null === (D = x.question) || void 0 === D ? void 0 : D.text;
        } else
            C
                ? (o = (0, m.N4)(f))
                : b
                  ? (o = O.intl.string(O.t.kHdYCQ))
                  : T
                    ? (o = O.intl.string(O.t['E+6SSU']))
                    : A
                      ? (o = O.intl.string(O.t['XC3A5+']))
                      : ((o = O.intl.string(O.t['6hGo0d'])),
                        (c = (0, i.jsx)(u.XBm, {
                            size: 'custom',
                            color: 'currentColor',
                            className: g,
                            width: y,
                            height: y
                        })));
    } else
        l = (0, i.jsx)(S.ZP, {
            message: f,
            content: t,
            className: a
        });
    return (
        b
            ? (c = (0, i.jsx)(u.B7q, {
                  size: 'custom',
                  color: 'currentColor',
                  className: g,
                  width: y,
                  height: y
              }))
            : T
              ? (c = (0, i.jsx)(u.SsZ, {
                    size: 'custom',
                    color: 'currentColor',
                    className: g,
                    width: y,
                    height: y
                }))
              : A
                ? (c = (0, i.jsx)(u.S6n, {
                      size: 'custom',
                      color: 'currentColor',
                      className: g,
                      width: (19 / 24) * y,
                      height: y
                  }))
                : (f.attachments.length > 0 || f.embeds.length > 0) &&
                  !C &&
                  (c = (0, i.jsx)(u.XBm, {
                      size: 'custom',
                      color: 'currentColor',
                      className: g,
                      width: y,
                      height: y
                  })),
        {
            contentPlaceholder: o,
            renderedContent: l,
            trailingIcon: c,
            leadingIcon: d
        }
    );
}
function G(e) {
    let t;
    let { repliedAuthor: n, baseAuthor: a, baseMessage: o, referencedMessage: c, renderPopout: d, isReplySpineClickable: _, showReplySpine: p } = e,
        { canShowReactionsOnMessageHover: h } = f.ZP.useExperiment({ location: 'RepliedMessage' }, { autoTrackExposure: !1 }),
        [m, E] = r.useState(!1),
        v = r.useMemo(() => (null != d && c.state === g.Y.LOADED ? (e) => d(e, c.message) : void 0), [c, d]),
        y = r.useCallback(() => E((e) => !e), []),
        b = w(e, v, o.type),
        S = M(e, v),
        A = k(e, m, y),
        C = r.useMemo(() => (e.compact ? (0, N.Z)((0, I.vc)(l()(), 'LT')) : null), [e.compact]);
    null != n &&
        null != a &&
        (t = O.intl.formatToPlainString(O.t.RhbQ2N, {
            author: null == a ? void 0 : a.nick,
            repliedAuthor: null == n ? void 0 : n.nick
        }));
    let x = o.type === R.uaV.CONTEXT_MENU_COMMAND;
    return (0, i.jsxs)('div', {
        id: (0, T.Gq)(o),
        className: s()(D.repliedMessage, C, x ? D.contextCommandMessage : { [D.messageSpine]: !h || (!_ && p) }),
        'aria-label': t,
        children: [
            h &&
                _ &&
                p &&
                (0, i.jsx)(u.P3F, {
                    tag: 'div',
                    'aria-label': O.intl.string(O.t.dpjpOj),
                    className: s()(D.repliedMessageClickableSpine, { [D.repliedMessageContentHovered]: m }),
                    onClick: e.onClickReply,
                    onMouseEnter: y,
                    onMouseLeave: y
                }),
            b,
            S,
            A
        ]
    });
}

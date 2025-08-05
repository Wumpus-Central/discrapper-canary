(n.d(t, {
    Z: () => B,
    f: () => G
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(481060),
    u = n(100527),
    d = n(906732),
    f = n(407477),
    _ = n(387188),
    p = n(978003),
    h = n(39154),
    m = n(245216),
    g = n(79390),
    E = n(869765),
    b = n(403132),
    y = n(378233),
    O = n(768581),
    v = n(55935),
    I = n(823379),
    T = n(453687),
    S = n(930282),
    A = n(123145),
    N = n(223021),
    C = n(217702),
    w = n(981631),
    R = n(388032),
    P = n(848697),
    D = n(73433);
function L(e) {
    let { width: t = 12, height: n = 8, color: i = 'currentColor', className: a, foreground: o } = e;
    return (0, r.jsx)('svg', {
        className: a,
        width: t,
        height: n,
        viewBox: '0 0 12 8',
        children: (0, r.jsx)('path', {
            d: 'M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z',
            className: o,
            fill: i
        })
    });
}
function x(e) {
    let { width: t = 18, height: n = 18, className: i, foreground: a } = e;
    return (0, r.jsx)('svg', {
        className: i,
        width: t,
        height: n,
        viewBox: '0 0 18 18',
        children: (0, r.jsx)('path', {
            fill: '#3ba55c',
            d: 'M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0',
            className: a
        })
    });
}
function k(e, t, n, i, a, s) {
    return (0, r.jsx)('img', {
        alt: '',
        src:
            (null == t ? void 0 : t.guildMemberAvatar) != null && null != n
                ? (0, O.JM)({
                      guildId: n,
                      userId: e.id,
                      avatar: t.guildMemberAvatar
                  })
                : e.getAvatarURL(n, 16),
        onClick: i,
        onContextMenu: a,
        className: o()({
            [P.replyAvatar]: !0,
            [P.clickable]: null != i
        }),
        ref: s
    });
}
function j(e, t, n) {
    let { referencedMessage: a, channel: o, compact: s, isReplyAuthorBlocked: l, repliedAuthor: f, showAvatarPopout: _, onClickAvatar: p, onContextMenu: h, onPopoutRequestClose: m } = e,
        { analyticsLocations: g } = (0, d.ZP)(u.Z.AVATAR),
        b = i.useRef(null);
    if (s || a.state !== E.Y.LOADED || l)
        return n === w.uaV.CONTEXT_MENU_COMMAND
            ? (0, r.jsx)('div', {
                  className: P.replyChatIconContainer,
                  children: (0, r.jsx)(c.kBi, { size: 'xs' })
              })
            : (0, r.jsx)('div', {
                  className: P.replyBadge,
                  children: (0, r.jsx)(L, { className: P.replyIcon })
              });
    if (a.message.type === w.uaV.USER_JOIN || a.message.type === w.uaV.ROLE_SUBSCRIPTION_PURCHASE || a.message.type === w.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || a.message.type === w.uaV.GUILD_GAMING_STATS_PROMPT) return (0, r.jsx)(x, { className: P.userJoinSystemMessageIcon });
    if (a.message.type === w.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
        return (0, r.jsx)(c.Prq, {
            size: 'md',
            color: 'currentColor',
            className: P.ticketIcon
        });
    if (a.message.type === w.uaV.POLL_RESULT)
        return (0, r.jsx)(c.QDj, {
            className: P.repliedTextContentLeadingIcon,
            width: C.WW,
            height: C.WW,
            size: 'custom'
        });
    let y = () => k(a.message.author, f, o.guild_id, p, h, b);
    return null != t && null != _
        ? (0, r.jsx)(d.Gt, {
              value: g,
              children: (0, r.jsx)(c.yRy, {
                  targetElementRef: b,
                  renderPopout: t,
                  shouldShow: _,
                  position: 'right',
                  onRequestClose: m,
                  children: y
              })
          })
        : (0, r.jsx)(d.Gt, {
              value: g,
              children: y()
          });
}
function M(e, t) {
    let { baseMessage: n, channel: i, referencedMessage: a, showUsernamePopout: o, onClickUsername: s, onContextMenu: l, onPopoutRequestClose: c } = e,
        u = (null == a ? void 0 : a.state) === E.Y.LOADED ? a.message : void 0;
    return null == u || u.type === w.uaV.USER_JOIN || u.type === w.uaV.ROLE_SUBSCRIPTION_PURCHASE || u.type === w.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || u.type === w.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || u.type === w.uaV.GUILD_GAMING_STATS_PROMPT || u.type === w.uaV.POLL_RESULT
        ? null
        : (0, r.jsx)(A.Z, {
              message: u,
              channel: i,
              compact: !0,
              withMentionPrefix: (0, b.Z)(n, u),
              showPopout: o,
              renderPopout: t,
              onClick: s,
              onContextMenu: l,
              onPopoutRequestClose: c,
              isRepliedMessage: !0
          });
}
function U(e, t, n) {
    let { content: i, referencedMessage: a, isReplyAuthorBlocked: s, isReplyAuthorIgnored: l, onClickReply: u } = e,
        d = a.state !== E.Y.DELETED ? u : void 0;
    switch (a.state) {
        case E.Y.LOADED: {
            let {
                contentPlaceholder: e,
                renderedContent: u,
                trailingIcon: f,
                leadingIcon: _
            } = G(a.message, i, s, l, P.repliedTextContent, {
                trailingIconClass: P.repliedTextContentTrailingIcon,
                leadingIconClass: P.repliedTextContentLeadingIcon,
                iconSize: C.WW
            });
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    _,
                    (0, r.jsx)(c.P3F, {
                        className: o()(P.repliedTextPreview, P.clickable, { [P.repliedMessageClickableSpineHovered]: t }),
                        onClick: d,
                        onMouseEnter: n,
                        onMouseLeave: n,
                        children: (0, r.jsx)(c.nuw, {
                            children:
                                null != u
                                    ? u
                                    : (0, r.jsx)('span', {
                                          className: P.repliedTextPlaceholder,
                                          children: e
                                      })
                        })
                    }),
                    f
                ]
            });
        }
        case E.Y.NOT_LOADED:
            return (0, r.jsx)(c.P3F, {
                className: o()(P.repliedTextPreview, P.clickable),
                onClick: d,
                children: (0, r.jsx)('span', {
                    className: P.repliedTextPlaceholder,
                    children: R.intl.string(R.t['1i+hMj'])
                })
            });
        case E.Y.DELETED:
            return (0, r.jsx)('div', {
                className: P.repliedTextPreview,
                children: (0, r.jsx)('span', {
                    className: P.repliedTextPlaceholder,
                    children: R.intl.string(R.t.mE3KJC)
                })
            });
        default:
            (0, I.vE)(a);
    }
}
function G(e, t, n, i, a, s) {
    let l,
        u,
        d,
        f,
        E = (0, h.Z)(e),
        { trailingIconClass: b, leadingIconClass: O, iconSize: v } = s,
        I = null == t || '' === t || (Array.isArray(t) && 0 === t.length),
        T = (0, y.cv)(E).length > 0,
        A = null != E.interaction,
        N = E.hasFlag(w.iLy.IS_VOICE_MESSAGE),
        C = E.isPoll(),
        L = E.type === w.uaV.POLL_RESULT;
    if (
        ((0, p.Z)(e) &&
            (f = (0, r.jsx)(m.Z, {
                size: 'custom',
                className: O,
                width: v,
                height: v
            })),
        n)
    )
        l = R.intl.string(R.t.XAkOo6);
    else if (i) l = R.intl.string(R.t.G7p6v7);
    else if (E.type === w.uaV.CHANNEL_PINNED_MESSAGE) l = R.intl.string(R.t.sCfDDg);
    else if (E.type === w.uaV.EMOJI_ADDED)
        u = (0, r.jsx)(_.Zh, {
            message: E,
            rendered: t
        });
    else if (I)
        if (C) {
            var x, k;
            u = (0, r.jsx)('div', {
                className: o()(P.repliedTextContent, D.markup),
                children: null == E || null == (k = E.poll) || null == (x = k.question) ? void 0 : x.text
            });
        } else
            L
                ? (l = (0, g.N4)(E))
                : T
                  ? (l = R.intl.string(R.t.kHdYCQ))
                  : A
                    ? (l = R.intl.string(R.t['E+6SSU']))
                    : N
                      ? (l = R.intl.string(R.t['XC3A5+']))
                      : E.hasFlag(w.iLy.IS_COMPONENTS_V2)
                        ? (l = R.intl.string(R.t.Xxat6e))
                        : ((l = R.intl.string(R.t['6hGo0d'])),
                          (d = (0, r.jsx)(c.XBm, {
                              size: 'custom',
                              color: 'currentColor',
                              className: b,
                              width: v,
                              height: v
                          })));
    else
        u = (0, r.jsx)(S.ZP, {
            message: E,
            content: t,
            className: a,
            compact: !0
        });
    return (
        T
            ? (d = (0, r.jsx)(c.B7q, {
                  size: 'custom',
                  color: 'currentColor',
                  className: b,
                  width: v,
                  height: v
              }))
            : A
              ? (d = (0, r.jsx)(c.SsZ, {
                    size: 'custom',
                    color: 'currentColor',
                    className: b,
                    width: v,
                    height: v
                }))
              : N
                ? (d = (0, r.jsx)(c.S6n, {
                      size: 'custom',
                      color: 'currentColor',
                      className: b,
                      width: (19 / 24) * v,
                      height: v
                  }))
                : (E.attachments.length > 0 || E.embeds.length > 0) &&
                  !L &&
                  (d = (0, r.jsx)(c.XBm, {
                      size: 'custom',
                      color: 'currentColor',
                      className: b,
                      width: v,
                      height: v
                  })),
        {
            contentPlaceholder: l,
            renderedContent: u,
            trailingIcon: d,
            leadingIcon: f
        }
    );
}
function B(e) {
    let t,
        { repliedAuthor: n, baseAuthor: a, baseMessage: s, referencedMessage: u, renderPopout: d, isReplySpineClickable: _, showReplySpine: p } = e,
        { canShowReactionsOnMessageHover: h } = f.ZP.useExperiment({ location: 'RepliedMessage' }, { autoTrackExposure: !1 }),
        [m, g] = i.useState(!1),
        b = i.useMemo(() => (null != d && u.state === E.Y.LOADED ? (e) => d(e, u.message) : void 0), [u, d]),
        y = i.useCallback(() => g((e) => !e), []),
        O = j(e, b, s.type),
        I = M(e, b),
        S = U(e, m, y),
        A = i.useMemo(() => (e.compact ? (0, N.Z)((0, v.vc)(l()(), 'LT')) : null), [e.compact]);
    null != n &&
        null != a &&
        (t = R.intl.formatToPlainString(R.t.RhbQ2N, {
            author: null == a ? void 0 : a.nick,
            repliedAuthor: null == n ? void 0 : n.nick
        }));
    let C = s.type === w.uaV.CONTEXT_MENU_COMMAND;
    return (0, r.jsxs)('div', {
        id: (0, T.Gq)(s),
        className: o()(P.repliedMessage, A, C ? P.contextCommandMessage : { [P.messageSpine]: !h || (!_ && p) }),
        'aria-label': t,
        children: [
            h &&
                _ &&
                p &&
                (0, r.jsx)(c.P3F, {
                    tag: 'div',
                    'aria-label': R.intl.string(R.t.dpjpOj),
                    className: o()(P.repliedMessageClickableSpine, { [P.repliedMessageContentHovered]: m }),
                    onClick: e.onClickReply,
                    onMouseEnter: y,
                    onMouseLeave: y
                }),
            O,
            I,
            S
        ]
    });
}

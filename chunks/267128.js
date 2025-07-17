(n.d(t, {
    Z: () => D,
    f: () => A
}),
    n(388685));
var s = n(255367),
    a = n(73800),
    r = n(120356),
    l = n.n(r),
    i = n(913527),
    o = n.n(i),
    c = n(481060),
    u = n(100527),
    m = n(906732),
    d = n(407477),
    p = n(387188),
    g = n(978003),
    h = n(39154),
    j = n(245216),
    x = n(79390),
    f = n(869765),
    C = n(403132),
    O = n(378233),
    v = n(768581),
    b = n(55935),
    y = n(823379),
    P = n(453687),
    N = n(930282),
    E = n(123145),
    S = n(223021),
    I = n(217702),
    T = n(981631),
    M = n(388032),
    k = n(848697),
    w = n(73433);
function L(e) {
    let { width: t = 12, height: n = 8, color: a = 'currentColor', className: r, foreground: l } = e;
    return (0, s.jsx)('svg', {
        className: r,
        width: t,
        height: n,
        viewBox: '0 0 12 8',
        children: (0, s.jsx)('path', {
            d: 'M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z',
            className: l,
            fill: a
        })
    });
}
function _(e) {
    let { width: t = 18, height: n = 18, className: a, foreground: r } = e;
    return (0, s.jsx)('svg', {
        className: a,
        width: t,
        height: n,
        viewBox: '0 0 18 18',
        children: (0, s.jsx)('path', {
            fill: '#3ba55c',
            d: 'M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0',
            className: r
        })
    });
}
function A(e, t, n, a, r, i) {
    let o,
        u,
        m,
        d,
        f = (0, h.Z)(e),
        { trailingIconClass: C, leadingIconClass: v, iconSize: b } = i,
        y = null == t || '' === t || (Array.isArray(t) && 0 === t.length),
        P = (0, O.cv)(f).length > 0,
        E = null != f.interaction,
        S = f.hasFlag(T.iLy.IS_VOICE_MESSAGE),
        I = f.isPoll(),
        L = f.type === T.uaV.POLL_RESULT;
    if (
        ((0, g.Z)(e) &&
            (d = (0, s.jsx)(j.Z, {
                size: 'custom',
                className: v,
                width: b,
                height: b
            })),
        n)
    )
        o = M.intl.string(M.t.XAkOo6);
    else if (a) o = M.intl.string(M.t.G7p6v7);
    else if (f.type === T.uaV.CHANNEL_PINNED_MESSAGE) o = M.intl.string(M.t.sCfDDg);
    else if (f.type === T.uaV.EMOJI_ADDED)
        u = (0, s.jsx)(p.Zh, {
            message: f,
            rendered: t
        });
    else if (y)
        if (I) {
            var _, A;
            u = (0, s.jsx)('div', {
                className: l()(k.repliedTextContent, w.markup),
                children: null == f || null == (A = f.poll) || null == (_ = A.question) ? void 0 : _.text
            });
        } else
            L
                ? (o = (0, x.N4)(f))
                : P
                  ? (o = M.intl.string(M.t.kHdYCQ))
                  : E
                    ? (o = M.intl.string(M.t['E+6SSU']))
                    : S
                      ? (o = M.intl.string(M.t['XC3A5+']))
                      : f.hasFlag(T.iLy.IS_COMPONENTS_V2)
                        ? (o = M.intl.string(M.t.Xxat6e))
                        : ((o = M.intl.string(M.t['6hGo0d'])),
                          (m = (0, s.jsx)(c.XBm, {
                              size: 'custom',
                              color: 'currentColor',
                              className: C,
                              width: b,
                              height: b
                          })));
    else
        u = (0, s.jsx)(N.ZP, {
            message: f,
            content: t,
            className: r,
            compact: !0
        });
    return (
        P
            ? (m = (0, s.jsx)(c.B7q, {
                  size: 'custom',
                  color: 'currentColor',
                  className: C,
                  width: b,
                  height: b
              }))
            : E
              ? (m = (0, s.jsx)(c.SsZ, {
                    size: 'custom',
                    color: 'currentColor',
                    className: C,
                    width: b,
                    height: b
                }))
              : S
                ? (m = (0, s.jsx)(c.S6n, {
                      size: 'custom',
                      color: 'currentColor',
                      className: C,
                      width: (19 / 24) * b,
                      height: b
                  }))
                : (f.attachments.length > 0 || f.embeds.length > 0) &&
                  !L &&
                  (m = (0, s.jsx)(c.XBm, {
                      size: 'custom',
                      color: 'currentColor',
                      className: C,
                      width: b,
                      height: b
                  })),
        {
            contentPlaceholder: o,
            renderedContent: u,
            trailingIcon: m,
            leadingIcon: d
        }
    );
}
function D(e) {
    let t,
        { repliedAuthor: n, baseAuthor: r, baseMessage: i, referencedMessage: p, renderPopout: g, isReplySpineClickable: h, showReplySpine: j } = e,
        { canShowReactionsOnMessageHover: x } = d.ZP.useExperiment({ location: 'RepliedMessage' }, { autoTrackExposure: !1 }),
        [O, N] = a.useState(!1),
        w = a.useMemo(() => (null != g && p.state === f.Y.LOADED ? (e) => g(e, p.message) : void 0), [p, g]),
        D = a.useCallback(() => N((e) => !e), []),
        R = (function (e, t, n) {
            let { referencedMessage: r, channel: i, compact: o, isReplyAuthorBlocked: d, repliedAuthor: p, showAvatarPopout: g, onClickAvatar: h, onContextMenu: j, onPopoutRequestClose: x } = e,
                { analyticsLocations: C } = (0, m.ZP)(u.Z.AVATAR),
                O = a.useRef(null);
            if (o || r.state !== f.Y.LOADED || d)
                return n === T.uaV.CONTEXT_MENU_COMMAND
                    ? (0, s.jsx)('div', {
                          className: k.replyChatIconContainer,
                          children: (0, s.jsx)(c.kBi, { size: 'xs' })
                      })
                    : (0, s.jsx)('div', {
                          className: k.replyBadge,
                          children: (0, s.jsx)(L, { className: k.replyIcon })
                      });
            if (r.message.type === T.uaV.USER_JOIN || r.message.type === T.uaV.ROLE_SUBSCRIPTION_PURCHASE || r.message.type === T.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || r.message.type === T.uaV.GUILD_GAMING_STATS_PROMPT) return (0, s.jsx)(_, { className: k.userJoinSystemMessageIcon });
            if (r.message.type === T.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, s.jsx)(c.Prq, {
                    size: 'md',
                    color: 'currentColor',
                    className: k.ticketIcon
                });
            if (r.message.type === T.uaV.POLL_RESULT)
                return (0, s.jsx)(c.QDj, {
                    className: k.repliedTextContentLeadingIcon,
                    width: I.WW,
                    height: I.WW,
                    size: 'custom'
                });
            let b = () => {
                var e, t;
                return (
                    (e = r.message.author),
                    (t = i.guild_id),
                    (0, s.jsx)('img', {
                        alt: '',
                        src:
                            (null == p ? void 0 : p.guildMemberAvatar) != null && null != t
                                ? (0, v.JM)({
                                      guildId: t,
                                      userId: e.id,
                                      avatar: p.guildMemberAvatar
                                  })
                                : e.getAvatarURL(t, 16),
                        onClick: h,
                        onContextMenu: j,
                        className: l()({
                            [k.replyAvatar]: !0,
                            [k.clickable]: null != h
                        }),
                        ref: O
                    })
                );
            };
            return null != t && null != g
                ? (0, s.jsx)(m.Gt, {
                      value: C,
                      children: (0, s.jsx)(c.yRy, {
                          targetElementRef: O,
                          renderPopout: t,
                          shouldShow: g,
                          position: 'right',
                          onRequestClose: x,
                          children: b
                      })
                  })
                : (0, s.jsx)(m.Gt, {
                      value: C,
                      children: b()
                  });
        })(e, w, i.type),
        Z = (function (e, t) {
            let { baseMessage: n, channel: a, referencedMessage: r, showUsernamePopout: l, onClickUsername: i, onContextMenu: o, onPopoutRequestClose: c } = e,
                u = (null == r ? void 0 : r.state) === f.Y.LOADED ? r.message : void 0;
            return null == u || u.type === T.uaV.USER_JOIN || u.type === T.uaV.ROLE_SUBSCRIPTION_PURCHASE || u.type === T.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || u.type === T.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || u.type === T.uaV.GUILD_GAMING_STATS_PROMPT || u.type === T.uaV.POLL_RESULT
                ? null
                : (0, s.jsx)(E.Z, {
                      message: u,
                      channel: a,
                      compact: !0,
                      withMentionPrefix: (0, C.Z)(n, u),
                      showPopout: l,
                      renderPopout: t,
                      onClick: i,
                      onContextMenu: o,
                      onPopoutRequestClose: c,
                      isRepliedMessage: !0
                  });
        })(e, w),
        V = (function (e, t, n) {
            let { content: a, referencedMessage: r, isReplyAuthorBlocked: i, isReplyAuthorIgnored: o, onClickReply: u } = e,
                m = r.state !== f.Y.DELETED ? u : void 0;
            switch (r.state) {
                case f.Y.LOADED: {
                    let {
                        contentPlaceholder: e,
                        renderedContent: u,
                        trailingIcon: d,
                        leadingIcon: p
                    } = A(r.message, a, i, o, k.repliedTextContent, {
                        trailingIconClass: k.repliedTextContentTrailingIcon,
                        leadingIconClass: k.repliedTextContentLeadingIcon,
                        iconSize: I.WW
                    });
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            p,
                            (0, s.jsx)(c.P3F, {
                                className: l()(k.repliedTextPreview, k.clickable, { [k.repliedMessageClickableSpineHovered]: t }),
                                onClick: m,
                                onMouseEnter: n,
                                onMouseLeave: n,
                                children: (0, s.jsx)(c.nuw, {
                                    children:
                                        null != u
                                            ? u
                                            : (0, s.jsx)('span', {
                                                  className: k.repliedTextPlaceholder,
                                                  children: e
                                              })
                                })
                            }),
                            d
                        ]
                    });
                }
                case f.Y.NOT_LOADED:
                    return (0, s.jsx)(c.P3F, {
                        className: l()(k.repliedTextPreview, k.clickable),
                        onClick: m,
                        children: (0, s.jsx)('span', {
                            className: k.repliedTextPlaceholder,
                            children: M.intl.string(M.t['1i+hMj'])
                        })
                    });
                case f.Y.DELETED:
                    return (0, s.jsx)('div', {
                        className: k.repliedTextPreview,
                        children: (0, s.jsx)('span', {
                            className: k.repliedTextPlaceholder,
                            children: M.intl.string(M.t.mE3KJC)
                        })
                    });
                default:
                    (0, y.vE)(r);
            }
        })(e, O, D),
        U = a.useMemo(() => (e.compact ? (0, S.Z)((0, b.vc)(o()(), 'LT')) : null), [e.compact]);
    null != n &&
        null != r &&
        (t = M.intl.formatToPlainString(M.t.RhbQ2N, {
            author: null == r ? void 0 : r.nick,
            repliedAuthor: null == n ? void 0 : n.nick
        }));
    let G = i.type === T.uaV.CONTEXT_MENU_COMMAND;
    return (0, s.jsxs)('div', {
        id: (0, P.Gq)(i),
        className: l()(k.repliedMessage, U, G ? k.contextCommandMessage : { [k.messageSpine]: !x || (!h && j) }),
        'aria-label': t,
        children: [
            x &&
                h &&
                j &&
                (0, s.jsx)(c.P3F, {
                    tag: 'div',
                    'aria-label': M.intl.string(M.t.dpjpOj),
                    className: l()(k.repliedMessageClickableSpine, { [k.repliedMessageContentHovered]: O }),
                    onClick: e.onClickReply,
                    onMouseEnter: D,
                    onMouseLeave: D
                }),
            R,
            Z,
            V
        ]
    });
}

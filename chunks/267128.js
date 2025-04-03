t.d(s, {
    Z: () => D,
    f: () => A
}),
    t(47120);
var n = t(200651),
    l = t(192379),
    a = t(120356),
    r = t.n(a),
    i = t(913527),
    o = t.n(i),
    c = t(481060),
    u = t(100527),
    d = t(906732),
    m = t(407477),
    p = t(978003),
    g = t(39154),
    h = t(245216),
    C = t(79390),
    N = t(869765),
    P = t(403132),
    x = t(378233),
    O = t(768581),
    j = t(55935),
    v = t(823379),
    E = t(453687),
    f = t(930282),
    y = t(123145),
    M = t(223021),
    S = t(217702),
    T = t(981631),
    I = t(388032),
    _ = t(848697);
function b(e) {
    let { width: s = 12, height: t = 8, color: l = 'currentColor', className: a, foreground: r } = e;
    return (0, n.jsx)('svg', {
        className: a,
        width: s,
        height: t,
        viewBox: '0 0 12 8',
        children: (0, n.jsx)('path', {
            d: 'M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z',
            className: r,
            fill: l
        })
    });
}
function L(e) {
    let { width: s = 18, height: t = 18, className: l, foreground: a } = e;
    return (0, n.jsx)('svg', {
        className: l,
        width: s,
        height: t,
        viewBox: '0 0 18 18',
        children: (0, n.jsx)('path', {
            fill: '#3ba55c',
            d: 'M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0',
            className: a
        })
    });
}
function A(e, s, t, l, a, r) {
    let i,
        o,
        u,
        d,
        m = (0, g.Z)(e),
        { trailingIconClass: N, leadingIconClass: P, iconSize: O } = r,
        j = null == s || '' === s || (Array.isArray(s) && 0 === s.length),
        v = (0, x.cv)(m).length > 0,
        E = null != m.interaction,
        y = m.hasFlag(T.iLy.IS_VOICE_MESSAGE),
        M = m.isPoll(),
        S = m.type === T.uaV.POLL_RESULT;
    if (
        ((0, p.Z)(e) &&
            (d = (0, n.jsx)(h.Z, {
                size: 'custom',
                className: P,
                width: O,
                height: O
            })),
        t)
    )
        i = I.NW.string(I.t.XAkOo6);
    else if (l) i = I.NW.string(I.t.G7p6v7);
    else if (m.type === T.uaV.CHANNEL_PINNED_MESSAGE) i = I.NW.string(I.t.sCfDDg);
    else if (j)
        if (M) {
            var _, b;
            o = null == m || null == (b = m.poll) || null == (_ = b.question) ? void 0 : _.text;
        } else
            S
                ? (i = (0, C.N4)(m))
                : v
                  ? (i = I.NW.string(I.t.kHdYCQ))
                  : E
                    ? (i = I.NW.string(I.t['E+6SSU']))
                    : y
                      ? (i = I.NW.string(I.t['XC3A5+']))
                      : ((i = I.NW.string(I.t['6hGo0d'])),
                        (u = (0, n.jsx)(c.XBm, {
                            size: 'custom',
                            color: 'currentColor',
                            className: N,
                            width: O,
                            height: O
                        })));
    else
        o = (0, n.jsx)(f.ZP, {
            message: m,
            content: s,
            className: a
        });
    return (
        v
            ? (u = (0, n.jsx)(c.B7q, {
                  size: 'custom',
                  color: 'currentColor',
                  className: N,
                  width: O,
                  height: O
              }))
            : E
              ? (u = (0, n.jsx)(c.SsZ, {
                    size: 'custom',
                    color: 'currentColor',
                    className: N,
                    width: O,
                    height: O
                }))
              : y
                ? (u = (0, n.jsx)(c.S6n, {
                      size: 'custom',
                      color: 'currentColor',
                      className: N,
                      width: (19 / 24) * O,
                      height: O
                  }))
                : (m.attachments.length > 0 || m.embeds.length > 0) &&
                  !S &&
                  (u = (0, n.jsx)(c.XBm, {
                      size: 'custom',
                      color: 'currentColor',
                      className: N,
                      width: O,
                      height: O
                  })),
        {
            contentPlaceholder: i,
            renderedContent: o,
            trailingIcon: u,
            leadingIcon: d
        }
    );
}
function D(e) {
    let s,
        { repliedAuthor: t, baseAuthor: a, baseMessage: i, referencedMessage: p, renderPopout: g, isReplySpineClickable: h, showReplySpine: C } = e,
        { canShowReactionsOnMessageHover: x } = m.ZP.useExperiment({ location: 'RepliedMessage' }, { autoTrackExposure: !1 }),
        [f, D] = l.useState(!1),
        R = l.useMemo(() => (null != g && p.state === N.Y.LOADED ? (e) => g(e, p.message) : void 0), [p, g]),
        k = l.useCallback(() => D((e) => !e), []),
        w = (function (e, s, t) {
            let { referencedMessage: l, channel: a, compact: i, isReplyAuthorBlocked: o, repliedAuthor: m, showAvatarPopout: p, onClickAvatar: g, onContextMenu: h, onPopoutRequestClose: C } = e,
                { analyticsLocations: P } = (0, d.ZP)(u.Z.AVATAR);
            if (i || l.state !== N.Y.LOADED || o)
                return t === T.uaV.CONTEXT_MENU_COMMAND
                    ? (0, n.jsx)('div', {
                          className: _.replyChatIconContainer,
                          children: (0, n.jsx)(c.kBi, { size: 'xs' })
                      })
                    : (0, n.jsx)('div', {
                          className: _.replyBadge,
                          children: (0, n.jsx)(b, { className: _.replyIcon })
                      });
            if (l.message.type === T.uaV.USER_JOIN || l.message.type === T.uaV.ROLE_SUBSCRIPTION_PURCHASE || l.message.type === T.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || l.message.type === T.uaV.GUILD_GAMING_STATS_PROMPT) return (0, n.jsx)(L, { className: _.userJoinSystemMessageIcon });
            if (l.message.type === T.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, n.jsx)(c.Prq, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.ticketIcon
                });
            if (l.message.type === T.uaV.POLL_RESULT)
                return (0, n.jsx)(c.QDj, {
                    className: _.repliedTextContentLeadingIcon,
                    width: S.WW,
                    height: S.WW,
                    size: 'custom'
                });
            let x = () => {
                var e, s;
                return (
                    (e = l.message.author),
                    (s = a.guild_id),
                    (0, n.jsx)('img', {
                        alt: '',
                        src:
                            (null == m ? void 0 : m.guildMemberAvatar) != null && null != s
                                ? (0, O.JM)({
                                      guildId: s,
                                      userId: e.id,
                                      avatar: m.guildMemberAvatar
                                  })
                                : e.getAvatarURL(s, 16),
                        onClick: g,
                        onContextMenu: h,
                        className: r()({
                            [_.replyAvatar]: !0,
                            [_.clickable]: null != g
                        })
                    })
                );
            };
            return null != s && null != p
                ? (0, n.jsx)(d.Gt, {
                      value: P,
                      children: (0, n.jsx)(c.yRy, {
                          renderPopout: s,
                          shouldShow: p,
                          position: 'right',
                          onRequestClose: C,
                          children: x
                      })
                  })
                : (0, n.jsx)(d.Gt, {
                      value: P,
                      children: x()
                  });
        })(e, R, i.type),
        V = (function (e, s) {
            let { baseMessage: t, channel: l, referencedMessage: a, showUsernamePopout: r, onClickUsername: i, onContextMenu: o, onPopoutRequestClose: c } = e,
                u = (null == a ? void 0 : a.state) === N.Y.LOADED ? a.message : void 0;
            return null == u || u.type === T.uaV.USER_JOIN || u.type === T.uaV.ROLE_SUBSCRIPTION_PURCHASE || u.type === T.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || u.type === T.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || u.type === T.uaV.GUILD_GAMING_STATS_PROMPT || u.type === T.uaV.POLL_RESULT
                ? null
                : (0, n.jsx)(y.Z, {
                      message: u,
                      channel: l,
                      compact: !0,
                      withMentionPrefix: (0, P.Z)(t, u),
                      showPopout: r,
                      renderPopout: s,
                      onClick: i,
                      onContextMenu: o,
                      onPopoutRequestClose: c,
                      isRepliedMessage: !0
                  });
        })(e, R),
        U = (function (e, s, t) {
            let { content: l, referencedMessage: a, isReplyAuthorBlocked: i, isReplyAuthorIgnored: o, onClickReply: u } = e,
                d = a.state !== N.Y.DELETED ? u : void 0;
            switch (a.state) {
                case N.Y.LOADED: {
                    let {
                        contentPlaceholder: e,
                        renderedContent: u,
                        trailingIcon: m,
                        leadingIcon: p
                    } = A(a.message, l, i, o, _.repliedTextContent, {
                        trailingIconClass: _.repliedTextContentTrailingIcon,
                        leadingIconClass: _.repliedTextContentLeadingIcon,
                        iconSize: S.WW
                    });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            p,
                            (0, n.jsx)(c.P3F, {
                                className: r()(_.repliedTextPreview, _.clickable, { [_.repliedMessageClickableSpineHovered]: s }),
                                onClick: d,
                                onMouseEnter: t,
                                onMouseLeave: t,
                                children: (0, n.jsx)(c.nuw, {
                                    children:
                                        null != u
                                            ? u
                                            : (0, n.jsx)('span', {
                                                  className: _.repliedTextPlaceholder,
                                                  children: e
                                              })
                                })
                            }),
                            m
                        ]
                    });
                }
                case N.Y.NOT_LOADED:
                    return (0, n.jsx)(c.P3F, {
                        className: r()(_.repliedTextPreview, _.clickable),
                        onClick: d,
                        children: (0, n.jsx)('span', {
                            className: _.repliedTextPlaceholder,
                            children: I.NW.string(I.t['1i+hMj'])
                        })
                    });
                case N.Y.DELETED:
                    return (0, n.jsx)('div', {
                        className: _.repliedTextPreview,
                        children: (0, n.jsx)('span', {
                            className: _.repliedTextPlaceholder,
                            children: I.NW.string(I.t.mE3KJC)
                        })
                    });
                default:
                    (0, v.vE)(a);
            }
        })(e, f, k),
        Z = l.useMemo(() => (e.compact ? (0, M.Z)((0, j.vc)(o()(), 'LT')) : null), [e.compact]);
    null != t &&
        null != a &&
        (s = I.NW.formatToPlainString(I.t.RhbQ2N, {
            author: null == a ? void 0 : a.nick,
            repliedAuthor: null == t ? void 0 : t.nick
        }));
    let G = i.type === T.uaV.CONTEXT_MENU_COMMAND;
    return (0, n.jsxs)('div', {
        id: (0, E.Gq)(i),
        className: r()(_.repliedMessage, Z, G ? _.contextCommandMessage : { [_.messageSpine]: !x || (!h && C) }),
        'aria-label': s,
        children: [
            x &&
                h &&
                C &&
                (0, n.jsx)(c.P3F, {
                    tag: 'div',
                    'aria-label': I.NW.string(I.t.dpjpOj),
                    className: r()(_.repliedMessageClickableSpine, { [_.repliedMessageContentHovered]: f }),
                    onClick: e.onClickReply,
                    onMouseEnter: k,
                    onMouseLeave: k
                }),
            w,
            V,
            U
        ]
    });
}

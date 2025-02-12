t.d(s, {
    Z: () => k,
    f: () => D
}),
    t(47120);
var l = t(200651),
    n = t(192379),
    a = t(120356),
    i = t.n(a),
    r = t(913527),
    o = t.n(r),
    c = t(481060),
    u = t(100527),
    d = t(906732),
    m = t(407477),
    g = t(978003),
    h = t(39154),
    p = t(245216),
    C = t(79390),
    x = t(869765),
    v = t(403132),
    N = t(378233),
    E = t(768581),
    P = t(55935),
    M = t(823379),
    T = t(453687),
    I = t(930282),
    S = t(123145),
    _ = t(223021),
    L = t(217702),
    j = t(981631),
    A = t(388032),
    R = t(732175);
function f(e) {
    let { width: s = 12, height: t = 8, color: n = 'currentColor', className: a, foreground: i } = e;
    return (0, l.jsx)('svg', {
        className: a,
        width: s,
        height: t,
        viewBox: '0 0 12 8',
        children: (0, l.jsx)('path', {
            d: 'M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z',
            className: i,
            fill: n
        })
    });
}
function O(e) {
    let { width: s = 18, height: t = 18, className: n, foreground: a } = e;
    return (0, l.jsx)('svg', {
        className: n,
        width: s,
        height: t,
        viewBox: '0 0 18 18',
        children: (0, l.jsx)('path', {
            fill: '#3ba55c',
            d: 'M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0',
            className: a
        })
    });
}
function D(e, s, t, n, a, i) {
    let r, o, u, d;
    let m = (0, h.Z)(e),
        { trailingIconClass: x, leadingIconClass: v, iconSize: E } = i,
        P = null == s || '' === s || (Array.isArray(s) && 0 === s.length),
        M = (0, N.cv)(m).length > 0,
        T = null != m.interaction,
        S = m.hasFlag(j.iLy.IS_VOICE_MESSAGE),
        _ = m.isPoll(),
        L = m.type === j.uaV.POLL_RESULT;
    if (
        ((0, g.Z)(e) &&
            (d = (0, l.jsx)(p.Z, {
                size: 'custom',
                className: v,
                width: E,
                height: E
            })),
        t)
    )
        r = A.intl.string(A.t.XAkOo6);
    else if (n) r = A.intl.string(A.t.G7p6v7);
    else if (m.type === j.uaV.CHANNEL_PINNED_MESSAGE) r = A.intl.string(A.t.sCfDDg);
    else if (P) {
        if (_) {
            var R, f;
            o = null == m ? void 0 : null === (f = m.poll) || void 0 === f ? void 0 : null === (R = f.question) || void 0 === R ? void 0 : R.text;
        } else
            L
                ? (r = (0, C.N4)(m))
                : M
                  ? (r = A.intl.string(A.t.kHdYCQ))
                  : T
                    ? (r = A.intl.string(A.t['E+6SSU']))
                    : S
                      ? (r = A.intl.string(A.t['XC3A5+']))
                      : ((r = A.intl.string(A.t['6hGo0d'])),
                        (u = (0, l.jsx)(c.XBm, {
                            size: 'custom',
                            color: 'currentColor',
                            className: x,
                            width: E,
                            height: E
                        })));
    } else
        o = (0, l.jsx)(I.ZP, {
            message: m,
            content: s,
            className: a
        });
    return (
        M
            ? (u = (0, l.jsx)(c.B7q, {
                  size: 'custom',
                  color: 'currentColor',
                  className: x,
                  width: E,
                  height: E
              }))
            : T
              ? (u = (0, l.jsx)(c.SsZ, {
                    size: 'custom',
                    color: 'currentColor',
                    className: x,
                    width: E,
                    height: E
                }))
              : S
                ? (u = (0, l.jsx)(c.S6n, {
                      size: 'custom',
                      color: 'currentColor',
                      className: x,
                      width: (19 / 24) * E,
                      height: E
                  }))
                : (m.attachments.length > 0 || m.embeds.length > 0) &&
                  !L &&
                  (u = (0, l.jsx)(c.XBm, {
                      size: 'custom',
                      color: 'currentColor',
                      className: x,
                      width: E,
                      height: E
                  })),
        {
            contentPlaceholder: r,
            renderedContent: o,
            trailingIcon: u,
            leadingIcon: d
        }
    );
}
function k(e) {
    let s;
    let { repliedAuthor: t, baseAuthor: a, baseMessage: r, referencedMessage: g, renderPopout: h, isReplySpineClickable: p, showReplySpine: C } = e,
        { canShowReactionsOnMessageHover: N } = m.ZP.useExperiment({ location: 'RepliedMessage' }, { autoTrackExposure: !1 }),
        [I, k] = n.useState(!1),
        y = n.useMemo(() => (null != h && g.state === x.Y.LOADED ? (e) => h(e, g.message) : void 0), [g, h]),
        V = n.useCallback(() => k((e) => !e), []),
        U = (function (e, s, t) {
            let { referencedMessage: n, channel: a, compact: r, isReplyAuthorBlocked: o, repliedAuthor: m, showAvatarPopout: g, onClickAvatar: h, onContextMenu: p, onPopoutRequestClose: C } = e,
                { analyticsLocations: v } = (0, d.ZP)(u.Z.AVATAR);
            if (r || n.state !== x.Y.LOADED || o)
                return t === j.uaV.CONTEXT_MENU_COMMAND
                    ? (0, l.jsx)('div', {
                          className: R.replyChatIconContainer,
                          children: (0, l.jsx)(c.kBi, { size: 'xs' })
                      })
                    : (0, l.jsx)('div', {
                          className: R.replyBadge,
                          children: (0, l.jsx)(f, { className: R.replyIcon })
                      });
            if (n.message.type === j.uaV.USER_JOIN || n.message.type === j.uaV.ROLE_SUBSCRIPTION_PURCHASE || n.message.type === j.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || n.message.type === j.uaV.GUILD_GAMING_STATS_PROMPT) return (0, l.jsx)(O, { className: R.userJoinSystemMessageIcon });
            if (n.message.type === j.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, l.jsx)(c.Prq, {
                    size: 'md',
                    color: 'currentColor',
                    className: R.ticketIcon
                });
            if (n.message.type === j.uaV.POLL_RESULT)
                return (0, l.jsx)(c.QDj, {
                    className: R.repliedTextContentLeadingIcon,
                    width: L.WW,
                    height: L.WW,
                    size: 'custom'
                });
            let N = () => {
                var e, s;
                return (
                    (e = n.message.author),
                    (s = a.guild_id),
                    (0, l.jsx)('img', {
                        alt: '',
                        src:
                            (null == m ? void 0 : m.guildMemberAvatar) != null && null != s
                                ? (0, E.JM)({
                                      guildId: s,
                                      userId: e.id,
                                      avatar: m.guildMemberAvatar
                                  })
                                : e.getAvatarURL(s, 16),
                        onClick: h,
                        onContextMenu: p,
                        className: i()({
                            [R.replyAvatar]: !0,
                            [R.clickable]: null != h
                        })
                    })
                );
            };
            return null != s && null != g
                ? (0, l.jsx)(d.Gt, {
                      value: v,
                      children: (0, l.jsx)(c.yRy, {
                          renderPopout: s,
                          shouldShow: g,
                          position: 'right',
                          onRequestClose: C,
                          children: N
                      })
                  })
                : (0, l.jsx)(d.Gt, {
                      value: v,
                      children: N()
                  });
        })(e, y, r.type),
        w = (function (e, s) {
            let { baseMessage: t, channel: n, referencedMessage: a, showUsernamePopout: i, onClickUsername: r, onContextMenu: o, onPopoutRequestClose: c } = e,
                u = (null == a ? void 0 : a.state) === x.Y.LOADED ? a.message : void 0;
            return null == u || u.type === j.uaV.USER_JOIN || u.type === j.uaV.ROLE_SUBSCRIPTION_PURCHASE || u.type === j.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || u.type === j.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || u.type === j.uaV.GUILD_GAMING_STATS_PROMPT || u.type === j.uaV.POLL_RESULT
                ? null
                : (0, l.jsx)(S.Z, {
                      message: u,
                      channel: n,
                      compact: !0,
                      withMentionPrefix: (0, v.Z)(t, u),
                      showPopout: i,
                      renderPopout: s,
                      onClick: r,
                      onContextMenu: o,
                      onPopoutRequestClose: c,
                      isRepliedMessage: !0
                  });
        })(e, y),
        Z = (function (e, s, t) {
            let { content: n, referencedMessage: a, isReplyAuthorBlocked: r, isReplyAuthorIgnored: o, onClickReply: u } = e,
                d = a.state !== x.Y.DELETED ? u : void 0;
            switch (a.state) {
                case x.Y.LOADED: {
                    let {
                        contentPlaceholder: e,
                        renderedContent: u,
                        trailingIcon: m,
                        leadingIcon: g
                    } = D(a.message, n, r, o, R.repliedTextContent, {
                        trailingIconClass: R.repliedTextContentTrailingIcon,
                        leadingIconClass: R.repliedTextContentLeadingIcon,
                        iconSize: L.WW
                    });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            g,
                            (0, l.jsx)(c.P3F, {
                                className: i()(R.repliedTextPreview, R.clickable, { [R.repliedMessageClickableSpineHovered]: s }),
                                onClick: d,
                                onMouseEnter: t,
                                onMouseLeave: t,
                                children: (0, l.jsx)(c.nuw, {
                                    children:
                                        null != u
                                            ? u
                                            : (0, l.jsx)('span', {
                                                  className: R.repliedTextPlaceholder,
                                                  children: e
                                              })
                                })
                            }),
                            m
                        ]
                    });
                }
                case x.Y.NOT_LOADED:
                    return (0, l.jsx)(c.P3F, {
                        className: i()(R.repliedTextPreview, R.clickable),
                        onClick: d,
                        children: (0, l.jsx)('span', {
                            className: R.repliedTextPlaceholder,
                            children: A.intl.string(A.t['1i+hMj'])
                        })
                    });
                case x.Y.DELETED:
                    return (0, l.jsx)('div', {
                        className: R.repliedTextPreview,
                        children: (0, l.jsx)('span', {
                            className: R.repliedTextPlaceholder,
                            children: A.intl.string(A.t.mE3KJC)
                        })
                    });
                default:
                    (0, M.vE)(a);
            }
        })(e, I, V),
        G = n.useMemo(() => (e.compact ? (0, _.Z)((0, P.vc)(o()(), 'LT')) : null), [e.compact]);
    null != t &&
        null != a &&
        (s = A.intl.formatToPlainString(A.t.RhbQ2N, {
            author: null == a ? void 0 : a.nick,
            repliedAuthor: null == t ? void 0 : t.nick
        }));
    let b = r.type === j.uaV.CONTEXT_MENU_COMMAND;
    return (0, l.jsxs)('div', {
        id: (0, T.Gq)(r),
        className: i()(R.repliedMessage, G, b ? R.contextCommandMessage : { [R.messageSpine]: !N || (!p && C) }),
        'aria-label': s,
        children: [
            N &&
                p &&
                C &&
                (0, l.jsx)(c.P3F, {
                    tag: 'div',
                    'aria-label': A.intl.string(A.t.dpjpOj),
                    className: i()(R.repliedMessageClickableSpine, { [R.repliedMessageContentHovered]: I }),
                    onClick: e.onClickReply,
                    onMouseEnter: V,
                    onMouseLeave: V
                }),
            U,
            w,
            Z
        ]
    });
}

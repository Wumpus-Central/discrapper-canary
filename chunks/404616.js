(n.d(t, {
    Lp: () => ei,
    NN: () => ed,
    TJ: () => eo,
    ZP: () => ec,
    au: () => eb,
    kZ: () => ef,
    m9: () => eg,
    og: () => ej
}),
    n(388685));
var r = n(255367),
    a = n(73800),
    s = n(120356),
    l = n.n(s),
    i = n(512722),
    o = n.n(i),
    c = n(913527),
    u = n.n(c),
    d = n(94171),
    m = n(91192),
    h = n(442837),
    g = n(692547),
    f = n(481060),
    b = n(738619),
    p = n(393238),
    j = n(963374),
    x = n(884338),
    v = n(168107),
    O = n(480916),
    y = n(446489),
    P = n(824578),
    N = n(95398),
    C = n(247206),
    w = n(406432),
    Z = n(169525),
    S = n(566006),
    _ = n(255269),
    T = n(937889),
    k = n(443877),
    M = n(524444),
    E = n(287151),
    I = n(267128),
    R = n(695346),
    A = n(433355),
    L = n(592125),
    B = n(496675),
    D = n(699516),
    F = n(451478),
    z = n(55935),
    U = n(109434),
    W = n(360004),
    H = n(456269),
    G = n(109590),
    Q = n(660189),
    J = n(208970),
    X = n(73315),
    q = n(470623),
    K = n(196255),
    V = n(858543),
    Y = n(265641),
    $ = n(627896),
    ee = n(883728),
    et = n(981631),
    en = n(217702),
    er = n(388032),
    ea = n(602512),
    es = n(73433);
function el(e) {
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
let ei = 72,
    eo = 72,
    ec = a.memo(function (e) {
        let { threadId: t, goToThread: n, observePostVisibilityAnalytics: s, overrideMedia: i, className: c, containerWidth: u } = e,
            {
                channel: g,
                isOpen: b,
                messageCount: j,
                firstMessage: x,
                content: v,
                media: O
            } = (function (e) {
                let { threadId: t, overrideMedia: n } = e,
                    r = (0, h.e7)([L.Z], () => L.Z.getChannel(t));
                o()(null != r, 'the thread should not be null here, a store must have missed an update');
                let a = (0, h.e7)([A.ZP], () => A.ZP.getCurrentSidebarChannelId(r.parent_id) === r.id),
                    { firstMessage: s } = (0, G.cl)(r),
                    { content: l, firstMedia: i } = (0, H.mX)({ firstMessage: s }),
                    { messageCountText: c } = (0, H.nP)(r);
                return {
                    channel: r,
                    isOpen: a,
                    messageCount: c,
                    firstMessage: s,
                    content: l,
                    media: null != n ? n : i
                };
            })({
                threadId: t,
                overrideMedia: i
            }),
            { ref: y, height: P } = (0, p.ZP)(),
            N = (0, q.xH)((e) => e.setCardHeight, d.X);
        (a.useEffect(() => {
            null != P && N(t, P);
        }, [P, N, t]),
            a.useEffect(() => {
                null == s || s(y.current, t);
            }, [y, s, t]));
        let C = a.useRef(null),
            { handleLeftClick: w, handleRightClick: Z } = (0, ee.Z)({
                facepileRef: C,
                goToThread: n,
                channel: g
            }),
            S = (0, m.JA)(t),
            { role: _, onFocus: T } = S,
            k = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            a = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) ((n = s[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                        return a;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) ((n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
                }
                return a;
            })(S, ['role', 'onFocus']),
            { isFocused: M, handleFocus: E, handleBlur: I } = (0, Y.Z)(T);
        return (0, r.jsxs)('div', {
            ref: y,
            'data-item-id': t,
            onClick: w,
            onContextMenu: Z,
            className: l()(ea.container, c, { [ea.isOpen]: b }),
            children: [
                (0, r.jsx)(
                    f.P3F,
                    el(
                        {
                            onClick: w,
                            focusProps: { ringTarget: y },
                            onContextMenu: Z,
                            'aria-label': er.intl.formatToPlainString(er.t.pgYN6e, {
                                title: g.name,
                                count: j
                            }),
                            className: ea.focusTarget,
                            onFocus: E,
                            onBlur: I
                        },
                        k
                    )
                ),
                (0, r.jsxs)('div', {
                    className: ea.left,
                    children: [
                        (0, r.jsx)(f.y5t, {
                            children: (0, r.jsx)(eu, {
                                channel: g,
                                firstMessage: x,
                                content: v,
                                hasMediaAttachment: null != O,
                                containerWidth: u
                            })
                        }),
                        (0, r.jsx)(f.Rny, {
                            enabled: !M,
                            children: (0, r.jsx)(eh, {
                                channel: g,
                                firstMessage: x,
                                facepileRef: C
                            })
                        })
                    ]
                }),
                (null == x ? void 0 : x.blocked) || null == O
                    ? null
                    : (0, r.jsx)(ev, {
                          channel: g,
                          firstMedia: O
                      })
            ]
        });
    });
function eu(e) {
    let { channel: t, firstMessage: n, content: a, hasMediaAttachment: s, containerWidth: i } = e,
        { isNew: o, hasUnreads: c } = (0, H.J$)(t),
        u = ed(t),
        { postTitleRef: d, isNewBadgeOverflow: m } = (0, $.x)(o, 24, i);
    return (0, r.jsxs)('div', {
        className: ea.body,
        children: [
            (0, r.jsx)(V.ZP, { channel: t }),
            (0, r.jsx)('div', {
                className: l()(ea.header, { [ea.withNewBadgeOverflow]: m }),
                children: (0, r.jsxs)('div', {
                    className: ea.headerText,
                    children: [
                        (0, r.jsx)(f.X6q, {
                            variant: 'heading-lg/semibold',
                            color: c ? 'header-primary' : 'text-muted',
                            lineClamp: 2,
                            className: ea.postTitleText,
                            children: (0, r.jsxs)('span', {
                                ref: d,
                                children: [
                                    u,
                                    o &&
                                        (0, r.jsx)('span', {
                                            className: ea.newBadgeWrapper,
                                            children: (0, r.jsx)(f.IGR, {
                                                className: ea.newBadge,
                                                color: g.Z.unsafe_rawColors.BRAND_260.css,
                                                text: er.intl.string(er.t.y2b7CA)
                                            })
                                        })
                                ]
                            })
                        }),
                        o &&
                            m &&
                            (0, r.jsx)(f.IGR, {
                                className: ea.newBadge,
                                color: g.Z.unsafe_rawColors.BRAND_260.css,
                                text: er.intl.string(er.t.y2b7CA)
                            })
                    ]
                })
            }),
            (0, r.jsx)('div', {
                className: ea.message,
                children: (0, r.jsx)(em, {
                    channel: t,
                    message: n,
                    content: a,
                    hasMediaAttachment: s,
                    hasUnreads: c
                })
            })
        ]
    });
}
function ed(e) {
    let t = (0, h.e7)([J.Z], () => J.Z.getHasSearchResults(e.parent_id)),
        n = (0, h.e7)([J.Z], () => J.Z.getSearchQuery(e.parent_id)),
        r = (0, W.d)(e.guild_id, 'forum_post_use_highlighted_channel_name'),
        s = a.useMemo(() => (0, j.nC)(t && null != n ? n : '', r), [t, n, r]);
    return a.useMemo(
        () =>
            (0, T.ZP)(
                {
                    content: e.name,
                    embeds: []
                },
                { postProcessor: s }
            ).content,
        [e.name, s]
    );
}
let em = a.memo(function (e) {
    let { message: t, channel: n, content: a, hasMediaAttachment: s, hasUnreads: i } = e,
        { isBlocked: o, isIgnored: c } = (0, h.cj)([D.Z], () => ({
            isBlocked: null != t && D.Z.isBlockedForMessage(t),
            isIgnored: null != t && D.Z.isIgnoredForMessage(t)
        })),
        u = (0, h.e7)([Q.Z], () => Q.Z.isLoading(n.id)),
        d = (0, h.e7)([B.Z], () => B.Z.can(et.Plq.MANAGE_MESSAGES, n)),
        m = R.cC.useSetting(),
        g = null;
    if (o)
        g = (0, r.jsx)(f.Text, {
            className: ea.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: er.intl.string(er.t.Lkp2fH)
        });
    else if (c)
        g = (0, r.jsx)(f.Text, {
            className: ea.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: er.intl.string(er.t.yWK7ZG)
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null
                  }
                : (0, I.f)(t, a, o, c, l()(ea.messageContent, es.inlineFormat, es.__invalid_smallFontSize), {
                      leadingIconClass: ea.messageContentLeadingIcon,
                      trailingIconClass: ea.messageContentTrailingIcon,
                      iconSize: en.WW
                  });
        g =
            null != n
                ? (0, r.jsx)(f.Text, {
                      variant: 'text-sm/semibold',
                      color: i ? 'header-secondary' : 'text-muted',
                      children: n
                  })
                : s
                  ? null
                  : (0, r.jsx)(f.Text, {
                        tag: 'span',
                        variant: 'text-sm/medium',
                        color: i ? 'header-secondary' : 'text-muted',
                        className: ea.messageContent,
                        children: null == t ? (u ? null : er.intl.string(er.t.mE3KJC)) : e
                    });
    }
    return (0, r.jsxs)(N.aQ.Provider, {
        value: (0, _.Z)(m, d),
        children: [
            !o &&
                (0, r.jsx)(K.Z, {
                    channel: n,
                    message: t,
                    renderColon: null != g,
                    hasUnreads: i
                }),
            (0, r.jsx)(f.Rny, {
                className: ea.messageFocusBlock,
                children: g
            })
        ]
    });
});
function eh(e) {
    let { channel: t, facepileRef: n, firstMessage: a } = e,
        s = (0, P.Q)(t.id),
        l = (null == a ? void 0 : a.reactions) != null && a.reactions.length > 0;
    return (0, r.jsxs)('div', {
        className: ea.footer,
        children: [
            l || null == a
                ? null
                : (0, r.jsx)(ef, {
                      firstMessage: a,
                      channel: t
                  }),
            null == a
                ? null
                : (0, r.jsx)(eb, {
                      firstMessage: a,
                      channel: t
                  }),
            (0, r.jsx)(eg, {
                channel: t,
                iconSize: 14
            }),
            (0, r.jsx)('span', {
                className: ea.bullet,
                children: '\u2022'
            }),
            s.length > 0
                ? (0, r.jsxs)('div', {
                      className: ea.typing,
                      children: [
                          (0, r.jsx)(ej, {
                              channel: t,
                              userIds: s,
                              facepileRef: n
                          }),
                          (0, r.jsx)('div', {
                              className: ea.dots,
                              children: (0, r.jsx)(f.bbz, {
                                  themed: !0,
                                  dotRadius: 2
                              })
                          }),
                          (0, r.jsx)(b.ZP, {
                              channel: t,
                              className: ea.typingUsers,
                              renderDots: !1
                          })
                      ]
                  })
                : (0, r.jsx)(ep, { channel: t })
        ]
    });
}
function eg(e) {
    let { channel: t, iconSize: n, showReadState: a = !1 } = e,
        { messageCountText: s, unreadCount: i } = (0, H.nP)(t);
    return (0, r.jsxs)('div', {
        className: l()(ea.messageCountBox, { [ea.hasRead]: a && null == i }),
        children: [
            (0, r.jsx)('span', {
                className: ea.messageCountIcon,
                children: (0, r.jsx)(f.kBi, {
                    size: 'custom',
                    color: 'currentColor',
                    width: n,
                    height: n
                })
            }),
            'number' == typeof s
                ? (0, r.jsx)(y.Z, {
                      value: s,
                      digitWidth: 9,
                      className: ea.messageCountText
                  })
                : (0, r.jsx)('div', {
                      className: ea.messageCountText,
                      children: s
                  }),
            null == i
                ? null
                : (0, r.jsxs)(f.Text, {
                      className: ea.newMessageCount,
                      variant: 'text-sm/semibold',
                      color: 'text-brand',
                      children: ['(', er.intl.format(er.t.z3PEtr, { count: i }), ')']
                  })
        ]
    });
}
function ef(e) {
    let { firstMessage: t, channel: n } = e,
        a = (0, h.e7)([L.Z], () => L.Z.getChannel(n.parent_id)),
        s = (0, H.Bs)(a),
        { disableReactionCreates: l, isLurking: i, isPendingMember: o } = (0, k.Z)(n);
    return null == s || l
        ? null
        : (0, r.jsx)(E.le, {
              className: ea.updateReactionButton,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: i,
              isPendingMember: o,
              emoji: s,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: S.O.NORMAL,
              emojiSize: 'reaction',
              emojiSizeTooltip: 'reaction'
          });
}
function eb(e) {
    var t;
    let { firstMessage: n, channel: a } = e,
        s = (0, H.IN)(n),
        { disableReactionUpdates: l, isLurking: i, isPendingMember: o } = (0, k.Z)(a);
    return null == s
        ? null
        : (0, r.jsx)(
              E.le,
              el(
                  {
                      className: ea.updateReactionButton,
                      message: n,
                      readOnly: l || a.isArchivedLockedThread(),
                      isLurking: i,
                      isPendingMember: o,
                      useChatFontScaling: !1,
                      type: s.burst_count >= s.count ? S.O.BURST : S.O.NORMAL,
                      emojiSize: 'reaction',
                      emojiSizeTooltip: 'reaction'
                  },
                  s
              ),
              ''.concat(null != (t = s.emoji.id) ? t : 0, ':').concat(s.emoji.name)
          );
}
function ep(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: a } = (0, U.H)(n.parent_id),
        s = (0, H.xw)(n, a),
        l = null == (t = n.threadMetadata) ? void 0 : t.createTimestamp,
        i = null == l ? null : er.intl.formatToPlainString(er.t['13euCQ'], { timestamp: (0, z.vc)(u()(l), 'LLLL') });
    return (0, r.jsx)(f.ua7, {
        text: i,
        tooltipClassName: ea.timestampTooltip,
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                f.Text,
                ((t = el(
                    {
                        className: ea.__invalid_activityText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary'
                    },
                    e
                )),
                (n = n = { children: s }),
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
            );
        }
    });
}
function ej(e) {
    let { channel: t, userIds: n, facepileRef: a } = e,
        s = (0, H.iM)(t, n);
    return (0, r.jsx)('div', {
        ref: a,
        children: (0, r.jsx)(x.ZP, {
            className: ea.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: s,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0
        })
    });
}
function ex(e) {
    let { firstMedia: t, shouldObscure: n, obscureReason: a, shouldShowAgeVerification: s } = e,
        i = (0, h.e7)([F.Z], () => F.Z.isFocused()),
        o = (0, w.d$)(t.src),
        c = R.QK.useSetting(),
        u = (0, Z.MC)(a),
        { src: d, width: m, height: g, alt: b } = t;
    if (s) {
        var p;
        return (0, r.jsx)('div', {
            'aria-label': null != (p = null != u ? u : b) ? p : er.intl.string(er.t.hqwnc3),
            className: l()(ea.thumbnailContainer, ea.obscuredThumbnailPlaceholder),
            style: {
                maxWidth: eo,
                maxHeight: ei,
                height: g,
                width: m
            }
        });
    }
    return d.startsWith('data:')
        ? (0, r.jsx)(f.Eep, {
              src: d,
              width: m,
              height: g,
              minWidth: eo,
              minHeight: ei,
              alt: null != b && n ? u : b,
              className: ea.thumbnailContainer,
              imageClassName: l()(ea.thumbnailOverride, { [ea.obscured]: n })
          })
        : (0, M.Yi)({
              src: d,
              width: m,
              height: g,
              minWidth: eo,
              minHeight: ei,
              alt: null != b && n ? u : b,
              autoPlay: c,
              animated: o && !n && i,
              srcIsAnimated: t.srcIsAnimated,
              containerClassName: ea.thumbnailContainer,
              imageClassName: l()(ea.thumbnailOverride, { [ea.obscured]: n }),
              analyticsSource: 'ForumPostMediaPreview'
          });
}
function ev(e) {
    let { channel: t, firstMedia: n } = e,
        [a, s] = (0, Z.hL)({
            media: n,
            channel: t
        }),
        l = (0, C.JO)(s);
    return (0, r.jsx)(f.Rny, {
        enabled: !0,
        children: (0, r.jsxs)('div', {
            className: ea.bodyMedia,
            onClick: function (e) {
                (e.stopPropagation(), l && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), v.Z.showAgeVerificationGetStartedModal(O.cU.FORUM_POST_MEDIA_PREVIEW)));
            },
            children: [
                (0, r.jsx)(ex, {
                    firstMedia: n,
                    shouldObscure: a,
                    obscureReason: s,
                    shouldShowAgeVerification: l
                }),
                a &&
                    (0, r.jsx)(X.Z, {
                        iconClassname: ea.obscuredTag,
                        obscureReason: s
                    })
            ]
        })
    });
}

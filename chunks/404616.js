n.d(t, {
    Lp: () => eo,
    NN: () => eu,
    TJ: () => es,
    ZP: () => ea,
    au: () => eg,
    kZ: () => em,
    m9: () => ep,
    og: () => eb
}),
    n(388685);
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(512722),
    a = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(94171),
    h = n(91192),
    p = n(442837),
    m = n(692547),
    g = n(481060),
    f = n(738619),
    b = n(393238),
    j = n(963374),
    v = n(884338),
    O = n(168107),
    y = n(480916),
    x = n(446489),
    S = n(824578),
    T = n(95398),
    P = n(247206),
    C = n(406432),
    E = n(169525),
    N = n(566006),
    R = n(255269),
    I = n(937889),
    w = n(443877),
    Z = n(524444),
    A = n(287151),
    M = n(267128),
    _ = n(695346),
    k = n(433355),
    L = n(592125),
    D = n(496675),
    U = n(699516),
    F = n(451478),
    B = n(55935),
    V = n(109434),
    H = n(456269),
    G = n(109590),
    z = n(660189),
    W = n(208970),
    K = n(73315),
    J = n(470623),
    X = n(196255),
    Y = n(858543),
    q = n(265641),
    $ = n(627896),
    Q = n(883728),
    ee = n(981631),
    et = n(217702),
    en = n(388032),
    ei = n(602512),
    er = n(73433);
function el(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let eo = 72,
    es = 72,
    ea = r.memo(function (e) {
        let { threadId: t, goToThread: n, observePostVisibilityAnalytics: l, overrideMedia: s, className: c, containerWidth: u } = e,
            {
                channel: m,
                isOpen: f,
                messageCount: j,
                firstMessage: v,
                content: O,
                media: y
            } = (function (e) {
                let { threadId: t, overrideMedia: n } = e,
                    i = (0, p.e7)([L.Z], () => L.Z.getChannel(t));
                a()(null != i, 'the thread should not be null here, a store must have missed an update');
                let r = (0, p.e7)([k.ZP], () => k.ZP.getCurrentSidebarChannelId(i.parent_id) === i.id),
                    { firstMessage: l } = (0, G.cl)(i),
                    { content: o, firstMedia: s } = (0, H.mX)({ firstMessage: l }),
                    { messageCountText: c } = (0, H.nP)(i);
                return {
                    channel: i,
                    isOpen: r,
                    messageCount: c,
                    firstMessage: l,
                    content: o,
                    media: null != n ? n : s
                };
            })({
                threadId: t,
                overrideMedia: s
            }),
            { ref: x, height: S } = (0, b.ZP)(),
            T = (0, J.xH)((e) => e.setCardHeight, d.X);
        r.useEffect(() => {
            null != S && T(t, S);
        }, [S, T, t]),
            r.useEffect(() => {
                null == l || l(x.current, t);
            }, [x, l, t]);
        let P = r.useRef(null),
            { handleLeftClick: C, handleRightClick: E } = (0, Q.Z)({
                facepileRef: P,
                goToThread: n,
                channel: m
            }),
            N = (0, h.JA)(t),
            { role: R, onFocus: I } = N,
            w = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            l = Object.keys(e);
                        for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(N, ['role', 'onFocus']),
            { isFocused: Z, handleFocus: A, handleBlur: M } = (0, q.Z)(I);
        return (0, i.jsxs)('div', {
            ref: x,
            'data-item-id': t,
            onClick: C,
            onContextMenu: E,
            className: o()(ei.container, c, { [ei.isOpen]: f }),
            children: [
                (0, i.jsx)(
                    g.P3F,
                    el(
                        {
                            onClick: C,
                            focusProps: { ringTarget: x },
                            onContextMenu: E,
                            'aria-label': en.intl.formatToPlainString(en.t.pgYN6e, {
                                title: m.name,
                                count: j
                            }),
                            className: ei.focusTarget,
                            onFocus: A,
                            onBlur: M
                        },
                        w
                    )
                ),
                (0, i.jsxs)('div', {
                    className: ei.left,
                    children: [
                        (0, i.jsx)(g.y5t, {
                            children: (0, i.jsx)(ec, {
                                channel: m,
                                firstMessage: v,
                                content: O,
                                hasMediaAttachment: null != y,
                                containerWidth: u
                            })
                        }),
                        (0, i.jsx)(g.Rny, {
                            enabled: !Z,
                            children: (0, i.jsx)(eh, {
                                channel: m,
                                firstMessage: v,
                                facepileRef: P
                            })
                        })
                    ]
                }),
                (null == v ? void 0 : v.blocked) || null == y
                    ? null
                    : (0, i.jsx)(ev, {
                          channel: m,
                          firstMedia: y
                      })
            ]
        });
    });
function ec(e) {
    let { channel: t, firstMessage: n, content: r, hasMediaAttachment: l, containerWidth: s } = e,
        { isNew: a, hasUnreads: c } = (0, H.J$)(t),
        u = eu(t),
        { postTitleRef: d, isNewBadgeOverflow: h } = (0, $.x)(a, 24, s);
    return (0, i.jsxs)('div', {
        className: ei.body,
        children: [
            (0, i.jsx)(Y.ZP, { channel: t }),
            (0, i.jsx)('div', {
                className: o()(ei.header, { [ei.withNewBadgeOverflow]: h }),
                children: (0, i.jsxs)('div', {
                    className: ei.headerText,
                    children: [
                        (0, i.jsx)(g.X6q, {
                            variant: 'heading-lg/semibold',
                            color: c ? 'header-primary' : 'text-muted',
                            lineClamp: 2,
                            className: ei.postTitleText,
                            children: (0, i.jsxs)('span', {
                                ref: d,
                                children: [
                                    u,
                                    a &&
                                        (0, i.jsx)('span', {
                                            className: ei.newBadgeWrapper,
                                            children: (0, i.jsx)(g.IGR, {
                                                className: ei.newBadge,
                                                color: m.Z.unsafe_rawColors.BRAND_260.css,
                                                text: en.intl.string(en.t.y2b7CA)
                                            })
                                        })
                                ]
                            })
                        }),
                        a &&
                            h &&
                            (0, i.jsx)(g.IGR, {
                                className: ei.newBadge,
                                color: m.Z.unsafe_rawColors.BRAND_260.css,
                                text: en.intl.string(en.t.y2b7CA)
                            })
                    ]
                })
            }),
            (0, i.jsx)('div', {
                className: ei.message,
                children: (0, i.jsx)(ed, {
                    channel: t,
                    message: n,
                    content: r,
                    hasMediaAttachment: l,
                    hasUnreads: c
                })
            })
        ]
    });
}
function eu(e) {
    let t = (0, p.e7)([W.Z], () => W.Z.getHasSearchResults(e.parent_id)),
        n = (0, p.e7)([W.Z], () => W.Z.getSearchQuery(e.parent_id)),
        i = r.useMemo(() => (0, j.nC)(t && null != n ? n : ''), [t, n]);
    return r.useMemo(
        () =>
            (0, I.ZP)(
                {
                    content: e.name,
                    embeds: []
                },
                { postProcessor: i }
            ).content,
        [e.name, i]
    );
}
let ed = r.memo(function (e) {
    let { message: t, channel: n, content: r, hasMediaAttachment: l, hasUnreads: s } = e,
        { isBlocked: a, isIgnored: c } = (0, p.cj)([U.Z], () => ({
            isBlocked: null != t && U.Z.isBlockedForMessage(t),
            isIgnored: null != t && U.Z.isIgnoredForMessage(t)
        })),
        u = (0, p.e7)([z.Z], () => z.Z.isLoading(n.id)),
        d = (0, p.e7)([D.Z], () => D.Z.can(ee.Plq.MANAGE_MESSAGES, n)),
        h = _.cC.useSetting(),
        m = null;
    if (a)
        m = (0, i.jsx)(g.Text, {
            className: ei.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: en.intl.string(en.t.Lkp2fH)
        });
    else if (c)
        m = (0, i.jsx)(g.Text, {
            className: ei.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: en.intl.string(en.t.yWK7ZG)
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null
                  }
                : (0, M.f)(t, r, a, c, o()(ei.messageContent, er.inlineFormat, er.__invalid_smallFontSize), {
                      leadingIconClass: ei.messageContentLeadingIcon,
                      trailingIconClass: ei.messageContentTrailingIcon,
                      iconSize: et.WW
                  });
        m =
            null != n
                ? (0, i.jsx)(g.Text, {
                      variant: 'text-sm/semibold',
                      color: s ? 'header-secondary' : 'text-muted',
                      children: n
                  })
                : l
                  ? null
                  : (0, i.jsx)(g.Text, {
                        tag: 'span',
                        variant: 'text-sm/medium',
                        color: s ? 'header-secondary' : 'text-muted',
                        className: ei.messageContent,
                        children: null == t ? (u ? null : en.intl.string(en.t.mE3KJC)) : e
                    });
    }
    return (0, i.jsxs)(T.aQ.Provider, {
        value: (0, R.Z)(h, d),
        children: [
            !a &&
                (0, i.jsx)(X.Z, {
                    channel: n,
                    message: t,
                    renderColon: null != m,
                    hasUnreads: s
                }),
            (0, i.jsx)(g.Rny, {
                className: ei.messageFocusBlock,
                children: m
            })
        ]
    });
});
function eh(e) {
    let { channel: t, facepileRef: n, firstMessage: r } = e,
        l = (0, S.Q)(t.id),
        o = (null == r ? void 0 : r.reactions) != null && r.reactions.length > 0;
    return (0, i.jsxs)('div', {
        className: ei.footer,
        children: [
            o || null == r
                ? null
                : (0, i.jsx)(em, {
                      firstMessage: r,
                      channel: t
                  }),
            null == r
                ? null
                : (0, i.jsx)(eg, {
                      firstMessage: r,
                      channel: t
                  }),
            (0, i.jsx)(ep, {
                channel: t,
                iconSize: 14
            }),
            (0, i.jsx)('span', {
                className: ei.bullet,
                children: '\u2022'
            }),
            l.length > 0
                ? (0, i.jsxs)('div', {
                      className: ei.typing,
                      children: [
                          (0, i.jsx)(eb, {
                              channel: t,
                              userIds: l,
                              facepileRef: n
                          }),
                          (0, i.jsx)('div', {
                              className: ei.dots,
                              children: (0, i.jsx)(g.bbz, {
                                  themed: !0,
                                  dotRadius: 2
                              })
                          }),
                          (0, i.jsx)(f.Z, {
                              channel: t,
                              className: ei.typingUsers,
                              renderDots: !1
                          })
                      ]
                  })
                : (0, i.jsx)(ef, { channel: t })
        ]
    });
}
function ep(e) {
    let { channel: t, iconSize: n, showReadState: r = !1 } = e,
        { messageCountText: l, unreadCount: s } = (0, H.nP)(t);
    return (0, i.jsxs)('div', {
        className: o()(ei.messageCountBox, { [ei.hasRead]: r && null == s }),
        children: [
            (0, i.jsx)('span', {
                className: ei.messageCountIcon,
                children: (0, i.jsx)(g.kBi, {
                    size: 'custom',
                    color: 'currentColor',
                    width: n,
                    height: n
                })
            }),
            'number' == typeof l
                ? (0, i.jsx)(x.Z, {
                      value: l,
                      digitWidth: 9,
                      className: ei.messageCountText
                  })
                : (0, i.jsx)('div', {
                      className: ei.messageCountText,
                      children: l
                  }),
            null == s
                ? null
                : (0, i.jsxs)(g.Text, {
                      className: ei.newMessageCount,
                      variant: 'text-sm/semibold',
                      color: 'text-brand',
                      children: ['(', en.intl.format(en.t.z3PEtr, { count: s }), ')']
                  })
        ]
    });
}
function em(e) {
    let { firstMessage: t, channel: n } = e,
        r = (0, p.e7)([L.Z], () => L.Z.getChannel(n.parent_id)),
        l = (0, H.Bs)(r),
        { disableReactionCreates: o, isLurking: s, isPendingMember: a } = (0, w.Z)(n);
    return null == l || o
        ? null
        : (0, i.jsx)(A.le, {
              className: ei.updateReactionButton,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: s,
              isPendingMember: a,
              emoji: l,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: N.O.NORMAL,
              emojiSize: 'reaction',
              emojiSizeTooltip: 'reaction'
          });
}
function eg(e) {
    var t;
    let { firstMessage: n, channel: r } = e,
        l = (0, H.IN)(n),
        { disableReactionUpdates: o, isLurking: s, isPendingMember: a } = (0, w.Z)(r);
    return null == l
        ? null
        : (0, i.jsx)(
              A.le,
              el(
                  {
                      className: ei.updateReactionButton,
                      message: n,
                      readOnly: o || r.isArchivedLockedThread(),
                      isLurking: s,
                      isPendingMember: a,
                      useChatFontScaling: !1,
                      type: l.burst_count >= l.count ? N.O.BURST : N.O.NORMAL,
                      emojiSize: 'reaction',
                      emojiSizeTooltip: 'reaction'
                  },
                  l
              ),
              ''.concat(null != (t = l.emoji.id) ? t : 0, ':').concat(l.emoji.name)
          );
}
function ef(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: r } = (0, V.H)(n.parent_id),
        l = (0, H.xw)(n, r),
        o = null == (t = n.threadMetadata) ? void 0 : t.createTimestamp,
        s = null == o ? null : en.intl.formatToPlainString(en.t['13euCQ'], { timestamp: (0, B.vc)(u()(o), 'LLLL') });
    return (0, i.jsx)(g.ua7, {
        text: s,
        tooltipClassName: ei.timestampTooltip,
        children: (e) => {
            var t, n;
            return (0, i.jsx)(
                g.Text,
                ((t = el(
                    {
                        className: ei.__invalid_activityText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary'
                    },
                    e
                )),
                (n = n = { children: l }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
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
function eb(e) {
    let { channel: t, userIds: n, facepileRef: r } = e,
        l = (0, H.iM)(t, n);
    return (0, i.jsx)('div', {
        ref: r,
        children: (0, i.jsx)(v.Z, {
            className: ei.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: l,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0
        })
    });
}
function ej(e) {
    let { firstMedia: t, shouldObscure: n, obscureReason: r, shouldShowAgeVerification: l } = e,
        s = (0, p.e7)([F.Z], () => F.Z.isFocused()),
        a = (0, C.d$)(t.src),
        c = _.QK.useSetting(),
        u = (0, E.MC)(r),
        { src: d, width: h, height: m, alt: f } = t;
    if (l) {
        var b;
        return (0, i.jsx)('div', {
            'aria-label': null != (b = null != u ? u : f) ? b : en.intl.string(en.t.hqwnc3),
            className: o()(ei.thumbnailContainer, ei.obscuredThumbnailPlaceholder),
            style: {
                maxWidth: es,
                maxHeight: eo,
                height: m,
                width: h
            }
        });
    }
    return d.startsWith('data:')
        ? (0, i.jsx)(g.Eep, {
              src: d,
              width: h,
              height: m,
              minWidth: es,
              minHeight: eo,
              alt: null != f && n ? u : f,
              className: ei.thumbnailContainer,
              imageClassName: o()(ei.thumbnailOverride, { [ei.obscured]: n })
          })
        : (0, Z.Yi)({
              src: d,
              width: h,
              height: m,
              minWidth: es,
              minHeight: eo,
              alt: null != f && n ? u : f,
              autoPlay: c,
              animated: a && !n && s,
              srcIsAnimated: t.srcIsAnimated,
              containerClassName: ei.thumbnailContainer,
              imageClassName: o()(ei.thumbnailOverride, { [ei.obscured]: n }),
              analyticsSource: 'ForumPostMediaPreview'
          });
}
function ev(e) {
    let { channel: t, firstMedia: n } = e,
        [r, l] = (0, E.hL)({
            media: n,
            channel: t
        }),
        o = (0, P.JO)(l);
    return (0, i.jsx)(g.Rny, {
        enabled: !0,
        children: (0, i.jsxs)('div', {
            className: ei.bodyMedia,
            onClick: function (e) {
                e.stopPropagation(), o && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), O.Z.showAgeVerificationGetStartedModal(y.cU.FORUM_POST_MEDIA_PREVIEW));
            },
            children: [
                (0, i.jsx)(ej, {
                    firstMedia: n,
                    shouldObscure: r,
                    obscureReason: l,
                    shouldShowAgeVerification: o
                }),
                r &&
                    (0, i.jsx)(K.Z, {
                        iconClassname: ei.obscuredTag,
                        obscureReason: l
                    })
            ]
        })
    });
}

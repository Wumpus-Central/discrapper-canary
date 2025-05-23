n.d(t, {
    Lp: () => el,
    NN: () => eu,
    TJ: () => ea,
    ZP: () => es,
    au: () => ef,
    kZ: () => em,
    m9: () => ep,
    og: () => eb
}),
    n(388685);
var i = n(255367),
    r = n(73800),
    o = n(120356),
    l = n.n(o),
    a = n(512722),
    s = n.n(a),
    c = n(913527),
    u = n.n(c),
    d = n(760907),
    h = n(91192),
    p = n(442837),
    m = n(692547),
    f = n(481060),
    g = n(738619),
    b = n(393238),
    O = n(963374),
    j = n(884338),
    v = n(168107),
    y = n(480916),
    T = n(446489),
    S = n(824578),
    x = n(95398),
    _ = n(247206),
    P = n(406432),
    E = n(169525),
    C = n(566006),
    R = n(255269),
    I = n(937889),
    w = n(443877),
    N = n(524444),
    Z = n(287151),
    A = n(267128),
    M = n(695346),
    L = n(433355),
    k = n(592125),
    D = n(496675),
    U = n(699516),
    F = n(451478),
    B = n(55935),
    V = n(109434),
    G = n(456269),
    H = n(109590),
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
    ei = n(475867),
    er = n(852831);
function eo(e) {
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
let el = 72,
    ea = 72,
    es = r.memo(function (e) {
        let { threadId: t, goToThread: n, observePostVisibilityAnalytics: o, overrideMedia: a, className: c, containerWidth: u } = e,
            {
                channel: m,
                isOpen: g,
                messageCount: O,
                firstMessage: j,
                content: v,
                media: y
            } = (function (e) {
                let { threadId: t, overrideMedia: n } = e,
                    i = (0, p.e7)([k.Z], () => k.Z.getChannel(t));
                s()(null != i, 'the thread should not be null here, a store must have missed an update');
                let r = (0, p.e7)([L.ZP], () => L.ZP.getCurrentSidebarChannelId(i.parent_id) === i.id),
                    { firstMessage: o } = (0, H.cl)(i),
                    { content: l, firstMedia: a } = (0, G.mX)({ firstMessage: o }),
                    { messageCountText: c } = (0, G.nP)(i);
                return {
                    channel: i,
                    isOpen: r,
                    messageCount: c,
                    firstMessage: o,
                    content: l,
                    media: null != n ? n : a
                };
            })({
                threadId: t,
                overrideMedia: a
            }),
            { ref: T, height: S } = (0, b.ZP)(),
            x = (0, J.xH)((e) => e.setCardHeight, d.X);
        r.useEffect(() => {
            null != S && x(t, S);
        }, [S, x, t]),
            r.useEffect(() => {
                null == o || o(T.current, t);
            }, [T, o, t]);
        let _ = r.useRef(null),
            { handleLeftClick: P, handleRightClick: E } = (0, Q.Z)({
                facepileRef: _,
                goToThread: n,
                channel: m
            }),
            C = (0, h.JA)(t),
            { role: R, onFocus: I } = C,
            w = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            o = Object.keys(e);
                        for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < o.length; i++) (n = o[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(C, ['role', 'onFocus']),
            { isFocused: N, handleFocus: Z, handleBlur: A } = (0, q.Z)(I);
        return (0, i.jsxs)('div', {
            ref: T,
            'data-item-id': t,
            onClick: P,
            onContextMenu: E,
            className: l()(ei.container, c, { [ei.isOpen]: g }),
            children: [
                (0, i.jsx)(
                    f.P3F,
                    eo(
                        {
                            onClick: P,
                            focusProps: { ringTarget: T },
                            onContextMenu: E,
                            'aria-label': en.intl.formatToPlainString(en.t.pgYN6e, {
                                title: m.name,
                                count: O
                            }),
                            className: ei.focusTarget,
                            onFocus: Z,
                            onBlur: A
                        },
                        w
                    )
                ),
                (0, i.jsxs)('div', {
                    className: ei.left,
                    children: [
                        (0, i.jsx)(f.y5t, {
                            children: (0, i.jsx)(ec, {
                                channel: m,
                                firstMessage: j,
                                content: v,
                                hasMediaAttachment: null != y,
                                containerWidth: u
                            })
                        }),
                        (0, i.jsx)(f.Rny, {
                            enabled: !N,
                            children: (0, i.jsx)(eh, {
                                channel: m,
                                firstMessage: j,
                                facepileRef: _
                            })
                        })
                    ]
                }),
                (null == j ? void 0 : j.blocked) || null == y
                    ? null
                    : (0, i.jsx)(ej, {
                          channel: m,
                          firstMedia: y
                      })
            ]
        });
    });
function ec(e) {
    let { channel: t, firstMessage: n, content: r, hasMediaAttachment: o, containerWidth: a } = e,
        { isNew: s, hasUnreads: c } = (0, G.J$)(t),
        u = eu(t),
        { postTitleRef: d, isNewBadgeOverflow: h } = (0, $.x)(s, 24, a);
    return (0, i.jsxs)('div', {
        className: ei.body,
        children: [
            (0, i.jsx)(Y.ZP, { channel: t }),
            (0, i.jsx)('div', {
                className: l()(ei.header, { [ei.withNewBadgeOverflow]: h }),
                children: (0, i.jsxs)('div', {
                    className: ei.headerText,
                    children: [
                        (0, i.jsx)(f.X6q, {
                            variant: 'heading-lg/semibold',
                            color: c ? 'header-primary' : 'text-muted',
                            lineClamp: 2,
                            className: ei.postTitleText,
                            children: (0, i.jsxs)('span', {
                                ref: d,
                                children: [
                                    u,
                                    s &&
                                        (0, i.jsx)('span', {
                                            className: ei.newBadgeWrapper,
                                            children: (0, i.jsx)(f.IGR, {
                                                className: ei.newBadge,
                                                color: m.Z.unsafe_rawColors.BRAND_260.css,
                                                text: en.intl.string(en.t.y2b7CA)
                                            })
                                        })
                                ]
                            })
                        }),
                        s &&
                            h &&
                            (0, i.jsx)(f.IGR, {
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
                    hasMediaAttachment: o,
                    hasUnreads: c
                })
            })
        ]
    });
}
function eu(e) {
    let t = (0, p.e7)([W.Z], () => W.Z.getHasSearchResults(e.parent_id)),
        n = (0, p.e7)([W.Z], () => W.Z.getSearchQuery(e.parent_id)),
        i = r.useMemo(() => (0, O.nC)(t && null != n ? n : ''), [t, n]);
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
    let { message: t, channel: n, content: r, hasMediaAttachment: o, hasUnreads: a } = e,
        { isBlocked: s, isIgnored: c } = (0, p.cj)([U.Z], () => ({
            isBlocked: null != t && U.Z.isBlockedForMessage(t),
            isIgnored: null != t && U.Z.isIgnoredForMessage(t)
        })),
        u = (0, p.e7)([z.Z], () => z.Z.isLoading(n.id)),
        d = (0, p.e7)([D.Z], () => D.Z.can(ee.Plq.MANAGE_MESSAGES, n)),
        h = M.cC.useSetting(),
        m = null;
    if (s)
        m = (0, i.jsx)(f.Text, {
            className: ei.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: en.intl.string(en.t.Lkp2fH)
        });
    else if (c)
        m = (0, i.jsx)(f.Text, {
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
                : (0, A.f)(t, r, s, c, l()(ei.messageContent, er.inlineFormat, er.__invalid_smallFontSize), {
                      leadingIconClass: ei.messageContentLeadingIcon,
                      trailingIconClass: ei.messageContentTrailingIcon,
                      iconSize: et.WW
                  });
        m =
            null != n
                ? (0, i.jsx)(f.Text, {
                      variant: 'text-sm/semibold',
                      color: a ? 'header-secondary' : 'text-muted',
                      children: n
                  })
                : o
                  ? null
                  : (0, i.jsx)(f.Text, {
                        tag: 'span',
                        variant: 'text-sm/medium',
                        color: a ? 'header-secondary' : 'text-muted',
                        className: ei.messageContent,
                        children: null == t ? (u ? null : en.intl.string(en.t.mE3KJC)) : e
                    });
    }
    return (0, i.jsxs)(x.aQ.Provider, {
        value: (0, R.Z)(h, d),
        children: [
            !s &&
                (0, i.jsx)(X.Z, {
                    channel: n,
                    message: t,
                    renderColon: null != m,
                    hasUnreads: a
                }),
            (0, i.jsx)(f.Rny, {
                className: ei.messageFocusBlock,
                children: m
            })
        ]
    });
});
function eh(e) {
    let { channel: t, facepileRef: n, firstMessage: r } = e,
        o = (0, S.Q)(t.id),
        l = (null == r ? void 0 : r.reactions) != null && r.reactions.length > 0;
    return (0, i.jsxs)('div', {
        className: ei.footer,
        children: [
            l || null == r
                ? null
                : (0, i.jsx)(em, {
                      firstMessage: r,
                      channel: t
                  }),
            null == r
                ? null
                : (0, i.jsx)(ef, {
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
            o.length > 0
                ? (0, i.jsxs)('div', {
                      className: ei.typing,
                      children: [
                          (0, i.jsx)(eb, {
                              channel: t,
                              userIds: o,
                              facepileRef: n
                          }),
                          (0, i.jsx)('div', {
                              className: ei.dots,
                              children: (0, i.jsx)(f.bbz, {
                                  themed: !0,
                                  dotRadius: 2
                              })
                          }),
                          (0, i.jsx)(g.Z, {
                              channel: t,
                              className: ei.typingUsers,
                              renderDots: !1
                          })
                      ]
                  })
                : (0, i.jsx)(eg, { channel: t })
        ]
    });
}
function ep(e) {
    let { channel: t, iconSize: n, showReadState: r = !1 } = e,
        { messageCountText: o, unreadCount: a } = (0, G.nP)(t);
    return (0, i.jsxs)('div', {
        className: l()(ei.messageCountBox, { [ei.hasRead]: r && null == a }),
        children: [
            (0, i.jsx)('span', {
                className: ei.messageCountIcon,
                children: (0, i.jsx)(f.kBi, {
                    size: 'custom',
                    color: 'currentColor',
                    width: n,
                    height: n
                })
            }),
            'number' == typeof o
                ? (0, i.jsx)(T.Z, {
                      value: o,
                      digitWidth: 9,
                      className: ei.messageCountText
                  })
                : (0, i.jsx)('div', {
                      className: ei.messageCountText,
                      children: o
                  }),
            null == a
                ? null
                : (0, i.jsxs)(f.Text, {
                      className: ei.newMessageCount,
                      variant: 'text-sm/semibold',
                      color: 'text-brand',
                      children: ['(', en.intl.format(en.t.z3PEtr, { count: a }), ')']
                  })
        ]
    });
}
function em(e) {
    let { firstMessage: t, channel: n } = e,
        r = (0, p.e7)([k.Z], () => k.Z.getChannel(n.parent_id)),
        o = (0, G.Bs)(r),
        { disableReactionCreates: l, isLurking: a, isPendingMember: s } = (0, w.Z)(n);
    return null == o || l
        ? null
        : (0, i.jsx)(Z.le, {
              className: ei.updateReactionButton,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: a,
              isPendingMember: s,
              emoji: o,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: C.O.NORMAL,
              emojiSize: 'reaction',
              emojiSizeTooltip: 'reaction'
          });
}
function ef(e) {
    var t;
    let { firstMessage: n, channel: r } = e,
        o = (0, G.IN)(n),
        { disableReactionUpdates: l, isLurking: a, isPendingMember: s } = (0, w.Z)(r);
    return null == o
        ? null
        : (0, i.jsx)(
              Z.le,
              eo(
                  {
                      className: ei.updateReactionButton,
                      message: n,
                      readOnly: l || r.isArchivedLockedThread(),
                      isLurking: a,
                      isPendingMember: s,
                      useChatFontScaling: !1,
                      type: o.burst_count >= o.count ? C.O.BURST : C.O.NORMAL,
                      emojiSize: 'reaction',
                      emojiSizeTooltip: 'reaction'
                  },
                  o
              ),
              ''.concat(null != (t = o.emoji.id) ? t : 0, ':').concat(o.emoji.name)
          );
}
function eg(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: r } = (0, V.H)(n.parent_id),
        o = (0, G.xw)(n, r),
        l = null == (t = n.threadMetadata) ? void 0 : t.createTimestamp,
        a = null == l ? null : en.intl.formatToPlainString(en.t['13euCQ'], { timestamp: (0, B.vc)(u()(l), 'LLLL') });
    return (0, i.jsx)(f.ua7, {
        text: a,
        tooltipClassName: ei.timestampTooltip,
        children: (e) => {
            var t, n;
            return (0, i.jsx)(
                f.Text,
                ((t = eo(
                    {
                        className: ei.__invalid_activityText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary'
                    },
                    e
                )),
                (n = n = { children: o }),
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
        o = (0, G.iM)(t, n);
    return (0, i.jsx)('div', {
        ref: r,
        children: (0, i.jsx)(j.Z, {
            className: ei.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: o,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0
        })
    });
}
function eO(e) {
    let { firstMedia: t, shouldObscure: n, obscureReason: r, shouldShowAgeVerification: o } = e,
        a = (0, p.e7)([F.Z], () => F.Z.isFocused()),
        s = (0, P.d$)(t.src),
        c = M.QK.useSetting(),
        u = (0, E.MC)(r),
        { src: d, width: h, height: m, alt: g } = t;
    if (o) {
        var b;
        return (0, i.jsx)('div', {
            'aria-label': null != (b = null != u ? u : g) ? b : en.intl.string(en.t.hqwnc3),
            className: l()(ei.thumbnailContainer, ei.obscuredThumbnailPlaceholder),
            style: {
                maxWidth: ea,
                maxHeight: el,
                height: m,
                width: h
            }
        });
    }
    return d.startsWith('data:')
        ? (0, i.jsx)(f.Eep, {
              src: d,
              width: h,
              height: m,
              minWidth: ea,
              minHeight: el,
              alt: null != g && n ? u : g,
              className: ei.thumbnailContainer,
              imageClassName: l()(ei.thumbnailOverride, { [ei.obscured]: n })
          })
        : (0, N.Yi)({
              src: d,
              width: h,
              height: m,
              minWidth: ea,
              minHeight: el,
              alt: null != g && n ? u : g,
              autoPlay: c,
              animated: s && !n && a,
              srcIsAnimated: t.srcIsAnimated,
              containerClassName: ei.thumbnailContainer,
              imageClassName: l()(ei.thumbnailOverride, { [ei.obscured]: n }),
              analyticsSource: 'ForumPostMediaPreview'
          });
}
function ej(e) {
    let { channel: t, firstMedia: n } = e,
        [r, o] = (0, E.hL)({
            media: n,
            channel: t
        }),
        l = (0, _.m8)() && o === E.wk.EXPLICIT_CONTENT;
    return (0, i.jsx)(f.Rny, {
        enabled: !0,
        children: (0, i.jsxs)('div', {
            className: ei.bodyMedia,
            onClick: function (e) {
                e.stopPropagation(), l && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), v.Z.showAgeVerificationGetStartedModal(y.cU.FORUM_POST_MEDIA_PREVIEW));
            },
            children: [
                (0, i.jsx)(eO, {
                    firstMedia: n,
                    shouldObscure: r,
                    obscureReason: o,
                    shouldShowAgeVerification: l
                }),
                r &&
                    (0, i.jsx)(K.Z, {
                        iconClassname: ei.obscuredTag,
                        obscureReason: o
                    })
            ]
        })
    });
}

n.d(t, {
    Lp: () => ea,
    NN: () => eu,
    TJ: () => es,
    ZP: () => el,
    au: () => ef,
    kZ: () => em,
    m9: () => ep,
    og: () => eb
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    l = n.n(s),
    c = n(913527),
    u = n.n(c),
    d = n(788347),
    h = n(91192),
    p = n(442837),
    m = n(692547),
    f = n(481060),
    g = n(738619),
    b = n(393238),
    v = n(963374),
    j = n(884338),
    O = n(168107),
    y = n(480916),
    T = n(446489),
    x = n(824578),
    _ = n(95398),
    S = n(247206),
    E = n(406432),
    P = n(169525),
    N = n(566006),
    C = n(255269),
    R = n(937889),
    I = n(443877),
    w = n(524444),
    Z = n(287151),
    A = n(267128),
    M = n(695346),
    L = n(433355),
    k = n(592125),
    D = n(496675),
    U = n(699516),
    B = n(451478),
    F = n(55935),
    W = n(109434),
    V = n(456269),
    G = n(109590),
    H = n(660189),
    z = n(208970),
    J = n(73315),
    X = n(470623),
    K = n(196255),
    Y = n(858543),
    q = n(265641),
    $ = n(627896),
    Q = n(883728),
    ee = n(981631),
    et = n(217702),
    en = n(388032),
    ei = n(890104),
    eo = n(509045);
function er(e) {
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
let ea = 72,
    es = 72,
    el = o.memo(function (e) {
        let { threadId: t, goToThread: n, observePostVisibilityAnalytics: r, overrideMedia: s, className: c, containerWidth: u } = e,
            {
                channel: m,
                isOpen: g,
                messageCount: v,
                firstMessage: j,
                content: O,
                media: y
            } = (function (e) {
                let { threadId: t, overrideMedia: n } = e,
                    i = (0, p.e7)([k.Z], () => k.Z.getChannel(t));
                l()(null != i, 'the thread should not be null here, a store must have missed an update');
                let o = (0, p.e7)([L.ZP], () => L.ZP.getCurrentSidebarChannelId(i.parent_id) === i.id),
                    { firstMessage: r } = (0, G.cl)(i),
                    { content: a, firstMedia: s } = (0, V.mX)({ firstMessage: r }),
                    { messageCountText: c } = (0, V.nP)(i);
                return {
                    channel: i,
                    isOpen: o,
                    messageCount: c,
                    firstMessage: r,
                    content: a,
                    media: null != n ? n : s
                };
            })({
                threadId: t,
                overrideMedia: s
            }),
            { ref: T, height: x } = (0, b.Z)(),
            _ = (0, X.xH)((e) => e.setCardHeight, d.X);
        o.useEffect(() => {
            null != x && _(t, x);
        }, [x, _, t]),
            o.useEffect(() => {
                null == r || r(T.current, t);
            }, [T, r, t]);
        let S = o.useRef(null),
            { handleLeftClick: E, handleRightClick: P } = (0, Q.Z)({
                facepileRef: S,
                goToThread: n,
                channel: m
            }),
            N = (0, h.JA)(t),
            { role: C, onFocus: R } = N,
            I = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            o = {},
                            r = Object.keys(e);
                        for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < r.length; i++) (n = r[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                }
                return o;
            })(N, ['role', 'onFocus']),
            { isFocused: w, handleFocus: Z, handleBlur: A } = (0, q.Z)(R);
        return (0, i.jsxs)('div', {
            ref: T,
            'data-item-id': t,
            onClick: E,
            onContextMenu: P,
            className: a()(ei.container, c, { [ei.isOpen]: g }),
            children: [
                (0, i.jsx)(
                    f.P3F,
                    er(
                        {
                            onClick: E,
                            focusProps: { ringTarget: T },
                            onContextMenu: P,
                            'aria-label': en.NW.formatToPlainString(en.t.pgYN6e, {
                                title: m.name,
                                count: v
                            }),
                            className: ei.focusTarget,
                            onFocus: Z,
                            onBlur: A
                        },
                        I
                    )
                ),
                (0, i.jsxs)('div', {
                    className: ei.left,
                    children: [
                        (0, i.jsx)(f.y5t, {
                            children: (0, i.jsx)(ec, {
                                channel: m,
                                firstMessage: j,
                                content: O,
                                hasMediaAttachment: null != y,
                                containerWidth: u
                            })
                        }),
                        (0, i.jsx)(f.Rny, {
                            enabled: !w,
                            children: (0, i.jsx)(eh, {
                                channel: m,
                                firstMessage: j,
                                facepileRef: S
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
    let { channel: t, firstMessage: n, content: o, hasMediaAttachment: r, containerWidth: s } = e,
        { isNew: l, hasUnreads: c } = (0, V.J$)(t),
        u = eu(t),
        { postTitleRef: d, isNewBadgeOverflow: h } = (0, $.x)(l, 24, s);
    return (0, i.jsxs)('div', {
        className: ei.body,
        children: [
            (0, i.jsx)(Y.ZP, { channel: t }),
            (0, i.jsx)('div', {
                className: a()(ei.header, { [ei.withNewBadgeOverflow]: h }),
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
                                    l &&
                                        (0, i.jsx)('span', {
                                            className: ei.newBadgeWrapper,
                                            children: (0, i.jsx)(f.IGR, {
                                                className: ei.newBadge,
                                                color: m.Z.unsafe_rawColors.BRAND_260.css,
                                                text: en.NW.string(en.t.y2b7CA)
                                            })
                                        })
                                ]
                            })
                        }),
                        l &&
                            h &&
                            (0, i.jsx)(f.IGR, {
                                className: ei.newBadge,
                                color: m.Z.unsafe_rawColors.BRAND_260.css,
                                text: en.NW.string(en.t.y2b7CA)
                            })
                    ]
                })
            }),
            (0, i.jsx)('div', {
                className: ei.message,
                children: (0, i.jsx)(ed, {
                    channel: t,
                    message: n,
                    content: o,
                    hasMediaAttachment: r,
                    hasUnreads: c
                })
            })
        ]
    });
}
function eu(e) {
    let t = (0, p.e7)([z.Z], () => z.Z.getHasSearchResults(e.parent_id)),
        n = (0, p.e7)([z.Z], () => z.Z.getSearchQuery(e.parent_id)),
        i = o.useMemo(() => (0, v.nC)(t && null != n ? n : ''), [t, n]);
    return o.useMemo(
        () =>
            (0, R.ZP)(
                {
                    content: e.name,
                    embeds: []
                },
                { postProcessor: i }
            ).content,
        [e.name, i]
    );
}
let ed = o.memo(function (e) {
    let { message: t, channel: n, content: o, hasMediaAttachment: r, hasUnreads: s } = e,
        { isBlocked: l, isIgnored: c } = (0, p.cj)([U.Z], () => ({
            isBlocked: null != t && U.Z.isBlockedForMessage(t),
            isIgnored: null != t && U.Z.isIgnoredForMessage(t)
        })),
        u = (0, p.e7)([H.Z], () => H.Z.isLoading(n.id)),
        d = (0, p.e7)([D.Z], () => D.Z.can(ee.Plq.MANAGE_MESSAGES, n)),
        h = M.cC.useSetting(),
        m = null;
    if (l)
        m = (0, i.jsx)(f.Text, {
            className: ei.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: en.NW.string(en.t.Lkp2fH)
        });
    else if (c)
        m = (0, i.jsx)(f.Text, {
            className: ei.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: en.NW.string(en.t.yWK7ZG)
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null
                  }
                : (0, A.f)(t, o, l, c, a()(ei.messageContent, eo.inlineFormat, eo.__invalid_smallFontSize), {
                      leadingIconClass: ei.messageContentLeadingIcon,
                      trailingIconClass: ei.messageContentTrailingIcon,
                      iconSize: et.WW
                  });
        m =
            null != n
                ? (0, i.jsx)(f.Text, {
                      variant: 'text-sm/semibold',
                      color: s ? 'header-secondary' : 'text-muted',
                      children: n
                  })
                : r
                  ? null
                  : (0, i.jsx)(f.Text, {
                        tag: 'span',
                        variant: 'text-sm/medium',
                        color: s ? 'header-secondary' : 'text-muted',
                        className: ei.messageContent,
                        children: null == t ? (u ? null : en.NW.string(en.t.mE3KJC)) : e
                    });
    }
    return (0, i.jsxs)(_.aQ.Provider, {
        value: (0, C.Z)(h, d),
        children: [
            !l &&
                (0, i.jsx)(K.Z, {
                    channel: n,
                    message: t,
                    renderColon: null != m,
                    hasUnreads: s
                }),
            (0, i.jsx)(f.Rny, {
                className: ei.messageFocusBlock,
                children: m
            })
        ]
    });
});
function eh(e) {
    let { channel: t, facepileRef: n, firstMessage: o } = e,
        r = (0, x.Q)(t.id),
        a = (null == o ? void 0 : o.reactions) != null && o.reactions.length > 0;
    return (0, i.jsxs)('div', {
        className: ei.footer,
        children: [
            a || null == o
                ? null
                : (0, i.jsx)(em, {
                      firstMessage: o,
                      channel: t
                  }),
            null == o
                ? null
                : (0, i.jsx)(ef, {
                      firstMessage: o,
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
            r.length > 0
                ? (0, i.jsxs)('div', {
                      className: ei.typing,
                      children: [
                          (0, i.jsx)(eb, {
                              channel: t,
                              userIds: r,
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
    let { channel: t, iconSize: n, showReadState: o = !1 } = e,
        { messageCountText: r, unreadCount: s } = (0, V.nP)(t);
    return (0, i.jsxs)('div', {
        className: a()(ei.messageCountBox, { [ei.hasRead]: o && null == s }),
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
            'number' == typeof r
                ? (0, i.jsx)(T.Z, {
                      value: r,
                      digitWidth: 9,
                      className: ei.messageCountText
                  })
                : (0, i.jsx)('div', {
                      className: ei.messageCountText,
                      children: r
                  }),
            null == s
                ? null
                : (0, i.jsxs)(f.Text, {
                      className: ei.newMessageCount,
                      variant: 'text-sm/semibold',
                      color: 'text-brand',
                      children: ['(', en.NW.format(en.t.z3PEtr, { count: s }), ')']
                  })
        ]
    });
}
function em(e) {
    let { firstMessage: t, channel: n } = e,
        o = (0, p.e7)([k.Z], () => k.Z.getChannel(n.parent_id)),
        r = (0, V.Bs)(o),
        { disableReactionCreates: a, isLurking: s, isPendingMember: l } = (0, I.Z)(n);
    return null == r || a
        ? null
        : (0, i.jsx)(Z.le, {
              className: ei.updateReactionButton,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: s,
              isPendingMember: l,
              emoji: r,
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
function ef(e) {
    var t;
    let { firstMessage: n, channel: o } = e,
        r = (0, V.IN)(n),
        { disableReactionUpdates: a, isLurking: s, isPendingMember: l } = (0, I.Z)(o);
    return null == r
        ? null
        : (0, i.jsx)(
              Z.le,
              er(
                  {
                      className: ei.updateReactionButton,
                      message: n,
                      readOnly: a || o.isArchivedLockedThread(),
                      isLurking: s,
                      isPendingMember: l,
                      useChatFontScaling: !1,
                      type: r.burst_count >= r.count ? N.O.BURST : N.O.NORMAL,
                      emojiSize: 'reaction',
                      emojiSizeTooltip: 'reaction'
                  },
                  r
              ),
              ''.concat(null !== (t = r.emoji.id) && void 0 !== t ? t : 0, ':').concat(r.emoji.name)
          );
}
function eg(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: o } = (0, W.H)(n.parent_id),
        r = (0, V.xw)(n, o),
        a = null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
        s = null == a ? null : en.NW.formatToPlainString(en.t['13euCQ'], { timestamp: (0, F.vc)(u()(a), 'LLLL') });
    return (0, i.jsx)(f.ua7, {
        text: s,
        tooltipClassName: ei.timestampTooltip,
        children: (e) => {
            var t, n;
            return (0, i.jsx)(
                f.Text,
                ((t = er(
                    {
                        className: ei.__invalid_activityText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary'
                    },
                    e
                )),
                (n = n = { children: r }),
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
    let { channel: t, userIds: n, facepileRef: o } = e,
        r = (0, V.iM)(t, n);
    return (0, i.jsx)('div', {
        ref: o,
        children: (0, i.jsx)(j.Z, {
            className: ei.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: r,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0
        })
    });
}
function ev(e) {
    let t,
        n,
        { firstMedia: o, shouldObscure: r, obscureReason: s } = e,
        l = (0, p.e7)([B.Z], () => B.Z.isFocused()),
        c = (0, E.d$)(o.src),
        u = M.QK.useSetting(),
        d = (0, P.MC)(s),
        h = (0, S.m8)() && s === P.wk.EXPLICIT_CONTENT,
        { src: m, width: g, height: b, alt: v } = o;
    if ((b > g ? (n = es) : (t = ea), h)) {
        var j;
        return (0, i.jsx)(f.P3F, {
            'aria-label': null !== (j = null != d ? d : v) && void 0 !== j ? j : en.NW.string(en.t.hqwnc3),
            className: a()(ei.thumbnailContainer, ei.obscuredThumbnailPlaceholder),
            style: {
                maxWidth: t,
                maxHeight: n,
                height: b,
                width: g
            },
            onClick: function (e) {
                e.stopPropagation(), e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), O.Z.showAgeVerificationGetStartedModal(y.cU.FORUM_POST_MEDIA_PREVIEW);
            }
        });
    }
    return m.startsWith('data:')
        ? (0, i.jsx)(f.Eep, {
              src: m,
              maxHeight: t,
              maxWidth: n,
              width: g,
              height: b,
              alt: null != v && r ? d : v,
              className: ei.thumbnailContainer,
              imageClassName: a()({
                  [ei.obscured]: r,
                  [ei.thumbnailOverride]: !0
              })
          })
        : (0, w.Yi)({
              src: m,
              maxHeight: t,
              maxWidth: n,
              width: g,
              height: b,
              alt: null != v && r ? d : v,
              autoPlay: u,
              animated: c && !r && l,
              srcIsAnimated: o.srcIsAnimated,
              containerClassName: ei.thumbnailContainer,
              imageClassName: a()({ [ei.obscured]: r }),
              analyticsSource: 'ForumPostMediaPreview'
          });
}
function ej(e) {
    let { channel: t, firstMedia: n } = e,
        [o, r] = (0, P.hL)({
            media: n,
            channel: t
        });
    return (0, i.jsx)(f.Rny, {
        enabled: !0,
        children: (0, i.jsxs)('div', {
            className: ei.bodyMedia,
            onClick: (e) => e.stopPropagation(),
            children: [
                (0, i.jsx)(ev, {
                    firstMedia: n,
                    shouldObscure: o,
                    obscureReason: r
                }),
                o &&
                    (0, i.jsx)(J.Z, {
                        iconClassname: ei.obscuredTag,
                        obscureReason: r
                    })
            ]
        })
    });
}

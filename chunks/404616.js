n.d(t, {
    Lp: () => ei,
    NN: () => es,
    TJ: () => eo,
    ZP: () => er,
    au: () => eh,
    kZ: () => ed,
    m9: () => eu,
    og: () => em
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
    d = n(232713),
    h = n(91192),
    p = n(442837),
    m = n(692547),
    f = n(481060),
    g = n(738619),
    b = n(393238),
    v = n(963374),
    j = n(884338),
    O = n(446489),
    y = n(824578),
    x = n(95398),
    T = n(406432),
    S = n(169525),
    _ = n(566006),
    N = n(255269),
    C = n(937889),
    R = n(443877),
    P = n(524444),
    E = n(287151),
    I = n(267128),
    w = n(695346),
    Z = n(433355),
    A = n(592125),
    M = n(496675),
    k = n(699516),
    L = n(451478),
    D = n(55935),
    B = n(109434),
    F = n(456269),
    U = n(109590),
    W = n(660189),
    V = n(208970),
    G = n(73315),
    H = n(470623),
    z = n(196255),
    K = n(858543),
    J = n(265641),
    X = n(627896),
    Y = n(883728),
    q = n(981631),
    $ = n(217702),
    Q = n(388032),
    ee = n(971102),
    et = n(368365);
function en(e) {
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
let ei = 72,
    eo = 72,
    er = o.memo(function (e) {
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
                    i = (0, p.e7)([A.Z], () => A.Z.getChannel(t));
                l()(null != i, 'the thread should not be null here, a store must have missed an update');
                let o = (0, p.e7)([Z.ZP], () => Z.ZP.getCurrentSidebarChannelId(i.parent_id) === i.id),
                    { firstMessage: r } = (0, U.cl)(i),
                    { content: a, firstMedia: s } = (0, F.mX)({ firstMessage: r }),
                    { messageCountText: c } = (0, F.nP)(i);
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
            { ref: x, height: T } = (0, b.Z)(),
            S = (0, H.xH)((e) => e.setCardHeight, d.X);
        o.useEffect(() => {
            null != T && S(t, T);
        }, [T, S, t]),
            o.useEffect(() => {
                null == r || r(x.current, t);
            }, [x, r, t]);
        let _ = o.useRef(null),
            { handleLeftClick: N, handleRightClick: C } = (0, Y.Z)({
                facepileRef: _,
                goToThread: n,
                channel: m
            }),
            R = (0, h.JA)(t),
            { role: P, onFocus: E } = R,
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
            })(R, ['role', 'onFocus']),
            { isFocused: w, handleFocus: M, handleBlur: k } = (0, J.Z)(E);
        return (0, i.jsxs)('div', {
            ref: x,
            'data-item-id': t,
            onClick: N,
            onContextMenu: C,
            className: a()(ee.container, c, { [ee.isOpen]: g }),
            children: [
                (0, i.jsx)(
                    f.P3F,
                    en(
                        {
                            onClick: N,
                            focusProps: { ringTarget: x },
                            onContextMenu: C,
                            'aria-label': Q.NW.formatToPlainString(Q.t.pgYN6e, {
                                title: m.name,
                                count: v
                            }),
                            className: ee.focusTarget,
                            onFocus: M,
                            onBlur: k
                        },
                        I
                    )
                ),
                (0, i.jsxs)('div', {
                    className: ee.left,
                    children: [
                        (0, i.jsx)(f.y5t, {
                            children: (0, i.jsx)(ea, {
                                channel: m,
                                firstMessage: j,
                                content: O,
                                hasMediaAttachment: null != y,
                                containerWidth: u
                            })
                        }),
                        (0, i.jsx)(f.Rny, {
                            enabled: !w,
                            children: (0, i.jsx)(ec, {
                                channel: m,
                                firstMessage: j,
                                facepileRef: _
                            })
                        })
                    ]
                }),
                (null == j ? void 0 : j.blocked) || null == y
                    ? null
                    : (0, i.jsx)(ef, {
                          channel: m,
                          firstMedia: y
                      })
            ]
        });
    });
function ea(e) {
    let { channel: t, firstMessage: n, content: o, hasMediaAttachment: r, containerWidth: s } = e,
        { isNew: l, hasUnreads: c } = (0, F.J$)(t),
        u = es(t),
        { postTitleRef: d, isNewBadgeOverflow: h } = (0, X.x)(l, 24, s);
    return (0, i.jsxs)('div', {
        className: ee.body,
        children: [
            (0, i.jsx)(K.ZP, { channel: t }),
            (0, i.jsx)('div', {
                className: a()(ee.header, { [ee.withNewBadgeOverflow]: h }),
                children: (0, i.jsxs)('div', {
                    className: ee.headerText,
                    children: [
                        (0, i.jsx)(f.X6q, {
                            variant: 'heading-lg/semibold',
                            color: c ? 'header-primary' : 'text-muted',
                            lineClamp: 2,
                            className: ee.postTitleText,
                            children: (0, i.jsxs)('span', {
                                ref: d,
                                children: [
                                    u,
                                    l &&
                                        (0, i.jsx)('span', {
                                            className: ee.newBadgeWrapper,
                                            children: (0, i.jsx)(f.IGR, {
                                                className: ee.newBadge,
                                                color: m.Z.unsafe_rawColors.BRAND_260.css,
                                                text: Q.NW.string(Q.t.y2b7CA)
                                            })
                                        })
                                ]
                            })
                        }),
                        l &&
                            h &&
                            (0, i.jsx)(f.IGR, {
                                className: ee.newBadge,
                                color: m.Z.unsafe_rawColors.BRAND_260.css,
                                text: Q.NW.string(Q.t.y2b7CA)
                            })
                    ]
                })
            }),
            (0, i.jsx)('div', {
                className: ee.message,
                children: (0, i.jsx)(el, {
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
function es(e) {
    let t = (0, p.e7)([V.Z], () => V.Z.getHasSearchResults(e.parent_id)),
        n = (0, p.e7)([V.Z], () => V.Z.getSearchQuery(e.parent_id)),
        i = o.useMemo(() => (0, v.nC)(t && null != n ? n : ''), [t, n]);
    return o.useMemo(
        () =>
            (0, C.ZP)(
                {
                    content: e.name,
                    embeds: []
                },
                { postProcessor: i }
            ).content,
        [e.name, i]
    );
}
let el = o.memo(function (e) {
    let { message: t, channel: n, content: o, hasMediaAttachment: r, hasUnreads: s } = e,
        { isBlocked: l, isIgnored: c } = (0, p.cj)([k.Z], () => ({
            isBlocked: null != t && k.Z.isBlockedForMessage(t),
            isIgnored: null != t && k.Z.isIgnoredForMessage(t)
        })),
        u = (0, p.e7)([W.Z], () => W.Z.isLoading(n.id)),
        d = (0, p.e7)([M.Z], () => M.Z.can(q.Plq.MANAGE_MESSAGES, n)),
        h = w.cC.useSetting(),
        m = null;
    if (l)
        m = (0, i.jsx)(f.Text, {
            className: ee.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: Q.NW.string(Q.t.Lkp2fH)
        });
    else if (c)
        m = (0, i.jsx)(f.Text, {
            className: ee.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: Q.NW.string(Q.t.yWK7ZG)
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null
                  }
                : (0, I.f)(t, o, l, c, a()(ee.messageContent, et.inlineFormat, et.__invalid_smallFontSize), {
                      leadingIconClass: ee.messageContentLeadingIcon,
                      trailingIconClass: ee.messageContentTrailingIcon,
                      iconSize: $.WW
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
                        className: ee.messageContent,
                        children: null == t ? (u ? null : Q.NW.string(Q.t.mE3KJC)) : e
                    });
    }
    return (0, i.jsxs)(x.a.Provider, {
        value: (0, N.Z)(h, d),
        children: [
            !l &&
                (0, i.jsx)(z.Z, {
                    channel: n,
                    message: t,
                    renderColon: null != m,
                    hasUnreads: s
                }),
            (0, i.jsx)(f.Rny, {
                className: ee.messageFocusBlock,
                children: m
            })
        ]
    });
});
function ec(e) {
    let { channel: t, facepileRef: n, firstMessage: o } = e,
        r = (0, y.Q)(t.id),
        a = (null == o ? void 0 : o.reactions) != null && o.reactions.length > 0;
    return (0, i.jsxs)('div', {
        className: ee.footer,
        children: [
            a || null == o
                ? null
                : (0, i.jsx)(ed, {
                      firstMessage: o,
                      channel: t
                  }),
            null == o
                ? null
                : (0, i.jsx)(eh, {
                      firstMessage: o,
                      channel: t
                  }),
            (0, i.jsx)(eu, {
                channel: t,
                iconSize: 14
            }),
            (0, i.jsx)('span', {
                className: ee.bullet,
                children: '\u2022'
            }),
            r.length > 0
                ? (0, i.jsxs)('div', {
                      className: ee.typing,
                      children: [
                          (0, i.jsx)(em, {
                              channel: t,
                              userIds: r,
                              facepileRef: n
                          }),
                          (0, i.jsx)('div', {
                              className: ee.dots,
                              children: (0, i.jsx)(f.bbz, {
                                  themed: !0,
                                  dotRadius: 2
                              })
                          }),
                          (0, i.jsx)(g.Z, {
                              channel: t,
                              className: ee.typingUsers,
                              renderDots: !1
                          })
                      ]
                  })
                : (0, i.jsx)(ep, { channel: t })
        ]
    });
}
function eu(e) {
    let { channel: t, iconSize: n, showReadState: o = !1 } = e,
        { messageCountText: r, unreadCount: s } = (0, F.nP)(t);
    return (0, i.jsxs)('div', {
        className: a()(ee.messageCountBox, { [ee.hasRead]: o && null == s }),
        children: [
            (0, i.jsx)('span', {
                className: ee.messageCountIcon,
                children: (0, i.jsx)(f.kBi, {
                    size: 'custom',
                    color: 'currentColor',
                    width: n,
                    height: n
                })
            }),
            'number' == typeof r
                ? (0, i.jsx)(O.Z, {
                      value: r,
                      digitWidth: 9,
                      className: ee.messageCountText
                  })
                : (0, i.jsx)('div', {
                      className: ee.messageCountText,
                      children: r
                  }),
            null == s
                ? null
                : (0, i.jsxs)(f.Text, {
                      className: ee.newMessageCount,
                      variant: 'text-sm/semibold',
                      color: 'text-brand',
                      children: ['(', Q.NW.format(Q.t.z3PEtr, { count: s }), ')']
                  })
        ]
    });
}
function ed(e) {
    let { firstMessage: t, channel: n } = e,
        o = (0, p.e7)([A.Z], () => A.Z.getChannel(n.parent_id)),
        r = (0, F.Bs)(o),
        { disableReactionCreates: a, isLurking: s, isPendingMember: l } = (0, R.Z)(n);
    return null == r || a
        ? null
        : (0, i.jsx)(E.le, {
              className: ee.updateReactionButton,
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
              type: _.O.NORMAL,
              emojiSize: 'reaction',
              emojiSizeTooltip: 'reaction'
          });
}
function eh(e) {
    var t;
    let { firstMessage: n, channel: o } = e,
        r = (0, F.IN)(n),
        { disableReactionUpdates: a, isLurking: s, isPendingMember: l } = (0, R.Z)(o);
    return null == r
        ? null
        : (0, i.jsx)(
              E.le,
              en(
                  {
                      className: ee.updateReactionButton,
                      message: n,
                      readOnly: a || o.isArchivedLockedThread(),
                      isLurking: s,
                      isPendingMember: l,
                      useChatFontScaling: !1,
                      type: r.burst_count >= r.count ? _.O.BURST : _.O.NORMAL,
                      emojiSize: 'reaction',
                      emojiSizeTooltip: 'reaction'
                  },
                  r
              ),
              ''.concat(null !== (t = r.emoji.id) && void 0 !== t ? t : 0, ':').concat(r.emoji.name)
          );
}
function ep(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: o } = (0, B.H)(n.parent_id),
        r = (0, F.xw)(n, o),
        a = null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
        s = null == a ? null : Q.NW.formatToPlainString(Q.t['13euCQ'], { timestamp: (0, D.vc)(u()(a), 'LLLL') });
    return (0, i.jsx)(f.ua7, {
        text: s,
        tooltipClassName: ee.timestampTooltip,
        children: (e) => {
            var t, n;
            return (0, i.jsx)(
                f.Text,
                ((t = en(
                    {
                        className: ee.__invalid_activityText,
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
function em(e) {
    let { channel: t, userIds: n, facepileRef: o } = e,
        r = (0, F.iM)(t, n);
    return (0, i.jsx)('div', {
        ref: o,
        children: (0, i.jsx)(j.Z, {
            className: ee.__invalid_facepile,
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
function ef(e) {
    let t,
        n,
        { channel: o, firstMedia: r } = e,
        s = (0, p.e7)([L.Z], () => L.Z.isFocused()),
        l = (0, T.d$)(r.src),
        c = w.QK.useSetting(),
        [u, d] = (0, S.hL)({
            media: r,
            channel: o
        }),
        h = (0, S.MC)(d),
        { src: m, width: g, height: b, alt: v } = r;
    return (
        b > g ? (n = eo) : (t = ei),
        (0, i.jsx)(f.Rny, {
            enabled: !0,
            children: (0, i.jsxs)('div', {
                className: ee.bodyMedia,
                onClick: (e) => e.stopPropagation(),
                children: [
                    m.startsWith('data:')
                        ? (0, i.jsx)(f.Eep, {
                              src: m,
                              maxHeight: t,
                              maxWidth: n,
                              width: g,
                              height: b,
                              alt: null != v && u ? h : v,
                              className: ee.thumbnailContainer,
                              imageClassName: a()({
                                  [ee.obscured]: u,
                                  [ee.thumbnailOverride]: !0
                              })
                          })
                        : (0, P.Yi)({
                              src: m,
                              maxHeight: t,
                              maxWidth: n,
                              width: g,
                              height: b,
                              alt: null != v && u ? h : v,
                              autoPlay: c,
                              animated: l && !u && s,
                              srcIsAnimated: r.srcIsAnimated,
                              containerClassName: ee.thumbnailContainer,
                              imageClassName: a()({ [ee.obscured]: u }),
                              analyticsSource: 'ForumPostMediaPreview'
                          }),
                    u &&
                        (0, i.jsx)(G.Z, {
                            iconClassname: ee.obscuredTag,
                            obscureReason: d
                        })
                ]
            })
        })
    );
}

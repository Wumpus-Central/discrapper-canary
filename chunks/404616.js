n.d(t, {
    Lp: () => en,
    NN: () => es,
    TJ: () => ei,
    ZP: () => ea,
    au: () => eu,
    kZ: () => ed,
    m9: () => ec,
    og: () => em
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    r = n.n(l),
    c = n(913527),
    d = n.n(c),
    u = n(232713),
    h = n(91192),
    m = n(442837),
    p = n(692547),
    g = n(481060),
    f = n(738619),
    v = n(393238),
    T = n(963374),
    x = n(884338),
    _ = n(446489),
    b = n(824578),
    j = n(95398),
    C = n(406432),
    R = n(169525),
    S = n(566006),
    E = n(255269),
    I = n(937889),
    N = n(443877),
    Z = n(524444),
    y = n(287151),
    A = n(267128),
    O = n(695346),
    M = n(433355),
    P = n(592125),
    w = n(496675),
    L = n(699516),
    k = n(451478),
    U = n(55935),
    B = n(109434),
    F = n(456269),
    D = n(109590),
    V = n(660189),
    G = n(208970),
    H = n(73315),
    z = n(470623),
    W = n(196255),
    J = n(858543),
    K = n(265641),
    X = n(627896),
    Y = n(883728),
    q = n(981631),
    $ = n(217702),
    Q = n(388032),
    ee = n(994973),
    et = n(665162);
let en = 72,
    ei = 72,
    ea = a.memo(function (e) {
        let { threadId: t, goToThread: n, observePostVisibilityAnalytics: o, overrideMedia: l, className: c, containerWidth: d } = e,
            {
                channel: p,
                isOpen: f,
                messageCount: T,
                firstMessage: x,
                content: _,
                media: b
            } = (function (e) {
                let { threadId: t, overrideMedia: n } = e,
                    i = (0, m.e7)([P.Z], () => P.Z.getChannel(t));
                r()(null != i, 'the thread should not be null here, a store must have missed an update');
                let a = (0, m.e7)([M.ZP], () => M.ZP.getCurrentSidebarChannelId(i.parent_id) === i.id),
                    { firstMessage: o } = (0, D.cl)(i),
                    { content: s, firstMedia: l } = (0, F.mX)({ firstMessage: o }),
                    { messageCountText: c } = (0, F.nP)(i);
                return {
                    channel: i,
                    isOpen: a,
                    messageCount: c,
                    firstMessage: o,
                    content: s,
                    media: null != n ? n : l
                };
            })({
                threadId: t,
                overrideMedia: l
            }),
            { ref: j, height: C } = (0, v.Z)(),
            R = (0, z.xH)((e) => e.setCardHeight, u.X);
        a.useEffect(() => {
            null != C && R(t, C);
        }, [C, R, t]),
            a.useEffect(() => {
                null == o || o(j.current, t);
            }, [j, o, t]);
        let S = a.useRef(null),
            { handleLeftClick: E, handleRightClick: I } = (0, Y.Z)({
                facepileRef: S,
                goToThread: n,
                channel: p
            }),
            { role: N, onFocus: Z, ...y } = (0, h.JA)(t),
            { isFocused: A, handleFocus: O, handleBlur: w } = (0, K.Z)(Z);
        return (0, i.jsxs)('div', {
            ref: j,
            'data-item-id': t,
            onClick: E,
            onContextMenu: I,
            className: s()(ee.container, c, { [ee.isOpen]: f }),
            children: [
                (0, i.jsx)(g.P3F, {
                    onClick: E,
                    focusProps: { ringTarget: j },
                    onContextMenu: I,
                    'aria-label': Q.intl.formatToPlainString(Q.t.pgYN6e, {
                        title: p.name,
                        count: T
                    }),
                    className: ee.focusTarget,
                    onFocus: O,
                    onBlur: w,
                    ...y
                }),
                (0, i.jsxs)('div', {
                    className: ee.left,
                    children: [
                        (0, i.jsx)(g.y5t, {
                            children: (0, i.jsx)(eo, {
                                channel: p,
                                firstMessage: x,
                                content: _,
                                hasMediaAttachment: null != b,
                                containerWidth: d
                            })
                        }),
                        (0, i.jsx)(g.Rny, {
                            enabled: !A,
                            children: (0, i.jsx)(er, {
                                channel: p,
                                firstMessage: x,
                                facepileRef: S
                            })
                        })
                    ]
                }),
                (null == x ? void 0 : x.blocked) || null == b
                    ? null
                    : (0, i.jsx)(ep, {
                          channel: p,
                          firstMedia: b
                      })
            ]
        });
    });
function eo(e) {
    let { channel: t, firstMessage: n, content: a, hasMediaAttachment: o, containerWidth: l } = e,
        { isNew: r, hasUnreads: c } = (0, F.J$)(t),
        d = es(t),
        { postTitleRef: u, isNewBadgeOverflow: h } = (0, X.x)(r, 24, l);
    return (0, i.jsxs)('div', {
        className: ee.body,
        children: [
            (0, i.jsx)(J.ZP, { channel: t }),
            (0, i.jsx)('div', {
                className: s()(ee.header, { [ee.withNewBadgeOverflow]: h }),
                children: (0, i.jsxs)('div', {
                    className: ee.headerText,
                    children: [
                        (0, i.jsx)(g.X6q, {
                            variant: 'heading-lg/semibold',
                            color: c ? 'header-primary' : 'text-muted',
                            lineClamp: 2,
                            className: ee.postTitleText,
                            children: (0, i.jsxs)('span', {
                                ref: u,
                                children: [
                                    d,
                                    r &&
                                        (0, i.jsx)('span', {
                                            className: ee.newBadgeWrapper,
                                            children: (0, i.jsx)(g.IGR, {
                                                className: ee.newBadge,
                                                color: p.Z.unsafe_rawColors.BRAND_260.css,
                                                text: Q.intl.string(Q.t.y2b7CA)
                                            })
                                        })
                                ]
                            })
                        }),
                        r &&
                            h &&
                            (0, i.jsx)(g.IGR, {
                                className: ee.newBadge,
                                color: p.Z.unsafe_rawColors.BRAND_260.css,
                                text: Q.intl.string(Q.t.y2b7CA)
                            })
                    ]
                })
            }),
            (0, i.jsx)('div', {
                className: ee.message,
                children: (0, i.jsx)(el, {
                    channel: t,
                    message: n,
                    content: a,
                    hasMediaAttachment: o,
                    hasUnreads: c
                })
            })
        ]
    });
}
function es(e) {
    let t = (0, m.e7)([G.Z], () => G.Z.getHasSearchResults(e.parent_id)),
        n = (0, m.e7)([G.Z], () => G.Z.getSearchQuery(e.parent_id)),
        i = a.useMemo(() => (0, T.nC)(t && null != n ? n : ''), [t, n]);
    return a.useMemo(
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
let el = a.memo(function (e) {
    let { message: t, channel: n, content: a, hasMediaAttachment: o, hasUnreads: l } = e,
        { isBlocked: r, isIgnored: c } = (0, m.cj)([L.Z], () => ({
            isBlocked: null != t && L.Z.isBlockedForMessage(t),
            isIgnored: null != t && L.Z.isIgnoredForMessage(t)
        })),
        d = (0, m.e7)([V.Z], () => V.Z.isLoading(n.id)),
        u = (0, m.e7)([w.Z], () => w.Z.can(q.Plq.MANAGE_MESSAGES, n)),
        h = O.cC.useSetting(),
        p = null;
    if (r)
        p = (0, i.jsx)(g.Text, {
            className: ee.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: Q.intl.string(Q.t.Lkp2fH)
        });
    else if (c)
        p = (0, i.jsx)(g.Text, {
            className: ee.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: Q.intl.string(Q.t.yWK7ZG)
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null
                  }
                : (0, A.f)(t, a, r, c, s()(ee.messageContent, et.inlineFormat, et.__invalid_smallFontSize), {
                      leadingIconClass: ee.messageContentLeadingIcon,
                      trailingIconClass: ee.messageContentTrailingIcon,
                      iconSize: $.WW
                  });
        p =
            null != n
                ? (0, i.jsx)(g.Text, {
                      variant: 'text-sm/semibold',
                      color: l ? 'header-secondary' : 'text-muted',
                      children: n
                  })
                : o
                  ? null
                  : (0, i.jsx)(g.Text, {
                        tag: 'span',
                        variant: 'text-sm/medium',
                        color: l ? 'header-secondary' : 'text-muted',
                        className: ee.messageContent,
                        children: null == t ? (d ? null : Q.intl.string(Q.t.mE3KJC)) : e
                    });
    }
    return (0, i.jsxs)(j.a.Provider, {
        value: (0, E.Z)(h, u),
        children: [
            !r &&
                (0, i.jsx)(W.Z, {
                    channel: n,
                    message: t,
                    renderColon: null != p,
                    hasUnreads: l
                }),
            (0, i.jsx)(g.Rny, {
                className: ee.messageFocusBlock,
                children: p
            })
        ]
    });
});
function er(e) {
    let { channel: t, facepileRef: n, firstMessage: a } = e,
        o = (0, b.Q)(t.id),
        s = (null == a ? void 0 : a.reactions) != null && a.reactions.length > 0;
    return (0, i.jsxs)('div', {
        className: ee.footer,
        children: [
            s || null == a
                ? null
                : (0, i.jsx)(ed, {
                      firstMessage: a,
                      channel: t
                  }),
            null == a
                ? null
                : (0, i.jsx)(eu, {
                      firstMessage: a,
                      channel: t
                  }),
            (0, i.jsx)(ec, {
                channel: t,
                iconSize: 14
            }),
            (0, i.jsx)('span', {
                className: ee.bullet,
                children: '\u2022'
            }),
            o.length > 0
                ? (0, i.jsxs)('div', {
                      className: ee.typing,
                      children: [
                          (0, i.jsx)(em, {
                              channel: t,
                              userIds: o,
                              facepileRef: n
                          }),
                          (0, i.jsx)('div', {
                              className: ee.dots,
                              children: (0, i.jsx)(g.bbz, {
                                  themed: !0,
                                  dotRadius: 2
                              })
                          }),
                          (0, i.jsx)(f.Z, {
                              channel: t,
                              className: ee.typingUsers,
                              renderDots: !1
                          })
                      ]
                  })
                : (0, i.jsx)(eh, { channel: t })
        ]
    });
}
function ec(e) {
    let { channel: t, iconSize: n, showReadState: a = !1 } = e,
        { messageCountText: o, unreadCount: l } = (0, F.nP)(t);
    return (0, i.jsxs)('div', {
        className: s()(ee.messageCountBox, { [ee.hasRead]: a && null == l }),
        children: [
            (0, i.jsx)('span', {
                className: ee.messageCountIcon,
                children: (0, i.jsx)(g.kBi, {
                    size: 'custom',
                    color: 'currentColor',
                    width: n,
                    height: n
                })
            }),
            'number' == typeof o
                ? (0, i.jsx)(_.Z, {
                      value: o,
                      digitWidth: 9,
                      className: ee.messageCountText
                  })
                : (0, i.jsx)('div', {
                      className: ee.messageCountText,
                      children: o
                  }),
            null == l
                ? null
                : (0, i.jsxs)(g.Text, {
                      className: ee.newMessageCount,
                      variant: 'text-sm/semibold',
                      color: 'text-brand',
                      children: ['(', Q.intl.format(Q.t.z3PEtr, { count: l }), ')']
                  })
        ]
    });
}
function ed(e) {
    let { firstMessage: t, channel: n } = e,
        a = (0, m.e7)([P.Z], () => P.Z.getChannel(n.parent_id)),
        o = (0, F.Bs)(a),
        { disableReactionCreates: s, isLurking: l, isPendingMember: r } = (0, N.Z)(n);
    return null == o || s
        ? null
        : (0, i.jsx)(y.le, {
              className: ee.updateReactionButton,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: l,
              isPendingMember: r,
              emoji: o,
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
function eu(e) {
    var t;
    let { firstMessage: n, channel: a } = e,
        o = (0, F.IN)(n),
        { disableReactionUpdates: s, isLurking: l, isPendingMember: r } = (0, N.Z)(a);
    return null == o
        ? null
        : (0, i.jsx)(
              y.le,
              {
                  className: ee.updateReactionButton,
                  message: n,
                  readOnly: s || a.isArchivedLockedThread(),
                  isLurking: l,
                  isPendingMember: r,
                  useChatFontScaling: !1,
                  type: o.burst_count >= o.count ? S.O.BURST : S.O.NORMAL,
                  emojiSize: 'reaction',
                  emojiSizeTooltip: 'reaction',
                  ...o
              },
              ''.concat(null !== (t = o.emoji.id) && void 0 !== t ? t : 0, ':').concat(o.emoji.name)
          );
}
function eh(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: a } = (0, B.H)(n.parent_id),
        o = (0, F.xw)(n, a),
        s = null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
        l = null == s ? null : Q.intl.formatToPlainString(Q.t['13euCQ'], { timestamp: (0, U.vc)(d()(s), 'LLLL') });
    return (0, i.jsx)(g.ua7, {
        text: l,
        tooltipClassName: ee.timestampTooltip,
        children: (e) =>
            (0, i.jsx)(g.Text, {
                className: ee.__invalid_activityText,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                ...e,
                children: o
            })
    });
}
function em(e) {
    let { channel: t, userIds: n, facepileRef: a } = e,
        o = (0, F.iM)(t, n);
    return (0, i.jsx)('div', {
        ref: a,
        children: (0, i.jsx)(x.Z, {
            className: ee.__invalid_facepile,
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
function ep(e) {
    let t,
        n,
        { channel: a, firstMedia: o } = e,
        l = (0, m.e7)([k.Z], () => k.Z.isFocused()),
        r = (0, C.d$)(o.src),
        c = O.QK.useSetting(),
        [d, u] = (0, R.hL)({
            media: o,
            channel: a
        }),
        h = (0, R.MC)(u),
        { src: p, width: f, height: v, alt: T } = o;
    return (
        v > f ? (n = ei) : (t = en),
        (0, i.jsx)(g.Rny, {
            enabled: !0,
            children: (0, i.jsxs)('div', {
                className: ee.bodyMedia,
                onClick: (e) => e.stopPropagation(),
                children: [
                    p.startsWith('data:')
                        ? (0, i.jsx)(g.Eep, {
                              src: p,
                              maxHeight: t,
                              maxWidth: n,
                              width: f,
                              height: v,
                              alt: null != T && d ? h : T,
                              className: ee.thumbnailContainer,
                              imageClassName: s()({
                                  [ee.obscured]: d,
                                  [ee.thumbnailOverride]: !0
                              })
                          })
                        : (0, Z.Yi)({
                              src: p,
                              maxHeight: t,
                              maxWidth: n,
                              width: f,
                              height: v,
                              alt: null != T && d ? h : T,
                              autoPlay: c,
                              animated: r && !d && l,
                              srcIsAnimated: o.srcIsAnimated,
                              containerClassName: ee.thumbnailContainer,
                              imageClassName: s()({ [ee.obscured]: d }),
                              analyticsSource: 'ForumPostMediaPreview'
                          }),
                    d &&
                        (0, i.jsx)(H.Z, {
                            iconClassname: ee.obscuredTag,
                            obscureReason: u
                        })
                ]
            })
        })
    );
}

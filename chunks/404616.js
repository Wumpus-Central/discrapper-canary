i.d(t, {
    Lp: () => ei,
    NN: () => es,
    TJ: () => en,
    ZP: () => ea,
    au: () => eu,
    kZ: () => ed,
    m9: () => ec,
    og: () => em
}),
    i(47120);
var n = i(200651),
    a = i(192379),
    o = i(120356),
    s = i.n(o),
    l = i(512722),
    r = i.n(l),
    c = i(913527),
    d = i.n(c),
    u = i(232713),
    h = i(91192),
    m = i(442837),
    p = i(692547),
    g = i(481060),
    f = i(738619),
    v = i(393238),
    x = i(963374),
    b = i(884338),
    T = i(446489),
    j = i(824578),
    _ = i(95398),
    C = i(406432),
    R = i(169525),
    S = i(566006),
    N = i(255269),
    I = i(937889),
    E = i(443877),
    Z = i(524444),
    y = i(287151),
    O = i(267128),
    A = i(695346),
    M = i(433355),
    P = i(592125),
    w = i(496675),
    L = i(699516),
    k = i(451478),
    B = i(55935),
    U = i(109434),
    F = i(456269),
    V = i(109590),
    D = i(660189),
    G = i(208970),
    H = i(73315),
    z = i(470623),
    W = i(196255),
    K = i(858543),
    J = i(265641),
    X = i(627896),
    Y = i(883728),
    q = i(981631),
    $ = i(217702),
    Q = i(388032),
    ee = i(432667),
    et = i(663362);
let ei = 72,
    en = 72,
    ea = a.memo(function (e) {
        let { threadId: t, goToThread: i, observePostVisibilityAnalytics: o, overrideMedia: l, className: c, containerWidth: d } = e,
            {
                channel: p,
                isOpen: f,
                messageCount: x,
                firstMessage: b,
                content: T,
                media: j
            } = (function (e) {
                let { threadId: t, overrideMedia: i } = e,
                    n = (0, m.e7)([P.Z], () => P.Z.getChannel(t));
                r()(null != n, 'the thread should not be null here, a store must have missed an update');
                let a = (0, m.e7)([M.ZP], () => M.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id),
                    { firstMessage: o } = (0, V.cl)(n),
                    { content: s, firstMedia: l } = (0, F.mX)({ firstMessage: o }),
                    { messageCountText: c } = (0, F.nP)(n);
                return {
                    channel: n,
                    isOpen: a,
                    messageCount: c,
                    firstMessage: o,
                    content: s,
                    media: null != i ? i : l
                };
            })({
                threadId: t,
                overrideMedia: l
            }),
            { ref: _, height: C } = (0, v.Z)(),
            R = (0, z.xH)((e) => e.setCardHeight, u.X);
        a.useEffect(() => {
            null != C && R(t, C);
        }, [C, R, t]),
            a.useEffect(() => {
                null == o || o(_.current, t);
            }, [_, o, t]);
        let S = a.useRef(null),
            { handleLeftClick: N, handleRightClick: I } = (0, Y.Z)({
                facepileRef: S,
                goToThread: i,
                channel: p
            }),
            { role: E, onFocus: Z, ...y } = (0, h.JA)(t),
            { isFocused: O, handleFocus: A, handleBlur: w } = (0, J.Z)(Z);
        return (0, n.jsxs)('div', {
            ref: _,
            'data-item-id': t,
            onClick: N,
            onContextMenu: I,
            className: s()(ee.container, c, { [ee.isOpen]: f }),
            children: [
                (0, n.jsx)(g.P3F, {
                    onClick: N,
                    focusProps: { ringTarget: _ },
                    onContextMenu: I,
                    'aria-label': Q.intl.formatToPlainString(Q.t.pgYN6e, {
                        title: p.name,
                        count: x
                    }),
                    className: ee.focusTarget,
                    onFocus: A,
                    onBlur: w,
                    ...y
                }),
                (0, n.jsxs)('div', {
                    className: ee.left,
                    children: [
                        (0, n.jsx)(g.y5t, {
                            children: (0, n.jsx)(eo, {
                                channel: p,
                                firstMessage: b,
                                content: T,
                                hasMediaAttachment: null != j,
                                containerWidth: d
                            })
                        }),
                        (0, n.jsx)(g.Rny, {
                            enabled: !O,
                            children: (0, n.jsx)(er, {
                                channel: p,
                                firstMessage: b,
                                facepileRef: S
                            })
                        })
                    ]
                }),
                (null == b ? void 0 : b.blocked) || null == j
                    ? null
                    : (0, n.jsx)(ep, {
                          channel: p,
                          firstMedia: j
                      })
            ]
        });
    });
function eo(e) {
    let { channel: t, firstMessage: i, content: a, hasMediaAttachment: o, containerWidth: l } = e,
        { isNew: r, hasUnreads: c } = (0, F.J$)(t),
        d = es(t),
        { postTitleRef: u, isNewBadgeOverflow: h } = (0, X.x)(r, 24, l);
    return (0, n.jsxs)('div', {
        className: ee.body,
        children: [
            (0, n.jsx)(K.ZP, { channel: t }),
            (0, n.jsx)('div', {
                className: s()(ee.header, { [ee.withNewBadgeOverflow]: h }),
                children: (0, n.jsxs)('div', {
                    className: ee.headerText,
                    children: [
                        (0, n.jsx)(g.X6q, {
                            variant: 'heading-lg/semibold',
                            color: c ? 'header-primary' : 'text-muted',
                            lineClamp: 2,
                            className: ee.postTitleText,
                            children: (0, n.jsxs)('span', {
                                ref: u,
                                children: [
                                    d,
                                    r &&
                                        (0, n.jsx)('span', {
                                            className: ee.newBadgeWrapper,
                                            children: (0, n.jsx)(g.IGR, {
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
                            (0, n.jsx)(g.IGR, {
                                className: ee.newBadge,
                                color: p.Z.unsafe_rawColors.BRAND_260.css,
                                text: Q.intl.string(Q.t.y2b7CA)
                            })
                    ]
                })
            }),
            (0, n.jsx)('div', {
                className: ee.message,
                children: (0, n.jsx)(el, {
                    channel: t,
                    message: i,
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
        i = (0, m.e7)([G.Z], () => G.Z.getSearchQuery(e.parent_id)),
        n = a.useMemo(() => (0, x.nC)(t && null != i ? i : ''), [t, i]);
    return a.useMemo(
        () =>
            (0, I.ZP)(
                {
                    content: e.name,
                    embeds: []
                },
                { postProcessor: n }
            ).content,
        [e.name, n]
    );
}
let el = a.memo(function (e) {
    let { message: t, channel: i, content: a, hasMediaAttachment: o, hasUnreads: l } = e,
        { isBlocked: r, isIgnored: c } = (0, m.cj)([L.Z], () => ({
            isBlocked: null != t && L.Z.isBlockedForMessage(t),
            isIgnored: null != t && L.Z.isIgnoredForMessage(t)
        })),
        d = (0, m.e7)([D.Z], () => D.Z.isLoading(i.id)),
        u = (0, m.e7)([w.Z], () => w.Z.can(q.Plq.MANAGE_MESSAGES, i)),
        h = A.cC.useSetting(),
        p = null;
    if (r)
        p = (0, n.jsx)(g.Text, {
            className: ee.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: Q.intl.string(Q.t.Lkp2fH)
        });
    else if (c)
        p = (0, n.jsx)(g.Text, {
            className: ee.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: Q.intl.string(Q.t.yWK7ZG)
        });
    else {
        let { contentPlaceholder: e, renderedContent: i } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null
                  }
                : (0, O.f)(t, a, r, c, s()(ee.messageContent, et.inlineFormat, et.__invalid_smallFontSize), {
                      leadingIconClass: ee.messageContentLeadingIcon,
                      trailingIconClass: ee.messageContentTrailingIcon,
                      iconSize: $.WW
                  });
        p =
            null != i
                ? (0, n.jsx)(g.Text, {
                      variant: 'text-sm/semibold',
                      color: l ? 'header-secondary' : 'text-muted',
                      children: i
                  })
                : o
                  ? null
                  : (0, n.jsx)(g.Text, {
                        tag: 'span',
                        variant: 'text-sm/medium',
                        color: l ? 'header-secondary' : 'text-muted',
                        className: ee.messageContent,
                        children: null == t ? (d ? null : Q.intl.string(Q.t.mE3KJC)) : e
                    });
    }
    return (0, n.jsxs)(_.a.Provider, {
        value: (0, N.Z)(h, u),
        children: [
            !r &&
                (0, n.jsx)(W.Z, {
                    channel: i,
                    message: t,
                    renderColon: null != p,
                    hasUnreads: l
                }),
            (0, n.jsx)(g.Rny, {
                className: ee.messageFocusBlock,
                children: p
            })
        ]
    });
});
function er(e) {
    let { channel: t, facepileRef: i, firstMessage: a } = e,
        o = (0, j.Q)(t.id),
        s = (null == a ? void 0 : a.reactions) != null && a.reactions.length > 0;
    return (0, n.jsxs)('div', {
        className: ee.footer,
        children: [
            s || null == a
                ? null
                : (0, n.jsx)(ed, {
                      firstMessage: a,
                      channel: t
                  }),
            null == a
                ? null
                : (0, n.jsx)(eu, {
                      firstMessage: a,
                      channel: t
                  }),
            (0, n.jsx)(ec, {
                channel: t,
                iconSize: 14
            }),
            (0, n.jsx)('span', {
                className: ee.bullet,
                children: '\u2022'
            }),
            o.length > 0
                ? (0, n.jsxs)('div', {
                      className: ee.typing,
                      children: [
                          (0, n.jsx)(em, {
                              channel: t,
                              userIds: o,
                              facepileRef: i
                          }),
                          (0, n.jsx)('div', {
                              className: ee.dots,
                              children: (0, n.jsx)(g.bbz, {
                                  themed: !0,
                                  dotRadius: 2
                              })
                          }),
                          (0, n.jsx)(f.Z, {
                              channel: t,
                              className: ee.typingUsers,
                              renderDots: !1
                          })
                      ]
                  })
                : (0, n.jsx)(eh, { channel: t })
        ]
    });
}
function ec(e) {
    let { channel: t, iconSize: i, showReadState: a = !1 } = e,
        { messageCountText: o, unreadCount: l } = (0, F.nP)(t);
    return (0, n.jsxs)('div', {
        className: s()(ee.messageCountBox, { [ee.hasRead]: a && null == l }),
        children: [
            (0, n.jsx)('span', {
                className: ee.messageCountIcon,
                children: (0, n.jsx)(g.kBi, {
                    size: 'custom',
                    color: 'currentColor',
                    width: i,
                    height: i
                })
            }),
            'number' == typeof o
                ? (0, n.jsx)(T.Z, {
                      value: o,
                      digitWidth: 9,
                      className: ee.messageCountText
                  })
                : (0, n.jsx)('div', {
                      className: ee.messageCountText,
                      children: o
                  }),
            null == l
                ? null
                : (0, n.jsxs)(g.Text, {
                      className: ee.newMessageCount,
                      variant: 'text-sm/semibold',
                      color: 'text-brand',
                      children: ['(', Q.intl.format(Q.t.z3PEtr, { count: l }), ')']
                  })
        ]
    });
}
function ed(e) {
    let { firstMessage: t, channel: i } = e,
        a = (0, m.e7)([P.Z], () => P.Z.getChannel(i.parent_id)),
        o = (0, F.Bs)(a),
        { disableReactionCreates: s, isLurking: l, isPendingMember: r } = (0, E.Z)(i);
    return null == o || s
        ? null
        : (0, n.jsx)(y.le, {
              className: ee.updateReactionButton,
              message: t,
              readOnly: i.isArchivedLockedThread(),
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
    let { firstMessage: i, channel: a } = e,
        o = (0, F.IN)(i),
        { disableReactionUpdates: s, isLurking: l, isPendingMember: r } = (0, E.Z)(a);
    return null == o
        ? null
        : (0, n.jsx)(
              y.le,
              {
                  className: ee.updateReactionButton,
                  message: i,
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
    let { channel: i } = e,
        { sortOrder: a } = (0, U.H)(i.parent_id),
        o = (0, F.xw)(i, a),
        s = null === (t = i.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
        l = null == s ? null : Q.intl.formatToPlainString(Q.t['13euCQ'], { timestamp: (0, B.vc)(d()(s), 'LLLL') });
    return (0, n.jsx)(g.ua7, {
        text: l,
        tooltipClassName: ee.timestampTooltip,
        children: (e) =>
            (0, n.jsx)(g.Text, {
                className: ee.__invalid_activityText,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                ...e,
                children: o
            })
    });
}
function em(e) {
    let { channel: t, userIds: i, facepileRef: a } = e,
        o = (0, F.iM)(t, i);
    return (0, n.jsx)('div', {
        ref: a,
        children: (0, n.jsx)(b.Z, {
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
        i,
        { channel: a, firstMedia: o } = e,
        l = (0, m.e7)([k.Z], () => k.Z.isFocused()),
        r = (0, C.d$)(o.src),
        c = A.QK.useSetting(),
        [d, u] = (0, R.hL)({
            media: o,
            channel: a
        }),
        h = (0, R.MC)(u),
        { src: p, width: f, height: v, alt: x } = o;
    return (
        v > f ? (i = en) : (t = ei),
        (0, n.jsx)(g.Rny, {
            enabled: !0,
            children: (0, n.jsxs)('div', {
                className: ee.bodyMedia,
                onClick: (e) => e.stopPropagation(),
                children: [
                    p.startsWith('data:')
                        ? (0, n.jsx)(g.Eep, {
                              src: p,
                              maxHeight: t,
                              maxWidth: i,
                              width: f,
                              height: v,
                              alt: null != x && d ? h : x,
                              className: ee.thumbnailContainer,
                              imageClassName: s()({
                                  [ee.obscured]: d,
                                  [ee.thumbnailOverride]: !0
                              })
                          })
                        : (0, Z.Yi)({
                              src: p,
                              maxHeight: t,
                              maxWidth: i,
                              width: f,
                              height: v,
                              alt: null != x && d ? h : x,
                              autoPlay: c,
                              animated: r && !d && l,
                              srcIsAnimated: o.srcIsAnimated,
                              containerClassName: ee.thumbnailContainer,
                              imageClassName: s()({ [ee.obscured]: d }),
                              analyticsSource: 'ForumPostMediaPreview'
                          }),
                    d &&
                        (0, n.jsx)(H.Z, {
                            iconClassname: ee.obscuredTag,
                            obscureReason: u
                        })
                ]
            })
        })
    );
}

n.d(t, {
    Lp: function () {
        return en;
    },
    NN: function () {
        return ea;
    },
    TJ: function () {
        return ei;
    },
    au: function () {
        return ed;
    },
    kZ: function () {
        return ec;
    },
    m9: function () {
        return er;
    },
    og: function () {
        return eh;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(512722),
    r = n.n(l),
    c = n(913527),
    d = n.n(c),
    u = n(232713),
    h = n(91192),
    m = n(442837),
    p = n(692547),
    f = n(481060),
    g = n(738619),
    v = n(393238),
    b = n(963374),
    T = n(884338),
    x = n(446489),
    _ = n(824578),
    j = n(95398),
    C = n(406432),
    S = n(169525),
    E = n(566006),
    I = n(255269),
    R = n(937889),
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
    W = n(470623),
    z = n(196255),
    K = n(858543),
    J = n(265641),
    X = n(627896),
    Y = n(883728),
    q = n(981631),
    $ = n(217702),
    Q = n(388032),
    ee = n(994973),
    et = n(665162);
let en = 72,
    ei = 72;
t.ZP = o.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: a, overrideMedia: l, className: c, containerWidth: d } = e,
        {
            channel: p,
            isOpen: g,
            messageCount: b,
            firstMessage: T,
            content: x,
            media: _
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                i = (0, m.e7)([P.Z], () => P.Z.getChannel(t));
            r()(null != i, 'the thread should not be null here, a store must have missed an update');
            let o = (0, m.e7)([M.ZP], () => M.ZP.getCurrentSidebarChannelId(i.parent_id) === i.id),
                { firstMessage: a } = (0, D.cl)(i),
                { content: s, firstMedia: l } = (0, F.mX)({ firstMessage: a }),
                { messageCountText: c } = (0, F.nP)(i);
            return {
                channel: i,
                isOpen: o,
                messageCount: c,
                firstMessage: a,
                content: s,
                media: null != n ? n : l
            };
        })({
            threadId: t,
            overrideMedia: l
        }),
        { ref: j, height: C } = (0, v.Z)(),
        S = (0, W.xH)((e) => e.setCardHeight, u.X);
    o.useEffect(() => {
        null != C && S(t, C);
    }, [C, S, t]),
        o.useEffect(() => {
            null == a || a(j.current, t);
        }, [j, a, t]);
    let E = o.useRef(null),
        { handleLeftClick: I, handleRightClick: R } = (0, Y.Z)({
            facepileRef: E,
            goToThread: n,
            channel: p
        }),
        { role: N, onFocus: Z, ...y } = (0, h.JA)(t),
        { isFocused: A, handleFocus: O, handleBlur: w } = (0, J.Z)(Z);
    return (0, i.jsxs)('div', {
        ref: j,
        'data-item-id': t,
        onClick: I,
        onContextMenu: R,
        className: s()(ee.container, c, { [ee.isOpen]: g }),
        children: [
            (0, i.jsx)(f.Clickable, {
                onClick: I,
                focusProps: { ringTarget: j },
                onContextMenu: R,
                'aria-label': Q.intl.formatToPlainString(Q.t.pgYN6e, {
                    title: p.name,
                    count: b
                }),
                className: ee.focusTarget,
                onFocus: O,
                onBlur: w,
                ...y
            }),
            (0, i.jsxs)('div', {
                className: ee.left,
                children: [
                    (0, i.jsx)(f.HeadingLevel, {
                        children: (0, i.jsx)(eo, {
                            channel: p,
                            firstMessage: T,
                            content: x,
                            hasMediaAttachment: null != _,
                            containerWidth: d
                        })
                    }),
                    (0, i.jsx)(f.FocusBlock, {
                        enabled: !A,
                        children: (0, i.jsx)(el, {
                            channel: p,
                            firstMessage: T,
                            facepileRef: E
                        })
                    })
                ]
            }),
            (null == T ? void 0 : T.blocked) || null == _
                ? null
                : (0, i.jsx)(em, {
                      channel: p,
                      firstMedia: _
                  })
        ]
    });
});
function eo(e) {
    let { channel: t, firstMessage: n, content: o, hasMediaAttachment: a, containerWidth: l } = e,
        { isNew: r, hasUnreads: c } = (0, F.J$)(t),
        d = ea(t),
        { postTitleRef: u, isNewBadgeOverflow: h } = (0, X.x)(r, 24, l);
    return (0, i.jsxs)('div', {
        className: ee.body,
        children: [
            (0, i.jsx)(K.ZP, { channel: t }),
            (0, i.jsx)('div', {
                className: s()(ee.header, { [ee.withNewBadgeOverflow]: h }),
                children: (0, i.jsxs)('div', {
                    className: ee.headerText,
                    children: [
                        (0, i.jsx)(f.Heading, {
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
                                            children: (0, i.jsx)(f.TextBadge, {
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
                            (0, i.jsx)(f.TextBadge, {
                                className: ee.newBadge,
                                color: p.Z.unsafe_rawColors.BRAND_260.css,
                                text: Q.intl.string(Q.t.y2b7CA)
                            })
                    ]
                })
            }),
            (0, i.jsx)('div', {
                className: ee.message,
                children: (0, i.jsx)(es, {
                    channel: t,
                    message: n,
                    content: o,
                    hasMediaAttachment: a,
                    hasUnreads: c
                })
            })
        ]
    });
}
function ea(e) {
    let t = (0, m.e7)([G.Z], () => G.Z.getHasSearchResults(e.parent_id)),
        n = (0, m.e7)([G.Z], () => G.Z.getSearchQuery(e.parent_id)),
        i = o.useMemo(() => (0, b.nC)(t && null != n ? n : ''), [t, n]);
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
let es = o.memo(function (e) {
    let { message: t, channel: n, content: o, hasMediaAttachment: a, hasUnreads: l } = e,
        { isBlocked: r, isIgnored: c } = (0, m.cj)([L.Z], () => ({
            isBlocked: null != t && L.Z.isBlockedForMessage(t),
            isIgnored: null != t && L.Z.isIgnoredForMessage(t)
        })),
        d = (0, m.e7)([V.Z], () => V.Z.isLoading(n.id)),
        u = (0, m.e7)([w.Z], () => w.Z.can(q.Plq.MANAGE_MESSAGES, n)),
        h = O.cC.useSetting(),
        p = null;
    if (r)
        p = (0, i.jsx)(f.Text, {
            className: ee.blockedMessage,
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: Q.intl.string(Q.t.Lkp2fH)
        });
    else if (c)
        p = (0, i.jsx)(f.Text, {
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
                : (0, A.f)(t, o, r, c, s()(ee.messageContent, et.inlineFormat, et.__invalid_smallFontSize), {
                      leadingIconClass: ee.messageContentLeadingIcon,
                      trailingIconClass: ee.messageContentTrailingIcon,
                      iconSize: $.WW
                  });
        p =
            null != n
                ? (0, i.jsx)(f.Text, {
                      variant: 'text-sm/semibold',
                      color: l ? 'header-secondary' : 'text-muted',
                      children: n
                  })
                : a
                  ? null
                  : (0, i.jsx)(f.Text, {
                        tag: 'span',
                        variant: 'text-sm/medium',
                        color: l ? 'header-secondary' : 'text-muted',
                        className: ee.messageContent,
                        children: null == t ? (d ? null : Q.intl.string(Q.t.mE3KJC)) : e
                    });
    }
    return (0, i.jsxs)(j.a.Provider, {
        value: (0, I.Z)(h, u),
        children: [
            !r &&
                (0, i.jsx)(z.Z, {
                    channel: n,
                    message: t,
                    renderColon: null != p,
                    hasUnreads: l
                }),
            (0, i.jsx)(f.FocusBlock, {
                className: ee.messageFocusBlock,
                children: p
            })
        ]
    });
});
function el(e) {
    let { channel: t, facepileRef: n, firstMessage: o } = e,
        a = (0, _.Q)(t.id),
        s = (null == o ? void 0 : o.reactions) != null && o.reactions.length > 0;
    return (0, i.jsxs)('div', {
        className: ee.footer,
        children: [
            s || null == o
                ? null
                : (0, i.jsx)(ec, {
                      firstMessage: o,
                      channel: t
                  }),
            null == o
                ? null
                : (0, i.jsx)(ed, {
                      firstMessage: o,
                      channel: t
                  }),
            (0, i.jsx)(er, {
                channel: t,
                iconSize: 14
            }),
            (0, i.jsx)('span', {
                className: ee.bullet,
                children: '\u2022'
            }),
            a.length > 0
                ? (0, i.jsxs)('div', {
                      className: ee.typing,
                      children: [
                          (0, i.jsx)(eh, {
                              channel: t,
                              userIds: a,
                              facepileRef: n
                          }),
                          (0, i.jsx)('div', {
                              className: ee.dots,
                              children: (0, i.jsx)(f.Dots, {
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
                : (0, i.jsx)(eu, { channel: t })
        ]
    });
}
function er(e) {
    let { channel: t, iconSize: n, showReadState: o = !1 } = e,
        { messageCountText: a, unreadCount: l } = (0, F.nP)(t);
    return (0, i.jsxs)('div', {
        className: s()(ee.messageCountBox, { [ee.hasRead]: o && null == l }),
        children: [
            (0, i.jsx)('span', {
                className: ee.messageCountIcon,
                children: (0, i.jsx)(f.ChatIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: n,
                    height: n
                })
            }),
            'number' == typeof a
                ? (0, i.jsx)(x.Z, {
                      value: a,
                      digitWidth: 9,
                      className: ee.messageCountText
                  })
                : (0, i.jsx)('div', {
                      className: ee.messageCountText,
                      children: a
                  }),
            null == l
                ? null
                : (0, i.jsxs)(f.Text, {
                      className: ee.newMessageCount,
                      variant: 'text-sm/semibold',
                      color: 'text-brand',
                      children: ['(', Q.intl.format(Q.t.z3PEtr, { count: l }), ')']
                  })
        ]
    });
}
function ec(e) {
    let { firstMessage: t, channel: n } = e,
        o = (0, m.e7)([P.Z], () => P.Z.getChannel(n.parent_id)),
        a = (0, F.Bs)(o),
        { disableReactionCreates: s, isLurking: l, isPendingMember: r } = (0, N.Z)(n);
    return null == a || s
        ? null
        : (0, i.jsx)(y.le, {
              className: ee.updateReactionButton,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: l,
              isPendingMember: r,
              emoji: a,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: E.O.NORMAL,
              emojiSize: 'reaction',
              emojiSizeTooltip: 'reaction'
          });
}
function ed(e) {
    var t;
    let { firstMessage: n, channel: o } = e,
        a = (0, F.IN)(n),
        { disableReactionUpdates: s, isLurking: l, isPendingMember: r } = (0, N.Z)(o);
    return null == a
        ? null
        : (0, i.jsx)(
              y.le,
              {
                  className: ee.updateReactionButton,
                  message: n,
                  readOnly: s || o.isArchivedLockedThread(),
                  isLurking: l,
                  isPendingMember: r,
                  useChatFontScaling: !1,
                  type: a.burst_count >= a.count ? E.O.BURST : E.O.NORMAL,
                  emojiSize: 'reaction',
                  emojiSizeTooltip: 'reaction',
                  ...a
              },
              ''.concat(null !== (t = a.emoji.id) && void 0 !== t ? t : 0, ':').concat(a.emoji.name)
          );
}
function eu(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: o } = (0, B.H)(n.parent_id),
        a = (0, F.xw)(n, o),
        s = null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
        l = null == s ? null : Q.intl.formatToPlainString(Q.t['13euCQ'], { timestamp: (0, U.vc)(d()(s), 'LLLL') });
    return (0, i.jsx)(f.Tooltip, {
        text: l,
        tooltipClassName: ee.timestampTooltip,
        children: (e) =>
            (0, i.jsx)(f.Text, {
                className: ee.__invalid_activityText,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                ...e,
                children: a
            })
    });
}
function eh(e) {
    let { channel: t, userIds: n, facepileRef: o } = e,
        a = (0, F.iM)(t, n);
    return (0, i.jsx)('div', {
        ref: o,
        children: (0, i.jsx)(T.Z, {
            className: ee.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: a,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0
        })
    });
}
function em(e) {
    let t,
        n,
        { channel: o, firstMedia: a } = e,
        l = (0, m.e7)([k.Z], () => k.Z.isFocused()),
        r = (0, C.d$)(a.src),
        c = O.QK.useSetting(),
        [d, u] = (0, S.hL)({
            media: a,
            channel: o
        }),
        h = (0, S.MC)(u),
        { src: p, width: g, height: v, alt: b } = a;
    return (
        v > g ? (n = ei) : (t = en),
        (0, i.jsx)(f.FocusBlock, {
            enabled: !0,
            children: (0, i.jsxs)('div', {
                className: ee.bodyMedia,
                onClick: (e) => e.stopPropagation(),
                children: [
                    p.startsWith('data:')
                        ? (0, i.jsx)(f.Image, {
                              src: p,
                              maxHeight: t,
                              maxWidth: n,
                              width: g,
                              height: v,
                              alt: null != b && d ? h : b,
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
                              width: g,
                              height: v,
                              alt: null != b && d ? h : b,
                              autoPlay: c,
                              animated: r && !d && l,
                              srcIsAnimated: a.srcIsAnimated,
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

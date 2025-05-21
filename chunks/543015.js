n.d(t, { ZP: () => eu }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(512722),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(760907),
    m = n(91192),
    h = n(442837),
    g = n(692547),
    f = n(481060),
    x = n(738619),
    p = n(393238),
    b = n(884338),
    j = n(168107),
    v = n(480916),
    C = n(446489),
    _ = n(824578),
    y = n(95398),
    O = n(247206),
    w = n(109434),
    N = n(456269),
    S = n(109590),
    P = n(368844),
    T = n(660189),
    I = n(73315),
    E = n(470623),
    k = n(858543),
    R = n(265641),
    Z = n(627896),
    M = n(883728),
    A = n(39154),
    L = n(712950),
    F = n(406432),
    D = n(169525),
    z = n(566006),
    B = n(255269),
    H = n(937889),
    U = n(443877),
    V = n(524444),
    G = n(287151),
    q = n(267128),
    W = n(695346),
    X = n(433355),
    K = n(592125),
    J = n(375954),
    Y = n(496675),
    Q = n(914010),
    $ = n(594174),
    ee = n(451478),
    et = n(55935),
    en = n(216572),
    er = n(724739),
    el = n(981631),
    ei = n(217702),
    ea = n(388032),
    es = n(381112),
    eo = n(602512),
    ec = n(73433);
function ed(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let eu = l.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: i, overrideMedia: s, className: c, containerWidth: d } = e,
        {
            channel: g,
            isOpen: x,
            messageCount: b,
            content: j,
            firstMessage: v,
            media: C
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                r = (0, h.e7)([K.Z], () => K.Z.getChannel(t));
            o()(null != r, 'the thread should not be null here, a store must have missed an update');
            let i = (0, h.e7)([X.ZP], () => X.ZP.getCurrentSidebarChannelId(r.parent_id) === r.id),
                { firstMessage: a } = (0, S.cl)(r),
                s = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: r = !0 } = e,
                        i = (0, L.p)(),
                        a = l.useMemo(() => (null != t ? (0, A.Z)(t, null == t ? void 0 : t.messageSnapshots[0]) : null), [t]),
                        { hasSpoilerEmbeds: s, content: o } = l.useMemo(
                            () =>
                                (null == a ? void 0 : a.content) != null && '' !== a.content
                                    ? (0, H.ZP)(a, {
                                          formatInline: n,
                                          noStyleAndInteraction: r,
                                          allowHeading: !0,
                                          allowList: !0,
                                          shouldFilterKeywords: i
                                      })
                                    : {
                                          hasSpoilerEmbeds: !1,
                                          content: null
                                      },
                            [n, a, r, i]
                        ),
                        c = (0, P.eL)(t, s),
                        d = (0, P.vg)(t, s);
                    return null == t
                        ? null
                        : {
                              hasSpoilerEmbeds: s,
                              content: o,
                              firstMedia: c,
                              firstMediaIsEmbed: d
                          };
                })({ firstMessage: a }),
                c = null == s ? void 0 : s.content,
                d = null == s ? void 0 : s.firstMedia,
                { messageCountText: u } = (0, N.nP)(r);
            return {
                channel: r,
                isOpen: i,
                messageCount: u,
                firstMessage: a,
                content: c,
                media: null != n ? n : d
            };
        })({
            threadId: t,
            overrideMedia: s
        });
    (0, en.KK)(v);
    let _ = (0, h.e7)([$.default, J.Z], () => {
            var e, t, n, r, l, i;
            let a = $.default.getUser(null == v || null == (t = v.messageSnapshots[0]) || null == (e = t.moderatorReport) ? void 0 : e.reported_user_id);
            if (null != a) return a;
            if ((null == v || null == (n = v.messageReference) ? void 0 : n.channel_id) != null && (null == v || null == (r = v.messageReference) ? void 0 : r.message_id) != null) {
                let e = J.Z.getMessage(null == v || null == (l = v.messageReference) ? void 0 : l.channel_id, null == v || null == (i = v.messageReference) ? void 0 : i.message_id);
                if (null != e) return e.author;
            }
            return null;
        }),
        { ref: y, height: O } = (0, p.ZP)(),
        w = (0, E.xH)((e) => e.setCardHeight, u.X);
    l.useEffect(() => {
        null != O && w(t, O);
    }, [O, w, t]),
        l.useEffect(() => {
            null == i || i(y.current, t);
        }, [y, i, t]);
    let T = l.useRef(null),
        { handleLeftClick: I, handleRightClick: k } = (0, M.Z)({
            facepileRef: T,
            goToThread: n,
            channel: g
        }),
        Z = (0, m.JA)(t),
        { role: F, onFocus: D } = Z,
        z = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(Z, ['role', 'onFocus']),
        { isFocused: B, handleFocus: U, handleBlur: V } = (0, R.Z)(D);
    return (0, r.jsxs)('div', {
        ref: y,
        'data-item-id': t,
        onClick: I,
        onContextMenu: k,
        className: a()(eo.container, es.container, c, { [eo.isOpen]: x }),
        children: [
            (0, r.jsx)(
                f.P3F,
                ed(
                    {
                        onClick: I,
                        focusProps: { ringTarget: y },
                        onContextMenu: k,
                        'aria-label': ea.intl.formatToPlainString(ea.t.pgYN6e, {
                            title: g.name,
                            count: b
                        }),
                        className: eo.focusTarget,
                        onFocus: U,
                        onBlur: V
                    },
                    z
                )
            ),
            (0, r.jsxs)('div', {
                className: eo.left,
                children: [
                    (0, r.jsx)(f.y5t, {
                        children: (0, r.jsxs)('div', {
                            className: es.contentAndMedia,
                            children: [
                                (0, r.jsx)(em, {
                                    channel: g,
                                    firstMessage: v,
                                    content: j,
                                    hasMediaAttachment: null != C,
                                    containerWidth: d,
                                    originalAuthor: _
                                }),
                                (null == v ? void 0 : v.blocked) || null == C
                                    ? null
                                    : (0, r.jsx)(ev, {
                                          channel: g,
                                          firstMedia: C
                                      })
                            ]
                        })
                    }),
                    (0, r.jsx)(f.Rny, {
                        enabled: !B,
                        children: (0, r.jsx)(eg, {
                            channel: g,
                            firstMessage: v,
                            facepileRef: T
                        })
                    })
                ]
            })
        ]
    });
});
function em(e) {
    let { channel: t, firstMessage: n, content: l, hasMediaAttachment: i, containerWidth: s, originalAuthor: o } = e,
        { isNew: c, hasUnreads: d } = (0, N.J$)(t),
        { postTitleRef: u, isNewBadgeOverflow: m } = (0, Z.x)(c, 24, s);
    return (0, r.jsxs)('div', {
        className: a()(es.body, eo.body),
        children: [
            (0, r.jsx)(k.ZP, { channel: t }),
            (0, r.jsx)('div', {
                className: a()(eo.header, { [eo.withNewBadgeOverflow]: m }),
                children: (0, r.jsxs)('div', {
                    className: eo.headerText,
                    children: [
                        (0, r.jsx)(f.X6q, {
                            variant: 'heading-lg/semibold',
                            color: d ? 'header-primary' : 'text-muted',
                            lineClamp: 2,
                            className: eo.postTitleText,
                            children: (0, r.jsx)('span', {
                                ref: u,
                                children:
                                    c &&
                                    (0, r.jsx)('span', {
                                        className: eo.newBadgeWrapper,
                                        children: (0, r.jsx)(f.IGR, {
                                            className: eo.newBadge,
                                            color: g.Z.unsafe_rawColors.BRAND_260.css,
                                            text: ea.intl.string(ea.t.y2b7CA)
                                        })
                                    })
                            })
                        }),
                        c &&
                            m &&
                            (0, r.jsx)(f.IGR, {
                                className: eo.newBadge,
                                color: g.Z.unsafe_rawColors.BRAND_260.css,
                                text: ea.intl.string(ea.t.y2b7CA)
                            })
                    ]
                })
            }),
            (0, r.jsx)('div', {
                className: (eo.message, es.message),
                children: (0, r.jsx)(eh, {
                    channel: t,
                    message: n,
                    content: l,
                    hasMediaAttachment: i,
                    hasUnreads: d,
                    originalAuthor: o
                })
            })
        ]
    });
}
let eh = l.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: i, hasUnreads: s, originalAuthor: o } = e,
        c = (0, h.e7)([T.Z], () => T.Z.isLoading(n.id)),
        d = (0, h.e7)([Y.Z], () => Y.Z.can(el.Plq.MANAGE_MESSAGES, n)),
        u = W.cC.useSetting(),
        m = (0, h.e7)([Q.Z], () => Q.Z.getGuildId()),
        { contentPlaceholder: g, renderedContent: x } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null
                  }
                : (0, q.f)(t, l, !1, !1, a()(eo.messageContent, es.messageContent, ec.inlineFormat, ec.__invalid_smallFontSize), {
                      leadingIconClass: eo.messageContentLeadingIcon,
                      trailingIconClass: eo.messageContentTrailingIcon,
                      iconSize: ei.WW
                  }),
        p =
            null != x
                ? (0, r.jsx)(f.Text, {
                      variant: 'text-md/normal',
                      children: x
                  })
                : i
                  ? null
                  : (0, r.jsx)(f.Text, {
                        tag: 'span',
                        variant: 'text-sm/medium',
                        color: s ? 'header-secondary' : 'text-muted',
                        className: eo.messageContent,
                        'aria-label': '',
                        children: null == t ? (c ? null : ea.intl.string(ea.t.mE3KJC)) : g
                    });
    return (0, r.jsxs)(y.aQ.Provider, {
        value: (0, B.Z)(u, d),
        children: [
            null != o
                ? (0, r.jsx)(f.qEK, {
                      size: f.EFr.SIZE_40,
                      src: o.getAvatarURL(m, (0, f.pxk)(f.EFr.SIZE_40)),
                      'aria-label': '',
                      className: es.originalMessageAuthorAvatar
                  })
                : null,
            (0, r.jsxs)('div', {
                className: es.originalMessageAuthorAndContent,
                children: [
                    (0, r.jsx)(er.Z, {
                        channel: n,
                        originalAuthor: o,
                        message: t
                    }),
                    (0, r.jsx)(f.Rny, {
                        className: eo.messageFocusBlock,
                        children: p
                    })
                ]
            })
        ]
    });
});
function eg(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        i = (0, _.Q)(t.id),
        a = (null == l ? void 0 : l.reactions) != null && l.reactions.length > 0;
    return (0, r.jsxs)('div', {
        className: es.footer,
        children: [
            (0, r.jsxs)('div', {
                className: es.footerChannelTitle,
                children: [
                    (0, r.jsx)(f.U65, {
                        size: 'custom',
                        width: 14,
                        height: 14
                    }),
                    (0, r.jsx)(f.Text, {
                        variant: 'text-sm/medium',
                        children: t.name
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: es.footerMessageSummary,
                children: [
                    a || null == l
                        ? null
                        : (0, r.jsx)(ex, {
                              firstMessage: l,
                              channel: t
                          }),
                    (0, r.jsx)(ef, {
                        channel: t,
                        iconSize: 14
                    }),
                    (0, r.jsx)('span', {
                        className: eo.bullet,
                        children: '\u2022'
                    }),
                    i.length > 0
                        ? (0, r.jsxs)('div', {
                              className: eo.typing,
                              children: [
                                  (0, r.jsx)(eb, {
                                      channel: t,
                                      userIds: i,
                                      facepileRef: n
                                  }),
                                  (0, r.jsx)('div', {
                                      className: eo.dots,
                                      children: (0, r.jsx)(f.bbz, {
                                          themed: !0,
                                          dotRadius: 2
                                      })
                                  }),
                                  (0, r.jsx)(x.Z, {
                                      channel: t,
                                      className: eo.typingUsers,
                                      renderDots: !1
                                  })
                              ]
                          })
                        : (0, r.jsx)(ep, { channel: t })
                ]
            })
        ]
    });
}
function ef(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: i, unreadCount: s } = (0, N.nP)(t);
    return (0, r.jsxs)('div', {
        className: a()(eo.messageCountBox, { [eo.hasRead]: l && null == s }),
        children: [
            (0, r.jsx)('span', {
                className: eo.messageCountIcon,
                children: (0, r.jsx)(f.kBi, {
                    size: 'custom',
                    color: 'currentColor',
                    width: n,
                    height: n
                })
            }),
            'number' == typeof i
                ? (0, r.jsx)(C.Z, {
                      value: i,
                      digitWidth: 9,
                      className: eo.messageCountText
                  })
                : (0, r.jsx)('div', {
                      className: eo.messageCountText,
                      children: i
                  }),
            null == s
                ? null
                : (0, r.jsxs)(f.Text, {
                      className: eo.newMessageCount,
                      variant: 'text-sm/semibold',
                      color: 'text-brand',
                      children: ['(', ea.intl.format(ea.t.z3PEtr, { count: s }), ')']
                  })
        ]
    });
}
function ex(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, h.e7)([K.Z], () => K.Z.getChannel(n.parent_id)),
        i = (0, N.Bs)(l),
        { disableReactionCreates: a, isLurking: s, isPendingMember: o } = (0, U.Z)(n);
    return null == i || a
        ? null
        : (0, r.jsx)(G.le, {
              className: eo.updateReactionButton,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: s,
              isPendingMember: o,
              emoji: i,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: z.O.NORMAL,
              emojiSize: 'reaction',
              emojiSizeTooltip: 'reaction'
          });
}
function ep(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: l } = (0, w.H)(n.parent_id),
        i = (0, N.xw)(n, l),
        a = null == (t = n.threadMetadata) ? void 0 : t.createTimestamp,
        s = null == a ? null : ea.intl.formatToPlainString(ea.t['13euCQ'], { timestamp: (0, et.vc)(d()(a), 'LLLL') });
    return (0, r.jsx)(f.ua7, {
        text: s,
        tooltipClassName: eo.timestampTooltip,
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                f.Text,
                ((t = ed(
                    {
                        className: eo.__invalid_activityText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary'
                    },
                    e
                )),
                (n = n = { children: i }),
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
function eb(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        i = (0, N.iM)(t, n);
    return (0, r.jsx)('div', {
        ref: l,
        children: (0, r.jsx)(b.Z, {
            className: eo.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: i,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0
        })
    });
}
function ej(e) {
    let t,
        n,
        { firstMedia: l, shouldObscure: i, obscureReason: s, shouldShowAgeVerification: o } = e,
        c = (0, h.e7)([ee.Z], () => ee.Z.isFocused()),
        d = (0, F.d$)(l.src),
        u = W.QK.useSetting(),
        m = (0, D.MC)(s),
        { src: g, width: x, height: p, alt: b } = l;
    if ((p > x ? (n = 72) : (t = 72), o)) {
        var j;
        return (0, r.jsx)('div', {
            'aria-label': null != (j = null != m ? m : b) ? j : ea.intl.string(ea.t.hqwnc3),
            className: a()(eo.thumbnailContainer, eo.obscuredThumbnailPlaceholder),
            style: {
                maxWidth: t,
                maxHeight: n,
                height: p,
                width: x
            }
        });
    }
    return g.startsWith('data:')
        ? (0, r.jsx)(f.Eep, {
              src: g,
              maxHeight: t,
              maxWidth: n,
              width: x,
              height: p,
              alt: null != b && i ? m : b,
              className: eo.thumbnailContainer,
              imageClassName: a()({
                  [eo.obscured]: i,
                  [eo.thumbnailOverride]: !0
              })
          })
        : (0, V.Yi)({
              src: g,
              maxHeight: t,
              maxWidth: n,
              width: x,
              height: p,
              alt: null != b && i ? m : b,
              autoPlay: u,
              animated: d && !i && c,
              srcIsAnimated: l.srcIsAnimated,
              containerClassName: eo.thumbnailContainer,
              imageClassName: a()({ [eo.obscured]: i }),
              analyticsSource: 'ForumPostMediaPreview'
          });
}
function ev(e) {
    let { channel: t, firstMedia: n } = e,
        [l, i] = (0, D.hL)({
            media: n,
            channel: t
        }),
        a = (0, O.m8)() && i === D.wk.EXPLICIT_CONTENT;
    return (0, r.jsx)(f.Rny, {
        enabled: !0,
        children: (0, r.jsxs)('div', {
            className: (eo.bodyMedia, es.bodyMedia),
            onClick: function (e) {
                e.stopPropagation(), a && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), j.Z.showAgeVerificationGetStartedModal(v.cU.FORUM_POST_MEDIA_PREVIEW));
            },
            children: [
                (0, r.jsx)(ej, {
                    firstMedia: n,
                    shouldObscure: l,
                    obscureReason: i,
                    shouldShowAgeVerification: a
                }),
                l &&
                    (0, r.jsx)(I.Z, {
                        iconClassname: eo.obscuredTag,
                        obscureReason: i
                    })
            ]
        })
    });
}

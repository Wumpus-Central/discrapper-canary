(n.d(t, { ZP: () => ec }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(94171),
    m = n(91192),
    h = n(442837),
    g = n(481060),
    f = n(738619),
    x = n(393238),
    p = n(884338),
    b = n(168107),
    j = n(480916),
    v = n(446489),
    C = n(824578),
    _ = n(95398),
    y = n(247206),
    O = n(109434),
    w = n(456269),
    P = n(109590),
    S = n(368844),
    T = n(660189),
    N = n(73315),
    I = n(470623),
    E = n(858543),
    R = n(265641),
    M = n(883728),
    Z = n(39154),
    k = n(712950),
    A = n(406432),
    L = n(169525),
    F = n(566006),
    D = n(255269),
    z = n(937889),
    B = n(443877),
    H = n(524444),
    U = n(287151),
    V = n(267128),
    G = n(695346),
    q = n(433355),
    W = n(592125),
    X = n(375954),
    K = n(496675),
    J = n(914010),
    Y = n(594174),
    Q = n(451478),
    $ = n(55935),
    ee = n(216572),
    et = n(724739),
    en = n(981631),
    er = n(217702),
    ei = n(388032),
    el = n(381112),
    ea = n(602512),
    es = n(73433);
function eo(e) {
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
let ec = i.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: l, overrideMedia: s, className: c } = e,
        {
            channel: d,
            isOpen: f,
            messageCount: p,
            content: b,
            firstMessage: j,
            media: v
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                r = (0, h.e7)([W.Z], () => W.Z.getChannel(t));
            o()(null != r, 'the thread should not be null here, a store must have missed an update');
            let l = (0, h.e7)([q.ZP], () => q.ZP.getCurrentSidebarChannelId(r.parent_id) === r.id),
                { firstMessage: a } = (0, P.cl)(r),
                s = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: r = !0 } = e,
                        l = (0, k.p)(),
                        a = i.useMemo(() => (null != t ? (0, Z.Z)(t, null == t ? void 0 : t.messageSnapshots[0]) : null), [t]),
                        { hasSpoilerEmbeds: s, content: o } = i.useMemo(
                            () =>
                                (null == a ? void 0 : a.content) != null && '' !== a.content
                                    ? (0, z.ZP)(a, {
                                          formatInline: n,
                                          noStyleAndInteraction: r,
                                          allowHeading: !0,
                                          allowList: !0,
                                          shouldFilterKeywords: l
                                      })
                                    : {
                                          hasSpoilerEmbeds: !1,
                                          content: null
                                      },
                            [n, a, r, l]
                        ),
                        c = (0, S.eL)(t, s),
                        d = (0, S.vg)(t, s);
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
                { messageCountText: u } = (0, w.nP)(r);
            return {
                channel: r,
                isOpen: l,
                messageCount: u,
                firstMessage: a,
                content: c,
                media: null != n ? n : d
            };
        })({
            threadId: t,
            overrideMedia: s
        });
    (0, ee.KK)(j);
    let C = (0, h.e7)([Y.default, X.Z], () => {
            var e, t, n, r, i, l;
            let a = Y.default.getUser(null == j || null == (t = j.messageSnapshots[0]) || null == (e = t.moderatorReport) ? void 0 : e.reported_user_id);
            if (null != a) return a;
            if ((null == j || null == (n = j.messageReference) ? void 0 : n.channel_id) != null && (null == j || null == (r = j.messageReference) ? void 0 : r.message_id) != null) {
                let e = X.Z.getMessage(null == j || null == (i = j.messageReference) ? void 0 : i.channel_id, null == j || null == (l = j.messageReference) ? void 0 : l.message_id);
                if (null != e) return e.author;
            }
            return null;
        }),
        { ref: _, height: y } = (0, x.ZP)(),
        O = (0, I.xH)((e) => e.setCardHeight, u.X);
    (i.useEffect(() => {
        null != y && O(t, y);
    }, [y, O, t]),
        i.useEffect(() => {
            null == l || l(_.current, t);
        }, [_, l, t]));
    let T = i.useRef(null),
        { handleLeftClick: N, handleRightClick: E } = (0, M.Z)({
            facepileRef: T,
            goToThread: n,
            channel: d
        }),
        A = (0, m.JA)(t),
        { role: L, onFocus: F } = A,
        D = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(A, ['role', 'onFocus']),
        { isFocused: B, handleFocus: H, handleBlur: U } = (0, R.Z)(F);
    return (0, r.jsxs)('div', {
        ref: _,
        'data-item-id': t,
        onClick: N,
        onContextMenu: E,
        className: a()(ea.container, el.container, c, { [ea.isOpen]: f }),
        children: [
            (0, r.jsx)(
                g.P3F,
                eo(
                    {
                        onClick: N,
                        focusProps: { ringTarget: _ },
                        onContextMenu: E,
                        'aria-label': ei.intl.formatToPlainString(ei.t.pgYN6e, {
                            title: d.name,
                            count: p
                        }),
                        className: ea.focusTarget,
                        onFocus: H,
                        onBlur: U
                    },
                    D
                )
            ),
            (0, r.jsxs)('div', {
                className: ea.left,
                children: [
                    (0, r.jsx)(g.y5t, {
                        children: (0, r.jsxs)('div', {
                            className: el.contentAndMedia,
                            children: [
                                (0, r.jsx)(ed, {
                                    channel: d,
                                    firstMessage: j,
                                    content: b,
                                    hasMediaAttachment: null != v,
                                    originalAuthor: C
                                }),
                                (null == j ? void 0 : j.blocked) || null == v
                                    ? null
                                    : (0, r.jsx)(eb, {
                                          channel: d,
                                          firstMedia: v
                                      })
                            ]
                        })
                    }),
                    (0, r.jsx)(g.Rny, {
                        enabled: !B,
                        children: (0, r.jsx)(em, {
                            channel: d,
                            firstMessage: j,
                            facepileRef: T
                        })
                    })
                ]
            })
        ]
    });
});
function ed(e) {
    let { channel: t, firstMessage: n, content: i, hasMediaAttachment: l, originalAuthor: s } = e,
        { hasUnreads: o } = (0, w.J$)(t);
    return (0, r.jsxs)('div', {
        className: a()(el.body, ea.body),
        children: [
            (0, r.jsx)(E.ZP, { channel: t }),
            (0, r.jsx)('div', {
                className: (ea.message, el.message),
                children: (0, r.jsx)(eu, {
                    channel: t,
                    message: n,
                    content: i,
                    hasMediaAttachment: l,
                    hasUnreads: o,
                    originalAuthor: s
                })
            })
        ]
    });
}
let eu = i.memo(function (e) {
    let { message: t, channel: n, content: i, hasMediaAttachment: l, hasUnreads: s, originalAuthor: o } = e,
        c = (0, h.e7)([T.Z], () => T.Z.isLoading(n.id)),
        d = (0, h.e7)([K.Z], () => K.Z.can(en.Plq.MANAGE_MESSAGES, n)),
        u = G.cC.useSetting(),
        m = (0, h.e7)([J.Z], () => J.Z.getGuildId()),
        { contentPlaceholder: f, renderedContent: x } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null
                  }
                : (0, V.f)(t, i, !1, !1, a()(ea.messageContent, el.messageContent, es.inlineFormat, es.__invalid_smallFontSize), {
                      leadingIconClass: ea.messageContentLeadingIcon,
                      trailingIconClass: ea.messageContentTrailingIcon,
                      iconSize: er.WW
                  }),
        p =
            null != x
                ? (0, r.jsx)(g.Text, {
                      variant: 'text-md/normal',
                      children: x
                  })
                : l
                  ? null
                  : (0, r.jsx)(g.Text, {
                        tag: 'span',
                        variant: 'text-sm/medium',
                        color: s ? 'header-secondary' : 'text-muted',
                        className: a()(ea.messageContent, el.messageContent),
                        'aria-label': '',
                        children: null == t ? (c ? null : ei.intl.string(ei.t.mE3KJC)) : f
                    });
    return (0, r.jsxs)(_.aQ.Provider, {
        value: (0, D.Z)(u, d),
        children: [
            null != o
                ? (0, r.jsx)(g.qEK, {
                      size: g.EFr.SIZE_40,
                      src: o.getAvatarURL(m, (0, g.pxk)(g.EFr.SIZE_40)),
                      'aria-label': '',
                      className: el.originalMessageAuthorAvatar
                  })
                : null,
            (0, r.jsxs)('div', {
                className: el.originalMessageAuthorAndContent,
                children: [
                    (0, r.jsx)(et.Z, {
                        channel: n,
                        originalAuthor: o,
                        message: t
                    }),
                    (0, r.jsx)(g.Rny, {
                        className: ea.messageFocusBlock,
                        children: p
                    })
                ]
            })
        ]
    });
});
function em(e) {
    let { channel: t, facepileRef: n, firstMessage: i } = e,
        { isNew: l } = (0, w.J$)(t),
        a = (0, C.Q)(t.id),
        s = (null == i ? void 0 : i.reactions) != null && i.reactions.length > 0;
    return (0, r.jsxs)('div', {
        className: el.footer,
        children: [
            (0, r.jsxs)('div', {
                className: el.footerChannelTitle,
                children: [
                    (0, r.jsx)(g.U65, {
                        size: 'custom',
                        width: 14,
                        height: 14
                    }),
                    (0, r.jsx)(g.Text, {
                        variant: 'text-sm/medium',
                        children: t.name
                    }),
                    l
                        ? (0, r.jsx)(g.IGR, {
                              color: g.TVs.unsafe_rawColors.BRAND_260.css,
                              text: ei.intl.string(ei.t.y2b7CA),
                              className: el.newBadge
                          })
                        : null
                ]
            }),
            (0, r.jsxs)('div', {
                className: el.footerMessageSummary,
                children: [
                    s || null == i
                        ? null
                        : (0, r.jsx)(eg, {
                              firstMessage: i,
                              channel: t
                          }),
                    (0, r.jsx)(eh, {
                        channel: t,
                        iconSize: 14
                    }),
                    (0, r.jsx)('span', {
                        className: ea.bullet,
                        children: '\u2022'
                    }),
                    a.length > 0
                        ? (0, r.jsxs)('div', {
                              className: ea.typing,
                              children: [
                                  (0, r.jsx)(ex, {
                                      channel: t,
                                      userIds: a,
                                      facepileRef: n
                                  }),
                                  (0, r.jsx)('div', {
                                      className: ea.dots,
                                      children: (0, r.jsx)(g.bbz, {
                                          themed: !0,
                                          dotRadius: 2
                                      })
                                  }),
                                  (0, r.jsx)(f.ZP, {
                                      channel: t,
                                      className: ea.typingUsers,
                                      renderDots: !1
                                  })
                              ]
                          })
                        : (0, r.jsx)(ef, { channel: t })
                ]
            })
        ]
    });
}
function eh(e) {
    let { channel: t, iconSize: n, showReadState: i = !1 } = e,
        { messageCountText: l, unreadCount: s } = (0, w.nP)(t);
    return (0, r.jsxs)('div', {
        className: a()(ea.messageCountBox, { [ea.hasRead]: i && null == s }),
        children: [
            (0, r.jsx)('span', {
                className: ea.messageCountIcon,
                children: (0, r.jsx)(g.kBi, {
                    size: 'custom',
                    color: 'currentColor',
                    width: n,
                    height: n
                })
            }),
            'number' == typeof l
                ? (0, r.jsx)(v.Z, {
                      value: l,
                      digitWidth: 9,
                      className: ea.messageCountText
                  })
                : (0, r.jsx)('div', {
                      className: ea.messageCountText,
                      children: l
                  }),
            null == s
                ? null
                : (0, r.jsxs)(g.Text, {
                      className: ea.newMessageCount,
                      variant: 'text-sm/semibold',
                      color: 'text-brand',
                      children: ['(', ei.intl.format(ei.t.z3PEtr, { count: s }), ')']
                  })
        ]
    });
}
function eg(e) {
    let { firstMessage: t, channel: n } = e,
        i = (0, h.e7)([W.Z], () => W.Z.getChannel(n.parent_id)),
        l = (0, w.Bs)(i),
        { disableReactionCreates: a, isLurking: s, isPendingMember: o } = (0, B.Z)(n);
    return null == l || a
        ? null
        : (0, r.jsx)(U.le, {
              className: ea.updateReactionButton,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: s,
              isPendingMember: o,
              emoji: l,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: F.O.NORMAL,
              emojiSize: 'reaction',
              emojiSizeTooltip: 'reaction'
          });
}
function ef(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: i } = (0, O.H)(n.parent_id),
        l = (0, w.xw)(n, i),
        a = null == (t = n.threadMetadata) ? void 0 : t.createTimestamp,
        s = null == a ? null : ei.intl.formatToPlainString(ei.t['13euCQ'], { timestamp: (0, $.vc)(d()(a), 'LLLL') });
    return (0, r.jsx)(g.ua7, {
        text: s,
        tooltipClassName: ea.timestampTooltip,
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                g.Text,
                ((t = eo(
                    {
                        className: ea.__invalid_activityText,
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
function ex(e) {
    let { channel: t, userIds: n, facepileRef: i } = e,
        l = (0, w.iM)(t, n);
    return (0, r.jsx)('div', {
        ref: i,
        children: (0, r.jsx)(p.ZP, {
            className: ea.__invalid_facepile,
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
function ep(e) {
    let t,
        n,
        { firstMedia: i, shouldObscure: l, obscureReason: s, shouldShowAgeVerification: o } = e,
        c = (0, h.e7)([Q.Z], () => Q.Z.isFocused()),
        d = (0, A.d$)(i.src),
        u = G.QK.useSetting(),
        m = (0, L.MC)(s),
        { src: f, width: x, height: p, alt: b } = i;
    if ((p > x ? (n = 72) : (t = 72), o)) {
        var j;
        return (0, r.jsx)('div', {
            'aria-label': null != (j = null != m ? m : b) ? j : ei.intl.string(ei.t.hqwnc3),
            className: a()(ea.thumbnailContainer, ea.obscuredThumbnailPlaceholder),
            style: {
                maxWidth: t,
                maxHeight: n,
                height: p,
                width: x
            }
        });
    }
    return f.startsWith('data:')
        ? (0, r.jsx)(g.Eep, {
              src: f,
              maxHeight: t,
              maxWidth: n,
              width: x,
              height: p,
              alt: null != b && l ? m : b,
              className: ea.thumbnailContainer,
              imageClassName: a()({
                  [ea.obscured]: l,
                  [ea.thumbnailOverride]: !0
              })
          })
        : (0, H.Yi)({
              src: f,
              maxHeight: t,
              maxWidth: n,
              width: x,
              height: p,
              alt: null != b && l ? m : b,
              autoPlay: u,
              animated: d && !l && c,
              srcIsAnimated: i.srcIsAnimated,
              containerClassName: ea.thumbnailContainer,
              imageClassName: a()({ [ea.obscured]: l }),
              analyticsSource: 'ForumPostMediaPreview'
          });
}
function eb(e) {
    let { channel: t, firstMedia: n } = e,
        [i, l] = (0, L.hL)({
            media: n,
            channel: t
        }),
        s = (0, y.JO)(l);
    return (0, r.jsx)(g.Rny, {
        enabled: !0,
        children: (0, r.jsxs)('div', {
            className: a()(ea.bodyMedia, el.bodyMedia),
            onClick: function (e) {
                (e.stopPropagation(), s && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), b.Z.showAgeVerificationGetStartedModal(j.cU.FORUM_POST_MEDIA_PREVIEW)));
            },
            children: [
                (0, r.jsx)(ep, {
                    firstMedia: n,
                    shouldObscure: i,
                    obscureReason: l,
                    shouldShowAgeVerification: s
                }),
                i &&
                    (0, r.jsx)(N.Z, {
                        iconClassname: ea.obscuredTag,
                        obscureReason: l
                    })
            ]
        })
    });
}

(n.d(t, { ZP: () => ec }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
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
    _ = n(824578),
    C = n(95398),
    y = n(247206),
    O = n(109434),
    w = n(456269),
    N = n(109590),
    T = n(368844),
    S = n(660189),
    P = n(73315),
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
    G = n(267128),
    V = n(695346),
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
    ea = n(381112),
    el = n(602512),
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
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: a, overrideMedia: s, className: c } = e,
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
            let a = (0, h.e7)([q.ZP], () => q.ZP.getCurrentSidebarChannelId(r.parent_id) === r.id),
                { firstMessage: l } = (0, N.cl)(r),
                s = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: r = !0 } = e,
                        a = (0, k.p)(),
                        l = i.useMemo(() => (null != t ? (0, Z.Z)(t, null == t ? void 0 : t.messageSnapshots[0]) : null), [t]),
                        { hasSpoilerEmbeds: s, content: o } = i.useMemo(
                            () =>
                                (null == l ? void 0 : l.content) != null && '' !== l.content
                                    ? (0, z.ZP)(l, {
                                          formatInline: n,
                                          noStyleAndInteraction: r,
                                          allowHeading: !0,
                                          allowList: !0,
                                          shouldFilterKeywords: a
                                      })
                                    : {
                                          hasSpoilerEmbeds: !1,
                                          content: null
                                      },
                            [n, l, r, a]
                        ),
                        c = (0, T.eL)(t, s),
                        d = (0, T.vg)(t, s);
                    return null == t
                        ? null
                        : {
                              hasSpoilerEmbeds: s,
                              content: o,
                              firstMedia: c,
                              firstMediaIsEmbed: d
                          };
                })({ firstMessage: l }),
                c = null == s ? void 0 : s.content,
                d = null == s ? void 0 : s.firstMedia,
                { messageCountText: u } = (0, w.nP)(r);
            return {
                channel: r,
                isOpen: a,
                messageCount: u,
                firstMessage: l,
                content: c,
                media: null != n ? n : d
            };
        })({
            threadId: t,
            overrideMedia: s
        });
    (0, ee.KK)(j);
    let _ = (0, h.e7)([Y.default, X.Z], () => {
            var e, t, n, r, i, a;
            let l = Y.default.getUser(null == j || null == (t = j.messageSnapshots[0]) || null == (e = t.moderatorReport) ? void 0 : e.reported_user_id);
            if (null != l) return l;
            if ((null == j || null == (n = j.messageReference) ? void 0 : n.channel_id) != null && (null == j || null == (r = j.messageReference) ? void 0 : r.message_id) != null) {
                let e = X.Z.getMessage(null == j || null == (i = j.messageReference) ? void 0 : i.channel_id, null == j || null == (a = j.messageReference) ? void 0 : a.message_id);
                if (null != e) return e.author;
            }
            return null;
        }),
        { ref: C, height: y } = (0, x.ZP)(),
        O = (0, I.xH)((e) => e.setCardHeight, u.X);
    (i.useEffect(() => {
        null != y && O(t, y);
    }, [y, O, t]),
        i.useEffect(() => {
            null == a || a(C.current, t);
        }, [C, a, t]));
    let S = i.useRef(null),
        { handleLeftClick: P, handleRightClick: E } = (0, M.Z)({
            facepileRef: S,
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
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(A, ['role', 'onFocus']),
        { isFocused: B, handleFocus: H, handleBlur: U } = (0, R.Z)(F);
    return (0, r.jsxs)('div', {
        ref: C,
        'data-item-id': t,
        onClick: P,
        onContextMenu: E,
        className: l()(el.container, ea.container, c, { [el.isOpen]: f }),
        children: [
            (0, r.jsx)(
                g.P3F,
                eo(
                    {
                        onClick: P,
                        focusProps: { ringTarget: C },
                        onContextMenu: E,
                        'aria-label': ei.intl.formatToPlainString(ei.t.pgYN6e, {
                            title: d.name,
                            count: p
                        }),
                        className: el.focusTarget,
                        onFocus: H,
                        onBlur: U
                    },
                    D
                )
            ),
            (0, r.jsxs)('div', {
                className: el.left,
                children: [
                    (0, r.jsx)(g.y5t, {
                        children: (0, r.jsxs)('div', {
                            className: ea.contentAndMedia,
                            children: [
                                (0, r.jsx)(ed, {
                                    channel: d,
                                    firstMessage: j,
                                    content: b,
                                    hasMediaAttachment: null != v,
                                    originalAuthor: _
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
                            facepileRef: S
                        })
                    })
                ]
            })
        ]
    });
});
function ed(e) {
    let { channel: t, firstMessage: n, content: i, hasMediaAttachment: a, originalAuthor: s } = e,
        { hasUnreads: o } = (0, w.J$)(t);
    return (0, r.jsxs)('div', {
        className: l()(ea.body, el.body),
        children: [
            (0, r.jsx)(E.ZP, { channel: t }),
            (0, r.jsx)('div', {
                className: (el.message, ea.message),
                children: (0, r.jsx)(eu, {
                    channel: t,
                    message: n,
                    content: i,
                    hasMediaAttachment: a,
                    hasUnreads: o,
                    originalAuthor: s
                })
            })
        ]
    });
}
let eu = i.memo(function (e) {
    let { message: t, channel: n, content: i, hasMediaAttachment: a, hasUnreads: s, originalAuthor: o } = e,
        c = (0, h.e7)([S.Z], () => S.Z.isLoading(n.id)),
        d = (0, h.e7)([K.Z], () => K.Z.can(en.Plq.MANAGE_MESSAGES, n)),
        u = V.cC.useSetting(),
        m = (0, h.e7)([J.Z], () => J.Z.getGuildId()),
        { contentPlaceholder: f, renderedContent: x } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null
                  }
                : (0, G.f)(t, i, !1, !1, l()(el.messageContent, ea.messageContent, es.inlineFormat, es.__invalid_smallFontSize), {
                      leadingIconClass: el.messageContentLeadingIcon,
                      trailingIconClass: el.messageContentTrailingIcon,
                      iconSize: er.WW
                  }),
        p =
            null != x
                ? (0, r.jsx)(g.Text, {
                      variant: 'text-md/normal',
                      children: x
                  })
                : a
                  ? null
                  : (0, r.jsx)(g.Text, {
                        tag: 'span',
                        variant: 'text-sm/medium',
                        color: s ? 'header-secondary' : 'text-muted',
                        className: l()(el.messageContent, ea.messageContent),
                        'aria-label': '',
                        children: null == t ? (c ? null : ei.intl.string(ei.t.mE3KJC)) : f
                    });
    return (0, r.jsxs)(C.aQ.Provider, {
        value: (0, D.Z)(u, d),
        children: [
            null != o
                ? (0, r.jsx)(g.qEK, {
                      size: g.EFr.SIZE_40,
                      src: o.getAvatarURL(m, (0, g.pxk)(g.EFr.SIZE_40)),
                      'aria-label': '',
                      className: ea.originalMessageAuthorAvatar
                  })
                : null,
            (0, r.jsxs)('div', {
                className: ea.originalMessageAuthorAndContent,
                children: [
                    (0, r.jsx)(et.Z, {
                        channel: n,
                        originalAuthor: o,
                        message: t
                    }),
                    (0, r.jsx)(g.Rny, {
                        className: el.messageFocusBlock,
                        children: p
                    })
                ]
            })
        ]
    });
});
function em(e) {
    let { channel: t, facepileRef: n, firstMessage: i } = e,
        { isNew: a } = (0, w.J$)(t),
        l = (0, _.Q)(t.id),
        s = (null == i ? void 0 : i.reactions) != null && i.reactions.length > 0;
    return (0, r.jsxs)('div', {
        className: ea.footer,
        children: [
            (0, r.jsxs)('div', {
                className: ea.footerChannelTitle,
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
                    a
                        ? (0, r.jsx)(g.IGR, {
                              color: g.TVs.unsafe_rawColors.BRAND_260.css,
                              text: ei.intl.string(ei.t.y2b7CA),
                              className: ea.newBadge
                          })
                        : null
                ]
            }),
            (0, r.jsxs)('div', {
                className: ea.footerMessageSummary,
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
                        className: el.bullet,
                        children: '\u2022'
                    }),
                    l.length > 0
                        ? (0, r.jsxs)('div', {
                              className: el.typing,
                              children: [
                                  (0, r.jsx)(ex, {
                                      channel: t,
                                      userIds: l,
                                      facepileRef: n
                                  }),
                                  (0, r.jsx)('div', {
                                      className: el.dots,
                                      children: (0, r.jsx)(g.bbz, {
                                          themed: !0,
                                          dotRadius: 2
                                      })
                                  }),
                                  (0, r.jsx)(f.ZP, {
                                      channel: t,
                                      className: el.typingUsers,
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
        { messageCountText: a, unreadCount: s } = (0, w.nP)(t);
    return (0, r.jsxs)('div', {
        className: l()(el.messageCountBox, { [el.hasRead]: i && null == s }),
        children: [
            (0, r.jsx)('span', {
                className: el.messageCountIcon,
                children: (0, r.jsx)(g.kBi, {
                    size: 'custom',
                    color: 'currentColor',
                    width: n,
                    height: n
                })
            }),
            'number' == typeof a
                ? (0, r.jsx)(v.Z, {
                      value: a,
                      digitWidth: 9,
                      className: el.messageCountText
                  })
                : (0, r.jsx)('div', {
                      className: el.messageCountText,
                      children: a
                  }),
            null == s
                ? null
                : (0, r.jsxs)(g.Text, {
                      className: el.newMessageCount,
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
        a = (0, w.Bs)(i),
        { disableReactionCreates: l, isLurking: s, isPendingMember: o } = (0, B.Z)(n);
    return null == a || l
        ? null
        : (0, r.jsx)(U.le, {
              className: el.updateReactionButton,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: s,
              isPendingMember: o,
              emoji: a,
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
        a = (0, w.xw)(n, i),
        l = null == (t = n.threadMetadata) ? void 0 : t.createTimestamp,
        s = null == l ? null : ei.intl.formatToPlainString(ei.t['13euCQ'], { timestamp: (0, $.vc)(d()(l), 'LLLL') });
    return (0, r.jsx)(g.ua7, {
        text: s,
        tooltipClassName: el.timestampTooltip,
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                g.Text,
                ((t = eo(
                    {
                        className: el.__invalid_activityText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary'
                    },
                    e
                )),
                (n = n = { children: a }),
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
        a = (0, w.iM)(t, n);
    return (0, r.jsx)('div', {
        ref: i,
        children: (0, r.jsx)(p.ZP, {
            className: el.__invalid_facepile,
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
function ep(e) {
    let t,
        n,
        { firstMedia: i, shouldObscure: a, obscureReason: s, shouldShowAgeVerification: o } = e,
        c = (0, h.e7)([Q.Z], () => Q.Z.isFocused()),
        d = (0, A.d$)(i.src),
        u = V.QK.useSetting(),
        m = (0, L.MC)(s),
        { src: f, width: x, height: p, alt: b } = i;
    if ((p > x ? (n = 72) : (t = 72), o)) {
        var j;
        return (0, r.jsx)('div', {
            'aria-label': null != (j = null != m ? m : b) ? j : ei.intl.string(ei.t.hqwnc3),
            className: l()(el.thumbnailContainer, el.obscuredThumbnailPlaceholder),
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
              alt: null != b && a ? m : b,
              className: el.thumbnailContainer,
              imageClassName: l()({
                  [el.obscured]: a,
                  [el.thumbnailOverride]: !0
              })
          })
        : (0, H.Yi)({
              src: f,
              maxHeight: t,
              maxWidth: n,
              width: x,
              height: p,
              alt: null != b && a ? m : b,
              autoPlay: u,
              animated: d && !a && c,
              srcIsAnimated: i.srcIsAnimated,
              containerClassName: el.thumbnailContainer,
              imageClassName: l()({ [el.obscured]: a }),
              analyticsSource: 'ForumPostMediaPreview'
          });
}
function eb(e) {
    let { channel: t, firstMedia: n } = e,
        [i, a] = (0, L.hL)({
            media: n,
            channel: t
        }),
        s = (0, y.JO)(a);
    return (0, r.jsx)(g.Rny, {
        enabled: !0,
        children: (0, r.jsxs)('div', {
            className: l()(el.bodyMedia, ea.bodyMedia),
            onClick: function (e) {
                (e.stopPropagation(), s && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), b.Z.showAgeVerificationGetStartedModal(j.cU.FORUM_POST_MEDIA_PREVIEW)));
            },
            children: [
                (0, r.jsx)(ep, {
                    firstMedia: n,
                    shouldObscure: i,
                    obscureReason: a,
                    shouldShowAgeVerification: s
                }),
                i &&
                    (0, r.jsx)(P.Z, {
                        iconClassname: el.obscuredTag,
                        obscureReason: a
                    })
            ]
        })
    });
}

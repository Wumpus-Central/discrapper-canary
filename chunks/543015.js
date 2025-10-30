n.d(t, { ZP: () => ec }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(574583),
    m = n(91192),
    h = n(442837),
    g = n(28664),
    f = n(481060),
    x = n(738619),
    p = n(393238),
    b = n(884338),
    j = n(168107),
    v = n(480916),
    _ = n(446489),
    C = n(824578),
    y = n(247206),
    T = n(109434),
    w = n(456269),
    S = n(109590),
    N = n(368844),
    O = n(660189),
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
    H = n(937889),
    z = n(443877),
    B = n(524444),
    U = n(287151),
    G = n(267128),
    V = n(411405),
    W = n(695346),
    q = n(433355),
    K = n(592125),
    X = n(375954),
    Y = n(496675),
    J = n(914010),
    Q = n(594174),
    $ = n(451478),
    ee = n(55935),
    et = n(216572),
    en = n(724739),
    er = n(981631),
    ei = n(217702),
    ea = n(388032),
    el = n(814675),
    es = n(262008),
    eo = n(602009);
let ec = i.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: a, overrideMedia: s, className: c } = e,
        {
            channel: d,
            isOpen: g,
            messageCount: x,
            content: b,
            firstMessage: j,
            media: v,
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                r = (0, h.e7)([K.Z], () => K.Z.getChannel(t));
            o()(null != r, "the thread should not be null here, a store must have missed an update");
            let a = (0, h.e7)([q.ZP], () => q.ZP.getCurrentSidebarChannelId(r.parent_id) === r.id),
                { firstMessage: l } = (0, S.cl)(r),
                s = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: r = !0 } = e,
                        a = (0, k.p)(),
                        l = i.useMemo(
                            () => (null != t ? (0, Z.Z)(t, null == t ? void 0 : t.messageSnapshots[0]) : null),
                            [t],
                        ),
                        { hasSpoilerEmbeds: s, content: o } = i.useMemo(
                            () =>
                                (null == l ? void 0 : l.content) != null && "" !== l.content
                                    ? (0, H.ZP)(l, {
                                          formatInline: n,
                                          noStyleAndInteraction: r,
                                          allowHeading: !0,
                                          allowList: !0,
                                          shouldFilterKeywords: a,
                                      })
                                    : {
                                          hasSpoilerEmbeds: !1,
                                          content: null,
                                      },
                            [n, l, r, a],
                        ),
                        c = (0, N.eL)(t, s),
                        d = (0, N.vg)(t, s);
                    return null == t
                        ? null
                        : {
                              hasSpoilerEmbeds: s,
                              content: o,
                              firstMedia: c,
                              firstMediaIsEmbed: d,
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
                media: null != n ? n : d,
            };
        })({
            threadId: t,
            overrideMedia: s,
        });
    (0, et.KK)(j);
    let _ = (0, h.e7)([Q.default, X.Z], () => {
            var e, t, n, r, i, a;
            let l = Q.default.getUser(
                null == j || null == (t = j.messageSnapshots[0]) || null == (e = t.moderatorReport)
                    ? void 0
                    : e.reported_user_id,
            );
            if (null != l) return l;
            if (
                (null == j || null == (n = j.messageReference) ? void 0 : n.channel_id) != null &&
                (null == j || null == (r = j.messageReference) ? void 0 : r.message_id) != null
            ) {
                let e = X.Z.getMessage(
                    null == j || null == (i = j.messageReference) ? void 0 : i.channel_id,
                    null == j || null == (a = j.messageReference) ? void 0 : a.message_id,
                );
                if (null != e) return e.author;
            }
            return null;
        }),
        { ref: C, height: y } = (0, p.ZP)(),
        T = (0, I.xH)((e) => e.setCardHeight, u.X);
    i.useEffect(() => {
        null != y && T(t, y);
    }, [y, T, t]),
        i.useEffect(() => {
            null == a || a(C.current, t);
        }, [C, a, t]);
    let O = i.useRef(null),
        { handleLeftClick: P, handleRightClick: E } = (0, M.Z)({
            facepileRef: O,
            goToThread: n,
            channel: d,
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
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(A, ["role", "onFocus"]),
        { isFocused: z, handleFocus: B, handleBlur: U } = (0, R.Z)(F);
    return (0, r.jsxs)("div", {
        ref: C,
        "data-item-id": t,
        onClick: P,
        onContextMenu: E,
        className: l()(es.container, el.container, c, { [es.isOpen]: g }),
        children: [
            (0, r.jsx)(
                f.P3F,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        onClick: P,
                        focusProps: { ringTarget: C },
                        onContextMenu: E,
                        "aria-label": ea.intl.formatToPlainString(ea.t.pgYN6c, {
                            title: d.name,
                            count: x,
                        }),
                        className: es.focusTarget,
                        onFocus: B,
                        onBlur: U,
                    },
                    D,
                ),
            ),
            (0, r.jsxs)("div", {
                className: es.left,
                children: [
                    (0, r.jsx)(f.y5t, {
                        children: (0, r.jsxs)("div", {
                            className: el.contentAndMedia,
                            children: [
                                (0, r.jsx)(ed, {
                                    channel: d,
                                    firstMessage: j,
                                    content: b,
                                    hasMediaAttachment: null != v,
                                    originalAuthor: _,
                                }),
                                (null == j ? void 0 : j.blocked) || null == v
                                    ? null
                                    : (0, r.jsx)(eb, {
                                          channel: d,
                                          firstMedia: v,
                                      }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(f.Rny, {
                        enabled: !z,
                        children: (0, r.jsx)(em, {
                            channel: d,
                            firstMessage: j,
                            facepileRef: O,
                        }),
                    }),
                ],
            }),
        ],
    });
});
function ed(e) {
    let { channel: t, firstMessage: n, content: i, hasMediaAttachment: a, originalAuthor: s } = e,
        { hasUnreads: o } = (0, w.J$)(t);
    return (0, r.jsxs)("div", {
        className: l()(el.body, es.body),
        children: [
            (0, r.jsx)(E.ZP, { channel: t }),
            (0, r.jsx)("div", {
                className: (es.message, el.message),
                children: (0, r.jsx)(eu, {
                    channel: t,
                    message: n,
                    content: i,
                    hasMediaAttachment: a,
                    hasUnreads: o,
                    originalAuthor: s,
                }),
            }),
        ],
    });
}
let eu = i.memo(function (e) {
    let { message: t, channel: n, content: i, hasMediaAttachment: a, hasUnreads: s, originalAuthor: o } = e,
        c = (0, h.e7)([O.Z], () => O.Z.isLoading(n.id)),
        d = (0, h.e7)([Y.Z], () => Y.Z.can(er.Plq.MANAGE_MESSAGES, n)),
        u = W.cC.useSetting(),
        m = (0, h.e7)([J.Z], () => J.Z.getGuildId()),
        { contentPlaceholder: g, renderedContent: x } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null,
                  }
                : (0, G.f)(
                      t,
                      i,
                      !1,
                      !1,
                      l()(es.messageContent, el.messageContent, eo.inlineFormat, eo.__invalid_smallFontSize),
                      {
                          leadingIconClass: es.messageContentLeadingIcon,
                          trailingIconClass: es.messageContentTrailingIcon,
                          iconSize: ei.WW,
                      },
                  ),
        p =
            null != x
                ? (0, r.jsx)(f.Text, {
                      variant: "text-md/normal",
                      children: x,
                  })
                : a
                  ? null
                  : (0, r.jsx)(f.Text, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: s ? "header-secondary" : "text-muted",
                        className: l()(es.messageContent, el.messageContent),
                        "aria-label": "",
                        children: null == t ? (c ? null : ea.intl.string(ea.t.mE3KJN)) : g,
                    });
    return (0, r.jsxs)(V.aQ.Provider, {
        value: (0, D.Z)(u, d),
        children: [
            null != o
                ? (0, r.jsx)(f.qEK, {
                      size: f.EFr.SIZE_40,
                      src: o.getAvatarURL(m, (0, f.pxk)(f.EFr.SIZE_40)),
                      "aria-label": "",
                      className: el.originalMessageAuthorAvatar,
                  })
                : null,
            (0, r.jsxs)("div", {
                className: el.originalMessageAuthorAndContent,
                children: [
                    (0, r.jsx)(en.Z, {
                        channel: n,
                        originalAuthor: o,
                        message: t,
                    }),
                    (0, r.jsx)(f.Rny, {
                        className: es.messageFocusBlock,
                        children: p,
                    }),
                ],
            }),
        ],
    });
});
function em(e) {
    let { channel: t, facepileRef: n, firstMessage: i } = e,
        { isNew: a } = (0, w.J$)(t),
        l = (0, C.Q)(t.id),
        s = (null == i ? void 0 : i.reactions) != null && i.reactions.length > 0;
    return (0, r.jsxs)("div", {
        className: el.footer,
        children: [
            (0, r.jsxs)("div", {
                className: el.footerChannelTitle,
                children: [
                    (0, r.jsx)(f.U65, {
                        size: "custom",
                        width: 14,
                        height: 14,
                    }),
                    (0, r.jsx)(f.Text, {
                        variant: "text-sm/medium",
                        children: t.name,
                    }),
                    a
                        ? (0, r.jsx)(f.IGR, {
                              color: f.TVs.unsafe_rawColors.BRAND_260.css,
                              text: ea.intl.string(ea.t.y2b7CA),
                              className: el.newBadge,
                          })
                        : null,
                ],
            }),
            (0, r.jsxs)("div", {
                className: el.footerMessageSummary,
                children: [
                    s || null == i
                        ? null
                        : (0, r.jsx)(eg, {
                              firstMessage: i,
                              channel: t,
                          }),
                    (0, r.jsx)(eh, {
                        channel: t,
                        iconSize: 14,
                    }),
                    (0, r.jsx)("span", {
                        className: es.bullet,
                        children: "\u2022",
                    }),
                    l.length > 0
                        ? (0, r.jsxs)("div", {
                              className: es.typing,
                              children: [
                                  (0, r.jsx)(ex, {
                                      channel: t,
                                      userIds: l,
                                      facepileRef: n,
                                  }),
                                  (0, r.jsx)("div", {
                                      className: es.dots,
                                      children: (0, r.jsx)(f.bbz, {
                                          themed: !0,
                                          dotRadius: 2,
                                      }),
                                  }),
                                  (0, r.jsx)(x.ZP, {
                                      channel: t,
                                      className: es.typingUsers,
                                      renderDots: !1,
                                  }),
                              ],
                          })
                        : (0, r.jsx)(ef, { channel: t }),
                ],
            }),
        ],
    });
}
function eh(e) {
    let { channel: t, iconSize: n, showReadState: i = !1 } = e,
        { messageCountText: a, unreadCount: s } = (0, w.nP)(t);
    return (0, r.jsxs)("div", {
        className: l()(es.messageCountBox, { [es.hasRead]: i && null == s }),
        children: [
            (0, r.jsx)("span", {
                className: es.messageCountIcon,
                children: (0, r.jsx)(f.kBi, {
                    size: "custom",
                    color: "currentColor",
                    width: n,
                    height: n,
                }),
            }),
            "number" == typeof a
                ? (0, r.jsx)(_.Z, {
                      value: a,
                      digitWidth: 9,
                      className: es.messageCountText,
                  })
                : (0, r.jsx)("div", {
                      className: es.messageCountText,
                      children: a,
                  }),
            null == s
                ? null
                : (0, r.jsxs)(f.Text, {
                      className: es.newMessageCount,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", ea.intl.format(ea.t.z3PEth, { count: s }), ")"],
                  }),
        ],
    });
}
function eg(e) {
    let { firstMessage: t, channel: n } = e,
        i = (0, h.e7)([K.Z], () => K.Z.getChannel(n.parent_id)),
        a = (0, w.Bs)(i),
        { disableReactionCreates: l, isLurking: s, isPendingMember: o } = (0, z.Z)(n);
    return null == a || l
        ? null
        : (0, r.jsx)(U.le, {
              className: es.updateReactionButton,
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
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function ef(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: i } = (0, T.H)(n.parent_id),
        a = (0, w.xw)(n, i),
        l = null == (t = n.threadMetadata) ? void 0 : t.createTimestamp,
        s = null == l ? null : ea.intl.formatToPlainString(ea.t["13euCd"], { timestamp: (0, ee.vc)(d()(l), "LLLL") });
    return (0, r.jsx)(g.u, {
        text: s,
        children: (0, r.jsx)(f.Text, {
            className: es.__invalid_activityText,
            variant: "text-sm/normal",
            color: "header-secondary",
            children: a,
        }),
    });
}
function ex(e) {
    let { channel: t, userIds: n, facepileRef: i } = e,
        a = (0, w.iM)(t, n);
    return (0, r.jsx)("div", {
        ref: i,
        children: (0, r.jsx)(b.ZP, {
            className: es.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: a,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0,
        }),
    });
}
function ep(e) {
    let t,
        n,
        { firstMedia: i, shouldObscure: a, obscureReason: s, shouldShowAgeVerification: o } = e,
        c = (0, h.e7)([$.Z], () => $.Z.isFocused()),
        d = (0, A.d$)(i.src),
        u = W.QK.useSetting(),
        m = (0, L.MC)(s),
        { src: g, width: x, height: p, alt: b } = i;
    if ((p > x ? (n = 72) : (t = 72), o)) {
        var j;
        return (0, r.jsx)("div", {
            "aria-label": null != (j = null != m ? m : b) ? j : ea.intl.string(ea.t.hqwnc2),
            className: l()(es.thumbnailContainer, es.obscuredThumbnailPlaceholder),
            style: {
                maxWidth: t,
                maxHeight: n,
                height: p,
                width: x,
            },
        });
    }
    return g.startsWith("data:")
        ? (0, r.jsx)(f.Eep, {
              src: g,
              maxHeight: t,
              maxWidth: n,
              width: x,
              height: p,
              alt: null != b && a ? m : b,
              className: es.thumbnailContainer,
              imageClassName: l()({
                  [es.obscured]: a,
                  [es.thumbnailOverride]: !0,
              }),
          })
        : (0, B.Yi)({
              src: g,
              maxHeight: t,
              maxWidth: n,
              width: x,
              height: p,
              alt: null != b && a ? m : b,
              autoPlay: u,
              animated: d && !a && c,
              srcIsAnimated: i.srcIsAnimated,
              containerClassName: es.thumbnailContainer,
              imageClassName: l()({ [es.obscured]: a }),
              analyticsSource: "ForumPostMediaPreview",
          });
}
function eb(e) {
    let { channel: t, firstMedia: n } = e,
        [i, a] = (0, L.hL)({
            media: n,
            channel: t,
        }),
        s = (0, y.JO)(a);
    return (0, r.jsx)(f.Rny, {
        enabled: !0,
        children: (0, r.jsxs)("div", {
            className: l()(es.bodyMedia, el.bodyMedia),
            onClick: function (e) {
                e.stopPropagation(),
                    s &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        j.Z.showAgeVerificationGetStartedModal({ entryPoint: v.cU.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, r.jsx)(ep, {
                    firstMedia: n,
                    shouldObscure: i,
                    obscureReason: a,
                    shouldShowAgeVerification: s,
                }),
                i &&
                    (0, r.jsx)(P.Z, {
                        iconClassname: es.obscuredTag,
                        obscureReason: a,
                    }),
            ],
        }),
    });
}

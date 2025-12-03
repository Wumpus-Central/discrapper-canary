n.d(t, { ZP: () => eo }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(55160),
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
    k = n(406432),
    A = n(169525),
    L = n(566006),
    F = n(255269),
    D = n(937889),
    H = n(443877),
    z = n(524444),
    B = n(287151),
    U = n(267128),
    G = n(411405),
    V = n(695346),
    W = n(433355),
    q = n(592125),
    K = n(375954),
    X = n(496675),
    Y = n(914010),
    J = n(594174),
    Q = n(451478),
    $ = n(55935),
    ee = n(216572),
    et = n(724739),
    en = n(981631),
    er = n(217702),
    ei = n(388032),
    el = n(476720),
    ea = n(586301),
    es = n(430864);
let eo = i.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: l, overrideMedia: s, className: c } = e,
        {
            channel: d,
            isOpen: g,
            messageCount: x,
            content: b,
            firstMessage: j,
            media: v,
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                r = (0, h.e7)([q.Z], () => q.Z.getChannel(t));
            o()(null != r, "the thread should not be null here, a store must have missed an update");
            let l = (0, h.e7)([W.ZP], () => W.ZP.getCurrentSidebarChannelId(r.parent_id) === r.id),
                { firstMessage: a } = (0, S.cl)(r),
                s = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: r = !0 } = e,
                        l = i.useMemo(
                            () => (null != t ? (0, Z.Z)(t, null == t ? void 0 : t.messageSnapshots[0]) : null),
                            [t],
                        ),
                        { hasSpoilerEmbeds: a, content: s } = i.useMemo(
                            () =>
                                (null == l ? void 0 : l.content) != null && "" !== l.content
                                    ? (0, D.ZP)(l, {
                                          formatInline: n,
                                          noStyleAndInteraction: r,
                                          allowHeading: !0,
                                          allowList: !0,
                                      })
                                    : {
                                          hasSpoilerEmbeds: !1,
                                          content: null,
                                      },
                            [n, l, r],
                        ),
                        o = (0, N.eL)(t, a),
                        c = (0, N.vg)(t, a);
                    return null == t
                        ? null
                        : {
                              hasSpoilerEmbeds: a,
                              content: s,
                              firstMedia: o,
                              firstMediaIsEmbed: c,
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
                media: null != n ? n : d,
            };
        })({
            threadId: t,
            overrideMedia: s,
        });
    (0, ee.KK)(j);
    let _ = (0, h.e7)([J.default, K.Z], () => {
            var e, t, n, r, i, l;
            let a = J.default.getUser(
                null == j || null == (t = j.messageSnapshots[0]) || null == (e = t.moderatorReport)
                    ? void 0
                    : e.reported_user_id,
            );
            if (null != a) return a;
            if (
                (null == j || null == (n = j.messageReference) ? void 0 : n.channel_id) != null &&
                (null == j || null == (r = j.messageReference) ? void 0 : r.message_id) != null
            ) {
                let e = K.Z.getMessage(
                    null == j || null == (i = j.messageReference) ? void 0 : i.channel_id,
                    null == j || null == (l = j.messageReference) ? void 0 : l.message_id,
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
            null == l || l(C.current, t);
        }, [C, l, t]);
    let O = i.useRef(null),
        { handleLeftClick: P, handleRightClick: E } = (0, M.Z)({
            facepileRef: O,
            goToThread: n,
            channel: d,
        }),
        k = (0, m.JA)(t),
        { role: A, onFocus: L } = k,
        F = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(k, ["role", "onFocus"]),
        { isFocused: H, handleFocus: z, handleBlur: B } = (0, R.Z)(L);
    return (0, r.jsxs)("div", {
        ref: C,
        "data-item-id": t,
        onClick: P,
        onContextMenu: E,
        className: a()(ea.container, el.container, c, { [ea.isOpen]: g }),
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
                        "aria-label": ei.intl.formatToPlainString(ei.t.pgYN6c, {
                            title: d.name,
                            count: x,
                        }),
                        className: ea.focusTarget,
                        onFocus: z,
                        onBlur: B,
                    },
                    F,
                ),
            ),
            (0, r.jsxs)("div", {
                className: ea.left,
                children: [
                    (0, r.jsx)(f.y5t, {
                        children: (0, r.jsxs)("div", {
                            className: el.contentAndMedia,
                            children: [
                                (0, r.jsx)(ec, {
                                    channel: d,
                                    firstMessage: j,
                                    content: b,
                                    hasMediaAttachment: null != v,
                                    originalAuthor: _,
                                }),
                                (null == j ? void 0 : j.blocked) || null == v
                                    ? null
                                    : (0, r.jsx)(ep, {
                                          channel: d,
                                          firstMedia: v,
                                      }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(f.Rny, {
                        enabled: !H,
                        children: (0, r.jsx)(eu, {
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
function ec(e) {
    let { channel: t, firstMessage: n, content: i, hasMediaAttachment: l, originalAuthor: s } = e,
        { hasUnreads: o } = (0, w.J$)(t);
    return (0, r.jsxs)("div", {
        className: a()(el.body, ea.body),
        children: [
            (0, r.jsx)(E.ZP, { channel: t }),
            (0, r.jsx)("div", {
                className: (ea.message, el.message),
                children: (0, r.jsx)(ed, {
                    channel: t,
                    message: n,
                    content: i,
                    hasMediaAttachment: l,
                    hasUnreads: o,
                    originalAuthor: s,
                }),
            }),
        ],
    });
}
let ed = i.memo(function (e) {
    let { message: t, channel: n, content: i, hasMediaAttachment: l, hasUnreads: s, originalAuthor: o } = e,
        c = (0, h.e7)([O.Z], () => O.Z.isLoading(n.id)),
        d = (0, h.e7)([X.Z], () => X.Z.can(en.Plq.MANAGE_MESSAGES, n)),
        u = V.cC.useSetting(),
        m = (0, h.e7)([Y.Z], () => Y.Z.getGuildId()),
        { contentPlaceholder: g, renderedContent: x } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null,
                  }
                : (0, U.f)(
                      t,
                      i,
                      !1,
                      !1,
                      a()(ea.messageContent, el.messageContent, es.inlineFormat, es.__invalid_smallFontSize),
                      {
                          leadingIconClass: ea.messageContentLeadingIcon,
                          trailingIconClass: ea.messageContentTrailingIcon,
                          iconSize: er.WW,
                      },
                  ),
        p =
            null != x
                ? (0, r.jsx)(f.Text, {
                      variant: "text-md/normal",
                      children: x,
                  })
                : l
                  ? null
                  : (0, r.jsx)(f.Text, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: s ? "text-default" : "text-muted",
                        className: a()(ea.messageContent, el.messageContent),
                        "aria-label": "",
                        children: null == t ? (c ? null : ei.intl.string(ei.t.mE3KJN)) : g,
                    });
    return (0, r.jsxs)(G.aQ.Provider, {
        value: (0, F.Z)(u, d),
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
                    (0, r.jsx)(et.Z, {
                        channel: n,
                        originalAuthor: o,
                        message: t,
                    }),
                    (0, r.jsx)(f.Rny, {
                        className: ea.messageFocusBlock,
                        children: p,
                    }),
                ],
            }),
        ],
    });
});
function eu(e) {
    let { channel: t, facepileRef: n, firstMessage: i } = e,
        { isNew: l } = (0, w.J$)(t),
        a = (0, C.Q)(t.id),
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
                    l
                        ? (0, r.jsx)(f.IGR, {
                              color: f.TVs.unsafe_rawColors.BRAND_260.css,
                              text: ei.intl.string(ei.t.y2b7CA),
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
                        : (0, r.jsx)(eh, {
                              firstMessage: i,
                              channel: t,
                          }),
                    (0, r.jsx)(em, {
                        channel: t,
                        iconSize: 14,
                    }),
                    (0, r.jsx)("span", {
                        className: ea.bullet,
                        children: "\u2022",
                    }),
                    a.length > 0
                        ? (0, r.jsxs)("div", {
                              className: ea.typing,
                              children: [
                                  (0, r.jsx)(ef, {
                                      channel: t,
                                      userIds: a,
                                      facepileRef: n,
                                  }),
                                  (0, r.jsx)("div", {
                                      className: ea.dots,
                                      children: (0, r.jsx)(f.bbz, {
                                          themed: !0,
                                          dotRadius: 2,
                                      }),
                                  }),
                                  (0, r.jsx)(x.ZP, {
                                      channel: t,
                                      className: ea.typingUsers,
                                      renderDots: !1,
                                  }),
                              ],
                          })
                        : (0, r.jsx)(eg, { channel: t }),
                ],
            }),
        ],
    });
}
function em(e) {
    let { channel: t, iconSize: n, showReadState: i = !1 } = e,
        { messageCountText: l, unreadCount: s } = (0, w.nP)(t);
    return (0, r.jsxs)("div", {
        className: a()(ea.messageCountBox, { [ea.hasRead]: i && null == s }),
        children: [
            (0, r.jsx)("span", {
                className: ea.messageCountIcon,
                children: (0, r.jsx)(f.kBi, {
                    size: "custom",
                    color: "currentColor",
                    width: n,
                    height: n,
                }),
            }),
            "number" == typeof l
                ? (0, r.jsx)(_.Z, {
                      value: l,
                      digitWidth: 9,
                      className: ea.messageCountText,
                  })
                : (0, r.jsx)("div", {
                      className: ea.messageCountText,
                      children: l,
                  }),
            null == s
                ? null
                : (0, r.jsxs)(f.Text, {
                      className: ea.newMessageCount,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", ei.intl.format(ei.t.z3PEth, { count: s }), ")"],
                  }),
        ],
    });
}
function eh(e) {
    let { firstMessage: t, channel: n } = e,
        i = (0, h.e7)([q.Z], () => q.Z.getChannel(n.parent_id)),
        l = (0, w.Bs)(i),
        { disableReactionCreates: a, isLurking: s, isPendingMember: o } = (0, H.Z)(n);
    return null == l || a
        ? null
        : (0, r.jsx)(B.le, {
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
              type: L.O.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function eg(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: i } = (0, T.H)(n.parent_id),
        l = (0, w.xw)(n, i),
        a = null == (t = n.threadMetadata) ? void 0 : t.createTimestamp,
        s = null == a ? null : ei.intl.formatToPlainString(ei.t["13euCd"], { timestamp: (0, $.vc)(d()(a), "LLLL") });
    return (0, r.jsx)(g.u, {
        text: s,
        children: (0, r.jsx)(f.Text, {
            className: ea.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function ef(e) {
    let { channel: t, userIds: n, facepileRef: i } = e,
        l = (0, w.iM)(t, n);
    return (0, r.jsx)("div", {
        ref: i,
        children: (0, r.jsx)(b.ZP, {
            className: ea.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: l,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0,
        }),
    });
}
function ex(e) {
    let t,
        n,
        { firstMedia: i, shouldObscure: l, obscureReason: s, shouldShowAgeVerification: o } = e,
        c = (0, h.e7)([Q.Z], () => Q.Z.isFocused()),
        d = (0, k.d$)(i.src),
        u = V.QK.useSetting(),
        m = (0, A.MC)(s),
        { src: g, width: x, height: p, alt: b } = i;
    if ((p > x ? (n = 72) : (t = 72), o)) {
        var j;
        return (0, r.jsx)("div", {
            "aria-label": null != (j = null != m ? m : b) ? j : ei.intl.string(ei.t.hqwnc2),
            className: a()(ea.thumbnailContainer, ea.obscuredThumbnailPlaceholder),
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
              alt: null != b && l ? m : b,
              className: ea.thumbnailContainer,
              imageClassName: a()({
                  [ea.obscured]: l,
                  [ea.thumbnailOverride]: !0,
              }),
          })
        : (0, z.Yi)({
              src: g,
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
              analyticsSource: "ForumPostMediaPreview",
          });
}
function ep(e) {
    let { channel: t, firstMedia: n } = e,
        [i, l] = (0, A.hL)({
            media: n,
            channel: t,
        }),
        s = (0, y.JO)(l);
    return (0, r.jsx)(f.Rny, {
        enabled: !0,
        children: (0, r.jsxs)("div", {
            className: a()(ea.bodyMedia, el.bodyMedia),
            onClick: function (e) {
                e.stopPropagation(),
                    s &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        j.Z.showAgeVerificationGetStartedModal({ entryPoint: v.cU.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, r.jsx)(ex, {
                    firstMedia: n,
                    shouldObscure: i,
                    obscureReason: l,
                    shouldShowAgeVerification: s,
                }),
                i &&
                    (0, r.jsx)(P.Z, {
                        iconClassname: ea.obscuredTag,
                        obscureReason: l,
                    }),
            ],
        }),
    });
}

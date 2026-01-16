n.d(t, { ZP: () => eo }), n(388685);
var r = n(54381),
    a = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(512722),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(782425),
    m = n(91192),
    h = n(442837),
    f = n(28664),
    g = n(481060),
    x = n(738619),
    b = n(393238),
    p = n(884338),
    j = n(168107),
    v = n(480916),
    C = n(446489),
    y = n(824578),
    T = n(247206),
    S = n(109434),
    N = n(456269),
    w = n(109590),
    O = n(368844),
    P = n(660189),
    I = n(73315),
    E = n(470623),
    _ = n(858543),
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
    X = n(375954),
    K = n(496675),
    Y = n(914010),
    J = n(594174),
    Q = n(451478),
    $ = n(55935),
    ee = n(216572),
    et = n(724739),
    en = n(981631),
    er = n(217702),
    ea = n(388032),
    ei = n(975068),
    el = n(112021),
    es = n(960324);
let eo = a.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: i, overrideMedia: s, className: c } = e,
        {
            channel: d,
            isOpen: f,
            messageCount: x,
            content: p,
            firstMessage: j,
            media: v,
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                r = (0, h.e7)([q.Z], () => q.Z.getChannel(t));
            o()(null != r, "the thread should not be null here, a store must have missed an update");
            let i = (0, h.e7)([W.ZP], () => W.ZP.getCurrentSidebarChannelId(r.parent_id) === r.id),
                { firstMessage: l } = (0, w.cl)(r),
                s = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: r = !0 } = e,
                        i = a.useMemo(
                            () => (null != t ? (0, Z.Z)(t, null == t ? void 0 : t.messageSnapshots[0]) : null),
                            [t],
                        ),
                        { hasSpoilerEmbeds: l, content: s } = a.useMemo(
                            () =>
                                (null == i ? void 0 : i.content) != null && "" !== i.content
                                    ? (0, D.ZP)(i, {
                                          formatInline: n,
                                          noStyleAndInteraction: r,
                                          allowHeading: !0,
                                          allowList: !0,
                                      })
                                    : {
                                          hasSpoilerEmbeds: !1,
                                          content: null,
                                      },
                            [n, i, r],
                        ),
                        o = (0, O.eL)(t, l),
                        c = (0, O.vg)(t, l);
                    return null == t
                        ? null
                        : {
                              hasSpoilerEmbeds: l,
                              content: s,
                              firstMedia: o,
                              firstMediaIsEmbed: c,
                          };
                })({ firstMessage: l }),
                c = null == s ? void 0 : s.content,
                d = null == s ? void 0 : s.firstMedia,
                { messageCountText: u } = (0, N.nP)(r);
            return {
                channel: r,
                isOpen: i,
                messageCount: u,
                firstMessage: l,
                content: c,
                media: null != n ? n : d,
            };
        })({
            threadId: t,
            overrideMedia: s,
        });
    (0, ee.KK)(j);
    let C = (0, h.e7)([J.default, X.Z], () => {
            var e, t, n, r, a, i;
            let l = J.default.getUser(
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
                    null == j || null == (a = j.messageReference) ? void 0 : a.channel_id,
                    null == j || null == (i = j.messageReference) ? void 0 : i.message_id,
                );
                if (null != e) return e.author;
            }
            return null;
        }),
        { ref: y, height: T } = (0, b.ZP)(),
        S = (0, E.xH)((e) => e.setCardHeight, u.X);
    a.useEffect(() => {
        null != T && S(t, T);
    }, [T, S, t]),
        a.useEffect(() => {
            null == i || i(y.current, t);
        }, [y, i, t]);
    let P = a.useRef(null),
        { handleLeftClick: I, handleRightClick: _ } = (0, M.Z)({
            facepileRef: P,
            goToThread: n,
            channel: d,
        }),
        k = (0, m.JA)(t),
        { role: A, onFocus: L } = k,
        F = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(k, ["role", "onFocus"]),
        { isFocused: H, handleFocus: z, handleBlur: B } = (0, R.Z)(L);
    return (0, r.jsxs)("div", {
        ref: y,
        "data-item-id": t,
        onClick: I,
        onContextMenu: _,
        className: l()(el.container, ei.container, c, { [el.isOpen]: f }),
        children: [
            (0, r.jsx)(
                g.P3F,
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
                        onClick: I,
                        focusProps: { ringTarget: y },
                        onContextMenu: _,
                        "aria-label": ea.intl.formatToPlainString(ea.t.pgYN6c, {
                            title: d.name,
                            count: x,
                        }),
                        className: el.focusTarget,
                        onFocus: z,
                        onBlur: B,
                    },
                    F,
                ),
            ),
            (0, r.jsxs)("div", {
                className: el.left,
                children: [
                    (0, r.jsx)(g.y5t, {
                        children: (0, r.jsxs)("div", {
                            className: ei.contentAndMedia,
                            children: [
                                (0, r.jsx)(ec, {
                                    channel: d,
                                    firstMessage: j,
                                    content: p,
                                    hasMediaAttachment: null != v,
                                    originalAuthor: C,
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
                    (0, r.jsx)(g.Rny, {
                        enabled: !H,
                        children: (0, r.jsx)(eu, {
                            channel: d,
                            firstMessage: j,
                            facepileRef: P,
                        }),
                    }),
                ],
            }),
        ],
    });
});
function ec(e) {
    let { channel: t, firstMessage: n, content: a, hasMediaAttachment: i, originalAuthor: s } = e,
        { hasUnreads: o } = (0, N.J$)(t);
    return (0, r.jsxs)("div", {
        className: l()(ei.body, el.body),
        children: [
            (0, r.jsx)(_.ZP, { channel: t }),
            (0, r.jsx)("div", {
                className: (el.message, ei.message),
                children: (0, r.jsx)(ed, {
                    channel: t,
                    message: n,
                    content: a,
                    hasMediaAttachment: i,
                    hasUnreads: o,
                    originalAuthor: s,
                }),
            }),
        ],
    });
}
let ed = a.memo(function (e) {
    let { message: t, channel: n, content: a, hasMediaAttachment: i, hasUnreads: s, originalAuthor: o } = e,
        c = (0, h.e7)([P.Z], () => P.Z.isLoading(n.id)),
        d = (0, h.e7)([K.Z], () => K.Z.can(en.Plq.MANAGE_MESSAGES, n)),
        u = V.cC.useSetting(),
        m = (0, h.e7)([Y.Z], () => Y.Z.getGuildId()),
        { contentPlaceholder: f, renderedContent: x } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null,
                  }
                : (0, U.f)(
                      t,
                      a,
                      !1,
                      !1,
                      l()(el.messageContent, ei.messageContent, es.inlineFormat, es.__invalid_smallFontSize),
                      {
                          leadingIconClass: el.messageContentLeadingIcon,
                          trailingIconClass: el.messageContentTrailingIcon,
                          iconSize: er.WW,
                      },
                  ),
        b =
            null != x
                ? (0, r.jsx)(g.Text, {
                      variant: "text-md/normal",
                      children: x,
                  })
                : i
                  ? null
                  : (0, r.jsx)(g.Text, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: s ? "text-default" : "text-muted",
                        className: l()(el.messageContent, ei.messageContent),
                        "aria-label": "",
                        children: null == t ? (c ? null : ea.intl.string(ea.t.mE3KJN)) : f,
                    });
    return (0, r.jsxs)(G.aQ.Provider, {
        value: (0, F.Z)(u, d),
        children: [
            null != o
                ? (0, r.jsx)(g.qEK, {
                      size: g.EFr.SIZE_40,
                      src: o.getAvatarURL(m, (0, g.dcp)(g.EFr.SIZE_40)),
                      "aria-label": "",
                      className: ei.originalMessageAuthorAvatar,
                  })
                : null,
            (0, r.jsxs)("div", {
                className: ei.originalMessageAuthorAndContent,
                children: [
                    (0, r.jsx)(et.Z, {
                        channel: n,
                        originalAuthor: o,
                        message: t,
                    }),
                    (0, r.jsx)(g.Rny, {
                        className: el.messageFocusBlock,
                        children: b,
                    }),
                ],
            }),
        ],
    });
});
function eu(e) {
    let { channel: t, facepileRef: n, firstMessage: a } = e,
        { isNew: i } = (0, N.J$)(t),
        l = (0, y.Q)(t.id),
        s = (null == a ? void 0 : a.reactions) != null && a.reactions.length > 0;
    return (0, r.jsxs)("div", {
        className: ei.footer,
        children: [
            (0, r.jsxs)("div", {
                className: ei.footerChannelTitle,
                children: [
                    (0, r.jsx)(g.U65, {
                        size: "custom",
                        width: 14,
                        height: 14,
                    }),
                    (0, r.jsx)(g.Text, {
                        variant: "text-sm/medium",
                        children: t.name,
                    }),
                    i
                        ? (0, r.jsx)(g.IGR, {
                              color: g.TVs.unsafe_rawColors.BRAND_260.css,
                              text: ea.intl.string(ea.t.y2b7CA),
                              className: ei.newBadge,
                          })
                        : null,
                ],
            }),
            (0, r.jsxs)("div", {
                className: ei.footerMessageSummary,
                children: [
                    s || null == a
                        ? null
                        : (0, r.jsx)(eh, {
                              firstMessage: a,
                              channel: t,
                          }),
                    (0, r.jsx)(em, {
                        channel: t,
                        iconSize: 14,
                    }),
                    (0, r.jsx)("span", {
                        className: el.bullet,
                        children: "\u2022",
                    }),
                    l.length > 0
                        ? (0, r.jsxs)("div", {
                              className: el.typing,
                              children: [
                                  (0, r.jsx)(eg, {
                                      channel: t,
                                      userIds: l,
                                      facepileRef: n,
                                  }),
                                  (0, r.jsx)("div", {
                                      className: el.dots,
                                      children: (0, r.jsx)(g.bbz, {
                                          themed: !0,
                                          dotRadius: 2,
                                      }),
                                  }),
                                  (0, r.jsx)(x.ZP, {
                                      channel: t,
                                      className: el.typingUsers,
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
function em(e) {
    let { channel: t, iconSize: n, showReadState: a = !1 } = e,
        { messageCountText: i, unreadCount: s } = (0, N.nP)(t);
    return (0, r.jsxs)("div", {
        className: l()(el.messageCountBox, { [el.hasRead]: a && null == s }),
        children: [
            (0, r.jsx)("span", {
                className: el.messageCountIcon,
                children: (0, r.jsx)(g.kBi, {
                    size: "custom",
                    color: "currentColor",
                    width: n,
                    height: n,
                }),
            }),
            "number" == typeof i
                ? (0, r.jsx)(C.Z, {
                      value: i,
                      digitWidth: 9,
                      className: el.messageCountText,
                  })
                : (0, r.jsx)("div", {
                      className: el.messageCountText,
                      children: i,
                  }),
            null == s
                ? null
                : (0, r.jsxs)(g.Text, {
                      className: el.newMessageCount,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", ea.intl.format(ea.t.z3PEth, { count: s }), ")"],
                  }),
        ],
    });
}
function eh(e) {
    let { firstMessage: t, channel: n } = e,
        a = (0, h.e7)([q.Z], () => q.Z.getChannel(n.parent_id)),
        i = (0, N.Bs)(a),
        { disableReactionCreates: l, isLurking: s, isPendingMember: o } = (0, H.Z)(n);
    return null == i || l
        ? null
        : (0, r.jsx)(B.le, {
              className: el.updateReactionButton,
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
              type: L.O.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function ef(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: a } = (0, S.H)(n.parent_id),
        i = (0, N.xw)(n, a),
        l = null == (t = n.threadMetadata) ? void 0 : t.createTimestamp,
        s = null == l ? null : ea.intl.formatToPlainString(ea.t["13euCd"], { timestamp: (0, $.vc)(d()(l), "LLLL") });
    return (0, r.jsx)(f.u, {
        text: s,
        children: (0, r.jsx)(g.Text, {
            className: el.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: i,
        }),
    });
}
function eg(e) {
    let { channel: t, userIds: n, facepileRef: a } = e,
        i = (0, N.iM)(t, n);
    return (0, r.jsx)("div", {
        ref: a,
        children: (0, r.jsx)(p.ZP, {
            className: el.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: i,
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
        { firstMedia: a, shouldObscure: i, obscureReason: s, shouldShowAgeVerification: o } = e,
        c = (0, h.e7)([Q.Z], () => Q.Z.isFocused()),
        d = (0, k.d$)(a.src),
        u = V.QK.useSetting(),
        m = (0, A.MC)(s),
        { src: f, width: x, height: b, alt: p } = a;
    if ((b > x ? (n = 72) : (t = 72), o)) {
        var j;
        return (0, r.jsx)("div", {
            "aria-label": null != (j = null != m ? m : p) ? j : ea.intl.string(ea.t.hqwnc2),
            className: l()(el.thumbnailContainer, el.obscuredThumbnailPlaceholder),
            style: {
                maxWidth: t,
                maxHeight: n,
                height: b,
                width: x,
            },
        });
    }
    return f.startsWith("data:")
        ? (0, r.jsx)(g.Eep, {
              src: f,
              maxHeight: t,
              maxWidth: n,
              width: x,
              height: b,
              alt: null != p && i ? m : p,
              className: el.thumbnailContainer,
              imageClassName: l()({
                  [el.obscured]: i,
                  [el.thumbnailOverride]: !0,
              }),
          })
        : (0, z.Yi)({
              src: f,
              maxHeight: t,
              maxWidth: n,
              width: x,
              height: b,
              alt: null != p && i ? m : p,
              autoPlay: u,
              animated: d && !i && c,
              srcIsAnimated: a.srcIsAnimated,
              containerClassName: el.thumbnailContainer,
              imageClassName: l()({ [el.obscured]: i }),
              analyticsSource: "ForumPostMediaPreview",
          });
}
function eb(e) {
    let { channel: t, firstMedia: n } = e,
        [a, i] = (0, A.hL)({
            media: n,
            channel: t,
        }),
        s = (0, T.JO)(i);
    return (0, r.jsx)(g.Rny, {
        enabled: !0,
        children: (0, r.jsxs)("div", {
            className: l()(el.bodyMedia, ei.bodyMedia),
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
                    shouldObscure: a,
                    obscureReason: i,
                    shouldShowAgeVerification: s,
                }),
                a &&
                    (0, r.jsx)(I.Z, {
                        iconClassname: el.obscuredTag,
                        obscureReason: i,
                    }),
            ],
        }),
    });
}

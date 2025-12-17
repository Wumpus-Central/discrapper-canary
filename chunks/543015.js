n.d(t, { ZP: () => eo }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(512722),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(55160),
    m = n(91192),
    f = n(442837),
    h = n(28664),
    g = n(481060),
    x = n(738619),
    b = n(393238),
    p = n(884338),
    j = n(168107),
    v = n(480916),
    C = n(446489),
    y = n(824578),
    T = n(247206),
    w = n(109434),
    S = n(456269),
    N = n(109590),
    O = n(368844),
    I = n(660189),
    P = n(73315),
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
    ea = n(217702),
    er = n(388032),
    ei = n(975068),
    el = n(112021),
    es = n(960324);
let eo = r.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: i, overrideMedia: s, className: c } = e,
        {
            channel: d,
            isOpen: h,
            messageCount: x,
            content: p,
            firstMessage: j,
            media: v,
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                a = (0, f.e7)([q.Z], () => q.Z.getChannel(t));
            o()(null != a, "the thread should not be null here, a store must have missed an update");
            let i = (0, f.e7)([W.ZP], () => W.ZP.getCurrentSidebarChannelId(a.parent_id) === a.id),
                { firstMessage: l } = (0, N.cl)(a),
                s = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: a = !0 } = e,
                        i = r.useMemo(
                            () => (null != t ? (0, Z.Z)(t, null == t ? void 0 : t.messageSnapshots[0]) : null),
                            [t],
                        ),
                        { hasSpoilerEmbeds: l, content: s } = r.useMemo(
                            () =>
                                (null == i ? void 0 : i.content) != null && "" !== i.content
                                    ? (0, D.ZP)(i, {
                                          formatInline: n,
                                          noStyleAndInteraction: a,
                                          allowHeading: !0,
                                          allowList: !0,
                                      })
                                    : {
                                          hasSpoilerEmbeds: !1,
                                          content: null,
                                      },
                            [n, i, a],
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
                { messageCountText: u } = (0, S.nP)(a);
            return {
                channel: a,
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
    let C = (0, f.e7)([J.default, X.Z], () => {
            var e, t, n, a, r, i;
            let l = J.default.getUser(
                null == j || null == (t = j.messageSnapshots[0]) || null == (e = t.moderatorReport)
                    ? void 0
                    : e.reported_user_id,
            );
            if (null != l) return l;
            if (
                (null == j || null == (n = j.messageReference) ? void 0 : n.channel_id) != null &&
                (null == j || null == (a = j.messageReference) ? void 0 : a.message_id) != null
            ) {
                let e = X.Z.getMessage(
                    null == j || null == (r = j.messageReference) ? void 0 : r.channel_id,
                    null == j || null == (i = j.messageReference) ? void 0 : i.message_id,
                );
                if (null != e) return e.author;
            }
            return null;
        }),
        { ref: y, height: T } = (0, b.ZP)(),
        w = (0, E.xH)((e) => e.setCardHeight, u.X);
    r.useEffect(() => {
        null != T && w(t, T);
    }, [T, w, t]),
        r.useEffect(() => {
            null == i || i(y.current, t);
        }, [y, i, t]);
    let I = r.useRef(null),
        { handleLeftClick: P, handleRightClick: _ } = (0, M.Z)({
            facepileRef: I,
            goToThread: n,
            channel: d,
        }),
        k = (0, m.JA)(t),
        { role: A, onFocus: L } = k,
        F = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++)
                    (n = i[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(k, ["role", "onFocus"]),
        { isFocused: H, handleFocus: z, handleBlur: B } = (0, R.Z)(L);
    return (0, a.jsxs)("div", {
        ref: y,
        "data-item-id": t,
        onClick: P,
        onContextMenu: _,
        className: l()(el.container, ei.container, c, { [el.isOpen]: h }),
        children: [
            (0, a.jsx)(
                g.P3F,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            a.forEach(function (t) {
                                var a;
                                (a = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = a);
                            });
                    }
                    return e;
                })(
                    {
                        onClick: P,
                        focusProps: { ringTarget: y },
                        onContextMenu: _,
                        "aria-label": er.intl.formatToPlainString(er.t.pgYN6c, {
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
            (0, a.jsxs)("div", {
                className: el.left,
                children: [
                    (0, a.jsx)(g.y5t, {
                        children: (0, a.jsxs)("div", {
                            className: ei.contentAndMedia,
                            children: [
                                (0, a.jsx)(ec, {
                                    channel: d,
                                    firstMessage: j,
                                    content: p,
                                    hasMediaAttachment: null != v,
                                    originalAuthor: C,
                                }),
                                (null == j ? void 0 : j.blocked) || null == v
                                    ? null
                                    : (0, a.jsx)(eb, {
                                          channel: d,
                                          firstMedia: v,
                                      }),
                            ],
                        }),
                    }),
                    (0, a.jsx)(g.Rny, {
                        enabled: !H,
                        children: (0, a.jsx)(eu, {
                            channel: d,
                            firstMessage: j,
                            facepileRef: I,
                        }),
                    }),
                ],
            }),
        ],
    });
});
function ec(e) {
    let { channel: t, firstMessage: n, content: r, hasMediaAttachment: i, originalAuthor: s } = e,
        { hasUnreads: o } = (0, S.J$)(t);
    return (0, a.jsxs)("div", {
        className: l()(ei.body, el.body),
        children: [
            (0, a.jsx)(_.ZP, { channel: t }),
            (0, a.jsx)("div", {
                className: (el.message, ei.message),
                children: (0, a.jsx)(ed, {
                    channel: t,
                    message: n,
                    content: r,
                    hasMediaAttachment: i,
                    hasUnreads: o,
                    originalAuthor: s,
                }),
            }),
        ],
    });
}
let ed = r.memo(function (e) {
    let { message: t, channel: n, content: r, hasMediaAttachment: i, hasUnreads: s, originalAuthor: o } = e,
        c = (0, f.e7)([I.Z], () => I.Z.isLoading(n.id)),
        d = (0, f.e7)([K.Z], () => K.Z.can(en.Plq.MANAGE_MESSAGES, n)),
        u = V.cC.useSetting(),
        m = (0, f.e7)([Y.Z], () => Y.Z.getGuildId()),
        { contentPlaceholder: h, renderedContent: x } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null,
                  }
                : (0, U.f)(
                      t,
                      r,
                      !1,
                      !1,
                      l()(el.messageContent, ei.messageContent, es.inlineFormat, es.__invalid_smallFontSize),
                      {
                          leadingIconClass: el.messageContentLeadingIcon,
                          trailingIconClass: el.messageContentTrailingIcon,
                          iconSize: ea.WW,
                      },
                  ),
        b =
            null != x
                ? (0, a.jsx)(g.Text, {
                      variant: "text-md/normal",
                      children: x,
                  })
                : i
                  ? null
                  : (0, a.jsx)(g.Text, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: s ? "text-default" : "text-muted",
                        className: l()(el.messageContent, ei.messageContent),
                        "aria-label": "",
                        children: null == t ? (c ? null : er.intl.string(er.t.mE3KJN)) : h,
                    });
    return (0, a.jsxs)(G.aQ.Provider, {
        value: (0, F.Z)(u, d),
        children: [
            null != o
                ? (0, a.jsx)(g.qEK, {
                      size: g.EFr.SIZE_40,
                      src: o.getAvatarURL(m, (0, g.dcp)(g.EFr.SIZE_40)),
                      "aria-label": "",
                      className: ei.originalMessageAuthorAvatar,
                  })
                : null,
            (0, a.jsxs)("div", {
                className: ei.originalMessageAuthorAndContent,
                children: [
                    (0, a.jsx)(et.Z, {
                        channel: n,
                        originalAuthor: o,
                        message: t,
                    }),
                    (0, a.jsx)(g.Rny, {
                        className: el.messageFocusBlock,
                        children: b,
                    }),
                ],
            }),
        ],
    });
});
function eu(e) {
    let { channel: t, facepileRef: n, firstMessage: r } = e,
        { isNew: i } = (0, S.J$)(t),
        l = (0, y.Q)(t.id),
        s = (null == r ? void 0 : r.reactions) != null && r.reactions.length > 0;
    return (0, a.jsxs)("div", {
        className: ei.footer,
        children: [
            (0, a.jsxs)("div", {
                className: ei.footerChannelTitle,
                children: [
                    (0, a.jsx)(g.U65, {
                        size: "custom",
                        width: 14,
                        height: 14,
                    }),
                    (0, a.jsx)(g.Text, {
                        variant: "text-sm/medium",
                        children: t.name,
                    }),
                    i
                        ? (0, a.jsx)(g.IGR, {
                              color: g.TVs.unsafe_rawColors.BRAND_260.css,
                              text: er.intl.string(er.t.y2b7CA),
                              className: ei.newBadge,
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("div", {
                className: ei.footerMessageSummary,
                children: [
                    s || null == r
                        ? null
                        : (0, a.jsx)(ef, {
                              firstMessage: r,
                              channel: t,
                          }),
                    (0, a.jsx)(em, {
                        channel: t,
                        iconSize: 14,
                    }),
                    (0, a.jsx)("span", {
                        className: el.bullet,
                        children: "\u2022",
                    }),
                    l.length > 0
                        ? (0, a.jsxs)("div", {
                              className: el.typing,
                              children: [
                                  (0, a.jsx)(eg, {
                                      channel: t,
                                      userIds: l,
                                      facepileRef: n,
                                  }),
                                  (0, a.jsx)("div", {
                                      className: el.dots,
                                      children: (0, a.jsx)(g.bbz, {
                                          themed: !0,
                                          dotRadius: 2,
                                      }),
                                  }),
                                  (0, a.jsx)(x.ZP, {
                                      channel: t,
                                      className: el.typingUsers,
                                      renderDots: !1,
                                  }),
                              ],
                          })
                        : (0, a.jsx)(eh, { channel: t }),
                ],
            }),
        ],
    });
}
function em(e) {
    let { channel: t, iconSize: n, showReadState: r = !1 } = e,
        { messageCountText: i, unreadCount: s } = (0, S.nP)(t);
    return (0, a.jsxs)("div", {
        className: l()(el.messageCountBox, { [el.hasRead]: r && null == s }),
        children: [
            (0, a.jsx)("span", {
                className: el.messageCountIcon,
                children: (0, a.jsx)(g.kBi, {
                    size: "custom",
                    color: "currentColor",
                    width: n,
                    height: n,
                }),
            }),
            "number" == typeof i
                ? (0, a.jsx)(C.Z, {
                      value: i,
                      digitWidth: 9,
                      className: el.messageCountText,
                  })
                : (0, a.jsx)("div", {
                      className: el.messageCountText,
                      children: i,
                  }),
            null == s
                ? null
                : (0, a.jsxs)(g.Text, {
                      className: el.newMessageCount,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", er.intl.format(er.t.z3PEth, { count: s }), ")"],
                  }),
        ],
    });
}
function ef(e) {
    let { firstMessage: t, channel: n } = e,
        r = (0, f.e7)([q.Z], () => q.Z.getChannel(n.parent_id)),
        i = (0, S.Bs)(r),
        { disableReactionCreates: l, isLurking: s, isPendingMember: o } = (0, H.Z)(n);
    return null == i || l
        ? null
        : (0, a.jsx)(B.le, {
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
function eh(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: r } = (0, w.H)(n.parent_id),
        i = (0, S.xw)(n, r),
        l = null == (t = n.threadMetadata) ? void 0 : t.createTimestamp,
        s = null == l ? null : er.intl.formatToPlainString(er.t["13euCd"], { timestamp: (0, $.vc)(d()(l), "LLLL") });
    return (0, a.jsx)(h.u, {
        text: s,
        children: (0, a.jsx)(g.Text, {
            className: el.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: i,
        }),
    });
}
function eg(e) {
    let { channel: t, userIds: n, facepileRef: r } = e,
        i = (0, S.iM)(t, n);
    return (0, a.jsx)("div", {
        ref: r,
        children: (0, a.jsx)(p.ZP, {
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
        { firstMedia: r, shouldObscure: i, obscureReason: s, shouldShowAgeVerification: o } = e,
        c = (0, f.e7)([Q.Z], () => Q.Z.isFocused()),
        d = (0, k.d$)(r.src),
        u = V.QK.useSetting(),
        m = (0, A.MC)(s),
        { src: h, width: x, height: b, alt: p } = r;
    if ((b > x ? (n = 72) : (t = 72), o)) {
        var j;
        return (0, a.jsx)("div", {
            "aria-label": null != (j = null != m ? m : p) ? j : er.intl.string(er.t.hqwnc2),
            className: l()(el.thumbnailContainer, el.obscuredThumbnailPlaceholder),
            style: {
                maxWidth: t,
                maxHeight: n,
                height: b,
                width: x,
            },
        });
    }
    return h.startsWith("data:")
        ? (0, a.jsx)(g.Eep, {
              src: h,
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
              src: h,
              maxHeight: t,
              maxWidth: n,
              width: x,
              height: b,
              alt: null != p && i ? m : p,
              autoPlay: u,
              animated: d && !i && c,
              srcIsAnimated: r.srcIsAnimated,
              containerClassName: el.thumbnailContainer,
              imageClassName: l()({ [el.obscured]: i }),
              analyticsSource: "ForumPostMediaPreview",
          });
}
function eb(e) {
    let { channel: t, firstMedia: n } = e,
        [r, i] = (0, A.hL)({
            media: n,
            channel: t,
        }),
        s = (0, T.JO)(i);
    return (0, a.jsx)(g.Rny, {
        enabled: !0,
        children: (0, a.jsxs)("div", {
            className: l()(el.bodyMedia, ei.bodyMedia),
            onClick: function (e) {
                e.stopPropagation(),
                    s &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        j.Z.showAgeVerificationGetStartedModal({ entryPoint: v.cU.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, a.jsx)(ex, {
                    firstMedia: n,
                    shouldObscure: r,
                    obscureReason: i,
                    shouldShowAgeVerification: s,
                }),
                r &&
                    (0, a.jsx)(P.Z, {
                        iconClassname: el.obscuredTag,
                        obscureReason: i,
                    }),
            ],
        }),
    });
}

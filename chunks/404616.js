n.d(t, {
    Lp: () => eo,
    NN: () => em,
    TJ: () => ec,
    ZP: () => eu,
    au: () => ej,
    kZ: () => ex,
    m9: () => ef,
    og: () => ep,
}),
    n(388685);
var a = n(951288),
    l = n(647438),
    s = n(120356),
    r = n.n(s),
    i = n(512722),
    o = n.n(i),
    c = n(913527),
    u = n.n(c),
    d = n(574583),
    m = n(91192),
    h = n(442837),
    g = n(692547),
    f = n(28664),
    x = n(481060),
    j = n(738619),
    b = n(393238),
    p = n(963374),
    v = n(884338),
    N = n(168107),
    y = n(480916),
    C = n(446489),
    O = n(824578),
    P = n(247206),
    Z = n(406432),
    _ = n(169525),
    w = n(566006),
    T = n(255269),
    S = n(937889),
    M = n(443877),
    k = n(524444),
    I = n(287151),
    E = n(267128),
    R = n(411405),
    A = n(695346),
    L = n(433355),
    B = n(592125),
    F = n(496675),
    z = n(699516),
    D = n(451478),
    U = n(55935),
    W = n(109434),
    H = n(360004),
    G = n(456269),
    Q = n(109590),
    J = n(660189),
    K = n(208970),
    X = n(73315),
    V = n(470623),
    Y = n(196255),
    q = n(858543),
    $ = n(265641),
    ee = n(627896),
    et = n(883728),
    en = n(981631),
    ea = n(217702),
    el = n(388032),
    es = n(586301),
    er = n(430864);
function ei(e) {
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
}
let eo = 72,
    ec = 72,
    eu = l.memo(function (e) {
        let {
                threadId: t,
                goToThread: n,
                observePostVisibilityAnalytics: s,
                overrideMedia: i,
                className: c,
                containerWidth: u,
            } = e,
            {
                channel: g,
                isOpen: f,
                messageCount: j,
                firstMessage: p,
                content: v,
                media: N,
            } = (function (e) {
                let { threadId: t, overrideMedia: n } = e,
                    a = (0, h.e7)([B.Z], () => B.Z.getChannel(t));
                o()(null != a, "the thread should not be null here, a store must have missed an update");
                let l = (0, h.e7)([L.ZP], () => L.ZP.getCurrentSidebarChannelId(a.parent_id) === a.id),
                    { firstMessage: s } = (0, Q.cl)(a),
                    { content: r, firstMedia: i } = (0, G.mX)({ firstMessage: s }),
                    { messageCountText: c } = (0, G.nP)(a);
                return {
                    channel: a,
                    isOpen: l,
                    messageCount: c,
                    firstMessage: s,
                    content: r,
                    media: null != n ? n : i,
                };
            })({
                threadId: t,
                overrideMedia: i,
            }),
            { ref: y, height: C } = (0, b.ZP)(),
            O = (0, V.xH)((e) => e.setCardHeight, d.X);
        l.useEffect(() => {
            null != C && O(t, C);
        }, [C, O, t]),
            l.useEffect(() => {
                null == s || s(y.current, t);
            }, [y, s, t]);
        let P = l.useRef(null),
            { handleLeftClick: Z, handleRightClick: _ } = (0, et.Z)({
                facepileRef: P,
                goToThread: n,
                channel: g,
            }),
            w = (0, m.JA)(t),
            { role: T, onFocus: S } = w,
            M = (function (e, t) {
                if (null == e) return {};
                var n,
                    a,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            a,
                            l = {},
                            s = Object.keys(e);
                        for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        (n = s[a]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(w, ["role", "onFocus"]),
            { isFocused: k, handleFocus: I, handleBlur: E } = (0, $.Z)(S);
        return (0, a.jsxs)("div", {
            ref: y,
            "data-item-id": t,
            onClick: Z,
            onContextMenu: _,
            className: r()(es.container, c, { [es.isOpen]: f }),
            children: [
                (0, a.jsx)(
                    x.P3F,
                    ei(
                        {
                            onClick: Z,
                            focusProps: { ringTarget: y },
                            onContextMenu: _,
                            "aria-label": el.intl.formatToPlainString(el.t.pgYN6c, {
                                title: g.name,
                                count: j,
                            }),
                            className: es.focusTarget,
                            onFocus: I,
                            onBlur: E,
                        },
                        M,
                    ),
                ),
                (0, a.jsxs)("div", {
                    className: es.left,
                    children: [
                        (0, a.jsx)(x.y5t, {
                            children: (0, a.jsx)(ed, {
                                channel: g,
                                firstMessage: p,
                                content: v,
                                hasMediaAttachment: null != N,
                                containerWidth: u,
                            }),
                        }),
                        (0, a.jsx)(x.Rny, {
                            enabled: !k,
                            children: (0, a.jsx)(eg, {
                                channel: g,
                                firstMessage: p,
                                facepileRef: P,
                            }),
                        }),
                    ],
                }),
                (null == p ? void 0 : p.blocked) || null == N
                    ? null
                    : (0, a.jsx)(eN, {
                          channel: g,
                          firstMedia: N,
                      }),
            ],
        });
    });
function ed(e) {
    let { channel: t, firstMessage: n, content: l, hasMediaAttachment: s, containerWidth: i } = e,
        { isNew: o, hasUnreads: c } = (0, G.J$)(t),
        u = em(t),
        { postTitleRef: d, isNewBadgeOverflow: m } = (0, ee.x)(o, 24, i);
    return (0, a.jsxs)("div", {
        className: es.body,
        children: [
            (0, a.jsx)(q.ZP, { channel: t }),
            (0, a.jsx)("div", {
                className: r()(es.header, { [es.withNewBadgeOverflow]: m }),
                children: (0, a.jsxs)("div", {
                    className: es.headerText,
                    children: [
                        (0, a.jsx)(x.Heading, {
                            variant: "heading-lg/semibold",
                            color: c ? "header-primary" : "text-muted",
                            lineClamp: 2,
                            className: es.postTitleText,
                            children: (0, a.jsxs)("span", {
                                ref: d,
                                children: [
                                    u,
                                    o &&
                                        (0, a.jsx)("span", {
                                            className: es.newBadgeWrapper,
                                            children: (0, a.jsx)(x.IGR, {
                                                className: es.newBadge,
                                                color: g.Z.unsafe_rawColors.BRAND_260.css,
                                                text: el.intl.string(el.t.y2b7CA),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                        o &&
                            m &&
                            (0, a.jsx)(x.IGR, {
                                className: es.newBadge,
                                color: g.Z.unsafe_rawColors.BRAND_260.css,
                                text: el.intl.string(el.t.y2b7CA),
                            }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                className: es.message,
                children: (0, a.jsx)(eh, {
                    channel: t,
                    message: n,
                    content: l,
                    hasMediaAttachment: s,
                    hasUnreads: c,
                }),
            }),
        ],
    });
}
function em(e) {
    let t = (0, h.e7)([K.Z], () => K.Z.getHasSearchResults(e.parent_id)),
        n = (0, h.e7)([K.Z], () => K.Z.getSearchQuery(e.parent_id)),
        a = (0, H.d)(e.guild_id, "forum_post_use_highlighted_channel_name"),
        s = l.useMemo(() => (0, p.nC)(t && null != n ? n : "", a), [t, n, a]);
    return l.useMemo(
        () =>
            (0, S.ZP)(
                {
                    content: e.name,
                    embeds: [],
                },
                { postProcessor: s },
            ).content,
        [e.name, s],
    );
}
let eh = l.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: s, hasUnreads: i } = e,
        { isBlocked: o, isIgnored: c } = (0, h.cj)([z.Z], () => ({
            isBlocked: null != t && z.Z.isBlockedForMessage(t),
            isIgnored: null != t && z.Z.isIgnoredForMessage(t),
        })),
        u = (0, h.e7)([J.Z], () => J.Z.isLoading(n.id)),
        d = (0, h.e7)([F.Z], () => F.Z.can(en.Plq.MANAGE_MESSAGES, n)),
        m = A.cC.useSetting(),
        g = null;
    if (o)
        g = (0, a.jsx)(x.Text, {
            className: es.blockedMessage,
            variant: "text-sm/medium",
            color: "text-muted",
            children: el.intl.string(el.t.Lkp2fB),
        });
    else if (c)
        g = (0, a.jsx)(x.Text, {
            className: es.blockedMessage,
            variant: "text-sm/medium",
            color: "text-muted",
            children: el.intl.string(el.t.yWK7ZM),
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null,
                  }
                : (0, E.f)(t, l, o, c, r()(es.messageContent, er.inlineFormat, er.__invalid_smallFontSize), {
                      leadingIconClass: es.messageContentLeadingIcon,
                      trailingIconClass: es.messageContentTrailingIcon,
                      iconSize: ea.WW,
                  });
        g =
            null != n
                ? (0, a.jsx)(x.Text, {
                      variant: "text-sm/semibold",
                      color: i ? "header-secondary" : "text-muted",
                      children: n,
                  })
                : s
                  ? null
                  : (0, a.jsx)(x.Text, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: i ? "header-secondary" : "text-muted",
                        className: es.messageContent,
                        children: null == t ? (u ? null : el.intl.string(el.t.mE3KJN)) : e,
                    });
    }
    return (0, a.jsxs)(R.aQ.Provider, {
        value: (0, T.Z)(m, d),
        children: [
            !o &&
                (0, a.jsx)(Y.Z, {
                    channel: n,
                    message: t,
                    renderColon: null != g,
                    hasUnreads: i,
                }),
            (0, a.jsx)(x.Rny, {
                className: es.messageFocusBlock,
                children: g,
            }),
        ],
    });
});
function eg(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        s = (0, O.Q)(t.id),
        r = (null == l ? void 0 : l.reactions) != null && l.reactions.length > 0;
    return (0, a.jsxs)("div", {
        className: es.footer,
        children: [
            r || null == l
                ? null
                : (0, a.jsx)(ex, {
                      firstMessage: l,
                      channel: t,
                  }),
            null == l
                ? null
                : (0, a.jsx)(ej, {
                      firstMessage: l,
                      channel: t,
                  }),
            (0, a.jsx)(ef, {
                channel: t,
                iconSize: 14,
            }),
            (0, a.jsx)("span", {
                className: es.bullet,
                children: "\u2022",
            }),
            s.length > 0
                ? (0, a.jsxs)("div", {
                      className: es.typing,
                      children: [
                          (0, a.jsx)(ep, {
                              channel: t,
                              userIds: s,
                              facepileRef: n,
                          }),
                          (0, a.jsx)("div", {
                              className: es.dots,
                              children: (0, a.jsx)(x.bbz, {
                                  themed: !0,
                                  dotRadius: 2,
                              }),
                          }),
                          (0, a.jsx)(j.ZP, {
                              channel: t,
                              className: es.typingUsers,
                              renderDots: !1,
                          }),
                      ],
                  })
                : (0, a.jsx)(eb, { channel: t }),
        ],
    });
}
function ef(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: s, unreadCount: i } = (0, G.nP)(t);
    return (0, a.jsxs)("div", {
        className: r()(es.messageCountBox, { [es.hasRead]: l && null == i }),
        children: [
            (0, a.jsx)("span", {
                className: es.messageCountIcon,
                children: (0, a.jsx)(x.kBi, {
                    size: "custom",
                    color: "currentColor",
                    width: n,
                    height: n,
                }),
            }),
            "number" == typeof s
                ? (0, a.jsx)(C.Z, {
                      value: s,
                      digitWidth: 9,
                      className: es.messageCountText,
                  })
                : (0, a.jsx)("div", {
                      className: es.messageCountText,
                      children: s,
                  }),
            null == i
                ? null
                : (0, a.jsxs)(x.Text, {
                      className: es.newMessageCount,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", el.intl.format(el.t.z3PEth, { count: i }), ")"],
                  }),
        ],
    });
}
function ex(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, h.e7)([B.Z], () => B.Z.getChannel(n.parent_id)),
        s = (0, G.Bs)(l),
        { disableReactionCreates: r, isLurking: i, isPendingMember: o } = (0, M.Z)(n);
    return null == s || r
        ? null
        : (0, a.jsx)(I.le, {
              className: es.updateReactionButton,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: i,
              isPendingMember: o,
              emoji: s,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: w.O.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function ej(e) {
    var t;
    let { firstMessage: n, channel: l } = e,
        s = (0, G.IN)(n),
        { disableReactionUpdates: r, isLurking: i, isPendingMember: o } = (0, M.Z)(l);
    return null == s
        ? null
        : (0, a.jsx)(
              I.le,
              ei(
                  {
                      className: es.updateReactionButton,
                      message: n,
                      readOnly: r || l.isArchivedLockedThread(),
                      isLurking: i,
                      isPendingMember: o,
                      useChatFontScaling: !1,
                      type: s.burst_count >= s.count ? w.O.BURST : w.O.NORMAL,
                      emojiSize: "reaction",
                      emojiSizeTooltip: "reaction",
                  },
                  s,
              ),
              "".concat(null != (t = s.emoji.id) ? t : 0, ":").concat(s.emoji.name),
          );
}
function eb(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: l } = (0, W.H)(n.parent_id),
        s = (0, G.xw)(n, l),
        r = null == (t = n.threadMetadata) ? void 0 : t.createTimestamp,
        i = null == r ? null : el.intl.formatToPlainString(el.t["13euCd"], { timestamp: (0, U.vc)(u()(r), "LLLL") });
    return (0, a.jsx)(f.u, {
        text: i,
        children: (0, a.jsx)(x.Text, {
            className: es.__invalid_activityText,
            variant: "text-sm/normal",
            color: "header-secondary",
            children: s,
        }),
    });
}
function ep(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        s = (0, G.iM)(t, n);
    return (0, a.jsx)("div", {
        ref: l,
        children: (0, a.jsx)(v.ZP, {
            className: es.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: s,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0,
        }),
    });
}
function ev(e) {
    let { firstMedia: t, shouldObscure: n, obscureReason: l, shouldShowAgeVerification: s } = e,
        i = (0, h.e7)([D.Z], () => D.Z.isFocused()),
        o = (0, Z.d$)(t.src),
        c = A.QK.useSetting(),
        u = (0, _.MC)(l),
        { src: d, width: m, height: g, alt: f } = t;
    if (s) {
        var j;
        return (0, a.jsx)("div", {
            "aria-label": null != (j = null != u ? u : f) ? j : el.intl.string(el.t.hqwnc2),
            className: r()(es.thumbnailContainer, es.obscuredThumbnailPlaceholder),
            style: {
                maxWidth: ec,
                maxHeight: eo,
                height: g,
                width: m,
            },
        });
    }
    return d.startsWith("data:")
        ? (0, a.jsx)(x.Eep, {
              src: d,
              width: m,
              height: g,
              minWidth: ec,
              minHeight: eo,
              alt: null != f && n ? u : f,
              className: es.thumbnailContainer,
              imageClassName: r()(es.thumbnailOverride, { [es.obscured]: n }),
          })
        : (0, k.Yi)({
              src: d,
              width: m,
              height: g,
              minWidth: ec,
              minHeight: eo,
              alt: null != f && n ? u : f,
              autoPlay: c,
              animated: o && !n && i,
              srcIsAnimated: t.srcIsAnimated,
              containerClassName: es.thumbnailContainer,
              imageClassName: r()(es.thumbnailOverride, { [es.obscured]: n }),
              analyticsSource: "ForumPostMediaPreview",
          });
}
function eN(e) {
    let { channel: t, firstMedia: n } = e,
        [l, s] = (0, _.hL)({
            media: n,
            channel: t,
        }),
        r = (0, P.JO)(s);
    return (0, a.jsx)(x.Rny, {
        enabled: !0,
        children: (0, a.jsxs)("div", {
            className: es.bodyMedia,
            onClick: function (e) {
                e.stopPropagation(),
                    r &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        N.Z.showAgeVerificationGetStartedModal({ entryPoint: y.cU.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, a.jsx)(ev, {
                    firstMedia: n,
                    shouldObscure: l,
                    obscureReason: s,
                    shouldShowAgeVerification: r,
                }),
                l &&
                    (0, a.jsx)(X.Z, {
                        iconClassname: es.obscuredTag,
                        obscureReason: s,
                    }),
            ],
        }),
    });
}

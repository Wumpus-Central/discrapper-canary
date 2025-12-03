n.d(t, {
    Lp: () => ei,
    NN: () => ed,
    TJ: () => eo,
    ZP: () => ec,
    au: () => ex,
    kZ: () => ef,
    m9: () => eg,
    og: () => eb,
}),
    n(388685);
var s = n(54381),
    l = n(473749),
    a = n(120356),
    r = n.n(a),
    i = n(512722),
    o = n.n(i),
    c = n(913527),
    u = n.n(c),
    d = n(55160),
    m = n(91192),
    h = n(442837),
    g = n(692547),
    f = n(28664),
    x = n(481060),
    j = n(738619),
    b = n(393238),
    v = n(963374),
    p = n(884338),
    N = n(168107),
    y = n(480916),
    C = n(446489),
    O = n(824578),
    P = n(247206),
    Z = n(406432),
    w = n(169525),
    S = n(566006),
    T = n(255269),
    M = n(937889),
    _ = n(443877),
    k = n(524444),
    I = n(287151),
    R = n(267128),
    E = n(411405),
    A = n(695346),
    L = n(433355),
    B = n(592125),
    F = n(496675),
    z = n(699516),
    D = n(451478),
    U = n(55935),
    W = n(109434),
    H = n(456269),
    G = n(109590),
    Q = n(660189),
    J = n(208970),
    K = n(73315),
    X = n(470623),
    V = n(196255),
    Y = n(858543),
    q = n(265641),
    $ = n(627896),
    ee = n(883728),
    et = n(981631),
    en = n(217702),
    es = n(388032),
    el = n(586301),
    ea = n(430864);
function er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            s.forEach(function (t) {
                var s;
                (s = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = s);
            });
    }
    return e;
}
let ei = 72,
    eo = 72,
    ec = l.memo(function (e) {
        let {
                threadId: t,
                goToThread: n,
                observePostVisibilityAnalytics: a,
                overrideMedia: i,
                className: c,
                containerWidth: u,
            } = e,
            {
                channel: g,
                isOpen: f,
                messageCount: j,
                firstMessage: v,
                content: p,
                media: N,
            } = (function (e) {
                let { threadId: t, overrideMedia: n } = e,
                    s = (0, h.e7)([B.Z], () => B.Z.getChannel(t));
                o()(null != s, "the thread should not be null here, a store must have missed an update");
                let l = (0, h.e7)([L.ZP], () => L.ZP.getCurrentSidebarChannelId(s.parent_id) === s.id),
                    { firstMessage: a } = (0, G.cl)(s),
                    { content: r, firstMedia: i } = (0, H.mX)({ firstMessage: a }),
                    { messageCountText: c } = (0, H.nP)(s);
                return {
                    channel: s,
                    isOpen: l,
                    messageCount: c,
                    firstMessage: a,
                    content: r,
                    media: null != n ? n : i,
                };
            })({
                threadId: t,
                overrideMedia: i,
            }),
            { ref: y, height: C } = (0, b.ZP)(),
            O = (0, X.xH)((e) => e.setCardHeight, d.X);
        l.useEffect(() => {
            null != C && O(t, C);
        }, [C, O, t]),
            l.useEffect(() => {
                null == a || a(y.current, t);
            }, [y, a, t]);
        let P = l.useRef(null),
            { handleLeftClick: Z, handleRightClick: w } = (0, ee.Z)({
                facepileRef: P,
                goToThread: n,
                channel: g,
            }),
            S = (0, m.JA)(t),
            { role: T, onFocus: M } = S,
            _ = (function (e, t) {
                if (null == e) return {};
                var n,
                    s,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            s,
                            l = {},
                            a = Object.keys(e);
                        for (s = 0; s < a.length; s++) (n = a[s]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (s = 0; s < a.length; s++)
                        (n = a[s]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(S, ["role", "onFocus"]),
            { isFocused: k, handleFocus: I, handleBlur: R } = (0, q.Z)(M);
        return (0, s.jsxs)("div", {
            ref: y,
            "data-item-id": t,
            onClick: Z,
            onContextMenu: w,
            className: r()(el.container, c, { [el.isOpen]: f }),
            children: [
                (0, s.jsx)(
                    x.P3F,
                    er(
                        {
                            onClick: Z,
                            focusProps: { ringTarget: y },
                            onContextMenu: w,
                            "aria-label": es.intl.formatToPlainString(es.t.pgYN6c, {
                                title: g.name,
                                count: j,
                            }),
                            className: el.focusTarget,
                            onFocus: I,
                            onBlur: R,
                        },
                        _,
                    ),
                ),
                (0, s.jsxs)("div", {
                    className: el.left,
                    children: [
                        (0, s.jsx)(x.y5t, {
                            children: (0, s.jsx)(eu, {
                                channel: g,
                                firstMessage: v,
                                content: p,
                                hasMediaAttachment: null != N,
                                containerWidth: u,
                            }),
                        }),
                        (0, s.jsx)(x.Rny, {
                            enabled: !k,
                            children: (0, s.jsx)(eh, {
                                channel: g,
                                firstMessage: v,
                                facepileRef: P,
                            }),
                        }),
                    ],
                }),
                (null == v ? void 0 : v.blocked) || null == N
                    ? null
                    : (0, s.jsx)(ep, {
                          channel: g,
                          firstMedia: N,
                      }),
            ],
        });
    });
function eu(e) {
    let { channel: t, firstMessage: n, content: l, hasMediaAttachment: a, containerWidth: i } = e,
        { isNew: o, hasUnreads: c } = (0, H.J$)(t),
        u = ed(t),
        { postTitleRef: d, isNewBadgeOverflow: m } = (0, $.x)(o, 24, i);
    return (0, s.jsxs)("div", {
        className: el.body,
        children: [
            (0, s.jsx)(Y.ZP, { channel: t }),
            (0, s.jsx)("div", {
                className: r()(el.header, { [el.withNewBadgeOverflow]: m }),
                children: (0, s.jsxs)("div", {
                    className: el.headerText,
                    children: [
                        (0, s.jsx)(x.Heading, {
                            variant: "heading-lg/semibold",
                            color: c ? "header-primary" : "text-muted",
                            lineClamp: 2,
                            className: el.postTitleText,
                            children: (0, s.jsxs)("span", {
                                ref: d,
                                children: [
                                    u,
                                    o &&
                                        (0, s.jsx)("span", {
                                            className: el.newBadgeWrapper,
                                            children: (0, s.jsx)(x.IGR, {
                                                className: el.newBadge,
                                                color: g.Z.unsafe_rawColors.BRAND_260.css,
                                                text: es.intl.string(es.t.y2b7CA),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                        o &&
                            m &&
                            (0, s.jsx)(x.IGR, {
                                className: el.newBadge,
                                color: g.Z.unsafe_rawColors.BRAND_260.css,
                                text: es.intl.string(es.t.y2b7CA),
                            }),
                    ],
                }),
            }),
            (0, s.jsx)("div", {
                className: el.message,
                children: (0, s.jsx)(em, {
                    channel: t,
                    message: n,
                    content: l,
                    hasMediaAttachment: a,
                    hasUnreads: c,
                }),
            }),
        ],
    });
}
function ed(e) {
    let t = (0, h.e7)([J.Z], () => J.Z.getHasSearchResults(e.parent_id)),
        n = (0, h.e7)([J.Z], () => J.Z.getSearchQuery(e.parent_id)),
        s = l.useMemo(() => (0, v.nC)(t && null != n ? n : "", !0), [t, n]);
    return l.useMemo(
        () =>
            (0, M.ZP)(
                {
                    content: e.name,
                    embeds: [],
                },
                { postProcessor: s },
            ).content,
        [e.name, s],
    );
}
let em = l.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: a, hasUnreads: i } = e,
        { isBlocked: o, isIgnored: c } = (0, h.cj)([z.Z], () => ({
            isBlocked: null != t && z.Z.isBlockedForMessage(t),
            isIgnored: null != t && z.Z.isIgnoredForMessage(t),
        })),
        u = (0, h.e7)([Q.Z], () => Q.Z.isLoading(n.id)),
        d = (0, h.e7)([F.Z], () => F.Z.can(et.Plq.MANAGE_MESSAGES, n)),
        m = A.cC.useSetting(),
        g = null;
    if (o)
        g = (0, s.jsx)(x.Text, {
            className: el.blockedMessage,
            variant: "text-sm/medium",
            color: "text-muted",
            children: es.intl.string(es.t.Lkp2fB),
        });
    else if (c)
        g = (0, s.jsx)(x.Text, {
            className: el.blockedMessage,
            variant: "text-sm/medium",
            color: "text-muted",
            children: es.intl.string(es.t.yWK7ZM),
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? {
                      contentPlaceholder: null,
                      renderedContent: null,
                  }
                : (0, R.f)(t, l, o, c, r()(el.messageContent, ea.inlineFormat, ea.__invalid_smallFontSize), {
                      leadingIconClass: el.messageContentLeadingIcon,
                      trailingIconClass: el.messageContentTrailingIcon,
                      iconSize: en.WW,
                  });
        g =
            null != n
                ? (0, s.jsx)(x.Text, {
                      variant: "text-sm/semibold",
                      color: i ? "text-default" : "text-muted",
                      children: n,
                  })
                : a
                  ? null
                  : (0, s.jsx)(x.Text, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: i ? "text-default" : "text-muted",
                        className: el.messageContent,
                        children: null == t ? (u ? null : es.intl.string(es.t.mE3KJN)) : e,
                    });
    }
    return (0, s.jsxs)(E.aQ.Provider, {
        value: (0, T.Z)(m, d),
        children: [
            !o &&
                (0, s.jsx)(V.Z, {
                    channel: n,
                    message: t,
                    renderColon: null != g,
                    hasUnreads: i,
                }),
            (0, s.jsx)(x.Rny, {
                className: el.messageFocusBlock,
                children: g,
            }),
        ],
    });
});
function eh(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        a = (0, O.Q)(t.id),
        r = (null == l ? void 0 : l.reactions) != null && l.reactions.length > 0;
    return (0, s.jsxs)("div", {
        className: el.footer,
        children: [
            r || null == l
                ? null
                : (0, s.jsx)(ef, {
                      firstMessage: l,
                      channel: t,
                  }),
            null == l
                ? null
                : (0, s.jsx)(ex, {
                      firstMessage: l,
                      channel: t,
                  }),
            (0, s.jsx)(eg, {
                channel: t,
                iconSize: 14,
            }),
            (0, s.jsx)("span", {
                className: el.bullet,
                children: "\u2022",
            }),
            a.length > 0
                ? (0, s.jsxs)("div", {
                      className: el.typing,
                      children: [
                          (0, s.jsx)(eb, {
                              channel: t,
                              userIds: a,
                              facepileRef: n,
                          }),
                          (0, s.jsx)("div", {
                              className: el.dots,
                              children: (0, s.jsx)(x.bbz, {
                                  themed: !0,
                                  dotRadius: 2,
                              }),
                          }),
                          (0, s.jsx)(j.ZP, {
                              channel: t,
                              className: el.typingUsers,
                              renderDots: !1,
                          }),
                      ],
                  })
                : (0, s.jsx)(ej, { channel: t }),
        ],
    });
}
function eg(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: a, unreadCount: i } = (0, H.nP)(t);
    return (0, s.jsxs)("div", {
        className: r()(el.messageCountBox, { [el.hasRead]: l && null == i }),
        children: [
            (0, s.jsx)("span", {
                className: el.messageCountIcon,
                children: (0, s.jsx)(x.kBi, {
                    size: "custom",
                    color: "currentColor",
                    width: n,
                    height: n,
                }),
            }),
            "number" == typeof a
                ? (0, s.jsx)(C.Z, {
                      value: a,
                      digitWidth: 9,
                      className: el.messageCountText,
                  })
                : (0, s.jsx)("div", {
                      className: el.messageCountText,
                      children: a,
                  }),
            null == i
                ? null
                : (0, s.jsxs)(x.Text, {
                      className: el.newMessageCount,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", es.intl.format(es.t.z3PEth, { count: i }), ")"],
                  }),
        ],
    });
}
function ef(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, h.e7)([B.Z], () => B.Z.getChannel(n.parent_id)),
        a = (0, H.Bs)(l),
        { disableReactionCreates: r, isLurking: i, isPendingMember: o } = (0, _.Z)(n);
    return null == a || r
        ? null
        : (0, s.jsx)(I.le, {
              className: el.updateReactionButton,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: i,
              isPendingMember: o,
              emoji: a,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: S.O.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function ex(e) {
    var t;
    let { firstMessage: n, channel: l } = e,
        a = (0, H.IN)(n),
        { disableReactionUpdates: r, isLurking: i, isPendingMember: o } = (0, _.Z)(l);
    return null == a
        ? null
        : (0, s.jsx)(
              I.le,
              er(
                  {
                      className: el.updateReactionButton,
                      message: n,
                      readOnly: r || l.isArchivedLockedThread(),
                      isLurking: i,
                      isPendingMember: o,
                      useChatFontScaling: !1,
                      type: a.burst_count >= a.count ? S.O.BURST : S.O.NORMAL,
                      emojiSize: "reaction",
                      emojiSizeTooltip: "reaction",
                  },
                  a,
              ),
              "".concat(null != (t = a.emoji.id) ? t : 0, ":").concat(a.emoji.name),
          );
}
function ej(e) {
    var t;
    let { channel: n } = e,
        { sortOrder: l } = (0, W.H)(n.parent_id),
        a = (0, H.xw)(n, l),
        r = null == (t = n.threadMetadata) ? void 0 : t.createTimestamp,
        i = null == r ? null : es.intl.formatToPlainString(es.t["13euCd"], { timestamp: (0, U.vc)(u()(r), "LLLL") });
    return (0, s.jsx)(f.u, {
        text: i,
        children: (0, s.jsx)(x.Text, {
            className: el.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: a,
        }),
    });
}
function eb(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        a = (0, H.iM)(t, n);
    return (0, s.jsx)("div", {
        ref: l,
        children: (0, s.jsx)(p.ZP, {
            className: el.__invalid_facepile,
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
function ev(e) {
    let { firstMedia: t, shouldObscure: n, obscureReason: l, shouldShowAgeVerification: a } = e,
        i = (0, h.e7)([D.Z], () => D.Z.isFocused()),
        o = (0, Z.d$)(t.src),
        c = A.QK.useSetting(),
        u = (0, w.MC)(l),
        { src: d, width: m, height: g, alt: f } = t;
    if (a) {
        var j;
        return (0, s.jsx)("div", {
            "aria-label": null != (j = null != u ? u : f) ? j : es.intl.string(es.t.hqwnc2),
            className: r()(el.thumbnailContainer, el.obscuredThumbnailPlaceholder),
            style: {
                maxWidth: eo,
                maxHeight: ei,
                height: g,
                width: m,
            },
        });
    }
    return d.startsWith("data:")
        ? (0, s.jsx)(x.Eep, {
              src: d,
              width: m,
              height: g,
              minWidth: eo,
              minHeight: ei,
              alt: null != f && n ? u : f,
              className: el.thumbnailContainer,
              imageClassName: r()(el.thumbnailOverride, { [el.obscured]: n }),
          })
        : (0, k.Yi)({
              src: d,
              width: m,
              height: g,
              minWidth: eo,
              minHeight: ei,
              alt: null != f && n ? u : f,
              autoPlay: c,
              animated: o && !n && i,
              srcIsAnimated: t.srcIsAnimated,
              containerClassName: el.thumbnailContainer,
              imageClassName: r()(el.thumbnailOverride, { [el.obscured]: n }),
              analyticsSource: "ForumPostMediaPreview",
          });
}
function ep(e) {
    let { channel: t, firstMedia: n } = e,
        [l, a] = (0, w.hL)({
            media: n,
            channel: t,
        }),
        r = (0, P.JO)(a);
    return (0, s.jsx)(x.Rny, {
        enabled: !0,
        children: (0, s.jsxs)("div", {
            className: el.bodyMedia,
            onClick: function (e) {
                e.stopPropagation(),
                    r &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        N.Z.showAgeVerificationGetStartedModal({ entryPoint: y.cU.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, s.jsx)(ev, {
                    firstMedia: n,
                    shouldObscure: l,
                    obscureReason: a,
                    shouldShowAgeVerification: r,
                }),
                l &&
                    (0, s.jsx)(K.Z, {
                        iconClassname: el.obscuredTag,
                        obscureReason: a,
                    }),
            ],
        }),
    });
}

t.d(n, {
    Lp: () => ei,
    NN: () => ed,
    TJ: () => eo,
    ZP: () => ec,
    au: () => ex,
    kZ: () => ef,
    m9: () => eg,
    og: () => eb,
}),
    t(388685);
var s = t(54381),
    l = t(473749),
    a = t(120356),
    r = t.n(a),
    i = t(512722),
    o = t.n(i),
    c = t(913527),
    u = t.n(c),
    d = t(55160),
    m = t(91192),
    h = t(442837),
    g = t(692547),
    f = t(28664),
    x = t(481060),
    j = t(738619),
    b = t(393238),
    v = t(963374),
    p = t(884338),
    N = t(168107),
    y = t(480916),
    C = t(446489),
    O = t(824578),
    P = t(247206),
    Z = t(406432),
    w = t(169525),
    S = t(566006),
    T = t(255269),
    M = t(937889),
    _ = t(443877),
    k = t(524444),
    I = t(287151),
    R = t(267128),
    E = t(411405),
    A = t(695346),
    L = t(433355),
    B = t(592125),
    F = t(496675),
    z = t(699516),
    D = t(451478),
    U = t(55935),
    W = t(109434),
    H = t(456269),
    G = t(109590),
    Q = t(660189),
    J = t(208970),
    K = t(73315),
    X = t(470623),
    V = t(196255),
    Y = t(858543),
    q = t(265641),
    $ = t(627896),
    ee = t(883728),
    en = t(981631),
    et = t(217702),
    es = t(388032),
    el = t(586301),
    ea = t(430864);
function er(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            s = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            s.forEach(function (n) {
                var s;
                (s = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = s);
            });
    }
    return e;
}
let ei = 72,
    eo = 72,
    ec = l.memo(function (e) {
        let {
                threadId: n,
                goToThread: t,
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
                let { threadId: n, overrideMedia: t } = e,
                    s = (0, h.e7)([B.Z], () => B.Z.getChannel(n));
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
                    media: null != t ? t : i,
                };
            })({
                threadId: n,
                overrideMedia: i,
            }),
            { ref: y, height: C } = (0, b.ZP)(),
            O = (0, X.xH)((e) => e.setCardHeight, d.X);
        l.useEffect(() => {
            null != C && O(n, C);
        }, [C, O, n]),
            l.useEffect(() => {
                null == a || a(y.current, n);
            }, [y, a, n]);
        let P = l.useRef(null),
            { handleLeftClick: Z, handleRightClick: w } = (0, ee.Z)({
                facepileRef: P,
                goToThread: t,
                channel: g,
            }),
            S = (0, m.JA)(n),
            { role: T, onFocus: M } = S,
            _ = (function (e, n) {
                if (null == e) return {};
                var t,
                    s,
                    l = (function (e, n) {
                        if (null == e) return {};
                        var t,
                            s,
                            l = {},
                            a = Object.keys(e);
                        for (s = 0; s < a.length; s++) (t = a[s]), n.indexOf(t) >= 0 || (l[t] = e[t]);
                        return l;
                    })(e, n);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (s = 0; s < a.length; s++)
                        (t = a[s]),
                            !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t]);
                }
                return l;
            })(S, ["role", "onFocus"]),
            { isFocused: k, handleFocus: I, handleBlur: R } = (0, q.Z)(M);
        return (0, s.jsxs)("div", {
            ref: y,
            "data-item-id": n,
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
    let { channel: n, firstMessage: t, content: l, hasMediaAttachment: a, containerWidth: i } = e,
        { isNew: o, hasUnreads: c } = (0, H.J$)(n),
        u = ed(n),
        { postTitleRef: d, isNewBadgeOverflow: m } = (0, $.x)(o, 24, i);
    return (0, s.jsxs)("div", {
        className: el.body,
        children: [
            (0, s.jsx)(Y.ZP, { channel: n }),
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
                    channel: n,
                    message: t,
                    content: l,
                    hasMediaAttachment: a,
                    hasUnreads: c,
                }),
            }),
        ],
    });
}
function ed(e) {
    let n = (0, h.e7)([J.Z], () => J.Z.getHasSearchResults(e.parent_id)),
        t = (0, h.e7)([J.Z], () => J.Z.getSearchQuery(e.parent_id)),
        s = l.useMemo(() => (0, v.nC)(n && null != t ? t : "", !0), [n, t]);
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
    let { message: n, channel: t, content: l, hasMediaAttachment: a, hasUnreads: i } = e,
        { isBlocked: o, isIgnored: c } = (0, h.cj)([z.Z], () => ({
            isBlocked: null != n && z.Z.isBlockedForMessage(n),
            isIgnored: null != n && z.Z.isIgnoredForMessage(n),
        })),
        u = (0, h.e7)([Q.Z], () => Q.Z.isLoading(t.id)),
        d = (0, h.e7)([F.Z], () => F.Z.can(en.Plq.MANAGE_MESSAGES, t)),
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
        let { contentPlaceholder: e, renderedContent: t } =
            null == n
                ? {
                      contentPlaceholder: null,
                      renderedContent: null,
                  }
                : (0, R.f)(n, l, o, c, r()(el.messageContent, ea.inlineFormat, ea.__invalid_smallFontSize), {
                      leadingIconClass: el.messageContentLeadingIcon,
                      trailingIconClass: el.messageContentTrailingIcon,
                      iconSize: et.WW,
                  });
        g =
            null != t
                ? (0, s.jsx)(x.Text, {
                      variant: "text-sm/semibold",
                      color: i ? "header-secondary" : "text-muted",
                      children: t,
                  })
                : a
                  ? null
                  : (0, s.jsx)(x.Text, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: i ? "header-secondary" : "text-muted",
                        className: el.messageContent,
                        children: null == n ? (u ? null : es.intl.string(es.t.mE3KJN)) : e,
                    });
    }
    return (0, s.jsxs)(E.aQ.Provider, {
        value: (0, T.Z)(m, d),
        children: [
            !o &&
                (0, s.jsx)(V.Z, {
                    channel: t,
                    message: n,
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
    let { channel: n, facepileRef: t, firstMessage: l } = e,
        a = (0, O.Q)(n.id),
        r = (null == l ? void 0 : l.reactions) != null && l.reactions.length > 0;
    return (0, s.jsxs)("div", {
        className: el.footer,
        children: [
            r || null == l
                ? null
                : (0, s.jsx)(ef, {
                      firstMessage: l,
                      channel: n,
                  }),
            null == l
                ? null
                : (0, s.jsx)(ex, {
                      firstMessage: l,
                      channel: n,
                  }),
            (0, s.jsx)(eg, {
                channel: n,
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
                              channel: n,
                              userIds: a,
                              facepileRef: t,
                          }),
                          (0, s.jsx)("div", {
                              className: el.dots,
                              children: (0, s.jsx)(x.bbz, {
                                  themed: !0,
                                  dotRadius: 2,
                              }),
                          }),
                          (0, s.jsx)(j.ZP, {
                              channel: n,
                              className: el.typingUsers,
                              renderDots: !1,
                          }),
                      ],
                  })
                : (0, s.jsx)(ej, { channel: n }),
        ],
    });
}
function eg(e) {
    let { channel: n, iconSize: t, showReadState: l = !1 } = e,
        { messageCountText: a, unreadCount: i } = (0, H.nP)(n);
    return (0, s.jsxs)("div", {
        className: r()(el.messageCountBox, { [el.hasRead]: l && null == i }),
        children: [
            (0, s.jsx)("span", {
                className: el.messageCountIcon,
                children: (0, s.jsx)(x.kBi, {
                    size: "custom",
                    color: "currentColor",
                    width: t,
                    height: t,
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
    let { firstMessage: n, channel: t } = e,
        l = (0, h.e7)([B.Z], () => B.Z.getChannel(t.parent_id)),
        a = (0, H.Bs)(l),
        { disableReactionCreates: r, isLurking: i, isPendingMember: o } = (0, _.Z)(t);
    return null == a || r
        ? null
        : (0, s.jsx)(I.le, {
              className: el.updateReactionButton,
              message: n,
              readOnly: t.isArchivedLockedThread(),
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
    var n;
    let { firstMessage: t, channel: l } = e,
        a = (0, H.IN)(t),
        { disableReactionUpdates: r, isLurking: i, isPendingMember: o } = (0, _.Z)(l);
    return null == a
        ? null
        : (0, s.jsx)(
              I.le,
              er(
                  {
                      className: el.updateReactionButton,
                      message: t,
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
              "".concat(null != (n = a.emoji.id) ? n : 0, ":").concat(a.emoji.name),
          );
}
function ej(e) {
    var n;
    let { channel: t } = e,
        { sortOrder: l } = (0, W.H)(t.parent_id),
        a = (0, H.xw)(t, l),
        r = null == (n = t.threadMetadata) ? void 0 : n.createTimestamp,
        i = null == r ? null : es.intl.formatToPlainString(es.t["13euCd"], { timestamp: (0, U.vc)(u()(r), "LLLL") });
    return (0, s.jsx)(f.u, {
        text: i,
        children: (0, s.jsx)(x.Text, {
            className: el.__invalid_activityText,
            variant: "text-sm/normal",
            color: "header-secondary",
            children: a,
        }),
    });
}
function eb(e) {
    let { channel: n, userIds: t, facepileRef: l } = e,
        a = (0, H.iM)(n, t);
    return (0, s.jsx)("div", {
        ref: l,
        children: (0, s.jsx)(p.ZP, {
            className: el.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: n.guild_id,
            users: a,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0,
        }),
    });
}
function ev(e) {
    let { firstMedia: n, shouldObscure: t, obscureReason: l, shouldShowAgeVerification: a } = e,
        i = (0, h.e7)([D.Z], () => D.Z.isFocused()),
        o = (0, Z.d$)(n.src),
        c = A.QK.useSetting(),
        u = (0, w.MC)(l),
        { src: d, width: m, height: g, alt: f } = n;
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
              alt: null != f && t ? u : f,
              className: el.thumbnailContainer,
              imageClassName: r()(el.thumbnailOverride, { [el.obscured]: t }),
          })
        : (0, k.Yi)({
              src: d,
              width: m,
              height: g,
              minWidth: eo,
              minHeight: ei,
              alt: null != f && t ? u : f,
              autoPlay: c,
              animated: o && !t && i,
              srcIsAnimated: n.srcIsAnimated,
              containerClassName: el.thumbnailContainer,
              imageClassName: r()(el.thumbnailOverride, { [el.obscured]: t }),
              analyticsSource: "ForumPostMediaPreview",
          });
}
function ep(e) {
    let { channel: n, firstMedia: t } = e,
        [l, a] = (0, w.hL)({
            media: t,
            channel: n,
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
                    firstMedia: t,
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

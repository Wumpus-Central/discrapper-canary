t.d(n, {
    NA: () => eC,
    $k: () => ey,
    gL: () => ek,
    T5: () => ej,
    cn: () => eS,
    Ay: () => eA,
    Co: () => ef,
    hf: () => ep,
});
var s = t(477900),
    l = t(582128),
    i = t(503698),
    a = t.n(i),
    r = t(284009),
    c = t.n(r),
    d = t(536637),
    o = t.n(d),
    u = t(462180),
    h = t(837381),
    m = t(17928),
    g = t(939249),
    x = t(707554),
    f = t(346055),
    j = t(534514),
    A = t(62010),
    v = t(834730),
    p = t(863610),
    N = t(534890),
    b = t(866665),
    y = t(144165),
    C = t(119031),
    S = t(765671),
    M = t(738768),
    k = t(104171),
    L = t(379257),
    _ = t(306537),
    E = t(114166),
    P = t(47167),
    T = t(810181),
    w = t(607470),
    I = t(390248),
    R = t(338717),
    z = t(954403),
    F = t(59318),
    G = t(294520),
    U = t(505527),
    W = t(863439),
    B = t(467073),
    O = t(44788),
    q = t(831688),
    K = t(448368),
    D = t(302031),
    H = t(253932),
    $ = t(358047),
    V = t(734057),
    J = t(576705),
    Z = t(994500),
    Q = t(531685),
    Y = t(58703),
    X = t(422844),
    ee = t(435470),
    en = t(473503),
    et = t(969043),
    es = t(768953),
    el = t(710948),
    ei = t(218152),
    ea = t(313880),
    er = t(52933),
    ec = t(504261),
    ed = t(795435),
    eo = t(505234),
    eu = t(652215),
    eh = t(838541),
    em = t(105292),
    eg = t(223139),
    ex = t(165648);
let ef = 72,
    ej = 72,
    eA = l.memo(function (e) {
        let {
                threadId: n,
                goToThread: t,
                observePostVisibilityAnalytics: i,
                overrideMedia: r,
                className: d,
                containerWidth: o,
            } = e,
            {
                channel: j,
                isOpen: A,
                messageCount: v,
                firstMessage: p,
                content: N,
                media: b,
            } = (function (e) {
                let { threadId: n, overrideMedia: t } = e,
                    s = (0, m.bG)([V.A], () => V.A.getChannel(n));
                c()(null != s, "the thread should not be null here, a store must have missed an update");
                let l = (0, m.bG)([$.Ay], () => $.Ay.getCurrentSidebarChannelId(s.parent_id) === s.id),
                    { firstMessage: i } = (0, en.OA)(s),
                    { content: a, firstMedia: r } = (0, ed.A)({ firstMessage: i }),
                    { messageCountText: d } = (0, ee.k6)(s);
                return { channel: s, isOpen: l, messageCount: d, firstMessage: i, content: a, media: t ?? r };
            })({ threadId: n, overrideMedia: r }),
            y = (0, P.Ay)(j),
            { ref: C, height: M } = (0, S.Ay)(),
            k = (0, ei.kU)((e) => e.setCardHeight, u.x);
        (l.useEffect(() => {
            null != M && k(n, M);
        }, [M, k, n]),
            l.useEffect(() => {
                i?.(C.current, n);
            }, [C, i, n]));
        let L = l.useRef(null),
            { handleLeftClick: _, handleRightClick: E } = (0, eo.A)({ facepileRef: L, goToThread: t, channel: j }),
            { role: T, onFocus: w, ...I } = (0, h.rm)(n),
            { isFocused: R, handleFocus: z, handleBlur: F } = (0, ec.A)(w);
        return (0, s.jsxs)("div", {
            ref: C,
            "data-item-id": n,
            onClick: _,
            onContextMenu: E,
            className: a()(eg.kL, d, { [eg.nT]: A }),
            children: [
                (0, s.jsx)(g.D, {
                    onClick: _,
                    focusProps: { ringTarget: C },
                    onContextMenu: E,
                    "aria-label": em.intl.formatToPlainString(em.t.pgYN6c, { title: y ?? "", count: v }),
                    className: eg.Kv,
                    onFocus: z,
                    onBlur: F,
                    ...I,
                }),
                (0, s.jsxs)("div", {
                    className: eg.kb,
                    children: [
                        (0, s.jsx)(x.F, {
                            children: (0, s.jsx)(ev, {
                                channel: j,
                                firstMessage: p,
                                content: N,
                                hasMediaAttachment: null != b,
                                containerWidth: o,
                            }),
                        }),
                        (0, s.jsx)(f.M, {
                            enabled: !R,
                            children: (0, s.jsx)(eb, { channel: j, firstMessage: p, facepileRef: L }),
                        }),
                    ],
                }),
                p?.blocked || null == b ? null : (0, s.jsx)(eP, { channel: j, firstMedia: b }),
            ],
        });
    });
function ev(e) {
    let { channel: n, firstMessage: t, content: i, hasMediaAttachment: r, containerWidth: c } = e,
        { isNew: d, hasUnreads: o } = (0, ee.X5)(n),
        u = ep(n),
        { postTitleRef: h, isNewBadgeOverflow: m } = (function (e, n) {
            let t = l.useRef(null),
                [s, i] = l.useState(!1),
                a = l.useCallback(() => {
                    e && null !== t.current && i(t.current?.offsetHeight > 60);
                }, [i, e, 24]);
            return (
                l.useLayoutEffect(() => {
                    a();
                }, [a, e, n]),
                { postTitleRef: t, isNewBadgeOverflow: s }
            );
        })(d, c);
    return (0, s.jsxs)("div", {
        className: eg.rf,
        children: [
            (0, s.jsx)(er.Ay, { channel: n }),
            (0, s.jsx)("div", {
                className: a()(eg.wx, { [eg.qN]: m }),
                children: (0, s.jsxs)("div", {
                    className: eg.TK,
                    children: [
                        (0, s.jsx)(j.D, {
                            variant: "heading-lg/semibold",
                            color: o ? "text-strong" : "text-muted",
                            lineClamp: 2,
                            className: eg.o$,
                            children: (0, s.jsxs)("span", {
                                ref: h,
                                children: [
                                    u,
                                    d &&
                                        (0, s.jsx)("span", {
                                            className: eg.pr,
                                            children: (0, s.jsx)("span", {
                                                className: eg.Ad,
                                                children: (0, s.jsx)(A.E, { type: "new", variant: "primary" }),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                        d &&
                            m &&
                            (0, s.jsx)("div", {
                                className: eg.gi,
                                children: (0, s.jsx)(A.E, { type: "new", variant: "primary" }),
                            }),
                    ],
                }),
            }),
            (0, s.jsx)("div", {
                className: eg.iU,
                children: (0, s.jsx)(eN, { channel: n, message: t, content: i, hasMediaAttachment: r, hasUnreads: o }),
            }),
        ],
    });
}
function ep(e) {
    let n = (0, P.Ay)(e),
        t = (0, m.bG)([es.A], () => es.A.getHasSearchResults(e.parent_id)),
        i = (0, m.bG)([es.A], () => es.A.getSearchQuery(e.parent_id)),
        a = l.useMemo(() => (0, M.th)(t && null != i ? i : "", !0), [t, i]);
    return (0, s.jsx)(z.G.Provider, { value: a, children: (0, s.jsx)(z.z, { text: n ?? "" }) });
}
let eN = l.memo(function (e) {
    let { message: n, channel: t, content: l, hasMediaAttachment: i, hasUnreads: r } = e,
        { isBlocked: c, isIgnored: d } = (0, m.cf)([Z.A], () => ({
            isBlocked: null != n && Z.A.isBlockedForMessage(n),
            isIgnored: null != n && Z.A.isIgnoredForMessage(n),
        })),
        o = (0, m.bG)([et.A], () => et.A.isLoading(t.id)),
        u = (0, m.bG)([J.A], () => J.A.can(eu.xBc.MANAGE_MESSAGES, t)),
        h = H.gs.useSetting(),
        g = null;
    if (c)
        g = (0, s.jsx)(v.E, {
            className: eg.Wv,
            variant: "body-sm/medium",
            color: "text-muted",
            children: em.intl.string(em.t.Lkp2fB),
        });
    else if (d)
        g = (0, s.jsx)(v.E, {
            className: eg.Wv,
            variant: "body-sm/medium",
            color: "text-muted",
            children: em.intl.string(em.t.yWK7ZM),
        });
    else {
        let { contentPlaceholder: e, renderedContent: t } =
            null == n
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, K.o)(n, l, c, d, a()(eg.BK, ex.tZ, ex.__invalid_smallFontSize), {
                      leadingIconClass: eg.aG,
                      trailingIconClass: eg.sl,
                      iconSize: eh.eJ,
                  });
        g =
            null != t
                ? (0, s.jsx)(v.E, {
                      variant: "body-sm/semibold",
                      color: r ? "text-default" : "text-muted",
                      children: t,
                  })
                : i
                  ? null
                  : (0, s.jsx)(v.E, {
                        tag: "span",
                        variant: "body-sm/medium",
                        color: r ? "text-default" : "text-muted",
                        className: eg.BK,
                        children: null == n ? (o ? null : em.intl.string(em.t.mE3KJN)) : e,
                    });
    }
    let x = (0, W.A)(h, u);
    return (0, s.jsxs)(D.Bs.Provider, {
        value: x,
        children: [
            !c && (0, s.jsx)(ea.A, { channel: t, message: n, renderColon: null != g, hasUnreads: r }),
            (0, s.jsx)(f.M, { className: eg.JY, children: g }),
        ],
    });
});
function eb(e) {
    let { channel: n, facepileRef: t, firstMessage: l } = e,
        i = (0, T.m)(n.id),
        a = l?.reactions != null && l.reactions.length > 0;
    return (0, s.jsxs)("div", {
        className: eg.qr,
        children: [
            a || null == l ? null : (0, s.jsx)(eC, { firstMessage: l, channel: n }),
            null == l ? null : (0, s.jsx)(eS, { firstMessage: l, channel: n }),
            (0, s.jsx)(ey, { channel: n, iconSize: 14 }),
            (0, s.jsx)("span", { className: eg.xE, children: "\u2022" }),
            i.length > 0
                ? (0, s.jsxs)("div", {
                      className: eg.IW,
                      children: [
                          (0, s.jsx)(ek, { channel: n, userIds: i, facepileRef: t }),
                          (0, s.jsx)("div", {
                              className: eg.r$,
                              children: (0, s.jsx)(p.n, { themed: !0, dotRadius: 2 }),
                          }),
                          (0, s.jsx)(C.Ay, { channel: n, className: eg.mD, renderDots: !1, renderSlowmode: !1 }),
                      ],
                  })
                : (0, s.jsx)(eM, { channel: n }),
        ],
    });
}
function ey(e) {
    let { channel: n, iconSize: t, showReadState: l = !1 } = e,
        { messageCountText: i, unreadCount: r } = (0, ee.k6)(n);
    return (0, s.jsxs)("div", {
        className: a()(eg.Mv, { [eg.hT]: l && null == r }),
        children: [
            (0, s.jsx)("span", {
                className: eg.SZ,
                children: (0, s.jsx)(N.ChatIcon, { size: "custom", color: "currentColor", width: t, height: t }),
            }),
            "number" == typeof i
                ? (0, s.jsx)(E.A, { value: i, digitWidth: 9, className: eg.gv })
                : (0, s.jsx)("div", { className: eg.gv, children: i }),
            null == r
                ? null
                : (0, s.jsxs)(v.E, {
                      className: eg.bU,
                      variant: "body-sm/semibold",
                      color: "text-brand",
                      children: ["(", em.intl.format(em.t.z3PEth, { count: r }), ")"],
                  }),
        ],
    });
}
function eC(e) {
    let { firstMessage: n, channel: t } = e,
        l = (0, m.bG)([V.A], () => V.A.getChannel(t.parent_id)),
        i = (0, ee.Ck)(l),
        { disableReactionCreates: a, isLurking: r, isPendingMember: c } = (0, B.A)(t);
    return null == i || a
        ? null
        : (0, s.jsx)(q.q, {
              className: eg.vC,
              message: n,
              readOnly: t.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: r,
              isPendingMember: c,
              emoji: i,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: U.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function eS(e) {
    let { firstMessage: n, channel: t } = e,
        l = (0, ee.lQ)(n),
        { disableReactionUpdates: i, isLurking: a, isPendingMember: r } = (0, B.A)(t);
    return null == l
        ? null
        : (0, s.jsx)(
              q.q,
              {
                  className: eg.vC,
                  message: n,
                  readOnly: i || t.isArchivedLockedThread(),
                  isLurking: a,
                  isPendingMember: r,
                  useChatFontScaling: !1,
                  type: l.burst_count > 0 ? U.v.BURST : U.v.NORMAL,
                  emojiSize: "reaction",
                  emojiSizeTooltip: "reaction",
                  ...l,
              },
              `${l.emoji.id ?? 0}:${l.emoji.name}`,
          );
}
function eM(e) {
    let { channel: n } = e,
        { sortOrder: t } = (0, X.R)(n.parent_id),
        l = (0, ee.Mw)(n, t),
        i = n.threadMetadata?.createTimestamp,
        a = null == i ? null : em.intl.formatToPlainString(em.t["13euCd"], { timestamp: (0, Y.i$)(o()(i), "LLLL") });
    return (0, s.jsx)(b.m, {
        text: a,
        children: (0, s.jsx)(v.E, {
            className: eg.__invalid_activityText,
            variant: "body-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function ek(e) {
    let { channel: n, userIds: t, facepileRef: l } = e,
        i = (0, ee.$I)(n, t);
    return (0, s.jsx)("div", {
        ref: l,
        children: (0, s.jsx)(k.Ay, {
            className: eg.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: n.guild_id,
            users: i,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0,
        }),
    });
}
function eL(e) {
    return e.startsWith("data:") || e.startsWith("blob:");
}
function e_(e) {
    let { src: n, size: t, alt: l, className: i } = e;
    return (0, s.jsx)(w.A, {
        src: n,
        alt: l ?? em.intl.string(em.t.FlNoSV),
        width: t.width,
        height: t.height,
        className: i,
        preload: "metadata",
    });
}
function eE(e) {
    let { firstMedia: n, shouldObscure: t, obscureReason: l, shouldShowAgeVerification: i } = e,
        r = (0, m.bG)([Q.A], () => Q.A.isFocused()),
        c = (0, F.ge)(n.src),
        d = H.kt.useSetting(),
        o = (0, G.rx)(l),
        { src: u, width: h, height: g, alt: x } = n;
    return i
        ? (0, s.jsx)("div", {
              "aria-label": o ?? x ?? em.intl.string(em.t.hqwnc2),
              className: a()(eg.iT, eg.nh),
              style: { maxWidth: ej, maxHeight: ef, height: g, width: h },
          })
        : eL(u)
          ? (0, s.jsx)(y._, {
                src: u,
                width: h,
                height: g,
                minWidth: ej,
                minHeight: ef,
                alt: null != x && t ? o : x,
                className: eg.iT,
                imageClassName: a()(eg.LW, { [eg.cd]: t }),
                children: n.isVideo ? e_ : void 0,
            })
          : (0, O.LL)({
                src: u,
                width: h,
                height: g,
                minWidth: ej,
                minHeight: ef,
                alt: null != x && t ? o : x,
                autoPlay: d,
                animated: c && !t && r,
                srcIsAnimated: n.srcIsAnimated,
                containerClassName: eg.iT,
                imageClassName: a()(eg.LW, { [eg.cd]: t }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function eP(e) {
    let { channel: n, firstMedia: t } = e,
        l = eL(t.src),
        i = (0, W.z)(n),
        [a, r] = (0, G.eJ)({ media: l ? null : t, channel: n }),
        c = l ? t.spoiler && i : a,
        d = l && t.spoiler ? R.Oc.SPOILER : r,
        o = (0, I.qZ)(d);
    return (0, s.jsx)(f.M, {
        enabled: !0,
        children: (0, s.jsxs)("div", {
            className: eg.pV,
            onClick: function (e) {
                (e.stopPropagation(),
                    o &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        L.A.showAgeVerificationGetStartedModal({ entryPoint: _.q1.FORUM_POST_MEDIA_PREVIEW })));
            },
            children: [
                (0, s.jsx)(eE, { firstMedia: t, shouldObscure: c, obscureReason: d, shouldShowAgeVerification: o }),
                c && (0, s.jsx)(el.A, { iconClassname: eg.yo, obscureReason: d }),
            ],
        }),
    });
}

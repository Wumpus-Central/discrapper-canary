n.d(t, {
    NA: () => eb,
    $k: () => ey,
    gL: () => eM,
    T5: () => ef,
    cn: () => eC,
    Ay: () => eA,
    Co: () => ex,
    hf: () => ev,
});
var s = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(284009),
    c = n.n(r),
    d = n(536637),
    o = n.n(d),
    u = n(462180),
    h = n(837381),
    m = n(17928),
    g = n(939249),
    x = n(707554),
    f = n(346055),
    A = n(297264),
    j = n(62010),
    v = n(834730),
    p = n(863610),
    N = n(534890),
    y = n(866665),
    b = n(144165),
    C = n(119031),
    S = n(765671),
    M = n(738768),
    k = n(104171),
    L = n(379257),
    _ = n(306537),
    E = n(114166),
    w = n(47167),
    P = n(810181),
    T = n(607470),
    I = n(390248),
    R = n(338717),
    z = n(59318),
    F = n(294520),
    G = n(505527),
    U = n(863439),
    W = n(467073),
    B = n(44788),
    O = n(831688),
    q = n(448368),
    K = n(302031),
    D = n(253932),
    H = n(358047),
    $ = n(734057),
    V = n(576705),
    J = n(994500),
    Z = n(531685),
    Q = n(58703),
    Y = n(422844),
    X = n(435470),
    ee = n(473503),
    et = n(969043),
    en = n(768953),
    es = n(710948),
    el = n(218152),
    ei = n(313880),
    ea = n(52933),
    er = n(504261),
    ec = n(795435),
    ed = n(505234),
    eo = n(652215),
    eu = n(838541),
    eh = n(105292),
    em = n(223139),
    eg = n(165648);
let ex = 72,
    ef = 72,
    eA = l.memo(function (e) {
        let {
                threadId: t,
                goToThread: n,
                observePostVisibilityAnalytics: i,
                overrideMedia: r,
                className: d,
                containerWidth: o,
            } = e,
            {
                channel: A,
                isOpen: j,
                messageCount: v,
                firstMessage: p,
                content: N,
                media: y,
            } = (function (e) {
                let { threadId: t, overrideMedia: n } = e,
                    s = (0, m.bG)([$.A], () => $.A.getChannel(t));
                c()(null != s, "the thread should not be null here, a store must have missed an update");
                let l = (0, m.bG)([H.Ay], () => H.Ay.getCurrentSidebarChannelId(s.parent_id) === s.id),
                    { firstMessage: i } = (0, ee.OA)(s),
                    { content: a, firstMedia: r } = (0, ec.A)({ firstMessage: i }),
                    { messageCountText: d } = (0, X.k6)(s);
                return { channel: s, isOpen: l, messageCount: d, firstMessage: i, content: a, media: n ?? r };
            })({ threadId: t, overrideMedia: r }),
            b = (0, w.Ay)(A),
            { ref: C, height: M } = (0, S.Ay)(),
            k = (0, el.kU)((e) => e.setCardHeight, u.x);
        (l.useEffect(() => {
            null != M && k(t, M);
        }, [M, k, t]),
            l.useEffect(() => {
                i?.(C.current, t);
            }, [C, i, t]));
        let L = l.useRef(null),
            { handleLeftClick: _, handleRightClick: E } = (0, ed.A)({ facepileRef: L, goToThread: n, channel: A }),
            { role: P, onFocus: T, ...I } = (0, h.rm)(t),
            { isFocused: R, handleFocus: z, handleBlur: F } = (0, er.A)(T);
        return (0, s.jsxs)("div", {
            ref: C,
            "data-item-id": t,
            onClick: _,
            onContextMenu: E,
            className: a()(em.kL, d, { [em.nT]: j }),
            children: [
                (0, s.jsx)(g.D, {
                    onClick: _,
                    focusProps: { ringTarget: C },
                    onContextMenu: E,
                    "aria-label": eh.intl.formatToPlainString(eh.t.pgYN6c, { title: b ?? "", count: v }),
                    className: em.Kv,
                    onFocus: z,
                    onBlur: F,
                    ...I,
                }),
                (0, s.jsxs)("div", {
                    className: em.kb,
                    children: [
                        (0, s.jsx)(x.F, {
                            children: (0, s.jsx)(ej, {
                                channel: A,
                                firstMessage: p,
                                content: N,
                                hasMediaAttachment: null != y,
                                containerWidth: o,
                            }),
                        }),
                        (0, s.jsx)(f.M, {
                            enabled: !R,
                            children: (0, s.jsx)(eN, { channel: A, firstMessage: p, facepileRef: L }),
                        }),
                    ],
                }),
                p?.blocked || null == y ? null : (0, s.jsx)(eE, { channel: A, firstMedia: y }),
            ],
        });
    });
function ej(e) {
    let { channel: t, firstMessage: n, content: i, hasMediaAttachment: r, containerWidth: c } = e,
        { isNew: d, hasUnreads: o } = (0, X.X5)(t),
        u = ev(t),
        { postTitleRef: h, isNewBadgeOverflow: m } = (function (e, t) {
            let n = l.useRef(null),
                [s, i] = l.useState(!1),
                a = l.useCallback(() => {
                    e && null !== n.current && i(n.current?.offsetHeight > 60);
                }, [i, e, 24]);
            return (
                l.useLayoutEffect(() => {
                    a();
                }, [a, e, t]),
                { postTitleRef: n, isNewBadgeOverflow: s }
            );
        })(d, c);
    return (0, s.jsxs)("div", {
        className: em.rf,
        children: [
            (0, s.jsx)(ea.Ay, { channel: t }),
            (0, s.jsx)("div", {
                className: a()(em.wx, { [em.qN]: m }),
                children: (0, s.jsxs)("div", {
                    className: em.TK,
                    children: [
                        (0, s.jsx)(A.D, {
                            variant: "heading-lg/semibold",
                            color: o ? "text-strong" : "text-muted",
                            lineClamp: 2,
                            className: em.o$,
                            children: (0, s.jsxs)("span", {
                                ref: h,
                                children: [
                                    u,
                                    d &&
                                        (0, s.jsx)("span", {
                                            className: em.pr,
                                            children: (0, s.jsx)("span", {
                                                className: em.Ad,
                                                children: (0, s.jsx)(j.E, { type: "new", variant: "primary" }),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                        d &&
                            m &&
                            (0, s.jsx)("div", {
                                className: em.gi,
                                children: (0, s.jsx)(j.E, { type: "new", variant: "primary" }),
                            }),
                    ],
                }),
            }),
            (0, s.jsx)("div", {
                className: em.iU,
                children: (0, s.jsx)(ep, { channel: t, message: n, content: i, hasMediaAttachment: r, hasUnreads: o }),
            }),
        ],
    });
}
function ev(e) {
    let t = (0, w.Ay)(e),
        n = (0, m.bG)([en.A], () => en.A.getHasSearchResults(e.parent_id)),
        i = (0, m.bG)([en.A], () => en.A.getSearchQuery(e.parent_id)),
        a = l.useMemo(() => (0, M.wG)(n && null != i ? i : "", !0), [n, i]);
    return l.useMemo(() => {
        var e;
        let n;
        return "string" == typeof (n = Array.isArray((e = a({ type: "text", content: t ?? "" }))) ? e : e.content)
            ? n
            : Array.isArray(n)
              ? n.map((e, t) =>
                    "highlight" === e.type
                        ? (0, s.jsx)("span", { className: "highlight", children: e.content }, t)
                        : e.content,
                )
              : null;
    }, [t, a]);
}
let ep = l.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: i, hasUnreads: r } = e,
        { isBlocked: c, isIgnored: d } = (0, m.cf)([J.A], () => ({
            isBlocked: null != t && J.A.isBlockedForMessage(t),
            isIgnored: null != t && J.A.isIgnoredForMessage(t),
        })),
        o = (0, m.bG)([et.A], () => et.A.isLoading(n.id)),
        u = (0, m.bG)([V.A], () => V.A.can(eo.xBc.MANAGE_MESSAGES, n)),
        h = D.gs.useSetting(),
        g = null;
    if (c)
        g = (0, s.jsx)(v.E, {
            className: em.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: eh.intl.string(eh.t.Lkp2fB),
        });
    else if (d)
        g = (0, s.jsx)(v.E, {
            className: em.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: eh.intl.string(eh.t.yWK7ZM),
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, q.o)(t, l, c, d, a()(em.BK, eg.tZ, eg.__invalid_smallFontSize), {
                      leadingIconClass: em.aG,
                      trailingIconClass: em.sl,
                      iconSize: eu.eJ,
                  });
        g =
            null != n
                ? (0, s.jsx)(v.E, {
                      variant: "text-sm/semibold",
                      color: r ? "text-default" : "text-muted",
                      children: n,
                  })
                : i
                  ? null
                  : (0, s.jsx)(v.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: r ? "text-default" : "text-muted",
                        className: em.BK,
                        children: null == t ? (o ? null : eh.intl.string(eh.t.mE3KJN)) : e,
                    });
    }
    let x = (0, U.A)(h, u);
    return (0, s.jsxs)(K.Bs.Provider, {
        value: x,
        children: [
            !c && (0, s.jsx)(ei.A, { channel: n, message: t, renderColon: null != g, hasUnreads: r }),
            (0, s.jsx)(f.M, { className: em.JY, children: g }),
        ],
    });
});
function eN(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        i = (0, P.m)(t.id),
        a = l?.reactions != null && l.reactions.length > 0;
    return (0, s.jsxs)("div", {
        className: em.qr,
        children: [
            a || null == l ? null : (0, s.jsx)(eb, { firstMessage: l, channel: t }),
            null == l ? null : (0, s.jsx)(eC, { firstMessage: l, channel: t }),
            (0, s.jsx)(ey, { channel: t, iconSize: 14 }),
            (0, s.jsx)("span", { className: em.xE, children: "\u2022" }),
            i.length > 0
                ? (0, s.jsxs)("div", {
                      className: em.IW,
                      children: [
                          (0, s.jsx)(eM, { channel: t, userIds: i, facepileRef: n }),
                          (0, s.jsx)("div", {
                              className: em.r$,
                              children: (0, s.jsx)(p.n, { themed: !0, dotRadius: 2 }),
                          }),
                          (0, s.jsx)(C.Ay, { channel: t, className: em.mD, renderDots: !1, renderSlowmode: !1 }),
                      ],
                  })
                : (0, s.jsx)(eS, { channel: t }),
        ],
    });
}
function ey(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: i, unreadCount: r } = (0, X.k6)(t);
    return (0, s.jsxs)("div", {
        className: a()(em.Mv, { [em.hT]: l && null == r }),
        children: [
            (0, s.jsx)("span", {
                className: em.SZ,
                children: (0, s.jsx)(N.ChatIcon, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof i
                ? (0, s.jsx)(E.A, { value: i, digitWidth: 9, className: em.gv })
                : (0, s.jsx)("div", { className: em.gv, children: i }),
            null == r
                ? null
                : (0, s.jsxs)(v.E, {
                      className: em.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", eh.intl.format(eh.t.z3PEth, { count: r }), ")"],
                  }),
        ],
    });
}
function eb(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, m.bG)([$.A], () => $.A.getChannel(n.parent_id)),
        i = (0, X.Ck)(l),
        { disableReactionCreates: a, isLurking: r, isPendingMember: c } = (0, W.A)(n);
    return null == i || a
        ? null
        : (0, s.jsx)(O.q, {
              className: em.vC,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: r,
              isPendingMember: c,
              emoji: i,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: G.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function eC(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, X.lQ)(t),
        { disableReactionUpdates: i, isLurking: a, isPendingMember: r } = (0, W.A)(n);
    return null == l
        ? null
        : (0, s.jsx)(
              O.q,
              {
                  className: em.vC,
                  message: t,
                  readOnly: i || n.isArchivedLockedThread(),
                  isLurking: a,
                  isPendingMember: r,
                  useChatFontScaling: !1,
                  type: l.burst_count > 0 ? G.v.BURST : G.v.NORMAL,
                  emojiSize: "reaction",
                  emojiSizeTooltip: "reaction",
                  ...l,
              },
              `${l.emoji.id ?? 0}:${l.emoji.name}`,
          );
}
function eS(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, Y.R)(t.parent_id),
        l = (0, X.Mw)(t, n),
        i = t.threadMetadata?.createTimestamp,
        a = null == i ? null : eh.intl.formatToPlainString(eh.t["13euCd"], { timestamp: (0, Q.i$)(o()(i), "LLLL") });
    return (0, s.jsx)(y.m, {
        text: a,
        children: (0, s.jsx)(v.E, {
            className: em.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function eM(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        i = (0, X.$I)(t, n);
    return (0, s.jsx)("div", {
        ref: l,
        children: (0, s.jsx)(k.Ay, {
            className: em.__invalid_facepile,
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
function ek(e) {
    return e.startsWith("data:") || e.startsWith("blob:");
}
function eL(e) {
    let { src: t, size: n, alt: l, className: i } = e;
    return (0, s.jsx)(T.A, {
        src: t,
        alt: l ?? eh.intl.string(eh.t.FlNoSV),
        width: n.width,
        height: n.height,
        className: i,
        preload: "metadata",
    });
}
function e_(e) {
    let { firstMedia: t, shouldObscure: n, obscureReason: l, shouldShowAgeVerification: i } = e,
        r = (0, m.bG)([Z.A], () => Z.A.isFocused()),
        c = (0, z.ge)(t.src),
        d = D.kt.useSetting(),
        o = (0, F.rx)(l),
        { src: u, width: h, height: g, alt: x } = t;
    return i
        ? (0, s.jsx)("div", {
              "aria-label": o ?? x ?? eh.intl.string(eh.t.hqwnc2),
              className: a()(em.iT, em.nh),
              style: { maxWidth: ef, maxHeight: ex, height: g, width: h },
          })
        : ek(u)
          ? (0, s.jsx)(b._, {
                src: u,
                width: h,
                height: g,
                minWidth: ef,
                minHeight: ex,
                alt: null != x && n ? o : x,
                className: em.iT,
                imageClassName: a()(em.LW, { [em.cd]: n }),
                children: t.isVideo ? eL : void 0,
            })
          : (0, B.LL)({
                src: u,
                width: h,
                height: g,
                minWidth: ef,
                minHeight: ex,
                alt: null != x && n ? o : x,
                autoPlay: d,
                animated: c && !n && r,
                srcIsAnimated: t.srcIsAnimated,
                containerClassName: em.iT,
                imageClassName: a()(em.LW, { [em.cd]: n }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function eE(e) {
    let { channel: t, firstMedia: n } = e,
        l = ek(n.src),
        i = (0, U.z)(t),
        [a, r] = (0, F.eJ)({ media: l ? null : n, channel: t }),
        c = l ? n.spoiler && i : a,
        d = l && n.spoiler ? R.Oc.SPOILER : r,
        o = (0, I.qZ)(d);
    return (0, s.jsx)(f.M, {
        enabled: !0,
        children: (0, s.jsxs)("div", {
            className: em.pV,
            onClick: function (e) {
                (e.stopPropagation(),
                    o &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        L.A.showAgeVerificationGetStartedModal({ entryPoint: _.q1.FORUM_POST_MEDIA_PREVIEW })));
            },
            children: [
                (0, s.jsx)(e_, { firstMedia: n, shouldObscure: c, obscureReason: d, shouldShowAgeVerification: o }),
                c && (0, s.jsx)(es.A, { iconClassname: em.yo, obscureReason: d }),
            ],
        }),
    });
}

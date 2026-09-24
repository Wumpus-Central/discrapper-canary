n.d(t, {
    NA: () => eb,
    $k: () => eC,
    gL: () => eM,
    T5: () => eA,
    cn: () => ey,
    Ay: () => ef,
    Co: () => ex,
    hf: () => ev,
});
var s = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    r = n(284009),
    c = n.n(r),
    o = n(536637),
    d = n.n(o),
    u = n(462180),
    h = n(837381),
    m = n(17928),
    g = n(661531),
    x = n(939249),
    A = n(707554),
    f = n(346055),
    j = n(297264),
    v = n(812993),
    p = n(834730),
    N = n(863610),
    C = n(534890),
    b = n(866665),
    y = n(144165),
    S = n(119031),
    M = n(765671),
    _ = n(738768),
    k = n(104171),
    L = n(379257),
    P = n(306537),
    E = n(114166),
    T = n(47167),
    w = n(810181),
    I = n(607470),
    R = n(390248),
    z = n(338717),
    B = n(59318),
    F = n(294520),
    G = n(505527),
    U = n(863439),
    W = n(467073),
    D = n(85935),
    O = n(831688),
    q = n(448368),
    K = n(302031),
    $ = n(885386),
    H = n(761640),
    V = n(734057),
    J = n(576705),
    Z = n(994500),
    Q = n(531685),
    Y = n(58703),
    X = n(422844),
    ee = n(435470),
    et = n(473503),
    en = n(969043),
    es = n(768953),
    el = n(710948),
    ea = n(218152),
    ei = n(313880),
    er = n(52933),
    ec = n(504261),
    eo = n(505234),
    ed = n(652215),
    eu = n(838541),
    eh = n(375708),
    em = n(223139),
    eg = n(165648);
let ex = 72,
    eA = 72,
    ef = l.memo(function (e) {
        let {
                threadId: t,
                goToThread: n,
                observePostVisibilityAnalytics: a,
                overrideMedia: r,
                className: o,
                containerWidth: d,
            } = e,
            {
                channel: g,
                isOpen: j,
                messageCount: v,
                firstMessage: p,
                content: N,
                media: C,
            } = (function (e) {
                let { threadId: t, overrideMedia: n } = e,
                    s = (0, m.bG)([V.A], () => V.A.getChannel(t));
                c()(null != s, "the thread should not be null here, a store must have missed an update");
                let l = (0, m.bG)([H.Ay], () => H.Ay.getCurrentSidebarChannelId(s.parent_id) === s.id),
                    { firstMessage: a } = (0, et.OA)(s),
                    { content: i, firstMedia: r } = (0, ee.gk)({ firstMessage: a }),
                    { messageCountText: o } = (0, ee.k6)(s);
                return { channel: s, isOpen: l, messageCount: o, firstMessage: a, content: i, media: n ?? r };
            })({ threadId: t, overrideMedia: r }),
            b = (0, T.Ay)(g),
            { ref: y, height: S } = (0, M.Ay)(),
            _ = (0, ea.kU)((e) => e.setCardHeight, u.x);
        (l.useEffect(() => {
            null != S && _(t, S);
        }, [S, _, t]),
            l.useEffect(() => {
                a?.(y.current, t);
            }, [y, a, t]));
        let k = l.useRef(null),
            { handleLeftClick: L, handleRightClick: P } = (0, eo.A)({ facepileRef: k, goToThread: n, channel: g }),
            { role: E, onFocus: w, ...I } = (0, h.rm)(t),
            { isFocused: R, handleFocus: z, handleBlur: B } = (0, ec.A)(w);
        return (0, s.jsxs)("div", {
            ref: y,
            "data-item-id": t,
            onClick: L,
            onContextMenu: P,
            className: i()(em.kL, o, { [em.nT]: j }),
            children: [
                (0, s.jsx)(x.D, {
                    onClick: L,
                    focusProps: { ringTarget: y },
                    onContextMenu: P,
                    "aria-label": eh.intl.formatToPlainString(eh.t.pgYN6c, { title: b ?? "", count: v }),
                    className: em.Kv,
                    onFocus: z,
                    onBlur: B,
                    ...I,
                }),
                (0, s.jsxs)("div", {
                    className: em.kb,
                    children: [
                        (0, s.jsx)(A.F, {
                            children: (0, s.jsx)(ej, {
                                channel: g,
                                firstMessage: p,
                                content: N,
                                hasMediaAttachment: null != C,
                                containerWidth: d,
                            }),
                        }),
                        (0, s.jsx)(f.M, {
                            enabled: !R,
                            children: (0, s.jsx)(eN, { channel: g, firstMessage: p, facepileRef: k }),
                        }),
                    ],
                }),
                p?.blocked || null == C ? null : (0, s.jsx)(eP, { channel: g, firstMedia: C }),
            ],
        });
    });
function ej(e) {
    let { channel: t, firstMessage: n, content: a, hasMediaAttachment: r, containerWidth: c } = e,
        { isNew: o, hasUnreads: d } = (0, ee.X5)(t),
        u = ev(t),
        { postTitleRef: h, isNewBadgeOverflow: m } = (function (e, t) {
            let n = l.useRef(null),
                [s, a] = l.useState(!1),
                i = l.useCallback(() => {
                    e && null !== n.current && a(n.current?.offsetHeight > 60);
                }, [a, e, 24]);
            return (
                l.useLayoutEffect(() => {
                    i();
                }, [i, e, t]),
                { postTitleRef: n, isNewBadgeOverflow: s }
            );
        })(o, c);
    return (0, s.jsxs)("div", {
        className: em.rf,
        children: [
            (0, s.jsx)(er.Ay, { channel: t }),
            (0, s.jsx)("div", {
                className: i()(em.wx, { [em.qN]: m }),
                children: (0, s.jsxs)("div", {
                    className: em.TK,
                    children: [
                        (0, s.jsx)(j.D, {
                            variant: "heading-lg/semibold",
                            color: d ? "text-strong" : "text-muted",
                            lineClamp: 2,
                            className: em.o$,
                            children: (0, s.jsxs)("span", {
                                ref: h,
                                children: [
                                    u,
                                    o &&
                                        (0, s.jsx)("span", {
                                            className: em.pr,
                                            children: (0, s.jsx)(v.Lp, {
                                                className: em.Ad,
                                                color: g.A.unsafe_rawColors.BRAND_260.css,
                                                text: eh.intl.string(eh.t.y2b7CA),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                        o &&
                            m &&
                            (0, s.jsx)(v.Lp, {
                                className: em.Ad,
                                color: g.A.unsafe_rawColors.BRAND_260.css,
                                text: eh.intl.string(eh.t.y2b7CA),
                            }),
                    ],
                }),
            }),
            (0, s.jsx)("div", {
                className: em.iU,
                children: (0, s.jsx)(ep, { channel: t, message: n, content: a, hasMediaAttachment: r, hasUnreads: d }),
            }),
        ],
    });
}
function ev(e) {
    let t = (0, T.Ay)(e),
        n = (0, m.bG)([es.A], () => es.A.getHasSearchResults(e.parent_id)),
        a = (0, m.bG)([es.A], () => es.A.getSearchQuery(e.parent_id)),
        i = l.useMemo(() => (0, _.wG)(n && null != a ? a : "", !0), [n, a]);
    return l.useMemo(() => {
        var e;
        let n;
        return "string" == typeof (n = Array.isArray((e = i({ type: "text", content: t ?? "" }))) ? e : e.content)
            ? n
            : Array.isArray(n)
              ? n.map((e, t) =>
                    "highlight" === e.type
                        ? (0, s.jsx)("span", { className: "highlight", children: e.content }, t)
                        : e.content,
                )
              : null;
    }, [t, i]);
}
let ep = l.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: a, hasUnreads: r } = e,
        { isBlocked: c, isIgnored: o } = (0, m.cf)([Z.A], () => ({
            isBlocked: null != t && Z.A.isBlockedForMessage(t),
            isIgnored: null != t && Z.A.isIgnoredForMessage(t),
        })),
        d = (0, m.bG)([en.A], () => en.A.isLoading(n.id)),
        u = (0, m.bG)([J.A], () => J.A.can(ed.xBc.MANAGE_MESSAGES, n)),
        h = $.gs.useSetting(),
        g = null;
    if (c)
        g = (0, s.jsx)(p.E, {
            className: em.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: eh.intl.string(eh.t.Lkp2fB),
        });
    else if (o)
        g = (0, s.jsx)(p.E, {
            className: em.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: eh.intl.string(eh.t.yWK7ZM),
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, q.o)(t, l, c, o, i()(em.BK, eg.tZ, eg.__invalid_smallFontSize), {
                      leadingIconClass: em.aG,
                      trailingIconClass: em.sl,
                      iconSize: eu.eJ,
                  });
        g =
            null != n
                ? (0, s.jsx)(p.E, {
                      variant: "text-sm/semibold",
                      color: r ? "text-default" : "text-muted",
                      children: n,
                  })
                : a
                  ? null
                  : (0, s.jsx)(p.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: r ? "text-default" : "text-muted",
                        className: em.BK,
                        children: null == t ? (d ? null : eh.intl.string(eh.t.mE3KJN)) : e,
                    });
    }
    return (0, s.jsxs)(K.Bs.Provider, {
        value: (0, U.A)(h, u),
        children: [
            !c && (0, s.jsx)(ei.A, { channel: n, message: t, renderColon: null != g, hasUnreads: r }),
            (0, s.jsx)(f.M, { className: em.JY, children: g }),
        ],
    });
});
function eN(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        a = (0, w.m)(t.id),
        i = l?.reactions != null && l.reactions.length > 0;
    return (0, s.jsxs)("div", {
        className: em.qr,
        children: [
            i || null == l ? null : (0, s.jsx)(eb, { firstMessage: l, channel: t }),
            null == l ? null : (0, s.jsx)(ey, { firstMessage: l, channel: t }),
            (0, s.jsx)(eC, { channel: t, iconSize: 14 }),
            (0, s.jsx)("span", { className: em.xE, children: "\u2022" }),
            a.length > 0
                ? (0, s.jsxs)("div", {
                      className: em.IW,
                      children: [
                          (0, s.jsx)(eM, { channel: t, userIds: a, facepileRef: n }),
                          (0, s.jsx)("div", {
                              className: em.r$,
                              children: (0, s.jsx)(N.n, { themed: !0, dotRadius: 2 }),
                          }),
                          (0, s.jsx)(S.Ay, { channel: t, className: em.mD, renderDots: !1, renderSlowmode: !1 }),
                      ],
                  })
                : (0, s.jsx)(eS, { channel: t }),
        ],
    });
}
function eC(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: a, unreadCount: r } = (0, ee.k6)(t);
    return (0, s.jsxs)("div", {
        className: i()(em.Mv, { [em.hT]: l && null == r }),
        children: [
            (0, s.jsx)("span", {
                className: em.SZ,
                children: (0, s.jsx)(C.ChatIcon, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof a
                ? (0, s.jsx)(E.A, { value: a, digitWidth: 9, className: em.gv })
                : (0, s.jsx)("div", { className: em.gv, children: a }),
            null == r
                ? null
                : (0, s.jsxs)(p.E, {
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
        l = (0, m.bG)([V.A], () => V.A.getChannel(n.parent_id)),
        a = (0, ee.Ck)(l),
        { disableReactionCreates: i, isLurking: r, isPendingMember: c } = (0, W.A)(n);
    return null == a || i
        ? null
        : (0, s.jsx)(O.q, {
              className: em.vC,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: r,
              isPendingMember: c,
              emoji: a,
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
function ey(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, ee.lQ)(t),
        { disableReactionUpdates: a, isLurking: i, isPendingMember: r } = (0, W.A)(n);
    return null == l
        ? null
        : (0, s.jsx)(
              O.q,
              {
                  className: em.vC,
                  message: t,
                  readOnly: a || n.isArchivedLockedThread(),
                  isLurking: i,
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
        { sortOrder: n } = (0, X.R)(t.parent_id),
        l = (0, ee.Mw)(t, n),
        a = t.threadMetadata?.createTimestamp,
        i = null == a ? null : eh.intl.formatToPlainString(eh.t["13euCd"], { timestamp: (0, Y.i$)(d()(a), "LLLL") });
    return (0, s.jsx)(b.m, {
        text: i,
        children: (0, s.jsx)(p.E, {
            className: em.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function eM(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        a = (0, ee.$I)(t, n);
    return (0, s.jsx)("div", {
        ref: l,
        children: (0, s.jsx)(k.Ay, {
            className: em.__invalid_facepile,
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
function e_(e) {
    return e.startsWith("data:") || e.startsWith("blob:");
}
function ek(e) {
    let { src: t, size: n, alt: l, className: a } = e;
    return (0, s.jsx)(I.A, {
        src: t,
        alt: l ?? eh.intl.string(eh.t.FlNoSV),
        width: n.width,
        height: n.height,
        className: a,
        preload: "metadata",
    });
}
function eL(e) {
    let { firstMedia: t, shouldObscure: n, obscureReason: l, shouldShowAgeVerification: a } = e,
        r = (0, m.bG)([Q.A], () => Q.A.isFocused()),
        c = (0, B.ge)(t.src),
        o = $.kt.useSetting(),
        d = (0, F.rx)(l),
        { src: u, width: h, height: g, alt: x } = t;
    return a
        ? (0, s.jsx)("div", {
              "aria-label": d ?? x ?? eh.intl.string(eh.t.hqwnc2),
              className: i()(em.iT, em.nh),
              style: { maxWidth: eA, maxHeight: ex, height: g, width: h },
          })
        : e_(u)
          ? (0, s.jsx)(y._, {
                src: u,
                width: h,
                height: g,
                minWidth: eA,
                minHeight: ex,
                alt: null != x && n ? d : x,
                className: em.iT,
                imageClassName: i()(em.LW, { [em.cd]: n }),
                children: t.isVideo ? ek : void 0,
            })
          : (0, D.LL)({
                src: u,
                width: h,
                height: g,
                minWidth: eA,
                minHeight: ex,
                alt: null != x && n ? d : x,
                autoPlay: o,
                animated: c && !n && r,
                srcIsAnimated: t.srcIsAnimated,
                containerClassName: em.iT,
                imageClassName: i()(em.LW, { [em.cd]: n }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function eP(e) {
    let { channel: t, firstMedia: n } = e,
        l = e_(n.src),
        a = (0, U.z)(t),
        [i, r] = (0, F.eJ)({ media: l ? null : n, channel: t }),
        c = l ? n.spoiler && a : i,
        o = l && n.spoiler ? z.Oc.SPOILER : r,
        d = (0, R.qZ)(o);
    return (0, s.jsx)(f.M, {
        enabled: !0,
        children: (0, s.jsxs)("div", {
            className: em.pV,
            onClick: function (e) {
                (e.stopPropagation(),
                    d &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        L.A.showAgeVerificationGetStartedModal({ entryPoint: P.q1.FORUM_POST_MEDIA_PREVIEW })));
            },
            children: [
                (0, s.jsx)(eL, { firstMedia: n, shouldObscure: c, obscureReason: o, shouldShowAgeVerification: d }),
                c && (0, s.jsx)(el.A, { iconClassname: em.yo, obscureReason: o }),
            ],
        }),
    });
}

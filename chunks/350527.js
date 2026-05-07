n.d(t, {
    NA: () => eC,
    $k: () => ep,
    gL: () => e_,
    T5: () => eg,
    cn: () => eb,
    Ay: () => eA,
    Co: () => ex,
    hf: () => ej,
});
var s = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(284009),
    c = n.n(r),
    d = n(989349),
    o = n.n(d),
    u = n(942381),
    m = n(837381),
    h = n(17928),
    x = n(661531),
    g = n(990078),
    A = n(939249),
    f = n(707554),
    j = n(247928),
    v = n(534514),
    N = n(777666),
    p = n(834730),
    C = n(863610),
    b = n(534890),
    M = n(144165),
    _ = n(119031),
    S = n(765671),
    k = n(738768),
    y = n(104171),
    L = n(139716),
    P = n(847599),
    T = n(114166),
    E = n(47167),
    I = n(810181),
    R = n(390248),
    w = n(59318),
    z = n(294520),
    B = n(505527),
    F = n(863439),
    G = n(465364),
    U = n(467073),
    W = n(34337),
    D = n(831688),
    q = n(805964),
    O = n(302031),
    K = n(885386),
    $ = n(761640),
    H = n(734057),
    J = n(576705),
    V = n(994500),
    Z = n(531685),
    Q = n(58703),
    Y = n(422844),
    X = n(435470),
    ee = n(473503),
    et = n(969043),
    en = n(768953),
    es = n(710948),
    el = n(218152),
    ea = n(313880),
    ei = n(52933),
    er = n(504261),
    ec = n(505234),
    ed = n(652215),
    eo = n(838541),
    eu = n(375708),
    em = n(330070),
    eh = n(992595);
let ex = 72,
    eg = 72,
    eA = l.memo(function (e) {
        let {
                threadId: t,
                goToThread: n,
                observePostVisibilityAnalytics: a,
                overrideMedia: r,
                className: d,
                containerWidth: o,
            } = e,
            {
                channel: x,
                isOpen: g,
                messageCount: v,
                firstMessage: N,
                content: p,
                media: C,
            } = (function (e) {
                let { threadId: t, overrideMedia: n } = e,
                    s = (0, h.bG)([H.A], () => H.A.getChannel(t));
                c()(null != s, "the thread should not be null here, a store must have missed an update");
                let l = (0, h.bG)([$.Ay], () => $.Ay.getCurrentSidebarChannelId(s.parent_id) === s.id),
                    { firstMessage: a } = (0, ee.OA)(s),
                    { content: i, firstMedia: r } = (0, X.gk)({ firstMessage: a }),
                    { messageCountText: d } = (0, X.k6)(s);
                return { channel: s, isOpen: l, messageCount: d, firstMessage: a, content: i, media: n ?? r };
            })({ threadId: t, overrideMedia: r }),
            b = (0, E.Ay)(x),
            { ref: M, height: _ } = (0, S.Ay)(),
            k = (0, el.kU)((e) => e.setCardHeight, u.x);
        l.useEffect(() => {
            null != _ && k(t, _);
        }, [_, k, t]),
            l.useEffect(() => {
                a?.(M.current, t);
            }, [M, a, t]);
        let y = l.useRef(null),
            { handleLeftClick: L, handleRightClick: P } = (0, ec.A)({ facepileRef: y, goToThread: n, channel: x }),
            { role: T, onFocus: I, ...R } = (0, m.rm)(t),
            { isFocused: w, handleFocus: z, handleBlur: B } = (0, er.A)(I);
        return (0, s.jsxs)("div", {
            ref: M,
            "data-item-id": t,
            onClick: L,
            onContextMenu: P,
            className: i()(em.kL, d, { [em.nT]: g }),
            children: [
                (0, s.jsx)(A.D, {
                    onClick: L,
                    focusProps: { ringTarget: M },
                    onContextMenu: P,
                    "aria-label": eu.intl.formatToPlainString(eu.t.pgYN6c, { title: b ?? "", count: v }),
                    className: em.Kv,
                    onFocus: z,
                    onBlur: B,
                    ...R,
                }),
                (0, s.jsxs)("div", {
                    className: em.kb,
                    children: [
                        (0, s.jsx)(f.F, {
                            children: (0, s.jsx)(ef, {
                                channel: x,
                                firstMessage: N,
                                content: p,
                                hasMediaAttachment: null != C,
                                containerWidth: o,
                            }),
                        }),
                        (0, s.jsx)(j.M, {
                            enabled: !w,
                            children: (0, s.jsx)(eN, { channel: x, firstMessage: N, facepileRef: y }),
                        }),
                    ],
                }),
                N?.blocked || null == C ? null : (0, s.jsx)(ek, { channel: x, firstMedia: C }),
            ],
        });
    });
function ef(e) {
    let { channel: t, firstMessage: n, content: a, hasMediaAttachment: r, containerWidth: c } = e,
        { isNew: d, hasUnreads: o } = (0, X.X5)(t),
        u = ej(t),
        { postTitleRef: m, isNewBadgeOverflow: h } = (function (e, t) {
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
        })(d, c);
    return (0, s.jsxs)("div", {
        className: em.rf,
        children: [
            (0, s.jsx)(ei.Ay, { channel: t }),
            (0, s.jsx)("div", {
                className: i()(em.wx, { [em.qN]: h }),
                children: (0, s.jsxs)("div", {
                    className: em.TK,
                    children: [
                        (0, s.jsx)(v.D, {
                            variant: "heading-lg/semibold",
                            color: o ? "text-strong" : "text-muted",
                            lineClamp: 2,
                            className: em.o$,
                            children: (0, s.jsxs)("span", {
                                ref: m,
                                children: [
                                    u,
                                    d &&
                                        (0, s.jsx)("span", {
                                            className: em.pr,
                                            children: (0, s.jsx)(N.Lp, {
                                                className: em.Ad,
                                                color: x.A.unsafe_rawColors.BRAND_260.css,
                                                text: eu.intl.string(eu.t.y2b7CA),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                        d &&
                            h &&
                            (0, s.jsx)(N.Lp, {
                                className: em.Ad,
                                color: x.A.unsafe_rawColors.BRAND_260.css,
                                text: eu.intl.string(eu.t.y2b7CA),
                            }),
                    ],
                }),
            }),
            (0, s.jsx)("div", {
                className: em.iU,
                children: (0, s.jsx)(ev, { channel: t, message: n, content: a, hasMediaAttachment: r, hasUnreads: o }),
            }),
        ],
    });
}
function ej(e) {
    let t = (0, E.Ay)(e),
        n = (0, h.bG)([en.A], () => en.A.getHasSearchResults(e.parent_id)),
        s = (0, h.bG)([en.A], () => en.A.getSearchQuery(e.parent_id)),
        a = l.useMemo(() => (0, k.wG)(n && null != s ? s : "", !0), [n, s]);
    return l.useMemo(() => (0, G.Ay)({ content: t ?? "", embeds: [] }, { postProcessor: a }).content, [t, a]);
}
let ev = l.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: a, hasUnreads: r } = e,
        { isBlocked: c, isIgnored: d } = (0, h.cf)([V.A], () => ({
            isBlocked: null != t && V.A.isBlockedForMessage(t),
            isIgnored: null != t && V.A.isIgnoredForMessage(t),
        })),
        o = (0, h.bG)([et.A], () => et.A.isLoading(n.id)),
        u = (0, h.bG)([J.A], () => J.A.can(ed.xBc.MANAGE_MESSAGES, n)),
        m = K.gs.useSetting(),
        x = null;
    if (c)
        x = (0, s.jsx)(p.E, {
            className: em.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: eu.intl.string(eu.t.Lkp2fB),
        });
    else if (d)
        x = (0, s.jsx)(p.E, {
            className: em.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: eu.intl.string(eu.t.yWK7ZM),
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, q.o)(t, l, c, d, i()(em.BK, eh.tZ, eh.__invalid_smallFontSize), {
                      leadingIconClass: em.aG,
                      trailingIconClass: em.sl,
                      iconSize: eo.eJ,
                  });
        x =
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
                        children: null == t ? (o ? null : eu.intl.string(eu.t.mE3KJN)) : e,
                    });
    }
    return (0, s.jsxs)(O.Bs.Provider, {
        value: (0, F.A)(m, u),
        children: [
            !c && (0, s.jsx)(ea.A, { channel: n, message: t, renderColon: null != x, hasUnreads: r }),
            (0, s.jsx)(j.M, { className: em.JY, children: x }),
        ],
    });
});
function eN(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        a = (0, I.m)(t.id),
        i = l?.reactions != null && l.reactions.length > 0;
    return (0, s.jsxs)("div", {
        className: em.qr,
        children: [
            i || null == l ? null : (0, s.jsx)(eC, { firstMessage: l, channel: t }),
            null == l ? null : (0, s.jsx)(eb, { firstMessage: l, channel: t }),
            (0, s.jsx)(ep, { channel: t, iconSize: 14 }),
            (0, s.jsx)("span", { className: em.xE, children: "\u2022" }),
            a.length > 0
                ? (0, s.jsxs)("div", {
                      className: em.IW,
                      children: [
                          (0, s.jsx)(e_, { channel: t, userIds: a, facepileRef: n }),
                          (0, s.jsx)("div", {
                              className: em.r$,
                              children: (0, s.jsx)(C.n, { themed: !0, dotRadius: 2 }),
                          }),
                          (0, s.jsx)(_.Ay, { channel: t, className: em.mD, renderDots: !1 }),
                      ],
                  })
                : (0, s.jsx)(eM, { channel: t }),
        ],
    });
}
function ep(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: a, unreadCount: r } = (0, X.k6)(t);
    return (0, s.jsxs)("div", {
        className: i()(em.Mv, { [em.hT]: l && null == r }),
        children: [
            (0, s.jsx)("span", {
                className: em.SZ,
                children: (0, s.jsx)(b.o, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof a
                ? (0, s.jsx)(T.A, { value: a, digitWidth: 9, className: em.gv })
                : (0, s.jsx)("div", { className: em.gv, children: a }),
            null == r
                ? null
                : (0, s.jsxs)(p.E, {
                      className: em.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", eu.intl.format(eu.t.z3PEth, { count: r }), ")"],
                  }),
        ],
    });
}
function eC(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, h.bG)([H.A], () => H.A.getChannel(n.parent_id)),
        a = (0, X.Ck)(l),
        { disableReactionCreates: i, isLurking: r, isPendingMember: c } = (0, U.A)(n);
    return null == a || i
        ? null
        : (0, s.jsx)(D.qT, {
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
              type: B.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function eb(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, X.lQ)(t),
        { disableReactionUpdates: a, isLurking: i, isPendingMember: r } = (0, U.A)(n);
    return null == l
        ? null
        : (0, s.jsx)(
              D.qT,
              {
                  className: em.vC,
                  message: t,
                  readOnly: a || n.isArchivedLockedThread(),
                  isLurking: i,
                  isPendingMember: r,
                  useChatFontScaling: !1,
                  type: l.burst_count > 0 ? B.v.BURST : B.v.NORMAL,
                  emojiSize: "reaction",
                  emojiSizeTooltip: "reaction",
                  ...l,
              },
              `${l.emoji.id ?? 0}:${l.emoji.name}`,
          );
}
function eM(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, Y.R)(t.parent_id),
        l = (0, X.Mw)(t, n),
        a = t.threadMetadata?.createTimestamp,
        i = null == a ? null : eu.intl.formatToPlainString(eu.t["13euCd"], { timestamp: (0, Q.i$)(o()(a), "LLLL") });
    return (0, s.jsx)(g.m, {
        text: i,
        children: (0, s.jsx)(p.E, {
            className: em.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function e_(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        a = (0, X.$I)(t, n);
    return (0, s.jsx)("div", {
        ref: l,
        children: (0, s.jsx)(y.Ay, {
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
function eS(e) {
    let { firstMedia: t, shouldObscure: n, obscureReason: l, shouldShowAgeVerification: a } = e,
        r = (0, h.bG)([Z.A], () => Z.A.isFocused()),
        c = (0, w.ge)(t.src),
        d = K.kt.useSetting(),
        o = (0, z.rx)(l),
        { src: u, width: m, height: x, alt: g } = t;
    return a
        ? (0, s.jsx)("div", {
              "aria-label": o ?? g ?? eu.intl.string(eu.t.hqwnc2),
              className: i()(em.iT, em.nh),
              style: { maxWidth: eg, maxHeight: ex, height: x, width: m },
          })
        : u.startsWith("data:")
          ? (0, s.jsx)(M._, {
                src: u,
                width: m,
                height: x,
                minWidth: eg,
                minHeight: ex,
                alt: null != g && n ? o : g,
                className: em.iT,
                imageClassName: i()(em.LW, { [em.cd]: n }),
            })
          : (0, W.LL)({
                src: u,
                width: m,
                height: x,
                minWidth: eg,
                minHeight: ex,
                alt: null != g && n ? o : g,
                autoPlay: d,
                animated: c && !n && r,
                srcIsAnimated: t.srcIsAnimated,
                containerClassName: em.iT,
                imageClassName: i()(em.LW, { [em.cd]: n }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function ek(e) {
    let { channel: t, firstMedia: n } = e,
        [l, a] = (0, z.eJ)({ media: n, channel: t }),
        i = (0, R.qZ)(a);
    return (0, s.jsx)(j.M, {
        enabled: !0,
        children: (0, s.jsxs)("div", {
            className: em.pV,
            onClick: function (e) {
                e.stopPropagation(),
                    i &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        L.A.showAgeVerificationGetStartedModal({ entryPoint: P.q1.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, s.jsx)(eS, { firstMedia: n, shouldObscure: l, obscureReason: a, shouldShowAgeVerification: i }),
                l && (0, s.jsx)(es.A, { iconClassname: em.yo, obscureReason: a }),
            ],
        }),
    });
}

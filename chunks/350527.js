n.d(t, {
    NA: () => eC,
    $k: () => eN,
    gL: () => eS,
    T5: () => ex,
    cn: () => eb,
    Ay: () => ef,
    Co: () => eg,
    hf: () => ej,
});
var s = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(284009),
    c = n.n(r),
    o = n(989349),
    u = n.n(o),
    d = n(942381),
    h = n(837381),
    m = n(17928),
    g = n(661531),
    x = n(990078),
    f = n(939249),
    A = n(707554),
    j = n(247928),
    v = n(534514),
    p = n(777666),
    N = n(834730),
    C = n(863610),
    b = n(534890),
    y = n(144165),
    S = n(748934),
    _ = n(765671),
    M = n(738768),
    k = n(104171),
    E = n(139716),
    L = n(847599),
    T = n(114166),
    w = n(47167),
    P = n(810181),
    I = n(390248),
    R = n(77350),
    O = n(294520),
    F = n(505527),
    z = n(863439),
    B = n(465364),
    G = n(467073),
    W = n(34337),
    U = n(93032),
    D = n(805964),
    q = n(302031),
    K = n(253932),
    $ = n(761640),
    H = n(734057),
    J = n(576705),
    V = n(994500),
    Z = n(531685),
    Q = n(58703),
    X = n(422844),
    Y = n(435470),
    ee = n(473503),
    et = n(969043),
    en = n(768953),
    es = n(710948),
    el = n(218152),
    ea = n(313880),
    ei = n(52933),
    er = n(504261),
    ec = n(505234),
    eo = n(652215),
    eu = n(838541),
    ed = n(985018),
    eh = n(330070),
    em = n(992595);
let eg = 72,
    ex = 72,
    ef = l.memo(function (e) {
        let {
                threadId: t,
                goToThread: n,
                observePostVisibilityAnalytics: a,
                overrideMedia: r,
                className: o,
                containerWidth: u,
            } = e,
            {
                channel: g,
                isOpen: x,
                messageCount: v,
                firstMessage: p,
                content: N,
                media: C,
            } = (function (e) {
                let { threadId: t, overrideMedia: n } = e,
                    s = (0, m.bG)([H.A], () => H.A.getChannel(t));
                c()(null != s, "the thread should not be null here, a store must have missed an update");
                let l = (0, m.bG)([$.Ay], () => $.Ay.getCurrentSidebarChannelId(s.parent_id) === s.id),
                    { firstMessage: a } = (0, ee.OA)(s),
                    { content: i, firstMedia: r } = (0, Y.gk)({ firstMessage: a }),
                    { messageCountText: o } = (0, Y.k6)(s);
                return { channel: s, isOpen: l, messageCount: o, firstMessage: a, content: i, media: n ?? r };
            })({ threadId: t, overrideMedia: r }),
            b = (0, w.Ay)(g),
            { ref: y, height: S } = (0, _.Ay)(),
            M = (0, el.kU)((e) => e.setCardHeight, d.x);
        l.useEffect(() => {
            null != S && M(t, S);
        }, [S, M, t]),
            l.useEffect(() => {
                a?.(y.current, t);
            }, [y, a, t]);
        let k = l.useRef(null),
            { handleLeftClick: E, handleRightClick: L } = (0, ec.A)({ facepileRef: k, goToThread: n, channel: g }),
            { role: T, onFocus: P, ...I } = (0, h.rm)(t),
            { isFocused: R, handleFocus: O, handleBlur: F } = (0, er.A)(P);
        return (0, s.jsxs)("div", {
            ref: y,
            "data-item-id": t,
            onClick: E,
            onContextMenu: L,
            className: i()(eh.kL, o, { [eh.nT]: x }),
            children: [
                (0, s.jsx)(f.D, {
                    onClick: E,
                    focusProps: { ringTarget: y },
                    onContextMenu: L,
                    "aria-label": ed.intl.formatToPlainString(ed.t.pgYN6c, { title: b ?? "", count: v }),
                    className: eh.Kv,
                    onFocus: O,
                    onBlur: F,
                    ...I,
                }),
                (0, s.jsxs)("div", {
                    className: eh.kb,
                    children: [
                        (0, s.jsx)(A.F, {
                            children: (0, s.jsx)(eA, {
                                channel: g,
                                firstMessage: p,
                                content: N,
                                hasMediaAttachment: null != C,
                                containerWidth: u,
                            }),
                        }),
                        (0, s.jsx)(j.M, {
                            enabled: !R,
                            children: (0, s.jsx)(ep, { channel: g, firstMessage: p, facepileRef: k }),
                        }),
                    ],
                }),
                p?.blocked || null == C ? null : (0, s.jsx)(eM, { channel: g, firstMedia: C }),
            ],
        });
    });
function eA(e) {
    let { channel: t, firstMessage: n, content: a, hasMediaAttachment: r, containerWidth: c } = e,
        { isNew: o, hasUnreads: u } = (0, Y.X5)(t),
        d = ej(t),
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
        className: eh.rf,
        children: [
            (0, s.jsx)(ei.Ay, { channel: t }),
            (0, s.jsx)("div", {
                className: i()(eh.wx, { [eh.qN]: m }),
                children: (0, s.jsxs)("div", {
                    className: eh.TK,
                    children: [
                        (0, s.jsx)(v.D, {
                            variant: "heading-lg/semibold",
                            color: u ? "text-strong" : "text-muted",
                            lineClamp: 2,
                            className: eh.o$,
                            children: (0, s.jsxs)("span", {
                                ref: h,
                                children: [
                                    d,
                                    o &&
                                        (0, s.jsx)("span", {
                                            className: eh.pr,
                                            children: (0, s.jsx)(p.Lp, {
                                                className: eh.Ad,
                                                color: g.A.unsafe_rawColors.BRAND_260.css,
                                                text: ed.intl.string(ed.t.y2b7CA),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                        o &&
                            m &&
                            (0, s.jsx)(p.Lp, {
                                className: eh.Ad,
                                color: g.A.unsafe_rawColors.BRAND_260.css,
                                text: ed.intl.string(ed.t.y2b7CA),
                            }),
                    ],
                }),
            }),
            (0, s.jsx)("div", {
                className: eh.iU,
                children: (0, s.jsx)(ev, { channel: t, message: n, content: a, hasMediaAttachment: r, hasUnreads: u }),
            }),
        ],
    });
}
function ej(e) {
    let t = (0, w.Ay)(e),
        n = (0, m.bG)([en.A], () => en.A.getHasSearchResults(e.parent_id)),
        s = (0, m.bG)([en.A], () => en.A.getSearchQuery(e.parent_id)),
        a = l.useMemo(() => (0, M.wG)(n && null != s ? s : "", !0), [n, s]);
    return l.useMemo(() => (0, B.Ay)({ content: t ?? "", embeds: [] }, { postProcessor: a }).content, [t, a]);
}
let ev = l.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: a, hasUnreads: r } = e,
        { isBlocked: c, isIgnored: o } = (0, m.cf)([V.A], () => ({
            isBlocked: null != t && V.A.isBlockedForMessage(t),
            isIgnored: null != t && V.A.isIgnoredForMessage(t),
        })),
        u = (0, m.bG)([et.A], () => et.A.isLoading(n.id)),
        d = (0, m.bG)([J.A], () => J.A.can(eo.xBc.MANAGE_MESSAGES, n)),
        h = K.gs.useSetting(),
        g = null;
    if (c)
        g = (0, s.jsx)(N.E, {
            className: eh.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: ed.intl.string(ed.t.Lkp2fB),
        });
    else if (o)
        g = (0, s.jsx)(N.E, {
            className: eh.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: ed.intl.string(ed.t.yWK7ZM),
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, D.o)(t, l, c, o, i()(eh.BK, em.tZ, em.__invalid_smallFontSize), {
                      leadingIconClass: eh.aG,
                      trailingIconClass: eh.sl,
                      iconSize: eu.eJ,
                  });
        g =
            null != n
                ? (0, s.jsx)(N.E, {
                      variant: "text-sm/semibold",
                      color: r ? "text-default" : "text-muted",
                      children: n,
                  })
                : a
                  ? null
                  : (0, s.jsx)(N.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: r ? "text-default" : "text-muted",
                        className: eh.BK,
                        children: null == t ? (u ? null : ed.intl.string(ed.t.mE3KJN)) : e,
                    });
    }
    return (0, s.jsxs)(q.Bs.Provider, {
        value: (0, z.A)(h, d),
        children: [
            !c && (0, s.jsx)(ea.A, { channel: n, message: t, renderColon: null != g, hasUnreads: r }),
            (0, s.jsx)(j.M, { className: eh.JY, children: g }),
        ],
    });
});
function ep(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        a = (0, P.m)(t.id),
        i = l?.reactions != null && l.reactions.length > 0;
    return (0, s.jsxs)("div", {
        className: eh.qr,
        children: [
            i || null == l ? null : (0, s.jsx)(eC, { firstMessage: l, channel: t }),
            null == l ? null : (0, s.jsx)(eb, { firstMessage: l, channel: t }),
            (0, s.jsx)(eN, { channel: t, iconSize: 14 }),
            (0, s.jsx)("span", { className: eh.xE, children: "•" }),
            a.length > 0
                ? (0, s.jsxs)("div", {
                      className: eh.IW,
                      children: [
                          (0, s.jsx)(eS, { channel: t, userIds: a, facepileRef: n }),
                          (0, s.jsx)("div", {
                              className: eh.r$,
                              children: (0, s.jsx)(C.n, { themed: !0, dotRadius: 2 }),
                          }),
                          (0, s.jsx)(S.Ay, { channel: t, className: eh.mD, renderDots: !1 }),
                      ],
                  })
                : (0, s.jsx)(ey, { channel: t }),
        ],
    });
}
function eN(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: a, unreadCount: r } = (0, Y.k6)(t);
    return (0, s.jsxs)("div", {
        className: i()(eh.Mv, { [eh.hT]: l && null == r }),
        children: [
            (0, s.jsx)("span", {
                className: eh.SZ,
                children: (0, s.jsx)(b.o, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof a
                ? (0, s.jsx)(T.A, { value: a, digitWidth: 9, className: eh.gv })
                : (0, s.jsx)("div", { className: eh.gv, children: a }),
            null == r
                ? null
                : (0, s.jsxs)(N.E, {
                      className: eh.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", ed.intl.format(ed.t.z3PEth, { count: r }), ")"],
                  }),
        ],
    });
}
function eC(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, m.bG)([H.A], () => H.A.getChannel(n.parent_id)),
        a = (0, Y.Ck)(l),
        { disableReactionCreates: i, isLurking: r, isPendingMember: c } = (0, G.A)(n);
    return null == a || i
        ? null
        : (0, s.jsx)(U.qT, {
              className: eh.vC,
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
              type: F.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function eb(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, Y.lQ)(t),
        { disableReactionUpdates: a, isLurking: i, isPendingMember: r } = (0, G.A)(n);
    return null == l
        ? null
        : (0, s.jsx)(
              U.qT,
              {
                  className: eh.vC,
                  message: t,
                  readOnly: a || n.isArchivedLockedThread(),
                  isLurking: i,
                  isPendingMember: r,
                  useChatFontScaling: !1,
                  type: l.burst_count > 0 ? F.v.BURST : F.v.NORMAL,
                  emojiSize: "reaction",
                  emojiSizeTooltip: "reaction",
                  ...l,
              },
              `${l.emoji.id ?? 0}:${l.emoji.name}`,
          );
}
function ey(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, X.R)(t.parent_id),
        l = (0, Y.Mw)(t, n),
        a = t.threadMetadata?.createTimestamp,
        i = null == a ? null : ed.intl.formatToPlainString(ed.t["13euCd"], { timestamp: (0, Q.i$)(u()(a), "LLLL") });
    return (0, s.jsx)(x.m, {
        text: i,
        children: (0, s.jsx)(N.E, {
            className: eh.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function eS(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        a = (0, Y.$I)(t, n);
    return (0, s.jsx)("div", {
        ref: l,
        children: (0, s.jsx)(k.Ay, {
            className: eh.__invalid_facepile,
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
    let { firstMedia: t, shouldObscure: n, obscureReason: l, shouldShowAgeVerification: a } = e,
        r = (0, m.bG)([Z.A], () => Z.A.isFocused()),
        c = (0, R.ge)(t.src),
        o = K.kt.useSetting(),
        u = (0, O.rx)(l),
        { src: d, width: h, height: g, alt: x } = t;
    return a
        ? (0, s.jsx)("div", {
              "aria-label": u ?? x ?? ed.intl.string(ed.t.hqwnc2),
              className: i()(eh.iT, eh.nh),
              style: { maxWidth: ex, maxHeight: eg, height: g, width: h },
          })
        : d.startsWith("data:")
          ? (0, s.jsx)(y._, {
                src: d,
                width: h,
                height: g,
                minWidth: ex,
                minHeight: eg,
                alt: null != x && n ? u : x,
                className: eh.iT,
                imageClassName: i()(eh.LW, { [eh.cd]: n }),
            })
          : (0, W.LL)({
                src: d,
                width: h,
                height: g,
                minWidth: ex,
                minHeight: eg,
                alt: null != x && n ? u : x,
                autoPlay: o,
                animated: c && !n && r,
                srcIsAnimated: t.srcIsAnimated,
                containerClassName: eh.iT,
                imageClassName: i()(eh.LW, { [eh.cd]: n }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function eM(e) {
    let { channel: t, firstMedia: n } = e,
        [l, a] = (0, O.eJ)({ media: n, channel: t }),
        i = (0, I.qZ)(a);
    return (0, s.jsx)(j.M, {
        enabled: !0,
        children: (0, s.jsxs)("div", {
            className: eh.pV,
            onClick: function (e) {
                e.stopPropagation(),
                    i &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        E.A.showAgeVerificationGetStartedModal({ entryPoint: L.q1.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, s.jsx)(e_, { firstMedia: n, shouldObscure: l, obscureReason: a, shouldShowAgeVerification: i }),
                l && (0, s.jsx)(es.A, { iconClassname: eh.yo, obscureReason: a }),
            ],
        }),
    });
}

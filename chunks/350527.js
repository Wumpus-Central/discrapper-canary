n.d(t, {
    NA: () => ey,
    $k: () => eN,
    gL: () => eS,
    T5: () => ex,
    cn: () => eb,
    Ay: () => ef,
    Co: () => eg,
    hf: () => eA,
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
    j = n(297264),
    A = n(62010),
    v = n(834730),
    p = n(863610),
    N = n(534890),
    y = n(866665),
    b = n(144165),
    C = n(119031),
    S = n(765671),
    M = n(738768),
    k = n(104171),
    _ = n(379257),
    E = n(306537),
    L = n(114166),
    P = n(47167),
    T = n(810181),
    w = n(607470),
    I = n(390248),
    R = n(338717),
    z = n(59318),
    F = n(294520),
    G = n(505527),
    U = n(863439),
    W = n(467073),
    B = n(684519),
    O = n(831688),
    q = n(448368),
    D = n(302031),
    K = n(885386),
    $ = n(761640),
    H = n(734057),
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
    ec = n(505234),
    ed = n(652215),
    eo = n(838541),
    eu = n(660183),
    eh = n(223139),
    em = n(165648);
let eg = 72,
    ex = 72,
    ef = l.memo(function (e) {
        let {
                threadId: t,
                goToThread: n,
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
                media: y,
            } = (function (e) {
                let { threadId: t, overrideMedia: n } = e,
                    s = (0, m.bG)([H.A], () => H.A.getChannel(t));
                c()(null != s, "the thread should not be null here, a store must have missed an update");
                let l = (0, m.bG)([$.Ay], () => $.Ay.getCurrentSidebarChannelId(s.parent_id) === s.id),
                    { firstMessage: i } = (0, ee.OA)(s),
                    { content: a, firstMedia: r } = (0, X.gk)({ firstMessage: i }),
                    { messageCountText: d } = (0, X.k6)(s);
                return { channel: s, isOpen: l, messageCount: d, firstMessage: i, content: a, media: n ?? r };
            })({ threadId: t, overrideMedia: r }),
            b = (0, P.Ay)(j),
            { ref: C, height: M } = (0, S.Ay)(),
            k = (0, el.kU)((e) => e.setCardHeight, u.x);
        (l.useEffect(() => {
            null != M && k(t, M);
        }, [M, k, t]),
            l.useEffect(() => {
                i?.(C.current, t);
            }, [C, i, t]));
        let _ = l.useRef(null),
            { handleLeftClick: E, handleRightClick: L } = (0, ec.A)({ facepileRef: _, goToThread: n, channel: j }),
            { role: T, onFocus: w, ...I } = (0, h.rm)(t),
            { isFocused: R, handleFocus: z, handleBlur: F } = (0, er.A)(w);
        return (0, s.jsxs)("div", {
            ref: C,
            "data-item-id": t,
            onClick: E,
            onContextMenu: L,
            className: a()(eh.kL, d, { [eh.nT]: A }),
            children: [
                (0, s.jsx)(g.D, {
                    onClick: E,
                    focusProps: { ringTarget: C },
                    onContextMenu: L,
                    "aria-label": eu.intl.formatToPlainString(eu.t.pgYN6c, { title: b ?? "", count: v }),
                    className: eh.Kv,
                    onFocus: z,
                    onBlur: F,
                    ...I,
                }),
                (0, s.jsxs)("div", {
                    className: eh.kb,
                    children: [
                        (0, s.jsx)(x.F, {
                            children: (0, s.jsx)(ej, {
                                channel: j,
                                firstMessage: p,
                                content: N,
                                hasMediaAttachment: null != y,
                                containerWidth: o,
                            }),
                        }),
                        (0, s.jsx)(f.M, {
                            enabled: !R,
                            children: (0, s.jsx)(ep, { channel: j, firstMessage: p, facepileRef: _ }),
                        }),
                    ],
                }),
                p?.blocked || null == y ? null : (0, s.jsx)(eE, { channel: j, firstMedia: y }),
            ],
        });
    });
function ej(e) {
    let { channel: t, firstMessage: n, content: i, hasMediaAttachment: r, containerWidth: c } = e,
        { isNew: d, hasUnreads: o } = (0, X.X5)(t),
        u = eA(t),
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
        className: eh.rf,
        children: [
            (0, s.jsx)(ea.Ay, { channel: t }),
            (0, s.jsx)("div", {
                className: a()(eh.wx, { [eh.qN]: m }),
                children: (0, s.jsxs)("div", {
                    className: eh.TK,
                    children: [
                        (0, s.jsx)(j.D, {
                            variant: "heading-lg/semibold",
                            color: o ? "text-strong" : "text-muted",
                            lineClamp: 2,
                            className: eh.o$,
                            children: (0, s.jsxs)("span", {
                                ref: h,
                                children: [
                                    u,
                                    d &&
                                        (0, s.jsx)("span", {
                                            className: eh.pr,
                                            children: (0, s.jsx)("span", {
                                                className: eh.Ad,
                                                children: (0, s.jsx)(A.E, { type: "new", variant: "primary" }),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                        d &&
                            m &&
                            (0, s.jsx)("div", {
                                className: eh.gi,
                                children: (0, s.jsx)(A.E, { type: "new", variant: "primary" }),
                            }),
                    ],
                }),
            }),
            (0, s.jsx)("div", {
                className: eh.iU,
                children: (0, s.jsx)(ev, { channel: t, message: n, content: i, hasMediaAttachment: r, hasUnreads: o }),
            }),
        ],
    });
}
function eA(e) {
    let t = (0, P.Ay)(e),
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
let ev = l.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: i, hasUnreads: r } = e,
        { isBlocked: c, isIgnored: d } = (0, m.cf)([J.A], () => ({
            isBlocked: null != t && J.A.isBlockedForMessage(t),
            isIgnored: null != t && J.A.isIgnoredForMessage(t),
        })),
        o = (0, m.bG)([et.A], () => et.A.isLoading(n.id)),
        u = (0, m.bG)([V.A], () => V.A.can(ed.xBc.MANAGE_MESSAGES, n)),
        h = K.gs.useSetting(),
        g = null;
    if (c)
        g = (0, s.jsx)(v.E, {
            className: eh.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: eu.intl.string(eu.t.Lkp2fB),
        });
    else if (d)
        g = (0, s.jsx)(v.E, {
            className: eh.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: eu.intl.string(eu.t.yWK7ZM),
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, q.o)(t, l, c, d, a()(eh.BK, em.tZ, em.__invalid_smallFontSize), {
                      leadingIconClass: eh.aG,
                      trailingIconClass: eh.sl,
                      iconSize: eo.eJ,
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
                        className: eh.BK,
                        children: null == t ? (o ? null : eu.intl.string(eu.t.mE3KJN)) : e,
                    });
    }
    return (0, s.jsxs)(D.Bs.Provider, {
        value: (0, U.A)(h, u),
        children: [
            !c && (0, s.jsx)(ei.A, { channel: n, message: t, renderColon: null != g, hasUnreads: r }),
            (0, s.jsx)(f.M, { className: eh.JY, children: g }),
        ],
    });
});
function ep(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        i = (0, T.m)(t.id),
        a = l?.reactions != null && l.reactions.length > 0;
    return (0, s.jsxs)("div", {
        className: eh.qr,
        children: [
            a || null == l ? null : (0, s.jsx)(ey, { firstMessage: l, channel: t }),
            null == l ? null : (0, s.jsx)(eb, { firstMessage: l, channel: t }),
            (0, s.jsx)(eN, { channel: t, iconSize: 14 }),
            (0, s.jsx)("span", { className: eh.xE, children: "\u2022" }),
            i.length > 0
                ? (0, s.jsxs)("div", {
                      className: eh.IW,
                      children: [
                          (0, s.jsx)(eS, { channel: t, userIds: i, facepileRef: n }),
                          (0, s.jsx)("div", {
                              className: eh.r$,
                              children: (0, s.jsx)(p.n, { themed: !0, dotRadius: 2 }),
                          }),
                          (0, s.jsx)(C.Ay, { channel: t, className: eh.mD, renderDots: !1, renderSlowmode: !1 }),
                      ],
                  })
                : (0, s.jsx)(eC, { channel: t }),
        ],
    });
}
function eN(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: i, unreadCount: r } = (0, X.k6)(t);
    return (0, s.jsxs)("div", {
        className: a()(eh.Mv, { [eh.hT]: l && null == r }),
        children: [
            (0, s.jsx)("span", {
                className: eh.SZ,
                children: (0, s.jsx)(N.ChatIcon, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof i
                ? (0, s.jsx)(L.A, { value: i, digitWidth: 9, className: eh.gv })
                : (0, s.jsx)("div", { className: eh.gv, children: i }),
            null == r
                ? null
                : (0, s.jsxs)(v.E, {
                      className: eh.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", eu.intl.format(eu.t.z3PEth, { count: r }), ")"],
                  }),
        ],
    });
}
function ey(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, m.bG)([H.A], () => H.A.getChannel(n.parent_id)),
        i = (0, X.Ck)(l),
        { disableReactionCreates: a, isLurking: r, isPendingMember: c } = (0, W.A)(n);
    return null == i || a
        ? null
        : (0, s.jsx)(O.q, {
              className: eh.vC,
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
function eb(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, X.lQ)(t),
        { disableReactionUpdates: i, isLurking: a, isPendingMember: r } = (0, W.A)(n);
    return null == l
        ? null
        : (0, s.jsx)(
              O.q,
              {
                  className: eh.vC,
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
function eC(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, Y.R)(t.parent_id),
        l = (0, X.Mw)(t, n),
        i = t.threadMetadata?.createTimestamp,
        a = null == i ? null : eu.intl.formatToPlainString(eu.t["13euCd"], { timestamp: (0, Q.i$)(o()(i), "LLLL") });
    return (0, s.jsx)(y.m, {
        text: a,
        children: (0, s.jsx)(v.E, {
            className: eh.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function eS(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        i = (0, X.$I)(t, n);
    return (0, s.jsx)("div", {
        ref: l,
        children: (0, s.jsx)(k.Ay, {
            className: eh.__invalid_facepile,
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
function eM(e) {
    return e.startsWith("data:") || e.startsWith("blob:");
}
function ek(e) {
    let { src: t, size: n, alt: l, className: i } = e;
    return (0, s.jsx)(w.A, {
        src: t,
        alt: l ?? eu.intl.string(eu.t.FlNoSV),
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
        d = K.kt.useSetting(),
        o = (0, F.rx)(l),
        { src: u, width: h, height: g, alt: x } = t;
    return i
        ? (0, s.jsx)("div", {
              "aria-label": o ?? x ?? eu.intl.string(eu.t.hqwnc2),
              className: a()(eh.iT, eh.nh),
              style: { maxWidth: ex, maxHeight: eg, height: g, width: h },
          })
        : eM(u)
          ? (0, s.jsx)(b._, {
                src: u,
                width: h,
                height: g,
                minWidth: ex,
                minHeight: eg,
                alt: null != x && n ? o : x,
                className: eh.iT,
                imageClassName: a()(eh.LW, { [eh.cd]: n }),
                children: t.isVideo ? ek : void 0,
            })
          : (0, B.LL)({
                src: u,
                width: h,
                height: g,
                minWidth: ex,
                minHeight: eg,
                alt: null != x && n ? o : x,
                autoPlay: d,
                animated: c && !n && r,
                srcIsAnimated: t.srcIsAnimated,
                containerClassName: eh.iT,
                imageClassName: a()(eh.LW, { [eh.cd]: n }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function eE(e) {
    let { channel: t, firstMedia: n } = e,
        l = eM(n.src),
        i = (0, U.z)(t),
        [a, r] = (0, F.eJ)({ media: l ? null : n, channel: t }),
        c = l ? n.spoiler && i : a,
        d = l && n.spoiler ? R.Oc.SPOILER : r,
        o = (0, I.qZ)(d);
    return (0, s.jsx)(f.M, {
        enabled: !0,
        children: (0, s.jsxs)("div", {
            className: eh.pV,
            onClick: function (e) {
                (e.stopPropagation(),
                    o &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        _.A.showAgeVerificationGetStartedModal({ entryPoint: E.q1.FORUM_POST_MEDIA_PREVIEW })));
            },
            children: [
                (0, s.jsx)(e_, { firstMedia: n, shouldObscure: c, obscureReason: d, shouldShowAgeVerification: o }),
                c && (0, s.jsx)(es.A, { iconClassname: eh.yo, obscureReason: d }),
            ],
        }),
    });
}

t.d(n, {
    NA: () => eb,
    $k: () => ey,
    gL: () => eM,
    T5: () => ef,
    cn: () => eC,
    Ay: () => eA,
    Co: () => ex,
    hf: () => ev,
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
    A = t(534514),
    j = t(62010),
    v = t(834730),
    p = t(863610),
    N = t(534890),
    y = t(866665),
    b = t(144165),
    C = t(119031),
    S = t(765671),
    M = t(738768),
    k = t(104171),
    L = t(379257),
    _ = t(306537),
    E = t(114166),
    w = t(47167),
    P = t(810181),
    T = t(607470),
    I = t(390248),
    R = t(338717),
    z = t(59318),
    F = t(294520),
    G = t(505527),
    U = t(863439),
    W = t(467073),
    B = t(44788),
    O = t(831688),
    q = t(448368),
    K = t(302031),
    D = t(253932),
    H = t(358047),
    $ = t(734057),
    V = t(576705),
    J = t(994500),
    Z = t(531685),
    Q = t(58703),
    Y = t(422844),
    X = t(435470),
    ee = t(473503),
    en = t(969043),
    et = t(768953),
    es = t(710948),
    el = t(218152),
    ei = t(313880),
    ea = t(52933),
    er = t(504261),
    ec = t(795435),
    ed = t(505234),
    eo = t(652215),
    eu = t(838541),
    eh = t(105292),
    em = t(223139),
    eg = t(165648);
let ex = 72,
    ef = 72,
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
                channel: A,
                isOpen: j,
                messageCount: v,
                firstMessage: p,
                content: N,
                media: y,
            } = (function (e) {
                let { threadId: n, overrideMedia: t } = e,
                    s = (0, m.bG)([$.A], () => $.A.getChannel(n));
                c()(null != s, "the thread should not be null here, a store must have missed an update");
                let l = (0, m.bG)([H.Ay], () => H.Ay.getCurrentSidebarChannelId(s.parent_id) === s.id),
                    { firstMessage: i } = (0, ee.OA)(s),
                    { content: a, firstMedia: r } = (0, ec.A)({ firstMessage: i }),
                    { messageCountText: d } = (0, X.k6)(s);
                return { channel: s, isOpen: l, messageCount: d, firstMessage: i, content: a, media: t ?? r };
            })({ threadId: n, overrideMedia: r }),
            b = (0, w.Ay)(A),
            { ref: C, height: M } = (0, S.Ay)(),
            k = (0, el.kU)((e) => e.setCardHeight, u.x);
        (l.useEffect(() => {
            null != M && k(n, M);
        }, [M, k, n]),
            l.useEffect(() => {
                i?.(C.current, n);
            }, [C, i, n]));
        let L = l.useRef(null),
            { handleLeftClick: _, handleRightClick: E } = (0, ed.A)({ facepileRef: L, goToThread: t, channel: A }),
            { role: P, onFocus: T, ...I } = (0, h.rm)(n),
            { isFocused: R, handleFocus: z, handleBlur: F } = (0, er.A)(T);
        return (0, s.jsxs)("div", {
            ref: C,
            "data-item-id": n,
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
    let { channel: n, firstMessage: t, content: i, hasMediaAttachment: r, containerWidth: c } = e,
        { isNew: d, hasUnreads: o } = (0, X.X5)(n),
        u = ev(n),
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
        className: em.rf,
        children: [
            (0, s.jsx)(ea.Ay, { channel: n }),
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
                children: (0, s.jsx)(ep, { channel: n, message: t, content: i, hasMediaAttachment: r, hasUnreads: o }),
            }),
        ],
    });
}
function ev(e) {
    let n = (0, w.Ay)(e),
        t = (0, m.bG)([et.A], () => et.A.getHasSearchResults(e.parent_id)),
        i = (0, m.bG)([et.A], () => et.A.getSearchQuery(e.parent_id)),
        a = l.useMemo(() => (0, M.wG)(t && null != i ? i : "", !0), [t, i]);
    return l.useMemo(() => {
        var e;
        let t;
        return "string" == typeof (t = Array.isArray((e = a({ type: "text", content: n ?? "" }))) ? e : e.content)
            ? t
            : Array.isArray(t)
              ? t.map((e, n) =>
                    "highlight" === e.type
                        ? (0, s.jsx)("span", { className: "highlight", children: e.content }, n)
                        : e.content,
                )
              : null;
    }, [n, a]);
}
let ep = l.memo(function (e) {
    let { message: n, channel: t, content: l, hasMediaAttachment: i, hasUnreads: r } = e,
        { isBlocked: c, isIgnored: d } = (0, m.cf)([J.A], () => ({
            isBlocked: null != n && J.A.isBlockedForMessage(n),
            isIgnored: null != n && J.A.isIgnoredForMessage(n),
        })),
        o = (0, m.bG)([en.A], () => en.A.isLoading(t.id)),
        u = (0, m.bG)([V.A], () => V.A.can(eo.xBc.MANAGE_MESSAGES, t)),
        h = D.gs.useSetting(),
        g = null;
    if (c)
        g = (0, s.jsx)(v.E, {
            className: em.Wv,
            variant: "body-sm/medium",
            color: "text-muted",
            children: eh.intl.string(eh.t.Lkp2fB),
        });
    else if (d)
        g = (0, s.jsx)(v.E, {
            className: em.Wv,
            variant: "body-sm/medium",
            color: "text-muted",
            children: eh.intl.string(eh.t.yWK7ZM),
        });
    else {
        let { contentPlaceholder: e, renderedContent: t } =
            null == n
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, q.o)(n, l, c, d, a()(em.BK, eg.tZ, eg.__invalid_smallFontSize), {
                      leadingIconClass: em.aG,
                      trailingIconClass: em.sl,
                      iconSize: eu.eJ,
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
                        className: em.BK,
                        children: null == n ? (o ? null : eh.intl.string(eh.t.mE3KJN)) : e,
                    });
    }
    let x = (0, U.A)(h, u);
    return (0, s.jsxs)(K.Bs.Provider, {
        value: x,
        children: [
            !c && (0, s.jsx)(ei.A, { channel: t, message: n, renderColon: null != g, hasUnreads: r }),
            (0, s.jsx)(f.M, { className: em.JY, children: g }),
        ],
    });
});
function eN(e) {
    let { channel: n, facepileRef: t, firstMessage: l } = e,
        i = (0, P.m)(n.id),
        a = l?.reactions != null && l.reactions.length > 0;
    return (0, s.jsxs)("div", {
        className: em.qr,
        children: [
            a || null == l ? null : (0, s.jsx)(eb, { firstMessage: l, channel: n }),
            null == l ? null : (0, s.jsx)(eC, { firstMessage: l, channel: n }),
            (0, s.jsx)(ey, { channel: n, iconSize: 14 }),
            (0, s.jsx)("span", { className: em.xE, children: "\u2022" }),
            i.length > 0
                ? (0, s.jsxs)("div", {
                      className: em.IW,
                      children: [
                          (0, s.jsx)(eM, { channel: n, userIds: i, facepileRef: t }),
                          (0, s.jsx)("div", {
                              className: em.r$,
                              children: (0, s.jsx)(p.n, { themed: !0, dotRadius: 2 }),
                          }),
                          (0, s.jsx)(C.Ay, { channel: n, className: em.mD, renderDots: !1, renderSlowmode: !1 }),
                      ],
                  })
                : (0, s.jsx)(eS, { channel: n }),
        ],
    });
}
function ey(e) {
    let { channel: n, iconSize: t, showReadState: l = !1 } = e,
        { messageCountText: i, unreadCount: r } = (0, X.k6)(n);
    return (0, s.jsxs)("div", {
        className: a()(em.Mv, { [em.hT]: l && null == r }),
        children: [
            (0, s.jsx)("span", {
                className: em.SZ,
                children: (0, s.jsx)(N.ChatIcon, { size: "custom", color: "currentColor", width: t, height: t }),
            }),
            "number" == typeof i
                ? (0, s.jsx)(E.A, { value: i, digitWidth: 9, className: em.gv })
                : (0, s.jsx)("div", { className: em.gv, children: i }),
            null == r
                ? null
                : (0, s.jsxs)(v.E, {
                      className: em.bU,
                      variant: "body-sm/semibold",
                      color: "text-brand",
                      children: ["(", eh.intl.format(eh.t.z3PEth, { count: r }), ")"],
                  }),
        ],
    });
}
function eb(e) {
    let { firstMessage: n, channel: t } = e,
        l = (0, m.bG)([$.A], () => $.A.getChannel(t.parent_id)),
        i = (0, X.Ck)(l),
        { disableReactionCreates: a, isLurking: r, isPendingMember: c } = (0, W.A)(t);
    return null == i || a
        ? null
        : (0, s.jsx)(O.q, {
              className: em.vC,
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
              type: G.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function eC(e) {
    let { firstMessage: n, channel: t } = e,
        l = (0, X.lQ)(n),
        { disableReactionUpdates: i, isLurking: a, isPendingMember: r } = (0, W.A)(t);
    return null == l
        ? null
        : (0, s.jsx)(
              O.q,
              {
                  className: em.vC,
                  message: n,
                  readOnly: i || t.isArchivedLockedThread(),
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
    let { channel: n } = e,
        { sortOrder: t } = (0, Y.R)(n.parent_id),
        l = (0, X.Mw)(n, t),
        i = n.threadMetadata?.createTimestamp,
        a = null == i ? null : eh.intl.formatToPlainString(eh.t["13euCd"], { timestamp: (0, Q.i$)(o()(i), "LLLL") });
    return (0, s.jsx)(y.m, {
        text: a,
        children: (0, s.jsx)(v.E, {
            className: em.__invalid_activityText,
            variant: "body-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function eM(e) {
    let { channel: n, userIds: t, facepileRef: l } = e,
        i = (0, X.$I)(n, t);
    return (0, s.jsx)("div", {
        ref: l,
        children: (0, s.jsx)(k.Ay, {
            className: em.__invalid_facepile,
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
function ek(e) {
    return e.startsWith("data:") || e.startsWith("blob:");
}
function eL(e) {
    let { src: n, size: t, alt: l, className: i } = e;
    return (0, s.jsx)(T.A, {
        src: n,
        alt: l ?? eh.intl.string(eh.t.FlNoSV),
        width: t.width,
        height: t.height,
        className: i,
        preload: "metadata",
    });
}
function e_(e) {
    let { firstMedia: n, shouldObscure: t, obscureReason: l, shouldShowAgeVerification: i } = e,
        r = (0, m.bG)([Z.A], () => Z.A.isFocused()),
        c = (0, z.ge)(n.src),
        d = D.kt.useSetting(),
        o = (0, F.rx)(l),
        { src: u, width: h, height: g, alt: x } = n;
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
                alt: null != x && t ? o : x,
                className: em.iT,
                imageClassName: a()(em.LW, { [em.cd]: t }),
                children: n.isVideo ? eL : void 0,
            })
          : (0, B.LL)({
                src: u,
                width: h,
                height: g,
                minWidth: ef,
                minHeight: ex,
                alt: null != x && t ? o : x,
                autoPlay: d,
                animated: c && !t && r,
                srcIsAnimated: n.srcIsAnimated,
                containerClassName: em.iT,
                imageClassName: a()(em.LW, { [em.cd]: t }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function eE(e) {
    let { channel: n, firstMedia: t } = e,
        l = ek(t.src),
        i = (0, U.z)(n),
        [a, r] = (0, F.eJ)({ media: l ? null : t, channel: n }),
        c = l ? t.spoiler && i : a,
        d = l && t.spoiler ? R.Oc.SPOILER : r,
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
                (0, s.jsx)(e_, { firstMedia: t, shouldObscure: c, obscureReason: d, shouldShowAgeVerification: o }),
                c && (0, s.jsx)(es.A, { iconClassname: em.yo, obscureReason: d }),
            ],
        }),
    });
}

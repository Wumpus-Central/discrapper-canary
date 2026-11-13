t.d(n, { NA: () => eN, gL: () => eC, $k: () => ep, cn: () => eb, Ay: () => eg, hf: () => ef });
var s = t(477900),
    l = t(582128),
    a = t(503698),
    i = t.n(a),
    r = t(284009),
    c = t.n(r),
    d = t(536637),
    o = t.n(d),
    u = t(462180),
    h = t(837381),
    m = t(855986),
    x = t(939249),
    g = t(707554),
    j = t(346055),
    f = t(534514),
    v = t(805251),
    A = t(834730),
    p = t(863610),
    N = t(534890),
    b = t(866665),
    y = t(251843),
    C = t(134357),
    S = t(765671),
    M = t(697530),
    k = t(104171),
    L = t(871309),
    _ = t(171576),
    P = t(114166),
    E = t(47167),
    w = t(810181),
    I = t(607470),
    T = t(390248),
    z = t(338717),
    R = t(954403),
    F = t(273185),
    G = t(294520),
    W = t(505527),
    B = t(863439),
    U = t(467073),
    q = t(383055),
    O = t(30492),
    D = t(448368),
    K = t(302031),
    H = t(253932),
    $ = t(799704),
    V = t(734057),
    Z = t(576705),
    J = t(994500),
    Q = t(531685),
    Y = t(5377),
    X = t(422844),
    ee = t(435470),
    en = t(473503),
    et = t(969043),
    es = t(768953),
    el = t(710948),
    ea = t(218152),
    ei = t(313880),
    er = t(52933),
    ec = t(504261),
    ed = t(795435),
    eo = t(505234),
    eu = t(652215);
t(838541);
var eh = t(792996),
    em = t(223139),
    ex = t(165648);
let eg = l.memo(function (e) {
    let {
            threadId: n,
            goToThread: t,
            observePostVisibilityAnalytics: a,
            overrideMedia: r,
            className: d,
            containerWidth: o,
        } = e,
        {
            channel: f,
            isOpen: v,
            messageCount: A,
            firstMessage: p,
            content: N,
            media: b,
        } = (function (e) {
            let { threadId: n, overrideMedia: t } = e,
                s = (0, m.bG)([V.A], () => V.A.getChannel(n));
            c()(null != s, "the thread should not be null here, a store must have missed an update");
            let l = (0, m.bG)([$.Ay], () => $.Ay.getCurrentSidebarChannelId(s.parent_id) === s.id),
                { firstMessage: a } = (0, en.OA)(s),
                { content: i, firstMedia: r } = (0, ed.A)({ firstMessage: a }),
                { messageCountText: d } = (0, ee.k6)(s);
            return { channel: s, isOpen: l, messageCount: d, firstMessage: a, content: i, media: t ?? r };
        })({ threadId: n, overrideMedia: r }),
        y = (0, E.Ay)(f),
        { ref: C, height: M } = (0, S.Ay)(),
        k = (0, ea.kU)((e) => e.setCardHeight, u.x);
    (l.useEffect(() => {
        null != M && k(n, M);
    }, [M, k, n]),
        l.useEffect(() => {
            a?.(C.current, n);
        }, [C, a, n]));
    let L = l.useRef(null),
        { handleLeftClick: _, handleRightClick: P } = (0, eo.A)({ facepileRef: L, goToThread: t, channel: f }),
        { role: w, onFocus: I, ...T } = (0, h.rm)(n),
        { isFocused: z, handleFocus: R, handleBlur: F } = (0, ec.A)(I);
    return (0, s.jsxs)("div", {
        ref: C,
        "data-item-id": n,
        onClick: _,
        onContextMenu: P,
        className: i()(em.kL, d, { [em.nT]: v }),
        children: [
            (0, s.jsx)(x.D, {
                onClick: _,
                focusProps: { ringTarget: C },
                onContextMenu: P,
                "aria-label": eh.intl.formatToPlainString(eh.t.pgYN6c, { title: y ?? "", count: A }),
                className: em.Kv,
                onFocus: R,
                onBlur: F,
                ...T,
            }),
            (0, s.jsxs)("div", {
                className: em.kb,
                children: [
                    (0, s.jsx)(g.F, {
                        children: (0, s.jsx)(ej, {
                            channel: f,
                            firstMessage: p,
                            content: N,
                            hasMediaAttachment: null != b,
                            containerWidth: o,
                        }),
                    }),
                    (0, s.jsx)(j.M, {
                        enabled: !z,
                        children: (0, s.jsx)(eA, { channel: f, firstMessage: p, facepileRef: L }),
                    }),
                ],
            }),
            p?.blocked || null == b ? null : (0, s.jsx)(eL, { channel: f, firstMedia: b }),
        ],
    });
});
function ej(e) {
    let { channel: n, firstMessage: t, content: a, hasMediaAttachment: r, containerWidth: c } = e,
        { isNew: d, hasUnreads: o } = (0, ee.X5)(n),
        u = ef(n),
        { postTitleRef: h, isNewBadgeOverflow: m } = (function (e, n) {
            let t = l.useRef(null),
                [s, a] = l.useState(!1),
                i = l.useCallback(() => {
                    e && null !== t.current && a(t.current?.offsetHeight > 60);
                }, [a, e, 24]);
            return (
                l.useLayoutEffect(() => {
                    i();
                }, [i, e, n]),
                { postTitleRef: t, isNewBadgeOverflow: s }
            );
        })(d, c);
    return (0, s.jsxs)("div", {
        className: em.rf,
        children: [
            (0, s.jsx)(er.Ay, { channel: n }),
            (0, s.jsx)("div", {
                className: i()(em.wx, { [em.qN]: m }),
                children: (0, s.jsxs)("div", {
                    className: em.TK,
                    children: [
                        (0, s.jsx)(f.D, {
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
                                                children: (0, s.jsx)(v.E, { type: "new", variant: "primary" }),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                        d &&
                            m &&
                            (0, s.jsx)("div", {
                                className: em.gi,
                                children: (0, s.jsx)(v.E, { type: "new", variant: "primary" }),
                            }),
                    ],
                }),
            }),
            (0, s.jsx)("div", {
                className: em.iU,
                children: (0, s.jsx)(ev, { channel: n, message: t, content: a, hasMediaAttachment: r, hasUnreads: o }),
            }),
        ],
    });
}
function ef(e) {
    let n = (0, E.Ay)(e),
        t = (0, m.bG)([es.A], () => es.A.getHasSearchResults(e.parent_id)),
        a = (0, m.bG)([es.A], () => es.A.getSearchQuery(e.parent_id)),
        i = l.useMemo(() => (0, M.th)(t && null != a ? a : "", !0), [t, a]);
    return (0, s.jsx)(R.G.Provider, { value: i, children: (0, s.jsx)(R.z, { text: n ?? "" }) });
}
let ev = l.memo(function (e) {
    let { message: n, channel: t, content: l, hasMediaAttachment: a, hasUnreads: r } = e,
        { isBlocked: c, isIgnored: d } = (0, m.cf)([J.A], () => ({
            isBlocked: null != n && J.A.isBlockedForMessage(n),
            isIgnored: null != n && J.A.isIgnoredForMessage(n),
        })),
        o = (0, m.bG)([et.A], () => et.A.isLoading(t.id)),
        u = (0, m.bG)([Z.A], () => Z.A.can(eu.xBc.MANAGE_MESSAGES, t)),
        h = H.gs.useSetting(),
        x = null;
    if (c)
        x = (0, s.jsx)(A.E, {
            className: em.Wv,
            variant: "body-sm/medium",
            color: "text-muted",
            children: eh.intl.string(eh.t.Lkp2fB),
        });
    else if (d)
        x = (0, s.jsx)(A.E, {
            className: em.Wv,
            variant: "body-sm/medium",
            color: "text-muted",
            children: eh.intl.string(eh.t.yWK7ZM),
        });
    else {
        let { contentPlaceholder: e, renderedContent: t } =
            null == n
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, D.o)(n, l, c, d, i()(em.BK, ex.tZ, ex.__invalid_smallFontSize), {
                      leadingIconClass: em.aG,
                      trailingIconClass: em.sl,
                      iconSize: 20,
                  });
        x =
            null != t
                ? (0, s.jsx)(A.E, {
                      variant: "body-sm/semibold",
                      color: r ? "text-default" : "text-muted",
                      children: t,
                  })
                : a
                  ? null
                  : (0, s.jsx)(A.E, {
                        tag: "span",
                        variant: "body-sm/medium",
                        color: r ? "text-default" : "text-muted",
                        className: em.BK,
                        children: null == n ? (o ? null : eh.intl.string(eh.t.mE3KJN)) : e,
                    });
    }
    let g = (0, B.A)(h, u);
    return (0, s.jsxs)(K.Bs.Provider, {
        value: g,
        children: [
            !c && (0, s.jsx)(ei.A, { channel: t, message: n, renderColon: null != x, hasUnreads: r }),
            (0, s.jsx)(j.M, { className: em.JY, children: x }),
        ],
    });
});
function eA(e) {
    let { channel: n, facepileRef: t, firstMessage: l } = e,
        a = (0, w.m)(n.id),
        i = l?.reactions != null && l.reactions.length > 0;
    return (0, s.jsxs)("div", {
        className: em.qr,
        children: [
            i || null == l ? null : (0, s.jsx)(eN, { firstMessage: l, channel: n }),
            null == l ? null : (0, s.jsx)(eb, { firstMessage: l, channel: n }),
            (0, s.jsx)(ep, { channel: n, iconSize: 14 }),
            (0, s.jsx)("span", { className: em.xE, children: "\u2022" }),
            a.length > 0
                ? (0, s.jsxs)("div", {
                      className: em.IW,
                      children: [
                          (0, s.jsx)(eC, { channel: n, userIds: a, facepileRef: t }),
                          (0, s.jsx)("div", {
                              className: em.r$,
                              children: (0, s.jsx)(p.n, { themed: !0, dotRadius: 2 }),
                          }),
                          (0, s.jsx)(C.Ay, { channel: n, className: em.mD, renderDots: !1, renderSlowmode: !1 }),
                      ],
                  })
                : (0, s.jsx)(ey, { channel: n }),
        ],
    });
}
function ep(e) {
    let { channel: n, iconSize: t, showReadState: l = !1 } = e,
        { messageCountText: a, unreadCount: r } = (0, ee.k6)(n);
    return (0, s.jsxs)("div", {
        className: i()(em.Mv, { [em.hT]: l && null == r }),
        children: [
            (0, s.jsx)("span", {
                className: em.SZ,
                children: (0, s.jsx)(N.ChatIcon, { size: "custom", color: "currentColor", width: t, height: t }),
            }),
            "number" == typeof a
                ? (0, s.jsx)(P.A, { value: a, digitWidth: 9, className: em.gv })
                : (0, s.jsx)("div", { className: em.gv, children: a }),
            null == r
                ? null
                : (0, s.jsxs)(A.E, {
                      className: em.bU,
                      variant: "body-sm/semibold",
                      color: "text-brand",
                      children: ["(", eh.intl.format(eh.t.z3PEth, { count: r }), ")"],
                  }),
        ],
    });
}
function eN(e) {
    let { firstMessage: n, channel: t } = e,
        l = (0, m.bG)([V.A], () => V.A.getChannel(t.parent_id)),
        a = (0, ee.Ck)(l),
        { disableReactionCreates: i, isLurking: r, isPendingMember: c } = (0, U.A)(t);
    return null == a || i
        ? null
        : (0, s.jsx)(O.q, {
              className: em.vC,
              message: n,
              readOnly: t.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: r,
              isPendingMember: c,
              emoji: a,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: W.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function eb(e) {
    let { firstMessage: n, channel: t } = e,
        l = (0, ee.lQ)(n),
        { disableReactionUpdates: a, isLurking: i, isPendingMember: r } = (0, U.A)(t);
    return null == l
        ? null
        : (0, s.jsx)(
              O.q,
              {
                  className: em.vC,
                  message: n,
                  readOnly: a || t.isArchivedLockedThread(),
                  isLurking: i,
                  isPendingMember: r,
                  useChatFontScaling: !1,
                  type: l.burst_count > 0 ? W.v.BURST : W.v.NORMAL,
                  emojiSize: "reaction",
                  emojiSizeTooltip: "reaction",
                  ...l,
              },
              `${l.emoji.id ?? 0}:${l.emoji.name}`,
          );
}
function ey(e) {
    let { channel: n } = e,
        { sortOrder: t } = (0, X.R)(n.parent_id),
        l = (0, ee.Mw)(n, t),
        a = n.threadMetadata?.createTimestamp,
        i = null == a ? null : eh.intl.formatToPlainString(eh.t["13euCd"], { timestamp: (0, Y.i$)(o()(a), "LLLL") });
    return (0, s.jsx)(b.m, {
        text: i,
        children: (0, s.jsx)(A.E, {
            className: em.__invalid_activityText,
            variant: "body-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function eC(e) {
    let { channel: n, userIds: t, facepileRef: l } = e,
        a = (0, ee.$I)(n, t);
    return (0, s.jsx)("div", {
        ref: l,
        children: (0, s.jsx)(k.Ay, {
            className: em.__invalid_facepile,
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
function eS(e) {
    return e.startsWith("data:") || e.startsWith("blob:");
}
function eM(e) {
    let { src: n, size: t, alt: l, className: a } = e;
    return (0, s.jsx)(I.A, {
        src: n,
        alt: l ?? eh.intl.string(eh.t.FlNoSV),
        width: t.width,
        height: t.height,
        className: a,
        preload: "metadata",
    });
}
function ek(e) {
    let { firstMedia: n, shouldObscure: t, obscureReason: l, shouldShowAgeVerification: a } = e,
        r = (0, m.bG)([Q.A], () => Q.A.isFocused()),
        c = (0, F.ge)(n.src),
        d = H.kt.useSetting(),
        o = (0, G.rx)(l),
        { src: u, width: h, height: x, alt: g } = n;
    return a
        ? (0, s.jsx)("div", {
              "aria-label": o ?? g ?? eh.intl.string(eh.t.hqwnc2),
              className: i()(em.iT, em.nh),
              style: { maxWidth: 72, maxHeight: 72, height: x, width: h },
          })
        : eS(u)
          ? (0, s.jsx)(y._, {
                src: u,
                width: h,
                height: x,
                minWidth: 72,
                minHeight: 72,
                alt: null != g && t ? o : g,
                className: em.iT,
                imageClassName: i()(em.LW, { [em.cd]: t }),
                children: n.isVideo ? eM : void 0,
            })
          : (0, q.LL)({
                src: u,
                width: h,
                height: x,
                minWidth: 72,
                minHeight: 72,
                alt: null != g && t ? o : g,
                autoPlay: d,
                animated: c && !t && r,
                srcIsAnimated: n.srcIsAnimated,
                containerClassName: em.iT,
                imageClassName: i()(em.LW, { [em.cd]: t }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function eL(e) {
    let { channel: n, firstMedia: t } = e,
        l = eS(t.src),
        a = (0, B.z)(n),
        [i, r] = (0, G.eJ)({ media: l ? null : t, channel: n }),
        c = l ? t.spoiler && a : i,
        d = l && t.spoiler ? z.Oc.SPOILER : r,
        o = (0, T.qZ)(d);
    return (0, s.jsx)(j.M, {
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
                (0, s.jsx)(ek, { firstMedia: t, shouldObscure: c, obscureReason: d, shouldShowAgeVerification: o }),
                c && (0, s.jsx)(el.A, { iconClassname: em.yo, obscureReason: d }),
            ],
        }),
    });
}

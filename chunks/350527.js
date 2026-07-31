n.d(t, {
    NA: () => ep,
    $k: () => eN,
    gL: () => ey,
    T5: () => eg,
    cn: () => eC,
    Ay: () => ex,
    Co: () => em,
    hf: () => ef,
});
var s = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    r = n(284009),
    c = n.n(r),
    o = n(989349),
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
    N = n(834730),
    p = n(863610),
    C = n(534890),
    b = n(866665),
    y = n(144165),
    M = n(119031),
    S = n(765671),
    _ = n(738768),
    k = n(104171),
    L = n(31720),
    P = n(847599),
    E = n(114166),
    T = n(47167),
    w = n(810181),
    I = n(390248),
    R = n(59318),
    z = n(294520),
    B = n(505527),
    F = n(863439),
    G = n(467073),
    U = n(34337),
    W = n(831688),
    D = n(308334),
    q = n(302031),
    O = n(885386),
    K = n(761640),
    $ = n(734057),
    H = n(576705),
    J = n(994500),
    V = n(531685),
    Z = n(58703),
    Q = n(422844),
    Y = n(435470),
    X = n(473503),
    ee = n(969043),
    et = n(768953),
    en = n(710948),
    es = n(218152),
    el = n(313880),
    ea = n(52933),
    ei = n(504261),
    er = n(505234),
    ec = n(652215),
    eo = n(838541),
    ed = n(375708),
    eu = n(712590),
    eh = n(742715);
let em = 72,
    eg = 72,
    ex = l.memo(function (e) {
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
                firstMessage: N,
                content: p,
                media: C,
            } = (function (e) {
                let { threadId: t, overrideMedia: n } = e,
                    s = (0, m.bG)([$.A], () => $.A.getChannel(t));
                c()(null != s, "the thread should not be null here, a store must have missed an update");
                let l = (0, m.bG)([K.Ay], () => K.Ay.getCurrentSidebarChannelId(s.parent_id) === s.id),
                    { firstMessage: a } = (0, X.OA)(s),
                    { content: i, firstMedia: r } = (0, Y.gk)({ firstMessage: a }),
                    { messageCountText: o } = (0, Y.k6)(s);
                return { channel: s, isOpen: l, messageCount: o, firstMessage: a, content: i, media: n ?? r };
            })({ threadId: t, overrideMedia: r }),
            b = (0, T.Ay)(g),
            { ref: y, height: M } = (0, S.Ay)(),
            _ = (0, es.kU)((e) => e.setCardHeight, u.x);
        l.useEffect(() => {
            null != M && _(t, M);
        }, [M, _, t]),
            l.useEffect(() => {
                a?.(y.current, t);
            }, [y, a, t]);
        let k = l.useRef(null),
            { handleLeftClick: L, handleRightClick: P } = (0, er.A)({ facepileRef: k, goToThread: n, channel: g }),
            { role: E, onFocus: w, ...I } = (0, h.rm)(t),
            { isFocused: R, handleFocus: z, handleBlur: B } = (0, ei.A)(w);
        return (0, s.jsxs)("div", {
            ref: y,
            "data-item-id": t,
            onClick: L,
            onContextMenu: P,
            className: i()(eu.kL, o, { [eu.nT]: j }),
            children: [
                (0, s.jsx)(x.D, {
                    onClick: L,
                    focusProps: { ringTarget: y },
                    onContextMenu: P,
                    "aria-label": ed.intl.formatToPlainString(ed.t.pgYN6c, { title: b ?? "", count: v }),
                    className: eu.Kv,
                    onFocus: z,
                    onBlur: B,
                    ...I,
                }),
                (0, s.jsxs)("div", {
                    className: eu.kb,
                    children: [
                        (0, s.jsx)(A.F, {
                            children: (0, s.jsx)(eA, {
                                channel: g,
                                firstMessage: N,
                                content: p,
                                hasMediaAttachment: null != C,
                                containerWidth: d,
                            }),
                        }),
                        (0, s.jsx)(f.M, {
                            enabled: !R,
                            children: (0, s.jsx)(ev, { channel: g, firstMessage: N, facepileRef: k }),
                        }),
                    ],
                }),
                N?.blocked || null == C ? null : (0, s.jsx)(eS, { channel: g, firstMedia: C }),
            ],
        });
    });
function eA(e) {
    let { channel: t, firstMessage: n, content: a, hasMediaAttachment: r, containerWidth: c } = e,
        { isNew: o, hasUnreads: d } = (0, Y.X5)(t),
        u = ef(t),
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
        className: eu.rf,
        children: [
            (0, s.jsx)(ea.Ay, { channel: t }),
            (0, s.jsx)("div", {
                className: i()(eu.wx, { [eu.qN]: m }),
                children: (0, s.jsxs)("div", {
                    className: eu.TK,
                    children: [
                        (0, s.jsx)(j.D, {
                            variant: "heading-lg/semibold",
                            color: d ? "text-strong" : "text-muted",
                            lineClamp: 2,
                            className: eu.o$,
                            children: (0, s.jsxs)("span", {
                                ref: h,
                                children: [
                                    u,
                                    o &&
                                        (0, s.jsx)("span", {
                                            className: eu.pr,
                                            children: (0, s.jsx)(v.Lp, {
                                                className: eu.Ad,
                                                color: g.A.unsafe_rawColors.BRAND_260.css,
                                                text: ed.intl.string(ed.t.y2b7CA),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                        o &&
                            m &&
                            (0, s.jsx)(v.Lp, {
                                className: eu.Ad,
                                color: g.A.unsafe_rawColors.BRAND_260.css,
                                text: ed.intl.string(ed.t.y2b7CA),
                            }),
                    ],
                }),
            }),
            (0, s.jsx)("div", {
                className: eu.iU,
                children: (0, s.jsx)(ej, { channel: t, message: n, content: a, hasMediaAttachment: r, hasUnreads: d }),
            }),
        ],
    });
}
function ef(e) {
    let t = (0, T.Ay)(e),
        n = (0, m.bG)([et.A], () => et.A.getHasSearchResults(e.parent_id)),
        a = (0, m.bG)([et.A], () => et.A.getSearchQuery(e.parent_id)),
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
let ej = l.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: a, hasUnreads: r } = e,
        { isBlocked: c, isIgnored: o } = (0, m.cf)([J.A], () => ({
            isBlocked: null != t && J.A.isBlockedForMessage(t),
            isIgnored: null != t && J.A.isIgnoredForMessage(t),
        })),
        d = (0, m.bG)([ee.A], () => ee.A.isLoading(n.id)),
        u = (0, m.bG)([H.A], () => H.A.can(ec.xBc.MANAGE_MESSAGES, n)),
        h = O.gs.useSetting(),
        g = null;
    if (c)
        g = (0, s.jsx)(N.E, {
            className: eu.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: ed.intl.string(ed.t.Lkp2fB),
        });
    else if (o)
        g = (0, s.jsx)(N.E, {
            className: eu.Wv,
            variant: "text-sm/medium",
            color: "text-muted",
            children: ed.intl.string(ed.t.yWK7ZM),
        });
    else {
        let { contentPlaceholder: e, renderedContent: n } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, D.o)(t, l, c, o, i()(eu.BK, eh.tZ, eh.__invalid_smallFontSize), {
                      leadingIconClass: eu.aG,
                      trailingIconClass: eu.sl,
                      iconSize: eo.eJ,
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
                        className: eu.BK,
                        children: null == t ? (d ? null : ed.intl.string(ed.t.mE3KJN)) : e,
                    });
    }
    return (0, s.jsxs)(q.Bs.Provider, {
        value: (0, F.A)(h, u),
        children: [
            !c && (0, s.jsx)(el.A, { channel: n, message: t, renderColon: null != g, hasUnreads: r }),
            (0, s.jsx)(f.M, { className: eu.JY, children: g }),
        ],
    });
});
function ev(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        a = (0, w.m)(t.id),
        i = l?.reactions != null && l.reactions.length > 0;
    return (0, s.jsxs)("div", {
        className: eu.qr,
        children: [
            i || null == l ? null : (0, s.jsx)(ep, { firstMessage: l, channel: t }),
            null == l ? null : (0, s.jsx)(eC, { firstMessage: l, channel: t }),
            (0, s.jsx)(eN, { channel: t, iconSize: 14 }),
            (0, s.jsx)("span", { className: eu.xE, children: "\u2022" }),
            a.length > 0
                ? (0, s.jsxs)("div", {
                      className: eu.IW,
                      children: [
                          (0, s.jsx)(ey, { channel: t, userIds: a, facepileRef: n }),
                          (0, s.jsx)("div", {
                              className: eu.r$,
                              children: (0, s.jsx)(p.n, { themed: !0, dotRadius: 2 }),
                          }),
                          (0, s.jsx)(M.Ay, { channel: t, className: eu.mD, renderDots: !1, renderSlowmode: !1 }),
                      ],
                  })
                : (0, s.jsx)(eb, { channel: t }),
        ],
    });
}
function eN(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: a, unreadCount: r } = (0, Y.k6)(t);
    return (0, s.jsxs)("div", {
        className: i()(eu.Mv, { [eu.hT]: l && null == r }),
        children: [
            (0, s.jsx)("span", {
                className: eu.SZ,
                children: (0, s.jsx)(C.o, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof a
                ? (0, s.jsx)(E.A, { value: a, digitWidth: 9, className: eu.gv })
                : (0, s.jsx)("div", { className: eu.gv, children: a }),
            null == r
                ? null
                : (0, s.jsxs)(N.E, {
                      className: eu.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", ed.intl.format(ed.t.z3PEth, { count: r }), ")"],
                  }),
        ],
    });
}
function ep(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, m.bG)([$.A], () => $.A.getChannel(n.parent_id)),
        a = (0, Y.Ck)(l),
        { disableReactionCreates: i, isLurking: r, isPendingMember: c } = (0, G.A)(n);
    return null == a || i
        ? null
        : (0, s.jsx)(W.q, {
              className: eu.vC,
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
function eC(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, Y.lQ)(t),
        { disableReactionUpdates: a, isLurking: i, isPendingMember: r } = (0, G.A)(n);
    return null == l
        ? null
        : (0, s.jsx)(
              W.q,
              {
                  className: eu.vC,
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
function eb(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, Q.R)(t.parent_id),
        l = (0, Y.Mw)(t, n),
        a = t.threadMetadata?.createTimestamp,
        i = null == a ? null : ed.intl.formatToPlainString(ed.t["13euCd"], { timestamp: (0, Z.i$)(d()(a), "LLLL") });
    return (0, s.jsx)(b.m, {
        text: i,
        children: (0, s.jsx)(N.E, {
            className: eu.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function ey(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        a = (0, Y.$I)(t, n);
    return (0, s.jsx)("div", {
        ref: l,
        children: (0, s.jsx)(k.Ay, {
            className: eu.__invalid_facepile,
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
function eM(e) {
    let { firstMedia: t, shouldObscure: n, obscureReason: l, shouldShowAgeVerification: a } = e,
        r = (0, m.bG)([V.A], () => V.A.isFocused()),
        c = (0, R.ge)(t.src),
        o = O.kt.useSetting(),
        d = (0, z.rx)(l),
        { src: u, width: h, height: g, alt: x } = t;
    return a
        ? (0, s.jsx)("div", {
              "aria-label": d ?? x ?? ed.intl.string(ed.t.hqwnc2),
              className: i()(eu.iT, eu.nh),
              style: { maxWidth: eg, maxHeight: em, height: g, width: h },
          })
        : u.startsWith("data:")
          ? (0, s.jsx)(y._, {
                src: u,
                width: h,
                height: g,
                minWidth: eg,
                minHeight: em,
                alt: null != x && n ? d : x,
                className: eu.iT,
                imageClassName: i()(eu.LW, { [eu.cd]: n }),
            })
          : (0, U.LL)({
                src: u,
                width: h,
                height: g,
                minWidth: eg,
                minHeight: em,
                alt: null != x && n ? d : x,
                autoPlay: o,
                animated: c && !n && r,
                srcIsAnimated: t.srcIsAnimated,
                containerClassName: eu.iT,
                imageClassName: i()(eu.LW, { [eu.cd]: n }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function eS(e) {
    let { channel: t, firstMedia: n } = e,
        [l, a] = (0, z.eJ)({ media: n, channel: t }),
        i = (0, I.qZ)(a);
    return (0, s.jsx)(f.M, {
        enabled: !0,
        children: (0, s.jsxs)("div", {
            className: eu.pV,
            onClick: function (e) {
                e.stopPropagation(),
                    i &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        L.A.showAgeVerificationGetStartedModal({ entryPoint: P.q1.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, s.jsx)(eM, { firstMedia: n, shouldObscure: l, obscureReason: a, shouldShowAgeVerification: i }),
                l && (0, s.jsx)(en.A, { iconClassname: eu.yo, obscureReason: a }),
            ],
        }),
    });
}

(n.r(t), n.d(t, { CreateGameInvitePostButton: () => sH, default: () => sk }));
var l,
    i = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(34391),
    c = n.n(o),
    d = n(462180),
    u = n(837381),
    m = n(116903),
    h = n(741918),
    g = n(371444),
    x = n(855986),
    f = n(862482),
    j = n(534514),
    v = n(707554),
    p = n(312138),
    b = n(140735),
    C = n(297778),
    A = n(475825),
    N = n(834730),
    y = n(939249),
    E = n(821609),
    S = n(475358),
    I = n(695366),
    T = n(431527),
    M = n(265872),
    k = n(900797),
    R = n(847374),
    _ = n(866665),
    w = n(112173),
    P = n(738876),
    D = n(765671),
    L = n(964486),
    O = n(775602),
    G = n(47167),
    F = n(890283),
    U = n(769015),
    z = n(807632),
    H = n(371115),
    B = n(409626),
    V = n(692969),
    W = n(870136),
    $ = n(575293),
    q = n(857071),
    K = n(228098),
    Q = n(157259),
    Y = n(284305),
    X = n(212007),
    J = n(374710),
    Z = n(715757),
    ee = n(284009),
    et = n.n(ee),
    en = n(536637),
    el = n.n(en),
    ei = n(346055),
    es = n(97808),
    ea = n(778712),
    er = n(138134),
    eo = n(805251),
    ec = n(863610),
    ed = n(534890),
    eu = n(251843),
    em = n(620014),
    eh = n(104171),
    eg = n(871309),
    ex = n(171576),
    ef = n(114166),
    ej = n(810181),
    ev = n(390248),
    ep = n(422844),
    eb = n(435470),
    eC = n(473503),
    eA = n(256265),
    eN = n(969043),
    ey = n(710948),
    eE = n(218152),
    eS = n(52933),
    eI = n(504261),
    eT = n(505234),
    eM = n(387408),
    ek = n(273185),
    eR = n(294520),
    e_ = n(505527),
    ew = n(863439),
    eP = n(467073),
    eD = n(383055),
    eL = n(30492),
    eO = n(448368),
    eG = n(538355),
    eF = n(302031),
    eU = n(253932),
    ez = n(799704),
    eH = n(734057),
    eB = n(596344),
    eV = n(576705),
    eW = n(967198),
    e$ = n(287809),
    eq = n(531685),
    eK = n(5377),
    eQ = n(763754),
    eY = n(447215);
let eX = function (e) {
    let { message: t, originalAuthor: n, channel: l } = e,
        s = (0, eQ.d8)(n, l),
        a = s?.nick ?? n?.username ?? "",
        r = (0, eY.P)({
            user: n ?? void 0,
            channelId: l.id,
            guildId: l.guild_id,
            messageId: t?.id,
            stopPropagation: !0,
        })(s ?? void 0)(a, l.id);
    return (0, i.jsx)(N.E, { variant: "body-md/semibold", children: r });
};
var eJ = n(652215);
n(838541);
var eZ = n(792996),
    e0 = n(948389),
    e1 = n(223139),
    e2 = n(165648);
let e4 = s.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: l, overrideMedia: a, className: o } = e,
        {
            channel: c,
            isOpen: m,
            messageCount: h,
            content: g,
            firstMessage: f,
            media: j,
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                l = (0, x.bG)([eH.A], () => eH.A.getChannel(t));
            et()(null != l, "the thread should not be null here, a store must have missed an update");
            let i = (0, x.bG)([ez.Ay], () => ez.Ay.getCurrentSidebarChannelId(l.parent_id) === l.id),
                { firstMessage: a } = (0, eC.OA)(l),
                r = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: l = !0 } = e,
                        i = s.useMemo(() => (null != t ? (0, eM.A)(t, t?.messageSnapshots[0]) : null), [t]),
                        a = i?.content != null && "" !== i.content,
                        { hasSpoilerEmbeds: r, content: o } = (0, eG.A)(a ? i : null, {
                            formatInline: n,
                            noStyleAndInteraction: l,
                            allowHeading: !0,
                            allowList: !0,
                        }),
                        c = (0, eA.Ky)(t, r),
                        d = (0, eA.L_)(t, r);
                    return null == t ? null : { hasSpoilerEmbeds: r, content: o, firstMedia: c, firstMediaIsEmbed: d };
                })({ firstMessage: a }),
                o = r?.content,
                c = r?.firstMedia,
                { messageCountText: d } = (0, eb.k6)(l);
            return { channel: l, isOpen: i, messageCount: d, firstMessage: a, content: o, media: n ?? c };
        })({ threadId: t, overrideMedia: a }),
        p = (0, G.Ay)(c);
    (0, Z.vb)(f);
    let b = (0, x.bG)([e$.default, eB.A], () => {
            let e = e$.default.getUser(f?.messageSnapshots[0]?.moderatorReport?.reported_user_id);
            if (null != e) return e;
            if (f?.messageReference?.channel_id != null && f?.messageReference?.message_id != null) {
                let e = eB.A.getMessage(f?.messageReference?.channel_id, f?.messageReference?.message_id);
                if (null != e) return e.author;
            }
            return null;
        }),
        { ref: C, height: A } = (0, D.Ay)(),
        N = (0, eE.kU)((e) => e.setCardHeight, d.x);
    (s.useEffect(() => {
        null != A && N(t, A);
    }, [A, N, t]),
        s.useEffect(() => {
            l?.(C.current, t);
        }, [C, l, t]));
    let E = s.useRef(null),
        { handleLeftClick: S, handleRightClick: I } = (0, eT.A)({ facepileRef: E, goToThread: n, channel: c }),
        { role: T, onFocus: M, ...k } = (0, u.rm)(t),
        { isFocused: R, handleFocus: _, handleBlur: w } = (0, eI.A)(M);
    return (0, i.jsxs)("div", {
        ref: C,
        "data-item-id": t,
        onClick: S,
        onContextMenu: I,
        className: r()(e1.kL, e0.kL, o, { [e1.nT]: m }),
        children: [
            (0, i.jsx)(y.D, {
                onClick: S,
                focusProps: { ringTarget: C },
                onContextMenu: I,
                "aria-label": eZ.intl.formatToPlainString(eZ.t.pgYN6c, { title: p, count: h }),
                className: e1.Kv,
                onFocus: _,
                onBlur: w,
                ...k,
            }),
            (0, i.jsxs)("div", {
                className: e1.kb,
                children: [
                    (0, i.jsx)(v.F, {
                        children: (0, i.jsxs)("div", {
                            className: e0.fx,
                            children: [
                                (0, i.jsx)(e3, {
                                    channel: c,
                                    firstMessage: f,
                                    content: g,
                                    hasMediaAttachment: null != j,
                                    originalAuthor: b,
                                }),
                                f?.blocked || null == j ? null : (0, i.jsx)(tn, { channel: c, firstMedia: j }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(ei.M, {
                        enabled: !R,
                        children: (0, i.jsx)(e5, { channel: c, firstMessage: f, facepileRef: E }),
                    }),
                ],
            }),
        ],
    });
});
function e3(e) {
    let { channel: t, firstMessage: n, content: l, hasMediaAttachment: s, originalAuthor: a } = e,
        { hasUnreads: o } = (0, eb.X5)(t);
    return (0, i.jsxs)("div", {
        className: r()(e0.rf, e1.rf),
        children: [
            (0, i.jsx)(eS.Ay, { channel: t }),
            (0, i.jsx)("div", {
                className: (e1.iU, e0.iU),
                children: (0, i.jsx)(e6, {
                    channel: t,
                    message: n,
                    content: l,
                    hasMediaAttachment: s,
                    hasUnreads: o,
                    originalAuthor: a,
                }),
            }),
        ],
    });
}
let e6 = s.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: s, hasUnreads: a, originalAuthor: o } = e,
        c = (0, x.bG)([eN.A], () => eN.A.isLoading(n.id)),
        d = (0, x.bG)([eV.A], () => eV.A.can(eJ.xBc.MANAGE_MESSAGES, n)),
        u = eU.gs.useSetting(),
        m = (0, x.bG)([eW.A], () => eW.A.getGuildId()),
        { contentPlaceholder: h, renderedContent: g } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, eO.o)(t, l, !1, !1, r()(e1.BK, e0.BK, e2.tZ, e2.__invalid_smallFontSize), {
                      leadingIconClass: e1.aG,
                      trailingIconClass: e1.sl,
                      iconSize: 20,
                  }),
        f =
            null != g
                ? (0, i.jsx)(N.E, { variant: "body-md/normal", children: g })
                : s
                  ? null
                  : (0, i.jsx)(N.E, {
                        tag: "span",
                        variant: "body-sm/medium",
                        color: a ? "text-default" : "text-muted",
                        className: r()(e1.BK, e0.BK),
                        "aria-label": "",
                        children: null == t ? (c ? null : eZ.intl.string(eZ.t.mE3KJN)) : h,
                    }),
        j = (0, ew.A)(u, d);
    return (0, i.jsxs)(eF.Bs.Provider, {
        value: j,
        children: [
            null != o
                ? (0, i.jsx)(es.eu, {
                      size: ea._3.SIZE_40,
                      src: o.getAvatarURL(m, (0, ea.FT)(ea._3.SIZE_40)),
                      "aria-label": "",
                      className: e0.Nd,
                  })
                : null,
            (0, i.jsxs)("div", {
                className: e0.IF,
                children: [
                    (0, i.jsx)(eX, { channel: n, originalAuthor: o, message: t }),
                    (0, i.jsx)(ei.M, { className: e1.JY, children: f }),
                ],
            }),
        ],
    });
});
function e5(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        { isNew: s } = (0, eb.X5)(t),
        a = (0, G.Ay)(t),
        r = (0, ej.m)(t.id),
        o = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: e0.qr,
        children: [
            (0, i.jsxs)("div", {
                className: e0.JS,
                children: [
                    (0, i.jsx)(er.FlagIcon, { size: "custom", width: 14, height: 14 }),
                    (0, i.jsx)(N.E, { variant: "body-sm/medium", children: a }),
                    s
                        ? (0, i.jsx)("div", {
                              className: e0.Ad,
                              children: (0, i.jsx)(eo.E, { type: "new", variant: "primary" }),
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: e0.PQ,
                children: [
                    o || null == l ? null : (0, i.jsx)(e8, { firstMessage: l, channel: t }),
                    (0, i.jsx)(e7, { channel: t, iconSize: 14 }),
                    (0, i.jsx)("span", { className: e1.xE, children: "\u2022" }),
                    r.length > 0
                        ? (0, i.jsxs)("div", {
                              className: e1.IW,
                              children: [
                                  (0, i.jsx)(te, { channel: t, userIds: r, facepileRef: n }),
                                  (0, i.jsx)("div", {
                                      className: e1.r$,
                                      children: (0, i.jsx)(ec.n, { themed: !0, dotRadius: 2 }),
                                  }),
                                  (0, i.jsx)(em.Ay, { channel: t, className: e1.mD, renderDots: !1 }),
                              ],
                          })
                        : (0, i.jsx)(e9, { channel: t }),
                ],
            }),
        ],
    });
}
function e7(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: s, unreadCount: a } = (0, eb.k6)(t);
    return (0, i.jsxs)("div", {
        className: r()(e1.Mv, { [e1.hT]: l && null == a }),
        children: [
            (0, i.jsx)("span", {
                className: e1.SZ,
                children: (0, i.jsx)(ed.ChatIcon, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof s
                ? (0, i.jsx)(ef.A, { value: s, digitWidth: 9, className: e1.gv })
                : (0, i.jsx)("div", { className: e1.gv, children: s }),
            null == a
                ? null
                : (0, i.jsxs)(N.E, {
                      className: e1.bU,
                      variant: "body-sm/semibold",
                      color: "text-brand",
                      children: ["(", eZ.intl.format(eZ.t.z3PEth, { count: a }), ")"],
                  }),
        ],
    });
}
function e8(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, x.bG)([eH.A], () => eH.A.getChannel(n.parent_id)),
        s = (0, eb.Ck)(l),
        { disableReactionCreates: a, isLurking: r, isPendingMember: o } = (0, eP.A)(n);
    return null == s || a
        ? null
        : (0, i.jsx)(eL.q, {
              className: e1.vC,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: r,
              isPendingMember: o,
              emoji: s,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: e_.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function e9(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, ep.R)(t.parent_id),
        l = (0, eb.Mw)(t, n),
        s = t.threadMetadata?.createTimestamp,
        a = null == s ? null : eZ.intl.formatToPlainString(eZ.t["13euCd"], { timestamp: (0, eK.i$)(el()(s), "LLLL") });
    return (0, i.jsx)(_.m, {
        text: a,
        children: (0, i.jsx)(N.E, {
            className: e1.__invalid_activityText,
            variant: "body-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function te(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        s = (0, eb.$I)(t, n);
    return (0, i.jsx)("div", {
        ref: l,
        children: (0, i.jsx)(eh.Ay, {
            className: e1.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: s,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0,
        }),
    });
}
function tt(e) {
    let t,
        n,
        { firstMedia: l, shouldObscure: s, obscureReason: a, shouldShowAgeVerification: o } = e,
        c = (0, x.bG)([eq.A], () => eq.A.isFocused()),
        d = (0, ek.ge)(l.src),
        u = eU.kt.useSetting(),
        m = (0, eR.rx)(a),
        { src: h, width: g, height: f, alt: j } = l;
    return (f > g ? (n = 72) : (t = 72), o)
        ? (0, i.jsx)("div", {
              "aria-label": m ?? j ?? eZ.intl.string(eZ.t.hqwnc2),
              className: r()(e1.iT, e1.nh),
              style: { maxWidth: t, maxHeight: n, height: f, width: g },
          })
        : h.startsWith("data:")
          ? (0, i.jsx)(eu._, {
                src: h,
                maxHeight: t,
                maxWidth: n,
                width: g,
                height: f,
                alt: null != j && s ? m : j,
                className: e1.iT,
                imageClassName: r()({ [e1.cd]: s, [e1.LW]: !0 }),
            })
          : (0, eD.LL)({
                src: h,
                maxHeight: t,
                maxWidth: n,
                width: g,
                height: f,
                alt: null != j && s ? m : j,
                autoPlay: u,
                animated: d && !s && c,
                srcIsAnimated: l.srcIsAnimated,
                containerClassName: e1.iT,
                imageClassName: r()({ [e1.cd]: s }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function tn(e) {
    let { channel: t, firstMedia: n } = e,
        [l, s] = (0, eR.eJ)({ media: n, channel: t }),
        a = (0, ev.qZ)(s);
    return (0, i.jsx)(ei.M, {
        enabled: !0,
        children: (0, i.jsxs)("div", {
            className: r()(e1.pV, e0.pV),
            onClick: function (e) {
                (e.stopPropagation(),
                    a &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        eg.A.showAgeVerificationGetStartedModal({ entryPoint: ex.q1.FORUM_POST_MEDIA_PREVIEW })));
            },
            children: [
                (0, i.jsx)(tt, { firstMedia: n, shouldObscure: l, obscureReason: s, shouldShowAgeVerification: a }),
                l && (0, i.jsx)(ey.A, { iconClassname: e1.yo, obscureReason: s }),
            ],
        }),
    });
}
var tl = n(378570),
    ti = n(940382),
    ts = n(970278),
    ta = n(424798),
    tr = n(406704),
    to = n(747926),
    tc = n(31717),
    td = n(834942),
    tu = n(309010),
    tm = n(522602),
    th = n(234320),
    tg = n(947094),
    tx = n(919577),
    tf = n(207777),
    tj = n(365971),
    tv = n(613999);
let tp = function (e) {
    let { guildId: t, channelId: n } = e,
        l = s.useRef(null),
        i = (0, tj.Xg)(),
        a = !eq.A.isFocused(i);
    return (
        s.useLayoutEffect(
            () => (
                null == l.current &&
                    ((l.current = new tv.Ay({ guildId: t, channelId: n, isPaused: a, windowId: i })),
                    l.current.initialize()),
                () => {
                    (l.current?.terminate(), (l.current = null));
                }
            ),
            [n, t, a, i],
        ),
        l.current
    );
};
var tb = n(853742);
n(321073);
var tC = n(120692),
    tA = n(136722),
    tN = n(646514),
    ty = n(192308),
    tE = n(866323),
    tS = n(789645),
    tI = n(446576),
    tT = n(26430),
    tM = n(885574),
    tk = n(812993),
    tR = n(933832),
    t_ = n(565787),
    tw = n(320448),
    tP = n(435183),
    tD = n(417454),
    tL = n(148719),
    tO = n(7689),
    tG = n(56059),
    tF = n(141628),
    tU = n(696986),
    tz = n(793574),
    tH = n(688810),
    tB = n(359800),
    tV = n(724302),
    tW = n(354817),
    t$ = n(296853),
    tq = n(922396);
function tK(e) {
    let { channel: t, tagFilter: n } = e,
        l = (0, tr.AI)(t),
        { application: s } = (0, z._k)(t.id);
    function a() {
        return (0, H.d)(t);
    }
    return n.size > 0
        ? (0, i.jsx)(tX, { tagFilter: n, canCreatePost: l, handleClickCreatePost: a })
        : (0, i.jsxs)("div", {
              className: t$.kL,
              children: [
                  (0, i.jsx)(j.D, {
                      variant: "heading-xl/semibold",
                      color: "text-default",
                      className: t$.DD,
                      children: eZ.intl.string(tW.default.NQechc),
                  }),
                  (0, i.jsxs)("ul", {
                      className: t$.Zu,
                      children: [
                          (0, i.jsx)(tY, {
                              icon: (0, i.jsx)(tO.MagnifyingGlassIcon, { size: "xs", color: tN.A.colors.ICON_SUBTLE }),
                              children: eZ.intl.string(tW.default.y5Bork),
                          }),
                          (0, i.jsx)(tY, {
                              icon: (0, i.jsx)(tG.ForumIcon, { size: "xs", color: tN.A.colors.ICON_SUBTLE }),
                              children: eZ.intl.string(tW.default.b77nl3),
                          }),
                          (0, i.jsx)(tQ, { application: s }),
                      ],
                  }),
                  l &&
                      (0, i.jsx)(E.$, {
                          variant: "primary",
                          size: "md",
                          text: eZ.intl.string(tW.default.QwW8zd),
                          onClick: a,
                      }),
              ],
          });
}
function tQ(e) {
    let { application: t } = e,
        { analyticsLocations: n } = (0, tH.Ay)(tz.A.GAME_INVITE_CHANNEL_EMPTY_STATE),
        { startAuthorization: l, hasAlreadyLinked: s, canStartAuthorization: a, fetched: r } = (0, tV.RD)(t),
        o = (0, tB.z)(l, s);
    if (!r) return null;
    let c = (0, i.jsx)(tF.ExperimentalGameControllerLinkIcon, { size: "xs", color: tN.A.colors.ICON_SUBTLE });
    return s
        ? (0, i.jsx)(tY, { icon: c, children: eZ.intl.string(tW.default.BSPpd4) })
        : a
          ? (0, i.jsx)(tY, {
                icon: c,
                children: eZ.intl.format(tW.default.XZapWG, { onClick: () => o({ analyticsLocations: n }) }),
            })
          : null;
}
function tY(e) {
    let { icon: t, children: n } = e;
    return (0, i.jsxs)("li", {
        className: t$.N4,
        children: [
            (0, i.jsx)("div", { className: t$.xH, children: t }),
            (0, i.jsx)(N.E, { variant: "body-sm/medium", color: "text-default", className: t$.oo, children: n }),
        ],
    });
}
function tX(e) {
    let { tagFilter: t, canCreatePost: n, handleClickCreatePost: l } = e;
    return (0, i.jsxs)("div", {
        className: tq.k,
        children: [
            (0, i.jsx)(j.D, {
                className: tq.w,
                variant: "heading-sm/semibold",
                children: eZ.intl.formatToPlainString(eZ.t.lvPci0, { numTags: t.size }),
            }),
            (0, i.jsx)(N.E, {
                color: "text-default",
                variant: "body-sm/normal",
                children: eZ.intl.formatToPlainString(tW.default.nJzi8D, { numTags: t.size }),
            }),
            n &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tU.h, { size: 16 }),
                        (0, i.jsx)(E.$, { text: eZ.intl.string(tW.default.QwW8zd), variant: "secondary", onClick: l }),
                    ],
                }),
        ],
    });
}
var tJ = n(462887),
    tZ = n(811893),
    t0 = n(736653),
    t1 = n(303136),
    t2 = n(892110),
    t4 = n(29385),
    t3 = n(727419),
    t6 = n(71393),
    t5 = n(975571);
let t7 = { mass: 1, tension: 250, friction: 18, clamp: !0 };
var t8 = n(340990);
function t9(e) {
    let { handleHide: t } = e;
    return (0, i.jsx)(y.D, {
        onClick: t,
        className: t8.b,
        "aria-label": eZ.intl.string(eZ.t.WAI6xu),
        children: (0, i.jsx)(tS.XSmallIcon, { size: "md", color: "currentColor", className: t8.ut }),
    });
}
function ne(e) {
    let { username: t, title: n, videoSrc: l, messageCount: s, reaction: a, reactionCount: o, classname: c } = e;
    return (0, i.jsxs)("div", {
        className: r()(t8.IP, c),
        children: [
            (0, i.jsx)("div", {
                className: t8.Y6,
                children: (0, i.jsxs)("div", {
                    className: t8.wO,
                    children: [
                        (0, i.jsx)(N.E, { tag: "span", className: t8.cy, variant: "body-sm/semibold", children: t }),
                        (0, i.jsx)(N.E, {
                            variant: "body-xs/normal",
                            color: "text-default",
                            className: t8.SD,
                            children: eZ.intl.string(eZ.t.mA0IvI),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(j.D, {
                variant: "heading-sm/semibold",
                className: t8.DD,
                color: "text-strong",
                "aria-hidden": !0,
                children: n,
            }),
            (0, i.jsx)(tU.h, { size: 10 }),
            (0, i.jsx)(t1.A, { className: t8.Ki, src: l }),
            (0, i.jsx)(tU.h, { size: 10 }),
            (0, i.jsx)("div", {
                className: t8.qr,
                children: (0, i.jsxs)("div", {
                    className: t8.GD,
                    children: [
                        (0, i.jsxs)("div", {
                            className: t8.Mv,
                            children: [
                                (0, i.jsx)("span", {
                                    className: t8.SZ,
                                    children: (0, i.jsx)(ed.ChatIcon, { size: "xs", color: "currentColor" }),
                                }),
                                (0, i.jsx)(N.E, {
                                    variant: "body-xs/normal",
                                    color: "interactive-text-default",
                                    children: s,
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: t8.vi,
                            children: [
                                (0, i.jsx)("span", { role: "img", "aria-label": "", children: a }),
                                (0, i.jsx)(N.E, {
                                    variant: "body-xs/normal",
                                    color: "interactive-text-default",
                                    children: o,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
let nt = (e) => {
    let { channel: t } = e,
        n = (0, t0.Ay)(),
        l = (0, tJ.M)(n),
        a = (0, x.bG)([t6.A], () => t6.A.getGuild(t.guild_id)),
        o = (0, x.bG)([tg.A], () => tg.A.hasHidden(t.id)),
        c = (0, t4.e)({ guildId: t.guild_id, channelId: t.id }),
        { transitions: d, setVisible: u } = (function () {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tE.p)(e, {
                    keys: (e) => (e ? "shown" : "hidden"),
                    config: t7,
                    from: { opacity: 0 },
                    enter: { opacity: 1 },
                    leave: { opacity: 0 },
                    unique: !0,
                }),
                setVisible: t,
            };
        })(),
        m = s.useCallback(() => {
            (u(!1), tx.A.hideAdminOnboarding(t.id, !0));
        }, [t, u]);
    s.useEffect(() => {
        (0, t2.l)(t.id) || u(!o);
    }, [t, u, o]);
    let h = s.useMemo(
            () => [
                eZ.intl.string(eZ.t["8pEGAw"]),
                eZ.intl.string(eZ.t.jwfgDd),
                eZ.intl.string(eZ.t.mPKs27),
                eZ.intl.string(eZ.t.StRbvG),
            ],
            [],
        ),
        g = s.useMemo(
            () => [
                eZ.intl.string(eZ.t["m/b58M"]),
                eZ.intl.string(eZ.t.MuJSKw),
                eZ.intl.string(eZ.t["d/Wqvu"]),
                eZ.intl.string(eZ.t.GJklAw),
            ],
            [],
        );
    function f() {
        t3.A.open(t.guild_id, eJ.BEX.ROLE_SUBSCRIPTIONS);
    }
    let v = a?.features.has(eJ.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)
            ? eZ.intl.string(eZ.t.n0q7sI)
            : eZ.intl.string(eZ.t.QoYdie),
        p =
            (a?.features.has(eJ.GuildFeatures.CREATOR_MONETIZABLE) ||
                a?.features.has(eJ.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) ??
            !1,
        b = p ? eZ.intl.string(eZ.t["G/7ciZ"]) : eZ.intl.string(eZ.t.IFOiit),
        C = p ? eZ.intl.string(eZ.t.GjgQO1) : eZ.intl.string(eZ.t.E7AO6t);
    return (0, i.jsx)(i.Fragment, {
        children: d((e, t) =>
            t
                ? (0, i.jsxs)(tC.animated.div, {
                      style: e,
                      className: t8.kL,
                      children: [
                          (0, i.jsxs)("div", {
                              className: t8.U1,
                              children: [
                                  (0, i.jsxs)(N.E, {
                                      variant: "body-xs/normal",
                                      className: t8.l2,
                                      children: [
                                          (0, i.jsx)(tM.CircleInformationIcon, {
                                              size: "xxs",
                                              color: "currentColor",
                                              className: t8.Kk,
                                          }),
                                          eZ.intl.string(eZ.t.znhX2R),
                                      ],
                                  }),
                                  (0, i.jsx)(t9, { handleHide: m }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: t8.hQ,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: r()(t8.CT, p && t8.en),
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: t8.F2,
                                              children: (0, i.jsxs)("div", {
                                                  className: t8.IZ,
                                                  children: [
                                                      (0, i.jsx)(ne, {
                                                          username: eZ.intl.string(eZ.t.AkORco),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                                          title: eZ.intl.string(eZ.t.yO6Fxu),
                                                          messageCount: "34",
                                                          reaction: "\u26A1\uFE0F",
                                                          reactionCount: "724",
                                                          classname: t8.q6,
                                                      }),
                                                      (0, i.jsx)(ne, {
                                                          username: eZ.intl.string(eZ.t.DPg3YM),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                                          title: eZ.intl.string(eZ.t["R5XnC/"]),
                                                          messageCount: "34",
                                                          reactionCount: "84",
                                                          reaction: "\uD83D\uDC9E",
                                                          classname: t8.q6,
                                                      }),
                                                      (0, i.jsx)(ne, {
                                                          username: eZ.intl.string(eZ.t.KIelex),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                                          title: eZ.intl.string(eZ.t.pt88Vb),
                                                          messageCount: "7,103",
                                                          reaction: "\u26A1\uFE0F",
                                                          reactionCount: "724",
                                                          classname: t8.Ob,
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          (0, i.jsxs)("article", {
                                              className: t8.n$,
                                              children: [
                                                  (0, i.jsx)(j.D, {
                                                      variant: "heading-lg/semibold",
                                                      color: "text-strong",
                                                      children: b,
                                                  }),
                                                  (0, i.jsx)(tU.h, { size: 8 }),
                                                  (0, i.jsx)(N.E, {
                                                      variant: "body-md/normal",
                                                      color: "text-muted",
                                                      children: C,
                                                  }),
                                                  (0, i.jsx)(tU.h, { size: 16 }),
                                                  (0, i.jsxs)(y.D, {
                                                      onClick: () =>
                                                          open(t5.A.getCreatorSupportArticleURL(eJ.MVz.MEDIA_CHANNEL)),
                                                      className: t8.zy,
                                                      children: [
                                                          (0, i.jsx)(N.E, {
                                                              variant: "body-sm/medium",
                                                              color: "text-link",
                                                              children: eZ.intl.string(eZ.t.OahzBd),
                                                          }),
                                                          (0, i.jsx)(tZ.WindowLaunchIcon, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: t8.QI,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)(tU.h, { size: 16 }),
                                                  (0, i.jsx)("div", {
                                                      className: t8.Qq,
                                                      children: h.map((e) =>
                                                          (0, i.jsx)(
                                                              N.E,
                                                              {
                                                                  variant: "body-sm/medium",
                                                                  color: "text-default",
                                                                  className: t8.U0,
                                                                  children: e,
                                                              },
                                                              e,
                                                          ),
                                                      ),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  p &&
                                      (0, i.jsxs)("div", {
                                          className: r()(t8.CT, t8.Gw),
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: t8.F2,
                                                  children: (0, i.jsxs)("div", {
                                                      className: t8.kQ,
                                                      children: [
                                                          (0, i.jsx)("img", {
                                                              src: l
                                                                  ? "/assets/b58ce8ba4d6516a2.png"
                                                                  : "/assets/9ed42f4f17fd8793.png",
                                                              alt: "",
                                                              className: t8.JM,
                                                          }),
                                                          (0, i.jsx)("img", {
                                                              src: l
                                                                  ? "/assets/d0f129a0c1627f7a.png"
                                                                  : "/assets/fddfcda2eca5c8d4.png",
                                                              alt: "",
                                                              className: t8.JM,
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              (0, i.jsxs)("article", {
                                                  className: t8.n$,
                                                  children: [
                                                      (0, i.jsxs)(N.E, {
                                                          variant: "footnote/semibold",
                                                          className: t8.X4,
                                                          children: [
                                                              eZ.intl.string(eZ.t.NChGwy),
                                                              " ",
                                                              (0, i.jsx)("span", {
                                                                  role: "img",
                                                                  "aria-label": "",
                                                                  children: "\uD83D\uDD25",
                                                              }),
                                                          ],
                                                      }),
                                                      (0, i.jsx)(tU.h, { size: 10 }),
                                                      (0, i.jsx)(j.D, {
                                                          variant: "heading-lg/semibold",
                                                          color: "text-strong",
                                                          children: eZ.intl.string(eZ.t["N/TRrT"]),
                                                      }),
                                                      (0, i.jsx)(tU.h, { size: 8 }),
                                                      (0, i.jsx)(N.E, {
                                                          variant: "body-md/normal",
                                                          color: "text-muted",
                                                          children: eZ.intl.string(eZ.t.t3yWxG),
                                                      }),
                                                      (0, i.jsx)(tU.h, { size: 16 }),
                                                      (0, i.jsx)("div", {
                                                          className: t8.Qq,
                                                          children: g.map((e) =>
                                                              (0, i.jsx)(
                                                                  N.E,
                                                                  {
                                                                      variant: "body-sm/medium",
                                                                      color: "text-default",
                                                                      className: t8.U0,
                                                                      children: e,
                                                                  },
                                                                  e,
                                                              ),
                                                          ),
                                                      }),
                                                      (0, i.jsx)(tU.h, { size: 16 }),
                                                      0 === c.length &&
                                                          (0, i.jsx)(E.$, { variant: "primary", onClick: f, text: v }),
                                                  ],
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                      ],
                  })
                : null,
        ),
    });
};
var nn = n(331322),
    nl = n(111159),
    ni = n(517461),
    ns = n(173404),
    na = n(95035),
    nr = n(307805),
    no = n(587240),
    nc = n(253898);
let nd = { mass: 1, tension: 250, friction: 18, clamp: !0 };
function nu(e) {
    let { guild: t } = e,
        n = (0, x.bG)([eV.A], () => eV.A.can(eJ.xBc.MANAGE_GUILD, t));
    return (0, i.jsxs)(nn.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            (0, i.jsxs)(nn.B, {
                direction: "vertical",
                gap: 16,
                children: [
                    (0, i.jsx)(nn.B, {
                        direction: "vertical",
                        gap: 4,
                        children: (0, i.jsx)(N.E, {
                            variant: "body-md/medium",
                            color: "text-default",
                            children: eZ.intl.string(nr.default.fP8DVx),
                        }),
                    }),
                    (0, i.jsxs)(nn.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, i.jsx)(N.E, {
                                variant: "body-lg/semibold",
                                color: "text-default",
                                children: eZ.intl.string(nr.default["i7CH/I"]),
                            }),
                            (0, i.jsxs)("ol", {
                                className: r()(no.p_, no.o8, no.ap),
                                children: [
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(N.E, {
                                            variant: "body-md/normal",
                                            color: "text-default",
                                            children: eZ.intl.string(nr.default["+Izoz7"]),
                                        }),
                                    }),
                                    (0, i.jsxs)("li", {
                                        children: [
                                            (0, i.jsx)(N.E, {
                                                variant: "body-md/normal",
                                                color: "text-default",
                                                children: eZ.intl.string(nr.default["iu/RkU"]),
                                            }),
                                            (0, i.jsxs)("ul", {
                                                className: r()(no.p_, no.t3, no.zS),
                                                children: [
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(N.E, {
                                                            variant: "body-md/normal",
                                                            color: "text-default",
                                                            children: eZ.intl.string(nr.default.QogKbP),
                                                        }),
                                                    }),
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(N.E, {
                                                            variant: "body-md/normal",
                                                            color: "text-default",
                                                            children: eZ.intl.string(nr.default.V4orHT),
                                                        }),
                                                    }),
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(N.E, {
                                                            variant: "body-md/normal",
                                                            color: "text-default",
                                                            children: eZ.intl.string(nr.default.VrrQXe),
                                                        }),
                                                    }),
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(N.E, {
                                                            variant: "body-md/normal",
                                                            color: "text-default",
                                                            children: eZ.intl.string(nr.default.pSuM5e),
                                                        }),
                                                    }),
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(N.E, {
                                                            variant: "body-md/normal",
                                                            color: "text-default",
                                                            children: eZ.intl.string(nr.default["/RLXlI"]),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(N.E, {
                                            variant: "body-md/normal",
                                            color: "text-default",
                                            children: eZ.intl.string(nr.default.j4AmYy),
                                        }),
                                    }),
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(N.E, {
                                            variant: "body-md/normal",
                                            color: "text-default",
                                            children: eZ.intl.format(nr.default["/g+PvX"], {
                                                termsOfService: eJ.X7G.TERMS,
                                                communityGuidelines: eJ.X7G.GUIDELINES,
                                                helpArticle: t5.A.getArticleURL(eJ.MVz.FLAG_TO_MOD),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)(nn.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, i.jsx)(N.E, {
                                variant: "body-lg/semibold",
                                color: "text-default",
                                children: eZ.intl.string(nr.default.qJWXsz),
                            }),
                            (0, i.jsxs)("ul", {
                                className: r()(no.p_, no.zS, no.ap),
                                children: [
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(N.E, {
                                            variant: "body-md/normal",
                                            color: "text-default",
                                            children: eZ.intl.format(nr.default.FUBV1P, {
                                                survey: "https://discord.sjc1.qualtrics.com/jfe/form/SV_3WvT7SqlWpCJ4HQ",
                                            }),
                                        }),
                                    }),
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(N.E, {
                                            variant: "body-md/normal",
                                            color: "text-default",
                                            children: eZ.intl.format(nr.default.W4MIAG, {
                                                feedback: "https://forms.gle/RbDhW46PMmR39XUP7",
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)(nn.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, i.jsx)(N.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                children: eZ.intl.string(nr.default.J3HKmx),
                            }),
                            n &&
                                (0, i.jsx)(N.E, {
                                    variant: "body-md/normal",
                                    color: "text-default",
                                    children: eZ.intl.format(nr.default["9x2vbP"], {
                                        optOutHook: (e) =>
                                            (0, i.jsx)(na.A, {
                                                onClick: () =>
                                                    t3.A.open(t.id, eJ.BEX.MODERATION, null, eJ.nd0.SAFETY_OVERVIEW),
                                                children: e,
                                            }),
                                    }),
                                }),
                            (0, i.jsx)(N.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                children: eZ.intl.string(nr.default.KcCY25),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("img", {
                src: "/assets/c42cecffc003efa2.svg",
                alt: eZ.intl.string(nr.default["UxV/3+"]),
                width: 72,
                height: 72,
            }),
        ],
    });
}
function nm(e) {
    var t;
    let { guild: n } = e,
        [l, a] = (0, ni.V)("report-to-mod-education-dismissed", !1),
        [o, c] = (0, ni.V)("report-to-mod-education-expanded", !1),
        { transitions: d, setVisible: u } = (function () {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tE.p)(e, {
                    keys: (e) => (e ? "shown" : "hidden"),
                    config: nd,
                    from: { opacity: 0 },
                    enter: { opacity: 1 },
                    leave: { opacity: 0 },
                    unique: !0,
                }),
                setVisible: t,
            };
        })(),
        m =
            ((t = o ?? !1),
            (0, tE.p)(t, {
                from: { maxHeight: 0 },
                enter: { maxHeight: 850 },
                leave: { maxHeight: 0 },
                config: { duration: 200 },
            }));
    return (s.useEffect(() => {
        l && u(!1);
    }, [l, u]),
    l)
        ? null
        : d((e, t) =>
              t
                  ? (0, i.jsxs)(tC.animated.div, {
                        style: e,
                        onClick: () => c(!o),
                        className: r()(e1.kL, no.kL, nc.mainCard),
                        children: [
                            (0, i.jsxs)("div", {
                                className: no.mG,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: no.cy,
                                        children: [
                                            (0, i.jsx)(nl.ClydeIcon, {
                                                size: "custom",
                                                width: 28,
                                                height: 28,
                                                color: "currentColor",
                                                className: no.Mg,
                                            }),
                                            (0, i.jsx)(N.E, {
                                                variant: "body-sm/semibold",
                                                color: "text-strong",
                                                children: eZ.intl.string(eZ.t.uvGmCx),
                                            }),
                                            (0, i.jsx)(N.E, {
                                                variant: "body-sm/semibold",
                                                color: "text-strong",
                                                children: "\u2014",
                                            }),
                                            (0, i.jsx)(j.D, {
                                                variant: "body-md/semibold",
                                                color: "text-strong",
                                                children: eZ.intl.string(nr.default["95qQRB"]),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(y.D, {
                                        onClick: () => a(!0),
                                        children: (0, i.jsx)(tS.XSmallIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: no.ut,
                                        }),
                                    }),
                                ],
                            }),
                            m((e, t) =>
                                t
                                    ? (0, i.jsxs)(tC.animated.div, {
                                          style: e,
                                          children: [
                                              (0, i.jsx)("hr", { className: no.me }),
                                              (0, i.jsx)(nu, { guild: n }),
                                          ],
                                      })
                                    : null,
                            ),
                        ],
                    })
                  : null,
          );
}
var nh = n(191842),
    ng = n(565645),
    nx = n(21161),
    nf = n(796774),
    nj = n(209932),
    nv = n(129230),
    np = n(102597),
    nb = n(904054),
    nC = n(584014),
    nA = n(77183);
n(980504);
var nN = n(406271);
function ny(e) {
    let { className: t, sound: n, playSound: l, isPlaying: a, text: o } = e,
        c = n?.emojiId != null || n?.emojiName != null,
        d = eZ.intl.formatToPlainString(eZ.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name }),
        u = s.useCallback(() => {
            (nv.default.track(eJ.HAw.MODERATOR_QUEUE_ACTION, { guild_id: eW.A.getGuildId(), action: "airhorn" }),
                null != l && l());
        }, [l]);
    return (0, i.jsxs)(y.D, {
        "aria-label": d,
        tag: "span",
        onClick: u,
        className: r()(nN.Ls, nN.oR, { [nN.he]: !0 === a }, t),
        children: [
            c && (0, i.jsx)(ng.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: nN.JS }),
            (0, i.jsx)("span", { children: ` ${o} ` }),
        ],
    });
}
function nE(e) {
    let { containerRef: t, text: n } = e,
        l = s.useRef(null),
        a = (0, x.bG)([nj.A], () => nj.A.getSoundsForGuild("0")?.find((e) => "airhorn" === e.name)),
        { createMultipleConfettiAt: r } = s.useContext(nx.x),
        o = (0, x.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { isPlaying: c, playSound: d } = (function (e) {
            let { isPlaying: t, playSound: n } = (0, nC.A)(null != e ? (0, np.A)(e.soundId) : null);
            return {
                isPlaying: t,
                playSound: s.useCallback(async () => {
                    let t = (0, nb.A)(e?.volume ?? 1);
                    return !!(await n({ volume: t }));
                }, [n, e?.volume]),
            };
        })(a);
    (0, L.Ay)(() => {
        (0, nf.E7)();
    });
    let u = s.useCallback(async () => {
        if ((await d()) && (l.current?.addAnimation(), !o && t?.current != null)) {
            let e = t.current.getBoundingClientRect(),
                n = { x: e.left + e.width / 2, y: e.top + e.height / 3 },
                l = nA.uI[Math.floor(Math.random() * nA.uI.length)];
            r(
                n.x,
                n.y,
                { velocity: { type: "static-random", minValue: { x: -500, y: -500 }, maxValue: { x: 500, y: -100 } } },
                40,
                { sprite: l },
            );
        }
    }, [d, r, o, t]);
    return void 0 === a ? null : (0, i.jsx)(ny, { sound: a, playSound: u, isPlaying: c, text: n });
}
function nS() {
    let e = s.useRef(null);
    return (0, i.jsxs)(nn.B, {
        className: nN.kL,
        direction: "vertical",
        align: "center",
        justify: "center",
        padding: { top: 24, bottom: 24 },
        ref: e,
        children: [
            (0, i.jsx)(nh.ExperimentalConfettiIcon, { size: "custom", width: 48, height: 48 }),
            (0, i.jsxs)(nn.B, {
                direction: "vertical",
                align: "center",
                justify: "center",
                children: [
                    (0, i.jsx)(j.D, {
                        className: nN.wx,
                        variant: "heading-sm/medium",
                        children: eZ.intl.string(nr.default.h6QNky),
                    }),
                    (0, i.jsx)(N.E, {
                        className: nN.Qq,
                        variant: "body-md/medium",
                        color: "text-subtle",
                        children: eZ.intl.format(nr.default["8N4c58"], {
                            airhornHook: (t) => (0, i.jsx)(nE, { containerRef: e, text: t }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
var nI = n(34457),
    nT = n(317525),
    nM = n(44234),
    nk = n(188567),
    nR = n(927813),
    n_ = n(811091),
    nw = n(387255);
function nP(e) {
    let { channelName: t, guildId: l, tagFilter: a, channel: r } = e,
        o = (0, eb.S4)(r),
        c = (0, tr.AI)(r),
        d = r.isMediaChannel(),
        u = s.useCallback(() => {
            ((0, tb.zd)(),
                (0, ty.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(571331), n.e(66748)]).then(n.bind(n, 774538));
                    return (t) => (0, i.jsx)(e, { ...t, guildId: l });
                }));
        }, [l]),
        m = a.size > 0,
        h = c || o,
        g = !m && o && !d,
        x = s.useCallback(
            () =>
                g
                    ? u()
                    : c
                      ? void (r.isGameInvitesChannel() ? (0, H.d)(r) : nk._.dispatch(eJ.jej.FOCUS_COMPOSER_TITLE))
                      : (0, eJ.FXj)(),
            [u, g, c, r],
        );
    return (0, i.jsxs)("div", {
        className: tq.k,
        children: [
            (0, i.jsx)(j.D, {
                className: tq.w,
                variant: "heading-sm/semibold",
                children: m
                    ? eZ.intl.formatToPlainString(eZ.t.lvPci0, { numTags: a.size })
                    : eZ.intl.string(eZ.t.PwTMG0),
            }),
            (0, i.jsx)(N.E, {
                color: "text-default",
                variant: "body-sm/normal",
                children: m
                    ? eZ.intl.formatToPlainString(eZ.t.AAeye1, { numTags: a.size })
                    : eZ.intl.formatToPlainString(eZ.t.YtsXFD, { channelName: t }),
            }),
            h &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tU.h, { size: 16 }),
                        (0, i.jsx)(E.$, {
                            text: g ? eZ.intl.string(eZ.t.DgatTQ) : eZ.intl.string(eZ.t.wOKE8I),
                            variant: "secondary",
                            onClick: x,
                        }),
                    ],
                }),
        ],
    });
}
var nD = n(253913),
    nL = n(986359);
let nO = { width: 28, height: 28 },
    nG = { width: 20, height: 20, borderRadius: 10 };
function nF(e) {
    (0, tb.bh)({ onboardingCTA: e });
}
class nU {
    currentIndex = 0;
    steps = [];
    completedSteps = 0;
    addStep(e) {
        (++this.currentIndex, this.steps.push({ index: this.currentIndex, ...e }), e.isDone && this.completedSteps++);
    }
    getSteps() {
        return this.steps;
    }
    isAllDone() {
        return this.steps.every((e) => e.isDone);
    }
}
function nz(e) {
    let { guild: t, roles: n } = e;
    return (0, i.jsx)("div", {
        className: nL.Ei,
        "aria-label": eZ.intl.formatToPlainString(eZ.t.PCs0oo, { numRoles: n.length }),
        children: n.map((e) =>
            (0, i.jsx)(tD.b_, { role: e, canRemove: !1, onRemove: eJ.FXj, guildId: t.id, className: nL.Yq }, e.id),
        ),
    });
}
let nH = { mass: 1, tension: 250, friction: 18, clamp: !0 };
function nB(e) {
    let { handleHide: t } = e;
    return (0, i.jsx)(y.D, {
        onClick: t,
        className: nL.b,
        "aria-label": eZ.intl.string(eZ.t.WAI6xu),
        children: (0, i.jsx)(tS.XSmallIcon, { size: "md", color: "currentColor", className: nL.ut }),
    });
}
function nV(e) {
    let { expanded: t, onClick: n } = e;
    return (0, i.jsx)(y.D, {
        onClick: n,
        className: nL.b,
        "aria-label": t ? eZ.intl.string(eZ.t.iTcuma) : eZ.intl.string(eZ.t.dcl9MQ),
        children: t
            ? (0, i.jsx)(tI.MinimizeIcon, { size: "xs", color: "currentColor", className: nL.ut })
            : (0, i.jsx)(tT.MaximizeIcon, { size: "xs", color: "currentColor", className: nL.ut }),
    });
}
let nW = (e) => {
    var t;
    let { hasAnyThread: l, hasActiveThreads: a, channel: o } = e,
        c = (0, G.Ay)(o),
        { onboardingExpanded: u } = (0, eE.kU)((e) => {
            let { onboardingExpanded: t } = e;
            return { onboardingExpanded: t };
        }, d.x),
        { tagFilter: m } = (0, ep.R)(o.id),
        h = (0, x.bG)([t6.A], () => t6.A.getGuild(o.getGuildId())),
        g = (0, eb.S4)(o),
        { transitions: f, setVisible: p } = (function () {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tE.p)(e, {
                    keys: (e) => (e ? "shown" : "hidden"),
                    config: nH,
                    from: { opacity: 0 },
                    enter: { opacity: 1 },
                    leave: { opacity: 0 },
                    unique: !0,
                }),
                setVisible: t,
            };
        })(),
        b = (0, tE.p)(u, {
            from: { maxHeight: 0 },
            enter: { maxHeight: 500 },
            leave: { maxHeight: 0 },
            config: { duration: 200 },
        }),
        C = s.useCallback((e) => {
            e.clickHandler?.();
        }, []),
        A = ((t = o.id), s.useCallback(() => (p(!1), tx.A.hideAdminOnboarding(t, !0)), [t, p])),
        {
            onboardingSteps: E,
            isDismissed: S,
            isHidden: T,
            isAllDone: M,
        } = (function (e) {
            var t;
            let l,
                a,
                r,
                o,
                { guild: c, channel: d, hasAnyThread: u, handleHide: m } = e,
                [h, g] = s.useState(!1),
                f = (0, t2.l)(d.id),
                j = (0, x.bG)([tg.A], () => tg.A.hasHidden(d.id)),
                v =
                    ((l = c?.id),
                    (a = (0, x.bG)([nT.A], () => (null != l ? nT.A.getSortedRoles(l) : void 0))),
                    s.useMemo(() => {
                        var e;
                        let t,
                            l,
                            s,
                            r,
                            o,
                            m,
                            h,
                            x,
                            f,
                            j = new nU(),
                            v = d?.isMediaChannel() === !0;
                        return (
                            null == c ||
                                null == d ||
                                v ||
                                null == a ||
                                j.addStep(
                                    ((t = (0, tL.A)(d)
                                        ? tA.kg(eJ.xBc.VIEW_CHANNEL, eJ.xBc.SEND_MESSAGES)
                                        : eJ.xBc.SEND_MESSAGES),
                                    (s =
                                        (l =
                                            null != c
                                                ? (0, nw.N)(a, d, t).filter(
                                                      (e) =>
                                                          d.permissionOverwrites.hasOwnProperty(e.id) || (0, nI.Oy)(e),
                                                  )
                                                : []).length > 0),
                                    (r = l.some((e) => (0, nI.Oy)(e))),
                                    {
                                        name: eZ.intl.string(eZ.t["/Ax2gs"]),
                                        description: eZ.intl.string(eZ.t.gAIOfg),
                                        isDone: s && r,
                                        shouldWarn: s && !r,
                                        children: s ? (0, i.jsx)(nz, { guild: c, roles: l }) : null,
                                        clickHandler: () => {
                                            (nF(nD._G.PERMISSIONS),
                                                (0, ty.mM)(
                                                    async () => {
                                                        let { default: e } = await Promise.all([
                                                            n.e(594996),
                                                            n.e(317110),
                                                        ]).then(n.bind(n, 698325));
                                                        return (
                                                            g(!0),
                                                            (n) =>
                                                                (0, i.jsx)(e, {
                                                                    ...n,
                                                                    channel: d,
                                                                    guild: c,
                                                                    permission: t,
                                                                    currentSelectedRoles: l,
                                                                })
                                                        );
                                                    },
                                                    {
                                                        modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                                                        onCloseRequest: eJ.FXj,
                                                        onCloseCallback: () => g(!1),
                                                    },
                                                ));
                                        },
                                    }),
                                ),
                            v ||
                                d.isGameInvitesChannel() ||
                                j.addStep(
                                    ((o = null != d.topic && d.topic.length > 0),
                                    {
                                        name: eZ.intl.string(eZ.t.UgJu1e),
                                        description: eZ.intl.string(eZ.t["3C6/G1"]),
                                        clickHandler: () => {
                                            (nF(nD._G.GUIDELINES), tP.Ay.open(d.id, void 0, eJ.b7d.TOPIC));
                                        },
                                        isDone: o,
                                    }),
                                ),
                            d?.isGameInvitesChannel() &&
                                j.addStep(
                                    ((m = null != d.availableTags && d.availableTags.length > 1),
                                    {
                                        name: eZ.intl.string(tW.default["5a7Pjb"]),
                                        description: eZ.intl.string(tW.default["MKZ+Ky"]),
                                        clickHandler: () => {
                                            (nF(nD._G.RECOMMENDED_TAGS),
                                                (0, ty.mM)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e(248089),
                                                        n.e(666089),
                                                    ]).then(n.bind(n, 537808));
                                                    return (t) => (0, i.jsx)(e, { ...t, channelId: d.id });
                                                }));
                                        },
                                        isDone: m,
                                    }),
                                ),
                            j.addStep(
                                ((h = +!!d.isGameInvitesChannel()),
                                (x = null != d.availableTags && d.availableTags.length > h),
                                {
                                    name: eZ.intl.string(eZ.t.xiBFCi),
                                    description: eZ.intl.string(eZ.t.wCv4Oz),
                                    clickHandler: () => {
                                        (nF(nD._G.TAGS),
                                            tP.Ay.open(d.id),
                                            (0, ty.mM)(async () => {
                                                let { default: e } = await Promise.all([n.e(143172), n.e(347326)]).then(
                                                    n.bind(n, 950989),
                                                );
                                                return (t) =>
                                                    (0, i.jsx)(e, { ...t, channelId: d.id, guildId: d.guild_id });
                                            }));
                                    },
                                    isDone: x,
                                }),
                            ),
                            j.addStep(
                                ((f = null != d.defaultReactionEmoji),
                                {
                                    name: eZ.intl.string(eZ.t.QlyC9s),
                                    description: eZ.intl.string(eZ.t["+50LJg"]),
                                    clickHandler: () => {
                                        (nF(nD._G.DEFAULT_REACTION),
                                            (0, ty.mM)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e(571481),
                                                    n.e(634941),
                                                    n.e(394209),
                                                    n.e(785157),
                                                ]).then(n.bind(n, 939940));
                                                return (t) => (0, i.jsx)(e, { ...t, channel: d });
                                            }));
                                    },
                                    isDone: f,
                                }),
                            ),
                            d.isGameInvitesChannel() ||
                                j.addStep(
                                    ((e = c?.id),
                                    {
                                        name: eZ.intl.string(eZ.t["6A0O64"]),
                                        description: v
                                            ? eZ.intl.string(eZ.t["8hI5vr"])
                                            : eZ.intl.format(eZ.t.ysxcAw, {
                                                  onClick: (t) => {
                                                      null != e &&
                                                          (t.preventDefault(),
                                                          t.stopPropagation(),
                                                          (0, tb.zd)(),
                                                          (0, ty.mM)(async () => {
                                                              let { default: t } = await Promise.all([
                                                                  n.e(571331),
                                                                  n.e(66748),
                                                              ]).then(n.bind(n, 774538));
                                                              return (n) => (0, i.jsx)(t, { ...n, guildId: e });
                                                          }));
                                                  },
                                              }),
                                        clickHandler: () => {
                                            (nF(nD._G.CREATE_POST), d.isGameInvitesChannel())
                                                ? (0, H.d)(d)
                                                : nk._.dispatch(eJ.jej.FOCUS_COMPOSER_TITLE);
                                        },
                                        isDone: u,
                                    }),
                                ),
                            j
                        );
                    }, [d, c, a, u, g])),
                p = v.isAllDone(),
                b =
                    f ||
                    j ||
                    ((t = d.id),
                    (r = n_.default.extractTimestamp(t)),
                    !el()().isBefore(el()(r).add(el().duration(15, "days"))));
            return (
                (o = s.useRef(0)),
                s.useEffect(
                    () => (
                        h || !p || b
                            ? clearTimeout(o.current)
                            : (o.current = setTimeout(() => {
                                  m();
                              }, 60 * nR.A.Millis.SECOND)),
                        () => clearTimeout(o.current)
                    ),
                    [p, b, m, h],
                ),
                { onboardingSteps: v, isHidden: j, isDismissed: f, isAllDone: p }
            );
        })({ guild: h, channel: o, hasAnyThread: l, handleHide: A }),
        k = !T && !S,
        R = (0, eE.ST)(),
        _ = o.isMediaChannel();
    function w(e) {
        return R.getState().setOnboardingExpanded(e);
    }
    return ((0, L.Ay)(() => {
        M && k && A();
    }),
    !(function (e) {
        let { isAllDone: t, isVisible: n, canManageChannel: l, guildId: i, channel: a } = e,
            r = (0, x.bG)([nT.A], () => (null != i ? nT.A.partitionVersion(i) : void 0)),
            o = s.useCallback(() => {
                nk._.dispatch(eJ.jej.REMEASURE_TARGET);
            }, []);
        s.useEffect(() => {
            o();
        }, [o, t, n, l, r, a.id, a.permissionOverwrites]);
    })({ isAllDone: M, isVisible: k, canManageChannel: g, guildId: h?.id, channel: o }),
    s.useEffect(() => {
        S || p(!T);
    }, [S, p, T]),
    (0, L.Ay)(() => {
        (l && k) || w(!0);
    }),
    null == h)
        ? null
        : (0, J.Fo)(o)
          ? a || 0 !== m.size
              ? m.size > 0
                  ? null
                  : (0, i.jsx)(nm, { guild: h })
              : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(nm, { guild: h }), (0, i.jsx)(nS, {})] })
          : k && g
            ? _
                ? l
                    ? null
                    : (0, i.jsx)(nt, { channel: o })
                : (0, i.jsx)(i.Fragment, {
                      children: f((e, t) =>
                          t
                              ? (0, i.jsx)(tC.animated.div, {
                                    style: e,
                                    className: nL.kL,
                                    children: (0, i.jsxs)("div", {
                                        className: nL.iE,
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: nL.U1,
                                                children: (0, i.jsxs)(v.F, {
                                                    component: (0, i.jsx)(j.D, {
                                                        variant: "heading-sm/semibold",
                                                        children: eZ.intl.string(eZ.t.LhlgY9),
                                                    }),
                                                    children: [
                                                        (0, i.jsx)(j.D, {
                                                            variant: "heading-sm/medium",
                                                            className: nL.wx,
                                                            children: eZ.intl.format(eZ.t["9L+8bz"], {
                                                                numCompleted: E.completedSteps.toString(),
                                                                numSteps: E.steps.length.toString(),
                                                            }),
                                                        }),
                                                        (0, i.jsxs)(N.E, {
                                                            variant: "body-xs/normal",
                                                            className: nL.l2,
                                                            children: [
                                                                (0, i.jsx)(tM.CircleInformationIcon, {
                                                                    size: "xxs",
                                                                    color: "currentColor",
                                                                    className: nL.Kk,
                                                                }),
                                                                eZ.intl.string(eZ.t.znhX2R),
                                                            ],
                                                        }),
                                                        (0, i.jsx)(nV, { expanded: u, onClick: () => w(!u) }),
                                                        (0, i.jsx)(nB, { handleHide: A }),
                                                    ],
                                                }),
                                            }),
                                            b((e, t) =>
                                                t
                                                    ? (0, i.jsx)(tC.animated.div, {
                                                          style: e,
                                                          className: nL.qI,
                                                          children: (0, i.jsx)("ol", {
                                                              className: nL.D4,
                                                              children: E.getSteps().map((e) =>
                                                                  (0, i.jsxs)(
                                                                      y.D,
                                                                      {
                                                                          tag: "li",
                                                                          "aria-label": e.name,
                                                                          onClick: () => C(e),
                                                                          className: r()(nL._h, { [nL.so]: e.isDone }),
                                                                          children: [
                                                                              e.shouldWarn
                                                                                  ? (0, i.jsx)(I.CircleErrorIcon, {
                                                                                        size: "custom",
                                                                                        width: 20,
                                                                                        height: 20,
                                                                                        color: tN.A.colors
                                                                                            .ICON_FEEDBACK_CRITICAL,
                                                                                        className: nL.FY,
                                                                                    })
                                                                                  : e.isDone
                                                                                    ? (0, i.jsx)(tk.fk, {
                                                                                          color: tN.A.colors
                                                                                              .STATUS_POSITIVE_BACKGROUND
                                                                                              .css,
                                                                                          icon: tR.CheckmarkLargeIcon,
                                                                                          style: nG,
                                                                                          className: nL.FY,
                                                                                      })
                                                                                    : (0, i.jsx)(tk.fk, {
                                                                                          disableColor: !0,
                                                                                          icon: (0, t_.k)(nM.A),
                                                                                          style: nO,
                                                                                          className: r()(nL.FY, nL.so),
                                                                                      }),
                                                                              (0, i.jsxs)("div", {
                                                                                  className: nL.PM,
                                                                                  children: [
                                                                                      (0, i.jsx)(N.E, {
                                                                                          variant: "body-md/medium",
                                                                                          color: e.isDone
                                                                                              ? "text-default"
                                                                                              : "text-strong",
                                                                                          className: nL.u,
                                                                                          children: e.name,
                                                                                      }),
                                                                                      (0, i.jsx)(N.E, {
                                                                                          variant: "body-sm/normal",
                                                                                          color: "text-default",
                                                                                          className: nL.XK,
                                                                                          children: e.description,
                                                                                      }),
                                                                                      e.children,
                                                                                  ],
                                                                              }),
                                                                              (0, i.jsx)(tw.ChevronSmallRightIcon, {
                                                                                  size: "custom",
                                                                                  color: "currentColor",
                                                                                  width: 12,
                                                                                  className: nL.FY,
                                                                              }),
                                                                          ],
                                                                      },
                                                                      `onboard-step-${e.index}`,
                                                                  ),
                                                              ),
                                                          }),
                                                      })
                                                    : null,
                                            ),
                                        ],
                                    }),
                                })
                              : null,
                      ),
                  })
            : l
              ? null
              : o.isGameInvitesChannel()
                ? (0, i.jsx)(tK, { channel: o, tagFilter: m })
                : (0, i.jsx)(nP, { channelName: c ?? "", guildId: o.guild_id, tagFilter: m, channel: o });
};
var n$ = n(717421),
    nq = n(622629),
    nK = n(22231),
    nQ = n(46054),
    nY = n(257701);
let nX = s.memo(function (e) {
    let { channel: t, onChange: l } = e,
        a = (0, eE.ST)(),
        { guidelinesOpen: o } = (0, eE.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, d.x),
        c = (0, eb.S4)(t),
        [u, m] = s.useState(!1),
        h = s.useCallback(
            (e) => {
                if (null == e) return;
                let t = e.clientHeight >= 220;
                t !== u && m(t);
            },
            [u],
        );
    s.useLayoutEffect(() => {
        setTimeout(l, 350);
    }, [o, l]);
    let [g, x] = s.useState(!o),
        f = (0, n$.z)({ opacity: +!!o, maxHeight: 500 * !!o, config: { duration: 300 }, onRest: () => x(!o) });
    return null != t.topic && t.topic.length > 0
        ? (0, i.jsx)(tC.animated.div, {
              style: f,
              className: g ? nY.kK : void 0,
              children: (0, i.jsxs)("div", {
                  className: nY.kL,
                  children: [
                      (0, i.jsxs)("div", {
                          className: nY.N1,
                          children: [
                              (0, i.jsxs)(j.D, {
                                  variant: "heading-lg/semibold",
                                  className: nY.$4,
                                  children: [
                                      (0, i.jsx)(nq.BookCheckIcon, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                          height: 20,
                                      }),
                                      eZ.intl.string(eZ.t["4d4T4l"]),
                                      c &&
                                          (0, i.jsx)(y.D, {
                                              onClick: function () {
                                                  tP.Ay.open(t.id, void 0, eJ.b7d.TOPIC);
                                              },
                                              tag: "span",
                                              className: nY.vk,
                                              children: (0, i.jsx)(nK.PencilIcon, {
                                                  size: "xs",
                                                  color: "currentColor",
                                              }),
                                          }),
                                  ],
                              }),
                              (0, i.jsx)(y.D, {
                                  "aria-label": eZ.intl.string(eZ.t.cpT0Cq),
                                  className: nY.vk,
                                  onClick: function () {
                                      a.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, i.jsx)(tS.XSmallIcon, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: nY.iQ,
                          children: [
                              (0, i.jsx)(N.E, {
                                  selectable: !0,
                                  variant: "body-sm/normal",
                                  color: "text-default",
                                  style: { maxHeight: 220 },
                                  className: r()(nY.I4, e2.PT),
                                  children: (0, i.jsx)("div", {
                                      ref: h,
                                      children: nQ.A.parseForumPostGuidelines(t.topic, !0, {
                                          channelId: t.id,
                                          allowHeading: !0,
                                          allowList: !0,
                                      }),
                                  }),
                              }),
                              u &&
                                  (0, i.jsxs)("div", {
                                      className: nY.jP,
                                      children: [
                                          (0, i.jsx)("div", { className: nY.D7 }),
                                          (0, i.jsx)("div", {
                                              className: nY.kx,
                                              children: (0, i.jsx)(y.D, {
                                                  className: nY.DD,
                                                  onClick: function () {
                                                      (0, ty.mM)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e(146697),
                                                              n.e(745457),
                                                          ]).then(n.bind(n, 494664));
                                                          return (n) => (0, i.jsx)(e, { ...n, channel: t });
                                                      });
                                                  },
                                                  children: (0, i.jsxs)(N.E, {
                                                      variant: "body-sm/semibold",
                                                      color: "text-brand",
                                                      className: nY.ur,
                                                      children: [
                                                          eZ.intl.string(eZ.t.Vu7odK),
                                                          (0, i.jsx)(tT.MaximizeIcon, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: nY.yS,
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
});
n(667532);
var nJ = n(621466),
    nZ = n(643135),
    n0 = n(884496),
    n1 = n(281595),
    n2 = n(408278),
    n4 = n(952270),
    n3 = n(39623),
    n6 = n(278416),
    n5 = n(465532),
    n7 = n(608299),
    n8 = n(355622),
    n9 = n(530134),
    le = n(989161),
    lt = n(246049),
    ln = n(960850),
    ll = n(164636),
    li = n(95362),
    ls = n(198554),
    la = n(914905),
    lr = n(935399),
    lo = n(750943),
    lc = n(844222),
    ld = n(307955),
    lu = n(518960),
    lm = n(160589);
let lh = { scale: 0.95, opacity: 0 },
    lg = { scale: 1, opacity: 1 },
    lx = { scale: 1, opacity: 1 },
    lf = { tension: 2400, friction: 52 },
    lj = `.${lm.EJ}`,
    lv = { behavior: "smooth", block: "nearest", inline: "nearest" };
function lp(e) {
    let { channelId: t, onClick: n, onClose: l, onMouseEnter: a, listItemProps: r } = e,
        o = s.useRef(null),
        c = (0, x.bG)([eH.A], () => eH.A.getChannel(t), [t]);
    return (
        et()(null != c, "Forum Channel is null"),
        (0, i.jsxs)(y.D, {
            ...r,
            "aria-label": eZ.intl.string(eZ.t.nzoF5p),
            className: lm.EJ,
            onMouseEnter: a,
            onClick: function (e) {
                (0 === e.detail && o.current?.activateUploadDialogue(), (0, tb.ri)({ isMobile: !1 }), n?.());
            },
            children: [
                (0, i.jsx)(ld.A, {
                    className: lm.Fg,
                    ref: o,
                    onChange: function (e) {
                        if (null == c) return;
                        l?.();
                        let { files: t } = e.currentTarget;
                        (null != t &&
                            (0, lu.R)(t, c, tc.C.FirstThreadMessage, { requireConfirm: !0, origin: "file_picker" }),
                            (e.currentTarget.value = ""));
                    },
                    multiple: c.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
                (0, i.jsx)(lo.ImagePlusIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 28,
                    height: 28,
                    className: lm.T3,
                }),
            ],
        })
    );
}
function lb(e) {
    let { channelId: t, closePopout: n } = e,
        [l, a] = s.useState(!1),
        { reducedMotion: r } = s.useContext(lc.C),
        o = (0, n$.z)({ from: r.enabled ? lg : lh, to: lx, config: lf }, "animate-always"),
        c = (0, x.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        d = (0, x.bG)([tm.A], () => tm.A.getUploads(t, n8.oU.CREATE_FORUM_POST.drafts.type)),
        g = (0, m.Ay)({
            id: "forum-composer-attachments-popout",
            isEnabled: c,
            orientation: h.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (
        (0, lr.Ay)(() => {
            g.focusLastVisibleItem();
        }),
        (0, i.jsx)(tC.animated.div, {
            className: lm.jC,
            onMouseLeave: function () {
                l || c || n();
            },
            onFocus: function (e) {
                e.target.scrollIntoView(lv);
            },
            style: o,
            children: (0, i.jsx)(li.Ip, {
                orientation: "horizontal",
                className: lm.SW,
                scrollbarGutter: !1,
                fade: !0,
                disableFocusRingScope: !0,
                children: (0, i.jsx)(u.hD, {
                    navigator: g,
                    children: (0, i.jsx)(u.PR, {
                        children: (e) => {
                            let { ref: n, ...l } = e;
                            return (0, i.jsxs)("div", {
                                className: lm.p8,
                                ref: n,
                                ...l,
                                children: [
                                    d.map((e) =>
                                        (0, i.jsx)(
                                            la.A,
                                            {
                                                channelId: t,
                                                draftType: n8.oU.CREATE_FORUM_POST.drafts.type,
                                                upload: e,
                                                keyboardModeEnabled: c,
                                                hideFileName: !0,
                                                size: ls.L.SMALL,
                                            },
                                            e.id,
                                        ),
                                    ),
                                    (0, i.jsx)(lC, { channelId: t, setFileInputOpen: a }),
                                ],
                            });
                        },
                    }),
                }),
            }),
        })
    );
}
function lC(e) {
    let { channelId: t, setFileInputOpen: n } = e,
        l = { ...(0, u.rm)("upload-button"), tabIndex: 0 };
    return (0, i.jsx)(lp, {
        channelId: t,
        onClick: function () {
            n(!0);
        },
        onClose: function () {
            (n(!1),
                requestAnimationFrame(() => {
                    (0, nJ.vq)(document.activeElement, HTMLElement) && document.activeElement.scrollIntoView(lv);
                }));
        },
        listItemProps: l,
    });
}
function lA(e) {
    let { channelId: t } = e,
        [n, l] = s.useState(!1),
        a = s.useRef(null),
        r = (0, x.bG)([tm.A], () => tm.A.getUploads(t, n8.oU.CREATE_FORUM_POST.drafts.type)),
        o = r.length,
        c = o > 0;
    function d() {
        c && l(!0);
    }
    function u() {
        l(!1);
    }
    return (
        s.useEffect(() => {
            n && !c && l(!1);
        }, [n, c]),
        s.useEffect(() => {
            if (document.activeElement !== document.body && null != document.activeElement) return;
            l(o > 0);
            let e = requestAnimationFrame(() => {
                let e = a.current?.querySelector(lj);
                e?.focus();
            });
            return () => cancelAnimationFrame(e);
        }, [o]),
        (0, i.jsxs)("div", {
            className: lm.kL,
            ref: a,
            onBlur: function (e) {
                null == e.relatedTarget ||
                    a.current?.contains(e.relatedTarget) ||
                    (e.relatedTarget?.closest('[role="dialog"]') == null && u());
            },
            children: [
                c
                    ? !n &&
                      (0, i.jsxs)(y.D, {
                          "aria-label": eZ.intl.string(eZ.t.nzoF5p),
                          className: lm.fY,
                          tabIndex: 0,
                          onClick: d,
                          onFocus: function () {
                              (d(),
                                  c &&
                                      requestAnimationFrame(() => {
                                          let e = a.current?.querySelector(lj);
                                          e?.focus();
                                      }));
                          },
                          onMouseEnter: d,
                          children: [
                              (0, i.jsx)(la.J, { upload: r[0], size: ls.L.SMALL }),
                              (0, i.jsx)(N.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-overlay-light",
                                  className: lm.qS,
                                  children: o,
                              }),
                          ],
                      })
                    : (0, i.jsx)(lp, { onMouseEnter: d, channelId: t }),
                n && (0, i.jsx)(lb, { channelId: t, closePopout: u }),
            ],
        })
    );
}
var lN = n(793654);
function ly(e) {
    let { parentChannel: t } = e,
        n = (0, ll.yK)([tm.A], () => {
            let e = tm.A.getUploads(t.id, n8.oU.CREATE_FORUM_POST.drafts.type);
            return e?.filter((e) => !0 !== e.isThumbnail);
        });
    return (0, i.jsxs)("div", {
        className: lN.kL,
        children: [
            (0, i.jsx)(N.E, {
                variant: "body-md/semibold",
                color: "text-muted",
                children: eZ.intl.string(eZ.t.omKGKu),
            }),
            (0, i.jsx)(N.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: eZ.intl.string(eZ.t["zUjLl+"]),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(li.Ip, {
                    className: lN.mw,
                    orientation: "horizontal",
                    scrollbarGutter: !1,
                    fade: !0,
                    children: (0, i.jsxs)("div", {
                        className: lN.p8,
                        children: [
                            n.map((e) =>
                                (0, i.jsx)(
                                    la.A,
                                    {
                                        channelId: t.id,
                                        draftType: n8.oU.CREATE_FORUM_POST.drafts.type,
                                        upload: e,
                                        keyboardModeEnabled: !0,
                                        hideFileName: !0,
                                        size: ls.L.SMALL,
                                    },
                                    e.id,
                                ),
                            ),
                            (0, i.jsx)(lp, { channelId: t.id }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
var lE = n(241326),
    lS = n(851023),
    lI = n(915089),
    lT = n(607470),
    lM = n(703007),
    lk = n(635377),
    lR = n.n(lk);
let l_ = "absolute",
    lw = new (lR())({ max: 100 });
function lP(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: l } = e;
    return s.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: l } = e,
                    i = `${t}-${n}-${l}`,
                    s = lw.get(i);
                if (null != s) return s;
                {
                    let e = (function (e, t, n) {
                        if (0 === n) return [];
                        if (1 === n) return [{ width: e, height: t, top: 0, left: 0, position: l_ }];
                        if (2 === n) {
                            let n = Math.ceil((e - 4) / 2);
                            return [
                                { top: 0, left: 0, position: l_, width: n, height: t },
                                { top: 0, left: n + 4, position: l_, width: n, height: t },
                            ];
                        }
                        if (3 === n) {
                            let n = Math.ceil((e - 4) / 2),
                                l = Math.ceil((t - 4) / 2);
                            return [
                                { top: 0, left: 0, position: l_, width: n, height: t },
                                { top: 0, left: n + 4, position: l_, width: n, height: l },
                                { top: l + 4, left: n + 4, position: l_, width: n, height: l },
                            ];
                        }
                        {
                            let n = Math.ceil((e - 4) / 2),
                                l = Math.ceil((t - 4) / 2);
                            return [
                                { top: 0, left: 0, position: l_, width: n, height: l },
                                { top: l + 4, left: 0, position: l_, width: n, height: l },
                                { top: 0, left: n + 4, position: l_, width: n, height: l },
                                { top: l + 4, left: n + 4, position: l_, width: n, height: l },
                            ];
                        }
                    })(n, l, t);
                    return (lw.set(i, e), e);
                }
            })({ numAttachments: t, containerWidth: n, containerHeight: l }),
        [t, n, l],
    );
}
function lD(e) {
    return e.map((t, n) => ({
        minWidth: 2 * e[n].width,
        minHeight: 2 * e[n].height,
        maxWidth: 2 * e[n].width,
        maxHeight: 2 * e[n].height,
    }));
}
(n(323874), n(14289), n(35956));
var lL = n(304162),
    lO = n(435558),
    lG = n(724442),
    lF = n(998218),
    lU = n(36491),
    lz = n(131360);
let lH = [{ name: "Media Post Thumbnail", extensions: ["jpg", "jpeg", "png", "gif", "webp"] }],
    lB = (0, lI.Ld)();
function lV(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: l } = e,
        s = lP({ numAttachments: t.length, containerWidth: n, containerHeight: l });
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsx)(
                "div",
                {
                    style: s[t],
                    children:
                        !0 === e.isVideo
                            ? (0, i.jsx)(lT.A, { src: e.src, className: lz.xn, "aria-hidden": !0 })
                            : (0, i.jsx)("img", { src: e.src, className: lz.xn, "aria-hidden": !0, alt: e?.alt ?? "" }),
                },
                e.src,
            ),
        ),
    });
}
function lW(e) {
    let { parentChannel: t } = e,
        { textAreaState: l } = (0, eE.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        a = (0, ll.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        o = (function (e, t) {
            let { mediaAttachments: n, hasThumbnail: l } = (function (e) {
                    let [t, n] = s.useState(null),
                        l = (0, ll.yK)([tm.A], () => {
                            let t = tm.A.getUploads(e.id, n8.oU.CREATE_FORUM_POST.drafts.type),
                                n = t.find((e) => e.isThumbnail);
                            return null != n ? [n] : t.filter((e) => e.isVideo || e.isImage);
                        }),
                        i = s.useMemo(() => l.some((e) => e.isThumbnail), [l]);
                    return (
                        s.useEffect(() => {
                            let e = [];
                            return (
                                n(
                                    l.slice(0, 4).flatMap((t) => {
                                        let n = t?.item?.file;
                                        if (null == n) return [];
                                        let l = URL.createObjectURL(n);
                                        return (
                                            e.push(l),
                                            {
                                                id: t.id,
                                                src: l,
                                                spoiler: t.spoiler,
                                                alt: t.description,
                                                isThumbnail: t.isThumbnail,
                                                upload: !0 === t.isThumbnail ? t : void 0,
                                                isVideo: t.isVideo,
                                            }
                                        );
                                    }),
                                ),
                                () => {
                                    (n(null), e.forEach((e) => URL.revokeObjectURL(e)));
                                }
                            );
                        }, [l]),
                        { mediaAttachments: t, hasThumbnail: i }
                    );
                })(e),
                i = Math.max(4 - (n?.length ?? 0), 0),
                { embeds: a } = (function (e, t, n) {
                    let l = s.useRef(new Map()),
                        [, i] = s.useState(null),
                        [a, r] = s.useState(null),
                        o = s.useMemo(
                            () =>
                                lO.debounce((e, n) => {
                                    if (null == n || e || 0 === t) return;
                                    let i = n.match(lF.A.URL_REGEX);
                                    if (null == i || 0 === i.length) {
                                        ((l.current = new Map()), r(null));
                                        return;
                                    }
                                    r(lO.uniq(i).slice(0, 4));
                                }, 1e3),
                            [t, l, r],
                        );
                    (s.useEffect(() => {
                        o(e, n);
                    }, [o, n, e]),
                        s.useEffect(() => {
                            !(async function (e, t) {
                                if (null == t) return;
                                let n = e.current,
                                    l = new Set(n.keys()),
                                    s = t.filter((e) => !l?.has(e));
                                if (0 !== s.length)
                                    try {
                                        var a, r, o;
                                        let t = await lU.L4(s);
                                        ((a = new Map(n)),
                                            (r = s),
                                            (o = t?.embeds),
                                            o?.forEach((e) => {
                                                var t, n;
                                                let l =
                                                    ((t = r),
                                                    (n = e),
                                                    t.find((e) => n?.url != null && e.startsWith(n.url)));
                                                if (null == l) return;
                                                let i = a.get(l);
                                                null == i ? a.set(l, [e]) : i.push(e);
                                            }),
                                            (e.current = a),
                                            i({}));
                                    } catch (e) {}
                            })(l, a);
                        }, [a]));
                    let c = (0, lG.A)(l),
                        d = s.useMemo(() => {
                            let e = [];
                            return (
                                a?.forEach((t) => {
                                    let n = c.get(t);
                                    null != n && e.push(...n);
                                }),
                                e.length > 0 ? e : null
                            );
                        }, [a, c]);
                    return { embeds: e ? null : d };
                })(l, i, t),
                r = s.useMemo(
                    () =>
                        a?.flatMap((e) => {
                            let t = (0, lL.m3)(e);
                            return null == t ? [] : { id: t, src: t, spoiler: !1, alt: e.title };
                        }),
                    [a],
                ),
                o = [...(n ?? [])];
            return (!l && i > 0 && o.push(...(r?.slice(0, i) ?? [])), o);
        })(t, l.textValue?.trim()),
        c = s.useMemo(() => o.find((e) => e.isThumbnail), [o]),
        u = null != o && o.length > 0,
        m = s.useMemo(() => {
            let e = o?.length > 1 ? 1.15 : 1;
            return { width: 153 * e, height: 86 * e };
        }, [o]),
        h = s.useCallback(
            (e) => {
                null != c && n7.A.remove(t.id, c.id, n8.oU.CREATE_FORUM_POST.drafts.type);
                let { files: n } = e.currentTarget;
                (null != n &&
                    (0, lu.R)(n, t, n8.oU.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0,
                        origin: "file_picker",
                    }),
                    (e.currentTarget.value = ""));
            },
            [t, c],
        );
    function g(e) {
        (e.stopPropagation(),
            c?.upload != null &&
                (0, ty.mM)(async () => {
                    let e = c.upload;
                    et()(null != e, "upload should not be null");
                    let { default: l } = await n.e(669865).then(n.bind(n, 507536));
                    return (n) =>
                        (0, i.jsx)(l, {
                            ...n,
                            upload: e,
                            onSubmit: (n) => {
                                let { name: l, description: i, spoiler: s } = n;
                                n7.A.update(t.id, e.id, n8.oU.CREATE_FORUM_POST.drafts.type, {
                                    filename: l,
                                    description: i,
                                    spoiler: s,
                                });
                            },
                            disableSpoiler: !0,
                        });
                }));
    }
    let x = (0, i.jsx)(lM.A, {
        color: f.XD.CUSTOM,
        className: lz.zL,
        innerClassName: lz.Nr,
        onChange: h,
        multiple: !1,
        "aria-hidden": !0,
        filters: lH,
        "aria-describedby": lB,
        "aria-label": u ? eZ.intl.string(eZ.t.MxJI3f) : eZ.intl.string(eZ.t.Cbiofa),
        children: u
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(lV, { mediaAttachments: o, containerWidth: m.width, containerHeight: m.height }),
                      (0, i.jsxs)("div", {
                          className: r()(lz.On, { [lz.bP]: o?.length > 2 }),
                          children: [
                              (0, i.jsx)(N.E, {
                                  variant: "body-xs/medium",
                                  color: "text-default",
                                  children: eZ.intl.string(eZ.t.MxJI3f),
                              }),
                              null == c &&
                                  (0, i.jsx)(nK.PencilIcon, { size: "xs", color: "currentColor", className: lz.IZ }),
                          ],
                      }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(lo.ImagePlusIcon, {
                          size: "custom",
                          width: 39,
                          height: 39,
                          color: "currentColor",
                          className: lz.T3,
                      }),
                      (0, i.jsx)(N.E, {
                          variant: "body-xs/normal",
                          color: "text-muted",
                          children: eZ.intl.string(eZ.t.Cbiofa),
                      }),
                  ],
              }),
    });
    return (0, i.jsx)("div", {
        className: lz.iT,
        style: m,
        children:
            null != c
                ? (0, i.jsx)(ls.A, {
                      actions: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(lS.A, {
                                  className: lz.XI,
                                  tooltip: eZ.intl.string(eZ.t.Y8ujqr),
                                  onClick: g,
                                  children: (0, i.jsx)(nK.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                              (0, i.jsx)(lS.A, {
                                  className: lz.XI,
                                  tooltip: eZ.intl.string(eZ.t.vN7REz),
                                  onClick: () => n7.A.remove(t.id, c.id, n8.oU.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, i.jsx)(lE.TrashIcon, { size: "md", color: "currentColor" }),
                              }),
                          ],
                      }),
                      draftType: n8.oU.CREATE_FORUM_POST.drafts.type,
                      id: c.id,
                      channelId: t.id,
                      handleEditModal: g,
                      keyboardModeEnabled: a,
                      size: ls.L.SMALL,
                      className: lz.Xc,
                      children: x,
                  })
                : x,
    });
}
var l$ = n(451909),
    lq = n(91624),
    lK = n(931664),
    lQ = n(631576),
    lY = n(474078),
    lX = n(55294),
    lJ = n(383233),
    lZ = n(101392),
    l0 = n(710272),
    l1 = n(753738);
function l2(e, t) {
    return { type: e, message: t ?? null };
}
function l4(e, t) {
    return l2(1, (0, l1.cw)(e, t?.id));
}
function l3(e, t) {
    return null == e ||
        (0 === e.type && null != t.content && t.content.trim().length > 0) ||
        (2 === e.type && null != t.tags && t.tags.length > 0)
        ? null
        : (e.message ?? null);
}
var l6 = n(774812),
    l5 = n(691060),
    l7 = n(91871),
    l8 = n.n(l7),
    l9 = n(190199),
    ie = n(914427),
    it = n(121681),
    il = n(287683);
function ii(e) {
    let { tag: t } = e,
        { id: n, name: l, emojiId: s, emojiName: a } = t,
        r = (0, x.bG)([it.Ay], () => (null != s ? it.Ay.getUsableCustomEmojiById(s) : null)),
        o = null != s || null != a;
    return (0, i.jsx)(
        l9.x4,
        {
            value: n,
            children: (0, i.jsx)(l9.x4.Label, {
                children: (0, i.jsxs)("div", {
                    className: il.nM,
                    children: [
                        o
                            ? (0, i.jsx)(ng.A, {
                                  className: il.__invalid_emoji,
                                  emojiId: s,
                                  emojiName: a,
                                  animated: !!r?.animated,
                              })
                            : (0, i.jsx)(n6.TagIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: il.__invalid_emoji,
                              }),
                        (0, i.jsx)(N.E, { variant: "body-md/semibold", color: "text-default", children: l }),
                    ],
                }),
            }),
        },
        n,
    );
}
function is(e) {
    let { parentChannel: t, appliedTags: n, maxTagsApplied: l, onSelectTag: s, onClose: a } = e,
        r = (0, l5.OT)(t);
    return (0, i.jsx)(ie.p, {
        value: n,
        onChange: function (e) {
            (!l || n.has(e)) && (s(e), a());
        },
        placeholder: eZ.intl.string(eZ.t.MbhGm7),
        "aria-label": eZ.intl.string(eZ.t.MbhGm7),
        children: (e) =>
            r.filter((t) => l8()(e.toLowerCase(), t.name.toLowerCase())).map((e) => (0, i.jsx)(ii, { tag: e }, e.id)),
    });
}
var ia = n(376310),
    ir = n(230397),
    io = n(770178),
    ic = n(765548);
let id = function () {
    let [e, t] = s.useState(400),
        n = (0, ic.A)((e) => {
            t(e.target.clientWidth);
        });
    return { containerRef: (0, io.w)(n), containerWidth: e };
};
var iu = n(746080),
    im = n(803181);
let ih = n8.oU.CREATE_FORUM_POST;
function ig(e) {
    var t, n;
    let l,
        a,
        { parentChannel: o, isSearchLoading: c, numResults: u, onChange: m, canCreatePost: h, inputRef: g } = e,
        f = !(0, Z.V)(o) && h,
        {
            textAreaState: j,
            formOpen: v,
            previewing: p,
        } = (0, eE.kU)((e) => {
            let { textAreaState: t, formOpen: n, previewing: l } = e;
            return { textAreaState: t, formOpen: n, previewing: l };
        }, d.x),
        [b, C] = s.useState(null),
        A = s.useContext(th.EH),
        N = s.useCallback(() => {
            A.bumpDispatchPriority();
        }, [A]),
        y = (0, x.bG)([eV.A], () => eV.A.can(eJ.xBc.ATTACH_FILES, o)),
        E = (0, x.yK)([tm.A], () => tm.A.getUploads(o.id, tc.C.FirstThreadMessage)),
        S = v && y && f,
        I = o?.isMediaChannel() === !0,
        T =
            ((t = o),
            (n = g),
            (l = (0, eE.ST)()),
            (a = (0, eb.Hv)(t)),
            s.useCallback(() => {
                let {
                    formOpen: e,
                    setFormOpenFromUserAction: i,
                    name: s,
                    textAreaState: r,
                    hasClickedForm: o,
                } = l.getState();
                if (!e) {
                    if (
                        (setTimeout(() => {
                            (0, nJ.vq)(n.current, HTMLTextAreaElement) && n.current?.focus();
                        }, 0),
                        t.isGameInvitesChannel())
                    )
                        return;
                    ((o && s.length > 0) ||
                        (r.textValue.trim().length > 0 && r.textValue.trim() !== a) ||
                        tm.A.getUploads(t.id, tc.C.FirstThreadMessage).length > 0) &&
                        i();
                }
            }, [l, t, a, n])),
        M = (function (e) {
            let { formOpen: t } = (0, eE.kU)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, d.x),
                n = (0, eE.ST)(),
                l = (0, lX.NV)({ parentChannel: e }),
                i = iN(e),
                { rateLimitPerUser: a } = e,
                r = (0, x.bG)([lZ.A], () => lZ.A.getSlowmodeCooldownGuess(e.id, lZ.R.CreateThread)),
                o = (0, ln._i)(e),
                c = a > 0 && !o && r > 0;
            s.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                (e(null), t(null));
            }, [t, n]);
            let u = s.useCallback(
                (t, l, i) => {
                    let { name: s, textAreaState: a } = n.getState();
                    (null == t && (t = a.textValue), (t = t.trim()));
                    let { content: r } = l$.Ay.parse(e, t);
                    if (
                        ((t = r),
                        (null == l || 0 === l.length) &&
                            (l = lK.A.getStickerPreview(e.id, ih.drafts.type)?.map((e) => e.id)),
                        (null == i || 0 === i.length) && (i = tm.A.getUploads(e.id, tc.C.FirstThreadMessage)),
                        null != i && i.length > 0 && e.isMediaChannel())
                    ) {
                        let e = i.findIndex((e) => !0 === e.isThumbnail);
                        if (e > -1) {
                            let t = i[e];
                            (i.splice(e, 1), i.unshift(t));
                        }
                    }
                    let o = 0 === s.length,
                        c = (null == t || 0 === t.length) && (null == l || 0 === l.length) && 0 === i.length;
                    return { content: t, stickers: l, uploads: i, hasNameError: o, hasMessageError: c };
                },
                [e, n],
            );
            return s.useCallback(
                async (t, s, a) => {
                    let {
                            setNameError: r,
                            setMessageError: o,
                            setSubmitting: d,
                            resetFormState: m,
                            formOpen: h,
                            setFormOpen: g,
                            setPreviewing: x,
                            setFormOpenFromUserAction: f,
                            setGuidelinesOpen: j,
                        } = n.getState(),
                        v = l6.A.hasSeen(e.id);
                    if (!h)
                        return (
                            e.isGameInvitesChannel() ||
                                ((0, tb.jr)({ guildId: e.guild_id, channelId: e.id }),
                                v || n.getState().setGuidelinesOpen(!0),
                                f()),
                            { shouldClear: !1, shouldRefocus: !1 }
                        );
                    let { content: p, stickers: b, uploads: C, hasNameError: A, hasMessageError: N } = u(t, s, a);
                    if (
                        (r(A ? l2(0, eZ.intl.string(eZ.t["71wuR0"])) : null),
                        o(N ? l2(0, eZ.intl.string(eZ.t["w/BT3G"])) : null),
                        A || N || i || c)
                    )
                        return { shouldClear: !1, shouldRefocus: !0 };
                    try {
                        d(!0);
                        let { valid: t } = await (0, l0.i)({
                            content: p,
                            hasStickers: null != b && b.length > 0,
                            hasAttachments: null != C && C.length > 0,
                            type: ih,
                            channel: e,
                        });
                        if (!t) return { shouldClear: !1, shouldRefocus: !0 };
                        let n = await l(p, b, C);
                        return (
                            (0, to.GS)(n),
                            tx.A.resort(e.id),
                            (0, lQ.x5)(e.id, ih.drafts.type),
                            m(),
                            g(!1),
                            x(!1),
                            l6.A.markAsSeen(e.id),
                            j(!1),
                            { shouldClear: !0, shouldRefocus: !1 }
                        );
                    } catch (t) {
                        return (
                            t.body?.code === eJ.t02.AUTOMOD_TITLE_BLOCKED
                                ? r(l4(t.body, e))
                                : t.body?.code === eJ.t02.AUTOMOD_MESSAGE_BLOCKED
                                  ? o(l4(t.body, e))
                                  : t.body?.code === eJ.t02.INVALID_FORM_BODY &&
                                    t.body?.errors?.name != null &&
                                    r(l2(3, eZ.intl.string(eZ.t["71wuR0"]))),
                            { shouldClear: !1, shouldRefocus: !0 }
                        );
                    } finally {
                        d(!1);
                    }
                },
                [l, u, e, n, i, c],
            );
        })(o);
    return (
        s.useLayoutEffect(m, [v, j, E, m]),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("div", {
                "aria-label": f ? eZ.intl.string(eZ.t.dq7mAa) : eZ.intl.string(eZ.t["5h0QOP"]),
                className: r()(im.kL, { [im.yZ]: !v }),
                onClick: !v && f ? T : void 0,
                children: (0, i.jsxs)("form", {
                    onMouseDown: N,
                    onFocus: N,
                    onSubmit: (e) => {
                        (e.preventDefault(), !f || o.isGameInvitesChannel() || M());
                    },
                    children: [
                        (0, i.jsxs)("div", {
                            className: im.KJ,
                            children: [
                                (0, i.jsx)(ix, { parentChannel: o, isSearchLoading: c, inputRef: g }),
                                (0, i.jsxs)("div", {
                                    className: p ? im.vJ : im.Zd,
                                    children: [
                                        (0, i.jsx)(ij, {
                                            editorRef: b,
                                            parentChannel: o,
                                            isSearchLoading: c,
                                            numResults: u,
                                            inputRef: g,
                                            canCreatePost: f,
                                        }),
                                        v &&
                                            (0, i.jsx)(ib, {
                                                editorRef: b,
                                                setEditorRef: C,
                                                parentChannel: o,
                                                submit: M,
                                                disabled: !f,
                                            }),
                                        p && (0, i.jsx)(iC, {}),
                                    ],
                                }),
                                S && (I ? (0, i.jsx)(lW, { parentChannel: o }) : (0, i.jsx)(lA, { channelId: o.id })),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: im.Zd,
                            children: [
                                S && I && (0, i.jsx)(ly, { parentChannel: o }),
                                v && (0, i.jsx)(iE, { className: im.CN, parentChannel: o, canCreatePost: f }),
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
}
let ix = s.memo(function (e) {
        let { parentChannel: t, isSearchLoading: n, inputRef: l } = e,
            {
                formOpen: a,
                name: r,
                textAreaState: o,
                hasClickedForm: c,
                submitting: u,
            } = (0, eE.kU)((e) => {
                let {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    previewing: i,
                    textAreaState: s,
                    hasClickedForm: a,
                    submitting: r,
                } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    textAreaState: s,
                    previewing: i,
                    hasClickedForm: a,
                    submitting: r,
                };
            }, d.x),
            m = (0, eE.ST)(),
            h = (0, eb.Hv)(t),
            g = s.useCallback(() => {
                (m.getState().resetFormState(),
                    n5.A.clearDraft(t.id, tc.C.ThreadSettings),
                    n5.A.clearDraft(t.id, tc.C.FirstThreadMessage),
                    n7.A.clearAll(t.id, tc.C.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    l.current?.blur(),
                    (0, tb.py)({ guildId: t.guild_id, channelId: t.id }));
            }, [m, t.id, t.guild_id, l]),
            x = s.useMemo(
                () =>
                    !a &&
                    (r.trim().length > 0 ||
                        (o.textValue.trim().length > 0 && o.textValue.trim() !== h) ||
                        tm.A.getUploads(t.id, tc.C.FirstThreadMessage).length > 0) &&
                    c
                        ? (0, i.jsx)(nK.PencilIcon, { size: "md", color: "currentColor", className: im.rD })
                        : (0, i.jsx)(n0.B, { onClear: g, hasContent: a, isLoading: n || u, size: "md" }),
                [n, a, c, r, o.textValue, g, t.id, h, u],
            );
        return (0, i.jsx)("div", { className: im.VB, children: x });
    }),
    ij = s.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: l, editorRef: a, isSearchLoading: r, numResults: o } = e,
            {
                formOpen: c,
                nameError: u,
                name: m,
                textAreaState: h,
                previewing: g,
            } = (0, eE.kU)((e) => {
                let {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    previewing: i,
                    textAreaState: s,
                    hasClickedForm: a,
                    submitting: r,
                } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    textAreaState: s,
                    previewing: i,
                    hasClickedForm: a,
                    submitting: r,
                };
            }, d.x),
            f = (0, eE.ST)(),
            v = null != t.topic && 0 !== t.topic.length,
            p = l6.A.hasSeen(t.id),
            b = (0, eb.Hv)(t),
            C = (0, x.bG)([e$.default], () => e$.default.getCurrentUser());
        (et()(null != C, "current user cannot be null"),
            (0, th.Vo)({
                event: eJ.jej.FOCUS_COMPOSER_TITLE,
                handler: function () {
                    let e = n.current;
                    (e?.focus(),
                        f.getState().setTitleFocused(!0),
                        t.isGameInvitesChannel() || (f.getState().setFormOpen(!0), f.getState().setHasClickedForm(!0)));
                },
            }));
        let A = s.useCallback(
                async (e) => {
                    let n = e.clipboardData.files[0];
                    if (null != n && n.type.startsWith("image/")) {
                        if (t.isGameInvitesChannel()) return;
                        (e.preventDefault(),
                            await (0, lu.R)([n], t, tc.C.FirstThreadMessage, { origin: "clipboard" }),
                            f.getState().setFormOpenFromUserAction());
                    }
                },
                [t, f],
            ),
            N = l3(u, { content: m });
        return (0, i.jsxs)("div", {
            className: im.gn,
            onPaste: A,
            children: [
                c && g
                    ? (0, i.jsx)(j.D, { variant: "heading-sm/semibold", className: im.DD, children: m })
                    : (0, i.jsxs)(nn.B, {
                          gap: 4,
                          children: [
                              (0, i.jsx)(nZ.d, {
                                  value: m,
                                  placeholder:
                                      !l || t.isGameInvitesChannel()
                                          ? eZ.intl.string(eZ.t["5h0QOP"])
                                          : c || (h.textValue.length > 0 && h.textValue.trim() !== b)
                                            ? eZ.intl.string(eZ.t.lU4dDS)
                                            : eZ.intl.string(eZ.t.CjmivA),
                                  rows: 1,
                                  maxLength: 100,
                                  onChange: function (e) {
                                      let n = e.target.value,
                                          l = (0, lY.A)(n, !1);
                                      f.getState().setName(l);
                                      let i = 0 === l.trim().length,
                                          s = 0 === h.textValue.trim().length,
                                          a = h.textValue.trim() === b;
                                      (i && (s || a) && f.getState().setHasClickedForm(!1),
                                          c || tx.A.updateForumSearchQuery(t.id, l));
                                  },
                                  onFocus: function () {
                                      (f.getState().setTitleFocused(!0), f.getState().setBodyFocused(!1));
                                  },
                                  onBlur: function () {
                                      f.getState().setTitleFocused(!1);
                                      let e = (0, lY.A)(m, !0);
                                      e !== m && (f.getState().setName(e), c || tx.A.updateForumSearchQuery(t.id, e));
                                  },
                                  onKeyDown: function (e) {
                                      "Enter" === e.key &&
                                          (e.preventDefault(),
                                          e.stopPropagation(),
                                          c && m.length > 0
                                              ? a?.focus()
                                              : l && e.shiftKey && !t.isGameInvitesChannel()
                                                ? ((0, tb.sB)({ guildId: t.guild_id, channelId: t.id }),
                                                  v && !p && f.getState().setGuidelinesOpen(!0),
                                                  f.getState().setFormOpenFromUserAction(),
                                                  m.trim().length > 0 && (f.getState().setBodyFocused(!0), a?.focus()))
                                                : c ||
                                                  !(m.length > 0) ||
                                                  null != o ||
                                                  r ||
                                                  tx.A.updateForumSearchQuery(t.id, m));
                                      let i = n.current;
                                      if ("Home" === e.key || "End" === e.key) {
                                          if (null == i) return;
                                          if ((e.preventDefault(), e.stopPropagation(), "Home" === e.key)) {
                                              let t = e.shiftKey ? Math.max(i.selectionStart, i.selectionEnd) : 0;
                                              i.setSelectionRange(0, t, "backward");
                                          } else {
                                              let t = e.shiftKey
                                                      ? Math.min(i.selectionStart, i.selectionEnd)
                                                      : m.length,
                                                  n = m.length;
                                              i.setSelectionRange(t, n, "forward");
                                          }
                                      }
                                      "Escape" !== e.key ||
                                          f.getState().submitting ||
                                          (n.current?.blur(),
                                          f.getState().setFormOpen(!1),
                                          f.getState().setTitleFocused(!1),
                                          f.getState().setBodyFocused(!1),
                                          f.getState().setPreviewing(!1));
                                  },
                                  className: im.DD,
                                  ref: n,
                              }),
                              null != N ? (0, i.jsx)(n1.U, { error: N }) : null,
                          ],
                      }),
                c
                    ? null
                    : (0, i.jsxs)(nn.B, {
                          direction: "horizontal",
                          gap: 8,
                          justify: "end",
                          fullWidth: !1,
                          children: [
                              (0, i.jsx)(iv, { parentChannel: t }),
                              t.isGameInvitesChannel() ? null : (0, i.jsx)(iS, { parentChannel: t, canCreatePost: l }),
                          ],
                      }),
            ],
        });
    });
function iv(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, eE.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, d.x),
        l = (0, eE.ST)();
    return null != t.topic && 0 !== t.topic.length
        ? (0, i.jsx)(_.m, {
              text: eZ.intl.string(eZ.t["4d4T4l"]),
              children: (0, i.jsx)(n2.K, {
                  size: "sm",
                  variant: "secondary",
                  onClick: function () {
                      l.getState().setGuidelinesOpen(!n);
                  },
                  icon: nq.BookCheckIcon,
                  "aria-label": eZ.intl.string(eZ.t["4d4T4l"]),
              }),
          })
        : null;
}
let ip = s.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            l = new lJ.Ay({ channel_id: t.id, content: n }),
            { content: s } = (0, eG.A)(l, { allowList: !0, allowHeading: !0, previewLinkTarget: !0, allowLinks: !0 }),
            a = (0, lq.Ay)({ message: l, channel: t, compact: !1 }, s, !1);
        return (0, i.jsx)("div", { className: r()(im.SL, im.ly), children: a });
    }),
    ib = s.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: l = !1, editorRef: a, setEditorRef: o } = e,
            c = (0, x.bG)([e$.default], () => e$.default.getCurrentUser());
        et()(null != c, "current user cannot be null");
        let {
                messageError: u,
                previewing: m,
                textAreaState: h,
                bodyFocused: g,
                formOpen: f,
            } = (0, eE.kU)((e) => {
                let { messageError: t, textAreaState: n, previewing: l, bodyFocused: i, formOpen: s } = e;
                return { messageError: t, textAreaState: n, previewing: l, bodyFocused: i, formOpen: s };
            }, d.x),
            j = (0, eE.ST)();
        s.useEffect(() => () => (0, tb._4)({ guildId: t.guild_id, channelId: t.id }), [t.guild_id, t.id]);
        let v = s.useCallback(() => {
                j.getState().setBodyFocused(!0);
            }, [j]),
            p = s.useCallback(() => {
                j.getState().setBodyFocused(!1);
            }, [j]),
            b = s.useCallback(
                (e, t, n) => {
                    let { setTextAreaState: l } = j.getState();
                    l({ textValue: t, richValue: n });
                },
                [j],
            ),
            C = s.useCallback(
                (e) => {
                    let { value: t, uploads: l, stickers: i } = e;
                    return n(t, i, l);
                },
                [n],
            );
        ((0, th.Vo)({ event: eJ.jej.TEXTAREA_FOCUS, handler: v }),
            (0, th.Vo)({ event: eJ.jej.TEXTAREA_BLUR, handler: p }));
        let A = l3(u, { content: h.textValue });
        return (0, i.jsx)("div", {
            className: im.IP,
            children: (0, i.jsxs)("div", {
                className: im.hQ,
                children: [
                    m
                        ? (0, i.jsx)(ip, { parentChannel: t, textValue: h.textValue })
                        : (0, i.jsx)("div", {
                              onClick: v,
                              children: (0, i.jsx)(le.Ay, {
                                  type: ih,
                                  setEditorRef: o,
                                  channel: t,
                                  placeholder: eZ.intl.string(eZ.t["8IPnv1"]),
                                  textValue: h.textValue,
                                  richValue: h.richValue,
                                  focused: g,
                                  className: im.gM,
                                  innerClassName: r()(im.SL, { [im.cr]: null != A }),
                                  onChange: b,
                                  onFocus: v,
                                  onBlur: p,
                                  onSubmit: C,
                                  promptToUpload: lu.R,
                                  disabled: l,
                                  onKeyDown: function (e) {
                                      (("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(),
                                          f &&
                                              "Escape" === e.key &&
                                              !j.getState().submitting &&
                                              (a?.blur(),
                                              j.getState().setFormOpen(!1),
                                              j.getState().setTitleFocused(!1),
                                              j.getState().setBodyFocused(!1),
                                              j.getState().setPreviewing(!1)));
                                  },
                                  autoCompletePosition: "bottom",
                              }),
                          }),
                    (0, i.jsx)(n1.U, { error: A }),
                ],
            }),
        });
    });
function iC() {
    return (0, i.jsx)("div", {
        className: im.fv,
        children: (0, i.jsx)(N.E, {
            variant: "body-sm/normal",
            color: "interactive-text-default",
            children: eZ.intl.string(eZ.t["WE/cYo"]),
        }),
    });
}
function iA(e) {
    let { textAreaState: t } = (0, eE.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        n = (0, x.yK)([tm.A], () => tm.A.getUploads(e.id, tc.C.FirstThreadMessage)),
        l = (0, x.bG)([lK.A], () => lK.A.getStickerPreview(e.id, ih.drafts.type));
    return s.useMemo(
        () => t.textValue.trim().length > 0 || n.length > 0 || (null != l && l.length > 0),
        [t.textValue, n, l],
    );
}
function iN(e) {
    let t = iA(e),
        { appliedTags: n, name: l } = (0, eE.kU)((e) => {
            let { appliedTags: t, name: n } = e;
            return { appliedTags: t, name: n };
        }, d.x);
    return s.useMemo(() => e.hasFlag(iu.lx.REQUIRE_TAG) && 0 === n.size && l.length > 0 && t, [n, l, e, t]);
}
function iy() {
    let { previewing: e } = (0, eE.kU)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, d.x),
        t = (0, eE.ST)(),
        n = s.useCallback(() => {
            (t.getState().setPreviewing(!e), (0, tb.Q_)());
        }, [e, t]),
        l = e ? eZ.intl.string(eZ.t.ojM1xJ) : eZ.intl.string(eZ.t.SKNnqq);
    return (0, i.jsx)(_.m, {
        text: l,
        children: (0, i.jsx)(n2.K, {
            variant: "secondary",
            size: "sm",
            onClick: n,
            icon: e ? n4.EyeSlashIcon : n3.EyeIcon,
            "aria-label": l,
        }),
    });
}
let iE = s.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: l } = e,
        { textAreaState: a, name: r } = (0, eE.kU)((e) => {
            let { textAreaState: t, name: n } = e;
            return { textAreaState: t, name: n };
        }, d.x),
        { rateLimitPerUser: o } = t,
        c = o > 0,
        u = (0, x.bG)([lZ.A], () => lZ.A.getSlowmodeCooldownGuess(t.id, lZ.R.CreateThread)),
        m = (0, ln._i)(t),
        h = iN(t),
        g = (0, eE.ST)(),
        f = s.useCallback(() => {
            g.getState().setBodyFocused(!1);
        }, [g]),
        j = s.useMemo(() => "" !== r.trim() && "" !== a.textValue.trim(), [r, a.textValue]);
    return (
        s.useEffect(() => {
            j || g.getState().setPreviewing(!1);
        }, [j, g]),
        (0, i.jsxs)("div", {
            className: l,
            children: [
                (0, i.jsx)(iT, { parentChannel: t }),
                (0, i.jsx)("div", { className: im.XJ }),
                (0, i.jsxs)("div", {
                    className: im.gO,
                    children: [
                        (0, i.jsxs)("div", {
                            className: im.ne,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: im.Kk,
                                    children: [
                                        (0, i.jsx)(lt.A, { type: ih, textValue: a.textValue, className: im.Dq }),
                                        c &&
                                            (0, i.jsx)(ir.A, {
                                                rateLimitPerUser: o,
                                                slowmodeCooldownGuess: u,
                                                isBypassSlowmode: m,
                                                leadingIcon: !0,
                                            }),
                                    ],
                                }),
                                (0, i.jsx)(iv, { parentChannel: t }),
                                j && (0, i.jsx)(iy, {}),
                                (0, i.jsx)(iS, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: c && !m && u > 0,
                                }),
                            ],
                        }),
                        (0, i.jsx)(n9.A, { type: ih, className: im.n1, onClick: f, channel: t }, "expression"),
                    ],
                }),
                h &&
                    (0, i.jsx)(N.E, {
                        variant: "body-sm/medium",
                        color: "text-feedback-critical",
                        className: im.ku,
                        children: eZ.intl.string(eZ.t.xPfNQi),
                    }),
            ],
        })
    );
});
function iS(e) {
    let { parentChannel: t, canCreatePost: n, disabled: l, disableIfInvalid: s = !1 } = e,
        a = (0, Z.V)(t),
        {
            submitting: r,
            name: o,
            formOpen: c,
        } = (0, eE.kU)((e) => {
            let { submitting: t, name: n, formOpen: l } = e;
            return { submitting: t, name: n, formOpen: l };
        }, d.x),
        u = iA(t),
        m = !iN(t) && u && o.trim().length > 0;
    return __OVERLAY__ || a
        ? null
        : (0, i.jsx)(E.$, {
              variant: "primary",
              type: "submit",
              size: "sm",
              loading: r,
              disabled: (s && !m) || l || !n,
              icon: ed.ChatIcon,
              text: c ? eZ.intl.string(eZ.t.pIuQI6) : eZ.intl.string(eZ.t.TyAuoT),
          });
}
function iI() {
    return Promise.resolve();
}
function iT(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: l,
            setPopoutOpen: a,
        } = (0, eE.kU)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: l } = e;
            return { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: l };
        }, d.x),
        o = n.size >= 5,
        c = (0, m.Ay)({
            id: `${t.id}-post-form-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: iI,
            scrollToEnd: iI,
            orientation: h.Gl.HORIZONTAL,
        }),
        { containerRef: g, containerWidth: x } = id(),
        f = s.useRef(null),
        j = s.useRef(null),
        [v, p] = s.useState(!0),
        b = (0, l5.OT)(t),
        [C, A] = s.useState(0);
    return (s.useLayoutEffect(() => {
        let e = f.current,
            t = e?.children?.[0],
            n = null == e || null == t || t.clientHeight > e.clientHeight;
        if ((n !== v && p(n), n && null != g.current && null != t && null != t.children)) {
            let { left: e, top: n } = g.current.getBoundingClientRect(),
                l = 0;
            for (let i of t.children) {
                let { right: t, top: s, height: a } = i.getBoundingClientRect();
                if (s - n > a) break;
                t - e > l && (l = t - e);
            }
            A(l);
        }
    }, [b, v, g, x]),
    0 === b.length)
        ? null
        : (0, i.jsxs)("div", {
              className: im.Pc,
              ref: g,
              children: [
                  (0, i.jsx)(n6.TagIcon, { size: "xs", color: "currentColor", className: im.HZ }),
                  (0, i.jsx)("div", {
                      className: im.Tw,
                      ref: f,
                      children: (0, i.jsx)(u.hD, {
                          navigator: c,
                          children: (0, i.jsx)(u.PR, {
                              children: (e) => {
                                  let { ref: t, ...s } = e;
                                  return (0, i.jsx)("div", {
                                      className: im.j5,
                                      ref: t,
                                      ...s,
                                      children: b.map((e) =>
                                          (0, i.jsx)(
                                              ia.Ay,
                                              {
                                                  ariaLabel: eZ.intl.formatToPlainString(eZ.t.FSZVIR, {
                                                      tagName: e.name,
                                                  }),
                                                  tag: e,
                                                  onClick: o && !n.has(e.id) ? void 0 : () => l(e.id),
                                                  disabled: !n.has(e.id) && n.size >= 5,
                                                  selected: n.has(e.id),
                                                  size: ia.Ay.Sizes.SMALL,
                                              },
                                              e.id,
                                          ),
                                      ),
                                  });
                              },
                          }),
                      }),
                  }),
                  v &&
                      (0, i.jsx)(M.Y, {
                          targetElementRef: j,
                          onRequestOpen: () => a(!0),
                          onRequestClose: () => a(!1),
                          renderPopout: (e) => {
                              let { closePopout: s } = e;
                              return (0, i.jsx)(is, {
                                  parentChannel: t,
                                  appliedTags: n,
                                  maxTagsApplied: o,
                                  onSelectTag: l,
                                  onClose: s,
                              });
                          },
                          position: "bottom",
                          align: "center",
                          children: (e) =>
                              (0, i.jsx)("div", {
                                  ref: j,
                                  className: im.Wk,
                                  style: { left: C },
                                  children: (0, i.jsx)(E.$, {
                                      ...e,
                                      size: "sm",
                                      variant: "secondary",
                                      icon: R.ChevronSmallDownIcon,
                                      iconPosition: "end",
                                      text: eZ.intl.string(eZ.t.w6T0Yc),
                                  }),
                              }),
                      }),
                  (0, i.jsx)("div", {
                      className: r()(im.Wk, im.Dz),
                      children: (0, i.jsx)(E.$, {
                          size: "sm",
                          variant: "secondary",
                          icon: R.ChevronSmallDownIcon,
                          iconPosition: "end",
                          text: eZ.intl.string(eZ.t.w6T0Yc),
                      }),
                  }),
              ],
          });
}
var iM = n(602137),
    ik = n(782134),
    iR = n(391242),
    i_ = n(191023),
    iw = n(234914),
    iP = n(930125),
    iD = n(282108),
    iL = n(475290);
function iO(e) {
    let { channel: t, facepileRef: n, firstMessage: l, leftAccessory: s } = e,
        a = (0, ej.m)(t.id),
        r = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: iL.GD,
        children: [
            (0, i.jsxs)("div", {
                className: iL.QW,
                children: [
                    (0, i.jsx)("div", {
                        className: iL.mz,
                        children: (0, i.jsx)(ns.$k, { channel: t, iconSize: 16, showReadState: !0 }),
                    }),
                    s,
                    a.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("span", { className: iL.xE, children: "\u2022" }),
                                  (0, i.jsxs)("div", {
                                      className: iL.IW,
                                      children: [
                                          (0, i.jsx)(ns.gL, { channel: t, userIds: a, facepileRef: n }),
                                          (0, i.jsx)("div", {
                                              className: iL.r$,
                                              children: (0, i.jsx)(ec.n, { themed: !0, dotRadius: 2 }),
                                          }),
                                          (0, i.jsx)(em.Ay, {
                                              channel: t,
                                              className: iL.mD,
                                              renderDots: !1,
                                              renderSlowmode: !1,
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: iL.QW,
                children: [
                    r || null == l ? null : (0, i.jsx)(ns.NA, { firstMessage: l, channel: t }),
                    null == l ? null : (0, i.jsx)(ns.cn, { firstMessage: l, channel: t }),
                ],
            }),
        ],
    });
}
var iG = n(994500),
    iF =
        (((l = {})[(l.THREE_BY_TWO = 0.6666666666666666)] = "THREE_BY_TWO"),
        (l[(l.SIXTEEN_BY_NINE = 0.5625)] = "SIXTEEN_BY_NINE"),
        l);
let iU = { columns: 1, columnWidth: 450 };
function iz(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.6666666666666666,
        n = e - 2,
        l = Math.ceil(n * t);
    return [n, l];
}
function iH(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.6666666666666666;
    return 60 + iz(e - 24, t)[1] + 24 + 36;
}
function iB(e) {
    let { message: t, channel: n, containerWidth: l, hideTags: s = !1 } = e,
        { isBlocked: a, isIgnored: r } = (0, x.cf)([iG.A], () => ({
            isBlocked: null != t && iG.A.isBlockedForMessage(t),
            isIgnored: null != t && iG.A.isIgnoredForMessage(t),
        }));
    return a
        ? (0, i.jsx)(iV, { message: eZ.intl.string(eZ.t.Lkp2fB), containerWidth: l, channel: n, hideTags: s })
        : r
          ? (0, i.jsx)(iV, { message: eZ.intl.string(eZ.t.yWK7ZM), containerWidth: l, channel: n, hideTags: s })
          : null;
}
function iV(e) {
    let { message: t, containerWidth: n, channel: l, hideTags: a = !1 } = e,
        [o, c] = iz(n - 24),
        { shouldRenderTagsRow: d } = (0, eS.BA)({ channel: l, isNew: !1 }),
        u = s.useMemo(() => ({ width: o, height: c }), [o, c]);
    return (0, i.jsxs)("div", {
        className: iL.Cv,
        style: u,
        children: [
            (0, i.jsx)("div", {
                className: iL.Qs,
                children: (0, i.jsx)(N.E, {
                    className: iL.Wv,
                    variant: "body-sm/medium",
                    color: "text-muted",
                    children: t,
                }),
            }),
            (0, i.jsx)("div", {
                className: r()(iL.kh, { [iL.ZH]: !d }),
                children: d && !a ? (0, i.jsx)(eS.Ay, { channel: l, tagsClassName: iL.uU }) : null,
            }),
        ],
    });
}
var iW = n(461771),
    i$ = n(602034);
let iq = "data-grid-item-id",
    iK = "data-grid-section",
    iQ = "data-grid-prev-section-boundary",
    iY = new Set([h.D$.UP, h.D$.DOWN, h.D$.LEFT, h.D$.RIGHT]);
function iX(e) {
    let { section: t, column: n, row: l } = e,
        i = `[${iK}="${t}"]`,
        s = `[aria-colindex="${n}"]`,
        a = `[aria-rowindex="${l}"]`;
    return `${i}${s}${a}`;
}
let iJ = { id: "NO_LIST", onKeyDown() {}, ref: s.createRef() },
    iZ = s.createContext({ id: "NO_LIST", setFocus() {} }),
    i0 = s.createContext(iJ);
function i1(e) {
    let { id: t, section: n, row: l, column: i, boundaries: a } = e,
        [r, o] = s.useState(0 === l && 0 === i ? 0 : -1),
        { id: c, setFocus: d } = s.useContext(iZ),
        u = s.useCallback(() => d(t), [t, d]);
    return (
        s.useLayoutEffect(
            () =>
                (0, iW.e)(c, (e) => {
                    o(e === t ? 0 : -1);
                }),
            [t, c],
        ),
        {
            [iq]: (0, i$.t$)(c, t),
            [iK]: n,
            [iQ]: a[n],
            role: "gridcell",
            "aria-rowindex": l,
            "aria-colindex": i,
            tabIndex: r,
            onFocus: u,
        }
    );
}
function i2(e) {
    let { children: t, navigator: n } = e,
        {
            id: l,
            setFocus: a,
            containerProps: { onKeyDown: r, ref: o },
        } = n,
        c = s.useMemo(() => ({ id: l, setFocus: a }), [l, a]),
        d = s.useMemo(() => ({ onKeyDown: r, ref: o, id: l }), [r, o, l]);
    return (0, i.jsx)(i0.Provider, { value: d, children: (0, i.jsx)(iZ.Provider, { value: c, children: t }) });
}
var i4 = n(795435),
    i3 = n(74096),
    i6 = n(659051),
    i5 = n(584283),
    i7 = n(915092),
    i8 = n(627363),
    i9 = n(823545),
    se = n(290863),
    st = n(326191);
function sn(e) {
    let { channel: t, className: n, firstMessage: l } = e,
        s = l?.application?.id,
        { data: a } = (0, i8.YY)(s),
        o = (0, x.bG)(
            [se.A],
            () => {
                let e = l?.author.id;
                return null == e || null == s ? null : se.A.getApplicationActivity(e, s);
            },
            [l, s],
        ),
        c = (0, i5.em)({ presenceActivity: o, channel: t, activityActionType: void 0 }),
        { primaryColor: d, secondaryColor: u } = (0, i9.A)(a?.getIconURL(128));
    if (null == l || null == l.activity) return null;
    let m = (0, i6.A)(o, l, a?.id),
        h = `linear-gradient(45deg, ${d}, ${u})`,
        g = null != o && m ? (o.details ?? o.name) : a?.name;
    return (0, i.jsxs)("div", {
        className: r()(n, st.Nr),
        style: { background: h },
        children: [
            (0, i.jsx)(N.E, {
                variant: "body-sm/semibold",
                color: "text-overlay-light",
                className: st.DD,
                children: g,
            }),
            (0, i.jsx)("div", {
                className: st.yu,
                children: m
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: st.Hg, children: c }),
                              (0, i.jsx)(i7.V, { className: st.$B, activity: o }),
                          ],
                      })
                    : (0, i.jsx)(N.E, {
                          variant: "body-xs/normal",
                          color: "none",
                          className: st.w5,
                          children: eZ.intl.string(tW.default["//c2Xn"]),
                      }),
            }),
        ],
    });
}
var sl = n(983851),
    si = n(607567),
    ss = n(930371);
function sa(e) {
    let { channel: t } = e,
        n = (0, x.bG)([si.Ay], () => si.Ay.getVoiceStatesForChannel(t).length, [t]);
    return 0 === n
        ? null
        : (0, i.jsxs)("div", {
              className: ss.a,
              children: [
                  (0, i.jsx)(sl.VoiceNormalIcon, { size: "xs", color: tN.A.colors.ICON_FEEDBACK_POSITIVE }),
                  (0, i.jsx)(N.E, { variant: "body-sm/medium", color: "text-feedback-positive", children: n }),
              ],
          });
}
var sr = n(227483);
function so(e) {
    let { message: t, channel: n, containerWidth: l } = e,
        s = iB({ message: t, channel: n, containerWidth: l - 32, hideTags: !0 }),
        { content: a } = (0, i4.A)({ firstMessage: t, formatInline: !1, noStyleAndInteraction: !0 });
    return null != s ? s : (0, i.jsx)(i3.Ay, { message: t, content: a, className: sr.BK, compact: !1 });
}
function sc(e) {
    let {
            id: t,
            channel: n,
            goToThread: l,
            coords: a,
            gridCoords: o,
            gridSectionBoundaries: c,
            className: d,
            observePostVisibilityAnalytics: u,
        } = e,
        m = n.id,
        h = s.useRef(null),
        g = (0, x.bG)([ez.Ay], () => ez.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: f, loaded: j } = (0, eC.OA)(n),
        { user: v, author: p } = (0, eb.kn)(n),
        b = (0, G.Ay)(n),
        { messageCountText: C } = (0, eb.k6)(n),
        A = s.useRef(null),
        { handleLeftClick: E, handleRightClick: S } = (0, eT.A)({ facepileRef: A, goToThread: l, channel: n });
    s.useEffect(() => {
        u?.(h.current?.ref, m);
    }, [u, m]);
    let I = (0, eb.Mw)(n, iM.T.CREATION_DATE, nD.EG.POSTED_DURATION_AGO),
        { shouldRenderTagsRow: T } = (0, eS.BA)({ channel: n, isNew: !1 }),
        { onFocus: M, ...k } = i1({ id: t, row: o.row, column: o.column, section: o.section, boundaries: c }),
        R = p?.nick ?? v?.username ?? "",
        _ = v?.getAvatarURL(n.guild_id, (0, ea.FT)(ea._3.SIZE_24));
    return (0, i.jsxs)(y.D, {
        ref: h,
        tag: "li",
        onClick: E,
        onFocus: M,
        onContextMenu: S,
        className: r()(sr.kL, d, { [sr.nT]: g }),
        "aria-label": eZ.intl.formatToPlainString(eZ.t.pgYN6c, { title: b ?? "", count: C }),
        style: { ...a },
        ...k,
        children: [
            (0, i.jsxs)("div", {
                className: sr.wx,
                children: [
                    (0, i.jsx)(es.eu, { src: _, size: ea._3.SIZE_24, className: sr.my, "aria-label": R }),
                    (0, i.jsx)(N.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        className: sr.fh,
                        children: R,
                    }),
                    (0, i.jsx)(N.E, { variant: "body-xs/medium", color: "text-subtle", className: sr.vE, children: I }),
                ],
            }),
            (0, i.jsxs)(ei.M, {
                className: sr.rf,
                children: [
                    j &&
                        null == f &&
                        (0, i.jsx)(N.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: eZ.intl.string(eZ.t.mE3KJN),
                        }),
                    null != f ? (0, i.jsx)(so, { message: f, channel: n, containerWidth: a.width }) : null,
                    T ? (0, i.jsx)(eS.Ay, { channel: n, className: sr.GA }) : null,
                    (0, i.jsx)("div", { className: sr.oO, children: (0, i.jsx)(sn, { channel: n, firstMessage: f }) }),
                ],
            }),
            (0, i.jsx)(ei.M, {
                className: sr.qr,
                children: (0, i.jsx)(iO, {
                    channel: n,
                    firstMessage: f,
                    facepileRef: A,
                    leftAccessory: (0, i.jsx)(sa, { channel: n }),
                }),
            }),
        ],
    });
}
var sd = n(313880);
let su = s.memo(function (e) {
    let {
            id: t,
            threadId: n,
            goToThread: l,
            overrideMedia: s,
            className: a,
            coords: r,
            gridCoords: o,
            gridSectionBoundaries: c,
            observePostVisibilityAnalytics: d,
        } = e,
        u = (0, x.bG)([eH.A], () => eH.A.getChannel(n)),
        m = (0, z.YG)(u);
    return null == u
        ? null
        : m
          ? (0, i.jsx)(sc, {
                id: t,
                channel: u,
                goToThread: l,
                className: a,
                coords: r,
                gridCoords: o,
                observePostVisibilityAnalytics: d,
                gridSectionBoundaries: c,
            })
          : (0, i.jsx)(sm, {
                id: t,
                channel: u,
                goToThread: l,
                overrideMedia: s,
                className: a,
                coords: r,
                gridCoords: o,
                observePostVisibilityAnalytics: d,
                gridSectionBoundaries: c,
            });
});
function sm(e) {
    let {
            id: t,
            channel: n,
            goToThread: l,
            overrideMedia: a,
            className: o,
            coords: c,
            gridCoords: d,
            gridSectionBoundaries: u,
            observePostVisibilityAnalytics: m,
        } = e,
        h = n.id,
        g = s.useRef(null),
        f = (0, x.bG)([ez.Ay], () => ez.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: p, loaded: b } = (0, eC.OA)(n),
        C = (0, G.Ay)(n),
        { messageCountText: A } = (0, eb.k6)(n),
        { isNew: E, hasUnreads: S } = (0, eb.X5)(n),
        I = s.useRef(null),
        { handleLeftClick: T, handleRightClick: M } = (0, eT.A)({ facepileRef: I, goToThread: l, channel: n });
    s.useEffect(() => {
        m?.(g.current, h);
    }, [m, h]);
    let k = (0, eb.Mw)(n, iM.T.CREATION_DATE, nD.EG.POSTED_DURATION_AGO),
        R = (0, ns.hf)(n),
        { onFocus: _, ...w } = i1({ id: t, row: d.row, column: d.column, section: d.section, boundaries: u });
    return (0, i.jsxs)("li", {
        ref: g,
        onClick: T,
        onFocus: _,
        onContextMenu: M,
        className: r()(iL.kL, o, { [iL.nT]: f }),
        style: { ...c },
        children: [
            (0, i.jsx)(y.D, {
                onClick: T,
                focusProps: { ringTarget: g },
                onContextMenu: M,
                "aria-label": eZ.intl.formatToPlainString(eZ.t.pgYN6c, { title: C ?? "", count: A }),
                className: iL.Kv,
                ...w,
            }),
            (0, i.jsxs)("div", {
                className: iL.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: iL.Y6,
                        children: [
                            (0, i.jsxs)("div", {
                                className: iL.wO,
                                children: [
                                    (0, i.jsx)(sd.A, { channel: n, message: p }),
                                    (0, i.jsx)(N.E, {
                                        variant: "body-xs/normal",
                                        color: "text-default",
                                        className: iL.SD,
                                        children: k,
                                    }),
                                ],
                            }),
                            E
                                ? (0, i.jsx)("div", {
                                      className: iL.Ad,
                                      children: (0, i.jsx)(eo.E, { type: "new", variant: "primary" }),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(v.F, {
                        children: (0, i.jsx)(j.D, {
                            variant: "heading-sm/semibold",
                            className: iL.DD,
                            color: S ? "text-strong" : "text-muted",
                            style: { width: `${c.width - 24}px` },
                            children: R,
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: iL.PU,
                children: (0, i.jsx)(ei.M, {
                    children: (0, i.jsx)(sh, {
                        channel: n,
                        firstMessage: p,
                        isFirstMessageLoaded: b,
                        overrideMedia: a,
                        coords: c,
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: iL.qr,
                children: (0, i.jsx)(ei.M, {
                    children: (0, i.jsx)(iO, { channel: n, firstMessage: p, facepileRef: I }),
                }),
            }),
        ],
    });
}
function sh(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a } = e,
        r = iB({ message: n, channel: t, containerWidth: a.width });
    return null != r
        ? r
        : (0, i.jsx)(sg, { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a });
}
function sg(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a } = e,
        r = (0, x.bG)([eH.A], () => eH.A.getChannel(t.parent_id)),
        { firstMedia: o } = (0, i4.A)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !1 }),
        { hasUnreads: c } = (0, eb.X5)(t),
        d = (0, x.bG)([eV.A], () => eV.A.can(eJ.xBc.MANAGE_MESSAGES, t)),
        u = eU.kt.useSetting(),
        m = eU.gs.useSetting(),
        h = (0, ew.A)(m, d),
        g = (0, eA.no)(n, r, !1),
        f = t.isMediaPost(),
        [j, v] = iz(a.width - 24, f ? iF.SIXTEEN_BY_NINE : iF.THREE_BY_TWO);
    return n?.blocked || null == (s ?? o)
        ? (0, i.jsx)(sp, {
              channel: t,
              firstMessage: n,
              isFirstMessageLoaded: l,
              containerWidth: a.width,
              hasUnreads: c,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(sj, {
                      mediaAttachments: g,
                      globalSpoilerRenderSetting: h,
                      containerWidth: j,
                      containerHeight: v,
                      canAutoPlay: u,
                      shouldMaintainAspectRatio: f,
                  }),
                  (0, i.jsx)("div", {
                      className: iL.GA,
                      children: (0, i.jsx)(eS.Ay, { channel: t, tagsClassName: iL.uU }),
                  }),
              ],
          });
}
function sx(e) {
    return e.preventDefault();
}
let sf = s.memo(function (e) {
        return (0, i.jsx)(i.Fragment, {
            children: (0, eD.LL)({ ...e, analyticsSource: "ForumPostMediaPreviewImage" }),
        });
    }),
    sj = s.memo(function (e) {
        let {
                mediaAttachments: t,
                globalSpoilerRenderSetting: n,
                containerWidth: l,
                containerHeight: a,
                canAutoPlay: o,
                shouldMaintainAspectRatio: c = !1,
            } = e,
            { containsVideo: d, containsGif: u } = s.useMemo(() => (0, eA.$2)(t), [t]),
            m = s.useMemo(() => t.slice(0, 4), [t]),
            h = lP({ numAttachments: m.length, containerWidth: l, containerHeight: a }),
            g = (function (e) {
                let { imageContainerStyles: t, containerWidth: n, containerHeight: l } = e,
                    i = s.useRef(lD(t)),
                    a = s.useRef(n),
                    r = s.useRef(l),
                    o = n > a.current + 100,
                    c = l > r.current + 100;
                return ((o || c) && (i.current = lD(t)), i.current);
            })({ imageContainerStyles: h, containerWidth: l, containerHeight: a }),
            x = (0, iD.O8)(iP.v.GUILD),
            f = s.useMemo(
                () =>
                    m.map((e, t) => {
                        let [l, s] = (0, eR.K6)(e, !n, x),
                            a = (0, eR.rx)(s),
                            m = {
                                ...g[t],
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && l ? a : e.alt,
                                onClick: sx,
                                shouldRenderAccessory: !u && !d,
                            },
                            f = (0, ek.ge)(e.src) ? `${e.src}?format=png` : e.src,
                            j = o && !l ? e.src : f;
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: iL.UV,
                                style: h[t],
                                children: [
                                    c
                                        ? (0, i.jsx)(iw.A, {
                                              ...m,
                                              src: j,
                                              backgroundSrc: f,
                                              aspectRatio: m.maxWidth / m.maxHeight,
                                              alt: m.alt ?? "",
                                              className: r()(iL.EN, { [iL.cd]: l }),
                                              imageChildClassName: iL.Rp,
                                          })
                                        : e.src.startsWith("data:")
                                          ? (0, i.jsx)(eu._, {
                                                ...m,
                                                className: iL.il,
                                                imageClassName: r()(iL.LW, { [iL.cd]: l }),
                                            })
                                          : (0, i.jsx)(sf, {
                                                ...m,
                                                autoPlay: o && !l,
                                                containerClassName: iL.EK,
                                                imageClassName: r()(iL.rp, { [iL.cd]: l }),
                                                responsive: !0,
                                            }),
                                    l &&
                                        (0, i.jsx)("div", {
                                            className: iL.X,
                                            children: (0, i.jsx)(ey.A, { obscureReason: s, iconClassname: iL.yo }),
                                        }),
                                ],
                            },
                            e.src,
                        );
                    }),
                [o, u, d, n, h, g, m, c, x],
            );
        return (0, i.jsxs)("div", {
            className: iL.pV,
            style: { width: l, height: a },
            children: [
                f,
                (u || d) &&
                    (0, i.jsxs)("div", {
                        className: iL.vz,
                        children: [
                            d &&
                                (0, i.jsx)(ik.PlayIcon, {
                                    color: "currentColor",
                                    size: "custom",
                                    width: 22,
                                    height: 22,
                                    className: iL.cU,
                                }),
                            u &&
                                (0, i.jsx)(iR.GifIcon, {
                                    size: "custom",
                                    width: 29,
                                    height: 29,
                                    color: "currentColor",
                                    className: iL.cU,
                                }),
                        ],
                    }),
                t.length > 4 &&
                    (0, i.jsx)(sv, {
                        text: (t.length - 4).toString(),
                        icon: i_.ImageIcon,
                        pillClassName: iL.v3,
                        iconClassName: iL.In,
                        textClassName: iL.EY,
                    }),
            ],
        });
    });
function sv(e) {
    let { text: t, icon: n, pillClassName: l, iconClassName: s, textClassName: a } = e;
    return (0, i.jsxs)("div", {
        className: l,
        children: [
            (0, i.jsx)(n, { className: s, color: "currentColor" }),
            (0, i.jsxs)(N.E, { variant: "body-xs/medium", className: a, children: ["+", t] }),
        ],
    });
}
function sp(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, containerWidth: a, hasUnreads: o } = e,
        c = eU.hH.useSetting(),
        [d, u] = iz(a - 24),
        { content: m } = (0, i4.A)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !0 }),
        { shouldRenderTagsRow: h } = (0, eS.BA)({ channel: t, isNew: !1 }),
        g = s.useMemo(() => ({ width: d, height: u }), [d, u]),
        x = o ? iL.kR : iL.b8;
    return (0, i.jsxs)("div", {
        className: iL.Cv,
        style: g,
        children: [
            (0, i.jsxs)("div", {
                className: iL.Qs,
                children: [
                    l &&
                        null == n &&
                        (0, i.jsx)(N.E, {
                            variant: "body-sm/normal",
                            color: o ? "text-default" : "text-muted",
                            children: eZ.intl.string(eZ.t.mE3KJN),
                        }),
                    l && null != n && (0, i.jsx)(i3.Ay, { message: n, content: m, className: x, compact: c }),
                ],
            }),
            (0, i.jsx)("div", {
                className: r()(iL.kh, { [iL.ZH]: !h }),
                children: h ? (0, i.jsx)(eS.Ay, { channel: t, tagsClassName: iL.uU }) : null,
            }),
        ],
    });
}
var sb = n(392421),
    sC = n(165862),
    sA = n(477782),
    sN = n(258268);
function sy(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: l, layoutType: s, tagSetting: a } = (0, ep.R)(t.id),
        { showResolvedFlags: r, setShowResolvedFlags: o } = (0, X.T)(t.id),
        c = (0, ep.p)(),
        d = t.isMediaChannel();
    function u(e) {
        ((0, tb.Cd)({ guildId: t.guild_id, channelId: t.id, sortOrder: e }), c.getState().setSortOrder(t.id, e), n());
    }
    function m(e) {
        ((0, tb.ad)({ guildId: t.guild_id, channelId: t.id, forumLayout: e }),
            c.getState().setLayoutType(t.id, e),
            n());
    }
    function h(e) {
        (c.getState().setTagSetting(t.id, e), n());
    }
    let x = null != t.availableTags && t.availableTags.length > 0;
    return (0, i.jsx)("div", {
        className: sN.k,
        children: (0, i.jsxs)(sC.W, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": d ? eZ.intl.string(eZ.t["kQN/bi"]) : eZ.intl.string(eZ.t.DJzbkL),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, i.jsxs)(sA.rX, {
                    label: eZ.intl.string(eZ.t.f8wNDl),
                    children: [
                        (0, i.jsx)(sA.iD, {
                            id: "sort-by-recent-activity",
                            group: "sort-by",
                            label: eZ.intl.string(eZ.t.jOPmcI),
                            action: () => u(iM.T.LATEST_ACTIVITY),
                            checked: l === iM.T.LATEST_ACTIVITY,
                        }),
                        (0, i.jsx)(sA.iD, {
                            id: "sort-by-date-posted",
                            group: "sort-by",
                            label: eZ.intl.string(eZ.t.UIltXd),
                            action: () => u(iM.T.CREATION_DATE),
                            checked: l === iM.T.CREATION_DATE,
                        }),
                    ],
                }),
                t.isModeratorReportChannel() &&
                    (0, i.jsx)(sA.rX, {
                        label: eZ.intl.string(nr.default.PsM2b4),
                        children: (0, i.jsx)(sA.sL, {
                            id: "resolved-flags-none",
                            label: eZ.intl.string(eZ.t.XJuakA),
                            action: () => o(!r),
                            checked: r,
                        }),
                    }),
                t.isMediaChannel() || t.isModeratorReportChannel() || t.isGameInvitesChannel()
                    ? null
                    : (0, i.jsxs)(sA.rX, {
                          label: eZ.intl.string(eZ.t.mFMDSq),
                          children: [
                              (0, i.jsx)(sA.iD, {
                                  id: "view-as-list",
                                  group: "view-as",
                                  label: eZ.intl.string(eZ.t["NJFr+g"]),
                                  action: () => m(g.C.LIST),
                                  checked: s === g.C.LIST,
                              }),
                              (0, i.jsx)(sA.iD, {
                                  id: "view-as-grid",
                                  group: "view-as",
                                  label: eZ.intl.string(eZ.t.wKeggb),
                                  action: () => m(g.C.GRID),
                                  checked: s === g.C.GRID,
                              }),
                          ],
                      }),
                x
                    ? (0, i.jsxs)(sA.rX, {
                          label: eZ.intl.string(eZ.t.Paxaug),
                          children: [
                              (0, i.jsx)(sA.iD, {
                                  id: "match-some",
                                  group: "tag-setting",
                                  label: eZ.intl.string(eZ.t.rQ0ctQ),
                                  action: () => h(sb.n.MATCH_SOME),
                                  checked: a === sb.n.MATCH_SOME,
                              }),
                              (0, i.jsx)(sA.iD, {
                                  id: "match-all",
                                  group: "tag-setting",
                                  label: eZ.intl.string(eZ.t.FCXUu0),
                                  action: () => h(sb.n.MATCH_ALL),
                                  checked: a === sb.n.MATCH_ALL,
                              }),
                          ],
                      })
                    : null,
                (0, i.jsx)(sA.rX, {
                    children: (0, i.jsx)(sA.Dr, {
                        id: "reset-all",
                        label: eZ.intl.string(eZ.t["3b//lO"]),
                        action: () => {
                            (u(t.getDefaultSortOrder()), m(t.getDefaultLayout()), h(t.getDefaultTagSetting()));
                        },
                    }),
                }),
            ],
        }),
    });
}
var sE = n(305866),
    sS = n(123292);
function sI() {
    return Promise.resolve();
}
function sT(e) {
    let { channel: t, closePopout: n, setPopoutRef: l } = e,
        { enabled: a } = F.A.useConfig({ location: "forum-select-tags-popout" }),
        r = (0, l5.OT)(t),
        { tagFilter: o } = (0, ep.R)(t.id),
        c = (0, ep.p)(),
        d = (0, x.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        h = s.useCallback(
            (e) => {
                ((0, tb.UA)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    tagId: e,
                    filterTagIds: Array.from(o),
                    added: !o.has(e),
                    location: {
                        page: eJ.liQ.GUILD_CHANNEL,
                        section: eJ.JJy.FORUM_CHANNEL_HEADER,
                        object: eJ.ZSU.CHANNEL_TAG,
                    },
                }),
                    c.getState().toggleTagFilter(t.id, e));
            },
            [t, o, c],
        ),
        g = s.useCallback(() => {
            (c.getState().setTagFilter(t.id, new Set()), d || n());
        }, [c, t.id, d, n]),
        f = (0, m.Ay)({
            id: `${t.id}-all-tags-dropdown-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: sI,
            scrollToEnd: sI,
        }),
        v = (0, ia.cq)(r),
        p = s.useRef(null);
    return (
        s.useEffect(() => {
            requestAnimationFrame(() => {
                if (null != p.current) {
                    let e = p.current.querySelector(a ? '[data-mana-component="tag"]' : `.${il.Tc}`);
                    null != e && e.focus();
                }
            });
        }, [a]),
        (0, i.jsxs)(sE.l, {
            ref: (e) => {
                l?.(e);
            },
            "aria-label": eZ.intl.string(eZ.t.TdqRTh),
            className: il.kL,
            children: [
                (0, i.jsx)("div", {
                    className: il.wx,
                    children: (0, i.jsxs)("div", {
                        className: il.LD,
                        children: [
                            (0, i.jsx)(j.D, {
                                color: "interactive-text-default",
                                variant: "heading-sm/semibold",
                                className: il.TK,
                                children: eZ.intl.string(eZ.t.HPu3kq),
                            }),
                            (0, i.jsx)("div", {
                                className: il.d1,
                                children: (0, i.jsx)(N.E, {
                                    className: il.lT,
                                    color: "none",
                                    variant: "body-xs/medium",
                                    tabularNumbers: !0,
                                    children: o.size,
                                }),
                            }),
                        ],
                    }),
                }),
                a
                    ? (0, i.jsx)("div", {
                          className: il.I8,
                          children: (0, i.jsx)(T.C, {
                              variant: "filter",
                              selectionMode: "multiple",
                              label: eZ.intl.string(eZ.t["P/y+sj"]),
                              items: v,
                              selectedKeys: o,
                              onSelectionChange: (e) => {
                                  if ("all" === e) return;
                                  let t = r.find((t) => e.has(t.id) !== o.has(t.id));
                                  null != t && h(t.id);
                              },
                              listRef: p,
                          }),
                      })
                    : (0, i.jsx)(u.hD, {
                          navigator: f,
                          children: (0, i.jsx)(u.PR, {
                              children: (e) => {
                                  let { ref: t, ...n } = e;
                                  return (0, i.jsx)("div", {
                                      ref: (e) => {
                                          ((t.current = e), (p.current = e));
                                      },
                                      ...n,
                                      className: il.I8,
                                      children: r.map((e) =>
                                          (0, i.jsx)(
                                              ia.Ay,
                                              {
                                                  className: il.Tc,
                                                  tag: e,
                                                  selected: o.has(e.id),
                                                  onClick: () => h(e.id),
                                              },
                                              e.id,
                                          ),
                                      ),
                                  });
                              },
                          }),
                      }),
                (0, i.jsx)("div", { className: il.me }),
                (0, i.jsx)(sS.Q, {
                    "aria-label": eZ.intl.string(eZ.t["98EPQP"]),
                    onClick: g,
                    text: eZ.intl.string(eZ.t["98EPQP"]),
                }),
            ],
        })
    );
}
var sM = n(37411);
function sk(e) {
    let { channel: t, guild: n, sidebarState: l } = e;
    return (0, i.jsx)(eE.Cp, { channel: t, children: (0, i.jsx)(sO, { channel: t, guild: n, sidebarState: l }) }, t.id);
}
let sR = new (class {
    minWidth;
    maxWidth;
    gap;
    constructor({ minWidth: e, maxWidth: t, gap: n }) {
        (et()(e < t, "minWidth needs to be smaller than maxWidth"),
            (this.minWidth = e),
            (this.maxWidth = t),
            (this.gap = n));
    }
    getWidth(e) {
        return this.getRenderOptions(e).columnWidth;
    }
    getRenderOptions(e) {
        if (e <= this.minWidth) return { columns: 1, columnWidth: this.minWidth };
        let t = e / this.maxWidth,
            n = Math.max(Math.floor(t + (e / this.minWidth - t) / 2), 1),
            l = this.gap * (n - 1);
        return { columns: n, columnWidth: (e - l) / n };
    }
})({ minWidth: 320, maxWidth: 450, gap: 16 });
function s_(e) {
    return `forum-grid-header-section-${e}`;
}
function sw(e) {
    let { itemRole: t, coords: n, section: l } = e;
    return (0, i.jsx)(
        "div",
        {
            className: r()(nc.card, nc.archivedDividerRow, nc.columnsSpan),
            style: n,
            "data-item-role": t,
            children: (0, i.jsx)("div", {
                className: nc.emptyMainCard,
                children: (0, i.jsx)(j.D, {
                    variant: "body-sm/medium",
                    className: nc.archivedDivider,
                    id: s_(l),
                    children: eZ.intl.string(eZ.t["3+LO1w"]),
                }),
            }),
        },
        "section-divider",
    );
}
function sP(e) {
    let { section: t, coords: n, key: l, isShowingSearchResult: s, hasActiveThreads: a } = e;
    return () =>
        2 === t && !s && a
            ? (0, i.jsx)(
                  sw,
                  { section: t, coords: null == n ? void 0 : { ...n, position: "absolute" }, itemRole: "section" },
                  l,
              )
            : null;
}
function sD(e, t) {
    return `card-${e}-${t}`;
}
function sL(e) {
    if ("string" == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function sO(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: l,
            editorAdditionRowHeight: a,
            listViewCardHeights: o,
            formOpen: c,
            name: f,
        } = (0, eE.kU)((e) => {
            let {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: l,
                formOpen: i,
                cardHeightVersion: s,
                name: a,
            } = e;
            return {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: l,
                formOpen: i,
                name: a,
                cardHeightVersion: s,
            };
        }, d.x),
        {
            activeThreadIds: j,
            archivedThreadIds: N,
            searchResults: y,
            canLoadMore: E,
            loadMore: S,
            activeThreadsLoading: I,
            archivedThreadsLoading: T,
            loading: M,
            isSearchLoading: k,
            layoutType: R,
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: l, tagSetting: i } = (0, ep.R)(e.id),
                s = (0, eb.V3)({ channel: e, sortOrder: t, tagFilter: n, tagSetting: i, shouldAutomaticallyAck: !0 }),
                a = (0, x.bG)([ts.A, q.A], () => {
                    let t = ts.A.hasLoaded(e.guild_id),
                        n = q.A.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: r, canLoadMore: o, loadMore: c, loading: d } = (0, ta.Fr)(e, t, n, i),
                { activeThreadIds: u, archivedThreadIds: m } = (0, z.WP)(e, s, r),
                { searchResults: h, isSearchLoading: g } = (0, eb.cA)({ channelId: e.id });
            return (
                (0, eb.yz)(e, t, n, i),
                {
                    activeThreadIds: u,
                    archivedThreadIds: m,
                    searchResults: h,
                    canLoadMore: o,
                    loadMore: c,
                    loading: a || d || g,
                    archivedThreadsLoading: d,
                    activeThreadsLoading: a,
                    isSearchLoading: g,
                    layoutType: l,
                }
            );
        })(t),
        _ = j.length > 0,
        w = _ || N.length > 0;
    (0, z.yk)(t, j);
    let D = (0, K.A)(t),
        G = (0, Y.GH)(t, "forum_channel"),
        { tagFilter: F, tagSetting: U } = (0, ep.R)(t.id);
    ((0, eb.o7)(t, F, U, c),
        (0, L.Ay)(() => {
            !c && f.length > 0 && tx.A.updateForumSearchQuery(t.id, f);
        }));
    let H = (0, eb.O3)(t),
        B = (0, eb.An)(t),
        V = s.useRef(null),
        { observePostVisibilityAnalytics: W } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: l } = e;
            tp({ guildId: t, channelId: n });
            let i = s.useRef(null),
                a = s.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let l = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, tv.xx)(e, t, l) : (0, tv.O_)(e, t, l);
                    }
                }, []);
            return (
                s.useEffect(() => {
                    let e = l.current?.getScrollerNode();
                    if (null != e)
                        return (
                            (i.current = new IntersectionObserver((e) => a(n, e), {
                                root: e,
                                rootMargin: "0px 100000px 0px 100000px",
                                threshold: 0.5,
                            })),
                            () => {
                                (i.current?.disconnect(), (i.current = null));
                            }
                        );
                }, [n, a, l]),
                {
                    observePostVisibilityAnalytics: s.useCallback(
                        (e, t) => {
                            null == e ? (0, tv.O_)(n, t, Date.now()) : i.current?.observe(e);
                        },
                        [n],
                    ),
                }
            );
        })({ scrollerRef: V, channelId: t.id, guildId: t.guild_id }),
        $ = R === g.C.GRID,
        { searchQuery: Z } = (0, eb.cA)({ channelId: t.id }),
        ee = null != y && null != Z && Z.length > 0,
        et = s.useRef(null),
        { containerRef: en, containerWidth: el } = id(),
        ei = (0, x.bG)([ez.Ay, eH.A], () => {
            let e = ez.Ay.getSidebarState(t.id);
            if (e?.type !== ti.PE.VIEW_CHANNEL) return null;
            let n = eH.A.getChannel(e.channelId);
            return null != n && n.isThread() ? n : null;
        });
    s.useEffect(() => {
        null == et.current && null != ei && (et.current = ei.id);
    }, [ei]);
    let { columns: es } = s.useMemo(() => ($ ? sR.getRenderOptions(el) : iU), [$, el]),
        ea = s.useMemo(() => (M ? Math.round((window.innerHeight - 200) / 118) : 0), [M]),
        { showResolvedFlags: er } = (0, X.T)(t.id),
        eo = t.isModeratorReportChannel(),
        ec = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iH(sR.getWidth(el))) * es;
            return I ? e : 0;
        }, [el, es, I]),
        ed = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iH(sR.getWidth(el))) * es;
            return T ? e : 0;
        }, [el, es, T]),
        eu = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iH(sR.getWidth(el))) * es;
            return k && ee ? e : 0;
        }, [el, es, k, ee]),
        em = s.useMemo(() => {
            if ($)
                if (!H && ee) return [1, 0];
                else if (!B) return [1, j.length + ec, 0];
                else if (ee) return [1, y.length + eu, 0];
                else if (eo && !er) return [1, j.length + ec, 0];
                else return [1, j.length + ec, N.length + ed];
            if (!H && ee) return [1, 1];
            if (!B) return [1, j.length, 1];
            if (ee) return [1, y.length, 0, ea];
            if (eo && !er) return [1, j.length, 0, ea];
            else return [1, j.length, N.length, ea];
        }, [$, ee, j.length, N.length, H, B, ea, y, ec, ed, eu, er, eo]),
        eh = s.useMemo(
            () =>
                !H && ee
                    ? [[], []]
                    : B
                      ? ee
                          ? [[], y, [], []]
                          : eo && !er
                            ? [[], j, [], []]
                            : [[], j, N, []]
                      : [[], j, []],
            [ee, H, B, y, j, N, er, eo],
        ),
        eg = s.useCallback(
            (e, n) => {
                ((0, tb.Ml)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: { page: eJ.liQ.GUILD_CHANNEL, section: eJ.JJy.FORUM_CHANNEL_POST },
                }),
                    n ? (0, tl.N9)(e, { source: sM.H9.BROWSER }) : ((et.current = e.id), (0, to.JA)(e)));
            },
            [t.guild_id, t.id, et],
        ),
        [ex, ef] = s.useState(l + a - 24),
        ej = s.useCallback(
            (e, n, l) =>
                0 === e
                    ? (0, i.jsx)(
                          sB,
                          {
                              channel: t,
                              isEmpty: !_,
                              isSearchLoading: k,
                              numResults: y?.length,
                              coords: n,
                              onHeightChange: ef,
                              children:
                                  !M && (0, i.jsx)(nW, { channel: t, hasAnyThread: w, hasActiveThreads: _ }, t.id),
                          },
                          "forum-channel-header",
                      )
                    : 2 !== e || B
                      ? 1 === e && ee && !H
                          ? (0, i.jsx)(sF, { channel: t, coords: n }, "archive-or-search-result")
                          : l()
                      : (0, i.jsx)(sG, { channel: t, coords: n }, "archived-missing-reading-history-perm"),
            [ee, B, y, H, t, _, k, M, w],
        ),
        ev = (0, x.bG)([tg.A], () => tg.A.hasHidden(t.id)),
        eC = { editorHeight: l, isGridLayout: $ },
        eA = s.useRef(eC);
    (s.useEffect(() => {
        eA.current = eC;
    }),
        s.useEffect(() => {
            let { editorHeight: e, isGridLayout: t } = eA.current,
                n = t ? eM : V,
                l = n.current?.getScrollerState();
            null != l && !ev && l.scrollTop > e && n.current?.scrollTo({ to: 0 });
        }, [ev]));
    let {
            updateListScrollerRef: eN,
            renderListSection: ey,
            renderListItem: eS,
            getListSectionHeight: eI,
            getListItemHeight: eT,
        } = (function (e) {
            let {
                    listRef: t,
                    hasActiveThreads: n,
                    threadIdsBySection: l,
                    listViewCardHeights: a,
                    editorHeight: o,
                    editorAdditionRowHeight: c,
                    renderSectionOrItem: d,
                    goToThread: u,
                    observePostVisibilityAnalytics: m,
                    isShowingSearchResult: h,
                } = e,
                g = (0, x.bG)([tu.Ay], () => tu.Ay.getChannelId()),
                f = s.useCallback(
                    (e) => (n) => {
                        ((t.current = n), (e.current = n?.getScrollerNode() ?? null));
                    },
                    [t],
                ),
                j = s.useCallback(
                    (e) => sP({ section: e.section, isShowingSearchResult: h, hasActiveThreads: n })(),
                    [n, h],
                ),
                p = s.useCallback(
                    (e) =>
                        d(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, i.jsx)(
                                          "div",
                                          {
                                              "data-item-role": "item",
                                              className: r()(nc.loadingCard, nc[`loadingCard-${e.row % 3}`]),
                                          },
                                          `loading-${e.row}`,
                                      );
                            let t = l[e.section][e.row],
                                n = null != g && (0, J.iU)(g) ? e4 : ns.Ay;
                            return (0, i.jsx)(
                                "li",
                                {
                                    className: nc.card,
                                    "data-item-role": "item",
                                    children: (0, i.jsx)(v.F, {
                                        children: (0, i.jsx)(n, {
                                            className: nc.mainCard,
                                            threadId: t,
                                            goToThread: u,
                                            observePostVisibilityAnalytics: m,
                                        }),
                                    }),
                                },
                                `${e.section}-${t}`,
                            );
                        }),
                    [d, l, g, u, m],
                ),
                b = s.useCallback(
                    (e, t) => {
                        if (0 === e) return o + c;
                        let n = a[l[e][t]];
                        return null == n ? 104 : n + 8;
                    },
                    [l, a, o, c],
                );
            return {
                updateListScrollerRef: f,
                renderListSection: j,
                renderListItem: p,
                getListSectionHeight: s.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: b,
            };
        })({
            listRef: V,
            hasActiveThreads: _,
            threadIdsBySection: eh,
            listViewCardHeights: o,
            editorHeight: l,
            editorAdditionRowHeight: a,
            renderSectionOrItem: ej,
            goToThread: eg,
            observePostVisibilityAnalytics: W,
            isShowingSearchResult: ee,
        }),
        eM = s.useRef(null),
        {
            updateMasonryListScrollerRef: ek,
            getItemKey: eR,
            renderGridSection: e_,
            renderGridItem: ew,
            getGridSectionHeight: eP,
            getSectionProps: eD,
            handleGridFocus: eL,
        } = (function (e) {
            let {
                    masonryListScrollerRef: t,
                    threadIdsBySection: n,
                    goToThread: l,
                    renderSectionOrItem: a,
                    hasActiveThreads: o,
                    isShowingSearchResult: c,
                    canSearchForumPosts: d,
                    canViewArchivedPosts: u,
                    observePostVisibilityAnalytics: m,
                    focusedThreadId: h,
                    headerHeight: g,
                } = e,
                x = s.useRef(null),
                f = s.useCallback(
                    (e) => {
                        ((t.current = e), (x.current = e?.getScrollerNode()));
                    },
                    [t],
                ),
                j = s.useCallback(
                    (e, n) => {
                        let { current: l } = t;
                        if (null == l) return;
                        let i = document.querySelector(e);
                        if (null == i) return;
                        let s = l.getCoordsMap()[n],
                            a = null != s ? s.height + 20 : 200;
                        (l.scrollIntoViewNode({
                            node: i,
                            padding: a,
                            callback() {
                                requestAnimationFrame(() => {
                                    document.querySelector(e)?.focus({ preventScroll: !0 });
                                });
                            },
                        }),
                            (h.current = sL(n)));
                    },
                    [t, h],
                ),
                v = s.useCallback(
                    (e) => {
                        let t = sL(e);
                        if (null == t) return;
                        let n = eH.A.getChannel(t);
                        null != n && l(n, !0);
                    },
                    [l],
                ),
                p = s.useCallback(
                    function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (0 === n[e].length) return `section-${e}-${t}`;
                        {
                            let l = n[e][t];
                            return null == l ? sD(e, t) : sD(e, l);
                        }
                    },
                    [n],
                ),
                b = s.useCallback(
                    (e, t, n) =>
                        a(e, t, sP({ section: e, coords: t, key: n, isShowingSearchResult: c, hasActiveThreads: o })),
                    [a, o, c],
                ),
                C = s.useCallback((e) => (0 === e ? {} : { role: "grid", "aria-labelledby": `#${s_(e)}` }), []);
            return {
                updateMasonryListScrollerRef: f,
                masonryListContainerRef: x,
                focusedThreadId: h,
                handleGridFocus: j,
                handleGridSelect: v,
                getItemKey: p,
                renderGridSection: b,
                renderGridItem: s.useCallback(
                    (e, t, s, a, o) => {
                        if (0 === e) return null;
                        let c = n[e][t];
                        return null != c
                            ? (0, i.jsx)(
                                  su,
                                  {
                                      id: `${a}`,
                                      threadId: c,
                                      className: r()(nc.card, nc.mainCard),
                                      goToThread: l,
                                      observePostVisibilityAnalytics: m,
                                      coords: s,
                                      gridCoords: o.coordinates[a],
                                      gridSectionBoundaries: o.boundaries,
                                  },
                                  a,
                              )
                            : __OVERLAY__
                              ? null
                              : (0, i.jsx)(
                                    "div",
                                    {
                                        style: { ...s },
                                        "data-item-role": "item",
                                        className: r()(nc.loadingCard, nc[`loadingCard-${t % 3}`]),
                                    },
                                    a,
                                );
                    },
                    [n, l, m],
                ),
                getSectionProps: C,
                getGridSectionHeight: s.useCallback(
                    (e) => (0 === e ? g - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && c && !d ? 40 : 0),
                    [g, c, d, o, u],
                ),
            };
        })({
            masonryListScrollerRef: eM,
            threadIdsBySection: eh,
            goToThread: eg,
            renderSectionOrItem: ej,
            hasActiveThreads: _,
            isShowingSearchResult: ee,
            canSearchForumPosts: H,
            canViewArchivedPosts: B,
            observePostVisibilityAnalytics: W,
            focusedThreadId: et,
            headerHeight: ex,
        });
    !(function (e) {
        let {
            masonryListScrollerRef: t,
            containerWidth: n,
            isGridLayout: l,
            threadIdsBySection: i,
            focusedThreadId: a,
            parentId: r,
        } = e;
        s.useEffect(() => {
            if (l) {
                let e = setTimeout(() => {
                    if (null == t.current || null == a.current) return;
                    let e = a.current;
                    if ("string" != typeof e) return;
                    null == ez.Ay.getSidebarState(r) && (a.current = null);
                    let n = i.findIndex((t) => null != t.find((t) => t === e)),
                        l = t.current.getCoordsMap(),
                        s = l[`__section__${n}`],
                        o = l[sD(n, e)];
                    null != s &&
                        null != o &&
                        t.current.scrollIntoViewRect({
                            start: s.top + o.top - 100,
                            end: s.top + o.top + o.height + 50,
                        });
                }, 0);
                return () => clearTimeout(e);
            }
        }, [r, n, l, i, a, t]);
    })({
        masonryListScrollerRef: eM,
        containerWidth: el,
        isGridLayout: $,
        threadIdsBySection: eh,
        parentId: t.id,
        focusedThreadId: et,
    });
    let eO = s.useCallback(() => {
            if (ee) return;
            let e = $ ? eM.current?.getScrollerState() : V.current?.getScrollerState();
            if (null == e) return;
            (0, tb.pO)({ guildId: t.guild_id, channelId: t.id });
            let n = e.scrollTop + e.offsetHeight;
            e.scrollHeight - n < ($ ? Math.max(200, iH(el)) : 200) && S();
        }, [ee, $, t.guild_id, t.id, el, S]),
        eG = (0, x.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        eF = (0, eE.kU)((e) => e.titleFocused || e.bodyFocused, d.x),
        eU = (function (e) {
            let { id: t, isEnabled: n, setFocus: l } = e,
                i = s.useRef(null),
                a = s.useRef(!1),
                r = s.useRef(null),
                o = s.useRef(n);
            s.useLayoutEffect(() => {
                o.current = n;
            }, [n]);
            let c = s.useCallback((e) => (r.current ?? document).querySelector(e), []),
                d = s.useCallback(
                    (e, t) => {
                        o.current && l(e, t);
                    },
                    [l],
                ),
                u = s.useCallback((e) => {
                    o.current && document.querySelector(e)?.focus();
                }, []),
                m = s.useCallback(
                    (e) => {
                        i.current = e;
                        let n = (0, i$.Mz)(e, iq),
                            l = (0, i$.HP)(e);
                        (d(n, l), (0, iW.T)(t, l, !0));
                    },
                    [t, d],
                ),
                [g, x] = s.useState(!1),
                f = s.useRef(g);
            (s.useLayoutEffect(() => {
                f.current = g;
            }, [g]),
                s.useLayoutEffect(() => {
                    let e = r.current;
                    if (null != e)
                        return (
                            e.addEventListener("focusin", n),
                            e.addEventListener("focusout", l),
                            e.addEventListener("focus", s),
                            e.addEventListener("scroll", o, { passive: !0 }),
                            () => {
                                (e.removeEventListener("focusin", n),
                                    e.removeEventListener("focusout", l),
                                    e.removeEventListener("focus", s),
                                    e.removeEventListener("scroll", o));
                            }
                        );
                    function n() {
                        x(!0);
                    }
                    function l(e) {
                        e.currentTarget.contains(e.relatedTarget) ||
                            (x(!1),
                            requestAnimationFrame(() => {
                                let e = i.current;
                                null !== e && null == c((0, i$.Mz)(e, iq)) && u((0, i$.Mz)(t, "data-grid-id"));
                            }));
                    }
                    function s() {
                        let e = r.current;
                        if (f.current || null == e) return;
                    }
                    function o() {
                        a.current = !0;
                    }
                }, [t, d, u, m, c]));
            let j = s.useCallback(
                    (e) => {
                        if (!o.current) return;
                        let t = i.current,
                            n = r.current;
                        if (null == t) return;
                        let l = (0, i$.Mz)(t, iq),
                            s = n?.querySelector(l);
                        if (null == s) return;
                        let a = parseInt(s.getAttribute("data-grid-section") ?? ""),
                            d = parseInt(s.getAttribute("aria-rowindex")),
                            u = parseInt(s.getAttribute("aria-colindex"));
                        switch ((iY.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                            case h.D$.RIGHT: {
                                let e = c(iX({ section: a, row: d, column: u + 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(iq);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.LEFT: {
                                let e = c(iX({ section: a, row: d, column: u - 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(iq);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.DOWN: {
                                let e = c(iX({ section: a, row: d + 1, column: u }));
                                if ((null == e && (e = c(iX({ section: a + 1, row: 0, column: u }))), null != e)) {
                                    let t = e.getAttribute(iq);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.UP: {
                                let e;
                                if (0 === d) {
                                    let t = parseInt(s.getAttribute(iQ));
                                    null == (e = c(iX({ section: a - 1, row: t, column: u }))) &&
                                        (e = c(iX({ section: a - 1, row: t - 1, column: u })));
                                } else e = c(iX({ section: a, row: d - 1, column: u }));
                                if (null != e) {
                                    let t = e.getAttribute(iq);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.SPACE:
                            case h.D$.ENTER: {
                                if (e.repeat) return;
                                let t = i.current;
                                if (null != t) {
                                    let n = c((0, i$.Mz)(t, iq)),
                                        l = n?.ownerDocument ?? document,
                                        i = n === l.activeElement;
                                    null != n && i && (e.preventDefault(), e.stopPropagation(), n?.click());
                                }
                            }
                        }
                    },
                    [c, m],
                ),
                v = s.useCallback(
                    (e) => {
                        i.current = null != e ? (0, i$.t$)(t, e) : null;
                    },
                    [t],
                );
            return s.useMemo(() => ({ id: t, containerProps: { onKeyDown: j, ref: r }, setFocus: v }), [t, j, v]);
        })({ id: "forum-grid-view", isEnabled: $ && eG && !eF, setFocus: eL }),
        eB = (function (e) {
            let { listRef: t, padding: n, channel: l, isEnabled: i } = e,
                a = s.useCallback(
                    (e) => {
                        let l = t.current,
                            i = document.querySelector(e);
                        null != i &&
                            l?.scrollIntoViewNode({
                                node: i,
                                padding: n,
                                callback: () => {
                                    document.querySelector(e)?.focus({ preventScroll: !0 });
                                },
                            });
                    },
                    [n, t],
                ),
                r = s.useCallback(
                    () =>
                        new Promise((e) => {
                            let n = t.current;
                            n?.scrollToTop({ callback: () => requestAnimationFrame(e) });
                        }),
                    [t],
                ),
                o = s.useCallback(
                    () =>
                        new Promise((e) => {
                            let n = t.current;
                            n?.scrollToBottom({ callback: () => requestAnimationFrame(e) });
                        }),
                    [t],
                );
            return (0, m.Ay)({
                id: `forum-channel-list-${l.id}`,
                isEnabled: i,
                scrollToStart: r,
                scrollToEnd: o,
                setFocus: a,
            });
        })({ listRef: V, padding: 96, isEnabled: !$ && eG && !eF, channel: t }),
        eV = s.useCallback(
            (e, n, l) =>
                0 === e
                    ? 0
                    : t.isGameInvitesChannel()
                      ? 280
                      : iH(l, t.isMediaChannel() ? iF.SIXTEEN_BY_NINE : iF.THREE_BY_TWO),
            [t],
        ),
        { ref: eW, ...e$ } = eU.containerProps,
        eq = ez.Ay.getSidebarState(t.id),
        eK = null != eq && (0, ez.JU)(eq),
        eQ = (0, x.bG)([ez.Ay], () => ez.Ay.getSection(t.id)) === eJ.YvQ.MEMBERS;
    return (0, i.jsx)("div", {
        className: nc.container,
        ref: en,
        "data-member-list-open": eQ,
        children: (0, i.jsx)(p.sk, {
            children: (e) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        c &&
                            (0, i.jsx)(P.A, {
                                channel: t,
                                draftType: tc.C.FirstThreadMessage,
                                className: nc.uploadArea,
                                style: { right: eK && n?.isThreadSidebarFloating ? n.threadSidebarWidth : 0 },
                            }),
                        (0, i.jsx)(sU, { channel: t }),
                        (0, i.jsx)(b.A, { children: (0, i.jsx)(v.H, { children: eZ.intl.string(eZ.t.B2panI) }) }),
                        G.visible || D
                            ? (0, i.jsx)("div", {
                                  className: nc.headerNotice,
                                  children: G.visible
                                      ? (0, i.jsx)(Y.KT, { channel: t, onDismiss: G.dismiss })
                                      : (0, i.jsx)(Q.A, { channel: t }),
                              })
                            : null,
                        $
                            ? (0, i.jsx)(i2, {
                                  navigator: eU,
                                  children: (0, i.jsx)(
                                      C.f,
                                      {
                                          ref: (e) => {
                                              ((eW.current = e?.getScrollerNode() ?? null), ek(e));
                                          },
                                          itemGutter: 16,
                                          padding: 24,
                                          className: nc.grid,
                                          columns: es,
                                          sections: em,
                                          getItemKey: eR,
                                          getSectionHeight: eP,
                                          getItemHeight: eV,
                                          renderSection: e_,
                                          renderItem: ew,
                                          getSectionProps: eD,
                                          onScroll: E ? eO : void 0,
                                          chunkSize: 350,
                                          ...e$,
                                          ...e,
                                      },
                                      R,
                                  ),
                              })
                            : (0, i.jsx)(u.hD, {
                                  navigator: eB,
                                  children: (0, i.jsx)(u.PR, {
                                      children: (t) => {
                                          let { ref: n, ...l } = t;
                                          return (0, i.jsx)(
                                              A.Ei,
                                              {
                                                  ref: eN(n),
                                                  className: nc.list,
                                                  sections: em,
                                                  sectionHeight: eI,
                                                  rowHeight: eT,
                                                  renderRow: eS,
                                                  renderSection: ey,
                                                  chunkSize: 150,
                                                  onScroll: E ? eO : void 0,
                                                  paddingBottom: 24,
                                                  ...l,
                                                  ...e,
                                                  innerRole: "list",
                                              },
                                              R,
                                          );
                                      },
                                  }),
                              }),
                    ],
                }),
        }),
    });
}
function sG(e) {
    let { channel: t, coords: n } = e,
        l = (0, G.Ay)(t);
    return (0, i.jsx)("div", {
        className: r()(nc.missingReadHistoryPermission, nc.columnsSpan),
        style: n,
        children: (0, i.jsx)(N.E, {
            color: "text-muted",
            variant: "body-md/normal",
            children: eZ.intl.format(eZ.t.TycmzM, { channelName: l }),
        }),
    });
}
function sF(e) {
    let { channel: t, coords: n } = e,
        l = (0, G.Ay)(t);
    return (0, i.jsx)("div", {
        className: r()(nc.missingReadHistoryPermission, nc.columnsSpan),
        style: n,
        children: (0, i.jsx)(N.E, {
            color: "text-muted",
            variant: "body-md/normal",
            children: eZ.intl.format(eZ.t.OWZJdS, { channelName: l }),
        }),
    });
}
function sU(e) {
    let { channel: t } = e,
        n = s.useCallback(() => {
            tx.A.resort(t.id);
        }, [t]),
        l = (0, x.bG)([tf.A], () => tf.A.getNewThreadCount());
    return 0 === l
        ? null
        : (0, i.jsx)(y.D, {
              className: nc.newPostsButton,
              onClick: n,
              children: (0, i.jsx)(N.E, {
                  color: "text-brand",
                  variant: "body-md/medium",
                  children: eZ.intl.format(eZ.t.ue1qfM, { count: l }),
              }),
          });
}
function sz() {
    return Promise.resolve();
}
function sH(e) {
    let { parentChannel: t, canCreatePost: n } = e,
        l = s.useCallback(() => {
            ((0, tb.jr)({ guildId: t.guild_id, channelId: t.id }), (0, H.d)(t));
        }, [t]);
    return __OVERLAY__ || !n
        ? null
        : (0, i.jsx)(E.$, { variant: "primary", size: "md", text: eZ.intl.string(tW.default.QwW8zd), onClick: l });
}
function sB(e) {
    let t,
        n,
        l,
        { channel: a, isEmpty: o, isSearchLoading: v, numResults: p, children: b, coords: C, onHeightChange: A } = e,
        { enabled: E } = F.A.useConfig({ location: "forum-channel-header" }),
        {
            name: _,
            formOpen: w,
            titleFocused: P,
            hasClickedForm: L,
            textAreaState: G,
            onboardingExpanded: U,
            setEditorAdditionRowHeight: z,
        } = (0, eE.kU)((e) => {
            let {
                name: t,
                formOpen: n,
                titleFocused: l,
                hasClickedForm: i,
                textAreaState: s,
                onboardingExpanded: a,
                setEditorAdditionRowHeight: r,
            } = e;
            return {
                name: t,
                formOpen: n,
                titleFocused: l,
                hasClickedForm: i,
                textAreaState: s,
                onboardingExpanded: a,
                setEditorAdditionRowHeight: r,
            };
        }, d.x),
        { tagFilter: H, layoutType: B } = (0, ep.R)(a.id),
        V = (0, eE.ST)(),
        q = (0, ep.p)(),
        K = (0, x.bG)([td.A], () => td.A.canChatInGuild(a.guild_id)),
        Q = (0, tr.AI)(a),
        [Y, X] = s.useState(Q),
        [, ee] = (0, W.c)(a.getGuildId() ?? void 0),
        et = (0, Z.V)(a),
        en = K && (Q || (Y && ee)) && !et;
    Q && !Y && X(!0);
    let { ref: el, height: ei } = (0, D.Ay)();
    s.useEffect(() => {
        null != ei && A(ei);
    }, [A, ei]);
    let es = s.useCallback(() => {
        c()(() => {
            null != el.current && V.getState().setEditorHeight(el.current.offsetHeight);
        });
    }, [el, V]);
    (s.useLayoutEffect(es, [es, o, en, U]), (0, th.Vo)({ event: eJ.jej.REMEASURE_TARGET, handler: es }));
    let ea = (0, x.bG)([tm.A], () => tm.A.getUploads(a.id, tc.C.FirstThreadMessage)),
        er = (0, eb.Hv)(a),
        { containerRef: eo, containerWidth: ec } = id(),
        ed = s.useRef(null),
        eu = s.useRef(null),
        em = s.useRef(null);
    s.useLayoutEffect(() => {
        let e = E ? ed.current : ed.current?.children[0],
            t = em.current;
        if (null != eo.current && null != e && null != t) {
            let { left: n, top: l } = eo.current.getBoundingClientRect(),
                i = 0;
            for (let t of e.children) {
                let { right: e, top: s, height: a } = t.getBoundingClientRect();
                if (s - l > a) break;
                e - n > i && (i = e - n);
            }
            t.style.left = `${i}px`;
        }
    }, [a.availableTags, E, eo, ec, H]);
    let eh = _.length > 0 && !w && (v || null != p),
        eg =
            !__OVERLAY__ &&
            !L &&
            !w &&
            P &&
            (0 === G.textValue.trim().length || G.textValue.trim() === er) &&
            0 === ea.length &&
            !et &&
            !a.isGameInvitesChannel();
    function ex(e) {
        ((0, tb.UA)({
            guildId: a.guild_id,
            channelId: a.id,
            tagId: e,
            filterTagIds: Array.from(H),
            added: !H.has(e),
            location: { page: eJ.liQ.GUILD_CHANNEL, section: eJ.JJy.FORUM_CHANNEL_HEADER, object: eJ.ZSU.CHANNEL_TAG },
        }),
            q.getState().toggleTagFilter(a.id, e));
    }
    s.useLayoutEffect(() => {
        if (!(eh || eg)) return z(0);
        null != eu.current && z(eu.current.clientHeight);
    }, [z, eh, eg, eu]);
    let ef = (0, m.Ay)({
            id: `${a.id}-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: sz,
            scrollToEnd: sz,
            orientation: h.Gl.HORIZONTAL,
        }),
        { role: ej, onFocus: ev, ...eC } = (0, u.rm)("forum-channel-header"),
        eA = s.useRef(null),
        eN =
            ((t = s.useRef(!1)),
            (n = (0, x.bG)([O.Ay], () => O.Ay.keyboardModeEnabled)),
            (l = s.useCallback(
                (e) => {
                    t.current = e.shiftKey;
                },
                [t],
            )),
            s.useLayoutEffect(
                () => (
                    n ? window.addEventListener("keydown", l) : window.removeEventListener("keydown", l),
                    () => window.removeEventListener("keydown", l)
                ),
                [n, l],
            ),
            t),
        ey = s.useCallback(
            (e) => {
                (ev(), e.target !== el.current || eN.current || eA.current?.focus());
            },
            [ev, el, eN],
        ),
        eS = s.useMemo(() => (et ? (0, J.Yj)(a.availableTags) : a.availableTags), [a.availableTags, et]),
        eI = (0, ia.cq)(eS);
    return (0, i.jsx)(
        "div",
        {
            className: r()(nc.card, nc.headerRow, nc.columnsSpan),
            ref: el,
            onFocus: ey,
            ...eC,
            style: { ...C, position: B === g.C.GRID ? "absolute" : "static", height: "auto" },
            children: (0, i.jsxs)(th.Ah, {
                children: [
                    null != a.guild_id
                        ? (0, i.jsx)($.A, {
                              className: r()(nc.newMemberBanner, { [nc.gridViewBanner]: B === g.C.GRID }),
                              guildId: a.guild_id,
                              channel: a,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: r()(nc.headerContainer, {
                            [nc.gameInvitesHeaderContainer]: a.isGameInvitesChannel(),
                        }),
                        children: [
                            a.isGameInvitesChannel() && (0, i.jsx)(sV, { channel: a }),
                            (0, i.jsxs)("div", {
                                className: nc.mainCardContainer,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: r()(nc.mainCard, nc.header, {
                                            [nc.headerWithMatchingPosts]: eh || eg,
                                        }),
                                        children: (0, i.jsx)(ig, {
                                            parentChannel: a,
                                            onChange: es,
                                            isSearchLoading: v,
                                            numResults: p,
                                            canCreatePost: en,
                                            inputRef: eA,
                                        }),
                                    }),
                                    (eh || eg) &&
                                        (0, i.jsxs)("div", {
                                            className: nc.matchingPostsRow,
                                            ref: eu,
                                            children: [
                                                eh &&
                                                    (0, i.jsxs)("div", {
                                                        className: nc.matchingPosts,
                                                        children: [
                                                            (0, i.jsx)(j.D, {
                                                                variant: "body-xs/normal",
                                                                color: "text-default",
                                                                children: v
                                                                    ? eZ.intl.string(eZ.t["/9i3qq"])
                                                                    : 0 === p
                                                                      ? eZ.intl.string(eZ.t.DbgHxi)
                                                                      : eZ.intl.formatToPlainString(eZ.t["tBz/8b"], {
                                                                            numPosts: p ?? "",
                                                                            query: _,
                                                                        }),
                                                            }),
                                                            !v &&
                                                                (0, i.jsx)(y.D, {
                                                                    onClick: function () {
                                                                        ((0, tb.hT)({
                                                                            guildId: a.guild_id,
                                                                            channelId: a.id,
                                                                        }),
                                                                            tx.A.clearForumSearch(a.id),
                                                                            V.getState().setName(""));
                                                                    },
                                                                    onMouseDown: (e) => e.preventDefault(),
                                                                    children: (0, i.jsx)(N.E, {
                                                                        variant: "body-xs/semibold",
                                                                        color: "text-brand",
                                                                        className: nc.clear,
                                                                        children: eZ.intl.string(eZ.t.VkKicb),
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                (0, i.jsx)("div", { className: nc.tagsSpacer }),
                                                eg
                                                    ? en
                                                        ? (0, i.jsxs)("div", {
                                                              className: nc.startPostHelp,
                                                              children: [
                                                                  (0, i.jsx)(S.e, {
                                                                      shortcut: "SHIFT",
                                                                      className: nc.keyboardShortcut,
                                                                  }),
                                                                  (0, i.jsx)(N.E, {
                                                                      variant: "body-xs/normal",
                                                                      color: "text-subtle",
                                                                      children: "+",
                                                                  }),
                                                                  (0, i.jsx)(S.e, {
                                                                      shortcut: "ENTER",
                                                                      className: nc.keyboardShortcut,
                                                                  }),
                                                                  (0, i.jsx)(N.E, {
                                                                      variant: "body-xs/normal",
                                                                      color: "text-subtle",
                                                                      children: eZ.intl.string(eZ.t.ZvJ0yh),
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, i.jsxs)("div", {
                                                              className: nc.startPostHelp,
                                                              children: [
                                                                  (0, i.jsx)(I.CircleErrorIcon, {
                                                                      size: "custom",
                                                                      color: "currentColor",
                                                                      height: 14,
                                                                      width: 14,
                                                                      className: nc.warnIcon,
                                                                  }),
                                                                  (0, i.jsx)(N.E, {
                                                                      variant: "body-xs/normal",
                                                                      color: "text-subtle",
                                                                      children: eZ.intl.string(eZ.t.iyzwnD),
                                                                  }),
                                                              ],
                                                          })
                                                    : null,
                                            ],
                                        }),
                                ],
                            }),
                            a.isGameInvitesChannel() && (0, i.jsx)(sH, { parentChannel: a, canCreatePost: en }),
                        ],
                    }),
                    (0, i.jsx)(nX, { channel: a, onChange: es }),
                    (0, i.jsxs)("div", {
                        className: nc.tagsContainer,
                        ref: eo,
                        children: [
                            (0, i.jsx)(sW, { channel: a }),
                            eS.length > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)("div", { className: nc.divider }),
                                          E
                                              ? (0, i.jsx)("div", {
                                                    className: nc.tagList,
                                                    children: (0, i.jsx)(T.C, {
                                                        variant: "filter",
                                                        selectionMode: "multiple",
                                                        label: eZ.intl.string(eZ.t["P/y+sj"]),
                                                        items: eI,
                                                        selectedKeys: H,
                                                        onSelectionChange: (e) => {
                                                            if ("all" === e) return;
                                                            let t = eS.find((t) => e.has(t.id) !== H.has(t.id));
                                                            null != t && ex(t.id);
                                                        },
                                                        listRef: ed,
                                                        size: "sm",
                                                    }),
                                                })
                                              : (0, i.jsx)("div", {
                                                    className: nc.tagList,
                                                    ref: ed,
                                                    children: (0, i.jsx)(u.hD, {
                                                        navigator: ef,
                                                        children: (0, i.jsx)(u.PR, {
                                                            children: (e) => {
                                                                let { ref: t, ...n } = e;
                                                                return (0, i.jsx)("div", {
                                                                    className: nc.tagListInner,
                                                                    ref: t,
                                                                    ...n,
                                                                    children: eS.map((e) =>
                                                                        (0, i.jsx)(
                                                                            ia.Ay,
                                                                            {
                                                                                tag: e,
                                                                                onClick: () => ex(e.id),
                                                                                selected: H.has(e.id),
                                                                            },
                                                                            e.id,
                                                                        ),
                                                                    ),
                                                                });
                                                            },
                                                        }),
                                                    }),
                                                }),
                                          (0, i.jsx)(M.Y, {
                                              targetElementRef: em,
                                              renderPopout: (e) => {
                                                  let { closePopout: t, setPopoutRef: n } = e;
                                                  return (0, i.jsx)(sT, {
                                                      channel: a,
                                                      closePopout: t,
                                                      setPopoutRef: n,
                                                  });
                                              },
                                              position: "bottom",
                                              align: "right",
                                              children: (e, t) => {
                                                  let { isShown: n } = t;
                                                  return (0, i.jsxs)(f.$n, {
                                                      ...e,
                                                      "data-migration-pending": !0,
                                                      buttonRef: em,
                                                      size: f.$n.Sizes.MIN,
                                                      color: f.$n.Colors.CUSTOM,
                                                      className: r()(nc.tagsButton, {
                                                          [nc.tagsButtonWithCount]: H.size > 0,
                                                      }),
                                                      innerClassName: nc.tagsButtonInner,
                                                      "aria-label":
                                                          H.size > 0
                                                              ? eZ.intl.string(eZ.t.IkpM1T)
                                                              : eZ.intl.string(eZ.t["9vKK/N"]),
                                                      children: [
                                                          H.size > 0
                                                              ? (0, i.jsx)("div", {
                                                                    className: nc.countContainer,
                                                                    children: (0, i.jsx)(N.E, {
                                                                        className: nc.countText,
                                                                        color: "none",
                                                                        variant: "body-xs/medium",
                                                                        children: H.size,
                                                                    }),
                                                                })
                                                              : eZ.intl.string(eZ.t.fZ8hzm),
                                                          n
                                                              ? (0, i.jsx)(k.ChevronSmallUpIcon, {
                                                                    size: "custom",
                                                                    color: "currentColor",
                                                                    width: 20,
                                                                })
                                                              : (0, i.jsx)(R.ChevronSmallDownIcon, {
                                                                    size: "custom",
                                                                    color: "currentColor",
                                                                    width: 20,
                                                                }),
                                                      ],
                                                  });
                                              },
                                          }),
                                          (0, i.jsxs)(f.$n, {
                                              "data-migration-pending": !0,
                                              size: f.$n.Sizes.MIN,
                                              color: f.$n.Colors.CUSTOM,
                                              className: r()(nc.tagsButton, nc.tagsButtonPlaceholder),
                                              innerClassName: nc.tagsButtonInner,
                                              "aria-label": eZ.intl.string(eZ.t.IkpM1T),
                                              children: [
                                                  H.size > 0
                                                      ? (0, i.jsx)("div", {
                                                            className: nc.countContainer,
                                                            children: (0, i.jsx)(N.E, {
                                                                className: nc.countText,
                                                                color: "none",
                                                                variant: "body-xs/medium",
                                                                children: H.size,
                                                            }),
                                                        })
                                                      : null,
                                                  (0, i.jsx)(k.ChevronSmallUpIcon, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      width: 24,
                                                  }),
                                              ],
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    b,
                ],
            }),
        },
        "create-form",
    );
}
function sV(e) {
    let { channel: t } = e,
        { application: n } = (0, z._k)(t.id),
        l = (0, V.A)({ applicationId: n?.id, source: B.GameProfileSources.GameInvitesChannel });
    if (null == n) return null;
    let s = (0, i.jsx)(U.A, { game: n, size: U.M.MEDIUM_LARGE, className: nc.gameIcon });
    return (0, i.jsx)(_.m, {
        text: n.name,
        asContainer: !0,
        children:
            null != l
                ? (0, i.jsx)(y.D, { onClick: l, "aria-label": n.name, className: nc.gameIconClickable, children: s })
                : s,
    });
}
function sW(e) {
    let { channel: t } = e,
        n = t.isMediaChannel(),
        l = t.isGameInvitesChannel(),
        a = s.useRef(null);
    return (0, i.jsx)(M.Y, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(sy, { channel: t, closePopout: n });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: s } = t;
            return (0, i.jsxs)(f.$n, {
                ...e,
                "data-migration-pending": !0,
                buttonRef: a,
                size: f.$n.Sizes.MIN,
                color: f.$n.Colors.CUSTOM,
                className: nc.sortDropdown,
                innerClassName: nc.sortDropdownInner,
                "aria-label": n ? eZ.intl.string(eZ.t.JxU0wr) : eZ.intl.string(eZ.t.xyYt8A),
                children: [
                    (0, i.jsx)(w.ArrowsUpDownIcon, { size: "xs", color: "currentColor" }),
                    (0, i.jsx)(N.E, {
                        className: nc.sortDropdownText,
                        variant: "body-sm/medium",
                        color: "interactive-text-default",
                        children: (0, i.jsx)("span", {
                            className: nc.sortDropdownTextHighContrastForcedColor,
                            children: n || l ? eZ.intl.string(eZ.t.JxU0wr) : eZ.intl.string(eZ.t.xyYt8A),
                        }),
                    }),
                    s
                        ? (0, i.jsx)(k.ChevronSmallUpIcon, { size: "custom", color: "currentColor", width: 20 })
                        : (0, i.jsx)(R.ChevronSmallDownIcon, { size: "custom", color: "currentColor", width: 20 }),
                ],
            });
        },
    });
}

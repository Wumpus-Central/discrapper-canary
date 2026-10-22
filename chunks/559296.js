(n.r(t), n.d(t, { CreateGameInvitePostButton: () => sH, default: () => s_ }));
var l,
    i = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(34391),
    c = n.n(o),
    d = n(462180),
    u = n(837381),
    m = n(887129),
    h = n(741918),
    x = n(371444),
    g = n(17928),
    f = n(862482),
    j = n(297264),
    v = n(707554),
    p = n(312138),
    A = n(140735),
    C = n(92008),
    N = n(475825),
    b = n(834730),
    E = n(939249),
    S = n(821609),
    y = n(475358),
    T = n(695366),
    I = n(872162),
    k = n(265872),
    _ = n(900797),
    M = n(847374),
    R = n(866665),
    w = n(112173),
    P = n(738876),
    L = n(765671),
    D = n(964486),
    O = n(775602),
    G = n(47167),
    F = n(890283),
    z = n(769015),
    U = n(807632),
    H = n(531729),
    B = n(409626),
    V = n(692969),
    W = n(870136),
    $ = n(575293),
    q = n(857071),
    K = n(228098),
    Y = n(157259),
    Q = n(212007),
    X = n(892340),
    J = n(715757),
    Z = n(284009),
    ee = n.n(Z),
    et = n(536637),
    en = n.n(et),
    el = n(346055),
    ei = n(97808),
    es = n(778712),
    ea = n(138134),
    er = n(62010),
    eo = n(863610),
    ec = n(534890),
    ed = n(144165),
    eu = n(119031),
    em = n(104171),
    eh = n(379257),
    ex = n(306537),
    eg = n(114166),
    ef = n(810181),
    ej = n(390248),
    ev = n(422844),
    ep = n(435470),
    eA = n(473503),
    eC = n(256265),
    eN = n(969043),
    eb = n(710948),
    eE = n(218152),
    eS = n(52933),
    ey = n(504261),
    eT = n(505234),
    eI = n(387408),
    ek = n(59318),
    e_ = n(294520),
    eM = n(505527),
    eR = n(863439),
    ew = n(521981),
    eP = n(467073),
    eL = n(44788),
    eD = n(831688),
    eO = n(448368),
    eG = n(302031),
    eF = n(885386),
    ez = n(358047),
    eU = n(734057),
    eH = n(232835),
    eB = n(576705),
    eV = n(967198),
    eW = n(287809),
    e$ = n(531685),
    eq = n(58703),
    eK = n(763754),
    eY = n(447215);
let eQ = function (e) {
    let { message: t, originalAuthor: n, channel: l } = e,
        s = (0, eK.d8)(n, l),
        a = s?.nick ?? n?.username ?? "",
        r = (0, eY.P)({
            user: n ?? void 0,
            channelId: l.id,
            guildId: l.guild_id,
            messageId: t?.id,
            stopPropagation: !0,
        })(s ?? void 0)(a, l.id);
    return (0, i.jsx)(b.E, { variant: "text-md/semibold", children: r });
};
var eX = n(652215),
    eJ = n(838541),
    eZ = n(105292),
    e0 = n(948389),
    e1 = n(223139),
    e2 = n(165648);
let e4 = s.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: l, overrideMedia: a, className: o } = e,
        {
            channel: c,
            isOpen: m,
            messageCount: h,
            content: x,
            firstMessage: f,
            media: j,
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                l = (0, g.bG)([eU.A], () => eU.A.getChannel(t));
            ee()(null != l, "the thread should not be null here, a store must have missed an update");
            let i = (0, g.bG)([ez.Ay], () => ez.Ay.getCurrentSidebarChannelId(l.parent_id) === l.id),
                { firstMessage: a } = (0, eA.OA)(l),
                r = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: l = !0 } = e,
                        i = s.useMemo(() => (null != t ? (0, eI.A)(t, t?.messageSnapshots[0]) : null), [t]),
                        { hasSpoilerEmbeds: a, content: r } = s.useMemo(
                            () =>
                                i?.content != null && "" !== i.content
                                    ? (0, ew.Ay)(i, {
                                          formatInline: n,
                                          noStyleAndInteraction: l,
                                          allowHeading: !0,
                                          allowList: !0,
                                      })
                                    : { hasSpoilerEmbeds: !1, content: null },
                            [n, i, l],
                        ),
                        o = (0, eC.Ky)(t, a),
                        c = (0, eC.L_)(t, a);
                    return null == t ? null : { hasSpoilerEmbeds: a, content: r, firstMedia: o, firstMediaIsEmbed: c };
                })({ firstMessage: a }),
                o = r?.content,
                c = r?.firstMedia,
                { messageCountText: d } = (0, ep.k6)(l);
            return { channel: l, isOpen: i, messageCount: d, firstMessage: a, content: o, media: n ?? c };
        })({ threadId: t, overrideMedia: a }),
        p = (0, G.Ay)(c);
    (0, J.vb)(f);
    let A = (0, g.bG)([eW.default, eH.A], () => {
            let e = eW.default.getUser(f?.messageSnapshots[0]?.moderatorReport?.reported_user_id);
            if (null != e) return e;
            if (f?.messageReference?.channel_id != null && f?.messageReference?.message_id != null) {
                let e = eH.A.getMessage(f?.messageReference?.channel_id, f?.messageReference?.message_id);
                if (null != e) return e.author;
            }
            return null;
        }),
        { ref: C, height: N } = (0, L.Ay)(),
        b = (0, eE.kU)((e) => e.setCardHeight, d.x);
    (s.useEffect(() => {
        null != N && b(t, N);
    }, [N, b, t]),
        s.useEffect(() => {
            l?.(C.current, t);
        }, [C, l, t]));
    let S = s.useRef(null),
        { handleLeftClick: y, handleRightClick: T } = (0, eT.A)({ facepileRef: S, goToThread: n, channel: c }),
        { role: I, onFocus: k, ..._ } = (0, u.rm)(t),
        { isFocused: M, handleFocus: R, handleBlur: w } = (0, ey.A)(k);
    return (0, i.jsxs)("div", {
        ref: C,
        "data-item-id": t,
        onClick: y,
        onContextMenu: T,
        className: r()(e1.kL, e0.kL, o, { [e1.nT]: m }),
        children: [
            (0, i.jsx)(E.D, {
                onClick: y,
                focusProps: { ringTarget: C },
                onContextMenu: T,
                "aria-label": eZ.intl.formatToPlainString(eZ.t.pgYN6c, { title: p, count: h }),
                className: e1.Kv,
                onFocus: R,
                onBlur: w,
                ..._,
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
                                    content: x,
                                    hasMediaAttachment: null != j,
                                    originalAuthor: A,
                                }),
                                f?.blocked || null == j ? null : (0, i.jsx)(tn, { channel: c, firstMedia: j }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(el.M, {
                        enabled: !M,
                        children: (0, i.jsx)(e5, { channel: c, firstMessage: f, facepileRef: S }),
                    }),
                ],
            }),
        ],
    });
});
function e3(e) {
    let { channel: t, firstMessage: n, content: l, hasMediaAttachment: s, originalAuthor: a } = e,
        { hasUnreads: o } = (0, ep.X5)(t);
    return (0, i.jsxs)("div", {
        className: r()(e0.rf, e1.rf),
        children: [
            (0, i.jsx)(eS.Ay, { channel: t }),
            (0, i.jsx)("div", {
                className: (e1.iU, e0.iU),
                children: (0, i.jsx)(e8, {
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
let e8 = s.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: s, hasUnreads: a, originalAuthor: o } = e,
        c = (0, g.bG)([eN.A], () => eN.A.isLoading(n.id)),
        d = (0, g.bG)([eB.A], () => eB.A.can(eX.xBc.MANAGE_MESSAGES, n)),
        u = eF.gs.useSetting(),
        m = (0, g.bG)([eV.A], () => eV.A.getGuildId()),
        { contentPlaceholder: h, renderedContent: x } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, eO.o)(t, l, !1, !1, r()(e1.BK, e0.BK, e2.tZ, e2.__invalid_smallFontSize), {
                      leadingIconClass: e1.aG,
                      trailingIconClass: e1.sl,
                      iconSize: eJ.eJ,
                  }),
        f =
            null != x
                ? (0, i.jsx)(b.E, { variant: "text-md/normal", children: x })
                : s
                  ? null
                  : (0, i.jsx)(b.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: a ? "text-default" : "text-muted",
                        className: r()(e1.BK, e0.BK),
                        "aria-label": "",
                        children: null == t ? (c ? null : eZ.intl.string(eZ.t.mE3KJN)) : h,
                    }),
        j = (0, eR.A)(u, d);
    return (0, i.jsxs)(eG.Bs.Provider, {
        value: j,
        children: [
            null != o
                ? (0, i.jsx)(ei.eu, {
                      size: es._3.SIZE_40,
                      src: o.getAvatarURL(m, (0, es.FT)(es._3.SIZE_40)),
                      "aria-label": "",
                      className: e0.Nd,
                  })
                : null,
            (0, i.jsxs)("div", {
                className: e0.IF,
                children: [
                    (0, i.jsx)(eQ, { channel: n, originalAuthor: o, message: t }),
                    (0, i.jsx)(el.M, { className: e1.JY, children: f }),
                ],
            }),
        ],
    });
});
function e5(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        { isNew: s } = (0, ep.X5)(t),
        a = (0, G.Ay)(t),
        r = (0, ef.m)(t.id),
        o = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: e0.qr,
        children: [
            (0, i.jsxs)("div", {
                className: e0.JS,
                children: [
                    (0, i.jsx)(ea.FlagIcon, { size: "custom", width: 14, height: 14 }),
                    (0, i.jsx)(b.E, { variant: "text-sm/medium", children: a }),
                    s
                        ? (0, i.jsx)("div", {
                              className: e0.Ad,
                              children: (0, i.jsx)(er.E, { type: "new", variant: "primary" }),
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: e0.PQ,
                children: [
                    o || null == l ? null : (0, i.jsx)(e9, { firstMessage: l, channel: t }),
                    (0, i.jsx)(e7, { channel: t, iconSize: 14 }),
                    (0, i.jsx)("span", { className: e1.xE, children: "\u2022" }),
                    r.length > 0
                        ? (0, i.jsxs)("div", {
                              className: e1.IW,
                              children: [
                                  (0, i.jsx)(te, { channel: t, userIds: r, facepileRef: n }),
                                  (0, i.jsx)("div", {
                                      className: e1.r$,
                                      children: (0, i.jsx)(eo.n, { themed: !0, dotRadius: 2 }),
                                  }),
                                  (0, i.jsx)(eu.Ay, { channel: t, className: e1.mD, renderDots: !1 }),
                              ],
                          })
                        : (0, i.jsx)(e6, { channel: t }),
                ],
            }),
        ],
    });
}
function e7(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: s, unreadCount: a } = (0, ep.k6)(t);
    return (0, i.jsxs)("div", {
        className: r()(e1.Mv, { [e1.hT]: l && null == a }),
        children: [
            (0, i.jsx)("span", {
                className: e1.SZ,
                children: (0, i.jsx)(ec.ChatIcon, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof s
                ? (0, i.jsx)(eg.A, { value: s, digitWidth: 9, className: e1.gv })
                : (0, i.jsx)("div", { className: e1.gv, children: s }),
            null == a
                ? null
                : (0, i.jsxs)(b.E, {
                      className: e1.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", eZ.intl.format(eZ.t.z3PEth, { count: a }), ")"],
                  }),
        ],
    });
}
function e9(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, g.bG)([eU.A], () => eU.A.getChannel(n.parent_id)),
        s = (0, ep.Ck)(l),
        { disableReactionCreates: a, isLurking: r, isPendingMember: o } = (0, eP.A)(n);
    return null == s || a
        ? null
        : (0, i.jsx)(eD.q, {
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
              type: eM.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function e6(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, ev.R)(t.parent_id),
        l = (0, ep.Mw)(t, n),
        s = t.threadMetadata?.createTimestamp,
        a = null == s ? null : eZ.intl.formatToPlainString(eZ.t["13euCd"], { timestamp: (0, eq.i$)(en()(s), "LLLL") });
    return (0, i.jsx)(R.m, {
        text: a,
        children: (0, i.jsx)(b.E, {
            className: e1.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function te(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        s = (0, ep.$I)(t, n);
    return (0, i.jsx)("div", {
        ref: l,
        children: (0, i.jsx)(em.Ay, {
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
        c = (0, g.bG)([e$.A], () => e$.A.isFocused()),
        d = (0, ek.ge)(l.src),
        u = eF.kt.useSetting(),
        m = (0, e_.rx)(a),
        { src: h, width: x, height: f, alt: j } = l;
    return (f > x ? (n = 72) : (t = 72), o)
        ? (0, i.jsx)("div", {
              "aria-label": m ?? j ?? eZ.intl.string(eZ.t.hqwnc2),
              className: r()(e1.iT, e1.nh),
              style: { maxWidth: t, maxHeight: n, height: f, width: x },
          })
        : h.startsWith("data:")
          ? (0, i.jsx)(ed._, {
                src: h,
                maxHeight: t,
                maxWidth: n,
                width: x,
                height: f,
                alt: null != j && s ? m : j,
                className: e1.iT,
                imageClassName: r()({ [e1.cd]: s, [e1.LW]: !0 }),
            })
          : (0, eL.LL)({
                src: h,
                maxHeight: t,
                maxWidth: n,
                width: x,
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
        [l, s] = (0, e_.eJ)({ media: n, channel: t }),
        a = (0, ej.qZ)(s);
    return (0, i.jsx)(el.M, {
        enabled: !0,
        children: (0, i.jsxs)("div", {
            className: r()(e1.pV, e0.pV),
            onClick: function (e) {
                (e.stopPropagation(),
                    a &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        eh.A.showAgeVerificationGetStartedModal({ entryPoint: ex.q1.FORUM_POST_MEDIA_PREVIEW })));
            },
            children: [
                (0, i.jsx)(tt, { firstMedia: n, shouldObscure: l, obscureReason: s, shouldShowAgeVerification: a }),
                l && (0, i.jsx)(eb.A, { iconClassname: e1.yo, obscureReason: s }),
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
    tx = n(947094),
    tg = n(919577),
    tf = n(207777),
    tj = n(365971),
    tv = n(613999);
let tp = function (e) {
    let { guildId: t, channelId: n } = e,
        l = s.useRef(null),
        i = (0, tj.Xg)(),
        a = !e$.A.isFocused(i);
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
var tA = n(853742);
n(321073);
var tC = n(941143),
    tN = n(136722),
    tb = n(661531),
    tE = n(192308),
    tS = n(866323),
    ty = n(789645),
    tT = n(446576),
    tI = n(26430),
    tk = n(885574),
    t_ = n(812993),
    tM = n(933832),
    tR = n(565787),
    tw = n(320448),
    tP = n(435183),
    tL = n(417454),
    tD = n(148719),
    tO = n(7689),
    tG = n(56059),
    tF = n(141628),
    tz = n(696986),
    tU = n(793574),
    tH = n(688810),
    tB = n(359800),
    tV = n(206828),
    tW = n(490094),
    t$ = n(296853),
    tq = n(922396);
function tK(e) {
    let { channel: t, tagFilter: n } = e,
        l = (0, tr.AI)(t),
        { application: s } = (0, U._k)(t.id);
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
                          (0, i.jsx)(tQ, {
                              icon: (0, i.jsx)(tO.MagnifyingGlassIcon, { size: "xs", color: tb.A.colors.ICON_SUBTLE }),
                              children: eZ.intl.string(tW.default.y5Bork),
                          }),
                          (0, i.jsx)(tQ, {
                              icon: (0, i.jsx)(tG.b, { size: "xs", color: tb.A.colors.ICON_SUBTLE }),
                              children: eZ.intl.string(tW.default.b77nl3),
                          }),
                          (0, i.jsx)(tY, { application: s }),
                      ],
                  }),
                  l &&
                      (0, i.jsx)(S.$, {
                          variant: "primary",
                          size: "md",
                          text: eZ.intl.string(tW.default.QwW8zd),
                          onClick: a,
                      }),
              ],
          });
}
function tY(e) {
    let { application: t } = e,
        { analyticsLocations: n } = (0, tH.Ay)(tU.A.GAME_INVITE_CHANNEL_EMPTY_STATE),
        { startAuthorization: l, hasAlreadyLinked: s, canStartAuthorization: a, fetched: r } = (0, tV.RD)(t),
        o = (0, tB.z)(l, s);
    if (!r) return null;
    let c = (0, i.jsx)(tF.A, { size: "xs", color: tb.A.colors.ICON_SUBTLE });
    return s
        ? (0, i.jsx)(tQ, { icon: c, children: eZ.intl.string(tW.default.BSPpd4) })
        : a
          ? (0, i.jsx)(tQ, {
                icon: c,
                children: eZ.intl.format(tW.default.XZapWG, { onClick: () => o({ analyticsLocations: n }) }),
            })
          : null;
}
function tQ(e) {
    let { icon: t, children: n } = e;
    return (0, i.jsxs)("li", {
        className: t$.N4,
        children: [
            (0, i.jsx)("div", { className: t$.xH, children: t }),
            (0, i.jsx)(b.E, { variant: "text-sm/medium", color: "text-default", className: t$.oo, children: n }),
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
                variant: "heading-md/semibold",
                children: eZ.intl.formatToPlainString(eZ.t.lvPci0, { numTags: t.size }),
            }),
            (0, i.jsx)(b.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: eZ.intl.formatToPlainString(tW.default.nJzi8D, { numTags: t.size }),
            }),
            n &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tz.h, { size: 16 }),
                        (0, i.jsx)(S.$, { text: eZ.intl.string(tW.default.QwW8zd), variant: "secondary", onClick: l }),
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
    t3 = n(468689),
    t8 = n(71393),
    t5 = n(975571);
let t7 = { mass: 1, tension: 250, friction: 18, clamp: !0 };
var t9 = n(340990);
function t6(e) {
    let { handleHide: t } = e;
    return (0, i.jsx)(E.D, {
        onClick: t,
        className: t9.b,
        "aria-label": eZ.intl.string(eZ.t.WAI6xu),
        children: (0, i.jsx)(ty.P, { size: "md", color: "currentColor", className: t9.ut }),
    });
}
function ne(e) {
    let { username: t, title: n, videoSrc: l, messageCount: s, reaction: a, reactionCount: o, classname: c } = e;
    return (0, i.jsxs)("div", {
        className: r()(t9.IP, c),
        children: [
            (0, i.jsx)("div", {
                className: t9.Y6,
                children: (0, i.jsxs)("div", {
                    className: t9.wO,
                    children: [
                        (0, i.jsx)(b.E, { tag: "span", className: t9.cy, variant: "text-sm/semibold", children: t }),
                        (0, i.jsx)(b.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: t9.SD,
                            children: eZ.intl.string(eZ.t.mA0IvI),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(j.D, {
                variant: "heading-md/extrabold",
                className: t9.DD,
                color: "text-strong",
                "aria-hidden": !0,
                children: n,
            }),
            (0, i.jsx)(tz.h, { size: 10 }),
            (0, i.jsx)(t1.A, { className: t9.Ki, src: l }),
            (0, i.jsx)(tz.h, { size: 10 }),
            (0, i.jsx)("div", {
                className: t9.qr,
                children: (0, i.jsxs)("div", {
                    className: t9.GD,
                    children: [
                        (0, i.jsxs)("div", {
                            className: t9.Mv,
                            children: [
                                (0, i.jsx)("span", {
                                    className: t9.SZ,
                                    children: (0, i.jsx)(ec.ChatIcon, { size: "xs", color: "currentColor" }),
                                }),
                                (0, i.jsx)(b.E, {
                                    variant: "text-xs/normal",
                                    color: "interactive-text-default",
                                    children: s,
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: t9.vi,
                            children: [
                                (0, i.jsx)("span", { role: "img", "aria-label": "", children: a }),
                                (0, i.jsx)(b.E, {
                                    variant: "text-xs/normal",
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
        a = (0, g.bG)([t8.A], () => t8.A.getGuild(t.guild_id)),
        o = (0, g.bG)([tx.A], () => tx.A.hasHidden(t.id)),
        c = (0, t4.e)({ guildId: t.guild_id, channelId: t.id }),
        { transitions: d, setVisible: u } = (function () {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tS.p)(e, {
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
            (u(!1), tg.A.hideAdminOnboarding(t.id, !0));
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
        x = s.useMemo(
            () => [
                eZ.intl.string(eZ.t["m/b58M"]),
                eZ.intl.string(eZ.t.MuJSKw),
                eZ.intl.string(eZ.t["d/Wqvu"]),
                eZ.intl.string(eZ.t.GJklAw),
            ],
            [],
        );
    function f() {
        t3.A.open(t.guild_id, eX.BEX.ROLE_SUBSCRIPTIONS);
    }
    let v = a?.features.has(eX.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)
            ? eZ.intl.string(eZ.t.n0q7sI)
            : eZ.intl.string(eZ.t.QoYdie),
        p =
            (a?.features.has(eX.GuildFeatures.CREATOR_MONETIZABLE) ||
                a?.features.has(eX.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) ??
            !1,
        A = p ? eZ.intl.string(eZ.t["G/7ciZ"]) : eZ.intl.string(eZ.t.IFOiit),
        C = p ? eZ.intl.string(eZ.t.GjgQO1) : eZ.intl.string(eZ.t.E7AO6t);
    return (0, i.jsx)(i.Fragment, {
        children: d((e, t) =>
            t
                ? (0, i.jsxs)(tC.animated.div, {
                      style: e,
                      className: t9.kL,
                      children: [
                          (0, i.jsxs)("div", {
                              className: t9.U1,
                              children: [
                                  (0, i.jsxs)(b.E, {
                                      variant: "text-xs/normal",
                                      className: t9.l2,
                                      children: [
                                          (0, i.jsx)(tk.CircleInformationIcon, {
                                              size: "xxs",
                                              color: "currentColor",
                                              className: t9.Kk,
                                          }),
                                          eZ.intl.string(eZ.t.znhX2R),
                                      ],
                                  }),
                                  (0, i.jsx)(t6, { handleHide: m }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: t9.hQ,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: r()(t9.CT, p && t9.en),
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: t9.F2,
                                              children: (0, i.jsxs)("div", {
                                                  className: t9.IZ,
                                                  children: [
                                                      (0, i.jsx)(ne, {
                                                          username: eZ.intl.string(eZ.t.AkORco),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                                          title: eZ.intl.string(eZ.t.yO6Fxu),
                                                          messageCount: "34",
                                                          reaction: "\u26A1\uFE0F",
                                                          reactionCount: "724",
                                                          classname: t9.q6,
                                                      }),
                                                      (0, i.jsx)(ne, {
                                                          username: eZ.intl.string(eZ.t.DPg3YM),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                                          title: eZ.intl.string(eZ.t["R5XnC/"]),
                                                          messageCount: "34",
                                                          reactionCount: "84",
                                                          reaction: "\uD83D\uDC9E",
                                                          classname: t9.q6,
                                                      }),
                                                      (0, i.jsx)(ne, {
                                                          username: eZ.intl.string(eZ.t.KIelex),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                                          title: eZ.intl.string(eZ.t.pt88Vb),
                                                          messageCount: "7,103",
                                                          reaction: "\u26A1\uFE0F",
                                                          reactionCount: "724",
                                                          classname: t9.Ob,
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          (0, i.jsxs)("article", {
                                              className: t9.n$,
                                              children: [
                                                  (0, i.jsx)(j.D, {
                                                      variant: "heading-lg/semibold",
                                                      color: "text-strong",
                                                      children: A,
                                                  }),
                                                  (0, i.jsx)(tz.h, { size: 8 }),
                                                  (0, i.jsx)(b.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: C,
                                                  }),
                                                  (0, i.jsx)(tz.h, { size: 16 }),
                                                  (0, i.jsxs)(E.D, {
                                                      onClick: () =>
                                                          open(t5.A.getCreatorSupportArticleURL(eX.MVz.MEDIA_CHANNEL)),
                                                      className: t9.zy,
                                                      children: [
                                                          (0, i.jsx)(b.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-link",
                                                              children: eZ.intl.string(eZ.t.OahzBd),
                                                          }),
                                                          (0, i.jsx)(tZ.t, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: t9.QI,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)(tz.h, { size: 16 }),
                                                  (0, i.jsx)("div", {
                                                      className: t9.Qq,
                                                      children: h.map((e) =>
                                                          (0, i.jsx)(
                                                              b.E,
                                                              {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-default",
                                                                  className: t9.U0,
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
                                          className: r()(t9.CT, t9.Gw),
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: t9.F2,
                                                  children: (0, i.jsxs)("div", {
                                                      className: t9.kQ,
                                                      children: [
                                                          (0, i.jsx)("img", {
                                                              src: l
                                                                  ? "/assets/b58ce8ba4d6516a2.png"
                                                                  : "/assets/9ed42f4f17fd8793.png",
                                                              alt: "",
                                                              className: t9.JM,
                                                          }),
                                                          (0, i.jsx)("img", {
                                                              src: l
                                                                  ? "/assets/d0f129a0c1627f7a.png"
                                                                  : "/assets/fddfcda2eca5c8d4.png",
                                                              alt: "",
                                                              className: t9.JM,
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              (0, i.jsxs)("article", {
                                                  className: t9.n$,
                                                  children: [
                                                      (0, i.jsxs)(b.E, {
                                                          variant: "text-xxs/bold",
                                                          className: t9.X4,
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
                                                      (0, i.jsx)(tz.h, { size: 10 }),
                                                      (0, i.jsx)(j.D, {
                                                          variant: "heading-lg/semibold",
                                                          color: "text-strong",
                                                          children: eZ.intl.string(eZ.t["N/TRrT"]),
                                                      }),
                                                      (0, i.jsx)(tz.h, { size: 8 }),
                                                      (0, i.jsx)(b.E, {
                                                          variant: "text-md/normal",
                                                          color: "text-muted",
                                                          children: eZ.intl.string(eZ.t.t3yWxG),
                                                      }),
                                                      (0, i.jsx)(tz.h, { size: 16 }),
                                                      (0, i.jsx)("div", {
                                                          className: t9.Qq,
                                                          children: x.map((e) =>
                                                              (0, i.jsx)(
                                                                  b.E,
                                                                  {
                                                                      variant: "text-sm/medium",
                                                                      color: "text-default",
                                                                      className: t9.U0,
                                                                      children: e,
                                                                  },
                                                                  e,
                                                              ),
                                                          ),
                                                      }),
                                                      (0, i.jsx)(tz.h, { size: 16 }),
                                                      0 === c.length &&
                                                          (0, i.jsx)(S.$, { variant: "primary", onClick: f, text: v }),
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
    ns = n(350527),
    na = n(95035),
    nr = n(39470),
    no = n(587240),
    nc = n(253898);
let nd = { mass: 1, tension: 250, friction: 18, clamp: !0 };
function nu(e) {
    let { guild: t } = e,
        n = (0, g.bG)([eB.A], () => eB.A.can(eX.xBc.MANAGE_GUILD, t));
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
                        children: (0, i.jsx)(b.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: eZ.intl.string(nr.default.fP8DVx),
                        }),
                    }),
                    (0, i.jsxs)(nn.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, i.jsx)(b.E, {
                                variant: "text-lg/semibold",
                                color: "text-default",
                                children: eZ.intl.string(nr.default["i7CH/I"]),
                            }),
                            (0, i.jsxs)("ol", {
                                className: r()(no.p_, no.o8, no.ap),
                                children: [
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(b.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: eZ.intl.string(nr.default["+Izoz7"]),
                                        }),
                                    }),
                                    (0, i.jsxs)("li", {
                                        children: [
                                            (0, i.jsx)(b.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eZ.intl.string(nr.default["iu/RkU"]),
                                            }),
                                            (0, i.jsxs)("ul", {
                                                className: r()(no.p_, no.t3, no.zS),
                                                children: [
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(b.E, {
                                                            variant: "text-md/normal",
                                                            color: "text-default",
                                                            children: eZ.intl.string(nr.default.QogKbP),
                                                        }),
                                                    }),
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(b.E, {
                                                            variant: "text-md/normal",
                                                            color: "text-default",
                                                            children: eZ.intl.string(nr.default.V4orHT),
                                                        }),
                                                    }),
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(b.E, {
                                                            variant: "text-md/normal",
                                                            color: "text-default",
                                                            children: eZ.intl.string(nr.default.VrrQXe),
                                                        }),
                                                    }),
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(b.E, {
                                                            variant: "text-md/normal",
                                                            color: "text-default",
                                                            children: eZ.intl.string(nr.default.pSuM5e),
                                                        }),
                                                    }),
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(b.E, {
                                                            variant: "text-md/normal",
                                                            color: "text-default",
                                                            children: eZ.intl.string(nr.default["/RLXlI"]),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(b.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: eZ.intl.string(nr.default.j4AmYy),
                                        }),
                                    }),
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(b.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: eZ.intl.format(nr.default["/g+PvX"], {
                                                termsOfService: eX.X7G.TERMS,
                                                communityGuidelines: eX.X7G.GUIDELINES,
                                                helpArticle: t5.A.getArticleURL(eX.MVz.FLAG_TO_MOD),
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
                            (0, i.jsx)(b.E, {
                                variant: "text-lg/semibold",
                                color: "text-default",
                                children: eZ.intl.string(nr.default.qJWXsz),
                            }),
                            (0, i.jsxs)("ul", {
                                className: r()(no.p_, no.zS, no.ap),
                                children: [
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(b.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: eZ.intl.format(nr.default.FUBV1P, {
                                                survey: "https://discord.sjc1.qualtrics.com/jfe/form/SV_3WvT7SqlWpCJ4HQ",
                                            }),
                                        }),
                                    }),
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(b.E, {
                                            variant: "text-md/normal",
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
                            (0, i.jsx)(b.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: eZ.intl.string(nr.default.J3HKmx),
                            }),
                            n &&
                                (0, i.jsx)(b.E, {
                                    variant: "text-md/normal",
                                    color: "text-default",
                                    children: eZ.intl.format(nr.default["9x2vbP"], {
                                        optOutHook: (e) =>
                                            (0, i.jsx)(na.A, {
                                                onClick: () =>
                                                    t3.A.open(t.id, eX.BEX.MODERATION, null, eX.nd0.SAFETY_OVERVIEW),
                                                children: e,
                                            }),
                                    }),
                                }),
                            (0, i.jsx)(b.E, {
                                variant: "text-md/normal",
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
                width: ns.T5,
                height: ns.T5,
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
                transitions: (0, tS.p)(e, {
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
            (0, tS.p)(t, {
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
                                            (0, i.jsx)(nl.p, {
                                                size: "custom",
                                                width: 28,
                                                height: 28,
                                                color: "currentColor",
                                                className: no.Mg,
                                            }),
                                            (0, i.jsx)(b.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                children: eZ.intl.string(eZ.t.uvGmCx),
                                            }),
                                            (0, i.jsx)(b.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                children: "\u2014",
                                            }),
                                            (0, i.jsx)(j.D, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: eZ.intl.string(nr.default["95qQRB"]),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(E.D, {
                                        onClick: () => a(!0),
                                        children: (0, i.jsx)(ty.P, {
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
    nx = n(565645),
    ng = n(21161),
    nf = n(796774),
    nj = n(209932),
    nv = n(174459),
    np = n(102597),
    nA = n(904054),
    nC = n(584014),
    nN = n(536283);
n(980504);
var nb = n(406271);
function nE(e) {
    let { className: t, sound: n, playSound: l, isPlaying: a, text: o } = e,
        c = n?.emojiId != null || n?.emojiName != null,
        d = eZ.intl.formatToPlainString(eZ.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name }),
        u = s.useCallback(() => {
            (nv.default.track(eX.HAw.MODERATOR_QUEUE_ACTION, { guild_id: eV.A.getGuildId(), action: "airhorn" }),
                null != l && l());
        }, [l]);
    return (0, i.jsxs)(E.D, {
        "aria-label": d,
        tag: "span",
        onClick: u,
        className: r()(nb.Ls, nb.oR, { [nb.he]: !0 === a }, t),
        children: [
            c && (0, i.jsx)(nx.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: nb.JS }),
            (0, i.jsx)("span", { children: ` ${o} ` }),
        ],
    });
}
function nS(e) {
    let { containerRef: t, text: n } = e,
        l = s.useRef(null),
        a = (0, g.bG)([nj.A], () => nj.A.getSoundsForGuild("0")?.find((e) => "airhorn" === e.name)),
        { createMultipleConfettiAt: r } = s.useContext(ng.x),
        o = (0, g.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { isPlaying: c, playSound: d } = (function (e) {
            let { isPlaying: t, playSound: n } = (0, nC.A)(null != e ? (0, np.A)(e.soundId) : null);
            return {
                isPlaying: t,
                playSound: s.useCallback(async () => {
                    let t = (0, nA.A)(e?.volume ?? 1);
                    return !!(await n({ volume: t }));
                }, [n, e?.volume]),
            };
        })(a);
    (0, D.Ay)(() => {
        (0, nf.E7)();
    });
    let u = s.useCallback(async () => {
        if ((await d()) && (l.current?.addAnimation(), !o && t?.current != null)) {
            let e = t.current.getBoundingClientRect(),
                n = { x: e.left + e.width / 2, y: e.top + e.height / 3 },
                l = nN.uI[Math.floor(Math.random() * nN.uI.length)];
            r(
                n.x,
                n.y,
                { velocity: { type: "static-random", minValue: { x: -500, y: -500 }, maxValue: { x: 500, y: -100 } } },
                40,
                { sprite: l },
            );
        }
    }, [d, r, o, t]);
    return void 0 === a ? null : (0, i.jsx)(nE, { sound: a, playSound: u, isPlaying: c, text: n });
}
function ny() {
    let e = s.useRef(null);
    return (0, i.jsxs)(nn.B, {
        className: nb.kL,
        direction: "vertical",
        align: "center",
        justify: "center",
        padding: { top: 24, bottom: 24 },
        ref: e,
        children: [
            (0, i.jsx)(nh._, { size: "custom", width: 48, height: 48 }),
            (0, i.jsxs)(nn.B, {
                direction: "vertical",
                align: "center",
                justify: "center",
                children: [
                    (0, i.jsx)(j.D, {
                        className: nb.wx,
                        variant: "heading-md/medium",
                        children: eZ.intl.string(nr.default.h6QNky),
                    }),
                    (0, i.jsx)(b.E, {
                        className: nb.Qq,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: eZ.intl.format(nr.default["8N4c58"], {
                            airhornHook: (t) => (0, i.jsx)(nS, { containerRef: e, text: t }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
var nT = n(34457),
    nI = n(317525),
    nk = n(44234),
    n_ = n(625494),
    nM = n(927813),
    nR = n(935208),
    nw = n(387255);
function nP(e) {
    let { channelName: t, guildId: l, tagFilter: a, channel: r } = e,
        o = (0, ep.S4)(r),
        c = (0, tr.AI)(r),
        d = r.isMediaChannel(),
        u = s.useCallback(() => {
            ((0, tA.zd)(),
                (0, tE.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("571331"), n.e("390052")]).then(n.bind(n, 653682));
                    return (t) => (0, i.jsx)(e, { ...t, guildId: l });
                }));
        }, [l]),
        m = a.size > 0,
        h = c || o,
        x = !m && o && !d,
        g = s.useCallback(
            () =>
                x
                    ? u()
                    : c
                      ? void (r.isGameInvitesChannel() ? (0, H.d)(r) : n_._.dispatch(eX.jej.FOCUS_COMPOSER_TITLE))
                      : (0, eX.FXj)(),
            [u, x, c, r],
        );
    return (0, i.jsxs)("div", {
        className: tq.k,
        children: [
            (0, i.jsx)(j.D, {
                className: tq.w,
                variant: "heading-md/semibold",
                children: m
                    ? eZ.intl.formatToPlainString(eZ.t.lvPci0, { numTags: a.size })
                    : eZ.intl.string(eZ.t.PwTMG0),
            }),
            (0, i.jsx)(b.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: m
                    ? eZ.intl.formatToPlainString(eZ.t.AAeye1, { numTags: a.size })
                    : eZ.intl.formatToPlainString(eZ.t.YtsXFD, { channelName: t }),
            }),
            h &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tz.h, { size: 16 }),
                        (0, i.jsx)(S.$, {
                            text: x ? eZ.intl.string(eZ.t.DgatTQ) : eZ.intl.string(eZ.t.wOKE8I),
                            variant: "secondary",
                            onClick: g,
                        }),
                    ],
                }),
        ],
    });
}
var nL = n(253913),
    nD = n(986359);
let nO = { width: 28, height: 28 },
    nG = { width: 20, height: 20, borderRadius: 10 };
function nF(e) {
    (0, tA.bh)({ onboardingCTA: e });
}
class nz {
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
function nU(e) {
    let { guild: t, roles: n } = e;
    return (0, i.jsx)("div", {
        className: nD.Ei,
        "aria-label": eZ.intl.formatToPlainString(eZ.t.PCs0oo, { numRoles: n.length }),
        children: n.map((e) =>
            (0, i.jsx)(tL.b_, { role: e, canRemove: !1, onRemove: eX.FXj, guildId: t.id, className: nD.Yq }, e.id),
        ),
    });
}
let nH = { mass: 1, tension: 250, friction: 18, clamp: !0 };
function nB(e) {
    let { handleHide: t } = e;
    return (0, i.jsx)(E.D, {
        onClick: t,
        className: nD.b,
        "aria-label": eZ.intl.string(eZ.t.WAI6xu),
        children: (0, i.jsx)(ty.P, { size: "md", color: "currentColor", className: nD.ut }),
    });
}
function nV(e) {
    let { expanded: t, onClick: n } = e;
    return (0, i.jsx)(E.D, {
        onClick: n,
        className: nD.b,
        "aria-label": t ? eZ.intl.string(eZ.t.iTcuma) : eZ.intl.string(eZ.t.dcl9MQ),
        children: t
            ? (0, i.jsx)(tT.g, { size: "xs", color: "currentColor", className: nD.ut })
            : (0, i.jsx)(tI._, { size: "xs", color: "currentColor", className: nD.ut }),
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
        { tagFilter: m } = (0, ev.R)(o.id),
        h = (0, g.bG)([t8.A], () => t8.A.getGuild(o.getGuildId())),
        x = (0, ep.S4)(o),
        { transitions: f, setVisible: p } = (function () {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tS.p)(e, {
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
        A = (0, tS.p)(u, {
            from: { maxHeight: 0 },
            enter: { maxHeight: 500 },
            leave: { maxHeight: 0 },
            config: { duration: 200 },
        }),
        C = s.useCallback((e) => {
            e.clickHandler?.();
        }, []),
        N = ((t = o.id), s.useCallback(() => (p(!1), tg.A.hideAdminOnboarding(t, !0)), [t, p])),
        {
            onboardingSteps: S,
            isDismissed: y,
            isHidden: I,
            isAllDone: k,
        } = (function (e) {
            var t;
            let l,
                a,
                r,
                o,
                { guild: c, channel: d, hasAnyThread: u, handleHide: m } = e,
                [h, x] = s.useState(!1),
                f = (0, t2.l)(d.id),
                j = (0, g.bG)([tx.A], () => tx.A.hasHidden(d.id)),
                v =
                    ((l = c?.id),
                    (a = (0, g.bG)([nI.A], () => (null != l ? nI.A.getSortedRoles(l) : void 0))),
                    s.useMemo(() => {
                        var e;
                        let t,
                            l,
                            s,
                            r,
                            o,
                            m,
                            h,
                            g,
                            f,
                            j = new nz(),
                            v = d?.isMediaChannel() === !0;
                        return (
                            null == c ||
                                null == d ||
                                v ||
                                null == a ||
                                j.addStep(
                                    ((t = (0, tD.A)(d)
                                        ? tN.kg(eX.xBc.VIEW_CHANNEL, eX.xBc.SEND_MESSAGES)
                                        : eX.xBc.SEND_MESSAGES),
                                    (s =
                                        (l =
                                            null != c
                                                ? (0, nw.N)(a, d, t).filter(
                                                      (e) =>
                                                          d.permissionOverwrites.hasOwnProperty(e.id) || (0, nT.Oy)(e),
                                                  )
                                                : []).length > 0),
                                    (r = l.some((e) => (0, nT.Oy)(e))),
                                    {
                                        name: eZ.intl.string(eZ.t["/Ax2gs"]),
                                        description: eZ.intl.string(eZ.t.gAIOfg),
                                        isDone: s && r,
                                        shouldWarn: s && !r,
                                        children: s ? (0, i.jsx)(nU, { guild: c, roles: l }) : null,
                                        clickHandler: () => {
                                            (nF(nL._G.PERMISSIONS),
                                                (0, tE.openModalLazy)(
                                                    async () => {
                                                        let { default: e } = await Promise.all([
                                                            n.e("594996"),
                                                            n.e("317110"),
                                                        ]).then(n.bind(n, 698325));
                                                        return (
                                                            x(!0),
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
                                                        onCloseRequest: eX.FXj,
                                                        onCloseCallback: () => x(!1),
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
                                            (nF(nL._G.GUIDELINES), tP.Ay.open(d.id, void 0, eX.b7d.TOPIC));
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
                                            (nF(nL._G.RECOMMENDED_TAGS),
                                                (0, tE.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("248089"),
                                                        n.e("666089"),
                                                    ]).then(n.bind(n, 537808));
                                                    return (t) => (0, i.jsx)(e, { ...t, channelId: d.id });
                                                }));
                                        },
                                        isDone: m,
                                    }),
                                ),
                            j.addStep(
                                ((h = +!!d.isGameInvitesChannel()),
                                (g = null != d.availableTags && d.availableTags.length > h),
                                {
                                    name: eZ.intl.string(eZ.t.xiBFCi),
                                    description: eZ.intl.string(eZ.t.wCv4Oz),
                                    clickHandler: () => {
                                        (nF(nL._G.TAGS),
                                            tP.Ay.open(d.id),
                                            (0, tE.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("143172"),
                                                    n.e("347326"),
                                                ]).then(n.bind(n, 950989));
                                                return (t) =>
                                                    (0, i.jsx)(e, { ...t, channelId: d.id, guildId: d.guild_id });
                                            }));
                                    },
                                    isDone: g,
                                }),
                            ),
                            j.addStep(
                                ((f = null != d.defaultReactionEmoji),
                                {
                                    name: eZ.intl.string(eZ.t.QlyC9s),
                                    description: eZ.intl.string(eZ.t["+50LJg"]),
                                    clickHandler: () => {
                                        (nF(nL._G.DEFAULT_REACTION),
                                            (0, tE.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("571481"),
                                                    n.e("634941"),
                                                    n.e("394209"),
                                                    n.e("785157"),
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
                                                          (0, tA.zd)(),
                                                          (0, tE.openModalLazy)(async () => {
                                                              let { default: t } = await Promise.all([
                                                                  n.e("571331"),
                                                                  n.e("390052"),
                                                              ]).then(n.bind(n, 653682));
                                                              return (n) => (0, i.jsx)(t, { ...n, guildId: e });
                                                          }));
                                                  },
                                              }),
                                        clickHandler: () => {
                                            (nF(nL._G.CREATE_POST), d.isGameInvitesChannel())
                                                ? (0, H.d)(d)
                                                : n_._.dispatch(eX.jej.FOCUS_COMPOSER_TITLE);
                                        },
                                        isDone: u,
                                    }),
                                ),
                            j
                        );
                    }, [d, c, a, u, x])),
                p = v.isAllDone(),
                A =
                    f ||
                    j ||
                    ((t = d.id),
                    (r = nR.default.extractTimestamp(t)),
                    !en()().isBefore(en()(r).add(en().duration(15, "days"))));
            return (
                (o = s.useRef(0)),
                s.useEffect(
                    () => (
                        h || !p || A
                            ? clearTimeout(o.current)
                            : (o.current = setTimeout(() => {
                                  m();
                              }, 60 * nM.A.Millis.SECOND)),
                        () => clearTimeout(o.current)
                    ),
                    [p, A, m, h],
                ),
                { onboardingSteps: v, isHidden: j, isDismissed: f, isAllDone: p }
            );
        })({ guild: h, channel: o, hasAnyThread: l, handleHide: N }),
        _ = !I && !y,
        M = (0, eE.ST)(),
        R = o.isMediaChannel();
    function w(e) {
        return M.getState().setOnboardingExpanded(e);
    }
    return ((0, D.Ay)(() => {
        k && _ && N();
    }),
    !(function (e) {
        let { isAllDone: t, isVisible: n, canManageChannel: l, guildId: i, channel: a } = e,
            r = (0, g.bG)([nI.A], () => (null != i ? nI.A.partitionVersion(i) : void 0)),
            o = s.useCallback(() => {
                n_._.dispatch(eX.jej.REMEASURE_TARGET);
            }, []);
        s.useEffect(() => {
            o();
        }, [o, t, n, l, r, a.id, a.permissionOverwrites]);
    })({ isAllDone: k, isVisible: _, canManageChannel: x, guildId: h?.id, channel: o }),
    s.useEffect(() => {
        y || p(!I);
    }, [y, p, I]),
    (0, D.Ay)(() => {
        (l && _) || w(!0);
    }),
    null == h)
        ? null
        : (0, X.Fo)(o)
          ? a || 0 !== m.size
              ? m.size > 0
                  ? null
                  : (0, i.jsx)(nm, { guild: h })
              : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(nm, { guild: h }), (0, i.jsx)(ny, {})] })
          : _ && x
            ? R
                ? l
                    ? null
                    : (0, i.jsx)(nt, { channel: o })
                : (0, i.jsx)(i.Fragment, {
                      children: f((e, t) =>
                          t
                              ? (0, i.jsx)(tC.animated.div, {
                                    style: e,
                                    className: nD.kL,
                                    children: (0, i.jsxs)("div", {
                                        className: nD.iE,
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: nD.U1,
                                                children: (0, i.jsxs)(v.F, {
                                                    component: (0, i.jsx)(j.D, {
                                                        variant: "heading-md/semibold",
                                                        children: eZ.intl.string(eZ.t.LhlgY9),
                                                    }),
                                                    children: [
                                                        (0, i.jsx)(j.D, {
                                                            variant: "heading-md/medium",
                                                            className: nD.wx,
                                                            children: eZ.intl.format(eZ.t["9L+8bz"], {
                                                                numCompleted: S.completedSteps.toString(),
                                                                numSteps: S.steps.length.toString(),
                                                            }),
                                                        }),
                                                        (0, i.jsxs)(b.E, {
                                                            variant: "text-xs/normal",
                                                            className: nD.l2,
                                                            children: [
                                                                (0, i.jsx)(tk.CircleInformationIcon, {
                                                                    size: "xxs",
                                                                    color: "currentColor",
                                                                    className: nD.Kk,
                                                                }),
                                                                eZ.intl.string(eZ.t.znhX2R),
                                                            ],
                                                        }),
                                                        (0, i.jsx)(nV, { expanded: u, onClick: () => w(!u) }),
                                                        (0, i.jsx)(nB, { handleHide: N }),
                                                    ],
                                                }),
                                            }),
                                            A((e, t) =>
                                                t
                                                    ? (0, i.jsx)(tC.animated.div, {
                                                          style: e,
                                                          className: nD.qI,
                                                          children: (0, i.jsx)("ol", {
                                                              className: nD.D4,
                                                              children: S.getSteps().map((e) =>
                                                                  (0, i.jsxs)(
                                                                      E.D,
                                                                      {
                                                                          tag: "li",
                                                                          "aria-label": e.name,
                                                                          onClick: () => C(e),
                                                                          className: r()(nD._h, { [nD.so]: e.isDone }),
                                                                          children: [
                                                                              e.shouldWarn
                                                                                  ? (0, i.jsx)(T.E, {
                                                                                        size: "custom",
                                                                                        width: 20,
                                                                                        height: 20,
                                                                                        color: tb.A.colors
                                                                                            .ICON_FEEDBACK_CRITICAL,
                                                                                        className: nD.FY,
                                                                                    })
                                                                                  : e.isDone
                                                                                    ? (0, i.jsx)(t_.fk, {
                                                                                          color: tb.A.colors
                                                                                              .STATUS_POSITIVE_BACKGROUND
                                                                                              .css,
                                                                                          icon: tM.CheckmarkLargeIcon,
                                                                                          style: nG,
                                                                                          className: nD.FY,
                                                                                      })
                                                                                    : (0, i.jsx)(t_.fk, {
                                                                                          disableColor: !0,
                                                                                          icon: (0, tR.k)(nk.A),
                                                                                          style: nO,
                                                                                          className: r()(nD.FY, nD.so),
                                                                                      }),
                                                                              (0, i.jsxs)("div", {
                                                                                  className: nD.PM,
                                                                                  children: [
                                                                                      (0, i.jsx)(b.E, {
                                                                                          variant: "text-md/medium",
                                                                                          color: e.isDone
                                                                                              ? "text-default"
                                                                                              : "text-strong",
                                                                                          className: nD.u,
                                                                                          children: e.name,
                                                                                      }),
                                                                                      (0, i.jsx)(b.E, {
                                                                                          variant: "text-sm/normal",
                                                                                          color: "text-default",
                                                                                          className: nD.XK,
                                                                                          children: e.description,
                                                                                      }),
                                                                                      e.children,
                                                                                  ],
                                                                              }),
                                                                              (0, i.jsx)(tw._, {
                                                                                  size: "custom",
                                                                                  color: "currentColor",
                                                                                  width: 12,
                                                                                  className: nD.FY,
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
    nY = n(46054),
    nQ = n(257701);
let nX = s.memo(function (e) {
    let { channel: t, onChange: l } = e,
        a = (0, eE.ST)(),
        { guidelinesOpen: o } = (0, eE.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, d.x),
        c = (0, ep.S4)(t),
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
    let [x, g] = s.useState(!o),
        f = (0, n$.z)({ opacity: +!!o, maxHeight: 500 * !!o, config: { duration: 300 }, onRest: () => g(!o) });
    return null != t.topic && t.topic.length > 0
        ? (0, i.jsx)(tC.animated.div, {
              style: f,
              className: x ? nQ.kK : void 0,
              children: (0, i.jsxs)("div", {
                  className: nQ.kL,
                  children: [
                      (0, i.jsxs)("div", {
                          className: nQ.N1,
                          children: [
                              (0, i.jsxs)(j.D, {
                                  variant: "heading-lg/semibold",
                                  className: nQ.$4,
                                  children: [
                                      (0, i.jsx)(nq.B, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                          height: 20,
                                      }),
                                      eZ.intl.string(eZ.t["4d4T4l"]),
                                      c &&
                                          (0, i.jsx)(E.D, {
                                              onClick: function () {
                                                  tP.Ay.open(t.id, void 0, eX.b7d.TOPIC);
                                              },
                                              tag: "span",
                                              className: nQ.vk,
                                              children: (0, i.jsx)(nK.PencilIcon, {
                                                  size: "xs",
                                                  color: "currentColor",
                                              }),
                                          }),
                                  ],
                              }),
                              (0, i.jsx)(E.D, {
                                  "aria-label": eZ.intl.string(eZ.t.cpT0Cq),
                                  className: nQ.vk,
                                  onClick: function () {
                                      a.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, i.jsx)(ty.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: nQ.iQ,
                          children: [
                              (0, i.jsx)(b.E, {
                                  selectable: !0,
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  style: { maxHeight: 220 },
                                  className: r()(nQ.I4, e2.PT),
                                  children: (0, i.jsx)("div", {
                                      ref: h,
                                      children: nY.A.parseForumPostGuidelines(t.topic, !0, {
                                          channelId: t.id,
                                          allowHeading: !0,
                                          allowList: !0,
                                      }),
                                  }),
                              }),
                              u &&
                                  (0, i.jsxs)("div", {
                                      className: nQ.jP,
                                      children: [
                                          (0, i.jsx)("div", { className: nQ.D7 }),
                                          (0, i.jsx)("div", {
                                              className: nQ.kx,
                                              children: (0, i.jsx)(E.D, {
                                                  className: nQ.DD,
                                                  onClick: function () {
                                                      (0, tE.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("146697"),
                                                              n.e("745457"),
                                                          ]).then(n.bind(n, 494664));
                                                          return (n) => (0, i.jsx)(e, { ...n, channel: t });
                                                      });
                                                  },
                                                  children: (0, i.jsxs)(b.E, {
                                                      variant: "text-sm/semibold",
                                                      color: "text-brand",
                                                      className: nQ.ur,
                                                      children: [
                                                          eZ.intl.string(eZ.t.Vu7odK),
                                                          (0, i.jsx)(tI._, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: nQ.yS,
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
    n8 = n(278416),
    n5 = n(465532),
    n7 = n(608299),
    n9 = n(355622),
    n6 = n(530134),
    le = n(845207),
    lt = n(625928),
    ln = n(960850),
    ll = n(702841),
    li = n(364522),
    ls = n(215497),
    la = n(914905),
    lr = n(935399),
    lo = n(750943),
    lc = n(844222),
    ld = n(780777),
    lu = n(518960),
    lm = n(160589);
let lh = { scale: 0.95, opacity: 0 },
    lx = { scale: 1, opacity: 1 },
    lg = { scale: 1, opacity: 1 },
    lf = { tension: 2400, friction: 52 },
    lj = `.${lm.EJ}`,
    lv = { behavior: "smooth", block: "nearest", inline: "nearest" };
function lp(e) {
    let { channelId: t, onClick: n, onClose: l, onMouseEnter: a, listItemProps: r } = e,
        o = s.useRef(null),
        c = (0, g.bG)([eU.A], () => eU.A.getChannel(t), [t]);
    return (
        ee()(null != c, "Forum Channel is null"),
        (0, i.jsxs)(E.D, {
            ...r,
            "aria-label": eZ.intl.string(eZ.t.nzoF5p),
            className: lm.EJ,
            onMouseEnter: a,
            onClick: function (e) {
                (0 === e.detail && o.current?.activateUploadDialogue(), (0, tA.ri)({ isMobile: !1 }), n?.());
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
                (0, i.jsx)(lo.X, { size: "custom", color: "currentColor", width: 28, height: 28, className: lm.T3 }),
            ],
        })
    );
}
function lA(e) {
    let { channelId: t, closePopout: n } = e,
        [l, a] = s.useState(!1),
        { reducedMotion: r } = s.useContext(lc.C),
        o = (0, n$.z)({ from: r.enabled ? lx : lh, to: lg, config: lf }, "animate-always"),
        c = (0, g.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        d = (0, g.bG)([tm.A], () => tm.A.getUploads(t, n9.oU.CREATE_FORUM_POST.drafts.type)),
        x = (0, m.Ay)({
            id: "forum-composer-attachments-popout",
            isEnabled: c,
            orientation: h.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (
        (0, lr.Ay)(() => {
            x.focusLastVisibleItem();
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
                    navigator: x,
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
                                                draftType: n9.oU.CREATE_FORUM_POST.drafts.type,
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
function lN(e) {
    let { channelId: t } = e,
        [n, l] = s.useState(!1),
        a = s.useRef(null),
        r = (0, g.bG)([tm.A], () => tm.A.getUploads(t, n9.oU.CREATE_FORUM_POST.drafts.type)),
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
                      (0, i.jsxs)(E.D, {
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
                              (0, i.jsx)(b.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-overlay-light",
                                  className: lm.qS,
                                  children: o,
                              }),
                          ],
                      })
                    : (0, i.jsx)(lp, { onMouseEnter: d, channelId: t }),
                n && (0, i.jsx)(lA, { channelId: t, closePopout: u }),
            ],
        })
    );
}
var lb = n(793654);
function lE(e) {
    let { parentChannel: t } = e,
        n = (0, ll.yK)([tm.A], () => {
            let e = tm.A.getUploads(t.id, n9.oU.CREATE_FORUM_POST.drafts.type);
            return e?.filter((e) => !0 !== e.isThumbnail);
        });
    return (0, i.jsxs)("div", {
        className: lb.kL,
        children: [
            (0, i.jsx)(b.E, {
                variant: "text-md/semibold",
                color: "text-muted",
                children: eZ.intl.string(eZ.t.omKGKu),
            }),
            (0, i.jsx)(b.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eZ.intl.string(eZ.t["zUjLl+"]),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(li.Ip, {
                    className: lb.mw,
                    orientation: "horizontal",
                    scrollbarGutter: !1,
                    fade: !0,
                    children: (0, i.jsxs)("div", {
                        className: lb.p8,
                        children: [
                            n.map((e) =>
                                (0, i.jsx)(
                                    la.A,
                                    {
                                        channelId: t.id,
                                        draftType: n9.oU.CREATE_FORUM_POST.drafts.type,
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
var lS = n(241326),
    ly = n(851023),
    lT = n(915089),
    lI = n(607470),
    lk = n(703007),
    l_ = n(635377),
    lM = n.n(l_);
let lR = "absolute",
    lw = new (lM())({ max: 100 });
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
                        if (1 === n) return [{ width: e, height: t, top: 0, left: 0, position: lR }];
                        if (2 === n) {
                            let n = Math.ceil((e - 4) / 2);
                            return [
                                { top: 0, left: 0, position: lR, width: n, height: t },
                                { top: 0, left: n + 4, position: lR, width: n, height: t },
                            ];
                        }
                        if (3 === n) {
                            let n = Math.ceil((e - 4) / 2),
                                l = Math.ceil((t - 4) / 2);
                            return [
                                { top: 0, left: 0, position: lR, width: n, height: t },
                                { top: 0, left: n + 4, position: lR, width: n, height: l },
                                { top: l + 4, left: n + 4, position: lR, width: n, height: l },
                            ];
                        }
                        {
                            let n = Math.ceil((e - 4) / 2),
                                l = Math.ceil((t - 4) / 2);
                            return [
                                { top: 0, left: 0, position: lR, width: n, height: l },
                                { top: l + 4, left: 0, position: lR, width: n, height: l },
                                { top: 0, left: n + 4, position: lR, width: n, height: l },
                                { top: l + 4, left: n + 4, position: lR, width: n, height: l },
                            ];
                        }
                    })(n, l, t);
                    return (lw.set(i, e), e);
                }
            })({ numAttachments: t, containerWidth: n, containerHeight: l }),
        [t, n, l],
    );
}
function lL(e) {
    return e.map((t, n) => ({
        minWidth: 2 * e[n].width,
        minHeight: 2 * e[n].height,
        maxWidth: 2 * e[n].width,
        maxHeight: 2 * e[n].height,
    }));
}
(n(323874), n(14289), n(35956));
var lD = n(304162),
    lO = n(435558),
    lG = n(724442),
    lF = n(998218),
    lz = n(36491),
    lU = n(131360);
let lH = [{ name: "Media Post Thumbnail", extensions: ["jpg", "jpeg", "png", "gif", "webp"] }],
    lB = (0, lT.Ld)();
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
                            ? (0, i.jsx)(lI.A, { src: e.src, className: lU.xn, "aria-hidden": !0 })
                            : (0, i.jsx)("img", { src: e.src, className: lU.xn, "aria-hidden": !0, alt: e?.alt ?? "" }),
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
                            let t = tm.A.getUploads(e.id, n9.oU.CREATE_FORUM_POST.drafts.type),
                                n = t.find((e) => e.isThumbnail);
                            return null != n ? [n] : t.filter((e) => e.isVideo || e.isImage);
                        }),
                        i = s.useMemo(() => l.some((e) => e.isThumbnail), [l]);
                    return (
                        s.useEffect(() => {
                            let e = [];
                            return (
                                n(
                                    l.slice(0, lD.A8).flatMap((t) => {
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
                i = Math.max(lD.A8 - (n?.length ?? 0), 0),
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
                                    r(lO.uniq(i).slice(0, lD.A8));
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
                                        let t = await lz.L4(s);
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
                            let t = (0, lD.m3)(e);
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
                null != c && n7.A.remove(t.id, c.id, n9.oU.CREATE_FORUM_POST.drafts.type);
                let { files: n } = e.currentTarget;
                (null != n &&
                    (0, lu.R)(n, t, n9.oU.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0,
                        origin: "file_picker",
                    }),
                    (e.currentTarget.value = ""));
            },
            [t, c],
        );
    function x(e) {
        (e.stopPropagation(),
            c?.upload != null &&
                (0, tE.openModalLazy)(async () => {
                    let e = c.upload;
                    ee()(null != e, "upload should not be null");
                    let { default: l } = await n.e("570698").then(n.bind(n, 427281));
                    return (n) =>
                        (0, i.jsx)(l, {
                            ...n,
                            upload: e,
                            onSubmit: (n) => {
                                let { name: l, description: i, spoiler: s } = n;
                                n7.A.update(t.id, e.id, n9.oU.CREATE_FORUM_POST.drafts.type, {
                                    filename: l,
                                    description: i,
                                    spoiler: s,
                                });
                            },
                            disableSpoiler: !0,
                        });
                }));
    }
    let g = (0, i.jsx)(lk.A, {
        color: f.XD.CUSTOM,
        className: lU.zL,
        innerClassName: lU.Nr,
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
                          className: r()(lU.On, { [lU.bP]: o?.length > 2 }),
                          children: [
                              (0, i.jsx)(b.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: eZ.intl.string(eZ.t.MxJI3f),
                              }),
                              null == c &&
                                  (0, i.jsx)(nK.PencilIcon, { size: "xs", color: "currentColor", className: lU.IZ }),
                          ],
                      }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(lo.X, {
                          size: "custom",
                          width: 39,
                          height: 39,
                          color: "currentColor",
                          className: lU.T3,
                      }),
                      (0, i.jsx)(b.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: eZ.intl.string(eZ.t.Cbiofa),
                      }),
                  ],
              }),
    });
    return (0, i.jsx)("div", {
        className: lU.iT,
        style: m,
        children:
            null != c
                ? (0, i.jsx)(ls.A, {
                      actions: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(ly.A, {
                                  className: lU.XI,
                                  tooltip: eZ.intl.string(eZ.t.Y8ujqr),
                                  onClick: x,
                                  children: (0, i.jsx)(nK.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                              (0, i.jsx)(ly.A, {
                                  className: lU.XI,
                                  tooltip: eZ.intl.string(eZ.t.vN7REz),
                                  onClick: () => n7.A.remove(t.id, c.id, n9.oU.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, i.jsx)(lS.TrashIcon, { size: "md", color: "currentColor" }),
                              }),
                          ],
                      }),
                      draftType: n9.oU.CREATE_FORUM_POST.drafts.type,
                      id: c.id,
                      channelId: t.id,
                      handleEditModal: x,
                      keyboardModeEnabled: a,
                      size: ls.L.SMALL,
                      className: lU.Xc,
                      children: g,
                  })
                : g,
    });
}
var l$ = n(451909),
    lq = n(470964),
    lK = n(91624),
    lY = n(931664),
    lQ = n(631576),
    lX = n(474078),
    lJ = n(55294),
    lZ = n(383233),
    l0 = n(101392),
    l1 = n(806150),
    l2 = n(753738);
function l4(e, t) {
    return { type: e, message: t ?? null };
}
function l3(e, t) {
    return l4(1, (0, l2.cw)(e, t?.id));
}
function l8(e, t) {
    return null == e ||
        (0 === e.type && null != t.content && t.content.trim().length > 0) ||
        (2 === e.type && null != t.tags && t.tags.length > 0)
        ? null
        : (e.message ?? null);
}
var l5 = n(774812),
    l7 = n(691060),
    l9 = n(91871),
    l6 = n.n(l9),
    ie = n(190199),
    it = n(914427),
    il = n(236285),
    ii = n(287683);
function is(e) {
    let { tag: t } = e,
        { id: n, name: l, emojiId: s, emojiName: a } = t,
        r = (0, g.bG)([il.Ay], () => (null != s ? il.Ay.getUsableCustomEmojiById(s) : null)),
        o = null != s || null != a;
    return (0, i.jsx)(
        ie.x4,
        {
            value: n,
            children: (0, i.jsx)(ie.x4.Label, {
                children: (0, i.jsxs)("div", {
                    className: ii.nM,
                    children: [
                        o
                            ? (0, i.jsx)(nx.A, {
                                  className: ii.__invalid_emoji,
                                  emojiId: s,
                                  emojiName: a,
                                  animated: !!r?.animated,
                              })
                            : (0, i.jsx)(n8.TagIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: ii.__invalid_emoji,
                              }),
                        (0, i.jsx)(b.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                    ],
                }),
            }),
        },
        n,
    );
}
function ia(e) {
    let { parentChannel: t, appliedTags: n, maxTagsApplied: l, onSelectTag: s, onClose: a } = e,
        r = (0, l7.OT)(t);
    return (0, i.jsx)(it.p, {
        value: n,
        onChange: function (e) {
            (!l || n.has(e)) && (s(e), a());
        },
        placeholder: eZ.intl.string(eZ.t.MbhGm7),
        "aria-label": eZ.intl.string(eZ.t.MbhGm7),
        children: (e) =>
            r.filter((t) => l6()(e.toLowerCase(), t.name.toLowerCase())).map((e) => (0, i.jsx)(is, { tag: e }, e.id)),
    });
}
var ir = n(376310),
    io = n(230397),
    ic = n(770178),
    id = n(765548);
let iu = function () {
    let [e, t] = s.useState(400),
        n = (0, id.A)((e) => {
            t(e.target.clientWidth);
        });
    return { containerRef: (0, ic.w)(n), containerWidth: e };
};
var im = n(746080),
    ih = n(803181);
let ix = n9.oU.CREATE_FORUM_POST;
function ig(e) {
    var t, n;
    let l,
        a,
        { parentChannel: o, isSearchLoading: c, numResults: u, onChange: m, canCreatePost: h, inputRef: x } = e,
        f = !(0, J.V)(o) && h,
        {
            textAreaState: j,
            formOpen: v,
            previewing: p,
        } = (0, eE.kU)((e) => {
            let { textAreaState: t, formOpen: n, previewing: l } = e;
            return { textAreaState: t, formOpen: n, previewing: l };
        }, d.x),
        [A, C] = s.useState(null),
        N = s.useContext(th.EH),
        b = s.useCallback(() => {
            N.bumpDispatchPriority();
        }, [N]),
        E = (0, g.bG)([eB.A], () => eB.A.can(eX.xBc.ATTACH_FILES, o)),
        S = (0, g.yK)([tm.A], () => tm.A.getUploads(o.id, tc.C.FirstThreadMessage)),
        y = v && E && f,
        T = o?.isMediaChannel() === !0,
        I =
            ((t = o),
            (n = x),
            (l = (0, eE.ST)()),
            (a = (0, ep.Hv)(t)),
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
        k = (function (e) {
            let { formOpen: t } = (0, eE.kU)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, d.x),
                n = (0, eE.ST)(),
                l = (0, lJ.NV)({ parentChannel: e }),
                i = iE(e),
                { rateLimitPerUser: a } = e,
                r = (0, g.bG)([l0.A], () => l0.A.getSlowmodeCooldownGuess(e.id, l0.R.CreateThread)),
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
                            (l = lY.A.getStickerPreview(e.id, ix.drafts.type)?.map((e) => e.id)),
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
                            setFormOpen: x,
                            setPreviewing: g,
                            setFormOpenFromUserAction: f,
                            setGuidelinesOpen: j,
                        } = n.getState(),
                        v = l5.A.hasSeen(e.id);
                    if (!h)
                        return (
                            e.isGameInvitesChannel() ||
                                ((0, tA.jr)({ guildId: e.guild_id, channelId: e.id }),
                                v || n.getState().setGuidelinesOpen(!0),
                                f()),
                            { shouldClear: !1, shouldRefocus: !1 }
                        );
                    let { content: p, stickers: A, uploads: C, hasNameError: N, hasMessageError: b } = u(t, s, a);
                    if (
                        (r(N ? l4(0, eZ.intl.string(eZ.t["71wuR0"])) : null),
                        o(b ? l4(0, eZ.intl.string(eZ.t["w/BT3G"])) : null),
                        N || b || i || c)
                    )
                        return { shouldClear: !1, shouldRefocus: !0 };
                    try {
                        d(!0);
                        let { valid: t } = await (0, l1.i)({
                            content: p,
                            hasStickers: null != A && A.length > 0,
                            hasAttachments: null != C && C.length > 0,
                            type: ix,
                            channel: e,
                        });
                        if (!t) return { shouldClear: !1, shouldRefocus: !0 };
                        let n = await l(p, A, C);
                        return (
                            (0, to.GS)(n),
                            tg.A.resort(e.id),
                            (0, lQ.x5)(e.id, ix.drafts.type),
                            m(),
                            x(!1),
                            g(!1),
                            l5.A.markAsSeen(e.id),
                            j(!1),
                            { shouldClear: !0, shouldRefocus: !1 }
                        );
                    } catch (t) {
                        return (
                            t.body?.code === eX.t02.AUTOMOD_TITLE_BLOCKED
                                ? r(l3(t.body, e))
                                : t.body?.code === eX.t02.AUTOMOD_MESSAGE_BLOCKED
                                  ? o(l3(t.body, e))
                                  : t.body?.code === eX.t02.INVALID_FORM_BODY &&
                                    t.body?.errors?.name != null &&
                                    r(l4(3, eZ.intl.string(eZ.t["71wuR0"]))),
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
        s.useLayoutEffect(m, [v, j, S, m]),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("div", {
                "aria-label": f ? eZ.intl.string(eZ.t.dq7mAa) : eZ.intl.string(eZ.t["5h0QOP"]),
                className: r()(ih.kL, { [ih.yZ]: !v }),
                onClick: !v && f ? I : void 0,
                children: (0, i.jsxs)("form", {
                    onMouseDown: b,
                    onFocus: b,
                    onSubmit: (e) => {
                        (e.preventDefault(), !f || o.isGameInvitesChannel() || k());
                    },
                    children: [
                        (0, i.jsxs)("div", {
                            className: ih.KJ,
                            children: [
                                (0, i.jsx)(ij, { parentChannel: o, isSearchLoading: c, inputRef: x }),
                                (0, i.jsxs)("div", {
                                    className: p ? ih.vJ : ih.Zd,
                                    children: [
                                        (0, i.jsx)(iv, {
                                            editorRef: A,
                                            parentChannel: o,
                                            isSearchLoading: c,
                                            numResults: u,
                                            inputRef: x,
                                            canCreatePost: f,
                                        }),
                                        v &&
                                            (0, i.jsx)(iC, {
                                                editorRef: A,
                                                setEditorRef: C,
                                                parentChannel: o,
                                                submit: k,
                                                disabled: !f,
                                            }),
                                        p && (0, i.jsx)(iN, {}),
                                    ],
                                }),
                                y && (T ? (0, i.jsx)(lW, { parentChannel: o }) : (0, i.jsx)(lN, { channelId: o.id })),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: ih.Zd,
                            children: [
                                y && T && (0, i.jsx)(lE, { parentChannel: o }),
                                v && (0, i.jsx)(iy, { className: ih.CN, parentChannel: o, canCreatePost: f }),
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
}
let ij = s.memo(function (e) {
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
            h = (0, ep.Hv)(t),
            x = s.useCallback(() => {
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
                    (0, tA.py)({ guildId: t.guild_id, channelId: t.id }));
            }, [m, t.id, t.guild_id, l]),
            g = s.useMemo(
                () =>
                    !a &&
                    (r.trim().length > 0 ||
                        (o.textValue.trim().length > 0 && o.textValue.trim() !== h) ||
                        tm.A.getUploads(t.id, tc.C.FirstThreadMessage).length > 0) &&
                    c
                        ? (0, i.jsx)(nK.PencilIcon, { size: "md", color: "currentColor", className: ih.rD })
                        : (0, i.jsx)(n0.B, { onClear: x, hasContent: a, isLoading: n || u, size: "md" }),
                [n, a, c, r, o.textValue, x, t.id, h, u],
            );
        return (0, i.jsx)("div", { className: ih.VB, children: g });
    }),
    iv = s.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: l, editorRef: a, isSearchLoading: r, numResults: o } = e,
            {
                formOpen: c,
                nameError: u,
                name: m,
                textAreaState: h,
                previewing: x,
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
            p = l5.A.hasSeen(t.id),
            A = (0, ep.Hv)(t),
            C = (0, g.bG)([eW.default], () => eW.default.getCurrentUser());
        (ee()(null != C, "current user cannot be null"),
            (0, th.Vo)({
                event: eX.jej.FOCUS_COMPOSER_TITLE,
                handler: function () {
                    let e = n.current;
                    (e?.focus(),
                        f.getState().setTitleFocused(!0),
                        t.isGameInvitesChannel() || (f.getState().setFormOpen(!0), f.getState().setHasClickedForm(!0)));
                },
            }));
        let N = s.useCallback(
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
            b = l8(u, { content: m });
        return (0, i.jsxs)("div", {
            className: ih.gn,
            onPaste: N,
            children: [
                c && x
                    ? (0, i.jsx)(j.D, { variant: "heading-md/semibold", className: ih.DD, children: m })
                    : (0, i.jsxs)(nn.B, {
                          gap: 4,
                          children: [
                              (0, i.jsx)(nZ.d, {
                                  value: m,
                                  placeholder:
                                      !l || t.isGameInvitesChannel()
                                          ? eZ.intl.string(eZ.t["5h0QOP"])
                                          : c || (h.textValue.length > 0 && h.textValue.trim() !== A)
                                            ? eZ.intl.string(eZ.t.lU4dDS)
                                            : eZ.intl.string(eZ.t.CjmivA),
                                  rows: 1,
                                  maxLength: eX.Ign,
                                  onChange: function (e) {
                                      let n = e.target.value,
                                          l = (0, lX.A)(n, !1);
                                      f.getState().setName(l);
                                      let i = 0 === l.trim().length,
                                          s = 0 === h.textValue.trim().length,
                                          a = h.textValue.trim() === A;
                                      (i && (s || a) && f.getState().setHasClickedForm(!1),
                                          c || tg.A.updateForumSearchQuery(t.id, l));
                                  },
                                  onFocus: function () {
                                      (f.getState().setTitleFocused(!0), f.getState().setBodyFocused(!1));
                                  },
                                  onBlur: function () {
                                      f.getState().setTitleFocused(!1);
                                      let e = (0, lX.A)(m, !0);
                                      e !== m && (f.getState().setName(e), c || tg.A.updateForumSearchQuery(t.id, e));
                                  },
                                  onKeyDown: function (e) {
                                      "Enter" === e.key &&
                                          (e.preventDefault(),
                                          e.stopPropagation(),
                                          c && m.length > 0
                                              ? a?.focus()
                                              : l && e.shiftKey && !t.isGameInvitesChannel()
                                                ? ((0, tA.sB)({ guildId: t.guild_id, channelId: t.id }),
                                                  v && !p && f.getState().setGuidelinesOpen(!0),
                                                  f.getState().setFormOpenFromUserAction(),
                                                  m.trim().length > 0 && (f.getState().setBodyFocused(!0), a?.focus()))
                                                : c ||
                                                  !(m.length > 0) ||
                                                  null != o ||
                                                  r ||
                                                  tg.A.updateForumSearchQuery(t.id, m));
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
                                  className: ih.DD,
                                  ref: n,
                              }),
                              null != b ? (0, i.jsx)(n1.U, { error: b }) : null,
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
                              (0, i.jsx)(ip, { parentChannel: t }),
                              t.isGameInvitesChannel() ? null : (0, i.jsx)(iT, { parentChannel: t, canCreatePost: l }),
                          ],
                      }),
            ],
        });
    });
function ip(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, eE.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, d.x),
        l = (0, eE.ST)();
    return null != t.topic && 0 !== t.topic.length
        ? (0, i.jsx)(R.m, {
              text: eZ.intl.string(eZ.t["4d4T4l"]),
              children: (0, i.jsx)(n2.K, {
                  size: "sm",
                  variant: "secondary",
                  onClick: function () {
                      l.getState().setGuidelinesOpen(!n);
                  },
                  icon: nq.B,
                  "aria-label": eZ.intl.string(eZ.t["4d4T4l"]),
              }),
          })
        : null;
}
let iA = s.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            l = new lZ.Ay({ channel_id: t.id, content: n }),
            { content: s } = (0, lq.A)(l, {
                hideSimpleEmbedContent: !0,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0,
            }),
            a = (0, lK.Ay)({ message: l, channel: t, compact: !1 }, s, !1);
        return (0, i.jsx)("div", { className: r()(ih.SL, ih.EV), children: a });
    }),
    iC = s.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: l = !1, editorRef: a, setEditorRef: o } = e,
            c = (0, g.bG)([eW.default], () => eW.default.getCurrentUser());
        ee()(null != c, "current user cannot be null");
        let {
                messageError: u,
                previewing: m,
                textAreaState: h,
                bodyFocused: x,
                formOpen: f,
            } = (0, eE.kU)((e) => {
                let { messageError: t, textAreaState: n, previewing: l, bodyFocused: i, formOpen: s } = e;
                return { messageError: t, textAreaState: n, previewing: l, bodyFocused: i, formOpen: s };
            }, d.x),
            j = (0, eE.ST)();
        s.useEffect(() => () => (0, tA._4)({ guildId: t.guild_id, channelId: t.id }), [t.guild_id, t.id]);
        let v = s.useCallback(() => {
                j.getState().setBodyFocused(!0);
            }, [j]),
            p = s.useCallback(() => {
                j.getState().setBodyFocused(!1);
            }, [j]),
            A = s.useCallback(
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
        ((0, th.Vo)({ event: eX.jej.TEXTAREA_FOCUS, handler: v }),
            (0, th.Vo)({ event: eX.jej.TEXTAREA_BLUR, handler: p }));
        let N = l8(u, { content: h.textValue });
        return (0, i.jsx)("div", {
            className: ih.IP,
            children: (0, i.jsxs)("div", {
                className: ih.hQ,
                children: [
                    m
                        ? (0, i.jsx)(iA, { parentChannel: t, textValue: h.textValue })
                        : (0, i.jsx)("div", {
                              onClick: v,
                              children: (0, i.jsx)(le.Ay, {
                                  type: ix,
                                  setEditorRef: o,
                                  channel: t,
                                  placeholder: eZ.intl.string(eZ.t["8IPnv1"]),
                                  textValue: h.textValue,
                                  richValue: h.richValue,
                                  focused: x,
                                  className: ih.gM,
                                  innerClassName: r()(ih.SL, { [ih.cr]: null != N }),
                                  onChange: A,
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
                    (0, i.jsx)(n1.U, { error: N }),
                ],
            }),
        });
    });
function iN() {
    return (0, i.jsx)("div", {
        className: ih.fv,
        children: (0, i.jsx)(b.E, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: eZ.intl.string(eZ.t["WE/cYo"]),
        }),
    });
}
function ib(e) {
    let { textAreaState: t } = (0, eE.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        n = (0, g.yK)([tm.A], () => tm.A.getUploads(e.id, tc.C.FirstThreadMessage)),
        l = (0, g.bG)([lY.A], () => lY.A.getStickerPreview(e.id, ix.drafts.type));
    return s.useMemo(
        () => t.textValue.trim().length > 0 || n.length > 0 || (null != l && l.length > 0),
        [t.textValue, n, l],
    );
}
function iE(e) {
    let t = ib(e),
        { appliedTags: n, name: l } = (0, eE.kU)((e) => {
            let { appliedTags: t, name: n } = e;
            return { appliedTags: t, name: n };
        }, d.x);
    return s.useMemo(() => e.hasFlag(im.lx.REQUIRE_TAG) && 0 === n.size && l.length > 0 && t, [n, l, e, t]);
}
function iS() {
    let { previewing: e } = (0, eE.kU)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, d.x),
        t = (0, eE.ST)(),
        n = s.useCallback(() => {
            (t.getState().setPreviewing(!e), (0, tA.Q_)());
        }, [e, t]),
        l = e ? eZ.intl.string(eZ.t.ojM1xJ) : eZ.intl.string(eZ.t.SKNnqq);
    return (0, i.jsx)(R.m, {
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
let iy = s.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: l } = e,
        { textAreaState: a, name: r } = (0, eE.kU)((e) => {
            let { textAreaState: t, name: n } = e;
            return { textAreaState: t, name: n };
        }, d.x),
        { rateLimitPerUser: o } = t,
        c = o > 0,
        u = (0, g.bG)([l0.A], () => l0.A.getSlowmodeCooldownGuess(t.id, l0.R.CreateThread)),
        m = (0, ln._i)(t),
        h = iE(t),
        x = (0, eE.ST)(),
        f = s.useCallback(() => {
            x.getState().setBodyFocused(!1);
        }, [x]),
        j = s.useMemo(() => "" !== r.trim() && "" !== a.textValue.trim(), [r, a.textValue]);
    return (
        s.useEffect(() => {
            j || x.getState().setPreviewing(!1);
        }, [j, x]),
        (0, i.jsxs)("div", {
            className: l,
            children: [
                (0, i.jsx)(ik, { parentChannel: t }),
                (0, i.jsx)("div", { className: ih.XJ }),
                (0, i.jsxs)("div", {
                    className: ih.gO,
                    children: [
                        (0, i.jsxs)("div", {
                            className: ih.ne,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: ih.Kk,
                                    children: [
                                        (0, i.jsx)(lt.A, { type: ix, textValue: a.textValue, className: ih.Dq }),
                                        c &&
                                            (0, i.jsx)(io.A, {
                                                rateLimitPerUser: o,
                                                slowmodeCooldownGuess: u,
                                                isBypassSlowmode: m,
                                                leadingIcon: !0,
                                            }),
                                    ],
                                }),
                                (0, i.jsx)(ip, { parentChannel: t }),
                                j && (0, i.jsx)(iS, {}),
                                (0, i.jsx)(iT, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: c && !m && u > 0,
                                }),
                            ],
                        }),
                        (0, i.jsx)(n6.A, { type: ix, className: ih.n1, onClick: f, channel: t }, "expression"),
                    ],
                }),
                h &&
                    (0, i.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-feedback-critical",
                        className: ih.ku,
                        children: eZ.intl.string(eZ.t.xPfNQi),
                    }),
            ],
        })
    );
});
function iT(e) {
    let { parentChannel: t, canCreatePost: n, disabled: l, disableIfInvalid: s = !1 } = e,
        a = (0, J.V)(t),
        {
            submitting: r,
            name: o,
            formOpen: c,
        } = (0, eE.kU)((e) => {
            let { submitting: t, name: n, formOpen: l } = e;
            return { submitting: t, name: n, formOpen: l };
        }, d.x),
        u = ib(t),
        m = !iE(t) && u && o.trim().length > 0;
    return __OVERLAY__ || a
        ? null
        : (0, i.jsx)(S.$, {
              variant: "primary",
              type: "submit",
              size: "sm",
              loading: r,
              disabled: (s && !m) || l || !n,
              icon: ec.ChatIcon,
              text: c ? eZ.intl.string(eZ.t.pIuQI6) : eZ.intl.string(eZ.t.TyAuoT),
          });
}
function iI() {
    return Promise.resolve();
}
function ik(e) {
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
        { containerRef: x, containerWidth: g } = iu(),
        f = s.useRef(null),
        j = s.useRef(null),
        [v, p] = s.useState(!0),
        A = (0, l7.OT)(t),
        [C, N] = s.useState(0);
    return (s.useLayoutEffect(() => {
        let e = f.current,
            t = e?.children?.[0],
            n = null == e || null == t || t.clientHeight > e.clientHeight;
        if ((n !== v && p(n), n && null != x.current && null != t && null != t.children)) {
            let { left: e, top: n } = x.current.getBoundingClientRect(),
                l = 0;
            for (let i of t.children) {
                let { right: t, top: s, height: a } = i.getBoundingClientRect();
                if (s - n > a) break;
                t - e > l && (l = t - e);
            }
            N(l);
        }
    }, [A, v, x, g]),
    0 === A.length)
        ? null
        : (0, i.jsxs)("div", {
              className: ih.Pc,
              ref: x,
              children: [
                  (0, i.jsx)(n8.TagIcon, { size: "xs", color: "currentColor", className: ih.HZ }),
                  (0, i.jsx)("div", {
                      className: ih.kU,
                      ref: f,
                      children: (0, i.jsx)(u.hD, {
                          navigator: c,
                          children: (0, i.jsx)(u.PR, {
                              children: (e) => {
                                  let { ref: t, ...s } = e;
                                  return (0, i.jsx)("div", {
                                      className: ih.j5,
                                      ref: t,
                                      ...s,
                                      children: A.map((e) =>
                                          (0, i.jsx)(
                                              ir.Ay,
                                              {
                                                  ariaLabel: eZ.intl.formatToPlainString(eZ.t.FSZVIR, {
                                                      tagName: e.name,
                                                  }),
                                                  tag: e,
                                                  onClick: o && !n.has(e.id) ? void 0 : () => l(e.id),
                                                  disabled: !n.has(e.id) && n.size >= 5,
                                                  selected: n.has(e.id),
                                                  size: ir.Ay.Sizes.SMALL,
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
                      (0, i.jsx)(k.Y, {
                          targetElementRef: j,
                          onRequestOpen: () => a(!0),
                          onRequestClose: () => a(!1),
                          renderPopout: (e) => {
                              let { closePopout: s } = e;
                              return (0, i.jsx)(ia, {
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
                                  className: ih.Wk,
                                  style: { left: C },
                                  children: (0, i.jsx)(S.$, {
                                      ...e,
                                      size: "sm",
                                      variant: "secondary",
                                      icon: M.a,
                                      iconPosition: "end",
                                      text: eZ.intl.string(eZ.t.w6T0Yc),
                                  }),
                              }),
                      }),
                  (0, i.jsx)("div", {
                      className: r()(ih.Wk, ih.Dz),
                      children: (0, i.jsx)(S.$, {
                          size: "sm",
                          variant: "secondary",
                          icon: M.a,
                          iconPosition: "end",
                          text: eZ.intl.string(eZ.t.w6T0Yc),
                      }),
                  }),
              ],
          });
}
var i_ = n(602137),
    iM = n(782134),
    iR = n(391242),
    iw = n(191023),
    iP = n(234914),
    iL = n(930125),
    iD = n(282108),
    iO = n(475290);
function iG(e) {
    let { channel: t, facepileRef: n, firstMessage: l, leftAccessory: s } = e,
        a = (0, ef.m)(t.id),
        r = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: iO.GD,
        children: [
            (0, i.jsxs)("div", {
                className: iO.QW,
                children: [
                    (0, i.jsx)("div", {
                        className: iO.mz,
                        children: (0, i.jsx)(ns.$k, { channel: t, iconSize: 16, showReadState: !0 }),
                    }),
                    s,
                    a.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("span", { className: iO.xE, children: "\u2022" }),
                                  (0, i.jsxs)("div", {
                                      className: iO.IW,
                                      children: [
                                          (0, i.jsx)(ns.gL, { channel: t, userIds: a, facepileRef: n }),
                                          (0, i.jsx)("div", {
                                              className: iO.r$,
                                              children: (0, i.jsx)(eo.n, { themed: !0, dotRadius: 2 }),
                                          }),
                                          (0, i.jsx)(eu.Ay, {
                                              channel: t,
                                              className: iO.mD,
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
                className: iO.QW,
                children: [
                    r || null == l ? null : (0, i.jsx)(ns.NA, { firstMessage: l, channel: t }),
                    null == l ? null : (0, i.jsx)(ns.cn, { firstMessage: l, channel: t }),
                ],
            }),
        ],
    });
}
var iF = n(994500),
    iz =
        (((l = {})[(l.THREE_BY_TWO = 2 / 3)] = "THREE_BY_TWO"),
        (l[(l.SIXTEEN_BY_NINE = 9 / 16)] = "SIXTEEN_BY_NINE"),
        l);
let iU = { columns: 1, columnWidth: 450 };
function iH(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iz.THREE_BY_TWO,
        n = e - 2,
        l = Math.ceil(n * t);
    return [n, l];
}
function iB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iz.THREE_BY_TWO;
    return 60 + iH(e - 24, t)[1] + 24 + 36;
}
function iV(e) {
    let { message: t, channel: n, containerWidth: l, hideTags: s = !1 } = e,
        { isBlocked: a, isIgnored: r } = (0, g.cf)([iF.A], () => ({
            isBlocked: null != t && iF.A.isBlockedForMessage(t),
            isIgnored: null != t && iF.A.isIgnoredForMessage(t),
        }));
    return a
        ? (0, i.jsx)(iW, { message: eZ.intl.string(eZ.t.Lkp2fB), containerWidth: l, channel: n, hideTags: s })
        : r
          ? (0, i.jsx)(iW, { message: eZ.intl.string(eZ.t.yWK7ZM), containerWidth: l, channel: n, hideTags: s })
          : null;
}
function iW(e) {
    let { message: t, containerWidth: n, channel: l, hideTags: a = !1 } = e,
        [o, c] = iH(n - 24),
        { shouldRenderTagsRow: d } = (0, eS.BA)({ channel: l, isNew: !1 }),
        u = s.useMemo(() => ({ width: o, height: c }), [o, c]);
    return (0, i.jsxs)("div", {
        className: iO.Cv,
        style: u,
        children: [
            (0, i.jsx)("div", {
                className: iO.Qs,
                children: (0, i.jsx)(b.E, {
                    className: iO.Wv,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: t,
                }),
            }),
            (0, i.jsx)("div", {
                className: r()(iO.kh, { [iO.ZH]: !d }),
                children: d && !a ? (0, i.jsx)(eS.Ay, { channel: l, tagsClassName: iO.uU }) : null,
            }),
        ],
    });
}
var i$ = n(461771),
    iq = n(602034);
let iK = "data-grid-item-id",
    iY = "data-grid-section",
    iQ = "data-grid-prev-section-boundary",
    iX = new Set([h.D$.UP, h.D$.DOWN, h.D$.LEFT, h.D$.RIGHT]);
function iJ(e) {
    let { section: t, column: n, row: l } = e,
        i = `[${iY}="${t}"]`,
        s = `[aria-colindex="${n}"]`,
        a = `[aria-rowindex="${l}"]`;
    return `${i}${s}${a}`;
}
let iZ = { id: "NO_LIST", onKeyDown() {}, ref: s.createRef() },
    i0 = s.createContext({ id: "NO_LIST", setFocus() {} }),
    i1 = s.createContext(iZ);
function i2(e) {
    let { id: t, section: n, row: l, column: i, boundaries: a } = e,
        [r, o] = s.useState(0 === l && 0 === i ? 0 : -1),
        { id: c, setFocus: d } = s.useContext(i0),
        u = s.useCallback(() => d(t), [t, d]);
    return (
        s.useLayoutEffect(
            () =>
                (0, i$.e)(c, (e) => {
                    o(e === t ? 0 : -1);
                }),
            [t, c],
        ),
        {
            [iK]: (0, iq.t$)(c, t),
            [iY]: n,
            [iQ]: a[n],
            role: "gridcell",
            "aria-rowindex": l,
            "aria-colindex": i,
            tabIndex: r,
            onFocus: u,
        }
    );
}
function i4(e) {
    let { children: t, navigator: n } = e,
        {
            id: l,
            setFocus: a,
            containerProps: { onKeyDown: r, ref: o },
        } = n,
        c = s.useMemo(() => ({ id: l, setFocus: a }), [l, a]),
        d = s.useMemo(() => ({ onKeyDown: r, ref: o, id: l }), [r, o, l]);
    return (0, i.jsx)(i1.Provider, { value: d, children: (0, i.jsx)(i0.Provider, { value: c, children: t }) });
}
var i3 = n(438729),
    i8 = n(659051),
    i5 = n(419477),
    i7 = n(453003),
    i9 = n(627363),
    i6 = n(140651),
    se = n(290863),
    st = n(326191);
function sn(e) {
    let { channel: t, className: n, firstMessage: l } = e,
        s = l?.application?.id,
        { data: a } = (0, i9.YY)(s),
        o = (0, g.bG)(
            [se.A],
            () => {
                let e = l?.author.id;
                return null == e || null == s ? null : se.A.getApplicationActivity(e, s);
            },
            [l, s],
        ),
        c = (0, i5.em)({ presenceActivity: o, channel: t, activityActionType: void 0 }),
        { primaryColor: d, secondaryColor: u } = (0, i6.A)(a?.getIconURL(128));
    if (null == l || null == l.activity) return null;
    let m = (0, i8.A)(o, l, a?.id),
        h = `linear-gradient(45deg, ${d}, ${u})`,
        x = null != o && m ? (o.details ?? o.name) : a?.name;
    return (0, i.jsxs)("div", {
        className: r()(n, st.Nr),
        style: { background: h },
        children: [
            (0, i.jsx)(b.E, {
                variant: "text-sm/semibold",
                color: "text-overlay-light",
                className: st.DD,
                children: x,
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
                    : (0, i.jsx)(b.E, {
                          variant: "text-xs/normal",
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
        n = (0, g.bG)([si.Ay], () => si.Ay.getVoiceStatesForChannel(t).length, [t]);
    return 0 === n
        ? null
        : (0, i.jsxs)("div", {
              className: ss.a,
              children: [
                  (0, i.jsx)(sl.H, { size: "xs", color: tb.A.colors.ICON_FEEDBACK_POSITIVE }),
                  (0, i.jsx)(b.E, { variant: "text-sm/medium", color: "text-feedback-positive", children: n }),
              ],
          });
}
var sr = n(227483);
function so(e) {
    let { message: t, channel: n, containerWidth: l } = e,
        s = iV({ message: t, channel: n, containerWidth: l - 32, hideTags: !0 }),
        { hasUnreads: a } = (0, ep.X5)(n),
        { content: r } = (0, ep.gk)({ firstMessage: t, formatInline: !1, noStyleAndInteraction: !0, hasUnreads: a });
    return null != s ? s : (0, i.jsx)(i3.Ay, { message: t, content: r, className: sr.BK, compact: !1 });
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
        x = (0, g.bG)([ez.Ay], () => ez.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: f, loaded: j } = (0, eA.OA)(n),
        { user: v, author: p } = (0, ep.kn)(n),
        A = (0, G.Ay)(n),
        { messageCountText: C } = (0, ep.k6)(n),
        N = s.useRef(null),
        { handleLeftClick: S, handleRightClick: y } = (0, eT.A)({ facepileRef: N, goToThread: l, channel: n });
    s.useEffect(() => {
        u?.(h.current?.ref, m);
    }, [u, m]);
    let T = (0, ep.Mw)(n, i_.T.CREATION_DATE, nL.EG.POSTED_DURATION_AGO),
        { shouldRenderTagsRow: I } = (0, eS.BA)({ channel: n, isNew: !1 }),
        { onFocus: k, ..._ } = i2({ id: t, row: o.row, column: o.column, section: o.section, boundaries: c }),
        M = p?.nick ?? v?.username ?? "",
        R = v?.getAvatarURL(n.guild_id, (0, es.FT)(es._3.SIZE_24));
    return (0, i.jsxs)(E.D, {
        ref: h,
        tag: "li",
        onClick: S,
        onFocus: k,
        onContextMenu: y,
        className: r()(sr.kL, d, { [sr.nT]: x }),
        "aria-label": eZ.intl.formatToPlainString(eZ.t.pgYN6c, { title: A ?? "", count: C }),
        style: { ...a },
        ..._,
        children: [
            (0, i.jsxs)("div", {
                className: sr.wx,
                children: [
                    (0, i.jsx)(ei.eu, { src: R, size: es._3.SIZE_24, className: sr.my, "aria-label": M }),
                    (0, i.jsx)(b.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: sr.fh,
                        children: M,
                    }),
                    (0, i.jsx)(b.E, { variant: "text-xs/medium", color: "text-subtle", className: sr.vE, children: T }),
                ],
            }),
            (0, i.jsxs)(el.M, {
                className: sr.rf,
                children: [
                    j &&
                        null == f &&
                        (0, i.jsx)(b.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: eZ.intl.string(eZ.t.mE3KJN),
                        }),
                    null != f ? (0, i.jsx)(so, { message: f, channel: n, containerWidth: a.width }) : null,
                    I ? (0, i.jsx)(eS.Ay, { channel: n, className: sr.GA }) : null,
                    (0, i.jsx)("div", { className: sr.oO, children: (0, i.jsx)(sn, { channel: n, firstMessage: f }) }),
                ],
            }),
            (0, i.jsx)(el.M, {
                className: sr.qr,
                children: (0, i.jsx)(iG, {
                    channel: n,
                    firstMessage: f,
                    facepileRef: N,
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
        u = (0, g.bG)([eU.A], () => eU.A.getChannel(n)),
        m = (0, U.YG)(u);
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
        x = s.useRef(null),
        f = (0, g.bG)([ez.Ay], () => ez.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: p, loaded: A } = (0, eA.OA)(n),
        C = (0, G.Ay)(n),
        { messageCountText: N } = (0, ep.k6)(n),
        { isNew: S, hasUnreads: y } = (0, ep.X5)(n),
        T = s.useRef(null),
        { handleLeftClick: I, handleRightClick: k } = (0, eT.A)({ facepileRef: T, goToThread: l, channel: n });
    s.useEffect(() => {
        m?.(x.current, h);
    }, [m, h]);
    let _ = (0, ep.Mw)(n, i_.T.CREATION_DATE, nL.EG.POSTED_DURATION_AGO),
        M = (0, ns.hf)(n),
        { onFocus: R, ...w } = i2({ id: t, row: d.row, column: d.column, section: d.section, boundaries: u });
    return (0, i.jsxs)("li", {
        ref: x,
        onClick: I,
        onFocus: R,
        onContextMenu: k,
        className: r()(iO.kL, o, { [iO.nT]: f }),
        style: { ...c },
        children: [
            (0, i.jsx)(E.D, {
                onClick: I,
                focusProps: { ringTarget: x },
                onContextMenu: k,
                "aria-label": eZ.intl.formatToPlainString(eZ.t.pgYN6c, { title: C ?? "", count: N }),
                className: iO.Kv,
                ...w,
            }),
            (0, i.jsxs)("div", {
                className: iO.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: iO.Y6,
                        children: [
                            (0, i.jsxs)("div", {
                                className: iO.wO,
                                children: [
                                    (0, i.jsx)(sd.A, { channel: n, message: p }),
                                    (0, i.jsx)(b.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        className: iO.SD,
                                        children: _,
                                    }),
                                ],
                            }),
                            S
                                ? (0, i.jsx)("div", {
                                      className: iO.Ad,
                                      children: (0, i.jsx)(er.E, { type: "new", variant: "primary" }),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(v.F, {
                        children: (0, i.jsx)(j.D, {
                            variant: "heading-md/extrabold",
                            className: iO.DD,
                            color: y ? "text-strong" : "text-muted",
                            style: { width: `${c.width - 24}px` },
                            children: M,
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: iO.PU,
                children: (0, i.jsx)(el.M, {
                    children: (0, i.jsx)(sh, {
                        channel: n,
                        firstMessage: p,
                        isFirstMessageLoaded: A,
                        overrideMedia: a,
                        coords: c,
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: iO.qr,
                children: (0, i.jsx)(el.M, {
                    children: (0, i.jsx)(iG, { channel: n, firstMessage: p, facepileRef: T }),
                }),
            }),
        ],
    });
}
function sh(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a } = e,
        r = iV({ message: n, channel: t, containerWidth: a.width });
    return null != r
        ? r
        : (0, i.jsx)(sx, { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a });
}
function sx(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a } = e,
        r = (0, g.bG)([eU.A], () => eU.A.getChannel(t.parent_id)),
        { firstMedia: o } = (0, ep.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !1 }),
        { hasUnreads: c } = (0, ep.X5)(t),
        d = (0, g.bG)([eB.A], () => eB.A.can(eX.xBc.MANAGE_MESSAGES, t)),
        u = eF.kt.useSetting(),
        m = eF.gs.useSetting(),
        h = (0, eR.A)(m, d),
        x = (0, eC.no)(n, r, !1),
        f = t.isMediaPost(),
        [j, v] = iH(a.width - 24, f ? iz.SIXTEEN_BY_NINE : iz.THREE_BY_TWO);
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
                      mediaAttachments: x,
                      globalSpoilerRenderSetting: h,
                      containerWidth: j,
                      containerHeight: v,
                      canAutoPlay: u,
                      shouldMaintainAspectRatio: f,
                  }),
                  (0, i.jsx)("div", {
                      className: iO.GA,
                      children: (0, i.jsx)(eS.Ay, { channel: t, tagsClassName: iO.uU }),
                  }),
              ],
          });
}
function sg(e) {
    return e.preventDefault();
}
let sf = s.memo(function (e) {
        return (0, i.jsx)(i.Fragment, {
            children: (0, eL.LL)({ ...e, analyticsSource: "ForumPostMediaPreviewImage" }),
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
            { containsVideo: d, containsGif: u } = s.useMemo(() => (0, eC.$2)(t), [t]),
            m = s.useMemo(() => t.slice(0, 4), [t]),
            h = lP({ numAttachments: m.length, containerWidth: l, containerHeight: a }),
            x = (function (e) {
                let { imageContainerStyles: t, containerWidth: n, containerHeight: l } = e,
                    i = s.useRef(lL(t)),
                    a = s.useRef(n),
                    r = s.useRef(l),
                    o = n > a.current + 100,
                    c = l > r.current + 100;
                return ((o || c) && (i.current = lL(t)), i.current);
            })({ imageContainerStyles: h, containerWidth: l, containerHeight: a }),
            g = (0, iD.O8)(iL.v.GUILD),
            f = s.useMemo(
                () =>
                    m.map((e, t) => {
                        let [l, s] = (0, e_.K6)(e, !n, g),
                            a = (0, e_.rx)(s),
                            m = {
                                ...x[t],
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && l ? a : e.alt,
                                onClick: sg,
                                shouldRenderAccessory: !u && !d,
                            },
                            f = (0, ek.ge)(e.src) ? `${e.src}?format=png` : e.src,
                            j = o && !l ? e.src : f;
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: iO.UV,
                                style: h[t],
                                children: [
                                    c
                                        ? (0, i.jsx)(iP.A, {
                                              ...m,
                                              src: j,
                                              backgroundSrc: f,
                                              aspectRatio: m.maxWidth / m.maxHeight,
                                              alt: m.alt ?? "",
                                              className: r()(iO.EN, { [iO.cd]: l }),
                                              imageChildClassName: iO.Rp,
                                          })
                                        : e.src.startsWith("data:")
                                          ? (0, i.jsx)(ed._, {
                                                ...m,
                                                className: iO.il,
                                                imageClassName: r()(iO.LW, { [iO.cd]: l }),
                                            })
                                          : (0, i.jsx)(sf, {
                                                ...m,
                                                autoPlay: o && !l,
                                                containerClassName: iO.EK,
                                                imageClassName: r()(iO.rp, { [iO.cd]: l }),
                                                responsive: !0,
                                            }),
                                    l &&
                                        (0, i.jsx)("div", {
                                            className: iO.X,
                                            children: (0, i.jsx)(eb.A, { obscureReason: s, iconClassname: iO.yo }),
                                        }),
                                ],
                            },
                            e.src,
                        );
                    }),
                [o, u, d, n, h, x, m, c, g],
            );
        return (0, i.jsxs)("div", {
            className: iO.pV,
            style: { width: l, height: a },
            children: [
                f,
                (u || d) &&
                    (0, i.jsxs)("div", {
                        className: iO.vz,
                        children: [
                            d &&
                                (0, i.jsx)(iM.PlayIcon, {
                                    color: "currentColor",
                                    size: "custom",
                                    width: 22,
                                    height: 22,
                                    className: iO.cU,
                                }),
                            u &&
                                (0, i.jsx)(iR.O, {
                                    size: "custom",
                                    width: 29,
                                    height: 29,
                                    color: "currentColor",
                                    className: iO.cU,
                                }),
                        ],
                    }),
                t.length > 4 &&
                    (0, i.jsx)(sv, {
                        text: (t.length - 4).toString(),
                        icon: iw.ImageIcon,
                        pillClassName: iO.v3,
                        iconClassName: iO.In,
                        textClassName: iO.EY,
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
            (0, i.jsxs)(b.E, { variant: "text-xs/medium", className: a, children: ["+", t] }),
        ],
    });
}
function sp(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, containerWidth: a, hasUnreads: o } = e,
        c = eF.hH.useSetting(),
        [d, u] = iH(a - 24),
        { content: m } = (0, ep.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !0 }),
        { shouldRenderTagsRow: h } = (0, eS.BA)({ channel: t, isNew: !1 }),
        x = s.useMemo(() => ({ width: d, height: u }), [d, u]),
        g = o ? iO.kR : iO.b8;
    return (0, i.jsxs)("div", {
        className: iO.Cv,
        style: x,
        children: [
            (0, i.jsxs)("div", {
                className: iO.Qs,
                children: [
                    l &&
                        null == n &&
                        (0, i.jsx)(b.E, {
                            variant: "text-sm/normal",
                            color: o ? "text-default" : "text-muted",
                            children: eZ.intl.string(eZ.t.mE3KJN),
                        }),
                    l && null != n && (0, i.jsx)(i3.Ay, { message: n, content: m, className: g, compact: c }),
                ],
            }),
            (0, i.jsx)("div", {
                className: r()(iO.kh, { [iO.ZH]: !h }),
                children: h ? (0, i.jsx)(eS.Ay, { channel: t, tagsClassName: iO.uU }) : null,
            }),
        ],
    });
}
var sA = n(392421),
    sC = n(980707),
    sN = n(477782),
    sb = n(258268);
function sE(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: l, layoutType: s, tagSetting: a } = (0, ev.R)(t.id),
        { showResolvedFlags: r, setShowResolvedFlags: o } = (0, Q.T)(t.id),
        c = (0, ev.p)(),
        d = t.isMediaChannel();
    function u(e) {
        ((0, tA.Cd)({ guildId: t.guild_id, channelId: t.id, sortOrder: e }), c.getState().setSortOrder(t.id, e), n());
    }
    function m(e) {
        ((0, tA.ad)({ guildId: t.guild_id, channelId: t.id, forumLayout: e }),
            c.getState().setLayoutType(t.id, e),
            n());
    }
    function h(e) {
        (c.getState().setTagSetting(t.id, e), n());
    }
    let g = null != t.availableTags && t.availableTags.length > 0;
    return (0, i.jsx)("div", {
        className: sb.k,
        children: (0, i.jsxs)(sC.W, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": d ? eZ.intl.string(eZ.t["kQN/bi"]) : eZ.intl.string(eZ.t.DJzbkL),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, i.jsxs)(sN.rX, {
                    label: eZ.intl.string(eZ.t.f8wNDl),
                    children: [
                        (0, i.jsx)(sN.iD, {
                            id: "sort-by-recent-activity",
                            group: "sort-by",
                            label: eZ.intl.string(eZ.t.jOPmcI),
                            action: () => u(i_.T.LATEST_ACTIVITY),
                            checked: l === i_.T.LATEST_ACTIVITY,
                        }),
                        (0, i.jsx)(sN.iD, {
                            id: "sort-by-date-posted",
                            group: "sort-by",
                            label: eZ.intl.string(eZ.t.UIltXd),
                            action: () => u(i_.T.CREATION_DATE),
                            checked: l === i_.T.CREATION_DATE,
                        }),
                    ],
                }),
                t.isModeratorReportChannel() &&
                    (0, i.jsx)(sN.rX, {
                        label: eZ.intl.string(nr.default.PsM2b4),
                        children: (0, i.jsx)(sN.sL, {
                            id: "resolved-flags-none",
                            label: eZ.intl.string(eZ.t.XJuakA),
                            action: () => o(!r),
                            checked: r,
                        }),
                    }),
                t.isMediaChannel() || t.isModeratorReportChannel() || t.isGameInvitesChannel()
                    ? null
                    : (0, i.jsxs)(sN.rX, {
                          label: eZ.intl.string(eZ.t.mFMDSq),
                          children: [
                              (0, i.jsx)(sN.iD, {
                                  id: "view-as-list",
                                  group: "view-as",
                                  label: eZ.intl.string(eZ.t["NJFr+g"]),
                                  action: () => m(x.C.LIST),
                                  checked: s === x.C.LIST,
                              }),
                              (0, i.jsx)(sN.iD, {
                                  id: "view-as-grid",
                                  group: "view-as",
                                  label: eZ.intl.string(eZ.t.wKeggb),
                                  action: () => m(x.C.GRID),
                                  checked: s === x.C.GRID,
                              }),
                          ],
                      }),
                g
                    ? (0, i.jsxs)(sN.rX, {
                          label: eZ.intl.string(eZ.t.Paxaug),
                          children: [
                              (0, i.jsx)(sN.iD, {
                                  id: "match-some",
                                  group: "tag-setting",
                                  label: eZ.intl.string(eZ.t.rQ0ctQ),
                                  action: () => h(sA.n.MATCH_SOME),
                                  checked: a === sA.n.MATCH_SOME,
                              }),
                              (0, i.jsx)(sN.iD, {
                                  id: "match-all",
                                  group: "tag-setting",
                                  label: eZ.intl.string(eZ.t.FCXUu0),
                                  action: () => h(sA.n.MATCH_ALL),
                                  checked: a === sA.n.MATCH_ALL,
                              }),
                          ],
                      })
                    : null,
                (0, i.jsx)(sN.rX, {
                    children: (0, i.jsx)(sN.Dr, {
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
var sS = n(305866),
    sy = n(123292);
function sT() {
    return Promise.resolve();
}
function sI(e) {
    let { channel: t, closePopout: n, setPopoutRef: l } = e,
        { enabled: a } = F.A.useConfig({ location: "forum-select-tags-popout" }),
        r = (0, l7.OT)(t),
        { tagFilter: o } = (0, ev.R)(t.id),
        c = (0, ev.p)(),
        d = (0, g.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        h = s.useCallback(
            (e) => {
                ((0, tA.UA)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    tagId: e,
                    filterTagIds: Array.from(o),
                    added: !o.has(e),
                    location: {
                        page: eX.liQ.GUILD_CHANNEL,
                        section: eX.JJy.FORUM_CHANNEL_HEADER,
                        object: eX.ZSU.CHANNEL_TAG,
                    },
                }),
                    c.getState().toggleTagFilter(t.id, e));
            },
            [t, o, c],
        ),
        x = s.useCallback(() => {
            (c.getState().setTagFilter(t.id, new Set()), d || n());
        }, [c, t.id, d, n]),
        f = (0, m.Ay)({
            id: `${t.id}-all-tags-dropdown-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: sT,
            scrollToEnd: sT,
        }),
        v = (0, ir.cq)(r),
        p = s.useRef(null);
    return (
        s.useEffect(() => {
            requestAnimationFrame(() => {
                if (null != p.current) {
                    let e = p.current.querySelector(a ? '[data-mana-component="tag"]' : `.${ii.Tc}`);
                    null != e && e.focus();
                }
            });
        }, [a]),
        (0, i.jsxs)(sS.l, {
            ref: (e) => {
                l?.(e);
            },
            "aria-label": eZ.intl.string(eZ.t.TdqRTh),
            className: ii.kL,
            children: [
                (0, i.jsx)("div", {
                    className: ii.wx,
                    children: (0, i.jsxs)("div", {
                        className: ii.LD,
                        children: [
                            (0, i.jsx)(j.D, {
                                color: "interactive-text-default",
                                variant: "heading-md/semibold",
                                className: ii.TK,
                                children: eZ.intl.string(eZ.t.HPu3kq),
                            }),
                            (0, i.jsx)("div", {
                                className: ii.d1,
                                children: (0, i.jsx)(b.E, {
                                    className: ii.lT,
                                    color: "none",
                                    variant: "text-xs/medium",
                                    tabularNumbers: !0,
                                    children: o.size,
                                }),
                            }),
                        ],
                    }),
                }),
                a
                    ? (0, i.jsx)("div", {
                          className: ii.I8,
                          children: (0, i.jsx)(I.C, {
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
                                      className: ii.I8,
                                      children: r.map((e) =>
                                          (0, i.jsx)(
                                              ir.Ay,
                                              {
                                                  className: ii.Tc,
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
                (0, i.jsx)("div", { className: ii.me }),
                (0, i.jsx)(sy.Q, {
                    "aria-label": eZ.intl.string(eZ.t["98EPQP"]),
                    onClick: x,
                    text: eZ.intl.string(eZ.t["98EPQP"]),
                }),
            ],
        })
    );
}
var sk = n(37411);
function s_(e) {
    let { channel: t, guild: n, sidebarState: l } = e;
    return (0, i.jsx)(eE.Cp, { channel: t, children: (0, i.jsx)(sO, { channel: t, guild: n, sidebarState: l }) }, t.id);
}
let sM = new (class {
    minWidth;
    maxWidth;
    gap;
    constructor({ minWidth: e, maxWidth: t, gap: n }) {
        (ee()(e < t, "minWidth needs to be smaller than maxWidth"),
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
function sR(e) {
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
                    variant: "eyebrow",
                    className: nc.archivedDivider,
                    id: sR(l),
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
function sL(e, t) {
    return `card-${e}-${t}`;
}
function sD(e) {
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
            archivedThreadIds: b,
            searchResults: E,
            canLoadMore: S,
            loadMore: y,
            activeThreadsLoading: T,
            archivedThreadsLoading: I,
            loading: k,
            isSearchLoading: _,
            layoutType: M,
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: l, tagSetting: i } = (0, ev.R)(e.id),
                s = (0, ep.V3)({ channel: e, sortOrder: t, tagFilter: n, tagSetting: i, shouldAutomaticallyAck: !0 }),
                a = (0, g.bG)([ts.A, q.A], () => {
                    let t = ts.A.hasLoaded(e.guild_id),
                        n = q.A.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: r, canLoadMore: o, loadMore: c, loading: d } = (0, ta.Fr)(e, t, n, i),
                { activeThreadIds: u, archivedThreadIds: m } = (0, U.WP)(e, s, r),
                { searchResults: h, isSearchLoading: x } = (0, ep.cA)({ channelId: e.id });
            return (
                (0, ep.yz)(e, t, n, i),
                {
                    activeThreadIds: u,
                    archivedThreadIds: m,
                    searchResults: h,
                    canLoadMore: o,
                    loadMore: c,
                    loading: a || d || x,
                    archivedThreadsLoading: d,
                    activeThreadsLoading: a,
                    isSearchLoading: x,
                    layoutType: l,
                }
            );
        })(t),
        R = j.length > 0,
        w = R || b.length > 0;
    (0, U.yk)(t, j);
    let L = (0, K.A)(t),
        { tagFilter: G, tagSetting: F } = (0, ev.R)(t.id);
    ((0, ep.o7)(t, G, F, c),
        (0, D.Ay)(() => {
            !c && f.length > 0 && tg.A.updateForumSearchQuery(t.id, f);
        }));
    let z = (0, ep.O3)(t),
        H = (0, ep.An)(t),
        B = s.useRef(null),
        { observePostVisibilityAnalytics: V } = (function (e) {
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
        })({ scrollerRef: B, channelId: t.id, guildId: t.guild_id }),
        W = M === x.C.GRID,
        { searchQuery: $ } = (0, ep.cA)({ channelId: t.id }),
        J = null != E && null != $ && $.length > 0,
        Z = s.useRef(null),
        { containerRef: ee, containerWidth: et } = iu(),
        en = (0, g.bG)([ez.Ay, eU.A], () => {
            let e = ez.Ay.getSidebarState(t.id);
            if (e?.type !== ti.PE.VIEW_CHANNEL) return null;
            let n = eU.A.getChannel(e.channelId);
            return null != n && n.isThread() ? n : null;
        });
    s.useEffect(() => {
        null == Z.current && null != en && (Z.current = en.id);
    }, [en]);
    let { columns: el } = s.useMemo(() => (W ? sM.getRenderOptions(et) : iU), [W, et]),
        ei = s.useMemo(() => (k ? Math.round((window.innerHeight - 200) / 118) : 0), [k]),
        { showResolvedFlags: es } = (0, Q.T)(t.id),
        ea = t.isModeratorReportChannel(),
        er = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iB(sM.getWidth(et))) * el;
            return T ? e : 0;
        }, [et, el, T]),
        eo = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iB(sM.getWidth(et))) * el;
            return I ? e : 0;
        }, [et, el, I]),
        ec = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iB(sM.getWidth(et))) * el;
            return _ && J ? e : 0;
        }, [et, el, _, J]),
        ed = s.useMemo(() => {
            if (W)
                if (!z && J) return [1, 0];
                else if (!H) return [1, j.length + er, 0];
                else if (J) return [1, E.length + ec, 0];
                else if (ea && !es) return [1, j.length + er, 0];
                else return [1, j.length + er, b.length + eo];
            if (!z && J) return [1, 1];
            if (!H) return [1, j.length, 1];
            if (J) return [1, E.length, 0, ei];
            if (ea && !es) return [1, j.length, 0, ei];
            else return [1, j.length, b.length, ei];
        }, [W, J, j.length, b.length, z, H, ei, E, er, eo, ec, es, ea]),
        eu = s.useMemo(
            () =>
                !z && J
                    ? [[], []]
                    : H
                      ? J
                          ? [[], E, [], []]
                          : ea && !es
                            ? [[], j, [], []]
                            : [[], j, b, []]
                      : [[], j, []],
            [J, z, H, E, j, b, es, ea],
        ),
        em = s.useCallback(
            (e, n) => {
                ((0, tA.Ml)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: { page: eX.liQ.GUILD_CHANNEL, section: eX.JJy.FORUM_CHANNEL_POST },
                }),
                    n ? (0, tl.N9)(e, { source: sk.H9.BROWSER }) : ((Z.current = e.id), (0, to.JA)(e)));
            },
            [t.guild_id, t.id, Z],
        ),
        [eh, ex] = s.useState(l + a - 24),
        eg = s.useCallback(
            (e, n, l) =>
                0 === e
                    ? (0, i.jsx)(
                          sB,
                          {
                              channel: t,
                              isEmpty: !R,
                              isSearchLoading: _,
                              numResults: E?.length,
                              coords: n,
                              onHeightChange: ex,
                              children:
                                  !k && (0, i.jsx)(nW, { channel: t, hasAnyThread: w, hasActiveThreads: R }, t.id),
                          },
                          "forum-channel-header",
                      )
                    : 2 !== e || H
                      ? 1 === e && J && !z
                          ? (0, i.jsx)(sF, { channel: t, coords: n }, "archive-or-search-result")
                          : l()
                      : (0, i.jsx)(sG, { channel: t, coords: n }, "archived-missing-reading-history-perm"),
            [J, H, E, z, t, R, _, k, w],
        ),
        ef = (0, g.bG)([tx.A], () => tx.A.hasHidden(t.id)),
        ej = { editorHeight: l, isGridLayout: W },
        eA = s.useRef(ej);
    (s.useEffect(() => {
        eA.current = ej;
    }),
        s.useEffect(() => {
            let { editorHeight: e, isGridLayout: t } = eA.current,
                n = t ? eT : B,
                l = n.current?.getScrollerState();
            null != l && !ef && l.scrollTop > e && n.current?.scrollTo({ to: 0 });
        }, [ef]));
    let {
            updateListScrollerRef: eC,
            renderListSection: eN,
            renderListItem: eb,
            getListSectionHeight: eS,
            getListItemHeight: ey,
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
                x = (0, g.bG)([tu.Ay], () => tu.Ay.getChannelId()),
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
                                n = null != x && (0, X.iU)(x) ? e4 : ns.Ay;
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
                    [d, l, x, u, m],
                ),
                A = s.useCallback(
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
                getListItemHeight: A,
            };
        })({
            listRef: B,
            hasActiveThreads: R,
            threadIdsBySection: eu,
            listViewCardHeights: o,
            editorHeight: l,
            editorAdditionRowHeight: a,
            renderSectionOrItem: eg,
            goToThread: em,
            observePostVisibilityAnalytics: V,
            isShowingSearchResult: J,
        }),
        eT = s.useRef(null),
        {
            updateMasonryListScrollerRef: eI,
            getItemKey: ek,
            renderGridSection: e_,
            renderGridItem: eM,
            getGridSectionHeight: eR,
            getSectionProps: ew,
            handleGridFocus: eP,
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
                    headerHeight: x,
                } = e,
                g = s.useRef(null),
                f = s.useCallback(
                    (e) => {
                        ((t.current = e), (g.current = e?.getScrollerNode()));
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
                            (h.current = sD(n)));
                    },
                    [t, h],
                ),
                v = s.useCallback(
                    (e) => {
                        let t = sD(e);
                        if (null == t) return;
                        let n = eU.A.getChannel(t);
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
                            return null == l ? sL(e, t) : sL(e, l);
                        }
                    },
                    [n],
                ),
                A = s.useCallback(
                    (e, t, n) =>
                        a(e, t, sP({ section: e, coords: t, key: n, isShowingSearchResult: c, hasActiveThreads: o })),
                    [a, o, c],
                ),
                C = s.useCallback((e) => (0 === e ? {} : { role: "grid", "aria-labelledby": `#${sR(e)}` }), []);
            return {
                updateMasonryListScrollerRef: f,
                masonryListContainerRef: g,
                focusedThreadId: h,
                handleGridFocus: j,
                handleGridSelect: v,
                getItemKey: p,
                renderGridSection: A,
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
                    (e) => (0 === e ? x - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && c && !d ? 40 : 0),
                    [x, c, d, o, u],
                ),
            };
        })({
            masonryListScrollerRef: eT,
            threadIdsBySection: eu,
            goToThread: em,
            renderSectionOrItem: eg,
            hasActiveThreads: R,
            isShowingSearchResult: J,
            canSearchForumPosts: z,
            canViewArchivedPosts: H,
            observePostVisibilityAnalytics: V,
            focusedThreadId: Z,
            headerHeight: eh,
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
                        o = l[sL(n, e)];
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
        masonryListScrollerRef: eT,
        containerWidth: et,
        isGridLayout: W,
        threadIdsBySection: eu,
        parentId: t.id,
        focusedThreadId: Z,
    });
    let eL = s.useCallback(() => {
            if (J) return;
            let e = W ? eT.current?.getScrollerState() : B.current?.getScrollerState();
            if (null == e) return;
            (0, tA.pO)({ guildId: t.guild_id, channelId: t.id });
            let n = e.scrollTop + e.offsetHeight;
            e.scrollHeight - n < (W ? Math.max(200, iB(et)) : 200) && y();
        }, [J, W, t.guild_id, t.id, et, y]),
        eD = (0, g.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        eO = (0, eE.kU)((e) => e.titleFocused || e.bodyFocused, d.x),
        eG = (function (e) {
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
                        let n = (0, iq.Mz)(e, iK),
                            l = (0, iq.HP)(e);
                        (d(n, l), (0, i$.T)(t, l, !0));
                    },
                    [t, d],
                ),
                [x, g] = s.useState(!1),
                f = s.useRef(x);
            (s.useLayoutEffect(() => {
                f.current = x;
            }, [x]),
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
                        g(!0);
                    }
                    function l(e) {
                        e.currentTarget.contains(e.relatedTarget) ||
                            (g(!1),
                            requestAnimationFrame(() => {
                                let e = i.current;
                                null !== e && null == c((0, iq.Mz)(e, iK)) && u((0, iq.Mz)(t, "data-grid-id"));
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
                        let l = (0, iq.Mz)(t, iK),
                            s = n?.querySelector(l);
                        if (null == s) return;
                        let a = parseInt(s.getAttribute("data-grid-section") ?? ""),
                            d = parseInt(s.getAttribute("aria-rowindex")),
                            u = parseInt(s.getAttribute("aria-colindex"));
                        switch ((iX.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                            case h.D$.RIGHT: {
                                let e = c(iJ({ section: a, row: d, column: u + 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(iK);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.LEFT: {
                                let e = c(iJ({ section: a, row: d, column: u - 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(iK);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.DOWN: {
                                let e = c(iJ({ section: a, row: d + 1, column: u }));
                                if ((null == e && (e = c(iJ({ section: a + 1, row: 0, column: u }))), null != e)) {
                                    let t = e.getAttribute(iK);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.UP: {
                                let e;
                                if (0 === d) {
                                    let t = parseInt(s.getAttribute(iQ));
                                    null == (e = c(iJ({ section: a - 1, row: t, column: u }))) &&
                                        (e = c(iJ({ section: a - 1, row: t - 1, column: u })));
                                } else e = c(iJ({ section: a, row: d - 1, column: u }));
                                if (null != e) {
                                    let t = e.getAttribute(iK);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.SPACE:
                            case h.D$.ENTER: {
                                if (e.repeat) return;
                                let t = i.current;
                                if (null != t) {
                                    let n = c((0, iq.Mz)(t, iK)),
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
                        i.current = null != e ? (0, iq.t$)(t, e) : null;
                    },
                    [t],
                );
            return s.useMemo(() => ({ id: t, containerProps: { onKeyDown: j, ref: r }, setFocus: v }), [t, j, v]);
        })({ id: "forum-grid-view", isEnabled: W && eD && !eO, setFocus: eP }),
        eF = (function (e) {
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
        })({ listRef: B, padding: 96, isEnabled: !W && eD && !eO, channel: t }),
        eH = s.useCallback(
            (e, n, l) =>
                0 === e
                    ? 0
                    : t.isGameInvitesChannel()
                      ? 280
                      : iB(l, t.isMediaChannel() ? iz.SIXTEEN_BY_NINE : iz.THREE_BY_TWO),
            [t],
        ),
        { ref: eB, ...eV } = eG.containerProps,
        eW = ez.Ay.getSidebarState(t.id),
        e$ = null != eW && (0, ez.JU)(eW),
        eq = (0, g.bG)([ez.Ay], () => ez.Ay.getSection(t.id)) === eX.YvQ.MEMBERS;
    return (0, i.jsx)("div", {
        className: nc.container,
        ref: ee,
        "data-member-list-open": eq,
        children: (0, i.jsx)(p.sk, {
            children: (e) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        c &&
                            (0, i.jsx)(P.A, {
                                channel: t,
                                draftType: tc.C.FirstThreadMessage,
                                className: nc.uploadArea,
                                style: { right: e$ && n?.isThreadSidebarFloating ? n.threadSidebarWidth : 0 },
                            }),
                        (0, i.jsx)(sz, { channel: t }),
                        (0, i.jsx)(A.A, { children: (0, i.jsx)(v.H, { children: eZ.intl.string(eZ.t.B2panI) }) }),
                        L
                            ? (0, i.jsx)("div", {
                                  className: nc.optInNotice,
                                  children: (0, i.jsx)(Y.A, { channel: t }),
                              })
                            : null,
                        W
                            ? (0, i.jsx)(i4, {
                                  navigator: eG,
                                  children: (0, i.jsx)(
                                      C.f,
                                      {
                                          ref: (e) => {
                                              ((eB.current = e?.getScrollerNode() ?? null), eI(e));
                                          },
                                          itemGutter: 16,
                                          padding: 24,
                                          className: nc.grid,
                                          columns: el,
                                          sections: ed,
                                          getItemKey: ek,
                                          getSectionHeight: eR,
                                          getItemHeight: eH,
                                          renderSection: e_,
                                          renderItem: eM,
                                          getSectionProps: ew,
                                          onScroll: S ? eL : void 0,
                                          chunkSize: 350,
                                          ...eV,
                                          ...e,
                                      },
                                      M,
                                  ),
                              })
                            : (0, i.jsx)(u.hD, {
                                  navigator: eF,
                                  children: (0, i.jsx)(u.PR, {
                                      children: (t) => {
                                          let { ref: n, ...l } = t;
                                          return (0, i.jsx)(
                                              N.Ei,
                                              {
                                                  ref: eC(n),
                                                  className: nc.list,
                                                  sections: ed,
                                                  sectionHeight: eS,
                                                  rowHeight: ey,
                                                  renderRow: eb,
                                                  renderSection: eN,
                                                  chunkSize: 150,
                                                  onScroll: S ? eL : void 0,
                                                  paddingBottom: 24,
                                                  ...l,
                                                  ...e,
                                                  innerRole: "list",
                                              },
                                              M,
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
        children: (0, i.jsx)(b.E, {
            color: "text-muted",
            variant: "text-md/normal",
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
        children: (0, i.jsx)(b.E, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eZ.intl.format(eZ.t.OWZJdS, { channelName: l }),
        }),
    });
}
function sz(e) {
    let { channel: t } = e,
        n = s.useCallback(() => {
            tg.A.resort(t.id);
        }, [t]),
        l = (0, g.bG)([tf.A], () => tf.A.getNewThreadCount());
    return 0 === l
        ? null
        : (0, i.jsx)(E.D, {
              className: nc.newPostsButton,
              onClick: n,
              children: (0, i.jsx)(b.E, {
                  color: "text-brand",
                  variant: "text-md/medium",
                  children: eZ.intl.format(eZ.t.ue1qfM, { count: l }),
              }),
          });
}
function sU() {
    return Promise.resolve();
}
function sH(e) {
    let { parentChannel: t, canCreatePost: n } = e,
        l = s.useCallback(() => {
            ((0, tA.jr)({ guildId: t.guild_id, channelId: t.id }), (0, H.d)(t));
        }, [t]);
    return __OVERLAY__ || !n
        ? null
        : (0, i.jsx)(S.$, { variant: "primary", size: "md", text: eZ.intl.string(tW.default.QwW8zd), onClick: l });
}
function sB(e) {
    let t,
        n,
        l,
        { channel: a, isEmpty: o, isSearchLoading: v, numResults: p, children: A, coords: C, onHeightChange: N } = e,
        { enabled: S } = F.A.useConfig({ location: "forum-channel-header" }),
        {
            name: R,
            formOpen: w,
            titleFocused: P,
            hasClickedForm: D,
            textAreaState: G,
            onboardingExpanded: z,
            setEditorAdditionRowHeight: U,
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
        { tagFilter: H, layoutType: B } = (0, ev.R)(a.id),
        V = (0, eE.ST)(),
        q = (0, ev.p)(),
        K = (0, g.bG)([td.A], () => td.A.canChatInGuild(a.guild_id)),
        Y = (0, tr.AI)(a),
        [Q, Z] = s.useState(Y),
        [, ee] = (0, W.c)(a.getGuildId() ?? void 0),
        et = (0, J.V)(a),
        en = K && (Y || (Q && ee)) && !et;
    Y && !Q && Z(!0);
    let { ref: el, height: ei } = (0, L.Ay)();
    s.useEffect(() => {
        null != ei && N(ei);
    }, [N, ei]);
    let es = s.useCallback(() => {
        c()(() => {
            null != el.current && V.getState().setEditorHeight(el.current.offsetHeight);
        });
    }, [el, V]);
    (s.useLayoutEffect(es, [es, o, en, z]), (0, th.Vo)({ event: eX.jej.REMEASURE_TARGET, handler: es }));
    let ea = (0, g.bG)([tm.A], () => tm.A.getUploads(a.id, tc.C.FirstThreadMessage)),
        er = (0, ep.Hv)(a),
        { containerRef: eo, containerWidth: ec } = iu(),
        ed = s.useRef(null),
        eu = s.useRef(null),
        em = s.useRef(null);
    s.useLayoutEffect(() => {
        let e = S ? ed.current : ed.current?.children[0],
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
    }, [a.availableTags, S, eo, ec, H]);
    let eh = R.length > 0 && !w && (v || null != p),
        ex =
            !__OVERLAY__ &&
            !D &&
            !w &&
            P &&
            (0 === G.textValue.trim().length || G.textValue.trim() === er) &&
            0 === ea.length &&
            !et &&
            !a.isGameInvitesChannel();
    function eg(e) {
        ((0, tA.UA)({
            guildId: a.guild_id,
            channelId: a.id,
            tagId: e,
            filterTagIds: Array.from(H),
            added: !H.has(e),
            location: { page: eX.liQ.GUILD_CHANNEL, section: eX.JJy.FORUM_CHANNEL_HEADER, object: eX.ZSU.CHANNEL_TAG },
        }),
            q.getState().toggleTagFilter(a.id, e));
    }
    s.useLayoutEffect(() => {
        if (!(eh || ex)) return U(0);
        null != eu.current && U(eu.current.clientHeight);
    }, [U, eh, ex, eu]);
    let ef = (0, m.Ay)({
            id: `${a.id}-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: sU,
            scrollToEnd: sU,
            orientation: h.Gl.HORIZONTAL,
        }),
        { role: ej, onFocus: eA, ...eC } = (0, u.rm)("forum-channel-header"),
        eN = s.useRef(null),
        eb =
            ((t = s.useRef(!1)),
            (n = (0, g.bG)([O.Ay], () => O.Ay.keyboardModeEnabled)),
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
        eS = s.useCallback(
            (e) => {
                (eA(), e.target !== el.current || eb.current || eN.current?.focus());
            },
            [eA, el, eb],
        ),
        ey = s.useMemo(() => (et ? (0, X.Yj)(a.availableTags) : a.availableTags), [a.availableTags, et]),
        eT = (0, ir.cq)(ey);
    return (0, i.jsx)(
        "div",
        {
            className: r()(nc.card, nc.headerRow, nc.columnsSpan),
            ref: el,
            onFocus: eS,
            ...eC,
            style: { ...C, position: B === x.C.GRID ? "absolute" : "static", height: "auto" },
            children: (0, i.jsxs)(th.Ah, {
                children: [
                    null != a.guild_id
                        ? (0, i.jsx)($.A, {
                              className: r()(nc.newMemberBanner, { [nc.gridViewBanner]: B === x.C.GRID }),
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
                                            [nc.headerWithMatchingPosts]: eh || ex,
                                        }),
                                        children: (0, i.jsx)(ig, {
                                            parentChannel: a,
                                            onChange: es,
                                            isSearchLoading: v,
                                            numResults: p,
                                            canCreatePost: en,
                                            inputRef: eN,
                                        }),
                                    }),
                                    (eh || ex) &&
                                        (0, i.jsxs)("div", {
                                            className: nc.matchingPostsRow,
                                            ref: eu,
                                            children: [
                                                eh &&
                                                    (0, i.jsxs)("div", {
                                                        className: nc.matchingPosts,
                                                        children: [
                                                            (0, i.jsx)(j.D, {
                                                                variant: "text-xs/normal",
                                                                color: "text-default",
                                                                children: v
                                                                    ? eZ.intl.string(eZ.t["/9i3qq"])
                                                                    : 0 === p
                                                                      ? eZ.intl.string(eZ.t.DbgHxi)
                                                                      : eZ.intl.formatToPlainString(eZ.t["tBz/8b"], {
                                                                            numPosts: p ?? "",
                                                                            query: R,
                                                                        }),
                                                            }),
                                                            !v &&
                                                                (0, i.jsx)(E.D, {
                                                                    onClick: function () {
                                                                        ((0, tA.hT)({
                                                                            guildId: a.guild_id,
                                                                            channelId: a.id,
                                                                        }),
                                                                            tg.A.clearForumSearch(a.id),
                                                                            V.getState().setName(""));
                                                                    },
                                                                    onMouseDown: (e) => e.preventDefault(),
                                                                    children: (0, i.jsx)(b.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-brand",
                                                                        className: nc.clear,
                                                                        children: eZ.intl.string(eZ.t.VkKicb),
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                (0, i.jsx)("div", { className: nc.tagsSpacer }),
                                                ex
                                                    ? en
                                                        ? (0, i.jsxs)("div", {
                                                              className: nc.startPostHelp,
                                                              children: [
                                                                  (0, i.jsx)(y.e, {
                                                                      shortcut: "SHIFT",
                                                                      className: nc.keyboardShortcut,
                                                                  }),
                                                                  (0, i.jsx)(b.E, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-subtle",
                                                                      children: "+",
                                                                  }),
                                                                  (0, i.jsx)(y.e, {
                                                                      shortcut: "ENTER",
                                                                      className: nc.keyboardShortcut,
                                                                  }),
                                                                  (0, i.jsx)(b.E, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-subtle",
                                                                      children: eZ.intl.string(eZ.t.ZvJ0yh),
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, i.jsxs)("div", {
                                                              className: nc.startPostHelp,
                                                              children: [
                                                                  (0, i.jsx)(T.E, {
                                                                      size: "custom",
                                                                      color: "currentColor",
                                                                      height: 14,
                                                                      width: 14,
                                                                      className: nc.warnIcon,
                                                                  }),
                                                                  (0, i.jsx)(b.E, {
                                                                      variant: "text-xs/normal",
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
                            ey.length > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)("div", { className: nc.divider }),
                                          S
                                              ? (0, i.jsx)("div", {
                                                    className: nc.tagList,
                                                    children: (0, i.jsx)(I.C, {
                                                        variant: "filter",
                                                        selectionMode: "multiple",
                                                        label: eZ.intl.string(eZ.t["P/y+sj"]),
                                                        items: eT,
                                                        selectedKeys: H,
                                                        onSelectionChange: (e) => {
                                                            if ("all" === e) return;
                                                            let t = ey.find((t) => e.has(t.id) !== H.has(t.id));
                                                            null != t && eg(t.id);
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
                                                                    children: ey.map((e) =>
                                                                        (0, i.jsx)(
                                                                            ir.Ay,
                                                                            {
                                                                                tag: e,
                                                                                onClick: () => eg(e.id),
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
                                          (0, i.jsx)(k.Y, {
                                              targetElementRef: em,
                                              renderPopout: (e) => {
                                                  let { closePopout: t, setPopoutRef: n } = e;
                                                  return (0, i.jsx)(sI, {
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
                                                                    children: (0, i.jsx)(b.E, {
                                                                        className: nc.countText,
                                                                        color: "none",
                                                                        variant: "text-xs/medium",
                                                                        children: H.size,
                                                                    }),
                                                                })
                                                              : eZ.intl.string(eZ.t.fZ8hzm),
                                                          n
                                                              ? (0, i.jsx)(_.t, {
                                                                    size: "custom",
                                                                    color: "currentColor",
                                                                    width: 20,
                                                                })
                                                              : (0, i.jsx)(M.a, {
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
                                                            children: (0, i.jsx)(b.E, {
                                                                className: nc.countText,
                                                                color: "none",
                                                                variant: "text-xs/medium",
                                                                children: H.size,
                                                            }),
                                                        })
                                                      : null,
                                                  (0, i.jsx)(_.t, { size: "custom", color: "currentColor", width: 24 }),
                                              ],
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    A,
                ],
            }),
        },
        "create-form",
    );
}
function sV(e) {
    let { channel: t } = e,
        { application: n } = (0, U._k)(t.id),
        l = (0, V.A)({ applicationId: n?.id, source: B.GameProfileSources.GameInvitesChannel });
    if (null == n) return null;
    let s = (0, i.jsx)(z.A, { game: n, size: z.M.MEDIUM_LARGE, className: nc.gameIcon });
    return (0, i.jsx)(R.m, {
        text: n.name,
        asContainer: !0,
        children:
            null != l
                ? (0, i.jsx)(E.D, { onClick: l, "aria-label": n.name, className: nc.gameIconClickable, children: s })
                : s,
    });
}
function sW(e) {
    let { channel: t } = e,
        n = t.isMediaChannel(),
        l = t.isGameInvitesChannel(),
        a = s.useRef(null);
    return (0, i.jsx)(k.Y, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(sE, { channel: t, closePopout: n });
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
                    (0, i.jsx)(w.J, { size: "xs", color: "currentColor" }),
                    (0, i.jsx)(b.E, {
                        className: nc.sortDropdownText,
                        variant: "text-sm/medium",
                        color: "interactive-text-default",
                        children: (0, i.jsx)("span", {
                            className: nc.sortDropdownTextHighContrastForcedColor,
                            children: n || l ? eZ.intl.string(eZ.t.JxU0wr) : eZ.intl.string(eZ.t.xyYt8A),
                        }),
                    }),
                    s
                        ? (0, i.jsx)(_.t, { size: "custom", color: "currentColor", width: 20 })
                        : (0, i.jsx)(M.a, { size: "custom", color: "currentColor", width: 20 }),
                ],
            });
        },
    });
}

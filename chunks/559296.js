(n.r(t), n.d(t, { CreateGameInvitePostButton: () => sB, default: () => sR }));
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
    g = n(371444),
    x = n(17928),
    f = n(862482),
    j = n(534514),
    v = n(707554),
    p = n(312138),
    b = n(140735),
    A = n(92008),
    C = n(475825),
    y = n(834730),
    N = n(939249),
    E = n(821609),
    S = n(475358),
    T = n(695366),
    I = n(872162),
    _ = n(265872),
    M = n(900797),
    R = n(847374),
    k = n(866665),
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
    Q = n(755752),
    X = n(212007),
    J = n(892340),
    Z = n(715757),
    ee = n(284009),
    et = n.n(ee),
    en = n(536637),
    el = n.n(en),
    ei = n(346055),
    es = n(97808),
    ea = n(778712),
    er = n(138134),
    eo = n(62010),
    ec = n(863610),
    ed = n(534890),
    eu = n(144165),
    em = n(119031),
    eh = n(104171),
    eg = n(379257),
    ex = n(306537),
    ef = n(114166),
    ej = n(810181),
    ev = n(390248),
    ep = n(422844),
    eb = n(435470),
    eA = n(473503),
    eC = n(256265),
    ey = n(969043),
    eN = n(710948),
    eE = n(218152),
    eS = n(52933),
    eT = n(504261),
    eI = n(505234),
    e_ = n(387408),
    eM = n(59318),
    eR = n(294520),
    ek = n(505527),
    ew = n(863439),
    eP = n(467073),
    eL = n(44788),
    eD = n(831688),
    eO = n(448368),
    eG = n(538355),
    eF = n(302031),
    ez = n(253932),
    eU = n(358047),
    eH = n(734057),
    eB = n(232835),
    eV = n(576705),
    eW = n(967198),
    e$ = n(287809),
    eq = n(531685),
    eK = n(58703),
    eY = n(763754),
    eQ = n(447215);
let eX = function (e) {
    let { message: t, originalAuthor: n, channel: l } = e,
        s = (0, eY.d8)(n, l),
        a = s?.nick ?? n?.username ?? "",
        r = (0, eQ.P)({
            user: n ?? void 0,
            channelId: l.id,
            guildId: l.guild_id,
            messageId: t?.id,
            stopPropagation: !0,
        })(s ?? void 0)(a, l.id);
    return (0, i.jsx)(y.E, { variant: "body-md/semibold", children: r });
};
var eJ = n(652215),
    eZ = n(838541),
    e0 = n(105292),
    e1 = n(948389),
    e2 = n(223139),
    e4 = n(165648);
let e3 = s.memo(function (e) {
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
            let i = (0, x.bG)([eU.Ay], () => eU.Ay.getCurrentSidebarChannelId(l.parent_id) === l.id),
                { firstMessage: a } = (0, eA.OA)(l),
                r = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: l = !0 } = e,
                        i = s.useMemo(() => (null != t ? (0, e_.A)(t, t?.messageSnapshots[0]) : null), [t]),
                        a = i?.content != null && "" !== i.content,
                        { hasSpoilerEmbeds: r, content: o } = (0, eG.A)(a ? i : null, {
                            formatInline: n,
                            noStyleAndInteraction: l,
                            allowHeading: !0,
                            allowList: !0,
                        }),
                        c = (0, eC.Ky)(t, r),
                        d = (0, eC.L_)(t, r);
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
        { ref: A, height: C } = (0, L.Ay)(),
        y = (0, eE.kU)((e) => e.setCardHeight, d.x);
    (s.useEffect(() => {
        null != C && y(t, C);
    }, [C, y, t]),
        s.useEffect(() => {
            l?.(A.current, t);
        }, [A, l, t]));
    let E = s.useRef(null),
        { handleLeftClick: S, handleRightClick: T } = (0, eI.A)({ facepileRef: E, goToThread: n, channel: c }),
        { role: I, onFocus: _, ...M } = (0, u.rm)(t),
        { isFocused: R, handleFocus: k, handleBlur: w } = (0, eT.A)(_);
    return (0, i.jsxs)("div", {
        ref: A,
        "data-item-id": t,
        onClick: S,
        onContextMenu: T,
        className: r()(e2.kL, e1.kL, o, { [e2.nT]: m }),
        children: [
            (0, i.jsx)(N.D, {
                onClick: S,
                focusProps: { ringTarget: A },
                onContextMenu: T,
                "aria-label": e0.intl.formatToPlainString(e0.t.pgYN6c, { title: p, count: h }),
                className: e2.Kv,
                onFocus: k,
                onBlur: w,
                ...M,
            }),
            (0, i.jsxs)("div", {
                className: e2.kb,
                children: [
                    (0, i.jsx)(v.F, {
                        children: (0, i.jsxs)("div", {
                            className: e1.fx,
                            children: [
                                (0, i.jsx)(e8, {
                                    channel: c,
                                    firstMessage: f,
                                    content: g,
                                    hasMediaAttachment: null != j,
                                    originalAuthor: b,
                                }),
                                f?.blocked || null == j ? null : (0, i.jsx)(tl, { channel: c, firstMedia: j }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(ei.M, {
                        enabled: !R,
                        children: (0, i.jsx)(e7, { channel: c, firstMessage: f, facepileRef: E }),
                    }),
                ],
            }),
        ],
    });
});
function e8(e) {
    let { channel: t, firstMessage: n, content: l, hasMediaAttachment: s, originalAuthor: a } = e,
        { hasUnreads: o } = (0, eb.X5)(t);
    return (0, i.jsxs)("div", {
        className: r()(e1.rf, e2.rf),
        children: [
            (0, i.jsx)(eS.Ay, { channel: t }),
            (0, i.jsx)("div", {
                className: (e2.iU, e1.iU),
                children: (0, i.jsx)(e5, {
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
let e5 = s.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: s, hasUnreads: a, originalAuthor: o } = e,
        c = (0, x.bG)([ey.A], () => ey.A.isLoading(n.id)),
        d = (0, x.bG)([eV.A], () => eV.A.can(eJ.xBc.MANAGE_MESSAGES, n)),
        u = ez.gs.useSetting(),
        m = (0, x.bG)([eW.A], () => eW.A.getGuildId()),
        { contentPlaceholder: h, renderedContent: g } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, eO.o)(t, l, !1, !1, r()(e2.BK, e1.BK, e4.tZ, e4.__invalid_smallFontSize), {
                      leadingIconClass: e2.aG,
                      trailingIconClass: e2.sl,
                      iconSize: eZ.eJ,
                  }),
        f =
            null != g
                ? (0, i.jsx)(y.E, { variant: "body-md/normal", children: g })
                : s
                  ? null
                  : (0, i.jsx)(y.E, {
                        tag: "span",
                        variant: "body-sm/medium",
                        color: a ? "text-default" : "text-muted",
                        className: r()(e2.BK, e1.BK),
                        "aria-label": "",
                        children: null == t ? (c ? null : e0.intl.string(e0.t.mE3KJN)) : h,
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
                      className: e1.Nd,
                  })
                : null,
            (0, i.jsxs)("div", {
                className: e1.IF,
                children: [
                    (0, i.jsx)(eX, { channel: n, originalAuthor: o, message: t }),
                    (0, i.jsx)(ei.M, { className: e2.JY, children: f }),
                ],
            }),
        ],
    });
});
function e7(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        { isNew: s } = (0, eb.X5)(t),
        a = (0, G.Ay)(t),
        r = (0, ej.m)(t.id),
        o = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: e1.qr,
        children: [
            (0, i.jsxs)("div", {
                className: e1.JS,
                children: [
                    (0, i.jsx)(er.FlagIcon, { size: "custom", width: 14, height: 14 }),
                    (0, i.jsx)(y.E, { variant: "body-sm/medium", children: a }),
                    s
                        ? (0, i.jsx)("div", {
                              className: e1.Ad,
                              children: (0, i.jsx)(eo.E, { type: "new", variant: "primary" }),
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: e1.PQ,
                children: [
                    o || null == l ? null : (0, i.jsx)(e6, { firstMessage: l, channel: t }),
                    (0, i.jsx)(e9, { channel: t, iconSize: 14 }),
                    (0, i.jsx)("span", { className: e2.xE, children: "\u2022" }),
                    r.length > 0
                        ? (0, i.jsxs)("div", {
                              className: e2.IW,
                              children: [
                                  (0, i.jsx)(tt, { channel: t, userIds: r, facepileRef: n }),
                                  (0, i.jsx)("div", {
                                      className: e2.r$,
                                      children: (0, i.jsx)(ec.n, { themed: !0, dotRadius: 2 }),
                                  }),
                                  (0, i.jsx)(em.Ay, { channel: t, className: e2.mD, renderDots: !1 }),
                              ],
                          })
                        : (0, i.jsx)(te, { channel: t }),
                ],
            }),
        ],
    });
}
function e9(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: s, unreadCount: a } = (0, eb.k6)(t);
    return (0, i.jsxs)("div", {
        className: r()(e2.Mv, { [e2.hT]: l && null == a }),
        children: [
            (0, i.jsx)("span", {
                className: e2.SZ,
                children: (0, i.jsx)(ed.ChatIcon, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof s
                ? (0, i.jsx)(ef.A, { value: s, digitWidth: 9, className: e2.gv })
                : (0, i.jsx)("div", { className: e2.gv, children: s }),
            null == a
                ? null
                : (0, i.jsxs)(y.E, {
                      className: e2.bU,
                      variant: "body-sm/semibold",
                      color: "text-brand",
                      children: ["(", e0.intl.format(e0.t.z3PEth, { count: a }), ")"],
                  }),
        ],
    });
}
function e6(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, x.bG)([eH.A], () => eH.A.getChannel(n.parent_id)),
        s = (0, eb.Ck)(l),
        { disableReactionCreates: a, isLurking: r, isPendingMember: o } = (0, eP.A)(n);
    return null == s || a
        ? null
        : (0, i.jsx)(eD.q, {
              className: e2.vC,
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
              type: ek.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function te(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, ep.R)(t.parent_id),
        l = (0, eb.Mw)(t, n),
        s = t.threadMetadata?.createTimestamp,
        a = null == s ? null : e0.intl.formatToPlainString(e0.t["13euCd"], { timestamp: (0, eK.i$)(el()(s), "LLLL") });
    return (0, i.jsx)(k.m, {
        text: a,
        children: (0, i.jsx)(y.E, {
            className: e2.__invalid_activityText,
            variant: "body-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function tt(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        s = (0, eb.$I)(t, n);
    return (0, i.jsx)("div", {
        ref: l,
        children: (0, i.jsx)(eh.Ay, {
            className: e2.__invalid_facepile,
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
function tn(e) {
    let t,
        n,
        { firstMedia: l, shouldObscure: s, obscureReason: a, shouldShowAgeVerification: o } = e,
        c = (0, x.bG)([eq.A], () => eq.A.isFocused()),
        d = (0, eM.ge)(l.src),
        u = ez.kt.useSetting(),
        m = (0, eR.rx)(a),
        { src: h, width: g, height: f, alt: j } = l;
    return (f > g ? (n = 72) : (t = 72), o)
        ? (0, i.jsx)("div", {
              "aria-label": m ?? j ?? e0.intl.string(e0.t.hqwnc2),
              className: r()(e2.iT, e2.nh),
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
                className: e2.iT,
                imageClassName: r()({ [e2.cd]: s, [e2.LW]: !0 }),
            })
          : (0, eL.LL)({
                src: h,
                maxHeight: t,
                maxWidth: n,
                width: g,
                height: f,
                alt: null != j && s ? m : j,
                autoPlay: u,
                animated: d && !s && c,
                srcIsAnimated: l.srcIsAnimated,
                containerClassName: e2.iT,
                imageClassName: r()({ [e2.cd]: s }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function tl(e) {
    let { channel: t, firstMedia: n } = e,
        [l, s] = (0, eR.eJ)({ media: n, channel: t }),
        a = (0, ev.qZ)(s);
    return (0, i.jsx)(ei.M, {
        enabled: !0,
        children: (0, i.jsxs)("div", {
            className: r()(e2.pV, e1.pV),
            onClick: function (e) {
                (e.stopPropagation(),
                    a &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        eg.A.showAgeVerificationGetStartedModal({ entryPoint: ex.q1.FORUM_POST_MEDIA_PREVIEW })));
            },
            children: [
                (0, i.jsx)(tn, { firstMedia: n, shouldObscure: l, obscureReason: s, shouldShowAgeVerification: a }),
                l && (0, i.jsx)(eN.A, { iconClassname: e2.yo, obscureReason: s }),
            ],
        }),
    });
}
var ti = n(378570),
    ts = n(940382),
    ta = n(970278),
    tr = n(424798),
    to = n(406704),
    tc = n(747926),
    td = n(31717),
    tu = n(834942),
    tm = n(309010),
    th = n(522602),
    tg = n(234320),
    tx = n(947094),
    tf = n(919577),
    tj = n(207777),
    tv = n(365971),
    tp = n(613999);
let tb = function (e) {
    let { guildId: t, channelId: n } = e,
        l = s.useRef(null),
        i = (0, tv.Xg)(),
        a = !eq.A.isFocused(i);
    return (
        s.useLayoutEffect(
            () => (
                null == l.current &&
                    ((l.current = new tp.Ay({ guildId: t, channelId: n, isPaused: a, windowId: i })),
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
var tC = n(29477),
    ty = n(136722),
    tN = n(661531),
    tE = n(192308),
    tS = n(866323),
    tT = n(789645),
    tI = n(446576),
    t_ = n(26430),
    tM = n(885574),
    tR = n(812993),
    tk = n(933832),
    tw = n(565787),
    tP = n(320448),
    tL = n(435183),
    tD = n(417454),
    tO = n(148719),
    tG = n(7689),
    tF = n(56059),
    tz = n(141628),
    tU = n(696986),
    tH = n(793574),
    tB = n(688810),
    tV = n(359800),
    tW = n(206828),
    t$ = n(689125),
    tq = n(296853),
    tK = n(922396);
function tY(e) {
    let { channel: t, tagFilter: n } = e,
        l = (0, to.AI)(t),
        { application: s } = (0, U._k)(t.id);
    function a() {
        return (0, H.d)(t);
    }
    return n.size > 0
        ? (0, i.jsx)(tJ, { tagFilter: n, canCreatePost: l, handleClickCreatePost: a })
        : (0, i.jsxs)("div", {
              className: tq.kL,
              children: [
                  (0, i.jsx)(j.D, {
                      variant: "heading-xl/semibold",
                      color: "text-default",
                      className: tq.DD,
                      children: e0.intl.string(t$.default.NQechc),
                  }),
                  (0, i.jsxs)("ul", {
                      className: tq.Zu,
                      children: [
                          (0, i.jsx)(tX, {
                              icon: (0, i.jsx)(tG.MagnifyingGlassIcon, { size: "xs", color: tN.A.colors.ICON_SUBTLE }),
                              children: e0.intl.string(t$.default.y5Bork),
                          }),
                          (0, i.jsx)(tX, {
                              icon: (0, i.jsx)(tF.b, { size: "xs", color: tN.A.colors.ICON_SUBTLE }),
                              children: e0.intl.string(t$.default.b77nl3),
                          }),
                          (0, i.jsx)(tQ, { application: s }),
                      ],
                  }),
                  l &&
                      (0, i.jsx)(E.$, {
                          variant: "primary",
                          size: "md",
                          text: e0.intl.string(t$.default.QwW8zd),
                          onClick: a,
                      }),
              ],
          });
}
function tQ(e) {
    let { application: t } = e,
        { analyticsLocations: n } = (0, tB.Ay)(tH.A.GAME_INVITE_CHANNEL_EMPTY_STATE),
        { startAuthorization: l, hasAlreadyLinked: s, canStartAuthorization: a, fetched: r } = (0, tW.RD)(t),
        o = (0, tV.z)(l, s);
    if (!r) return null;
    let c = (0, i.jsx)(tz.A, { size: "xs", color: tN.A.colors.ICON_SUBTLE });
    return s
        ? (0, i.jsx)(tX, { icon: c, children: e0.intl.string(t$.default.BSPpd4) })
        : a
          ? (0, i.jsx)(tX, {
                icon: c,
                children: e0.intl.format(t$.default.XZapWG, { onClick: () => o({ analyticsLocations: n }) }),
            })
          : null;
}
function tX(e) {
    let { icon: t, children: n } = e;
    return (0, i.jsxs)("li", {
        className: tq.N4,
        children: [
            (0, i.jsx)("div", { className: tq.xH, children: t }),
            (0, i.jsx)(y.E, { variant: "body-sm/medium", color: "text-default", className: tq.oo, children: n }),
        ],
    });
}
function tJ(e) {
    let { tagFilter: t, canCreatePost: n, handleClickCreatePost: l } = e;
    return (0, i.jsxs)("div", {
        className: tK.k,
        children: [
            (0, i.jsx)(j.D, {
                className: tK.w,
                variant: "heading-sm/semibold",
                children: e0.intl.formatToPlainString(e0.t.lvPci0, { numTags: t.size }),
            }),
            (0, i.jsx)(y.E, {
                color: "text-default",
                variant: "body-sm/normal",
                children: e0.intl.formatToPlainString(t$.default.nJzi8D, { numTags: t.size }),
            }),
            n &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tU.h, { size: 16 }),
                        (0, i.jsx)(E.$, { text: e0.intl.string(t$.default.QwW8zd), variant: "secondary", onClick: l }),
                    ],
                }),
        ],
    });
}
var tZ = n(462887),
    t0 = n(811893),
    t1 = n(736653),
    t2 = n(303136),
    t4 = n(892110),
    t3 = n(29385),
    t8 = n(468689),
    t5 = n(71393),
    t7 = n(975571);
let t9 = { mass: 1, tension: 250, friction: 18, clamp: !0 };
var t6 = n(340990);
function ne(e) {
    let { handleHide: t } = e;
    return (0, i.jsx)(N.D, {
        onClick: t,
        className: t6.b,
        "aria-label": e0.intl.string(e0.t.WAI6xu),
        children: (0, i.jsx)(tT.P, { size: "md", color: "currentColor", className: t6.ut }),
    });
}
function nt(e) {
    let { username: t, title: n, videoSrc: l, messageCount: s, reaction: a, reactionCount: o, classname: c } = e;
    return (0, i.jsxs)("div", {
        className: r()(t6.IP, c),
        children: [
            (0, i.jsx)("div", {
                className: t6.Y6,
                children: (0, i.jsxs)("div", {
                    className: t6.wO,
                    children: [
                        (0, i.jsx)(y.E, { tag: "span", className: t6.cy, variant: "body-sm/semibold", children: t }),
                        (0, i.jsx)(y.E, {
                            variant: "body-xs/normal",
                            color: "text-default",
                            className: t6.SD,
                            children: e0.intl.string(e0.t.mA0IvI),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(j.D, {
                variant: "heading-sm/semibold",
                className: t6.DD,
                color: "text-strong",
                "aria-hidden": !0,
                children: n,
            }),
            (0, i.jsx)(tU.h, { size: 10 }),
            (0, i.jsx)(t2.A, { className: t6.Ki, src: l }),
            (0, i.jsx)(tU.h, { size: 10 }),
            (0, i.jsx)("div", {
                className: t6.qr,
                children: (0, i.jsxs)("div", {
                    className: t6.GD,
                    children: [
                        (0, i.jsxs)("div", {
                            className: t6.Mv,
                            children: [
                                (0, i.jsx)("span", {
                                    className: t6.SZ,
                                    children: (0, i.jsx)(ed.ChatIcon, { size: "xs", color: "currentColor" }),
                                }),
                                (0, i.jsx)(y.E, {
                                    variant: "body-xs/normal",
                                    color: "interactive-text-default",
                                    children: s,
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: t6.vi,
                            children: [
                                (0, i.jsx)("span", { role: "img", "aria-label": "", children: a }),
                                (0, i.jsx)(y.E, {
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
let nn = (e) => {
    let { channel: t } = e,
        n = (0, t1.Ay)(),
        l = (0, tZ.M)(n),
        a = (0, x.bG)([t5.A], () => t5.A.getGuild(t.guild_id)),
        o = (0, x.bG)([tx.A], () => tx.A.hasHidden(t.id)),
        c = (0, t3.e)({ guildId: t.guild_id, channelId: t.id }),
        { transitions: d, setVisible: u } = (function () {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tS.p)(e, {
                    keys: (e) => (e ? "shown" : "hidden"),
                    config: t9,
                    from: { opacity: 0 },
                    enter: { opacity: 1 },
                    leave: { opacity: 0 },
                    unique: !0,
                }),
                setVisible: t,
            };
        })(),
        m = s.useCallback(() => {
            (u(!1), tf.A.hideAdminOnboarding(t.id, !0));
        }, [t, u]);
    s.useEffect(() => {
        (0, t4.l)(t.id) || u(!o);
    }, [t, u, o]);
    let h = s.useMemo(
            () => [
                e0.intl.string(e0.t["8pEGAw"]),
                e0.intl.string(e0.t.jwfgDd),
                e0.intl.string(e0.t.mPKs27),
                e0.intl.string(e0.t.StRbvG),
            ],
            [],
        ),
        g = s.useMemo(
            () => [
                e0.intl.string(e0.t["m/b58M"]),
                e0.intl.string(e0.t.MuJSKw),
                e0.intl.string(e0.t["d/Wqvu"]),
                e0.intl.string(e0.t.GJklAw),
            ],
            [],
        );
    function f() {
        t8.A.open(t.guild_id, eJ.BEX.ROLE_SUBSCRIPTIONS);
    }
    let v = a?.features.has(eJ.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)
            ? e0.intl.string(e0.t.n0q7sI)
            : e0.intl.string(e0.t.QoYdie),
        p =
            (a?.features.has(eJ.GuildFeatures.CREATOR_MONETIZABLE) ||
                a?.features.has(eJ.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) ??
            !1,
        b = p ? e0.intl.string(e0.t["G/7ciZ"]) : e0.intl.string(e0.t.IFOiit),
        A = p ? e0.intl.string(e0.t.GjgQO1) : e0.intl.string(e0.t.E7AO6t);
    return (0, i.jsx)(i.Fragment, {
        children: d((e, t) =>
            t
                ? (0, i.jsxs)(tC.animated.div, {
                      style: e,
                      className: t6.kL,
                      children: [
                          (0, i.jsxs)("div", {
                              className: t6.U1,
                              children: [
                                  (0, i.jsxs)(y.E, {
                                      variant: "body-xs/normal",
                                      className: t6.l2,
                                      children: [
                                          (0, i.jsx)(tM.CircleInformationIcon, {
                                              size: "xxs",
                                              color: "currentColor",
                                              className: t6.Kk,
                                          }),
                                          e0.intl.string(e0.t.znhX2R),
                                      ],
                                  }),
                                  (0, i.jsx)(ne, { handleHide: m }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: t6.hQ,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: r()(t6.CT, p && t6.en),
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: t6.F2,
                                              children: (0, i.jsxs)("div", {
                                                  className: t6.IZ,
                                                  children: [
                                                      (0, i.jsx)(nt, {
                                                          username: e0.intl.string(e0.t.AkORco),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                                          title: e0.intl.string(e0.t.yO6Fxu),
                                                          messageCount: "34",
                                                          reaction: "\u26A1\uFE0F",
                                                          reactionCount: "724",
                                                          classname: t6.q6,
                                                      }),
                                                      (0, i.jsx)(nt, {
                                                          username: e0.intl.string(e0.t.DPg3YM),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                                          title: e0.intl.string(e0.t["R5XnC/"]),
                                                          messageCount: "34",
                                                          reactionCount: "84",
                                                          reaction: "\uD83D\uDC9E",
                                                          classname: t6.q6,
                                                      }),
                                                      (0, i.jsx)(nt, {
                                                          username: e0.intl.string(e0.t.KIelex),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                                          title: e0.intl.string(e0.t.pt88Vb),
                                                          messageCount: "7,103",
                                                          reaction: "\u26A1\uFE0F",
                                                          reactionCount: "724",
                                                          classname: t6.Ob,
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          (0, i.jsxs)("article", {
                                              className: t6.n$,
                                              children: [
                                                  (0, i.jsx)(j.D, {
                                                      variant: "heading-lg/semibold",
                                                      color: "text-strong",
                                                      children: b,
                                                  }),
                                                  (0, i.jsx)(tU.h, { size: 8 }),
                                                  (0, i.jsx)(y.E, {
                                                      variant: "body-md/normal",
                                                      color: "text-muted",
                                                      children: A,
                                                  }),
                                                  (0, i.jsx)(tU.h, { size: 16 }),
                                                  (0, i.jsxs)(N.D, {
                                                      onClick: () =>
                                                          open(t7.A.getCreatorSupportArticleURL(eJ.MVz.MEDIA_CHANNEL)),
                                                      className: t6.zy,
                                                      children: [
                                                          (0, i.jsx)(y.E, {
                                                              variant: "body-sm/medium",
                                                              color: "text-link",
                                                              children: e0.intl.string(e0.t.OahzBd),
                                                          }),
                                                          (0, i.jsx)(t0.t, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: t6.QI,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)(tU.h, { size: 16 }),
                                                  (0, i.jsx)("div", {
                                                      className: t6.Qq,
                                                      children: h.map((e) =>
                                                          (0, i.jsx)(
                                                              y.E,
                                                              {
                                                                  variant: "body-sm/medium",
                                                                  color: "text-default",
                                                                  className: t6.U0,
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
                                          className: r()(t6.CT, t6.Gw),
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: t6.F2,
                                                  children: (0, i.jsxs)("div", {
                                                      className: t6.kQ,
                                                      children: [
                                                          (0, i.jsx)("img", {
                                                              src: l
                                                                  ? "/assets/b58ce8ba4d6516a2.png"
                                                                  : "/assets/9ed42f4f17fd8793.png",
                                                              alt: "",
                                                              className: t6.JM,
                                                          }),
                                                          (0, i.jsx)("img", {
                                                              src: l
                                                                  ? "/assets/d0f129a0c1627f7a.png"
                                                                  : "/assets/fddfcda2eca5c8d4.png",
                                                              alt: "",
                                                              className: t6.JM,
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              (0, i.jsxs)("article", {
                                                  className: t6.n$,
                                                  children: [
                                                      (0, i.jsxs)(y.E, {
                                                          variant: "footnote/semibold",
                                                          className: t6.X4,
                                                          children: [
                                                              e0.intl.string(e0.t.NChGwy),
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
                                                          children: e0.intl.string(e0.t["N/TRrT"]),
                                                      }),
                                                      (0, i.jsx)(tU.h, { size: 8 }),
                                                      (0, i.jsx)(y.E, {
                                                          variant: "body-md/normal",
                                                          color: "text-muted",
                                                          children: e0.intl.string(e0.t.t3yWxG),
                                                      }),
                                                      (0, i.jsx)(tU.h, { size: 16 }),
                                                      (0, i.jsx)("div", {
                                                          className: t6.Qq,
                                                          children: g.map((e) =>
                                                              (0, i.jsx)(
                                                                  y.E,
                                                                  {
                                                                      variant: "body-sm/medium",
                                                                      color: "text-default",
                                                                      className: t6.U0,
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
var nl = n(331322),
    ni = n(111159),
    ns = n(517461),
    na = n(350527),
    nr = n(95035),
    no = n(291185),
    nc = n(587240),
    nd = n(253898);
let nu = { mass: 1, tension: 250, friction: 18, clamp: !0 };
function nm(e) {
    let { guild: t } = e,
        n = (0, x.bG)([eV.A], () => eV.A.can(eJ.xBc.MANAGE_GUILD, t));
    return (0, i.jsxs)(nl.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            (0, i.jsxs)(nl.B, {
                direction: "vertical",
                gap: 16,
                children: [
                    (0, i.jsx)(nl.B, {
                        direction: "vertical",
                        gap: 4,
                        children: (0, i.jsx)(y.E, {
                            variant: "body-md/medium",
                            color: "text-default",
                            children: e0.intl.string(no.default.fP8DVx),
                        }),
                    }),
                    (0, i.jsxs)(nl.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, i.jsx)(y.E, {
                                variant: "body-lg/semibold",
                                color: "text-default",
                                children: e0.intl.string(no.default["i7CH/I"]),
                            }),
                            (0, i.jsxs)("ol", {
                                className: r()(nc.p_, nc.o8, nc.ap),
                                children: [
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(y.E, {
                                            variant: "body-md/normal",
                                            color: "text-default",
                                            children: e0.intl.string(no.default["+Izoz7"]),
                                        }),
                                    }),
                                    (0, i.jsxs)("li", {
                                        children: [
                                            (0, i.jsx)(y.E, {
                                                variant: "body-md/normal",
                                                color: "text-default",
                                                children: e0.intl.string(no.default["iu/RkU"]),
                                            }),
                                            (0, i.jsxs)("ul", {
                                                className: r()(nc.p_, nc.t3, nc.zS),
                                                children: [
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(y.E, {
                                                            variant: "body-md/normal",
                                                            color: "text-default",
                                                            children: e0.intl.string(no.default.QogKbP),
                                                        }),
                                                    }),
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(y.E, {
                                                            variant: "body-md/normal",
                                                            color: "text-default",
                                                            children: e0.intl.string(no.default.V4orHT),
                                                        }),
                                                    }),
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(y.E, {
                                                            variant: "body-md/normal",
                                                            color: "text-default",
                                                            children: e0.intl.string(no.default.VrrQXe),
                                                        }),
                                                    }),
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(y.E, {
                                                            variant: "body-md/normal",
                                                            color: "text-default",
                                                            children: e0.intl.string(no.default.pSuM5e),
                                                        }),
                                                    }),
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(y.E, {
                                                            variant: "body-md/normal",
                                                            color: "text-default",
                                                            children: e0.intl.string(no.default["/RLXlI"]),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(y.E, {
                                            variant: "body-md/normal",
                                            color: "text-default",
                                            children: e0.intl.string(no.default.j4AmYy),
                                        }),
                                    }),
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(y.E, {
                                            variant: "body-md/normal",
                                            color: "text-default",
                                            children: e0.intl.format(no.default["/g+PvX"], {
                                                termsOfService: eJ.X7G.TERMS,
                                                communityGuidelines: eJ.X7G.GUIDELINES,
                                                helpArticle: t7.A.getArticleURL(eJ.MVz.FLAG_TO_MOD),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)(nl.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, i.jsx)(y.E, {
                                variant: "body-lg/semibold",
                                color: "text-default",
                                children: e0.intl.string(no.default.qJWXsz),
                            }),
                            (0, i.jsxs)("ul", {
                                className: r()(nc.p_, nc.zS, nc.ap),
                                children: [
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(y.E, {
                                            variant: "body-md/normal",
                                            color: "text-default",
                                            children: e0.intl.format(no.default.FUBV1P, {
                                                survey: "https://discord.sjc1.qualtrics.com/jfe/form/SV_3WvT7SqlWpCJ4HQ",
                                            }),
                                        }),
                                    }),
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(y.E, {
                                            variant: "body-md/normal",
                                            color: "text-default",
                                            children: e0.intl.format(no.default.W4MIAG, {
                                                feedback: "https://forms.gle/RbDhW46PMmR39XUP7",
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)(nl.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, i.jsx)(y.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                children: e0.intl.string(no.default.J3HKmx),
                            }),
                            n &&
                                (0, i.jsx)(y.E, {
                                    variant: "body-md/normal",
                                    color: "text-default",
                                    children: e0.intl.format(no.default["9x2vbP"], {
                                        optOutHook: (e) =>
                                            (0, i.jsx)(nr.A, {
                                                onClick: () =>
                                                    t8.A.open(t.id, eJ.BEX.MODERATION, null, eJ.nd0.SAFETY_OVERVIEW),
                                                children: e,
                                            }),
                                    }),
                                }),
                            (0, i.jsx)(y.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                children: e0.intl.string(no.default.KcCY25),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("img", {
                src: "/assets/c42cecffc003efa2.svg",
                alt: e0.intl.string(no.default["UxV/3+"]),
                width: na.T5,
                height: na.T5,
            }),
        ],
    });
}
function nh(e) {
    var t;
    let { guild: n } = e,
        [l, a] = (0, ns.V)("report-to-mod-education-dismissed", !1),
        [o, c] = (0, ns.V)("report-to-mod-education-expanded", !1),
        { transitions: d, setVisible: u } = (function () {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tS.p)(e, {
                    keys: (e) => (e ? "shown" : "hidden"),
                    config: nu,
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
                        className: r()(e2.kL, nc.kL, nd.mainCard),
                        children: [
                            (0, i.jsxs)("div", {
                                className: nc.mG,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: nc.cy,
                                        children: [
                                            (0, i.jsx)(ni.p, {
                                                size: "custom",
                                                width: 28,
                                                height: 28,
                                                color: "currentColor",
                                                className: nc.Mg,
                                            }),
                                            (0, i.jsx)(y.E, {
                                                variant: "body-sm/semibold",
                                                color: "text-strong",
                                                children: e0.intl.string(e0.t.uvGmCx),
                                            }),
                                            (0, i.jsx)(y.E, {
                                                variant: "body-sm/semibold",
                                                color: "text-strong",
                                                children: "\u2014",
                                            }),
                                            (0, i.jsx)(j.D, {
                                                variant: "body-md/semibold",
                                                color: "text-strong",
                                                children: e0.intl.string(no.default["95qQRB"]),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(N.D, {
                                        onClick: () => a(!0),
                                        children: (0, i.jsx)(tT.P, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: nc.ut,
                                        }),
                                    }),
                                ],
                            }),
                            m((e, t) =>
                                t
                                    ? (0, i.jsxs)(tC.animated.div, {
                                          style: e,
                                          children: [
                                              (0, i.jsx)("hr", { className: nc.me }),
                                              (0, i.jsx)(nm, { guild: n }),
                                          ],
                                      })
                                    : null,
                            ),
                        ],
                    })
                  : null,
          );
}
var ng = n(191842),
    nx = n(788026),
    nf = n(21161),
    nj = n(796774),
    nv = n(209932),
    np = n(174459),
    nb = n(102597),
    nA = n(904054),
    nC = n(584014),
    ny = n(536283);
n(980504);
var nN = n(406271);
function nE(e) {
    let { className: t, sound: n, playSound: l, isPlaying: a, text: o } = e,
        c = n?.emojiId != null || n?.emojiName != null,
        d = e0.intl.formatToPlainString(e0.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name }),
        u = s.useCallback(() => {
            (np.default.track(eJ.HAw.MODERATOR_QUEUE_ACTION, { guild_id: eW.A.getGuildId(), action: "airhorn" }),
                null != l && l());
        }, [l]);
    return (0, i.jsxs)(N.D, {
        "aria-label": d,
        tag: "span",
        onClick: u,
        className: r()(nN.Ls, nN.oR, { [nN.he]: !0 === a }, t),
        children: [
            c && (0, i.jsx)(nx.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: nN.JS }),
            (0, i.jsx)("span", { children: ` ${o} ` }),
        ],
    });
}
function nS(e) {
    let { containerRef: t, text: n } = e,
        l = s.useRef(null),
        a = (0, x.bG)([nv.A], () => nv.A.getSoundsForGuild("0")?.find((e) => "airhorn" === e.name)),
        { createMultipleConfettiAt: r } = s.useContext(nf.x),
        o = (0, x.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { isPlaying: c, playSound: d } = (function (e) {
            let { isPlaying: t, playSound: n } = (0, nC.A)(null != e ? (0, nb.A)(e.soundId) : null);
            return {
                isPlaying: t,
                playSound: s.useCallback(async () => {
                    let t = (0, nA.A)(e?.volume ?? 1);
                    return !!(await n({ volume: t }));
                }, [n, e?.volume]),
            };
        })(a);
    (0, D.Ay)(() => {
        (0, nj.E7)();
    });
    let u = s.useCallback(async () => {
        if ((await d()) && (l.current?.addAnimation(), !o && t?.current != null)) {
            let e = t.current.getBoundingClientRect(),
                n = { x: e.left + e.width / 2, y: e.top + e.height / 3 },
                l = ny.uI[Math.floor(Math.random() * ny.uI.length)];
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
function nT() {
    let e = s.useRef(null);
    return (0, i.jsxs)(nl.B, {
        className: nN.kL,
        direction: "vertical",
        align: "center",
        justify: "center",
        padding: { top: 24, bottom: 24 },
        ref: e,
        children: [
            (0, i.jsx)(ng._, { size: "custom", width: 48, height: 48 }),
            (0, i.jsxs)(nl.B, {
                direction: "vertical",
                align: "center",
                justify: "center",
                children: [
                    (0, i.jsx)(j.D, {
                        className: nN.wx,
                        variant: "heading-sm/medium",
                        children: e0.intl.string(no.default.h6QNky),
                    }),
                    (0, i.jsx)(y.E, {
                        className: nN.Qq,
                        variant: "body-md/medium",
                        color: "text-subtle",
                        children: e0.intl.format(no.default["8N4c58"], {
                            airhornHook: (t) => (0, i.jsx)(nS, { containerRef: e, text: t }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
var nI = n(34457),
    n_ = n(317525),
    nM = n(44234),
    nR = n(625494),
    nk = n(927813),
    nw = n(935208),
    nP = n(387255);
function nL(e) {
    let { channelName: t, guildId: l, tagFilter: a, channel: r } = e,
        o = (0, eb.S4)(r),
        c = (0, to.AI)(r),
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
        g = !m && o && !d,
        x = s.useCallback(
            () =>
                g
                    ? u()
                    : c
                      ? void (r.isGameInvitesChannel() ? (0, H.d)(r) : nR._.dispatch(eJ.jej.FOCUS_COMPOSER_TITLE))
                      : (0, eJ.FXj)(),
            [u, g, c, r],
        );
    return (0, i.jsxs)("div", {
        className: tK.k,
        children: [
            (0, i.jsx)(j.D, {
                className: tK.w,
                variant: "heading-sm/semibold",
                children: m
                    ? e0.intl.formatToPlainString(e0.t.lvPci0, { numTags: a.size })
                    : e0.intl.string(e0.t.PwTMG0),
            }),
            (0, i.jsx)(y.E, {
                color: "text-default",
                variant: "body-sm/normal",
                children: m
                    ? e0.intl.formatToPlainString(e0.t.AAeye1, { numTags: a.size })
                    : e0.intl.formatToPlainString(e0.t.YtsXFD, { channelName: t }),
            }),
            h &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tU.h, { size: 16 }),
                        (0, i.jsx)(E.$, {
                            text: g ? e0.intl.string(e0.t.DgatTQ) : e0.intl.string(e0.t.wOKE8I),
                            variant: "secondary",
                            onClick: x,
                        }),
                    ],
                }),
        ],
    });
}
var nD = n(253913),
    nO = n(986359);
let nG = { width: 28, height: 28 },
    nF = { width: 20, height: 20, borderRadius: 10 };
function nz(e) {
    (0, tA.bh)({ onboardingCTA: e });
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
function nH(e) {
    let { guild: t, roles: n } = e;
    return (0, i.jsx)("div", {
        className: nO.Ei,
        "aria-label": e0.intl.formatToPlainString(e0.t.PCs0oo, { numRoles: n.length }),
        children: n.map((e) =>
            (0, i.jsx)(tD.b_, { role: e, canRemove: !1, onRemove: eJ.FXj, guildId: t.id, className: nO.Yq }, e.id),
        ),
    });
}
let nB = { mass: 1, tension: 250, friction: 18, clamp: !0 };
function nV(e) {
    let { handleHide: t } = e;
    return (0, i.jsx)(N.D, {
        onClick: t,
        className: nO.b,
        "aria-label": e0.intl.string(e0.t.WAI6xu),
        children: (0, i.jsx)(tT.P, { size: "md", color: "currentColor", className: nO.ut }),
    });
}
function nW(e) {
    let { expanded: t, onClick: n } = e;
    return (0, i.jsx)(N.D, {
        onClick: n,
        className: nO.b,
        "aria-label": t ? e0.intl.string(e0.t.iTcuma) : e0.intl.string(e0.t.dcl9MQ),
        children: t
            ? (0, i.jsx)(tI.g, { size: "xs", color: "currentColor", className: nO.ut })
            : (0, i.jsx)(t_._, { size: "xs", color: "currentColor", className: nO.ut }),
    });
}
let n$ = (e) => {
    var t;
    let { hasAnyThread: l, hasActiveThreads: a, channel: o } = e,
        c = (0, G.Ay)(o),
        { onboardingExpanded: u } = (0, eE.kU)((e) => {
            let { onboardingExpanded: t } = e;
            return { onboardingExpanded: t };
        }, d.x),
        { tagFilter: m } = (0, ep.R)(o.id),
        h = (0, x.bG)([t5.A], () => t5.A.getGuild(o.getGuildId())),
        g = (0, eb.S4)(o),
        { transitions: f, setVisible: p } = (function () {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tS.p)(e, {
                    keys: (e) => (e ? "shown" : "hidden"),
                    config: nB,
                    from: { opacity: 0 },
                    enter: { opacity: 1 },
                    leave: { opacity: 0 },
                    unique: !0,
                }),
                setVisible: t,
            };
        })(),
        b = (0, tS.p)(u, {
            from: { maxHeight: 0 },
            enter: { maxHeight: 500 },
            leave: { maxHeight: 0 },
            config: { duration: 200 },
        }),
        A = s.useCallback((e) => {
            e.clickHandler?.();
        }, []),
        C = ((t = o.id), s.useCallback(() => (p(!1), tf.A.hideAdminOnboarding(t, !0)), [t, p])),
        {
            onboardingSteps: E,
            isDismissed: S,
            isHidden: I,
            isAllDone: _,
        } = (function (e) {
            var t;
            let l,
                a,
                r,
                o,
                { guild: c, channel: d, hasAnyThread: u, handleHide: m } = e,
                [h, g] = s.useState(!1),
                f = (0, t4.l)(d.id),
                j = (0, x.bG)([tx.A], () => tx.A.hasHidden(d.id)),
                v =
                    ((l = c?.id),
                    (a = (0, x.bG)([n_.A], () => (null != l ? n_.A.getSortedRoles(l) : void 0))),
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
                                    ((t = (0, tO.A)(d)
                                        ? ty.kg(eJ.xBc.VIEW_CHANNEL, eJ.xBc.SEND_MESSAGES)
                                        : eJ.xBc.SEND_MESSAGES),
                                    (s =
                                        (l =
                                            null != c
                                                ? (0, nP.N)(a, d, t).filter(
                                                      (e) =>
                                                          d.permissionOverwrites.hasOwnProperty(e.id) || (0, nI.Oy)(e),
                                                  )
                                                : []).length > 0),
                                    (r = l.some((e) => (0, nI.Oy)(e))),
                                    {
                                        name: e0.intl.string(e0.t["/Ax2gs"]),
                                        description: e0.intl.string(e0.t.gAIOfg),
                                        isDone: s && r,
                                        shouldWarn: s && !r,
                                        children: s ? (0, i.jsx)(nH, { guild: c, roles: l }) : null,
                                        clickHandler: () => {
                                            (nz(nD._G.PERMISSIONS),
                                                (0, tE.openModalLazy)(
                                                    async () => {
                                                        let { default: e } = await Promise.all([
                                                            n.e("594996"),
                                                            n.e("317110"),
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
                                        name: e0.intl.string(e0.t.UgJu1e),
                                        description: e0.intl.string(e0.t["3C6/G1"]),
                                        clickHandler: () => {
                                            (nz(nD._G.GUIDELINES), tL.Ay.open(d.id, void 0, eJ.b7d.TOPIC));
                                        },
                                        isDone: o,
                                    }),
                                ),
                            d?.isGameInvitesChannel() &&
                                j.addStep(
                                    ((m = null != d.availableTags && d.availableTags.length > 1),
                                    {
                                        name: e0.intl.string(t$.default["5a7Pjb"]),
                                        description: e0.intl.string(t$.default["MKZ+Ky"]),
                                        clickHandler: () => {
                                            (nz(nD._G.RECOMMENDED_TAGS),
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
                                (x = null != d.availableTags && d.availableTags.length > h),
                                {
                                    name: e0.intl.string(e0.t.xiBFCi),
                                    description: e0.intl.string(e0.t.wCv4Oz),
                                    clickHandler: () => {
                                        (nz(nD._G.TAGS),
                                            tL.Ay.open(d.id),
                                            (0, tE.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("143172"),
                                                    n.e("347326"),
                                                ]).then(n.bind(n, 950989));
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
                                    name: e0.intl.string(e0.t.QlyC9s),
                                    description: e0.intl.string(e0.t["+50LJg"]),
                                    clickHandler: () => {
                                        (nz(nD._G.DEFAULT_REACTION),
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
                                        name: e0.intl.string(e0.t["6A0O64"]),
                                        description: v
                                            ? e0.intl.string(e0.t["8hI5vr"])
                                            : e0.intl.format(e0.t.ysxcAw, {
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
                                            (nz(nD._G.CREATE_POST), d.isGameInvitesChannel())
                                                ? (0, H.d)(d)
                                                : nR._.dispatch(eJ.jej.FOCUS_COMPOSER_TITLE);
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
                    (r = nw.default.extractTimestamp(t)),
                    !el()().isBefore(el()(r).add(el().duration(15, "days"))));
            return (
                (o = s.useRef(0)),
                s.useEffect(
                    () => (
                        h || !p || b
                            ? clearTimeout(o.current)
                            : (o.current = setTimeout(() => {
                                  m();
                              }, 60 * nk.A.Millis.SECOND)),
                        () => clearTimeout(o.current)
                    ),
                    [p, b, m, h],
                ),
                { onboardingSteps: v, isHidden: j, isDismissed: f, isAllDone: p }
            );
        })({ guild: h, channel: o, hasAnyThread: l, handleHide: C }),
        M = !I && !S,
        R = (0, eE.ST)(),
        k = o.isMediaChannel();
    function w(e) {
        return R.getState().setOnboardingExpanded(e);
    }
    return ((0, D.Ay)(() => {
        _ && M && C();
    }),
    !(function (e) {
        let { isAllDone: t, isVisible: n, canManageChannel: l, guildId: i, channel: a } = e,
            r = (0, x.bG)([n_.A], () => (null != i ? n_.A.partitionVersion(i) : void 0)),
            o = s.useCallback(() => {
                nR._.dispatch(eJ.jej.REMEASURE_TARGET);
            }, []);
        s.useEffect(() => {
            o();
        }, [o, t, n, l, r, a.id, a.permissionOverwrites]);
    })({ isAllDone: _, isVisible: M, canManageChannel: g, guildId: h?.id, channel: o }),
    s.useEffect(() => {
        S || p(!I);
    }, [S, p, I]),
    (0, D.Ay)(() => {
        (l && M) || w(!0);
    }),
    null == h)
        ? null
        : (0, J.Fo)(o)
          ? a || 0 !== m.size
              ? m.size > 0
                  ? null
                  : (0, i.jsx)(nh, { guild: h })
              : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(nh, { guild: h }), (0, i.jsx)(nT, {})] })
          : M && g
            ? k
                ? l
                    ? null
                    : (0, i.jsx)(nn, { channel: o })
                : (0, i.jsx)(i.Fragment, {
                      children: f((e, t) =>
                          t
                              ? (0, i.jsx)(tC.animated.div, {
                                    style: e,
                                    className: nO.kL,
                                    children: (0, i.jsxs)("div", {
                                        className: nO.iE,
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: nO.U1,
                                                children: (0, i.jsxs)(v.F, {
                                                    component: (0, i.jsx)(j.D, {
                                                        variant: "heading-sm/semibold",
                                                        children: e0.intl.string(e0.t.LhlgY9),
                                                    }),
                                                    children: [
                                                        (0, i.jsx)(j.D, {
                                                            variant: "heading-sm/medium",
                                                            className: nO.wx,
                                                            children: e0.intl.format(e0.t["9L+8bz"], {
                                                                numCompleted: E.completedSteps.toString(),
                                                                numSteps: E.steps.length.toString(),
                                                            }),
                                                        }),
                                                        (0, i.jsxs)(y.E, {
                                                            variant: "body-xs/normal",
                                                            className: nO.l2,
                                                            children: [
                                                                (0, i.jsx)(tM.CircleInformationIcon, {
                                                                    size: "xxs",
                                                                    color: "currentColor",
                                                                    className: nO.Kk,
                                                                }),
                                                                e0.intl.string(e0.t.znhX2R),
                                                            ],
                                                        }),
                                                        (0, i.jsx)(nW, { expanded: u, onClick: () => w(!u) }),
                                                        (0, i.jsx)(nV, { handleHide: C }),
                                                    ],
                                                }),
                                            }),
                                            b((e, t) =>
                                                t
                                                    ? (0, i.jsx)(tC.animated.div, {
                                                          style: e,
                                                          className: nO.qI,
                                                          children: (0, i.jsx)("ol", {
                                                              className: nO.D4,
                                                              children: E.getSteps().map((e) =>
                                                                  (0, i.jsxs)(
                                                                      N.D,
                                                                      {
                                                                          tag: "li",
                                                                          "aria-label": e.name,
                                                                          onClick: () => A(e),
                                                                          className: r()(nO._h, { [nO.so]: e.isDone }),
                                                                          children: [
                                                                              e.shouldWarn
                                                                                  ? (0, i.jsx)(T.E, {
                                                                                        size: "custom",
                                                                                        width: 20,
                                                                                        height: 20,
                                                                                        color: tN.A.colors
                                                                                            .ICON_FEEDBACK_CRITICAL,
                                                                                        className: nO.FY,
                                                                                    })
                                                                                  : e.isDone
                                                                                    ? (0, i.jsx)(tR.fk, {
                                                                                          color: tN.A.colors
                                                                                              .STATUS_POSITIVE_BACKGROUND
                                                                                              .css,
                                                                                          icon: tk.CheckmarkLargeIcon,
                                                                                          style: nF,
                                                                                          className: nO.FY,
                                                                                      })
                                                                                    : (0, i.jsx)(tR.fk, {
                                                                                          disableColor: !0,
                                                                                          icon: (0, tw.k)(nM.A),
                                                                                          style: nG,
                                                                                          className: r()(nO.FY, nO.so),
                                                                                      }),
                                                                              (0, i.jsxs)("div", {
                                                                                  className: nO.PM,
                                                                                  children: [
                                                                                      (0, i.jsx)(y.E, {
                                                                                          variant: "body-md/medium",
                                                                                          color: e.isDone
                                                                                              ? "text-default"
                                                                                              : "text-strong",
                                                                                          className: nO.u,
                                                                                          children: e.name,
                                                                                      }),
                                                                                      (0, i.jsx)(y.E, {
                                                                                          variant: "body-sm/normal",
                                                                                          color: "text-default",
                                                                                          className: nO.XK,
                                                                                          children: e.description,
                                                                                      }),
                                                                                      e.children,
                                                                                  ],
                                                                              }),
                                                                              (0, i.jsx)(tP._, {
                                                                                  size: "custom",
                                                                                  color: "currentColor",
                                                                                  width: 12,
                                                                                  className: nO.FY,
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
                ? (0, i.jsx)(tY, { channel: o, tagFilter: m })
                : (0, i.jsx)(nL, { channelName: c ?? "", guildId: o.guild_id, tagFilter: m, channel: o });
};
var nq = n(717421),
    nK = n(622629),
    nY = n(22231),
    nQ = n(46054),
    nX = n(257701);
let nJ = s.memo(function (e) {
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
        f = (0, nq.z)({ opacity: +!!o, maxHeight: 500 * !!o, config: { duration: 300 }, onRest: () => x(!o) });
    return null != t.topic && t.topic.length > 0
        ? (0, i.jsx)(tC.animated.div, {
              style: f,
              className: g ? nX.kK : void 0,
              children: (0, i.jsxs)("div", {
                  className: nX.kL,
                  children: [
                      (0, i.jsxs)("div", {
                          className: nX.N1,
                          children: [
                              (0, i.jsxs)(j.D, {
                                  variant: "heading-lg/semibold",
                                  className: nX.$4,
                                  children: [
                                      (0, i.jsx)(nK.B, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                          height: 20,
                                      }),
                                      e0.intl.string(e0.t["4d4T4l"]),
                                      c &&
                                          (0, i.jsx)(N.D, {
                                              onClick: function () {
                                                  tL.Ay.open(t.id, void 0, eJ.b7d.TOPIC);
                                              },
                                              tag: "span",
                                              className: nX.vk,
                                              children: (0, i.jsx)(nY.PencilIcon, {
                                                  size: "xs",
                                                  color: "currentColor",
                                              }),
                                          }),
                                  ],
                              }),
                              (0, i.jsx)(N.D, {
                                  "aria-label": e0.intl.string(e0.t.cpT0Cq),
                                  className: nX.vk,
                                  onClick: function () {
                                      a.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, i.jsx)(tT.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: nX.iQ,
                          children: [
                              (0, i.jsx)(y.E, {
                                  selectable: !0,
                                  variant: "body-sm/normal",
                                  color: "text-default",
                                  style: { maxHeight: 220 },
                                  className: r()(nX.I4, e4.PT),
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
                                      className: nX.jP,
                                      children: [
                                          (0, i.jsx)("div", { className: nX.D7 }),
                                          (0, i.jsx)("div", {
                                              className: nX.kx,
                                              children: (0, i.jsx)(N.D, {
                                                  className: nX.DD,
                                                  onClick: function () {
                                                      (0, tE.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("146697"),
                                                              n.e("745457"),
                                                          ]).then(n.bind(n, 494664));
                                                          return (n) => (0, i.jsx)(e, { ...n, channel: t });
                                                      });
                                                  },
                                                  children: (0, i.jsxs)(y.E, {
                                                      variant: "body-sm/semibold",
                                                      color: "text-brand",
                                                      className: nX.ur,
                                                      children: [
                                                          e0.intl.string(e0.t.Vu7odK),
                                                          (0, i.jsx)(t_._, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: nX.yS,
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
var nZ = n(621466),
    n0 = n(643135),
    n1 = n(884496),
    n2 = n(281595),
    n4 = n(408278),
    n3 = n(952270),
    n8 = n(39623),
    n5 = n(278416),
    n7 = n(465532),
    n9 = n(608299),
    n6 = n(355622),
    le = n(530134),
    lt = n(845207),
    ln = n(625928),
    ll = n(960850),
    li = n(702841),
    ls = n(364522),
    la = n(215497),
    lr = n(914905),
    lo = n(935399),
    lc = n(750943),
    ld = n(844222),
    lu = n(780777),
    lm = n(518960),
    lh = n(160589);
let lg = { scale: 0.95, opacity: 0 },
    lx = { scale: 1, opacity: 1 },
    lf = { scale: 1, opacity: 1 },
    lj = { tension: 2400, friction: 52 },
    lv = `.${lh.EJ}`,
    lp = { behavior: "smooth", block: "nearest", inline: "nearest" };
function lb(e) {
    let { channelId: t, onClick: n, onClose: l, onMouseEnter: a, listItemProps: r } = e,
        o = s.useRef(null),
        c = (0, x.bG)([eH.A], () => eH.A.getChannel(t), [t]);
    return (
        et()(null != c, "Forum Channel is null"),
        (0, i.jsxs)(N.D, {
            ...r,
            "aria-label": e0.intl.string(e0.t.nzoF5p),
            className: lh.EJ,
            onMouseEnter: a,
            onClick: function (e) {
                (0 === e.detail && o.current?.activateUploadDialogue(), (0, tA.ri)({ isMobile: !1 }), n?.());
            },
            children: [
                (0, i.jsx)(lu.A, {
                    className: lh.Fg,
                    ref: o,
                    onChange: function (e) {
                        if (null == c) return;
                        l?.();
                        let { files: t } = e.currentTarget;
                        (null != t &&
                            (0, lm.R)(t, c, td.C.FirstThreadMessage, { requireConfirm: !0, origin: "file_picker" }),
                            (e.currentTarget.value = ""));
                    },
                    multiple: c.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
                (0, i.jsx)(lc.X, { size: "custom", color: "currentColor", width: 28, height: 28, className: lh.T3 }),
            ],
        })
    );
}
function lA(e) {
    let { channelId: t, closePopout: n } = e,
        [l, a] = s.useState(!1),
        { reducedMotion: r } = s.useContext(ld.C),
        o = (0, nq.z)({ from: r.enabled ? lx : lg, to: lf, config: lj }, "animate-always"),
        c = (0, x.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        d = (0, x.bG)([th.A], () => th.A.getUploads(t, n6.oU.CREATE_FORUM_POST.drafts.type)),
        g = (0, m.Ay)({
            id: "forum-composer-attachments-popout",
            isEnabled: c,
            orientation: h.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (
        (0, lo.Ay)(() => {
            g.focusLastVisibleItem();
        }),
        (0, i.jsx)(tC.animated.div, {
            className: lh.jC,
            onMouseLeave: function () {
                l || c || n();
            },
            onFocus: function (e) {
                e.target.scrollIntoView(lp);
            },
            style: o,
            children: (0, i.jsx)(ls.Ip, {
                orientation: "horizontal",
                className: lh.SW,
                scrollbarGutter: !1,
                fade: !0,
                disableFocusRingScope: !0,
                children: (0, i.jsx)(u.hD, {
                    navigator: g,
                    children: (0, i.jsx)(u.PR, {
                        children: (e) => {
                            let { ref: n, ...l } = e;
                            return (0, i.jsxs)("div", {
                                className: lh.p8,
                                ref: n,
                                ...l,
                                children: [
                                    d.map((e) =>
                                        (0, i.jsx)(
                                            lr.A,
                                            {
                                                channelId: t,
                                                draftType: n6.oU.CREATE_FORUM_POST.drafts.type,
                                                upload: e,
                                                keyboardModeEnabled: c,
                                                hideFileName: !0,
                                                size: la.L.SMALL,
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
    return (0, i.jsx)(lb, {
        channelId: t,
        onClick: function () {
            n(!0);
        },
        onClose: function () {
            (n(!1),
                requestAnimationFrame(() => {
                    (0, nZ.vq)(document.activeElement, HTMLElement) && document.activeElement.scrollIntoView(lp);
                }));
        },
        listItemProps: l,
    });
}
function ly(e) {
    let { channelId: t } = e,
        [n, l] = s.useState(!1),
        a = s.useRef(null),
        r = (0, x.bG)([th.A], () => th.A.getUploads(t, n6.oU.CREATE_FORUM_POST.drafts.type)),
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
                let e = a.current?.querySelector(lv);
                e?.focus();
            });
            return () => cancelAnimationFrame(e);
        }, [o]),
        (0, i.jsxs)("div", {
            className: lh.kL,
            ref: a,
            onBlur: function (e) {
                null == e.relatedTarget ||
                    a.current?.contains(e.relatedTarget) ||
                    (e.relatedTarget?.closest('[role="dialog"]') == null && u());
            },
            children: [
                c
                    ? !n &&
                      (0, i.jsxs)(N.D, {
                          "aria-label": e0.intl.string(e0.t.nzoF5p),
                          className: lh.fY,
                          tabIndex: 0,
                          onClick: d,
                          onFocus: function () {
                              (d(),
                                  c &&
                                      requestAnimationFrame(() => {
                                          let e = a.current?.querySelector(lv);
                                          e?.focus();
                                      }));
                          },
                          onMouseEnter: d,
                          children: [
                              (0, i.jsx)(lr.J, { upload: r[0], size: la.L.SMALL }),
                              (0, i.jsx)(y.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-overlay-light",
                                  className: lh.qS,
                                  children: o,
                              }),
                          ],
                      })
                    : (0, i.jsx)(lb, { onMouseEnter: d, channelId: t }),
                n && (0, i.jsx)(lA, { channelId: t, closePopout: u }),
            ],
        })
    );
}
var lN = n(793654);
function lE(e) {
    let { parentChannel: t } = e,
        n = (0, li.yK)([th.A], () => {
            let e = th.A.getUploads(t.id, n6.oU.CREATE_FORUM_POST.drafts.type);
            return e?.filter((e) => !0 !== e.isThumbnail);
        });
    return (0, i.jsxs)("div", {
        className: lN.kL,
        children: [
            (0, i.jsx)(y.E, {
                variant: "body-md/semibold",
                color: "text-muted",
                children: e0.intl.string(e0.t.omKGKu),
            }),
            (0, i.jsx)(y.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: e0.intl.string(e0.t["zUjLl+"]),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(ls.Ip, {
                    className: lN.mw,
                    orientation: "horizontal",
                    scrollbarGutter: !1,
                    fade: !0,
                    children: (0, i.jsxs)("div", {
                        className: lN.p8,
                        children: [
                            n.map((e) =>
                                (0, i.jsx)(
                                    lr.A,
                                    {
                                        channelId: t.id,
                                        draftType: n6.oU.CREATE_FORUM_POST.drafts.type,
                                        upload: e,
                                        keyboardModeEnabled: !0,
                                        hideFileName: !0,
                                        size: la.L.SMALL,
                                    },
                                    e.id,
                                ),
                            ),
                            (0, i.jsx)(lb, { channelId: t.id }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
var lS = n(241326),
    lT = n(851023),
    lI = n(915089),
    l_ = n(607470),
    lM = n(703007),
    lR = n(635377),
    lk = n.n(lR);
let lw = "absolute",
    lP = new (lk())({ max: 100 });
function lL(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: l } = e;
    return s.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: l } = e,
                    i = `${t}-${n}-${l}`,
                    s = lP.get(i);
                if (null != s) return s;
                {
                    let e = (function (e, t, n) {
                        if (0 === n) return [];
                        if (1 === n) return [{ width: e, height: t, top: 0, left: 0, position: lw }];
                        if (2 === n) {
                            let n = Math.ceil((e - 4) / 2);
                            return [
                                { top: 0, left: 0, position: lw, width: n, height: t },
                                { top: 0, left: n + 4, position: lw, width: n, height: t },
                            ];
                        }
                        if (3 === n) {
                            let n = Math.ceil((e - 4) / 2),
                                l = Math.ceil((t - 4) / 2);
                            return [
                                { top: 0, left: 0, position: lw, width: n, height: t },
                                { top: 0, left: n + 4, position: lw, width: n, height: l },
                                { top: l + 4, left: n + 4, position: lw, width: n, height: l },
                            ];
                        }
                        {
                            let n = Math.ceil((e - 4) / 2),
                                l = Math.ceil((t - 4) / 2);
                            return [
                                { top: 0, left: 0, position: lw, width: n, height: l },
                                { top: l + 4, left: 0, position: lw, width: n, height: l },
                                { top: 0, left: n + 4, position: lw, width: n, height: l },
                                { top: l + 4, left: n + 4, position: lw, width: n, height: l },
                            ];
                        }
                    })(n, l, t);
                    return (lP.set(i, e), e);
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
var lO = n(304162),
    lG = n(435558),
    lF = n(724442),
    lz = n(998218),
    lU = n(36491),
    lH = n(131360);
let lB = [{ name: "Media Post Thumbnail", extensions: ["jpg", "jpeg", "png", "gif", "webp"] }],
    lV = (0, lI.Ld)();
function lW(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: l } = e,
        s = lL({ numAttachments: t.length, containerWidth: n, containerHeight: l });
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsx)(
                "div",
                {
                    style: s[t],
                    children:
                        !0 === e.isVideo
                            ? (0, i.jsx)(l_.A, { src: e.src, className: lH.xn, "aria-hidden": !0 })
                            : (0, i.jsx)("img", { src: e.src, className: lH.xn, "aria-hidden": !0, alt: e?.alt ?? "" }),
                },
                e.src,
            ),
        ),
    });
}
function l$(e) {
    let { parentChannel: t } = e,
        { textAreaState: l } = (0, eE.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        a = (0, li.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        o = (function (e, t) {
            let { mediaAttachments: n, hasThumbnail: l } = (function (e) {
                    let [t, n] = s.useState(null),
                        l = (0, li.yK)([th.A], () => {
                            let t = th.A.getUploads(e.id, n6.oU.CREATE_FORUM_POST.drafts.type),
                                n = t.find((e) => e.isThumbnail);
                            return null != n ? [n] : t.filter((e) => e.isVideo || e.isImage);
                        }),
                        i = s.useMemo(() => l.some((e) => e.isThumbnail), [l]);
                    return (
                        s.useEffect(() => {
                            let e = [];
                            return (
                                n(
                                    l.slice(0, lO.A8).flatMap((t) => {
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
                i = Math.max(lO.A8 - (n?.length ?? 0), 0),
                { embeds: a } = (function (e, t, n) {
                    let l = s.useRef(new Map()),
                        [, i] = s.useState(null),
                        [a, r] = s.useState(null),
                        o = s.useMemo(
                            () =>
                                lG.debounce((e, n) => {
                                    if (null == n || e || 0 === t) return;
                                    let i = n.match(lz.A.URL_REGEX);
                                    if (null == i || 0 === i.length) {
                                        ((l.current = new Map()), r(null));
                                        return;
                                    }
                                    r(lG.uniq(i).slice(0, lO.A8));
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
                    let c = (0, lF.A)(l),
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
                            let t = (0, lO.m3)(e);
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
                null != c && n9.A.remove(t.id, c.id, n6.oU.CREATE_FORUM_POST.drafts.type);
                let { files: n } = e.currentTarget;
                (null != n &&
                    (0, lm.R)(n, t, n6.oU.CREATE_FORUM_POST.drafts.type, {
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
                (0, tE.openModalLazy)(async () => {
                    let e = c.upload;
                    et()(null != e, "upload should not be null");
                    let { default: l } = await n.e("165778").then(n.bind(n, 342889));
                    return (n) =>
                        (0, i.jsx)(l, {
                            ...n,
                            upload: e,
                            onSubmit: (n) => {
                                let { name: l, description: i, spoiler: s } = n;
                                n9.A.update(t.id, e.id, n6.oU.CREATE_FORUM_POST.drafts.type, {
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
        className: lH.zL,
        innerClassName: lH.Nr,
        onChange: h,
        multiple: !1,
        "aria-hidden": !0,
        filters: lB,
        "aria-describedby": lV,
        "aria-label": u ? e0.intl.string(e0.t.MxJI3f) : e0.intl.string(e0.t.Cbiofa),
        children: u
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(lW, { mediaAttachments: o, containerWidth: m.width, containerHeight: m.height }),
                      (0, i.jsxs)("div", {
                          className: r()(lH.On, { [lH.bP]: o?.length > 2 }),
                          children: [
                              (0, i.jsx)(y.E, {
                                  variant: "body-xs/medium",
                                  color: "text-default",
                                  children: e0.intl.string(e0.t.MxJI3f),
                              }),
                              null == c &&
                                  (0, i.jsx)(nY.PencilIcon, { size: "xs", color: "currentColor", className: lH.IZ }),
                          ],
                      }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(lc.X, {
                          size: "custom",
                          width: 39,
                          height: 39,
                          color: "currentColor",
                          className: lH.T3,
                      }),
                      (0, i.jsx)(y.E, {
                          variant: "body-xs/normal",
                          color: "text-muted",
                          children: e0.intl.string(e0.t.Cbiofa),
                      }),
                  ],
              }),
    });
    return (0, i.jsx)("div", {
        className: lH.iT,
        style: m,
        children:
            null != c
                ? (0, i.jsx)(la.A, {
                      actions: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(lT.A, {
                                  className: lH.XI,
                                  tooltip: e0.intl.string(e0.t.Y8ujqr),
                                  onClick: g,
                                  children: (0, i.jsx)(nY.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                              (0, i.jsx)(lT.A, {
                                  className: lH.XI,
                                  tooltip: e0.intl.string(e0.t.vN7REz),
                                  onClick: () => n9.A.remove(t.id, c.id, n6.oU.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, i.jsx)(lS.TrashIcon, { size: "md", color: "currentColor" }),
                              }),
                          ],
                      }),
                      draftType: n6.oU.CREATE_FORUM_POST.drafts.type,
                      id: c.id,
                      channelId: t.id,
                      handleEditModal: g,
                      keyboardModeEnabled: a,
                      size: la.L.SMALL,
                      className: lH.Xc,
                      children: x,
                  })
                : x,
    });
}
var lq = n(451909),
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
        r = (0, x.bG)([il.Ay], () => (null != s ? il.Ay.getUsableCustomEmojiById(s) : null)),
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
                            : (0, i.jsx)(n5.TagIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: ii.__invalid_emoji,
                              }),
                        (0, i.jsx)(y.E, { variant: "body-md/semibold", color: "text-default", children: l }),
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
        placeholder: e0.intl.string(e0.t.MbhGm7),
        "aria-label": e0.intl.string(e0.t.MbhGm7),
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
let ig = n6.oU.CREATE_FORUM_POST;
function ix(e) {
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
        [b, A] = s.useState(null),
        C = s.useContext(tg.EH),
        y = s.useCallback(() => {
            C.bumpDispatchPriority();
        }, [C]),
        N = (0, x.bG)([eV.A], () => eV.A.can(eJ.xBc.ATTACH_FILES, o)),
        E = (0, x.yK)([th.A], () => th.A.getUploads(o.id, td.C.FirstThreadMessage)),
        S = v && N && f,
        T = o?.isMediaChannel() === !0,
        I =
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
                            (0, nZ.vq)(n.current, HTMLTextAreaElement) && n.current?.focus();
                        }, 0),
                        t.isGameInvitesChannel())
                    )
                        return;
                    ((o && s.length > 0) ||
                        (r.textValue.trim().length > 0 && r.textValue.trim() !== a) ||
                        th.A.getUploads(t.id, td.C.FirstThreadMessage).length > 0) &&
                        i();
                }
            }, [l, t, a, n])),
        _ = (function (e) {
            let { formOpen: t } = (0, eE.kU)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, d.x),
                n = (0, eE.ST)(),
                l = (0, lJ.NV)({ parentChannel: e }),
                i = iN(e),
                { rateLimitPerUser: a } = e,
                r = (0, x.bG)([l0.A], () => l0.A.getSlowmodeCooldownGuess(e.id, l0.R.CreateThread)),
                o = (0, ll._i)(e),
                c = a > 0 && !o && r > 0;
            s.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                (e(null), t(null));
            }, [t, n]);
            let u = s.useCallback(
                (t, l, i) => {
                    let { name: s, textAreaState: a } = n.getState();
                    (null == t && (t = a.textValue), (t = t.trim()));
                    let { content: r } = lq.Ay.parse(e, t);
                    if (
                        ((t = r),
                        (null == l || 0 === l.length) &&
                            (l = lY.A.getStickerPreview(e.id, ig.drafts.type)?.map((e) => e.id)),
                        (null == i || 0 === i.length) && (i = th.A.getUploads(e.id, td.C.FirstThreadMessage)),
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
                        v = l5.A.hasSeen(e.id);
                    if (!h)
                        return (
                            e.isGameInvitesChannel() ||
                                ((0, tA.jr)({ guildId: e.guild_id, channelId: e.id }),
                                v || n.getState().setGuidelinesOpen(!0),
                                f()),
                            { shouldClear: !1, shouldRefocus: !1 }
                        );
                    let { content: p, stickers: b, uploads: A, hasNameError: C, hasMessageError: y } = u(t, s, a);
                    if (
                        (r(C ? l4(0, e0.intl.string(e0.t["71wuR0"])) : null),
                        o(y ? l4(0, e0.intl.string(e0.t["w/BT3G"])) : null),
                        C || y || i || c)
                    )
                        return { shouldClear: !1, shouldRefocus: !0 };
                    try {
                        d(!0);
                        let { valid: t } = await (0, l1.i)({
                            content: p,
                            hasStickers: null != b && b.length > 0,
                            hasAttachments: null != A && A.length > 0,
                            type: ig,
                            channel: e,
                        });
                        if (!t) return { shouldClear: !1, shouldRefocus: !0 };
                        let n = await l(p, b, A);
                        return (
                            (0, tc.GS)(n),
                            tf.A.resort(e.id),
                            (0, lQ.x5)(e.id, ig.drafts.type),
                            m(),
                            g(!1),
                            x(!1),
                            l5.A.markAsSeen(e.id),
                            j(!1),
                            { shouldClear: !0, shouldRefocus: !1 }
                        );
                    } catch (t) {
                        return (
                            t.body?.code === eJ.t02.AUTOMOD_TITLE_BLOCKED
                                ? r(l3(t.body, e))
                                : t.body?.code === eJ.t02.AUTOMOD_MESSAGE_BLOCKED
                                  ? o(l3(t.body, e))
                                  : t.body?.code === eJ.t02.INVALID_FORM_BODY &&
                                    t.body?.errors?.name != null &&
                                    r(l4(3, e0.intl.string(e0.t["71wuR0"]))),
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
                "aria-label": f ? e0.intl.string(e0.t.dq7mAa) : e0.intl.string(e0.t["5h0QOP"]),
                className: r()(ih.kL, { [ih.yZ]: !v }),
                onClick: !v && f ? I : void 0,
                children: (0, i.jsxs)("form", {
                    onMouseDown: y,
                    onFocus: y,
                    onSubmit: (e) => {
                        (e.preventDefault(), !f || o.isGameInvitesChannel() || _());
                    },
                    children: [
                        (0, i.jsxs)("div", {
                            className: ih.KJ,
                            children: [
                                (0, i.jsx)(ij, { parentChannel: o, isSearchLoading: c, inputRef: g }),
                                (0, i.jsxs)("div", {
                                    className: p ? ih.vJ : ih.Zd,
                                    children: [
                                        (0, i.jsx)(iv, {
                                            editorRef: b,
                                            parentChannel: o,
                                            isSearchLoading: c,
                                            numResults: u,
                                            inputRef: g,
                                            canCreatePost: f,
                                        }),
                                        v &&
                                            (0, i.jsx)(iA, {
                                                editorRef: b,
                                                setEditorRef: A,
                                                parentChannel: o,
                                                submit: _,
                                                disabled: !f,
                                            }),
                                        p && (0, i.jsx)(iC, {}),
                                    ],
                                }),
                                S && (T ? (0, i.jsx)(l$, { parentChannel: o }) : (0, i.jsx)(ly, { channelId: o.id })),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: ih.Zd,
                            children: [
                                S && T && (0, i.jsx)(lE, { parentChannel: o }),
                                v && (0, i.jsx)(iS, { className: ih.CN, parentChannel: o, canCreatePost: f }),
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
            h = (0, eb.Hv)(t),
            g = s.useCallback(() => {
                (m.getState().resetFormState(),
                    n7.A.clearDraft(t.id, td.C.ThreadSettings),
                    n7.A.clearDraft(t.id, td.C.FirstThreadMessage),
                    n9.A.clearAll(t.id, td.C.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    l.current?.blur(),
                    (0, tA.py)({ guildId: t.guild_id, channelId: t.id }));
            }, [m, t.id, t.guild_id, l]),
            x = s.useMemo(
                () =>
                    !a &&
                    (r.trim().length > 0 ||
                        (o.textValue.trim().length > 0 && o.textValue.trim() !== h) ||
                        th.A.getUploads(t.id, td.C.FirstThreadMessage).length > 0) &&
                    c
                        ? (0, i.jsx)(nY.PencilIcon, { size: "md", color: "currentColor", className: ih.rD })
                        : (0, i.jsx)(n1.B, { onClear: g, hasContent: a, isLoading: n || u, size: "md" }),
                [n, a, c, r, o.textValue, g, t.id, h, u],
            );
        return (0, i.jsx)("div", { className: ih.VB, children: x });
    }),
    iv = s.memo(function (e) {
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
            p = l5.A.hasSeen(t.id),
            b = (0, eb.Hv)(t),
            A = (0, x.bG)([e$.default], () => e$.default.getCurrentUser());
        (et()(null != A, "current user cannot be null"),
            (0, tg.Vo)({
                event: eJ.jej.FOCUS_COMPOSER_TITLE,
                handler: function () {
                    let e = n.current;
                    (e?.focus(),
                        f.getState().setTitleFocused(!0),
                        t.isGameInvitesChannel() || (f.getState().setFormOpen(!0), f.getState().setHasClickedForm(!0)));
                },
            }));
        let C = s.useCallback(
                async (e) => {
                    let n = e.clipboardData.files[0];
                    if (null != n && n.type.startsWith("image/")) {
                        if (t.isGameInvitesChannel()) return;
                        (e.preventDefault(),
                            await (0, lm.R)([n], t, td.C.FirstThreadMessage, { origin: "clipboard" }),
                            f.getState().setFormOpenFromUserAction());
                    }
                },
                [t, f],
            ),
            y = l8(u, { content: m });
        return (0, i.jsxs)("div", {
            className: ih.gn,
            onPaste: C,
            children: [
                c && g
                    ? (0, i.jsx)(j.D, { variant: "heading-sm/semibold", className: ih.DD, children: m })
                    : (0, i.jsxs)(nl.B, {
                          gap: 4,
                          children: [
                              (0, i.jsx)(n0.d, {
                                  value: m,
                                  placeholder:
                                      !l || t.isGameInvitesChannel()
                                          ? e0.intl.string(e0.t["5h0QOP"])
                                          : c || (h.textValue.length > 0 && h.textValue.trim() !== b)
                                            ? e0.intl.string(e0.t.lU4dDS)
                                            : e0.intl.string(e0.t.CjmivA),
                                  rows: 1,
                                  maxLength: eJ.Ign,
                                  onChange: function (e) {
                                      let n = e.target.value,
                                          l = (0, lX.A)(n, !1);
                                      f.getState().setName(l);
                                      let i = 0 === l.trim().length,
                                          s = 0 === h.textValue.trim().length,
                                          a = h.textValue.trim() === b;
                                      (i && (s || a) && f.getState().setHasClickedForm(!1),
                                          c || tf.A.updateForumSearchQuery(t.id, l));
                                  },
                                  onFocus: function () {
                                      (f.getState().setTitleFocused(!0), f.getState().setBodyFocused(!1));
                                  },
                                  onBlur: function () {
                                      f.getState().setTitleFocused(!1);
                                      let e = (0, lX.A)(m, !0);
                                      e !== m && (f.getState().setName(e), c || tf.A.updateForumSearchQuery(t.id, e));
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
                                                  tf.A.updateForumSearchQuery(t.id, m));
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
                              null != y ? (0, i.jsx)(n2.U, { error: y }) : null,
                          ],
                      }),
                c
                    ? null
                    : (0, i.jsxs)(nl.B, {
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
        ? (0, i.jsx)(k.m, {
              text: e0.intl.string(e0.t["4d4T4l"]),
              children: (0, i.jsx)(n4.K, {
                  size: "sm",
                  variant: "secondary",
                  onClick: function () {
                      l.getState().setGuidelinesOpen(!n);
                  },
                  icon: nK.B,
                  "aria-label": e0.intl.string(e0.t["4d4T4l"]),
              }),
          })
        : null;
}
let ib = s.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            l = new lZ.Ay({ channel_id: t.id, content: n }),
            { content: s } = (0, eG.A)(l, {
                hideSimpleEmbedContent: !0,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0,
            }),
            a = (0, lK.Ay)({ message: l, channel: t, compact: !1 }, s, !1);
        return (0, i.jsx)("div", { className: r()(ih.SL, ih.ly), children: a });
    }),
    iA = s.memo(function (e) {
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
        s.useEffect(() => () => (0, tA._4)({ guildId: t.guild_id, channelId: t.id }), [t.guild_id, t.id]);
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
            A = s.useCallback(
                (e) => {
                    let { value: t, uploads: l, stickers: i } = e;
                    return n(t, i, l);
                },
                [n],
            );
        ((0, tg.Vo)({ event: eJ.jej.TEXTAREA_FOCUS, handler: v }),
            (0, tg.Vo)({ event: eJ.jej.TEXTAREA_BLUR, handler: p }));
        let C = l8(u, { content: h.textValue });
        return (0, i.jsx)("div", {
            className: ih.IP,
            children: (0, i.jsxs)("div", {
                className: ih.hQ,
                children: [
                    m
                        ? (0, i.jsx)(ib, { parentChannel: t, textValue: h.textValue })
                        : (0, i.jsx)("div", {
                              onClick: v,
                              children: (0, i.jsx)(lt.Ay, {
                                  type: ig,
                                  setEditorRef: o,
                                  channel: t,
                                  placeholder: e0.intl.string(e0.t["8IPnv1"]),
                                  textValue: h.textValue,
                                  richValue: h.richValue,
                                  focused: g,
                                  className: ih.gM,
                                  innerClassName: r()(ih.SL, { [ih.cr]: null != C }),
                                  onChange: b,
                                  onFocus: v,
                                  onBlur: p,
                                  onSubmit: A,
                                  promptToUpload: lm.R,
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
                    (0, i.jsx)(n2.U, { error: C }),
                ],
            }),
        });
    });
function iC() {
    return (0, i.jsx)("div", {
        className: ih.fv,
        children: (0, i.jsx)(y.E, {
            variant: "body-sm/normal",
            color: "interactive-text-default",
            children: e0.intl.string(e0.t["WE/cYo"]),
        }),
    });
}
function iy(e) {
    let { textAreaState: t } = (0, eE.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        n = (0, x.yK)([th.A], () => th.A.getUploads(e.id, td.C.FirstThreadMessage)),
        l = (0, x.bG)([lY.A], () => lY.A.getStickerPreview(e.id, ig.drafts.type));
    return s.useMemo(
        () => t.textValue.trim().length > 0 || n.length > 0 || (null != l && l.length > 0),
        [t.textValue, n, l],
    );
}
function iN(e) {
    let t = iy(e),
        { appliedTags: n, name: l } = (0, eE.kU)((e) => {
            let { appliedTags: t, name: n } = e;
            return { appliedTags: t, name: n };
        }, d.x);
    return s.useMemo(() => e.hasFlag(im.lx.REQUIRE_TAG) && 0 === n.size && l.length > 0 && t, [n, l, e, t]);
}
function iE() {
    let { previewing: e } = (0, eE.kU)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, d.x),
        t = (0, eE.ST)(),
        n = s.useCallback(() => {
            (t.getState().setPreviewing(!e), (0, tA.Q_)());
        }, [e, t]),
        l = e ? e0.intl.string(e0.t.ojM1xJ) : e0.intl.string(e0.t.SKNnqq);
    return (0, i.jsx)(k.m, {
        text: l,
        children: (0, i.jsx)(n4.K, {
            variant: "secondary",
            size: "sm",
            onClick: n,
            icon: e ? n3.EyeSlashIcon : n8.EyeIcon,
            "aria-label": l,
        }),
    });
}
let iS = s.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: l } = e,
        { textAreaState: a, name: r } = (0, eE.kU)((e) => {
            let { textAreaState: t, name: n } = e;
            return { textAreaState: t, name: n };
        }, d.x),
        { rateLimitPerUser: o } = t,
        c = o > 0,
        u = (0, x.bG)([l0.A], () => l0.A.getSlowmodeCooldownGuess(t.id, l0.R.CreateThread)),
        m = (0, ll._i)(t),
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
                (0, i.jsx)(i_, { parentChannel: t }),
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
                                        (0, i.jsx)(ln.A, { type: ig, textValue: a.textValue, className: ih.Dq }),
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
                                j && (0, i.jsx)(iE, {}),
                                (0, i.jsx)(iT, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: c && !m && u > 0,
                                }),
                            ],
                        }),
                        (0, i.jsx)(le.A, { type: ig, className: ih.n1, onClick: f, channel: t }, "expression"),
                    ],
                }),
                h &&
                    (0, i.jsx)(y.E, {
                        variant: "body-sm/medium",
                        color: "text-feedback-critical",
                        className: ih.ku,
                        children: e0.intl.string(e0.t.xPfNQi),
                    }),
            ],
        })
    );
});
function iT(e) {
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
        u = iy(t),
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
              text: c ? e0.intl.string(e0.t.pIuQI6) : e0.intl.string(e0.t.TyAuoT),
          });
}
function iI() {
    return Promise.resolve();
}
function i_(e) {
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
        { containerRef: g, containerWidth: x } = iu(),
        f = s.useRef(null),
        j = s.useRef(null),
        [v, p] = s.useState(!0),
        b = (0, l7.OT)(t),
        [A, C] = s.useState(0);
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
            C(l);
        }
    }, [b, v, g, x]),
    0 === b.length)
        ? null
        : (0, i.jsxs)("div", {
              className: ih.Pc,
              ref: g,
              children: [
                  (0, i.jsx)(n5.TagIcon, { size: "xs", color: "currentColor", className: ih.HZ }),
                  (0, i.jsx)("div", {
                      className: ih.Tw,
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
                                      children: b.map((e) =>
                                          (0, i.jsx)(
                                              ir.Ay,
                                              {
                                                  ariaLabel: e0.intl.formatToPlainString(e0.t.FSZVIR, {
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
                      (0, i.jsx)(_.Y, {
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
                                  style: { left: A },
                                  children: (0, i.jsx)(E.$, {
                                      ...e,
                                      size: "sm",
                                      variant: "secondary",
                                      icon: R.a,
                                      iconPosition: "end",
                                      text: e0.intl.string(e0.t.w6T0Yc),
                                  }),
                              }),
                      }),
                  (0, i.jsx)("div", {
                      className: r()(ih.Wk, ih.Dz),
                      children: (0, i.jsx)(E.$, {
                          size: "sm",
                          variant: "secondary",
                          icon: R.a,
                          iconPosition: "end",
                          text: e0.intl.string(e0.t.w6T0Yc),
                      }),
                  }),
              ],
          });
}
var iM = n(602137),
    iR = n(782134),
    ik = n(391242),
    iw = n(191023),
    iP = n(234914),
    iL = n(930125),
    iD = n(282108),
    iO = n(475290);
function iG(e) {
    let { channel: t, facepileRef: n, firstMessage: l, leftAccessory: s } = e,
        a = (0, ej.m)(t.id),
        r = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: iO.GD,
        children: [
            (0, i.jsxs)("div", {
                className: iO.QW,
                children: [
                    (0, i.jsx)("div", {
                        className: iO.mz,
                        children: (0, i.jsx)(na.$k, { channel: t, iconSize: 16, showReadState: !0 }),
                    }),
                    s,
                    a.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("span", { className: iO.xE, children: "\u2022" }),
                                  (0, i.jsxs)("div", {
                                      className: iO.IW,
                                      children: [
                                          (0, i.jsx)(na.gL, { channel: t, userIds: a, facepileRef: n }),
                                          (0, i.jsx)("div", {
                                              className: iO.r$,
                                              children: (0, i.jsx)(ec.n, { themed: !0, dotRadius: 2 }),
                                          }),
                                          (0, i.jsx)(em.Ay, {
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
                    r || null == l ? null : (0, i.jsx)(na.NA, { firstMessage: l, channel: t }),
                    null == l ? null : (0, i.jsx)(na.cn, { firstMessage: l, channel: t }),
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
        { isBlocked: a, isIgnored: r } = (0, x.cf)([iF.A], () => ({
            isBlocked: null != t && iF.A.isBlockedForMessage(t),
            isIgnored: null != t && iF.A.isIgnoredForMessage(t),
        }));
    return a
        ? (0, i.jsx)(iW, { message: e0.intl.string(e0.t.Lkp2fB), containerWidth: l, channel: n, hideTags: s })
        : r
          ? (0, i.jsx)(iW, { message: e0.intl.string(e0.t.yWK7ZM), containerWidth: l, channel: n, hideTags: s })
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
                children: (0, i.jsx)(y.E, {
                    className: iO.Wv,
                    variant: "body-sm/medium",
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
var i3 = n(795435),
    i8 = n(438729),
    i5 = n(659051),
    i7 = n(419477),
    i9 = n(453003),
    i6 = n(627363),
    se = n(140651),
    st = n(290863),
    sn = n(326191);
function sl(e) {
    let { channel: t, className: n, firstMessage: l } = e,
        s = l?.application?.id,
        { data: a } = (0, i6.YY)(s),
        o = (0, x.bG)(
            [st.A],
            () => {
                let e = l?.author.id;
                return null == e || null == s ? null : st.A.getApplicationActivity(e, s);
            },
            [l, s],
        ),
        c = (0, i7.em)({ presenceActivity: o, channel: t, activityActionType: void 0 }),
        { primaryColor: d, secondaryColor: u } = (0, se.A)(a?.getIconURL(128));
    if (null == l || null == l.activity) return null;
    let m = (0, i5.A)(o, l, a?.id),
        h = `linear-gradient(45deg, ${d}, ${u})`,
        g = null != o && m ? (o.details ?? o.name) : a?.name;
    return (0, i.jsxs)("div", {
        className: r()(n, sn.Nr),
        style: { background: h },
        children: [
            (0, i.jsx)(y.E, {
                variant: "body-sm/semibold",
                color: "text-overlay-light",
                className: sn.DD,
                children: g,
            }),
            (0, i.jsx)("div", {
                className: sn.yu,
                children: m
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: sn.Hg, children: c }),
                              (0, i.jsx)(i9.V, { className: sn.$B, activity: o }),
                          ],
                      })
                    : (0, i.jsx)(y.E, {
                          variant: "body-xs/normal",
                          color: "none",
                          className: sn.w5,
                          children: e0.intl.string(t$.default["//c2Xn"]),
                      }),
            }),
        ],
    });
}
var si = n(983851),
    ss = n(607567),
    sa = n(930371);
function sr(e) {
    let { channel: t } = e,
        n = (0, x.bG)([ss.Ay], () => ss.Ay.getVoiceStatesForChannel(t).length, [t]);
    return 0 === n
        ? null
        : (0, i.jsxs)("div", {
              className: sa.a,
              children: [
                  (0, i.jsx)(si.H, { size: "xs", color: tN.A.colors.ICON_FEEDBACK_POSITIVE }),
                  (0, i.jsx)(y.E, { variant: "body-sm/medium", color: "text-feedback-positive", children: n }),
              ],
          });
}
var so = n(227483);
function sc(e) {
    let { message: t, channel: n, containerWidth: l } = e,
        s = iV({ message: t, channel: n, containerWidth: l - 32, hideTags: !0 }),
        { content: a } = (0, i3.A)({ firstMessage: t, formatInline: !1, noStyleAndInteraction: !0 });
    return null != s ? s : (0, i.jsx)(i8.Ay, { message: t, content: a, className: so.BK, compact: !1 });
}
function sd(e) {
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
        g = (0, x.bG)([eU.Ay], () => eU.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: f, loaded: j } = (0, eA.OA)(n),
        { user: v, author: p } = (0, eb.kn)(n),
        b = (0, G.Ay)(n),
        { messageCountText: A } = (0, eb.k6)(n),
        C = s.useRef(null),
        { handleLeftClick: E, handleRightClick: S } = (0, eI.A)({ facepileRef: C, goToThread: l, channel: n });
    s.useEffect(() => {
        u?.(h.current?.ref, m);
    }, [u, m]);
    let T = (0, eb.Mw)(n, iM.T.CREATION_DATE, nD.EG.POSTED_DURATION_AGO),
        { shouldRenderTagsRow: I } = (0, eS.BA)({ channel: n, isNew: !1 }),
        { onFocus: _, ...M } = i2({ id: t, row: o.row, column: o.column, section: o.section, boundaries: c }),
        R = p?.nick ?? v?.username ?? "",
        k = v?.getAvatarURL(n.guild_id, (0, ea.FT)(ea._3.SIZE_24));
    return (0, i.jsxs)(N.D, {
        ref: h,
        tag: "li",
        onClick: E,
        onFocus: _,
        onContextMenu: S,
        className: r()(so.kL, d, { [so.nT]: g }),
        "aria-label": e0.intl.formatToPlainString(e0.t.pgYN6c, { title: b ?? "", count: A }),
        style: { ...a },
        ...M,
        children: [
            (0, i.jsxs)("div", {
                className: so.wx,
                children: [
                    (0, i.jsx)(es.eu, { src: k, size: ea._3.SIZE_24, className: so.my, "aria-label": R }),
                    (0, i.jsx)(y.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        className: so.fh,
                        children: R,
                    }),
                    (0, i.jsx)(y.E, { variant: "body-xs/medium", color: "text-subtle", className: so.vE, children: T }),
                ],
            }),
            (0, i.jsxs)(ei.M, {
                className: so.rf,
                children: [
                    j &&
                        null == f &&
                        (0, i.jsx)(y.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: e0.intl.string(e0.t.mE3KJN),
                        }),
                    null != f ? (0, i.jsx)(sc, { message: f, channel: n, containerWidth: a.width }) : null,
                    I ? (0, i.jsx)(eS.Ay, { channel: n, className: so.GA }) : null,
                    (0, i.jsx)("div", { className: so.oO, children: (0, i.jsx)(sl, { channel: n, firstMessage: f }) }),
                ],
            }),
            (0, i.jsx)(ei.M, {
                className: so.qr,
                children: (0, i.jsx)(iG, {
                    channel: n,
                    firstMessage: f,
                    facepileRef: C,
                    leftAccessory: (0, i.jsx)(sr, { channel: n }),
                }),
            }),
        ],
    });
}
var su = n(313880);
let sm = s.memo(function (e) {
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
        m = (0, U.YG)(u);
    return null == u
        ? null
        : m
          ? (0, i.jsx)(sd, {
                id: t,
                channel: u,
                goToThread: l,
                className: a,
                coords: r,
                gridCoords: o,
                observePostVisibilityAnalytics: d,
                gridSectionBoundaries: c,
            })
          : (0, i.jsx)(sh, {
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
function sh(e) {
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
        f = (0, x.bG)([eU.Ay], () => eU.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: p, loaded: b } = (0, eA.OA)(n),
        A = (0, G.Ay)(n),
        { messageCountText: C } = (0, eb.k6)(n),
        { isNew: E, hasUnreads: S } = (0, eb.X5)(n),
        T = s.useRef(null),
        { handleLeftClick: I, handleRightClick: _ } = (0, eI.A)({ facepileRef: T, goToThread: l, channel: n });
    s.useEffect(() => {
        m?.(g.current, h);
    }, [m, h]);
    let M = (0, eb.Mw)(n, iM.T.CREATION_DATE, nD.EG.POSTED_DURATION_AGO),
        R = (0, na.hf)(n),
        { onFocus: k, ...w } = i2({ id: t, row: d.row, column: d.column, section: d.section, boundaries: u });
    return (0, i.jsxs)("li", {
        ref: g,
        onClick: I,
        onFocus: k,
        onContextMenu: _,
        className: r()(iO.kL, o, { [iO.nT]: f }),
        style: { ...c },
        children: [
            (0, i.jsx)(N.D, {
                onClick: I,
                focusProps: { ringTarget: g },
                onContextMenu: _,
                "aria-label": e0.intl.formatToPlainString(e0.t.pgYN6c, { title: A ?? "", count: C }),
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
                                    (0, i.jsx)(su.A, { channel: n, message: p }),
                                    (0, i.jsx)(y.E, {
                                        variant: "body-xs/normal",
                                        color: "text-default",
                                        className: iO.SD,
                                        children: M,
                                    }),
                                ],
                            }),
                            E
                                ? (0, i.jsx)("div", {
                                      className: iO.Ad,
                                      children: (0, i.jsx)(eo.E, { type: "new", variant: "primary" }),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(v.F, {
                        children: (0, i.jsx)(j.D, {
                            variant: "heading-sm/semibold",
                            className: iO.DD,
                            color: S ? "text-strong" : "text-muted",
                            style: { width: `${c.width - 24}px` },
                            children: R,
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: iO.PU,
                children: (0, i.jsx)(ei.M, {
                    children: (0, i.jsx)(sg, {
                        channel: n,
                        firstMessage: p,
                        isFirstMessageLoaded: b,
                        overrideMedia: a,
                        coords: c,
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: iO.qr,
                children: (0, i.jsx)(ei.M, {
                    children: (0, i.jsx)(iG, { channel: n, firstMessage: p, facepileRef: T }),
                }),
            }),
        ],
    });
}
function sg(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a } = e,
        r = iV({ message: n, channel: t, containerWidth: a.width });
    return null != r
        ? r
        : (0, i.jsx)(sx, { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a });
}
function sx(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a } = e,
        r = (0, x.bG)([eH.A], () => eH.A.getChannel(t.parent_id)),
        { firstMedia: o } = (0, i3.A)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !1 }),
        { hasUnreads: c } = (0, eb.X5)(t),
        d = (0, x.bG)([eV.A], () => eV.A.can(eJ.xBc.MANAGE_MESSAGES, t)),
        u = ez.kt.useSetting(),
        m = ez.gs.useSetting(),
        h = (0, ew.A)(m, d),
        g = (0, eC.no)(n, r, !1),
        f = t.isMediaPost(),
        [j, v] = iH(a.width - 24, f ? iz.SIXTEEN_BY_NINE : iz.THREE_BY_TWO);
    return n?.blocked || null == (s ?? o)
        ? (0, i.jsx)(sb, {
              channel: t,
              firstMessage: n,
              isFirstMessageLoaded: l,
              containerWidth: a.width,
              hasUnreads: c,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(sv, {
                      mediaAttachments: g,
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
function sf(e) {
    return e.preventDefault();
}
let sj = s.memo(function (e) {
        return (0, i.jsx)(i.Fragment, {
            children: (0, eL.LL)({ ...e, analyticsSource: "ForumPostMediaPreviewImage" }),
        });
    }),
    sv = s.memo(function (e) {
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
            h = lL({ numAttachments: m.length, containerWidth: l, containerHeight: a }),
            g = (function (e) {
                let { imageContainerStyles: t, containerWidth: n, containerHeight: l } = e,
                    i = s.useRef(lD(t)),
                    a = s.useRef(n),
                    r = s.useRef(l),
                    o = n > a.current + 100,
                    c = l > r.current + 100;
                return ((o || c) && (i.current = lD(t)), i.current);
            })({ imageContainerStyles: h, containerWidth: l, containerHeight: a }),
            x = (0, iD.O8)(iL.v.GUILD),
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
                                onClick: sf,
                                shouldRenderAccessory: !u && !d,
                            },
                            f = (0, eM.ge)(e.src) ? `${e.src}?format=png` : e.src,
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
                                          ? (0, i.jsx)(eu._, {
                                                ...m,
                                                className: iO.il,
                                                imageClassName: r()(iO.LW, { [iO.cd]: l }),
                                            })
                                          : (0, i.jsx)(sj, {
                                                ...m,
                                                autoPlay: o && !l,
                                                containerClassName: iO.EK,
                                                imageClassName: r()(iO.rp, { [iO.cd]: l }),
                                                responsive: !0,
                                            }),
                                    l &&
                                        (0, i.jsx)("div", {
                                            className: iO.X,
                                            children: (0, i.jsx)(eN.A, { obscureReason: s, iconClassname: iO.yo }),
                                        }),
                                ],
                            },
                            e.src,
                        );
                    }),
                [o, u, d, n, h, g, m, c, x],
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
                                (0, i.jsx)(iR.PlayIcon, {
                                    color: "currentColor",
                                    size: "custom",
                                    width: 22,
                                    height: 22,
                                    className: iO.cU,
                                }),
                            u &&
                                (0, i.jsx)(ik.O, {
                                    size: "custom",
                                    width: 29,
                                    height: 29,
                                    color: "currentColor",
                                    className: iO.cU,
                                }),
                        ],
                    }),
                t.length > 4 &&
                    (0, i.jsx)(sp, {
                        text: (t.length - 4).toString(),
                        icon: iw.ImageIcon,
                        pillClassName: iO.v3,
                        iconClassName: iO.In,
                        textClassName: iO.EY,
                    }),
            ],
        });
    });
function sp(e) {
    let { text: t, icon: n, pillClassName: l, iconClassName: s, textClassName: a } = e;
    return (0, i.jsxs)("div", {
        className: l,
        children: [
            (0, i.jsx)(n, { className: s, color: "currentColor" }),
            (0, i.jsxs)(y.E, { variant: "body-xs/medium", className: a, children: ["+", t] }),
        ],
    });
}
function sb(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, containerWidth: a, hasUnreads: o } = e,
        c = ez.hH.useSetting(),
        [d, u] = iH(a - 24),
        { content: m } = (0, i3.A)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !0 }),
        { shouldRenderTagsRow: h } = (0, eS.BA)({ channel: t, isNew: !1 }),
        g = s.useMemo(() => ({ width: d, height: u }), [d, u]),
        x = o ? iO.kR : iO.b8;
    return (0, i.jsxs)("div", {
        className: iO.Cv,
        style: g,
        children: [
            (0, i.jsxs)("div", {
                className: iO.Qs,
                children: [
                    l &&
                        null == n &&
                        (0, i.jsx)(y.E, {
                            variant: "body-sm/normal",
                            color: o ? "text-default" : "text-muted",
                            children: e0.intl.string(e0.t.mE3KJN),
                        }),
                    l && null != n && (0, i.jsx)(i8.Ay, { message: n, content: m, className: x, compact: c }),
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
    sy = n(477782),
    sN = n(258268);
function sE(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: l, layoutType: s, tagSetting: a } = (0, ep.R)(t.id),
        { showResolvedFlags: r, setShowResolvedFlags: o } = (0, X.T)(t.id),
        c = (0, ep.p)(),
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
    let x = null != t.availableTags && t.availableTags.length > 0;
    return (0, i.jsx)("div", {
        className: sN.k,
        children: (0, i.jsxs)(sC.W, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": d ? e0.intl.string(e0.t["kQN/bi"]) : e0.intl.string(e0.t.DJzbkL),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, i.jsxs)(sy.rX, {
                    label: e0.intl.string(e0.t.f8wNDl),
                    children: [
                        (0, i.jsx)(sy.iD, {
                            id: "sort-by-recent-activity",
                            group: "sort-by",
                            label: e0.intl.string(e0.t.jOPmcI),
                            action: () => u(iM.T.LATEST_ACTIVITY),
                            checked: l === iM.T.LATEST_ACTIVITY,
                        }),
                        (0, i.jsx)(sy.iD, {
                            id: "sort-by-date-posted",
                            group: "sort-by",
                            label: e0.intl.string(e0.t.UIltXd),
                            action: () => u(iM.T.CREATION_DATE),
                            checked: l === iM.T.CREATION_DATE,
                        }),
                    ],
                }),
                t.isModeratorReportChannel() &&
                    (0, i.jsx)(sy.rX, {
                        label: e0.intl.string(no.default.PsM2b4),
                        children: (0, i.jsx)(sy.sL, {
                            id: "resolved-flags-none",
                            label: e0.intl.string(e0.t.XJuakA),
                            action: () => o(!r),
                            checked: r,
                        }),
                    }),
                t.isMediaChannel() || t.isModeratorReportChannel() || t.isGameInvitesChannel()
                    ? null
                    : (0, i.jsxs)(sy.rX, {
                          label: e0.intl.string(e0.t.mFMDSq),
                          children: [
                              (0, i.jsx)(sy.iD, {
                                  id: "view-as-list",
                                  group: "view-as",
                                  label: e0.intl.string(e0.t["NJFr+g"]),
                                  action: () => m(g.C.LIST),
                                  checked: s === g.C.LIST,
                              }),
                              (0, i.jsx)(sy.iD, {
                                  id: "view-as-grid",
                                  group: "view-as",
                                  label: e0.intl.string(e0.t.wKeggb),
                                  action: () => m(g.C.GRID),
                                  checked: s === g.C.GRID,
                              }),
                          ],
                      }),
                x
                    ? (0, i.jsxs)(sy.rX, {
                          label: e0.intl.string(e0.t.Paxaug),
                          children: [
                              (0, i.jsx)(sy.iD, {
                                  id: "match-some",
                                  group: "tag-setting",
                                  label: e0.intl.string(e0.t.rQ0ctQ),
                                  action: () => h(sA.n.MATCH_SOME),
                                  checked: a === sA.n.MATCH_SOME,
                              }),
                              (0, i.jsx)(sy.iD, {
                                  id: "match-all",
                                  group: "tag-setting",
                                  label: e0.intl.string(e0.t.FCXUu0),
                                  action: () => h(sA.n.MATCH_ALL),
                                  checked: a === sA.n.MATCH_ALL,
                              }),
                          ],
                      })
                    : null,
                (0, i.jsx)(sy.rX, {
                    children: (0, i.jsx)(sy.Dr, {
                        id: "reset-all",
                        label: e0.intl.string(e0.t["3b//lO"]),
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
    sT = n(123292);
function sI() {
    return Promise.resolve();
}
function s_(e) {
    let { channel: t, closePopout: n, setPopoutRef: l } = e,
        { enabled: a } = F.A.useConfig({ location: "forum-select-tags-popout" }),
        r = (0, l7.OT)(t),
        { tagFilter: o } = (0, ep.R)(t.id),
        c = (0, ep.p)(),
        d = (0, x.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        h = s.useCallback(
            (e) => {
                ((0, tA.UA)({
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
            "aria-label": e0.intl.string(e0.t.TdqRTh),
            className: ii.kL,
            children: [
                (0, i.jsx)("div", {
                    className: ii.wx,
                    children: (0, i.jsxs)("div", {
                        className: ii.LD,
                        children: [
                            (0, i.jsx)(j.D, {
                                color: "interactive-text-default",
                                variant: "heading-sm/semibold",
                                className: ii.TK,
                                children: e0.intl.string(e0.t.HPu3kq),
                            }),
                            (0, i.jsx)("div", {
                                className: ii.d1,
                                children: (0, i.jsx)(y.E, {
                                    className: ii.lT,
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
                          className: ii.I8,
                          children: (0, i.jsx)(I.C, {
                              variant: "filter",
                              selectionMode: "multiple",
                              label: e0.intl.string(e0.t["P/y+sj"]),
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
                (0, i.jsx)(sT.Q, {
                    "aria-label": e0.intl.string(e0.t["98EPQP"]),
                    onClick: g,
                    text: e0.intl.string(e0.t["98EPQP"]),
                }),
            ],
        })
    );
}
var sM = n(37411);
function sR(e) {
    let { channel: t, guild: n, sidebarState: l } = e;
    return (0, i.jsx)(eE.Cp, { channel: t, children: (0, i.jsx)(sG, { channel: t, guild: n, sidebarState: l }) }, t.id);
}
let sk = new (class {
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
function sw(e) {
    return `forum-grid-header-section-${e}`;
}
function sP(e) {
    let { itemRole: t, coords: n, section: l } = e;
    return (0, i.jsx)(
        "div",
        {
            className: r()(nd.card, nd.archivedDividerRow, nd.columnsSpan),
            style: n,
            "data-item-role": t,
            children: (0, i.jsx)("div", {
                className: nd.emptyMainCard,
                children: (0, i.jsx)(j.D, {
                    variant: "body-sm/medium",
                    className: nd.archivedDivider,
                    id: sw(l),
                    children: e0.intl.string(e0.t["3+LO1w"]),
                }),
            }),
        },
        "section-divider",
    );
}
function sL(e) {
    let { section: t, coords: n, key: l, isShowingSearchResult: s, hasActiveThreads: a } = e;
    return () =>
        2 === t && !s && a
            ? (0, i.jsx)(
                  sP,
                  { section: t, coords: null == n ? void 0 : { ...n, position: "absolute" }, itemRole: "section" },
                  l,
              )
            : null;
}
function sD(e, t) {
    return `card-${e}-${t}`;
}
function sO(e) {
    if ("string" == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function sG(e) {
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
            archivedThreadIds: y,
            searchResults: N,
            canLoadMore: E,
            loadMore: S,
            activeThreadsLoading: T,
            archivedThreadsLoading: I,
            loading: _,
            isSearchLoading: M,
            layoutType: R,
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: l, tagSetting: i } = (0, ep.R)(e.id),
                s = (0, eb.V3)({ channel: e, sortOrder: t, tagFilter: n, tagSetting: i, shouldAutomaticallyAck: !0 }),
                a = (0, x.bG)([ta.A, q.A], () => {
                    let t = ta.A.hasLoaded(e.guild_id),
                        n = q.A.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: r, canLoadMore: o, loadMore: c, loading: d } = (0, tr.Fr)(e, t, n, i),
                { activeThreadIds: u, archivedThreadIds: m } = (0, U.WP)(e, s, r),
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
        k = j.length > 0,
        w = k || y.length > 0;
    (0, U.yk)(t, j);
    let L = (0, K.A)(t),
        G = (0, Q.GH)(t, "forum_channel"),
        { tagFilter: F, tagSetting: z } = (0, ep.R)(t.id);
    ((0, eb.o7)(t, F, z, c),
        (0, D.Ay)(() => {
            !c && f.length > 0 && tf.A.updateForumSearchQuery(t.id, f);
        }));
    let H = (0, eb.O3)(t),
        B = (0, eb.An)(t),
        V = s.useRef(null),
        { observePostVisibilityAnalytics: W } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: l } = e;
            tb({ guildId: t, channelId: n });
            let i = s.useRef(null),
                a = s.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let l = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, tp.xx)(e, t, l) : (0, tp.O_)(e, t, l);
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
                            null == e ? (0, tp.O_)(n, t, Date.now()) : i.current?.observe(e);
                        },
                        [n],
                    ),
                }
            );
        })({ scrollerRef: V, channelId: t.id, guildId: t.guild_id }),
        $ = R === g.C.GRID,
        { searchQuery: Z } = (0, eb.cA)({ channelId: t.id }),
        ee = null != N && null != Z && Z.length > 0,
        et = s.useRef(null),
        { containerRef: en, containerWidth: el } = iu(),
        ei = (0, x.bG)([eU.Ay, eH.A], () => {
            let e = eU.Ay.getSidebarState(t.id);
            if (e?.type !== ts.PE.VIEW_CHANNEL) return null;
            let n = eH.A.getChannel(e.channelId);
            return null != n && n.isThread() ? n : null;
        });
    s.useEffect(() => {
        null == et.current && null != ei && (et.current = ei.id);
    }, [ei]);
    let { columns: es } = s.useMemo(() => ($ ? sk.getRenderOptions(el) : iU), [$, el]),
        ea = s.useMemo(() => (_ ? Math.round((window.innerHeight - 200) / 118) : 0), [_]),
        { showResolvedFlags: er } = (0, X.T)(t.id),
        eo = t.isModeratorReportChannel(),
        ec = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iB(sk.getWidth(el))) * es;
            return T ? e : 0;
        }, [el, es, T]),
        ed = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iB(sk.getWidth(el))) * es;
            return I ? e : 0;
        }, [el, es, I]),
        eu = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iB(sk.getWidth(el))) * es;
            return M && ee ? e : 0;
        }, [el, es, M, ee]),
        em = s.useMemo(() => {
            if ($)
                if (!H && ee) return [1, 0];
                else if (!B) return [1, j.length + ec, 0];
                else if (ee) return [1, N.length + eu, 0];
                else if (eo && !er) return [1, j.length + ec, 0];
                else return [1, j.length + ec, y.length + ed];
            if (!H && ee) return [1, 1];
            if (!B) return [1, j.length, 1];
            if (ee) return [1, N.length, 0, ea];
            if (eo && !er) return [1, j.length, 0, ea];
            else return [1, j.length, y.length, ea];
        }, [$, ee, j.length, y.length, H, B, ea, N, ec, ed, eu, er, eo]),
        eh = s.useMemo(
            () =>
                !H && ee
                    ? [[], []]
                    : B
                      ? ee
                          ? [[], N, [], []]
                          : eo && !er
                            ? [[], j, [], []]
                            : [[], j, y, []]
                      : [[], j, []],
            [ee, H, B, N, j, y, er, eo],
        ),
        eg = s.useCallback(
            (e, n) => {
                ((0, tA.Ml)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: { page: eJ.liQ.GUILD_CHANNEL, section: eJ.JJy.FORUM_CHANNEL_POST },
                }),
                    n ? (0, ti.N9)(e, { source: sM.H9.BROWSER }) : ((et.current = e.id), (0, tc.JA)(e)));
            },
            [t.guild_id, t.id, et],
        ),
        [ex, ef] = s.useState(l + a - 24),
        ej = s.useCallback(
            (e, n, l) =>
                0 === e
                    ? (0, i.jsx)(
                          sV,
                          {
                              channel: t,
                              isEmpty: !k,
                              isSearchLoading: M,
                              numResults: N?.length,
                              coords: n,
                              onHeightChange: ef,
                              children:
                                  !_ && (0, i.jsx)(n$, { channel: t, hasAnyThread: w, hasActiveThreads: k }, t.id),
                          },
                          "forum-channel-header",
                      )
                    : 2 !== e || B
                      ? 1 === e && ee && !H
                          ? (0, i.jsx)(sz, { channel: t, coords: n }, "archive-or-search-result")
                          : l()
                      : (0, i.jsx)(sF, { channel: t, coords: n }, "archived-missing-reading-history-perm"),
            [ee, B, N, H, t, k, M, _, w],
        ),
        ev = (0, x.bG)([tx.A], () => tx.A.hasHidden(t.id)),
        eA = { editorHeight: l, isGridLayout: $ },
        eC = s.useRef(eA);
    (s.useEffect(() => {
        eC.current = eA;
    }),
        s.useEffect(() => {
            let { editorHeight: e, isGridLayout: t } = eC.current,
                n = t ? e_ : V,
                l = n.current?.getScrollerState();
            null != l && !ev && l.scrollTop > e && n.current?.scrollTo({ to: 0 });
        }, [ev]));
    let {
            updateListScrollerRef: ey,
            renderListSection: eN,
            renderListItem: eS,
            getListSectionHeight: eT,
            getListItemHeight: eI,
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
                g = (0, x.bG)([tm.Ay], () => tm.Ay.getChannelId()),
                f = s.useCallback(
                    (e) => (n) => {
                        ((t.current = n), (e.current = n?.getScrollerNode() ?? null));
                    },
                    [t],
                ),
                j = s.useCallback(
                    (e) => sL({ section: e.section, isShowingSearchResult: h, hasActiveThreads: n })(),
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
                                              className: r()(nd.loadingCard, nd[`loadingCard-${e.row % 3}`]),
                                          },
                                          `loading-${e.row}`,
                                      );
                            let t = l[e.section][e.row],
                                n = null != g && (0, J.iU)(g) ? e3 : na.Ay;
                            return (0, i.jsx)(
                                "li",
                                {
                                    className: nd.card,
                                    "data-item-role": "item",
                                    children: (0, i.jsx)(v.F, {
                                        children: (0, i.jsx)(n, {
                                            className: nd.mainCard,
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
            hasActiveThreads: k,
            threadIdsBySection: eh,
            listViewCardHeights: o,
            editorHeight: l,
            editorAdditionRowHeight: a,
            renderSectionOrItem: ej,
            goToThread: eg,
            observePostVisibilityAnalytics: W,
            isShowingSearchResult: ee,
        }),
        e_ = s.useRef(null),
        {
            updateMasonryListScrollerRef: eM,
            getItemKey: eR,
            renderGridSection: ek,
            renderGridItem: ew,
            getGridSectionHeight: eP,
            getSectionProps: eL,
            handleGridFocus: eD,
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
                            (h.current = sO(n)));
                    },
                    [t, h],
                ),
                v = s.useCallback(
                    (e) => {
                        let t = sO(e);
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
                        a(e, t, sL({ section: e, coords: t, key: n, isShowingSearchResult: c, hasActiveThreads: o })),
                    [a, o, c],
                ),
                A = s.useCallback((e) => (0 === e ? {} : { role: "grid", "aria-labelledby": `#${sw(e)}` }), []);
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
                                  sm,
                                  {
                                      id: `${a}`,
                                      threadId: c,
                                      className: r()(nd.card, nd.mainCard),
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
                                        className: r()(nd.loadingCard, nd[`loadingCard-${t % 3}`]),
                                    },
                                    a,
                                );
                    },
                    [n, l, m],
                ),
                getSectionProps: A,
                getGridSectionHeight: s.useCallback(
                    (e) => (0 === e ? g - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && c && !d ? 40 : 0),
                    [g, c, d, o, u],
                ),
            };
        })({
            masonryListScrollerRef: e_,
            threadIdsBySection: eh,
            goToThread: eg,
            renderSectionOrItem: ej,
            hasActiveThreads: k,
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
                    null == eU.Ay.getSidebarState(r) && (a.current = null);
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
        masonryListScrollerRef: e_,
        containerWidth: el,
        isGridLayout: $,
        threadIdsBySection: eh,
        parentId: t.id,
        focusedThreadId: et,
    });
    let eO = s.useCallback(() => {
            if (ee) return;
            let e = $ ? e_.current?.getScrollerState() : V.current?.getScrollerState();
            if (null == e) return;
            (0, tA.pO)({ guildId: t.guild_id, channelId: t.id });
            let n = e.scrollTop + e.offsetHeight;
            e.scrollHeight - n < ($ ? Math.max(200, iB(el)) : 200) && S();
        }, [ee, $, t.guild_id, t.id, el, S]),
        eG = (0, x.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        eF = (0, eE.kU)((e) => e.titleFocused || e.bodyFocused, d.x),
        ez = (function (e) {
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
        })({ id: "forum-grid-view", isEnabled: $ && eG && !eF, setFocus: eD }),
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
                      : iB(l, t.isMediaChannel() ? iz.SIXTEEN_BY_NINE : iz.THREE_BY_TWO),
            [t],
        ),
        { ref: eW, ...e$ } = ez.containerProps,
        eq = eU.Ay.getSidebarState(t.id),
        eK = null != eq && (0, eU.JU)(eq),
        eY = (0, x.bG)([eU.Ay], () => eU.Ay.getSection(t.id)) === eJ.YvQ.MEMBERS;
    return (0, i.jsx)("div", {
        className: nd.container,
        ref: en,
        "data-member-list-open": eY,
        children: (0, i.jsx)(p.sk, {
            children: (e) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        c &&
                            (0, i.jsx)(P.A, {
                                channel: t,
                                draftType: td.C.FirstThreadMessage,
                                className: nd.uploadArea,
                                style: { right: eK && n?.isThreadSidebarFloating ? n.threadSidebarWidth : 0 },
                            }),
                        (0, i.jsx)(sU, { channel: t }),
                        (0, i.jsx)(b.A, { children: (0, i.jsx)(v.H, { children: e0.intl.string(e0.t.B2panI) }) }),
                        G.visible || L
                            ? (0, i.jsx)("div", {
                                  className: nd.headerNotice,
                                  children: G.visible
                                      ? (0, i.jsx)(Q.KT, { channel: t, onDismiss: G.dismiss })
                                      : (0, i.jsx)(Y.A, { channel: t }),
                              })
                            : null,
                        $
                            ? (0, i.jsx)(i4, {
                                  navigator: ez,
                                  children: (0, i.jsx)(
                                      A.f,
                                      {
                                          ref: (e) => {
                                              ((eW.current = e?.getScrollerNode() ?? null), eM(e));
                                          },
                                          itemGutter: 16,
                                          padding: 24,
                                          className: nd.grid,
                                          columns: es,
                                          sections: em,
                                          getItemKey: eR,
                                          getSectionHeight: eP,
                                          getItemHeight: eV,
                                          renderSection: ek,
                                          renderItem: ew,
                                          getSectionProps: eL,
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
                                              C.Ei,
                                              {
                                                  ref: ey(n),
                                                  className: nd.list,
                                                  sections: em,
                                                  sectionHeight: eT,
                                                  rowHeight: eI,
                                                  renderRow: eS,
                                                  renderSection: eN,
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
function sF(e) {
    let { channel: t, coords: n } = e,
        l = (0, G.Ay)(t);
    return (0, i.jsx)("div", {
        className: r()(nd.missingReadHistoryPermission, nd.columnsSpan),
        style: n,
        children: (0, i.jsx)(y.E, {
            color: "text-muted",
            variant: "body-md/normal",
            children: e0.intl.format(e0.t.TycmzM, { channelName: l }),
        }),
    });
}
function sz(e) {
    let { channel: t, coords: n } = e,
        l = (0, G.Ay)(t);
    return (0, i.jsx)("div", {
        className: r()(nd.missingReadHistoryPermission, nd.columnsSpan),
        style: n,
        children: (0, i.jsx)(y.E, {
            color: "text-muted",
            variant: "body-md/normal",
            children: e0.intl.format(e0.t.OWZJdS, { channelName: l }),
        }),
    });
}
function sU(e) {
    let { channel: t } = e,
        n = s.useCallback(() => {
            tf.A.resort(t.id);
        }, [t]),
        l = (0, x.bG)([tj.A], () => tj.A.getNewThreadCount());
    return 0 === l
        ? null
        : (0, i.jsx)(N.D, {
              className: nd.newPostsButton,
              onClick: n,
              children: (0, i.jsx)(y.E, {
                  color: "text-brand",
                  variant: "body-md/medium",
                  children: e0.intl.format(e0.t.ue1qfM, { count: l }),
              }),
          });
}
function sH() {
    return Promise.resolve();
}
function sB(e) {
    let { parentChannel: t, canCreatePost: n } = e,
        l = s.useCallback(() => {
            ((0, tA.jr)({ guildId: t.guild_id, channelId: t.id }), (0, H.d)(t));
        }, [t]);
    return __OVERLAY__ || !n
        ? null
        : (0, i.jsx)(E.$, { variant: "primary", size: "md", text: e0.intl.string(t$.default.QwW8zd), onClick: l });
}
function sV(e) {
    let t,
        n,
        l,
        { channel: a, isEmpty: o, isSearchLoading: v, numResults: p, children: b, coords: A, onHeightChange: C } = e,
        { enabled: E } = F.A.useConfig({ location: "forum-channel-header" }),
        {
            name: k,
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
        { tagFilter: H, layoutType: B } = (0, ep.R)(a.id),
        V = (0, eE.ST)(),
        q = (0, ep.p)(),
        K = (0, x.bG)([tu.A], () => tu.A.canChatInGuild(a.guild_id)),
        Y = (0, to.AI)(a),
        [Q, X] = s.useState(Y),
        [, ee] = (0, W.c)(a.getGuildId() ?? void 0),
        et = (0, Z.V)(a),
        en = K && (Y || (Q && ee)) && !et;
    Y && !Q && X(!0);
    let { ref: el, height: ei } = (0, L.Ay)();
    s.useEffect(() => {
        null != ei && C(ei);
    }, [C, ei]);
    let es = s.useCallback(() => {
        c()(() => {
            null != el.current && V.getState().setEditorHeight(el.current.offsetHeight);
        });
    }, [el, V]);
    (s.useLayoutEffect(es, [es, o, en, z]), (0, tg.Vo)({ event: eJ.jej.REMEASURE_TARGET, handler: es }));
    let ea = (0, x.bG)([th.A], () => th.A.getUploads(a.id, td.C.FirstThreadMessage)),
        er = (0, eb.Hv)(a),
        { containerRef: eo, containerWidth: ec } = iu(),
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
    let eh = k.length > 0 && !w && (v || null != p),
        eg =
            !__OVERLAY__ &&
            !D &&
            !w &&
            P &&
            (0 === G.textValue.trim().length || G.textValue.trim() === er) &&
            0 === ea.length &&
            !et &&
            !a.isGameInvitesChannel();
    function ex(e) {
        ((0, tA.UA)({
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
        if (!(eh || eg)) return U(0);
        null != eu.current && U(eu.current.clientHeight);
    }, [U, eh, eg, eu]);
    let ef = (0, m.Ay)({
            id: `${a.id}-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: sH,
            scrollToEnd: sH,
            orientation: h.Gl.HORIZONTAL,
        }),
        { role: ej, onFocus: ev, ...eA } = (0, u.rm)("forum-channel-header"),
        eC = s.useRef(null),
        ey =
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
        eN = s.useCallback(
            (e) => {
                (ev(), e.target !== el.current || ey.current || eC.current?.focus());
            },
            [ev, el, ey],
        ),
        eS = s.useMemo(() => (et ? (0, J.Yj)(a.availableTags) : a.availableTags), [a.availableTags, et]),
        eT = (0, ir.cq)(eS);
    return (0, i.jsx)(
        "div",
        {
            className: r()(nd.card, nd.headerRow, nd.columnsSpan),
            ref: el,
            onFocus: eN,
            ...eA,
            style: { ...A, position: B === g.C.GRID ? "absolute" : "static", height: "auto" },
            children: (0, i.jsxs)(tg.Ah, {
                children: [
                    null != a.guild_id
                        ? (0, i.jsx)($.A, {
                              className: r()(nd.newMemberBanner, { [nd.gridViewBanner]: B === g.C.GRID }),
                              guildId: a.guild_id,
                              channel: a,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: r()(nd.headerContainer, {
                            [nd.gameInvitesHeaderContainer]: a.isGameInvitesChannel(),
                        }),
                        children: [
                            a.isGameInvitesChannel() && (0, i.jsx)(sW, { channel: a }),
                            (0, i.jsxs)("div", {
                                className: nd.mainCardContainer,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: r()(nd.mainCard, nd.header, {
                                            [nd.headerWithMatchingPosts]: eh || eg,
                                        }),
                                        children: (0, i.jsx)(ix, {
                                            parentChannel: a,
                                            onChange: es,
                                            isSearchLoading: v,
                                            numResults: p,
                                            canCreatePost: en,
                                            inputRef: eC,
                                        }),
                                    }),
                                    (eh || eg) &&
                                        (0, i.jsxs)("div", {
                                            className: nd.matchingPostsRow,
                                            ref: eu,
                                            children: [
                                                eh &&
                                                    (0, i.jsxs)("div", {
                                                        className: nd.matchingPosts,
                                                        children: [
                                                            (0, i.jsx)(j.D, {
                                                                variant: "body-xs/normal",
                                                                color: "text-default",
                                                                children: v
                                                                    ? e0.intl.string(e0.t["/9i3qq"])
                                                                    : 0 === p
                                                                      ? e0.intl.string(e0.t.DbgHxi)
                                                                      : e0.intl.formatToPlainString(e0.t["tBz/8b"], {
                                                                            numPosts: p ?? "",
                                                                            query: k,
                                                                        }),
                                                            }),
                                                            !v &&
                                                                (0, i.jsx)(N.D, {
                                                                    onClick: function () {
                                                                        ((0, tA.hT)({
                                                                            guildId: a.guild_id,
                                                                            channelId: a.id,
                                                                        }),
                                                                            tf.A.clearForumSearch(a.id),
                                                                            V.getState().setName(""));
                                                                    },
                                                                    onMouseDown: (e) => e.preventDefault(),
                                                                    children: (0, i.jsx)(y.E, {
                                                                        variant: "body-xs/semibold",
                                                                        color: "text-brand",
                                                                        className: nd.clear,
                                                                        children: e0.intl.string(e0.t.VkKicb),
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                (0, i.jsx)("div", { className: nd.tagsSpacer }),
                                                eg
                                                    ? en
                                                        ? (0, i.jsxs)("div", {
                                                              className: nd.startPostHelp,
                                                              children: [
                                                                  (0, i.jsx)(S.e, {
                                                                      shortcut: "SHIFT",
                                                                      className: nd.keyboardShortcut,
                                                                  }),
                                                                  (0, i.jsx)(y.E, {
                                                                      variant: "body-xs/normal",
                                                                      color: "text-subtle",
                                                                      children: "+",
                                                                  }),
                                                                  (0, i.jsx)(S.e, {
                                                                      shortcut: "ENTER",
                                                                      className: nd.keyboardShortcut,
                                                                  }),
                                                                  (0, i.jsx)(y.E, {
                                                                      variant: "body-xs/normal",
                                                                      color: "text-subtle",
                                                                      children: e0.intl.string(e0.t.ZvJ0yh),
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, i.jsxs)("div", {
                                                              className: nd.startPostHelp,
                                                              children: [
                                                                  (0, i.jsx)(T.E, {
                                                                      size: "custom",
                                                                      color: "currentColor",
                                                                      height: 14,
                                                                      width: 14,
                                                                      className: nd.warnIcon,
                                                                  }),
                                                                  (0, i.jsx)(y.E, {
                                                                      variant: "body-xs/normal",
                                                                      color: "text-subtle",
                                                                      children: e0.intl.string(e0.t.iyzwnD),
                                                                  }),
                                                              ],
                                                          })
                                                    : null,
                                            ],
                                        }),
                                ],
                            }),
                            a.isGameInvitesChannel() && (0, i.jsx)(sB, { parentChannel: a, canCreatePost: en }),
                        ],
                    }),
                    (0, i.jsx)(nJ, { channel: a, onChange: es }),
                    (0, i.jsxs)("div", {
                        className: nd.tagsContainer,
                        ref: eo,
                        children: [
                            (0, i.jsx)(s$, { channel: a }),
                            eS.length > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)("div", { className: nd.divider }),
                                          E
                                              ? (0, i.jsx)("div", {
                                                    className: nd.tagList,
                                                    children: (0, i.jsx)(I.C, {
                                                        variant: "filter",
                                                        selectionMode: "multiple",
                                                        label: e0.intl.string(e0.t["P/y+sj"]),
                                                        items: eT,
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
                                                    className: nd.tagList,
                                                    ref: ed,
                                                    children: (0, i.jsx)(u.hD, {
                                                        navigator: ef,
                                                        children: (0, i.jsx)(u.PR, {
                                                            children: (e) => {
                                                                let { ref: t, ...n } = e;
                                                                return (0, i.jsx)("div", {
                                                                    className: nd.tagListInner,
                                                                    ref: t,
                                                                    ...n,
                                                                    children: eS.map((e) =>
                                                                        (0, i.jsx)(
                                                                            ir.Ay,
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
                                          (0, i.jsx)(_.Y, {
                                              targetElementRef: em,
                                              renderPopout: (e) => {
                                                  let { closePopout: t, setPopoutRef: n } = e;
                                                  return (0, i.jsx)(s_, {
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
                                                      className: r()(nd.tagsButton, {
                                                          [nd.tagsButtonWithCount]: H.size > 0,
                                                      }),
                                                      innerClassName: nd.tagsButtonInner,
                                                      "aria-label":
                                                          H.size > 0
                                                              ? e0.intl.string(e0.t.IkpM1T)
                                                              : e0.intl.string(e0.t["9vKK/N"]),
                                                      children: [
                                                          H.size > 0
                                                              ? (0, i.jsx)("div", {
                                                                    className: nd.countContainer,
                                                                    children: (0, i.jsx)(y.E, {
                                                                        className: nd.countText,
                                                                        color: "none",
                                                                        variant: "body-xs/medium",
                                                                        children: H.size,
                                                                    }),
                                                                })
                                                              : e0.intl.string(e0.t.fZ8hzm),
                                                          n
                                                              ? (0, i.jsx)(M.t, {
                                                                    size: "custom",
                                                                    color: "currentColor",
                                                                    width: 20,
                                                                })
                                                              : (0, i.jsx)(R.a, {
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
                                              className: r()(nd.tagsButton, nd.tagsButtonPlaceholder),
                                              innerClassName: nd.tagsButtonInner,
                                              "aria-label": e0.intl.string(e0.t.IkpM1T),
                                              children: [
                                                  H.size > 0
                                                      ? (0, i.jsx)("div", {
                                                            className: nd.countContainer,
                                                            children: (0, i.jsx)(y.E, {
                                                                className: nd.countText,
                                                                color: "none",
                                                                variant: "body-xs/medium",
                                                                children: H.size,
                                                            }),
                                                        })
                                                      : null,
                                                  (0, i.jsx)(M.t, { size: "custom", color: "currentColor", width: 24 }),
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
function sW(e) {
    let { channel: t } = e,
        { application: n } = (0, U._k)(t.id),
        l = (0, V.A)({ applicationId: n?.id, source: B.GameProfileSources.GameInvitesChannel });
    if (null == n) return null;
    let s = (0, i.jsx)(z.A, { game: n, size: z.M.MEDIUM_LARGE, className: nd.gameIcon });
    return (0, i.jsx)(k.m, {
        text: n.name,
        asContainer: !0,
        children:
            null != l
                ? (0, i.jsx)(N.D, { onClick: l, "aria-label": n.name, className: nd.gameIconClickable, children: s })
                : s,
    });
}
function s$(e) {
    let { channel: t } = e,
        n = t.isMediaChannel(),
        l = t.isGameInvitesChannel(),
        a = s.useRef(null);
    return (0, i.jsx)(_.Y, {
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
                className: nd.sortDropdown,
                innerClassName: nd.sortDropdownInner,
                "aria-label": n ? e0.intl.string(e0.t.JxU0wr) : e0.intl.string(e0.t.xyYt8A),
                children: [
                    (0, i.jsx)(w.J, { size: "xs", color: "currentColor" }),
                    (0, i.jsx)(y.E, {
                        className: nd.sortDropdownText,
                        variant: "body-sm/medium",
                        color: "interactive-text-default",
                        children: (0, i.jsx)("span", {
                            className: nd.sortDropdownTextHighContrastForcedColor,
                            children: n || l ? e0.intl.string(e0.t.JxU0wr) : e0.intl.string(e0.t.xyYt8A),
                        }),
                    }),
                    s
                        ? (0, i.jsx)(M.t, { size: "custom", color: "currentColor", width: 20 })
                        : (0, i.jsx)(R.a, { size: "custom", color: "currentColor", width: 20 }),
                ],
            });
        },
    });
}

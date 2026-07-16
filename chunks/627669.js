n.r(t), n.d(t, { CreateGameInvitePostButton: () => sP, default: () => sE });
var l,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(34391),
    c = n.n(o),
    d = n(942381),
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
    I = n(922016),
    _ = n(900797),
    R = n(847374),
    k = n(866665),
    M = n(112173),
    w = n(738876),
    L = n(765671),
    D = n(964486),
    P = n(775602),
    O = n(47167),
    F = n(769015),
    G = n(807632),
    z = n(515408),
    U = n(409626),
    H = n(692969),
    B = n(870136),
    V = n(575293),
    W = n(857071),
    $ = n(228098),
    q = n(157259),
    K = n(212007),
    Y = n(892340),
    Q = n(715757),
    X = n(284009),
    J = n.n(X),
    Z = n(989349),
    ee = n.n(Z),
    et = n(346055),
    en = n(97808),
    el = n(778712),
    ei = n(138134),
    es = n(812993),
    ea = n(661531),
    er = n(863610),
    eo = n(534890),
    ec = n(144165),
    ed = n(119031),
    eu = n(104171),
    em = n(379257),
    eh = n(847599),
    ex = n(114166),
    eg = n(810181),
    ef = n(390248),
    ej = n(422844),
    ev = n(435470),
    ep = n(473503),
    eA = n(256265),
    eC = n(969043),
    eN = n(710948),
    eb = n(218152),
    eE = n(52933),
    eS = n(504261),
    ey = n(505234),
    eT = n(387408),
    eI = n(59318),
    e_ = n(294520),
    eR = n(505527),
    ek = n(863439),
    eM = n(521981),
    ew = n(467073),
    eL = n(34337),
    eD = n(831688),
    eP = n(805964),
    eO = n(302031),
    eF = n(885386),
    eG = n(761640),
    ez = n(734057),
    eU = n(232835),
    eH = n(576705),
    eB = n(967198),
    eV = n(287809),
    eW = n(531685),
    e$ = n(58703),
    eq = n(763754),
    eK = n(447215);
let eY = function (e) {
    let { message: t, originalAuthor: n, channel: l } = e,
        s = (0, eq.d8)(n, l),
        a = s?.nick ?? n?.username ?? "",
        r = (0, eK.P)({
            user: n ?? void 0,
            channelId: l.id,
            guildId: l.guild_id,
            messageId: t?.id,
            stopPropagation: !0,
        })(s ?? void 0)(a, l.id);
    return (0, i.jsx)(b.E, { variant: "text-md/semibold", children: r });
};
var eQ = n(652215),
    eX = n(838541),
    eJ = n(375708),
    eZ = n(506472),
    e0 = n(330070),
    e1 = n(992595);
let e2 = s.memo(function (e) {
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
                l = (0, g.bG)([ez.A], () => ez.A.getChannel(t));
            J()(null != l, "the thread should not be null here, a store must have missed an update");
            let i = (0, g.bG)([eG.Ay], () => eG.Ay.getCurrentSidebarChannelId(l.parent_id) === l.id),
                { firstMessage: a } = (0, ep.OA)(l),
                r = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: l = !0 } = e,
                        i = s.useMemo(() => (null != t ? (0, eT.A)(t, t?.messageSnapshots[0]) : null), [t]),
                        { hasSpoilerEmbeds: a, content: r } = s.useMemo(
                            () =>
                                i?.content != null && "" !== i.content
                                    ? (0, eM.Ay)(i, {
                                          formatInline: n,
                                          noStyleAndInteraction: l,
                                          allowHeading: !0,
                                          allowList: !0,
                                      })
                                    : { hasSpoilerEmbeds: !1, content: null },
                            [n, i, l],
                        ),
                        o = (0, eA.Ky)(t, a),
                        c = (0, eA.L_)(t, a);
                    return null == t ? null : { hasSpoilerEmbeds: a, content: r, firstMedia: o, firstMediaIsEmbed: c };
                })({ firstMessage: a }),
                o = r?.content,
                c = r?.firstMedia,
                { messageCountText: d } = (0, ev.k6)(l);
            return { channel: l, isOpen: i, messageCount: d, firstMessage: a, content: o, media: n ?? c };
        })({ threadId: t, overrideMedia: a }),
        p = (0, O.Ay)(c);
    (0, Q.vb)(f);
    let A = (0, g.bG)([eV.default, eU.A], () => {
            let e = eV.default.getUser(f?.messageSnapshots[0]?.moderatorReport?.reported_user_id);
            if (null != e) return e;
            if (f?.messageReference?.channel_id != null && f?.messageReference?.message_id != null) {
                let e = eU.A.getMessage(f?.messageReference?.channel_id, f?.messageReference?.message_id);
                if (null != e) return e.author;
            }
            return null;
        }),
        { ref: C, height: N } = (0, L.Ay)(),
        b = (0, eb.kU)((e) => e.setCardHeight, d.x);
    s.useEffect(() => {
        null != N && b(t, N);
    }, [N, b, t]),
        s.useEffect(() => {
            l?.(C.current, t);
        }, [C, l, t]);
    let S = s.useRef(null),
        { handleLeftClick: y, handleRightClick: T } = (0, ey.A)({ facepileRef: S, goToThread: n, channel: c }),
        { role: I, onFocus: _, ...R } = (0, u.rm)(t),
        { isFocused: k, handleFocus: M, handleBlur: w } = (0, eS.A)(_);
    return (0, i.jsxs)("div", {
        ref: C,
        "data-item-id": t,
        onClick: y,
        onContextMenu: T,
        className: r()(e0.kL, eZ.kL, o, { [e0.nT]: m }),
        children: [
            (0, i.jsx)(E.D, {
                onClick: y,
                focusProps: { ringTarget: C },
                onContextMenu: T,
                "aria-label": eJ.intl.formatToPlainString(eJ.t.pgYN6c, { title: p, count: h }),
                className: e0.Kv,
                onFocus: M,
                onBlur: w,
                ...R,
            }),
            (0, i.jsxs)("div", {
                className: e0.kb,
                children: [
                    (0, i.jsx)(v.F, {
                        children: (0, i.jsxs)("div", {
                            className: eZ.fx,
                            children: [
                                (0, i.jsx)(e4, {
                                    channel: c,
                                    firstMessage: f,
                                    content: x,
                                    hasMediaAttachment: null != j,
                                    originalAuthor: A,
                                }),
                                f?.blocked || null == j ? null : (0, i.jsx)(tt, { channel: c, firstMedia: j }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(et.M, {
                        enabled: !k,
                        children: (0, i.jsx)(e5, { channel: c, firstMessage: f, facepileRef: S }),
                    }),
                ],
            }),
        ],
    });
});
function e4(e) {
    let { channel: t, firstMessage: n, content: l, hasMediaAttachment: s, originalAuthor: a } = e,
        { hasUnreads: o } = (0, ev.X5)(t);
    return (0, i.jsxs)("div", {
        className: r()(eZ.rf, e0.rf),
        children: [
            (0, i.jsx)(eE.Ay, { channel: t }),
            (0, i.jsx)("div", {
                className: (e0.iU, eZ.iU),
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
        c = (0, g.bG)([eC.A], () => eC.A.isLoading(n.id)),
        d = (0, g.bG)([eH.A], () => eH.A.can(eQ.xBc.MANAGE_MESSAGES, n)),
        u = eF.gs.useSetting(),
        m = (0, g.bG)([eB.A], () => eB.A.getGuildId()),
        { contentPlaceholder: h, renderedContent: x } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, eP.o)(t, l, !1, !1, r()(e0.BK, eZ.BK, e1.tZ, e1.__invalid_smallFontSize), {
                      leadingIconClass: e0.aG,
                      trailingIconClass: e0.sl,
                      iconSize: eX.eJ,
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
                        className: r()(e0.BK, eZ.BK),
                        "aria-label": "",
                        children: null == t ? (c ? null : eJ.intl.string(eJ.t.mE3KJN)) : h,
                    });
    return (0, i.jsxs)(eO.Bs.Provider, {
        value: (0, ek.A)(u, d),
        children: [
            null != o
                ? (0, i.jsx)(en.eu, {
                      size: el._3.SIZE_40,
                      src: o.getAvatarURL(m, (0, el.FT)(el._3.SIZE_40)),
                      "aria-label": "",
                      className: eZ.Nd,
                  })
                : null,
            (0, i.jsxs)("div", {
                className: eZ.IF,
                children: [
                    (0, i.jsx)(eY, { channel: n, originalAuthor: o, message: t }),
                    (0, i.jsx)(et.M, { className: e0.JY, children: f }),
                ],
            }),
        ],
    });
});
function e5(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        { isNew: s } = (0, ev.X5)(t),
        a = (0, O.Ay)(t),
        r = (0, eg.m)(t.id),
        o = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: eZ.qr,
        children: [
            (0, i.jsxs)("div", {
                className: eZ.JS,
                children: [
                    (0, i.jsx)(ei.i, { size: "custom", width: 14, height: 14 }),
                    (0, i.jsx)(b.E, { variant: "text-sm/medium", children: a }),
                    s
                        ? (0, i.jsx)(es.Lp, {
                              color: ea.A.unsafe_rawColors.BRAND_260.css,
                              text: eJ.intl.string(eJ.t.y2b7CA),
                              className: eZ.Ad,
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: eZ.PQ,
                children: [
                    o || null == l ? null : (0, i.jsx)(e7, { firstMessage: l, channel: t }),
                    (0, i.jsx)(e3, { channel: t, iconSize: 14 }),
                    (0, i.jsx)("span", { className: e0.xE, children: "\u2022" }),
                    r.length > 0
                        ? (0, i.jsxs)("div", {
                              className: e0.IW,
                              children: [
                                  (0, i.jsx)(e9, { channel: t, userIds: r, facepileRef: n }),
                                  (0, i.jsx)("div", {
                                      className: e0.r$,
                                      children: (0, i.jsx)(er.n, { themed: !0, dotRadius: 2 }),
                                  }),
                                  (0, i.jsx)(ed.Ay, { channel: t, className: e0.mD, renderDots: !1 }),
                              ],
                          })
                        : (0, i.jsx)(e6, { channel: t }),
                ],
            }),
        ],
    });
}
function e3(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: s, unreadCount: a } = (0, ev.k6)(t);
    return (0, i.jsxs)("div", {
        className: r()(e0.Mv, { [e0.hT]: l && null == a }),
        children: [
            (0, i.jsx)("span", {
                className: e0.SZ,
                children: (0, i.jsx)(eo.o, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof s
                ? (0, i.jsx)(ex.A, { value: s, digitWidth: 9, className: e0.gv })
                : (0, i.jsx)("div", { className: e0.gv, children: s }),
            null == a
                ? null
                : (0, i.jsxs)(b.E, {
                      className: e0.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", eJ.intl.format(eJ.t.z3PEth, { count: a }), ")"],
                  }),
        ],
    });
}
function e7(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, g.bG)([ez.A], () => ez.A.getChannel(n.parent_id)),
        s = (0, ev.Ck)(l),
        { disableReactionCreates: a, isLurking: r, isPendingMember: o } = (0, ew.A)(n);
    return null == s || a
        ? null
        : (0, i.jsx)(eD.qT, {
              className: e0.vC,
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
              type: eR.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function e6(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, ej.R)(t.parent_id),
        l = (0, ev.Mw)(t, n),
        s = t.threadMetadata?.createTimestamp,
        a = null == s ? null : eJ.intl.formatToPlainString(eJ.t["13euCd"], { timestamp: (0, e$.i$)(ee()(s), "LLLL") });
    return (0, i.jsx)(k.m, {
        text: a,
        children: (0, i.jsx)(b.E, {
            className: e0.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function e9(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        s = (0, ev.$I)(t, n);
    return (0, i.jsx)("div", {
        ref: l,
        children: (0, i.jsx)(eu.Ay, {
            className: e0.__invalid_facepile,
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
function te(e) {
    let t,
        n,
        { firstMedia: l, shouldObscure: s, obscureReason: a, shouldShowAgeVerification: o } = e,
        c = (0, g.bG)([eW.A], () => eW.A.isFocused()),
        d = (0, eI.ge)(l.src),
        u = eF.kt.useSetting(),
        m = (0, e_.rx)(a),
        { src: h, width: x, height: f, alt: j } = l;
    return (f > x ? (n = 72) : (t = 72), o)
        ? (0, i.jsx)("div", {
              "aria-label": m ?? j ?? eJ.intl.string(eJ.t.hqwnc2),
              className: r()(e0.iT, e0.nh),
              style: { maxWidth: t, maxHeight: n, height: f, width: x },
          })
        : h.startsWith("data:")
          ? (0, i.jsx)(ec._, {
                src: h,
                maxHeight: t,
                maxWidth: n,
                width: x,
                height: f,
                alt: null != j && s ? m : j,
                className: e0.iT,
                imageClassName: r()({ [e0.cd]: s, [e0.LW]: !0 }),
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
                containerClassName: e0.iT,
                imageClassName: r()({ [e0.cd]: s }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function tt(e) {
    let { channel: t, firstMedia: n } = e,
        [l, s] = (0, e_.eJ)({ media: n, channel: t }),
        a = (0, ef.qZ)(s);
    return (0, i.jsx)(et.M, {
        enabled: !0,
        children: (0, i.jsxs)("div", {
            className: r()(e0.pV, eZ.pV),
            onClick: function (e) {
                e.stopPropagation(),
                    a &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        em.A.showAgeVerificationGetStartedModal({ entryPoint: eh.q1.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, i.jsx)(te, { firstMedia: n, shouldObscure: l, obscureReason: s, shouldShowAgeVerification: a }),
                l && (0, i.jsx)(eN.A, { iconClassname: e0.yo, obscureReason: s }),
            ],
        }),
    });
}
var tn = n(378570),
    tl = n(940382),
    ti = n(970278),
    ts = n(424798),
    ta = n(406704),
    tr = n(747926),
    to = n(31717),
    tc = n(834942),
    td = n(309010),
    tu = n(522602),
    tm = n(234320),
    th = n(947094),
    tx = n(919577),
    tg = n(207777),
    tf = n(365971),
    tj = n(613999);
let tv = function (e) {
    let { guildId: t, channelId: n } = e,
        l = s.useRef(null),
        i = (0, tf.Xg)(),
        a = !eW.A.isFocused(i);
    return (
        s.useLayoutEffect(
            () => (
                null == l.current &&
                    ((l.current = new tj.Ay({ guildId: t, channelId: n, isPaused: a, windowId: i })),
                    l.current.initialize()),
                () => {
                    l.current?.terminate(), (l.current = null);
                }
            ),
            [n, t, a, i],
        ),
        l.current
    );
};
var tp = n(853742);
n(321073);
var tA = n(580929),
    tC = n(136722),
    tN = n(192308),
    tb = n(866323),
    tE = n(789645),
    tS = n(446576),
    ty = n(26430),
    tT = n(885574),
    tI = n(933832),
    t_ = n(565787),
    tR = n(320448),
    tk = n(435183),
    tM = n(417454),
    tw = n(148719),
    tL = n(7689),
    tD = n(56059),
    tP = n(141628),
    tO = n(696986),
    tF = n(793574),
    tG = n(688810),
    tz = n(359800),
    tU = n(206828),
    tH = n(774418),
    tB = n(679680),
    tV = n(952351);
function tW(e) {
    let { channel: t, tagFilter: n } = e,
        l = (0, ta.AI)(t),
        { application: s } = (0, G._k)(t.guild_id);
    function a() {
        return (0, z.d)(t);
    }
    return n.size > 0
        ? (0, i.jsx)(tK, { tagFilter: n, canCreatePost: l, handleClickCreatePost: a })
        : (0, i.jsxs)("div", {
              className: tB.kL,
              children: [
                  (0, i.jsx)(j.D, {
                      variant: "heading-xl/semibold",
                      color: "text-default",
                      className: tB.DD,
                      children: eJ.intl.string(tH.default.NQechc),
                  }),
                  (0, i.jsxs)("ul", {
                      className: tB.Zu,
                      children: [
                          (0, i.jsx)(tq, {
                              icon: (0, i.jsx)(tL.$, { size: "xs", color: ea.A.colors.ICON_SUBTLE }),
                              children: eJ.intl.string(tH.default.y5Bork),
                          }),
                          (0, i.jsx)(tq, {
                              icon: (0, i.jsx)(tD.b, { size: "xs", color: ea.A.colors.ICON_SUBTLE }),
                              children: eJ.intl.string(tH.default.b77nl3),
                          }),
                          (0, i.jsx)(t$, { application: s }),
                      ],
                  }),
                  l &&
                      (0, i.jsx)(S.$, {
                          variant: "primary",
                          size: "md",
                          text: eJ.intl.string(tH.default.QwW8zd),
                          onClick: a,
                      }),
              ],
          });
}
function t$(e) {
    let { application: t } = e,
        { analyticsLocations: n } = (0, tG.Ay)(tF.A.GAME_INVITE_CHANNEL_EMPTY_STATE),
        { startAuthorization: l, hasAlreadyLinked: s, canStartAuthorization: a, fetched: r } = (0, tU.RD)(t),
        o = (0, tz.z)(l, s);
    if (!r) return null;
    let c = (0, i.jsx)(tP.A, { size: "xs", color: ea.A.colors.ICON_SUBTLE });
    return s
        ? (0, i.jsx)(tq, { icon: c, children: eJ.intl.string(tH.default.BSPpd4) })
        : a
          ? (0, i.jsx)(tq, {
                icon: c,
                children: eJ.intl.format(tH.default.XZapWG, { onClick: () => o({ analyticsLocations: n }) }),
            })
          : null;
}
function tq(e) {
    let { icon: t, children: n } = e;
    return (0, i.jsxs)("li", {
        className: tB.N4,
        children: [
            (0, i.jsx)("div", { className: tB.xH, children: t }),
            (0, i.jsx)(b.E, { variant: "text-sm/medium", color: "text-default", className: tB.oo, children: n }),
        ],
    });
}
function tK(e) {
    let { tagFilter: t, canCreatePost: n, handleClickCreatePost: l } = e;
    return (0, i.jsxs)("div", {
        className: tV.k,
        children: [
            (0, i.jsx)(j.D, {
                className: tV.w,
                variant: "heading-md/semibold",
                children: eJ.intl.formatToPlainString(eJ.t.lvPci0, { numTags: t.size }),
            }),
            (0, i.jsx)(b.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: eJ.intl.formatToPlainString(tH.default.nJzi8D, { numTags: t.size }),
            }),
            n &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tO.h, { size: 16 }),
                        (0, i.jsx)(S.$, { text: eJ.intl.string(tH.default.QwW8zd), variant: "secondary", onClick: l }),
                    ],
                }),
        ],
    });
}
var tY = n(462887),
    tQ = n(811893),
    tX = n(736653),
    tJ = n(303136),
    tZ = n(892110),
    t0 = n(251766),
    t1 = n(468689),
    t2 = n(71393),
    t4 = n(975571);
let t8 = { mass: 1, tension: 250, friction: 18, clamp: !0 };
var t5 = n(388803);
function t3(e) {
    let { handleHide: t } = e;
    return (0, i.jsx)(E.D, {
        onClick: t,
        className: t5.b,
        "aria-label": eJ.intl.string(eJ.t.WAI6xu),
        children: (0, i.jsx)(tE.P, { size: "md", color: "currentColor", className: t5.ut }),
    });
}
function t7(e) {
    let { username: t, title: n, videoSrc: l, messageCount: s, reaction: a, reactionCount: o, classname: c } = e;
    return (0, i.jsxs)("div", {
        className: r()(t5.IP, c),
        children: [
            (0, i.jsx)("div", {
                className: t5.Y6,
                children: (0, i.jsxs)("div", {
                    className: t5.wO,
                    children: [
                        (0, i.jsx)(b.E, { tag: "span", className: t5.cy, variant: "text-sm/semibold", children: t }),
                        (0, i.jsx)(b.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: t5.SD,
                            children: eJ.intl.string(eJ.t.mA0IvI),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(j.D, {
                variant: "heading-md/extrabold",
                className: t5.DD,
                color: "text-strong",
                "aria-hidden": !0,
                children: n,
            }),
            (0, i.jsx)(tO.h, { size: 10 }),
            (0, i.jsx)(tJ.A, { className: t5.Ki, src: l }),
            (0, i.jsx)(tO.h, { size: 10 }),
            (0, i.jsx)("div", {
                className: t5.qr,
                children: (0, i.jsxs)("div", {
                    className: t5.GD,
                    children: [
                        (0, i.jsxs)("div", {
                            className: t5.Mv,
                            children: [
                                (0, i.jsx)("span", {
                                    className: t5.SZ,
                                    children: (0, i.jsx)(eo.o, { size: "xs", color: "currentColor" }),
                                }),
                                (0, i.jsx)(b.E, {
                                    variant: "text-xs/normal",
                                    color: "interactive-text-default",
                                    children: s,
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: t5.vi,
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
let t6 = (e) => {
    let { channel: t } = e,
        n = (0, tX.Ay)(),
        l = (0, tY.M)(n),
        a = (0, g.bG)([t2.A], () => t2.A.getGuild(t.guild_id)),
        o = (0, g.bG)([th.A], () => th.A.hasHidden(t.id)),
        c = (0, t0.e)({ guildId: t.guild_id, channelId: t.id }),
        { transitions: d, setVisible: u } = (function () {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tb.p)(e, {
                    keys: (e) => (e ? "shown" : "hidden"),
                    config: t8,
                    from: { opacity: 0 },
                    enter: { opacity: 1 },
                    leave: { opacity: 0 },
                    unique: !0,
                }),
                setVisible: t,
            };
        })(),
        m = s.useCallback(() => {
            u(!1), tx.A.hideAdminOnboarding(t.id, !0);
        }, [t, u]);
    s.useEffect(() => {
        (0, tZ.l)(t.id) || u(!o);
    }, [t, u, o]);
    let h = s.useMemo(
            () => [
                eJ.intl.string(eJ.t["8pEGAw"]),
                eJ.intl.string(eJ.t.jwfgDd),
                eJ.intl.string(eJ.t.mPKs27),
                eJ.intl.string(eJ.t.StRbvG),
            ],
            [],
        ),
        x = s.useMemo(
            () => [
                eJ.intl.string(eJ.t["m/b58M"]),
                eJ.intl.string(eJ.t.MuJSKw),
                eJ.intl.string(eJ.t["d/Wqvu"]),
                eJ.intl.string(eJ.t.GJklAw),
            ],
            [],
        );
    function f() {
        t1.A.open(t.guild_id, eQ.BEX.ROLE_SUBSCRIPTIONS);
    }
    let v = a?.features.has(eQ.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)
            ? eJ.intl.string(eJ.t.n0q7sI)
            : eJ.intl.string(eJ.t.QoYdie),
        p =
            (a?.features.has(eQ.GuildFeatures.CREATOR_MONETIZABLE) ||
                a?.features.has(eQ.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) ??
            !1,
        A = p ? eJ.intl.string(eJ.t["G/7ciZ"]) : eJ.intl.string(eJ.t.IFOiit),
        C = p ? eJ.intl.string(eJ.t.GjgQO1) : eJ.intl.string(eJ.t.E7AO6t);
    return (0, i.jsx)(i.Fragment, {
        children: d((e, t) =>
            t
                ? (0, i.jsxs)(tA.animated.div, {
                      style: e,
                      className: t5.kL,
                      children: [
                          (0, i.jsxs)("div", {
                              className: t5.U1,
                              children: [
                                  (0, i.jsxs)(b.E, {
                                      variant: "text-xs/normal",
                                      className: t5.l2,
                                      children: [
                                          (0, i.jsx)(tT.m, { size: "xxs", color: "currentColor", className: t5.Kk }),
                                          eJ.intl.string(eJ.t.znhX2R),
                                      ],
                                  }),
                                  (0, i.jsx)(t3, { handleHide: m }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: t5.hQ,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: r()(t5.CT, p && t5.en),
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: t5.F2,
                                              children: (0, i.jsxs)("div", {
                                                  className: t5.IZ,
                                                  children: [
                                                      (0, i.jsx)(t7, {
                                                          username: eJ.intl.string(eJ.t.AkORco),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                                          title: eJ.intl.string(eJ.t.yO6Fxu),
                                                          messageCount: "34",
                                                          reaction: "\u26A1\uFE0F",
                                                          reactionCount: "724",
                                                          classname: t5.q6,
                                                      }),
                                                      (0, i.jsx)(t7, {
                                                          username: eJ.intl.string(eJ.t.DPg3YM),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                                          title: eJ.intl.string(eJ.t["R5XnC/"]),
                                                          messageCount: "34",
                                                          reactionCount: "84",
                                                          reaction: "\uD83D\uDC9E",
                                                          classname: t5.q6,
                                                      }),
                                                      (0, i.jsx)(t7, {
                                                          username: eJ.intl.string(eJ.t.KIelex),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                                          title: eJ.intl.string(eJ.t.pt88Vb),
                                                          messageCount: "7,103",
                                                          reaction: "\u26A1\uFE0F",
                                                          reactionCount: "724",
                                                          classname: t5.Ob,
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          (0, i.jsxs)("article", {
                                              className: t5.n$,
                                              children: [
                                                  (0, i.jsx)(j.D, {
                                                      variant: "heading-lg/semibold",
                                                      color: "text-strong",
                                                      children: A,
                                                  }),
                                                  (0, i.jsx)(tO.h, { size: 8 }),
                                                  (0, i.jsx)(b.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: C,
                                                  }),
                                                  (0, i.jsx)(tO.h, { size: 16 }),
                                                  (0, i.jsxs)(E.D, {
                                                      onClick: () =>
                                                          open(t4.A.getCreatorSupportArticleURL(eQ.MVz.MEDIA_CHANNEL)),
                                                      className: t5.zy,
                                                      children: [
                                                          (0, i.jsx)(b.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-link",
                                                              children: eJ.intl.string(eJ.t.OahzBd),
                                                          }),
                                                          (0, i.jsx)(tQ.t, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: t5.QI,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)(tO.h, { size: 16 }),
                                                  (0, i.jsx)("div", {
                                                      className: t5.Qq,
                                                      children: h.map((e) =>
                                                          (0, i.jsx)(
                                                              b.E,
                                                              {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-default",
                                                                  className: t5.U0,
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
                                          className: r()(t5.CT, t5.Gw),
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: t5.F2,
                                                  children: (0, i.jsxs)("div", {
                                                      className: t5.kQ,
                                                      children: [
                                                          (0, i.jsx)("img", {
                                                              src: l
                                                                  ? "/assets/b58ce8ba4d6516a2.png"
                                                                  : "/assets/9ed42f4f17fd8793.png",
                                                              alt: "",
                                                              className: t5.JM,
                                                          }),
                                                          (0, i.jsx)("img", {
                                                              src: l
                                                                  ? "/assets/d0f129a0c1627f7a.png"
                                                                  : "/assets/fddfcda2eca5c8d4.png",
                                                              alt: "",
                                                              className: t5.JM,
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              (0, i.jsxs)("article", {
                                                  className: t5.n$,
                                                  children: [
                                                      (0, i.jsxs)(b.E, {
                                                          variant: "text-xxs/bold",
                                                          className: t5.X4,
                                                          children: [
                                                              eJ.intl.string(eJ.t.NChGwy),
                                                              " ",
                                                              (0, i.jsx)("span", {
                                                                  role: "img",
                                                                  "aria-label": "",
                                                                  children: "\uD83D\uDD25",
                                                              }),
                                                          ],
                                                      }),
                                                      (0, i.jsx)(tO.h, { size: 10 }),
                                                      (0, i.jsx)(j.D, {
                                                          variant: "heading-lg/semibold",
                                                          color: "text-strong",
                                                          children: eJ.intl.string(eJ.t["N/TRrT"]),
                                                      }),
                                                      (0, i.jsx)(tO.h, { size: 8 }),
                                                      (0, i.jsx)(b.E, {
                                                          variant: "text-md/normal",
                                                          color: "text-muted",
                                                          children: eJ.intl.string(eJ.t.t3yWxG),
                                                      }),
                                                      (0, i.jsx)(tO.h, { size: 16 }),
                                                      (0, i.jsx)("div", {
                                                          className: t5.Qq,
                                                          children: x.map((e) =>
                                                              (0, i.jsx)(
                                                                  b.E,
                                                                  {
                                                                      variant: "text-sm/medium",
                                                                      color: "text-default",
                                                                      className: t5.U0,
                                                                      children: e,
                                                                  },
                                                                  e,
                                                              ),
                                                          ),
                                                      }),
                                                      (0, i.jsx)(tO.h, { size: 16 }),
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
var t9 = n(331322),
    ne = n(111159),
    nt = n(517461),
    nn = n(350527),
    nl = n(95035),
    ni = n(221314),
    ns = n(50897),
    na = n(419949);
let nr = { mass: 1, tension: 250, friction: 18, clamp: !0 };
function no(e) {
    let { guild: t } = e,
        n = (0, g.bG)([eH.A], () => eH.A.can(eQ.xBc.MANAGE_GUILD, t));
    return (0, i.jsxs)(t9.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            (0, i.jsxs)(t9.B, {
                direction: "vertical",
                gap: 16,
                children: [
                    (0, i.jsx)(t9.B, {
                        direction: "vertical",
                        gap: 4,
                        children: (0, i.jsx)(b.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: eJ.intl.string(ni.default.fP8DVx),
                        }),
                    }),
                    (0, i.jsxs)(t9.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, i.jsx)(b.E, {
                                variant: "text-lg/semibold",
                                color: "text-default",
                                children: eJ.intl.string(ni.default["i7CH/I"]),
                            }),
                            (0, i.jsxs)("ol", {
                                className: r()(ns.p_, ns.o8, ns.ap),
                                children: [
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(b.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: eJ.intl.string(ni.default["+Izoz7"]),
                                        }),
                                    }),
                                    (0, i.jsxs)("li", {
                                        children: [
                                            (0, i.jsx)(b.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eJ.intl.string(ni.default["iu/RkU"]),
                                            }),
                                            (0, i.jsxs)("ul", {
                                                className: r()(ns.p_, ns.t3, ns.zS),
                                                children: [
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(b.E, {
                                                            variant: "text-md/normal",
                                                            color: "text-default",
                                                            children: eJ.intl.string(ni.default.QogKbP),
                                                        }),
                                                    }),
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(b.E, {
                                                            variant: "text-md/normal",
                                                            color: "text-default",
                                                            children: eJ.intl.string(ni.default.V4orHT),
                                                        }),
                                                    }),
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(b.E, {
                                                            variant: "text-md/normal",
                                                            color: "text-default",
                                                            children: eJ.intl.string(ni.default.VrrQXe),
                                                        }),
                                                    }),
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(b.E, {
                                                            variant: "text-md/normal",
                                                            color: "text-default",
                                                            children: eJ.intl.string(ni.default.pSuM5e),
                                                        }),
                                                    }),
                                                    (0, i.jsx)("li", {
                                                        children: (0, i.jsx)(b.E, {
                                                            variant: "text-md/normal",
                                                            color: "text-default",
                                                            children: eJ.intl.string(ni.default["/RLXlI"]),
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
                                            children: eJ.intl.string(ni.default.j4AmYy),
                                        }),
                                    }),
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(b.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: eJ.intl.format(ni.default["/g+PvX"], {
                                                termsOfService: eQ.X7G.TERMS,
                                                communityGuidelines: eQ.X7G.GUIDELINES,
                                                helpArticle: t4.A.getArticleURL(eQ.MVz.FLAG_TO_MOD),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)(t9.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, i.jsx)(b.E, {
                                variant: "text-lg/semibold",
                                color: "text-default",
                                children: eJ.intl.string(ni.default.qJWXsz),
                            }),
                            (0, i.jsxs)("ul", {
                                className: r()(ns.p_, ns.zS, ns.ap),
                                children: [
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(b.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: eJ.intl.format(ni.default.FUBV1P, {
                                                survey: "https://discord.sjc1.qualtrics.com/jfe/form/SV_3WvT7SqlWpCJ4HQ",
                                            }),
                                        }),
                                    }),
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(b.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            children: eJ.intl.format(ni.default.W4MIAG, {
                                                feedback: "https://forms.gle/RbDhW46PMmR39XUP7",
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)(t9.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, i.jsx)(b.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: eJ.intl.string(ni.default.J3HKmx),
                            }),
                            n &&
                                (0, i.jsx)(b.E, {
                                    variant: "text-md/normal",
                                    color: "text-default",
                                    children: eJ.intl.format(ni.default["9x2vbP"], {
                                        optOutHook: (e) =>
                                            (0, i.jsx)(nl.A, {
                                                onClick: () =>
                                                    t1.A.open(t.id, eQ.BEX.MODERATION, null, eQ.nd0.SAFETY_OVERVIEW),
                                                children: e,
                                            }),
                                    }),
                                }),
                            (0, i.jsx)(b.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: eJ.intl.string(ni.default.KcCY25),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("img", {
                src: "/assets/c42cecffc003efa2.svg",
                alt: eJ.intl.string(ni.default["UxV/3+"]),
                width: nn.T5,
                height: nn.T5,
            }),
        ],
    });
}
function nc(e) {
    var t;
    let { guild: n } = e,
        [l, a] = (0, nt.V)("report-to-mod-education-dismissed", !1),
        [o, c] = (0, nt.V)("report-to-mod-education-expanded", !1),
        { transitions: d, setVisible: u } = (function () {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tb.p)(e, {
                    keys: (e) => (e ? "shown" : "hidden"),
                    config: nr,
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
            (0, tb.p)(t, {
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
                  ? (0, i.jsxs)(tA.animated.div, {
                        style: e,
                        onClick: () => c(!o),
                        className: r()(e0.kL, ns.kL, na.mainCard),
                        children: [
                            (0, i.jsxs)("div", {
                                className: ns.mG,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: ns.cy,
                                        children: [
                                            (0, i.jsx)(ne.p, {
                                                size: "custom",
                                                width: 28,
                                                height: 28,
                                                color: "currentColor",
                                                className: ns.Mg,
                                            }),
                                            (0, i.jsx)(b.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                children: eJ.intl.string(eJ.t.uvGmCx),
                                            }),
                                            (0, i.jsx)(b.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                children: "\u2014",
                                            }),
                                            (0, i.jsx)(j.D, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: eJ.intl.string(ni.default["95qQRB"]),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(E.D, {
                                        onClick: () => a(!0),
                                        children: (0, i.jsx)(tE.P, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: ns.ut,
                                        }),
                                    }),
                                ],
                            }),
                            m((e, t) =>
                                t
                                    ? (0, i.jsxs)(tA.animated.div, {
                                          style: e,
                                          children: [
                                              (0, i.jsx)("hr", { className: ns.me }),
                                              (0, i.jsx)(no, { guild: n }),
                                          ],
                                      })
                                    : null,
                            ),
                        ],
                    })
                  : null,
          );
}
var nd = n(191842),
    nu = n(565645),
    nm = n(21161),
    nh = n(796774),
    nx = n(209932),
    ng = n(174459),
    nf = n(102597),
    nj = n(904054),
    nv = n(584014),
    np = n(536283);
n(980504);
var nA = n(59618);
function nC(e) {
    let { className: t, sound: n, playSound: l, isPlaying: a, text: o } = e,
        c = n?.emojiId != null || n?.emojiName != null,
        d = eJ.intl.formatToPlainString(eJ.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name }),
        u = s.useCallback(() => {
            ng.default.track(eQ.HAw.MODERATOR_QUEUE_ACTION, { guild_id: eB.A.getGuildId(), action: "airhorn" }),
                null != l && l();
        }, [l]);
    return (0, i.jsxs)(E.D, {
        "aria-label": d,
        tag: "span",
        onClick: u,
        className: r()(nA.Ls, nA.oR, { [nA.he]: !0 === a }, t),
        children: [
            c && (0, i.jsx)(nu.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: nA.JS }),
            (0, i.jsx)("span", { children: ` ${o} ` }),
        ],
    });
}
function nN(e) {
    let { containerRef: t, text: n } = e,
        l = s.useRef(null),
        a = (0, g.bG)([nx.A], () => nx.A.getSoundsForGuild("0")?.find((e) => "airhorn" === e.name)),
        { createMultipleConfettiAt: r } = s.useContext(nm.x),
        o = (0, g.bG)([P.Ay], () => P.Ay.useReducedMotion),
        { isPlaying: c, playSound: d } = (function (e) {
            let { isPlaying: t, playSound: n } = (0, nv.A)(null != e ? (0, nf.A)(e.soundId) : null);
            return {
                isPlaying: t,
                playSound: s.useCallback(async () => {
                    let t = (0, nj.A)(e?.volume ?? 1);
                    return !!(await n({ volume: t }));
                }, [n, e?.volume]),
            };
        })(a);
    (0, D.Ay)(() => {
        (0, nh.E7)();
    });
    let u = s.useCallback(async () => {
        if ((await d()) && (l.current?.addAnimation(), !o && t?.current != null)) {
            let e = t.current.getBoundingClientRect(),
                n = { x: e.left + e.width / 2, y: e.top + e.height / 3 },
                l = np.uI[Math.floor(Math.random() * np.uI.length)];
            r(
                n.x,
                n.y,
                { velocity: { type: "static-random", minValue: { x: -500, y: -500 }, maxValue: { x: 500, y: -100 } } },
                40,
                { sprite: l },
            );
        }
    }, [d, r, o, t]);
    return void 0 === a ? null : (0, i.jsx)(nC, { sound: a, playSound: u, isPlaying: c, text: n });
}
function nb() {
    let e = s.useRef(null);
    return (0, i.jsxs)(t9.B, {
        className: nA.kL,
        direction: "vertical",
        align: "center",
        justify: "center",
        padding: { top: 24, bottom: 24 },
        ref: e,
        children: [
            (0, i.jsx)(nd._, { size: "custom", width: 48, height: 48 }),
            (0, i.jsxs)(t9.B, {
                direction: "vertical",
                align: "center",
                justify: "center",
                children: [
                    (0, i.jsx)(j.D, {
                        className: nA.wx,
                        variant: "heading-md/medium",
                        children: eJ.intl.string(ni.default.h6QNky),
                    }),
                    (0, i.jsx)(b.E, {
                        className: nA.Qq,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: eJ.intl.format(ni.default["8N4c58"], {
                            airhornHook: (t) => (0, i.jsx)(nN, { containerRef: e, text: t }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
var nE = n(34457),
    nS = n(317525),
    ny = n(44234),
    nT = n(625494),
    nI = n(927813),
    n_ = n(935208),
    nR = n(387255);
function nk(e) {
    let { channelName: t, guildId: l, tagFilter: a, channel: r } = e,
        o = (0, ev.S4)(r),
        c = (0, ta.AI)(r),
        d = r.isMediaChannel(),
        u = s.useCallback(() => {
            (0, tp.zd)(),
                (0, tN.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("43051"), n.e("90052")]).then(n.bind(n, 653682));
                    return (t) => (0, i.jsx)(e, { ...t, guildId: l });
                });
        }, [l]),
        m = a.size > 0,
        h = c || o,
        x = !m && o && !d,
        g = s.useCallback(
            () =>
                x
                    ? u()
                    : c
                      ? void (r.isGameInvitesChannel() ? (0, z.d)(r) : nT._.dispatch(eQ.jej.FOCUS_COMPOSER_TITLE))
                      : (0, eQ.FXj)(),
            [u, x, c, r],
        );
    return (0, i.jsxs)("div", {
        className: tV.k,
        children: [
            (0, i.jsx)(j.D, {
                className: tV.w,
                variant: "heading-md/semibold",
                children: m
                    ? eJ.intl.formatToPlainString(eJ.t.lvPci0, { numTags: a.size })
                    : eJ.intl.string(eJ.t.PwTMG0),
            }),
            (0, i.jsx)(b.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: m
                    ? eJ.intl.formatToPlainString(eJ.t.AAeye1, { numTags: a.size })
                    : eJ.intl.formatToPlainString(eJ.t.YtsXFD, { channelName: t }),
            }),
            h &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tO.h, { size: 16 }),
                        (0, i.jsx)(S.$, {
                            text: x ? eJ.intl.string(eJ.t.DgatTQ) : eJ.intl.string(eJ.t.wOKE8I),
                            variant: "secondary",
                            onClick: g,
                        }),
                    ],
                }),
        ],
    });
}
var nM = n(253913),
    nw = n(658688);
let nL = { width: 28, height: 28 },
    nD = { width: 20, height: 20, borderRadius: 10 };
function nP(e) {
    (0, tp.bh)({ onboardingCTA: e });
}
class nO {
    currentIndex = 0;
    steps = [];
    completedSteps = 0;
    addStep(e) {
        ++this.currentIndex, this.steps.push({ index: this.currentIndex, ...e }), e.isDone && this.completedSteps++;
    }
    getSteps() {
        return this.steps;
    }
    isAllDone() {
        return this.steps.every((e) => e.isDone);
    }
}
function nF(e) {
    let { guild: t, roles: n } = e;
    return (0, i.jsx)("div", {
        className: nw.Ei,
        "aria-label": eJ.intl.formatToPlainString(eJ.t.PCs0oo, { numRoles: n.length }),
        children: n.map((e) =>
            (0, i.jsx)(tM.b_, { role: e, canRemove: !1, onRemove: eQ.FXj, guildId: t.id, className: nw.Yq }, e.id),
        ),
    });
}
let nG = { mass: 1, tension: 250, friction: 18, clamp: !0 };
function nz(e) {
    let { handleHide: t } = e;
    return (0, i.jsx)(E.D, {
        onClick: t,
        className: nw.b,
        "aria-label": eJ.intl.string(eJ.t.WAI6xu),
        children: (0, i.jsx)(tE.P, { size: "md", color: "currentColor", className: nw.ut }),
    });
}
function nU(e) {
    let { expanded: t, onClick: n } = e;
    return (0, i.jsx)(E.D, {
        onClick: n,
        className: nw.b,
        "aria-label": t ? eJ.intl.string(eJ.t.iTcuma) : eJ.intl.string(eJ.t.dcl9MQ),
        children: t
            ? (0, i.jsx)(tS.g, { size: "xs", color: "currentColor", className: nw.ut })
            : (0, i.jsx)(ty._, { size: "xs", color: "currentColor", className: nw.ut }),
    });
}
let nH = (e) => {
    var t;
    let { hasAnyThread: l, hasActiveThreads: a, channel: o } = e,
        c = (0, O.Ay)(o),
        { onboardingExpanded: u } = (0, eb.kU)((e) => {
            let { onboardingExpanded: t } = e;
            return { onboardingExpanded: t };
        }, d.x),
        { tagFilter: m } = (0, ej.R)(o.id),
        h = (0, g.bG)([t2.A], () => t2.A.getGuild(o.getGuildId())),
        x = (0, ev.S4)(o),
        { transitions: f, setVisible: p } = (function () {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tb.p)(e, {
                    keys: (e) => (e ? "shown" : "hidden"),
                    config: nG,
                    from: { opacity: 0 },
                    enter: { opacity: 1 },
                    leave: { opacity: 0 },
                    unique: !0,
                }),
                setVisible: t,
            };
        })(),
        A = (0, tb.p)(u, {
            from: { maxHeight: 0 },
            enter: { maxHeight: 500 },
            leave: { maxHeight: 0 },
            config: { duration: 200 },
        }),
        C = s.useCallback((e) => {
            e.clickHandler?.();
        }, []),
        N = ((t = o.id), s.useCallback(() => (p(!1), tx.A.hideAdminOnboarding(t, !0)), [t, p])),
        {
            onboardingSteps: S,
            isDismissed: y,
            isHidden: I,
            isAllDone: _,
        } = (function (e) {
            var t;
            let l,
                a,
                r,
                o,
                { guild: c, channel: d, hasAnyThread: u, handleHide: m } = e,
                [h, x] = s.useState(!1),
                f = (0, tZ.l)(d.id),
                j = (0, g.bG)([th.A], () => th.A.hasHidden(d.id)),
                v =
                    ((l = c?.id),
                    (a = (0, g.bG)([nS.A], () => (null != l ? nS.A.getSortedRoles(l) : void 0))),
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
                            j = new nO(),
                            v = d?.isMediaChannel() === !0;
                        return (
                            null == c ||
                                null == d ||
                                v ||
                                null == a ||
                                j.addStep(
                                    ((t = (0, tw.A)(d)
                                        ? tC.kg(eQ.xBc.VIEW_CHANNEL, eQ.xBc.SEND_MESSAGES)
                                        : eQ.xBc.SEND_MESSAGES),
                                    (s =
                                        (l =
                                            null != c
                                                ? (0, nR.N)(a, d, t).filter(
                                                      (e) =>
                                                          d.permissionOverwrites.hasOwnProperty(e.id) || (0, nE.Oy)(e),
                                                  )
                                                : []).length > 0),
                                    (r = l.some((e) => (0, nE.Oy)(e))),
                                    {
                                        name: eJ.intl.string(eJ.t["/Ax2gs"]),
                                        description: eJ.intl.string(eJ.t.gAIOfg),
                                        isDone: s && r,
                                        shouldWarn: s && !r,
                                        children: s ? (0, i.jsx)(nF, { guild: c, roles: l }) : null,
                                        clickHandler: () => {
                                            nP(nM._G.PERMISSIONS),
                                                (0, tN.openModalLazy)(
                                                    async () => {
                                                        let { default: e } = await Promise.all([
                                                            n.e("10277"),
                                                            n.e("17110"),
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
                                                        onCloseRequest: eQ.FXj,
                                                        onCloseCallback: () => x(!1),
                                                    },
                                                );
                                        },
                                    }),
                                ),
                            v ||
                                d.isGameInvitesChannel() ||
                                j.addStep(
                                    ((o = null != d.topic && d.topic.length > 0),
                                    {
                                        name: eJ.intl.string(eJ.t.UgJu1e),
                                        description: eJ.intl.string(eJ.t["3C6/G1"]),
                                        clickHandler: () => {
                                            nP(nM._G.GUIDELINES), tk.Ay.open(d.id, void 0, eQ.b7d.TOPIC);
                                        },
                                        isDone: o,
                                    }),
                                ),
                            d?.isGameInvitesChannel() &&
                                j.addStep(
                                    ((m = null != d.availableTags && d.availableTags.length > 1),
                                    {
                                        name: eJ.intl.string(tH.default["5a7Pjb"]),
                                        description: eJ.intl.string(tH.default["MKZ+Ky"]),
                                        clickHandler: () => {
                                            nP(nM._G.RECOMMENDED_TAGS),
                                                (0, tN.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("30264"),
                                                        n.e("66089"),
                                                    ]).then(n.bind(n, 537808));
                                                    return (t) => (0, i.jsx)(e, { ...t, channelId: d.id });
                                                });
                                        },
                                        isDone: m,
                                    }),
                                ),
                            j.addStep(
                                ((h = +!!d.isGameInvitesChannel()),
                                (g = null != d.availableTags && d.availableTags.length > h),
                                {
                                    name: eJ.intl.string(eJ.t.xiBFCi),
                                    description: eJ.intl.string(eJ.t.wCv4Oz),
                                    clickHandler: () => {
                                        nP(nM._G.TAGS),
                                            tk.Ay.open(d.id),
                                            (0, tN.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("2225"),
                                                    n.e("47326"),
                                                ]).then(n.bind(n, 950989));
                                                return (t) =>
                                                    (0, i.jsx)(e, { ...t, channelId: d.id, guildId: d.guild_id });
                                            });
                                    },
                                    isDone: g,
                                }),
                            ),
                            j.addStep(
                                ((f = null != d.defaultReactionEmoji),
                                {
                                    name: eJ.intl.string(eJ.t.QlyC9s),
                                    description: eJ.intl.string(eJ.t["+50LJg"]),
                                    clickHandler: () => {
                                        nP(nM._G.DEFAULT_REACTION),
                                            (0, tN.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("35598"),
                                                    n.e("50720"),
                                                    n.e("94209"),
                                                    n.e("85157"),
                                                ]).then(n.bind(n, 939940));
                                                return (t) => (0, i.jsx)(e, { ...t, channel: d });
                                            });
                                    },
                                    isDone: f,
                                }),
                            ),
                            d.isGameInvitesChannel() ||
                                j.addStep(
                                    ((e = c?.id),
                                    {
                                        name: eJ.intl.string(eJ.t["6A0O64"]),
                                        description: v
                                            ? eJ.intl.string(eJ.t["8hI5vr"])
                                            : eJ.intl.format(eJ.t.ysxcAw, {
                                                  onClick: (t) => {
                                                      null != e &&
                                                          (t.preventDefault(),
                                                          t.stopPropagation(),
                                                          (0, tp.zd)(),
                                                          (0, tN.openModalLazy)(async () => {
                                                              let { default: t } = await Promise.all([
                                                                  n.e("43051"),
                                                                  n.e("90052"),
                                                              ]).then(n.bind(n, 653682));
                                                              return (n) => (0, i.jsx)(t, { ...n, guildId: e });
                                                          }));
                                                  },
                                              }),
                                        clickHandler: () => {
                                            (nP(nM._G.CREATE_POST), d.isGameInvitesChannel())
                                                ? (0, z.d)(d)
                                                : nT._.dispatch(eQ.jej.FOCUS_COMPOSER_TITLE);
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
                    (r = n_.default.extractTimestamp(t)),
                    !ee()().isBefore(ee()(r).add(ee().duration(15, "days"))));
            return (
                (o = s.useRef(0)),
                s.useEffect(
                    () => (
                        h || !p || A
                            ? clearTimeout(o.current)
                            : (o.current = setTimeout(() => {
                                  m();
                              }, 60 * nI.A.Millis.SECOND)),
                        () => clearTimeout(o.current)
                    ),
                    [p, A, m, h],
                ),
                { onboardingSteps: v, isHidden: j, isDismissed: f, isAllDone: p }
            );
        })({ guild: h, channel: o, hasAnyThread: l, handleHide: N }),
        R = !I && !y,
        k = (0, eb.ST)(),
        M = o.isMediaChannel();
    function w(e) {
        return k.getState().setOnboardingExpanded(e);
    }
    return ((0, D.Ay)(() => {
        _ && R && N();
    }),
    !(function (e) {
        let { isAllDone: t, isVisible: n, canManageChannel: l, guildId: i, channel: a } = e,
            r = (0, g.bG)([nS.A], () => (null != i ? nS.A.partitionVersion(i) : void 0)),
            o = s.useCallback(() => {
                nT._.dispatch(eQ.jej.REMEASURE_TARGET);
            }, []);
        s.useEffect(() => {
            o();
        }, [o, t, n, l, r, a.id, a.permissionOverwrites]);
    })({ isAllDone: _, isVisible: R, canManageChannel: x, guildId: h?.id, channel: o }),
    s.useEffect(() => {
        y || p(!I);
    }, [y, p, I]),
    (0, D.Ay)(() => {
        (l && R) || w(!0);
    }),
    null == h)
        ? null
        : (0, Y.Fo)(o)
          ? a || 0 !== m.size
              ? m.size > 0
                  ? null
                  : (0, i.jsx)(nc, { guild: h })
              : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(nc, { guild: h }), (0, i.jsx)(nb, {})] })
          : R && x
            ? M
                ? l
                    ? null
                    : (0, i.jsx)(t6, { channel: o })
                : (0, i.jsx)(i.Fragment, {
                      children: f((e, t) =>
                          t
                              ? (0, i.jsx)(tA.animated.div, {
                                    style: e,
                                    className: nw.kL,
                                    children: (0, i.jsxs)("div", {
                                        className: nw.iE,
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: nw.U1,
                                                children: (0, i.jsxs)(v.F, {
                                                    component: (0, i.jsx)(j.D, {
                                                        variant: "heading-md/semibold",
                                                        children: eJ.intl.string(eJ.t.LhlgY9),
                                                    }),
                                                    children: [
                                                        (0, i.jsx)(j.D, {
                                                            variant: "heading-md/medium",
                                                            className: nw.wx,
                                                            children: eJ.intl.format(eJ.t["9L+8bz"], {
                                                                numCompleted: S.completedSteps.toString(),
                                                                numSteps: S.steps.length.toString(),
                                                            }),
                                                        }),
                                                        (0, i.jsxs)(b.E, {
                                                            variant: "text-xs/normal",
                                                            className: nw.l2,
                                                            children: [
                                                                (0, i.jsx)(tT.m, {
                                                                    size: "xxs",
                                                                    color: "currentColor",
                                                                    className: nw.Kk,
                                                                }),
                                                                eJ.intl.string(eJ.t.znhX2R),
                                                            ],
                                                        }),
                                                        (0, i.jsx)(nU, { expanded: u, onClick: () => w(!u) }),
                                                        (0, i.jsx)(nz, { handleHide: N }),
                                                    ],
                                                }),
                                            }),
                                            A((e, t) =>
                                                t
                                                    ? (0, i.jsx)(tA.animated.div, {
                                                          style: e,
                                                          className: nw.qI,
                                                          children: (0, i.jsx)("ol", {
                                                              className: nw.D4,
                                                              children: S.getSteps().map((e) =>
                                                                  (0, i.jsxs)(
                                                                      E.D,
                                                                      {
                                                                          tag: "li",
                                                                          "aria-label": e.name,
                                                                          onClick: () => C(e),
                                                                          className: r()(nw._h, { [nw.so]: e.isDone }),
                                                                          children: [
                                                                              e.shouldWarn
                                                                                  ? (0, i.jsx)(T.E, {
                                                                                        size: "custom",
                                                                                        width: 20,
                                                                                        height: 20,
                                                                                        color: ea.A.colors
                                                                                            .ICON_FEEDBACK_CRITICAL,
                                                                                        className: nw.FY,
                                                                                    })
                                                                                  : e.isDone
                                                                                    ? (0, i.jsx)(es.fk, {
                                                                                          color: ea.A.colors
                                                                                              .STATUS_POSITIVE_BACKGROUND
                                                                                              .css,
                                                                                          icon: tI.A,
                                                                                          style: nD,
                                                                                          className: nw.FY,
                                                                                      })
                                                                                    : (0, i.jsx)(es.fk, {
                                                                                          disableColor: !0,
                                                                                          icon: (0, t_.k)(ny.A),
                                                                                          style: nL,
                                                                                          className: r()(nw.FY, nw.so),
                                                                                      }),
                                                                              (0, i.jsxs)("div", {
                                                                                  className: nw.PM,
                                                                                  children: [
                                                                                      (0, i.jsx)(b.E, {
                                                                                          variant: "text-md/medium",
                                                                                          color: e.isDone
                                                                                              ? "text-default"
                                                                                              : "text-strong",
                                                                                          className: nw.u,
                                                                                          children: e.name,
                                                                                      }),
                                                                                      (0, i.jsx)(b.E, {
                                                                                          variant: "text-sm/normal",
                                                                                          color: "text-default",
                                                                                          className: nw.XK,
                                                                                          children: e.description,
                                                                                      }),
                                                                                      e.children,
                                                                                  ],
                                                                              }),
                                                                              (0, i.jsx)(tR._, {
                                                                                  size: "custom",
                                                                                  color: "currentColor",
                                                                                  width: 12,
                                                                                  className: nw.FY,
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
                ? (0, i.jsx)(tW, { channel: o, tagFilter: m })
                : (0, i.jsx)(nk, { channelName: c ?? "", guildId: o.guild_id, tagFilter: m, channel: o });
};
var nB = n(717421),
    nV = n(622629),
    nW = n(22231),
    n$ = n(46054),
    nq = n(101136);
let nK = s.memo(function (e) {
    let { channel: t, onChange: l } = e,
        a = (0, eb.ST)(),
        { guidelinesOpen: o } = (0, eb.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, d.x),
        c = (0, ev.S4)(t),
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
        f = (0, nB.z)({ opacity: +!!o, maxHeight: 500 * !!o, config: { duration: 300 }, onRest: () => g(!o) });
    return null != t.topic && t.topic.length > 0
        ? (0, i.jsx)(tA.animated.div, {
              style: f,
              className: x ? nq.kK : void 0,
              children: (0, i.jsxs)("div", {
                  className: nq.kL,
                  children: [
                      (0, i.jsxs)("div", {
                          className: nq.N1,
                          children: [
                              (0, i.jsxs)(j.D, {
                                  variant: "heading-lg/semibold",
                                  className: nq.$4,
                                  children: [
                                      (0, i.jsx)(nV.B, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                          height: 20,
                                      }),
                                      eJ.intl.string(eJ.t["4d4T4l"]),
                                      c &&
                                          (0, i.jsx)(E.D, {
                                              onClick: function () {
                                                  tk.Ay.open(t.id, void 0, eQ.b7d.TOPIC);
                                              },
                                              tag: "span",
                                              className: nq.vk,
                                              children: (0, i.jsx)(nW.R, { size: "xs", color: "currentColor" }),
                                          }),
                                  ],
                              }),
                              (0, i.jsx)(E.D, {
                                  "aria-label": eJ.intl.string(eJ.t.cpT0Cq),
                                  className: nq.vk,
                                  onClick: function () {
                                      a.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, i.jsx)(tE.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: nq.iQ,
                          children: [
                              (0, i.jsx)(b.E, {
                                  selectable: !0,
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  style: { maxHeight: 220 },
                                  className: r()(nq.I4, e1.PT),
                                  children: (0, i.jsx)("div", {
                                      ref: h,
                                      children: n$.A.parseForumPostGuidelines(t.topic, !0, {
                                          channelId: t.id,
                                          allowHeading: !0,
                                          allowList: !0,
                                      }),
                                  }),
                              }),
                              u &&
                                  (0, i.jsxs)("div", {
                                      className: nq.jP,
                                      children: [
                                          (0, i.jsx)("div", { className: nq.D7 }),
                                          (0, i.jsx)("div", {
                                              className: nq.kx,
                                              children: (0, i.jsx)(E.D, {
                                                  className: nq.DD,
                                                  onClick: function () {
                                                      (0, tN.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("47514"),
                                                              n.e("45457"),
                                                          ]).then(n.bind(n, 494664));
                                                          return (n) => (0, i.jsx)(e, { ...n, channel: t });
                                                      });
                                                  },
                                                  children: (0, i.jsxs)(b.E, {
                                                      variant: "text-sm/semibold",
                                                      color: "text-brand",
                                                      className: nq.ur,
                                                      children: [
                                                          eJ.intl.string(eJ.t.Vu7odK),
                                                          (0, i.jsx)(ty._, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: nq.yS,
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
var nY = n(621466),
    nQ = n(189812),
    nX = n(884496),
    nJ = n(511274),
    nZ = n(408278),
    n0 = n(952270),
    n1 = n(39623),
    n2 = n(278416),
    n4 = n(465532),
    n8 = n(608299),
    n5 = n(355622),
    n3 = n(530134),
    n7 = n(138617),
    n6 = n(625928),
    n9 = n(960850),
    le = n(702841),
    lt = n(364522),
    ln = n(215497),
    ll = n(914905),
    li = n(750943),
    ls = n(844222),
    la = n(780777),
    lr = n(518960),
    lo = n(811998);
let lc = { scale: 0.95, opacity: 0 },
    ld = { scale: 1, opacity: 1 },
    lu = { scale: 1, opacity: 1 },
    lm = { tension: 2400, friction: 52 },
    lh = `.${lo.EJ}`,
    lx = { behavior: "smooth", block: "nearest", inline: "nearest" };
function lg(e) {
    let { channelId: t, onClick: n, onClose: l, onMouseEnter: a, listItemProps: r } = e,
        o = s.useRef(null),
        c = (0, g.bG)([ez.A], () => ez.A.getChannel(t), [t]);
    return (
        J()(null != c, "Forum Channel is null"),
        (0, i.jsxs)(E.D, {
            ...r,
            "aria-label": eJ.intl.string(eJ.t.nzoF5p),
            className: lo.EJ,
            onMouseEnter: a,
            onClick: function (e) {
                0 === e.detail && o.current?.activateUploadDialogue(), (0, tp.ri)({ isMobile: !1 }), n?.();
            },
            children: [
                (0, i.jsx)(la.A, {
                    className: lo.Fg,
                    ref: o,
                    onChange: (e) => {
                        l?.(),
                            (0, lr.R)(e.currentTarget.files, c, to.C.FirstThreadMessage, {
                                requireConfirm: !0,
                                origin: "file_picker",
                            }),
                            (e.currentTarget.value = null);
                    },
                    multiple: c.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
                (0, i.jsx)(li.X, { size: "custom", color: "currentColor", width: 28, height: 28, className: lo.T3 }),
            ],
        })
    );
}
function lf(e) {
    let { channelId: t, closePopout: n } = e,
        [l, a] = s.useState(!1),
        { reducedMotion: r } = s.useContext(ls.C),
        o = (0, nB.z)({ from: r.enabled ? ld : lc, to: lu, config: lm }, "animate-always"),
        c = (0, g.bG)([P.Ay], () => P.Ay.keyboardModeEnabled),
        d = (0, g.bG)([tu.A], () => tu.A.getUploads(t, n5.oU.CREATE_FORUM_POST.drafts.type)),
        x = (0, m.Ay)({
            id: "forum-composer-attachments-popout",
            isEnabled: c,
            orientation: h.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, i.jsx)(tA.animated.div, {
        className: lo.jC,
        onMouseLeave: function () {
            l || c || n();
        },
        onFocus: function (e) {
            e.target.scrollIntoView(lx);
        },
        style: o,
        children: (0, i.jsx)(lt.Ip, {
            orientation: "horizontal",
            className: lo.SW,
            paddingFix: !1,
            fade: !0,
            children: (0, i.jsx)(u.hD, {
                navigator: x,
                children: (0, i.jsx)(u.PR, {
                    children: (e) => {
                        let { ref: n, ...l } = e;
                        return (0, i.jsxs)("div", {
                            className: lo.p8,
                            ref: n,
                            ...l,
                            children: [
                                d.map((e) =>
                                    (0, i.jsx)(
                                        ll.A,
                                        {
                                            channelId: t,
                                            draftType: n5.oU.CREATE_FORUM_POST.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: c,
                                            hideFileName: !0,
                                            size: ln.L.SMALL,
                                        },
                                        e.id,
                                    ),
                                ),
                                (0, i.jsx)(lj, { channelId: t, setFileInputOpen: a }),
                            ],
                        });
                    },
                }),
            }),
        }),
    });
}
function lj(e) {
    let { channelId: t, setFileInputOpen: n } = e,
        l = { ...(0, u.rm)("upload-button"), tabIndex: 0 };
    return (0, i.jsx)(lg, {
        channelId: t,
        onClick: function () {
            n(!0);
        },
        onClose: function () {
            n(!1),
                requestAnimationFrame(() => {
                    (0, nY.vq)(document.activeElement, HTMLElement) && document.activeElement.scrollIntoView(lx);
                });
        },
        listItemProps: l,
    });
}
function lv(e) {
    let { channelId: t } = e,
        [n, l] = s.useState(!1),
        a = s.useRef(null),
        r = (0, g.bG)([tu.A], () => tu.A.getUploads(t, n5.oU.CREATE_FORUM_POST.drafts.type)),
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
                let e = a.current?.querySelector(lh);
                e?.focus();
            });
            return () => cancelAnimationFrame(e);
        }, [o]),
        (0, i.jsxs)("div", {
            className: lo.kL,
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
                          "aria-label": eJ.intl.string(eJ.t.nzoF5p),
                          className: lo.fY,
                          tabIndex: 0,
                          onClick: d,
                          onFocus: function () {
                              d(),
                                  c &&
                                      requestAnimationFrame(() => {
                                          let e = a.current?.querySelector(lh);
                                          e?.focus();
                                      });
                          },
                          onMouseEnter: d,
                          children: [
                              (0, i.jsx)(ll.J, { upload: r[0], size: ln.L.SMALL }),
                              (0, i.jsx)(b.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-overlay-light",
                                  className: lo.qS,
                                  children: o,
                              }),
                          ],
                      })
                    : (0, i.jsx)(lg, { onMouseEnter: d, channelId: t }),
                n && (0, i.jsx)(lf, { channelId: t, closePopout: u }),
            ],
        })
    );
}
var lp = n(343151);
function lA(e) {
    let { parentChannel: t } = e,
        n = (0, le.yK)([tu.A], () => {
            let e = tu.A.getUploads(t.id, n5.oU.CREATE_FORUM_POST.drafts.type);
            return e?.filter((e) => !0 !== e.isThumbnail);
        });
    return (0, i.jsxs)("div", {
        className: lp.kL,
        children: [
            (0, i.jsx)(b.E, {
                variant: "text-md/semibold",
                color: "text-muted",
                children: eJ.intl.string(eJ.t.omKGKu),
            }),
            (0, i.jsx)(b.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eJ.intl.string(eJ.t["zUjLl+"]),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(lt.Ip, {
                    className: lp.mw,
                    orientation: "horizontal",
                    paddingFix: !1,
                    fade: !0,
                    children: (0, i.jsxs)("div", {
                        className: lp.p8,
                        children: [
                            n.map((e) =>
                                (0, i.jsx)(
                                    ll.A,
                                    {
                                        channelId: t.id,
                                        draftType: n5.oU.CREATE_FORUM_POST.drafts.type,
                                        upload: e,
                                        keyboardModeEnabled: !0,
                                        hideFileName: !0,
                                        size: ln.L.SMALL,
                                    },
                                    e.id,
                                ),
                            ),
                            (0, i.jsx)(lg, { channelId: t.id }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
var lC = n(241326),
    lN = n(851023),
    lb = n(915089),
    lE = n(607470),
    lS = n(703007),
    ly = n(635377),
    lT = n.n(ly);
let lI = "absolute",
    l_ = new (lT())({ max: 100 });
function lR(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: l } = e;
    return s.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: l } = e,
                    i = `${t}-${n}-${l}`,
                    s = l_.get(i);
                if (null != s) return s;
                {
                    let e = (function (e, t, n) {
                        if (0 === n) return [];
                        if (1 === n) return [{ width: e, height: t, top: 0, left: 0, position: lI }];
                        if (2 === n) {
                            let n = Math.ceil((e - 4) / 2);
                            return [
                                { top: 0, left: 0, position: lI, width: n, height: t },
                                { top: 0, left: n + 4, position: lI, width: n, height: t },
                            ];
                        }
                        if (3 === n) {
                            let n = Math.ceil((e - 4) / 2),
                                l = Math.ceil((t - 4) / 2);
                            return [
                                { top: 0, left: 0, position: lI, width: n, height: t },
                                { top: 0, left: n + 4, position: lI, width: n, height: l },
                                { top: l + 4, left: n + 4, position: lI, width: n, height: l },
                            ];
                        }
                        {
                            let n = Math.ceil((e - 4) / 2),
                                l = Math.ceil((t - 4) / 2);
                            return [
                                { top: 0, left: 0, position: lI, width: n, height: l },
                                { top: l + 4, left: 0, position: lI, width: n, height: l },
                                { top: 0, left: n + 4, position: lI, width: n, height: l },
                                { top: l + 4, left: n + 4, position: lI, width: n, height: l },
                            ];
                        }
                    })(n, l, t);
                    return l_.set(i, e), e;
                }
            })({ numAttachments: t, containerWidth: n, containerHeight: l }),
        [t, n, l],
    );
}
function lk(e) {
    return e.map((t, n) => ({
        minWidth: 2 * e[n].width,
        minHeight: 2 * e[n].height,
        maxWidth: 2 * e[n].width,
        maxHeight: 2 * e[n].height,
    }));
}
n(323874), n(14289), n(35956);
var lM = n(304162),
    lw = n(435558),
    lL = n(724442),
    lD = n(998218),
    lP = n(36491),
    lO = n(222209);
let lF = [{ name: "Media Post Thumbnail", extensions: ["jpg", "jpeg", "png", "gif", "webp"] }],
    lG = (0, lb.Ld)();
function lz(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: l } = e,
        s = lR({ numAttachments: t.length, containerWidth: n, containerHeight: l });
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsx)(
                "div",
                {
                    style: s[t],
                    children:
                        !0 === e.isVideo
                            ? (0, i.jsx)(lE.A, { src: e.src, className: lO.xn, "aria-hidden": !0 })
                            : (0, i.jsx)("img", { src: e.src, className: lO.xn, "aria-hidden": !0, alt: e?.alt ?? "" }),
                },
                e.src,
            ),
        ),
    });
}
function lU(e) {
    let { parentChannel: t } = e,
        { textAreaState: l } = (0, eb.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        a = (0, le.bG)([P.Ay], () => P.Ay.keyboardModeEnabled),
        o = (function (e, t) {
            let { mediaAttachments: n, hasThumbnail: l } = (function (e) {
                    let [t, n] = s.useState(null),
                        l = (0, le.yK)([tu.A], () => {
                            let t = tu.A.getUploads(e.id, n5.oU.CREATE_FORUM_POST.drafts.type),
                                n = t.find((e) => e.isThumbnail);
                            return null != n ? [n] : t.filter((e) => e.isVideo || e.isImage);
                        }),
                        i = s.useMemo(() => l.some((e) => e.isThumbnail), [l]);
                    return (
                        s.useEffect(() => {
                            let e = [];
                            return (
                                n(
                                    l.slice(0, lM.A8).flatMap((t) => {
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
                                    n(null), e.forEach((e) => URL.revokeObjectURL(e));
                                }
                            );
                        }, [l]),
                        { mediaAttachments: t, hasThumbnail: i }
                    );
                })(e),
                i = Math.max(lM.A8 - (n?.length ?? 0), 0),
                { embeds: a } = (function (e, t, n) {
                    let l = s.useRef(new Map()),
                        [, i] = s.useState(null),
                        [a, r] = s.useState(null),
                        o = s.useMemo(
                            () =>
                                lw.debounce((e, n) => {
                                    if (null == n || e || 0 === t) return;
                                    let i = n.match(lD.A.URL_REGEX);
                                    if (null == i || 0 === i.length) {
                                        (l.current = new Map()), r(null);
                                        return;
                                    }
                                    r(lw.uniq(i).slice(0, lM.A8));
                                }, 1e3),
                            [t, l, r],
                        );
                    s.useEffect(() => {
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
                                        let t = await lP.L4(s);
                                        (a = new Map(n)),
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
                                            i({});
                                    } catch (e) {}
                            })(l, a);
                        }, [a]);
                    let c = (0, lL.A)(l),
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
                            let t = (0, lM.m3)(e);
                            return null == t ? [] : { id: t, src: t, spoiler: !1, alt: e.title };
                        }),
                    [a],
                ),
                o = [...(n ?? [])];
            return !l && i > 0 && o.push(...(r?.slice(0, i) ?? [])), o;
        })(t, l.textValue?.trim()),
        c = s.useMemo(() => o.find((e) => e.isThumbnail), [o]),
        u = null != o && o.length > 0,
        m = s.useMemo(() => {
            let e = o?.length > 1 ? 1.15 : 1;
            return { width: 153 * e, height: 86 * e };
        }, [o]),
        h = s.useCallback(
            (e) => {
                null != c && n8.A.remove(t.id, c.id, n5.oU.CREATE_FORUM_POST.drafts.type),
                    (0, lr.R)(e.currentTarget.files, t, n5.oU.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0,
                        origin: "file_picker",
                    }),
                    (e.currentTarget.value = null);
            },
            [t, c],
        );
    function x(e) {
        e.stopPropagation(),
            c?.upload != null &&
                (0, tN.openModalLazy)(async () => {
                    let e = c.upload;
                    J()(null != e, "upload should not be null");
                    let { default: l } = await n.e("70698").then(n.bind(n, 427281));
                    return (n) =>
                        (0, i.jsx)(l, {
                            ...n,
                            upload: e,
                            onSubmit: (n) => {
                                let { name: l, description: i, spoiler: s } = n;
                                n8.A.update(t.id, e.id, n5.oU.CREATE_FORUM_POST.drafts.type, {
                                    filename: l,
                                    description: i,
                                    spoiler: s,
                                });
                            },
                            disableSpoiler: !0,
                        });
                });
    }
    let g = (0, i.jsx)(lS.A, {
        color: f.XD.CUSTOM,
        className: lO.zL,
        innerClassName: lO.Nr,
        onChange: h,
        multiple: !1,
        "aria-hidden": !0,
        filters: lF,
        "aria-describedby": lG,
        "aria-label": u ? eJ.intl.string(eJ.t.MxJI3f) : eJ.intl.string(eJ.t.Cbiofa),
        children: u
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(lz, { mediaAttachments: o, containerWidth: m.width, containerHeight: m.height }),
                      (0, i.jsxs)("div", {
                          className: r()(lO.On, { [lO.bP]: o?.length > 2 }),
                          children: [
                              (0, i.jsx)(b.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: eJ.intl.string(eJ.t.MxJI3f),
                              }),
                              null == c && (0, i.jsx)(nW.R, { size: "xs", color: "currentColor", className: lO.IZ }),
                          ],
                      }),
                  ],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(li.X, {
                          size: "custom",
                          width: 39,
                          height: 39,
                          color: "currentColor",
                          className: lO.T3,
                      }),
                      (0, i.jsx)(b.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: eJ.intl.string(eJ.t.Cbiofa),
                      }),
                  ],
              }),
    });
    return (0, i.jsx)("div", {
        className: lO.iT,
        style: m,
        children:
            null != c
                ? (0, i.jsx)(ln.A, {
                      actions: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(lN.A, {
                                  className: lO.XI,
                                  tooltip: eJ.intl.string(eJ.t.Y8ujqr),
                                  onClick: x,
                                  children: (0, i.jsx)(nW.R, { size: "xs", color: "currentColor" }),
                              }),
                              (0, i.jsx)(lN.A, {
                                  className: lO.XI,
                                  tooltip: eJ.intl.string(eJ.t.vN7REz),
                                  onClick: () => n8.A.remove(t.id, c.id, n5.oU.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, i.jsx)(lC.u, { size: "md", color: "currentColor" }),
                              }),
                          ],
                      }),
                      draftType: n5.oU.CREATE_FORUM_POST.drafts.type,
                      id: c.id,
                      channelId: t.id,
                      handleEditModal: x,
                      keyboardModeEnabled: a,
                      size: ln.L.SMALL,
                      className: lO.Xc,
                      children: g,
                  })
                : g,
    });
}
var lH = n(451909),
    lB = n(375199),
    lV = n(141268),
    lW = n(931664),
    l$ = n(631576),
    lq = n(474078),
    lK = n(55294),
    lY = n(383233),
    lQ = n(101392),
    lX = n(806150),
    lJ = n(753738);
function lZ(e, t) {
    return { type: e, message: t ?? null };
}
function l0(e, t) {
    return lZ(1, (0, lJ.cw)(e, t?.id));
}
function l1(e, t) {
    return null == e ||
        (0 === e.type && null != t.content && t.content.trim().length > 0) ||
        (2 === e.type && null != t.tags && t.tags.length > 0)
        ? null
        : (e.message ?? null);
}
var l2 = n(774812),
    l4 = n(691060),
    l8 = n(91871),
    l5 = n.n(l8),
    l3 = n(103552),
    l7 = n(914427),
    l6 = n(159273),
    l9 = n(6858);
function ie(e) {
    let { tag: t } = e,
        { id: n, name: l, emojiId: s, emojiName: a } = t,
        r = (0, g.bG)([l6.Ay], () => (null != s ? l6.Ay.getUsableCustomEmojiById(s) : null)),
        o = null != s || null != a;
    return (0, i.jsx)(
        l3.x4,
        {
            value: n,
            children: (0, i.jsx)(l3.x4.Label, {
                children: (0, i.jsxs)("div", {
                    className: l9.nM,
                    children: [
                        o
                            ? (0, i.jsx)(nu.A, {
                                  className: l9.__invalid_emoji,
                                  emojiId: s,
                                  emojiName: a,
                                  animated: !!r?.animated,
                              })
                            : (0, i.jsx)(n2.g, { size: "md", color: "currentColor", className: l9.__invalid_emoji }),
                        (0, i.jsx)(b.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                    ],
                }),
            }),
        },
        n,
    );
}
function it(e) {
    let { parentChannel: t, appliedTags: n, maxTagsApplied: l, onSelectTag: s, onClose: a } = e,
        r = (0, l4.OT)(t);
    return (0, i.jsx)(l7.p, {
        value: n,
        onChange: function (e) {
            (!l || n.has(e)) && (s(e), a());
        },
        placeholder: eJ.intl.string(eJ.t.MbhGm7),
        "aria-label": eJ.intl.string(eJ.t.MbhGm7),
        children: (e) =>
            r.filter((t) => l5()(e.toLowerCase(), t.name.toLowerCase())).map((e) => (0, i.jsx)(ie, { tag: e }, e.id)),
    });
}
var il = n(376310),
    ii = n(291747),
    is = n(935090);
let ia = function (e) {
    let { rateLimitPerUser: t, slowmodeCooldownGuess: n, isBypassSlowmode: l, leadingIcon: s = !1 } = e,
        a = (0, n9.VI)(t, !0),
        o = (0, n9.pS)(n, l),
        c = (0, i.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: o }),
        d = (0, i.jsx)(ii.x, { size: "xs", color: "currentColor", className: r()(is.Eq, { [is.iE]: s }) });
    return (0, i.jsx)(k.m, {
        text: a,
        children: (0, i.jsx)("div", {
            className: is.ns,
            children: s ? (0, i.jsxs)(i.Fragment, { children: [d, c] }) : (0, i.jsxs)(i.Fragment, { children: [c, d] }),
        }),
    });
};
var ir = n(770178),
    io = n(765548);
let ic = function () {
    let [e, t] = s.useState(400),
        n = (0, io.A)((e) => {
            t(e.target.clientWidth);
        });
    return { containerRef: (0, ir.w)(n), containerWidth: e };
};
var id = n(746080),
    iu = n(955780);
let im = n5.oU.CREATE_FORUM_POST;
function ih(e) {
    var t, n;
    let l,
        a,
        { parentChannel: o, isSearchLoading: c, numResults: u, onChange: m, canCreatePost: h, inputRef: x } = e,
        f = !(0, Q.V)(o) && h,
        {
            textAreaState: j,
            formOpen: v,
            previewing: p,
        } = (0, eb.kU)((e) => {
            let { textAreaState: t, formOpen: n, previewing: l } = e;
            return { textAreaState: t, formOpen: n, previewing: l };
        }, d.x),
        [A, C] = s.useState(null),
        N = s.useContext(tm.EH),
        b = s.useCallback(() => {
            N.bumpDispatchPriority();
        }, [N]),
        E = (0, g.bG)([eH.A], () => eH.A.can(eQ.xBc.ATTACH_FILES, o)),
        S = (0, g.yK)([tu.A], () => tu.A.getUploads(o.id, to.C.FirstThreadMessage)),
        y = v && E && f,
        T = o?.isMediaChannel() === !0,
        I =
            ((t = o),
            (n = x),
            (l = (0, eb.ST)()),
            (a = (0, ev.Hv)(t)),
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
                            (0, nY.vq)(n.current, HTMLTextAreaElement) && n.current?.focus();
                        }, 0),
                        t.isGameInvitesChannel())
                    )
                        return;
                    ((o && s.length > 0) ||
                        (r.textValue.trim().length > 0 && r.textValue.trim() !== a) ||
                        tu.A.getUploads(t.id, to.C.FirstThreadMessage).length > 0) &&
                        i();
                }
            }, [l, t, a, n])),
        _ = (function (e) {
            let { formOpen: t } = (0, eb.kU)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, d.x),
                n = (0, eb.ST)(),
                l = (0, lK.NV)({ parentChannel: e });
            s.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                e(null), t(null);
            }, [t, n]);
            let i = s.useCallback(
                (t, l, i) => {
                    let { name: s, textAreaState: a } = n.getState();
                    null == t && (t = a.textValue), (t = t.trim());
                    let { content: r } = lH.Ay.parse(e, t);
                    if (
                        ((t = r),
                        (null == l || 0 === l.length) &&
                            (l = lW.A.getStickerPreview(e.id, im.drafts.type)?.map((e) => e.id)),
                        (null == i || 0 === i.length) && (i = tu.A.getUploads(e.id, to.C.FirstThreadMessage)),
                        null != i && i.length > 0 && e.isMediaChannel())
                    ) {
                        let e = i.findIndex((e) => !0 === e.isThumbnail);
                        if (e > -1) {
                            let t = i[e];
                            i.splice(e, 1), i.unshift(t);
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
                            setSubmitting: c,
                            resetFormState: d,
                            formOpen: u,
                            setFormOpen: m,
                            setPreviewing: h,
                            setFormOpenFromUserAction: x,
                            setGuidelinesOpen: g,
                        } = n.getState(),
                        f = l2.A.hasSeen(e.id);
                    if (!u)
                        return (
                            e.isGameInvitesChannel() ||
                                ((0, tp.jr)({ guildId: e.guild_id, channelId: e.id }),
                                f || n.getState().setGuidelinesOpen(!0),
                                x()),
                            { shouldClear: !1, shouldRefocus: !1 }
                        );
                    let { content: j, stickers: v, uploads: p, hasNameError: A, hasMessageError: C } = i(t, s, a);
                    if (
                        (r(A ? lZ(0, eJ.intl.string(eJ.t["71wuR0"])) : null),
                        o(C ? lZ(0, eJ.intl.string(eJ.t["w/BT3G"])) : null),
                        A || C)
                    )
                        return { shouldClear: !1, shouldRefocus: !0 };
                    try {
                        c(!0);
                        let { valid: t } = await (0, lX.i)({
                            content: j,
                            hasStickers: null != v && v.length > 0,
                            hasAttachments: null != p && p.length > 0,
                            type: im,
                            channel: e,
                        });
                        if (!t) return { shouldClear: !1, shouldRefocus: !0 };
                        let n = await l(j, v, p);
                        return (
                            (0, tr.JA)(n),
                            tx.A.resort(e.id),
                            (0, l$.x5)(e.id, im.drafts.type),
                            d(),
                            m(!1),
                            h(!1),
                            l2.A.markAsSeen(e.id),
                            g(!1),
                            { shouldClear: !0, shouldRefocus: !1 }
                        );
                    } catch (t) {
                        return (
                            t.body?.code === eQ.t02.AUTOMOD_TITLE_BLOCKED
                                ? r(l0(t.body, e))
                                : t.body?.code === eQ.t02.AUTOMOD_MESSAGE_BLOCKED
                                  ? o(l0(t.body, e))
                                  : t.body?.code === eQ.t02.INVALID_FORM_BODY &&
                                    t.body?.errors?.name != null &&
                                    r(lZ(3, eJ.intl.string(eJ.t["71wuR0"]))),
                            { shouldClear: !1, shouldRefocus: !0 }
                        );
                    } finally {
                        c(!1);
                    }
                },
                [l, i, e, n],
            );
        })(o);
    return (
        s.useLayoutEffect(m, [v, j, S, m]),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("div", {
                "aria-label": f ? eJ.intl.string(eJ.t.dq7mAa) : eJ.intl.string(eJ.t["5h0QOP"]),
                className: r()(iu.kL, { [iu.yZ]: !v }),
                onClick: !v && f ? I : void 0,
                children: (0, i.jsxs)("form", {
                    onMouseDown: b,
                    onFocus: b,
                    onSubmit: (e) => {
                        e.preventDefault(), !f || o.isGameInvitesChannel() || _();
                    },
                    children: [
                        (0, i.jsxs)("div", {
                            className: iu.KJ,
                            children: [
                                (0, i.jsx)(ix, { parentChannel: o, isSearchLoading: c, inputRef: x }),
                                (0, i.jsxs)("div", {
                                    className: p ? iu.vJ : iu.Zd,
                                    children: [
                                        (0, i.jsx)(ig, {
                                            editorRef: A,
                                            parentChannel: o,
                                            isSearchLoading: c,
                                            numResults: u,
                                            inputRef: x,
                                            canCreatePost: f,
                                        }),
                                        v &&
                                            (0, i.jsx)(ip, {
                                                editorRef: A,
                                                setEditorRef: C,
                                                parentChannel: o,
                                                submit: _,
                                                disabled: !f,
                                            }),
                                        p && (0, i.jsx)(iA, {}),
                                    ],
                                }),
                                y && (T ? (0, i.jsx)(lU, { parentChannel: o }) : (0, i.jsx)(lv, { channelId: o.id })),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: iu.Zd,
                            children: [
                                y && T && (0, i.jsx)(lA, { parentChannel: o }),
                                v && (0, i.jsx)(iE, { className: iu.CN, parentChannel: o, canCreatePost: f }),
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
            } = (0, eb.kU)((e) => {
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
            m = (0, eb.ST)(),
            h = (0, ev.Hv)(t),
            x = s.useCallback(() => {
                m.getState().resetFormState(),
                    n4.A.clearDraft(t.id, to.C.ThreadSettings),
                    n4.A.clearDraft(t.id, to.C.FirstThreadMessage),
                    n8.A.clearAll(t.id, to.C.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    l.current?.blur(),
                    (0, tp.py)({ guildId: t.guild_id, channelId: t.id });
            }, [m, t.id, t.guild_id, l]),
            g = s.useMemo(
                () =>
                    !a &&
                    (r.trim().length > 0 ||
                        (o.textValue.trim().length > 0 && o.textValue.trim() !== h) ||
                        tu.A.getUploads(t.id, to.C.FirstThreadMessage).length > 0) &&
                    c
                        ? (0, i.jsx)(nW.R, { size: "md", color: "currentColor", className: iu.rD })
                        : (0, i.jsx)(nX.B, { onClear: x, hasContent: a, isLoading: n || u, size: "md" }),
                [n, a, c, r, o.textValue, x, t.id, h, u],
            );
        return (0, i.jsx)("div", { className: iu.VB, children: g });
    }),
    ig = s.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: l, editorRef: a, isSearchLoading: r, numResults: o } = e,
            {
                formOpen: c,
                nameError: u,
                name: m,
                textAreaState: h,
                previewing: x,
            } = (0, eb.kU)((e) => {
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
            f = (0, eb.ST)(),
            v = null != t.topic && 0 !== t.topic.length,
            p = l2.A.hasSeen(t.id),
            A = (0, ev.Hv)(t),
            C = (0, g.bG)([eV.default], () => eV.default.getCurrentUser());
        J()(null != C, "current user cannot be null"),
            (0, tm.Vo)({
                event: eQ.jej.FOCUS_COMPOSER_TITLE,
                handler: function () {
                    let e = n.current;
                    e?.focus(),
                        f.getState().setTitleFocused(!0),
                        t.isGameInvitesChannel() || (f.getState().setFormOpen(!0), f.getState().setHasClickedForm(!0));
                },
            });
        let N = s.useCallback(
                async (e) => {
                    let n = e.clipboardData.files[0];
                    if (null != n && n.type.startsWith("image/")) {
                        if (t.isGameInvitesChannel()) return;
                        e.preventDefault(),
                            await (0, lr.R)([n], t, to.C.FirstThreadMessage, { origin: "clipboard" }),
                            f.getState().setFormOpenFromUserAction();
                    }
                },
                [t, f],
            ),
            b = l1(u, { content: m });
        return (0, i.jsxs)("div", {
            className: iu.gn,
            onPaste: N,
            children: [
                c && x
                    ? (0, i.jsx)(j.D, { variant: "heading-md/semibold", className: iu.DD, children: m })
                    : (0, i.jsxs)(t9.B, {
                          gap: 4,
                          children: [
                              (0, i.jsx)(nQ.d, {
                                  value: m,
                                  placeholder:
                                      !l || t.isGameInvitesChannel()
                                          ? eJ.intl.string(eJ.t["5h0QOP"])
                                          : c || (h.textValue.length > 0 && h.textValue.trim() !== A)
                                            ? eJ.intl.string(eJ.t.lU4dDS)
                                            : eJ.intl.string(eJ.t.CjmivA),
                                  rows: 1,
                                  maxLength: eQ.Ign,
                                  onChange: function (e) {
                                      let n = e.target.value,
                                          l = (0, lq.A)(n, !1);
                                      f.getState().setName(l);
                                      let i = 0 === l.trim().length,
                                          s = 0 === h.textValue.trim().length,
                                          a = h.textValue.trim() === A;
                                      i && (s || a) && f.getState().setHasClickedForm(!1),
                                          c || tx.A.updateForumSearchQuery(t.id, l);
                                  },
                                  onFocus: function () {
                                      f.getState().setTitleFocused(!0), f.getState().setBodyFocused(!1);
                                  },
                                  onBlur: function () {
                                      f.getState().setTitleFocused(!1);
                                      let e = (0, lq.A)(m, !0);
                                      e !== m && (f.getState().setName(e), c || tx.A.updateForumSearchQuery(t.id, e));
                                  },
                                  onKeyDown: function (e) {
                                      "Enter" === e.key &&
                                          (e.preventDefault(),
                                          e.stopPropagation(),
                                          c && m.length > 0
                                              ? a?.focus()
                                              : l && e.shiftKey && !t.isGameInvitesChannel()
                                                ? ((0, tp.sB)({ guildId: t.guild_id, channelId: t.id }),
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
                                  className: iu.DD,
                                  ref: n,
                              }),
                              null != b ? (0, i.jsx)(nJ.U, { error: b }) : null,
                          ],
                      }),
                c
                    ? null
                    : (0, i.jsxs)(t9.B, {
                          direction: "horizontal",
                          gap: 8,
                          justify: "end",
                          fullWidth: !1,
                          children: [
                              (0, i.jsx)(ij, { parentChannel: t }),
                              t.isGameInvitesChannel() ? null : (0, i.jsx)(iS, { parentChannel: t, canCreatePost: l }),
                          ],
                      }),
            ],
        });
    });
function ij(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, eb.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, d.x),
        l = (0, eb.ST)();
    return null != t.topic && 0 !== t.topic.length
        ? (0, i.jsx)(k.m, {
              text: eJ.intl.string(eJ.t["4d4T4l"]),
              children: (0, i.jsx)(nZ.K, {
                  size: "sm",
                  variant: "secondary",
                  onClick: function () {
                      l.getState().setGuidelinesOpen(!n);
                  },
                  icon: nV.B,
                  "aria-label": eJ.intl.string(eJ.t["4d4T4l"]),
              }),
          })
        : null;
}
let iv = s.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            l = new lY.Ay({ channel_id: t.id, content: n }),
            { content: s } = (0, lB.A)(l, {
                hideSimpleEmbedContent: !0,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0,
            }),
            a = (0, lV.A)({ message: l, channel: t, compact: !1 }, s, !1);
        return (0, i.jsx)("div", { className: r()(iu.SL, iu.EV), children: a });
    }),
    ip = s.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: l = !1, editorRef: a, setEditorRef: o } = e,
            c = (0, g.bG)([eV.default], () => eV.default.getCurrentUser());
        J()(null != c, "current user cannot be null");
        let {
                messageError: u,
                previewing: m,
                textAreaState: h,
                bodyFocused: x,
                formOpen: f,
            } = (0, eb.kU)((e) => {
                let { messageError: t, textAreaState: n, previewing: l, bodyFocused: i, formOpen: s } = e;
                return { messageError: t, textAreaState: n, previewing: l, bodyFocused: i, formOpen: s };
            }, d.x),
            j = (0, eb.ST)();
        s.useEffect(() => () => (0, tp._4)({ guildId: t.guild_id, channelId: t.id }), [t.guild_id, t.id]);
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
        (0, tm.Vo)({ event: eQ.jej.TEXTAREA_FOCUS, handler: v }),
            (0, tm.Vo)({ event: eQ.jej.TEXTAREA_BLUR, handler: p });
        let N = l1(u, { content: h.textValue });
        return (0, i.jsx)("div", {
            className: iu.IP,
            children: (0, i.jsxs)("div", {
                className: iu.hQ,
                children: [
                    m
                        ? (0, i.jsx)(iv, { parentChannel: t, textValue: h.textValue })
                        : (0, i.jsx)("div", {
                              onClick: v,
                              children: (0, i.jsx)(n7.Ay, {
                                  type: im,
                                  setEditorRef: o,
                                  channel: t,
                                  placeholder: eJ.intl.string(eJ.t["8IPnv1"]),
                                  textValue: h.textValue,
                                  richValue: h.richValue,
                                  focused: x,
                                  className: iu.gM,
                                  innerClassName: r()(iu.SL, { [iu.cr]: null != N }),
                                  onChange: A,
                                  onSubmit: C,
                                  promptToUpload: lr.R,
                                  disabled: l,
                                  onKeyDown: function (e) {
                                      ("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(),
                                          f &&
                                              "Escape" === e.key &&
                                              !j.getState().submitting &&
                                              (a?.blur(),
                                              j.getState().setFormOpen(!1),
                                              j.getState().setTitleFocused(!1),
                                              j.getState().setBodyFocused(!1),
                                              j.getState().setPreviewing(!1));
                                  },
                                  autoCompletePosition: "bottom",
                              }),
                          }),
                    (0, i.jsx)(nJ.U, { error: N }),
                ],
            }),
        });
    });
function iA() {
    return (0, i.jsx)("div", {
        className: iu.fv,
        children: (0, i.jsx)(b.E, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: eJ.intl.string(eJ.t["WE/cYo"]),
        }),
    });
}
function iC(e) {
    let { textAreaState: t } = (0, eb.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        n = (0, g.yK)([tu.A], () => tu.A.getUploads(e.id, to.C.FirstThreadMessage));
    return s.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n]);
}
function iN(e) {
    let t = iC(e),
        { appliedTags: n, name: l } = (0, eb.kU)((e) => {
            let { appliedTags: t, name: n } = e;
            return { appliedTags: t, name: n };
        }, d.x);
    return s.useMemo(() => e.hasFlag(id.lx.REQUIRE_TAG) && 0 === n.size && l.length > 0 && t, [n, l, e, t]);
}
function ib() {
    let { previewing: e } = (0, eb.kU)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, d.x),
        t = (0, eb.ST)(),
        n = s.useCallback(() => {
            t.getState().setPreviewing(!e), (0, tp.Q_)();
        }, [e, t]),
        l = e ? eJ.intl.string(eJ.t.ojM1xJ) : eJ.intl.string(eJ.t.SKNnqq);
    return (0, i.jsx)(k.m, {
        text: l,
        children: (0, i.jsx)(nZ.K, {
            variant: "secondary",
            size: "sm",
            onClick: n,
            icon: e ? n0.G : n1.b,
            "aria-label": l,
        }),
    });
}
let iE = s.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: l } = e,
        { textAreaState: a, name: r } = (0, eb.kU)((e) => {
            let { textAreaState: t, name: n } = e;
            return { textAreaState: t, name: n };
        }, d.x),
        { rateLimitPerUser: o } = t,
        c = o > 0,
        u = (0, g.bG)([lQ.A], () => lQ.A.getSlowmodeCooldownGuess(t.id, lQ.R.CreateThread)),
        m = (0, n9._i)(t, lQ.R.CreateThread),
        h = iN(t),
        x = (0, eb.ST)(),
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
                (0, i.jsx)(iT, { parentChannel: t }),
                (0, i.jsx)("div", { className: iu.XJ }),
                (0, i.jsxs)("div", {
                    className: iu.gO,
                    children: [
                        (0, i.jsxs)("div", {
                            className: iu.ne,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: iu.Kk,
                                    children: [
                                        (0, i.jsx)(n6.A, { type: im, textValue: a.textValue, className: iu.Dq }),
                                        c &&
                                            (0, i.jsx)(ia, {
                                                rateLimitPerUser: o,
                                                slowmodeCooldownGuess: u,
                                                isBypassSlowmode: m,
                                                leadingIcon: !0,
                                            }),
                                    ],
                                }),
                                (0, i.jsx)(ij, { parentChannel: t }),
                                j && (0, i.jsx)(ib, {}),
                                (0, i.jsx)(iS, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: c && !m && u > 0,
                                }),
                            ],
                        }),
                        (0, i.jsx)(n3.A, { type: im, className: iu.n1, onClick: f, channel: t }, "expression"),
                    ],
                }),
                h &&
                    (0, i.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-feedback-critical",
                        className: iu.ku,
                        children: eJ.intl.string(eJ.t.xPfNQi),
                    }),
            ],
        })
    );
});
function iS(e) {
    let { parentChannel: t, canCreatePost: n, disabled: l, disableIfInvalid: s = !1 } = e,
        a = (0, Q.V)(t),
        {
            submitting: r,
            name: o,
            formOpen: c,
        } = (0, eb.kU)((e) => {
            let { submitting: t, name: n, formOpen: l } = e;
            return { submitting: t, name: n, formOpen: l };
        }, d.x),
        u = iC(t),
        m = !iN(t) && u && o.trim().length > 0;
    return __OVERLAY__ || a
        ? null
        : (0, i.jsx)(S.$, {
              variant: "primary",
              type: "submit",
              size: "sm",
              loading: r,
              disabled: (s && !m) || l || !n,
              icon: eo.o,
              text: c ? eJ.intl.string(eJ.t.pIuQI6) : eJ.intl.string(eJ.t.TyAuoT),
          });
}
function iy() {
    return Promise.resolve();
}
function iT(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: l,
            setPopoutOpen: a,
        } = (0, eb.kU)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: l } = e;
            return { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: l };
        }, d.x),
        o = n.size >= 5,
        c = (0, m.Ay)({
            id: `${t.id}-post-form-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: iy,
            scrollToEnd: iy,
            orientation: h.Gl.HORIZONTAL,
        }),
        { containerRef: x, containerWidth: g } = ic(),
        f = s.useRef(null),
        j = s.useRef(null),
        [v, p] = s.useState(!0),
        A = (0, l4.OT)(t),
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
              className: iu.Pc,
              ref: x,
              children: [
                  (0, i.jsx)(n2.g, { size: "xs", color: "currentColor", className: iu.HZ }),
                  (0, i.jsx)("div", {
                      className: iu.kU,
                      ref: f,
                      children: (0, i.jsx)(u.hD, {
                          navigator: c,
                          children: (0, i.jsx)(u.PR, {
                              children: (e) => {
                                  let { ref: t, ...s } = e;
                                  return (0, i.jsx)("div", {
                                      className: iu.j5,
                                      ref: t,
                                      ...s,
                                      children: A.map((e) =>
                                          (0, i.jsx)(
                                              il.A,
                                              {
                                                  ariaLabel: eJ.intl.formatToPlainString(eJ.t.FSZVIR, {
                                                      tagName: e.name,
                                                  }),
                                                  tag: e,
                                                  onClick: o && !n.has(e.id) ? void 0 : () => l(e.id),
                                                  disabled: !n.has(e.id) && n.size >= 5,
                                                  selected: n.has(e.id),
                                                  size: il.A.Sizes.SMALL,
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
                      (0, i.jsx)(I.Y, {
                          targetElementRef: j,
                          onRequestOpen: () => a(!0),
                          onRequestClose: () => a(!1),
                          renderPopout: (e) => {
                              let { closePopout: s } = e;
                              return (0, i.jsx)(it, {
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
                                  className: iu.Wk,
                                  style: { left: C },
                                  children: (0, i.jsx)(S.$, {
                                      ...e,
                                      size: "sm",
                                      variant: "secondary",
                                      icon: R.a,
                                      iconPosition: "end",
                                      text: eJ.intl.string(eJ.t.w6T0Yc),
                                  }),
                              }),
                      }),
                  (0, i.jsx)("div", {
                      className: r()(iu.Wk, iu.Dz),
                      children: (0, i.jsx)(S.$, {
                          size: "sm",
                          variant: "secondary",
                          icon: R.a,
                          iconPosition: "end",
                          text: eJ.intl.string(eJ.t.w6T0Yc),
                      }),
                  }),
              ],
          });
}
var iI = n(602137),
    i_ = n(782134),
    iR = n(391242),
    ik = n(191023),
    iM = n(234914),
    iw = n(930125),
    iL = n(282108),
    iD = n(461771),
    iP = n(602034);
let iO = "data-grid-item-id",
    iF = "data-grid-section",
    iG = "data-grid-prev-section-boundary",
    iz = new Set([h.D$.UP, h.D$.DOWN, h.D$.LEFT, h.D$.RIGHT]);
function iU(e) {
    let { section: t, column: n, row: l } = e,
        i = `[${iF}="${t}"]`,
        s = `[aria-colindex="${n}"]`,
        a = `[aria-rowindex="${l}"]`;
    return `${i}${s}${a}`;
}
let iH = { id: "NO_LIST", onKeyDown() {}, ref: s.createRef() },
    iB = s.createContext({ id: "NO_LIST", setFocus() {} }),
    iV = s.createContext(iH);
function iW(e) {
    let { id: t, section: n, row: l, column: i, boundaries: a } = e,
        [r, o] = s.useState(0 === l && 0 === i ? 0 : -1),
        { id: c, setFocus: d } = s.useContext(iB),
        u = s.useCallback(() => d(t), [t, d]);
    return (
        s.useLayoutEffect(
            () =>
                (0, iD.e)(c, (e) => {
                    o(e === t ? 0 : -1);
                }),
            [t, c],
        ),
        {
            [iO]: (0, iP.t$)(c, t),
            [iF]: n,
            [iG]: a[n],
            role: "gridcell",
            "aria-rowindex": l,
            "aria-colindex": i,
            tabIndex: r,
            onFocus: u,
        }
    );
}
function i$(e) {
    let { children: t, navigator: n } = e,
        {
            id: l,
            setFocus: a,
            containerProps: { onKeyDown: r, ref: o },
        } = n,
        c = s.useMemo(() => ({ id: l, setFocus: a }), [l, a]),
        d = s.useMemo(() => ({ onKeyDown: r, ref: o, id: l }), [r, o, l]);
    return (0, i.jsx)(iV.Provider, { value: d, children: (0, i.jsx)(iB.Provider, { value: c, children: t }) });
}
var iq = n(438729),
    iK = n(659051),
    iY = n(568006),
    iQ = n(453003),
    iX = n(627363),
    iJ = n(140651),
    iZ = n(290863),
    i0 = n(992828);
function i1(e) {
    let { channel: t, className: n, firstMessage: l } = e,
        s = l?.application?.id,
        { data: a } = (0, iX.YY)(s),
        o = (0, g.bG)([iZ.A], () => {
            let e = l?.author.id;
            return null == e || null == s ? null : iZ.A.getApplicationActivity(e, s);
        }, [l, s]),
        c = (0, iY.em)({ presenceActivity: o, channel: t, activityActionType: void 0 }),
        { primaryColor: d, secondaryColor: u } = (0, iJ.A)(a?.getIconURL(128));
    if (null == l || null == l.activity || null == o || !(0, iK.A)(o, l, a?.id)) return null;
    let m = `linear-gradient(45deg, ${d}, ${u})`,
        h = o.details ?? o.name;
    return (0, i.jsxs)("div", {
        className: r()(n, i0.Nr),
        style: { background: m },
        children: [
            (0, i.jsx)(b.E, {
                variant: "text-sm/semibold",
                color: "text-overlay-light",
                className: i0.DD,
                children: h,
            }),
            (0, i.jsxs)("div", {
                className: i0.yu,
                children: [
                    (0, i.jsx)("div", { className: i0.Hg, children: c }),
                    (0, i.jsx)(iQ.V, { className: i0.$B, activity: o }),
                ],
            }),
        ],
    });
}
var i2 = n(520718);
function i4(e) {
    let { message: t, channel: n, containerWidth: l } = e,
        s = si({ message: t, channel: n, containerWidth: l - 32, hideTags: !0 }),
        { hasUnreads: a } = (0, ev.X5)(n),
        { content: r } = (0, ev.gk)({ firstMessage: t, formatInline: !1, noStyleAndInteraction: !0, hasUnreads: a });
    return null != s
        ? s
        : (0, i.jsx)("div", {
              className: i2.o9,
              children: (0, i.jsx)(iq.Ay, { message: t, content: r, className: i2.BK, compact: !1 }),
          });
}
function i8(e) {
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
        x = (0, g.bG)([eG.Ay], () => eG.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: f, loaded: j } = (0, ep.OA)(n),
        { user: v, author: p } = (0, ev.kn)(n),
        A = (0, O.Ay)(n),
        { messageCountText: C } = (0, ev.k6)(n),
        N = s.useRef(null),
        { handleLeftClick: S, handleRightClick: y } = (0, ey.A)({ facepileRef: N, goToThread: l, channel: n });
    s.useEffect(() => {
        u?.(h.current?.ref, m);
    }, [u, m]);
    let T = (0, ev.Mw)(n, iI.T.CREATION_DATE, nM.EG.POSTED_DURATION_AGO),
        { shouldRenderTagsRow: I } = (0, eE.BA)({ channel: n, isNew: !1 }),
        { onFocus: _, ...R } = iW({ id: t, row: o.row, column: o.column, section: o.section, boundaries: c }),
        k = p?.nick ?? v?.username ?? "",
        M = v?.getAvatarURL(n.guild_id, (0, el.FT)(el._3.SIZE_24));
    return (0, i.jsxs)(E.D, {
        ref: h,
        tag: "li",
        onClick: S,
        onFocus: _,
        onContextMenu: y,
        className: r()(i2.kL, d, { [i2.nT]: x }),
        "aria-label": eJ.intl.formatToPlainString(eJ.t.pgYN6c, { title: A ?? "", count: C }),
        style: { ...a },
        ...R,
        children: [
            (0, i.jsxs)("div", {
                className: i2.wx,
                children: [
                    (0, i.jsx)(en.eu, { src: M, size: el._3.SIZE_24, className: i2.my, "aria-label": k }),
                    (0, i.jsx)(b.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: i2.fh,
                        children: k,
                    }),
                    (0, i.jsx)(b.E, { variant: "text-xs/medium", color: "text-subtle", className: i2.vE, children: T }),
                ],
            }),
            (0, i.jsxs)(et.M, {
                className: i2.rf,
                children: [
                    j &&
                        null == f &&
                        (0, i.jsx)(b.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: i2.tq,
                            children: eJ.intl.string(eJ.t.mE3KJN),
                        }),
                    null != f ? (0, i.jsx)(i4, { message: f, channel: n, containerWidth: a.width }) : null,
                    I ? (0, i.jsx)("div", { className: i2.GA, children: (0, i.jsx)(eE.Ay, { channel: n }) }) : null,
                    n.isArchivedThread()
                        ? null
                        : (0, i.jsx)("div", {
                              className: i2.oO,
                              children: (0, i.jsx)(i1, { channel: n, firstMessage: f }),
                          }),
                ],
            }),
            (0, i.jsx)(et.M, {
                className: i2.qr,
                children: (0, i.jsx)(sr, { channel: n, firstMessage: f, facepileRef: N }),
            }),
        ],
    });
}
var i5 = n(994500),
    i3 =
        (((l = {})[(l.THREE_BY_TWO = 2 / 3)] = "THREE_BY_TWO"),
        (l[(l.SIXTEEN_BY_NINE = 9 / 16)] = "SIXTEEN_BY_NINE"),
        l);
let i7 = { columns: 1, columnWidth: 450 };
function i6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i3.THREE_BY_TWO,
        n = e - 2,
        l = Math.ceil(n * t);
    return [n, l];
}
function i9(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i3.THREE_BY_TWO;
    return 60 + i6(e - 24, t)[1] + 24 + 36;
}
var se = n(313880),
    st = n(15175);
let sn = s.memo(function (e) {
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
        u = (0, g.bG)([ez.A], () => ez.A.getChannel(n)),
        m = (0, G.YG)(u);
    return null == u
        ? null
        : m
          ? (0, i.jsx)(i8, {
                id: t,
                channel: u,
                goToThread: l,
                className: a,
                coords: r,
                gridCoords: o,
                observePostVisibilityAnalytics: d,
                gridSectionBoundaries: c,
            })
          : (0, i.jsx)(sl, {
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
function sl(e) {
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
        f = (0, g.bG)([eG.Ay], () => eG.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: p, loaded: A } = (0, ep.OA)(n),
        C = (0, O.Ay)(n),
        { messageCountText: N } = (0, ev.k6)(n),
        { isNew: S, hasUnreads: y } = (0, ev.X5)(n),
        T = s.useRef(null),
        { handleLeftClick: I, handleRightClick: _ } = (0, ey.A)({ facepileRef: T, goToThread: l, channel: n });
    s.useEffect(() => {
        m?.(x.current, h);
    }, [m, h]);
    let R = (0, ev.Mw)(n, iI.T.CREATION_DATE, nM.EG.POSTED_DURATION_AGO),
        k = (0, nn.hf)(n),
        { onFocus: M, ...w } = iW({ id: t, row: d.row, column: d.column, section: d.section, boundaries: u });
    return (0, i.jsxs)("li", {
        ref: x,
        onClick: I,
        onFocus: M,
        onContextMenu: _,
        className: r()(st.kL, o, { [st.nT]: f }),
        style: { ...c },
        children: [
            (0, i.jsx)(E.D, {
                onClick: I,
                focusProps: { ringTarget: x },
                onContextMenu: _,
                "aria-label": eJ.intl.formatToPlainString(eJ.t.pgYN6c, { title: C ?? "", count: N }),
                className: st.Kv,
                ...w,
            }),
            (0, i.jsxs)("div", {
                className: st.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: st.Y6,
                        children: [
                            (0, i.jsxs)("div", {
                                className: st.wO,
                                children: [
                                    (0, i.jsx)(se.A, { channel: n, message: p }),
                                    (0, i.jsx)(b.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        className: st.SD,
                                        children: R,
                                    }),
                                ],
                            }),
                            S
                                ? (0, i.jsx)(es.Lp, {
                                      className: st.Ad,
                                      color: ea.A.unsafe_rawColors.BRAND_260.css,
                                      text: eJ.intl.string(eJ.t.y2b7CA),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(v.F, {
                        children: (0, i.jsx)(j.D, {
                            variant: "heading-md/extrabold",
                            className: st.DD,
                            color: y ? "text-strong" : "text-muted",
                            style: { width: `${c.width - 24}px` },
                            children: k,
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: st.PU,
                children: (0, i.jsx)(et.M, {
                    children: (0, i.jsx)(ss, {
                        channel: n,
                        firstMessage: p,
                        isFirstMessageLoaded: A,
                        overrideMedia: a,
                        coords: c,
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: st.qr,
                children: (0, i.jsx)(et.M, {
                    children: (0, i.jsx)(sr, { channel: n, firstMessage: p, facepileRef: T }),
                }),
            }),
        ],
    });
}
function si(e) {
    let { message: t, channel: n, containerWidth: l, hideTags: s = !1 } = e,
        { isBlocked: a, isIgnored: r } = (0, g.cf)([i5.A], () => ({
            isBlocked: null != t && i5.A.isBlockedForMessage(t),
            isIgnored: null != t && i5.A.isIgnoredForMessage(t),
        }));
    return a
        ? (0, i.jsx)(sh, { message: eJ.intl.string(eJ.t.Lkp2fB), containerWidth: l, channel: n, hideTags: s })
        : r
          ? (0, i.jsx)(sh, { message: eJ.intl.string(eJ.t.yWK7ZM), containerWidth: l, channel: n, hideTags: s })
          : null;
}
function ss(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a } = e,
        r = si({ message: n, channel: t, containerWidth: a.width });
    return null != r
        ? r
        : (0, i.jsx)(sa, { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a });
}
function sa(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a } = e,
        r = (0, g.bG)([ez.A], () => ez.A.getChannel(t.parent_id)),
        { firstMedia: o } = (0, ev.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !1 }),
        { hasUnreads: c } = (0, ev.X5)(t),
        d = (0, g.bG)([eH.A], () => eH.A.can(eQ.xBc.MANAGE_MESSAGES, t)),
        u = eF.kt.useSetting(),
        m = eF.gs.useSetting(),
        h = (0, ek.A)(m, d),
        x = (0, eA.no)(n, r, !1),
        f = t.isMediaPost(),
        [j, v] = i6(a.width - 24, f ? i3.SIXTEEN_BY_NINE : i3.THREE_BY_TWO);
    return n?.blocked || null == (s ?? o)
        ? (0, i.jsx)(sm, {
              channel: t,
              firstMessage: n,
              isFirstMessageLoaded: l,
              containerWidth: a.width,
              hasUnreads: c,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(sd, {
                      mediaAttachments: x,
                      globalSpoilerRenderSetting: h,
                      containerWidth: j,
                      containerHeight: v,
                      canAutoPlay: u,
                      shouldMaintainAspectRatio: f,
                  }),
                  (0, i.jsx)("div", {
                      className: st.GA,
                      children: (0, i.jsx)(eE.Ay, { channel: t, tagsClassName: st.uU }),
                  }),
              ],
          });
}
function sr(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        s = (0, eg.m)(t.id),
        a = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: st.GD,
        children: [
            (0, i.jsxs)("div", {
                className: st.QW,
                children: [
                    (0, i.jsx)("div", {
                        className: st.mz,
                        children: (0, i.jsx)(nn.$k, { channel: t, iconSize: 16, showReadState: !0 }),
                    }),
                    s.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("span", { className: st.xE, children: "\u2022" }),
                                  (0, i.jsxs)("div", {
                                      className: st.IW,
                                      children: [
                                          (0, i.jsx)(nn.gL, { channel: t, userIds: s, facepileRef: n }),
                                          (0, i.jsx)("div", {
                                              className: st.r$,
                                              children: (0, i.jsx)(er.n, { themed: !0, dotRadius: 2 }),
                                          }),
                                          (0, i.jsx)(ed.Ay, { channel: t, className: st.mD, renderDots: !1 }),
                                      ],
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: st.QW,
                children: [
                    a || null == l ? null : (0, i.jsx)(nn.NA, { firstMessage: l, channel: t }),
                    null == l ? null : (0, i.jsx)(nn.cn, { firstMessage: l, channel: t }),
                ],
            }),
        ],
    });
}
function so(e) {
    return e.preventDefault();
}
let sc = s.memo(function (e) {
        return (0, i.jsx)(i.Fragment, {
            children: (0, eL.LL)({ ...e, analyticsSource: "ForumPostMediaPreviewImage" }),
        });
    }),
    sd = s.memo(function (e) {
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
            h = lR({ numAttachments: m.length, containerWidth: l, containerHeight: a }),
            x = (function (e) {
                let { imageContainerStyles: t, containerWidth: n, containerHeight: l } = e,
                    i = s.useRef(lk(t)),
                    a = s.useRef(n),
                    r = s.useRef(l),
                    o = n > a.current + 100,
                    c = l > r.current + 100;
                return (o || c) && (i.current = lk(t)), i.current;
            })({ imageContainerStyles: h, containerWidth: l, containerHeight: a }),
            g = (0, iL.O8)(iw.v.GUILD),
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
                                onClick: so,
                                shouldRenderAccessory: !u && !d,
                            },
                            f = (0, eI.ge)(e.src) ? `${e.src}?format=png` : e.src,
                            j = o && !l ? e.src : f;
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: st.UV,
                                style: h[t],
                                children: [
                                    c
                                        ? (0, i.jsx)(iM.A, {
                                              ...m,
                                              src: j,
                                              backgroundSrc: f,
                                              aspectRatio: m.maxWidth / m.maxHeight,
                                              alt: m.alt ?? "",
                                              className: r()(st.EN, { [st.cd]: l }),
                                              imageChildClassName: st.Rp,
                                          })
                                        : e.src.startsWith("data:")
                                          ? (0, i.jsx)(ec._, {
                                                ...m,
                                                className: st.il,
                                                imageClassName: r()(st.LW, { [st.cd]: l }),
                                            })
                                          : (0, i.jsx)(sc, {
                                                ...m,
                                                autoPlay: o && !l,
                                                containerClassName: st.EK,
                                                imageClassName: r()(st.rp, { [st.cd]: l }),
                                                responsive: !0,
                                            }),
                                    l &&
                                        (0, i.jsx)("div", {
                                            className: st.X,
                                            children: (0, i.jsx)(eN.A, { obscureReason: s, iconClassname: st.yo }),
                                        }),
                                ],
                            },
                            e.src,
                        );
                    }),
                [o, u, d, n, h, x, m, c, g],
            );
        return (0, i.jsxs)("div", {
            className: st.pV,
            style: { width: l, height: a },
            children: [
                f,
                (u || d) &&
                    (0, i.jsxs)("div", {
                        className: st.vz,
                        children: [
                            d &&
                                (0, i.jsx)(i_.u, {
                                    color: "currentColor",
                                    size: "custom",
                                    width: 22,
                                    height: 22,
                                    className: st.cU,
                                }),
                            u &&
                                (0, i.jsx)(iR.O, {
                                    size: "custom",
                                    width: 29,
                                    height: 29,
                                    color: "currentColor",
                                    className: st.cU,
                                }),
                        ],
                    }),
                t.length > 4 &&
                    (0, i.jsx)(su, {
                        text: (t.length - 4).toString(),
                        icon: ik.x,
                        pillClassName: st.v3,
                        iconClassName: st.In,
                        textClassName: st.EY,
                    }),
            ],
        });
    });
function su(e) {
    let { text: t, icon: n, pillClassName: l, iconClassName: s, textClassName: a } = e;
    return (0, i.jsxs)("div", {
        className: l,
        children: [
            (0, i.jsx)(n, { className: s, color: "currentColor" }),
            (0, i.jsxs)(b.E, { variant: "text-xs/medium", className: a, children: ["+", t] }),
        ],
    });
}
function sm(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, containerWidth: a, hasUnreads: o } = e,
        c = eF.hH.useSetting(),
        [d, u] = i6(a - 24),
        { content: m } = (0, ev.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !0 }),
        { shouldRenderTagsRow: h } = (0, eE.BA)({ channel: t, isNew: !1 }),
        x = s.useMemo(() => ({ width: d, height: u }), [d, u]),
        g = o ? st.kR : st.b8;
    return (0, i.jsxs)("div", {
        className: st.Cv,
        style: x,
        children: [
            (0, i.jsxs)("div", {
                className: st.Qs,
                children: [
                    l &&
                        null == n &&
                        (0, i.jsx)(b.E, {
                            variant: "text-sm/normal",
                            color: o ? "text-default" : "text-muted",
                            children: eJ.intl.string(eJ.t.mE3KJN),
                        }),
                    l && null != n && (0, i.jsx)(iq.Ay, { message: n, content: m, className: g, compact: c }),
                ],
            }),
            (0, i.jsx)("div", {
                className: r()(st.kh, { [st.ZH]: !h }),
                children: h ? (0, i.jsx)(eE.Ay, { channel: t, tagsClassName: st.uU }) : null,
            }),
        ],
    });
}
function sh(e) {
    let { message: t, containerWidth: n, channel: l, hideTags: a = !1 } = e,
        [o, c] = i6(n - 24),
        { shouldRenderTagsRow: d } = (0, eE.BA)({ channel: l, isNew: !1 }),
        u = s.useMemo(() => ({ width: o, height: c }), [o, c]);
    return (0, i.jsxs)("div", {
        className: st.Cv,
        style: u,
        children: [
            (0, i.jsx)("div", {
                className: st.Qs,
                children: (0, i.jsx)(b.E, {
                    className: st.Wv,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: t,
                }),
            }),
            (0, i.jsx)("div", {
                className: r()(st.kh, { [st.ZH]: !d }),
                children: d && !a ? (0, i.jsx)(eE.Ay, { channel: l, tagsClassName: st.uU }) : null,
            }),
        ],
    });
}
var sx = n(392421),
    sg = n(980707),
    sf = n(477782),
    sj = n(901713);
function sv(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: l, layoutType: s, tagSetting: a } = (0, ej.R)(t.id),
        { showResolvedFlags: r, setShowResolvedFlags: o } = (0, K.T)(t.id),
        c = (0, ej.p)(),
        d = t.isMediaChannel();
    function u(e) {
        (0, tp.Cd)({ guildId: t.guild_id, channelId: t.id, sortOrder: e }), c.getState().setSortOrder(t.id, e), n();
    }
    function m(e) {
        (0, tp.ad)({ guildId: t.guild_id, channelId: t.id, forumLayout: e }), c.getState().setLayoutType(t.id, e), n();
    }
    function h(e) {
        c.getState().setTagSetting(t.id, e), n();
    }
    let g = null != t.availableTags && t.availableTags.length > 0;
    return (0, i.jsx)("div", {
        className: sj.k,
        children: (0, i.jsxs)(sg.W, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": d ? eJ.intl.string(eJ.t["kQN/bi"]) : eJ.intl.string(eJ.t.DJzbkL),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, i.jsxs)(sf.rX, {
                    label: eJ.intl.string(eJ.t.f8wNDl),
                    children: [
                        (0, i.jsx)(sf.iD, {
                            id: "sort-by-recent-activity",
                            group: "sort-by",
                            label: eJ.intl.string(eJ.t.jOPmcI),
                            action: () => u(iI.T.LATEST_ACTIVITY),
                            checked: l === iI.T.LATEST_ACTIVITY,
                        }),
                        (0, i.jsx)(sf.iD, {
                            id: "sort-by-date-posted",
                            group: "sort-by",
                            label: eJ.intl.string(eJ.t.UIltXd),
                            action: () => u(iI.T.CREATION_DATE),
                            checked: l === iI.T.CREATION_DATE,
                        }),
                    ],
                }),
                t.isModeratorReportChannel() &&
                    (0, i.jsx)(sf.rX, {
                        label: eJ.intl.string(ni.default.PsM2b4),
                        children: (0, i.jsx)(sf.sL, {
                            id: "resolved-flags-none",
                            label: eJ.intl.string(eJ.t.XJuakA),
                            action: () => o(!r),
                            checked: r,
                        }),
                    }),
                t.isMediaChannel() || t.isModeratorReportChannel() || t.isGameInvitesChannel()
                    ? null
                    : (0, i.jsxs)(sf.rX, {
                          label: eJ.intl.string(eJ.t.mFMDSq),
                          children: [
                              (0, i.jsx)(sf.iD, {
                                  id: "view-as-list",
                                  group: "view-as",
                                  label: eJ.intl.string(eJ.t["NJFr+g"]),
                                  action: () => m(x.C.LIST),
                                  checked: s === x.C.LIST,
                              }),
                              (0, i.jsx)(sf.iD, {
                                  id: "view-as-grid",
                                  group: "view-as",
                                  label: eJ.intl.string(eJ.t.wKeggb),
                                  action: () => m(x.C.GRID),
                                  checked: s === x.C.GRID,
                              }),
                          ],
                      }),
                g
                    ? (0, i.jsxs)(sf.rX, {
                          label: eJ.intl.string(eJ.t.Paxaug),
                          children: [
                              (0, i.jsx)(sf.iD, {
                                  id: "match-some",
                                  group: "tag-setting",
                                  label: eJ.intl.string(eJ.t.rQ0ctQ),
                                  action: () => h(sx.n.MATCH_SOME),
                                  checked: a === sx.n.MATCH_SOME,
                              }),
                              (0, i.jsx)(sf.iD, {
                                  id: "match-all",
                                  group: "tag-setting",
                                  label: eJ.intl.string(eJ.t.FCXUu0),
                                  action: () => h(sx.n.MATCH_ALL),
                                  checked: a === sx.n.MATCH_ALL,
                              }),
                          ],
                      })
                    : null,
                (0, i.jsx)(sf.rX, {
                    children: (0, i.jsx)(sf.Dr, {
                        id: "reset-all",
                        label: eJ.intl.string(eJ.t["3b//lO"]),
                        action: () => {
                            u(t.getDefaultSortOrder()), m(t.getDefaultLayout()), h(t.getDefaultTagSetting());
                        },
                    }),
                }),
            ],
        }),
    });
}
var sp = n(305866),
    sA = n(123292);
function sC() {
    return Promise.resolve();
}
function sN(e) {
    let { channel: t, closePopout: n, setPopoutRef: l } = e,
        a = (0, l4.OT)(t),
        { tagFilter: r } = (0, ej.R)(t.id),
        o = (0, ej.p)(),
        c = (0, g.bG)([P.Ay], () => P.Ay.keyboardModeEnabled),
        d = s.useCallback(
            (e) => {
                (0, tp.UA)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    tagId: e,
                    filterTagIds: Array.from(r),
                    added: !r.has(e),
                    location: {
                        page: eQ.liQ.GUILD_CHANNEL,
                        section: eQ.JJy.FORUM_CHANNEL_HEADER,
                        object: eQ.ZSU.CHANNEL_TAG,
                    },
                }),
                    o.getState().toggleTagFilter(t.id, e);
            },
            [t, r, o],
        ),
        h = s.useCallback(() => {
            o.getState().setTagFilter(t.id, new Set()), c || n();
        }, [o, t.id, c, n]),
        x = (0, m.Ay)({
            id: `${t.id}-all-tags-dropdown-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: sC,
            scrollToEnd: sC,
        }),
        f = s.useRef(null);
    return (
        s.useEffect(() => {
            requestAnimationFrame(() => {
                if (null != f.current) {
                    let e = f.current.querySelector(`.${l9.Tc}`);
                    null != e && e.focus();
                }
            });
        }, []),
        (0, i.jsxs)(sp.l, {
            ref: (e) => {
                l?.(e);
            },
            "aria-label": eJ.intl.string(eJ.t.TdqRTh),
            className: l9.kL,
            children: [
                (0, i.jsx)("div", {
                    className: l9.wx,
                    children: (0, i.jsxs)("div", {
                        className: l9.LD,
                        children: [
                            (0, i.jsx)(j.D, {
                                color: "interactive-text-default",
                                variant: "heading-md/semibold",
                                className: l9.TK,
                                children: eJ.intl.string(eJ.t.HPu3kq),
                            }),
                            (0, i.jsx)("div", {
                                className: l9.d1,
                                children: (0, i.jsx)(b.E, {
                                    className: l9.lT,
                                    color: "none",
                                    variant: "text-xs/medium",
                                    tabularNumbers: !0,
                                    children: r.size,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(u.hD, {
                    navigator: x,
                    children: (0, i.jsx)(u.PR, {
                        children: (e) => {
                            let { ref: t, ...n } = e;
                            return (0, i.jsx)("div", {
                                ref: (e) => {
                                    (t.current = e), (f.current = e);
                                },
                                ...n,
                                className: l9.I8,
                                children: a.map((e) =>
                                    (0, i.jsx)(
                                        il.A,
                                        { className: l9.Tc, tag: e, selected: r.has(e.id), onClick: () => d(e.id) },
                                        e.id,
                                    ),
                                ),
                            });
                        },
                    }),
                }),
                (0, i.jsx)("div", { className: l9.me }),
                (0, i.jsx)(sA.Q, {
                    "aria-label": eJ.intl.string(eJ.t["98EPQP"]),
                    onClick: h,
                    text: eJ.intl.string(eJ.t["98EPQP"]),
                }),
            ],
        })
    );
}
var sb = n(37411);
function sE(e) {
    let { channel: t, guild: n, sidebarState: l } = e;
    return (0, i.jsx)(eb.Cp, { channel: t, children: (0, i.jsx)(sk, { channel: t, guild: n, sidebarState: l }) }, t.id);
}
let sS = new (class {
    minWidth;
    maxWidth;
    gap;
    constructor({ minWidth: e, maxWidth: t, gap: n }) {
        J()(e < t, "minWidth needs to be smaller than maxWidth"),
            (this.minWidth = e),
            (this.maxWidth = t),
            (this.gap = n);
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
function sy(e) {
    return `forum-grid-header-section-${e}`;
}
function sT(e) {
    let { itemRole: t, coords: n, section: l } = e;
    return (0, i.jsx)(
        "div",
        {
            className: r()(na.card, na.archivedDividerRow, na.columnsSpan),
            style: n,
            "data-item-role": t,
            children: (0, i.jsx)("div", {
                className: na.emptyMainCard,
                children: (0, i.jsx)(j.D, {
                    variant: "eyebrow",
                    className: na.archivedDivider,
                    id: sy(l),
                    children: eJ.intl.string(eJ.t["3+LO1w"]),
                }),
            }),
        },
        "section-divider",
    );
}
function sI(e) {
    let { section: t, coords: n, key: l, isShowingSearchResult: s, hasActiveThreads: a } = e;
    return () =>
        2 === t && !s && a
            ? (0, i.jsx)(
                  sT,
                  { section: t, coords: null == n ? void 0 : { ...n, position: "absolute" }, itemRole: "section" },
                  l,
              )
            : null;
}
function s_(e, t) {
    return `card-${e}-${t}`;
}
function sR(e) {
    if ("string" == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function sk(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: l,
            editorAdditionRowHeight: a,
            listViewCardHeights: o,
            formOpen: c,
            name: f,
        } = (0, eb.kU)((e) => {
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
            loading: _,
            isSearchLoading: R,
            layoutType: k,
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: l, tagSetting: i } = (0, ej.R)(e.id),
                s = (0, ev.V3)({ channel: e, sortOrder: t, tagFilter: n, tagSetting: i, shouldAutomaticallyAck: !0 }),
                a = (0, g.bG)([ti.A, W.A], () => {
                    let t = ti.A.hasLoaded(e.guild_id),
                        n = W.A.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: r, canLoadMore: o, loadMore: c, loading: d } = (0, ts.Fr)(e, t, n, i),
                { searchResults: u, isSearchLoading: m } = (0, ev.cA)({ channelId: e.id });
            return (
                (0, ev.yz)(e, t, n, i),
                {
                    activeThreadIds: s,
                    archivedThreadIds: r,
                    searchResults: u,
                    canLoadMore: o,
                    loadMore: c,
                    loading: a || d || m,
                    archivedThreadsLoading: d,
                    activeThreadsLoading: a,
                    isSearchLoading: m,
                    layoutType: l,
                }
            );
        })(t),
        M = j.length > 0,
        L = M || b.length > 0;
    (0, G.yk)(t, j);
    let O = (0, $.A)(t),
        { tagFilter: F, tagSetting: z } = (0, ej.R)(t.id);
    (0, ev.o7)(t, F, z, c),
        (0, D.Ay)(() => {
            !c && f.length > 0 && tx.A.updateForumSearchQuery(t.id, f);
        });
    let U = (0, ev.O3)(t),
        H = (0, ev.An)(t),
        B = s.useRef(null),
        { observePostVisibilityAnalytics: V } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: l } = e;
            tv({ guildId: t, channelId: n });
            let i = s.useRef(null),
                a = s.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let l = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, tj.xx)(e, t, l) : (0, tj.O_)(e, t, l);
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
                                i.current?.disconnect(), (i.current = null);
                            }
                        );
                }, [n, a, l]),
                {
                    observePostVisibilityAnalytics: s.useCallback(
                        (e, t) => {
                            null == e ? (0, tj.O_)(n, t, Date.now()) : i.current?.observe(e);
                        },
                        [n],
                    ),
                }
            );
        })({ scrollerRef: B, channelId: t.id, guildId: t.guild_id }),
        Q = k === x.C.GRID,
        { searchQuery: X } = (0, ev.cA)({ channelId: t.id }),
        J = null != E && null != X && X.length > 0,
        Z = s.useRef(null),
        { containerRef: ee, containerWidth: et } = ic();
    s.useEffect(() => {
        if (null == Z.current && null != t.id) {
            let e = eG.Ay.getSidebarState(t.id);
            null != e && e.type === tl.PE.VIEW_THREAD && (Z.current = e.channelId);
        }
    }, [t.id]);
    let { columns: en } = s.useMemo(() => (Q ? sS.getRenderOptions(et) : i7), [Q, et]),
        el = s.useMemo(() => (_ ? Math.round((window.innerHeight - 200) / 118) : 0), [_]),
        { showResolvedFlags: ei } = (0, K.T)(t.id),
        es = t.isModeratorReportChannel(),
        ea = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / i9(sS.getWidth(et))) * en;
            return T ? e : 0;
        }, [et, en, T]),
        er = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / i9(sS.getWidth(et))) * en;
            return I ? e : 0;
        }, [et, en, I]),
        eo = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / i9(sS.getWidth(et))) * en;
            return R && J ? e : 0;
        }, [et, en, R, J]),
        ec = s.useMemo(() => {
            if (Q)
                if (!U && J) return [1, 0];
                else if (!H) return [1, j.length + ea, 0];
                else if (J) return [1, E.length + eo, 0];
                else if (es && !ei) return [1, j.length + ea, 0];
                else return [1, j.length + ea, b.length + er];
            if (!U && J) return [1, 1];
            if (!H) return [1, j.length, 1];
            if (J) return [1, E.length, 0, el];
            if (es && !ei) return [1, j.length, 0, el];
            else return [1, j.length, b.length, el];
        }, [Q, J, j.length, b.length, U, H, el, E, ea, er, eo, ei, es]),
        ed = s.useMemo(
            () =>
                !U && J
                    ? [[], []]
                    : H
                      ? J
                          ? [[], E, [], []]
                          : es && !ei
                            ? [[], j, [], []]
                            : [[], j, b, []]
                      : [[], j, []],
            [J, U, H, E, j, b, ei, es],
        ),
        eu = s.useCallback(
            (e, n) => {
                (0, tp.Ml)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: { page: eQ.liQ.GUILD_CHANNEL, section: eQ.JJy.FORUM_CHANNEL_POST },
                }),
                    n ? (0, tn.N9)(e, { source: sb.H9.BROWSER }) : ((Z.current = e.id), (0, tr.JA)(e));
            },
            [t.guild_id, t.id, Z],
        ),
        [em, eh] = s.useState(l + a - 24),
        ex = s.useCallback(
            (e, n, l) =>
                0 === e
                    ? (0, i.jsx)(
                          sO,
                          {
                              channel: t,
                              isEmpty: !M,
                              isSearchLoading: R,
                              numResults: E?.length,
                              coords: n,
                              onHeightChange: eh,
                              children:
                                  !_ && (0, i.jsx)(nH, { channel: t, hasAnyThread: L, hasActiveThreads: M }, t.id),
                          },
                          "forum-channel-header",
                      )
                    : 2 !== e || H
                      ? 1 === e && J && !U
                          ? (0, i.jsx)(sw, { channel: t, coords: n }, "archive-or-search-result")
                          : l()
                      : (0, i.jsx)(sM, { channel: t, coords: n }, "archived-missing-reading-history-perm"),
            [J, H, E, U, t, M, R, _, L],
        ),
        eg = (0, g.bG)([th.A], () => th.A.hasHidden(t.id)),
        ef = { editorHeight: l, isGridLayout: Q },
        ep = s.useRef(ef);
    s.useEffect(() => {
        ep.current = ef;
    }),
        s.useEffect(() => {
            let { editorHeight: e, isGridLayout: t } = ep.current,
                n = t ? ey : B,
                l = n.current?.getScrollerState();
            null != l && !eg && l.scrollTop > e && n.current?.scrollTo({ to: 0 });
        }, [eg]);
    let {
            updateListScrollerRef: eA,
            renderListSection: eC,
            renderListItem: eN,
            getListSectionHeight: eE,
            getListItemHeight: eS,
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
                x = (0, g.bG)([td.Ay], () => td.Ay.getChannelId()),
                f = s.useCallback(
                    (e) => (n) => {
                        (t.current = n), (e.current = n?.getScrollerNode() ?? null);
                    },
                    [t],
                ),
                j = s.useCallback(
                    (e) => sI({ section: e.section, isShowingSearchResult: h, hasActiveThreads: n })(),
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
                                              className: r()(na.loadingCard, na[`loadingCard-${e.row % 3}`]),
                                          },
                                          `loading-${e.row}`,
                                      );
                            let t = l[e.section][e.row],
                                n = null != x && (0, Y.iU)(x) ? e2 : nn.Ay;
                            return (0, i.jsx)(
                                "li",
                                {
                                    className: na.card,
                                    "data-item-role": "item",
                                    children: (0, i.jsx)(v.F, {
                                        children: (0, i.jsx)(n, {
                                            className: na.mainCard,
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
            hasActiveThreads: M,
            threadIdsBySection: ed,
            listViewCardHeights: o,
            editorHeight: l,
            editorAdditionRowHeight: a,
            renderSectionOrItem: ex,
            goToThread: eu,
            observePostVisibilityAnalytics: V,
            isShowingSearchResult: J,
        }),
        ey = s.useRef(null),
        {
            updateMasonryListScrollerRef: eT,
            getItemKey: eI,
            renderGridSection: e_,
            renderGridItem: eR,
            getGridSectionHeight: ek,
            getSectionProps: eM,
            handleGridFocus: ew,
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
                        (t.current = e), (g.current = e?.getScrollerNode());
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
                        l.scrollIntoViewNode({
                            node: i,
                            padding: a,
                            callback() {
                                requestAnimationFrame(() => {
                                    document.querySelector(e)?.focus({ preventScroll: !0 });
                                });
                            },
                        }),
                            (h.current = sR(n));
                    },
                    [t, h],
                ),
                v = s.useCallback(
                    (e) => {
                        let t = sR(e);
                        if (null == t) return;
                        let n = ez.A.getChannel(t);
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
                            return null == l ? s_(e, t) : s_(e, l);
                        }
                    },
                    [n],
                ),
                A = s.useCallback(
                    (e, t, n) =>
                        a(e, t, sI({ section: e, coords: t, key: n, isShowingSearchResult: c, hasActiveThreads: o })),
                    [a, o, c],
                ),
                C = s.useCallback((e) => (0 === e ? {} : { role: "grid", "aria-labelledby": `#${sy(e)}` }), []);
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
                                  sn,
                                  {
                                      id: `${a}`,
                                      threadId: c,
                                      className: r()(na.card, na.mainCard),
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
                                        className: r()(na.loadingCard, na[`loadingCard-${t % 3}`]),
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
            masonryListScrollerRef: ey,
            threadIdsBySection: ed,
            goToThread: eu,
            renderSectionOrItem: ex,
            hasActiveThreads: M,
            isShowingSearchResult: J,
            canSearchForumPosts: U,
            canViewArchivedPosts: H,
            observePostVisibilityAnalytics: V,
            focusedThreadId: Z,
            headerHeight: em,
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
                    null == eG.Ay.getSidebarState(r) && (a.current = null);
                    let n = i.findIndex((t) => t.find((t) => t === e)),
                        l = t.current.getCoordsMap(),
                        s = l[`__section__${n}`],
                        o = l[s_(n, e)];
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
        masonryListScrollerRef: ey,
        containerWidth: et,
        isGridLayout: Q,
        threadIdsBySection: ed,
        parentId: t.id,
        focusedThreadId: Z,
    });
    let eL = s.useCallback(() => {
            if (J) return;
            let e = Q ? ey.current?.getScrollerState() : B.current?.getScrollerState();
            if (null == e) return;
            (0, tp.pO)({ guildId: t.guild_id, channelId: t.id });
            let n = e.scrollTop + e.offsetHeight;
            e.scrollHeight - n < (Q ? Math.max(200, i9(et)) : 200) && y();
        }, [J, Q, t.guild_id, t.id, et, y]),
        eD = (0, g.bG)([P.Ay], () => P.Ay.keyboardModeEnabled),
        eP = (0, eb.kU)((e) => e.titleFocused || e.bodyFocused, d.x),
        eO = (function (e) {
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
                        let n = (0, iP.Mz)(e, iO),
                            l = (0, iP.HP)(e);
                        d(n, l), (0, iD.T)(t, l, !0);
                    },
                    [t, d],
                ),
                [x, g] = s.useState(!1),
                f = s.useRef(x);
            s.useLayoutEffect(() => {
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
                                e.removeEventListener("focusin", n),
                                    e.removeEventListener("focusout", l),
                                    e.removeEventListener("focus", s),
                                    e.removeEventListener("scroll", o);
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
                                null !== e && null == c((0, iP.Mz)(e, iO)) && u((0, iP.Mz)(t, "data-grid-id"));
                            }));
                    }
                    function s() {
                        let e = r.current;
                        if (f.current || null == e) return;
                    }
                    function o() {
                        a.current = !0;
                    }
                }, [t, d, u, m, c]);
            let j = s.useCallback(
                    (e) => {
                        if (!o.current) return;
                        let t = i.current,
                            n = r.current;
                        if (null == t) return;
                        let l = (0, iP.Mz)(t, iO),
                            s = n?.querySelector(l);
                        if (null == s) return;
                        let a = parseInt(s.getAttribute("data-grid-section") ?? ""),
                            d = parseInt(s.getAttribute("aria-rowindex")),
                            u = parseInt(s.getAttribute("aria-colindex"));
                        switch ((iz.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                            case h.D$.RIGHT: {
                                let e = c(iU({ section: a, row: d, column: u + 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(iO);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.LEFT: {
                                let e = c(iU({ section: a, row: d, column: u - 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(iO);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.DOWN: {
                                let e = c(iU({ section: a, row: d + 1, column: u }));
                                if ((null == e && (e = c(iU({ section: a + 1, row: 0, column: u }))), null != e)) {
                                    let t = e.getAttribute(iO);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.UP: {
                                let e;
                                if (0 === d) {
                                    let t = parseInt(s.getAttribute(iG));
                                    null == (e = c(iU({ section: a - 1, row: t, column: u }))) &&
                                        (e = c(iU({ section: a - 1, row: t - 1, column: u })));
                                } else e = c(iU({ section: a, row: d - 1, column: u }));
                                if (null != e) {
                                    let t = e.getAttribute(iO);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.SPACE:
                            case h.D$.ENTER: {
                                if (e.repeat) return;
                                let t = i.current;
                                if (null != t) {
                                    let n = c((0, iP.Mz)(t, iO)),
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
                        i.current = null != e ? (0, iP.t$)(t, e) : null;
                    },
                    [t],
                );
            return s.useMemo(() => ({ id: t, containerProps: { onKeyDown: j, ref: r }, setFocus: v }), [t, j, v]);
        })({ id: "forum-grid-view", isEnabled: Q && eD && !eP, setFocus: ew }),
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
        })({ listRef: B, padding: 96, isEnabled: !Q && eD && !eP, channel: t }),
        eU = s.useCallback(
            (e, n, l) =>
                0 === e
                    ? 0
                    : t.isGameInvitesChannel()
                      ? 280
                      : i9(l, t.isMediaChannel() ? i3.SIXTEEN_BY_NINE : i3.THREE_BY_TWO),
            [t],
        ),
        { ref: eH, ...eB } = eO.containerProps,
        eV = eG.Ay.getSidebarState(t.id),
        eW = null != eV && (0, eG.JU)(eV),
        e$ = (0, g.bG)([eG.Ay], () => eG.Ay.getSection(t.id)) === eQ.YvQ.MEMBERS;
    return (0, i.jsx)("div", {
        className: na.container,
        ref: ee,
        "data-member-list-open": e$,
        children: (0, i.jsx)(p.sk, {
            children: (e) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        c &&
                            (0, i.jsx)(w.A, {
                                channel: t,
                                draftType: to.C.FirstThreadMessage,
                                className: na.uploadArea,
                                style: { right: eW && n?.isThreadSidebarFloating ? n.threadSidebarWidth : 0 },
                            }),
                        (0, i.jsx)(sL, { channel: t }),
                        (0, i.jsx)(A.A, { children: (0, i.jsx)(v.H, { children: eJ.intl.string(eJ.t.B2panI) }) }),
                        O
                            ? (0, i.jsx)("div", {
                                  className: na.optInNotice,
                                  children: (0, i.jsx)(q.A, { channel: t }),
                              })
                            : null,
                        Q
                            ? (0, i.jsx)(i$, {
                                  navigator: eO,
                                  children: (0, i.jsx)(
                                      C.f,
                                      {
                                          ref: (e) => {
                                              (eH.current = e?.getScrollerNode() ?? null), eT(e);
                                          },
                                          itemGutter: 16,
                                          padding: 24,
                                          className: na.grid,
                                          columns: en,
                                          sections: ec,
                                          getItemKey: eI,
                                          getSectionHeight: ek,
                                          getItemHeight: eU,
                                          renderSection: e_,
                                          renderItem: eR,
                                          getSectionProps: eM,
                                          onScroll: S ? eL : void 0,
                                          chunkSize: 350,
                                          ...eB,
                                          ...e,
                                      },
                                      k,
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
                                                  ref: eA(n),
                                                  className: na.list,
                                                  sections: ec,
                                                  sectionHeight: eE,
                                                  rowHeight: eS,
                                                  renderRow: eN,
                                                  renderSection: eC,
                                                  chunkSize: 150,
                                                  onScroll: S ? eL : void 0,
                                                  paddingBottom: 24,
                                                  ...l,
                                                  ...e,
                                                  innerRole: "list",
                                              },
                                              k,
                                          );
                                      },
                                  }),
                              }),
                    ],
                }),
        }),
    });
}
function sM(e) {
    let { channel: t, coords: n } = e,
        l = (0, O.Ay)(t);
    return (0, i.jsx)("div", {
        className: r()(na.missingReadHistoryPermission, na.columnsSpan),
        style: n,
        children: (0, i.jsx)(b.E, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eJ.intl.format(eJ.t.TycmzM, { channelName: l }),
        }),
    });
}
function sw(e) {
    let { channel: t, coords: n } = e,
        l = (0, O.Ay)(t);
    return (0, i.jsx)("div", {
        className: r()(na.missingReadHistoryPermission, na.columnsSpan),
        style: n,
        children: (0, i.jsx)(b.E, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eJ.intl.format(eJ.t.OWZJdS, { channelName: l }),
        }),
    });
}
function sL(e) {
    let { channel: t } = e,
        n = s.useCallback(() => {
            tx.A.resort(t.id);
        }, [t]),
        l = (0, g.bG)([tg.A], () => tg.A.getNewThreadCount());
    return 0 === l
        ? null
        : (0, i.jsx)(E.D, {
              className: na.newPostsButton,
              onClick: n,
              children: (0, i.jsx)(b.E, {
                  color: "text-brand",
                  variant: "text-md/medium",
                  children: eJ.intl.format(eJ.t.ue1qfM, { count: l }),
              }),
          });
}
function sD() {
    return Promise.resolve();
}
function sP(e) {
    let { parentChannel: t, canCreatePost: n } = e,
        l = s.useCallback(() => {
            (0, tp.jr)({ guildId: t.guild_id, channelId: t.id }), (0, z.d)(t);
        }, [t]);
    return __OVERLAY__ || !n
        ? null
        : (0, i.jsx)(S.$, { variant: "primary", size: "md", text: eJ.intl.string(tH.default.QwW8zd), onClick: l });
}
function sO(e) {
    let t,
        n,
        l,
        { channel: a, isEmpty: o, isSearchLoading: v, numResults: p, children: A, coords: C, onHeightChange: N } = e,
        {
            name: S,
            formOpen: k,
            titleFocused: M,
            hasClickedForm: w,
            textAreaState: D,
            onboardingExpanded: O,
            setEditorAdditionRowHeight: F,
        } = (0, eb.kU)((e) => {
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
        { tagFilter: G, layoutType: z } = (0, ej.R)(a.id),
        U = (0, eb.ST)(),
        H = (0, ej.p)(),
        W = (0, g.bG)([tc.A], () => tc.A.canChatInGuild(a.guild_id)),
        $ = (0, ta.AI)(a),
        [q, K] = s.useState($),
        [, X] = (0, B.c)(a.getGuildId() ?? void 0),
        J = (0, Q.V)(a),
        Z = W && ($ || (q && X)) && !J;
    $ && !q && K(!0);
    let { ref: ee, height: et } = (0, L.Ay)();
    s.useEffect(() => {
        null != et && N(et);
    }, [N, et]);
    let en = s.useCallback(() => {
        c()(() => {
            null != ee.current && U.getState().setEditorHeight(ee.current.offsetHeight);
        });
    }, [ee, U]);
    s.useLayoutEffect(en, [en, o, Z, O]), (0, tm.Vo)({ event: eQ.jej.REMEASURE_TARGET, handler: en });
    let el = (0, g.bG)([tu.A], () => tu.A.getUploads(a.id, to.C.FirstThreadMessage)),
        ei = (0, ev.Hv)(a),
        { containerRef: es, containerWidth: ea } = ic(),
        er = s.useRef(null),
        eo = s.useRef(null),
        ec = s.useRef(null);
    s.useLayoutEffect(() => {
        let e = er.current,
            t = e?.children?.[0],
            n = ec.current;
        if (null != es.current && null != t && null != t.children && null != n) {
            let { left: e, top: l } = es.current.getBoundingClientRect(),
                i = 0;
            for (let n of t.children) {
                let { right: t, top: s, height: a } = n.getBoundingClientRect();
                if (s - l > a) break;
                t - e > i && (i = t - e);
            }
            n.style.left = `${i}px`;
        }
    }, [a.availableTags, es, ea, G]);
    let ed = S.length > 0 && !k && (v || null != p),
        eu =
            !__OVERLAY__ &&
            !w &&
            !k &&
            M &&
            (0 === D.textValue.trim().length || D.textValue.trim() === ei) &&
            0 === el.length &&
            !J &&
            !a.isGameInvitesChannel();
    s.useLayoutEffect(() => {
        if (!(ed || eu)) return F(0);
        null != eo.current && F(eo.current.clientHeight);
    }, [F, ed, eu, eo]);
    let em = (0, m.Ay)({
            id: `${a.id}-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: sD,
            scrollToEnd: sD,
            orientation: h.Gl.HORIZONTAL,
        }),
        { role: eh, onFocus: ex, ...eg } = (0, u.rm)("forum-channel-header"),
        ef = s.useRef(null),
        ep =
            ((t = s.useRef(!1)),
            (n = (0, g.bG)([P.Ay], () => P.Ay.keyboardModeEnabled)),
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
        eA = s.useCallback(
            (e) => {
                ex(), e.target !== ee.current || ep.current || ef.current?.focus();
            },
            [ex, ee, ep],
        ),
        eC = s.useMemo(() => (J ? (0, Y.Yj)(a.availableTags) : a.availableTags), [a.availableTags, J]);
    return (0, i.jsx)(
        "div",
        {
            className: r()(na.card, na.headerRow, na.columnsSpan),
            ref: ee,
            onFocus: eA,
            ...eg,
            style: { ...C, position: z === x.C.GRID ? "absolute" : "static", height: "auto" },
            children: (0, i.jsxs)(tm.Ah, {
                children: [
                    null != a.guild_id
                        ? (0, i.jsx)(V.A, {
                              className: r()(na.newMemberBanner, { [na.gridViewBanner]: z === x.C.GRID }),
                              guildId: a.guild_id,
                              channel: a,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: r()(na.headerContainer, {
                            [na.gameInvitesHeaderContainer]: a.isGameInvitesChannel(),
                        }),
                        children: [
                            a.isGameInvitesChannel() && (0, i.jsx)(sF, { channel: a }),
                            (0, i.jsxs)("div", {
                                className: na.mainCardContainer,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: r()(na.mainCard, na.header, {
                                            [na.headerWithMatchingPosts]: ed || eu,
                                        }),
                                        children: (0, i.jsx)(ih, {
                                            parentChannel: a,
                                            onChange: en,
                                            isSearchLoading: v,
                                            numResults: p,
                                            canCreatePost: Z,
                                            inputRef: ef,
                                        }),
                                    }),
                                    (ed || eu) &&
                                        (0, i.jsxs)("div", {
                                            className: na.matchingPostsRow,
                                            ref: eo,
                                            children: [
                                                ed &&
                                                    (0, i.jsxs)("div", {
                                                        className: na.matchingPosts,
                                                        children: [
                                                            (0, i.jsx)(j.D, {
                                                                variant: "text-xs/normal",
                                                                color: "text-default",
                                                                children: v
                                                                    ? eJ.intl.string(eJ.t["/9i3qq"])
                                                                    : 0 === p
                                                                      ? eJ.intl.string(eJ.t.DbgHxi)
                                                                      : eJ.intl.formatToPlainString(eJ.t["tBz/8b"], {
                                                                            numPosts: p ?? "",
                                                                            query: S,
                                                                        }),
                                                            }),
                                                            !v &&
                                                                (0, i.jsx)(E.D, {
                                                                    onClick: function () {
                                                                        (0, tp.hT)({
                                                                            guildId: a.guild_id,
                                                                            channelId: a.id,
                                                                        }),
                                                                            tx.A.clearForumSearch(a.id),
                                                                            U.getState().setName("");
                                                                    },
                                                                    children: (0, i.jsx)(b.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-brand",
                                                                        className: na.clear,
                                                                        children: eJ.intl.string(eJ.t.VkKicb),
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                (0, i.jsx)("div", { className: na.tagsSpacer }),
                                                eu
                                                    ? Z
                                                        ? (0, i.jsxs)("div", {
                                                              className: na.startPostHelp,
                                                              children: [
                                                                  (0, i.jsx)(y.e, {
                                                                      shortcut: "SHIFT",
                                                                      className: na.keyboardShortcut,
                                                                  }),
                                                                  (0, i.jsx)(b.E, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-subtle",
                                                                      children: "+",
                                                                  }),
                                                                  (0, i.jsx)(y.e, {
                                                                      shortcut: "ENTER",
                                                                      className: na.keyboardShortcut,
                                                                  }),
                                                                  (0, i.jsx)(b.E, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-subtle",
                                                                      children: eJ.intl.string(eJ.t.ZvJ0yh),
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, i.jsxs)("div", {
                                                              className: na.startPostHelp,
                                                              children: [
                                                                  (0, i.jsx)(T.E, {
                                                                      size: "custom",
                                                                      color: "currentColor",
                                                                      height: 14,
                                                                      width: 14,
                                                                      className: na.warnIcon,
                                                                  }),
                                                                  (0, i.jsx)(b.E, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-subtle",
                                                                      children: eJ.intl.string(eJ.t.iyzwnD),
                                                                  }),
                                                              ],
                                                          })
                                                    : null,
                                            ],
                                        }),
                                ],
                            }),
                            a.isGameInvitesChannel() && (0, i.jsx)(sP, { parentChannel: a, canCreatePost: Z }),
                        ],
                    }),
                    (0, i.jsx)(nK, { channel: a, onChange: en }),
                    (0, i.jsxs)("div", {
                        className: na.tagsContainer,
                        ref: es,
                        children: [
                            (0, i.jsx)(sG, { channel: a }),
                            eC.length > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)("div", { className: na.divider }),
                                          (0, i.jsx)("div", {
                                              className: na.tagList,
                                              ref: er,
                                              children: (0, i.jsx)(u.hD, {
                                                  navigator: em,
                                                  children: (0, i.jsx)(u.PR, {
                                                      children: (e) => {
                                                          let { ref: t, ...n } = e;
                                                          return (0, i.jsx)("div", {
                                                              className: na.tagListInner,
                                                              ref: t,
                                                              ...n,
                                                              children: eC.map((e) =>
                                                                  (0, i.jsx)(
                                                                      il.A,
                                                                      {
                                                                          tag: e,
                                                                          onClick: () => {
                                                                              var t;
                                                                              return (
                                                                                  (t = e.id),
                                                                                  void ((0, tp.UA)({
                                                                                      guildId: a.guild_id,
                                                                                      channelId: a.id,
                                                                                      tagId: t,
                                                                                      filterTagIds: Array.from(G),
                                                                                      added: !G.has(t),
                                                                                      location: {
                                                                                          page: eQ.liQ.GUILD_CHANNEL,
                                                                                          section:
                                                                                              eQ.JJy
                                                                                                  .FORUM_CHANNEL_HEADER,
                                                                                          object: eQ.ZSU.CHANNEL_TAG,
                                                                                      },
                                                                                  }),
                                                                                  H.getState().toggleTagFilter(a.id, t))
                                                                              );
                                                                          },
                                                                          selected: G.has(e.id),
                                                                      },
                                                                      e.id,
                                                                  ),
                                                              ),
                                                          });
                                                      },
                                                  }),
                                              }),
                                          }),
                                          (0, i.jsx)(I.Y, {
                                              targetElementRef: ec,
                                              renderPopout: (e) => {
                                                  let { closePopout: t, setPopoutRef: n } = e;
                                                  return (0, i.jsx)(sN, {
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
                                                      buttonRef: ec,
                                                      size: f.$n.Sizes.MIN,
                                                      color: f.$n.Colors.CUSTOM,
                                                      className: r()(na.tagsButton, {
                                                          [na.tagsButtonWithCount]: G.size > 0,
                                                      }),
                                                      innerClassName: na.tagsButtonInner,
                                                      "aria-label":
                                                          G.size > 0
                                                              ? eJ.intl.string(eJ.t.IkpM1T)
                                                              : eJ.intl.string(eJ.t["9vKK/N"]),
                                                      children: [
                                                          G.size > 0
                                                              ? (0, i.jsx)("div", {
                                                                    className: na.countContainer,
                                                                    children: (0, i.jsx)(b.E, {
                                                                        className: na.countText,
                                                                        color: "none",
                                                                        variant: "text-xs/medium",
                                                                        children: G.size,
                                                                    }),
                                                                })
                                                              : eJ.intl.string(eJ.t.fZ8hzm),
                                                          n
                                                              ? (0, i.jsx)(_.t, {
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
                                              className: r()(na.tagsButton, na.tagsButtonPlaceholder),
                                              innerClassName: na.tagsButtonInner,
                                              "aria-label": eJ.intl.string(eJ.t.IkpM1T),
                                              children: [
                                                  G.size > 0
                                                      ? (0, i.jsx)("div", {
                                                            className: na.countContainer,
                                                            children: (0, i.jsx)(b.E, {
                                                                className: na.countText,
                                                                color: "none",
                                                                variant: "text-xs/medium",
                                                                children: G.size,
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
function sF(e) {
    let { channel: t } = e,
        { application: n } = (0, G._k)(t.guild_id),
        l = (0, H.A)({ applicationId: n?.id, source: U.GameProfileSources.GameInvitesChannel });
    if (null == n) return null;
    let s = (0, i.jsx)(F.A, { game: n, size: F.M.MEDIUM_LARGE, className: na.gameIcon });
    return (0, i.jsx)(k.m, {
        text: n.name,
        asContainer: !0,
        children:
            null != l
                ? (0, i.jsx)(E.D, { onClick: l, "aria-label": n.name, className: na.gameIconClickable, children: s })
                : s,
    });
}
function sG(e) {
    let { channel: t } = e,
        n = t.isMediaChannel(),
        l = t.isGameInvitesChannel(),
        a = s.useRef(null);
    return (0, i.jsx)(I.Y, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(sv, { channel: t, closePopout: n });
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
                className: na.sortDropdown,
                innerClassName: na.sortDropdownInner,
                "aria-label": n ? eJ.intl.string(eJ.t.JxU0wr) : eJ.intl.string(eJ.t.xyYt8A),
                children: [
                    (0, i.jsx)(M.J, { size: "xs", color: "currentColor" }),
                    (0, i.jsx)(b.E, {
                        className: na.sortDropdownText,
                        variant: "text-sm/medium",
                        color: "interactive-text-default",
                        children: (0, i.jsx)("span", {
                            className: na.sortDropdownTextHighContrastForcedColor,
                            children: n || l ? eJ.intl.string(eJ.t.JxU0wr) : eJ.intl.string(eJ.t.xyYt8A),
                        }),
                    }),
                    s
                        ? (0, i.jsx)(_.t, { size: "custom", color: "currentColor", width: 20 })
                        : (0, i.jsx)(R.a, { size: "custom", color: "currentColor", width: 20 }),
                ],
            });
        },
    });
}

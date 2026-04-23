"use strict";
n.r(t), n.d(t, { default: () => iu });
var l,
    a = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(756287),
    d = n.n(o),
    c = n(942381),
    u = n(837381),
    m = n(887129),
    h = n(741918),
    g = n(371444),
    x = n(17928),
    f = n(554146),
    _ = n(862482),
    p = n(534514),
    j = n(707554),
    b = n(312138),
    v = n(140735),
    C = n(92008),
    A = n(475825),
    N = n(834730),
    S = n(939249),
    E = n(475358),
    T = n(695366),
    y = n(922016),
    I = n(900797),
    w = n(847374),
    R = n(112173),
    k = n(738876),
    M = n(765671),
    L = n(964486),
    D = n(775602),
    P = n(47167),
    O = n(379848),
    F = n(870136),
    U = n(575293),
    z = n(857071),
    G = n(228098),
    B = n(157259),
    H = n(212007),
    V = n(376708),
    W = n(715757),
    $ = n(284009),
    q = n.n($),
    K = n(989349),
    X = n.n(K),
    J = n(990078),
    Q = n(247928),
    Y = n(97808),
    Z = n(778712),
    ee = n(138134),
    et = n(777666),
    en = n(661531),
    el = n(863610),
    ea = n(534890),
    ei = n(144165),
    es = n(748934),
    er = n(104171),
    eo = n(139716),
    ed = n(847599),
    ec = n(114166),
    eu = n(810181),
    em = n(390248),
    eh = n(422844),
    eg = n(435470),
    ex = n(473503),
    ef = n(256265),
    e_ = n(969043),
    ep = n(710948),
    ej = n(218152),
    eb = n(52933),
    ev = n(504261),
    eC = n(505234),
    eA = n(387408),
    eN = n(77350),
    eS = n(294520),
    eE = n(505527),
    eT = n(863439),
    ey = n(465364),
    eI = n(467073),
    ew = n(34337),
    eR = n(624207),
    ek = n(805964),
    eM = n(302031),
    eL = n(253932),
    eD = n(761640),
    eP = n(734057),
    eO = n(232835),
    eF = n(576705),
    eU = n(967198),
    ez = n(287809),
    eG = n(531685),
    eB = n(58703),
    eH = n(763754),
    eV = n(447215);
let eW = (e) => {
    let { message: t, originalAuthor: n, channel: l } = e,
        i = (0, eH.d8)(n, l),
        s = i?.nick ?? n?.username ?? "",
        r = (0, eV.P)({
            user: n ?? void 0,
            channelId: l.id,
            guildId: l.guild_id,
            messageId: t?.id,
            stopPropagation: !0,
        })(i ?? void 0)(s, l.id);
    return (0, a.jsx)(N.E, { variant: "text-md/semibold", children: r });
};
var e$ = n(652215),
    eq = n(838541),
    eK = n(985018),
    eX = n(506472),
    eJ = n(330070),
    eQ = n(992595);
let eY = i.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: l, overrideMedia: s, className: o } = e,
        {
            channel: d,
            isOpen: m,
            messageCount: h,
            content: g,
            firstMessage: f,
            media: _,
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                l = (0, x.bG)([eP.A], () => eP.A.getChannel(t));
            q()(null != l, "the thread should not be null here, a store must have missed an update");
            let a = (0, x.bG)([eD.Ay], () => eD.Ay.getCurrentSidebarChannelId(l.parent_id) === l.id),
                { firstMessage: s } = (0, ex.OA)(l),
                r = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: l = !0 } = e,
                        a = i.useMemo(() => (null != t ? (0, eA.A)(t, t?.messageSnapshots[0]) : null), [t]),
                        { hasSpoilerEmbeds: s, content: r } = i.useMemo(
                            () =>
                                a?.content != null && "" !== a.content
                                    ? (0, ey.Ay)(a, {
                                          formatInline: n,
                                          noStyleAndInteraction: l,
                                          allowHeading: !0,
                                          allowList: !0,
                                      })
                                    : { hasSpoilerEmbeds: !1, content: null },
                            [n, a, l],
                        ),
                        o = (0, ef.Ky)(t, s),
                        d = (0, ef.L_)(t, s);
                    return null == t ? null : { hasSpoilerEmbeds: s, content: r, firstMedia: o, firstMediaIsEmbed: d };
                })({ firstMessage: s }),
                o = r?.content,
                d = r?.firstMedia,
                { messageCountText: c } = (0, eg.k6)(l);
            return { channel: l, isOpen: a, messageCount: c, firstMessage: s, content: o, media: n ?? d };
        })({ threadId: t, overrideMedia: s }),
        p = (0, P.Ay)(d);
    (0, W.vb)(f);
    let b = (0, x.bG)([ez.default, eO.A], () => {
            let e = ez.default.getUser(f?.messageSnapshots[0]?.moderatorReport?.reported_user_id);
            if (null != e) return e;
            if (f?.messageReference?.channel_id != null && f?.messageReference?.message_id != null) {
                let e = eO.A.getMessage(f?.messageReference?.channel_id, f?.messageReference?.message_id);
                if (null != e) return e.author;
            }
            return null;
        }),
        { ref: v, height: C } = (0, M.Ay)(),
        A = (0, ej.kU)((e) => e.setCardHeight, c.x);
    i.useEffect(() => {
        null != C && A(t, C);
    }, [C, A, t]),
        i.useEffect(() => {
            l?.(v.current, t);
        }, [v, l, t]);
    let N = i.useRef(null),
        { handleLeftClick: E, handleRightClick: T } = (0, eC.A)({ facepileRef: N, goToThread: n, channel: d }),
        { role: y, onFocus: I, ...w } = (0, u.rm)(t),
        { isFocused: R, handleFocus: k, handleBlur: L } = (0, ev.A)(I);
    return (0, a.jsxs)("div", {
        ref: v,
        "data-item-id": t,
        onClick: E,
        onContextMenu: T,
        className: r()(eJ.kL, eX.kL, o, { [eJ.nT]: m }),
        children: [
            (0, a.jsx)(S.D, {
                onClick: E,
                focusProps: { ringTarget: v },
                onContextMenu: T,
                "aria-label": eK.intl.formatToPlainString(eK.t.pgYN6c, { title: p, count: h }),
                className: eJ.Kv,
                onFocus: k,
                onBlur: L,
                ...w,
            }),
            (0, a.jsxs)("div", {
                className: eJ.kb,
                children: [
                    (0, a.jsx)(j.F, {
                        children: (0, a.jsxs)("div", {
                            className: eX.fx,
                            children: [
                                (0, a.jsx)(eZ, {
                                    channel: d,
                                    firstMessage: f,
                                    content: g,
                                    hasMediaAttachment: null != _,
                                    originalAuthor: b,
                                }),
                                f?.blocked || null == _ ? null : (0, a.jsx)(e2, { channel: d, firstMedia: _ }),
                            ],
                        }),
                    }),
                    (0, a.jsx)(Q.M, {
                        enabled: !R,
                        children: (0, a.jsx)(e1, { channel: d, firstMessage: f, facepileRef: N }),
                    }),
                ],
            }),
        ],
    });
});
function eZ(e) {
    let { channel: t, firstMessage: n, content: l, hasMediaAttachment: i, originalAuthor: s } = e,
        { hasUnreads: o } = (0, eg.X5)(t);
    return (0, a.jsxs)("div", {
        className: r()(eX.rf, eJ.rf),
        children: [
            (0, a.jsx)(eb.Ay, { channel: t }),
            (0, a.jsx)("div", {
                className: (eJ.iU, eX.iU),
                children: (0, a.jsx)(e0, {
                    channel: t,
                    message: n,
                    content: l,
                    hasMediaAttachment: i,
                    hasUnreads: o,
                    originalAuthor: s,
                }),
            }),
        ],
    });
}
let e0 = i.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: i, hasUnreads: s, originalAuthor: o } = e,
        d = (0, x.bG)([e_.A], () => e_.A.isLoading(n.id)),
        c = (0, x.bG)([eF.A], () => eF.A.can(e$.xBc.MANAGE_MESSAGES, n)),
        u = eL.gs.useSetting(),
        m = (0, x.bG)([eU.A], () => eU.A.getGuildId()),
        { contentPlaceholder: h, renderedContent: g } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, ek.o)(t, l, !1, !1, r()(eJ.BK, eX.BK, eQ.tZ, eQ.__invalid_smallFontSize), {
                      leadingIconClass: eJ.aG,
                      trailingIconClass: eJ.sl,
                      iconSize: eq.eJ,
                  }),
        f =
            null != g
                ? (0, a.jsx)(N.E, { variant: "text-md/normal", children: g })
                : i
                  ? null
                  : (0, a.jsx)(N.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: s ? "text-default" : "text-muted",
                        className: r()(eJ.BK, eX.BK),
                        "aria-label": "",
                        children: null == t ? (d ? null : eK.intl.string(eK.t.mE3KJN)) : h,
                    });
    return (0, a.jsxs)(eM.Bs.Provider, {
        value: (0, eT.A)(u, c),
        children: [
            null != o
                ? (0, a.jsx)(Y.eu, {
                      size: Z._3.SIZE_40,
                      src: o.getAvatarURL(m, (0, Z.FT)(Z._3.SIZE_40)),
                      "aria-label": "",
                      className: eX.Nd,
                  })
                : null,
            (0, a.jsxs)("div", {
                className: eX.IF,
                children: [
                    (0, a.jsx)(eW, { channel: n, originalAuthor: o, message: t }),
                    (0, a.jsx)(Q.M, { className: eJ.JY, children: f }),
                ],
            }),
        ],
    });
});
function e1(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        { isNew: i } = (0, eg.X5)(t),
        s = (0, P.Ay)(t),
        r = (0, eu.m)(t.id),
        o = l?.reactions != null && l.reactions.length > 0;
    return (0, a.jsxs)("div", {
        className: eX.qr,
        children: [
            (0, a.jsxs)("div", {
                className: eX.JS,
                children: [
                    (0, a.jsx)(ee.i, { size: "custom", width: 14, height: 14 }),
                    (0, a.jsx)(N.E, { variant: "text-sm/medium", children: s }),
                    i
                        ? (0, a.jsx)(et.Lp, {
                              color: en.A.unsafe_rawColors.BRAND_260.css,
                              text: eK.intl.string(eK.t.y2b7CA),
                              className: eX.Ad,
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("div", {
                className: eX.PQ,
                children: [
                    o || null == l ? null : (0, a.jsx)(e6, { firstMessage: l, channel: t }),
                    (0, a.jsx)(e3, { channel: t, iconSize: 14 }),
                    (0, a.jsx)("span", { className: eJ.xE, children: "•" }),
                    r.length > 0
                        ? (0, a.jsxs)("div", {
                              className: eJ.IW,
                              children: [
                                  (0, a.jsx)(e8, { channel: t, userIds: r, facepileRef: n }),
                                  (0, a.jsx)("div", {
                                      className: eJ.r$,
                                      children: (0, a.jsx)(el.n, { themed: !0, dotRadius: 2 }),
                                  }),
                                  (0, a.jsx)(es.Ay, { channel: t, className: eJ.mD, renderDots: !1 }),
                              ],
                          })
                        : (0, a.jsx)(e9, { channel: t }),
                ],
            }),
        ],
    });
}
function e3(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: i, unreadCount: s } = (0, eg.k6)(t);
    return (0, a.jsxs)("div", {
        className: r()(eJ.Mv, { [eJ.hT]: l && null == s }),
        children: [
            (0, a.jsx)("span", {
                className: eJ.SZ,
                children: (0, a.jsx)(ea.o, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof i
                ? (0, a.jsx)(ec.A, { value: i, digitWidth: 9, className: eJ.gv })
                : (0, a.jsx)("div", { className: eJ.gv, children: i }),
            null == s
                ? null
                : (0, a.jsxs)(N.E, {
                      className: eJ.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", eK.intl.format(eK.t.z3PEth, { count: s }), ")"],
                  }),
        ],
    });
}
function e6(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, x.bG)([eP.A], () => eP.A.getChannel(n.parent_id)),
        i = (0, eg.Ck)(l),
        { disableReactionCreates: s, isLurking: r, isPendingMember: o } = (0, eI.A)(n);
    return null == i || s
        ? null
        : (0, a.jsx)(eR.qT, {
              className: eJ.vC,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: r,
              isPendingMember: o,
              emoji: i,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: eE.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function e9(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, eh.R)(t.parent_id),
        l = (0, eg.Mw)(t, n),
        i = t.threadMetadata?.createTimestamp,
        s = null == i ? null : eK.intl.formatToPlainString(eK.t["13euCd"], { timestamp: (0, eB.i$)(X()(i), "LLLL") });
    return (0, a.jsx)(J.m, {
        text: s,
        children: (0, a.jsx)(N.E, {
            className: eJ.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function e8(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        i = (0, eg.$I)(t, n);
    return (0, a.jsx)("div", {
        ref: l,
        children: (0, a.jsx)(er.Ay, {
            className: eJ.__invalid_facepile,
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
function e4(e) {
    let t,
        n,
        { firstMedia: l, shouldObscure: i, obscureReason: s, shouldShowAgeVerification: o } = e,
        d = (0, x.bG)([eG.A], () => eG.A.isFocused()),
        c = (0, eN.ge)(l.src),
        u = eL.kt.useSetting(),
        m = (0, eS.rx)(s),
        { src: h, width: g, height: f, alt: _ } = l;
    return (f > g ? (n = 72) : (t = 72), o)
        ? (0, a.jsx)("div", {
              "aria-label": m ?? _ ?? eK.intl.string(eK.t.hqwnc2),
              className: r()(eJ.iT, eJ.nh),
              style: { maxWidth: t, maxHeight: n, height: f, width: g },
          })
        : h.startsWith("data:")
          ? (0, a.jsx)(ei._, {
                src: h,
                maxHeight: t,
                maxWidth: n,
                width: g,
                height: f,
                alt: null != _ && i ? m : _,
                className: eJ.iT,
                imageClassName: r()({ [eJ.cd]: i, [eJ.LW]: !0 }),
            })
          : (0, ew.LL)({
                src: h,
                maxHeight: t,
                maxWidth: n,
                width: g,
                height: f,
                alt: null != _ && i ? m : _,
                autoPlay: u,
                animated: c && !i && d,
                srcIsAnimated: l.srcIsAnimated,
                containerClassName: eJ.iT,
                imageClassName: r()({ [eJ.cd]: i }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function e2(e) {
    let { channel: t, firstMedia: n } = e,
        [l, i] = (0, eS.eJ)({ media: n, channel: t }),
        s = (0, em.qZ)(i);
    return (0, a.jsx)(Q.M, {
        enabled: !0,
        children: (0, a.jsxs)("div", {
            className: r()(eJ.pV, eX.pV),
            onClick: function (e) {
                e.stopPropagation(),
                    s &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        eo.A.showAgeVerificationGetStartedModal({ entryPoint: ed.q1.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, a.jsx)(e4, { firstMedia: n, shouldObscure: l, obscureReason: i, shouldShowAgeVerification: s }),
                l && (0, a.jsx)(ep.A, { iconClassname: eJ.yo, obscureReason: i }),
            ],
        }),
    });
}
var e7 = n(378570),
    e5 = n(940382),
    te = n(970278),
    tt = n(424798),
    tn = n(406704),
    tl = n(747926),
    ta = n(31717),
    ti = n(834942),
    ts = n(309010),
    tr = n(522602),
    to = n(234320),
    td = n(947094),
    tc = n(919577),
    tu = n(207777),
    tm = n(365971),
    th = n(613999);
let tg = function (e) {
    let { guildId: t, channelId: n } = e,
        l = i.useRef(null),
        a = (0, tm.Xg)(),
        s = !eG.A.isFocused(a);
    return (
        i.useLayoutEffect(
            () => (
                null == l.current &&
                    ((l.current = new th.Ay({ guildId: t, channelId: n, isPaused: s, windowId: a })),
                    l.current.initialize()),
                () => {
                    l.current?.terminate(), (l.current = null);
                }
            ),
            [n, t, s, a],
        ),
        l.current
    );
};
var tx = n(853742);
n(321073);
var tf = n(419354),
    t_ = n(136722),
    tp = n(192308),
    tj = n(866323),
    tb = n(789645),
    tv = n(446576),
    tC = n(26430),
    tA = n(885574),
    tN = n(933832),
    tS = n(565787),
    tE = n(320448),
    tT = n(435183),
    ty = n(417454),
    tI = n(148719),
    tw = n(462887),
    tR = n(696986),
    tk = n(811893),
    tM = n(821609),
    tL = n(736653),
    tD = n(303136),
    tP = n(892110),
    tO = n(251766),
    tF = n(997509),
    tU = n(71393),
    tz = n(975571);
let tG = { mass: 1, tension: 250, friction: 18, clamp: !0 };
var tB = n(388803);
function tH(e) {
    let { handleHide: t } = e;
    return (0, a.jsx)(S.D, {
        onClick: t,
        className: tB.b,
        "aria-label": eK.intl.string(eK.t.WAI6xu),
        children: (0, a.jsx)(tb.P, { size: "md", color: "currentColor", className: tB.ut }),
    });
}
function tV(e) {
    let { username: t, title: n, videoSrc: l, messageCount: i, reaction: s, reactionCount: o, classname: d } = e;
    return (0, a.jsxs)("div", {
        className: r()(tB.IP, d),
        children: [
            (0, a.jsx)("div", {
                className: tB.Y6,
                children: (0, a.jsxs)("div", {
                    className: tB.wO,
                    children: [
                        (0, a.jsx)(N.E, { tag: "span", className: tB.cy, variant: "text-sm/semibold", children: t }),
                        (0, a.jsx)(N.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: tB.SD,
                            children: eK.intl.string(eK.t.mA0IvI),
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(p.D, {
                variant: "heading-md/extrabold",
                className: tB.DD,
                color: "text-strong",
                "aria-hidden": !0,
                children: n,
            }),
            (0, a.jsx)(tR.h, { size: 10 }),
            (0, a.jsx)(tD.A, { className: tB.Ki, src: l }),
            (0, a.jsx)(tR.h, { size: 10 }),
            (0, a.jsx)("div", {
                className: tB.qr,
                children: (0, a.jsxs)("div", {
                    className: tB.GD,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tB.Mv,
                            children: [
                                (0, a.jsx)("span", {
                                    className: tB.SZ,
                                    children: (0, a.jsx)(ea.o, { size: "xs", color: "currentColor" }),
                                }),
                                (0, a.jsx)(N.E, {
                                    variant: "text-xs/normal",
                                    color: "interactive-text-default",
                                    children: i,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: tB.vi,
                            children: [
                                (0, a.jsx)("span", { role: "img", "aria-label": "", children: s }),
                                (0, a.jsx)(N.E, {
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
let tW = (e) => {
    let { channel: t } = e,
        n = (0, tL.Ay)(),
        l = (0, tw.M)(n),
        s = (0, x.bG)([tU.A], () => tU.A.getGuild(t.guild_id)),
        o = (0, x.bG)([td.A], () => td.A.hasHidden(t.id)),
        d = (0, tO.e)({ guildId: t.guild_id, channelId: t.id }),
        { transitions: c, setVisible: u } = (function () {
            let [e, t] = i.useState(!0);
            return {
                transitions: (0, tj.p)(e, {
                    keys: (e) => (e ? "shown" : "hidden"),
                    config: tG,
                    from: { opacity: 0 },
                    enter: { opacity: 1 },
                    leave: { opacity: 0 },
                    unique: !0,
                }),
                setVisible: t,
            };
        })(),
        m = i.useCallback(() => {
            u(!1), tc.A.hideAdminOnboarding(t.id, !0);
        }, [t, u]);
    i.useEffect(() => {
        (0, tP.l)(t.id) || u(!o);
    }, [t, u, o]);
    let h = i.useMemo(
            () => [
                eK.intl.string(eK.t["8pEGAw"]),
                eK.intl.string(eK.t.jwfgDd),
                eK.intl.string(eK.t.mPKs27),
                eK.intl.string(eK.t.StRbvG),
            ],
            [],
        ),
        g = i.useMemo(
            () => [
                eK.intl.string(eK.t["m/b58M"]),
                eK.intl.string(eK.t.MuJSKw),
                eK.intl.string(eK.t["d/Wqvu"]),
                eK.intl.string(eK.t.GJklAw),
            ],
            [],
        ),
        f = () => {
            tF.A.open(t.guild_id, e$.BEX.ROLE_SUBSCRIPTIONS);
        },
        _ = s?.features.has(e$.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)
            ? eK.intl.string(eK.t.n0q7sI)
            : eK.intl.string(eK.t.QoYdie),
        j =
            (s?.features.has(e$.GuildFeatures.CREATOR_MONETIZABLE) ||
                s?.features.has(e$.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) ??
            !1,
        b = j ? eK.intl.string(eK.t["G/7ciZ"]) : eK.intl.string(eK.t.IFOiit),
        v = j ? eK.intl.string(eK.t.GjgQO1) : eK.intl.string(eK.t.E7AO6t);
    return (0, a.jsx)(a.Fragment, {
        children: c((e, t) =>
            t
                ? (0, a.jsxs)(tf.animated.div, {
                      style: e,
                      className: tB.kL,
                      children: [
                          (0, a.jsxs)("div", {
                              className: tB.U1,
                              children: [
                                  (0, a.jsxs)(N.E, {
                                      variant: "text-xs/normal",
                                      className: tB.l2,
                                      children: [
                                          (0, a.jsx)(tA.m, { size: "xxs", color: "currentColor", className: tB.Kk }),
                                          eK.intl.string(eK.t.znhX2R),
                                      ],
                                  }),
                                  (0, a.jsx)(tH, { handleHide: m }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: tB.hQ,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: r()(tB.CT, j && tB.en),
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: tB.F2,
                                              children: (0, a.jsxs)("div", {
                                                  className: tB.IZ,
                                                  children: [
                                                      (0, a.jsx)(tV, {
                                                          username: eK.intl.string(eK.t.AkORco),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                                          title: eK.intl.string(eK.t.yO6Fxu),
                                                          messageCount: "34",
                                                          reaction: "⚡️",
                                                          reactionCount: "724",
                                                          classname: tB.q6,
                                                      }),
                                                      (0, a.jsx)(tV, {
                                                          username: eK.intl.string(eK.t.DPg3YM),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                                          title: eK.intl.string(eK.t["R5XnC/"]),
                                                          messageCount: "34",
                                                          reactionCount: "84",
                                                          reaction: "\uD83D\uDC9E",
                                                          classname: tB.q6,
                                                      }),
                                                      (0, a.jsx)(tV, {
                                                          username: eK.intl.string(eK.t.KIelex),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                                          title: eK.intl.string(eK.t.pt88Vb),
                                                          messageCount: "7,103",
                                                          reaction: "⚡️",
                                                          reactionCount: "724",
                                                          classname: tB.Ob,
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          (0, a.jsxs)("article", {
                                              className: tB.n$,
                                              children: [
                                                  (0, a.jsx)(p.D, {
                                                      variant: "heading-lg/semibold",
                                                      color: "text-strong",
                                                      children: b,
                                                  }),
                                                  (0, a.jsx)(tR.h, { size: 8 }),
                                                  (0, a.jsx)(N.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: v,
                                                  }),
                                                  (0, a.jsx)(tR.h, { size: 16 }),
                                                  (0, a.jsxs)(S.D, {
                                                      onClick: () =>
                                                          open(tz.A.getCreatorSupportArticleURL(e$.MVz.MEDIA_CHANNEL)),
                                                      className: tB.zy,
                                                      children: [
                                                          (0, a.jsx)(N.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-link",
                                                              children: eK.intl.string(eK.t.OahzBd),
                                                          }),
                                                          (0, a.jsx)(tk.t, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: tB.QI,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, a.jsx)(tR.h, { size: 16 }),
                                                  (0, a.jsx)("div", {
                                                      className: tB.Qq,
                                                      children: h.map((e) =>
                                                          (0, a.jsx)(
                                                              N.E,
                                                              {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-default",
                                                                  className: tB.U0,
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
                                  j &&
                                      (0, a.jsxs)("div", {
                                          className: r()(tB.CT, tB.Gw),
                                          children: [
                                              (0, a.jsx)("div", {
                                                  className: tB.F2,
                                                  children: (0, a.jsxs)("div", {
                                                      className: tB.kQ,
                                                      children: [
                                                          (0, a.jsx)("img", {
                                                              src: l
                                                                  ? "/assets/b58ce8ba4d6516a2.png"
                                                                  : "/assets/9ed42f4f17fd8793.png",
                                                              alt: "",
                                                              className: tB.JM,
                                                          }),
                                                          (0, a.jsx)("img", {
                                                              src: l
                                                                  ? "/assets/d0f129a0c1627f7a.png"
                                                                  : "/assets/fddfcda2eca5c8d4.png",
                                                              alt: "",
                                                              className: tB.JM,
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              (0, a.jsxs)("article", {
                                                  className: tB.n$,
                                                  children: [
                                                      (0, a.jsxs)(N.E, {
                                                          variant: "text-xxs/bold",
                                                          className: tB.X4,
                                                          children: [
                                                              eK.intl.string(eK.t.NChGwy),
                                                              " ",
                                                              (0, a.jsx)("span", {
                                                                  role: "img",
                                                                  "aria-label": "",
                                                                  children: "\uD83D\uDD25",
                                                              }),
                                                          ],
                                                      }),
                                                      (0, a.jsx)(tR.h, { size: 10 }),
                                                      (0, a.jsx)(p.D, {
                                                          variant: "heading-lg/semibold",
                                                          color: "text-strong",
                                                          children: eK.intl.string(eK.t["N/TRrT"]),
                                                      }),
                                                      (0, a.jsx)(tR.h, { size: 8 }),
                                                      (0, a.jsx)(N.E, {
                                                          variant: "text-md/normal",
                                                          color: "text-muted",
                                                          children: eK.intl.string(eK.t.t3yWxG),
                                                      }),
                                                      (0, a.jsx)(tR.h, { size: 16 }),
                                                      (0, a.jsx)("div", {
                                                          className: tB.Qq,
                                                          children: g.map((e) =>
                                                              (0, a.jsx)(
                                                                  N.E,
                                                                  {
                                                                      variant: "text-sm/medium",
                                                                      color: "text-default",
                                                                      className: tB.U0,
                                                                      children: e,
                                                                  },
                                                                  e,
                                                              ),
                                                          ),
                                                      }),
                                                      (0, a.jsx)(tR.h, { size: 16 }),
                                                      0 === d.length &&
                                                          (0, a.jsx)(tM.$, { variant: "primary", onClick: f, text: _ }),
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
var t$ = n(331322),
    tq = n(111159),
    tK = n(517461),
    tX = n(350527),
    tJ = n(95035),
    tQ = n(221314),
    tY = n(50897),
    tZ = n(419949);
let t0 = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    t1 = (e) => {
        let { guild: t } = e,
            n = (0, x.bG)([eF.A], () => eF.A.can(e$.xBc.MANAGE_GUILD, t));
        return (0, a.jsxs)(t$.B, {
            direction: "horizontal",
            gap: 8,
            children: [
                (0, a.jsxs)(t$.B, {
                    direction: "vertical",
                    gap: 16,
                    children: [
                        (0, a.jsx)(t$.B, {
                            direction: "vertical",
                            gap: 4,
                            children: (0, a.jsx)(N.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: eK.intl.string(tQ.default.fP8DVx),
                            }),
                        }),
                        (0, a.jsxs)(t$.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, a.jsx)(N.E, {
                                    variant: "text-lg/semibold",
                                    color: "text-default",
                                    children: eK.intl.string(tQ.default["i7CH/I"]),
                                }),
                                (0, a.jsxs)("ol", {
                                    className: r()(tY.p_, tY.o8, tY.ap),
                                    children: [
                                        (0, a.jsx)("li", {
                                            children: (0, a.jsx)(N.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eK.intl.string(tQ.default["+Izoz7"]),
                                            }),
                                        }),
                                        (0, a.jsxs)("li", {
                                            children: [
                                                (0, a.jsx)(N.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: eK.intl.string(tQ.default["iu/RkU"]),
                                                }),
                                                (0, a.jsxs)("ul", {
                                                    className: r()(tY.p_, tY.t3, tY.zS),
                                                    children: [
                                                        (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(N.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eK.intl.string(tQ.default.QogKbP),
                                                            }),
                                                        }),
                                                        (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(N.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eK.intl.string(tQ.default.V4orHT),
                                                            }),
                                                        }),
                                                        (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(N.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eK.intl.string(tQ.default.VrrQXe),
                                                            }),
                                                        }),
                                                        (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(N.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eK.intl.string(tQ.default.pSuM5e),
                                                            }),
                                                        }),
                                                        (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(N.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eK.intl.string(tQ.default["/RLXlI"]),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)("li", {
                                            children: (0, a.jsx)(N.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eK.intl.string(tQ.default.j4AmYy),
                                            }),
                                        }),
                                        (0, a.jsx)("li", {
                                            children: (0, a.jsx)(N.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eK.intl.format(tQ.default["/g+PvX"], {
                                                    termsOfService: e$.X7G.TERMS,
                                                    communityGuidelines: e$.X7G.GUIDELINES,
                                                    helpArticle: tz.A.getArticleURL(e$.MVz.FLAG_TO_MOD),
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)(t$.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, a.jsx)(N.E, {
                                    variant: "text-lg/semibold",
                                    color: "text-default",
                                    children: eK.intl.string(tQ.default.qJWXsz),
                                }),
                                (0, a.jsxs)("ul", {
                                    className: r()(tY.p_, tY.zS, tY.ap),
                                    children: [
                                        (0, a.jsx)("li", {
                                            children: (0, a.jsx)(N.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eK.intl.format(tQ.default.FUBV1P, {
                                                    survey: "https://discord.sjc1.qualtrics.com/jfe/form/SV_3WvT7SqlWpCJ4HQ",
                                                }),
                                            }),
                                        }),
                                        (0, a.jsx)("li", {
                                            children: (0, a.jsx)(N.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eK.intl.format(tQ.default.W4MIAG, {
                                                    feedback: "https://forms.gle/RbDhW46PMmR39XUP7",
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)(t$.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, a.jsx)(N.E, {
                                    variant: "text-md/normal",
                                    color: "text-default",
                                    children: eK.intl.string(tQ.default.J3HKmx),
                                }),
                                n &&
                                    (0, a.jsx)(N.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: eK.intl.format(tQ.default["9x2vbP"], {
                                            optOutHook: (e) =>
                                                (0, a.jsx)(tJ.A, {
                                                    onClick: () =>
                                                        tF.A.open(
                                                            t.id,
                                                            e$.BEX.MODERATION,
                                                            null,
                                                            e$.nd0.SAFETY_OVERVIEW,
                                                        ),
                                                    children: e,
                                                }),
                                        }),
                                    }),
                                (0, a.jsx)(N.E, {
                                    variant: "text-md/normal",
                                    color: "text-default",
                                    children: eK.intl.string(tQ.default.KcCY25),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsx)("img", {
                    src: "/assets/c42cecffc003efa2.svg",
                    alt: eK.intl.string(eK.t.gAlJzV),
                    width: tX.T5,
                    height: tX.T5,
                }),
            ],
        });
    };
function t3(e) {
    let t,
        { guild: n } = e,
        [l, s] = (0, tK.V)("report-to-mod-education-dismissed", !1),
        [o, d] = (0, tK.V)("report-to-mod-education-expanded", !1),
        { transitions: c, setVisible: u } = (() => {
            let [e, t] = i.useState(!0);
            return {
                transitions: (0, tj.p)(e, {
                    keys: (e) => (e ? "shown" : "hidden"),
                    config: t0,
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
            (0, tj.p)(t, {
                from: { maxHeight: 0 },
                enter: { maxHeight: 850 },
                leave: { maxHeight: 0 },
                config: { duration: 200 },
            }));
    return (i.useEffect(() => {
        l && u(!1);
    }, [l, u]),
    l)
        ? null
        : c((e, t) =>
              t
                  ? (0, a.jsxs)(tf.animated.div, {
                        style: e,
                        onClick: () => d(!o),
                        className: r()(eJ.kL, tY.kL, tZ.mainCard),
                        children: [
                            (0, a.jsxs)("div", {
                                className: tY.mG,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: tY.cy,
                                        children: [
                                            (0, a.jsx)(tq.p, {
                                                size: "custom",
                                                width: 28,
                                                height: 28,
                                                color: "currentColor",
                                                className: tY.Mg,
                                            }),
                                            (0, a.jsx)(N.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                children: eK.intl.string(eK.t.uvGmCx),
                                            }),
                                            (0, a.jsx)(N.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                children: "—",
                                            }),
                                            (0, a.jsx)(p.D, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: eK.intl.string(tQ.default["95qQRB"]),
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(S.D, {
                                        onClick: () => s(!0),
                                        children: (0, a.jsx)(tb.P, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tY.ut,
                                        }),
                                    }),
                                ],
                            }),
                            m((e, t) =>
                                t
                                    ? (0, a.jsxs)(tf.animated.div, {
                                          style: e,
                                          children: [
                                              (0, a.jsx)("hr", { className: tY.me }),
                                              (0, a.jsx)(t1, { guild: n }),
                                          ],
                                      })
                                    : null,
                            ),
                        ],
                    })
                  : null,
          );
}
var t6 = n(191842),
    t9 = n(565645),
    t8 = n(21161),
    t4 = n(796774),
    t2 = n(209932),
    t7 = n(954571),
    t5 = n(102597),
    ne = n(904054),
    nt = n(584014),
    nn = n(851110);
n(980504);
var nl = n(59618);
function na(e) {
    let { className: t, sound: n, playSound: l, isPlaying: s, text: o } = e,
        d = n?.emojiId != null || n?.emojiName != null,
        c = eK.intl.formatToPlainString(eK.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name }),
        u = i.useCallback(() => {
            t7.default.track(e$.HAw.MODERATOR_QUEUE_ACTION, { guild_id: eU.A.getGuildId(), action: "airhorn" }),
                null != l && l();
        }, [l]);
    return (0, a.jsxs)(S.D, {
        "aria-label": c,
        tag: "span",
        onClick: u,
        className: r()(nl.Ls, nl.oR, { [nl.he]: !0 === s }, t),
        children: [
            d && (0, a.jsx)(t9.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: nl.JS }),
            (0, a.jsx)("span", { children: ` ${o} ` }),
        ],
    });
}
function ni(e) {
    let { containerRef: t, text: n } = e,
        l = i.useRef(null),
        s = (0, x.bG)([t2.A], () => t2.A.getSoundsForGuild("0")?.find((e) => "airhorn" === e.name)),
        { createMultipleConfettiAt: r } = i.useContext(t8.x),
        o = (0, x.bG)([D.A], () => D.A.useReducedMotion),
        { isPlaying: d, playSound: c } = (function (e) {
            let { isPlaying: t, playSound: n, preloadSound: l } = (0, nt.A)(null != e ? (0, t5.A)(e.soundId) : null);
            return (
                i.useEffect(() => {
                    null != e && l();
                }, [e, l]),
                {
                    isPlaying: t,
                    playSound: i.useCallback(() => !!n({ volume: (0, ne.A)(e?.volume ?? 1) }), [n, e?.volume]),
                }
            );
        })(s);
    (0, L.Ay)(() => {
        (0, t4.E7)();
    });
    let u = i.useCallback(async () => {
        if ((await c()) && (l.current?.addAnimation(), !o && t?.current != null)) {
            let e = t.current.getBoundingClientRect(),
                n = { x: e.left + e.width / 2, y: e.top + e.height / 3 },
                l = nn.uI[Math.floor(Math.random() * nn.uI.length)];
            r(
                n.x,
                n.y,
                { velocity: { type: "static-random", minValue: { x: -500, y: -500 }, maxValue: { x: 500, y: -100 } } },
                40,
                { sprite: l },
            );
        }
    }, [c, r, o, t]);
    return void 0 === s ? null : (0, a.jsx)(na, { sound: s, playSound: u, isPlaying: d, text: n });
}
function ns() {
    let e = i.useRef(null);
    return (0, a.jsxs)(t$.B, {
        className: nl.kL,
        direction: "vertical",
        align: "center",
        justify: "center",
        padding: { top: 24, bottom: 24 },
        ref: e,
        children: [
            (0, a.jsx)(t6._, { size: "custom", width: 48, height: 48 }),
            (0, a.jsxs)(t$.B, {
                direction: "vertical",
                align: "center",
                justify: "center",
                children: [
                    (0, a.jsx)(p.D, {
                        className: nl.wx,
                        variant: "heading-md/medium",
                        children: eK.intl.string(tQ.default.h6QNky),
                    }),
                    (0, a.jsx)(N.E, {
                        className: nl.Qq,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: eK.intl.format(tQ.default["8N4c58"], {
                            airhornHook: (t) => (0, a.jsx)(ni, { containerRef: e, text: t }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
var nr = n(34457),
    no = n(317525),
    nd = n(44234),
    nc = n(625494),
    nu = n(927813),
    nm = n(935208),
    nh = n(387255),
    ng = n(952351);
function nx(e) {
    let { channelName: t, guildId: l, tagFilter: s, channel: r } = e,
        o = (0, eg.S4)(r),
        d = (0, tn.AI)(r),
        c = r.isMediaChannel(),
        u = i.useCallback(() => {
            (0, tx.zd)(),
                (0, tp.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("90052"), n.e("43051")]).then(n.bind(n, 653682));
                    return (t) => (0, a.jsx)(e, { ...t, guildId: l });
                });
        }, [l]),
        m = s.size > 0,
        h = d || o,
        g = !m && o && !c,
        x = i.useCallback(
            () => (g ? u() : d ? void nc._.dispatch(e$.jej.FOCUS_COMPOSER_TITLE) : (0, e$.FXj)()),
            [u, g, d],
        );
    return (0, a.jsxs)("div", {
        className: ng.k,
        children: [
            (0, a.jsx)(p.D, {
                className: ng.w,
                variant: "heading-md/semibold",
                children: m
                    ? eK.intl.formatToPlainString(eK.t.lvPci0, { numTags: s.size })
                    : eK.intl.string(eK.t.PwTMG0),
            }),
            (0, a.jsx)(N.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: m
                    ? eK.intl.formatToPlainString(eK.t.AAeye1, { numTags: s.size })
                    : eK.intl.formatToPlainString(eK.t.YtsXFD, { channelName: t }),
            }),
            h &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(tR.h, { size: 16 }),
                        (0, a.jsx)(tM.$, {
                            text: g ? eK.intl.string(eK.t.DgatTQ) : eK.intl.string(eK.t.wOKE8I),
                            variant: "secondary",
                            onClick: x,
                        }),
                    ],
                }),
        ],
    });
}
var nf = n(253913),
    n_ = n(658688);
let np = { width: 28, height: 28 },
    nj = { width: 20, height: 20, borderRadius: 10 },
    nb = (e) => {
        (0, tx.bh)({ onboardingCTA: e });
    };
class nv {
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
let nC = (e) => {
        let { guild: t, roles: n } = e;
        return (0, a.jsx)("div", {
            className: n_.Ei,
            "aria-label": eK.intl.formatToPlainString(eK.t.PCs0oo, { numRoles: n.length }),
            children: n.map((e) =>
                (0, a.jsx)(ty.b_, { role: e, canRemove: !1, onRemove: e$.FXj, guildId: t.id, className: n_.Yq }, e.id),
            ),
        });
    },
    nA = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    nN = (e) => {
        let { handleHide: t } = e;
        return (0, a.jsx)(S.D, {
            onClick: t,
            className: n_.b,
            "aria-label": eK.intl.string(eK.t.WAI6xu),
            children: (0, a.jsx)(tb.P, { size: "md", color: "currentColor", className: n_.ut }),
        });
    },
    nS = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, a.jsx)(S.D, {
            onClick: n,
            className: n_.b,
            "aria-label": t ? eK.intl.string(eK.t.iTcuma) : eK.intl.string(eK.t.dcl9MQ),
            children: t
                ? (0, a.jsx)(tv.g, { size: "xs", color: "currentColor", className: n_.ut })
                : (0, a.jsx)(tC._, { size: "xs", color: "currentColor", className: n_.ut }),
        });
    },
    nE = (e) => {
        let t,
            { hasAnyThread: l, hasActiveThreads: s, channel: o } = e,
            d = (0, P.Ay)(o),
            { onboardingExpanded: u } = (0, ej.kU)((e) => {
                let { onboardingExpanded: t } = e;
                return { onboardingExpanded: t };
            }, c.x),
            { tagFilter: m } = (0, eh.R)(o.id),
            h = (0, x.bG)([tU.A], () => tU.A.getGuild(o.getGuildId())),
            g = (0, eg.S4)(o),
            { transitions: f, setVisible: _ } = (() => {
                let [e, t] = i.useState(!0);
                return {
                    transitions: (0, tj.p)(e, {
                        keys: (e) => (e ? "shown" : "hidden"),
                        config: nA,
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        unique: !0,
                    }),
                    setVisible: t,
                };
            })(),
            b = (0, tj.p)(u, {
                from: { maxHeight: 0 },
                enter: { maxHeight: 500 },
                leave: { maxHeight: 0 },
                config: { duration: 200 },
            }),
            v = i.useCallback((e) => {
                e.clickHandler?.();
            }, []),
            C = ((t = o.id), i.useCallback(() => (_(!1), tc.A.hideAdminOnboarding(t, !0)), [t, _])),
            {
                onboardingSteps: A,
                isDismissed: E,
                isHidden: y,
                isAllDone: I,
            } = ((e) => {
                var t;
                let l,
                    s,
                    r,
                    o,
                    { guild: d, channel: c, hasAnyThread: u, handleHide: m } = e,
                    [h, g] = i.useState(!1),
                    f = (0, tP.l)(c.id),
                    _ = (0, x.bG)([td.A], () => td.A.hasHidden(c.id)),
                    p =
                        ((l = d?.id),
                        (s = (0, x.bG)([no.A], () => (null != l ? no.A.getSortedRoles(l) : void 0))),
                        i.useMemo(() => {
                            let e,
                                t,
                                l,
                                i,
                                r,
                                o,
                                m,
                                h,
                                x = new nv(),
                                f = c?.isMediaChannel() === !0;
                            return (
                                null == d ||
                                    null == c ||
                                    f ||
                                    null == s ||
                                    x.addStep(
                                        ((e = (0, tI.A)(c)
                                            ? t_.kg(e$.xBc.VIEW_CHANNEL, e$.xBc.SEND_MESSAGES)
                                            : e$.xBc.SEND_MESSAGES),
                                        (l =
                                            (t =
                                                null != d
                                                    ? (0, nh.N)(s, c, e).filter(
                                                          (e) =>
                                                              c.permissionOverwrites.hasOwnProperty(e.id) ||
                                                              (0, nr.Oy)(e),
                                                      )
                                                    : []).length > 0),
                                        (i = t.some((e) => (0, nr.Oy)(e))),
                                        {
                                            name: eK.intl.string(eK.t["/Ax2gs"]),
                                            description: eK.intl.string(eK.t.gAIOfg),
                                            isDone: l && i,
                                            shouldWarn: l && !i,
                                            children: l ? (0, a.jsx)(nC, { guild: d, roles: t }) : null,
                                            clickHandler: () => {
                                                nb(nf._G.PERMISSIONS),
                                                    (0, tp.openModalLazy)(
                                                        async () => {
                                                            let { default: l } = await n
                                                                .e("17110")
                                                                .then(n.bind(n, 698325));
                                                            return (
                                                                g(!0),
                                                                (n) =>
                                                                    (0, a.jsx)(l, {
                                                                        ...n,
                                                                        channel: c,
                                                                        guild: d,
                                                                        permission: e,
                                                                        currentSelectedRoles: t,
                                                                    })
                                                            );
                                                        },
                                                        {
                                                            modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                                                            onCloseRequest: e$.FXj,
                                                            onCloseCallback: () => g(!1),
                                                        },
                                                    );
                                            },
                                        }),
                                    ),
                                f ||
                                    x.addStep(
                                        ((r = null != c.topic && c.topic.length > 0),
                                        {
                                            name: eK.intl.string(eK.t.UgJu1e),
                                            description: eK.intl.string(eK.t["3C6/G1"]),
                                            clickHandler: () => {
                                                nb(nf._G.GUIDELINES), tT.Ay.open(c.id, void 0, e$.b7d.TOPIC);
                                            },
                                            isDone: r,
                                        }),
                                    ),
                                x.addStep(
                                    ((o = null != c.availableTags && c.availableTags.length > 0),
                                    {
                                        name: eK.intl.string(eK.t.xiBFCi),
                                        description: eK.intl.string(eK.t.wCv4Oz),
                                        clickHandler: () => {
                                            nb(nf._G.TAGS),
                                                tT.Ay.open(c.id),
                                                (0, tp.openModalLazy)(async () => {
                                                    let { default: e } = await n.e("47326").then(n.bind(n, 950989));
                                                    return (t) =>
                                                        (0, a.jsx)(e, { ...t, channelId: c.id, guildId: c.guild_id });
                                                });
                                        },
                                        isDone: o,
                                    }),
                                ),
                                x.addStep(
                                    ((m = null != c.defaultReactionEmoji),
                                    {
                                        name: eK.intl.string(eK.t.QlyC9s),
                                        description: eK.intl.string(eK.t["+50LJg"]),
                                        clickHandler: () => {
                                            nb(nf._G.DEFAULT_REACTION),
                                                (0, tp.openModalLazy)(async () => {
                                                    let { default: e } = await n.e("85157").then(n.bind(n, 939940));
                                                    return (t) => (0, a.jsx)(e, { ...t, channel: c });
                                                });
                                        },
                                        isDone: m,
                                    }),
                                ),
                                x.addStep(
                                    ((h = d?.id),
                                    {
                                        name: eK.intl.string(eK.t["6A0O64"]),
                                        description: f
                                            ? eK.intl.string(eK.t["8hI5vr"])
                                            : eK.intl.format(eK.t.ysxcAw, {
                                                  onClick: (e) => {
                                                      null != h &&
                                                          (e.preventDefault(),
                                                          e.stopPropagation(),
                                                          (0, tx.zd)(),
                                                          (0, tp.openModalLazy)(async () => {
                                                              let { default: e } = await Promise.all([
                                                                  n.e("90052"),
                                                                  n.e("43051"),
                                                              ]).then(n.bind(n, 653682));
                                                              return (t) => (0, a.jsx)(e, { ...t, guildId: h });
                                                          }));
                                                  },
                                              }),
                                        clickHandler: () => {
                                            nb(nf._G.CREATE_POST), nc._.dispatch(e$.jej.FOCUS_COMPOSER_TITLE);
                                        },
                                        isDone: u,
                                    }),
                                ),
                                x
                            );
                        }, [c, d, s, u, g])),
                    j = p.isAllDone(),
                    b =
                        f ||
                        _ ||
                        ((t = c.id),
                        (r = nm.default.extractTimestamp(t)),
                        !X()().isBefore(X()(r).add(X().duration(15, "days"))));
                return (
                    (o = i.useRef(0)),
                    i.useEffect(
                        () => (
                            h || !j || b
                                ? clearTimeout(o.current)
                                : (o.current = setTimeout(() => {
                                      m();
                                  }, 60 * nu.A.Millis.SECOND)),
                            () => clearTimeout(o.current)
                        ),
                        [j, b, m, h],
                    ),
                    { onboardingSteps: p, isHidden: _, isDismissed: f, isAllDone: j }
                );
            })({ guild: h, channel: o, hasAnyThread: l, handleHide: C }),
            w = !y && !E,
            R = (0, ej.ST)(),
            k = o.isMediaChannel(),
            M = (e) => R.getState().setOnboardingExpanded(e);
        return ((0, L.Ay)(() => {
            I && w && C();
        }),
        ((e) => {
            let { isAllDone: t, isVisible: n, canManageChannel: l, guildId: a, channel: s } = e,
                r = (0, x.bG)([no.A], () => (null != a ? no.A.partitionVersion(a) : void 0)),
                o = i.useCallback(() => {
                    nc._.dispatch(e$.jej.REMEASURE_TARGET);
                }, []);
            i.useEffect(() => {
                o();
            }, [o, t, n, l, r, s.id, s.permissionOverwrites]);
        })({ isAllDone: I, isVisible: w, canManageChannel: g, guildId: h?.id, channel: o }),
        i.useEffect(() => {
            E || _(!y);
        }, [E, _, y]),
        (0, L.Ay)(() => {
            (l && w) || M(!0);
        }),
        null == h)
            ? null
            : (0, V.Fo)(o)
              ? s || 0 !== m.size
                  ? m.size > 0
                      ? null
                      : (0, a.jsx)(t3, { guild: h })
                  : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(t3, { guild: h }), (0, a.jsx)(ns, {})] })
              : w && g
                ? k
                    ? l
                        ? null
                        : (0, a.jsx)(tW, { channel: o })
                    : (0, a.jsx)(a.Fragment, {
                          children: f((e, t) =>
                              t
                                  ? (0, a.jsx)(tf.animated.div, {
                                        style: e,
                                        className: n_.kL,
                                        children: (0, a.jsxs)("div", {
                                            className: n_.iE,
                                            children: [
                                                (0, a.jsx)("div", {
                                                    className: n_.U1,
                                                    children: (0, a.jsxs)(j.F, {
                                                        component: (0, a.jsx)(p.D, {
                                                            variant: "heading-md/semibold",
                                                            children: eK.intl.string(eK.t.LhlgY9),
                                                        }),
                                                        children: [
                                                            (0, a.jsx)(p.D, {
                                                                variant: "heading-md/medium",
                                                                className: n_.wx,
                                                                children: eK.intl.format(eK.t["9L+8bz"], {
                                                                    numCompleted: A.completedSteps.toString(),
                                                                    numSteps: A.steps.length.toString(),
                                                                }),
                                                            }),
                                                            (0, a.jsxs)(N.E, {
                                                                variant: "text-xs/normal",
                                                                className: n_.l2,
                                                                children: [
                                                                    (0, a.jsx)(tA.m, {
                                                                        size: "xxs",
                                                                        color: "currentColor",
                                                                        className: n_.Kk,
                                                                    }),
                                                                    eK.intl.string(eK.t.znhX2R),
                                                                ],
                                                            }),
                                                            (0, a.jsx)(nS, { expanded: u, onClick: () => M(!u) }),
                                                            (0, a.jsx)(nN, { handleHide: C }),
                                                        ],
                                                    }),
                                                }),
                                                b((e, t) =>
                                                    t
                                                        ? (0, a.jsx)(tf.animated.div, {
                                                              style: e,
                                                              className: n_.qI,
                                                              children: (0, a.jsx)("ol", {
                                                                  className: n_.D4,
                                                                  children: A.getSteps().map((e) =>
                                                                      (0, a.jsxs)(
                                                                          S.D,
                                                                          {
                                                                              tag: "li",
                                                                              "aria-label": e.name,
                                                                              onClick: () => v(e),
                                                                              className: r()(n_._h, {
                                                                                  [n_.so]: e.isDone,
                                                                              }),
                                                                              children: [
                                                                                  e.shouldWarn
                                                                                      ? (0, a.jsx)(T.E, {
                                                                                            size: "custom",
                                                                                            width: 20,
                                                                                            height: 20,
                                                                                            color: en.A.colors
                                                                                                .ICON_FEEDBACK_CRITICAL,
                                                                                            className: n_.FY,
                                                                                        })
                                                                                      : e.isDone
                                                                                        ? (0, a.jsx)(et.fk, {
                                                                                              color: en.A.colors
                                                                                                  .STATUS_POSITIVE_BACKGROUND
                                                                                                  .css,
                                                                                              icon: tN.A,
                                                                                              style: nj,
                                                                                              className: n_.FY,
                                                                                          })
                                                                                        : (0, a.jsx)(et.fk, {
                                                                                              disableColor: !0,
                                                                                              icon: (0, tS.k)(nd.A),
                                                                                              style: np,
                                                                                              className: r()(
                                                                                                  n_.FY,
                                                                                                  n_.so,
                                                                                              ),
                                                                                          }),
                                                                                  (0, a.jsxs)("div", {
                                                                                      className: n_.PM,
                                                                                      children: [
                                                                                          (0, a.jsx)(N.E, {
                                                                                              variant: "text-md/medium",
                                                                                              color: e.isDone
                                                                                                  ? "text-default"
                                                                                                  : "text-strong",
                                                                                              className: n_.u,
                                                                                              children: e.name,
                                                                                          }),
                                                                                          (0, a.jsx)(N.E, {
                                                                                              variant: "text-sm/normal",
                                                                                              color: "text-default",
                                                                                              className: n_.XK,
                                                                                              children: e.description,
                                                                                          }),
                                                                                          e.children,
                                                                                      ],
                                                                                  }),
                                                                                  (0, a.jsx)(tE._, {
                                                                                      size: "custom",
                                                                                      color: "currentColor",
                                                                                      width: 12,
                                                                                      className: n_.FY,
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
                  : (0, a.jsx)(nx, { channelName: d ?? "", guildId: o.guild_id, tagFilter: m, channel: o });
    };
var nT = n(717421),
    ny = n(622629),
    nI = n(22231),
    nw = n(46054),
    nR = n(101136);
let nk = i.memo(function (e) {
    let { channel: t, onChange: l } = e,
        s = (0, ej.ST)(),
        { guidelinesOpen: o } = (0, ej.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, c.x),
        d = (0, eg.S4)(t),
        [u, m] = i.useState(!1),
        h = i.useCallback(
            (e) => {
                if (null == e) return;
                let t = e.clientHeight >= 220;
                t !== u && m(t);
            },
            [u],
        );
    i.useLayoutEffect(() => {
        setTimeout(l, 350);
    }, [o, l]);
    let [g, x] = i.useState(!o),
        f = (0, nT.z)({ opacity: +!!o, maxHeight: 500 * !!o, config: { duration: 300 }, onRest: () => x(!o) });
    return null != t.topic && t.topic.length > 0
        ? (0, a.jsx)(tf.animated.div, {
              style: f,
              className: g ? nR.kK : void 0,
              children: (0, a.jsxs)("div", {
                  className: nR.kL,
                  children: [
                      (0, a.jsxs)("div", {
                          className: nR.N1,
                          children: [
                              (0, a.jsxs)(p.D, {
                                  variant: "heading-lg/semibold",
                                  className: nR.$4,
                                  children: [
                                      (0, a.jsx)(ny.B, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                          height: 20,
                                      }),
                                      eK.intl.string(eK.t["4d4T4l"]),
                                      d &&
                                          (0, a.jsx)(S.D, {
                                              onClick: () => {
                                                  tT.Ay.open(t.id, void 0, e$.b7d.TOPIC);
                                              },
                                              tag: "span",
                                              className: nR.vk,
                                              children: (0, a.jsx)(nI.R, { size: "xs", color: "currentColor" }),
                                          }),
                                  ],
                              }),
                              (0, a.jsx)(S.D, {
                                  "aria-label": eK.intl.string(eK.t.cpT0Cq),
                                  className: nR.vk,
                                  onClick: () => {
                                      s.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, a.jsx)(tb.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      }),
                      (0, a.jsxs)("div", {
                          className: nR.iQ,
                          children: [
                              (0, a.jsx)(N.E, {
                                  selectable: !0,
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  style: { maxHeight: 220 },
                                  className: r()(nR.I4, eQ.PT),
                                  children: (0, a.jsx)("div", {
                                      ref: h,
                                      children: nw.A.parseForumPostGuidelines(t.topic, !0, {
                                          channelId: t.id,
                                          allowHeading: !0,
                                          allowList: !0,
                                      }),
                                  }),
                              }),
                              u &&
                                  (0, a.jsxs)("div", {
                                      className: nR.jP,
                                      children: [
                                          (0, a.jsx)("div", { className: nR.D7 }),
                                          (0, a.jsx)("div", {
                                              className: nR.kx,
                                              children: (0, a.jsx)(S.D, {
                                                  className: nR.DD,
                                                  onClick: () => {
                                                      (0, tp.openModalLazy)(async () => {
                                                          let { default: e } = await n
                                                              .e("45457")
                                                              .then(n.bind(n, 494664));
                                                          return (n) => (0, a.jsx)(e, { ...n, channel: t });
                                                      });
                                                  },
                                                  children: (0, a.jsxs)(N.E, {
                                                      variant: "text-sm/semibold",
                                                      color: "text-brand",
                                                      className: nR.ur,
                                                      children: [
                                                          eK.intl.string(eK.t.Vu7odK),
                                                          (0, a.jsx)(tC._, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: nR.yS,
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
var nM = n(49999),
    nL = n(478699);
function nD(e) {
    let { onDismiss: t } = e;
    return (0, a.jsxs)(S.D, {
        onClick: () => {
            open(nf.X_), (0, tx.Md)({ readGuideCta: !0 });
        },
        className: r()(eJ.kL, nL.kL, tZ.mainCard),
        children: [
            (0, a.jsxs)("div", {
                className: nL.mG,
                children: [
                    (0, a.jsxs)("div", {
                        className: nL.cy,
                        children: [
                            (0, a.jsx)(tq.p, {
                                size: "custom",
                                width: 28,
                                height: 28,
                                color: "currentColor",
                                className: nL.Mg,
                            }),
                            (0, a.jsx)(N.E, {
                                variant: "text-sm/semibold",
                                color: "text-strong",
                                children: eK.intl.string(eK.t.uvGmCx),
                            }),
                            (0, a.jsxs)("div", {
                                className: nL.lm,
                                children: [
                                    (0, a.jsx)(tA.m, { size: "md", color: "currentColor", className: nL.G }),
                                    (0, a.jsx)(N.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: eK.intl.string(eK.t.t2GkVR),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(S.D, {
                        onClick: (e) => {
                            e.stopPropagation(), t(nM.i.DISMISS), (0, tx.Md)({ readGuideCta: !1 });
                        },
                        children: (0, a.jsx)(tb.P, { size: "xs", color: "currentColor", className: nL.ut }),
                    }),
                ],
            }),
            (0, a.jsx)("hr", { className: nL.me }),
            (0, a.jsxs)("div", {
                className: nL.mG,
                children: [
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(p.D, {
                                className: r()(eJ.__invalid_channelName, nL.DD),
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: eK.intl.string(eK.t.JtSpD0),
                            }),
                            (0, a.jsx)(N.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: eK.intl.string(eK.t.Ajhp03),
                            }),
                        ],
                    }),
                    (0, a.jsx)("img", {
                        src: "/assets/e8f208ce40f2814c.svg",
                        alt: eK.intl.string(eK.t.gAlJzV),
                        width: tX.T5,
                        height: tX.T5,
                    }),
                ],
            }),
        ],
    });
}
n(667532);
var nP = n(621466),
    nO = n(189812),
    nF = n(884496),
    nU = n(511274),
    nz = n(408278),
    nG = n(952270),
    nB = n(39623),
    nH = n(278416),
    nV = n(465532),
    nW = n(608299),
    n$ = n(355622),
    nq = n(375499),
    nK = n(151271),
    nX = n(698279),
    nJ = n(266599);
let nQ = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: l, className: s, onClick: o, channel: d } = e,
            [u, m, h] = (0, nK.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], c.x),
            g = i.useCallback(() => {
                (0, nK.ed)(l, d.id), o?.();
            }, [l, o, d.id]);
        return n
            ? null
            : (0, a.jsx)("div", {
                  className: r()(nX.VQ, nJ.UD),
                  ref: t,
                  children: (0, a.jsx)(nq.A, {
                      className: r()(nJ.Z8, s),
                      onClick: g,
                      active: (u === nX.kx.GIF || u === nX.kx.EMOJI || u === nX.kx.STICKER) && m === l && h === d.id,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                  }),
              });
    }),
);
var nY = n(201349),
    nZ = n(625928),
    n0 = n(960850),
    n1 = n(702841),
    n3 = n(364522),
    n6 = n(215497),
    n9 = n(914905),
    n8 = n(750943),
    n4 = n(844222),
    n2 = n(780777),
    n7 = n(518960),
    n5 = n(811998);
let le = { scale: 0.95, opacity: 0 },
    lt = { scale: 1, opacity: 1 },
    ln = { scale: 1, opacity: 1 },
    ll = { tension: 2400, friction: 52 },
    la = `.${n5.EJ}`,
    li = { behavior: "smooth", block: "nearest", inline: "nearest" };
function ls(e) {
    let { channelId: t, onClick: n, onClose: l, onMouseEnter: s, listItemProps: r } = e,
        o = i.useRef(null),
        d = (0, x.bG)([eP.A], () => eP.A.getChannel(t), [t]);
    return (
        q()(null != d, "Forum Channel is null"),
        (0, a.jsxs)(S.D, {
            ...r,
            "aria-label": eK.intl.string(eK.t.nzoF5p),
            className: n5.EJ,
            onMouseEnter: s,
            onClick: (e) => {
                0 === e.detail && o.current?.activateUploadDialogue(), (0, tx.ri)({ isMobile: !1 }), n?.();
            },
            children: [
                (0, a.jsx)(n2.A, {
                    className: n5.Fg,
                    ref: o,
                    onChange: (e) => {
                        l?.(),
                            (0, n7.R)(e.currentTarget.files, d, ta.C.FirstThreadMessage, {
                                requireConfirm: !0,
                                origin: "file_picker",
                            }),
                            (e.currentTarget.value = null);
                    },
                    multiple: d.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
                (0, a.jsx)(n8.X, { size: "custom", color: "currentColor", width: 28, height: 28, className: n5.T3 }),
            ],
        })
    );
}
function lr(e) {
    let { channelId: t, closePopout: n } = e,
        [l, s] = i.useState(!1),
        { reducedMotion: r } = i.useContext(n4.C),
        o = (0, nT.z)({ from: r.enabled ? lt : le, to: ln, config: ll }, "animate-always"),
        d = (0, x.bG)([D.A], () => D.A.keyboardModeEnabled),
        c = (0, x.bG)([tr.A], () => tr.A.getUploads(t, n$.oU.CREATE_FORUM_POST.drafts.type)),
        g = (0, m.Ay)({
            id: "forum-composer-attachments-popout",
            isEnabled: d,
            orientation: h.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, a.jsx)(tf.animated.div, {
        className: n5.jC,
        onMouseLeave: () => {
            l || d || n();
        },
        onFocus: (e) => {
            e.target.scrollIntoView(li);
        },
        style: o,
        children: (0, a.jsx)(n3.Ip, {
            orientation: "horizontal",
            className: n5.SW,
            paddingFix: !1,
            fade: !0,
            children: (0, a.jsx)(u.hD, {
                navigator: g,
                children: (0, a.jsx)(u.PR, {
                    children: (e) => {
                        let { ref: n, ...l } = e;
                        return (0, a.jsxs)("div", {
                            className: n5.p8,
                            ref: n,
                            ...l,
                            children: [
                                c.map((e) =>
                                    (0, a.jsx)(
                                        n9.A,
                                        {
                                            channelId: t,
                                            draftType: n$.oU.CREATE_FORUM_POST.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: d,
                                            hideFileName: !0,
                                            size: n6.L.SMALL,
                                        },
                                        e.id,
                                    ),
                                ),
                                (0, a.jsx)(lo, { channelId: t, setFileInputOpen: s }),
                            ],
                        });
                    },
                }),
            }),
        }),
    });
}
function lo(e) {
    let { channelId: t, setFileInputOpen: n } = e,
        l = { ...(0, u.rm)("upload-button"), tabIndex: 0 };
    return (0, a.jsx)(ls, {
        channelId: t,
        onClick: () => {
            n(!0);
        },
        onClose: () => {
            n(!1),
                requestAnimationFrame(() => {
                    (0, nP.vq)(document.activeElement, HTMLElement) && document.activeElement.scrollIntoView(li);
                });
        },
        listItemProps: l,
    });
}
function ld(e) {
    let { channelId: t } = e,
        [n, l] = i.useState(!1),
        s = i.useRef(null),
        r = (0, x.bG)([tr.A], () => tr.A.getUploads(t, n$.oU.CREATE_FORUM_POST.drafts.type)),
        o = r.length,
        d = o > 0;
    i.useEffect(() => {
        n && !d && l(!1);
    }, [n, d]),
        i.useEffect(() => {
            if (document.activeElement !== document.body && null != document.activeElement) return;
            l(o > 0);
            let e = requestAnimationFrame(() => {
                let e = s.current?.querySelector(la);
                e?.focus();
            });
            return () => cancelAnimationFrame(e);
        }, [o]);
    let c = () => {
            d && l(!0);
        },
        u = () => {
            l(!1);
        };
    return (0, a.jsxs)("div", {
        className: n5.kL,
        ref: s,
        onBlur: (e) => {
            null == e.relatedTarget ||
                s.current?.contains(e.relatedTarget) ||
                (e.relatedTarget?.closest('[role="dialog"]') == null && u());
        },
        children: [
            d
                ? !n &&
                  (0, a.jsxs)(S.D, {
                      "aria-label": eK.intl.string(eK.t.nzoF5p),
                      className: n5.fY,
                      tabIndex: 0,
                      onClick: c,
                      onFocus: () => {
                          c(),
                              d &&
                                  requestAnimationFrame(() => {
                                      let e = s.current?.querySelector(la);
                                      e?.focus();
                                  });
                      },
                      onMouseEnter: c,
                      children: [
                          (0, a.jsx)(n9.J, { upload: r[0], size: n6.L.SMALL }),
                          (0, a.jsx)("div", { className: n5.qS, children: o }),
                      ],
                  })
                : (0, a.jsx)(ls, { onMouseEnter: c, channelId: t }),
            n && (0, a.jsx)(lr, { channelId: t, closePopout: u }),
        ],
    });
}
var lc = n(343151);
function lu(e) {
    let { parentChannel: t } = e,
        n = (0, n1.yK)([tr.A], () => {
            let e = tr.A.getUploads(t.id, n$.oU.CREATE_FORUM_POST.drafts.type);
            return e?.filter((e) => !0 !== e.isThumbnail);
        });
    return (0, a.jsxs)("div", {
        className: lc.kL,
        children: [
            (0, a.jsx)(N.E, {
                variant: "text-md/semibold",
                color: "text-muted",
                children: eK.intl.string(eK.t.omKGKu),
            }),
            (0, a.jsx)(N.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eK.intl.string(eK.t["zUjLl+"]),
            }),
            (0, a.jsx)("div", {
                children: (0, a.jsx)(n3.Ip, {
                    className: lc.mw,
                    orientation: "horizontal",
                    paddingFix: !1,
                    fade: !0,
                    children: (0, a.jsxs)("div", {
                        className: lc.p8,
                        children: [
                            n.map((e) =>
                                (0, a.jsx)(
                                    n9.A,
                                    {
                                        channelId: t.id,
                                        draftType: n$.oU.CREATE_FORUM_POST.drafts.type,
                                        upload: e,
                                        keyboardModeEnabled: !0,
                                        hideFileName: !0,
                                        size: n6.L.SMALL,
                                    },
                                    e.id,
                                ),
                            ),
                            (0, a.jsx)(ls, { channelId: t.id }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
var lm = n(241326),
    lh = n(851023),
    lg = n(915089),
    lx = n(607470),
    lf = n(703007),
    l_ = n(635377),
    lp = n.n(l_);
let lj = "absolute",
    lb = new (lp())({ max: 100 });
function lv(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: l } = e;
    return i.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: l } = e,
                    a = `${t}-${n}-${l}`,
                    i = lb.get(a);
                if (null != i) return i;
                {
                    let e = ((e, t, n, l) => {
                        if (0 === n) return [];
                        if (1 === n) return [{ width: e, height: t, top: 0, left: 0, position: lj }];
                        if (2 === n) {
                            let n = Math.ceil((e - l) / 2);
                            return [
                                { top: 0, left: 0, position: lj, width: n, height: t },
                                { top: 0, left: n + l, position: lj, width: n, height: t },
                            ];
                        }
                        if (3 === n) {
                            let n = Math.ceil((e - l) / 2),
                                a = Math.ceil((t - l) / 2);
                            return [
                                { top: 0, left: 0, position: lj, width: n, height: t },
                                { top: 0, left: n + l, position: lj, width: n, height: a },
                                { top: a + l, left: n + l, position: lj, width: n, height: a },
                            ];
                        }
                        {
                            let n = Math.ceil((e - l) / 2),
                                a = Math.ceil((t - l) / 2);
                            return [
                                { top: 0, left: 0, position: lj, width: n, height: a },
                                { top: a + l, left: 0, position: lj, width: n, height: a },
                                { top: 0, left: n + l, position: lj, width: n, height: a },
                                { top: a + l, left: n + l, position: lj, width: n, height: a },
                            ];
                        }
                    })(n, l, t, 4);
                    return lb.set(a, e), e;
                }
            })({ numAttachments: t, containerWidth: n, containerHeight: l }),
        [t, n, l],
    );
}
function lC(e) {
    return e.map((t, n) => ({
        minWidth: 2 * e[n].width,
        minHeight: 2 * e[n].height,
        maxWidth: 2 * e[n].width,
        maxHeight: 2 * e[n].height,
    }));
}
n(323874), n(14289), n(35956);
var lA = n(304162),
    lN = n(735438),
    lS = n(724442),
    lE = n(998218),
    lT = n(36491),
    ly = n(222209);
let lI = [{ name: "Media Post Thumbnail", extensions: ["jpg", "jpeg", "png", "gif", "webp"] }],
    lw = (0, lg.Ld)();
function lR(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: l } = e,
        i = lv({ numAttachments: t.length, containerWidth: n, containerHeight: l });
    return (0, a.jsx)(a.Fragment, {
        children: t.map((e, t) =>
            (0, a.jsx)(
                "div",
                {
                    style: i[t],
                    children:
                        !0 === e.isVideo
                            ? (0, a.jsx)(lx.A, { src: e.src, className: ly.xn, "aria-hidden": !0 })
                            : (0, a.jsx)("img", { src: e.src, className: ly.xn, "aria-hidden": !0, alt: e?.alt ?? "" }),
                },
                e.src,
            ),
        ),
    });
}
let lk = (e) => {
    let { parentChannel: t } = e,
        { textAreaState: l } = (0, ej.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, c.x),
        s = (0, n1.bG)([D.A], () => D.A.keyboardModeEnabled),
        o = (function (e, t) {
            let { mediaAttachments: n, hasThumbnail: l } = (function (e) {
                    let [t, n] = i.useState(null),
                        l = (0, n1.yK)([tr.A], () => {
                            let t = tr.A.getUploads(e.id, n$.oU.CREATE_FORUM_POST.drafts.type),
                                n = t.find((e) => e.isThumbnail);
                            return null != n ? [n] : t.filter((e) => e.isVideo || e.isImage);
                        }),
                        a = i.useMemo(() => l.some((e) => e.isThumbnail), [l]);
                    return (
                        i.useEffect(() => {
                            let e = [];
                            return (
                                n(
                                    l.slice(0, lA.A8).flatMap((t) => {
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
                        { mediaAttachments: t, hasThumbnail: a }
                    );
                })(e),
                a = Math.max(lA.A8 - (n?.length ?? 0), 0),
                { embeds: s } = (function (e, t, n) {
                    let l = i.useRef(new Map()),
                        [, a] = i.useState(null),
                        [s, r] = i.useState(null),
                        o = i.useMemo(
                            () =>
                                lN.debounce((e, n) => {
                                    if (null == n || e || 0 === t) return;
                                    let a = n.match(lE.A.URL_REGEX);
                                    if (null == a || 0 === a.length) {
                                        (l.current = new Map()), r(null);
                                        return;
                                    }
                                    r(lN.uniq(a).slice(0, lA.A8));
                                }, 1e3),
                            [t, l, r],
                        );
                    i.useEffect(() => {
                        o(e, n);
                    }, [o, n, e]),
                        i.useEffect(() => {
                            !(async function (e, t) {
                                if (null == t) return;
                                let n = e.current,
                                    l = new Set(n.keys()),
                                    i = t.filter((e) => !l?.has(e));
                                if (0 !== i.length)
                                    try {
                                        var s, r, o;
                                        let t = await lT.L4(i);
                                        (s = new Map(n)),
                                            (r = i),
                                            (o = t?.embeds),
                                            o?.forEach((e) => {
                                                var t, n;
                                                let l =
                                                    ((t = r),
                                                    (n = e),
                                                    t.find((e) => n?.url != null && e.startsWith(n.url)));
                                                if (null == l) return;
                                                let a = s.get(l);
                                                null == a ? s.set(l, [e]) : a.push(e);
                                            }),
                                            (e.current = s),
                                            a({});
                                    } catch (e) {}
                            })(l, s);
                        }, [s]);
                    let d = (0, lS.A)(l),
                        c = i.useMemo(() => {
                            let e = [];
                            return (
                                s?.forEach((t) => {
                                    let n = d.get(t);
                                    null != n && e.push(...n);
                                }),
                                e.length > 0 ? e : null
                            );
                        }, [s, d]);
                    return { embeds: e ? null : c };
                })(l, a, t),
                r = i.useMemo(
                    () =>
                        s?.flatMap((e) => {
                            let t = (0, lA.m3)(e);
                            return null == t ? [] : { id: t, src: t, spoiler: !1, alt: e.title };
                        }),
                    [s],
                ),
                o = [...(n ?? [])];
            return !l && a > 0 && o.push(...(r?.slice(0, a) ?? [])), o;
        })(t, l.textValue?.trim()),
        d = i.useMemo(() => o.find((e) => e.isThumbnail), [o]),
        u = null != o && o.length > 0,
        m = i.useMemo(() => {
            let e = o?.length > 1 ? 1.15 : 1;
            return { width: 153 * e, height: 86 * e };
        }, [o]),
        h = i.useCallback(
            (e) => {
                null != d && nW.A.remove(t.id, d.id, n$.oU.CREATE_FORUM_POST.drafts.type),
                    (0, n7.R)(e.currentTarget.files, t, n$.oU.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0,
                        origin: "file_picker",
                    }),
                    (e.currentTarget.value = null);
            },
            [t, d],
        ),
        g = (e) => {
            e.stopPropagation(),
                d?.upload != null &&
                    (0, tp.openModalLazy)(async () => {
                        let e = d.upload;
                        q()(null != e, "upload should not be null");
                        let { default: l } = await Promise.resolve().then(n.bind(n, 427281));
                        return (n) =>
                            (0, a.jsx)(l, {
                                ...n,
                                upload: e,
                                channelId: t.id,
                                draftType: n$.oU.CREATE_FORUM_POST.drafts.type,
                                onSubmit: (n) => {
                                    let { name: l, description: a, spoiler: i } = n;
                                    nW.A.update(t.id, e.id, n$.oU.CREATE_FORUM_POST.drafts.type, {
                                        filename: l,
                                        description: a,
                                        spoiler: i,
                                    });
                                },
                                disableSpoiler: !0,
                            });
                    });
        },
        x = (0, a.jsx)(lf.A, {
            color: _.XD.CUSTOM,
            className: ly.zL,
            innerClassName: ly.Nr,
            onChange: h,
            multiple: !1,
            "aria-hidden": !0,
            filters: lI,
            "aria-describedby": lw,
            "aria-label": u ? eK.intl.string(eK.t.MxJI3f) : eK.intl.string(eK.t.Cbiofa),
            children: u
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(lR, { mediaAttachments: o, containerWidth: m.width, containerHeight: m.height }),
                          (0, a.jsxs)("div", {
                              className: r()(ly.On, { [ly.bP]: o?.length > 2 }),
                              children: [
                                  (0, a.jsx)(N.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: eK.intl.string(eK.t.MxJI3f),
                                  }),
                                  null == d &&
                                      (0, a.jsx)(nI.R, { size: "xs", color: "currentColor", className: ly.IZ }),
                              ],
                          }),
                      ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(n8.X, {
                              size: "custom",
                              width: 39,
                              height: 39,
                              color: "currentColor",
                              className: ly.T3,
                          }),
                          (0, a.jsx)(N.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: eK.intl.string(eK.t.Cbiofa),
                          }),
                      ],
                  }),
        });
    return (0, a.jsx)("div", {
        className: ly.iT,
        style: m,
        children:
            null != d
                ? (0, a.jsx)(n6.A, {
                      actions: (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(lh.A, {
                                  className: ly.XI,
                                  tooltip: eK.intl.string(eK.t.Y8ujqr),
                                  onClick: g,
                                  children: (0, a.jsx)(nI.R, { size: "xs", color: "currentColor" }),
                              }),
                              (0, a.jsx)(lh.A, {
                                  className: ly.XI,
                                  tooltip: eK.intl.string(eK.t.vN7REz),
                                  onClick: () => nW.A.remove(t.id, d.id, n$.oU.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, a.jsx)(lm.u, { size: "md", color: "currentColor" }),
                              }),
                          ],
                      }),
                      draftType: n$.oU.CREATE_FORUM_POST.drafts.type,
                      id: d.id,
                      channelId: t.id,
                      handleEditModal: g,
                      keyboardModeEnabled: s,
                      size: n6.L.SMALL,
                      className: ly.Xc,
                      children: x,
                  })
                : x,
    });
};
var lM = n(451909),
    lL = n(375199),
    lD = n(141268),
    lP = n(931664),
    lO = n(631576),
    lF = n(474078),
    lU = n(55294),
    lz = n(383233),
    lG = n(101392),
    lB = n(806150),
    lH = n(753738);
function lV(e, t) {
    return { type: e, message: t ?? null };
}
function lW(e, t) {
    return lV(1, (0, lH.cw)(e, t?.id));
}
function l$(e, t) {
    return null == e ||
        (0 === e.type && null != t.content && t.content.trim().length > 0) ||
        (2 === e.type && null != t.tags && t.tags.length > 0)
        ? null
        : (e.message ?? null);
}
var lq = n(774812),
    lK = n(91871),
    lX = n.n(lK),
    lJ = n(892547),
    lQ = n(658675),
    lY = n(628284),
    lZ = n(506115);
let l0 = "data-listbox-item-id",
    l1 = Object.freeze({ STANDARD: lZ.wH, BRAND: lZ.hE });
function l3(e) {
    return String(e);
}
let l6 = i.createContext({ activeDescendant: null, selected: new Set(), setSelected: () => null, itemToString: l3 });
function l9(e) {
    let {
            placeholder: t,
            children: n,
            value: l,
            onChange: s,
            className: o,
            listClassName: d,
            "aria-label": c,
            multiSelect: h = !1,
            autoFocus: g = !1,
            maxVisibleItems: x = 5,
            itemToString: f = l3,
            emptyStateText: _,
            emptyStateHeader: j,
            onQueryChange: b,
        } = e,
        [v, C] = i.useState(""),
        S = i.useCallback(
            (e) => {
                C(e), b?.(e);
            },
            [b],
        ),
        [E] = i.useState(!0),
        [T, y] = i.useState(null),
        I = i.useId(),
        w = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = document.querySelector(`[${l0}="${T}"]`),
            t = w.current;
        null != t && null != e && t.scrollIntoViewNode({ node: e, padding: 12 });
    }, [T]);
    let R = n(v),
        k = 0 === R.length,
        M = j ?? eK.intl.string(eK.t["4o4z3e"]),
        L = i.useId(),
        D = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = w.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        P = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = w.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        O = i.useCallback((e, t) => {
            y(t);
            let n = document.querySelector(e),
                l = w.current;
            null != l && null != n && l.scrollIntoViewNode({ node: n });
        }, []),
        F = (0, m.Ay)({ id: L, isEnabled: !0, useVirtualFocus: !0, scrollToStart: D, scrollToEnd: P, setFocus: O });
    return (0, a.jsx)(u.hD, {
        navigator: F,
        children: (0, a.jsx)(u.PR, {
            children: (e) => {
                let { ref: n, onKeyDown: i, ...u } = e;
                return (0, a.jsxs)("div", {
                    ref: n,
                    role: "combobox",
                    "aria-label": c,
                    "aria-expanded": E,
                    "aria-controls": E ? I : void 0,
                    "aria-owns": I,
                    "aria-haspopup": "listbox",
                    className: r()(lZ.EA, o),
                    children: [
                        (0, a.jsx)("div", {
                            className: lZ.wx,
                            children: (0, a.jsx)(lJ.I, {
                                size: "sm",
                                autoFocus: g,
                                placeholder: t,
                                query: v,
                                onChange: S,
                                onKeyDown: i,
                                onBlur: () => y(null),
                                onClear: () => S(""),
                                inputProps: { "aria-multiline": !1, "aria-activedescendant": null != T ? T : void 0 },
                            }),
                        }),
                        (0, a.jsx)("div", {
                            children:
                                E &&
                                (k
                                    ? (0, a.jsxs)("div", {
                                          className: lZ.Ie,
                                          children: [
                                              (0, a.jsx)(p.D, { variant: "heading-md/semibold", children: M }),
                                              (0, a.jsx)(N.E, {
                                                  color: "text-muted",
                                                  variant: "text-md/normal",
                                                  children: _ ?? eK.intl.string(eK.t.QwSXv8),
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)(l6.Provider, {
                                          value: { activeDescendant: T, selected: l, setSelected: s, itemToString: f },
                                          children: (0, a.jsx)(A.OZ, {
                                              ...u,
                                              style: { maxHeight: 46 * x },
                                              "aria-multiselectable": h,
                                              id: I,
                                              ref: w,
                                              className: r()(lZ.p_, lZ.XG, d),
                                              sections: [R.length],
                                              sectionHeight: 0,
                                              rowHeight: 40,
                                              renderRow: (e) => {
                                                  let { row: t } = e;
                                                  return R[t];
                                              },
                                              renderSection: () => null,
                                          }),
                                      })),
                        }),
                    ],
                });
            },
        }),
    });
}
let l8 = i.createContext(null);
function l4(e) {
    let { value: t, children: n, disabled: l = !1, selectedColor: s = l1.STANDARD, ...o } = e,
        { activeDescendant: d, selected: c, setSelected: m, itemToString: h } = i.useContext(l6),
        g = h(t),
        x = d === g,
        f = o?.selected ?? c.has(t),
        _ = (0, u.rm)(g);
    return (0, a.jsx)(S.D, {
        tag: "li",
        id: g,
        onClick: () => (l ? null : m(t)),
        [l0]: t,
        className: r()(lZ.AS, { [lZ.in]: x, [s]: f, [lZ.r9]: l }),
        ..._,
        role: "option",
        "aria-selected": f,
        "aria-disabled": l,
        children: (0, a.jsx)(l8.Provider, { value: t, children: n }),
    });
}
(l4.Colors = l1),
    (l4.Label = function (e) {
        let { children: t } = e;
        return (0, a.jsx)("span", { className: lZ.IR, children: t });
    }),
    (l4.Icon = function (e) {
        let { children: t } = e;
        return (0, a.jsx)("span", { className: lZ.pp, children: t });
    }),
    (l4.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = i.useContext(l6),
            l = i.useContext(l8);
        return (0, a.jsx)("span", {
            className: lZ.pp,
            children: (0, a.jsx)(lQ.P, { checked: t ?? (null != l && n.has(l)) }),
        });
    }),
    (l4.Checkmark = function () {
        let { selected: e } = i.useContext(l6),
            t = i.useContext(l8);
        return e.has(t)
            ? (0, a.jsx)("span", {
                  className: lZ.pp,
                  children: (0, a.jsx)(lY.y, { size: "custom", color: "currentColor", width: 20, height: 20 }),
              })
            : null;
    });
var l2 = n(305866),
    l7 = n(183610);
function l5(e) {
    let {
            children: t,
            placeholder: n,
            value: l,
            onChange: s,
            onClose: o,
            className: d,
            multiSelect: c,
            emptyStateText: u,
            emptyStateHeader: m,
            onQueryChange: h,
            ...g
        } = e,
        x = i.useCallback(
            (e) => {
                s(e), c || o?.();
            },
            [s, o, c],
        );
    return (0, a.jsx)(l2.l, {
        className: r()(l7.kL, l7.XG, d),
        children: (0, a.jsx)(l9, {
            ...g,
            value: l,
            multiSelect: c,
            onChange: x,
            placeholder: n,
            children: t,
            listClassName: l7.p_,
            emptyStateText: u,
            emptyStateHeader: m,
            onQueryChange: h,
        }),
    });
}
var ae = n(159273),
    at = n(6858);
let an = (e) => {
    let { tag: t } = e,
        { id: n, name: l, emojiId: i, emojiName: s } = t,
        r = (0, x.bG)([ae.Ay], () => (null != i ? ae.Ay.getUsableCustomEmojiById(i) : null)),
        o = null != i || null != s;
    return (0, a.jsx)(
        l4,
        {
            value: n,
            children: (0, a.jsx)(l4.Label, {
                children: (0, a.jsxs)("div", {
                    className: at.nM,
                    children: [
                        o
                            ? (0, a.jsx)(t9.A, {
                                  className: at.__invalid_emoji,
                                  emojiId: i,
                                  emojiName: s,
                                  animated: !!r?.animated,
                              })
                            : (0, a.jsx)(nH.g, { size: "md", color: "currentColor", className: at.__invalid_emoji }),
                        (0, a.jsx)(N.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                    ],
                }),
            }),
        },
        n,
    );
};
function al(e) {
    let { parentChannel: t, appliedTags: n, maxTagsApplied: l, onSelectTag: i, onClose: s } = e,
        r = (0, eg.OT)(t);
    return (0, a.jsx)(l5, {
        value: n,
        onChange: (e) => {
            (!l || n.has(e)) && (i(e), s());
        },
        placeholder: eK.intl.string(eK.t.MbhGm7),
        "aria-label": eK.intl.string(eK.t.MbhGm7),
        children: (e) =>
            r.filter((t) => lX()(e.toLowerCase(), t.name.toLowerCase())).map((e) => (0, a.jsx)(an, { tag: e }, e.id)),
    });
}
var aa = n(376310),
    ai = n(291747),
    as = n(935090);
let ar = (e) => {
    let t,
        n,
        { rateLimitPerUser: l, slowmodeCooldownGuess: i, isBypassSlowmode: s, leadingIcon: o = !1 } = e;
    if (l >= nu.A.Seconds.HOUR) {
        let e = Math.floor(l / nu.A.Seconds.HOUR),
            t = Math.floor((l - e * nu.A.Seconds.HOUR) / nu.A.Seconds.MINUTE),
            a = l - e * nu.A.Seconds.HOUR - t * nu.A.Seconds.MINUTE;
        n = eK.intl.formatToPlainString(eK.t.oEwLez, { hours: e, minutes: t, seconds: a });
    } else if (l >= 60) {
        let e = Math.floor(l / 60);
        n = eK.intl.formatToPlainString(eK.t.DARKYm, { minutes: e, seconds: l - 60 * e });
    } else n = eK.intl.formatToPlainString(eK.t["9yE8Ga"], { seconds: l });
    if (!s && i > 0) {
        let e = X().duration(i);
        if (i > nu.A.Millis.HOUR) {
            let n = `${e.minutes()}`.padStart(2, "0"),
                l = `${e.seconds()}`.padStart(2, "0");
            t = `${e.hours()}:${n}:${l}`;
        } else {
            let n = `${e.seconds()}`.padStart(2, "0");
            t = `${e.minutes()}:${n}`;
        }
    } else t = s ? eK.intl.string(eK.t.SSzXvQ) : eK.intl.string(eK.t.Icu3bf);
    let d = (0, a.jsx)(N.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        c = (0, a.jsx)(ai.x, { size: "xs", color: "currentColor", className: r()(as.Eq, { [as.iE]: o }) });
    return (0, a.jsx)(J.m, {
        text: n,
        children: (0, a.jsx)("div", {
            className: as.ns,
            children: o ? (0, a.jsxs)(a.Fragment, { children: [c, d] }) : (0, a.jsxs)(a.Fragment, { children: [d, c] }),
        }),
    });
};
var ao = n(770178),
    ad = n(765548);
let ac = () => {
    let [e, t] = i.useState(400),
        n = (0, ad.A)((e) => {
            t(e.target.clientWidth);
        });
    return { containerRef: (0, ao.w)(n), containerWidth: e };
};
var au = n(746080),
    am = n(955780);
let ah = n$.oU.CREATE_FORUM_POST;
function ag(e) {
    var t, n;
    let l,
        s,
        { parentChannel: o, isSearchLoading: d, numResults: u, onChange: m, canCreatePost: h, inputRef: g } = e,
        f = !(0, W.V)(o) && h,
        {
            textAreaState: _,
            formOpen: p,
            previewing: j,
        } = (0, ej.kU)((e) => {
            let { textAreaState: t, formOpen: n, previewing: l } = e;
            return { textAreaState: t, formOpen: n, previewing: l };
        }, c.x),
        [b, v] = i.useState(null),
        C = i.useContext(to.EH),
        A = i.useCallback(() => {
            C.bumpDispatchPriority();
        }, [C]),
        N = (0, x.bG)([eF.A], () => eF.A.can(e$.xBc.ATTACH_FILES, o)),
        S = (0, x.yK)([tr.A], () => tr.A.getUploads(o.id, ta.C.FirstThreadMessage)),
        E = p && N && f,
        T = o?.isMediaChannel() === !0,
        y =
            ((t = o),
            (n = g),
            (l = (0, ej.ST)()),
            (s = (0, eg.Hv)(t)),
            i.useCallback(() => {
                let {
                    formOpen: e,
                    setFormOpenFromUserAction: a,
                    name: i,
                    textAreaState: r,
                    hasClickedForm: o,
                } = l.getState();
                !e &&
                    (setTimeout(() => {
                        (0, nP.vq)(n.current, HTMLTextAreaElement) && n.current?.focus();
                    }, 0),
                    ((o && i.length > 0) ||
                        (r.textValue.trim().length > 0 && r.textValue.trim() !== s) ||
                        tr.A.getUploads(t.id, ta.C.FirstThreadMessage).length > 0) &&
                        a());
            }, [l, t.id, s, n])),
        I = (function (e) {
            let { formOpen: t } = (0, ej.kU)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, c.x),
                n = (0, ej.ST)(),
                l = (0, lU.N)({ parentChannel: e });
            i.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                e(null), t(null);
            }, [t, n]);
            let a = i.useCallback(
                (t, l, a) => {
                    let { name: i, textAreaState: s } = n.getState();
                    null == t && (t = s.textValue), (t = t.trim());
                    let { content: r } = lM.Ay.parse(e, t);
                    if (
                        ((t = r),
                        (null == l || 0 === l.length) &&
                            (l = lP.A.getStickerPreview(e.id, ah.drafts.type)?.map((e) => e.id)),
                        (null == a || 0 === a.length) && (a = tr.A.getUploads(e.id, ta.C.FirstThreadMessage)),
                        null != a && a.length > 0 && e.isMediaChannel())
                    ) {
                        let e = a.findIndex((e) => !0 === e.isThumbnail);
                        if (e > -1) {
                            let t = a[e];
                            a.splice(e, 1), a.unshift(t);
                        }
                    }
                    let o = 0 === i.length,
                        d = (null == t || 0 === t.length) && (null == l || 0 === l.length) && 0 === a.length;
                    return { content: t, stickers: l, uploads: a, hasNameError: o, hasMessageError: d };
                },
                [e, n],
            );
            return i.useCallback(
                async (t, i, s) => {
                    let {
                            setNameError: r,
                            setMessageError: o,
                            setSubmitting: d,
                            resetFormState: c,
                            formOpen: u,
                            setFormOpen: m,
                            setPreviewing: h,
                            setFormOpenFromUserAction: g,
                            setGuidelinesOpen: x,
                        } = n.getState(),
                        f = lq.A.hasSeen(e.id);
                    if (!u)
                        return (
                            (0, tx.jr)({ guildId: e.guild_id, channelId: e.id }),
                            f || n.getState().setGuidelinesOpen(!0),
                            g(),
                            { shouldClear: !1, shouldRefocus: !1 }
                        );
                    let { content: _, stickers: p, uploads: j, hasNameError: b, hasMessageError: v } = a(t, i, s);
                    if (
                        (r(b ? lV(0, eK.intl.string(eK.t["71wuR0"])) : null),
                        o(v ? lV(0, eK.intl.string(eK.t["w/BT3G"])) : null),
                        b || v)
                    )
                        return { shouldClear: !1, shouldRefocus: !0 };
                    try {
                        d(!0);
                        let { valid: t } = await (0, lB.i)({
                            content: _,
                            stickers: p,
                            uploads: j,
                            type: ah,
                            channel: e,
                        });
                        if (!t) return { shouldClear: !1, shouldRefocus: !0 };
                        let n = await l(_, p, j);
                        return (
                            (0, tl.JA)(n),
                            tc.A.resort(e.id),
                            (0, lO.x5)(e.id, ah.drafts.type),
                            c(),
                            m(!1),
                            h(!1),
                            lq.A.markAsSeen(e.id),
                            x(!1),
                            { shouldClear: !0, shouldRefocus: !1 }
                        );
                    } catch (t) {
                        return (
                            t.body?.code === e$.t02.AUTOMOD_TITLE_BLOCKED
                                ? r(lW(t.body, e))
                                : t.body?.code === e$.t02.AUTOMOD_MESSAGE_BLOCKED
                                  ? o(lW(t.body, e))
                                  : t.body?.code === e$.t02.INVALID_FORM_BODY &&
                                    t.body?.errors?.name != null &&
                                    r(lV(3, eK.intl.string(eK.t["71wuR0"]))),
                            { shouldClear: !1, shouldRefocus: !0 }
                        );
                    } finally {
                        d(!1);
                    }
                },
                [l, a, e, n],
            );
        })(o);
    return (
        i.useLayoutEffect(m, [p, _, S, m]),
        (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("div", {
                "aria-label": f ? eK.intl.string(eK.t.dq7mAa) : eK.intl.string(eK.t["5h0QOP"]),
                className: r()(am.kL, { [am.yZ]: !p }),
                onClick: !p && f ? y : void 0,
                children: (0, a.jsxs)("form", {
                    onMouseDown: A,
                    onFocus: A,
                    onSubmit: (e) => {
                        e.preventDefault(), f && I();
                    },
                    children: [
                        (0, a.jsxs)("div", {
                            className: am.KJ,
                            children: [
                                (0, a.jsx)(ax, { parentChannel: o, isSearchLoading: d, inputRef: g }),
                                (0, a.jsxs)("div", {
                                    className: j ? am.vJ : am.Zd,
                                    children: [
                                        (0, a.jsx)(af, {
                                            editorRef: b,
                                            parentChannel: o,
                                            isSearchLoading: d,
                                            numResults: u,
                                            inputRef: g,
                                            canCreatePost: f,
                                        }),
                                        p &&
                                            (0, a.jsx)(aj, {
                                                editorRef: b,
                                                setEditorRef: v,
                                                parentChannel: o,
                                                submit: I,
                                                disabled: !f,
                                            }),
                                        j && (0, a.jsx)(ab, {}),
                                    ],
                                }),
                                E && (T ? (0, a.jsx)(lk, { parentChannel: o }) : (0, a.jsx)(ld, { channelId: o.id })),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: am.Zd,
                            children: [
                                E && T && (0, a.jsx)(lu, { parentChannel: o }),
                                p && (0, a.jsx)(aN, { className: am.CN, parentChannel: o, canCreatePost: f }),
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
}
let ax = i.memo(function (e) {
        let { parentChannel: t, isSearchLoading: n, inputRef: l } = e,
            {
                formOpen: s,
                name: r,
                textAreaState: o,
                hasClickedForm: d,
                submitting: u,
            } = (0, ej.kU)((e) => {
                let {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    previewing: a,
                    textAreaState: i,
                    hasClickedForm: s,
                    submitting: r,
                } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    textAreaState: i,
                    previewing: a,
                    hasClickedForm: s,
                    submitting: r,
                };
            }, c.x),
            m = (0, ej.ST)(),
            h = (0, eg.Hv)(t),
            g = i.useCallback(() => {
                m.getState().resetFormState(),
                    nV.A.clearDraft(t.id, ta.C.ThreadSettings),
                    nV.A.clearDraft(t.id, ta.C.FirstThreadMessage),
                    nW.A.clearAll(t.id, ta.C.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    l.current?.blur(),
                    (0, tx.py)({ guildId: t.guild_id, channelId: t.id });
            }, [m, t.id, t.guild_id, l]),
            x = i.useMemo(
                () =>
                    !s &&
                    (r.trim().length > 0 ||
                        (o.textValue.trim().length > 0 && o.textValue.trim() !== h) ||
                        tr.A.getUploads(t.id, ta.C.FirstThreadMessage).length > 0) &&
                    d
                        ? (0, a.jsx)(nI.R, { size: "md", color: "currentColor", className: am.rD })
                        : (0, a.jsx)(nF.B, { onClear: g, hasContent: s, isLoading: n || u, size: "md" }),
                [n, s, d, r, o.textValue, g, t.id, h, u],
            );
        return (0, a.jsx)("div", { className: am.VB, children: x });
    }),
    af = i.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: l, editorRef: s, isSearchLoading: r, numResults: o } = e,
            {
                formOpen: d,
                nameError: u,
                name: m,
                textAreaState: h,
                previewing: g,
            } = (0, ej.kU)((e) => {
                let {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    previewing: a,
                    textAreaState: i,
                    hasClickedForm: s,
                    submitting: r,
                } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    textAreaState: i,
                    previewing: a,
                    hasClickedForm: s,
                    submitting: r,
                };
            }, c.x),
            f = (0, ej.ST)(),
            _ = null != t.topic && 0 !== t.topic.length,
            j = lq.A.hasSeen(t.id),
            b = (0, eg.Hv)(t),
            v = (0, x.bG)([ez.default], () => ez.default.getCurrentUser());
        q()(null != v, "current user cannot be null"),
            (0, to.Vo)({
                event: e$.jej.FOCUS_COMPOSER_TITLE,
                handler: () => {
                    let e = n.current;
                    e?.focus(),
                        f.getState().setTitleFocused(!0),
                        f.getState().setFormOpen(!0),
                        f.getState().setHasClickedForm(!0);
                },
            });
        let C = i.useCallback(
                async (e) => {
                    let n = e.clipboardData.files[0];
                    null != n &&
                        n.type.startsWith("image/") &&
                        (e.preventDefault(),
                        await (0, n7.R)([n], t, ta.C.FirstThreadMessage, { origin: "clipboard" }),
                        f.getState().setFormOpenFromUserAction());
                },
                [t, f],
            ),
            A = l$(u, { content: m });
        return (0, a.jsxs)("div", {
            className: am.gn,
            onPaste: C,
            children: [
                d && g
                    ? (0, a.jsx)(p.D, { variant: "heading-md/semibold", className: am.DD, children: m })
                    : (0, a.jsxs)(t$.B, {
                          gap: 4,
                          children: [
                              (0, a.jsx)(nO.d, {
                                  value: m,
                                  placeholder: l
                                      ? d || (h.textValue.length > 0 && h.textValue.trim() !== b)
                                          ? eK.intl.string(eK.t.lU4dDS)
                                          : eK.intl.string(eK.t.CjmivA)
                                      : eK.intl.string(eK.t["5h0QOP"]),
                                  rows: 1,
                                  maxLength: e$.Ign,
                                  onChange: (e) => {
                                      let n = e.target.value,
                                          l = (0, lF.A)(n, !1);
                                      f.getState().setName(l);
                                      let a = 0 === l.trim().length,
                                          i = 0 === h.textValue.trim().length,
                                          s = h.textValue.trim() === b;
                                      a && (i || s) && f.getState().setHasClickedForm(!1),
                                          d || tc.A.updateForumSearchQuery(t.id, l);
                                  },
                                  onFocus: () => {
                                      f.getState().setTitleFocused(!0), f.getState().setBodyFocused(!1);
                                  },
                                  onBlur: () => {
                                      f.getState().setTitleFocused(!1);
                                      let e = (0, lF.A)(m, !0);
                                      e !== m && (f.getState().setName(e), d || tc.A.updateForumSearchQuery(t.id, e));
                                  },
                                  onKeyDown: (e) => {
                                      "Enter" === e.key &&
                                          (e.preventDefault(),
                                          e.stopPropagation(),
                                          d && m.length > 0
                                              ? s?.focus()
                                              : l && e.shiftKey
                                                ? ((0, tx.sB)({ guildId: t.guild_id, channelId: t.id }),
                                                  _ && !j && f.getState().setGuidelinesOpen(!0),
                                                  f.getState().setFormOpenFromUserAction(),
                                                  m.trim().length > 0 && (f.getState().setBodyFocused(!0), s?.focus()))
                                                : d ||
                                                  !(m.length > 0) ||
                                                  null != o ||
                                                  r ||
                                                  tc.A.updateForumSearchQuery(t.id, m));
                                      let a = n.current;
                                      if ("Home" === e.key || "End" === e.key) {
                                          if (null == a) return;
                                          if ((e.preventDefault(), e.stopPropagation(), "Home" === e.key)) {
                                              let t = e.shiftKey ? Math.max(a.selectionStart, a.selectionEnd) : 0;
                                              a.setSelectionRange(0, t, "backward");
                                          } else {
                                              let t = e.shiftKey
                                                      ? Math.min(a.selectionStart, a.selectionEnd)
                                                      : m.length,
                                                  n = m.length;
                                              a.setSelectionRange(t, n, "forward");
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
                                  className: am.DD,
                                  ref: n,
                              }),
                              null != A ? (0, a.jsx)(nU.U, { error: A }) : null,
                          ],
                      }),
                d
                    ? null
                    : (0, a.jsxs)(t$.B, {
                          direction: "horizontal",
                          gap: 8,
                          justify: "end",
                          fullWidth: !1,
                          children: [
                              (0, a.jsx)(a_, { parentChannel: t }),
                              (0, a.jsx)(aS, { parentChannel: t, canCreatePost: l }),
                          ],
                      }),
            ],
        });
    });
function a_(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, ej.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, c.x),
        l = (0, ej.ST)();
    return null != t.topic && 0 !== t.topic.length
        ? (0, a.jsx)(J.m, {
              text: eK.intl.string(eK.t["4d4T4l"]),
              children: (0, a.jsx)(nz.K, {
                  size: "sm",
                  variant: "secondary",
                  onClick: () => {
                      l.getState().setGuidelinesOpen(!n);
                  },
                  icon: ny.B,
                  "aria-label": eK.intl.string(eK.t["4d4T4l"]),
              }),
          })
        : null;
}
let ap = i.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            l = new lz.Ay({ channel_id: t.id, content: n }),
            { content: i } = (0, lL.A)(l, {
                hideSimpleEmbedContent: !0,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0,
            }),
            s = (0, lD.A)({ message: l, channel: t, compact: !1 }, i, !1);
        return (0, a.jsx)("div", { className: r()(am.SL, am.ly), children: s });
    }),
    aj = i.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: l = !1, editorRef: s, setEditorRef: o } = e,
            d = (0, x.bG)([ez.default], () => ez.default.getCurrentUser());
        q()(null != d, "current user cannot be null");
        let {
                messageError: u,
                previewing: m,
                textAreaState: h,
                bodyFocused: g,
                formOpen: f,
            } = (0, ej.kU)((e) => {
                let { messageError: t, textAreaState: n, previewing: l, bodyFocused: a, formOpen: i } = e;
                return { messageError: t, textAreaState: n, previewing: l, bodyFocused: a, formOpen: i };
            }, c.x),
            _ = (0, ej.ST)();
        i.useEffect(() => () => (0, tx._4)({ guildId: t.guild_id, channelId: t.id }), [t.guild_id, t.id]);
        let p = i.useCallback(() => {
                _.getState().setBodyFocused(!0);
            }, [_]),
            j = i.useCallback(() => {
                _.getState().setBodyFocused(!1);
            }, [_]),
            b = i.useCallback(
                (e, t, n) => {
                    let { setTextAreaState: l } = _.getState();
                    l({ textValue: t, richValue: n });
                },
                [_],
            ),
            v = i.useCallback(
                (e) => {
                    let { value: t, uploads: l, stickers: a } = e;
                    return n(t, a, l);
                },
                [n],
            );
        (0, to.Vo)({ event: e$.jej.TEXTAREA_FOCUS, handler: p }),
            (0, to.Vo)({ event: e$.jej.TEXTAREA_BLUR, handler: j });
        let C = l$(u, { content: h.textValue });
        return (0, a.jsx)("div", {
            className: am.IP,
            children: (0, a.jsxs)("div", {
                className: am.hQ,
                children: [
                    m
                        ? (0, a.jsx)(ap, { parentChannel: t, textValue: h.textValue })
                        : (0, a.jsx)("div", {
                              onClick: p,
                              children: (0, a.jsx)(nY.Ay, {
                                  type: ah,
                                  setEditorRef: o,
                                  channel: t,
                                  placeholder: eK.intl.string(eK.t["8IPnv1"]),
                                  textValue: h.textValue,
                                  richValue: h.richValue,
                                  focused: g,
                                  className: am.gM,
                                  innerClassName: r()(am.SL, { [am.cr]: null != C }),
                                  onChange: b,
                                  onSubmit: v,
                                  promptToUpload: n7.R,
                                  disabled: l,
                                  onKeyDown: (e) => {
                                      ("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(),
                                          f &&
                                              "Escape" === e.key &&
                                              !_.getState().submitting &&
                                              (s?.blur(),
                                              _.getState().setFormOpen(!1),
                                              _.getState().setTitleFocused(!1),
                                              _.getState().setBodyFocused(!1),
                                              _.getState().setPreviewing(!1));
                                  },
                                  autoCompletePosition: "bottom",
                              }),
                          }),
                    (0, a.jsx)(nU.U, { error: C }),
                ],
            }),
        });
    });
function ab() {
    return (0, a.jsx)("div", {
        className: am.fv,
        children: (0, a.jsx)(N.E, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: eK.intl.string(eK.t["WE/cYo"]),
        }),
    });
}
function av(e) {
    let { textAreaState: t } = (0, ej.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, c.x),
        n = (0, x.yK)([tr.A], () => tr.A.getUploads(e.id, ta.C.FirstThreadMessage));
    return i.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n]);
}
function aC(e) {
    let t = av(e),
        { appliedTags: n, name: l } = (0, ej.kU)((e) => {
            let { appliedTags: t, name: n } = e;
            return { appliedTags: t, name: n };
        }, c.x);
    return i.useMemo(() => e.hasFlag(au.lx.REQUIRE_TAG) && 0 === n.size && l.length > 0 && t, [n, l, e, t]);
}
function aA() {
    let { previewing: e } = (0, ej.kU)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, c.x),
        t = (0, ej.ST)(),
        n = i.useCallback(() => {
            t.getState().setPreviewing(!e), (0, tx.Q_)();
        }, [e, t]),
        l = e ? eK.intl.string(eK.t.ojM1xJ) : eK.intl.string(eK.t.SKNnqq);
    return (0, a.jsx)(J.m, {
        text: l,
        children: (0, a.jsx)(nz.K, {
            variant: "secondary",
            size: "sm",
            onClick: n,
            icon: e ? nG.G : nB.b,
            "aria-label": l,
        }),
    });
}
let aN = i.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: l } = e,
        { textAreaState: s, name: r } = (0, ej.kU)((e) => {
            let { textAreaState: t, name: n } = e;
            return { textAreaState: t, name: n };
        }, c.x),
        { rateLimitPerUser: o } = t,
        d = o > 0,
        u = (0, x.bG)([lG.A], () => lG.A.getSlowmodeCooldownGuess(t.id, lG.R.CreateThread)),
        m = (0, n0._)(t, lG.R.CreateThread),
        h = aC(t),
        g = (0, ej.ST)(),
        f = i.useCallback(() => {
            g.getState().setBodyFocused(!1);
        }, [g]),
        _ = i.useMemo(() => "" !== r.trim() && "" !== s.textValue.trim(), [r, s.textValue]);
    return (
        i.useEffect(() => {
            _ || g.getState().setPreviewing(!1);
        }, [_, g]),
        (0, a.jsxs)("div", {
            className: l,
            children: [
                (0, a.jsx)(aT, { parentChannel: t }),
                (0, a.jsx)("div", { className: am.XJ }),
                (0, a.jsxs)("div", {
                    className: am.gO,
                    children: [
                        (0, a.jsxs)("div", {
                            className: am.ne,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: am.Kk,
                                    children: [
                                        (0, a.jsx)(nZ.A, { type: ah, textValue: s.textValue, className: am.Dq }),
                                        d &&
                                            (0, a.jsx)(ar, {
                                                rateLimitPerUser: o,
                                                slowmodeCooldownGuess: u,
                                                isBypassSlowmode: m,
                                                leadingIcon: !0,
                                            }),
                                    ],
                                }),
                                (0, a.jsx)(a_, { parentChannel: t }),
                                _ && (0, a.jsx)(aA, {}),
                                (0, a.jsx)(aS, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: d && !m && u > 0,
                                }),
                            ],
                        }),
                        (0, a.jsx)(nQ, { type: ah, className: am.n1, onClick: f, channel: t }, "expression"),
                    ],
                }),
                h &&
                    (0, a.jsx)(N.E, {
                        variant: "text-sm/medium",
                        color: "text-feedback-critical",
                        className: am.ku,
                        children: eK.intl.string(eK.t.xPfNQi),
                    }),
            ],
        })
    );
});
function aS(e) {
    let { parentChannel: t, canCreatePost: n, disabled: l, disableIfInvalid: i = !1 } = e,
        s = (0, W.V)(t),
        {
            submitting: r,
            name: o,
            formOpen: d,
        } = (0, ej.kU)((e) => {
            let { submitting: t, name: n, formOpen: l } = e;
            return { submitting: t, name: n, formOpen: l };
        }, c.x),
        u = av(t),
        m = !aC(t) && u && o.trim().length > 0;
    return __OVERLAY__ || s
        ? null
        : (0, a.jsx)(tM.$, {
              variant: "primary",
              type: "submit",
              size: "sm",
              loading: r,
              disabled: (i && !m) || l || !n,
              icon: ea.o,
              text: d ? eK.intl.string(eK.t.pIuQI6) : eK.intl.string(eK.t.TyAuoT),
          });
}
function aE() {
    return Promise.resolve();
}
function aT(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: l,
            setPopoutOpen: s,
        } = (0, ej.kU)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: l } = e;
            return { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: l };
        }, c.x),
        o = n.size >= 5,
        d = (0, m.Ay)({
            id: `${t.id}-post-form-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: aE,
            scrollToEnd: aE,
            orientation: h.Gl.HORIZONTAL,
        }),
        { containerRef: g, containerWidth: x } = ac(),
        f = i.useRef(null),
        _ = i.useRef(null),
        [p, j] = i.useState(!0),
        b = (0, eg.OT)(t),
        [v, C] = i.useState(0);
    return (i.useLayoutEffect(() => {
        let e = f.current,
            t = e?.children?.[0],
            n = null == e || null == t || t.clientHeight > e.clientHeight;
        if ((n !== p && j(n), n && null != g.current && null != t && null != t.children)) {
            let { left: e, top: n } = g.current.getBoundingClientRect(),
                l = 0;
            for (let a of t.children) {
                let { right: t, top: i, height: s } = a.getBoundingClientRect();
                if (i - n > s) break;
                t - e > l && (l = t - e);
            }
            C(l);
        }
    }, [b, p, g, x]),
    0 === b.length)
        ? null
        : (0, a.jsxs)("div", {
              className: am.Pc,
              ref: g,
              children: [
                  (0, a.jsx)(nH.g, { size: "xs", color: "currentColor", className: am.HZ }),
                  (0, a.jsx)("div", {
                      className: am.kU,
                      ref: f,
                      children: (0, a.jsx)(u.hD, {
                          navigator: d,
                          children: (0, a.jsx)(u.PR, {
                              children: (e) => {
                                  let { ref: t, ...i } = e;
                                  return (0, a.jsx)("div", {
                                      className: am.j5,
                                      ref: t,
                                      ...i,
                                      children: b.map((e) =>
                                          (0, a.jsx)(
                                              aa.A,
                                              {
                                                  ariaLabel: eK.intl.formatToPlainString(eK.t.FSZVIR, {
                                                      tagName: e.name,
                                                  }),
                                                  tag: e,
                                                  onClick: o && !n.has(e.id) ? void 0 : () => l(e.id),
                                                  disabled: !n.has(e.id) && n.size >= 5,
                                                  selected: n.has(e.id),
                                                  size: aa.A.Sizes.SMALL,
                                              },
                                              e.id,
                                          ),
                                      ),
                                  });
                              },
                          }),
                      }),
                  }),
                  p &&
                      (0, a.jsx)(y.Y, {
                          targetElementRef: _,
                          onRequestOpen: () => s(!0),
                          onRequestClose: () => s(!1),
                          renderPopout: (e) => {
                              let { closePopout: i } = e;
                              return (0, a.jsx)(al, {
                                  parentChannel: t,
                                  appliedTags: n,
                                  maxTagsApplied: o,
                                  onSelectTag: l,
                                  onClose: i,
                              });
                          },
                          position: "bottom",
                          align: "center",
                          children: (e) =>
                              (0, a.jsx)("div", {
                                  ref: _,
                                  className: am.Wk,
                                  style: { left: v },
                                  children: (0, a.jsx)(tM.$, {
                                      ...e,
                                      size: "sm",
                                      variant: "secondary",
                                      icon: w.a,
                                      iconPosition: "end",
                                      text: eK.intl.string(eK.t.w6T0Yc),
                                  }),
                              }),
                      }),
                  (0, a.jsx)("div", {
                      className: r()(am.Wk, am.Dz),
                      children: (0, a.jsx)(tM.$, {
                          size: "sm",
                          variant: "secondary",
                          icon: w.a,
                          iconPosition: "end",
                          text: eK.intl.string(eK.t.w6T0Yc),
                      }),
                  }),
              ],
          });
}
var ay = n(602137),
    aI = n(782134),
    aw = n(391242),
    aR = n(191023),
    ak = n(234914),
    aM = n(930125),
    aL = n(282108),
    aD = n(291812),
    aP = n(994500),
    aO =
        (((l = {})[(l.THREE_BY_TWO = 2 / 3)] = "THREE_BY_TWO"),
        (l[(l.SIXTEEN_BY_NINE = 9 / 16)] = "SIXTEEN_BY_NINE"),
        l);
let aF = { columns: 1, columnWidth: 450 },
    aU = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aO.THREE_BY_TWO,
            n = e - 2,
            l = Math.ceil(n * t);
        return [n, l];
    },
    az = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aO.THREE_BY_TWO;
        return 60 + aU(e - 24, t)[1] + 24 + 36;
    };
var aG = n(313880),
    aB = n(461771),
    aH = n(602034);
let aV = "data-grid-item-id",
    aW = "data-grid-section",
    a$ = "data-grid-prev-section-boundary",
    aq = new Set([h.D$.UP, h.D$.DOWN, h.D$.LEFT, h.D$.RIGHT]);
function aK(e) {
    let { section: t, column: n, row: l } = e,
        a = `[${aW}="${t}"]`,
        i = `[aria-colindex="${n}"]`,
        s = `[aria-rowindex="${l}"]`;
    return `${a}${i}${s}`;
}
let aX = { id: "NO_LIST", onKeyDown() {}, ref: i.createRef() },
    aJ = i.createContext({ id: "NO_LIST", setFocus() {} }),
    aQ = i.createContext(aX);
function aY(e) {
    let { children: t, navigator: n } = e,
        {
            id: l,
            setFocus: s,
            containerProps: { onKeyDown: r, ref: o },
        } = n,
        d = i.useMemo(() => ({ id: l, setFocus: s }), [l, s]),
        c = i.useMemo(() => ({ onKeyDown: r, ref: o, id: l }), [r, o, l]);
    return (0, a.jsx)(aQ.Provider, { value: c, children: (0, a.jsx)(aJ.Provider, { value: d, children: t }) });
}
var aZ = n(15175);
let a0 = i.memo(function (e) {
    let {
            id: t,
            threadId: n,
            goToThread: l,
            overrideMedia: i,
            className: s,
            coords: r,
            gridCoords: o,
            gridSectionBoundaries: d,
            observePostVisibilityAnalytics: c,
        } = e,
        u = (0, x.bG)([eP.A], () => eP.A.getChannel(n));
    return null == u
        ? null
        : (0, a.jsx)(a1, {
              id: t,
              channel: u,
              goToThread: l,
              overrideMedia: i,
              className: s,
              coords: r,
              gridCoords: o,
              observePostVisibilityAnalytics: c,
              gridSectionBoundaries: d,
          });
});
function a1(e) {
    let {
            id: t,
            channel: n,
            goToThread: l,
            overrideMedia: s,
            className: o,
            coords: d,
            gridCoords: c,
            gridSectionBoundaries: u,
            observePostVisibilityAnalytics: m,
        } = e,
        h = n.id,
        g = i.useRef(null),
        f = (0, x.bG)([eD.Ay], () => eD.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: _, loaded: b } = (0, ex.OA)(n),
        v = (0, P.Ay)(n),
        { messageCountText: C } = (0, eg.k6)(n),
        { isNew: A, hasUnreads: E } = (0, eg.X5)(n),
        T = i.useRef(null),
        { handleLeftClick: y, handleRightClick: I } = (0, eC.A)({ facepileRef: T, goToThread: l, channel: n });
    i.useEffect(() => {
        m?.(g.current, h);
    }, [m, h]);
    let w = (0, eg.Mw)(n, ay.T.CREATION_DATE, nf.EG.POSTED_DURATION_AGO),
        R = (0, tX.hf)(n),
        { onFocus: k, ...M } = (function (e) {
            let { id: t, section: n, row: l, column: a, boundaries: s } = e,
                [r, o] = i.useState(0 === l && 0 === a ? 0 : -1),
                { id: d, setFocus: c } = i.useContext(aJ),
                u = i.useCallback(() => c(t), [t, c]);
            return (
                i.useLayoutEffect(
                    () =>
                        (0, aB.e)(d, (e) => {
                            o(e === t ? 0 : -1);
                        }),
                    [t, d],
                ),
                {
                    [aV]: (0, aH.t$)(d, t),
                    [aW]: n,
                    [a$]: s[n],
                    role: "gridcell",
                    "aria-rowindex": l,
                    "aria-colindex": a,
                    tabIndex: r,
                    onFocus: u,
                }
            );
        })({ id: t, row: c.row, column: c.column, section: c.section, boundaries: u });
    return (0, a.jsxs)("li", {
        ref: g,
        onClick: y,
        onFocus: k,
        onContextMenu: I,
        className: r()(aZ.kL, o, { [aZ.nT]: f }),
        style: { ...d },
        children: [
            (0, a.jsx)(S.D, {
                onClick: y,
                focusProps: { ringTarget: g },
                onContextMenu: I,
                "aria-label": eK.intl.formatToPlainString(eK.t.pgYN6c, { title: v ?? "", count: C }),
                className: aZ.Kv,
                ...M,
            }),
            (0, a.jsxs)("div", {
                className: aZ.wx,
                children: [
                    (0, a.jsxs)("div", {
                        className: aZ.Y6,
                        children: [
                            (0, a.jsxs)("div", {
                                className: aZ.wO,
                                children: [
                                    (0, a.jsx)(aG.A, { channel: n, message: _ }),
                                    (0, a.jsx)(N.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        className: aZ.SD,
                                        children: w,
                                    }),
                                ],
                            }),
                            A
                                ? (0, a.jsx)(et.Lp, {
                                      className: aZ.Ad,
                                      color: en.A.unsafe_rawColors.BRAND_260.css,
                                      text: eK.intl.string(eK.t.y2b7CA),
                                  })
                                : null,
                        ],
                    }),
                    (0, a.jsx)(j.F, {
                        children: (0, a.jsx)(p.D, {
                            variant: "heading-md/extrabold",
                            className: aZ.DD,
                            color: E ? "text-strong" : "text-muted",
                            style: { width: `${d.width - 24}px` },
                            children: R,
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: aZ.PU,
                children: (0, a.jsx)(Q.M, {
                    children: (0, a.jsx)(a3, {
                        channel: n,
                        firstMessage: _,
                        isFirstMessageLoaded: b,
                        overrideMedia: s,
                        coords: d,
                    }),
                }),
            }),
            (0, a.jsx)("div", {
                className: aZ.qr,
                children: (0, a.jsx)(Q.M, {
                    children: (0, a.jsx)(a9, { channel: n, firstMessage: _, facepileRef: T }),
                }),
            }),
        ],
    });
}
function a3(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: i, coords: s } = e,
        { isBlocked: r, isIgnored: o } = (0, x.cf)([aP.A], () => ({
            isBlocked: null != n && aP.A.isBlockedForMessage(n),
            isIgnored: null != n && aP.A.isIgnoredForMessage(n),
        }));
    return r
        ? (0, a.jsx)(ie, { message: eK.intl.string(eK.t.Lkp2fB), containerWidth: s.width, channel: t })
        : o
          ? (0, a.jsx)(ie, { message: eK.intl.string(eK.t.yWK7ZM), containerWidth: s.width, channel: t })
          : (0, a.jsx)(a6, { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: i, coords: s });
}
function a6(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: i, coords: s } = e,
        r = (0, x.bG)([eP.A], () => eP.A.getChannel(t.parent_id)),
        { firstMedia: o } = (0, eg.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !1 }),
        { hasUnreads: d } = (0, eg.X5)(t),
        c = (0, x.bG)([eF.A], () => eF.A.can(e$.xBc.MANAGE_MESSAGES, t)),
        u = eL.kt.useSetting(),
        m = eL.gs.useSetting(),
        h = (0, eT.A)(m, c),
        g = (0, ef.no)(n, r, !1),
        f = t.isMediaPost(),
        [_, p] = aU(s.width - 24, f ? aO.SIXTEEN_BY_NINE : aO.THREE_BY_TWO);
    return n?.blocked || null == (i ?? o)
        ? (0, a.jsx)(a5, {
              channel: t,
              firstMessage: n,
              isFirstMessageLoaded: l,
              containerWidth: s.width,
              hasUnreads: d,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(a2, {
                      mediaAttachments: g,
                      globalSpoilerRenderSetting: h,
                      containerWidth: _,
                      containerHeight: p,
                      canAutoPlay: u,
                      shouldMaintainAspectRatio: f,
                  }),
                  (0, a.jsx)("div", {
                      className: aZ.GA,
                      children: (0, a.jsx)(eb.Ay, { channel: t, tagsClassName: aZ.uU }),
                  }),
              ],
          });
}
function a9(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        i = (0, eu.m)(t.id),
        s = l?.reactions != null && l.reactions.length > 0;
    return (0, a.jsxs)("div", {
        className: aZ.GD,
        children: [
            (0, a.jsxs)("div", {
                className: aZ.QW,
                children: [
                    (0, a.jsx)("div", {
                        className: aZ.mz,
                        children: (0, a.jsx)(tX.$k, { channel: t, iconSize: 16, showReadState: !0 }),
                    }),
                    i.length > 0
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("span", { className: aZ.xE, children: "•" }),
                                  (0, a.jsxs)("div", {
                                      className: aZ.IW,
                                      children: [
                                          (0, a.jsx)(tX.gL, { channel: t, userIds: i, facepileRef: n }),
                                          (0, a.jsx)("div", {
                                              className: aZ.r$,
                                              children: (0, a.jsx)(el.n, { themed: !0, dotRadius: 2 }),
                                          }),
                                          (0, a.jsx)(es.Ay, { channel: t, className: aZ.mD, renderDots: !1 }),
                                      ],
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("div", {
                className: aZ.QW,
                children: [
                    s || null == l ? null : (0, a.jsx)(tX.NA, { firstMessage: l, channel: t }),
                    null == l ? null : (0, a.jsx)(tX.cn, { firstMessage: l, channel: t }),
                ],
            }),
        ],
    });
}
let a8 = (e) => e.preventDefault(),
    a4 = i.memo(function (e) {
        return (0, a.jsx)(a.Fragment, {
            children: (0, ew.LL)({ ...e, analyticsSource: "ForumPostMediaPreviewImage" }),
        });
    }),
    a2 = i.memo(function (e) {
        let {
                mediaAttachments: t,
                globalSpoilerRenderSetting: n,
                containerWidth: l,
                containerHeight: s,
                canAutoPlay: o,
                shouldMaintainAspectRatio: d = !1,
            } = e,
            { containsVideo: c, containsGif: u } = i.useMemo(() => (0, ef.$2)(t), [t]),
            m = i.useMemo(() => t.slice(0, 4), [t]),
            h = lv({ numAttachments: m.length, containerWidth: l, containerHeight: s }),
            g = (function (e) {
                let { imageContainerStyles: t, containerWidth: n, containerHeight: l } = e,
                    a = i.useRef(lC(t)),
                    s = i.useRef(n),
                    r = i.useRef(l),
                    o = n > s.current + 100,
                    d = l > r.current + 100;
                return (o || d) && (a.current = lC(t)), a.current;
            })({ imageContainerStyles: h, containerWidth: l, containerHeight: s }),
            x = (0, aL.O8)(aM.v.GUILD),
            f = i.useMemo(
                () =>
                    m.map((e, t) => {
                        let [l, i] = (0, eS.K6)(e, !n, x),
                            s = (0, eS.rx)(i),
                            m = {
                                ...g[t],
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && l ? s : e.alt,
                                onClick: a8,
                                shouldRenderAccessory: !u && !c,
                            },
                            f = (0, eN.ge)(e.src) ? `${e.src}?format=png` : e.src,
                            _ = o && !l ? e.src : f;
                        return (0, a.jsxs)(
                            "div",
                            {
                                className: aZ.UV,
                                style: h[t],
                                children: [
                                    d
                                        ? (0, a.jsx)(ak.A, {
                                              ...m,
                                              src: _,
                                              backgroundSrc: f,
                                              aspectRatio: m.maxWidth / m.maxHeight,
                                              alt: m.alt ?? "",
                                              className: r()(aZ.EN, { [aZ.cd]: l }),
                                              imageChildClassName: aZ.Rp,
                                          })
                                        : e.src.startsWith("data:")
                                          ? (0, a.jsx)(ei._, {
                                                ...m,
                                                className: aZ.il,
                                                imageClassName: r()(aZ.LW, { [aZ.cd]: l }),
                                            })
                                          : (0, a.jsx)(a4, {
                                                ...m,
                                                autoPlay: o && !l,
                                                containerClassName: aZ.EK,
                                                imageClassName: r()(aZ.rp, { [aZ.cd]: l }),
                                                responsive: !0,
                                            }),
                                    l &&
                                        (0, a.jsx)("div", {
                                            className: aZ.X,
                                            children: (0, a.jsx)(ep.A, { obscureReason: i, iconClassname: aZ.yo }),
                                        }),
                                ],
                            },
                            e.src,
                        );
                    }),
                [o, u, c, n, h, g, m, d, x],
            );
        return (0, a.jsxs)("div", {
            className: aZ.pV,
            style: { width: l, height: s },
            children: [
                f,
                (u || c) &&
                    (0, a.jsxs)("div", {
                        className: aZ.vz,
                        children: [
                            c &&
                                (0, a.jsx)(aI.u, {
                                    color: "currentColor",
                                    size: "custom",
                                    width: 22,
                                    height: 22,
                                    className: aZ.cU,
                                }),
                            u &&
                                (0, a.jsx)(aw.O, {
                                    size: "custom",
                                    width: 29,
                                    height: 29,
                                    color: "currentColor",
                                    className: aZ.cU,
                                }),
                        ],
                    }),
                t.length > 4 &&
                    (0, a.jsx)(a7, {
                        text: (t.length - 4).toString(),
                        icon: aR.x,
                        pillClassName: aZ.v3,
                        iconClassName: aZ.In,
                        textClassName: aZ.EY,
                    }),
            ],
        });
    });
function a7(e) {
    let { text: t, icon: n, pillClassName: l, iconClassName: i, textClassName: s } = e;
    return (0, a.jsxs)("div", {
        className: l,
        children: [
            (0, a.jsx)(n, { className: i, color: "currentColor" }),
            (0, a.jsxs)(N.E, { variant: "text-xs/medium", className: s, children: ["+", t] }),
        ],
    });
}
function a5(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, containerWidth: s, hasUnreads: o } = e,
        d = eL.hH.useSetting(),
        [c, u] = aU(s - 24),
        { content: m } = (0, eg.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !0 }),
        { shouldRenderTagsRow: h } = (0, eb.BA)({ channel: t, isNew: !1 }),
        g = i.useMemo(() => ({ width: c, height: u }), [c, u]),
        x = o ? aZ.kR : aZ.b8;
    return (0, a.jsxs)("div", {
        className: aZ.Cv,
        style: g,
        children: [
            (0, a.jsxs)("div", {
                className: aZ.Qs,
                children: [
                    l &&
                        null == n &&
                        (0, a.jsx)(N.E, {
                            variant: "text-sm/normal",
                            color: o ? "text-default" : "text-muted",
                            children: eK.intl.string(eK.t.mE3KJN),
                        }),
                    l && null != n && (0, a.jsx)(aD.Ay, { message: n, content: m, className: x, compact: d }),
                ],
            }),
            (0, a.jsx)("div", {
                className: r()(aZ.kh, { [aZ.ZH]: !h }),
                children: h ? (0, a.jsx)(eb.Ay, { channel: t, tagsClassName: aZ.uU }) : null,
            }),
        ],
    });
}
function ie(e) {
    let { message: t, containerWidth: n, channel: l } = e,
        [s, o] = aU(n - 24),
        { shouldRenderTagsRow: d } = (0, eb.BA)({ channel: l, isNew: !1 }),
        c = i.useMemo(() => ({ width: s, height: o }), [s, o]);
    return (0, a.jsxs)("div", {
        className: aZ.Cv,
        style: c,
        children: [
            (0, a.jsx)("div", {
                className: aZ.Qs,
                children: (0, a.jsx)(N.E, {
                    className: aZ.Wv,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: t,
                }),
            }),
            (0, a.jsx)("div", {
                className: r()(aZ.kh, { [aZ.ZH]: !d }),
                children: d ? (0, a.jsx)(eb.Ay, { channel: l, tagsClassName: aZ.uU }) : null,
            }),
        ],
    });
}
var it = n(392421),
    il = n(550079),
    ia = n(477782),
    ii = n(901713);
function is(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: l, layoutType: i, tagSetting: s } = (0, eh.R)(t.id),
        { showResolvedFlags: r, setShowResolvedFlags: o } = (0, H.T)(t.id),
        d = (0, eh.p)(),
        c = t.isMediaChannel(),
        u = (e) => {
            (0, tx.Cd)({ guildId: t.guild_id, channelId: t.id, sortOrder: e }), d.getState().setSortOrder(t.id, e), n();
        },
        m = (e) => {
            (0, tx.ad)({ guildId: t.guild_id, channelId: t.id, forumLayout: e }),
                d.getState().setLayoutType(t.id, e),
                n();
        },
        h = (e) => {
            d.getState().setTagSetting(t.id, e), n();
        },
        x = null != t.availableTags && t.availableTags.length > 0;
    return (0, a.jsx)("div", {
        className: ii.k,
        children: (0, a.jsxs)(il.W, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": c ? eK.intl.string(eK.t["kQN/bi"]) : eK.intl.string(eK.t.DJzbkL),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, a.jsxs)(ia.rX, {
                    label: eK.intl.string(eK.t.f8wNDl),
                    children: [
                        (0, a.jsx)(ia.iD, {
                            id: "sort-by-recent-activity",
                            group: "sort-by",
                            label: eK.intl.string(eK.t.jOPmcI),
                            action: () => u(ay.T.LATEST_ACTIVITY),
                            checked: l === ay.T.LATEST_ACTIVITY,
                        }),
                        (0, a.jsx)(ia.iD, {
                            id: "sort-by-date-posted",
                            group: "sort-by",
                            label: eK.intl.string(eK.t.UIltXd),
                            action: () => u(ay.T.CREATION_DATE),
                            checked: l === ay.T.CREATION_DATE,
                        }),
                    ],
                }),
                t.isModeratorReportChannel() &&
                    (0, a.jsx)(ia.rX, {
                        label: eK.intl.string(tQ.default.PsM2b4),
                        children: (0, a.jsx)(ia.sL, {
                            id: "resolved-flags-none",
                            label: eK.intl.string(eK.t.XJuakA),
                            action: () => o(!r),
                            checked: r,
                        }),
                    }),
                t.isMediaChannel() || t.isModeratorReportChannel()
                    ? null
                    : (0, a.jsxs)(ia.rX, {
                          label: eK.intl.string(eK.t.mFMDSq),
                          children: [
                              (0, a.jsx)(ia.iD, {
                                  id: "view-as-list",
                                  group: "view-as",
                                  label: eK.intl.string(eK.t["NJFr+g"]),
                                  action: () => m(g.C.LIST),
                                  checked: i === g.C.LIST,
                              }),
                              (0, a.jsx)(ia.iD, {
                                  id: "view-as-grid",
                                  group: "view-as",
                                  label: eK.intl.string(eK.t.wKeggb),
                                  action: () => m(g.C.GRID),
                                  checked: i === g.C.GRID,
                              }),
                          ],
                      }),
                x
                    ? (0, a.jsxs)(ia.rX, {
                          label: eK.intl.string(eK.t.Paxaug),
                          children: [
                              (0, a.jsx)(ia.iD, {
                                  id: "match-some",
                                  group: "tag-setting",
                                  label: eK.intl.string(eK.t.rQ0ctQ),
                                  action: () => h(it.n.MATCH_SOME),
                                  checked: s === it.n.MATCH_SOME,
                              }),
                              (0, a.jsx)(ia.iD, {
                                  id: "match-all",
                                  group: "tag-setting",
                                  label: eK.intl.string(eK.t.FCXUu0),
                                  action: () => h(it.n.MATCH_ALL),
                                  checked: s === it.n.MATCH_ALL,
                              }),
                          ],
                      })
                    : null,
                (0, a.jsx)(ia.rX, {
                    children: (0, a.jsx)(ia.Dr, {
                        id: "reset-all",
                        label: eK.intl.string(eK.t["3b//lO"]),
                        action: () => {
                            u(t.getDefaultSortOrder()), m(t.getDefaultLayout()), h(t.getDefaultTagSetting());
                        },
                    }),
                }),
            ],
        }),
    });
}
var ir = n(123292);
function io() {
    return Promise.resolve();
}
function id(e) {
    let { channel: t, closePopout: n, setPopoutRef: l } = e,
        s = (0, eg.OT)(t),
        { tagFilter: r } = (0, eh.R)(t.id),
        o = (0, eh.p)(),
        d = (0, x.bG)([D.A], () => D.A.keyboardModeEnabled),
        c = i.useCallback(
            (e) => {
                (0, tx.UA)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    tagId: e,
                    filterTagIds: Array.from(r),
                    added: !r.has(e),
                    location: {
                        page: e$.liQ.GUILD_CHANNEL,
                        section: e$.JJy.FORUM_CHANNEL_HEADER,
                        object: e$.ZSU.CHANNEL_TAG,
                    },
                }),
                    o.getState().toggleTagFilter(t.id, e);
            },
            [t, r, o],
        ),
        h = i.useCallback(() => {
            o.getState().setTagFilter(t.id, new Set()), d || n();
        }, [o, t.id, d, n]),
        g = (0, m.Ay)({
            id: `${t.id}-all-tags-dropdown-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: io,
            scrollToEnd: io,
        }),
        f = i.useRef(null);
    return (
        i.useEffect(() => {
            requestAnimationFrame(() => {
                if (null != f.current) {
                    let e = f.current.querySelector(`.${at.Tc}`);
                    null != e && e.focus();
                }
            });
        }, []),
        (0, a.jsxs)(l2.l, {
            ref: (e) => {
                l?.(e);
            },
            "aria-label": eK.intl.string(eK.t.TdqRTh),
            className: at.kL,
            children: [
                (0, a.jsx)("div", {
                    className: at.wx,
                    children: (0, a.jsxs)("div", {
                        className: at.LD,
                        children: [
                            (0, a.jsx)(p.D, {
                                color: "interactive-text-default",
                                variant: "heading-md/semibold",
                                className: at.TK,
                                children: eK.intl.string(eK.t.HPu3kq),
                            }),
                            (0, a.jsx)("div", {
                                className: at.d1,
                                children: (0, a.jsx)(N.E, {
                                    className: at.lT,
                                    color: "none",
                                    variant: "text-xs/medium",
                                    tabularNumbers: !0,
                                    children: r.size,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, a.jsx)(u.hD, {
                    navigator: g,
                    children: (0, a.jsx)(u.PR, {
                        children: (e) => {
                            let { ref: t, ...n } = e;
                            return (0, a.jsx)("div", {
                                ref: (e) => {
                                    (t.current = e), (f.current = e);
                                },
                                ...n,
                                className: at.I8,
                                children: s.map((e) =>
                                    (0, a.jsx)(
                                        aa.A,
                                        { className: at.Tc, tag: e, selected: r.has(e.id), onClick: () => c(e.id) },
                                        e.id,
                                    ),
                                ),
                            });
                        },
                    }),
                }),
                (0, a.jsx)("div", { className: at.me }),
                (0, a.jsx)(ir.Q, {
                    "aria-label": eK.intl.string(eK.t["98EPQP"]),
                    onClick: h,
                    text: eK.intl.string(eK.t["98EPQP"]),
                }),
            ],
        })
    );
}
var ic = n(37411);
function iu(e) {
    let { channel: t, guild: n, sidebarState: l } = e;
    return (0, a.jsx)(ej.Cp, { channel: t, children: (0, a.jsx)(ij, { channel: t, guild: n, sidebarState: l }) }, t.id);
}
let im = new (class {
    minWidth;
    maxWidth;
    gap;
    constructor({ minWidth: e, maxWidth: t, gap: n }) {
        q()(e < t, "minWidth needs to be smaller than maxWidth"),
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
function ih(e) {
    return `forum-grid-header-section-${e}`;
}
function ig(e) {
    let { itemRole: t, coords: n, section: l } = e;
    return (0, a.jsx)(
        "div",
        {
            className: r()(tZ.card, tZ.archivedDividerRow, tZ.columnsSpan),
            style: n,
            "data-item-role": t,
            children: (0, a.jsx)("div", {
                className: tZ.emptyMainCard,
                children: (0, a.jsx)(p.D, {
                    variant: "eyebrow",
                    className: tZ.archivedDivider,
                    id: ih(l),
                    children: eK.intl.string(eK.t["3+LO1w"]),
                }),
            }),
        },
        "section-divider",
    );
}
function ix(e) {
    let { section: t, coords: n, key: l, isShowingSearchResult: i, hasActiveThreads: s } = e;
    return () =>
        2 === t && !i && s
            ? (0, a.jsx)(
                  ig,
                  { section: t, coords: null == n ? void 0 : { ...n, position: "absolute" }, itemRole: "section" },
                  l,
              )
            : null;
}
function i_(e, t) {
    return `card-${e}-${t}`;
}
function ip(e) {
    if ("string" == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function ij(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: l,
            editorAdditionRowHeight: s,
            listViewCardHeights: o,
            formOpen: d,
            name: f,
        } = (0, ej.kU)((e) => {
            let {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: l,
                formOpen: a,
                cardHeightVersion: i,
                name: s,
            } = e;
            return {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: l,
                formOpen: a,
                name: s,
                cardHeightVersion: i,
            };
        }, c.x),
        {
            activeThreadIds: _,
            archivedThreadIds: p,
            searchResults: N,
            canLoadMore: S,
            loadMore: E,
            activeThreadsLoading: T,
            archivedThreadsLoading: y,
            loading: I,
            isSearchLoading: w,
            layoutType: R,
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: l, tagSetting: a } = (0, eh.R)(e.id),
                i = (0, eg.V3)({ channel: e, sortOrder: t, tagFilter: n, tagSetting: a, shouldAutomaticallyAck: !0 }),
                s = (0, x.bG)([te.A, z.A], () => {
                    let t = te.A.hasLoaded(e.guild_id),
                        n = z.A.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: r, canLoadMore: o, loadMore: d, loading: c } = (0, tt.Fr)(e, t, n, a),
                { searchResults: u, isSearchLoading: m } = (0, eg.cA)({ channelId: e.id });
            return (
                (0, eg.yz)(e, t, n, a),
                {
                    activeThreadIds: i,
                    archivedThreadIds: r,
                    searchResults: u,
                    canLoadMore: o,
                    loadMore: d,
                    loading: s || c || m,
                    archivedThreadsLoading: c,
                    activeThreadsLoading: s,
                    isSearchLoading: m,
                    layoutType: l,
                }
            );
        })(t),
        M = _.length > 0,
        P = M || p.length > 0,
        O = (0, G.A)(t),
        { tagFilter: F, tagSetting: U } = (0, eh.R)(t.id);
    (0, eg.o7)(t, F, U, d),
        (0, L.Ay)(() => {
            !d && f.length > 0 && tc.A.updateForumSearchQuery(t.id, f);
        });
    let W = (0, eg.O3)(t),
        $ = (0, eg.An)(t),
        q = i.useRef(null),
        { observePostVisibilityAnalytics: K } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: l } = e;
            tg({ guildId: t, channelId: n });
            let a = i.useRef(null),
                s = i.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let l = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, th.xx)(e, t, l) : (0, th.O_)(e, t, l);
                    }
                }, []);
            return (
                i.useEffect(() => {
                    let e = l.current?.getScrollerNode();
                    if (null != e)
                        return (
                            (a.current = new IntersectionObserver((e) => s(n, e), {
                                root: e,
                                rootMargin: "0px 100000px 0px 100000px",
                                threshold: 0.5,
                            })),
                            () => {
                                a.current?.disconnect(), (a.current = null);
                            }
                        );
                }, [n, s, l]),
                {
                    observePostVisibilityAnalytics: i.useCallback(
                        (e, t) => {
                            null == e ? (0, th.O_)(n, t, Date.now()) : a.current?.observe(e);
                        },
                        [n],
                    ),
                }
            );
        })({ scrollerRef: q, channelId: t.id, guildId: t.guild_id }),
        X = R === g.C.GRID,
        { searchQuery: J } = (0, eg.cA)({ channelId: t.id }),
        Q = null != N && null != J && J.length > 0,
        Y = i.useRef(null),
        { containerRef: Z, containerWidth: ee } = ac();
    i.useEffect(() => {
        if (null == Y.current && null != t.id) {
            let e = eD.Ay.getSidebarState(t.id);
            null != e && e.type === e5.PE.VIEW_THREAD && (Y.current = e.channelId);
        }
    }, [t.id]);
    let { columns: et } = i.useMemo(() => (X ? im.getRenderOptions(ee) : aF), [X, ee]),
        en = i.useMemo(() => (I ? Math.round((window.innerHeight - 200) / 118) : 0), [I]),
        { showResolvedFlags: el } = (0, H.T)(t.id),
        ea = t.isModeratorReportChannel(),
        ei = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / az(im.getWidth(ee))) * et;
            return T ? e : 0;
        }, [ee, et, T]),
        es = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / az(im.getWidth(ee))) * et;
            return y ? e : 0;
        }, [ee, et, y]),
        er = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / az(im.getWidth(ee))) * et;
            return w && Q ? e : 0;
        }, [ee, et, w, Q]),
        eo = i.useMemo(() => {
            if (X)
                if (!W && Q) return [1, 0];
                else if (!$) return [1, _.length + ei, 0];
                else if (Q) return [1, N.length + er, 0];
                else if (ea && !el) return [1, _.length + ei, 0];
                else return [1, _.length + ei, p.length + es];
            if (!W && Q) return [1, 1];
            if (!$) return [1, _.length, 1];
            if (Q) return [1, N.length, 0, en];
            if (ea && !el) return [1, _.length, 0, en];
            else return [1, _.length, p.length, en];
        }, [X, Q, _.length, p.length, W, $, en, N, ei, es, er, el, ea]),
        ed = i.useMemo(
            () =>
                !W && Q
                    ? [[], []]
                    : $
                      ? Q
                          ? [[], N, [], []]
                          : ea && !el
                            ? [[], _, [], []]
                            : [[], _, p, []]
                      : [[], _, []],
            [Q, W, $, N, _, p, el, ea],
        ),
        ec = i.useCallback(
            (e, n) => {
                (0, tx.Ml)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: { page: e$.liQ.GUILD_CHANNEL, section: e$.JJy.FORUM_CHANNEL_POST },
                }),
                    n ? (0, e7.N9)(e, { source: ic.H9.BROWSER }) : ((Y.current = e.id), (0, tl.JA)(e));
            },
            [t.guild_id, t.id, Y],
        ),
        [eu, em] = i.useState(l + s - 24),
        ex = i.useCallback(
            (e, n, l) =>
                0 === e
                    ? (0, a.jsx)(
                          iN,
                          {
                              channel: t,
                              isEmpty: !M,
                              isSearchLoading: w,
                              numResults: N?.length,
                              coords: n,
                              onHeightChange: em,
                              children:
                                  !I && (0, a.jsx)(nE, { channel: t, hasAnyThread: P, hasActiveThreads: M }, t.id),
                          },
                          "forum-channel-header",
                      )
                    : 2 !== e || $
                      ? 1 === e && Q && !W
                          ? (0, a.jsx)(iv, { channel: t, coords: n }, "archive-or-search-result")
                          : l()
                      : (0, a.jsx)(ib, { channel: t, coords: n }, "archived-missing-reading-history-perm"),
            [Q, $, N, W, t, M, w, I, P],
        ),
        ef = (0, x.bG)([td.A], () => td.A.hasHidden(t.id)),
        e_ = { editorHeight: l, isGridLayout: X },
        ep = i.useRef(e_);
    i.useEffect(() => {
        ep.current = e_;
    }),
        i.useEffect(() => {
            let { editorHeight: e, isGridLayout: t } = ep.current,
                n = t ? eS : q,
                l = n.current?.getScrollerState();
            null != l && !ef && l.scrollTop > e && n.current?.scrollTo({ to: 0 });
        }, [ef]);
    let {
            updateListScrollerRef: eb,
            renderListSection: ev,
            renderListItem: eC,
            getListSectionHeight: eA,
            getListItemHeight: eN,
        } = (function (e) {
            let {
                    listRef: t,
                    hasActiveThreads: n,
                    threadIdsBySection: l,
                    listViewCardHeights: s,
                    editorHeight: o,
                    editorAdditionRowHeight: d,
                    renderSectionOrItem: c,
                    goToThread: u,
                    observePostVisibilityAnalytics: m,
                    isShowingSearchResult: h,
                } = e,
                g = (0, x.bG)([ts.A], () => ts.A.getChannelId()),
                f = i.useCallback(
                    (e) => (n) => {
                        (t.current = n), (e.current = n?.getScrollerNode() ?? null);
                    },
                    [t],
                ),
                _ = i.useCallback(
                    (e) => ix({ section: e.section, isShowingSearchResult: h, hasActiveThreads: n })(),
                    [n, h],
                ),
                p = i.useCallback(
                    (e) =>
                        c(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, a.jsx)(
                                          "div",
                                          {
                                              "data-item-role": "item",
                                              className: r()(tZ.loadingCard, tZ[`loadingCard-${e.row % 3}`]),
                                          },
                                          `loading-${e.row}`,
                                      );
                            let t = l[e.section][e.row],
                                n = null != g && (0, V.iU)(g) ? eY : tX.Ay;
                            return (0, a.jsx)(
                                "li",
                                {
                                    className: tZ.card,
                                    "data-item-role": "item",
                                    children: (0, a.jsx)(j.F, {
                                        children: (0, a.jsx)(n, {
                                            className: tZ.mainCard,
                                            threadId: t,
                                            goToThread: u,
                                            observePostVisibilityAnalytics: m,
                                        }),
                                    }),
                                },
                                `${e.section}-${t}`,
                            );
                        }),
                    [c, l, g, u, m],
                ),
                b = i.useCallback(
                    (e, t) => {
                        if (0 === e) return o + d;
                        let n = s[l[e][t]];
                        return null == n ? 104 : n + 8;
                    },
                    [l, s, o, d],
                );
            return {
                updateListScrollerRef: f,
                renderListSection: _,
                renderListItem: p,
                getListSectionHeight: i.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: b,
            };
        })({
            listRef: q,
            hasActiveThreads: M,
            threadIdsBySection: ed,
            listViewCardHeights: o,
            editorHeight: l,
            editorAdditionRowHeight: s,
            renderSectionOrItem: ex,
            goToThread: ec,
            observePostVisibilityAnalytics: K,
            isShowingSearchResult: Q,
        }),
        eS = i.useRef(null),
        {
            updateMasonryListScrollerRef: eE,
            getItemKey: eT,
            renderGridSection: ey,
            renderGridItem: eI,
            getGridSectionHeight: ew,
            getSectionProps: eR,
            handleGridFocus: ek,
        } = (function (e) {
            let {
                    masonryListScrollerRef: t,
                    threadIdsBySection: n,
                    goToThread: l,
                    renderSectionOrItem: s,
                    hasActiveThreads: o,
                    isShowingSearchResult: d,
                    canSearchForumPosts: c,
                    canViewArchivedPosts: u,
                    observePostVisibilityAnalytics: m,
                    focusedThreadId: h,
                    headerHeight: g,
                } = e,
                x = i.useRef(null),
                f = i.useCallback(
                    (e) => {
                        (t.current = e), (x.current = e?.getScrollerNode());
                    },
                    [t],
                ),
                _ = i.useCallback(
                    (e, n) => {
                        let { current: l } = t;
                        if (null == l) return;
                        let a = document.querySelector(e);
                        if (null == a) return;
                        let i = l.getCoordsMap()[n],
                            s = null != i ? i.height + 20 : 200;
                        l.scrollIntoViewNode({
                            node: a,
                            padding: s,
                            callback() {
                                requestAnimationFrame(() => {
                                    document.querySelector(e)?.focus({ preventScroll: !0 });
                                });
                            },
                        }),
                            (h.current = ip(n));
                    },
                    [t, h],
                ),
                p = i.useCallback(
                    (e) => {
                        let t = ip(e);
                        if (null == t) return;
                        let n = eP.A.getChannel(t);
                        null != n && l(n, !0);
                    },
                    [l],
                ),
                j = i.useCallback(
                    function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (0 === n[e].length) return `section-${e}-${t}`;
                        {
                            let l = n[e][t];
                            return null == l ? i_(e, t) : i_(e, l);
                        }
                    },
                    [n],
                ),
                b = i.useCallback(
                    (e, t, n) =>
                        s(e, t, ix({ section: e, coords: t, key: n, isShowingSearchResult: d, hasActiveThreads: o })),
                    [s, o, d],
                ),
                v = i.useCallback((e) => (0 === e ? {} : { role: "grid", "aria-labelledby": `#${ih(e)}` }), []);
            return {
                updateMasonryListScrollerRef: f,
                masonryListContainerRef: x,
                focusedThreadId: h,
                handleGridFocus: _,
                handleGridSelect: p,
                getItemKey: j,
                renderGridSection: b,
                renderGridItem: i.useCallback(
                    (e, t, i, s, o) => {
                        if (0 === e) return null;
                        let d = n[e][t];
                        return null != d
                            ? (0, a.jsx)(
                                  a0,
                                  {
                                      id: `${s}`,
                                      threadId: d,
                                      className: r()(tZ.card, tZ.mainCard),
                                      goToThread: l,
                                      observePostVisibilityAnalytics: m,
                                      coords: i,
                                      gridCoords: o.coordinates[s],
                                      gridSectionBoundaries: o.boundaries,
                                  },
                                  s,
                              )
                            : __OVERLAY__
                              ? null
                              : (0, a.jsx)(
                                    "div",
                                    {
                                        style: { ...i },
                                        "data-item-role": "item",
                                        className: r()(tZ.loadingCard, tZ[`loadingCard-${t % 3}`]),
                                    },
                                    s,
                                );
                    },
                    [n, l, m],
                ),
                getSectionProps: v,
                getGridSectionHeight: i.useCallback(
                    (e) => (0 === e ? g - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && d && !c ? 40 : 0),
                    [g, d, c, o, u],
                ),
            };
        })({
            masonryListScrollerRef: eS,
            threadIdsBySection: ed,
            goToThread: ec,
            renderSectionOrItem: ex,
            hasActiveThreads: M,
            isShowingSearchResult: Q,
            canSearchForumPosts: W,
            canViewArchivedPosts: $,
            observePostVisibilityAnalytics: K,
            focusedThreadId: Y,
            headerHeight: eu,
        });
    !(function (e) {
        let {
            masonryListScrollerRef: t,
            containerWidth: n,
            isGridLayout: l,
            threadIdsBySection: a,
            focusedThreadId: s,
            parentId: r,
        } = e;
        i.useEffect(() => {
            if (l) {
                let e = setTimeout(() => {
                    if (null == t.current || null == s.current) return;
                    let e = s.current;
                    if ("string" != typeof e) return;
                    null == eD.Ay.getSidebarState(r) && (s.current = null);
                    let n = a.findIndex((t) => t.find((t) => t === e)),
                        l = t.current.getCoordsMap(),
                        i = l[`__section__${n}`],
                        o = l[i_(n, e)];
                    null != i &&
                        null != o &&
                        t.current.scrollIntoViewRect({
                            start: i.top + o.top - 100,
                            end: i.top + o.top + o.height + 50,
                        });
                }, 0);
                return () => clearTimeout(e);
            }
        }, [r, n, l, a, s, t]);
    })({
        masonryListScrollerRef: eS,
        containerWidth: ee,
        isGridLayout: X,
        threadIdsBySection: ed,
        parentId: t.id,
        focusedThreadId: Y,
    });
    let eM = i.useCallback(() => {
            if (Q) return;
            let e = X ? eS.current?.getScrollerState() : q.current?.getScrollerState();
            if (null == e) return;
            (0, tx.pO)({ guildId: t.guild_id, channelId: t.id });
            let n = e.scrollTop + e.offsetHeight;
            e.scrollHeight - n < (X ? Math.max(200, az(ee)) : 200) && E();
        }, [Q, X, t.guild_id, t.id, ee, E]),
        eL = (0, x.bG)([D.A], () => D.A.keyboardModeEnabled),
        eO = (0, ej.kU)((e) => e.titleFocused || e.bodyFocused, c.x),
        eF = (function (e) {
            let { id: t, isEnabled: n, setFocus: l } = e,
                a = i.useRef(null),
                s = i.useRef(!1),
                r = i.useRef(null),
                o = i.useRef(n);
            i.useLayoutEffect(() => {
                o.current = n;
            }, [n]);
            let d = i.useCallback((e) => (r.current ?? document).querySelector(e), []),
                c = i.useCallback(
                    (e, t) => {
                        o.current && l(e, t);
                    },
                    [l],
                ),
                u = i.useCallback((e) => {
                    o.current && document.querySelector(e)?.focus();
                }, []),
                m = i.useCallback(
                    (e) => {
                        a.current = e;
                        let n = (0, aH.Mz)(e, aV),
                            l = (0, aH.HP)(e);
                        c(n, l), (0, aB.T)(t, l, !0);
                    },
                    [t, c],
                ),
                [g, x] = i.useState(!1),
                f = i.useRef(g);
            i.useLayoutEffect(() => {
                f.current = g;
            }, [g]),
                i.useLayoutEffect(() => {
                    let e = r.current;
                    if (null != e)
                        return (
                            e.addEventListener("focusin", n),
                            e.addEventListener("focusout", l),
                            e.addEventListener("focus", i),
                            e.addEventListener("scroll", o, { passive: !0 }),
                            () => {
                                e.removeEventListener("focusin", n),
                                    e.removeEventListener("focusout", l),
                                    e.removeEventListener("focus", i),
                                    e.removeEventListener("scroll", o);
                            }
                        );
                    function n() {
                        x(!0);
                    }
                    function l(e) {
                        e.currentTarget.contains(e.relatedTarget) ||
                            (x(!1),
                            requestAnimationFrame(() => {
                                let e = a.current;
                                null !== e && null == d((0, aH.Mz)(e, aV)) && u((0, aH.Mz)(t, "data-grid-id"));
                            }));
                    }
                    function i() {
                        let e = r.current;
                        if (f.current || null == e) return;
                    }
                    function o() {
                        s.current = !0;
                    }
                }, [t, c, u, m, d]);
            let _ = i.useCallback(
                    (e) => {
                        if (!o.current) return;
                        let t = a.current,
                            n = r.current;
                        if (null == t) return;
                        let l = (0, aH.Mz)(t, aV),
                            i = n?.querySelector(l);
                        if (null == i) return;
                        let s = parseInt(i.getAttribute("data-grid-section") ?? ""),
                            c = parseInt(i.getAttribute("aria-rowindex")),
                            u = parseInt(i.getAttribute("aria-colindex"));
                        switch ((aq.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                            case h.D$.RIGHT: {
                                let e = d(aK({ section: s, row: c, column: u + 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(aV);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.LEFT: {
                                let e = d(aK({ section: s, row: c, column: u - 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(aV);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.DOWN: {
                                let e = d(aK({ section: s, row: c + 1, column: u }));
                                if ((null == e && (e = d(aK({ section: s + 1, row: 0, column: u }))), null != e)) {
                                    let t = e.getAttribute(aV);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.UP: {
                                let e;
                                if (0 === c) {
                                    let t = parseInt(i.getAttribute(a$));
                                    null == (e = d(aK({ section: s - 1, row: t, column: u }))) &&
                                        (e = d(aK({ section: s - 1, row: t - 1, column: u })));
                                } else e = d(aK({ section: s, row: c - 1, column: u }));
                                if (null != e) {
                                    let t = e.getAttribute(aV);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.SPACE:
                            case h.D$.ENTER: {
                                if (e.repeat) return;
                                let t = a.current;
                                if (null != t) {
                                    let n = d((0, aH.Mz)(t, aV)),
                                        l = n?.ownerDocument ?? document,
                                        a = n === l.activeElement;
                                    null != n && a && (e.preventDefault(), e.stopPropagation(), n?.click());
                                }
                            }
                        }
                    },
                    [d, m],
                ),
                p = i.useCallback(
                    (e) => {
                        a.current = null != e ? (0, aH.t$)(t, e) : null;
                    },
                    [t],
                );
            return i.useMemo(() => ({ id: t, containerProps: { onKeyDown: _, ref: r }, setFocus: p }), [t, _, p]);
        })({ id: "forum-grid-view", isEnabled: X && eL && !eO, setFocus: ek }),
        eU = (function (e) {
            let { listRef: t, padding: n, channel: l, isEnabled: a } = e,
                s = i.useCallback(
                    (e) => {
                        let l = t.current,
                            a = document.querySelector(e);
                        null != a &&
                            l?.scrollIntoViewNode({
                                node: a,
                                padding: n,
                                callback: () => {
                                    document.querySelector(e)?.focus({ preventScroll: !0 });
                                },
                            });
                    },
                    [n, t],
                ),
                r = i.useCallback(
                    () =>
                        new Promise((e) => {
                            let n = t.current;
                            n?.scrollToTop({ callback: () => requestAnimationFrame(e) });
                        }),
                    [t],
                ),
                o = i.useCallback(
                    () =>
                        new Promise((e) => {
                            let n = t.current;
                            n?.scrollToBottom({ callback: () => requestAnimationFrame(e) });
                        }),
                    [t],
                );
            return (0, m.Ay)({
                id: `forum-channel-list-${l.id}`,
                isEnabled: a,
                scrollToStart: r,
                scrollToEnd: o,
                setFocus: s,
            });
        })({ listRef: q, padding: 96, isEnabled: !X && eL && !eO, channel: t }),
        ez = i.useCallback(
            (e, n, l) => (0 === e ? 0 : az(l, t.isMediaChannel() ? aO.SIXTEEN_BY_NINE : aO.THREE_BY_TWO)),
            [t],
        ),
        { ref: eG, ...eB } = eF.containerProps,
        eH = eD.Ay.getSidebarState(t.id),
        eV = null != eH && (0, eD.JU)(eH),
        eW = (0, x.bG)([eD.Ay], () => eD.Ay.getSection(t.id)) === e$.YvQ.MEMBERS;
    return (0, a.jsx)("div", {
        className: tZ.container,
        ref: Z,
        "data-member-list-open": eW,
        children: (0, a.jsx)(b.sk, {
            children: (e) =>
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        d &&
                            (0, a.jsx)(k.A, {
                                channel: t,
                                draftType: ta.C.FirstThreadMessage,
                                className: tZ.uploadArea,
                                style: { right: eV && n?.isThreadSidebarFloating ? n.threadSidebarWidth : 0 },
                            }),
                        (0, a.jsx)(iC, { channel: t }),
                        (0, a.jsx)(v.A, { children: (0, a.jsx)(j.H, { children: eK.intl.string(eK.t.B2panI) }) }),
                        O
                            ? (0, a.jsx)("div", {
                                  className: tZ.optInNotice,
                                  children: (0, a.jsx)(B.A, { channel: t }),
                              })
                            : null,
                        X
                            ? (0, a.jsx)(aY, {
                                  navigator: eF,
                                  children: (0, a.jsx)(
                                      C.f,
                                      {
                                          ref: (e) => {
                                              (eG.current = e?.getScrollerNode() ?? null), eE(e);
                                          },
                                          itemGutter: 16,
                                          padding: 24,
                                          className: tZ.grid,
                                          columns: et,
                                          sections: eo,
                                          getItemKey: eT,
                                          getSectionHeight: ew,
                                          getItemHeight: ez,
                                          renderSection: ey,
                                          renderItem: eI,
                                          getSectionProps: eR,
                                          onScroll: S ? eM : void 0,
                                          chunkSize: 350,
                                          ...eB,
                                          ...e,
                                      },
                                      R,
                                  ),
                              })
                            : (0, a.jsx)(u.hD, {
                                  navigator: eU,
                                  children: (0, a.jsx)(u.PR, {
                                      children: (t) => {
                                          let { ref: n, ...l } = t;
                                          return (0, a.jsx)(
                                              A.Ei,
                                              {
                                                  ref: eb(n),
                                                  className: tZ.list,
                                                  sections: eo,
                                                  sectionHeight: eA,
                                                  rowHeight: eN,
                                                  renderRow: eC,
                                                  renderSection: ev,
                                                  chunkSize: 150,
                                                  onScroll: S ? eM : void 0,
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
function ib(e) {
    let { channel: t, coords: n } = e,
        l = (0, P.Ay)(t);
    return (0, a.jsx)("div", {
        className: r()(tZ.missingReadHistoryPermission, tZ.columnsSpan),
        style: n,
        children: (0, a.jsx)(N.E, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eK.intl.format(eK.t.TycmzM, { channelName: l }),
        }),
    });
}
function iv(e) {
    let { channel: t, coords: n } = e,
        l = (0, P.Ay)(t);
    return (0, a.jsx)("div", {
        className: r()(tZ.missingReadHistoryPermission, tZ.columnsSpan),
        style: n,
        children: (0, a.jsx)(N.E, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eK.intl.format(eK.t.OWZJdS, { channelName: l }),
        }),
    });
}
function iC(e) {
    let { channel: t } = e,
        n = i.useCallback(() => {
            tc.A.resort(t.id);
        }, [t]),
        l = (0, x.bG)([tu.A], () => tu.A.getNewThreadCount());
    return 0 === l
        ? null
        : (0, a.jsx)(S.D, {
              className: tZ.newPostsButton,
              onClick: n,
              children: (0, a.jsx)(N.E, {
                  color: "text-brand",
                  variant: "text-md/medium",
                  children: eK.intl.format(eK.t.ue1qfM, { count: l }),
              }),
          });
}
function iA() {
    return Promise.resolve();
}
function iN(e) {
    let t,
        n,
        l,
        { channel: s, isEmpty: o, isSearchLoading: j, numResults: b, children: v, coords: C, onHeightChange: A } = e,
        {
            name: R,
            formOpen: k,
            titleFocused: L,
            hasClickedForm: P,
            textAreaState: z,
            onboardingExpanded: G,
            setEditorAdditionRowHeight: B,
        } = (0, ej.kU)((e) => {
            let {
                name: t,
                formOpen: n,
                titleFocused: l,
                hasClickedForm: a,
                textAreaState: i,
                onboardingExpanded: s,
                setEditorAdditionRowHeight: r,
            } = e;
            return {
                name: t,
                formOpen: n,
                titleFocused: l,
                hasClickedForm: a,
                textAreaState: i,
                onboardingExpanded: s,
                setEditorAdditionRowHeight: r,
            };
        }, c.x),
        { tagFilter: H, layoutType: $ } = (0, eh.R)(s.id),
        q = (0, ej.ST)(),
        K = (0, eh.p)(),
        X = (0, x.bG)([ti.A], () => ti.A.canChatInGuild(s.guild_id)),
        J = (0, eg.S4)(s),
        Q = (0, tn.AI)(s),
        [Y, Z] = i.useState(Q),
        [, ee] = (0, F.c)(s.getGuildId() ?? void 0),
        et = (0, W.V)(s),
        en = X && (Q || (Y && ee)) && !et,
        el = s.isMediaChannel();
    i.useEffect(() => {
        Q && Z(!0);
    }, [Q]);
    let { ref: ea, height: ei } = (0, M.Ay)();
    i.useEffect(() => {
        null != ei && A(ei);
    }, [A, ei]);
    let es = i.useCallback(() => {
        d()(() => {
            null != ea.current && q.getState().setEditorHeight(ea.current.offsetHeight);
        });
    }, [ea, q]);
    i.useLayoutEffect(es, [es, o, en, G]), (0, to.Vo)({ event: e$.jej.REMEASURE_TARGET, handler: es });
    let er = (0, x.bG)([tr.A], () => tr.A.getUploads(s.id, ta.C.FirstThreadMessage)),
        eo = (0, eg.Hv)(s),
        ed = i.useRef(null),
        ec = i.useRef(null),
        [eu, em] = i.useState(0),
        { width: ex } = (0, x.bG)([eG.A], () => eG.A.windowSize()),
        ef = ed.current?.getBoundingClientRect()?.width,
        e_ = i.useRef(null),
        ep = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = ec.current,
            t = e?.children?.[0];
        if (null != ed.current && null != t && null != t.children) {
            let { left: e, top: n } = ed.current.getBoundingClientRect(),
                l = 0;
            for (let a of t.children) {
                let { right: t, top: i, height: s } = a.getBoundingClientRect();
                if (i - n > s) break;
                t - e > l && (l = t - e);
            }
            em(l);
        }
    }, [s.availableTags, ex, ef, H]);
    let eb = R.length > 0 && !k && (j || null != b),
        ev =
            !__OVERLAY__ &&
            !P &&
            !k &&
            L &&
            (0 === z.textValue.trim().length || z.textValue.trim() === eo) &&
            0 === er.length &&
            !et;
    i.useLayoutEffect(() => {
        if (!(eb || ev)) return B(0);
        null != e_.current && B(e_.current.clientHeight);
    }, [B, eb, ev, e_]);
    let eC = (0, m.Ay)({
            id: `${s.id}-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: iA,
            scrollToEnd: iA,
            orientation: h.Gl.HORIZONTAL,
        }),
        { role: eA, onFocus: eN, ...eS } = (0, u.rm)("forum-channel-header"),
        eE = i.useRef(null),
        eT =
            ((t = i.useRef(!1)),
            (n = (0, x.bG)([D.A], () => D.A.keyboardModeEnabled)),
            (l = i.useCallback(
                (e) => {
                    t.current = e.shiftKey;
                },
                [t],
            )),
            i.useLayoutEffect(
                () => (
                    n ? window.addEventListener("keydown", l) : window.removeEventListener("keydown", l),
                    () => window.removeEventListener("keydown", l)
                ),
                [n, l],
            ),
            t),
        ey = i.useCallback(
            (e) => {
                eN(), e.target !== ea.current || eT.current || eE.current?.focus();
            },
            [eN, ea, eT],
        ),
        eI = i.useMemo(() => (et ? (0, V.Yj)(s.availableTags) : s.availableTags), [s.availableTags, et]);
    return (0, a.jsx)(
        "div",
        {
            className: r()(tZ.card, tZ.headerRow, tZ.columnsSpan),
            ref: ea,
            onFocus: ey,
            ...eS,
            style: { ...C, position: $ === g.C.GRID ? "absolute" : "static", height: "auto" },
            children: (0, a.jsxs)(to.Ah, {
                children: [
                    null != s.guild_id
                        ? (0, a.jsx)(U.A, {
                              className: r()(tZ.newMemberBanner, { [tZ.gridViewBanner]: $ === g.C.GRID }),
                              guildId: s.guild_id,
                              channel: s,
                          })
                        : null,
                    (0, a.jsx)("div", {
                        className: r()(tZ.mainCard, tZ.header, { [tZ.headerWithMatchingPosts]: eb || ev }),
                        children: (0, a.jsx)(ag, {
                            parentChannel: s,
                            onChange: es,
                            isSearchLoading: j,
                            numResults: b,
                            canCreatePost: en,
                            inputRef: eE,
                        }),
                    }),
                    (eb || ev) &&
                        (0, a.jsxs)("div", {
                            className: tZ.matchingPostsRow,
                            ref: e_,
                            children: [
                                eb &&
                                    (0, a.jsxs)("div", {
                                        className: tZ.matchingPosts,
                                        children: [
                                            (0, a.jsx)(p.D, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: j
                                                    ? eK.intl.string(eK.t["/9i3qq"])
                                                    : 0 === b
                                                      ? eK.intl.string(eK.t.DbgHxi)
                                                      : eK.intl.formatToPlainString(eK.t["tBz/8b"], {
                                                            numPosts: b ?? "",
                                                            query: R,
                                                        }),
                                            }),
                                            !j &&
                                                (0, a.jsx)(S.D, {
                                                    onClick: () => {
                                                        (0, tx.hT)({ guildId: s.guild_id, channelId: s.id }),
                                                            tc.A.clearForumSearch(s.id),
                                                            q.getState().setName("");
                                                    },
                                                    children: (0, a.jsx)(N.E, {
                                                        variant: "text-xs/semibold",
                                                        color: "text-brand",
                                                        className: tZ.clear,
                                                        children: eK.intl.string(eK.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                (0, a.jsx)("div", { className: tZ.tagsSpacer }),
                                ev
                                    ? en
                                        ? (0, a.jsxs)("div", {
                                              className: tZ.startPostHelp,
                                              children: [
                                                  (0, a.jsx)(E.e, {
                                                      shortcut: "SHIFT",
                                                      className: tZ.keyboardShortcut,
                                                  }),
                                                  (0, a.jsx)(N.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-subtle",
                                                      children: "+",
                                                  }),
                                                  (0, a.jsx)(E.e, {
                                                      shortcut: "ENTER",
                                                      className: tZ.keyboardShortcut,
                                                  }),
                                                  (0, a.jsx)(N.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-subtle",
                                                      children: eK.intl.string(eK.t.ZvJ0yh),
                                                  }),
                                              ],
                                          })
                                        : (0, a.jsxs)("div", {
                                              className: tZ.startPostHelp,
                                              children: [
                                                  (0, a.jsx)(T.E, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      height: 14,
                                                      width: 14,
                                                      className: tZ.warnIcon,
                                                  }),
                                                  (0, a.jsx)(N.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-subtle",
                                                      children: eK.intl.string(eK.t.iyzwnD),
                                                  }),
                                              ],
                                          })
                                    : null,
                            ],
                        }),
                    (0, a.jsx)(nk, { channel: s, onChange: es }),
                    (0, a.jsxs)("div", {
                        className: tZ.tagsContainer,
                        ref: ed,
                        children: [
                            (0, a.jsx)(iS, { channel: s }),
                            eI.length > 0
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)("div", { className: tZ.divider }),
                                          (0, a.jsx)("div", {
                                              className: tZ.tagList,
                                              ref: ec,
                                              children: (0, a.jsx)(u.hD, {
                                                  navigator: eC,
                                                  children: (0, a.jsx)(u.PR, {
                                                      children: (e) => {
                                                          let { ref: t, ...n } = e;
                                                          return (0, a.jsx)("div", {
                                                              className: tZ.tagListInner,
                                                              ref: t,
                                                              ...n,
                                                              children: eI.map((e) =>
                                                                  (0, a.jsx)(
                                                                      aa.A,
                                                                      {
                                                                          tag: e,
                                                                          onClick: () => {
                                                                              var t;
                                                                              return (
                                                                                  (t = e.id),
                                                                                  void ((0, tx.UA)({
                                                                                      guildId: s.guild_id,
                                                                                      channelId: s.id,
                                                                                      tagId: t,
                                                                                      filterTagIds: Array.from(H),
                                                                                      added: !H.has(t),
                                                                                      location: {
                                                                                          page: e$.liQ.GUILD_CHANNEL,
                                                                                          section:
                                                                                              e$.JJy
                                                                                                  .FORUM_CHANNEL_HEADER,
                                                                                          object: e$.ZSU.CHANNEL_TAG,
                                                                                      },
                                                                                  }),
                                                                                  K.getState().toggleTagFilter(s.id, t))
                                                                              );
                                                                          },
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
                                          (0, a.jsx)(y.Y, {
                                              targetElementRef: ep,
                                              renderPopout: (e) => {
                                                  let { closePopout: t, setPopoutRef: n } = e;
                                                  return (0, a.jsx)(id, {
                                                      channel: s,
                                                      closePopout: t,
                                                      setPopoutRef: n,
                                                  });
                                              },
                                              position: "bottom",
                                              align: "right",
                                              children: (e, t) => {
                                                  let { isShown: n } = t;
                                                  return (0, a.jsxs)(_.$n, {
                                                      ...e,
                                                      "data-migration-pending": !0,
                                                      buttonRef: ep,
                                                      size: _.$n.Sizes.MIN,
                                                      color: _.$n.Colors.CUSTOM,
                                                      className: r()(tZ.tagsButton, {
                                                          [tZ.tagsButtonWithCount]: H.size > 0,
                                                      }),
                                                      style: { left: eu },
                                                      innerClassName: tZ.tagsButtonInner,
                                                      "aria-label":
                                                          H.size > 0
                                                              ? eK.intl.string(eK.t.IkpM1T)
                                                              : eK.intl.string(eK.t["9vKK/N"]),
                                                      children: [
                                                          H.size > 0
                                                              ? (0, a.jsx)("div", {
                                                                    className: tZ.countContainer,
                                                                    children: (0, a.jsx)(N.E, {
                                                                        className: tZ.countText,
                                                                        color: "none",
                                                                        variant: "text-xs/medium",
                                                                        children: H.size,
                                                                    }),
                                                                })
                                                              : eK.intl.string(eK.t.fZ8hzm),
                                                          n
                                                              ? (0, a.jsx)(I.t, {
                                                                    size: "custom",
                                                                    color: "currentColor",
                                                                    width: 20,
                                                                })
                                                              : (0, a.jsx)(w.a, {
                                                                    size: "custom",
                                                                    color: "currentColor",
                                                                    width: 20,
                                                                }),
                                                      ],
                                                  });
                                              },
                                          }),
                                          (0, a.jsxs)(_.$n, {
                                              "data-migration-pending": !0,
                                              size: _.$n.Sizes.MIN,
                                              color: _.$n.Colors.CUSTOM,
                                              className: r()(tZ.tagsButton, tZ.tagsButtonPlaceholder),
                                              innerClassName: tZ.tagsButtonInner,
                                              "aria-label": eK.intl.string(eK.t.IkpM1T),
                                              children: [
                                                  H.size > 0
                                                      ? (0, a.jsx)("div", {
                                                            className: tZ.countContainer,
                                                            children: (0, a.jsx)(N.E, {
                                                                className: tZ.countText,
                                                                color: "none",
                                                                variant: "text-xs/medium",
                                                                children: H.size,
                                                            }),
                                                        })
                                                      : null,
                                                  (0, a.jsx)(I.t, { size: "custom", color: "currentColor", width: 24 }),
                                              ],
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    v,
                    J &&
                        !el &&
                        !et &&
                        (0, a.jsx)(O.Ay, {
                            contentTypes: [f.M.FORUM_CHANNEL_HELPER_CARD],
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                return t === f.M.FORUM_CHANNEL_HELPER_CARD ? (0, a.jsx)(nD, { onDismiss: n }) : null;
                            },
                        }),
                ],
            }),
        },
        "create-form",
    );
}
function iS(e) {
    let { channel: t } = e,
        n = t.isMediaChannel(),
        l = i.useRef(null);
    return (0, a.jsx)(y.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, a.jsx)(is, { channel: t, closePopout: n });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, a.jsxs)(_.$n, {
                ...e,
                "data-migration-pending": !0,
                buttonRef: l,
                size: _.$n.Sizes.MIN,
                color: _.$n.Colors.CUSTOM,
                className: tZ.sortDropdown,
                innerClassName: tZ.sortDropdownInner,
                "aria-label": n ? eK.intl.string(eK.t.JxU0wr) : eK.intl.string(eK.t.xyYt8A),
                children: [
                    (0, a.jsx)(R.J, { size: "xs", color: "currentColor" }),
                    (0, a.jsx)(N.E, {
                        className: tZ.sortDropdownText,
                        variant: "text-sm/medium",
                        color: "interactive-text-default",
                        children: (0, a.jsx)("span", {
                            className: tZ.sortDropdownTextHighContrastForcedColor,
                            children: n ? eK.intl.string(eK.t.JxU0wr) : eK.intl.string(eK.t.xyYt8A),
                        }),
                    }),
                    i
                        ? (0, a.jsx)(I.t, { size: "custom", color: "currentColor", width: 20 })
                        : (0, a.jsx)(w.a, { size: "custom", color: "currentColor", width: 20 }),
                ],
            });
        },
    });
}

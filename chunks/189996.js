n.r(t), n.d(t, { default: () => sm });
var l,
    i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(756287),
    c = n.n(o),
    d = n(942381),
    u = n(837381),
    m = n(887129),
    h = n(741918),
    x = n(371444),
    g = n(17928),
    f = n(554146),
    j = n(862482),
    p = n(534514),
    v = n(707554),
    A = n(312138),
    C = n(140735),
    N = n(92008),
    b = n(475825),
    E = n(834730),
    S = n(939249),
    y = n(475358),
    T = n(695366),
    R = n(922016),
    k = n(900797),
    I = n(847374),
    M = n(112173),
    _ = n(738876),
    w = n(765671),
    D = n(964486),
    L = n(775602),
    P = n(47167),
    O = n(379848),
    F = n(870136),
    U = n(575293),
    z = n(857071),
    G = n(228098),
    H = n(157259),
    B = n(212007),
    V = n(892340),
    W = n(715757),
    $ = n(284009),
    q = n.n($),
    K = n(989349),
    X = n.n(K),
    Q = n(990078),
    Y = n(247928),
    J = n(97808),
    Z = n(778712),
    ee = n(138134),
    et = n(777666),
    en = n(661531),
    el = n(863610),
    ei = n(534890),
    es = n(144165),
    er = n(119031),
    ea = n(104171),
    eo = n(139716),
    ec = n(847599),
    ed = n(114166),
    eu = n(810181),
    em = n(390248),
    eh = n(422844),
    ex = n(435470),
    eg = n(473503),
    ef = n(256265),
    ej = n(969043),
    ep = n(710948),
    ev = n(218152),
    eA = n(52933),
    eC = n(504261),
    eN = n(505234),
    eb = n(387408),
    eE = n(59318),
    eS = n(294520),
    ey = n(505527),
    eT = n(863439),
    eR = n(465364),
    ek = n(467073),
    eI = n(34337),
    eM = n(831688),
    e_ = n(805964),
    ew = n(302031),
    eD = n(885386),
    eL = n(761640),
    eP = n(734057),
    eO = n(232835),
    eF = n(576705),
    eU = n(967198),
    ez = n(287809),
    eG = n(531685),
    eH = n(58703),
    eB = n(763754),
    eV = n(447215);
let eW = (e) => {
    let { message: t, originalAuthor: n, channel: l } = e,
        s = (0, eB.d8)(n, l),
        r = s?.nick ?? n?.username ?? "",
        a = (0, eV.P)({
            user: n ?? void 0,
            channelId: l.id,
            guildId: l.guild_id,
            messageId: t?.id,
            stopPropagation: !0,
        })(s ?? void 0)(r, l.id);
    return (0, i.jsx)(E.E, { variant: "text-md/semibold", children: a });
};
var e$ = n(652215),
    eq = n(838541),
    eK = n(375708),
    eX = n(506472),
    eQ = n(330070),
    eY = n(992595);
let eJ = s.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: l, overrideMedia: r, className: o } = e,
        {
            channel: c,
            isOpen: m,
            messageCount: h,
            content: x,
            firstMessage: f,
            media: j,
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                l = (0, g.bG)([eP.A], () => eP.A.getChannel(t));
            q()(null != l, "the thread should not be null here, a store must have missed an update");
            let i = (0, g.bG)([eL.Ay], () => eL.Ay.getCurrentSidebarChannelId(l.parent_id) === l.id),
                { firstMessage: r } = (0, eg.OA)(l),
                a = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: l = !0 } = e,
                        i = s.useMemo(() => (null != t ? (0, eb.A)(t, t?.messageSnapshots[0]) : null), [t]),
                        { hasSpoilerEmbeds: r, content: a } = s.useMemo(
                            () =>
                                i?.content != null && "" !== i.content
                                    ? (0, eR.Ay)(i, {
                                          formatInline: n,
                                          noStyleAndInteraction: l,
                                          allowHeading: !0,
                                          allowList: !0,
                                      })
                                    : { hasSpoilerEmbeds: !1, content: null },
                            [n, i, l],
                        ),
                        o = (0, ef.Ky)(t, r),
                        c = (0, ef.L_)(t, r);
                    return null == t ? null : { hasSpoilerEmbeds: r, content: a, firstMedia: o, firstMediaIsEmbed: c };
                })({ firstMessage: r }),
                o = a?.content,
                c = a?.firstMedia,
                { messageCountText: d } = (0, ex.k6)(l);
            return { channel: l, isOpen: i, messageCount: d, firstMessage: r, content: o, media: n ?? c };
        })({ threadId: t, overrideMedia: r }),
        p = (0, P.Ay)(c);
    (0, W.vb)(f);
    let A = (0, g.bG)([ez.default, eO.A], () => {
            let e = ez.default.getUser(f?.messageSnapshots[0]?.moderatorReport?.reported_user_id);
            if (null != e) return e;
            if (f?.messageReference?.channel_id != null && f?.messageReference?.message_id != null) {
                let e = eO.A.getMessage(f?.messageReference?.channel_id, f?.messageReference?.message_id);
                if (null != e) return e.author;
            }
            return null;
        }),
        { ref: C, height: N } = (0, w.Ay)(),
        b = (0, ev.kU)((e) => e.setCardHeight, d.x);
    s.useEffect(() => {
        null != N && b(t, N);
    }, [N, b, t]),
        s.useEffect(() => {
            l?.(C.current, t);
        }, [C, l, t]);
    let E = s.useRef(null),
        { handleLeftClick: y, handleRightClick: T } = (0, eN.A)({ facepileRef: E, goToThread: n, channel: c }),
        { role: R, onFocus: k, ...I } = (0, u.rm)(t),
        { isFocused: M, handleFocus: _, handleBlur: D } = (0, eC.A)(k);
    return (0, i.jsxs)("div", {
        ref: C,
        "data-item-id": t,
        onClick: y,
        onContextMenu: T,
        className: a()(eQ.kL, eX.kL, o, { [eQ.nT]: m }),
        children: [
            (0, i.jsx)(S.D, {
                onClick: y,
                focusProps: { ringTarget: C },
                onContextMenu: T,
                "aria-label": eK.intl.formatToPlainString(eK.t.pgYN6c, { title: p, count: h }),
                className: eQ.Kv,
                onFocus: _,
                onBlur: D,
                ...I,
            }),
            (0, i.jsxs)("div", {
                className: eQ.kb,
                children: [
                    (0, i.jsx)(v.F, {
                        children: (0, i.jsxs)("div", {
                            className: eX.fx,
                            children: [
                                (0, i.jsx)(eZ, {
                                    channel: c,
                                    firstMessage: f,
                                    content: x,
                                    hasMediaAttachment: null != j,
                                    originalAuthor: A,
                                }),
                                f?.blocked || null == j ? null : (0, i.jsx)(e5, { channel: c, firstMedia: j }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(Y.M, {
                        enabled: !M,
                        children: (0, i.jsx)(e1, { channel: c, firstMessage: f, facepileRef: E }),
                    }),
                ],
            }),
        ],
    });
});
function eZ(e) {
    let { channel: t, firstMessage: n, content: l, hasMediaAttachment: s, originalAuthor: r } = e,
        { hasUnreads: o } = (0, ex.X5)(t);
    return (0, i.jsxs)("div", {
        className: a()(eX.rf, eQ.rf),
        children: [
            (0, i.jsx)(eA.Ay, { channel: t }),
            (0, i.jsx)("div", {
                className: (eQ.iU, eX.iU),
                children: (0, i.jsx)(e0, {
                    channel: t,
                    message: n,
                    content: l,
                    hasMediaAttachment: s,
                    hasUnreads: o,
                    originalAuthor: r,
                }),
            }),
        ],
    });
}
let e0 = s.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: s, hasUnreads: r, originalAuthor: o } = e,
        c = (0, g.bG)([ej.A], () => ej.A.isLoading(n.id)),
        d = (0, g.bG)([eF.A], () => eF.A.can(e$.xBc.MANAGE_MESSAGES, n)),
        u = eD.gs.useSetting(),
        m = (0, g.bG)([eU.A], () => eU.A.getGuildId()),
        { contentPlaceholder: h, renderedContent: x } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, e_.o)(t, l, !1, !1, a()(eQ.BK, eX.BK, eY.tZ, eY.__invalid_smallFontSize), {
                      leadingIconClass: eQ.aG,
                      trailingIconClass: eQ.sl,
                      iconSize: eq.eJ,
                  }),
        f =
            null != x
                ? (0, i.jsx)(E.E, { variant: "text-md/normal", children: x })
                : s
                  ? null
                  : (0, i.jsx)(E.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: r ? "text-default" : "text-muted",
                        className: a()(eQ.BK, eX.BK),
                        "aria-label": "",
                        children: null == t ? (c ? null : eK.intl.string(eK.t.mE3KJN)) : h,
                    });
    return (0, i.jsxs)(ew.Bs.Provider, {
        value: (0, eT.A)(u, d),
        children: [
            null != o
                ? (0, i.jsx)(J.eu, {
                      size: Z._3.SIZE_40,
                      src: o.getAvatarURL(m, (0, Z.FT)(Z._3.SIZE_40)),
                      "aria-label": "",
                      className: eX.Nd,
                  })
                : null,
            (0, i.jsxs)("div", {
                className: eX.IF,
                children: [
                    (0, i.jsx)(eW, { channel: n, originalAuthor: o, message: t }),
                    (0, i.jsx)(Y.M, { className: eQ.JY, children: f }),
                ],
            }),
        ],
    });
});
function e1(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        { isNew: s } = (0, ex.X5)(t),
        r = (0, P.Ay)(t),
        a = (0, eu.m)(t.id),
        o = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: eX.qr,
        children: [
            (0, i.jsxs)("div", {
                className: eX.JS,
                children: [
                    (0, i.jsx)(ee.i, { size: "custom", width: 14, height: 14 }),
                    (0, i.jsx)(E.E, { variant: "text-sm/medium", children: r }),
                    s
                        ? (0, i.jsx)(et.Lp, {
                              color: en.A.unsafe_rawColors.BRAND_260.css,
                              text: eK.intl.string(eK.t.y2b7CA),
                              className: eX.Ad,
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: eX.PQ,
                children: [
                    o || null == l ? null : (0, i.jsx)(e4, { firstMessage: l, channel: t }),
                    (0, i.jsx)(e2, { channel: t, iconSize: 14 }),
                    (0, i.jsx)("span", { className: eQ.xE, children: "\u2022" }),
                    a.length > 0
                        ? (0, i.jsxs)("div", {
                              className: eQ.IW,
                              children: [
                                  (0, i.jsx)(e7, { channel: t, userIds: a, facepileRef: n }),
                                  (0, i.jsx)("div", {
                                      className: eQ.r$,
                                      children: (0, i.jsx)(el.n, { themed: !0, dotRadius: 2 }),
                                  }),
                                  (0, i.jsx)(er.Ay, { channel: t, className: eQ.mD, renderDots: !1 }),
                              ],
                          })
                        : (0, i.jsx)(e8, { channel: t }),
                ],
            }),
        ],
    });
}
function e2(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: s, unreadCount: r } = (0, ex.k6)(t);
    return (0, i.jsxs)("div", {
        className: a()(eQ.Mv, { [eQ.hT]: l && null == r }),
        children: [
            (0, i.jsx)("span", {
                className: eQ.SZ,
                children: (0, i.jsx)(ei.o, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof s
                ? (0, i.jsx)(ed.A, { value: s, digitWidth: 9, className: eQ.gv })
                : (0, i.jsx)("div", { className: eQ.gv, children: s }),
            null == r
                ? null
                : (0, i.jsxs)(E.E, {
                      className: eQ.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", eK.intl.format(eK.t.z3PEth, { count: r }), ")"],
                  }),
        ],
    });
}
function e4(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, g.bG)([eP.A], () => eP.A.getChannel(n.parent_id)),
        s = (0, ex.Ck)(l),
        { disableReactionCreates: r, isLurking: a, isPendingMember: o } = (0, ek.A)(n);
    return null == s || r
        ? null
        : (0, i.jsx)(eM.qT, {
              className: eQ.vC,
              message: t,
              readOnly: n.isArchivedLockedThread(),
              useChatFontScaling: !1,
              isLurking: a,
              isPendingMember: o,
              emoji: s,
              hideCount: !0,
              count: 0,
              burst_count: 0,
              me: !1,
              me_burst: !1,
              type: ey.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function e8(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, eh.R)(t.parent_id),
        l = (0, ex.Mw)(t, n),
        s = t.threadMetadata?.createTimestamp,
        r = null == s ? null : eK.intl.formatToPlainString(eK.t["13euCd"], { timestamp: (0, eH.i$)(X()(s), "LLLL") });
    return (0, i.jsx)(Q.m, {
        text: r,
        children: (0, i.jsx)(E.E, {
            className: eQ.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function e7(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        s = (0, ex.$I)(t, n);
    return (0, i.jsx)("div", {
        ref: l,
        children: (0, i.jsx)(ea.Ay, {
            className: eQ.__invalid_facepile,
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
function e3(e) {
    let t,
        n,
        { firstMedia: l, shouldObscure: s, obscureReason: r, shouldShowAgeVerification: o } = e,
        c = (0, g.bG)([eG.A], () => eG.A.isFocused()),
        d = (0, eE.ge)(l.src),
        u = eD.kt.useSetting(),
        m = (0, eS.rx)(r),
        { src: h, width: x, height: f, alt: j } = l;
    return (f > x ? (n = 72) : (t = 72), o)
        ? (0, i.jsx)("div", {
              "aria-label": m ?? j ?? eK.intl.string(eK.t.hqwnc2),
              className: a()(eQ.iT, eQ.nh),
              style: { maxWidth: t, maxHeight: n, height: f, width: x },
          })
        : h.startsWith("data:")
          ? (0, i.jsx)(es._, {
                src: h,
                maxHeight: t,
                maxWidth: n,
                width: x,
                height: f,
                alt: null != j && s ? m : j,
                className: eQ.iT,
                imageClassName: a()({ [eQ.cd]: s, [eQ.LW]: !0 }),
            })
          : (0, eI.LL)({
                src: h,
                maxHeight: t,
                maxWidth: n,
                width: x,
                height: f,
                alt: null != j && s ? m : j,
                autoPlay: u,
                animated: d && !s && c,
                srcIsAnimated: l.srcIsAnimated,
                containerClassName: eQ.iT,
                imageClassName: a()({ [eQ.cd]: s }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function e5(e) {
    let { channel: t, firstMedia: n } = e,
        [l, s] = (0, eS.eJ)({ media: n, channel: t }),
        r = (0, em.qZ)(s);
    return (0, i.jsx)(Y.M, {
        enabled: !0,
        children: (0, i.jsxs)("div", {
            className: a()(eQ.pV, eX.pV),
            onClick: function (e) {
                e.stopPropagation(),
                    r &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        eo.A.showAgeVerificationGetStartedModal({ entryPoint: ec.q1.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, i.jsx)(e3, { firstMedia: n, shouldObscure: l, obscureReason: s, shouldShowAgeVerification: r }),
                l && (0, i.jsx)(ep.A, { iconClassname: eQ.yo, obscureReason: s }),
            ],
        }),
    });
}
var e9 = n(378570),
    e6 = n(940382),
    te = n(970278),
    tt = n(424798),
    tn = n(406704),
    tl = n(747926),
    ti = n(31717),
    ts = n(834942),
    tr = n(309010),
    ta = n(522602),
    to = n(234320),
    tc = n(947094),
    td = n(919577),
    tu = n(207777),
    tm = n(365971),
    th = n(613999);
let tx = function (e) {
    let { guildId: t, channelId: n } = e,
        l = s.useRef(null),
        i = (0, tm.Xg)(),
        r = !eG.A.isFocused(i);
    return (
        s.useLayoutEffect(
            () => (
                null == l.current &&
                    ((l.current = new th.Ay({ guildId: t, channelId: n, isPaused: r, windowId: i })),
                    l.current.initialize()),
                () => {
                    l.current?.terminate(), (l.current = null);
                }
            ),
            [n, t, r, i],
        ),
        l.current
    );
};
var tg = n(853742);
n(321073);
var tf = n(873174),
    tj = n(136722),
    tp = n(192308),
    tv = n(866323),
    tA = n(789645),
    tC = n(446576),
    tN = n(26430),
    tb = n(885574),
    tE = n(933832),
    tS = n(565787),
    ty = n(320448),
    tT = n(435183),
    tR = n(417454),
    tk = n(148719),
    tI = n(462887),
    tM = n(696986),
    t_ = n(811893),
    tw = n(821609),
    tD = n(736653),
    tL = n(303136),
    tP = n(892110),
    tO = n(251766),
    tF = n(468689),
    tU = n(71393),
    tz = n(975571);
let tG = { mass: 1, tension: 250, friction: 18, clamp: !0 };
var tH = n(388803);
function tB(e) {
    let { handleHide: t } = e;
    return (0, i.jsx)(S.D, {
        onClick: t,
        className: tH.b,
        "aria-label": eK.intl.string(eK.t.WAI6xu),
        children: (0, i.jsx)(tA.P, { size: "md", color: "currentColor", className: tH.ut }),
    });
}
function tV(e) {
    let { username: t, title: n, videoSrc: l, messageCount: s, reaction: r, reactionCount: o, classname: c } = e;
    return (0, i.jsxs)("div", {
        className: a()(tH.IP, c),
        children: [
            (0, i.jsx)("div", {
                className: tH.Y6,
                children: (0, i.jsxs)("div", {
                    className: tH.wO,
                    children: [
                        (0, i.jsx)(E.E, { tag: "span", className: tH.cy, variant: "text-sm/semibold", children: t }),
                        (0, i.jsx)(E.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: tH.SD,
                            children: eK.intl.string(eK.t.mA0IvI),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(p.D, {
                variant: "heading-md/extrabold",
                className: tH.DD,
                color: "text-strong",
                "aria-hidden": !0,
                children: n,
            }),
            (0, i.jsx)(tM.h, { size: 10 }),
            (0, i.jsx)(tL.A, { className: tH.Ki, src: l }),
            (0, i.jsx)(tM.h, { size: 10 }),
            (0, i.jsx)("div", {
                className: tH.qr,
                children: (0, i.jsxs)("div", {
                    className: tH.GD,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tH.Mv,
                            children: [
                                (0, i.jsx)("span", {
                                    className: tH.SZ,
                                    children: (0, i.jsx)(ei.o, { size: "xs", color: "currentColor" }),
                                }),
                                (0, i.jsx)(E.E, {
                                    variant: "text-xs/normal",
                                    color: "interactive-text-default",
                                    children: s,
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tH.vi,
                            children: [
                                (0, i.jsx)("span", { role: "img", "aria-label": "", children: r }),
                                (0, i.jsx)(E.E, {
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
        n = (0, tD.Ay)(),
        l = (0, tI.M)(n),
        r = (0, g.bG)([tU.A], () => tU.A.getGuild(t.guild_id)),
        o = (0, g.bG)([tc.A], () => tc.A.hasHidden(t.id)),
        c = (0, tO.e)({ guildId: t.guild_id, channelId: t.id }),
        { transitions: d, setVisible: u } = (function () {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tv.p)(e, {
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
        m = s.useCallback(() => {
            u(!1), td.A.hideAdminOnboarding(t.id, !0);
        }, [t, u]);
    s.useEffect(() => {
        (0, tP.l)(t.id) || u(!o);
    }, [t, u, o]);
    let h = s.useMemo(
            () => [
                eK.intl.string(eK.t["8pEGAw"]),
                eK.intl.string(eK.t.jwfgDd),
                eK.intl.string(eK.t.mPKs27),
                eK.intl.string(eK.t.StRbvG),
            ],
            [],
        ),
        x = s.useMemo(
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
        j = r?.features.has(e$.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)
            ? eK.intl.string(eK.t.n0q7sI)
            : eK.intl.string(eK.t.QoYdie),
        v =
            (r?.features.has(e$.GuildFeatures.CREATOR_MONETIZABLE) ||
                r?.features.has(e$.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) ??
            !1,
        A = v ? eK.intl.string(eK.t["G/7ciZ"]) : eK.intl.string(eK.t.IFOiit),
        C = v ? eK.intl.string(eK.t.GjgQO1) : eK.intl.string(eK.t.E7AO6t);
    return (0, i.jsx)(i.Fragment, {
        children: d((e, t) =>
            t
                ? (0, i.jsxs)(tf.animated.div, {
                      style: e,
                      className: tH.kL,
                      children: [
                          (0, i.jsxs)("div", {
                              className: tH.U1,
                              children: [
                                  (0, i.jsxs)(E.E, {
                                      variant: "text-xs/normal",
                                      className: tH.l2,
                                      children: [
                                          (0, i.jsx)(tb.m, { size: "xxs", color: "currentColor", className: tH.Kk }),
                                          eK.intl.string(eK.t.znhX2R),
                                      ],
                                  }),
                                  (0, i.jsx)(tB, { handleHide: m }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: tH.hQ,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: a()(tH.CT, v && tH.en),
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: tH.F2,
                                              children: (0, i.jsxs)("div", {
                                                  className: tH.IZ,
                                                  children: [
                                                      (0, i.jsx)(tV, {
                                                          username: eK.intl.string(eK.t.AkORco),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                                          title: eK.intl.string(eK.t.yO6Fxu),
                                                          messageCount: "34",
                                                          reaction: "\u26A1\uFE0F",
                                                          reactionCount: "724",
                                                          classname: tH.q6,
                                                      }),
                                                      (0, i.jsx)(tV, {
                                                          username: eK.intl.string(eK.t.DPg3YM),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                                          title: eK.intl.string(eK.t["R5XnC/"]),
                                                          messageCount: "34",
                                                          reactionCount: "84",
                                                          reaction: "\uD83D\uDC9E",
                                                          classname: tH.q6,
                                                      }),
                                                      (0, i.jsx)(tV, {
                                                          username: eK.intl.string(eK.t.KIelex),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                                          title: eK.intl.string(eK.t.pt88Vb),
                                                          messageCount: "7,103",
                                                          reaction: "\u26A1\uFE0F",
                                                          reactionCount: "724",
                                                          classname: tH.Ob,
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          (0, i.jsxs)("article", {
                                              className: tH.n$,
                                              children: [
                                                  (0, i.jsx)(p.D, {
                                                      variant: "heading-lg/semibold",
                                                      color: "text-strong",
                                                      children: A,
                                                  }),
                                                  (0, i.jsx)(tM.h, { size: 8 }),
                                                  (0, i.jsx)(E.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: C,
                                                  }),
                                                  (0, i.jsx)(tM.h, { size: 16 }),
                                                  (0, i.jsxs)(S.D, {
                                                      onClick: () =>
                                                          open(tz.A.getCreatorSupportArticleURL(e$.MVz.MEDIA_CHANNEL)),
                                                      className: tH.zy,
                                                      children: [
                                                          (0, i.jsx)(E.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-link",
                                                              children: eK.intl.string(eK.t.OahzBd),
                                                          }),
                                                          (0, i.jsx)(t_.t, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: tH.QI,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)(tM.h, { size: 16 }),
                                                  (0, i.jsx)("div", {
                                                      className: tH.Qq,
                                                      children: h.map((e) =>
                                                          (0, i.jsx)(
                                                              E.E,
                                                              {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-default",
                                                                  className: tH.U0,
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
                                  v &&
                                      (0, i.jsxs)("div", {
                                          className: a()(tH.CT, tH.Gw),
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: tH.F2,
                                                  children: (0, i.jsxs)("div", {
                                                      className: tH.kQ,
                                                      children: [
                                                          (0, i.jsx)("img", {
                                                              src: l
                                                                  ? "/assets/b58ce8ba4d6516a2.png"
                                                                  : "/assets/9ed42f4f17fd8793.png",
                                                              alt: "",
                                                              className: tH.JM,
                                                          }),
                                                          (0, i.jsx)("img", {
                                                              src: l
                                                                  ? "/assets/d0f129a0c1627f7a.png"
                                                                  : "/assets/fddfcda2eca5c8d4.png",
                                                              alt: "",
                                                              className: tH.JM,
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              (0, i.jsxs)("article", {
                                                  className: tH.n$,
                                                  children: [
                                                      (0, i.jsxs)(E.E, {
                                                          variant: "text-xxs/bold",
                                                          className: tH.X4,
                                                          children: [
                                                              eK.intl.string(eK.t.NChGwy),
                                                              " ",
                                                              (0, i.jsx)("span", {
                                                                  role: "img",
                                                                  "aria-label": "",
                                                                  children: "\uD83D\uDD25",
                                                              }),
                                                          ],
                                                      }),
                                                      (0, i.jsx)(tM.h, { size: 10 }),
                                                      (0, i.jsx)(p.D, {
                                                          variant: "heading-lg/semibold",
                                                          color: "text-strong",
                                                          children: eK.intl.string(eK.t["N/TRrT"]),
                                                      }),
                                                      (0, i.jsx)(tM.h, { size: 8 }),
                                                      (0, i.jsx)(E.E, {
                                                          variant: "text-md/normal",
                                                          color: "text-muted",
                                                          children: eK.intl.string(eK.t.t3yWxG),
                                                      }),
                                                      (0, i.jsx)(tM.h, { size: 16 }),
                                                      (0, i.jsx)("div", {
                                                          className: tH.Qq,
                                                          children: x.map((e) =>
                                                              (0, i.jsx)(
                                                                  E.E,
                                                                  {
                                                                      variant: "text-sm/medium",
                                                                      color: "text-default",
                                                                      className: tH.U0,
                                                                      children: e,
                                                                  },
                                                                  e,
                                                              ),
                                                          ),
                                                      }),
                                                      (0, i.jsx)(tM.h, { size: 16 }),
                                                      0 === c.length &&
                                                          (0, i.jsx)(tw.$, { variant: "primary", onClick: f, text: j }),
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
    tQ = n(95035),
    tY = n(221314),
    tJ = n(50897),
    tZ = n(419949);
let t0 = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    t1 = (e) => {
        let { guild: t } = e,
            n = (0, g.bG)([eF.A], () => eF.A.can(e$.xBc.MANAGE_GUILD, t));
        return (0, i.jsxs)(t$.B, {
            direction: "horizontal",
            gap: 8,
            children: [
                (0, i.jsxs)(t$.B, {
                    direction: "vertical",
                    gap: 16,
                    children: [
                        (0, i.jsx)(t$.B, {
                            direction: "vertical",
                            gap: 4,
                            children: (0, i.jsx)(E.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: eK.intl.string(tY.default.fP8DVx),
                            }),
                        }),
                        (0, i.jsxs)(t$.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, i.jsx)(E.E, {
                                    variant: "text-lg/semibold",
                                    color: "text-default",
                                    children: eK.intl.string(tY.default["i7CH/I"]),
                                }),
                                (0, i.jsxs)("ol", {
                                    className: a()(tJ.p_, tJ.o8, tJ.ap),
                                    children: [
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(E.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eK.intl.string(tY.default["+Izoz7"]),
                                            }),
                                        }),
                                        (0, i.jsxs)("li", {
                                            children: [
                                                (0, i.jsx)(E.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: eK.intl.string(tY.default["iu/RkU"]),
                                                }),
                                                (0, i.jsxs)("ul", {
                                                    className: a()(tJ.p_, tJ.t3, tJ.zS),
                                                    children: [
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(E.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eK.intl.string(tY.default.QogKbP),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(E.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eK.intl.string(tY.default.V4orHT),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(E.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eK.intl.string(tY.default.VrrQXe),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(E.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eK.intl.string(tY.default.pSuM5e),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(E.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eK.intl.string(tY.default["/RLXlI"]),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(E.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eK.intl.string(tY.default.j4AmYy),
                                            }),
                                        }),
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(E.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eK.intl.format(tY.default["/g+PvX"], {
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
                        (0, i.jsxs)(t$.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, i.jsx)(E.E, {
                                    variant: "text-lg/semibold",
                                    color: "text-default",
                                    children: eK.intl.string(tY.default.qJWXsz),
                                }),
                                (0, i.jsxs)("ul", {
                                    className: a()(tJ.p_, tJ.zS, tJ.ap),
                                    children: [
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(E.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eK.intl.format(tY.default.FUBV1P, {
                                                    survey: "https://discord.sjc1.qualtrics.com/jfe/form/SV_3WvT7SqlWpCJ4HQ",
                                                }),
                                            }),
                                        }),
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(E.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eK.intl.format(tY.default.W4MIAG, {
                                                    feedback: "https://forms.gle/RbDhW46PMmR39XUP7",
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)(t$.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, i.jsx)(E.E, {
                                    variant: "text-md/normal",
                                    color: "text-default",
                                    children: eK.intl.string(tY.default.J3HKmx),
                                }),
                                n &&
                                    (0, i.jsx)(E.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: eK.intl.format(tY.default["9x2vbP"], {
                                            optOutHook: (e) =>
                                                (0, i.jsx)(tQ.A, {
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
                                (0, i.jsx)(E.E, {
                                    variant: "text-md/normal",
                                    color: "text-default",
                                    children: eK.intl.string(tY.default.KcCY25),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("img", {
                    src: "/assets/c42cecffc003efa2.svg",
                    alt: eK.intl.string(eK.t.gAlJzV),
                    width: tX.T5,
                    height: tX.T5,
                }),
            ],
        });
    };
function t2(e) {
    let t,
        { guild: n } = e,
        [l, r] = (0, tK.V)("report-to-mod-education-dismissed", !1),
        [o, c] = (0, tK.V)("report-to-mod-education-expanded", !1),
        { transitions: d, setVisible: u } = (() => {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tv.p)(e, {
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
            (0, tv.p)(t, {
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
                  ? (0, i.jsxs)(tf.animated.div, {
                        style: e,
                        onClick: () => c(!o),
                        className: a()(eQ.kL, tJ.kL, tZ.mainCard),
                        children: [
                            (0, i.jsxs)("div", {
                                className: tJ.mG,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: tJ.cy,
                                        children: [
                                            (0, i.jsx)(tq.p, {
                                                size: "custom",
                                                width: 28,
                                                height: 28,
                                                color: "currentColor",
                                                className: tJ.Mg,
                                            }),
                                            (0, i.jsx)(E.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                children: eK.intl.string(eK.t.uvGmCx),
                                            }),
                                            (0, i.jsx)(E.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                children: "\u2014",
                                            }),
                                            (0, i.jsx)(p.D, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: eK.intl.string(tY.default["95qQRB"]),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(S.D, {
                                        onClick: () => r(!0),
                                        children: (0, i.jsx)(tA.P, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tJ.ut,
                                        }),
                                    }),
                                ],
                            }),
                            m((e, t) =>
                                t
                                    ? (0, i.jsxs)(tf.animated.div, {
                                          style: e,
                                          children: [
                                              (0, i.jsx)("hr", { className: tJ.me }),
                                              (0, i.jsx)(t1, { guild: n }),
                                          ],
                                      })
                                    : null,
                            ),
                        ],
                    })
                  : null,
          );
}
var t4 = n(191842),
    t8 = n(565645),
    t7 = n(21161),
    t3 = n(796774),
    t5 = n(209932),
    t9 = n(174459),
    t6 = n(102597),
    ne = n(904054),
    nt = n(584014),
    nn = n(536283);
n(980504);
var nl = n(59618);
function ni(e) {
    let { className: t, sound: n, playSound: l, isPlaying: r, text: o } = e,
        c = n?.emojiId != null || n?.emojiName != null,
        d = eK.intl.formatToPlainString(eK.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name }),
        u = s.useCallback(() => {
            t9.default.track(e$.HAw.MODERATOR_QUEUE_ACTION, { guild_id: eU.A.getGuildId(), action: "airhorn" }),
                null != l && l();
        }, [l]);
    return (0, i.jsxs)(S.D, {
        "aria-label": d,
        tag: "span",
        onClick: u,
        className: a()(nl.Ls, nl.oR, { [nl.he]: !0 === r }, t),
        children: [
            c && (0, i.jsx)(t8.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: nl.JS }),
            (0, i.jsx)("span", { children: ` ${o} ` }),
        ],
    });
}
function ns(e) {
    let { containerRef: t, text: n } = e,
        l = s.useRef(null),
        r = (0, g.bG)([t5.A], () => t5.A.getSoundsForGuild("0")?.find((e) => "airhorn" === e.name)),
        { createMultipleConfettiAt: a } = s.useContext(t7.x),
        o = (0, g.bG)([L.A], () => L.A.useReducedMotion),
        { isPlaying: c, playSound: d } = (function (e) {
            let { isPlaying: t, playSound: n, preloadSound: l } = (0, nt.A)(null != e ? (0, t6.A)(e.soundId) : null);
            return (
                s.useEffect(() => {
                    null != e && l();
                }, [e, l]),
                {
                    isPlaying: t,
                    playSound: s.useCallback(() => !!n({ volume: (0, ne.A)(e?.volume ?? 1) }), [n, e?.volume]),
                }
            );
        })(r);
    (0, D.Ay)(() => {
        (0, t3.E7)();
    });
    let u = s.useCallback(async () => {
        if ((await d()) && (l.current?.addAnimation(), !o && t?.current != null)) {
            let e = t.current.getBoundingClientRect(),
                n = { x: e.left + e.width / 2, y: e.top + e.height / 3 },
                l = nn.uI[Math.floor(Math.random() * nn.uI.length)];
            a(
                n.x,
                n.y,
                { velocity: { type: "static-random", minValue: { x: -500, y: -500 }, maxValue: { x: 500, y: -100 } } },
                40,
                { sprite: l },
            );
        }
    }, [d, a, o, t]);
    return void 0 === r ? null : (0, i.jsx)(ni, { sound: r, playSound: u, isPlaying: c, text: n });
}
function nr() {
    let e = s.useRef(null);
    return (0, i.jsxs)(t$.B, {
        className: nl.kL,
        direction: "vertical",
        align: "center",
        justify: "center",
        padding: { top: 24, bottom: 24 },
        ref: e,
        children: [
            (0, i.jsx)(t4._, { size: "custom", width: 48, height: 48 }),
            (0, i.jsxs)(t$.B, {
                direction: "vertical",
                align: "center",
                justify: "center",
                children: [
                    (0, i.jsx)(p.D, {
                        className: nl.wx,
                        variant: "heading-md/medium",
                        children: eK.intl.string(tY.default.h6QNky),
                    }),
                    (0, i.jsx)(E.E, {
                        className: nl.Qq,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: eK.intl.format(tY.default["8N4c58"], {
                            airhornHook: (t) => (0, i.jsx)(ns, { containerRef: e, text: t }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
var na = n(34457),
    no = n(317525),
    nc = n(44234),
    nd = n(625494),
    nu = n(927813),
    nm = n(935208),
    nh = n(387255),
    nx = n(952351);
function ng(e) {
    let { channelName: t, guildId: l, tagFilter: r, channel: a } = e,
        o = (0, ex.S4)(a),
        c = (0, tn.AI)(a),
        d = a.isMediaChannel(),
        u = s.useCallback(() => {
            (0, tg.zd)(),
                (0, tp.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("43051"), n.e("90052")]).then(n.bind(n, 653682));
                    return (t) => (0, i.jsx)(e, { ...t, guildId: l });
                });
        }, [l]),
        m = r.size > 0,
        h = c || o,
        x = !m && o && !d,
        g = s.useCallback(
            () => (x ? u() : c ? void nd._.dispatch(e$.jej.FOCUS_COMPOSER_TITLE) : (0, e$.FXj)()),
            [u, x, c],
        );
    return (0, i.jsxs)("div", {
        className: nx.k,
        children: [
            (0, i.jsx)(p.D, {
                className: nx.w,
                variant: "heading-md/semibold",
                children: m
                    ? eK.intl.formatToPlainString(eK.t.lvPci0, { numTags: r.size })
                    : eK.intl.string(eK.t.PwTMG0),
            }),
            (0, i.jsx)(E.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: m
                    ? eK.intl.formatToPlainString(eK.t.AAeye1, { numTags: r.size })
                    : eK.intl.formatToPlainString(eK.t.YtsXFD, { channelName: t }),
            }),
            h &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tM.h, { size: 16 }),
                        (0, i.jsx)(tw.$, {
                            text: x ? eK.intl.string(eK.t.DgatTQ) : eK.intl.string(eK.t.wOKE8I),
                            variant: "secondary",
                            onClick: g,
                        }),
                    ],
                }),
        ],
    });
}
var nf = n(253913),
    nj = n(658688);
let np = { width: 28, height: 28 },
    nv = { width: 20, height: 20, borderRadius: 10 },
    nA = (e) => {
        (0, tg.bh)({ onboardingCTA: e });
    };
class nC {
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
let nN = (e) => {
        let { guild: t, roles: n } = e;
        return (0, i.jsx)("div", {
            className: nj.Ei,
            "aria-label": eK.intl.formatToPlainString(eK.t.PCs0oo, { numRoles: n.length }),
            children: n.map((e) =>
                (0, i.jsx)(tR.b_, { role: e, canRemove: !1, onRemove: e$.FXj, guildId: t.id, className: nj.Yq }, e.id),
            ),
        });
    },
    nb = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    nE = (e) => {
        let { handleHide: t } = e;
        return (0, i.jsx)(S.D, {
            onClick: t,
            className: nj.b,
            "aria-label": eK.intl.string(eK.t.WAI6xu),
            children: (0, i.jsx)(tA.P, { size: "md", color: "currentColor", className: nj.ut }),
        });
    },
    nS = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, i.jsx)(S.D, {
            onClick: n,
            className: nj.b,
            "aria-label": t ? eK.intl.string(eK.t.iTcuma) : eK.intl.string(eK.t.dcl9MQ),
            children: t
                ? (0, i.jsx)(tC.g, { size: "xs", color: "currentColor", className: nj.ut })
                : (0, i.jsx)(tN._, { size: "xs", color: "currentColor", className: nj.ut }),
        });
    },
    ny = (e) => {
        let t,
            { hasAnyThread: l, hasActiveThreads: r, channel: o } = e,
            c = (0, P.Ay)(o),
            { onboardingExpanded: u } = (0, ev.kU)((e) => {
                let { onboardingExpanded: t } = e;
                return { onboardingExpanded: t };
            }, d.x),
            { tagFilter: m } = (0, eh.R)(o.id),
            h = (0, g.bG)([tU.A], () => tU.A.getGuild(o.getGuildId())),
            x = (0, ex.S4)(o),
            { transitions: f, setVisible: j } = (() => {
                let [e, t] = s.useState(!0);
                return {
                    transitions: (0, tv.p)(e, {
                        keys: (e) => (e ? "shown" : "hidden"),
                        config: nb,
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        unique: !0,
                    }),
                    setVisible: t,
                };
            })(),
            A = (0, tv.p)(u, {
                from: { maxHeight: 0 },
                enter: { maxHeight: 500 },
                leave: { maxHeight: 0 },
                config: { duration: 200 },
            }),
            C = s.useCallback((e) => {
                e.clickHandler?.();
            }, []),
            N = ((t = o.id), s.useCallback(() => (j(!1), td.A.hideAdminOnboarding(t, !0)), [t, j])),
            {
                onboardingSteps: b,
                isDismissed: y,
                isHidden: R,
                isAllDone: k,
            } = ((e) => {
                var t;
                let l,
                    r,
                    a,
                    o,
                    { guild: c, channel: d, hasAnyThread: u, handleHide: m } = e,
                    [h, x] = s.useState(!1),
                    f = (0, tP.l)(d.id),
                    j = (0, g.bG)([tc.A], () => tc.A.hasHidden(d.id)),
                    p =
                        ((l = c?.id),
                        (r = (0, g.bG)([no.A], () => (null != l ? no.A.getSortedRoles(l) : void 0))),
                        s.useMemo(() => {
                            let e,
                                t,
                                l,
                                s,
                                a,
                                o,
                                m,
                                h,
                                g = new nC(),
                                f = d?.isMediaChannel() === !0;
                            return (
                                null == c ||
                                    null == d ||
                                    f ||
                                    null == r ||
                                    g.addStep(
                                        ((e = (0, tk.A)(d)
                                            ? tj.kg(e$.xBc.VIEW_CHANNEL, e$.xBc.SEND_MESSAGES)
                                            : e$.xBc.SEND_MESSAGES),
                                        (l =
                                            (t =
                                                null != c
                                                    ? (0, nh.N)(r, d, e).filter(
                                                          (e) =>
                                                              d.permissionOverwrites.hasOwnProperty(e.id) ||
                                                              (0, na.Oy)(e),
                                                      )
                                                    : []).length > 0),
                                        (s = t.some((e) => (0, na.Oy)(e))),
                                        {
                                            name: eK.intl.string(eK.t["/Ax2gs"]),
                                            description: eK.intl.string(eK.t.gAIOfg),
                                            isDone: l && s,
                                            shouldWarn: l && !s,
                                            children: l ? (0, i.jsx)(nN, { guild: c, roles: t }) : null,
                                            clickHandler: () => {
                                                nA(nf._G.PERMISSIONS),
                                                    (0, tp.openModalLazy)(
                                                        async () => {
                                                            let { default: l } = await Promise.all([
                                                                n.e("10277"),
                                                                n.e("17110"),
                                                            ]).then(n.bind(n, 698325));
                                                            return (
                                                                x(!0),
                                                                (n) =>
                                                                    (0, i.jsx)(l, {
                                                                        ...n,
                                                                        channel: d,
                                                                        guild: c,
                                                                        permission: e,
                                                                        currentSelectedRoles: t,
                                                                    })
                                                            );
                                                        },
                                                        {
                                                            modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                                                            onCloseRequest: e$.FXj,
                                                            onCloseCallback: () => x(!1),
                                                        },
                                                    );
                                            },
                                        }),
                                    ),
                                f ||
                                    g.addStep(
                                        ((a = null != d.topic && d.topic.length > 0),
                                        {
                                            name: eK.intl.string(eK.t.UgJu1e),
                                            description: eK.intl.string(eK.t["3C6/G1"]),
                                            clickHandler: () => {
                                                nA(nf._G.GUIDELINES), tT.Ay.open(d.id, void 0, e$.b7d.TOPIC);
                                            },
                                            isDone: a,
                                        }),
                                    ),
                                g.addStep(
                                    ((o = null != d.availableTags && d.availableTags.length > 0),
                                    {
                                        name: eK.intl.string(eK.t.xiBFCi),
                                        description: eK.intl.string(eK.t.wCv4Oz),
                                        clickHandler: () => {
                                            nA(nf._G.TAGS),
                                                tT.Ay.open(d.id),
                                                (0, tp.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("2225"),
                                                        n.e("47326"),
                                                    ]).then(n.bind(n, 950989));
                                                    return (t) =>
                                                        (0, i.jsx)(e, { ...t, channelId: d.id, guildId: d.guild_id });
                                                });
                                        },
                                        isDone: o,
                                    }),
                                ),
                                g.addStep(
                                    ((m = null != d.defaultReactionEmoji),
                                    {
                                        name: eK.intl.string(eK.t.QlyC9s),
                                        description: eK.intl.string(eK.t["+50LJg"]),
                                        clickHandler: () => {
                                            nA(nf._G.DEFAULT_REACTION),
                                                (0, tp.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("35598"),
                                                        n.e("50720"),
                                                        n.e("94209"),
                                                        n.e("85157"),
                                                    ]).then(n.bind(n, 939940));
                                                    return (t) => (0, i.jsx)(e, { ...t, channel: d });
                                                });
                                        },
                                        isDone: m,
                                    }),
                                ),
                                g.addStep(
                                    ((h = c?.id),
                                    {
                                        name: eK.intl.string(eK.t["6A0O64"]),
                                        description: f
                                            ? eK.intl.string(eK.t["8hI5vr"])
                                            : eK.intl.format(eK.t.ysxcAw, {
                                                  onClick: (e) => {
                                                      null != h &&
                                                          (e.preventDefault(),
                                                          e.stopPropagation(),
                                                          (0, tg.zd)(),
                                                          (0, tp.openModalLazy)(async () => {
                                                              let { default: e } = await Promise.all([
                                                                  n.e("43051"),
                                                                  n.e("90052"),
                                                              ]).then(n.bind(n, 653682));
                                                              return (t) => (0, i.jsx)(e, { ...t, guildId: h });
                                                          }));
                                                  },
                                              }),
                                        clickHandler: () => {
                                            nA(nf._G.CREATE_POST), nd._.dispatch(e$.jej.FOCUS_COMPOSER_TITLE);
                                        },
                                        isDone: u,
                                    }),
                                ),
                                g
                            );
                        }, [d, c, r, u, x])),
                    v = p.isAllDone(),
                    A =
                        f ||
                        j ||
                        ((t = d.id),
                        (a = nm.default.extractTimestamp(t)),
                        !X()().isBefore(X()(a).add(X().duration(15, "days"))));
                return (
                    (o = s.useRef(0)),
                    s.useEffect(
                        () => (
                            h || !v || A
                                ? clearTimeout(o.current)
                                : (o.current = setTimeout(() => {
                                      m();
                                  }, 60 * nu.A.Millis.SECOND)),
                            () => clearTimeout(o.current)
                        ),
                        [v, A, m, h],
                    ),
                    { onboardingSteps: p, isHidden: j, isDismissed: f, isAllDone: v }
                );
            })({ guild: h, channel: o, hasAnyThread: l, handleHide: N }),
            I = !R && !y,
            M = (0, ev.ST)(),
            _ = o.isMediaChannel(),
            w = (e) => M.getState().setOnboardingExpanded(e);
        return ((0, D.Ay)(() => {
            k && I && N();
        }),
        ((e) => {
            let { isAllDone: t, isVisible: n, canManageChannel: l, guildId: i, channel: r } = e,
                a = (0, g.bG)([no.A], () => (null != i ? no.A.partitionVersion(i) : void 0)),
                o = s.useCallback(() => {
                    nd._.dispatch(e$.jej.REMEASURE_TARGET);
                }, []);
            s.useEffect(() => {
                o();
            }, [o, t, n, l, a, r.id, r.permissionOverwrites]);
        })({ isAllDone: k, isVisible: I, canManageChannel: x, guildId: h?.id, channel: o }),
        s.useEffect(() => {
            y || j(!R);
        }, [y, j, R]),
        (0, D.Ay)(() => {
            (l && I) || w(!0);
        }),
        null == h)
            ? null
            : (0, V.Fo)(o)
              ? r || 0 !== m.size
                  ? m.size > 0
                      ? null
                      : (0, i.jsx)(t2, { guild: h })
                  : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t2, { guild: h }), (0, i.jsx)(nr, {})] })
              : I && x
                ? _
                    ? l
                        ? null
                        : (0, i.jsx)(tW, { channel: o })
                    : (0, i.jsx)(i.Fragment, {
                          children: f((e, t) =>
                              t
                                  ? (0, i.jsx)(tf.animated.div, {
                                        style: e,
                                        className: nj.kL,
                                        children: (0, i.jsxs)("div", {
                                            className: nj.iE,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: nj.U1,
                                                    children: (0, i.jsxs)(v.F, {
                                                        component: (0, i.jsx)(p.D, {
                                                            variant: "heading-md/semibold",
                                                            children: eK.intl.string(eK.t.LhlgY9),
                                                        }),
                                                        children: [
                                                            (0, i.jsx)(p.D, {
                                                                variant: "heading-md/medium",
                                                                className: nj.wx,
                                                                children: eK.intl.format(eK.t["9L+8bz"], {
                                                                    numCompleted: b.completedSteps.toString(),
                                                                    numSteps: b.steps.length.toString(),
                                                                }),
                                                            }),
                                                            (0, i.jsxs)(E.E, {
                                                                variant: "text-xs/normal",
                                                                className: nj.l2,
                                                                children: [
                                                                    (0, i.jsx)(tb.m, {
                                                                        size: "xxs",
                                                                        color: "currentColor",
                                                                        className: nj.Kk,
                                                                    }),
                                                                    eK.intl.string(eK.t.znhX2R),
                                                                ],
                                                            }),
                                                            (0, i.jsx)(nS, { expanded: u, onClick: () => w(!u) }),
                                                            (0, i.jsx)(nE, { handleHide: N }),
                                                        ],
                                                    }),
                                                }),
                                                A((e, t) =>
                                                    t
                                                        ? (0, i.jsx)(tf.animated.div, {
                                                              style: e,
                                                              className: nj.qI,
                                                              children: (0, i.jsx)("ol", {
                                                                  className: nj.D4,
                                                                  children: b
                                                                      .getSteps()
                                                                      .map((e) =>
                                                                          (0, i.jsxs)(
                                                                              S.D,
                                                                              {
                                                                                  tag: "li",
                                                                                  "aria-label": e.name,
                                                                                  onClick: () => C(e),
                                                                                  className: a()(nj._h, {
                                                                                      [nj.so]: e.isDone,
                                                                                  }),
                                                                                  children: [
                                                                                      e.shouldWarn
                                                                                          ? (0, i.jsx)(T.E, {
                                                                                                size: "custom",
                                                                                                width: 20,
                                                                                                height: 20,
                                                                                                color: en.A.colors
                                                                                                    .ICON_FEEDBACK_CRITICAL,
                                                                                                className: nj.FY,
                                                                                            })
                                                                                          : e.isDone
                                                                                            ? (0, i.jsx)(et.fk, {
                                                                                                  color: en.A.colors
                                                                                                      .STATUS_POSITIVE_BACKGROUND
                                                                                                      .css,
                                                                                                  icon: tE.A,
                                                                                                  style: nv,
                                                                                                  className: nj.FY,
                                                                                              })
                                                                                            : (0, i.jsx)(et.fk, {
                                                                                                  disableColor: !0,
                                                                                                  icon: (0, tS.k)(nc.A),
                                                                                                  style: np,
                                                                                                  className: a()(
                                                                                                      nj.FY,
                                                                                                      nj.so,
                                                                                                  ),
                                                                                              }),
                                                                                      (0, i.jsxs)("div", {
                                                                                          className: nj.PM,
                                                                                          children: [
                                                                                              (0, i.jsx)(E.E, {
                                                                                                  variant:
                                                                                                      "text-md/medium",
                                                                                                  color: e.isDone
                                                                                                      ? "text-default"
                                                                                                      : "text-strong",
                                                                                                  className: nj.u,
                                                                                                  children: e.name,
                                                                                              }),
                                                                                              (0, i.jsx)(E.E, {
                                                                                                  variant:
                                                                                                      "text-sm/normal",
                                                                                                  color: "text-default",
                                                                                                  className: nj.XK,
                                                                                                  children:
                                                                                                      e.description,
                                                                                              }),
                                                                                              e.children,
                                                                                          ],
                                                                                      }),
                                                                                      (0, i.jsx)(ty._, {
                                                                                          size: "custom",
                                                                                          color: "currentColor",
                                                                                          width: 12,
                                                                                          className: nj.FY,
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
                  : (0, i.jsx)(ng, { channelName: c ?? "", guildId: o.guild_id, tagFilter: m, channel: o });
    };
var nT = n(717421),
    nR = n(622629),
    nk = n(22231),
    nI = n(46054),
    nM = n(101136);
let n_ = s.memo(function (e) {
    let { channel: t, onChange: l } = e,
        r = (0, ev.ST)(),
        { guidelinesOpen: o } = (0, ev.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, d.x),
        c = (0, ex.S4)(t),
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
        f = (0, nT.z)({ opacity: +!!o, maxHeight: 500 * !!o, config: { duration: 300 }, onRest: () => g(!o) });
    return null != t.topic && t.topic.length > 0
        ? (0, i.jsx)(tf.animated.div, {
              style: f,
              className: x ? nM.kK : void 0,
              children: (0, i.jsxs)("div", {
                  className: nM.kL,
                  children: [
                      (0, i.jsxs)("div", {
                          className: nM.N1,
                          children: [
                              (0, i.jsxs)(p.D, {
                                  variant: "heading-lg/semibold",
                                  className: nM.$4,
                                  children: [
                                      (0, i.jsx)(nR.B, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                          height: 20,
                                      }),
                                      eK.intl.string(eK.t["4d4T4l"]),
                                      c &&
                                          (0, i.jsx)(S.D, {
                                              onClick: () => {
                                                  tT.Ay.open(t.id, void 0, e$.b7d.TOPIC);
                                              },
                                              tag: "span",
                                              className: nM.vk,
                                              children: (0, i.jsx)(nk.R, { size: "xs", color: "currentColor" }),
                                          }),
                                  ],
                              }),
                              (0, i.jsx)(S.D, {
                                  "aria-label": eK.intl.string(eK.t.cpT0Cq),
                                  className: nM.vk,
                                  onClick: () => {
                                      r.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, i.jsx)(tA.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: nM.iQ,
                          children: [
                              (0, i.jsx)(E.E, {
                                  selectable: !0,
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  style: { maxHeight: 220 },
                                  className: a()(nM.I4, eY.PT),
                                  children: (0, i.jsx)("div", {
                                      ref: h,
                                      children: nI.A.parseForumPostGuidelines(t.topic, !0, {
                                          channelId: t.id,
                                          allowHeading: !0,
                                          allowList: !0,
                                      }),
                                  }),
                              }),
                              u &&
                                  (0, i.jsxs)("div", {
                                      className: nM.jP,
                                      children: [
                                          (0, i.jsx)("div", { className: nM.D7 }),
                                          (0, i.jsx)("div", {
                                              className: nM.kx,
                                              children: (0, i.jsx)(S.D, {
                                                  className: nM.DD,
                                                  onClick: () => {
                                                      (0, tp.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("47514"),
                                                              n.e("45457"),
                                                          ]).then(n.bind(n, 494664));
                                                          return (n) => (0, i.jsx)(e, { ...n, channel: t });
                                                      });
                                                  },
                                                  children: (0, i.jsxs)(E.E, {
                                                      variant: "text-sm/semibold",
                                                      color: "text-brand",
                                                      className: nM.ur,
                                                      children: [
                                                          eK.intl.string(eK.t.Vu7odK),
                                                          (0, i.jsx)(tN._, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: nM.yS,
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
var nw = n(49999),
    nD = n(478699);
function nL(e) {
    let { onDismiss: t } = e;
    return (0, i.jsxs)(S.D, {
        onClick: () => {
            open(nf.X_), (0, tg.Md)({ readGuideCta: !0 });
        },
        className: a()(eQ.kL, nD.kL, tZ.mainCard),
        children: [
            (0, i.jsxs)("div", {
                className: nD.mG,
                children: [
                    (0, i.jsxs)("div", {
                        className: nD.cy,
                        children: [
                            (0, i.jsx)(tq.p, {
                                size: "custom",
                                width: 28,
                                height: 28,
                                color: "currentColor",
                                className: nD.Mg,
                            }),
                            (0, i.jsx)(E.E, {
                                variant: "text-sm/semibold",
                                color: "text-strong",
                                children: eK.intl.string(eK.t.uvGmCx),
                            }),
                            (0, i.jsxs)("div", {
                                className: nD.lm,
                                children: [
                                    (0, i.jsx)(tb.m, { size: "md", color: "currentColor", className: nD.G }),
                                    (0, i.jsx)(E.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: eK.intl.string(eK.t.t2GkVR),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(S.D, {
                        onClick: (e) => {
                            e.stopPropagation(), t(nw.i.DISMISS), (0, tg.Md)({ readGuideCta: !1 });
                        },
                        children: (0, i.jsx)(tA.P, { size: "xs", color: "currentColor", className: nD.ut }),
                    }),
                ],
            }),
            (0, i.jsx)("hr", { className: nD.me }),
            (0, i.jsxs)("div", {
                className: nD.mG,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(p.D, {
                                className: a()(eQ.__invalid_channelName, nD.DD),
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: eK.intl.string(eK.t.JtSpD0),
                            }),
                            (0, i.jsx)(E.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: eK.intl.string(eK.t.Ajhp03),
                            }),
                        ],
                    }),
                    (0, i.jsx)("img", {
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
    nH = n(39623),
    nB = n(278416),
    nV = n(465532),
    nW = n(608299),
    n$ = n(355622),
    nq = n(375499),
    nK = n(151271),
    nX = n(698279),
    nQ = n(266599);
let nY = s.memo(
    s.forwardRef(function (e, t) {
        let { disabled: n, type: l, className: r, onClick: o, channel: c } = e,
            [u, m, h] = (0, nK.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], d.x),
            x = s.useCallback(() => {
                (0, nK.ed)(l, c.id), o?.();
            }, [l, o, c.id]);
        return n
            ? null
            : (0, i.jsx)("div", {
                  className: a()(nX.VQ, nQ.UD),
                  ref: t,
                  children: (0, i.jsx)(nq.A, {
                      className: a()(nQ.Z8, r),
                      onClick: x,
                      active: (u === nX.kx.GIF || u === nX.kx.EMOJI || u === nX.kx.STICKER) && m === l && h === c.id,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                  }),
              });
    }),
);
var nJ = n(201349),
    nZ = n(625928),
    n0 = n(960850),
    n1 = n(702841),
    n2 = n(364522),
    n4 = n(215497),
    n8 = n(914905),
    n7 = n(750943),
    n3 = n(844222),
    n5 = n(780777),
    n9 = n(518960),
    n6 = n(811998);
let le = { scale: 0.95, opacity: 0 },
    lt = { scale: 1, opacity: 1 },
    ln = { scale: 1, opacity: 1 },
    ll = { tension: 2400, friction: 52 },
    li = `.${n6.EJ}`,
    ls = { behavior: "smooth", block: "nearest", inline: "nearest" };
function lr(e) {
    let { channelId: t, onClick: n, onClose: l, onMouseEnter: r, listItemProps: a } = e,
        o = s.useRef(null),
        c = (0, g.bG)([eP.A], () => eP.A.getChannel(t), [t]);
    return (
        q()(null != c, "Forum Channel is null"),
        (0, i.jsxs)(S.D, {
            ...a,
            "aria-label": eK.intl.string(eK.t.nzoF5p),
            className: n6.EJ,
            onMouseEnter: r,
            onClick: (e) => {
                0 === e.detail && o.current?.activateUploadDialogue(), (0, tg.ri)({ isMobile: !1 }), n?.();
            },
            children: [
                (0, i.jsx)(n5.A, {
                    className: n6.Fg,
                    ref: o,
                    onChange: (e) => {
                        l?.(),
                            (0, n9.R)(e.currentTarget.files, c, ti.C.FirstThreadMessage, {
                                requireConfirm: !0,
                                origin: "file_picker",
                            }),
                            (e.currentTarget.value = null);
                    },
                    multiple: c.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
                (0, i.jsx)(n7.X, { size: "custom", color: "currentColor", width: 28, height: 28, className: n6.T3 }),
            ],
        })
    );
}
function la(e) {
    let { channelId: t, closePopout: n } = e,
        [l, r] = s.useState(!1),
        { reducedMotion: a } = s.useContext(n3.C),
        o = (0, nT.z)({ from: a.enabled ? lt : le, to: ln, config: ll }, "animate-always"),
        c = (0, g.bG)([L.A], () => L.A.keyboardModeEnabled),
        d = (0, g.bG)([ta.A], () => ta.A.getUploads(t, n$.oU.CREATE_FORUM_POST.drafts.type)),
        x = (0, m.Ay)({
            id: "forum-composer-attachments-popout",
            isEnabled: c,
            orientation: h.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, i.jsx)(tf.animated.div, {
        className: n6.jC,
        onMouseLeave: () => {
            l || c || n();
        },
        onFocus: (e) => {
            e.target.scrollIntoView(ls);
        },
        style: o,
        children: (0, i.jsx)(n2.Ip, {
            orientation: "horizontal",
            className: n6.SW,
            paddingFix: !1,
            fade: !0,
            children: (0, i.jsx)(u.hD, {
                navigator: x,
                children: (0, i.jsx)(u.PR, {
                    children: (e) => {
                        let { ref: n, ...l } = e;
                        return (0, i.jsxs)("div", {
                            className: n6.p8,
                            ref: n,
                            ...l,
                            children: [
                                d.map((e) =>
                                    (0, i.jsx)(
                                        n8.A,
                                        {
                                            channelId: t,
                                            draftType: n$.oU.CREATE_FORUM_POST.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: c,
                                            hideFileName: !0,
                                            size: n4.L.SMALL,
                                        },
                                        e.id,
                                    ),
                                ),
                                (0, i.jsx)(lo, { channelId: t, setFileInputOpen: r }),
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
    return (0, i.jsx)(lr, {
        channelId: t,
        onClick: () => {
            n(!0);
        },
        onClose: () => {
            n(!1),
                requestAnimationFrame(() => {
                    (0, nP.vq)(document.activeElement, HTMLElement) && document.activeElement.scrollIntoView(ls);
                });
        },
        listItemProps: l,
    });
}
function lc(e) {
    let { channelId: t } = e,
        [n, l] = s.useState(!1),
        r = s.useRef(null),
        a = (0, g.bG)([ta.A], () => ta.A.getUploads(t, n$.oU.CREATE_FORUM_POST.drafts.type)),
        o = a.length,
        c = o > 0;
    s.useEffect(() => {
        n && !c && l(!1);
    }, [n, c]),
        s.useEffect(() => {
            if (document.activeElement !== document.body && null != document.activeElement) return;
            l(o > 0);
            let e = requestAnimationFrame(() => {
                let e = r.current?.querySelector(li);
                e?.focus();
            });
            return () => cancelAnimationFrame(e);
        }, [o]);
    let d = () => {
            c && l(!0);
        },
        u = () => {
            l(!1);
        };
    return (0, i.jsxs)("div", {
        className: n6.kL,
        ref: r,
        onBlur: (e) => {
            null == e.relatedTarget ||
                r.current?.contains(e.relatedTarget) ||
                (e.relatedTarget?.closest('[role="dialog"]') == null && u());
        },
        children: [
            c
                ? !n &&
                  (0, i.jsxs)(S.D, {
                      "aria-label": eK.intl.string(eK.t.nzoF5p),
                      className: n6.fY,
                      tabIndex: 0,
                      onClick: d,
                      onFocus: () => {
                          d(),
                              c &&
                                  requestAnimationFrame(() => {
                                      let e = r.current?.querySelector(li);
                                      e?.focus();
                                  });
                      },
                      onMouseEnter: d,
                      children: [
                          (0, i.jsx)(n8.J, { upload: a[0], size: n4.L.SMALL }),
                          (0, i.jsx)("div", { className: n6.qS, children: o }),
                      ],
                  })
                : (0, i.jsx)(lr, { onMouseEnter: d, channelId: t }),
            n && (0, i.jsx)(la, { channelId: t, closePopout: u }),
        ],
    });
}
var ld = n(343151);
function lu(e) {
    let { parentChannel: t } = e,
        n = (0, n1.yK)([ta.A], () => {
            let e = ta.A.getUploads(t.id, n$.oU.CREATE_FORUM_POST.drafts.type);
            return e?.filter((e) => !0 !== e.isThumbnail);
        });
    return (0, i.jsxs)("div", {
        className: ld.kL,
        children: [
            (0, i.jsx)(E.E, {
                variant: "text-md/semibold",
                color: "text-muted",
                children: eK.intl.string(eK.t.omKGKu),
            }),
            (0, i.jsx)(E.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eK.intl.string(eK.t["zUjLl+"]),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(n2.Ip, {
                    className: ld.mw,
                    orientation: "horizontal",
                    paddingFix: !1,
                    fade: !0,
                    children: (0, i.jsxs)("div", {
                        className: ld.p8,
                        children: [
                            n.map((e) =>
                                (0, i.jsx)(
                                    n8.A,
                                    {
                                        channelId: t.id,
                                        draftType: n$.oU.CREATE_FORUM_POST.drafts.type,
                                        upload: e,
                                        keyboardModeEnabled: !0,
                                        hideFileName: !0,
                                        size: n4.L.SMALL,
                                    },
                                    e.id,
                                ),
                            ),
                            (0, i.jsx)(lr, { channelId: t.id }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
var lm = n(241326),
    lh = n(851023),
    lx = n(915089),
    lg = n(607470),
    lf = n(703007),
    lj = n(635377),
    lp = n.n(lj);
let lv = "absolute",
    lA = new (lp())({ max: 100 });
function lC(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: l } = e;
    return s.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: l } = e,
                    i = `${t}-${n}-${l}`,
                    s = lA.get(i);
                if (null != s) return s;
                {
                    let e = ((e, t, n, l) => {
                        if (0 === n) return [];
                        if (1 === n) return [{ width: e, height: t, top: 0, left: 0, position: lv }];
                        if (2 === n) {
                            let n = Math.ceil((e - l) / 2);
                            return [
                                { top: 0, left: 0, position: lv, width: n, height: t },
                                { top: 0, left: n + l, position: lv, width: n, height: t },
                            ];
                        }
                        if (3 === n) {
                            let n = Math.ceil((e - l) / 2),
                                i = Math.ceil((t - l) / 2);
                            return [
                                { top: 0, left: 0, position: lv, width: n, height: t },
                                { top: 0, left: n + l, position: lv, width: n, height: i },
                                { top: i + l, left: n + l, position: lv, width: n, height: i },
                            ];
                        }
                        {
                            let n = Math.ceil((e - l) / 2),
                                i = Math.ceil((t - l) / 2);
                            return [
                                { top: 0, left: 0, position: lv, width: n, height: i },
                                { top: i + l, left: 0, position: lv, width: n, height: i },
                                { top: 0, left: n + l, position: lv, width: n, height: i },
                                { top: i + l, left: n + l, position: lv, width: n, height: i },
                            ];
                        }
                    })(n, l, t, 4);
                    return lA.set(i, e), e;
                }
            })({ numAttachments: t, containerWidth: n, containerHeight: l }),
        [t, n, l],
    );
}
function lN(e) {
    return e.map((t, n) => ({
        minWidth: 2 * e[n].width,
        minHeight: 2 * e[n].height,
        maxWidth: 2 * e[n].width,
        maxHeight: 2 * e[n].height,
    }));
}
n(323874), n(14289), n(35956);
var lb = n(304162),
    lE = n(735438),
    lS = n(724442),
    ly = n(998218),
    lT = n(36491),
    lR = n(222209);
let lk = [{ name: "Media Post Thumbnail", extensions: ["jpg", "jpeg", "png", "gif", "webp"] }],
    lI = (0, lx.Ld)();
function lM(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: l } = e,
        s = lC({ numAttachments: t.length, containerWidth: n, containerHeight: l });
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsx)(
                "div",
                {
                    style: s[t],
                    children:
                        !0 === e.isVideo
                            ? (0, i.jsx)(lg.A, { src: e.src, className: lR.xn, "aria-hidden": !0 })
                            : (0, i.jsx)("img", { src: e.src, className: lR.xn, "aria-hidden": !0, alt: e?.alt ?? "" }),
                },
                e.src,
            ),
        ),
    });
}
let l_ = (e) => {
    let { parentChannel: t } = e,
        { textAreaState: l } = (0, ev.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        r = (0, n1.bG)([L.A], () => L.A.keyboardModeEnabled),
        o = (function (e, t) {
            let { mediaAttachments: n, hasThumbnail: l } = (function (e) {
                    let [t, n] = s.useState(null),
                        l = (0, n1.yK)([ta.A], () => {
                            let t = ta.A.getUploads(e.id, n$.oU.CREATE_FORUM_POST.drafts.type),
                                n = t.find((e) => e.isThumbnail);
                            return null != n ? [n] : t.filter((e) => e.isVideo || e.isImage);
                        }),
                        i = s.useMemo(() => l.some((e) => e.isThumbnail), [l]);
                    return (
                        s.useEffect(() => {
                            let e = [];
                            return (
                                n(
                                    l.slice(0, lb.A8).flatMap((t) => {
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
                i = Math.max(lb.A8 - (n?.length ?? 0), 0),
                { embeds: r } = (function (e, t, n) {
                    let l = s.useRef(new Map()),
                        [, i] = s.useState(null),
                        [r, a] = s.useState(null),
                        o = s.useMemo(
                            () =>
                                lE.debounce((e, n) => {
                                    if (null == n || e || 0 === t) return;
                                    let i = n.match(ly.A.URL_REGEX);
                                    if (null == i || 0 === i.length) {
                                        (l.current = new Map()), a(null);
                                        return;
                                    }
                                    a(lE.uniq(i).slice(0, lb.A8));
                                }, 1e3),
                            [t, l, a],
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
                                        var r, a, o;
                                        let t = await lT.L4(s);
                                        (r = new Map(n)),
                                            (a = s),
                                            (o = t?.embeds),
                                            o?.forEach((e) => {
                                                var t, n;
                                                let l =
                                                    ((t = a),
                                                    (n = e),
                                                    t.find((e) => n?.url != null && e.startsWith(n.url)));
                                                if (null == l) return;
                                                let i = r.get(l);
                                                null == i ? r.set(l, [e]) : i.push(e);
                                            }),
                                            (e.current = r),
                                            i({});
                                    } catch (e) {}
                            })(l, r);
                        }, [r]);
                    let c = (0, lS.A)(l),
                        d = s.useMemo(() => {
                            let e = [];
                            return (
                                r?.forEach((t) => {
                                    let n = c.get(t);
                                    null != n && e.push(...n);
                                }),
                                e.length > 0 ? e : null
                            );
                        }, [r, c]);
                    return { embeds: e ? null : d };
                })(l, i, t),
                a = s.useMemo(
                    () =>
                        r?.flatMap((e) => {
                            let t = (0, lb.m3)(e);
                            return null == t ? [] : { id: t, src: t, spoiler: !1, alt: e.title };
                        }),
                    [r],
                ),
                o = [...(n ?? [])];
            return !l && i > 0 && o.push(...(a?.slice(0, i) ?? [])), o;
        })(t, l.textValue?.trim()),
        c = s.useMemo(() => o.find((e) => e.isThumbnail), [o]),
        u = null != o && o.length > 0,
        m = s.useMemo(() => {
            let e = o?.length > 1 ? 1.15 : 1;
            return { width: 153 * e, height: 86 * e };
        }, [o]),
        h = s.useCallback(
            (e) => {
                null != c && nW.A.remove(t.id, c.id, n$.oU.CREATE_FORUM_POST.drafts.type),
                    (0, n9.R)(e.currentTarget.files, t, n$.oU.CREATE_FORUM_POST.drafts.type, {
                        requireConfirm: !0,
                        isThumbnail: !0,
                        origin: "file_picker",
                    }),
                    (e.currentTarget.value = null);
            },
            [t, c],
        ),
        x = (e) => {
            e.stopPropagation(),
                c?.upload != null &&
                    (0, tp.openModalLazy)(async () => {
                        let e = c.upload;
                        q()(null != e, "upload should not be null");
                        let { default: l } = await Promise.resolve().then(n.bind(n, 427281));
                        return (n) =>
                            (0, i.jsx)(l, {
                                ...n,
                                upload: e,
                                channelId: t.id,
                                draftType: n$.oU.CREATE_FORUM_POST.drafts.type,
                                onSubmit: (n) => {
                                    let { name: l, description: i, spoiler: s } = n;
                                    nW.A.update(t.id, e.id, n$.oU.CREATE_FORUM_POST.drafts.type, {
                                        filename: l,
                                        description: i,
                                        spoiler: s,
                                    });
                                },
                                disableSpoiler: !0,
                            });
                    });
        },
        g = (0, i.jsx)(lf.A, {
            color: j.XD.CUSTOM,
            className: lR.zL,
            innerClassName: lR.Nr,
            onChange: h,
            multiple: !1,
            "aria-hidden": !0,
            filters: lk,
            "aria-describedby": lI,
            "aria-label": u ? eK.intl.string(eK.t.MxJI3f) : eK.intl.string(eK.t.Cbiofa),
            children: u
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(lM, { mediaAttachments: o, containerWidth: m.width, containerHeight: m.height }),
                          (0, i.jsxs)("div", {
                              className: a()(lR.On, { [lR.bP]: o?.length > 2 }),
                              children: [
                                  (0, i.jsx)(E.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: eK.intl.string(eK.t.MxJI3f),
                                  }),
                                  null == c &&
                                      (0, i.jsx)(nk.R, { size: "xs", color: "currentColor", className: lR.IZ }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(n7.X, {
                              size: "custom",
                              width: 39,
                              height: 39,
                              color: "currentColor",
                              className: lR.T3,
                          }),
                          (0, i.jsx)(E.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: eK.intl.string(eK.t.Cbiofa),
                          }),
                      ],
                  }),
        });
    return (0, i.jsx)("div", {
        className: lR.iT,
        style: m,
        children:
            null != c
                ? (0, i.jsx)(n4.A, {
                      actions: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(lh.A, {
                                  className: lR.XI,
                                  tooltip: eK.intl.string(eK.t.Y8ujqr),
                                  onClick: x,
                                  children: (0, i.jsx)(nk.R, { size: "xs", color: "currentColor" }),
                              }),
                              (0, i.jsx)(lh.A, {
                                  className: lR.XI,
                                  tooltip: eK.intl.string(eK.t.vN7REz),
                                  onClick: () => nW.A.remove(t.id, c.id, n$.oU.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, i.jsx)(lm.u, { size: "md", color: "currentColor" }),
                              }),
                          ],
                      }),
                      draftType: n$.oU.CREATE_FORUM_POST.drafts.type,
                      id: c.id,
                      channelId: t.id,
                      handleEditModal: x,
                      keyboardModeEnabled: r,
                      size: n4.L.SMALL,
                      className: lR.Xc,
                      children: g,
                  })
                : g,
    });
};
var lw = n(451909),
    lD = n(375199),
    lL = n(141268),
    lP = n(931664),
    lO = n(631576),
    lF = n(474078),
    lU = n(55294),
    lz = n(383233),
    lG = n(101392),
    lH = n(806150),
    lB = n(753738);
function lV(e, t) {
    return { type: e, message: t ?? null };
}
function lW(e, t) {
    return lV(1, (0, lB.cw)(e, t?.id));
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
    lQ = n(892547),
    lY = n(658675),
    lJ = n(628284),
    lZ = n(506115);
let l0 = "data-listbox-item-id",
    l1 = Object.freeze({ STANDARD: lZ.wH, BRAND: lZ.hE });
function l2(e) {
    return String(e);
}
let l4 = s.createContext({ activeDescendant: null, selected: new Set(), setSelected: () => null, itemToString: l2 });
function l8(e) {
    let {
            placeholder: t,
            children: n,
            value: l,
            onChange: r,
            className: o,
            listClassName: c,
            "aria-label": d,
            multiSelect: h = !1,
            autoFocus: x = !1,
            maxVisibleItems: g = 5,
            itemToString: f = l2,
            emptyStateText: j,
            emptyStateHeader: v,
            onQueryChange: A,
        } = e,
        [C, N] = s.useState(""),
        S = s.useCallback(
            (e) => {
                N(e), A?.(e);
            },
            [A],
        ),
        [y] = s.useState(!0),
        [T, R] = s.useState(null),
        k = s.useId(),
        I = s.useRef(null);
    s.useLayoutEffect(() => {
        let e = document.querySelector(`[${l0}="${T}"]`),
            t = I.current;
        null != t && null != e && t.scrollIntoViewNode({ node: e, padding: 12 });
    }, [T]);
    let M = n(C),
        _ = 0 === M.length,
        w = v ?? eK.intl.string(eK.t["4o4z3e"]),
        D = s.useId(),
        L = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = I.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        P = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = I.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        O = s.useCallback((e, t) => {
            R(t);
            let n = document.querySelector(e),
                l = I.current;
            null != l && null != n && l.scrollIntoViewNode({ node: n });
        }, []),
        F = (0, m.Ay)({ id: D, isEnabled: !0, useVirtualFocus: !0, scrollToStart: L, scrollToEnd: P, setFocus: O });
    return (0, i.jsx)(u.hD, {
        navigator: F,
        children: (0, i.jsx)(u.PR, {
            children: (e) => {
                let { ref: n, onKeyDown: s, ...u } = e;
                return (0, i.jsxs)("div", {
                    ref: n,
                    role: "combobox",
                    "aria-label": d,
                    "aria-expanded": y,
                    "aria-controls": y ? k : void 0,
                    "aria-owns": k,
                    "aria-haspopup": "listbox",
                    className: a()(lZ.EA, o),
                    children: [
                        (0, i.jsx)("div", {
                            className: lZ.wx,
                            children: (0, i.jsx)(lQ.I, {
                                size: "sm",
                                autoFocus: x,
                                placeholder: t,
                                query: C,
                                onChange: S,
                                onKeyDown: s,
                                onBlur: () => R(null),
                                onClear: () => S(""),
                                inputProps: { "aria-multiline": !1, "aria-activedescendant": null != T ? T : void 0 },
                            }),
                        }),
                        (0, i.jsx)("div", {
                            children:
                                y &&
                                (_
                                    ? (0, i.jsxs)("div", {
                                          className: lZ.Ie,
                                          children: [
                                              (0, i.jsx)(p.D, { variant: "heading-md/semibold", children: w }),
                                              (0, i.jsx)(E.E, {
                                                  color: "text-muted",
                                                  variant: "text-md/normal",
                                                  children: j ?? eK.intl.string(eK.t.QwSXv8),
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)(l4.Provider, {
                                          value: { activeDescendant: T, selected: l, setSelected: r, itemToString: f },
                                          children: (0, i.jsx)(b.OZ, {
                                              ...u,
                                              style: { maxHeight: 46 * g },
                                              "aria-multiselectable": h,
                                              id: k,
                                              ref: I,
                                              className: a()(lZ.p_, lZ.XG, c),
                                              sections: [M.length],
                                              sectionHeight: 0,
                                              rowHeight: 40,
                                              renderRow: (e) => {
                                                  let { row: t } = e;
                                                  return M[t];
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
let l7 = s.createContext(null);
function l3(e) {
    let { value: t, children: n, disabled: l = !1, selectedColor: r = l1.STANDARD, ...o } = e,
        { activeDescendant: c, selected: d, setSelected: m, itemToString: h } = s.useContext(l4),
        x = h(t),
        g = c === x,
        f = o?.selected ?? d.has(t),
        j = (0, u.rm)(x);
    return (0, i.jsx)(S.D, {
        tag: "li",
        id: x,
        onClick: () => (l ? null : m(t)),
        [l0]: t,
        className: a()(lZ.AS, { [lZ.in]: g, [r]: f, [lZ.r9]: l }),
        ...j,
        role: "option",
        "aria-selected": f,
        "aria-disabled": l,
        children: (0, i.jsx)(l7.Provider, { value: t, children: n }),
    });
}
(l3.Colors = l1),
    (l3.Label = function (e) {
        let { children: t } = e;
        return (0, i.jsx)("span", { className: lZ.IR, children: t });
    }),
    (l3.Icon = function (e) {
        let { children: t } = e;
        return (0, i.jsx)("span", { className: lZ.pp, children: t });
    }),
    (l3.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = s.useContext(l4),
            l = s.useContext(l7);
        return (0, i.jsx)("span", {
            className: lZ.pp,
            children: (0, i.jsx)(lY.P, { checked: t ?? (null != l && n.has(l)) }),
        });
    }),
    (l3.Checkmark = function () {
        let { selected: e } = s.useContext(l4),
            t = s.useContext(l7);
        return e.has(t)
            ? (0, i.jsx)("span", {
                  className: lZ.pp,
                  children: (0, i.jsx)(lJ.y, { size: "custom", color: "currentColor", width: 20, height: 20 }),
              })
            : null;
    });
var l5 = n(305866),
    l9 = n(183610);
function l6(e) {
    let {
            children: t,
            placeholder: n,
            value: l,
            onChange: r,
            onClose: o,
            className: c,
            multiSelect: d,
            emptyStateText: u,
            emptyStateHeader: m,
            onQueryChange: h,
            ...x
        } = e,
        g = s.useCallback(
            (e) => {
                r(e), d || o?.();
            },
            [r, o, d],
        );
    return (0, i.jsx)(l5.l, {
        className: a()(l9.kL, l9.XG, c),
        children: (0, i.jsx)(l8, {
            ...x,
            value: l,
            multiSelect: d,
            onChange: g,
            placeholder: n,
            children: t,
            listClassName: l9.p_,
            emptyStateText: u,
            emptyStateHeader: m,
            onQueryChange: h,
        }),
    });
}
var ie = n(159273),
    it = n(6858);
let il = (e) => {
    let { tag: t } = e,
        { id: n, name: l, emojiId: s, emojiName: r } = t,
        a = (0, g.bG)([ie.Ay], () => (null != s ? ie.Ay.getUsableCustomEmojiById(s) : null)),
        o = null != s || null != r;
    return (0, i.jsx)(
        l3,
        {
            value: n,
            children: (0, i.jsx)(l3.Label, {
                children: (0, i.jsxs)("div", {
                    className: it.nM,
                    children: [
                        o
                            ? (0, i.jsx)(t8.A, {
                                  className: it.__invalid_emoji,
                                  emojiId: s,
                                  emojiName: r,
                                  animated: !!a?.animated,
                              })
                            : (0, i.jsx)(nB.g, { size: "md", color: "currentColor", className: it.__invalid_emoji }),
                        (0, i.jsx)(E.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                    ],
                }),
            }),
        },
        n,
    );
};
function ii(e) {
    let { parentChannel: t, appliedTags: n, maxTagsApplied: l, onSelectTag: s, onClose: r } = e,
        a = (0, ex.OT)(t);
    return (0, i.jsx)(l6, {
        value: n,
        onChange: (e) => {
            (!l || n.has(e)) && (s(e), r());
        },
        placeholder: eK.intl.string(eK.t.MbhGm7),
        "aria-label": eK.intl.string(eK.t.MbhGm7),
        children: (e) =>
            a.filter((t) => lX()(e.toLowerCase(), t.name.toLowerCase())).map((e) => (0, i.jsx)(il, { tag: e }, e.id)),
    });
}
var is = n(376310),
    ir = n(291747),
    ia = n(935090);
let io = (e) => {
    let { rateLimitPerUser: t, slowmodeCooldownGuess: n, isBypassSlowmode: l, leadingIcon: s = !1 } = e,
        r = (0, n0.VI)(t, !0),
        o = (0, n0.pS)(n, l),
        c = (0, i.jsx)(E.E, { variant: "text-sm/normal", color: "text-muted", children: o }),
        d = (0, i.jsx)(ir.x, { size: "xs", color: "currentColor", className: a()(ia.Eq, { [ia.iE]: s }) });
    return (0, i.jsx)(Q.m, {
        text: r,
        children: (0, i.jsx)("div", {
            className: ia.ns,
            children: s ? (0, i.jsxs)(i.Fragment, { children: [d, c] }) : (0, i.jsxs)(i.Fragment, { children: [c, d] }),
        }),
    });
};
var ic = n(770178),
    id = n(765548);
let iu = () => {
    let [e, t] = s.useState(400),
        n = (0, id.A)((e) => {
            t(e.target.clientWidth);
        });
    return { containerRef: (0, ic.w)(n), containerWidth: e };
};
var im = n(746080),
    ih = n(955780);
let ix = n$.oU.CREATE_FORUM_POST;
function ig(e) {
    var t, n;
    let l,
        r,
        { parentChannel: o, isSearchLoading: c, numResults: u, onChange: m, canCreatePost: h, inputRef: x } = e,
        f = !(0, W.V)(o) && h,
        {
            textAreaState: j,
            formOpen: p,
            previewing: v,
        } = (0, ev.kU)((e) => {
            let { textAreaState: t, formOpen: n, previewing: l } = e;
            return { textAreaState: t, formOpen: n, previewing: l };
        }, d.x),
        [A, C] = s.useState(null),
        N = s.useContext(to.EH),
        b = s.useCallback(() => {
            N.bumpDispatchPriority();
        }, [N]),
        E = (0, g.bG)([eF.A], () => eF.A.can(e$.xBc.ATTACH_FILES, o)),
        S = (0, g.yK)([ta.A], () => ta.A.getUploads(o.id, ti.C.FirstThreadMessage)),
        y = p && E && f,
        T = o?.isMediaChannel() === !0,
        R =
            ((t = o),
            (n = x),
            (l = (0, ev.ST)()),
            (r = (0, ex.Hv)(t)),
            s.useCallback(() => {
                let {
                    formOpen: e,
                    setFormOpenFromUserAction: i,
                    name: s,
                    textAreaState: a,
                    hasClickedForm: o,
                } = l.getState();
                !e &&
                    (setTimeout(() => {
                        (0, nP.vq)(n.current, HTMLTextAreaElement) && n.current?.focus();
                    }, 0),
                    ((o && s.length > 0) ||
                        (a.textValue.trim().length > 0 && a.textValue.trim() !== r) ||
                        ta.A.getUploads(t.id, ti.C.FirstThreadMessage).length > 0) &&
                        i());
            }, [l, t.id, r, n])),
        k = (function (e) {
            let { formOpen: t } = (0, ev.kU)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, d.x),
                n = (0, ev.ST)(),
                l = (0, lU.N)({ parentChannel: e });
            s.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                e(null), t(null);
            }, [t, n]);
            let i = s.useCallback(
                (t, l, i) => {
                    let { name: s, textAreaState: r } = n.getState();
                    null == t && (t = r.textValue), (t = t.trim());
                    let { content: a } = lw.Ay.parse(e, t);
                    if (
                        ((t = a),
                        (null == l || 0 === l.length) &&
                            (l = lP.A.getStickerPreview(e.id, ix.drafts.type)?.map((e) => e.id)),
                        (null == i || 0 === i.length) && (i = ta.A.getUploads(e.id, ti.C.FirstThreadMessage)),
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
                async (t, s, r) => {
                    let {
                            setNameError: a,
                            setMessageError: o,
                            setSubmitting: c,
                            resetFormState: d,
                            formOpen: u,
                            setFormOpen: m,
                            setPreviewing: h,
                            setFormOpenFromUserAction: x,
                            setGuidelinesOpen: g,
                        } = n.getState(),
                        f = lq.A.hasSeen(e.id);
                    if (!u)
                        return (
                            (0, tg.jr)({ guildId: e.guild_id, channelId: e.id }),
                            f || n.getState().setGuidelinesOpen(!0),
                            x(),
                            { shouldClear: !1, shouldRefocus: !1 }
                        );
                    let { content: j, stickers: p, uploads: v, hasNameError: A, hasMessageError: C } = i(t, s, r);
                    if (
                        (a(A ? lV(0, eK.intl.string(eK.t["71wuR0"])) : null),
                        o(C ? lV(0, eK.intl.string(eK.t["w/BT3G"])) : null),
                        A || C)
                    )
                        return { shouldClear: !1, shouldRefocus: !0 };
                    try {
                        c(!0);
                        let { valid: t } = await (0, lH.i)({
                            content: j,
                            stickers: p,
                            uploads: v,
                            type: ix,
                            channel: e,
                        });
                        if (!t) return { shouldClear: !1, shouldRefocus: !0 };
                        let n = await l(j, p, v);
                        return (
                            (0, tl.JA)(n),
                            td.A.resort(e.id),
                            (0, lO.x5)(e.id, ix.drafts.type),
                            d(),
                            m(!1),
                            h(!1),
                            lq.A.markAsSeen(e.id),
                            g(!1),
                            { shouldClear: !0, shouldRefocus: !1 }
                        );
                    } catch (t) {
                        return (
                            t.body?.code === e$.t02.AUTOMOD_TITLE_BLOCKED
                                ? a(lW(t.body, e))
                                : t.body?.code === e$.t02.AUTOMOD_MESSAGE_BLOCKED
                                  ? o(lW(t.body, e))
                                  : t.body?.code === e$.t02.INVALID_FORM_BODY &&
                                    t.body?.errors?.name != null &&
                                    a(lV(3, eK.intl.string(eK.t["71wuR0"]))),
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
        s.useLayoutEffect(m, [p, j, S, m]),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("div", {
                "aria-label": f ? eK.intl.string(eK.t.dq7mAa) : eK.intl.string(eK.t["5h0QOP"]),
                className: a()(ih.kL, { [ih.yZ]: !p }),
                onClick: !p && f ? R : void 0,
                children: (0, i.jsxs)("form", {
                    onMouseDown: b,
                    onFocus: b,
                    onSubmit: (e) => {
                        e.preventDefault(), f && k();
                    },
                    children: [
                        (0, i.jsxs)("div", {
                            className: ih.KJ,
                            children: [
                                (0, i.jsx)(ij, { parentChannel: o, isSearchLoading: c, inputRef: x }),
                                (0, i.jsxs)("div", {
                                    className: v ? ih.vJ : ih.Zd,
                                    children: [
                                        (0, i.jsx)(ip, {
                                            editorRef: A,
                                            parentChannel: o,
                                            isSearchLoading: c,
                                            numResults: u,
                                            inputRef: x,
                                            canCreatePost: f,
                                        }),
                                        p &&
                                            (0, i.jsx)(iC, {
                                                editorRef: A,
                                                setEditorRef: C,
                                                parentChannel: o,
                                                submit: k,
                                                disabled: !f,
                                            }),
                                        v && (0, i.jsx)(iN, {}),
                                    ],
                                }),
                                y && (T ? (0, i.jsx)(l_, { parentChannel: o }) : (0, i.jsx)(lc, { channelId: o.id })),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: ih.Zd,
                            children: [
                                y && T && (0, i.jsx)(lu, { parentChannel: o }),
                                p && (0, i.jsx)(iy, { className: ih.CN, parentChannel: o, canCreatePost: f }),
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
                formOpen: r,
                name: a,
                textAreaState: o,
                hasClickedForm: c,
                submitting: u,
            } = (0, ev.kU)((e) => {
                let {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    previewing: i,
                    textAreaState: s,
                    hasClickedForm: r,
                    submitting: a,
                } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    textAreaState: s,
                    previewing: i,
                    hasClickedForm: r,
                    submitting: a,
                };
            }, d.x),
            m = (0, ev.ST)(),
            h = (0, ex.Hv)(t),
            x = s.useCallback(() => {
                m.getState().resetFormState(),
                    nV.A.clearDraft(t.id, ti.C.ThreadSettings),
                    nV.A.clearDraft(t.id, ti.C.FirstThreadMessage),
                    nW.A.clearAll(t.id, ti.C.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    l.current?.blur(),
                    (0, tg.py)({ guildId: t.guild_id, channelId: t.id });
            }, [m, t.id, t.guild_id, l]),
            g = s.useMemo(
                () =>
                    !r &&
                    (a.trim().length > 0 ||
                        (o.textValue.trim().length > 0 && o.textValue.trim() !== h) ||
                        ta.A.getUploads(t.id, ti.C.FirstThreadMessage).length > 0) &&
                    c
                        ? (0, i.jsx)(nk.R, { size: "md", color: "currentColor", className: ih.rD })
                        : (0, i.jsx)(nF.B, { onClear: x, hasContent: r, isLoading: n || u, size: "md" }),
                [n, r, c, a, o.textValue, x, t.id, h, u],
            );
        return (0, i.jsx)("div", { className: ih.VB, children: g });
    }),
    ip = s.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: l, editorRef: r, isSearchLoading: a, numResults: o } = e,
            {
                formOpen: c,
                nameError: u,
                name: m,
                textAreaState: h,
                previewing: x,
            } = (0, ev.kU)((e) => {
                let {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    previewing: i,
                    textAreaState: s,
                    hasClickedForm: r,
                    submitting: a,
                } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: l,
                    textAreaState: s,
                    previewing: i,
                    hasClickedForm: r,
                    submitting: a,
                };
            }, d.x),
            f = (0, ev.ST)(),
            j = null != t.topic && 0 !== t.topic.length,
            v = lq.A.hasSeen(t.id),
            A = (0, ex.Hv)(t),
            C = (0, g.bG)([ez.default], () => ez.default.getCurrentUser());
        q()(null != C, "current user cannot be null"),
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
        let N = s.useCallback(
                async (e) => {
                    let n = e.clipboardData.files[0];
                    null != n &&
                        n.type.startsWith("image/") &&
                        (e.preventDefault(),
                        await (0, n9.R)([n], t, ti.C.FirstThreadMessage, { origin: "clipboard" }),
                        f.getState().setFormOpenFromUserAction());
                },
                [t, f],
            ),
            b = l$(u, { content: m });
        return (0, i.jsxs)("div", {
            className: ih.gn,
            onPaste: N,
            children: [
                c && x
                    ? (0, i.jsx)(p.D, { variant: "heading-md/semibold", className: ih.DD, children: m })
                    : (0, i.jsxs)(t$.B, {
                          gap: 4,
                          children: [
                              (0, i.jsx)(nO.d, {
                                  value: m,
                                  placeholder: l
                                      ? c || (h.textValue.length > 0 && h.textValue.trim() !== A)
                                          ? eK.intl.string(eK.t.lU4dDS)
                                          : eK.intl.string(eK.t.CjmivA)
                                      : eK.intl.string(eK.t["5h0QOP"]),
                                  rows: 1,
                                  maxLength: e$.Ign,
                                  onChange: (e) => {
                                      let n = e.target.value,
                                          l = (0, lF.A)(n, !1);
                                      f.getState().setName(l);
                                      let i = 0 === l.trim().length,
                                          s = 0 === h.textValue.trim().length,
                                          r = h.textValue.trim() === A;
                                      i && (s || r) && f.getState().setHasClickedForm(!1),
                                          c || td.A.updateForumSearchQuery(t.id, l);
                                  },
                                  onFocus: () => {
                                      f.getState().setTitleFocused(!0), f.getState().setBodyFocused(!1);
                                  },
                                  onBlur: () => {
                                      f.getState().setTitleFocused(!1);
                                      let e = (0, lF.A)(m, !0);
                                      e !== m && (f.getState().setName(e), c || td.A.updateForumSearchQuery(t.id, e));
                                  },
                                  onKeyDown: (e) => {
                                      "Enter" === e.key &&
                                          (e.preventDefault(),
                                          e.stopPropagation(),
                                          c && m.length > 0
                                              ? r?.focus()
                                              : l && e.shiftKey
                                                ? ((0, tg.sB)({ guildId: t.guild_id, channelId: t.id }),
                                                  j && !v && f.getState().setGuidelinesOpen(!0),
                                                  f.getState().setFormOpenFromUserAction(),
                                                  m.trim().length > 0 && (f.getState().setBodyFocused(!0), r?.focus()))
                                                : c ||
                                                  !(m.length > 0) ||
                                                  null != o ||
                                                  a ||
                                                  td.A.updateForumSearchQuery(t.id, m));
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
                              null != b ? (0, i.jsx)(nU.U, { error: b }) : null,
                          ],
                      }),
                c
                    ? null
                    : (0, i.jsxs)(t$.B, {
                          direction: "horizontal",
                          gap: 8,
                          justify: "end",
                          fullWidth: !1,
                          children: [
                              (0, i.jsx)(iv, { parentChannel: t }),
                              (0, i.jsx)(iT, { parentChannel: t, canCreatePost: l }),
                          ],
                      }),
            ],
        });
    });
function iv(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, ev.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, d.x),
        l = (0, ev.ST)();
    return null != t.topic && 0 !== t.topic.length
        ? (0, i.jsx)(Q.m, {
              text: eK.intl.string(eK.t["4d4T4l"]),
              children: (0, i.jsx)(nz.K, {
                  size: "sm",
                  variant: "secondary",
                  onClick: () => {
                      l.getState().setGuidelinesOpen(!n);
                  },
                  icon: nR.B,
                  "aria-label": eK.intl.string(eK.t["4d4T4l"]),
              }),
          })
        : null;
}
let iA = s.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            l = new lz.Ay({ channel_id: t.id, content: n }),
            { content: s } = (0, lD.A)(l, {
                hideSimpleEmbedContent: !0,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0,
            }),
            r = (0, lL.A)({ message: l, channel: t, compact: !1 }, s, !1);
        return (0, i.jsx)("div", { className: a()(ih.SL, ih.ly), children: r });
    }),
    iC = s.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: l = !1, editorRef: r, setEditorRef: o } = e,
            c = (0, g.bG)([ez.default], () => ez.default.getCurrentUser());
        q()(null != c, "current user cannot be null");
        let {
                messageError: u,
                previewing: m,
                textAreaState: h,
                bodyFocused: x,
                formOpen: f,
            } = (0, ev.kU)((e) => {
                let { messageError: t, textAreaState: n, previewing: l, bodyFocused: i, formOpen: s } = e;
                return { messageError: t, textAreaState: n, previewing: l, bodyFocused: i, formOpen: s };
            }, d.x),
            j = (0, ev.ST)();
        s.useEffect(() => () => (0, tg._4)({ guildId: t.guild_id, channelId: t.id }), [t.guild_id, t.id]);
        let p = s.useCallback(() => {
                j.getState().setBodyFocused(!0);
            }, [j]),
            v = s.useCallback(() => {
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
        (0, to.Vo)({ event: e$.jej.TEXTAREA_FOCUS, handler: p }),
            (0, to.Vo)({ event: e$.jej.TEXTAREA_BLUR, handler: v });
        let N = l$(u, { content: h.textValue });
        return (0, i.jsx)("div", {
            className: ih.IP,
            children: (0, i.jsxs)("div", {
                className: ih.hQ,
                children: [
                    m
                        ? (0, i.jsx)(iA, { parentChannel: t, textValue: h.textValue })
                        : (0, i.jsx)("div", {
                              onClick: p,
                              children: (0, i.jsx)(nJ.Ay, {
                                  type: ix,
                                  setEditorRef: o,
                                  channel: t,
                                  placeholder: eK.intl.string(eK.t["8IPnv1"]),
                                  textValue: h.textValue,
                                  richValue: h.richValue,
                                  focused: x,
                                  className: ih.gM,
                                  innerClassName: a()(ih.SL, { [ih.cr]: null != N }),
                                  onChange: A,
                                  onSubmit: C,
                                  promptToUpload: n9.R,
                                  disabled: l,
                                  onKeyDown: (e) => {
                                      ("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(),
                                          f &&
                                              "Escape" === e.key &&
                                              !j.getState().submitting &&
                                              (r?.blur(),
                                              j.getState().setFormOpen(!1),
                                              j.getState().setTitleFocused(!1),
                                              j.getState().setBodyFocused(!1),
                                              j.getState().setPreviewing(!1));
                                  },
                                  autoCompletePosition: "bottom",
                              }),
                          }),
                    (0, i.jsx)(nU.U, { error: N }),
                ],
            }),
        });
    });
function iN() {
    return (0, i.jsx)("div", {
        className: ih.fv,
        children: (0, i.jsx)(E.E, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: eK.intl.string(eK.t["WE/cYo"]),
        }),
    });
}
function ib(e) {
    let { textAreaState: t } = (0, ev.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        n = (0, g.yK)([ta.A], () => ta.A.getUploads(e.id, ti.C.FirstThreadMessage));
    return s.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n]);
}
function iE(e) {
    let t = ib(e),
        { appliedTags: n, name: l } = (0, ev.kU)((e) => {
            let { appliedTags: t, name: n } = e;
            return { appliedTags: t, name: n };
        }, d.x);
    return s.useMemo(() => e.hasFlag(im.lx.REQUIRE_TAG) && 0 === n.size && l.length > 0 && t, [n, l, e, t]);
}
function iS() {
    let { previewing: e } = (0, ev.kU)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, d.x),
        t = (0, ev.ST)(),
        n = s.useCallback(() => {
            t.getState().setPreviewing(!e), (0, tg.Q_)();
        }, [e, t]),
        l = e ? eK.intl.string(eK.t.ojM1xJ) : eK.intl.string(eK.t.SKNnqq);
    return (0, i.jsx)(Q.m, {
        text: l,
        children: (0, i.jsx)(nz.K, {
            variant: "secondary",
            size: "sm",
            onClick: n,
            icon: e ? nG.G : nH.b,
            "aria-label": l,
        }),
    });
}
let iy = s.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: l } = e,
        { textAreaState: r, name: a } = (0, ev.kU)((e) => {
            let { textAreaState: t, name: n } = e;
            return { textAreaState: t, name: n };
        }, d.x),
        { rateLimitPerUser: o } = t,
        c = o > 0,
        u = (0, g.bG)([lG.A], () => lG.A.getSlowmodeCooldownGuess(t.id, lG.R.CreateThread)),
        m = (0, n0._i)(t, lG.R.CreateThread),
        h = iE(t),
        x = (0, ev.ST)(),
        f = s.useCallback(() => {
            x.getState().setBodyFocused(!1);
        }, [x]),
        j = s.useMemo(() => "" !== a.trim() && "" !== r.textValue.trim(), [a, r.textValue]);
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
                                        (0, i.jsx)(nZ.A, { type: ix, textValue: r.textValue, className: ih.Dq }),
                                        c &&
                                            (0, i.jsx)(io, {
                                                rateLimitPerUser: o,
                                                slowmodeCooldownGuess: u,
                                                isBypassSlowmode: m,
                                                leadingIcon: !0,
                                            }),
                                    ],
                                }),
                                (0, i.jsx)(iv, { parentChannel: t }),
                                j && (0, i.jsx)(iS, {}),
                                (0, i.jsx)(iT, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: c && !m && u > 0,
                                }),
                            ],
                        }),
                        (0, i.jsx)(nY, { type: ix, className: ih.n1, onClick: f, channel: t }, "expression"),
                    ],
                }),
                h &&
                    (0, i.jsx)(E.E, {
                        variant: "text-sm/medium",
                        color: "text-feedback-critical",
                        className: ih.ku,
                        children: eK.intl.string(eK.t.xPfNQi),
                    }),
            ],
        })
    );
});
function iT(e) {
    let { parentChannel: t, canCreatePost: n, disabled: l, disableIfInvalid: s = !1 } = e,
        r = (0, W.V)(t),
        {
            submitting: a,
            name: o,
            formOpen: c,
        } = (0, ev.kU)((e) => {
            let { submitting: t, name: n, formOpen: l } = e;
            return { submitting: t, name: n, formOpen: l };
        }, d.x),
        u = ib(t),
        m = !iE(t) && u && o.trim().length > 0;
    return __OVERLAY__ || r
        ? null
        : (0, i.jsx)(tw.$, {
              variant: "primary",
              type: "submit",
              size: "sm",
              loading: a,
              disabled: (s && !m) || l || !n,
              icon: ei.o,
              text: c ? eK.intl.string(eK.t.pIuQI6) : eK.intl.string(eK.t.TyAuoT),
          });
}
function iR() {
    return Promise.resolve();
}
function ik(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: l,
            setPopoutOpen: r,
        } = (0, ev.kU)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: l } = e;
            return { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: l };
        }, d.x),
        o = n.size >= 5,
        c = (0, m.Ay)({
            id: `${t.id}-post-form-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: iR,
            scrollToEnd: iR,
            orientation: h.Gl.HORIZONTAL,
        }),
        { containerRef: x, containerWidth: g } = iu(),
        f = s.useRef(null),
        j = s.useRef(null),
        [p, v] = s.useState(!0),
        A = (0, ex.OT)(t),
        [C, N] = s.useState(0);
    return (s.useLayoutEffect(() => {
        let e = f.current,
            t = e?.children?.[0],
            n = null == e || null == t || t.clientHeight > e.clientHeight;
        if ((n !== p && v(n), n && null != x.current && null != t && null != t.children)) {
            let { left: e, top: n } = x.current.getBoundingClientRect(),
                l = 0;
            for (let i of t.children) {
                let { right: t, top: s, height: r } = i.getBoundingClientRect();
                if (s - n > r) break;
                t - e > l && (l = t - e);
            }
            N(l);
        }
    }, [A, p, x, g]),
    0 === A.length)
        ? null
        : (0, i.jsxs)("div", {
              className: ih.Pc,
              ref: x,
              children: [
                  (0, i.jsx)(nB.g, { size: "xs", color: "currentColor", className: ih.HZ }),
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
                                              is.A,
                                              {
                                                  ariaLabel: eK.intl.formatToPlainString(eK.t.FSZVIR, {
                                                      tagName: e.name,
                                                  }),
                                                  tag: e,
                                                  onClick: o && !n.has(e.id) ? void 0 : () => l(e.id),
                                                  disabled: !n.has(e.id) && n.size >= 5,
                                                  selected: n.has(e.id),
                                                  size: is.A.Sizes.SMALL,
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
                      (0, i.jsx)(R.Y, {
                          targetElementRef: j,
                          onRequestOpen: () => r(!0),
                          onRequestClose: () => r(!1),
                          renderPopout: (e) => {
                              let { closePopout: s } = e;
                              return (0, i.jsx)(ii, {
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
                                  children: (0, i.jsx)(tw.$, {
                                      ...e,
                                      size: "sm",
                                      variant: "secondary",
                                      icon: I.a,
                                      iconPosition: "end",
                                      text: eK.intl.string(eK.t.w6T0Yc),
                                  }),
                              }),
                      }),
                  (0, i.jsx)("div", {
                      className: a()(ih.Wk, ih.Dz),
                      children: (0, i.jsx)(tw.$, {
                          size: "sm",
                          variant: "secondary",
                          icon: I.a,
                          iconPosition: "end",
                          text: eK.intl.string(eK.t.w6T0Yc),
                      }),
                  }),
              ],
          });
}
var iI = n(602137),
    iM = n(782134),
    i_ = n(391242),
    iw = n(191023),
    iD = n(234914),
    iL = n(930125),
    iP = n(282108),
    iO = n(291812),
    iF = n(994500),
    iU =
        (((l = {})[(l.THREE_BY_TWO = 2 / 3)] = "THREE_BY_TWO"),
        (l[(l.SIXTEEN_BY_NINE = 9 / 16)] = "SIXTEEN_BY_NINE"),
        l);
let iz = { columns: 1, columnWidth: 450 },
    iG = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iU.THREE_BY_TWO,
            n = e - 2,
            l = Math.ceil(n * t);
        return [n, l];
    },
    iH = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iU.THREE_BY_TWO;
        return 60 + iG(e - 24, t)[1] + 24 + 36;
    };
var iB = n(313880),
    iV = n(461771),
    iW = n(602034);
let i$ = "data-grid-item-id",
    iq = "data-grid-section",
    iK = "data-grid-prev-section-boundary",
    iX = new Set([h.D$.UP, h.D$.DOWN, h.D$.LEFT, h.D$.RIGHT]);
function iQ(e) {
    let { section: t, column: n, row: l } = e,
        i = `[${iq}="${t}"]`,
        s = `[aria-colindex="${n}"]`,
        r = `[aria-rowindex="${l}"]`;
    return `${i}${s}${r}`;
}
let iY = { id: "NO_LIST", onKeyDown() {}, ref: s.createRef() },
    iJ = s.createContext({ id: "NO_LIST", setFocus() {} }),
    iZ = s.createContext(iY);
function i0(e) {
    let { children: t, navigator: n } = e,
        {
            id: l,
            setFocus: r,
            containerProps: { onKeyDown: a, ref: o },
        } = n,
        c = s.useMemo(() => ({ id: l, setFocus: r }), [l, r]),
        d = s.useMemo(() => ({ onKeyDown: a, ref: o, id: l }), [a, o, l]);
    return (0, i.jsx)(iZ.Provider, { value: d, children: (0, i.jsx)(iJ.Provider, { value: c, children: t }) });
}
var i1 = n(15175);
let i2 = s.memo(function (e) {
    let {
            id: t,
            threadId: n,
            goToThread: l,
            overrideMedia: s,
            className: r,
            coords: a,
            gridCoords: o,
            gridSectionBoundaries: c,
            observePostVisibilityAnalytics: d,
        } = e,
        u = (0, g.bG)([eP.A], () => eP.A.getChannel(n));
    return null == u
        ? null
        : (0, i.jsx)(i4, {
              id: t,
              channel: u,
              goToThread: l,
              overrideMedia: s,
              className: r,
              coords: a,
              gridCoords: o,
              observePostVisibilityAnalytics: d,
              gridSectionBoundaries: c,
          });
});
function i4(e) {
    let {
            id: t,
            channel: n,
            goToThread: l,
            overrideMedia: r,
            className: o,
            coords: c,
            gridCoords: d,
            gridSectionBoundaries: u,
            observePostVisibilityAnalytics: m,
        } = e,
        h = n.id,
        x = s.useRef(null),
        f = (0, g.bG)([eL.Ay], () => eL.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: j, loaded: A } = (0, eg.OA)(n),
        C = (0, P.Ay)(n),
        { messageCountText: N } = (0, ex.k6)(n),
        { isNew: b, hasUnreads: y } = (0, ex.X5)(n),
        T = s.useRef(null),
        { handleLeftClick: R, handleRightClick: k } = (0, eN.A)({ facepileRef: T, goToThread: l, channel: n });
    s.useEffect(() => {
        m?.(x.current, h);
    }, [m, h]);
    let I = (0, ex.Mw)(n, iI.T.CREATION_DATE, nf.EG.POSTED_DURATION_AGO),
        M = (0, tX.hf)(n),
        { onFocus: _, ...w } = (function (e) {
            let { id: t, section: n, row: l, column: i, boundaries: r } = e,
                [a, o] = s.useState(0 === l && 0 === i ? 0 : -1),
                { id: c, setFocus: d } = s.useContext(iJ),
                u = s.useCallback(() => d(t), [t, d]);
            return (
                s.useLayoutEffect(
                    () =>
                        (0, iV.e)(c, (e) => {
                            o(e === t ? 0 : -1);
                        }),
                    [t, c],
                ),
                {
                    [i$]: (0, iW.t$)(c, t),
                    [iq]: n,
                    [iK]: r[n],
                    role: "gridcell",
                    "aria-rowindex": l,
                    "aria-colindex": i,
                    tabIndex: a,
                    onFocus: u,
                }
            );
        })({ id: t, row: d.row, column: d.column, section: d.section, boundaries: u });
    return (0, i.jsxs)("li", {
        ref: x,
        onClick: R,
        onFocus: _,
        onContextMenu: k,
        className: a()(i1.kL, o, { [i1.nT]: f }),
        style: { ...c },
        children: [
            (0, i.jsx)(S.D, {
                onClick: R,
                focusProps: { ringTarget: x },
                onContextMenu: k,
                "aria-label": eK.intl.formatToPlainString(eK.t.pgYN6c, { title: C ?? "", count: N }),
                className: i1.Kv,
                ...w,
            }),
            (0, i.jsxs)("div", {
                className: i1.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: i1.Y6,
                        children: [
                            (0, i.jsxs)("div", {
                                className: i1.wO,
                                children: [
                                    (0, i.jsx)(iB.A, { channel: n, message: j }),
                                    (0, i.jsx)(E.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        className: i1.SD,
                                        children: I,
                                    }),
                                ],
                            }),
                            b
                                ? (0, i.jsx)(et.Lp, {
                                      className: i1.Ad,
                                      color: en.A.unsafe_rawColors.BRAND_260.css,
                                      text: eK.intl.string(eK.t.y2b7CA),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(v.F, {
                        children: (0, i.jsx)(p.D, {
                            variant: "heading-md/extrabold",
                            className: i1.DD,
                            color: y ? "text-strong" : "text-muted",
                            style: { width: `${c.width - 24}px` },
                            children: M,
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: i1.PU,
                children: (0, i.jsx)(Y.M, {
                    children: (0, i.jsx)(i8, {
                        channel: n,
                        firstMessage: j,
                        isFirstMessageLoaded: A,
                        overrideMedia: r,
                        coords: c,
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: i1.qr,
                children: (0, i.jsx)(Y.M, {
                    children: (0, i.jsx)(i3, { channel: n, firstMessage: j, facepileRef: T }),
                }),
            }),
        ],
    });
}
function i8(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: r } = e,
        { isBlocked: a, isIgnored: o } = (0, g.cf)([iF.A], () => ({
            isBlocked: null != n && iF.A.isBlockedForMessage(n),
            isIgnored: null != n && iF.A.isIgnoredForMessage(n),
        }));
    return a
        ? (0, i.jsx)(sn, { message: eK.intl.string(eK.t.Lkp2fB), containerWidth: r.width, channel: t })
        : o
          ? (0, i.jsx)(sn, { message: eK.intl.string(eK.t.yWK7ZM), containerWidth: r.width, channel: t })
          : (0, i.jsx)(i7, { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: r });
}
function i7(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: r } = e,
        a = (0, g.bG)([eP.A], () => eP.A.getChannel(t.parent_id)),
        { firstMedia: o } = (0, ex.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !1 }),
        { hasUnreads: c } = (0, ex.X5)(t),
        d = (0, g.bG)([eF.A], () => eF.A.can(e$.xBc.MANAGE_MESSAGES, t)),
        u = eD.kt.useSetting(),
        m = eD.gs.useSetting(),
        h = (0, eT.A)(m, d),
        x = (0, ef.no)(n, a, !1),
        f = t.isMediaPost(),
        [j, p] = iG(r.width - 24, f ? iU.SIXTEEN_BY_NINE : iU.THREE_BY_TWO);
    return n?.blocked || null == (s ?? o)
        ? (0, i.jsx)(st, {
              channel: t,
              firstMessage: n,
              isFirstMessageLoaded: l,
              containerWidth: r.width,
              hasUnreads: c,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(i6, {
                      mediaAttachments: x,
                      globalSpoilerRenderSetting: h,
                      containerWidth: j,
                      containerHeight: p,
                      canAutoPlay: u,
                      shouldMaintainAspectRatio: f,
                  }),
                  (0, i.jsx)("div", {
                      className: i1.GA,
                      children: (0, i.jsx)(eA.Ay, { channel: t, tagsClassName: i1.uU }),
                  }),
              ],
          });
}
function i3(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        s = (0, eu.m)(t.id),
        r = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: i1.GD,
        children: [
            (0, i.jsxs)("div", {
                className: i1.QW,
                children: [
                    (0, i.jsx)("div", {
                        className: i1.mz,
                        children: (0, i.jsx)(tX.$k, { channel: t, iconSize: 16, showReadState: !0 }),
                    }),
                    s.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("span", { className: i1.xE, children: "\u2022" }),
                                  (0, i.jsxs)("div", {
                                      className: i1.IW,
                                      children: [
                                          (0, i.jsx)(tX.gL, { channel: t, userIds: s, facepileRef: n }),
                                          (0, i.jsx)("div", {
                                              className: i1.r$,
                                              children: (0, i.jsx)(el.n, { themed: !0, dotRadius: 2 }),
                                          }),
                                          (0, i.jsx)(er.Ay, { channel: t, className: i1.mD, renderDots: !1 }),
                                      ],
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: i1.QW,
                children: [
                    r || null == l ? null : (0, i.jsx)(tX.NA, { firstMessage: l, channel: t }),
                    null == l ? null : (0, i.jsx)(tX.cn, { firstMessage: l, channel: t }),
                ],
            }),
        ],
    });
}
let i5 = (e) => e.preventDefault(),
    i9 = s.memo(function (e) {
        return (0, i.jsx)(i.Fragment, {
            children: (0, eI.LL)({ ...e, analyticsSource: "ForumPostMediaPreviewImage" }),
        });
    }),
    i6 = s.memo(function (e) {
        let {
                mediaAttachments: t,
                globalSpoilerRenderSetting: n,
                containerWidth: l,
                containerHeight: r,
                canAutoPlay: o,
                shouldMaintainAspectRatio: c = !1,
            } = e,
            { containsVideo: d, containsGif: u } = s.useMemo(() => (0, ef.$2)(t), [t]),
            m = s.useMemo(() => t.slice(0, 4), [t]),
            h = lC({ numAttachments: m.length, containerWidth: l, containerHeight: r }),
            x = (function (e) {
                let { imageContainerStyles: t, containerWidth: n, containerHeight: l } = e,
                    i = s.useRef(lN(t)),
                    r = s.useRef(n),
                    a = s.useRef(l),
                    o = n > r.current + 100,
                    c = l > a.current + 100;
                return (o || c) && (i.current = lN(t)), i.current;
            })({ imageContainerStyles: h, containerWidth: l, containerHeight: r }),
            g = (0, iP.O8)(iL.v.GUILD),
            f = s.useMemo(
                () =>
                    m.map((e, t) => {
                        let [l, s] = (0, eS.K6)(e, !n, g),
                            r = (0, eS.rx)(s),
                            m = {
                                ...x[t],
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && l ? r : e.alt,
                                onClick: i5,
                                shouldRenderAccessory: !u && !d,
                            },
                            f = (0, eE.ge)(e.src) ? `${e.src}?format=png` : e.src,
                            j = o && !l ? e.src : f;
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: i1.UV,
                                style: h[t],
                                children: [
                                    c
                                        ? (0, i.jsx)(iD.A, {
                                              ...m,
                                              src: j,
                                              backgroundSrc: f,
                                              aspectRatio: m.maxWidth / m.maxHeight,
                                              alt: m.alt ?? "",
                                              className: a()(i1.EN, { [i1.cd]: l }),
                                              imageChildClassName: i1.Rp,
                                          })
                                        : e.src.startsWith("data:")
                                          ? (0, i.jsx)(es._, {
                                                ...m,
                                                className: i1.il,
                                                imageClassName: a()(i1.LW, { [i1.cd]: l }),
                                            })
                                          : (0, i.jsx)(i9, {
                                                ...m,
                                                autoPlay: o && !l,
                                                containerClassName: i1.EK,
                                                imageClassName: a()(i1.rp, { [i1.cd]: l }),
                                                responsive: !0,
                                            }),
                                    l &&
                                        (0, i.jsx)("div", {
                                            className: i1.X,
                                            children: (0, i.jsx)(ep.A, { obscureReason: s, iconClassname: i1.yo }),
                                        }),
                                ],
                            },
                            e.src,
                        );
                    }),
                [o, u, d, n, h, x, m, c, g],
            );
        return (0, i.jsxs)("div", {
            className: i1.pV,
            style: { width: l, height: r },
            children: [
                f,
                (u || d) &&
                    (0, i.jsxs)("div", {
                        className: i1.vz,
                        children: [
                            d &&
                                (0, i.jsx)(iM.u, {
                                    color: "currentColor",
                                    size: "custom",
                                    width: 22,
                                    height: 22,
                                    className: i1.cU,
                                }),
                            u &&
                                (0, i.jsx)(i_.O, {
                                    size: "custom",
                                    width: 29,
                                    height: 29,
                                    color: "currentColor",
                                    className: i1.cU,
                                }),
                        ],
                    }),
                t.length > 4 &&
                    (0, i.jsx)(se, {
                        text: (t.length - 4).toString(),
                        icon: iw.x,
                        pillClassName: i1.v3,
                        iconClassName: i1.In,
                        textClassName: i1.EY,
                    }),
            ],
        });
    });
function se(e) {
    let { text: t, icon: n, pillClassName: l, iconClassName: s, textClassName: r } = e;
    return (0, i.jsxs)("div", {
        className: l,
        children: [
            (0, i.jsx)(n, { className: s, color: "currentColor" }),
            (0, i.jsxs)(E.E, { variant: "text-xs/medium", className: r, children: ["+", t] }),
        ],
    });
}
function st(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, containerWidth: r, hasUnreads: o } = e,
        c = eD.hH.useSetting(),
        [d, u] = iG(r - 24),
        { content: m } = (0, ex.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !0 }),
        { shouldRenderTagsRow: h } = (0, eA.BA)({ channel: t, isNew: !1 }),
        x = s.useMemo(() => ({ width: d, height: u }), [d, u]),
        g = o ? i1.kR : i1.b8;
    return (0, i.jsxs)("div", {
        className: i1.Cv,
        style: x,
        children: [
            (0, i.jsxs)("div", {
                className: i1.Qs,
                children: [
                    l &&
                        null == n &&
                        (0, i.jsx)(E.E, {
                            variant: "text-sm/normal",
                            color: o ? "text-default" : "text-muted",
                            children: eK.intl.string(eK.t.mE3KJN),
                        }),
                    l && null != n && (0, i.jsx)(iO.Ay, { message: n, content: m, className: g, compact: c }),
                ],
            }),
            (0, i.jsx)("div", {
                className: a()(i1.kh, { [i1.ZH]: !h }),
                children: h ? (0, i.jsx)(eA.Ay, { channel: t, tagsClassName: i1.uU }) : null,
            }),
        ],
    });
}
function sn(e) {
    let { message: t, containerWidth: n, channel: l } = e,
        [r, o] = iG(n - 24),
        { shouldRenderTagsRow: c } = (0, eA.BA)({ channel: l, isNew: !1 }),
        d = s.useMemo(() => ({ width: r, height: o }), [r, o]);
    return (0, i.jsxs)("div", {
        className: i1.Cv,
        style: d,
        children: [
            (0, i.jsx)("div", {
                className: i1.Qs,
                children: (0, i.jsx)(E.E, {
                    className: i1.Wv,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: t,
                }),
            }),
            (0, i.jsx)("div", {
                className: a()(i1.kh, { [i1.ZH]: !c }),
                children: c ? (0, i.jsx)(eA.Ay, { channel: l, tagsClassName: i1.uU }) : null,
            }),
        ],
    });
}
var sl = n(392421),
    si = n(980707),
    ss = n(477782),
    sr = n(901713);
function sa(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: l, layoutType: s, tagSetting: r } = (0, eh.R)(t.id),
        { showResolvedFlags: a, setShowResolvedFlags: o } = (0, B.T)(t.id),
        c = (0, eh.p)(),
        d = t.isMediaChannel(),
        u = (e) => {
            (0, tg.Cd)({ guildId: t.guild_id, channelId: t.id, sortOrder: e }), c.getState().setSortOrder(t.id, e), n();
        },
        m = (e) => {
            (0, tg.ad)({ guildId: t.guild_id, channelId: t.id, forumLayout: e }),
                c.getState().setLayoutType(t.id, e),
                n();
        },
        h = (e) => {
            c.getState().setTagSetting(t.id, e), n();
        },
        g = null != t.availableTags && t.availableTags.length > 0;
    return (0, i.jsx)("div", {
        className: sr.k,
        children: (0, i.jsxs)(si.W, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": d ? eK.intl.string(eK.t["kQN/bi"]) : eK.intl.string(eK.t.DJzbkL),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, i.jsxs)(ss.rX, {
                    label: eK.intl.string(eK.t.f8wNDl),
                    children: [
                        (0, i.jsx)(ss.iD, {
                            id: "sort-by-recent-activity",
                            group: "sort-by",
                            label: eK.intl.string(eK.t.jOPmcI),
                            action: () => u(iI.T.LATEST_ACTIVITY),
                            checked: l === iI.T.LATEST_ACTIVITY,
                        }),
                        (0, i.jsx)(ss.iD, {
                            id: "sort-by-date-posted",
                            group: "sort-by",
                            label: eK.intl.string(eK.t.UIltXd),
                            action: () => u(iI.T.CREATION_DATE),
                            checked: l === iI.T.CREATION_DATE,
                        }),
                    ],
                }),
                t.isModeratorReportChannel() &&
                    (0, i.jsx)(ss.rX, {
                        label: eK.intl.string(tY.default.PsM2b4),
                        children: (0, i.jsx)(ss.sL, {
                            id: "resolved-flags-none",
                            label: eK.intl.string(eK.t.XJuakA),
                            action: () => o(!a),
                            checked: a,
                        }),
                    }),
                t.isMediaChannel() || t.isModeratorReportChannel()
                    ? null
                    : (0, i.jsxs)(ss.rX, {
                          label: eK.intl.string(eK.t.mFMDSq),
                          children: [
                              (0, i.jsx)(ss.iD, {
                                  id: "view-as-list",
                                  group: "view-as",
                                  label: eK.intl.string(eK.t["NJFr+g"]),
                                  action: () => m(x.C.LIST),
                                  checked: s === x.C.LIST,
                              }),
                              (0, i.jsx)(ss.iD, {
                                  id: "view-as-grid",
                                  group: "view-as",
                                  label: eK.intl.string(eK.t.wKeggb),
                                  action: () => m(x.C.GRID),
                                  checked: s === x.C.GRID,
                              }),
                          ],
                      }),
                g
                    ? (0, i.jsxs)(ss.rX, {
                          label: eK.intl.string(eK.t.Paxaug),
                          children: [
                              (0, i.jsx)(ss.iD, {
                                  id: "match-some",
                                  group: "tag-setting",
                                  label: eK.intl.string(eK.t.rQ0ctQ),
                                  action: () => h(sl.n.MATCH_SOME),
                                  checked: r === sl.n.MATCH_SOME,
                              }),
                              (0, i.jsx)(ss.iD, {
                                  id: "match-all",
                                  group: "tag-setting",
                                  label: eK.intl.string(eK.t.FCXUu0),
                                  action: () => h(sl.n.MATCH_ALL),
                                  checked: r === sl.n.MATCH_ALL,
                              }),
                          ],
                      })
                    : null,
                (0, i.jsx)(ss.rX, {
                    children: (0, i.jsx)(ss.Dr, {
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
var so = n(123292);
function sc() {
    return Promise.resolve();
}
function sd(e) {
    let { channel: t, closePopout: n, setPopoutRef: l } = e,
        r = (0, ex.OT)(t),
        { tagFilter: a } = (0, eh.R)(t.id),
        o = (0, eh.p)(),
        c = (0, g.bG)([L.A], () => L.A.keyboardModeEnabled),
        d = s.useCallback(
            (e) => {
                (0, tg.UA)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    tagId: e,
                    filterTagIds: Array.from(a),
                    added: !a.has(e),
                    location: {
                        page: e$.liQ.GUILD_CHANNEL,
                        section: e$.JJy.FORUM_CHANNEL_HEADER,
                        object: e$.ZSU.CHANNEL_TAG,
                    },
                }),
                    o.getState().toggleTagFilter(t.id, e);
            },
            [t, a, o],
        ),
        h = s.useCallback(() => {
            o.getState().setTagFilter(t.id, new Set()), c || n();
        }, [o, t.id, c, n]),
        x = (0, m.Ay)({
            id: `${t.id}-all-tags-dropdown-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: sc,
            scrollToEnd: sc,
        }),
        f = s.useRef(null);
    return (
        s.useEffect(() => {
            requestAnimationFrame(() => {
                if (null != f.current) {
                    let e = f.current.querySelector(`.${it.Tc}`);
                    null != e && e.focus();
                }
            });
        }, []),
        (0, i.jsxs)(l5.l, {
            ref: (e) => {
                l?.(e);
            },
            "aria-label": eK.intl.string(eK.t.TdqRTh),
            className: it.kL,
            children: [
                (0, i.jsx)("div", {
                    className: it.wx,
                    children: (0, i.jsxs)("div", {
                        className: it.LD,
                        children: [
                            (0, i.jsx)(p.D, {
                                color: "interactive-text-default",
                                variant: "heading-md/semibold",
                                className: it.TK,
                                children: eK.intl.string(eK.t.HPu3kq),
                            }),
                            (0, i.jsx)("div", {
                                className: it.d1,
                                children: (0, i.jsx)(E.E, {
                                    className: it.lT,
                                    color: "none",
                                    variant: "text-xs/medium",
                                    tabularNumbers: !0,
                                    children: a.size,
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
                                className: it.I8,
                                children: r.map((e) =>
                                    (0, i.jsx)(
                                        is.A,
                                        { className: it.Tc, tag: e, selected: a.has(e.id), onClick: () => d(e.id) },
                                        e.id,
                                    ),
                                ),
                            });
                        },
                    }),
                }),
                (0, i.jsx)("div", { className: it.me }),
                (0, i.jsx)(so.Q, {
                    "aria-label": eK.intl.string(eK.t["98EPQP"]),
                    onClick: h,
                    text: eK.intl.string(eK.t["98EPQP"]),
                }),
            ],
        })
    );
}
var su = n(37411);
function sm(e) {
    let { channel: t, guild: n, sidebarState: l } = e;
    return (0, i.jsx)(ev.Cp, { channel: t, children: (0, i.jsx)(sv, { channel: t, guild: n, sidebarState: l }) }, t.id);
}
let sh = new (class {
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
function sx(e) {
    return `forum-grid-header-section-${e}`;
}
function sg(e) {
    let { itemRole: t, coords: n, section: l } = e;
    return (0, i.jsx)(
        "div",
        {
            className: a()(tZ.card, tZ.archivedDividerRow, tZ.columnsSpan),
            style: n,
            "data-item-role": t,
            children: (0, i.jsx)("div", {
                className: tZ.emptyMainCard,
                children: (0, i.jsx)(p.D, {
                    variant: "eyebrow",
                    className: tZ.archivedDivider,
                    id: sx(l),
                    children: eK.intl.string(eK.t["3+LO1w"]),
                }),
            }),
        },
        "section-divider",
    );
}
function sf(e) {
    let { section: t, coords: n, key: l, isShowingSearchResult: s, hasActiveThreads: r } = e;
    return () =>
        2 === t && !s && r
            ? (0, i.jsx)(
                  sg,
                  { section: t, coords: null == n ? void 0 : { ...n, position: "absolute" }, itemRole: "section" },
                  l,
              )
            : null;
}
function sj(e, t) {
    return `card-${e}-${t}`;
}
function sp(e) {
    if ("string" == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function sv(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: l,
            editorAdditionRowHeight: r,
            listViewCardHeights: o,
            formOpen: c,
            name: f,
        } = (0, ev.kU)((e) => {
            let {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: l,
                formOpen: i,
                cardHeightVersion: s,
                name: r,
            } = e;
            return {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: l,
                formOpen: i,
                name: r,
                cardHeightVersion: s,
            };
        }, d.x),
        {
            activeThreadIds: j,
            archivedThreadIds: p,
            searchResults: E,
            canLoadMore: S,
            loadMore: y,
            activeThreadsLoading: T,
            archivedThreadsLoading: R,
            loading: k,
            isSearchLoading: I,
            layoutType: M,
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: l, tagSetting: i } = (0, eh.R)(e.id),
                s = (0, ex.V3)({ channel: e, sortOrder: t, tagFilter: n, tagSetting: i, shouldAutomaticallyAck: !0 }),
                r = (0, g.bG)([te.A, z.A], () => {
                    let t = te.A.hasLoaded(e.guild_id),
                        n = z.A.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: a, canLoadMore: o, loadMore: c, loading: d } = (0, tt.Fr)(e, t, n, i),
                { searchResults: u, isSearchLoading: m } = (0, ex.cA)({ channelId: e.id });
            return (
                (0, ex.yz)(e, t, n, i),
                {
                    activeThreadIds: s,
                    archivedThreadIds: a,
                    searchResults: u,
                    canLoadMore: o,
                    loadMore: c,
                    loading: r || d || m,
                    archivedThreadsLoading: d,
                    activeThreadsLoading: r,
                    isSearchLoading: m,
                    layoutType: l,
                }
            );
        })(t),
        w = j.length > 0,
        P = w || p.length > 0,
        O = (0, G.A)(t),
        { tagFilter: F, tagSetting: U } = (0, eh.R)(t.id);
    (0, ex.o7)(t, F, U, c),
        (0, D.Ay)(() => {
            !c && f.length > 0 && td.A.updateForumSearchQuery(t.id, f);
        });
    let W = (0, ex.O3)(t),
        $ = (0, ex.An)(t),
        q = s.useRef(null),
        { observePostVisibilityAnalytics: K } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: l } = e;
            tx({ guildId: t, channelId: n });
            let i = s.useRef(null),
                r = s.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let l = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, th.xx)(e, t, l) : (0, th.O_)(e, t, l);
                    }
                }, []);
            return (
                s.useEffect(() => {
                    let e = l.current?.getScrollerNode();
                    if (null != e)
                        return (
                            (i.current = new IntersectionObserver((e) => r(n, e), {
                                root: e,
                                rootMargin: "0px 100000px 0px 100000px",
                                threshold: 0.5,
                            })),
                            () => {
                                i.current?.disconnect(), (i.current = null);
                            }
                        );
                }, [n, r, l]),
                {
                    observePostVisibilityAnalytics: s.useCallback(
                        (e, t) => {
                            null == e ? (0, th.O_)(n, t, Date.now()) : i.current?.observe(e);
                        },
                        [n],
                    ),
                }
            );
        })({ scrollerRef: q, channelId: t.id, guildId: t.guild_id }),
        X = M === x.C.GRID,
        { searchQuery: Q } = (0, ex.cA)({ channelId: t.id }),
        Y = null != E && null != Q && Q.length > 0,
        J = s.useRef(null),
        { containerRef: Z, containerWidth: ee } = iu();
    s.useEffect(() => {
        if (null == J.current && null != t.id) {
            let e = eL.Ay.getSidebarState(t.id);
            null != e && e.type === e6.PE.VIEW_THREAD && (J.current = e.channelId);
        }
    }, [t.id]);
    let { columns: et } = s.useMemo(() => (X ? sh.getRenderOptions(ee) : iz), [X, ee]),
        en = s.useMemo(() => (k ? Math.round((window.innerHeight - 200) / 118) : 0), [k]),
        { showResolvedFlags: el } = (0, B.T)(t.id),
        ei = t.isModeratorReportChannel(),
        es = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iH(sh.getWidth(ee))) * et;
            return T ? e : 0;
        }, [ee, et, T]),
        er = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iH(sh.getWidth(ee))) * et;
            return R ? e : 0;
        }, [ee, et, R]),
        ea = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iH(sh.getWidth(ee))) * et;
            return I && Y ? e : 0;
        }, [ee, et, I, Y]),
        eo = s.useMemo(() => {
            if (X)
                if (!W && Y) return [1, 0];
                else if (!$) return [1, j.length + es, 0];
                else if (Y) return [1, E.length + ea, 0];
                else if (ei && !el) return [1, j.length + es, 0];
                else return [1, j.length + es, p.length + er];
            if (!W && Y) return [1, 1];
            if (!$) return [1, j.length, 1];
            if (Y) return [1, E.length, 0, en];
            if (ei && !el) return [1, j.length, 0, en];
            else return [1, j.length, p.length, en];
        }, [X, Y, j.length, p.length, W, $, en, E, es, er, ea, el, ei]),
        ec = s.useMemo(
            () =>
                !W && Y
                    ? [[], []]
                    : $
                      ? Y
                          ? [[], E, [], []]
                          : ei && !el
                            ? [[], j, [], []]
                            : [[], j, p, []]
                      : [[], j, []],
            [Y, W, $, E, j, p, el, ei],
        ),
        ed = s.useCallback(
            (e, n) => {
                (0, tg.Ml)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: { page: e$.liQ.GUILD_CHANNEL, section: e$.JJy.FORUM_CHANNEL_POST },
                }),
                    n ? (0, e9.N9)(e, { source: su.H9.BROWSER }) : ((J.current = e.id), (0, tl.JA)(e));
            },
            [t.guild_id, t.id, J],
        ),
        [eu, em] = s.useState(l + r - 24),
        eg = s.useCallback(
            (e, n, l) =>
                0 === e
                    ? (0, i.jsx)(
                          sE,
                          {
                              channel: t,
                              isEmpty: !w,
                              isSearchLoading: I,
                              numResults: E?.length,
                              coords: n,
                              onHeightChange: em,
                              children:
                                  !k && (0, i.jsx)(ny, { channel: t, hasAnyThread: P, hasActiveThreads: w }, t.id),
                          },
                          "forum-channel-header",
                      )
                    : 2 !== e || $
                      ? 1 === e && Y && !W
                          ? (0, i.jsx)(sC, { channel: t, coords: n }, "archive-or-search-result")
                          : l()
                      : (0, i.jsx)(sA, { channel: t, coords: n }, "archived-missing-reading-history-perm"),
            [Y, $, E, W, t, w, I, k, P],
        ),
        ef = (0, g.bG)([tc.A], () => tc.A.hasHidden(t.id)),
        ej = { editorHeight: l, isGridLayout: X },
        ep = s.useRef(ej);
    s.useEffect(() => {
        ep.current = ej;
    }),
        s.useEffect(() => {
            let { editorHeight: e, isGridLayout: t } = ep.current,
                n = t ? eS : q,
                l = n.current?.getScrollerState();
            null != l && !ef && l.scrollTop > e && n.current?.scrollTo({ to: 0 });
        }, [ef]);
    let {
            updateListScrollerRef: eA,
            renderListSection: eC,
            renderListItem: eN,
            getListSectionHeight: eb,
            getListItemHeight: eE,
        } = (function (e) {
            let {
                    listRef: t,
                    hasActiveThreads: n,
                    threadIdsBySection: l,
                    listViewCardHeights: r,
                    editorHeight: o,
                    editorAdditionRowHeight: c,
                    renderSectionOrItem: d,
                    goToThread: u,
                    observePostVisibilityAnalytics: m,
                    isShowingSearchResult: h,
                } = e,
                x = (0, g.bG)([tr.A], () => tr.A.getChannelId()),
                f = s.useCallback(
                    (e) => (n) => {
                        (t.current = n), (e.current = n?.getScrollerNode() ?? null);
                    },
                    [t],
                ),
                j = s.useCallback(
                    (e) => sf({ section: e.section, isShowingSearchResult: h, hasActiveThreads: n })(),
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
                                              className: a()(tZ.loadingCard, tZ[`loadingCard-${e.row % 3}`]),
                                          },
                                          `loading-${e.row}`,
                                      );
                            let t = l[e.section][e.row],
                                n = null != x && (0, V.iU)(x) ? eJ : tX.Ay;
                            return (0, i.jsx)(
                                "li",
                                {
                                    className: tZ.card,
                                    "data-item-role": "item",
                                    children: (0, i.jsx)(v.F, {
                                        children: (0, i.jsx)(n, {
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
                    [d, l, x, u, m],
                ),
                A = s.useCallback(
                    (e, t) => {
                        if (0 === e) return o + c;
                        let n = r[l[e][t]];
                        return null == n ? 104 : n + 8;
                    },
                    [l, r, o, c],
                );
            return {
                updateListScrollerRef: f,
                renderListSection: j,
                renderListItem: p,
                getListSectionHeight: s.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: A,
            };
        })({
            listRef: q,
            hasActiveThreads: w,
            threadIdsBySection: ec,
            listViewCardHeights: o,
            editorHeight: l,
            editorAdditionRowHeight: r,
            renderSectionOrItem: eg,
            goToThread: ed,
            observePostVisibilityAnalytics: K,
            isShowingSearchResult: Y,
        }),
        eS = s.useRef(null),
        {
            updateMasonryListScrollerRef: ey,
            getItemKey: eT,
            renderGridSection: eR,
            renderGridItem: ek,
            getGridSectionHeight: eI,
            getSectionProps: eM,
            handleGridFocus: e_,
        } = (function (e) {
            let {
                    masonryListScrollerRef: t,
                    threadIdsBySection: n,
                    goToThread: l,
                    renderSectionOrItem: r,
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
                            r = null != s ? s.height + 20 : 200;
                        l.scrollIntoViewNode({
                            node: i,
                            padding: r,
                            callback() {
                                requestAnimationFrame(() => {
                                    document.querySelector(e)?.focus({ preventScroll: !0 });
                                });
                            },
                        }),
                            (h.current = sp(n));
                    },
                    [t, h],
                ),
                p = s.useCallback(
                    (e) => {
                        let t = sp(e);
                        if (null == t) return;
                        let n = eP.A.getChannel(t);
                        null != n && l(n, !0);
                    },
                    [l],
                ),
                v = s.useCallback(
                    function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (0 === n[e].length) return `section-${e}-${t}`;
                        {
                            let l = n[e][t];
                            return null == l ? sj(e, t) : sj(e, l);
                        }
                    },
                    [n],
                ),
                A = s.useCallback(
                    (e, t, n) =>
                        r(e, t, sf({ section: e, coords: t, key: n, isShowingSearchResult: c, hasActiveThreads: o })),
                    [r, o, c],
                ),
                C = s.useCallback((e) => (0 === e ? {} : { role: "grid", "aria-labelledby": `#${sx(e)}` }), []);
            return {
                updateMasonryListScrollerRef: f,
                masonryListContainerRef: g,
                focusedThreadId: h,
                handleGridFocus: j,
                handleGridSelect: p,
                getItemKey: v,
                renderGridSection: A,
                renderGridItem: s.useCallback(
                    (e, t, s, r, o) => {
                        if (0 === e) return null;
                        let c = n[e][t];
                        return null != c
                            ? (0, i.jsx)(
                                  i2,
                                  {
                                      id: `${r}`,
                                      threadId: c,
                                      className: a()(tZ.card, tZ.mainCard),
                                      goToThread: l,
                                      observePostVisibilityAnalytics: m,
                                      coords: s,
                                      gridCoords: o.coordinates[r],
                                      gridSectionBoundaries: o.boundaries,
                                  },
                                  r,
                              )
                            : __OVERLAY__
                              ? null
                              : (0, i.jsx)(
                                    "div",
                                    {
                                        style: { ...s },
                                        "data-item-role": "item",
                                        className: a()(tZ.loadingCard, tZ[`loadingCard-${t % 3}`]),
                                    },
                                    r,
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
            masonryListScrollerRef: eS,
            threadIdsBySection: ec,
            goToThread: ed,
            renderSectionOrItem: eg,
            hasActiveThreads: w,
            isShowingSearchResult: Y,
            canSearchForumPosts: W,
            canViewArchivedPosts: $,
            observePostVisibilityAnalytics: K,
            focusedThreadId: J,
            headerHeight: eu,
        });
    !(function (e) {
        let {
            masonryListScrollerRef: t,
            containerWidth: n,
            isGridLayout: l,
            threadIdsBySection: i,
            focusedThreadId: r,
            parentId: a,
        } = e;
        s.useEffect(() => {
            if (l) {
                let e = setTimeout(() => {
                    if (null == t.current || null == r.current) return;
                    let e = r.current;
                    if ("string" != typeof e) return;
                    null == eL.Ay.getSidebarState(a) && (r.current = null);
                    let n = i.findIndex((t) => t.find((t) => t === e)),
                        l = t.current.getCoordsMap(),
                        s = l[`__section__${n}`],
                        o = l[sj(n, e)];
                    null != s &&
                        null != o &&
                        t.current.scrollIntoViewRect({
                            start: s.top + o.top - 100,
                            end: s.top + o.top + o.height + 50,
                        });
                }, 0);
                return () => clearTimeout(e);
            }
        }, [a, n, l, i, r, t]);
    })({
        masonryListScrollerRef: eS,
        containerWidth: ee,
        isGridLayout: X,
        threadIdsBySection: ec,
        parentId: t.id,
        focusedThreadId: J,
    });
    let ew = s.useCallback(() => {
            if (Y) return;
            let e = X ? eS.current?.getScrollerState() : q.current?.getScrollerState();
            if (null == e) return;
            (0, tg.pO)({ guildId: t.guild_id, channelId: t.id });
            let n = e.scrollTop + e.offsetHeight;
            e.scrollHeight - n < (X ? Math.max(200, iH(ee)) : 200) && y();
        }, [Y, X, t.guild_id, t.id, ee, y]),
        eD = (0, g.bG)([L.A], () => L.A.keyboardModeEnabled),
        eO = (0, ev.kU)((e) => e.titleFocused || e.bodyFocused, d.x),
        eF = (function (e) {
            let { id: t, isEnabled: n, setFocus: l } = e,
                i = s.useRef(null),
                r = s.useRef(!1),
                a = s.useRef(null),
                o = s.useRef(n);
            s.useLayoutEffect(() => {
                o.current = n;
            }, [n]);
            let c = s.useCallback((e) => (a.current ?? document).querySelector(e), []),
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
                        let n = (0, iW.Mz)(e, i$),
                            l = (0, iW.HP)(e);
                        d(n, l), (0, iV.T)(t, l, !0);
                    },
                    [t, d],
                ),
                [x, g] = s.useState(!1),
                f = s.useRef(x);
            s.useLayoutEffect(() => {
                f.current = x;
            }, [x]),
                s.useLayoutEffect(() => {
                    let e = a.current;
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
                                null !== e && null == c((0, iW.Mz)(e, i$)) && u((0, iW.Mz)(t, "data-grid-id"));
                            }));
                    }
                    function s() {
                        let e = a.current;
                        if (f.current || null == e) return;
                    }
                    function o() {
                        r.current = !0;
                    }
                }, [t, d, u, m, c]);
            let j = s.useCallback(
                    (e) => {
                        if (!o.current) return;
                        let t = i.current,
                            n = a.current;
                        if (null == t) return;
                        let l = (0, iW.Mz)(t, i$),
                            s = n?.querySelector(l);
                        if (null == s) return;
                        let r = parseInt(s.getAttribute("data-grid-section") ?? ""),
                            d = parseInt(s.getAttribute("aria-rowindex")),
                            u = parseInt(s.getAttribute("aria-colindex"));
                        switch ((iX.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                            case h.D$.RIGHT: {
                                let e = c(iQ({ section: r, row: d, column: u + 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(i$);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.LEFT: {
                                let e = c(iQ({ section: r, row: d, column: u - 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(i$);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.DOWN: {
                                let e = c(iQ({ section: r, row: d + 1, column: u }));
                                if ((null == e && (e = c(iQ({ section: r + 1, row: 0, column: u }))), null != e)) {
                                    let t = e.getAttribute(i$);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.UP: {
                                let e;
                                if (0 === d) {
                                    let t = parseInt(s.getAttribute(iK));
                                    null == (e = c(iQ({ section: r - 1, row: t, column: u }))) &&
                                        (e = c(iQ({ section: r - 1, row: t - 1, column: u })));
                                } else e = c(iQ({ section: r, row: d - 1, column: u }));
                                if (null != e) {
                                    let t = e.getAttribute(i$);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.SPACE:
                            case h.D$.ENTER: {
                                if (e.repeat) return;
                                let t = i.current;
                                if (null != t) {
                                    let n = c((0, iW.Mz)(t, i$)),
                                        l = n?.ownerDocument ?? document,
                                        i = n === l.activeElement;
                                    null != n && i && (e.preventDefault(), e.stopPropagation(), n?.click());
                                }
                            }
                        }
                    },
                    [c, m],
                ),
                p = s.useCallback(
                    (e) => {
                        i.current = null != e ? (0, iW.t$)(t, e) : null;
                    },
                    [t],
                );
            return s.useMemo(() => ({ id: t, containerProps: { onKeyDown: j, ref: a }, setFocus: p }), [t, j, p]);
        })({ id: "forum-grid-view", isEnabled: X && eD && !eO, setFocus: e_ }),
        eU = (function (e) {
            let { listRef: t, padding: n, channel: l, isEnabled: i } = e,
                r = s.useCallback(
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
                a = s.useCallback(
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
                scrollToStart: a,
                scrollToEnd: o,
                setFocus: r,
            });
        })({ listRef: q, padding: 96, isEnabled: !X && eD && !eO, channel: t }),
        ez = s.useCallback(
            (e, n, l) => (0 === e ? 0 : iH(l, t.isMediaChannel() ? iU.SIXTEEN_BY_NINE : iU.THREE_BY_TWO)),
            [t],
        ),
        { ref: eG, ...eH } = eF.containerProps,
        eB = eL.Ay.getSidebarState(t.id),
        eV = null != eB && (0, eL.JU)(eB),
        eW = (0, g.bG)([eL.Ay], () => eL.Ay.getSection(t.id)) === e$.YvQ.MEMBERS;
    return (0, i.jsx)("div", {
        className: tZ.container,
        ref: Z,
        "data-member-list-open": eW,
        children: (0, i.jsx)(A.sk, {
            children: (e) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        c &&
                            (0, i.jsx)(_.A, {
                                channel: t,
                                draftType: ti.C.FirstThreadMessage,
                                className: tZ.uploadArea,
                                style: { right: eV && n?.isThreadSidebarFloating ? n.threadSidebarWidth : 0 },
                            }),
                        (0, i.jsx)(sN, { channel: t }),
                        (0, i.jsx)(C.A, { children: (0, i.jsx)(v.H, { children: eK.intl.string(eK.t.B2panI) }) }),
                        O
                            ? (0, i.jsx)("div", {
                                  className: tZ.optInNotice,
                                  children: (0, i.jsx)(H.A, { channel: t }),
                              })
                            : null,
                        X
                            ? (0, i.jsx)(i0, {
                                  navigator: eF,
                                  children: (0, i.jsx)(
                                      N.f,
                                      {
                                          ref: (e) => {
                                              (eG.current = e?.getScrollerNode() ?? null), ey(e);
                                          },
                                          itemGutter: 16,
                                          padding: 24,
                                          className: tZ.grid,
                                          columns: et,
                                          sections: eo,
                                          getItemKey: eT,
                                          getSectionHeight: eI,
                                          getItemHeight: ez,
                                          renderSection: eR,
                                          renderItem: ek,
                                          getSectionProps: eM,
                                          onScroll: S ? ew : void 0,
                                          chunkSize: 350,
                                          ...eH,
                                          ...e,
                                      },
                                      M,
                                  ),
                              })
                            : (0, i.jsx)(u.hD, {
                                  navigator: eU,
                                  children: (0, i.jsx)(u.PR, {
                                      children: (t) => {
                                          let { ref: n, ...l } = t;
                                          return (0, i.jsx)(
                                              b.Ei,
                                              {
                                                  ref: eA(n),
                                                  className: tZ.list,
                                                  sections: eo,
                                                  sectionHeight: eb,
                                                  rowHeight: eE,
                                                  renderRow: eN,
                                                  renderSection: eC,
                                                  chunkSize: 150,
                                                  onScroll: S ? ew : void 0,
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
function sA(e) {
    let { channel: t, coords: n } = e,
        l = (0, P.Ay)(t);
    return (0, i.jsx)("div", {
        className: a()(tZ.missingReadHistoryPermission, tZ.columnsSpan),
        style: n,
        children: (0, i.jsx)(E.E, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eK.intl.format(eK.t.TycmzM, { channelName: l }),
        }),
    });
}
function sC(e) {
    let { channel: t, coords: n } = e,
        l = (0, P.Ay)(t);
    return (0, i.jsx)("div", {
        className: a()(tZ.missingReadHistoryPermission, tZ.columnsSpan),
        style: n,
        children: (0, i.jsx)(E.E, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eK.intl.format(eK.t.OWZJdS, { channelName: l }),
        }),
    });
}
function sN(e) {
    let { channel: t } = e,
        n = s.useCallback(() => {
            td.A.resort(t.id);
        }, [t]),
        l = (0, g.bG)([tu.A], () => tu.A.getNewThreadCount());
    return 0 === l
        ? null
        : (0, i.jsx)(S.D, {
              className: tZ.newPostsButton,
              onClick: n,
              children: (0, i.jsx)(E.E, {
                  color: "text-brand",
                  variant: "text-md/medium",
                  children: eK.intl.format(eK.t.ue1qfM, { count: l }),
              }),
          });
}
function sb() {
    return Promise.resolve();
}
function sE(e) {
    let t,
        n,
        l,
        { channel: r, isEmpty: o, isSearchLoading: v, numResults: A, children: C, coords: N, onHeightChange: b } = e,
        {
            name: M,
            formOpen: _,
            titleFocused: D,
            hasClickedForm: P,
            textAreaState: z,
            onboardingExpanded: G,
            setEditorAdditionRowHeight: H,
        } = (0, ev.kU)((e) => {
            let {
                name: t,
                formOpen: n,
                titleFocused: l,
                hasClickedForm: i,
                textAreaState: s,
                onboardingExpanded: r,
                setEditorAdditionRowHeight: a,
            } = e;
            return {
                name: t,
                formOpen: n,
                titleFocused: l,
                hasClickedForm: i,
                textAreaState: s,
                onboardingExpanded: r,
                setEditorAdditionRowHeight: a,
            };
        }, d.x),
        { tagFilter: B, layoutType: $ } = (0, eh.R)(r.id),
        q = (0, ev.ST)(),
        K = (0, eh.p)(),
        X = (0, g.bG)([ts.A], () => ts.A.canChatInGuild(r.guild_id)),
        Q = (0, ex.S4)(r),
        Y = (0, tn.AI)(r),
        [J, Z] = s.useState(Y),
        [, ee] = (0, F.c)(r.getGuildId() ?? void 0),
        et = (0, W.V)(r),
        en = X && (Y || (J && ee)) && !et,
        el = r.isMediaChannel();
    s.useEffect(() => {
        Y && Z(!0);
    }, [Y]);
    let { ref: ei, height: es } = (0, w.Ay)();
    s.useEffect(() => {
        null != es && b(es);
    }, [b, es]);
    let er = s.useCallback(() => {
        c()(() => {
            null != ei.current && q.getState().setEditorHeight(ei.current.offsetHeight);
        });
    }, [ei, q]);
    s.useLayoutEffect(er, [er, o, en, G]), (0, to.Vo)({ event: e$.jej.REMEASURE_TARGET, handler: er });
    let ea = (0, g.bG)([ta.A], () => ta.A.getUploads(r.id, ti.C.FirstThreadMessage)),
        eo = (0, ex.Hv)(r),
        ec = s.useRef(null),
        ed = s.useRef(null),
        [eu, em] = s.useState(0),
        { width: eg } = (0, g.bG)([eG.A], () => eG.A.windowSize()),
        ef = ec.current?.getBoundingClientRect()?.width,
        ej = s.useRef(null),
        ep = s.useRef(null);
    s.useLayoutEffect(() => {
        let e = ed.current,
            t = e?.children?.[0];
        if (null != ec.current && null != t && null != t.children) {
            let { left: e, top: n } = ec.current.getBoundingClientRect(),
                l = 0;
            for (let i of t.children) {
                let { right: t, top: s, height: r } = i.getBoundingClientRect();
                if (s - n > r) break;
                t - e > l && (l = t - e);
            }
            em(l);
        }
    }, [r.availableTags, eg, ef, B]);
    let eA = M.length > 0 && !_ && (v || null != A),
        eC =
            !__OVERLAY__ &&
            !P &&
            !_ &&
            D &&
            (0 === z.textValue.trim().length || z.textValue.trim() === eo) &&
            0 === ea.length &&
            !et;
    s.useLayoutEffect(() => {
        if (!(eA || eC)) return H(0);
        null != ej.current && H(ej.current.clientHeight);
    }, [H, eA, eC, ej]);
    let eN = (0, m.Ay)({
            id: `${r.id}-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: sb,
            scrollToEnd: sb,
            orientation: h.Gl.HORIZONTAL,
        }),
        { role: eb, onFocus: eE, ...eS } = (0, u.rm)("forum-channel-header"),
        ey = s.useRef(null),
        eT =
            ((t = s.useRef(!1)),
            (n = (0, g.bG)([L.A], () => L.A.keyboardModeEnabled)),
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
        eR = s.useCallback(
            (e) => {
                eE(), e.target !== ei.current || eT.current || ey.current?.focus();
            },
            [eE, ei, eT],
        ),
        ek = s.useMemo(() => (et ? (0, V.Yj)(r.availableTags) : r.availableTags), [r.availableTags, et]);
    return (0, i.jsx)(
        "div",
        {
            className: a()(tZ.card, tZ.headerRow, tZ.columnsSpan),
            ref: ei,
            onFocus: eR,
            ...eS,
            style: { ...N, position: $ === x.C.GRID ? "absolute" : "static", height: "auto" },
            children: (0, i.jsxs)(to.Ah, {
                children: [
                    null != r.guild_id
                        ? (0, i.jsx)(U.A, {
                              className: a()(tZ.newMemberBanner, { [tZ.gridViewBanner]: $ === x.C.GRID }),
                              guildId: r.guild_id,
                              channel: r,
                          })
                        : null,
                    (0, i.jsx)("div", {
                        className: a()(tZ.mainCard, tZ.header, { [tZ.headerWithMatchingPosts]: eA || eC }),
                        children: (0, i.jsx)(ig, {
                            parentChannel: r,
                            onChange: er,
                            isSearchLoading: v,
                            numResults: A,
                            canCreatePost: en,
                            inputRef: ey,
                        }),
                    }),
                    (eA || eC) &&
                        (0, i.jsxs)("div", {
                            className: tZ.matchingPostsRow,
                            ref: ej,
                            children: [
                                eA &&
                                    (0, i.jsxs)("div", {
                                        className: tZ.matchingPosts,
                                        children: [
                                            (0, i.jsx)(p.D, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: v
                                                    ? eK.intl.string(eK.t["/9i3qq"])
                                                    : 0 === A
                                                      ? eK.intl.string(eK.t.DbgHxi)
                                                      : eK.intl.formatToPlainString(eK.t["tBz/8b"], {
                                                            numPosts: A ?? "",
                                                            query: M,
                                                        }),
                                            }),
                                            !v &&
                                                (0, i.jsx)(S.D, {
                                                    onClick: () => {
                                                        (0, tg.hT)({ guildId: r.guild_id, channelId: r.id }),
                                                            td.A.clearForumSearch(r.id),
                                                            q.getState().setName("");
                                                    },
                                                    children: (0, i.jsx)(E.E, {
                                                        variant: "text-xs/semibold",
                                                        color: "text-brand",
                                                        className: tZ.clear,
                                                        children: eK.intl.string(eK.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                (0, i.jsx)("div", { className: tZ.tagsSpacer }),
                                eC
                                    ? en
                                        ? (0, i.jsxs)("div", {
                                              className: tZ.startPostHelp,
                                              children: [
                                                  (0, i.jsx)(y.e, {
                                                      shortcut: "SHIFT",
                                                      className: tZ.keyboardShortcut,
                                                  }),
                                                  (0, i.jsx)(E.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-subtle",
                                                      children: "+",
                                                  }),
                                                  (0, i.jsx)(y.e, {
                                                      shortcut: "ENTER",
                                                      className: tZ.keyboardShortcut,
                                                  }),
                                                  (0, i.jsx)(E.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-subtle",
                                                      children: eK.intl.string(eK.t.ZvJ0yh),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)("div", {
                                              className: tZ.startPostHelp,
                                              children: [
                                                  (0, i.jsx)(T.E, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      height: 14,
                                                      width: 14,
                                                      className: tZ.warnIcon,
                                                  }),
                                                  (0, i.jsx)(E.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-subtle",
                                                      children: eK.intl.string(eK.t.iyzwnD),
                                                  }),
                                              ],
                                          })
                                    : null,
                            ],
                        }),
                    (0, i.jsx)(n_, { channel: r, onChange: er }),
                    (0, i.jsxs)("div", {
                        className: tZ.tagsContainer,
                        ref: ec,
                        children: [
                            (0, i.jsx)(sS, { channel: r }),
                            ek.length > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)("div", { className: tZ.divider }),
                                          (0, i.jsx)("div", {
                                              className: tZ.tagList,
                                              ref: ed,
                                              children: (0, i.jsx)(u.hD, {
                                                  navigator: eN,
                                                  children: (0, i.jsx)(u.PR, {
                                                      children: (e) => {
                                                          let { ref: t, ...n } = e;
                                                          return (0, i.jsx)("div", {
                                                              className: tZ.tagListInner,
                                                              ref: t,
                                                              ...n,
                                                              children: ek.map((e) =>
                                                                  (0, i.jsx)(
                                                                      is.A,
                                                                      {
                                                                          tag: e,
                                                                          onClick: () => {
                                                                              var t;
                                                                              return (
                                                                                  (t = e.id),
                                                                                  void ((0, tg.UA)({
                                                                                      guildId: r.guild_id,
                                                                                      channelId: r.id,
                                                                                      tagId: t,
                                                                                      filterTagIds: Array.from(B),
                                                                                      added: !B.has(t),
                                                                                      location: {
                                                                                          page: e$.liQ.GUILD_CHANNEL,
                                                                                          section:
                                                                                              e$.JJy
                                                                                                  .FORUM_CHANNEL_HEADER,
                                                                                          object: e$.ZSU.CHANNEL_TAG,
                                                                                      },
                                                                                  }),
                                                                                  K.getState().toggleTagFilter(r.id, t))
                                                                              );
                                                                          },
                                                                          selected: B.has(e.id),
                                                                      },
                                                                      e.id,
                                                                  ),
                                                              ),
                                                          });
                                                      },
                                                  }),
                                              }),
                                          }),
                                          (0, i.jsx)(R.Y, {
                                              targetElementRef: ep,
                                              renderPopout: (e) => {
                                                  let { closePopout: t, setPopoutRef: n } = e;
                                                  return (0, i.jsx)(sd, {
                                                      channel: r,
                                                      closePopout: t,
                                                      setPopoutRef: n,
                                                  });
                                              },
                                              position: "bottom",
                                              align: "right",
                                              children: (e, t) => {
                                                  let { isShown: n } = t;
                                                  return (0, i.jsxs)(j.$n, {
                                                      ...e,
                                                      "data-migration-pending": !0,
                                                      buttonRef: ep,
                                                      size: j.$n.Sizes.MIN,
                                                      color: j.$n.Colors.CUSTOM,
                                                      className: a()(tZ.tagsButton, {
                                                          [tZ.tagsButtonWithCount]: B.size > 0,
                                                      }),
                                                      style: { left: eu },
                                                      innerClassName: tZ.tagsButtonInner,
                                                      "aria-label":
                                                          B.size > 0
                                                              ? eK.intl.string(eK.t.IkpM1T)
                                                              : eK.intl.string(eK.t["9vKK/N"]),
                                                      children: [
                                                          B.size > 0
                                                              ? (0, i.jsx)("div", {
                                                                    className: tZ.countContainer,
                                                                    children: (0, i.jsx)(E.E, {
                                                                        className: tZ.countText,
                                                                        color: "none",
                                                                        variant: "text-xs/medium",
                                                                        children: B.size,
                                                                    }),
                                                                })
                                                              : eK.intl.string(eK.t.fZ8hzm),
                                                          n
                                                              ? (0, i.jsx)(k.t, {
                                                                    size: "custom",
                                                                    color: "currentColor",
                                                                    width: 20,
                                                                })
                                                              : (0, i.jsx)(I.a, {
                                                                    size: "custom",
                                                                    color: "currentColor",
                                                                    width: 20,
                                                                }),
                                                      ],
                                                  });
                                              },
                                          }),
                                          (0, i.jsxs)(j.$n, {
                                              "data-migration-pending": !0,
                                              size: j.$n.Sizes.MIN,
                                              color: j.$n.Colors.CUSTOM,
                                              className: a()(tZ.tagsButton, tZ.tagsButtonPlaceholder),
                                              innerClassName: tZ.tagsButtonInner,
                                              "aria-label": eK.intl.string(eK.t.IkpM1T),
                                              children: [
                                                  B.size > 0
                                                      ? (0, i.jsx)("div", {
                                                            className: tZ.countContainer,
                                                            children: (0, i.jsx)(E.E, {
                                                                className: tZ.countText,
                                                                color: "none",
                                                                variant: "text-xs/medium",
                                                                children: B.size,
                                                            }),
                                                        })
                                                      : null,
                                                  (0, i.jsx)(k.t, { size: "custom", color: "currentColor", width: 24 }),
                                              ],
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    C,
                    Q &&
                        !el &&
                        !et &&
                        (0, i.jsx)(O.Ay, {
                            contentTypes: [f.M.FORUM_CHANNEL_HELPER_CARD],
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                return t === f.M.FORUM_CHANNEL_HELPER_CARD ? (0, i.jsx)(nL, { onDismiss: n }) : null;
                            },
                        }),
                ],
            }),
        },
        "create-form",
    );
}
function sS(e) {
    let { channel: t } = e,
        n = t.isMediaChannel(),
        l = s.useRef(null);
    return (0, i.jsx)(R.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(sa, { channel: t, closePopout: n });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: s } = t;
            return (0, i.jsxs)(j.$n, {
                ...e,
                "data-migration-pending": !0,
                buttonRef: l,
                size: j.$n.Sizes.MIN,
                color: j.$n.Colors.CUSTOM,
                className: tZ.sortDropdown,
                innerClassName: tZ.sortDropdownInner,
                "aria-label": n ? eK.intl.string(eK.t.JxU0wr) : eK.intl.string(eK.t.xyYt8A),
                children: [
                    (0, i.jsx)(M.J, { size: "xs", color: "currentColor" }),
                    (0, i.jsx)(E.E, {
                        className: tZ.sortDropdownText,
                        variant: "text-sm/medium",
                        color: "interactive-text-default",
                        children: (0, i.jsx)("span", {
                            className: tZ.sortDropdownTextHighContrastForcedColor,
                            children: n ? eK.intl.string(eK.t.JxU0wr) : eK.intl.string(eK.t.xyYt8A),
                        }),
                    }),
                    s
                        ? (0, i.jsx)(k.t, { size: "custom", color: "currentColor", width: 20 })
                        : (0, i.jsx)(I.a, { size: "custom", color: "currentColor", width: 20 }),
                ],
            });
        },
    });
}

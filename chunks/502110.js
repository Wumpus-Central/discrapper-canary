n.r(t), n.d(t, { CreateGameInvitePostButton: () => sw, default: () => sC });
var l,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(756287),
    c = n.n(o),
    d = n(942381),
    u = n(837381),
    m = n(887129),
    h = n(741918),
    x = n(371444),
    g = n(17928),
    f = n(862482),
    j = n(534514),
    p = n(707554),
    v = n(312138),
    A = n(140735),
    C = n(92008),
    N = n(475825),
    b = n(834730),
    S = n(939249),
    E = n(821609),
    y = n(475358),
    T = n(695366),
    I = n(922016),
    R = n(900797),
    k = n(847374),
    M = n(112173),
    _ = n(738876),
    w = n(765671),
    D = n(964486),
    L = n(775602),
    P = n(47167),
    O = n(870136),
    F = n(575293),
    G = n(857071),
    U = n(228098),
    z = n(157259),
    H = n(212007),
    B = n(892340),
    V = n(715757),
    W = n(284009),
    $ = n.n(W),
    q = n(989349),
    K = n.n(q),
    Y = n(990078),
    X = n(247928),
    Q = n(97808),
    J = n(778712),
    Z = n(138134),
    ee = n(777666),
    et = n(661531),
    en = n(863610),
    el = n(534890),
    ei = n(144165),
    es = n(119031),
    ea = n(104171),
    er = n(139716),
    eo = n(847599),
    ec = n(114166),
    ed = n(810181),
    eu = n(390248),
    em = n(422844),
    eh = n(435470),
    ex = n(473503),
    eg = n(256265),
    ef = n(969043),
    ej = n(710948),
    ep = n(218152),
    ev = n(52933),
    eA = n(504261),
    eC = n(505234),
    eN = n(387408),
    eb = n(59318),
    eS = n(294520),
    eE = n(505527),
    ey = n(863439),
    eT = n(465364),
    eI = n(467073),
    eR = n(34337),
    ek = n(831688),
    eM = n(805964),
    e_ = n(302031),
    ew = n(885386),
    eD = n(761640),
    eL = n(734057),
    eP = n(232835),
    eO = n(576705),
    eF = n(967198),
    eG = n(287809),
    eU = n(531685),
    ez = n(58703),
    eH = n(763754),
    eB = n(447215);
let eV = (e) => {
    let { message: t, originalAuthor: n, channel: l } = e,
        s = (0, eH.d8)(n, l),
        a = s?.nick ?? n?.username ?? "",
        r = (0, eB.P)({
            user: n ?? void 0,
            channelId: l.id,
            guildId: l.guild_id,
            messageId: t?.id,
            stopPropagation: !0,
        })(s ?? void 0)(a, l.id);
    return (0, i.jsx)(b.E, { variant: "text-md/semibold", children: r });
};
var eW = n(652215),
    e$ = n(838541),
    eq = n(375708),
    eK = n(506472),
    eY = n(330070),
    eX = n(992595);
let eQ = s.memo(function (e) {
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
                l = (0, g.bG)([eL.A], () => eL.A.getChannel(t));
            $()(null != l, "the thread should not be null here, a store must have missed an update");
            let i = (0, g.bG)([eD.Ay], () => eD.Ay.getCurrentSidebarChannelId(l.parent_id) === l.id),
                { firstMessage: a } = (0, ex.OA)(l),
                r = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: l = !0 } = e,
                        i = s.useMemo(() => (null != t ? (0, eN.A)(t, t?.messageSnapshots[0]) : null), [t]),
                        { hasSpoilerEmbeds: a, content: r } = s.useMemo(
                            () =>
                                i?.content != null && "" !== i.content
                                    ? (0, eT.Ay)(i, {
                                          formatInline: n,
                                          noStyleAndInteraction: l,
                                          allowHeading: !0,
                                          allowList: !0,
                                      })
                                    : { hasSpoilerEmbeds: !1, content: null },
                            [n, i, l],
                        ),
                        o = (0, eg.Ky)(t, a),
                        c = (0, eg.L_)(t, a);
                    return null == t ? null : { hasSpoilerEmbeds: a, content: r, firstMedia: o, firstMediaIsEmbed: c };
                })({ firstMessage: a }),
                o = r?.content,
                c = r?.firstMedia,
                { messageCountText: d } = (0, eh.k6)(l);
            return { channel: l, isOpen: i, messageCount: d, firstMessage: a, content: o, media: n ?? c };
        })({ threadId: t, overrideMedia: a }),
        v = (0, P.Ay)(c);
    (0, V.vb)(f);
    let A = (0, g.bG)([eG.default, eP.A], () => {
            let e = eG.default.getUser(f?.messageSnapshots[0]?.moderatorReport?.reported_user_id);
            if (null != e) return e;
            if (f?.messageReference?.channel_id != null && f?.messageReference?.message_id != null) {
                let e = eP.A.getMessage(f?.messageReference?.channel_id, f?.messageReference?.message_id);
                if (null != e) return e.author;
            }
            return null;
        }),
        { ref: C, height: N } = (0, w.Ay)(),
        b = (0, ep.kU)((e) => e.setCardHeight, d.x);
    s.useEffect(() => {
        null != N && b(t, N);
    }, [N, b, t]),
        s.useEffect(() => {
            l?.(C.current, t);
        }, [C, l, t]);
    let E = s.useRef(null),
        { handleLeftClick: y, handleRightClick: T } = (0, eC.A)({ facepileRef: E, goToThread: n, channel: c }),
        { role: I, onFocus: R, ...k } = (0, u.rm)(t),
        { isFocused: M, handleFocus: _, handleBlur: D } = (0, eA.A)(R);
    return (0, i.jsxs)("div", {
        ref: C,
        "data-item-id": t,
        onClick: y,
        onContextMenu: T,
        className: r()(eY.kL, eK.kL, o, { [eY.nT]: m }),
        children: [
            (0, i.jsx)(S.D, {
                onClick: y,
                focusProps: { ringTarget: C },
                onContextMenu: T,
                "aria-label": eq.intl.formatToPlainString(eq.t.pgYN6c, { title: v, count: h }),
                className: eY.Kv,
                onFocus: _,
                onBlur: D,
                ...k,
            }),
            (0, i.jsxs)("div", {
                className: eY.kb,
                children: [
                    (0, i.jsx)(p.F, {
                        children: (0, i.jsxs)("div", {
                            className: eK.fx,
                            children: [
                                (0, i.jsx)(eJ, {
                                    channel: c,
                                    firstMessage: f,
                                    content: x,
                                    hasMediaAttachment: null != j,
                                    originalAuthor: A,
                                }),
                                f?.blocked || null == j ? null : (0, i.jsx)(e8, { channel: c, firstMedia: j }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(X.M, {
                        enabled: !M,
                        children: (0, i.jsx)(e0, { channel: c, firstMessage: f, facepileRef: E }),
                    }),
                ],
            }),
        ],
    });
});
function eJ(e) {
    let { channel: t, firstMessage: n, content: l, hasMediaAttachment: s, originalAuthor: a } = e,
        { hasUnreads: o } = (0, eh.X5)(t);
    return (0, i.jsxs)("div", {
        className: r()(eK.rf, eY.rf),
        children: [
            (0, i.jsx)(ev.Ay, { channel: t }),
            (0, i.jsx)("div", {
                className: (eY.iU, eK.iU),
                children: (0, i.jsx)(eZ, {
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
let eZ = s.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: s, hasUnreads: a, originalAuthor: o } = e,
        c = (0, g.bG)([ef.A], () => ef.A.isLoading(n.id)),
        d = (0, g.bG)([eO.A], () => eO.A.can(eW.xBc.MANAGE_MESSAGES, n)),
        u = ew.gs.useSetting(),
        m = (0, g.bG)([eF.A], () => eF.A.getGuildId()),
        { contentPlaceholder: h, renderedContent: x } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, eM.o)(t, l, !1, !1, r()(eY.BK, eK.BK, eX.tZ, eX.__invalid_smallFontSize), {
                      leadingIconClass: eY.aG,
                      trailingIconClass: eY.sl,
                      iconSize: e$.eJ,
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
                        className: r()(eY.BK, eK.BK),
                        "aria-label": "",
                        children: null == t ? (c ? null : eq.intl.string(eq.t.mE3KJN)) : h,
                    });
    return (0, i.jsxs)(e_.Bs.Provider, {
        value: (0, ey.A)(u, d),
        children: [
            null != o
                ? (0, i.jsx)(Q.eu, {
                      size: J._3.SIZE_40,
                      src: o.getAvatarURL(m, (0, J.FT)(J._3.SIZE_40)),
                      "aria-label": "",
                      className: eK.Nd,
                  })
                : null,
            (0, i.jsxs)("div", {
                className: eK.IF,
                children: [
                    (0, i.jsx)(eV, { channel: n, originalAuthor: o, message: t }),
                    (0, i.jsx)(X.M, { className: eY.JY, children: f }),
                ],
            }),
        ],
    });
});
function e0(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        { isNew: s } = (0, eh.X5)(t),
        a = (0, P.Ay)(t),
        r = (0, ed.m)(t.id),
        o = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: eK.qr,
        children: [
            (0, i.jsxs)("div", {
                className: eK.JS,
                children: [
                    (0, i.jsx)(Z.i, { size: "custom", width: 14, height: 14 }),
                    (0, i.jsx)(b.E, { variant: "text-sm/medium", children: a }),
                    s
                        ? (0, i.jsx)(ee.Lp, {
                              color: et.A.unsafe_rawColors.BRAND_260.css,
                              text: eq.intl.string(eq.t.y2b7CA),
                              className: eK.Ad,
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: eK.PQ,
                children: [
                    o || null == l ? null : (0, i.jsx)(e2, { firstMessage: l, channel: t }),
                    (0, i.jsx)(e1, { channel: t, iconSize: 14 }),
                    (0, i.jsx)("span", { className: eY.xE, children: "\u2022" }),
                    r.length > 0
                        ? (0, i.jsxs)("div", {
                              className: eY.IW,
                              children: [
                                  (0, i.jsx)(e3, { channel: t, userIds: r, facepileRef: n }),
                                  (0, i.jsx)("div", {
                                      className: eY.r$,
                                      children: (0, i.jsx)(en.n, { themed: !0, dotRadius: 2 }),
                                  }),
                                  (0, i.jsx)(es.Ay, { channel: t, className: eY.mD, renderDots: !1 }),
                              ],
                          })
                        : (0, i.jsx)(e4, { channel: t }),
                ],
            }),
        ],
    });
}
function e1(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: s, unreadCount: a } = (0, eh.k6)(t);
    return (0, i.jsxs)("div", {
        className: r()(eY.Mv, { [eY.hT]: l && null == a }),
        children: [
            (0, i.jsx)("span", {
                className: eY.SZ,
                children: (0, i.jsx)(el.o, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof s
                ? (0, i.jsx)(ec.A, { value: s, digitWidth: 9, className: eY.gv })
                : (0, i.jsx)("div", { className: eY.gv, children: s }),
            null == a
                ? null
                : (0, i.jsxs)(b.E, {
                      className: eY.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", eq.intl.format(eq.t.z3PEth, { count: a }), ")"],
                  }),
        ],
    });
}
function e2(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, g.bG)([eL.A], () => eL.A.getChannel(n.parent_id)),
        s = (0, eh.Ck)(l),
        { disableReactionCreates: a, isLurking: r, isPendingMember: o } = (0, eI.A)(n);
    return null == s || a
        ? null
        : (0, i.jsx)(ek.qT, {
              className: eY.vC,
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
              type: eE.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function e4(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, em.R)(t.parent_id),
        l = (0, eh.Mw)(t, n),
        s = t.threadMetadata?.createTimestamp,
        a = null == s ? null : eq.intl.formatToPlainString(eq.t["13euCd"], { timestamp: (0, ez.i$)(K()(s), "LLLL") });
    return (0, i.jsx)(Y.m, {
        text: a,
        children: (0, i.jsx)(b.E, {
            className: eY.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function e3(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        s = (0, eh.$I)(t, n);
    return (0, i.jsx)("div", {
        ref: l,
        children: (0, i.jsx)(ea.Ay, {
            className: eY.__invalid_facepile,
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
function e7(e) {
    let t,
        n,
        { firstMedia: l, shouldObscure: s, obscureReason: a, shouldShowAgeVerification: o } = e,
        c = (0, g.bG)([eU.A], () => eU.A.isFocused()),
        d = (0, eb.ge)(l.src),
        u = ew.kt.useSetting(),
        m = (0, eS.rx)(a),
        { src: h, width: x, height: f, alt: j } = l;
    return (f > x ? (n = 72) : (t = 72), o)
        ? (0, i.jsx)("div", {
              "aria-label": m ?? j ?? eq.intl.string(eq.t.hqwnc2),
              className: r()(eY.iT, eY.nh),
              style: { maxWidth: t, maxHeight: n, height: f, width: x },
          })
        : h.startsWith("data:")
          ? (0, i.jsx)(ei._, {
                src: h,
                maxHeight: t,
                maxWidth: n,
                width: x,
                height: f,
                alt: null != j && s ? m : j,
                className: eY.iT,
                imageClassName: r()({ [eY.cd]: s, [eY.LW]: !0 }),
            })
          : (0, eR.LL)({
                src: h,
                maxHeight: t,
                maxWidth: n,
                width: x,
                height: f,
                alt: null != j && s ? m : j,
                autoPlay: u,
                animated: d && !s && c,
                srcIsAnimated: l.srcIsAnimated,
                containerClassName: eY.iT,
                imageClassName: r()({ [eY.cd]: s }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function e8(e) {
    let { channel: t, firstMedia: n } = e,
        [l, s] = (0, eS.eJ)({ media: n, channel: t }),
        a = (0, eu.qZ)(s);
    return (0, i.jsx)(X.M, {
        enabled: !0,
        children: (0, i.jsxs)("div", {
            className: r()(eY.pV, eK.pV),
            onClick: function (e) {
                e.stopPropagation(),
                    a &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        er.A.showAgeVerificationGetStartedModal({ entryPoint: eo.q1.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, i.jsx)(e7, { firstMedia: n, shouldObscure: l, obscureReason: s, shouldShowAgeVerification: a }),
                l && (0, i.jsx)(ej.A, { iconClassname: eY.yo, obscureReason: s }),
            ],
        }),
    });
}
var e5 = n(378570),
    e6 = n(940382),
    e9 = n(970278),
    te = n(424798),
    tt = n(406704),
    tn = n(747926),
    tl = n(31717),
    ti = n(834942),
    ts = n(309010),
    ta = n(522602),
    tr = n(234320),
    to = n(947094),
    tc = n(919577),
    td = n(207777),
    tu = n(365971),
    tm = n(613999);
let th = function (e) {
    let { guildId: t, channelId: n } = e,
        l = s.useRef(null),
        i = (0, tu.Xg)(),
        a = !eU.A.isFocused(i);
    return (
        s.useLayoutEffect(
            () => (
                null == l.current &&
                    ((l.current = new tm.Ay({ guildId: t, channelId: n, isPaused: a, windowId: i })),
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
var tx = n(853742),
    tg = n(879382);
n(321073);
var tf = n(873174),
    tj = n(136722),
    tp = n(192308),
    tv = n(866323),
    tA = n(789645),
    tC = n(446576),
    tN = n(26430),
    tb = n(885574),
    tS = n(933832),
    tE = n(565787),
    ty = n(320448),
    tT = n(435183),
    tI = n(417454),
    tR = n(148719),
    tk = n(462887),
    tM = n(696986),
    t_ = n(811893),
    tw = n(736653),
    tD = n(303136),
    tL = n(892110),
    tP = n(251766),
    tO = n(468689),
    tF = n(71393),
    tG = n(975571);
let tU = { mass: 1, tension: 250, friction: 18, clamp: !0 };
var tz = n(388803);
function tH(e) {
    let { handleHide: t } = e;
    return (0, i.jsx)(S.D, {
        onClick: t,
        className: tz.b,
        "aria-label": eq.intl.string(eq.t.WAI6xu),
        children: (0, i.jsx)(tA.P, { size: "md", color: "currentColor", className: tz.ut }),
    });
}
function tB(e) {
    let { username: t, title: n, videoSrc: l, messageCount: s, reaction: a, reactionCount: o, classname: c } = e;
    return (0, i.jsxs)("div", {
        className: r()(tz.IP, c),
        children: [
            (0, i.jsx)("div", {
                className: tz.Y6,
                children: (0, i.jsxs)("div", {
                    className: tz.wO,
                    children: [
                        (0, i.jsx)(b.E, { tag: "span", className: tz.cy, variant: "text-sm/semibold", children: t }),
                        (0, i.jsx)(b.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: tz.SD,
                            children: eq.intl.string(eq.t.mA0IvI),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(j.D, {
                variant: "heading-md/extrabold",
                className: tz.DD,
                color: "text-strong",
                "aria-hidden": !0,
                children: n,
            }),
            (0, i.jsx)(tM.h, { size: 10 }),
            (0, i.jsx)(tD.A, { className: tz.Ki, src: l }),
            (0, i.jsx)(tM.h, { size: 10 }),
            (0, i.jsx)("div", {
                className: tz.qr,
                children: (0, i.jsxs)("div", {
                    className: tz.GD,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tz.Mv,
                            children: [
                                (0, i.jsx)("span", {
                                    className: tz.SZ,
                                    children: (0, i.jsx)(el.o, { size: "xs", color: "currentColor" }),
                                }),
                                (0, i.jsx)(b.E, {
                                    variant: "text-xs/normal",
                                    color: "interactive-text-default",
                                    children: s,
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tz.vi,
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
let tV = (e) => {
    let { channel: t } = e,
        n = (0, tw.Ay)(),
        l = (0, tk.M)(n),
        a = (0, g.bG)([tF.A], () => tF.A.getGuild(t.guild_id)),
        o = (0, g.bG)([to.A], () => to.A.hasHidden(t.id)),
        c = (0, tP.e)({ guildId: t.guild_id, channelId: t.id }),
        { transitions: d, setVisible: u } = (function () {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tv.p)(e, {
                    keys: (e) => (e ? "shown" : "hidden"),
                    config: tU,
                    from: { opacity: 0 },
                    enter: { opacity: 1 },
                    leave: { opacity: 0 },
                    unique: !0,
                }),
                setVisible: t,
            };
        })(),
        m = s.useCallback(() => {
            u(!1), tc.A.hideAdminOnboarding(t.id, !0);
        }, [t, u]);
    s.useEffect(() => {
        (0, tL.l)(t.id) || u(!o);
    }, [t, u, o]);
    let h = s.useMemo(
            () => [
                eq.intl.string(eq.t["8pEGAw"]),
                eq.intl.string(eq.t.jwfgDd),
                eq.intl.string(eq.t.mPKs27),
                eq.intl.string(eq.t.StRbvG),
            ],
            [],
        ),
        x = s.useMemo(
            () => [
                eq.intl.string(eq.t["m/b58M"]),
                eq.intl.string(eq.t.MuJSKw),
                eq.intl.string(eq.t["d/Wqvu"]),
                eq.intl.string(eq.t.GJklAw),
            ],
            [],
        ),
        f = () => {
            tO.A.open(t.guild_id, eW.BEX.ROLE_SUBSCRIPTIONS);
        },
        p = a?.features.has(eW.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)
            ? eq.intl.string(eq.t.n0q7sI)
            : eq.intl.string(eq.t.QoYdie),
        v =
            (a?.features.has(eW.GuildFeatures.CREATOR_MONETIZABLE) ||
                a?.features.has(eW.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) ??
            !1,
        A = v ? eq.intl.string(eq.t["G/7ciZ"]) : eq.intl.string(eq.t.IFOiit),
        C = v ? eq.intl.string(eq.t.GjgQO1) : eq.intl.string(eq.t.E7AO6t);
    return (0, i.jsx)(i.Fragment, {
        children: d((e, t) =>
            t
                ? (0, i.jsxs)(tf.animated.div, {
                      style: e,
                      className: tz.kL,
                      children: [
                          (0, i.jsxs)("div", {
                              className: tz.U1,
                              children: [
                                  (0, i.jsxs)(b.E, {
                                      variant: "text-xs/normal",
                                      className: tz.l2,
                                      children: [
                                          (0, i.jsx)(tb.m, { size: "xxs", color: "currentColor", className: tz.Kk }),
                                          eq.intl.string(eq.t.znhX2R),
                                      ],
                                  }),
                                  (0, i.jsx)(tH, { handleHide: m }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: tz.hQ,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: r()(tz.CT, v && tz.en),
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: tz.F2,
                                              children: (0, i.jsxs)("div", {
                                                  className: tz.IZ,
                                                  children: [
                                                      (0, i.jsx)(tB, {
                                                          username: eq.intl.string(eq.t.AkORco),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                                          title: eq.intl.string(eq.t.yO6Fxu),
                                                          messageCount: "34",
                                                          reaction: "\u26A1\uFE0F",
                                                          reactionCount: "724",
                                                          classname: tz.q6,
                                                      }),
                                                      (0, i.jsx)(tB, {
                                                          username: eq.intl.string(eq.t.DPg3YM),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                                          title: eq.intl.string(eq.t["R5XnC/"]),
                                                          messageCount: "34",
                                                          reactionCount: "84",
                                                          reaction: "\uD83D\uDC9E",
                                                          classname: tz.q6,
                                                      }),
                                                      (0, i.jsx)(tB, {
                                                          username: eq.intl.string(eq.t.KIelex),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                                          title: eq.intl.string(eq.t.pt88Vb),
                                                          messageCount: "7,103",
                                                          reaction: "\u26A1\uFE0F",
                                                          reactionCount: "724",
                                                          classname: tz.Ob,
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          (0, i.jsxs)("article", {
                                              className: tz.n$,
                                              children: [
                                                  (0, i.jsx)(j.D, {
                                                      variant: "heading-lg/semibold",
                                                      color: "text-strong",
                                                      children: A,
                                                  }),
                                                  (0, i.jsx)(tM.h, { size: 8 }),
                                                  (0, i.jsx)(b.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: C,
                                                  }),
                                                  (0, i.jsx)(tM.h, { size: 16 }),
                                                  (0, i.jsxs)(S.D, {
                                                      onClick: () =>
                                                          open(tG.A.getCreatorSupportArticleURL(eW.MVz.MEDIA_CHANNEL)),
                                                      className: tz.zy,
                                                      children: [
                                                          (0, i.jsx)(b.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-link",
                                                              children: eq.intl.string(eq.t.OahzBd),
                                                          }),
                                                          (0, i.jsx)(t_.t, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: tz.QI,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)(tM.h, { size: 16 }),
                                                  (0, i.jsx)("div", {
                                                      className: tz.Qq,
                                                      children: h.map((e) =>
                                                          (0, i.jsx)(
                                                              b.E,
                                                              {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-default",
                                                                  className: tz.U0,
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
                                          className: r()(tz.CT, tz.Gw),
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: tz.F2,
                                                  children: (0, i.jsxs)("div", {
                                                      className: tz.kQ,
                                                      children: [
                                                          (0, i.jsx)("img", {
                                                              src: l
                                                                  ? "/assets/b58ce8ba4d6516a2.png"
                                                                  : "/assets/9ed42f4f17fd8793.png",
                                                              alt: "",
                                                              className: tz.JM,
                                                          }),
                                                          (0, i.jsx)("img", {
                                                              src: l
                                                                  ? "/assets/d0f129a0c1627f7a.png"
                                                                  : "/assets/fddfcda2eca5c8d4.png",
                                                              alt: "",
                                                              className: tz.JM,
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              (0, i.jsxs)("article", {
                                                  className: tz.n$,
                                                  children: [
                                                      (0, i.jsxs)(b.E, {
                                                          variant: "text-xxs/bold",
                                                          className: tz.X4,
                                                          children: [
                                                              eq.intl.string(eq.t.NChGwy),
                                                              " ",
                                                              (0, i.jsx)("span", {
                                                                  role: "img",
                                                                  "aria-label": "",
                                                                  children: "\uD83D\uDD25",
                                                              }),
                                                          ],
                                                      }),
                                                      (0, i.jsx)(tM.h, { size: 10 }),
                                                      (0, i.jsx)(j.D, {
                                                          variant: "heading-lg/semibold",
                                                          color: "text-strong",
                                                          children: eq.intl.string(eq.t["N/TRrT"]),
                                                      }),
                                                      (0, i.jsx)(tM.h, { size: 8 }),
                                                      (0, i.jsx)(b.E, {
                                                          variant: "text-md/normal",
                                                          color: "text-muted",
                                                          children: eq.intl.string(eq.t.t3yWxG),
                                                      }),
                                                      (0, i.jsx)(tM.h, { size: 16 }),
                                                      (0, i.jsx)("div", {
                                                          className: tz.Qq,
                                                          children: x.map((e) =>
                                                              (0, i.jsx)(
                                                                  b.E,
                                                                  {
                                                                      variant: "text-sm/medium",
                                                                      color: "text-default",
                                                                      className: tz.U0,
                                                                      children: e,
                                                                  },
                                                                  e,
                                                              ),
                                                          ),
                                                      }),
                                                      (0, i.jsx)(tM.h, { size: 16 }),
                                                      0 === c.length &&
                                                          (0, i.jsx)(E.$, { variant: "primary", onClick: f, text: p }),
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
var tW = n(331322),
    t$ = n(111159),
    tq = n(517461),
    tK = n(350527),
    tY = n(95035),
    tX = n(221314),
    tQ = n(50897),
    tJ = n(419949);
let tZ = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    t0 = (e) => {
        let { guild: t } = e,
            n = (0, g.bG)([eO.A], () => eO.A.can(eW.xBc.MANAGE_GUILD, t));
        return (0, i.jsxs)(tW.B, {
            direction: "horizontal",
            gap: 8,
            children: [
                (0, i.jsxs)(tW.B, {
                    direction: "vertical",
                    gap: 16,
                    children: [
                        (0, i.jsx)(tW.B, {
                            direction: "vertical",
                            gap: 4,
                            children: (0, i.jsx)(b.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: eq.intl.string(tX.default.fP8DVx),
                            }),
                        }),
                        (0, i.jsxs)(tW.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, i.jsx)(b.E, {
                                    variant: "text-lg/semibold",
                                    color: "text-default",
                                    children: eq.intl.string(tX.default["i7CH/I"]),
                                }),
                                (0, i.jsxs)("ol", {
                                    className: r()(tQ.p_, tQ.o8, tQ.ap),
                                    children: [
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(b.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eq.intl.string(tX.default["+Izoz7"]),
                                            }),
                                        }),
                                        (0, i.jsxs)("li", {
                                            children: [
                                                (0, i.jsx)(b.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: eq.intl.string(tX.default["iu/RkU"]),
                                                }),
                                                (0, i.jsxs)("ul", {
                                                    className: r()(tQ.p_, tQ.t3, tQ.zS),
                                                    children: [
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(b.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eq.intl.string(tX.default.QogKbP),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(b.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eq.intl.string(tX.default.V4orHT),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(b.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eq.intl.string(tX.default.VrrQXe),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(b.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eq.intl.string(tX.default.pSuM5e),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(b.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eq.intl.string(tX.default["/RLXlI"]),
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
                                                children: eq.intl.string(tX.default.j4AmYy),
                                            }),
                                        }),
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(b.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eq.intl.format(tX.default["/g+PvX"], {
                                                    termsOfService: eW.X7G.TERMS,
                                                    communityGuidelines: eW.X7G.GUIDELINES,
                                                    helpArticle: tG.A.getArticleURL(eW.MVz.FLAG_TO_MOD),
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)(tW.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, i.jsx)(b.E, {
                                    variant: "text-lg/semibold",
                                    color: "text-default",
                                    children: eq.intl.string(tX.default.qJWXsz),
                                }),
                                (0, i.jsxs)("ul", {
                                    className: r()(tQ.p_, tQ.zS, tQ.ap),
                                    children: [
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(b.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eq.intl.format(tX.default.FUBV1P, {
                                                    survey: "https://discord.sjc1.qualtrics.com/jfe/form/SV_3WvT7SqlWpCJ4HQ",
                                                }),
                                            }),
                                        }),
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(b.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eq.intl.format(tX.default.W4MIAG, {
                                                    feedback: "https://forms.gle/RbDhW46PMmR39XUP7",
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)(tW.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, i.jsx)(b.E, {
                                    variant: "text-md/normal",
                                    color: "text-default",
                                    children: eq.intl.string(tX.default.J3HKmx),
                                }),
                                n &&
                                    (0, i.jsx)(b.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: eq.intl.format(tX.default["9x2vbP"], {
                                            optOutHook: (e) =>
                                                (0, i.jsx)(tY.A, {
                                                    onClick: () =>
                                                        tO.A.open(
                                                            t.id,
                                                            eW.BEX.MODERATION,
                                                            null,
                                                            eW.nd0.SAFETY_OVERVIEW,
                                                        ),
                                                    children: e,
                                                }),
                                        }),
                                    }),
                                (0, i.jsx)(b.E, {
                                    variant: "text-md/normal",
                                    color: "text-default",
                                    children: eq.intl.string(tX.default.KcCY25),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("img", {
                    src: "/assets/c42cecffc003efa2.svg",
                    alt: eq.intl.string(tX.default["UxV/3+"]),
                    width: tK.T5,
                    height: tK.T5,
                }),
            ],
        });
    };
function t1(e) {
    let t,
        { guild: n } = e,
        [l, a] = (0, tq.V)("report-to-mod-education-dismissed", !1),
        [o, c] = (0, tq.V)("report-to-mod-education-expanded", !1),
        { transitions: d, setVisible: u } = (() => {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tv.p)(e, {
                    keys: (e) => (e ? "shown" : "hidden"),
                    config: tZ,
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
                        className: r()(eY.kL, tQ.kL, tJ.mainCard),
                        children: [
                            (0, i.jsxs)("div", {
                                className: tQ.mG,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: tQ.cy,
                                        children: [
                                            (0, i.jsx)(t$.p, {
                                                size: "custom",
                                                width: 28,
                                                height: 28,
                                                color: "currentColor",
                                                className: tQ.Mg,
                                            }),
                                            (0, i.jsx)(b.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                children: eq.intl.string(eq.t.uvGmCx),
                                            }),
                                            (0, i.jsx)(b.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                children: "\u2014",
                                            }),
                                            (0, i.jsx)(j.D, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: eq.intl.string(tX.default["95qQRB"]),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(S.D, {
                                        onClick: () => a(!0),
                                        children: (0, i.jsx)(tA.P, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tQ.ut,
                                        }),
                                    }),
                                ],
                            }),
                            m((e, t) =>
                                t
                                    ? (0, i.jsxs)(tf.animated.div, {
                                          style: e,
                                          children: [
                                              (0, i.jsx)("hr", { className: tQ.me }),
                                              (0, i.jsx)(t0, { guild: n }),
                                          ],
                                      })
                                    : null,
                            ),
                        ],
                    })
                  : null,
          );
}
var t2 = n(191842),
    t4 = n(565645),
    t3 = n(21161),
    t7 = n(796774),
    t8 = n(209932),
    t5 = n(174459),
    t6 = n(102597),
    t9 = n(904054),
    ne = n(584014),
    nt = n(536283);
n(980504);
var nn = n(59618);
function nl(e) {
    let { className: t, sound: n, playSound: l, isPlaying: a, text: o } = e,
        c = n?.emojiId != null || n?.emojiName != null,
        d = eq.intl.formatToPlainString(eq.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name }),
        u = s.useCallback(() => {
            t5.default.track(eW.HAw.MODERATOR_QUEUE_ACTION, { guild_id: eF.A.getGuildId(), action: "airhorn" }),
                null != l && l();
        }, [l]);
    return (0, i.jsxs)(S.D, {
        "aria-label": d,
        tag: "span",
        onClick: u,
        className: r()(nn.Ls, nn.oR, { [nn.he]: !0 === a }, t),
        children: [
            c && (0, i.jsx)(t4.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: nn.JS }),
            (0, i.jsx)("span", { children: ` ${o} ` }),
        ],
    });
}
function ni(e) {
    let { containerRef: t, text: n } = e,
        l = s.useRef(null),
        a = (0, g.bG)([t8.A], () => t8.A.getSoundsForGuild("0")?.find((e) => "airhorn" === e.name)),
        { createMultipleConfettiAt: r } = s.useContext(t3.x),
        o = (0, g.bG)([L.A], () => L.A.useReducedMotion),
        { isPlaying: c, playSound: d } = (function (e) {
            let { isPlaying: t, playSound: n, preloadSound: l } = (0, ne.A)(null != e ? (0, t6.A)(e.soundId) : null);
            return (
                s.useEffect(() => {
                    null != e && l();
                }, [e, l]),
                {
                    isPlaying: t,
                    playSound: s.useCallback(() => !!n({ volume: (0, t9.A)(e?.volume ?? 1) }), [n, e?.volume]),
                }
            );
        })(a);
    (0, D.Ay)(() => {
        (0, t7.E7)();
    });
    let u = s.useCallback(async () => {
        if ((await d()) && (l.current?.addAnimation(), !o && t?.current != null)) {
            let e = t.current.getBoundingClientRect(),
                n = { x: e.left + e.width / 2, y: e.top + e.height / 3 },
                l = nt.uI[Math.floor(Math.random() * nt.uI.length)];
            r(
                n.x,
                n.y,
                { velocity: { type: "static-random", minValue: { x: -500, y: -500 }, maxValue: { x: 500, y: -100 } } },
                40,
                { sprite: l },
            );
        }
    }, [d, r, o, t]);
    return void 0 === a ? null : (0, i.jsx)(nl, { sound: a, playSound: u, isPlaying: c, text: n });
}
function ns() {
    let e = s.useRef(null);
    return (0, i.jsxs)(tW.B, {
        className: nn.kL,
        direction: "vertical",
        align: "center",
        justify: "center",
        padding: { top: 24, bottom: 24 },
        ref: e,
        children: [
            (0, i.jsx)(t2._, { size: "custom", width: 48, height: 48 }),
            (0, i.jsxs)(tW.B, {
                direction: "vertical",
                align: "center",
                justify: "center",
                children: [
                    (0, i.jsx)(j.D, {
                        className: nn.wx,
                        variant: "heading-md/medium",
                        children: eq.intl.string(tX.default.h6QNky),
                    }),
                    (0, i.jsx)(b.E, {
                        className: nn.Qq,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: eq.intl.format(tX.default["8N4c58"], {
                            airhornHook: (t) => (0, i.jsx)(ni, { containerRef: e, text: t }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
var na = n(34457),
    nr = n(317525),
    no = n(44234),
    nc = n(625494),
    nd = n(927813),
    nu = n(935208),
    nm = n(387255),
    nh = n(952351);
function nx(e) {
    let { channelName: t, guildId: l, tagFilter: a, channel: r } = e,
        o = (0, eh.S4)(r),
        c = (0, tt.AI)(r),
        d = r.isMediaChannel(),
        u = s.useCallback(() => {
            (0, tx.zd)(),
                (0, tp.openModalLazy)(async () => {
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
                      ? void (r.isGameInvitesChannel() ? (0, tg.d)(r) : nc._.dispatch(eW.jej.FOCUS_COMPOSER_TITLE))
                      : (0, eW.FXj)(),
            [u, x, c, r],
        );
    return (0, i.jsxs)("div", {
        className: nh.k,
        children: [
            (0, i.jsx)(j.D, {
                className: nh.w,
                variant: "heading-md/semibold",
                children: m
                    ? eq.intl.formatToPlainString(eq.t.lvPci0, { numTags: a.size })
                    : eq.intl.string(eq.t.PwTMG0),
            }),
            (0, i.jsx)(b.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: m
                    ? eq.intl.formatToPlainString(eq.t.AAeye1, { numTags: a.size })
                    : eq.intl.formatToPlainString(eq.t.YtsXFD, { channelName: t }),
            }),
            h &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tM.h, { size: 16 }),
                        (0, i.jsx)(E.$, {
                            text: x ? eq.intl.string(eq.t.DgatTQ) : eq.intl.string(eq.t.wOKE8I),
                            variant: "secondary",
                            onClick: g,
                        }),
                    ],
                }),
        ],
    });
}
var ng = n(253913),
    nf = n(658688);
let nj = { width: 28, height: 28 },
    np = { width: 20, height: 20, borderRadius: 10 },
    nv = (e) => {
        (0, tx.bh)({ onboardingCTA: e });
    };
class nA {
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
        return (0, i.jsx)("div", {
            className: nf.Ei,
            "aria-label": eq.intl.formatToPlainString(eq.t.PCs0oo, { numRoles: n.length }),
            children: n.map((e) =>
                (0, i.jsx)(tI.b_, { role: e, canRemove: !1, onRemove: eW.FXj, guildId: t.id, className: nf.Yq }, e.id),
            ),
        });
    },
    nN = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    nb = (e) => {
        let { handleHide: t } = e;
        return (0, i.jsx)(S.D, {
            onClick: t,
            className: nf.b,
            "aria-label": eq.intl.string(eq.t.WAI6xu),
            children: (0, i.jsx)(tA.P, { size: "md", color: "currentColor", className: nf.ut }),
        });
    },
    nS = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, i.jsx)(S.D, {
            onClick: n,
            className: nf.b,
            "aria-label": t ? eq.intl.string(eq.t.iTcuma) : eq.intl.string(eq.t.dcl9MQ),
            children: t
                ? (0, i.jsx)(tC.g, { size: "xs", color: "currentColor", className: nf.ut })
                : (0, i.jsx)(tN._, { size: "xs", color: "currentColor", className: nf.ut }),
        });
    },
    nE = (e) => {
        let t,
            { hasAnyThread: l, hasActiveThreads: a, channel: o } = e,
            c = (0, P.Ay)(o),
            { onboardingExpanded: u } = (0, ep.kU)((e) => {
                let { onboardingExpanded: t } = e;
                return { onboardingExpanded: t };
            }, d.x),
            { tagFilter: m } = (0, em.R)(o.id),
            h = (0, g.bG)([tF.A], () => tF.A.getGuild(o.getGuildId())),
            x = (0, eh.S4)(o),
            { transitions: f, setVisible: v } = (() => {
                let [e, t] = s.useState(!0);
                return {
                    transitions: (0, tv.p)(e, {
                        keys: (e) => (e ? "shown" : "hidden"),
                        config: nN,
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
            N = ((t = o.id), s.useCallback(() => (v(!1), tc.A.hideAdminOnboarding(t, !0)), [t, v])),
            {
                onboardingSteps: E,
                isDismissed: y,
                isHidden: I,
                isAllDone: R,
            } = ((e) => {
                var t;
                let l,
                    a,
                    r,
                    o,
                    { guild: c, channel: d, hasAnyThread: u, handleHide: m } = e,
                    [h, x] = s.useState(!1),
                    f = (0, tL.l)(d.id),
                    j = (0, g.bG)([to.A], () => to.A.hasHidden(d.id)),
                    p =
                        ((l = c?.id),
                        (a = (0, g.bG)([nr.A], () => (null != l ? nr.A.getSortedRoles(l) : void 0))),
                        s.useMemo(() => {
                            let e,
                                t,
                                l,
                                s,
                                r,
                                o,
                                m,
                                h,
                                g = new nA(),
                                f = d?.isMediaChannel() === !0;
                            return (
                                null == c ||
                                    null == d ||
                                    f ||
                                    null == a ||
                                    g.addStep(
                                        ((e = (0, tR.A)(d)
                                            ? tj.kg(eW.xBc.VIEW_CHANNEL, eW.xBc.SEND_MESSAGES)
                                            : eW.xBc.SEND_MESSAGES),
                                        (l =
                                            (t =
                                                null != c
                                                    ? (0, nm.N)(a, d, e).filter(
                                                          (e) =>
                                                              d.permissionOverwrites.hasOwnProperty(e.id) ||
                                                              (0, na.Oy)(e),
                                                      )
                                                    : []).length > 0),
                                        (s = t.some((e) => (0, na.Oy)(e))),
                                        {
                                            name: eq.intl.string(eq.t["/Ax2gs"]),
                                            description: eq.intl.string(eq.t.gAIOfg),
                                            isDone: l && s,
                                            shouldWarn: l && !s,
                                            children: l ? (0, i.jsx)(nC, { guild: c, roles: t }) : null,
                                            clickHandler: () => {
                                                nv(ng._G.PERMISSIONS),
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
                                                            onCloseRequest: eW.FXj,
                                                            onCloseCallback: () => x(!1),
                                                        },
                                                    );
                                            },
                                        }),
                                    ),
                                f ||
                                    g.addStep(
                                        ((r = null != d.topic && d.topic.length > 0),
                                        {
                                            name: eq.intl.string(eq.t.UgJu1e),
                                            description: eq.intl.string(eq.t["3C6/G1"]),
                                            clickHandler: () => {
                                                nv(ng._G.GUIDELINES), tT.Ay.open(d.id, void 0, eW.b7d.TOPIC);
                                            },
                                            isDone: r,
                                        }),
                                    ),
                                g.addStep(
                                    ((o = null != d.availableTags && d.availableTags.length > 0),
                                    {
                                        name: eq.intl.string(eq.t.xiBFCi),
                                        description: eq.intl.string(eq.t.wCv4Oz),
                                        clickHandler: () => {
                                            nv(ng._G.TAGS),
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
                                        name: eq.intl.string(eq.t.QlyC9s),
                                        description: eq.intl.string(eq.t["+50LJg"]),
                                        clickHandler: () => {
                                            nv(ng._G.DEFAULT_REACTION),
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
                                        name: eq.intl.string(eq.t["6A0O64"]),
                                        description: f
                                            ? eq.intl.string(eq.t["8hI5vr"])
                                            : eq.intl.format(eq.t.ysxcAw, {
                                                  onClick: (e) => {
                                                      null != h &&
                                                          (e.preventDefault(),
                                                          e.stopPropagation(),
                                                          (0, tx.zd)(),
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
                                            (nv(ng._G.CREATE_POST), d.isGameInvitesChannel())
                                                ? (0, tg.d)(d)
                                                : nc._.dispatch(eW.jej.FOCUS_COMPOSER_TITLE);
                                        },
                                        isDone: u,
                                    }),
                                ),
                                g
                            );
                        }, [d, c, a, u, x])),
                    v = p.isAllDone(),
                    A =
                        f ||
                        j ||
                        ((t = d.id),
                        (r = nu.default.extractTimestamp(t)),
                        !K()().isBefore(K()(r).add(K().duration(15, "days"))));
                return (
                    (o = s.useRef(0)),
                    s.useEffect(
                        () => (
                            h || !v || A
                                ? clearTimeout(o.current)
                                : (o.current = setTimeout(() => {
                                      m();
                                  }, 60 * nd.A.Millis.SECOND)),
                            () => clearTimeout(o.current)
                        ),
                        [v, A, m, h],
                    ),
                    { onboardingSteps: p, isHidden: j, isDismissed: f, isAllDone: v }
                );
            })({ guild: h, channel: o, hasAnyThread: l, handleHide: N }),
            k = !I && !y,
            M = (0, ep.ST)(),
            _ = o.isMediaChannel(),
            w = (e) => M.getState().setOnboardingExpanded(e);
        return ((0, D.Ay)(() => {
            R && k && N();
        }),
        ((e) => {
            let { isAllDone: t, isVisible: n, canManageChannel: l, guildId: i, channel: a } = e,
                r = (0, g.bG)([nr.A], () => (null != i ? nr.A.partitionVersion(i) : void 0)),
                o = s.useCallback(() => {
                    nc._.dispatch(eW.jej.REMEASURE_TARGET);
                }, []);
            s.useEffect(() => {
                o();
            }, [o, t, n, l, r, a.id, a.permissionOverwrites]);
        })({ isAllDone: R, isVisible: k, canManageChannel: x, guildId: h?.id, channel: o }),
        s.useEffect(() => {
            y || v(!I);
        }, [y, v, I]),
        (0, D.Ay)(() => {
            (l && k) || w(!0);
        }),
        null == h)
            ? null
            : (0, B.Fo)(o)
              ? a || 0 !== m.size
                  ? m.size > 0
                      ? null
                      : (0, i.jsx)(t1, { guild: h })
                  : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t1, { guild: h }), (0, i.jsx)(ns, {})] })
              : k && x
                ? _
                    ? l
                        ? null
                        : (0, i.jsx)(tV, { channel: o })
                    : (0, i.jsx)(i.Fragment, {
                          children: f((e, t) =>
                              t
                                  ? (0, i.jsx)(tf.animated.div, {
                                        style: e,
                                        className: nf.kL,
                                        children: (0, i.jsxs)("div", {
                                            className: nf.iE,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: nf.U1,
                                                    children: (0, i.jsxs)(p.F, {
                                                        component: (0, i.jsx)(j.D, {
                                                            variant: "heading-md/semibold",
                                                            children: eq.intl.string(eq.t.LhlgY9),
                                                        }),
                                                        children: [
                                                            (0, i.jsx)(j.D, {
                                                                variant: "heading-md/medium",
                                                                className: nf.wx,
                                                                children: eq.intl.format(eq.t["9L+8bz"], {
                                                                    numCompleted: E.completedSteps.toString(),
                                                                    numSteps: E.steps.length.toString(),
                                                                }),
                                                            }),
                                                            (0, i.jsxs)(b.E, {
                                                                variant: "text-xs/normal",
                                                                className: nf.l2,
                                                                children: [
                                                                    (0, i.jsx)(tb.m, {
                                                                        size: "xxs",
                                                                        color: "currentColor",
                                                                        className: nf.Kk,
                                                                    }),
                                                                    eq.intl.string(eq.t.znhX2R),
                                                                ],
                                                            }),
                                                            (0, i.jsx)(nS, { expanded: u, onClick: () => w(!u) }),
                                                            (0, i.jsx)(nb, { handleHide: N }),
                                                        ],
                                                    }),
                                                }),
                                                A((e, t) =>
                                                    t
                                                        ? (0, i.jsx)(tf.animated.div, {
                                                              style: e,
                                                              className: nf.qI,
                                                              children: (0, i.jsx)("ol", {
                                                                  className: nf.D4,
                                                                  children: E.getSteps().map((e) =>
                                                                      (0, i.jsxs)(
                                                                          S.D,
                                                                          {
                                                                              tag: "li",
                                                                              "aria-label": e.name,
                                                                              onClick: () => C(e),
                                                                              className: r()(nf._h, {
                                                                                  [nf.so]: e.isDone,
                                                                              }),
                                                                              children: [
                                                                                  e.shouldWarn
                                                                                      ? (0, i.jsx)(T.E, {
                                                                                            size: "custom",
                                                                                            width: 20,
                                                                                            height: 20,
                                                                                            color: et.A.colors
                                                                                                .ICON_FEEDBACK_CRITICAL,
                                                                                            className: nf.FY,
                                                                                        })
                                                                                      : e.isDone
                                                                                        ? (0, i.jsx)(ee.fk, {
                                                                                              color: et.A.colors
                                                                                                  .STATUS_POSITIVE_BACKGROUND
                                                                                                  .css,
                                                                                              icon: tS.A,
                                                                                              style: np,
                                                                                              className: nf.FY,
                                                                                          })
                                                                                        : (0, i.jsx)(ee.fk, {
                                                                                              disableColor: !0,
                                                                                              icon: (0, tE.k)(no.A),
                                                                                              style: nj,
                                                                                              className: r()(
                                                                                                  nf.FY,
                                                                                                  nf.so,
                                                                                              ),
                                                                                          }),
                                                                                  (0, i.jsxs)("div", {
                                                                                      className: nf.PM,
                                                                                      children: [
                                                                                          (0, i.jsx)(b.E, {
                                                                                              variant: "text-md/medium",
                                                                                              color: e.isDone
                                                                                                  ? "text-default"
                                                                                                  : "text-strong",
                                                                                              className: nf.u,
                                                                                              children: e.name,
                                                                                          }),
                                                                                          (0, i.jsx)(b.E, {
                                                                                              variant: "text-sm/normal",
                                                                                              color: "text-default",
                                                                                              className: nf.XK,
                                                                                              children: e.description,
                                                                                          }),
                                                                                          e.children,
                                                                                      ],
                                                                                  }),
                                                                                  (0, i.jsx)(ty._, {
                                                                                      size: "custom",
                                                                                      color: "currentColor",
                                                                                      width: 12,
                                                                                      className: nf.FY,
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
                  : (0, i.jsx)(nx, { channelName: c ?? "", guildId: o.guild_id, tagFilter: m, channel: o });
    };
var ny = n(717421),
    nT = n(622629),
    nI = n(22231),
    nR = n(46054),
    nk = n(101136);
let nM = s.memo(function (e) {
    let { channel: t, onChange: l } = e,
        a = (0, ep.ST)(),
        { guidelinesOpen: o } = (0, ep.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, d.x),
        c = (0, eh.S4)(t),
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
        f = (0, ny.z)({ opacity: +!!o, maxHeight: 500 * !!o, config: { duration: 300 }, onRest: () => g(!o) });
    return null != t.topic && t.topic.length > 0
        ? (0, i.jsx)(tf.animated.div, {
              style: f,
              className: x ? nk.kK : void 0,
              children: (0, i.jsxs)("div", {
                  className: nk.kL,
                  children: [
                      (0, i.jsxs)("div", {
                          className: nk.N1,
                          children: [
                              (0, i.jsxs)(j.D, {
                                  variant: "heading-lg/semibold",
                                  className: nk.$4,
                                  children: [
                                      (0, i.jsx)(nT.B, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                          height: 20,
                                      }),
                                      eq.intl.string(eq.t["4d4T4l"]),
                                      c &&
                                          (0, i.jsx)(S.D, {
                                              onClick: () => {
                                                  tT.Ay.open(t.id, void 0, eW.b7d.TOPIC);
                                              },
                                              tag: "span",
                                              className: nk.vk,
                                              children: (0, i.jsx)(nI.R, { size: "xs", color: "currentColor" }),
                                          }),
                                  ],
                              }),
                              (0, i.jsx)(S.D, {
                                  "aria-label": eq.intl.string(eq.t.cpT0Cq),
                                  className: nk.vk,
                                  onClick: () => {
                                      a.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, i.jsx)(tA.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: nk.iQ,
                          children: [
                              (0, i.jsx)(b.E, {
                                  selectable: !0,
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  style: { maxHeight: 220 },
                                  className: r()(nk.I4, eX.PT),
                                  children: (0, i.jsx)("div", {
                                      ref: h,
                                      children: nR.A.parseForumPostGuidelines(t.topic, !0, {
                                          channelId: t.id,
                                          allowHeading: !0,
                                          allowList: !0,
                                      }),
                                  }),
                              }),
                              u &&
                                  (0, i.jsxs)("div", {
                                      className: nk.jP,
                                      children: [
                                          (0, i.jsx)("div", { className: nk.D7 }),
                                          (0, i.jsx)("div", {
                                              className: nk.kx,
                                              children: (0, i.jsx)(S.D, {
                                                  className: nk.DD,
                                                  onClick: () => {
                                                      (0, tp.openModalLazy)(async () => {
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
                                                      className: nk.ur,
                                                      children: [
                                                          eq.intl.string(eq.t.Vu7odK),
                                                          (0, i.jsx)(tN._, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: nk.yS,
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
var n_ = n(621466),
    nw = n(189812),
    nD = n(884496),
    nL = n(511274),
    nP = n(408278),
    nO = n(952270),
    nF = n(39623),
    nG = n(278416),
    nU = n(465532),
    nz = n(608299),
    nH = n(355622),
    nB = n(375499),
    nV = n(151271),
    nW = n(698279),
    n$ = n(266599);
let nq = s.memo(
    s.forwardRef(function (e, t) {
        let { disabled: n, type: l, className: a, onClick: o, channel: c } = e,
            [u, m, h] = (0, nV.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], d.x),
            x = s.useCallback(() => {
                (0, nV.ed)(l, c.id), o?.();
            }, [l, o, c.id]);
        return n
            ? null
            : (0, i.jsx)("div", {
                  className: r()(nW.VQ, n$.UD),
                  ref: t,
                  children: (0, i.jsx)(nB.A, {
                      className: r()(n$.Z8, a),
                      onClick: x,
                      active: (u === nW.kx.GIF || u === nW.kx.EMOJI || u === nW.kx.STICKER) && m === l && h === c.id,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                  }),
              });
    }),
);
var nK = n(201349),
    nY = n(625928),
    nX = n(960850),
    nQ = n(702841),
    nJ = n(364522),
    nZ = n(215497),
    n0 = n(914905),
    n1 = n(750943),
    n2 = n(844222),
    n4 = n(780777),
    n3 = n(518960),
    n7 = n(811998);
let n8 = { scale: 0.95, opacity: 0 },
    n5 = { scale: 1, opacity: 1 },
    n6 = { scale: 1, opacity: 1 },
    n9 = { tension: 2400, friction: 52 },
    le = `.${n7.EJ}`,
    lt = { behavior: "smooth", block: "nearest", inline: "nearest" };
function ln(e) {
    let { channelId: t, onClick: n, onClose: l, onMouseEnter: a, listItemProps: r } = e,
        o = s.useRef(null),
        c = (0, g.bG)([eL.A], () => eL.A.getChannel(t), [t]);
    return (
        $()(null != c, "Forum Channel is null"),
        (0, i.jsxs)(S.D, {
            ...r,
            "aria-label": eq.intl.string(eq.t.nzoF5p),
            className: n7.EJ,
            onMouseEnter: a,
            onClick: (e) => {
                0 === e.detail && o.current?.activateUploadDialogue(), (0, tx.ri)({ isMobile: !1 }), n?.();
            },
            children: [
                (0, i.jsx)(n4.A, {
                    className: n7.Fg,
                    ref: o,
                    onChange: (e) => {
                        l?.(),
                            (0, n3.R)(e.currentTarget.files, c, tl.C.FirstThreadMessage, {
                                requireConfirm: !0,
                                origin: "file_picker",
                            }),
                            (e.currentTarget.value = null);
                    },
                    multiple: c.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
                (0, i.jsx)(n1.X, { size: "custom", color: "currentColor", width: 28, height: 28, className: n7.T3 }),
            ],
        })
    );
}
function ll(e) {
    let { channelId: t, closePopout: n } = e,
        [l, a] = s.useState(!1),
        { reducedMotion: r } = s.useContext(n2.C),
        o = (0, ny.z)({ from: r.enabled ? n5 : n8, to: n6, config: n9 }, "animate-always"),
        c = (0, g.bG)([L.A], () => L.A.keyboardModeEnabled),
        d = (0, g.bG)([ta.A], () => ta.A.getUploads(t, nH.oU.CREATE_FORUM_POST.drafts.type)),
        x = (0, m.Ay)({
            id: "forum-composer-attachments-popout",
            isEnabled: c,
            orientation: h.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, i.jsx)(tf.animated.div, {
        className: n7.jC,
        onMouseLeave: () => {
            l || c || n();
        },
        onFocus: (e) => {
            e.target.scrollIntoView(lt);
        },
        style: o,
        children: (0, i.jsx)(nJ.Ip, {
            orientation: "horizontal",
            className: n7.SW,
            paddingFix: !1,
            fade: !0,
            children: (0, i.jsx)(u.hD, {
                navigator: x,
                children: (0, i.jsx)(u.PR, {
                    children: (e) => {
                        let { ref: n, ...l } = e;
                        return (0, i.jsxs)("div", {
                            className: n7.p8,
                            ref: n,
                            ...l,
                            children: [
                                d.map((e) =>
                                    (0, i.jsx)(
                                        n0.A,
                                        {
                                            channelId: t,
                                            draftType: nH.oU.CREATE_FORUM_POST.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: c,
                                            hideFileName: !0,
                                            size: nZ.L.SMALL,
                                        },
                                        e.id,
                                    ),
                                ),
                                (0, i.jsx)(li, { channelId: t, setFileInputOpen: a }),
                            ],
                        });
                    },
                }),
            }),
        }),
    });
}
function li(e) {
    let { channelId: t, setFileInputOpen: n } = e,
        l = { ...(0, u.rm)("upload-button"), tabIndex: 0 };
    return (0, i.jsx)(ln, {
        channelId: t,
        onClick: () => {
            n(!0);
        },
        onClose: () => {
            n(!1),
                requestAnimationFrame(() => {
                    (0, n_.vq)(document.activeElement, HTMLElement) && document.activeElement.scrollIntoView(lt);
                });
        },
        listItemProps: l,
    });
}
function ls(e) {
    let { channelId: t } = e,
        [n, l] = s.useState(!1),
        a = s.useRef(null),
        r = (0, g.bG)([ta.A], () => ta.A.getUploads(t, nH.oU.CREATE_FORUM_POST.drafts.type)),
        o = r.length,
        c = o > 0;
    s.useEffect(() => {
        n && !c && l(!1);
    }, [n, c]),
        s.useEffect(() => {
            if (document.activeElement !== document.body && null != document.activeElement) return;
            l(o > 0);
            let e = requestAnimationFrame(() => {
                let e = a.current?.querySelector(le);
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
        className: n7.kL,
        ref: a,
        onBlur: (e) => {
            null == e.relatedTarget ||
                a.current?.contains(e.relatedTarget) ||
                (e.relatedTarget?.closest('[role="dialog"]') == null && u());
        },
        children: [
            c
                ? !n &&
                  (0, i.jsxs)(S.D, {
                      "aria-label": eq.intl.string(eq.t.nzoF5p),
                      className: n7.fY,
                      tabIndex: 0,
                      onClick: d,
                      onFocus: () => {
                          d(),
                              c &&
                                  requestAnimationFrame(() => {
                                      let e = a.current?.querySelector(le);
                                      e?.focus();
                                  });
                      },
                      onMouseEnter: d,
                      children: [
                          (0, i.jsx)(n0.J, { upload: r[0], size: nZ.L.SMALL }),
                          (0, i.jsx)("div", { className: n7.qS, children: o }),
                      ],
                  })
                : (0, i.jsx)(ln, { onMouseEnter: d, channelId: t }),
            n && (0, i.jsx)(ll, { channelId: t, closePopout: u }),
        ],
    });
}
var la = n(343151);
function lr(e) {
    let { parentChannel: t } = e,
        n = (0, nQ.yK)([ta.A], () => {
            let e = ta.A.getUploads(t.id, nH.oU.CREATE_FORUM_POST.drafts.type);
            return e?.filter((e) => !0 !== e.isThumbnail);
        });
    return (0, i.jsxs)("div", {
        className: la.kL,
        children: [
            (0, i.jsx)(b.E, {
                variant: "text-md/semibold",
                color: "text-muted",
                children: eq.intl.string(eq.t.omKGKu),
            }),
            (0, i.jsx)(b.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eq.intl.string(eq.t["zUjLl+"]),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(nJ.Ip, {
                    className: la.mw,
                    orientation: "horizontal",
                    paddingFix: !1,
                    fade: !0,
                    children: (0, i.jsxs)("div", {
                        className: la.p8,
                        children: [
                            n.map((e) =>
                                (0, i.jsx)(
                                    n0.A,
                                    {
                                        channelId: t.id,
                                        draftType: nH.oU.CREATE_FORUM_POST.drafts.type,
                                        upload: e,
                                        keyboardModeEnabled: !0,
                                        hideFileName: !0,
                                        size: nZ.L.SMALL,
                                    },
                                    e.id,
                                ),
                            ),
                            (0, i.jsx)(ln, { channelId: t.id }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
var lo = n(241326),
    lc = n(851023),
    ld = n(915089),
    lu = n(607470),
    lm = n(703007),
    lh = n(635377),
    lx = n.n(lh);
let lg = "absolute",
    lf = new (lx())({ max: 100 });
function lj(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: l } = e;
    return s.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: l } = e,
                    i = `${t}-${n}-${l}`,
                    s = lf.get(i);
                if (null != s) return s;
                {
                    let e = ((e, t, n, l) => {
                        if (0 === n) return [];
                        if (1 === n) return [{ width: e, height: t, top: 0, left: 0, position: lg }];
                        if (2 === n) {
                            let n = Math.ceil((e - l) / 2);
                            return [
                                { top: 0, left: 0, position: lg, width: n, height: t },
                                { top: 0, left: n + l, position: lg, width: n, height: t },
                            ];
                        }
                        if (3 === n) {
                            let n = Math.ceil((e - l) / 2),
                                i = Math.ceil((t - l) / 2);
                            return [
                                { top: 0, left: 0, position: lg, width: n, height: t },
                                { top: 0, left: n + l, position: lg, width: n, height: i },
                                { top: i + l, left: n + l, position: lg, width: n, height: i },
                            ];
                        }
                        {
                            let n = Math.ceil((e - l) / 2),
                                i = Math.ceil((t - l) / 2);
                            return [
                                { top: 0, left: 0, position: lg, width: n, height: i },
                                { top: i + l, left: 0, position: lg, width: n, height: i },
                                { top: 0, left: n + l, position: lg, width: n, height: i },
                                { top: i + l, left: n + l, position: lg, width: n, height: i },
                            ];
                        }
                    })(n, l, t, 4);
                    return lf.set(i, e), e;
                }
            })({ numAttachments: t, containerWidth: n, containerHeight: l }),
        [t, n, l],
    );
}
function lp(e) {
    return e.map((t, n) => ({
        minWidth: 2 * e[n].width,
        minHeight: 2 * e[n].height,
        maxWidth: 2 * e[n].width,
        maxHeight: 2 * e[n].height,
    }));
}
n(323874), n(14289), n(35956);
var lv = n(304162),
    lA = n(735438),
    lC = n(724442),
    lN = n(998218),
    lb = n(36491),
    lS = n(222209);
let lE = [{ name: "Media Post Thumbnail", extensions: ["jpg", "jpeg", "png", "gif", "webp"] }],
    ly = (0, ld.Ld)();
function lT(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: l } = e,
        s = lj({ numAttachments: t.length, containerWidth: n, containerHeight: l });
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsx)(
                "div",
                {
                    style: s[t],
                    children:
                        !0 === e.isVideo
                            ? (0, i.jsx)(lu.A, { src: e.src, className: lS.xn, "aria-hidden": !0 })
                            : (0, i.jsx)("img", { src: e.src, className: lS.xn, "aria-hidden": !0, alt: e?.alt ?? "" }),
                },
                e.src,
            ),
        ),
    });
}
let lI = (e) => {
    let { parentChannel: t } = e,
        { textAreaState: l } = (0, ep.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        a = (0, nQ.bG)([L.A], () => L.A.keyboardModeEnabled),
        o = (function (e, t) {
            let { mediaAttachments: n, hasThumbnail: l } = (function (e) {
                    let [t, n] = s.useState(null),
                        l = (0, nQ.yK)([ta.A], () => {
                            let t = ta.A.getUploads(e.id, nH.oU.CREATE_FORUM_POST.drafts.type),
                                n = t.find((e) => e.isThumbnail);
                            return null != n ? [n] : t.filter((e) => e.isVideo || e.isImage);
                        }),
                        i = s.useMemo(() => l.some((e) => e.isThumbnail), [l]);
                    return (
                        s.useEffect(() => {
                            let e = [];
                            return (
                                n(
                                    l.slice(0, lv.A8).flatMap((t) => {
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
                i = Math.max(lv.A8 - (n?.length ?? 0), 0),
                { embeds: a } = (function (e, t, n) {
                    let l = s.useRef(new Map()),
                        [, i] = s.useState(null),
                        [a, r] = s.useState(null),
                        o = s.useMemo(
                            () =>
                                lA.debounce((e, n) => {
                                    if (null == n || e || 0 === t) return;
                                    let i = n.match(lN.A.URL_REGEX);
                                    if (null == i || 0 === i.length) {
                                        (l.current = new Map()), r(null);
                                        return;
                                    }
                                    r(lA.uniq(i).slice(0, lv.A8));
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
                                        let t = await lb.L4(s);
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
                    let c = (0, lC.A)(l),
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
                            let t = (0, lv.m3)(e);
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
                null != c && nz.A.remove(t.id, c.id, nH.oU.CREATE_FORUM_POST.drafts.type),
                    (0, n3.R)(e.currentTarget.files, t, nH.oU.CREATE_FORUM_POST.drafts.type, {
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
                        $()(null != e, "upload should not be null");
                        let { default: l } = await n.e("70698").then(n.bind(n, 427281));
                        return (n) =>
                            (0, i.jsx)(l, {
                                ...n,
                                upload: e,
                                channelId: t.id,
                                draftType: nH.oU.CREATE_FORUM_POST.drafts.type,
                                onSubmit: (n) => {
                                    let { name: l, description: i, spoiler: s } = n;
                                    nz.A.update(t.id, e.id, nH.oU.CREATE_FORUM_POST.drafts.type, {
                                        filename: l,
                                        description: i,
                                        spoiler: s,
                                    });
                                },
                                disableSpoiler: !0,
                            });
                    });
        },
        g = (0, i.jsx)(lm.A, {
            color: f.XD.CUSTOM,
            className: lS.zL,
            innerClassName: lS.Nr,
            onChange: h,
            multiple: !1,
            "aria-hidden": !0,
            filters: lE,
            "aria-describedby": ly,
            "aria-label": u ? eq.intl.string(eq.t.MxJI3f) : eq.intl.string(eq.t.Cbiofa),
            children: u
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(lT, { mediaAttachments: o, containerWidth: m.width, containerHeight: m.height }),
                          (0, i.jsxs)("div", {
                              className: r()(lS.On, { [lS.bP]: o?.length > 2 }),
                              children: [
                                  (0, i.jsx)(b.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: eq.intl.string(eq.t.MxJI3f),
                                  }),
                                  null == c &&
                                      (0, i.jsx)(nI.R, { size: "xs", color: "currentColor", className: lS.IZ }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(n1.X, {
                              size: "custom",
                              width: 39,
                              height: 39,
                              color: "currentColor",
                              className: lS.T3,
                          }),
                          (0, i.jsx)(b.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: eq.intl.string(eq.t.Cbiofa),
                          }),
                      ],
                  }),
        });
    return (0, i.jsx)("div", {
        className: lS.iT,
        style: m,
        children:
            null != c
                ? (0, i.jsx)(nZ.A, {
                      actions: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(lc.A, {
                                  className: lS.XI,
                                  tooltip: eq.intl.string(eq.t.Y8ujqr),
                                  onClick: x,
                                  children: (0, i.jsx)(nI.R, { size: "xs", color: "currentColor" }),
                              }),
                              (0, i.jsx)(lc.A, {
                                  className: lS.XI,
                                  tooltip: eq.intl.string(eq.t.vN7REz),
                                  onClick: () => nz.A.remove(t.id, c.id, nH.oU.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, i.jsx)(lo.u, { size: "md", color: "currentColor" }),
                              }),
                          ],
                      }),
                      draftType: nH.oU.CREATE_FORUM_POST.drafts.type,
                      id: c.id,
                      channelId: t.id,
                      handleEditModal: x,
                      keyboardModeEnabled: a,
                      size: nZ.L.SMALL,
                      className: lS.Xc,
                      children: g,
                  })
                : g,
    });
};
var lR = n(451909),
    lk = n(375199),
    lM = n(141268),
    l_ = n(931664),
    lw = n(631576),
    lD = n(474078),
    lL = n(55294),
    lP = n(383233),
    lO = n(101392),
    lF = n(806150),
    lG = n(753738);
function lU(e, t) {
    return { type: e, message: t ?? null };
}
function lz(e, t) {
    return lU(1, (0, lG.cw)(e, t?.id));
}
function lH(e, t) {
    return null == e ||
        (0 === e.type && null != t.content && t.content.trim().length > 0) ||
        (2 === e.type && null != t.tags && t.tags.length > 0)
        ? null
        : (e.message ?? null);
}
var lB = n(774812),
    lV = n(91871),
    lW = n.n(lV),
    l$ = n(892547),
    lq = n(658675),
    lK = n(628284),
    lY = n(506115);
let lX = "data-listbox-item-id",
    lQ = Object.freeze({ STANDARD: lY.wH, BRAND: lY.hE });
function lJ(e) {
    return String(e);
}
let lZ = s.createContext({ activeDescendant: null, selected: new Set(), setSelected: () => null, itemToString: lJ });
function l0(e) {
    let {
            placeholder: t,
            children: n,
            value: l,
            onChange: a,
            className: o,
            listClassName: c,
            "aria-label": d,
            multiSelect: h = !1,
            autoFocus: x = !1,
            maxVisibleItems: g = 5,
            itemToString: f = lJ,
            emptyStateText: p,
            emptyStateHeader: v,
            onQueryChange: A,
        } = e,
        [C, S] = s.useState(""),
        E = s.useCallback(
            (e) => {
                S(e), A?.(e);
            },
            [A],
        ),
        [y] = s.useState(!0),
        [T, I] = s.useState(null),
        R = s.useId(),
        k = s.useRef(null);
    s.useLayoutEffect(() => {
        let e = document.querySelector(`[${lX}="${T}"]`),
            t = k.current;
        null != t && null != e && t.scrollIntoViewNode({ node: e, padding: 12 });
    }, [T]);
    let M = n(C),
        _ = 0 === M.length,
        w = v ?? eq.intl.string(eq.t["4o4z3e"]),
        D = s.useId(),
        L = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = k.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        P = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = k.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        O = s.useCallback((e, t) => {
            I(t);
            let n = document.querySelector(e),
                l = k.current;
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
                    "aria-controls": y ? R : void 0,
                    "aria-owns": R,
                    "aria-haspopup": "listbox",
                    className: r()(lY.EA, o),
                    children: [
                        (0, i.jsx)("div", {
                            className: lY.wx,
                            children: (0, i.jsx)(l$.I, {
                                size: "sm",
                                autoFocus: x,
                                placeholder: t,
                                query: C,
                                onChange: E,
                                onKeyDown: s,
                                onBlur: () => I(null),
                                onClear: () => E(""),
                                inputProps: { "aria-multiline": !1, "aria-activedescendant": null != T ? T : void 0 },
                            }),
                        }),
                        (0, i.jsx)("div", {
                            children:
                                y &&
                                (_
                                    ? (0, i.jsxs)("div", {
                                          className: lY.Ie,
                                          children: [
                                              (0, i.jsx)(j.D, { variant: "heading-md/semibold", children: w }),
                                              (0, i.jsx)(b.E, {
                                                  color: "text-muted",
                                                  variant: "text-md/normal",
                                                  children: p ?? eq.intl.string(eq.t.QwSXv8),
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)(lZ.Provider, {
                                          value: { activeDescendant: T, selected: l, setSelected: a, itemToString: f },
                                          children: (0, i.jsx)(N.OZ, {
                                              ...u,
                                              style: { maxHeight: 46 * g },
                                              "aria-multiselectable": h,
                                              id: R,
                                              ref: k,
                                              className: r()(lY.p_, lY.XG, c),
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
let l1 = s.createContext(null);
function l2(e) {
    let { value: t, children: n, disabled: l = !1, selectedColor: a = lQ.STANDARD, ...o } = e,
        { activeDescendant: c, selected: d, setSelected: m, itemToString: h } = s.useContext(lZ),
        x = h(t),
        g = c === x,
        f = o?.selected ?? d.has(t),
        j = (0, u.rm)(x);
    return (0, i.jsx)(S.D, {
        tag: "li",
        id: x,
        onClick: () => (l ? null : m(t)),
        [lX]: t,
        className: r()(lY.AS, { [lY.in]: g, [a]: f, [lY.r9]: l }),
        ...j,
        role: "option",
        "aria-selected": f,
        "aria-disabled": l,
        children: (0, i.jsx)(l1.Provider, { value: t, children: n }),
    });
}
(l2.Colors = lQ),
    (l2.Label = function (e) {
        let { children: t } = e;
        return (0, i.jsx)("span", { className: lY.IR, children: t });
    }),
    (l2.Icon = function (e) {
        let { children: t } = e;
        return (0, i.jsx)("span", { className: lY.pp, children: t });
    }),
    (l2.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = s.useContext(lZ),
            l = s.useContext(l1);
        return (0, i.jsx)("span", {
            className: lY.pp,
            children: (0, i.jsx)(lq.P, { checked: t ?? (null != l && n.has(l)) }),
        });
    }),
    (l2.Checkmark = function () {
        let { selected: e } = s.useContext(lZ),
            t = s.useContext(l1);
        return e.has(t)
            ? (0, i.jsx)("span", {
                  className: lY.pp,
                  children: (0, i.jsx)(lK.y, { size: "custom", color: "currentColor", width: 20, height: 20 }),
              })
            : null;
    });
var l4 = n(305866),
    l3 = n(183610);
function l7(e) {
    let {
            children: t,
            placeholder: n,
            value: l,
            onChange: a,
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
                a(e), d || o?.();
            },
            [a, o, d],
        );
    return (0, i.jsx)(l4.l, {
        className: r()(l3.kL, l3.XG, c),
        children: (0, i.jsx)(l0, {
            ...x,
            value: l,
            multiSelect: d,
            onChange: g,
            placeholder: n,
            children: t,
            listClassName: l3.p_,
            emptyStateText: u,
            emptyStateHeader: m,
            onQueryChange: h,
        }),
    });
}
var l8 = n(159273),
    l5 = n(6858);
let l6 = (e) => {
    let { tag: t } = e,
        { id: n, name: l, emojiId: s, emojiName: a } = t,
        r = (0, g.bG)([l8.Ay], () => (null != s ? l8.Ay.getUsableCustomEmojiById(s) : null)),
        o = null != s || null != a;
    return (0, i.jsx)(
        l2,
        {
            value: n,
            children: (0, i.jsx)(l2.Label, {
                children: (0, i.jsxs)("div", {
                    className: l5.nM,
                    children: [
                        o
                            ? (0, i.jsx)(t4.A, {
                                  className: l5.__invalid_emoji,
                                  emojiId: s,
                                  emojiName: a,
                                  animated: !!r?.animated,
                              })
                            : (0, i.jsx)(nG.g, { size: "md", color: "currentColor", className: l5.__invalid_emoji }),
                        (0, i.jsx)(b.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                    ],
                }),
            }),
        },
        n,
    );
};
function l9(e) {
    let { parentChannel: t, appliedTags: n, maxTagsApplied: l, onSelectTag: s, onClose: a } = e,
        r = (0, eh.OT)(t);
    return (0, i.jsx)(l7, {
        value: n,
        onChange: (e) => {
            (!l || n.has(e)) && (s(e), a());
        },
        placeholder: eq.intl.string(eq.t.MbhGm7),
        "aria-label": eq.intl.string(eq.t.MbhGm7),
        children: (e) =>
            r.filter((t) => lW()(e.toLowerCase(), t.name.toLowerCase())).map((e) => (0, i.jsx)(l6, { tag: e }, e.id)),
    });
}
var ie = n(376310),
    it = n(291747),
    il = n(935090);
let ii = (e) => {
    let { rateLimitPerUser: t, slowmodeCooldownGuess: n, isBypassSlowmode: l, leadingIcon: s = !1 } = e,
        a = (0, nX.VI)(t, !0),
        o = (0, nX.pS)(n, l),
        c = (0, i.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: o }),
        d = (0, i.jsx)(it.x, { size: "xs", color: "currentColor", className: r()(il.Eq, { [il.iE]: s }) });
    return (0, i.jsx)(Y.m, {
        text: a,
        children: (0, i.jsx)("div", {
            className: il.ns,
            children: s ? (0, i.jsxs)(i.Fragment, { children: [d, c] }) : (0, i.jsxs)(i.Fragment, { children: [c, d] }),
        }),
    });
};
var is = n(770178),
    ia = n(765548);
let ir = () => {
    let [e, t] = s.useState(400),
        n = (0, ia.A)((e) => {
            t(e.target.clientWidth);
        });
    return { containerRef: (0, is.w)(n), containerWidth: e };
};
var io = n(746080),
    ic = n(955780);
let id = nH.oU.CREATE_FORUM_POST;
function iu(e) {
    var t, n;
    let l,
        a,
        { parentChannel: o, isSearchLoading: c, numResults: u, onChange: m, canCreatePost: h, inputRef: x } = e,
        f = !(0, V.V)(o) && h,
        {
            textAreaState: j,
            formOpen: p,
            previewing: v,
        } = (0, ep.kU)((e) => {
            let { textAreaState: t, formOpen: n, previewing: l } = e;
            return { textAreaState: t, formOpen: n, previewing: l };
        }, d.x),
        [A, C] = s.useState(null),
        N = s.useContext(tr.EH),
        b = s.useCallback(() => {
            N.bumpDispatchPriority();
        }, [N]),
        S = (0, g.bG)([eO.A], () => eO.A.can(eW.xBc.ATTACH_FILES, o)),
        E = (0, g.yK)([ta.A], () => ta.A.getUploads(o.id, tl.C.FirstThreadMessage)),
        y = p && S && f,
        T = o?.isMediaChannel() === !0,
        I =
            ((t = o),
            (n = x),
            (l = (0, ep.ST)()),
            (a = (0, eh.Hv)(t)),
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
                            (0, n_.vq)(n.current, HTMLTextAreaElement) && n.current?.focus();
                        }, 0),
                        t.isGameInvitesChannel())
                    )
                        return;
                    ((o && s.length > 0) ||
                        (r.textValue.trim().length > 0 && r.textValue.trim() !== a) ||
                        ta.A.getUploads(t.id, tl.C.FirstThreadMessage).length > 0) &&
                        i();
                }
            }, [l, t, a, n])),
        R = (function (e) {
            let { formOpen: t } = (0, ep.kU)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, d.x),
                n = (0, ep.ST)(),
                l = (0, lL.NV)({ parentChannel: e });
            s.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                e(null), t(null);
            }, [t, n]);
            let i = s.useCallback(
                (t, l, i) => {
                    let { name: s, textAreaState: a } = n.getState();
                    null == t && (t = a.textValue), (t = t.trim());
                    let { content: r } = lR.Ay.parse(e, t);
                    if (
                        ((t = r),
                        (null == l || 0 === l.length) &&
                            (l = l_.A.getStickerPreview(e.id, id.drafts.type)?.map((e) => e.id)),
                        (null == i || 0 === i.length) && (i = ta.A.getUploads(e.id, tl.C.FirstThreadMessage)),
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
                        f = lB.A.hasSeen(e.id);
                    if (!u)
                        return (
                            e.isGameInvitesChannel() ||
                                ((0, tx.jr)({ guildId: e.guild_id, channelId: e.id }),
                                f || n.getState().setGuidelinesOpen(!0),
                                x()),
                            { shouldClear: !1, shouldRefocus: !1 }
                        );
                    let { content: j, stickers: p, uploads: v, hasNameError: A, hasMessageError: C } = i(t, s, a);
                    if (
                        (r(A ? lU(0, eq.intl.string(eq.t["71wuR0"])) : null),
                        o(C ? lU(0, eq.intl.string(eq.t["w/BT3G"])) : null),
                        A || C)
                    )
                        return { shouldClear: !1, shouldRefocus: !0 };
                    try {
                        c(!0);
                        let { valid: t } = await (0, lF.i)({
                            content: j,
                            stickers: p,
                            uploads: v,
                            type: id,
                            channel: e,
                        });
                        if (!t) return { shouldClear: !1, shouldRefocus: !0 };
                        let n = await l(j, p, v);
                        return (
                            (0, tn.JA)(n),
                            tc.A.resort(e.id),
                            (0, lw.x5)(e.id, id.drafts.type),
                            d(),
                            m(!1),
                            h(!1),
                            lB.A.markAsSeen(e.id),
                            g(!1),
                            { shouldClear: !0, shouldRefocus: !1 }
                        );
                    } catch (t) {
                        return (
                            t.body?.code === eW.t02.AUTOMOD_TITLE_BLOCKED
                                ? r(lz(t.body, e))
                                : t.body?.code === eW.t02.AUTOMOD_MESSAGE_BLOCKED
                                  ? o(lz(t.body, e))
                                  : t.body?.code === eW.t02.INVALID_FORM_BODY &&
                                    t.body?.errors?.name != null &&
                                    r(lU(3, eq.intl.string(eq.t["71wuR0"]))),
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
        s.useLayoutEffect(m, [p, j, E, m]),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("div", {
                "aria-label": f ? eq.intl.string(eq.t.dq7mAa) : eq.intl.string(eq.t["5h0QOP"]),
                className: r()(ic.kL, { [ic.yZ]: !p }),
                onClick: !p && f ? I : void 0,
                children: (0, i.jsxs)("form", {
                    onMouseDown: b,
                    onFocus: b,
                    onSubmit: (e) => {
                        e.preventDefault(), !f || o.isGameInvitesChannel() || R();
                    },
                    children: [
                        (0, i.jsxs)("div", {
                            className: ic.KJ,
                            children: [
                                (0, i.jsx)(im, { parentChannel: o, isSearchLoading: c, inputRef: x }),
                                (0, i.jsxs)("div", {
                                    className: v ? ic.vJ : ic.Zd,
                                    children: [
                                        (0, i.jsx)(ih, {
                                            editorRef: A,
                                            parentChannel: o,
                                            isSearchLoading: c,
                                            numResults: u,
                                            inputRef: x,
                                            canCreatePost: f,
                                        }),
                                        p &&
                                            (0, i.jsx)(ij, {
                                                editorRef: A,
                                                setEditorRef: C,
                                                parentChannel: o,
                                                submit: R,
                                                disabled: !f,
                                            }),
                                        v && (0, i.jsx)(ip, {}),
                                    ],
                                }),
                                y && (T ? (0, i.jsx)(lI, { parentChannel: o }) : (0, i.jsx)(ls, { channelId: o.id })),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: ic.Zd,
                            children: [
                                y && T && (0, i.jsx)(lr, { parentChannel: o }),
                                p && (0, i.jsx)(iN, { className: ic.CN, parentChannel: o, canCreatePost: f }),
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
}
let im = s.memo(function (e) {
        let { parentChannel: t, isSearchLoading: n, inputRef: l } = e,
            {
                formOpen: a,
                name: r,
                textAreaState: o,
                hasClickedForm: c,
                submitting: u,
            } = (0, ep.kU)((e) => {
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
            m = (0, ep.ST)(),
            h = (0, eh.Hv)(t),
            x = s.useCallback(() => {
                m.getState().resetFormState(),
                    nU.A.clearDraft(t.id, tl.C.ThreadSettings),
                    nU.A.clearDraft(t.id, tl.C.FirstThreadMessage),
                    nz.A.clearAll(t.id, tl.C.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    l.current?.blur(),
                    (0, tx.py)({ guildId: t.guild_id, channelId: t.id });
            }, [m, t.id, t.guild_id, l]),
            g = s.useMemo(
                () =>
                    !a &&
                    (r.trim().length > 0 ||
                        (o.textValue.trim().length > 0 && o.textValue.trim() !== h) ||
                        ta.A.getUploads(t.id, tl.C.FirstThreadMessage).length > 0) &&
                    c
                        ? (0, i.jsx)(nI.R, { size: "md", color: "currentColor", className: ic.rD })
                        : (0, i.jsx)(nD.B, { onClear: x, hasContent: a, isLoading: n || u, size: "md" }),
                [n, a, c, r, o.textValue, x, t.id, h, u],
            );
        return (0, i.jsx)("div", { className: ic.VB, children: g });
    }),
    ih = s.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: l, editorRef: a, isSearchLoading: r, numResults: o } = e,
            {
                formOpen: c,
                nameError: u,
                name: m,
                textAreaState: h,
                previewing: x,
            } = (0, ep.kU)((e) => {
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
            f = (0, ep.ST)(),
            p = null != t.topic && 0 !== t.topic.length,
            v = lB.A.hasSeen(t.id),
            A = (0, eh.Hv)(t),
            C = (0, g.bG)([eG.default], () => eG.default.getCurrentUser());
        $()(null != C, "current user cannot be null"),
            (0, tr.Vo)({
                event: eW.jej.FOCUS_COMPOSER_TITLE,
                handler: () => {
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
                            await (0, n3.R)([n], t, tl.C.FirstThreadMessage, { origin: "clipboard" }),
                            f.getState().setFormOpenFromUserAction();
                    }
                },
                [t, f],
            ),
            b = lH(u, { content: m });
        return (0, i.jsxs)("div", {
            className: ic.gn,
            onPaste: N,
            children: [
                c && x
                    ? (0, i.jsx)(j.D, { variant: "heading-md/semibold", className: ic.DD, children: m })
                    : (0, i.jsxs)(tW.B, {
                          gap: 4,
                          children: [
                              (0, i.jsx)(nw.d, {
                                  value: m,
                                  placeholder:
                                      !l || t.isGameInvitesChannel()
                                          ? eq.intl.string(eq.t["5h0QOP"])
                                          : c || (h.textValue.length > 0 && h.textValue.trim() !== A)
                                            ? eq.intl.string(eq.t.lU4dDS)
                                            : eq.intl.string(eq.t.CjmivA),
                                  rows: 1,
                                  maxLength: eW.Ign,
                                  onChange: (e) => {
                                      let n = e.target.value,
                                          l = (0, lD.A)(n, !1);
                                      f.getState().setName(l);
                                      let i = 0 === l.trim().length,
                                          s = 0 === h.textValue.trim().length,
                                          a = h.textValue.trim() === A;
                                      i && (s || a) && f.getState().setHasClickedForm(!1),
                                          c || tc.A.updateForumSearchQuery(t.id, l);
                                  },
                                  onFocus: () => {
                                      f.getState().setTitleFocused(!0), f.getState().setBodyFocused(!1);
                                  },
                                  onBlur: () => {
                                      f.getState().setTitleFocused(!1);
                                      let e = (0, lD.A)(m, !0);
                                      e !== m && (f.getState().setName(e), c || tc.A.updateForumSearchQuery(t.id, e));
                                  },
                                  onKeyDown: (e) => {
                                      "Enter" === e.key &&
                                          (e.preventDefault(),
                                          e.stopPropagation(),
                                          c && m.length > 0
                                              ? a?.focus()
                                              : l && e.shiftKey && !t.isGameInvitesChannel()
                                                ? ((0, tx.sB)({ guildId: t.guild_id, channelId: t.id }),
                                                  p && !v && f.getState().setGuidelinesOpen(!0),
                                                  f.getState().setFormOpenFromUserAction(),
                                                  m.trim().length > 0 && (f.getState().setBodyFocused(!0), a?.focus()))
                                                : c ||
                                                  !(m.length > 0) ||
                                                  null != o ||
                                                  r ||
                                                  tc.A.updateForumSearchQuery(t.id, m));
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
                                  className: ic.DD,
                                  ref: n,
                              }),
                              null != b ? (0, i.jsx)(nL.U, { error: b }) : null,
                          ],
                      }),
                c
                    ? null
                    : (0, i.jsxs)(tW.B, {
                          direction: "horizontal",
                          gap: 8,
                          justify: "end",
                          fullWidth: !1,
                          children: [
                              (0, i.jsx)(ix, { parentChannel: t }),
                              t.isGameInvitesChannel() ? null : (0, i.jsx)(ib, { parentChannel: t, canCreatePost: l }),
                          ],
                      }),
            ],
        });
    });
function ix(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, ep.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, d.x),
        l = (0, ep.ST)();
    return null != t.topic && 0 !== t.topic.length
        ? (0, i.jsx)(Y.m, {
              text: eq.intl.string(eq.t["4d4T4l"]),
              children: (0, i.jsx)(nP.K, {
                  size: "sm",
                  variant: "secondary",
                  onClick: () => {
                      l.getState().setGuidelinesOpen(!n);
                  },
                  icon: nT.B,
                  "aria-label": eq.intl.string(eq.t["4d4T4l"]),
              }),
          })
        : null;
}
let ig = s.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            l = new lP.Ay({ channel_id: t.id, content: n }),
            { content: s } = (0, lk.A)(l, {
                hideSimpleEmbedContent: !0,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0,
            }),
            a = (0, lM.A)({ message: l, channel: t, compact: !1 }, s, !1);
        return (0, i.jsx)("div", { className: r()(ic.SL, ic.ly), children: a });
    }),
    ij = s.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: l = !1, editorRef: a, setEditorRef: o } = e,
            c = (0, g.bG)([eG.default], () => eG.default.getCurrentUser());
        $()(null != c, "current user cannot be null");
        let {
                messageError: u,
                previewing: m,
                textAreaState: h,
                bodyFocused: x,
                formOpen: f,
            } = (0, ep.kU)((e) => {
                let { messageError: t, textAreaState: n, previewing: l, bodyFocused: i, formOpen: s } = e;
                return { messageError: t, textAreaState: n, previewing: l, bodyFocused: i, formOpen: s };
            }, d.x),
            j = (0, ep.ST)();
        s.useEffect(() => () => (0, tx._4)({ guildId: t.guild_id, channelId: t.id }), [t.guild_id, t.id]);
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
        (0, tr.Vo)({ event: eW.jej.TEXTAREA_FOCUS, handler: p }),
            (0, tr.Vo)({ event: eW.jej.TEXTAREA_BLUR, handler: v });
        let N = lH(u, { content: h.textValue });
        return (0, i.jsx)("div", {
            className: ic.IP,
            children: (0, i.jsxs)("div", {
                className: ic.hQ,
                children: [
                    m
                        ? (0, i.jsx)(ig, { parentChannel: t, textValue: h.textValue })
                        : (0, i.jsx)("div", {
                              onClick: p,
                              children: (0, i.jsx)(nK.Ay, {
                                  type: id,
                                  setEditorRef: o,
                                  channel: t,
                                  placeholder: eq.intl.string(eq.t["8IPnv1"]),
                                  textValue: h.textValue,
                                  richValue: h.richValue,
                                  focused: x,
                                  className: ic.gM,
                                  innerClassName: r()(ic.SL, { [ic.cr]: null != N }),
                                  onChange: A,
                                  onSubmit: C,
                                  promptToUpload: n3.R,
                                  disabled: l,
                                  onKeyDown: (e) => {
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
                    (0, i.jsx)(nL.U, { error: N }),
                ],
            }),
        });
    });
function ip() {
    return (0, i.jsx)("div", {
        className: ic.fv,
        children: (0, i.jsx)(b.E, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: eq.intl.string(eq.t["WE/cYo"]),
        }),
    });
}
function iv(e) {
    let { textAreaState: t } = (0, ep.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        n = (0, g.yK)([ta.A], () => ta.A.getUploads(e.id, tl.C.FirstThreadMessage));
    return s.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n]);
}
function iA(e) {
    let t = iv(e),
        { appliedTags: n, name: l } = (0, ep.kU)((e) => {
            let { appliedTags: t, name: n } = e;
            return { appliedTags: t, name: n };
        }, d.x);
    return s.useMemo(() => e.hasFlag(io.lx.REQUIRE_TAG) && 0 === n.size && l.length > 0 && t, [n, l, e, t]);
}
function iC() {
    let { previewing: e } = (0, ep.kU)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, d.x),
        t = (0, ep.ST)(),
        n = s.useCallback(() => {
            t.getState().setPreviewing(!e), (0, tx.Q_)();
        }, [e, t]),
        l = e ? eq.intl.string(eq.t.ojM1xJ) : eq.intl.string(eq.t.SKNnqq);
    return (0, i.jsx)(Y.m, {
        text: l,
        children: (0, i.jsx)(nP.K, {
            variant: "secondary",
            size: "sm",
            onClick: n,
            icon: e ? nO.G : nF.b,
            "aria-label": l,
        }),
    });
}
let iN = s.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: l } = e,
        { textAreaState: a, name: r } = (0, ep.kU)((e) => {
            let { textAreaState: t, name: n } = e;
            return { textAreaState: t, name: n };
        }, d.x),
        { rateLimitPerUser: o } = t,
        c = o > 0,
        u = (0, g.bG)([lO.A], () => lO.A.getSlowmodeCooldownGuess(t.id, lO.R.CreateThread)),
        m = (0, nX._i)(t, lO.R.CreateThread),
        h = iA(t),
        x = (0, ep.ST)(),
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
                (0, i.jsx)(iE, { parentChannel: t }),
                (0, i.jsx)("div", { className: ic.XJ }),
                (0, i.jsxs)("div", {
                    className: ic.gO,
                    children: [
                        (0, i.jsxs)("div", {
                            className: ic.ne,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: ic.Kk,
                                    children: [
                                        (0, i.jsx)(nY.A, { type: id, textValue: a.textValue, className: ic.Dq }),
                                        c &&
                                            (0, i.jsx)(ii, {
                                                rateLimitPerUser: o,
                                                slowmodeCooldownGuess: u,
                                                isBypassSlowmode: m,
                                                leadingIcon: !0,
                                            }),
                                    ],
                                }),
                                (0, i.jsx)(ix, { parentChannel: t }),
                                j && (0, i.jsx)(iC, {}),
                                (0, i.jsx)(ib, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: c && !m && u > 0,
                                }),
                            ],
                        }),
                        (0, i.jsx)(nq, { type: id, className: ic.n1, onClick: f, channel: t }, "expression"),
                    ],
                }),
                h &&
                    (0, i.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-feedback-critical",
                        className: ic.ku,
                        children: eq.intl.string(eq.t.xPfNQi),
                    }),
            ],
        })
    );
});
function ib(e) {
    let { parentChannel: t, canCreatePost: n, disabled: l, disableIfInvalid: s = !1 } = e,
        a = (0, V.V)(t),
        {
            submitting: r,
            name: o,
            formOpen: c,
        } = (0, ep.kU)((e) => {
            let { submitting: t, name: n, formOpen: l } = e;
            return { submitting: t, name: n, formOpen: l };
        }, d.x),
        u = iv(t),
        m = !iA(t) && u && o.trim().length > 0;
    return __OVERLAY__ || a
        ? null
        : (0, i.jsx)(E.$, {
              variant: "primary",
              type: "submit",
              size: "sm",
              loading: r,
              disabled: (s && !m) || l || !n,
              icon: el.o,
              text: c ? eq.intl.string(eq.t.pIuQI6) : eq.intl.string(eq.t.TyAuoT),
          });
}
function iS() {
    return Promise.resolve();
}
function iE(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: l,
            setPopoutOpen: a,
        } = (0, ep.kU)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: l } = e;
            return { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: l };
        }, d.x),
        o = n.size >= 5,
        c = (0, m.Ay)({
            id: `${t.id}-post-form-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: iS,
            scrollToEnd: iS,
            orientation: h.Gl.HORIZONTAL,
        }),
        { containerRef: x, containerWidth: g } = ir(),
        f = s.useRef(null),
        j = s.useRef(null),
        [p, v] = s.useState(!0),
        A = (0, eh.OT)(t),
        [C, N] = s.useState(0);
    return (s.useLayoutEffect(() => {
        let e = f.current,
            t = e?.children?.[0],
            n = null == e || null == t || t.clientHeight > e.clientHeight;
        if ((n !== p && v(n), n && null != x.current && null != t && null != t.children)) {
            let { left: e, top: n } = x.current.getBoundingClientRect(),
                l = 0;
            for (let i of t.children) {
                let { right: t, top: s, height: a } = i.getBoundingClientRect();
                if (s - n > a) break;
                t - e > l && (l = t - e);
            }
            N(l);
        }
    }, [A, p, x, g]),
    0 === A.length)
        ? null
        : (0, i.jsxs)("div", {
              className: ic.Pc,
              ref: x,
              children: [
                  (0, i.jsx)(nG.g, { size: "xs", color: "currentColor", className: ic.HZ }),
                  (0, i.jsx)("div", {
                      className: ic.kU,
                      ref: f,
                      children: (0, i.jsx)(u.hD, {
                          navigator: c,
                          children: (0, i.jsx)(u.PR, {
                              children: (e) => {
                                  let { ref: t, ...s } = e;
                                  return (0, i.jsx)("div", {
                                      className: ic.j5,
                                      ref: t,
                                      ...s,
                                      children: A.map((e) =>
                                          (0, i.jsx)(
                                              ie.A,
                                              {
                                                  ariaLabel: eq.intl.formatToPlainString(eq.t.FSZVIR, {
                                                      tagName: e.name,
                                                  }),
                                                  tag: e,
                                                  onClick: o && !n.has(e.id) ? void 0 : () => l(e.id),
                                                  disabled: !n.has(e.id) && n.size >= 5,
                                                  selected: n.has(e.id),
                                                  size: ie.A.Sizes.SMALL,
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
                      (0, i.jsx)(I.Y, {
                          targetElementRef: j,
                          onRequestOpen: () => a(!0),
                          onRequestClose: () => a(!1),
                          renderPopout: (e) => {
                              let { closePopout: s } = e;
                              return (0, i.jsx)(l9, {
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
                                  className: ic.Wk,
                                  style: { left: C },
                                  children: (0, i.jsx)(E.$, {
                                      ...e,
                                      size: "sm",
                                      variant: "secondary",
                                      icon: k.a,
                                      iconPosition: "end",
                                      text: eq.intl.string(eq.t.w6T0Yc),
                                  }),
                              }),
                      }),
                  (0, i.jsx)("div", {
                      className: r()(ic.Wk, ic.Dz),
                      children: (0, i.jsx)(E.$, {
                          size: "sm",
                          variant: "secondary",
                          icon: k.a,
                          iconPosition: "end",
                          text: eq.intl.string(eq.t.w6T0Yc),
                      }),
                  }),
              ],
          });
}
var iy = n(602137),
    iT = n(782134),
    iI = n(391242),
    iR = n(191023),
    ik = n(234914),
    iM = n(930125),
    i_ = n(282108),
    iw = n(291812),
    iD = n(994500),
    iL = n(706411),
    iP = n(84120),
    iO = n(773746),
    iF = n(627363),
    iG = n(140651),
    iU = n(290863),
    iz = n(976359);
function iH(e) {
    let { channel: t, className: n } = e,
        l = t.ownerId,
        s = t.guild_id,
        a = (0, g.bG)([tF.A], () => (null == s ? null : tF.A.getGuild(s)?.gameApplicationIds?.[0]), [s]),
        { data: o } = (0, iF.YY)(a),
        c = (0, g.bG)([iU.A], () => (null == l || null == a ? null : iU.A.getApplicationActivity(l, a)), [l, a]),
        d = (0, iP.em)({ presenceActivity: c, channel: t, activityActionType: void 0 }),
        { primaryColor: u, secondaryColor: m } = (0, iG.A)(o?.getIconURL(128)),
        h = `linear-gradient(45deg, ${u}, ${m})`;
    if (null == c) return null;
    let x = c.details ?? c.name;
    return (0, i.jsxs)("div", {
        className: r()(n, iz.Nr),
        style: { background: h },
        children: [
            (0, i.jsx)(b.E, { variant: "text-sm/semibold", color: "always-white", className: iz.DD, children: x }),
            (0, i.jsxs)("div", {
                className: iz.yu,
                children: [
                    (0, i.jsx)("div", { className: iz.Hg, children: d }),
                    (0, i.jsx)(iO.V, { className: iz.$B, activity: c }),
                ],
            }),
        ],
    });
}
var iB = n(461771),
    iV = n(602034);
let iW = "data-grid-item-id",
    i$ = "data-grid-section",
    iq = "data-grid-prev-section-boundary",
    iK = new Set([h.D$.UP, h.D$.DOWN, h.D$.LEFT, h.D$.RIGHT]);
function iY(e) {
    let { section: t, column: n, row: l } = e,
        i = `[${i$}="${t}"]`,
        s = `[aria-colindex="${n}"]`,
        a = `[aria-rowindex="${l}"]`;
    return `${i}${s}${a}`;
}
let iX = { id: "NO_LIST", onKeyDown() {}, ref: s.createRef() },
    iQ = s.createContext({ id: "NO_LIST", setFocus() {} }),
    iJ = s.createContext(iX);
function iZ(e) {
    let { id: t, section: n, row: l, column: i, boundaries: a } = e,
        [r, o] = s.useState(0 === l && 0 === i ? 0 : -1),
        { id: c, setFocus: d } = s.useContext(iQ),
        u = s.useCallback(() => d(t), [t, d]);
    return (
        s.useLayoutEffect(
            () =>
                (0, iB.e)(c, (e) => {
                    o(e === t ? 0 : -1);
                }),
            [t, c],
        ),
        {
            [iW]: (0, iV.t$)(c, t),
            [i$]: n,
            [iq]: a[n],
            role: "gridcell",
            "aria-rowindex": l,
            "aria-colindex": i,
            tabIndex: r,
            onFocus: u,
        }
    );
}
function i0(e) {
    let { children: t, navigator: n } = e,
        {
            id: l,
            setFocus: a,
            containerProps: { onKeyDown: r, ref: o },
        } = n,
        c = s.useMemo(() => ({ id: l, setFocus: a }), [l, a]),
        d = s.useMemo(() => ({ onKeyDown: r, ref: o, id: l }), [r, o, l]);
    return (0, i.jsx)(iJ.Provider, { value: d, children: (0, i.jsx)(iQ.Provider, { value: c, children: t }) });
}
var i1 = n(639123);
function i2(e) {
    let { message: t, channel: n, containerWidth: l } = e,
        s = sn({ message: t, channel: n, containerWidth: l - 32, hideTags: !0 }),
        { hasUnreads: a } = (0, eh.X5)(n),
        { content: r } = (0, eh.gk)({ firstMessage: t, formatInline: !1, noStyleAndInteraction: !0, hasUnreads: a });
    return null != s ? s : (0, i.jsx)(iw.Ay, { message: t, content: r, className: i1.BK, compact: !1 });
}
function i4(e) {
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
        x = (0, g.bG)([eD.Ay], () => eD.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: f } = (0, ex.OA)(n),
        { user: j, author: p } = (0, eh.kn)(n),
        v = (0, P.Ay)(n),
        { messageCountText: A } = (0, eh.k6)(n),
        C = s.useRef(null),
        { handleLeftClick: N, handleRightClick: E } = (0, eC.A)({ facepileRef: C, goToThread: l, channel: n });
    s.useEffect(() => {
        u?.(h.current?.ref, m);
    }, [u, m]);
    let y = (0, eh.Mw)(n, iy.T.CREATION_DATE, ng.EG.POSTED_DURATION_AGO),
        { shouldRenderTagsRow: T } = (0, ev.BA)({ channel: n, isNew: !1 }),
        { onFocus: I, ...R } = iZ({ id: t, row: o.row, column: o.column, section: o.section, boundaries: c }),
        k = p?.nick ?? j?.username ?? "",
        M = j?.getAvatarURL(n.guild_id, (0, J.FT)(J._3.SIZE_24));
    return (0, i.jsxs)(S.D, {
        ref: h,
        tag: "li",
        onClick: N,
        onFocus: I,
        onContextMenu: E,
        className: r()(i1.kL, d, { [i1.nT]: x }),
        "aria-label": eq.intl.formatToPlainString(eq.t.pgYN6c, { title: v ?? "", count: A }),
        style: { ...a },
        ...R,
        children: [
            (0, i.jsxs)("div", {
                className: i1.wx,
                children: [
                    (0, i.jsx)(Q.eu, { src: M, size: J._3.SIZE_24, className: i1.my, "aria-label": k }),
                    (0, i.jsx)(b.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: i1.fh,
                        children: k,
                    }),
                    (0, i.jsx)(b.E, { variant: "text-xs/medium", color: "text-subtle", className: i1.vE, children: y }),
                ],
            }),
            (0, i.jsxs)(X.M, {
                className: i1.rf,
                children: [
                    null != f ? (0, i.jsx)(i2, { message: f, channel: n, containerWidth: a.width }) : null,
                    (0, i.jsxs)("div", {
                        className: i1.oO,
                        children: [
                            T
                                ? (0, i.jsx)("div", { className: i1.GA, children: (0, i.jsx)(ev.Ay, { channel: n }) })
                                : null,
                            (0, i.jsx)(iH, { channel: n }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(X.M, {
                className: i1.qr,
                children: (0, i.jsx)(ss, { channel: n, firstMessage: f, facepileRef: C }),
            }),
        ],
    });
}
var i3 =
    (((l = {})[(l.THREE_BY_TWO = 2 / 3)] = "THREE_BY_TWO"), (l[(l.SIXTEEN_BY_NINE = 9 / 16)] = "SIXTEEN_BY_NINE"), l);
let i7 = { columns: 1, columnWidth: 450 },
    i8 = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i3.THREE_BY_TWO,
            n = e - 2,
            l = Math.ceil(n * t);
        return [n, l];
    },
    i5 = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i3.THREE_BY_TWO;
        return 60 + i8(e - 24, t)[1] + 24 + 36;
    };
var i6 = n(313880),
    i9 = n(15175);
let se = s.memo(function (e) {
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
        u = (0, g.bG)([eL.A], () => eL.A.getChannel(n)),
        m = (0, iL.YG)(u);
    return null == u
        ? null
        : m
          ? (0, i.jsx)(i4, {
                id: t,
                channel: u,
                goToThread: l,
                className: a,
                coords: r,
                gridCoords: o,
                observePostVisibilityAnalytics: d,
                gridSectionBoundaries: c,
            })
          : (0, i.jsx)(st, {
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
function st(e) {
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
        f = (0, g.bG)([eD.Ay], () => eD.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: v, loaded: A } = (0, ex.OA)(n),
        C = (0, P.Ay)(n),
        { messageCountText: N } = (0, eh.k6)(n),
        { isNew: E, hasUnreads: y } = (0, eh.X5)(n),
        T = s.useRef(null),
        { handleLeftClick: I, handleRightClick: R } = (0, eC.A)({ facepileRef: T, goToThread: l, channel: n });
    s.useEffect(() => {
        m?.(x.current, h);
    }, [m, h]);
    let k = (0, eh.Mw)(n, iy.T.CREATION_DATE, ng.EG.POSTED_DURATION_AGO),
        M = (0, tK.hf)(n),
        { onFocus: _, ...w } = iZ({ id: t, row: d.row, column: d.column, section: d.section, boundaries: u });
    return (0, i.jsxs)("li", {
        ref: x,
        onClick: I,
        onFocus: _,
        onContextMenu: R,
        className: r()(i9.kL, o, { [i9.nT]: f }),
        style: { ...c },
        children: [
            (0, i.jsx)(S.D, {
                onClick: I,
                focusProps: { ringTarget: x },
                onContextMenu: R,
                "aria-label": eq.intl.formatToPlainString(eq.t.pgYN6c, { title: C ?? "", count: N }),
                className: i9.Kv,
                ...w,
            }),
            (0, i.jsxs)("div", {
                className: i9.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: i9.Y6,
                        children: [
                            (0, i.jsxs)("div", {
                                className: i9.wO,
                                children: [
                                    (0, i.jsx)(i6.A, { channel: n, message: v }),
                                    (0, i.jsx)(b.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        className: i9.SD,
                                        children: k,
                                    }),
                                ],
                            }),
                            E
                                ? (0, i.jsx)(ee.Lp, {
                                      className: i9.Ad,
                                      color: et.A.unsafe_rawColors.BRAND_260.css,
                                      text: eq.intl.string(eq.t.y2b7CA),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(p.F, {
                        children: (0, i.jsx)(j.D, {
                            variant: "heading-md/extrabold",
                            className: i9.DD,
                            color: y ? "text-strong" : "text-muted",
                            style: { width: `${c.width - 24}px` },
                            children: M,
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: i9.PU,
                children: (0, i.jsx)(X.M, {
                    children: (0, i.jsx)(sl, {
                        channel: n,
                        firstMessage: v,
                        isFirstMessageLoaded: A,
                        overrideMedia: a,
                        coords: c,
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: i9.qr,
                children: (0, i.jsx)(X.M, {
                    children: (0, i.jsx)(ss, { channel: n, firstMessage: v, facepileRef: T }),
                }),
            }),
        ],
    });
}
function sn(e) {
    let { message: t, channel: n, containerWidth: l, hideTags: s = !1 } = e,
        { isBlocked: a, isIgnored: r } = (0, g.cf)([iD.A], () => ({
            isBlocked: null != t && iD.A.isBlockedForMessage(t),
            isIgnored: null != t && iD.A.isIgnoredForMessage(t),
        }));
    return a
        ? (0, i.jsx)(su, { message: eq.intl.string(eq.t.Lkp2fB), containerWidth: l, channel: n, hideTags: s })
        : r
          ? (0, i.jsx)(su, { message: eq.intl.string(eq.t.yWK7ZM), containerWidth: l, channel: n, hideTags: s })
          : null;
}
function sl(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a } = e,
        r = sn({ message: n, channel: t, containerWidth: a.width });
    return null != r
        ? r
        : (0, i.jsx)(si, { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a });
}
function si(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a } = e,
        r = (0, g.bG)([eL.A], () => eL.A.getChannel(t.parent_id)),
        { firstMedia: o } = (0, eh.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !1 }),
        { hasUnreads: c } = (0, eh.X5)(t),
        d = (0, g.bG)([eO.A], () => eO.A.can(eW.xBc.MANAGE_MESSAGES, t)),
        u = ew.kt.useSetting(),
        m = ew.gs.useSetting(),
        h = (0, ey.A)(m, d),
        x = (0, eg.no)(n, r, !1),
        f = t.isMediaPost(),
        [j, p] = i8(a.width - 24, f ? i3.SIXTEEN_BY_NINE : i3.THREE_BY_TWO);
    return n?.blocked || null == (s ?? o)
        ? (0, i.jsx)(sd, {
              channel: t,
              firstMessage: n,
              isFirstMessageLoaded: l,
              containerWidth: a.width,
              hasUnreads: c,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(so, {
                      mediaAttachments: x,
                      globalSpoilerRenderSetting: h,
                      containerWidth: j,
                      containerHeight: p,
                      canAutoPlay: u,
                      shouldMaintainAspectRatio: f,
                  }),
                  (0, i.jsx)("div", {
                      className: i9.GA,
                      children: (0, i.jsx)(ev.Ay, { channel: t, tagsClassName: i9.uU }),
                  }),
              ],
          });
}
function ss(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        s = (0, ed.m)(t.id),
        a = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: i9.GD,
        children: [
            (0, i.jsxs)("div", {
                className: i9.QW,
                children: [
                    (0, i.jsx)("div", {
                        className: i9.mz,
                        children: (0, i.jsx)(tK.$k, { channel: t, iconSize: 16, showReadState: !0 }),
                    }),
                    s.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("span", { className: i9.xE, children: "\u2022" }),
                                  (0, i.jsxs)("div", {
                                      className: i9.IW,
                                      children: [
                                          (0, i.jsx)(tK.gL, { channel: t, userIds: s, facepileRef: n }),
                                          (0, i.jsx)("div", {
                                              className: i9.r$,
                                              children: (0, i.jsx)(en.n, { themed: !0, dotRadius: 2 }),
                                          }),
                                          (0, i.jsx)(es.Ay, { channel: t, className: i9.mD, renderDots: !1 }),
                                      ],
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: i9.QW,
                children: [
                    a || null == l ? null : (0, i.jsx)(tK.NA, { firstMessage: l, channel: t }),
                    null == l ? null : (0, i.jsx)(tK.cn, { firstMessage: l, channel: t }),
                ],
            }),
        ],
    });
}
let sa = (e) => e.preventDefault(),
    sr = s.memo(function (e) {
        return (0, i.jsx)(i.Fragment, {
            children: (0, eR.LL)({ ...e, analyticsSource: "ForumPostMediaPreviewImage" }),
        });
    }),
    so = s.memo(function (e) {
        let {
                mediaAttachments: t,
                globalSpoilerRenderSetting: n,
                containerWidth: l,
                containerHeight: a,
                canAutoPlay: o,
                shouldMaintainAspectRatio: c = !1,
            } = e,
            { containsVideo: d, containsGif: u } = s.useMemo(() => (0, eg.$2)(t), [t]),
            m = s.useMemo(() => t.slice(0, 4), [t]),
            h = lj({ numAttachments: m.length, containerWidth: l, containerHeight: a }),
            x = (function (e) {
                let { imageContainerStyles: t, containerWidth: n, containerHeight: l } = e,
                    i = s.useRef(lp(t)),
                    a = s.useRef(n),
                    r = s.useRef(l),
                    o = n > a.current + 100,
                    c = l > r.current + 100;
                return (o || c) && (i.current = lp(t)), i.current;
            })({ imageContainerStyles: h, containerWidth: l, containerHeight: a }),
            g = (0, i_.O8)(iM.v.GUILD),
            f = s.useMemo(
                () =>
                    m.map((e, t) => {
                        let [l, s] = (0, eS.K6)(e, !n, g),
                            a = (0, eS.rx)(s),
                            m = {
                                ...x[t],
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && l ? a : e.alt,
                                onClick: sa,
                                shouldRenderAccessory: !u && !d,
                            },
                            f = (0, eb.ge)(e.src) ? `${e.src}?format=png` : e.src,
                            j = o && !l ? e.src : f;
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: i9.UV,
                                style: h[t],
                                children: [
                                    c
                                        ? (0, i.jsx)(ik.A, {
                                              ...m,
                                              src: j,
                                              backgroundSrc: f,
                                              aspectRatio: m.maxWidth / m.maxHeight,
                                              alt: m.alt ?? "",
                                              className: r()(i9.EN, { [i9.cd]: l }),
                                              imageChildClassName: i9.Rp,
                                          })
                                        : e.src.startsWith("data:")
                                          ? (0, i.jsx)(ei._, {
                                                ...m,
                                                className: i9.il,
                                                imageClassName: r()(i9.LW, { [i9.cd]: l }),
                                            })
                                          : (0, i.jsx)(sr, {
                                                ...m,
                                                autoPlay: o && !l,
                                                containerClassName: i9.EK,
                                                imageClassName: r()(i9.rp, { [i9.cd]: l }),
                                                responsive: !0,
                                            }),
                                    l &&
                                        (0, i.jsx)("div", {
                                            className: i9.X,
                                            children: (0, i.jsx)(ej.A, { obscureReason: s, iconClassname: i9.yo }),
                                        }),
                                ],
                            },
                            e.src,
                        );
                    }),
                [o, u, d, n, h, x, m, c, g],
            );
        return (0, i.jsxs)("div", {
            className: i9.pV,
            style: { width: l, height: a },
            children: [
                f,
                (u || d) &&
                    (0, i.jsxs)("div", {
                        className: i9.vz,
                        children: [
                            d &&
                                (0, i.jsx)(iT.u, {
                                    color: "currentColor",
                                    size: "custom",
                                    width: 22,
                                    height: 22,
                                    className: i9.cU,
                                }),
                            u &&
                                (0, i.jsx)(iI.O, {
                                    size: "custom",
                                    width: 29,
                                    height: 29,
                                    color: "currentColor",
                                    className: i9.cU,
                                }),
                        ],
                    }),
                t.length > 4 &&
                    (0, i.jsx)(sc, {
                        text: (t.length - 4).toString(),
                        icon: iR.x,
                        pillClassName: i9.v3,
                        iconClassName: i9.In,
                        textClassName: i9.EY,
                    }),
            ],
        });
    });
function sc(e) {
    let { text: t, icon: n, pillClassName: l, iconClassName: s, textClassName: a } = e;
    return (0, i.jsxs)("div", {
        className: l,
        children: [
            (0, i.jsx)(n, { className: s, color: "currentColor" }),
            (0, i.jsxs)(b.E, { variant: "text-xs/medium", className: a, children: ["+", t] }),
        ],
    });
}
function sd(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, containerWidth: a, hasUnreads: o } = e,
        c = ew.hH.useSetting(),
        [d, u] = i8(a - 24),
        { content: m } = (0, eh.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !0 }),
        { shouldRenderTagsRow: h } = (0, ev.BA)({ channel: t, isNew: !1 }),
        x = s.useMemo(() => ({ width: d, height: u }), [d, u]),
        g = o ? i9.kR : i9.b8;
    return (0, i.jsxs)("div", {
        className: i9.Cv,
        style: x,
        children: [
            (0, i.jsxs)("div", {
                className: i9.Qs,
                children: [
                    l &&
                        null == n &&
                        (0, i.jsx)(b.E, {
                            variant: "text-sm/normal",
                            color: o ? "text-default" : "text-muted",
                            children: eq.intl.string(eq.t.mE3KJN),
                        }),
                    l && null != n && (0, i.jsx)(iw.Ay, { message: n, content: m, className: g, compact: c }),
                ],
            }),
            (0, i.jsx)("div", {
                className: r()(i9.kh, { [i9.ZH]: !h }),
                children: h ? (0, i.jsx)(ev.Ay, { channel: t, tagsClassName: i9.uU }) : null,
            }),
        ],
    });
}
function su(e) {
    let { message: t, containerWidth: n, channel: l, hideTags: a = !1 } = e,
        [o, c] = i8(n - 24),
        { shouldRenderTagsRow: d } = (0, ev.BA)({ channel: l, isNew: !1 }),
        u = s.useMemo(() => ({ width: o, height: c }), [o, c]);
    return (0, i.jsxs)("div", {
        className: i9.Cv,
        style: u,
        children: [
            (0, i.jsx)("div", {
                className: i9.Qs,
                children: (0, i.jsx)(b.E, {
                    className: i9.Wv,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: t,
                }),
            }),
            (0, i.jsx)("div", {
                className: r()(i9.kh, { [i9.ZH]: !d }),
                children: d && !a ? (0, i.jsx)(ev.Ay, { channel: l, tagsClassName: i9.uU }) : null,
            }),
        ],
    });
}
var sm = n(392421),
    sh = n(980707),
    sx = n(477782),
    sg = n(901713);
function sf(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: l, layoutType: s, tagSetting: a } = (0, em.R)(t.id),
        { showResolvedFlags: r, setShowResolvedFlags: o } = (0, H.T)(t.id),
        c = (0, em.p)(),
        d = t.isMediaChannel(),
        u = (e) => {
            (0, tx.Cd)({ guildId: t.guild_id, channelId: t.id, sortOrder: e }), c.getState().setSortOrder(t.id, e), n();
        },
        m = (e) => {
            (0, tx.ad)({ guildId: t.guild_id, channelId: t.id, forumLayout: e }),
                c.getState().setLayoutType(t.id, e),
                n();
        },
        h = (e) => {
            c.getState().setTagSetting(t.id, e), n();
        },
        g = null != t.availableTags && t.availableTags.length > 0;
    return (0, i.jsx)("div", {
        className: sg.k,
        children: (0, i.jsxs)(sh.W, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": d ? eq.intl.string(eq.t["kQN/bi"]) : eq.intl.string(eq.t.DJzbkL),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, i.jsxs)(sx.rX, {
                    label: eq.intl.string(eq.t.f8wNDl),
                    children: [
                        (0, i.jsx)(sx.iD, {
                            id: "sort-by-recent-activity",
                            group: "sort-by",
                            label: eq.intl.string(eq.t.jOPmcI),
                            action: () => u(iy.T.LATEST_ACTIVITY),
                            checked: l === iy.T.LATEST_ACTIVITY,
                        }),
                        (0, i.jsx)(sx.iD, {
                            id: "sort-by-date-posted",
                            group: "sort-by",
                            label: eq.intl.string(eq.t.UIltXd),
                            action: () => u(iy.T.CREATION_DATE),
                            checked: l === iy.T.CREATION_DATE,
                        }),
                    ],
                }),
                t.isModeratorReportChannel() &&
                    (0, i.jsx)(sx.rX, {
                        label: eq.intl.string(tX.default.PsM2b4),
                        children: (0, i.jsx)(sx.sL, {
                            id: "resolved-flags-none",
                            label: eq.intl.string(eq.t.XJuakA),
                            action: () => o(!r),
                            checked: r,
                        }),
                    }),
                t.isMediaChannel() || t.isModeratorReportChannel() || t.isGameInvitesChannel()
                    ? null
                    : (0, i.jsxs)(sx.rX, {
                          label: eq.intl.string(eq.t.mFMDSq),
                          children: [
                              (0, i.jsx)(sx.iD, {
                                  id: "view-as-list",
                                  group: "view-as",
                                  label: eq.intl.string(eq.t["NJFr+g"]),
                                  action: () => m(x.C.LIST),
                                  checked: s === x.C.LIST,
                              }),
                              (0, i.jsx)(sx.iD, {
                                  id: "view-as-grid",
                                  group: "view-as",
                                  label: eq.intl.string(eq.t.wKeggb),
                                  action: () => m(x.C.GRID),
                                  checked: s === x.C.GRID,
                              }),
                          ],
                      }),
                g
                    ? (0, i.jsxs)(sx.rX, {
                          label: eq.intl.string(eq.t.Paxaug),
                          children: [
                              (0, i.jsx)(sx.iD, {
                                  id: "match-some",
                                  group: "tag-setting",
                                  label: eq.intl.string(eq.t.rQ0ctQ),
                                  action: () => h(sm.n.MATCH_SOME),
                                  checked: a === sm.n.MATCH_SOME,
                              }),
                              (0, i.jsx)(sx.iD, {
                                  id: "match-all",
                                  group: "tag-setting",
                                  label: eq.intl.string(eq.t.FCXUu0),
                                  action: () => h(sm.n.MATCH_ALL),
                                  checked: a === sm.n.MATCH_ALL,
                              }),
                          ],
                      })
                    : null,
                (0, i.jsx)(sx.rX, {
                    children: (0, i.jsx)(sx.Dr, {
                        id: "reset-all",
                        label: eq.intl.string(eq.t["3b//lO"]),
                        action: () => {
                            u(t.getDefaultSortOrder()), m(t.getDefaultLayout()), h(t.getDefaultTagSetting());
                        },
                    }),
                }),
            ],
        }),
    });
}
var sj = n(123292);
function sp() {
    return Promise.resolve();
}
function sv(e) {
    let { channel: t, closePopout: n, setPopoutRef: l } = e,
        a = (0, eh.OT)(t),
        { tagFilter: r } = (0, em.R)(t.id),
        o = (0, em.p)(),
        c = (0, g.bG)([L.A], () => L.A.keyboardModeEnabled),
        d = s.useCallback(
            (e) => {
                (0, tx.UA)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    tagId: e,
                    filterTagIds: Array.from(r),
                    added: !r.has(e),
                    location: {
                        page: eW.liQ.GUILD_CHANNEL,
                        section: eW.JJy.FORUM_CHANNEL_HEADER,
                        object: eW.ZSU.CHANNEL_TAG,
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
            scrollToStart: sp,
            scrollToEnd: sp,
        }),
        f = s.useRef(null);
    return (
        s.useEffect(() => {
            requestAnimationFrame(() => {
                if (null != f.current) {
                    let e = f.current.querySelector(`.${l5.Tc}`);
                    null != e && e.focus();
                }
            });
        }, []),
        (0, i.jsxs)(l4.l, {
            ref: (e) => {
                l?.(e);
            },
            "aria-label": eq.intl.string(eq.t.TdqRTh),
            className: l5.kL,
            children: [
                (0, i.jsx)("div", {
                    className: l5.wx,
                    children: (0, i.jsxs)("div", {
                        className: l5.LD,
                        children: [
                            (0, i.jsx)(j.D, {
                                color: "interactive-text-default",
                                variant: "heading-md/semibold",
                                className: l5.TK,
                                children: eq.intl.string(eq.t.HPu3kq),
                            }),
                            (0, i.jsx)("div", {
                                className: l5.d1,
                                children: (0, i.jsx)(b.E, {
                                    className: l5.lT,
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
                                className: l5.I8,
                                children: a.map((e) =>
                                    (0, i.jsx)(
                                        ie.A,
                                        { className: l5.Tc, tag: e, selected: r.has(e.id), onClick: () => d(e.id) },
                                        e.id,
                                    ),
                                ),
                            });
                        },
                    }),
                }),
                (0, i.jsx)("div", { className: l5.me }),
                (0, i.jsx)(sj.Q, {
                    "aria-label": eq.intl.string(eq.t["98EPQP"]),
                    onClick: h,
                    text: eq.intl.string(eq.t["98EPQP"]),
                }),
            ],
        })
    );
}
var sA = n(37411);
function sC(e) {
    let { channel: t, guild: n, sidebarState: l } = e;
    return (0, i.jsx)(ep.Cp, { channel: t, children: (0, i.jsx)(sI, { channel: t, guild: n, sidebarState: l }) }, t.id);
}
let sN = new (class {
    minWidth;
    maxWidth;
    gap;
    constructor({ minWidth: e, maxWidth: t, gap: n }) {
        $()(e < t, "minWidth needs to be smaller than maxWidth"),
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
function sb(e) {
    return `forum-grid-header-section-${e}`;
}
function sS(e) {
    let { itemRole: t, coords: n, section: l } = e;
    return (0, i.jsx)(
        "div",
        {
            className: r()(tJ.card, tJ.archivedDividerRow, tJ.columnsSpan),
            style: n,
            "data-item-role": t,
            children: (0, i.jsx)("div", {
                className: tJ.emptyMainCard,
                children: (0, i.jsx)(j.D, {
                    variant: "eyebrow",
                    className: tJ.archivedDivider,
                    id: sb(l),
                    children: eq.intl.string(eq.t["3+LO1w"]),
                }),
            }),
        },
        "section-divider",
    );
}
function sE(e) {
    let { section: t, coords: n, key: l, isShowingSearchResult: s, hasActiveThreads: a } = e;
    return () =>
        2 === t && !s && a
            ? (0, i.jsx)(
                  sS,
                  { section: t, coords: null == n ? void 0 : { ...n, position: "absolute" }, itemRole: "section" },
                  l,
              )
            : null;
}
function sy(e, t) {
    return `card-${e}-${t}`;
}
function sT(e) {
    if ("string" == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function sI(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: l,
            editorAdditionRowHeight: a,
            listViewCardHeights: o,
            formOpen: c,
            name: f,
        } = (0, ep.kU)((e) => {
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
            searchResults: S,
            canLoadMore: E,
            loadMore: y,
            activeThreadsLoading: T,
            archivedThreadsLoading: I,
            loading: R,
            isSearchLoading: k,
            layoutType: M,
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: l, tagSetting: i } = (0, em.R)(e.id),
                s = (0, eh.V3)({ channel: e, sortOrder: t, tagFilter: n, tagSetting: i, shouldAutomaticallyAck: !0 }),
                a = (0, g.bG)([e9.A, G.A], () => {
                    let t = e9.A.hasLoaded(e.guild_id),
                        n = G.A.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: r, canLoadMore: o, loadMore: c, loading: d } = (0, te.Fr)(e, t, n, i),
                { searchResults: u, isSearchLoading: m } = (0, eh.cA)({ channelId: e.id });
            return (
                (0, eh.yz)(e, t, n, i),
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
        w = j.length > 0,
        P = w || b.length > 0,
        O = (0, U.A)(t),
        { tagFilter: F, tagSetting: V } = (0, em.R)(t.id);
    (0, eh.o7)(t, F, V, c),
        (0, D.Ay)(() => {
            !c && f.length > 0 && tc.A.updateForumSearchQuery(t.id, f);
        });
    let W = (0, eh.O3)(t),
        $ = (0, eh.An)(t),
        q = s.useRef(null),
        { observePostVisibilityAnalytics: K } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: l } = e;
            th({ guildId: t, channelId: n });
            let i = s.useRef(null),
                a = s.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let l = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, tm.xx)(e, t, l) : (0, tm.O_)(e, t, l);
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
                            null == e ? (0, tm.O_)(n, t, Date.now()) : i.current?.observe(e);
                        },
                        [n],
                    ),
                }
            );
        })({ scrollerRef: q, channelId: t.id, guildId: t.guild_id }),
        Y = M === x.C.GRID,
        { searchQuery: X } = (0, eh.cA)({ channelId: t.id }),
        Q = null != S && null != X && X.length > 0,
        J = s.useRef(null),
        { containerRef: Z, containerWidth: ee } = ir();
    s.useEffect(() => {
        if (null == J.current && null != t.id) {
            let e = eD.Ay.getSidebarState(t.id);
            null != e && e.type === e6.PE.VIEW_THREAD && (J.current = e.channelId);
        }
    }, [t.id]);
    let { columns: et } = s.useMemo(() => (Y ? sN.getRenderOptions(ee) : i7), [Y, ee]),
        en = s.useMemo(() => (R ? Math.round((window.innerHeight - 200) / 118) : 0), [R]),
        { showResolvedFlags: el } = (0, H.T)(t.id),
        ei = t.isModeratorReportChannel(),
        es = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / i5(sN.getWidth(ee))) * et;
            return T ? e : 0;
        }, [ee, et, T]),
        ea = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / i5(sN.getWidth(ee))) * et;
            return I ? e : 0;
        }, [ee, et, I]),
        er = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / i5(sN.getWidth(ee))) * et;
            return k && Q ? e : 0;
        }, [ee, et, k, Q]),
        eo = s.useMemo(() => {
            if (Y)
                if (!W && Q) return [1, 0];
                else if (!$) return [1, j.length + es, 0];
                else if (Q) return [1, S.length + er, 0];
                else if (ei && !el) return [1, j.length + es, 0];
                else return [1, j.length + es, b.length + ea];
            if (!W && Q) return [1, 1];
            if (!$) return [1, j.length, 1];
            if (Q) return [1, S.length, 0, en];
            if (ei && !el) return [1, j.length, 0, en];
            else return [1, j.length, b.length, en];
        }, [Y, Q, j.length, b.length, W, $, en, S, es, ea, er, el, ei]),
        ec = s.useMemo(
            () =>
                !W && Q
                    ? [[], []]
                    : $
                      ? Q
                          ? [[], S, [], []]
                          : ei && !el
                            ? [[], j, [], []]
                            : [[], j, b, []]
                      : [[], j, []],
            [Q, W, $, S, j, b, el, ei],
        ),
        ed = s.useCallback(
            (e, n) => {
                (0, tx.Ml)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: { page: eW.liQ.GUILD_CHANNEL, section: eW.JJy.FORUM_CHANNEL_POST },
                }),
                    n ? (0, e5.N9)(e, { source: sA.H9.BROWSER }) : ((J.current = e.id), (0, tn.JA)(e));
            },
            [t.guild_id, t.id, J],
        ),
        [eu, ex] = s.useState(l + a - 24),
        eg = s.useCallback(
            (e, n, l) =>
                0 === e
                    ? (0, i.jsx)(
                          sD,
                          {
                              channel: t,
                              isEmpty: !w,
                              isSearchLoading: k,
                              numResults: S?.length,
                              coords: n,
                              onHeightChange: ex,
                              children:
                                  !R && (0, i.jsx)(nE, { channel: t, hasAnyThread: P, hasActiveThreads: w }, t.id),
                          },
                          "forum-channel-header",
                      )
                    : 2 !== e || $
                      ? 1 === e && Q && !W
                          ? (0, i.jsx)(sk, { channel: t, coords: n }, "archive-or-search-result")
                          : l()
                      : (0, i.jsx)(sR, { channel: t, coords: n }, "archived-missing-reading-history-perm"),
            [Q, $, S, W, t, w, k, R, P],
        ),
        ef = (0, g.bG)([to.A], () => to.A.hasHidden(t.id)),
        ej = { editorHeight: l, isGridLayout: Y },
        ev = s.useRef(ej);
    s.useEffect(() => {
        ev.current = ej;
    }),
        s.useEffect(() => {
            let { editorHeight: e, isGridLayout: t } = ev.current,
                n = t ? eE : q,
                l = n.current?.getScrollerState();
            null != l && !ef && l.scrollTop > e && n.current?.scrollTo({ to: 0 });
        }, [ef]);
    let {
            updateListScrollerRef: eA,
            renderListSection: eC,
            renderListItem: eN,
            getListSectionHeight: eb,
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
                x = (0, g.bG)([ts.A], () => ts.A.getChannelId()),
                f = s.useCallback(
                    (e) => (n) => {
                        (t.current = n), (e.current = n?.getScrollerNode() ?? null);
                    },
                    [t],
                ),
                j = s.useCallback(
                    (e) => sE({ section: e.section, isShowingSearchResult: h, hasActiveThreads: n })(),
                    [n, h],
                ),
                v = s.useCallback(
                    (e) =>
                        d(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, i.jsx)(
                                          "div",
                                          {
                                              "data-item-role": "item",
                                              className: r()(tJ.loadingCard, tJ[`loadingCard-${e.row % 3}`]),
                                          },
                                          `loading-${e.row}`,
                                      );
                            let t = l[e.section][e.row],
                                n = null != x && (0, B.iU)(x) ? eQ : tK.Ay;
                            return (0, i.jsx)(
                                "li",
                                {
                                    className: tJ.card,
                                    "data-item-role": "item",
                                    children: (0, i.jsx)(p.F, {
                                        children: (0, i.jsx)(n, {
                                            className: tJ.mainCard,
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
                renderListItem: v,
                getListSectionHeight: s.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: A,
            };
        })({
            listRef: q,
            hasActiveThreads: w,
            threadIdsBySection: ec,
            listViewCardHeights: o,
            editorHeight: l,
            editorAdditionRowHeight: a,
            renderSectionOrItem: eg,
            goToThread: ed,
            observePostVisibilityAnalytics: K,
            isShowingSearchResult: Q,
        }),
        eE = s.useRef(null),
        {
            updateMasonryListScrollerRef: ey,
            getItemKey: eT,
            renderGridSection: eI,
            renderGridItem: eR,
            getGridSectionHeight: ek,
            getSectionProps: eM,
            handleGridFocus: e_,
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
                            (h.current = sT(n));
                    },
                    [t, h],
                ),
                p = s.useCallback(
                    (e) => {
                        let t = sT(e);
                        if (null == t) return;
                        let n = eL.A.getChannel(t);
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
                            return null == l ? sy(e, t) : sy(e, l);
                        }
                    },
                    [n],
                ),
                A = s.useCallback(
                    (e, t, n) =>
                        a(e, t, sE({ section: e, coords: t, key: n, isShowingSearchResult: c, hasActiveThreads: o })),
                    [a, o, c],
                ),
                C = s.useCallback((e) => (0 === e ? {} : { role: "grid", "aria-labelledby": `#${sb(e)}` }), []);
            return {
                updateMasonryListScrollerRef: f,
                masonryListContainerRef: g,
                focusedThreadId: h,
                handleGridFocus: j,
                handleGridSelect: p,
                getItemKey: v,
                renderGridSection: A,
                renderGridItem: s.useCallback(
                    (e, t, s, a, o) => {
                        if (0 === e) return null;
                        let c = n[e][t];
                        return null != c
                            ? (0, i.jsx)(
                                  se,
                                  {
                                      id: `${a}`,
                                      threadId: c,
                                      className: r()(tJ.card, tJ.mainCard),
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
                                        className: r()(tJ.loadingCard, tJ[`loadingCard-${t % 3}`]),
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
            masonryListScrollerRef: eE,
            threadIdsBySection: ec,
            goToThread: ed,
            renderSectionOrItem: eg,
            hasActiveThreads: w,
            isShowingSearchResult: Q,
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
            focusedThreadId: a,
            parentId: r,
        } = e;
        s.useEffect(() => {
            if (l) {
                let e = setTimeout(() => {
                    if (null == t.current || null == a.current) return;
                    let e = a.current;
                    if ("string" != typeof e) return;
                    null == eD.Ay.getSidebarState(r) && (a.current = null);
                    let n = i.findIndex((t) => t.find((t) => t === e)),
                        l = t.current.getCoordsMap(),
                        s = l[`__section__${n}`],
                        o = l[sy(n, e)];
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
        masonryListScrollerRef: eE,
        containerWidth: ee,
        isGridLayout: Y,
        threadIdsBySection: ec,
        parentId: t.id,
        focusedThreadId: J,
    });
    let ew = s.useCallback(() => {
            if (Q) return;
            let e = Y ? eE.current?.getScrollerState() : q.current?.getScrollerState();
            if (null == e) return;
            (0, tx.pO)({ guildId: t.guild_id, channelId: t.id });
            let n = e.scrollTop + e.offsetHeight;
            e.scrollHeight - n < (Y ? Math.max(200, i5(ee)) : 200) && y();
        }, [Q, Y, t.guild_id, t.id, ee, y]),
        eP = (0, g.bG)([L.A], () => L.A.keyboardModeEnabled),
        eO = (0, ep.kU)((e) => e.titleFocused || e.bodyFocused, d.x),
        eF = (function (e) {
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
                        let n = (0, iV.Mz)(e, iW),
                            l = (0, iV.HP)(e);
                        d(n, l), (0, iB.T)(t, l, !0);
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
                                null !== e && null == c((0, iV.Mz)(e, iW)) && u((0, iV.Mz)(t, "data-grid-id"));
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
                        let l = (0, iV.Mz)(t, iW),
                            s = n?.querySelector(l);
                        if (null == s) return;
                        let a = parseInt(s.getAttribute("data-grid-section") ?? ""),
                            d = parseInt(s.getAttribute("aria-rowindex")),
                            u = parseInt(s.getAttribute("aria-colindex"));
                        switch ((iK.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                            case h.D$.RIGHT: {
                                let e = c(iY({ section: a, row: d, column: u + 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(iW);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.LEFT: {
                                let e = c(iY({ section: a, row: d, column: u - 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(iW);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.DOWN: {
                                let e = c(iY({ section: a, row: d + 1, column: u }));
                                if ((null == e && (e = c(iY({ section: a + 1, row: 0, column: u }))), null != e)) {
                                    let t = e.getAttribute(iW);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.UP: {
                                let e;
                                if (0 === d) {
                                    let t = parseInt(s.getAttribute(iq));
                                    null == (e = c(iY({ section: a - 1, row: t, column: u }))) &&
                                        (e = c(iY({ section: a - 1, row: t - 1, column: u })));
                                } else e = c(iY({ section: a, row: d - 1, column: u }));
                                if (null != e) {
                                    let t = e.getAttribute(iW);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.SPACE:
                            case h.D$.ENTER: {
                                if (e.repeat) return;
                                let t = i.current;
                                if (null != t) {
                                    let n = c((0, iV.Mz)(t, iW)),
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
                        i.current = null != e ? (0, iV.t$)(t, e) : null;
                    },
                    [t],
                );
            return s.useMemo(() => ({ id: t, containerProps: { onKeyDown: j, ref: r }, setFocus: p }), [t, j, p]);
        })({ id: "forum-grid-view", isEnabled: Y && eP && !eO, setFocus: e_ }),
        eG = (function (e) {
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
        })({ listRef: q, padding: 96, isEnabled: !Y && eP && !eO, channel: t }),
        eU = s.useCallback(
            (e, n, l) =>
                0 === e
                    ? 0
                    : t.isGameInvitesChannel()
                      ? 280
                      : i5(l, t.isMediaChannel() ? i3.SIXTEEN_BY_NINE : i3.THREE_BY_TWO),
            [t],
        ),
        { ref: ez, ...eH } = eF.containerProps,
        eB = eD.Ay.getSidebarState(t.id),
        eV = null != eB && (0, eD.JU)(eB),
        e$ = (0, g.bG)([eD.Ay], () => eD.Ay.getSection(t.id)) === eW.YvQ.MEMBERS;
    return (0, i.jsx)("div", {
        className: tJ.container,
        ref: Z,
        "data-member-list-open": e$,
        children: (0, i.jsx)(v.sk, {
            children: (e) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        c &&
                            (0, i.jsx)(_.A, {
                                channel: t,
                                draftType: tl.C.FirstThreadMessage,
                                className: tJ.uploadArea,
                                style: { right: eV && n?.isThreadSidebarFloating ? n.threadSidebarWidth : 0 },
                            }),
                        (0, i.jsx)(sM, { channel: t }),
                        (0, i.jsx)(A.A, { children: (0, i.jsx)(p.H, { children: eq.intl.string(eq.t.B2panI) }) }),
                        O
                            ? (0, i.jsx)("div", {
                                  className: tJ.optInNotice,
                                  children: (0, i.jsx)(z.A, { channel: t }),
                              })
                            : null,
                        Y
                            ? (0, i.jsx)(i0, {
                                  navigator: eF,
                                  children: (0, i.jsx)(
                                      C.f,
                                      {
                                          ref: (e) => {
                                              (ez.current = e?.getScrollerNode() ?? null), ey(e);
                                          },
                                          itemGutter: 16,
                                          padding: 24,
                                          className: tJ.grid,
                                          columns: et,
                                          sections: eo,
                                          getItemKey: eT,
                                          getSectionHeight: ek,
                                          getItemHeight: eU,
                                          renderSection: eI,
                                          renderItem: eR,
                                          getSectionProps: eM,
                                          onScroll: E ? ew : void 0,
                                          chunkSize: 350,
                                          ...eH,
                                          ...e,
                                      },
                                      M,
                                  ),
                              })
                            : (0, i.jsx)(u.hD, {
                                  navigator: eG,
                                  children: (0, i.jsx)(u.PR, {
                                      children: (t) => {
                                          let { ref: n, ...l } = t;
                                          return (0, i.jsx)(
                                              N.Ei,
                                              {
                                                  ref: eA(n),
                                                  className: tJ.list,
                                                  sections: eo,
                                                  sectionHeight: eb,
                                                  rowHeight: eS,
                                                  renderRow: eN,
                                                  renderSection: eC,
                                                  chunkSize: 150,
                                                  onScroll: E ? ew : void 0,
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
function sR(e) {
    let { channel: t, coords: n } = e,
        l = (0, P.Ay)(t);
    return (0, i.jsx)("div", {
        className: r()(tJ.missingReadHistoryPermission, tJ.columnsSpan),
        style: n,
        children: (0, i.jsx)(b.E, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eq.intl.format(eq.t.TycmzM, { channelName: l }),
        }),
    });
}
function sk(e) {
    let { channel: t, coords: n } = e,
        l = (0, P.Ay)(t);
    return (0, i.jsx)("div", {
        className: r()(tJ.missingReadHistoryPermission, tJ.columnsSpan),
        style: n,
        children: (0, i.jsx)(b.E, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eq.intl.format(eq.t.OWZJdS, { channelName: l }),
        }),
    });
}
function sM(e) {
    let { channel: t } = e,
        n = s.useCallback(() => {
            tc.A.resort(t.id);
        }, [t]),
        l = (0, g.bG)([td.A], () => td.A.getNewThreadCount());
    return 0 === l
        ? null
        : (0, i.jsx)(S.D, {
              className: tJ.newPostsButton,
              onClick: n,
              children: (0, i.jsx)(b.E, {
                  color: "text-brand",
                  variant: "text-md/medium",
                  children: eq.intl.format(eq.t.ue1qfM, { count: l }),
              }),
          });
}
function s_() {
    return Promise.resolve();
}
function sw(e) {
    let { parentChannel: t, canCreatePost: n } = e,
        l = s.useCallback(() => {
            (0, tg.d)(t);
        }, [t]);
    return __OVERLAY__ || !n
        ? null
        : (0, i.jsx)(E.$, { variant: "primary", size: "md", text: eq.intl.string(eq.t.QwW8zd), onClick: l });
}
function sD(e) {
    let t,
        n,
        l,
        { channel: a, isEmpty: o, isSearchLoading: p, numResults: v, children: A, coords: C, onHeightChange: N } = e,
        {
            name: E,
            formOpen: M,
            titleFocused: _,
            hasClickedForm: D,
            textAreaState: P,
            onboardingExpanded: G,
            setEditorAdditionRowHeight: U,
        } = (0, ep.kU)((e) => {
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
        { tagFilter: z, layoutType: H } = (0, em.R)(a.id),
        W = (0, ep.ST)(),
        $ = (0, em.p)(),
        q = (0, g.bG)([ti.A], () => ti.A.canChatInGuild(a.guild_id)),
        K = (0, tt.AI)(a),
        [Y, X] = s.useState(K),
        [, Q] = (0, O.c)(a.getGuildId() ?? void 0),
        J = (0, V.V)(a),
        Z = q && (K || (Y && Q)) && !J;
    s.useEffect(() => {
        K && X(!0);
    }, [K]);
    let { ref: ee, height: et } = (0, w.Ay)();
    s.useEffect(() => {
        null != et && N(et);
    }, [N, et]);
    let en = s.useCallback(() => {
        c()(() => {
            null != ee.current && W.getState().setEditorHeight(ee.current.offsetHeight);
        });
    }, [ee, W]);
    s.useLayoutEffect(en, [en, o, Z, G]), (0, tr.Vo)({ event: eW.jej.REMEASURE_TARGET, handler: en });
    let el = (0, g.bG)([ta.A], () => ta.A.getUploads(a.id, tl.C.FirstThreadMessage)),
        ei = (0, eh.Hv)(a),
        es = s.useRef(null),
        ea = s.useRef(null),
        [er, eo] = s.useState(0),
        { width: ec } = (0, g.bG)([eU.A], () => eU.A.windowSize()),
        ed = es.current?.getBoundingClientRect()?.width,
        eu = s.useRef(null),
        ex = s.useRef(null);
    s.useLayoutEffect(() => {
        let e = ea.current,
            t = e?.children?.[0];
        if (null != es.current && null != t && null != t.children) {
            let { left: e, top: n } = es.current.getBoundingClientRect(),
                l = 0;
            for (let i of t.children) {
                let { right: t, top: s, height: a } = i.getBoundingClientRect();
                if (s - n > a) break;
                t - e > l && (l = t - e);
            }
            eo(l);
        }
    }, [a.availableTags, ec, ed, z]);
    let eg = E.length > 0 && !M && (p || null != v),
        ef =
            !__OVERLAY__ &&
            !D &&
            !M &&
            _ &&
            (0 === P.textValue.trim().length || P.textValue.trim() === ei) &&
            0 === el.length &&
            !J &&
            !a.isGameInvitesChannel();
    s.useLayoutEffect(() => {
        if (!(eg || ef)) return U(0);
        null != eu.current && U(eu.current.clientHeight);
    }, [U, eg, ef, eu]);
    let ej = (0, m.Ay)({
            id: `${a.id}-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: s_,
            scrollToEnd: s_,
            orientation: h.Gl.HORIZONTAL,
        }),
        { role: ev, onFocus: eA, ...eC } = (0, u.rm)("forum-channel-header"),
        eN = s.useRef(null),
        eb =
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
        eS = s.useCallback(
            (e) => {
                eA(), e.target !== ee.current || eb.current || eN.current?.focus();
            },
            [eA, ee, eb],
        ),
        eE = s.useMemo(() => (J ? (0, B.Yj)(a.availableTags) : a.availableTags), [a.availableTags, J]);
    return (0, i.jsx)(
        "div",
        {
            className: r()(tJ.card, tJ.headerRow, tJ.columnsSpan),
            ref: ee,
            onFocus: eS,
            ...eC,
            style: { ...C, position: H === x.C.GRID ? "absolute" : "static", height: "auto" },
            children: (0, i.jsxs)(tr.Ah, {
                children: [
                    null != a.guild_id
                        ? (0, i.jsx)(F.A, {
                              className: r()(tJ.newMemberBanner, { [tJ.gridViewBanner]: H === x.C.GRID }),
                              guildId: a.guild_id,
                              channel: a,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: r()(tJ.headerContainer, {
                            [tJ.gameInvitesHeaderContainer]: a.isGameInvitesChannel(),
                        }),
                        children: [
                            (0, i.jsxs)("div", {
                                className: tJ.mainCardContainer,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: r()(tJ.mainCard, tJ.header, {
                                            [tJ.headerWithMatchingPosts]: eg || ef,
                                        }),
                                        children: (0, i.jsx)(iu, {
                                            parentChannel: a,
                                            onChange: en,
                                            isSearchLoading: p,
                                            numResults: v,
                                            canCreatePost: Z,
                                            inputRef: eN,
                                        }),
                                    }),
                                    (eg || ef) &&
                                        (0, i.jsxs)("div", {
                                            className: tJ.matchingPostsRow,
                                            ref: eu,
                                            children: [
                                                eg &&
                                                    (0, i.jsxs)("div", {
                                                        className: tJ.matchingPosts,
                                                        children: [
                                                            (0, i.jsx)(j.D, {
                                                                variant: "text-xs/normal",
                                                                color: "text-default",
                                                                children: p
                                                                    ? eq.intl.string(eq.t["/9i3qq"])
                                                                    : 0 === v
                                                                      ? eq.intl.string(eq.t.DbgHxi)
                                                                      : eq.intl.formatToPlainString(eq.t["tBz/8b"], {
                                                                            numPosts: v ?? "",
                                                                            query: E,
                                                                        }),
                                                            }),
                                                            !p &&
                                                                (0, i.jsx)(S.D, {
                                                                    onClick: () => {
                                                                        (0, tx.hT)({
                                                                            guildId: a.guild_id,
                                                                            channelId: a.id,
                                                                        }),
                                                                            tc.A.clearForumSearch(a.id),
                                                                            W.getState().setName("");
                                                                    },
                                                                    children: (0, i.jsx)(b.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-brand",
                                                                        className: tJ.clear,
                                                                        children: eq.intl.string(eq.t.VkKicb),
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                (0, i.jsx)("div", { className: tJ.tagsSpacer }),
                                                ef
                                                    ? Z
                                                        ? (0, i.jsxs)("div", {
                                                              className: tJ.startPostHelp,
                                                              children: [
                                                                  (0, i.jsx)(y.e, {
                                                                      shortcut: "SHIFT",
                                                                      className: tJ.keyboardShortcut,
                                                                  }),
                                                                  (0, i.jsx)(b.E, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-subtle",
                                                                      children: "+",
                                                                  }),
                                                                  (0, i.jsx)(y.e, {
                                                                      shortcut: "ENTER",
                                                                      className: tJ.keyboardShortcut,
                                                                  }),
                                                                  (0, i.jsx)(b.E, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-subtle",
                                                                      children: eq.intl.string(eq.t.ZvJ0yh),
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, i.jsxs)("div", {
                                                              className: tJ.startPostHelp,
                                                              children: [
                                                                  (0, i.jsx)(T.E, {
                                                                      size: "custom",
                                                                      color: "currentColor",
                                                                      height: 14,
                                                                      width: 14,
                                                                      className: tJ.warnIcon,
                                                                  }),
                                                                  (0, i.jsx)(b.E, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-subtle",
                                                                      children: eq.intl.string(eq.t.iyzwnD),
                                                                  }),
                                                              ],
                                                          })
                                                    : null,
                                            ],
                                        }),
                                ],
                            }),
                            a.isGameInvitesChannel() && (0, i.jsx)(sw, { parentChannel: a, canCreatePost: Z }),
                        ],
                    }),
                    (0, i.jsx)(nM, { channel: a, onChange: en }),
                    (0, i.jsxs)("div", {
                        className: tJ.tagsContainer,
                        ref: es,
                        children: [
                            (0, i.jsx)(sL, { channel: a }),
                            eE.length > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)("div", { className: tJ.divider }),
                                          (0, i.jsx)("div", {
                                              className: tJ.tagList,
                                              ref: ea,
                                              children: (0, i.jsx)(u.hD, {
                                                  navigator: ej,
                                                  children: (0, i.jsx)(u.PR, {
                                                      children: (e) => {
                                                          let { ref: t, ...n } = e;
                                                          return (0, i.jsx)("div", {
                                                              className: tJ.tagListInner,
                                                              ref: t,
                                                              ...n,
                                                              children: eE.map((e) =>
                                                                  (0, i.jsx)(
                                                                      ie.A,
                                                                      {
                                                                          tag: e,
                                                                          onClick: () => {
                                                                              var t;
                                                                              return (
                                                                                  (t = e.id),
                                                                                  void ((0, tx.UA)({
                                                                                      guildId: a.guild_id,
                                                                                      channelId: a.id,
                                                                                      tagId: t,
                                                                                      filterTagIds: Array.from(z),
                                                                                      added: !z.has(t),
                                                                                      location: {
                                                                                          page: eW.liQ.GUILD_CHANNEL,
                                                                                          section:
                                                                                              eW.JJy
                                                                                                  .FORUM_CHANNEL_HEADER,
                                                                                          object: eW.ZSU.CHANNEL_TAG,
                                                                                      },
                                                                                  }),
                                                                                  $.getState().toggleTagFilter(a.id, t))
                                                                              );
                                                                          },
                                                                          selected: z.has(e.id),
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
                                              targetElementRef: ex,
                                              renderPopout: (e) => {
                                                  let { closePopout: t, setPopoutRef: n } = e;
                                                  return (0, i.jsx)(sv, {
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
                                                      buttonRef: ex,
                                                      size: f.$n.Sizes.MIN,
                                                      color: f.$n.Colors.CUSTOM,
                                                      className: r()(tJ.tagsButton, {
                                                          [tJ.tagsButtonWithCount]: z.size > 0,
                                                      }),
                                                      style: { left: er },
                                                      innerClassName: tJ.tagsButtonInner,
                                                      "aria-label":
                                                          z.size > 0
                                                              ? eq.intl.string(eq.t.IkpM1T)
                                                              : eq.intl.string(eq.t["9vKK/N"]),
                                                      children: [
                                                          z.size > 0
                                                              ? (0, i.jsx)("div", {
                                                                    className: tJ.countContainer,
                                                                    children: (0, i.jsx)(b.E, {
                                                                        className: tJ.countText,
                                                                        color: "none",
                                                                        variant: "text-xs/medium",
                                                                        children: z.size,
                                                                    }),
                                                                })
                                                              : eq.intl.string(eq.t.fZ8hzm),
                                                          n
                                                              ? (0, i.jsx)(R.t, {
                                                                    size: "custom",
                                                                    color: "currentColor",
                                                                    width: 20,
                                                                })
                                                              : (0, i.jsx)(k.a, {
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
                                              className: r()(tJ.tagsButton, tJ.tagsButtonPlaceholder),
                                              innerClassName: tJ.tagsButtonInner,
                                              "aria-label": eq.intl.string(eq.t.IkpM1T),
                                              children: [
                                                  z.size > 0
                                                      ? (0, i.jsx)("div", {
                                                            className: tJ.countContainer,
                                                            children: (0, i.jsx)(b.E, {
                                                                className: tJ.countText,
                                                                color: "none",
                                                                variant: "text-xs/medium",
                                                                children: z.size,
                                                            }),
                                                        })
                                                      : null,
                                                  (0, i.jsx)(R.t, { size: "custom", color: "currentColor", width: 24 }),
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
function sL(e) {
    let { channel: t } = e,
        n = t.isMediaChannel(),
        l = t.isGameInvitesChannel(),
        a = s.useRef(null);
    return (0, i.jsx)(I.Y, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(sf, { channel: t, closePopout: n });
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
                className: tJ.sortDropdown,
                innerClassName: tJ.sortDropdownInner,
                "aria-label": n ? eq.intl.string(eq.t.JxU0wr) : eq.intl.string(eq.t.xyYt8A),
                children: [
                    (0, i.jsx)(M.J, { size: "xs", color: "currentColor" }),
                    (0, i.jsx)(b.E, {
                        className: tJ.sortDropdownText,
                        variant: "text-sm/medium",
                        color: "interactive-text-default",
                        children: (0, i.jsx)("span", {
                            className: tJ.sortDropdownTextHighContrastForcedColor,
                            children: n || l ? eq.intl.string(eq.t.JxU0wr) : eq.intl.string(eq.t.xyYt8A),
                        }),
                    }),
                    s
                        ? (0, i.jsx)(R.t, { size: "custom", color: "currentColor", width: 20 })
                        : (0, i.jsx)(k.a, { size: "custom", color: "currentColor", width: 20 }),
                ],
            });
        },
    });
}

n.r(t), n.d(t, { default: () => so });
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
    b = n(475825),
    N = n(834730),
    S = n(939249),
    E = n(475358),
    y = n(695366),
    T = n(922016),
    R = n(900797),
    k = n(847374),
    I = n(112173),
    M = n(738876),
    _ = n(765671),
    w = n(964486),
    L = n(775602),
    D = n(47167),
    P = n(870136),
    O = n(575293),
    F = n(857071),
    U = n(228098),
    z = n(157259),
    G = n(212007),
    H = n(892340),
    B = n(715757),
    V = n(284009),
    W = n.n(V),
    $ = n(989349),
    q = n.n($),
    K = n(990078),
    X = n(247928),
    Q = n(97808),
    Y = n(778712),
    J = n(138134),
    Z = n(777666),
    ee = n(661531),
    et = n(863610),
    en = n(534890),
    el = n(144165),
    ei = n(119031),
    es = n(104171),
    ea = n(139716),
    er = n(847599),
    eo = n(114166),
    ec = n(810181),
    ed = n(390248),
    eu = n(422844),
    em = n(435470),
    eh = n(473503),
    ex = n(256265),
    eg = n(969043),
    ef = n(710948),
    ej = n(218152),
    ep = n(52933),
    ev = n(504261),
    eA = n(505234),
    eC = n(387408),
    eb = n(59318),
    eN = n(294520),
    eS = n(505527),
    eE = n(863439),
    ey = n(465364),
    eT = n(467073),
    eR = n(34337),
    ek = n(831688),
    eI = n(805964),
    eM = n(302031),
    e_ = n(885386),
    ew = n(761640),
    eL = n(734057),
    eD = n(232835),
    eP = n(576705),
    eO = n(967198),
    eF = n(287809),
    eU = n(531685),
    ez = n(58703),
    eG = n(763754),
    eH = n(447215);
let eB = (e) => {
    let { message: t, originalAuthor: n, channel: l } = e,
        s = (0, eG.d8)(n, l),
        a = s?.nick ?? n?.username ?? "",
        r = (0, eH.P)({
            user: n ?? void 0,
            channelId: l.id,
            guildId: l.guild_id,
            messageId: t?.id,
            stopPropagation: !0,
        })(s ?? void 0)(a, l.id);
    return (0, i.jsx)(N.E, { variant: "text-md/semibold", children: r });
};
var eV = n(652215),
    eW = n(838541),
    e$ = n(375708),
    eq = n(506472),
    eK = n(330070),
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
            W()(null != l, "the thread should not be null here, a store must have missed an update");
            let i = (0, g.bG)([ew.Ay], () => ew.Ay.getCurrentSidebarChannelId(l.parent_id) === l.id),
                { firstMessage: a } = (0, eh.OA)(l),
                r = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: l = !0 } = e,
                        i = s.useMemo(() => (null != t ? (0, eC.A)(t, t?.messageSnapshots[0]) : null), [t]),
                        { hasSpoilerEmbeds: a, content: r } = s.useMemo(
                            () =>
                                i?.content != null && "" !== i.content
                                    ? (0, ey.Ay)(i, {
                                          formatInline: n,
                                          noStyleAndInteraction: l,
                                          allowHeading: !0,
                                          allowList: !0,
                                      })
                                    : { hasSpoilerEmbeds: !1, content: null },
                            [n, i, l],
                        ),
                        o = (0, ex.Ky)(t, a),
                        c = (0, ex.L_)(t, a);
                    return null == t ? null : { hasSpoilerEmbeds: a, content: r, firstMedia: o, firstMediaIsEmbed: c };
                })({ firstMessage: a }),
                o = r?.content,
                c = r?.firstMedia,
                { messageCountText: d } = (0, em.k6)(l);
            return { channel: l, isOpen: i, messageCount: d, firstMessage: a, content: o, media: n ?? c };
        })({ threadId: t, overrideMedia: a }),
        v = (0, D.Ay)(c);
    (0, B.vb)(f);
    let A = (0, g.bG)([eF.default, eD.A], () => {
            let e = eF.default.getUser(f?.messageSnapshots[0]?.moderatorReport?.reported_user_id);
            if (null != e) return e;
            if (f?.messageReference?.channel_id != null && f?.messageReference?.message_id != null) {
                let e = eD.A.getMessage(f?.messageReference?.channel_id, f?.messageReference?.message_id);
                if (null != e) return e.author;
            }
            return null;
        }),
        { ref: C, height: b } = (0, _.Ay)(),
        N = (0, ej.kU)((e) => e.setCardHeight, d.x);
    s.useEffect(() => {
        null != b && N(t, b);
    }, [b, N, t]),
        s.useEffect(() => {
            l?.(C.current, t);
        }, [C, l, t]);
    let E = s.useRef(null),
        { handleLeftClick: y, handleRightClick: T } = (0, eA.A)({ facepileRef: E, goToThread: n, channel: c }),
        { role: R, onFocus: k, ...I } = (0, u.rm)(t),
        { isFocused: M, handleFocus: w, handleBlur: L } = (0, ev.A)(k);
    return (0, i.jsxs)("div", {
        ref: C,
        "data-item-id": t,
        onClick: y,
        onContextMenu: T,
        className: r()(eK.kL, eq.kL, o, { [eK.nT]: m }),
        children: [
            (0, i.jsx)(S.D, {
                onClick: y,
                focusProps: { ringTarget: C },
                onContextMenu: T,
                "aria-label": e$.intl.formatToPlainString(e$.t.pgYN6c, { title: v, count: h }),
                className: eK.Kv,
                onFocus: w,
                onBlur: L,
                ...I,
            }),
            (0, i.jsxs)("div", {
                className: eK.kb,
                children: [
                    (0, i.jsx)(p.F, {
                        children: (0, i.jsxs)("div", {
                            className: eq.fx,
                            children: [
                                (0, i.jsx)(eY, {
                                    channel: c,
                                    firstMessage: f,
                                    content: x,
                                    hasMediaAttachment: null != j,
                                    originalAuthor: A,
                                }),
                                f?.blocked || null == j ? null : (0, i.jsx)(e3, { channel: c, firstMedia: j }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(X.M, {
                        enabled: !M,
                        children: (0, i.jsx)(eZ, { channel: c, firstMessage: f, facepileRef: E }),
                    }),
                ],
            }),
        ],
    });
});
function eY(e) {
    let { channel: t, firstMessage: n, content: l, hasMediaAttachment: s, originalAuthor: a } = e,
        { hasUnreads: o } = (0, em.X5)(t);
    return (0, i.jsxs)("div", {
        className: r()(eq.rf, eK.rf),
        children: [
            (0, i.jsx)(ep.Ay, { channel: t }),
            (0, i.jsx)("div", {
                className: (eK.iU, eq.iU),
                children: (0, i.jsx)(eJ, {
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
let eJ = s.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: s, hasUnreads: a, originalAuthor: o } = e,
        c = (0, g.bG)([eg.A], () => eg.A.isLoading(n.id)),
        d = (0, g.bG)([eP.A], () => eP.A.can(eV.xBc.MANAGE_MESSAGES, n)),
        u = e_.gs.useSetting(),
        m = (0, g.bG)([eO.A], () => eO.A.getGuildId()),
        { contentPlaceholder: h, renderedContent: x } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, eI.o)(t, l, !1, !1, r()(eK.BK, eq.BK, eX.tZ, eX.__invalid_smallFontSize), {
                      leadingIconClass: eK.aG,
                      trailingIconClass: eK.sl,
                      iconSize: eW.eJ,
                  }),
        f =
            null != x
                ? (0, i.jsx)(N.E, { variant: "text-md/normal", children: x })
                : s
                  ? null
                  : (0, i.jsx)(N.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: a ? "text-default" : "text-muted",
                        className: r()(eK.BK, eq.BK),
                        "aria-label": "",
                        children: null == t ? (c ? null : e$.intl.string(e$.t.mE3KJN)) : h,
                    });
    return (0, i.jsxs)(eM.Bs.Provider, {
        value: (0, eE.A)(u, d),
        children: [
            null != o
                ? (0, i.jsx)(Q.eu, {
                      size: Y._3.SIZE_40,
                      src: o.getAvatarURL(m, (0, Y.FT)(Y._3.SIZE_40)),
                      "aria-label": "",
                      className: eq.Nd,
                  })
                : null,
            (0, i.jsxs)("div", {
                className: eq.IF,
                children: [
                    (0, i.jsx)(eB, { channel: n, originalAuthor: o, message: t }),
                    (0, i.jsx)(X.M, { className: eK.JY, children: f }),
                ],
            }),
        ],
    });
});
function eZ(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        { isNew: s } = (0, em.X5)(t),
        a = (0, D.Ay)(t),
        r = (0, ec.m)(t.id),
        o = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: eq.qr,
        children: [
            (0, i.jsxs)("div", {
                className: eq.JS,
                children: [
                    (0, i.jsx)(J.i, { size: "custom", width: 14, height: 14 }),
                    (0, i.jsx)(N.E, { variant: "text-sm/medium", children: a }),
                    s
                        ? (0, i.jsx)(Z.Lp, {
                              color: ee.A.unsafe_rawColors.BRAND_260.css,
                              text: e$.intl.string(e$.t.y2b7CA),
                              className: eq.Ad,
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: eq.PQ,
                children: [
                    o || null == l ? null : (0, i.jsx)(e1, { firstMessage: l, channel: t }),
                    (0, i.jsx)(e0, { channel: t, iconSize: 14 }),
                    (0, i.jsx)("span", { className: eK.xE, children: "\u2022" }),
                    r.length > 0
                        ? (0, i.jsxs)("div", {
                              className: eK.IW,
                              children: [
                                  (0, i.jsx)(e4, { channel: t, userIds: r, facepileRef: n }),
                                  (0, i.jsx)("div", {
                                      className: eK.r$,
                                      children: (0, i.jsx)(et.n, { themed: !0, dotRadius: 2 }),
                                  }),
                                  (0, i.jsx)(ei.Ay, { channel: t, className: eK.mD, renderDots: !1 }),
                              ],
                          })
                        : (0, i.jsx)(e2, { channel: t }),
                ],
            }),
        ],
    });
}
function e0(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: s, unreadCount: a } = (0, em.k6)(t);
    return (0, i.jsxs)("div", {
        className: r()(eK.Mv, { [eK.hT]: l && null == a }),
        children: [
            (0, i.jsx)("span", {
                className: eK.SZ,
                children: (0, i.jsx)(en.o, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof s
                ? (0, i.jsx)(eo.A, { value: s, digitWidth: 9, className: eK.gv })
                : (0, i.jsx)("div", { className: eK.gv, children: s }),
            null == a
                ? null
                : (0, i.jsxs)(N.E, {
                      className: eK.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", e$.intl.format(e$.t.z3PEth, { count: a }), ")"],
                  }),
        ],
    });
}
function e1(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, g.bG)([eL.A], () => eL.A.getChannel(n.parent_id)),
        s = (0, em.Ck)(l),
        { disableReactionCreates: a, isLurking: r, isPendingMember: o } = (0, eT.A)(n);
    return null == s || a
        ? null
        : (0, i.jsx)(ek.qT, {
              className: eK.vC,
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
              type: eS.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function e2(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, eu.R)(t.parent_id),
        l = (0, em.Mw)(t, n),
        s = t.threadMetadata?.createTimestamp,
        a = null == s ? null : e$.intl.formatToPlainString(e$.t["13euCd"], { timestamp: (0, ez.i$)(q()(s), "LLLL") });
    return (0, i.jsx)(K.m, {
        text: a,
        children: (0, i.jsx)(N.E, {
            className: eK.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function e4(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        s = (0, em.$I)(t, n);
    return (0, i.jsx)("div", {
        ref: l,
        children: (0, i.jsx)(es.Ay, {
            className: eK.__invalid_facepile,
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
        u = e_.kt.useSetting(),
        m = (0, eN.rx)(a),
        { src: h, width: x, height: f, alt: j } = l;
    return (f > x ? (n = 72) : (t = 72), o)
        ? (0, i.jsx)("div", {
              "aria-label": m ?? j ?? e$.intl.string(e$.t.hqwnc2),
              className: r()(eK.iT, eK.nh),
              style: { maxWidth: t, maxHeight: n, height: f, width: x },
          })
        : h.startsWith("data:")
          ? (0, i.jsx)(el._, {
                src: h,
                maxHeight: t,
                maxWidth: n,
                width: x,
                height: f,
                alt: null != j && s ? m : j,
                className: eK.iT,
                imageClassName: r()({ [eK.cd]: s, [eK.LW]: !0 }),
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
                containerClassName: eK.iT,
                imageClassName: r()({ [eK.cd]: s }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function e3(e) {
    let { channel: t, firstMedia: n } = e,
        [l, s] = (0, eN.eJ)({ media: n, channel: t }),
        a = (0, ed.qZ)(s);
    return (0, i.jsx)(X.M, {
        enabled: !0,
        children: (0, i.jsxs)("div", {
            className: r()(eK.pV, eq.pV),
            onClick: function (e) {
                e.stopPropagation(),
                    a &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        ea.A.showAgeVerificationGetStartedModal({ entryPoint: er.q1.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, i.jsx)(e7, { firstMedia: n, shouldObscure: l, obscureReason: s, shouldShowAgeVerification: a }),
                l && (0, i.jsx)(ef.A, { iconClassname: eK.yo, obscureReason: s }),
            ],
        }),
    });
}
var e8 = n(378570),
    e5 = n(940382),
    e9 = n(970278),
    e6 = n(424798),
    te = n(406704),
    tt = n(747926),
    tn = n(31717),
    tl = n(834942),
    ti = n(309010),
    ts = n(522602),
    ta = n(234320),
    tr = n(947094),
    to = n(919577),
    tc = n(207777),
    td = n(365971),
    tu = n(613999);
let tm = function (e) {
    let { guildId: t, channelId: n } = e,
        l = s.useRef(null),
        i = (0, td.Xg)(),
        a = !eU.A.isFocused(i);
    return (
        s.useLayoutEffect(
            () => (
                null == l.current &&
                    ((l.current = new tu.Ay({ guildId: t, channelId: n, isPaused: a, windowId: i })),
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
var th = n(853742);
n(321073);
var tx = n(873174),
    tg = n(136722),
    tf = n(192308),
    tj = n(866323),
    tp = n(789645),
    tv = n(446576),
    tA = n(26430),
    tC = n(885574),
    tb = n(933832),
    tN = n(565787),
    tS = n(320448),
    tE = n(435183),
    ty = n(417454),
    tT = n(148719),
    tR = n(462887),
    tk = n(696986),
    tI = n(811893),
    tM = n(821609),
    t_ = n(736653),
    tw = n(303136),
    tL = n(892110),
    tD = n(251766),
    tP = n(468689),
    tO = n(71393),
    tF = n(975571);
let tU = { mass: 1, tension: 250, friction: 18, clamp: !0 };
var tz = n(388803);
function tG(e) {
    let { handleHide: t } = e;
    return (0, i.jsx)(S.D, {
        onClick: t,
        className: tz.b,
        "aria-label": e$.intl.string(e$.t.WAI6xu),
        children: (0, i.jsx)(tp.P, { size: "md", color: "currentColor", className: tz.ut }),
    });
}
function tH(e) {
    let { username: t, title: n, videoSrc: l, messageCount: s, reaction: a, reactionCount: o, classname: c } = e;
    return (0, i.jsxs)("div", {
        className: r()(tz.IP, c),
        children: [
            (0, i.jsx)("div", {
                className: tz.Y6,
                children: (0, i.jsxs)("div", {
                    className: tz.wO,
                    children: [
                        (0, i.jsx)(N.E, { tag: "span", className: tz.cy, variant: "text-sm/semibold", children: t }),
                        (0, i.jsx)(N.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: tz.SD,
                            children: e$.intl.string(e$.t.mA0IvI),
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
            (0, i.jsx)(tk.h, { size: 10 }),
            (0, i.jsx)(tw.A, { className: tz.Ki, src: l }),
            (0, i.jsx)(tk.h, { size: 10 }),
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
                                    children: (0, i.jsx)(en.o, { size: "xs", color: "currentColor" }),
                                }),
                                (0, i.jsx)(N.E, {
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
                                (0, i.jsx)(N.E, {
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
let tB = (e) => {
    let { channel: t } = e,
        n = (0, t_.Ay)(),
        l = (0, tR.M)(n),
        a = (0, g.bG)([tO.A], () => tO.A.getGuild(t.guild_id)),
        o = (0, g.bG)([tr.A], () => tr.A.hasHidden(t.id)),
        c = (0, tD.e)({ guildId: t.guild_id, channelId: t.id }),
        { transitions: d, setVisible: u } = (function () {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tj.p)(e, {
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
            u(!1), to.A.hideAdminOnboarding(t.id, !0);
        }, [t, u]);
    s.useEffect(() => {
        (0, tL.l)(t.id) || u(!o);
    }, [t, u, o]);
    let h = s.useMemo(
            () => [
                e$.intl.string(e$.t["8pEGAw"]),
                e$.intl.string(e$.t.jwfgDd),
                e$.intl.string(e$.t.mPKs27),
                e$.intl.string(e$.t.StRbvG),
            ],
            [],
        ),
        x = s.useMemo(
            () => [
                e$.intl.string(e$.t["m/b58M"]),
                e$.intl.string(e$.t.MuJSKw),
                e$.intl.string(e$.t["d/Wqvu"]),
                e$.intl.string(e$.t.GJklAw),
            ],
            [],
        ),
        f = () => {
            tP.A.open(t.guild_id, eV.BEX.ROLE_SUBSCRIPTIONS);
        },
        p = a?.features.has(eV.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)
            ? e$.intl.string(e$.t.n0q7sI)
            : e$.intl.string(e$.t.QoYdie),
        v =
            (a?.features.has(eV.GuildFeatures.CREATOR_MONETIZABLE) ||
                a?.features.has(eV.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) ??
            !1,
        A = v ? e$.intl.string(e$.t["G/7ciZ"]) : e$.intl.string(e$.t.IFOiit),
        C = v ? e$.intl.string(e$.t.GjgQO1) : e$.intl.string(e$.t.E7AO6t);
    return (0, i.jsx)(i.Fragment, {
        children: d((e, t) =>
            t
                ? (0, i.jsxs)(tx.animated.div, {
                      style: e,
                      className: tz.kL,
                      children: [
                          (0, i.jsxs)("div", {
                              className: tz.U1,
                              children: [
                                  (0, i.jsxs)(N.E, {
                                      variant: "text-xs/normal",
                                      className: tz.l2,
                                      children: [
                                          (0, i.jsx)(tC.m, { size: "xxs", color: "currentColor", className: tz.Kk }),
                                          e$.intl.string(e$.t.znhX2R),
                                      ],
                                  }),
                                  (0, i.jsx)(tG, { handleHide: m }),
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
                                                      (0, i.jsx)(tH, {
                                                          username: e$.intl.string(e$.t.AkORco),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                                          title: e$.intl.string(e$.t.yO6Fxu),
                                                          messageCount: "34",
                                                          reaction: "\u26A1\uFE0F",
                                                          reactionCount: "724",
                                                          classname: tz.q6,
                                                      }),
                                                      (0, i.jsx)(tH, {
                                                          username: e$.intl.string(e$.t.DPg3YM),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                                          title: e$.intl.string(e$.t["R5XnC/"]),
                                                          messageCount: "34",
                                                          reactionCount: "84",
                                                          reaction: "\uD83D\uDC9E",
                                                          classname: tz.q6,
                                                      }),
                                                      (0, i.jsx)(tH, {
                                                          username: e$.intl.string(e$.t.KIelex),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                                          title: e$.intl.string(e$.t.pt88Vb),
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
                                                  (0, i.jsx)(tk.h, { size: 8 }),
                                                  (0, i.jsx)(N.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: C,
                                                  }),
                                                  (0, i.jsx)(tk.h, { size: 16 }),
                                                  (0, i.jsxs)(S.D, {
                                                      onClick: () =>
                                                          open(tF.A.getCreatorSupportArticleURL(eV.MVz.MEDIA_CHANNEL)),
                                                      className: tz.zy,
                                                      children: [
                                                          (0, i.jsx)(N.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-link",
                                                              children: e$.intl.string(e$.t.OahzBd),
                                                          }),
                                                          (0, i.jsx)(tI.t, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: tz.QI,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)(tk.h, { size: 16 }),
                                                  (0, i.jsx)("div", {
                                                      className: tz.Qq,
                                                      children: h.map((e) =>
                                                          (0, i.jsx)(
                                                              N.E,
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
                                                      (0, i.jsxs)(N.E, {
                                                          variant: "text-xxs/bold",
                                                          className: tz.X4,
                                                          children: [
                                                              e$.intl.string(e$.t.NChGwy),
                                                              " ",
                                                              (0, i.jsx)("span", {
                                                                  role: "img",
                                                                  "aria-label": "",
                                                                  children: "\uD83D\uDD25",
                                                              }),
                                                          ],
                                                      }),
                                                      (0, i.jsx)(tk.h, { size: 10 }),
                                                      (0, i.jsx)(j.D, {
                                                          variant: "heading-lg/semibold",
                                                          color: "text-strong",
                                                          children: e$.intl.string(e$.t["N/TRrT"]),
                                                      }),
                                                      (0, i.jsx)(tk.h, { size: 8 }),
                                                      (0, i.jsx)(N.E, {
                                                          variant: "text-md/normal",
                                                          color: "text-muted",
                                                          children: e$.intl.string(e$.t.t3yWxG),
                                                      }),
                                                      (0, i.jsx)(tk.h, { size: 16 }),
                                                      (0, i.jsx)("div", {
                                                          className: tz.Qq,
                                                          children: x.map((e) =>
                                                              (0, i.jsx)(
                                                                  N.E,
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
                                                      (0, i.jsx)(tk.h, { size: 16 }),
                                                      0 === c.length &&
                                                          (0, i.jsx)(tM.$, { variant: "primary", onClick: f, text: p }),
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
var tV = n(331322),
    tW = n(111159),
    t$ = n(517461),
    tq = n(350527),
    tK = n(95035),
    tX = n(221314),
    tQ = n(50897),
    tY = n(419949);
let tJ = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    tZ = (e) => {
        let { guild: t } = e,
            n = (0, g.bG)([eP.A], () => eP.A.can(eV.xBc.MANAGE_GUILD, t));
        return (0, i.jsxs)(tV.B, {
            direction: "horizontal",
            gap: 8,
            children: [
                (0, i.jsxs)(tV.B, {
                    direction: "vertical",
                    gap: 16,
                    children: [
                        (0, i.jsx)(tV.B, {
                            direction: "vertical",
                            gap: 4,
                            children: (0, i.jsx)(N.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: e$.intl.string(tX.default.fP8DVx),
                            }),
                        }),
                        (0, i.jsxs)(tV.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, i.jsx)(N.E, {
                                    variant: "text-lg/semibold",
                                    color: "text-default",
                                    children: e$.intl.string(tX.default["i7CH/I"]),
                                }),
                                (0, i.jsxs)("ol", {
                                    className: r()(tQ.p_, tQ.o8, tQ.ap),
                                    children: [
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(N.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: e$.intl.string(tX.default["+Izoz7"]),
                                            }),
                                        }),
                                        (0, i.jsxs)("li", {
                                            children: [
                                                (0, i.jsx)(N.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: e$.intl.string(tX.default["iu/RkU"]),
                                                }),
                                                (0, i.jsxs)("ul", {
                                                    className: r()(tQ.p_, tQ.t3, tQ.zS),
                                                    children: [
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(N.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: e$.intl.string(tX.default.QogKbP),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(N.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: e$.intl.string(tX.default.V4orHT),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(N.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: e$.intl.string(tX.default.VrrQXe),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(N.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: e$.intl.string(tX.default.pSuM5e),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(N.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: e$.intl.string(tX.default["/RLXlI"]),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(N.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: e$.intl.string(tX.default.j4AmYy),
                                            }),
                                        }),
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(N.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: e$.intl.format(tX.default["/g+PvX"], {
                                                    termsOfService: eV.X7G.TERMS,
                                                    communityGuidelines: eV.X7G.GUIDELINES,
                                                    helpArticle: tF.A.getArticleURL(eV.MVz.FLAG_TO_MOD),
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)(tV.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, i.jsx)(N.E, {
                                    variant: "text-lg/semibold",
                                    color: "text-default",
                                    children: e$.intl.string(tX.default.qJWXsz),
                                }),
                                (0, i.jsxs)("ul", {
                                    className: r()(tQ.p_, tQ.zS, tQ.ap),
                                    children: [
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(N.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: e$.intl.format(tX.default.FUBV1P, {
                                                    survey: "https://discord.sjc1.qualtrics.com/jfe/form/SV_3WvT7SqlWpCJ4HQ",
                                                }),
                                            }),
                                        }),
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(N.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: e$.intl.format(tX.default.W4MIAG, {
                                                    feedback: "https://forms.gle/RbDhW46PMmR39XUP7",
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)(tV.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, i.jsx)(N.E, {
                                    variant: "text-md/normal",
                                    color: "text-default",
                                    children: e$.intl.string(tX.default.J3HKmx),
                                }),
                                n &&
                                    (0, i.jsx)(N.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: e$.intl.format(tX.default["9x2vbP"], {
                                            optOutHook: (e) =>
                                                (0, i.jsx)(tK.A, {
                                                    onClick: () =>
                                                        tP.A.open(
                                                            t.id,
                                                            eV.BEX.MODERATION,
                                                            null,
                                                            eV.nd0.SAFETY_OVERVIEW,
                                                        ),
                                                    children: e,
                                                }),
                                        }),
                                    }),
                                (0, i.jsx)(N.E, {
                                    variant: "text-md/normal",
                                    color: "text-default",
                                    children: e$.intl.string(tX.default.KcCY25),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("img", {
                    src: "/assets/c42cecffc003efa2.svg",
                    alt: e$.intl.string(tX.default["UxV/3+"]),
                    width: tq.T5,
                    height: tq.T5,
                }),
            ],
        });
    };
function t0(e) {
    let t,
        { guild: n } = e,
        [l, a] = (0, t$.V)("report-to-mod-education-dismissed", !1),
        [o, c] = (0, t$.V)("report-to-mod-education-expanded", !1),
        { transitions: d, setVisible: u } = (() => {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tj.p)(e, {
                    keys: (e) => (e ? "shown" : "hidden"),
                    config: tJ,
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
    return (s.useEffect(() => {
        l && u(!1);
    }, [l, u]),
    l)
        ? null
        : d((e, t) =>
              t
                  ? (0, i.jsxs)(tx.animated.div, {
                        style: e,
                        onClick: () => c(!o),
                        className: r()(eK.kL, tQ.kL, tY.mainCard),
                        children: [
                            (0, i.jsxs)("div", {
                                className: tQ.mG,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: tQ.cy,
                                        children: [
                                            (0, i.jsx)(tW.p, {
                                                size: "custom",
                                                width: 28,
                                                height: 28,
                                                color: "currentColor",
                                                className: tQ.Mg,
                                            }),
                                            (0, i.jsx)(N.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                children: e$.intl.string(e$.t.uvGmCx),
                                            }),
                                            (0, i.jsx)(N.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                children: "\u2014",
                                            }),
                                            (0, i.jsx)(j.D, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: e$.intl.string(tX.default["95qQRB"]),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(S.D, {
                                        onClick: () => a(!0),
                                        children: (0, i.jsx)(tp.P, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tQ.ut,
                                        }),
                                    }),
                                ],
                            }),
                            m((e, t) =>
                                t
                                    ? (0, i.jsxs)(tx.animated.div, {
                                          style: e,
                                          children: [
                                              (0, i.jsx)("hr", { className: tQ.me }),
                                              (0, i.jsx)(tZ, { guild: n }),
                                          ],
                                      })
                                    : null,
                            ),
                        ],
                    })
                  : null,
          );
}
var t1 = n(191842),
    t2 = n(565645),
    t4 = n(21161),
    t7 = n(796774),
    t3 = n(209932),
    t8 = n(174459),
    t5 = n(102597),
    t9 = n(904054),
    t6 = n(584014),
    ne = n(536283);
n(980504);
var nt = n(59618);
function nn(e) {
    let { className: t, sound: n, playSound: l, isPlaying: a, text: o } = e,
        c = n?.emojiId != null || n?.emojiName != null,
        d = e$.intl.formatToPlainString(e$.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name }),
        u = s.useCallback(() => {
            t8.default.track(eV.HAw.MODERATOR_QUEUE_ACTION, { guild_id: eO.A.getGuildId(), action: "airhorn" }),
                null != l && l();
        }, [l]);
    return (0, i.jsxs)(S.D, {
        "aria-label": d,
        tag: "span",
        onClick: u,
        className: r()(nt.Ls, nt.oR, { [nt.he]: !0 === a }, t),
        children: [
            c && (0, i.jsx)(t2.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: nt.JS }),
            (0, i.jsx)("span", { children: ` ${o} ` }),
        ],
    });
}
function nl(e) {
    let { containerRef: t, text: n } = e,
        l = s.useRef(null),
        a = (0, g.bG)([t3.A], () => t3.A.getSoundsForGuild("0")?.find((e) => "airhorn" === e.name)),
        { createMultipleConfettiAt: r } = s.useContext(t4.x),
        o = (0, g.bG)([L.A], () => L.A.useReducedMotion),
        { isPlaying: c, playSound: d } = (function (e) {
            let { isPlaying: t, playSound: n, preloadSound: l } = (0, t6.A)(null != e ? (0, t5.A)(e.soundId) : null);
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
    (0, w.Ay)(() => {
        (0, t7.E7)();
    });
    let u = s.useCallback(async () => {
        if ((await d()) && (l.current?.addAnimation(), !o && t?.current != null)) {
            let e = t.current.getBoundingClientRect(),
                n = { x: e.left + e.width / 2, y: e.top + e.height / 3 },
                l = ne.uI[Math.floor(Math.random() * ne.uI.length)];
            r(
                n.x,
                n.y,
                { velocity: { type: "static-random", minValue: { x: -500, y: -500 }, maxValue: { x: 500, y: -100 } } },
                40,
                { sprite: l },
            );
        }
    }, [d, r, o, t]);
    return void 0 === a ? null : (0, i.jsx)(nn, { sound: a, playSound: u, isPlaying: c, text: n });
}
function ni() {
    let e = s.useRef(null);
    return (0, i.jsxs)(tV.B, {
        className: nt.kL,
        direction: "vertical",
        align: "center",
        justify: "center",
        padding: { top: 24, bottom: 24 },
        ref: e,
        children: [
            (0, i.jsx)(t1._, { size: "custom", width: 48, height: 48 }),
            (0, i.jsxs)(tV.B, {
                direction: "vertical",
                align: "center",
                justify: "center",
                children: [
                    (0, i.jsx)(j.D, {
                        className: nt.wx,
                        variant: "heading-md/medium",
                        children: e$.intl.string(tX.default.h6QNky),
                    }),
                    (0, i.jsx)(N.E, {
                        className: nt.Qq,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: e$.intl.format(tX.default["8N4c58"], {
                            airhornHook: (t) => (0, i.jsx)(nl, { containerRef: e, text: t }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
var ns = n(34457),
    na = n(317525),
    nr = n(44234),
    no = n(625494),
    nc = n(927813),
    nd = n(935208),
    nu = n(387255),
    nm = n(952351);
function nh(e) {
    let { channelName: t, guildId: l, tagFilter: a, channel: r } = e,
        o = (0, em.S4)(r),
        c = (0, te.AI)(r),
        d = r.isMediaChannel(),
        u = s.useCallback(() => {
            (0, th.zd)(),
                (0, tf.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("43051"), n.e("90052")]).then(n.bind(n, 653682));
                    return (t) => (0, i.jsx)(e, { ...t, guildId: l });
                });
        }, [l]),
        m = a.size > 0,
        h = c || o,
        x = !m && o && !d,
        g = s.useCallback(
            () => (x ? u() : c ? void no._.dispatch(eV.jej.FOCUS_COMPOSER_TITLE) : (0, eV.FXj)()),
            [u, x, c],
        );
    return (0, i.jsxs)("div", {
        className: nm.k,
        children: [
            (0, i.jsx)(j.D, {
                className: nm.w,
                variant: "heading-md/semibold",
                children: m
                    ? e$.intl.formatToPlainString(e$.t.lvPci0, { numTags: a.size })
                    : e$.intl.string(e$.t.PwTMG0),
            }),
            (0, i.jsx)(N.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: m
                    ? e$.intl.formatToPlainString(e$.t.AAeye1, { numTags: a.size })
                    : e$.intl.formatToPlainString(e$.t.YtsXFD, { channelName: t }),
            }),
            h &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tk.h, { size: 16 }),
                        (0, i.jsx)(tM.$, {
                            text: x ? e$.intl.string(e$.t.DgatTQ) : e$.intl.string(e$.t.wOKE8I),
                            variant: "secondary",
                            onClick: g,
                        }),
                    ],
                }),
        ],
    });
}
var nx = n(253913),
    ng = n(658688);
let nf = { width: 28, height: 28 },
    nj = { width: 20, height: 20, borderRadius: 10 },
    np = (e) => {
        (0, th.bh)({ onboardingCTA: e });
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
let nA = (e) => {
        let { guild: t, roles: n } = e;
        return (0, i.jsx)("div", {
            className: ng.Ei,
            "aria-label": e$.intl.formatToPlainString(e$.t.PCs0oo, { numRoles: n.length }),
            children: n.map((e) =>
                (0, i.jsx)(ty.b_, { role: e, canRemove: !1, onRemove: eV.FXj, guildId: t.id, className: ng.Yq }, e.id),
            ),
        });
    },
    nC = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    nb = (e) => {
        let { handleHide: t } = e;
        return (0, i.jsx)(S.D, {
            onClick: t,
            className: ng.b,
            "aria-label": e$.intl.string(e$.t.WAI6xu),
            children: (0, i.jsx)(tp.P, { size: "md", color: "currentColor", className: ng.ut }),
        });
    },
    nN = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, i.jsx)(S.D, {
            onClick: n,
            className: ng.b,
            "aria-label": t ? e$.intl.string(e$.t.iTcuma) : e$.intl.string(e$.t.dcl9MQ),
            children: t
                ? (0, i.jsx)(tv.g, { size: "xs", color: "currentColor", className: ng.ut })
                : (0, i.jsx)(tA._, { size: "xs", color: "currentColor", className: ng.ut }),
        });
    },
    nS = (e) => {
        let t,
            { hasAnyThread: l, hasActiveThreads: a, channel: o } = e,
            c = (0, D.Ay)(o),
            { onboardingExpanded: u } = (0, ej.kU)((e) => {
                let { onboardingExpanded: t } = e;
                return { onboardingExpanded: t };
            }, d.x),
            { tagFilter: m } = (0, eu.R)(o.id),
            h = (0, g.bG)([tO.A], () => tO.A.getGuild(o.getGuildId())),
            x = (0, em.S4)(o),
            { transitions: f, setVisible: v } = (() => {
                let [e, t] = s.useState(!0);
                return {
                    transitions: (0, tj.p)(e, {
                        keys: (e) => (e ? "shown" : "hidden"),
                        config: nC,
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        unique: !0,
                    }),
                    setVisible: t,
                };
            })(),
            A = (0, tj.p)(u, {
                from: { maxHeight: 0 },
                enter: { maxHeight: 500 },
                leave: { maxHeight: 0 },
                config: { duration: 200 },
            }),
            C = s.useCallback((e) => {
                e.clickHandler?.();
            }, []),
            b = ((t = o.id), s.useCallback(() => (v(!1), to.A.hideAdminOnboarding(t, !0)), [t, v])),
            {
                onboardingSteps: E,
                isDismissed: T,
                isHidden: R,
                isAllDone: k,
            } = ((e) => {
                var t;
                let l,
                    a,
                    r,
                    o,
                    { guild: c, channel: d, hasAnyThread: u, handleHide: m } = e,
                    [h, x] = s.useState(!1),
                    f = (0, tL.l)(d.id),
                    j = (0, g.bG)([tr.A], () => tr.A.hasHidden(d.id)),
                    p =
                        ((l = c?.id),
                        (a = (0, g.bG)([na.A], () => (null != l ? na.A.getSortedRoles(l) : void 0))),
                        s.useMemo(() => {
                            let e,
                                t,
                                l,
                                s,
                                r,
                                o,
                                m,
                                h,
                                g = new nv(),
                                f = d?.isMediaChannel() === !0;
                            return (
                                null == c ||
                                    null == d ||
                                    f ||
                                    null == a ||
                                    g.addStep(
                                        ((e = (0, tT.A)(d)
                                            ? tg.kg(eV.xBc.VIEW_CHANNEL, eV.xBc.SEND_MESSAGES)
                                            : eV.xBc.SEND_MESSAGES),
                                        (l =
                                            (t =
                                                null != c
                                                    ? (0, nu.N)(a, d, e).filter(
                                                          (e) =>
                                                              d.permissionOverwrites.hasOwnProperty(e.id) ||
                                                              (0, ns.Oy)(e),
                                                      )
                                                    : []).length > 0),
                                        (s = t.some((e) => (0, ns.Oy)(e))),
                                        {
                                            name: e$.intl.string(e$.t["/Ax2gs"]),
                                            description: e$.intl.string(e$.t.gAIOfg),
                                            isDone: l && s,
                                            shouldWarn: l && !s,
                                            children: l ? (0, i.jsx)(nA, { guild: c, roles: t }) : null,
                                            clickHandler: () => {
                                                np(nx._G.PERMISSIONS),
                                                    (0, tf.openModalLazy)(
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
                                                            onCloseRequest: eV.FXj,
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
                                            name: e$.intl.string(e$.t.UgJu1e),
                                            description: e$.intl.string(e$.t["3C6/G1"]),
                                            clickHandler: () => {
                                                np(nx._G.GUIDELINES), tE.Ay.open(d.id, void 0, eV.b7d.TOPIC);
                                            },
                                            isDone: r,
                                        }),
                                    ),
                                g.addStep(
                                    ((o = null != d.availableTags && d.availableTags.length > 0),
                                    {
                                        name: e$.intl.string(e$.t.xiBFCi),
                                        description: e$.intl.string(e$.t.wCv4Oz),
                                        clickHandler: () => {
                                            np(nx._G.TAGS),
                                                tE.Ay.open(d.id),
                                                (0, tf.openModalLazy)(async () => {
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
                                        name: e$.intl.string(e$.t.QlyC9s),
                                        description: e$.intl.string(e$.t["+50LJg"]),
                                        clickHandler: () => {
                                            np(nx._G.DEFAULT_REACTION),
                                                (0, tf.openModalLazy)(async () => {
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
                                        name: e$.intl.string(e$.t["6A0O64"]),
                                        description: f
                                            ? e$.intl.string(e$.t["8hI5vr"])
                                            : e$.intl.format(e$.t.ysxcAw, {
                                                  onClick: (e) => {
                                                      null != h &&
                                                          (e.preventDefault(),
                                                          e.stopPropagation(),
                                                          (0, th.zd)(),
                                                          (0, tf.openModalLazy)(async () => {
                                                              let { default: e } = await Promise.all([
                                                                  n.e("43051"),
                                                                  n.e("90052"),
                                                              ]).then(n.bind(n, 653682));
                                                              return (t) => (0, i.jsx)(e, { ...t, guildId: h });
                                                          }));
                                                  },
                                              }),
                                        clickHandler: () => {
                                            np(nx._G.CREATE_POST), no._.dispatch(eV.jej.FOCUS_COMPOSER_TITLE);
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
                        (r = nd.default.extractTimestamp(t)),
                        !q()().isBefore(q()(r).add(q().duration(15, "days"))));
                return (
                    (o = s.useRef(0)),
                    s.useEffect(
                        () => (
                            h || !v || A
                                ? clearTimeout(o.current)
                                : (o.current = setTimeout(() => {
                                      m();
                                  }, 60 * nc.A.Millis.SECOND)),
                            () => clearTimeout(o.current)
                        ),
                        [v, A, m, h],
                    ),
                    { onboardingSteps: p, isHidden: j, isDismissed: f, isAllDone: v }
                );
            })({ guild: h, channel: o, hasAnyThread: l, handleHide: b }),
            I = !R && !T,
            M = (0, ej.ST)(),
            _ = o.isMediaChannel(),
            L = (e) => M.getState().setOnboardingExpanded(e);
        return ((0, w.Ay)(() => {
            k && I && b();
        }),
        ((e) => {
            let { isAllDone: t, isVisible: n, canManageChannel: l, guildId: i, channel: a } = e,
                r = (0, g.bG)([na.A], () => (null != i ? na.A.partitionVersion(i) : void 0)),
                o = s.useCallback(() => {
                    no._.dispatch(eV.jej.REMEASURE_TARGET);
                }, []);
            s.useEffect(() => {
                o();
            }, [o, t, n, l, r, a.id, a.permissionOverwrites]);
        })({ isAllDone: k, isVisible: I, canManageChannel: x, guildId: h?.id, channel: o }),
        s.useEffect(() => {
            T || v(!R);
        }, [T, v, R]),
        (0, w.Ay)(() => {
            (l && I) || L(!0);
        }),
        null == h)
            ? null
            : (0, H.Fo)(o)
              ? a || 0 !== m.size
                  ? m.size > 0
                      ? null
                      : (0, i.jsx)(t0, { guild: h })
                  : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t0, { guild: h }), (0, i.jsx)(ni, {})] })
              : I && x
                ? _
                    ? l
                        ? null
                        : (0, i.jsx)(tB, { channel: o })
                    : (0, i.jsx)(i.Fragment, {
                          children: f((e, t) =>
                              t
                                  ? (0, i.jsx)(tx.animated.div, {
                                        style: e,
                                        className: ng.kL,
                                        children: (0, i.jsxs)("div", {
                                            className: ng.iE,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: ng.U1,
                                                    children: (0, i.jsxs)(p.F, {
                                                        component: (0, i.jsx)(j.D, {
                                                            variant: "heading-md/semibold",
                                                            children: e$.intl.string(e$.t.LhlgY9),
                                                        }),
                                                        children: [
                                                            (0, i.jsx)(j.D, {
                                                                variant: "heading-md/medium",
                                                                className: ng.wx,
                                                                children: e$.intl.format(e$.t["9L+8bz"], {
                                                                    numCompleted: E.completedSteps.toString(),
                                                                    numSteps: E.steps.length.toString(),
                                                                }),
                                                            }),
                                                            (0, i.jsxs)(N.E, {
                                                                variant: "text-xs/normal",
                                                                className: ng.l2,
                                                                children: [
                                                                    (0, i.jsx)(tC.m, {
                                                                        size: "xxs",
                                                                        color: "currentColor",
                                                                        className: ng.Kk,
                                                                    }),
                                                                    e$.intl.string(e$.t.znhX2R),
                                                                ],
                                                            }),
                                                            (0, i.jsx)(nN, { expanded: u, onClick: () => L(!u) }),
                                                            (0, i.jsx)(nb, { handleHide: b }),
                                                        ],
                                                    }),
                                                }),
                                                A((e, t) =>
                                                    t
                                                        ? (0, i.jsx)(tx.animated.div, {
                                                              style: e,
                                                              className: ng.qI,
                                                              children: (0, i.jsx)("ol", {
                                                                  className: ng.D4,
                                                                  children: E.getSteps().map((e) =>
                                                                      (0, i.jsxs)(
                                                                          S.D,
                                                                          {
                                                                              tag: "li",
                                                                              "aria-label": e.name,
                                                                              onClick: () => C(e),
                                                                              className: r()(ng._h, {
                                                                                  [ng.so]: e.isDone,
                                                                              }),
                                                                              children: [
                                                                                  e.shouldWarn
                                                                                      ? (0, i.jsx)(y.E, {
                                                                                            size: "custom",
                                                                                            width: 20,
                                                                                            height: 20,
                                                                                            color: ee.A.colors
                                                                                                .ICON_FEEDBACK_CRITICAL,
                                                                                            className: ng.FY,
                                                                                        })
                                                                                      : e.isDone
                                                                                        ? (0, i.jsx)(Z.fk, {
                                                                                              color: ee.A.colors
                                                                                                  .STATUS_POSITIVE_BACKGROUND
                                                                                                  .css,
                                                                                              icon: tb.A,
                                                                                              style: nj,
                                                                                              className: ng.FY,
                                                                                          })
                                                                                        : (0, i.jsx)(Z.fk, {
                                                                                              disableColor: !0,
                                                                                              icon: (0, tN.k)(nr.A),
                                                                                              style: nf,
                                                                                              className: r()(
                                                                                                  ng.FY,
                                                                                                  ng.so,
                                                                                              ),
                                                                                          }),
                                                                                  (0, i.jsxs)("div", {
                                                                                      className: ng.PM,
                                                                                      children: [
                                                                                          (0, i.jsx)(N.E, {
                                                                                              variant: "text-md/medium",
                                                                                              color: e.isDone
                                                                                                  ? "text-default"
                                                                                                  : "text-strong",
                                                                                              className: ng.u,
                                                                                              children: e.name,
                                                                                          }),
                                                                                          (0, i.jsx)(N.E, {
                                                                                              variant: "text-sm/normal",
                                                                                              color: "text-default",
                                                                                              className: ng.XK,
                                                                                              children: e.description,
                                                                                          }),
                                                                                          e.children,
                                                                                      ],
                                                                                  }),
                                                                                  (0, i.jsx)(tS._, {
                                                                                      size: "custom",
                                                                                      color: "currentColor",
                                                                                      width: 12,
                                                                                      className: ng.FY,
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
                  : (0, i.jsx)(nh, { channelName: c ?? "", guildId: o.guild_id, tagFilter: m, channel: o });
    };
var nE = n(717421),
    ny = n(622629),
    nT = n(22231),
    nR = n(46054),
    nk = n(101136);
let nI = s.memo(function (e) {
    let { channel: t, onChange: l } = e,
        a = (0, ej.ST)(),
        { guidelinesOpen: o } = (0, ej.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, d.x),
        c = (0, em.S4)(t),
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
        f = (0, nE.z)({ opacity: +!!o, maxHeight: 500 * !!o, config: { duration: 300 }, onRest: () => g(!o) });
    return null != t.topic && t.topic.length > 0
        ? (0, i.jsx)(tx.animated.div, {
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
                                      (0, i.jsx)(ny.B, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                          height: 20,
                                      }),
                                      e$.intl.string(e$.t["4d4T4l"]),
                                      c &&
                                          (0, i.jsx)(S.D, {
                                              onClick: () => {
                                                  tE.Ay.open(t.id, void 0, eV.b7d.TOPIC);
                                              },
                                              tag: "span",
                                              className: nk.vk,
                                              children: (0, i.jsx)(nT.R, { size: "xs", color: "currentColor" }),
                                          }),
                                  ],
                              }),
                              (0, i.jsx)(S.D, {
                                  "aria-label": e$.intl.string(e$.t.cpT0Cq),
                                  className: nk.vk,
                                  onClick: () => {
                                      a.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, i.jsx)(tp.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: nk.iQ,
                          children: [
                              (0, i.jsx)(N.E, {
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
                                                      (0, tf.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("47514"),
                                                              n.e("45457"),
                                                          ]).then(n.bind(n, 494664));
                                                          return (n) => (0, i.jsx)(e, { ...n, channel: t });
                                                      });
                                                  },
                                                  children: (0, i.jsxs)(N.E, {
                                                      variant: "text-sm/semibold",
                                                      color: "text-brand",
                                                      className: nk.ur,
                                                      children: [
                                                          e$.intl.string(e$.t.Vu7odK),
                                                          (0, i.jsx)(tA._, {
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
var nM = n(621466),
    n_ = n(189812),
    nw = n(884496),
    nL = n(511274),
    nD = n(408278),
    nP = n(952270),
    nO = n(39623),
    nF = n(278416),
    nU = n(465532),
    nz = n(608299),
    nG = n(355622),
    nH = n(375499),
    nB = n(151271),
    nV = n(698279),
    nW = n(266599);
let n$ = s.memo(
    s.forwardRef(function (e, t) {
        let { disabled: n, type: l, className: a, onClick: o, channel: c } = e,
            [u, m, h] = (0, nB.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], d.x),
            x = s.useCallback(() => {
                (0, nB.ed)(l, c.id), o?.();
            }, [l, o, c.id]);
        return n
            ? null
            : (0, i.jsx)("div", {
                  className: r()(nV.VQ, nW.UD),
                  ref: t,
                  children: (0, i.jsx)(nH.A, {
                      className: r()(nW.Z8, a),
                      onClick: x,
                      active: (u === nV.kx.GIF || u === nV.kx.EMOJI || u === nV.kx.STICKER) && m === l && h === c.id,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                  }),
              });
    }),
);
var nq = n(201349),
    nK = n(625928),
    nX = n(960850),
    nQ = n(702841),
    nY = n(364522),
    nJ = n(215497),
    nZ = n(914905),
    n0 = n(750943),
    n1 = n(844222),
    n2 = n(780777),
    n4 = n(518960),
    n7 = n(811998);
let n3 = { scale: 0.95, opacity: 0 },
    n8 = { scale: 1, opacity: 1 },
    n5 = { scale: 1, opacity: 1 },
    n9 = { tension: 2400, friction: 52 },
    n6 = `.${n7.EJ}`,
    le = { behavior: "smooth", block: "nearest", inline: "nearest" };
function lt(e) {
    let { channelId: t, onClick: n, onClose: l, onMouseEnter: a, listItemProps: r } = e,
        o = s.useRef(null),
        c = (0, g.bG)([eL.A], () => eL.A.getChannel(t), [t]);
    return (
        W()(null != c, "Forum Channel is null"),
        (0, i.jsxs)(S.D, {
            ...r,
            "aria-label": e$.intl.string(e$.t.nzoF5p),
            className: n7.EJ,
            onMouseEnter: a,
            onClick: (e) => {
                0 === e.detail && o.current?.activateUploadDialogue(), (0, th.ri)({ isMobile: !1 }), n?.();
            },
            children: [
                (0, i.jsx)(n2.A, {
                    className: n7.Fg,
                    ref: o,
                    onChange: (e) => {
                        l?.(),
                            (0, n4.R)(e.currentTarget.files, c, tn.C.FirstThreadMessage, {
                                requireConfirm: !0,
                                origin: "file_picker",
                            }),
                            (e.currentTarget.value = null);
                    },
                    multiple: c.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
                (0, i.jsx)(n0.X, { size: "custom", color: "currentColor", width: 28, height: 28, className: n7.T3 }),
            ],
        })
    );
}
function ln(e) {
    let { channelId: t, closePopout: n } = e,
        [l, a] = s.useState(!1),
        { reducedMotion: r } = s.useContext(n1.C),
        o = (0, nE.z)({ from: r.enabled ? n8 : n3, to: n5, config: n9 }, "animate-always"),
        c = (0, g.bG)([L.A], () => L.A.keyboardModeEnabled),
        d = (0, g.bG)([ts.A], () => ts.A.getUploads(t, nG.oU.CREATE_FORUM_POST.drafts.type)),
        x = (0, m.Ay)({
            id: "forum-composer-attachments-popout",
            isEnabled: c,
            orientation: h.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, i.jsx)(tx.animated.div, {
        className: n7.jC,
        onMouseLeave: () => {
            l || c || n();
        },
        onFocus: (e) => {
            e.target.scrollIntoView(le);
        },
        style: o,
        children: (0, i.jsx)(nY.Ip, {
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
                                        nZ.A,
                                        {
                                            channelId: t,
                                            draftType: nG.oU.CREATE_FORUM_POST.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: c,
                                            hideFileName: !0,
                                            size: nJ.L.SMALL,
                                        },
                                        e.id,
                                    ),
                                ),
                                (0, i.jsx)(ll, { channelId: t, setFileInputOpen: a }),
                            ],
                        });
                    },
                }),
            }),
        }),
    });
}
function ll(e) {
    let { channelId: t, setFileInputOpen: n } = e,
        l = { ...(0, u.rm)("upload-button"), tabIndex: 0 };
    return (0, i.jsx)(lt, {
        channelId: t,
        onClick: () => {
            n(!0);
        },
        onClose: () => {
            n(!1),
                requestAnimationFrame(() => {
                    (0, nM.vq)(document.activeElement, HTMLElement) && document.activeElement.scrollIntoView(le);
                });
        },
        listItemProps: l,
    });
}
function li(e) {
    let { channelId: t } = e,
        [n, l] = s.useState(!1),
        a = s.useRef(null),
        r = (0, g.bG)([ts.A], () => ts.A.getUploads(t, nG.oU.CREATE_FORUM_POST.drafts.type)),
        o = r.length,
        c = o > 0;
    s.useEffect(() => {
        n && !c && l(!1);
    }, [n, c]),
        s.useEffect(() => {
            if (document.activeElement !== document.body && null != document.activeElement) return;
            l(o > 0);
            let e = requestAnimationFrame(() => {
                let e = a.current?.querySelector(n6);
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
                      "aria-label": e$.intl.string(e$.t.nzoF5p),
                      className: n7.fY,
                      tabIndex: 0,
                      onClick: d,
                      onFocus: () => {
                          d(),
                              c &&
                                  requestAnimationFrame(() => {
                                      let e = a.current?.querySelector(n6);
                                      e?.focus();
                                  });
                      },
                      onMouseEnter: d,
                      children: [
                          (0, i.jsx)(nZ.J, { upload: r[0], size: nJ.L.SMALL }),
                          (0, i.jsx)("div", { className: n7.qS, children: o }),
                      ],
                  })
                : (0, i.jsx)(lt, { onMouseEnter: d, channelId: t }),
            n && (0, i.jsx)(ln, { channelId: t, closePopout: u }),
        ],
    });
}
var ls = n(343151);
function la(e) {
    let { parentChannel: t } = e,
        n = (0, nQ.yK)([ts.A], () => {
            let e = ts.A.getUploads(t.id, nG.oU.CREATE_FORUM_POST.drafts.type);
            return e?.filter((e) => !0 !== e.isThumbnail);
        });
    return (0, i.jsxs)("div", {
        className: ls.kL,
        children: [
            (0, i.jsx)(N.E, {
                variant: "text-md/semibold",
                color: "text-muted",
                children: e$.intl.string(e$.t.omKGKu),
            }),
            (0, i.jsx)(N.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: e$.intl.string(e$.t["zUjLl+"]),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(nY.Ip, {
                    className: ls.mw,
                    orientation: "horizontal",
                    paddingFix: !1,
                    fade: !0,
                    children: (0, i.jsxs)("div", {
                        className: ls.p8,
                        children: [
                            n.map((e) =>
                                (0, i.jsx)(
                                    nZ.A,
                                    {
                                        channelId: t.id,
                                        draftType: nG.oU.CREATE_FORUM_POST.drafts.type,
                                        upload: e,
                                        keyboardModeEnabled: !0,
                                        hideFileName: !0,
                                        size: nJ.L.SMALL,
                                    },
                                    e.id,
                                ),
                            ),
                            (0, i.jsx)(lt, { channelId: t.id }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
var lr = n(241326),
    lo = n(851023),
    lc = n(915089),
    ld = n(607470),
    lu = n(703007),
    lm = n(635377),
    lh = n.n(lm);
let lx = "absolute",
    lg = new (lh())({ max: 100 });
function lf(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: l } = e;
    return s.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: l } = e,
                    i = `${t}-${n}-${l}`,
                    s = lg.get(i);
                if (null != s) return s;
                {
                    let e = ((e, t, n, l) => {
                        if (0 === n) return [];
                        if (1 === n) return [{ width: e, height: t, top: 0, left: 0, position: lx }];
                        if (2 === n) {
                            let n = Math.ceil((e - l) / 2);
                            return [
                                { top: 0, left: 0, position: lx, width: n, height: t },
                                { top: 0, left: n + l, position: lx, width: n, height: t },
                            ];
                        }
                        if (3 === n) {
                            let n = Math.ceil((e - l) / 2),
                                i = Math.ceil((t - l) / 2);
                            return [
                                { top: 0, left: 0, position: lx, width: n, height: t },
                                { top: 0, left: n + l, position: lx, width: n, height: i },
                                { top: i + l, left: n + l, position: lx, width: n, height: i },
                            ];
                        }
                        {
                            let n = Math.ceil((e - l) / 2),
                                i = Math.ceil((t - l) / 2);
                            return [
                                { top: 0, left: 0, position: lx, width: n, height: i },
                                { top: i + l, left: 0, position: lx, width: n, height: i },
                                { top: 0, left: n + l, position: lx, width: n, height: i },
                                { top: i + l, left: n + l, position: lx, width: n, height: i },
                            ];
                        }
                    })(n, l, t, 4);
                    return lg.set(i, e), e;
                }
            })({ numAttachments: t, containerWidth: n, containerHeight: l }),
        [t, n, l],
    );
}
function lj(e) {
    return e.map((t, n) => ({
        minWidth: 2 * e[n].width,
        minHeight: 2 * e[n].height,
        maxWidth: 2 * e[n].width,
        maxHeight: 2 * e[n].height,
    }));
}
n(323874), n(14289), n(35956);
var lp = n(304162),
    lv = n(735438),
    lA = n(724442),
    lC = n(998218),
    lb = n(36491),
    lN = n(222209);
let lS = [{ name: "Media Post Thumbnail", extensions: ["jpg", "jpeg", "png", "gif", "webp"] }],
    lE = (0, lc.Ld)();
function ly(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: l } = e,
        s = lf({ numAttachments: t.length, containerWidth: n, containerHeight: l });
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsx)(
                "div",
                {
                    style: s[t],
                    children:
                        !0 === e.isVideo
                            ? (0, i.jsx)(ld.A, { src: e.src, className: lN.xn, "aria-hidden": !0 })
                            : (0, i.jsx)("img", { src: e.src, className: lN.xn, "aria-hidden": !0, alt: e?.alt ?? "" }),
                },
                e.src,
            ),
        ),
    });
}
let lT = (e) => {
    let { parentChannel: t } = e,
        { textAreaState: l } = (0, ej.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        a = (0, nQ.bG)([L.A], () => L.A.keyboardModeEnabled),
        o = (function (e, t) {
            let { mediaAttachments: n, hasThumbnail: l } = (function (e) {
                    let [t, n] = s.useState(null),
                        l = (0, nQ.yK)([ts.A], () => {
                            let t = ts.A.getUploads(e.id, nG.oU.CREATE_FORUM_POST.drafts.type),
                                n = t.find((e) => e.isThumbnail);
                            return null != n ? [n] : t.filter((e) => e.isVideo || e.isImage);
                        }),
                        i = s.useMemo(() => l.some((e) => e.isThumbnail), [l]);
                    return (
                        s.useEffect(() => {
                            let e = [];
                            return (
                                n(
                                    l.slice(0, lp.A8).flatMap((t) => {
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
                i = Math.max(lp.A8 - (n?.length ?? 0), 0),
                { embeds: a } = (function (e, t, n) {
                    let l = s.useRef(new Map()),
                        [, i] = s.useState(null),
                        [a, r] = s.useState(null),
                        o = s.useMemo(
                            () =>
                                lv.debounce((e, n) => {
                                    if (null == n || e || 0 === t) return;
                                    let i = n.match(lC.A.URL_REGEX);
                                    if (null == i || 0 === i.length) {
                                        (l.current = new Map()), r(null);
                                        return;
                                    }
                                    r(lv.uniq(i).slice(0, lp.A8));
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
                    let c = (0, lA.A)(l),
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
                            let t = (0, lp.m3)(e);
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
                null != c && nz.A.remove(t.id, c.id, nG.oU.CREATE_FORUM_POST.drafts.type),
                    (0, n4.R)(e.currentTarget.files, t, nG.oU.CREATE_FORUM_POST.drafts.type, {
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
                    (0, tf.openModalLazy)(async () => {
                        let e = c.upload;
                        W()(null != e, "upload should not be null");
                        let { default: l } = await n.e("70698").then(n.bind(n, 427281));
                        return (n) =>
                            (0, i.jsx)(l, {
                                ...n,
                                upload: e,
                                channelId: t.id,
                                draftType: nG.oU.CREATE_FORUM_POST.drafts.type,
                                onSubmit: (n) => {
                                    let { name: l, description: i, spoiler: s } = n;
                                    nz.A.update(t.id, e.id, nG.oU.CREATE_FORUM_POST.drafts.type, {
                                        filename: l,
                                        description: i,
                                        spoiler: s,
                                    });
                                },
                                disableSpoiler: !0,
                            });
                    });
        },
        g = (0, i.jsx)(lu.A, {
            color: f.XD.CUSTOM,
            className: lN.zL,
            innerClassName: lN.Nr,
            onChange: h,
            multiple: !1,
            "aria-hidden": !0,
            filters: lS,
            "aria-describedby": lE,
            "aria-label": u ? e$.intl.string(e$.t.MxJI3f) : e$.intl.string(e$.t.Cbiofa),
            children: u
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(ly, { mediaAttachments: o, containerWidth: m.width, containerHeight: m.height }),
                          (0, i.jsxs)("div", {
                              className: r()(lN.On, { [lN.bP]: o?.length > 2 }),
                              children: [
                                  (0, i.jsx)(N.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: e$.intl.string(e$.t.MxJI3f),
                                  }),
                                  null == c &&
                                      (0, i.jsx)(nT.R, { size: "xs", color: "currentColor", className: lN.IZ }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(n0.X, {
                              size: "custom",
                              width: 39,
                              height: 39,
                              color: "currentColor",
                              className: lN.T3,
                          }),
                          (0, i.jsx)(N.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: e$.intl.string(e$.t.Cbiofa),
                          }),
                      ],
                  }),
        });
    return (0, i.jsx)("div", {
        className: lN.iT,
        style: m,
        children:
            null != c
                ? (0, i.jsx)(nJ.A, {
                      actions: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(lo.A, {
                                  className: lN.XI,
                                  tooltip: e$.intl.string(e$.t.Y8ujqr),
                                  onClick: x,
                                  children: (0, i.jsx)(nT.R, { size: "xs", color: "currentColor" }),
                              }),
                              (0, i.jsx)(lo.A, {
                                  className: lN.XI,
                                  tooltip: e$.intl.string(e$.t.vN7REz),
                                  onClick: () => nz.A.remove(t.id, c.id, nG.oU.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, i.jsx)(lr.u, { size: "md", color: "currentColor" }),
                              }),
                          ],
                      }),
                      draftType: nG.oU.CREATE_FORUM_POST.drafts.type,
                      id: c.id,
                      channelId: t.id,
                      handleEditModal: x,
                      keyboardModeEnabled: a,
                      size: nJ.L.SMALL,
                      className: lN.Xc,
                      children: g,
                  })
                : g,
    });
};
var lR = n(451909),
    lk = n(375199),
    lI = n(141268),
    lM = n(931664),
    l_ = n(631576),
    lw = n(474078),
    lL = n(55294),
    lD = n(383233),
    lP = n(101392),
    lO = n(806150),
    lF = n(753738);
function lU(e, t) {
    return { type: e, message: t ?? null };
}
function lz(e, t) {
    return lU(1, (0, lF.cw)(e, t?.id));
}
function lG(e, t) {
    return null == e ||
        (0 === e.type && null != t.content && t.content.trim().length > 0) ||
        (2 === e.type && null != t.tags && t.tags.length > 0)
        ? null
        : (e.message ?? null);
}
var lH = n(774812),
    lB = n(91871),
    lV = n.n(lB),
    lW = n(892547),
    l$ = n(658675),
    lq = n(628284),
    lK = n(506115);
let lX = "data-listbox-item-id",
    lQ = Object.freeze({ STANDARD: lK.wH, BRAND: lK.hE });
function lY(e) {
    return String(e);
}
let lJ = s.createContext({ activeDescendant: null, selected: new Set(), setSelected: () => null, itemToString: lY });
function lZ(e) {
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
            itemToString: f = lY,
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
        [T, R] = s.useState(null),
        k = s.useId(),
        I = s.useRef(null);
    s.useLayoutEffect(() => {
        let e = document.querySelector(`[${lX}="${T}"]`),
            t = I.current;
        null != t && null != e && t.scrollIntoViewNode({ node: e, padding: 12 });
    }, [T]);
    let M = n(C),
        _ = 0 === M.length,
        w = v ?? e$.intl.string(e$.t["4o4z3e"]),
        L = s.useId(),
        D = s.useCallback(
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
        F = (0, m.Ay)({ id: L, isEnabled: !0, useVirtualFocus: !0, scrollToStart: D, scrollToEnd: P, setFocus: O });
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
                    className: r()(lK.EA, o),
                    children: [
                        (0, i.jsx)("div", {
                            className: lK.wx,
                            children: (0, i.jsx)(lW.I, {
                                size: "sm",
                                autoFocus: x,
                                placeholder: t,
                                query: C,
                                onChange: E,
                                onKeyDown: s,
                                onBlur: () => R(null),
                                onClear: () => E(""),
                                inputProps: { "aria-multiline": !1, "aria-activedescendant": null != T ? T : void 0 },
                            }),
                        }),
                        (0, i.jsx)("div", {
                            children:
                                y &&
                                (_
                                    ? (0, i.jsxs)("div", {
                                          className: lK.Ie,
                                          children: [
                                              (0, i.jsx)(j.D, { variant: "heading-md/semibold", children: w }),
                                              (0, i.jsx)(N.E, {
                                                  color: "text-muted",
                                                  variant: "text-md/normal",
                                                  children: p ?? e$.intl.string(e$.t.QwSXv8),
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)(lJ.Provider, {
                                          value: { activeDescendant: T, selected: l, setSelected: a, itemToString: f },
                                          children: (0, i.jsx)(b.OZ, {
                                              ...u,
                                              style: { maxHeight: 46 * g },
                                              "aria-multiselectable": h,
                                              id: k,
                                              ref: I,
                                              className: r()(lK.p_, lK.XG, c),
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
let l0 = s.createContext(null);
function l1(e) {
    let { value: t, children: n, disabled: l = !1, selectedColor: a = lQ.STANDARD, ...o } = e,
        { activeDescendant: c, selected: d, setSelected: m, itemToString: h } = s.useContext(lJ),
        x = h(t),
        g = c === x,
        f = o?.selected ?? d.has(t),
        j = (0, u.rm)(x);
    return (0, i.jsx)(S.D, {
        tag: "li",
        id: x,
        onClick: () => (l ? null : m(t)),
        [lX]: t,
        className: r()(lK.AS, { [lK.in]: g, [a]: f, [lK.r9]: l }),
        ...j,
        role: "option",
        "aria-selected": f,
        "aria-disabled": l,
        children: (0, i.jsx)(l0.Provider, { value: t, children: n }),
    });
}
(l1.Colors = lQ),
    (l1.Label = function (e) {
        let { children: t } = e;
        return (0, i.jsx)("span", { className: lK.IR, children: t });
    }),
    (l1.Icon = function (e) {
        let { children: t } = e;
        return (0, i.jsx)("span", { className: lK.pp, children: t });
    }),
    (l1.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = s.useContext(lJ),
            l = s.useContext(l0);
        return (0, i.jsx)("span", {
            className: lK.pp,
            children: (0, i.jsx)(l$.P, { checked: t ?? (null != l && n.has(l)) }),
        });
    }),
    (l1.Checkmark = function () {
        let { selected: e } = s.useContext(lJ),
            t = s.useContext(l0);
        return e.has(t)
            ? (0, i.jsx)("span", {
                  className: lK.pp,
                  children: (0, i.jsx)(lq.y, { size: "custom", color: "currentColor", width: 20, height: 20 }),
              })
            : null;
    });
var l2 = n(305866),
    l4 = n(183610);
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
    return (0, i.jsx)(l2.l, {
        className: r()(l4.kL, l4.XG, c),
        children: (0, i.jsx)(lZ, {
            ...x,
            value: l,
            multiSelect: d,
            onChange: g,
            placeholder: n,
            children: t,
            listClassName: l4.p_,
            emptyStateText: u,
            emptyStateHeader: m,
            onQueryChange: h,
        }),
    });
}
var l3 = n(159273),
    l8 = n(6858);
let l5 = (e) => {
    let { tag: t } = e,
        { id: n, name: l, emojiId: s, emojiName: a } = t,
        r = (0, g.bG)([l3.Ay], () => (null != s ? l3.Ay.getUsableCustomEmojiById(s) : null)),
        o = null != s || null != a;
    return (0, i.jsx)(
        l1,
        {
            value: n,
            children: (0, i.jsx)(l1.Label, {
                children: (0, i.jsxs)("div", {
                    className: l8.nM,
                    children: [
                        o
                            ? (0, i.jsx)(t2.A, {
                                  className: l8.__invalid_emoji,
                                  emojiId: s,
                                  emojiName: a,
                                  animated: !!r?.animated,
                              })
                            : (0, i.jsx)(nF.g, { size: "md", color: "currentColor", className: l8.__invalid_emoji }),
                        (0, i.jsx)(N.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                    ],
                }),
            }),
        },
        n,
    );
};
function l9(e) {
    let { parentChannel: t, appliedTags: n, maxTagsApplied: l, onSelectTag: s, onClose: a } = e,
        r = (0, em.OT)(t);
    return (0, i.jsx)(l7, {
        value: n,
        onChange: (e) => {
            (!l || n.has(e)) && (s(e), a());
        },
        placeholder: e$.intl.string(e$.t.MbhGm7),
        "aria-label": e$.intl.string(e$.t.MbhGm7),
        children: (e) =>
            r.filter((t) => lV()(e.toLowerCase(), t.name.toLowerCase())).map((e) => (0, i.jsx)(l5, { tag: e }, e.id)),
    });
}
var l6 = n(879382),
    ie = n(376310),
    it = n(291747),
    il = n(935090);
let ii = (e) => {
    let { rateLimitPerUser: t, slowmodeCooldownGuess: n, isBypassSlowmode: l, leadingIcon: s = !1 } = e,
        a = (0, nX.VI)(t, !0),
        o = (0, nX.pS)(n, l),
        c = (0, i.jsx)(N.E, { variant: "text-sm/normal", color: "text-muted", children: o }),
        d = (0, i.jsx)(it.x, { size: "xs", color: "currentColor", className: r()(il.Eq, { [il.iE]: s }) });
    return (0, i.jsx)(K.m, {
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
let id = nG.oU.CREATE_FORUM_POST;
function iu(e) {
    var t, n;
    let l,
        a,
        { parentChannel: o, isSearchLoading: c, numResults: u, onChange: m, canCreatePost: h, inputRef: x } = e,
        f = !(0, B.V)(o) && h,
        {
            textAreaState: j,
            formOpen: p,
            previewing: v,
        } = (0, ej.kU)((e) => {
            let { textAreaState: t, formOpen: n, previewing: l } = e;
            return { textAreaState: t, formOpen: n, previewing: l };
        }, d.x),
        [A, C] = s.useState(null),
        b = s.useContext(ta.EH),
        N = s.useCallback(() => {
            b.bumpDispatchPriority();
        }, [b]),
        S = (0, g.bG)([eP.A], () => eP.A.can(eV.xBc.ATTACH_FILES, o)),
        E = (0, g.yK)([ts.A], () => ts.A.getUploads(o.id, tn.C.FirstThreadMessage)),
        y = p && S && f,
        T = o?.isMediaChannel() === !0,
        R =
            ((t = o),
            (n = x),
            (l = (0, ej.ST)()),
            (a = (0, em.Hv)(t)),
            s.useCallback(() => {
                let {
                    formOpen: e,
                    setFormOpenFromUserAction: i,
                    name: s,
                    textAreaState: r,
                    hasClickedForm: o,
                } = l.getState();
                !e &&
                    (setTimeout(() => {
                        (0, nM.vq)(n.current, HTMLTextAreaElement) && n.current?.focus();
                    }, 0),
                    ((o && s.length > 0) ||
                        (r.textValue.trim().length > 0 && r.textValue.trim() !== a) ||
                        ts.A.getUploads(t.id, tn.C.FirstThreadMessage).length > 0) &&
                        i());
            }, [l, t.id, a, n])),
        k = (function (e) {
            let { formOpen: t } = (0, ej.kU)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, d.x),
                n = (0, ej.ST)(),
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
                            (l = lM.A.getStickerPreview(e.id, id.drafts.type)?.map((e) => e.id)),
                        (null == i || 0 === i.length) && (i = ts.A.getUploads(e.id, tn.C.FirstThreadMessage)),
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
                        f = lH.A.hasSeen(e.id);
                    if (!u)
                        return (
                            (0, th.jr)({ guildId: e.guild_id, channelId: e.id }),
                            f || n.getState().setGuidelinesOpen(!0),
                            x(),
                            { shouldClear: !1, shouldRefocus: !1 }
                        );
                    let { content: j, stickers: p, uploads: v, hasNameError: A, hasMessageError: C } = i(t, s, a);
                    if (
                        (r(A ? lU(0, e$.intl.string(e$.t["71wuR0"])) : null),
                        o(C ? lU(0, e$.intl.string(e$.t["w/BT3G"])) : null),
                        A || C)
                    )
                        return { shouldClear: !1, shouldRefocus: !0 };
                    try {
                        c(!0);
                        let { valid: t } = await (0, lO.i)({
                            content: j,
                            stickers: p,
                            uploads: v,
                            type: id,
                            channel: e,
                        });
                        if (!t) return { shouldClear: !1, shouldRefocus: !0 };
                        let n = await l(j, p, v);
                        return (
                            (0, tt.JA)(n),
                            to.A.resort(e.id),
                            (0, l_.x5)(e.id, id.drafts.type),
                            d(),
                            m(!1),
                            h(!1),
                            lH.A.markAsSeen(e.id),
                            g(!1),
                            { shouldClear: !0, shouldRefocus: !1 }
                        );
                    } catch (t) {
                        return (
                            t.body?.code === eV.t02.AUTOMOD_TITLE_BLOCKED
                                ? r(lz(t.body, e))
                                : t.body?.code === eV.t02.AUTOMOD_MESSAGE_BLOCKED
                                  ? o(lz(t.body, e))
                                  : t.body?.code === eV.t02.INVALID_FORM_BODY &&
                                    t.body?.errors?.name != null &&
                                    r(lU(3, e$.intl.string(e$.t["71wuR0"]))),
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
                "aria-label": f ? e$.intl.string(e$.t.dq7mAa) : e$.intl.string(e$.t["5h0QOP"]),
                className: r()(ic.kL, { [ic.yZ]: !p }),
                onClick: !p && f ? R : void 0,
                children: (0, i.jsxs)("form", {
                    onMouseDown: N,
                    onFocus: N,
                    onSubmit: (e) => {
                        e.preventDefault(), f && k();
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
                                                submit: k,
                                                disabled: !f,
                                            }),
                                        v && (0, i.jsx)(ip, {}),
                                    ],
                                }),
                                y && (T ? (0, i.jsx)(lT, { parentChannel: o }) : (0, i.jsx)(li, { channelId: o.id })),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: ic.Zd,
                            children: [
                                y && T && (0, i.jsx)(la, { parentChannel: o }),
                                p && (0, i.jsx)(ib, { className: ic.CN, parentChannel: o, canCreatePost: f }),
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
            } = (0, ej.kU)((e) => {
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
            m = (0, ej.ST)(),
            h = (0, em.Hv)(t),
            x = s.useCallback(() => {
                m.getState().resetFormState(),
                    nU.A.clearDraft(t.id, tn.C.ThreadSettings),
                    nU.A.clearDraft(t.id, tn.C.FirstThreadMessage),
                    nz.A.clearAll(t.id, tn.C.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    l.current?.blur(),
                    (0, th.py)({ guildId: t.guild_id, channelId: t.id });
            }, [m, t.id, t.guild_id, l]),
            g = s.useMemo(
                () =>
                    !a &&
                    (r.trim().length > 0 ||
                        (o.textValue.trim().length > 0 && o.textValue.trim() !== h) ||
                        ts.A.getUploads(t.id, tn.C.FirstThreadMessage).length > 0) &&
                    c
                        ? (0, i.jsx)(nT.R, { size: "md", color: "currentColor", className: ic.rD })
                        : (0, i.jsx)(nw.B, { onClear: x, hasContent: a, isLoading: n || u, size: "md" }),
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
            } = (0, ej.kU)((e) => {
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
            f = (0, ej.ST)(),
            p = null != t.topic && 0 !== t.topic.length,
            v = lH.A.hasSeen(t.id),
            A = (0, em.Hv)(t),
            C = (0, g.bG)([eF.default], () => eF.default.getCurrentUser());
        W()(null != C, "current user cannot be null"),
            (0, ta.Vo)({
                event: eV.jej.FOCUS_COMPOSER_TITLE,
                handler: () => {
                    let e = n.current;
                    e?.focus(),
                        f.getState().setTitleFocused(!0),
                        f.getState().setFormOpen(!0),
                        f.getState().setHasClickedForm(!0);
                },
            });
        let b = s.useCallback(
                async (e) => {
                    let n = e.clipboardData.files[0];
                    null != n &&
                        n.type.startsWith("image/") &&
                        (e.preventDefault(),
                        await (0, n4.R)([n], t, tn.C.FirstThreadMessage, { origin: "clipboard" }),
                        f.getState().setFormOpenFromUserAction());
                },
                [t, f],
            ),
            N = lG(u, { content: m });
        return (0, i.jsxs)("div", {
            className: ic.gn,
            onPaste: b,
            children: [
                c && x
                    ? (0, i.jsx)(j.D, { variant: "heading-md/semibold", className: ic.DD, children: m })
                    : (0, i.jsxs)(tV.B, {
                          gap: 4,
                          children: [
                              (0, i.jsx)(n_.d, {
                                  value: m,
                                  placeholder:
                                      !l || t.isGameInvitesChannel()
                                          ? e$.intl.string(e$.t["5h0QOP"])
                                          : c || (h.textValue.length > 0 && h.textValue.trim() !== A)
                                            ? e$.intl.string(e$.t.lU4dDS)
                                            : e$.intl.string(e$.t.CjmivA),
                                  rows: 1,
                                  maxLength: eV.Ign,
                                  onChange: (e) => {
                                      let n = e.target.value,
                                          l = (0, lw.A)(n, !1);
                                      f.getState().setName(l);
                                      let i = 0 === l.trim().length,
                                          s = 0 === h.textValue.trim().length,
                                          a = h.textValue.trim() === A;
                                      i && (s || a) && f.getState().setHasClickedForm(!1),
                                          c || to.A.updateForumSearchQuery(t.id, l);
                                  },
                                  onFocus: () => {
                                      f.getState().setTitleFocused(!0), f.getState().setBodyFocused(!1);
                                  },
                                  onBlur: () => {
                                      f.getState().setTitleFocused(!1);
                                      let e = (0, lw.A)(m, !0);
                                      e !== m && (f.getState().setName(e), c || to.A.updateForumSearchQuery(t.id, e));
                                  },
                                  onKeyDown: (e) => {
                                      "Enter" === e.key &&
                                          (e.preventDefault(),
                                          e.stopPropagation(),
                                          c && m.length > 0
                                              ? a?.focus()
                                              : l && e.shiftKey
                                                ? ((0, th.sB)({ guildId: t.guild_id, channelId: t.id }),
                                                  p && !v && f.getState().setGuidelinesOpen(!0),
                                                  f.getState().setFormOpenFromUserAction(),
                                                  m.trim().length > 0 && (f.getState().setBodyFocused(!0), a?.focus()))
                                                : c ||
                                                  !(m.length > 0) ||
                                                  null != o ||
                                                  r ||
                                                  to.A.updateForumSearchQuery(t.id, m));
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
                              null != N ? (0, i.jsx)(nL.U, { error: N }) : null,
                          ],
                      }),
                c
                    ? null
                    : (0, i.jsxs)(tV.B, {
                          direction: "horizontal",
                          gap: 8,
                          justify: "end",
                          fullWidth: !1,
                          children: [
                              (0, i.jsx)(ix, { parentChannel: t }),
                              (0, i.jsx)(iN, { parentChannel: t, canCreatePost: l }),
                          ],
                      }),
            ],
        });
    });
function ix(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, ej.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, d.x),
        l = (0, ej.ST)();
    return null != t.topic && 0 !== t.topic.length
        ? (0, i.jsx)(K.m, {
              text: e$.intl.string(e$.t["4d4T4l"]),
              children: (0, i.jsx)(nD.K, {
                  size: "sm",
                  variant: "secondary",
                  onClick: () => {
                      l.getState().setGuidelinesOpen(!n);
                  },
                  icon: ny.B,
                  "aria-label": e$.intl.string(e$.t["4d4T4l"]),
              }),
          })
        : null;
}
let ig = s.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            l = new lD.Ay({ channel_id: t.id, content: n }),
            { content: s } = (0, lk.A)(l, {
                hideSimpleEmbedContent: !0,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0,
            }),
            a = (0, lI.A)({ message: l, channel: t, compact: !1 }, s, !1);
        return (0, i.jsx)("div", { className: r()(ic.SL, ic.ly), children: a });
    }),
    ij = s.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: l = !1, editorRef: a, setEditorRef: o } = e,
            c = (0, g.bG)([eF.default], () => eF.default.getCurrentUser());
        W()(null != c, "current user cannot be null");
        let {
                messageError: u,
                previewing: m,
                textAreaState: h,
                bodyFocused: x,
                formOpen: f,
            } = (0, ej.kU)((e) => {
                let { messageError: t, textAreaState: n, previewing: l, bodyFocused: i, formOpen: s } = e;
                return { messageError: t, textAreaState: n, previewing: l, bodyFocused: i, formOpen: s };
            }, d.x),
            j = (0, ej.ST)();
        s.useEffect(() => () => (0, th._4)({ guildId: t.guild_id, channelId: t.id }), [t.guild_id, t.id]);
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
        (0, ta.Vo)({ event: eV.jej.TEXTAREA_FOCUS, handler: p }),
            (0, ta.Vo)({ event: eV.jej.TEXTAREA_BLUR, handler: v });
        let b = lG(u, { content: h.textValue });
        return (0, i.jsx)("div", {
            className: ic.IP,
            children: (0, i.jsxs)("div", {
                className: ic.hQ,
                children: [
                    m
                        ? (0, i.jsx)(ig, { parentChannel: t, textValue: h.textValue })
                        : (0, i.jsx)("div", {
                              onClick: p,
                              children: (0, i.jsx)(nq.Ay, {
                                  type: id,
                                  setEditorRef: o,
                                  channel: t,
                                  placeholder: e$.intl.string(e$.t["8IPnv1"]),
                                  textValue: h.textValue,
                                  richValue: h.richValue,
                                  focused: x,
                                  className: ic.gM,
                                  innerClassName: r()(ic.SL, { [ic.cr]: null != b }),
                                  onChange: A,
                                  onSubmit: C,
                                  promptToUpload: n4.R,
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
                    (0, i.jsx)(nL.U, { error: b }),
                ],
            }),
        });
    });
function ip() {
    return (0, i.jsx)("div", {
        className: ic.fv,
        children: (0, i.jsx)(N.E, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: e$.intl.string(e$.t["WE/cYo"]),
        }),
    });
}
function iv(e) {
    let { textAreaState: t } = (0, ej.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        n = (0, g.yK)([ts.A], () => ts.A.getUploads(e.id, tn.C.FirstThreadMessage));
    return s.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n]);
}
function iA(e) {
    let t = iv(e),
        { appliedTags: n, name: l } = (0, ej.kU)((e) => {
            let { appliedTags: t, name: n } = e;
            return { appliedTags: t, name: n };
        }, d.x);
    return s.useMemo(() => e.hasFlag(io.lx.REQUIRE_TAG) && 0 === n.size && l.length > 0 && t, [n, l, e, t]);
}
function iC() {
    let { previewing: e } = (0, ej.kU)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, d.x),
        t = (0, ej.ST)(),
        n = s.useCallback(() => {
            t.getState().setPreviewing(!e), (0, th.Q_)();
        }, [e, t]),
        l = e ? e$.intl.string(e$.t.ojM1xJ) : e$.intl.string(e$.t.SKNnqq);
    return (0, i.jsx)(K.m, {
        text: l,
        children: (0, i.jsx)(nD.K, {
            variant: "secondary",
            size: "sm",
            onClick: n,
            icon: e ? nP.G : nO.b,
            "aria-label": l,
        }),
    });
}
let ib = s.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: l } = e,
        { textAreaState: a, name: r } = (0, ej.kU)((e) => {
            let { textAreaState: t, name: n } = e;
            return { textAreaState: t, name: n };
        }, d.x),
        { rateLimitPerUser: o } = t,
        c = o > 0,
        u = (0, g.bG)([lP.A], () => lP.A.getSlowmodeCooldownGuess(t.id, lP.R.CreateThread)),
        m = (0, nX._i)(t, lP.R.CreateThread),
        h = iA(t),
        x = (0, ej.ST)(),
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
                                        (0, i.jsx)(nK.A, { type: id, textValue: a.textValue, className: ic.Dq }),
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
                                (0, i.jsx)(iN, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: c && !m && u > 0,
                                }),
                            ],
                        }),
                        (0, i.jsx)(n$, { type: id, className: ic.n1, onClick: f, channel: t }, "expression"),
                    ],
                }),
                h &&
                    (0, i.jsx)(N.E, {
                        variant: "text-sm/medium",
                        color: "text-feedback-critical",
                        className: ic.ku,
                        children: e$.intl.string(e$.t.xPfNQi),
                    }),
            ],
        })
    );
});
function iN(e) {
    let { parentChannel: t, canCreatePost: l, disabled: a, disableIfInvalid: r = !1 } = e,
        o = (0, B.V)(t),
        c = t.isGameInvitesChannel(),
        {
            submitting: u,
            name: m,
            formOpen: h,
        } = (0, ej.kU)((e) => {
            let { submitting: t, name: n, formOpen: l } = e;
            return { submitting: t, name: n, formOpen: l };
        }, d.x),
        x = iv(t),
        g = !iA(t) && x && m.trim().length > 0,
        f = s.useCallback(() => {
            (0, tf.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 879382));
                    return (n) => (0, i.jsx)(e, { ...n, parentChannel: t });
                },
                { modalKey: l6.$ },
            );
        }, [t]);
    return __OVERLAY__ || o
        ? null
        : (0, i.jsx)(tM.$, {
              variant: "primary",
              type: c ? "button" : "submit",
              size: "sm",
              loading: u,
              disabled: !0 === a || !l || (!c && r && !g),
              icon: en.o,
              text: h ? e$.intl.string(e$.t.pIuQI6) : e$.intl.string(e$.t.TyAuoT),
              onClick: c ? f : void 0,
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
        } = (0, ej.kU)((e) => {
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
        A = (0, em.OT)(t),
        [C, b] = s.useState(0);
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
            b(l);
        }
    }, [A, p, x, g]),
    0 === A.length)
        ? null
        : (0, i.jsxs)("div", {
              className: ic.Pc,
              ref: x,
              children: [
                  (0, i.jsx)(nF.g, { size: "xs", color: "currentColor", className: ic.HZ }),
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
                                                  ariaLabel: e$.intl.formatToPlainString(e$.t.FSZVIR, {
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
                      (0, i.jsx)(T.Y, {
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
                                  children: (0, i.jsx)(tM.$, {
                                      ...e,
                                      size: "sm",
                                      variant: "secondary",
                                      icon: k.a,
                                      iconPosition: "end",
                                      text: e$.intl.string(e$.t.w6T0Yc),
                                  }),
                              }),
                      }),
                  (0, i.jsx)("div", {
                      className: r()(ic.Wk, ic.Dz),
                      children: (0, i.jsx)(tM.$, {
                          size: "sm",
                          variant: "secondary",
                          icon: k.a,
                          iconPosition: "end",
                          text: e$.intl.string(e$.t.w6T0Yc),
                      }),
                  }),
              ],
          });
}
var iy = n(602137),
    iT = n(782134),
    iR = n(391242),
    ik = n(191023),
    iI = n(234914),
    iM = n(930125),
    i_ = n(282108),
    iw = n(291812),
    iL = n(994500),
    iD =
        (((l = {})[(l.THREE_BY_TWO = 2 / 3)] = "THREE_BY_TWO"),
        (l[(l.SIXTEEN_BY_NINE = 9 / 16)] = "SIXTEEN_BY_NINE"),
        l);
let iP = { columns: 1, columnWidth: 450 },
    iO = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iD.THREE_BY_TWO,
            n = e - 2,
            l = Math.ceil(n * t);
        return [n, l];
    },
    iF = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iD.THREE_BY_TWO;
        return 60 + iO(e - 24, t)[1] + 24 + 36;
    };
var iU = n(313880),
    iz = n(461771),
    iG = n(602034);
let iH = "data-grid-item-id",
    iB = "data-grid-section",
    iV = "data-grid-prev-section-boundary",
    iW = new Set([h.D$.UP, h.D$.DOWN, h.D$.LEFT, h.D$.RIGHT]);
function i$(e) {
    let { section: t, column: n, row: l } = e,
        i = `[${iB}="${t}"]`,
        s = `[aria-colindex="${n}"]`,
        a = `[aria-rowindex="${l}"]`;
    return `${i}${s}${a}`;
}
let iq = { id: "NO_LIST", onKeyDown() {}, ref: s.createRef() },
    iK = s.createContext({ id: "NO_LIST", setFocus() {} }),
    iX = s.createContext(iq);
function iQ(e) {
    let { children: t, navigator: n } = e,
        {
            id: l,
            setFocus: a,
            containerProps: { onKeyDown: r, ref: o },
        } = n,
        c = s.useMemo(() => ({ id: l, setFocus: a }), [l, a]),
        d = s.useMemo(() => ({ onKeyDown: r, ref: o, id: l }), [r, o, l]);
    return (0, i.jsx)(iX.Provider, { value: d, children: (0, i.jsx)(iK.Provider, { value: c, children: t }) });
}
var iY = n(15175);
let iJ = s.memo(function (e) {
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
        u = (0, g.bG)([eL.A], () => eL.A.getChannel(n));
    return null == u
        ? null
        : (0, i.jsx)(iZ, {
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
function iZ(e) {
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
        f = (0, g.bG)([ew.Ay], () => ew.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: v, loaded: A } = (0, eh.OA)(n),
        C = (0, D.Ay)(n),
        { messageCountText: b } = (0, em.k6)(n),
        { isNew: E, hasUnreads: y } = (0, em.X5)(n),
        T = s.useRef(null),
        { handleLeftClick: R, handleRightClick: k } = (0, eA.A)({ facepileRef: T, goToThread: l, channel: n });
    s.useEffect(() => {
        m?.(x.current, h);
    }, [m, h]);
    let I = (0, em.Mw)(n, iy.T.CREATION_DATE, nx.EG.POSTED_DURATION_AGO),
        M = (0, tq.hf)(n),
        { onFocus: _, ...w } = (function (e) {
            let { id: t, section: n, row: l, column: i, boundaries: a } = e,
                [r, o] = s.useState(0 === l && 0 === i ? 0 : -1),
                { id: c, setFocus: d } = s.useContext(iK),
                u = s.useCallback(() => d(t), [t, d]);
            return (
                s.useLayoutEffect(
                    () =>
                        (0, iz.e)(c, (e) => {
                            o(e === t ? 0 : -1);
                        }),
                    [t, c],
                ),
                {
                    [iH]: (0, iG.t$)(c, t),
                    [iB]: n,
                    [iV]: a[n],
                    role: "gridcell",
                    "aria-rowindex": l,
                    "aria-colindex": i,
                    tabIndex: r,
                    onFocus: u,
                }
            );
        })({ id: t, row: d.row, column: d.column, section: d.section, boundaries: u });
    return (0, i.jsxs)("li", {
        ref: x,
        onClick: R,
        onFocus: _,
        onContextMenu: k,
        className: r()(iY.kL, o, { [iY.nT]: f }),
        style: { ...c },
        children: [
            (0, i.jsx)(S.D, {
                onClick: R,
                focusProps: { ringTarget: x },
                onContextMenu: k,
                "aria-label": e$.intl.formatToPlainString(e$.t.pgYN6c, { title: C ?? "", count: b }),
                className: iY.Kv,
                ...w,
            }),
            (0, i.jsxs)("div", {
                className: iY.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: iY.Y6,
                        children: [
                            (0, i.jsxs)("div", {
                                className: iY.wO,
                                children: [
                                    (0, i.jsx)(iU.A, { channel: n, message: v }),
                                    (0, i.jsx)(N.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        className: iY.SD,
                                        children: I,
                                    }),
                                ],
                            }),
                            E
                                ? (0, i.jsx)(Z.Lp, {
                                      className: iY.Ad,
                                      color: ee.A.unsafe_rawColors.BRAND_260.css,
                                      text: e$.intl.string(e$.t.y2b7CA),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(p.F, {
                        children: (0, i.jsx)(j.D, {
                            variant: "heading-md/extrabold",
                            className: iY.DD,
                            color: y ? "text-strong" : "text-muted",
                            style: { width: `${c.width - 24}px` },
                            children: M,
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: iY.PU,
                children: (0, i.jsx)(X.M, {
                    children: (0, i.jsx)(i0, {
                        channel: n,
                        firstMessage: v,
                        isFirstMessageLoaded: A,
                        overrideMedia: a,
                        coords: c,
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: iY.qr,
                children: (0, i.jsx)(X.M, {
                    children: (0, i.jsx)(i2, { channel: n, firstMessage: v, facepileRef: T }),
                }),
            }),
        ],
    });
}
function i0(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a } = e,
        { isBlocked: r, isIgnored: o } = (0, g.cf)([iL.A], () => ({
            isBlocked: null != n && iL.A.isBlockedForMessage(n),
            isIgnored: null != n && iL.A.isIgnoredForMessage(n),
        }));
    return r
        ? (0, i.jsx)(i9, { message: e$.intl.string(e$.t.Lkp2fB), containerWidth: a.width, channel: t })
        : o
          ? (0, i.jsx)(i9, { message: e$.intl.string(e$.t.yWK7ZM), containerWidth: a.width, channel: t })
          : (0, i.jsx)(i1, { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a });
}
function i1(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a } = e,
        r = (0, g.bG)([eL.A], () => eL.A.getChannel(t.parent_id)),
        { firstMedia: o } = (0, em.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !1 }),
        { hasUnreads: c } = (0, em.X5)(t),
        d = (0, g.bG)([eP.A], () => eP.A.can(eV.xBc.MANAGE_MESSAGES, t)),
        u = e_.kt.useSetting(),
        m = e_.gs.useSetting(),
        h = (0, eE.A)(m, d),
        x = (0, ex.no)(n, r, !1),
        f = t.isMediaPost(),
        [j, p] = iO(a.width - 24, f ? iD.SIXTEEN_BY_NINE : iD.THREE_BY_TWO);
    return n?.blocked || null == (s ?? o)
        ? (0, i.jsx)(i5, {
              channel: t,
              firstMessage: n,
              isFirstMessageLoaded: l,
              containerWidth: a.width,
              hasUnreads: c,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(i3, {
                      mediaAttachments: x,
                      globalSpoilerRenderSetting: h,
                      containerWidth: j,
                      containerHeight: p,
                      canAutoPlay: u,
                      shouldMaintainAspectRatio: f,
                  }),
                  (0, i.jsx)("div", {
                      className: iY.GA,
                      children: (0, i.jsx)(ep.Ay, { channel: t, tagsClassName: iY.uU }),
                  }),
              ],
          });
}
function i2(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        s = (0, ec.m)(t.id),
        a = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: iY.GD,
        children: [
            (0, i.jsxs)("div", {
                className: iY.QW,
                children: [
                    (0, i.jsx)("div", {
                        className: iY.mz,
                        children: (0, i.jsx)(tq.$k, { channel: t, iconSize: 16, showReadState: !0 }),
                    }),
                    s.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("span", { className: iY.xE, children: "\u2022" }),
                                  (0, i.jsxs)("div", {
                                      className: iY.IW,
                                      children: [
                                          (0, i.jsx)(tq.gL, { channel: t, userIds: s, facepileRef: n }),
                                          (0, i.jsx)("div", {
                                              className: iY.r$,
                                              children: (0, i.jsx)(et.n, { themed: !0, dotRadius: 2 }),
                                          }),
                                          (0, i.jsx)(ei.Ay, { channel: t, className: iY.mD, renderDots: !1 }),
                                      ],
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: iY.QW,
                children: [
                    a || null == l ? null : (0, i.jsx)(tq.NA, { firstMessage: l, channel: t }),
                    null == l ? null : (0, i.jsx)(tq.cn, { firstMessage: l, channel: t }),
                ],
            }),
        ],
    });
}
let i4 = (e) => e.preventDefault(),
    i7 = s.memo(function (e) {
        return (0, i.jsx)(i.Fragment, {
            children: (0, eR.LL)({ ...e, analyticsSource: "ForumPostMediaPreviewImage" }),
        });
    }),
    i3 = s.memo(function (e) {
        let {
                mediaAttachments: t,
                globalSpoilerRenderSetting: n,
                containerWidth: l,
                containerHeight: a,
                canAutoPlay: o,
                shouldMaintainAspectRatio: c = !1,
            } = e,
            { containsVideo: d, containsGif: u } = s.useMemo(() => (0, ex.$2)(t), [t]),
            m = s.useMemo(() => t.slice(0, 4), [t]),
            h = lf({ numAttachments: m.length, containerWidth: l, containerHeight: a }),
            x = (function (e) {
                let { imageContainerStyles: t, containerWidth: n, containerHeight: l } = e,
                    i = s.useRef(lj(t)),
                    a = s.useRef(n),
                    r = s.useRef(l),
                    o = n > a.current + 100,
                    c = l > r.current + 100;
                return (o || c) && (i.current = lj(t)), i.current;
            })({ imageContainerStyles: h, containerWidth: l, containerHeight: a }),
            g = (0, i_.O8)(iM.v.GUILD),
            f = s.useMemo(
                () =>
                    m.map((e, t) => {
                        let [l, s] = (0, eN.K6)(e, !n, g),
                            a = (0, eN.rx)(s),
                            m = {
                                ...x[t],
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && l ? a : e.alt,
                                onClick: i4,
                                shouldRenderAccessory: !u && !d,
                            },
                            f = (0, eb.ge)(e.src) ? `${e.src}?format=png` : e.src,
                            j = o && !l ? e.src : f;
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: iY.UV,
                                style: h[t],
                                children: [
                                    c
                                        ? (0, i.jsx)(iI.A, {
                                              ...m,
                                              src: j,
                                              backgroundSrc: f,
                                              aspectRatio: m.maxWidth / m.maxHeight,
                                              alt: m.alt ?? "",
                                              className: r()(iY.EN, { [iY.cd]: l }),
                                              imageChildClassName: iY.Rp,
                                          })
                                        : e.src.startsWith("data:")
                                          ? (0, i.jsx)(el._, {
                                                ...m,
                                                className: iY.il,
                                                imageClassName: r()(iY.LW, { [iY.cd]: l }),
                                            })
                                          : (0, i.jsx)(i7, {
                                                ...m,
                                                autoPlay: o && !l,
                                                containerClassName: iY.EK,
                                                imageClassName: r()(iY.rp, { [iY.cd]: l }),
                                                responsive: !0,
                                            }),
                                    l &&
                                        (0, i.jsx)("div", {
                                            className: iY.X,
                                            children: (0, i.jsx)(ef.A, { obscureReason: s, iconClassname: iY.yo }),
                                        }),
                                ],
                            },
                            e.src,
                        );
                    }),
                [o, u, d, n, h, x, m, c, g],
            );
        return (0, i.jsxs)("div", {
            className: iY.pV,
            style: { width: l, height: a },
            children: [
                f,
                (u || d) &&
                    (0, i.jsxs)("div", {
                        className: iY.vz,
                        children: [
                            d &&
                                (0, i.jsx)(iT.u, {
                                    color: "currentColor",
                                    size: "custom",
                                    width: 22,
                                    height: 22,
                                    className: iY.cU,
                                }),
                            u &&
                                (0, i.jsx)(iR.O, {
                                    size: "custom",
                                    width: 29,
                                    height: 29,
                                    color: "currentColor",
                                    className: iY.cU,
                                }),
                        ],
                    }),
                t.length > 4 &&
                    (0, i.jsx)(i8, {
                        text: (t.length - 4).toString(),
                        icon: ik.x,
                        pillClassName: iY.v3,
                        iconClassName: iY.In,
                        textClassName: iY.EY,
                    }),
            ],
        });
    });
function i8(e) {
    let { text: t, icon: n, pillClassName: l, iconClassName: s, textClassName: a } = e;
    return (0, i.jsxs)("div", {
        className: l,
        children: [
            (0, i.jsx)(n, { className: s, color: "currentColor" }),
            (0, i.jsxs)(N.E, { variant: "text-xs/medium", className: a, children: ["+", t] }),
        ],
    });
}
function i5(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, containerWidth: a, hasUnreads: o } = e,
        c = e_.hH.useSetting(),
        [d, u] = iO(a - 24),
        { content: m } = (0, em.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !0 }),
        { shouldRenderTagsRow: h } = (0, ep.BA)({ channel: t, isNew: !1 }),
        x = s.useMemo(() => ({ width: d, height: u }), [d, u]),
        g = o ? iY.kR : iY.b8;
    return (0, i.jsxs)("div", {
        className: iY.Cv,
        style: x,
        children: [
            (0, i.jsxs)("div", {
                className: iY.Qs,
                children: [
                    l &&
                        null == n &&
                        (0, i.jsx)(N.E, {
                            variant: "text-sm/normal",
                            color: o ? "text-default" : "text-muted",
                            children: e$.intl.string(e$.t.mE3KJN),
                        }),
                    l && null != n && (0, i.jsx)(iw.Ay, { message: n, content: m, className: g, compact: c }),
                ],
            }),
            (0, i.jsx)("div", {
                className: r()(iY.kh, { [iY.ZH]: !h }),
                children: h ? (0, i.jsx)(ep.Ay, { channel: t, tagsClassName: iY.uU }) : null,
            }),
        ],
    });
}
function i9(e) {
    let { message: t, containerWidth: n, channel: l } = e,
        [a, o] = iO(n - 24),
        { shouldRenderTagsRow: c } = (0, ep.BA)({ channel: l, isNew: !1 }),
        d = s.useMemo(() => ({ width: a, height: o }), [a, o]);
    return (0, i.jsxs)("div", {
        className: iY.Cv,
        style: d,
        children: [
            (0, i.jsx)("div", {
                className: iY.Qs,
                children: (0, i.jsx)(N.E, {
                    className: iY.Wv,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: t,
                }),
            }),
            (0, i.jsx)("div", {
                className: r()(iY.kh, { [iY.ZH]: !c }),
                children: c ? (0, i.jsx)(ep.Ay, { channel: l, tagsClassName: iY.uU }) : null,
            }),
        ],
    });
}
var i6 = n(392421),
    se = n(980707),
    st = n(477782),
    sn = n(901713);
function sl(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: l, layoutType: s, tagSetting: a } = (0, eu.R)(t.id),
        { showResolvedFlags: r, setShowResolvedFlags: o } = (0, G.T)(t.id),
        c = (0, eu.p)(),
        d = t.isMediaChannel(),
        u = (e) => {
            (0, th.Cd)({ guildId: t.guild_id, channelId: t.id, sortOrder: e }), c.getState().setSortOrder(t.id, e), n();
        },
        m = (e) => {
            (0, th.ad)({ guildId: t.guild_id, channelId: t.id, forumLayout: e }),
                c.getState().setLayoutType(t.id, e),
                n();
        },
        h = (e) => {
            c.getState().setTagSetting(t.id, e), n();
        },
        g = null != t.availableTags && t.availableTags.length > 0;
    return (0, i.jsx)("div", {
        className: sn.k,
        children: (0, i.jsxs)(se.W, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": d ? e$.intl.string(e$.t["kQN/bi"]) : e$.intl.string(e$.t.DJzbkL),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, i.jsxs)(st.rX, {
                    label: e$.intl.string(e$.t.f8wNDl),
                    children: [
                        (0, i.jsx)(st.iD, {
                            id: "sort-by-recent-activity",
                            group: "sort-by",
                            label: e$.intl.string(e$.t.jOPmcI),
                            action: () => u(iy.T.LATEST_ACTIVITY),
                            checked: l === iy.T.LATEST_ACTIVITY,
                        }),
                        (0, i.jsx)(st.iD, {
                            id: "sort-by-date-posted",
                            group: "sort-by",
                            label: e$.intl.string(e$.t.UIltXd),
                            action: () => u(iy.T.CREATION_DATE),
                            checked: l === iy.T.CREATION_DATE,
                        }),
                    ],
                }),
                t.isModeratorReportChannel() &&
                    (0, i.jsx)(st.rX, {
                        label: e$.intl.string(tX.default.PsM2b4),
                        children: (0, i.jsx)(st.sL, {
                            id: "resolved-flags-none",
                            label: e$.intl.string(e$.t.XJuakA),
                            action: () => o(!r),
                            checked: r,
                        }),
                    }),
                t.isMediaChannel() || t.isModeratorReportChannel()
                    ? null
                    : (0, i.jsxs)(st.rX, {
                          label: e$.intl.string(e$.t.mFMDSq),
                          children: [
                              (0, i.jsx)(st.iD, {
                                  id: "view-as-list",
                                  group: "view-as",
                                  label: e$.intl.string(e$.t["NJFr+g"]),
                                  action: () => m(x.C.LIST),
                                  checked: s === x.C.LIST,
                              }),
                              (0, i.jsx)(st.iD, {
                                  id: "view-as-grid",
                                  group: "view-as",
                                  label: e$.intl.string(e$.t.wKeggb),
                                  action: () => m(x.C.GRID),
                                  checked: s === x.C.GRID,
                              }),
                          ],
                      }),
                g
                    ? (0, i.jsxs)(st.rX, {
                          label: e$.intl.string(e$.t.Paxaug),
                          children: [
                              (0, i.jsx)(st.iD, {
                                  id: "match-some",
                                  group: "tag-setting",
                                  label: e$.intl.string(e$.t.rQ0ctQ),
                                  action: () => h(i6.n.MATCH_SOME),
                                  checked: a === i6.n.MATCH_SOME,
                              }),
                              (0, i.jsx)(st.iD, {
                                  id: "match-all",
                                  group: "tag-setting",
                                  label: e$.intl.string(e$.t.FCXUu0),
                                  action: () => h(i6.n.MATCH_ALL),
                                  checked: a === i6.n.MATCH_ALL,
                              }),
                          ],
                      })
                    : null,
                (0, i.jsx)(st.rX, {
                    children: (0, i.jsx)(st.Dr, {
                        id: "reset-all",
                        label: e$.intl.string(e$.t["3b//lO"]),
                        action: () => {
                            u(t.getDefaultSortOrder()), m(t.getDefaultLayout()), h(t.getDefaultTagSetting());
                        },
                    }),
                }),
            ],
        }),
    });
}
var si = n(123292);
function ss() {
    return Promise.resolve();
}
function sa(e) {
    let { channel: t, closePopout: n, setPopoutRef: l } = e,
        a = (0, em.OT)(t),
        { tagFilter: r } = (0, eu.R)(t.id),
        o = (0, eu.p)(),
        c = (0, g.bG)([L.A], () => L.A.keyboardModeEnabled),
        d = s.useCallback(
            (e) => {
                (0, th.UA)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    tagId: e,
                    filterTagIds: Array.from(r),
                    added: !r.has(e),
                    location: {
                        page: eV.liQ.GUILD_CHANNEL,
                        section: eV.JJy.FORUM_CHANNEL_HEADER,
                        object: eV.ZSU.CHANNEL_TAG,
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
            scrollToStart: ss,
            scrollToEnd: ss,
        }),
        f = s.useRef(null);
    return (
        s.useEffect(() => {
            requestAnimationFrame(() => {
                if (null != f.current) {
                    let e = f.current.querySelector(`.${l8.Tc}`);
                    null != e && e.focus();
                }
            });
        }, []),
        (0, i.jsxs)(l2.l, {
            ref: (e) => {
                l?.(e);
            },
            "aria-label": e$.intl.string(e$.t.TdqRTh),
            className: l8.kL,
            children: [
                (0, i.jsx)("div", {
                    className: l8.wx,
                    children: (0, i.jsxs)("div", {
                        className: l8.LD,
                        children: [
                            (0, i.jsx)(j.D, {
                                color: "interactive-text-default",
                                variant: "heading-md/semibold",
                                className: l8.TK,
                                children: e$.intl.string(e$.t.HPu3kq),
                            }),
                            (0, i.jsx)("div", {
                                className: l8.d1,
                                children: (0, i.jsx)(N.E, {
                                    className: l8.lT,
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
                                className: l8.I8,
                                children: a.map((e) =>
                                    (0, i.jsx)(
                                        ie.A,
                                        { className: l8.Tc, tag: e, selected: r.has(e.id), onClick: () => d(e.id) },
                                        e.id,
                                    ),
                                ),
                            });
                        },
                    }),
                }),
                (0, i.jsx)("div", { className: l8.me }),
                (0, i.jsx)(si.Q, {
                    "aria-label": e$.intl.string(e$.t["98EPQP"]),
                    onClick: h,
                    text: e$.intl.string(e$.t["98EPQP"]),
                }),
            ],
        })
    );
}
var sr = n(37411);
function so(e) {
    let { channel: t, guild: n, sidebarState: l } = e;
    return (0, i.jsx)(ej.Cp, { channel: t, children: (0, i.jsx)(sg, { channel: t, guild: n, sidebarState: l }) }, t.id);
}
let sc = new (class {
    minWidth;
    maxWidth;
    gap;
    constructor({ minWidth: e, maxWidth: t, gap: n }) {
        W()(e < t, "minWidth needs to be smaller than maxWidth"),
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
function sd(e) {
    return `forum-grid-header-section-${e}`;
}
function su(e) {
    let { itemRole: t, coords: n, section: l } = e;
    return (0, i.jsx)(
        "div",
        {
            className: r()(tY.card, tY.archivedDividerRow, tY.columnsSpan),
            style: n,
            "data-item-role": t,
            children: (0, i.jsx)("div", {
                className: tY.emptyMainCard,
                children: (0, i.jsx)(j.D, {
                    variant: "eyebrow",
                    className: tY.archivedDivider,
                    id: sd(l),
                    children: e$.intl.string(e$.t["3+LO1w"]),
                }),
            }),
        },
        "section-divider",
    );
}
function sm(e) {
    let { section: t, coords: n, key: l, isShowingSearchResult: s, hasActiveThreads: a } = e;
    return () =>
        2 === t && !s && a
            ? (0, i.jsx)(
                  su,
                  { section: t, coords: null == n ? void 0 : { ...n, position: "absolute" }, itemRole: "section" },
                  l,
              )
            : null;
}
function sh(e, t) {
    return `card-${e}-${t}`;
}
function sx(e) {
    if ("string" == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function sg(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: l,
            editorAdditionRowHeight: a,
            listViewCardHeights: o,
            formOpen: c,
            name: f,
        } = (0, ej.kU)((e) => {
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
            searchResults: S,
            canLoadMore: E,
            loadMore: y,
            activeThreadsLoading: T,
            archivedThreadsLoading: R,
            loading: k,
            isSearchLoading: I,
            layoutType: _,
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: l, tagSetting: i } = (0, eu.R)(e.id),
                s = (0, em.V3)({ channel: e, sortOrder: t, tagFilter: n, tagSetting: i, shouldAutomaticallyAck: !0 }),
                a = (0, g.bG)([e9.A, F.A], () => {
                    let t = e9.A.hasLoaded(e.guild_id),
                        n = F.A.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: r, canLoadMore: o, loadMore: c, loading: d } = (0, e6.Fr)(e, t, n, i),
                { searchResults: u, isSearchLoading: m } = (0, em.cA)({ channelId: e.id });
            return (
                (0, em.yz)(e, t, n, i),
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
        D = j.length > 0,
        P = D || N.length > 0,
        O = (0, U.A)(t),
        { tagFilter: B, tagSetting: V } = (0, eu.R)(t.id);
    (0, em.o7)(t, B, V, c),
        (0, w.Ay)(() => {
            !c && f.length > 0 && to.A.updateForumSearchQuery(t.id, f);
        });
    let W = (0, em.O3)(t),
        $ = (0, em.An)(t),
        q = s.useRef(null),
        { observePostVisibilityAnalytics: K } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: l } = e;
            tm({ guildId: t, channelId: n });
            let i = s.useRef(null),
                a = s.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let l = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, tu.xx)(e, t, l) : (0, tu.O_)(e, t, l);
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
                            null == e ? (0, tu.O_)(n, t, Date.now()) : i.current?.observe(e);
                        },
                        [n],
                    ),
                }
            );
        })({ scrollerRef: q, channelId: t.id, guildId: t.guild_id }),
        X = _ === x.C.GRID,
        { searchQuery: Q } = (0, em.cA)({ channelId: t.id }),
        Y = null != S && null != Q && Q.length > 0,
        J = s.useRef(null),
        { containerRef: Z, containerWidth: ee } = ir();
    s.useEffect(() => {
        if (null == J.current && null != t.id) {
            let e = ew.Ay.getSidebarState(t.id);
            null != e && e.type === e5.PE.VIEW_THREAD && (J.current = e.channelId);
        }
    }, [t.id]);
    let { columns: et } = s.useMemo(() => (X ? sc.getRenderOptions(ee) : iP), [X, ee]),
        en = s.useMemo(() => (k ? Math.round((window.innerHeight - 200) / 118) : 0), [k]),
        { showResolvedFlags: el } = (0, G.T)(t.id),
        ei = t.isModeratorReportChannel(),
        es = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iF(sc.getWidth(ee))) * et;
            return T ? e : 0;
        }, [ee, et, T]),
        ea = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iF(sc.getWidth(ee))) * et;
            return R ? e : 0;
        }, [ee, et, R]),
        er = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iF(sc.getWidth(ee))) * et;
            return I && Y ? e : 0;
        }, [ee, et, I, Y]),
        eo = s.useMemo(() => {
            if (X)
                if (!W && Y) return [1, 0];
                else if (!$) return [1, j.length + es, 0];
                else if (Y) return [1, S.length + er, 0];
                else if (ei && !el) return [1, j.length + es, 0];
                else return [1, j.length + es, N.length + ea];
            if (!W && Y) return [1, 1];
            if (!$) return [1, j.length, 1];
            if (Y) return [1, S.length, 0, en];
            if (ei && !el) return [1, j.length, 0, en];
            else return [1, j.length, N.length, en];
        }, [X, Y, j.length, N.length, W, $, en, S, es, ea, er, el, ei]),
        ec = s.useMemo(
            () =>
                !W && Y
                    ? [[], []]
                    : $
                      ? Y
                          ? [[], S, [], []]
                          : ei && !el
                            ? [[], j, [], []]
                            : [[], j, N, []]
                      : [[], j, []],
            [Y, W, $, S, j, N, el, ei],
        ),
        ed = s.useCallback(
            (e, n) => {
                (0, th.Ml)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: { page: eV.liQ.GUILD_CHANNEL, section: eV.JJy.FORUM_CHANNEL_POST },
                }),
                    n ? (0, e8.N9)(e, { source: sr.H9.BROWSER }) : ((J.current = e.id), (0, tt.JA)(e));
            },
            [t.guild_id, t.id, J],
        ),
        [eh, ex] = s.useState(l + a - 24),
        eg = s.useCallback(
            (e, n, l) =>
                0 === e
                    ? (0, i.jsx)(
                          sA,
                          {
                              channel: t,
                              isEmpty: !D,
                              isSearchLoading: I,
                              numResults: S?.length,
                              coords: n,
                              onHeightChange: ex,
                              children:
                                  !k && (0, i.jsx)(nS, { channel: t, hasAnyThread: P, hasActiveThreads: D }, t.id),
                          },
                          "forum-channel-header",
                      )
                    : 2 !== e || $
                      ? 1 === e && Y && !W
                          ? (0, i.jsx)(sj, { channel: t, coords: n }, "archive-or-search-result")
                          : l()
                      : (0, i.jsx)(sf, { channel: t, coords: n }, "archived-missing-reading-history-perm"),
            [Y, $, S, W, t, D, I, k, P],
        ),
        ef = (0, g.bG)([tr.A], () => tr.A.hasHidden(t.id)),
        ep = { editorHeight: l, isGridLayout: X },
        ev = s.useRef(ep);
    s.useEffect(() => {
        ev.current = ep;
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
            renderListItem: eb,
            getListSectionHeight: eN,
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
                x = (0, g.bG)([ti.A], () => ti.A.getChannelId()),
                f = s.useCallback(
                    (e) => (n) => {
                        (t.current = n), (e.current = n?.getScrollerNode() ?? null);
                    },
                    [t],
                ),
                j = s.useCallback(
                    (e) => sm({ section: e.section, isShowingSearchResult: h, hasActiveThreads: n })(),
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
                                              className: r()(tY.loadingCard, tY[`loadingCard-${e.row % 3}`]),
                                          },
                                          `loading-${e.row}`,
                                      );
                            let t = l[e.section][e.row],
                                n = null != x && (0, H.iU)(x) ? eQ : tq.Ay;
                            return (0, i.jsx)(
                                "li",
                                {
                                    className: tY.card,
                                    "data-item-role": "item",
                                    children: (0, i.jsx)(p.F, {
                                        children: (0, i.jsx)(n, {
                                            className: tY.mainCard,
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
            hasActiveThreads: D,
            threadIdsBySection: ec,
            listViewCardHeights: o,
            editorHeight: l,
            editorAdditionRowHeight: a,
            renderSectionOrItem: eg,
            goToThread: ed,
            observePostVisibilityAnalytics: K,
            isShowingSearchResult: Y,
        }),
        eE = s.useRef(null),
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
                            (h.current = sx(n));
                    },
                    [t, h],
                ),
                p = s.useCallback(
                    (e) => {
                        let t = sx(e);
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
                            return null == l ? sh(e, t) : sh(e, l);
                        }
                    },
                    [n],
                ),
                A = s.useCallback(
                    (e, t, n) =>
                        a(e, t, sm({ section: e, coords: t, key: n, isShowingSearchResult: c, hasActiveThreads: o })),
                    [a, o, c],
                ),
                C = s.useCallback((e) => (0 === e ? {} : { role: "grid", "aria-labelledby": `#${sd(e)}` }), []);
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
                                  iJ,
                                  {
                                      id: `${a}`,
                                      threadId: c,
                                      className: r()(tY.card, tY.mainCard),
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
                                        className: r()(tY.loadingCard, tY[`loadingCard-${t % 3}`]),
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
            hasActiveThreads: D,
            isShowingSearchResult: Y,
            canSearchForumPosts: W,
            canViewArchivedPosts: $,
            observePostVisibilityAnalytics: K,
            focusedThreadId: J,
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
                    null == ew.Ay.getSidebarState(r) && (a.current = null);
                    let n = i.findIndex((t) => t.find((t) => t === e)),
                        l = t.current.getCoordsMap(),
                        s = l[`__section__${n}`],
                        o = l[sh(n, e)];
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
        isGridLayout: X,
        threadIdsBySection: ec,
        parentId: t.id,
        focusedThreadId: J,
    });
    let eD = s.useCallback(() => {
            if (Y) return;
            let e = X ? eE.current?.getScrollerState() : q.current?.getScrollerState();
            if (null == e) return;
            (0, th.pO)({ guildId: t.guild_id, channelId: t.id });
            let n = e.scrollTop + e.offsetHeight;
            e.scrollHeight - n < (X ? Math.max(200, iF(ee)) : 200) && y();
        }, [Y, X, t.guild_id, t.id, ee, y]),
        eP = (0, g.bG)([L.A], () => L.A.keyboardModeEnabled),
        eO = (0, ej.kU)((e) => e.titleFocused || e.bodyFocused, d.x),
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
                        let n = (0, iG.Mz)(e, iH),
                            l = (0, iG.HP)(e);
                        d(n, l), (0, iz.T)(t, l, !0);
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
                                null !== e && null == c((0, iG.Mz)(e, iH)) && u((0, iG.Mz)(t, "data-grid-id"));
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
                        let l = (0, iG.Mz)(t, iH),
                            s = n?.querySelector(l);
                        if (null == s) return;
                        let a = parseInt(s.getAttribute("data-grid-section") ?? ""),
                            d = parseInt(s.getAttribute("aria-rowindex")),
                            u = parseInt(s.getAttribute("aria-colindex"));
                        switch ((iW.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                            case h.D$.RIGHT: {
                                let e = c(i$({ section: a, row: d, column: u + 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(iH);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.LEFT: {
                                let e = c(i$({ section: a, row: d, column: u - 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(iH);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.DOWN: {
                                let e = c(i$({ section: a, row: d + 1, column: u }));
                                if ((null == e && (e = c(i$({ section: a + 1, row: 0, column: u }))), null != e)) {
                                    let t = e.getAttribute(iH);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.UP: {
                                let e;
                                if (0 === d) {
                                    let t = parseInt(s.getAttribute(iV));
                                    null == (e = c(i$({ section: a - 1, row: t, column: u }))) &&
                                        (e = c(i$({ section: a - 1, row: t - 1, column: u })));
                                } else e = c(i$({ section: a, row: d - 1, column: u }));
                                if (null != e) {
                                    let t = e.getAttribute(iH);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.SPACE:
                            case h.D$.ENTER: {
                                if (e.repeat) return;
                                let t = i.current;
                                if (null != t) {
                                    let n = c((0, iG.Mz)(t, iH)),
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
                        i.current = null != e ? (0, iG.t$)(t, e) : null;
                    },
                    [t],
                );
            return s.useMemo(() => ({ id: t, containerProps: { onKeyDown: j, ref: r }, setFocus: p }), [t, j, p]);
        })({ id: "forum-grid-view", isEnabled: X && eP && !eO, setFocus: e_ }),
        eU = (function (e) {
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
        })({ listRef: q, padding: 96, isEnabled: !X && eP && !eO, channel: t }),
        ez = s.useCallback(
            (e, n, l) => (0 === e ? 0 : iF(l, t.isMediaChannel() ? iD.SIXTEEN_BY_NINE : iD.THREE_BY_TWO)),
            [t],
        ),
        { ref: eG, ...eH } = eF.containerProps,
        eB = ew.Ay.getSidebarState(t.id),
        eW = null != eB && (0, ew.JU)(eB),
        eq = (0, g.bG)([ew.Ay], () => ew.Ay.getSection(t.id)) === eV.YvQ.MEMBERS;
    return (0, i.jsx)("div", {
        className: tY.container,
        ref: Z,
        "data-member-list-open": eq,
        children: (0, i.jsx)(v.sk, {
            children: (e) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        c &&
                            (0, i.jsx)(M.A, {
                                channel: t,
                                draftType: tn.C.FirstThreadMessage,
                                className: tY.uploadArea,
                                style: { right: eW && n?.isThreadSidebarFloating ? n.threadSidebarWidth : 0 },
                            }),
                        (0, i.jsx)(sp, { channel: t }),
                        (0, i.jsx)(A.A, { children: (0, i.jsx)(p.H, { children: e$.intl.string(e$.t.B2panI) }) }),
                        O
                            ? (0, i.jsx)("div", {
                                  className: tY.optInNotice,
                                  children: (0, i.jsx)(z.A, { channel: t }),
                              })
                            : null,
                        X
                            ? (0, i.jsx)(iQ, {
                                  navigator: eF,
                                  children: (0, i.jsx)(
                                      C.f,
                                      {
                                          ref: (e) => {
                                              (eG.current = e?.getScrollerNode() ?? null), ey(e);
                                          },
                                          itemGutter: 16,
                                          padding: 24,
                                          className: tY.grid,
                                          columns: et,
                                          sections: eo,
                                          getItemKey: eT,
                                          getSectionHeight: eI,
                                          getItemHeight: ez,
                                          renderSection: eR,
                                          renderItem: ek,
                                          getSectionProps: eM,
                                          onScroll: E ? eD : void 0,
                                          chunkSize: 350,
                                          ...eH,
                                          ...e,
                                      },
                                      _,
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
                                                  className: tY.list,
                                                  sections: eo,
                                                  sectionHeight: eN,
                                                  rowHeight: eS,
                                                  renderRow: eb,
                                                  renderSection: eC,
                                                  chunkSize: 150,
                                                  onScroll: E ? eD : void 0,
                                                  paddingBottom: 24,
                                                  ...l,
                                                  ...e,
                                                  innerRole: "list",
                                              },
                                              _,
                                          );
                                      },
                                  }),
                              }),
                    ],
                }),
        }),
    });
}
function sf(e) {
    let { channel: t, coords: n } = e,
        l = (0, D.Ay)(t);
    return (0, i.jsx)("div", {
        className: r()(tY.missingReadHistoryPermission, tY.columnsSpan),
        style: n,
        children: (0, i.jsx)(N.E, {
            color: "text-muted",
            variant: "text-md/normal",
            children: e$.intl.format(e$.t.TycmzM, { channelName: l }),
        }),
    });
}
function sj(e) {
    let { channel: t, coords: n } = e,
        l = (0, D.Ay)(t);
    return (0, i.jsx)("div", {
        className: r()(tY.missingReadHistoryPermission, tY.columnsSpan),
        style: n,
        children: (0, i.jsx)(N.E, {
            color: "text-muted",
            variant: "text-md/normal",
            children: e$.intl.format(e$.t.OWZJdS, { channelName: l }),
        }),
    });
}
function sp(e) {
    let { channel: t } = e,
        n = s.useCallback(() => {
            to.A.resort(t.id);
        }, [t]),
        l = (0, g.bG)([tc.A], () => tc.A.getNewThreadCount());
    return 0 === l
        ? null
        : (0, i.jsx)(S.D, {
              className: tY.newPostsButton,
              onClick: n,
              children: (0, i.jsx)(N.E, {
                  color: "text-brand",
                  variant: "text-md/medium",
                  children: e$.intl.format(e$.t.ue1qfM, { count: l }),
              }),
          });
}
function sv() {
    return Promise.resolve();
}
function sA(e) {
    let t,
        n,
        l,
        { channel: a, isEmpty: o, isSearchLoading: p, numResults: v, children: A, coords: C, onHeightChange: b } = e,
        {
            name: I,
            formOpen: M,
            titleFocused: w,
            hasClickedForm: D,
            textAreaState: F,
            onboardingExpanded: U,
            setEditorAdditionRowHeight: z,
        } = (0, ej.kU)((e) => {
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
        { tagFilter: G, layoutType: V } = (0, eu.R)(a.id),
        W = (0, ej.ST)(),
        $ = (0, eu.p)(),
        q = (0, g.bG)([tl.A], () => tl.A.canChatInGuild(a.guild_id)),
        K = (0, te.AI)(a),
        [X, Q] = s.useState(K),
        [, Y] = (0, P.c)(a.getGuildId() ?? void 0),
        J = (0, B.V)(a),
        Z = q && (K || (X && Y)) && !J;
    s.useEffect(() => {
        K && Q(!0);
    }, [K]);
    let { ref: ee, height: et } = (0, _.Ay)();
    s.useEffect(() => {
        null != et && b(et);
    }, [b, et]);
    let en = s.useCallback(() => {
        c()(() => {
            null != ee.current && W.getState().setEditorHeight(ee.current.offsetHeight);
        });
    }, [ee, W]);
    s.useLayoutEffect(en, [en, o, Z, U]), (0, ta.Vo)({ event: eV.jej.REMEASURE_TARGET, handler: en });
    let el = (0, g.bG)([ts.A], () => ts.A.getUploads(a.id, tn.C.FirstThreadMessage)),
        ei = (0, em.Hv)(a),
        es = s.useRef(null),
        ea = s.useRef(null),
        [er, eo] = s.useState(0),
        { width: ec } = (0, g.bG)([eU.A], () => eU.A.windowSize()),
        ed = es.current?.getBoundingClientRect()?.width,
        eh = s.useRef(null),
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
    }, [a.availableTags, ec, ed, G]);
    let eg = I.length > 0 && !M && (p || null != v),
        ef =
            !__OVERLAY__ &&
            !D &&
            !M &&
            w &&
            (0 === F.textValue.trim().length || F.textValue.trim() === ei) &&
            0 === el.length &&
            !J;
    s.useLayoutEffect(() => {
        if (!(eg || ef)) return z(0);
        null != eh.current && z(eh.current.clientHeight);
    }, [z, eg, ef, eh]);
    let ep = (0, m.Ay)({
            id: `${a.id}-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: sv,
            scrollToEnd: sv,
            orientation: h.Gl.HORIZONTAL,
        }),
        { role: ev, onFocus: eA, ...eC } = (0, u.rm)("forum-channel-header"),
        eb = s.useRef(null),
        eN =
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
                eA(), e.target !== ee.current || eN.current || eb.current?.focus();
            },
            [eA, ee, eN],
        ),
        eE = s.useMemo(() => (J ? (0, H.Yj)(a.availableTags) : a.availableTags), [a.availableTags, J]);
    return (0, i.jsx)(
        "div",
        {
            className: r()(tY.card, tY.headerRow, tY.columnsSpan),
            ref: ee,
            onFocus: eS,
            ...eC,
            style: { ...C, position: V === x.C.GRID ? "absolute" : "static", height: "auto" },
            children: (0, i.jsxs)(ta.Ah, {
                children: [
                    null != a.guild_id
                        ? (0, i.jsx)(O.A, {
                              className: r()(tY.newMemberBanner, { [tY.gridViewBanner]: V === x.C.GRID }),
                              guildId: a.guild_id,
                              channel: a,
                          })
                        : null,
                    (0, i.jsx)("div", {
                        className: r()(tY.mainCard, tY.header, { [tY.headerWithMatchingPosts]: eg || ef }),
                        children: (0, i.jsx)(iu, {
                            parentChannel: a,
                            onChange: en,
                            isSearchLoading: p,
                            numResults: v,
                            canCreatePost: Z,
                            inputRef: eb,
                        }),
                    }),
                    (eg || ef) &&
                        (0, i.jsxs)("div", {
                            className: tY.matchingPostsRow,
                            ref: eh,
                            children: [
                                eg &&
                                    (0, i.jsxs)("div", {
                                        className: tY.matchingPosts,
                                        children: [
                                            (0, i.jsx)(j.D, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: p
                                                    ? e$.intl.string(e$.t["/9i3qq"])
                                                    : 0 === v
                                                      ? e$.intl.string(e$.t.DbgHxi)
                                                      : e$.intl.formatToPlainString(e$.t["tBz/8b"], {
                                                            numPosts: v ?? "",
                                                            query: I,
                                                        }),
                                            }),
                                            !p &&
                                                (0, i.jsx)(S.D, {
                                                    onClick: () => {
                                                        (0, th.hT)({ guildId: a.guild_id, channelId: a.id }),
                                                            to.A.clearForumSearch(a.id),
                                                            W.getState().setName("");
                                                    },
                                                    children: (0, i.jsx)(N.E, {
                                                        variant: "text-xs/semibold",
                                                        color: "text-brand",
                                                        className: tY.clear,
                                                        children: e$.intl.string(e$.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                (0, i.jsx)("div", { className: tY.tagsSpacer }),
                                ef
                                    ? Z
                                        ? (0, i.jsxs)("div", {
                                              className: tY.startPostHelp,
                                              children: [
                                                  (0, i.jsx)(E.e, {
                                                      shortcut: "SHIFT",
                                                      className: tY.keyboardShortcut,
                                                  }),
                                                  (0, i.jsx)(N.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-subtle",
                                                      children: "+",
                                                  }),
                                                  (0, i.jsx)(E.e, {
                                                      shortcut: "ENTER",
                                                      className: tY.keyboardShortcut,
                                                  }),
                                                  (0, i.jsx)(N.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-subtle",
                                                      children: e$.intl.string(e$.t.ZvJ0yh),
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsxs)("div", {
                                              className: tY.startPostHelp,
                                              children: [
                                                  (0, i.jsx)(y.E, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      height: 14,
                                                      width: 14,
                                                      className: tY.warnIcon,
                                                  }),
                                                  (0, i.jsx)(N.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-subtle",
                                                      children: e$.intl.string(e$.t.iyzwnD),
                                                  }),
                                              ],
                                          })
                                    : null,
                            ],
                        }),
                    (0, i.jsx)(nI, { channel: a, onChange: en }),
                    (0, i.jsxs)("div", {
                        className: tY.tagsContainer,
                        ref: es,
                        children: [
                            (0, i.jsx)(sC, { channel: a }),
                            eE.length > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)("div", { className: tY.divider }),
                                          (0, i.jsx)("div", {
                                              className: tY.tagList,
                                              ref: ea,
                                              children: (0, i.jsx)(u.hD, {
                                                  navigator: ep,
                                                  children: (0, i.jsx)(u.PR, {
                                                      children: (e) => {
                                                          let { ref: t, ...n } = e;
                                                          return (0, i.jsx)("div", {
                                                              className: tY.tagListInner,
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
                                                                                  void ((0, th.UA)({
                                                                                      guildId: a.guild_id,
                                                                                      channelId: a.id,
                                                                                      tagId: t,
                                                                                      filterTagIds: Array.from(G),
                                                                                      added: !G.has(t),
                                                                                      location: {
                                                                                          page: eV.liQ.GUILD_CHANNEL,
                                                                                          section:
                                                                                              eV.JJy
                                                                                                  .FORUM_CHANNEL_HEADER,
                                                                                          object: eV.ZSU.CHANNEL_TAG,
                                                                                      },
                                                                                  }),
                                                                                  $.getState().toggleTagFilter(a.id, t))
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
                                          (0, i.jsx)(T.Y, {
                                              targetElementRef: ex,
                                              renderPopout: (e) => {
                                                  let { closePopout: t, setPopoutRef: n } = e;
                                                  return (0, i.jsx)(sa, {
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
                                                      className: r()(tY.tagsButton, {
                                                          [tY.tagsButtonWithCount]: G.size > 0,
                                                      }),
                                                      style: { left: er },
                                                      innerClassName: tY.tagsButtonInner,
                                                      "aria-label":
                                                          G.size > 0
                                                              ? e$.intl.string(e$.t.IkpM1T)
                                                              : e$.intl.string(e$.t["9vKK/N"]),
                                                      children: [
                                                          G.size > 0
                                                              ? (0, i.jsx)("div", {
                                                                    className: tY.countContainer,
                                                                    children: (0, i.jsx)(N.E, {
                                                                        className: tY.countText,
                                                                        color: "none",
                                                                        variant: "text-xs/medium",
                                                                        children: G.size,
                                                                    }),
                                                                })
                                                              : e$.intl.string(e$.t.fZ8hzm),
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
                                              className: r()(tY.tagsButton, tY.tagsButtonPlaceholder),
                                              innerClassName: tY.tagsButtonInner,
                                              "aria-label": e$.intl.string(e$.t.IkpM1T),
                                              children: [
                                                  G.size > 0
                                                      ? (0, i.jsx)("div", {
                                                            className: tY.countContainer,
                                                            children: (0, i.jsx)(N.E, {
                                                                className: tY.countText,
                                                                color: "none",
                                                                variant: "text-xs/medium",
                                                                children: G.size,
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
function sC(e) {
    let { channel: t } = e,
        n = t.isMediaChannel(),
        l = s.useRef(null);
    return (0, i.jsx)(T.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(sl, { channel: t, closePopout: n });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: s } = t;
            return (0, i.jsxs)(f.$n, {
                ...e,
                "data-migration-pending": !0,
                buttonRef: l,
                size: f.$n.Sizes.MIN,
                color: f.$n.Colors.CUSTOM,
                className: tY.sortDropdown,
                innerClassName: tY.sortDropdownInner,
                "aria-label": n ? e$.intl.string(e$.t.JxU0wr) : e$.intl.string(e$.t.xyYt8A),
                children: [
                    (0, i.jsx)(I.J, { size: "xs", color: "currentColor" }),
                    (0, i.jsx)(N.E, {
                        className: tY.sortDropdownText,
                        variant: "text-sm/medium",
                        color: "interactive-text-default",
                        children: (0, i.jsx)("span", {
                            className: tY.sortDropdownTextHighContrastForcedColor,
                            children: n ? e$.intl.string(e$.t.JxU0wr) : e$.intl.string(e$.t.xyYt8A),
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

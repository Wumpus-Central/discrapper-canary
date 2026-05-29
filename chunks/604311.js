n.r(t), n.d(t, { CreateGameInvitePostButton: () => sP, default: () => sE });
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
    E = n(939249),
    S = n(821609),
    y = n(475358),
    T = n(695366),
    I = n(922016),
    R = n(900797),
    k = n(847374),
    _ = n(112173),
    M = n(738876),
    w = n(765671),
    D = n(964486),
    L = n(775602),
    P = n(47167),
    O = n(337885),
    F = n(870136),
    G = n(575293),
    z = n(857071),
    U = n(228098),
    H = n(157259),
    B = n(212007),
    V = n(892340),
    W = n(715757),
    $ = n(284009),
    q = n.n($),
    K = n(989349),
    Y = n.n(K),
    X = n(990078),
    Q = n(247928),
    J = n(97808),
    Z = n(778712),
    ee = n(138134),
    et = n(777666),
    en = n(661531),
    el = n(863610),
    ei = n(534890),
    es = n(144165),
    ea = n(119031),
    er = n(104171),
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
    eI = n(465364),
    eR = n(467073),
    ek = n(34337),
    e_ = n(831688),
    eM = n(805964),
    ew = n(302031),
    eD = n(885386),
    eL = n(761640),
    eP = n(734057),
    eO = n(232835),
    eF = n(576705),
    eG = n(967198),
    ez = n(287809),
    eU = n(531685),
    eH = n(58703),
    eB = n(763754),
    eV = n(447215);
let eW = (e) => {
    let { message: t, originalAuthor: n, channel: l } = e,
        s = (0, eB.d8)(n, l),
        a = s?.nick ?? n?.username ?? "",
        r = (0, eV.P)({
            user: n ?? void 0,
            channelId: l.id,
            guildId: l.guild_id,
            messageId: t?.id,
            stopPropagation: !0,
        })(s ?? void 0)(a, l.id);
    return (0, i.jsx)(b.E, { variant: "text-md/semibold", children: r });
};
var e$ = n(652215),
    eq = n(838541),
    eK = n(375708),
    eY = n(506472),
    eX = n(330070),
    eQ = n(992595);
let eJ = s.memo(function (e) {
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
                l = (0, g.bG)([eP.A], () => eP.A.getChannel(t));
            q()(null != l, "the thread should not be null here, a store must have missed an update");
            let i = (0, g.bG)([eL.Ay], () => eL.Ay.getCurrentSidebarChannelId(l.parent_id) === l.id),
                { firstMessage: a } = (0, eg.OA)(l),
                r = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: l = !0 } = e,
                        i = s.useMemo(() => (null != t ? (0, eb.A)(t, t?.messageSnapshots[0]) : null), [t]),
                        { hasSpoilerEmbeds: a, content: r } = s.useMemo(
                            () =>
                                i?.content != null && "" !== i.content
                                    ? (0, eI.Ay)(i, {
                                          formatInline: n,
                                          noStyleAndInteraction: l,
                                          allowHeading: !0,
                                          allowList: !0,
                                      })
                                    : { hasSpoilerEmbeds: !1, content: null },
                            [n, i, l],
                        ),
                        o = (0, ef.Ky)(t, a),
                        c = (0, ef.L_)(t, a);
                    return null == t ? null : { hasSpoilerEmbeds: a, content: r, firstMedia: o, firstMediaIsEmbed: c };
                })({ firstMessage: a }),
                o = r?.content,
                c = r?.firstMedia,
                { messageCountText: d } = (0, ex.k6)(l);
            return { channel: l, isOpen: i, messageCount: d, firstMessage: a, content: o, media: n ?? c };
        })({ threadId: t, overrideMedia: a }),
        v = (0, P.Ay)(c);
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
    let S = s.useRef(null),
        { handleLeftClick: y, handleRightClick: T } = (0, eN.A)({ facepileRef: S, goToThread: n, channel: c }),
        { role: I, onFocus: R, ...k } = (0, u.rm)(t),
        { isFocused: _, handleFocus: M, handleBlur: D } = (0, eC.A)(R);
    return (0, i.jsxs)("div", {
        ref: C,
        "data-item-id": t,
        onClick: y,
        onContextMenu: T,
        className: r()(eX.kL, eY.kL, o, { [eX.nT]: m }),
        children: [
            (0, i.jsx)(E.D, {
                onClick: y,
                focusProps: { ringTarget: C },
                onContextMenu: T,
                "aria-label": eK.intl.formatToPlainString(eK.t.pgYN6c, { title: v, count: h }),
                className: eX.Kv,
                onFocus: M,
                onBlur: D,
                ...k,
            }),
            (0, i.jsxs)("div", {
                className: eX.kb,
                children: [
                    (0, i.jsx)(p.F, {
                        children: (0, i.jsxs)("div", {
                            className: eY.fx,
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
                    (0, i.jsx)(Q.M, {
                        enabled: !_,
                        children: (0, i.jsx)(e1, { channel: c, firstMessage: f, facepileRef: S }),
                    }),
                ],
            }),
        ],
    });
});
function eZ(e) {
    let { channel: t, firstMessage: n, content: l, hasMediaAttachment: s, originalAuthor: a } = e,
        { hasUnreads: o } = (0, ex.X5)(t);
    return (0, i.jsxs)("div", {
        className: r()(eY.rf, eX.rf),
        children: [
            (0, i.jsx)(eA.Ay, { channel: t }),
            (0, i.jsx)("div", {
                className: (eX.iU, eY.iU),
                children: (0, i.jsx)(e0, {
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
let e0 = s.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: s, hasUnreads: a, originalAuthor: o } = e,
        c = (0, g.bG)([ej.A], () => ej.A.isLoading(n.id)),
        d = (0, g.bG)([eF.A], () => eF.A.can(e$.xBc.MANAGE_MESSAGES, n)),
        u = eD.gs.useSetting(),
        m = (0, g.bG)([eG.A], () => eG.A.getGuildId()),
        { contentPlaceholder: h, renderedContent: x } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, eM.o)(t, l, !1, !1, r()(eX.BK, eY.BK, eQ.tZ, eQ.__invalid_smallFontSize), {
                      leadingIconClass: eX.aG,
                      trailingIconClass: eX.sl,
                      iconSize: eq.eJ,
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
                        className: r()(eX.BK, eY.BK),
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
                      className: eY.Nd,
                  })
                : null,
            (0, i.jsxs)("div", {
                className: eY.IF,
                children: [
                    (0, i.jsx)(eW, { channel: n, originalAuthor: o, message: t }),
                    (0, i.jsx)(Q.M, { className: eX.JY, children: f }),
                ],
            }),
        ],
    });
});
function e1(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        { isNew: s } = (0, ex.X5)(t),
        a = (0, P.Ay)(t),
        r = (0, eu.m)(t.id),
        o = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: eY.qr,
        children: [
            (0, i.jsxs)("div", {
                className: eY.JS,
                children: [
                    (0, i.jsx)(ee.i, { size: "custom", width: 14, height: 14 }),
                    (0, i.jsx)(b.E, { variant: "text-sm/medium", children: a }),
                    s
                        ? (0, i.jsx)(et.Lp, {
                              color: en.A.unsafe_rawColors.BRAND_260.css,
                              text: eK.intl.string(eK.t.y2b7CA),
                              className: eY.Ad,
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: eY.PQ,
                children: [
                    o || null == l ? null : (0, i.jsx)(e4, { firstMessage: l, channel: t }),
                    (0, i.jsx)(e2, { channel: t, iconSize: 14 }),
                    (0, i.jsx)("span", { className: eX.xE, children: "\u2022" }),
                    r.length > 0
                        ? (0, i.jsxs)("div", {
                              className: eX.IW,
                              children: [
                                  (0, i.jsx)(e3, { channel: t, userIds: r, facepileRef: n }),
                                  (0, i.jsx)("div", {
                                      className: eX.r$,
                                      children: (0, i.jsx)(el.n, { themed: !0, dotRadius: 2 }),
                                  }),
                                  (0, i.jsx)(ea.Ay, { channel: t, className: eX.mD, renderDots: !1 }),
                              ],
                          })
                        : (0, i.jsx)(e7, { channel: t }),
                ],
            }),
        ],
    });
}
function e2(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: s, unreadCount: a } = (0, ex.k6)(t);
    return (0, i.jsxs)("div", {
        className: r()(eX.Mv, { [eX.hT]: l && null == a }),
        children: [
            (0, i.jsx)("span", {
                className: eX.SZ,
                children: (0, i.jsx)(ei.o, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof s
                ? (0, i.jsx)(ed.A, { value: s, digitWidth: 9, className: eX.gv })
                : (0, i.jsx)("div", { className: eX.gv, children: s }),
            null == a
                ? null
                : (0, i.jsxs)(b.E, {
                      className: eX.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", eK.intl.format(eK.t.z3PEth, { count: a }), ")"],
                  }),
        ],
    });
}
function e4(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, g.bG)([eP.A], () => eP.A.getChannel(n.parent_id)),
        s = (0, ex.Ck)(l),
        { disableReactionCreates: a, isLurking: r, isPendingMember: o } = (0, eR.A)(n);
    return null == s || a
        ? null
        : (0, i.jsx)(e_.qT, {
              className: eX.vC,
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
              type: ey.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function e7(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, eh.R)(t.parent_id),
        l = (0, ex.Mw)(t, n),
        s = t.threadMetadata?.createTimestamp,
        a = null == s ? null : eK.intl.formatToPlainString(eK.t["13euCd"], { timestamp: (0, eH.i$)(Y()(s), "LLLL") });
    return (0, i.jsx)(X.m, {
        text: a,
        children: (0, i.jsx)(b.E, {
            className: eX.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: l,
        }),
    });
}
function e3(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        s = (0, ex.$I)(t, n);
    return (0, i.jsx)("div", {
        ref: l,
        children: (0, i.jsx)(er.Ay, {
            className: eX.__invalid_facepile,
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
function e8(e) {
    let t,
        n,
        { firstMedia: l, shouldObscure: s, obscureReason: a, shouldShowAgeVerification: o } = e,
        c = (0, g.bG)([eU.A], () => eU.A.isFocused()),
        d = (0, eE.ge)(l.src),
        u = eD.kt.useSetting(),
        m = (0, eS.rx)(a),
        { src: h, width: x, height: f, alt: j } = l;
    return (f > x ? (n = 72) : (t = 72), o)
        ? (0, i.jsx)("div", {
              "aria-label": m ?? j ?? eK.intl.string(eK.t.hqwnc2),
              className: r()(eX.iT, eX.nh),
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
                className: eX.iT,
                imageClassName: r()({ [eX.cd]: s, [eX.LW]: !0 }),
            })
          : (0, ek.LL)({
                src: h,
                maxHeight: t,
                maxWidth: n,
                width: x,
                height: f,
                alt: null != j && s ? m : j,
                autoPlay: u,
                animated: d && !s && c,
                srcIsAnimated: l.srcIsAnimated,
                containerClassName: eX.iT,
                imageClassName: r()({ [eX.cd]: s }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function e5(e) {
    let { channel: t, firstMedia: n } = e,
        [l, s] = (0, eS.eJ)({ media: n, channel: t }),
        a = (0, em.qZ)(s);
    return (0, i.jsx)(Q.M, {
        enabled: !0,
        children: (0, i.jsxs)("div", {
            className: r()(eX.pV, eY.pV),
            onClick: function (e) {
                e.stopPropagation(),
                    a &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        eo.A.showAgeVerificationGetStartedModal({ entryPoint: ec.q1.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, i.jsx)(e8, { firstMedia: n, shouldObscure: l, obscureReason: s, shouldShowAgeVerification: a }),
                l && (0, i.jsx)(ep.A, { iconClassname: eX.yo, obscureReason: s }),
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
    ta = n(309010),
    tr = n(522602),
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
        a = !eU.A.isFocused(i);
    return (
        s.useLayoutEffect(
            () => (
                null == l.current &&
                    ((l.current = new th.Ay({ guildId: t, channelId: n, isPaused: a, windowId: i })),
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
var tg = n(853742);
n(321073);
var tf = n(922139),
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
    tI = n(417454),
    tR = n(148719),
    tk = n(462887),
    t_ = n(696986),
    tM = n(811893),
    tw = n(736653),
    tD = n(303136),
    tL = n(892110),
    tP = n(251766),
    tO = n(468689),
    tF = n(71393),
    tG = n(975571);
let tz = { mass: 1, tension: 250, friction: 18, clamp: !0 };
var tU = n(388803);
function tH(e) {
    let { handleHide: t } = e;
    return (0, i.jsx)(E.D, {
        onClick: t,
        className: tU.b,
        "aria-label": eK.intl.string(eK.t.WAI6xu),
        children: (0, i.jsx)(tA.P, { size: "md", color: "currentColor", className: tU.ut }),
    });
}
function tB(e) {
    let { username: t, title: n, videoSrc: l, messageCount: s, reaction: a, reactionCount: o, classname: c } = e;
    return (0, i.jsxs)("div", {
        className: r()(tU.IP, c),
        children: [
            (0, i.jsx)("div", {
                className: tU.Y6,
                children: (0, i.jsxs)("div", {
                    className: tU.wO,
                    children: [
                        (0, i.jsx)(b.E, { tag: "span", className: tU.cy, variant: "text-sm/semibold", children: t }),
                        (0, i.jsx)(b.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: tU.SD,
                            children: eK.intl.string(eK.t.mA0IvI),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(j.D, {
                variant: "heading-md/extrabold",
                className: tU.DD,
                color: "text-strong",
                "aria-hidden": !0,
                children: n,
            }),
            (0, i.jsx)(t_.h, { size: 10 }),
            (0, i.jsx)(tD.A, { className: tU.Ki, src: l }),
            (0, i.jsx)(t_.h, { size: 10 }),
            (0, i.jsx)("div", {
                className: tU.qr,
                children: (0, i.jsxs)("div", {
                    className: tU.GD,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tU.Mv,
                            children: [
                                (0, i.jsx)("span", {
                                    className: tU.SZ,
                                    children: (0, i.jsx)(ei.o, { size: "xs", color: "currentColor" }),
                                }),
                                (0, i.jsx)(b.E, {
                                    variant: "text-xs/normal",
                                    color: "interactive-text-default",
                                    children: s,
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tU.vi,
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
        o = (0, g.bG)([tc.A], () => tc.A.hasHidden(t.id)),
        c = (0, tP.e)({ guildId: t.guild_id, channelId: t.id }),
        { transitions: d, setVisible: u } = (function () {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tv.p)(e, {
                    keys: (e) => (e ? "shown" : "hidden"),
                    config: tz,
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
        (0, tL.l)(t.id) || u(!o);
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
            tO.A.open(t.guild_id, e$.BEX.ROLE_SUBSCRIPTIONS);
        },
        p = a?.features.has(e$.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)
            ? eK.intl.string(eK.t.n0q7sI)
            : eK.intl.string(eK.t.QoYdie),
        v =
            (a?.features.has(e$.GuildFeatures.CREATOR_MONETIZABLE) ||
                a?.features.has(e$.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) ??
            !1,
        A = v ? eK.intl.string(eK.t["G/7ciZ"]) : eK.intl.string(eK.t.IFOiit),
        C = v ? eK.intl.string(eK.t.GjgQO1) : eK.intl.string(eK.t.E7AO6t);
    return (0, i.jsx)(i.Fragment, {
        children: d((e, t) =>
            t
                ? (0, i.jsxs)(tf.animated.div, {
                      style: e,
                      className: tU.kL,
                      children: [
                          (0, i.jsxs)("div", {
                              className: tU.U1,
                              children: [
                                  (0, i.jsxs)(b.E, {
                                      variant: "text-xs/normal",
                                      className: tU.l2,
                                      children: [
                                          (0, i.jsx)(tb.m, { size: "xxs", color: "currentColor", className: tU.Kk }),
                                          eK.intl.string(eK.t.znhX2R),
                                      ],
                                  }),
                                  (0, i.jsx)(tH, { handleHide: m }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: tU.hQ,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: r()(tU.CT, v && tU.en),
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: tU.F2,
                                              children: (0, i.jsxs)("div", {
                                                  className: tU.IZ,
                                                  children: [
                                                      (0, i.jsx)(tB, {
                                                          username: eK.intl.string(eK.t.AkORco),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                                          title: eK.intl.string(eK.t.yO6Fxu),
                                                          messageCount: "34",
                                                          reaction: "\u26A1\uFE0F",
                                                          reactionCount: "724",
                                                          classname: tU.q6,
                                                      }),
                                                      (0, i.jsx)(tB, {
                                                          username: eK.intl.string(eK.t.DPg3YM),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                                          title: eK.intl.string(eK.t["R5XnC/"]),
                                                          messageCount: "34",
                                                          reactionCount: "84",
                                                          reaction: "\uD83D\uDC9E",
                                                          classname: tU.q6,
                                                      }),
                                                      (0, i.jsx)(tB, {
                                                          username: eK.intl.string(eK.t.KIelex),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                                          title: eK.intl.string(eK.t.pt88Vb),
                                                          messageCount: "7,103",
                                                          reaction: "\u26A1\uFE0F",
                                                          reactionCount: "724",
                                                          classname: tU.Ob,
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          (0, i.jsxs)("article", {
                                              className: tU.n$,
                                              children: [
                                                  (0, i.jsx)(j.D, {
                                                      variant: "heading-lg/semibold",
                                                      color: "text-strong",
                                                      children: A,
                                                  }),
                                                  (0, i.jsx)(t_.h, { size: 8 }),
                                                  (0, i.jsx)(b.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: C,
                                                  }),
                                                  (0, i.jsx)(t_.h, { size: 16 }),
                                                  (0, i.jsxs)(E.D, {
                                                      onClick: () =>
                                                          open(tG.A.getCreatorSupportArticleURL(e$.MVz.MEDIA_CHANNEL)),
                                                      className: tU.zy,
                                                      children: [
                                                          (0, i.jsx)(b.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-link",
                                                              children: eK.intl.string(eK.t.OahzBd),
                                                          }),
                                                          (0, i.jsx)(tM.t, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: tU.QI,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)(t_.h, { size: 16 }),
                                                  (0, i.jsx)("div", {
                                                      className: tU.Qq,
                                                      children: h.map((e) =>
                                                          (0, i.jsx)(
                                                              b.E,
                                                              {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-default",
                                                                  className: tU.U0,
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
                                          className: r()(tU.CT, tU.Gw),
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: tU.F2,
                                                  children: (0, i.jsxs)("div", {
                                                      className: tU.kQ,
                                                      children: [
                                                          (0, i.jsx)("img", {
                                                              src: l
                                                                  ? "/assets/b58ce8ba4d6516a2.png"
                                                                  : "/assets/9ed42f4f17fd8793.png",
                                                              alt: "",
                                                              className: tU.JM,
                                                          }),
                                                          (0, i.jsx)("img", {
                                                              src: l
                                                                  ? "/assets/d0f129a0c1627f7a.png"
                                                                  : "/assets/fddfcda2eca5c8d4.png",
                                                              alt: "",
                                                              className: tU.JM,
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              (0, i.jsxs)("article", {
                                                  className: tU.n$,
                                                  children: [
                                                      (0, i.jsxs)(b.E, {
                                                          variant: "text-xxs/bold",
                                                          className: tU.X4,
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
                                                      (0, i.jsx)(t_.h, { size: 10 }),
                                                      (0, i.jsx)(j.D, {
                                                          variant: "heading-lg/semibold",
                                                          color: "text-strong",
                                                          children: eK.intl.string(eK.t["N/TRrT"]),
                                                      }),
                                                      (0, i.jsx)(t_.h, { size: 8 }),
                                                      (0, i.jsx)(b.E, {
                                                          variant: "text-md/normal",
                                                          color: "text-muted",
                                                          children: eK.intl.string(eK.t.t3yWxG),
                                                      }),
                                                      (0, i.jsx)(t_.h, { size: 16 }),
                                                      (0, i.jsx)("div", {
                                                          className: tU.Qq,
                                                          children: x.map((e) =>
                                                              (0, i.jsx)(
                                                                  b.E,
                                                                  {
                                                                      variant: "text-sm/medium",
                                                                      color: "text-default",
                                                                      className: tU.U0,
                                                                      children: e,
                                                                  },
                                                                  e,
                                                              ),
                                                          ),
                                                      }),
                                                      (0, i.jsx)(t_.h, { size: 16 }),
                                                      0 === c.length &&
                                                          (0, i.jsx)(S.$, { variant: "primary", onClick: f, text: p }),
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
            n = (0, g.bG)([eF.A], () => eF.A.can(e$.xBc.MANAGE_GUILD, t));
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
                                children: eK.intl.string(tX.default.fP8DVx),
                            }),
                        }),
                        (0, i.jsxs)(tW.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, i.jsx)(b.E, {
                                    variant: "text-lg/semibold",
                                    color: "text-default",
                                    children: eK.intl.string(tX.default["i7CH/I"]),
                                }),
                                (0, i.jsxs)("ol", {
                                    className: r()(tQ.p_, tQ.o8, tQ.ap),
                                    children: [
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(b.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eK.intl.string(tX.default["+Izoz7"]),
                                            }),
                                        }),
                                        (0, i.jsxs)("li", {
                                            children: [
                                                (0, i.jsx)(b.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: eK.intl.string(tX.default["iu/RkU"]),
                                                }),
                                                (0, i.jsxs)("ul", {
                                                    className: r()(tQ.p_, tQ.t3, tQ.zS),
                                                    children: [
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(b.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eK.intl.string(tX.default.QogKbP),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(b.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eK.intl.string(tX.default.V4orHT),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(b.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eK.intl.string(tX.default.VrrQXe),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(b.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eK.intl.string(tX.default.pSuM5e),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(b.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eK.intl.string(tX.default["/RLXlI"]),
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
                                                children: eK.intl.string(tX.default.j4AmYy),
                                            }),
                                        }),
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(b.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eK.intl.format(tX.default["/g+PvX"], {
                                                    termsOfService: e$.X7G.TERMS,
                                                    communityGuidelines: e$.X7G.GUIDELINES,
                                                    helpArticle: tG.A.getArticleURL(e$.MVz.FLAG_TO_MOD),
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
                                    children: eK.intl.string(tX.default.qJWXsz),
                                }),
                                (0, i.jsxs)("ul", {
                                    className: r()(tQ.p_, tQ.zS, tQ.ap),
                                    children: [
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(b.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eK.intl.format(tX.default.FUBV1P, {
                                                    survey: "https://discord.sjc1.qualtrics.com/jfe/form/SV_3WvT7SqlWpCJ4HQ",
                                                }),
                                            }),
                                        }),
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(b.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eK.intl.format(tX.default.W4MIAG, {
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
                                    children: eK.intl.string(tX.default.J3HKmx),
                                }),
                                n &&
                                    (0, i.jsx)(b.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: eK.intl.format(tX.default["9x2vbP"], {
                                            optOutHook: (e) =>
                                                (0, i.jsx)(tY.A, {
                                                    onClick: () =>
                                                        tO.A.open(
                                                            t.id,
                                                            e$.BEX.MODERATION,
                                                            null,
                                                            e$.nd0.SAFETY_OVERVIEW,
                                                        ),
                                                    children: e,
                                                }),
                                        }),
                                    }),
                                (0, i.jsx)(b.E, {
                                    variant: "text-md/normal",
                                    color: "text-default",
                                    children: eK.intl.string(tX.default.KcCY25),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("img", {
                    src: "/assets/c42cecffc003efa2.svg",
                    alt: eK.intl.string(tX.default["UxV/3+"]),
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
                        className: r()(eX.kL, tQ.kL, tJ.mainCard),
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
                                                children: eK.intl.string(eK.t.uvGmCx),
                                            }),
                                            (0, i.jsx)(b.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                children: "\u2014",
                                            }),
                                            (0, i.jsx)(j.D, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: eK.intl.string(tX.default["95qQRB"]),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(E.D, {
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
    t7 = n(21161),
    t3 = n(796774),
    t8 = n(209932),
    t5 = n(174459),
    t9 = n(102597),
    t6 = n(904054),
    ne = n(584014),
    nt = n(536283);
n(980504);
var nn = n(59618);
function nl(e) {
    let { className: t, sound: n, playSound: l, isPlaying: a, text: o } = e,
        c = n?.emojiId != null || n?.emojiName != null,
        d = eK.intl.formatToPlainString(eK.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name }),
        u = s.useCallback(() => {
            t5.default.track(e$.HAw.MODERATOR_QUEUE_ACTION, { guild_id: eG.A.getGuildId(), action: "airhorn" }),
                null != l && l();
        }, [l]);
    return (0, i.jsxs)(E.D, {
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
        { createMultipleConfettiAt: r } = s.useContext(t7.x),
        o = (0, g.bG)([L.A], () => L.A.useReducedMotion),
        { isPlaying: c, playSound: d } = (function (e) {
            let { isPlaying: t, playSound: n, preloadSound: l } = (0, ne.A)(null != e ? (0, t9.A)(e.soundId) : null);
            return (
                s.useEffect(() => {
                    null != e && l();
                }, [e, l]),
                {
                    isPlaying: t,
                    playSound: s.useCallback(() => !!n({ volume: (0, t6.A)(e?.volume ?? 1) }), [n, e?.volume]),
                }
            );
        })(a);
    (0, D.Ay)(() => {
        (0, t3.E7)();
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
                        children: eK.intl.string(tX.default.h6QNky),
                    }),
                    (0, i.jsx)(b.E, {
                        className: nn.Qq,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: eK.intl.format(tX.default["8N4c58"], {
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
        o = (0, ex.S4)(r),
        c = (0, tn.AI)(r),
        d = r.isMediaChannel(),
        u = s.useCallback(() => {
            (0, tg.zd)(),
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
                      ? void (r.isGameInvitesChannel() ? (0, O.d)(r) : nc._.dispatch(e$.jej.FOCUS_COMPOSER_TITLE))
                      : (0, e$.FXj)(),
            [u, x, c, r],
        );
    return (0, i.jsxs)("div", {
        className: nh.k,
        children: [
            (0, i.jsx)(j.D, {
                className: nh.w,
                variant: "heading-md/semibold",
                children: m
                    ? eK.intl.formatToPlainString(eK.t.lvPci0, { numTags: a.size })
                    : eK.intl.string(eK.t.PwTMG0),
            }),
            (0, i.jsx)(b.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: m
                    ? eK.intl.formatToPlainString(eK.t.AAeye1, { numTags: a.size })
                    : eK.intl.formatToPlainString(eK.t.YtsXFD, { channelName: t }),
            }),
            h &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(t_.h, { size: 16 }),
                        (0, i.jsx)(S.$, {
                            text: x ? eK.intl.string(eK.t.DgatTQ) : eK.intl.string(eK.t.wOKE8I),
                            variant: "secondary",
                            onClick: g,
                        }),
                    ],
                }),
        ],
    });
}
var ng = n(253913),
    nf = n(774418),
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
                (0, i.jsx)(tI.b_, { role: e, canRemove: !1, onRemove: e$.FXj, guildId: t.id, className: nj.Yq }, e.id),
            ),
        });
    },
    nb = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    nE = (e) => {
        let { handleHide: t } = e;
        return (0, i.jsx)(E.D, {
            onClick: t,
            className: nj.b,
            "aria-label": eK.intl.string(eK.t.WAI6xu),
            children: (0, i.jsx)(tA.P, { size: "md", color: "currentColor", className: nj.ut }),
        });
    },
    nS = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, i.jsx)(E.D, {
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
            { hasAnyThread: l, hasActiveThreads: a, channel: o } = e,
            c = (0, P.Ay)(o),
            { onboardingExpanded: u } = (0, ev.kU)((e) => {
                let { onboardingExpanded: t } = e;
                return { onboardingExpanded: t };
            }, d.x),
            { tagFilter: m } = (0, eh.R)(o.id),
            h = (0, g.bG)([tF.A], () => tF.A.getGuild(o.getGuildId())),
            x = (0, ex.S4)(o),
            { transitions: f, setVisible: v } = (() => {
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
            N = ((t = o.id), s.useCallback(() => (v(!1), td.A.hideAdminOnboarding(t, !0)), [t, v])),
            {
                onboardingSteps: S,
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
                    j = (0, g.bG)([tc.A], () => tc.A.hasHidden(d.id)),
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
                                g,
                                f,
                                j = new nC(),
                                p = d?.isMediaChannel() === !0;
                            return (
                                null == c ||
                                    null == d ||
                                    p ||
                                    null == a ||
                                    j.addStep(
                                        ((e = (0, tR.A)(d)
                                            ? tj.kg(e$.xBc.VIEW_CHANNEL, e$.xBc.SEND_MESSAGES)
                                            : e$.xBc.SEND_MESSAGES),
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
                                            name: eK.intl.string(eK.t["/Ax2gs"]),
                                            description: eK.intl.string(eK.t.gAIOfg),
                                            isDone: l && s,
                                            shouldWarn: l && !s,
                                            children: l ? (0, i.jsx)(nN, { guild: c, roles: t }) : null,
                                            clickHandler: () => {
                                                nA(ng._G.PERMISSIONS),
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
                                p ||
                                    j.addStep(
                                        ((r = null != d.topic && d.topic.length > 0),
                                        {
                                            name: eK.intl.string(eK.t.UgJu1e),
                                            description: eK.intl.string(eK.t["3C6/G1"]),
                                            clickHandler: () => {
                                                nA(ng._G.GUIDELINES), tT.Ay.open(d.id, void 0, e$.b7d.TOPIC);
                                            },
                                            isDone: r,
                                        }),
                                    ),
                                d?.isGameInvitesChannel() &&
                                    j.addStep(
                                        ((o = null != d.availableTags && d.availableTags.length > 1),
                                        {
                                            name: eK.intl.string(nf.default["5a7Pjb"]),
                                            description: eK.intl.string(nf.default["MKZ+Ky"]),
                                            clickHandler: () => {
                                                nA(ng._G.RECOMMENDED_TAGS),
                                                    (0, tp.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([
                                                            n.e("30264"),
                                                            n.e("66089"),
                                                        ]).then(n.bind(n, 537808));
                                                        return (t) => (0, i.jsx)(e, { ...t, channelId: d.id });
                                                    });
                                            },
                                            isDone: o,
                                        }),
                                    ),
                                j.addStep(
                                    ((m = +!!d.isGameInvitesChannel()),
                                    (h = null != d.availableTags && d.availableTags.length > m),
                                    {
                                        name: eK.intl.string(eK.t.xiBFCi),
                                        description: eK.intl.string(eK.t.wCv4Oz),
                                        clickHandler: () => {
                                            nA(ng._G.TAGS),
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
                                        isDone: h,
                                    }),
                                ),
                                j.addStep(
                                    ((g = null != d.defaultReactionEmoji),
                                    {
                                        name: eK.intl.string(eK.t.QlyC9s),
                                        description: eK.intl.string(eK.t["+50LJg"]),
                                        clickHandler: () => {
                                            nA(ng._G.DEFAULT_REACTION),
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
                                        isDone: g,
                                    }),
                                ),
                                j.addStep(
                                    ((f = c?.id),
                                    {
                                        name: eK.intl.string(eK.t["6A0O64"]),
                                        description: p
                                            ? eK.intl.string(eK.t["8hI5vr"])
                                            : eK.intl.format(eK.t.ysxcAw, {
                                                  onClick: (e) => {
                                                      null != f &&
                                                          (e.preventDefault(),
                                                          e.stopPropagation(),
                                                          (0, tg.zd)(),
                                                          (0, tp.openModalLazy)(async () => {
                                                              let { default: e } = await Promise.all([
                                                                  n.e("43051"),
                                                                  n.e("90052"),
                                                              ]).then(n.bind(n, 653682));
                                                              return (t) => (0, i.jsx)(e, { ...t, guildId: f });
                                                          }));
                                                  },
                                              }),
                                        clickHandler: () => {
                                            (nA(ng._G.CREATE_POST), d.isGameInvitesChannel())
                                                ? (0, O.d)(d)
                                                : nc._.dispatch(e$.jej.FOCUS_COMPOSER_TITLE);
                                        },
                                        isDone: u,
                                    }),
                                ),
                                j
                            );
                        }, [d, c, a, u, x])),
                    v = p.isAllDone(),
                    A =
                        f ||
                        j ||
                        ((t = d.id),
                        (r = nu.default.extractTimestamp(t)),
                        !Y()().isBefore(Y()(r).add(Y().duration(15, "days"))));
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
            _ = (0, ev.ST)(),
            M = o.isMediaChannel(),
            w = (e) => _.getState().setOnboardingExpanded(e);
        return ((0, D.Ay)(() => {
            R && k && N();
        }),
        ((e) => {
            let { isAllDone: t, isVisible: n, canManageChannel: l, guildId: i, channel: a } = e,
                r = (0, g.bG)([nr.A], () => (null != i ? nr.A.partitionVersion(i) : void 0)),
                o = s.useCallback(() => {
                    nc._.dispatch(e$.jej.REMEASURE_TARGET);
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
            : (0, V.Fo)(o)
              ? a || 0 !== m.size
                  ? m.size > 0
                      ? null
                      : (0, i.jsx)(t1, { guild: h })
                  : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t1, { guild: h }), (0, i.jsx)(ns, {})] })
              : k && x
                ? M
                    ? l
                        ? null
                        : (0, i.jsx)(tV, { channel: o })
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
                                                    children: (0, i.jsxs)(p.F, {
                                                        component: (0, i.jsx)(j.D, {
                                                            variant: "heading-md/semibold",
                                                            children: eK.intl.string(eK.t.LhlgY9),
                                                        }),
                                                        children: [
                                                            (0, i.jsx)(j.D, {
                                                                variant: "heading-md/medium",
                                                                className: nj.wx,
                                                                children: eK.intl.format(eK.t["9L+8bz"], {
                                                                    numCompleted: S.completedSteps.toString(),
                                                                    numSteps: S.steps.length.toString(),
                                                                }),
                                                            }),
                                                            (0, i.jsxs)(b.E, {
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
                                                                  children: S.getSteps().map((e) =>
                                                                      (0, i.jsxs)(
                                                                          E.D,
                                                                          {
                                                                              tag: "li",
                                                                              "aria-label": e.name,
                                                                              onClick: () => C(e),
                                                                              className: r()(nj._h, {
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
                                                                                              icon: (0, tS.k)(no.A),
                                                                                              style: np,
                                                                                              className: r()(
                                                                                                  nj.FY,
                                                                                                  nj.so,
                                                                                              ),
                                                                                          }),
                                                                                  (0, i.jsxs)("div", {
                                                                                      className: nj.PM,
                                                                                      children: [
                                                                                          (0, i.jsx)(b.E, {
                                                                                              variant: "text-md/medium",
                                                                                              color: e.isDone
                                                                                                  ? "text-default"
                                                                                                  : "text-strong",
                                                                                              className: nj.u,
                                                                                              children: e.name,
                                                                                          }),
                                                                                          (0, i.jsx)(b.E, {
                                                                                              variant: "text-sm/normal",
                                                                                              color: "text-default",
                                                                                              className: nj.XK,
                                                                                              children: e.description,
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
                  : (0, i.jsx)(nx, { channelName: c ?? "", guildId: o.guild_id, tagFilter: m, channel: o });
    };
var nT = n(717421),
    nI = n(622629),
    nR = n(22231),
    nk = n(46054),
    n_ = n(101136);
let nM = s.memo(function (e) {
    let { channel: t, onChange: l } = e,
        a = (0, ev.ST)(),
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
              className: x ? n_.kK : void 0,
              children: (0, i.jsxs)("div", {
                  className: n_.kL,
                  children: [
                      (0, i.jsxs)("div", {
                          className: n_.N1,
                          children: [
                              (0, i.jsxs)(j.D, {
                                  variant: "heading-lg/semibold",
                                  className: n_.$4,
                                  children: [
                                      (0, i.jsx)(nI.B, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                          height: 20,
                                      }),
                                      eK.intl.string(eK.t["4d4T4l"]),
                                      c &&
                                          (0, i.jsx)(E.D, {
                                              onClick: () => {
                                                  tT.Ay.open(t.id, void 0, e$.b7d.TOPIC);
                                              },
                                              tag: "span",
                                              className: n_.vk,
                                              children: (0, i.jsx)(nR.R, { size: "xs", color: "currentColor" }),
                                          }),
                                  ],
                              }),
                              (0, i.jsx)(E.D, {
                                  "aria-label": eK.intl.string(eK.t.cpT0Cq),
                                  className: n_.vk,
                                  onClick: () => {
                                      a.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, i.jsx)(tA.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: n_.iQ,
                          children: [
                              (0, i.jsx)(b.E, {
                                  selectable: !0,
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  style: { maxHeight: 220 },
                                  className: r()(n_.I4, eQ.PT),
                                  children: (0, i.jsx)("div", {
                                      ref: h,
                                      children: nk.A.parseForumPostGuidelines(t.topic, !0, {
                                          channelId: t.id,
                                          allowHeading: !0,
                                          allowList: !0,
                                      }),
                                  }),
                              }),
                              u &&
                                  (0, i.jsxs)("div", {
                                      className: n_.jP,
                                      children: [
                                          (0, i.jsx)("div", { className: n_.D7 }),
                                          (0, i.jsx)("div", {
                                              className: n_.kx,
                                              children: (0, i.jsx)(E.D, {
                                                  className: n_.DD,
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
                                                      className: n_.ur,
                                                      children: [
                                                          eK.intl.string(eK.t.Vu7odK),
                                                          (0, i.jsx)(tN._, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: n_.yS,
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
var nw = n(621466),
    nD = n(189812),
    nL = n(884496),
    nP = n(511274),
    nO = n(408278),
    nF = n(952270),
    nG = n(39623),
    nz = n(278416),
    nU = n(465532),
    nH = n(608299),
    nB = n(355622),
    nV = n(375499),
    nW = n(151271),
    n$ = n(698279),
    nq = n(266599);
let nK = s.memo(
    s.forwardRef(function (e, t) {
        let { disabled: n, type: l, className: a, onClick: o, channel: c } = e,
            [u, m, h] = (0, nW.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], d.x),
            x = s.useCallback(() => {
                (0, nW.ed)(l, c.id), o?.();
            }, [l, o, c.id]);
        return n
            ? null
            : (0, i.jsx)("div", {
                  className: r()(n$.VQ, nq.UD),
                  ref: t,
                  children: (0, i.jsx)(nV.A, {
                      className: r()(nq.Z8, a),
                      onClick: x,
                      active: (u === n$.kx.GIF || u === n$.kx.EMOJI || u === n$.kx.STICKER) && m === l && h === c.id,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                  }),
              });
    }),
);
var nY = n(201349),
    nX = n(625928),
    nQ = n(960850),
    nJ = n(702841),
    nZ = n(364522),
    n0 = n(215497),
    n1 = n(914905),
    n2 = n(750943),
    n4 = n(844222),
    n7 = n(780777),
    n3 = n(518960),
    n8 = n(811998);
let n5 = { scale: 0.95, opacity: 0 },
    n9 = { scale: 1, opacity: 1 },
    n6 = { scale: 1, opacity: 1 },
    le = { tension: 2400, friction: 52 },
    lt = `.${n8.EJ}`,
    ln = { behavior: "smooth", block: "nearest", inline: "nearest" };
function ll(e) {
    let { channelId: t, onClick: n, onClose: l, onMouseEnter: a, listItemProps: r } = e,
        o = s.useRef(null),
        c = (0, g.bG)([eP.A], () => eP.A.getChannel(t), [t]);
    return (
        q()(null != c, "Forum Channel is null"),
        (0, i.jsxs)(E.D, {
            ...r,
            "aria-label": eK.intl.string(eK.t.nzoF5p),
            className: n8.EJ,
            onMouseEnter: a,
            onClick: (e) => {
                0 === e.detail && o.current?.activateUploadDialogue(), (0, tg.ri)({ isMobile: !1 }), n?.();
            },
            children: [
                (0, i.jsx)(n7.A, {
                    className: n8.Fg,
                    ref: o,
                    onChange: (e) => {
                        l?.(),
                            (0, n3.R)(e.currentTarget.files, c, ti.C.FirstThreadMessage, {
                                requireConfirm: !0,
                                origin: "file_picker",
                            }),
                            (e.currentTarget.value = null);
                    },
                    multiple: c.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
                (0, i.jsx)(n2.X, { size: "custom", color: "currentColor", width: 28, height: 28, className: n8.T3 }),
            ],
        })
    );
}
function li(e) {
    let { channelId: t, closePopout: n } = e,
        [l, a] = s.useState(!1),
        { reducedMotion: r } = s.useContext(n4.C),
        o = (0, nT.z)({ from: r.enabled ? n9 : n5, to: n6, config: le }, "animate-always"),
        c = (0, g.bG)([L.A], () => L.A.keyboardModeEnabled),
        d = (0, g.bG)([tr.A], () => tr.A.getUploads(t, nB.oU.CREATE_FORUM_POST.drafts.type)),
        x = (0, m.Ay)({
            id: "forum-composer-attachments-popout",
            isEnabled: c,
            orientation: h.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, i.jsx)(tf.animated.div, {
        className: n8.jC,
        onMouseLeave: () => {
            l || c || n();
        },
        onFocus: (e) => {
            e.target.scrollIntoView(ln);
        },
        style: o,
        children: (0, i.jsx)(nZ.Ip, {
            orientation: "horizontal",
            className: n8.SW,
            paddingFix: !1,
            fade: !0,
            children: (0, i.jsx)(u.hD, {
                navigator: x,
                children: (0, i.jsx)(u.PR, {
                    children: (e) => {
                        let { ref: n, ...l } = e;
                        return (0, i.jsxs)("div", {
                            className: n8.p8,
                            ref: n,
                            ...l,
                            children: [
                                d.map((e) =>
                                    (0, i.jsx)(
                                        n1.A,
                                        {
                                            channelId: t,
                                            draftType: nB.oU.CREATE_FORUM_POST.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: c,
                                            hideFileName: !0,
                                            size: n0.L.SMALL,
                                        },
                                        e.id,
                                    ),
                                ),
                                (0, i.jsx)(ls, { channelId: t, setFileInputOpen: a }),
                            ],
                        });
                    },
                }),
            }),
        }),
    });
}
function ls(e) {
    let { channelId: t, setFileInputOpen: n } = e,
        l = { ...(0, u.rm)("upload-button"), tabIndex: 0 };
    return (0, i.jsx)(ll, {
        channelId: t,
        onClick: () => {
            n(!0);
        },
        onClose: () => {
            n(!1),
                requestAnimationFrame(() => {
                    (0, nw.vq)(document.activeElement, HTMLElement) && document.activeElement.scrollIntoView(ln);
                });
        },
        listItemProps: l,
    });
}
function la(e) {
    let { channelId: t } = e,
        [n, l] = s.useState(!1),
        a = s.useRef(null),
        r = (0, g.bG)([tr.A], () => tr.A.getUploads(t, nB.oU.CREATE_FORUM_POST.drafts.type)),
        o = r.length,
        c = o > 0;
    s.useEffect(() => {
        n && !c && l(!1);
    }, [n, c]),
        s.useEffect(() => {
            if (document.activeElement !== document.body && null != document.activeElement) return;
            l(o > 0);
            let e = requestAnimationFrame(() => {
                let e = a.current?.querySelector(lt);
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
        className: n8.kL,
        ref: a,
        onBlur: (e) => {
            null == e.relatedTarget ||
                a.current?.contains(e.relatedTarget) ||
                (e.relatedTarget?.closest('[role="dialog"]') == null && u());
        },
        children: [
            c
                ? !n &&
                  (0, i.jsxs)(E.D, {
                      "aria-label": eK.intl.string(eK.t.nzoF5p),
                      className: n8.fY,
                      tabIndex: 0,
                      onClick: d,
                      onFocus: () => {
                          d(),
                              c &&
                                  requestAnimationFrame(() => {
                                      let e = a.current?.querySelector(lt);
                                      e?.focus();
                                  });
                      },
                      onMouseEnter: d,
                      children: [
                          (0, i.jsx)(n1.J, { upload: r[0], size: n0.L.SMALL }),
                          (0, i.jsx)("div", { className: n8.qS, children: o }),
                      ],
                  })
                : (0, i.jsx)(ll, { onMouseEnter: d, channelId: t }),
            n && (0, i.jsx)(li, { channelId: t, closePopout: u }),
        ],
    });
}
var lr = n(343151);
function lo(e) {
    let { parentChannel: t } = e,
        n = (0, nJ.yK)([tr.A], () => {
            let e = tr.A.getUploads(t.id, nB.oU.CREATE_FORUM_POST.drafts.type);
            return e?.filter((e) => !0 !== e.isThumbnail);
        });
    return (0, i.jsxs)("div", {
        className: lr.kL,
        children: [
            (0, i.jsx)(b.E, {
                variant: "text-md/semibold",
                color: "text-muted",
                children: eK.intl.string(eK.t.omKGKu),
            }),
            (0, i.jsx)(b.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eK.intl.string(eK.t["zUjLl+"]),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(nZ.Ip, {
                    className: lr.mw,
                    orientation: "horizontal",
                    paddingFix: !1,
                    fade: !0,
                    children: (0, i.jsxs)("div", {
                        className: lr.p8,
                        children: [
                            n.map((e) =>
                                (0, i.jsx)(
                                    n1.A,
                                    {
                                        channelId: t.id,
                                        draftType: nB.oU.CREATE_FORUM_POST.drafts.type,
                                        upload: e,
                                        keyboardModeEnabled: !0,
                                        hideFileName: !0,
                                        size: n0.L.SMALL,
                                    },
                                    e.id,
                                ),
                            ),
                            (0, i.jsx)(ll, { channelId: t.id }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
var lc = n(241326),
    ld = n(851023),
    lu = n(915089),
    lm = n(607470),
    lh = n(703007),
    lx = n(635377),
    lg = n.n(lx);
let lf = "absolute",
    lj = new (lg())({ max: 100 });
function lp(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: l } = e;
    return s.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: l } = e,
                    i = `${t}-${n}-${l}`,
                    s = lj.get(i);
                if (null != s) return s;
                {
                    let e = ((e, t, n, l) => {
                        if (0 === n) return [];
                        if (1 === n) return [{ width: e, height: t, top: 0, left: 0, position: lf }];
                        if (2 === n) {
                            let n = Math.ceil((e - l) / 2);
                            return [
                                { top: 0, left: 0, position: lf, width: n, height: t },
                                { top: 0, left: n + l, position: lf, width: n, height: t },
                            ];
                        }
                        if (3 === n) {
                            let n = Math.ceil((e - l) / 2),
                                i = Math.ceil((t - l) / 2);
                            return [
                                { top: 0, left: 0, position: lf, width: n, height: t },
                                { top: 0, left: n + l, position: lf, width: n, height: i },
                                { top: i + l, left: n + l, position: lf, width: n, height: i },
                            ];
                        }
                        {
                            let n = Math.ceil((e - l) / 2),
                                i = Math.ceil((t - l) / 2);
                            return [
                                { top: 0, left: 0, position: lf, width: n, height: i },
                                { top: i + l, left: 0, position: lf, width: n, height: i },
                                { top: 0, left: n + l, position: lf, width: n, height: i },
                                { top: i + l, left: n + l, position: lf, width: n, height: i },
                            ];
                        }
                    })(n, l, t, 4);
                    return lj.set(i, e), e;
                }
            })({ numAttachments: t, containerWidth: n, containerHeight: l }),
        [t, n, l],
    );
}
function lv(e) {
    return e.map((t, n) => ({
        minWidth: 2 * e[n].width,
        minHeight: 2 * e[n].height,
        maxWidth: 2 * e[n].width,
        maxHeight: 2 * e[n].height,
    }));
}
n(323874), n(14289), n(35956);
var lA = n(304162),
    lC = n(735438),
    lN = n(724442),
    lb = n(998218),
    lE = n(36491),
    lS = n(222209);
let ly = [{ name: "Media Post Thumbnail", extensions: ["jpg", "jpeg", "png", "gif", "webp"] }],
    lT = (0, lu.Ld)();
function lI(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: l } = e,
        s = lp({ numAttachments: t.length, containerWidth: n, containerHeight: l });
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsx)(
                "div",
                {
                    style: s[t],
                    children:
                        !0 === e.isVideo
                            ? (0, i.jsx)(lm.A, { src: e.src, className: lS.xn, "aria-hidden": !0 })
                            : (0, i.jsx)("img", { src: e.src, className: lS.xn, "aria-hidden": !0, alt: e?.alt ?? "" }),
                },
                e.src,
            ),
        ),
    });
}
let lR = (e) => {
    let { parentChannel: t } = e,
        { textAreaState: l } = (0, ev.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        a = (0, nJ.bG)([L.A], () => L.A.keyboardModeEnabled),
        o = (function (e, t) {
            let { mediaAttachments: n, hasThumbnail: l } = (function (e) {
                    let [t, n] = s.useState(null),
                        l = (0, nJ.yK)([tr.A], () => {
                            let t = tr.A.getUploads(e.id, nB.oU.CREATE_FORUM_POST.drafts.type),
                                n = t.find((e) => e.isThumbnail);
                            return null != n ? [n] : t.filter((e) => e.isVideo || e.isImage);
                        }),
                        i = s.useMemo(() => l.some((e) => e.isThumbnail), [l]);
                    return (
                        s.useEffect(() => {
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
                        { mediaAttachments: t, hasThumbnail: i }
                    );
                })(e),
                i = Math.max(lA.A8 - (n?.length ?? 0), 0),
                { embeds: a } = (function (e, t, n) {
                    let l = s.useRef(new Map()),
                        [, i] = s.useState(null),
                        [a, r] = s.useState(null),
                        o = s.useMemo(
                            () =>
                                lC.debounce((e, n) => {
                                    if (null == n || e || 0 === t) return;
                                    let i = n.match(lb.A.URL_REGEX);
                                    if (null == i || 0 === i.length) {
                                        (l.current = new Map()), r(null);
                                        return;
                                    }
                                    r(lC.uniq(i).slice(0, lA.A8));
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
                                        let t = await lE.L4(s);
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
                    let c = (0, lN.A)(l),
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
                            let t = (0, lA.m3)(e);
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
                null != c && nH.A.remove(t.id, c.id, nB.oU.CREATE_FORUM_POST.drafts.type),
                    (0, n3.R)(e.currentTarget.files, t, nB.oU.CREATE_FORUM_POST.drafts.type, {
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
                        let { default: l } = await n.e("70698").then(n.bind(n, 427281));
                        return (n) =>
                            (0, i.jsx)(l, {
                                ...n,
                                upload: e,
                                channelId: t.id,
                                draftType: nB.oU.CREATE_FORUM_POST.drafts.type,
                                onSubmit: (n) => {
                                    let { name: l, description: i, spoiler: s } = n;
                                    nH.A.update(t.id, e.id, nB.oU.CREATE_FORUM_POST.drafts.type, {
                                        filename: l,
                                        description: i,
                                        spoiler: s,
                                    });
                                },
                                disableSpoiler: !0,
                            });
                    });
        },
        g = (0, i.jsx)(lh.A, {
            color: f.XD.CUSTOM,
            className: lS.zL,
            innerClassName: lS.Nr,
            onChange: h,
            multiple: !1,
            "aria-hidden": !0,
            filters: ly,
            "aria-describedby": lT,
            "aria-label": u ? eK.intl.string(eK.t.MxJI3f) : eK.intl.string(eK.t.Cbiofa),
            children: u
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(lI, { mediaAttachments: o, containerWidth: m.width, containerHeight: m.height }),
                          (0, i.jsxs)("div", {
                              className: r()(lS.On, { [lS.bP]: o?.length > 2 }),
                              children: [
                                  (0, i.jsx)(b.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: eK.intl.string(eK.t.MxJI3f),
                                  }),
                                  null == c &&
                                      (0, i.jsx)(nR.R, { size: "xs", color: "currentColor", className: lS.IZ }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(n2.X, {
                              size: "custom",
                              width: 39,
                              height: 39,
                              color: "currentColor",
                              className: lS.T3,
                          }),
                          (0, i.jsx)(b.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: eK.intl.string(eK.t.Cbiofa),
                          }),
                      ],
                  }),
        });
    return (0, i.jsx)("div", {
        className: lS.iT,
        style: m,
        children:
            null != c
                ? (0, i.jsx)(n0.A, {
                      actions: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(ld.A, {
                                  className: lS.XI,
                                  tooltip: eK.intl.string(eK.t.Y8ujqr),
                                  onClick: x,
                                  children: (0, i.jsx)(nR.R, { size: "xs", color: "currentColor" }),
                              }),
                              (0, i.jsx)(ld.A, {
                                  className: lS.XI,
                                  tooltip: eK.intl.string(eK.t.vN7REz),
                                  onClick: () => nH.A.remove(t.id, c.id, nB.oU.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, i.jsx)(lc.u, { size: "md", color: "currentColor" }),
                              }),
                          ],
                      }),
                      draftType: nB.oU.CREATE_FORUM_POST.drafts.type,
                      id: c.id,
                      channelId: t.id,
                      handleEditModal: x,
                      keyboardModeEnabled: a,
                      size: n0.L.SMALL,
                      className: lS.Xc,
                      children: g,
                  })
                : g,
    });
};
var lk = n(451909),
    l_ = n(375199),
    lM = n(141268),
    lw = n(931664),
    lD = n(631576),
    lL = n(474078),
    lP = n(55294),
    lO = n(383233),
    lF = n(101392),
    lG = n(806150),
    lz = n(753738);
function lU(e, t) {
    return { type: e, message: t ?? null };
}
function lH(e, t) {
    return lU(1, (0, lz.cw)(e, t?.id));
}
function lB(e, t) {
    return null == e ||
        (0 === e.type && null != t.content && t.content.trim().length > 0) ||
        (2 === e.type && null != t.tags && t.tags.length > 0)
        ? null
        : (e.message ?? null);
}
var lV = n(774812),
    lW = n(91871),
    l$ = n.n(lW),
    lq = n(892547),
    lK = n(658675),
    lY = n(628284),
    lX = n(506115);
let lQ = "data-listbox-item-id",
    lJ = Object.freeze({ STANDARD: lX.wH, BRAND: lX.hE });
function lZ(e) {
    return String(e);
}
let l0 = s.createContext({ activeDescendant: null, selected: new Set(), setSelected: () => null, itemToString: lZ });
function l1(e) {
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
            itemToString: f = lZ,
            emptyStateText: p,
            emptyStateHeader: v,
            onQueryChange: A,
        } = e,
        [C, E] = s.useState(""),
        S = s.useCallback(
            (e) => {
                E(e), A?.(e);
            },
            [A],
        ),
        [y] = s.useState(!0),
        [T, I] = s.useState(null),
        R = s.useId(),
        k = s.useRef(null);
    s.useLayoutEffect(() => {
        let e = document.querySelector(`[${lQ}="${T}"]`),
            t = k.current;
        null != t && null != e && t.scrollIntoViewNode({ node: e, padding: 12 });
    }, [T]);
    let _ = n(C),
        M = 0 === _.length,
        w = v ?? eK.intl.string(eK.t["4o4z3e"]),
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
                    className: r()(lX.EA, o),
                    children: [
                        (0, i.jsx)("div", {
                            className: lX.wx,
                            children: (0, i.jsx)(lq.I, {
                                size: "sm",
                                autoFocus: x,
                                placeholder: t,
                                query: C,
                                onChange: S,
                                onKeyDown: s,
                                onBlur: () => I(null),
                                onClear: () => S(""),
                                inputProps: { "aria-multiline": !1, "aria-activedescendant": null != T ? T : void 0 },
                            }),
                        }),
                        (0, i.jsx)("div", {
                            children:
                                y &&
                                (M
                                    ? (0, i.jsxs)("div", {
                                          className: lX.Ie,
                                          children: [
                                              (0, i.jsx)(j.D, { variant: "heading-md/semibold", children: w }),
                                              (0, i.jsx)(b.E, {
                                                  color: "text-muted",
                                                  variant: "text-md/normal",
                                                  children: p ?? eK.intl.string(eK.t.QwSXv8),
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)(l0.Provider, {
                                          value: { activeDescendant: T, selected: l, setSelected: a, itemToString: f },
                                          children: (0, i.jsx)(N.OZ, {
                                              ...u,
                                              style: { maxHeight: 46 * g },
                                              "aria-multiselectable": h,
                                              id: R,
                                              ref: k,
                                              className: r()(lX.p_, lX.XG, c),
                                              sections: [_.length],
                                              sectionHeight: 0,
                                              rowHeight: 40,
                                              renderRow: (e) => {
                                                  let { row: t } = e;
                                                  return _[t];
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
let l2 = s.createContext(null);
function l4(e) {
    let { value: t, children: n, disabled: l = !1, selectedColor: a = lJ.STANDARD, ...o } = e,
        { activeDescendant: c, selected: d, setSelected: m, itemToString: h } = s.useContext(l0),
        x = h(t),
        g = c === x,
        f = o?.selected ?? d.has(t),
        j = (0, u.rm)(x);
    return (0, i.jsx)(E.D, {
        tag: "li",
        id: x,
        onClick: () => (l ? null : m(t)),
        [lQ]: t,
        className: r()(lX.AS, { [lX.in]: g, [a]: f, [lX.r9]: l }),
        ...j,
        role: "option",
        "aria-selected": f,
        "aria-disabled": l,
        children: (0, i.jsx)(l2.Provider, { value: t, children: n }),
    });
}
(l4.Colors = lJ),
    (l4.Label = function (e) {
        let { children: t } = e;
        return (0, i.jsx)("span", { className: lX.IR, children: t });
    }),
    (l4.Icon = function (e) {
        let { children: t } = e;
        return (0, i.jsx)("span", { className: lX.pp, children: t });
    }),
    (l4.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = s.useContext(l0),
            l = s.useContext(l2);
        return (0, i.jsx)("span", {
            className: lX.pp,
            children: (0, i.jsx)(lK.P, { checked: t ?? (null != l && n.has(l)) }),
        });
    }),
    (l4.Checkmark = function () {
        let { selected: e } = s.useContext(l0),
            t = s.useContext(l2);
        return e.has(t)
            ? (0, i.jsx)("span", {
                  className: lX.pp,
                  children: (0, i.jsx)(lY.y, { size: "custom", color: "currentColor", width: 20, height: 20 }),
              })
            : null;
    });
var l7 = n(305866),
    l3 = n(183610);
function l8(e) {
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
    return (0, i.jsx)(l7.l, {
        className: r()(l3.kL, l3.XG, c),
        children: (0, i.jsx)(l1, {
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
var l5 = n(159273),
    l9 = n(6858);
let l6 = (e) => {
    let { tag: t } = e,
        { id: n, name: l, emojiId: s, emojiName: a } = t,
        r = (0, g.bG)([l5.Ay], () => (null != s ? l5.Ay.getUsableCustomEmojiById(s) : null)),
        o = null != s || null != a;
    return (0, i.jsx)(
        l4,
        {
            value: n,
            children: (0, i.jsx)(l4.Label, {
                children: (0, i.jsxs)("div", {
                    className: l9.nM,
                    children: [
                        o
                            ? (0, i.jsx)(t4.A, {
                                  className: l9.__invalid_emoji,
                                  emojiId: s,
                                  emojiName: a,
                                  animated: !!r?.animated,
                              })
                            : (0, i.jsx)(nz.g, { size: "md", color: "currentColor", className: l9.__invalid_emoji }),
                        (0, i.jsx)(b.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                    ],
                }),
            }),
        },
        n,
    );
};
function ie(e) {
    let { parentChannel: t, appliedTags: n, maxTagsApplied: l, onSelectTag: s, onClose: a } = e,
        r = (0, ex.OT)(t);
    return (0, i.jsx)(l8, {
        value: n,
        onChange: (e) => {
            (!l || n.has(e)) && (s(e), a());
        },
        placeholder: eK.intl.string(eK.t.MbhGm7),
        "aria-label": eK.intl.string(eK.t.MbhGm7),
        children: (e) =>
            r.filter((t) => l$()(e.toLowerCase(), t.name.toLowerCase())).map((e) => (0, i.jsx)(l6, { tag: e }, e.id)),
    });
}
var it = n(376310),
    il = n(291747),
    ii = n(935090);
let is = (e) => {
    let { rateLimitPerUser: t, slowmodeCooldownGuess: n, isBypassSlowmode: l, leadingIcon: s = !1 } = e,
        a = (0, nQ.VI)(t, !0),
        o = (0, nQ.pS)(n, l),
        c = (0, i.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: o }),
        d = (0, i.jsx)(il.x, { size: "xs", color: "currentColor", className: r()(ii.Eq, { [ii.iE]: s }) });
    return (0, i.jsx)(X.m, {
        text: a,
        children: (0, i.jsx)("div", {
            className: ii.ns,
            children: s ? (0, i.jsxs)(i.Fragment, { children: [d, c] }) : (0, i.jsxs)(i.Fragment, { children: [c, d] }),
        }),
    });
};
var ia = n(770178),
    ir = n(765548);
let io = () => {
    let [e, t] = s.useState(400),
        n = (0, ir.A)((e) => {
            t(e.target.clientWidth);
        });
    return { containerRef: (0, ia.w)(n), containerWidth: e };
};
var ic = n(746080),
    id = n(955780);
let iu = nB.oU.CREATE_FORUM_POST;
function im(e) {
    var t, n;
    let l,
        a,
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
        S = (0, g.yK)([tr.A], () => tr.A.getUploads(o.id, ti.C.FirstThreadMessage)),
        y = p && E && f,
        T = o?.isMediaChannel() === !0,
        I =
            ((t = o),
            (n = x),
            (l = (0, ev.ST)()),
            (a = (0, ex.Hv)(t)),
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
                            (0, nw.vq)(n.current, HTMLTextAreaElement) && n.current?.focus();
                        }, 0),
                        t.isGameInvitesChannel())
                    )
                        return;
                    ((o && s.length > 0) ||
                        (r.textValue.trim().length > 0 && r.textValue.trim() !== a) ||
                        tr.A.getUploads(t.id, ti.C.FirstThreadMessage).length > 0) &&
                        i();
                }
            }, [l, t, a, n])),
        R = (function (e) {
            let { formOpen: t } = (0, ev.kU)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, d.x),
                n = (0, ev.ST)(),
                l = (0, lP.NV)({ parentChannel: e });
            s.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                e(null), t(null);
            }, [t, n]);
            let i = s.useCallback(
                (t, l, i) => {
                    let { name: s, textAreaState: a } = n.getState();
                    null == t && (t = a.textValue), (t = t.trim());
                    let { content: r } = lk.Ay.parse(e, t);
                    if (
                        ((t = r),
                        (null == l || 0 === l.length) &&
                            (l = lw.A.getStickerPreview(e.id, iu.drafts.type)?.map((e) => e.id)),
                        (null == i || 0 === i.length) && (i = tr.A.getUploads(e.id, ti.C.FirstThreadMessage)),
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
                        f = lV.A.hasSeen(e.id);
                    if (!u)
                        return (
                            e.isGameInvitesChannel() ||
                                ((0, tg.jr)({ guildId: e.guild_id, channelId: e.id }),
                                f || n.getState().setGuidelinesOpen(!0),
                                x()),
                            { shouldClear: !1, shouldRefocus: !1 }
                        );
                    let { content: j, stickers: p, uploads: v, hasNameError: A, hasMessageError: C } = i(t, s, a);
                    if (
                        (r(A ? lU(0, eK.intl.string(eK.t["71wuR0"])) : null),
                        o(C ? lU(0, eK.intl.string(eK.t["w/BT3G"])) : null),
                        A || C)
                    )
                        return { shouldClear: !1, shouldRefocus: !0 };
                    try {
                        c(!0);
                        let { valid: t } = await (0, lG.i)({
                            content: j,
                            stickers: p,
                            uploads: v,
                            type: iu,
                            channel: e,
                        });
                        if (!t) return { shouldClear: !1, shouldRefocus: !0 };
                        let n = await l(j, p, v);
                        return (
                            (0, tl.JA)(n),
                            td.A.resort(e.id),
                            (0, lD.x5)(e.id, iu.drafts.type),
                            d(),
                            m(!1),
                            h(!1),
                            lV.A.markAsSeen(e.id),
                            g(!1),
                            { shouldClear: !0, shouldRefocus: !1 }
                        );
                    } catch (t) {
                        return (
                            t.body?.code === e$.t02.AUTOMOD_TITLE_BLOCKED
                                ? r(lH(t.body, e))
                                : t.body?.code === e$.t02.AUTOMOD_MESSAGE_BLOCKED
                                  ? o(lH(t.body, e))
                                  : t.body?.code === e$.t02.INVALID_FORM_BODY &&
                                    t.body?.errors?.name != null &&
                                    r(lU(3, eK.intl.string(eK.t["71wuR0"]))),
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
                className: r()(id.kL, { [id.yZ]: !p }),
                onClick: !p && f ? I : void 0,
                children: (0, i.jsxs)("form", {
                    onMouseDown: b,
                    onFocus: b,
                    onSubmit: (e) => {
                        e.preventDefault(), !f || o.isGameInvitesChannel() || R();
                    },
                    children: [
                        (0, i.jsxs)("div", {
                            className: id.KJ,
                            children: [
                                (0, i.jsx)(ih, { parentChannel: o, isSearchLoading: c, inputRef: x }),
                                (0, i.jsxs)("div", {
                                    className: v ? id.vJ : id.Zd,
                                    children: [
                                        (0, i.jsx)(ix, {
                                            editorRef: A,
                                            parentChannel: o,
                                            isSearchLoading: c,
                                            numResults: u,
                                            inputRef: x,
                                            canCreatePost: f,
                                        }),
                                        p &&
                                            (0, i.jsx)(ip, {
                                                editorRef: A,
                                                setEditorRef: C,
                                                parentChannel: o,
                                                submit: R,
                                                disabled: !f,
                                            }),
                                        v && (0, i.jsx)(iv, {}),
                                    ],
                                }),
                                y && (T ? (0, i.jsx)(lR, { parentChannel: o }) : (0, i.jsx)(la, { channelId: o.id })),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: id.Zd,
                            children: [
                                y && T && (0, i.jsx)(lo, { parentChannel: o }),
                                p && (0, i.jsx)(ib, { className: id.CN, parentChannel: o, canCreatePost: f }),
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
}
let ih = s.memo(function (e) {
        let { parentChannel: t, isSearchLoading: n, inputRef: l } = e,
            {
                formOpen: a,
                name: r,
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
            m = (0, ev.ST)(),
            h = (0, ex.Hv)(t),
            x = s.useCallback(() => {
                m.getState().resetFormState(),
                    nU.A.clearDraft(t.id, ti.C.ThreadSettings),
                    nU.A.clearDraft(t.id, ti.C.FirstThreadMessage),
                    nH.A.clearAll(t.id, ti.C.FirstThreadMessage),
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
                    !a &&
                    (r.trim().length > 0 ||
                        (o.textValue.trim().length > 0 && o.textValue.trim() !== h) ||
                        tr.A.getUploads(t.id, ti.C.FirstThreadMessage).length > 0) &&
                    c
                        ? (0, i.jsx)(nR.R, { size: "md", color: "currentColor", className: id.rD })
                        : (0, i.jsx)(nL.B, { onClear: x, hasContent: a, isLoading: n || u, size: "md" }),
                [n, a, c, r, o.textValue, x, t.id, h, u],
            );
        return (0, i.jsx)("div", { className: id.VB, children: g });
    }),
    ix = s.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: l, editorRef: a, isSearchLoading: r, numResults: o } = e,
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
            f = (0, ev.ST)(),
            p = null != t.topic && 0 !== t.topic.length,
            v = lV.A.hasSeen(t.id),
            A = (0, ex.Hv)(t),
            C = (0, g.bG)([ez.default], () => ez.default.getCurrentUser());
        q()(null != C, "current user cannot be null"),
            (0, to.Vo)({
                event: e$.jej.FOCUS_COMPOSER_TITLE,
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
                            await (0, n3.R)([n], t, ti.C.FirstThreadMessage, { origin: "clipboard" }),
                            f.getState().setFormOpenFromUserAction();
                    }
                },
                [t, f],
            ),
            b = lB(u, { content: m });
        return (0, i.jsxs)("div", {
            className: id.gn,
            onPaste: N,
            children: [
                c && x
                    ? (0, i.jsx)(j.D, { variant: "heading-md/semibold", className: id.DD, children: m })
                    : (0, i.jsxs)(tW.B, {
                          gap: 4,
                          children: [
                              (0, i.jsx)(nD.d, {
                                  value: m,
                                  placeholder:
                                      !l || t.isGameInvitesChannel()
                                          ? eK.intl.string(eK.t["5h0QOP"])
                                          : c || (h.textValue.length > 0 && h.textValue.trim() !== A)
                                            ? eK.intl.string(eK.t.lU4dDS)
                                            : eK.intl.string(eK.t.CjmivA),
                                  rows: 1,
                                  maxLength: e$.Ign,
                                  onChange: (e) => {
                                      let n = e.target.value,
                                          l = (0, lL.A)(n, !1);
                                      f.getState().setName(l);
                                      let i = 0 === l.trim().length,
                                          s = 0 === h.textValue.trim().length,
                                          a = h.textValue.trim() === A;
                                      i && (s || a) && f.getState().setHasClickedForm(!1),
                                          c || td.A.updateForumSearchQuery(t.id, l);
                                  },
                                  onFocus: () => {
                                      f.getState().setTitleFocused(!0), f.getState().setBodyFocused(!1);
                                  },
                                  onBlur: () => {
                                      f.getState().setTitleFocused(!1);
                                      let e = (0, lL.A)(m, !0);
                                      e !== m && (f.getState().setName(e), c || td.A.updateForumSearchQuery(t.id, e));
                                  },
                                  onKeyDown: (e) => {
                                      "Enter" === e.key &&
                                          (e.preventDefault(),
                                          e.stopPropagation(),
                                          c && m.length > 0
                                              ? a?.focus()
                                              : l && e.shiftKey && !t.isGameInvitesChannel()
                                                ? ((0, tg.sB)({ guildId: t.guild_id, channelId: t.id }),
                                                  p && !v && f.getState().setGuidelinesOpen(!0),
                                                  f.getState().setFormOpenFromUserAction(),
                                                  m.trim().length > 0 && (f.getState().setBodyFocused(!0), a?.focus()))
                                                : c ||
                                                  !(m.length > 0) ||
                                                  null != o ||
                                                  r ||
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
                                  className: id.DD,
                                  ref: n,
                              }),
                              null != b ? (0, i.jsx)(nP.U, { error: b }) : null,
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
                              (0, i.jsx)(ig, { parentChannel: t }),
                              t.isGameInvitesChannel() ? null : (0, i.jsx)(iE, { parentChannel: t, canCreatePost: l }),
                          ],
                      }),
            ],
        });
    });
function ig(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, ev.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, d.x),
        l = (0, ev.ST)();
    return null != t.topic && 0 !== t.topic.length
        ? (0, i.jsx)(X.m, {
              text: eK.intl.string(eK.t["4d4T4l"]),
              children: (0, i.jsx)(nO.K, {
                  size: "sm",
                  variant: "secondary",
                  onClick: () => {
                      l.getState().setGuidelinesOpen(!n);
                  },
                  icon: nI.B,
                  "aria-label": eK.intl.string(eK.t["4d4T4l"]),
              }),
          })
        : null;
}
let ij = s.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            l = new lO.Ay({ channel_id: t.id, content: n }),
            { content: s } = (0, l_.A)(l, {
                hideSimpleEmbedContent: !0,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0,
            }),
            a = (0, lM.A)({ message: l, channel: t, compact: !1 }, s, !1);
        return (0, i.jsx)("div", { className: r()(id.SL, id.ly), children: a });
    }),
    ip = s.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: l = !1, editorRef: a, setEditorRef: o } = e,
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
        let N = lB(u, { content: h.textValue });
        return (0, i.jsx)("div", {
            className: id.IP,
            children: (0, i.jsxs)("div", {
                className: id.hQ,
                children: [
                    m
                        ? (0, i.jsx)(ij, { parentChannel: t, textValue: h.textValue })
                        : (0, i.jsx)("div", {
                              onClick: p,
                              children: (0, i.jsx)(nY.Ay, {
                                  type: iu,
                                  setEditorRef: o,
                                  channel: t,
                                  placeholder: eK.intl.string(eK.t["8IPnv1"]),
                                  textValue: h.textValue,
                                  richValue: h.richValue,
                                  focused: x,
                                  className: id.gM,
                                  innerClassName: r()(id.SL, { [id.cr]: null != N }),
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
                    (0, i.jsx)(nP.U, { error: N }),
                ],
            }),
        });
    });
function iv() {
    return (0, i.jsx)("div", {
        className: id.fv,
        children: (0, i.jsx)(b.E, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: eK.intl.string(eK.t["WE/cYo"]),
        }),
    });
}
function iA(e) {
    let { textAreaState: t } = (0, ev.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        n = (0, g.yK)([tr.A], () => tr.A.getUploads(e.id, ti.C.FirstThreadMessage));
    return s.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n]);
}
function iC(e) {
    let t = iA(e),
        { appliedTags: n, name: l } = (0, ev.kU)((e) => {
            let { appliedTags: t, name: n } = e;
            return { appliedTags: t, name: n };
        }, d.x);
    return s.useMemo(() => e.hasFlag(ic.lx.REQUIRE_TAG) && 0 === n.size && l.length > 0 && t, [n, l, e, t]);
}
function iN() {
    let { previewing: e } = (0, ev.kU)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, d.x),
        t = (0, ev.ST)(),
        n = s.useCallback(() => {
            t.getState().setPreviewing(!e), (0, tg.Q_)();
        }, [e, t]),
        l = e ? eK.intl.string(eK.t.ojM1xJ) : eK.intl.string(eK.t.SKNnqq);
    return (0, i.jsx)(X.m, {
        text: l,
        children: (0, i.jsx)(nO.K, {
            variant: "secondary",
            size: "sm",
            onClick: n,
            icon: e ? nF.G : nG.b,
            "aria-label": l,
        }),
    });
}
let ib = s.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: l } = e,
        { textAreaState: a, name: r } = (0, ev.kU)((e) => {
            let { textAreaState: t, name: n } = e;
            return { textAreaState: t, name: n };
        }, d.x),
        { rateLimitPerUser: o } = t,
        c = o > 0,
        u = (0, g.bG)([lF.A], () => lF.A.getSlowmodeCooldownGuess(t.id, lF.R.CreateThread)),
        m = (0, nQ._i)(t, lF.R.CreateThread),
        h = iC(t),
        x = (0, ev.ST)(),
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
                (0, i.jsx)(iy, { parentChannel: t }),
                (0, i.jsx)("div", { className: id.XJ }),
                (0, i.jsxs)("div", {
                    className: id.gO,
                    children: [
                        (0, i.jsxs)("div", {
                            className: id.ne,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: id.Kk,
                                    children: [
                                        (0, i.jsx)(nX.A, { type: iu, textValue: a.textValue, className: id.Dq }),
                                        c &&
                                            (0, i.jsx)(is, {
                                                rateLimitPerUser: o,
                                                slowmodeCooldownGuess: u,
                                                isBypassSlowmode: m,
                                                leadingIcon: !0,
                                            }),
                                    ],
                                }),
                                (0, i.jsx)(ig, { parentChannel: t }),
                                j && (0, i.jsx)(iN, {}),
                                (0, i.jsx)(iE, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: c && !m && u > 0,
                                }),
                            ],
                        }),
                        (0, i.jsx)(nK, { type: iu, className: id.n1, onClick: f, channel: t }, "expression"),
                    ],
                }),
                h &&
                    (0, i.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-feedback-critical",
                        className: id.ku,
                        children: eK.intl.string(eK.t.xPfNQi),
                    }),
            ],
        })
    );
});
function iE(e) {
    let { parentChannel: t, canCreatePost: n, disabled: l, disableIfInvalid: s = !1 } = e,
        a = (0, W.V)(t),
        {
            submitting: r,
            name: o,
            formOpen: c,
        } = (0, ev.kU)((e) => {
            let { submitting: t, name: n, formOpen: l } = e;
            return { submitting: t, name: n, formOpen: l };
        }, d.x),
        u = iA(t),
        m = !iC(t) && u && o.trim().length > 0;
    return __OVERLAY__ || a
        ? null
        : (0, i.jsx)(S.$, {
              variant: "primary",
              type: "submit",
              size: "sm",
              loading: r,
              disabled: (s && !m) || l || !n,
              icon: ei.o,
              text: c ? eK.intl.string(eK.t.pIuQI6) : eK.intl.string(eK.t.TyAuoT),
          });
}
function iS() {
    return Promise.resolve();
}
function iy(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: l,
            setPopoutOpen: a,
        } = (0, ev.kU)((e) => {
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
        { containerRef: x, containerWidth: g } = io(),
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
              className: id.Pc,
              ref: x,
              children: [
                  (0, i.jsx)(nz.g, { size: "xs", color: "currentColor", className: id.HZ }),
                  (0, i.jsx)("div", {
                      className: id.kU,
                      ref: f,
                      children: (0, i.jsx)(u.hD, {
                          navigator: c,
                          children: (0, i.jsx)(u.PR, {
                              children: (e) => {
                                  let { ref: t, ...s } = e;
                                  return (0, i.jsx)("div", {
                                      className: id.j5,
                                      ref: t,
                                      ...s,
                                      children: A.map((e) =>
                                          (0, i.jsx)(
                                              it.A,
                                              {
                                                  ariaLabel: eK.intl.formatToPlainString(eK.t.FSZVIR, {
                                                      tagName: e.name,
                                                  }),
                                                  tag: e,
                                                  onClick: o && !n.has(e.id) ? void 0 : () => l(e.id),
                                                  disabled: !n.has(e.id) && n.size >= 5,
                                                  selected: n.has(e.id),
                                                  size: it.A.Sizes.SMALL,
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
                              return (0, i.jsx)(ie, {
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
                                  className: id.Wk,
                                  style: { left: C },
                                  children: (0, i.jsx)(S.$, {
                                      ...e,
                                      size: "sm",
                                      variant: "secondary",
                                      icon: k.a,
                                      iconPosition: "end",
                                      text: eK.intl.string(eK.t.w6T0Yc),
                                  }),
                              }),
                      }),
                  (0, i.jsx)("div", {
                      className: r()(id.Wk, id.Dz),
                      children: (0, i.jsx)(S.$, {
                          size: "sm",
                          variant: "secondary",
                          icon: k.a,
                          iconPosition: "end",
                          text: eK.intl.string(eK.t.w6T0Yc),
                      }),
                  }),
              ],
          });
}
var iT = n(602137),
    iI = n(782134),
    iR = n(391242),
    ik = n(191023),
    i_ = n(234914),
    iM = n(930125),
    iw = n(282108),
    iD = n(807632),
    iL = n(627363),
    iP = n(461771),
    iO = n(602034);
let iF = "data-grid-item-id",
    iG = "data-grid-section",
    iz = "data-grid-prev-section-boundary",
    iU = new Set([h.D$.UP, h.D$.DOWN, h.D$.LEFT, h.D$.RIGHT]);
function iH(e) {
    let { section: t, column: n, row: l } = e,
        i = `[${iG}="${t}"]`,
        s = `[aria-colindex="${n}"]`,
        a = `[aria-rowindex="${l}"]`;
    return `${i}${s}${a}`;
}
let iB = { id: "NO_LIST", onKeyDown() {}, ref: s.createRef() },
    iV = s.createContext({ id: "NO_LIST", setFocus() {} }),
    iW = s.createContext(iB);
function i$(e) {
    let { id: t, section: n, row: l, column: i, boundaries: a } = e,
        [r, o] = s.useState(0 === l && 0 === i ? 0 : -1),
        { id: c, setFocus: d } = s.useContext(iV),
        u = s.useCallback(() => d(t), [t, d]);
    return (
        s.useLayoutEffect(
            () =>
                (0, iP.e)(c, (e) => {
                    o(e === t ? 0 : -1);
                }),
            [t, c],
        ),
        {
            [iF]: (0, iO.t$)(c, t),
            [iG]: n,
            [iz]: a[n],
            role: "gridcell",
            "aria-rowindex": l,
            "aria-colindex": i,
            tabIndex: r,
            onFocus: u,
        }
    );
}
function iq(e) {
    let { children: t, navigator: n } = e,
        {
            id: l,
            setFocus: a,
            containerProps: { onKeyDown: r, ref: o },
        } = n,
        c = s.useMemo(() => ({ id: l, setFocus: a }), [l, a]),
        d = s.useMemo(() => ({ onKeyDown: r, ref: o, id: l }), [r, o, l]);
    return (0, i.jsx)(iW.Provider, { value: d, children: (0, i.jsx)(iV.Provider, { value: c, children: t }) });
}
var iK = n(291812),
    iY = n(495544),
    iX = n(437992),
    iQ = n(84120),
    iJ = n(773746),
    iZ = n(140651),
    i0 = n(290863),
    i1 = n(992828);
function i2(e) {
    let { channel: t, className: n } = e,
        l = t.ownerId,
        s = t.guild_id,
        a = (0, g.bG)([tF.A], () => (null == s ? null : tF.A.getGuild(s)?.gameApplicationIds?.[0]), [s]),
        { data: o } = (0, iL.YY)(a),
        c = (0, g.bG)([i0.A], () => (null == l || null == a ? null : i0.A.getApplicationActivity(l, a)), [l, a]),
        d = (0, iQ.em)({ presenceActivity: c, channel: t, activityActionType: void 0 }),
        { primaryColor: u, secondaryColor: m } = (0, iZ.A)(o?.getIconURL(128)),
        h = `linear-gradient(45deg, ${u}, ${m})`;
    if (null == c) return null;
    let x = c.details ?? c.name;
    return (0, i.jsxs)("div", {
        className: r()(n, i1.Nr),
        style: { background: h },
        children: [
            (0, i.jsx)(b.E, { variant: "text-sm/semibold", color: "always-white", className: i1.DD, children: x }),
            (0, i.jsxs)("div", {
                className: i1.yu,
                children: [
                    (0, i.jsx)("div", { className: i1.Hg, children: d }),
                    (0, i.jsx)(iJ.V, { className: i1.$B, activity: c }),
                ],
            }),
        ],
    });
}
var i4 = n(520718);
function i7(e) {
    let { message: t, channel: n, containerWidth: l } = e,
        s = ss({ message: t, channel: n, containerWidth: l - 32, hideTags: !0 }),
        { hasUnreads: a } = (0, ex.X5)(n),
        { content: r } = (0, ex.gk)({ firstMessage: t, formatInline: !1, noStyleAndInteraction: !0, hasUnreads: a });
    return null != s ? s : (0, i.jsx)(iK.Ay, { message: t, content: r, className: i4.BK, compact: !1 });
}
function i3(e) {
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
        x = (0, g.bG)([eL.Ay], () => eL.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: f } = (0, eg.OA)(n),
        { user: j, author: p } = (0, ex.kn)(n),
        v = (0, P.Ay)(n),
        { messageCountText: A } = (0, ex.k6)(n),
        C = s.useRef(null),
        { handleLeftClick: N, handleRightClick: S } = (0, eN.A)({ facepileRef: C, goToThread: l, channel: n });
    s.useEffect(() => {
        u?.(h.current?.ref, m);
    }, [u, m]);
    let y = (0, ex.Mw)(n, iT.T.CREATION_DATE, ng.EG.POSTED_DURATION_AGO),
        { shouldRenderTagsRow: T } = (0, eA.BA)({ channel: n, isNew: !1 }),
        { onFocus: I, ...R } = i$({ id: t, row: o.row, column: o.column, section: o.section, boundaries: c }),
        k = p?.nick ?? j?.username ?? "",
        _ = j?.getAvatarURL(n.guild_id, (0, Z.FT)(Z._3.SIZE_24)),
        M = n.guild_id,
        w = (0, g.bG)([tF.A], () => (null == M ? null : tF.A.getGuild(M)?.gameApplicationIds?.[0]), [M]),
        { data: D } = (0, iL.YY)(w),
        L = (0, g.bG)([iY.default], () => iY.default.getId()),
        O = j?.id != null && j.id === L;
    return (0, i.jsxs)(E.D, {
        ref: h,
        tag: "li",
        onClick: N,
        onFocus: I,
        onContextMenu: S,
        className: r()(i4.kL, d, { [i4.nT]: x }),
        "aria-label": eK.intl.formatToPlainString(eK.t.pgYN6c, { title: v ?? "", count: A }),
        style: { ...a },
        ...R,
        children: [
            (0, i.jsxs)("div", {
                className: i4.wx,
                children: [
                    (0, i.jsx)(J.eu, { src: _, size: Z._3.SIZE_24, className: i4.my, "aria-label": k }),
                    (0, i.jsx)(b.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: i4.fh,
                        children: k,
                    }),
                    (0, i.jsx)(b.E, { variant: "text-xs/medium", color: "text-subtle", className: i4.vE, children: y }),
                ],
            }),
            (0, i.jsxs)(Q.M, {
                className: i4.rf,
                children: [
                    null != f ? (0, i.jsx)(i7, { message: f, channel: n, containerWidth: a.width }) : null,
                    (0, i.jsxs)("div", {
                        className: i4.oO,
                        children: [
                            T
                                ? (0, i.jsx)("div", { className: i4.GA, children: (0, i.jsx)(eA.Ay, { channel: n }) })
                                : null,
                            (0, i.jsx)(i2, { channel: n }),
                            O && null != D && (0, i.jsx)(iX.A, { application: D, size: "sm" }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(Q.M, {
                className: i4.qr,
                children: (0, i.jsx)(so, { channel: n, firstMessage: f, facepileRef: C }),
            }),
        ],
    });
}
var i8 = n(994500),
    i5 =
        (((l = {})[(l.THREE_BY_TWO = 2 / 3)] = "THREE_BY_TWO"),
        (l[(l.SIXTEEN_BY_NINE = 9 / 16)] = "SIXTEEN_BY_NINE"),
        l);
let i9 = { columns: 1, columnWidth: 450 },
    i6 = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i5.THREE_BY_TWO,
            n = e - 2,
            l = Math.ceil(n * t);
        return [n, l];
    },
    se = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i5.THREE_BY_TWO;
        return 60 + i6(e - 24, t)[1] + 24 + 36;
    };
var st = n(313880),
    sn = n(15175);
let sl = s.memo(function (e) {
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
        u = (0, g.bG)([eP.A], () => eP.A.getChannel(n)),
        m = (0, iD.YG)(u);
    return null == u
        ? null
        : m
          ? (0, i.jsx)(i3, {
                id: t,
                channel: u,
                goToThread: l,
                className: a,
                coords: r,
                gridCoords: o,
                observePostVisibilityAnalytics: d,
                gridSectionBoundaries: c,
            })
          : (0, i.jsx)(si, {
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
function si(e) {
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
        f = (0, g.bG)([eL.Ay], () => eL.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: v, loaded: A } = (0, eg.OA)(n),
        C = (0, P.Ay)(n),
        { messageCountText: N } = (0, ex.k6)(n),
        { isNew: S, hasUnreads: y } = (0, ex.X5)(n),
        T = s.useRef(null),
        { handleLeftClick: I, handleRightClick: R } = (0, eN.A)({ facepileRef: T, goToThread: l, channel: n });
    s.useEffect(() => {
        m?.(x.current, h);
    }, [m, h]);
    let k = (0, ex.Mw)(n, iT.T.CREATION_DATE, ng.EG.POSTED_DURATION_AGO),
        _ = (0, tK.hf)(n),
        { onFocus: M, ...w } = i$({ id: t, row: d.row, column: d.column, section: d.section, boundaries: u });
    return (0, i.jsxs)("li", {
        ref: x,
        onClick: I,
        onFocus: M,
        onContextMenu: R,
        className: r()(sn.kL, o, { [sn.nT]: f }),
        style: { ...c },
        children: [
            (0, i.jsx)(E.D, {
                onClick: I,
                focusProps: { ringTarget: x },
                onContextMenu: R,
                "aria-label": eK.intl.formatToPlainString(eK.t.pgYN6c, { title: C ?? "", count: N }),
                className: sn.Kv,
                ...w,
            }),
            (0, i.jsxs)("div", {
                className: sn.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: sn.Y6,
                        children: [
                            (0, i.jsxs)("div", {
                                className: sn.wO,
                                children: [
                                    (0, i.jsx)(st.A, { channel: n, message: v }),
                                    (0, i.jsx)(b.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        className: sn.SD,
                                        children: k,
                                    }),
                                ],
                            }),
                            S
                                ? (0, i.jsx)(et.Lp, {
                                      className: sn.Ad,
                                      color: en.A.unsafe_rawColors.BRAND_260.css,
                                      text: eK.intl.string(eK.t.y2b7CA),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(p.F, {
                        children: (0, i.jsx)(j.D, {
                            variant: "heading-md/extrabold",
                            className: sn.DD,
                            color: y ? "text-strong" : "text-muted",
                            style: { width: `${c.width - 24}px` },
                            children: _,
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: sn.PU,
                children: (0, i.jsx)(Q.M, {
                    children: (0, i.jsx)(sa, {
                        channel: n,
                        firstMessage: v,
                        isFirstMessageLoaded: A,
                        overrideMedia: a,
                        coords: c,
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: sn.qr,
                children: (0, i.jsx)(Q.M, {
                    children: (0, i.jsx)(so, { channel: n, firstMessage: v, facepileRef: T }),
                }),
            }),
        ],
    });
}
function ss(e) {
    let { message: t, channel: n, containerWidth: l, hideTags: s = !1 } = e,
        { isBlocked: a, isIgnored: r } = (0, g.cf)([i8.A], () => ({
            isBlocked: null != t && i8.A.isBlockedForMessage(t),
            isIgnored: null != t && i8.A.isIgnoredForMessage(t),
        }));
    return a
        ? (0, i.jsx)(sx, { message: eK.intl.string(eK.t.Lkp2fB), containerWidth: l, channel: n, hideTags: s })
        : r
          ? (0, i.jsx)(sx, { message: eK.intl.string(eK.t.yWK7ZM), containerWidth: l, channel: n, hideTags: s })
          : null;
}
function sa(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a } = e,
        r = ss({ message: n, channel: t, containerWidth: a.width });
    return null != r
        ? r
        : (0, i.jsx)(sr, { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a });
}
function sr(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a } = e,
        r = (0, g.bG)([eP.A], () => eP.A.getChannel(t.parent_id)),
        { firstMedia: o } = (0, ex.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !1 }),
        { hasUnreads: c } = (0, ex.X5)(t),
        d = (0, g.bG)([eF.A], () => eF.A.can(e$.xBc.MANAGE_MESSAGES, t)),
        u = eD.kt.useSetting(),
        m = eD.gs.useSetting(),
        h = (0, eT.A)(m, d),
        x = (0, ef.no)(n, r, !1),
        f = t.isMediaPost(),
        [j, p] = i6(a.width - 24, f ? i5.SIXTEEN_BY_NINE : i5.THREE_BY_TWO);
    return n?.blocked || null == (s ?? o)
        ? (0, i.jsx)(sh, {
              channel: t,
              firstMessage: n,
              isFirstMessageLoaded: l,
              containerWidth: a.width,
              hasUnreads: c,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(su, {
                      mediaAttachments: x,
                      globalSpoilerRenderSetting: h,
                      containerWidth: j,
                      containerHeight: p,
                      canAutoPlay: u,
                      shouldMaintainAspectRatio: f,
                  }),
                  (0, i.jsx)("div", {
                      className: sn.GA,
                      children: (0, i.jsx)(eA.Ay, { channel: t, tagsClassName: sn.uU }),
                  }),
              ],
          });
}
function so(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        s = (0, eu.m)(t.id),
        a = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: sn.GD,
        children: [
            (0, i.jsxs)("div", {
                className: sn.QW,
                children: [
                    (0, i.jsx)("div", {
                        className: sn.mz,
                        children: (0, i.jsx)(tK.$k, { channel: t, iconSize: 16, showReadState: !0 }),
                    }),
                    s.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("span", { className: sn.xE, children: "\u2022" }),
                                  (0, i.jsxs)("div", {
                                      className: sn.IW,
                                      children: [
                                          (0, i.jsx)(tK.gL, { channel: t, userIds: s, facepileRef: n }),
                                          (0, i.jsx)("div", {
                                              className: sn.r$,
                                              children: (0, i.jsx)(el.n, { themed: !0, dotRadius: 2 }),
                                          }),
                                          (0, i.jsx)(ea.Ay, { channel: t, className: sn.mD, renderDots: !1 }),
                                      ],
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: sn.QW,
                children: [
                    a || null == l ? null : (0, i.jsx)(tK.NA, { firstMessage: l, channel: t }),
                    null == l ? null : (0, i.jsx)(tK.cn, { firstMessage: l, channel: t }),
                ],
            }),
        ],
    });
}
let sc = (e) => e.preventDefault(),
    sd = s.memo(function (e) {
        return (0, i.jsx)(i.Fragment, {
            children: (0, ek.LL)({ ...e, analyticsSource: "ForumPostMediaPreviewImage" }),
        });
    }),
    su = s.memo(function (e) {
        let {
                mediaAttachments: t,
                globalSpoilerRenderSetting: n,
                containerWidth: l,
                containerHeight: a,
                canAutoPlay: o,
                shouldMaintainAspectRatio: c = !1,
            } = e,
            { containsVideo: d, containsGif: u } = s.useMemo(() => (0, ef.$2)(t), [t]),
            m = s.useMemo(() => t.slice(0, 4), [t]),
            h = lp({ numAttachments: m.length, containerWidth: l, containerHeight: a }),
            x = (function (e) {
                let { imageContainerStyles: t, containerWidth: n, containerHeight: l } = e,
                    i = s.useRef(lv(t)),
                    a = s.useRef(n),
                    r = s.useRef(l),
                    o = n > a.current + 100,
                    c = l > r.current + 100;
                return (o || c) && (i.current = lv(t)), i.current;
            })({ imageContainerStyles: h, containerWidth: l, containerHeight: a }),
            g = (0, iw.O8)(iM.v.GUILD),
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
                                onClick: sc,
                                shouldRenderAccessory: !u && !d,
                            },
                            f = (0, eE.ge)(e.src) ? `${e.src}?format=png` : e.src,
                            j = o && !l ? e.src : f;
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: sn.UV,
                                style: h[t],
                                children: [
                                    c
                                        ? (0, i.jsx)(i_.A, {
                                              ...m,
                                              src: j,
                                              backgroundSrc: f,
                                              aspectRatio: m.maxWidth / m.maxHeight,
                                              alt: m.alt ?? "",
                                              className: r()(sn.EN, { [sn.cd]: l }),
                                              imageChildClassName: sn.Rp,
                                          })
                                        : e.src.startsWith("data:")
                                          ? (0, i.jsx)(es._, {
                                                ...m,
                                                className: sn.il,
                                                imageClassName: r()(sn.LW, { [sn.cd]: l }),
                                            })
                                          : (0, i.jsx)(sd, {
                                                ...m,
                                                autoPlay: o && !l,
                                                containerClassName: sn.EK,
                                                imageClassName: r()(sn.rp, { [sn.cd]: l }),
                                                responsive: !0,
                                            }),
                                    l &&
                                        (0, i.jsx)("div", {
                                            className: sn.X,
                                            children: (0, i.jsx)(ep.A, { obscureReason: s, iconClassname: sn.yo }),
                                        }),
                                ],
                            },
                            e.src,
                        );
                    }),
                [o, u, d, n, h, x, m, c, g],
            );
        return (0, i.jsxs)("div", {
            className: sn.pV,
            style: { width: l, height: a },
            children: [
                f,
                (u || d) &&
                    (0, i.jsxs)("div", {
                        className: sn.vz,
                        children: [
                            d &&
                                (0, i.jsx)(iI.u, {
                                    color: "currentColor",
                                    size: "custom",
                                    width: 22,
                                    height: 22,
                                    className: sn.cU,
                                }),
                            u &&
                                (0, i.jsx)(iR.O, {
                                    size: "custom",
                                    width: 29,
                                    height: 29,
                                    color: "currentColor",
                                    className: sn.cU,
                                }),
                        ],
                    }),
                t.length > 4 &&
                    (0, i.jsx)(sm, {
                        text: (t.length - 4).toString(),
                        icon: ik.x,
                        pillClassName: sn.v3,
                        iconClassName: sn.In,
                        textClassName: sn.EY,
                    }),
            ],
        });
    });
function sm(e) {
    let { text: t, icon: n, pillClassName: l, iconClassName: s, textClassName: a } = e;
    return (0, i.jsxs)("div", {
        className: l,
        children: [
            (0, i.jsx)(n, { className: s, color: "currentColor" }),
            (0, i.jsxs)(b.E, { variant: "text-xs/medium", className: a, children: ["+", t] }),
        ],
    });
}
function sh(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, containerWidth: a, hasUnreads: o } = e,
        c = eD.hH.useSetting(),
        [d, u] = i6(a - 24),
        { content: m } = (0, ex.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !0 }),
        { shouldRenderTagsRow: h } = (0, eA.BA)({ channel: t, isNew: !1 }),
        x = s.useMemo(() => ({ width: d, height: u }), [d, u]),
        g = o ? sn.kR : sn.b8;
    return (0, i.jsxs)("div", {
        className: sn.Cv,
        style: x,
        children: [
            (0, i.jsxs)("div", {
                className: sn.Qs,
                children: [
                    l &&
                        null == n &&
                        (0, i.jsx)(b.E, {
                            variant: "text-sm/normal",
                            color: o ? "text-default" : "text-muted",
                            children: eK.intl.string(eK.t.mE3KJN),
                        }),
                    l && null != n && (0, i.jsx)(iK.Ay, { message: n, content: m, className: g, compact: c }),
                ],
            }),
            (0, i.jsx)("div", {
                className: r()(sn.kh, { [sn.ZH]: !h }),
                children: h ? (0, i.jsx)(eA.Ay, { channel: t, tagsClassName: sn.uU }) : null,
            }),
        ],
    });
}
function sx(e) {
    let { message: t, containerWidth: n, channel: l, hideTags: a = !1 } = e,
        [o, c] = i6(n - 24),
        { shouldRenderTagsRow: d } = (0, eA.BA)({ channel: l, isNew: !1 }),
        u = s.useMemo(() => ({ width: o, height: c }), [o, c]);
    return (0, i.jsxs)("div", {
        className: sn.Cv,
        style: u,
        children: [
            (0, i.jsx)("div", {
                className: sn.Qs,
                children: (0, i.jsx)(b.E, {
                    className: sn.Wv,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: t,
                }),
            }),
            (0, i.jsx)("div", {
                className: r()(sn.kh, { [sn.ZH]: !d }),
                children: d && !a ? (0, i.jsx)(eA.Ay, { channel: l, tagsClassName: sn.uU }) : null,
            }),
        ],
    });
}
var sg = n(392421),
    sf = n(980707),
    sj = n(477782),
    sp = n(901713);
function sv(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: l, layoutType: s, tagSetting: a } = (0, eh.R)(t.id),
        { showResolvedFlags: r, setShowResolvedFlags: o } = (0, B.T)(t.id),
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
        className: sp.k,
        children: (0, i.jsxs)(sf.W, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": d ? eK.intl.string(eK.t["kQN/bi"]) : eK.intl.string(eK.t.DJzbkL),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, i.jsxs)(sj.rX, {
                    label: eK.intl.string(eK.t.f8wNDl),
                    children: [
                        (0, i.jsx)(sj.iD, {
                            id: "sort-by-recent-activity",
                            group: "sort-by",
                            label: eK.intl.string(eK.t.jOPmcI),
                            action: () => u(iT.T.LATEST_ACTIVITY),
                            checked: l === iT.T.LATEST_ACTIVITY,
                        }),
                        (0, i.jsx)(sj.iD, {
                            id: "sort-by-date-posted",
                            group: "sort-by",
                            label: eK.intl.string(eK.t.UIltXd),
                            action: () => u(iT.T.CREATION_DATE),
                            checked: l === iT.T.CREATION_DATE,
                        }),
                    ],
                }),
                t.isModeratorReportChannel() &&
                    (0, i.jsx)(sj.rX, {
                        label: eK.intl.string(tX.default.PsM2b4),
                        children: (0, i.jsx)(sj.sL, {
                            id: "resolved-flags-none",
                            label: eK.intl.string(eK.t.XJuakA),
                            action: () => o(!r),
                            checked: r,
                        }),
                    }),
                t.isMediaChannel() || t.isModeratorReportChannel() || t.isGameInvitesChannel()
                    ? null
                    : (0, i.jsxs)(sj.rX, {
                          label: eK.intl.string(eK.t.mFMDSq),
                          children: [
                              (0, i.jsx)(sj.iD, {
                                  id: "view-as-list",
                                  group: "view-as",
                                  label: eK.intl.string(eK.t["NJFr+g"]),
                                  action: () => m(x.C.LIST),
                                  checked: s === x.C.LIST,
                              }),
                              (0, i.jsx)(sj.iD, {
                                  id: "view-as-grid",
                                  group: "view-as",
                                  label: eK.intl.string(eK.t.wKeggb),
                                  action: () => m(x.C.GRID),
                                  checked: s === x.C.GRID,
                              }),
                          ],
                      }),
                g
                    ? (0, i.jsxs)(sj.rX, {
                          label: eK.intl.string(eK.t.Paxaug),
                          children: [
                              (0, i.jsx)(sj.iD, {
                                  id: "match-some",
                                  group: "tag-setting",
                                  label: eK.intl.string(eK.t.rQ0ctQ),
                                  action: () => h(sg.n.MATCH_SOME),
                                  checked: a === sg.n.MATCH_SOME,
                              }),
                              (0, i.jsx)(sj.iD, {
                                  id: "match-all",
                                  group: "tag-setting",
                                  label: eK.intl.string(eK.t.FCXUu0),
                                  action: () => h(sg.n.MATCH_ALL),
                                  checked: a === sg.n.MATCH_ALL,
                              }),
                          ],
                      })
                    : null,
                (0, i.jsx)(sj.rX, {
                    children: (0, i.jsx)(sj.Dr, {
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
var sA = n(123292);
function sC() {
    return Promise.resolve();
}
function sN(e) {
    let { channel: t, closePopout: n, setPopoutRef: l } = e,
        a = (0, ex.OT)(t),
        { tagFilter: r } = (0, eh.R)(t.id),
        o = (0, eh.p)(),
        c = (0, g.bG)([L.A], () => L.A.keyboardModeEnabled),
        d = s.useCallback(
            (e) => {
                (0, tg.UA)({
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
        (0, i.jsxs)(l7.l, {
            ref: (e) => {
                l?.(e);
            },
            "aria-label": eK.intl.string(eK.t.TdqRTh),
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
                                children: eK.intl.string(eK.t.HPu3kq),
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
                                        it.A,
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
                    "aria-label": eK.intl.string(eK.t["98EPQP"]),
                    onClick: h,
                    text: eK.intl.string(eK.t["98EPQP"]),
                }),
            ],
        })
    );
}
var sb = n(37411);
function sE(e) {
    let { channel: t, guild: n, sidebarState: l } = e;
    return (0, i.jsx)(ev.Cp, { channel: t, children: (0, i.jsx)(s_, { channel: t, guild: n, sidebarState: l }) }, t.id);
}
let sS = new (class {
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
function sy(e) {
    return `forum-grid-header-section-${e}`;
}
function sT(e) {
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
                    id: sy(l),
                    children: eK.intl.string(eK.t["3+LO1w"]),
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
function sR(e, t) {
    return `card-${e}-${t}`;
}
function sk(e) {
    if ("string" == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function s_(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: l,
            editorAdditionRowHeight: a,
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
            loading: R,
            isSearchLoading: k,
            layoutType: _,
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: l, tagSetting: i } = (0, eh.R)(e.id),
                s = (0, ex.V3)({ channel: e, sortOrder: t, tagFilter: n, tagSetting: i, shouldAutomaticallyAck: !0 }),
                a = (0, g.bG)([te.A, z.A], () => {
                    let t = te.A.hasLoaded(e.guild_id),
                        n = z.A.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: r, canLoadMore: o, loadMore: c, loading: d } = (0, tt.Fr)(e, t, n, i),
                { searchResults: u, isSearchLoading: m } = (0, ex.cA)({ channelId: e.id });
            return (
                (0, ex.yz)(e, t, n, i),
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
        { tagFilter: F, tagSetting: G } = (0, eh.R)(t.id);
    (0, ex.o7)(t, F, G, c),
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
                a = s.useCallback((e, t) => {
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
                            null == e ? (0, th.O_)(n, t, Date.now()) : i.current?.observe(e);
                        },
                        [n],
                    ),
                }
            );
        })({ scrollerRef: q, channelId: t.id, guildId: t.guild_id }),
        Y = _ === x.C.GRID,
        { searchQuery: X } = (0, ex.cA)({ channelId: t.id }),
        Q = null != E && null != X && X.length > 0,
        J = s.useRef(null),
        { containerRef: Z, containerWidth: ee } = io();
    s.useEffect(() => {
        if (null == J.current && null != t.id) {
            let e = eL.Ay.getSidebarState(t.id);
            null != e && e.type === e6.PE.VIEW_THREAD && (J.current = e.channelId);
        }
    }, [t.id]);
    let { columns: et } = s.useMemo(() => (Y ? sS.getRenderOptions(ee) : i9), [Y, ee]),
        en = s.useMemo(() => (R ? Math.round((window.innerHeight - 200) / 118) : 0), [R]),
        { showResolvedFlags: el } = (0, B.T)(t.id),
        ei = t.isModeratorReportChannel(),
        es = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / se(sS.getWidth(ee))) * et;
            return T ? e : 0;
        }, [ee, et, T]),
        ea = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / se(sS.getWidth(ee))) * et;
            return I ? e : 0;
        }, [ee, et, I]),
        er = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / se(sS.getWidth(ee))) * et;
            return k && Q ? e : 0;
        }, [ee, et, k, Q]),
        eo = s.useMemo(() => {
            if (Y)
                if (!W && Q) return [1, 0];
                else if (!$) return [1, j.length + es, 0];
                else if (Q) return [1, E.length + er, 0];
                else if (ei && !el) return [1, j.length + es, 0];
                else return [1, j.length + es, b.length + ea];
            if (!W && Q) return [1, 1];
            if (!$) return [1, j.length, 1];
            if (Q) return [1, E.length, 0, en];
            if (ei && !el) return [1, j.length, 0, en];
            else return [1, j.length, b.length, en];
        }, [Y, Q, j.length, b.length, W, $, en, E, es, ea, er, el, ei]),
        ec = s.useMemo(
            () =>
                !W && Q
                    ? [[], []]
                    : $
                      ? Q
                          ? [[], E, [], []]
                          : ei && !el
                            ? [[], j, [], []]
                            : [[], j, b, []]
                      : [[], j, []],
            [Q, W, $, E, j, b, el, ei],
        ),
        ed = s.useCallback(
            (e, n) => {
                (0, tg.Ml)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: { page: e$.liQ.GUILD_CHANNEL, section: e$.JJy.FORUM_CHANNEL_POST },
                }),
                    n ? (0, e9.N9)(e, { source: sb.H9.BROWSER }) : ((J.current = e.id), (0, tl.JA)(e));
            },
            [t.guild_id, t.id, J],
        ),
        [eu, em] = s.useState(l + a - 24),
        eg = s.useCallback(
            (e, n, l) =>
                0 === e
                    ? (0, i.jsx)(
                          sO,
                          {
                              channel: t,
                              isEmpty: !w,
                              isSearchLoading: k,
                              numResults: E?.length,
                              coords: n,
                              onHeightChange: em,
                              children:
                                  !R && (0, i.jsx)(ny, { channel: t, hasAnyThread: P, hasActiveThreads: w }, t.id),
                          },
                          "forum-channel-header",
                      )
                    : 2 !== e || $
                      ? 1 === e && Q && !W
                          ? (0, i.jsx)(sw, { channel: t, coords: n }, "archive-or-search-result")
                          : l()
                      : (0, i.jsx)(sM, { channel: t, coords: n }, "archived-missing-reading-history-perm"),
            [Q, $, E, W, t, w, k, R, P],
        ),
        ef = (0, g.bG)([tc.A], () => tc.A.hasHidden(t.id)),
        ej = { editorHeight: l, isGridLayout: Y },
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
                    listViewCardHeights: a,
                    editorHeight: o,
                    editorAdditionRowHeight: c,
                    renderSectionOrItem: d,
                    goToThread: u,
                    observePostVisibilityAnalytics: m,
                    isShowingSearchResult: h,
                } = e,
                x = (0, g.bG)([ta.A], () => ta.A.getChannelId()),
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
                                n = null != x && (0, V.iU)(x) ? eJ : tK.Ay;
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
        eS = s.useRef(null),
        {
            updateMasonryListScrollerRef: ey,
            getItemKey: eT,
            renderGridSection: eI,
            renderGridItem: eR,
            getGridSectionHeight: ek,
            getSectionProps: e_,
            handleGridFocus: eM,
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
                            (h.current = sk(n));
                    },
                    [t, h],
                ),
                p = s.useCallback(
                    (e) => {
                        let t = sk(e);
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
                            return null == l ? sR(e, t) : sR(e, l);
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
                handleGridSelect: p,
                getItemKey: v,
                renderGridSection: A,
                renderGridItem: s.useCallback(
                    (e, t, s, a, o) => {
                        if (0 === e) return null;
                        let c = n[e][t];
                        return null != c
                            ? (0, i.jsx)(
                                  sl,
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
            masonryListScrollerRef: eS,
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
                    null == eL.Ay.getSidebarState(r) && (a.current = null);
                    let n = i.findIndex((t) => t.find((t) => t === e)),
                        l = t.current.getCoordsMap(),
                        s = l[`__section__${n}`],
                        o = l[sR(n, e)];
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
        masonryListScrollerRef: eS,
        containerWidth: ee,
        isGridLayout: Y,
        threadIdsBySection: ec,
        parentId: t.id,
        focusedThreadId: J,
    });
    let ew = s.useCallback(() => {
            if (Q) return;
            let e = Y ? eS.current?.getScrollerState() : q.current?.getScrollerState();
            if (null == e) return;
            (0, tg.pO)({ guildId: t.guild_id, channelId: t.id });
            let n = e.scrollTop + e.offsetHeight;
            e.scrollHeight - n < (Y ? Math.max(200, se(ee)) : 200) && y();
        }, [Q, Y, t.guild_id, t.id, ee, y]),
        eD = (0, g.bG)([L.A], () => L.A.keyboardModeEnabled),
        eO = (0, ev.kU)((e) => e.titleFocused || e.bodyFocused, d.x),
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
                        let n = (0, iO.Mz)(e, iF),
                            l = (0, iO.HP)(e);
                        d(n, l), (0, iP.T)(t, l, !0);
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
                                null !== e && null == c((0, iO.Mz)(e, iF)) && u((0, iO.Mz)(t, "data-grid-id"));
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
                        let l = (0, iO.Mz)(t, iF),
                            s = n?.querySelector(l);
                        if (null == s) return;
                        let a = parseInt(s.getAttribute("data-grid-section") ?? ""),
                            d = parseInt(s.getAttribute("aria-rowindex")),
                            u = parseInt(s.getAttribute("aria-colindex"));
                        switch ((iU.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                            case h.D$.RIGHT: {
                                let e = c(iH({ section: a, row: d, column: u + 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(iF);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.LEFT: {
                                let e = c(iH({ section: a, row: d, column: u - 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(iF);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.DOWN: {
                                let e = c(iH({ section: a, row: d + 1, column: u }));
                                if ((null == e && (e = c(iH({ section: a + 1, row: 0, column: u }))), null != e)) {
                                    let t = e.getAttribute(iF);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.UP: {
                                let e;
                                if (0 === d) {
                                    let t = parseInt(s.getAttribute(iz));
                                    null == (e = c(iH({ section: a - 1, row: t, column: u }))) &&
                                        (e = c(iH({ section: a - 1, row: t - 1, column: u })));
                                } else e = c(iH({ section: a, row: d - 1, column: u }));
                                if (null != e) {
                                    let t = e.getAttribute(iF);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.SPACE:
                            case h.D$.ENTER: {
                                if (e.repeat) return;
                                let t = i.current;
                                if (null != t) {
                                    let n = c((0, iO.Mz)(t, iF)),
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
                        i.current = null != e ? (0, iO.t$)(t, e) : null;
                    },
                    [t],
                );
            return s.useMemo(() => ({ id: t, containerProps: { onKeyDown: j, ref: r }, setFocus: p }), [t, j, p]);
        })({ id: "forum-grid-view", isEnabled: Y && eD && !eO, setFocus: eM }),
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
        })({ listRef: q, padding: 96, isEnabled: !Y && eD && !eO, channel: t }),
        ez = s.useCallback(
            (e, n, l) =>
                0 === e
                    ? 0
                    : t.isGameInvitesChannel()
                      ? 280
                      : se(l, t.isMediaChannel() ? i5.SIXTEEN_BY_NINE : i5.THREE_BY_TWO),
            [t],
        ),
        { ref: eU, ...eH } = eF.containerProps,
        eB = eL.Ay.getSidebarState(t.id),
        eV = null != eB && (0, eL.JU)(eB),
        eW = (0, g.bG)([eL.Ay], () => eL.Ay.getSection(t.id)) === e$.YvQ.MEMBERS;
    return (0, i.jsx)("div", {
        className: tJ.container,
        ref: Z,
        "data-member-list-open": eW,
        children: (0, i.jsx)(v.sk, {
            children: (e) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        c &&
                            (0, i.jsx)(M.A, {
                                channel: t,
                                draftType: ti.C.FirstThreadMessage,
                                className: tJ.uploadArea,
                                style: { right: eV && n?.isThreadSidebarFloating ? n.threadSidebarWidth : 0 },
                            }),
                        (0, i.jsx)(sD, { channel: t }),
                        (0, i.jsx)(A.A, { children: (0, i.jsx)(p.H, { children: eK.intl.string(eK.t.B2panI) }) }),
                        O
                            ? (0, i.jsx)("div", {
                                  className: tJ.optInNotice,
                                  children: (0, i.jsx)(H.A, { channel: t }),
                              })
                            : null,
                        Y
                            ? (0, i.jsx)(iq, {
                                  navigator: eF,
                                  children: (0, i.jsx)(
                                      C.f,
                                      {
                                          ref: (e) => {
                                              (eU.current = e?.getScrollerNode() ?? null), ey(e);
                                          },
                                          itemGutter: 16,
                                          padding: 24,
                                          className: tJ.grid,
                                          columns: et,
                                          sections: eo,
                                          getItemKey: eT,
                                          getSectionHeight: ek,
                                          getItemHeight: ez,
                                          renderSection: eI,
                                          renderItem: eR,
                                          getSectionProps: e_,
                                          onScroll: S ? ew : void 0,
                                          chunkSize: 350,
                                          ...eH,
                                          ...e,
                                      },
                                      _,
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
function sM(e) {
    let { channel: t, coords: n } = e,
        l = (0, P.Ay)(t);
    return (0, i.jsx)("div", {
        className: r()(tJ.missingReadHistoryPermission, tJ.columnsSpan),
        style: n,
        children: (0, i.jsx)(b.E, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eK.intl.format(eK.t.TycmzM, { channelName: l }),
        }),
    });
}
function sw(e) {
    let { channel: t, coords: n } = e,
        l = (0, P.Ay)(t);
    return (0, i.jsx)("div", {
        className: r()(tJ.missingReadHistoryPermission, tJ.columnsSpan),
        style: n,
        children: (0, i.jsx)(b.E, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eK.intl.format(eK.t.OWZJdS, { channelName: l }),
        }),
    });
}
function sD(e) {
    let { channel: t } = e,
        n = s.useCallback(() => {
            td.A.resort(t.id);
        }, [t]),
        l = (0, g.bG)([tu.A], () => tu.A.getNewThreadCount());
    return 0 === l
        ? null
        : (0, i.jsx)(E.D, {
              className: tJ.newPostsButton,
              onClick: n,
              children: (0, i.jsx)(b.E, {
                  color: "text-brand",
                  variant: "text-md/medium",
                  children: eK.intl.format(eK.t.ue1qfM, { count: l }),
              }),
          });
}
function sL() {
    return Promise.resolve();
}
function sP(e) {
    let { parentChannel: t, canCreatePost: n } = e,
        l = s.useCallback(() => {
            (0, O.d)(t);
        }, [t]);
    return __OVERLAY__ || !n
        ? null
        : (0, i.jsx)(S.$, { variant: "primary", size: "md", text: eK.intl.string(nf.default.QwW8zd), onClick: l });
}
function sO(e) {
    let t,
        n,
        l,
        { channel: a, isEmpty: o, isSearchLoading: p, numResults: v, children: A, coords: C, onHeightChange: N } = e,
        {
            name: S,
            formOpen: _,
            titleFocused: M,
            hasClickedForm: D,
            textAreaState: P,
            onboardingExpanded: O,
            setEditorAdditionRowHeight: z,
        } = (0, ev.kU)((e) => {
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
        { tagFilter: U, layoutType: H } = (0, eh.R)(a.id),
        B = (0, ev.ST)(),
        $ = (0, eh.p)(),
        q = (0, g.bG)([ts.A], () => ts.A.canChatInGuild(a.guild_id)),
        K = (0, tn.AI)(a),
        [Y, X] = s.useState(K),
        [, Q] = (0, F.c)(a.getGuildId() ?? void 0),
        J = (0, W.V)(a),
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
            null != ee.current && B.getState().setEditorHeight(ee.current.offsetHeight);
        });
    }, [ee, B]);
    s.useLayoutEffect(en, [en, o, Z, O]), (0, to.Vo)({ event: e$.jej.REMEASURE_TARGET, handler: en });
    let el = (0, g.bG)([tr.A], () => tr.A.getUploads(a.id, ti.C.FirstThreadMessage)),
        ei = (0, ex.Hv)(a),
        es = s.useRef(null),
        ea = s.useRef(null),
        [er, eo] = s.useState(0),
        { width: ec } = (0, g.bG)([eU.A], () => eU.A.windowSize()),
        ed = es.current?.getBoundingClientRect()?.width,
        eu = s.useRef(null),
        em = s.useRef(null);
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
    }, [a.availableTags, ec, ed, U]);
    let eg = S.length > 0 && !_ && (p || null != v),
        ef =
            !__OVERLAY__ &&
            !D &&
            !_ &&
            M &&
            (0 === P.textValue.trim().length || P.textValue.trim() === ei) &&
            0 === el.length &&
            !J &&
            !a.isGameInvitesChannel();
    s.useLayoutEffect(() => {
        if (!(eg || ef)) return z(0);
        null != eu.current && z(eu.current.clientHeight);
    }, [z, eg, ef, eu]);
    let ej = (0, m.Ay)({
            id: `${a.id}-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: sL,
            scrollToEnd: sL,
            orientation: h.Gl.HORIZONTAL,
        }),
        { role: ep, onFocus: eA, ...eC } = (0, u.rm)("forum-channel-header"),
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
        eE = s.useCallback(
            (e) => {
                eA(), e.target !== ee.current || eb.current || eN.current?.focus();
            },
            [eA, ee, eb],
        ),
        eS = s.useMemo(() => (J ? (0, V.Yj)(a.availableTags) : a.availableTags), [a.availableTags, J]);
    return (0, i.jsx)(
        "div",
        {
            className: r()(tJ.card, tJ.headerRow, tJ.columnsSpan),
            ref: ee,
            onFocus: eE,
            ...eC,
            style: { ...C, position: H === x.C.GRID ? "absolute" : "static", height: "auto" },
            children: (0, i.jsxs)(to.Ah, {
                children: [
                    null != a.guild_id
                        ? (0, i.jsx)(G.A, {
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
                                        children: (0, i.jsx)(im, {
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
                                                                    ? eK.intl.string(eK.t["/9i3qq"])
                                                                    : 0 === v
                                                                      ? eK.intl.string(eK.t.DbgHxi)
                                                                      : eK.intl.formatToPlainString(eK.t["tBz/8b"], {
                                                                            numPosts: v ?? "",
                                                                            query: S,
                                                                        }),
                                                            }),
                                                            !p &&
                                                                (0, i.jsx)(E.D, {
                                                                    onClick: () => {
                                                                        (0, tg.hT)({
                                                                            guildId: a.guild_id,
                                                                            channelId: a.id,
                                                                        }),
                                                                            td.A.clearForumSearch(a.id),
                                                                            B.getState().setName("");
                                                                    },
                                                                    children: (0, i.jsx)(b.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-brand",
                                                                        className: tJ.clear,
                                                                        children: eK.intl.string(eK.t.VkKicb),
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
                                                                      children: eK.intl.string(eK.t.ZvJ0yh),
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
                                                                      children: eK.intl.string(eK.t.iyzwnD),
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
                    (0, i.jsx)(nM, { channel: a, onChange: en }),
                    (0, i.jsxs)("div", {
                        className: tJ.tagsContainer,
                        ref: es,
                        children: [
                            (0, i.jsx)(sF, { channel: a }),
                            eS.length > 0
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
                                                              children: eS.map((e) =>
                                                                  (0, i.jsx)(
                                                                      it.A,
                                                                      {
                                                                          tag: e,
                                                                          onClick: () => {
                                                                              var t;
                                                                              return (
                                                                                  (t = e.id),
                                                                                  void ((0, tg.UA)({
                                                                                      guildId: a.guild_id,
                                                                                      channelId: a.id,
                                                                                      tagId: t,
                                                                                      filterTagIds: Array.from(U),
                                                                                      added: !U.has(t),
                                                                                      location: {
                                                                                          page: e$.liQ.GUILD_CHANNEL,
                                                                                          section:
                                                                                              e$.JJy
                                                                                                  .FORUM_CHANNEL_HEADER,
                                                                                          object: e$.ZSU.CHANNEL_TAG,
                                                                                      },
                                                                                  }),
                                                                                  $.getState().toggleTagFilter(a.id, t))
                                                                              );
                                                                          },
                                                                          selected: U.has(e.id),
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
                                              targetElementRef: em,
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
                                                      buttonRef: em,
                                                      size: f.$n.Sizes.MIN,
                                                      color: f.$n.Colors.CUSTOM,
                                                      className: r()(tJ.tagsButton, {
                                                          [tJ.tagsButtonWithCount]: U.size > 0,
                                                      }),
                                                      style: { left: er },
                                                      innerClassName: tJ.tagsButtonInner,
                                                      "aria-label":
                                                          U.size > 0
                                                              ? eK.intl.string(eK.t.IkpM1T)
                                                              : eK.intl.string(eK.t["9vKK/N"]),
                                                      children: [
                                                          U.size > 0
                                                              ? (0, i.jsx)("div", {
                                                                    className: tJ.countContainer,
                                                                    children: (0, i.jsx)(b.E, {
                                                                        className: tJ.countText,
                                                                        color: "none",
                                                                        variant: "text-xs/medium",
                                                                        children: U.size,
                                                                    }),
                                                                })
                                                              : eK.intl.string(eK.t.fZ8hzm),
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
                                              "aria-label": eK.intl.string(eK.t.IkpM1T),
                                              children: [
                                                  U.size > 0
                                                      ? (0, i.jsx)("div", {
                                                            className: tJ.countContainer,
                                                            children: (0, i.jsx)(b.E, {
                                                                className: tJ.countText,
                                                                color: "none",
                                                                variant: "text-xs/medium",
                                                                children: U.size,
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
function sF(e) {
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
                className: tJ.sortDropdown,
                innerClassName: tJ.sortDropdownInner,
                "aria-label": n ? eK.intl.string(eK.t.JxU0wr) : eK.intl.string(eK.t.xyYt8A),
                children: [
                    (0, i.jsx)(_.J, { size: "xs", color: "currentColor" }),
                    (0, i.jsx)(b.E, {
                        className: tJ.sortDropdownText,
                        variant: "text-sm/medium",
                        color: "interactive-text-default",
                        children: (0, i.jsx)("span", {
                            className: tJ.sortDropdownTextHighContrastForcedColor,
                            children: n || l ? eK.intl.string(eK.t.JxU0wr) : eK.intl.string(eK.t.xyYt8A),
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

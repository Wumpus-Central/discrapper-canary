n.r(t), n.d(t, { CreateGameInvitePostButton: () => sD, default: () => sN });
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
    O = n(47167),
    P = n(337885),
    F = n(870136),
    G = n(575293),
    U = n(857071),
    z = n(228098),
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
    eO = n(734057),
    eP = n(232835),
    eF = n(576705),
    eG = n(967198),
    eU = n(287809),
    ez = n(531685),
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
                l = (0, g.bG)([eO.A], () => eO.A.getChannel(t));
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
        v = (0, O.Ay)(c);
    (0, W.vb)(f);
    let A = (0, g.bG)([eU.default, eP.A], () => {
            let e = eU.default.getUser(f?.messageSnapshots[0]?.moderatorReport?.reported_user_id);
            if (null != e) return e;
            if (f?.messageReference?.channel_id != null && f?.messageReference?.message_id != null) {
                let e = eP.A.getMessage(f?.messageReference?.channel_id, f?.messageReference?.message_id);
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
        a = (0, O.Ay)(t),
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
        l = (0, g.bG)([eO.A], () => eO.A.getChannel(n.parent_id)),
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
        c = (0, g.bG)([ez.A], () => ez.A.isFocused()),
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
var e6 = n(378570),
    e9 = n(940382),
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
        a = !ez.A.isFocused(i);
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
    tI = n(417454),
    tR = n(148719),
    tk = n(462887),
    t_ = n(696986),
    tM = n(811893),
    tw = n(736653),
    tD = n(303136),
    tL = n(892110),
    tO = n(251766),
    tP = n(468689),
    tF = n(71393),
    tG = n(975571);
let tU = { mass: 1, tension: 250, friction: 18, clamp: !0 };
var tz = n(388803);
function tH(e) {
    let { handleHide: t } = e;
    return (0, i.jsx)(E.D, {
        onClick: t,
        className: tz.b,
        "aria-label": eK.intl.string(eK.t.WAI6xu),
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
                            children: eK.intl.string(eK.t.mA0IvI),
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
            (0, i.jsx)(t_.h, { size: 10 }),
            (0, i.jsx)(tD.A, { className: tz.Ki, src: l }),
            (0, i.jsx)(t_.h, { size: 10 }),
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
        o = (0, g.bG)([tc.A], () => tc.A.hasHidden(t.id)),
        c = (0, tO.e)({ guildId: t.guild_id, channelId: t.id }),
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
            tP.A.open(t.guild_id, e$.BEX.ROLE_SUBSCRIPTIONS);
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
                                          eK.intl.string(eK.t.znhX2R),
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
                                                          username: eK.intl.string(eK.t.AkORco),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                                          title: eK.intl.string(eK.t.yO6Fxu),
                                                          messageCount: "34",
                                                          reaction: "\u26A1\uFE0F",
                                                          reactionCount: "724",
                                                          classname: tz.q6,
                                                      }),
                                                      (0, i.jsx)(tB, {
                                                          username: eK.intl.string(eK.t.DPg3YM),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                                          title: eK.intl.string(eK.t["R5XnC/"]),
                                                          messageCount: "34",
                                                          reactionCount: "84",
                                                          reaction: "\uD83D\uDC9E",
                                                          classname: tz.q6,
                                                      }),
                                                      (0, i.jsx)(tB, {
                                                          username: eK.intl.string(eK.t.KIelex),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                                          title: eK.intl.string(eK.t.pt88Vb),
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
                                                      className: tz.zy,
                                                      children: [
                                                          (0, i.jsx)(b.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-link",
                                                              children: eK.intl.string(eK.t.OahzBd),
                                                          }),
                                                          (0, i.jsx)(tM.t, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: tz.QI,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)(t_.h, { size: 16 }),
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
                                                        tP.A.open(
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
    t6 = n(102597),
    t9 = n(904054),
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
                      ? void (r.isGameInvitesChannel() ? (0, P.d)(r) : nc._.dispatch(e$.jej.FOCUS_COMPOSER_TITLE))
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
    nf = n(658688);
let nj = { width: 28, height: 28 },
    np = { width: 20, height: 20, borderRadius: 10 },
    nv = (e) => {
        (0, tg.bh)({ onboardingCTA: e });
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
            "aria-label": eK.intl.formatToPlainString(eK.t.PCs0oo, { numRoles: n.length }),
            children: n.map((e) =>
                (0, i.jsx)(tI.b_, { role: e, canRemove: !1, onRemove: e$.FXj, guildId: t.id, className: nf.Yq }, e.id),
            ),
        });
    },
    nN = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    nb = (e) => {
        let { handleHide: t } = e;
        return (0, i.jsx)(E.D, {
            onClick: t,
            className: nf.b,
            "aria-label": eK.intl.string(eK.t.WAI6xu),
            children: (0, i.jsx)(tA.P, { size: "md", color: "currentColor", className: nf.ut }),
        });
    },
    nE = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, i.jsx)(E.D, {
            onClick: n,
            className: nf.b,
            "aria-label": t ? eK.intl.string(eK.t.iTcuma) : eK.intl.string(eK.t.dcl9MQ),
            children: t
                ? (0, i.jsx)(tC.g, { size: "xs", color: "currentColor", className: nf.ut })
                : (0, i.jsx)(tN._, { size: "xs", color: "currentColor", className: nf.ut }),
        });
    },
    nS = (e) => {
        let t,
            { hasAnyThread: l, hasActiveThreads: a, channel: o } = e,
            c = (0, O.Ay)(o),
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
                                g = new nA(),
                                f = d?.isMediaChannel() === !0;
                            return (
                                null == c ||
                                    null == d ||
                                    f ||
                                    null == a ||
                                    g.addStep(
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
                                                            onCloseRequest: e$.FXj,
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
                                            name: eK.intl.string(eK.t.UgJu1e),
                                            description: eK.intl.string(eK.t["3C6/G1"]),
                                            clickHandler: () => {
                                                nv(ng._G.GUIDELINES), tT.Ay.open(d.id, void 0, e$.b7d.TOPIC);
                                            },
                                            isDone: r,
                                        }),
                                    ),
                                g.addStep(
                                    ((o = null != d.availableTags && d.availableTags.length > 0),
                                    {
                                        name: eK.intl.string(eK.t.xiBFCi),
                                        description: eK.intl.string(eK.t.wCv4Oz),
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
                                        name: eK.intl.string(eK.t.QlyC9s),
                                        description: eK.intl.string(eK.t["+50LJg"]),
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
                                            (nv(ng._G.CREATE_POST), d.isGameInvitesChannel())
                                                ? (0, P.d)(d)
                                                : nc._.dispatch(e$.jej.FOCUS_COMPOSER_TITLE);
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
                                        className: nf.kL,
                                        children: (0, i.jsxs)("div", {
                                            className: nf.iE,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: nf.U1,
                                                    children: (0, i.jsxs)(p.F, {
                                                        component: (0, i.jsx)(j.D, {
                                                            variant: "heading-md/semibold",
                                                            children: eK.intl.string(eK.t.LhlgY9),
                                                        }),
                                                        children: [
                                                            (0, i.jsx)(j.D, {
                                                                variant: "heading-md/medium",
                                                                className: nf.wx,
                                                                children: eK.intl.format(eK.t["9L+8bz"], {
                                                                    numCompleted: S.completedSteps.toString(),
                                                                    numSteps: S.steps.length.toString(),
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
                                                                    eK.intl.string(eK.t.znhX2R),
                                                                ],
                                                            }),
                                                            (0, i.jsx)(nE, { expanded: u, onClick: () => w(!u) }),
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
                                                                  children: S.getSteps().map((e) =>
                                                                      (0, i.jsxs)(
                                                                          E.D,
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
                                                                                            color: en.A.colors
                                                                                                .ICON_FEEDBACK_CRITICAL,
                                                                                            className: nf.FY,
                                                                                        })
                                                                                      : e.isDone
                                                                                        ? (0, i.jsx)(et.fk, {
                                                                                              color: en.A.colors
                                                                                                  .STATUS_POSITIVE_BACKGROUND
                                                                                                  .css,
                                                                                              icon: tE.A,
                                                                                              style: np,
                                                                                              className: nf.FY,
                                                                                          })
                                                                                        : (0, i.jsx)(et.fk, {
                                                                                              disableColor: !0,
                                                                                              icon: (0, tS.k)(no.A),
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
let n_ = s.memo(function (e) {
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
                                      eK.intl.string(eK.t["4d4T4l"]),
                                      c &&
                                          (0, i.jsx)(E.D, {
                                              onClick: () => {
                                                  tT.Ay.open(t.id, void 0, e$.b7d.TOPIC);
                                              },
                                              tag: "span",
                                              className: nk.vk,
                                              children: (0, i.jsx)(nI.R, { size: "xs", color: "currentColor" }),
                                          }),
                                  ],
                              }),
                              (0, i.jsx)(E.D, {
                                  "aria-label": eK.intl.string(eK.t.cpT0Cq),
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
                                  className: r()(nk.I4, eQ.PT),
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
                                              children: (0, i.jsx)(E.D, {
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
                                                          eK.intl.string(eK.t.Vu7odK),
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
var nM = n(621466),
    nw = n(189812),
    nD = n(884496),
    nL = n(511274),
    nO = n(408278),
    nP = n(952270),
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
    n7 = n(518960),
    n3 = n(811998);
let n8 = { scale: 0.95, opacity: 0 },
    n5 = { scale: 1, opacity: 1 },
    n6 = { scale: 1, opacity: 1 },
    n9 = { tension: 2400, friction: 52 },
    le = `.${n3.EJ}`,
    lt = { behavior: "smooth", block: "nearest", inline: "nearest" };
function ln(e) {
    let { channelId: t, onClick: n, onClose: l, onMouseEnter: a, listItemProps: r } = e,
        o = s.useRef(null),
        c = (0, g.bG)([eO.A], () => eO.A.getChannel(t), [t]);
    return (
        q()(null != c, "Forum Channel is null"),
        (0, i.jsxs)(E.D, {
            ...r,
            "aria-label": eK.intl.string(eK.t.nzoF5p),
            className: n3.EJ,
            onMouseEnter: a,
            onClick: (e) => {
                0 === e.detail && o.current?.activateUploadDialogue(), (0, tg.ri)({ isMobile: !1 }), n?.();
            },
            children: [
                (0, i.jsx)(n4.A, {
                    className: n3.Fg,
                    ref: o,
                    onChange: (e) => {
                        l?.(),
                            (0, n7.R)(e.currentTarget.files, c, ti.C.FirstThreadMessage, {
                                requireConfirm: !0,
                                origin: "file_picker",
                            }),
                            (e.currentTarget.value = null);
                    },
                    multiple: c.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
                (0, i.jsx)(n1.X, { size: "custom", color: "currentColor", width: 28, height: 28, className: n3.T3 }),
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
        d = (0, g.bG)([tr.A], () => tr.A.getUploads(t, nH.oU.CREATE_FORUM_POST.drafts.type)),
        x = (0, m.Ay)({
            id: "forum-composer-attachments-popout",
            isEnabled: c,
            orientation: h.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, i.jsx)(tf.animated.div, {
        className: n3.jC,
        onMouseLeave: () => {
            l || c || n();
        },
        onFocus: (e) => {
            e.target.scrollIntoView(lt);
        },
        style: o,
        children: (0, i.jsx)(nJ.Ip, {
            orientation: "horizontal",
            className: n3.SW,
            paddingFix: !1,
            fade: !0,
            children: (0, i.jsx)(u.hD, {
                navigator: x,
                children: (0, i.jsx)(u.PR, {
                    children: (e) => {
                        let { ref: n, ...l } = e;
                        return (0, i.jsxs)("div", {
                            className: n3.p8,
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
                    (0, nM.vq)(document.activeElement, HTMLElement) && document.activeElement.scrollIntoView(lt);
                });
        },
        listItemProps: l,
    });
}
function ls(e) {
    let { channelId: t } = e,
        [n, l] = s.useState(!1),
        a = s.useRef(null),
        r = (0, g.bG)([tr.A], () => tr.A.getUploads(t, nH.oU.CREATE_FORUM_POST.drafts.type)),
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
        className: n3.kL,
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
                      className: n3.fY,
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
                          (0, i.jsx)("div", { className: n3.qS, children: o }),
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
        n = (0, nQ.yK)([tr.A], () => {
            let e = tr.A.getUploads(t.id, nH.oU.CREATE_FORUM_POST.drafts.type);
            return e?.filter((e) => !0 !== e.isThumbnail);
        });
    return (0, i.jsxs)("div", {
        className: la.kL,
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
    lE = n(222209);
let lS = [{ name: "Media Post Thumbnail", extensions: ["jpg", "jpeg", "png", "gif", "webp"] }],
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
                            ? (0, i.jsx)(lu.A, { src: e.src, className: lE.xn, "aria-hidden": !0 })
                            : (0, i.jsx)("img", { src: e.src, className: lE.xn, "aria-hidden": !0, alt: e?.alt ?? "" }),
                },
                e.src,
            ),
        ),
    });
}
let lI = (e) => {
    let { parentChannel: t } = e,
        { textAreaState: l } = (0, ev.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        a = (0, nQ.bG)([L.A], () => L.A.keyboardModeEnabled),
        o = (function (e, t) {
            let { mediaAttachments: n, hasThumbnail: l } = (function (e) {
                    let [t, n] = s.useState(null),
                        l = (0, nQ.yK)([tr.A], () => {
                            let t = tr.A.getUploads(e.id, nH.oU.CREATE_FORUM_POST.drafts.type),
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
                    (0, n7.R)(e.currentTarget.files, t, nH.oU.CREATE_FORUM_POST.drafts.type, {
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
            className: lE.zL,
            innerClassName: lE.Nr,
            onChange: h,
            multiple: !1,
            "aria-hidden": !0,
            filters: lS,
            "aria-describedby": ly,
            "aria-label": u ? eK.intl.string(eK.t.MxJI3f) : eK.intl.string(eK.t.Cbiofa),
            children: u
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(lT, { mediaAttachments: o, containerWidth: m.width, containerHeight: m.height }),
                          (0, i.jsxs)("div", {
                              className: r()(lE.On, { [lE.bP]: o?.length > 2 }),
                              children: [
                                  (0, i.jsx)(b.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: eK.intl.string(eK.t.MxJI3f),
                                  }),
                                  null == c &&
                                      (0, i.jsx)(nI.R, { size: "xs", color: "currentColor", className: lE.IZ }),
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
                              className: lE.T3,
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
        className: lE.iT,
        style: m,
        children:
            null != c
                ? (0, i.jsx)(nZ.A, {
                      actions: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(lc.A, {
                                  className: lE.XI,
                                  tooltip: eK.intl.string(eK.t.Y8ujqr),
                                  onClick: x,
                                  children: (0, i.jsx)(nI.R, { size: "xs", color: "currentColor" }),
                              }),
                              (0, i.jsx)(lc.A, {
                                  className: lE.XI,
                                  tooltip: eK.intl.string(eK.t.vN7REz),
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
                      className: lE.Xc,
                      children: g,
                  })
                : g,
    });
};
var lR = n(451909),
    lk = n(375199),
    l_ = n(141268),
    lM = n(931664),
    lw = n(631576),
    lD = n(474078),
    lL = n(55294),
    lO = n(383233),
    lP = n(101392),
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
        let e = document.querySelector(`[${lX}="${T}"]`),
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
        O = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = k.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        P = s.useCallback((e, t) => {
            I(t);
            let n = document.querySelector(e),
                l = k.current;
            null != l && null != n && l.scrollIntoViewNode({ node: n });
        }, []),
        F = (0, m.Ay)({ id: D, isEnabled: !0, useVirtualFocus: !0, scrollToStart: L, scrollToEnd: O, setFocus: P });
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
                                          className: lY.Ie,
                                          children: [
                                              (0, i.jsx)(j.D, { variant: "heading-md/semibold", children: w }),
                                              (0, i.jsx)(b.E, {
                                                  color: "text-muted",
                                                  variant: "text-md/normal",
                                                  children: p ?? eK.intl.string(eK.t.QwSXv8),
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
let l1 = s.createContext(null);
function l2(e) {
    let { value: t, children: n, disabled: l = !1, selectedColor: a = lQ.STANDARD, ...o } = e,
        { activeDescendant: c, selected: d, setSelected: m, itemToString: h } = s.useContext(lZ),
        x = h(t),
        g = c === x,
        f = o?.selected ?? d.has(t),
        j = (0, u.rm)(x);
    return (0, i.jsx)(E.D, {
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
    l7 = n(183610);
function l3(e) {
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
        className: r()(l7.kL, l7.XG, c),
        children: (0, i.jsx)(l0, {
            ...x,
            value: l,
            multiSelect: d,
            onChange: g,
            placeholder: n,
            children: t,
            listClassName: l7.p_,
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
        r = (0, ex.OT)(t);
    return (0, i.jsx)(l3, {
        value: n,
        onChange: (e) => {
            (!l || n.has(e)) && (s(e), a());
        },
        placeholder: eK.intl.string(eK.t.MbhGm7),
        "aria-label": eK.intl.string(eK.t.MbhGm7),
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
    return (0, i.jsx)(X.m, {
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
                            (0, nM.vq)(n.current, HTMLTextAreaElement) && n.current?.focus();
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
                        f = lB.A.hasSeen(e.id);
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
                            (0, tl.JA)(n),
                            td.A.resort(e.id),
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
                            t.body?.code === e$.t02.AUTOMOD_TITLE_BLOCKED
                                ? r(lz(t.body, e))
                                : t.body?.code === e$.t02.AUTOMOD_MESSAGE_BLOCKED
                                  ? o(lz(t.body, e))
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
                    nz.A.clearAll(t.id, ti.C.FirstThreadMessage),
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
            v = lB.A.hasSeen(t.id),
            A = (0, ex.Hv)(t),
            C = (0, g.bG)([eU.default], () => eU.default.getCurrentUser());
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
                            await (0, n7.R)([n], t, ti.C.FirstThreadMessage, { origin: "clipboard" }),
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
                                          ? eK.intl.string(eK.t["5h0QOP"])
                                          : c || (h.textValue.length > 0 && h.textValue.trim() !== A)
                                            ? eK.intl.string(eK.t.lU4dDS)
                                            : eK.intl.string(eK.t.CjmivA),
                                  rows: 1,
                                  maxLength: e$.Ign,
                                  onChange: (e) => {
                                      let n = e.target.value,
                                          l = (0, lD.A)(n, !1);
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
                                      let e = (0, lD.A)(m, !0);
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
                  icon: nT.B,
                  "aria-label": eK.intl.string(eK.t["4d4T4l"]),
              }),
          })
        : null;
}
let ig = s.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            l = new lO.Ay({ channel_id: t.id, content: n }),
            { content: s } = (0, lk.A)(l, {
                hideSimpleEmbedContent: !0,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0,
            }),
            a = (0, l_.A)({ message: l, channel: t, compact: !1 }, s, !1);
        return (0, i.jsx)("div", { className: r()(ic.SL, ic.ly), children: a });
    }),
    ij = s.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: l = !1, editorRef: a, setEditorRef: o } = e,
            c = (0, g.bG)([eU.default], () => eU.default.getCurrentUser());
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
                                  placeholder: eK.intl.string(eK.t["8IPnv1"]),
                                  textValue: h.textValue,
                                  richValue: h.richValue,
                                  focused: x,
                                  className: ic.gM,
                                  innerClassName: r()(ic.SL, { [ic.cr]: null != N }),
                                  onChange: A,
                                  onSubmit: C,
                                  promptToUpload: n7.R,
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
            children: eK.intl.string(eK.t["WE/cYo"]),
        }),
    });
}
function iv(e) {
    let { textAreaState: t } = (0, ev.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, d.x),
        n = (0, g.yK)([tr.A], () => tr.A.getUploads(e.id, ti.C.FirstThreadMessage));
    return s.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n]);
}
function iA(e) {
    let t = iv(e),
        { appliedTags: n, name: l } = (0, ev.kU)((e) => {
            let { appliedTags: t, name: n } = e;
            return { appliedTags: t, name: n };
        }, d.x);
    return s.useMemo(() => e.hasFlag(io.lx.REQUIRE_TAG) && 0 === n.size && l.length > 0 && t, [n, l, e, t]);
}
function iC() {
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
            icon: e ? nP.G : nF.b,
            "aria-label": l,
        }),
    });
}
let iN = s.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: l } = e,
        { textAreaState: a, name: r } = (0, ev.kU)((e) => {
            let { textAreaState: t, name: n } = e;
            return { textAreaState: t, name: n };
        }, d.x),
        { rateLimitPerUser: o } = t,
        c = o > 0,
        u = (0, g.bG)([lP.A], () => lP.A.getSlowmodeCooldownGuess(t.id, lP.R.CreateThread)),
        m = (0, nX._i)(t, lP.R.CreateThread),
        h = iA(t),
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
                (0, i.jsx)(iS, { parentChannel: t }),
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
                        children: eK.intl.string(eK.t.xPfNQi),
                    }),
            ],
        })
    );
});
function ib(e) {
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
        u = iv(t),
        m = !iA(t) && u && o.trim().length > 0;
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
function iE() {
    return Promise.resolve();
}
function iS(e) {
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
            scrollToStart: iE,
            scrollToEnd: iE,
            orientation: h.Gl.HORIZONTAL,
        }),
        { containerRef: x, containerWidth: g } = ir(),
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
                                                  ariaLabel: eK.intl.formatToPlainString(eK.t.FSZVIR, {
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
                      className: r()(ic.Wk, ic.Dz),
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
var iy = n(602137),
    iT = n(782134),
    iI = n(391242),
    iR = n(191023),
    ik = n(234914),
    i_ = n(930125),
    iM = n(282108),
    iw = n(807632),
    iD = n(461771),
    iL = n(602034);
let iO = "data-grid-item-id",
    iP = "data-grid-section",
    iF = "data-grid-prev-section-boundary",
    iG = new Set([h.D$.UP, h.D$.DOWN, h.D$.LEFT, h.D$.RIGHT]);
function iU(e) {
    let { section: t, column: n, row: l } = e,
        i = `[${iP}="${t}"]`,
        s = `[aria-colindex="${n}"]`,
        a = `[aria-rowindex="${l}"]`;
    return `${i}${s}${a}`;
}
let iz = { id: "NO_LIST", onKeyDown() {}, ref: s.createRef() },
    iH = s.createContext({ id: "NO_LIST", setFocus() {} }),
    iB = s.createContext(iz);
function iV(e) {
    let { id: t, section: n, row: l, column: i, boundaries: a } = e,
        [r, o] = s.useState(0 === l && 0 === i ? 0 : -1),
        { id: c, setFocus: d } = s.useContext(iH),
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
            [iO]: (0, iL.t$)(c, t),
            [iP]: n,
            [iF]: a[n],
            role: "gridcell",
            "aria-rowindex": l,
            "aria-colindex": i,
            tabIndex: r,
            onFocus: u,
        }
    );
}
function iW(e) {
    let { children: t, navigator: n } = e,
        {
            id: l,
            setFocus: a,
            containerProps: { onKeyDown: r, ref: o },
        } = n,
        c = s.useMemo(() => ({ id: l, setFocus: a }), [l, a]),
        d = s.useMemo(() => ({ onKeyDown: r, ref: o, id: l }), [r, o, l]);
    return (0, i.jsx)(iB.Provider, { value: d, children: (0, i.jsx)(iH.Provider, { value: c, children: t }) });
}
var i$ = n(291812),
    iq = n(84120),
    iK = n(773746),
    iY = n(627363),
    iX = n(140651),
    iQ = n(290863),
    iJ = n(992828);
function iZ(e) {
    let { channel: t, className: n } = e,
        l = t.ownerId,
        s = t.guild_id,
        a = (0, g.bG)([tF.A], () => (null == s ? null : tF.A.getGuild(s)?.gameApplicationIds?.[0]), [s]),
        { data: o } = (0, iY.YY)(a),
        c = (0, g.bG)([iQ.A], () => (null == l || null == a ? null : iQ.A.getApplicationActivity(l, a)), [l, a]),
        d = (0, iq.em)({ presenceActivity: c, channel: t, activityActionType: void 0 }),
        { primaryColor: u, secondaryColor: m } = (0, iX.A)(o?.getIconURL(128)),
        h = `linear-gradient(45deg, ${u}, ${m})`;
    if (null == c) return null;
    let x = c.details ?? c.name;
    return (0, i.jsxs)("div", {
        className: r()(n, iJ.Nr),
        style: { background: h },
        children: [
            (0, i.jsx)(b.E, { variant: "text-sm/semibold", color: "always-white", className: iJ.DD, children: x }),
            (0, i.jsxs)("div", {
                className: iJ.yu,
                children: [
                    (0, i.jsx)("div", { className: iJ.Hg, children: d }),
                    (0, i.jsx)(iK.V, { className: iJ.$B, activity: c }),
                ],
            }),
        ],
    });
}
var i0 = n(520718);
function i1(e) {
    let { message: t, channel: n, containerWidth: l } = e,
        s = sn({ message: t, channel: n, containerWidth: l - 32, hideTags: !0 }),
        { hasUnreads: a } = (0, ex.X5)(n),
        { content: r } = (0, ex.gk)({ firstMessage: t, formatInline: !1, noStyleAndInteraction: !0, hasUnreads: a });
    return null != s ? s : (0, i.jsx)(i$.Ay, { message: t, content: r, className: i0.BK, compact: !1 });
}
function i2(e) {
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
        v = (0, O.Ay)(n),
        { messageCountText: A } = (0, ex.k6)(n),
        C = s.useRef(null),
        { handleLeftClick: N, handleRightClick: S } = (0, eN.A)({ facepileRef: C, goToThread: l, channel: n });
    s.useEffect(() => {
        u?.(h.current?.ref, m);
    }, [u, m]);
    let y = (0, ex.Mw)(n, iy.T.CREATION_DATE, ng.EG.POSTED_DURATION_AGO),
        { shouldRenderTagsRow: T } = (0, eA.BA)({ channel: n, isNew: !1 }),
        { onFocus: I, ...R } = iV({ id: t, row: o.row, column: o.column, section: o.section, boundaries: c }),
        k = p?.nick ?? j?.username ?? "",
        _ = j?.getAvatarURL(n.guild_id, (0, Z.FT)(Z._3.SIZE_24));
    return (0, i.jsxs)(E.D, {
        ref: h,
        tag: "li",
        onClick: N,
        onFocus: I,
        onContextMenu: S,
        className: r()(i0.kL, d, { [i0.nT]: x }),
        "aria-label": eK.intl.formatToPlainString(eK.t.pgYN6c, { title: v ?? "", count: A }),
        style: { ...a },
        ...R,
        children: [
            (0, i.jsxs)("div", {
                className: i0.wx,
                children: [
                    (0, i.jsx)(J.eu, { src: _, size: Z._3.SIZE_24, className: i0.my, "aria-label": k }),
                    (0, i.jsx)(b.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: i0.fh,
                        children: k,
                    }),
                    (0, i.jsx)(b.E, { variant: "text-xs/medium", color: "text-subtle", className: i0.vE, children: y }),
                ],
            }),
            (0, i.jsxs)(Q.M, {
                className: i0.rf,
                children: [
                    null != f ? (0, i.jsx)(i1, { message: f, channel: n, containerWidth: a.width }) : null,
                    (0, i.jsxs)("div", {
                        className: i0.oO,
                        children: [
                            T
                                ? (0, i.jsx)("div", { className: i0.GA, children: (0, i.jsx)(eA.Ay, { channel: n }) })
                                : null,
                            (0, i.jsx)(iZ, { channel: n }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(Q.M, {
                className: i0.qr,
                children: (0, i.jsx)(ss, { channel: n, firstMessage: f, facepileRef: C }),
            }),
        ],
    });
}
var i4 = n(994500),
    i7 =
        (((l = {})[(l.THREE_BY_TWO = 2 / 3)] = "THREE_BY_TWO"),
        (l[(l.SIXTEEN_BY_NINE = 9 / 16)] = "SIXTEEN_BY_NINE"),
        l);
let i3 = { columns: 1, columnWidth: 450 },
    i8 = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i7.THREE_BY_TWO,
            n = e - 2,
            l = Math.ceil(n * t);
        return [n, l];
    },
    i5 = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i7.THREE_BY_TWO;
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
        u = (0, g.bG)([eO.A], () => eO.A.getChannel(n)),
        m = (0, iw.YG)(u);
    return null == u
        ? null
        : m
          ? (0, i.jsx)(i2, {
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
        f = (0, g.bG)([eL.Ay], () => eL.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: v, loaded: A } = (0, eg.OA)(n),
        C = (0, O.Ay)(n),
        { messageCountText: N } = (0, ex.k6)(n),
        { isNew: S, hasUnreads: y } = (0, ex.X5)(n),
        T = s.useRef(null),
        { handleLeftClick: I, handleRightClick: R } = (0, eN.A)({ facepileRef: T, goToThread: l, channel: n });
    s.useEffect(() => {
        m?.(x.current, h);
    }, [m, h]);
    let k = (0, ex.Mw)(n, iy.T.CREATION_DATE, ng.EG.POSTED_DURATION_AGO),
        _ = (0, tK.hf)(n),
        { onFocus: M, ...w } = iV({ id: t, row: d.row, column: d.column, section: d.section, boundaries: u });
    return (0, i.jsxs)("li", {
        ref: x,
        onClick: I,
        onFocus: M,
        onContextMenu: R,
        className: r()(i9.kL, o, { [i9.nT]: f }),
        style: { ...c },
        children: [
            (0, i.jsx)(E.D, {
                onClick: I,
                focusProps: { ringTarget: x },
                onContextMenu: R,
                "aria-label": eK.intl.formatToPlainString(eK.t.pgYN6c, { title: C ?? "", count: N }),
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
                            S
                                ? (0, i.jsx)(et.Lp, {
                                      className: i9.Ad,
                                      color: en.A.unsafe_rawColors.BRAND_260.css,
                                      text: eK.intl.string(eK.t.y2b7CA),
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
                            children: _,
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: i9.PU,
                children: (0, i.jsx)(Q.M, {
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
                children: (0, i.jsx)(Q.M, {
                    children: (0, i.jsx)(ss, { channel: n, firstMessage: v, facepileRef: T }),
                }),
            }),
        ],
    });
}
function sn(e) {
    let { message: t, channel: n, containerWidth: l, hideTags: s = !1 } = e,
        { isBlocked: a, isIgnored: r } = (0, g.cf)([i4.A], () => ({
            isBlocked: null != t && i4.A.isBlockedForMessage(t),
            isIgnored: null != t && i4.A.isIgnoredForMessage(t),
        }));
    return a
        ? (0, i.jsx)(su, { message: eK.intl.string(eK.t.Lkp2fB), containerWidth: l, channel: n, hideTags: s })
        : r
          ? (0, i.jsx)(su, { message: eK.intl.string(eK.t.yWK7ZM), containerWidth: l, channel: n, hideTags: s })
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
        r = (0, g.bG)([eO.A], () => eO.A.getChannel(t.parent_id)),
        { firstMedia: o } = (0, ex.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !1 }),
        { hasUnreads: c } = (0, ex.X5)(t),
        d = (0, g.bG)([eF.A], () => eF.A.can(e$.xBc.MANAGE_MESSAGES, t)),
        u = eD.kt.useSetting(),
        m = eD.gs.useSetting(),
        h = (0, eT.A)(m, d),
        x = (0, ef.no)(n, r, !1),
        f = t.isMediaPost(),
        [j, p] = i8(a.width - 24, f ? i7.SIXTEEN_BY_NINE : i7.THREE_BY_TWO);
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
                      children: (0, i.jsx)(eA.Ay, { channel: t, tagsClassName: i9.uU }),
                  }),
              ],
          });
}
function ss(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        s = (0, eu.m)(t.id),
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
                                              children: (0, i.jsx)(el.n, { themed: !0, dotRadius: 2 }),
                                          }),
                                          (0, i.jsx)(ea.Ay, { channel: t, className: i9.mD, renderDots: !1 }),
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
            children: (0, ek.LL)({ ...e, analyticsSource: "ForumPostMediaPreviewImage" }),
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
            { containsVideo: d, containsGif: u } = s.useMemo(() => (0, ef.$2)(t), [t]),
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
            g = (0, iM.O8)(i_.v.GUILD),
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
                            f = (0, eE.ge)(e.src) ? `${e.src}?format=png` : e.src,
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
                                          ? (0, i.jsx)(es._, {
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
                                            children: (0, i.jsx)(ep.A, { obscureReason: s, iconClassname: i9.yo }),
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
        c = eD.hH.useSetting(),
        [d, u] = i8(a - 24),
        { content: m } = (0, ex.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !0 }),
        { shouldRenderTagsRow: h } = (0, eA.BA)({ channel: t, isNew: !1 }),
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
                            children: eK.intl.string(eK.t.mE3KJN),
                        }),
                    l && null != n && (0, i.jsx)(i$.Ay, { message: n, content: m, className: g, compact: c }),
                ],
            }),
            (0, i.jsx)("div", {
                className: r()(i9.kh, { [i9.ZH]: !h }),
                children: h ? (0, i.jsx)(eA.Ay, { channel: t, tagsClassName: i9.uU }) : null,
            }),
        ],
    });
}
function su(e) {
    let { message: t, containerWidth: n, channel: l, hideTags: a = !1 } = e,
        [o, c] = i8(n - 24),
        { shouldRenderTagsRow: d } = (0, eA.BA)({ channel: l, isNew: !1 }),
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
                children: d && !a ? (0, i.jsx)(eA.Ay, { channel: l, tagsClassName: i9.uU }) : null,
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
        className: sg.k,
        children: (0, i.jsxs)(sh.W, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": d ? eK.intl.string(eK.t["kQN/bi"]) : eK.intl.string(eK.t.DJzbkL),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, i.jsxs)(sx.rX, {
                    label: eK.intl.string(eK.t.f8wNDl),
                    children: [
                        (0, i.jsx)(sx.iD, {
                            id: "sort-by-recent-activity",
                            group: "sort-by",
                            label: eK.intl.string(eK.t.jOPmcI),
                            action: () => u(iy.T.LATEST_ACTIVITY),
                            checked: l === iy.T.LATEST_ACTIVITY,
                        }),
                        (0, i.jsx)(sx.iD, {
                            id: "sort-by-date-posted",
                            group: "sort-by",
                            label: eK.intl.string(eK.t.UIltXd),
                            action: () => u(iy.T.CREATION_DATE),
                            checked: l === iy.T.CREATION_DATE,
                        }),
                    ],
                }),
                t.isModeratorReportChannel() &&
                    (0, i.jsx)(sx.rX, {
                        label: eK.intl.string(tX.default.PsM2b4),
                        children: (0, i.jsx)(sx.sL, {
                            id: "resolved-flags-none",
                            label: eK.intl.string(eK.t.XJuakA),
                            action: () => o(!r),
                            checked: r,
                        }),
                    }),
                t.isMediaChannel() || t.isModeratorReportChannel() || t.isGameInvitesChannel()
                    ? null
                    : (0, i.jsxs)(sx.rX, {
                          label: eK.intl.string(eK.t.mFMDSq),
                          children: [
                              (0, i.jsx)(sx.iD, {
                                  id: "view-as-list",
                                  group: "view-as",
                                  label: eK.intl.string(eK.t["NJFr+g"]),
                                  action: () => m(x.C.LIST),
                                  checked: s === x.C.LIST,
                              }),
                              (0, i.jsx)(sx.iD, {
                                  id: "view-as-grid",
                                  group: "view-as",
                                  label: eK.intl.string(eK.t.wKeggb),
                                  action: () => m(x.C.GRID),
                                  checked: s === x.C.GRID,
                              }),
                          ],
                      }),
                g
                    ? (0, i.jsxs)(sx.rX, {
                          label: eK.intl.string(eK.t.Paxaug),
                          children: [
                              (0, i.jsx)(sx.iD, {
                                  id: "match-some",
                                  group: "tag-setting",
                                  label: eK.intl.string(eK.t.rQ0ctQ),
                                  action: () => h(sm.n.MATCH_SOME),
                                  checked: a === sm.n.MATCH_SOME,
                              }),
                              (0, i.jsx)(sx.iD, {
                                  id: "match-all",
                                  group: "tag-setting",
                                  label: eK.intl.string(eK.t.FCXUu0),
                                  action: () => h(sm.n.MATCH_ALL),
                                  checked: a === sm.n.MATCH_ALL,
                              }),
                          ],
                      })
                    : null,
                (0, i.jsx)(sx.rX, {
                    children: (0, i.jsx)(sx.Dr, {
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
var sj = n(123292);
function sp() {
    return Promise.resolve();
}
function sv(e) {
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
            "aria-label": eK.intl.string(eK.t.TdqRTh),
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
                                children: eK.intl.string(eK.t.HPu3kq),
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
                    "aria-label": eK.intl.string(eK.t["98EPQP"]),
                    onClick: h,
                    text: eK.intl.string(eK.t["98EPQP"]),
                }),
            ],
        })
    );
}
var sA = n(37411),
    sC = n(774418);
function sN(e) {
    let { channel: t, guild: n, sidebarState: l } = e;
    return (0, i.jsx)(ev.Cp, { channel: t, children: (0, i.jsx)(sR, { channel: t, guild: n, sidebarState: l }) }, t.id);
}
let sb = new (class {
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
function sE(e) {
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
                    id: sE(l),
                    children: eK.intl.string(eK.t["3+LO1w"]),
                }),
            }),
        },
        "section-divider",
    );
}
function sy(e) {
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
function sT(e, t) {
    return `card-${e}-${t}`;
}
function sI(e) {
    if ("string" == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function sR(e) {
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
                a = (0, g.bG)([te.A, U.A], () => {
                    let t = te.A.hasLoaded(e.guild_id),
                        n = U.A.isLurking(e.guild_id);
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
        O = w || b.length > 0,
        P = (0, z.A)(t),
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
        { containerRef: Z, containerWidth: ee } = ir();
    s.useEffect(() => {
        if (null == J.current && null != t.id) {
            let e = eL.Ay.getSidebarState(t.id);
            null != e && e.type === e9.PE.VIEW_THREAD && (J.current = e.channelId);
        }
    }, [t.id]);
    let { columns: et } = s.useMemo(() => (Y ? sb.getRenderOptions(ee) : i3), [Y, ee]),
        en = s.useMemo(() => (R ? Math.round((window.innerHeight - 200) / 118) : 0), [R]),
        { showResolvedFlags: el } = (0, B.T)(t.id),
        ei = t.isModeratorReportChannel(),
        es = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / i5(sb.getWidth(ee))) * et;
            return T ? e : 0;
        }, [ee, et, T]),
        ea = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / i5(sb.getWidth(ee))) * et;
            return I ? e : 0;
        }, [ee, et, I]),
        er = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / i5(sb.getWidth(ee))) * et;
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
                    n ? (0, e6.N9)(e, { source: sA.H9.BROWSER }) : ((J.current = e.id), (0, tl.JA)(e));
            },
            [t.guild_id, t.id, J],
        ),
        [eu, em] = s.useState(l + a - 24),
        eg = s.useCallback(
            (e, n, l) =>
                0 === e
                    ? (0, i.jsx)(
                          sL,
                          {
                              channel: t,
                              isEmpty: !w,
                              isSearchLoading: k,
                              numResults: E?.length,
                              coords: n,
                              onHeightChange: em,
                              children:
                                  !R && (0, i.jsx)(nS, { channel: t, hasAnyThread: O, hasActiveThreads: w }, t.id),
                          },
                          "forum-channel-header",
                      )
                    : 2 !== e || $
                      ? 1 === e && Q && !W
                          ? (0, i.jsx)(s_, { channel: t, coords: n }, "archive-or-search-result")
                          : l()
                      : (0, i.jsx)(sk, { channel: t, coords: n }, "archived-missing-reading-history-perm"),
            [Q, $, E, W, t, w, k, R, O],
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
                    (e) => sy({ section: e.section, isShowingSearchResult: h, hasActiveThreads: n })(),
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
                            (h.current = sI(n));
                    },
                    [t, h],
                ),
                p = s.useCallback(
                    (e) => {
                        let t = sI(e);
                        if (null == t) return;
                        let n = eO.A.getChannel(t);
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
                            return null == l ? sT(e, t) : sT(e, l);
                        }
                    },
                    [n],
                ),
                A = s.useCallback(
                    (e, t, n) =>
                        a(e, t, sy({ section: e, coords: t, key: n, isShowingSearchResult: c, hasActiveThreads: o })),
                    [a, o, c],
                ),
                C = s.useCallback((e) => (0 === e ? {} : { role: "grid", "aria-labelledby": `#${sE(e)}` }), []);
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
                        o = l[sT(n, e)];
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
            e.scrollHeight - n < (Y ? Math.max(200, i5(ee)) : 200) && y();
        }, [Q, Y, t.guild_id, t.id, ee, y]),
        eD = (0, g.bG)([L.A], () => L.A.keyboardModeEnabled),
        eP = (0, ev.kU)((e) => e.titleFocused || e.bodyFocused, d.x),
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
                        let n = (0, iL.Mz)(e, iO),
                            l = (0, iL.HP)(e);
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
                                null !== e && null == c((0, iL.Mz)(e, iO)) && u((0, iL.Mz)(t, "data-grid-id"));
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
                        let l = (0, iL.Mz)(t, iO),
                            s = n?.querySelector(l);
                        if (null == s) return;
                        let a = parseInt(s.getAttribute("data-grid-section") ?? ""),
                            d = parseInt(s.getAttribute("aria-rowindex")),
                            u = parseInt(s.getAttribute("aria-colindex"));
                        switch ((iG.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
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
                                    let t = parseInt(s.getAttribute(iF));
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
                                    let n = c((0, iL.Mz)(t, iO)),
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
                        i.current = null != e ? (0, iL.t$)(t, e) : null;
                    },
                    [t],
                );
            return s.useMemo(() => ({ id: t, containerProps: { onKeyDown: j, ref: r }, setFocus: p }), [t, j, p]);
        })({ id: "forum-grid-view", isEnabled: Y && eD && !eP, setFocus: eM }),
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
        })({ listRef: q, padding: 96, isEnabled: !Y && eD && !eP, channel: t }),
        eU = s.useCallback(
            (e, n, l) =>
                0 === e
                    ? 0
                    : t.isGameInvitesChannel()
                      ? 280
                      : i5(l, t.isMediaChannel() ? i7.SIXTEEN_BY_NINE : i7.THREE_BY_TWO),
            [t],
        ),
        { ref: ez, ...eH } = eF.containerProps,
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
                        (0, i.jsx)(sM, { channel: t }),
                        (0, i.jsx)(A.A, { children: (0, i.jsx)(p.H, { children: eK.intl.string(eK.t.B2panI) }) }),
                        P
                            ? (0, i.jsx)("div", {
                                  className: tJ.optInNotice,
                                  children: (0, i.jsx)(H.A, { channel: t }),
                              })
                            : null,
                        Y
                            ? (0, i.jsx)(iW, {
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
function sk(e) {
    let { channel: t, coords: n } = e,
        l = (0, O.Ay)(t);
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
function s_(e) {
    let { channel: t, coords: n } = e,
        l = (0, O.Ay)(t);
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
function sM(e) {
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
function sw() {
    return Promise.resolve();
}
function sD(e) {
    let { parentChannel: t, canCreatePost: n } = e,
        l = s.useCallback(() => {
            (0, P.d)(t);
        }, [t]);
    return __OVERLAY__ || !n
        ? null
        : (0, i.jsx)(S.$, { variant: "primary", size: "md", text: eK.intl.string(sC.default.QwW8zd), onClick: l });
}
function sL(e) {
    let t,
        n,
        l,
        { channel: a, isEmpty: o, isSearchLoading: p, numResults: v, children: A, coords: C, onHeightChange: N } = e,
        {
            name: S,
            formOpen: _,
            titleFocused: M,
            hasClickedForm: D,
            textAreaState: O,
            onboardingExpanded: P,
            setEditorAdditionRowHeight: U,
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
        { tagFilter: z, layoutType: H } = (0, eh.R)(a.id),
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
    s.useLayoutEffect(en, [en, o, Z, P]), (0, to.Vo)({ event: e$.jej.REMEASURE_TARGET, handler: en });
    let el = (0, g.bG)([tr.A], () => tr.A.getUploads(a.id, ti.C.FirstThreadMessage)),
        ei = (0, ex.Hv)(a),
        es = s.useRef(null),
        ea = s.useRef(null),
        [er, eo] = s.useState(0),
        { width: ec } = (0, g.bG)([ez.A], () => ez.A.windowSize()),
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
    }, [a.availableTags, ec, ed, z]);
    let eg = S.length > 0 && !_ && (p || null != v),
        ef =
            !__OVERLAY__ &&
            !D &&
            !_ &&
            M &&
            (0 === O.textValue.trim().length || O.textValue.trim() === ei) &&
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
            scrollToStart: sw,
            scrollToEnd: sw,
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
                            a.isGameInvitesChannel() && (0, i.jsx)(sD, { parentChannel: a, canCreatePost: Z }),
                        ],
                    }),
                    (0, i.jsx)(n_, { channel: a, onChange: en }),
                    (0, i.jsxs)("div", {
                        className: tJ.tagsContainer,
                        ref: es,
                        children: [
                            (0, i.jsx)(sO, { channel: a }),
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
                                                                      ie.A,
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
                                                                                      filterTagIds: Array.from(z),
                                                                                      added: !z.has(t),
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
                                              targetElementRef: em,
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
                                                      buttonRef: em,
                                                      size: f.$n.Sizes.MIN,
                                                      color: f.$n.Colors.CUSTOM,
                                                      className: r()(tJ.tagsButton, {
                                                          [tJ.tagsButtonWithCount]: z.size > 0,
                                                      }),
                                                      style: { left: er },
                                                      innerClassName: tJ.tagsButtonInner,
                                                      "aria-label":
                                                          z.size > 0
                                                              ? eK.intl.string(eK.t.IkpM1T)
                                                              : eK.intl.string(eK.t["9vKK/N"]),
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
function sO(e) {
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

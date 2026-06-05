n.r(t), n.d(t, { CreateGameInvitePostButton: () => sE, default: () => sm });
var l,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(756287),
    d = n.n(o),
    c = n(942381),
    u = n(837381),
    m = n(887129),
    h = n(741918),
    g = n(371444),
    x = n(17928),
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
    M = n(847374),
    k = n(112173),
    _ = n(738876),
    w = n(765671),
    L = n(964486),
    D = n(775602),
    O = n(47167),
    P = n(807632),
    F = n(337885),
    G = n(870136),
    U = n(575293),
    z = n(857071),
    H = n(228098),
    B = n(157259),
    V = n(212007),
    W = n(892340),
    $ = n(715757),
    q = n(284009),
    K = n.n(q),
    Y = n(989349),
    Q = n.n(Y),
    X = n(990078),
    J = n(247928),
    Z = n(97808),
    ee = n(778712),
    et = n(138134),
    en = n(777666),
    el = n(661531),
    ei = n(863610),
    es = n(534890),
    ea = n(144165),
    er = n(119031),
    eo = n(104171),
    ed = n(139716),
    ec = n(847599),
    eu = n(114166),
    em = n(810181),
    eh = n(390248),
    eg = n(422844),
    ex = n(435470),
    ef = n(473503),
    ej = n(256265),
    ep = n(969043),
    ev = n(710948),
    eA = n(218152),
    eC = n(52933),
    eN = n(504261),
    eb = n(505234),
    eE = n(387408),
    eS = n(59318),
    ey = n(294520),
    eT = n(505527),
    eI = n(863439),
    eR = n(465364),
    eM = n(467073),
    ek = n(34337),
    e_ = n(831688),
    ew = n(805964),
    eL = n(302031),
    eD = n(885386),
    eO = n(761640),
    eP = n(734057),
    eF = n(232835),
    eG = n(576705),
    eU = n(967198),
    ez = n(287809),
    eH = n(531685),
    eB = n(58703),
    eV = n(763754),
    eW = n(447215);
let e$ = (e) => {
    let { message: t, originalAuthor: n, channel: l } = e,
        s = (0, eV.d8)(n, l),
        a = s?.nick ?? n?.username ?? "",
        r = (0, eW.P)({
            user: n ?? void 0,
            channelId: l.id,
            guildId: l.guild_id,
            messageId: t?.id,
            stopPropagation: !0,
        })(s ?? void 0)(a, l.id);
    return (0, i.jsx)(b.E, { variant: "text-md/semibold", children: r });
};
var eq = n(652215),
    eK = n(838541),
    eY = n(375708),
    eQ = n(506472),
    eX = n(330070),
    eJ = n(992595);
let eZ = s.memo(function (e) {
    let { threadId: t, goToThread: n, observePostVisibilityAnalytics: l, overrideMedia: a, className: o } = e,
        {
            channel: d,
            isOpen: m,
            messageCount: h,
            content: g,
            firstMessage: f,
            media: j,
        } = (function (e) {
            let { threadId: t, overrideMedia: n } = e,
                l = (0, x.bG)([eP.A], () => eP.A.getChannel(t));
            K()(null != l, "the thread should not be null here, a store must have missed an update");
            let i = (0, x.bG)([eO.Ay], () => eO.Ay.getCurrentSidebarChannelId(l.parent_id) === l.id),
                { firstMessage: a } = (0, ef.OA)(l),
                r = (function (e) {
                    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: l = !0 } = e,
                        i = s.useMemo(() => (null != t ? (0, eE.A)(t, t?.messageSnapshots[0]) : null), [t]),
                        { hasSpoilerEmbeds: a, content: r } = s.useMemo(
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
                        o = (0, ej.Ky)(t, a),
                        d = (0, ej.L_)(t, a);
                    return null == t ? null : { hasSpoilerEmbeds: a, content: r, firstMedia: o, firstMediaIsEmbed: d };
                })({ firstMessage: a }),
                o = r?.content,
                d = r?.firstMedia,
                { messageCountText: c } = (0, ex.k6)(l);
            return { channel: l, isOpen: i, messageCount: c, firstMessage: a, content: o, media: n ?? d };
        })({ threadId: t, overrideMedia: a }),
        v = (0, O.Ay)(d);
    (0, $.vb)(f);
    let A = (0, x.bG)([ez.default, eF.A], () => {
            let e = ez.default.getUser(f?.messageSnapshots[0]?.moderatorReport?.reported_user_id);
            if (null != e) return e;
            if (f?.messageReference?.channel_id != null && f?.messageReference?.message_id != null) {
                let e = eF.A.getMessage(f?.messageReference?.channel_id, f?.messageReference?.message_id);
                if (null != e) return e.author;
            }
            return null;
        }),
        { ref: C, height: N } = (0, w.Ay)(),
        b = (0, eA.kU)((e) => e.setCardHeight, c.x);
    s.useEffect(() => {
        null != N && b(t, N);
    }, [N, b, t]),
        s.useEffect(() => {
            l?.(C.current, t);
        }, [C, l, t]);
    let S = s.useRef(null),
        { handleLeftClick: y, handleRightClick: T } = (0, eb.A)({ facepileRef: S, goToThread: n, channel: d }),
        { role: I, onFocus: R, ...M } = (0, u.rm)(t),
        { isFocused: k, handleFocus: _, handleBlur: L } = (0, eN.A)(R);
    return (0, i.jsxs)("div", {
        ref: C,
        "data-item-id": t,
        onClick: y,
        onContextMenu: T,
        className: r()(eX.kL, eQ.kL, o, { [eX.nT]: m }),
        children: [
            (0, i.jsx)(E.D, {
                onClick: y,
                focusProps: { ringTarget: C },
                onContextMenu: T,
                "aria-label": eY.intl.formatToPlainString(eY.t.pgYN6c, { title: v, count: h }),
                className: eX.Kv,
                onFocus: _,
                onBlur: L,
                ...M,
            }),
            (0, i.jsxs)("div", {
                className: eX.kb,
                children: [
                    (0, i.jsx)(p.F, {
                        children: (0, i.jsxs)("div", {
                            className: eQ.fx,
                            children: [
                                (0, i.jsx)(e0, {
                                    channel: d,
                                    firstMessage: f,
                                    content: g,
                                    hasMediaAttachment: null != j,
                                    originalAuthor: A,
                                }),
                                f?.blocked || null == j ? null : (0, i.jsx)(e9, { channel: d, firstMedia: j }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(J.M, {
                        enabled: !k,
                        children: (0, i.jsx)(e2, { channel: d, firstMessage: f, facepileRef: S }),
                    }),
                ],
            }),
        ],
    });
});
function e0(e) {
    let { channel: t, firstMessage: n, content: l, hasMediaAttachment: s, originalAuthor: a } = e,
        { hasUnreads: o } = (0, ex.X5)(t);
    return (0, i.jsxs)("div", {
        className: r()(eQ.rf, eX.rf),
        children: [
            (0, i.jsx)(eC.Ay, { channel: t }),
            (0, i.jsx)("div", {
                className: (eX.iU, eQ.iU),
                children: (0, i.jsx)(e1, {
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
let e1 = s.memo(function (e) {
    let { message: t, channel: n, content: l, hasMediaAttachment: s, hasUnreads: a, originalAuthor: o } = e,
        d = (0, x.bG)([ep.A], () => ep.A.isLoading(n.id)),
        c = (0, x.bG)([eG.A], () => eG.A.can(eq.xBc.MANAGE_MESSAGES, n)),
        u = eD.gs.useSetting(),
        m = (0, x.bG)([eU.A], () => eU.A.getGuildId()),
        { contentPlaceholder: h, renderedContent: g } =
            null == t
                ? { contentPlaceholder: null, renderedContent: null }
                : (0, ew.o)(t, l, !1, !1, r()(eX.BK, eQ.BK, eJ.tZ, eJ.__invalid_smallFontSize), {
                      leadingIconClass: eX.aG,
                      trailingIconClass: eX.sl,
                      iconSize: eK.eJ,
                  }),
        f =
            null != g
                ? (0, i.jsx)(b.E, { variant: "text-md/normal", children: g })
                : s
                  ? null
                  : (0, i.jsx)(b.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: a ? "text-default" : "text-muted",
                        className: r()(eX.BK, eQ.BK),
                        "aria-label": "",
                        children: null == t ? (d ? null : eY.intl.string(eY.t.mE3KJN)) : h,
                    });
    return (0, i.jsxs)(eL.Bs.Provider, {
        value: (0, eI.A)(u, c),
        children: [
            null != o
                ? (0, i.jsx)(Z.eu, {
                      size: ee._3.SIZE_40,
                      src: o.getAvatarURL(m, (0, ee.FT)(ee._3.SIZE_40)),
                      "aria-label": "",
                      className: eQ.Nd,
                  })
                : null,
            (0, i.jsxs)("div", {
                className: eQ.IF,
                children: [
                    (0, i.jsx)(e$, { channel: n, originalAuthor: o, message: t }),
                    (0, i.jsx)(J.M, { className: eX.JY, children: f }),
                ],
            }),
        ],
    });
});
function e2(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        { isNew: s } = (0, ex.X5)(t),
        a = (0, O.Ay)(t),
        r = (0, em.m)(t.id),
        o = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: eQ.qr,
        children: [
            (0, i.jsxs)("div", {
                className: eQ.JS,
                children: [
                    (0, i.jsx)(et.i, { size: "custom", width: 14, height: 14 }),
                    (0, i.jsx)(b.E, { variant: "text-sm/medium", children: a }),
                    s
                        ? (0, i.jsx)(en.Lp, {
                              color: el.A.unsafe_rawColors.BRAND_260.css,
                              text: eY.intl.string(eY.t.y2b7CA),
                              className: eQ.Ad,
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: eQ.PQ,
                children: [
                    o || null == l ? null : (0, i.jsx)(e7, { firstMessage: l, channel: t }),
                    (0, i.jsx)(e4, { channel: t, iconSize: 14 }),
                    (0, i.jsx)("span", { className: eX.xE, children: "\u2022" }),
                    r.length > 0
                        ? (0, i.jsxs)("div", {
                              className: eX.IW,
                              children: [
                                  (0, i.jsx)(e8, { channel: t, userIds: r, facepileRef: n }),
                                  (0, i.jsx)("div", {
                                      className: eX.r$,
                                      children: (0, i.jsx)(ei.n, { themed: !0, dotRadius: 2 }),
                                  }),
                                  (0, i.jsx)(er.Ay, { channel: t, className: eX.mD, renderDots: !1 }),
                              ],
                          })
                        : (0, i.jsx)(e3, { channel: t }),
                ],
            }),
        ],
    });
}
function e4(e) {
    let { channel: t, iconSize: n, showReadState: l = !1 } = e,
        { messageCountText: s, unreadCount: a } = (0, ex.k6)(t);
    return (0, i.jsxs)("div", {
        className: r()(eX.Mv, { [eX.hT]: l && null == a }),
        children: [
            (0, i.jsx)("span", {
                className: eX.SZ,
                children: (0, i.jsx)(es.o, { size: "custom", color: "currentColor", width: n, height: n }),
            }),
            "number" == typeof s
                ? (0, i.jsx)(eu.A, { value: s, digitWidth: 9, className: eX.gv })
                : (0, i.jsx)("div", { className: eX.gv, children: s }),
            null == a
                ? null
                : (0, i.jsxs)(b.E, {
                      className: eX.bU,
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: ["(", eY.intl.format(eY.t.z3PEth, { count: a }), ")"],
                  }),
        ],
    });
}
function e7(e) {
    let { firstMessage: t, channel: n } = e,
        l = (0, x.bG)([eP.A], () => eP.A.getChannel(n.parent_id)),
        s = (0, ex.Ck)(l),
        { disableReactionCreates: a, isLurking: r, isPendingMember: o } = (0, eM.A)(n);
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
              type: eT.v.NORMAL,
              emojiSize: "reaction",
              emojiSizeTooltip: "reaction",
          });
}
function e3(e) {
    let { channel: t } = e,
        { sortOrder: n } = (0, eg.R)(t.parent_id),
        l = (0, ex.Mw)(t, n),
        s = t.threadMetadata?.createTimestamp,
        a = null == s ? null : eY.intl.formatToPlainString(eY.t["13euCd"], { timestamp: (0, eB.i$)(Q()(s), "LLLL") });
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
function e8(e) {
    let { channel: t, userIds: n, facepileRef: l } = e,
        s = (0, ex.$I)(t, n);
    return (0, i.jsx)("div", {
        ref: l,
        children: (0, i.jsx)(eo.Ay, {
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
function e5(e) {
    let t,
        n,
        { firstMedia: l, shouldObscure: s, obscureReason: a, shouldShowAgeVerification: o } = e,
        d = (0, x.bG)([eH.A], () => eH.A.isFocused()),
        c = (0, eS.ge)(l.src),
        u = eD.kt.useSetting(),
        m = (0, ey.rx)(a),
        { src: h, width: g, height: f, alt: j } = l;
    return (f > g ? (n = 72) : (t = 72), o)
        ? (0, i.jsx)("div", {
              "aria-label": m ?? j ?? eY.intl.string(eY.t.hqwnc2),
              className: r()(eX.iT, eX.nh),
              style: { maxWidth: t, maxHeight: n, height: f, width: g },
          })
        : h.startsWith("data:")
          ? (0, i.jsx)(ea._, {
                src: h,
                maxHeight: t,
                maxWidth: n,
                width: g,
                height: f,
                alt: null != j && s ? m : j,
                className: eX.iT,
                imageClassName: r()({ [eX.cd]: s, [eX.LW]: !0 }),
            })
          : (0, ek.LL)({
                src: h,
                maxHeight: t,
                maxWidth: n,
                width: g,
                height: f,
                alt: null != j && s ? m : j,
                autoPlay: u,
                animated: c && !s && d,
                srcIsAnimated: l.srcIsAnimated,
                containerClassName: eX.iT,
                imageClassName: r()({ [eX.cd]: s }),
                analyticsSource: "ForumPostMediaPreview",
            });
}
function e9(e) {
    let { channel: t, firstMedia: n } = e,
        [l, s] = (0, ey.eJ)({ media: n, channel: t }),
        a = (0, eh.qZ)(s);
    return (0, i.jsx)(J.M, {
        enabled: !0,
        children: (0, i.jsxs)("div", {
            className: r()(eX.pV, eQ.pV),
            onClick: function (e) {
                e.stopPropagation(),
                    a &&
                        (e.preventDefault(),
                        e.nativeEvent.stopImmediatePropagation(),
                        ed.A.showAgeVerificationGetStartedModal({ entryPoint: ec.q1.FORUM_POST_MEDIA_PREVIEW }));
            },
            children: [
                (0, i.jsx)(e5, { firstMedia: n, shouldObscure: l, obscureReason: s, shouldShowAgeVerification: a }),
                l && (0, i.jsx)(ev.A, { iconClassname: eX.yo, obscureReason: s }),
            ],
        }),
    });
}
var e6 = n(378570),
    te = n(940382),
    tt = n(970278),
    tn = n(424798),
    tl = n(406704),
    ti = n(747926),
    ts = n(31717),
    ta = n(834942),
    tr = n(309010),
    to = n(522602),
    td = n(234320),
    tc = n(947094),
    tu = n(919577),
    tm = n(207777),
    th = n(365971),
    tg = n(613999);
let tx = function (e) {
    let { guildId: t, channelId: n } = e,
        l = s.useRef(null),
        i = (0, th.Xg)(),
        a = !eH.A.isFocused(i);
    return (
        s.useLayoutEffect(
            () => (
                null == l.current &&
                    ((l.current = new tg.Ay({ guildId: t, channelId: n, isPaused: a, windowId: i })),
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
var tf = n(853742);
n(321073);
var tj = n(922139),
    tp = n(136722),
    tv = n(192308),
    tA = n(866323),
    tC = n(789645),
    tN = n(446576),
    tb = n(26430),
    tE = n(885574),
    tS = n(933832),
    ty = n(565787),
    tT = n(320448),
    tI = n(435183),
    tR = n(417454),
    tM = n(148719),
    tk = n(462887),
    t_ = n(696986),
    tw = n(811893),
    tL = n(736653),
    tD = n(303136),
    tO = n(892110),
    tP = n(251766),
    tF = n(468689),
    tG = n(71393),
    tU = n(975571);
let tz = { mass: 1, tension: 250, friction: 18, clamp: !0 };
var tH = n(388803);
function tB(e) {
    let { handleHide: t } = e;
    return (0, i.jsx)(E.D, {
        onClick: t,
        className: tH.b,
        "aria-label": eY.intl.string(eY.t.WAI6xu),
        children: (0, i.jsx)(tC.P, { size: "md", color: "currentColor", className: tH.ut }),
    });
}
function tV(e) {
    let { username: t, title: n, videoSrc: l, messageCount: s, reaction: a, reactionCount: o, classname: d } = e;
    return (0, i.jsxs)("div", {
        className: r()(tH.IP, d),
        children: [
            (0, i.jsx)("div", {
                className: tH.Y6,
                children: (0, i.jsxs)("div", {
                    className: tH.wO,
                    children: [
                        (0, i.jsx)(b.E, { tag: "span", className: tH.cy, variant: "text-sm/semibold", children: t }),
                        (0, i.jsx)(b.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: tH.SD,
                            children: eY.intl.string(eY.t.mA0IvI),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(j.D, {
                variant: "heading-md/extrabold",
                className: tH.DD,
                color: "text-strong",
                "aria-hidden": !0,
                children: n,
            }),
            (0, i.jsx)(t_.h, { size: 10 }),
            (0, i.jsx)(tD.A, { className: tH.Ki, src: l }),
            (0, i.jsx)(t_.h, { size: 10 }),
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
                                    children: (0, i.jsx)(es.o, { size: "xs", color: "currentColor" }),
                                }),
                                (0, i.jsx)(b.E, {
                                    variant: "text-xs/normal",
                                    color: "interactive-text-default",
                                    children: s,
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tH.vi,
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
let tW = (e) => {
    let { channel: t } = e,
        n = (0, tL.Ay)(),
        l = (0, tk.M)(n),
        a = (0, x.bG)([tG.A], () => tG.A.getGuild(t.guild_id)),
        o = (0, x.bG)([tc.A], () => tc.A.hasHidden(t.id)),
        d = (0, tP.e)({ guildId: t.guild_id, channelId: t.id }),
        { transitions: c, setVisible: u } = (function () {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tA.p)(e, {
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
            u(!1), tu.A.hideAdminOnboarding(t.id, !0);
        }, [t, u]);
    s.useEffect(() => {
        (0, tO.l)(t.id) || u(!o);
    }, [t, u, o]);
    let h = s.useMemo(
            () => [
                eY.intl.string(eY.t["8pEGAw"]),
                eY.intl.string(eY.t.jwfgDd),
                eY.intl.string(eY.t.mPKs27),
                eY.intl.string(eY.t.StRbvG),
            ],
            [],
        ),
        g = s.useMemo(
            () => [
                eY.intl.string(eY.t["m/b58M"]),
                eY.intl.string(eY.t.MuJSKw),
                eY.intl.string(eY.t["d/Wqvu"]),
                eY.intl.string(eY.t.GJklAw),
            ],
            [],
        ),
        f = () => {
            tF.A.open(t.guild_id, eq.BEX.ROLE_SUBSCRIPTIONS);
        },
        p = a?.features.has(eq.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)
            ? eY.intl.string(eY.t.n0q7sI)
            : eY.intl.string(eY.t.QoYdie),
        v =
            (a?.features.has(eq.GuildFeatures.CREATOR_MONETIZABLE) ||
                a?.features.has(eq.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) ??
            !1,
        A = v ? eY.intl.string(eY.t["G/7ciZ"]) : eY.intl.string(eY.t.IFOiit),
        C = v ? eY.intl.string(eY.t.GjgQO1) : eY.intl.string(eY.t.E7AO6t);
    return (0, i.jsx)(i.Fragment, {
        children: c((e, t) =>
            t
                ? (0, i.jsxs)(tj.animated.div, {
                      style: e,
                      className: tH.kL,
                      children: [
                          (0, i.jsxs)("div", {
                              className: tH.U1,
                              children: [
                                  (0, i.jsxs)(b.E, {
                                      variant: "text-xs/normal",
                                      className: tH.l2,
                                      children: [
                                          (0, i.jsx)(tE.m, { size: "xxs", color: "currentColor", className: tH.Kk }),
                                          eY.intl.string(eY.t.znhX2R),
                                      ],
                                  }),
                                  (0, i.jsx)(tB, { handleHide: m }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: tH.hQ,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: r()(tH.CT, v && tH.en),
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: tH.F2,
                                              children: (0, i.jsxs)("div", {
                                                  className: tH.IZ,
                                                  children: [
                                                      (0, i.jsx)(tV, {
                                                          username: eY.intl.string(eY.t.AkORco),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                                          title: eY.intl.string(eY.t.yO6Fxu),
                                                          messageCount: "34",
                                                          reaction: "\u26A1\uFE0F",
                                                          reactionCount: "724",
                                                          classname: tH.q6,
                                                      }),
                                                      (0, i.jsx)(tV, {
                                                          username: eY.intl.string(eY.t.DPg3YM),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                                          title: eY.intl.string(eY.t["R5XnC/"]),
                                                          messageCount: "34",
                                                          reactionCount: "84",
                                                          reaction: "\uD83D\uDC9E",
                                                          classname: tH.q6,
                                                      }),
                                                      (0, i.jsx)(tV, {
                                                          username: eY.intl.string(eY.t.KIelex),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                                          title: eY.intl.string(eY.t.pt88Vb),
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
                                                          open(tU.A.getCreatorSupportArticleURL(eq.MVz.MEDIA_CHANNEL)),
                                                      className: tH.zy,
                                                      children: [
                                                          (0, i.jsx)(b.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-link",
                                                              children: eY.intl.string(eY.t.OahzBd),
                                                          }),
                                                          (0, i.jsx)(tw.t, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: tH.QI,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)(t_.h, { size: 16 }),
                                                  (0, i.jsx)("div", {
                                                      className: tH.Qq,
                                                      children: h.map((e) =>
                                                          (0, i.jsx)(
                                                              b.E,
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
                                          className: r()(tH.CT, tH.Gw),
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
                                                      (0, i.jsxs)(b.E, {
                                                          variant: "text-xxs/bold",
                                                          className: tH.X4,
                                                          children: [
                                                              eY.intl.string(eY.t.NChGwy),
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
                                                          children: eY.intl.string(eY.t["N/TRrT"]),
                                                      }),
                                                      (0, i.jsx)(t_.h, { size: 8 }),
                                                      (0, i.jsx)(b.E, {
                                                          variant: "text-md/normal",
                                                          color: "text-muted",
                                                          children: eY.intl.string(eY.t.t3yWxG),
                                                      }),
                                                      (0, i.jsx)(t_.h, { size: 16 }),
                                                      (0, i.jsx)("div", {
                                                          className: tH.Qq,
                                                          children: g.map((e) =>
                                                              (0, i.jsx)(
                                                                  b.E,
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
                                                      (0, i.jsx)(t_.h, { size: 16 }),
                                                      0 === d.length &&
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
var t$ = n(331322),
    tq = n(111159),
    tK = n(517461),
    tY = n(350527),
    tQ = n(95035),
    tX = n(221314),
    tJ = n(50897),
    tZ = n(419949);
let t0 = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    t1 = (e) => {
        let { guild: t } = e,
            n = (0, x.bG)([eG.A], () => eG.A.can(eq.xBc.MANAGE_GUILD, t));
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
                            children: (0, i.jsx)(b.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: eY.intl.string(tX.default.fP8DVx),
                            }),
                        }),
                        (0, i.jsxs)(t$.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, i.jsx)(b.E, {
                                    variant: "text-lg/semibold",
                                    color: "text-default",
                                    children: eY.intl.string(tX.default["i7CH/I"]),
                                }),
                                (0, i.jsxs)("ol", {
                                    className: r()(tJ.p_, tJ.o8, tJ.ap),
                                    children: [
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(b.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eY.intl.string(tX.default["+Izoz7"]),
                                            }),
                                        }),
                                        (0, i.jsxs)("li", {
                                            children: [
                                                (0, i.jsx)(b.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: eY.intl.string(tX.default["iu/RkU"]),
                                                }),
                                                (0, i.jsxs)("ul", {
                                                    className: r()(tJ.p_, tJ.t3, tJ.zS),
                                                    children: [
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(b.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eY.intl.string(tX.default.QogKbP),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(b.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eY.intl.string(tX.default.V4orHT),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(b.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eY.intl.string(tX.default.VrrQXe),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(b.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eY.intl.string(tX.default.pSuM5e),
                                                            }),
                                                        }),
                                                        (0, i.jsx)("li", {
                                                            children: (0, i.jsx)(b.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-default",
                                                                children: eY.intl.string(tX.default["/RLXlI"]),
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
                                                children: eY.intl.string(tX.default.j4AmYy),
                                            }),
                                        }),
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(b.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eY.intl.format(tX.default["/g+PvX"], {
                                                    termsOfService: eq.X7G.TERMS,
                                                    communityGuidelines: eq.X7G.GUIDELINES,
                                                    helpArticle: tU.A.getArticleURL(eq.MVz.FLAG_TO_MOD),
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
                                (0, i.jsx)(b.E, {
                                    variant: "text-lg/semibold",
                                    color: "text-default",
                                    children: eY.intl.string(tX.default.qJWXsz),
                                }),
                                (0, i.jsxs)("ul", {
                                    className: r()(tJ.p_, tJ.zS, tJ.ap),
                                    children: [
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(b.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eY.intl.format(tX.default.FUBV1P, {
                                                    survey: "https://discord.sjc1.qualtrics.com/jfe/form/SV_3WvT7SqlWpCJ4HQ",
                                                }),
                                            }),
                                        }),
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(b.E, {
                                                variant: "text-md/normal",
                                                color: "text-default",
                                                children: eY.intl.format(tX.default.W4MIAG, {
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
                                (0, i.jsx)(b.E, {
                                    variant: "text-md/normal",
                                    color: "text-default",
                                    children: eY.intl.string(tX.default.J3HKmx),
                                }),
                                n &&
                                    (0, i.jsx)(b.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: eY.intl.format(tX.default["9x2vbP"], {
                                            optOutHook: (e) =>
                                                (0, i.jsx)(tQ.A, {
                                                    onClick: () =>
                                                        tF.A.open(
                                                            t.id,
                                                            eq.BEX.MODERATION,
                                                            null,
                                                            eq.nd0.SAFETY_OVERVIEW,
                                                        ),
                                                    children: e,
                                                }),
                                        }),
                                    }),
                                (0, i.jsx)(b.E, {
                                    variant: "text-md/normal",
                                    color: "text-default",
                                    children: eY.intl.string(tX.default.KcCY25),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("img", {
                    src: "/assets/c42cecffc003efa2.svg",
                    alt: eY.intl.string(tX.default["UxV/3+"]),
                    width: tY.T5,
                    height: tY.T5,
                }),
            ],
        });
    };
function t2(e) {
    let t,
        { guild: n } = e,
        [l, a] = (0, tK.V)("report-to-mod-education-dismissed", !1),
        [o, d] = (0, tK.V)("report-to-mod-education-expanded", !1),
        { transitions: c, setVisible: u } = (() => {
            let [e, t] = s.useState(!0);
            return {
                transitions: (0, tA.p)(e, {
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
            (0, tA.p)(t, {
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
        : c((e, t) =>
              t
                  ? (0, i.jsxs)(tj.animated.div, {
                        style: e,
                        onClick: () => d(!o),
                        className: r()(eX.kL, tJ.kL, tZ.mainCard),
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
                                            (0, i.jsx)(b.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                children: eY.intl.string(eY.t.uvGmCx),
                                            }),
                                            (0, i.jsx)(b.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                children: "\u2014",
                                            }),
                                            (0, i.jsx)(j.D, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: eY.intl.string(tX.default["95qQRB"]),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(E.D, {
                                        onClick: () => a(!0),
                                        children: (0, i.jsx)(tC.P, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tJ.ut,
                                        }),
                                    }),
                                ],
                            }),
                            m((e, t) =>
                                t
                                    ? (0, i.jsxs)(tj.animated.div, {
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
    t7 = n(565645),
    t3 = n(21161),
    t8 = n(796774),
    t5 = n(209932),
    t9 = n(174459),
    t6 = n(102597),
    ne = n(904054),
    nt = n(584014),
    nn = n(536283);
n(980504);
var nl = n(59618);
function ni(e) {
    let { className: t, sound: n, playSound: l, isPlaying: a, text: o } = e,
        d = n?.emojiId != null || n?.emojiName != null,
        c = eY.intl.formatToPlainString(eY.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name }),
        u = s.useCallback(() => {
            t9.default.track(eq.HAw.MODERATOR_QUEUE_ACTION, { guild_id: eU.A.getGuildId(), action: "airhorn" }),
                null != l && l();
        }, [l]);
    return (0, i.jsxs)(E.D, {
        "aria-label": c,
        tag: "span",
        onClick: u,
        className: r()(nl.Ls, nl.oR, { [nl.he]: !0 === a }, t),
        children: [
            d && (0, i.jsx)(t7.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: nl.JS }),
            (0, i.jsx)("span", { children: ` ${o} ` }),
        ],
    });
}
function ns(e) {
    let { containerRef: t, text: n } = e,
        l = s.useRef(null),
        a = (0, x.bG)([t5.A], () => t5.A.getSoundsForGuild("0")?.find((e) => "airhorn" === e.name)),
        { createMultipleConfettiAt: r } = s.useContext(t3.x),
        o = (0, x.bG)([D.A], () => D.A.useReducedMotion),
        { isPlaying: d, playSound: c } = (function (e) {
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
        })(a);
    (0, L.Ay)(() => {
        (0, t8.E7)();
    });
    let u = s.useCallback(async () => {
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
    return void 0 === a ? null : (0, i.jsx)(ni, { sound: a, playSound: u, isPlaying: d, text: n });
}
function na() {
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
                    (0, i.jsx)(j.D, {
                        className: nl.wx,
                        variant: "heading-md/medium",
                        children: eY.intl.string(tX.default.h6QNky),
                    }),
                    (0, i.jsx)(b.E, {
                        className: nl.Qq,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: eY.intl.format(tX.default["8N4c58"], {
                            airhornHook: (t) => (0, i.jsx)(ns, { containerRef: e, text: t }),
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
    let { channelName: t, guildId: l, tagFilter: a, channel: r } = e,
        o = (0, ex.S4)(r),
        d = (0, tl.AI)(r),
        c = r.isMediaChannel(),
        u = s.useCallback(() => {
            (0, tf.zd)(),
                (0, tv.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("43051"), n.e("90052")]).then(n.bind(n, 653682));
                    return (t) => (0, i.jsx)(e, { ...t, guildId: l });
                });
        }, [l]),
        m = a.size > 0,
        h = d || o,
        g = !m && o && !c,
        x = s.useCallback(
            () =>
                g
                    ? u()
                    : d
                      ? void (r.isGameInvitesChannel() ? (0, F.d)(r) : nc._.dispatch(eq.jej.FOCUS_COMPOSER_TITLE))
                      : (0, eq.FXj)(),
            [u, g, d, r],
        );
    return (0, i.jsxs)("div", {
        className: ng.k,
        children: [
            (0, i.jsx)(j.D, {
                className: ng.w,
                variant: "heading-md/semibold",
                children: m
                    ? eY.intl.formatToPlainString(eY.t.lvPci0, { numTags: a.size })
                    : eY.intl.string(eY.t.PwTMG0),
            }),
            (0, i.jsx)(b.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: m
                    ? eY.intl.formatToPlainString(eY.t.AAeye1, { numTags: a.size })
                    : eY.intl.formatToPlainString(eY.t.YtsXFD, { channelName: t }),
            }),
            h &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(t_.h, { size: 16 }),
                        (0, i.jsx)(S.$, {
                            text: g ? eY.intl.string(eY.t.DgatTQ) : eY.intl.string(eY.t.wOKE8I),
                            variant: "secondary",
                            onClick: x,
                        }),
                    ],
                }),
        ],
    });
}
var nf = n(253913),
    nj = n(774418),
    np = n(658688);
let nv = { width: 28, height: 28 },
    nA = { width: 20, height: 20, borderRadius: 10 },
    nC = (e) => {
        (0, tf.bh)({ onboardingCTA: e });
    };
class nN {
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
let nb = (e) => {
        let { guild: t, roles: n } = e;
        return (0, i.jsx)("div", {
            className: np.Ei,
            "aria-label": eY.intl.formatToPlainString(eY.t.PCs0oo, { numRoles: n.length }),
            children: n.map((e) =>
                (0, i.jsx)(tR.b_, { role: e, canRemove: !1, onRemove: eq.FXj, guildId: t.id, className: np.Yq }, e.id),
            ),
        });
    },
    nE = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    nS = (e) => {
        let { handleHide: t } = e;
        return (0, i.jsx)(E.D, {
            onClick: t,
            className: np.b,
            "aria-label": eY.intl.string(eY.t.WAI6xu),
            children: (0, i.jsx)(tC.P, { size: "md", color: "currentColor", className: np.ut }),
        });
    },
    ny = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, i.jsx)(E.D, {
            onClick: n,
            className: np.b,
            "aria-label": t ? eY.intl.string(eY.t.iTcuma) : eY.intl.string(eY.t.dcl9MQ),
            children: t
                ? (0, i.jsx)(tN.g, { size: "xs", color: "currentColor", className: np.ut })
                : (0, i.jsx)(tb._, { size: "xs", color: "currentColor", className: np.ut }),
        });
    },
    nT = (e) => {
        let t,
            { hasAnyThread: l, hasActiveThreads: a, channel: o } = e,
            d = (0, O.Ay)(o),
            { onboardingExpanded: u } = (0, eA.kU)((e) => {
                let { onboardingExpanded: t } = e;
                return { onboardingExpanded: t };
            }, c.x),
            { tagFilter: m } = (0, eg.R)(o.id),
            h = (0, x.bG)([tG.A], () => tG.A.getGuild(o.getGuildId())),
            g = (0, ex.S4)(o),
            { transitions: f, setVisible: v } = (() => {
                let [e, t] = s.useState(!0);
                return {
                    transitions: (0, tA.p)(e, {
                        keys: (e) => (e ? "shown" : "hidden"),
                        config: nE,
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        unique: !0,
                    }),
                    setVisible: t,
                };
            })(),
            A = (0, tA.p)(u, {
                from: { maxHeight: 0 },
                enter: { maxHeight: 500 },
                leave: { maxHeight: 0 },
                config: { duration: 200 },
            }),
            C = s.useCallback((e) => {
                e.clickHandler?.();
            }, []),
            N = ((t = o.id), s.useCallback(() => (v(!1), tu.A.hideAdminOnboarding(t, !0)), [t, v])),
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
                    { guild: d, channel: c, hasAnyThread: u, handleHide: m } = e,
                    [h, g] = s.useState(!1),
                    f = (0, tO.l)(c.id),
                    j = (0, x.bG)([tc.A], () => tc.A.hasHidden(c.id)),
                    p =
                        ((l = d?.id),
                        (a = (0, x.bG)([no.A], () => (null != l ? no.A.getSortedRoles(l) : void 0))),
                        s.useMemo(() => {
                            let e,
                                t,
                                l,
                                s,
                                r,
                                o,
                                m,
                                h,
                                x,
                                f,
                                j = new nN(),
                                p = c?.isMediaChannel() === !0;
                            return (
                                null == d ||
                                    null == c ||
                                    p ||
                                    null == a ||
                                    j.addStep(
                                        ((e = (0, tM.A)(c)
                                            ? tp.kg(eq.xBc.VIEW_CHANNEL, eq.xBc.SEND_MESSAGES)
                                            : eq.xBc.SEND_MESSAGES),
                                        (l =
                                            (t =
                                                null != d
                                                    ? (0, nh.N)(a, c, e).filter(
                                                          (e) =>
                                                              c.permissionOverwrites.hasOwnProperty(e.id) ||
                                                              (0, nr.Oy)(e),
                                                      )
                                                    : []).length > 0),
                                        (s = t.some((e) => (0, nr.Oy)(e))),
                                        {
                                            name: eY.intl.string(eY.t["/Ax2gs"]),
                                            description: eY.intl.string(eY.t.gAIOfg),
                                            isDone: l && s,
                                            shouldWarn: l && !s,
                                            children: l ? (0, i.jsx)(nb, { guild: d, roles: t }) : null,
                                            clickHandler: () => {
                                                nC(nf._G.PERMISSIONS),
                                                    (0, tv.openModalLazy)(
                                                        async () => {
                                                            let { default: l } = await Promise.all([
                                                                n.e("10277"),
                                                                n.e("17110"),
                                                            ]).then(n.bind(n, 698325));
                                                            return (
                                                                g(!0),
                                                                (n) =>
                                                                    (0, i.jsx)(l, {
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
                                                            onCloseRequest: eq.FXj,
                                                            onCloseCallback: () => g(!1),
                                                        },
                                                    );
                                            },
                                        }),
                                    ),
                                p ||
                                    j.addStep(
                                        ((r = null != c.topic && c.topic.length > 0),
                                        {
                                            name: eY.intl.string(eY.t.UgJu1e),
                                            description: eY.intl.string(eY.t["3C6/G1"]),
                                            clickHandler: () => {
                                                nC(nf._G.GUIDELINES), tI.Ay.open(c.id, void 0, eq.b7d.TOPIC);
                                            },
                                            isDone: r,
                                        }),
                                    ),
                                c?.isGameInvitesChannel() &&
                                    j.addStep(
                                        ((o = null != c.availableTags && c.availableTags.length > 1),
                                        {
                                            name: eY.intl.string(nj.default["5a7Pjb"]),
                                            description: eY.intl.string(nj.default["MKZ+Ky"]),
                                            clickHandler: () => {
                                                nC(nf._G.RECOMMENDED_TAGS),
                                                    (0, tv.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([
                                                            n.e("30264"),
                                                            n.e("66089"),
                                                        ]).then(n.bind(n, 537808));
                                                        return (t) => (0, i.jsx)(e, { ...t, channelId: c.id });
                                                    });
                                            },
                                            isDone: o,
                                        }),
                                    ),
                                j.addStep(
                                    ((m = +!!c.isGameInvitesChannel()),
                                    (h = null != c.availableTags && c.availableTags.length > m),
                                    {
                                        name: eY.intl.string(eY.t.xiBFCi),
                                        description: eY.intl.string(eY.t.wCv4Oz),
                                        clickHandler: () => {
                                            nC(nf._G.TAGS),
                                                tI.Ay.open(c.id),
                                                (0, tv.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("2225"),
                                                        n.e("47326"),
                                                    ]).then(n.bind(n, 950989));
                                                    return (t) =>
                                                        (0, i.jsx)(e, { ...t, channelId: c.id, guildId: c.guild_id });
                                                });
                                        },
                                        isDone: h,
                                    }),
                                ),
                                j.addStep(
                                    ((x = null != c.defaultReactionEmoji),
                                    {
                                        name: eY.intl.string(eY.t.QlyC9s),
                                        description: eY.intl.string(eY.t["+50LJg"]),
                                        clickHandler: () => {
                                            nC(nf._G.DEFAULT_REACTION),
                                                (0, tv.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("35598"),
                                                        n.e("50720"),
                                                        n.e("94209"),
                                                        n.e("85157"),
                                                    ]).then(n.bind(n, 939940));
                                                    return (t) => (0, i.jsx)(e, { ...t, channel: c });
                                                });
                                        },
                                        isDone: x,
                                    }),
                                ),
                                j.addStep(
                                    ((f = d?.id),
                                    {
                                        name: eY.intl.string(eY.t["6A0O64"]),
                                        description: p
                                            ? eY.intl.string(eY.t["8hI5vr"])
                                            : eY.intl.format(eY.t.ysxcAw, {
                                                  onClick: (e) => {
                                                      null != f &&
                                                          (e.preventDefault(),
                                                          e.stopPropagation(),
                                                          (0, tf.zd)(),
                                                          (0, tv.openModalLazy)(async () => {
                                                              let { default: e } = await Promise.all([
                                                                  n.e("43051"),
                                                                  n.e("90052"),
                                                              ]).then(n.bind(n, 653682));
                                                              return (t) => (0, i.jsx)(e, { ...t, guildId: f });
                                                          }));
                                                  },
                                              }),
                                        clickHandler: () => {
                                            (nC(nf._G.CREATE_POST), c.isGameInvitesChannel())
                                                ? (0, F.d)(c)
                                                : nc._.dispatch(eq.jej.FOCUS_COMPOSER_TITLE);
                                        },
                                        isDone: u,
                                    }),
                                ),
                                j
                            );
                        }, [c, d, a, u, g])),
                    v = p.isAllDone(),
                    A =
                        f ||
                        j ||
                        ((t = c.id),
                        (r = nm.default.extractTimestamp(t)),
                        !Q()().isBefore(Q()(r).add(Q().duration(15, "days"))));
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
            M = !I && !y,
            k = (0, eA.ST)(),
            _ = o.isMediaChannel(),
            w = (e) => k.getState().setOnboardingExpanded(e);
        return ((0, L.Ay)(() => {
            R && M && N();
        }),
        ((e) => {
            let { isAllDone: t, isVisible: n, canManageChannel: l, guildId: i, channel: a } = e,
                r = (0, x.bG)([no.A], () => (null != i ? no.A.partitionVersion(i) : void 0)),
                o = s.useCallback(() => {
                    nc._.dispatch(eq.jej.REMEASURE_TARGET);
                }, []);
            s.useEffect(() => {
                o();
            }, [o, t, n, l, r, a.id, a.permissionOverwrites]);
        })({ isAllDone: R, isVisible: M, canManageChannel: g, guildId: h?.id, channel: o }),
        s.useEffect(() => {
            y || v(!I);
        }, [y, v, I]),
        (0, L.Ay)(() => {
            (l && M) || w(!0);
        }),
        null == h)
            ? null
            : (0, W.Fo)(o)
              ? a || 0 !== m.size
                  ? m.size > 0
                      ? null
                      : (0, i.jsx)(t2, { guild: h })
                  : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(t2, { guild: h }), (0, i.jsx)(na, {})] })
              : M && g
                ? _
                    ? l
                        ? null
                        : (0, i.jsx)(tW, { channel: o })
                    : (0, i.jsx)(i.Fragment, {
                          children: f((e, t) =>
                              t
                                  ? (0, i.jsx)(tj.animated.div, {
                                        style: e,
                                        className: np.kL,
                                        children: (0, i.jsxs)("div", {
                                            className: np.iE,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: np.U1,
                                                    children: (0, i.jsxs)(p.F, {
                                                        component: (0, i.jsx)(j.D, {
                                                            variant: "heading-md/semibold",
                                                            children: eY.intl.string(eY.t.LhlgY9),
                                                        }),
                                                        children: [
                                                            (0, i.jsx)(j.D, {
                                                                variant: "heading-md/medium",
                                                                className: np.wx,
                                                                children: eY.intl.format(eY.t["9L+8bz"], {
                                                                    numCompleted: S.completedSteps.toString(),
                                                                    numSteps: S.steps.length.toString(),
                                                                }),
                                                            }),
                                                            (0, i.jsxs)(b.E, {
                                                                variant: "text-xs/normal",
                                                                className: np.l2,
                                                                children: [
                                                                    (0, i.jsx)(tE.m, {
                                                                        size: "xxs",
                                                                        color: "currentColor",
                                                                        className: np.Kk,
                                                                    }),
                                                                    eY.intl.string(eY.t.znhX2R),
                                                                ],
                                                            }),
                                                            (0, i.jsx)(ny, { expanded: u, onClick: () => w(!u) }),
                                                            (0, i.jsx)(nS, { handleHide: N }),
                                                        ],
                                                    }),
                                                }),
                                                A((e, t) =>
                                                    t
                                                        ? (0, i.jsx)(tj.animated.div, {
                                                              style: e,
                                                              className: np.qI,
                                                              children: (0, i.jsx)("ol", {
                                                                  className: np.D4,
                                                                  children: S.getSteps().map((e) =>
                                                                      (0, i.jsxs)(
                                                                          E.D,
                                                                          {
                                                                              tag: "li",
                                                                              "aria-label": e.name,
                                                                              onClick: () => C(e),
                                                                              className: r()(np._h, {
                                                                                  [np.so]: e.isDone,
                                                                              }),
                                                                              children: [
                                                                                  e.shouldWarn
                                                                                      ? (0, i.jsx)(T.E, {
                                                                                            size: "custom",
                                                                                            width: 20,
                                                                                            height: 20,
                                                                                            color: el.A.colors
                                                                                                .ICON_FEEDBACK_CRITICAL,
                                                                                            className: np.FY,
                                                                                        })
                                                                                      : e.isDone
                                                                                        ? (0, i.jsx)(en.fk, {
                                                                                              color: el.A.colors
                                                                                                  .STATUS_POSITIVE_BACKGROUND
                                                                                                  .css,
                                                                                              icon: tS.A,
                                                                                              style: nA,
                                                                                              className: np.FY,
                                                                                          })
                                                                                        : (0, i.jsx)(en.fk, {
                                                                                              disableColor: !0,
                                                                                              icon: (0, ty.k)(nd.A),
                                                                                              style: nv,
                                                                                              className: r()(
                                                                                                  np.FY,
                                                                                                  np.so,
                                                                                              ),
                                                                                          }),
                                                                                  (0, i.jsxs)("div", {
                                                                                      className: np.PM,
                                                                                      children: [
                                                                                          (0, i.jsx)(b.E, {
                                                                                              variant: "text-md/medium",
                                                                                              color: e.isDone
                                                                                                  ? "text-default"
                                                                                                  : "text-strong",
                                                                                              className: np.u,
                                                                                              children: e.name,
                                                                                          }),
                                                                                          (0, i.jsx)(b.E, {
                                                                                              variant: "text-sm/normal",
                                                                                              color: "text-default",
                                                                                              className: np.XK,
                                                                                              children: e.description,
                                                                                          }),
                                                                                          e.children,
                                                                                      ],
                                                                                  }),
                                                                                  (0, i.jsx)(tT._, {
                                                                                      size: "custom",
                                                                                      color: "currentColor",
                                                                                      width: 12,
                                                                                      className: np.FY,
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
                  : (0, i.jsx)(nx, { channelName: d ?? "", guildId: o.guild_id, tagFilter: m, channel: o });
    };
var nI = n(717421),
    nR = n(622629),
    nM = n(22231),
    nk = n(46054),
    n_ = n(101136);
let nw = s.memo(function (e) {
    let { channel: t, onChange: l } = e,
        a = (0, eA.ST)(),
        { guidelinesOpen: o } = (0, eA.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, c.x),
        d = (0, ex.S4)(t),
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
        f = (0, nI.z)({ opacity: +!!o, maxHeight: 500 * !!o, config: { duration: 300 }, onRest: () => x(!o) });
    return null != t.topic && t.topic.length > 0
        ? (0, i.jsx)(tj.animated.div, {
              style: f,
              className: g ? n_.kK : void 0,
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
                                      (0, i.jsx)(nR.B, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                          height: 20,
                                      }),
                                      eY.intl.string(eY.t["4d4T4l"]),
                                      d &&
                                          (0, i.jsx)(E.D, {
                                              onClick: () => {
                                                  tI.Ay.open(t.id, void 0, eq.b7d.TOPIC);
                                              },
                                              tag: "span",
                                              className: n_.vk,
                                              children: (0, i.jsx)(nM.R, { size: "xs", color: "currentColor" }),
                                          }),
                                  ],
                              }),
                              (0, i.jsx)(E.D, {
                                  "aria-label": eY.intl.string(eY.t.cpT0Cq),
                                  className: n_.vk,
                                  onClick: () => {
                                      a.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, i.jsx)(tC.P, { size: "xs", color: "currentColor" }),
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
                                  className: r()(n_.I4, eJ.PT),
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
                                                      (0, tv.openModalLazy)(async () => {
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
                                                          eY.intl.string(eY.t.Vu7odK),
                                                          (0, i.jsx)(tb._, {
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
var nL = n(621466),
    nD = n(189812),
    nO = n(884496),
    nP = n(511274),
    nF = n(408278),
    nG = n(952270),
    nU = n(39623),
    nz = n(278416),
    nH = n(465532),
    nB = n(608299),
    nV = n(355622),
    nW = n(375499),
    n$ = n(151271),
    nq = n(698279),
    nK = n(266599);
let nY = s.memo(
    s.forwardRef(function (e, t) {
        let { disabled: n, type: l, className: a, onClick: o, channel: d } = e,
            [u, m, h] = (0, n$.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], c.x),
            g = s.useCallback(() => {
                (0, n$.ed)(l, d.id), o?.();
            }, [l, o, d.id]);
        return n
            ? null
            : (0, i.jsx)("div", {
                  className: r()(nq.VQ, nK.UD),
                  ref: t,
                  children: (0, i.jsx)(nW.A, {
                      className: r()(nK.Z8, a),
                      onClick: g,
                      active: (u === nq.kx.GIF || u === nq.kx.EMOJI || u === nq.kx.STICKER) && m === l && h === d.id,
                      tabIndex: 0,
                      focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
                  }),
              });
    }),
);
var nQ = n(138617),
    nX = n(625928),
    nJ = n(960850),
    nZ = n(702841),
    n0 = n(364522),
    n1 = n(215497),
    n2 = n(914905),
    n4 = n(750943),
    n7 = n(844222),
    n3 = n(780777),
    n8 = n(518960),
    n5 = n(811998);
let n9 = { scale: 0.95, opacity: 0 },
    n6 = { scale: 1, opacity: 1 },
    le = { scale: 1, opacity: 1 },
    lt = { tension: 2400, friction: 52 },
    ln = `.${n5.EJ}`,
    ll = { behavior: "smooth", block: "nearest", inline: "nearest" };
function li(e) {
    let { channelId: t, onClick: n, onClose: l, onMouseEnter: a, listItemProps: r } = e,
        o = s.useRef(null),
        d = (0, x.bG)([eP.A], () => eP.A.getChannel(t), [t]);
    return (
        K()(null != d, "Forum Channel is null"),
        (0, i.jsxs)(E.D, {
            ...r,
            "aria-label": eY.intl.string(eY.t.nzoF5p),
            className: n5.EJ,
            onMouseEnter: a,
            onClick: (e) => {
                0 === e.detail && o.current?.activateUploadDialogue(), (0, tf.ri)({ isMobile: !1 }), n?.();
            },
            children: [
                (0, i.jsx)(n3.A, {
                    className: n5.Fg,
                    ref: o,
                    onChange: (e) => {
                        l?.(),
                            (0, n8.R)(e.currentTarget.files, d, ts.C.FirstThreadMessage, {
                                requireConfirm: !0,
                                origin: "file_picker",
                            }),
                            (e.currentTarget.value = null);
                    },
                    multiple: d.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
                (0, i.jsx)(n4.X, { size: "custom", color: "currentColor", width: 28, height: 28, className: n5.T3 }),
            ],
        })
    );
}
function ls(e) {
    let { channelId: t, closePopout: n } = e,
        [l, a] = s.useState(!1),
        { reducedMotion: r } = s.useContext(n7.C),
        o = (0, nI.z)({ from: r.enabled ? n6 : n9, to: le, config: lt }, "animate-always"),
        d = (0, x.bG)([D.A], () => D.A.keyboardModeEnabled),
        c = (0, x.bG)([to.A], () => to.A.getUploads(t, nV.oU.CREATE_FORUM_POST.drafts.type)),
        g = (0, m.Ay)({
            id: "forum-composer-attachments-popout",
            isEnabled: d,
            orientation: h.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, i.jsx)(tj.animated.div, {
        className: n5.jC,
        onMouseLeave: () => {
            l || d || n();
        },
        onFocus: (e) => {
            e.target.scrollIntoView(ll);
        },
        style: o,
        children: (0, i.jsx)(n0.Ip, {
            orientation: "horizontal",
            className: n5.SW,
            paddingFix: !1,
            fade: !0,
            children: (0, i.jsx)(u.hD, {
                navigator: g,
                children: (0, i.jsx)(u.PR, {
                    children: (e) => {
                        let { ref: n, ...l } = e;
                        return (0, i.jsxs)("div", {
                            className: n5.p8,
                            ref: n,
                            ...l,
                            children: [
                                c.map((e) =>
                                    (0, i.jsx)(
                                        n2.A,
                                        {
                                            channelId: t,
                                            draftType: nV.oU.CREATE_FORUM_POST.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: d,
                                            hideFileName: !0,
                                            size: n1.L.SMALL,
                                        },
                                        e.id,
                                    ),
                                ),
                                (0, i.jsx)(la, { channelId: t, setFileInputOpen: a }),
                            ],
                        });
                    },
                }),
            }),
        }),
    });
}
function la(e) {
    let { channelId: t, setFileInputOpen: n } = e,
        l = { ...(0, u.rm)("upload-button"), tabIndex: 0 };
    return (0, i.jsx)(li, {
        channelId: t,
        onClick: () => {
            n(!0);
        },
        onClose: () => {
            n(!1),
                requestAnimationFrame(() => {
                    (0, nL.vq)(document.activeElement, HTMLElement) && document.activeElement.scrollIntoView(ll);
                });
        },
        listItemProps: l,
    });
}
function lr(e) {
    let { channelId: t } = e,
        [n, l] = s.useState(!1),
        a = s.useRef(null),
        r = (0, x.bG)([to.A], () => to.A.getUploads(t, nV.oU.CREATE_FORUM_POST.drafts.type)),
        o = r.length,
        d = o > 0;
    s.useEffect(() => {
        n && !d && l(!1);
    }, [n, d]),
        s.useEffect(() => {
            if (document.activeElement !== document.body && null != document.activeElement) return;
            l(o > 0);
            let e = requestAnimationFrame(() => {
                let e = a.current?.querySelector(ln);
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
    return (0, i.jsxs)("div", {
        className: n5.kL,
        ref: a,
        onBlur: (e) => {
            null == e.relatedTarget ||
                a.current?.contains(e.relatedTarget) ||
                (e.relatedTarget?.closest('[role="dialog"]') == null && u());
        },
        children: [
            d
                ? !n &&
                  (0, i.jsxs)(E.D, {
                      "aria-label": eY.intl.string(eY.t.nzoF5p),
                      className: n5.fY,
                      tabIndex: 0,
                      onClick: c,
                      onFocus: () => {
                          c(),
                              d &&
                                  requestAnimationFrame(() => {
                                      let e = a.current?.querySelector(ln);
                                      e?.focus();
                                  });
                      },
                      onMouseEnter: c,
                      children: [
                          (0, i.jsx)(n2.J, { upload: r[0], size: n1.L.SMALL }),
                          (0, i.jsx)("div", { className: n5.qS, children: o }),
                      ],
                  })
                : (0, i.jsx)(li, { onMouseEnter: c, channelId: t }),
            n && (0, i.jsx)(ls, { channelId: t, closePopout: u }),
        ],
    });
}
var lo = n(343151);
function ld(e) {
    let { parentChannel: t } = e,
        n = (0, nZ.yK)([to.A], () => {
            let e = to.A.getUploads(t.id, nV.oU.CREATE_FORUM_POST.drafts.type);
            return e?.filter((e) => !0 !== e.isThumbnail);
        });
    return (0, i.jsxs)("div", {
        className: lo.kL,
        children: [
            (0, i.jsx)(b.E, {
                variant: "text-md/semibold",
                color: "text-muted",
                children: eY.intl.string(eY.t.omKGKu),
            }),
            (0, i.jsx)(b.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eY.intl.string(eY.t["zUjLl+"]),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(n0.Ip, {
                    className: lo.mw,
                    orientation: "horizontal",
                    paddingFix: !1,
                    fade: !0,
                    children: (0, i.jsxs)("div", {
                        className: lo.p8,
                        children: [
                            n.map((e) =>
                                (0, i.jsx)(
                                    n2.A,
                                    {
                                        channelId: t.id,
                                        draftType: nV.oU.CREATE_FORUM_POST.drafts.type,
                                        upload: e,
                                        keyboardModeEnabled: !0,
                                        hideFileName: !0,
                                        size: n1.L.SMALL,
                                    },
                                    e.id,
                                ),
                            ),
                            (0, i.jsx)(li, { channelId: t.id }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
var lc = n(241326),
    lu = n(851023),
    lm = n(915089),
    lh = n(607470),
    lg = n(703007),
    lx = n(635377),
    lf = n.n(lx);
let lj = "absolute",
    lp = new (lf())({ max: 100 });
function lv(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: l } = e;
    return s.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: l } = e,
                    i = `${t}-${n}-${l}`,
                    s = lp.get(i);
                if (null != s) return s;
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
                                i = Math.ceil((t - l) / 2);
                            return [
                                { top: 0, left: 0, position: lj, width: n, height: t },
                                { top: 0, left: n + l, position: lj, width: n, height: i },
                                { top: i + l, left: n + l, position: lj, width: n, height: i },
                            ];
                        }
                        {
                            let n = Math.ceil((e - l) / 2),
                                i = Math.ceil((t - l) / 2);
                            return [
                                { top: 0, left: 0, position: lj, width: n, height: i },
                                { top: i + l, left: 0, position: lj, width: n, height: i },
                                { top: 0, left: n + l, position: lj, width: n, height: i },
                                { top: i + l, left: n + l, position: lj, width: n, height: i },
                            ];
                        }
                    })(n, l, t, 4);
                    return lp.set(i, e), e;
                }
            })({ numAttachments: t, containerWidth: n, containerHeight: l }),
        [t, n, l],
    );
}
function lA(e) {
    return e.map((t, n) => ({
        minWidth: 2 * e[n].width,
        minHeight: 2 * e[n].height,
        maxWidth: 2 * e[n].width,
        maxHeight: 2 * e[n].height,
    }));
}
n(323874), n(14289), n(35956);
var lC = n(304162),
    lN = n(735438),
    lb = n(724442),
    lE = n(998218),
    lS = n(36491),
    ly = n(222209);
let lT = [{ name: "Media Post Thumbnail", extensions: ["jpg", "jpeg", "png", "gif", "webp"] }],
    lI = (0, lm.Ld)();
function lR(e) {
    let { mediaAttachments: t, containerWidth: n, containerHeight: l } = e,
        s = lv({ numAttachments: t.length, containerWidth: n, containerHeight: l });
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsx)(
                "div",
                {
                    style: s[t],
                    children:
                        !0 === e.isVideo
                            ? (0, i.jsx)(lh.A, { src: e.src, className: ly.xn, "aria-hidden": !0 })
                            : (0, i.jsx)("img", { src: e.src, className: ly.xn, "aria-hidden": !0, alt: e?.alt ?? "" }),
                },
                e.src,
            ),
        ),
    });
}
let lM = (e) => {
    let { parentChannel: t } = e,
        { textAreaState: l } = (0, eA.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, c.x),
        a = (0, nZ.bG)([D.A], () => D.A.keyboardModeEnabled),
        o = (function (e, t) {
            let { mediaAttachments: n, hasThumbnail: l } = (function (e) {
                    let [t, n] = s.useState(null),
                        l = (0, nZ.yK)([to.A], () => {
                            let t = to.A.getUploads(e.id, nV.oU.CREATE_FORUM_POST.drafts.type),
                                n = t.find((e) => e.isThumbnail);
                            return null != n ? [n] : t.filter((e) => e.isVideo || e.isImage);
                        }),
                        i = s.useMemo(() => l.some((e) => e.isThumbnail), [l]);
                    return (
                        s.useEffect(() => {
                            let e = [];
                            return (
                                n(
                                    l.slice(0, lC.A8).flatMap((t) => {
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
                i = Math.max(lC.A8 - (n?.length ?? 0), 0),
                { embeds: a } = (function (e, t, n) {
                    let l = s.useRef(new Map()),
                        [, i] = s.useState(null),
                        [a, r] = s.useState(null),
                        o = s.useMemo(
                            () =>
                                lN.debounce((e, n) => {
                                    if (null == n || e || 0 === t) return;
                                    let i = n.match(lE.A.URL_REGEX);
                                    if (null == i || 0 === i.length) {
                                        (l.current = new Map()), r(null);
                                        return;
                                    }
                                    r(lN.uniq(i).slice(0, lC.A8));
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
                                        let t = await lS.L4(s);
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
                    let d = (0, lb.A)(l),
                        c = s.useMemo(() => {
                            let e = [];
                            return (
                                a?.forEach((t) => {
                                    let n = d.get(t);
                                    null != n && e.push(...n);
                                }),
                                e.length > 0 ? e : null
                            );
                        }, [a, d]);
                    return { embeds: e ? null : c };
                })(l, i, t),
                r = s.useMemo(
                    () =>
                        a?.flatMap((e) => {
                            let t = (0, lC.m3)(e);
                            return null == t ? [] : { id: t, src: t, spoiler: !1, alt: e.title };
                        }),
                    [a],
                ),
                o = [...(n ?? [])];
            return !l && i > 0 && o.push(...(r?.slice(0, i) ?? [])), o;
        })(t, l.textValue?.trim()),
        d = s.useMemo(() => o.find((e) => e.isThumbnail), [o]),
        u = null != o && o.length > 0,
        m = s.useMemo(() => {
            let e = o?.length > 1 ? 1.15 : 1;
            return { width: 153 * e, height: 86 * e };
        }, [o]),
        h = s.useCallback(
            (e) => {
                null != d && nB.A.remove(t.id, d.id, nV.oU.CREATE_FORUM_POST.drafts.type),
                    (0, n8.R)(e.currentTarget.files, t, nV.oU.CREATE_FORUM_POST.drafts.type, {
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
                    (0, tv.openModalLazy)(async () => {
                        let e = d.upload;
                        K()(null != e, "upload should not be null");
                        let { default: l } = await n.e("70698").then(n.bind(n, 427281));
                        return (n) =>
                            (0, i.jsx)(l, {
                                ...n,
                                upload: e,
                                channelId: t.id,
                                draftType: nV.oU.CREATE_FORUM_POST.drafts.type,
                                onSubmit: (n) => {
                                    let { name: l, description: i, spoiler: s } = n;
                                    nB.A.update(t.id, e.id, nV.oU.CREATE_FORUM_POST.drafts.type, {
                                        filename: l,
                                        description: i,
                                        spoiler: s,
                                    });
                                },
                                disableSpoiler: !0,
                            });
                    });
        },
        x = (0, i.jsx)(lg.A, {
            color: f.XD.CUSTOM,
            className: ly.zL,
            innerClassName: ly.Nr,
            onChange: h,
            multiple: !1,
            "aria-hidden": !0,
            filters: lT,
            "aria-describedby": lI,
            "aria-label": u ? eY.intl.string(eY.t.MxJI3f) : eY.intl.string(eY.t.Cbiofa),
            children: u
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(lR, { mediaAttachments: o, containerWidth: m.width, containerHeight: m.height }),
                          (0, i.jsxs)("div", {
                              className: r()(ly.On, { [ly.bP]: o?.length > 2 }),
                              children: [
                                  (0, i.jsx)(b.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: eY.intl.string(eY.t.MxJI3f),
                                  }),
                                  null == d &&
                                      (0, i.jsx)(nM.R, { size: "xs", color: "currentColor", className: ly.IZ }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(n4.X, {
                              size: "custom",
                              width: 39,
                              height: 39,
                              color: "currentColor",
                              className: ly.T3,
                          }),
                          (0, i.jsx)(b.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: eY.intl.string(eY.t.Cbiofa),
                          }),
                      ],
                  }),
        });
    return (0, i.jsx)("div", {
        className: ly.iT,
        style: m,
        children:
            null != d
                ? (0, i.jsx)(n1.A, {
                      actions: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(lu.A, {
                                  className: ly.XI,
                                  tooltip: eY.intl.string(eY.t.Y8ujqr),
                                  onClick: g,
                                  children: (0, i.jsx)(nM.R, { size: "xs", color: "currentColor" }),
                              }),
                              (0, i.jsx)(lu.A, {
                                  className: ly.XI,
                                  tooltip: eY.intl.string(eY.t.vN7REz),
                                  onClick: () => nB.A.remove(t.id, d.id, nV.oU.CREATE_FORUM_POST.drafts.type),
                                  dangerous: !0,
                                  children: (0, i.jsx)(lc.u, { size: "md", color: "currentColor" }),
                              }),
                          ],
                      }),
                      draftType: nV.oU.CREATE_FORUM_POST.drafts.type,
                      id: d.id,
                      channelId: t.id,
                      handleEditModal: g,
                      keyboardModeEnabled: a,
                      size: n1.L.SMALL,
                      className: ly.Xc,
                      children: x,
                  })
                : x,
    });
};
var lk = n(451909),
    l_ = n(375199),
    lw = n(141268),
    lL = n(931664),
    lD = n(631576),
    lO = n(474078),
    lP = n(55294),
    lF = n(383233),
    lG = n(101392),
    lU = n(806150),
    lz = n(753738);
function lH(e, t) {
    return { type: e, message: t ?? null };
}
function lB(e, t) {
    return lH(1, (0, lz.cw)(e, t?.id));
}
function lV(e, t) {
    return null == e ||
        (0 === e.type && null != t.content && t.content.trim().length > 0) ||
        (2 === e.type && null != t.tags && t.tags.length > 0)
        ? null
        : (e.message ?? null);
}
var lW = n(774812),
    l$ = n(91871),
    lq = n.n(l$),
    lK = n(103552),
    lY = n(914427),
    lQ = n(159273),
    lX = n(6858);
let lJ = (e) => {
    let { tag: t } = e,
        { id: n, name: l, emojiId: s, emojiName: a } = t,
        r = (0, x.bG)([lQ.Ay], () => (null != s ? lQ.Ay.getUsableCustomEmojiById(s) : null)),
        o = null != s || null != a;
    return (0, i.jsx)(
        lK.x4,
        {
            value: n,
            children: (0, i.jsx)(lK.x4.Label, {
                children: (0, i.jsxs)("div", {
                    className: lX.nM,
                    children: [
                        o
                            ? (0, i.jsx)(t7.A, {
                                  className: lX.__invalid_emoji,
                                  emojiId: s,
                                  emojiName: a,
                                  animated: !!r?.animated,
                              })
                            : (0, i.jsx)(nz.g, { size: "md", color: "currentColor", className: lX.__invalid_emoji }),
                        (0, i.jsx)(b.E, { variant: "text-md/semibold", color: "text-default", children: l }),
                    ],
                }),
            }),
        },
        n,
    );
};
function lZ(e) {
    let { parentChannel: t, appliedTags: n, maxTagsApplied: l, onSelectTag: s, onClose: a } = e,
        r = (0, ex.OT)(t);
    return (0, i.jsx)(lY.p, {
        value: n,
        onChange: (e) => {
            (!l || n.has(e)) && (s(e), a());
        },
        placeholder: eY.intl.string(eY.t.MbhGm7),
        "aria-label": eY.intl.string(eY.t.MbhGm7),
        children: (e) =>
            r.filter((t) => lq()(e.toLowerCase(), t.name.toLowerCase())).map((e) => (0, i.jsx)(lJ, { tag: e }, e.id)),
    });
}
var l0 = n(376310),
    l1 = n(291747),
    l2 = n(935090);
let l4 = (e) => {
    let { rateLimitPerUser: t, slowmodeCooldownGuess: n, isBypassSlowmode: l, leadingIcon: s = !1 } = e,
        a = (0, nJ.VI)(t, !0),
        o = (0, nJ.pS)(n, l),
        d = (0, i.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: o }),
        c = (0, i.jsx)(l1.x, { size: "xs", color: "currentColor", className: r()(l2.Eq, { [l2.iE]: s }) });
    return (0, i.jsx)(X.m, {
        text: a,
        children: (0, i.jsx)("div", {
            className: l2.ns,
            children: s ? (0, i.jsxs)(i.Fragment, { children: [c, d] }) : (0, i.jsxs)(i.Fragment, { children: [d, c] }),
        }),
    });
};
var l7 = n(770178),
    l3 = n(765548);
let l8 = () => {
    let [e, t] = s.useState(400),
        n = (0, l3.A)((e) => {
            t(e.target.clientWidth);
        });
    return { containerRef: (0, l7.w)(n), containerWidth: e };
};
var l5 = n(746080),
    l9 = n(955780);
let l6 = nV.oU.CREATE_FORUM_POST;
function ie(e) {
    var t, n;
    let l,
        a,
        { parentChannel: o, isSearchLoading: d, numResults: u, onChange: m, canCreatePost: h, inputRef: g } = e,
        f = !(0, $.V)(o) && h,
        {
            textAreaState: j,
            formOpen: p,
            previewing: v,
        } = (0, eA.kU)((e) => {
            let { textAreaState: t, formOpen: n, previewing: l } = e;
            return { textAreaState: t, formOpen: n, previewing: l };
        }, c.x),
        [A, C] = s.useState(null),
        N = s.useContext(td.EH),
        b = s.useCallback(() => {
            N.bumpDispatchPriority();
        }, [N]),
        E = (0, x.bG)([eG.A], () => eG.A.can(eq.xBc.ATTACH_FILES, o)),
        S = (0, x.yK)([to.A], () => to.A.getUploads(o.id, ts.C.FirstThreadMessage)),
        y = p && E && f,
        T = o?.isMediaChannel() === !0,
        I =
            ((t = o),
            (n = g),
            (l = (0, eA.ST)()),
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
                            (0, nL.vq)(n.current, HTMLTextAreaElement) && n.current?.focus();
                        }, 0),
                        t.isGameInvitesChannel())
                    )
                        return;
                    ((o && s.length > 0) ||
                        (r.textValue.trim().length > 0 && r.textValue.trim() !== a) ||
                        to.A.getUploads(t.id, ts.C.FirstThreadMessage).length > 0) &&
                        i();
                }
            }, [l, t, a, n])),
        R = (function (e) {
            let { formOpen: t } = (0, eA.kU)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, c.x),
                n = (0, eA.ST)(),
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
                            (l = lL.A.getStickerPreview(e.id, l6.drafts.type)?.map((e) => e.id)),
                        (null == i || 0 === i.length) && (i = to.A.getUploads(e.id, ts.C.FirstThreadMessage)),
                        null != i && i.length > 0 && e.isMediaChannel())
                    ) {
                        let e = i.findIndex((e) => !0 === e.isThumbnail);
                        if (e > -1) {
                            let t = i[e];
                            i.splice(e, 1), i.unshift(t);
                        }
                    }
                    let o = 0 === s.length,
                        d = (null == t || 0 === t.length) && (null == l || 0 === l.length) && 0 === i.length;
                    return { content: t, stickers: l, uploads: i, hasNameError: o, hasMessageError: d };
                },
                [e, n],
            );
            return s.useCallback(
                async (t, s, a) => {
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
                        f = lW.A.hasSeen(e.id);
                    if (!u)
                        return (
                            e.isGameInvitesChannel() ||
                                ((0, tf.jr)({ guildId: e.guild_id, channelId: e.id }),
                                f || n.getState().setGuidelinesOpen(!0),
                                g()),
                            { shouldClear: !1, shouldRefocus: !1 }
                        );
                    let { content: j, stickers: p, uploads: v, hasNameError: A, hasMessageError: C } = i(t, s, a);
                    if (
                        (r(A ? lH(0, eY.intl.string(eY.t["71wuR0"])) : null),
                        o(C ? lH(0, eY.intl.string(eY.t["w/BT3G"])) : null),
                        A || C)
                    )
                        return { shouldClear: !1, shouldRefocus: !0 };
                    try {
                        d(!0);
                        let { valid: t } = await (0, lU.i)({
                            content: j,
                            stickers: p,
                            uploads: v,
                            type: l6,
                            channel: e,
                        });
                        if (!t) return { shouldClear: !1, shouldRefocus: !0 };
                        let n = await l(j, p, v);
                        return (
                            (0, ti.JA)(n),
                            tu.A.resort(e.id),
                            (0, lD.x5)(e.id, l6.drafts.type),
                            c(),
                            m(!1),
                            h(!1),
                            lW.A.markAsSeen(e.id),
                            x(!1),
                            { shouldClear: !0, shouldRefocus: !1 }
                        );
                    } catch (t) {
                        return (
                            t.body?.code === eq.t02.AUTOMOD_TITLE_BLOCKED
                                ? r(lB(t.body, e))
                                : t.body?.code === eq.t02.AUTOMOD_MESSAGE_BLOCKED
                                  ? o(lB(t.body, e))
                                  : t.body?.code === eq.t02.INVALID_FORM_BODY &&
                                    t.body?.errors?.name != null &&
                                    r(lH(3, eY.intl.string(eY.t["71wuR0"]))),
                            { shouldClear: !1, shouldRefocus: !0 }
                        );
                    } finally {
                        d(!1);
                    }
                },
                [l, i, e, n],
            );
        })(o);
    return (
        s.useLayoutEffect(m, [p, j, S, m]),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("div", {
                "aria-label": f ? eY.intl.string(eY.t.dq7mAa) : eY.intl.string(eY.t["5h0QOP"]),
                className: r()(l9.kL, { [l9.yZ]: !p }),
                onClick: !p && f ? I : void 0,
                children: (0, i.jsxs)("form", {
                    onMouseDown: b,
                    onFocus: b,
                    onSubmit: (e) => {
                        e.preventDefault(), !f || o.isGameInvitesChannel() || R();
                    },
                    children: [
                        (0, i.jsxs)("div", {
                            className: l9.KJ,
                            children: [
                                (0, i.jsx)(it, { parentChannel: o, isSearchLoading: d, inputRef: g }),
                                (0, i.jsxs)("div", {
                                    className: v ? l9.vJ : l9.Zd,
                                    children: [
                                        (0, i.jsx)(il, {
                                            editorRef: A,
                                            parentChannel: o,
                                            isSearchLoading: d,
                                            numResults: u,
                                            inputRef: g,
                                            canCreatePost: f,
                                        }),
                                        p &&
                                            (0, i.jsx)(ia, {
                                                editorRef: A,
                                                setEditorRef: C,
                                                parentChannel: o,
                                                submit: R,
                                                disabled: !f,
                                            }),
                                        v && (0, i.jsx)(ir, {}),
                                    ],
                                }),
                                y && (T ? (0, i.jsx)(lM, { parentChannel: o }) : (0, i.jsx)(lr, { channelId: o.id })),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: l9.Zd,
                            children: [
                                y && T && (0, i.jsx)(ld, { parentChannel: o }),
                                p && (0, i.jsx)(iu, { className: l9.CN, parentChannel: o, canCreatePost: f }),
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
}
let it = s.memo(function (e) {
        let { parentChannel: t, isSearchLoading: n, inputRef: l } = e,
            {
                formOpen: a,
                name: r,
                textAreaState: o,
                hasClickedForm: d,
                submitting: u,
            } = (0, eA.kU)((e) => {
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
            }, c.x),
            m = (0, eA.ST)(),
            h = (0, ex.Hv)(t),
            g = s.useCallback(() => {
                m.getState().resetFormState(),
                    nH.A.clearDraft(t.id, ts.C.ThreadSettings),
                    nH.A.clearDraft(t.id, ts.C.FirstThreadMessage),
                    nB.A.clearAll(t.id, ts.C.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    l.current?.blur(),
                    (0, tf.py)({ guildId: t.guild_id, channelId: t.id });
            }, [m, t.id, t.guild_id, l]),
            x = s.useMemo(
                () =>
                    !a &&
                    (r.trim().length > 0 ||
                        (o.textValue.trim().length > 0 && o.textValue.trim() !== h) ||
                        to.A.getUploads(t.id, ts.C.FirstThreadMessage).length > 0) &&
                    d
                        ? (0, i.jsx)(nM.R, { size: "md", color: "currentColor", className: l9.rD })
                        : (0, i.jsx)(nO.B, { onClear: g, hasContent: a, isLoading: n || u, size: "md" }),
                [n, a, d, r, o.textValue, g, t.id, h, u],
            );
        return (0, i.jsx)("div", { className: l9.VB, children: x });
    }),
    il = s.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: l, editorRef: a, isSearchLoading: r, numResults: o } = e,
            {
                formOpen: d,
                nameError: u,
                name: m,
                textAreaState: h,
                previewing: g,
            } = (0, eA.kU)((e) => {
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
            }, c.x),
            f = (0, eA.ST)(),
            p = null != t.topic && 0 !== t.topic.length,
            v = lW.A.hasSeen(t.id),
            A = (0, ex.Hv)(t),
            C = (0, x.bG)([ez.default], () => ez.default.getCurrentUser());
        K()(null != C, "current user cannot be null"),
            (0, td.Vo)({
                event: eq.jej.FOCUS_COMPOSER_TITLE,
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
                            await (0, n8.R)([n], t, ts.C.FirstThreadMessage, { origin: "clipboard" }),
                            f.getState().setFormOpenFromUserAction();
                    }
                },
                [t, f],
            ),
            b = lV(u, { content: m });
        return (0, i.jsxs)("div", {
            className: l9.gn,
            onPaste: N,
            children: [
                d && g
                    ? (0, i.jsx)(j.D, { variant: "heading-md/semibold", className: l9.DD, children: m })
                    : (0, i.jsxs)(t$.B, {
                          gap: 4,
                          children: [
                              (0, i.jsx)(nD.d, {
                                  value: m,
                                  placeholder:
                                      !l || t.isGameInvitesChannel()
                                          ? eY.intl.string(eY.t["5h0QOP"])
                                          : d || (h.textValue.length > 0 && h.textValue.trim() !== A)
                                            ? eY.intl.string(eY.t.lU4dDS)
                                            : eY.intl.string(eY.t.CjmivA),
                                  rows: 1,
                                  maxLength: eq.Ign,
                                  onChange: (e) => {
                                      let n = e.target.value,
                                          l = (0, lO.A)(n, !1);
                                      f.getState().setName(l);
                                      let i = 0 === l.trim().length,
                                          s = 0 === h.textValue.trim().length,
                                          a = h.textValue.trim() === A;
                                      i && (s || a) && f.getState().setHasClickedForm(!1),
                                          d || tu.A.updateForumSearchQuery(t.id, l);
                                  },
                                  onFocus: () => {
                                      f.getState().setTitleFocused(!0), f.getState().setBodyFocused(!1);
                                  },
                                  onBlur: () => {
                                      f.getState().setTitleFocused(!1);
                                      let e = (0, lO.A)(m, !0);
                                      e !== m && (f.getState().setName(e), d || tu.A.updateForumSearchQuery(t.id, e));
                                  },
                                  onKeyDown: (e) => {
                                      "Enter" === e.key &&
                                          (e.preventDefault(),
                                          e.stopPropagation(),
                                          d && m.length > 0
                                              ? a?.focus()
                                              : l && e.shiftKey && !t.isGameInvitesChannel()
                                                ? ((0, tf.sB)({ guildId: t.guild_id, channelId: t.id }),
                                                  p && !v && f.getState().setGuidelinesOpen(!0),
                                                  f.getState().setFormOpenFromUserAction(),
                                                  m.trim().length > 0 && (f.getState().setBodyFocused(!0), a?.focus()))
                                                : d ||
                                                  !(m.length > 0) ||
                                                  null != o ||
                                                  r ||
                                                  tu.A.updateForumSearchQuery(t.id, m));
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
                                  className: l9.DD,
                                  ref: n,
                              }),
                              null != b ? (0, i.jsx)(nP.U, { error: b }) : null,
                          ],
                      }),
                d
                    ? null
                    : (0, i.jsxs)(t$.B, {
                          direction: "horizontal",
                          gap: 8,
                          justify: "end",
                          fullWidth: !1,
                          children: [
                              (0, i.jsx)(ii, { parentChannel: t }),
                              t.isGameInvitesChannel() ? null : (0, i.jsx)(im, { parentChannel: t, canCreatePost: l }),
                          ],
                      }),
            ],
        });
    });
function ii(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, eA.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, c.x),
        l = (0, eA.ST)();
    return null != t.topic && 0 !== t.topic.length
        ? (0, i.jsx)(X.m, {
              text: eY.intl.string(eY.t["4d4T4l"]),
              children: (0, i.jsx)(nF.K, {
                  size: "sm",
                  variant: "secondary",
                  onClick: () => {
                      l.getState().setGuidelinesOpen(!n);
                  },
                  icon: nR.B,
                  "aria-label": eY.intl.string(eY.t["4d4T4l"]),
              }),
          })
        : null;
}
let is = s.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            l = new lF.Ay({ channel_id: t.id, content: n }),
            { content: s } = (0, l_.A)(l, {
                hideSimpleEmbedContent: !0,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0,
            }),
            a = (0, lw.A)({ message: l, channel: t, compact: !1 }, s, !1);
        return (0, i.jsx)("div", { className: r()(l9.SL, l9.ly), children: a });
    }),
    ia = s.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: l = !1, editorRef: a, setEditorRef: o } = e,
            d = (0, x.bG)([ez.default], () => ez.default.getCurrentUser());
        K()(null != d, "current user cannot be null");
        let {
                messageError: u,
                previewing: m,
                textAreaState: h,
                bodyFocused: g,
                formOpen: f,
            } = (0, eA.kU)((e) => {
                let { messageError: t, textAreaState: n, previewing: l, bodyFocused: i, formOpen: s } = e;
                return { messageError: t, textAreaState: n, previewing: l, bodyFocused: i, formOpen: s };
            }, c.x),
            j = (0, eA.ST)();
        s.useEffect(() => () => (0, tf._4)({ guildId: t.guild_id, channelId: t.id }), [t.guild_id, t.id]);
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
        (0, td.Vo)({ event: eq.jej.TEXTAREA_FOCUS, handler: p }),
            (0, td.Vo)({ event: eq.jej.TEXTAREA_BLUR, handler: v });
        let N = lV(u, { content: h.textValue });
        return (0, i.jsx)("div", {
            className: l9.IP,
            children: (0, i.jsxs)("div", {
                className: l9.hQ,
                children: [
                    m
                        ? (0, i.jsx)(is, { parentChannel: t, textValue: h.textValue })
                        : (0, i.jsx)("div", {
                              onClick: p,
                              children: (0, i.jsx)(nQ.Ay, {
                                  type: l6,
                                  setEditorRef: o,
                                  channel: t,
                                  placeholder: eY.intl.string(eY.t["8IPnv1"]),
                                  textValue: h.textValue,
                                  richValue: h.richValue,
                                  focused: g,
                                  className: l9.gM,
                                  innerClassName: r()(l9.SL, { [l9.cr]: null != N }),
                                  onChange: A,
                                  onSubmit: C,
                                  promptToUpload: n8.R,
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
function ir() {
    return (0, i.jsx)("div", {
        className: l9.fv,
        children: (0, i.jsx)(b.E, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: eY.intl.string(eY.t["WE/cYo"]),
        }),
    });
}
function io(e) {
    let { textAreaState: t } = (0, eA.kU)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, c.x),
        n = (0, x.yK)([to.A], () => to.A.getUploads(e.id, ts.C.FirstThreadMessage));
    return s.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n]);
}
function id(e) {
    let t = io(e),
        { appliedTags: n, name: l } = (0, eA.kU)((e) => {
            let { appliedTags: t, name: n } = e;
            return { appliedTags: t, name: n };
        }, c.x);
    return s.useMemo(() => e.hasFlag(l5.lx.REQUIRE_TAG) && 0 === n.size && l.length > 0 && t, [n, l, e, t]);
}
function ic() {
    let { previewing: e } = (0, eA.kU)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, c.x),
        t = (0, eA.ST)(),
        n = s.useCallback(() => {
            t.getState().setPreviewing(!e), (0, tf.Q_)();
        }, [e, t]),
        l = e ? eY.intl.string(eY.t.ojM1xJ) : eY.intl.string(eY.t.SKNnqq);
    return (0, i.jsx)(X.m, {
        text: l,
        children: (0, i.jsx)(nF.K, {
            variant: "secondary",
            size: "sm",
            onClick: n,
            icon: e ? nG.G : nU.b,
            "aria-label": l,
        }),
    });
}
let iu = s.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: l } = e,
        { textAreaState: a, name: r } = (0, eA.kU)((e) => {
            let { textAreaState: t, name: n } = e;
            return { textAreaState: t, name: n };
        }, c.x),
        { rateLimitPerUser: o } = t,
        d = o > 0,
        u = (0, x.bG)([lG.A], () => lG.A.getSlowmodeCooldownGuess(t.id, lG.R.CreateThread)),
        m = (0, nJ._i)(t, lG.R.CreateThread),
        h = id(t),
        g = (0, eA.ST)(),
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
                (0, i.jsx)(ig, { parentChannel: t }),
                (0, i.jsx)("div", { className: l9.XJ }),
                (0, i.jsxs)("div", {
                    className: l9.gO,
                    children: [
                        (0, i.jsxs)("div", {
                            className: l9.ne,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: l9.Kk,
                                    children: [
                                        (0, i.jsx)(nX.A, { type: l6, textValue: a.textValue, className: l9.Dq }),
                                        d &&
                                            (0, i.jsx)(l4, {
                                                rateLimitPerUser: o,
                                                slowmodeCooldownGuess: u,
                                                isBypassSlowmode: m,
                                                leadingIcon: !0,
                                            }),
                                    ],
                                }),
                                (0, i.jsx)(ii, { parentChannel: t }),
                                j && (0, i.jsx)(ic, {}),
                                (0, i.jsx)(im, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: d && !m && u > 0,
                                }),
                            ],
                        }),
                        (0, i.jsx)(nY, { type: l6, className: l9.n1, onClick: f, channel: t }, "expression"),
                    ],
                }),
                h &&
                    (0, i.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-feedback-critical",
                        className: l9.ku,
                        children: eY.intl.string(eY.t.xPfNQi),
                    }),
            ],
        })
    );
});
function im(e) {
    let { parentChannel: t, canCreatePost: n, disabled: l, disableIfInvalid: s = !1 } = e,
        a = (0, $.V)(t),
        {
            submitting: r,
            name: o,
            formOpen: d,
        } = (0, eA.kU)((e) => {
            let { submitting: t, name: n, formOpen: l } = e;
            return { submitting: t, name: n, formOpen: l };
        }, c.x),
        u = io(t),
        m = !id(t) && u && o.trim().length > 0;
    return __OVERLAY__ || a
        ? null
        : (0, i.jsx)(S.$, {
              variant: "primary",
              type: "submit",
              size: "sm",
              loading: r,
              disabled: (s && !m) || l || !n,
              icon: es.o,
              text: d ? eY.intl.string(eY.t.pIuQI6) : eY.intl.string(eY.t.TyAuoT),
          });
}
function ih() {
    return Promise.resolve();
}
function ig(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: l,
            setPopoutOpen: a,
        } = (0, eA.kU)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: l } = e;
            return { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: l };
        }, c.x),
        o = n.size >= 5,
        d = (0, m.Ay)({
            id: `${t.id}-post-form-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: ih,
            scrollToEnd: ih,
            orientation: h.Gl.HORIZONTAL,
        }),
        { containerRef: g, containerWidth: x } = l8(),
        f = s.useRef(null),
        j = s.useRef(null),
        [p, v] = s.useState(!0),
        A = (0, ex.OT)(t),
        [C, N] = s.useState(0);
    return (s.useLayoutEffect(() => {
        let e = f.current,
            t = e?.children?.[0],
            n = null == e || null == t || t.clientHeight > e.clientHeight;
        if ((n !== p && v(n), n && null != g.current && null != t && null != t.children)) {
            let { left: e, top: n } = g.current.getBoundingClientRect(),
                l = 0;
            for (let i of t.children) {
                let { right: t, top: s, height: a } = i.getBoundingClientRect();
                if (s - n > a) break;
                t - e > l && (l = t - e);
            }
            N(l);
        }
    }, [A, p, g, x]),
    0 === A.length)
        ? null
        : (0, i.jsxs)("div", {
              className: l9.Pc,
              ref: g,
              children: [
                  (0, i.jsx)(nz.g, { size: "xs", color: "currentColor", className: l9.HZ }),
                  (0, i.jsx)("div", {
                      className: l9.kU,
                      ref: f,
                      children: (0, i.jsx)(u.hD, {
                          navigator: d,
                          children: (0, i.jsx)(u.PR, {
                              children: (e) => {
                                  let { ref: t, ...s } = e;
                                  return (0, i.jsx)("div", {
                                      className: l9.j5,
                                      ref: t,
                                      ...s,
                                      children: A.map((e) =>
                                          (0, i.jsx)(
                                              l0.A,
                                              {
                                                  ariaLabel: eY.intl.formatToPlainString(eY.t.FSZVIR, {
                                                      tagName: e.name,
                                                  }),
                                                  tag: e,
                                                  onClick: o && !n.has(e.id) ? void 0 : () => l(e.id),
                                                  disabled: !n.has(e.id) && n.size >= 5,
                                                  selected: n.has(e.id),
                                                  size: l0.A.Sizes.SMALL,
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
                              return (0, i.jsx)(lZ, {
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
                                  className: l9.Wk,
                                  style: { left: C },
                                  children: (0, i.jsx)(S.$, {
                                      ...e,
                                      size: "sm",
                                      variant: "secondary",
                                      icon: M.a,
                                      iconPosition: "end",
                                      text: eY.intl.string(eY.t.w6T0Yc),
                                  }),
                              }),
                      }),
                  (0, i.jsx)("div", {
                      className: r()(l9.Wk, l9.Dz),
                      children: (0, i.jsx)(S.$, {
                          size: "sm",
                          variant: "secondary",
                          icon: M.a,
                          iconPosition: "end",
                          text: eY.intl.string(eY.t.w6T0Yc),
                      }),
                  }),
              ],
          });
}
var ix = n(602137),
    ij = n(782134),
    ip = n(391242),
    iv = n(191023),
    iA = n(234914),
    iC = n(930125),
    iN = n(282108),
    ib = n(627363),
    iE = n(461771),
    iS = n(602034);
let iy = "data-grid-item-id",
    iT = "data-grid-section",
    iI = "data-grid-prev-section-boundary",
    iR = new Set([h.D$.UP, h.D$.DOWN, h.D$.LEFT, h.D$.RIGHT]);
function iM(e) {
    let { section: t, column: n, row: l } = e,
        i = `[${iT}="${t}"]`,
        s = `[aria-colindex="${n}"]`,
        a = `[aria-rowindex="${l}"]`;
    return `${i}${s}${a}`;
}
let ik = { id: "NO_LIST", onKeyDown() {}, ref: s.createRef() },
    i_ = s.createContext({ id: "NO_LIST", setFocus() {} }),
    iw = s.createContext(ik);
function iL(e) {
    let { id: t, section: n, row: l, column: i, boundaries: a } = e,
        [r, o] = s.useState(0 === l && 0 === i ? 0 : -1),
        { id: d, setFocus: c } = s.useContext(i_),
        u = s.useCallback(() => c(t), [t, c]);
    return (
        s.useLayoutEffect(
            () =>
                (0, iE.e)(d, (e) => {
                    o(e === t ? 0 : -1);
                }),
            [t, d],
        ),
        {
            [iy]: (0, iS.t$)(d, t),
            [iT]: n,
            [iI]: a[n],
            role: "gridcell",
            "aria-rowindex": l,
            "aria-colindex": i,
            tabIndex: r,
            onFocus: u,
        }
    );
}
function iD(e) {
    let { children: t, navigator: n } = e,
        {
            id: l,
            setFocus: a,
            containerProps: { onKeyDown: r, ref: o },
        } = n,
        d = s.useMemo(() => ({ id: l, setFocus: a }), [l, a]),
        c = s.useMemo(() => ({ onKeyDown: r, ref: o, id: l }), [r, o, l]);
    return (0, i.jsx)(iw.Provider, { value: c, children: (0, i.jsx)(i_.Provider, { value: d, children: t }) });
}
var iO = n(291812),
    iP = n(495544),
    iF = n(437992),
    iG = n(67416),
    iU = n(773746),
    iz = n(140651),
    iH = n(992828);
function iB(e) {
    let { channel: t, className: n } = e,
        l = t.ownerId,
        s = t.guild_id,
        a = (0, P.V6)(s, l),
        { game: o } = (0, P.Jo)(s),
        d = (0, iG.em)({ presenceActivity: a, channel: t, activityActionType: void 0 }),
        { primaryColor: c, secondaryColor: u } = (0, iz.A)(o?.getIconURL(128)),
        m = `linear-gradient(45deg, ${c}, ${u})`;
    if (null == a) return null;
    let h = a.details ?? a.name;
    return (0, i.jsxs)("div", {
        className: r()(n, iH.Nr),
        style: { background: m },
        children: [
            (0, i.jsx)(b.E, { variant: "text-sm/semibold", color: "always-white", className: iH.DD, children: h }),
            (0, i.jsxs)("div", {
                className: iH.yu,
                children: [
                    (0, i.jsx)("div", { className: iH.Hg, children: d }),
                    (0, i.jsx)(iU.V, { className: iH.$B, activity: a }),
                ],
            }),
        ],
    });
}
var iV = n(520718);
function iW(e) {
    let { message: t, channel: n, containerWidth: l } = e,
        s = i2({ message: t, channel: n, containerWidth: l - 32, hideTags: !0 }),
        { hasUnreads: a } = (0, ex.X5)(n),
        { content: r } = (0, ex.gk)({ firstMessage: t, formatInline: !1, noStyleAndInteraction: !0, hasUnreads: a });
    return null != s
        ? s
        : (0, i.jsx)("div", {
              className: iV.o9,
              children: (0, i.jsx)(iO.Ay, { message: t, content: r, className: iV.BK, compact: !1 }),
          });
}
function i$(e) {
    let {
            id: t,
            channel: n,
            goToThread: l,
            coords: a,
            gridCoords: o,
            gridSectionBoundaries: d,
            className: c,
            observePostVisibilityAnalytics: u,
        } = e,
        m = n.id,
        h = s.useRef(null),
        g = (0, x.bG)([eO.Ay], () => eO.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: f } = (0, ef.OA)(n),
        { user: j, author: p } = (0, ex.kn)(n),
        v = (0, O.Ay)(n),
        { messageCountText: A } = (0, ex.k6)(n),
        C = s.useRef(null),
        { handleLeftClick: N, handleRightClick: S } = (0, eb.A)({ facepileRef: C, goToThread: l, channel: n });
    s.useEffect(() => {
        u?.(h.current?.ref, m);
    }, [u, m]);
    let y = (0, ex.Mw)(n, ix.T.CREATION_DATE),
        { shouldRenderTagsRow: T } = (0, eC.BA)({ channel: n, isNew: !1 }),
        { onFocus: I, ...R } = iL({ id: t, row: o.row, column: o.column, section: o.section, boundaries: d }),
        M = p?.nick ?? j?.username ?? "",
        k = j?.getAvatarURL(n.guild_id, (0, ee.FT)(ee._3.SIZE_24)),
        _ = n.guild_id,
        w = (0, x.bG)([tG.A], () => (null == _ ? null : tG.A.getGuild(_)?.gameApplicationIds?.[0]), [_]),
        { data: L } = (0, ib.YY)(w),
        D = (0, x.bG)([iP.default], () => iP.default.getId()),
        P = j?.id != null && j.id === D;
    return (0, i.jsxs)(E.D, {
        ref: h,
        tag: "li",
        onClick: N,
        onFocus: I,
        onContextMenu: S,
        className: r()(iV.kL, c, { [iV.nT]: g }),
        "aria-label": eY.intl.formatToPlainString(eY.t.pgYN6c, { title: v ?? "", count: A }),
        style: { ...a },
        ...R,
        children: [
            (0, i.jsxs)("div", {
                className: iV.wx,
                children: [
                    (0, i.jsx)(Z.eu, { src: k, size: ee._3.SIZE_24, className: iV.my, "aria-label": M }),
                    (0, i.jsx)(b.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: iV.fh,
                        children: M,
                    }),
                    (0, i.jsx)(b.E, { variant: "text-xs/medium", color: "text-subtle", className: iV.vE, children: y }),
                ],
            }),
            (0, i.jsxs)(J.M, {
                className: iV.rf,
                children: [
                    null != f ? (0, i.jsx)(iW, { message: f, channel: n, containerWidth: a.width }) : null,
                    T ? (0, i.jsx)("div", { className: iV.GA, children: (0, i.jsx)(eC.Ay, { channel: n }) }) : null,
                    (0, i.jsxs)("div", {
                        className: iV.oO,
                        children: [
                            (0, i.jsx)(iB, { channel: n }),
                            P && null != L && (0, i.jsx)(iF.A, { application: L, size: "sm" }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(J.M, {
                className: iV.qr,
                children: (0, i.jsx)(i3, { channel: n, firstMessage: f, facepileRef: C }),
            }),
        ],
    });
}
var iq = n(994500),
    iK =
        (((l = {})[(l.THREE_BY_TWO = 2 / 3)] = "THREE_BY_TWO"),
        (l[(l.SIXTEEN_BY_NINE = 9 / 16)] = "SIXTEEN_BY_NINE"),
        l);
let iY = { columns: 1, columnWidth: 450 },
    iQ = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iK.THREE_BY_TWO,
            n = e - 2,
            l = Math.ceil(n * t);
        return [n, l];
    },
    iX = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iK.THREE_BY_TWO;
        return 60 + iQ(e - 24, t)[1] + 24 + 36;
    };
var iJ = n(313880),
    iZ = n(15175);
let i0 = s.memo(function (e) {
    let {
            id: t,
            threadId: n,
            goToThread: l,
            overrideMedia: s,
            className: a,
            coords: r,
            gridCoords: o,
            gridSectionBoundaries: d,
            observePostVisibilityAnalytics: c,
        } = e,
        u = (0, x.bG)([eP.A], () => eP.A.getChannel(n)),
        m = (0, P.YG)(u);
    return null == u
        ? null
        : m
          ? (0, i.jsx)(i$, {
                id: t,
                channel: u,
                goToThread: l,
                className: a,
                coords: r,
                gridCoords: o,
                observePostVisibilityAnalytics: c,
                gridSectionBoundaries: d,
            })
          : (0, i.jsx)(i1, {
                id: t,
                channel: u,
                goToThread: l,
                overrideMedia: s,
                className: a,
                coords: r,
                gridCoords: o,
                observePostVisibilityAnalytics: c,
                gridSectionBoundaries: d,
            });
});
function i1(e) {
    let {
            id: t,
            channel: n,
            goToThread: l,
            overrideMedia: a,
            className: o,
            coords: d,
            gridCoords: c,
            gridSectionBoundaries: u,
            observePostVisibilityAnalytics: m,
        } = e,
        h = n.id,
        g = s.useRef(null),
        f = (0, x.bG)([eO.Ay], () => eO.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: v, loaded: A } = (0, ef.OA)(n),
        C = (0, O.Ay)(n),
        { messageCountText: N } = (0, ex.k6)(n),
        { isNew: S, hasUnreads: y } = (0, ex.X5)(n),
        T = s.useRef(null),
        { handleLeftClick: I, handleRightClick: R } = (0, eb.A)({ facepileRef: T, goToThread: l, channel: n });
    s.useEffect(() => {
        m?.(g.current, h);
    }, [m, h]);
    let M = (0, ex.Mw)(n, ix.T.CREATION_DATE, nf.EG.POSTED_DURATION_AGO),
        k = (0, tY.hf)(n),
        { onFocus: _, ...w } = iL({ id: t, row: c.row, column: c.column, section: c.section, boundaries: u });
    return (0, i.jsxs)("li", {
        ref: g,
        onClick: I,
        onFocus: _,
        onContextMenu: R,
        className: r()(iZ.kL, o, { [iZ.nT]: f }),
        style: { ...d },
        children: [
            (0, i.jsx)(E.D, {
                onClick: I,
                focusProps: { ringTarget: g },
                onContextMenu: R,
                "aria-label": eY.intl.formatToPlainString(eY.t.pgYN6c, { title: C ?? "", count: N }),
                className: iZ.Kv,
                ...w,
            }),
            (0, i.jsxs)("div", {
                className: iZ.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: iZ.Y6,
                        children: [
                            (0, i.jsxs)("div", {
                                className: iZ.wO,
                                children: [
                                    (0, i.jsx)(iJ.A, { channel: n, message: v }),
                                    (0, i.jsx)(b.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        className: iZ.SD,
                                        children: M,
                                    }),
                                ],
                            }),
                            S
                                ? (0, i.jsx)(en.Lp, {
                                      className: iZ.Ad,
                                      color: el.A.unsafe_rawColors.BRAND_260.css,
                                      text: eY.intl.string(eY.t.y2b7CA),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(p.F, {
                        children: (0, i.jsx)(j.D, {
                            variant: "heading-md/extrabold",
                            className: iZ.DD,
                            color: y ? "text-strong" : "text-muted",
                            style: { width: `${d.width - 24}px` },
                            children: k,
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: iZ.PU,
                children: (0, i.jsx)(J.M, {
                    children: (0, i.jsx)(i4, {
                        channel: n,
                        firstMessage: v,
                        isFirstMessageLoaded: A,
                        overrideMedia: a,
                        coords: d,
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: iZ.qr,
                children: (0, i.jsx)(J.M, {
                    children: (0, i.jsx)(i3, { channel: n, firstMessage: v, facepileRef: T }),
                }),
            }),
        ],
    });
}
function i2(e) {
    let { message: t, channel: n, containerWidth: l, hideTags: s = !1 } = e,
        { isBlocked: a, isIgnored: r } = (0, x.cf)([iq.A], () => ({
            isBlocked: null != t && iq.A.isBlockedForMessage(t),
            isIgnored: null != t && iq.A.isIgnoredForMessage(t),
        }));
    return a
        ? (0, i.jsx)(st, { message: eY.intl.string(eY.t.Lkp2fB), containerWidth: l, channel: n, hideTags: s })
        : r
          ? (0, i.jsx)(st, { message: eY.intl.string(eY.t.yWK7ZM), containerWidth: l, channel: n, hideTags: s })
          : null;
}
function i4(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a } = e,
        r = i2({ message: n, channel: t, containerWidth: a.width });
    return null != r
        ? r
        : (0, i.jsx)(i7, { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a });
}
function i7(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, overrideMedia: s, coords: a } = e,
        r = (0, x.bG)([eP.A], () => eP.A.getChannel(t.parent_id)),
        { firstMedia: o } = (0, ex.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !1 }),
        { hasUnreads: d } = (0, ex.X5)(t),
        c = (0, x.bG)([eG.A], () => eG.A.can(eq.xBc.MANAGE_MESSAGES, t)),
        u = eD.kt.useSetting(),
        m = eD.gs.useSetting(),
        h = (0, eI.A)(m, c),
        g = (0, ej.no)(n, r, !1),
        f = t.isMediaPost(),
        [j, p] = iQ(a.width - 24, f ? iK.SIXTEEN_BY_NINE : iK.THREE_BY_TWO);
    return n?.blocked || null == (s ?? o)
        ? (0, i.jsx)(se, {
              channel: t,
              firstMessage: n,
              isFirstMessageLoaded: l,
              containerWidth: a.width,
              hasUnreads: d,
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(i9, {
                      mediaAttachments: g,
                      globalSpoilerRenderSetting: h,
                      containerWidth: j,
                      containerHeight: p,
                      canAutoPlay: u,
                      shouldMaintainAspectRatio: f,
                  }),
                  (0, i.jsx)("div", {
                      className: iZ.GA,
                      children: (0, i.jsx)(eC.Ay, { channel: t, tagsClassName: iZ.uU }),
                  }),
              ],
          });
}
function i3(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        s = (0, em.m)(t.id),
        a = l?.reactions != null && l.reactions.length > 0;
    return (0, i.jsxs)("div", {
        className: iZ.GD,
        children: [
            (0, i.jsxs)("div", {
                className: iZ.QW,
                children: [
                    (0, i.jsx)("div", {
                        className: iZ.mz,
                        children: (0, i.jsx)(tY.$k, { channel: t, iconSize: 16, showReadState: !0 }),
                    }),
                    s.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("span", { className: iZ.xE, children: "\u2022" }),
                                  (0, i.jsxs)("div", {
                                      className: iZ.IW,
                                      children: [
                                          (0, i.jsx)(tY.gL, { channel: t, userIds: s, facepileRef: n }),
                                          (0, i.jsx)("div", {
                                              className: iZ.r$,
                                              children: (0, i.jsx)(ei.n, { themed: !0, dotRadius: 2 }),
                                          }),
                                          (0, i.jsx)(er.Ay, { channel: t, className: iZ.mD, renderDots: !1 }),
                                      ],
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: iZ.QW,
                children: [
                    a || null == l ? null : (0, i.jsx)(tY.NA, { firstMessage: l, channel: t }),
                    null == l ? null : (0, i.jsx)(tY.cn, { firstMessage: l, channel: t }),
                ],
            }),
        ],
    });
}
let i8 = (e) => e.preventDefault(),
    i5 = s.memo(function (e) {
        return (0, i.jsx)(i.Fragment, {
            children: (0, ek.LL)({ ...e, analyticsSource: "ForumPostMediaPreviewImage" }),
        });
    }),
    i9 = s.memo(function (e) {
        let {
                mediaAttachments: t,
                globalSpoilerRenderSetting: n,
                containerWidth: l,
                containerHeight: a,
                canAutoPlay: o,
                shouldMaintainAspectRatio: d = !1,
            } = e,
            { containsVideo: c, containsGif: u } = s.useMemo(() => (0, ej.$2)(t), [t]),
            m = s.useMemo(() => t.slice(0, 4), [t]),
            h = lv({ numAttachments: m.length, containerWidth: l, containerHeight: a }),
            g = (function (e) {
                let { imageContainerStyles: t, containerWidth: n, containerHeight: l } = e,
                    i = s.useRef(lA(t)),
                    a = s.useRef(n),
                    r = s.useRef(l),
                    o = n > a.current + 100,
                    d = l > r.current + 100;
                return (o || d) && (i.current = lA(t)), i.current;
            })({ imageContainerStyles: h, containerWidth: l, containerHeight: a }),
            x = (0, iN.O8)(iC.v.GUILD),
            f = s.useMemo(
                () =>
                    m.map((e, t) => {
                        let [l, s] = (0, ey.K6)(e, !n, x),
                            a = (0, ey.rx)(s),
                            m = {
                                ...g[t],
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && l ? a : e.alt,
                                onClick: i8,
                                shouldRenderAccessory: !u && !c,
                            },
                            f = (0, eS.ge)(e.src) ? `${e.src}?format=png` : e.src,
                            j = o && !l ? e.src : f;
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: iZ.UV,
                                style: h[t],
                                children: [
                                    d
                                        ? (0, i.jsx)(iA.A, {
                                              ...m,
                                              src: j,
                                              backgroundSrc: f,
                                              aspectRatio: m.maxWidth / m.maxHeight,
                                              alt: m.alt ?? "",
                                              className: r()(iZ.EN, { [iZ.cd]: l }),
                                              imageChildClassName: iZ.Rp,
                                          })
                                        : e.src.startsWith("data:")
                                          ? (0, i.jsx)(ea._, {
                                                ...m,
                                                className: iZ.il,
                                                imageClassName: r()(iZ.LW, { [iZ.cd]: l }),
                                            })
                                          : (0, i.jsx)(i5, {
                                                ...m,
                                                autoPlay: o && !l,
                                                containerClassName: iZ.EK,
                                                imageClassName: r()(iZ.rp, { [iZ.cd]: l }),
                                                responsive: !0,
                                            }),
                                    l &&
                                        (0, i.jsx)("div", {
                                            className: iZ.X,
                                            children: (0, i.jsx)(ev.A, { obscureReason: s, iconClassname: iZ.yo }),
                                        }),
                                ],
                            },
                            e.src,
                        );
                    }),
                [o, u, c, n, h, g, m, d, x],
            );
        return (0, i.jsxs)("div", {
            className: iZ.pV,
            style: { width: l, height: a },
            children: [
                f,
                (u || c) &&
                    (0, i.jsxs)("div", {
                        className: iZ.vz,
                        children: [
                            c &&
                                (0, i.jsx)(ij.u, {
                                    color: "currentColor",
                                    size: "custom",
                                    width: 22,
                                    height: 22,
                                    className: iZ.cU,
                                }),
                            u &&
                                (0, i.jsx)(ip.O, {
                                    size: "custom",
                                    width: 29,
                                    height: 29,
                                    color: "currentColor",
                                    className: iZ.cU,
                                }),
                        ],
                    }),
                t.length > 4 &&
                    (0, i.jsx)(i6, {
                        text: (t.length - 4).toString(),
                        icon: iv.x,
                        pillClassName: iZ.v3,
                        iconClassName: iZ.In,
                        textClassName: iZ.EY,
                    }),
            ],
        });
    });
function i6(e) {
    let { text: t, icon: n, pillClassName: l, iconClassName: s, textClassName: a } = e;
    return (0, i.jsxs)("div", {
        className: l,
        children: [
            (0, i.jsx)(n, { className: s, color: "currentColor" }),
            (0, i.jsxs)(b.E, { variant: "text-xs/medium", className: a, children: ["+", t] }),
        ],
    });
}
function se(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, containerWidth: a, hasUnreads: o } = e,
        d = eD.hH.useSetting(),
        [c, u] = iQ(a - 24),
        { content: m } = (0, ex.gk)({ firstMessage: n, formatInline: !1, noStyleAndInteraction: !0 }),
        { shouldRenderTagsRow: h } = (0, eC.BA)({ channel: t, isNew: !1 }),
        g = s.useMemo(() => ({ width: c, height: u }), [c, u]),
        x = o ? iZ.kR : iZ.b8;
    return (0, i.jsxs)("div", {
        className: iZ.Cv,
        style: g,
        children: [
            (0, i.jsxs)("div", {
                className: iZ.Qs,
                children: [
                    l &&
                        null == n &&
                        (0, i.jsx)(b.E, {
                            variant: "text-sm/normal",
                            color: o ? "text-default" : "text-muted",
                            children: eY.intl.string(eY.t.mE3KJN),
                        }),
                    l && null != n && (0, i.jsx)(iO.Ay, { message: n, content: m, className: x, compact: d }),
                ],
            }),
            (0, i.jsx)("div", {
                className: r()(iZ.kh, { [iZ.ZH]: !h }),
                children: h ? (0, i.jsx)(eC.Ay, { channel: t, tagsClassName: iZ.uU }) : null,
            }),
        ],
    });
}
function st(e) {
    let { message: t, containerWidth: n, channel: l, hideTags: a = !1 } = e,
        [o, d] = iQ(n - 24),
        { shouldRenderTagsRow: c } = (0, eC.BA)({ channel: l, isNew: !1 }),
        u = s.useMemo(() => ({ width: o, height: d }), [o, d]);
    return (0, i.jsxs)("div", {
        className: iZ.Cv,
        style: u,
        children: [
            (0, i.jsx)("div", {
                className: iZ.Qs,
                children: (0, i.jsx)(b.E, {
                    className: iZ.Wv,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: t,
                }),
            }),
            (0, i.jsx)("div", {
                className: r()(iZ.kh, { [iZ.ZH]: !c }),
                children: c && !a ? (0, i.jsx)(eC.Ay, { channel: l, tagsClassName: iZ.uU }) : null,
            }),
        ],
    });
}
var sn = n(392421),
    sl = n(980707),
    si = n(477782),
    ss = n(901713);
function sa(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: l, layoutType: s, tagSetting: a } = (0, eg.R)(t.id),
        { showResolvedFlags: r, setShowResolvedFlags: o } = (0, V.T)(t.id),
        d = (0, eg.p)(),
        c = t.isMediaChannel(),
        u = (e) => {
            (0, tf.Cd)({ guildId: t.guild_id, channelId: t.id, sortOrder: e }), d.getState().setSortOrder(t.id, e), n();
        },
        m = (e) => {
            (0, tf.ad)({ guildId: t.guild_id, channelId: t.id, forumLayout: e }),
                d.getState().setLayoutType(t.id, e),
                n();
        },
        h = (e) => {
            d.getState().setTagSetting(t.id, e), n();
        },
        x = null != t.availableTags && t.availableTags.length > 0;
    return (0, i.jsx)("div", {
        className: ss.k,
        children: (0, i.jsxs)(sl.W, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": c ? eY.intl.string(eY.t["kQN/bi"]) : eY.intl.string(eY.t.DJzbkL),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, i.jsxs)(si.rX, {
                    label: eY.intl.string(eY.t.f8wNDl),
                    children: [
                        (0, i.jsx)(si.iD, {
                            id: "sort-by-recent-activity",
                            group: "sort-by",
                            label: eY.intl.string(eY.t.jOPmcI),
                            action: () => u(ix.T.LATEST_ACTIVITY),
                            checked: l === ix.T.LATEST_ACTIVITY,
                        }),
                        (0, i.jsx)(si.iD, {
                            id: "sort-by-date-posted",
                            group: "sort-by",
                            label: eY.intl.string(eY.t.UIltXd),
                            action: () => u(ix.T.CREATION_DATE),
                            checked: l === ix.T.CREATION_DATE,
                        }),
                    ],
                }),
                t.isModeratorReportChannel() &&
                    (0, i.jsx)(si.rX, {
                        label: eY.intl.string(tX.default.PsM2b4),
                        children: (0, i.jsx)(si.sL, {
                            id: "resolved-flags-none",
                            label: eY.intl.string(eY.t.XJuakA),
                            action: () => o(!r),
                            checked: r,
                        }),
                    }),
                t.isMediaChannel() || t.isModeratorReportChannel() || t.isGameInvitesChannel()
                    ? null
                    : (0, i.jsxs)(si.rX, {
                          label: eY.intl.string(eY.t.mFMDSq),
                          children: [
                              (0, i.jsx)(si.iD, {
                                  id: "view-as-list",
                                  group: "view-as",
                                  label: eY.intl.string(eY.t["NJFr+g"]),
                                  action: () => m(g.C.LIST),
                                  checked: s === g.C.LIST,
                              }),
                              (0, i.jsx)(si.iD, {
                                  id: "view-as-grid",
                                  group: "view-as",
                                  label: eY.intl.string(eY.t.wKeggb),
                                  action: () => m(g.C.GRID),
                                  checked: s === g.C.GRID,
                              }),
                          ],
                      }),
                x
                    ? (0, i.jsxs)(si.rX, {
                          label: eY.intl.string(eY.t.Paxaug),
                          children: [
                              (0, i.jsx)(si.iD, {
                                  id: "match-some",
                                  group: "tag-setting",
                                  label: eY.intl.string(eY.t.rQ0ctQ),
                                  action: () => h(sn.n.MATCH_SOME),
                                  checked: a === sn.n.MATCH_SOME,
                              }),
                              (0, i.jsx)(si.iD, {
                                  id: "match-all",
                                  group: "tag-setting",
                                  label: eY.intl.string(eY.t.FCXUu0),
                                  action: () => h(sn.n.MATCH_ALL),
                                  checked: a === sn.n.MATCH_ALL,
                              }),
                          ],
                      })
                    : null,
                (0, i.jsx)(si.rX, {
                    children: (0, i.jsx)(si.Dr, {
                        id: "reset-all",
                        label: eY.intl.string(eY.t["3b//lO"]),
                        action: () => {
                            u(t.getDefaultSortOrder()), m(t.getDefaultLayout()), h(t.getDefaultTagSetting());
                        },
                    }),
                }),
            ],
        }),
    });
}
var sr = n(305866),
    so = n(123292);
function sd() {
    return Promise.resolve();
}
function sc(e) {
    let { channel: t, closePopout: n, setPopoutRef: l } = e,
        a = (0, ex.OT)(t),
        { tagFilter: r } = (0, eg.R)(t.id),
        o = (0, eg.p)(),
        d = (0, x.bG)([D.A], () => D.A.keyboardModeEnabled),
        c = s.useCallback(
            (e) => {
                (0, tf.UA)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    tagId: e,
                    filterTagIds: Array.from(r),
                    added: !r.has(e),
                    location: {
                        page: eq.liQ.GUILD_CHANNEL,
                        section: eq.JJy.FORUM_CHANNEL_HEADER,
                        object: eq.ZSU.CHANNEL_TAG,
                    },
                }),
                    o.getState().toggleTagFilter(t.id, e);
            },
            [t, r, o],
        ),
        h = s.useCallback(() => {
            o.getState().setTagFilter(t.id, new Set()), d || n();
        }, [o, t.id, d, n]),
        g = (0, m.Ay)({
            id: `${t.id}-all-tags-dropdown-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: sd,
            scrollToEnd: sd,
        }),
        f = s.useRef(null);
    return (
        s.useEffect(() => {
            requestAnimationFrame(() => {
                if (null != f.current) {
                    let e = f.current.querySelector(`.${lX.Tc}`);
                    null != e && e.focus();
                }
            });
        }, []),
        (0, i.jsxs)(sr.l, {
            ref: (e) => {
                l?.(e);
            },
            "aria-label": eY.intl.string(eY.t.TdqRTh),
            className: lX.kL,
            children: [
                (0, i.jsx)("div", {
                    className: lX.wx,
                    children: (0, i.jsxs)("div", {
                        className: lX.LD,
                        children: [
                            (0, i.jsx)(j.D, {
                                color: "interactive-text-default",
                                variant: "heading-md/semibold",
                                className: lX.TK,
                                children: eY.intl.string(eY.t.HPu3kq),
                            }),
                            (0, i.jsx)("div", {
                                className: lX.d1,
                                children: (0, i.jsx)(b.E, {
                                    className: lX.lT,
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
                    navigator: g,
                    children: (0, i.jsx)(u.PR, {
                        children: (e) => {
                            let { ref: t, ...n } = e;
                            return (0, i.jsx)("div", {
                                ref: (e) => {
                                    (t.current = e), (f.current = e);
                                },
                                ...n,
                                className: lX.I8,
                                children: a.map((e) =>
                                    (0, i.jsx)(
                                        l0.A,
                                        { className: lX.Tc, tag: e, selected: r.has(e.id), onClick: () => c(e.id) },
                                        e.id,
                                    ),
                                ),
                            });
                        },
                    }),
                }),
                (0, i.jsx)("div", { className: lX.me }),
                (0, i.jsx)(so.Q, {
                    "aria-label": eY.intl.string(eY.t["98EPQP"]),
                    onClick: h,
                    text: eY.intl.string(eY.t["98EPQP"]),
                }),
            ],
        })
    );
}
var su = n(37411);
function sm(e) {
    let { channel: t, guild: n, sidebarState: l } = e;
    return (0, i.jsx)(eA.Cp, { channel: t, children: (0, i.jsx)(sv, { channel: t, guild: n, sidebarState: l }) }, t.id);
}
let sh = new (class {
    minWidth;
    maxWidth;
    gap;
    constructor({ minWidth: e, maxWidth: t, gap: n }) {
        K()(e < t, "minWidth needs to be smaller than maxWidth"),
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
function sg(e) {
    return `forum-grid-header-section-${e}`;
}
function sx(e) {
    let { itemRole: t, coords: n, section: l } = e;
    return (0, i.jsx)(
        "div",
        {
            className: r()(tZ.card, tZ.archivedDividerRow, tZ.columnsSpan),
            style: n,
            "data-item-role": t,
            children: (0, i.jsx)("div", {
                className: tZ.emptyMainCard,
                children: (0, i.jsx)(j.D, {
                    variant: "eyebrow",
                    className: tZ.archivedDivider,
                    id: sg(l),
                    children: eY.intl.string(eY.t["3+LO1w"]),
                }),
            }),
        },
        "section-divider",
    );
}
function sf(e) {
    let { section: t, coords: n, key: l, isShowingSearchResult: s, hasActiveThreads: a } = e;
    return () =>
        2 === t && !s && a
            ? (0, i.jsx)(
                  sx,
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
            editorAdditionRowHeight: a,
            listViewCardHeights: o,
            formOpen: d,
            name: f,
        } = (0, eA.kU)((e) => {
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
        }, c.x),
        {
            activeThreadIds: j,
            archivedThreadIds: b,
            searchResults: E,
            canLoadMore: S,
            loadMore: y,
            activeThreadsLoading: T,
            archivedThreadsLoading: I,
            loading: R,
            isSearchLoading: M,
            layoutType: k,
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: l, tagSetting: i } = (0, eg.R)(e.id),
                s = (0, ex.V3)({ channel: e, sortOrder: t, tagFilter: n, tagSetting: i, shouldAutomaticallyAck: !0 }),
                a = (0, x.bG)([tt.A, z.A], () => {
                    let t = tt.A.hasLoaded(e.guild_id),
                        n = z.A.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: r, canLoadMore: o, loadMore: d, loading: c } = (0, tn.Fr)(e, t, n, i),
                { searchResults: u, isSearchLoading: m } = (0, ex.cA)({ channelId: e.id });
            return (
                (0, ex.yz)(e, t, n, i),
                {
                    activeThreadIds: s,
                    archivedThreadIds: r,
                    searchResults: u,
                    canLoadMore: o,
                    loadMore: d,
                    loading: a || c || m,
                    archivedThreadsLoading: c,
                    activeThreadsLoading: a,
                    isSearchLoading: m,
                    layoutType: l,
                }
            );
        })(t),
        w = j.length > 0,
        O = w || b.length > 0;
    (0, P.yk)(t, j);
    let F = (0, H.A)(t),
        { tagFilter: G, tagSetting: U } = (0, eg.R)(t.id);
    (0, ex.o7)(t, G, U, d),
        (0, L.Ay)(() => {
            !d && f.length > 0 && tu.A.updateForumSearchQuery(t.id, f);
        });
    let $ = (0, ex.O3)(t),
        q = (0, ex.An)(t),
        K = s.useRef(null),
        { observePostVisibilityAnalytics: Y } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: l } = e;
            tx({ guildId: t, channelId: n });
            let i = s.useRef(null),
                a = s.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let l = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, tg.xx)(e, t, l) : (0, tg.O_)(e, t, l);
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
                            null == e ? (0, tg.O_)(n, t, Date.now()) : i.current?.observe(e);
                        },
                        [n],
                    ),
                }
            );
        })({ scrollerRef: K, channelId: t.id, guildId: t.guild_id }),
        Q = k === g.C.GRID,
        { searchQuery: X } = (0, ex.cA)({ channelId: t.id }),
        J = null != E && null != X && X.length > 0,
        Z = s.useRef(null),
        { containerRef: ee, containerWidth: et } = l8();
    s.useEffect(() => {
        if (null == Z.current && null != t.id) {
            let e = eO.Ay.getSidebarState(t.id);
            null != e && e.type === te.PE.VIEW_THREAD && (Z.current = e.channelId);
        }
    }, [t.id]);
    let { columns: en } = s.useMemo(() => (Q ? sh.getRenderOptions(et) : iY), [Q, et]),
        el = s.useMemo(() => (R ? Math.round((window.innerHeight - 200) / 118) : 0), [R]),
        { showResolvedFlags: ei } = (0, V.T)(t.id),
        es = t.isModeratorReportChannel(),
        ea = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iX(sh.getWidth(et))) * en;
            return T ? e : 0;
        }, [et, en, T]),
        er = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iX(sh.getWidth(et))) * en;
            return I ? e : 0;
        }, [et, en, I]),
        eo = s.useMemo(() => {
            let e = Math.ceil(window.innerHeight / iX(sh.getWidth(et))) * en;
            return M && J ? e : 0;
        }, [et, en, M, J]),
        ed = s.useMemo(() => {
            if (Q)
                if (!$ && J) return [1, 0];
                else if (!q) return [1, j.length + ea, 0];
                else if (J) return [1, E.length + eo, 0];
                else if (es && !ei) return [1, j.length + ea, 0];
                else return [1, j.length + ea, b.length + er];
            if (!$ && J) return [1, 1];
            if (!q) return [1, j.length, 1];
            if (J) return [1, E.length, 0, el];
            if (es && !ei) return [1, j.length, 0, el];
            else return [1, j.length, b.length, el];
        }, [Q, J, j.length, b.length, $, q, el, E, ea, er, eo, ei, es]),
        ec = s.useMemo(
            () =>
                !$ && J
                    ? [[], []]
                    : q
                      ? J
                          ? [[], E, [], []]
                          : es && !ei
                            ? [[], j, [], []]
                            : [[], j, b, []]
                      : [[], j, []],
            [J, $, q, E, j, b, ei, es],
        ),
        eu = s.useCallback(
            (e, n) => {
                (0, tf.Ml)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: { page: eq.liQ.GUILD_CHANNEL, section: eq.JJy.FORUM_CHANNEL_POST },
                }),
                    n ? (0, e6.N9)(e, { source: su.H9.BROWSER }) : ((Z.current = e.id), (0, ti.JA)(e));
            },
            [t.guild_id, t.id, Z],
        ),
        [em, eh] = s.useState(l + a - 24),
        ef = s.useCallback(
            (e, n, l) =>
                0 === e
                    ? (0, i.jsx)(
                          sS,
                          {
                              channel: t,
                              isEmpty: !w,
                              isSearchLoading: M,
                              numResults: E?.length,
                              coords: n,
                              onHeightChange: eh,
                              children:
                                  !R && (0, i.jsx)(nT, { channel: t, hasAnyThread: O, hasActiveThreads: w }, t.id),
                          },
                          "forum-channel-header",
                      )
                    : 2 !== e || q
                      ? 1 === e && J && !$
                          ? (0, i.jsx)(sC, { channel: t, coords: n }, "archive-or-search-result")
                          : l()
                      : (0, i.jsx)(sA, { channel: t, coords: n }, "archived-missing-reading-history-perm"),
            [J, q, E, $, t, w, M, R, O],
        ),
        ej = (0, x.bG)([tc.A], () => tc.A.hasHidden(t.id)),
        ep = { editorHeight: l, isGridLayout: Q },
        ev = s.useRef(ep);
    s.useEffect(() => {
        ev.current = ep;
    }),
        s.useEffect(() => {
            let { editorHeight: e, isGridLayout: t } = ev.current,
                n = t ? ey : K,
                l = n.current?.getScrollerState();
            null != l && !ej && l.scrollTop > e && n.current?.scrollTo({ to: 0 });
        }, [ej]);
    let {
            updateListScrollerRef: eC,
            renderListSection: eN,
            renderListItem: eb,
            getListSectionHeight: eE,
            getListItemHeight: eS,
        } = (function (e) {
            let {
                    listRef: t,
                    hasActiveThreads: n,
                    threadIdsBySection: l,
                    listViewCardHeights: a,
                    editorHeight: o,
                    editorAdditionRowHeight: d,
                    renderSectionOrItem: c,
                    goToThread: u,
                    observePostVisibilityAnalytics: m,
                    isShowingSearchResult: h,
                } = e,
                g = (0, x.bG)([tr.A], () => tr.A.getChannelId()),
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
                v = s.useCallback(
                    (e) =>
                        c(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, i.jsx)(
                                          "div",
                                          {
                                              "data-item-role": "item",
                                              className: r()(tZ.loadingCard, tZ[`loadingCard-${e.row % 3}`]),
                                          },
                                          `loading-${e.row}`,
                                      );
                            let t = l[e.section][e.row],
                                n = null != g && (0, W.iU)(g) ? eZ : tY.Ay;
                            return (0, i.jsx)(
                                "li",
                                {
                                    className: tZ.card,
                                    "data-item-role": "item",
                                    children: (0, i.jsx)(p.F, {
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
                    [c, l, g, u, m],
                ),
                A = s.useCallback(
                    (e, t) => {
                        if (0 === e) return o + d;
                        let n = a[l[e][t]];
                        return null == n ? 104 : n + 8;
                    },
                    [l, a, o, d],
                );
            return {
                updateListScrollerRef: f,
                renderListSection: j,
                renderListItem: v,
                getListSectionHeight: s.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: A,
            };
        })({
            listRef: K,
            hasActiveThreads: w,
            threadIdsBySection: ec,
            listViewCardHeights: o,
            editorHeight: l,
            editorAdditionRowHeight: a,
            renderSectionOrItem: ef,
            goToThread: eu,
            observePostVisibilityAnalytics: Y,
            isShowingSearchResult: J,
        }),
        ey = s.useRef(null),
        {
            updateMasonryListScrollerRef: eT,
            getItemKey: eI,
            renderGridSection: eR,
            renderGridItem: eM,
            getGridSectionHeight: ek,
            getSectionProps: e_,
            handleGridFocus: ew,
        } = (function (e) {
            let {
                    masonryListScrollerRef: t,
                    threadIdsBySection: n,
                    goToThread: l,
                    renderSectionOrItem: a,
                    hasActiveThreads: o,
                    isShowingSearchResult: d,
                    canSearchForumPosts: c,
                    canViewArchivedPosts: u,
                    observePostVisibilityAnalytics: m,
                    focusedThreadId: h,
                    headerHeight: g,
                } = e,
                x = s.useRef(null),
                f = s.useCallback(
                    (e) => {
                        (t.current = e), (x.current = e?.getScrollerNode());
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
                        a(e, t, sf({ section: e, coords: t, key: n, isShowingSearchResult: d, hasActiveThreads: o })),
                    [a, o, d],
                ),
                C = s.useCallback((e) => (0 === e ? {} : { role: "grid", "aria-labelledby": `#${sg(e)}` }), []);
            return {
                updateMasonryListScrollerRef: f,
                masonryListContainerRef: x,
                focusedThreadId: h,
                handleGridFocus: j,
                handleGridSelect: p,
                getItemKey: v,
                renderGridSection: A,
                renderGridItem: s.useCallback(
                    (e, t, s, a, o) => {
                        if (0 === e) return null;
                        let d = n[e][t];
                        return null != d
                            ? (0, i.jsx)(
                                  i0,
                                  {
                                      id: `${a}`,
                                      threadId: d,
                                      className: r()(tZ.card, tZ.mainCard),
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
                                        className: r()(tZ.loadingCard, tZ[`loadingCard-${t % 3}`]),
                                    },
                                    a,
                                );
                    },
                    [n, l, m],
                ),
                getSectionProps: C,
                getGridSectionHeight: s.useCallback(
                    (e) => (0 === e ? g - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && d && !c ? 40 : 0),
                    [g, d, c, o, u],
                ),
            };
        })({
            masonryListScrollerRef: ey,
            threadIdsBySection: ec,
            goToThread: eu,
            renderSectionOrItem: ef,
            hasActiveThreads: w,
            isShowingSearchResult: J,
            canSearchForumPosts: $,
            canViewArchivedPosts: q,
            observePostVisibilityAnalytics: Y,
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
                    null == eO.Ay.getSidebarState(r) && (a.current = null);
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
        }, [r, n, l, i, a, t]);
    })({
        masonryListScrollerRef: ey,
        containerWidth: et,
        isGridLayout: Q,
        threadIdsBySection: ec,
        parentId: t.id,
        focusedThreadId: Z,
    });
    let eL = s.useCallback(() => {
            if (J) return;
            let e = Q ? ey.current?.getScrollerState() : K.current?.getScrollerState();
            if (null == e) return;
            (0, tf.pO)({ guildId: t.guild_id, channelId: t.id });
            let n = e.scrollTop + e.offsetHeight;
            e.scrollHeight - n < (Q ? Math.max(200, iX(et)) : 200) && y();
        }, [J, Q, t.guild_id, t.id, et, y]),
        eD = (0, x.bG)([D.A], () => D.A.keyboardModeEnabled),
        eF = (0, eA.kU)((e) => e.titleFocused || e.bodyFocused, c.x),
        eG = (function (e) {
            let { id: t, isEnabled: n, setFocus: l } = e,
                i = s.useRef(null),
                a = s.useRef(!1),
                r = s.useRef(null),
                o = s.useRef(n);
            s.useLayoutEffect(() => {
                o.current = n;
            }, [n]);
            let d = s.useCallback((e) => (r.current ?? document).querySelector(e), []),
                c = s.useCallback(
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
                        let n = (0, iS.Mz)(e, iy),
                            l = (0, iS.HP)(e);
                        c(n, l), (0, iE.T)(t, l, !0);
                    },
                    [t, c],
                ),
                [g, x] = s.useState(!1),
                f = s.useRef(g);
            s.useLayoutEffect(() => {
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
                                e.removeEventListener("focusin", n),
                                    e.removeEventListener("focusout", l),
                                    e.removeEventListener("focus", s),
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
                                let e = i.current;
                                null !== e && null == d((0, iS.Mz)(e, iy)) && u((0, iS.Mz)(t, "data-grid-id"));
                            }));
                    }
                    function s() {
                        let e = r.current;
                        if (f.current || null == e) return;
                    }
                    function o() {
                        a.current = !0;
                    }
                }, [t, c, u, m, d]);
            let j = s.useCallback(
                    (e) => {
                        if (!o.current) return;
                        let t = i.current,
                            n = r.current;
                        if (null == t) return;
                        let l = (0, iS.Mz)(t, iy),
                            s = n?.querySelector(l);
                        if (null == s) return;
                        let a = parseInt(s.getAttribute("data-grid-section") ?? ""),
                            c = parseInt(s.getAttribute("aria-rowindex")),
                            u = parseInt(s.getAttribute("aria-colindex"));
                        switch ((iR.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                            case h.D$.RIGHT: {
                                let e = d(iM({ section: a, row: c, column: u + 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(iy);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.LEFT: {
                                let e = d(iM({ section: a, row: c, column: u - 1 }));
                                if (null != e) {
                                    let t = e.getAttribute(iy);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.DOWN: {
                                let e = d(iM({ section: a, row: c + 1, column: u }));
                                if ((null == e && (e = d(iM({ section: a + 1, row: 0, column: u }))), null != e)) {
                                    let t = e.getAttribute(iy);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.UP: {
                                let e;
                                if (0 === c) {
                                    let t = parseInt(s.getAttribute(iI));
                                    null == (e = d(iM({ section: a - 1, row: t, column: u }))) &&
                                        (e = d(iM({ section: a - 1, row: t - 1, column: u })));
                                } else e = d(iM({ section: a, row: c - 1, column: u }));
                                if (null != e) {
                                    let t = e.getAttribute(iy);
                                    null != t && m(t);
                                }
                                return;
                            }
                            case h.D$.SPACE:
                            case h.D$.ENTER: {
                                if (e.repeat) return;
                                let t = i.current;
                                if (null != t) {
                                    let n = d((0, iS.Mz)(t, iy)),
                                        l = n?.ownerDocument ?? document,
                                        i = n === l.activeElement;
                                    null != n && i && (e.preventDefault(), e.stopPropagation(), n?.click());
                                }
                            }
                        }
                    },
                    [d, m],
                ),
                p = s.useCallback(
                    (e) => {
                        i.current = null != e ? (0, iS.t$)(t, e) : null;
                    },
                    [t],
                );
            return s.useMemo(() => ({ id: t, containerProps: { onKeyDown: j, ref: r }, setFocus: p }), [t, j, p]);
        })({ id: "forum-grid-view", isEnabled: Q && eD && !eF, setFocus: ew }),
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
        })({ listRef: K, padding: 96, isEnabled: !Q && eD && !eF, channel: t }),
        ez = s.useCallback(
            (e, n, l) =>
                0 === e
                    ? 0
                    : t.isGameInvitesChannel()
                      ? 280
                      : iX(l, t.isMediaChannel() ? iK.SIXTEEN_BY_NINE : iK.THREE_BY_TWO),
            [t],
        ),
        { ref: eH, ...eB } = eG.containerProps,
        eV = eO.Ay.getSidebarState(t.id),
        eW = null != eV && (0, eO.JU)(eV),
        e$ = (0, x.bG)([eO.Ay], () => eO.Ay.getSection(t.id)) === eq.YvQ.MEMBERS;
    return (0, i.jsx)("div", {
        className: tZ.container,
        ref: ee,
        "data-member-list-open": e$,
        children: (0, i.jsx)(v.sk, {
            children: (e) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        d &&
                            (0, i.jsx)(_.A, {
                                channel: t,
                                draftType: ts.C.FirstThreadMessage,
                                className: tZ.uploadArea,
                                style: { right: eW && n?.isThreadSidebarFloating ? n.threadSidebarWidth : 0 },
                            }),
                        (0, i.jsx)(sN, { channel: t }),
                        (0, i.jsx)(A.A, { children: (0, i.jsx)(p.H, { children: eY.intl.string(eY.t.B2panI) }) }),
                        F
                            ? (0, i.jsx)("div", {
                                  className: tZ.optInNotice,
                                  children: (0, i.jsx)(B.A, { channel: t }),
                              })
                            : null,
                        Q
                            ? (0, i.jsx)(iD, {
                                  navigator: eG,
                                  children: (0, i.jsx)(
                                      C.f,
                                      {
                                          ref: (e) => {
                                              (eH.current = e?.getScrollerNode() ?? null), eT(e);
                                          },
                                          itemGutter: 16,
                                          padding: 24,
                                          className: tZ.grid,
                                          columns: en,
                                          sections: ed,
                                          getItemKey: eI,
                                          getSectionHeight: ek,
                                          getItemHeight: ez,
                                          renderSection: eR,
                                          renderItem: eM,
                                          getSectionProps: e_,
                                          onScroll: S ? eL : void 0,
                                          chunkSize: 350,
                                          ...eB,
                                          ...e,
                                      },
                                      k,
                                  ),
                              })
                            : (0, i.jsx)(u.hD, {
                                  navigator: eU,
                                  children: (0, i.jsx)(u.PR, {
                                      children: (t) => {
                                          let { ref: n, ...l } = t;
                                          return (0, i.jsx)(
                                              N.Ei,
                                              {
                                                  ref: eC(n),
                                                  className: tZ.list,
                                                  sections: ed,
                                                  sectionHeight: eE,
                                                  rowHeight: eS,
                                                  renderRow: eb,
                                                  renderSection: eN,
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
function sA(e) {
    let { channel: t, coords: n } = e,
        l = (0, O.Ay)(t);
    return (0, i.jsx)("div", {
        className: r()(tZ.missingReadHistoryPermission, tZ.columnsSpan),
        style: n,
        children: (0, i.jsx)(b.E, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eY.intl.format(eY.t.TycmzM, { channelName: l }),
        }),
    });
}
function sC(e) {
    let { channel: t, coords: n } = e,
        l = (0, O.Ay)(t);
    return (0, i.jsx)("div", {
        className: r()(tZ.missingReadHistoryPermission, tZ.columnsSpan),
        style: n,
        children: (0, i.jsx)(b.E, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eY.intl.format(eY.t.OWZJdS, { channelName: l }),
        }),
    });
}
function sN(e) {
    let { channel: t } = e,
        n = s.useCallback(() => {
            tu.A.resort(t.id);
        }, [t]),
        l = (0, x.bG)([tm.A], () => tm.A.getNewThreadCount());
    return 0 === l
        ? null
        : (0, i.jsx)(E.D, {
              className: tZ.newPostsButton,
              onClick: n,
              children: (0, i.jsx)(b.E, {
                  color: "text-brand",
                  variant: "text-md/medium",
                  children: eY.intl.format(eY.t.ue1qfM, { count: l }),
              }),
          });
}
function sb() {
    return Promise.resolve();
}
function sE(e) {
    let { parentChannel: t, canCreatePost: n } = e,
        l = s.useCallback(() => {
            (0, F.d)(t);
        }, [t]);
    return __OVERLAY__ || !n
        ? null
        : (0, i.jsx)(S.$, { variant: "primary", size: "md", text: eY.intl.string(nj.default.QwW8zd), onClick: l });
}
function sS(e) {
    let t,
        n,
        l,
        { channel: a, isEmpty: o, isSearchLoading: p, numResults: v, children: A, coords: C, onHeightChange: N } = e,
        {
            name: S,
            formOpen: k,
            titleFocused: _,
            hasClickedForm: L,
            textAreaState: O,
            onboardingExpanded: P,
            setEditorAdditionRowHeight: F,
        } = (0, eA.kU)((e) => {
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
        }, c.x),
        { tagFilter: z, layoutType: H } = (0, eg.R)(a.id),
        B = (0, eA.ST)(),
        V = (0, eg.p)(),
        q = (0, x.bG)([ta.A], () => ta.A.canChatInGuild(a.guild_id)),
        K = (0, tl.AI)(a),
        [Y, Q] = s.useState(K),
        [, X] = (0, G.c)(a.getGuildId() ?? void 0),
        J = (0, $.V)(a),
        Z = q && (K || (Y && X)) && !J;
    s.useEffect(() => {
        K && Q(!0);
    }, [K]);
    let { ref: ee, height: et } = (0, w.Ay)();
    s.useEffect(() => {
        null != et && N(et);
    }, [N, et]);
    let en = s.useCallback(() => {
        d()(() => {
            null != ee.current && B.getState().setEditorHeight(ee.current.offsetHeight);
        });
    }, [ee, B]);
    s.useLayoutEffect(en, [en, o, Z, P]), (0, td.Vo)({ event: eq.jej.REMEASURE_TARGET, handler: en });
    let el = (0, x.bG)([to.A], () => to.A.getUploads(a.id, ts.C.FirstThreadMessage)),
        ei = (0, ex.Hv)(a),
        es = s.useRef(null),
        ea = s.useRef(null),
        [er, eo] = s.useState(0),
        { width: ed } = (0, x.bG)([eH.A], () => eH.A.windowSize()),
        ec = es.current?.getBoundingClientRect()?.width,
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
    }, [a.availableTags, ed, ec, z]);
    let eh = S.length > 0 && !k && (p || null != v),
        ef =
            !__OVERLAY__ &&
            !L &&
            !k &&
            _ &&
            (0 === O.textValue.trim().length || O.textValue.trim() === ei) &&
            0 === el.length &&
            !J &&
            !a.isGameInvitesChannel();
    s.useLayoutEffect(() => {
        if (!(eh || ef)) return F(0);
        null != eu.current && F(eu.current.clientHeight);
    }, [F, eh, ef, eu]);
    let ej = (0, m.Ay)({
            id: `${a.id}-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: sb,
            scrollToEnd: sb,
            orientation: h.Gl.HORIZONTAL,
        }),
        { role: ep, onFocus: ev, ...eC } = (0, u.rm)("forum-channel-header"),
        eN = s.useRef(null),
        eb =
            ((t = s.useRef(!1)),
            (n = (0, x.bG)([D.A], () => D.A.keyboardModeEnabled)),
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
                ev(), e.target !== ee.current || eb.current || eN.current?.focus();
            },
            [ev, ee, eb],
        ),
        eS = s.useMemo(() => (J ? (0, W.Yj)(a.availableTags) : a.availableTags), [a.availableTags, J]);
    return (0, i.jsx)(
        "div",
        {
            className: r()(tZ.card, tZ.headerRow, tZ.columnsSpan),
            ref: ee,
            onFocus: eE,
            ...eC,
            style: { ...C, position: H === g.C.GRID ? "absolute" : "static", height: "auto" },
            children: (0, i.jsxs)(td.Ah, {
                children: [
                    null != a.guild_id
                        ? (0, i.jsx)(U.A, {
                              className: r()(tZ.newMemberBanner, { [tZ.gridViewBanner]: H === g.C.GRID }),
                              guildId: a.guild_id,
                              channel: a,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: r()(tZ.headerContainer, {
                            [tZ.gameInvitesHeaderContainer]: a.isGameInvitesChannel(),
                        }),
                        children: [
                            (0, i.jsxs)("div", {
                                className: tZ.mainCardContainer,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: r()(tZ.mainCard, tZ.header, {
                                            [tZ.headerWithMatchingPosts]: eh || ef,
                                        }),
                                        children: (0, i.jsx)(ie, {
                                            parentChannel: a,
                                            onChange: en,
                                            isSearchLoading: p,
                                            numResults: v,
                                            canCreatePost: Z,
                                            inputRef: eN,
                                        }),
                                    }),
                                    (eh || ef) &&
                                        (0, i.jsxs)("div", {
                                            className: tZ.matchingPostsRow,
                                            ref: eu,
                                            children: [
                                                eh &&
                                                    (0, i.jsxs)("div", {
                                                        className: tZ.matchingPosts,
                                                        children: [
                                                            (0, i.jsx)(j.D, {
                                                                variant: "text-xs/normal",
                                                                color: "text-default",
                                                                children: p
                                                                    ? eY.intl.string(eY.t["/9i3qq"])
                                                                    : 0 === v
                                                                      ? eY.intl.string(eY.t.DbgHxi)
                                                                      : eY.intl.formatToPlainString(eY.t["tBz/8b"], {
                                                                            numPosts: v ?? "",
                                                                            query: S,
                                                                        }),
                                                            }),
                                                            !p &&
                                                                (0, i.jsx)(E.D, {
                                                                    onClick: () => {
                                                                        (0, tf.hT)({
                                                                            guildId: a.guild_id,
                                                                            channelId: a.id,
                                                                        }),
                                                                            tu.A.clearForumSearch(a.id),
                                                                            B.getState().setName("");
                                                                    },
                                                                    children: (0, i.jsx)(b.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-brand",
                                                                        className: tZ.clear,
                                                                        children: eY.intl.string(eY.t.VkKicb),
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                (0, i.jsx)("div", { className: tZ.tagsSpacer }),
                                                ef
                                                    ? Z
                                                        ? (0, i.jsxs)("div", {
                                                              className: tZ.startPostHelp,
                                                              children: [
                                                                  (0, i.jsx)(y.e, {
                                                                      shortcut: "SHIFT",
                                                                      className: tZ.keyboardShortcut,
                                                                  }),
                                                                  (0, i.jsx)(b.E, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-subtle",
                                                                      children: "+",
                                                                  }),
                                                                  (0, i.jsx)(y.e, {
                                                                      shortcut: "ENTER",
                                                                      className: tZ.keyboardShortcut,
                                                                  }),
                                                                  (0, i.jsx)(b.E, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-subtle",
                                                                      children: eY.intl.string(eY.t.ZvJ0yh),
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
                                                                  (0, i.jsx)(b.E, {
                                                                      variant: "text-xs/normal",
                                                                      color: "text-subtle",
                                                                      children: eY.intl.string(eY.t.iyzwnD),
                                                                  }),
                                                              ],
                                                          })
                                                    : null,
                                            ],
                                        }),
                                ],
                            }),
                            a.isGameInvitesChannel() && (0, i.jsx)(sE, { parentChannel: a, canCreatePost: Z }),
                        ],
                    }),
                    (0, i.jsx)(nw, { channel: a, onChange: en }),
                    (0, i.jsxs)("div", {
                        className: tZ.tagsContainer,
                        ref: es,
                        children: [
                            (0, i.jsx)(sy, { channel: a }),
                            eS.length > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)("div", { className: tZ.divider }),
                                          (0, i.jsx)("div", {
                                              className: tZ.tagList,
                                              ref: ea,
                                              children: (0, i.jsx)(u.hD, {
                                                  navigator: ej,
                                                  children: (0, i.jsx)(u.PR, {
                                                      children: (e) => {
                                                          let { ref: t, ...n } = e;
                                                          return (0, i.jsx)("div", {
                                                              className: tZ.tagListInner,
                                                              ref: t,
                                                              ...n,
                                                              children: eS.map((e) =>
                                                                  (0, i.jsx)(
                                                                      l0.A,
                                                                      {
                                                                          tag: e,
                                                                          onClick: () => {
                                                                              var t;
                                                                              return (
                                                                                  (t = e.id),
                                                                                  void ((0, tf.UA)({
                                                                                      guildId: a.guild_id,
                                                                                      channelId: a.id,
                                                                                      tagId: t,
                                                                                      filterTagIds: Array.from(z),
                                                                                      added: !z.has(t),
                                                                                      location: {
                                                                                          page: eq.liQ.GUILD_CHANNEL,
                                                                                          section:
                                                                                              eq.JJy
                                                                                                  .FORUM_CHANNEL_HEADER,
                                                                                          object: eq.ZSU.CHANNEL_TAG,
                                                                                      },
                                                                                  }),
                                                                                  V.getState().toggleTagFilter(a.id, t))
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
                                                  return (0, i.jsx)(sc, {
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
                                                      className: r()(tZ.tagsButton, {
                                                          [tZ.tagsButtonWithCount]: z.size > 0,
                                                      }),
                                                      style: { left: er },
                                                      innerClassName: tZ.tagsButtonInner,
                                                      "aria-label":
                                                          z.size > 0
                                                              ? eY.intl.string(eY.t.IkpM1T)
                                                              : eY.intl.string(eY.t["9vKK/N"]),
                                                      children: [
                                                          z.size > 0
                                                              ? (0, i.jsx)("div", {
                                                                    className: tZ.countContainer,
                                                                    children: (0, i.jsx)(b.E, {
                                                                        className: tZ.countText,
                                                                        color: "none",
                                                                        variant: "text-xs/medium",
                                                                        children: z.size,
                                                                    }),
                                                                })
                                                              : eY.intl.string(eY.t.fZ8hzm),
                                                          n
                                                              ? (0, i.jsx)(R.t, {
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
                                              className: r()(tZ.tagsButton, tZ.tagsButtonPlaceholder),
                                              innerClassName: tZ.tagsButtonInner,
                                              "aria-label": eY.intl.string(eY.t.IkpM1T),
                                              children: [
                                                  z.size > 0
                                                      ? (0, i.jsx)("div", {
                                                            className: tZ.countContainer,
                                                            children: (0, i.jsx)(b.E, {
                                                                className: tZ.countText,
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
function sy(e) {
    let { channel: t } = e,
        n = t.isMediaChannel(),
        l = t.isGameInvitesChannel(),
        a = s.useRef(null);
    return (0, i.jsx)(I.Y, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(sa, { channel: t, closePopout: n });
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
                className: tZ.sortDropdown,
                innerClassName: tZ.sortDropdownInner,
                "aria-label": n ? eY.intl.string(eY.t.JxU0wr) : eY.intl.string(eY.t.xyYt8A),
                children: [
                    (0, i.jsx)(k.J, { size: "xs", color: "currentColor" }),
                    (0, i.jsx)(b.E, {
                        className: tZ.sortDropdownText,
                        variant: "text-sm/medium",
                        color: "interactive-text-default",
                        children: (0, i.jsx)("span", {
                            className: tZ.sortDropdownTextHighContrastForcedColor,
                            children: n || l ? eY.intl.string(eY.t.JxU0wr) : eY.intl.string(eY.t.xyYt8A),
                        }),
                    }),
                    s
                        ? (0, i.jsx)(R.t, { size: "custom", color: "currentColor", width: 20 })
                        : (0, i.jsx)(M.a, { size: "custom", color: "currentColor", width: 20 }),
                ],
            });
        },
    });
}

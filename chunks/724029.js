n.d(t, { ls: () => eB, z9: () => eF, w_: () => eO, Ay: () => eV, th: () => ez });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    u = n(936504),
    c = n(562708),
    d = n(837381),
    A = n(172218),
    m = n(612324),
    g = n(535185),
    N = n(148839),
    f = n(607399),
    p = n(17928),
    h = n(3026),
    I = n(990078),
    R = n(97808),
    _ = n(939249),
    E = n(821609),
    v = n(366605),
    T = n(952270),
    S = n(428678),
    C = n(661531),
    x = n(549254),
    M = n(912124);
function y(e) {
    let { as: t, muted: n = !1, selected: l = !1, className: s, ...a } = e,
        o = t ?? _.D;
    return (0, i.jsx)(o, { ...a, className: r()(M.bG, s, { [M.SU]: n, [M.wH]: l }) });
}
var D = n(778712),
    b = n(192308),
    j = n(789645),
    G = n(308528),
    w = n(442433),
    O = n(765671),
    U = n(960076),
    k = n(397244),
    L = n(714114),
    P = n(394871),
    B = n(709066),
    F = n(262295),
    z = n(620982),
    V = n(343328),
    W = n(963027),
    H = n(571694),
    Y = n(47167),
    K = n(691540),
    J = n(857250),
    Q = n(97483),
    X = n(493336),
    $ = n(976860),
    q = n(330001),
    Z = n(989349),
    ee = n.n(Z),
    et = n(74114),
    en = n(232835),
    ei = n(994500),
    el = n(58703),
    es = n(935208),
    er = n(746080),
    ea = n(652215),
    eo = n(381941),
    eu = n(375708),
    ec = n(449582),
    ed = n(351952),
    eA = n(88686),
    em = n(174755),
    eg = n(187322),
    eN = n(586893);
let ef = l.forwardRef(function (e, t) {
    let { className: n, focusProps: l, ...s } = e;
    return (0, i.jsx)(eg.vN, { ...l, children: (0, i.jsx)("li", { className: r()(n, eN.k), ...s, ref: t }) });
});
var ep = n(824994),
    eh = n(922301),
    eI = n(660184),
    eR = n(414808),
    e_ = n(302005),
    eE = n(954376),
    ev = n(534400),
    eT = n(854627),
    eS = n(616356),
    eC = n(290863),
    ex = n(568548),
    eM = n(741961),
    ey = n(543465),
    eD = n(287809),
    eb = n(19575),
    ej = n(330076);
let eG = eb.Ay.getEnableHardwareAcceleration() ? R.Js : R.eu,
    ew = { offset: { top: 2, bottom: 2, right: 4 } };
function eO(e) {
    let { nameplate: t, icon: n, forceShow: l = !1, reducedClickTarget: s = !1, visibleElementRef: a, ...o } = e,
        u = (0, ed.K)(t);
    return (0, i.jsx)(_.D, {
        className: r()(ej.b, { [ej.DQ]: null != t, [ej.by]: l, [ej.wY]: s }),
        style: u,
        ...o,
        focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: a,
            className: r()({ [ej.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: r()(ej.ut, { [ej.Uq]: null != t }),
            }),
        }),
    });
}
function eU(e) {
    let { onClick: t, channelName: n, showNameplate: l } = e;
    return (0, i.jsx)("div", {
        className: ej.KQ,
        children: (0, i.jsx)(I.m, {
            text: eu.intl.formatToPlainString(eu.t.m0zYbV, { username: n }),
            children: (0, i.jsx)(E.$, {
                size: "sm",
                variant: l ? "overlay-secondary" : "secondary",
                onClick: t,
                text: eu.intl.string(eu.t.pVlP58),
            }),
        }),
    });
}
function ek() {
    return (0, i.jsx)(v.t, { size: "xs", color: "currentColor", className: ej.wB });
}
function eL() {
    return (0, i.jsx)(T.G, { size: "xs", color: "currentColor", className: ej.wB });
}
function eP() {
    return (0, i.jsx)(S.K, { size: "xs", color: "currentColor", className: ej.wB });
}
function eB(e) {
    let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: s,
            hoverGradientStart: r,
            hoverGradientMiddle: a,
            hoverGradientEnd: o,
        } = e,
        u = l.useMemo(
            () =>
                null != r && null != a && null != o
                    ? {
                          Color_GradientCenter: r,
                          Color_InnerRing: a ?? C.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? a,
                          Color_OuterRing: o,
                          NitroVFX: !1,
                      }
                    : n
                      ? {
                            Color_GradientCenter: C.A.colors.NITRO_TAB_GRADIENT_CENTER,
                            Color_InnerRing: C.A.colors.NITRO_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: C.A.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !0,
                        }
                      : {
                            Color_GradientCenter: C.A.colors.STANDARD_TAB_GRADIENT_CENTER,
                            Color_InnerRing: C.A.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: C.A.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !1,
                        },
            [n, r, a, o],
        );
    return (0, i.jsx)(x.U, { eventTargetRef: t, className: ej.a1, dataBinding: { ...u, DimmerWidth: (s ?? 0) + 32 } });
}
function eF(e) {
    let {
            route: t,
            selected: n,
            icon: s,
            iconClassName: a,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: A,
            onClick: g,
            className: N,
            role: p,
            "aria-posinset": h,
            "aria-setsize": I,
            listItemRef: R,
            showHoverGradient: _ = !1,
            nitroHoverGradient: E = !1,
            hoverGradientStart: v,
            hoverGradientMiddle: T,
            hoverGradientEnd: S,
            ...C
        } = e,
        { width: x, ref: M } = (0, O.Ay)(),
        D = l.useRef(null),
        b = l.useRef(null),
        j = (0, m.A)(R, D);
    return (0, i.jsx)(ef, {
        className: r()(ej.Ix, { [ej.Ij]: f.Fr }, N),
        onClick: g,
        role: p,
        focusProps: { ...ew, focusTarget: b, ringTarget: D },
        "aria-posinset": h,
        "aria-setsize": I,
        ref: j,
        children: (0, i.jsxs)(y, {
            as: "div",
            selected: n,
            className: r()(o, ej.bG, ej.$J, { [ej.Q2]: n }),
            children: [
                _ &&
                    (0, i.jsx)(eB, {
                        eventTargetRef: D,
                        isNitro: E,
                        contentWidth: x,
                        hoverGradientStart: v,
                        hoverGradientMiddle: T,
                        hoverGradientEnd: S,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: A },
                    className: ej.nf,
                    innerRef: b,
                    ...C,
                    children: [
                        (0, i.jsx)(F.A, {
                            ref: _ ? M : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(s, {
                                size: "refresh_sm",
                                className: r()(ej.e_, a),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: ej.xx,
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
}
function ez(e) {
    let {
            channel: t,
            selected: s = !1,
            user: a,
            activities: f,
            applicationStream: I,
            voiceChannel: R,
            isTyping: _,
            status: E,
            isMobile: v,
            isVR: T,
            nameplate: S,
            ref: C,
            "aria-posinset": x,
            "aria-setsize": M,
        } = e,
        [O, L] = l.useState(!1),
        [Z, ec] = l.useState(!1),
        [ed, eg] = l.useState(!1),
        eN = l.useRef(null),
        [eS, eC] = l.useState(!1),
        eM = (0, A.K)(
            l.useCallback((e) => {
                eC(e);
            }, []),
        ),
        eD = l.useRef(null),
        eb = C ?? eD,
        eB = (0, m.A)(eb, eM),
        { showMenuItemPopover: eF, markMenuItemPopoverAsDismissed: ez } = (0, e_.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === s,
            isTargetInViewport: eS,
            channelType: t.type,
        }),
        {
            avatarSrc: eV,
            avatarDecorationSrc: eW,
            eventHandlers: eH,
        } = (0, eT.A)({ userId: a?.id, size: D._3.SIZE_32, animateOnHover: !(s || O || Z || ed) }),
        [eY, eK] = l.useState({ maskImage: "none" }),
        eJ = l.useRef(null),
        eQ = t.isMultiUserDM(),
        eX = t.isSystemDM(),
        e$ = !eQ && !eX && t.type === ea.rbe.DM,
        eq = e$ && a?.primaryGuild != null,
        eZ = (0, p.bG)([ey.Ay], () => ey.Ay.isChannelMuted(t.getGuildId(), t.id)),
        e0 = (0, p.bG)([ey.Ay], () => ey.Ay.isMessagesFavorite(t.id)),
        { ignored: e1, blocked: e2 } = (0, p.cf)([ei.A], () => ({
            ignored: ei.A.isIgnored(t.getRecipientId()),
            blocked: ei.A.isBlocked(t.getRecipientId()),
        })),
        e9 = e$ && e1,
        e3 = e$ && e2,
        e4 = (eZ || e9 || e3) && !(s || O),
        e8 = (0, p.bG)([ex.Ay], () => ex.Ay.getMentionCount(t.id) > 0),
        e6 = (0, Y.Ay)(t),
        e7 = l.useRef(null),
        e5 = null != S && (s || O || ed);
    function te() {
        L(!0);
    }
    function tt() {
        L(!1);
    }
    function tn() {
        ec(!0);
    }
    function ti() {
        ec(!1);
    }
    function tl(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null != e && (e.preventDefault(), e.stopPropagation()), G.A.closePrivateChannel(t.id, s, n);
    }
    function ts() {
        G.A.preload(ea.ME, t.id);
    }
    function tr(e) {
        e.stopPropagation();
    }
    function ta(e) {
        e.target === e.currentTarget && eN.current?.click();
    }
    let to = (e) => {
        let l =
            "contextmenu" === e.type
                ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        eg(!0),
            t.isMultiUserDM()
                ? (0, w.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("26132"),
                              n.e("46652"),
                              n.e("93190"),
                              n.e("91763"),
                              n.e("38730"),
                              n.e("18997"),
                              n.e("34971"),
                              n.e("14461"),
                              n.e("42339"),
                              n.e("21106"),
                              n.e("40175"),
                              n.e("36150"),
                              n.e("99011"),
                              n.e("12520"),
                              n.e("17244"),
                              n.e("46149"),
                              n.e("53416"),
                              n.e("60200"),
                          ]).then(n.bind(n, 4027));
                          return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: s });
                      },
                      { impressionName: l, noBlurEvent: !0, onClose: () => eg(!1) },
                  )
                : (0, w.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("71406"),
                              n.e("31463"),
                              n.e("41831"),
                              n.e("18078"),
                              n.e("88429"),
                              n.e("94881"),
                              n.e("26692"),
                              n.e("26132"),
                              n.e("46652"),
                              n.e("93103"),
                              n.e("93190"),
                              n.e("34552"),
                              n.e("91763"),
                              n.e("8757"),
                              n.e("71210"),
                              n.e("85968"),
                              n.e("38730"),
                              n.e("89673"),
                              n.e("68403"),
                              n.e("88342"),
                              n.e("29787"),
                              n.e("89421"),
                              n.e("98965"),
                              n.e("82073"),
                              n.e("97558"),
                              n.e("91994"),
                              n.e("54625"),
                              n.e("76665"),
                              n.e("35313"),
                              n.e("71133"),
                              n.e("76273"),
                              n.e("18997"),
                              n.e("36564"),
                              n.e("34971"),
                              n.e("52229"),
                              n.e("45996"),
                              n.e("792"),
                              n.e("92822"),
                              n.e("61268"),
                              n.e("23427"),
                              n.e("29422"),
                              n.e("38056"),
                              n.e("9291"),
                              n.e("56753"),
                              n.e("14461"),
                              n.e("7059"),
                              n.e("8829"),
                              n.e("72883"),
                              n.e("22261"),
                              n.e("49644"),
                              n.e("78195"),
                              n.e("42339"),
                              n.e("21106"),
                              n.e("40175"),
                              n.e("36150"),
                              n.e("42204"),
                              n.e("99011"),
                              n.e("42191"),
                              n.e("74021"),
                              n.e("13708"),
                              n.e("17244"),
                              n.e("98199"),
                              n.e("41175"),
                              n.e("24240"),
                              n.e("60816"),
                              n.e("21879"),
                              n.e("39778"),
                          ]).then(n.bind(n, 385913));
                          return (n) => (0, i.jsx)(e, { ...n, user: a, channel: t, channelSelected: s });
                      },
                      { impressionName: l, onClose: () => eg(!1) },
                  );
    };
    function tu(e) {
        e.preventDefault(), e.stopPropagation();
        let l = eu.intl.formatToPlainString(eu.t.hJ5Ap4, { name: e6 }),
            s = eu.intl.format(eu.t.SSIVOu, { name: e6 });
        t.isManaged() &&
            ((l = eu.intl.formatToPlainString(eu.t.hVGjEW, { name: e6 })),
            (s = eu.intl.format(eu.t.IK1Qvs, { name: e6 }))),
            (0, b.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("70588"), n.e("37803")]).then(n.bind(n, 148166));
                return (t) => (0, i.jsx)(e, { title: l, body: s, onSubmit: tl, ...t });
            });
    }
    let tc = (0, i.jsx)(eI.A, {
            userName: e6,
            displayNameStyles: a?.displayNameStyles,
            effectDisplayType: O || s || ed ? eh.G.ANIMATED : eh.G.PLAIN,
            loop: O,
            boldFontOpacity: 0.9,
        }),
        td = eq
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      tc,
                      (0, i.jsx)(ev.Ay, {
                          primaryGuild: a?.primaryGuild,
                          userId: a?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: r()(ej.fc, { [ej.Y_]: e4 }),
                      }),
                  ],
              })
            : tc,
        tA = l.useRef(null),
        tm = (0, ep.W)({ location: "PrivateChannel" }) && a?.displayNameStyles != null,
        { isIncomingCall: tg, isOngoingCall: tN } = (0, z.A)(t.id),
        tf = [
            (0, W.Ay)({ channel: t, unread: e8, isIncomingCall: tg, isOngoingCall: tN }),
            (0, W.r2)({ channel: t, muted: eZ, userStatus: E, isFavorite: e0 }),
        ]
            .filter(Boolean)
            .join(", "),
        tp = (0, p.bG)([ex.Ay], () => ex.Ay.lastMessageId(t.id)),
        { waveShouldShow: th, wavePressed: tI } = (function (e, t) {
            let n,
                i,
                s,
                r,
                a,
                o,
                u,
                c,
                d,
                A,
                [m, g] = l.useState(!1),
                N = l.useCallback(async () => {
                    if (!m) {
                        g(!0),
                            (0, q.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, $.pX)(ea.BVt.CHANNEL(ea.ME, e.id));
                        try {
                            await X.A.sendStickers(e.id, ["749054660769218631"], "", { location: eo.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok || 429 !== e.status || (0, K.P0)((0, J.o)(eu.intl.string(eu.t.Whhv4w), Q.Ck.FAILURE));
                        }
                        g(!1);
                    }
                }, [e.id, m]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (s = (0, p.bG)([ei.A], () => null != i && ei.A.isFriend(i))),
                    (r = (0, p.bG)([ei.A], () => null != i && ei.A.isIgnored(i))),
                    (a = (0, p.bG)([en.A], () => {
                        let t = en.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === ea.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(er.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, p.bG)([en.A], () => en.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = es.default.extractTimestamp(e.id)),
                    (d = (0, el.v0)(ee()(), ee()(c), 18144e5)),
                    (A = (0, et.l)(e.id)),
                    n && s && !r && (o || null == t || a) && !u && d && null == A),
                wavePressed: N,
            };
        })(t, tp),
        tR = (0, N.A)(() => {
            let e = eJ.current?.getBoundingClientRect() ?? null,
                t = tA.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void eK({ maskImage: "none" });
            let n = t.width - 16;
            eK({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        l.useLayoutEffect(tR, [O, s, tR]),
        (0, g.g)(eb, tR),
        (0, i.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...l } = e;
                return (0, i.jsxs)(ef, {
                    className: r()(ej.Ix, ej.dm),
                    role: n,
                    focusProps: { ...ew, focusTarget: eN, ringTarget: eb },
                    ref: eB,
                    onMouseEnter: te,
                    onMouseLeave: tt,
                    onMouseDown: ts,
                    onFocus: tn,
                    onBlur: ti,
                    onContextMenu: to,
                    "aria-setsize": M,
                    "aria-posinset": x,
                    children: [
                        e8 ? (0, i.jsx)("div", { className: r()(ej.dM, { [ej.SU]: e4 }) }) : null,
                        (0, i.jsxs)(y, {
                            className: r()(ej.bG, { [ej.Q2]: s || ed }),
                            as: "div",
                            onClick: ta,
                            muted: e4,
                            selected: s,
                            children: [
                                (0, i.jsx)(em.A, {
                                    nameplate: e5 ? S : void 0,
                                    selected: s,
                                    hovered: O,
                                    content: tA,
                                    placement: eA.u.CHANNEL,
                                }),
                                (0, i.jsx)("div", { className: ej.lU, ref: eJ, children: td }),
                                (0, i.jsx)(u.N_, {
                                    style: eY,
                                    innerRef: eN,
                                    to: ea.BVt.CHANNEL(ea.ME, t.id),
                                    className: ej.nf,
                                    "aria-label": tf,
                                    ...l,
                                    children: (0, i.jsx)(F.A, {
                                        ref: tA,
                                        avatar: (() => {
                                            let e = D._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, i.jsx)(eE.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: _,
                                                        status: E,
                                                    });
                                                else
                                                    return (0, i.jsx)(eG, {
                                                        ...eH,
                                                        src: (0, H.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: _ ? ea.clD.ONLINE : E,
                                                        isTyping: _,
                                                    });
                                            o()(
                                                null != a,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                a.isSystemUser() || (n = (0, U.A)(f) ? ea.clD.STREAMING : E),
                                                (0, i.jsx)(eG, {
                                                    ...eH,
                                                    size: D._3.SIZE_32,
                                                    src: eV,
                                                    avatarDecoration: eW,
                                                    status: n,
                                                    isMobile: v,
                                                    isVR: T,
                                                    isTyping: _,
                                                    "aria-label": a.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: e8 && !e4,
                                        muted: e4,
                                        subText: t.isSystemDM()
                                            ? (0, i.jsx)("div", {
                                                  className: ej.W$,
                                                  children: (0, V.A)(t.id)
                                                      ? eu.intl.string(eu.t.FL5T01)
                                                      : eu.intl.string(eu.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, i.jsx)("div", {
                                                    className: ej.W$,
                                                    children: eu.intl.format(eu.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, k.A)({
                                                      activities: f,
                                                      status: E,
                                                      applicationStream: I,
                                                      voiceChannel: R,
                                                  })
                                                ? (0, i.jsx)(P.A, {
                                                      user: a,
                                                      activities: f,
                                                      voiceChannel: R,
                                                      applicationStream: I,
                                                      animateEmoji: O || Z || ed,
                                                      textClassName: ej.XD,
                                                      iconClassName: e4 ? ej.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, i.jsx)(h.A, { className: r()(ej.uN, { [ej.e8]: tm }), children: td }),
                                        decorators: t.isSystemDM()
                                            ? (0, i.jsx)(B.A, {
                                                  className: ej.G$,
                                                  type: B.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: tm,
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: r()(ej._q, { [ej.EY]: e5 }),
                                    children: [
                                        e3
                                            ? (0, i.jsx)(eP, {})
                                            : e9
                                              ? (0, i.jsx)(eL, {})
                                              : e0
                                                ? (0, i.jsx)(ek, {})
                                                : null,
                                        th && null != e6
                                            ? (0, i.jsx)(eU, { channelName: e6, onClick: tI, showNameplate: e5 })
                                            : null,
                                        th
                                            ? null
                                            : (0, i.jsx)(eO, {
                                                  icon: j.P,
                                                  "aria-label": eQ
                                                      ? eu.intl.string(eu.t["26C4oi"])
                                                      : eu.intl.string(eu.t.jsvgc3),
                                                  onClick: eQ ? tu : tl,
                                                  onMouseDown: tr,
                                                  nameplate: S,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: e7,
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        eF && (0, i.jsx)(eR.A, { targetElementRef: eb, markMenuItemPopoverAsDismissed: ez }),
                    ],
                });
            },
        })
    );
}
let eV =
    21552 == n.j
        ? function (e) {
              let { channel: t, selected: n, ...l } = e,
                  s = (0, p.bG)([eD.default], () => eD.default.getUser(t.getRecipientId())),
                  r = s?.id,
                  a = (0, p.cf)([eC.A, eS.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = eC.A.getState().statuses;
                          t.recipients.some((e) => n[e] === ea.clD.ONLINE) && (e = ea.clD.ONLINE);
                      } else null != r && (e = eC.A.getStatus(r));
                      return {
                          status: e,
                          activities: null != r ? eC.A.getActivities(r) : null,
                          applicationStream: null != r ? eS.A.getAnyStreamForUser(r) : null,
                          isMobile: null != r && eC.A.isMobileOnline(r),
                          isVR: null != r && eC.A.isVROnline(r),
                      };
                  }, [t, r]),
                  { voiceChannel: o } = (0, L.Ay)({ userId: r }),
                  u = (0, ec.r)({ user: s }),
                  c = (0, p.bG)(
                      [eD.default, eM.A],
                      () =>
                          t.isMultiUserDM()
                              ? es.default
                                    .keys(eM.A.getTypingUsers(t.id))
                                    .some((e) => e !== eD.default.getCurrentUser()?.id)
                              : null != s && eM.A.isTyping(t.id, t.getRecipientId()),
                      [t, s],
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(ez, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: a.status === ea.clD.ONLINE ? ea.clD.ONLINE : void 0,
                        ...l,
                    })
                  : (0, i.jsx)(ez, {
                        channel: t,
                        selected: n,
                        user: s,
                        voiceChannel: o,
                        isTyping: c,
                        nameplate: u,
                        ...l,
                        ...a,
                    });
          }
        : null;

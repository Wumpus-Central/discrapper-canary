n.d(t, { ls: () => eF, z9: () => ez, w_: () => eU, Ay: () => eH, th: () => eV });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(284009),
    o = n.n(a);
if (88245 != n.j) var u = n(936504);
var c = n(562708);
if (88245 != n.j) var d = n(837381);
var f = n(172218),
    A = n(612324),
    m = n(535185),
    g = n(148839),
    N = n(607399),
    v = n(17928);
if (88245 != n.j) var p = n(3026);
var h = n(97808);
if (88245 != n.j) var I = n(939249);
if (88245 != n.j) var R = n(866665);
if (88245 != n.j) var E = n(821609);
if (88245 != n.j) var _ = n(366605);
if (88245 != n.j) var j = n(952270);
if (88245 != n.j) var T = n(428678);
var x = n(661531),
    S = n(549254);
if (88245 != n.j) var C = n(445529);
if (88245 != n.j) var y = n(778712);
if (88245 != n.j) var M = n(192308);
if (88245 != n.j) var D = n(834730);
if (88245 != n.j) var b = n(789645);
var G = n(308528),
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
    H = n(963027),
    W = n(571694),
    Y = n(47167);
if (88245 != n.j) var K = n(691540);
if (88245 != n.j) var X = n(857250);
if (88245 != n.j) var J = n(97483);
var Q = n(493336),
    $ = n(976860),
    q = n(330001),
    Z = n(989349),
    ee = n.n(Z),
    et = n(74114),
    en = n(232835),
    ei = n(994500),
    el = n(58703),
    er = n(935208),
    es = n(746080),
    ea = n(652215),
    eo = n(381941),
    eu = n(375708),
    ec = n(449582),
    ed = n(351952),
    ef = n(88686),
    eA = n(174755);
if (88245 != n.j) var em = n(187322);
var eg = n(586893);
let eN =
        88245 != n.j
            ? l.forwardRef(function (e, t) {
                  let { className: n, focusProps: l, ...r } = e;
                  return (0, i.jsx)(em.vN, {
                      ...l,
                      children: (0, i.jsx)("li", { className: s()(n, eg.k), ...r, ref: t }),
                  });
              })
            : null,
    ev = 88245 != n.j ? eN : null;
var ep = n(824994),
    eh = n(922301),
    eI = n(660184),
    eR = n(414808),
    eE = n(302005),
    e_ = n(954376),
    ej = n(534400),
    eT = n(854627),
    ex = n(616356),
    eS = n(290863),
    eC = n(568548),
    ey = n(741961),
    eM = n(543465),
    eD = n(287809),
    eb = n(19575),
    eG = n(330076);
let ew = eb.Ay.getEnableHardwareAcceleration() ? h.Js : h.eu,
    eO = 88245 != n.j ? { offset: { top: 2, bottom: 2, right: 4 } } : null;
function eU(e) {
    let { nameplate: t, icon: n, forceShow: l = !1, reducedClickTarget: r = !1, visibleElementRef: a, ...o } = e,
        u = (0, ed.K)(t);
    return (0, i.jsx)(I.D, {
        className: s()(eG.b, { [eG.DQ]: null != t, [eG.by]: l, [eG.wY]: r }),
        style: u,
        ...o,
        focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: a,
            className: s()({ [eG.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: s()(eG.ut, { [eG.Uq]: null != t }),
            }),
        }),
    });
}
function ek(e) {
    let { onClick: t, channelName: n, showNameplate: l } = e;
    return (0, i.jsx)("div", {
        className: eG.KQ,
        children: (0, i.jsx)(R.m, {
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
function eL() {
    return (0, i.jsx)(_.t, { size: "xs", color: "currentColor", className: eG.wB });
}
function eP() {
    return (0, i.jsx)(j.G, { size: "xs", color: "currentColor", className: eG.wB });
}
function eB() {
    return (0, i.jsx)(T.K, { size: "xs", color: "currentColor", className: eG.wB });
}
function eF(e) {
    let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: r,
            hoverGradientStart: s,
            hoverGradientMiddle: a,
            hoverGradientEnd: o,
        } = e,
        u = l.useMemo(
            () =>
                null != s && null != a && null != o
                    ? {
                          Color_GradientCenter: s,
                          Color_InnerRing: a ?? x.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? a,
                          Color_OuterRing: o,
                          NitroVFX: !1,
                      }
                    : n
                      ? {
                            Color_GradientCenter: x.A.colors.NITRO_TAB_GRADIENT_CENTER,
                            Color_InnerRing: x.A.colors.NITRO_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: x.A.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !0,
                        }
                      : {
                            Color_GradientCenter: x.A.colors.STANDARD_TAB_GRADIENT_CENTER,
                            Color_InnerRing: x.A.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: x.A.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !1,
                        },
            [n, s, a, o],
        );
    return (0, i.jsx)(S.U, { eventTargetRef: t, className: eG.a1, dataBinding: { ...u, DimmerWidth: (r ?? 0) + 32 } });
}
function ez(e) {
    let {
            route: t,
            selected: n,
            icon: r,
            iconClassName: a,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: f,
            onClick: m,
            className: g,
            role: v,
            "aria-posinset": p,
            "aria-setsize": h,
            listItemRef: I,
            showHoverGradient: R = !1,
            nitroHoverGradient: E = !1,
            hoverGradientStart: _,
            hoverGradientMiddle: j,
            hoverGradientEnd: T,
            ...x
        } = e,
        { width: S, ref: y } = (0, O.Ay)(),
        M = l.useRef(null),
        D = l.useRef(null),
        b = (0, A.A)(I, M);
    return (0, i.jsx)(ev, {
        className: s()(eG.Ix, { [eG.Ij]: N.Fr }, g),
        onClick: m,
        role: v,
        focusProps: { ...eO, focusTarget: D, ringTarget: M },
        "aria-posinset": p,
        "aria-setsize": h,
        ref: b,
        children: (0, i.jsxs)(C.H, {
            as: "div",
            selected: n,
            className: s()(o, eG.bG, eG.$J, { [eG.Q2]: n }),
            children: [
                R &&
                    (0, i.jsx)(eF, {
                        eventTargetRef: M,
                        isNitro: E,
                        contentWidth: S,
                        hoverGradientStart: _,
                        hoverGradientMiddle: j,
                        hoverGradientEnd: T,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: f },
                    className: eG.nf,
                    innerRef: D,
                    ...x,
                    children: [
                        (0, i.jsx)(F.A, {
                            ref: R ? y : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(r, {
                                size: "refresh_sm",
                                className: s()(eG.e_, a),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: eG.xx,
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
}
function eV(e) {
    let {
            channel: t,
            selected: r = !1,
            user: a,
            activities: N,
            applicationStream: h,
            voiceChannel: I,
            isTyping: R,
            status: E,
            isMobile: _,
            isVR: j,
            nameplate: T,
            ref: x,
            "aria-posinset": S,
            "aria-setsize": O,
        } = e,
        [L, Z] = l.useState(!1),
        [ec, ed] = l.useState(!1),
        [em, eg] = l.useState(!1),
        eN = l.useRef(null),
        [ex, eS] = l.useState(!1),
        ey = (0, f.K)(
            l.useCallback((e) => {
                eS(e);
            }, []),
        ),
        eD = l.useRef(null),
        eb = x ?? eD,
        eF = (0, A.A)(eb, ey),
        { showMenuItemPopover: ez, markMenuItemPopoverAsDismissed: eV } = (0, eE.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === r,
            isTargetInViewport: ex,
            channelType: t.type,
        }),
        {
            avatarSrc: eH,
            avatarDecorationSrc: eW,
            eventHandlers: eY,
        } = (0, eT.A)({ userId: a?.id, size: y._3.SIZE_32, animateOnHover: !(r || L || ec || em) }),
        [eK, eX] = l.useState({ maskImage: "none" }),
        eJ = l.useRef(null),
        eQ = t.isMultiUserDM(),
        e$ = t.isSystemDM(),
        eq = !eQ && !e$ && t.type === ea.rbe.DM,
        eZ = eq && a?.primaryGuild != null,
        e0 = (0, v.bG)([eM.Ay], () => eM.Ay.isChannelMuted(t.getGuildId(), t.id)),
        e2 = (0, v.bG)([eM.Ay], () => eM.Ay.isMessagesFavorite(t.id)),
        { ignored: e8, blocked: e1 } = (0, v.cf)([ei.A], () => ({
            ignored: ei.A.isIgnored(t.getRecipientId()),
            blocked: ei.A.isBlocked(t.getRecipientId()),
        })),
        e4 = eq && e8,
        e3 = eq && e1,
        e5 = (e0 || e4 || e3) && !(r || L),
        e9 = (0, v.bG)([eC.Ay], () => eC.Ay.getMentionCount(t.id) > 0),
        e6 = (0, Y.Ay)(t),
        e7 = l.useRef(null),
        te = null != T && (r || L || em);
    function tt() {
        Z(!0);
    }
    function tn() {
        Z(!1);
    }
    function ti() {
        ed(!0);
    }
    function tl() {
        ed(!1);
    }
    function tr(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null != e && (e.preventDefault(), e.stopPropagation()), G.A.closePrivateChannel(t.id, r, n);
    }
    function ts() {
        G.A.preload(ea.ME, t.id);
    }
    function ta(e) {
        e.stopPropagation();
    }
    function to(e) {
        e.target === e.currentTarget && eN.current?.click();
    }
    function tu(e) {
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
                              n.e("79630"),
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
                          return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: r });
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
                              n.e("62323"),
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
                              n.e("54625"),
                              n.e("91994"),
                              n.e("71133"),
                              n.e("76665"),
                              n.e("35313"),
                              n.e("76273"),
                              n.e("79630"),
                              n.e("36564"),
                              n.e("34971"),
                              n.e("52229"),
                              n.e("45996"),
                              n.e("792"),
                              n.e("92822"),
                              n.e("23427"),
                              n.e("29422"),
                              n.e("61268"),
                              n.e("38056"),
                              n.e("9291"),
                              n.e("56753"),
                              n.e("14461"),
                              n.e("93014"),
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
                          return (n) => (0, i.jsx)(e, { ...n, user: a, channel: t, channelSelected: r });
                      },
                      { impressionName: l, onClose: () => eg(!1) },
                  );
    }
    function tc(e) {
        e.preventDefault(), e.stopPropagation();
        let l = eu.intl.formatToPlainString(eu.t.hJ5Ap4, { name: e6 }),
            r = eu.intl.format(eu.t.SSIVOu, { name: e6 });
        t.isManaged() &&
            ((l = eu.intl.formatToPlainString(eu.t.hVGjEW, { name: e6 })),
            (r = eu.intl.format(eu.t.IK1Qvs, { name: e6 }))),
            (0, M.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("70588"), n.e("37803")]).then(n.bind(n, 148166));
                return (t) => (0, i.jsx)(e, { title: l, body: r, onSubmit: tr, ...t });
            });
    }
    let td = (0, i.jsx)(eI.A, {
            userName: e6,
            displayNameStyles: a?.displayNameStyles,
            effectDisplayType: L || r || em ? eh.G.ANIMATED : eh.G.PLAIN,
            loop: L,
            boldFontOpacity: 0.9,
        }),
        tf = eZ
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      td,
                      (0, i.jsx)(ej.Ay, {
                          primaryGuild: a?.primaryGuild,
                          userId: a?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: s()(eG.fc, { [eG.Y_]: e5 }),
                      }),
                  ],
              })
            : td,
        tA = l.useRef(null),
        tm = (0, ep.W)({ location: "PrivateChannel" }) && a?.displayNameStyles != null,
        { isIncomingCall: tg, isOngoingCall: tN } = (0, z.A)(t.id),
        tv = [
            (0, H.Ay)({ channel: t, unread: e9, isIncomingCall: tg, isOngoingCall: tN }),
            (0, H.r2)({ channel: t, muted: e0, userStatus: E, isFavorite: e2 }),
        ]
            .filter(Boolean)
            .join(", "),
        tp = (0, v.bG)([eC.Ay], () => eC.Ay.lastMessageId(t.id)),
        { waveShouldShow: th, wavePressed: tI } = (function (e, t) {
            let n,
                i,
                r,
                s,
                a,
                o,
                u,
                c,
                d,
                f,
                [A, m] = l.useState(!1),
                g = l.useCallback(async () => {
                    if (!A) {
                        m(!0),
                            (0, q.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, $.pX)(ea.BVt.CHANNEL(ea.ME, e.id));
                        try {
                            await Q.A.sendStickers(e.id, ["749054660769218631"], "", { location: eo.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok || 429 !== e.status || (0, K.P0)((0, X.o)(eu.intl.string(eu.t.Whhv4w), J.Ck.FAILURE));
                        }
                        m(!1);
                    }
                }, [e.id, A]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (r = (0, v.bG)([ei.A], () => null != i && ei.A.isFriend(i))),
                    (s = (0, v.bG)([ei.A], () => null != i && ei.A.isIgnored(i))),
                    (a = (0, v.bG)([en.A], () => {
                        let t = en.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === ea.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(es.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, v.bG)([en.A], () => en.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = er.default.extractTimestamp(e.id)),
                    (d = (0, el.v0)(ee()(), ee()(c), 18144e5)),
                    (f = (0, et.l)(e.id)),
                    n && r && !s && (o || null == t || a) && !u && d && null == f),
                wavePressed: g,
            };
        })(t, tp),
        tR = (0, g.A)(() => {
            let e = eJ.current?.getBoundingClientRect() ?? null,
                t = tA.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void eX({ maskImage: "none" });
            let n = t.width - 16;
            eX({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        l.useLayoutEffect(tR, [L, r, tR]),
        (0, m.g)(eb, tR),
        (0, i.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...l } = e;
                return (0, i.jsxs)(ev, {
                    className: s()(eG.Ix, eG.dm),
                    role: n,
                    focusProps: { ...eO, focusTarget: eN, ringTarget: eb },
                    ref: eF,
                    onMouseEnter: tt,
                    onMouseLeave: tn,
                    onMouseDown: ts,
                    onFocus: ti,
                    onBlur: tl,
                    onContextMenu: tu,
                    "aria-setsize": O,
                    "aria-posinset": S,
                    children: [
                        e9 ? (0, i.jsx)("div", { className: s()(eG.dM, { [eG.SU]: e5 }) }) : null,
                        (0, i.jsxs)(C.H, {
                            className: s()(eG.bG, { [eG.Q2]: r || em }),
                            as: "div",
                            onClick: to,
                            muted: e5,
                            selected: r,
                            children: [
                                (0, i.jsx)(eA.A, {
                                    nameplate: te ? T : void 0,
                                    selected: r,
                                    hovered: L,
                                    content: tA,
                                    placement: ef.u.CHANNEL,
                                }),
                                (0, i.jsx)("div", { className: eG.lU, ref: eJ, children: tf }),
                                (0, i.jsx)(u.N_, {
                                    style: eK,
                                    innerRef: eN,
                                    to: ea.BVt.CHANNEL(ea.ME, t.id),
                                    className: eG.nf,
                                    "aria-label": tv,
                                    ...l,
                                    children: (0, i.jsx)(F.A, {
                                        ref: tA,
                                        avatar: (function () {
                                            let e = y._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, i.jsx)(e_.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: R,
                                                        status: E,
                                                    });
                                                else
                                                    return (0, i.jsx)(ew, {
                                                        ...eY,
                                                        src: (0, W.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: R ? ea.clD.ONLINE : E,
                                                        isTyping: R,
                                                    });
                                            o()(
                                                null != a,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                a.isSystemUser() || (n = (0, U.A)(N) ? ea.clD.STREAMING : E),
                                                (0, i.jsx)(ew, {
                                                    ...eY,
                                                    size: y._3.SIZE_32,
                                                    src: eH,
                                                    avatarDecoration: eW,
                                                    status: n,
                                                    isMobile: _,
                                                    isVR: j,
                                                    isTyping: R,
                                                    "aria-label": a.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: e9 && !e5,
                                        muted: e5,
                                        subText: t.isSystemDM()
                                            ? (0, i.jsx)(D.E, {
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  className: eG.W$,
                                                  children: (0, V.A)(t.id)
                                                      ? eu.intl.string(eu.t.FL5T01)
                                                      : eu.intl.string(eu.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, i.jsx)(D.E, {
                                                    variant: "text-xs/medium",
                                                    color: "none",
                                                    className: eG.W$,
                                                    children: eu.intl.format(eu.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, k.A)({
                                                      activities: N,
                                                      status: E,
                                                      applicationStream: h,
                                                      voiceChannel: I,
                                                  })
                                                ? (0, i.jsx)(P.A, {
                                                      user: a,
                                                      activities: N,
                                                      voiceChannel: I,
                                                      applicationStream: h,
                                                      animateEmoji: L || ec || em,
                                                      textClassName: eG.XD,
                                                      iconClassName: e5 ? eG.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, i.jsx)(p.A, { className: s()(eG.uN, { [eG.e8]: tm }), children: tf }),
                                        decorators: t.isSystemDM()
                                            ? (0, i.jsx)(B.A, {
                                                  className: eG.G$,
                                                  type: B.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: tm,
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: s()(eG._q, { [eG.EY]: te }),
                                    children: [
                                        e3
                                            ? (0, i.jsx)(eB, {})
                                            : e4
                                              ? (0, i.jsx)(eP, {})
                                              : e2
                                                ? (0, i.jsx)(eL, {})
                                                : null,
                                        th && null != e6
                                            ? (0, i.jsx)(ek, { channelName: e6, onClick: tI, showNameplate: te })
                                            : null,
                                        th
                                            ? null
                                            : (0, i.jsx)(eU, {
                                                  icon: b.P,
                                                  "aria-label": eQ
                                                      ? eu.intl.string(eu.t["26C4oi"])
                                                      : eu.intl.string(eu.t.jsvgc3),
                                                  onClick: eQ ? tc : tr,
                                                  onMouseDown: ta,
                                                  nameplate: T,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: e7,
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        ez && (0, i.jsx)(eR.A, { targetElementRef: eb, markMenuItemPopoverAsDismissed: eV }),
                    ],
                });
            },
        })
    );
}
let eH =
    21552 == n.j
        ? function (e) {
              let { channel: t, selected: n, ...l } = e,
                  r = (0, v.bG)([eD.default], () => eD.default.getUser(t.getRecipientId())),
                  s = r?.id,
                  a = (0, v.cf)([eS.A, ex.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = eS.A.getState().statuses;
                          t.recipients.some((e) => n[e] === ea.clD.ONLINE) && (e = ea.clD.ONLINE);
                      } else null != s && (e = eS.A.getStatus(s));
                      return {
                          status: e,
                          activities: null != s ? eS.A.getActivities(s) : null,
                          applicationStream: null != s ? ex.A.getAnyStreamForUser(s) : null,
                          isMobile: null != s && eS.A.isMobileOnline(s),
                          isVR: null != s && eS.A.isVROnline(s),
                      };
                  }, [t, s]),
                  { voiceChannel: o } = (0, L.Ay)({ userId: s }),
                  u = (0, ec.r)({ user: r }),
                  c = (0, v.bG)(
                      [eD.default, ey.A],
                      () =>
                          t.isMultiUserDM()
                              ? er.default
                                    .keys(ey.A.getTypingUsers(t.id))
                                    .some((e) => e !== eD.default.getCurrentUser()?.id)
                              : null != r && ey.A.isTyping(t.id, t.getRecipientId()),
                      [t, r],
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(eV, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: a.status === ea.clD.ONLINE ? ea.clD.ONLINE : void 0,
                        ...l,
                    })
                  : (0, i.jsx)(eV, {
                        channel: t,
                        selected: n,
                        user: r,
                        voiceChannel: o,
                        isTyping: c,
                        nameplate: u,
                        ...l,
                        ...a,
                    });
          }
        : null;

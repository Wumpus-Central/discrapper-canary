"use strict";
n.d(t, { ls: () => eV, z9: () => eB, w_: () => ew, Ay: () => ej, th: () => eH });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    d = n(936504),
    c = n(562708),
    u = n(837381),
    _ = n(172218),
    E = n(612324),
    A = n(535185),
    h = n(148839),
    I = n(607399),
    f = n(17928),
    p = n(3026),
    T = n(990078),
    m = n(97808),
    g = n(939249),
    S = n(821609),
    N = n(366605),
    C = n(952270),
    O = n(428678),
    R = n(661531),
    L = n(549254),
    D = n(445529),
    y = n(778712),
    v = n(192308),
    b = n(834730),
    M = n(789645),
    P = n(308528),
    U = n(442433),
    w = n(765671),
    G = n(960076),
    x = n(397244),
    k = n(714114),
    F = n(394871),
    V = n(709066),
    B = n(262295),
    H = n(620982),
    j = n(343328),
    W = n(963027),
    Y = n(571694),
    K = n(47167),
    $ = n(691540),
    z = n(857250),
    q = n(97483),
    Z = n(493336),
    X = n(976860),
    Q = n(330001),
    J = n(989349),
    ee = n.n(J),
    et = n(74114),
    en = n(232835),
    ei = n(994500),
    er = n(58703),
    ea = n(935208),
    es = n(746080),
    el = n(652215),
    eo = n(381941),
    ed = n(375708),
    ec = n(449582),
    eu = n(351952),
    e_ = n(88686),
    eE = n(174755),
    eA = n(187322),
    eh = n(586893);
let eI = r.forwardRef(function (e, t) {
    let { className: n, focusProps: r, ...a } = e;
    return (0, i.jsx)(eA.vN, { ...r, children: (0, i.jsx)("li", { className: s()(n, eh.k), ...a, ref: t }) });
});
var ef = n(824994),
    ep = n(922301),
    eT = n(660184),
    em = n(414808),
    eg = n(302005),
    eS = n(954376),
    eN = n(534400),
    eC = n(854627),
    eO = n(616356),
    eR = n(290863),
    eL = n(568548),
    eD = n(741961),
    ey = n(543465),
    ev = n(287809),
    eb = n(19575),
    eM = n(330076);
let eP = eb.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
    eU = { offset: { top: 2, bottom: 2, right: 4 } };
function ew(e) {
    let { nameplate: t, icon: n, forceShow: r = !1, reducedClickTarget: a = !1, visibleElementRef: l, ...o } = e,
        d = (0, eu.K)(t);
    return (0, i.jsx)(g.D, {
        className: s()(eM.b, { [eM.DQ]: null != t, [eM.by]: r, [eM.wY]: a }),
        style: d,
        ...o,
        focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: l,
            className: s()({ [eM.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: s()(eM.ut, { [eM.Uq]: null != t }),
            }),
        }),
    });
}
function eG(e) {
    let { onClick: t, channelName: n, showNameplate: r } = e;
    return (0, i.jsx)("div", {
        className: eM.KQ,
        children: (0, i.jsx)(T.m, {
            text: ed.intl.formatToPlainString(ed.t.m0zYbV, { username: n }),
            children: (0, i.jsx)(S.$, {
                size: "sm",
                variant: r ? "overlay-secondary" : "secondary",
                onClick: t,
                text: ed.intl.string(ed.t.pVlP58),
            }),
        }),
    });
}
function ex() {
    return (0, i.jsx)(N.t, { size: "xs", color: "currentColor", className: eM.wB });
}
function ek() {
    return (0, i.jsx)(C.G, { size: "xs", color: "currentColor", className: eM.wB });
}
function eF() {
    return (0, i.jsx)(O.K, { size: "xs", color: "currentColor", className: eM.wB });
}
function eV(e) {
    let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: a,
            hoverGradientStart: s,
            hoverGradientMiddle: l,
            hoverGradientEnd: o,
        } = e,
        d = r.useMemo(
            () =>
                null != s && null != l && null != o
                    ? {
                          Color_GradientCenter: s,
                          Color_InnerRing: l ?? R.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? l,
                          Color_OuterRing: o,
                          NitroVFX: !1,
                      }
                    : n
                      ? {
                            Color_GradientCenter: R.A.colors.NITRO_TAB_GRADIENT_CENTER,
                            Color_InnerRing: R.A.colors.NITRO_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: R.A.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !0,
                        }
                      : {
                            Color_GradientCenter: R.A.colors.STANDARD_TAB_GRADIENT_CENTER,
                            Color_InnerRing: R.A.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: R.A.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !1,
                        },
            [n, s, l, o],
        );
    return (0, i.jsx)(L.U, { eventTargetRef: t, className: eM.a1, dataBinding: { ...d, DimmerWidth: (a ?? 0) + 32 } });
}
function eB(e) {
    let {
            route: t,
            selected: n,
            icon: a,
            iconClassName: l,
            interactiveClassName: o,
            text: c,
            children: u,
            locationState: _,
            onClick: A,
            className: h,
            role: f,
            "aria-posinset": p,
            "aria-setsize": T,
            listItemRef: m,
            showHoverGradient: g = !1,
            nitroHoverGradient: S = !1,
            hoverGradientStart: N,
            hoverGradientMiddle: C,
            hoverGradientEnd: O,
            ...R
        } = e,
        { width: L, ref: y } = (0, w.Ay)(),
        v = r.useRef(null),
        b = r.useRef(null),
        M = (0, E.A)(m, v);
    return (0, i.jsx)(eI, {
        className: s()(eM.Ix, { [eM.Ij]: I.Fr }, h),
        onClick: A,
        role: f,
        focusProps: { ...eU, focusTarget: b, ringTarget: v },
        "aria-posinset": p,
        "aria-setsize": T,
        ref: M,
        children: (0, i.jsxs)(D.H, {
            as: "div",
            selected: n,
            className: s()(o, eM.bG, eM.$J, { [eM.Q2]: n }),
            children: [
                g &&
                    (0, i.jsx)(eV, {
                        eventTargetRef: v,
                        isNitro: S,
                        contentWidth: L,
                        hoverGradientStart: N,
                        hoverGradientMiddle: C,
                        hoverGradientEnd: O,
                    }),
                (0, i.jsxs)(d.N_, {
                    to: { pathname: t, state: _ },
                    className: eM.nf,
                    innerRef: b,
                    ...R,
                    children: [
                        (0, i.jsx)(B.A, {
                            ref: g ? y : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(a, {
                                size: "refresh_sm",
                                className: s()(eM.e_, l),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: eM.xx,
                        }),
                        u,
                    ],
                }),
            ],
        }),
    });
}
function eH(e) {
    let {
            channel: t,
            selected: a = !1,
            user: l,
            activities: I,
            applicationStream: T,
            voiceChannel: m,
            isTyping: g,
            status: S,
            isMobile: N,
            isVR: C,
            nameplate: O,
            ref: R,
            "aria-posinset": L,
            "aria-setsize": w,
        } = e,
        [k, J] = r.useState(!1),
        [ec, eu] = r.useState(!1),
        [eA, eh] = r.useState(!1),
        eO = r.useRef(null),
        [eR, eD] = r.useState(!1),
        ev = (0, _.K)(
            r.useCallback((e) => {
                eD(e);
            }, []),
        ),
        eb = r.useRef(null),
        eV = R ?? eb,
        eB = (0, E.A)(eV, ev),
        { showMenuItemPopover: eH, markMenuItemPopoverAsDismissed: ej } = (0, eg.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === a,
            isTargetInViewport: eR,
            channelType: t.type,
        }),
        {
            avatarSrc: eW,
            avatarDecorationSrc: eY,
            eventHandlers: eK,
        } = (0, eC.A)({ userId: l?.id, size: y._3.SIZE_32, animateOnHover: !(a || k || ec || eA) }),
        [e$, ez] = r.useState({ maskImage: "none" }),
        eq = r.useRef(null),
        eZ = t.isMultiUserDM(),
        eX = t.isSystemDM(),
        eQ = !eZ && !eX && t.type === el.rbe.DM,
        eJ = eQ && l?.primaryGuild != null,
        e0 = (0, f.bG)([ey.Ay], () => ey.Ay.isChannelMuted(t.getGuildId(), t.id)),
        e1 = (0, f.bG)([ey.Ay], () => ey.Ay.isMessagesFavorite(t.id)),
        { ignored: e2, blocked: e3 } = (0, f.cf)([ei.A], () => ({
            ignored: ei.A.isIgnored(t.getRecipientId()),
            blocked: ei.A.isBlocked(t.getRecipientId()),
        })),
        e6 = eQ && e2,
        e4 = eQ && e3,
        e7 = (e0 || e6 || e4) && !(a || k),
        e5 = (0, f.bG)([eL.Ay], () => eL.Ay.getMentionCount(t.id) > 0),
        e8 = (0, K.Ay)(t),
        e9 = r.useRef(null),
        te = null != O && (a || k || eA);
    function tt() {
        J(!0);
    }
    function tn() {
        J(!1);
    }
    function ti() {
        eu(!0);
    }
    function tr() {
        eu(!1);
    }
    function ta(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null != e && (e.preventDefault(), e.stopPropagation()), P.A.closePrivateChannel(t.id, a, n);
    }
    function ts() {
        P.A.preload(el.ME, t.id);
    }
    function tl(e) {
        e.stopPropagation();
    }
    function to(e) {
        e.target === e.currentTarget && eO.current?.click();
    }
    let td = (e) => {
        let r =
            "contextmenu" === e.type
                ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        eh(!0),
            t.isMultiUserDM()
                ? (0, U.L3)(
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
                          return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: a });
                      },
                      { impressionName: r, noBlurEvent: !0, onClose: () => eh(!1) },
                  )
                : (0, U.L3)(
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
                          return (n) => (0, i.jsx)(e, { ...n, user: l, channel: t, channelSelected: a });
                      },
                      { impressionName: r, onClose: () => eh(!1) },
                  );
    };
    function tc(e) {
        e.preventDefault(), e.stopPropagation();
        let r = ed.intl.formatToPlainString(ed.t.hJ5Ap4, { name: e8 }),
            a = ed.intl.format(ed.t.SSIVOu, { name: e8 });
        t.isManaged() &&
            ((r = ed.intl.formatToPlainString(ed.t.hVGjEW, { name: e8 })),
            (a = ed.intl.format(ed.t.IK1Qvs, { name: e8 }))),
            (0, v.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("70588"), n.e("37803")]).then(n.bind(n, 148166));
                return (t) => (0, i.jsx)(e, { title: r, body: a, onSubmit: ta, ...t });
            });
    }
    let tu = (0, i.jsx)(eT.A, {
            userName: e8,
            displayNameStyles: l?.displayNameStyles,
            effectDisplayType: k || a || eA ? ep.G.ANIMATED : ep.G.PLAIN,
            loop: k,
            boldFontOpacity: 0.9,
        }),
        t_ = eJ
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      tu,
                      (0, i.jsx)(eN.Ay, {
                          primaryGuild: l?.primaryGuild,
                          userId: l?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: s()(eM.fc, { [eM.Y_]: e7 }),
                      }),
                  ],
              })
            : tu,
        tE = r.useRef(null),
        tA = (0, ef.W)({ location: "PrivateChannel" }) && l?.displayNameStyles != null,
        { isIncomingCall: th, isOngoingCall: tI } = (0, H.A)(t.id),
        tf = [
            (0, W.Ay)({ channel: t, unread: e5, isIncomingCall: th, isOngoingCall: tI }),
            (0, W.r2)({ channel: t, muted: e0, userStatus: S, isFavorite: e1 }),
        ]
            .filter(Boolean)
            .join(", "),
        tp = (0, f.bG)([eL.Ay], () => eL.Ay.lastMessageId(t.id)),
        { waveShouldShow: tT, wavePressed: tm } = (function (e, t) {
            let n,
                i,
                a,
                s,
                l,
                o,
                d,
                c,
                u,
                _,
                [E, A] = r.useState(!1),
                h = r.useCallback(async () => {
                    if (!E) {
                        A(!0),
                            (0, Q.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, X.pX)(el.BVt.CHANNEL(el.ME, e.id));
                        try {
                            await Z.A.sendStickers(e.id, ["749054660769218631"], "", { location: eo.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok || 429 !== e.status || (0, $.P0)((0, z.o)(ed.intl.string(ed.t.Whhv4w), q.Ck.FAILURE));
                        }
                        A(!1);
                    }
                }, [e.id, E]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (a = (0, f.bG)([ei.A], () => null != i && ei.A.isFriend(i))),
                    (s = (0, f.bG)([ei.A], () => null != i && ei.A.isIgnored(i))),
                    (l = (0, f.bG)([en.A], () => {
                        let t = en.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === el.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(es.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (d = (0, f.bG)([en.A], () => en.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = ea.default.extractTimestamp(e.id)),
                    (u = (0, er.v0)(ee()(), ee()(c), 18144e5)),
                    (_ = (0, et.l)(e.id)),
                    n && a && !s && (o || null == t || l) && !d && u && null == _),
                wavePressed: h,
            };
        })(t, tp),
        tg = (0, h.A)(() => {
            let e = eq.current?.getBoundingClientRect() ?? null,
                t = tE.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void ez({ maskImage: "none" });
            let n = t.width - 16;
            ez({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        r.useLayoutEffect(tg, [k, a, tg]),
        (0, A.g)(eV, tg),
        (0, i.jsx)(u.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...r } = e;
                return (0, i.jsxs)(eI, {
                    className: s()(eM.Ix, eM.dm),
                    role: n,
                    focusProps: { ...eU, focusTarget: eO, ringTarget: eV },
                    ref: eB,
                    onMouseEnter: tt,
                    onMouseLeave: tn,
                    onMouseDown: ts,
                    onFocus: ti,
                    onBlur: tr,
                    onContextMenu: td,
                    "aria-setsize": w,
                    "aria-posinset": L,
                    children: [
                        e5 ? (0, i.jsx)("div", { className: s()(eM.dM, { [eM.SU]: e7 }) }) : null,
                        (0, i.jsxs)(D.H, {
                            className: s()(eM.bG, { [eM.Q2]: a || eA }),
                            as: "div",
                            onClick: to,
                            muted: e7,
                            selected: a,
                            children: [
                                (0, i.jsx)(eE.A, {
                                    nameplate: te ? O : void 0,
                                    selected: a,
                                    hovered: k,
                                    content: tE,
                                    placement: e_.u.CHANNEL,
                                }),
                                (0, i.jsx)("div", { className: eM.lU, ref: eq, children: t_ }),
                                (0, i.jsx)(d.N_, {
                                    style: e$,
                                    innerRef: eO,
                                    to: el.BVt.CHANNEL(el.ME, t.id),
                                    className: eM.nf,
                                    "aria-label": tf,
                                    ...r,
                                    children: (0, i.jsx)(B.A, {
                                        ref: tE,
                                        avatar: (() => {
                                            let e = y._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, i.jsx)(eS.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: g,
                                                        status: S,
                                                    });
                                                else
                                                    return (0, i.jsx)(eP, {
                                                        ...eK,
                                                        src: (0, Y.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: g ? el.clD.ONLINE : S,
                                                        isTyping: g,
                                                    });
                                            o()(
                                                null != l,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                l.isSystemUser() || (n = (0, G.A)(I) ? el.clD.STREAMING : S),
                                                (0, i.jsx)(eP, {
                                                    ...eK,
                                                    size: y._3.SIZE_32,
                                                    src: eW,
                                                    avatarDecoration: eY,
                                                    status: n,
                                                    isMobile: N,
                                                    isVR: C,
                                                    isTyping: g,
                                                    "aria-label": l.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: e5 && !e7,
                                        muted: e7,
                                        subText: t.isSystemDM()
                                            ? (0, i.jsx)(b.E, {
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  className: eM.W$,
                                                  children: (0, j.A)(t.id)
                                                      ? ed.intl.string(ed.t.FL5T01)
                                                      : ed.intl.string(ed.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, i.jsx)(b.E, {
                                                    variant: "text-xs/medium",
                                                    color: "none",
                                                    className: eM.W$,
                                                    children: ed.intl.format(ed.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, x.A)({
                                                      activities: I,
                                                      status: S,
                                                      applicationStream: T,
                                                      voiceChannel: m,
                                                  })
                                                ? (0, i.jsx)(F.A, {
                                                      user: l,
                                                      activities: I,
                                                      voiceChannel: m,
                                                      applicationStream: T,
                                                      animateEmoji: k || ec || eA,
                                                      textClassName: eM.XD,
                                                      iconClassName: e7 ? eM.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, i.jsx)(p.A, { className: s()(eM.uN, { [eM.e8]: tA }), children: t_ }),
                                        decorators: t.isSystemDM()
                                            ? (0, i.jsx)(V.A, {
                                                  className: eM.G$,
                                                  type: V.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: tA,
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: s()(eM._q, { [eM.EY]: te }),
                                    children: [
                                        e4
                                            ? (0, i.jsx)(eF, {})
                                            : e6
                                              ? (0, i.jsx)(ek, {})
                                              : e1
                                                ? (0, i.jsx)(ex, {})
                                                : null,
                                        tT && null != e8
                                            ? (0, i.jsx)(eG, { channelName: e8, onClick: tm, showNameplate: te })
                                            : null,
                                        tT
                                            ? null
                                            : (0, i.jsx)(ew, {
                                                  icon: M.P,
                                                  "aria-label": eZ
                                                      ? ed.intl.string(ed.t["26C4oi"])
                                                      : ed.intl.string(ed.t.jsvgc3),
                                                  onClick: eZ ? tc : ta,
                                                  onMouseDown: tl,
                                                  nameplate: O,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: e9,
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        eH && (0, i.jsx)(em.A, { targetElementRef: eV, markMenuItemPopoverAsDismissed: ej }),
                    ],
                });
            },
        })
    );
}
let ej = function (e) {
    let { channel: t, selected: n, ...r } = e,
        a = (0, f.bG)([ev.default], () => ev.default.getUser(t.getRecipientId())),
        s = a?.id,
        l = (0, f.cf)([eR.A, eO.A], () => {
            let e;
            if (t.isMultiUserDM()) {
                let n = eR.A.getState().statuses;
                t.recipients.some((e) => n[e] === el.clD.ONLINE) && (e = el.clD.ONLINE);
            } else null != s && (e = eR.A.getStatus(s));
            return {
                status: e,
                activities: null != s ? eR.A.getActivities(s) : null,
                applicationStream: null != s ? eO.A.getAnyStreamForUser(s) : null,
                isMobile: null != s && eR.A.isMobileOnline(s),
                isVR: null != s && eR.A.isVROnline(s),
            };
        }, [t, s]),
        { voiceChannel: o } = (0, k.Ay)({ userId: s }),
        d = (0, ec.r)({ user: a }),
        c = (0, f.bG)(
            [ev.default, eD.A],
            () =>
                t.isMultiUserDM()
                    ? ea.default.keys(eD.A.getTypingUsers(t.id)).some((e) => e !== ev.default.getCurrentUser()?.id)
                    : null != a && eD.A.isTyping(t.id, t.getRecipientId()),
            [t, a],
        );
    return t.isMultiUserDM()
        ? (0, i.jsx)(eH, {
              channel: t,
              selected: n,
              isTyping: c,
              status: l.status === el.clD.ONLINE ? el.clD.ONLINE : void 0,
              ...r,
          })
        : (0, i.jsx)(eH, { channel: t, selected: n, user: a, voiceChannel: o, isTyping: c, nameplate: d, ...r, ...l });
};

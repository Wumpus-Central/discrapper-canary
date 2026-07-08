"use strict";
n.d(t, { ls: () => eF, z9: () => eB, w_: () => ex, Ay: () => ej, th: () => eH });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(936504),
    c = n(562708),
    d = n(837381),
    _ = n(172218),
    h = n(612324),
    f = n(535185),
    E = n(148839),
    p = n(607399),
    m = n(17928),
    g = n(3026),
    A = n(990078),
    I = n(97808),
    T = n(939249),
    S = n(821609),
    N = n(366605),
    C = n(952270),
    y = n(428678),
    O = n(661531),
    R = n(549254),
    v = n(912124);
function b(e) {
    let { as: t, muted: n = !1, selected: r = !1, className: s, ...o } = e,
        l = t ?? T.D;
    return (0, i.jsx)(l, { ...o, className: a()(v.bG, s, { [v.SU]: n, [v.wH]: r }) });
}
var L = n(778712),
    D = n(192308),
    w = n(789645),
    P = n(308528),
    M = n(442433),
    x = n(765671),
    U = n(960076),
    k = n(397244),
    G = n(714114),
    V = n(394871),
    F = n(709066),
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
    es = n(935208),
    ea = n(746080),
    eo = n(652215),
    el = n(381941),
    eu = n(375708),
    ec = n(449582),
    ed = n(351952),
    e_ = n(88686),
    eh = n(174755),
    ef = n(187322),
    eE = n(586893);
let ep = r.forwardRef(function (e, t) {
    let { className: n, focusProps: r, ...s } = e;
    return (0, i.jsx)(ef.vN, { ...r, children: (0, i.jsx)("li", { className: a()(n, eE.k), ...s, ref: t }) });
});
var em = n(824994),
    eg = n(922301),
    eA = n(660184),
    eI = n(414808),
    eT = n(302005),
    eS = n(954376),
    eN = n(534400),
    eC = n(854627),
    ey = n(616356),
    eO = n(290863),
    eR = n(568548),
    ev = n(741961),
    eb = n(543465),
    eL = n(287809),
    eD = n(19575),
    ew = n(330076);
let eP = eD.Ay.getEnableHardwareAcceleration() ? I.Js : I.eu,
    eM = { offset: { top: 2, bottom: 2, right: 4 } };
function ex(e) {
    let { nameplate: t, icon: n, forceShow: r = !1, reducedClickTarget: s = !1, visibleElementRef: o, ...l } = e,
        u = (0, ed.K)(t);
    return (0, i.jsx)(T.D, {
        className: a()(ew.b, { [ew.DQ]: null != t, [ew.by]: r, [ew.wY]: s }),
        style: u,
        ...l,
        focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: o,
            className: a()({ [ew.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: a()(ew.ut, { [ew.Uq]: null != t }),
            }),
        }),
    });
}
function eU(e) {
    let { onClick: t, channelName: n, showNameplate: r } = e;
    return (0, i.jsx)("div", {
        className: ew.KQ,
        children: (0, i.jsx)(A.m, {
            text: eu.intl.formatToPlainString(eu.t.m0zYbV, { username: n }),
            children: (0, i.jsx)(S.$, {
                size: "sm",
                variant: r ? "overlay-secondary" : "secondary",
                onClick: t,
                text: eu.intl.string(eu.t.pVlP58),
            }),
        }),
    });
}
function ek() {
    return (0, i.jsx)(N.t, { size: "xs", color: "currentColor", className: ew.wB });
}
function eG() {
    return (0, i.jsx)(C.G, { size: "xs", color: "currentColor", className: ew.wB });
}
function eV() {
    return (0, i.jsx)(y.K, { size: "xs", color: "currentColor", className: ew.wB });
}
function eF(e) {
    let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: s,
            hoverGradientStart: a,
            hoverGradientMiddle: o,
            hoverGradientEnd: l,
        } = e,
        u = r.useMemo(
            () =>
                null != a && null != o && null != l
                    ? {
                          Color_GradientCenter: a,
                          Color_InnerRing: o ?? O.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? o,
                          Color_OuterRing: l,
                          NitroVFX: !1,
                      }
                    : n
                      ? {
                            Color_GradientCenter: O.A.colors.NITRO_TAB_GRADIENT_CENTER,
                            Color_InnerRing: O.A.colors.NITRO_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: O.A.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !0,
                        }
                      : {
                            Color_GradientCenter: O.A.colors.STANDARD_TAB_GRADIENT_CENTER,
                            Color_InnerRing: O.A.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: O.A.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !1,
                        },
            [n, a, o, l],
        );
    return (0, i.jsx)(R.U, { eventTargetRef: t, className: ew.a1, dataBinding: { ...u, DimmerWidth: (s ?? 0) + 32 } });
}
function eB(e) {
    let {
            route: t,
            selected: n,
            icon: s,
            iconClassName: o,
            interactiveClassName: l,
            text: c,
            children: d,
            locationState: _,
            onClick: f,
            className: E,
            role: m,
            "aria-posinset": g,
            "aria-setsize": A,
            listItemRef: I,
            showHoverGradient: T = !1,
            nitroHoverGradient: S = !1,
            hoverGradientStart: N,
            hoverGradientMiddle: C,
            hoverGradientEnd: y,
            ...O
        } = e,
        { width: R, ref: v } = (0, x.Ay)(),
        L = r.useRef(null),
        D = r.useRef(null),
        w = (0, h.A)(I, L);
    return (0, i.jsx)(ep, {
        className: a()(ew.Ix, { [ew.Ij]: p.Fr }, E),
        onClick: f,
        role: m,
        focusProps: { ...eM, focusTarget: D, ringTarget: L },
        "aria-posinset": g,
        "aria-setsize": A,
        ref: w,
        children: (0, i.jsxs)(b, {
            as: "div",
            selected: n,
            className: a()(l, ew.bG, ew.$J, { [ew.Q2]: n }),
            children: [
                T &&
                    (0, i.jsx)(eF, {
                        eventTargetRef: L,
                        isNitro: S,
                        contentWidth: R,
                        hoverGradientStart: N,
                        hoverGradientMiddle: C,
                        hoverGradientEnd: y,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: _ },
                    className: ew.nf,
                    innerRef: D,
                    ...O,
                    children: [
                        (0, i.jsx)(B.A, {
                            ref: T ? v : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(s, {
                                size: "refresh_sm",
                                className: a()(ew.e_, o),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: ew.xx,
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
}
function eH(e) {
    let {
            channel: t,
            selected: s = !1,
            user: o,
            activities: p,
            applicationStream: A,
            voiceChannel: I,
            isTyping: T,
            status: S,
            isMobile: N,
            isVR: C,
            nameplate: y,
            ref: O,
            "aria-posinset": R,
            "aria-setsize": v,
        } = e,
        [x, G] = r.useState(!1),
        [J, ec] = r.useState(!1),
        [ed, ef] = r.useState(!1),
        eE = r.useRef(null),
        [ey, eO] = r.useState(!1),
        ev = (0, _.K)(
            r.useCallback((e) => {
                eO(e);
            }, []),
        ),
        eL = r.useRef(null),
        eD = O ?? eL,
        eF = (0, h.A)(eD, ev),
        { showMenuItemPopover: eB, markMenuItemPopoverAsDismissed: eH } = (0, eT.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === s,
            isTargetInViewport: ey,
            channelType: t.type,
        }),
        {
            avatarSrc: ej,
            avatarDecorationSrc: eW,
            eventHandlers: eY,
        } = (0, eC.A)({ userId: o?.id, size: L._3.SIZE_32, animateOnHover: !(s || x || J || ed) }),
        [eK, e$] = r.useState({ maskImage: "none" }),
        ez = r.useRef(null),
        eq = t.isMultiUserDM(),
        eZ = t.isSystemDM(),
        eX = !eq && !eZ && t.type === eo.rbe.DM,
        eQ = eX && o?.primaryGuild != null,
        eJ = (0, m.bG)([eb.Ay], () => eb.Ay.isChannelMuted(t.getGuildId(), t.id)),
        e0 = (0, m.bG)([eb.Ay], () => eb.Ay.isMessagesFavorite(t.id)),
        { ignored: e1, blocked: e2 } = (0, m.cf)([ei.A], () => ({
            ignored: ei.A.isIgnored(t.getRecipientId()),
            blocked: ei.A.isBlocked(t.getRecipientId()),
        })),
        e3 = eX && e1,
        e6 = eX && e2,
        e4 = (eJ || e3 || e6) && !(s || x),
        e5 = (0, m.bG)([eR.Ay], () => eR.Ay.getMentionCount(t.id) > 0),
        e7 = (0, K.Ay)(t),
        e8 = r.useRef(null),
        e9 = null != y && (s || x || ed);
    function te() {
        G(!0);
    }
    function tt() {
        G(!1);
    }
    function tn() {
        ec(!0);
    }
    function ti() {
        ec(!1);
    }
    function tr(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null != e && (e.preventDefault(), e.stopPropagation()), P.A.closePrivateChannel(t.id, s, n);
    }
    function ts() {
        P.A.preload(eo.ME, t.id);
    }
    function ta(e) {
        e.stopPropagation();
    }
    function to(e) {
        e.target === e.currentTarget && eE.current?.click();
    }
    let tl = (e) => {
        let r =
            "contextmenu" === e.type
                ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        ef(!0),
            t.isMultiUserDM()
                ? (0, M.L3)(
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
                      { impressionName: r, noBlurEvent: !0, onClose: () => ef(!1) },
                  )
                : (0, M.L3)(
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
                          return (n) => (0, i.jsx)(e, { ...n, user: o, channel: t, channelSelected: s });
                      },
                      { impressionName: r, onClose: () => ef(!1) },
                  );
    };
    function tu(e) {
        e.preventDefault(), e.stopPropagation();
        let r = eu.intl.formatToPlainString(eu.t.hJ5Ap4, { name: e7 }),
            s = eu.intl.format(eu.t.SSIVOu, { name: e7 });
        t.isManaged() &&
            ((r = eu.intl.formatToPlainString(eu.t.hVGjEW, { name: e7 })),
            (s = eu.intl.format(eu.t.IK1Qvs, { name: e7 }))),
            (0, D.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("70588"), n.e("37803")]).then(n.bind(n, 148166));
                return (t) => (0, i.jsx)(e, { title: r, body: s, onSubmit: tr, ...t });
            });
    }
    let tc = (0, i.jsx)(eA.A, {
            userName: e7,
            displayNameStyles: o?.displayNameStyles,
            effectDisplayType: x || s || ed ? eg.G.ANIMATED : eg.G.PLAIN,
            loop: x,
            boldFontOpacity: 0.9,
        }),
        td = eQ
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      tc,
                      (0, i.jsx)(eN.Ay, {
                          primaryGuild: o?.primaryGuild,
                          userId: o?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(ew.fc, { [ew.Y_]: e4 }),
                      }),
                  ],
              })
            : tc,
        t_ = r.useRef(null),
        th = (0, em.W)({ location: "PrivateChannel" }) && o?.displayNameStyles != null,
        { isIncomingCall: tf, isOngoingCall: tE } = (0, H.A)(t.id),
        tp = [
            (0, W.Ay)({ channel: t, unread: e5, isIncomingCall: tf, isOngoingCall: tE }),
            (0, W.r2)({ channel: t, muted: eJ, userStatus: S, isFavorite: e0 }),
        ]
            .filter(Boolean)
            .join(", "),
        tm = (0, m.bG)([eR.Ay], () => eR.Ay.lastMessageId(t.id)),
        { waveShouldShow: tg, wavePressed: tA } = (function (e, t) {
            let n,
                i,
                s,
                a,
                o,
                l,
                u,
                c,
                d,
                _,
                [h, f] = r.useState(!1),
                E = r.useCallback(async () => {
                    if (!h) {
                        f(!0),
                            (0, Q.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, X.pX)(eo.BVt.CHANNEL(eo.ME, e.id));
                        try {
                            await Z.A.sendStickers(e.id, ["749054660769218631"], "", { location: el.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok || 429 !== e.status || (0, $.P0)((0, z.o)(eu.intl.string(eu.t.Whhv4w), q.Ck.FAILURE));
                        }
                        f(!1);
                    }
                }, [e.id, h]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (s = (0, m.bG)([ei.A], () => null != i && ei.A.isFriend(i))),
                    (a = (0, m.bG)([ei.A], () => null != i && ei.A.isIgnored(i))),
                    (o = (0, m.bG)([en.A], () => {
                        let t = en.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === eo.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (l = e.hasFlag(ea.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, m.bG)([en.A], () => en.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = es.default.extractTimestamp(e.id)),
                    (d = (0, er.v0)(ee()(), ee()(c), 18144e5)),
                    (_ = (0, et.l)(e.id)),
                    n && s && !a && (l || null == t || o) && !u && d && null == _),
                wavePressed: E,
            };
        })(t, tm),
        tI = (0, E.A)(() => {
            let e = ez.current?.getBoundingClientRect() ?? null,
                t = t_.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void e$({ maskImage: "none" });
            let n = t.width - 16;
            e$({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        r.useLayoutEffect(tI, [x, s, tI]),
        (0, f.g)(eD, tI),
        (0, i.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...r } = e;
                return (0, i.jsxs)(ep, {
                    className: a()(ew.Ix, ew.dm),
                    role: n,
                    focusProps: { ...eM, focusTarget: eE, ringTarget: eD },
                    ref: eF,
                    onMouseEnter: te,
                    onMouseLeave: tt,
                    onMouseDown: ts,
                    onFocus: tn,
                    onBlur: ti,
                    onContextMenu: tl,
                    "aria-setsize": v,
                    "aria-posinset": R,
                    children: [
                        e5 ? (0, i.jsx)("div", { className: a()(ew.dM, { [ew.SU]: e4 }) }) : null,
                        (0, i.jsxs)(b, {
                            className: a()(ew.bG, { [ew.Q2]: s || ed }),
                            as: "div",
                            onClick: to,
                            muted: e4,
                            selected: s,
                            children: [
                                (0, i.jsx)(eh.A, {
                                    nameplate: e9 ? y : void 0,
                                    selected: s,
                                    hovered: x,
                                    content: t_,
                                    placement: e_.u.CHANNEL,
                                }),
                                (0, i.jsx)("div", { className: ew.lU, ref: ez, children: td }),
                                (0, i.jsx)(u.N_, {
                                    style: eK,
                                    innerRef: eE,
                                    to: eo.BVt.CHANNEL(eo.ME, t.id),
                                    className: ew.nf,
                                    "aria-label": tp,
                                    ...r,
                                    children: (0, i.jsx)(B.A, {
                                        ref: t_,
                                        avatar: (() => {
                                            let e = L._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, i.jsx)(eS.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: T,
                                                        status: S,
                                                    });
                                                else
                                                    return (0, i.jsx)(eP, {
                                                        ...eY,
                                                        src: (0, Y.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: T ? eo.clD.ONLINE : S,
                                                        isTyping: T,
                                                    });
                                            l()(
                                                null != o,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                o.isSystemUser() || (n = (0, U.A)(p) ? eo.clD.STREAMING : S),
                                                (0, i.jsx)(eP, {
                                                    ...eY,
                                                    size: L._3.SIZE_32,
                                                    src: ej,
                                                    avatarDecoration: eW,
                                                    status: n,
                                                    isMobile: N,
                                                    isVR: C,
                                                    isTyping: T,
                                                    "aria-label": o.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: e5 && !e4,
                                        muted: e4,
                                        subText: t.isSystemDM()
                                            ? (0, i.jsx)("div", {
                                                  className: ew.W$,
                                                  children: (0, j.A)(t.id)
                                                      ? eu.intl.string(eu.t.FL5T01)
                                                      : eu.intl.string(eu.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, i.jsx)("div", {
                                                    className: ew.W$,
                                                    children: eu.intl.format(eu.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, k.A)({
                                                      activities: p,
                                                      status: S,
                                                      applicationStream: A,
                                                      voiceChannel: I,
                                                  })
                                                ? (0, i.jsx)(V.A, {
                                                      user: o,
                                                      activities: p,
                                                      voiceChannel: I,
                                                      applicationStream: A,
                                                      animateEmoji: x || J || ed,
                                                      textClassName: ew.XD,
                                                      iconClassName: e4 ? ew.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, i.jsx)(g.A, { className: a()(ew.uN, { [ew.e8]: th }), children: td }),
                                        decorators: t.isSystemDM()
                                            ? (0, i.jsx)(F.A, {
                                                  className: ew.G$,
                                                  type: F.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: th,
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: a()(ew._q, { [ew.EY]: e9 }),
                                    children: [
                                        e6
                                            ? (0, i.jsx)(eV, {})
                                            : e3
                                              ? (0, i.jsx)(eG, {})
                                              : e0
                                                ? (0, i.jsx)(ek, {})
                                                : null,
                                        tg && null != e7
                                            ? (0, i.jsx)(eU, { channelName: e7, onClick: tA, showNameplate: e9 })
                                            : null,
                                        tg
                                            ? null
                                            : (0, i.jsx)(ex, {
                                                  icon: w.P,
                                                  "aria-label": eq
                                                      ? eu.intl.string(eu.t["26C4oi"])
                                                      : eu.intl.string(eu.t.jsvgc3),
                                                  onClick: eq ? tu : tr,
                                                  onMouseDown: ta,
                                                  nameplate: y,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: e8,
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        eB && (0, i.jsx)(eI.A, { targetElementRef: eD, markMenuItemPopoverAsDismissed: eH }),
                    ],
                });
            },
        })
    );
}
let ej = function (e) {
    let { channel: t, selected: n, ...r } = e,
        s = (0, m.bG)([eL.default], () => eL.default.getUser(t.getRecipientId())),
        a = s?.id,
        o = (0, m.cf)([eO.A, ey.A], () => {
            let e;
            if (t.isMultiUserDM()) {
                let n = eO.A.getState().statuses;
                t.recipients.some((e) => n[e] === eo.clD.ONLINE) && (e = eo.clD.ONLINE);
            } else null != a && (e = eO.A.getStatus(a));
            return {
                status: e,
                activities: null != a ? eO.A.getActivities(a) : null,
                applicationStream: null != a ? ey.A.getAnyStreamForUser(a) : null,
                isMobile: null != a && eO.A.isMobileOnline(a),
                isVR: null != a && eO.A.isVROnline(a),
            };
        }, [t, a]),
        { voiceChannel: l } = (0, G.Ay)({ userId: a }),
        u = (0, ec.r)({ user: s }),
        c = (0, m.bG)(
            [eL.default, ev.A],
            () =>
                t.isMultiUserDM()
                    ? es.default.keys(ev.A.getTypingUsers(t.id)).some((e) => e !== eL.default.getCurrentUser()?.id)
                    : null != s && ev.A.isTyping(t.id, t.getRecipientId()),
            [t, s],
        );
    return t.isMultiUserDM()
        ? (0, i.jsx)(eH, {
              channel: t,
              selected: n,
              isTyping: c,
              status: o.status === eo.clD.ONLINE ? eo.clD.ONLINE : void 0,
              ...r,
          })
        : (0, i.jsx)(eH, { channel: t, selected: n, user: s, voiceChannel: l, isTyping: c, nameplate: u, ...r, ...o });
};

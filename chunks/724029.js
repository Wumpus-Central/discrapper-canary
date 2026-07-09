n.d(t, { ls: () => eF, z9: () => ez, w_: () => eU, Ay: () => eW, th: () => eV });
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
    E = n(939249),
    _ = n(821609),
    v = n(366605),
    T = n(952270),
    x = n(428678),
    S = n(661531),
    C = n(549254),
    M = n(549756);
function y(e) {
    let { as: t, muted: n = !1, selected: l = !1, className: s, ...a } = e,
        o = t ?? E.D;
    return (0, i.jsx)(o, { ...a, className: r()(M.bG, s, { [M.SU]: n, [M.wH]: l }) });
}
var D = n(778712),
    b = n(192308),
    j = n(834730),
    G = n(789645),
    w = n(308528),
    O = n(442433),
    U = n(765671),
    k = n(960076),
    L = n(397244),
    P = n(714114),
    B = n(394871),
    F = n(709066),
    z = n(262295),
    V = n(620982),
    W = n(343328),
    H = n(963027),
    Y = n(571694),
    K = n(47167),
    J = n(691540),
    Q = n(857250),
    X = n(97483),
    $ = n(493336),
    q = n(976860),
    Z = n(330001),
    ee = n(989349),
    et = n.n(ee),
    en = n(74114),
    ei = n(232835),
    el = n(994500),
    es = n(58703),
    er = n(935208),
    ea = n(746080),
    eo = n(652215),
    eu = n(381941),
    ec = n(375708),
    ed = n(449582),
    eA = n(351952),
    em = n(88686),
    eg = n(174755),
    eN = n(187322),
    ef = n(984909);
let ep = l.forwardRef(function (e, t) {
    let { className: n, focusProps: l, ...s } = e;
    return (0, i.jsx)(eN.vN, { ...l, children: (0, i.jsx)("li", { className: r()(n, ef.k), ...s, ref: t }) });
});
var eh = n(824994),
    eI = n(922301),
    eR = n(660184),
    eE = n(414808),
    e_ = n(302005),
    ev = n(954376),
    eT = n(534400),
    ex = n(854627),
    eS = n(616356),
    eC = n(290863),
    eM = n(568548),
    ey = n(741961),
    eD = n(543465),
    eb = n(287809),
    ej = n(19575),
    eG = n(480028);
let ew = ej.Ay.getEnableHardwareAcceleration() ? R.Js : R.eu,
    eO = { offset: { top: 2, bottom: 2, right: 4 } };
function eU(e) {
    let { nameplate: t, icon: n, forceShow: l = !1, reducedClickTarget: s = !1, visibleElementRef: a, ...o } = e,
        u = (0, eA.K)(t);
    return (0, i.jsx)(E.D, {
        className: r()(eG.b, { [eG.DQ]: null != t, [eG.by]: l, [eG.wY]: s }),
        style: u,
        ...o,
        focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: a,
            className: r()({ [eG.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: r()(eG.ut, { [eG.Uq]: null != t }),
            }),
        }),
    });
}
function ek(e) {
    let { onClick: t, channelName: n, showNameplate: l } = e;
    return (0, i.jsx)("div", {
        className: eG.KQ,
        children: (0, i.jsx)(I.m, {
            text: ec.intl.formatToPlainString(ec.t.m0zYbV, { username: n }),
            children: (0, i.jsx)(_.$, {
                size: "sm",
                variant: l ? "overlay-secondary" : "secondary",
                onClick: t,
                text: ec.intl.string(ec.t.pVlP58),
            }),
        }),
    });
}
function eL() {
    return (0, i.jsx)(v.t, { size: "xs", color: "currentColor", className: eG.wB });
}
function eP() {
    return (0, i.jsx)(T.G, { size: "xs", color: "currentColor", className: eG.wB });
}
function eB() {
    return (0, i.jsx)(x.K, { size: "xs", color: "currentColor", className: eG.wB });
}
function eF(e) {
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
                          Color_InnerRing: a ?? S.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? a,
                          Color_OuterRing: o,
                          NitroVFX: !1,
                      }
                    : n
                      ? {
                            Color_GradientCenter: S.A.colors.NITRO_TAB_GRADIENT_CENTER,
                            Color_InnerRing: S.A.colors.NITRO_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: S.A.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !0,
                        }
                      : {
                            Color_GradientCenter: S.A.colors.STANDARD_TAB_GRADIENT_CENTER,
                            Color_InnerRing: S.A.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: S.A.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !1,
                        },
            [n, r, a, o],
        );
    return (0, i.jsx)(C.U, { eventTargetRef: t, className: eG.a1, dataBinding: { ...u, DimmerWidth: (s ?? 0) + 32 } });
}
function ez(e) {
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
            showHoverGradient: E = !1,
            nitroHoverGradient: _ = !1,
            hoverGradientStart: v,
            hoverGradientMiddle: T,
            hoverGradientEnd: x,
            ...S
        } = e,
        { width: C, ref: M } = (0, U.Ay)(),
        D = l.useRef(null),
        b = l.useRef(null),
        j = (0, m.A)(R, D);
    return (0, i.jsx)(ep, {
        className: r()(eG.Ix, { [eG.Ij]: f.Fr }, N),
        onClick: g,
        role: p,
        focusProps: { ...eO, focusTarget: b, ringTarget: D },
        "aria-posinset": h,
        "aria-setsize": I,
        ref: j,
        children: (0, i.jsxs)(y, {
            as: "div",
            selected: n,
            className: r()(o, eG.bG, eG.$J, { [eG.Q2]: n }),
            children: [
                E &&
                    (0, i.jsx)(eF, {
                        eventTargetRef: D,
                        isNitro: _,
                        contentWidth: C,
                        hoverGradientStart: v,
                        hoverGradientMiddle: T,
                        hoverGradientEnd: x,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: A },
                    className: eG.nf,
                    innerRef: b,
                    ...S,
                    children: [
                        (0, i.jsx)(z.A, {
                            ref: E ? M : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(s, {
                                size: "refresh_sm",
                                className: r()(eG.e_, a),
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
            selected: s = !1,
            user: a,
            activities: f,
            applicationStream: I,
            voiceChannel: R,
            isTyping: E,
            status: _,
            isMobile: v,
            isVR: T,
            nameplate: x,
            ref: S,
            "aria-posinset": C,
            "aria-setsize": M,
        } = e,
        [U, P] = l.useState(!1),
        [ee, ed] = l.useState(!1),
        [eA, eN] = l.useState(!1),
        ef = l.useRef(null),
        [eS, eC] = l.useState(!1),
        ey = (0, A.K)(
            l.useCallback((e) => {
                eC(e);
            }, []),
        ),
        eb = l.useRef(null),
        ej = S ?? eb,
        eF = (0, m.A)(ej, ey),
        { showMenuItemPopover: ez, markMenuItemPopoverAsDismissed: eV } = (0, e_.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === s,
            isTargetInViewport: eS,
            channelType: t.type,
        }),
        {
            avatarSrc: eW,
            avatarDecorationSrc: eH,
            eventHandlers: eY,
        } = (0, ex.A)({ userId: a?.id, size: D._3.SIZE_32, animateOnHover: !(s || U || ee || eA) }),
        [eK, eJ] = l.useState({ maskImage: "none" }),
        eQ = l.useRef(null),
        eX = t.isMultiUserDM(),
        e$ = t.isSystemDM(),
        eq = !eX && !e$ && t.type === eo.rbe.DM,
        eZ = eq && a?.primaryGuild != null,
        e0 = (0, p.bG)([eD.Ay], () => eD.Ay.isChannelMuted(t.getGuildId(), t.id)),
        e1 = (0, p.bG)([eD.Ay], () => eD.Ay.isMessagesFavorite(t.id)),
        { ignored: e2, blocked: e9 } = (0, p.cf)([el.A], () => ({
            ignored: el.A.isIgnored(t.getRecipientId()),
            blocked: el.A.isBlocked(t.getRecipientId()),
        })),
        e4 = eq && e2,
        e3 = eq && e9,
        e6 = (e0 || e4 || e3) && !(s || U),
        e8 = (0, p.bG)([eM.Ay], () => eM.Ay.getMentionCount(t.id) > 0),
        e7 = (0, K.Ay)(t),
        e5 = l.useRef(null),
        te = null != x && (s || U || eA);
    function tt() {
        P(!0);
    }
    function tn() {
        P(!1);
    }
    function ti() {
        ed(!0);
    }
    function tl() {
        ed(!1);
    }
    function ts(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null != e && (e.preventDefault(), e.stopPropagation()), w.A.closePrivateChannel(t.id, s, n);
    }
    function tr() {
        w.A.preload(eo.ME, t.id);
    }
    function ta(e) {
        e.stopPropagation();
    }
    function to(e) {
        e.target === e.currentTarget && ef.current?.click();
    }
    let tu = (e) => {
        let l =
            "contextmenu" === e.type
                ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        eN(!0),
            t.isMultiUserDM()
                ? (0, O.L3)(
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
                      { impressionName: l, noBlurEvent: !0, onClose: () => eN(!1) },
                  )
                : (0, O.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("10570"),
                              n.e("27647"),
                              n.e("52760"),
                              n.e("62458"),
                              n.e("93909"),
                              n.e("98273"),
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
                              n.e("52168"),
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
                              n.e("38887"),
                              n.e("23427"),
                              n.e("29422"),
                              n.e("38056"),
                              n.e("9291"),
                              n.e("56753"),
                              n.e("14461"),
                              n.e("7059"),
                              n.e("8829"),
                              n.e("95264"),
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
                      { impressionName: l, onClose: () => eN(!1) },
                  );
    };
    function tc(e) {
        e.preventDefault(), e.stopPropagation();
        let l = ec.intl.formatToPlainString(ec.t.hJ5Ap4, { name: e7 }),
            s = ec.intl.format(ec.t.SSIVOu, { name: e7 });
        t.isManaged() &&
            ((l = ec.intl.formatToPlainString(ec.t.hVGjEW, { name: e7 })),
            (s = ec.intl.format(ec.t.IK1Qvs, { name: e7 }))),
            (0, b.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("57596"), n.e("37803")]).then(n.bind(n, 148166));
                return (t) => (0, i.jsx)(e, { title: l, body: s, onSubmit: ts, ...t });
            });
    }
    let td = (0, i.jsx)(eR.A, {
            userName: e7,
            displayNameStyles: a?.displayNameStyles,
            effectDisplayType: U || s || eA ? eI.G.ANIMATED : eI.G.PLAIN,
            loop: U,
            boldFontOpacity: 0.9,
        }),
        tA = eZ
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      td,
                      (0, i.jsx)(eT.Ay, {
                          primaryGuild: a?.primaryGuild,
                          userId: a?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: r()(eG.fc, { [eG.Y_]: e6 }),
                      }),
                  ],
              })
            : td,
        tm = l.useRef(null),
        tg = (0, eh.W)({ location: "PrivateChannel" }) && a?.displayNameStyles != null,
        { isIncomingCall: tN, isOngoingCall: tf } = (0, V.A)(t.id),
        tp = [
            (0, H.Ay)({ channel: t, unread: e8, isIncomingCall: tN, isOngoingCall: tf }),
            (0, H.r2)({ channel: t, muted: e0, userStatus: _, isFavorite: e1 }),
        ]
            .filter(Boolean)
            .join(", "),
        th = (0, p.bG)([eM.Ay], () => eM.Ay.lastMessageId(t.id)),
        { waveShouldShow: tI, wavePressed: tR } = (function (e, t) {
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
                            (0, Z.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, q.pX)(eo.BVt.CHANNEL(eo.ME, e.id));
                        try {
                            await $.A.sendStickers(e.id, ["749054660769218631"], "", { location: eu.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok || 429 !== e.status || (0, J.P0)((0, Q.o)(ec.intl.string(ec.t.Whhv4w), X.Ck.FAILURE));
                        }
                        g(!1);
                    }
                }, [e.id, m]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (s = (0, p.bG)([el.A], () => null != i && el.A.isFriend(i))),
                    (r = (0, p.bG)([el.A], () => null != i && el.A.isIgnored(i))),
                    (a = (0, p.bG)([ei.A], () => {
                        let t = ei.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === eo.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(ea.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, p.bG)([ei.A], () => ei.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = er.default.extractTimestamp(e.id)),
                    (d = (0, es.v0)(et()(), et()(c), 18144e5)),
                    (A = (0, en.l)(e.id)),
                    n && s && !r && (o || null == t || a) && !u && d && null == A),
                wavePressed: N,
            };
        })(t, th),
        tE = (0, N.A)(() => {
            let e = eQ.current?.getBoundingClientRect() ?? null,
                t = tm.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void eJ({ maskImage: "none" });
            let n = t.width - 16;
            eJ({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        l.useLayoutEffect(tE, [U, s, tE]),
        (0, g.g)(ej, tE),
        (0, i.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...l } = e;
                return (0, i.jsxs)(ep, {
                    className: r()(eG.Ix, eG.dm),
                    role: n,
                    focusProps: { ...eO, focusTarget: ef, ringTarget: ej },
                    ref: eF,
                    onMouseEnter: tt,
                    onMouseLeave: tn,
                    onMouseDown: tr,
                    onFocus: ti,
                    onBlur: tl,
                    onContextMenu: tu,
                    "aria-setsize": M,
                    "aria-posinset": C,
                    children: [
                        e8 ? (0, i.jsx)("div", { className: r()(eG.dM, { [eG.SU]: e6 }) }) : null,
                        (0, i.jsxs)(y, {
                            className: r()(eG.bG, { [eG.Q2]: s || eA }),
                            as: "div",
                            onClick: to,
                            muted: e6,
                            selected: s,
                            children: [
                                (0, i.jsx)(eg.A, {
                                    nameplate: te ? x : void 0,
                                    selected: s,
                                    hovered: U,
                                    content: tm,
                                    placement: em.u.CHANNEL,
                                }),
                                (0, i.jsx)("div", { className: eG.lU, ref: eQ, children: tA }),
                                (0, i.jsx)(u.N_, {
                                    style: eK,
                                    innerRef: ef,
                                    to: eo.BVt.CHANNEL(eo.ME, t.id),
                                    className: eG.nf,
                                    "aria-label": tp,
                                    ...l,
                                    children: (0, i.jsx)(z.A, {
                                        ref: tm,
                                        avatar: (() => {
                                            let e = D._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, i.jsx)(ev.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: E,
                                                        status: _,
                                                    });
                                                else
                                                    return (0, i.jsx)(ew, {
                                                        ...eY,
                                                        src: (0, Y.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: E ? eo.clD.ONLINE : _,
                                                        isTyping: E,
                                                    });
                                            o()(
                                                null != a,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                a.isSystemUser() || (n = (0, k.A)(f) ? eo.clD.STREAMING : _),
                                                (0, i.jsx)(ew, {
                                                    ...eY,
                                                    size: D._3.SIZE_32,
                                                    src: eW,
                                                    avatarDecoration: eH,
                                                    status: n,
                                                    isMobile: v,
                                                    isVR: T,
                                                    isTyping: E,
                                                    "aria-label": a.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: e8 && !e6,
                                        muted: e6,
                                        subText: t.isSystemDM()
                                            ? (0, i.jsx)(j.E, {
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  className: eG.W$,
                                                  children: (0, W.A)(t.id)
                                                      ? ec.intl.string(ec.t.FL5T01)
                                                      : ec.intl.string(ec.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, i.jsx)(j.E, {
                                                    variant: "text-xs/medium",
                                                    color: "none",
                                                    className: eG.W$,
                                                    children: ec.intl.format(ec.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, L.A)({
                                                      activities: f,
                                                      status: _,
                                                      applicationStream: I,
                                                      voiceChannel: R,
                                                  })
                                                ? (0, i.jsx)(B.A, {
                                                      user: a,
                                                      activities: f,
                                                      voiceChannel: R,
                                                      applicationStream: I,
                                                      animateEmoji: U || ee || eA,
                                                      textClassName: eG.XD,
                                                      iconClassName: e6 ? eG.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, i.jsx)(h.A, { className: r()(eG.uN, { [eG.e8]: tg }), children: tA }),
                                        decorators: t.isSystemDM()
                                            ? (0, i.jsx)(F.A, {
                                                  className: eG.G$,
                                                  type: F.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: tg,
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: r()(eG._q, { [eG.EY]: te }),
                                    children: [
                                        e3
                                            ? (0, i.jsx)(eB, {})
                                            : e4
                                              ? (0, i.jsx)(eP, {})
                                              : e1
                                                ? (0, i.jsx)(eL, {})
                                                : null,
                                        tI && null != e7
                                            ? (0, i.jsx)(ek, { channelName: e7, onClick: tR, showNameplate: te })
                                            : null,
                                        tI
                                            ? null
                                            : (0, i.jsx)(eU, {
                                                  icon: G.P,
                                                  "aria-label": eX
                                                      ? ec.intl.string(ec.t["26C4oi"])
                                                      : ec.intl.string(ec.t.jsvgc3),
                                                  onClick: eX ? tc : ts,
                                                  onMouseDown: ta,
                                                  nameplate: x,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: e5,
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        ez && (0, i.jsx)(eE.A, { targetElementRef: ej, markMenuItemPopoverAsDismissed: eV }),
                    ],
                });
            },
        })
    );
}
let eW =
    21552 == n.j
        ? function (e) {
              let { channel: t, selected: n, ...l } = e,
                  s = (0, p.bG)([eb.default], () => eb.default.getUser(t.getRecipientId())),
                  r = s?.id,
                  a = (0, p.cf)([eC.A, eS.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = eC.A.getState().statuses;
                          t.recipients.some((e) => n[e] === eo.clD.ONLINE) && (e = eo.clD.ONLINE);
                      } else null != r && (e = eC.A.getStatus(r));
                      return {
                          status: e,
                          activities: null != r ? eC.A.getActivities(r) : null,
                          applicationStream: null != r ? eS.A.getAnyStreamForUser(r) : null,
                          isMobile: null != r && eC.A.isMobileOnline(r),
                          isVR: null != r && eC.A.isVROnline(r),
                      };
                  }, [t, r]),
                  { voiceChannel: o } = (0, P.Ay)({ userId: r }),
                  u = (0, ed.r)({ user: s }),
                  c = (0, p.bG)(
                      [eb.default, ey.A],
                      () =>
                          t.isMultiUserDM()
                              ? er.default
                                    .keys(ey.A.getTypingUsers(t.id))
                                    .some((e) => e !== eb.default.getCurrentUser()?.id)
                              : null != s && ey.A.isTyping(t.id, t.getRecipientId()),
                      [t, s],
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(eV, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: a.status === eo.clD.ONLINE ? eo.clD.ONLINE : void 0,
                        ...l,
                    })
                  : (0, i.jsx)(eV, {
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

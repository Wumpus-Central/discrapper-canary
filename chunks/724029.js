n.d(t, { z9: () => eV, w_: () => ek, Ay: () => eH, th: () => eB });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    u = n(936504),
    c = n(562708),
    d = n(837381),
    h = n(172218),
    m = n(612324),
    p = n(535185),
    f = n(148839),
    g = n(607399),
    A = n(17928),
    x = n(3026),
    C = n(990078),
    E = n(97808),
    v = n(939249),
    T = n(821609),
    _ = n(366605),
    N = n(952270),
    j = n(428678),
    S = n(661531),
    y = n(549254),
    R = n(912124);
function I(e) {
    let { as: t, muted: n = !1, selected: s = !1, className: l, ...r } = e,
        o = t ?? v.D;
    return (0, i.jsx)(o, { ...r, className: a()(R.bG, l, { [R.SU]: n, [R.wH]: s }) });
}
var b = n(778712),
    M = n(192308),
    O = n(789645),
    w = n(308528),
    U = n(442433),
    k = n(765671),
    P = n(960076),
    D = n(397244),
    L = n(714114),
    F = n(394871),
    G = n(709066),
    V = n(262295),
    B = n(620982),
    H = n(343328),
    Q = n(963027),
    W = n(571694),
    q = n(47167),
    z = n(691540),
    Z = n(857250),
    K = n(97483),
    $ = n(493336),
    Y = n(976860),
    X = n(330001),
    J = n(989349),
    ee = n.n(J),
    et = n(74114),
    en = n(232835),
    ei = n(994500),
    es = n(58703),
    el = n(935208),
    ea = n(746080),
    er = n(652215),
    eo = n(381941),
    eu = n(375708),
    ec = n(449582),
    ed = n(351952),
    eh = n(88686),
    em = n(174755),
    ep = n(187322),
    ef = n(586893);
let eg = s.forwardRef(function (e, t) {
    let { className: n, focusProps: s, ...l } = e;
    return (0, i.jsx)(ep.vN, { ...s, children: (0, i.jsx)("li", { className: a()(n, ef.k), ...l, ref: t }) });
});
var eA = n(824994),
    ex = n(922301),
    eC = n(660184),
    eE = n(414808),
    ev = n(302005),
    eT = n(954376),
    e_ = n(534400),
    eN = n(854627),
    ej = n(616356),
    eS = n(290863),
    ey = n(568548),
    eR = n(741961),
    eI = n(543465),
    eb = n(287809),
    eM = n(19575),
    eO = n(330076);
let ew = eM.Ay.getEnableHardwareAcceleration() ? E.Js : E.eu,
    eU = { offset: { top: 2, bottom: 2, right: 4 } };
function ek(e) {
    let { nameplate: t, icon: n, forceShow: s = !1, reducedClickTarget: l = !1, visibleElementRef: r, ...o } = e,
        u = (0, ed.K)(t);
    return (0, i.jsx)(v.D, {
        className: a()(eO.b, { [eO.DQ]: null != t, [eO.by]: s, [eO.wY]: l }),
        style: u,
        ...o,
        focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: r,
            className: a()({ [eO.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: a()(eO.ut, { [eO.Uq]: null != t }),
            }),
        }),
    });
}
function eP(e) {
    let { onClick: t, channelName: n, showNameplate: s } = e;
    return (0, i.jsx)("div", {
        className: eO.KQ,
        children: (0, i.jsx)(C.m, {
            text: eu.intl.formatToPlainString(eu.t.m0zYbV, { username: n }),
            children: (0, i.jsx)(T.$, {
                size: "sm",
                variant: s ? "overlay-secondary" : "secondary",
                onClick: t,
                text: eu.intl.string(eu.t.pVlP58),
            }),
        }),
    });
}
function eD() {
    return (0, i.jsx)(_.t, { size: "xs", color: "currentColor", className: eO.wB });
}
function eL() {
    return (0, i.jsx)(N.G, { size: "xs", color: "currentColor", className: eO.wB });
}
function eF() {
    return (0, i.jsx)(j.K, { size: "xs", color: "currentColor", className: eO.wB });
}
function eG(e) {
    let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: l,
            hoverGradientStart: a,
            hoverGradientMiddle: r,
            hoverGradientEnd: o,
        } = e,
        u = s.useMemo(
            () =>
                null != a && null != r && null != o
                    ? {
                          Color_GradientCenter: a,
                          Color_InnerRing: r ?? S.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? r,
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
            [n, a, r, o],
        );
    return (0, i.jsx)(y.U, { eventTargetRef: t, className: eO.a1, dataBinding: { ...u, DimmerWidth: (l ?? 0) + 32 } });
}
function eV(e) {
    let {
            route: t,
            selected: n,
            icon: l,
            iconClassName: r,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: h,
            onClick: p,
            className: f,
            role: A,
            "aria-posinset": x,
            "aria-setsize": C,
            listItemRef: E,
            showHoverGradient: v = !1,
            nitroHoverGradient: T = !1,
            hoverGradientStart: _,
            hoverGradientMiddle: N,
            hoverGradientEnd: j,
            ...S
        } = e,
        { width: y, ref: R } = (0, k.Ay)(),
        b = s.useRef(null),
        M = s.useRef(null),
        O = (0, m.A)(E, b);
    return (0, i.jsx)(eg, {
        className: a()(eO.Ix, { [eO.Ij]: g.Fr }, f),
        onClick: p,
        role: A,
        focusProps: { ...eU, focusTarget: M, ringTarget: b },
        "aria-posinset": x,
        "aria-setsize": C,
        ref: O,
        children: (0, i.jsxs)(I, {
            as: "div",
            selected: n,
            className: a()(o, eO.bG, eO.$J, { [eO.Q2]: n }),
            children: [
                v &&
                    (0, i.jsx)(eG, {
                        eventTargetRef: b,
                        isNitro: T,
                        contentWidth: y,
                        hoverGradientStart: _,
                        hoverGradientMiddle: N,
                        hoverGradientEnd: j,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: h },
                    className: eO.nf,
                    innerRef: M,
                    ...S,
                    children: [
                        (0, i.jsx)(V.A, {
                            ref: v ? R : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(l, {
                                size: "refresh_sm",
                                className: a()(eO.e_, r),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: eO.xx,
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
}
function eB(e) {
    let {
            channel: t,
            selected: l = !1,
            user: r,
            activities: g,
            applicationStream: C,
            voiceChannel: E,
            isTyping: v,
            status: T,
            isMobile: _,
            isVR: N,
            nameplate: j,
            ref: S,
            "aria-posinset": y,
            "aria-setsize": R,
        } = e,
        [k, L] = s.useState(!1),
        [J, ec] = s.useState(!1),
        [ed, ep] = s.useState(!1),
        ef = s.useRef(null),
        [ej, eS] = s.useState(!1),
        eR = (0, h.K)(
            s.useCallback((e) => {
                eS(e);
            }, []),
        ),
        eb = s.useRef(null),
        eM = S ?? eb,
        eG = (0, m.A)(eM, eR),
        { showMenuItemPopover: eV, markMenuItemPopoverAsDismissed: eB } = (0, ev.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === l,
            isTargetInViewport: ej,
            channelType: t.type,
        }),
        {
            avatarSrc: eH,
            avatarDecorationSrc: eQ,
            eventHandlers: eW,
        } = (0, eN.A)({ userId: r?.id, size: b._3.SIZE_32, animateOnHover: !(l || k || J || ed) }),
        [eq, ez] = s.useState({ maskImage: "none" }),
        eZ = s.useRef(null),
        eK = t.isMultiUserDM(),
        e$ = t.isSystemDM(),
        eY = !eK && !e$ && t.type === er.rbe.DM,
        eX = eY && r?.primaryGuild != null,
        eJ = (0, A.bG)([eI.Ay], () => eI.Ay.isChannelMuted(t.getGuildId(), t.id)),
        e0 = (0, A.bG)([eI.Ay], () => eI.Ay.isMessagesFavorite(t.id)),
        { ignored: e1, blocked: e2 } = (0, A.cf)([ei.A], () => ({
            ignored: ei.A.isIgnored(t.getRecipientId()),
            blocked: ei.A.isBlocked(t.getRecipientId()),
        })),
        e3 = eY && e1,
        e6 = eY && e2,
        e5 = (eJ || e3 || e6) && !(l || k),
        e4 = (0, A.bG)([ey.Ay], () => ey.Ay.getMentionCount(t.id) > 0),
        e8 = (0, q.Ay)(t),
        e7 = s.useRef(null),
        e9 = null != j && (l || k || ed);
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
    function ts(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null != e && (e.preventDefault(), e.stopPropagation()), w.A.closePrivateChannel(t.id, l, n);
    }
    function tl() {
        w.A.preload(er.ME, t.id);
    }
    function ta(e) {
        e.stopPropagation();
    }
    function tr(e) {
        e.target === e.currentTarget && ef.current?.click();
    }
    let to = (e) => {
        let s =
            "contextmenu" === e.type
                ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        ep(!0),
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
                              n.e("34971"),
                              n.e("42339"),
                              n.e("12520"),
                              n.e("17244"),
                              n.e("46149"),
                              n.e("53416"),
                              n.e("60200"),
                          ]).then(n.bind(n, 4027));
                          return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: l });
                      },
                      { impressionName: s, noBlurEvent: !0, onClose: () => ep(!1) },
                  )
                : (0, U.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("71406"),
                              n.e("41831"),
                              n.e("18078"),
                              n.e("88429"),
                              n.e("94881"),
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
                              n.e("76665"),
                              n.e("35313"),
                              n.e("76273"),
                              n.e("36564"),
                              n.e("34971"),
                              n.e("52229"),
                              n.e("45996"),
                              n.e("792"),
                              n.e("92822"),
                              n.e("23427"),
                              n.e("29422"),
                              n.e("38056"),
                              n.e("9291"),
                              n.e("7059"),
                              n.e("8829"),
                              n.e("42339"),
                              n.e("17244"),
                              n.e("98199"),
                              n.e("41175"),
                              n.e("60816"),
                              n.e("39778"),
                          ]).then(n.bind(n, 385913));
                          return (n) => (0, i.jsx)(e, { ...n, user: r, channel: t, channelSelected: l });
                      },
                      { impressionName: s, onClose: () => ep(!1) },
                  );
    };
    function tu(e) {
        e.preventDefault(), e.stopPropagation();
        let s = eu.intl.formatToPlainString(eu.t.hJ5Ap4, { name: e8 }),
            l = eu.intl.format(eu.t.SSIVOu, { name: e8 });
        t.isManaged() &&
            ((s = eu.intl.formatToPlainString(eu.t.hVGjEW, { name: e8 })),
            (l = eu.intl.format(eu.t.IK1Qvs, { name: e8 }))),
            (0, M.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("70588"), n.e("37803")]).then(n.bind(n, 148166));
                return (t) => (0, i.jsx)(e, { title: s, body: l, onSubmit: ts, ...t });
            });
    }
    let tc = (0, i.jsx)(eC.A, {
            userName: e8,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: k || l || ed ? ex.G.ANIMATED : ex.G.PLAIN,
            loop: k,
            boldFontOpacity: 0.9,
        }),
        td = eX
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      tc,
                      (0, i.jsx)(e_.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(eO.fc, { [eO.Y_]: e5 }),
                      }),
                  ],
              })
            : tc,
        th = s.useRef(null),
        tm = (0, eA.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        { isIncomingCall: tp, isOngoingCall: tf } = (0, B.A)(t.id),
        tg = [
            (0, Q.Ay)({ channel: t, unread: e4, isIncomingCall: tp, isOngoingCall: tf }),
            (0, Q.r2)({ channel: t, muted: eJ, userStatus: T, isFavorite: e0 }),
        ]
            .filter(Boolean)
            .join(", "),
        tA = (0, A.bG)([ey.Ay], () => ey.Ay.lastMessageId(t.id)),
        { waveShouldShow: tx, wavePressed: tC } = (function (e, t) {
            let n,
                i,
                l,
                a,
                r,
                o,
                u,
                c,
                d,
                h,
                [m, p] = s.useState(!1),
                f = s.useCallback(async () => {
                    if (!m) {
                        p(!0),
                            (0, X.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, Y.pX)(er.BVt.CHANNEL(er.ME, e.id));
                        try {
                            await $.A.sendStickers(e.id, ["749054660769218631"], "", { location: eo.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok || 429 !== e.status || (0, z.P0)((0, Z.o)(eu.intl.string(eu.t.Whhv4w), K.Ck.FAILURE));
                        }
                        p(!1);
                    }
                }, [e.id, m]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (l = (0, A.bG)([ei.A], () => null != i && ei.A.isFriend(i))),
                    (a = (0, A.bG)([ei.A], () => null != i && ei.A.isIgnored(i))),
                    (r = (0, A.bG)([en.A], () => {
                        let t = en.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === er.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(ea.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, A.bG)([en.A], () => en.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = el.default.extractTimestamp(e.id)),
                    (d = (0, es.v0)(ee()(), ee()(c), 18144e5)),
                    (h = (0, et.l)(e.id)),
                    n && l && !a && (o || null == t || r) && !u && d && null == h),
                wavePressed: f,
            };
        })(t, tA),
        tE = (0, f.A)(() => {
            let e = eZ.current?.getBoundingClientRect() ?? null,
                t = th.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void ez({ maskImage: "none" });
            let n = t.width - 16;
            ez({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        s.useLayoutEffect(tE, [k, l, tE]),
        (0, p.g)(eM, tE),
        (0, i.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...s } = e;
                return (0, i.jsxs)(eg, {
                    className: a()(eO.Ix, eO.dm),
                    role: n,
                    focusProps: { ...eU, focusTarget: ef, ringTarget: eM },
                    ref: eG,
                    onMouseEnter: te,
                    onMouseLeave: tt,
                    onMouseDown: tl,
                    onFocus: tn,
                    onBlur: ti,
                    onContextMenu: to,
                    "aria-setsize": R,
                    "aria-posinset": y,
                    children: [
                        e4 ? (0, i.jsx)("div", { className: a()(eO.dM, { [eO.SU]: e5 }) }) : null,
                        (0, i.jsxs)(I, {
                            className: a()(eO.bG, { [eO.Q2]: l || ed }),
                            as: "div",
                            onClick: tr,
                            muted: e5,
                            selected: l,
                            children: [
                                (0, i.jsx)(em.A, {
                                    nameplate: e9 ? j : void 0,
                                    selected: l,
                                    hovered: k,
                                    content: th,
                                    placement: eh.u.CHANNEL,
                                }),
                                (0, i.jsx)("div", { className: eO.lU, ref: eZ, children: td }),
                                (0, i.jsx)(u.N_, {
                                    style: eq,
                                    innerRef: ef,
                                    to: er.BVt.CHANNEL(er.ME, t.id),
                                    className: eO.nf,
                                    "aria-label": tg,
                                    ...s,
                                    children: (0, i.jsx)(V.A, {
                                        ref: th,
                                        avatar: (() => {
                                            let e = b._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, i.jsx)(eT.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: v,
                                                        status: T,
                                                    });
                                                else
                                                    return (0, i.jsx)(ew, {
                                                        ...eW,
                                                        src: (0, W.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: v ? er.clD.ONLINE : T,
                                                        isTyping: v,
                                                    });
                                            o()(
                                                null != r,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                r.isSystemUser() || (n = (0, P.A)(g) ? er.clD.STREAMING : T),
                                                (0, i.jsx)(ew, {
                                                    ...eW,
                                                    size: b._3.SIZE_32,
                                                    src: eH,
                                                    avatarDecoration: eQ,
                                                    status: n,
                                                    isMobile: _,
                                                    isVR: N,
                                                    isTyping: v,
                                                    "aria-label": r.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: e4 && !e5,
                                        muted: e5,
                                        subText: t.isSystemDM()
                                            ? (0, i.jsx)("div", {
                                                  className: eO.W$,
                                                  children: (0, H.A)(t.id)
                                                      ? eu.intl.string(eu.t.FL5T01)
                                                      : eu.intl.string(eu.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, i.jsx)("div", {
                                                    className: eO.W$,
                                                    children: eu.intl.format(eu.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, D.A)({
                                                      activities: g,
                                                      status: T,
                                                      applicationStream: C,
                                                      voiceChannel: E,
                                                  })
                                                ? (0, i.jsx)(F.A, {
                                                      user: r,
                                                      activities: g,
                                                      voiceChannel: E,
                                                      applicationStream: C,
                                                      animateEmoji: k || J || ed,
                                                      textClassName: eO.XD,
                                                      iconClassName: e5 ? eO.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, i.jsx)(x.A, { className: a()(eO.uN, { [eO.e8]: tm }), children: td }),
                                        decorators: t.isSystemDM()
                                            ? (0, i.jsx)(G.A, {
                                                  className: eO.G$,
                                                  type: G.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: tm,
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: a()(eO._q, { [eO.EY]: e9 }),
                                    children: [
                                        e6
                                            ? (0, i.jsx)(eF, {})
                                            : e3
                                              ? (0, i.jsx)(eL, {})
                                              : e0
                                                ? (0, i.jsx)(eD, {})
                                                : null,
                                        tx && null != e8
                                            ? (0, i.jsx)(eP, { channelName: e8, onClick: tC, showNameplate: e9 })
                                            : null,
                                        tx
                                            ? null
                                            : (0, i.jsx)(ek, {
                                                  icon: O.P,
                                                  "aria-label": eK
                                                      ? eu.intl.string(eu.t["26C4oi"])
                                                      : eu.intl.string(eu.t.jsvgc3),
                                                  onClick: eK ? tu : ts,
                                                  onMouseDown: ta,
                                                  nameplate: j,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: e7,
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        eV && (0, i.jsx)(eE.A, { targetElementRef: eM, markMenuItemPopoverAsDismissed: eB }),
                    ],
                });
            },
        })
    );
}
let eH =
    21552 == n.j
        ? function (e) {
              let { channel: t, selected: n, ...s } = e,
                  l = (0, A.bG)([eb.default], () => eb.default.getUser(t.getRecipientId())),
                  a = l?.id,
                  r = (0, A.cf)([eS.A, ej.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = eS.A.getState().statuses;
                          t.recipients.some((e) => n[e] === er.clD.ONLINE) && (e = er.clD.ONLINE);
                      } else null != a && (e = eS.A.getStatus(a));
                      return {
                          status: e,
                          activities: null != a ? eS.A.getActivities(a) : null,
                          applicationStream: null != a ? ej.A.getAnyStreamForUser(a) : null,
                          isMobile: null != a && eS.A.isMobileOnline(a),
                          isVR: null != a && eS.A.isVROnline(a),
                      };
                  }, [t, a]),
                  { voiceChannel: o } = (0, L.Ay)({ userId: a }),
                  u = (0, ec.r)({ user: l }),
                  c = (0, A.bG)(
                      [eb.default, eR.A],
                      () =>
                          t.isMultiUserDM()
                              ? el.default
                                    .keys(eR.A.getTypingUsers(t.id))
                                    .some((e) => e !== eb.default.getCurrentUser()?.id)
                              : null != l && eR.A.isTyping(t.id, t.getRecipientId()),
                      [t, l],
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(eB, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: r.status === er.clD.ONLINE ? er.clD.ONLINE : void 0,
                        ...s,
                    })
                  : (0, i.jsx)(eB, {
                        channel: t,
                        selected: n,
                        user: l,
                        voiceChannel: o,
                        isTyping: c,
                        nameplate: u,
                        ...s,
                        ...r,
                    });
          }
        : null;

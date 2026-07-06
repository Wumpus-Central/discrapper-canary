n.d(t, { z9: () => eV, w_: () => ek, Ay: () => eW, th: () => eH });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(936504),
    c = n(562708),
    u = n(837381),
    h = n(172218),
    p = n(612324),
    m = n(535185),
    f = n(148839),
    g = n(607399),
    A = n(17928),
    x = n(3026),
    v = n(990078),
    E = n(97808),
    T = n(939249),
    C = n(821609),
    _ = n(366605),
    N = n(952270),
    I = n(428678),
    j = n(661531),
    S = n(549254),
    y = n(912124);
function b(e) {
    let { as: t, muted: n = !1, selected: l = !1, className: s, ...r } = e,
        o = t ?? T.D;
    return (0, i.jsx)(o, { ...r, className: a()(y.bG, s, { [y.SU]: n, [y.wH]: l }) });
}
var M = n(778712),
    R = n(192308),
    w = n(789645),
    O = n(308528),
    D = n(442433),
    k = n(765671),
    P = n(960076),
    U = n(397244),
    L = n(714114),
    G = n(394871),
    F = n(709066),
    V = n(262295),
    H = n(620982),
    W = n(343328),
    B = n(963027),
    z = n(571694),
    Z = n(47167),
    K = n(691540),
    q = n(857250),
    Y = n(97483),
    J = n(493336),
    X = n(976860),
    $ = n(330001),
    Q = n(989349),
    ee = n.n(Q),
    et = n(74114),
    en = n(232835),
    ei = n(994500),
    el = n(58703),
    es = n(935208),
    ea = n(746080),
    er = n(652215),
    eo = n(381941),
    ed = n(375708),
    ec = n(449582),
    eu = n(351952),
    eh = n(88686),
    ep = n(174755),
    em = n(187322),
    ef = n(586893);
let eg = l.forwardRef(function (e, t) {
    let { className: n, focusProps: l, ...s } = e;
    return (0, i.jsx)(em.vN, { ...l, children: (0, i.jsx)("li", { className: a()(n, ef.k), ...s, ref: t }) });
});
var eA = n(824994),
    ex = n(922301),
    ev = n(660184),
    eE = n(414808),
    eT = n(302005),
    eC = n(954376),
    e_ = n(534400),
    eN = n(854627),
    eI = n(616356),
    ej = n(290863),
    eS = n(568548),
    ey = n(741961),
    eb = n(543465),
    eM = n(287809),
    eR = n(19575),
    ew = n(330076);
let eO = eR.Ay.getEnableHardwareAcceleration() ? E.Js : E.eu,
    eD = { offset: { top: 2, bottom: 2, right: 4 } };
function ek(e) {
    let { nameplate: t, icon: n, forceShow: l = !1, reducedClickTarget: s = !1, visibleElementRef: r, ...o } = e,
        d = (0, eu.K)(t);
    return (0, i.jsx)(T.D, {
        className: a()(ew.b, { [ew.DQ]: null != t, [ew.by]: l, [ew.wY]: s }),
        style: d,
        ...o,
        focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: r,
            className: a()({ [ew.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: a()(ew.ut, { [ew.Uq]: null != t }),
            }),
        }),
    });
}
function eP(e) {
    let { onClick: t, channelName: n, showNameplate: l } = e;
    return (0, i.jsx)("div", {
        className: ew.KQ,
        children: (0, i.jsx)(v.m, {
            text: ed.intl.formatToPlainString(ed.t.m0zYbV, { username: n }),
            children: (0, i.jsx)(C.$, {
                size: "sm",
                variant: l ? "overlay-secondary" : "secondary",
                onClick: t,
                text: ed.intl.string(ed.t.pVlP58),
            }),
        }),
    });
}
function eU() {
    return (0, i.jsx)(_.t, { size: "xs", color: "currentColor", className: ew.wB });
}
function eL() {
    return (0, i.jsx)(N.G, { size: "xs", color: "currentColor", className: ew.wB });
}
function eG() {
    return (0, i.jsx)(I.K, { size: "xs", color: "currentColor", className: ew.wB });
}
function eF(e) {
    let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: s,
            hoverGradientStart: a,
            hoverGradientMiddle: r,
            hoverGradientEnd: o,
        } = e,
        d = l.useMemo(
            () =>
                null != a && null != r && null != o
                    ? {
                          Color_GradientCenter: a,
                          Color_InnerRing: r ?? j.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? r,
                          Color_OuterRing: o,
                          NitroVFX: !1,
                      }
                    : n
                      ? {
                            Color_GradientCenter: j.A.colors.NITRO_TAB_GRADIENT_CENTER,
                            Color_InnerRing: j.A.colors.NITRO_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: j.A.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !0,
                        }
                      : {
                            Color_GradientCenter: j.A.colors.STANDARD_TAB_GRADIENT_CENTER,
                            Color_InnerRing: j.A.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: j.A.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !1,
                        },
            [n, a, r, o],
        );
    return (0, i.jsx)(S.U, { eventTargetRef: t, className: ew.a1, dataBinding: { ...d, DimmerWidth: (s ?? 0) + 32 } });
}
function eV(e) {
    let {
            route: t,
            selected: n,
            icon: s,
            iconClassName: r,
            interactiveClassName: o,
            text: c,
            children: u,
            locationState: h,
            onClick: m,
            className: f,
            role: A,
            "aria-posinset": x,
            "aria-setsize": v,
            listItemRef: E,
            showHoverGradient: T = !1,
            nitroHoverGradient: C = !1,
            hoverGradientStart: _,
            hoverGradientMiddle: N,
            hoverGradientEnd: I,
            ...j
        } = e,
        { width: S, ref: y } = (0, k.Ay)(),
        M = l.useRef(null),
        R = l.useRef(null),
        w = (0, p.A)(E, M);
    return (0, i.jsx)(eg, {
        className: a()(ew.Ix, { [ew.Ij]: g.Fr }, f),
        onClick: m,
        role: A,
        focusProps: { ...eD, focusTarget: R, ringTarget: M },
        "aria-posinset": x,
        "aria-setsize": v,
        ref: w,
        children: (0, i.jsxs)(b, {
            as: "div",
            selected: n,
            className: a()(o, ew.bG, ew.$J, { [ew.Q2]: n }),
            children: [
                T &&
                    (0, i.jsx)(eF, {
                        eventTargetRef: M,
                        isNitro: C,
                        contentWidth: S,
                        hoverGradientStart: _,
                        hoverGradientMiddle: N,
                        hoverGradientEnd: I,
                    }),
                (0, i.jsxs)(d.N_, {
                    to: { pathname: t, state: h },
                    className: ew.nf,
                    innerRef: R,
                    ...j,
                    children: [
                        (0, i.jsx)(V.A, {
                            ref: T ? y : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(s, {
                                size: "refresh_sm",
                                className: a()(ew.e_, r),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: ew.xx,
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
            selected: s = !1,
            user: r,
            activities: g,
            applicationStream: v,
            voiceChannel: E,
            isTyping: T,
            status: C,
            isMobile: _,
            isVR: N,
            nameplate: I,
            ref: j,
            "aria-posinset": S,
            "aria-setsize": y,
        } = e,
        [k, L] = l.useState(!1),
        [Q, ec] = l.useState(!1),
        [eu, em] = l.useState(!1),
        ef = l.useRef(null),
        [eI, ej] = l.useState(!1),
        ey = (0, h.K)(
            l.useCallback((e) => {
                ej(e);
            }, []),
        ),
        eM = l.useRef(null),
        eR = j ?? eM,
        eF = (0, p.A)(eR, ey),
        { showMenuItemPopover: eV, markMenuItemPopoverAsDismissed: eH } = (0, eT.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === s,
            isTargetInViewport: eI,
            channelType: t.type,
        }),
        {
            avatarSrc: eW,
            avatarDecorationSrc: eB,
            eventHandlers: ez,
        } = (0, eN.A)({ userId: r?.id, size: M._3.SIZE_32, animateOnHover: !(s || k || Q || eu) }),
        [eZ, eK] = l.useState({ maskImage: "none" }),
        eq = l.useRef(null),
        eY = t.isMultiUserDM(),
        eJ = t.isSystemDM(),
        eX = !eY && !eJ && t.type === er.rbe.DM,
        e$ = eX && r?.primaryGuild != null,
        eQ = (0, A.bG)([eb.Ay], () => eb.Ay.isChannelMuted(t.getGuildId(), t.id)),
        e0 = (0, A.bG)([eb.Ay], () => eb.Ay.isMessagesFavorite(t.id)),
        { ignored: e1, blocked: e2 } = (0, A.cf)([ei.A], () => ({
            ignored: ei.A.isIgnored(t.getRecipientId()),
            blocked: ei.A.isBlocked(t.getRecipientId()),
        })),
        e3 = eX && e1,
        e5 = eX && e2,
        e4 = (eQ || e3 || e5) && !(s || k),
        e6 = (0, A.bG)([eS.Ay], () => eS.Ay.getMentionCount(t.id) > 0),
        e8 = (0, Z.Ay)(t),
        e7 = l.useRef(null),
        e9 = null != I && (s || k || eu);
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
        null != e && (e.preventDefault(), e.stopPropagation()), O.A.closePrivateChannel(t.id, s, n);
    }
    function ts() {
        O.A.preload(er.ME, t.id);
    }
    function ta(e) {
        e.stopPropagation();
    }
    function tr(e) {
        e.target === e.currentTarget && ef.current?.click();
    }
    let to = (e) => {
        let l =
            "contextmenu" === e.type
                ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        em(!0),
            t.isMultiUserDM()
                ? (0, D.L3)(
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
                          return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: s });
                      },
                      { impressionName: l, noBlurEvent: !0, onClose: () => em(!1) },
                  )
                : (0, D.L3)(
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
                          return (n) => (0, i.jsx)(e, { ...n, user: r, channel: t, channelSelected: s });
                      },
                      { impressionName: l, onClose: () => em(!1) },
                  );
    };
    function td(e) {
        e.preventDefault(), e.stopPropagation();
        let l = ed.intl.formatToPlainString(ed.t.hJ5Ap4, { name: e8 }),
            s = ed.intl.format(ed.t.SSIVOu, { name: e8 });
        t.isManaged() &&
            ((l = ed.intl.formatToPlainString(ed.t.hVGjEW, { name: e8 })),
            (s = ed.intl.format(ed.t.IK1Qvs, { name: e8 }))),
            (0, R.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("70588"), n.e("37803")]).then(n.bind(n, 148166));
                return (t) => (0, i.jsx)(e, { title: l, body: s, onSubmit: tl, ...t });
            });
    }
    let tc = (0, i.jsx)(ev.A, {
            userName: e8,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: k || s || eu ? ex.G.ANIMATED : ex.G.PLAIN,
            loop: k,
            boldFontOpacity: 0.9,
        }),
        tu = e$
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      tc,
                      (0, i.jsx)(e_.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(ew.fc, { [ew.Y_]: e4 }),
                      }),
                  ],
              })
            : tc,
        th = l.useRef(null),
        tp = (0, eA.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        { isIncomingCall: tm, isOngoingCall: tf } = (0, H.A)(t.id),
        tg = [
            (0, B.Ay)({ channel: t, unread: e6, isIncomingCall: tm, isOngoingCall: tf }),
            (0, B.r2)({ channel: t, muted: eQ, userStatus: C, isFavorite: e0 }),
        ]
            .filter(Boolean)
            .join(", "),
        tA = (0, A.bG)([eS.Ay], () => eS.Ay.lastMessageId(t.id)),
        { waveShouldShow: tx, wavePressed: tv } = (function (e, t) {
            let n,
                i,
                s,
                a,
                r,
                o,
                d,
                c,
                u,
                h,
                [p, m] = l.useState(!1),
                f = l.useCallback(async () => {
                    if (!p) {
                        m(!0),
                            (0, $.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, X.pX)(er.BVt.CHANNEL(er.ME, e.id));
                        try {
                            await J.A.sendStickers(e.id, ["749054660769218631"], "", { location: eo.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok || 429 !== e.status || (0, K.P0)((0, q.o)(ed.intl.string(ed.t.Whhv4w), Y.Ck.FAILURE));
                        }
                        m(!1);
                    }
                }, [e.id, p]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (s = (0, A.bG)([ei.A], () => null != i && ei.A.isFriend(i))),
                    (a = (0, A.bG)([ei.A], () => null != i && ei.A.isIgnored(i))),
                    (r = (0, A.bG)([en.A], () => {
                        let t = en.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === er.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(ea.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (d = (0, A.bG)([en.A], () => en.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = es.default.extractTimestamp(e.id)),
                    (u = (0, el.v0)(ee()(), ee()(c), 18144e5)),
                    (h = (0, et.l)(e.id)),
                    n && s && !a && (o || null == t || r) && !d && u && null == h),
                wavePressed: f,
            };
        })(t, tA),
        tE = (0, f.A)(() => {
            let e = eq.current?.getBoundingClientRect() ?? null,
                t = th.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void eK({ maskImage: "none" });
            let n = t.width - 16;
            eK({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        l.useLayoutEffect(tE, [k, s, tE]),
        (0, m.g)(eR, tE),
        (0, i.jsx)(u.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...l } = e;
                return (0, i.jsxs)(eg, {
                    className: a()(ew.Ix, ew.dm),
                    role: n,
                    focusProps: { ...eD, focusTarget: ef, ringTarget: eR },
                    ref: eF,
                    onMouseEnter: te,
                    onMouseLeave: tt,
                    onMouseDown: ts,
                    onFocus: tn,
                    onBlur: ti,
                    onContextMenu: to,
                    "aria-setsize": y,
                    "aria-posinset": S,
                    children: [
                        e6 ? (0, i.jsx)("div", { className: a()(ew.dM, { [ew.SU]: e4 }) }) : null,
                        (0, i.jsxs)(b, {
                            className: a()(ew.bG, { [ew.Q2]: s || eu }),
                            as: "div",
                            onClick: tr,
                            muted: e4,
                            selected: s,
                            children: [
                                (0, i.jsx)(ep.A, {
                                    nameplate: e9 ? I : void 0,
                                    selected: s,
                                    hovered: k,
                                    content: th,
                                    placement: eh.u.CHANNEL,
                                }),
                                (0, i.jsx)("div", { className: ew.lU, ref: eq, children: tu }),
                                (0, i.jsx)(d.N_, {
                                    style: eZ,
                                    innerRef: ef,
                                    to: er.BVt.CHANNEL(er.ME, t.id),
                                    className: ew.nf,
                                    "aria-label": tg,
                                    ...l,
                                    children: (0, i.jsx)(V.A, {
                                        ref: th,
                                        avatar: (() => {
                                            let e = M._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, i.jsx)(eC.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: T,
                                                        status: C,
                                                    });
                                                else
                                                    return (0, i.jsx)(eO, {
                                                        ...ez,
                                                        src: (0, z.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: T ? er.clD.ONLINE : C,
                                                        isTyping: T,
                                                    });
                                            o()(
                                                null != r,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                r.isSystemUser() || (n = (0, P.A)(g) ? er.clD.STREAMING : C),
                                                (0, i.jsx)(eO, {
                                                    ...ez,
                                                    size: M._3.SIZE_32,
                                                    src: eW,
                                                    avatarDecoration: eB,
                                                    status: n,
                                                    isMobile: _,
                                                    isVR: N,
                                                    isTyping: T,
                                                    "aria-label": r.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: e6 && !e4,
                                        muted: e4,
                                        subText: t.isSystemDM()
                                            ? (0, i.jsx)("div", {
                                                  className: ew.W$,
                                                  children: (0, W.A)(t.id)
                                                      ? ed.intl.string(ed.t.FL5T01)
                                                      : ed.intl.string(ed.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, i.jsx)("div", {
                                                    className: ew.W$,
                                                    children: ed.intl.format(ed.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, U.A)({
                                                      activities: g,
                                                      status: C,
                                                      applicationStream: v,
                                                      voiceChannel: E,
                                                  })
                                                ? (0, i.jsx)(G.A, {
                                                      user: r,
                                                      activities: g,
                                                      voiceChannel: E,
                                                      applicationStream: v,
                                                      animateEmoji: k || Q || eu,
                                                      textClassName: ew.XD,
                                                      iconClassName: e4 ? ew.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, i.jsx)(x.A, { className: a()(ew.uN, { [ew.e8]: tp }), children: tu }),
                                        decorators: t.isSystemDM()
                                            ? (0, i.jsx)(F.A, {
                                                  className: ew.G$,
                                                  type: F.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: tp,
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: a()(ew._q, { [ew.EY]: e9 }),
                                    children: [
                                        e5
                                            ? (0, i.jsx)(eG, {})
                                            : e3
                                              ? (0, i.jsx)(eL, {})
                                              : e0
                                                ? (0, i.jsx)(eU, {})
                                                : null,
                                        tx && null != e8
                                            ? (0, i.jsx)(eP, { channelName: e8, onClick: tv, showNameplate: e9 })
                                            : null,
                                        tx
                                            ? null
                                            : (0, i.jsx)(ek, {
                                                  icon: w.P,
                                                  "aria-label": eY
                                                      ? ed.intl.string(ed.t["26C4oi"])
                                                      : ed.intl.string(ed.t.jsvgc3),
                                                  onClick: eY ? td : tl,
                                                  onMouseDown: ta,
                                                  nameplate: I,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: e7,
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        eV && (0, i.jsx)(eE.A, { targetElementRef: eR, markMenuItemPopoverAsDismissed: eH }),
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
                  s = (0, A.bG)([eM.default], () => eM.default.getUser(t.getRecipientId())),
                  a = s?.id,
                  r = (0, A.cf)([ej.A, eI.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = ej.A.getState().statuses;
                          t.recipients.some((e) => n[e] === er.clD.ONLINE) && (e = er.clD.ONLINE);
                      } else null != a && (e = ej.A.getStatus(a));
                      return {
                          status: e,
                          activities: null != a ? ej.A.getActivities(a) : null,
                          applicationStream: null != a ? eI.A.getAnyStreamForUser(a) : null,
                          isMobile: null != a && ej.A.isMobileOnline(a),
                          isVR: null != a && ej.A.isVROnline(a),
                      };
                  }, [t, a]),
                  { voiceChannel: o } = (0, L.Ay)({ userId: a }),
                  d = (0, ec.r)({ user: s }),
                  c = (0, A.bG)(
                      [eM.default, ey.A],
                      () =>
                          t.isMultiUserDM()
                              ? es.default
                                    .keys(ey.A.getTypingUsers(t.id))
                                    .some((e) => e !== eM.default.getCurrentUser()?.id)
                              : null != s && ey.A.isTyping(t.id, t.getRecipientId()),
                      [t, s],
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(eH, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: r.status === er.clD.ONLINE ? er.clD.ONLINE : void 0,
                        ...l,
                    })
                  : (0, i.jsx)(eH, {
                        channel: t,
                        selected: n,
                        user: s,
                        voiceChannel: o,
                        isTyping: c,
                        nameplate: d,
                        ...l,
                        ...r,
                    });
          }
        : null;

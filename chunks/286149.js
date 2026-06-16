n.d(t, { z9: () => eB, w_: () => eP, Ay: () => eQ, th: () => eH });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
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
    x = n(780645),
    C = n(990078),
    E = n(97808),
    v = n(939249),
    T = n(821609),
    j = n(366605),
    _ = n(952270),
    N = n(428678),
    S = n(661531),
    y = n(549254),
    R = n(912124);
function I(e) {
    let { as: t, muted: n = !1, selected: l = !1, className: s, ...r } = e,
        o = t ?? v.D;
    return (0, i.jsx)(o, { ...r, className: a()(R.bG, s, { [R.SU]: n, [R.wH]: l }) });
}
var b = n(778712),
    M = n(192308),
    w = n(789645),
    O = n(308528),
    U = n(442433),
    D = n(765671),
    P = n(960076),
    k = n(397244),
    L = n(714114),
    F = n(394871),
    G = n(709066),
    V = n(262295),
    B = n(620982),
    H = n(343328);
let Q = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-channel-wave-button",
    defaultConfig: { enabled: !1, showClose: !0 },
    variations: { 1: { enabled: !0, showClose: !1 }, 2: { enabled: !0, showClose: !0 } },
});
var W = n(963027),
    z = n(571694),
    q = n(47167),
    Z = n(691540),
    K = n(857250),
    $ = n(97483),
    Y = n(720149),
    X = n(976860),
    J = n(330001),
    ee = n(989349),
    et = n.n(ee),
    en = n(74114),
    ei = n(232835),
    el = n(994500),
    es = n(58703),
    ea = n(935208),
    er = n(746080),
    eo = n(652215),
    eu = n(381941),
    ec = n(375708),
    ed = n(449582),
    eh = n(351952),
    em = n(88686),
    ep = n(174755),
    ef = n(187322),
    eg = n(586893);
let eA = l.forwardRef(function (e, t) {
    let { className: n, focusProps: l, ...s } = e;
    return (0, i.jsx)(ef.vN, { ...l, children: (0, i.jsx)("li", { className: a()(n, eg.k), ...s, ref: t }) });
});
var ex = n(824994),
    eC = n(922301),
    eE = n(660184),
    ev = n(414808),
    eT = n(302005),
    ej = n(954376),
    e_ = n(534400),
    eN = n(854627),
    eS = n(616356),
    ey = n(290863),
    eR = n(222823),
    eI = n(741961),
    eb = n(543465),
    eM = n(287809),
    ew = n(19575),
    eO = n(330076);
let eU = ew.Ay.getEnableHardwareAcceleration() ? E.Js : E.eu,
    eD = { offset: { top: 2, bottom: 2, right: 4 } },
    eP = (e) => {
        let { nameplate: t, icon: n, forceShow: l = !1, reducedClickTarget: s = !1, visibleElementRef: r, ...o } = e,
            u = (0, eh.K)(t);
        return (0, i.jsx)(v.D, {
            className: a()(eO.b, { [eO.DQ]: null != t, [eO.by]: l, [eO.wY]: s }),
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
    },
    ek = (e) => {
        let { onClick: t, channelName: n, showNameplate: l } = e,
            { enabled: s } = Q.useConfig({ location: "Wave CTA" });
        return s
            ? (0, i.jsx)("div", {
                  className: eO.KQ,
                  children: (0, i.jsx)(C.m, {
                      text: ec.intl.formatToPlainString(ec.t.m0zYbV, { username: n }),
                      children: (0, i.jsx)(T.$, {
                          size: "sm",
                          variant: l ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: ec.intl.string(ec.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    eL = () => (0, i.jsx)(j.t, { size: "xs", color: "currentColor", className: eO.wB }),
    eF = () => (0, i.jsx)(_.G, { size: "xs", color: "currentColor", className: eO.wB }),
    eG = () => (0, i.jsx)(N.K, { size: "xs", color: "currentColor", className: eO.wB });
function eV(e) {
    let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: s,
            hoverGradientStart: a,
            hoverGradientMiddle: r,
            hoverGradientEnd: o,
        } = e,
        u = l.useMemo(
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
    return (0, i.jsx)(y.U, { eventTargetRef: t, className: eO.a1, dataBinding: { ...u, DimmerWidth: (s ?? 0) + 32 } });
}
let eB = (e) => {
    let {
            route: t,
            selected: n,
            icon: s,
            iconClassName: r,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: h,
            onClick: m,
            className: p,
            role: f,
            "aria-posinset": A,
            "aria-setsize": x,
            listItemRef: C,
            showHoverGradient: E = !1,
            nitroHoverGradient: v = !1,
            hoverGradientStart: T,
            hoverGradientMiddle: j,
            hoverGradientEnd: _,
            ...N
        } = e,
        { width: S, ref: y } = (0, D.Ay)(),
        R = l.useRef(null),
        b = C ?? R;
    return (0, i.jsx)(eA, {
        className: a()(eO.Ix, { [eO.Ij]: g.Fr }, p),
        onClick: m,
        role: f,
        focusProps: { within: !0, ...eD },
        "aria-posinset": A,
        "aria-setsize": x,
        ref: b,
        children: (0, i.jsxs)(I, {
            as: "div",
            selected: n,
            className: a()(o, eO.bG, eO.$J, { [eO.Q2]: n }),
            children: [
                E &&
                    (0, i.jsx)(eV, {
                        eventTargetRef: b,
                        isNitro: v,
                        contentWidth: S,
                        hoverGradientStart: T,
                        hoverGradientMiddle: j,
                        hoverGradientEnd: _,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: h },
                    className: eO.nf,
                    ...N,
                    children: [
                        (0, i.jsx)(V.A, {
                            ref: E ? y : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(s, {
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
};
function eH(e) {
    let {
            channel: t,
            selected: s = !1,
            user: r,
            activities: g,
            applicationStream: C,
            voiceChannel: E,
            isTyping: v,
            status: T,
            isMobile: j,
            isVR: _,
            nameplate: N,
            ref: S,
            "aria-posinset": y,
            "aria-setsize": R,
        } = e,
        [D, L] = l.useState(!1),
        [ee, ed] = l.useState(!1),
        [eh, ef] = l.useState(!1),
        eg = l.useRef(null),
        [eS, ey] = l.useState(!1),
        eI = (0, h.K)(
            l.useCallback((e) => {
                ey(e);
            }, []),
        ),
        eM = l.useRef(null),
        ew = S ?? eM,
        eV = (0, m.A)(ew, eI),
        { showMenuItemPopover: eB, markMenuItemPopoverAsDismissed: eH } = (0, eT.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === s,
            isTargetInViewport: eS,
            channelType: t.type,
        }),
        {
            avatarSrc: eQ,
            avatarDecorationSrc: eW,
            eventHandlers: ez,
        } = (0, eN.A)({ userId: r?.id, size: b._3.SIZE_32, animateOnHover: !(s || D || ee || eh) }),
        [eq, eZ] = l.useState({ maskImage: "none" }),
        eK = l.useRef(null),
        e$ = t.isMultiUserDM(),
        eY = t.isSystemDM(),
        eX = !e$ && !eY && t.type === eo.rbe.DM,
        eJ = eX && r?.primaryGuild != null,
        e0 = (0, A.bG)([eb.Ay], () => eb.Ay.isChannelMuted(t.getGuildId(), t.id)),
        e1 = (0, A.bG)([eb.Ay], () => eb.Ay.isMessagesFavorite(t.id)),
        { ignored: e2, blocked: e3 } = (0, A.cf)([el.A], () => ({
            ignored: el.A.isIgnored(t.getRecipientId()),
            blocked: el.A.isBlocked(t.getRecipientId()),
        })),
        e6 = eX && e2,
        e4 = eX && e3,
        e5 = (e0 || e6 || e4) && !(s || D),
        e8 = (0, A.bG)([eR.Ay], () => eR.Ay.getMentionCount(t.id) > 0),
        e7 = (0, q.Ay)(t),
        e9 = l.useRef(null),
        te = null != N && (s || D || eh),
        tt = () => {
            L(!0);
        },
        tn = () => {
            L(!1);
        },
        ti = () => {
            ed(!0);
        },
        tl = () => {
            ed(!1);
        },
        ts = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), O.A.closePrivateChannel(t.id, s, n);
        },
        ta = () => {
            O.A.preload(eo.ME, t.id);
        },
        tr = (e) => {
            e.stopPropagation();
        },
        to = (e) => {
            e.target === e.currentTarget && eg.current?.click();
        },
        tu = (e) => {
            let l =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ef(!0),
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
                              return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: s });
                          },
                          { impressionName: l, noBlurEvent: !0, onClose: () => ef(!1) },
                      )
                    : (0, U.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("21277"),
                                  n.e("60513"),
                                  n.e("45043"),
                                  n.e("2677"),
                                  n.e("47141"),
                                  n.e("94881"),
                                  n.e("26132"),
                                  n.e("46652"),
                                  n.e("93190"),
                                  n.e("34552"),
                                  n.e("93103"),
                                  n.e("8757"),
                                  n.e("91763"),
                                  n.e("85968"),
                                  n.e("89673"),
                                  n.e("68403"),
                                  n.e("29787"),
                                  n.e("71210"),
                                  n.e("82073"),
                                  n.e("97558"),
                                  n.e("38730"),
                                  n.e("88342"),
                                  n.e("91994"),
                                  n.e("89421"),
                                  n.e("76665"),
                                  n.e("98965"),
                                  n.e("76273"),
                                  n.e("35313"),
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
                          { impressionName: l, onClose: () => ef(!1) },
                      );
        },
        tc = (e) => {
            e.preventDefault(), e.stopPropagation();
            let l = ec.intl.formatToPlainString(ec.t.hJ5Ap4, { name: e7 }),
                s = ec.intl.format(ec.t.SSIVOu, { name: e7 });
            t.isManaged() &&
                ((l = ec.intl.formatToPlainString(ec.t.hVGjEW, { name: e7 })),
                (s = ec.intl.format(ec.t.IK1Qvs, { name: e7 }))),
                (0, M.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("70588"), n.e("37803")]).then(n.bind(n, 148166));
                    return (t) => (0, i.jsx)(e, { title: l, body: s, onSubmit: ts, ...t });
                });
        },
        td = (0, i.jsx)(eE.A, {
            userName: e7,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: D || s || eh ? eC.G.ANIMATED : eC.G.PLAIN,
            loop: D,
            boldFontOpacity: 0.9,
        }),
        th = eJ
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      td,
                      (0, i.jsx)(e_.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(eO.fc, { [eO.Y_]: e5 }),
                      }),
                  ],
              })
            : td,
        tm = l.useRef(null),
        tp = (0, ex.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        { isIncomingCall: tf, isOngoingCall: tg } = (0, B.A)(t.id),
        tA = [
            (0, W.Ay)({ channel: t, unread: e8, isIncomingCall: tf, isOngoingCall: tg }),
            (0, W.r2)({ channel: t, muted: e0, userStatus: T, isFavorite: e1 }),
        ]
            .filter(Boolean)
            .join(", "),
        tx = (0, A.bG)([eR.Ay], () => eR.Ay.lastMessageId(t.id)),
        { waveShouldShow: tC, wavePressed: tE } = (function (e, t) {
            let n,
                i,
                s,
                a,
                r,
                o,
                u,
                c,
                d,
                h,
                [m, p] = l.useState(!1),
                f = l.useCallback(async () => {
                    if (!m) {
                        p(!0),
                            (0, J.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, X.pX)(eo.BVt.CHANNEL(eo.ME, e.id));
                        try {
                            await Y.A.sendStickers(e.id, ["749054660769218631"], "", { location: eu.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok || 429 !== e.status || (0, Z.P0)((0, K.o)(ec.intl.string(ec.t.Whhv4w), $.Ck.FAILURE));
                        }
                        p(!1);
                    }
                }, [e.id, m]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (s = (0, A.bG)([el.A], () => null != i && el.A.isFriend(i))),
                    (a = (0, A.bG)([el.A], () => null != i && el.A.isIgnored(i))),
                    (r = (0, A.bG)([ei.A], () => {
                        let t = ei.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === eo.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(er.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, A.bG)([ei.A], () => ei.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = ea.default.extractTimestamp(e.id)),
                    (d = (0, es.v0)(et()(), et()(c), 18144e5)),
                    (h = (0, en.l)(e.id)),
                    n && s && !a && (o || null == t || r) && !u && d && null == h),
                wavePressed: f,
            };
        })(t, tx),
        { showClose: tv } = Q.useConfig({ location: "PrivateChannel" }),
        tT = (0, f.A)(() => {
            let e = eK.current?.getBoundingClientRect() ?? null,
                t = tm.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void eZ({ maskImage: "none" });
            let n = t.width - 16;
            eZ({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        l.useLayoutEffect(tT, [D, s, tT]),
        (0, p.g)(ew, tT),
        (0, i.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...l } = e;
                return (0, i.jsxs)(eA, {
                    className: a()(eO.Ix, eO.dm),
                    role: n,
                    focusProps: { ...eD, focusTarget: eg, ringTarget: ew },
                    ref: eV,
                    onMouseEnter: tt,
                    onMouseLeave: tn,
                    onMouseDown: ta,
                    onFocus: ti,
                    onBlur: tl,
                    onContextMenu: tu,
                    "aria-setsize": R,
                    "aria-posinset": y,
                    children: [
                        e8 ? (0, i.jsx)("div", { className: a()(eO.dM, { [eO.SU]: e5 }) }) : null,
                        (0, i.jsxs)(I, {
                            className: a()(eO.bG, { [eO.Q2]: s || eh }),
                            as: "div",
                            onClick: to,
                            muted: e5,
                            selected: s,
                            children: [
                                (0, i.jsx)(ep.A, {
                                    nameplate: te ? N : void 0,
                                    selected: s,
                                    hovered: D,
                                    content: tm,
                                    placement: em.u.CHANNEL,
                                }),
                                (0, i.jsx)("div", { className: eO.lU, ref: eK, children: th }),
                                (0, i.jsx)(u.N_, {
                                    style: eq,
                                    innerRef: eg,
                                    to: eo.BVt.CHANNEL(eo.ME, t.id),
                                    className: eO.nf,
                                    "aria-label": tA,
                                    ...l,
                                    children: (0, i.jsx)(V.A, {
                                        ref: tm,
                                        avatar: (() => {
                                            let e = b._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, i.jsx)(ej.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: v,
                                                        status: T,
                                                    });
                                                else
                                                    return (0, i.jsx)(eU, {
                                                        ...ez,
                                                        src: (0, z.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: v ? eo.clD.ONLINE : T,
                                                        isTyping: v,
                                                    });
                                            o()(
                                                null != r,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                r.isSystemUser() || (n = (0, P.A)(g) ? eo.clD.STREAMING : T),
                                                (0, i.jsx)(eU, {
                                                    ...ez,
                                                    size: b._3.SIZE_32,
                                                    src: eQ,
                                                    avatarDecoration: eW,
                                                    status: n,
                                                    isMobile: j,
                                                    isVR: _,
                                                    isTyping: v,
                                                    "aria-label": r.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: e8 && !e5,
                                        muted: e5,
                                        subText: t.isSystemDM()
                                            ? (0, i.jsx)("div", {
                                                  className: eO.W$,
                                                  children: (0, H.A)(t.id)
                                                      ? ec.intl.string(ec.t.FL5T01)
                                                      : ec.intl.string(ec.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, i.jsx)("div", {
                                                    className: eO.W$,
                                                    children: ec.intl.format(ec.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, k.A)({
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
                                                      animateEmoji: D || ee || eh,
                                                      textClassName: eO.XD,
                                                      iconClassName: e5 ? eO.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, i.jsx)(x.A, { className: a()(eO.uN, { [eO.e8]: tp }), children: th }),
                                        decorators: t.isSystemDM()
                                            ? (0, i.jsx)(G.A, {
                                                  className: eO.G$,
                                                  type: G.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: tp,
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: a()(eO._q, { [eO.EY]: te }),
                                    children: [
                                        e4
                                            ? (0, i.jsx)(eG, {})
                                            : e6
                                              ? (0, i.jsx)(eF, {})
                                              : e1
                                                ? (0, i.jsx)(eL, {})
                                                : null,
                                        tC && null != e7
                                            ? (0, i.jsx)(ek, { channelName: e7, onClick: tE, showNameplate: te })
                                            : null,
                                        tv || !tC
                                            ? (0, i.jsx)(eP, {
                                                  icon: w.P,
                                                  "aria-label": e$
                                                      ? ec.intl.string(ec.t["26C4oi"])
                                                      : ec.intl.string(ec.t.jsvgc3),
                                                  onClick: e$ ? tc : ts,
                                                  onMouseDown: tr,
                                                  nameplate: N,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: e9,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                        eB && (0, i.jsx)(ev.A, { targetElementRef: ew, markMenuItemPopoverAsDismissed: eH }),
                    ],
                });
            },
        })
    );
}
let eQ =
    21552 == n.j
        ? (e) => {
              let { channel: t, selected: n, ...l } = e,
                  s = (0, A.bG)([eM.default], () => eM.default.getUser(t.getRecipientId())),
                  a = s?.id,
                  r = (0, A.cf)([ey.A, eS.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = ey.A.getState().statuses;
                          t.recipients.some((e) => n[e] === eo.clD.ONLINE) && (e = eo.clD.ONLINE);
                      } else null != a && (e = ey.A.getStatus(a));
                      return {
                          status: e,
                          activities: null != a ? ey.A.getActivities(a) : null,
                          applicationStream: null != a ? eS.A.getAnyStreamForUser(a) : null,
                          isMobile: null != a && ey.A.isMobileOnline(a),
                          isVR: null != a && ey.A.isVROnline(a),
                      };
                  }, [t, a]),
                  { voiceChannel: o } = (0, L.A)({ userId: a }),
                  u = (0, ed.r)({ user: s }),
                  c = (0, A.bG)(
                      [eM.default, eI.A],
                      () =>
                          t.isMultiUserDM()
                              ? ea.default
                                    .keys(eI.A.getTypingUsers(t.id))
                                    .some((e) => e !== eM.default.getCurrentUser()?.id)
                              : null != s && eI.A.isTyping(t.id, t.getRecipientId()),
                      [t, s],
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(eH, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: r.status === eo.clD.ONLINE ? eo.clD.ONLINE : void 0,
                        ...l,
                    })
                  : (0, i.jsx)(eH, {
                        channel: t,
                        selected: n,
                        user: s,
                        voiceChannel: o,
                        isTyping: c,
                        nameplate: u,
                        ...l,
                        ...r,
                    });
          }
        : null;

"use strict";
n.d(t, { ls: () => ex, z9: () => ek, w_: () => eM, Ay: () => eV, th: () => eF });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    d = n(561028),
    c = n(562708),
    u = n(837381),
    _ = n(172218),
    E = n(612324),
    A = n(607399),
    h = n(17928),
    I = n(3026),
    f = n(97808),
    p = n(939249),
    T = n(866665),
    m = n(821609),
    g = n(366605),
    S = n(952270),
    N = n(428678),
    C = n(661531),
    O = n(549254),
    R = n(445529),
    L = n(778712),
    D = n(192308),
    y = n(834730),
    v = n(789645),
    b = n(308528),
    M = n(442433),
    P = n(765671),
    U = n(960076),
    w = n(397244),
    G = n(714114),
    x = n(394871),
    k = n(709066),
    F = n(262295),
    V = n(620982),
    B = n(343328),
    H = n(963027),
    j = n(571694),
    W = n(47167),
    Y = n(691540),
    K = n(857250),
    $ = n(97483),
    z = n(148494),
    q = n(976860),
    Z = n(330001),
    X = n(989349),
    Q = n.n(X),
    J = n(74114),
    ee = n(232835),
    et = n(994500),
    en = n(58703),
    ei = n(935208),
    er = n(746080),
    ea = n(652215),
    es = n(381941),
    el = n(375708),
    eo = n(449582),
    ed = n(351952),
    ec = n(88686),
    eu = n(174755),
    e_ = n(259678),
    eE = n(151093);
let eA = r.forwardRef(function (e, t) {
    let { className: n, focusProps: r, ...a } = e;
    return (0, i.jsx)(e_.vN, { ...r, children: (0, i.jsx)("li", { className: s()(n, eE.k), ...a, ref: t }) });
});
var eh = n(824994),
    eI = n(922301),
    ef = n(660184),
    ep = n(3322),
    eT = n(954376),
    em = n(534400),
    eg = n(854627),
    eS = n(616356),
    eN = n(290863),
    eC = n(568548),
    eO = n(741961),
    eR = n(543465),
    eL = n(287809),
    eD = n(19575),
    ey = n(403796);
let ev = eD.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu,
    eb = { offset: { top: 2, bottom: 2, right: 4 } };
function eM(e) {
    let { nameplate: t, icon: n, forceShow: r = !1, reducedClickTarget: a = !1, visibleElementRef: l, ...o } = e,
        d = (0, ed.K)(t);
    return (0, i.jsx)(p.D, {
        className: s()(ey.b, { [ey.DQ]: null != t, [ey.by]: r, [ey.wY]: a }),
        style: d,
        ...o,
        focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: l,
            className: s()({ [ey.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: s()(ey.ut, { [ey.Uq]: null != t }),
            }),
        }),
    });
}
function eP(e) {
    let { onClick: t, channelName: n, showNameplate: r } = e;
    return (0, i.jsx)("div", {
        className: ey.KQ,
        children: (0, i.jsx)(T.m, {
            text: el.intl.formatToPlainString(el.t.m0zYbV, { username: n }),
            children: (0, i.jsx)(m.$, {
                size: "sm",
                variant: r ? "overlay-secondary" : "secondary",
                onClick: t,
                text: el.intl.string(el.t.pVlP58),
            }),
        }),
    });
}
function eU() {
    return (0, i.jsx)(g.t, { size: "xs", color: "currentColor", className: ey.wB });
}
function ew() {
    return (0, i.jsx)(S.G, { size: "xs", color: "currentColor", className: ey.wB });
}
function eG() {
    return (0, i.jsx)(N.K, { size: "xs", color: "currentColor", className: ey.wB });
}
function ex(e) {
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
                          Color_InnerRing: l ?? C.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? l,
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
            [n, s, l, o],
        );
    return (0, i.jsx)(O.U, { eventTargetRef: t, className: ey.a1, dataBinding: { ...d, DimmerWidth: (a ?? 0) + 32 } });
}
function ek(e) {
    let {
            route: t,
            selected: n,
            icon: a,
            iconClassName: l,
            interactiveClassName: o,
            text: c,
            children: u,
            locationState: _,
            onClick: h,
            className: I,
            role: f,
            "aria-posinset": p,
            "aria-setsize": T,
            listItemRef: m,
            showHoverGradient: g = !1,
            nitroHoverGradient: S = !1,
            hoverGradientStart: N,
            hoverGradientMiddle: C,
            hoverGradientEnd: O,
            ...L
        } = e,
        { width: D, ref: y } = (0, P.Ay)(),
        v = r.useRef(null),
        b = r.useRef(null),
        M = (0, E.A)(m, v);
    return (0, i.jsx)(eA, {
        className: s()(ey.Ix, { [ey.Ij]: A.Fr }, I),
        onClick: h,
        role: f,
        focusProps: { ...eb, focusTarget: b, ringTarget: v },
        "aria-posinset": p,
        "aria-setsize": T,
        ref: M,
        children: (0, i.jsxs)(R.H, {
            as: "div",
            selected: n,
            className: s()(o, ey.bG, ey.$J, { [ey.Q2]: n }),
            children: [
                g &&
                    (0, i.jsx)(ex, {
                        eventTargetRef: v,
                        isNitro: S,
                        contentWidth: D,
                        hoverGradientStart: N,
                        hoverGradientMiddle: C,
                        hoverGradientEnd: O,
                    }),
                (0, i.jsxs)(d.N_, {
                    to: { pathname: t, state: _ },
                    className: ey.nf,
                    innerRef: b,
                    ...L,
                    children: [
                        (0, i.jsx)(F.A, {
                            ref: g ? y : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(a, {
                                size: "refresh_sm",
                                className: s()(ey.e_, l),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: ey.xx,
                        }),
                        u,
                    ],
                }),
            ],
        }),
    });
}
function eF(e) {
    let {
            channel: t,
            selected: a = !1,
            user: l,
            activities: A,
            applicationStream: f,
            voiceChannel: p,
            isTyping: T,
            status: m,
            isMobile: g,
            isVR: S,
            nameplate: N,
            ref: C,
            "aria-posinset": O,
            "aria-setsize": P,
        } = e,
        [G, X] = r.useState(!1),
        [eo, ed] = r.useState(!1),
        [e_, eE] = r.useState(!1),
        eS = r.useRef(null),
        [eN, eO] = r.useState(!1),
        eL = (0, _.K)(
            r.useCallback((e) => {
                eO(e);
            }, []),
        ),
        eD = r.useRef(null),
        ex = C ?? eD,
        ek = (0, E.A)(ex, eL),
        {
            avatarSrc: eF,
            avatarDecorationSrc: eV,
            eventHandlers: eB,
        } = (0, eg.A)({ userId: l?.id, size: L._3.SIZE_32, animateOnHover: !(a || G || eo || e_) }),
        eH = t.isMultiUserDM(),
        ej = t.isSystemDM(),
        eW = !eH && !ej && t.type === ea.rbe.DM,
        eY = eW && l?.primaryGuild != null,
        eK = (0, h.bG)([eR.Ay], () => eR.Ay.isChannelMuted(t.getGuildId(), t.id)),
        e$ = (0, h.bG)([eR.Ay], () => eR.Ay.isMessagesFavorite(t.id)),
        { ignored: ez, blocked: eq } = (0, h.cf)([et.A], () => ({
            ignored: et.A.isIgnored(t.getRecipientId()),
            blocked: et.A.isBlocked(t.getRecipientId()),
        })),
        eZ = eW && ez,
        eX = eW && eq,
        eQ = (eK || eZ || eX) && !(a || G),
        eJ = (0, h.bG)([eC.Ay], () => eC.Ay.getMentionCount(t.id) > 0),
        e0 = (0, W.Ay)(t),
        e1 = r.useRef(null),
        e2 = null != N && (a || G || e_);
    function e3() {
        X(!0);
    }
    function e4() {
        X(!1);
    }
    function e5() {
        ed(!0);
    }
    function e6() {
        ed(!1);
    }
    function e7(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null != e && (e.preventDefault(), e.stopPropagation()), b.A.closePrivateChannel(t.id, a, n);
    }
    function e8() {
        b.A.preload(ea.ME, t.id);
    }
    function e9(e) {
        e.stopPropagation();
    }
    function te(e) {
        e.target === e.currentTarget && eS.current?.click();
    }
    function tt(e) {
        let r =
            "contextmenu" === e.type
                ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        eE(!0),
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
                              n.e("47502"),
                              n.e("79630"),
                              n.e("14461"),
                              n.e("21106"),
                              n.e("87048"),
                              n.e("99011"),
                              n.e("36150"),
                              n.e("46149"),
                              n.e("66378"),
                              n.e("17244"),
                              n.e("53416"),
                              n.e("60200"),
                          ]).then(n.bind(n, 4027));
                          return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: a });
                      },
                      { impressionName: r, noBlurEvent: !0, onClose: () => eE(!1) },
                  )
                : (0, M.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("97422"),
                              n.e("41295"),
                              n.e("40351"),
                              n.e("76279"),
                              n.e("45309"),
                              n.e("97705"),
                              n.e("26692"),
                              n.e("26132"),
                              n.e("46652"),
                              n.e("93103"),
                              n.e("93190"),
                              n.e("91763"),
                              n.e("34552"),
                              n.e("8757"),
                              n.e("71210"),
                              n.e("38730"),
                              n.e("85968"),
                              n.e("89673"),
                              n.e("68403"),
                              n.e("88342"),
                              n.e("29787"),
                              n.e("89421"),
                              n.e("98965"),
                              n.e("82073"),
                              n.e("97558"),
                              n.e("54625"),
                              n.e("93514"),
                              n.e("91994"),
                              n.e("76665"),
                              n.e("61268"),
                              n.e("35313"),
                              n.e("76273"),
                              n.e("47502"),
                              n.e("79630"),
                              n.e("36564"),
                              n.e("52229"),
                              n.e("45996"),
                              n.e("792"),
                              n.e("56753"),
                              n.e("92822"),
                              n.e("23427"),
                              n.e("29422"),
                              n.e("38056"),
                              n.e("9291"),
                              n.e("14461"),
                              n.e("93014"),
                              n.e("7059"),
                              n.e("8829"),
                              n.e("72883"),
                              n.e("21106"),
                              n.e("42204"),
                              n.e("22261"),
                              n.e("49644"),
                              n.e("87048"),
                              n.e("78195"),
                              n.e("13708"),
                              n.e("99011"),
                              n.e("36150"),
                              n.e("42191"),
                              n.e("74021"),
                              n.e("98199"),
                              n.e("17244"),
                              n.e("64464"),
                              n.e("24240"),
                              n.e("60816"),
                              n.e("21879"),
                              n.e("39778"),
                          ]).then(n.bind(n, 385913));
                          return (n) => (0, i.jsx)(e, { ...n, user: l, channel: t, channelSelected: a });
                      },
                      { impressionName: r, onClose: () => eE(!1) },
                  );
    }
    function tn(e) {
        e.preventDefault(), e.stopPropagation();
        let r = el.intl.formatToPlainString(el.t.hJ5Ap4, { name: e0 }),
            a = el.intl.format(el.t.SSIVOu, { name: e0 });
        t.isManaged() &&
            ((r = el.intl.formatToPlainString(el.t.hVGjEW, { name: e0 })),
            (a = el.intl.format(el.t.IK1Qvs, { name: e0 }))),
            (0, D.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("56852"), n.e("37803")]).then(n.bind(n, 148166));
                return (t) => (0, i.jsx)(e, { title: r, body: a, onSubmit: e7, ...t });
            });
    }
    let ti = (0, i.jsx)(ef.A, {
            userName: e0,
            displayNameStyles: l?.displayNameStyles,
            effectDisplayType: G || a || e_ ? eI.G.ANIMATED : eI.G.PLAIN,
            loop: G,
            boldFontOpacity: 0.9,
        }),
        tr = eY
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      ti,
                      (0, i.jsx)(em.Ay, {
                          primaryGuild: l?.primaryGuild,
                          userId: l?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: s()(ey.fc, { [ey.Y_]: eQ }),
                      }),
                  ],
              })
            : ti,
        ta = r.useRef(null),
        ts = (0, eh.W)({ location: "PrivateChannel" }) && l?.displayNameStyles != null,
        { isIncomingCall: tl, isOngoingCall: to } = (0, V.A)(t.id),
        td = [
            (0, H.Ay)({ channel: t, unread: eJ, isIncomingCall: tl, isOngoingCall: to }),
            (0, H.r2)({ channel: t, muted: eK, userStatus: m, isFavorite: e$ }),
        ]
            .filter(Boolean)
            .join(", "),
        tc = (0, h.bG)([eC.Ay], () => eC.Ay.lastMessageId(t.id)),
        { waveShouldShow: tu, wavePressed: t_ } = (function (e, t) {
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
                I = r.useCallback(async () => {
                    if (!E) {
                        A(!0),
                            (0, Z.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, q.pX)(ea.BVt.CHANNEL(ea.ME, e.id));
                        try {
                            await z.A.sendStickers(e.id, ["749054660769218631"], "", { location: es.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok || 429 !== e.status || (0, Y.P0)((0, K.o)(el.intl.string(el.t.Whhv4w), $.Ck.FAILURE));
                        }
                        A(!1);
                    }
                }, [e.id, E]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (a = (0, h.bG)([et.A], () => null != i && et.A.isFriend(i))),
                    (s = (0, h.bG)([et.A], () => null != i && et.A.isIgnored(i))),
                    (l = (0, h.bG)([ee.A], () => {
                        let t = ee.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === ea.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(er.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (d = (0, h.bG)([ee.A], () => ee.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = ei.default.extractTimestamp(e.id)),
                    (u = (0, en.v0)(Q()(), Q()(c), 18144e5)),
                    (_ = (0, J.l)(e.id)),
                    n && a && !s && (o || null == t || l) && !d && u && null == _),
                wavePressed: I,
            };
        })(t, tc);
    return (0, i.jsx)(u.tG, {
        id: t.id,
        children: (e) => {
            let { role: n, ...r } = e;
            return (0, i.jsxs)(eA, {
                className: s()(ey.Ix, ey.dm),
                role: n,
                focusProps: { ...eb, focusTarget: eS, ringTarget: ex },
                ref: ek,
                onMouseEnter: e3,
                onMouseLeave: e4,
                onMouseDown: e8,
                onFocus: e5,
                onBlur: e6,
                onContextMenu: tt,
                "aria-setsize": P,
                "aria-posinset": O,
                children: [
                    eJ ? (0, i.jsx)("div", { className: s()(ey.dM, { [ey.SU]: eQ }) }) : null,
                    (0, i.jsxs)(R.H, {
                        className: s()(ey.bG, { [ey.Q2]: a || e_ }),
                        as: "div",
                        onClick: te,
                        muted: eQ,
                        selected: a,
                        children: [
                            (0, i.jsx)(eu.A, {
                                nameplate: e2 ? N : void 0,
                                selected: a,
                                hovered: G,
                                content: ta,
                                placement: ec.u.CHANNEL,
                            }),
                            (0, i.jsx)(d.N_, {
                                innerRef: eS,
                                to: ea.BVt.CHANNEL(ea.ME, t.id),
                                className: s()(ey.nf, ey.Zi),
                                "aria-label": td,
                                ...r,
                                children: (0, i.jsx)(F.A, {
                                    ref: ta,
                                    avatar: (function () {
                                        let e = L._3.SIZE_32;
                                        if (t.isMultiUserDM())
                                            if (t.recipients.length >= 2 && null == t.icon)
                                                return (0, i.jsx)(eT.A, {
                                                    "aria-hidden": !0,
                                                    recipients: t.recipients,
                                                    size: e,
                                                    isTyping: T,
                                                    status: m,
                                                });
                                            else
                                                return (0, i.jsx)(ev, {
                                                    ...eB,
                                                    src: (0, j.Y)(t),
                                                    "aria-hidden": !0,
                                                    size: e,
                                                    status: T ? ea.clD.ONLINE : m,
                                                    isTyping: T,
                                                });
                                        o()(
                                            null != l,
                                            "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                        );
                                        let n = null;
                                        return (
                                            l.isSystemUser() || (n = (0, U.A)(A) ? ea.clD.STREAMING : m),
                                            (0, i.jsx)(ev, {
                                                ...eB,
                                                size: L._3.SIZE_32,
                                                src: eF,
                                                avatarDecoration: eV,
                                                status: n,
                                                isMobile: g,
                                                isVR: S,
                                                isTyping: T,
                                                "aria-label": l.username,
                                                statusTooltip: !0,
                                            })
                                        );
                                    })(),
                                    highlighted: eJ && !eQ,
                                    muted: eQ,
                                    subText: t.isSystemDM()
                                        ? (0, i.jsx)(y.E, {
                                              variant: "text-xs/medium",
                                              color: "none",
                                              className: ey.W$,
                                              children: (0, B.A)(t.id)
                                                  ? el.intl.string(el.t.FL5T01)
                                                  : el.intl.string(el.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, i.jsx)(y.E, {
                                                variant: "text-xs/medium",
                                                color: "none",
                                                className: ey.W$,
                                                children: el.intl.format(el.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, w.A)({
                                                  activities: A,
                                                  status: m,
                                                  applicationStream: f,
                                                  voiceChannel: p,
                                              })
                                            ? (0, i.jsx)(x.A, {
                                                  user: l,
                                                  activities: A,
                                                  voiceChannel: p,
                                                  applicationStream: f,
                                                  animateEmoji: G || eo || e_,
                                                  textClassName: ey.XD,
                                                  iconClassName: eQ ? ey.tG : void 0,
                                              })
                                            : null,
                                    name: (0, i.jsx)(I.A, { className: s()(ey.uN, { [ey.e8]: ts }), children: tr }),
                                    decorators: t.isSystemDM()
                                        ? (0, i.jsx)(k.A, { className: ey.G$, type: k.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: ts,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: s()(ey._q, { [ey.EY]: e2 }),
                                children: [
                                    eX ? (0, i.jsx)(eG, {}) : eZ ? (0, i.jsx)(ew, {}) : e$ ? (0, i.jsx)(eU, {}) : null,
                                    tu && null != e0
                                        ? (0, i.jsx)(eP, { channelName: e0, onClick: t_, showNameplate: e2 })
                                        : null,
                                    tu
                                        ? null
                                        : (0, i.jsx)(eM, {
                                              icon: v.P,
                                              "aria-label": eH
                                                  ? el.intl.string(el.t["26C4oi"])
                                                  : el.intl.string(el.t.jsvgc3),
                                              onClick: eH ? tn : e7,
                                              onMouseDown: e9,
                                              nameplate: N,
                                              reducedClickTarget: !0,
                                              visibleElementRef: e1,
                                          }),
                                ],
                            }),
                        ],
                    }),
                    a && (0, i.jsx)(ep.A, { targetElementRef: ex, channelType: t.type, isTargetInViewport: eN }),
                ],
            });
        },
    });
}
let eV = function (e) {
    let { channel: t, selected: n, ...r } = e,
        a = (0, h.bG)([eL.default], () => eL.default.getUser(t.getRecipientId())),
        s = a?.id,
        l = (0, h.cf)([eN.A, eS.A], () => {
            let e;
            if (t.isMultiUserDM()) {
                let n = eN.A.getState().statuses;
                t.recipients.some((e) => n[e] === ea.clD.ONLINE) && (e = ea.clD.ONLINE);
            } else null != s && (e = eN.A.getStatus(s));
            return {
                status: e,
                activities: null != s ? eN.A.getActivities(s) : null,
                applicationStream: null != s ? eS.A.getAnyStreamForUser(s) : null,
                isMobile: null != s && eN.A.isMobileOnline(s),
                isVR: null != s && eN.A.isVROnline(s),
            };
        }, [t, s]),
        { voiceChannel: o } = (0, G.Ay)({ userId: s }),
        d = (0, eo.r)({ user: a }),
        c = (0, h.bG)(
            [eL.default, eO.A],
            () =>
                t.isMultiUserDM()
                    ? ei.default.keys(eO.A.getTypingUsers(t.id)).some((e) => e !== eL.default.getCurrentUser()?.id)
                    : null != a && eO.A.isTyping(t.id, t.getRecipientId()),
            [t, a],
        );
    return t.isMultiUserDM()
        ? (0, i.jsx)(eF, {
              channel: t,
              selected: n,
              isTyping: c,
              status: l.status === ea.clD.ONLINE ? ea.clD.ONLINE : void 0,
              ...r,
          })
        : (0, i.jsx)(eF, { channel: t, selected: n, user: a, voiceChannel: o, isTyping: c, nameplate: d, ...r, ...l });
};

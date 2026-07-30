n.d(t, { ls: () => ek, z9: () => eB, w_: () => ew, Ay: () => eF, th: () => ez });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(284009),
    o = n.n(a);
if (88245 != n.j) var u = n(561028);
var c = n(562708);
if (88245 != n.j) var d = n(837381);
var f = n(172218),
    m = n(612324),
    A = n(607399),
    v = n(17928);
if (88245 != n.j) var g = n(3026);
var N = n(97808);
if (88245 != n.j) var p = n(939249);
if (88245 != n.j) var h = n(866665);
if (88245 != n.j) var j = n(821609);
if (88245 != n.j) var x = n(366605);
if (88245 != n.j) var _ = n(952270);
if (88245 != n.j) var y = n(428678);
var I = n(661531),
    R = n(549254);
if (88245 != n.j) var C = n(445529);
if (88245 != n.j) var E = n(778712);
if (88245 != n.j) var S = n(192308);
if (88245 != n.j) var T = n(834730);
if (88245 != n.j) var D = n(789645);
var M = n(308528),
    b = n(442433),
    G = n(765671),
    w = n(960076),
    U = n(397244),
    O = n(714114),
    L = n(394871),
    P = n(709066),
    k = n(262295),
    B = n(620982),
    z = n(343328),
    F = n(963027),
    H = n(571694),
    V = n(47167);
if (88245 != n.j) var W = n(691540);
if (88245 != n.j) var Y = n(857250);
if (88245 != n.j) var K = n(97483);
var Q = n(148494),
    X = n(976860),
    J = n(330001),
    $ = n(989349),
    q = n.n($),
    Z = n(74114),
    ee = n(232835),
    et = n(994500),
    en = n(58703),
    ei = n(935208),
    er = n(746080),
    el = n(652215),
    es = n(381941),
    ea = n(375708),
    eo = n(449582),
    eu = n(351952),
    ec = n(88686),
    ed = n(174755);
if (88245 != n.j) var ef = n(259678);
var em = n(151093);
let eA =
        88245 != n.j
            ? r.forwardRef(function (e, t) {
                  let { className: n, focusProps: r, ...l } = e;
                  return (0, i.jsx)(ef.vN, {
                      ...r,
                      children: (0, i.jsx)("li", { className: s()(n, em.k), ...l, ref: t }),
                  });
              })
            : null,
    ev = 88245 != n.j ? eA : null;
var eg = n(824994),
    eN = n(922301),
    ep = n(660184),
    eh = n(3322),
    ej = n(355145),
    ex = n(954376),
    e_ = n(534400),
    ey = n(854627),
    eI = n(616356),
    eR = n(290863),
    eC = n(568548),
    eE = n(741961),
    eS = n(543465),
    eT = n(287809),
    eD = n(19575),
    eM = n(403796);
let eb = eD.Ay.getEnableHardwareAcceleration() ? N.Js : N.eu,
    eG = 88245 != n.j ? { offset: { top: 2, bottom: 2, right: 4 } } : null;
function ew(e) {
    let { nameplate: t, icon: n, forceShow: r = !1, reducedClickTarget: l = !1, visibleElementRef: a, ...o } = e,
        u = (0, eu.K)(t);
    return (0, i.jsx)(p.D, {
        className: s()(eM.b, { [eM.DQ]: null != t, [eM.by]: r, [eM.wY]: l }),
        style: u,
        ...o,
        focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: a,
            className: s()({ [eM.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: s()(eM.ut, { [eM.Uq]: null != t }),
            }),
        }),
    });
}
function eU(e) {
    let { onClick: t, channelName: n, showNameplate: r } = e;
    return (0, i.jsx)("div", {
        className: eM.KQ,
        children: (0, i.jsx)(h.m, {
            text: ea.intl.formatToPlainString(ea.t.m0zYbV, { username: n }),
            children: (0, i.jsx)(j.$, {
                size: "sm",
                variant: r ? "overlay-secondary" : "secondary",
                onClick: t,
                text: ea.intl.string(ea.t.pVlP58),
            }),
        }),
    });
}
function eO() {
    return (0, i.jsx)(x.t, { size: "xs", color: "currentColor", className: eM.wB });
}
function eL() {
    return (0, i.jsx)(_.G, { size: "xs", color: "currentColor", className: eM.wB });
}
function eP() {
    return (0, i.jsx)(y.K, { size: "xs", color: "currentColor", className: eM.wB });
}
function ek(e) {
    let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: l,
            hoverGradientStart: s,
            hoverGradientMiddle: a,
            hoverGradientEnd: o,
        } = e,
        u = r.useMemo(
            () =>
                null != s && null != a && null != o
                    ? {
                          Color_GradientCenter: s,
                          Color_InnerRing: a ?? I.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? a,
                          Color_OuterRing: o,
                          NitroVFX: !1,
                      }
                    : n
                      ? {
                            Color_GradientCenter: I.A.colors.NITRO_TAB_GRADIENT_CENTER,
                            Color_InnerRing: I.A.colors.NITRO_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: I.A.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !0,
                        }
                      : {
                            Color_GradientCenter: I.A.colors.STANDARD_TAB_GRADIENT_CENTER,
                            Color_InnerRing: I.A.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: I.A.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !1,
                        },
            [n, s, a, o],
        );
    return (0, i.jsx)(R.U, { eventTargetRef: t, className: eM.a1, dataBinding: { ...u, DimmerWidth: (l ?? 0) + 32 } });
}
function eB(e) {
    let {
            route: t,
            selected: n,
            icon: l,
            iconClassName: a,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: f,
            onClick: v,
            className: g,
            role: N,
            "aria-posinset": p,
            "aria-setsize": h,
            listItemRef: j,
            showHoverGradient: x = !1,
            nitroHoverGradient: _ = !1,
            hoverGradientStart: y,
            hoverGradientMiddle: I,
            hoverGradientEnd: R,
            ...E
        } = e,
        { width: S, ref: T } = (0, G.Ay)(),
        D = r.useRef(null),
        M = r.useRef(null),
        b = (0, m.A)(j, D);
    return (0, i.jsx)(ev, {
        className: s()(eM.Ix, { [eM.Ij]: A.Fr }, g),
        onClick: v,
        role: N,
        focusProps: { ...eG, focusTarget: M, ringTarget: D },
        "aria-posinset": p,
        "aria-setsize": h,
        ref: b,
        children: (0, i.jsxs)(C.H, {
            as: "div",
            selected: n,
            className: s()(o, eM.bG, eM.$J, { [eM.Q2]: n }),
            children: [
                x &&
                    (0, i.jsx)(ek, {
                        eventTargetRef: D,
                        isNitro: _,
                        contentWidth: S,
                        hoverGradientStart: y,
                        hoverGradientMiddle: I,
                        hoverGradientEnd: R,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: f },
                    className: eM.nf,
                    innerRef: M,
                    ...E,
                    children: [
                        (0, i.jsx)(k.A, {
                            ref: x ? T : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(l, {
                                size: "refresh_sm",
                                className: s()(eM.e_, a),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: eM.xx,
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
            selected: l = !1,
            user: a,
            activities: A,
            applicationStream: N,
            voiceChannel: p,
            isTyping: h,
            status: j,
            isMobile: x,
            isVR: _,
            nameplate: y,
            ref: I,
            "aria-posinset": R,
            "aria-setsize": G,
        } = e,
        [O, $] = r.useState(!1),
        [eo, eu] = r.useState(!1),
        [ef, em] = r.useState(!1),
        eA = r.useRef(null),
        [eI, eR] = r.useState(!1),
        eE = (0, f.K)(
            r.useCallback((e) => {
                eR(e);
            }, []),
        ),
        eT = r.useRef(null),
        eD = I ?? eT,
        ek = (0, m.A)(eD, eE),
        { showMenuItemPopover: eB, markMenuItemPopoverAsDismissed: ez } = (0, ej.B)({
            isChannelSelected: !0 === l,
            isTargetInViewport: eI,
            channelType: t.type,
        }),
        {
            avatarSrc: eF,
            avatarDecorationSrc: eH,
            eventHandlers: eV,
        } = (0, ey.A)({ userId: a?.id, size: E._3.SIZE_32, animateOnHover: !(l || O || eo || ef) }),
        eW = t.isMultiUserDM(),
        eY = t.isSystemDM(),
        eK = !eW && !eY && t.type === el.rbe.DM,
        eQ = eK && a?.primaryGuild != null,
        eX = (0, v.bG)([eS.Ay], () => eS.Ay.isChannelMuted(t.getGuildId(), t.id)),
        eJ = (0, v.bG)([eS.Ay], () => eS.Ay.isMessagesFavorite(t.id)),
        { ignored: e$, blocked: eq } = (0, v.cf)([et.A], () => ({
            ignored: et.A.isIgnored(t.getRecipientId()),
            blocked: et.A.isBlocked(t.getRecipientId()),
        })),
        eZ = eK && e$,
        e0 = eK && eq,
        e2 = (eX || eZ || e0) && !(l || O),
        e8 = (0, v.bG)([eC.Ay], () => eC.Ay.getMentionCount(t.id) > 0),
        e4 = (0, V.Ay)(t),
        e1 = r.useRef(null),
        e5 = null != y && (l || O || ef);
    function e9() {
        $(!0);
    }
    function e6() {
        $(!1);
    }
    function e3() {
        eu(!0);
    }
    function e7() {
        eu(!1);
    }
    function te(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null != e && (e.preventDefault(), e.stopPropagation()), M.A.closePrivateChannel(t.id, l, n);
    }
    function tt() {
        M.A.preload(el.ME, t.id);
    }
    function tn(e) {
        e.stopPropagation();
    }
    function ti(e) {
        e.target === e.currentTarget && eA.current?.click();
    }
    function tr(e) {
        let r =
            "contextmenu" === e.type
                ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        em(!0),
            t.isMultiUserDM()
                ? (0, b.L3)(
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
                              n.e("80740"),
                              n.e("99011"),
                              n.e("36150"),
                              n.e("46149"),
                              n.e("66378"),
                              n.e("17244"),
                              n.e("53416"),
                              n.e("60200"),
                          ]).then(n.bind(n, 4027));
                          return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: l });
                      },
                      { impressionName: r, noBlurEvent: !0, onClose: () => em(!1) },
                  )
                : (0, b.L3)(
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
                              n.e("78195"),
                              n.e("80740"),
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
                          return (n) => (0, i.jsx)(e, { ...n, user: a, channel: t, channelSelected: l });
                      },
                      { impressionName: r, onClose: () => em(!1) },
                  );
    }
    function tl(e) {
        e.preventDefault(), e.stopPropagation();
        let r = ea.intl.formatToPlainString(ea.t.hJ5Ap4, { name: e4 }),
            l = ea.intl.format(ea.t.SSIVOu, { name: e4 });
        t.isManaged() &&
            ((r = ea.intl.formatToPlainString(ea.t.hVGjEW, { name: e4 })),
            (l = ea.intl.format(ea.t.IK1Qvs, { name: e4 }))),
            (0, S.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("56852"), n.e("37803")]).then(n.bind(n, 148166));
                return (t) => (0, i.jsx)(e, { title: r, body: l, onSubmit: te, ...t });
            });
    }
    let ts = (0, i.jsx)(ep.A, {
            userName: e4,
            displayNameStyles: a?.displayNameStyles,
            effectDisplayType: O || l || ef ? eN.G.ANIMATED : eN.G.PLAIN,
            loop: O,
            boldFontOpacity: 0.9,
        }),
        ta = eQ
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      ts,
                      (0, i.jsx)(e_.Ay, {
                          primaryGuild: a?.primaryGuild,
                          userId: a?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: s()(eM.fc, { [eM.Y_]: e2 }),
                      }),
                  ],
              })
            : ts,
        to = r.useRef(null),
        tu = (0, eg.W)({ location: "PrivateChannel" }) && a?.displayNameStyles != null,
        { isIncomingCall: tc, isOngoingCall: td } = (0, B.A)(t.id),
        tf = [
            (0, F.Ay)({ channel: t, unread: e8, isIncomingCall: tc, isOngoingCall: td }),
            (0, F.r2)({ channel: t, muted: eX, userStatus: j, isFavorite: eJ }),
        ]
            .filter(Boolean)
            .join(", "),
        tm = (0, v.bG)([eC.Ay], () => eC.Ay.lastMessageId(t.id)),
        { waveShouldShow: tA, wavePressed: tv } = (function (e, t) {
            let n,
                i,
                l,
                s,
                a,
                o,
                u,
                c,
                d,
                f,
                [m, A] = r.useState(!1),
                g = r.useCallback(async () => {
                    if (!m) {
                        A(!0),
                            (0, J.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, X.pX)(el.BVt.CHANNEL(el.ME, e.id));
                        try {
                            await Q.A.sendStickers(e.id, ["749054660769218631"], "", { location: es.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok || 429 !== e.status || (0, W.P0)((0, Y.o)(ea.intl.string(ea.t.Whhv4w), K.Ck.FAILURE));
                        }
                        A(!1);
                    }
                }, [e.id, m]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (l = (0, v.bG)([et.A], () => null != i && et.A.isFriend(i))),
                    (s = (0, v.bG)([et.A], () => null != i && et.A.isIgnored(i))),
                    (a = (0, v.bG)([ee.A], () => {
                        let t = ee.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === el.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(er.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, v.bG)([ee.A], () => ee.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = ei.default.extractTimestamp(e.id)),
                    (d = (0, en.v0)(q()(), q()(c), 18144e5)),
                    (f = (0, Z.l)(e.id)),
                    n && l && !s && (o || null == t || a) && !u && d && null == f),
                wavePressed: g,
            };
        })(t, tm);
    return (0, i.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: n, ...r } = e;
            return (0, i.jsxs)(ev, {
                className: s()(eM.Ix, eM.dm),
                role: n,
                focusProps: { ...eG, focusTarget: eA, ringTarget: eD },
                ref: ek,
                onMouseEnter: e9,
                onMouseLeave: e6,
                onMouseDown: tt,
                onFocus: e3,
                onBlur: e7,
                onContextMenu: tr,
                "aria-setsize": G,
                "aria-posinset": R,
                children: [
                    e8 ? (0, i.jsx)("div", { className: s()(eM.dM, { [eM.SU]: e2 }) }) : null,
                    (0, i.jsxs)(C.H, {
                        className: s()(eM.bG, { [eM.Q2]: l || ef }),
                        as: "div",
                        onClick: ti,
                        muted: e2,
                        selected: l,
                        children: [
                            (0, i.jsx)(ed.A, {
                                nameplate: e5 ? y : void 0,
                                selected: l,
                                hovered: O,
                                content: to,
                                placement: ec.u.CHANNEL,
                            }),
                            (0, i.jsx)(u.N_, {
                                innerRef: eA,
                                to: el.BVt.CHANNEL(el.ME, t.id),
                                className: s()(eM.nf, eM.Zi),
                                "aria-label": tf,
                                ...r,
                                children: (0, i.jsx)(k.A, {
                                    ref: to,
                                    avatar: (function () {
                                        let e = E._3.SIZE_32;
                                        if (t.isMultiUserDM())
                                            if (t.recipients.length >= 2 && null == t.icon)
                                                return (0, i.jsx)(ex.A, {
                                                    "aria-hidden": !0,
                                                    recipients: t.recipients,
                                                    size: e,
                                                    isTyping: h,
                                                    status: j,
                                                });
                                            else
                                                return (0, i.jsx)(eb, {
                                                    ...eV,
                                                    src: (0, H.Y)(t),
                                                    "aria-hidden": !0,
                                                    size: e,
                                                    status: h ? el.clD.ONLINE : j,
                                                    isTyping: h,
                                                });
                                        o()(
                                            null != a,
                                            "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                        );
                                        let n = null;
                                        return (
                                            a.isSystemUser() || (n = (0, w.A)(A) ? el.clD.STREAMING : j),
                                            (0, i.jsx)(eb, {
                                                ...eV,
                                                size: E._3.SIZE_32,
                                                src: eF,
                                                avatarDecoration: eH,
                                                status: n,
                                                isMobile: x,
                                                isVR: _,
                                                isTyping: h,
                                                "aria-label": a.username,
                                                statusTooltip: !0,
                                            })
                                        );
                                    })(),
                                    highlighted: e8 && !e2,
                                    muted: e2,
                                    subText: t.isSystemDM()
                                        ? (0, i.jsx)(T.E, {
                                              variant: "text-xs/medium",
                                              color: "none",
                                              className: eM.W$,
                                              children: (0, z.A)(t.id)
                                                  ? ea.intl.string(ea.t.FL5T01)
                                                  : ea.intl.string(ea.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, i.jsx)(T.E, {
                                                variant: "text-xs/medium",
                                                color: "none",
                                                className: eM.W$,
                                                children: ea.intl.format(ea.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, U.A)({
                                                  activities: A,
                                                  status: j,
                                                  applicationStream: N,
                                                  voiceChannel: p,
                                              })
                                            ? (0, i.jsx)(L.A, {
                                                  user: a,
                                                  activities: A,
                                                  voiceChannel: p,
                                                  applicationStream: N,
                                                  animateEmoji: O || eo || ef,
                                                  textClassName: eM.XD,
                                                  iconClassName: e2 ? eM.tG : void 0,
                                              })
                                            : null,
                                    name: (0, i.jsx)(g.A, { className: s()(eM.uN, { [eM.e8]: tu }), children: ta }),
                                    decorators: t.isSystemDM()
                                        ? (0, i.jsx)(P.A, { className: eM.G$, type: P.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: tu,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: s()(eM._q, { [eM.EY]: e5 }),
                                children: [
                                    e0 ? (0, i.jsx)(eP, {}) : eZ ? (0, i.jsx)(eL, {}) : eJ ? (0, i.jsx)(eO, {}) : null,
                                    tA && null != e4
                                        ? (0, i.jsx)(eU, { channelName: e4, onClick: tv, showNameplate: e5 })
                                        : null,
                                    tA
                                        ? null
                                        : (0, i.jsx)(ew, {
                                              icon: D.P,
                                              "aria-label": eW
                                                  ? ea.intl.string(ea.t["26C4oi"])
                                                  : ea.intl.string(ea.t.jsvgc3),
                                              onClick: eW ? tl : te,
                                              onMouseDown: tn,
                                              nameplate: y,
                                              reducedClickTarget: !0,
                                              visibleElementRef: e1,
                                          }),
                                ],
                            }),
                        ],
                    }),
                    eB && (0, i.jsx)(eh.A, { targetElementRef: eD, markMenuItemPopoverAsDismissed: ez }),
                ],
            });
        },
    });
}
let eF =
    21552 == n.j
        ? function (e) {
              let { channel: t, selected: n, ...r } = e,
                  l = (0, v.bG)([eT.default], () => eT.default.getUser(t.getRecipientId())),
                  s = l?.id,
                  a = (0, v.cf)([eR.A, eI.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = eR.A.getState().statuses;
                          t.recipients.some((e) => n[e] === el.clD.ONLINE) && (e = el.clD.ONLINE);
                      } else null != s && (e = eR.A.getStatus(s));
                      return {
                          status: e,
                          activities: null != s ? eR.A.getActivities(s) : null,
                          applicationStream: null != s ? eI.A.getAnyStreamForUser(s) : null,
                          isMobile: null != s && eR.A.isMobileOnline(s),
                          isVR: null != s && eR.A.isVROnline(s),
                      };
                  }, [t, s]),
                  { voiceChannel: o } = (0, O.Ay)({ userId: s }),
                  u = (0, eo.r)({ user: l }),
                  c = (0, v.bG)(
                      [eT.default, eE.A],
                      () =>
                          t.isMultiUserDM()
                              ? ei.default
                                    .keys(eE.A.getTypingUsers(t.id))
                                    .some((e) => e !== eT.default.getCurrentUser()?.id)
                              : null != l && eE.A.isTyping(t.id, t.getRecipientId()),
                      [t, l],
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(ez, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: a.status === el.clD.ONLINE ? el.clD.ONLINE : void 0,
                        ...r,
                    })
                  : (0, i.jsx)(ez, {
                        channel: t,
                        selected: n,
                        user: l,
                        voiceChannel: o,
                        isTyping: c,
                        nameplate: u,
                        ...r,
                        ...a,
                    });
          }
        : null;

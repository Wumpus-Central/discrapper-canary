n.d(t, { ls: () => ek, z9: () => eB, w_: () => ew, Ay: () => ez, th: () => eF });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(284009),
    o = n.n(a);
if (88245 != n.j) var u = n(936504);
var c = n(562708);
if (88245 != n.j) var d = n(837381);
var A = n(172218),
    f = n(612324),
    m = n(607399),
    N = n(17928);
if (88245 != n.j) var v = n(3026);
var g = n(97808);
if (88245 != n.j) var p = n(939249);
if (88245 != n.j) var _ = n(866665);
if (88245 != n.j) var E = n(821609);
if (88245 != n.j) var h = n(366605);
if (88245 != n.j) var I = n(952270);
if (88245 != n.j) var R = n(428678);
var j = n(661531),
    T = n(549254);
if (88245 != n.j) var x = n(445529);
if (88245 != n.j) var S = n(778712);
if (88245 != n.j) var C = n(192308);
if (88245 != n.j) var M = n(834730);
if (88245 != n.j) var y = n(789645);
var D = n(308528),
    b = n(442433),
    G = n(765671),
    w = n(960076),
    O = n(397244),
    U = n(714114),
    L = n(394871),
    P = n(709066),
    k = n(262295),
    B = n(620982),
    F = n(343328),
    z = n(963027),
    V = n(571694),
    H = n(47167);
if (88245 != n.j) var W = n(691540);
if (88245 != n.j) var Y = n(857250);
if (88245 != n.j) var K = n(97483);
var X = n(493336),
    J = n(976860),
    Q = n(330001),
    q = n(989349),
    Z = n.n(q),
    $ = n(74114),
    ee = n(232835),
    et = n(994500),
    en = n(58703),
    ei = n(935208),
    el = n(746080),
    er = n(652215),
    es = n(381941),
    ea = n(375708),
    eo = n(449582),
    eu = n(351952),
    ec = n(88686),
    ed = n(174755);
if (88245 != n.j) var eA = n(187322);
var ef = n(151093);
let em =
        88245 != n.j
            ? l.forwardRef(function (e, t) {
                  let { className: n, focusProps: l, ...r } = e;
                  return (0, i.jsx)(eA.vN, {
                      ...l,
                      children: (0, i.jsx)("li", { className: s()(n, ef.k), ...r, ref: t }),
                  });
              })
            : null,
    eN = 88245 != n.j ? em : null;
var ev = n(824994),
    eg = n(922301),
    ep = n(660184),
    e_ = n(414808),
    eE = n(302005),
    eh = n(954376),
    eI = n(534400),
    eR = n(854627),
    ej = n(616356),
    eT = n(290863),
    ex = n(568548),
    eS = n(741961),
    eC = n(543465),
    eM = n(287809),
    ey = n(19575),
    eD = n(403796);
let eb = ey.Ay.getEnableHardwareAcceleration() ? g.Js : g.eu,
    eG = 88245 != n.j ? { offset: { top: 2, bottom: 2, right: 4 } } : null;
function ew(e) {
    let { nameplate: t, icon: n, forceShow: l = !1, reducedClickTarget: r = !1, visibleElementRef: a, ...o } = e,
        u = (0, eu.K)(t);
    return (0, i.jsx)(p.D, {
        className: s()(eD.b, { [eD.DQ]: null != t, [eD.by]: l, [eD.wY]: r }),
        style: u,
        ...o,
        focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: a,
            className: s()({ [eD.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: s()(eD.ut, { [eD.Uq]: null != t }),
            }),
        }),
    });
}
function eO(e) {
    let { onClick: t, channelName: n, showNameplate: l } = e;
    return (0, i.jsx)("div", {
        className: eD.KQ,
        children: (0, i.jsx)(_.m, {
            text: ea.intl.formatToPlainString(ea.t.m0zYbV, { username: n }),
            children: (0, i.jsx)(E.$, {
                size: "sm",
                variant: l ? "overlay-secondary" : "secondary",
                onClick: t,
                text: ea.intl.string(ea.t.pVlP58),
            }),
        }),
    });
}
function eU() {
    return (0, i.jsx)(h.t, { size: "xs", color: "currentColor", className: eD.wB });
}
function eL() {
    return (0, i.jsx)(I.G, { size: "xs", color: "currentColor", className: eD.wB });
}
function eP() {
    return (0, i.jsx)(R.K, { size: "xs", color: "currentColor", className: eD.wB });
}
function ek(e) {
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
                          Color_InnerRing: a ?? j.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? a,
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
            [n, s, a, o],
        );
    return (0, i.jsx)(T.U, { eventTargetRef: t, className: eD.a1, dataBinding: { ...u, DimmerWidth: (r ?? 0) + 32 } });
}
function eB(e) {
    let {
            route: t,
            selected: n,
            icon: r,
            iconClassName: a,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: A,
            onClick: N,
            className: v,
            role: g,
            "aria-posinset": p,
            "aria-setsize": _,
            listItemRef: E,
            showHoverGradient: h = !1,
            nitroHoverGradient: I = !1,
            hoverGradientStart: R,
            hoverGradientMiddle: j,
            hoverGradientEnd: T,
            ...S
        } = e,
        { width: C, ref: M } = (0, G.Ay)(),
        y = l.useRef(null),
        D = l.useRef(null),
        b = (0, f.A)(E, y);
    return (0, i.jsx)(eN, {
        className: s()(eD.Ix, { [eD.Ij]: m.Fr }, v),
        onClick: N,
        role: g,
        focusProps: { ...eG, focusTarget: D, ringTarget: y },
        "aria-posinset": p,
        "aria-setsize": _,
        ref: b,
        children: (0, i.jsxs)(x.H, {
            as: "div",
            selected: n,
            className: s()(o, eD.bG, eD.$J, { [eD.Q2]: n }),
            children: [
                h &&
                    (0, i.jsx)(ek, {
                        eventTargetRef: y,
                        isNitro: I,
                        contentWidth: C,
                        hoverGradientStart: R,
                        hoverGradientMiddle: j,
                        hoverGradientEnd: T,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: A },
                    className: eD.nf,
                    innerRef: D,
                    ...S,
                    children: [
                        (0, i.jsx)(k.A, {
                            ref: h ? M : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(r, {
                                size: "refresh_sm",
                                className: s()(eD.e_, a),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: eD.xx,
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
}
function eF(e) {
    let {
            channel: t,
            selected: r = !1,
            user: a,
            activities: m,
            applicationStream: g,
            voiceChannel: p,
            isTyping: _,
            status: E,
            isMobile: h,
            isVR: I,
            nameplate: R,
            ref: j,
            "aria-posinset": T,
            "aria-setsize": G,
        } = e,
        [U, q] = l.useState(!1),
        [eo, eu] = l.useState(!1),
        [eA, ef] = l.useState(!1),
        em = l.useRef(null),
        [ej, eT] = l.useState(!1),
        eS = (0, A.K)(
            l.useCallback((e) => {
                eT(e);
            }, []),
        ),
        eM = l.useRef(null),
        ey = j ?? eM,
        ek = (0, f.A)(ey, eS),
        { showMenuItemPopover: eB, markMenuItemPopoverAsDismissed: eF } = (0, eE.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === r,
            isTargetInViewport: ej,
            channelType: t.type,
        }),
        {
            avatarSrc: ez,
            avatarDecorationSrc: eV,
            eventHandlers: eH,
        } = (0, eR.A)({ userId: a?.id, size: S._3.SIZE_32, animateOnHover: !(r || U || eo || eA) }),
        eW = t.isMultiUserDM(),
        eY = t.isSystemDM(),
        eK = !eW && !eY && t.type === er.rbe.DM,
        eX = eK && a?.primaryGuild != null,
        eJ = (0, N.bG)([eC.Ay], () => eC.Ay.isChannelMuted(t.getGuildId(), t.id)),
        eQ = (0, N.bG)([eC.Ay], () => eC.Ay.isMessagesFavorite(t.id)),
        { ignored: eq, blocked: eZ } = (0, N.cf)([et.A], () => ({
            ignored: et.A.isIgnored(t.getRecipientId()),
            blocked: et.A.isBlocked(t.getRecipientId()),
        })),
        e$ = eK && eq,
        e0 = eK && eZ,
        e2 = (eJ || e$ || e0) && !(r || U),
        e8 = (0, N.bG)([ex.Ay], () => ex.Ay.getMentionCount(t.id) > 0),
        e4 = (0, H.Ay)(t),
        e1 = l.useRef(null),
        e5 = null != R && (r || U || eA);
    function e9() {
        q(!0);
    }
    function e6() {
        q(!1);
    }
    function e3() {
        eu(!0);
    }
    function e7() {
        eu(!1);
    }
    function te(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null != e && (e.preventDefault(), e.stopPropagation()), D.A.closePrivateChannel(t.id, r, n);
    }
    function tt() {
        D.A.preload(er.ME, t.id);
    }
    function tn(e) {
        e.stopPropagation();
    }
    function ti(e) {
        e.target === e.currentTarget && em.current?.click();
    }
    function tl(e) {
        let l =
            "contextmenu" === e.type
                ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        ef(!0),
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
                          return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: r });
                      },
                      { impressionName: l, noBlurEvent: !0, onClose: () => ef(!1) },
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
                              n.e("38730"),
                              n.e("71210"),
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
                              n.e("71133"),
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
                          return (n) => (0, i.jsx)(e, { ...n, user: a, channel: t, channelSelected: r });
                      },
                      { impressionName: l, onClose: () => ef(!1) },
                  );
    }
    function tr(e) {
        e.preventDefault(), e.stopPropagation();
        let l = ea.intl.formatToPlainString(ea.t.hJ5Ap4, { name: e4 }),
            r = ea.intl.format(ea.t.SSIVOu, { name: e4 });
        t.isManaged() &&
            ((l = ea.intl.formatToPlainString(ea.t.hVGjEW, { name: e4 })),
            (r = ea.intl.format(ea.t.IK1Qvs, { name: e4 }))),
            (0, C.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("56852"), n.e("37803")]).then(n.bind(n, 148166));
                return (t) => (0, i.jsx)(e, { title: l, body: r, onSubmit: te, ...t });
            });
    }
    let ts = (0, i.jsx)(ep.A, {
            userName: e4,
            displayNameStyles: a?.displayNameStyles,
            effectDisplayType: U || r || eA ? eg.G.ANIMATED : eg.G.PLAIN,
            loop: U,
            boldFontOpacity: 0.9,
        }),
        ta = eX
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      ts,
                      (0, i.jsx)(eI.Ay, {
                          primaryGuild: a?.primaryGuild,
                          userId: a?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: s()(eD.fc, { [eD.Y_]: e2 }),
                      }),
                  ],
              })
            : ts,
        to = l.useRef(null),
        tu = (0, ev.W)({ location: "PrivateChannel" }) && a?.displayNameStyles != null,
        { isIncomingCall: tc, isOngoingCall: td } = (0, B.A)(t.id),
        tA = [
            (0, z.Ay)({ channel: t, unread: e8, isIncomingCall: tc, isOngoingCall: td }),
            (0, z.r2)({ channel: t, muted: eJ, userStatus: E, isFavorite: eQ }),
        ]
            .filter(Boolean)
            .join(", "),
        tf = (0, N.bG)([ex.Ay], () => ex.Ay.lastMessageId(t.id)),
        { waveShouldShow: tm, wavePressed: tN } = (function (e, t) {
            let n,
                i,
                r,
                s,
                a,
                o,
                u,
                c,
                d,
                A,
                [f, m] = l.useState(!1),
                v = l.useCallback(async () => {
                    if (!f) {
                        m(!0),
                            (0, Q.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, J.pX)(er.BVt.CHANNEL(er.ME, e.id));
                        try {
                            await X.A.sendStickers(e.id, ["749054660769218631"], "", { location: es.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok || 429 !== e.status || (0, W.P0)((0, Y.o)(ea.intl.string(ea.t.Whhv4w), K.Ck.FAILURE));
                        }
                        m(!1);
                    }
                }, [e.id, f]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (r = (0, N.bG)([et.A], () => null != i && et.A.isFriend(i))),
                    (s = (0, N.bG)([et.A], () => null != i && et.A.isIgnored(i))),
                    (a = (0, N.bG)([ee.A], () => {
                        let t = ee.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === er.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(el.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, N.bG)([ee.A], () => ee.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = ei.default.extractTimestamp(e.id)),
                    (d = (0, en.v0)(Z()(), Z()(c), 18144e5)),
                    (A = (0, $.l)(e.id)),
                    n && r && !s && (o || null == t || a) && !u && d && null == A),
                wavePressed: v,
            };
        })(t, tf);
    return (0, i.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: n, ...l } = e;
            return (0, i.jsxs)(eN, {
                className: s()(eD.Ix, eD.dm),
                role: n,
                focusProps: { ...eG, focusTarget: em, ringTarget: ey },
                ref: ek,
                onMouseEnter: e9,
                onMouseLeave: e6,
                onMouseDown: tt,
                onFocus: e3,
                onBlur: e7,
                onContextMenu: tl,
                "aria-setsize": G,
                "aria-posinset": T,
                children: [
                    e8 ? (0, i.jsx)("div", { className: s()(eD.dM, { [eD.SU]: e2 }) }) : null,
                    (0, i.jsxs)(x.H, {
                        className: s()(eD.bG, { [eD.Q2]: r || eA }),
                        as: "div",
                        onClick: ti,
                        muted: e2,
                        selected: r,
                        children: [
                            (0, i.jsx)(ed.A, {
                                nameplate: e5 ? R : void 0,
                                selected: r,
                                hovered: U,
                                content: to,
                                placement: ec.u.CHANNEL,
                            }),
                            (0, i.jsx)(u.N_, {
                                innerRef: em,
                                to: er.BVt.CHANNEL(er.ME, t.id),
                                className: s()(eD.nf, eD.Zi),
                                "aria-label": tA,
                                ...l,
                                children: (0, i.jsx)(k.A, {
                                    ref: to,
                                    avatar: (function () {
                                        let e = S._3.SIZE_32;
                                        if (t.isMultiUserDM())
                                            if (t.recipients.length >= 2 && null == t.icon)
                                                return (0, i.jsx)(eh.A, {
                                                    "aria-hidden": !0,
                                                    recipients: t.recipients,
                                                    size: e,
                                                    isTyping: _,
                                                    status: E,
                                                });
                                            else
                                                return (0, i.jsx)(eb, {
                                                    ...eH,
                                                    src: (0, V.Y)(t),
                                                    "aria-hidden": !0,
                                                    size: e,
                                                    status: _ ? er.clD.ONLINE : E,
                                                    isTyping: _,
                                                });
                                        o()(
                                            null != a,
                                            "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                        );
                                        let n = null;
                                        return (
                                            a.isSystemUser() || (n = (0, w.A)(m) ? er.clD.STREAMING : E),
                                            (0, i.jsx)(eb, {
                                                ...eH,
                                                size: S._3.SIZE_32,
                                                src: ez,
                                                avatarDecoration: eV,
                                                status: n,
                                                isMobile: h,
                                                isVR: I,
                                                isTyping: _,
                                                "aria-label": a.username,
                                                statusTooltip: !0,
                                            })
                                        );
                                    })(),
                                    highlighted: e8 && !e2,
                                    muted: e2,
                                    subText: t.isSystemDM()
                                        ? (0, i.jsx)(M.E, {
                                              variant: "text-xs/medium",
                                              color: "none",
                                              className: eD.W$,
                                              children: (0, F.A)(t.id)
                                                  ? ea.intl.string(ea.t.FL5T01)
                                                  : ea.intl.string(ea.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, i.jsx)(M.E, {
                                                variant: "text-xs/medium",
                                                color: "none",
                                                className: eD.W$,
                                                children: ea.intl.format(ea.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, O.A)({
                                                  activities: m,
                                                  status: E,
                                                  applicationStream: g,
                                                  voiceChannel: p,
                                              })
                                            ? (0, i.jsx)(L.A, {
                                                  user: a,
                                                  activities: m,
                                                  voiceChannel: p,
                                                  applicationStream: g,
                                                  animateEmoji: U || eo || eA,
                                                  textClassName: eD.XD,
                                                  iconClassName: e2 ? eD.tG : void 0,
                                              })
                                            : null,
                                    name: (0, i.jsx)(v.A, { className: s()(eD.uN, { [eD.e8]: tu }), children: ta }),
                                    decorators: t.isSystemDM()
                                        ? (0, i.jsx)(P.A, { className: eD.G$, type: P.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: tu,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: s()(eD._q, { [eD.EY]: e5 }),
                                children: [
                                    e0 ? (0, i.jsx)(eP, {}) : e$ ? (0, i.jsx)(eL, {}) : eQ ? (0, i.jsx)(eU, {}) : null,
                                    tm && null != e4
                                        ? (0, i.jsx)(eO, { channelName: e4, onClick: tN, showNameplate: e5 })
                                        : null,
                                    tm
                                        ? null
                                        : (0, i.jsx)(ew, {
                                              icon: y.P,
                                              "aria-label": eW
                                                  ? ea.intl.string(ea.t["26C4oi"])
                                                  : ea.intl.string(ea.t.jsvgc3),
                                              onClick: eW ? tr : te,
                                              onMouseDown: tn,
                                              nameplate: R,
                                              reducedClickTarget: !0,
                                              visibleElementRef: e1,
                                          }),
                                ],
                            }),
                        ],
                    }),
                    eB && (0, i.jsx)(e_.A, { targetElementRef: ey, markMenuItemPopoverAsDismissed: eF }),
                ],
            });
        },
    });
}
let ez =
    21552 == n.j
        ? function (e) {
              let { channel: t, selected: n, ...l } = e,
                  r = (0, N.bG)([eM.default], () => eM.default.getUser(t.getRecipientId())),
                  s = r?.id,
                  a = (0, N.cf)([eT.A, ej.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = eT.A.getState().statuses;
                          t.recipients.some((e) => n[e] === er.clD.ONLINE) && (e = er.clD.ONLINE);
                      } else null != s && (e = eT.A.getStatus(s));
                      return {
                          status: e,
                          activities: null != s ? eT.A.getActivities(s) : null,
                          applicationStream: null != s ? ej.A.getAnyStreamForUser(s) : null,
                          isMobile: null != s && eT.A.isMobileOnline(s),
                          isVR: null != s && eT.A.isVROnline(s),
                      };
                  }, [t, s]),
                  { voiceChannel: o } = (0, U.Ay)({ userId: s }),
                  u = (0, eo.r)({ user: r }),
                  c = (0, N.bG)(
                      [eM.default, eS.A],
                      () =>
                          t.isMultiUserDM()
                              ? ei.default
                                    .keys(eS.A.getTypingUsers(t.id))
                                    .some((e) => e !== eM.default.getCurrentUser()?.id)
                              : null != r && eS.A.isTyping(t.id, t.getRecipientId()),
                      [t, r],
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(eF, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: a.status === er.clD.ONLINE ? er.clD.ONLINE : void 0,
                        ...l,
                    })
                  : (0, i.jsx)(eF, {
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

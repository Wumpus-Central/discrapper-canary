n.d(t, { ls: () => eP, z9: () => ek, w_: () => eG, Ay: () => ez, th: () => eB });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(284009),
    o = n.n(a);
if (588245 != n.j) var u = n(561028);
var c = n(562708);
if (588245 != n.j) var d = n(837381);
var f = n(172218),
    A = n(612324),
    m = n(607399),
    g = n(17928);
if (588245 != n.j) var N = n(3026);
var v = n(97808);
if (588245 != n.j) var p = n(939249);
if (588245 != n.j) var h = n(866665);
if (588245 != n.j) var j = n(821609);
if (588245 != n.j) var x = n(366605);
if (588245 != n.j) var _ = n(952270);
if (588245 != n.j) var E = n(428678);
var R = n(661531),
    y = n(549254);
if (588245 != n.j) var I = n(445529);
if (588245 != n.j) var S = n(778712);
if (588245 != n.j) var C = n(192308);
if (588245 != n.j) var T = n(834730);
if (588245 != n.j) var D = n(789645);
var M = n(308528),
    b = n(442433),
    G = n(765671),
    w = n(960076),
    U = n(397244),
    L = n(714114),
    O = n(394871),
    P = n(709066),
    k = n(262295),
    B = n(620982),
    z = n(343328),
    F = n(963027),
    H = n(571694),
    V = n(47167);
if (588245 != n.j) var W = n(691540);
if (588245 != n.j) var Y = n(857250);
if (588245 != n.j) var K = n(97483);
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
if (588245 != n.j) var ef = n(259678);
var eA = n(151093);
let em =
        588245 != n.j
            ? r.forwardRef(function (e, t) {
                  let { className: n, focusProps: r, ...l } = e;
                  return (0, i.jsx)(ef.vN, {
                      ...r,
                      children: (0, i.jsx)("li", { className: s()(n, eA.k), ...l, ref: t }),
                  });
              })
            : null,
    eg = 588245 != n.j ? em : null;
var eN = n(824994),
    ev = n(922301),
    ep = n(660184),
    eh = n(3322),
    ej = n(954376),
    ex = n(534400),
    e_ = n(854627),
    eE = n(616356),
    eR = n(290863),
    ey = n(568548),
    eI = n(741961),
    eS = n(543465),
    eC = n(287809),
    eT = n(19575),
    eD = n(403796);
let eM = eT.Ay.getEnableHardwareAcceleration() ? v.Js : v.eu,
    eb = 588245 != n.j ? { offset: { top: 2, bottom: 2, right: 4 } } : null;
function eG(e) {
    let { nameplate: t, icon: n, forceShow: r = !1, reducedClickTarget: l = !1, visibleElementRef: a, ...o } = e,
        u = (0, eu.K)(t);
    return (0, i.jsx)(p.D, {
        className: s()(eD.b, { [eD.DQ]: null != t, [eD.by]: r, [eD.wY]: l }),
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
function ew(e) {
    let { onClick: t, channelName: n, showNameplate: r } = e;
    return (0, i.jsx)("div", {
        className: eD.KQ,
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
function eU() {
    return (0, i.jsx)(x.t, { size: "xs", color: "currentColor", className: eD.wB });
}
function eL() {
    return (0, i.jsx)(_.EyeSlashIcon, { size: "xs", color: "currentColor", className: eD.wB });
}
function eO() {
    return (0, i.jsx)(E.K, { size: "xs", color: "currentColor", className: eD.wB });
}
function eP(e) {
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
                          Color_InnerRing: a ?? R.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? a,
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
            [n, s, a, o],
        );
    return (0, i.jsx)(y.U, { eventTargetRef: t, className: eD.a1, dataBinding: { ...u, DimmerWidth: (l ?? 0) + 32 } });
}
function ek(e) {
    let {
            route: t,
            selected: n,
            icon: l,
            iconClassName: a,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: f,
            onClick: g,
            className: N,
            role: v,
            "aria-posinset": p,
            "aria-setsize": h,
            listItemRef: j,
            showHoverGradient: x = !1,
            nitroHoverGradient: _ = !1,
            hoverGradientStart: E,
            hoverGradientMiddle: R,
            hoverGradientEnd: y,
            ...S
        } = e,
        { width: C, ref: T } = (0, G.Ay)(),
        D = r.useRef(null),
        M = r.useRef(null),
        b = (0, A.A)(j, D);
    return (0, i.jsx)(eg, {
        className: s()(eD.Ix, { [eD.Ij]: m.Fr }, N),
        onClick: g,
        role: v,
        focusProps: { ...eb, focusTarget: M, ringTarget: D },
        "aria-posinset": p,
        "aria-setsize": h,
        ref: b,
        children: (0, i.jsxs)(I.H, {
            as: "div",
            selected: n,
            className: s()(o, eD.bG, eD.$J, { [eD.Q2]: n }),
            children: [
                x &&
                    (0, i.jsx)(eP, {
                        eventTargetRef: D,
                        isNitro: _,
                        contentWidth: C,
                        hoverGradientStart: E,
                        hoverGradientMiddle: R,
                        hoverGradientEnd: y,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: f },
                    className: eD.nf,
                    innerRef: M,
                    ...S,
                    children: [
                        (0, i.jsx)(k.A, {
                            ref: x ? T : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(l, {
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
function eB(e) {
    let {
            channel: t,
            selected: l = !1,
            user: a,
            activities: m,
            applicationStream: v,
            voiceChannel: p,
            isTyping: h,
            status: j,
            isMobile: x,
            isVR: _,
            nameplate: E,
            ref: R,
            "aria-posinset": y,
            "aria-setsize": G,
        } = e,
        [L, $] = r.useState(!1),
        [eo, eu] = r.useState(!1),
        [ef, eA] = r.useState(!1),
        em = r.useRef(null),
        [eE, eR] = r.useState(!1),
        eI = (0, f.K)(
            r.useCallback((e) => {
                eR(e);
            }, []),
        ),
        eC = r.useRef(null),
        eT = R ?? eC,
        eP = (0, A.A)(eT, eI),
        {
            avatarSrc: ek,
            avatarDecorationSrc: eB,
            eventHandlers: ez,
        } = (0, e_.A)({ userId: a?.id, size: S._3.SIZE_32, animateOnHover: !(l || L || eo || ef) }),
        eF = t.isMultiUserDM(),
        eH = t.isSystemDM(),
        eV = !eF && !eH && t.type === el.rbe.DM,
        eW = eV && a?.primaryGuild != null,
        eY = (0, g.bG)([eS.Ay], () => eS.Ay.isChannelMuted(t.getGuildId(), t.id)),
        eK = (0, g.bG)([eS.Ay], () => eS.Ay.isMessagesFavorite(t.id)),
        { ignored: eQ, blocked: eX } = (0, g.cf)([et.A], () => ({
            ignored: et.A.isIgnored(t.getRecipientId()),
            blocked: et.A.isBlocked(t.getRecipientId()),
        })),
        eJ = eV && eQ,
        e$ = eV && eX,
        eq = (eY || eJ || e$) && !(l || L),
        eZ = (0, g.bG)([ey.Ay], () => ey.Ay.getMentionCount(t.id) > 0),
        e0 = (0, V.Ay)(t),
        e2 = r.useRef(null),
        e8 = null != E && (l || L || ef);
    function e5() {
        $(!0);
    }
    function e1() {
        $(!1);
    }
    function e4() {
        eu(!0);
    }
    function e9() {
        eu(!1);
    }
    function e6(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null != e && (e.preventDefault(), e.stopPropagation()), M.A.closePrivateChannel(t.id, l, n);
    }
    function e3() {
        M.A.preload(el.ME, t.id);
    }
    function e7(e) {
        e.stopPropagation();
    }
    function te(e) {
        e.target === e.currentTarget && em.current?.click();
    }
    function tt(e) {
        let r =
            "contextmenu" === e.type
                ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        eA(!0),
            t.isMultiUserDM()
                ? (0, b.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("926132"),
                              n.e("146652"),
                              n.e("893190"),
                              n.e("391763"),
                              n.e("238730"),
                              n.e("979630"),
                              n.e("947502"),
                              n.e("214461"),
                              n.e("21106"),
                              n.e("187048"),
                              n.e("699011"),
                              n.e("836150"),
                              n.e("146149"),
                              n.e("566378"),
                              n.e("17244"),
                              n.e("153416"),
                              n.e("760200"),
                          ]).then(n.bind(n, 4027));
                          return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: l });
                      },
                      { impressionName: r, noBlurEvent: !0, onClose: () => eA(!1) },
                  )
                : (0, b.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("158696"),
                              n.e("41295"),
                              n.e("943630"),
                              n.e("676279"),
                              n.e("545309"),
                              n.e("397705"),
                              n.e("326692"),
                              n.e("926132"),
                              n.e("146652"),
                              n.e("993103"),
                              n.e("893190"),
                              n.e("834552"),
                              n.e("391763"),
                              n.e("708757"),
                              n.e("585968"),
                              n.e("189673"),
                              n.e("571210"),
                              n.e("468403"),
                              n.e("238730"),
                              n.e("229787"),
                              n.e("88342"),
                              n.e("882073"),
                              n.e("797558"),
                              n.e("454625"),
                              n.e("691994"),
                              n.e("311802"),
                              n.e("371133"),
                              n.e("698965"),
                              n.e("576665"),
                              n.e("538887"),
                              n.e("235313"),
                              n.e("776273"),
                              n.e("979630"),
                              n.e("947502"),
                              n.e("436564"),
                              n.e("252229"),
                              n.e("856753"),
                              n.e("245996"),
                              n.e("700792"),
                              n.e("592822"),
                              n.e("823427"),
                              n.e("214461"),
                              n.e("529422"),
                              n.e("172883"),
                              n.e("838056"),
                              n.e("309291"),
                              n.e("493014"),
                              n.e("307059"),
                              n.e("242204"),
                              n.e("349644"),
                              n.e("508829"),
                              n.e("678195"),
                              n.e("21106"),
                              n.e("522261"),
                              n.e("187048"),
                              n.e("442191"),
                              n.e("713708"),
                              n.e("699011"),
                              n.e("836150"),
                              n.e("774021"),
                              n.e("298199"),
                              n.e("17244"),
                              n.e("864464"),
                              n.e("324240"),
                              n.e("960816"),
                              n.e("221879"),
                              n.e("439778"),
                          ]).then(n.bind(n, 385913));
                          return (n) => (0, i.jsx)(e, { ...n, user: a, channel: t, channelSelected: l });
                      },
                      { impressionName: r, onClose: () => eA(!1) },
                  );
    }
    function tn(e) {
        e.preventDefault(), e.stopPropagation();
        let r = ea.intl.formatToPlainString(ea.t.hJ5Ap4, { name: e0 }),
            l = ea.intl.format(ea.t.SSIVOu, { name: e0 });
        t.isManaged() &&
            ((r = ea.intl.formatToPlainString(ea.t.hVGjEW, { name: e0 })),
            (l = ea.intl.format(ea.t.IK1Qvs, { name: e0 }))),
            (0, C.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("556852"), n.e("137803")]).then(n.bind(n, 148166));
                return (t) => (0, i.jsx)(e, { title: r, body: l, onSubmit: e6, ...t });
            });
    }
    let ti = (0, i.jsx)(ep.A, {
            userName: e0,
            displayNameStyles: a?.displayNameStyles,
            effectDisplayType: L || l || ef ? ev.G.ANIMATED : ev.G.PLAIN,
            loop: L,
            boldFontOpacity: 0.9,
        }),
        tr = eW
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      ti,
                      (0, i.jsx)(ex.Ay, {
                          primaryGuild: a?.primaryGuild,
                          userId: a?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: s()(eD.fc, { [eD.Y_]: eq }),
                      }),
                  ],
              })
            : ti,
        tl = r.useRef(null),
        ts = (0, eN.W)({ location: "PrivateChannel" }) && a?.displayNameStyles != null,
        { isIncomingCall: ta, isOngoingCall: to } = (0, B.A)(t.id),
        tu = [
            (0, F.Ay)({ channel: t, unread: eZ, isIncomingCall: ta, isOngoingCall: to }),
            (0, F.r2)({ channel: t, muted: eY, userStatus: j, isFavorite: eK }),
        ]
            .filter(Boolean)
            .join(", "),
        tc = (0, g.bG)([ey.Ay], () => ey.Ay.lastMessageId(t.id)),
        { waveShouldShow: td, wavePressed: tf } = (function (e, t) {
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
                [A, m] = r.useState(!1),
                N = r.useCallback(async () => {
                    if (!A) {
                        m(!0),
                            (0, J.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, X.pX)(el.BVt.CHANNEL(el.ME, e.id));
                        try {
                            await Q.A.sendStickers(e.id, ["749054660769218631"], "", { location: es.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok || 429 !== e.status || (0, W.P0)((0, Y.o)(ea.intl.string(ea.t.Whhv4w), K.Ck.FAILURE));
                        }
                        m(!1);
                    }
                }, [e.id, A]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (l = (0, g.bG)([et.A], () => null != i && et.A.isFriend(i))),
                    (s = (0, g.bG)([et.A], () => null != i && et.A.isIgnored(i))),
                    (a = (0, g.bG)([ee.A], () => {
                        let t = ee.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === el.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(er.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, g.bG)([ee.A], () => ee.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = ei.default.extractTimestamp(e.id)),
                    (d = (0, en.v0)(q()(), q()(c), 18144e5)),
                    (f = (0, Z.l)(e.id)),
                    n && l && !s && (o || null == t || a) && !u && d && null == f),
                wavePressed: N,
            };
        })(t, tc);
    return (0, i.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: n, ...r } = e;
            return (0, i.jsxs)(eg, {
                className: s()(eD.Ix, eD.dm),
                role: n,
                focusProps: { ...eb, focusTarget: em, ringTarget: eT },
                ref: eP,
                onMouseEnter: e5,
                onMouseLeave: e1,
                onMouseDown: e3,
                onFocus: e4,
                onBlur: e9,
                onContextMenu: tt,
                "aria-setsize": G,
                "aria-posinset": y,
                children: [
                    eZ ? (0, i.jsx)("div", { className: s()(eD.dM, { [eD.SU]: eq }) }) : null,
                    (0, i.jsxs)(I.H, {
                        className: s()(eD.bG, { [eD.Q2]: l || ef }),
                        as: "div",
                        onClick: te,
                        muted: eq,
                        selected: l,
                        children: [
                            (0, i.jsx)(ed.A, {
                                nameplate: e8 ? E : void 0,
                                selected: l,
                                hovered: L,
                                content: tl,
                                placement: ec.u.CHANNEL,
                            }),
                            (0, i.jsx)(u.N_, {
                                innerRef: em,
                                to: el.BVt.CHANNEL(el.ME, t.id),
                                className: s()(eD.nf, eD.Zi),
                                "aria-label": tu,
                                ...r,
                                children: (0, i.jsx)(k.A, {
                                    ref: tl,
                                    avatar: (function () {
                                        let e = S._3.SIZE_32;
                                        if (t.isMultiUserDM())
                                            if (t.recipients.length >= 2 && null == t.icon)
                                                return (0, i.jsx)(ej.A, {
                                                    "aria-hidden": !0,
                                                    recipients: t.recipients,
                                                    size: e,
                                                    isTyping: h,
                                                    status: j,
                                                });
                                            else
                                                return (0, i.jsx)(eM, {
                                                    ...ez,
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
                                            a.isSystemUser() || (n = (0, w.A)(m) ? el.clD.STREAMING : j),
                                            (0, i.jsx)(eM, {
                                                ...ez,
                                                size: S._3.SIZE_32,
                                                src: ek,
                                                avatarDecoration: eB,
                                                status: n,
                                                isMobile: x,
                                                isVR: _,
                                                isTyping: h,
                                                "aria-label": a.username,
                                                statusTooltip: !0,
                                            })
                                        );
                                    })(),
                                    highlighted: eZ && !eq,
                                    muted: eq,
                                    subText: t.isSystemDM()
                                        ? (0, i.jsx)(T.E, {
                                              variant: "text-xs/medium",
                                              color: "none",
                                              className: eD.W$,
                                              children: (0, z.A)(t.id)
                                                  ? ea.intl.string(ea.t.FL5T01)
                                                  : ea.intl.string(ea.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, i.jsx)(T.E, {
                                                variant: "text-xs/medium",
                                                color: "none",
                                                className: eD.W$,
                                                children: ea.intl.format(ea.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, U.A)({
                                                  activities: m,
                                                  status: j,
                                                  applicationStream: v,
                                                  voiceChannel: p,
                                              })
                                            ? (0, i.jsx)(O.A, {
                                                  user: a,
                                                  activities: m,
                                                  voiceChannel: p,
                                                  applicationStream: v,
                                                  animateEmoji: L || eo || ef,
                                                  textClassName: eD.XD,
                                                  iconClassName: eq ? eD.tG : void 0,
                                              })
                                            : null,
                                    name: (0, i.jsx)(N.A, { className: s()(eD.uN, { [eD.e8]: ts }), children: tr }),
                                    decorators: t.isSystemDM()
                                        ? (0, i.jsx)(P.A, { className: eD.G$, type: P.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: ts,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: s()(eD._q, { [eD.EY]: e8 }),
                                children: [
                                    e$ ? (0, i.jsx)(eO, {}) : eJ ? (0, i.jsx)(eL, {}) : eK ? (0, i.jsx)(eU, {}) : null,
                                    td && null != e0
                                        ? (0, i.jsx)(ew, { channelName: e0, onClick: tf, showNameplate: e8 })
                                        : null,
                                    td
                                        ? null
                                        : (0, i.jsx)(eG, {
                                              icon: D.P,
                                              "aria-label": eF
                                                  ? ea.intl.string(ea.t["26C4oi"])
                                                  : ea.intl.string(ea.t.jsvgc3),
                                              onClick: eF ? tn : e6,
                                              onMouseDown: e7,
                                              nameplate: E,
                                              reducedClickTarget: !0,
                                              visibleElementRef: e2,
                                          }),
                                ],
                            }),
                        ],
                    }),
                    l && (0, i.jsx)(eh.A, { targetElementRef: eT, channelType: t.type, isTargetInViewport: eE }),
                ],
            });
        },
    });
}
let ez =
    221552 == n.j
        ? function (e) {
              let { channel: t, selected: n, ...r } = e,
                  l = (0, g.bG)([eC.default], () => eC.default.getUser(t.getRecipientId())),
                  s = l?.id,
                  a = (0, g.cf)([eR.A, eE.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = eR.A.getState().statuses;
                          t.recipients.some((e) => n[e] === el.clD.ONLINE) && (e = el.clD.ONLINE);
                      } else null != s && (e = eR.A.getStatus(s));
                      return {
                          status: e,
                          activities: null != s ? eR.A.getActivities(s) : null,
                          applicationStream: null != s ? eE.A.getAnyStreamForUser(s) : null,
                          isMobile: null != s && eR.A.isMobileOnline(s),
                          isVR: null != s && eR.A.isVROnline(s),
                      };
                  }, [t, s]),
                  { voiceChannel: o } = (0, L.Ay)({ userId: s }),
                  u = (0, eo.r)({ user: l }),
                  c = (0, g.bG)(
                      [eC.default, eI.A],
                      () =>
                          t.isMultiUserDM()
                              ? ei.default
                                    .keys(eI.A.getTypingUsers(t.id))
                                    .some((e) => e !== eC.default.getCurrentUser()?.id)
                              : null != l && eI.A.isTyping(t.id, t.getRecipientId()),
                      [t, l],
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(eB, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: a.status === el.clD.ONLINE ? el.clD.ONLINE : void 0,
                        ...r,
                    })
                  : (0, i.jsx)(eB, {
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

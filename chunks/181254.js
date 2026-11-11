n.d(t, { z9: () => eF, ls: () => eH, th: () => eV, w_: () => ek, Ay: () => eW });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r);
if (588245 != n.j) var u = n(561028);
var c = n(613412);
if (588245 != n.j) var d = n(837381);
var m = n(612324),
    A = n(607399),
    f = n(855986);
if (588245 != n.j) var N = n(3026);
var v = n(97808);
if (588245 != n.j) var g = n(939249);
if (588245 != n.j) var p = n(866665);
if (588245 != n.j) var j = n(821609);
if (588245 != n.j) var h = n(366605);
if (588245 != n.j) var x = n(952270);
if (588245 != n.j) var I = n(428678);
var y = n(646514),
    _ = n(704007);
if (588245 != n.j) var C = n(445529);
if (588245 != n.j) var S = n(778712);
if (588245 != n.j) var T = n(192308);
if (588245 != n.j) var E = n(834730);
if (588245 != n.j) var R = n(789645);
var M = n(308528),
    D = n(442433),
    b = n(765671),
    G = n(736653),
    P = n(657043),
    w = n(960076),
    O = n(397244),
    k = n(714114),
    B = n(342312),
    U = n(709066),
    L = n(262295),
    z = n(620982),
    H = n(343328),
    F = n(963027),
    V = n(571694),
    W = n(47167);
if (588245 != n.j) var Y = n(858899);
var X = n(138399),
    J = n(976860),
    Q = n(330001),
    K = n(536637),
    $ = n.n(K),
    Z = n(74114),
    q = n(596344),
    ee = n(994500),
    et = n(5377),
    en = n(811091),
    ei = n(746080),
    el = n(652215);
let es = 588245 != n.j ? 18144e5 : null;
var ea = n(381941),
    er = n(792996),
    eo = n(449582),
    eu = n(351952),
    ec = n(88686),
    ed = n(214881);
if (588245 != n.j) var em = n(559106);
var eA = n(351278);
let ef =
    588245 != n.j
        ? function (e) {
              let { className: t, focusProps: n, ref: l, ...s } = e;
              return (0, i.jsx)(em.vN, { ...n, children: (0, i.jsx)("li", { className: a()(t, eA.k), ...s, ref: l }) });
          }
        : null;
var eN = n(824994),
    ev = n(922301),
    eg = n(16371),
    ep = n(954376),
    ej = n(534400),
    eh = n(693879);
let ex = (0, n(945810).mj)({
    name: "2026-10-gdm-duration-timer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function eI(e) {
    let { callMessageId: t, className: n } = e,
        s = ex.useConfig({ location: "PrivateChannelCallDuration" }).enabled,
        a = l.useMemo(() => ({ start: en.default.extractTimestamp(t) }), [t]);
    return s
        ? (0, i.jsx)("div", {
              className: n,
              children: (0, i.jsx)(eh.z, { textColor: "text-feedback-positive", entry: a }),
          })
        : null;
}
var ey = n(897898),
    e_ = n(854627),
    eC = n(616356),
    eS = n(470710),
    eT = n(290863),
    eE = n(218461),
    eR = n(309010),
    eM = n(741961),
    eD = n(543465),
    eb = n(287809),
    eG = n(253400),
    eP = n(763097);
let ew = eG.Ay.getEnableHardwareAcceleration() ? v.Js : v.eu,
    eO = 588245 != n.j ? { offset: { top: 2, bottom: 2, right: 4 } } : null;
function ek(e) {
    let { nameplate: t, icon: n, forceShow: l = !1, visibleElementRef: s, ...r } = e,
        o = (0, eu.K)(t),
        u = (0, P.BX)("SideButton");
    return (0, i.jsx)(g.D, {
        className: a()(eP.b, { [eP.DQ]: null != t, [eP.by]: l }),
        style: o,
        ...r,
        focusProps: u ? void 0 : { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: s,
            className: a()(eP.b3, { [eP.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: a()(eP.ut, { [eP.Uq]: null != t }),
            }),
        }),
    });
}
function eB(e) {
    let { onClick: t, channelName: n, showNameplate: l } = e;
    return (0, i.jsx)("div", {
        className: eP.KQ,
        children: (0, i.jsx)(p.m, {
            text: er.intl.formatToPlainString(er.t.m0zYbV, { username: n }),
            children: (0, i.jsx)(j.$, {
                size: "sm",
                variant: l ? "overlay-secondary" : "secondary",
                onClick: t,
                text: er.intl.string(er.t.pVlP58),
            }),
        }),
    });
}
function eU() {
    return (0, i.jsx)(h.PinIcon, { size: "xs", color: "currentColor", className: eP.wB });
}
function eL() {
    return (0, i.jsx)(x.EyeSlashIcon, { size: "xs", color: "currentColor", className: eP.wB });
}
function ez() {
    return (0, i.jsx)(I.DenyIcon, { size: "xs", color: "currentColor", className: eP.wB });
}
function eH(e) {
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
                          Color_InnerRing: r ?? y.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? r,
                          Color_OuterRing: o,
                          NitroVFX: !1,
                      }
                    : n
                      ? {
                            Color_GradientCenter: y.A.colors.NITRO_TAB_GRADIENT_CENTER,
                            Color_InnerRing: y.A.colors.NITRO_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: y.A.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !0,
                        }
                      : {
                            Color_GradientCenter: y.A.colors.STANDARD_TAB_GRADIENT_CENTER,
                            Color_InnerRing: y.A.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: y.A.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !1,
                        },
            [n, a, r, o],
        );
    return (0, i.jsx)(_.U, { eventTargetRef: t, className: eP.a1, dataBinding: { ...u, DimmerWidth: (s ?? 0) + 32 } });
}
function eF(e) {
    let {
            route: t,
            selected: n,
            icon: s,
            iconClassName: r,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: f,
            onClick: N,
            className: v,
            role: g,
            "aria-posinset": p,
            "aria-setsize": j,
            listItemRef: h,
            showHoverGradient: x = !1,
            nitroHoverGradient: I = !1,
            hoverGradientStart: y,
            hoverGradientMiddle: _,
            hoverGradientEnd: S,
            ...T
        } = e,
        { width: E, ref: R } = (0, b.Ay)(),
        M = l.useRef(null),
        D = l.useRef(null),
        G = (0, m.A)(h, M);
    return (0, i.jsx)(ef, {
        className: a()(eP.Ix, { [eP.Ij]: A.Fr }, v),
        onClick: N,
        role: g,
        focusProps: { ...eO, focusTarget: D, ringTarget: M },
        "aria-posinset": p,
        "aria-setsize": j,
        ref: G,
        children: (0, i.jsxs)(C.H, {
            as: "div",
            selected: n,
            className: a()(o, eP.bG, eP.$J, { [eP.Q2]: n }),
            children: [
                x &&
                    (0, i.jsx)(eH, {
                        eventTargetRef: M,
                        isNitro: I,
                        contentWidth: E,
                        hoverGradientStart: y,
                        hoverGradientMiddle: _,
                        hoverGradientEnd: S,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: f },
                    className: eP.nf,
                    innerRef: D,
                    ...T,
                    children: [
                        (0, i.jsx)(L.A, {
                            ref: x ? R : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(s, {
                                size: "refresh_sm",
                                className: a()(eP.e_, r),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: eP.xx,
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
            user: r,
            activities: m,
            applicationStream: A,
            voiceChannel: v,
            isTyping: g,
            status: p,
            isMobile: j,
            isVR: h,
            nameplate: x,
            ref: I,
            "aria-posinset": y,
            "aria-setsize": _,
        } = e,
        [b, P] = l.useState(!1),
        [k, K] = l.useState(!1),
        [eo, eu] = l.useState(!1),
        em = l.useRef(null),
        eA = l.useRef(null),
        eh = I ?? eA,
        {
            avatarSrc: ex,
            avatarDecorationSrc: eC,
            eventHandlers: eT,
        } = (0, e_.A)({ userId: r?.id, size: S._3.SIZE_32, animateOnHover: !(s || b || k || eo) }),
        eM = t.isMultiUserDM(),
        eb = t.isSystemDM(),
        eG = !eM && !eb && t.type === el.rbe.DM,
        eH = eG && r?.primaryGuild != null,
        eF = (0, f.bG)([eD.Ay], () => eD.Ay.isChannelMuted(t.getGuildId(), t.id)),
        eV = (0, f.bG)([eD.Ay], () => eD.Ay.isMessagesFavorite(t.id)),
        { ignored: eW, blocked: eY } = (0, f.cf)([ee.A], () => ({
            ignored: ee.A.isIgnored(t.getRecipientId()),
            blocked: ee.A.isBlocked(t.getRecipientId()),
        })),
        eX = eG && eW,
        eJ = eG && eY,
        eQ = (eF || eX || eJ) && !(s || b),
        eK = (0, f.bG)([eE.Ay], () => eE.Ay.getMentionCount(t.id) > 0),
        e$ = (0, W.Ay)(t),
        eZ = (0, f.bG)(
            [eS.A, eR.Ay],
            () => (eR.Ay.getVoiceChannelId() === t.id && eS.A.isCallActive(t.id) ? eS.A.getMessageId(t.id) : null),
            [t.id],
        ),
        eq = l.useRef(null),
        e0 = null != x && (s || b || eo),
        e2 = (0, G.Ay)();
    function e1() {
        P(!0);
    }
    function e8() {
        P(!1);
    }
    function e5() {
        K(!0);
    }
    function e3() {
        K(!1);
    }
    function e9(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (null != e && (e.preventDefault(), e.stopPropagation()), M.A.closePrivateChannel(t.id, s, n));
    }
    function e4() {
        M.A.preload(el.ME, t.id);
    }
    function e6(e) {
        e.stopPropagation();
    }
    function e7(e) {
        e.target === e.currentTarget && em.current?.click();
    }
    function te(e) {
        let l =
            "contextmenu" === e.type
                ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        (eu(!0),
            t.isMultiUserDM()
                ? (0, D.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e(476662),
                              n.e(253044),
                              n.e(311913),
                              n.e(881717),
                              n.e(363269),
                              n.e(474172),
                              n.e(926132),
                              n.e(393336),
                              n.e(893190),
                              n.e(489218),
                              n.e(912875),
                              n.e(146652),
                              n.e(862782),
                              n.e(55348),
                              n.e(391763),
                              n.e(491001),
                              n.e(482861),
                              n.e(382563),
                              n.e(130674),
                              n.e(947502),
                              n.e(965789),
                              n.e(957506),
                              n.e(190889),
                              n.e(61129),
                              n.e(205941),
                              n.e(150773),
                              n.e(331203),
                              n.e(255302),
                              n.e(935483),
                              n.e(275289),
                              n.e(836150),
                              n.e(566378),
                              n.e(699011),
                              n.e(17244),
                              n.e(146149),
                              n.e(996028),
                              n.e(153416),
                              n.e(760200),
                          ]).then(n.bind(n, 4027));
                          return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: s });
                      },
                      { impressionName: l, noBlurEvent: !0, onClose: () => eu(!1) },
                  )
                : (0, D.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e(476662),
                              n.e(253044),
                              n.e(311913),
                              n.e(881717),
                              n.e(339715),
                              n.e(924697),
                              n.e(147119),
                              n.e(876400),
                              n.e(24312),
                              n.e(622936),
                              n.e(216947),
                              n.e(463317),
                              n.e(363269),
                              n.e(474172),
                              n.e(676081),
                              n.e(926132),
                              n.e(834552),
                              n.e(993103),
                              n.e(708757),
                              n.e(585968),
                              n.e(393336),
                              n.e(893190),
                              n.e(489218),
                              n.e(912875),
                              n.e(713708),
                              n.e(146652),
                              n.e(862782),
                              n.e(55348),
                              n.e(776273),
                              n.e(885533),
                              n.e(391763),
                              n.e(189673),
                              n.e(234236),
                              n.e(592028),
                              n.e(571210),
                              n.e(425906),
                              n.e(123216),
                              n.e(576432),
                              n.e(797558),
                              n.e(491001),
                              n.e(182408),
                              n.e(451162),
                              n.e(229787),
                              n.e(88342),
                              n.e(936320),
                              n.e(482861),
                              n.e(576665),
                              n.e(311802),
                              n.e(698965),
                              n.e(382563),
                              n.e(235313),
                              n.e(454625),
                              n.e(371133),
                              n.e(41991),
                              n.e(130674),
                              n.e(959669),
                              n.e(715038),
                              n.e(579245),
                              n.e(947502),
                              n.e(252229),
                              n.e(245996),
                              n.e(680986),
                              n.e(700792),
                              n.e(965789),
                              n.e(957506),
                              n.e(552172),
                              n.e(529422),
                              n.e(823427),
                              n.e(60086),
                              n.e(190889),
                              n.e(242204),
                              n.e(856753),
                              n.e(61129),
                              n.e(307059),
                              n.e(205941),
                              n.e(309291),
                              n.e(150773),
                              n.e(331203),
                              n.e(255302),
                              n.e(493014),
                              n.e(838056),
                              n.e(349644),
                              n.e(508829),
                              n.e(172883),
                              n.e(522261),
                              n.e(935483),
                              n.e(169103),
                              n.e(873786),
                              n.e(678195),
                              n.e(736674),
                              n.e(275289),
                              n.e(836150),
                              n.e(774021),
                              n.e(699011),
                              n.e(17244),
                              n.e(298199),
                              n.e(861649),
                              n.e(324240),
                              n.e(304866),
                              n.e(439778),
                              n.e(996028),
                              n.e(960816),
                          ]).then(n.bind(n, 385913));
                          return (n) => (0, i.jsx)(e, { ...n, user: r, channel: t, channelSelected: s });
                      },
                      { impressionName: l, onClose: () => eu(!1) },
                  ));
    }
    function tt(e) {
        (e.preventDefault(), e.stopPropagation());
        let l = er.intl.formatToPlainString(er.t.hJ5Ap4, { name: e$ }),
            s = er.intl.format(er.t.SSIVOu, { name: e$ });
        (t.isManaged() &&
            ((l = er.intl.formatToPlainString(er.t.hVGjEW, { name: e$ })),
            (s = er.intl.format(er.t.IK1Qvs, { name: e$ }))),
            (0, T.mM)(async () => {
                let { default: e } = await Promise.all([n.e(446215), n.e(137803)]).then(n.bind(n, 925785));
                return (t) => (0, i.jsx)(e, { title: l, body: s, onSubmit: e9, ...t });
            }));
    }
    let tn = (0, i.jsx)(eg.A, {
            userName: e$,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: b || s || eo ? ev.G.ANIMATED : ev.G.PLAIN,
            loop: b,
            boldFontOpacity: 0.9,
        }),
        ti = eH
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      tn,
                      (0, i.jsx)(ej.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(eP.fc, { [eP.Y_]: eQ }),
                      }),
                  ],
              })
            : tn,
        tl = l.useRef(null),
        ts = (0, eN.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        { isIncomingCall: ta, isOngoingCall: tr } = (0, z.A)(t.id),
        to = [
            (0, F.Ay)({ channel: t, unread: eK, isIncomingCall: ta, isOngoingCall: tr, ignored: eX, blocked: eJ }),
            (0, F.r2)({ channel: t, muted: eF, userStatus: p, isFavorite: eV }),
        ]
            .filter(Boolean)
            .join(", "),
        tu = (0, f.bG)([eE.Ay], () => eE.Ay.lastMessageId(t.id)),
        { waveShouldShow: tc, wavePressed: td } = (function (e, t) {
            let n,
                i,
                s,
                a,
                r,
                o,
                u,
                c,
                d,
                m,
                [A, N] = l.useState(!1),
                v = l.useCallback(async () => {
                    if (!A) {
                        (N(!0),
                            (0, Q.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, J.pX)(el.BVt.CHANNEL(el.ME, e.id)));
                        try {
                            await X.A.sendStickers(e.id, ["749054660769218631"], "", { location: ea.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok ||
                                429 !== e.status ||
                                (0, Y.P0)({ text: er.intl.string(er.t.Whhv4w), variant: "critical" });
                        }
                        N(!1);
                    }
                }, [e.id, A]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (s = (0, f.bG)([ee.A], () => null != i && ee.A.isFriend(i))),
                    (a = (0, f.bG)([ee.A], () => null != i && ee.A.isIgnored(i))),
                    (r = (0, f.bG)([q.A], () => {
                        let t = q.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === el.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(ei.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, f.bG)([q.A], () => q.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = en.default.extractTimestamp(e.id)),
                    (d = (0, et.v0)($()(), $()(c), es)),
                    (m = (0, Z.l)(e.id)),
                    n && s && !a && (o || null == t || r) && !u && d && null == m),
                wavePressed: v,
            };
        })(t, tu);
    return (0, i.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: n, ...l } = e;
            return (0, i.jsxs)(ef, {
                className: a()(eP.Ix, eP.dm),
                role: n,
                focusProps: { ...eO, focusTarget: em, ringTarget: eh },
                ref: eh,
                onMouseEnter: e1,
                onMouseLeave: e8,
                onMouseDown: e4,
                onFocus: e5,
                onBlur: e3,
                onContextMenu: te,
                "aria-setsize": _,
                "aria-posinset": y,
                children: [
                    eK ? (0, i.jsx)("div", { className: a()(eP.dM, { [eP.SU]: eQ }) }) : null,
                    (0, i.jsxs)(C.H, {
                        className: a()(eP.bG, { [eP.Q2]: s || eo }),
                        as: "div",
                        onClick: e7,
                        muted: eQ,
                        selected: s,
                        children: [
                            (0, i.jsx)(ed.A, {
                                nameplate: e0 ? x : void 0,
                                selected: s,
                                hovered: b,
                                content: tl,
                                placement: ec.u.CHANNEL,
                            }),
                            (0, i.jsx)(u.N_, {
                                innerRef: em,
                                to: el.BVt.CHANNEL(el.ME, t.id),
                                className: a()(eP.nf, eP.Zi),
                                "aria-label": to,
                                onAuxClick: (e) => (0, ey.A)(e, t),
                                ...l,
                                children: (0, i.jsx)(L.A, {
                                    ref: tl,
                                    avatar: (function () {
                                        let e = S._3.SIZE_32;
                                        if (t.isMultiUserDM())
                                            if (t.recipients.length >= 2 && null == t.icon)
                                                return (0, i.jsx)(ep.A, {
                                                    "aria-hidden": !0,
                                                    recipients: t.recipients,
                                                    size: e,
                                                    isTyping: g,
                                                    status: p,
                                                });
                                            else
                                                return (0, i.jsx)(ew, {
                                                    ...eT,
                                                    src: (0, V.Y)(t),
                                                    "aria-hidden": !0,
                                                    size: e,
                                                    status: g ? el.clD.ONLINE : p,
                                                    isTyping: g,
                                                });
                                        o()(
                                            null != r,
                                            "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                        );
                                        let n = null;
                                        return (
                                            r.isSystemUser() || (n = (0, w.A)(m) ? el.clD.STREAMING : p),
                                            (0, i.jsx)(ew, {
                                                ...eT,
                                                size: S._3.SIZE_32,
                                                src: ex,
                                                avatarDecoration: eC,
                                                status: n,
                                                isMobile: j,
                                                isVR: h,
                                                isTyping: g,
                                                "aria-label": r.username,
                                                statusTooltip: !0,
                                            })
                                        );
                                    })(),
                                    highlighted: eK && !eQ,
                                    muted: eQ,
                                    subText: t.isSystemDM()
                                        ? (0, i.jsx)(E.E, {
                                              variant: "body-xs/medium",
                                              color: "none",
                                              className: eP.W$,
                                              children: (0, H.A)(t.id)
                                                  ? er.intl.string(er.t.FL5T01)
                                                  : er.intl.string(er.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, i.jsx)(E.E, {
                                                variant: "body-xs/medium",
                                                color: "none",
                                                className: eP.W$,
                                                children: er.intl.format(er.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, O.A)({
                                                  activities: m,
                                                  status: p,
                                                  applicationStream: A,
                                                  voiceChannel: v,
                                              })
                                            ? (0, i.jsx)(B.A, {
                                                  user: r,
                                                  activities: m,
                                                  voiceChannel: v,
                                                  applicationStream: A,
                                                  animateEmoji: b || k || eo,
                                                  textClassName: eP.XD,
                                                  iconClassName: eQ ? eP.tG : void 0,
                                              })
                                            : null,
                                    name: (0, i.jsx)(N.A, { className: a()(eP.uN, { [eP.e8]: ts }), children: ti }),
                                    decorators: t.isSystemDM()
                                        ? (0, i.jsx)(U.A, { className: eP.G$, type: U.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: ts,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: a()(eP._q, { [eP.EY]: e0 }),
                                children: [
                                    null != eZ &&
                                        (0, i.jsx)(eI, {
                                            callMessageId: eZ,
                                            className: a()(eP.R4, { [eP.jd]: e0, [eP.ht]: e0 && e2 === el.NJ8.LIGHT }),
                                        }),
                                    eJ ? (0, i.jsx)(ez, {}) : eX ? (0, i.jsx)(eL, {}) : eV ? (0, i.jsx)(eU, {}) : null,
                                    tc && null != e$
                                        ? (0, i.jsx)(eB, { channelName: e$, onClick: td, showNameplate: e0 })
                                        : null,
                                    tc
                                        ? null
                                        : (0, i.jsx)(ek, {
                                              icon: R.XSmallIcon,
                                              "aria-label": eM
                                                  ? er.intl.string(er.t["26C4oi"])
                                                  : er.intl.string(er.t.jsvgc3),
                                              onClick: eM ? tt : e9,
                                              onMouseDown: e6,
                                              nameplate: x,
                                              visibleElementRef: eq,
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
        },
    });
}
let eW =
    221552 == n.j
        ? function (e) {
              let { channel: t, selected: n, ...l } = e,
                  s = (0, f.bG)([eb.default], () => eb.default.getUser(t.getRecipientId())),
                  a = s?.id,
                  r = (0, f.cf)(
                      [eT.A, eC.A],
                      () => {
                          let e;
                          if (t.isMultiUserDM()) {
                              let n = eT.A.getState().statuses;
                              t.recipients.some((e) => n[e] === el.clD.ONLINE) && (e = el.clD.ONLINE);
                          } else null != a && (e = eT.A.getStatus(a));
                          return {
                              status: e,
                              activities: null != a ? eT.A.getActivities(a) : null,
                              applicationStream: null != a ? eC.A.getAnyStreamForUser(a) : null,
                              isMobile: null != a && eT.A.isMobileOnline(a),
                              isVR: null != a && eT.A.isVROnline(a),
                          };
                      },
                      [t, a],
                  ),
                  { voiceChannel: o } = (0, k.Ay)({ userId: a }),
                  u = (0, eo.r)({ user: s }),
                  c = (0, f.bG)(
                      [eb.default, eM.A],
                      () =>
                          t.isMultiUserDM()
                              ? en.default
                                    .keys(eM.A.getTypingUsers(t.id))
                                    .some((e) => e !== eb.default.getCurrentUser()?.id)
                              : null != s && eM.A.isTyping(t.id, t.getRecipientId()),
                      [t, s],
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(eV, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: r.status === el.clD.ONLINE ? el.clD.ONLINE : void 0,
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
                        ...r,
                    });
          }
        : null;

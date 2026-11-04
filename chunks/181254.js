n.d(t, { z9: () => eW, ls: () => eV, th: () => eY, w_: () => eU, Ay: () => eJ });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r);
if (588245 != n.j) var u = n(561028);
var c = n(613412);
if (588245 != n.j) var d = n(837381);
var A = n(612324),
    f = n(607399),
    m = n(855986);
if (588245 != n.j) var N = n(3026);
var v = n(97808);
if (588245 != n.j) var g = n(939249);
if (588245 != n.j) var p = n(866665);
if (588245 != n.j) var h = n(821609);
if (588245 != n.j) var j = n(366605);
if (588245 != n.j) var x = n(952270);
if (588245 != n.j) var y = n(428678);
var C = n(646514),
    _ = n(704007);
if (588245 != n.j) var I = n(445529);
if (588245 != n.j) var T = n(778712);
if (588245 != n.j) var S = n(192308);
if (588245 != n.j) var E = n(834730);
if (588245 != n.j) var R = n(789645);
var M = n(308528),
    D = n(442433),
    b = n(765671),
    G = n(736653),
    P = n(657043),
    k = n(960076),
    w = n(397244),
    O = n(714114),
    B = n(342312),
    U = n(709066),
    L = n(262295),
    z = n(620982),
    F = n(343328),
    H = n(963027),
    V = n(571694),
    W = n(47167);
if (588245 != n.j) var Y = n(858899);
var J = n(138399),
    K = n(976860),
    Q = n(330001),
    X = n(536637),
    Z = n.n(X),
    $ = n(74114),
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
if (588245 != n.j) var eA = n(559106);
var ef = n(351278);
let em =
    588245 != n.j
        ? function (e) {
              let { className: t, focusProps: n, ref: l, ...s } = e;
              return (0, i.jsx)(eA.vN, { ...n, children: (0, i.jsx)("li", { className: a()(t, ef.k), ...s, ref: l }) });
          }
        : null;
var eN = n(824994),
    ev = n(922301),
    eg = n(16371),
    ep = n(954376),
    eh = n(534400),
    ej = n(693879);
let ex = (0, n(945810).mj)({
    name: "2026-10-gdm-duration-timer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function ey(e) {
    let { callMessageId: t, className: n } = e,
        s = ex.useConfig({ location: "PrivateChannelCallDuration" }).enabled,
        a = l.useMemo(() => ({ start: en.default.extractTimestamp(t) }), [t]);
    return s
        ? (0, i.jsx)("div", {
              className: n,
              children: (0, i.jsx)(ej.z, { textColor: "text-feedback-positive", entry: a }),
          })
        : null;
}
var eC = n(114129),
    e_ = n(442325),
    eI = n(897898),
    eT = n(854627),
    eS = n(616356),
    eE = n(470710),
    eR = n(290863),
    eM = n(218461),
    eD = n(309010),
    eb = n(741961),
    eG = n(543465),
    eP = n(287809),
    ek = n(253400),
    ew = n(763097);
let eO = ek.Ay.getEnableHardwareAcceleration() ? v.Js : v.eu,
    eB = 588245 != n.j ? { offset: { top: 2, bottom: 2, right: 4 } } : null;
function eU(e) {
    let { nameplate: t, icon: n, forceShow: l = !1, visibleElementRef: s, ...r } = e,
        o = (0, eu.K)(t),
        u = (0, P.BX)("SideButton");
    return (0, i.jsx)(g.D, {
        className: a()(ew.b, { [ew.DQ]: null != t, [ew.by]: l }),
        style: o,
        ...r,
        focusProps: u ? void 0 : { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: s,
            className: a()(ew.b3, { [ew.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: a()(ew.ut, { [ew.Uq]: null != t }),
            }),
        }),
    });
}
function eL(e) {
    let { onClick: t, channelName: n, showNameplate: l } = e;
    return (0, i.jsx)("div", {
        className: ew.KQ,
        children: (0, i.jsx)(p.m, {
            text: er.intl.formatToPlainString(er.t.m0zYbV, { username: n }),
            children: (0, i.jsx)(h.$, {
                size: "sm",
                variant: l ? "overlay-secondary" : "secondary",
                onClick: t,
                text: er.intl.string(er.t.pVlP58),
            }),
        }),
    });
}
function ez() {
    return (0, i.jsx)(j.t, { size: "xs", color: "currentColor", className: ew.wB });
}
function eF() {
    return (0, i.jsx)(x.EyeSlashIcon, { size: "xs", color: "currentColor", className: ew.wB });
}
function eH() {
    return (0, i.jsx)(y.K, { size: "xs", color: "currentColor", className: ew.wB });
}
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
                          Color_InnerRing: r ?? C.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? r,
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
            [n, a, r, o],
        );
    return (0, i.jsx)(_.U, { eventTargetRef: t, className: ew.a1, dataBinding: { ...u, DimmerWidth: (s ?? 0) + 32 } });
}
function eW(e) {
    let {
            route: t,
            selected: n,
            icon: s,
            iconClassName: r,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: m,
            onClick: N,
            className: v,
            role: g,
            "aria-posinset": p,
            "aria-setsize": h,
            listItemRef: j,
            showHoverGradient: x = !1,
            nitroHoverGradient: y = !1,
            hoverGradientStart: C,
            hoverGradientMiddle: _,
            hoverGradientEnd: T,
            ...S
        } = e,
        { width: E, ref: R } = (0, b.Ay)(),
        M = l.useRef(null),
        D = l.useRef(null),
        G = (0, A.A)(j, M);
    return (0, i.jsx)(em, {
        className: a()(ew.Ix, { [ew.Ij]: f.Fr }, v),
        onClick: N,
        role: g,
        focusProps: { ...eB, focusTarget: D, ringTarget: M },
        "aria-posinset": p,
        "aria-setsize": h,
        ref: G,
        children: (0, i.jsxs)(I.H, {
            as: "div",
            selected: n,
            className: a()(o, ew.bG, ew.$J, { [ew.Q2]: n }),
            children: [
                x &&
                    (0, i.jsx)(eV, {
                        eventTargetRef: M,
                        isNitro: y,
                        contentWidth: E,
                        hoverGradientStart: C,
                        hoverGradientMiddle: _,
                        hoverGradientEnd: T,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: m },
                    className: ew.nf,
                    innerRef: D,
                    ...S,
                    children: [
                        (0, i.jsx)(L.A, {
                            ref: x ? R : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(s, {
                                size: "refresh_sm",
                                className: a()(ew.e_, r),
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
function eY(e) {
    let {
            channel: t,
            selected: s = !1,
            user: r,
            activities: A,
            applicationStream: f,
            voiceChannel: v,
            isTyping: g,
            status: p,
            isMobile: h,
            isVR: j,
            nameplate: x,
            ref: y,
            "aria-posinset": C,
            "aria-setsize": _,
        } = e,
        [b, P] = l.useState(!1),
        [O, X] = l.useState(!1),
        [eo, eu] = l.useState(!1),
        eA = l.useRef(null),
        ef = l.useRef(null),
        ej = y ?? ef,
        {
            avatarSrc: ex,
            avatarDecorationSrc: eS,
            eventHandlers: eR,
        } = (0, eT.A)({ userId: r?.id, size: T._3.SIZE_32, animateOnHover: !(s || b || O || eo) }),
        eb = t.isMultiUserDM(),
        eP = t.isSystemDM(),
        ek = !eb && !eP && t.type === el.rbe.DM,
        eV = ek && r?.primaryGuild != null,
        eW = (0, m.bG)([eG.Ay], () => eG.Ay.isChannelMuted(t.getGuildId(), t.id)),
        eY = (0, m.bG)([eG.Ay], () => eG.Ay.isMessagesFavorite(t.id)),
        { ignored: eJ, blocked: eK } = (0, m.cf)([ee.A], () => ({
            ignored: ee.A.isIgnored(t.getRecipientId()),
            blocked: ee.A.isBlocked(t.getRecipientId()),
        })),
        eQ = ek && eJ,
        eX = ek && eK,
        eZ = (eW || eQ || eX) && !(s || b),
        e$ = (0, m.bG)([eM.Ay], () => eM.Ay.getMentionCount(t.id) > 0),
        eq = (0, W.Ay)(t),
        e0 = (0, m.bG)(
            [eE.A, eD.Ay],
            () => (eD.Ay.getVoiceChannelId() === t.id && eE.A.isCallActive(t.id) ? eE.A.getMessageId(t.id) : null),
            [t.id],
        ),
        e2 = l.useRef(null),
        e8 = null != x && (s || b || eo),
        e1 = (0, G.Ay)();
    function e5() {
        P(!0);
    }
    function e3() {
        P(!1);
    }
    function e4() {
        X(!0);
    }
    function e9() {
        X(!1);
    }
    function e6(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (null != e && (e.preventDefault(), e.stopPropagation()), M.A.closePrivateChannel(t.id, s, n));
    }
    function e7() {
        M.A.preload(el.ME, t.id);
    }
    function te(e) {
        e.stopPropagation();
    }
    function tt(e) {
        e.target === e.currentTarget && eA.current?.click();
    }
    function tn(e) {
        if (!e_.A.isEnabled()) return;
        let n = e_.A.getTabForChannel(t.id);
        null != n && (e.preventDefault(), (0, eC.ZD)(n.id));
    }
    function ti(e) {
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
                              n.e(893190),
                              n.e(393336),
                              n.e(489218),
                              n.e(146652),
                              n.e(912875),
                              n.e(862782),
                              n.e(55348),
                              n.e(391763),
                              n.e(638221),
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
                              n.e(790484),
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
                              n.e(893190),
                              n.e(393336),
                              n.e(489218),
                              n.e(146652),
                              n.e(912875),
                              n.e(862782),
                              n.e(55348),
                              n.e(776273),
                              n.e(391763),
                              n.e(885533),
                              n.e(189673),
                              n.e(234236),
                              n.e(638221),
                              n.e(571210),
                              n.e(576432),
                              n.e(797558),
                              n.e(491001),
                              n.e(592028),
                              n.e(425906),
                              n.e(123216),
                              n.e(451162),
                              n.e(229787),
                              n.e(88342),
                              n.e(182408),
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
                              n.e(947502),
                              n.e(715038),
                              n.e(579245),
                              n.e(245996),
                              n.e(252229),
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
                              n.e(838056),
                              n.e(349644),
                              n.e(493014),
                              n.e(508829),
                              n.e(172883),
                              n.e(935483),
                              n.e(169103),
                              n.e(522261),
                              n.e(873786),
                              n.e(678195),
                              n.e(287988),
                              n.e(275289),
                              n.e(774021),
                              n.e(836150),
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
    function tl(e) {
        (e.preventDefault(), e.stopPropagation());
        let l = er.intl.formatToPlainString(er.t.hJ5Ap4, { name: eq }),
            s = er.intl.format(er.t.SSIVOu, { name: eq });
        (t.isManaged() &&
            ((l = er.intl.formatToPlainString(er.t.hVGjEW, { name: eq })),
            (s = er.intl.format(er.t.IK1Qvs, { name: eq }))),
            (0, S.mM)(async () => {
                let { default: e } = await Promise.all([n.e(446215), n.e(137803)]).then(n.bind(n, 925785));
                return (t) => (0, i.jsx)(e, { title: l, body: s, onSubmit: e6, ...t });
            }));
    }
    let ts = (0, i.jsx)(eg.A, {
            userName: eq,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: b || s || eo ? ev.G.ANIMATED : ev.G.PLAIN,
            loop: b,
            boldFontOpacity: 0.9,
        }),
        ta = eV
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      ts,
                      (0, i.jsx)(eh.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(ew.fc, { [ew.Y_]: eZ }),
                      }),
                  ],
              })
            : ts,
        tr = l.useRef(null),
        to = (0, eN.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        { isIncomingCall: tu, isOngoingCall: tc } = (0, z.A)(t.id),
        td = [
            (0, H.Ay)({ channel: t, unread: e$, isIncomingCall: tu, isOngoingCall: tc, ignored: eQ, blocked: eX }),
            (0, H.r2)({ channel: t, muted: eW, userStatus: p, isFavorite: eY }),
        ]
            .filter(Boolean)
            .join(", "),
        tA = (0, m.bG)([eM.Ay], () => eM.Ay.lastMessageId(t.id)),
        { waveShouldShow: tf, wavePressed: tm } = (function (e, t) {
            let n,
                i,
                s,
                a,
                r,
                o,
                u,
                c,
                d,
                A,
                [f, N] = l.useState(!1),
                v = l.useCallback(async () => {
                    if (!f) {
                        (N(!0),
                            (0, Q.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, K.pX)(el.BVt.CHANNEL(el.ME, e.id)));
                        try {
                            await J.A.sendStickers(e.id, ["749054660769218631"], "", { location: ea.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok ||
                                429 !== e.status ||
                                (0, Y.P0)({ text: er.intl.string(er.t.Whhv4w), variant: "critical" });
                        }
                        N(!1);
                    }
                }, [e.id, f]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (s = (0, m.bG)([ee.A], () => null != i && ee.A.isFriend(i))),
                    (a = (0, m.bG)([ee.A], () => null != i && ee.A.isIgnored(i))),
                    (r = (0, m.bG)([q.A], () => {
                        let t = q.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === el.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(ei.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, m.bG)([q.A], () => q.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = en.default.extractTimestamp(e.id)),
                    (d = (0, et.v0)(Z()(), Z()(c), es)),
                    (A = (0, $.l)(e.id)),
                    n && s && !a && (o || null == t || r) && !u && d && null == A),
                wavePressed: v,
            };
        })(t, tA);
    return (0, i.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: n, ...l } = e;
            return (0, i.jsxs)(em, {
                className: a()(ew.Ix, ew.dm),
                role: n,
                focusProps: { ...eB, focusTarget: eA, ringTarget: ej },
                ref: ej,
                onMouseEnter: e5,
                onMouseLeave: e3,
                onMouseDown: e7,
                onFocus: e4,
                onBlur: e9,
                onContextMenu: ti,
                "aria-setsize": _,
                "aria-posinset": C,
                children: [
                    e$ ? (0, i.jsx)("div", { className: a()(ew.dM, { [ew.SU]: eZ }) }) : null,
                    (0, i.jsxs)(I.H, {
                        className: a()(ew.bG, { [ew.Q2]: s || eo }),
                        as: "div",
                        onClick: tt,
                        muted: eZ,
                        selected: s,
                        children: [
                            (0, i.jsx)(ed.A, {
                                nameplate: e8 ? x : void 0,
                                selected: s,
                                hovered: b,
                                content: tr,
                                placement: ec.u.CHANNEL,
                            }),
                            (0, i.jsx)(u.N_, {
                                innerRef: eA,
                                to: el.BVt.CHANNEL(el.ME, t.id),
                                className: a()(ew.nf, ew.Zi),
                                "aria-label": td,
                                onClick: tn,
                                onAuxClick: (e) => (0, eI.A)(e, t),
                                ...l,
                                children: (0, i.jsx)(L.A, {
                                    ref: tr,
                                    avatar: (function () {
                                        let e = T._3.SIZE_32;
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
                                                return (0, i.jsx)(eO, {
                                                    ...eR,
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
                                            r.isSystemUser() || (n = (0, k.A)(A) ? el.clD.STREAMING : p),
                                            (0, i.jsx)(eO, {
                                                ...eR,
                                                size: T._3.SIZE_32,
                                                src: ex,
                                                avatarDecoration: eS,
                                                status: n,
                                                isMobile: h,
                                                isVR: j,
                                                isTyping: g,
                                                "aria-label": r.username,
                                                statusTooltip: !0,
                                            })
                                        );
                                    })(),
                                    highlighted: e$ && !eZ,
                                    muted: eZ,
                                    subText: t.isSystemDM()
                                        ? (0, i.jsx)(E.E, {
                                              variant: "body-xs/medium",
                                              color: "none",
                                              className: ew.W$,
                                              children: (0, F.A)(t.id)
                                                  ? er.intl.string(er.t.FL5T01)
                                                  : er.intl.string(er.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, i.jsx)(E.E, {
                                                variant: "body-xs/medium",
                                                color: "none",
                                                className: ew.W$,
                                                children: er.intl.format(er.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, w.A)({
                                                  activities: A,
                                                  status: p,
                                                  applicationStream: f,
                                                  voiceChannel: v,
                                              })
                                            ? (0, i.jsx)(B.A, {
                                                  user: r,
                                                  activities: A,
                                                  voiceChannel: v,
                                                  applicationStream: f,
                                                  animateEmoji: b || O || eo,
                                                  textClassName: ew.XD,
                                                  iconClassName: eZ ? ew.tG : void 0,
                                              })
                                            : null,
                                    name: (0, i.jsx)(N.A, { className: a()(ew.uN, { [ew.e8]: to }), children: ta }),
                                    decorators: t.isSystemDM()
                                        ? (0, i.jsx)(U.A, { className: ew.G$, type: U.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: to,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: a()(ew._q, { [ew.EY]: e8 }),
                                children: [
                                    null != e0 &&
                                        (0, i.jsx)(ey, {
                                            callMessageId: e0,
                                            className: a()(ew.R4, { [ew.jd]: e8, [ew.ht]: e8 && e1 === el.NJ8.LIGHT }),
                                        }),
                                    eX ? (0, i.jsx)(eH, {}) : eQ ? (0, i.jsx)(eF, {}) : eY ? (0, i.jsx)(ez, {}) : null,
                                    tf && null != eq
                                        ? (0, i.jsx)(eL, { channelName: eq, onClick: tm, showNameplate: e8 })
                                        : null,
                                    tf
                                        ? null
                                        : (0, i.jsx)(eU, {
                                              icon: R.P,
                                              "aria-label": eb
                                                  ? er.intl.string(er.t["26C4oi"])
                                                  : er.intl.string(er.t.jsvgc3),
                                              onClick: eb ? tl : e6,
                                              onMouseDown: te,
                                              nameplate: x,
                                              visibleElementRef: e2,
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
let eJ =
    221552 == n.j
        ? function (e) {
              let { channel: t, selected: n, ...l } = e,
                  s = (0, m.bG)([eP.default], () => eP.default.getUser(t.getRecipientId())),
                  a = s?.id,
                  r = (0, m.cf)(
                      [eR.A, eS.A],
                      () => {
                          let e;
                          if (t.isMultiUserDM()) {
                              let n = eR.A.getState().statuses;
                              t.recipients.some((e) => n[e] === el.clD.ONLINE) && (e = el.clD.ONLINE);
                          } else null != a && (e = eR.A.getStatus(a));
                          return {
                              status: e,
                              activities: null != a ? eR.A.getActivities(a) : null,
                              applicationStream: null != a ? eS.A.getAnyStreamForUser(a) : null,
                              isMobile: null != a && eR.A.isMobileOnline(a),
                              isVR: null != a && eR.A.isVROnline(a),
                          };
                      },
                      [t, a],
                  ),
                  { voiceChannel: o } = (0, O.Ay)({ userId: a }),
                  u = (0, eo.r)({ user: s }),
                  c = (0, m.bG)(
                      [eP.default, eb.A],
                      () =>
                          t.isMultiUserDM()
                              ? en.default
                                    .keys(eb.A.getTypingUsers(t.id))
                                    .some((e) => e !== eP.default.getCurrentUser()?.id)
                              : null != s && eb.A.isTyping(t.id, t.getRecipientId()),
                      [t, s],
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(eY, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: r.status === el.clD.ONLINE ? el.clD.ONLINE : void 0,
                        ...l,
                    })
                  : (0, i.jsx)(eY, {
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

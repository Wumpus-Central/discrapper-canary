n.d(t, { ls: () => eP, z9: () => ek, w_: () => ew, Ay: () => eF, th: () => ez });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
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
    w = n(657043),
    U = n(960076),
    L = n(397244),
    O = n(714114),
    B = n(394871),
    P = n(709066),
    k = n(262295),
    z = n(620982),
    F = n(343328),
    H = n(963027),
    V = n(571694),
    W = n(47167);
if (588245 != n.j) var Y = n(739187);
if (588245 != n.j) var K = n(857250);
if (588245 != n.j) var X = n(97483);
var Q = n(148494),
    J = n(976860),
    $ = n(330001),
    q = n(536637),
    Z = n.n(q),
    ee = n(74114),
    et = n(232835),
    en = n(994500),
    ei = n(58703),
    el = n(935208),
    er = n(746080),
    es = n(652215),
    ea = n(381941),
    eo = n(660183),
    eu = n(449582),
    ec = n(351952),
    ed = n(88686),
    ef = n(214881);
if (588245 != n.j) var eA = n(559106);
var em = n(351278);
let eg =
    588245 != n.j
        ? function (e) {
              let { className: t, focusProps: n, ref: l, ...r } = e;
              return (0, i.jsx)(eA.vN, { ...n, children: (0, i.jsx)("li", { className: s()(t, em.k), ...r, ref: l }) });
          }
        : null;
var eN = n(824994),
    ev = n(922301),
    ep = n(660184),
    eh = n(3322),
    ej = n(954376),
    ex = n(534400),
    e_ = n(897898),
    eE = n(854627),
    eR = n(616356),
    ey = n(290863),
    eI = n(573163),
    eS = n(741961),
    eC = n(543465),
    eT = n(287809),
    eD = n(19575),
    eM = n(763097);
let eb = eD.Ay.getEnableHardwareAcceleration() ? v.Js : v.eu,
    eG = 588245 != n.j ? { offset: { top: 2, bottom: 2, right: 4 } } : null;
function ew(e) {
    let { nameplate: t, icon: n, forceShow: l = !1, visibleElementRef: r, ...a } = e,
        o = (0, ec.K)(t),
        u = (0, w.BX)("SideButton");
    return (0, i.jsx)(p.D, {
        className: s()(eM.b, { [eM.DQ]: null != t, [eM.by]: l }),
        style: o,
        ...a,
        focusProps: u ? void 0 : { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: r,
            className: s()(eM.b3, { [eM.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: s()(eM.ut, { [eM.Uq]: null != t }),
            }),
        }),
    });
}
function eU(e) {
    let { onClick: t, channelName: n, showNameplate: l } = e;
    return (0, i.jsx)("div", {
        className: eM.KQ,
        children: (0, i.jsx)(h.m, {
            text: eo.intl.formatToPlainString(eo.t.m0zYbV, { username: n }),
            children: (0, i.jsx)(j.$, {
                size: "sm",
                variant: l ? "overlay-secondary" : "secondary",
                onClick: t,
                text: eo.intl.string(eo.t.pVlP58),
            }),
        }),
    });
}
function eL() {
    return (0, i.jsx)(x.t, { size: "xs", color: "currentColor", className: eM.wB });
}
function eO() {
    return (0, i.jsx)(_.EyeSlashIcon, { size: "xs", color: "currentColor", className: eM.wB });
}
function eB() {
    return (0, i.jsx)(E.K, { size: "xs", color: "currentColor", className: eM.wB });
}
function eP(e) {
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
    return (0, i.jsx)(y.U, { eventTargetRef: t, className: eM.a1, dataBinding: { ...u, DimmerWidth: (r ?? 0) + 32 } });
}
function ek(e) {
    let {
            route: t,
            selected: n,
            icon: r,
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
        D = l.useRef(null),
        M = l.useRef(null),
        b = (0, A.A)(j, D);
    return (0, i.jsx)(eg, {
        className: s()(eM.Ix, { [eM.Ij]: m.Fr }, N),
        onClick: g,
        role: v,
        focusProps: { ...eG, focusTarget: M, ringTarget: D },
        "aria-posinset": p,
        "aria-setsize": h,
        ref: b,
        children: (0, i.jsxs)(I.H, {
            as: "div",
            selected: n,
            className: s()(o, eM.bG, eM.$J, { [eM.Q2]: n }),
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
                    className: eM.nf,
                    innerRef: M,
                    ...S,
                    children: [
                        (0, i.jsx)(k.A, {
                            ref: x ? T : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(r, {
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
            selected: r = !1,
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
        [w, O] = l.useState(!1),
        [q, eu] = l.useState(!1),
        [ec, eA] = l.useState(!1),
        em = l.useRef(null),
        [eR, ey] = l.useState(!1),
        eS = (0, f.K)(
            l.useCallback((e) => {
                ey(e);
            }, []),
        ),
        eT = l.useRef(null),
        eD = R ?? eT,
        eP = (0, A.A)(eD, eS),
        {
            avatarSrc: ek,
            avatarDecorationSrc: ez,
            eventHandlers: eF,
        } = (0, eE.A)({ userId: a?.id, size: S._3.SIZE_32, animateOnHover: !(r || w || q || ec) }),
        eH = t.isMultiUserDM(),
        eV = t.isSystemDM(),
        eW = !eH && !eV && t.type === es.rbe.DM,
        eY = eW && a?.primaryGuild != null,
        eK = (0, g.bG)([eC.Ay], () => eC.Ay.isChannelMuted(t.getGuildId(), t.id)),
        eX = (0, g.bG)([eC.Ay], () => eC.Ay.isMessagesFavorite(t.id)),
        { ignored: eQ, blocked: eJ } = (0, g.cf)([en.A], () => ({
            ignored: en.A.isIgnored(t.getRecipientId()),
            blocked: en.A.isBlocked(t.getRecipientId()),
        })),
        e$ = eW && eQ,
        eq = eW && eJ,
        eZ = (eK || e$ || eq) && !(r || w),
        e0 = (0, g.bG)([eI.Ay], () => eI.Ay.getMentionCount(t.id) > 0),
        e2 = (0, W.Ay)(t),
        e8 = l.useRef(null),
        e5 = null != E && (r || w || ec);
    function e1() {
        O(!0);
    }
    function e9() {
        O(!1);
    }
    function e3() {
        eu(!0);
    }
    function e6() {
        eu(!1);
    }
    function e4(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (null != e && (e.preventDefault(), e.stopPropagation()), M.A.closePrivateChannel(t.id, r, n));
    }
    function e7() {
        M.A.preload(es.ME, t.id);
    }
    function te(e) {
        e.stopPropagation();
    }
    function tt(e) {
        e.target === e.currentTarget && em.current?.click();
    }
    function tn(e) {
        let l =
            "contextmenu" === e.type
                ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        (eA(!0),
            t.isMultiUserDM()
                ? (0, b.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("926132"),
                              n.e("146652"),
                              n.e("893190"),
                              n.e("393336"),
                              n.e("391763"),
                              n.e("638221"),
                              n.e("955557"),
                              n.e("482861"),
                              n.e("130674"),
                              n.e("947502"),
                              n.e("965789"),
                              n.e("190889"),
                              n.e("979630"),
                              n.e("61129"),
                              n.e("983525"),
                              n.e("198415"),
                              n.e("331203"),
                              n.e("255302"),
                              n.e("935483"),
                              n.e("21106"),
                              n.e("836150"),
                              n.e("566378"),
                              n.e("699011"),
                              n.e("17244"),
                              n.e("146149"),
                              n.e("996028"),
                              n.e("153416"),
                              n.e("760200"),
                          ]).then(n.bind(n, 4027));
                          return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: r });
                      },
                      { impressionName: l, noBlurEvent: !0, onClose: () => eA(!1) },
                  )
                : (0, b.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("205035"),
                              n.e("790484"),
                              n.e("147119"),
                              n.e("403382"),
                              n.e("819113"),
                              n.e("622936"),
                              n.e("216947"),
                              n.e("463317"),
                              n.e("326692"),
                              n.e("926132"),
                              n.e("834552"),
                              n.e("146652"),
                              n.e("993103"),
                              n.e("708757"),
                              n.e("585968"),
                              n.e("893190"),
                              n.e("393336"),
                              n.e("776273"),
                              n.e("391763"),
                              n.e("189673"),
                              n.e("536200"),
                              n.e("638221"),
                              n.e("571210"),
                              n.e("882073"),
                              n.e("797558"),
                              n.e("955557"),
                              n.e("592028"),
                              n.e("425906"),
                              n.e("234236"),
                              n.e("123216"),
                              n.e("691994"),
                              n.e("229787"),
                              n.e("88342"),
                              n.e("147786"),
                              n.e("936320"),
                              n.e("576665"),
                              n.e("482861"),
                              n.e("311802"),
                              n.e("698965"),
                              n.e("682337"),
                              n.e("235313"),
                              n.e("843719"),
                              n.e("454625"),
                              n.e("371133"),
                              n.e("41991"),
                              n.e("959669"),
                              n.e("130674"),
                              n.e("947502"),
                              n.e("715038"),
                              n.e("436564"),
                              n.e("252229"),
                              n.e("680986"),
                              n.e("245996"),
                              n.e("700792"),
                              n.e("592822"),
                              n.e("965789"),
                              n.e("190889"),
                              n.e("529422"),
                              n.e("823427"),
                              n.e("856753"),
                              n.e("979630"),
                              n.e("61129"),
                              n.e("983525"),
                              n.e("309291"),
                              n.e("242204"),
                              n.e("198415"),
                              n.e("331203"),
                              n.e("307059"),
                              n.e("255302"),
                              n.e("493014"),
                              n.e("838056"),
                              n.e("349644"),
                              n.e("935483"),
                              n.e("508829"),
                              n.e("172883"),
                              n.e("522261"),
                              n.e("873786"),
                              n.e("920628"),
                              n.e("678195"),
                              n.e("713708"),
                              n.e("21106"),
                              n.e("774021"),
                              n.e("836150"),
                              n.e("699011"),
                              n.e("17244"),
                              n.e("298199"),
                              n.e("864464"),
                              n.e("324240"),
                              n.e("304866"),
                              n.e("439778"),
                              n.e("996028"),
                              n.e("960816"),
                          ]).then(n.bind(n, 385913));
                          return (n) => (0, i.jsx)(e, { ...n, user: a, channel: t, channelSelected: r });
                      },
                      { impressionName: l, onClose: () => eA(!1) },
                  ));
    }
    function ti(e) {
        (e.preventDefault(), e.stopPropagation());
        let l = eo.intl.formatToPlainString(eo.t.hJ5Ap4, { name: e2 }),
            r = eo.intl.format(eo.t.SSIVOu, { name: e2 });
        (t.isManaged() &&
            ((l = eo.intl.formatToPlainString(eo.t.hVGjEW, { name: e2 })),
            (r = eo.intl.format(eo.t.IK1Qvs, { name: e2 }))),
            (0, C.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("446215"), n.e("137803")]).then(n.bind(n, 925785));
                return (t) => (0, i.jsx)(e, { title: l, body: r, onSubmit: e4, ...t });
            }));
    }
    let tl = (0, i.jsx)(ep.A, {
            userName: e2,
            displayNameStyles: a?.displayNameStyles,
            effectDisplayType: w || r || ec ? ev.G.ANIMATED : ev.G.PLAIN,
            loop: w,
            boldFontOpacity: 0.9,
        }),
        tr = eY
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      tl,
                      (0, i.jsx)(ex.Ay, {
                          primaryGuild: a?.primaryGuild,
                          userId: a?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: s()(eM.fc, { [eM.Y_]: eZ }),
                      }),
                  ],
              })
            : tl,
        ts = l.useRef(null),
        ta = (0, eN.W)({ location: "PrivateChannel" }) && a?.displayNameStyles != null,
        { isIncomingCall: to, isOngoingCall: tu } = (0, z.A)(t.id),
        tc = [
            (0, H.Ay)({ channel: t, unread: e0, isIncomingCall: to, isOngoingCall: tu, ignored: e$, blocked: eq }),
            (0, H.r2)({ channel: t, muted: eK, userStatus: j, isFavorite: eX }),
        ]
            .filter(Boolean)
            .join(", "),
        td = (0, g.bG)([eI.Ay], () => eI.Ay.lastMessageId(t.id)),
        { waveShouldShow: tf, wavePressed: tA } = (function (e, t) {
            let n,
                i,
                r,
                s,
                a,
                o,
                u,
                c,
                d,
                f,
                [A, m] = l.useState(!1),
                N = l.useCallback(async () => {
                    if (!A) {
                        (m(!0),
                            (0, $.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, J.pX)(es.BVt.CHANNEL(es.ME, e.id)));
                        try {
                            await Q.A.sendStickers(e.id, ["749054660769218631"], "", { location: ea.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok || 429 !== e.status || (0, Y.P)((0, K.o)(eo.intl.string(eo.t.Whhv4w), X.Ck.FAILURE));
                        }
                        m(!1);
                    }
                }, [e.id, A]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (r = (0, g.bG)([en.A], () => null != i && en.A.isFriend(i))),
                    (s = (0, g.bG)([en.A], () => null != i && en.A.isIgnored(i))),
                    (a = (0, g.bG)([et.A], () => {
                        let t = et.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === es.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(er.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, g.bG)([et.A], () => et.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = el.default.extractTimestamp(e.id)),
                    (d = (0, ei.v0)(Z()(), Z()(c), 18144e5)),
                    (f = (0, ee.l)(e.id)),
                    n && r && !s && (o || null == t || a) && !u && d && null == f),
                wavePressed: N,
            };
        })(t, td);
    return (0, i.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: n, ...l } = e;
            return (0, i.jsxs)(eg, {
                className: s()(eM.Ix, eM.dm),
                role: n,
                focusProps: { ...eG, focusTarget: em, ringTarget: eD },
                ref: eP,
                onMouseEnter: e1,
                onMouseLeave: e9,
                onMouseDown: e7,
                onFocus: e3,
                onBlur: e6,
                onContextMenu: tn,
                "aria-setsize": G,
                "aria-posinset": y,
                children: [
                    e0 ? (0, i.jsx)("div", { className: s()(eM.dM, { [eM.SU]: eZ }) }) : null,
                    (0, i.jsxs)(I.H, {
                        className: s()(eM.bG, { [eM.Q2]: r || ec }),
                        as: "div",
                        onClick: tt,
                        muted: eZ,
                        selected: r,
                        children: [
                            (0, i.jsx)(ef.A, {
                                nameplate: e5 ? E : void 0,
                                selected: r,
                                hovered: w,
                                content: ts,
                                placement: ed.u.CHANNEL,
                            }),
                            (0, i.jsx)(u.N_, {
                                innerRef: em,
                                to: es.BVt.CHANNEL(es.ME, t.id),
                                className: s()(eM.nf, eM.Zi),
                                "aria-label": tc,
                                onAuxClick: (e) => (0, e_.A)(e, t),
                                ...l,
                                children: (0, i.jsx)(k.A, {
                                    ref: ts,
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
                                                return (0, i.jsx)(eb, {
                                                    ...eF,
                                                    src: (0, V.Y)(t),
                                                    "aria-hidden": !0,
                                                    size: e,
                                                    status: h ? es.clD.ONLINE : j,
                                                    isTyping: h,
                                                });
                                        o()(
                                            null != a,
                                            "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                        );
                                        let n = null;
                                        return (
                                            a.isSystemUser() || (n = (0, U.A)(m) ? es.clD.STREAMING : j),
                                            (0, i.jsx)(eb, {
                                                ...eF,
                                                size: S._3.SIZE_32,
                                                src: ek,
                                                avatarDecoration: ez,
                                                status: n,
                                                isMobile: x,
                                                isVR: _,
                                                isTyping: h,
                                                "aria-label": a.username,
                                                statusTooltip: !0,
                                            })
                                        );
                                    })(),
                                    highlighted: e0 && !eZ,
                                    muted: eZ,
                                    subText: t.isSystemDM()
                                        ? (0, i.jsx)(T.E, {
                                              variant: "text-xs/medium",
                                              color: "none",
                                              className: eM.W$,
                                              children: (0, F.A)(t.id)
                                                  ? eo.intl.string(eo.t.FL5T01)
                                                  : eo.intl.string(eo.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, i.jsx)(T.E, {
                                                variant: "text-xs/medium",
                                                color: "none",
                                                className: eM.W$,
                                                children: eo.intl.format(eo.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, L.A)({
                                                  activities: m,
                                                  status: j,
                                                  applicationStream: v,
                                                  voiceChannel: p,
                                              })
                                            ? (0, i.jsx)(B.A, {
                                                  user: a,
                                                  activities: m,
                                                  voiceChannel: p,
                                                  applicationStream: v,
                                                  animateEmoji: w || q || ec,
                                                  textClassName: eM.XD,
                                                  iconClassName: eZ ? eM.tG : void 0,
                                              })
                                            : null,
                                    name: (0, i.jsx)(N.A, { className: s()(eM.uN, { [eM.e8]: ta }), children: tr }),
                                    decorators: t.isSystemDM()
                                        ? (0, i.jsx)(P.A, { className: eM.G$, type: P.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: ta,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: s()(eM._q, { [eM.EY]: e5 }),
                                children: [
                                    eq ? (0, i.jsx)(eB, {}) : e$ ? (0, i.jsx)(eO, {}) : eX ? (0, i.jsx)(eL, {}) : null,
                                    tf && null != e2
                                        ? (0, i.jsx)(eU, { channelName: e2, onClick: tA, showNameplate: e5 })
                                        : null,
                                    tf
                                        ? null
                                        : (0, i.jsx)(ew, {
                                              icon: D.P,
                                              "aria-label": eH
                                                  ? eo.intl.string(eo.t["26C4oi"])
                                                  : eo.intl.string(eo.t.jsvgc3),
                                              onClick: eH ? ti : e4,
                                              onMouseDown: te,
                                              nameplate: E,
                                              visibleElementRef: e8,
                                          }),
                                ],
                            }),
                        ],
                    }),
                    r && (0, i.jsx)(eh.A, { targetElementRef: eD, channelType: t.type, isTargetInViewport: eR }),
                ],
            });
        },
    });
}
let eF =
    221552 == n.j
        ? function (e) {
              let { channel: t, selected: n, ...l } = e,
                  r = (0, g.bG)([eT.default], () => eT.default.getUser(t.getRecipientId())),
                  s = r?.id,
                  a = (0, g.cf)(
                      [ey.A, eR.A],
                      () => {
                          let e;
                          if (t.isMultiUserDM()) {
                              let n = ey.A.getState().statuses;
                              t.recipients.some((e) => n[e] === es.clD.ONLINE) && (e = es.clD.ONLINE);
                          } else null != s && (e = ey.A.getStatus(s));
                          return {
                              status: e,
                              activities: null != s ? ey.A.getActivities(s) : null,
                              applicationStream: null != s ? eR.A.getAnyStreamForUser(s) : null,
                              isMobile: null != s && ey.A.isMobileOnline(s),
                              isVR: null != s && ey.A.isVROnline(s),
                          };
                      },
                      [t, s],
                  ),
                  { voiceChannel: o } = (0, O.Ay)({ userId: s }),
                  u = (0, eu.r)({ user: r }),
                  c = (0, g.bG)(
                      [eT.default, eS.A],
                      () =>
                          t.isMultiUserDM()
                              ? el.default
                                    .keys(eS.A.getTypingUsers(t.id))
                                    .some((e) => e !== eT.default.getCurrentUser()?.id)
                              : null != r && eS.A.isTyping(t.id, t.getRecipientId()),
                      [t, r],
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(ez, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: a.status === es.clD.ONLINE ? es.clD.ONLINE : void 0,
                        ...l,
                    })
                  : (0, i.jsx)(ez, {
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

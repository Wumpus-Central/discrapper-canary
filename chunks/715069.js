n.d(t, { ls: () => eL, z9: () => eB, w_: () => eb, Ay: () => ek, th: () => eP });
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
var y = n(661531),
    R = n(549254);
if (588245 != n.j) var S = n(445529);
if (588245 != n.j) var I = n(778712);
if (588245 != n.j) var C = n(192308);
if (588245 != n.j) var T = n(834730);
if (588245 != n.j) var D = n(789645);
var M = n(308528),
    b = n(442433),
    G = n(765671),
    w = n(657043),
    U = n(960076),
    O = n(397244),
    L = n(714114),
    B = n(394871),
    P = n(709066),
    k = n(262295),
    z = n(620982),
    F = n(343328),
    H = n(963027),
    V = n(571694),
    W = n(47167);
if (588245 != n.j) var Y = n(858899);
var K = n(148494),
    X = n(976860),
    Q = n(330001),
    J = n(536637),
    $ = n.n(J),
    q = n(74114),
    Z = n(232835),
    ee = n(994500),
    et = n(58703),
    en = n(935208),
    ei = n(746080),
    el = n(652215),
    er = n(381941),
    es = n(660183),
    ea = n(449582),
    eo = n(351952),
    eu = n(88686),
    ec = n(214881);
if (588245 != n.j) var ed = n(559106);
var ef = n(351278);
let eA =
    588245 != n.j
        ? function (e) {
              let { className: t, focusProps: n, ref: l, ...r } = e;
              return (0, i.jsx)(ed.vN, { ...n, children: (0, i.jsx)("li", { className: s()(t, ef.k), ...r, ref: l }) });
          }
        : null;
var em = n(824994),
    eg = n(922301),
    eN = n(660184),
    ev = n(3322),
    ep = n(954376),
    eh = n(534400),
    ej = n(897898),
    ex = n(854627),
    e_ = n(616356),
    eE = n(290863),
    ey = n(573163),
    eR = n(741961),
    eS = n(543465),
    eI = n(287809),
    eC = n(19575),
    eT = n(763097);
let eD = eC.Ay.getEnableHardwareAcceleration() ? v.Js : v.eu,
    eM = 588245 != n.j ? { offset: { top: 2, bottom: 2, right: 4 } } : null;
function eb(e) {
    let { nameplate: t, icon: n, forceShow: l = !1, visibleElementRef: r, ...a } = e,
        o = (0, eo.K)(t),
        u = (0, w.BX)("SideButton");
    return (0, i.jsx)(p.D, {
        className: s()(eT.b, { [eT.DQ]: null != t, [eT.by]: l }),
        style: o,
        ...a,
        focusProps: u ? void 0 : { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
        children: (0, i.jsx)("div", {
            ref: r,
            className: s()(eT.b3, { [eT.PJ]: null != t }),
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: s()(eT.ut, { [eT.Uq]: null != t }),
            }),
        }),
    });
}
function eG(e) {
    let { onClick: t, channelName: n, showNameplate: l } = e;
    return (0, i.jsx)("div", {
        className: eT.KQ,
        children: (0, i.jsx)(h.m, {
            text: es.intl.formatToPlainString(es.t.m0zYbV, { username: n }),
            children: (0, i.jsx)(j.$, {
                size: "sm",
                variant: l ? "overlay-secondary" : "secondary",
                onClick: t,
                text: es.intl.string(es.t.pVlP58),
            }),
        }),
    });
}
function ew() {
    return (0, i.jsx)(x.t, { size: "xs", color: "currentColor", className: eT.wB });
}
function eU() {
    return (0, i.jsx)(_.EyeSlashIcon, { size: "xs", color: "currentColor", className: eT.wB });
}
function eO() {
    return (0, i.jsx)(E.K, { size: "xs", color: "currentColor", className: eT.wB });
}
function eL(e) {
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
                          Color_InnerRing: a ?? y.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? a,
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
            [n, s, a, o],
        );
    return (0, i.jsx)(R.U, { eventTargetRef: t, className: eT.a1, dataBinding: { ...u, DimmerWidth: (r ?? 0) + 32 } });
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
            hoverGradientMiddle: y,
            hoverGradientEnd: R,
            ...I
        } = e,
        { width: C, ref: T } = (0, G.Ay)(),
        D = l.useRef(null),
        M = l.useRef(null),
        b = (0, A.A)(j, D);
    return (0, i.jsx)(eA, {
        className: s()(eT.Ix, { [eT.Ij]: m.Fr }, N),
        onClick: g,
        role: v,
        focusProps: { ...eM, focusTarget: M, ringTarget: D },
        "aria-posinset": p,
        "aria-setsize": h,
        ref: b,
        children: (0, i.jsxs)(S.H, {
            as: "div",
            selected: n,
            className: s()(o, eT.bG, eT.$J, { [eT.Q2]: n }),
            children: [
                x &&
                    (0, i.jsx)(eL, {
                        eventTargetRef: D,
                        isNitro: _,
                        contentWidth: C,
                        hoverGradientStart: E,
                        hoverGradientMiddle: y,
                        hoverGradientEnd: R,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: f },
                    className: eT.nf,
                    innerRef: M,
                    ...I,
                    children: [
                        (0, i.jsx)(k.A, {
                            ref: x ? T : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(r, {
                                size: "refresh_sm",
                                className: s()(eT.e_, a),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: eT.xx,
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
}
function eP(e) {
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
            ref: y,
            "aria-posinset": R,
            "aria-setsize": G,
        } = e,
        [w, L] = l.useState(!1),
        [J, ea] = l.useState(!1),
        [eo, ed] = l.useState(!1),
        ef = l.useRef(null),
        [e_, eE] = l.useState(!1),
        eR = (0, f.K)(
            l.useCallback((e) => {
                eE(e);
            }, []),
        ),
        eI = l.useRef(null),
        eC = y ?? eI,
        eL = (0, A.A)(eC, eR),
        {
            avatarSrc: eB,
            avatarDecorationSrc: eP,
            eventHandlers: ek,
        } = (0, ex.A)({ userId: a?.id, size: I._3.SIZE_32, animateOnHover: !(r || w || J || eo) }),
        ez = t.isMultiUserDM(),
        eF = t.isSystemDM(),
        eH = !ez && !eF && t.type === el.rbe.DM,
        eV = eH && a?.primaryGuild != null,
        eW = (0, g.bG)([eS.Ay], () => eS.Ay.isChannelMuted(t.getGuildId(), t.id)),
        eY = (0, g.bG)([eS.Ay], () => eS.Ay.isMessagesFavorite(t.id)),
        { ignored: eK, blocked: eX } = (0, g.cf)([ee.A], () => ({
            ignored: ee.A.isIgnored(t.getRecipientId()),
            blocked: ee.A.isBlocked(t.getRecipientId()),
        })),
        eQ = eH && eK,
        eJ = eH && eX,
        e$ = (eW || eQ || eJ) && !(r || w),
        eq = (0, g.bG)([ey.Ay], () => ey.Ay.getMentionCount(t.id) > 0),
        eZ = (0, W.Ay)(t),
        e0 = l.useRef(null),
        e2 = null != E && (r || w || eo);
    function e8() {
        L(!0);
    }
    function e5() {
        L(!1);
    }
    function e1() {
        ea(!0);
    }
    function e9() {
        ea(!1);
    }
    function e3(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (null != e && (e.preventDefault(), e.stopPropagation()), M.A.closePrivateChannel(t.id, r, n));
    }
    function e6() {
        M.A.preload(el.ME, t.id);
    }
    function e4(e) {
        e.stopPropagation();
    }
    function e7(e) {
        e.target === e.currentTarget && ef.current?.click();
    }
    function te(e) {
        let l =
            "contextmenu" === e.type
                ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        (ed(!0),
            t.isMultiUserDM()
                ? (0, b.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("926132"),
                              n.e("893190"),
                              n.e("393336"),
                              n.e("146652"),
                              n.e("391763"),
                              n.e("638221"),
                              n.e("955557"),
                              n.e("482861"),
                              n.e("130674"),
                              n.e("947502"),
                              n.e("979630"),
                              n.e("965789"),
                              n.e("190889"),
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
                      { impressionName: l, noBlurEvent: !0, onClose: () => ed(!1) },
                  )
                : (0, b.L3)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("339715"),
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
                              n.e("993103"),
                              n.e("708757"),
                              n.e("893190"),
                              n.e("585968"),
                              n.e("393336"),
                              n.e("146652"),
                              n.e("776273"),
                              n.e("391763"),
                              n.e("28102"),
                              n.e("189673"),
                              n.e("234236"),
                              n.e("882073"),
                              n.e("797558"),
                              n.e("638221"),
                              n.e("571210"),
                              n.e("955557"),
                              n.e("691994"),
                              n.e("592028"),
                              n.e("229787"),
                              n.e("425906"),
                              n.e("123216"),
                              n.e("936320"),
                              n.e("576665"),
                              n.e("88342"),
                              n.e("147786"),
                              n.e("482861"),
                              n.e("311802"),
                              n.e("698965"),
                              n.e("682337"),
                              n.e("454625"),
                              n.e("235313"),
                              n.e("843719"),
                              n.e("371133"),
                              n.e("41991"),
                              n.e("130674"),
                              n.e("959669"),
                              n.e("715038"),
                              n.e("947502"),
                              n.e("436564"),
                              n.e("245996"),
                              n.e("252229"),
                              n.e("680986"),
                              n.e("700792"),
                              n.e("979630"),
                              n.e("592822"),
                              n.e("529422"),
                              n.e("823427"),
                              n.e("965789"),
                              n.e("190889"),
                              n.e("242204"),
                              n.e("856753"),
                              n.e("61129"),
                              n.e("983525"),
                              n.e("307059"),
                              n.e("309291"),
                              n.e("198415"),
                              n.e("331203"),
                              n.e("255302"),
                              n.e("493014"),
                              n.e("838056"),
                              n.e("349644"),
                              n.e("172883"),
                              n.e("935483"),
                              n.e("920628"),
                              n.e("508829"),
                              n.e("522261"),
                              n.e("873786"),
                              n.e("678195"),
                              n.e("287988"),
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
                      { impressionName: l, onClose: () => ed(!1) },
                  ));
    }
    function tt(e) {
        (e.preventDefault(), e.stopPropagation());
        let l = es.intl.formatToPlainString(es.t.hJ5Ap4, { name: eZ }),
            r = es.intl.format(es.t.SSIVOu, { name: eZ });
        (t.isManaged() &&
            ((l = es.intl.formatToPlainString(es.t.hVGjEW, { name: eZ })),
            (r = es.intl.format(es.t.IK1Qvs, { name: eZ }))),
            (0, C.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("446215"), n.e("137803")]).then(n.bind(n, 925785));
                return (t) => (0, i.jsx)(e, { title: l, body: r, onSubmit: e3, ...t });
            }));
    }
    let tn = (0, i.jsx)(eN.A, {
            userName: eZ,
            displayNameStyles: a?.displayNameStyles,
            effectDisplayType: w || r || eo ? eg.G.ANIMATED : eg.G.PLAIN,
            loop: w,
            boldFontOpacity: 0.9,
        }),
        ti = eV
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      tn,
                      (0, i.jsx)(eh.Ay, {
                          primaryGuild: a?.primaryGuild,
                          userId: a?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: s()(eT.fc, { [eT.Y_]: e$ }),
                      }),
                  ],
              })
            : tn,
        tl = l.useRef(null),
        tr = (0, em.W)({ location: "PrivateChannel" }) && a?.displayNameStyles != null,
        { isIncomingCall: ts, isOngoingCall: ta } = (0, z.A)(t.id),
        to = [
            (0, H.Ay)({ channel: t, unread: eq, isIncomingCall: ts, isOngoingCall: ta, ignored: eQ, blocked: eJ }),
            (0, H.r2)({ channel: t, muted: eW, userStatus: j, isFavorite: eY }),
        ]
            .filter(Boolean)
            .join(", "),
        tu = (0, g.bG)([ey.Ay], () => ey.Ay.lastMessageId(t.id)),
        { waveShouldShow: tc, wavePressed: td } = (function (e, t) {
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
                            (0, Q.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, X.pX)(el.BVt.CHANNEL(el.ME, e.id)));
                        try {
                            await K.A.sendStickers(e.id, ["749054660769218631"], "", { location: er.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok ||
                                429 !== e.status ||
                                (0, Y.P0)({ text: es.intl.string(es.t.Whhv4w), variant: "critical" });
                        }
                        m(!1);
                    }
                }, [e.id, A]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (r = (0, g.bG)([ee.A], () => null != i && ee.A.isFriend(i))),
                    (s = (0, g.bG)([ee.A], () => null != i && ee.A.isIgnored(i))),
                    (a = (0, g.bG)([Z.A], () => {
                        let t = Z.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === el.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (o = e.hasFlag(ei.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, g.bG)([Z.A], () => Z.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = en.default.extractTimestamp(e.id)),
                    (d = (0, et.v0)($()(), $()(c), 18144e5)),
                    (f = (0, q.l)(e.id)),
                    n && r && !s && (o || null == t || a) && !u && d && null == f),
                wavePressed: N,
            };
        })(t, tu);
    return (0, i.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: n, ...l } = e;
            return (0, i.jsxs)(eA, {
                className: s()(eT.Ix, eT.dm),
                role: n,
                focusProps: { ...eM, focusTarget: ef, ringTarget: eC },
                ref: eL,
                onMouseEnter: e8,
                onMouseLeave: e5,
                onMouseDown: e6,
                onFocus: e1,
                onBlur: e9,
                onContextMenu: te,
                "aria-setsize": G,
                "aria-posinset": R,
                children: [
                    eq ? (0, i.jsx)("div", { className: s()(eT.dM, { [eT.SU]: e$ }) }) : null,
                    (0, i.jsxs)(S.H, {
                        className: s()(eT.bG, { [eT.Q2]: r || eo }),
                        as: "div",
                        onClick: e7,
                        muted: e$,
                        selected: r,
                        children: [
                            (0, i.jsx)(ec.A, {
                                nameplate: e2 ? E : void 0,
                                selected: r,
                                hovered: w,
                                content: tl,
                                placement: eu.u.CHANNEL,
                            }),
                            (0, i.jsx)(u.N_, {
                                innerRef: ef,
                                to: el.BVt.CHANNEL(el.ME, t.id),
                                className: s()(eT.nf, eT.Zi),
                                "aria-label": to,
                                onAuxClick: (e) => (0, ej.A)(e, t),
                                ...l,
                                children: (0, i.jsx)(k.A, {
                                    ref: tl,
                                    avatar: (function () {
                                        let e = I._3.SIZE_32;
                                        if (t.isMultiUserDM())
                                            if (t.recipients.length >= 2 && null == t.icon)
                                                return (0, i.jsx)(ep.A, {
                                                    "aria-hidden": !0,
                                                    recipients: t.recipients,
                                                    size: e,
                                                    isTyping: h,
                                                    status: j,
                                                });
                                            else
                                                return (0, i.jsx)(eD, {
                                                    ...ek,
                                                    src: (0, V.Y)(t),
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
                                            a.isSystemUser() || (n = (0, U.A)(m) ? el.clD.STREAMING : j),
                                            (0, i.jsx)(eD, {
                                                ...ek,
                                                size: I._3.SIZE_32,
                                                src: eB,
                                                avatarDecoration: eP,
                                                status: n,
                                                isMobile: x,
                                                isVR: _,
                                                isTyping: h,
                                                "aria-label": a.username,
                                                statusTooltip: !0,
                                            })
                                        );
                                    })(),
                                    highlighted: eq && !e$,
                                    muted: e$,
                                    subText: t.isSystemDM()
                                        ? (0, i.jsx)(T.E, {
                                              variant: "text-xs/medium",
                                              color: "none",
                                              className: eT.W$,
                                              children: (0, F.A)(t.id)
                                                  ? es.intl.string(es.t.FL5T01)
                                                  : es.intl.string(es.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, i.jsx)(T.E, {
                                                variant: "text-xs/medium",
                                                color: "none",
                                                className: eT.W$,
                                                children: es.intl.format(es.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, O.A)({
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
                                                  animateEmoji: w || J || eo,
                                                  textClassName: eT.XD,
                                                  iconClassName: e$ ? eT.tG : void 0,
                                              })
                                            : null,
                                    name: (0, i.jsx)(N.A, { className: s()(eT.uN, { [eT.e8]: tr }), children: ti }),
                                    decorators: t.isSystemDM()
                                        ? (0, i.jsx)(P.A, { className: eT.G$, type: P.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: tr,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: s()(eT._q, { [eT.EY]: e2 }),
                                children: [
                                    eJ ? (0, i.jsx)(eO, {}) : eQ ? (0, i.jsx)(eU, {}) : eY ? (0, i.jsx)(ew, {}) : null,
                                    tc && null != eZ
                                        ? (0, i.jsx)(eG, { channelName: eZ, onClick: td, showNameplate: e2 })
                                        : null,
                                    tc
                                        ? null
                                        : (0, i.jsx)(eb, {
                                              icon: D.P,
                                              "aria-label": ez
                                                  ? es.intl.string(es.t["26C4oi"])
                                                  : es.intl.string(es.t.jsvgc3),
                                              onClick: ez ? tt : e3,
                                              onMouseDown: e4,
                                              nameplate: E,
                                              visibleElementRef: e0,
                                          }),
                                ],
                            }),
                        ],
                    }),
                    r && (0, i.jsx)(ev.A, { targetElementRef: eC, channelType: t.type, isTargetInViewport: e_ }),
                ],
            });
        },
    });
}
let ek =
    221552 == n.j
        ? function (e) {
              let { channel: t, selected: n, ...l } = e,
                  r = (0, g.bG)([eI.default], () => eI.default.getUser(t.getRecipientId())),
                  s = r?.id,
                  a = (0, g.cf)(
                      [eE.A, e_.A],
                      () => {
                          let e;
                          if (t.isMultiUserDM()) {
                              let n = eE.A.getState().statuses;
                              t.recipients.some((e) => n[e] === el.clD.ONLINE) && (e = el.clD.ONLINE);
                          } else null != s && (e = eE.A.getStatus(s));
                          return {
                              status: e,
                              activities: null != s ? eE.A.getActivities(s) : null,
                              applicationStream: null != s ? e_.A.getAnyStreamForUser(s) : null,
                              isMobile: null != s && eE.A.isMobileOnline(s),
                              isVR: null != s && eE.A.isVROnline(s),
                          };
                      },
                      [t, s],
                  ),
                  { voiceChannel: o } = (0, L.Ay)({ userId: s }),
                  u = (0, ea.r)({ user: r }),
                  c = (0, g.bG)(
                      [eI.default, eR.A],
                      () =>
                          t.isMultiUserDM()
                              ? en.default
                                    .keys(eR.A.getTypingUsers(t.id))
                                    .some((e) => e !== eI.default.getCurrentUser()?.id)
                              : null != r && eR.A.isTyping(t.id, t.getRecipientId()),
                      [t, r],
                  );
              return t.isMultiUserDM()
                  ? (0, i.jsx)(eP, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: a.status === el.clD.ONLINE ? el.clD.ONLINE : void 0,
                        ...l,
                    })
                  : (0, i.jsx)(eP, {
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

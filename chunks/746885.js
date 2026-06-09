"use strict";
n.d(t, { z9: () => eB, w_: () => ex, Ay: () => ej, th: () => eH });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(936504),
    c = n(562708),
    d = n(837381),
    _ = n(172218),
    h = n(612324),
    f = n(535185),
    p = n(148839),
    E = n(607399),
    m = n(17928),
    g = n(780645),
    A = n(990078),
    I = n(97808),
    T = n(939249),
    S = n(821609),
    y = n(366605),
    N = n(952270),
    v = n(428678),
    C = n(661531),
    R = n(549254),
    O = n(912124);
function b(e) {
    let { as: t, muted: n = !1, selected: r = !1, className: s, ...o } = e,
        l = t ?? T.D;
    return (0, i.jsx)(l, { ...o, className: a()(O.bG, s, { [O.SU]: n, [O.wH]: r }) });
}
var D = n(778712),
    L = n(192308),
    w = n(789645),
    M = n(308528),
    P = n(442433),
    x = n(765671),
    k = n(960076),
    U = n(397244),
    G = n(714114),
    F = n(394871),
    V = n(709066),
    B = n(262295),
    H = n(620982),
    j = n(343328);
let Y = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-channel-wave-button",
    defaultConfig: { enabled: !1, showClose: !0 },
    variations: { 1: { enabled: !0, showClose: !1 }, 2: { enabled: !0, showClose: !0 } },
});
var W = n(963027),
    K = n(571694),
    $ = n(47167),
    z = n(989349),
    q = n.n(z),
    X = n(691540),
    Z = n(857250),
    Q = n(97483),
    J = n(720149),
    ee = n(976860),
    et = n(74114),
    en = n(232835),
    ei = n(994500),
    er = n(58703),
    es = n(935208),
    ea = n(330001),
    eo = n(652215),
    el = n(381941),
    eu = n(375708),
    ec = n(449582),
    ed = n(351952),
    e_ = n(88686),
    eh = n(174755),
    ef = n(187322),
    ep = n(586893);
let eE = r.forwardRef(function (e, t) {
    let { className: n, focusProps: r, ...s } = e;
    return (0, i.jsx)(ef.vN, { ...r, children: (0, i.jsx)("li", { className: a()(n, ep.k), ...s, ref: t }) });
});
var em = n(824994),
    eg = n(922301),
    eA = n(368919),
    eI = n(414808),
    eT = n(302005),
    eS = n(954376),
    ey = n(534400),
    eN = n(854627),
    ev = n(616356),
    eC = n(290863),
    eR = n(222823),
    eO = n(741961),
    eb = n(543465),
    eD = n(287809),
    eL = n(19575),
    ew = n(330076);
let eM = eL.Ay.getEnableHardwareAcceleration() ? I.Js : I.eu,
    eP = { offset: { top: 2, bottom: 2, right: 4 } },
    ex = (e) => {
        let { nameplate: t, icon: n, forceShow: r = !1, reducedClickTarget: s = !1, visibleElementRef: o, ...l } = e,
            u = (0, ed.K)(t);
        return (0, i.jsx)(T.D, {
            className: a()(ew.b, { [ew.DQ]: null != t, [ew.by]: r, [ew.wY]: s }),
            style: u,
            ...l,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, i.jsx)("div", {
                ref: o,
                className: a()({ [ew.PJ]: null != t }),
                children: (0, i.jsx)(n, {
                    size: "sm",
                    color: "currentColor",
                    className: a()(ew.ut, { [ew.Uq]: null != t }),
                }),
            }),
        });
    },
    ek = (e) => {
        let { onClick: t, channelName: n, showNameplate: r } = e,
            { enabled: s } = Y.useConfig({ location: "Wave CTA" });
        return s
            ? (0, i.jsx)("div", {
                  className: ew.KQ,
                  children: (0, i.jsx)(A.m, {
                      text: eu.intl.formatToPlainString(eu.t.m0zYbV, { username: n }),
                      children: (0, i.jsx)(S.$, {
                          size: "sm",
                          variant: r ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: eu.intl.string(eu.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    eU = () => (0, i.jsx)(y.t, { size: "xs", color: "currentColor", className: ew.wB }),
    eG = () => (0, i.jsx)(N.G, { size: "xs", color: "currentColor", className: ew.wB }),
    eF = () => (0, i.jsx)(v.K, { size: "xs", color: "currentColor", className: ew.wB });
function eV(e) {
    let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: s,
            hoverGradientStart: a,
            hoverGradientMiddle: o,
            hoverGradientEnd: l,
        } = e,
        u = r.useMemo(
            () =>
                null != a && null != o && null != l
                    ? {
                          Color_GradientCenter: a,
                          Color_InnerRing: o ?? C.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? o,
                          Color_OuterRing: l,
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
            [n, a, o, l],
        );
    return (0, i.jsx)(R.U, { eventTargetRef: t, className: ew.a1, dataBinding: { ...u, DimmerWidth: (s ?? 0) + 32 } });
}
let eB = (e) => {
    let {
            route: t,
            selected: n,
            icon: s,
            iconClassName: o,
            interactiveClassName: l,
            text: c,
            children: d,
            locationState: _,
            onClick: h,
            className: f,
            role: p,
            "aria-posinset": m,
            "aria-setsize": g,
            listItemRef: A,
            showHoverGradient: I = !1,
            nitroHoverGradient: T = !1,
            hoverGradientStart: S,
            hoverGradientMiddle: y,
            hoverGradientEnd: N,
            ...v
        } = e,
        { width: C, ref: R } = (0, x.Ay)(),
        O = r.useRef(null),
        D = A ?? O;
    return (0, i.jsx)(eE, {
        className: a()(ew.Ix, { [ew.Ij]: E.Fr }, f),
        onClick: h,
        role: p,
        focusProps: { within: !0, ...eP },
        "aria-posinset": m,
        "aria-setsize": g,
        ref: D,
        children: (0, i.jsxs)(b, {
            as: "div",
            selected: n,
            className: a()(l, ew.bG, ew.$J, { [ew.Q2]: n }),
            children: [
                I &&
                    (0, i.jsx)(eV, {
                        eventTargetRef: D,
                        isNitro: T,
                        contentWidth: C,
                        hoverGradientStart: S,
                        hoverGradientMiddle: y,
                        hoverGradientEnd: N,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: _ },
                    className: ew.nf,
                    ...v,
                    children: [
                        (0, i.jsx)(B.A, {
                            ref: I ? R : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(s, {
                                size: "refresh_sm",
                                className: a()(ew.e_, o),
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
};
function eH(e) {
    let {
            channel: t,
            selected: s = !1,
            user: o,
            activities: E,
            applicationStream: A,
            voiceChannel: I,
            isTyping: T,
            status: S,
            isMobile: y,
            isVR: N,
            nameplate: v,
            ref: C,
            "aria-posinset": R,
            "aria-setsize": O,
        } = e,
        [x, G] = r.useState(!1),
        [z, ec] = r.useState(!1),
        [ed, ef] = r.useState(!1),
        ep = r.useRef(null),
        [ev, eC] = r.useState(!1),
        eO = (0, _.K)(
            r.useCallback((e) => {
                eC(e);
            }, []),
        ),
        eD = r.useRef(null),
        eL = C ?? eD,
        eV = (0, h.A)(eL, eO),
        { showMenuItemPopover: eB, markMenuItemPopoverAsDismissed: eH } = (0, eT.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === s,
            isTargetInViewport: ev,
            channelType: t.type,
        }),
        {
            avatarSrc: ej,
            avatarDecorationSrc: eY,
            eventHandlers: eW,
        } = (0, eN.A)({ userId: o?.id, size: D._3.SIZE_32, animateOnHover: !(s || x || z || ed) }),
        [eK, e$] = r.useState({ maskImage: "none" }),
        ez = r.useRef(null),
        eq = t.isMultiUserDM(),
        eX = t.isSystemDM(),
        eZ = !eq && !eX && t.type === eo.rbe.DM,
        eQ = eZ && o?.primaryGuild != null,
        eJ = (0, m.bG)([eb.Ay], () => eb.Ay.isChannelMuted(t.getGuildId(), t.id)),
        e0 = (0, m.bG)([eb.Ay], () => eb.Ay.isMessagesFavorite(t.id)),
        { ignored: e1, blocked: e2 } = (0, m.cf)([ei.A], () => ({
            ignored: ei.A.isIgnored(t.getRecipientId()),
            blocked: ei.A.isBlocked(t.getRecipientId()),
        })),
        e3 = eZ && e1,
        e6 = eZ && e2,
        e4 = (eJ || e3 || e6) && !(s || x),
        e5 = (0, m.bG)([eR.Ay], () => eR.Ay.getMentionCount(t.id) > 0),
        e7 = (0, $.Ay)(t),
        e8 = r.useRef(null),
        e9 = null != v && (s || x || ed),
        te = () => {
            G(!0);
        },
        tt = () => {
            G(!1);
        },
        tn = () => {
            ec(!0);
        },
        ti = () => {
            ec(!1);
        },
        tr = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), M.A.closePrivateChannel(t.id, s, n);
        },
        ts = () => {
            M.A.preload(eo.ME, t.id);
        },
        ta = (e) => {
            e.stopPropagation();
        },
        to = (e) => {
            e.target === e.currentTarget && ep.current?.click();
        },
        tl = (e) => {
            let r =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ef(!0),
                t.isMultiUserDM()
                    ? (0, P.L3)(
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
                          { impressionName: r, noBlurEvent: !0, onClose: () => ef(!1) },
                      )
                    : (0, P.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("90950"),
                                  n.e("36499"),
                                  n.e("45370"),
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
                                  n.e("88342"),
                                  n.e("91994"),
                                  n.e("38730"),
                                  n.e("42451"),
                                  n.e("76665"),
                                  n.e("98965"),
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
                                  n.e("9291"),
                                  n.e("38056"),
                                  n.e("7059"),
                                  n.e("8829"),
                                  n.e("42339"),
                                  n.e("17244"),
                                  n.e("98199"),
                                  n.e("41175"),
                                  n.e("60816"),
                                  n.e("39778"),
                              ]).then(n.bind(n, 385913));
                              return (n) => (0, i.jsx)(e, { ...n, user: o, channel: t, channelSelected: s });
                          },
                          { impressionName: r, onClose: () => ef(!1) },
                      );
        },
        tu = (e) => {
            e.preventDefault(), e.stopPropagation();
            let r = eu.intl.formatToPlainString(eu.t.hJ5Ap4, { name: e7 }),
                s = eu.intl.format(eu.t.SSIVOu, { name: e7 });
            t.isManaged() &&
                ((r = eu.intl.formatToPlainString(eu.t.hVGjEW, { name: e7 })),
                (s = eu.intl.format(eu.t.IK1Qvs, { name: e7 }))),
                (0, L.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("70588"), n.e("37803")]).then(n.bind(n, 148166));
                    return (t) => (0, i.jsx)(e, { title: r, body: s, onSubmit: tr, ...t });
                });
        },
        tc = (0, i.jsx)(eA.A, {
            userName: e7,
            displayNameStyles: o?.displayNameStyles,
            effectDisplayType: x || s || ed ? eg.G.ANIMATED : eg.G.PLAIN,
            loop: x,
            boldFontOpacity: 0.9,
        }),
        td = eQ
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      tc,
                      (0, i.jsx)(ey.Ay, {
                          primaryGuild: o?.primaryGuild,
                          userId: o?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(ew.fc, { [ew.Y_]: e4 }),
                      }),
                  ],
              })
            : tc,
        t_ = r.useRef(null),
        th = (0, em.W)({ location: "PrivateChannel" }) && o?.displayNameStyles != null,
        { isIncomingCall: tf, isOngoingCall: tp } = (0, H.A)(t.id),
        tE = [
            (0, W.Ay)({ channel: t, unread: e5, isIncomingCall: tf, isOngoingCall: tp }),
            (0, W.r2)({ channel: t, muted: eJ, userStatus: S, isFavorite: e0 }),
        ]
            .filter(Boolean)
            .join(", "),
        tm = (0, m.bG)([eR.Ay], () => eR.Ay.lastMessageId(t.id)),
        { waveShouldShow: tg, wavePressed: tA } = (function (e, t) {
            let [n, i] = r.useState(!1),
                s = r.useCallback(async () => {
                    if (!n) {
                        i(!0),
                            (0, ea.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, ee.pX)(eo.BVt.CHANNEL(eo.ME, e.id));
                        try {
                            await J.A.sendStickers(e.id, ["749054660769218631"], "", { location: el.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok || 429 !== e.status || (0, X.P0)((0, Z.o)(eu.intl.string(eu.t.Whhv4w), Q.Ck.FAILURE));
                        }
                        i(!1);
                    }
                }, [e.id, n]),
                a = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
                o = a ? e.getRecipientId() : null,
                l = (0, m.bG)([ei.A], () => null != o && ei.A.isFriend(o)),
                u = (0, m.bG)([ei.A], () => null != o && ei.A.isIgnored(o)),
                c = (0, m.bG)([en.A], () => {
                    let t = en.A.getMessages(e.id);
                    return 1 === t.length && t.first()?.type === eo.lAJ.FRIEND_REQUEST_ACCEPTED;
                }),
                d = es.default.extractTimestamp(e.id),
                _ = (0, er.v0)(q()(), q()(d), 18144e5),
                h = (0, et.l)(e.id);
            return { waveShouldShow: a && l && !u && (null == t || c) && _ && null == h, wavePressed: s };
        })(t, tm),
        { showClose: tI } = Y.useConfig({ location: "PrivateChannel" }),
        tT = (0, p.A)(() => {
            let e = ez.current?.getBoundingClientRect() ?? null,
                t = t_.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void e$({ maskImage: "none" });
            let n = t.width - 16;
            e$({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        r.useLayoutEffect(tT, [x, s, tT]),
        (0, f.g)(eL, tT),
        (0, i.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...r } = e;
                return (0, i.jsxs)(eE, {
                    className: a()(ew.Ix, ew.dm),
                    role: n,
                    focusProps: { ...eP, focusTarget: ep, ringTarget: eL },
                    ref: eV,
                    onMouseEnter: te,
                    onMouseLeave: tt,
                    onMouseDown: ts,
                    onFocus: tn,
                    onBlur: ti,
                    onContextMenu: tl,
                    "aria-setsize": O,
                    "aria-posinset": R,
                    children: [
                        e5 ? (0, i.jsx)("div", { className: a()(ew.dM, { [ew.SU]: e4 }) }) : null,
                        (0, i.jsxs)(b, {
                            className: a()(ew.bG, { [ew.Q2]: s || ed }),
                            as: "div",
                            onClick: to,
                            muted: e4,
                            selected: s,
                            children: [
                                (0, i.jsx)(eh.A, {
                                    nameplate: e9 ? v : void 0,
                                    selected: s,
                                    hovered: x,
                                    content: t_,
                                    placement: e_.u.CHANNEL,
                                }),
                                (0, i.jsx)("div", { className: ew.lU, ref: ez, children: td }),
                                (0, i.jsx)(u.N_, {
                                    style: eK,
                                    innerRef: ep,
                                    to: eo.BVt.CHANNEL(eo.ME, t.id),
                                    className: ew.nf,
                                    "aria-label": tE,
                                    ...r,
                                    children: (0, i.jsx)(B.A, {
                                        ref: t_,
                                        avatar: (() => {
                                            let e = D._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, i.jsx)(eS.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: T,
                                                        status: S,
                                                    });
                                                else
                                                    return (0, i.jsx)(eM, {
                                                        ...eW,
                                                        src: (0, K.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: T ? eo.clD.ONLINE : S,
                                                        isTyping: T,
                                                    });
                                            l()(
                                                null != o,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                o.isSystemUser() || (n = (0, k.A)(E) ? eo.clD.STREAMING : S),
                                                (0, i.jsx)(eM, {
                                                    ...eW,
                                                    size: D._3.SIZE_32,
                                                    src: ej,
                                                    avatarDecoration: eY,
                                                    status: n,
                                                    isMobile: y,
                                                    isVR: N,
                                                    isTyping: T,
                                                    "aria-label": o.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: e5 && !e4,
                                        muted: e4,
                                        subText: t.isSystemDM()
                                            ? (0, i.jsx)("div", {
                                                  className: ew.W$,
                                                  children: (0, j.A)(t.id)
                                                      ? eu.intl.string(eu.t.FL5T01)
                                                      : eu.intl.string(eu.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, i.jsx)("div", {
                                                    className: ew.W$,
                                                    children: eu.intl.format(eu.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, U.A)({
                                                      activities: E,
                                                      status: S,
                                                      applicationStream: A,
                                                      voiceChannel: I,
                                                  })
                                                ? (0, i.jsx)(F.A, {
                                                      user: o,
                                                      activities: E,
                                                      voiceChannel: I,
                                                      applicationStream: A,
                                                      animateEmoji: x || z || ed,
                                                      textClassName: ew.XD,
                                                      iconClassName: e4 ? ew.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, i.jsx)(g.A, { className: a()(ew.uN, { [ew.e8]: th }), children: td }),
                                        decorators: t.isSystemDM()
                                            ? (0, i.jsx)(V.A, {
                                                  className: ew.G$,
                                                  type: V.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: th,
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: a()(ew._q, { [ew.EY]: e9 }),
                                    children: [
                                        e6
                                            ? (0, i.jsx)(eF, {})
                                            : e3
                                              ? (0, i.jsx)(eG, {})
                                              : e0
                                                ? (0, i.jsx)(eU, {})
                                                : null,
                                        tg && null != e7
                                            ? (0, i.jsx)(ek, { channelName: e7, onClick: tA, showNameplate: e9 })
                                            : null,
                                        tI || !tg
                                            ? (0, i.jsx)(ex, {
                                                  icon: w.P,
                                                  "aria-label": eq
                                                      ? eu.intl.string(eu.t["26C4oi"])
                                                      : eu.intl.string(eu.t.jsvgc3),
                                                  onClick: eq ? tu : tr,
                                                  onMouseDown: ta,
                                                  nameplate: v,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: e8,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                        eB && (0, i.jsx)(eI.A, { targetElementRef: eL, markMenuItemPopoverAsDismissed: eH }),
                    ],
                });
            },
        })
    );
}
let ej = (e) => {
    let { channel: t, selected: n, ...r } = e,
        s = (0, m.bG)([eD.default], () => eD.default.getUser(t.getRecipientId())),
        a = s?.id,
        o = (0, m.cf)([eC.A, ev.A], () => {
            let e;
            if (t.isMultiUserDM()) {
                let n = eC.A.getState().statuses;
                t.recipients.some((e) => n[e] === eo.clD.ONLINE) && (e = eo.clD.ONLINE);
            } else null != a && (e = eC.A.getStatus(a));
            return {
                status: e,
                activities: null != a ? eC.A.getActivities(a) : null,
                applicationStream: null != a ? ev.A.getAnyStreamForUser(a) : null,
                isMobile: null != a && eC.A.isMobileOnline(a),
                isVR: null != a && eC.A.isVROnline(a),
            };
        }, [t, a]),
        { voiceChannel: l } = (0, G.A)({ userId: a }),
        u = (0, ec.r)({ user: s }),
        c = (0, m.bG)(
            [eD.default, eO.A],
            () =>
                t.isMultiUserDM()
                    ? es.default.keys(eO.A.getTypingUsers(t.id)).some((e) => e !== eD.default.getCurrentUser()?.id)
                    : null != s && eO.A.isTyping(t.id, t.getRecipientId()),
            [t, s],
        );
    return t.isMultiUserDM()
        ? (0, i.jsx)(eH, {
              channel: t,
              selected: n,
              isTyping: c,
              status: o.status === eo.clD.ONLINE ? eo.clD.ONLINE : void 0,
              ...r,
          })
        : (0, i.jsx)(eH, { channel: t, selected: n, user: s, voiceChannel: l, isTyping: c, nameplate: u, ...r, ...o });
};

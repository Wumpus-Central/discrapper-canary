"use strict";
n.d(t, { z9: () => eH, w_: () => ek, Ay: () => eY, th: () => ej });
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
    z = n(691540),
    q = n(857250),
    X = n(97483),
    Z = n(720149),
    Q = n(976860),
    J = n(330001),
    ee = n(989349),
    et = n.n(ee),
    en = n(74114),
    ei = n(232835),
    er = n(994500),
    es = n(58703),
    ea = n(935208),
    eo = n(746080),
    el = n(652215),
    eu = n(381941),
    ec = n(375708),
    ed = n(449582),
    e_ = n(351952),
    eh = n(88686),
    ef = n(174755),
    ep = n(187322),
    eE = n(586893);
let em = r.forwardRef(function (e, t) {
    let { className: n, focusProps: r, ...s } = e;
    return (0, i.jsx)(ep.vN, { ...r, children: (0, i.jsx)("li", { className: a()(n, eE.k), ...s, ref: t }) });
});
var eg = n(824994),
    eA = n(922301),
    eI = n(368919),
    eT = n(414808),
    eS = n(302005),
    ey = n(954376),
    eN = n(534400),
    ev = n(854627),
    eC = n(616356),
    eR = n(290863),
    eO = n(222823),
    eb = n(741961),
    eD = n(543465),
    eL = n(287809),
    ew = n(19575),
    eM = n(330076);
let eP = ew.Ay.getEnableHardwareAcceleration() ? I.Js : I.eu,
    ex = { offset: { top: 2, bottom: 2, right: 4 } },
    ek = (e) => {
        let { nameplate: t, icon: n, forceShow: r = !1, reducedClickTarget: s = !1, visibleElementRef: o, ...l } = e,
            u = (0, e_.K)(t);
        return (0, i.jsx)(T.D, {
            className: a()(eM.b, { [eM.DQ]: null != t, [eM.by]: r, [eM.wY]: s }),
            style: u,
            ...l,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, i.jsx)("div", {
                ref: o,
                className: a()({ [eM.PJ]: null != t }),
                children: (0, i.jsx)(n, {
                    size: "sm",
                    color: "currentColor",
                    className: a()(eM.ut, { [eM.Uq]: null != t }),
                }),
            }),
        });
    },
    eU = (e) => {
        let { onClick: t, channelName: n, showNameplate: r } = e,
            { enabled: s } = Y.useConfig({ location: "Wave CTA" });
        return s
            ? (0, i.jsx)("div", {
                  className: eM.KQ,
                  children: (0, i.jsx)(A.m, {
                      text: ec.intl.formatToPlainString(ec.t.m0zYbV, { username: n }),
                      children: (0, i.jsx)(S.$, {
                          size: "sm",
                          variant: r ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: ec.intl.string(ec.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    eG = () => (0, i.jsx)(y.t, { size: "xs", color: "currentColor", className: eM.wB }),
    eF = () => (0, i.jsx)(N.G, { size: "xs", color: "currentColor", className: eM.wB }),
    eV = () => (0, i.jsx)(v.K, { size: "xs", color: "currentColor", className: eM.wB });
function eB(e) {
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
    return (0, i.jsx)(R.U, { eventTargetRef: t, className: eM.a1, dataBinding: { ...u, DimmerWidth: (s ?? 0) + 32 } });
}
let eH = (e) => {
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
    return (0, i.jsx)(em, {
        className: a()(eM.Ix, { [eM.Ij]: E.Fr }, f),
        onClick: h,
        role: p,
        focusProps: { within: !0, ...ex },
        "aria-posinset": m,
        "aria-setsize": g,
        ref: D,
        children: (0, i.jsxs)(b, {
            as: "div",
            selected: n,
            className: a()(l, eM.bG, eM.$J, { [eM.Q2]: n }),
            children: [
                I &&
                    (0, i.jsx)(eB, {
                        eventTargetRef: D,
                        isNitro: T,
                        contentWidth: C,
                        hoverGradientStart: S,
                        hoverGradientMiddle: y,
                        hoverGradientEnd: N,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: _ },
                    className: eM.nf,
                    ...v,
                    children: [
                        (0, i.jsx)(B.A, {
                            ref: I ? R : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(s, {
                                size: "refresh_sm",
                                className: a()(eM.e_, o),
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
};
function ej(e) {
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
        [ee, ed] = r.useState(!1),
        [e_, ep] = r.useState(!1),
        eE = r.useRef(null),
        [eC, eR] = r.useState(!1),
        eb = (0, _.K)(
            r.useCallback((e) => {
                eR(e);
            }, []),
        ),
        eL = r.useRef(null),
        ew = C ?? eL,
        eB = (0, h.A)(ew, eb),
        { showMenuItemPopover: eH, markMenuItemPopoverAsDismissed: ej } = (0, eS.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === s,
            isTargetInViewport: eC,
            channelType: t.type,
        }),
        {
            avatarSrc: eY,
            avatarDecorationSrc: eW,
            eventHandlers: eK,
        } = (0, ev.A)({ userId: o?.id, size: D._3.SIZE_32, animateOnHover: !(s || x || ee || e_) }),
        [e$, ez] = r.useState({ maskImage: "none" }),
        eq = r.useRef(null),
        eX = t.isMultiUserDM(),
        eZ = t.isSystemDM(),
        eQ = !eX && !eZ && t.type === el.rbe.DM,
        eJ = eQ && o?.primaryGuild != null,
        e0 = (0, m.bG)([eD.Ay], () => eD.Ay.isChannelMuted(t.getGuildId(), t.id)),
        e1 = (0, m.bG)([eD.Ay], () => eD.Ay.isMessagesFavorite(t.id)),
        { ignored: e2, blocked: e3 } = (0, m.cf)([er.A], () => ({
            ignored: er.A.isIgnored(t.getRecipientId()),
            blocked: er.A.isBlocked(t.getRecipientId()),
        })),
        e6 = eQ && e2,
        e4 = eQ && e3,
        e5 = (e0 || e6 || e4) && !(s || x),
        e7 = (0, m.bG)([eO.Ay], () => eO.Ay.getMentionCount(t.id) > 0),
        e8 = (0, $.Ay)(t),
        e9 = r.useRef(null),
        te = null != v && (s || x || e_),
        tt = () => {
            G(!0);
        },
        tn = () => {
            G(!1);
        },
        ti = () => {
            ed(!0);
        },
        tr = () => {
            ed(!1);
        },
        ts = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), M.A.closePrivateChannel(t.id, s, n);
        },
        ta = () => {
            M.A.preload(el.ME, t.id);
        },
        to = (e) => {
            e.stopPropagation();
        },
        tl = (e) => {
            e.target === e.currentTarget && eE.current?.click();
        },
        tu = (e) => {
            let r =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ep(!0),
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
                          { impressionName: r, noBlurEvent: !0, onClose: () => ep(!1) },
                      )
                    : (0, P.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("73341"),
                                  n.e("62155"),
                                  n.e("71822"),
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
                                  n.e("42451"),
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
                              return (n) => (0, i.jsx)(e, { ...n, user: o, channel: t, channelSelected: s });
                          },
                          { impressionName: r, onClose: () => ep(!1) },
                      );
        },
        tc = (e) => {
            e.preventDefault(), e.stopPropagation();
            let r = ec.intl.formatToPlainString(ec.t.hJ5Ap4, { name: e8 }),
                s = ec.intl.format(ec.t.SSIVOu, { name: e8 });
            t.isManaged() &&
                ((r = ec.intl.formatToPlainString(ec.t.hVGjEW, { name: e8 })),
                (s = ec.intl.format(ec.t.IK1Qvs, { name: e8 }))),
                (0, L.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("70588"), n.e("37803")]).then(n.bind(n, 148166));
                    return (t) => (0, i.jsx)(e, { title: r, body: s, onSubmit: ts, ...t });
                });
        },
        td = (0, i.jsx)(eI.A, {
            userName: e8,
            displayNameStyles: o?.displayNameStyles,
            effectDisplayType: x || s || e_ ? eA.G.ANIMATED : eA.G.PLAIN,
            loop: x,
            boldFontOpacity: 0.9,
        }),
        t_ = eJ
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      td,
                      (0, i.jsx)(eN.Ay, {
                          primaryGuild: o?.primaryGuild,
                          userId: o?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(eM.fc, { [eM.Y_]: e5 }),
                      }),
                  ],
              })
            : td,
        th = r.useRef(null),
        tf = (0, eg.W)({ location: "PrivateChannel" }) && o?.displayNameStyles != null,
        { isIncomingCall: tp, isOngoingCall: tE } = (0, H.A)(t.id),
        tm = [
            (0, W.Ay)({ channel: t, unread: e7, isIncomingCall: tp, isOngoingCall: tE }),
            (0, W.r2)({ channel: t, muted: e0, userStatus: S, isFavorite: e1 }),
        ]
            .filter(Boolean)
            .join(", "),
        tg = (0, m.bG)([eO.Ay], () => eO.Ay.lastMessageId(t.id)),
        { waveShouldShow: tA, wavePressed: tI } = (function (e, t) {
            let n,
                i,
                s,
                a,
                o,
                l,
                u,
                c,
                d,
                _,
                [h, f] = r.useState(!1),
                p = r.useCallback(async () => {
                    if (!h) {
                        f(!0),
                            (0, J.W)({ channelId: e.id, source: "DM Channel" }),
                            (0, Q.pX)(el.BVt.CHANNEL(el.ME, e.id));
                        try {
                            await Z.A.sendStickers(e.id, ["749054660769218631"], "", { location: eu.Hx.SEND_WAVE });
                        } catch (e) {
                            e.ok || 429 !== e.status || (0, z.P0)((0, q.o)(ec.intl.string(ec.t.Whhv4w), X.Ck.FAILURE));
                        }
                        f(!1);
                    }
                }, [e.id, h]);
            return {
                waveShouldShow:
                    ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
                        ? e.getRecipientId()
                        : null),
                    (s = (0, m.bG)([er.A], () => null != i && er.A.isFriend(i))),
                    (a = (0, m.bG)([er.A], () => null != i && er.A.isIgnored(i))),
                    (o = (0, m.bG)([ei.A], () => {
                        let t = ei.A.getMessages(e.id);
                        return 1 === t.length && t.first()?.type === el.lAJ.FRIEND_REQUEST_ACCEPTED;
                    })),
                    (l = e.hasFlag(eo.lx.HAS_ONLY_SYSTEM_MESSAGES)),
                    (u = (0, m.bG)([ei.A], () => ei.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
                    (c = ea.default.extractTimestamp(e.id)),
                    (d = (0, es.v0)(et()(), et()(c), 18144e5)),
                    (_ = (0, en.l)(e.id)),
                    n && s && !a && (l || null == t || o) && !u && d && null == _),
                wavePressed: p,
            };
        })(t, tg),
        { showClose: tT } = Y.useConfig({ location: "PrivateChannel" }),
        tS = (0, p.A)(() => {
            let e = eq.current?.getBoundingClientRect() ?? null,
                t = th.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void ez({ maskImage: "none" });
            let n = t.width - 16;
            ez({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        r.useLayoutEffect(tS, [x, s, tS]),
        (0, f.g)(ew, tS),
        (0, i.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...r } = e;
                return (0, i.jsxs)(em, {
                    className: a()(eM.Ix, eM.dm),
                    role: n,
                    focusProps: { ...ex, focusTarget: eE, ringTarget: ew },
                    ref: eB,
                    onMouseEnter: tt,
                    onMouseLeave: tn,
                    onMouseDown: ta,
                    onFocus: ti,
                    onBlur: tr,
                    onContextMenu: tu,
                    "aria-setsize": O,
                    "aria-posinset": R,
                    children: [
                        e7 ? (0, i.jsx)("div", { className: a()(eM.dM, { [eM.SU]: e5 }) }) : null,
                        (0, i.jsxs)(b, {
                            className: a()(eM.bG, { [eM.Q2]: s || e_ }),
                            as: "div",
                            onClick: tl,
                            muted: e5,
                            selected: s,
                            children: [
                                (0, i.jsx)(ef.A, {
                                    nameplate: te ? v : void 0,
                                    selected: s,
                                    hovered: x,
                                    content: th,
                                    placement: eh.u.CHANNEL,
                                }),
                                (0, i.jsx)("div", { className: eM.lU, ref: eq, children: t_ }),
                                (0, i.jsx)(u.N_, {
                                    style: e$,
                                    innerRef: eE,
                                    to: el.BVt.CHANNEL(el.ME, t.id),
                                    className: eM.nf,
                                    "aria-label": tm,
                                    ...r,
                                    children: (0, i.jsx)(B.A, {
                                        ref: th,
                                        avatar: (() => {
                                            let e = D._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, i.jsx)(ey.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: T,
                                                        status: S,
                                                    });
                                                else
                                                    return (0, i.jsx)(eP, {
                                                        ...eK,
                                                        src: (0, K.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: T ? el.clD.ONLINE : S,
                                                        isTyping: T,
                                                    });
                                            l()(
                                                null != o,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                o.isSystemUser() || (n = (0, k.A)(E) ? el.clD.STREAMING : S),
                                                (0, i.jsx)(eP, {
                                                    ...eK,
                                                    size: D._3.SIZE_32,
                                                    src: eY,
                                                    avatarDecoration: eW,
                                                    status: n,
                                                    isMobile: y,
                                                    isVR: N,
                                                    isTyping: T,
                                                    "aria-label": o.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: e7 && !e5,
                                        muted: e5,
                                        subText: t.isSystemDM()
                                            ? (0, i.jsx)("div", {
                                                  className: eM.W$,
                                                  children: (0, j.A)(t.id)
                                                      ? ec.intl.string(ec.t.FL5T01)
                                                      : ec.intl.string(ec.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, i.jsx)("div", {
                                                    className: eM.W$,
                                                    children: ec.intl.format(ec.t.CxSA5N, {
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
                                                      animateEmoji: x || ee || e_,
                                                      textClassName: eM.XD,
                                                      iconClassName: e5 ? eM.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, i.jsx)(g.A, { className: a()(eM.uN, { [eM.e8]: tf }), children: t_ }),
                                        decorators: t.isSystemDM()
                                            ? (0, i.jsx)(V.A, {
                                                  className: eM.G$,
                                                  type: V.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: tf,
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: a()(eM._q, { [eM.EY]: te }),
                                    children: [
                                        e4
                                            ? (0, i.jsx)(eV, {})
                                            : e6
                                              ? (0, i.jsx)(eF, {})
                                              : e1
                                                ? (0, i.jsx)(eG, {})
                                                : null,
                                        tA && null != e8
                                            ? (0, i.jsx)(eU, { channelName: e8, onClick: tI, showNameplate: te })
                                            : null,
                                        tT || !tA
                                            ? (0, i.jsx)(ek, {
                                                  icon: w.P,
                                                  "aria-label": eX
                                                      ? ec.intl.string(ec.t["26C4oi"])
                                                      : ec.intl.string(ec.t.jsvgc3),
                                                  onClick: eX ? tc : ts,
                                                  onMouseDown: to,
                                                  nameplate: v,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: e9,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                        eH && (0, i.jsx)(eT.A, { targetElementRef: ew, markMenuItemPopoverAsDismissed: ej }),
                    ],
                });
            },
        })
    );
}
let eY = (e) => {
    let { channel: t, selected: n, ...r } = e,
        s = (0, m.bG)([eL.default], () => eL.default.getUser(t.getRecipientId())),
        a = s?.id,
        o = (0, m.cf)([eR.A, eC.A], () => {
            let e;
            if (t.isMultiUserDM()) {
                let n = eR.A.getState().statuses;
                t.recipients.some((e) => n[e] === el.clD.ONLINE) && (e = el.clD.ONLINE);
            } else null != a && (e = eR.A.getStatus(a));
            return {
                status: e,
                activities: null != a ? eR.A.getActivities(a) : null,
                applicationStream: null != a ? eC.A.getAnyStreamForUser(a) : null,
                isMobile: null != a && eR.A.isMobileOnline(a),
                isVR: null != a && eR.A.isVROnline(a),
            };
        }, [t, a]),
        { voiceChannel: l } = (0, G.A)({ userId: a }),
        u = (0, ed.r)({ user: s }),
        c = (0, m.bG)(
            [eL.default, eb.A],
            () =>
                t.isMultiUserDM()
                    ? ea.default.keys(eb.A.getTypingUsers(t.id)).some((e) => e !== eL.default.getCurrentUser()?.id)
                    : null != s && eb.A.isTyping(t.id, t.getRecipientId()),
            [t, s],
        );
    return t.isMultiUserDM()
        ? (0, i.jsx)(ej, {
              channel: t,
              selected: n,
              isTyping: c,
              status: o.status === el.clD.ONLINE ? el.clD.ONLINE : void 0,
              ...r,
          })
        : (0, i.jsx)(ej, { channel: t, selected: n, user: s, voiceChannel: l, isTyping: c, nameplate: u, ...r, ...o });
};

"use strict";
n.d(t, { z9: () => eR, w_: () => eN, Ay: () => eD, th: () => eb });
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
    f = n(612324),
    h = n(535185),
    p = n(148839),
    E = n(607399),
    m = n(17928),
    g = n(780645),
    A = n(990078),
    I = n(97808),
    T = n(939249),
    S = n(821609),
    N = n(952270),
    y = n(428678),
    C = n(661531),
    v = n(549254),
    O = n(574553);
function R(e) {
    let { as: t, muted: n = !1, selected: r = !1, className: s, ...o } = e,
        l = t ?? T.D;
    return (0, i.jsx)(l, { ...o, className: a()(O.bG, s, { [O.SU]: n, [O.wH]: r }) });
}
var b = n(778712),
    D = n(192308),
    L = n(789645),
    w = n(308528),
    M = n(442433),
    P = n(765671),
    x = n(960076),
    U = n(397244),
    k = n(714114),
    G = n(394871),
    F = n(709066),
    V = n(262295),
    B = n(620982),
    H = n(343328);
let j = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-channel-wave-button",
    defaultConfig: { enabled: !1, showClose: !0 },
    variations: { 1: { enabled: !0, showClose: !1 }, 2: { enabled: !0, showClose: !0 } },
});
var Y = n(963027),
    W = n(571694),
    K = n(47167),
    z = n(432222),
    $ = n(449582),
    q = n(351952),
    Z = n(88686),
    X = n(174755),
    Q = n(187322),
    J = n(586893);
let ee = r.forwardRef(function (e, t) {
    let { className: n, focusProps: r, ...s } = e;
    return (0, i.jsx)(Q.vN, { ...r, children: (0, i.jsx)("li", { className: a()(n, J.k), ...s, ref: t }) });
});
var et = n(824994),
    en = n(922301),
    ei = n(368919),
    er = n(414808),
    es = n(302005),
    ea = n(954376),
    eo = n(534400),
    el = n(854627),
    eu = n(616356),
    ec = n(290863),
    ed = n(222823),
    e_ = n(994500),
    ef = n(741961),
    eh = n(543465),
    ep = n(287809),
    eE = n(935208),
    em = n(19575),
    eg = n(652215),
    eA = n(375708),
    eI = n(330076);
let eT = em.Ay.getEnableHardwareAcceleration() ? I.Js : I.eu,
    eS = { offset: { top: 2, bottom: 2, right: 4 } },
    eN = (e) => {
        let { nameplate: t, icon: n, forceShow: r = !1, reducedClickTarget: s = !1, visibleElementRef: o, ...l } = e,
            u = (0, q.K)(t);
        return (0, i.jsx)(T.D, {
            className: a()(eI.b, { [eI.DQ]: null != t, [eI.by]: r, [eI.wY]: s }),
            style: u,
            ...l,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, i.jsx)("div", {
                ref: o,
                className: a()({ [eI.PJ]: null != t }),
                children: (0, i.jsx)(n, {
                    size: "sm",
                    color: "currentColor",
                    className: a()(eI.ut, { [eI.Uq]: null != t }),
                }),
            }),
        });
    },
    ey = (e) => {
        let { onClick: t, channelName: n, showNameplate: r } = e,
            { enabled: s } = j.useConfig({ location: "Wave CTA" });
        return s
            ? (0, i.jsx)("div", {
                  className: eI.KQ,
                  children: (0, i.jsx)(A.m, {
                      text: eA.intl.formatToPlainString(eA.t.m0zYbV, { username: n }),
                      children: (0, i.jsx)(S.$, {
                          size: "sm",
                          variant: r ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: eA.intl.string(eA.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    eC = () => (0, i.jsx)(N.G, { size: "xs", color: "currentColor", className: eI.wB }),
    ev = () => (0, i.jsx)(y.K, { size: "xs", color: "currentColor", className: eI.wB });
function eO(e) {
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
    return (0, i.jsx)(v.U, { eventTargetRef: t, className: eI.a1, dataBinding: { ...u, DimmerWidth: (s ?? 0) + 32 } });
}
let eR = (e) => {
    let {
            route: t,
            selected: n,
            icon: s,
            iconClassName: o,
            interactiveClassName: l,
            text: c,
            children: d,
            locationState: _,
            onClick: f,
            className: h,
            role: p,
            "aria-posinset": m,
            "aria-setsize": g,
            listItemRef: A,
            showHoverGradient: I = !1,
            nitroHoverGradient: T = !1,
            hoverGradientStart: S,
            hoverGradientMiddle: N,
            hoverGradientEnd: y,
            ...C
        } = e,
        { width: v, ref: O } = (0, P.Ay)(),
        b = r.useRef(null),
        D = A ?? b;
    return (0, i.jsx)(ee, {
        className: a()(eI.Ix, { [eI.Ij]: E.Fr }, h),
        onClick: f,
        role: p,
        focusProps: { within: !0, ...eS },
        "aria-posinset": m,
        "aria-setsize": g,
        ref: D,
        children: (0, i.jsxs)(R, {
            as: "div",
            selected: n,
            className: a()(l, eI.bG, eI.$J, { [eI.Q2]: n }),
            children: [
                I &&
                    (0, i.jsx)(eO, {
                        eventTargetRef: D,
                        isNitro: T,
                        contentWidth: v,
                        hoverGradientStart: S,
                        hoverGradientMiddle: N,
                        hoverGradientEnd: y,
                    }),
                (0, i.jsxs)(u.N_, {
                    to: { pathname: t, state: _ },
                    className: eI.nf,
                    ...C,
                    children: [
                        (0, i.jsx)(V.A, {
                            ref: I ? O : void 0,
                            muted: !1,
                            avatar: (0, i.jsx)(s, {
                                size: "refresh_sm",
                                className: a()(eI.e_, o),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: eI.xx,
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
};
function eb(e) {
    let {
            channel: t,
            selected: s = !1,
            user: o,
            activities: E,
            applicationStream: A,
            voiceChannel: I,
            isTyping: T,
            status: S,
            isMobile: N,
            isVR: y,
            nameplate: C,
            ref: v,
            "aria-posinset": O,
            "aria-setsize": P,
        } = e,
        [k, $] = r.useState(!1),
        [q, Q] = r.useState(!1),
        [J, eu] = r.useState(!1),
        ec = r.useRef(null),
        [ef, ep] = r.useState(!1),
        eE = (0, _.K)(
            r.useCallback((e) => {
                ep(e);
            }, []),
        ),
        em = r.useRef(null),
        eO = v ?? em,
        eR = (0, f.A)(eO, eE),
        { showMenuItemPopover: eb, markMenuItemPopoverAsDismissed: eD } = (0, es.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === s,
            isTargetInViewport: ef,
            channelType: t.type,
        }),
        {
            avatarSrc: eL,
            avatarDecorationSrc: ew,
            eventHandlers: eM,
        } = (0, el.A)({ userId: o?.id, size: b._3.SIZE_32, animateOnHover: !(s || k || q || J) }),
        [eP, ex] = r.useState({ maskImage: "none" }),
        eU = r.useRef(null),
        ek = t.isMultiUserDM(),
        eG = t.isSystemDM(),
        eF = !ek && !eG && t.type === eg.rbe.DM,
        eV = eF && o?.primaryGuild != null,
        eB = (0, m.bG)([eh.Ay], () => eh.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eH, blocked: ej } = (0, m.cf)([e_.A], () => ({
            ignored: e_.A.isIgnored(t.getRecipientId()),
            blocked: e_.A.isBlocked(t.getRecipientId()),
        })),
        eY = eF && eH,
        eW = eF && ej,
        eK = (eB || eY || eW) && !(s || k),
        ez = (0, m.bG)([ed.Ay], () => ed.Ay.getMentionCount(t.id) > 0),
        e$ = (0, K.Ay)(t),
        eq = r.useRef(null),
        eZ = null != C && (s || k || J),
        eX = () => {
            $(!0);
        },
        eQ = () => {
            $(!1);
        },
        eJ = () => {
            Q(!0);
        },
        e0 = () => {
            Q(!1);
        },
        e1 = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), w.A.closePrivateChannel(t.id, s, n);
        },
        e2 = () => {
            w.A.preload(eg.ME, t.id);
        },
        e3 = (e) => {
            e.stopPropagation();
        },
        e6 = (e) => {
            e.target === e.currentTarget && ec.current?.click();
        },
        e4 = (e) => {
            let r =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eu(!0),
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
                                  n.e("34971"),
                                  n.e("42339"),
                                  n.e("12520"),
                                  n.e("46149"),
                                  n.e("53416"),
                                  n.e("60200"),
                              ]).then(n.bind(n, 4027));
                              return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: s });
                          },
                          { impressionName: r, noBlurEvent: !0, onClose: () => eu(!1) },
                      )
                    : (0, M.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("74389"),
                                  n.e("80203"),
                                  n.e("685"),
                                  n.e("12697"),
                                  n.e("26132"),
                                  n.e("46652"),
                                  n.e("93190"),
                                  n.e("34552"),
                                  n.e("93103"),
                                  n.e("8757"),
                                  n.e("91763"),
                                  n.e("89673"),
                                  n.e("85968"),
                                  n.e("60195"),
                                  n.e("68403"),
                                  n.e("29787"),
                                  n.e("71210"),
                                  n.e("97558"),
                                  n.e("94000"),
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
                                  n.e("45996"),
                                  n.e("52229"),
                                  n.e("792"),
                                  n.e("92822"),
                                  n.e("23427"),
                                  n.e("29422"),
                                  n.e("9291"),
                                  n.e("38056"),
                                  n.e("7059"),
                                  n.e("8829"),
                                  n.e("42339"),
                                  n.e("98199"),
                                  n.e("41175"),
                                  n.e("60816"),
                                  n.e("39778"),
                              ]).then(n.bind(n, 385913));
                              return (n) => (0, i.jsx)(e, { ...n, user: o, channel: t, channelSelected: s });
                          },
                          { impressionName: r, onClose: () => eu(!1) },
                      );
        },
        e5 = (e) => {
            e.preventDefault(), e.stopPropagation();
            let r = eA.intl.formatToPlainString(eA.t.hJ5Ap4, { name: e$ }),
                s = eA.intl.format(eA.t.SSIVOu, { name: e$ });
            t.isManaged() &&
                ((r = eA.intl.formatToPlainString(eA.t.hVGjEW, { name: e$ })),
                (s = eA.intl.format(eA.t.IK1Qvs, { name: e$ }))),
                (0, D.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("70588"), n.e("37803")]).then(n.bind(n, 148166));
                    return (t) => (0, i.jsx)(e, { title: r, body: s, onSubmit: e1, ...t });
                });
        },
        e7 = (0, i.jsx)(ei.A, {
            userName: e$,
            displayNameStyles: o?.displayNameStyles,
            effectDisplayType: k || s || J ? en.G.ANIMATED : en.G.PLAIN,
            loop: k,
            boldFontOpacity: 0.9,
        }),
        e8 = eV
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      e7,
                      (0, i.jsx)(eo.Ay, {
                          primaryGuild: o?.primaryGuild,
                          userId: o?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(eI.fc, { [eI.Y_]: eK }),
                      }),
                  ],
              })
            : e7,
        e9 = r.useRef(null),
        te = (0, et.W)({ location: "PrivateChannel" }) && o?.displayNameStyles != null,
        { isIncomingCall: tt, isOngoingCall: tn } = (0, B.A)(t.id),
        ti = [
            (0, Y.Ay)({ channel: t, unread: ez, isIncomingCall: tt, isOngoingCall: tn }),
            (0, Y.r2)({ channel: t, muted: eB, userStatus: S }),
        ]
            .filter(Boolean)
            .join(", "),
        tr = (0, m.bG)([ed.Ay], () => ed.Ay.lastMessageId(t.id)),
        { waveShouldShow: ts, wavePressed: ta } = (0, z.A)(t, tr),
        { showClose: to } = j.useConfig({ location: "PrivateChannel" }),
        tl = (0, p.A)(() => {
            let e = eU.current?.getBoundingClientRect() ?? null,
                t = e9.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void ex({ maskImage: "none" });
            let n = t.width - 16;
            ex({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        r.useLayoutEffect(tl, [k, tl]),
        (0, h.g)(eO, tl),
        (0, i.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...r } = e;
                return (0, i.jsxs)(ee, {
                    className: a()(eI.Ix, eI.dm),
                    role: n,
                    focusProps: { ...eS, focusTarget: ec, ringTarget: eO },
                    ref: eR,
                    onMouseEnter: eX,
                    onMouseLeave: eQ,
                    onMouseDown: e2,
                    onFocus: eJ,
                    onBlur: e0,
                    onContextMenu: e4,
                    "aria-setsize": P,
                    "aria-posinset": O,
                    children: [
                        ez ? (0, i.jsx)("div", { className: a()(eI.dM, { [eI.SU]: eK }) }) : null,
                        (0, i.jsxs)(R, {
                            className: a()(eI.bG, { [eI.Q2]: s || J }),
                            as: "div",
                            onClick: e6,
                            muted: eK,
                            selected: s,
                            children: [
                                (0, i.jsx)(X.A, {
                                    nameplate: eZ ? C : void 0,
                                    selected: s,
                                    hovered: k,
                                    content: e9,
                                    placement: Z.u.CHANNEL,
                                }),
                                (0, i.jsx)("div", { className: eI.lU, ref: eU, children: e8 }),
                                (0, i.jsx)(u.N_, {
                                    style: eP,
                                    innerRef: ec,
                                    to: eg.BVt.CHANNEL(eg.ME, t.id),
                                    className: eI.nf,
                                    "aria-label": ti,
                                    ...r,
                                    children: (0, i.jsx)(V.A, {
                                        ref: e9,
                                        avatar: (() => {
                                            let e = b._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, i.jsx)(ea.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: T,
                                                        status: S,
                                                    });
                                                else
                                                    return (0, i.jsx)(eT, {
                                                        ...eM,
                                                        src: (0, W.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: T ? eg.clD.ONLINE : S,
                                                        isTyping: T,
                                                    });
                                            l()(
                                                null != o,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                o.isSystemUser() || (n = (0, x.A)(E) ? eg.clD.STREAMING : S),
                                                (0, i.jsx)(eT, {
                                                    ...eM,
                                                    size: b._3.SIZE_32,
                                                    src: eL,
                                                    avatarDecoration: ew,
                                                    status: n,
                                                    isMobile: N,
                                                    isVR: y,
                                                    isTyping: T,
                                                    "aria-label": o.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: ez && !eK,
                                        muted: eK,
                                        subText: t.isSystemDM()
                                            ? (0, i.jsx)("div", {
                                                  className: eI.W$,
                                                  children: (0, H.A)(t.id)
                                                      ? eA.intl.string(eA.t.FL5T01)
                                                      : eA.intl.string(eA.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, i.jsx)("div", {
                                                    className: eI.W$,
                                                    children: eA.intl.format(eA.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, U.A)({
                                                      activities: E,
                                                      status: S,
                                                      applicationStream: A,
                                                      voiceChannel: I,
                                                  })
                                                ? (0, i.jsx)(G.A, {
                                                      user: o,
                                                      activities: E,
                                                      voiceChannel: I,
                                                      applicationStream: A,
                                                      animateEmoji: k || q || J,
                                                      textClassName: eI.XD,
                                                      iconClassName: eK ? eI.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, i.jsx)(g.A, { className: a()(eI.uN, { [eI.e8]: te }), children: e8 }),
                                        decorators: t.isSystemDM()
                                            ? (0, i.jsx)(F.A, {
                                                  className: eI.G$,
                                                  type: F.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: te,
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: a()(eI._q, { [eI.EY]: eZ }),
                                    children: [
                                        eY ? (0, i.jsx)(eC, {}) : null,
                                        eW ? (0, i.jsx)(ev, {}) : null,
                                        ts && null != e$
                                            ? (0, i.jsx)(ey, { channelName: e$, onClick: ta, showNameplate: eZ })
                                            : null,
                                        to || !ts
                                            ? (0, i.jsx)(eN, {
                                                  icon: L.P,
                                                  "aria-label": ek
                                                      ? eA.intl.string(eA.t["26C4oi"])
                                                      : eA.intl.string(eA.t.jsvgc3),
                                                  onClick: ek ? e5 : e1,
                                                  onMouseDown: e3,
                                                  nameplate: C,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: eq,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                        eb && (0, i.jsx)(er.A, { targetElementRef: eO, markMenuItemPopoverAsDismissed: eD }),
                    ],
                });
            },
        })
    );
}
let eD = (e) => {
    let { channel: t, selected: n, ...r } = e,
        s = (0, m.bG)([ep.default], () => ep.default.getUser(t.getRecipientId())),
        a = s?.id,
        o = (0, m.cf)([ec.A, eu.A], () => {
            let e;
            if (t.isMultiUserDM()) {
                let n = ec.A.getState().statuses;
                t.recipients.some((e) => n[e] === eg.clD.ONLINE) && (e = eg.clD.ONLINE);
            } else null != a && (e = ec.A.getStatus(a));
            return {
                status: e,
                activities: null != a ? ec.A.getActivities(a) : null,
                applicationStream: null != a ? eu.A.getAnyStreamForUser(a) : null,
                isMobile: null != a && ec.A.isMobileOnline(a),
                isVR: null != a && ec.A.isVROnline(a),
            };
        }, [t, a]),
        { voiceChannel: l } = (0, k.A)({ userId: a }),
        u = (0, $.r)({ user: s }),
        c = (0, m.bG)(
            [ep.default, ef.A],
            () =>
                t.isMultiUserDM()
                    ? eE.default.keys(ef.A.getTypingUsers(t.id)).some((e) => e !== ep.default.getCurrentUser()?.id)
                    : null != s && ef.A.isTyping(t.id, t.getRecipientId()),
            [t, s],
        );
    return t.isMultiUserDM()
        ? (0, i.jsx)(eb, {
              channel: t,
              selected: n,
              isTyping: c,
              status: o.status === eg.clD.ONLINE ? eg.clD.ONLINE : void 0,
              ...r,
          })
        : (0, i.jsx)(eb, { channel: t, selected: n, user: s, voiceChannel: l, isTyping: c, nameplate: u, ...r, ...o });
};

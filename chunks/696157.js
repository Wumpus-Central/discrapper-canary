n.d(t, { z9: () => ey, w_: () => ej, Ay: () => eb, th: () => eI });
var l = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(284009),
    o = n.n(r),
    c = n(936504),
    u = n(562708),
    d = n(837381),
    h = n(172218),
    m = n(612324),
    p = n(535185),
    f = n(148839),
    g = n(607399),
    A = n(17928),
    x = n(780645),
    C = n(990078),
    E = n(97808),
    v = n(939249),
    T = n(821609),
    j = n(952270),
    N = n(428678),
    _ = n(661531),
    S = n(549254),
    R = n(574553);
function y(e) {
    let { as: t, muted: n = !1, selected: s = !1, className: i, ...r } = e,
        o = t ?? v.D;
    return (0, l.jsx)(o, { ...r, className: a()(R.bG, i, { [R.SU]: n, [R.wH]: s }) });
}
var I = n(778712),
    b = n(192308),
    M = n(789645),
    w = n(308528),
    O = n(442433),
    U = n(765671),
    D = n(960076),
    P = n(397244),
    k = n(714114),
    L = n(394871),
    F = n(709066),
    G = n(262295),
    B = n(620982),
    V = n(343328);
let H = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-channel-wave-button",
    defaultConfig: { enabled: !1, showClose: !0 },
    variations: { 1: { enabled: !0, showClose: !1 }, 2: { enabled: !0, showClose: !0 } },
});
var Q = n(963027),
    W = n(571694),
    z = n(47167),
    q = n(432222),
    Z = n(449582),
    K = n(351952),
    $ = n(88686),
    Y = n(174755),
    X = n(187322),
    J = n(586893);
let ee = s.forwardRef(function (e, t) {
    let { className: n, focusProps: s, ...i } = e;
    return (0, l.jsx)(X.vN, { ...s, children: (0, l.jsx)("li", { className: a()(n, J.k), ...i, ref: t }) });
});
var et = n(824994),
    en = n(922301),
    el = n(368919),
    es = n(414808),
    ei = n(302005),
    ea = n(954376),
    er = n(534400),
    eo = n(854627),
    ec = n(616356),
    eu = n(290863),
    ed = n(222823),
    eh = n(994500),
    em = n(741961),
    ep = n(543465),
    ef = n(287809),
    eg = n(935208),
    eA = n(19575),
    ex = n(652215),
    eC = n(375708),
    eE = n(330076);
let ev = eA.Ay.getEnableHardwareAcceleration() ? E.Js : E.eu,
    eT = { offset: { top: 2, bottom: 2, right: 4 } },
    ej = (e) => {
        let { nameplate: t, icon: n, forceShow: s = !1, reducedClickTarget: i = !1, visibleElementRef: r, ...o } = e,
            c = (0, K.K)(t);
        return (0, l.jsx)(v.D, {
            className: a()(eE.b, { [eE.DQ]: null != t, [eE.by]: s, [eE.wY]: i }),
            style: c,
            ...o,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, l.jsx)("div", {
                ref: r,
                className: a()({ [eE.PJ]: null != t }),
                children: (0, l.jsx)(n, {
                    size: "sm",
                    color: "currentColor",
                    className: a()(eE.ut, { [eE.Uq]: null != t }),
                }),
            }),
        });
    },
    eN = (e) => {
        let { onClick: t, channelName: n, showNameplate: s } = e,
            { enabled: i } = H.useConfig({ location: "Wave CTA" });
        return i
            ? (0, l.jsx)("div", {
                  className: eE.KQ,
                  children: (0, l.jsx)(C.m, {
                      text: eC.intl.formatToPlainString(eC.t.m0zYbV, { username: n }),
                      children: (0, l.jsx)(T.$, {
                          size: "sm",
                          variant: s ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: eC.intl.string(eC.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    e_ = () => (0, l.jsx)(j.G, { size: "xs", color: "currentColor", className: eE.wB }),
    eS = () => (0, l.jsx)(N.K, { size: "xs", color: "currentColor", className: eE.wB });
function eR(e) {
    let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: i,
            hoverGradientStart: a,
            hoverGradientMiddle: r,
            hoverGradientEnd: o,
        } = e,
        c = s.useMemo(
            () =>
                null != a && null != r && null != o
                    ? {
                          Color_GradientCenter: a,
                          Color_InnerRing: r ?? _.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? r,
                          Color_OuterRing: o,
                          NitroVFX: !1,
                      }
                    : n
                      ? {
                            Color_GradientCenter: _.A.colors.NITRO_TAB_GRADIENT_CENTER,
                            Color_InnerRing: _.A.colors.NITRO_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: _.A.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !0,
                        }
                      : {
                            Color_GradientCenter: _.A.colors.STANDARD_TAB_GRADIENT_CENTER,
                            Color_InnerRing: _.A.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: _.A.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !1,
                        },
            [n, a, r, o],
        );
    return (0, l.jsx)(S.U, { eventTargetRef: t, className: eE.a1, dataBinding: { ...c, DimmerWidth: (i ?? 0) + 32 } });
}
let ey = (e) => {
    let {
            route: t,
            selected: n,
            icon: i,
            iconClassName: r,
            interactiveClassName: o,
            text: u,
            children: d,
            locationState: h,
            onClick: m,
            className: p,
            role: f,
            "aria-posinset": A,
            "aria-setsize": x,
            listItemRef: C,
            showHoverGradient: E = !1,
            nitroHoverGradient: v = !1,
            hoverGradientStart: T,
            hoverGradientMiddle: j,
            hoverGradientEnd: N,
            ..._
        } = e,
        { width: S, ref: R } = (0, U.Ay)(),
        I = s.useRef(null),
        b = C ?? I;
    return (0, l.jsx)(ee, {
        className: a()(eE.Ix, { [eE.Ij]: g.Fr }, p),
        onClick: m,
        role: f,
        focusProps: { within: !0, ...eT },
        "aria-posinset": A,
        "aria-setsize": x,
        ref: b,
        children: (0, l.jsxs)(y, {
            as: "div",
            selected: n,
            className: a()(o, eE.bG, eE.$J, { [eE.Q2]: n }),
            children: [
                E &&
                    (0, l.jsx)(eR, {
                        eventTargetRef: b,
                        isNitro: v,
                        contentWidth: S,
                        hoverGradientStart: T,
                        hoverGradientMiddle: j,
                        hoverGradientEnd: N,
                    }),
                (0, l.jsxs)(c.N_, {
                    to: { pathname: t, state: h },
                    className: eE.nf,
                    ..._,
                    children: [
                        (0, l.jsx)(G.A, {
                            ref: E ? R : void 0,
                            muted: !1,
                            avatar: (0, l.jsx)(i, {
                                size: "refresh_sm",
                                className: a()(eE.e_, r),
                                color: "currentColor",
                            }),
                            name: u,
                            innerClassName: eE.xx,
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
};
function eI(e) {
    let {
            channel: t,
            selected: i = !1,
            user: r,
            activities: g,
            applicationStream: C,
            voiceChannel: E,
            isTyping: v,
            status: T,
            isMobile: j,
            isVR: N,
            nameplate: _,
            ref: S,
            "aria-posinset": R,
            "aria-setsize": U,
        } = e,
        [k, Z] = s.useState(!1),
        [K, X] = s.useState(!1),
        [J, ec] = s.useState(!1),
        eu = s.useRef(null),
        [em, ef] = s.useState(!1),
        eg = (0, h.K)(
            s.useCallback((e) => {
                ef(e);
            }, []),
        ),
        eA = s.useRef(null),
        eR = S ?? eA,
        ey = (0, m.A)(eR, eg),
        { showMenuItemPopover: eI, markMenuItemPopoverAsDismissed: eb } = (0, ei.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === i,
            isTargetInViewport: em,
            channelType: t.type,
        }),
        {
            avatarSrc: eM,
            avatarDecorationSrc: ew,
            eventHandlers: eO,
        } = (0, eo.A)({ userId: r?.id, size: I._3.SIZE_32, animateOnHover: !(i || k || K || J) }),
        [eU, eD] = s.useState({ maskImage: "none" }),
        eP = s.useRef(null),
        ek = t.isMultiUserDM(),
        eL = t.isSystemDM(),
        eF = !ek && !eL && t.type === ex.rbe.DM,
        eG = eF && r?.primaryGuild != null,
        eB = (0, A.bG)([ep.Ay], () => ep.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eV, blocked: eH } = (0, A.cf)([eh.A], () => ({
            ignored: eh.A.isIgnored(t.getRecipientId()),
            blocked: eh.A.isBlocked(t.getRecipientId()),
        })),
        eQ = eF && eV,
        eW = eF && eH,
        ez = (eB || eQ || eW) && !(i || k),
        eq = (0, A.bG)([ed.Ay], () => ed.Ay.getMentionCount(t.id) > 0),
        eZ = (0, z.Ay)(t),
        eK = s.useRef(null),
        e$ = null != _ && (i || k || J),
        eY = () => {
            Z(!0);
        },
        eX = () => {
            Z(!1);
        },
        eJ = () => {
            X(!0);
        },
        e0 = () => {
            X(!1);
        },
        e1 = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), w.A.closePrivateChannel(t.id, i, n);
        },
        e2 = () => {
            w.A.preload(ex.ME, t.id);
        },
        e3 = (e) => {
            e.stopPropagation();
        },
        e6 = (e) => {
            e.target === e.currentTarget && eu.current?.click();
        },
        e5 = (e) => {
            let s =
                "contextmenu" === e.type
                    ? u.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : u.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ec(!0),
                t.isMultiUserDM()
                    ? (0, O.L3)(
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
                              return (n) => (0, l.jsx)(e, { ...n, channel: t, selected: i });
                          },
                          { impressionName: s, noBlurEvent: !0, onClose: () => ec(!1) },
                      )
                    : (0, O.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("39431"),
                                  n.e("83721"),
                                  n.e("31483"),
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
                                  n.e("91007"),
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
                                  n.e("86169"),
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
                              return (n) => (0, l.jsx)(e, { ...n, user: r, channel: t, channelSelected: i });
                          },
                          { impressionName: s, onClose: () => ec(!1) },
                      );
        },
        e8 = (e) => {
            e.preventDefault(), e.stopPropagation();
            let s = eC.intl.formatToPlainString(eC.t.hJ5Ap4, { name: eZ }),
                i = eC.intl.format(eC.t.SSIVOu, { name: eZ });
            t.isManaged() &&
                ((s = eC.intl.formatToPlainString(eC.t.hVGjEW, { name: eZ })),
                (i = eC.intl.format(eC.t.IK1Qvs, { name: eZ }))),
                (0, b.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("70588"), n.e("37803")]).then(n.bind(n, 148166));
                    return (t) => (0, l.jsx)(e, { title: s, body: i, onSubmit: e1, ...t });
                });
        },
        e4 = (0, l.jsx)(el.A, {
            userName: eZ,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: k || i || J ? en.G.ANIMATED : en.G.PLAIN,
            loop: k,
            boldFontOpacity: 0.9,
        }),
        e7 = eG
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      e4,
                      (0, l.jsx)(er.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(eE.fc, { [eE.Y_]: ez }),
                      }),
                  ],
              })
            : e4,
        e9 = s.useRef(null),
        te = (0, et.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        { isIncomingCall: tt, isOngoingCall: tn } = (0, B.A)(t.id),
        tl = [
            (0, Q.Ay)({ channel: t, unread: eq, isIncomingCall: tt, isOngoingCall: tn }),
            (0, Q.r2)({ channel: t, muted: eB, userStatus: T }),
        ]
            .filter(Boolean)
            .join(", "),
        ts = (0, A.bG)([ed.Ay], () => ed.Ay.lastMessageId(t.id)),
        { waveShouldShow: ti, wavePressed: ta } = (0, q.A)(t, ts),
        { showClose: tr } = H.useConfig({ location: "PrivateChannel" }),
        to = (0, f.A)(() => {
            let e = eP.current?.getBoundingClientRect() ?? null,
                t = e9.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void eD({ maskImage: "none" });
            let n = t.width - 16;
            eD({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        s.useLayoutEffect(to, [k, to]),
        (0, p.g)(eR, to),
        (0, l.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...s } = e;
                return (0, l.jsxs)(ee, {
                    className: a()(eE.Ix, eE.dm),
                    role: n,
                    focusProps: { ...eT, focusTarget: eu, ringTarget: eR },
                    ref: ey,
                    onMouseEnter: eY,
                    onMouseLeave: eX,
                    onMouseDown: e2,
                    onFocus: eJ,
                    onBlur: e0,
                    onContextMenu: e5,
                    "aria-setsize": U,
                    "aria-posinset": R,
                    children: [
                        eq ? (0, l.jsx)("div", { className: a()(eE.dM, { [eE.SU]: ez }) }) : null,
                        (0, l.jsxs)(y, {
                            className: a()(eE.bG, { [eE.Q2]: i || J }),
                            as: "div",
                            onClick: e6,
                            muted: ez,
                            selected: i,
                            children: [
                                (0, l.jsx)(Y.A, {
                                    nameplate: e$ ? _ : void 0,
                                    selected: i,
                                    hovered: k,
                                    content: e9,
                                    placement: $.u.CHANNEL,
                                }),
                                (0, l.jsx)("div", { className: eE.lU, ref: eP, children: e7 }),
                                (0, l.jsx)(c.N_, {
                                    style: eU,
                                    innerRef: eu,
                                    to: ex.BVt.CHANNEL(ex.ME, t.id),
                                    className: eE.nf,
                                    "aria-label": tl,
                                    ...s,
                                    children: (0, l.jsx)(G.A, {
                                        ref: e9,
                                        avatar: (() => {
                                            let e = I._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, l.jsx)(ea.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: v,
                                                        status: T,
                                                    });
                                                else
                                                    return (0, l.jsx)(ev, {
                                                        ...eO,
                                                        src: (0, W.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: v ? ex.clD.ONLINE : T,
                                                        isTyping: v,
                                                    });
                                            o()(
                                                null != r,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                r.isSystemUser() || (n = (0, D.A)(g) ? ex.clD.STREAMING : T),
                                                (0, l.jsx)(ev, {
                                                    ...eO,
                                                    size: I._3.SIZE_32,
                                                    src: eM,
                                                    avatarDecoration: ew,
                                                    status: n,
                                                    isMobile: j,
                                                    isVR: N,
                                                    isTyping: v,
                                                    "aria-label": r.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: eq && !ez,
                                        muted: ez,
                                        subText: t.isSystemDM()
                                            ? (0, l.jsx)("div", {
                                                  className: eE.W$,
                                                  children: (0, V.A)(t.id)
                                                      ? eC.intl.string(eC.t.FL5T01)
                                                      : eC.intl.string(eC.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, l.jsx)("div", {
                                                    className: eE.W$,
                                                    children: eC.intl.format(eC.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, P.A)({
                                                      activities: g,
                                                      status: T,
                                                      applicationStream: C,
                                                      voiceChannel: E,
                                                  })
                                                ? (0, l.jsx)(L.A, {
                                                      user: r,
                                                      activities: g,
                                                      voiceChannel: E,
                                                      applicationStream: C,
                                                      animateEmoji: k || K || J,
                                                      textClassName: eE.XD,
                                                      iconClassName: ez ? eE.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, l.jsx)(x.A, { className: a()(eE.uN, { [eE.e8]: te }), children: e7 }),
                                        decorators: t.isSystemDM()
                                            ? (0, l.jsx)(F.A, {
                                                  className: eE.G$,
                                                  type: F.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: te,
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: a()(eE._q, { [eE.EY]: e$ }),
                                    children: [
                                        eQ ? (0, l.jsx)(e_, {}) : null,
                                        eW ? (0, l.jsx)(eS, {}) : null,
                                        ti && null != eZ
                                            ? (0, l.jsx)(eN, { channelName: eZ, onClick: ta, showNameplate: e$ })
                                            : null,
                                        tr || !ti
                                            ? (0, l.jsx)(ej, {
                                                  icon: M.P,
                                                  "aria-label": ek
                                                      ? eC.intl.string(eC.t["26C4oi"])
                                                      : eC.intl.string(eC.t.jsvgc3),
                                                  onClick: ek ? e8 : e1,
                                                  onMouseDown: e3,
                                                  nameplate: _,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: eK,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                        eI && (0, l.jsx)(es.A, { targetElementRef: eR, markMenuItemPopoverAsDismissed: eb }),
                    ],
                });
            },
        })
    );
}
let eb =
    21552 == n.j
        ? (e) => {
              let { channel: t, selected: n, ...s } = e,
                  i = (0, A.bG)([ef.default], () => ef.default.getUser(t.getRecipientId())),
                  a = i?.id,
                  r = (0, A.cf)([eu.A, ec.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = eu.A.getState().statuses;
                          t.recipients.some((e) => n[e] === ex.clD.ONLINE) && (e = ex.clD.ONLINE);
                      } else null != a && (e = eu.A.getStatus(a));
                      return {
                          status: e,
                          activities: null != a ? eu.A.getActivities(a) : null,
                          applicationStream: null != a ? ec.A.getAnyStreamForUser(a) : null,
                          isMobile: null != a && eu.A.isMobileOnline(a),
                          isVR: null != a && eu.A.isVROnline(a),
                      };
                  }, [t, a]),
                  { voiceChannel: o } = (0, k.A)({ userId: a }),
                  c = (0, Z.r)({ user: i }),
                  u = (0, A.bG)(
                      [ef.default, em.A],
                      () =>
                          t.isMultiUserDM()
                              ? eg.default
                                    .keys(em.A.getTypingUsers(t.id))
                                    .some((e) => e !== ef.default.getCurrentUser()?.id)
                              : null != i && em.A.isTyping(t.id, t.getRecipientId()),
                      [t, i],
                  );
              return t.isMultiUserDM()
                  ? (0, l.jsx)(eI, {
                        channel: t,
                        selected: n,
                        isTyping: u,
                        status: r.status === ex.clD.ONLINE ? ex.clD.ONLINE : void 0,
                        ...s,
                    })
                  : (0, l.jsx)(eI, {
                        channel: t,
                        selected: n,
                        user: i,
                        voiceChannel: o,
                        isTyping: u,
                        nameplate: c,
                        ...s,
                        ...r,
                    });
          }
        : null;

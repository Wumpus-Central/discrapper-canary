n.d(t, { z9: () => ey, w_: () => ej, Ay: () => eb, th: () => eI });
var l = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(284009),
    o = n.n(r),
    u = n(936504),
    c = n(562708),
    d = n(837381),
    h = n(172218),
    m = n(612324),
    p = n(535185),
    f = n(148839),
    g = n(607399),
    x = n(17928),
    A = n(780645),
    C = n(990078),
    v = n(97808),
    E = n(939249),
    T = n(821609),
    j = n(952270),
    _ = n(428678),
    N = n(661531),
    S = n(549254),
    R = n(574553);
function y(e) {
    let { as: t, muted: n = !1, selected: s = !1, className: i, ...r } = e,
        o = t ?? E.D;
    return (0, l.jsx)(o, { ...r, className: a()(R.bG, i, { [R.SU]: n, [R.wH]: s }) });
}
var I = n(778712),
    b = n(192308),
    M = n(789645),
    w = n(308528),
    U = n(442433),
    O = n(765671),
    D = n(960076),
    P = n(397244),
    k = n(714114),
    L = n(394871),
    F = n(709066),
    G = n(262295),
    V = n(620982),
    B = n(343328);
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
    Y = n(88686),
    $ = n(174755),
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
    eu = n(616356),
    ec = n(290863),
    ed = n(222823),
    eh = n(994500),
    em = n(741961),
    ep = n(543465),
    ef = n(287809),
    eg = n(935208),
    ex = n(19575),
    eA = n(652215),
    eC = n(375708),
    ev = n(330076);
let eE = ex.Ay.getEnableHardwareAcceleration() ? v.Js : v.eu,
    eT = { offset: { top: 2, bottom: 2, right: 4 } },
    ej = (e) => {
        let { nameplate: t, icon: n, forceShow: s = !1, reducedClickTarget: i = !1, visibleElementRef: r, ...o } = e,
            u = (0, K.K)(t);
        return (0, l.jsx)(E.D, {
            className: a()(ev.b, { [ev.DQ]: null != t, [ev.by]: s, [ev.wY]: i }),
            style: u,
            ...o,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, l.jsx)("div", {
                ref: r,
                className: a()({ [ev.PJ]: null != t }),
                children: (0, l.jsx)(n, {
                    size: "sm",
                    color: "currentColor",
                    className: a()(ev.ut, { [ev.Uq]: null != t }),
                }),
            }),
        });
    },
    e_ = (e) => {
        let { onClick: t, channelName: n, showNameplate: s } = e,
            { enabled: i } = H.useConfig({ location: "Wave CTA" });
        return i
            ? (0, l.jsx)("div", {
                  className: ev.KQ,
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
    eN = () => (0, l.jsx)(j.G, { size: "xs", color: "currentColor", className: ev.wB }),
    eS = () => (0, l.jsx)(_.K, { size: "xs", color: "currentColor", className: ev.wB });
function eR(e) {
    let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: i,
            hoverGradientStart: a,
            hoverGradientMiddle: r,
            hoverGradientEnd: o,
        } = e,
        u = s.useMemo(
            () =>
                null != a && null != r && null != o
                    ? {
                          Color_GradientCenter: a,
                          Color_InnerRing: r ?? N.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? r,
                          Color_OuterRing: o,
                          NitroVFX: !1,
                      }
                    : n
                      ? {
                            Color_GradientCenter: N.A.colors.NITRO_TAB_GRADIENT_CENTER,
                            Color_InnerRing: N.A.colors.NITRO_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: N.A.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !0,
                        }
                      : {
                            Color_GradientCenter: N.A.colors.STANDARD_TAB_GRADIENT_CENTER,
                            Color_InnerRing: N.A.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: N.A.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !1,
                        },
            [n, a, r, o],
        );
    return (0, l.jsx)(S.U, { eventTargetRef: t, className: ev.a1, dataBinding: { ...u, DimmerWidth: (i ?? 0) + 32 } });
}
let ey = (e) => {
    let {
            route: t,
            selected: n,
            icon: i,
            iconClassName: r,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: h,
            onClick: m,
            className: p,
            role: f,
            "aria-posinset": x,
            "aria-setsize": A,
            listItemRef: C,
            showHoverGradient: v = !1,
            nitroHoverGradient: E = !1,
            hoverGradientStart: T,
            hoverGradientMiddle: j,
            hoverGradientEnd: _,
            ...N
        } = e,
        { width: S, ref: R } = (0, O.Ay)(),
        I = s.useRef(null),
        b = C ?? I;
    return (0, l.jsx)(ee, {
        className: a()(ev.Ix, { [ev.Ij]: g.Fr }, p),
        onClick: m,
        role: f,
        focusProps: { within: !0, ...eT },
        "aria-posinset": x,
        "aria-setsize": A,
        ref: b,
        children: (0, l.jsxs)(y, {
            as: "div",
            selected: n,
            className: a()(o, ev.bG, ev.$J, { [ev.Q2]: n }),
            children: [
                v &&
                    (0, l.jsx)(eR, {
                        eventTargetRef: b,
                        isNitro: E,
                        contentWidth: S,
                        hoverGradientStart: T,
                        hoverGradientMiddle: j,
                        hoverGradientEnd: _,
                    }),
                (0, l.jsxs)(u.N_, {
                    to: { pathname: t, state: h },
                    className: ev.nf,
                    ...N,
                    children: [
                        (0, l.jsx)(G.A, {
                            ref: v ? R : void 0,
                            muted: !1,
                            avatar: (0, l.jsx)(i, {
                                size: "refresh_sm",
                                className: a()(ev.e_, r),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: ev.xx,
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
            voiceChannel: v,
            isTyping: E,
            status: T,
            isMobile: j,
            isVR: _,
            nameplate: N,
            ref: S,
            "aria-posinset": R,
            "aria-setsize": O,
        } = e,
        [k, Z] = s.useState(!1),
        [K, X] = s.useState(!1),
        [J, eu] = s.useState(!1),
        ec = s.useRef(null),
        [em, ef] = s.useState(!1),
        eg = (0, h.K)(
            s.useCallback((e) => {
                ef(e);
            }, []),
        ),
        ex = s.useRef(null),
        eR = S ?? ex,
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
            eventHandlers: eU,
        } = (0, eo.A)({ userId: r?.id, size: I._3.SIZE_32, animateOnHover: !(i || k || K || J) }),
        [eO, eD] = s.useState({ maskImage: "none" }),
        eP = s.useRef(null),
        ek = t.isMultiUserDM(),
        eL = t.isSystemDM(),
        eF = !ek && !eL && t.type === eA.rbe.DM,
        eG = eF && r?.primaryGuild != null,
        eV = (0, x.bG)([ep.Ay], () => ep.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eB, blocked: eH } = (0, x.cf)([eh.A], () => ({
            ignored: eh.A.isIgnored(t.getRecipientId()),
            blocked: eh.A.isBlocked(t.getRecipientId()),
        })),
        eQ = eF && eB,
        eW = eF && eH,
        ez = (eV || eQ || eW) && !(i || k),
        eq = (0, x.bG)([ed.Ay], () => ed.Ay.getMentionCount(t.id) > 0),
        eZ = (0, z.Ay)(t),
        eK = s.useRef(null),
        eY = null != N && (i || k || J),
        e$ = () => {
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
            w.A.preload(eA.ME, t.id);
        },
        e3 = (e) => {
            e.stopPropagation();
        },
        e6 = (e) => {
            e.target === e.currentTarget && ec.current?.click();
        },
        e5 = (e) => {
            let s =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eu(!0),
                t.isMultiUserDM()
                    ? (0, U.L3)(
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
                          { impressionName: s, noBlurEvent: !0, onClose: () => eu(!1) },
                      )
                    : (0, U.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("26705"),
                                  n.e("92646"),
                                  n.e("34186"),
                                  n.e("94881"),
                                  n.e("26132"),
                                  n.e("46652"),
                                  n.e("93190"),
                                  n.e("34552"),
                                  n.e("93103"),
                                  n.e("91763"),
                                  n.e("8757"),
                                  n.e("89673"),
                                  n.e("68403"),
                                  n.e("85968"),
                                  n.e("60195"),
                                  n.e("71210"),
                                  n.e("29787"),
                                  n.e("88342"),
                                  n.e("97558"),
                                  n.e("94000"),
                                  n.e("38730"),
                                  n.e("91994"),
                                  n.e("42451"),
                                  n.e("98965"),
                                  n.e("76665"),
                                  n.e("35313"),
                                  n.e("76273"),
                                  n.e("36564"),
                                  n.e("34971"),
                                  n.e("52229"),
                                  n.e("792"),
                                  n.e("45996"),
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
                          { impressionName: s, onClose: () => eu(!1) },
                      );
        },
        e4 = (e) => {
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
        e8 = (0, l.jsx)(el.A, {
            userName: eZ,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: k || i || J ? en.G.ANIMATED : en.G.PLAIN,
            loop: k,
            boldFontOpacity: 0.9,
        }),
        e7 = eG
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      e8,
                      (0, l.jsx)(er.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(ev.fc, { [ev.Y_]: ez }),
                      }),
                  ],
              })
            : e8,
        e9 = s.useRef(null),
        te = (0, et.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        { isIncomingCall: tt, isOngoingCall: tn } = (0, V.A)(t.id),
        tl = [
            (0, Q.Ay)({ channel: t, unread: eq, isIncomingCall: tt, isOngoingCall: tn }),
            (0, Q.r2)({ channel: t, muted: eV, userStatus: T }),
        ]
            .filter(Boolean)
            .join(", "),
        ts = (0, x.bG)([ed.Ay], () => ed.Ay.lastMessageId(t.id)),
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
        s.useLayoutEffect(to, [k, i, to]),
        (0, p.g)(eR, to),
        (0, l.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...s } = e;
                return (0, l.jsxs)(ee, {
                    className: a()(ev.Ix, ev.dm),
                    role: n,
                    focusProps: { ...eT, focusTarget: ec, ringTarget: eR },
                    ref: ey,
                    onMouseEnter: e$,
                    onMouseLeave: eX,
                    onMouseDown: e2,
                    onFocus: eJ,
                    onBlur: e0,
                    onContextMenu: e5,
                    "aria-setsize": O,
                    "aria-posinset": R,
                    children: [
                        eq ? (0, l.jsx)("div", { className: a()(ev.dM, { [ev.SU]: ez }) }) : null,
                        (0, l.jsxs)(y, {
                            className: a()(ev.bG, { [ev.Q2]: i || J }),
                            as: "div",
                            onClick: e6,
                            muted: ez,
                            selected: i,
                            children: [
                                (0, l.jsx)($.A, {
                                    nameplate: eY ? N : void 0,
                                    selected: i,
                                    hovered: k,
                                    content: e9,
                                    placement: Y.u.CHANNEL,
                                }),
                                (0, l.jsx)("div", { className: ev.lU, ref: eP, children: e7 }),
                                (0, l.jsx)(u.N_, {
                                    style: eO,
                                    innerRef: ec,
                                    to: eA.BVt.CHANNEL(eA.ME, t.id),
                                    className: ev.nf,
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
                                                        isTyping: E,
                                                        status: T,
                                                    });
                                                else
                                                    return (0, l.jsx)(eE, {
                                                        ...eU,
                                                        src: (0, W.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: E ? eA.clD.ONLINE : T,
                                                        isTyping: E,
                                                    });
                                            o()(
                                                null != r,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                r.isSystemUser() || (n = (0, D.A)(g) ? eA.clD.STREAMING : T),
                                                (0, l.jsx)(eE, {
                                                    ...eU,
                                                    size: I._3.SIZE_32,
                                                    src: eM,
                                                    avatarDecoration: ew,
                                                    status: n,
                                                    isMobile: j,
                                                    isVR: _,
                                                    isTyping: E,
                                                    "aria-label": r.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: eq && !ez,
                                        muted: ez,
                                        subText: t.isSystemDM()
                                            ? (0, l.jsx)("div", {
                                                  className: ev.W$,
                                                  children: (0, B.A)(t.id)
                                                      ? eC.intl.string(eC.t.FL5T01)
                                                      : eC.intl.string(eC.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, l.jsx)("div", {
                                                    className: ev.W$,
                                                    children: eC.intl.format(eC.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, P.A)({
                                                      activities: g,
                                                      status: T,
                                                      applicationStream: C,
                                                      voiceChannel: v,
                                                  })
                                                ? (0, l.jsx)(L.A, {
                                                      user: r,
                                                      activities: g,
                                                      voiceChannel: v,
                                                      applicationStream: C,
                                                      animateEmoji: k || K || J,
                                                      textClassName: ev.XD,
                                                      iconClassName: ez ? ev.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, l.jsx)(A.A, { className: a()(ev.uN, { [ev.e8]: te }), children: e7 }),
                                        decorators: t.isSystemDM()
                                            ? (0, l.jsx)(F.A, {
                                                  className: ev.G$,
                                                  type: F.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: te,
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: a()(ev._q, { [ev.EY]: eY }),
                                    children: [
                                        eQ ? (0, l.jsx)(eN, {}) : null,
                                        eW ? (0, l.jsx)(eS, {}) : null,
                                        ti && null != eZ
                                            ? (0, l.jsx)(e_, { channelName: eZ, onClick: ta, showNameplate: eY })
                                            : null,
                                        tr || !ti
                                            ? (0, l.jsx)(ej, {
                                                  icon: M.P,
                                                  "aria-label": ek
                                                      ? eC.intl.string(eC.t["26C4oi"])
                                                      : eC.intl.string(eC.t.jsvgc3),
                                                  onClick: ek ? e4 : e1,
                                                  onMouseDown: e3,
                                                  nameplate: N,
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
                  i = (0, x.bG)([ef.default], () => ef.default.getUser(t.getRecipientId())),
                  a = i?.id,
                  r = (0, x.cf)([ec.A, eu.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = ec.A.getState().statuses;
                          t.recipients.some((e) => n[e] === eA.clD.ONLINE) && (e = eA.clD.ONLINE);
                      } else null != a && (e = ec.A.getStatus(a));
                      return {
                          status: e,
                          activities: null != a ? ec.A.getActivities(a) : null,
                          applicationStream: null != a ? eu.A.getAnyStreamForUser(a) : null,
                          isMobile: null != a && ec.A.isMobileOnline(a),
                          isVR: null != a && ec.A.isVROnline(a),
                      };
                  }, [t, a]),
                  { voiceChannel: o } = (0, k.A)({ userId: a }),
                  u = (0, Z.r)({ user: i }),
                  c = (0, x.bG)(
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
                        isTyping: c,
                        status: r.status === eA.clD.ONLINE ? eA.clD.ONLINE : void 0,
                        ...s,
                    })
                  : (0, l.jsx)(eI, {
                        channel: t,
                        selected: n,
                        user: i,
                        voiceChannel: o,
                        isTyping: c,
                        nameplate: u,
                        ...s,
                        ...r,
                    });
          }
        : null;

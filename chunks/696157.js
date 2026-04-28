s.d(t, { z9: () => eD, w_: () => ev, Ay: () => eM, th: () => eS });
var l = s(627968),
    n = s(64700),
    i = s(503698),
    a = s.n(i),
    r = s(284009),
    o = s.n(r),
    u = s(936504),
    c = s(110259),
    d = s(837381),
    m = s(172218),
    N = s(612324),
    A = s(535185),
    g = s(148839),
    p = s(607399),
    h = s(17928),
    f = s(3026),
    x = s(990078),
    _ = s(97808),
    C = s(939249),
    I = s(821609),
    v = s(952270),
    y = s(428678),
    j = s(661531),
    R = s(549254),
    T = s(574553);
function D(e) {
    let { as: t, muted: s = !1, selected: n = !1, className: i, ...r } = e,
        o = t ?? C.D;
    return (0, l.jsx)(o, { ...r, className: a()(T.bG, i, { [T.SU]: s, [T.wH]: n }) });
}
var S = s(778712),
    M = s(192308),
    E = s(789645),
    b = s(308528),
    G = s(442433),
    w = s(765671),
    P = s(960076),
    k = s(397244),
    O = s(714114),
    U = s(729551),
    B = s(709066),
    z = s(262295),
    L = s(620982),
    V = s(343328);
let F = (0, s(945810).mj)({
    kind: "user",
    name: "2026-02-channel-wave-button",
    defaultConfig: { enabled: !1, showClose: !0 },
    variations: { 1: { enabled: !0, showClose: !1 }, 2: { enabled: !0, showClose: !0 } },
});
var W = s(963027),
    H = s(571694),
    K = s(47167),
    Y = s(432222),
    $ = s(449582),
    Q = s(351952),
    J = s(88686),
    X = s(174755),
    Z = s(187322),
    q = s(586893);
let ee = n.forwardRef(function (e, t) {
    let { className: s, focusProps: n, ...i } = e;
    return (0, l.jsx)(Z.vN, { ...n, children: (0, l.jsx)("li", { className: a()(s, q.k), ...i, ref: t }) });
});
var et = s(824994),
    es = s(922301),
    el = s(368919),
    en = s(414808),
    ei = s(302005),
    ea = s(954376),
    er = s(534400),
    eo = s(854627),
    eu = s(616356),
    ec = s(290863),
    ed = s(222823),
    em = s(994500),
    eN = s(741961),
    eA = s(543465),
    eg = s(287809),
    ep = s(935208),
    eh = s(19575),
    ef = s(652215),
    ex = s(985018),
    e_ = s(330076);
let eC = eh.Ay.getEnableHardwareAcceleration() ? _.Js : _.eu,
    eI = { offset: { top: 2, bottom: 2, right: 4 } },
    ev = (e) => {
        let { nameplate: t, icon: s, forceShow: n = !1, reducedClickTarget: i = !1, visibleElementRef: r, ...o } = e,
            u = (0, Q.K)(t);
        return (0, l.jsx)(C.D, {
            className: a()(e_.b, { [e_.DQ]: null != t, [e_.by]: n, [e_.wY]: i }),
            style: u,
            ...o,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, l.jsx)("div", {
                ref: r,
                className: a()({ [e_.PJ]: null != t }),
                children: (0, l.jsx)(s, {
                    size: "sm",
                    color: "currentColor",
                    className: a()(e_.ut, { [e_.Uq]: null != t }),
                }),
            }),
        });
    },
    ey = (e) => {
        let { onClick: t, channelName: s, showNameplate: n } = e,
            { enabled: i } = F.useConfig({ location: "Wave CTA" });
        return i
            ? (0, l.jsx)("div", {
                  className: e_.KQ,
                  children: (0, l.jsx)(x.m, {
                      text: ex.intl.formatToPlainString(ex.t.m0zYbV, { username: s }),
                      children: (0, l.jsx)(I.$, {
                          size: "sm",
                          variant: n ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: ex.intl.string(ex.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    ej = () => (0, l.jsx)(v.G, { size: "xs", color: "currentColor", className: e_.wB }),
    eR = () => (0, l.jsx)(y.K, { size: "xs", color: "currentColor", className: e_.wB });
function eT(e) {
    let {
            eventTargetRef: t,
            isNitro: s,
            contentWidth: i,
            hoverGradientStart: a,
            hoverGradientMiddle: r,
            hoverGradientEnd: o,
        } = e,
        u = n.useMemo(
            () =>
                null != a && null != r && null != o
                    ? {
                          Color_GradientCenter: a,
                          Color_InnerRing: r ?? j.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? r,
                          Color_OuterRing: o,
                          NitroVFX: !1,
                      }
                    : s
                      ? {
                            Color_GradientCenter: j.A.colors.NITRO_TAB_GRADIENT_CENTER,
                            Color_InnerRing: j.A.colors.NITRO_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: j.A.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !0,
                        }
                      : {
                            Color_GradientCenter: j.A.colors.STANDARD_TAB_GRADIENT_CENTER,
                            Color_InnerRing: j.A.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: j.A.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !1,
                        },
            [s, a, r, o],
        );
    return (0, l.jsx)(R.U, { eventTargetRef: t, className: e_.a1, dataBinding: { ...u, DimmerWidth: (i ?? 0) + 32 } });
}
let eD = (e) => {
    let {
            route: t,
            selected: s,
            icon: i,
            iconClassName: r,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: m,
            onClick: N,
            className: A,
            role: g,
            "aria-posinset": h,
            "aria-setsize": f,
            listItemRef: x,
            showHoverGradient: _ = !1,
            nitroHoverGradient: C = !1,
            hoverGradientStart: I,
            hoverGradientMiddle: v,
            hoverGradientEnd: y,
            ...j
        } = e,
        { width: R, ref: T } = (0, w.Ay)(),
        S = n.useRef(null),
        M = x ?? S;
    return (0, l.jsx)(ee, {
        className: a()(e_.Ix, { [e_.Ij]: p.Fr }, A),
        onClick: N,
        role: g,
        focusProps: { within: !0, ...eI },
        "aria-posinset": h,
        "aria-setsize": f,
        ref: M,
        children: (0, l.jsxs)(D, {
            as: "div",
            selected: s,
            className: a()(o, e_.bG, e_.$J, { [e_.Q2]: s }),
            children: [
                _ &&
                    (0, l.jsx)(eT, {
                        eventTargetRef: M,
                        isNitro: C,
                        contentWidth: R,
                        hoverGradientStart: I,
                        hoverGradientMiddle: v,
                        hoverGradientEnd: y,
                    }),
                (0, l.jsxs)(u.N_, {
                    to: { pathname: t, state: m },
                    className: e_.nf,
                    ...j,
                    children: [
                        (0, l.jsx)(z.A, {
                            ref: _ ? T : void 0,
                            muted: !1,
                            avatar: (0, l.jsx)(i, {
                                size: "refresh_sm",
                                className: a()(e_.e_, r),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: e_.xx,
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
};
function eS(e) {
    let {
            channel: t,
            selected: i = !1,
            user: r,
            activities: p,
            applicationStream: x,
            voiceChannel: _,
            isTyping: C,
            status: I,
            isMobile: v,
            isVR: y,
            nameplate: j,
            ref: R,
            "aria-posinset": T,
            "aria-setsize": w,
        } = e,
        [O, $] = n.useState(!1),
        [Q, Z] = n.useState(!1),
        [q, eu] = n.useState(!1),
        ec = n.useRef(null),
        [eN, eg] = n.useState(!1),
        ep = (0, m.K)(
            n.useCallback((e) => {
                eg(e);
            }, []),
        ),
        eh = n.useRef(null),
        eT = R ?? eh,
        eD = (0, N.A)(eT, ep),
        { showMenuItemPopover: eS, markMenuItemPopoverAsDismissed: eM } = (0, ei.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === i,
            isTargetInViewport: eN,
            channelType: t.type,
        }),
        {
            avatarSrc: eE,
            avatarDecorationSrc: eb,
            eventHandlers: eG,
        } = (0, eo.A)({ userId: r?.id, size: S._3.SIZE_32, animateOnHover: !(i || O || Q || q) }),
        [ew, eP] = n.useState({ maskImage: "none" }),
        ek = n.useRef(null),
        eO = t.isMultiUserDM(),
        eU = t.isSystemDM(),
        eB = !eO && !eU && t.type === ef.rbe.DM,
        ez = eB && r?.primaryGuild != null,
        eL = (0, h.bG)([eA.Ay], () => eA.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eV, blocked: eF } = (0, h.cf)([em.A], () => ({
            ignored: em.A.isIgnored(t.getRecipientId()),
            blocked: em.A.isBlocked(t.getRecipientId()),
        })),
        eW = eB && eV,
        eH = eB && eF,
        eK = (eL || eW || eH) && !(i || O),
        eY = (0, h.bG)([ed.Ay], () => ed.Ay.getMentionCount(t.id) > 0),
        e$ = (0, K.Ay)(t),
        eQ = n.useRef(null),
        eJ = null != j && (i || O || q),
        eX = () => {
            $(!0);
        },
        eZ = () => {
            $(!1);
        },
        eq = () => {
            Z(!0);
        },
        e0 = () => {
            Z(!1);
        },
        e2 = function (e) {
            let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), b.A.closePrivateChannel(t.id, i, s);
        },
        e1 = () => {
            b.A.preload(ef.ME, t.id);
        },
        e9 = (e) => {
            e.stopPropagation();
        },
        e3 = (e) => {
            e.target === e.currentTarget && ec.current?.click();
        },
        e6 = (e) => {
            let n =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eu(!0),
                t.isMultiUserDM()
                    ? (0, G.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  s.e("26132"),
                                  s.e("46652"),
                                  s.e("93190"),
                                  s.e("91763"),
                                  s.e("38730"),
                                  s.e("34971"),
                                  s.e("42339"),
                                  s.e("12520"),
                                  s.e("46149"),
                                  s.e("53416"),
                                  s.e("60200"),
                              ]).then(s.bind(s, 4027));
                              return (s) => (0, l.jsx)(e, { ...s, channel: t, selected: i });
                          },
                          { impressionName: n, noBlurEvent: !0, onClose: () => eu(!1) },
                      )
                    : (0, G.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  s.e("39431"),
                                  s.e("31788"),
                                  s.e("63397"),
                                  s.e("6287"),
                                  s.e("26132"),
                                  s.e("46652"),
                                  s.e("93190"),
                                  s.e("34552"),
                                  s.e("55411"),
                                  s.e("93103"),
                                  s.e("91763"),
                                  s.e("8757"),
                                  s.e("89673"),
                                  s.e("91007"),
                                  s.e("68403"),
                                  s.e("85968"),
                                  s.e("60195"),
                                  s.e("88342"),
                                  s.e("29787"),
                                  s.e("97558"),
                                  s.e("94000"),
                                  s.e("42451"),
                                  s.e("91994"),
                                  s.e("38730"),
                                  s.e("98965"),
                                  s.e("76665"),
                                  s.e("35313"),
                                  s.e("76273"),
                                  s.e("36564"),
                                  s.e("86169"),
                                  s.e("34971"),
                                  s.e("792"),
                                  s.e("45996"),
                                  s.e("92822"),
                                  s.e("52229"),
                                  s.e("23427"),
                                  s.e("29422"),
                                  s.e("9291"),
                                  s.e("38056"),
                                  s.e("7059"),
                                  s.e("8829"),
                                  s.e("96553"),
                                  s.e("24240"),
                                  s.e("42339"),
                                  s.e("98199"),
                                  s.e("41175"),
                                  s.e("60816"),
                                  s.e("39778"),
                              ]).then(s.bind(s, 385913));
                              return (s) => (0, l.jsx)(e, { ...s, user: r, channel: t, channelSelected: i });
                          },
                          { impressionName: n, onClose: () => eu(!1) },
                      );
        },
        e5 = (e) => {
            e.preventDefault(), e.stopPropagation();
            let n = ex.intl.formatToPlainString(ex.t.hJ5Ap4, { name: e$ }),
                i = ex.intl.format(ex.t.SSIVOu, { name: e$ });
            t.isManaged() &&
                ((n = ex.intl.formatToPlainString(ex.t.hVGjEW, { name: e$ })),
                (i = ex.intl.format(ex.t.IK1Qvs, { name: e$ }))),
                (0, M.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([s.e("70588"), s.e("37803")]).then(s.bind(s, 148166));
                    return (t) => (0, l.jsx)(e, { title: n, body: i, onSubmit: e2, ...t });
                });
        },
        e8 = (0, l.jsx)(el.A, {
            userName: e$,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: O || i || q ? es.G.ANIMATED : es.G.PLAIN,
            loop: O,
            boldFontOpacity: 0.9,
        }),
        e4 = ez
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      e8,
                      (0, l.jsx)(er.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(e_.fc, { [e_.Y_]: eK }),
                      }),
                  ],
              })
            : e8,
        e7 = n.useRef(null),
        te = (0, et.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        { isIncomingCall: tt, isOngoingCall: ts } = (0, L.A)(t.id),
        tl = [
            (0, W.Ay)({ channel: t, unread: eY, isIncomingCall: tt, isOngoingCall: ts }),
            (0, W.r2)({ channel: t, muted: eL, userStatus: I }),
        ]
            .filter(Boolean)
            .join(", "),
        tn = (0, h.bG)([ed.Ay], () => ed.Ay.lastMessageId(t.id)),
        { waveShouldShow: ti, wavePressed: ta } = (0, Y.A)(t, tn),
        { showClose: tr } = F.useConfig({ location: "PrivateChannel" }),
        to = (0, g.A)(() => {
            let e = ek.current?.getBoundingClientRect() ?? null,
                t = e7.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void eP({ maskImage: "none" });
            let s = t.width - 16;
            eP({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${s}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        n.useLayoutEffect(to, [O, to]),
        (0, A.g)(eT, to),
        (0, l.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: s, ...n } = e;
                return (0, l.jsxs)(ee, {
                    className: a()(e_.Ix, e_.dm),
                    role: s,
                    focusProps: { ...eI, focusTarget: ec, ringTarget: eT },
                    ref: eD,
                    onMouseEnter: eX,
                    onMouseLeave: eZ,
                    onMouseDown: e1,
                    onFocus: eq,
                    onBlur: e0,
                    onContextMenu: e6,
                    "aria-setsize": w,
                    "aria-posinset": T,
                    children: [
                        eY ? (0, l.jsx)("div", { className: a()(e_.dM, { [e_.SU]: eK }) }) : null,
                        (0, l.jsxs)(D, {
                            className: a()(e_.bG, { [e_.Q2]: i || q }),
                            as: "div",
                            onClick: e3,
                            muted: eK,
                            selected: i,
                            children: [
                                (0, l.jsx)(X.A, {
                                    nameplate: eJ ? j : void 0,
                                    selected: i,
                                    hovered: O,
                                    content: e7,
                                    placement: J.u.CHANNEL,
                                }),
                                (0, l.jsx)("div", { className: e_.lU, ref: ek, children: e4 }),
                                (0, l.jsx)(u.N_, {
                                    style: ew,
                                    innerRef: ec,
                                    to: ef.BVt.CHANNEL(ef.ME, t.id),
                                    className: e_.nf,
                                    "aria-label": tl,
                                    ...n,
                                    children: (0, l.jsx)(z.A, {
                                        ref: e7,
                                        avatar: (() => {
                                            let e = S._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, l.jsx)(ea.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: C,
                                                        status: I,
                                                    });
                                                else
                                                    return (0, l.jsx)(eC, {
                                                        ...eG,
                                                        src: (0, H.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: C ? ef.clD.ONLINE : I,
                                                        isTyping: C,
                                                    });
                                            o()(
                                                null != r,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let s = null;
                                            return (
                                                r.isSystemUser() || (s = (0, P.A)(p) ? ef.clD.STREAMING : I),
                                                (0, l.jsx)(eC, {
                                                    ...eG,
                                                    size: S._3.SIZE_32,
                                                    src: eE,
                                                    avatarDecoration: eb,
                                                    status: s,
                                                    isMobile: v,
                                                    isVR: y,
                                                    isTyping: C,
                                                    "aria-label": r.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: eY && !eK,
                                        muted: eK,
                                        subText: t.isSystemDM()
                                            ? (0, l.jsx)("div", {
                                                  className: e_.W$,
                                                  children: (0, V.A)(t.id)
                                                      ? ex.intl.string(ex.t.FL5T01)
                                                      : ex.intl.string(ex.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, l.jsx)("div", {
                                                    className: e_.W$,
                                                    children: ex.intl.format(ex.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, k.A)({
                                                      activities: p,
                                                      status: I,
                                                      applicationStream: x,
                                                      voiceChannel: _,
                                                  })
                                                ? (0, l.jsx)(U.A, {
                                                      user: r,
                                                      activities: p,
                                                      voiceChannel: _,
                                                      applicationStream: x,
                                                      animateEmoji: O || Q || q,
                                                      textClassName: e_.XD,
                                                      iconClassName: eK ? e_.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, l.jsx)(f.A, { className: a()(e_.uN, { [e_.e8]: te }), children: e4 }),
                                        decorators: t.isSystemDM()
                                            ? (0, l.jsx)(B.A, {
                                                  className: e_.G$,
                                                  type: B.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: te,
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: a()(e_._q, { [e_.EY]: eJ }),
                                    children: [
                                        eW ? (0, l.jsx)(ej, {}) : null,
                                        eH ? (0, l.jsx)(eR, {}) : null,
                                        ti && null != e$
                                            ? (0, l.jsx)(ey, { channelName: e$, onClick: ta, showNameplate: eJ })
                                            : null,
                                        tr || !ti
                                            ? (0, l.jsx)(ev, {
                                                  icon: E.P,
                                                  "aria-label": eO
                                                      ? ex.intl.string(ex.t["26C4oi"])
                                                      : ex.intl.string(ex.t.jsvgc3),
                                                  onClick: eO ? e5 : e2,
                                                  onMouseDown: e9,
                                                  nameplate: j,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: eQ,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                        eS && (0, l.jsx)(en.A, { targetElementRef: eT, markMenuItemPopoverAsDismissed: eM }),
                    ],
                });
            },
        })
    );
}
let eM =
    21552 == s.j
        ? (e) => {
              let { channel: t, selected: s, ...n } = e,
                  i = (0, h.bG)([eg.default], () => eg.default.getUser(t.getRecipientId())),
                  a = i?.id,
                  r = (0, h.cf)([ec.A, eu.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let s = ec.A.getState().statuses;
                          t.recipients.some((e) => s[e] === ef.clD.ONLINE) && (e = ef.clD.ONLINE);
                      } else null != a && (e = ec.A.getStatus(a));
                      return {
                          status: e,
                          activities: null != a ? ec.A.getActivities(a) : null,
                          applicationStream: null != a ? eu.A.getAnyStreamForUser(a) : null,
                          isMobile: null != a && ec.A.isMobileOnline(a),
                          isVR: null != a && ec.A.isVROnline(a),
                      };
                  }, [t, a]),
                  { voiceChannel: o } = (0, O.A)({ userId: a }),
                  u = (0, $.r)({ user: i }),
                  c = (0, h.bG)(
                      [eg.default, eN.A],
                      () =>
                          t.isMultiUserDM()
                              ? ep.default
                                    .keys(eN.A.getTypingUsers(t.id))
                                    .some((e) => e !== eg.default.getCurrentUser()?.id)
                              : null != i && eN.A.isTyping(t.id, t.getRecipientId()),
                      [t, i],
                  );
              return t.isMultiUserDM()
                  ? (0, l.jsx)(eS, {
                        channel: t,
                        selected: s,
                        isTyping: c,
                        status: r.status === ef.clD.ONLINE ? ef.clD.ONLINE : void 0,
                        ...n,
                    })
                  : (0, l.jsx)(eS, {
                        channel: t,
                        selected: s,
                        user: i,
                        voiceChannel: o,
                        isTyping: c,
                        nameplate: u,
                        ...n,
                        ...r,
                    });
          }
        : null;

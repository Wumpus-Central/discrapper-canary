n.d(t, { z9: () => ey, w_: () => eC, Ay: () => eS, th: () => eM });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    u = n(936504),
    c = n(110259),
    d = n(837381),
    m = n(172218),
    A = n(612324),
    N = n(535185),
    g = n(148839),
    p = n(607399),
    f = n(17928),
    h = n(3026),
    v = n(990078),
    _ = n(97808),
    I = n(939249),
    R = n(821609),
    C = n(952270),
    E = n(428678),
    T = n(661531),
    b = n(549254),
    x = n(574553);
function y(e) {
    let { as: t, muted: n = !1, selected: i = !1, className: s, ...a } = e,
        o = t ?? I.D;
    return (0, l.jsx)(o, { ...a, className: r()(x.bG, s, { [x.SU]: n, [x.wH]: i }) });
}
var M = n(778712),
    S = n(192308),
    D = n(789645),
    j = n(308528),
    G = n(442433),
    w = n(765671),
    O = n(960076),
    U = n(397244),
    k = n(714114),
    L = n(729551),
    P = n(709066),
    B = n(262295),
    V = n(620982),
    F = n(343328);
let z = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-channel-wave-button",
    defaultConfig: { enabled: !1, showClose: !0 },
    variations: { 1: { enabled: !0, showClose: !1 }, 2: { enabled: !0, showClose: !0 } },
});
var W = n(963027),
    H = n(571694),
    K = n(47167),
    X = n(432222),
    Y = n(449582),
    J = n(351952),
    $ = n(88686),
    q = n(174755),
    Q = n(187322),
    Z = n(586893);
let ee = i.forwardRef(function (e, t) {
    let { className: n, focusProps: i, ...s } = e;
    return (0, l.jsx)(Q.vN, { ...i, children: (0, l.jsx)("li", { className: r()(n, Z.k), ...s, ref: t }) });
});
var et = n(824994),
    en = n(922301),
    el = n(368919),
    ei = n(414808),
    es = n(302005),
    er = n(954376),
    ea = n(534400),
    eo = n(854627),
    eu = n(616356),
    ec = n(290863),
    ed = n(222823),
    em = n(994500),
    eA = n(741961),
    eN = n(543465),
    eg = n(287809),
    ep = n(935208),
    ef = n(19575),
    eh = n(652215),
    ev = n(985018),
    e_ = n(330076);
let eI = ef.Ay.getEnableHardwareAcceleration() ? _.Js : _.eu,
    eR = { offset: { top: 2, bottom: 2, right: 4 } },
    eC = (e) => {
        let { nameplate: t, icon: n, forceShow: i = !1, reducedClickTarget: s = !1, visibleElementRef: a, ...o } = e,
            u = (0, J.K)(t);
        return (0, l.jsx)(I.D, {
            className: r()(e_.b, { [e_.DQ]: null != t, [e_.by]: i, [e_.wY]: s }),
            style: u,
            ...o,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, l.jsx)("div", {
                ref: a,
                className: r()({ [e_.PJ]: null != t }),
                children: (0, l.jsx)(n, {
                    size: "sm",
                    color: "currentColor",
                    className: r()(e_.ut, { [e_.Uq]: null != t }),
                }),
            }),
        });
    },
    eE = (e) => {
        let { onClick: t, channelName: n, showNameplate: i } = e,
            { enabled: s } = z.useConfig({ location: "Wave CTA" });
        return s
            ? (0, l.jsx)("div", {
                  className: e_.KQ,
                  children: (0, l.jsx)(v.m, {
                      text: ev.intl.formatToPlainString(ev.t.m0zYbV, { username: n }),
                      children: (0, l.jsx)(R.$, {
                          size: "sm",
                          variant: i ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: ev.intl.string(ev.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    eT = () => (0, l.jsx)(C.G, { size: "xs", color: "currentColor", className: e_.wB }),
    eb = () => (0, l.jsx)(E.K, { size: "xs", color: "currentColor", className: e_.wB });
function ex(e) {
    let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: s,
            hoverGradientStart: r,
            hoverGradientMiddle: a,
            hoverGradientEnd: o,
        } = e,
        u = i.useMemo(
            () =>
                null != r && null != a && null != o
                    ? {
                          Color_GradientCenter: r,
                          Color_InnerRing: a ?? T.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? a,
                          Color_OuterRing: o,
                          NitroVFX: !1,
                      }
                    : n
                      ? {
                            Color_GradientCenter: T.A.colors.NITRO_TAB_GRADIENT_CENTER,
                            Color_InnerRing: T.A.colors.NITRO_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: T.A.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !0,
                        }
                      : {
                            Color_GradientCenter: T.A.colors.STANDARD_TAB_GRADIENT_CENTER,
                            Color_InnerRing: T.A.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: T.A.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !1,
                        },
            [n, r, a, o],
        );
    return (0, l.jsx)(b.U, { eventTargetRef: t, className: e_.a1, dataBinding: { ...u, DimmerWidth: (s ?? 0) + 32 } });
}
let ey = (e) => {
    let {
            route: t,
            selected: n,
            icon: s,
            iconClassName: a,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: m,
            onClick: A,
            className: N,
            role: g,
            "aria-posinset": f,
            "aria-setsize": h,
            listItemRef: v,
            showHoverGradient: _ = !1,
            nitroHoverGradient: I = !1,
            hoverGradientStart: R,
            hoverGradientMiddle: C,
            hoverGradientEnd: E,
            ...T
        } = e,
        { width: b, ref: x } = (0, w.Ay)(),
        M = i.useRef(null),
        S = v ?? M;
    return (0, l.jsx)(ee, {
        className: r()(e_.Ix, { [e_.Ij]: p.Fr }, N),
        onClick: A,
        role: g,
        focusProps: { within: !0, ...eR },
        "aria-posinset": f,
        "aria-setsize": h,
        ref: S,
        children: (0, l.jsxs)(y, {
            as: "div",
            selected: n,
            className: r()(o, e_.bG, e_.$J, { [e_.Q2]: n }),
            children: [
                _ &&
                    (0, l.jsx)(ex, {
                        eventTargetRef: S,
                        isNitro: I,
                        contentWidth: b,
                        hoverGradientStart: R,
                        hoverGradientMiddle: C,
                        hoverGradientEnd: E,
                    }),
                (0, l.jsxs)(u.N_, {
                    to: { pathname: t, state: m },
                    className: e_.nf,
                    ...T,
                    children: [
                        (0, l.jsx)(B.A, {
                            ref: _ ? x : void 0,
                            muted: !1,
                            avatar: (0, l.jsx)(s, {
                                size: "refresh_sm",
                                className: r()(e_.e_, a),
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
function eM(e) {
    let {
            channel: t,
            selected: s = !1,
            user: a,
            activities: p,
            applicationStream: v,
            voiceChannel: _,
            isTyping: I,
            status: R,
            isMobile: C,
            isVR: E,
            nameplate: T,
            ref: b,
            "aria-posinset": x,
            "aria-setsize": w,
        } = e,
        [k, Y] = i.useState(!1),
        [J, Q] = i.useState(!1),
        [Z, eu] = i.useState(!1),
        ec = i.useRef(null),
        [eA, eg] = i.useState(!1),
        ep = (0, m.K)(
            i.useCallback((e) => {
                eg(e);
            }, []),
        ),
        ef = i.useRef(null),
        ex = b ?? ef,
        ey = (0, A.A)(ex, ep),
        { showMenuItemPopover: eM, markMenuItemPopoverAsDismissed: eS } = (0, es.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === s,
            isTargetInViewport: eA,
            channelType: t.type,
        }),
        {
            avatarSrc: eD,
            avatarDecorationSrc: ej,
            eventHandlers: eG,
        } = (0, eo.A)({ userId: a?.id, size: M._3.SIZE_32, animateOnHover: !(s || k || J || Z) }),
        [ew, eO] = i.useState({ maskImage: "none" }),
        eU = i.useRef(null),
        ek = t.isMultiUserDM(),
        eL = t.isSystemDM(),
        eP = !ek && !eL && t.type === eh.rbe.DM,
        eB = eP && a?.primaryGuild != null,
        eV = (0, f.bG)([eN.Ay], () => eN.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eF, blocked: ez } = (0, f.cf)([em.A], () => ({
            ignored: em.A.isIgnored(t.getRecipientId()),
            blocked: em.A.isBlocked(t.getRecipientId()),
        })),
        eW = eP && eF,
        eH = eP && ez,
        eK = (eV || eW || eH) && !(s || k),
        eX = (0, f.bG)([ed.Ay], () => ed.Ay.getMentionCount(t.id) > 0),
        eY = (0, K.Ay)(t),
        eJ = i.useRef(null),
        e$ = null != T && (s || k || Z),
        eq = () => {
            Y(!0);
        },
        eQ = () => {
            Y(!1);
        },
        eZ = () => {
            Q(!0);
        },
        e0 = () => {
            Q(!1);
        },
        e2 = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), j.A.closePrivateChannel(t.id, s, n);
        },
        e1 = () => {
            j.A.preload(eh.ME, t.id);
        },
        e9 = (e) => {
            e.stopPropagation();
        },
        e3 = (e) => {
            e.target === e.currentTarget && ec.current?.click();
        },
        e8 = (e) => {
            let i =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eu(!0),
                t.isMultiUserDM()
                    ? (0, G.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([n.e("97262"), n.e("60200"), n.e("46149")]).then(
                                  n.bind(n, 4027),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, channel: t, selected: s });
                          },
                          { impressionName: i, noBlurEvent: !0, onClose: () => eu(!1) },
                      )
                    : (0, G.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("97262"),
                                  n.e("93103"),
                                  n.e("88342"),
                                  n.e("35313"),
                                  n.e("84442"),
                                  n.e("39778"),
                                  n.e("19763"),
                              ]).then(n.bind(n, 385913));
                              return (n) => (0, l.jsx)(e, { ...n, user: a, channel: t, channelSelected: s });
                          },
                          { impressionName: i, onClose: () => eu(!1) },
                      );
        },
        e5 = (e) => {
            e.preventDefault(), e.stopPropagation();
            let i = ev.intl.formatToPlainString(ev.t.hJ5Ap4, { name: eY }),
                s = ev.intl.format(ev.t.SSIVOu, { name: eY });
            t.isManaged() &&
                ((i = ev.intl.formatToPlainString(ev.t.hVGjEW, { name: eY })),
                (s = ev.intl.format(ev.t.IK1Qvs, { name: eY }))),
                (0, S.openModalLazy)(async () => {
                    let { default: e } = await n.e("37803").then(n.bind(n, 148166));
                    return (t) => (0, l.jsx)(e, { title: i, body: s, onSubmit: e2, ...t });
                });
        },
        e4 = (0, l.jsx)(el.A, {
            userName: eY,
            displayNameStyles: a?.displayNameStyles,
            effectDisplayType: k || s || Z ? en.G.ANIMATED : en.G.PLAIN,
            loop: k,
            boldFontOpacity: 0.9,
        }),
        e6 = eB
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      e4,
                      (0, l.jsx)(ea.Ay, {
                          primaryGuild: a?.primaryGuild,
                          userId: a?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: r()(e_.fc, { [e_.Y_]: eK }),
                      }),
                  ],
              })
            : e4,
        e7 = i.useRef(null),
        te = (0, et.W)({ location: "PrivateChannel" }) && a?.displayNameStyles != null,
        { isIncomingCall: tt, isOngoingCall: tn } = (0, V.A)(t.id),
        tl = [
            (0, W.Ay)({ channel: t, unread: eX, isIncomingCall: tt, isOngoingCall: tn }),
            (0, W.r2)({ channel: t, muted: eV, userStatus: R }),
        ]
            .filter(Boolean)
            .join(", "),
        ti = (0, f.bG)([ed.Ay], () => ed.Ay.lastMessageId(t.id)),
        { waveShouldShow: ts, wavePressed: tr } = (0, X.A)(t, ti),
        { showClose: ta } = z.useConfig({ location: "PrivateChannel" }),
        to = (0, g.A)(() => {
            let e = eU.current?.getBoundingClientRect() ?? null,
                t = e7.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void eO({ maskImage: "none" });
            let n = t.width - 16;
            eO({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        i.useLayoutEffect(to, [k, to]),
        (0, N.g)(ex, to),
        (0, l.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...i } = e;
                return (0, l.jsxs)(ee, {
                    className: r()(e_.Ix, e_.dm),
                    role: n,
                    focusProps: { ...eR, focusTarget: ec, ringTarget: ex },
                    ref: ey,
                    onMouseEnter: eq,
                    onMouseLeave: eQ,
                    onMouseDown: e1,
                    onFocus: eZ,
                    onBlur: e0,
                    onContextMenu: e8,
                    "aria-setsize": w,
                    "aria-posinset": x,
                    children: [
                        eX ? (0, l.jsx)("div", { className: r()(e_.dM, { [e_.SU]: eK }) }) : null,
                        (0, l.jsxs)(y, {
                            className: r()(e_.bG, { [e_.Q2]: s || Z }),
                            as: "div",
                            onClick: e3,
                            muted: eK,
                            selected: s,
                            children: [
                                (0, l.jsx)(q.A, {
                                    nameplate: e$ ? T : void 0,
                                    selected: s,
                                    hovered: k,
                                    content: e7,
                                    placement: $.u.CHANNEL,
                                }),
                                (0, l.jsx)("div", { className: e_.lU, ref: eU, children: e6 }),
                                (0, l.jsx)(u.N_, {
                                    style: ew,
                                    innerRef: ec,
                                    to: eh.BVt.CHANNEL(eh.ME, t.id),
                                    className: e_.nf,
                                    "aria-label": tl,
                                    ...i,
                                    children: (0, l.jsx)(B.A, {
                                        ref: e7,
                                        avatar: (() => {
                                            let e = M._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, l.jsx)(er.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: I,
                                                        status: R,
                                                    });
                                                else
                                                    return (0, l.jsx)(eI, {
                                                        ...eG,
                                                        src: (0, H.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: I ? eh.clD.ONLINE : R,
                                                        isTyping: I,
                                                    });
                                            o()(
                                                null != a,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                a.isSystemUser() || (n = (0, O.A)(p) ? eh.clD.STREAMING : R),
                                                (0, l.jsx)(eI, {
                                                    ...eG,
                                                    size: M._3.SIZE_32,
                                                    src: eD,
                                                    avatarDecoration: ej,
                                                    status: n,
                                                    isMobile: C,
                                                    isVR: E,
                                                    isTyping: I,
                                                    "aria-label": a.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: eX && !eK,
                                        muted: eK,
                                        subText: t.isSystemDM()
                                            ? (0, l.jsx)("div", {
                                                  className: e_.W$,
                                                  children: (0, F.A)(t.id)
                                                      ? ev.intl.string(ev.t.FL5T01)
                                                      : ev.intl.string(ev.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, l.jsx)("div", {
                                                    className: e_.W$,
                                                    children: ev.intl.format(ev.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, U.A)({
                                                      activities: p,
                                                      status: R,
                                                      applicationStream: v,
                                                      voiceChannel: _,
                                                  })
                                                ? (0, l.jsx)(L.A, {
                                                      user: a,
                                                      activities: p,
                                                      voiceChannel: _,
                                                      applicationStream: v,
                                                      animateEmoji: k || J || Z,
                                                      textClassName: e_.XD,
                                                      iconClassName: eK ? e_.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, l.jsx)(h.A, { className: r()(e_.uN, { [e_.e8]: te }), children: e6 }),
                                        decorators: t.isSystemDM()
                                            ? (0, l.jsx)(P.A, {
                                                  className: e_.G$,
                                                  type: P.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: te,
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: r()(e_._q, { [e_.EY]: e$ }),
                                    children: [
                                        eW ? (0, l.jsx)(eT, {}) : null,
                                        eH ? (0, l.jsx)(eb, {}) : null,
                                        ts && null != eY
                                            ? (0, l.jsx)(eE, { channelName: eY, onClick: tr, showNameplate: e$ })
                                            : null,
                                        ta || !ts
                                            ? (0, l.jsx)(eC, {
                                                  icon: D.P,
                                                  "aria-label": ek
                                                      ? ev.intl.string(ev.t["26C4oi"])
                                                      : ev.intl.string(ev.t.jsvgc3),
                                                  onClick: ek ? e5 : e2,
                                                  onMouseDown: e9,
                                                  nameplate: T,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: eJ,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                        eM && (0, l.jsx)(ei.A, { targetElementRef: ex, markMenuItemPopoverAsDismissed: eS }),
                    ],
                });
            },
        })
    );
}
let eS =
    21552 == n.j
        ? (e) => {
              let { channel: t, selected: n, ...i } = e,
                  s = (0, f.bG)([eg.default], () => eg.default.getUser(t.getRecipientId())),
                  r = s?.id,
                  a = (0, f.cf)([ec.A, eu.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = ec.A.getState().statuses;
                          t.recipients.some((e) => n[e] === eh.clD.ONLINE) && (e = eh.clD.ONLINE);
                      } else null != r && (e = ec.A.getStatus(r));
                      return {
                          status: e,
                          activities: null != r ? ec.A.getActivities(r) : null,
                          applicationStream: null != r ? eu.A.getAnyStreamForUser(r) : null,
                          isMobile: null != r && ec.A.isMobileOnline(r),
                          isVR: null != r && ec.A.isVROnline(r),
                      };
                  }, [t, r]),
                  { voiceChannel: o } = (0, k.A)({ userId: r }),
                  u = (0, Y.r)({ user: s }),
                  c = (0, f.bG)(
                      [eg.default, eA.A],
                      () =>
                          t.isMultiUserDM()
                              ? ep.default
                                    .keys(eA.A.getTypingUsers(t.id))
                                    .some((e) => e !== eg.default.getCurrentUser()?.id)
                              : null != s && eA.A.isTyping(t.id, t.getRecipientId()),
                      [t, s],
                  );
              return t.isMultiUserDM()
                  ? (0, l.jsx)(eM, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: a.status === eh.clD.ONLINE ? eh.clD.ONLINE : void 0,
                        ...i,
                    })
                  : (0, l.jsx)(eM, {
                        channel: t,
                        selected: n,
                        user: s,
                        voiceChannel: o,
                        isTyping: c,
                        nameplate: u,
                        ...i,
                        ...a,
                    });
          }
        : null;

n.d(t, { z9: () => ej, w_: () => eI, Ay: () => eS, th: () => eD });
var l = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(284009),
    o = n.n(r),
    u = n(936504),
    c = n(110259),
    d = n(837381),
    m = n(172218),
    A = n(612324),
    N = n(535185),
    p = n(148839),
    h = n(607399),
    f = n(17928),
    g = n(3026),
    C = n(990078),
    v = n(97808),
    _ = n(939249),
    x = n(821609),
    I = n(952270),
    y = n(428678),
    R = n(661531),
    T = n(549254),
    b = n(574553);
function j(e) {
    let { as: t, muted: n = !1, selected: s = !1, className: i, ...r } = e,
        o = t ?? _.D;
    return (0, l.jsx)(o, { ...r, className: a()(b.bG, i, { [b.SU]: n, [b.wH]: s }) });
}
var D = n(778712),
    S = n(192308),
    E = n(789645),
    M = n(308528),
    G = n(442433),
    w = n(765671),
    k = n(960076),
    P = n(397244),
    U = n(714114),
    O = n(729551),
    B = n(709066),
    L = n(262295),
    z = n(620982),
    V = n(343328);
let W = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-channel-wave-button",
    defaultConfig: { enabled: !1, showClose: !0 },
    variations: { 1: { enabled: !0, showClose: !1 }, 2: { enabled: !0, showClose: !0 } },
});
var F = n(963027),
    H = n(571694),
    K = n(47167),
    X = n(432222),
    Y = n(449582),
    $ = n(351952),
    Q = n(88686),
    J = n(174755),
    Z = n(187322),
    q = n(586893);
let ee = s.forwardRef(function (e, t) {
    let { className: n, focusProps: s, ...i } = e;
    return (0, l.jsx)(Z.vN, { ...s, children: (0, l.jsx)("li", { className: a()(n, q.k), ...i, ref: t }) });
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
    em = n(994500),
    eA = n(741961),
    eN = n(543465),
    ep = n(287809),
    eh = n(935208),
    ef = n(19575),
    eg = n(652215),
    eC = n(985018),
    ev = n(330076);
let e_ = ef.Ay.getEnableHardwareAcceleration() ? v.Js : v.eu,
    ex = { offset: { top: 2, bottom: 2, right: 4 } },
    eI = (e) => {
        let { nameplate: t, icon: n, forceShow: s = !1, reducedClickTarget: i = !1, visibleElementRef: r, ...o } = e,
            u = (0, $.K)(t);
        return (0, l.jsx)(_.D, {
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
    ey = (e) => {
        let { onClick: t, channelName: n, showNameplate: s } = e,
            { enabled: i } = W.useConfig({ location: "Wave CTA" });
        return i
            ? (0, l.jsx)("div", {
                  className: ev.KQ,
                  children: (0, l.jsx)(C.m, {
                      text: eC.intl.formatToPlainString(eC.t.m0zYbV, { username: n }),
                      children: (0, l.jsx)(x.$, {
                          size: "sm",
                          variant: s ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: eC.intl.string(eC.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    eR = () => (0, l.jsx)(I.G, { size: "xs", color: "currentColor", className: ev.wB }),
    eT = () => (0, l.jsx)(y.K, { size: "xs", color: "currentColor", className: ev.wB });
function eb(e) {
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
                          Color_InnerRing: r ?? R.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? r,
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
            [n, a, r, o],
        );
    return (0, l.jsx)(T.U, { eventTargetRef: t, className: ev.a1, dataBinding: { ...u, DimmerWidth: (i ?? 0) + 32 } });
}
let ej = (e) => {
    let {
            route: t,
            selected: n,
            icon: i,
            iconClassName: r,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: m,
            onClick: A,
            className: N,
            role: p,
            "aria-posinset": f,
            "aria-setsize": g,
            listItemRef: C,
            showHoverGradient: v = !1,
            nitroHoverGradient: _ = !1,
            hoverGradientStart: x,
            hoverGradientMiddle: I,
            hoverGradientEnd: y,
            ...R
        } = e,
        { width: T, ref: b } = (0, w.Ay)(),
        D = s.useRef(null),
        S = C ?? D;
    return (0, l.jsx)(ee, {
        className: a()(ev.Ix, { [ev.Ij]: h.Fr }, N),
        onClick: A,
        role: p,
        focusProps: { within: !0, ...ex },
        "aria-posinset": f,
        "aria-setsize": g,
        ref: S,
        children: (0, l.jsxs)(j, {
            as: "div",
            selected: n,
            className: a()(o, ev.bG, ev.$J, { [ev.Q2]: n }),
            children: [
                v &&
                    (0, l.jsx)(eb, {
                        eventTargetRef: S,
                        isNitro: _,
                        contentWidth: T,
                        hoverGradientStart: x,
                        hoverGradientMiddle: I,
                        hoverGradientEnd: y,
                    }),
                (0, l.jsxs)(u.N_, {
                    to: { pathname: t, state: m },
                    className: ev.nf,
                    ...R,
                    children: [
                        (0, l.jsx)(L.A, {
                            ref: v ? b : void 0,
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
function eD(e) {
    let {
            channel: t,
            selected: i = !1,
            user: r,
            activities: h,
            applicationStream: C,
            voiceChannel: v,
            isTyping: _,
            status: x,
            isMobile: I,
            isVR: y,
            nameplate: R,
            ref: T,
            "aria-posinset": b,
            "aria-setsize": w,
        } = e,
        [U, Y] = s.useState(!1),
        [$, Z] = s.useState(!1),
        [q, eu] = s.useState(!1),
        ec = s.useRef(null),
        [eA, ep] = s.useState(!1),
        eh = (0, m.K)(
            s.useCallback((e) => {
                ep(e);
            }, []),
        ),
        ef = s.useRef(null),
        eb = T ?? ef,
        ej = (0, A.A)(eb, eh),
        { showMenuItemPopover: eD, markMenuItemPopoverAsDismissed: eS } = (0, ei.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === i,
            isTargetInViewport: eA,
            channelType: t.type,
        }),
        {
            avatarSrc: eE,
            avatarDecorationSrc: eM,
            eventHandlers: eG,
        } = (0, eo.A)({ userId: r?.id, size: D._3.SIZE_32, animateOnHover: !(i || U || $ || q) }),
        [ew, ek] = s.useState({ maskImage: "none" }),
        eP = s.useRef(null),
        eU = t.isMultiUserDM(),
        eO = t.isSystemDM(),
        eB = !eU && !eO && t.type === eg.rbe.DM,
        eL = eB && r?.primaryGuild != null,
        ez = (0, f.bG)([eN.Ay], () => eN.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eV, blocked: eW } = (0, f.cf)([em.A], () => ({
            ignored: em.A.isIgnored(t.getRecipientId()),
            blocked: em.A.isBlocked(t.getRecipientId()),
        })),
        eF = eB && eV,
        eH = eB && eW,
        eK = (ez || eF || eH) && !(i || U),
        eX = (0, f.bG)([ed.Ay], () => ed.Ay.getMentionCount(t.id) > 0),
        eY = (0, K.Ay)(t),
        e$ = s.useRef(null),
        eQ = null != R && (i || U || q),
        eJ = () => {
            Y(!0);
        },
        eZ = () => {
            Y(!1);
        },
        eq = () => {
            Z(!0);
        },
        e0 = () => {
            Z(!1);
        },
        e2 = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), M.A.closePrivateChannel(t.id, i, n);
        },
        e1 = () => {
            M.A.preload(eg.ME, t.id);
        },
        e9 = (e) => {
            e.stopPropagation();
        },
        e4 = (e) => {
            e.target === e.currentTarget && ec.current?.click();
        },
        e5 = (e) => {
            let s =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eu(!0),
                t.isMultiUserDM()
                    ? (0, G.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([n.e("97262"), n.e("60200")]).then(
                                  n.bind(n, 4027),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, channel: t, selected: i });
                          },
                          { impressionName: s, noBlurEvent: !0, onClose: () => eu(!1) },
                      )
                    : (0, G.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("97262"),
                                  n.e("84442"),
                                  n.e("39778"),
                                  n.e("44031"),
                              ]).then(n.bind(n, 385913));
                              return (n) => (0, l.jsx)(e, { ...n, user: r, channel: t, channelSelected: i });
                          },
                          { impressionName: s, onClose: () => eu(!1) },
                      );
        },
        e3 = (e) => {
            e.preventDefault(), e.stopPropagation();
            let s = eC.intl.formatToPlainString(eC.t.hJ5Ap4, { name: eY }),
                i = eC.intl.format(eC.t.SSIVOu, { name: eY });
            t.isManaged() &&
                ((s = eC.intl.formatToPlainString(eC.t.hVGjEW, { name: eY })),
                (i = eC.intl.format(eC.t.IK1Qvs, { name: eY }))),
                (0, S.openModalLazy)(async () => {
                    let { default: e } = await n.e("37803").then(n.bind(n, 148166));
                    return (t) => (0, l.jsx)(e, { title: s, body: i, onSubmit: e2, ...t });
                });
        },
        e6 = (0, l.jsx)(el.A, {
            userName: eY,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: U || i || q ? en.G.ANIMATED : en.G.PLAIN,
            loop: U,
            boldFontOpacity: 0.9,
        }),
        e8 = eL
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      e6,
                      (0, l.jsx)(er.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(ev.fc, { [ev.Y_]: eK }),
                      }),
                  ],
              })
            : e6,
        e7 = s.useRef(null),
        te = (0, et.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        { isIncomingCall: tt, isOngoingCall: tn } = (0, z.A)(t.id),
        tl = [
            (0, F.Ay)({ channel: t, unread: eX, isIncomingCall: tt, isOngoingCall: tn }),
            (0, F.r2)({ channel: t, muted: ez, userStatus: x }),
        ]
            .filter(Boolean)
            .join(", "),
        ts = (0, f.bG)([ed.Ay], () => ed.Ay.lastMessageId(t.id)),
        { waveShouldShow: ti, wavePressed: ta } = (0, X.A)(t, ts),
        { showClose: tr } = W.useConfig({ location: "PrivateChannel" }),
        to = (0, p.A)(() => {
            let e = eP.current?.getBoundingClientRect() ?? null,
                t = e7.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void ek({ maskImage: "none" });
            let n = t.width - 16;
            ek({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        s.useLayoutEffect(to, [U, to]),
        (0, N.g)(eb, to),
        (0, l.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...s } = e;
                return (0, l.jsxs)(ee, {
                    className: a()(ev.Ix, ev.dm),
                    role: n,
                    focusProps: { ...ex, focusTarget: ec, ringTarget: eb },
                    ref: ej,
                    onMouseEnter: eJ,
                    onMouseLeave: eZ,
                    onMouseDown: e1,
                    onFocus: eq,
                    onBlur: e0,
                    onContextMenu: e5,
                    "aria-setsize": w,
                    "aria-posinset": b,
                    children: [
                        eX ? (0, l.jsx)("div", { className: a()(ev.dM, { [ev.SU]: eK }) }) : null,
                        (0, l.jsxs)(j, {
                            className: a()(ev.bG, { [ev.Q2]: i || q }),
                            as: "div",
                            onClick: e4,
                            muted: eK,
                            selected: i,
                            children: [
                                (0, l.jsx)(J.A, {
                                    nameplate: eQ ? R : void 0,
                                    selected: i,
                                    hovered: U,
                                    content: e7,
                                    placement: Q.u.CHANNEL,
                                }),
                                (0, l.jsx)("div", { className: ev.lU, ref: eP, children: e8 }),
                                (0, l.jsx)(u.N_, {
                                    style: ew,
                                    innerRef: ec,
                                    to: eg.BVt.CHANNEL(eg.ME, t.id),
                                    className: ev.nf,
                                    "aria-label": tl,
                                    ...s,
                                    children: (0, l.jsx)(L.A, {
                                        ref: e7,
                                        avatar: (() => {
                                            let e = D._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, l.jsx)(ea.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: _,
                                                        status: x,
                                                    });
                                                else
                                                    return (0, l.jsx)(e_, {
                                                        ...eG,
                                                        src: (0, H.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: _ ? eg.clD.ONLINE : x,
                                                        isTyping: _,
                                                    });
                                            o()(
                                                null != r,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                r.isSystemUser() || (n = (0, k.A)(h) ? eg.clD.STREAMING : x),
                                                (0, l.jsx)(e_, {
                                                    ...eG,
                                                    size: D._3.SIZE_32,
                                                    src: eE,
                                                    avatarDecoration: eM,
                                                    status: n,
                                                    isMobile: I,
                                                    isVR: y,
                                                    isTyping: _,
                                                    "aria-label": r.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: eX && !eK,
                                        muted: eK,
                                        subText: t.isSystemDM()
                                            ? (0, l.jsx)("div", {
                                                  className: ev.W$,
                                                  children: (0, V.A)(t.id)
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
                                                      activities: h,
                                                      status: x,
                                                      applicationStream: C,
                                                      voiceChannel: v,
                                                  })
                                                ? (0, l.jsx)(O.A, {
                                                      user: r,
                                                      activities: h,
                                                      voiceChannel: v,
                                                      applicationStream: C,
                                                      animateEmoji: U || $ || q,
                                                      textClassName: ev.XD,
                                                      iconClassName: eK ? ev.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, l.jsx)(g.A, { className: a()(ev.uN, { [ev.e8]: te }), children: e8 }),
                                        decorators: t.isSystemDM()
                                            ? (0, l.jsx)(B.A, {
                                                  className: ev.G$,
                                                  type: B.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: te,
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: a()(ev._q, { [ev.EY]: eQ }),
                                    children: [
                                        eF ? (0, l.jsx)(eR, {}) : null,
                                        eH ? (0, l.jsx)(eT, {}) : null,
                                        ti && null != eY
                                            ? (0, l.jsx)(ey, { channelName: eY, onClick: ta, showNameplate: eQ })
                                            : null,
                                        tr || !ti
                                            ? (0, l.jsx)(eI, {
                                                  icon: E.P,
                                                  "aria-label": eU
                                                      ? eC.intl.string(eC.t["26C4oi"])
                                                      : eC.intl.string(eC.t.jsvgc3),
                                                  onClick: eU ? e3 : e2,
                                                  onMouseDown: e9,
                                                  nameplate: R,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: e$,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                        eD && (0, l.jsx)(es.A, { targetElementRef: eb, markMenuItemPopoverAsDismissed: eS }),
                    ],
                });
            },
        })
    );
}
let eS =
    21552 == n.j
        ? (e) => {
              let { channel: t, selected: n, ...s } = e,
                  i = (0, f.bG)([ep.default], () => ep.default.getUser(t.getRecipientId())),
                  a = i?.id,
                  r = (0, f.cf)([ec.A, eu.A], () => {
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
                  { voiceChannel: o } = (0, U.A)({ userId: a }),
                  u = (0, Y.r)({ user: i }),
                  c = (0, f.bG)(
                      [ep.default, eA.A],
                      () =>
                          t.isMultiUserDM()
                              ? eh.default
                                    .keys(eA.A.getTypingUsers(t.id))
                                    .some((e) => e !== ep.default.getCurrentUser()?.id)
                              : null != i && eA.A.isTyping(t.id, t.getRecipientId()),
                      [t, i],
                  );
              return t.isMultiUserDM()
                  ? (0, l.jsx)(eD, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: r.status === eg.clD.ONLINE ? eg.clD.ONLINE : void 0,
                        ...s,
                    })
                  : (0, l.jsx)(eD, {
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

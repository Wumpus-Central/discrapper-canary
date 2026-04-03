n.d(t, { Ay: () => eN, th: () => e_, w_: () => eu, z9: () => eE });
var l = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(284009),
    o = n.n(r),
    u = n(936504),
    c = n(110259),
    d = n(837381),
    A = n(172218),
    m = n(612324),
    E = n(535185),
    _ = n(148839),
    N = n(607399),
    f = n(311907),
    T = n(3026),
    p = n(435371),
    h = n(397927),
    S = n(308528),
    C = n(442433),
    x = n(765671),
    g = n(960076),
    v = n(397244),
    I = n(714114),
    R = n(729551),
    M = n(709066),
    j = n(262295),
    b = n(343328),
    y = n(209581),
    L = n(963027),
    U = n(571694),
    D = n(47167),
    O = n(432222),
    G = n(449582),
    w = n(351952),
    Q = n(88686),
    P = n(214881),
    F = n(880714),
    V = n(824994),
    k = n(922301),
    B = n(750112),
    q = n(414808),
    H = n(302005),
    z = n(954376),
    W = n(534400),
    K = n(854627),
    Y = n(616356),
    $ = n(290863),
    J = n(222823),
    X = n(994500),
    Z = n(741961),
    ee = n(543465),
    et = n(287809),
    en = n(661191),
    el = n(837921),
    es = n(652215),
    ei = n(985018),
    ea = n(107852);
let er = el.Ay.getEnableHardwareAcceleration() ? h.JsQ : h.euF,
    eo = { offset: { top: 2, bottom: 2, right: 4 } },
    eu = (e) => {
        let { nameplate: t, icon: n, forceShow: s = !1, reducedClickTarget: i = !1, visibleElementRef: r, ...o } = e,
            u = (0, w.K)(t);
        return (0, l.jsx)(h.DUT, {
            className: a()(ea.b, { [ea.DQ]: null != t, [ea.by]: s, [ea.wY]: i }),
            style: u,
            ...o,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, l.jsx)("div", {
                ref: r,
                className: a()({ [ea.PJ]: null != t }),
                children: (0, l.jsx)(n, {
                    size: "sm",
                    color: "currentColor",
                    className: a()(ea.ut, { [ea.Uq]: null != t }),
                }),
            }),
        });
    },
    ec = (e) => {
        let { onClick: t, channelName: n, showNameplate: s } = e,
            { enabled: i } = y.A.useConfig({ location: "Wave CTA" });
        return i
            ? (0, l.jsx)("div", {
                  className: ea.KQ,
                  children: (0, l.jsx)(p.m_, {
                      text: ei.intl.formatToPlainString(ei.t.m0zYbV, { username: n }),
                      children: (0, l.jsx)(h.Button, {
                          size: "sm",
                          variant: s ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: ei.intl.string(ei.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    ed = () => (0, l.jsx)(h.G3N, { size: "xs", color: "currentColor", className: ea.wB }),
    eA = () => (0, l.jsx)(h.KTN, { size: "xs", color: "currentColor", className: ea.wB });
function em(e) {
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
                          Color_InnerRing: r ?? h.LU0.colors.NITRO_TAB_GRADIENT_INNER_RING ?? r,
                          Color_OuterRing: o,
                          NitroVFX: !1,
                      }
                    : n
                      ? {
                            Color_GradientCenter: h.LU0.colors.NITRO_TAB_GRADIENT_CENTER,
                            Color_InnerRing: h.LU0.colors.NITRO_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: h.LU0.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !0,
                        }
                      : {
                            Color_GradientCenter: h.LU0.colors.STANDARD_TAB_GRADIENT_CENTER,
                            Color_InnerRing: h.LU0.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: h.LU0.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !1,
                        },
            [n, a, r, o],
        );
    return (0, l.jsx)(h.Ucn, {
        eventTargetRef: t,
        className: ea.a1,
        dataBinding: { ...u, DimmerWidth: (i ?? 0) + 32 },
    });
}
let eE = (e) => {
    let {
            route: t,
            selected: n,
            icon: i,
            iconClassName: r,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: A,
            onClick: m,
            className: E,
            role: _,
            "aria-posinset": f,
            "aria-setsize": T,
            listItemRef: p,
            showHoverGradient: S = !1,
            nitroHoverGradient: C = !1,
            hoverGradientStart: g,
            hoverGradientMiddle: v,
            hoverGradientEnd: I,
            ...R
        } = e,
        { width: M, ref: b } = (0, x.Ay)(),
        y = s.useRef(null),
        L = p ?? y;
    return (0, l.jsx)(F.A, {
        className: a()(ea.Ix, { [ea.Ij]: N.Fr }, E),
        onClick: m,
        role: _,
        focusProps: { within: !0, ...eo },
        "aria-posinset": f,
        "aria-setsize": T,
        ref: L,
        children: (0, l.jsxs)(h.HG8, {
            as: "div",
            selected: n,
            className: a()(o, ea.bG, ea.$J, { [ea.Q2]: n }),
            children: [
                S &&
                    (0, l.jsx)(em, {
                        eventTargetRef: L,
                        isNitro: C,
                        contentWidth: M,
                        hoverGradientStart: g,
                        hoverGradientMiddle: v,
                        hoverGradientEnd: I,
                    }),
                (0, l.jsxs)(u.N_, {
                    to: { pathname: t, state: A },
                    className: ea.nf,
                    ...R,
                    children: [
                        (0, l.jsx)(j.A, {
                            ref: S ? b : void 0,
                            muted: !1,
                            avatar: (0, l.jsx)(i, {
                                size: "refresh_sm",
                                className: a()(ea.e_, r),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: ea.xx,
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
};
function e_(e) {
    let {
            channel: t,
            selected: i = !1,
            user: r,
            activities: N,
            applicationStream: p,
            voiceChannel: x,
            isTyping: I,
            status: G,
            isMobile: w,
            isVR: Y,
            nameplate: $,
            ref: Z,
            "aria-posinset": et,
            "aria-setsize": en,
        } = e,
        [el, em] = s.useState(!1),
        [eE, e_] = s.useState(!1),
        [eN, ef] = s.useState(!1),
        eT = s.useRef(null),
        [ep, eh] = s.useState(!1),
        eS = (0, A.K)(
            s.useCallback((e) => {
                eh(e);
            }, []),
        ),
        eC = s.useRef(null),
        ex = Z ?? eC,
        eg = (0, m.A)(ex, eS),
        { showMenuItemPopover: ev, markMenuItemPopoverAsDismissed: eI } = (0, H.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === i,
            isTargetInViewport: ep,
            channelType: t.type,
        }),
        {
            avatarSrc: eR,
            avatarDecorationSrc: eM,
            eventHandlers: ej,
        } = (0, K.A)({ userId: r?.id, size: h._3J.SIZE_32, animateOnHover: !(i || el || eE || eN) }),
        [eb, ey] = s.useState({ maskImage: "none" }),
        eL = s.useRef(null),
        eU = t.isMultiUserDM(),
        eD = t.isSystemDM(),
        eO = !eU && !eD && t.type === es.rbe.DM,
        eG = eO && r?.primaryGuild != null,
        ew = (0, f.bG)([ee.Ay], () => ee.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eQ, blocked: eP } = (0, f.cf)([X.A], () => ({
            ignored: X.A.isIgnored(t.getRecipientId()),
            blocked: X.A.isBlocked(t.getRecipientId()),
        })),
        eF = eO && eQ,
        eV = eO && eP,
        ek = (ew || eF || eV) && !(i || el),
        eB = (0, f.bG)([J.Ay], () => J.Ay.getMentionCount(t.id) > 0),
        eq = (0, D.Ay)(t),
        eH = s.useRef(null),
        ez = null != $ && (i || el || eN),
        eW = () => {
            em(!0);
        },
        eK = () => {
            em(!1);
        },
        eY = () => {
            e_(!0);
        },
        e$ = () => {
            e_(!1);
        },
        eJ = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), S.A.closePrivateChannel(t.id, i, n);
        },
        eX = () => {
            S.A.preload(es.ME, t.id);
        },
        eZ = (e) => {
            e.stopPropagation();
        },
        e0 = (e) => {
            e.target === e.currentTarget && eT.current?.click();
        },
        e1 = (e) => {
            let s =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ef(!0),
                t.isMultiUserDM()
                    ? (0, C.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([n.e("97262"), n.e("60200"), n.e("81846")]).then(
                                  n.bind(n, 4027),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, channel: t, selected: i });
                          },
                          { impressionName: s, noBlurEvent: !0, onClose: () => ef(!1) },
                      )
                    : (0, C.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("97262"),
                                  n.e("42128"),
                                  n.e("39778"),
                                  n.e("35283"),
                              ]).then(n.bind(n, 385913));
                              return (n) => (0, l.jsx)(e, { ...n, user: r, channel: t, channelSelected: i });
                          },
                          { impressionName: s, onClose: () => ef(!1) },
                      );
        },
        e2 = (e) => {
            e.preventDefault(), e.stopPropagation();
            let s = ei.intl.formatToPlainString(ei.t.hJ5Ap4, { name: eq }),
                i = ei.intl.format(ei.t.SSIVOu, { name: eq });
            t.isManaged() &&
                ((s = ei.intl.formatToPlainString(ei.t.hVGjEW, { name: eq })),
                (i = ei.intl.format(ei.t.IK1Qvs, { name: eq }))),
                (0, h.mMO)(async () => {
                    let { default: e } = await n.e("37803").then(n.bind(n, 148166));
                    return (t) => (0, l.jsx)(e, { title: s, body: i, onSubmit: eJ, ...t });
                });
        },
        e3 = (0, l.jsx)(B.A, {
            userName: eq,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: el || i || eN ? k.G.ANIMATED : k.G.PLAIN,
            loop: el,
            boldFontOpacity: 0.9,
        }),
        e9 = eG
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      e3,
                      (0, l.jsx)(W.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(ea.fc, { [ea.Y_]: ek }),
                      }),
                  ],
              })
            : e3,
        e6 = s.useRef(null),
        e8 = (0, V.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        e7 = [(0, L.Ay)({ channel: t, unread: eB }), (0, L.r2)({ channel: t, muted: ew, userStatus: G })]
            .filter(Boolean)
            .join(", "),
        e4 = (0, f.bG)([J.Ay], () => J.Ay.lastMessageId(t.id)),
        { waveShouldShow: e5, wavePressed: te } = (0, O.A)(t, e4),
        { showClose: tt } = y.A.useConfig({ location: "PrivateChannel" }),
        tn = (0, _.A)(() => {
            let e = eL.current?.getBoundingClientRect() ?? null,
                t = e6.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void ey({ maskImage: "none" });
            let n = t.width - 16;
            ey({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        s.useLayoutEffect(tn, [el, tn]),
        (0, E.g)(ex, tn),
        (0, l.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...s } = e;
                return (0, l.jsxs)(F.A, {
                    className: a()(ea.Ix, ea.dm),
                    role: n,
                    focusProps: { ...eo, focusTarget: eT, ringTarget: ex },
                    ref: eg,
                    onMouseEnter: eW,
                    onMouseLeave: eK,
                    onMouseDown: eX,
                    onFocus: eY,
                    onBlur: e$,
                    onContextMenu: e1,
                    "aria-setsize": en,
                    "aria-posinset": et,
                    children: [
                        eB ? (0, l.jsx)("div", { className: a()(ea.dM, { [ea.SU]: ek }) }) : null,
                        (0, l.jsxs)(h.HG8, {
                            className: a()(ea.bG, { [ea.Q2]: i || eN }),
                            as: "div",
                            onClick: e0,
                            muted: ek,
                            selected: i,
                            children: [
                                (0, l.jsx)(P.A, {
                                    nameplate: ez ? $ : void 0,
                                    selected: i,
                                    hovered: el,
                                    content: e6,
                                    placement: Q.u.CHANNEL,
                                }),
                                (0, l.jsx)("div", { className: ea.lU, ref: eL, children: e9 }),
                                (0, l.jsx)(u.N_, {
                                    style: eb,
                                    innerRef: eT,
                                    to: es.BVt.CHANNEL(es.ME, t.id),
                                    className: ea.nf,
                                    "aria-label": e7,
                                    ...s,
                                    children: (0, l.jsx)(j.A, {
                                        ref: e6,
                                        avatar: (() => {
                                            let e = h._3J.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, l.jsx)(z.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: I,
                                                        status: G,
                                                    });
                                                else
                                                    return (0, l.jsx)(er, {
                                                        ...ej,
                                                        src: (0, U.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: I ? es.clD.ONLINE : G,
                                                        isTyping: I,
                                                    });
                                            o()(
                                                null != r,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                r.isSystemUser() || (n = (0, g.A)(N) ? es.clD.STREAMING : G),
                                                (0, l.jsx)(er, {
                                                    ...ej,
                                                    size: h._3J.SIZE_32,
                                                    src: eR,
                                                    avatarDecoration: eM,
                                                    status: n,
                                                    isMobile: w,
                                                    isVR: Y,
                                                    isTyping: I,
                                                    "aria-label": r.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: eB && !ek,
                                        muted: ek,
                                        subText: t.isSystemDM()
                                            ? (0, l.jsx)("div", {
                                                  className: ea.W$,
                                                  children: (0, b.A)(t.id)
                                                      ? ei.intl.string(ei.t.FL5T01)
                                                      : ei.intl.string(ei.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, l.jsx)("div", {
                                                    className: ea.W$,
                                                    children: ei.intl.format(ei.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, v.A)({
                                                      activities: N,
                                                      status: G,
                                                      applicationStream: p,
                                                      voiceChannel: x,
                                                  })
                                                ? (0, l.jsx)(R.A, {
                                                      user: r,
                                                      activities: N,
                                                      voiceChannel: x,
                                                      applicationStream: p,
                                                      animateEmoji: el || eE || eN,
                                                      textClassName: ea.XD,
                                                      iconClassName: ek ? ea.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, l.jsx)(T.A, { className: a()(ea.uN, { [ea.e8]: e8 }), children: e9 }),
                                        decorators: t.isSystemDM()
                                            ? (0, l.jsx)(M.A, {
                                                  className: ea.G$,
                                                  type: M.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: e8,
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: a()(ea._q, { [ea.EY]: ez }),
                                    children: [
                                        eF ? (0, l.jsx)(ed, {}) : null,
                                        eV ? (0, l.jsx)(eA, {}) : null,
                                        e5 && null != eq
                                            ? (0, l.jsx)(ec, { channelName: eq, onClick: te, showNameplate: ez })
                                            : null,
                                        tt || !e5
                                            ? (0, l.jsx)(eu, {
                                                  icon: h.PGe,
                                                  "aria-label": eU
                                                      ? ei.intl.string(ei.t["26C4oi"])
                                                      : ei.intl.string(ei.t.jsvgc3),
                                                  onClick: eU ? e2 : eJ,
                                                  onMouseDown: eZ,
                                                  nameplate: $,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: eH,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                        ev && (0, l.jsx)(q.A, { targetElementRef: ex, markMenuItemPopoverAsDismissed: eI }),
                    ],
                });
            },
        })
    );
}
let eN =
    21552 == n.j
        ? (e) => {
              let { channel: t, selected: n, ...s } = e,
                  i = (0, f.bG)([et.default], () => et.default.getUser(t.getRecipientId())),
                  a = i?.id,
                  r = (0, f.cf)([$.A, Y.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = $.A.getState().statuses;
                          t.recipients.some((e) => n[e] === es.clD.ONLINE) && (e = es.clD.ONLINE);
                      } else null != a && (e = $.A.getStatus(a));
                      return {
                          status: e,
                          activities: null != a ? $.A.getActivities(a) : null,
                          applicationStream: null != a ? Y.A.getAnyStreamForUser(a) : null,
                          isMobile: null != a && $.A.isMobileOnline(a),
                          isVR: null != a && $.A.isVROnline(a),
                      };
                  }, [t, a]),
                  { voiceChannel: o } = (0, I.A)({ userId: a }),
                  u = (0, G.r)({ user: i }),
                  c = (0, f.bG)(
                      [et.default, Z.A],
                      () =>
                          t.isMultiUserDM()
                              ? en.default
                                    .keys(Z.A.getTypingUsers(t.id))
                                    .some((e) => e !== et.default.getCurrentUser()?.id)
                              : null != i && Z.A.isTyping(t.id, t.getRecipientId()),
                      [t, i],
                  );
              return t.isMultiUserDM()
                  ? (0, l.jsx)(e_, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: r.status === es.clD.ONLINE ? es.clD.ONLINE : void 0,
                        ...s,
                    })
                  : (0, l.jsx)(e_, {
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

n.d(t, { Ay: () => eN, th: () => ef, w_: () => ec, z9: () => e_ });
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
    f = n(607399),
    N = n(311907),
    T = n(3026),
    p = n(435371),
    h = n(397927),
    S = n(308528),
    C = n(442433),
    g = n(765671),
    x = n(960076),
    v = n(397244),
    I = n(714114),
    R = n(729551),
    M = n(709066),
    j = n(262295),
    b = n(620982),
    y = n(343328),
    L = n(209581),
    U = n(963027),
    D = n(571694),
    O = n(47167),
    G = n(432222),
    w = n(449582),
    Q = n(351952),
    P = n(88686),
    F = n(214881),
    V = n(880714),
    k = n(824994),
    B = n(922301),
    q = n(750112),
    H = n(414808),
    z = n(302005),
    W = n(954376),
    K = n(534400),
    Y = n(854627),
    $ = n(616356),
    J = n(290863),
    X = n(222823),
    Z = n(994500),
    ee = n(741961),
    et = n(543465),
    en = n(287809),
    el = n(661191),
    es = n(837921),
    ei = n(652215),
    ea = n(985018),
    er = n(107852);
let eo = es.Ay.getEnableHardwareAcceleration() ? h.JsQ : h.euF,
    eu = { offset: { top: 2, bottom: 2, right: 4 } },
    ec = (e) => {
        let { nameplate: t, icon: n, forceShow: s = !1, reducedClickTarget: i = !1, visibleElementRef: r, ...o } = e,
            u = (0, Q.K)(t);
        return (0, l.jsx)(h.DUT, {
            className: a()(er.b, { [er.DQ]: null != t, [er.by]: s, [er.wY]: i }),
            style: u,
            ...o,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, l.jsx)("div", {
                ref: r,
                className: a()({ [er.PJ]: null != t }),
                children: (0, l.jsx)(n, {
                    size: "sm",
                    color: "currentColor",
                    className: a()(er.ut, { [er.Uq]: null != t }),
                }),
            }),
        });
    },
    ed = (e) => {
        let { onClick: t, channelName: n, showNameplate: s } = e,
            { enabled: i } = L.A.useConfig({ location: "Wave CTA" });
        return i
            ? (0, l.jsx)("div", {
                  className: er.KQ,
                  children: (0, l.jsx)(p.m_, {
                      text: ea.intl.formatToPlainString(ea.t.m0zYbV, { username: n }),
                      children: (0, l.jsx)(h.Button, {
                          size: "sm",
                          variant: s ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: ea.intl.string(ea.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    eA = () => (0, l.jsx)(h.G3N, { size: "xs", color: "currentColor", className: er.wB }),
    em = () => (0, l.jsx)(h.KTN, { size: "xs", color: "currentColor", className: er.wB });
function eE(e) {
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
        className: er.a1,
        dataBinding: { ...u, DimmerWidth: (i ?? 0) + 32 },
    });
}
let e_ = (e) => {
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
            "aria-posinset": N,
            "aria-setsize": T,
            listItemRef: p,
            showHoverGradient: S = !1,
            nitroHoverGradient: C = !1,
            hoverGradientStart: x,
            hoverGradientMiddle: v,
            hoverGradientEnd: I,
            ...R
        } = e,
        { width: M, ref: b } = (0, g.Ay)(),
        y = s.useRef(null),
        L = p ?? y;
    return (0, l.jsx)(V.A, {
        className: a()(er.Ix, { [er.Ij]: f.Fr }, E),
        onClick: m,
        role: _,
        focusProps: { within: !0, ...eu },
        "aria-posinset": N,
        "aria-setsize": T,
        ref: L,
        children: (0, l.jsxs)(h.HG8, {
            as: "div",
            selected: n,
            className: a()(o, er.bG, er.$J, { [er.Q2]: n }),
            children: [
                S &&
                    (0, l.jsx)(eE, {
                        eventTargetRef: L,
                        isNitro: C,
                        contentWidth: M,
                        hoverGradientStart: x,
                        hoverGradientMiddle: v,
                        hoverGradientEnd: I,
                    }),
                (0, l.jsxs)(u.N_, {
                    to: { pathname: t, state: A },
                    className: er.nf,
                    ...R,
                    children: [
                        (0, l.jsx)(j.A, {
                            ref: S ? b : void 0,
                            muted: !1,
                            avatar: (0, l.jsx)(i, {
                                size: "refresh_sm",
                                className: a()(er.e_, r),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: er.xx,
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
};
function ef(e) {
    let {
            channel: t,
            selected: i = !1,
            user: r,
            activities: f,
            applicationStream: p,
            voiceChannel: g,
            isTyping: I,
            status: w,
            isMobile: Q,
            isVR: $,
            nameplate: J,
            ref: ee,
            "aria-posinset": en,
            "aria-setsize": el,
        } = e,
        [es, eE] = s.useState(!1),
        [e_, ef] = s.useState(!1),
        [eN, eT] = s.useState(!1),
        ep = s.useRef(null),
        [eh, eS] = s.useState(!1),
        eC = (0, A.K)(
            s.useCallback((e) => {
                eS(e);
            }, []),
        ),
        eg = s.useRef(null),
        ex = ee ?? eg,
        ev = (0, m.A)(ex, eC),
        { showMenuItemPopover: eI, markMenuItemPopoverAsDismissed: eR } = (0, z.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === i,
            isTargetInViewport: eh,
            channelType: t.type,
        }),
        {
            avatarSrc: eM,
            avatarDecorationSrc: ej,
            eventHandlers: eb,
        } = (0, Y.A)({ userId: r?.id, size: h._3J.SIZE_32, animateOnHover: !(i || es || e_ || eN) }),
        [ey, eL] = s.useState({ maskImage: "none" }),
        eU = s.useRef(null),
        eD = t.isMultiUserDM(),
        eO = t.isSystemDM(),
        eG = !eD && !eO && t.type === ei.rbe.DM,
        ew = eG && r?.primaryGuild != null,
        eQ = (0, N.bG)([et.Ay], () => et.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eP, blocked: eF } = (0, N.cf)([Z.A], () => ({
            ignored: Z.A.isIgnored(t.getRecipientId()),
            blocked: Z.A.isBlocked(t.getRecipientId()),
        })),
        eV = eG && eP,
        ek = eG && eF,
        eB = (eQ || eV || ek) && !(i || es),
        eq = (0, N.bG)([X.Ay], () => X.Ay.getMentionCount(t.id) > 0),
        eH = (0, O.Ay)(t),
        ez = s.useRef(null),
        eW = null != J && (i || es || eN),
        eK = () => {
            eE(!0);
        },
        eY = () => {
            eE(!1);
        },
        e$ = () => {
            ef(!0);
        },
        eJ = () => {
            ef(!1);
        },
        eX = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), S.A.closePrivateChannel(t.id, i, n);
        },
        eZ = () => {
            S.A.preload(ei.ME, t.id);
        },
        e0 = (e) => {
            e.stopPropagation();
        },
        e1 = (e) => {
            e.target === e.currentTarget && ep.current?.click();
        },
        e2 = (e) => {
            let s =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eT(!0),
                t.isMultiUserDM()
                    ? (0, C.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([n.e("97262"), n.e("60200"), n.e("81846")]).then(
                                  n.bind(n, 4027),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, channel: t, selected: i });
                          },
                          { impressionName: s, noBlurEvent: !0, onClose: () => eT(!1) },
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
                          { impressionName: s, onClose: () => eT(!1) },
                      );
        },
        e3 = (e) => {
            e.preventDefault(), e.stopPropagation();
            let s = ea.intl.formatToPlainString(ea.t.hJ5Ap4, { name: eH }),
                i = ea.intl.format(ea.t.SSIVOu, { name: eH });
            t.isManaged() &&
                ((s = ea.intl.formatToPlainString(ea.t.hVGjEW, { name: eH })),
                (i = ea.intl.format(ea.t.IK1Qvs, { name: eH }))),
                (0, h.mMO)(async () => {
                    let { default: e } = await n.e("37803").then(n.bind(n, 148166));
                    return (t) => (0, l.jsx)(e, { title: s, body: i, onSubmit: eX, ...t });
                });
        },
        e9 = (0, l.jsx)(q.A, {
            userName: eH,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: es || i || eN ? B.G.ANIMATED : B.G.PLAIN,
            loop: es,
            boldFontOpacity: 0.9,
        }),
        e6 = ew
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      e9,
                      (0, l.jsx)(K.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(er.fc, { [er.Y_]: eB }),
                      }),
                  ],
              })
            : e9,
        e8 = s.useRef(null),
        e7 = (0, k.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        { isIncomingCall: e4, isOngoingCall: e5 } = (0, b.A)(t.id),
        te = [
            (0, U.Ay)({ channel: t, unread: eq, isIncomingCall: e4, isOngoingCall: e5 }),
            (0, U.r2)({ channel: t, muted: eQ, userStatus: w }),
        ]
            .filter(Boolean)
            .join(", "),
        tt = (0, N.bG)([X.Ay], () => X.Ay.lastMessageId(t.id)),
        { waveShouldShow: tn, wavePressed: tl } = (0, G.A)(t, tt),
        { showClose: ts } = L.A.useConfig({ location: "PrivateChannel" }),
        ti = (0, _.A)(() => {
            let e = eU.current?.getBoundingClientRect() ?? null,
                t = e8.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void eL({ maskImage: "none" });
            let n = t.width - 16;
            eL({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        s.useLayoutEffect(ti, [es, ti]),
        (0, E.g)(ex, ti),
        (0, l.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...s } = e;
                return (0, l.jsxs)(V.A, {
                    className: a()(er.Ix, er.dm),
                    role: n,
                    focusProps: { ...eu, focusTarget: ep, ringTarget: ex },
                    ref: ev,
                    onMouseEnter: eK,
                    onMouseLeave: eY,
                    onMouseDown: eZ,
                    onFocus: e$,
                    onBlur: eJ,
                    onContextMenu: e2,
                    "aria-setsize": el,
                    "aria-posinset": en,
                    children: [
                        eq ? (0, l.jsx)("div", { className: a()(er.dM, { [er.SU]: eB }) }) : null,
                        (0, l.jsxs)(h.HG8, {
                            className: a()(er.bG, { [er.Q2]: i || eN }),
                            as: "div",
                            onClick: e1,
                            muted: eB,
                            selected: i,
                            children: [
                                (0, l.jsx)(F.A, {
                                    nameplate: eW ? J : void 0,
                                    selected: i,
                                    hovered: es,
                                    content: e8,
                                    placement: P.u.CHANNEL,
                                }),
                                (0, l.jsx)("div", { className: er.lU, ref: eU, children: e6 }),
                                (0, l.jsx)(u.N_, {
                                    style: ey,
                                    innerRef: ep,
                                    to: ei.BVt.CHANNEL(ei.ME, t.id),
                                    className: er.nf,
                                    "aria-label": te,
                                    ...s,
                                    children: (0, l.jsx)(j.A, {
                                        ref: e8,
                                        avatar: (() => {
                                            let e = h._3J.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, l.jsx)(W.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: I,
                                                        status: w,
                                                    });
                                                else
                                                    return (0, l.jsx)(eo, {
                                                        ...eb,
                                                        src: (0, D.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: I ? ei.clD.ONLINE : w,
                                                        isTyping: I,
                                                    });
                                            o()(
                                                null != r,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                r.isSystemUser() || (n = (0, x.A)(f) ? ei.clD.STREAMING : w),
                                                (0, l.jsx)(eo, {
                                                    ...eb,
                                                    size: h._3J.SIZE_32,
                                                    src: eM,
                                                    avatarDecoration: ej,
                                                    status: n,
                                                    isMobile: Q,
                                                    isVR: $,
                                                    isTyping: I,
                                                    "aria-label": r.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: eq && !eB,
                                        muted: eB,
                                        subText: t.isSystemDM()
                                            ? (0, l.jsx)("div", {
                                                  className: er.W$,
                                                  children: (0, y.A)(t.id)
                                                      ? ea.intl.string(ea.t.FL5T01)
                                                      : ea.intl.string(ea.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, l.jsx)("div", {
                                                    className: er.W$,
                                                    children: ea.intl.format(ea.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, v.A)({
                                                      activities: f,
                                                      status: w,
                                                      applicationStream: p,
                                                      voiceChannel: g,
                                                  })
                                                ? (0, l.jsx)(R.A, {
                                                      user: r,
                                                      activities: f,
                                                      voiceChannel: g,
                                                      applicationStream: p,
                                                      animateEmoji: es || e_ || eN,
                                                      textClassName: er.XD,
                                                      iconClassName: eB ? er.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, l.jsx)(T.A, { className: a()(er.uN, { [er.e8]: e7 }), children: e6 }),
                                        decorators: t.isSystemDM()
                                            ? (0, l.jsx)(M.A, {
                                                  className: er.G$,
                                                  type: M.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: e7,
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: a()(er._q, { [er.EY]: eW }),
                                    children: [
                                        eV ? (0, l.jsx)(eA, {}) : null,
                                        ek ? (0, l.jsx)(em, {}) : null,
                                        tn && null != eH
                                            ? (0, l.jsx)(ed, { channelName: eH, onClick: tl, showNameplate: eW })
                                            : null,
                                        ts || !tn
                                            ? (0, l.jsx)(ec, {
                                                  icon: h.PGe,
                                                  "aria-label": eD
                                                      ? ea.intl.string(ea.t["26C4oi"])
                                                      : ea.intl.string(ea.t.jsvgc3),
                                                  onClick: eD ? e3 : eX,
                                                  onMouseDown: e0,
                                                  nameplate: J,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: ez,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                        eI && (0, l.jsx)(H.A, { targetElementRef: ex, markMenuItemPopoverAsDismissed: eR }),
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
                  i = (0, N.bG)([en.default], () => en.default.getUser(t.getRecipientId())),
                  a = i?.id,
                  r = (0, N.cf)([J.A, $.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = J.A.getState().statuses;
                          t.recipients.some((e) => n[e] === ei.clD.ONLINE) && (e = ei.clD.ONLINE);
                      } else null != a && (e = J.A.getStatus(a));
                      return {
                          status: e,
                          activities: null != a ? J.A.getActivities(a) : null,
                          applicationStream: null != a ? $.A.getAnyStreamForUser(a) : null,
                          isMobile: null != a && J.A.isMobileOnline(a),
                          isVR: null != a && J.A.isVROnline(a),
                      };
                  }, [t, a]),
                  { voiceChannel: o } = (0, I.A)({ userId: a }),
                  u = (0, w.r)({ user: i }),
                  c = (0, N.bG)(
                      [en.default, ee.A],
                      () =>
                          t.isMultiUserDM()
                              ? el.default
                                    .keys(ee.A.getTypingUsers(t.id))
                                    .some((e) => e !== en.default.getCurrentUser()?.id)
                              : null != i && ee.A.isTyping(t.id, t.getRecipientId()),
                      [t, i],
                  );
              return t.isMultiUserDM()
                  ? (0, l.jsx)(ef, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: r.status === ei.clD.ONLINE ? ei.clD.ONLINE : void 0,
                        ...s,
                    })
                  : (0, l.jsx)(ef, {
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

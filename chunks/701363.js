n.d(t, { Ay: () => eN, th: () => e_, w_: () => ec, z9: () => ef });
var l = n(627968),
    s = n(64700),
    i = n(503698),
    r = n.n(i),
    a = n(284009),
    o = n.n(a),
    u = n(936504),
    c = n(110259),
    d = n(837381),
    A = n(172218),
    m = n(612324),
    E = n(535185),
    f = n(148839),
    _ = n(607399),
    N = n(311907),
    T = n(3026),
    p = n(435371),
    g = n(397927),
    h = n(308528),
    C = n(442433),
    S = n(765671),
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
    z = n(414808),
    H = n(302005),
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
    er = n(985018),
    ea = n(107852);
let eo = es.Ay.getEnableHardwareAcceleration() ? g.JsQ : g.euF,
    eu = { offset: { top: 2, bottom: 2, right: 4 } },
    ec = (e) => {
        let { nameplate: t, icon: n, forceShow: s = !1, reducedClickTarget: i = !1, visibleElementRef: a, ...o } = e,
            u = (0, Q.K)(t);
        return (0, l.jsx)(g.DUT, {
            className: r()(ea.b, { [ea.DQ]: null != t, [ea.by]: s, [ea.wY]: i }),
            style: u,
            ...o,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, l.jsx)("div", {
                ref: a,
                className: r()({ [ea.PJ]: null != t }),
                children: (0, l.jsx)(n, {
                    size: "sm",
                    color: "currentColor",
                    className: r()(ea.ut, { [ea.Uq]: null != t }),
                }),
            }),
        });
    },
    ed = (e) => {
        let { onClick: t, channelName: n, showNameplate: s } = e,
            { enabled: i } = L.A.useConfig({ location: "Wave CTA" });
        return i
            ? (0, l.jsx)("div", {
                  className: ea.KQ,
                  children: (0, l.jsx)(p.m_, {
                      text: er.intl.formatToPlainString(er.t.m0zYbV, { username: n }),
                      children: (0, l.jsx)(g.Button, {
                          size: "sm",
                          variant: s ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: er.intl.string(er.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    eA = () => (0, l.jsx)(g.G3N, { size: "xs", color: "currentColor", className: ea.wB }),
    em = () => (0, l.jsx)(g.KTN, { size: "xs", color: "currentColor", className: ea.wB });
function eE(e) {
    let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: i,
            hoverGradientStart: r,
            hoverGradientMiddle: a,
            hoverGradientEnd: o,
        } = e,
        u = s.useMemo(
            () =>
                null != r && null != a && null != o
                    ? {
                          Color_GradientCenter: r,
                          Color_InnerRing: a ?? g.LU0.colors.NITRO_TAB_GRADIENT_INNER_RING ?? a,
                          Color_OuterRing: o,
                          NitroVFX: !1,
                      }
                    : n
                      ? {
                            Color_GradientCenter: g.LU0.colors.NITRO_TAB_GRADIENT_CENTER,
                            Color_InnerRing: g.LU0.colors.NITRO_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: g.LU0.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !0,
                        }
                      : {
                            Color_GradientCenter: g.LU0.colors.STANDARD_TAB_GRADIENT_CENTER,
                            Color_InnerRing: g.LU0.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                            Color_OuterRing: g.LU0.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                            NitroVFX: !1,
                        },
            [n, r, a, o],
        );
    return (0, l.jsx)(g.Ucn, {
        eventTargetRef: t,
        className: ea.a1,
        dataBinding: { ...u, DimmerWidth: (i ?? 0) + 32 },
    });
}
let ef = (e) => {
    let {
            route: t,
            selected: n,
            icon: i,
            iconClassName: a,
            interactiveClassName: o,
            text: c,
            children: d,
            locationState: A,
            onClick: m,
            className: E,
            role: f,
            "aria-posinset": N,
            "aria-setsize": T,
            listItemRef: p,
            showHoverGradient: h = !1,
            nitroHoverGradient: C = !1,
            hoverGradientStart: x,
            hoverGradientMiddle: v,
            hoverGradientEnd: I,
            ...R
        } = e,
        { width: M, ref: b } = (0, S.Ay)(),
        y = s.useRef(null),
        L = p ?? y;
    return (0, l.jsx)(V.A, {
        className: r()(ea.Ix, { [ea.Ij]: _.Fr }, E),
        onClick: m,
        role: f,
        focusProps: { within: !0, ...eu },
        "aria-posinset": N,
        "aria-setsize": T,
        ref: L,
        children: (0, l.jsxs)(g.HG8, {
            as: "div",
            selected: n,
            className: r()(o, ea.bG, ea.$J, { [ea.Q2]: n }),
            children: [
                h &&
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
                    className: ea.nf,
                    ...R,
                    children: [
                        (0, l.jsx)(j.A, {
                            ref: h ? b : void 0,
                            muted: !1,
                            avatar: (0, l.jsx)(i, {
                                size: "refresh_sm",
                                className: r()(ea.e_, a),
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
            user: a,
            activities: _,
            applicationStream: p,
            voiceChannel: S,
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
        [ef, e_] = s.useState(!1),
        [eN, eT] = s.useState(!1),
        ep = s.useRef(null),
        [eg, eh] = s.useState(!1),
        eC = (0, A.K)(
            s.useCallback((e) => {
                eh(e);
            }, []),
        ),
        eS = s.useRef(null),
        ex = ee ?? eS,
        ev = (0, m.A)(ex, eC),
        { showMenuItemPopover: eI, markMenuItemPopoverAsDismissed: eR } = (0, H.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === i,
            isTargetInViewport: eg,
            channelType: t.type,
        }),
        {
            avatarSrc: eM,
            avatarDecorationSrc: ej,
            eventHandlers: eb,
        } = (0, Y.A)({ userId: a?.id, size: g._3J.SIZE_32, animateOnHover: !(i || es || ef || eN) }),
        [ey, eL] = s.useState({ maskImage: "none" }),
        eU = s.useRef(null),
        eD = t.isMultiUserDM(),
        eO = t.isSystemDM(),
        eG = !eD && !eO && t.type === ei.rbe.DM,
        ew = eG && a?.primaryGuild != null,
        eQ = (0, N.bG)([et.Ay], () => et.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eP, blocked: eF } = (0, N.cf)([Z.A], () => ({
            ignored: Z.A.isIgnored(t.getRecipientId()),
            blocked: Z.A.isBlocked(t.getRecipientId()),
        })),
        eV = eG && eP,
        ek = eG && eF,
        eB = (eQ || eV || ek) && !(i || es),
        eq = (0, N.bG)([X.Ay], () => X.Ay.getMentionCount(t.id) > 0),
        ez = (0, O.Ay)(t),
        eH = s.useRef(null),
        eW = null != J && (i || es || eN),
        eK = () => {
            eE(!0);
        },
        eY = () => {
            eE(!1);
        },
        e$ = () => {
            e_(!0);
        },
        eJ = () => {
            e_(!1);
        },
        eX = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), h.A.closePrivateChannel(t.id, i, n);
        },
        eZ = () => {
            h.A.preload(ei.ME, t.id);
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
                              let { default: e } = await Promise.all([n.e("97262"), n.e("60200")]).then(
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
                                  n.e("54595"),
                              ]).then(n.bind(n, 385913));
                              return (n) => (0, l.jsx)(e, { ...n, user: a, channel: t, channelSelected: i });
                          },
                          { impressionName: s, onClose: () => eT(!1) },
                      );
        },
        e9 = (e) => {
            e.preventDefault(), e.stopPropagation();
            let s = er.intl.formatToPlainString(er.t.hJ5Ap4, { name: ez }),
                i = er.intl.format(er.t.SSIVOu, { name: ez });
            t.isManaged() &&
                ((s = er.intl.formatToPlainString(er.t.hVGjEW, { name: ez })),
                (i = er.intl.format(er.t.IK1Qvs, { name: ez }))),
                (0, g.mMO)(async () => {
                    let { default: e } = await n.e("37803").then(n.bind(n, 148166));
                    return (t) => (0, l.jsx)(e, { title: s, body: i, onSubmit: eX, ...t });
                });
        },
        e3 = (0, l.jsx)(q.A, {
            userName: ez,
            displayNameStyles: a?.displayNameStyles,
            effectDisplayType: es || i || eN ? B.G.ANIMATED : B.G.PLAIN,
            loop: es,
            boldFontOpacity: 0.9,
        }),
        e7 = ew
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      e3,
                      (0, l.jsx)(K.Ay, {
                          primaryGuild: a?.primaryGuild,
                          userId: a?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: r()(ea.fc, { [ea.Y_]: eB }),
                      }),
                  ],
              })
            : e3,
        e5 = s.useRef(null),
        e6 = (0, k.W)({ location: "PrivateChannel" }) && a?.displayNameStyles != null,
        { isIncomingCall: e8, isOngoingCall: e4 } = (0, b.A)(t.id),
        te = [
            (0, U.Ay)({ channel: t, unread: eq, isIncomingCall: e8, isOngoingCall: e4 }),
            (0, U.r2)({ channel: t, muted: eQ, userStatus: w }),
        ]
            .filter(Boolean)
            .join(", "),
        tt = (0, N.bG)([X.Ay], () => X.Ay.lastMessageId(t.id)),
        { waveShouldShow: tn, wavePressed: tl } = (0, G.A)(t, tt),
        { showClose: ts } = L.A.useConfig({ location: "PrivateChannel" }),
        ti = (0, f.A)(() => {
            let e = eU.current?.getBoundingClientRect() ?? null,
                t = e5.current?.getBoundingClientRect() ?? null;
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
                    className: r()(ea.Ix, ea.dm),
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
                        eq ? (0, l.jsx)("div", { className: r()(ea.dM, { [ea.SU]: eB }) }) : null,
                        (0, l.jsxs)(g.HG8, {
                            className: r()(ea.bG, { [ea.Q2]: i || eN }),
                            as: "div",
                            onClick: e1,
                            muted: eB,
                            selected: i,
                            children: [
                                (0, l.jsx)(F.A, {
                                    nameplate: eW ? J : void 0,
                                    selected: i,
                                    hovered: es,
                                    content: e5,
                                    placement: P.u.CHANNEL,
                                }),
                                (0, l.jsx)("div", { className: ea.lU, ref: eU, children: e7 }),
                                (0, l.jsx)(u.N_, {
                                    style: ey,
                                    innerRef: ep,
                                    to: ei.BVt.CHANNEL(ei.ME, t.id),
                                    className: ea.nf,
                                    "aria-label": te,
                                    ...s,
                                    children: (0, l.jsx)(j.A, {
                                        ref: e5,
                                        avatar: (() => {
                                            let e = g._3J.SIZE_32;
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
                                                null != a,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                a.isSystemUser() || (n = (0, x.A)(_) ? ei.clD.STREAMING : w),
                                                (0, l.jsx)(eo, {
                                                    ...eb,
                                                    size: g._3J.SIZE_32,
                                                    src: eM,
                                                    avatarDecoration: ej,
                                                    status: n,
                                                    isMobile: Q,
                                                    isVR: $,
                                                    isTyping: I,
                                                    "aria-label": a.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: eq && !eB,
                                        muted: eB,
                                        subText: t.isSystemDM()
                                            ? (0, l.jsx)("div", {
                                                  className: ea.W$,
                                                  children: (0, y.A)(t.id)
                                                      ? er.intl.string(er.t.FL5T01)
                                                      : er.intl.string(er.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, l.jsx)("div", {
                                                    className: ea.W$,
                                                    children: er.intl.format(er.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, v.A)({
                                                      activities: _,
                                                      status: w,
                                                      applicationStream: p,
                                                      voiceChannel: S,
                                                  })
                                                ? (0, l.jsx)(R.A, {
                                                      user: a,
                                                      activities: _,
                                                      voiceChannel: S,
                                                      applicationStream: p,
                                                      animateEmoji: es || ef || eN,
                                                      textClassName: ea.XD,
                                                      iconClassName: eB ? ea.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, l.jsx)(T.A, { className: r()(ea.uN, { [ea.e8]: e6 }), children: e7 }),
                                        decorators: t.isSystemDM()
                                            ? (0, l.jsx)(M.A, {
                                                  className: ea.G$,
                                                  type: M.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: e6,
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: r()(ea._q, { [ea.EY]: eW }),
                                    children: [
                                        eV ? (0, l.jsx)(eA, {}) : null,
                                        ek ? (0, l.jsx)(em, {}) : null,
                                        tn && null != ez
                                            ? (0, l.jsx)(ed, { channelName: ez, onClick: tl, showNameplate: eW })
                                            : null,
                                        ts || !tn
                                            ? (0, l.jsx)(ec, {
                                                  icon: g.PGe,
                                                  "aria-label": eD
                                                      ? er.intl.string(er.t["26C4oi"])
                                                      : er.intl.string(er.t.jsvgc3),
                                                  onClick: eD ? e9 : eX,
                                                  onMouseDown: e0,
                                                  nameplate: J,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: eH,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                        eI && (0, l.jsx)(z.A, { targetElementRef: ex, markMenuItemPopoverAsDismissed: eR }),
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
                  r = i?.id,
                  a = (0, N.cf)([J.A, $.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = J.A.getState().statuses;
                          t.recipients.some((e) => n[e] === ei.clD.ONLINE) && (e = ei.clD.ONLINE);
                      } else null != r && (e = J.A.getStatus(r));
                      return {
                          status: e,
                          activities: null != r ? J.A.getActivities(r) : null,
                          applicationStream: null != r ? $.A.getAnyStreamForUser(r) : null,
                          isMobile: null != r && J.A.isMobileOnline(r),
                          isVR: null != r && J.A.isVROnline(r),
                      };
                  }, [t, r]),
                  { voiceChannel: o } = (0, I.A)({ userId: r }),
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
                  ? (0, l.jsx)(e_, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: a.status === ei.clD.ONLINE ? ei.clD.ONLINE : void 0,
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
                        ...a,
                    });
          }
        : null;

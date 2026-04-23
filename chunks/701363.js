n.d(t, { Ay: () => eb, th: () => eT, w_: () => ev, z9: () => eR });
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
    f = n(311907),
    g = n(3026),
    C = n(990078),
    v = n(97808),
    _ = n(939249),
    x = n(821609),
    I = n(952270),
    y = n(428678),
    R = n(827734),
    T = n(181998),
    b = n(877526),
    j = n(778712),
    D = n(192308),
    S = n(789645),
    E = n(308528),
    M = n(442433),
    G = n(765671),
    w = n(960076),
    k = n(397244),
    P = n(714114),
    U = n(729551),
    O = n(709066),
    B = n(262295),
    L = n(620982),
    z = n(343328),
    V = n(209581),
    H = n(963027),
    W = n(571694),
    F = n(47167),
    K = n(432222),
    X = n(449582),
    Y = n(351952),
    $ = n(88686),
    Q = n(214881),
    J = n(880714),
    Z = n(824994),
    q = n(922301),
    ee = n(750112),
    et = n(414808),
    en = n(302005),
    el = n(954376),
    es = n(534400),
    ei = n(854627),
    ea = n(616356),
    er = n(290863),
    eo = n(222823),
    eu = n(994500),
    ec = n(741961),
    ed = n(543465),
    em = n(287809),
    eA = n(661191),
    eN = n(837921),
    ep = n(652215),
    eh = n(985018),
    ef = n(330076);
let eg = eN.Ay.getEnableHardwareAcceleration() ? v.Js : v.eu,
    eC = { offset: { top: 2, bottom: 2, right: 4 } },
    ev = (e) => {
        let { nameplate: t, icon: n, forceShow: s = !1, reducedClickTarget: i = !1, visibleElementRef: r, ...o } = e,
            u = (0, Y.K)(t);
        return (0, l.jsx)(_.D, {
            className: a()(ef.b, { [ef.DQ]: null != t, [ef.by]: s, [ef.wY]: i }),
            style: u,
            ...o,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, l.jsx)("div", {
                ref: r,
                className: a()({ [ef.PJ]: null != t }),
                children: (0, l.jsx)(n, {
                    size: "sm",
                    color: "currentColor",
                    className: a()(ef.ut, { [ef.Uq]: null != t }),
                }),
            }),
        });
    },
    e_ = (e) => {
        let { onClick: t, channelName: n, showNameplate: s } = e,
            { enabled: i } = V.A.useConfig({ location: "Wave CTA" });
        return i
            ? (0, l.jsx)("div", {
                  className: ef.KQ,
                  children: (0, l.jsx)(C.m, {
                      text: eh.intl.formatToPlainString(eh.t.m0zYbV, { username: n }),
                      children: (0, l.jsx)(x.$, {
                          size: "sm",
                          variant: s ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: eh.intl.string(eh.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    ex = () => (0, l.jsx)(I.G, { size: "xs", color: "currentColor", className: ef.wB }),
    eI = () => (0, l.jsx)(y.K, { size: "xs", color: "currentColor", className: ef.wB });
function ey(e) {
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
    return (0, l.jsx)(T.U, { eventTargetRef: t, className: ef.a1, dataBinding: { ...u, DimmerWidth: (i ?? 0) + 32 } });
}
let eR = (e) => {
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
        { width: T, ref: j } = (0, G.Ay)(),
        D = s.useRef(null),
        S = C ?? D;
    return (0, l.jsx)(J.A, {
        className: a()(ef.Ix, { [ef.Ij]: h.Fr }, N),
        onClick: A,
        role: p,
        focusProps: { within: !0, ...eC },
        "aria-posinset": f,
        "aria-setsize": g,
        ref: S,
        children: (0, l.jsxs)(b.H, {
            as: "div",
            selected: n,
            className: a()(o, ef.bG, ef.$J, { [ef.Q2]: n }),
            children: [
                v &&
                    (0, l.jsx)(ey, {
                        eventTargetRef: S,
                        isNitro: _,
                        contentWidth: T,
                        hoverGradientStart: x,
                        hoverGradientMiddle: I,
                        hoverGradientEnd: y,
                    }),
                (0, l.jsxs)(u.N_, {
                    to: { pathname: t, state: m },
                    className: ef.nf,
                    ...R,
                    children: [
                        (0, l.jsx)(B.A, {
                            ref: v ? j : void 0,
                            muted: !1,
                            avatar: (0, l.jsx)(i, {
                                size: "refresh_sm",
                                className: a()(ef.e_, r),
                                color: "currentColor",
                            }),
                            name: c,
                            innerClassName: ef.xx,
                        }),
                        d,
                    ],
                }),
            ],
        }),
    });
};
function eT(e) {
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
            "aria-posinset": G,
            "aria-setsize": P,
        } = e,
        [X, Y] = s.useState(!1),
        [ea, er] = s.useState(!1),
        [ec, em] = s.useState(!1),
        eA = s.useRef(null),
        [eN, ey] = s.useState(!1),
        eR = (0, m.K)(
            s.useCallback((e) => {
                ey(e);
            }, []),
        ),
        eT = s.useRef(null),
        eb = T ?? eT,
        ej = (0, A.A)(eb, eR),
        { showMenuItemPopover: eD, markMenuItemPopoverAsDismissed: eS } = (0, en.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === i,
            isTargetInViewport: eN,
            channelType: t.type,
        }),
        {
            avatarSrc: eE,
            avatarDecorationSrc: eM,
            eventHandlers: eG,
        } = (0, ei.A)({ userId: r?.id, size: j._3.SIZE_32, animateOnHover: !(i || X || ea || ec) }),
        [ew, ek] = s.useState({ maskImage: "none" }),
        eP = s.useRef(null),
        eU = t.isMultiUserDM(),
        eO = t.isSystemDM(),
        eB = !eU && !eO && t.type === ep.rbe.DM,
        eL = eB && r?.primaryGuild != null,
        ez = (0, f.bG)([ed.Ay], () => ed.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eV, blocked: eH } = (0, f.cf)([eu.A], () => ({
            ignored: eu.A.isIgnored(t.getRecipientId()),
            blocked: eu.A.isBlocked(t.getRecipientId()),
        })),
        eW = eB && eV,
        eF = eB && eH,
        eK = (ez || eW || eF) && !(i || X),
        eX = (0, f.bG)([eo.Ay], () => eo.Ay.getMentionCount(t.id) > 0),
        eY = (0, F.Ay)(t),
        e$ = s.useRef(null),
        eQ = null != R && (i || X || ec),
        eJ = () => {
            Y(!0);
        },
        eZ = () => {
            Y(!1);
        },
        eq = () => {
            er(!0);
        },
        e0 = () => {
            er(!1);
        },
        e1 = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), E.A.closePrivateChannel(t.id, i, n);
        },
        e2 = () => {
            E.A.preload(ep.ME, t.id);
        },
        e9 = (e) => {
            e.stopPropagation();
        },
        e6 = (e) => {
            e.target === e.currentTarget && eA.current?.click();
        },
        e8 = (e) => {
            let s =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            em(!0),
                t.isMultiUserDM()
                    ? (0, M.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([n.e("97262"), n.e("60200")]).then(
                                  n.bind(n, 4027),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, channel: t, selected: i });
                          },
                          { impressionName: s, noBlurEvent: !0, onClose: () => em(!1) },
                      )
                    : (0, M.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("97262"),
                                  n.e("42128"),
                                  n.e("39778"),
                                  n.e("97169"),
                              ]).then(n.bind(n, 385913));
                              return (n) => (0, l.jsx)(e, { ...n, user: r, channel: t, channelSelected: i });
                          },
                          { impressionName: s, onClose: () => em(!1) },
                      );
        },
        e7 = (e) => {
            e.preventDefault(), e.stopPropagation();
            let s = eh.intl.formatToPlainString(eh.t.hJ5Ap4, { name: eY }),
                i = eh.intl.format(eh.t.SSIVOu, { name: eY });
            t.isManaged() &&
                ((s = eh.intl.formatToPlainString(eh.t.hVGjEW, { name: eY })),
                (i = eh.intl.format(eh.t.IK1Qvs, { name: eY }))),
                (0, D.openModalLazy)(async () => {
                    let { default: e } = await n.e("37803").then(n.bind(n, 148166));
                    return (t) => (0, l.jsx)(e, { title: s, body: i, onSubmit: e1, ...t });
                });
        },
        e4 = (0, l.jsx)(ee.A, {
            userName: eY,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: X || i || ec ? q.G.ANIMATED : q.G.PLAIN,
            loop: X,
            boldFontOpacity: 0.9,
        }),
        e3 = eL
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      e4,
                      (0, l.jsx)(es.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(ef.fc, { [ef.Y_]: eK }),
                      }),
                  ],
              })
            : e4,
        e5 = s.useRef(null),
        te = (0, Z.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        { isIncomingCall: tt, isOngoingCall: tn } = (0, L.A)(t.id),
        tl = [
            (0, H.Ay)({ channel: t, unread: eX, isIncomingCall: tt, isOngoingCall: tn }),
            (0, H.r2)({ channel: t, muted: ez, userStatus: x }),
        ]
            .filter(Boolean)
            .join(", "),
        ts = (0, f.bG)([eo.Ay], () => eo.Ay.lastMessageId(t.id)),
        { waveShouldShow: ti, wavePressed: ta } = (0, K.A)(t, ts),
        { showClose: tr } = V.A.useConfig({ location: "PrivateChannel" }),
        to = (0, p.A)(() => {
            let e = eP.current?.getBoundingClientRect() ?? null,
                t = e5.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void ek({ maskImage: "none" });
            let n = t.width - 16;
            ek({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        s.useLayoutEffect(to, [X, to]),
        (0, N.g)(eb, to),
        (0, l.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...s } = e;
                return (0, l.jsxs)(J.A, {
                    className: a()(ef.Ix, ef.dm),
                    role: n,
                    focusProps: { ...eC, focusTarget: eA, ringTarget: eb },
                    ref: ej,
                    onMouseEnter: eJ,
                    onMouseLeave: eZ,
                    onMouseDown: e2,
                    onFocus: eq,
                    onBlur: e0,
                    onContextMenu: e8,
                    "aria-setsize": P,
                    "aria-posinset": G,
                    children: [
                        eX ? (0, l.jsx)("div", { className: a()(ef.dM, { [ef.SU]: eK }) }) : null,
                        (0, l.jsxs)(b.H, {
                            className: a()(ef.bG, { [ef.Q2]: i || ec }),
                            as: "div",
                            onClick: e6,
                            muted: eK,
                            selected: i,
                            children: [
                                (0, l.jsx)(Q.A, {
                                    nameplate: eQ ? R : void 0,
                                    selected: i,
                                    hovered: X,
                                    content: e5,
                                    placement: $.u.CHANNEL,
                                }),
                                (0, l.jsx)("div", { className: ef.lU, ref: eP, children: e3 }),
                                (0, l.jsx)(u.N_, {
                                    style: ew,
                                    innerRef: eA,
                                    to: ep.BVt.CHANNEL(ep.ME, t.id),
                                    className: ef.nf,
                                    "aria-label": tl,
                                    ...s,
                                    children: (0, l.jsx)(B.A, {
                                        ref: e5,
                                        avatar: (() => {
                                            let e = j._3.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, l.jsx)(el.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: _,
                                                        status: x,
                                                    });
                                                else
                                                    return (0, l.jsx)(eg, {
                                                        ...eG,
                                                        src: (0, W.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: _ ? ep.clD.ONLINE : x,
                                                        isTyping: _,
                                                    });
                                            o()(
                                                null != r,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                r.isSystemUser() || (n = (0, w.A)(h) ? ep.clD.STREAMING : x),
                                                (0, l.jsx)(eg, {
                                                    ...eG,
                                                    size: j._3.SIZE_32,
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
                                                  className: ef.W$,
                                                  children: (0, z.A)(t.id)
                                                      ? eh.intl.string(eh.t.FL5T01)
                                                      : eh.intl.string(eh.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, l.jsx)("div", {
                                                    className: ef.W$,
                                                    children: eh.intl.format(eh.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, k.A)({
                                                      activities: h,
                                                      status: x,
                                                      applicationStream: C,
                                                      voiceChannel: v,
                                                  })
                                                ? (0, l.jsx)(U.A, {
                                                      user: r,
                                                      activities: h,
                                                      voiceChannel: v,
                                                      applicationStream: C,
                                                      animateEmoji: X || ea || ec,
                                                      textClassName: ef.XD,
                                                      iconClassName: eK ? ef.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, l.jsx)(g.A, { className: a()(ef.uN, { [ef.e8]: te }), children: e3 }),
                                        decorators: t.isSystemDM()
                                            ? (0, l.jsx)(O.A, {
                                                  className: ef.G$,
                                                  type: O.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: te,
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: a()(ef._q, { [ef.EY]: eQ }),
                                    children: [
                                        eW ? (0, l.jsx)(ex, {}) : null,
                                        eF ? (0, l.jsx)(eI, {}) : null,
                                        ti && null != eY
                                            ? (0, l.jsx)(e_, { channelName: eY, onClick: ta, showNameplate: eQ })
                                            : null,
                                        tr || !ti
                                            ? (0, l.jsx)(ev, {
                                                  icon: S.P,
                                                  "aria-label": eU
                                                      ? eh.intl.string(eh.t["26C4oi"])
                                                      : eh.intl.string(eh.t.jsvgc3),
                                                  onClick: eU ? e7 : e1,
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
                        eD && (0, l.jsx)(et.A, { targetElementRef: eb, markMenuItemPopoverAsDismissed: eS }),
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
                  i = (0, f.bG)([em.default], () => em.default.getUser(t.getRecipientId())),
                  a = i?.id,
                  r = (0, f.cf)([er.A, ea.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = er.A.getState().statuses;
                          t.recipients.some((e) => n[e] === ep.clD.ONLINE) && (e = ep.clD.ONLINE);
                      } else null != a && (e = er.A.getStatus(a));
                      return {
                          status: e,
                          activities: null != a ? er.A.getActivities(a) : null,
                          applicationStream: null != a ? ea.A.getAnyStreamForUser(a) : null,
                          isMobile: null != a && er.A.isMobileOnline(a),
                          isVR: null != a && er.A.isVROnline(a),
                      };
                  }, [t, a]),
                  { voiceChannel: o } = (0, P.A)({ userId: a }),
                  u = (0, X.r)({ user: i }),
                  c = (0, f.bG)(
                      [em.default, ec.A],
                      () =>
                          t.isMultiUserDM()
                              ? eA.default
                                    .keys(ec.A.getTypingUsers(t.id))
                                    .some((e) => e !== em.default.getCurrentUser()?.id)
                              : null != i && ec.A.isTyping(t.id, t.getRecipientId()),
                      [t, i],
                  );
              return t.isMultiUserDM()
                  ? (0, l.jsx)(eT, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: r.status === ep.clD.ONLINE ? ep.clD.ONLINE : void 0,
                        ...s,
                    })
                  : (0, l.jsx)(eT, {
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

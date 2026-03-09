n.d(t, { Ay: () => ep, th: () => eA, w_: () => eo, z9: () => em });
var l = n(627968),
    s = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(284009),
    o = n.n(r),
    u = n(936504),
    c = n(110259),
    d = n(837381),
    m = n(172218),
    A = n(612324),
    p = n(535185),
    f = n(148839),
    x = n(607399),
    h = n(311907),
    E = n(3026),
    N = n(435371),
    g = n(397927),
    S = n(308528),
    v = n(442433),
    T = n(960076),
    C = n(397244),
    _ = n(714114),
    j = n(729551),
    y = n(709066),
    M = n(262295),
    I = n(343328),
    b = n(209581),
    R = n(963027),
    L = n(571694),
    w = n(47167),
    U = n(432222),
    D = n(880714),
    O = n(824994),
    G = n(922301),
    Q = n(750112),
    k = n(570622),
    P = n(414808),
    F = n(954376),
    V = n(534400),
    q = n(111864),
    B = n(967054),
    z = n(226540),
    H = n(227),
    W = n(854627),
    K = n(616356),
    Y = n(290863),
    $ = n(222823),
    J = n(994500),
    Z = n(741961),
    X = n(543465),
    ee = n(287809),
    et = n(661191),
    en = n(837921),
    el = n(652215),
    es = n(985018),
    ea = n(45119);
let ei = en.Ay.getEnableHardwareAcceleration() ? g.JsQ : g.euF,
    er = { offset: { top: 2, bottom: 2, right: 4 } },
    eo = (e) => {
        let { nameplate: t, icon: n, forceShow: s = !1, reducedClickTarget: a = !1, visibleElementRef: r, ...o } = e,
            u = (0, B.K)(t);
        return (0, l.jsx)(g.DUT, {
            className: i()(ea.b, { [ea.DQ]: null != t, [ea.by]: s, [ea.wY]: a }),
            style: u,
            ...o,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, l.jsx)("div", {
                ref: r,
                className: i()({ [ea.PJ]: null != t }),
                children: (0, l.jsx)(n, {
                    size: "sm",
                    color: "currentColor",
                    className: i()(ea.ut, { [ea.Uq]: null != t }),
                }),
            }),
        });
    },
    eu = (e) => {
        let { onClick: t, channelName: n, showNameplate: s } = e,
            { enabled: a } = b.A.useConfig({ location: "Wave CTA" });
        return a
            ? (0, l.jsx)("div", {
                  className: ea.KQ,
                  children: (0, l.jsx)(N.m_, {
                      text: es.intl.formatToPlainString(es.t.m0zYbV, { username: n }),
                      children: (0, l.jsx)(g.Button, {
                          size: "sm",
                          variant: s ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: es.intl.string(es.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    ec = () => (0, l.jsx)(g.G3N, { size: "xs", color: "currentColor", className: ea.wB }),
    ed = () => (0, l.jsx)(g.KTN, { size: "xs", color: "currentColor", className: ea.wB }),
    em = (e) => {
        let {
            route: t,
            selected: n,
            icon: s,
            iconClassName: a,
            interactiveClassName: r,
            text: o,
            children: c,
            locationState: d,
            onClick: m,
            className: A,
            role: p,
            "aria-posinset": f,
            "aria-setsize": h,
            listItemRef: E,
            ...N
        } = e;
        return (0, l.jsx)(D.A, {
            className: i()(ea.Ix, { [ea.Ij]: x.Fr }, A),
            onClick: m,
            role: p,
            focusProps: { within: !0, ...er },
            "aria-posinset": f,
            "aria-setsize": h,
            ref: E,
            children: (0, l.jsx)(g.HG8, {
                as: "div",
                selected: n,
                className: i()(r, ea.bG, ea.$J, { [ea.Q2]: n }),
                children: (0, l.jsxs)(u.N_, {
                    to: { pathname: t, state: d },
                    className: ea.nf,
                    ...N,
                    children: [
                        (0, l.jsx)(M.A, {
                            muted: !1,
                            avatar: (0, l.jsx)(s, {
                                size: "refresh_sm",
                                className: i()(ea.e_, a),
                                color: "currentColor",
                            }),
                            name: o,
                            innerClassName: ea.xx,
                        }),
                        c,
                    ],
                }),
            }),
        });
    };
function eA(e) {
    let {
            channel: t,
            selected: a = !1,
            user: r,
            activities: x,
            applicationStream: N,
            voiceChannel: _,
            isTyping: q,
            status: B,
            isMobile: K,
            isVR: Y,
            nameplate: Z,
            ref: ee,
            "aria-posinset": et,
            "aria-setsize": en,
        } = e,
        [em, eA] = s.useState(!1),
        [ep, ef] = s.useState(!1),
        [ex, eh] = s.useState(!1),
        eE = s.useRef(null),
        [eN, eg] = s.useState(!1),
        eS = (0, m.K)(
            s.useCallback((e) => {
                eg(e);
            }, []),
        ),
        ev = s.useRef(null),
        eT = ee ?? ev,
        eC = (0, A.A)(eT, eS),
        {
            showMenuItemPopover: e_,
            markMenuItemPopoverAsDismissed: ej,
            isPremium: ey,
        } = (0, k.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === a,
            isTargetInViewport: eN,
            channelType: t.type,
        }),
        {
            avatarSrc: eM,
            avatarDecorationSrc: eI,
            eventHandlers: eb,
        } = (0, W.A)({ userId: r?.id, size: g._3J.SIZE_32, animateOnHover: !(a || em || ep || ex) }),
        [eR, eL] = s.useState({ maskImage: "none" }),
        ew = s.useRef(null),
        eU = t.isMultiUserDM(),
        eD = t.isSystemDM(),
        eO = !eU && !eD && t.type === el.rbe.DM,
        eG = eO && r?.primaryGuild != null,
        eQ = (0, h.bG)([X.Ay], () => X.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: ek, blocked: eP } = (0, h.cf)([J.A], () => ({
            ignored: J.A.isIgnored(t.getRecipientId()),
            blocked: J.A.isBlocked(t.getRecipientId()),
        })),
        eF = eO && ek,
        eV = eO && eP,
        eq = (eQ || eF || eV) && !(a || em),
        eB = (0, h.bG)([$.Ay], () => $.Ay.getMentionCount(t.id) > 0),
        ez = (0, w.Ay)(t),
        eH = s.useRef(null),
        eW = null != Z && (a || em || ex),
        eK = () => {
            eA(!0);
        },
        eY = () => {
            eA(!1);
        },
        e$ = () => {
            ef(!0);
        },
        eJ = () => {
            ef(!1);
        },
        eZ = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), S.A.closePrivateChannel(t.id, a, n);
        },
        eX = () => {
            S.A.preload(el.ME, t.id);
        },
        e0 = (e) => {
            e.stopPropagation();
        },
        e1 = (e) => {
            e.target === e.currentTarget && eE.current?.click();
        },
        e2 = (e) => {
            let s =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eh(!0),
                t.isMultiUserDM()
                    ? (0, v.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([n.e("97262"), n.e("60200")]).then(
                                  n.bind(n, 4027),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, channel: t, selected: a });
                          },
                          { impressionName: s, noBlurEvent: !0, onClose: () => eh(!1) },
                      )
                    : (0, v.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("97262"),
                                  n.e("42128"),
                                  n.e("39778"),
                                  n.e("84488"),
                              ]).then(n.bind(n, 385913));
                              return (n) => (0, l.jsx)(e, { ...n, user: r, channel: t, channelSelected: a });
                          },
                          { impressionName: s, onClose: () => eh(!1) },
                      );
        },
        e9 = (e) => {
            e.preventDefault(), e.stopPropagation();
            let s = es.intl.formatToPlainString(es.t.hJ5Ap4, { name: ez }),
                a = es.intl.format(es.t.SSIVOu, { name: ez });
            t.isManaged() &&
                ((s = es.intl.formatToPlainString(es.t.hVGjEW, { name: ez })),
                (a = es.intl.format(es.t.IK1Qvs, { name: ez }))),
                (0, g.mMO)(async () => {
                    let { default: e } = await n.e("37803").then(n.bind(n, 148166));
                    return (t) => (0, l.jsx)(e, { title: s, body: a, onSubmit: eZ, ...t });
                });
        },
        e6 = (0, l.jsx)(Q.A, {
            userName: ez,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: em || a || ex ? G.G.ANIMATED : G.G.PLAIN,
            loop: em,
            boldFontOpacity: 0.9,
        }),
        e7 = eG
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      e6,
                      (0, l.jsx)(V.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: i()(ea.fc, { [ea.Y_]: eq }),
                      }),
                  ],
              })
            : e6,
        e4 = s.useRef(null),
        e3 = (0, O.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        e8 = [(0, R.Ay)({ channel: t, unread: eB }), (0, R.r2)({ channel: t, muted: eQ, userStatus: B })]
            .filter(Boolean)
            .join(", "),
        e5 = (0, h.bG)([$.Ay], () => $.Ay.lastMessageId(t.id)),
        { waveShouldShow: te, wavePressed: tt } = (0, U.A)(t, e5),
        { showClose: tn } = b.A.useConfig({ location: "PrivateChannel" }),
        tl = (0, f.A)(() => {
            let e = ew.current?.getBoundingClientRect() ?? null,
                t = e4.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void eL({ maskImage: "none" });
            let n = t.width - 16;
            eL({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        s.useLayoutEffect(tl, [em, tl]),
        (0, p.g)(eT, tl),
        (0, l.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...s } = e;
                return (0, l.jsxs)(D.A, {
                    className: i()(ea.Ix, ea.dm),
                    role: n,
                    focusProps: { ...er, focusTarget: eE, ringTarget: eT },
                    ref: eC,
                    onMouseEnter: eK,
                    onMouseLeave: eY,
                    onMouseDown: eX,
                    onFocus: e$,
                    onBlur: eJ,
                    onContextMenu: e2,
                    "aria-setsize": en,
                    "aria-posinset": et,
                    children: [
                        eB ? (0, l.jsx)("div", { className: i()(ea.dM, { [ea.SU]: eq }) }) : null,
                        (0, l.jsxs)(g.HG8, {
                            className: i()(ea.bG, { [ea.Q2]: a || ex }),
                            as: "div",
                            onClick: e1,
                            muted: eq,
                            selected: a,
                            children: [
                                (0, l.jsx)(H.A, {
                                    nameplate: eW ? Z : void 0,
                                    selected: a,
                                    hovered: em,
                                    content: e4,
                                    placement: z.u.CHANNEL,
                                }),
                                (0, l.jsx)("div", { className: ea.lU, ref: ew, children: e7 }),
                                (0, l.jsx)(u.N_, {
                                    style: eR,
                                    innerRef: eE,
                                    to: el.BVt.CHANNEL(el.ME, t.id),
                                    className: ea.nf,
                                    "aria-label": e8,
                                    ...s,
                                    children: (0, l.jsx)(M.A, {
                                        ref: e4,
                                        avatar: (() => {
                                            let e = g._3J.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, l.jsx)(F.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: q,
                                                        status: B,
                                                    });
                                                else
                                                    return (0, l.jsx)(ei, {
                                                        ...eb,
                                                        src: (0, L.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: q ? el.clD.ONLINE : B,
                                                        isTyping: q,
                                                    });
                                            o()(
                                                null != r,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                r.isSystemUser() || (n = (0, T.A)(x) ? el.clD.STREAMING : B),
                                                (0, l.jsx)(ei, {
                                                    ...eb,
                                                    size: g._3J.SIZE_32,
                                                    src: eM,
                                                    avatarDecoration: eI,
                                                    status: n,
                                                    isMobile: K,
                                                    isVR: Y,
                                                    isTyping: q,
                                                    "aria-label": r.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: eB && !eq,
                                        muted: eq,
                                        subText: t.isSystemDM()
                                            ? (0, l.jsx)("div", {
                                                  className: ea.W$,
                                                  children: (0, I.A)(t.id)
                                                      ? es.intl.string(es.t.FL5T01)
                                                      : es.intl.string(es.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, l.jsx)("div", {
                                                    className: ea.W$,
                                                    children: es.intl.format(es.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, C.A)({
                                                      activities: x,
                                                      status: B,
                                                      applicationStream: N,
                                                      voiceChannel: _,
                                                  })
                                                ? (0, l.jsx)(j.A, {
                                                      user: r,
                                                      activities: x,
                                                      voiceChannel: _,
                                                      applicationStream: N,
                                                      animateEmoji: em || ep || ex,
                                                      textClassName: ea.XD,
                                                      iconClassName: eq ? ea.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, l.jsx)(E.A, { className: i()(ea.uN, { [ea.e8]: e3 }), children: e7 }),
                                        decorators: t.isSystemDM()
                                            ? (0, l.jsx)(y.A, {
                                                  className: ea.G$,
                                                  type: y.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: e3,
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: i()(ea._q, { [ea.EY]: eW }),
                                    children: [
                                        eF ? (0, l.jsx)(ec, {}) : null,
                                        eV ? (0, l.jsx)(ed, {}) : null,
                                        te && null != ez
                                            ? (0, l.jsx)(eu, { channelName: ez, onClick: tt, showNameplate: eW })
                                            : null,
                                        tn || !te
                                            ? (0, l.jsx)(eo, {
                                                  icon: g.PGe,
                                                  "aria-label": eU
                                                      ? es.intl.string(es.t["26C4oi"])
                                                      : es.intl.string(es.t.jsvgc3),
                                                  onClick: eU ? e9 : eZ,
                                                  onMouseDown: e0,
                                                  nameplate: Z,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: eH,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                        e_ &&
                            (0, l.jsx)(P.A, {
                                targetElementRef: eT,
                                isPremium: ey ?? !1,
                                markMenuItemPopoverAsDismissed: ej,
                            }),
                    ],
                });
            },
        })
    );
}
let ep =
    21552 == n.j
        ? (e) => {
              let { channel: t, selected: n, ...s } = e,
                  a = (0, h.bG)([ee.default], () => ee.default.getUser(t.getRecipientId())),
                  i = a?.id,
                  r = (0, h.cf)([Y.A, K.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = Y.A.getState().statuses;
                          t.recipients.some((e) => n[e] === el.clD.ONLINE) && (e = el.clD.ONLINE);
                      } else null != i && (e = Y.A.getStatus(i));
                      return {
                          status: e,
                          activities: null != i ? Y.A.getActivities(i) : null,
                          applicationStream: null != i ? K.A.getAnyStreamForUser(i) : null,
                          isMobile: null != i && Y.A.isMobileOnline(i),
                          isVR: null != i && Y.A.isVROnline(i),
                      };
                  }, [t, i]),
                  { voiceChannel: o } = (0, _.A)({ userId: i }),
                  u = (0, q.r)({ user: a }),
                  c = (0, h.bG)(
                      [ee.default, Z.A],
                      () =>
                          t.isMultiUserDM()
                              ? et.default
                                    .keys(Z.A.getTypingUsers(t.id))
                                    .some((e) => e !== ee.default.getCurrentUser()?.id)
                              : null != a && Z.A.isTyping(t.id, t.getRecipientId()),
                      [t, a],
                  );
              return t.isMultiUserDM()
                  ? (0, l.jsx)(eA, {
                        channel: t,
                        selected: n,
                        isTyping: c,
                        status: r.status === el.clD.ONLINE ? el.clD.ONLINE : void 0,
                        ...s,
                    })
                  : (0, l.jsx)(eA, {
                        channel: t,
                        selected: n,
                        user: a,
                        voiceChannel: o,
                        isTyping: c,
                        nameplate: u,
                        ...s,
                        ...r,
                    });
          }
        : null;

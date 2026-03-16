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
    v = n(308528),
    S = n(442433),
    T = n(960076),
    _ = n(397244),
    C = n(714114),
    j = n(729551),
    y = n(709066),
    I = n(262295),
    M = n(343328),
    b = n(209581),
    R = n(963027),
    L = n(571694),
    U = n(47167),
    w = n(432222),
    D = n(880714),
    O = n(824994),
    G = n(922301),
    Q = n(750112),
    k = n(570622),
    P = n(414808),
    F = n(954376),
    V = n(534400),
    q = n(111864),
    z = n(967054),
    B = n(226540),
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
            u = (0, z.K)(t);
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
                        (0, l.jsx)(I.A, {
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
            voiceChannel: C,
            isTyping: q,
            status: z,
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
        ev = (0, m.K)(
            s.useCallback((e) => {
                eg(e);
            }, []),
        ),
        eS = s.useRef(null),
        eT = ee ?? eS,
        e_ = (0, A.A)(eT, ev),
        { showMenuItemPopover: eC, markMenuItemPopoverAsDismissed: ej } = (0, k.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === a,
            isTargetInViewport: eN,
            channelType: t.type,
        }),
        {
            avatarSrc: ey,
            avatarDecorationSrc: eI,
            eventHandlers: eM,
        } = (0, W.A)({ userId: r?.id, size: g._3J.SIZE_32, animateOnHover: !(a || em || ep || ex) }),
        [eb, eR] = s.useState({ maskImage: "none" }),
        eL = s.useRef(null),
        eU = t.isMultiUserDM(),
        ew = t.isSystemDM(),
        eD = !eU && !ew && t.type === el.rbe.DM,
        eO = eD && r?.primaryGuild != null,
        eG = (0, h.bG)([X.Ay], () => X.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eQ, blocked: ek } = (0, h.cf)([J.A], () => ({
            ignored: J.A.isIgnored(t.getRecipientId()),
            blocked: J.A.isBlocked(t.getRecipientId()),
        })),
        eP = eD && eQ,
        eF = eD && ek,
        eV = (eG || eP || eF) && !(a || em),
        eq = (0, h.bG)([$.Ay], () => $.Ay.getMentionCount(t.id) > 0),
        ez = (0, U.Ay)(t),
        eB = s.useRef(null),
        eH = null != Z && (a || em || ex),
        eW = () => {
            eA(!0);
        },
        eK = () => {
            eA(!1);
        },
        eY = () => {
            ef(!0);
        },
        e$ = () => {
            ef(!1);
        },
        eJ = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), v.A.closePrivateChannel(t.id, a, n);
        },
        eZ = () => {
            v.A.preload(el.ME, t.id);
        },
        eX = (e) => {
            e.stopPropagation();
        },
        e0 = (e) => {
            e.target === e.currentTarget && eE.current?.click();
        },
        e1 = (e) => {
            let s =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eh(!0),
                t.isMultiUserDM()
                    ? (0, S.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([n.e("97262"), n.e("60200"), n.e("24273")]).then(
                                  n.bind(n, 4027),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, channel: t, selected: a });
                          },
                          { impressionName: s, noBlurEvent: !0, onClose: () => eh(!1) },
                      )
                    : (0, S.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("97262"),
                                  n.e("42128"),
                                  n.e("39778"),
                                  n.e("40867"),
                              ]).then(n.bind(n, 385913));
                              return (n) => (0, l.jsx)(e, { ...n, user: r, channel: t, channelSelected: a });
                          },
                          { impressionName: s, onClose: () => eh(!1) },
                      );
        },
        e2 = (e) => {
            e.preventDefault(), e.stopPropagation();
            let s = es.intl.formatToPlainString(es.t.hJ5Ap4, { name: ez }),
                a = es.intl.format(es.t.SSIVOu, { name: ez });
            t.isManaged() &&
                ((s = es.intl.formatToPlainString(es.t.hVGjEW, { name: ez })),
                (a = es.intl.format(es.t.IK1Qvs, { name: ez }))),
                (0, g.mMO)(async () => {
                    let { default: e } = await n.e("37803").then(n.bind(n, 148166));
                    return (t) => (0, l.jsx)(e, { title: s, body: a, onSubmit: eJ, ...t });
                });
        },
        e9 = (0, l.jsx)(Q.A, {
            userName: ez,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: em || a || ex ? G.G.ANIMATED : G.G.PLAIN,
            loop: em,
            boldFontOpacity: 0.9,
        }),
        e7 = eO
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      e9,
                      (0, l.jsx)(V.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: i()(ea.fc, { [ea.Y_]: eV }),
                      }),
                  ],
              })
            : e9,
        e6 = s.useRef(null),
        e3 = (0, O.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        e4 = [(0, R.Ay)({ channel: t, unread: eq }), (0, R.r2)({ channel: t, muted: eG, userStatus: z })]
            .filter(Boolean)
            .join(", "),
        e8 = (0, h.bG)([$.Ay], () => $.Ay.lastMessageId(t.id)),
        { waveShouldShow: e5, wavePressed: te } = (0, w.A)(t, e8),
        { showClose: tt } = b.A.useConfig({ location: "PrivateChannel" }),
        tn = (0, f.A)(() => {
            let e = eL.current?.getBoundingClientRect() ?? null,
                t = e6.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void eR({ maskImage: "none" });
            let n = t.width - 16;
            eR({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        s.useLayoutEffect(tn, [em, tn]),
        (0, p.g)(eT, tn),
        (0, l.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...s } = e;
                return (0, l.jsxs)(D.A, {
                    className: i()(ea.Ix, ea.dm),
                    role: n,
                    focusProps: { ...er, focusTarget: eE, ringTarget: eT },
                    ref: e_,
                    onMouseEnter: eW,
                    onMouseLeave: eK,
                    onMouseDown: eZ,
                    onFocus: eY,
                    onBlur: e$,
                    onContextMenu: e1,
                    "aria-setsize": en,
                    "aria-posinset": et,
                    children: [
                        eq ? (0, l.jsx)("div", { className: i()(ea.dM, { [ea.SU]: eV }) }) : null,
                        (0, l.jsxs)(g.HG8, {
                            className: i()(ea.bG, { [ea.Q2]: a || ex }),
                            as: "div",
                            onClick: e0,
                            muted: eV,
                            selected: a,
                            children: [
                                (0, l.jsx)(H.A, {
                                    nameplate: eH ? Z : void 0,
                                    selected: a,
                                    hovered: em,
                                    content: e6,
                                    placement: B.u.CHANNEL,
                                }),
                                (0, l.jsx)("div", { className: ea.lU, ref: eL, children: e7 }),
                                (0, l.jsx)(u.N_, {
                                    style: eb,
                                    innerRef: eE,
                                    to: el.BVt.CHANNEL(el.ME, t.id),
                                    className: ea.nf,
                                    "aria-label": e4,
                                    ...s,
                                    children: (0, l.jsx)(I.A, {
                                        ref: e6,
                                        avatar: (() => {
                                            let e = g._3J.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, l.jsx)(F.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: q,
                                                        status: z,
                                                    });
                                                else
                                                    return (0, l.jsx)(ei, {
                                                        ...eM,
                                                        src: (0, L.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: q ? el.clD.ONLINE : z,
                                                        isTyping: q,
                                                    });
                                            o()(
                                                null != r,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                r.isSystemUser() || (n = (0, T.A)(x) ? el.clD.STREAMING : z),
                                                (0, l.jsx)(ei, {
                                                    ...eM,
                                                    size: g._3J.SIZE_32,
                                                    src: ey,
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
                                        highlighted: eq && !eV,
                                        muted: eV,
                                        subText: t.isSystemDM()
                                            ? (0, l.jsx)("div", {
                                                  className: ea.W$,
                                                  children: (0, M.A)(t.id)
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
                                              : (0, _.A)({
                                                      activities: x,
                                                      status: z,
                                                      applicationStream: N,
                                                      voiceChannel: C,
                                                  })
                                                ? (0, l.jsx)(j.A, {
                                                      user: r,
                                                      activities: x,
                                                      voiceChannel: C,
                                                      applicationStream: N,
                                                      animateEmoji: em || ep || ex,
                                                      textClassName: ea.XD,
                                                      iconClassName: eV ? ea.tG : void 0,
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
                                    className: i()(ea._q, { [ea.EY]: eH }),
                                    children: [
                                        eP ? (0, l.jsx)(ec, {}) : null,
                                        eF ? (0, l.jsx)(ed, {}) : null,
                                        e5 && null != ez
                                            ? (0, l.jsx)(eu, { channelName: ez, onClick: te, showNameplate: eH })
                                            : null,
                                        tt || !e5
                                            ? (0, l.jsx)(eo, {
                                                  icon: g.PGe,
                                                  "aria-label": eU
                                                      ? es.intl.string(es.t["26C4oi"])
                                                      : es.intl.string(es.t.jsvgc3),
                                                  onClick: eU ? e2 : eJ,
                                                  onMouseDown: eX,
                                                  nameplate: Z,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: eB,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                        eC && (0, l.jsx)(P.A, { targetElementRef: eT, markMenuItemPopoverAsDismissed: ej }),
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
                  { voiceChannel: o } = (0, C.A)({ userId: i }),
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

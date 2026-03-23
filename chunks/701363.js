n.d(t, { Ay: () => eE, th: () => eA, w_: () => eu, z9: () => em });
var l = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(284009),
    u = n.n(r),
    o = n(936504),
    c = n(110259),
    d = n(837381),
    m = n(172218),
    A = n(612324),
    E = n(535185),
    p = n(148839),
    f = n(607399),
    S = n(311907),
    h = n(3026),
    T = n(435371),
    x = n(397927),
    _ = n(308528),
    N = n(442433),
    g = n(960076),
    C = n(397244),
    v = n(714114),
    I = n(729551),
    M = n(709066),
    b = n(262295),
    j = n(343328),
    R = n(209581),
    y = n(963027),
    L = n(571694),
    U = n(47167),
    D = n(432222),
    O = n(880714),
    w = n(824994),
    G = n(922301),
    Q = n(750112),
    P = n(570622),
    F = n(414808),
    k = n(954376),
    V = n(534400),
    q = n(111864),
    B = n(967054),
    H = n(226540),
    z = n(227),
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
    ei = n(45119);
let ea = en.Ay.getEnableHardwareAcceleration() ? x.JsQ : x.euF,
    er = { offset: { top: 2, bottom: 2, right: 4 } },
    eu = (e) => {
        let { nameplate: t, icon: n, forceShow: s = !1, reducedClickTarget: i = !1, visibleElementRef: r, ...u } = e,
            o = (0, B.K)(t);
        return (0, l.jsx)(x.DUT, {
            className: a()(ei.b, { [ei.DQ]: null != t, [ei.by]: s, [ei.wY]: i }),
            style: o,
            ...u,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, l.jsx)("div", {
                ref: r,
                className: a()({ [ei.PJ]: null != t }),
                children: (0, l.jsx)(n, {
                    size: "sm",
                    color: "currentColor",
                    className: a()(ei.ut, { [ei.Uq]: null != t }),
                }),
            }),
        });
    },
    eo = (e) => {
        let { onClick: t, channelName: n, showNameplate: s } = e,
            { enabled: i } = R.A.useConfig({ location: "Wave CTA" });
        return i
            ? (0, l.jsx)("div", {
                  className: ei.KQ,
                  children: (0, l.jsx)(T.m_, {
                      text: es.intl.formatToPlainString(es.t.m0zYbV, { username: n }),
                      children: (0, l.jsx)(x.Button, {
                          size: "sm",
                          variant: s ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: es.intl.string(es.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    ec = () => (0, l.jsx)(x.G3N, { size: "xs", color: "currentColor", className: ei.wB }),
    ed = () => (0, l.jsx)(x.KTN, { size: "xs", color: "currentColor", className: ei.wB }),
    em = (e) => {
        let {
            route: t,
            selected: n,
            icon: s,
            iconClassName: i,
            interactiveClassName: r,
            text: u,
            children: c,
            locationState: d,
            onClick: m,
            className: A,
            role: E,
            "aria-posinset": p,
            "aria-setsize": S,
            listItemRef: h,
            ...T
        } = e;
        return (0, l.jsx)(O.A, {
            className: a()(ei.Ix, { [ei.Ij]: f.Fr }, A),
            onClick: m,
            role: E,
            focusProps: { within: !0, ...er },
            "aria-posinset": p,
            "aria-setsize": S,
            ref: h,
            children: (0, l.jsx)(x.HG8, {
                as: "div",
                selected: n,
                className: a()(r, ei.bG, ei.$J, { [ei.Q2]: n }),
                children: (0, l.jsxs)(o.N_, {
                    to: { pathname: t, state: d },
                    className: ei.nf,
                    ...T,
                    children: [
                        (0, l.jsx)(b.A, {
                            muted: !1,
                            avatar: (0, l.jsx)(s, {
                                size: "refresh_sm",
                                className: a()(ei.e_, i),
                                color: "currentColor",
                            }),
                            name: u,
                            innerClassName: ei.xx,
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
            selected: i = !1,
            user: r,
            activities: f,
            applicationStream: T,
            voiceChannel: v,
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
        [eE, ep] = s.useState(!1),
        [ef, eS] = s.useState(!1),
        eh = s.useRef(null),
        [eT, ex] = s.useState(!1),
        e_ = (0, m.K)(
            s.useCallback((e) => {
                ex(e);
            }, []),
        ),
        eN = s.useRef(null),
        eg = ee ?? eN,
        eC = (0, A.A)(eg, e_),
        { showMenuItemPopover: ev, markMenuItemPopoverAsDismissed: eI } = (0, P.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === i,
            isTargetInViewport: eT,
            channelType: t.type,
        }),
        {
            avatarSrc: eM,
            avatarDecorationSrc: eb,
            eventHandlers: ej,
        } = (0, W.A)({ userId: r?.id, size: x._3J.SIZE_32, animateOnHover: !(i || em || eE || ef) }),
        [eR, ey] = s.useState({ maskImage: "none" }),
        eL = s.useRef(null),
        eU = t.isMultiUserDM(),
        eD = t.isSystemDM(),
        eO = !eU && !eD && t.type === el.rbe.DM,
        ew = eO && r?.primaryGuild != null,
        eG = (0, S.bG)([X.Ay], () => X.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eQ, blocked: eP } = (0, S.cf)([J.A], () => ({
            ignored: J.A.isIgnored(t.getRecipientId()),
            blocked: J.A.isBlocked(t.getRecipientId()),
        })),
        eF = eO && eQ,
        ek = eO && eP,
        eV = (eG || eF || ek) && !(i || em),
        eq = (0, S.bG)([$.Ay], () => $.Ay.getMentionCount(t.id) > 0),
        eB = (0, U.Ay)(t),
        eH = s.useRef(null),
        ez = null != Z && (i || em || ef),
        eW = () => {
            eA(!0);
        },
        eK = () => {
            eA(!1);
        },
        eY = () => {
            ep(!0);
        },
        e$ = () => {
            ep(!1);
        },
        eJ = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), _.A.closePrivateChannel(t.id, i, n);
        },
        eZ = () => {
            _.A.preload(el.ME, t.id);
        },
        eX = (e) => {
            e.stopPropagation();
        },
        e0 = (e) => {
            e.target === e.currentTarget && eh.current?.click();
        },
        e1 = (e) => {
            let s =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eS(!0),
                t.isMultiUserDM()
                    ? (0, N.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([n.e("97262"), n.e("60200"), n.e("91763")]).then(
                                  n.bind(n, 4027),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, channel: t, selected: i });
                          },
                          { impressionName: s, noBlurEvent: !0, onClose: () => eS(!1) },
                      )
                    : (0, N.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("97262"),
                                  n.e("42128"),
                                  n.e("39778"),
                                  n.e("76779"),
                              ]).then(n.bind(n, 385913));
                              return (n) => (0, l.jsx)(e, { ...n, user: r, channel: t, channelSelected: i });
                          },
                          { impressionName: s, onClose: () => eS(!1) },
                      );
        },
        e2 = (e) => {
            e.preventDefault(), e.stopPropagation();
            let s = es.intl.formatToPlainString(es.t.hJ5Ap4, { name: eB }),
                i = es.intl.format(es.t.SSIVOu, { name: eB });
            t.isManaged() &&
                ((s = es.intl.formatToPlainString(es.t.hVGjEW, { name: eB })),
                (i = es.intl.format(es.t.IK1Qvs, { name: eB }))),
                (0, x.mMO)(async () => {
                    let { default: e } = await n.e("37803").then(n.bind(n, 148166));
                    return (t) => (0, l.jsx)(e, { title: s, body: i, onSubmit: eJ, ...t });
                });
        },
        e9 = (0, l.jsx)(Q.A, {
            userName: eB,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: em || i || ef ? G.G.ANIMATED : G.G.PLAIN,
            loop: em,
            boldFontOpacity: 0.9,
        }),
        e6 = ew
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      e9,
                      (0, l.jsx)(V.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(ei.fc, { [ei.Y_]: eV }),
                      }),
                  ],
              })
            : e9,
        e7 = s.useRef(null),
        e3 = (0, w.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        e4 = [(0, y.Ay)({ channel: t, unread: eq }), (0, y.r2)({ channel: t, muted: eG, userStatus: B })]
            .filter(Boolean)
            .join(", "),
        e5 = (0, S.bG)([$.Ay], () => $.Ay.lastMessageId(t.id)),
        { waveShouldShow: e8, wavePressed: te } = (0, D.A)(t, e5),
        { showClose: tt } = R.A.useConfig({ location: "PrivateChannel" }),
        tn = (0, p.A)(() => {
            let e = eL.current?.getBoundingClientRect() ?? null,
                t = e7.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void ey({ maskImage: "none" });
            let n = t.width - 16;
            ey({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        s.useLayoutEffect(tn, [em, tn]),
        (0, E.g)(eg, tn),
        (0, l.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: n, ...s } = e;
                return (0, l.jsxs)(O.A, {
                    className: a()(ei.Ix, ei.dm),
                    role: n,
                    focusProps: { ...er, focusTarget: eh, ringTarget: eg },
                    ref: eC,
                    onMouseEnter: eW,
                    onMouseLeave: eK,
                    onMouseDown: eZ,
                    onFocus: eY,
                    onBlur: e$,
                    onContextMenu: e1,
                    "aria-setsize": en,
                    "aria-posinset": et,
                    children: [
                        eq ? (0, l.jsx)("div", { className: a()(ei.dM, { [ei.SU]: eV }) }) : null,
                        (0, l.jsxs)(x.HG8, {
                            className: a()(ei.bG, { [ei.Q2]: i || ef }),
                            as: "div",
                            onClick: e0,
                            muted: eV,
                            selected: i,
                            children: [
                                (0, l.jsx)(z.A, {
                                    nameplate: ez ? Z : void 0,
                                    selected: i,
                                    hovered: em,
                                    content: e7,
                                    placement: H.u.CHANNEL,
                                }),
                                (0, l.jsx)("div", { className: ei.lU, ref: eL, children: e6 }),
                                (0, l.jsx)(o.N_, {
                                    style: eR,
                                    innerRef: eh,
                                    to: el.BVt.CHANNEL(el.ME, t.id),
                                    className: ei.nf,
                                    "aria-label": e4,
                                    ...s,
                                    children: (0, l.jsx)(b.A, {
                                        ref: e7,
                                        avatar: (() => {
                                            let e = x._3J.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, l.jsx)(k.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: q,
                                                        status: B,
                                                    });
                                                else
                                                    return (0, l.jsx)(ea, {
                                                        ...ej,
                                                        src: (0, L.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: q ? el.clD.ONLINE : B,
                                                        isTyping: q,
                                                    });
                                            u()(
                                                null != r,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let n = null;
                                            return (
                                                r.isSystemUser() || (n = (0, g.A)(f) ? el.clD.STREAMING : B),
                                                (0, l.jsx)(ea, {
                                                    ...ej,
                                                    size: x._3J.SIZE_32,
                                                    src: eM,
                                                    avatarDecoration: eb,
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
                                                  className: ei.W$,
                                                  children: (0, j.A)(t.id)
                                                      ? es.intl.string(es.t.FL5T01)
                                                      : es.intl.string(es.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, l.jsx)("div", {
                                                    className: ei.W$,
                                                    children: es.intl.format(es.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, C.A)({
                                                      activities: f,
                                                      status: B,
                                                      applicationStream: T,
                                                      voiceChannel: v,
                                                  })
                                                ? (0, l.jsx)(I.A, {
                                                      user: r,
                                                      activities: f,
                                                      voiceChannel: v,
                                                      applicationStream: T,
                                                      animateEmoji: em || eE || ef,
                                                      textClassName: ei.XD,
                                                      iconClassName: eV ? ei.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, l.jsx)(h.A, { className: a()(ei.uN, { [ei.e8]: e3 }), children: e6 }),
                                        decorators: t.isSystemDM()
                                            ? (0, l.jsx)(M.A, {
                                                  className: ei.G$,
                                                  type: M.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: e3,
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: a()(ei._q, { [ei.EY]: ez }),
                                    children: [
                                        eF ? (0, l.jsx)(ec, {}) : null,
                                        ek ? (0, l.jsx)(ed, {}) : null,
                                        e8 && null != eB
                                            ? (0, l.jsx)(eo, { channelName: eB, onClick: te, showNameplate: ez })
                                            : null,
                                        tt || !e8
                                            ? (0, l.jsx)(eu, {
                                                  icon: x.PGe,
                                                  "aria-label": eU
                                                      ? es.intl.string(es.t["26C4oi"])
                                                      : es.intl.string(es.t.jsvgc3),
                                                  onClick: eU ? e2 : eJ,
                                                  onMouseDown: eX,
                                                  nameplate: Z,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: eH,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                        ev && (0, l.jsx)(F.A, { targetElementRef: eg, markMenuItemPopoverAsDismissed: eI }),
                    ],
                });
            },
        })
    );
}
let eE =
    21552 == n.j
        ? (e) => {
              let { channel: t, selected: n, ...s } = e,
                  i = (0, S.bG)([ee.default], () => ee.default.getUser(t.getRecipientId())),
                  a = i?.id,
                  r = (0, S.cf)([Y.A, K.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = Y.A.getState().statuses;
                          t.recipients.some((e) => n[e] === el.clD.ONLINE) && (e = el.clD.ONLINE);
                      } else null != a && (e = Y.A.getStatus(a));
                      return {
                          status: e,
                          activities: null != a ? Y.A.getActivities(a) : null,
                          applicationStream: null != a ? K.A.getAnyStreamForUser(a) : null,
                          isMobile: null != a && Y.A.isMobileOnline(a),
                          isVR: null != a && Y.A.isVROnline(a),
                      };
                  }, [t, a]),
                  { voiceChannel: u } = (0, v.A)({ userId: a }),
                  o = (0, q.r)({ user: i }),
                  c = (0, S.bG)(
                      [ee.default, Z.A],
                      () =>
                          t.isMultiUserDM()
                              ? et.default
                                    .keys(Z.A.getTypingUsers(t.id))
                                    .some((e) => e !== ee.default.getCurrentUser()?.id)
                              : null != i && Z.A.isTyping(t.id, t.getRecipientId()),
                      [t, i],
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
                        user: i,
                        voiceChannel: u,
                        isTyping: c,
                        nameplate: o,
                        ...s,
                        ...r,
                    });
          }
        : null;

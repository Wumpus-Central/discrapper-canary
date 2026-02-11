s.d(t, { Ay: () => er, th: () => ea, w_: () => et, z9: () => ei });
var n = s(627968),
    l = s(64700),
    i = s(503698),
    a = s.n(i),
    r = s(284009),
    u = s.n(r),
    o = s(758879),
    c = s(110259),
    d = s(837381),
    m = s(607399),
    A = s(311907),
    E = s(3026),
    p = s(397927),
    x = s(308528),
    f = s(442433),
    S = s(960076),
    T = s(901517),
    N = s(397244),
    _ = s(714114),
    h = s(729551),
    C = s(709066),
    v = s(262295),
    g = s(343328),
    j = s(963027),
    I = s(571694),
    M = s(47167),
    y = s(880714),
    L = s(824994),
    b = s(922301),
    R = s(750112),
    U = s(181079),
    Q = s(954376),
    D = s(534400),
    G = s(111864),
    O = s(967054),
    w = s(226540),
    P = s(227),
    F = s(854627),
    V = s(616356),
    k = s(290863),
    q = s(222823),
    H = s(994500),
    z = s(741961),
    B = s(543465),
    W = s(287809),
    K = s(661191),
    Y = s(837921),
    $ = s(652215),
    J = s(985018),
    Z = s(477549);
let X = Y.Ay.getEnableHardwareAcceleration() ? p.JsQ : p.euF,
    ee = { offset: { top: 2, bottom: 2, right: 4 } },
    et = (e) => {
        let { nameplate: t, icon: s, forceShow: l = !1, reducedClickTarget: i = !1, visibleElementRef: r, ...u } = e,
            o = (0, O.K)(t);
        return (0, n.jsx)(p.DUT, {
            className: a()(Z.b, { [Z.DQ]: null != t, [Z.by]: l, [Z.wY]: i }),
            style: o,
            ...u,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, n.jsx)("div", {
                ref: r,
                className: a()({ [Z.PJ]: null != t }),
                children: (0, n.jsx)(s, {
                    size: "sm",
                    color: "currentColor",
                    className: a()(Z.ut, { [Z.Uq]: null != t }),
                }),
            }),
        });
    },
    es = () => (0, n.jsx)(p.Gg5, { size: "xs", color: "currentColor", className: Z.wB }),
    en = () => (0, n.jsx)(p.G3N, { size: "xs", color: "currentColor", className: Z.wB }),
    el = () => (0, n.jsx)(p.KTN, { size: "xs", color: "currentColor", className: Z.wB }),
    ei = (e) => {
        let {
            route: t,
            selected: s,
            icon: l,
            iconClassName: i,
            interactiveClassName: r,
            text: u,
            children: c,
            locationState: d,
            onClick: A,
            className: E,
            role: x,
            "aria-posinset": f,
            "aria-setsize": S,
            listItemRef: T,
            ...N
        } = e;
        return (0, n.jsx)(y.A, {
            className: a()(Z.Ix, { [Z.Ij]: m.Fr }, E),
            onClick: A,
            role: x,
            focusProps: { within: !0, ...ee },
            "aria-posinset": f,
            "aria-setsize": S,
            ref: T,
            children: (0, n.jsx)(p.HG8, {
                as: "div",
                selected: s,
                className: a()(r, Z.bG, Z.$J, { [Z.Q2]: s }),
                children: (0, n.jsxs)(o.N_, {
                    to: { pathname: t, state: d },
                    className: Z.nf,
                    ...N,
                    children: [
                        (0, n.jsx)(v.A, {
                            muted: !1,
                            avatar: (0, n.jsx)(l, {
                                size: "refresh_sm",
                                className: a()(Z.e_, i),
                                color: "currentColor",
                            }),
                            name: u,
                            innerClassName: Z.xx,
                        }),
                        c,
                    ],
                }),
            }),
        });
    };
function ea(e) {
    let {
            channel: t,
            selected: i = !1,
            user: r,
            activities: m,
            applicationStream: T,
            voiceChannel: _,
            isTyping: G,
            status: O,
            isMobile: V,
            isVR: k,
            nameplate: z,
            ref: W,
            "aria-posinset": K,
            "aria-setsize": Y,
        } = e,
        [ei, ea] = l.useState(!1),
        [er, eu] = l.useState(!1),
        [eo, ec] = l.useState(!1),
        ed = l.useRef(null),
        em = l.useRef(null),
        eA = W ?? em,
        {
            avatarSrc: eE,
            avatarDecorationSrc: ep,
            eventHandlers: ex,
        } = (0, F.A)({ userId: r?.id, size: p._3J.SIZE_32, animateOnHover: !(i || ei || er || eo) }),
        ef = t.isMultiUserDM(),
        eS = t.isSystemDM(),
        eT = !ef && !eS && t.type === $.rbe.DM,
        eN = eT && r?.primaryGuild != null,
        e_ = (0, A.bG)([B.Ay], () => B.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eh, blocked: eC } = (0, A.cf)([H.A], () => ({
            ignored: H.A.isIgnored(t.getRecipientId()),
            blocked: H.A.isBlocked(t.getRecipientId()),
        })),
        ev = eT && eh,
        eg = eT && eC,
        ej = (e_ || ev || eg) && !(i || ei),
        eI = (0, A.bG)([q.Ay], () => q.Ay.getMentionCount(t.id) > 0),
        eM = (0, M.Ay)(t),
        ey = (0, A.bG)([U.A], () => U.A.isFavorite(t.id)),
        eL = l.useRef(null),
        eb = null != z && (i || ei || eo),
        eR = () => {
            ea(!0);
        },
        eU = () => {
            ea(!1);
        },
        eQ = () => {
            eu(!0);
        },
        eD = () => {
            eu(!1);
        },
        eG = function (e) {
            let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), x.A.closePrivateChannel(t.id, i, s);
        },
        eO = () => {
            x.A.preload($.ME, t.id);
        },
        ew = (e) => {
            e.stopPropagation();
        },
        eP = (e) => {
            e.target === e.currentTarget && ed.current?.click();
        },
        eF = (e) => {
            let l =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ec(!0),
                t.isMultiUserDM()
                    ? (0, f.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([s.e("97262"), s.e("99011"), s.e("60200")]).then(
                                  s.bind(s, 4027),
                              );
                              return (s) => (0, n.jsx)(e, { ...s, channel: t, selected: i });
                          },
                          { impressionName: l, noBlurEvent: !0, onClose: () => ec(!1) },
                      )
                    : (0, f.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  s.e("97262"),
                                  s.e("99011"),
                                  s.e("42128"),
                                  s.e("55150"),
                                  s.e("39778"),
                                  s.e("11865"),
                              ]).then(s.bind(s, 385913));
                              return (s) => (0, n.jsx)(e, { ...s, user: r, channel: t, channelSelected: i });
                          },
                          { impressionName: l, onClose: () => ec(!1) },
                      );
        },
        eV = (e) => {
            e.preventDefault(), e.stopPropagation();
            let l = J.intl.formatToPlainString(J.t.hJ5Ap4, { name: eM }),
                i = J.intl.format(J.t.SSIVOu, { name: eM });
            t.isManaged() &&
                ((l = J.intl.formatToPlainString(J.t.hVGjEW, { name: eM })),
                (i = J.intl.format(J.t.IK1Qvs, { name: eM }))),
                (0, p.mMO)(async () => {
                    let { default: e } = await s.e("37803").then(s.bind(s, 148166));
                    return (t) => (0, n.jsx)(e, { title: l, body: i, onSubmit: eG, ...t });
                });
        },
        ek = (0, n.jsx)(R.A, {
            userName: eM,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: ei || i || eo ? b.G.ANIMATED : b.G.PLAIN,
            loop: ei,
            boldFontOpacity: 0.9,
        }),
        eq = eN
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      ek,
                      (0, n.jsx)(D.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(Z.fc, { [Z.Y_]: ej }),
                      }),
                  ],
              })
            : ek,
        eH = l.useRef(null),
        ez = (0, L.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        eB = [(0, j.Ay)({ channel: t, unread: eI }), (0, j.r2)({ channel: t, muted: e_, userStatus: O })]
            .filter(Boolean)
            .join(", ");
    return (0, n.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: s, ...l } = e;
            return (0, n.jsxs)(y.A, {
                className: a()(Z.Ix, Z.dm),
                role: s,
                focusProps: { ...ee, focusTarget: ed, ringTarget: eA },
                ref: eA,
                onMouseEnter: eR,
                onMouseLeave: eU,
                onMouseDown: eO,
                onFocus: eQ,
                onBlur: eD,
                onContextMenu: eF,
                "aria-setsize": Y,
                "aria-posinset": K,
                children: [
                    eI ? (0, n.jsx)("div", { className: a()(Z.dM, { [Z.SU]: ej }) }) : null,
                    (0, n.jsxs)(p.HG8, {
                        className: a()(Z.bG, { [Z.Q2]: i || eo }),
                        as: "div",
                        onClick: eP,
                        muted: ej,
                        selected: i,
                        children: [
                            (0, n.jsx)(P.A, {
                                nameplate: eb ? z : void 0,
                                selected: i,
                                hovered: ei,
                                content: eH,
                                placement: w.u.CHANNEL,
                            }),
                            (0, n.jsx)(o.N_, {
                                innerRef: ed,
                                to: $.BVt.CHANNEL($.ME, t.id),
                                className: Z.nf,
                                "aria-label": eB,
                                ...l,
                                children: (0, n.jsx)(v.A, {
                                    ref: eH,
                                    avatar: (() => {
                                        let e = p._3J.SIZE_32;
                                        if (t.isMultiUserDM())
                                            if (t.recipients.length >= 2 && null == t.icon)
                                                return (0, n.jsx)(Q.A, {
                                                    "aria-hidden": !0,
                                                    recipients: t.recipients,
                                                    size: e,
                                                    isTyping: G,
                                                    status: O,
                                                });
                                            else
                                                return (0, n.jsx)(X, {
                                                    ...ex,
                                                    src: (0, I.Y)(t),
                                                    "aria-hidden": !0,
                                                    size: e,
                                                    status: G ? $.clD.ONLINE : O,
                                                    isTyping: G,
                                                });
                                        u()(
                                            null != r,
                                            "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                        );
                                        let s = null;
                                        return (
                                            r.isSystemUser() || (s = (0, S.A)(m) ? $.clD.STREAMING : O),
                                            (0, n.jsx)(X, {
                                                ...ex,
                                                size: p._3J.SIZE_32,
                                                src: eE,
                                                avatarDecoration: ep,
                                                status: s,
                                                isMobile: V,
                                                isVR: k,
                                                isTyping: G,
                                                "aria-label": r.username,
                                                statusTooltip: !0,
                                            })
                                        );
                                    })(),
                                    highlighted: eI && !ej,
                                    muted: ej,
                                    subText: t.isSystemDM()
                                        ? (0, n.jsx)("div", {
                                              className: Z.W$,
                                              children: (0, g.A)(t.id)
                                                  ? J.intl.string(J.t.FL5T01)
                                                  : J.intl.string(J.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, n.jsx)("div", {
                                                className: Z.W$,
                                                children: J.intl.format(J.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, N.A)({
                                                  activities: m,
                                                  status: O,
                                                  applicationStream: T,
                                                  voiceChannel: _,
                                              })
                                            ? (0, n.jsx)(h.A, {
                                                  user: r,
                                                  activities: m,
                                                  voiceChannel: _,
                                                  applicationStream: T,
                                                  animateEmoji: ei || er || eo,
                                                  textClassName: Z.XD,
                                                  iconClassName: ej ? Z.tG : void 0,
                                              })
                                            : null,
                                    name: (0, n.jsx)(E.A, { className: a()(Z.uN, { [Z.e8]: ez }), children: eq }),
                                    decorators: t.isSystemDM()
                                        ? (0, n.jsx)(C.A, { className: Z.G$, type: C.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: ez,
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: a()(Z._q, { [Z.EY]: eb }),
                                children: [
                                    ey && !eo ? (0, n.jsx)(es, {}) : null,
                                    ev ? (0, n.jsx)(en, {}) : null,
                                    eg ? (0, n.jsx)(el, {}) : null,
                                    (0, n.jsx)(et, {
                                        icon: p.PGe,
                                        "aria-label": ef ? J.intl.string(J.t["26C4oi"]) : J.intl.string(J.t.jsvgc3),
                                        onClick: ef ? eV : eG,
                                        onMouseDown: ew,
                                        nameplate: z,
                                        reducedClickTarget: !0,
                                        visibleElementRef: eL,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
        },
    });
}
let er =
    21552 == s.j
        ? (e) => {
              let { channel: t, selected: s, ...l } = e,
                  i = (0, A.bG)([W.default], () => W.default.getUser(t.getRecipientId())),
                  a = i?.id,
                  r = (0, A.cf)([k.A, V.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let s = k.A.getState().statuses;
                          t.recipients.some((e) => s[e] === $.clD.ONLINE) && (e = $.clD.ONLINE);
                      } else null != a && (e = k.A.getStatus(a));
                      return {
                          status: e,
                          activities: null != a ? k.A.getActivities(a) : null,
                          applicationStream: null != a ? V.A.getAnyStreamForUser(a) : null,
                          isMobile: null != a && k.A.isMobileOnline(a),
                          isVR: null != a && k.A.isVROnline(a),
                      };
                  }, [t, a]),
                  { voiceActivityStatusEnabled: u } = (0, T.G)({ location: "PrivateChannel" }),
                  { voiceChannel: o } = (0, _.A)({ userId: a }),
                  c = (0, G.r)({ user: i }),
                  d = (0, A.bG)(
                      [W.default, z.A],
                      () =>
                          t.isMultiUserDM()
                              ? K.default
                                    .keys(z.A.getTypingUsers(t.id))
                                    .some((e) => e !== W.default.getCurrentUser()?.id)
                              : null != i && z.A.isTyping(t.id, t.getRecipientId()),
                      [t, i],
                  );
              return t.isMultiUserDM()
                  ? (0, n.jsx)(ea, {
                        channel: t,
                        selected: s,
                        isTyping: d,
                        status: r.status === $.clD.ONLINE ? $.clD.ONLINE : void 0,
                        ...l,
                    })
                  : (0, n.jsx)(ea, {
                        channel: t,
                        selected: s,
                        user: i,
                        voiceChannel: u ? o : void 0,
                        isTyping: d,
                        nameplate: c,
                        ...l,
                        ...r,
                    });
          }
        : null;

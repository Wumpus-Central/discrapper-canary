n.d(t, { Ay: () => er, th: () => ei, w_: () => et, z9: () => ea });
var l = n(627968),
    s = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(284009),
    o = n.n(r),
    u = n(758879),
    c = n(110259),
    d = n(837381),
    _ = n(607399),
    m = n(311907),
    p = n(3026),
    b = n(397927),
    A = n(308528),
    f = n(442433),
    x = n(960076),
    S = n(901517),
    E = n(397244),
    T = n(714114),
    g = n(729551),
    h = n(709066),
    C = n(262295),
    N = n(343328),
    v = n(963027),
    I = n(571694),
    j = n(47167),
    M = n(880714),
    y = n(824994),
    R = n(922301),
    L = n(750112),
    U = n(181079),
    Q = n(954376),
    D = n(534400),
    G = n(111864),
    w = n(967054),
    O = n(226540),
    B = n(227),
    P = n(854627),
    k = n(616356),
    F = n(290863),
    H = n(222823),
    q = n(994500),
    W = n(741961),
    V = n(543465),
    z = n(287809),
    Y = n(661191),
    $ = n(837921),
    K = n(652215),
    J = n(985018),
    X = n(45119);
let Z = $.Ay.getEnableHardwareAcceleration() ? b.JsQ : b.euF,
    ee = { offset: { top: 2, bottom: 2, right: 4 } },
    et = (e) => {
        let { nameplate: t, icon: n, forceShow: s = !1, reducedClickTarget: a = !1, visibleElementRef: r, ...o } = e,
            u = (0, w.K)(t);
        return (0, l.jsx)(b.DUT, {
            className: i()(X.b, { [X.DQ]: null != t, [X.by]: s, [X.wY]: a }),
            style: u,
            ...o,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, l.jsx)("div", {
                ref: r,
                className: i()({ [X.PJ]: null != t }),
                children: (0, l.jsx)(n, {
                    size: "sm",
                    color: "currentColor",
                    className: i()(X.ut, { [X.Uq]: null != t }),
                }),
            }),
        });
    },
    en = () => (0, l.jsx)(b.Gg5, { size: "xs", color: "currentColor", className: X.wB }),
    el = () => (0, l.jsx)(b.G3N, { size: "xs", color: "currentColor", className: X.wB }),
    es = () => (0, l.jsx)(b.KTN, { size: "xs", color: "currentColor", className: X.wB }),
    ea = (e) => {
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
            className: p,
            role: A,
            "aria-posinset": f,
            "aria-setsize": x,
            listItemRef: S,
            ...E
        } = e;
        return (0, l.jsx)(M.A, {
            className: i()(X.Ix, { [X.Ij]: _.Fr }, p),
            onClick: m,
            role: A,
            focusProps: { within: !0, ...ee },
            "aria-posinset": f,
            "aria-setsize": x,
            ref: S,
            children: (0, l.jsx)(b.HG8, {
                as: "div",
                selected: n,
                className: i()(r, X.bG, X.$J, { [X.Q2]: n }),
                children: (0, l.jsxs)(u.N_, {
                    to: { pathname: t, state: d },
                    className: X.nf,
                    ...E,
                    children: [
                        (0, l.jsx)(C.A, {
                            muted: !1,
                            avatar: (0, l.jsx)(s, {
                                size: "refresh_sm",
                                className: i()(X.e_, a),
                                color: "currentColor",
                            }),
                            name: o,
                            innerClassName: X.xx,
                        }),
                        c,
                    ],
                }),
            }),
        });
    };
function ei(e) {
    let {
            channel: t,
            selected: a = !1,
            user: r,
            activities: _,
            applicationStream: S,
            voiceChannel: T,
            isTyping: G,
            status: w,
            isMobile: k,
            isVR: F,
            nameplate: W,
            ref: z,
            "aria-posinset": Y,
            "aria-setsize": $,
        } = e,
        [ea, ei] = s.useState(!1),
        [er, eo] = s.useState(!1),
        [eu, ec] = s.useState(!1),
        ed = s.useRef(null),
        e_ = s.useRef(null),
        em = z ?? e_,
        {
            avatarSrc: ep,
            avatarDecorationSrc: eb,
            eventHandlers: eA,
        } = (0, P.A)({ userId: r?.id, size: b._3J.SIZE_32, animateOnHover: !(a || ea || er || eu) }),
        ef = t.isMultiUserDM(),
        ex = t.isSystemDM(),
        eS = !ef && !ex && t.type === K.rbe.DM,
        eE = eS && r?.primaryGuild != null,
        eT = (0, m.bG)([V.Ay], () => V.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eg, blocked: eh } = (0, m.cf)([q.A], () => ({
            ignored: q.A.isIgnored(t.getRecipientId()),
            blocked: q.A.isBlocked(t.getRecipientId()),
        })),
        eC = eS && eg,
        eN = eS && eh,
        ev = (eT || eC || eN) && !(a || ea),
        eI = (0, m.bG)([H.Ay], () => H.Ay.getMentionCount(t.id) > 0),
        ej = (0, j.Ay)(t),
        eM = (0, m.bG)([U.A], () => U.A.isFavorite(t.id)),
        ey = s.useRef(null),
        eR = null != W && (a || ea || eu),
        eL = () => {
            ei(!0);
        },
        eU = () => {
            ei(!1);
        },
        eQ = () => {
            eo(!0);
        },
        eD = () => {
            eo(!1);
        },
        eG = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), A.A.closePrivateChannel(t.id, a, n);
        },
        ew = () => {
            A.A.preload(K.ME, t.id);
        },
        eO = (e) => {
            e.stopPropagation();
        },
        eB = (e) => {
            e.target === e.currentTarget && ed.current?.click();
        },
        eP = (e) => {
            let s =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ec(!0),
                t.isMultiUserDM()
                    ? (0, f.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([n.e("97262"), n.e("99011"), n.e("60200")]).then(
                                  n.bind(n, 4027),
                              );
                              return (n) => (0, l.jsx)(e, { ...n, channel: t, selected: a });
                          },
                          { impressionName: s, noBlurEvent: !0, onClose: () => ec(!1) },
                      )
                    : (0, f.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("97262"),
                                  n.e("99011"),
                                  n.e("42128"),
                                  n.e("55150"),
                                  n.e("39778"),
                                  n.e("92617"),
                              ]).then(n.bind(n, 385913));
                              return (n) => (0, l.jsx)(e, { ...n, user: r, channel: t, channelSelected: a });
                          },
                          { impressionName: s, onClose: () => ec(!1) },
                      );
        },
        ek = (e) => {
            e.preventDefault(), e.stopPropagation();
            let s = J.intl.formatToPlainString(J.t.hJ5Ap4, { name: ej }),
                a = J.intl.format(J.t.SSIVOu, { name: ej });
            t.isManaged() &&
                ((s = J.intl.formatToPlainString(J.t.hVGjEW, { name: ej })),
                (a = J.intl.format(J.t.IK1Qvs, { name: ej }))),
                (0, b.mMO)(async () => {
                    let { default: e } = await n.e("37803").then(n.bind(n, 148166));
                    return (t) => (0, l.jsx)(e, { title: s, body: a, onSubmit: eG, ...t });
                });
        },
        eF = (0, l.jsx)(L.A, {
            userName: ej,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: ea || a || eu ? R.G.ANIMATED : R.G.PLAIN,
            loop: ea,
            boldFontOpacity: 0.9,
        }),
        eH = eE
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eF,
                      (0, l.jsx)(D.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: i()(X.fc, { [X.Y_]: ev }),
                      }),
                  ],
              })
            : eF,
        eq = s.useRef(null),
        eW = (0, y.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        eV = [(0, v.Ay)({ channel: t, unread: eI }), (0, v.r2)({ channel: t, muted: eT, userStatus: w })]
            .filter(Boolean)
            .join(", ");
    return (0, l.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: n, ...s } = e;
            return (0, l.jsxs)(M.A, {
                className: i()(X.Ix, X.dm),
                role: n,
                focusProps: { ...ee, focusTarget: ed, ringTarget: em },
                ref: em,
                onMouseEnter: eL,
                onMouseLeave: eU,
                onMouseDown: ew,
                onFocus: eQ,
                onBlur: eD,
                onContextMenu: eP,
                "aria-setsize": $,
                "aria-posinset": Y,
                children: [
                    eI ? (0, l.jsx)("div", { className: i()(X.dM, { [X.SU]: ev }) }) : null,
                    (0, l.jsxs)(b.HG8, {
                        className: i()(X.bG, { [X.Q2]: a || eu }),
                        as: "div",
                        onClick: eB,
                        muted: ev,
                        selected: a,
                        children: [
                            (0, l.jsx)(B.A, {
                                nameplate: eR ? W : void 0,
                                selected: a,
                                hovered: ea,
                                content: eq,
                                placement: O.u.CHANNEL,
                            }),
                            (0, l.jsx)(u.N_, {
                                innerRef: ed,
                                to: K.BVt.CHANNEL(K.ME, t.id),
                                className: X.nf,
                                "aria-label": eV,
                                ...s,
                                children: (0, l.jsx)(C.A, {
                                    ref: eq,
                                    avatar: (() => {
                                        let e = b._3J.SIZE_32;
                                        if (t.isMultiUserDM())
                                            if (t.recipients.length >= 2 && null == t.icon)
                                                return (0, l.jsx)(Q.A, {
                                                    "aria-hidden": !0,
                                                    recipients: t.recipients,
                                                    size: e,
                                                    isTyping: G,
                                                    status: w,
                                                });
                                            else
                                                return (0, l.jsx)(Z, {
                                                    ...eA,
                                                    src: (0, I.Y)(t),
                                                    "aria-hidden": !0,
                                                    size: e,
                                                    status: G ? K.clD.ONLINE : w,
                                                    isTyping: G,
                                                });
                                        o()(
                                            null != r,
                                            "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                        );
                                        let n = null;
                                        return (
                                            r.isSystemUser() || (n = (0, x.A)(_) ? K.clD.STREAMING : w),
                                            (0, l.jsx)(Z, {
                                                ...eA,
                                                size: b._3J.SIZE_32,
                                                src: ep,
                                                avatarDecoration: eb,
                                                status: n,
                                                isMobile: k,
                                                isVR: F,
                                                isTyping: G,
                                                "aria-label": r.username,
                                                statusTooltip: !0,
                                            })
                                        );
                                    })(),
                                    highlighted: eI && !ev,
                                    muted: ev,
                                    subText: t.isSystemDM()
                                        ? (0, l.jsx)("div", {
                                              className: X.W$,
                                              children: (0, N.A)(t.id)
                                                  ? J.intl.string(J.t.FL5T01)
                                                  : J.intl.string(J.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, l.jsx)("div", {
                                                className: X.W$,
                                                children: J.intl.format(J.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, E.A)({
                                                  activities: _,
                                                  status: w,
                                                  applicationStream: S,
                                                  voiceChannel: T,
                                              })
                                            ? (0, l.jsx)(g.A, {
                                                  user: r,
                                                  activities: _,
                                                  voiceChannel: T,
                                                  applicationStream: S,
                                                  animateEmoji: ea || er || eu,
                                                  textClassName: X.XD,
                                                  iconClassName: ev ? X.tG : void 0,
                                              })
                                            : null,
                                    name: (0, l.jsx)(p.A, { className: i()(X.uN, { [X.e8]: eW }), children: eH }),
                                    decorators: t.isSystemDM()
                                        ? (0, l.jsx)(h.A, { className: X.G$, type: h.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: eW,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: i()(X._q, { [X.EY]: eR }),
                                children: [
                                    eM && !eu ? (0, l.jsx)(en, {}) : null,
                                    eC ? (0, l.jsx)(el, {}) : null,
                                    eN ? (0, l.jsx)(es, {}) : null,
                                    (0, l.jsx)(et, {
                                        icon: b.PGe,
                                        "aria-label": ef ? J.intl.string(J.t["26C4oi"]) : J.intl.string(J.t.jsvgc3),
                                        onClick: ef ? ek : eG,
                                        onMouseDown: eO,
                                        nameplate: W,
                                        reducedClickTarget: !0,
                                        visibleElementRef: ey,
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
    21552 == n.j
        ? (e) => {
              let { channel: t, selected: n, ...s } = e,
                  a = (0, m.bG)([z.default], () => z.default.getUser(t.getRecipientId())),
                  i = a?.id,
                  r = (0, m.cf)([F.A, k.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = F.A.getState().statuses;
                          t.recipients.some((e) => n[e] === K.clD.ONLINE) && (e = K.clD.ONLINE);
                      } else null != i && (e = F.A.getStatus(i));
                      return {
                          status: e,
                          activities: null != i ? F.A.getActivities(i) : null,
                          applicationStream: null != i ? k.A.getAnyStreamForUser(i) : null,
                          isMobile: null != i && F.A.isMobileOnline(i),
                          isVR: null != i && F.A.isVROnline(i),
                      };
                  }, [t, i]),
                  { voiceActivityStatusEnabled: o } = (0, S.G)({ location: "PrivateChannel" }),
                  { voiceChannel: u } = (0, T.A)({ userId: i }),
                  c = (0, G.r)({ user: a }),
                  d = (0, m.bG)(
                      [z.default, W.A],
                      () =>
                          t.isMultiUserDM()
                              ? Y.default
                                    .keys(W.A.getTypingUsers(t.id))
                                    .some((e) => e !== z.default.getCurrentUser()?.id)
                              : null != a && W.A.isTyping(t.id, t.getRecipientId()),
                      [t, a],
                  );
              return t.isMultiUserDM()
                  ? (0, l.jsx)(ei, {
                        channel: t,
                        selected: n,
                        isTyping: d,
                        status: r.status === K.clD.ONLINE ? K.clD.ONLINE : void 0,
                        ...s,
                    })
                  : (0, l.jsx)(ei, {
                        channel: t,
                        selected: n,
                        user: a,
                        voiceChannel: o ? u : void 0,
                        isTyping: d,
                        nameplate: c,
                        ...s,
                        ...r,
                    });
          }
        : null;

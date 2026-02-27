l.d(t, { Ay: () => eu, th: () => er, w_: () => el, z9: () => ei });
var s = l(627968),
    n = l(64700),
    a = l(503698),
    i = l.n(a),
    r = l(284009),
    u = l.n(r),
    o = l(936504),
    c = l(110259),
    d = l(837381),
    m = l(607399),
    A = l(311907),
    p = l(3026),
    x = l(435371),
    E = l(397927),
    f = l(308528),
    h = l(442433),
    N = l(960076),
    S = l(397244),
    T = l(714114),
    C = l(729551),
    v = l(709066),
    _ = l(262295),
    g = l(343328),
    j = l(209581),
    y = l(963027),
    M = l(571694),
    I = l(47167),
    b = l(432222),
    L = l(880714),
    R = l(824994),
    U = l(922301),
    D = l(750112),
    Q = l(954376),
    w = l(534400),
    G = l(111864),
    O = l(967054),
    P = l(226540),
    F = l(227),
    k = l(854627),
    V = l(616356),
    q = l(290863),
    H = l(222823),
    z = l(994500),
    B = l(741961),
    W = l(543465),
    K = l(287809),
    Y = l(661191),
    $ = l(837921),
    J = l(652215),
    X = l(985018),
    Z = l(45119);
let ee = $.Ay.getEnableHardwareAcceleration() ? E.JsQ : E.euF,
    et = { offset: { top: 2, bottom: 2, right: 4 } },
    el = (e) => {
        let { nameplate: t, icon: l, forceShow: n = !1, reducedClickTarget: a = !1, visibleElementRef: r, ...u } = e,
            o = (0, O.K)(t);
        return (0, s.jsx)(E.DUT, {
            className: i()(Z.b, { [Z.DQ]: null != t, [Z.by]: n, [Z.wY]: a }),
            style: o,
            ...u,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, s.jsx)("div", {
                ref: r,
                className: i()({ [Z.PJ]: null != t }),
                children: (0, s.jsx)(l, {
                    size: "sm",
                    color: "currentColor",
                    className: i()(Z.ut, { [Z.Uq]: null != t }),
                }),
            }),
        });
    },
    es = (e) => {
        let { onClick: t, channelName: l, showNameplate: n } = e,
            { enabled: a } = j.A.useConfig({ location: "Wave CTA" });
        return a
            ? (0, s.jsx)("div", {
                  className: Z.KQ,
                  children: (0, s.jsx)(x.m_, {
                      text: X.intl.formatToPlainString(X.t.m0zYbV, { username: l }),
                      children: (0, s.jsx)(E.Button, {
                          size: "sm",
                          variant: n ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: X.intl.string(X.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    en = () => (0, s.jsx)(E.G3N, { size: "xs", color: "currentColor", className: Z.wB }),
    ea = () => (0, s.jsx)(E.KTN, { size: "xs", color: "currentColor", className: Z.wB }),
    ei = (e) => {
        let {
            route: t,
            selected: l,
            icon: n,
            iconClassName: a,
            interactiveClassName: r,
            text: u,
            children: c,
            locationState: d,
            onClick: A,
            className: p,
            role: x,
            "aria-posinset": f,
            "aria-setsize": h,
            listItemRef: N,
            ...S
        } = e;
        return (0, s.jsx)(L.A, {
            className: i()(Z.Ix, { [Z.Ij]: m.Fr }, p),
            onClick: A,
            role: x,
            focusProps: { within: !0, ...et },
            "aria-posinset": f,
            "aria-setsize": h,
            ref: N,
            children: (0, s.jsx)(E.HG8, {
                as: "div",
                selected: l,
                className: i()(r, Z.bG, Z.$J, { [Z.Q2]: l }),
                children: (0, s.jsxs)(o.N_, {
                    to: { pathname: t, state: d },
                    className: Z.nf,
                    ...S,
                    children: [
                        (0, s.jsx)(_.A, {
                            muted: !1,
                            avatar: (0, s.jsx)(n, {
                                size: "refresh_sm",
                                className: i()(Z.e_, a),
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
function er(e) {
    let {
            channel: t,
            selected: a = !1,
            user: r,
            activities: m,
            applicationStream: x,
            voiceChannel: T,
            isTyping: G,
            status: O,
            isMobile: V,
            isVR: q,
            nameplate: B,
            ref: K,
            "aria-posinset": Y,
            "aria-setsize": $,
        } = e,
        [ei, er] = n.useState(!1),
        [eu, eo] = n.useState(!1),
        [ec, ed] = n.useState(!1),
        em = n.useRef(null),
        eA = n.useRef(null),
        ep = K ?? eA,
        {
            avatarSrc: ex,
            avatarDecorationSrc: eE,
            eventHandlers: ef,
        } = (0, k.A)({ userId: r?.id, size: E._3J.SIZE_32, animateOnHover: !(a || ei || eu || ec) }),
        eh = t.isMultiUserDM(),
        eN = t.isSystemDM(),
        eS = !eh && !eN && t.type === J.rbe.DM,
        eT = eS && r?.primaryGuild != null,
        eC = (0, A.bG)([W.Ay], () => W.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: ev, blocked: e_ } = (0, A.cf)([z.A], () => ({
            ignored: z.A.isIgnored(t.getRecipientId()),
            blocked: z.A.isBlocked(t.getRecipientId()),
        })),
        eg = eS && ev,
        ej = eS && e_,
        ey = (eC || eg || ej) && !(a || ei),
        eM = (0, A.bG)([H.Ay], () => H.Ay.getMentionCount(t.id) > 0),
        eI = (0, I.Ay)(t),
        eb = n.useRef(null),
        eL = null != B && (a || ei || ec),
        eR = () => {
            er(!0);
        },
        eU = () => {
            er(!1);
        },
        eD = () => {
            eo(!0);
        },
        eQ = () => {
            eo(!1);
        },
        ew = function (e) {
            let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), f.A.closePrivateChannel(t.id, a, l);
        },
        eG = () => {
            f.A.preload(J.ME, t.id);
        },
        eO = (e) => {
            e.stopPropagation();
        },
        eP = (e) => {
            e.target === e.currentTarget && em.current?.click();
        },
        eF = (e) => {
            let n =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ed(!0),
                t.isMultiUserDM()
                    ? (0, h.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([l.e("97262"), l.e("60200")]).then(
                                  l.bind(l, 4027),
                              );
                              return (l) => (0, s.jsx)(e, { ...l, channel: t, selected: a });
                          },
                          { impressionName: n, noBlurEvent: !0, onClose: () => ed(!1) },
                      )
                    : (0, h.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  l.e("97262"),
                                  l.e("42128"),
                                  l.e("39778"),
                                  l.e("56890"),
                              ]).then(l.bind(l, 385913));
                              return (l) => (0, s.jsx)(e, { ...l, user: r, channel: t, channelSelected: a });
                          },
                          { impressionName: n, onClose: () => ed(!1) },
                      );
        },
        ek = (e) => {
            e.preventDefault(), e.stopPropagation();
            let n = X.intl.formatToPlainString(X.t.hJ5Ap4, { name: eI }),
                a = X.intl.format(X.t.SSIVOu, { name: eI });
            t.isManaged() &&
                ((n = X.intl.formatToPlainString(X.t.hVGjEW, { name: eI })),
                (a = X.intl.format(X.t.IK1Qvs, { name: eI }))),
                (0, E.mMO)(async () => {
                    let { default: e } = await l.e("37803").then(l.bind(l, 148166));
                    return (t) => (0, s.jsx)(e, { title: n, body: a, onSubmit: ew, ...t });
                });
        },
        eV = (0, s.jsx)(D.A, {
            userName: eI,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: ei || a || ec ? U.G.ANIMATED : U.G.PLAIN,
            loop: ei,
            boldFontOpacity: 0.9,
        }),
        eq = eT
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      eV,
                      (0, s.jsx)(w.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: i()(Z.fc, { [Z.Y_]: ey }),
                      }),
                  ],
              })
            : eV,
        eH = n.useRef(null),
        ez = (0, R.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        eB = [(0, y.Ay)({ channel: t, unread: eM }), (0, y.r2)({ channel: t, muted: eC, userStatus: O })]
            .filter(Boolean)
            .join(", "),
        eW = (0, A.bG)([H.Ay], () => H.Ay.lastMessageId(t.id)),
        { waveShouldShow: eK, wavePressed: eY } = (0, b.A)(t, eW),
        { showClose: e$ } = j.A.useConfig({ location: "PrivateChannel" });
    return (0, s.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: l, ...n } = e;
            return (0, s.jsxs)(L.A, {
                className: i()(Z.Ix, Z.dm),
                role: l,
                focusProps: { ...et, focusTarget: em, ringTarget: ep },
                ref: ep,
                onMouseEnter: eR,
                onMouseLeave: eU,
                onMouseDown: eG,
                onFocus: eD,
                onBlur: eQ,
                onContextMenu: eF,
                "aria-setsize": $,
                "aria-posinset": Y,
                children: [
                    eM ? (0, s.jsx)("div", { className: i()(Z.dM, { [Z.SU]: ey }) }) : null,
                    (0, s.jsxs)(E.HG8, {
                        className: i()(Z.bG, { [Z.Q2]: a || ec }),
                        as: "div",
                        onClick: eP,
                        muted: ey,
                        selected: a,
                        children: [
                            (0, s.jsx)(F.A, {
                                nameplate: eL ? B : void 0,
                                selected: a,
                                hovered: ei,
                                content: eH,
                                placement: P.u.CHANNEL,
                            }),
                            (0, s.jsx)(o.N_, {
                                innerRef: em,
                                to: J.BVt.CHANNEL(J.ME, t.id),
                                className: Z.nf,
                                "aria-label": eB,
                                ...n,
                                children: (0, s.jsx)(_.A, {
                                    ref: eH,
                                    avatar: (() => {
                                        let e = E._3J.SIZE_32;
                                        if (t.isMultiUserDM())
                                            if (t.recipients.length >= 2 && null == t.icon)
                                                return (0, s.jsx)(Q.A, {
                                                    "aria-hidden": !0,
                                                    recipients: t.recipients,
                                                    size: e,
                                                    isTyping: G,
                                                    status: O,
                                                });
                                            else
                                                return (0, s.jsx)(ee, {
                                                    ...ef,
                                                    src: (0, M.Y)(t),
                                                    "aria-hidden": !0,
                                                    size: e,
                                                    status: G ? J.clD.ONLINE : O,
                                                    isTyping: G,
                                                });
                                        u()(
                                            null != r,
                                            "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                        );
                                        let l = null;
                                        return (
                                            r.isSystemUser() || (l = (0, N.A)(m) ? J.clD.STREAMING : O),
                                            (0, s.jsx)(ee, {
                                                ...ef,
                                                size: E._3J.SIZE_32,
                                                src: ex,
                                                avatarDecoration: eE,
                                                status: l,
                                                isMobile: V,
                                                isVR: q,
                                                isTyping: G,
                                                "aria-label": r.username,
                                                statusTooltip: !0,
                                            })
                                        );
                                    })(),
                                    highlighted: eM && !ey,
                                    muted: ey,
                                    subText: t.isSystemDM()
                                        ? (0, s.jsx)("div", {
                                              className: Z.W$,
                                              children: (0, g.A)(t.id)
                                                  ? X.intl.string(X.t.FL5T01)
                                                  : X.intl.string(X.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, s.jsx)("div", {
                                                className: Z.W$,
                                                children: X.intl.format(X.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, S.A)({
                                                  activities: m,
                                                  status: O,
                                                  applicationStream: x,
                                                  voiceChannel: T,
                                              })
                                            ? (0, s.jsx)(C.A, {
                                                  user: r,
                                                  activities: m,
                                                  voiceChannel: T,
                                                  applicationStream: x,
                                                  animateEmoji: ei || eu || ec,
                                                  textClassName: Z.XD,
                                                  iconClassName: ey ? Z.tG : void 0,
                                              })
                                            : null,
                                    name: (0, s.jsx)(p.A, { className: i()(Z.uN, { [Z.e8]: ez }), children: eq }),
                                    decorators: t.isSystemDM()
                                        ? (0, s.jsx)(v.A, { className: Z.G$, type: v.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: ez,
                                }),
                            }),
                            (0, s.jsxs)("div", {
                                className: i()(Z._q, { [Z.EY]: eL }),
                                children: [
                                    eg ? (0, s.jsx)(en, {}) : null,
                                    ej ? (0, s.jsx)(ea, {}) : null,
                                    eK && null != eI
                                        ? (0, s.jsx)(es, { channelName: eI, onClick: eY, showNameplate: eL })
                                        : null,
                                    e$ || !eK
                                        ? (0, s.jsx)(el, {
                                              icon: E.PGe,
                                              "aria-label": eh
                                                  ? X.intl.string(X.t["26C4oi"])
                                                  : X.intl.string(X.t.jsvgc3),
                                              onClick: eh ? ek : ew,
                                              onMouseDown: eO,
                                              nameplate: B,
                                              reducedClickTarget: !0,
                                              visibleElementRef: eb,
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            });
        },
    });
}
let eu =
    21552 == l.j
        ? (e) => {
              let { channel: t, selected: l, ...n } = e,
                  a = (0, A.bG)([K.default], () => K.default.getUser(t.getRecipientId())),
                  i = a?.id,
                  r = (0, A.cf)([q.A, V.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let l = q.A.getState().statuses;
                          t.recipients.some((e) => l[e] === J.clD.ONLINE) && (e = J.clD.ONLINE);
                      } else null != i && (e = q.A.getStatus(i));
                      return {
                          status: e,
                          activities: null != i ? q.A.getActivities(i) : null,
                          applicationStream: null != i ? V.A.getAnyStreamForUser(i) : null,
                          isMobile: null != i && q.A.isMobileOnline(i),
                          isVR: null != i && q.A.isVROnline(i),
                      };
                  }, [t, i]),
                  { voiceChannel: u } = (0, T.A)({ userId: i }),
                  o = (0, G.r)({ user: a }),
                  c = (0, A.bG)(
                      [K.default, B.A],
                      () =>
                          t.isMultiUserDM()
                              ? Y.default
                                    .keys(B.A.getTypingUsers(t.id))
                                    .some((e) => e !== K.default.getCurrentUser()?.id)
                              : null != a && B.A.isTyping(t.id, t.getRecipientId()),
                      [t, a],
                  );
              return t.isMultiUserDM()
                  ? (0, s.jsx)(er, {
                        channel: t,
                        selected: l,
                        isTyping: c,
                        status: r.status === J.clD.ONLINE ? J.clD.ONLINE : void 0,
                        ...n,
                    })
                  : (0, s.jsx)(er, {
                        channel: t,
                        selected: l,
                        user: a,
                        voiceChannel: u,
                        isTyping: c,
                        nameplate: o,
                        ...n,
                        ...r,
                    });
          }
        : null;

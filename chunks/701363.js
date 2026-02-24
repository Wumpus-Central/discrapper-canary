s.d(t, { Ay: () => eu, th: () => eo, w_: () => el, z9: () => er });
var l = s(627968),
    n = s(64700),
    a = s(503698),
    i = s.n(a),
    r = s(284009),
    o = s.n(r),
    u = s(936504),
    c = s(110259),
    d = s(837381),
    m = s(607399),
    A = s(311907),
    p = s(3026),
    x = s(435371),
    E = s(397927),
    f = s(308528),
    h = s(442433),
    N = s(960076),
    S = s(397244),
    T = s(714114),
    C = s(729551),
    v = s(709066),
    _ = s(262295),
    g = s(343328),
    j = s(209581),
    y = s(963027),
    M = s(571694),
    b = s(47167),
    I = s(432222),
    L = s(880714),
    R = s(824994),
    U = s(922301),
    w = s(750112),
    D = s(954376),
    Q = s(534400),
    G = s(111864),
    O = s(967054),
    P = s(226540),
    k = s(227),
    F = s(148355),
    V = s(854627),
    q = s(616356),
    z = s(290863),
    H = s(222823),
    B = s(994500),
    W = s(741961),
    K = s(543465),
    Y = s(287809),
    $ = s(661191),
    J = s(837921),
    X = s(652215),
    Z = s(985018),
    ee = s(477549);
let et = J.Ay.getEnableHardwareAcceleration() ? E.JsQ : E.euF,
    es = { offset: { top: 2, bottom: 2, right: 4 } },
    el = (e) => {
        let { nameplate: t, icon: s, forceShow: n = !1, reducedClickTarget: a = !1, visibleElementRef: r, ...o } = e,
            u = (0, O.K)(t);
        return (0, l.jsx)(E.DUT, {
            className: i()(ee.b, { [ee.DQ]: null != t, [ee.by]: n, [ee.wY]: a }),
            style: u,
            ...o,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, l.jsx)("div", {
                ref: r,
                className: i()({ [ee.PJ]: null != t }),
                children: (0, l.jsx)(s, {
                    size: "sm",
                    color: "currentColor",
                    className: i()(ee.ut, { [ee.Uq]: null != t }),
                }),
            }),
        });
    },
    en = (e) => {
        let { onClick: t, hovered: s, channelName: n, showNameplate: a } = e,
            { enabled: i, showSticker: r } = j.A.useConfig({ location: "Wave CTA" });
        return i
            ? (0, l.jsx)("div", {
                  className: ee.KQ,
                  children: (0, l.jsx)(x.m_, {
                      text: Z.intl.formatToPlainString(Z.t.m0zYbV, { username: n }),
                      children: r
                          ? (0, l.jsx)(E.Button, {
                                icon: {
                                    type: "sticker",
                                    asset: { id: I.w, format_type: 3, name: Z.intl.string(Z.t.n8nU4W) },
                                    component: (e) => {
                                        let { ...t } = e;
                                        return (0, l.jsx)(F.A, {
                                            ...t,
                                            disableAnimation: !s,
                                            size: 24,
                                            className: ee.BD,
                                        });
                                    },
                                },
                                text: Z.intl.string(Z.t.n8nU4W),
                                onClick: t,
                                variant: a ? "overlay-secondary" : "secondary",
                                size: "sm",
                            })
                          : (0, l.jsx)(E.Button, {
                                size: "sm",
                                variant: a ? "overlay-secondary" : "secondary",
                                onClick: t,
                                text: Z.intl.string(Z.t.pVlP58),
                            }),
                  }),
              })
            : null;
    },
    ea = () => (0, l.jsx)(E.G3N, { size: "xs", color: "currentColor", className: ee.wB }),
    ei = () => (0, l.jsx)(E.KTN, { size: "xs", color: "currentColor", className: ee.wB }),
    er = (e) => {
        let {
            route: t,
            selected: s,
            icon: n,
            iconClassName: a,
            interactiveClassName: r,
            text: o,
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
        return (0, l.jsx)(L.A, {
            className: i()(ee.Ix, { [ee.Ij]: m.Fr }, p),
            onClick: A,
            role: x,
            focusProps: { within: !0, ...es },
            "aria-posinset": f,
            "aria-setsize": h,
            ref: N,
            children: (0, l.jsx)(E.HG8, {
                as: "div",
                selected: s,
                className: i()(r, ee.bG, ee.$J, { [ee.Q2]: s }),
                children: (0, l.jsxs)(u.N_, {
                    to: { pathname: t, state: d },
                    className: ee.nf,
                    ...S,
                    children: [
                        (0, l.jsx)(_.A, {
                            muted: !1,
                            avatar: (0, l.jsx)(n, {
                                size: "refresh_sm",
                                className: i()(ee.e_, a),
                                color: "currentColor",
                            }),
                            name: o,
                            innerClassName: ee.xx,
                        }),
                        c,
                    ],
                }),
            }),
        });
    };
function eo(e) {
    let {
            channel: t,
            selected: a = !1,
            user: r,
            activities: m,
            applicationStream: x,
            voiceChannel: T,
            isTyping: G,
            status: O,
            isMobile: F,
            isVR: q,
            nameplate: z,
            ref: W,
            "aria-posinset": Y,
            "aria-setsize": $,
        } = e,
        [J, er] = n.useState(!1),
        [eo, eu] = n.useState(!1),
        [ec, ed] = n.useState(!1),
        em = n.useRef(null),
        eA = n.useRef(null),
        ep = W ?? eA,
        {
            avatarSrc: ex,
            avatarDecorationSrc: eE,
            eventHandlers: ef,
        } = (0, V.A)({ userId: r?.id, size: E._3J.SIZE_32, animateOnHover: !(a || J || eo || ec) }),
        eh = t.isMultiUserDM(),
        eN = t.isSystemDM(),
        eS = !eh && !eN && t.type === X.rbe.DM,
        eT = eS && r?.primaryGuild != null,
        eC = (0, A.bG)([K.Ay], () => K.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: ev, blocked: e_ } = (0, A.cf)([B.A], () => ({
            ignored: B.A.isIgnored(t.getRecipientId()),
            blocked: B.A.isBlocked(t.getRecipientId()),
        })),
        eg = eS && ev,
        ej = eS && e_,
        ey = (eC || eg || ej) && !(a || J),
        eM = (0, A.bG)([H.Ay], () => H.Ay.getMentionCount(t.id) > 0),
        eb = (0, b.Ay)(t),
        eI = n.useRef(null),
        eL = null != z && (a || J || ec),
        eR = () => {
            er(!0);
        },
        eU = () => {
            er(!1);
        },
        ew = () => {
            eu(!0);
        },
        eD = () => {
            eu(!1);
        },
        eQ = function (e) {
            let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), f.A.closePrivateChannel(t.id, a, s);
        },
        eG = () => {
            f.A.preload(X.ME, t.id);
        },
        eO = (e) => {
            e.stopPropagation();
        },
        eP = (e) => {
            e.target === e.currentTarget && em.current?.click();
        },
        ek = (e) => {
            let n =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ed(!0),
                t.isMultiUserDM()
                    ? (0, h.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([s.e("97262"), s.e("60200")]).then(
                                  s.bind(s, 4027),
                              );
                              return (s) => (0, l.jsx)(e, { ...s, channel: t, selected: a });
                          },
                          { impressionName: n, noBlurEvent: !0, onClose: () => ed(!1) },
                      )
                    : (0, h.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  s.e("97262"),
                                  s.e("42128"),
                                  s.e("39778"),
                                  s.e("54651"),
                              ]).then(s.bind(s, 385913));
                              return (s) => (0, l.jsx)(e, { ...s, user: r, channel: t, channelSelected: a });
                          },
                          { impressionName: n, onClose: () => ed(!1) },
                      );
        },
        eF = (e) => {
            e.preventDefault(), e.stopPropagation();
            let n = Z.intl.formatToPlainString(Z.t.hJ5Ap4, { name: eb }),
                a = Z.intl.format(Z.t.SSIVOu, { name: eb });
            t.isManaged() &&
                ((n = Z.intl.formatToPlainString(Z.t.hVGjEW, { name: eb })),
                (a = Z.intl.format(Z.t.IK1Qvs, { name: eb }))),
                (0, E.mMO)(async () => {
                    let { default: e } = await s.e("37803").then(s.bind(s, 148166));
                    return (t) => (0, l.jsx)(e, { title: n, body: a, onSubmit: eQ, ...t });
                });
        },
        eV = (0, l.jsx)(w.A, {
            userName: eb,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: J || a || ec ? U.G.ANIMATED : U.G.PLAIN,
            loop: J,
            boldFontOpacity: 0.9,
        }),
        eq = eT
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eV,
                      (0, l.jsx)(Q.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: i()(ee.fc, { [ee.Y_]: ey }),
                      }),
                  ],
              })
            : eV,
        ez = n.useRef(null),
        eH = (0, R.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        eB = [(0, y.Ay)({ channel: t, unread: eM }), (0, y.r2)({ channel: t, muted: eC, userStatus: O })]
            .filter(Boolean)
            .join(", "),
        eW = (0, A.bG)([H.Ay], () => H.Ay.lastMessageId(t.id)),
        { waveShouldShow: eK, wavePressed: eY } = (0, I.A)(t, eW),
        { showClose: e$ } = j.A.useConfig({ location: "PrivateChannel" });
    return (0, l.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: s, ...n } = e;
            return (0, l.jsxs)(L.A, {
                className: i()(ee.Ix, ee.dm),
                role: s,
                focusProps: { ...es, focusTarget: em, ringTarget: ep },
                ref: ep,
                onMouseEnter: eR,
                onMouseLeave: eU,
                onMouseDown: eG,
                onFocus: ew,
                onBlur: eD,
                onContextMenu: ek,
                "aria-setsize": $,
                "aria-posinset": Y,
                children: [
                    eM ? (0, l.jsx)("div", { className: i()(ee.dM, { [ee.SU]: ey }) }) : null,
                    (0, l.jsxs)(E.HG8, {
                        className: i()(ee.bG, { [ee.Q2]: a || ec }),
                        as: "div",
                        onClick: eP,
                        muted: ey,
                        selected: a,
                        children: [
                            (0, l.jsx)(k.A, {
                                nameplate: eL ? z : void 0,
                                selected: a,
                                hovered: J,
                                content: ez,
                                placement: P.u.CHANNEL,
                            }),
                            (0, l.jsx)(u.N_, {
                                innerRef: em,
                                to: X.BVt.CHANNEL(X.ME, t.id),
                                className: ee.nf,
                                "aria-label": eB,
                                ...n,
                                children: (0, l.jsx)(_.A, {
                                    ref: ez,
                                    avatar: (() => {
                                        let e = E._3J.SIZE_32;
                                        if (t.isMultiUserDM())
                                            if (t.recipients.length >= 2 && null == t.icon)
                                                return (0, l.jsx)(D.A, {
                                                    "aria-hidden": !0,
                                                    recipients: t.recipients,
                                                    size: e,
                                                    isTyping: G,
                                                    status: O,
                                                });
                                            else
                                                return (0, l.jsx)(et, {
                                                    ...ef,
                                                    src: (0, M.Y)(t),
                                                    "aria-hidden": !0,
                                                    size: e,
                                                    status: G ? X.clD.ONLINE : O,
                                                    isTyping: G,
                                                });
                                        o()(
                                            null != r,
                                            "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                        );
                                        let s = null;
                                        return (
                                            r.isSystemUser() || (s = (0, N.A)(m) ? X.clD.STREAMING : O),
                                            (0, l.jsx)(et, {
                                                ...ef,
                                                size: E._3J.SIZE_32,
                                                src: ex,
                                                avatarDecoration: eE,
                                                status: s,
                                                isMobile: F,
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
                                        ? (0, l.jsx)("div", {
                                              className: ee.W$,
                                              children: (0, g.A)(t.id)
                                                  ? Z.intl.string(Z.t.FL5T01)
                                                  : Z.intl.string(Z.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, l.jsx)("div", {
                                                className: ee.W$,
                                                children: Z.intl.format(Z.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, S.A)({
                                                  activities: m,
                                                  status: O,
                                                  applicationStream: x,
                                                  voiceChannel: T,
                                              })
                                            ? (0, l.jsx)(C.A, {
                                                  user: r,
                                                  activities: m,
                                                  voiceChannel: T,
                                                  applicationStream: x,
                                                  animateEmoji: J || eo || ec,
                                                  textClassName: ee.XD,
                                                  iconClassName: ey ? ee.tG : void 0,
                                              })
                                            : null,
                                    name: (0, l.jsx)(p.A, { className: i()(ee.uN, { [ee.e8]: eH }), children: eq }),
                                    decorators: t.isSystemDM()
                                        ? (0, l.jsx)(v.A, { className: ee.G$, type: v.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: eH,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: i()(ee._q, { [ee.EY]: eL }),
                                children: [
                                    eg ? (0, l.jsx)(ea, {}) : null,
                                    ej ? (0, l.jsx)(ei, {}) : null,
                                    null != eb && eK
                                        ? (0, l.jsx)(en, {
                                              channelName: eb,
                                              onClick: eY,
                                              hovered: J,
                                              showNameplate: eL,
                                          })
                                        : null,
                                    e$ || !eK
                                        ? (0, l.jsx)(el, {
                                              icon: E.PGe,
                                              "aria-label": eh
                                                  ? Z.intl.string(Z.t["26C4oi"])
                                                  : Z.intl.string(Z.t.jsvgc3),
                                              onClick: eh ? eF : eQ,
                                              onMouseDown: eO,
                                              nameplate: z,
                                              reducedClickTarget: !0,
                                              visibleElementRef: eI,
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
    21552 == s.j
        ? (e) => {
              let { channel: t, selected: s, ...n } = e,
                  a = (0, A.bG)([Y.default], () => Y.default.getUser(t.getRecipientId())),
                  i = a?.id,
                  r = (0, A.cf)([z.A, q.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let s = z.A.getState().statuses;
                          t.recipients.some((e) => s[e] === X.clD.ONLINE) && (e = X.clD.ONLINE);
                      } else null != i && (e = z.A.getStatus(i));
                      return {
                          status: e,
                          activities: null != i ? z.A.getActivities(i) : null,
                          applicationStream: null != i ? q.A.getAnyStreamForUser(i) : null,
                          isMobile: null != i && z.A.isMobileOnline(i),
                          isVR: null != i && z.A.isVROnline(i),
                      };
                  }, [t, i]),
                  { voiceChannel: o } = (0, T.A)({ userId: i }),
                  u = (0, G.r)({ user: a }),
                  c = (0, A.bG)(
                      [Y.default, W.A],
                      () =>
                          t.isMultiUserDM()
                              ? $.default
                                    .keys(W.A.getTypingUsers(t.id))
                                    .some((e) => e !== Y.default.getCurrentUser()?.id)
                              : null != a && W.A.isTyping(t.id, t.getRecipientId()),
                      [t, a],
                  );
              return t.isMultiUserDM()
                  ? (0, l.jsx)(eo, {
                        channel: t,
                        selected: s,
                        isTyping: c,
                        status: r.status === X.clD.ONLINE ? X.clD.ONLINE : void 0,
                        ...n,
                    })
                  : (0, l.jsx)(eo, {
                        channel: t,
                        selected: s,
                        user: a,
                        voiceChannel: o,
                        isTyping: c,
                        nameplate: u,
                        ...n,
                        ...r,
                    });
          }
        : null;

l.d(t, { Ay: () => eu, th: () => eo, w_: () => en, z9: () => er });
var n = l(627968),
    s = l(64700),
    a = l(503698),
    i = l.n(a),
    r = l(284009),
    o = l.n(r),
    u = l(936504),
    c = l(110259),
    d = l(837381),
    m = l(607399),
    A = l(311907),
    p = l(3026),
    x = l(435371),
    E = l(397927),
    f = l(308528),
    h = l(442433),
    S = l(960076),
    N = l(397244),
    T = l(714114),
    C = l(729551),
    v = l(709066),
    _ = l(262295),
    g = l(343328),
    j = l(209581),
    y = l(963027),
    M = l(571694),
    b = l(47167),
    I = l(432222),
    L = l(880714),
    R = l(824994),
    U = l(922301),
    w = l(750112),
    D = l(954376),
    Q = l(534400),
    G = l(111864),
    O = l(967054),
    P = l(226540),
    k = l(227),
    F = l(148355),
    V = l(854627),
    q = l(616356),
    H = l(290863),
    z = l(222823),
    B = l(994500),
    W = l(741961),
    K = l(543465),
    Y = l(287809),
    $ = l(661191),
    J = l(837921),
    X = l(652215),
    Z = l(985018),
    ee = l(45119);
let et = J.Ay.getEnableHardwareAcceleration() ? E.JsQ : E.euF,
    el = { offset: { top: 2, bottom: 2, right: 4 } },
    en = (e) => {
        let { nameplate: t, icon: l, forceShow: s = !1, reducedClickTarget: a = !1, visibleElementRef: r, ...o } = e,
            u = (0, O.K)(t);
        return (0, n.jsx)(E.DUT, {
            className: i()(ee.b, { [ee.DQ]: null != t, [ee.by]: s, [ee.wY]: a }),
            style: u,
            ...o,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, n.jsx)("div", {
                ref: r,
                className: i()({ [ee.PJ]: null != t }),
                children: (0, n.jsx)(l, {
                    size: "sm",
                    color: "currentColor",
                    className: i()(ee.ut, { [ee.Uq]: null != t }),
                }),
            }),
        });
    },
    es = (e) => {
        let { onClick: t, hovered: l, channelName: s, showNameplate: a } = e,
            { enabled: i, showSticker: r } = j.A.useConfig({ location: "Wave CTA" });
        return i
            ? (0, n.jsx)("div", {
                  className: ee.KQ,
                  children: (0, n.jsx)(x.m_, {
                      text: Z.intl.formatToPlainString(Z.t.m0zYbV, { username: s }),
                      children: r
                          ? (0, n.jsx)(E.Button, {
                                icon: {
                                    type: "sticker",
                                    asset: { id: I.w, format_type: 3, name: Z.intl.string(Z.t.n8nU4W) },
                                    component: (e) => {
                                        let { ...t } = e;
                                        return (0, n.jsx)(F.A, { disableAnimation: !l, ...t });
                                    },
                                },
                                text: Z.intl.string(Z.t.n8nU4W),
                                onClick: t,
                                variant: a ? "overlay-secondary" : "secondary",
                                size: "sm",
                            })
                          : (0, n.jsx)(E.Button, {
                                size: "sm",
                                variant: a ? "overlay-secondary" : "secondary",
                                onClick: t,
                                text: Z.intl.string(Z.t.pVlP58),
                            }),
                  }),
              })
            : null;
    },
    ea = () => (0, n.jsx)(E.G3N, { size: "xs", color: "currentColor", className: ee.wB }),
    ei = () => (0, n.jsx)(E.KTN, { size: "xs", color: "currentColor", className: ee.wB }),
    er = (e) => {
        let {
            route: t,
            selected: l,
            icon: s,
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
            listItemRef: S,
            ...N
        } = e;
        return (0, n.jsx)(L.A, {
            className: i()(ee.Ix, { [ee.Ij]: m.Fr }, p),
            onClick: A,
            role: x,
            focusProps: { within: !0, ...el },
            "aria-posinset": f,
            "aria-setsize": h,
            ref: S,
            children: (0, n.jsx)(E.HG8, {
                as: "div",
                selected: l,
                className: i()(r, ee.bG, ee.$J, { [ee.Q2]: l }),
                children: (0, n.jsxs)(u.N_, {
                    to: { pathname: t, state: d },
                    className: ee.nf,
                    ...N,
                    children: [
                        (0, n.jsx)(_.A, {
                            muted: !1,
                            avatar: (0, n.jsx)(s, {
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
            nameplate: H,
            ref: W,
            "aria-posinset": Y,
            "aria-setsize": $,
        } = e,
        [J, er] = s.useState(!1),
        [eo, eu] = s.useState(!1),
        [ec, ed] = s.useState(!1),
        em = s.useRef(null),
        eA = s.useRef(null),
        ep = W ?? eA,
        {
            avatarSrc: ex,
            avatarDecorationSrc: eE,
            eventHandlers: ef,
        } = (0, V.A)({ userId: r?.id, size: E._3J.SIZE_32, animateOnHover: !(a || J || eo || ec) }),
        eh = t.isMultiUserDM(),
        eS = t.isSystemDM(),
        eN = !eh && !eS && t.type === X.rbe.DM,
        eT = eN && r?.primaryGuild != null,
        eC = (0, A.bG)([K.Ay], () => K.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: ev, blocked: e_ } = (0, A.cf)([B.A], () => ({
            ignored: B.A.isIgnored(t.getRecipientId()),
            blocked: B.A.isBlocked(t.getRecipientId()),
        })),
        eg = eN && ev,
        ej = eN && e_,
        ey = (eC || eg || ej) && !(a || J),
        eM = (0, A.bG)([z.Ay], () => z.Ay.getMentionCount(t.id) > 0),
        eb = (0, b.Ay)(t),
        eI = s.useRef(null),
        eL = null != H && (a || J || ec),
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
            let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), f.A.closePrivateChannel(t.id, a, l);
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
            let s =
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
                              return (l) => (0, n.jsx)(e, { ...l, channel: t, selected: a });
                          },
                          { impressionName: s, noBlurEvent: !0, onClose: () => ed(!1) },
                      )
                    : (0, h.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  l.e("97262"),
                                  l.e("42128"),
                                  l.e("39778"),
                                  l.e("61267"),
                              ]).then(l.bind(l, 385913));
                              return (l) => (0, n.jsx)(e, { ...l, user: r, channel: t, channelSelected: a });
                          },
                          { impressionName: s, onClose: () => ed(!1) },
                      );
        },
        eF = (e) => {
            e.preventDefault(), e.stopPropagation();
            let s = Z.intl.formatToPlainString(Z.t.hJ5Ap4, { name: eb }),
                a = Z.intl.format(Z.t.SSIVOu, { name: eb });
            t.isManaged() &&
                ((s = Z.intl.formatToPlainString(Z.t.hVGjEW, { name: eb })),
                (a = Z.intl.format(Z.t.IK1Qvs, { name: eb }))),
                (0, E.mMO)(async () => {
                    let { default: e } = await l.e("37803").then(l.bind(l, 148166));
                    return (t) => (0, n.jsx)(e, { title: s, body: a, onSubmit: eQ, ...t });
                });
        },
        eV = (0, n.jsx)(w.A, {
            userName: eb,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: J || a || ec ? U.G.ANIMATED : U.G.PLAIN,
            loop: J,
            boldFontOpacity: 0.9,
        }),
        eq = eT
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      eV,
                      (0, n.jsx)(Q.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: i()(ee.fc, { [ee.Y_]: ey }),
                      }),
                  ],
              })
            : eV,
        eH = s.useRef(null),
        ez = (0, R.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        eB = [(0, y.Ay)({ channel: t, unread: eM }), (0, y.r2)({ channel: t, muted: eC, userStatus: O })]
            .filter(Boolean)
            .join(", "),
        eW = (0, A.bG)([z.Ay], () => z.Ay.lastMessageId(t.id)),
        { waveShouldShow: eK, wavePressed: eY } = (0, I.A)(t, eW),
        { showClose: e$ } = j.A.useConfig({ location: "PrivateChannel" });
    return (0, n.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: l, ...s } = e;
            return (0, n.jsxs)(L.A, {
                className: i()(ee.Ix, ee.dm),
                role: l,
                focusProps: { ...el, focusTarget: em, ringTarget: ep },
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
                    eM ? (0, n.jsx)("div", { className: i()(ee.dM, { [ee.SU]: ey }) }) : null,
                    (0, n.jsxs)(E.HG8, {
                        className: i()(ee.bG, { [ee.Q2]: a || ec }),
                        as: "div",
                        onClick: eP,
                        muted: ey,
                        selected: a,
                        children: [
                            (0, n.jsx)(k.A, {
                                nameplate: eL ? H : void 0,
                                selected: a,
                                hovered: J,
                                content: eH,
                                placement: P.u.CHANNEL,
                            }),
                            (0, n.jsx)(u.N_, {
                                innerRef: em,
                                to: X.BVt.CHANNEL(X.ME, t.id),
                                className: ee.nf,
                                "aria-label": eB,
                                ...s,
                                children: (0, n.jsx)(_.A, {
                                    ref: eH,
                                    avatar: (() => {
                                        let e = E._3J.SIZE_32;
                                        if (t.isMultiUserDM())
                                            if (t.recipients.length >= 2 && null == t.icon)
                                                return (0, n.jsx)(D.A, {
                                                    "aria-hidden": !0,
                                                    recipients: t.recipients,
                                                    size: e,
                                                    isTyping: G,
                                                    status: O,
                                                });
                                            else
                                                return (0, n.jsx)(et, {
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
                                        let l = null;
                                        return (
                                            r.isSystemUser() || (l = (0, S.A)(m) ? X.clD.STREAMING : O),
                                            (0, n.jsx)(et, {
                                                ...ef,
                                                size: E._3J.SIZE_32,
                                                src: ex,
                                                avatarDecoration: eE,
                                                status: l,
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
                                        ? (0, n.jsx)("div", {
                                              className: ee.W$,
                                              children: (0, g.A)(t.id)
                                                  ? Z.intl.string(Z.t.FL5T01)
                                                  : Z.intl.string(Z.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, n.jsx)("div", {
                                                className: ee.W$,
                                                children: Z.intl.format(Z.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, N.A)({
                                                  activities: m,
                                                  status: O,
                                                  applicationStream: x,
                                                  voiceChannel: T,
                                              })
                                            ? (0, n.jsx)(C.A, {
                                                  user: r,
                                                  activities: m,
                                                  voiceChannel: T,
                                                  applicationStream: x,
                                                  animateEmoji: J || eo || ec,
                                                  textClassName: ee.XD,
                                                  iconClassName: ey ? ee.tG : void 0,
                                              })
                                            : null,
                                    name: (0, n.jsx)(p.A, { className: i()(ee.uN, { [ee.e8]: ez }), children: eq }),
                                    decorators: t.isSystemDM()
                                        ? (0, n.jsx)(v.A, { className: ee.G$, type: v.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: ez,
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: i()(ee._q, { [ee.EY]: eL }),
                                children: [
                                    eg ? (0, n.jsx)(ea, {}) : null,
                                    ej ? (0, n.jsx)(ei, {}) : null,
                                    null != eb && eK
                                        ? (0, n.jsx)(es, {
                                              channelName: eb,
                                              onClick: eY,
                                              hovered: J,
                                              showNameplate: eL,
                                          })
                                        : null,
                                    e$ || !eK
                                        ? (0, n.jsx)(en, {
                                              icon: E.PGe,
                                              "aria-label": eh
                                                  ? Z.intl.string(Z.t["26C4oi"])
                                                  : Z.intl.string(Z.t.jsvgc3),
                                              onClick: eh ? eF : eQ,
                                              onMouseDown: eO,
                                              nameplate: H,
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
    21552 == l.j
        ? (e) => {
              let { channel: t, selected: l, ...s } = e,
                  a = (0, A.bG)([Y.default], () => Y.default.getUser(t.getRecipientId())),
                  i = a?.id,
                  r = (0, A.cf)([H.A, q.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let l = H.A.getState().statuses;
                          t.recipients.some((e) => l[e] === X.clD.ONLINE) && (e = X.clD.ONLINE);
                      } else null != i && (e = H.A.getStatus(i));
                      return {
                          status: e,
                          activities: null != i ? H.A.getActivities(i) : null,
                          applicationStream: null != i ? q.A.getAnyStreamForUser(i) : null,
                          isMobile: null != i && H.A.isMobileOnline(i),
                          isVR: null != i && H.A.isVROnline(i),
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
                  ? (0, n.jsx)(eo, {
                        channel: t,
                        selected: l,
                        isTyping: c,
                        status: r.status === X.clD.ONLINE ? X.clD.ONLINE : void 0,
                        ...s,
                    })
                  : (0, n.jsx)(eo, {
                        channel: t,
                        selected: l,
                        user: a,
                        voiceChannel: o,
                        isTyping: c,
                        nameplate: u,
                        ...s,
                        ...r,
                    });
          }
        : null;

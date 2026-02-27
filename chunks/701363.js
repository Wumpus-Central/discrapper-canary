l.d(t, { Ay: () => ec, th: () => eo, w_: () => es, z9: () => eu });
var n = l(627968),
    s = l(64700),
    a = l(503698),
    i = l.n(a),
    r = l(284009),
    u = l.n(r),
    o = l(936504),
    c = l(110259),
    d = l(837381),
    m = l(535185),
    A = l(148839),
    p = l(607399),
    x = l(311907),
    f = l(3026),
    E = l(435371),
    h = l(397927),
    N = l(308528),
    S = l(442433),
    T = l(960076),
    C = l(397244),
    v = l(714114),
    g = l(729551),
    _ = l(709066),
    j = l(262295),
    y = l(343328),
    M = l(209581),
    I = l(963027),
    b = l(571694),
    L = l(47167),
    R = l(432222),
    U = l(880714),
    w = l(824994),
    D = l(922301),
    Q = l(750112),
    G = l(954376),
    O = l(534400),
    P = l(111864),
    F = l(967054),
    k = l(226540),
    V = l(227),
    q = l(854627),
    H = l(616356),
    z = l(290863),
    B = l(222823),
    W = l(994500),
    K = l(741961),
    Y = l(543465),
    $ = l(287809),
    J = l(661191),
    X = l(837921),
    Z = l(652215),
    ee = l(985018),
    et = l(45119);
let el = X.Ay.getEnableHardwareAcceleration() ? h.JsQ : h.euF,
    en = { offset: { top: 2, bottom: 2, right: 4 } },
    es = (e) => {
        let { nameplate: t, icon: l, forceShow: s = !1, reducedClickTarget: a = !1, visibleElementRef: r, ...u } = e,
            o = (0, F.K)(t);
        return (0, n.jsx)(h.DUT, {
            className: i()(et.b, { [et.DQ]: null != t, [et.by]: s, [et.wY]: a }),
            style: o,
            ...u,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, n.jsx)("div", {
                ref: r,
                className: i()({ [et.PJ]: null != t }),
                children: (0, n.jsx)(l, {
                    size: "sm",
                    color: "currentColor",
                    className: i()(et.ut, { [et.Uq]: null != t }),
                }),
            }),
        });
    },
    ea = (e) => {
        let { onClick: t, channelName: l, showNameplate: s } = e,
            { enabled: a } = M.A.useConfig({ location: "Wave CTA" });
        return a
            ? (0, n.jsx)("div", {
                  className: et.KQ,
                  children: (0, n.jsx)(E.m_, {
                      text: ee.intl.formatToPlainString(ee.t.m0zYbV, { username: l }),
                      children: (0, n.jsx)(h.Button, {
                          size: "sm",
                          variant: s ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: ee.intl.string(ee.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    ei = () => (0, n.jsx)(h.G3N, { size: "xs", color: "currentColor", className: et.wB }),
    er = () => (0, n.jsx)(h.KTN, { size: "xs", color: "currentColor", className: et.wB }),
    eu = (e) => {
        let {
            route: t,
            selected: l,
            icon: s,
            iconClassName: a,
            interactiveClassName: r,
            text: u,
            children: c,
            locationState: d,
            onClick: m,
            className: A,
            role: x,
            "aria-posinset": f,
            "aria-setsize": E,
            listItemRef: N,
            ...S
        } = e;
        return (0, n.jsx)(U.A, {
            className: i()(et.Ix, { [et.Ij]: p.Fr }, A),
            onClick: m,
            role: x,
            focusProps: { within: !0, ...en },
            "aria-posinset": f,
            "aria-setsize": E,
            ref: N,
            children: (0, n.jsx)(h.HG8, {
                as: "div",
                selected: l,
                className: i()(r, et.bG, et.$J, { [et.Q2]: l }),
                children: (0, n.jsxs)(o.N_, {
                    to: { pathname: t, state: d },
                    className: et.nf,
                    ...S,
                    children: [
                        (0, n.jsx)(j.A, {
                            muted: !1,
                            avatar: (0, n.jsx)(s, {
                                size: "refresh_sm",
                                className: i()(et.e_, a),
                                color: "currentColor",
                            }),
                            name: u,
                            innerClassName: et.xx,
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
            activities: p,
            applicationStream: E,
            voiceChannel: v,
            isTyping: P,
            status: F,
            isMobile: H,
            isVR: z,
            nameplate: K,
            ref: $,
            "aria-posinset": J,
            "aria-setsize": X,
        } = e,
        [eu, eo] = s.useState(!1),
        [ec, ed] = s.useState(!1),
        [em, eA] = s.useState(!1),
        ep = s.useRef(null),
        ex = s.useRef(null),
        ef = $ ?? ex,
        {
            avatarSrc: eE,
            avatarDecorationSrc: eh,
            eventHandlers: eN,
        } = (0, q.A)({ userId: r?.id, size: h._3J.SIZE_32, animateOnHover: !(a || eu || ec || em) }),
        [eS, eT] = s.useState({ maskImage: "none" }),
        eC = s.useRef(null),
        ev = t.isMultiUserDM(),
        eg = t.isSystemDM(),
        e_ = !ev && !eg && t.type === Z.rbe.DM,
        ej = e_ && r?.primaryGuild != null,
        ey = (0, x.bG)([Y.Ay], () => Y.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eM, blocked: eI } = (0, x.cf)([W.A], () => ({
            ignored: W.A.isIgnored(t.getRecipientId()),
            blocked: W.A.isBlocked(t.getRecipientId()),
        })),
        eb = e_ && eM,
        eL = e_ && eI,
        eR = (ey || eb || eL) && !(a || eu),
        eU = (0, x.bG)([B.Ay], () => B.Ay.getMentionCount(t.id) > 0),
        ew = (0, L.Ay)(t),
        eD = s.useRef(null),
        eQ = null != K && (a || eu || em),
        eG = () => {
            eo(!0);
        },
        eO = () => {
            eo(!1);
        },
        eP = () => {
            ed(!0);
        },
        eF = () => {
            ed(!1);
        },
        ek = function (e) {
            let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), N.A.closePrivateChannel(t.id, a, l);
        },
        eV = () => {
            N.A.preload(Z.ME, t.id);
        },
        eq = (e) => {
            e.stopPropagation();
        },
        eH = (e) => {
            e.target === e.currentTarget && ep.current?.click();
        },
        ez = (e) => {
            let s =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eA(!0),
                t.isMultiUserDM()
                    ? (0, S.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([l.e("97262"), l.e("60200")]).then(
                                  l.bind(l, 4027),
                              );
                              return (l) => (0, n.jsx)(e, { ...l, channel: t, selected: a });
                          },
                          { impressionName: s, noBlurEvent: !0, onClose: () => eA(!1) },
                      )
                    : (0, S.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  l.e("97262"),
                                  l.e("42128"),
                                  l.e("39778"),
                                  l.e("56890"),
                              ]).then(l.bind(l, 385913));
                              return (l) => (0, n.jsx)(e, { ...l, user: r, channel: t, channelSelected: a });
                          },
                          { impressionName: s, onClose: () => eA(!1) },
                      );
        },
        eB = (e) => {
            e.preventDefault(), e.stopPropagation();
            let s = ee.intl.formatToPlainString(ee.t.hJ5Ap4, { name: ew }),
                a = ee.intl.format(ee.t.SSIVOu, { name: ew });
            t.isManaged() &&
                ((s = ee.intl.formatToPlainString(ee.t.hVGjEW, { name: ew })),
                (a = ee.intl.format(ee.t.IK1Qvs, { name: ew }))),
                (0, h.mMO)(async () => {
                    let { default: e } = await l.e("37803").then(l.bind(l, 148166));
                    return (t) => (0, n.jsx)(e, { title: s, body: a, onSubmit: ek, ...t });
                });
        },
        eW = (0, n.jsx)(Q.A, {
            userName: ew,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: eu || a || em ? D.G.ANIMATED : D.G.PLAIN,
            loop: eu,
            boldFontOpacity: 0.9,
        }),
        eK = ej
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      eW,
                      (0, n.jsx)(O.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: i()(et.fc, { [et.Y_]: eR }),
                      }),
                  ],
              })
            : eW,
        eY = s.useRef(null),
        e$ = (0, w.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        eJ = [(0, I.Ay)({ channel: t, unread: eU }), (0, I.r2)({ channel: t, muted: ey, userStatus: F })]
            .filter(Boolean)
            .join(", "),
        eX = (0, x.bG)([B.Ay], () => B.Ay.lastMessageId(t.id)),
        { waveShouldShow: eZ, wavePressed: e0 } = (0, R.A)(t, eX),
        { showClose: e1 } = M.A.useConfig({ location: "PrivateChannel" }),
        e2 = (0, A.A)(() => {
            let e = eC.current?.getBoundingClientRect() ?? null,
                t = eY.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void eT({ maskImage: "none" });
            let l = t.width - 16;
            eT({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${l}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        s.useLayoutEffect(e2, [eu, e2]),
        (0, m.g)(ef, e2),
        (0, n.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: l, ...s } = e;
                return (0, n.jsxs)(U.A, {
                    className: i()(et.Ix, et.dm),
                    role: l,
                    focusProps: { ...en, focusTarget: ep, ringTarget: ef },
                    ref: ef,
                    onMouseEnter: eG,
                    onMouseLeave: eO,
                    onMouseDown: eV,
                    onFocus: eP,
                    onBlur: eF,
                    onContextMenu: ez,
                    "aria-setsize": X,
                    "aria-posinset": J,
                    children: [
                        eU ? (0, n.jsx)("div", { className: i()(et.dM, { [et.SU]: eR }) }) : null,
                        (0, n.jsxs)(h.HG8, {
                            className: i()(et.bG, { [et.Q2]: a || em }),
                            as: "div",
                            onClick: eH,
                            muted: eR,
                            selected: a,
                            children: [
                                (0, n.jsx)(V.A, {
                                    nameplate: eQ ? K : void 0,
                                    selected: a,
                                    hovered: eu,
                                    content: eY,
                                    placement: k.u.CHANNEL,
                                }),
                                (0, n.jsx)("div", { className: et.lU, ref: eC, children: eK }),
                                (0, n.jsx)(o.N_, {
                                    style: eS,
                                    innerRef: ep,
                                    to: Z.BVt.CHANNEL(Z.ME, t.id),
                                    className: et.nf,
                                    "aria-label": eJ,
                                    ...s,
                                    children: (0, n.jsx)(j.A, {
                                        ref: eY,
                                        avatar: (() => {
                                            let e = h._3J.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, n.jsx)(G.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: P,
                                                        status: F,
                                                    });
                                                else
                                                    return (0, n.jsx)(el, {
                                                        ...eN,
                                                        src: (0, b.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: P ? Z.clD.ONLINE : F,
                                                        isTyping: P,
                                                    });
                                            u()(
                                                null != r,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let l = null;
                                            return (
                                                r.isSystemUser() || (l = (0, T.A)(p) ? Z.clD.STREAMING : F),
                                                (0, n.jsx)(el, {
                                                    ...eN,
                                                    size: h._3J.SIZE_32,
                                                    src: eE,
                                                    avatarDecoration: eh,
                                                    status: l,
                                                    isMobile: H,
                                                    isVR: z,
                                                    isTyping: P,
                                                    "aria-label": r.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: eU && !eR,
                                        muted: eR,
                                        subText: t.isSystemDM()
                                            ? (0, n.jsx)("div", {
                                                  className: et.W$,
                                                  children: (0, y.A)(t.id)
                                                      ? ee.intl.string(ee.t.FL5T01)
                                                      : ee.intl.string(ee.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, n.jsx)("div", {
                                                    className: et.W$,
                                                    children: ee.intl.format(ee.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, C.A)({
                                                      activities: p,
                                                      status: F,
                                                      applicationStream: E,
                                                      voiceChannel: v,
                                                  })
                                                ? (0, n.jsx)(g.A, {
                                                      user: r,
                                                      activities: p,
                                                      voiceChannel: v,
                                                      applicationStream: E,
                                                      animateEmoji: eu || ec || em,
                                                      textClassName: et.XD,
                                                      iconClassName: eR ? et.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, n.jsx)(f.A, { className: i()(et.uN, { [et.e8]: e$ }), children: eK }),
                                        decorators: t.isSystemDM()
                                            ? (0, n.jsx)(_.A, {
                                                  className: et.G$,
                                                  type: _.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: e$,
                                    }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: i()(et._q, { [et.EY]: eQ }),
                                    children: [
                                        eb ? (0, n.jsx)(ei, {}) : null,
                                        eL ? (0, n.jsx)(er, {}) : null,
                                        eZ && null != ew
                                            ? (0, n.jsx)(ea, { channelName: ew, onClick: e0, showNameplate: eQ })
                                            : null,
                                        e1 || !eZ
                                            ? (0, n.jsx)(es, {
                                                  icon: h.PGe,
                                                  "aria-label": ev
                                                      ? ee.intl.string(ee.t["26C4oi"])
                                                      : ee.intl.string(ee.t.jsvgc3),
                                                  onClick: ev ? eB : ek,
                                                  onMouseDown: eq,
                                                  nameplate: K,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: eD,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        })
    );
}
let ec =
    21552 == l.j
        ? (e) => {
              let { channel: t, selected: l, ...s } = e,
                  a = (0, x.bG)([$.default], () => $.default.getUser(t.getRecipientId())),
                  i = a?.id,
                  r = (0, x.cf)([z.A, H.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let l = z.A.getState().statuses;
                          t.recipients.some((e) => l[e] === Z.clD.ONLINE) && (e = Z.clD.ONLINE);
                      } else null != i && (e = z.A.getStatus(i));
                      return {
                          status: e,
                          activities: null != i ? z.A.getActivities(i) : null,
                          applicationStream: null != i ? H.A.getAnyStreamForUser(i) : null,
                          isMobile: null != i && z.A.isMobileOnline(i),
                          isVR: null != i && z.A.isVROnline(i),
                      };
                  }, [t, i]),
                  { voiceChannel: u } = (0, v.A)({ userId: i }),
                  o = (0, P.r)({ user: a }),
                  c = (0, x.bG)(
                      [$.default, K.A],
                      () =>
                          t.isMultiUserDM()
                              ? J.default
                                    .keys(K.A.getTypingUsers(t.id))
                                    .some((e) => e !== $.default.getCurrentUser()?.id)
                              : null != a && K.A.isTyping(t.id, t.getRecipientId()),
                      [t, a],
                  );
              return t.isMultiUserDM()
                  ? (0, n.jsx)(eo, {
                        channel: t,
                        selected: l,
                        isTyping: c,
                        status: r.status === Z.clD.ONLINE ? Z.clD.ONLINE : void 0,
                        ...s,
                    })
                  : (0, n.jsx)(eo, {
                        channel: t,
                        selected: l,
                        user: a,
                        voiceChannel: u,
                        isTyping: c,
                        nameplate: o,
                        ...s,
                        ...r,
                    });
          }
        : null;

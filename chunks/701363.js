s.d(t, { Ay: () => em, th: () => ed, w_: () => ei, z9: () => ec });
var l = s(627968),
    n = s(64700),
    a = s(503698),
    i = s.n(a),
    r = s(284009),
    o = s.n(r),
    u = s(936504),
    c = s(110259),
    d = s(837381),
    m = s(535185),
    A = s(148839),
    p = s(607399),
    x = s(311907),
    h = s(3026),
    E = s(435371),
    f = s(397927),
    N = s(308528),
    S = s(442433),
    v = s(960076),
    T = s(397244),
    g = s(714114),
    _ = s(729551),
    C = s(709066),
    j = s(262295),
    M = s(343328),
    I = s(209581),
    y = s(963027),
    b = s(571694),
    R = s(47167),
    L = s(432222),
    U = s(880714),
    D = s(824994),
    w = s(922301),
    O = s(750112),
    G = s(570622),
    Q = s(414808),
    P = s(954376),
    k = s(534400),
    F = s(111864),
    V = s(967054),
    q = s(226540),
    B = s(227),
    z = s(854627),
    H = s(616356),
    W = s(290863),
    K = s(222823),
    $ = s(994500),
    Y = s(741961),
    J = s(543465),
    X = s(287809),
    Z = s(661191),
    ee = s(837921),
    et = s(652215),
    es = s(985018),
    el = s(477549);
let en = ee.Ay.getEnableHardwareAcceleration() ? f.JsQ : f.euF,
    ea = { offset: { top: 2, bottom: 2, right: 4 } },
    ei = (e) => {
        let { nameplate: t, icon: s, forceShow: n = !1, reducedClickTarget: a = !1, visibleElementRef: r, ...o } = e,
            u = (0, V.K)(t);
        return (0, l.jsx)(f.DUT, {
            className: i()(el.b, { [el.DQ]: null != t, [el.by]: n, [el.wY]: a }),
            style: u,
            ...o,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, l.jsx)("div", {
                ref: r,
                className: i()({ [el.PJ]: null != t }),
                children: (0, l.jsx)(s, {
                    size: "sm",
                    color: "currentColor",
                    className: i()(el.ut, { [el.Uq]: null != t }),
                }),
            }),
        });
    },
    er = (e) => {
        let { onClick: t, channelName: s, showNameplate: n } = e,
            { enabled: a } = I.A.useConfig({ location: "Wave CTA" });
        return a
            ? (0, l.jsx)("div", {
                  className: el.KQ,
                  children: (0, l.jsx)(E.m_, {
                      text: es.intl.formatToPlainString(es.t.m0zYbV, { username: s }),
                      children: (0, l.jsx)(f.Button, {
                          size: "sm",
                          variant: n ? "overlay-secondary" : "secondary",
                          onClick: t,
                          text: es.intl.string(es.t.pVlP58),
                      }),
                  }),
              })
            : null;
    },
    eo = () => (0, l.jsx)(f.G3N, { size: "xs", color: "currentColor", className: el.wB }),
    eu = () => (0, l.jsx)(f.KTN, { size: "xs", color: "currentColor", className: el.wB }),
    ec = (e) => {
        let {
            route: t,
            selected: s,
            icon: n,
            iconClassName: a,
            interactiveClassName: r,
            text: o,
            children: c,
            locationState: d,
            onClick: m,
            className: A,
            role: x,
            "aria-posinset": h,
            "aria-setsize": E,
            listItemRef: N,
            ...S
        } = e;
        return (0, l.jsx)(U.A, {
            className: i()(el.Ix, { [el.Ij]: p.Fr }, A),
            onClick: m,
            role: x,
            focusProps: { within: !0, ...ea },
            "aria-posinset": h,
            "aria-setsize": E,
            ref: N,
            children: (0, l.jsx)(f.HG8, {
                as: "div",
                selected: s,
                className: i()(r, el.bG, el.$J, { [el.Q2]: s }),
                children: (0, l.jsxs)(u.N_, {
                    to: { pathname: t, state: d },
                    className: el.nf,
                    ...S,
                    children: [
                        (0, l.jsx)(j.A, {
                            muted: !1,
                            avatar: (0, l.jsx)(n, {
                                size: "refresh_sm",
                                className: i()(el.e_, a),
                                color: "currentColor",
                            }),
                            name: o,
                            innerClassName: el.xx,
                        }),
                        c,
                    ],
                }),
            }),
        });
    };
function ed(e) {
    let {
            channel: t,
            selected: a = !1,
            user: r,
            activities: p,
            applicationStream: E,
            voiceChannel: g,
            isTyping: G,
            status: F,
            isMobile: V,
            isVR: H,
            nameplate: W,
            showMenuItemPopover: Y,
            markMenuItemPopoverAsDismissed: X,
            isPremium: Z,
            ref: ee,
            "aria-posinset": ec,
            "aria-setsize": ed,
        } = e,
        [em, eA] = n.useState(!1),
        [ep, ex] = n.useState(!1),
        [eh, eE] = n.useState(!1),
        ef = n.useRef(null),
        eN = n.useRef(null),
        eS = ee ?? eN,
        {
            avatarSrc: ev,
            avatarDecorationSrc: eT,
            eventHandlers: eg,
        } = (0, z.A)({ userId: r?.id, size: f._3J.SIZE_32, animateOnHover: !(a || em || ep || eh) }),
        [e_, eC] = n.useState({ maskImage: "none" }),
        ej = n.useRef(null),
        eM = t.isMultiUserDM(),
        eI = t.isSystemDM(),
        ey = !eM && !eI && t.type === et.rbe.DM,
        eb = ey && r?.primaryGuild != null,
        eR = (0, x.bG)([J.Ay], () => J.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eL, blocked: eU } = (0, x.cf)([$.A], () => ({
            ignored: $.A.isIgnored(t.getRecipientId()),
            blocked: $.A.isBlocked(t.getRecipientId()),
        })),
        eD = ey && eL,
        ew = ey && eU,
        eO = (eR || eD || ew) && !(a || em),
        eG = (0, x.bG)([K.Ay], () => K.Ay.getMentionCount(t.id) > 0),
        eQ = (0, R.Ay)(t),
        eP = n.useRef(null),
        ek = null != W && (a || em || eh),
        eF = () => {
            eA(!0);
        },
        eV = () => {
            eA(!1);
        },
        eq = () => {
            ex(!0);
        },
        eB = () => {
            ex(!1);
        },
        ez = function (e) {
            let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), N.A.closePrivateChannel(t.id, a, s);
        },
        eH = () => {
            N.A.preload(et.ME, t.id);
        },
        eW = (e) => {
            e.stopPropagation();
        },
        eK = (e) => {
            e.target === e.currentTarget && ef.current?.click();
        },
        e$ = (e) => {
            let n =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eE(!0),
                t.isMultiUserDM()
                    ? (0, S.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([s.e("97262"), s.e("60200")]).then(
                                  s.bind(s, 4027),
                              );
                              return (s) => (0, l.jsx)(e, { ...s, channel: t, selected: a });
                          },
                          { impressionName: n, noBlurEvent: !0, onClose: () => eE(!1) },
                      )
                    : (0, S.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  s.e("97262"),
                                  s.e("42128"),
                                  s.e("39778"),
                                  s.e("22128"),
                              ]).then(s.bind(s, 385913));
                              return (s) => (0, l.jsx)(e, { ...s, user: r, channel: t, channelSelected: a });
                          },
                          { impressionName: n, onClose: () => eE(!1) },
                      );
        },
        eY = (e) => {
            e.preventDefault(), e.stopPropagation();
            let n = es.intl.formatToPlainString(es.t.hJ5Ap4, { name: eQ }),
                a = es.intl.format(es.t.SSIVOu, { name: eQ });
            t.isManaged() &&
                ((n = es.intl.formatToPlainString(es.t.hVGjEW, { name: eQ })),
                (a = es.intl.format(es.t.IK1Qvs, { name: eQ }))),
                (0, f.mMO)(async () => {
                    let { default: e } = await s.e("37803").then(s.bind(s, 148166));
                    return (t) => (0, l.jsx)(e, { title: n, body: a, onSubmit: ez, ...t });
                });
        },
        eJ = (0, l.jsx)(O.A, {
            userName: eQ,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: em || a || eh ? w.G.ANIMATED : w.G.PLAIN,
            loop: em,
            boldFontOpacity: 0.9,
        }),
        eX = eb
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eJ,
                      (0, l.jsx)(k.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: i()(el.fc, { [el.Y_]: eO }),
                      }),
                  ],
              })
            : eJ,
        eZ = n.useRef(null),
        e0 = (0, D.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        e1 = [(0, y.Ay)({ channel: t, unread: eG }), (0, y.r2)({ channel: t, muted: eR, userStatus: F })]
            .filter(Boolean)
            .join(", "),
        e2 = (0, x.bG)([K.Ay], () => K.Ay.lastMessageId(t.id)),
        { waveShouldShow: e9, wavePressed: e6 } = (0, L.A)(t, e2),
        { showClose: e7 } = I.A.useConfig({ location: "PrivateChannel" }),
        e3 = (0, A.A)(() => {
            let e = ej.current?.getBoundingClientRect() ?? null,
                t = eZ.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0) return void eC({ maskImage: "none" });
            let s = t.width - 16;
            eC({
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${s}px, rgba(0, 0, 0, 0))`,
            });
        });
    return (
        n.useLayoutEffect(e3, [em, e3]),
        (0, m.g)(eS, e3),
        (0, l.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
                let { role: s, ...n } = e;
                return (0, l.jsxs)(U.A, {
                    className: i()(el.Ix, el.dm),
                    role: s,
                    focusProps: { ...ea, focusTarget: ef, ringTarget: eS },
                    ref: eS,
                    onMouseEnter: eF,
                    onMouseLeave: eV,
                    onMouseDown: eH,
                    onFocus: eq,
                    onBlur: eB,
                    onContextMenu: e$,
                    "aria-setsize": ed,
                    "aria-posinset": ec,
                    children: [
                        eG ? (0, l.jsx)("div", { className: i()(el.dM, { [el.SU]: eO }) }) : null,
                        (0, l.jsxs)(f.HG8, {
                            className: i()(el.bG, { [el.Q2]: a || eh }),
                            as: "div",
                            onClick: eK,
                            muted: eO,
                            selected: a,
                            children: [
                                (0, l.jsx)(B.A, {
                                    nameplate: ek ? W : void 0,
                                    selected: a,
                                    hovered: em,
                                    content: eZ,
                                    placement: q.u.CHANNEL,
                                }),
                                (0, l.jsx)("div", { className: el.lU, ref: ej, children: eX }),
                                (0, l.jsx)(u.N_, {
                                    style: e_,
                                    innerRef: ef,
                                    to: et.BVt.CHANNEL(et.ME, t.id),
                                    className: el.nf,
                                    "aria-label": e1,
                                    ...n,
                                    children: (0, l.jsx)(j.A, {
                                        ref: eZ,
                                        avatar: (() => {
                                            let e = f._3J.SIZE_32;
                                            if (t.isMultiUserDM())
                                                if (t.recipients.length >= 2 && null == t.icon)
                                                    return (0, l.jsx)(P.A, {
                                                        "aria-hidden": !0,
                                                        recipients: t.recipients,
                                                        size: e,
                                                        isTyping: G,
                                                        status: F,
                                                    });
                                                else
                                                    return (0, l.jsx)(en, {
                                                        ...eg,
                                                        src: (0, b.Y)(t),
                                                        "aria-hidden": !0,
                                                        size: e,
                                                        status: G ? et.clD.ONLINE : F,
                                                        isTyping: G,
                                                    });
                                            o()(
                                                null != r,
                                                "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                            );
                                            let s = null;
                                            return (
                                                r.isSystemUser() || (s = (0, v.A)(p) ? et.clD.STREAMING : F),
                                                (0, l.jsx)(en, {
                                                    ...eg,
                                                    size: f._3J.SIZE_32,
                                                    src: ev,
                                                    avatarDecoration: eT,
                                                    status: s,
                                                    isMobile: V,
                                                    isVR: H,
                                                    isTyping: G,
                                                    "aria-label": r.username,
                                                    statusTooltip: !0,
                                                })
                                            );
                                        })(),
                                        highlighted: eG && !eO,
                                        muted: eO,
                                        subText: t.isSystemDM()
                                            ? (0, l.jsx)("div", {
                                                  className: el.W$,
                                                  children: (0, M.A)(t.id)
                                                      ? es.intl.string(es.t.FL5T01)
                                                      : es.intl.string(es.t.NnY5lc),
                                              })
                                            : t.isMultiUserDM()
                                              ? (0, l.jsx)("div", {
                                                    className: el.W$,
                                                    children: es.intl.format(es.t.CxSA5N, {
                                                        members: t.recipients.length + 1,
                                                    }),
                                                })
                                              : (0, T.A)({
                                                      activities: p,
                                                      status: F,
                                                      applicationStream: E,
                                                      voiceChannel: g,
                                                  })
                                                ? (0, l.jsx)(_.A, {
                                                      user: r,
                                                      activities: p,
                                                      voiceChannel: g,
                                                      applicationStream: E,
                                                      animateEmoji: em || ep || eh,
                                                      textClassName: el.XD,
                                                      iconClassName: eO ? el.tG : void 0,
                                                  })
                                                : null,
                                        name: (0, l.jsx)(h.A, { className: i()(el.uN, { [el.e8]: e0 }), children: eX }),
                                        decorators: t.isSystemDM()
                                            ? (0, l.jsx)(C.A, {
                                                  className: el.G$,
                                                  type: C.A.Types.SYSTEM_DM,
                                                  verified: !0,
                                              })
                                            : null,
                                        withDisplayNameStyles: e0,
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: i()(el._q, { [el.EY]: ek }),
                                    children: [
                                        eD ? (0, l.jsx)(eo, {}) : null,
                                        ew ? (0, l.jsx)(eu, {}) : null,
                                        e9 && null != eQ
                                            ? (0, l.jsx)(er, { channelName: eQ, onClick: e6, showNameplate: ek })
                                            : null,
                                        e7 || !e9
                                            ? (0, l.jsx)(ei, {
                                                  icon: f.PGe,
                                                  "aria-label": eM
                                                      ? es.intl.string(es.t["26C4oi"])
                                                      : es.intl.string(es.t.jsvgc3),
                                                  onClick: eM ? eY : ez,
                                                  onMouseDown: eW,
                                                  nameplate: W,
                                                  reducedClickTarget: !0,
                                                  visibleElementRef: eP,
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                        Y &&
                            (0, l.jsx)(Q.A, {
                                targetElementRef: eS,
                                isPremium: Z ?? !1,
                                markMenuItemPopoverAsDismissed: X,
                            }),
                    ],
                });
            },
        })
    );
}
let em =
    21552 == s.j
        ? (e) => {
              let { channel: t, selected: s, ...n } = e,
                  {
                      showMenuItemPopover: a,
                      markMenuItemPopoverAsDismissed: i,
                      isPremium: r,
                  } = (0, G.z)({ location: "PrivateChannel", isChannelSelected: !0 === s, channelType: t.type }),
                  o = (0, x.bG)([X.default], () => X.default.getUser(t.getRecipientId())),
                  u = o?.id,
                  c = (0, x.cf)([W.A, H.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let s = W.A.getState().statuses;
                          t.recipients.some((e) => s[e] === et.clD.ONLINE) && (e = et.clD.ONLINE);
                      } else null != u && (e = W.A.getStatus(u));
                      return {
                          status: e,
                          activities: null != u ? W.A.getActivities(u) : null,
                          applicationStream: null != u ? H.A.getAnyStreamForUser(u) : null,
                          isMobile: null != u && W.A.isMobileOnline(u),
                          isVR: null != u && W.A.isVROnline(u),
                      };
                  }, [t, u]),
                  { voiceChannel: d } = (0, g.A)({ userId: u }),
                  m = (0, F.r)({ user: o }),
                  A = (0, x.bG)(
                      [X.default, Y.A],
                      () =>
                          t.isMultiUserDM()
                              ? Z.default
                                    .keys(Y.A.getTypingUsers(t.id))
                                    .some((e) => e !== X.default.getCurrentUser()?.id)
                              : null != o && Y.A.isTyping(t.id, t.getRecipientId()),
                      [t, o],
                  );
              return t.isMultiUserDM()
                  ? (0, l.jsx)(ed, {
                        channel: t,
                        selected: s,
                        isTyping: A,
                        status: c.status === et.clD.ONLINE ? et.clD.ONLINE : void 0,
                        showMenuItemPopover: a,
                        markMenuItemPopoverAsDismissed: i,
                        isPremium: r,
                        ...n,
                    })
                  : (0, l.jsx)(ed, {
                        channel: t,
                        selected: s,
                        user: o,
                        voiceChannel: d,
                        isTyping: A,
                        nameplate: m,
                        showMenuItemPopover: a,
                        markMenuItemPopoverAsDismissed: i,
                        isPremium: r,
                        ...n,
                        ...c,
                    });
          }
        : null;

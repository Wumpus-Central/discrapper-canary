l.d(t, { Ay: () => em, th: () => ed, w_: () => ei, z9: () => ec });
var s = l(627968),
    n = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(284009),
    o = l.n(r),
    u = l(936504),
    c = l(110259),
    d = l(837381),
    m = l(607399),
    A = l(311907),
    x = l(3026),
    p = l(435371),
    E = l(397927),
    f = l(308528),
    h = l(442433),
    S = l(960076),
    N = l(901517),
    T = l(397244),
    C = l(714114),
    v = l(729551),
    _ = l(709066),
    g = l(262295),
    j = l(343328),
    y = l(209581),
    M = l(963027),
    b = l(571694),
    I = l(47167),
    L = l(432222),
    R = l(880714),
    U = l(824994),
    w = l(922301),
    D = l(750112),
    G = l(181079),
    Q = l(954376),
    O = l(534400),
    P = l(111864),
    k = l(967054),
    F = l(226540),
    V = l(227),
    q = l(148355),
    z = l(854627),
    H = l(616356),
    B = l(290863),
    W = l(222823),
    K = l(994500),
    Y = l(741961),
    $ = l(543465),
    J = l(287809),
    X = l(661191),
    Z = l(837921),
    ee = l(652215),
    et = l(985018),
    el = l(45119);
let es = Z.Ay.getEnableHardwareAcceleration() ? E.JsQ : E.euF,
    en = { offset: { top: 2, bottom: 2, right: 4 } },
    ei = (e) => {
        let { nameplate: t, icon: l, forceShow: n = !1, reducedClickTarget: i = !1, visibleElementRef: r, ...o } = e,
            u = (0, k.K)(t);
        return (0, s.jsx)(E.DUT, {
            className: a()(el.b, { [el.DQ]: null != t, [el.by]: n, [el.wY]: i }),
            style: u,
            ...o,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, s.jsx)("div", {
                ref: r,
                className: a()({ [el.PJ]: null != t }),
                children: (0, s.jsx)(l, {
                    size: "sm",
                    color: "currentColor",
                    className: a()(el.ut, { [el.Uq]: null != t }),
                }),
            }),
        });
    },
    ea = (e) => {
        let { onClick: t, hovered: l, channelName: n } = e,
            { enabled: i, showSticker: a } = y.A.useConfig({ location: "Wave CTA" });
        return i
            ? (0, s.jsx)("div", {
                  className: el.KQ,
                  children: (0, s.jsx)(p.m_, {
                      text: et.intl.formatToPlainString(et.t.m0zYbV, { username: n }),
                      children: a
                          ? (0, s.jsx)(E.Button, {
                                icon: {
                                    type: "sticker",
                                    asset: { id: L.w, format_type: 3, name: et.intl.string(et.t.n8nU4W) },
                                    component: (e) => {
                                        let { ...t } = e;
                                        return (0, s.jsx)(q.A, { disableAnimation: !l, ...t });
                                    },
                                },
                                text: et.intl.string(et.t.n8nU4W),
                                onClick: t,
                                variant: "secondary",
                                size: "sm",
                            })
                          : (0, s.jsx)(E.Button, {
                                size: "sm",
                                variant: "secondary",
                                onClick: t,
                                text: et.intl.string(et.t.pVlP58),
                            }),
                  }),
              })
            : null;
    },
    er = () => (0, s.jsx)(E.Gg5, { size: "xs", color: "currentColor", className: el.wB }),
    eo = () => (0, s.jsx)(E.G3N, { size: "xs", color: "currentColor", className: el.wB }),
    eu = () => (0, s.jsx)(E.KTN, { size: "xs", color: "currentColor", className: el.wB }),
    ec = (e) => {
        let {
            route: t,
            selected: l,
            icon: n,
            iconClassName: i,
            interactiveClassName: r,
            text: o,
            children: c,
            locationState: d,
            onClick: A,
            className: x,
            role: p,
            "aria-posinset": f,
            "aria-setsize": h,
            listItemRef: S,
            ...N
        } = e;
        return (0, s.jsx)(R.A, {
            className: a()(el.Ix, { [el.Ij]: m.Fr }, x),
            onClick: A,
            role: p,
            focusProps: { within: !0, ...en },
            "aria-posinset": f,
            "aria-setsize": h,
            ref: S,
            children: (0, s.jsx)(E.HG8, {
                as: "div",
                selected: l,
                className: a()(r, el.bG, el.$J, { [el.Q2]: l }),
                children: (0, s.jsxs)(u.N_, {
                    to: { pathname: t, state: d },
                    className: el.nf,
                    ...N,
                    children: [
                        (0, s.jsx)(g.A, {
                            muted: !1,
                            avatar: (0, s.jsx)(n, {
                                size: "refresh_sm",
                                className: a()(el.e_, i),
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
            selected: i = !1,
            user: r,
            activities: m,
            applicationStream: p,
            voiceChannel: N,
            isTyping: C,
            status: P,
            isMobile: k,
            isVR: q,
            nameplate: H,
            ref: B,
            "aria-posinset": Y,
            "aria-setsize": J,
        } = e,
        [X, Z] = n.useState(!1),
        [ec, ed] = n.useState(!1),
        [em, eA] = n.useState(!1),
        ex = n.useRef(null),
        ep = n.useRef(null),
        eE = B ?? ep,
        {
            avatarSrc: ef,
            avatarDecorationSrc: eh,
            eventHandlers: eS,
        } = (0, z.A)({ userId: r?.id, size: E._3J.SIZE_32, animateOnHover: !(i || X || ec || em) }),
        eN = t.isMultiUserDM(),
        eT = t.isSystemDM(),
        eC = !eN && !eT && t.type === ee.rbe.DM,
        ev = eC && r?.primaryGuild != null,
        e_ = (0, A.bG)([$.Ay], () => $.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eg, blocked: ej } = (0, A.cf)([K.A], () => ({
            ignored: K.A.isIgnored(t.getRecipientId()),
            blocked: K.A.isBlocked(t.getRecipientId()),
        })),
        ey = eC && eg,
        eM = eC && ej,
        eb = (e_ || ey || eM) && !(i || X),
        eI = (0, A.bG)([W.Ay], () => W.Ay.getMentionCount(t.id) > 0),
        eL = (0, I.Ay)(t),
        eR = (0, A.bG)([G.A], () => G.A.isFavorite(t.id)),
        eU = n.useRef(null),
        ew = null != H && (i || X || em),
        eD = () => {
            Z(!0);
        },
        eG = () => {
            Z(!1);
        },
        eQ = () => {
            ed(!0);
        },
        eO = () => {
            ed(!1);
        },
        eP = function (e) {
            let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), f.A.closePrivateChannel(t.id, i, l);
        },
        ek = () => {
            f.A.preload(ee.ME, t.id);
        },
        eF = (e) => {
            e.stopPropagation();
        },
        eV = (e) => {
            e.target === e.currentTarget && ex.current?.click();
        },
        eq = (e) => {
            let n =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eA(!0),
                t.isMultiUserDM()
                    ? (0, h.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([l.e("97262"), l.e("60200")]).then(
                                  l.bind(l, 4027),
                              );
                              return (l) => (0, s.jsx)(e, { ...l, channel: t, selected: i });
                          },
                          { impressionName: n, noBlurEvent: !0, onClose: () => eA(!1) },
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
                              return (l) => (0, s.jsx)(e, { ...l, user: r, channel: t, channelSelected: i });
                          },
                          { impressionName: n, onClose: () => eA(!1) },
                      );
        },
        ez = (e) => {
            e.preventDefault(), e.stopPropagation();
            let n = et.intl.formatToPlainString(et.t.hJ5Ap4, { name: eL }),
                i = et.intl.format(et.t.SSIVOu, { name: eL });
            t.isManaged() &&
                ((n = et.intl.formatToPlainString(et.t.hVGjEW, { name: eL })),
                (i = et.intl.format(et.t.IK1Qvs, { name: eL }))),
                (0, E.mMO)(async () => {
                    let { default: e } = await l.e("37803").then(l.bind(l, 148166));
                    return (t) => (0, s.jsx)(e, { title: n, body: i, onSubmit: eP, ...t });
                });
        },
        eH = (0, s.jsx)(D.A, {
            userName: eL,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: X || i || em ? w.G.ANIMATED : w.G.PLAIN,
            loop: X,
            boldFontOpacity: 0.9,
        }),
        eB = ev
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      eH,
                      (0, s.jsx)(O.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(el.fc, { [el.Y_]: eb }),
                      }),
                  ],
              })
            : eH,
        eW = n.useRef(null),
        eK = (0, U.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        eY = [(0, M.Ay)({ channel: t, unread: eI }), (0, M.r2)({ channel: t, muted: e_, userStatus: P })]
            .filter(Boolean)
            .join(", "),
        e$ = (0, A.bG)([W.Ay], () => W.Ay.lastMessageId(t.id)),
        { waveShouldShow: eJ, wavePressed: eX } = (0, L.A)(t, e$),
        { showClose: eZ } = y.A.useConfig({ location: "PrivateChannel" });
    return (0, s.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: l, ...n } = e;
            return (0, s.jsxs)(R.A, {
                className: a()(el.Ix, el.dm),
                role: l,
                focusProps: { ...en, focusTarget: ex, ringTarget: eE },
                ref: eE,
                onMouseEnter: eD,
                onMouseLeave: eG,
                onMouseDown: ek,
                onFocus: eQ,
                onBlur: eO,
                onContextMenu: eq,
                "aria-setsize": J,
                "aria-posinset": Y,
                children: [
                    eI ? (0, s.jsx)("div", { className: a()(el.dM, { [el.SU]: eb }) }) : null,
                    (0, s.jsxs)(E.HG8, {
                        className: a()(el.bG, { [el.Q2]: i || em }),
                        as: "div",
                        onClick: eV,
                        muted: eb,
                        selected: i,
                        children: [
                            (0, s.jsx)(V.A, {
                                nameplate: ew ? H : void 0,
                                selected: i,
                                hovered: X,
                                content: eW,
                                placement: F.u.CHANNEL,
                            }),
                            (0, s.jsx)(u.N_, {
                                innerRef: ex,
                                to: ee.BVt.CHANNEL(ee.ME, t.id),
                                className: el.nf,
                                "aria-label": eY,
                                ...n,
                                children: (0, s.jsx)(g.A, {
                                    ref: eW,
                                    avatar: (() => {
                                        let e = E._3J.SIZE_32;
                                        if (t.isMultiUserDM())
                                            if (t.recipients.length >= 2 && null == t.icon)
                                                return (0, s.jsx)(Q.A, {
                                                    "aria-hidden": !0,
                                                    recipients: t.recipients,
                                                    size: e,
                                                    isTyping: C,
                                                    status: P,
                                                });
                                            else
                                                return (0, s.jsx)(es, {
                                                    ...eS,
                                                    src: (0, b.Y)(t),
                                                    "aria-hidden": !0,
                                                    size: e,
                                                    status: C ? ee.clD.ONLINE : P,
                                                    isTyping: C,
                                                });
                                        o()(
                                            null != r,
                                            "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                        );
                                        let l = null;
                                        return (
                                            r.isSystemUser() || (l = (0, S.A)(m) ? ee.clD.STREAMING : P),
                                            (0, s.jsx)(es, {
                                                ...eS,
                                                size: E._3J.SIZE_32,
                                                src: ef,
                                                avatarDecoration: eh,
                                                status: l,
                                                isMobile: k,
                                                isVR: q,
                                                isTyping: C,
                                                "aria-label": r.username,
                                                statusTooltip: !0,
                                            })
                                        );
                                    })(),
                                    highlighted: eI && !eb,
                                    muted: eb,
                                    subText: t.isSystemDM()
                                        ? (0, s.jsx)("div", {
                                              className: el.W$,
                                              children: (0, j.A)(t.id)
                                                  ? et.intl.string(et.t.FL5T01)
                                                  : et.intl.string(et.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, s.jsx)("div", {
                                                className: el.W$,
                                                children: et.intl.format(et.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, T.A)({
                                                  activities: m,
                                                  status: P,
                                                  applicationStream: p,
                                                  voiceChannel: N,
                                              })
                                            ? (0, s.jsx)(v.A, {
                                                  user: r,
                                                  activities: m,
                                                  voiceChannel: N,
                                                  applicationStream: p,
                                                  animateEmoji: X || ec || em,
                                                  textClassName: el.XD,
                                                  iconClassName: eb ? el.tG : void 0,
                                              })
                                            : null,
                                    name: (0, s.jsx)(x.A, { className: a()(el.uN, { [el.e8]: eK }), children: eB }),
                                    decorators: t.isSystemDM()
                                        ? (0, s.jsx)(_.A, { className: el.G$, type: _.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: eK,
                                }),
                            }),
                            (0, s.jsxs)("div", {
                                className: a()(el._q, { [el.EY]: ew }),
                                children: [
                                    eR && !em ? (0, s.jsx)(er, {}) : null,
                                    ey ? (0, s.jsx)(eo, {}) : null,
                                    eM ? (0, s.jsx)(eu, {}) : null,
                                    null != eL && eJ
                                        ? (0, s.jsx)(ea, { channelName: eL, onClick: eX, hovered: X })
                                        : null,
                                    eZ
                                        ? (0, s.jsx)(ei, {
                                              icon: E.PGe,
                                              "aria-label": eN
                                                  ? et.intl.string(et.t["26C4oi"])
                                                  : et.intl.string(et.t.jsvgc3),
                                              onClick: eN ? ez : eP,
                                              onMouseDown: eF,
                                              nameplate: H,
                                              reducedClickTarget: !0,
                                              visibleElementRef: eU,
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
let em =
    21552 == l.j
        ? (e) => {
              let { channel: t, selected: l, ...n } = e,
                  i = (0, A.bG)([J.default], () => J.default.getUser(t.getRecipientId())),
                  a = i?.id,
                  r = (0, A.cf)([B.A, H.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let l = B.A.getState().statuses;
                          t.recipients.some((e) => l[e] === ee.clD.ONLINE) && (e = ee.clD.ONLINE);
                      } else null != a && (e = B.A.getStatus(a));
                      return {
                          status: e,
                          activities: null != a ? B.A.getActivities(a) : null,
                          applicationStream: null != a ? H.A.getAnyStreamForUser(a) : null,
                          isMobile: null != a && B.A.isMobileOnline(a),
                          isVR: null != a && B.A.isVROnline(a),
                      };
                  }, [t, a]),
                  { voiceActivityStatusEnabled: o } = (0, N.G)({ location: "PrivateChannel" }),
                  { voiceChannel: u } = (0, C.A)({ userId: a }),
                  c = (0, P.r)({ user: i }),
                  d = (0, A.bG)(
                      [J.default, Y.A],
                      () =>
                          t.isMultiUserDM()
                              ? X.default
                                    .keys(Y.A.getTypingUsers(t.id))
                                    .some((e) => e !== J.default.getCurrentUser()?.id)
                              : null != i && Y.A.isTyping(t.id, t.getRecipientId()),
                      [t, i],
                  );
              return t.isMultiUserDM()
                  ? (0, s.jsx)(ed, {
                        channel: t,
                        selected: l,
                        isTyping: d,
                        status: r.status === ee.clD.ONLINE ? ee.clD.ONLINE : void 0,
                        ...n,
                    })
                  : (0, s.jsx)(ed, {
                        channel: t,
                        selected: l,
                        user: i,
                        voiceChannel: o ? u : void 0,
                        isTyping: d,
                        nameplate: c,
                        ...n,
                        ...r,
                    });
          }
        : null;

s.d(t, { Ay: () => ed, th: () => ec, w_: () => en, z9: () => eu });
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
    D = s(181079),
    G = s(954376),
    Q = s(534400),
    O = s(111864),
    P = s(967054),
    k = s(226540),
    F = s(227),
    V = s(148355),
    q = s(854627),
    z = s(616356),
    H = s(290863),
    B = s(222823),
    W = s(994500),
    K = s(741961),
    Y = s(543465),
    $ = s(287809),
    J = s(661191),
    X = s(837921),
    Z = s(652215),
    ee = s(985018),
    et = s(45119);
let es = X.Ay.getEnableHardwareAcceleration() ? E.JsQ : E.euF,
    el = { offset: { top: 2, bottom: 2, right: 4 } },
    en = (e) => {
        let { nameplate: t, icon: s, forceShow: n = !1, reducedClickTarget: a = !1, visibleElementRef: r, ...o } = e,
            u = (0, P.K)(t);
        return (0, l.jsx)(E.DUT, {
            className: i()(et.b, { [et.DQ]: null != t, [et.by]: n, [et.wY]: a }),
            style: u,
            ...o,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, l.jsx)("div", {
                ref: r,
                className: i()({ [et.PJ]: null != t }),
                children: (0, l.jsx)(s, {
                    size: "sm",
                    color: "currentColor",
                    className: i()(et.ut, { [et.Uq]: null != t }),
                }),
            }),
        });
    },
    ea = (e) => {
        let { onClick: t, hovered: s, channelName: n, showNameplate: a } = e,
            { enabled: i, showSticker: r } = j.A.useConfig({ location: "Wave CTA" });
        return i
            ? (0, l.jsx)("div", {
                  className: et.KQ,
                  children: (0, l.jsx)(x.m_, {
                      text: ee.intl.formatToPlainString(ee.t.m0zYbV, { username: n }),
                      children: r
                          ? (0, l.jsx)(E.Button, {
                                icon: {
                                    type: "sticker",
                                    asset: { id: I.w, format_type: 3, name: ee.intl.string(ee.t.n8nU4W) },
                                    component: (e) => {
                                        let { ...t } = e;
                                        return (0, l.jsx)(V.A, { disableAnimation: !s, ...t });
                                    },
                                },
                                text: ee.intl.string(ee.t.n8nU4W),
                                onClick: t,
                                variant: a ? "overlay-secondary" : "secondary",
                                size: "sm",
                            })
                          : (0, l.jsx)(E.Button, {
                                size: "sm",
                                variant: a ? "overlay-secondary" : "secondary",
                                onClick: t,
                                text: ee.intl.string(ee.t.pVlP58),
                            }),
                  }),
              })
            : null;
    },
    ei = () => (0, l.jsx)(E.Gg5, { size: "xs", color: "currentColor", className: et.wB }),
    er = () => (0, l.jsx)(E.G3N, { size: "xs", color: "currentColor", className: et.wB }),
    eo = () => (0, l.jsx)(E.KTN, { size: "xs", color: "currentColor", className: et.wB }),
    eu = (e) => {
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
            className: i()(et.Ix, { [et.Ij]: m.Fr }, p),
            onClick: A,
            role: x,
            focusProps: { within: !0, ...el },
            "aria-posinset": f,
            "aria-setsize": h,
            ref: N,
            children: (0, l.jsx)(E.HG8, {
                as: "div",
                selected: s,
                className: i()(r, et.bG, et.$J, { [et.Q2]: s }),
                children: (0, l.jsxs)(u.N_, {
                    to: { pathname: t, state: d },
                    className: et.nf,
                    ...S,
                    children: [
                        (0, l.jsx)(_.A, {
                            muted: !1,
                            avatar: (0, l.jsx)(n, {
                                size: "refresh_sm",
                                className: i()(et.e_, a),
                                color: "currentColor",
                            }),
                            name: o,
                            innerClassName: et.xx,
                        }),
                        c,
                    ],
                }),
            }),
        });
    };
function ec(e) {
    let {
            channel: t,
            selected: a = !1,
            user: r,
            activities: m,
            applicationStream: x,
            voiceChannel: T,
            isTyping: O,
            status: P,
            isMobile: V,
            isVR: z,
            nameplate: H,
            ref: K,
            "aria-posinset": $,
            "aria-setsize": J,
        } = e,
        [X, eu] = n.useState(!1),
        [ec, ed] = n.useState(!1),
        [em, eA] = n.useState(!1),
        ep = n.useRef(null),
        ex = n.useRef(null),
        eE = K ?? ex,
        {
            avatarSrc: ef,
            avatarDecorationSrc: eh,
            eventHandlers: eN,
        } = (0, q.A)({ userId: r?.id, size: E._3J.SIZE_32, animateOnHover: !(a || X || ec || em) }),
        eS = t.isMultiUserDM(),
        eT = t.isSystemDM(),
        eC = !eS && !eT && t.type === Z.rbe.DM,
        ev = eC && r?.primaryGuild != null,
        e_ = (0, A.bG)([Y.Ay], () => Y.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eg, blocked: ej } = (0, A.cf)([W.A], () => ({
            ignored: W.A.isIgnored(t.getRecipientId()),
            blocked: W.A.isBlocked(t.getRecipientId()),
        })),
        ey = eC && eg,
        eM = eC && ej,
        eb = (e_ || ey || eM) && !(a || X),
        eI = (0, A.bG)([B.Ay], () => B.Ay.getMentionCount(t.id) > 0),
        eL = (0, b.Ay)(t),
        eR = (0, A.bG)([D.A], () => D.A.isFavorite(t.id)),
        eU = n.useRef(null),
        ew = null != H && (a || X || em),
        eD = () => {
            eu(!0);
        },
        eG = () => {
            eu(!1);
        },
        eQ = () => {
            ed(!0);
        },
        eO = () => {
            ed(!1);
        },
        eP = function (e) {
            let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), f.A.closePrivateChannel(t.id, a, s);
        },
        ek = () => {
            f.A.preload(Z.ME, t.id);
        },
        eF = (e) => {
            e.stopPropagation();
        },
        eV = (e) => {
            e.target === e.currentTarget && ep.current?.click();
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
                              let { default: e } = await Promise.all([s.e("97262"), s.e("60200")]).then(
                                  s.bind(s, 4027),
                              );
                              return (s) => (0, l.jsx)(e, { ...s, channel: t, selected: a });
                          },
                          { impressionName: n, noBlurEvent: !0, onClose: () => eA(!1) },
                      )
                    : (0, h.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  s.e("97262"),
                                  s.e("42128"),
                                  s.e("39778"),
                                  s.e("61267"),
                              ]).then(s.bind(s, 385913));
                              return (s) => (0, l.jsx)(e, { ...s, user: r, channel: t, channelSelected: a });
                          },
                          { impressionName: n, onClose: () => eA(!1) },
                      );
        },
        ez = (e) => {
            e.preventDefault(), e.stopPropagation();
            let n = ee.intl.formatToPlainString(ee.t.hJ5Ap4, { name: eL }),
                a = ee.intl.format(ee.t.SSIVOu, { name: eL });
            t.isManaged() &&
                ((n = ee.intl.formatToPlainString(ee.t.hVGjEW, { name: eL })),
                (a = ee.intl.format(ee.t.IK1Qvs, { name: eL }))),
                (0, E.mMO)(async () => {
                    let { default: e } = await s.e("37803").then(s.bind(s, 148166));
                    return (t) => (0, l.jsx)(e, { title: n, body: a, onSubmit: eP, ...t });
                });
        },
        eH = (0, l.jsx)(w.A, {
            userName: eL,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: X || a || em ? U.G.ANIMATED : U.G.PLAIN,
            loop: X,
            boldFontOpacity: 0.9,
        }),
        eB = ev
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eH,
                      (0, l.jsx)(Q.Ay, {
                          primaryGuild: r?.primaryGuild,
                          userId: r?.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: i()(et.fc, { [et.Y_]: eb }),
                      }),
                  ],
              })
            : eH,
        eW = n.useRef(null),
        eK = (0, R.W)({ location: "PrivateChannel" }) && r?.displayNameStyles != null,
        eY = [(0, y.Ay)({ channel: t, unread: eI }), (0, y.r2)({ channel: t, muted: e_, userStatus: P })]
            .filter(Boolean)
            .join(", "),
        e$ = (0, A.bG)([B.Ay], () => B.Ay.lastMessageId(t.id)),
        { waveShouldShow: eJ, wavePressed: eX } = (0, I.A)(t, e$),
        { showClose: eZ } = j.A.useConfig({ location: "PrivateChannel" });
    return (0, l.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: s, ...n } = e;
            return (0, l.jsxs)(L.A, {
                className: i()(et.Ix, et.dm),
                role: s,
                focusProps: { ...el, focusTarget: ep, ringTarget: eE },
                ref: eE,
                onMouseEnter: eD,
                onMouseLeave: eG,
                onMouseDown: ek,
                onFocus: eQ,
                onBlur: eO,
                onContextMenu: eq,
                "aria-setsize": J,
                "aria-posinset": $,
                children: [
                    eI ? (0, l.jsx)("div", { className: i()(et.dM, { [et.SU]: eb }) }) : null,
                    (0, l.jsxs)(E.HG8, {
                        className: i()(et.bG, { [et.Q2]: a || em }),
                        as: "div",
                        onClick: eV,
                        muted: eb,
                        selected: a,
                        children: [
                            (0, l.jsx)(F.A, {
                                nameplate: ew ? H : void 0,
                                selected: a,
                                hovered: X,
                                content: eW,
                                placement: k.u.CHANNEL,
                            }),
                            (0, l.jsx)(u.N_, {
                                innerRef: ep,
                                to: Z.BVt.CHANNEL(Z.ME, t.id),
                                className: et.nf,
                                "aria-label": eY,
                                ...n,
                                children: (0, l.jsx)(_.A, {
                                    ref: eW,
                                    avatar: (() => {
                                        let e = E._3J.SIZE_32;
                                        if (t.isMultiUserDM())
                                            if (t.recipients.length >= 2 && null == t.icon)
                                                return (0, l.jsx)(G.A, {
                                                    "aria-hidden": !0,
                                                    recipients: t.recipients,
                                                    size: e,
                                                    isTyping: O,
                                                    status: P,
                                                });
                                            else
                                                return (0, l.jsx)(es, {
                                                    ...eN,
                                                    src: (0, M.Y)(t),
                                                    "aria-hidden": !0,
                                                    size: e,
                                                    status: O ? Z.clD.ONLINE : P,
                                                    isTyping: O,
                                                });
                                        o()(
                                            null != r,
                                            "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                        );
                                        let s = null;
                                        return (
                                            r.isSystemUser() || (s = (0, N.A)(m) ? Z.clD.STREAMING : P),
                                            (0, l.jsx)(es, {
                                                ...eN,
                                                size: E._3J.SIZE_32,
                                                src: ef,
                                                avatarDecoration: eh,
                                                status: s,
                                                isMobile: V,
                                                isVR: z,
                                                isTyping: O,
                                                "aria-label": r.username,
                                                statusTooltip: !0,
                                            })
                                        );
                                    })(),
                                    highlighted: eI && !eb,
                                    muted: eb,
                                    subText: t.isSystemDM()
                                        ? (0, l.jsx)("div", {
                                              className: et.W$,
                                              children: (0, g.A)(t.id)
                                                  ? ee.intl.string(ee.t.FL5T01)
                                                  : ee.intl.string(ee.t.NnY5lc),
                                          })
                                        : t.isMultiUserDM()
                                          ? (0, l.jsx)("div", {
                                                className: et.W$,
                                                children: ee.intl.format(ee.t.CxSA5N, {
                                                    members: t.recipients.length + 1,
                                                }),
                                            })
                                          : (0, S.A)({
                                                  activities: m,
                                                  status: P,
                                                  applicationStream: x,
                                                  voiceChannel: T,
                                              })
                                            ? (0, l.jsx)(C.A, {
                                                  user: r,
                                                  activities: m,
                                                  voiceChannel: T,
                                                  applicationStream: x,
                                                  animateEmoji: X || ec || em,
                                                  textClassName: et.XD,
                                                  iconClassName: eb ? et.tG : void 0,
                                              })
                                            : null,
                                    name: (0, l.jsx)(p.A, { className: i()(et.uN, { [et.e8]: eK }), children: eB }),
                                    decorators: t.isSystemDM()
                                        ? (0, l.jsx)(v.A, { className: et.G$, type: v.A.Types.SYSTEM_DM, verified: !0 })
                                        : null,
                                    withDisplayNameStyles: eK,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: i()(et._q, { [et.EY]: ew }),
                                children: [
                                    eR && !em ? (0, l.jsx)(ei, {}) : null,
                                    ey ? (0, l.jsx)(er, {}) : null,
                                    eM ? (0, l.jsx)(eo, {}) : null,
                                    null != eL && eJ
                                        ? (0, l.jsx)(ea, {
                                              channelName: eL,
                                              onClick: eX,
                                              hovered: X,
                                              showNameplate: ew,
                                          })
                                        : null,
                                    eZ || !eJ
                                        ? (0, l.jsx)(en, {
                                              icon: E.PGe,
                                              "aria-label": eS
                                                  ? ee.intl.string(ee.t["26C4oi"])
                                                  : ee.intl.string(ee.t.jsvgc3),
                                              onClick: eS ? ez : eP,
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
let ed =
    21552 == s.j
        ? (e) => {
              let { channel: t, selected: s, ...n } = e,
                  a = (0, A.bG)([$.default], () => $.default.getUser(t.getRecipientId())),
                  i = a?.id,
                  r = (0, A.cf)([H.A, z.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let s = H.A.getState().statuses;
                          t.recipients.some((e) => s[e] === Z.clD.ONLINE) && (e = Z.clD.ONLINE);
                      } else null != i && (e = H.A.getStatus(i));
                      return {
                          status: e,
                          activities: null != i ? H.A.getActivities(i) : null,
                          applicationStream: null != i ? z.A.getAnyStreamForUser(i) : null,
                          isMobile: null != i && H.A.isMobileOnline(i),
                          isVR: null != i && H.A.isVROnline(i),
                      };
                  }, [t, i]),
                  { voiceChannel: o } = (0, T.A)({ userId: i }),
                  u = (0, O.r)({ user: a }),
                  c = (0, A.bG)(
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
                  ? (0, l.jsx)(ec, {
                        channel: t,
                        selected: s,
                        isTyping: c,
                        status: r.status === Z.clD.ONLINE ? Z.clD.ONLINE : void 0,
                        ...n,
                    })
                  : (0, l.jsx)(ec, {
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

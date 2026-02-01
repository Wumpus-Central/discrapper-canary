n.d(t, {
    Ay: () => ec,
    th: () => eu,
    w_: () => el,
    z9: () => es,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    o = n(503698),
    i = n.n(o),
    a = n(284009),
    s = n.n(a),
    u = n(758879),
    c = n(110259),
    d = n(837381),
    _ = n(607399),
    p = n(311907),
    b = n(3026),
    m = n(397927),
    f = n(308528),
    g = n(442433),
    y = n(960076),
    S = n(901517),
    x = n(397244),
    h = n(714114),
    A = n(729551),
    v = n(709066),
    O = n(262295),
    E = n(343328),
    j = n(963027),
    T = n(571694),
    C = n(47167),
    N = n(880714),
    w = n(824994),
    I = n(922301),
    P = n(750112),
    M = n(181079),
    R = n(954376),
    D = n(534400),
    L = n(111864),
    U = n(967054),
    Q = n(226540),
    G = n(227),
    k = n(854627),
    B = n(616356),
    F = n(290863),
    H = n(222823),
    q = n(994500),
    W = n(741961),
    V = n(543465),
    z = n(287809),
    K = n(661191),
    Y = n(837921),
    $ = n(652215),
    J = n(985018),
    X = n(45119);

function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function ee(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function et(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o;
    }
    if (
        ((o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                o = Object.getOwnPropertyNames(e);
            for (r = 0; r < o.length; r++)
                (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
    return o;
}
let en = Y.Ay.getEnableHardwareAcceleration() ? m.JsQ : m.euF,
    er = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4,
        },
    },
    el = (e) => {
        let { nameplate: t, icon: n, forceShow: l = !1, reducedClickTarget: o = !1, visibleElementRef: a } = e,
            s = et(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]),
            u = (0, U.K)(t);
        return (0, r.jsx)(
            m.DUT,
            ee(
                Z(
                    {
                        className: i()(X.b, {
                            [X.DQ]: null != t,
                            [X.by]: l,
                            [X.wY]: o,
                        }),
                        style: u,
                    },
                    s,
                ),
                {
                    focusProps: {
                        offset: {
                            top: -2,
                            bottom: -2,
                            left: -2,
                            right: 6,
                        },
                    },
                    children: (0, r.jsx)("div", {
                        ref: a,
                        className: i()({
                            [X.PJ]: null != t,
                        }),
                        children: (0, r.jsx)(n, {
                            size: "sm",
                            color: "currentColor",
                            className: i()(X.ut, {
                                [X.Uq]: null != t,
                            }),
                        }),
                    }),
                },
            ),
        );
    },
    eo = () =>
        (0, r.jsx)(m.Gg5, {
            size: "xs",
            color: "currentColor",
            className: X.wB,
        }),
    ei = () =>
        (0, r.jsx)(m.G3N, {
            size: "xs",
            color: "currentColor",
            className: X.wB,
        }),
    ea = () =>
        (0, r.jsx)(m.KTN, {
            size: "xs",
            color: "currentColor",
            className: X.wB,
        }),
    es = (e) => {
        let {
                route: t,
                selected: n,
                icon: l,
                iconClassName: o,
                interactiveClassName: a,
                text: s,
                children: c,
                locationState: d,
                onClick: p,
                className: b,
                role: f,
                "aria-posinset": g,
                "aria-setsize": y,
                listItemRef: S,
            } = e,
            x = et(e, [
                "route",
                "selected",
                "icon",
                "iconClassName",
                "interactiveClassName",
                "text",
                "children",
                "locationState",
                "onClick",
                "className",
                "role",
                "aria-posinset",
                "aria-setsize",
                "listItemRef",
            ]);
        return (0, r.jsx)(N.A, {
            className: i()(
                X.Ix,
                {
                    [X.Ij]: _.Fr,
                },
                b,
            ),
            onClick: p,
            role: f,
            focusProps: Z(
                {
                    within: !0,
                },
                er,
            ),
            "aria-posinset": g,
            "aria-setsize": y,
            ref: S,
            children: (0, r.jsx)(m.HG8, {
                as: "div",
                selected: n,
                className: i()(a, X.bG, X.$J, {
                    [X.Q2]: n,
                }),
                children: (0, r.jsxs)(
                    u.N_,
                    ee(
                        Z(
                            {
                                to: {
                                    pathname: t,
                                    state: d,
                                },
                                className: X.nf,
                            },
                            x,
                        ),
                        {
                            children: [
                                (0, r.jsx)(O.A, {
                                    muted: !1,
                                    avatar: (0, r.jsx)(l, {
                                        size: "refresh_sm",
                                        className: i()(X.e_, o),
                                        color: "currentColor",
                                    }),
                                    name: s,
                                    innerClassName: X.xx,
                                }),
                                c,
                            ],
                        },
                    ),
                ),
            }),
        });
    };

function eu(e) {
    let {
            channel: t,
            selected: o = !1,
            user: a,
            activities: _,
            applicationStream: S,
            voiceChannel: h,
            isTyping: L,
            status: U,
            isMobile: B,
            nameplate: F,
            ref: W,
            "aria-posinset": z,
            "aria-setsize": K,
        } = e,
        [Y, es] = l.useState(!1),
        [eu, ec] = l.useState(!1),
        [ed, e_] = l.useState(!1),
        ep = l.useRef(null),
        eb = l.useRef(null),
        em = null != W ? W : eb,
        {
            avatarSrc: ef,
            avatarDecorationSrc: eg,
            eventHandlers: ey,
        } = (0, k.A)({
            userId: null == a ? void 0 : a.id,
            size: m._3J.SIZE_32,
            animateOnHover: !(o || Y || eu || ed),
        }),
        eS = t.isMultiUserDM(),
        ex = t.isSystemDM(),
        eh = !eS && !ex && t.type === $.rbe.DM,
        eA = eh && (null == a ? void 0 : a.primaryGuild) != null,
        ev = (0, p.bG)([V.Ay], () => V.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eO, blocked: eE } = (0, p.cf)([q.A], () => ({
            ignored: q.A.isIgnored(t.getRecipientId()),
            blocked: q.A.isBlocked(t.getRecipientId()),
        })),
        ej = eh && eO,
        eT = eh && eE,
        eC = (ev || ej || eT) && !(o || Y),
        eN = (0, p.bG)([H.Ay], () => H.Ay.getMentionCount(t.id) > 0),
        ew = (0, C.Ay)(t),
        eI = (0, p.bG)([M.A], () => M.A.isFavorite(t.id)),
        eP = l.useRef(null),
        eM = null != F && (o || Y || ed),
        eR = () => {
            es(!0);
        },
        eD = () => {
            es(!1);
        },
        eL = () => {
            ec(!0);
        },
        eU = () => {
            ec(!1);
        },
        eQ = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), f.A.closePrivateChannel(t.id, o, n);
        },
        eG = () => {
            f.A.preload($.ME, t.id);
        },
        ek = (e) => {
            e.stopPropagation();
        },
        eB = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = ep.current) || t.click();
            }
        },
        eF = (e) => {
            let l =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            e_(!0),
                t.isMultiUserDM()
                    ? (0, g.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("97262"),
                                  n.e("99011"),
                                  n.e("60200"),
                                  n.e("48402"),
                              ]).then(n.bind(n, 4027));
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      ee(Z({}, n), {
                                          channel: t,
                                          selected: o,
                                      }),
                                  );
                          },
                          {
                              impressionName: l,
                              noBlurEvent: !0,
                              onClose: () => e_(!1),
                          },
                      )
                    : (0, g.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("97262"),
                                  n.e("99011"),
                                  n.e("29534"),
                                  n.e("93169"),
                                  n.e("55150"),
                                  n.e("39778"),
                                  n.e("92617"),
                              ]).then(n.bind(n, 385913));
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      ee(Z({}, n), {
                                          user: a,
                                          channel: t,
                                          channelSelected: o,
                                      }),
                                  );
                          },
                          {
                              impressionName: l,
                              onClose: () => e_(!1),
                          },
                      );
        },
        eH = (e) => {
            e.preventDefault(), e.stopPropagation();
            let l = J.intl.formatToPlainString(J.t.hJ5Ap4, {
                    name: ew,
                }),
                o = J.intl.format(J.t.SSIVOu, {
                    name: ew,
                });
            t.isManaged() &&
                ((l = J.intl.formatToPlainString(J.t.hVGjEW, {
                    name: ew,
                })),
                (o = J.intl.format(J.t.IK1Qvs, {
                    name: ew,
                }))),
                (0, m.mMO)(async () => {
                    let { default: e } = await n.e("37803").then(n.bind(n, 148166));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            Z(
                                {
                                    title: l,
                                    body: o,
                                    onSubmit: eQ,
                                },
                                t,
                            ),
                        );
                });
        },
        eq = (0, r.jsx)(P.A, {
            userName: ew,
            displayNameStyles: null == a ? void 0 : a.displayNameStyles,
            effectDisplayType: Y || o || ed ? I.G.ANIMATED : I.G.PLAIN,
            loop: Y,
            boldFontOpacity: 0.9,
        }),
        eW = eA
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      eq,
                      (0, r.jsx)(D.Ay, {
                          primaryGuild: null == a ? void 0 : a.primaryGuild,
                          userId: null == a ? void 0 : a.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: i()(X.fc, {
                              [X.Y_]: eC,
                          }),
                      }),
                  ],
              })
            : eq,
        eV = l.useRef(null),
        ez =
            (0, w.W)({
                location: "PrivateChannel",
            }) && (null == a ? void 0 : a.displayNameStyles) != null,
        eK = [
            (0, j.Ay)({
                channel: t,
                unread: eN,
            }),
            (0, j.r2)({
                channel: t,
                muted: ev,
                userStatus: U,
            }),
        ]
            .filter(Boolean)
            .join(", ");
    return (0, r.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: n } = e,
                l = et(e, ["role"]);
            return (0, r.jsxs)(N.A, {
                className: i()(X.Ix, X.dm),
                role: n,
                focusProps: ee(Z({}, er), {
                    focusTarget: ep,
                    ringTarget: em,
                }),
                ref: em,
                onMouseEnter: eR,
                onMouseLeave: eD,
                onMouseDown: eG,
                onFocus: eL,
                onBlur: eU,
                onContextMenu: eF,
                "aria-setsize": K,
                "aria-posinset": z,
                children: [
                    eN
                        ? (0, r.jsx)("div", {
                              className: i()(X.dM, {
                                  [X.SU]: eC,
                              }),
                          })
                        : null,
                    (0, r.jsxs)(m.HG8, {
                        className: i()(X.bG, {
                            [X.Q2]: o || ed,
                        }),
                        as: "div",
                        onClick: eB,
                        muted: eC,
                        selected: o,
                        children: [
                            (0, r.jsx)(G.A, {
                                nameplate: eM ? F : void 0,
                                selected: o,
                                hovered: Y,
                                content: eV,
                                placement: Q.u.CHANNEL,
                            }),
                            (0, r.jsx)(
                                u.N_,
                                ee(
                                    Z(
                                        {
                                            innerRef: ep,
                                            to: $.BVt.CHANNEL($.ME, t.id),
                                            className: X.nf,
                                            "aria-label": eK,
                                        },
                                        l,
                                    ),
                                    {
                                        children: (0, r.jsx)(O.A, {
                                            ref: eV,
                                            avatar: (() => {
                                                let e = m._3J.SIZE_32;
                                                if (t.isMultiUserDM())
                                                    if (t.recipients.length >= 2 && null == t.icon)
                                                        return (0, r.jsx)(R.A, {
                                                            "aria-hidden": !0,
                                                            recipients: t.recipients,
                                                            size: e,
                                                            isTyping: L,
                                                            status: U,
                                                        });
                                                    else
                                                        return (0, r.jsx)(
                                                            en,
                                                            ee(Z({}, ey), {
                                                                src: (0, T.Y)(t),
                                                                "aria-hidden": !0,
                                                                size: e,
                                                                status: L ? $.clD.ONLINE : U,
                                                                isTyping: L,
                                                            }),
                                                        );
                                                s()(
                                                    null != a,
                                                    "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                                );
                                                let n = null;
                                                return (
                                                    a.isSystemUser() || (n = (0, y.A)(_) ? $.clD.STREAMING : U),
                                                    (0, r.jsx)(
                                                        en,
                                                        ee(Z({}, ey), {
                                                            size: m._3J.SIZE_32,
                                                            src: ef,
                                                            avatarDecoration: eg,
                                                            status: n,
                                                            isMobile: B,
                                                            isTyping: L,
                                                            "aria-label": a.username,
                                                            statusTooltip: !0,
                                                        }),
                                                    )
                                                );
                                            })(),
                                            highlighted: eN && !eC,
                                            muted: eC,
                                            subText: t.isSystemDM()
                                                ? (0, r.jsx)("div", {
                                                      className: X.W$,
                                                      children: (0, E.A)(t.id)
                                                          ? J.intl.string(J.t.FL5T01)
                                                          : J.intl.string(J.t.NnY5lc),
                                                  })
                                                : t.isMultiUserDM()
                                                  ? (0, r.jsx)("div", {
                                                        className: X.W$,
                                                        children: J.intl.format(J.t.CxSA5N, {
                                                            members: t.recipients.length + 1,
                                                        }),
                                                    })
                                                  : (0, x.A)({
                                                          activities: _,
                                                          status: U,
                                                          applicationStream: S,
                                                          voiceChannel: h,
                                                      })
                                                    ? (0, r.jsx)(A.A, {
                                                          user: a,
                                                          activities: _,
                                                          voiceChannel: h,
                                                          applicationStream: S,
                                                          animateEmoji: Y || eu || ed,
                                                          textClassName: X.XD,
                                                          iconClassName: eC ? X.tG : void 0,
                                                      })
                                                    : null,
                                            name: (0, r.jsx)(b.A, {
                                                className: i()(X.uN, {
                                                    [X.e8]: ez,
                                                }),
                                                children: eW,
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, r.jsx)(v.A, {
                                                      className: X.G$,
                                                      type: v.A.Types.SYSTEM_DM,
                                                      verified: !0,
                                                  })
                                                : null,
                                            withDisplayNameStyles: ez,
                                        }),
                                    },
                                ),
                            ),
                            (0, r.jsxs)("div", {
                                className: i()(X._q, {
                                    [X.EY]: eM,
                                }),
                                children: [
                                    eI && !ed ? (0, r.jsx)(eo, {}) : null,
                                    ej ? (0, r.jsx)(ei, {}) : null,
                                    eT ? (0, r.jsx)(ea, {}) : null,
                                    (0, r.jsx)(el, {
                                        icon: m.PGe,
                                        "aria-label": eS ? J.intl.string(J.t["26C4oi"]) : J.intl.string(J.t.jsvgc3),
                                        onClick: eS ? eH : eQ,
                                        onMouseDown: ek,
                                        nameplate: F,
                                        reducedClickTarget: !0,
                                        visibleElementRef: eP,
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
let ec =
    21552 == n.j
        ? (e) => {
              let { channel: t, selected: n } = e,
                  l = et(e, ["channel", "selected"]),
                  o = (0, p.bG)([z.default], () => z.default.getUser(t.getRecipientId())),
                  i = null == o ? void 0 : o.id,
                  a = (0, p.cf)([F.A, B.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = F.A.getState().statuses;
                          t.recipients.some((e) => n[e] === $.clD.ONLINE) && (e = $.clD.ONLINE);
                      } else null != i && (e = F.A.getStatus(i));
                      return {
                          status: e,
                          activities: null != i ? F.A.getActivities(i) : null,
                          applicationStream: null != i ? B.A.getAnyStreamForUser(i) : null,
                          isMobile: null != i && F.A.isMobileOnline(i),
                      };
                  }, [t, i]),
                  { voiceActivityStatusEnabled: s } = (0, S.G)({
                      location: "PrivateChannel",
                  }),
                  { voiceChannel: u } = (0, h.A)({
                      userId: i,
                  }),
                  c = (0, L.r)({
                      user: o,
                  }),
                  d = (0, p.bG)(
                      [z.default, W.A],
                      () =>
                          t.isMultiUserDM()
                              ? K.default.keys(W.A.getTypingUsers(t.id)).some((e) => {
                                    var t;
                                    return e !== (null == (t = z.default.getCurrentUser()) ? void 0 : t.id);
                                })
                              : null != o && W.A.isTyping(t.id, t.getRecipientId()),
                      [t, o],
                  );
              return t.isMultiUserDM()
                  ? (0, r.jsx)(
                        eu,
                        Z(
                            {
                                channel: t,
                                selected: n,
                                isTyping: d,
                                status: a.status === $.clD.ONLINE ? $.clD.ONLINE : void 0,
                            },
                            l,
                        ),
                    )
                  : (0, r.jsx)(
                        eu,
                        Z(
                            {
                                channel: t,
                                selected: n,
                                user: o,
                                voiceChannel: s ? u : void 0,
                                isTyping: d,
                                nameplate: c,
                            },
                            l,
                            a,
                        ),
                    );
          }
        : null;

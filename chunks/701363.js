n.d(t, {
    Ay: () => ec,
    th: () => eu,
    w_: () => er,
    z9: () => eo,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    s = n(503698),
    i = n.n(s),
    a = n(284009),
    o = n.n(a),
    u = n(758879),
    c = n(110259),
    d = n(837381),
    p = n(607399),
    f = n(311907),
    m = n(3026),
    b = n(397927),
    y = n(308528),
    E = n(442433),
    v = n(960076),
    A = n(901517),
    S = n(397244),
    O = n(714114),
    j = n(729551),
    h = n(709066),
    x = n(262295),
    g = n(343328),
    N = n(963027),
    T = n(571694),
    _ = n(47167),
    C = n(880714),
    P = n(824994),
    I = n(922301),
    w = n(750112),
    M = n(181079),
    R = n(954376),
    D = n(534400),
    L = n(111864),
    U = n(967054),
    Q = n(226540),
    G = n(227),
    k = n(854627),
    F = n(616356),
    q = n(290863),
    H = n(222823),
    V = n(994500),
    B = n(741961),
    z = n(543465),
    K = n(287809),
    W = n(661191),
    Y = n(837921),
    $ = n(652215),
    J = n(985018),
    X = n(45119);

function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
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
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
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
        l,
        r,
        s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
            (l = n[r]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (s[l] = e[l]);
        return s;
    }
    if (
        ((s = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = {},
                s = Object.getOwnPropertyNames(e);
            for (l = 0; l < s.length; l++)
                (n = s[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            (l = n[r]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (s[l] = e[l]);
    return s;
}
let en = Y.Ay.getEnableHardwareAcceleration() ? b.JsQ : b.euF,
    el = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4,
        },
    },
    er = (e) => {
        let { nameplate: t, icon: n, forceShow: r = !1, reducedClickTarget: s = !1, visibleElementRef: a } = e,
            o = et(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]),
            u = (0, U.K)(t);
        return (0, l.jsx)(
            b.DUT,
            ee(
                Z(
                    {
                        className: i()(X.b, {
                            [X.DQ]: null != t,
                            [X.by]: r,
                            [X.wY]: s,
                        }),
                        style: u,
                    },
                    o,
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
                    children: (0, l.jsx)("div", {
                        ref: a,
                        className: i()({
                            [X.PJ]: null != t,
                        }),
                        children: (0, l.jsx)(n, {
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
    es = () =>
        (0, l.jsx)(b.Gg5, {
            size: "xs",
            color: "currentColor",
            className: X.wB,
        }),
    ei = () =>
        (0, l.jsx)(b.G3N, {
            size: "xs",
            color: "currentColor",
            className: X.wB,
        }),
    ea = () =>
        (0, l.jsx)(b.KTN, {
            size: "xs",
            color: "currentColor",
            className: X.wB,
        }),
    eo = (e) => {
        let {
                route: t,
                selected: n,
                icon: r,
                iconClassName: s,
                interactiveClassName: a,
                text: o,
                children: c,
                locationState: d,
                onClick: f,
                className: m,
                role: y,
                "aria-posinset": E,
                "aria-setsize": v,
                listItemRef: A,
            } = e,
            S = et(e, [
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
        return (0, l.jsx)(C.A, {
            className: i()(
                X.Ix,
                {
                    [X.Ij]: p.Fr,
                },
                m,
            ),
            onClick: f,
            role: y,
            focusProps: Z(
                {
                    within: !0,
                },
                el,
            ),
            "aria-posinset": E,
            "aria-setsize": v,
            ref: A,
            children: (0, l.jsx)(b.HG8, {
                as: "div",
                selected: n,
                className: i()(a, X.bG, X.$J, {
                    [X.Q2]: n,
                }),
                children: (0, l.jsxs)(
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
                            S,
                        ),
                        {
                            children: [
                                (0, l.jsx)(x.A, {
                                    muted: !1,
                                    avatar: (0, l.jsx)(r, {
                                        size: "refresh_sm",
                                        className: i()(X.e_, s),
                                        color: "currentColor",
                                    }),
                                    name: o,
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
            selected: s = !1,
            user: a,
            activities: p,
            applicationStream: A,
            voiceChannel: O,
            isTyping: L,
            status: U,
            isMobile: F,
            nameplate: q,
            ref: B,
            "aria-posinset": K,
            "aria-setsize": W,
        } = e,
        [Y, eo] = r.useState(!1),
        [eu, ec] = r.useState(!1),
        [ed, ep] = r.useState(!1),
        ef = r.useRef(null),
        em = r.useRef(null),
        eb = null != B ? B : em,
        {
            avatarSrc: ey,
            avatarDecorationSrc: eE,
            eventHandlers: ev,
        } = (0, k.A)({
            userId: null == a ? void 0 : a.id,
            size: b._3J.SIZE_32,
            animateOnHover: !(s || Y || eu || ed),
        }),
        eA = t.isMultiUserDM(),
        eS = t.isSystemDM(),
        eO = !eA && !eS && t.type === $.rbe.DM,
        ej = eO && (null == a ? void 0 : a.primaryGuild) != null,
        eh = (0, f.bG)([z.Ay], () => z.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: ex, blocked: eg } = (0, f.cf)([V.A], () => ({
            ignored: V.A.isIgnored(t.getRecipientId()),
            blocked: V.A.isBlocked(t.getRecipientId()),
        })),
        eN = eO && ex,
        eT = eO && eg,
        e_ = (eh || eN || eT) && !(s || Y),
        eC = (0, f.bG)([H.Ay], () => H.Ay.getMentionCount(t.id) > 0),
        eP = (0, _.Ay)(t),
        eI = (0, f.bG)([M.A], () => M.A.isFavorite(t.id)),
        ew = r.useRef(null),
        eM = null != q && (s || Y || ed),
        eR = () => {
            eo(!0);
        },
        eD = () => {
            eo(!1);
        },
        eL = () => {
            ec(!0);
        },
        eU = () => {
            ec(!1);
        },
        eQ = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), y.A.closePrivateChannel(t.id, s, n);
        },
        eG = () => {
            y.A.preload($.ME, t.id);
        },
        ek = (e) => {
            e.stopPropagation();
        },
        eF = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = ef.current) || t.click();
            }
        },
        eq = (e) => {
            let r =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ep(!0),
                t.isMultiUserDM()
                    ? (0, E.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("97262"),
                                  n.e("99011"),
                                  n.e("60200"),
                                  n.e("48402"),
                              ]).then(n.bind(n, 4027));
                              return (n) =>
                                  (0, l.jsx)(
                                      e,
                                      ee(Z({}, n), {
                                          channel: t,
                                          selected: s,
                                      }),
                                  );
                          },
                          {
                              impressionName: r,
                              noBlurEvent: !0,
                              onClose: () => ep(!1),
                          },
                      )
                    : (0, E.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("97262"),
                                  n.e("99011"),
                                  n.e("29534"),
                                  n.e("33818"),
                                  n.e("39778"),
                                  n.e("71287"),
                              ]).then(n.bind(n, 385913));
                              return (n) =>
                                  (0, l.jsx)(
                                      e,
                                      ee(Z({}, n), {
                                          user: a,
                                          channel: t,
                                          channelSelected: s,
                                      }),
                                  );
                          },
                          {
                              impressionName: r,
                              onClose: () => ep(!1),
                          },
                      );
        },
        eH = (e) => {
            e.preventDefault(), e.stopPropagation();
            let r = J.intl.formatToPlainString(J.t.hJ5Ap4, {
                    name: eP,
                }),
                s = J.intl.format(J.t.SSIVOu, {
                    name: eP,
                });
            t.isManaged() &&
                ((r = J.intl.formatToPlainString(J.t.hVGjEW, {
                    name: eP,
                })),
                (s = J.intl.format(J.t.IK1Qvs, {
                    name: eP,
                }))),
                (0, b.mMO)(async () => {
                    let { default: e } = await n.e("37803").then(n.bind(n, 148166));
                    return (t) =>
                        (0, l.jsx)(
                            e,
                            Z(
                                {
                                    title: r,
                                    body: s,
                                    onSubmit: eQ,
                                },
                                t,
                            ),
                        );
                });
        },
        eV = (0, l.jsx)(w.A, {
            userName: eP,
            displayNameStyles: null == a ? void 0 : a.displayNameStyles,
            effectDisplayType: Y || s || ed ? I.G.ANIMATED : I.G.PLAIN,
            loop: Y,
            boldFontOpacity: 0.9,
        }),
        eB = ej
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eV,
                      (0, l.jsx)(D.Ay, {
                          primaryGuild: null == a ? void 0 : a.primaryGuild,
                          userId: null == a ? void 0 : a.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: i()(X.fc, {
                              [X.Y_]: e_,
                          }),
                      }),
                  ],
              })
            : eV,
        ez = r.useRef(null),
        eK =
            (0, P.W)({
                location: "PrivateChannel",
            }) && (null == a ? void 0 : a.displayNameStyles) != null,
        eW = [
            (0, N.Ay)({
                channel: t,
                unread: eC,
            }),
            (0, N.r2)({
                channel: t,
                muted: eh,
                userStatus: U,
            }),
        ]
            .filter(Boolean)
            .join(", ");
    return (0, l.jsx)(d.tG, {
        id: t.id,
        children: (e) => {
            let { role: n } = e,
                r = et(e, ["role"]);
            return (0, l.jsxs)(C.A, {
                className: i()(X.Ix, X.dm),
                role: n,
                focusProps: ee(Z({}, el), {
                    focusTarget: ef,
                    ringTarget: eb,
                }),
                ref: eb,
                onMouseEnter: eR,
                onMouseLeave: eD,
                onMouseDown: eG,
                onFocus: eL,
                onBlur: eU,
                onContextMenu: eq,
                "aria-setsize": W,
                "aria-posinset": K,
                children: [
                    eC
                        ? (0, l.jsx)("div", {
                              className: i()(X.dM, {
                                  [X.SU]: e_,
                              }),
                          })
                        : null,
                    (0, l.jsxs)(b.HG8, {
                        className: i()(X.bG, {
                            [X.Q2]: s || ed,
                        }),
                        as: "div",
                        onClick: eF,
                        muted: e_,
                        selected: s,
                        children: [
                            (0, l.jsx)(G.A, {
                                nameplate: eM ? q : void 0,
                                selected: s,
                                hovered: Y,
                                content: ez,
                                placement: Q.u.CHANNEL,
                            }),
                            (0, l.jsx)(
                                u.N_,
                                ee(
                                    Z(
                                        {
                                            innerRef: ef,
                                            to: $.BVt.CHANNEL($.ME, t.id),
                                            className: X.nf,
                                            "aria-label": eW,
                                        },
                                        r,
                                    ),
                                    {
                                        children: (0, l.jsx)(x.A, {
                                            ref: ez,
                                            avatar: (() => {
                                                let e = b._3J.SIZE_32;
                                                if (t.isMultiUserDM())
                                                    if (t.recipients.length >= 2 && null == t.icon)
                                                        return (0, l.jsx)(R.A, {
                                                            "aria-hidden": !0,
                                                            recipients: t.recipients,
                                                            size: e,
                                                            isTyping: L,
                                                            status: U,
                                                        });
                                                    else
                                                        return (0, l.jsx)(
                                                            en,
                                                            ee(Z({}, ev), {
                                                                src: (0, T.Y)(t),
                                                                "aria-hidden": !0,
                                                                size: e,
                                                                status: L ? $.clD.ONLINE : U,
                                                                isTyping: L,
                                                            }),
                                                        );
                                                o()(
                                                    null != a,
                                                    "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                                );
                                                let n = null;
                                                return (
                                                    a.isSystemUser() || (n = (0, v.A)(p) ? $.clD.STREAMING : U),
                                                    (0, l.jsx)(
                                                        en,
                                                        ee(Z({}, ev), {
                                                            size: b._3J.SIZE_32,
                                                            src: ey,
                                                            avatarDecoration: eE,
                                                            status: n,
                                                            isMobile: F,
                                                            isTyping: L,
                                                            "aria-label": a.username,
                                                            statusTooltip: !0,
                                                        }),
                                                    )
                                                );
                                            })(),
                                            highlighted: eC && !e_,
                                            muted: e_,
                                            subText: t.isSystemDM()
                                                ? (0, l.jsx)("div", {
                                                      className: X.W$,
                                                      children: (0, g.A)(t.id)
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
                                                  : (0, S.A)({
                                                          activities: p,
                                                          status: U,
                                                          applicationStream: A,
                                                          voiceChannel: O,
                                                      })
                                                    ? (0, l.jsx)(j.A, {
                                                          user: a,
                                                          activities: p,
                                                          voiceChannel: O,
                                                          applicationStream: A,
                                                          animateEmoji: Y || eu || ed,
                                                          textClassName: X.XD,
                                                          iconClassName: e_ ? X.tG : void 0,
                                                      })
                                                    : null,
                                            name: (0, l.jsx)(m.A, {
                                                className: i()(X.uN, {
                                                    [X.e8]: eK,
                                                }),
                                                children: eB,
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, l.jsx)(h.A, {
                                                      className: X.G$,
                                                      type: h.A.Types.SYSTEM_DM,
                                                      verified: !0,
                                                  })
                                                : null,
                                            withDisplayNameStyles: eK,
                                        }),
                                    },
                                ),
                            ),
                            (0, l.jsxs)("div", {
                                className: i()(X._q, {
                                    [X.EY]: eM,
                                }),
                                children: [
                                    eI && !ed ? (0, l.jsx)(es, {}) : null,
                                    eN ? (0, l.jsx)(ei, {}) : null,
                                    eT ? (0, l.jsx)(ea, {}) : null,
                                    (0, l.jsx)(er, {
                                        icon: b.PGe,
                                        "aria-label": eA ? J.intl.string(J.t["26C4oi"]) : J.intl.string(J.t.jsvgc3),
                                        onClick: eA ? eH : eQ,
                                        onMouseDown: ek,
                                        nameplate: q,
                                        reducedClickTarget: !0,
                                        visibleElementRef: ew,
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
                  r = et(e, ["channel", "selected"]),
                  s = (0, f.bG)([K.default], () => K.default.getUser(t.getRecipientId())),
                  i = null == s ? void 0 : s.id,
                  a = (0, f.cf)([q.A, F.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = q.A.getState().statuses;
                          t.recipients.some((e) => n[e] === $.clD.ONLINE) && (e = $.clD.ONLINE);
                      } else null != i && (e = q.A.getStatus(i));
                      return {
                          status: e,
                          activities: null != i ? q.A.getActivities(i) : null,
                          applicationStream: null != i ? F.A.getAnyStreamForUser(i) : null,
                          isMobile: null != i && q.A.isMobileOnline(i),
                      };
                  }, [t, i]),
                  { voiceActivityStatusEnabled: o } = (0, A.G)({
                      location: "PrivateChannel",
                  }),
                  { voiceChannel: u } = (0, O.A)({
                      userId: i,
                  }),
                  c = (0, L.r)({
                      user: s,
                  }),
                  d = (0, f.bG)(
                      [K.default, B.A],
                      () =>
                          t.isMultiUserDM()
                              ? W.default.keys(B.A.getTypingUsers(t.id)).some((e) => {
                                    var t;
                                    return e !== (null == (t = K.default.getCurrentUser()) ? void 0 : t.id);
                                })
                              : null != s && B.A.isTyping(t.id, t.getRecipientId()),
                      [t, s],
                  );
              return t.isMultiUserDM()
                  ? (0, l.jsx)(
                        eu,
                        Z(
                            {
                                channel: t,
                                selected: n,
                                isTyping: d,
                                status: a.status === $.clD.ONLINE ? $.clD.ONLINE : void 0,
                            },
                            r,
                        ),
                    )
                  : (0, l.jsx)(
                        eu,
                        Z(
                            {
                                channel: t,
                                selected: n,
                                user: s,
                                voiceChannel: o ? u : void 0,
                                isTyping: d,
                                nameplate: c,
                            },
                            r,
                            a,
                        ),
                    );
          }
        : null;

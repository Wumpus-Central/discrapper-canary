n.d(t, {
    Ay: () => ec,
    th: () => eu,
    w_: () => er,
    z9: () => es,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
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
    A = n(714114),
    h = n(729551),
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
        o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
            (l = n[r]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (o[l] = e[l]);
        return o;
    }
    if (
        ((o = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = {},
                o = Object.getOwnPropertyNames(e);
            for (l = 0; l < o.length; l++)
                (n = o[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            (l = n[r]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (o[l] = e[l]);
    return o;
}
let en = Y.Ay.getEnableHardwareAcceleration() ? m.JsQ : m.euF,
    el = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4,
        },
    },
    er = (e) => {
        let { nameplate: t, icon: n, forceShow: r = !1, reducedClickTarget: o = !1, visibleElementRef: a } = e,
            s = et(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]),
            u = (0, U.K)(t);
        return (0, l.jsx)(
            m.DUT,
            ee(
                Z(
                    {
                        className: i()(X.b, {
                            [X.DQ]: null != t,
                            [X.by]: r,
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
    eo = () =>
        (0, l.jsx)(m.Gg5, {
            size: "xs",
            color: "currentColor",
            className: X.wB,
        }),
    ei = () =>
        (0, l.jsx)(m.G3N, {
            size: "xs",
            color: "currentColor",
            className: X.wB,
        }),
    ea = () =>
        (0, l.jsx)(m.KTN, {
            size: "xs",
            color: "currentColor",
            className: X.wB,
        }),
    es = (e) => {
        let {
                route: t,
                selected: n,
                icon: r,
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
        return (0, l.jsx)(N.A, {
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
                el,
            ),
            "aria-posinset": g,
            "aria-setsize": y,
            ref: S,
            children: (0, l.jsx)(m.HG8, {
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
                            x,
                        ),
                        {
                            children: [
                                (0, l.jsx)(O.A, {
                                    muted: !1,
                                    avatar: (0, l.jsx)(r, {
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
            voiceChannel: A,
            isTyping: L,
            status: U,
            isMobile: B,
            isVR: F,
            nameplate: W,
            ref: z,
            "aria-posinset": K,
            "aria-setsize": Y,
        } = e,
        [es, eu] = r.useState(!1),
        [ec, ed] = r.useState(!1),
        [e_, ep] = r.useState(!1),
        eb = r.useRef(null),
        em = r.useRef(null),
        ef = null != z ? z : em,
        {
            avatarSrc: eg,
            avatarDecorationSrc: ey,
            eventHandlers: eS,
        } = (0, k.A)({
            userId: null == a ? void 0 : a.id,
            size: m._3J.SIZE_32,
            animateOnHover: !(o || es || ec || e_),
        }),
        ex = t.isMultiUserDM(),
        eA = t.isSystemDM(),
        eh = !ex && !eA && t.type === $.rbe.DM,
        ev = eh && (null == a ? void 0 : a.primaryGuild) != null,
        eO = (0, p.bG)([V.Ay], () => V.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eE, blocked: ej } = (0, p.cf)([q.A], () => ({
            ignored: q.A.isIgnored(t.getRecipientId()),
            blocked: q.A.isBlocked(t.getRecipientId()),
        })),
        eT = eh && eE,
        eC = eh && ej,
        eN = (eO || eT || eC) && !(o || es),
        ew = (0, p.bG)([H.Ay], () => H.Ay.getMentionCount(t.id) > 0),
        eI = (0, C.Ay)(t),
        eP = (0, p.bG)([M.A], () => M.A.isFavorite(t.id)),
        eM = r.useRef(null),
        eR = null != W && (o || es || e_),
        eD = () => {
            eu(!0);
        },
        eL = () => {
            eu(!1);
        },
        eU = () => {
            ed(!0);
        },
        eQ = () => {
            ed(!1);
        },
        eG = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), f.A.closePrivateChannel(t.id, o, n);
        },
        ek = () => {
            f.A.preload($.ME, t.id);
        },
        eB = (e) => {
            e.stopPropagation();
        },
        eF = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = eb.current) || t.click();
            }
        },
        eH = (e) => {
            let r =
                "contextmenu" === e.type
                    ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ep(!0),
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
                                  (0, l.jsx)(
                                      e,
                                      ee(Z({}, n), {
                                          channel: t,
                                          selected: o,
                                      }),
                                  );
                          },
                          {
                              impressionName: r,
                              noBlurEvent: !0,
                              onClose: () => ep(!1),
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
                                  (0, l.jsx)(
                                      e,
                                      ee(Z({}, n), {
                                          user: a,
                                          channel: t,
                                          channelSelected: o,
                                      }),
                                  );
                          },
                          {
                              impressionName: r,
                              onClose: () => ep(!1),
                          },
                      );
        },
        eq = (e) => {
            e.preventDefault(), e.stopPropagation();
            let r = J.intl.formatToPlainString(J.t.hJ5Ap4, {
                    name: eI,
                }),
                o = J.intl.format(J.t.SSIVOu, {
                    name: eI,
                });
            t.isManaged() &&
                ((r = J.intl.formatToPlainString(J.t.hVGjEW, {
                    name: eI,
                })),
                (o = J.intl.format(J.t.IK1Qvs, {
                    name: eI,
                }))),
                (0, m.mMO)(async () => {
                    let { default: e } = await n.e("37803").then(n.bind(n, 148166));
                    return (t) =>
                        (0, l.jsx)(
                            e,
                            Z(
                                {
                                    title: r,
                                    body: o,
                                    onSubmit: eG,
                                },
                                t,
                            ),
                        );
                });
        },
        eW = (0, l.jsx)(P.A, {
            userName: eI,
            displayNameStyles: null == a ? void 0 : a.displayNameStyles,
            effectDisplayType: es || o || e_ ? I.G.ANIMATED : I.G.PLAIN,
            loop: es,
            boldFontOpacity: 0.9,
        }),
        eV = ev
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      eW,
                      (0, l.jsx)(D.Ay, {
                          primaryGuild: null == a ? void 0 : a.primaryGuild,
                          userId: null == a ? void 0 : a.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: i()(X.fc, {
                              [X.Y_]: eN,
                          }),
                      }),
                  ],
              })
            : eW,
        ez = r.useRef(null),
        eK =
            (0, w.W)({
                location: "PrivateChannel",
            }) && (null == a ? void 0 : a.displayNameStyles) != null,
        eY = [
            (0, j.Ay)({
                channel: t,
                unread: ew,
            }),
            (0, j.r2)({
                channel: t,
                muted: eO,
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
            return (0, l.jsxs)(N.A, {
                className: i()(X.Ix, X.dm),
                role: n,
                focusProps: ee(Z({}, el), {
                    focusTarget: eb,
                    ringTarget: ef,
                }),
                ref: ef,
                onMouseEnter: eD,
                onMouseLeave: eL,
                onMouseDown: ek,
                onFocus: eU,
                onBlur: eQ,
                onContextMenu: eH,
                "aria-setsize": Y,
                "aria-posinset": K,
                children: [
                    ew
                        ? (0, l.jsx)("div", {
                              className: i()(X.dM, {
                                  [X.SU]: eN,
                              }),
                          })
                        : null,
                    (0, l.jsxs)(m.HG8, {
                        className: i()(X.bG, {
                            [X.Q2]: o || e_,
                        }),
                        as: "div",
                        onClick: eF,
                        muted: eN,
                        selected: o,
                        children: [
                            (0, l.jsx)(G.A, {
                                nameplate: eR ? W : void 0,
                                selected: o,
                                hovered: es,
                                content: ez,
                                placement: Q.u.CHANNEL,
                            }),
                            (0, l.jsx)(
                                u.N_,
                                ee(
                                    Z(
                                        {
                                            innerRef: eb,
                                            to: $.BVt.CHANNEL($.ME, t.id),
                                            className: X.nf,
                                            "aria-label": eY,
                                        },
                                        r,
                                    ),
                                    {
                                        children: (0, l.jsx)(O.A, {
                                            ref: ez,
                                            avatar: (() => {
                                                let e = m._3J.SIZE_32;
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
                                                            ee(Z({}, eS), {
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
                                                    (0, l.jsx)(
                                                        en,
                                                        ee(Z({}, eS), {
                                                            size: m._3J.SIZE_32,
                                                            src: eg,
                                                            avatarDecoration: ey,
                                                            status: n,
                                                            isMobile: B,
                                                            isVR: F,
                                                            isTyping: L,
                                                            "aria-label": a.username,
                                                            statusTooltip: !0,
                                                        }),
                                                    )
                                                );
                                            })(),
                                            highlighted: ew && !eN,
                                            muted: eN,
                                            subText: t.isSystemDM()
                                                ? (0, l.jsx)("div", {
                                                      className: X.W$,
                                                      children: (0, E.A)(t.id)
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
                                                  : (0, x.A)({
                                                          activities: _,
                                                          status: U,
                                                          applicationStream: S,
                                                          voiceChannel: A,
                                                      })
                                                    ? (0, l.jsx)(h.A, {
                                                          user: a,
                                                          activities: _,
                                                          voiceChannel: A,
                                                          applicationStream: S,
                                                          animateEmoji: es || ec || e_,
                                                          textClassName: X.XD,
                                                          iconClassName: eN ? X.tG : void 0,
                                                      })
                                                    : null,
                                            name: (0, l.jsx)(b.A, {
                                                className: i()(X.uN, {
                                                    [X.e8]: eK,
                                                }),
                                                children: eV,
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, l.jsx)(v.A, {
                                                      className: X.G$,
                                                      type: v.A.Types.SYSTEM_DM,
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
                                    [X.EY]: eR,
                                }),
                                children: [
                                    eP && !e_ ? (0, l.jsx)(eo, {}) : null,
                                    eT ? (0, l.jsx)(ei, {}) : null,
                                    eC ? (0, l.jsx)(ea, {}) : null,
                                    (0, l.jsx)(er, {
                                        icon: m.PGe,
                                        "aria-label": ex ? J.intl.string(J.t["26C4oi"]) : J.intl.string(J.t.jsvgc3),
                                        onClick: ex ? eq : eG,
                                        onMouseDown: eB,
                                        nameplate: W,
                                        reducedClickTarget: !0,
                                        visibleElementRef: eM,
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
                          isVR: null != i && F.A.isVROnline(i),
                      };
                  }, [t, i]),
                  { voiceActivityStatusEnabled: s } = (0, S.G)({
                      location: "PrivateChannel",
                  }),
                  { voiceChannel: u } = (0, A.A)({
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
                                user: o,
                                voiceChannel: s ? u : void 0,
                                isTyping: d,
                                nameplate: c,
                            },
                            r,
                            a,
                        ),
                    );
          }
        : null;

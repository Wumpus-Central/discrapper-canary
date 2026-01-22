n.d(t, {
    Ay: () => eb,
    th: () => eg,
    w_: () => ed,
    z9: () => ey,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(308185),
    o = n(284009),
    u = n.n(o),
    c = n(758879),
    d = n(110259),
    p = n(837381),
    m = n(607399),
    f = n(311907),
    y = n(3026),
    g = n(397927),
    b = n(308528),
    A = n(442433),
    x = n(960076),
    v = n(901517),
    h = n(397244),
    E = n(714114),
    O = n(729551),
    j = n(709066),
    S = n(262295),
    N = n(343328),
    T = n(963027),
    _ = n(571694),
    C = n(47167),
    P = n(880714),
    I = n(824994),
    w = n(922301),
    M = n(750112),
    R = n(181079),
    D = n(954376),
    L = n(534400),
    U = n(461012),
    k = n(224415),
    G = n(208823),
    Q = n(111864),
    F = n(967054),
    H = n(226540),
    q = n(227),
    V = n(549973),
    B = n(820286),
    z = n(854627),
    K = n(616356),
    W = n(290863),
    Y = n(222823),
    X = n(994500),
    J = n(351906),
    $ = n(741961),
    Z = n(543465),
    ee = n(287809),
    et = n(661191),
    en = n(837921),
    er = n(652215),
    el = n(985018),
    ei = n(45119);
function es(e) {
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
function ea(e, t) {
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
function eo(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++)
                (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i;
}
let eu = en.Ay.getEnableHardwareAcceleration() ? g.JsQ : g.euF,
    ec = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4,
        },
    },
    ed = (e) => {
        let { nameplate: t, icon: n, forceShow: l = !1, reducedClickTarget: i = !1, visibleElementRef: a } = e,
            o = eo(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]),
            u = (0, F.K)(t);
        return (0, r.jsx)(
            g.DUT,
            ea(
                es(
                    {
                        className: s()(ei.b, {
                            [ei.DQ]: null != t,
                            [ei.by]: l,
                            [ei.wY]: i,
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
                    children: (0, r.jsx)("div", {
                        ref: a,
                        className: s()({ [ei.PJ]: null != t }),
                        children: (0, r.jsx)(n, {
                            size: "sm",
                            color: "currentColor",
                            className: s()(ei.ut, { [ei.Uq]: null != t }),
                        }),
                    }),
                },
            ),
        );
    },
    ep = () =>
        (0, r.jsx)(g.Gg5, {
            size: "xs",
            color: "currentColor",
            className: ei.wB,
        }),
    em = () =>
        (0, r.jsx)(g.G3N, {
            size: "xs",
            color: "currentColor",
            className: ei.wB,
        }),
    ef = () =>
        (0, r.jsx)(g.KTN, {
            size: "xs",
            color: "currentColor",
            className: ei.wB,
        }),
    ey = (e) => {
        let {
                route: t,
                selected: n,
                icon: l,
                iconClassName: i,
                interactiveClassName: a,
                text: o,
                children: u,
                locationState: d,
                onClick: p,
                className: f,
                role: y,
                "aria-posinset": b,
                "aria-setsize": A,
                listItemRef: x,
            } = e,
            v = eo(e, [
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
        return (0, r.jsx)(P.A, {
            className: s()(ei.Ix, { [ei.Ij]: m.Fr }, f),
            onClick: p,
            role: y,
            focusProps: es({ within: !0 }, ec),
            "aria-posinset": b,
            "aria-setsize": A,
            ref: x,
            children: (0, r.jsx)(g.HG8, {
                as: "div",
                selected: n,
                className: s()(a, ei.bG, ei.$J, { [ei.Q2]: n }),
                children: (0, r.jsxs)(
                    c.N_,
                    ea(
                        es(
                            {
                                to: {
                                    pathname: t,
                                    state: d,
                                },
                                className: ei.nf,
                            },
                            v,
                        ),
                        {
                            children: [
                                (0, r.jsx)(S.A, {
                                    muted: !1,
                                    avatar: (0, r.jsx)(l, {
                                        size: "refresh_sm",
                                        className: s()(ei.e_, i),
                                        color: "currentColor",
                                    }),
                                    name: o,
                                    innerClassName: ei.xx,
                                }),
                                u,
                            ],
                        },
                    ),
                ),
            }),
        });
    };
function eg(e) {
    let {
            channel: t,
            selected: i = !1,
            user: o,
            activities: m,
            applicationStream: v,
            voiceChannel: E,
            isTyping: Q,
            status: F,
            isMobile: K,
            nameplate: W,
            latestMessage: $,
            ref: ee,
            "aria-posinset": en,
            "aria-setsize": ey,
        } = e,
        [eg, eb] = l.useState(!1),
        [eA, ex] = l.useState(!1),
        [ev, eh] = l.useState(!1),
        eE = l.useRef(null),
        eO = l.useRef(null),
        ej = null != ee ? ee : eO,
        {
            avatarSrc: eS,
            avatarDecorationSrc: eN,
            eventHandlers: eT,
        } = (0, z.A)({
            userId: null == o ? void 0 : o.id,
            size: g._3J.SIZE_32,
            animateOnHover: !(i || eg || eA || ev),
        }),
        e_ = t.isMultiUserDM(),
        eC = t.isSystemDM(),
        eP = !e_ && !eC && t.type === er.rbe.DM,
        eI = eP && (null == o ? void 0 : o.primaryGuild) != null,
        ew = (0, f.bG)([Z.Ay], () => Z.Ay.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eM, blocked: eR } = (0, f.cf)([X.A], () => ({
            ignored: X.A.isIgnored(t.getRecipientId()),
            blocked: X.A.isBlocked(t.getRecipientId()),
        })),
        eD = eP && eM,
        eL = eP && eR,
        eU = (ew || eD || eL) && !(i || eg),
        { hasUnreadMessages: ek, lastMessageId: eG } = (0, f.cf)([Y.Ay], () => ({
            hasUnreadMessages: Y.Ay.getMentionCount(t.id) > 0,
            lastMessageId: Y.Ay.lastMessageId(t.id),
        })),
        eQ = (0, C.Ay)(t),
        eF = (0, f.bG)([R.A], () => R.A.isFavorite(t.id)),
        { showMessagePreviews: eH, prioritizeOverStatus: eq } = G.t.useConfig({ location: "PrivateChannel" }),
        eV = (0, f.bG)([J.A], () => J.A.hidePersonalInformation),
        eB = (0, k.r)(t.guild_id),
        ez = (0, V.e)({ timestamp: et.default.extractTimestamp(null != eG ? eG : t.id) }),
        eK = l.useRef(null),
        eW = null != W && (i || eg || ev),
        eY = () => {
            eb(!0);
        },
        eX = () => {
            eb(!1);
        },
        eJ = () => {
            ex(!0);
        },
        e$ = () => {
            ex(!1);
        },
        eZ = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), b.A.closePrivateChannel(t.id, i, n);
        },
        e0 = () => {
            b.A.preload(er.ME, t.id);
        },
        e1 = (e) => {
            e.stopPropagation();
        },
        e2 = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = eE.current) || t.click();
            }
        },
        e9 = (e) => {
            let l =
                "contextmenu" === e.type
                    ? d.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : d.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eh(!0),
                t.isMultiUserDM()
                    ? (0, A.L3)(
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
                                      ea(es({}, n), {
                                          channel: t,
                                          selected: i,
                                      }),
                                  );
                          },
                          {
                              impressionName: l,
                              noBlurEvent: !0,
                              onClose: () => eh(!1),
                          },
                      )
                    : (0, A.L3)(
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
                                  (0, r.jsx)(
                                      e,
                                      ea(es({}, n), {
                                          user: o,
                                          channel: t,
                                          channelSelected: i,
                                      }),
                                  );
                          },
                          {
                              impressionName: l,
                              onClose: () => eh(!1),
                          },
                      );
        },
        e6 = (e) => {
            e.preventDefault(), e.stopPropagation();
            let l = el.intl.formatToPlainString(el.t.hJ5Ap4, { name: eQ }),
                i = el.intl.format(el.t.SSIVOu, { name: eQ });
            t.isManaged() &&
                ((l = el.intl.formatToPlainString(el.t.hVGjEW, { name: eQ })),
                (i = el.intl.format(el.t.IK1Qvs, { name: eQ }))),
                (0, g.mMO)(async () => {
                    let { default: e } = await n.e("37803").then(n.bind(n, 148166));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            es(
                                {
                                    header: l,
                                    body: i,
                                    onSubmit: eZ,
                                },
                                t,
                            ),
                        );
                });
        },
        e7 = (0, r.jsx)(M.A, {
            userName: eQ,
            displayNameStyles: null == o ? void 0 : o.displayNameStyles,
            effectDisplayType: eg || i || ev ? w.G.ANIMATED : w.G.PLAIN,
            loop: eg,
            boldFontOpacity: 0.9,
        }),
        e3 = eI
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      e7,
                      (0, r.jsx)(L.Ay, {
                          primaryGuild: null == o ? void 0 : o.primaryGuild,
                          userId: null == o ? void 0 : o.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: s()(ei.fc, { [ei.Y_]: eU }),
                      }),
                  ],
              })
            : e7,
        e4 = l.useRef(null),
        e5 = (0, I.W)({ location: "PrivateChannel" }) && (null == o ? void 0 : o.displayNameStyles) != null,
        e8 = [
            (0, T.Ay)({
                channel: t,
                unread: ek,
            }),
            (0, T.r2)({
                channel: t,
                muted: ew,
                userStatus: F,
            }),
        ]
            .filter(Boolean)
            .join(", "),
        te = (0, r.jsxs)(r.Fragment, {
            children: [
                eF && !ev ? (0, r.jsx)(ep, {}) : null,
                eD ? (0, r.jsx)(em, {}) : null,
                eL ? (0, r.jsx)(ef, {}) : null,
            ],
        }),
        tt = eH
            ? (0, r.jsxs)("div", {
                  className: ei.Ym,
                  children: [
                      te,
                      eB !== U.P.ALL || eV
                          ? null
                          : (0, r.jsx)(g.Text, {
                                variant: "text-xs/normal",
                                color: i ? "interactive-text-active" : ek ? "interactive-text-default" : "text-muted",
                                className: ei.vE,
                                children: ez,
                            }),
                  ],
              })
            : null;
    return (0, r.jsx)(p.tG, {
        id: t.id,
        children: (e) => {
            let n,
                l,
                d,
                { role: p } = e,
                f = eo(e, ["role"]);
            return (0, r.jsxs)(P.A, {
                className: s()(ei.Ix, ei.dm),
                role: p,
                focusProps: ea(es({}, ec), {
                    focusTarget: eE,
                    ringTarget: ej,
                }),
                ref: ej,
                onMouseEnter: eY,
                onMouseLeave: eX,
                onMouseDown: e0,
                onFocus: eJ,
                onBlur: e$,
                onContextMenu: e9,
                "aria-setsize": ey,
                "aria-posinset": en,
                children: [
                    ek ? (0, r.jsx)("div", { className: s()(ei.dM, { [ei.SU]: eU }) }) : null,
                    (0, r.jsxs)(g.HG8, {
                        className: s()(ei.bG, { [ei.Q2]: i || ev }),
                        as: "div",
                        onClick: e2,
                        muted: eU,
                        selected: i,
                        children: [
                            (0, r.jsx)(q.A, {
                                nameplate: eW ? W : void 0,
                                selected: i,
                                hovered: eg,
                                content: e4,
                                placement: H.u.CHANNEL,
                            }),
                            (0, r.jsx)(
                                c.N_,
                                ea(
                                    es(
                                        {
                                            innerRef: eE,
                                            to: er.BVt.CHANNEL(er.ME, t.id),
                                            className: ei.nf,
                                            "aria-label": e8,
                                        },
                                        f,
                                    ),
                                    {
                                        children: (0, r.jsx)(S.A, {
                                            ref: e4,
                                            avatar: (() => {
                                                let e = g._3J.SIZE_32;
                                                if (t.isMultiUserDM())
                                                    if (t.recipients.length >= 2 && null == t.icon)
                                                        return (0, r.jsx)(D.A, {
                                                            "aria-hidden": !0,
                                                            recipients: t.recipients,
                                                            size: e,
                                                            isTyping: Q,
                                                            status: F,
                                                        });
                                                    else
                                                        return (0, r.jsx)(
                                                            eu,
                                                            ea(es({}, eT), {
                                                                src: (0, _.Y)(t),
                                                                "aria-hidden": !0,
                                                                size: e,
                                                                status: Q ? er.clD.ONLINE : F,
                                                                isTyping: Q,
                                                            }),
                                                        );
                                                u()(
                                                    null != o,
                                                    "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                                );
                                                let n = null;
                                                return (
                                                    o.isSystemUser() || (n = (0, x.A)(m) ? er.clD.STREAMING : F),
                                                    (0, r.jsx)(
                                                        eu,
                                                        ea(es({}, eT), {
                                                            size: g._3J.SIZE_32,
                                                            src: eS,
                                                            avatarDecoration: eN,
                                                            status: n,
                                                            isMobile: K,
                                                            isTyping: Q,
                                                            "aria-label": o.username,
                                                            statusTooltip: !0,
                                                        }),
                                                    )
                                                );
                                            })(),
                                            highlighted: ek && !eU,
                                            muted: eU,
                                            subText:
                                                ((n =
                                                    (null == m
                                                        ? void 0
                                                        : m.some((e) => e.type !== er.$pd.CUSTOM_STATUS)) === !0),
                                                (l =
                                                    eH && null != $ && !eV
                                                        ? (0, r.jsx)("div", {
                                                              className: ei.W$,
                                                              children: (0, r.jsx)(B.X, {
                                                                  channel: t,
                                                                  message: $,
                                                              }),
                                                          })
                                                        : null),
                                                (d =
                                                    null != $ &&
                                                    null != l &&
                                                    (1 > (0, a.A)(new Date(), $.timestamp) || (eq && !n) || ek)),
                                                t.isSystemDM()
                                                    ? (0, r.jsx)("div", {
                                                          className: ei.W$,
                                                          children: (0, N.A)(t.id)
                                                              ? el.intl.string(el.t.FL5T01)
                                                              : el.intl.string(el.t.NnY5lc),
                                                      })
                                                    : t.isMultiUserDM()
                                                      ? null != l
                                                          ? l
                                                          : (0, r.jsx)("div", {
                                                                className: ei.W$,
                                                                children: el.intl.format(el.t.CxSA5N, {
                                                                    members: t.recipients.length + 1,
                                                                }),
                                                            })
                                                      : !d &&
                                                          (0, h.A)({
                                                              activities: m,
                                                              status: F,
                                                              applicationStream: v,
                                                              voiceChannel: E,
                                                          })
                                                        ? (0, r.jsx)(O.A, {
                                                              user: o,
                                                              activities: m,
                                                              voiceChannel: E,
                                                              applicationStream: v,
                                                              animateEmoji: eg || eA || ev,
                                                              textClassName: ei.XD,
                                                              iconClassName: eU ? ei.tG : void 0,
                                                          })
                                                        : null != l
                                                          ? l
                                                          : null),
                                            subtextClassName: s()(ei.PL, {
                                                [ei.nF]: eW,
                                                [ei.un]: eH,
                                            }),
                                            nameClassName: ei.Xh,
                                            name: (0, r.jsx)(y.A, {
                                                className: s()(ei.uN, { [ei.e8]: e5 }),
                                                children: e3,
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, r.jsx)(j.A, {
                                                      className: ei.G$,
                                                      type: j.A.Types.SYSTEM_DM,
                                                      verified: !0,
                                                  })
                                                : null,
                                            rightDecorators: tt,
                                            withDisplayNameStyles: e5,
                                        }),
                                    },
                                ),
                            ),
                            (0, r.jsxs)("div", {
                                className: s()(ei._q, { [ei.EY]: eW && !eH }),
                                children: [
                                    !eH && te,
                                    (0, r.jsx)(ed, {
                                        icon: g.PGe,
                                        "aria-label": e_ ? el.intl.string(el.t["26C4oi"]) : el.intl.string(el.t.jsvgc3),
                                        onClick: e_ ? e6 : eZ,
                                        onMouseDown: e1,
                                        nameplate: W,
                                        reducedClickTarget: !0,
                                        visibleElementRef: eK,
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
let eb =
    21552 == n.j
        ? (e) => {
              let { channel: t, selected: n } = e,
                  l = eo(e, ["channel", "selected"]),
                  i = (0, f.bG)([ee.default], () => ee.default.getUser(t.getRecipientId())),
                  s = null == i ? void 0 : i.id,
                  a = (0, f.cf)([W.A, K.A], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = W.A.getState().statuses;
                          t.recipients.some((e) => n[e] === er.clD.ONLINE) && (e = er.clD.ONLINE);
                      } else null != s && (e = W.A.getStatus(s));
                      return {
                          status: e,
                          activities: null != s ? W.A.getActivities(s) : null,
                          applicationStream: null != s ? K.A.getAnyStreamForUser(s) : null,
                          isMobile: null != s && W.A.isMobileOnline(s),
                      };
                  }, [t, s]),
                  { voiceActivityStatusEnabled: o } = (0, v.G)({ location: "PrivateChannel" }),
                  { voiceChannel: u } = (0, E.A)({ userId: s }),
                  c = (0, Q.r)({ user: i }),
                  d = (0, f.bG)(
                      [ee.default, $.A],
                      () =>
                          t.isMultiUserDM()
                              ? et.default.keys($.A.getTypingUsers(t.id)).some((e) => {
                                    var t;
                                    return e !== (null == (t = ee.default.getCurrentUser()) ? void 0 : t.id);
                                })
                              : null != i && $.A.isTyping(t.id, t.getRecipientId()),
                      [t, i],
                  ),
                  { showMessagePreviews: p } = G.t.useConfig({ location: "PrivateChannel" }),
                  m = (0, k.A)(t, { disabled: !p });
              return t.isMultiUserDM()
                  ? (0, r.jsx)(
                        eg,
                        es(
                            {
                                channel: t,
                                selected: n,
                                isTyping: d,
                                status: a.status === er.clD.ONLINE ? er.clD.ONLINE : void 0,
                                latestMessage: m,
                            },
                            l,
                        ),
                    )
                  : (0, r.jsx)(
                        eg,
                        es(
                            {
                                channel: t,
                                selected: n,
                                user: i,
                                voiceChannel: o ? u : void 0,
                                isTyping: d,
                                nameplate: c,
                                latestMessage: m,
                            },
                            l,
                            a,
                        ),
                    );
          }
        : null;

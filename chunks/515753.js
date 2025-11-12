n.d(t, {
    Qj: () => ep,
    RS: () => ef,
    ZP: () => em,
    bU: () => es,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(799899),
    u = n(990547),
    d = n(91192),
    p = n(873546),
    f = n(893999),
    m = n(442837),
    b = n(194983),
    O = n(28664),
    v = n(481060),
    y = n(493683),
    g = n(239091),
    h = n(420660),
    j = n(468363),
    x = n(326255),
    N = n(956221),
    S = n(771173),
    P = n(385499),
    C = n(570908),
    E = n(702321),
    w = n(201895),
    Z = n(43267),
    T = n(933557),
    M = n(163889),
    I = n(181430),
    D = n(821795),
    k = n(892567),
    _ = n(853856),
    R = n(489618),
    L = n(785232),
    U = n(172751),
    A = n(850020),
    B = n(379839),
    G = n(359135),
    F = n(516817),
    z = n(986081),
    H = n(518950),
    W = n(199902),
    K = n(158776),
    Y = n(306680),
    Q = n(699516),
    V = n(111583),
    q = n(9156),
    J = n(594174),
    X = n(709054),
    $ = n(998502),
    ee = n(981631),
    et = n(388032),
    en = n(800525);
function er(e) {
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
function ei(e, t) {
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
function el(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let ea = $.ZP.getEnableHardwareAcceleration() ? v.Xo$ : v.qEK,
    eo = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4,
        },
    },
    es = (e) => {
        var { nameplate: t, icon: n, forceShow: i = !1, reducedClickTarget: l = !1, visibleElementRef: o } = e,
            s = el(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
        let c = (0, B.A)(t);
        return (0, r.jsx)(
            v.P3F,
            ei(
                er(
                    {
                        className: a()(en.closeButton, {
                            [en.closeButtonPlated]: null != t,
                            [en.closeButtonForceShow]: i,
                            [en.reducedClickTarget]: l,
                        }),
                        style: c,
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
                        ref: o,
                        className: a()({ [en.innerCloseButtonPlated]: null != t }),
                        children: (0, r.jsx)(n, {
                            size: "sm",
                            color: "currentColor",
                            className: a()(en.closeIcon, { [en.closeIconPlated]: null != t }),
                        }),
                    }),
                },
            ),
        );
    },
    ec = () =>
        (0, r.jsx)(v.r7p, {
            size: "xs",
            color: "currentColor",
            className: en.favoriteIcon,
        }),
    eu = () =>
        (0, r.jsx)(v.kZF, {
            size: "xs",
            color: "currentColor",
            className: en.favoriteIcon,
        }),
    ed = () =>
        (0, r.jsx)(v.t6m, {
            size: "xs",
            color: "currentColor",
            className: en.favoriteIcon,
        }),
    ep = (e) => {
        var {
                route: t,
                selected: n,
                icon: i,
                iconClassName: l,
                interactiveClassName: o,
                text: s,
                children: u,
                locationState: d,
                onClick: f,
                className: m,
                role: b,
                "aria-posinset": O,
                "aria-setsize": y,
                listItemRef: g,
            } = e,
            h = el(e, [
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
        return (0, r.jsx)(M.Z, {
            className: a()(en.channel, { [en.fullWidth]: p.tq }, m),
            onClick: f,
            role: b,
            focusProps: er({ within: !0 }, eo),
            "aria-posinset": O,
            "aria-setsize": y,
            ref: g,
            children: (0, r.jsx)(v.vjx, {
                as: "div",
                selected: n,
                className: a()(o, en.interactive, en.linkButton, { [en.interactiveSelected]: n }),
                children: (0, r.jsxs)(
                    c.rU,
                    ei(
                        er(
                            {
                                to: {
                                    pathname: t,
                                    state: d,
                                },
                                className: en.link,
                            },
                            h,
                        ),
                        {
                            children: [
                                (0, r.jsx)(C.Z, {
                                    muted: !1,
                                    avatar: (0, r.jsx)(i, {
                                        size: "refresh_sm",
                                        className: a()(en.linkButtonIcon, l),
                                        color: "currentColor",
                                    }),
                                    name: s,
                                    innerClassName: en.avatarWithText,
                                }),
                                u,
                            ],
                        },
                    ),
                ),
            }),
        });
    };
function ef(e) {
    let {
            channel: t,
            selected: l = !1,
            user: o,
            activities: p,
            applicationStream: j,
            voiceChannel: N,
            isTyping: A,
            status: B,
            isMobile: W,
            nameplate: K,
            ref: V,
            "aria-posinset": J,
            "aria-setsize": X,
        } = e,
        [$, ep] = i.useState(!1),
        [ef, em] = i.useState(!1),
        [eb, eO] = i.useState(!1),
        ev = i.useRef(null),
        ey = i.useRef(null),
        eg = null != V ? V : ey,
        {
            avatarSrc: eh,
            avatarDecorationSrc: ej,
            eventHandlers: ex,
        } = (0, H.Z)({
            userId: null == o ? void 0 : o.id,
            size: v.EFr.SIZE_32,
            animateOnHover: !(l || $ || ef || eb),
        }),
        eN = t.isMultiUserDM(),
        eS = t.isSystemDM(),
        eP = (0, z.Q)(),
        eC = !eN && !eS && t.type === ee.d4z.DM,
        eE = eC && (null == o ? void 0 : o.primaryGuild) != null,
        ew = (0, m.e7)([q.ZP], () => q.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eZ, blocked: eT } = (0, m.cj)([Q.Z], () => ({
            ignored: Q.Z.isIgnored(t.getRecipientId()),
            blocked: Q.Z.isBlocked(t.getRecipientId()),
        })),
        eM = eC && eZ,
        eI = eC && eT,
        eD = (ew || eM || eI) && !(l || $),
        ek = (0, m.e7)([Y.ZP], () => Y.ZP.getMentionCount(t.id) > 0),
        e_ = (0, T.ZP)(t),
        eR = (0, m.e7)([_.Z], () => _.Z.isFavorite(t.id)),
        { dotsInsteadOfCloseButton: eL, rearrangeContextMenu: eU } = R.Z.useExperiment(
            { location: "private_channel" },
            { autoTrackExposure: !0 },
        ),
        eA = i.useRef(null),
        eB = null != K && (l || $ || eb),
        eG = () => {
            ep(!0);
        },
        eF = () => {
            ep(!1);
        },
        ez = () => {
            em(!0);
        },
        eH = () => {
            em(!1);
        },
        eW = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), y.Z.closePrivateChannel(t.id, l, n);
        },
        eK = () => {
            y.Z.preload(ee.ME, t.id);
        },
        eY = (e) => {
            e.stopPropagation();
        },
        eQ = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = ev.current) || t.click();
            }
        },
        eV = (e) => {
            let i = "contextmenu" === e.type,
                a = eU && !i,
                s = i ? u.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : u.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eO(!0),
                t.isMultiUserDM()
                    ? (0, g.jW)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("79695"),
                                  n.e("90508"),
                                  n.e("25421"),
                                  n.e("89183"),
                              ]).then(n.bind(n, 354741));
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      ei(er({}, n), {
                                          channel: t,
                                          selected: l,
                                      }),
                                  );
                          },
                          {
                              impressionName: s,
                              noBlurEvent: !0,
                              onClose: () => eO(!1),
                          },
                      )
                    : (0, g.jW)(
                          e,
                          async () => {
                              let { default: e } = a
                                  ? await Promise.all([n.e("90508"), n.e("56167")]).then(n.bind(n, 416951))
                                  : await Promise.all([
                                        n.e("79695"),
                                        n.e("90508"),
                                        n.e("66165"),
                                        n.e("6915"),
                                        n.e("56826"),
                                        n.e("653"),
                                    ]).then(n.bind(n, 131404));
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      ei(er({}, n), {
                                          user: o,
                                          channel: t,
                                          channelSelected: l,
                                      }),
                                  );
                          },
                          {
                              impressionName: s,
                              onClose: () => eO(!1),
                          },
                      );
        },
        eq = (e) => {
            e.preventDefault(), e.stopPropagation();
            let i = et.intl.formatToPlainString(et.t.hJ5Ap4, { name: e_ }),
                l = et.intl.format(et.t.SSIVOu, { name: e_ });
            t.isManaged() &&
                ((i = et.intl.formatToPlainString(et.t.hVGjEW, { name: e_ })),
                (l = et.intl.format(et.t.IK1Qvs, { name: e_ }))),
                (0, v.ZDy)(async () => {
                    let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            er(
                                {
                                    header: i,
                                    body: l,
                                    onSubmit: eW,
                                },
                                t,
                            ),
                        );
                });
        },
        eJ = (0, r.jsx)(k.Z, {
            userName: e_,
            displayNameStyles: null == o ? void 0 : o.displayNameStyles,
            effectDisplayType: $ || l || eb ? D.F.ANIMATED : D.F.PLAIN,
            loop: $,
            boldFontOpacity: 0.9,
        }),
        eX = eE
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      eJ,
                      (0, r.jsx)(U.ZP, {
                          primaryGuild: null == o ? void 0 : o.primaryGuild,
                          userId: null == o ? void 0 : o.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(en.clanTag, { [en.clanTagMuted]: eD }),
                      }),
                  ],
              })
            : eJ,
        e$ = i.useRef(null),
        e0 = (0, I.Y)({ location: "PrivateChannel" }) && (null == o ? void 0 : o.displayNameStyles) != null,
        e1 = (0, f.Z)(),
        e5 = [
            (0, w.ZP)({
                channel: t,
                unread: ek,
            }),
            (0, w.Yb)({
                channel: t,
                muted: ew,
                userStatus: B,
            }),
        ]
            .filter(Boolean)
            .join(", ");
    return (0, r.jsx)(d.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                i = el(e, ["role"]);
            return (0, r.jsxs)(M.Z, {
                className: a()(en.channel, en.dm),
                role: n,
                focusProps: ei(er({}, eo), {
                    focusTarget: ev,
                    ringTarget: eg,
                }),
                ref: eg,
                onMouseEnter: eG,
                onMouseLeave: eF,
                onMouseDown: eK,
                onFocus: ez,
                onBlur: eH,
                onContextMenu: eV,
                "aria-setsize": X,
                "aria-posinset": J,
                children: [
                    ek ? (0, r.jsx)("div", { className: a()(en.unreadPill, { [en.muted]: eD }) }) : null,
                    (0, r.jsxs)(v.vjx, {
                        className: a()(en.interactive, {
                            [en.interactiveSystemDM]: eP && eS,
                            [en.interactiveSelected]: l || eb,
                        }),
                        as: "div",
                        onClick: eQ,
                        muted: eD,
                        selected: l,
                        children: [
                            (0, r.jsx)(F.Z, {
                                nameplate: eB ? K : void 0,
                                selected: l,
                                hovered: $,
                                content: e$,
                                placement: G.i.CHANNEL,
                            }),
                            (0, r.jsx)(
                                c.rU,
                                ei(
                                    er(
                                        {
                                            innerRef: ev,
                                            to: ee.Z5c.CHANNEL(ee.ME, t.id),
                                            className: en.link,
                                            "aria-label": e5,
                                        },
                                        i,
                                    ),
                                    {
                                        children: (0, r.jsx)(C.Z, {
                                            ref: e$,
                                            avatar: (() => {
                                                let e = v.EFr.SIZE_32;
                                                if (t.isMultiUserDM())
                                                    if (t.recipients.length >= 2 && null == t.icon)
                                                        return (0, r.jsx)(L.Z, {
                                                            "aria-hidden": !0,
                                                            recipients: t.recipients,
                                                            size: e,
                                                            isTyping: A,
                                                            status: B,
                                                        });
                                                    else
                                                        return (0, r.jsx)(
                                                            ea,
                                                            ei(er({}, ex), {
                                                                src: (0, Z.x)(t),
                                                                "aria-hidden": !0,
                                                                size: e,
                                                                status: A ? ee.Skl.ONLINE : B,
                                                                isTyping: A,
                                                            }),
                                                        );
                                                s()(
                                                    null != o,
                                                    "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                                );
                                                let n = null;
                                                return (
                                                    o.isSystemUser() || (n = (0, h.Z)(p) ? ee.Skl.STREAMING : B),
                                                    (0, r.jsx)(
                                                        ea,
                                                        ei(er({}, ex), {
                                                            size: v.EFr.SIZE_32,
                                                            src: eh,
                                                            avatarDecoration: ej,
                                                            status: n,
                                                            isMobile: W,
                                                            isTyping: A,
                                                            "aria-label": o.username,
                                                            statusTooltip: !0,
                                                        }),
                                                    )
                                                );
                                            })(),
                                            highlighted: ek && !eD,
                                            muted: eD,
                                            subText: t.isSystemDM()
                                                ? (0, r.jsx)("div", {
                                                      className: en.subtext,
                                                      children: (0, E.Z)(t.id)
                                                          ? et.intl.string(et.t.FL5T01)
                                                          : et.intl.string(et.t.NnY5lc),
                                                  })
                                                : t.isMultiUserDM()
                                                  ? (0, r.jsx)("div", {
                                                        className: en.subtext,
                                                        children: et.intl.format(et.t.CxSA5N, {
                                                            members: t.recipients.length + 1,
                                                        }),
                                                    })
                                                  : (0, x.Z)({
                                                          activities: p,
                                                          status: B,
                                                          applicationStream: j,
                                                          voiceChannel: N,
                                                      })
                                                    ? (0, r.jsx)(S.Z, {
                                                          location: "PrivateChannel",
                                                          user: o,
                                                          activities: p,
                                                          voiceChannel: N,
                                                          applicationStream: j,
                                                          animateEmoji: $ || ef || eb,
                                                          textClassName: en.activityStatusText,
                                                          iconClassName: eD ? en.mutedIcon : void 0,
                                                      })
                                                    : null,
                                            name: (0, r.jsx)(b.Z, {
                                                className: a()(en.overflowTooltip, { [en.withDisplayNameStyles]: e0 }),
                                                children: eX,
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, r.jsx)(P.Z, {
                                                      className: en.decorator,
                                                      type: P.Z.Types.SYSTEM_DM,
                                                      verified: !0,
                                                  })
                                                : null,
                                            withDisplayNameStyles: e0,
                                        }),
                                    },
                                ),
                            ),
                            (0, r.jsxs)("div", {
                                className: a()(en.iconsContainer, { [en.nameplated]: eB }),
                                children: [
                                    eR && !eb ? (0, r.jsx)(ec, {}) : null,
                                    eM ? (0, r.jsx)(eu, {}) : null,
                                    eI ? (0, r.jsx)(ed, {}) : null,
                                    eL && !e1
                                        ? (0, r.jsx)(O.u, {
                                              asContainer: !0,
                                              text: et.intl.string(eN ? et.t.Et8qwj : et.t["d+e27s"]),
                                              delay: 500,
                                              targetElementRef: eA,
                                              children: (0, r.jsx)(es, {
                                                  icon: v.xhG,
                                                  "aria-label": et.intl.string(et.t.PdRCRg),
                                                  onClick: (e) => {
                                                      eV(e);
                                                  },
                                                  onMouseDown: eY,
                                                  nameplate: K,
                                                  forceShow: eb,
                                                  visibleElementRef: eA,
                                              }),
                                          })
                                        : (0, r.jsx)(es, {
                                              icon: v.Dio,
                                              "aria-label": eN
                                                  ? et.intl.string(et.t["26C4oi"])
                                                  : et.intl.string(et.t.jsvgc3),
                                              onClick: eN ? eq : eW,
                                              onMouseDown: eY,
                                              nameplate: K,
                                              reducedClickTarget: !0,
                                              visibleElementRef: eA,
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
let em =
    12633 == n.j
        ? (e) => {
              var { channel: t, selected: n } = e,
                  i = el(e, ["channel", "selected"]);
              let l = (0, m.e7)([J.default], () => J.default.getUser(t.getRecipientId())),
                  a = null == l ? void 0 : l.id,
                  o = (0, m.cj)([K.Z, W.Z], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = K.Z.getState().statuses;
                          t.recipients.some((e) => n[e] === ee.Skl.ONLINE) && (e = ee.Skl.ONLINE);
                      } else null != a && (e = K.Z.getStatus(a));
                      return {
                          status: e,
                          activities: null != a ? K.Z.getActivities(a) : null,
                          applicationStream: null != a ? W.Z.getAnyStreamForUser(a) : null,
                          isMobile: null != a && K.Z.isMobileOnline(a),
                      };
                  }, [t, a]),
                  { voiceActivityStatusEnabled: s } = (0, j.U)({ location: "PrivateChannel" }),
                  { voiceChannel: c } = (0, N.Z)({ userId: a }),
                  u = (0, A.K)({ user: l }),
                  d = (0, m.e7)(
                      [J.default, V.Z],
                      () =>
                          t.isMultiUserDM()
                              ? X.default.keys(V.Z.getTypingUsers(t.id)).some((e) => {
                                    var t;
                                    return e !== (null == (t = J.default.getCurrentUser()) ? void 0 : t.id);
                                })
                              : null != l && V.Z.isTyping(t.id, t.getRecipientId()),
                      [t, l],
                  );
              return t.isMultiUserDM()
                  ? (0, r.jsx)(
                        ef,
                        er(
                            {
                                channel: t,
                                selected: n,
                                isTyping: d,
                                status: o.status === ee.Skl.ONLINE ? ee.Skl.ONLINE : void 0,
                            },
                            i,
                        ),
                    )
                  : (0, r.jsx)(
                        ef,
                        er(
                            {
                                channel: t,
                                selected: n,
                                user: l,
                                voiceChannel: s ? c : void 0,
                                isTyping: d,
                                nameplate: u,
                            },
                            i,
                            o,
                        ),
                    );
          }
        : null;

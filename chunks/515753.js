n.d(t, {
    Qj: () => eg,
    RS: () => ev,
    ZP: () => ey,
    bU: () => ed,
}),
    n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    s = n.n(i),
    a = n(896662),
    o = n(512722),
    u = n.n(o),
    c = n(319498),
    d = n(990547),
    m = n(91192),
    f = n(873546),
    p = n(442837),
    g = n(194983),
    v = n(481060),
    y = n(493683),
    x = n(239091),
    b = n(420660),
    h = n(468363),
    j = n(326255),
    O = n(956221),
    S = n(747017),
    E = n(385499),
    T = n(570908),
    N = n(702321),
    P = n(201895),
    C = n(43267),
    I = n(933557),
    Z = n(163889),
    _ = n(181430),
    w = n(821795),
    A = n(892567),
    M = n(853856),
    U = n(785232),
    D = n(172751),
    k = n(85746),
    R = n(825265),
    L = n(40620),
    Q = n(850020),
    H = n(379839),
    G = n(359135),
    F = n(516817),
    q = n(63759),
    B = n(866834),
    z = n(518950),
    V = n(199902),
    W = n(158776),
    K = n(306680),
    Y = n(699516),
    X = n(246946),
    J = n(111583),
    $ = n(9156),
    ee = n(594174),
    et = n(709054),
    en = n(998502),
    er = n(981631),
    el = n(388032),
    ei = n(102599);
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
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
            (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let eu = en.ZP.getEnableHardwareAcceleration() ? v.Xo$ : v.qEK,
    ec = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4,
        },
    },
    ed = (e) => {
        var { nameplate: t, icon: n, forceShow: l = !1, reducedClickTarget: i = !1, visibleElementRef: a } = e,
            o = eo(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
        let u = (0, H.A)(t);
        return (0, r.jsx)(
            v.P3F,
            ea(
                es(
                    {
                        className: s()(ei.closeButton, {
                            [ei.closeButtonPlated]: null != t,
                            [ei.closeButtonForceShow]: l,
                            [ei.reducedClickTarget]: i,
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
                        className: s()({ [ei.innerCloseButtonPlated]: null != t }),
                        children: (0, r.jsx)(n, {
                            size: "sm",
                            color: "currentColor",
                            className: s()(ei.closeIcon, { [ei.closeIconPlated]: null != t }),
                        }),
                    }),
                },
            ),
        );
    },
    em = () =>
        (0, r.jsx)(v.r7p, {
            size: "xs",
            color: "currentColor",
            className: ei.favoriteIcon,
        }),
    ef = () =>
        (0, r.jsx)(v.kZF, {
            size: "xs",
            color: "currentColor",
            className: ei.favoriteIcon,
        }),
    ep = () =>
        (0, r.jsx)(v.t6m, {
            size: "xs",
            color: "currentColor",
            className: ei.favoriteIcon,
        }),
    eg = (e) => {
        var {
                route: t,
                selected: n,
                icon: l,
                iconClassName: i,
                interactiveClassName: a,
                text: o,
                children: u,
                locationState: d,
                onClick: m,
                className: p,
                role: g,
                "aria-posinset": y,
                "aria-setsize": x,
                listItemRef: b,
            } = e,
            h = eo(e, [
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
        return (0, r.jsx)(Z.Z, {
            className: s()(ei.channel, { [ei.fullWidth]: f.tq }, p),
            onClick: m,
            role: g,
            focusProps: es({ within: !0 }, ec),
            "aria-posinset": y,
            "aria-setsize": x,
            ref: b,
            children: (0, r.jsx)(v.vjx, {
                as: "div",
                selected: n,
                className: s()(a, ei.interactive, ei.linkButton, { [ei.interactiveSelected]: n }),
                children: (0, r.jsxs)(
                    c.rU,
                    ea(
                        es(
                            {
                                to: {
                                    pathname: t,
                                    state: d,
                                },
                                className: ei.link,
                            },
                            h,
                        ),
                        {
                            children: [
                                (0, r.jsx)(T.Z, {
                                    muted: !1,
                                    avatar: (0, r.jsx)(l, {
                                        size: "refresh_sm",
                                        className: s()(ei.linkButtonIcon, i),
                                        color: "currentColor",
                                    }),
                                    name: o,
                                    innerClassName: ei.avatarWithText,
                                }),
                                u,
                            ],
                        },
                    ),
                ),
            }),
        });
    };
function ev(e) {
    let {
            channel: t,
            selected: i = !1,
            user: o,
            activities: f,
            applicationStream: h,
            voiceChannel: O,
            isTyping: Q,
            status: H,
            isMobile: V,
            nameplate: W,
            latestMessage: J,
            ref: ee,
            "aria-posinset": en,
            "aria-setsize": eg,
        } = e,
        [ev, ey] = l.useState(!1),
        [ex, eb] = l.useState(!1),
        [eh, ej] = l.useState(!1),
        eO = l.useRef(null),
        eS = l.useRef(null),
        eE = null != ee ? ee : eS,
        {
            avatarSrc: eT,
            avatarDecorationSrc: eN,
            eventHandlers: eP,
        } = (0, z.Z)({
            userId: null == o ? void 0 : o.id,
            size: v.EFr.SIZE_32,
            animateOnHover: !(i || ev || ex || eh),
        }),
        eC = t.isMultiUserDM(),
        eI = t.isSystemDM(),
        eZ = !eC && !eI && t.type === er.d4z.DM,
        e_ = eZ && (null == o ? void 0 : o.primaryGuild) != null,
        ew = (0, p.e7)([$.ZP], () => $.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eA, blocked: eM } = (0, p.cj)([Y.Z], () => ({
            ignored: Y.Z.isIgnored(t.getRecipientId()),
            blocked: Y.Z.isBlocked(t.getRecipientId()),
        })),
        eU = eZ && eA,
        eD = eZ && eM,
        ek = (ew || eU || eD) && !(i || ev),
        { hasUnreadMessages: eR, lastMessageId: eL } = (0, p.cj)([K.ZP], () => ({
            hasUnreadMessages: K.ZP.getMentionCount(t.id) > 0,
            lastMessageId: K.ZP.lastMessageId(t.id),
        })),
        eQ = (0, I.ZP)(t),
        eH = (0, p.e7)([M.Z], () => M.Z.isFavorite(t.id)),
        { showMessagePreviews: eG, prioritizeOverStatus: eF } = L.U.useConfig({ location: "PrivateChannel" }),
        eq = (0, p.e7)([X.Z], () => X.Z.hidePersonalInformation),
        eB = (0, R.X)(t.guild_id),
        ez = (0, q.l)({ timestamp: et.default.extractTimestamp(null != eL ? eL : t.id) }),
        eV = l.useRef(null),
        eW = null != W && (i || ev || eh),
        eK = () => {
            ey(!0);
        },
        eY = () => {
            ey(!1);
        },
        eX = () => {
            eb(!0);
        },
        eJ = () => {
            eb(!1);
        },
        e$ = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), y.Z.closePrivateChannel(t.id, i, n);
        },
        e0 = () => {
            y.Z.preload(er.ME, t.id);
        },
        e1 = (e) => {
            e.stopPropagation();
        },
        e4 = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = eO.current) || t.click();
            }
        },
        e5 = (e) => {
            let l =
                "contextmenu" === e.type
                    ? d.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                    : d.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ej(!0),
                t.isMultiUserDM()
                    ? (0, x.jW)(
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
                                      ea(es({}, n), {
                                          channel: t,
                                          selected: i,
                                      }),
                                  );
                          },
                          {
                              impressionName: l,
                              noBlurEvent: !0,
                              onClose: () => ej(!1),
                          },
                      )
                    : (0, x.jW)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("79695"),
                                  n.e("90508"),
                                  n.e("4040"),
                                  n.e("6915"),
                                  n.e("56826"),
                                  n.e("15160"),
                              ]).then(n.bind(n, 131404));
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
                              onClose: () => ej(!1),
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
                (0, v.ZDy)(async () => {
                    let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            es(
                                {
                                    header: l,
                                    body: i,
                                    onSubmit: e$,
                                },
                                t,
                            ),
                        );
                });
        },
        e3 = (0, r.jsx)(A.Z, {
            userName: eQ,
            displayNameStyles: null == o ? void 0 : o.displayNameStyles,
            effectDisplayType: ev || i || eh ? w.F.ANIMATED : w.F.PLAIN,
            loop: ev,
            boldFontOpacity: 0.9,
        }),
        e7 = e_
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      e3,
                      (0, r.jsx)(D.ZP, {
                          primaryGuild: null == o ? void 0 : o.primaryGuild,
                          userId: null == o ? void 0 : o.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: s()(ei.clanTag, { [ei.clanTagMuted]: ek }),
                      }),
                  ],
              })
            : e3,
        e8 = l.useRef(null),
        e9 = (0, _.Y)({ location: "PrivateChannel" }) && (null == o ? void 0 : o.displayNameStyles) != null,
        e2 = [
            (0, P.ZP)({
                channel: t,
                unread: eR,
            }),
            (0, P.Yb)({
                channel: t,
                muted: ew,
                userStatus: H,
            }),
        ]
            .filter(Boolean)
            .join(", "),
        te = (0, r.jsxs)(r.Fragment, {
            children: [
                eH && !eh ? (0, r.jsx)(em, {}) : null,
                eU ? (0, r.jsx)(ef, {}) : null,
                eD ? (0, r.jsx)(ep, {}) : null,
            ],
        }),
        tt = eG
            ? (0, r.jsxs)("div", {
                  className: ei.timestampContainer,
                  children: [
                      te,
                      eB !== k.Z.ALL || eq
                          ? null
                          : (0, r.jsx)(v.Text, {
                                variant: "text-xs/normal",
                                color: i ? "interactive-text-active" : eR ? "interactive-text-default" : "text-muted",
                                className: ei.timestamp,
                                children: ez,
                            }),
                  ],
              })
            : null;
    return (0, r.jsx)(m.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                l = eo(e, ["role"]);
            return (0, r.jsxs)(Z.Z, {
                className: s()(ei.channel, ei.dm),
                role: n,
                focusProps: ea(es({}, ec), {
                    focusTarget: eO,
                    ringTarget: eE,
                }),
                ref: eE,
                onMouseEnter: eK,
                onMouseLeave: eY,
                onMouseDown: e0,
                onFocus: eX,
                onBlur: eJ,
                onContextMenu: e5,
                "aria-setsize": eg,
                "aria-posinset": en,
                children: [
                    eR ? (0, r.jsx)("div", { className: s()(ei.unreadPill, { [ei.muted]: ek }) }) : null,
                    (0, r.jsxs)(v.vjx, {
                        className: s()(ei.interactive, { [ei.interactiveSelected]: i || eh }),
                        as: "div",
                        onClick: e4,
                        muted: ek,
                        selected: i,
                        children: [
                            (0, r.jsx)(F.Z, {
                                nameplate: eW ? W : void 0,
                                selected: i,
                                hovered: ev,
                                content: e8,
                                placement: G.i.CHANNEL,
                            }),
                            (0, r.jsx)(
                                c.rU,
                                ea(
                                    es(
                                        {
                                            innerRef: eO,
                                            to: er.Z5c.CHANNEL(er.ME, t.id),
                                            className: ei.link,
                                            "aria-label": e2,
                                        },
                                        l,
                                    ),
                                    {
                                        children: (0, r.jsx)(T.Z, {
                                            ref: e8,
                                            avatar: (() => {
                                                let e = v.EFr.SIZE_32;
                                                if (t.isMultiUserDM())
                                                    if (t.recipients.length >= 2 && null == t.icon)
                                                        return (0, r.jsx)(U.Z, {
                                                            "aria-hidden": !0,
                                                            recipients: t.recipients,
                                                            size: e,
                                                            isTyping: Q,
                                                            status: H,
                                                        });
                                                    else
                                                        return (0, r.jsx)(
                                                            eu,
                                                            ea(es({}, eP), {
                                                                src: (0, C.x)(t),
                                                                "aria-hidden": !0,
                                                                size: e,
                                                                status: Q ? er.Skl.ONLINE : H,
                                                                isTyping: Q,
                                                            }),
                                                        );
                                                u()(
                                                    null != o,
                                                    "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                                );
                                                let n = null;
                                                return (
                                                    o.isSystemUser() || (n = (0, b.Z)(f) ? er.Skl.STREAMING : H),
                                                    (0, r.jsx)(
                                                        eu,
                                                        ea(es({}, eP), {
                                                            size: v.EFr.SIZE_32,
                                                            src: eT,
                                                            avatarDecoration: eN,
                                                            status: n,
                                                            isMobile: V,
                                                            isTyping: Q,
                                                            "aria-label": o.username,
                                                            statusTooltip: !0,
                                                        }),
                                                    )
                                                );
                                            })(),
                                            highlighted: eR && !ek,
                                            muted: ek,
                                            subText: (() => {
                                                let e =
                                                        (null == f
                                                            ? void 0
                                                            : f.some((e) => e.type !== er.IIU.CUSTOM_STATUS)) === !0,
                                                    n =
                                                        eG && null != J && !eq
                                                            ? (0, r.jsx)("div", {
                                                                  className: ei.subtext,
                                                                  children: (0, r.jsx)(B.o, {
                                                                      channel: t,
                                                                      message: J,
                                                                  }),
                                                              })
                                                            : null,
                                                    l =
                                                        null != J &&
                                                        null != n &&
                                                        (1 > (0, a.Z)(new Date(), J.timestamp) || (eF && !e) || eR);
                                                return t.isSystemDM()
                                                    ? (0, r.jsx)("div", {
                                                          className: ei.subtext,
                                                          children: (0, N.Z)(t.id)
                                                              ? el.intl.string(el.t.FL5T01)
                                                              : el.intl.string(el.t.NnY5lc),
                                                      })
                                                    : t.isMultiUserDM()
                                                      ? null != n
                                                          ? n
                                                          : (0, r.jsx)("div", {
                                                                className: ei.subtext,
                                                                children: el.intl.format(el.t.CxSA5N, {
                                                                    members: t.recipients.length + 1,
                                                                }),
                                                            })
                                                      : !l &&
                                                          (0, j.Z)({
                                                              activities: f,
                                                              status: H,
                                                              applicationStream: h,
                                                              voiceChannel: O,
                                                          })
                                                        ? (0, r.jsx)(S.Z, {
                                                              user: o,
                                                              activities: f,
                                                              voiceChannel: O,
                                                              applicationStream: h,
                                                              animateEmoji: ev || ex || eh,
                                                              textClassName: ei.activityStatusText,
                                                              iconClassName: ek ? ei.mutedIcon : void 0,
                                                          })
                                                        : null != n
                                                          ? n
                                                          : null;
                                            })(),
                                            subtextClassName: s()(ei.subtextContainer, {
                                                [ei.subtextNameplated]: eW,
                                                [ei.moreSpace]: eG,
                                            }),
                                            nameClassName: ei.username,
                                            name: (0, r.jsx)(g.Z, {
                                                className: s()(ei.overflowTooltip, { [ei.withDisplayNameStyles]: e9 }),
                                                children: e7,
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, r.jsx)(E.Z, {
                                                      className: ei.decorator,
                                                      type: E.Z.Types.SYSTEM_DM,
                                                      verified: !0,
                                                  })
                                                : null,
                                            rightDecorators: tt,
                                            withDisplayNameStyles: e9,
                                        }),
                                    },
                                ),
                            ),
                            (0, r.jsxs)("div", {
                                className: s()(ei.iconsContainer, { [ei.nameplated]: eW && !eG }),
                                children: [
                                    !eG && te,
                                    (0, r.jsx)(ed, {
                                        icon: v.Dio,
                                        "aria-label": eC ? el.intl.string(el.t["26C4oi"]) : el.intl.string(el.t.jsvgc3),
                                        onClick: eC ? e6 : e$,
                                        onMouseDown: e1,
                                        nameplate: W,
                                        reducedClickTarget: !0,
                                        visibleElementRef: eV,
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
let ey =
    12633 == n.j
        ? (e) => {
              var { channel: t, selected: n } = e,
                  l = eo(e, ["channel", "selected"]);
              let i = (0, p.e7)([ee.default], () => ee.default.getUser(t.getRecipientId())),
                  s = null == i ? void 0 : i.id,
                  a = (0, p.cj)([W.Z, V.Z], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = W.Z.getState().statuses;
                          t.recipients.some((e) => n[e] === er.Skl.ONLINE) && (e = er.Skl.ONLINE);
                      } else null != s && (e = W.Z.getStatus(s));
                      return {
                          status: e,
                          activities: null != s ? W.Z.getActivities(s) : null,
                          applicationStream: null != s ? V.Z.getAnyStreamForUser(s) : null,
                          isMobile: null != s && W.Z.isMobileOnline(s),
                      };
                  }, [t, s]),
                  { voiceActivityStatusEnabled: o } = (0, h.U)({ location: "PrivateChannel" }),
                  { voiceChannel: u } = (0, O.Z)({ userId: s }),
                  c = (0, Q.K)({ user: i }),
                  d = (0, p.e7)(
                      [ee.default, J.Z],
                      () =>
                          t.isMultiUserDM()
                              ? et.default.keys(J.Z.getTypingUsers(t.id)).some((e) => {
                                    var t;
                                    return e !== (null == (t = ee.default.getCurrentUser()) ? void 0 : t.id);
                                })
                              : null != i && J.Z.isTyping(t.id, t.getRecipientId()),
                      [t, i],
                  ),
                  { showMessagePreviews: m } = L.U.useConfig({ location: "PrivateChannel" }),
                  f = (0, R.Z)(t, { disabled: !m });
              return t.isMultiUserDM()
                  ? (0, r.jsx)(
                        ev,
                        es(
                            {
                                channel: t,
                                selected: n,
                                isTyping: d,
                                status: a.status === er.Skl.ONLINE ? er.Skl.ONLINE : void 0,
                                latestMessage: f,
                            },
                            l,
                        ),
                    )
                  : (0, r.jsx)(
                        ev,
                        es(
                            {
                                channel: t,
                                selected: n,
                                user: i,
                                voiceChannel: o ? u : void 0,
                                isTyping: d,
                                nameplate: c,
                                latestMessage: f,
                            },
                            l,
                            a,
                        ),
                    );
          }
        : null;

n.d(t, {
    Qj: () => eh,
    RS: () => eO,
    ZP: () => ev,
    bU: () => em,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(896662),
    s = n(512722),
    u = n.n(s),
    c = n(319498),
    d = n(990547),
    f = n(91192),
    p = n(873546),
    m = n(893999),
    g = n(442837),
    y = n(194983),
    b = n(28664),
    h = n(481060),
    O = n(493683),
    v = n(239091),
    x = n(420660),
    j = n(468363),
    P = n(326255),
    S = n(956221),
    N = n(747017),
    E = n(385499),
    C = n(570908),
    T = n(702321),
    Z = n(201895),
    w = n(43267),
    I = n(933557),
    k = n(163889),
    M = n(181430),
    D = n(821795),
    _ = n(892567),
    U = n(853856),
    R = n(489618),
    L = n(785232),
    A = n(172751),
    F = n(85746),
    G = n(825265),
    H = n(40620),
    B = n(850020),
    z = n(379839),
    K = n(359135),
    Y = n(516817),
    W = n(63759),
    X = n(866834),
    q = n(518950),
    V = n(199902),
    J = n(158776),
    Q = n(306680),
    $ = n(699516),
    ee = n(246946),
    et = n(111583),
    en = n(9156),
    er = n(594174),
    ei = n(709054),
    el = n(998502),
    ea = n(981631),
    eo = n(388032),
    es = n(102599);
function eu(e) {
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
function ec(e, t) {
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
function ed(e, t) {
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
let ef = el.ZP.getEnableHardwareAcceleration() ? h.Xo$ : h.qEK,
    ep = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4,
        },
    },
    em = (e) => {
        var { nameplate: t, icon: n, forceShow: i = !1, reducedClickTarget: l = !1, visibleElementRef: o } = e,
            s = ed(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
        let u = (0, z.A)(t);
        return (0, r.jsx)(
            h.P3F,
            ec(
                eu(
                    {
                        className: a()(es.closeButton, {
                            [es.closeButtonPlated]: null != t,
                            [es.closeButtonForceShow]: i,
                            [es.reducedClickTarget]: l,
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
                        ref: o,
                        className: a()({ [es.innerCloseButtonPlated]: null != t }),
                        children: (0, r.jsx)(n, {
                            size: "sm",
                            color: "currentColor",
                            className: a()(es.closeIcon, { [es.closeIconPlated]: null != t }),
                        }),
                    }),
                },
            ),
        );
    },
    eg = () =>
        (0, r.jsx)(h.r7p, {
            size: "xs",
            color: "currentColor",
            className: es.favoriteIcon,
        }),
    ey = () =>
        (0, r.jsx)(h.kZF, {
            size: "xs",
            color: "currentColor",
            className: es.favoriteIcon,
        }),
    eb = () =>
        (0, r.jsx)(h.t6m, {
            size: "xs",
            color: "currentColor",
            className: es.favoriteIcon,
        }),
    eh = (e) => {
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
                role: g,
                "aria-posinset": y,
                "aria-setsize": b,
                listItemRef: O,
            } = e,
            v = ed(e, [
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
        return (0, r.jsx)(k.Z, {
            className: a()(es.channel, { [es.fullWidth]: p.tq }, m),
            onClick: f,
            role: g,
            focusProps: eu({ within: !0 }, ep),
            "aria-posinset": y,
            "aria-setsize": b,
            ref: O,
            children: (0, r.jsx)(h.vjx, {
                as: "div",
                selected: n,
                className: a()(o, es.interactive, es.linkButton, { [es.interactiveSelected]: n }),
                children: (0, r.jsxs)(
                    c.rU,
                    ec(
                        eu(
                            {
                                to: {
                                    pathname: t,
                                    state: d,
                                },
                                className: es.link,
                            },
                            v,
                        ),
                        {
                            children: [
                                (0, r.jsx)(C.Z, {
                                    muted: !1,
                                    avatar: (0, r.jsx)(i, {
                                        size: "refresh_sm",
                                        className: a()(es.linkButtonIcon, l),
                                        color: "currentColor",
                                    }),
                                    name: s,
                                    innerClassName: es.avatarWithText,
                                }),
                                u,
                            ],
                        },
                    ),
                ),
            }),
        });
    };
function eO(e) {
    let {
            channel: t,
            selected: l = !1,
            user: s,
            activities: p,
            applicationStream: j,
            voiceChannel: S,
            isTyping: B,
            status: z,
            isMobile: V,
            nameplate: J,
            latestMessage: et,
            ref: er,
            "aria-posinset": el,
            "aria-setsize": eh,
        } = e,
        [eO, ev] = i.useState(!1),
        [ex, ej] = i.useState(!1),
        [eP, eS] = i.useState(!1),
        eN = i.useRef(null),
        eE = i.useRef(null),
        eC = null != er ? er : eE,
        {
            avatarSrc: eT,
            avatarDecorationSrc: eZ,
            eventHandlers: ew,
        } = (0, q.Z)({
            userId: null == s ? void 0 : s.id,
            size: h.EFr.SIZE_32,
            animateOnHover: !(l || eO || ex || eP),
        }),
        eI = t.isMultiUserDM(),
        ek = t.isSystemDM(),
        eM = !eI && !ek && t.type === ea.d4z.DM,
        eD = eM && (null == s ? void 0 : s.primaryGuild) != null,
        e_ = (0, g.e7)([en.ZP], () => en.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eU, blocked: eR } = (0, g.cj)([$.Z], () => ({
            ignored: $.Z.isIgnored(t.getRecipientId()),
            blocked: $.Z.isBlocked(t.getRecipientId()),
        })),
        eL = eM && eU,
        eA = eM && eR,
        eF = (e_ || eL || eA) && !(l || eO),
        { hasUnreadMessages: eG, lastMessageId: eH } = (0, g.cj)([Q.ZP], () => ({
            hasUnreadMessages: Q.ZP.getMentionCount(t.id) > 0,
            lastMessageId: Q.ZP.lastMessageId(t.id),
        })),
        eB = (0, I.ZP)(t),
        ez = (0, g.e7)([U.Z], () => U.Z.isFavorite(t.id)),
        { dotsInsteadOfCloseButton: eK, rearrangeContextMenu: eY } = R.Z.useExperiment(
            { location: "private_channel" },
            { autoTrackExposure: !0 },
        ),
        { showMessagePreviews: eW, prioritizeOverStatus: eX } = H.U.useConfig({ location: "PrivateChannel" }),
        eq = (0, g.e7)([ee.Z], () => ee.Z.hidePersonalInformation),
        eV = (0, G.X)(t.guild_id),
        eJ = (0, W.l)({ timestamp: ei.default.extractTimestamp(null != eH ? eH : t.id) }),
        eQ = i.useRef(null),
        e$ = null != J && (l || eO || eP),
        e0 = () => {
            ev(!0);
        },
        e1 = () => {
            ev(!1);
        },
        e5 = () => {
            ej(!0);
        },
        e4 = () => {
            ej(!1);
        },
        e6 = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), O.Z.closePrivateChannel(t.id, l, n);
        },
        e3 = () => {
            O.Z.preload(ea.ME, t.id);
        },
        e8 = (e) => {
            e.stopPropagation();
        },
        e7 = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = eN.current) || t.click();
            }
        },
        e9 = (e) => {
            let i = "contextmenu" === e.type,
                a = eY && !i,
                o = i ? d.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : d.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eS(!0),
                t.isMultiUserDM()
                    ? (0, v.jW)(
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
                                      ec(eu({}, n), {
                                          channel: t,
                                          selected: l,
                                      }),
                                  );
                          },
                          {
                              impressionName: o,
                              noBlurEvent: !0,
                              onClose: () => eS(!1),
                          },
                      )
                    : (0, v.jW)(
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
                                        n.e("15160"),
                                    ]).then(n.bind(n, 131404));
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      ec(eu({}, n), {
                                          user: s,
                                          channel: t,
                                          channelSelected: l,
                                      }),
                                  );
                          },
                          {
                              impressionName: o,
                              onClose: () => eS(!1),
                          },
                      );
        },
        e2 = (e) => {
            e.preventDefault(), e.stopPropagation();
            let i = eo.intl.formatToPlainString(eo.t.hJ5Ap4, { name: eB }),
                l = eo.intl.format(eo.t.SSIVOu, { name: eB });
            t.isManaged() &&
                ((i = eo.intl.formatToPlainString(eo.t.hVGjEW, { name: eB })),
                (l = eo.intl.format(eo.t.IK1Qvs, { name: eB }))),
                (0, h.ZDy)(async () => {
                    let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            eu(
                                {
                                    header: i,
                                    body: l,
                                    onSubmit: e6,
                                },
                                t,
                            ),
                        );
                });
        },
        te = (0, r.jsx)(_.Z, {
            userName: eB,
            displayNameStyles: null == s ? void 0 : s.displayNameStyles,
            effectDisplayType: eO || l || eP ? D.F.ANIMATED : D.F.PLAIN,
            loop: eO,
            boldFontOpacity: 0.9,
        }),
        tt = eD
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      te,
                      (0, r.jsx)(A.ZP, {
                          primaryGuild: null == s ? void 0 : s.primaryGuild,
                          userId: null == s ? void 0 : s.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(es.clanTag, { [es.clanTagMuted]: eF }),
                      }),
                  ],
              })
            : te,
        tn = i.useRef(null),
        tr = (0, M.Y)({ location: "PrivateChannel" }) && (null == s ? void 0 : s.displayNameStyles) != null,
        ti = (0, m.Z)(),
        tl = [
            (0, Z.ZP)({
                channel: t,
                unread: eG,
            }),
            (0, Z.Yb)({
                channel: t,
                muted: e_,
                userStatus: z,
            }),
        ]
            .filter(Boolean)
            .join(", "),
        ta = (0, r.jsxs)(r.Fragment, {
            children: [
                ez && !eP ? (0, r.jsx)(eg, {}) : null,
                eL ? (0, r.jsx)(ey, {}) : null,
                eA ? (0, r.jsx)(eb, {}) : null,
            ],
        }),
        to = eW
            ? (0, r.jsxs)("div", {
                  className: es.timestampContainer,
                  children: [
                      ta,
                      eV !== F.Z.ALL || eq
                          ? null
                          : (0, r.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: l ? "interactive-text-active" : eG ? "interactive-text-default" : "text-muted",
                                className: es.timestamp,
                                children: eJ,
                            }),
                  ],
              })
            : null;
    return (0, r.jsx)(f.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                i = ed(e, ["role"]);
            return (0, r.jsxs)(k.Z, {
                className: a()(es.channel, es.dm),
                role: n,
                focusProps: ec(eu({}, ep), {
                    focusTarget: eN,
                    ringTarget: eC,
                }),
                ref: eC,
                onMouseEnter: e0,
                onMouseLeave: e1,
                onMouseDown: e3,
                onFocus: e5,
                onBlur: e4,
                onContextMenu: e9,
                "aria-setsize": eh,
                "aria-posinset": el,
                children: [
                    eG ? (0, r.jsx)("div", { className: a()(es.unreadPill, { [es.muted]: eF }) }) : null,
                    (0, r.jsxs)(h.vjx, {
                        className: a()(es.interactive, { [es.interactiveSelected]: l || eP }),
                        as: "div",
                        onClick: e7,
                        muted: eF,
                        selected: l,
                        children: [
                            (0, r.jsx)(Y.Z, {
                                nameplate: e$ ? J : void 0,
                                selected: l,
                                hovered: eO,
                                content: tn,
                                placement: K.i.CHANNEL,
                            }),
                            (0, r.jsx)(
                                c.rU,
                                ec(
                                    eu(
                                        {
                                            innerRef: eN,
                                            to: ea.Z5c.CHANNEL(ea.ME, t.id),
                                            className: es.link,
                                            "aria-label": tl,
                                        },
                                        i,
                                    ),
                                    {
                                        children: (0, r.jsx)(C.Z, {
                                            ref: tn,
                                            avatar: (() => {
                                                let e = h.EFr.SIZE_32;
                                                if (t.isMultiUserDM())
                                                    if (t.recipients.length >= 2 && null == t.icon)
                                                        return (0, r.jsx)(L.Z, {
                                                            "aria-hidden": !0,
                                                            recipients: t.recipients,
                                                            size: e,
                                                            isTyping: B,
                                                            status: z,
                                                        });
                                                    else
                                                        return (0, r.jsx)(
                                                            ef,
                                                            ec(eu({}, ew), {
                                                                src: (0, w.x)(t),
                                                                "aria-hidden": !0,
                                                                size: e,
                                                                status: B ? ea.Skl.ONLINE : z,
                                                                isTyping: B,
                                                            }),
                                                        );
                                                u()(
                                                    null != s,
                                                    "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                                );
                                                let n = null;
                                                return (
                                                    s.isSystemUser() || (n = (0, x.Z)(p) ? ea.Skl.STREAMING : z),
                                                    (0, r.jsx)(
                                                        ef,
                                                        ec(eu({}, ew), {
                                                            size: h.EFr.SIZE_32,
                                                            src: eT,
                                                            avatarDecoration: eZ,
                                                            status: n,
                                                            isMobile: V,
                                                            isTyping: B,
                                                            "aria-label": s.username,
                                                            statusTooltip: !0,
                                                        }),
                                                    )
                                                );
                                            })(),
                                            highlighted: eG && !eF,
                                            muted: eF,
                                            subText: (() => {
                                                let e =
                                                        (null == p
                                                            ? void 0
                                                            : p.some((e) => e.type !== ea.IIU.CUSTOM_STATUS)) === !0,
                                                    n =
                                                        eW && null != et && !eq
                                                            ? (0, r.jsx)("div", {
                                                                  className: es.subtext,
                                                                  children: (0, r.jsx)(X.o, {
                                                                      channel: t,
                                                                      message: et,
                                                                  }),
                                                              })
                                                            : null,
                                                    i =
                                                        null != et &&
                                                        null != n &&
                                                        (1 > (0, o.Z)(new Date(), et.timestamp) || (eX && !e) || eG);
                                                return t.isSystemDM()
                                                    ? (0, r.jsx)("div", {
                                                          className: es.subtext,
                                                          children: (0, T.Z)(t.id)
                                                              ? eo.intl.string(eo.t.FL5T01)
                                                              : eo.intl.string(eo.t.NnY5lc),
                                                      })
                                                    : t.isMultiUserDM()
                                                      ? null != n
                                                          ? n
                                                          : (0, r.jsx)("div", {
                                                                className: es.subtext,
                                                                children: eo.intl.format(eo.t.CxSA5N, {
                                                                    members: t.recipients.length + 1,
                                                                }),
                                                            })
                                                      : !i &&
                                                          (0, P.Z)({
                                                              activities: p,
                                                              status: z,
                                                              applicationStream: j,
                                                              voiceChannel: S,
                                                          })
                                                        ? (0, r.jsx)(N.Z, {
                                                              user: s,
                                                              activities: p,
                                                              voiceChannel: S,
                                                              applicationStream: j,
                                                              animateEmoji: eO || ex || eP,
                                                              textClassName: es.activityStatusText,
                                                              iconClassName: eF ? es.mutedIcon : void 0,
                                                          })
                                                        : null != n
                                                          ? n
                                                          : null;
                                            })(),
                                            subtextClassName: a()(es.subtextContainer, {
                                                [es.subtextNameplated]: e$,
                                                [es.moreSpace]: eW,
                                            }),
                                            nameClassName: es.username,
                                            name: (0, r.jsx)(y.Z, {
                                                className: a()(es.overflowTooltip, { [es.withDisplayNameStyles]: tr }),
                                                children: tt,
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, r.jsx)(E.Z, {
                                                      className: es.decorator,
                                                      type: E.Z.Types.SYSTEM_DM,
                                                      verified: !0,
                                                  })
                                                : null,
                                            rightDecorators: to,
                                            withDisplayNameStyles: tr,
                                        }),
                                    },
                                ),
                            ),
                            (0, r.jsxs)("div", {
                                className: a()(es.iconsContainer, { [es.nameplated]: e$ && !eW }),
                                children: [
                                    !eW && ta,
                                    eK && !ti
                                        ? (0, r.jsx)(b.u, {
                                              asContainer: !0,
                                              text: eo.intl.string(eI ? eo.t.Et8qwj : eo.t["d+e27s"]),
                                              delay: 500,
                                              targetElementRef: eQ,
                                              children: (0, r.jsx)(em, {
                                                  icon: h.xhG,
                                                  "aria-label": eo.intl.string(eo.t.PdRCRg),
                                                  onClick: (e) => {
                                                      e9(e);
                                                  },
                                                  onMouseDown: e8,
                                                  nameplate: J,
                                                  forceShow: eP,
                                                  visibleElementRef: eQ,
                                              }),
                                          })
                                        : (0, r.jsx)(em, {
                                              icon: h.Dio,
                                              "aria-label": eI
                                                  ? eo.intl.string(eo.t["26C4oi"])
                                                  : eo.intl.string(eo.t.jsvgc3),
                                              onClick: eI ? e2 : e6,
                                              onMouseDown: e8,
                                              nameplate: J,
                                              reducedClickTarget: !0,
                                              visibleElementRef: eQ,
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
let ev =
    12633 == n.j
        ? (e) => {
              var { channel: t, selected: n } = e,
                  i = ed(e, ["channel", "selected"]);
              let l = (0, g.e7)([er.default], () => er.default.getUser(t.getRecipientId())),
                  a = null == l ? void 0 : l.id,
                  o = (0, g.cj)([J.Z, V.Z], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = J.Z.getState().statuses;
                          t.recipients.some((e) => n[e] === ea.Skl.ONLINE) && (e = ea.Skl.ONLINE);
                      } else null != a && (e = J.Z.getStatus(a));
                      return {
                          status: e,
                          activities: null != a ? J.Z.getActivities(a) : null,
                          applicationStream: null != a ? V.Z.getAnyStreamForUser(a) : null,
                          isMobile: null != a && J.Z.isMobileOnline(a),
                      };
                  }, [t, a]),
                  { voiceActivityStatusEnabled: s } = (0, j.U)({ location: "PrivateChannel" }),
                  { voiceChannel: u } = (0, S.Z)({ userId: a }),
                  c = (0, B.K)({ user: l }),
                  d = (0, g.e7)(
                      [er.default, et.Z],
                      () =>
                          t.isMultiUserDM()
                              ? ei.default.keys(et.Z.getTypingUsers(t.id)).some((e) => {
                                    var t;
                                    return e !== (null == (t = er.default.getCurrentUser()) ? void 0 : t.id);
                                })
                              : null != l && et.Z.isTyping(t.id, t.getRecipientId()),
                      [t, l],
                  ),
                  { showMessagePreviews: f } = H.U.useConfig({ location: "PrivateChannel" }),
                  p = (0, G.Z)(t, { disabled: !f });
              return t.isMultiUserDM()
                  ? (0, r.jsx)(
                        eO,
                        eu(
                            {
                                channel: t,
                                selected: n,
                                isTyping: d,
                                status: o.status === ea.Skl.ONLINE ? ea.Skl.ONLINE : void 0,
                                latestMessage: p,
                            },
                            i,
                        ),
                    )
                  : (0, r.jsx)(
                        eO,
                        eu(
                            {
                                channel: t,
                                selected: n,
                                user: l,
                                voiceChannel: s ? u : void 0,
                                isTyping: d,
                                nameplate: c,
                                latestMessage: p,
                            },
                            i,
                            o,
                        ),
                    );
          }
        : null;

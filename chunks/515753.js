n.d(t, {
    Qj: () => eb,
    RS: () => ev,
    ZP: () => eh,
    bU: () => ef,
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
    m = n(91192),
    f = n(873546),
    p = n(893999),
    g = n(442837),
    y = n(194983),
    b = n(28664),
    v = n(481060),
    h = n(493683),
    O = n(239091),
    x = n(420660),
    j = n(468363),
    P = n(326255),
    S = n(956221),
    N = n(771173),
    E = n(385499),
    C = n(570908),
    T = n(702321),
    Z = n(201895),
    I = n(43267),
    w = n(933557),
    k = n(163889),
    M = n(181430),
    D = n(821795),
    _ = n(892567),
    U = n(853856),
    R = n(489618),
    A = n(785232),
    L = n(172751),
    G = n(825265),
    F = n(40620),
    H = n(850020),
    B = n(379839),
    z = n(359135),
    Y = n(516817),
    W = n(63759),
    K = n(866834),
    q = n(518950),
    V = n(199902),
    X = n(158776),
    J = n(306680),
    Q = n(699516),
    $ = n(246946),
    ee = n(111583),
    et = n(9156),
    en = n(594174),
    er = n(709054),
    ei = n(998502),
    el = n(981631),
    ea = n(388032),
    eo = n(102599);
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
function eu(e, t) {
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
function ec(e, t) {
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
let ed = ei.ZP.getEnableHardwareAcceleration() ? v.Xo$ : v.qEK,
    em = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4,
        },
    },
    ef = (e) => {
        var { nameplate: t, icon: n, forceShow: i = !1, reducedClickTarget: l = !1, visibleElementRef: o } = e,
            s = ec(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
        let u = (0, B.A)(t);
        return (0, r.jsx)(
            v.P3F,
            eu(
                es(
                    {
                        className: a()(eo.closeButton, {
                            [eo.closeButtonPlated]: null != t,
                            [eo.closeButtonForceShow]: i,
                            [eo.reducedClickTarget]: l,
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
                        className: a()({ [eo.innerCloseButtonPlated]: null != t }),
                        children: (0, r.jsx)(n, {
                            size: "sm",
                            color: "currentColor",
                            className: a()(eo.closeIcon, { [eo.closeIconPlated]: null != t }),
                        }),
                    }),
                },
            ),
        );
    },
    ep = () =>
        (0, r.jsx)(v.r7p, {
            size: "xs",
            color: "currentColor",
            className: eo.favoriteIcon,
        }),
    eg = () =>
        (0, r.jsx)(v.kZF, {
            size: "xs",
            color: "currentColor",
            className: eo.favoriteIcon,
        }),
    ey = () =>
        (0, r.jsx)(v.t6m, {
            size: "xs",
            color: "currentColor",
            className: eo.favoriteIcon,
        }),
    eb = (e) => {
        var {
                route: t,
                selected: n,
                icon: i,
                iconClassName: l,
                interactiveClassName: o,
                text: s,
                children: u,
                locationState: d,
                onClick: m,
                className: p,
                role: g,
                "aria-posinset": y,
                "aria-setsize": b,
                listItemRef: h,
            } = e,
            O = ec(e, [
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
            className: a()(eo.channel, { [eo.fullWidth]: f.tq }, p),
            onClick: m,
            role: g,
            focusProps: es({ within: !0 }, em),
            "aria-posinset": y,
            "aria-setsize": b,
            ref: h,
            children: (0, r.jsx)(v.vjx, {
                as: "div",
                selected: n,
                className: a()(o, eo.interactive, eo.linkButton, { [eo.interactiveSelected]: n }),
                children: (0, r.jsxs)(
                    c.rU,
                    eu(
                        es(
                            {
                                to: {
                                    pathname: t,
                                    state: d,
                                },
                                className: eo.link,
                            },
                            O,
                        ),
                        {
                            children: [
                                (0, r.jsx)(C.Z, {
                                    muted: !1,
                                    avatar: (0, r.jsx)(i, {
                                        size: "refresh_sm",
                                        className: a()(eo.linkButtonIcon, l),
                                        color: "currentColor",
                                    }),
                                    name: s,
                                    innerClassName: eo.avatarWithText,
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
            selected: l = !1,
            user: s,
            activities: f,
            applicationStream: j,
            voiceChannel: S,
            isTyping: G,
            status: H,
            isMobile: B,
            nameplate: V,
            latestMessage: X,
            ref: ee,
            "aria-posinset": en,
            "aria-setsize": ei,
        } = e,
        [eb, ev] = i.useState(!1),
        [eh, eO] = i.useState(!1),
        [ex, ej] = i.useState(!1),
        eP = i.useRef(null),
        eS = i.useRef(null),
        eN = null != ee ? ee : eS,
        {
            avatarSrc: eE,
            avatarDecorationSrc: eC,
            eventHandlers: eT,
        } = (0, q.Z)({
            userId: null == s ? void 0 : s.id,
            size: v.EFr.SIZE_32,
            animateOnHover: !(l || eb || eh || ex),
        }),
        eZ = t.isMultiUserDM(),
        eI = t.isSystemDM(),
        ew = !eZ && !eI && t.type === el.d4z.DM,
        ek = ew && (null == s ? void 0 : s.primaryGuild) != null,
        eM = (0, g.e7)([et.ZP], () => et.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eD, blocked: e_ } = (0, g.cj)([Q.Z], () => ({
            ignored: Q.Z.isIgnored(t.getRecipientId()),
            blocked: Q.Z.isBlocked(t.getRecipientId()),
        })),
        eU = ew && eD,
        eR = ew && e_,
        eA = (eM || eU || eR) && !(l || eb),
        { hasUnreadMessages: eL, lastMessageId: eG } = (0, g.cj)([J.ZP], () => ({
            hasUnreadMessages: J.ZP.getMentionCount(t.id) > 0,
            lastMessageId: J.ZP.lastMessageId(t.id),
        })),
        eF = (0, w.ZP)(t),
        eH = (0, g.e7)([U.Z], () => U.Z.isFavorite(t.id)),
        { dotsInsteadOfCloseButton: eB, rearrangeContextMenu: ez } = R.Z.useExperiment(
            { location: "private_channel" },
            { autoTrackExposure: !0 },
        ),
        { showMessagePreviews: eY, prioritizeOverStatus: eW } = F.U.useConfig({ location: "PrivateChannel" }),
        eK = (0, g.e7)([$.Z], () => $.Z.hidePersonalInformation),
        eq = (0, W.l)({ timestamp: er.default.extractTimestamp(null != eG ? eG : t.id) }),
        eV = i.useRef(null),
        eX = null != V && (l || eb || ex),
        eJ = () => {
            ev(!0);
        },
        eQ = () => {
            ev(!1);
        },
        e$ = () => {
            eO(!0);
        },
        e0 = () => {
            eO(!1);
        },
        e1 = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), h.Z.closePrivateChannel(t.id, l, n);
        },
        e5 = () => {
            h.Z.preload(el.ME, t.id);
        },
        e4 = (e) => {
            e.stopPropagation();
        },
        e3 = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = eP.current) || t.click();
            }
        },
        e6 = (e) => {
            let i = "contextmenu" === e.type,
                a = ez && !i,
                o = i ? d.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : d.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ej(!0),
                t.isMultiUserDM()
                    ? (0, O.jW)(
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
                                      eu(es({}, n), {
                                          channel: t,
                                          selected: l,
                                      }),
                                  );
                          },
                          {
                              impressionName: o,
                              noBlurEvent: !0,
                              onClose: () => ej(!1),
                          },
                      )
                    : (0, O.jW)(
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
                                      eu(es({}, n), {
                                          user: s,
                                          channel: t,
                                          channelSelected: l,
                                      }),
                                  );
                          },
                          {
                              impressionName: o,
                              onClose: () => ej(!1),
                          },
                      );
        },
        e8 = (e) => {
            e.preventDefault(), e.stopPropagation();
            let i = ea.intl.formatToPlainString(ea.t.hJ5Ap4, { name: eF }),
                l = ea.intl.format(ea.t.SSIVOu, { name: eF });
            t.isManaged() &&
                ((i = ea.intl.formatToPlainString(ea.t.hVGjEW, { name: eF })),
                (l = ea.intl.format(ea.t.IK1Qvs, { name: eF }))),
                (0, v.ZDy)(async () => {
                    let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            es(
                                {
                                    header: i,
                                    body: l,
                                    onSubmit: e1,
                                },
                                t,
                            ),
                        );
                });
        },
        e7 = (0, r.jsx)(_.Z, {
            userName: eF,
            displayNameStyles: null == s ? void 0 : s.displayNameStyles,
            effectDisplayType: eb || l || ex ? D.F.ANIMATED : D.F.PLAIN,
            loop: eb,
            boldFontOpacity: 0.9,
        }),
        e9 = ek
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      e7,
                      (0, r.jsx)(L.ZP, {
                          primaryGuild: null == s ? void 0 : s.primaryGuild,
                          userId: null == s ? void 0 : s.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(eo.clanTag, { [eo.clanTagMuted]: eA }),
                      }),
                  ],
              })
            : e7,
        e2 = i.useRef(null),
        te = (0, M.Y)({ location: "PrivateChannel" }) && (null == s ? void 0 : s.displayNameStyles) != null,
        tt = (0, p.Z)(),
        tn = [
            (0, Z.ZP)({
                channel: t,
                unread: eL,
            }),
            (0, Z.Yb)({
                channel: t,
                muted: eM,
                userStatus: H,
            }),
        ]
            .filter(Boolean)
            .join(", "),
        tr = (0, r.jsxs)(r.Fragment, {
            children: [
                eH && !ex ? (0, r.jsx)(ep, {}) : null,
                eU ? (0, r.jsx)(eg, {}) : null,
                eR ? (0, r.jsx)(ey, {}) : null,
            ],
        }),
        ti = eY
            ? (0, r.jsxs)("div", {
                  className: eo.timestampContainer,
                  children: [
                      tr,
                      (0, r.jsx)(v.Text, {
                          variant: "text-xs/normal",
                          color: l ? "interactive-text-active" : eL ? "interactive-text-default" : "text-muted",
                          className: eo.timestamp,
                          children: eq,
                      }),
                  ],
              })
            : null;
    return (0, r.jsx)(m.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                i = ec(e, ["role"]);
            return (0, r.jsxs)(k.Z, {
                className: a()(eo.channel, eo.dm),
                role: n,
                focusProps: eu(es({}, em), {
                    focusTarget: eP,
                    ringTarget: eN,
                }),
                ref: eN,
                onMouseEnter: eJ,
                onMouseLeave: eQ,
                onMouseDown: e5,
                onFocus: e$,
                onBlur: e0,
                onContextMenu: e6,
                "aria-setsize": ei,
                "aria-posinset": en,
                children: [
                    eL ? (0, r.jsx)("div", { className: a()(eo.unreadPill, { [eo.muted]: eA }) }) : null,
                    (0, r.jsxs)(v.vjx, {
                        className: a()(eo.interactive, { [eo.interactiveSelected]: l || ex }),
                        as: "div",
                        onClick: e3,
                        muted: eA,
                        selected: l,
                        children: [
                            (0, r.jsx)(Y.Z, {
                                nameplate: eX ? V : void 0,
                                selected: l,
                                hovered: eb,
                                content: e2,
                                placement: z.i.CHANNEL,
                            }),
                            (0, r.jsx)(
                                c.rU,
                                eu(
                                    es(
                                        {
                                            innerRef: eP,
                                            to: el.Z5c.CHANNEL(el.ME, t.id),
                                            className: eo.link,
                                            "aria-label": tn,
                                        },
                                        i,
                                    ),
                                    {
                                        children: (0, r.jsx)(C.Z, {
                                            ref: e2,
                                            avatar: (() => {
                                                let e = v.EFr.SIZE_32;
                                                if (t.isMultiUserDM())
                                                    if (t.recipients.length >= 2 && null == t.icon)
                                                        return (0, r.jsx)(A.Z, {
                                                            "aria-hidden": !0,
                                                            recipients: t.recipients,
                                                            size: e,
                                                            isTyping: G,
                                                            status: H,
                                                        });
                                                    else
                                                        return (0, r.jsx)(
                                                            ed,
                                                            eu(es({}, eT), {
                                                                src: (0, I.x)(t),
                                                                "aria-hidden": !0,
                                                                size: e,
                                                                status: G ? el.Skl.ONLINE : H,
                                                                isTyping: G,
                                                            }),
                                                        );
                                                u()(
                                                    null != s,
                                                    "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                                );
                                                let n = null;
                                                return (
                                                    s.isSystemUser() || (n = (0, x.Z)(f) ? el.Skl.STREAMING : H),
                                                    (0, r.jsx)(
                                                        ed,
                                                        eu(es({}, eT), {
                                                            size: v.EFr.SIZE_32,
                                                            src: eE,
                                                            avatarDecoration: eC,
                                                            status: n,
                                                            isMobile: B,
                                                            isTyping: G,
                                                            "aria-label": s.username,
                                                            statusTooltip: !0,
                                                        }),
                                                    )
                                                );
                                            })(),
                                            highlighted: eL && !eA,
                                            muted: eA,
                                            subText: (() => {
                                                let e =
                                                        (null == f
                                                            ? void 0
                                                            : f.some((e) => e.type !== el.IIU.CUSTOM_STATUS)) === !0,
                                                    n =
                                                        eY && null != X && !eK
                                                            ? (0, r.jsx)("div", {
                                                                  className: eo.subtext,
                                                                  children: (0, r.jsx)(K.o, {
                                                                      channel: t,
                                                                      message: X,
                                                                  }),
                                                              })
                                                            : null,
                                                    i =
                                                        null != X &&
                                                        null != n &&
                                                        (1 > (0, o.Z)(new Date(), X.timestamp) || (eW && !e) || eL);
                                                return t.isSystemDM()
                                                    ? (0, r.jsx)("div", {
                                                          className: eo.subtext,
                                                          children: (0, T.Z)(t.id)
                                                              ? ea.intl.string(ea.t.FL5T01)
                                                              : ea.intl.string(ea.t.NnY5lc),
                                                      })
                                                    : t.isMultiUserDM()
                                                      ? null != n
                                                          ? n
                                                          : (0, r.jsx)("div", {
                                                                className: eo.subtext,
                                                                children: ea.intl.format(ea.t.CxSA5N, {
                                                                    members: t.recipients.length + 1,
                                                                }),
                                                            })
                                                      : !i &&
                                                          (0, P.Z)({
                                                              activities: f,
                                                              status: H,
                                                              applicationStream: j,
                                                              voiceChannel: S,
                                                          })
                                                        ? (0, r.jsx)(N.Z, {
                                                              location: "PrivateChannel",
                                                              user: s,
                                                              activities: f,
                                                              voiceChannel: S,
                                                              applicationStream: j,
                                                              animateEmoji: eb || eh || ex,
                                                              textClassName: eo.activityStatusText,
                                                              iconClassName: eA ? eo.mutedIcon : void 0,
                                                          })
                                                        : null != n
                                                          ? n
                                                          : null;
                                            })(),
                                            subtextClassName: eX ? eo.subtextNameplated : void 0,
                                            nameClassName: eo.username,
                                            name: (0, r.jsx)(y.Z, {
                                                className: a()(eo.overflowTooltip, { [eo.withDisplayNameStyles]: te }),
                                                children: e9,
                                            }),
                                            decorators: (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    t.isSystemDM()
                                                        ? (0, r.jsx)(E.Z, {
                                                              className: eo.decorator,
                                                              type: E.Z.Types.SYSTEM_DM,
                                                              verified: !0,
                                                          })
                                                        : null,
                                                    ti,
                                                ],
                                            }),
                                            withDisplayNameStyles: te,
                                            fullWidth: !0,
                                        }),
                                    },
                                ),
                            ),
                            (0, r.jsxs)("div", {
                                className: a()(eo.iconsContainer, { [eo.nameplated]: eX && !eY }),
                                children: [
                                    !eY && tr,
                                    eB && !tt
                                        ? (0, r.jsx)(b.u, {
                                              asContainer: !0,
                                              text: ea.intl.string(eZ ? ea.t.Et8qwj : ea.t["d+e27s"]),
                                              delay: 500,
                                              targetElementRef: eV,
                                              children: (0, r.jsx)(ef, {
                                                  icon: v.xhG,
                                                  "aria-label": ea.intl.string(ea.t.PdRCRg),
                                                  onClick: (e) => {
                                                      e6(e);
                                                  },
                                                  onMouseDown: e4,
                                                  nameplate: V,
                                                  forceShow: ex,
                                                  visibleElementRef: eV,
                                              }),
                                          })
                                        : (0, r.jsx)(ef, {
                                              icon: v.Dio,
                                              "aria-label": eZ
                                                  ? ea.intl.string(ea.t["26C4oi"])
                                                  : ea.intl.string(ea.t.jsvgc3),
                                              onClick: eZ ? e8 : e1,
                                              onMouseDown: e4,
                                              nameplate: V,
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
let eh =
    12633 == n.j
        ? (e) => {
              var { channel: t, selected: n } = e,
                  i = ec(e, ["channel", "selected"]);
              let l = (0, g.e7)([en.default], () => en.default.getUser(t.getRecipientId())),
                  a = null == l ? void 0 : l.id,
                  o = (0, g.cj)([X.Z, V.Z], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = X.Z.getState().statuses;
                          t.recipients.some((e) => n[e] === el.Skl.ONLINE) && (e = el.Skl.ONLINE);
                      } else null != a && (e = X.Z.getStatus(a));
                      return {
                          status: e,
                          activities: null != a ? X.Z.getActivities(a) : null,
                          applicationStream: null != a ? V.Z.getAnyStreamForUser(a) : null,
                          isMobile: null != a && X.Z.isMobileOnline(a),
                      };
                  }, [t, a]),
                  { voiceActivityStatusEnabled: s } = (0, j.U)({ location: "PrivateChannel" }),
                  { voiceChannel: u } = (0, S.Z)({ userId: a }),
                  c = (0, H.K)({ user: l }),
                  d = (0, g.e7)(
                      [en.default, ee.Z],
                      () =>
                          t.isMultiUserDM()
                              ? er.default.keys(ee.Z.getTypingUsers(t.id)).some((e) => {
                                    var t;
                                    return e !== (null == (t = en.default.getCurrentUser()) ? void 0 : t.id);
                                })
                              : null != l && ee.Z.isTyping(t.id, t.getRecipientId()),
                      [t, l],
                  ),
                  { showMessagePreviews: m } = F.U.useConfig({ location: "PrivateChannel" }),
                  f = (0, G.Z)(t, { disabled: !m });
              return t.isMultiUserDM()
                  ? (0, r.jsx)(
                        ev,
                        es(
                            {
                                channel: t,
                                selected: n,
                                isTyping: d,
                                status: o.status === el.Skl.ONLINE ? el.Skl.ONLINE : void 0,
                                latestMessage: f,
                            },
                            i,
                        ),
                    )
                  : (0, r.jsx)(
                        ev,
                        es(
                            {
                                channel: t,
                                selected: n,
                                user: l,
                                voiceChannel: s ? u : void 0,
                                isTyping: d,
                                nameplate: c,
                                latestMessage: f,
                            },
                            i,
                            o,
                        ),
                    );
          }
        : null;

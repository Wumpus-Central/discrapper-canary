n.d(t, {
    Qj: () => ed,
    RS: () => ep,
    ZP: () => ef,
    bU: () => eo,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(319498),
    u = n(990547),
    d = n(91192),
    p = n(873546),
    f = n(893999),
    m = n(442837),
    b = n(194983),
    y = n(28664),
    O = n(481060),
    v = n(493683),
    g = n(239091),
    h = n(420660),
    j = n(468363),
    x = n(326255),
    N = n(956221),
    S = n(771173),
    P = n(385499),
    C = n(570908),
    w = n(702321),
    E = n(201895),
    T = n(43267),
    Z = n(933557),
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
    z = n(518950),
    H = n(199902),
    W = n(158776),
    K = n(306680),
    Y = n(699516),
    Q = n(111583),
    V = n(9156),
    q = n(594174),
    J = n(709054),
    $ = n(998502),
    X = n(981631),
    ee = n(388032),
    et = n(800525);
function en(e) {
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
function er(e, t) {
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
function ei(e, t) {
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
let el = $.ZP.getEnableHardwareAcceleration() ? O.Xo$ : O.qEK,
    ea = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4,
        },
    },
    eo = (e) => {
        var { nameplate: t, icon: n, forceShow: i = !1, reducedClickTarget: l = !1, visibleElementRef: o } = e,
            s = ei(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
        let c = (0, B.A)(t);
        return (0, r.jsx)(
            O.P3F,
            er(
                en(
                    {
                        className: a()(et.closeButton, {
                            [et.closeButtonPlated]: null != t,
                            [et.closeButtonForceShow]: i,
                            [et.reducedClickTarget]: l,
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
                        className: a()({ [et.innerCloseButtonPlated]: null != t }),
                        children: (0, r.jsx)(n, {
                            size: "sm",
                            color: "currentColor",
                            className: a()(et.closeIcon, { [et.closeIconPlated]: null != t }),
                        }),
                    }),
                },
            ),
        );
    },
    es = () =>
        (0, r.jsx)(O.r7p, {
            size: "xs",
            color: "currentColor",
            className: et.favoriteIcon,
        }),
    ec = () =>
        (0, r.jsx)(O.kZF, {
            size: "xs",
            color: "currentColor",
            className: et.favoriteIcon,
        }),
    eu = () =>
        (0, r.jsx)(O.t6m, {
            size: "xs",
            color: "currentColor",
            className: et.favoriteIcon,
        }),
    ed = (e) => {
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
                "aria-posinset": y,
                "aria-setsize": v,
                listItemRef: g,
            } = e,
            h = ei(e, [
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
            className: a()(et.channel, { [et.fullWidth]: p.tq }, m),
            onClick: f,
            role: b,
            focusProps: en({ within: !0 }, ea),
            "aria-posinset": y,
            "aria-setsize": v,
            ref: g,
            children: (0, r.jsx)(O.vjx, {
                as: "div",
                selected: n,
                className: a()(o, et.interactive, et.linkButton, { [et.interactiveSelected]: n }),
                children: (0, r.jsxs)(
                    c.rU,
                    er(
                        en(
                            {
                                to: {
                                    pathname: t,
                                    state: d,
                                },
                                className: et.link,
                            },
                            h,
                        ),
                        {
                            children: [
                                (0, r.jsx)(C.Z, {
                                    muted: !1,
                                    avatar: (0, r.jsx)(i, {
                                        size: "refresh_sm",
                                        className: a()(et.linkButtonIcon, l),
                                        color: "currentColor",
                                    }),
                                    name: s,
                                    innerClassName: et.avatarWithText,
                                }),
                                u,
                            ],
                        },
                    ),
                ),
            }),
        });
    };
function ep(e) {
    let {
            channel: t,
            selected: l = !1,
            user: o,
            activities: p,
            applicationStream: j,
            voiceChannel: N,
            isTyping: A,
            status: B,
            isMobile: H,
            nameplate: W,
            ref: Q,
            "aria-posinset": q,
            "aria-setsize": J,
        } = e,
        [$, ed] = i.useState(!1),
        [ep, ef] = i.useState(!1),
        [em, eb] = i.useState(!1),
        ey = i.useRef(null),
        eO = i.useRef(null),
        ev = null != Q ? Q : eO,
        {
            avatarSrc: eg,
            avatarDecorationSrc: eh,
            eventHandlers: ej,
        } = (0, z.Z)({
            userId: null == o ? void 0 : o.id,
            size: O.EFr.SIZE_32,
            animateOnHover: !(l || $ || ep || em),
        }),
        ex = t.isMultiUserDM(),
        eN = t.isSystemDM(),
        eS = !ex && !eN && t.type === X.d4z.DM,
        eP = eS && (null == o ? void 0 : o.primaryGuild) != null,
        eC = (0, m.e7)([V.ZP], () => V.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: ew, blocked: eE } = (0, m.cj)([Y.Z], () => ({
            ignored: Y.Z.isIgnored(t.getRecipientId()),
            blocked: Y.Z.isBlocked(t.getRecipientId()),
        })),
        eT = eS && ew,
        eZ = eS && eE,
        eM = (eC || eT || eZ) && !(l || $),
        eI = (0, m.e7)([K.ZP], () => K.ZP.getMentionCount(t.id) > 0),
        eD = (0, Z.ZP)(t),
        ek = (0, m.e7)([_.Z], () => _.Z.isFavorite(t.id)),
        { dotsInsteadOfCloseButton: e_, rearrangeContextMenu: eR } = R.Z.useExperiment(
            { location: "private_channel" },
            { autoTrackExposure: !0 },
        ),
        eL = i.useRef(null),
        eU = null != W && (l || $ || em),
        eA = () => {
            ed(!0);
        },
        eB = () => {
            ed(!1);
        },
        eG = () => {
            ef(!0);
        },
        eF = () => {
            ef(!1);
        },
        ez = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), v.Z.closePrivateChannel(t.id, l, n);
        },
        eH = () => {
            v.Z.preload(X.ME, t.id);
        },
        eW = (e) => {
            e.stopPropagation();
        },
        eK = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = ey.current) || t.click();
            }
        },
        eY = (e) => {
            let i = "contextmenu" === e.type,
                a = eR && !i,
                s = i ? u.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : u.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eb(!0),
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
                                      er(en({}, n), {
                                          channel: t,
                                          selected: l,
                                      }),
                                  );
                          },
                          {
                              impressionName: s,
                              noBlurEvent: !0,
                              onClose: () => eb(!1),
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
                                        n.e("97418"),
                                    ]).then(n.bind(n, 131404));
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      er(en({}, n), {
                                          user: o,
                                          channel: t,
                                          channelSelected: l,
                                      }),
                                  );
                          },
                          {
                              impressionName: s,
                              onClose: () => eb(!1),
                          },
                      );
        },
        eQ = (e) => {
            e.preventDefault(), e.stopPropagation();
            let i = ee.intl.formatToPlainString(ee.t.hJ5Ap4, { name: eD }),
                l = ee.intl.format(ee.t.SSIVOu, { name: eD });
            t.isManaged() &&
                ((i = ee.intl.formatToPlainString(ee.t.hVGjEW, { name: eD })),
                (l = ee.intl.format(ee.t.IK1Qvs, { name: eD }))),
                (0, O.ZDy)(async () => {
                    let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            en(
                                {
                                    header: i,
                                    body: l,
                                    onSubmit: ez,
                                },
                                t,
                            ),
                        );
                });
        },
        eV = (0, r.jsx)(k.Z, {
            userName: eD,
            displayNameStyles: null == o ? void 0 : o.displayNameStyles,
            effectDisplayType: $ || l || em ? D.F.ANIMATED : D.F.PLAIN,
            loop: $,
            boldFontOpacity: 0.9,
        }),
        eq = eP
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      eV,
                      (0, r.jsx)(U.ZP, {
                          primaryGuild: null == o ? void 0 : o.primaryGuild,
                          userId: null == o ? void 0 : o.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(et.clanTag, { [et.clanTagMuted]: eM }),
                      }),
                  ],
              })
            : eV,
        eJ = i.useRef(null),
        e$ = (0, I.Y)({ location: "PrivateChannel" }) && (null == o ? void 0 : o.displayNameStyles) != null,
        eX = (0, f.Z)(),
        e0 = [
            (0, E.ZP)({
                channel: t,
                unread: eI,
            }),
            (0, E.Yb)({
                channel: t,
                muted: eC,
                userStatus: B,
            }),
        ]
            .filter(Boolean)
            .join(", ");
    return (0, r.jsx)(d.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                i = ei(e, ["role"]);
            return (0, r.jsxs)(M.Z, {
                className: a()(et.channel, et.dm),
                role: n,
                focusProps: er(en({}, ea), {
                    focusTarget: ey,
                    ringTarget: ev,
                }),
                ref: ev,
                onMouseEnter: eA,
                onMouseLeave: eB,
                onMouseDown: eH,
                onFocus: eG,
                onBlur: eF,
                onContextMenu: eY,
                "aria-setsize": J,
                "aria-posinset": q,
                children: [
                    eI ? (0, r.jsx)("div", { className: a()(et.unreadPill, { [et.muted]: eM }) }) : null,
                    (0, r.jsxs)(O.vjx, {
                        className: a()(et.interactive, { [et.interactiveSelected]: l || em }),
                        as: "div",
                        onClick: eK,
                        muted: eM,
                        selected: l,
                        children: [
                            (0, r.jsx)(F.Z, {
                                nameplate: eU ? W : void 0,
                                selected: l,
                                hovered: $,
                                content: eJ,
                                placement: G.i.CHANNEL,
                            }),
                            (0, r.jsx)(
                                c.rU,
                                er(
                                    en(
                                        {
                                            innerRef: ey,
                                            to: X.Z5c.CHANNEL(X.ME, t.id),
                                            className: et.link,
                                            "aria-label": e0,
                                        },
                                        i,
                                    ),
                                    {
                                        children: (0, r.jsx)(C.Z, {
                                            ref: eJ,
                                            avatar: (() => {
                                                let e = O.EFr.SIZE_32;
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
                                                            el,
                                                            er(en({}, ej), {
                                                                src: (0, T.x)(t),
                                                                "aria-hidden": !0,
                                                                size: e,
                                                                status: A ? X.Skl.ONLINE : B,
                                                                isTyping: A,
                                                            }),
                                                        );
                                                s()(
                                                    null != o,
                                                    "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                                );
                                                let n = null;
                                                return (
                                                    o.isSystemUser() || (n = (0, h.Z)(p) ? X.Skl.STREAMING : B),
                                                    (0, r.jsx)(
                                                        el,
                                                        er(en({}, ej), {
                                                            size: O.EFr.SIZE_32,
                                                            src: eg,
                                                            avatarDecoration: eh,
                                                            status: n,
                                                            isMobile: H,
                                                            isTyping: A,
                                                            "aria-label": o.username,
                                                            statusTooltip: !0,
                                                        }),
                                                    )
                                                );
                                            })(),
                                            highlighted: eI && !eM,
                                            muted: eM,
                                            subText: t.isSystemDM()
                                                ? (0, r.jsx)("div", {
                                                      className: et.subtext,
                                                      children: (0, w.Z)(t.id)
                                                          ? ee.intl.string(ee.t.FL5T01)
                                                          : ee.intl.string(ee.t.NnY5lc),
                                                  })
                                                : t.isMultiUserDM()
                                                  ? (0, r.jsx)("div", {
                                                        className: et.subtext,
                                                        children: ee.intl.format(ee.t.CxSA5N, {
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
                                                          animateEmoji: $ || ep || em,
                                                          textClassName: et.activityStatusText,
                                                          iconClassName: eM ? et.mutedIcon : void 0,
                                                      })
                                                    : null,
                                            name: (0, r.jsx)(b.Z, {
                                                className: a()(et.overflowTooltip, { [et.withDisplayNameStyles]: e$ }),
                                                children: eq,
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, r.jsx)(P.Z, {
                                                      className: et.decorator,
                                                      type: P.Z.Types.SYSTEM_DM,
                                                      verified: !0,
                                                  })
                                                : null,
                                            withDisplayNameStyles: e$,
                                        }),
                                    },
                                ),
                            ),
                            (0, r.jsxs)("div", {
                                className: a()(et.iconsContainer, { [et.nameplated]: eU }),
                                children: [
                                    ek && !em ? (0, r.jsx)(es, {}) : null,
                                    eT ? (0, r.jsx)(ec, {}) : null,
                                    eZ ? (0, r.jsx)(eu, {}) : null,
                                    e_ && !eX
                                        ? (0, r.jsx)(y.u, {
                                              asContainer: !0,
                                              text: ee.intl.string(ex ? ee.t.Et8qwj : ee.t["d+e27s"]),
                                              delay: 500,
                                              targetElementRef: eL,
                                              children: (0, r.jsx)(eo, {
                                                  icon: O.xhG,
                                                  "aria-label": ee.intl.string(ee.t.PdRCRg),
                                                  onClick: (e) => {
                                                      eY(e);
                                                  },
                                                  onMouseDown: eW,
                                                  nameplate: W,
                                                  forceShow: em,
                                                  visibleElementRef: eL,
                                              }),
                                          })
                                        : (0, r.jsx)(eo, {
                                              icon: O.Dio,
                                              "aria-label": ex
                                                  ? ee.intl.string(ee.t["26C4oi"])
                                                  : ee.intl.string(ee.t.jsvgc3),
                                              onClick: ex ? eQ : ez,
                                              onMouseDown: eW,
                                              nameplate: W,
                                              reducedClickTarget: !0,
                                              visibleElementRef: eL,
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
let ef =
    12633 == n.j
        ? (e) => {
              var { channel: t, selected: n } = e,
                  i = ei(e, ["channel", "selected"]);
              let l = (0, m.e7)([q.default], () => q.default.getUser(t.getRecipientId())),
                  a = null == l ? void 0 : l.id,
                  o = (0, m.cj)([W.Z, H.Z], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          let n = W.Z.getState().statuses;
                          t.recipients.some((e) => n[e] === X.Skl.ONLINE) && (e = X.Skl.ONLINE);
                      } else null != a && (e = W.Z.getStatus(a));
                      return {
                          status: e,
                          activities: null != a ? W.Z.getActivities(a) : null,
                          applicationStream: null != a ? H.Z.getAnyStreamForUser(a) : null,
                          isMobile: null != a && W.Z.isMobileOnline(a),
                      };
                  }, [t, a]),
                  { voiceActivityStatusEnabled: s } = (0, j.U)({ location: "PrivateChannel" }),
                  { voiceChannel: c } = (0, N.Z)({ userId: a }),
                  u = (0, A.K)({ user: l }),
                  d = (0, m.e7)(
                      [q.default, Q.Z],
                      () =>
                          t.isMultiUserDM()
                              ? J.default.keys(Q.Z.getTypingUsers(t.id)).some((e) => {
                                    var t;
                                    return e !== (null == (t = q.default.getCurrentUser()) ? void 0 : t.id);
                                })
                              : null != l && Q.Z.isTyping(t.id, t.getRecipientId()),
                      [t, l],
                  );
              return t.isMultiUserDM()
                  ? (0, r.jsx)(
                        ep,
                        en(
                            {
                                channel: t,
                                selected: n,
                                isTyping: d,
                                status: o.status === X.Skl.ONLINE ? X.Skl.ONLINE : void 0,
                            },
                            i,
                        ),
                    )
                  : (0, r.jsx)(
                        ep,
                        en(
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

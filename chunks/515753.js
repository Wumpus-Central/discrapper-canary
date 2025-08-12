n.d(t, {
    Qj: () => eu,
    RS: () => em,
    ZP: () => ep,
    bU: () => el,
}),
    n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(688642),
    d = n(990547),
    u = n(91192),
    m = n(873546),
    p = n(442837),
    g = n(481060),
    h = n(493683),
    f = n(239091),
    b = n(420660),
    x = n(468363),
    _ = n(326255),
    j = n(956221),
    E = n(771173),
    C = n(385499),
    O = n(570908),
    v = n(702321),
    S = n(201895),
    T = n(43267),
    I = n(933557),
    N = n(163889),
    y = n(111028),
    A = n(181430),
    P = n(821795),
    R = n(892567),
    D = n(853856),
    Z = n(93687),
    w = n(489618),
    k = n(785232),
    L = n(172751),
    M = n(850020),
    B = n(379839),
    U = n(359135),
    V = n(516817),
    G = n(878857),
    F = n(518950),
    H = n(199902),
    z = n(158776),
    W = n(306680),
    Y = n(699516),
    K = n(111583),
    q = n(9156),
    X = n(594174),
    J = n(709054),
    Q = n(998502),
    $ = n(981631),
    ee = n(388032),
    et = n(565757);
function en(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function er(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                s = Object.keys(e);
            for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++)
            (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let es = Q.ZP.getEnableHardwareAcceleration() ? g.Xo$ : g.qEK,
    ea = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4,
        },
    },
    el = (e) => {
        var { nameplate: t, icon: n, forceShow: r = !1, reducedClickTarget: s = !1, visibleElementRef: l } = e,
            o = er(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
        let c = (0, B.A)(t);
        return (0, i.jsx)(
            g.P3F,
            ei(
                en(
                    {
                        className: a()(et.closeButton, {
                            [et.closeButtonPlated]: null != t,
                            [et.closeButtonForceShow]: r,
                            [et.reducedClickTarget]: s,
                        }),
                        style: c,
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
                    children: (0, i.jsx)("div", {
                        ref: l,
                        className: a()({ [et.innerCloseButtonPlated]: null != t }),
                        children: (0, i.jsx)(n, {
                            size: "sm",
                            color: "currentColor",
                            className: a()(et.closeIcon, { [et.closeIconPlated]: null != t }),
                        }),
                    }),
                },
            ),
        );
    },
    eo = () =>
        (0, i.jsx)(g.r7p, {
            size: "xs",
            color: "currentColor",
            className: et.favoriteIcon,
        }),
    ec = () =>
        (0, i.jsx)(g.kZF, {
            size: "xs",
            color: "currentColor",
            className: et.favoriteIcon,
        }),
    ed = () =>
        (0, i.jsx)(g.t6m, {
            size: "xs",
            color: "currentColor",
            className: et.favoriteIcon,
        }),
    eu = (e) => {
        var {
                route: t,
                selected: n,
                icon: r,
                iconClassName: s,
                interactiveClassName: l,
                text: o,
                children: d,
                locationState: u,
                onClick: p,
                className: h,
                role: f,
                "aria-posinset": b,
                "aria-setsize": x,
                listItemRef: _,
            } = e,
            j = er(e, [
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
        return (0, i.jsx)(N.Z, {
            className: a()(et.channel, { [et.fullWidth]: m.tq }, h),
            onClick: p,
            role: f,
            focusProps: en({ within: !0 }, ea),
            "aria-posinset": b,
            "aria-setsize": x,
            ref: _,
            children: (0, i.jsx)(g.vjx, {
                as: "div",
                selected: n,
                className: a()(l, et.interactive, et.linkButton, { [et.interactiveSelected]: n }),
                children: (0, i.jsxs)(
                    c.rU,
                    ei(
                        en(
                            {
                                to: {
                                    pathname: t,
                                    state: u,
                                },
                                className: et.link,
                            },
                            j,
                        ),
                        {
                            children: [
                                (0, i.jsx)(O.Z, {
                                    muted: !1,
                                    avatar: (0, i.jsx)(r, {
                                        size: "refresh_sm",
                                        className: a()(et.linkButtonIcon, s),
                                        color: "currentColor",
                                    }),
                                    name: o,
                                    innerClassName: et.avatarWithText,
                                }),
                                d,
                            ],
                        },
                    ),
                ),
            }),
        });
    };
function em(e) {
    let {
            channel: t,
            isGDMFacepileEnabled: s,
            selected: l = !1,
            user: m,
            activities: x,
            applicationStream: j,
            voiceChannel: Z,
            isTyping: M,
            status: B,
            isMobile: H,
            nameplate: z,
            ref: K,
            "aria-posinset": X,
            "aria-setsize": J,
        } = e,
        [Q, eu] = r.useState(!1),
        [em, ep] = r.useState(!1),
        [eg, eh] = r.useState(!1),
        ef = r.useRef(null),
        eb = r.useRef(null),
        ex = null != K ? K : eb,
        {
            avatarSrc: e_,
            avatarDecorationSrc: ej,
            eventHandlers: eE,
        } = (0, F.Z)({
            userId: null == m ? void 0 : m.id,
            size: g.EFr.SIZE_32,
            animateOnHover: !(l || Q || em || eg),
        }),
        eC = t.isMultiUserDM(),
        eO = t.isSystemDM(),
        ev = (0, G.Q)(),
        eS = !eC && !eO && t.type === $.d4z.DM,
        eT = eS && (null == m ? void 0 : m.primaryGuild) != null,
        eI = (0, p.e7)([q.ZP], () => q.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eN, blocked: ey } = (0, p.cj)([Y.Z], () => ({
            ignored: Y.Z.isIgnored(t.getRecipientId()),
            blocked: Y.Z.isBlocked(t.getRecipientId()),
        })),
        eA = eS && eN,
        eP = eS && ey,
        eR = (eI || eA || eP) && !(l || Q),
        eD = (0, p.e7)([W.ZP], () => W.ZP.getMentionCount(t.id) > 0),
        eZ = (0, I.ZP)(t),
        ew = (0, p.e7)([D.Z], () => D.Z.isFavorite(t.id)),
        { dotsInsteadOfCloseButton: ek, rearrangeContextMenu: eL } = w.Z.useExperiment(
            { location: "private_channel" },
            { autoTrackExposure: !0 },
        ),
        eM = r.useRef(null),
        eB = null != z && (l || Q || eg),
        eU = () => {
            eu(!0);
        },
        eV = () => {
            eu(!1);
        },
        eG = () => {
            ep(!0);
        },
        eF = () => {
            ep(!1);
        },
        eH = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), h.Z.closePrivateChannel(t.id, l, n);
        },
        ez = () => {
            h.Z.preload($.ME, t.id);
        },
        eW = (e) => {
            e.stopPropagation();
        },
        eY = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = ef.current) || t.click();
            }
        },
        eK = (e) => {
            let r = "contextmenu" === e.type,
                s = eL && !r,
                a = r ? d.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : d.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eh(!0),
                t.isMultiUserDM()
                    ? (0, f.jW)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("79695"),
                                  n.e("70205"),
                                  n.e("57789"),
                                  n.e("53129"),
                              ]).then(n.bind(n, 354741));
                              return (n) =>
                                  (0, i.jsx)(
                                      e,
                                      ei(en({}, n), {
                                          channel: t,
                                          selected: l,
                                      }),
                                  );
                          },
                          {
                              impressionName: a,
                              noBlurEvent: !0,
                              onClose: () => eh(!1),
                          },
                      )
                    : (0, f.jW)(
                          e,
                          async () => {
                              let { default: e } = s
                                  ? await n.e("56167").then(n.bind(n, 416951))
                                  : await Promise.all([
                                        n.e("79695"),
                                        n.e("70205"),
                                        n.e("98783"),
                                        n.e("57789"),
                                        n.e("56826"),
                                        n.e("88333"),
                                    ]).then(n.bind(n, 131404));
                              return (n) =>
                                  (0, i.jsx)(
                                      e,
                                      ei(en({}, n), {
                                          user: m,
                                          channel: t,
                                          channelSelected: l,
                                      }),
                                  );
                          },
                          {
                              impressionName: a,
                              onClose: () => eh(!1),
                          },
                      );
        },
        eq = (e) => {
            e.preventDefault(), e.stopPropagation();
            let r = ee.intl.formatToPlainString(ee.t.hJ5Ap6, { name: eZ }),
                s = ee.intl.format(ee.t.SSIVOj, { name: eZ });
            t.isManaged() &&
                ((r = ee.intl.formatToPlainString(ee.t.hVGjER, { name: eZ })),
                (s = ee.intl.format(ee.t.IK1Qvr, { name: eZ }))),
                (0, g.ZDy)(async () => {
                    let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            en(
                                {
                                    header: r,
                                    body: s,
                                    onSubmit: eH,
                                },
                                t,
                            ),
                        );
                });
        },
        eX = () =>
            t.isSystemDM()
                ? (0, i.jsx)("div", {
                      className: et.subtext,
                      children: (0, v.Z)(t.id) ? ee.intl.string(ee.t.FL5T09) : ee.intl.string(ee.t.NnY5lZ),
                  })
                : t.isMultiUserDM()
                  ? (0, i.jsx)("div", {
                        className: et.subtext,
                        children: ee.intl.format(ee.t.CxSA5O, { members: t.recipients.length + 1 }),
                    })
                  : (0, _.Z)({
                          activities: x,
                          status: B,
                          applicationStream: j,
                          voiceChannel: Z,
                      })
                    ? (0, i.jsx)(E.Z, {
                          location: "PrivateChannel",
                          user: m,
                          activities: x,
                          voiceChannel: Z,
                          applicationStream: j,
                          animateEmoji: Q || em || eg,
                          textClassName: et.activityStatusText,
                          iconClassName: eR ? et.mutedIcon : void 0,
                      })
                    : null,
        eJ = () => {
            let e = g.EFr.SIZE_32;
            if (t.isMultiUserDM())
                if (t.recipients.length >= 2 && s && null == t.icon)
                    return (0, i.jsx)(k.Z, {
                        "aria-hidden": !0,
                        recipients: t.recipients,
                        size: e,
                        isTyping: M,
                        status: B,
                    });
                else
                    return (0, i.jsx)(
                        es,
                        ei(en({}, eE), {
                            src: (0, T.x)(t),
                            "aria-hidden": !0,
                            size: e,
                            status: M ? $.Skl.ONLINE : B,
                            isTyping: M,
                        }),
                    );
            o()(null != m, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
            let n = null;
            return (
                m.isSystemUser() || (n = (0, b.Z)(x) ? $.Skl.STREAMING : B),
                (0, i.jsx)(
                    es,
                    ei(en({}, eE), {
                        size: g.EFr.SIZE_32,
                        src: e_,
                        avatarDecoration: ej,
                        status: n,
                        isMobile: H,
                        isTyping: M,
                        "aria-label": m.username,
                        statusTooltip: !0,
                    }),
                )
            );
        },
        eQ = (0, i.jsx)(R.Z, {
            userName: eZ,
            displayNameStyles: null == m ? void 0 : m.displayNameStyles,
            effectDisplayType: Q || l || eg ? P.F.ANIMATED : P.F.PLAIN,
            loop: Q,
        }),
        e$ = eT
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      eQ,
                      (0, i.jsx)(L.ZP, {
                          primaryGuild: null == m ? void 0 : m.primaryGuild,
                          userId: null == m ? void 0 : m.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(et.clanTag, { [et.clanTagMuted]: eR }),
                      }),
                  ],
              })
            : eQ,
        e0 = r.useRef(null),
        e3 = (0, A.Y)({ location: "PrivateChannel" }) && (null == m ? void 0 : m.displayNameStyles) != null;
    return (0, i.jsx)(u.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                r = er(e, ["role"]);
            return (0, i.jsxs)(N.Z, {
                className: a()(et.channel, et.dm),
                role: n,
                focusProps: ei(en({}, ea), {
                    focusTarget: ef,
                    ringTarget: ex,
                }),
                ref: ex,
                onMouseEnter: eU,
                onMouseLeave: eV,
                onMouseDown: ez,
                onFocus: eG,
                onBlur: eF,
                onContextMenu: eK,
                "aria-setsize": J,
                "aria-posinset": X,
                children: [
                    eD ? (0, i.jsx)("div", { className: a()(et.unreadPill, { [et.muted]: eR }) }) : null,
                    (0, i.jsxs)(g.vjx, {
                        className: a()(et.interactive, {
                            [et.interactiveSystemDM]: ev && eO,
                            [et.interactiveSelected]: l || eg,
                        }),
                        as: "div",
                        onClick: eY,
                        muted: eR,
                        selected: l,
                        children: [
                            (0, i.jsx)(V.Z, {
                                nameplate: eB ? z : void 0,
                                selected: l,
                                hovered: Q,
                                content: e0,
                                placement: U.i.CHANNEL,
                            }),
                            (0, i.jsx)(
                                c.rU,
                                ei(
                                    en(
                                        {
                                            innerRef: ef,
                                            to: $.Z5c.CHANNEL($.ME, t.id),
                                            className: et.link,
                                            "aria-label": (0, S.ZP)({
                                                channel: t,
                                                unread: eD,
                                            }),
                                        },
                                        r,
                                    ),
                                    {
                                        children: (0, i.jsx)(O.Z, {
                                            ref: e0,
                                            avatar: eJ(),
                                            highlighted: eD && !eR,
                                            muted: eR,
                                            subText: eX(),
                                            name: (0, i.jsx)(y.Z, {
                                                className: a()(et.overflowTooltip, { [et.withDisplayNameStyles]: e3 }),
                                                children: e$,
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, i.jsx)(C.Z, {
                                                      className: et.decorator,
                                                      type: C.Z.Types.SYSTEM_DM,
                                                      verified: !0,
                                                  })
                                                : null,
                                            withDisplayNameStyles: e3,
                                        }),
                                    },
                                ),
                            ),
                            (0, i.jsxs)("div", {
                                className: a()(et.iconsContainer, { [et.nameplated]: eB }),
                                children: [
                                    ew && !eg ? (0, i.jsx)(eo, {}) : null,
                                    eA ? (0, i.jsx)(ec, {}) : null,
                                    eP ? (0, i.jsx)(ed, {}) : null,
                                    ek
                                        ? (0, i.jsx)(g.ua7, {
                                              text: ee.intl.string(eC ? ee.t.Et8qws : ee.t["d+e27u"]),
                                              delay: 500,
                                              targetElementRef: eM,
                                              children: (e) => {
                                                  var { onClick: t } = e,
                                                      n = er(e, ["onClick"]);
                                                  return (0, i.jsx)(
                                                      el,
                                                      ei(en({}, n), {
                                                          icon: g.xhG,
                                                          "aria-label": ee.intl.string(ee.t.PdRCRk),
                                                          onClick: (e) => {
                                                              null == t || t(), eK(e);
                                                          },
                                                          onMouseDown: eW,
                                                          nameplate: z,
                                                          forceShow: eg,
                                                          visibleElementRef: eM,
                                                      }),
                                                  );
                                              },
                                          })
                                        : (0, i.jsx)(el, {
                                              icon: g.Dio,
                                              "aria-label": eC
                                                  ? ee.intl.string(ee.t["26C4oq"])
                                                  : ee.intl.string(ee.t.jsvgc3),
                                              onClick: eC ? eq : eH,
                                              onMouseDown: eW,
                                              nameplate: z,
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
let ep =
    12633 == n.j
        ? (e) => {
              var { channel: t, selected: n } = e,
                  r = er(e, ["channel", "selected"]);
              let s = (0, p.e7)([X.default], () => X.default.getUser(t.getRecipientId())),
                  {
                      isStatusIndicatorEnabled: a,
                      isTypingIndicatorEnabled: l,
                      isFacepileEnabled: o,
                  } = Z.Z.useExperiment({ location: "private_channel" }, { autoTrackExposure: !0 }),
                  c = null == s ? void 0 : s.id,
                  d = (0, p.cj)([z.Z, H.Z], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          if (a) {
                              let n = z.Z.getState().statuses;
                              t.recipients.some((e) => n[e] === $.Skl.ONLINE) && (e = $.Skl.ONLINE);
                          }
                      } else null != c && (e = z.Z.getStatus(c));
                      return {
                          status: e,
                          activities: null != c ? z.Z.getActivities(c) : null,
                          applicationStream: null != c ? H.Z.getAnyStreamForUser(c) : null,
                          isMobile: null != c && z.Z.isMobileOnline(c),
                      };
                  }, [t, c, a]),
                  { voiceActivityStatusEnabled: u } = (0, x.U)({ location: "PrivateChannel" }),
                  { voiceChannel: m } = (0, j.Z)({ userId: c }),
                  g = (0, M.K)({ user: s }),
                  h = (0, p.e7)([X.default, K.Z], () => {
                      if (t.isMultiUserDM())
                          if (l)
                              return J.default.keys(K.Z.getTypingUsers(t.id)).some((e) => {
                                  var t;
                                  return e !== (null == (t = X.default.getCurrentUser()) ? void 0 : t.id);
                              });
                          else return !1;
                      return null != s && K.Z.isTyping(t.id, t.getRecipientId());
                  }, [t, s, l]);
              return t.isMultiUserDM()
                  ? (0, i.jsx)(
                        em,
                        en(
                            {
                                channel: t,
                                selected: n,
                                isTyping: h,
                                status: d.status === $.Skl.ONLINE ? $.Skl.ONLINE : void 0,
                                isGDMFacepileEnabled: o,
                            },
                            r,
                        ),
                    )
                  : (0, i.jsx)(
                        em,
                        en(
                            {
                                channel: t,
                                selected: n,
                                user: s,
                                voiceChannel: u ? m : void 0,
                                isTyping: h,
                                nameplate: g,
                            },
                            r,
                            d,
                        ),
                    );
          }
        : null;

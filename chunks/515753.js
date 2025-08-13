n.d(t, {
    Qj: () => em,
    RS: () => ep,
    ZP: () => eg,
    bU: () => eo,
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
    p = n(893999),
    g = n(442837),
    h = n(481060),
    f = n(493683),
    b = n(239091),
    x = n(420660),
    _ = n(468363),
    j = n(326255),
    E = n(956221),
    C = n(771173),
    O = n(385499),
    v = n(570908),
    S = n(702321),
    T = n(201895),
    I = n(43267),
    N = n(933557),
    y = n(163889),
    A = n(111028),
    P = n(181430),
    R = n(821795),
    D = n(892567),
    Z = n(853856),
    w = n(93687),
    k = n(489618),
    L = n(785232),
    B = n(172751),
    M = n(850020),
    U = n(379839),
    V = n(359135),
    G = n(516817),
    F = n(878857),
    H = n(518950),
    z = n(199902),
    W = n(158776),
    Y = n(306680),
    K = n(699516),
    q = n(111583),
    X = n(9156),
    J = n(594174),
    Q = n(709054),
    $ = n(998502),
    ee = n(981631),
    et = n(388032),
    en = n(565757);
function ei(e) {
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
function er(e, t) {
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
function es(e, t) {
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
let ea = $.ZP.getEnableHardwareAcceleration() ? h.Xo$ : h.qEK,
    el = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4,
        },
    },
    eo = (e) => {
        var { nameplate: t, icon: n, forceShow: r = !1, reducedClickTarget: s = !1, visibleElementRef: l } = e,
            o = es(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
        let c = (0, U.A)(t);
        return (0, i.jsx)(
            h.P3F,
            er(
                ei(
                    {
                        className: a()(en.closeButton, {
                            [en.closeButtonPlated]: null != t,
                            [en.closeButtonForceShow]: r,
                            [en.reducedClickTarget]: s,
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
                        className: a()({ [en.innerCloseButtonPlated]: null != t }),
                        children: (0, i.jsx)(n, {
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
        (0, i.jsx)(h.r7p, {
            size: "xs",
            color: "currentColor",
            className: en.favoriteIcon,
        }),
    ed = () =>
        (0, i.jsx)(h.kZF, {
            size: "xs",
            color: "currentColor",
            className: en.favoriteIcon,
        }),
    eu = () =>
        (0, i.jsx)(h.t6m, {
            size: "xs",
            color: "currentColor",
            className: en.favoriteIcon,
        }),
    em = (e) => {
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
                className: g,
                role: f,
                "aria-posinset": b,
                "aria-setsize": x,
                listItemRef: _,
            } = e,
            j = es(e, [
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
        return (0, i.jsx)(y.Z, {
            className: a()(en.channel, { [en.fullWidth]: m.tq }, g),
            onClick: p,
            role: f,
            focusProps: ei({ within: !0 }, el),
            "aria-posinset": b,
            "aria-setsize": x,
            ref: _,
            children: (0, i.jsx)(h.vjx, {
                as: "div",
                selected: n,
                className: a()(l, en.interactive, en.linkButton, { [en.interactiveSelected]: n }),
                children: (0, i.jsxs)(
                    c.rU,
                    er(
                        ei(
                            {
                                to: {
                                    pathname: t,
                                    state: u,
                                },
                                className: en.link,
                            },
                            j,
                        ),
                        {
                            children: [
                                (0, i.jsx)(v.Z, {
                                    muted: !1,
                                    avatar: (0, i.jsx)(r, {
                                        size: "refresh_sm",
                                        className: a()(en.linkButtonIcon, s),
                                        color: "currentColor",
                                    }),
                                    name: o,
                                    innerClassName: en.avatarWithText,
                                }),
                                d,
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
            isGDMFacepileEnabled: s,
            selected: l = !1,
            user: m,
            activities: _,
            applicationStream: E,
            voiceChannel: w,
            isTyping: M,
            status: U,
            isMobile: z,
            nameplate: W,
            ref: q,
            "aria-posinset": J,
            "aria-setsize": Q,
        } = e,
        [$, em] = r.useState(!1),
        [ep, eg] = r.useState(!1),
        [eh, ef] = r.useState(!1),
        eb = r.useRef(null),
        ex = r.useRef(null),
        e_ = null != q ? q : ex,
        {
            avatarSrc: ej,
            avatarDecorationSrc: eE,
            eventHandlers: eC,
        } = (0, H.Z)({
            userId: null == m ? void 0 : m.id,
            size: h.EFr.SIZE_32,
            animateOnHover: !(l || $ || ep || eh),
        }),
        eO = t.isMultiUserDM(),
        ev = t.isSystemDM(),
        eS = (0, F.Q)(),
        eT = !eO && !ev && t.type === ee.d4z.DM,
        eI = eT && (null == m ? void 0 : m.primaryGuild) != null,
        eN = (0, g.e7)([X.ZP], () => X.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: ey, blocked: eA } = (0, g.cj)([K.Z], () => ({
            ignored: K.Z.isIgnored(t.getRecipientId()),
            blocked: K.Z.isBlocked(t.getRecipientId()),
        })),
        eP = eT && ey,
        eR = eT && eA,
        eD = (eN || eP || eR) && !(l || $),
        eZ = (0, g.e7)([Y.ZP], () => Y.ZP.getMentionCount(t.id) > 0),
        ew = (0, N.ZP)(t),
        ek = (0, g.e7)([Z.Z], () => Z.Z.isFavorite(t.id)),
        { dotsInsteadOfCloseButton: eL, rearrangeContextMenu: eB } = k.Z.useExperiment(
            { location: "private_channel" },
            { autoTrackExposure: !0 },
        ),
        eM = r.useRef(null),
        eU = null != W && (l || $ || eh),
        eV = () => {
            em(!0);
        },
        eG = () => {
            em(!1);
        },
        eF = () => {
            eg(!0);
        },
        eH = () => {
            eg(!1);
        },
        ez = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), f.Z.closePrivateChannel(t.id, l, n);
        },
        eW = () => {
            f.Z.preload(ee.ME, t.id);
        },
        eY = (e) => {
            e.stopPropagation();
        },
        eK = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = eb.current) || t.click();
            }
        },
        eq = (e) => {
            let r = "contextmenu" === e.type,
                s = eB && !r,
                a = r ? d.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : d.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ef(!0),
                t.isMultiUserDM()
                    ? (0, b.jW)(
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
                                      er(ei({}, n), {
                                          channel: t,
                                          selected: l,
                                      }),
                                  );
                          },
                          {
                              impressionName: a,
                              noBlurEvent: !0,
                              onClose: () => ef(!1),
                          },
                      )
                    : (0, b.jW)(
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
                                      er(ei({}, n), {
                                          user: m,
                                          channel: t,
                                          channelSelected: l,
                                      }),
                                  );
                          },
                          {
                              impressionName: a,
                              onClose: () => ef(!1),
                          },
                      );
        },
        eX = (e) => {
            e.preventDefault(), e.stopPropagation();
            let r = et.intl.formatToPlainString(et.t.hJ5Ap6, { name: ew }),
                s = et.intl.format(et.t.SSIVOj, { name: ew });
            t.isManaged() &&
                ((r = et.intl.formatToPlainString(et.t.hVGjER, { name: ew })),
                (s = et.intl.format(et.t.IK1Qvr, { name: ew }))),
                (0, h.ZDy)(async () => {
                    let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            ei(
                                {
                                    header: r,
                                    body: s,
                                    onSubmit: ez,
                                },
                                t,
                            ),
                        );
                });
        },
        eJ = () =>
            t.isSystemDM()
                ? (0, i.jsx)("div", {
                      className: en.subtext,
                      children: (0, S.Z)(t.id) ? et.intl.string(et.t.FL5T09) : et.intl.string(et.t.NnY5lZ),
                  })
                : t.isMultiUserDM()
                  ? (0, i.jsx)("div", {
                        className: en.subtext,
                        children: et.intl.format(et.t.CxSA5O, { members: t.recipients.length + 1 }),
                    })
                  : (0, j.Z)({
                          activities: _,
                          status: U,
                          applicationStream: E,
                          voiceChannel: w,
                      })
                    ? (0, i.jsx)(C.Z, {
                          location: "PrivateChannel",
                          user: m,
                          activities: _,
                          voiceChannel: w,
                          applicationStream: E,
                          animateEmoji: $ || ep || eh,
                          textClassName: en.activityStatusText,
                          iconClassName: eD ? en.mutedIcon : void 0,
                      })
                    : null,
        eQ = () => {
            let e = h.EFr.SIZE_32;
            if (t.isMultiUserDM())
                if (t.recipients.length >= 2 && s && null == t.icon)
                    return (0, i.jsx)(L.Z, {
                        "aria-hidden": !0,
                        recipients: t.recipients,
                        size: e,
                        isTyping: M,
                        status: U,
                    });
                else
                    return (0, i.jsx)(
                        ea,
                        er(ei({}, eC), {
                            src: (0, I.x)(t),
                            "aria-hidden": !0,
                            size: e,
                            status: M ? ee.Skl.ONLINE : U,
                            isTyping: M,
                        }),
                    );
            o()(null != m, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
            let n = null;
            return (
                m.isSystemUser() || (n = (0, x.Z)(_) ? ee.Skl.STREAMING : U),
                (0, i.jsx)(
                    ea,
                    er(ei({}, eC), {
                        size: h.EFr.SIZE_32,
                        src: ej,
                        avatarDecoration: eE,
                        status: n,
                        isMobile: z,
                        isTyping: M,
                        "aria-label": m.username,
                        statusTooltip: !0,
                    }),
                )
            );
        },
        e$ = (0, i.jsx)(D.Z, {
            userName: ew,
            displayNameStyles: null == m ? void 0 : m.displayNameStyles,
            effectDisplayType: $ || l || eh ? R.F.ANIMATED : R.F.PLAIN,
            loop: $,
        }),
        e0 = eI
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      e$,
                      (0, i.jsx)(B.ZP, {
                          primaryGuild: null == m ? void 0 : m.primaryGuild,
                          userId: null == m ? void 0 : m.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(en.clanTag, { [en.clanTagMuted]: eD }),
                      }),
                  ],
              })
            : e$,
        e3 = r.useRef(null),
        e1 = (0, P.Y)({ location: "PrivateChannel" }) && (null == m ? void 0 : m.displayNameStyles) != null,
        e8 = (0, p.Z)();
    return (0, i.jsx)(u.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                r = es(e, ["role"]);
            return (0, i.jsxs)(y.Z, {
                className: a()(en.channel, en.dm),
                role: n,
                focusProps: er(ei({}, el), {
                    focusTarget: eb,
                    ringTarget: e_,
                }),
                ref: e_,
                onMouseEnter: eV,
                onMouseLeave: eG,
                onMouseDown: eW,
                onFocus: eF,
                onBlur: eH,
                onContextMenu: eq,
                "aria-setsize": Q,
                "aria-posinset": J,
                children: [
                    eZ ? (0, i.jsx)("div", { className: a()(en.unreadPill, { [en.muted]: eD }) }) : null,
                    (0, i.jsxs)(h.vjx, {
                        className: a()(en.interactive, {
                            [en.interactiveSystemDM]: eS && ev,
                            [en.interactiveSelected]: l || eh,
                        }),
                        as: "div",
                        onClick: eK,
                        muted: eD,
                        selected: l,
                        children: [
                            (0, i.jsx)(G.Z, {
                                nameplate: eU ? W : void 0,
                                selected: l,
                                hovered: $,
                                content: e3,
                                placement: V.i.CHANNEL,
                            }),
                            (0, i.jsx)(
                                c.rU,
                                er(
                                    ei(
                                        {
                                            innerRef: eb,
                                            to: ee.Z5c.CHANNEL(ee.ME, t.id),
                                            className: en.link,
                                            "aria-label": (0, T.ZP)({
                                                channel: t,
                                                unread: eZ,
                                            }),
                                        },
                                        r,
                                    ),
                                    {
                                        children: (0, i.jsx)(v.Z, {
                                            ref: e3,
                                            avatar: eQ(),
                                            highlighted: eZ && !eD,
                                            muted: eD,
                                            subText: eJ(),
                                            name: (0, i.jsx)(A.Z, {
                                                className: a()(en.overflowTooltip, { [en.withDisplayNameStyles]: e1 }),
                                                children: e0,
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, i.jsx)(O.Z, {
                                                      className: en.decorator,
                                                      type: O.Z.Types.SYSTEM_DM,
                                                      verified: !0,
                                                  })
                                                : null,
                                            withDisplayNameStyles: e1,
                                        }),
                                    },
                                ),
                            ),
                            (0, i.jsxs)("div", {
                                className: a()(en.iconsContainer, { [en.nameplated]: eU }),
                                children: [
                                    ek && !eh ? (0, i.jsx)(ec, {}) : null,
                                    eP ? (0, i.jsx)(ed, {}) : null,
                                    eR ? (0, i.jsx)(eu, {}) : null,
                                    eL && !e8
                                        ? (0, i.jsx)(h.ua7, {
                                              text: et.intl.string(eO ? et.t.Et8qws : et.t["d+e27u"]),
                                              delay: 500,
                                              targetElementRef: eM,
                                              children: (e) => {
                                                  var { onClick: t } = e,
                                                      n = es(e, ["onClick"]);
                                                  return (0, i.jsx)(
                                                      eo,
                                                      er(ei({}, n), {
                                                          icon: h.xhG,
                                                          "aria-label": et.intl.string(et.t.PdRCRk),
                                                          onClick: (e) => {
                                                              null == t || t(), eq(e);
                                                          },
                                                          onMouseDown: eY,
                                                          nameplate: W,
                                                          forceShow: eh,
                                                          visibleElementRef: eM,
                                                      }),
                                                  );
                                              },
                                          })
                                        : (0, i.jsx)(eo, {
                                              icon: h.Dio,
                                              "aria-label": eO
                                                  ? et.intl.string(et.t["26C4oq"])
                                                  : et.intl.string(et.t.jsvgc3),
                                              onClick: eO ? eX : ez,
                                              onMouseDown: eY,
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
let eg =
    12633 == n.j
        ? (e) => {
              var { channel: t, selected: n } = e,
                  r = es(e, ["channel", "selected"]);
              let s = (0, g.e7)([J.default], () => J.default.getUser(t.getRecipientId())),
                  {
                      isStatusIndicatorEnabled: a,
                      isTypingIndicatorEnabled: l,
                      isFacepileEnabled: o,
                  } = w.Z.useExperiment({ location: "private_channel" }, { autoTrackExposure: !0 }),
                  c = null == s ? void 0 : s.id,
                  d = (0, g.cj)([W.Z, z.Z], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          if (a) {
                              let n = W.Z.getState().statuses;
                              t.recipients.some((e) => n[e] === ee.Skl.ONLINE) && (e = ee.Skl.ONLINE);
                          }
                      } else null != c && (e = W.Z.getStatus(c));
                      return {
                          status: e,
                          activities: null != c ? W.Z.getActivities(c) : null,
                          applicationStream: null != c ? z.Z.getAnyStreamForUser(c) : null,
                          isMobile: null != c && W.Z.isMobileOnline(c),
                      };
                  }, [t, c, a]),
                  { voiceActivityStatusEnabled: u } = (0, _.U)({ location: "PrivateChannel" }),
                  { voiceChannel: m } = (0, E.Z)({ userId: c }),
                  p = (0, M.K)({ user: s }),
                  h = (0, g.e7)([J.default, q.Z], () => {
                      if (t.isMultiUserDM())
                          if (l)
                              return Q.default.keys(q.Z.getTypingUsers(t.id)).some((e) => {
                                  var t;
                                  return e !== (null == (t = J.default.getCurrentUser()) ? void 0 : t.id);
                              });
                          else return !1;
                      return null != s && q.Z.isTyping(t.id, t.getRecipientId());
                  }, [t, s, l]);
              return t.isMultiUserDM()
                  ? (0, i.jsx)(
                        ep,
                        ei(
                            {
                                channel: t,
                                selected: n,
                                isTyping: h,
                                status: d.status === ee.Skl.ONLINE ? ee.Skl.ONLINE : void 0,
                                isGDMFacepileEnabled: o,
                            },
                            r,
                        ),
                    )
                  : (0, i.jsx)(
                        ep,
                        ei(
                            {
                                channel: t,
                                selected: n,
                                user: s,
                                voiceChannel: u ? m : void 0,
                                isTyping: h,
                                nameplate: p,
                            },
                            r,
                            d,
                        ),
                    );
          }
        : null;

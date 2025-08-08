n.d(t, {
    Qj: () => ed,
    RS: () => eu,
    ZP: () => em,
    bU: () => ea,
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
    A = n(821795),
    P = n(892567),
    R = n(853856),
    D = n(93687),
    Z = n(489618),
    w = n(785232),
    k = n(172751),
    L = n(850020),
    M = n(379839),
    B = n(359135),
    U = n(516817),
    V = n(878857),
    G = n(518950),
    F = n(199902),
    H = n(158776),
    z = n(306680),
    W = n(699516),
    Y = n(111583),
    K = n(9156),
    q = n(594174),
    X = n(709054),
    J = n(998502),
    Q = n(981631),
    $ = n(388032),
    ee = n(425154);
function et(e) {
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
function en(e, t) {
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
function ei(e, t) {
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
let er = J.ZP.getEnableHardwareAcceleration() ? g.Xo$ : g.qEK,
    es = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4,
        },
    },
    ea = (e) => {
        var { nameplate: t, icon: n, forceShow: r = !1, reducedClickTarget: s = !1, visibleElementRef: l } = e,
            o = ei(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
        let c = (0, M.A)(t);
        return (0, i.jsx)(
            g.P3F,
            en(
                et(
                    {
                        className: a()(ee.closeButton, {
                            [ee.closeButtonPlated]: null != t,
                            [ee.closeButtonForceShow]: r,
                            [ee.reducedClickTarget]: s,
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
                        className: a()({ [ee.innerCloseButtonPlated]: null != t }),
                        children: (0, i.jsx)(n, {
                            size: "sm",
                            color: "currentColor",
                            className: a()(ee.closeIcon, { [ee.closeIconPlated]: null != t }),
                        }),
                    }),
                },
            ),
        );
    },
    el = () =>
        (0, i.jsx)(g.r7p, {
            size: "xs",
            color: "currentColor",
            className: ee.favoriteIcon,
        }),
    eo = () =>
        (0, i.jsx)(g.kZF, {
            size: "xs",
            color: "currentColor",
            className: ee.favoriteIcon,
        }),
    ec = () =>
        (0, i.jsx)(g.t6m, {
            size: "xs",
            color: "currentColor",
            className: ee.favoriteIcon,
        }),
    ed = (e) => {
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
            j = ei(e, [
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
            className: a()(ee.channel, { [ee.fullWidth]: m.tq }, h),
            onClick: p,
            role: f,
            focusProps: et({ within: !0 }, es),
            "aria-posinset": b,
            "aria-setsize": x,
            ref: _,
            children: (0, i.jsx)(g.vjx, {
                as: "div",
                selected: n,
                className: a()(l, ee.interactive, ee.linkButton, { [ee.interactiveSelected]: n }),
                children: (0, i.jsxs)(
                    c.rU,
                    en(
                        et(
                            {
                                to: {
                                    pathname: t,
                                    state: u,
                                },
                                className: ee.link,
                            },
                            j,
                        ),
                        {
                            children: [
                                (0, i.jsx)(O.Z, {
                                    muted: !1,
                                    avatar: (0, i.jsx)(r, {
                                        size: "refresh_sm",
                                        className: a()(ee.linkButtonIcon, s),
                                        color: "currentColor",
                                    }),
                                    name: o,
                                    innerClassName: ee.avatarWithText,
                                }),
                                d,
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
            isGDMFacepileEnabled: s,
            selected: l = !1,
            user: m,
            activities: x,
            applicationStream: j,
            voiceChannel: D,
            isTyping: L,
            status: M,
            isMobile: F,
            nameplate: H,
            ref: Y,
            "aria-posinset": q,
            "aria-setsize": X,
        } = e,
        [J, ed] = r.useState(!1),
        [eu, em] = r.useState(!1),
        [ep, eg] = r.useState(!1),
        eh = r.useRef(null),
        ef = r.useRef(null),
        eb = null != Y ? Y : ef,
        {
            avatarSrc: ex,
            avatarDecorationSrc: e_,
            eventHandlers: ej,
        } = (0, G.Z)({
            userId: null == m ? void 0 : m.id,
            size: g.EFr.SIZE_32,
            animateOnHover: !(l || J || eu || ep),
        }),
        eE = t.isMultiUserDM(),
        eC = t.isSystemDM(),
        eO = (0, V.Q)(),
        ev = !eE && !eC && t.type === Q.d4z.DM,
        eS = ev && (null == m ? void 0 : m.primaryGuild) != null,
        eT = (0, p.e7)([K.ZP], () => K.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eI, blocked: eN } = (0, p.cj)([W.Z], () => ({
            ignored: W.Z.isIgnored(t.getRecipientId()),
            blocked: W.Z.isBlocked(t.getRecipientId()),
        })),
        ey = ev && eI,
        eA = ev && eN,
        eP = (eT || ey || eA) && !(l || J),
        eR = (0, p.e7)([z.ZP], () => z.ZP.getMentionCount(t.id) > 0),
        eD = (0, I.ZP)(t),
        eZ = (0, p.e7)([R.Z], () => R.Z.isFavorite(t.id)),
        { dotsInsteadOfCloseButton: ew, rearrangeContextMenu: ek } = Z.Z.useExperiment(
            { location: "private_channel" },
            { autoTrackExposure: !0 },
        ),
        eL = r.useRef(null),
        eM = null != H && (l || J || ep),
        eB = () => {
            ed(!0);
        },
        eU = () => {
            ed(!1);
        },
        eV = () => {
            em(!0);
        },
        eG = () => {
            em(!1);
        },
        eF = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), h.Z.closePrivateChannel(t.id, l, n);
        },
        eH = () => {
            h.Z.preload(Q.ME, t.id);
        },
        ez = (e) => {
            e.stopPropagation();
        },
        eW = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = eh.current) || t.click();
            }
        },
        eY = (e) => {
            let r = "contextmenu" === e.type,
                s = ek && !r,
                a = r ? d.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : d.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eg(!0),
                t.isMultiUserDM()
                    ? (0, f.jW)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("79695"),
                                  n.e("70205"),
                                  n.e("57789"),
                                  n.e("19549"),
                              ]).then(n.bind(n, 354741));
                              return (n) =>
                                  (0, i.jsx)(
                                      e,
                                      en(et({}, n), {
                                          channel: t,
                                          selected: l,
                                      }),
                                  );
                          },
                          {
                              impressionName: a,
                              noBlurEvent: !0,
                              onClose: () => eg(!1),
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
                                        n.e("67326"),
                                    ]).then(n.bind(n, 131404));
                              return (n) =>
                                  (0, i.jsx)(
                                      e,
                                      en(et({}, n), {
                                          user: m,
                                          channel: t,
                                          channelSelected: l,
                                      }),
                                  );
                          },
                          {
                              impressionName: a,
                              onClose: () => eg(!1),
                          },
                      );
        },
        eK = (e) => {
            e.preventDefault(), e.stopPropagation();
            let r = $.intl.formatToPlainString($.t.hJ5Ap6, { name: eD }),
                s = $.intl.format($.t.SSIVOj, { name: eD });
            t.isManaged() &&
                ((r = $.intl.formatToPlainString($.t.hVGjER, { name: eD })),
                (s = $.intl.format($.t.IK1Qvr, { name: eD }))),
                (0, g.ZDy)(async () => {
                    let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            et(
                                {
                                    header: r,
                                    body: s,
                                    onSubmit: eF,
                                },
                                t,
                            ),
                        );
                });
        },
        eq = () =>
            t.isSystemDM()
                ? (0, i.jsx)("div", {
                      className: ee.subtext,
                      children: (0, v.Z)(t.id) ? $.intl.string($.t.FL5T09) : $.intl.string($.t.NnY5lZ),
                  })
                : t.isMultiUserDM()
                  ? (0, i.jsx)("div", {
                        className: ee.subtext,
                        children: $.intl.format($.t.CxSA5O, { members: t.recipients.length + 1 }),
                    })
                  : (0, _.Z)({
                          activities: x,
                          status: M,
                          applicationStream: j,
                          voiceChannel: D,
                      })
                    ? (0, i.jsx)(E.Z, {
                          location: "PrivateChannel",
                          user: m,
                          activities: x,
                          voiceChannel: D,
                          applicationStream: j,
                          animateEmoji: J || eu || ep,
                          textClassName: ee.activityStatusText,
                          iconClassName: eP ? ee.mutedIcon : void 0,
                      })
                    : null,
        eX = () => {
            let e = g.EFr.SIZE_32;
            if (t.isMultiUserDM())
                if (t.recipients.length >= 2 && s && null == t.icon)
                    return (0, i.jsx)(w.Z, {
                        "aria-hidden": !0,
                        recipients: t.recipients,
                        size: e,
                        isTyping: L,
                        status: M,
                    });
                else
                    return (0, i.jsx)(
                        er,
                        en(et({}, ej), {
                            src: (0, T.x)(t),
                            "aria-hidden": !0,
                            size: e,
                            status: L ? Q.Skl.ONLINE : M,
                            isTyping: L,
                        }),
                    );
            o()(null != m, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
            let n = null;
            return (
                m.isSystemUser() || (n = (0, b.Z)(x) ? Q.Skl.STREAMING : M),
                (0, i.jsx)(
                    er,
                    en(et({}, ej), {
                        size: g.EFr.SIZE_32,
                        src: ex,
                        avatarDecoration: e_,
                        status: n,
                        isMobile: F,
                        isTyping: L,
                        "aria-label": m.username,
                        statusTooltip: !0,
                    }),
                )
            );
        },
        eJ = (0, i.jsx)(P.Z, {
            userName: eD,
            displayNameStyles: null == m ? void 0 : m.displayNameStyles,
            effectDisplayType: J || l || ep ? A.F.ANIMATED : A.F.PLAIN,
            loop: J,
        }),
        eQ = eS
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      eJ,
                      (0, i.jsx)(k.ZP, {
                          primaryGuild: null == m ? void 0 : m.primaryGuild,
                          userId: null == m ? void 0 : m.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(ee.clanTag, { [ee.clanTagMuted]: eP }),
                      }),
                  ],
              })
            : eJ,
        e$ = r.useRef(null);
    return (0, i.jsx)(u.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                r = ei(e, ["role"]);
            return (0, i.jsxs)(N.Z, {
                className: a()(ee.channel, ee.dm),
                role: n,
                focusProps: en(et({}, es), {
                    focusTarget: eh,
                    ringTarget: eb,
                }),
                ref: eb,
                onMouseEnter: eB,
                onMouseLeave: eU,
                onMouseDown: eH,
                onFocus: eV,
                onBlur: eG,
                onContextMenu: eY,
                "aria-setsize": X,
                "aria-posinset": q,
                children: [
                    eR ? (0, i.jsx)("div", { className: a()(ee.unreadPill, { [ee.muted]: eP }) }) : null,
                    (0, i.jsxs)(g.vjx, {
                        className: a()(ee.interactive, {
                            [ee.interactiveSystemDM]: eO && eC,
                            [ee.interactiveSelected]: l || ep,
                        }),
                        as: "div",
                        onClick: eW,
                        muted: eP,
                        selected: l,
                        children: [
                            (0, i.jsx)(U.Z, {
                                nameplate: eM ? H : void 0,
                                selected: l,
                                hovered: J,
                                content: e$,
                                placement: B.i.CHANNEL,
                            }),
                            (0, i.jsx)(
                                c.rU,
                                en(
                                    et(
                                        {
                                            innerRef: eh,
                                            to: Q.Z5c.CHANNEL(Q.ME, t.id),
                                            className: a()(ee.link, { [ee.linkPlated]: eM }),
                                            "aria-label": (0, S.ZP)({
                                                channel: t,
                                                unread: eR,
                                            }),
                                        },
                                        r,
                                    ),
                                    {
                                        children: (0, i.jsx)(O.Z, {
                                            ref: e$,
                                            avatar: eX(),
                                            highlighted: eR && !eP,
                                            muted: eP,
                                            subText: eq(),
                                            name: (0, i.jsx)(y.Z, {
                                                className: a()(ee.overflowTooltip, {
                                                    [ee.withDisplayNameStyles]:
                                                        null == m ? void 0 : m.displayNameStyles,
                                                }),
                                                children: eQ,
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, i.jsx)(C.Z, {
                                                      className: ee.decorator,
                                                      type: C.Z.Types.SYSTEM_DM,
                                                      verified: !0,
                                                  })
                                                : null,
                                        }),
                                    },
                                ),
                            ),
                            eZ && !ep ? (0, i.jsx)(el, {}) : null,
                            ey ? (0, i.jsx)(eo, {}) : null,
                            eA ? (0, i.jsx)(ec, {}) : null,
                            ew
                                ? (0, i.jsx)(g.ua7, {
                                      text: $.intl.string(eE ? $.t.Et8qws : $.t["d+e27u"]),
                                      delay: 500,
                                      targetElementRef: eL,
                                      children: (e) => {
                                          var { onClick: t } = e,
                                              n = ei(e, ["onClick"]);
                                          return (0, i.jsx)(
                                              ea,
                                              en(et({}, n), {
                                                  icon: g.xhG,
                                                  "aria-label": $.intl.string($.t.PdRCRk),
                                                  onClick: (e) => {
                                                      null == t || t(), eY(e);
                                                  },
                                                  onMouseDown: ez,
                                                  nameplate: H,
                                                  forceShow: ep,
                                                  visibleElementRef: eL,
                                              }),
                                          );
                                      },
                                  })
                                : (0, i.jsx)(ea, {
                                      icon: g.Dio,
                                      "aria-label": eE ? $.intl.string($.t["26C4oq"]) : $.intl.string($.t.jsvgc3),
                                      onClick: eE ? eK : eF,
                                      onMouseDown: ez,
                                      nameplate: H,
                                      reducedClickTarget: !0,
                                      visibleElementRef: eL,
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
                  r = ei(e, ["channel", "selected"]);
              let s = (0, p.e7)([q.default], () => q.default.getUser(t.getRecipientId())),
                  {
                      isStatusIndicatorEnabled: a,
                      isTypingIndicatorEnabled: l,
                      isFacepileEnabled: o,
                  } = D.Z.useExperiment({ location: "private_channel" }, { autoTrackExposure: !0 }),
                  c = null == s ? void 0 : s.id,
                  d = (0, p.cj)([H.Z, F.Z], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          if (a) {
                              let n = H.Z.getState().statuses;
                              t.recipients.some((e) => n[e] === Q.Skl.ONLINE) && (e = Q.Skl.ONLINE);
                          }
                      } else null != c && (e = H.Z.getStatus(c));
                      return {
                          status: e,
                          activities: null != c ? H.Z.getActivities(c) : null,
                          applicationStream: null != c ? F.Z.getAnyStreamForUser(c) : null,
                          isMobile: null != c && H.Z.isMobileOnline(c),
                      };
                  }, [t, c, a]),
                  { voiceActivityStatusEnabled: u } = (0, x.U)({ location: "PrivateChannel" }),
                  { voiceChannel: m } = (0, j.Z)({ userId: c }),
                  g = (0, L.K)({ user: s }),
                  h = (0, p.e7)([q.default, Y.Z], () => {
                      if (t.isMultiUserDM())
                          if (l)
                              return X.default.keys(Y.Z.getTypingUsers(t.id)).some((e) => {
                                  var t;
                                  return e !== (null == (t = q.default.getCurrentUser()) ? void 0 : t.id);
                              });
                          else return !1;
                      return null != s && Y.Z.isTyping(t.id, t.getRecipientId());
                  }, [t, s, l]);
              return t.isMultiUserDM()
                  ? (0, i.jsx)(
                        eu,
                        et(
                            {
                                channel: t,
                                selected: n,
                                isTyping: h,
                                status: d.status === Q.Skl.ONLINE ? Q.Skl.ONLINE : void 0,
                                isGDMFacepileEnabled: o,
                            },
                            r,
                        ),
                    )
                  : (0, i.jsx)(
                        eu,
                        et(
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

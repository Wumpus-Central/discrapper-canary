n.d(t, {
    Qj: () => ep,
    RS: () => ef,
    ZP: () => em,
    bU: () => es,
}),
    n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    c = n(799899),
    u = n(990547),
    d = n(91192),
    p = n(873546),
    f = n(893999),
    m = n(442837),
    b = n(481060),
    O = n(493683),
    y = n(239091),
    v = n(420660),
    h = n(468363),
    g = n(326255),
    j = n(956221),
    S = n(771173),
    x = n(385499),
    E = n(570908),
    N = n(702321),
    P = n(201895),
    C = n(43267),
    T = n(933557),
    I = n(163889),
    Z = n(111028),
    w = n(181430),
    M = n(821795),
    k = n(892567),
    D = n(853856),
    _ = n(93687),
    R = n(489618),
    A = n(785232),
    L = n(172751),
    U = n(850020),
    G = n(379839),
    F = n(359135),
    z = n(516817),
    B = n(986081),
    H = n(518950),
    Y = n(199902),
    Q = n(158776),
    K = n(306680),
    W = n(699516),
    V = n(111583),
    q = n(9156),
    J = n(594174),
    X = n(709054),
    $ = n(998502),
    ee = n(981631),
    et = n(388032),
    en = n(551139);
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
function el(e, t) {
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
let ea = $.ZP.getEnableHardwareAcceleration() ? b.Xo$ : b.qEK,
    eo = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4,
        },
    },
    es = (e) => {
        var { nameplate: t, icon: n, forceShow: l = !1, reducedClickTarget: i = !1, visibleElementRef: o } = e,
            s = ei(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
        let c = (0, G.A)(t);
        return (0, r.jsx)(
            b.P3F,
            el(
                er(
                    {
                        className: a()(en.closeButton, {
                            [en.closeButtonPlated]: null != t,
                            [en.closeButtonForceShow]: l,
                            [en.reducedClickTarget]: i,
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
        (0, r.jsx)(b.r7p, {
            size: "xs",
            color: "currentColor",
            className: en.favoriteIcon,
        }),
    eu = () =>
        (0, r.jsx)(b.kZF, {
            size: "xs",
            color: "currentColor",
            className: en.favoriteIcon,
        }),
    ed = () =>
        (0, r.jsx)(b.t6m, {
            size: "xs",
            color: "currentColor",
            className: en.favoriteIcon,
        }),
    ep = (e) => {
        var {
                route: t,
                selected: n,
                icon: l,
                iconClassName: i,
                interactiveClassName: o,
                text: s,
                children: u,
                locationState: d,
                onClick: f,
                className: m,
                role: O,
                "aria-posinset": y,
                "aria-setsize": v,
                listItemRef: h,
            } = e,
            g = ei(e, [
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
        return (0, r.jsx)(I.Z, {
            className: a()(en.channel, { [en.fullWidth]: p.tq }, m),
            onClick: f,
            role: O,
            focusProps: er({ within: !0 }, eo),
            "aria-posinset": y,
            "aria-setsize": v,
            ref: h,
            children: (0, r.jsx)(b.vjx, {
                as: "div",
                selected: n,
                className: a()(o, en.interactive, en.linkButton, { [en.interactiveSelected]: n }),
                children: (0, r.jsxs)(
                    c.rU,
                    el(
                        er(
                            {
                                to: {
                                    pathname: t,
                                    state: d,
                                },
                                className: en.link,
                            },
                            g,
                        ),
                        {
                            children: [
                                (0, r.jsx)(E.Z, {
                                    muted: !1,
                                    avatar: (0, r.jsx)(l, {
                                        size: "refresh_sm",
                                        className: a()(en.linkButtonIcon, i),
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
            isGDMFacepileEnabled: i,
            selected: o = !1,
            user: p,
            activities: h,
            applicationStream: j,
            voiceChannel: _,
            isTyping: U,
            status: G,
            isMobile: Y,
            nameplate: Q,
            ref: V,
            "aria-posinset": J,
            "aria-setsize": X,
        } = e,
        [$, ep] = l.useState(!1),
        [ef, em] = l.useState(!1),
        [eb, eO] = l.useState(!1),
        ey = l.useRef(null),
        ev = l.useRef(null),
        eh = null != V ? V : ev,
        {
            avatarSrc: eg,
            avatarDecorationSrc: ej,
            eventHandlers: eS,
        } = (0, H.Z)({
            userId: null == p ? void 0 : p.id,
            size: b.EFr.SIZE_32,
            animateOnHover: !(o || $ || ef || eb),
        }),
        ex = t.isMultiUserDM(),
        eE = t.isSystemDM(),
        eN = (0, B.Q)(),
        eP = !ex && !eE && t.type === ee.d4z.DM,
        eC = eP && (null == p ? void 0 : p.primaryGuild) != null,
        eT = (0, m.e7)([q.ZP], () => q.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eI, blocked: eZ } = (0, m.cj)([W.Z], () => ({
            ignored: W.Z.isIgnored(t.getRecipientId()),
            blocked: W.Z.isBlocked(t.getRecipientId()),
        })),
        ew = eP && eI,
        eM = eP && eZ,
        ek = (eT || ew || eM) && !(o || $),
        eD = (0, m.e7)([K.ZP], () => K.ZP.getMentionCount(t.id) > 0),
        e_ = (0, T.ZP)(t),
        eR = (0, m.e7)([D.Z], () => D.Z.isFavorite(t.id)),
        { dotsInsteadOfCloseButton: eA, rearrangeContextMenu: eL } = R.Z.useExperiment(
            { location: "private_channel" },
            { autoTrackExposure: !0 },
        ),
        eU = l.useRef(null),
        eG = null != Q && (o || $ || eb),
        eF = () => {
            ep(!0);
        },
        ez = () => {
            ep(!1);
        },
        eB = () => {
            em(!0);
        },
        eH = () => {
            em(!1);
        },
        eY = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), O.Z.closePrivateChannel(t.id, o, n);
        },
        eQ = () => {
            O.Z.preload(ee.ME, t.id);
        },
        eK = (e) => {
            e.stopPropagation();
        },
        eW = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = ey.current) || t.click();
            }
        },
        eV = (e) => {
            let l = "contextmenu" === e.type,
                i = eL && !l,
                a = l ? u.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : u.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eO(!0),
                t.isMultiUserDM()
                    ? (0, y.jW)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([n.e("79695"), n.e("90508"), n.e("25421")]).then(
                                  n.bind(n, 354741),
                              );
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      el(er({}, n), {
                                          channel: t,
                                          selected: o,
                                      }),
                                  );
                          },
                          {
                              impressionName: a,
                              noBlurEvent: !0,
                              onClose: () => eO(!1),
                          },
                      )
                    : (0, y.jW)(
                          e,
                          async () => {
                              let { default: e } = i
                                  ? await Promise.all([n.e("90508"), n.e("56167")]).then(n.bind(n, 416951))
                                  : await Promise.all([
                                        n.e("79695"),
                                        n.e("90508"),
                                        n.e("98783"),
                                        n.e("56826"),
                                        n.e("36084"),
                                        n.e("90477"),
                                    ]).then(n.bind(n, 131404));
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      el(er({}, n), {
                                          user: p,
                                          channel: t,
                                          channelSelected: o,
                                      }),
                                  );
                          },
                          {
                              impressionName: a,
                              onClose: () => eO(!1),
                          },
                      );
        },
        eq = (e) => {
            e.preventDefault(), e.stopPropagation();
            let l = et.intl.formatToPlainString(et.t.hJ5Ap6, { name: e_ }),
                i = et.intl.format(et.t.SSIVOj, { name: e_ });
            t.isManaged() &&
                ((l = et.intl.formatToPlainString(et.t.hVGjER, { name: e_ })),
                (i = et.intl.format(et.t.IK1Qvr, { name: e_ }))),
                (0, b.ZDy)(async () => {
                    let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            er(
                                {
                                    header: l,
                                    body: i,
                                    onSubmit: eY,
                                },
                                t,
                            ),
                        );
                });
        },
        eJ = (0, r.jsx)(k.Z, {
            userName: e_,
            displayNameStyles: null == p ? void 0 : p.displayNameStyles,
            effectDisplayType: $ || o || eb ? M.F.ANIMATED : M.F.PLAIN,
            loop: $,
            boldFontOpacity: 0.9,
        }),
        eX = eC
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      eJ,
                      (0, r.jsx)(L.ZP, {
                          primaryGuild: null == p ? void 0 : p.primaryGuild,
                          userId: null == p ? void 0 : p.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(en.clanTag, { [en.clanTagMuted]: ek }),
                      }),
                  ],
              })
            : eJ,
        e$ = l.useRef(null),
        e0 = (0, w.Y)({ location: "PrivateChannel" }) && (null == p ? void 0 : p.displayNameStyles) != null,
        e1 = (0, f.Z)();
    return (0, r.jsx)(d.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                l = ei(e, ["role"]);
            return (0, r.jsxs)(I.Z, {
                className: a()(en.channel, en.dm),
                role: n,
                focusProps: el(er({}, eo), {
                    focusTarget: ey,
                    ringTarget: eh,
                }),
                ref: eh,
                onMouseEnter: eF,
                onMouseLeave: ez,
                onMouseDown: eQ,
                onFocus: eB,
                onBlur: eH,
                onContextMenu: eV,
                "aria-setsize": X,
                "aria-posinset": J,
                children: [
                    eD ? (0, r.jsx)("div", { className: a()(en.unreadPill, { [en.muted]: ek }) }) : null,
                    (0, r.jsxs)(b.vjx, {
                        className: a()(en.interactive, {
                            [en.interactiveSystemDM]: eN && eE,
                            [en.interactiveSelected]: o || eb,
                        }),
                        as: "div",
                        onClick: eW,
                        muted: ek,
                        selected: o,
                        children: [
                            (0, r.jsx)(z.Z, {
                                nameplate: eG ? Q : void 0,
                                selected: o,
                                hovered: $,
                                content: e$,
                                placement: F.i.CHANNEL,
                            }),
                            (0, r.jsx)(
                                c.rU,
                                el(
                                    er(
                                        {
                                            innerRef: ey,
                                            to: ee.Z5c.CHANNEL(ee.ME, t.id),
                                            className: en.link,
                                            "aria-label": (0, P.ZP)({
                                                channel: t,
                                                unread: eD,
                                            }),
                                        },
                                        l,
                                    ),
                                    {
                                        children: (0, r.jsx)(E.Z, {
                                            ref: e$,
                                            avatar: (() => {
                                                let e = b.EFr.SIZE_32;
                                                if (t.isMultiUserDM())
                                                    if (t.recipients.length >= 2 && i && null == t.icon)
                                                        return (0, r.jsx)(A.Z, {
                                                            "aria-hidden": !0,
                                                            recipients: t.recipients,
                                                            size: e,
                                                            isTyping: U,
                                                            status: G,
                                                        });
                                                    else
                                                        return (0, r.jsx)(
                                                            ea,
                                                            el(er({}, eS), {
                                                                src: (0, C.x)(t),
                                                                "aria-hidden": !0,
                                                                size: e,
                                                                status: U ? ee.Skl.ONLINE : G,
                                                                isTyping: U,
                                                            }),
                                                        );
                                                s()(
                                                    null != p,
                                                    "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                                );
                                                let n = null;
                                                return (
                                                    p.isSystemUser() || (n = (0, v.Z)(h) ? ee.Skl.STREAMING : G),
                                                    (0, r.jsx)(
                                                        ea,
                                                        el(er({}, eS), {
                                                            size: b.EFr.SIZE_32,
                                                            src: eg,
                                                            avatarDecoration: ej,
                                                            status: n,
                                                            isMobile: Y,
                                                            isTyping: U,
                                                            "aria-label": p.username,
                                                            statusTooltip: !0,
                                                        }),
                                                    )
                                                );
                                            })(),
                                            highlighted: eD && !ek,
                                            muted: ek,
                                            subText: t.isSystemDM()
                                                ? (0, r.jsx)("div", {
                                                      className: en.subtext,
                                                      children: (0, N.Z)(t.id)
                                                          ? et.intl.string(et.t.FL5T09)
                                                          : et.intl.string(et.t.NnY5lZ),
                                                  })
                                                : t.isMultiUserDM()
                                                  ? (0, r.jsx)("div", {
                                                        className: en.subtext,
                                                        children: et.intl.format(et.t.CxSA5O, {
                                                            members: t.recipients.length + 1,
                                                        }),
                                                    })
                                                  : (0, g.Z)({
                                                          activities: h,
                                                          status: G,
                                                          applicationStream: j,
                                                          voiceChannel: _,
                                                      })
                                                    ? (0, r.jsx)(S.Z, {
                                                          location: "PrivateChannel",
                                                          user: p,
                                                          activities: h,
                                                          voiceChannel: _,
                                                          applicationStream: j,
                                                          animateEmoji: $ || ef || eb,
                                                          textClassName: en.activityStatusText,
                                                          iconClassName: ek ? en.mutedIcon : void 0,
                                                      })
                                                    : null,
                                            name: (0, r.jsx)(Z.Z, {
                                                className: a()(en.overflowTooltip, { [en.withDisplayNameStyles]: e0 }),
                                                children: eX,
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, r.jsx)(x.Z, {
                                                      className: en.decorator,
                                                      type: x.Z.Types.SYSTEM_DM,
                                                      verified: !0,
                                                  })
                                                : null,
                                            withDisplayNameStyles: e0,
                                        }),
                                    },
                                ),
                            ),
                            (0, r.jsxs)("div", {
                                className: a()(en.iconsContainer, { [en.nameplated]: eG }),
                                children: [
                                    eR && !eb ? (0, r.jsx)(ec, {}) : null,
                                    ew ? (0, r.jsx)(eu, {}) : null,
                                    eM ? (0, r.jsx)(ed, {}) : null,
                                    eA && !e1
                                        ? (0, r.jsx)(b.ua7, {
                                              text: et.intl.string(ex ? et.t.Et8qws : et.t["d+e27u"]),
                                              delay: 500,
                                              targetElementRef: eU,
                                              children: (e) => {
                                                  var { onClick: t } = e,
                                                      n = ei(e, ["onClick"]);
                                                  return (0, r.jsx)(
                                                      es,
                                                      el(er({}, n), {
                                                          icon: b.xhG,
                                                          "aria-label": et.intl.string(et.t.PdRCRk),
                                                          onClick: (e) => {
                                                              null == t || t(), eV(e);
                                                          },
                                                          onMouseDown: eK,
                                                          nameplate: Q,
                                                          forceShow: eb,
                                                          visibleElementRef: eU,
                                                      }),
                                                  );
                                              },
                                          })
                                        : (0, r.jsx)(es, {
                                              icon: b.Dio,
                                              "aria-label": ex
                                                  ? et.intl.string(et.t["26C4oq"])
                                                  : et.intl.string(et.t.jsvgc3),
                                              onClick: ex ? eq : eY,
                                              onMouseDown: eK,
                                              nameplate: Q,
                                              reducedClickTarget: !0,
                                              visibleElementRef: eU,
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
                  l = ei(e, ["channel", "selected"]);
              let i = (0, m.e7)([J.default], () => J.default.getUser(t.getRecipientId())),
                  {
                      isStatusIndicatorEnabled: a,
                      isTypingIndicatorEnabled: o,
                      isFacepileEnabled: s,
                  } = _.Z.useExperiment({ location: "private_channel" }, { autoTrackExposure: !0 }),
                  c = null == i ? void 0 : i.id,
                  u = (0, m.cj)([Q.Z, Y.Z], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          if (a) {
                              let n = Q.Z.getState().statuses;
                              t.recipients.some((e) => n[e] === ee.Skl.ONLINE) && (e = ee.Skl.ONLINE);
                          }
                      } else null != c && (e = Q.Z.getStatus(c));
                      return {
                          status: e,
                          activities: null != c ? Q.Z.getActivities(c) : null,
                          applicationStream: null != c ? Y.Z.getAnyStreamForUser(c) : null,
                          isMobile: null != c && Q.Z.isMobileOnline(c),
                      };
                  }, [t, c, a]),
                  { voiceActivityStatusEnabled: d } = (0, h.U)({ location: "PrivateChannel" }),
                  { voiceChannel: p } = (0, j.Z)({ userId: c }),
                  f = (0, U.K)({ user: i }),
                  b = (0, m.e7)([J.default, V.Z], () => {
                      if (t.isMultiUserDM())
                          if (o)
                              return X.default.keys(V.Z.getTypingUsers(t.id)).some((e) => {
                                  var t;
                                  return e !== (null == (t = J.default.getCurrentUser()) ? void 0 : t.id);
                              });
                          else return !1;
                      return null != i && V.Z.isTyping(t.id, t.getRecipientId());
                  }, [t, i, o]);
              return t.isMultiUserDM()
                  ? (0, r.jsx)(
                        ef,
                        er(
                            {
                                channel: t,
                                selected: n,
                                isTyping: b,
                                status: u.status === ee.Skl.ONLINE ? ee.Skl.ONLINE : void 0,
                                isGDMFacepileEnabled: s,
                            },
                            l,
                        ),
                    )
                  : (0, r.jsx)(
                        ef,
                        er(
                            {
                                channel: t,
                                selected: n,
                                user: i,
                                voiceChannel: d ? p : void 0,
                                isTyping: b,
                                nameplate: f,
                            },
                            l,
                            u,
                        ),
                    );
          }
        : null;

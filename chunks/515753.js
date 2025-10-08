n.d(t, {
    Qj: () => ef,
    RS: () => em,
    ZP: () => eb,
    bU: () => ec,
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
    b = n(28664),
    O = n(481060),
    v = n(493683),
    y = n(239091),
    h = n(420660),
    g = n(468363),
    j = n(326255),
    x = n(956221),
    N = n(771173),
    S = n(385499),
    P = n(570908),
    C = n(702321),
    E = n(201895),
    w = n(43267),
    Z = n(933557),
    T = n(163889),
    I = n(111028),
    M = n(181430),
    D = n(821795),
    k = n(892567),
    _ = n(853856),
    R = n(93687),
    L = n(489618),
    U = n(785232),
    A = n(172751),
    F = n(850020),
    G = n(379839),
    B = n(359135),
    z = n(516817),
    H = n(986081),
    K = n(518950),
    W = n(199902),
    Q = n(158776),
    Y = n(306680),
    V = n(699516),
    q = n(111583),
    J = n(9156),
    X = n(594174),
    $ = n(709054),
    ee = n(998502),
    et = n(981631),
    en = n(388032),
    er = n(800525);
function ei(e) {
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
function ea(e, t) {
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
let eo = ee.ZP.getEnableHardwareAcceleration() ? O.Xo$ : O.qEK,
    es = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4,
        },
    },
    ec = (e) => {
        var { nameplate: t, icon: n, forceShow: i = !1, reducedClickTarget: l = !1, visibleElementRef: o } = e,
            s = ea(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
        let c = (0, G.A)(t);
        return (0, r.jsx)(
            O.P3F,
            el(
                ei(
                    {
                        className: a()(er.closeButton, {
                            [er.closeButtonPlated]: null != t,
                            [er.closeButtonForceShow]: i,
                            [er.reducedClickTarget]: l,
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
                        className: a()({ [er.innerCloseButtonPlated]: null != t }),
                        children: (0, r.jsx)(n, {
                            size: "sm",
                            color: "currentColor",
                            className: a()(er.closeIcon, { [er.closeIconPlated]: null != t }),
                        }),
                    }),
                },
            ),
        );
    },
    eu = () =>
        (0, r.jsx)(O.r7p, {
            size: "xs",
            color: "currentColor",
            className: er.favoriteIcon,
        }),
    ed = () =>
        (0, r.jsx)(O.kZF, {
            size: "xs",
            color: "currentColor",
            className: er.favoriteIcon,
        }),
    ep = () =>
        (0, r.jsx)(O.t6m, {
            size: "xs",
            color: "currentColor",
            className: er.favoriteIcon,
        }),
    ef = (e) => {
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
                "aria-posinset": v,
                "aria-setsize": y,
                listItemRef: h,
            } = e,
            g = ea(e, [
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
        return (0, r.jsx)(T.Z, {
            className: a()(er.channel, { [er.fullWidth]: p.tq }, m),
            onClick: f,
            role: b,
            focusProps: ei({ within: !0 }, es),
            "aria-posinset": v,
            "aria-setsize": y,
            ref: h,
            children: (0, r.jsx)(O.vjx, {
                as: "div",
                selected: n,
                className: a()(o, er.interactive, er.linkButton, { [er.interactiveSelected]: n }),
                children: (0, r.jsxs)(
                    c.rU,
                    el(
                        ei(
                            {
                                to: {
                                    pathname: t,
                                    state: d,
                                },
                                className: er.link,
                            },
                            g,
                        ),
                        {
                            children: [
                                (0, r.jsx)(P.Z, {
                                    muted: !1,
                                    avatar: (0, r.jsx)(i, {
                                        size: "refresh_sm",
                                        className: a()(er.linkButtonIcon, l),
                                        color: "currentColor",
                                    }),
                                    name: s,
                                    innerClassName: er.avatarWithText,
                                }),
                                u,
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
            isGDMFacepileEnabled: l,
            selected: o = !1,
            user: p,
            activities: g,
            applicationStream: x,
            voiceChannel: R,
            isTyping: F,
            status: G,
            isMobile: W,
            nameplate: Q,
            ref: q,
            "aria-posinset": X,
            "aria-setsize": $,
        } = e,
        [ee, ef] = i.useState(!1),
        [em, eb] = i.useState(!1),
        [eO, ev] = i.useState(!1),
        ey = i.useRef(null),
        eh = i.useRef(null),
        eg = null != q ? q : eh,
        {
            avatarSrc: ej,
            avatarDecorationSrc: ex,
            eventHandlers: eN,
        } = (0, K.Z)({
            userId: null == p ? void 0 : p.id,
            size: O.EFr.SIZE_32,
            animateOnHover: !(o || ee || em || eO),
        }),
        eS = t.isMultiUserDM(),
        eP = t.isSystemDM(),
        eC = (0, H.Q)(),
        eE = !eS && !eP && t.type === et.d4z.DM,
        ew = eE && (null == p ? void 0 : p.primaryGuild) != null,
        eZ = (0, m.e7)([J.ZP], () => J.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eT, blocked: eI } = (0, m.cj)([V.Z], () => ({
            ignored: V.Z.isIgnored(t.getRecipientId()),
            blocked: V.Z.isBlocked(t.getRecipientId()),
        })),
        eM = eE && eT,
        eD = eE && eI,
        ek = (eZ || eM || eD) && !(o || ee),
        e_ = (0, m.e7)([Y.ZP], () => Y.ZP.getMentionCount(t.id) > 0),
        eR = (0, Z.ZP)(t),
        eL = (0, m.e7)([_.Z], () => _.Z.isFavorite(t.id)),
        { dotsInsteadOfCloseButton: eU, rearrangeContextMenu: eA } = L.Z.useExperiment(
            { location: "private_channel" },
            { autoTrackExposure: !0 },
        ),
        eF = i.useRef(null),
        eG = null != Q && (o || ee || eO),
        eB = () => {
            ef(!0);
        },
        ez = () => {
            ef(!1);
        },
        eH = () => {
            eb(!0);
        },
        eK = () => {
            eb(!1);
        },
        eW = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), v.Z.closePrivateChannel(t.id, o, n);
        },
        eQ = () => {
            v.Z.preload(et.ME, t.id);
        },
        eY = (e) => {
            e.stopPropagation();
        },
        eV = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = ey.current) || t.click();
            }
        },
        eq = (e) => {
            let i = "contextmenu" === e.type,
                l = eA && !i,
                a = i ? u.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : u.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ev(!0),
                t.isMultiUserDM()
                    ? (0, y.jW)(
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
                                      el(ei({}, n), {
                                          channel: t,
                                          selected: o,
                                      }),
                                  );
                          },
                          {
                              impressionName: a,
                              noBlurEvent: !0,
                              onClose: () => ev(!1),
                          },
                      )
                    : (0, y.jW)(
                          e,
                          async () => {
                              let { default: e } = l
                                  ? await Promise.all([n.e("90508"), n.e("56167")]).then(n.bind(n, 416951))
                                  : await Promise.all([
                                        n.e("79695"),
                                        n.e("90508"),
                                        n.e("98783"),
                                        n.e("6915"),
                                        n.e("56826"),
                                        n.e("3091"),
                                    ]).then(n.bind(n, 131404));
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      el(ei({}, n), {
                                          user: p,
                                          channel: t,
                                          channelSelected: o,
                                      }),
                                  );
                          },
                          {
                              impressionName: a,
                              onClose: () => ev(!1),
                          },
                      );
        },
        eJ = (e) => {
            e.preventDefault(), e.stopPropagation();
            let i = en.intl.formatToPlainString(en.t.hJ5Ap6, { name: eR }),
                l = en.intl.format(en.t.SSIVOj, { name: eR });
            t.isManaged() &&
                ((i = en.intl.formatToPlainString(en.t.hVGjER, { name: eR })),
                (l = en.intl.format(en.t.IK1Qvr, { name: eR }))),
                (0, O.ZDy)(async () => {
                    let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            ei(
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
        eX = (0, r.jsx)(k.Z, {
            userName: eR,
            displayNameStyles: null == p ? void 0 : p.displayNameStyles,
            effectDisplayType: ee || o || eO ? D.F.ANIMATED : D.F.PLAIN,
            loop: ee,
            boldFontOpacity: 0.9,
        }),
        e$ = ew
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      eX,
                      (0, r.jsx)(A.ZP, {
                          primaryGuild: null == p ? void 0 : p.primaryGuild,
                          userId: null == p ? void 0 : p.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(er.clanTag, { [er.clanTagMuted]: ek }),
                      }),
                  ],
              })
            : eX,
        e0 = i.useRef(null),
        e1 = (0, M.Y)({ location: "PrivateChannel" }) && (null == p ? void 0 : p.displayNameStyles) != null,
        e8 = (0, f.Z)();
    return (0, r.jsx)(d.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                i = ea(e, ["role"]);
            return (0, r.jsxs)(T.Z, {
                className: a()(er.channel, er.dm),
                role: n,
                focusProps: el(ei({}, es), {
                    focusTarget: ey,
                    ringTarget: eg,
                }),
                ref: eg,
                onMouseEnter: eB,
                onMouseLeave: ez,
                onMouseDown: eQ,
                onFocus: eH,
                onBlur: eK,
                onContextMenu: eq,
                "aria-setsize": $,
                "aria-posinset": X,
                children: [
                    e_ ? (0, r.jsx)("div", { className: a()(er.unreadPill, { [er.muted]: ek }) }) : null,
                    (0, r.jsxs)(O.vjx, {
                        className: a()(er.interactive, {
                            [er.interactiveSystemDM]: eC && eP,
                            [er.interactiveSelected]: o || eO,
                        }),
                        as: "div",
                        onClick: eV,
                        muted: ek,
                        selected: o,
                        children: [
                            (0, r.jsx)(z.Z, {
                                nameplate: eG ? Q : void 0,
                                selected: o,
                                hovered: ee,
                                content: e0,
                                placement: B.i.CHANNEL,
                            }),
                            (0, r.jsx)(
                                c.rU,
                                el(
                                    ei(
                                        {
                                            innerRef: ey,
                                            to: et.Z5c.CHANNEL(et.ME, t.id),
                                            className: er.link,
                                            "aria-label": (0, E.ZP)({
                                                channel: t,
                                                unread: e_,
                                            }),
                                        },
                                        i,
                                    ),
                                    {
                                        children: (0, r.jsx)(P.Z, {
                                            ref: e0,
                                            avatar: (() => {
                                                let e = O.EFr.SIZE_32;
                                                if (t.isMultiUserDM())
                                                    if (t.recipients.length >= 2 && l && null == t.icon)
                                                        return (0, r.jsx)(U.Z, {
                                                            "aria-hidden": !0,
                                                            recipients: t.recipients,
                                                            size: e,
                                                            isTyping: F,
                                                            status: G,
                                                        });
                                                    else
                                                        return (0, r.jsx)(
                                                            eo,
                                                            el(ei({}, eN), {
                                                                src: (0, w.x)(t),
                                                                "aria-hidden": !0,
                                                                size: e,
                                                                status: F ? et.Skl.ONLINE : G,
                                                                isTyping: F,
                                                            }),
                                                        );
                                                s()(
                                                    null != p,
                                                    "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                                );
                                                let n = null;
                                                return (
                                                    p.isSystemUser() || (n = (0, h.Z)(g) ? et.Skl.STREAMING : G),
                                                    (0, r.jsx)(
                                                        eo,
                                                        el(ei({}, eN), {
                                                            size: O.EFr.SIZE_32,
                                                            src: ej,
                                                            avatarDecoration: ex,
                                                            status: n,
                                                            isMobile: W,
                                                            isTyping: F,
                                                            "aria-label": p.username,
                                                            statusTooltip: !0,
                                                        }),
                                                    )
                                                );
                                            })(),
                                            highlighted: e_ && !ek,
                                            muted: ek,
                                            subText: t.isSystemDM()
                                                ? (0, r.jsx)("div", {
                                                      className: er.subtext,
                                                      children: (0, C.Z)(t.id)
                                                          ? en.intl.string(en.t.FL5T09)
                                                          : en.intl.string(en.t.NnY5lZ),
                                                  })
                                                : t.isMultiUserDM()
                                                  ? (0, r.jsx)("div", {
                                                        className: er.subtext,
                                                        children: en.intl.format(en.t.CxSA5O, {
                                                            members: t.recipients.length + 1,
                                                        }),
                                                    })
                                                  : (0, j.Z)({
                                                          activities: g,
                                                          status: G,
                                                          applicationStream: x,
                                                          voiceChannel: R,
                                                      })
                                                    ? (0, r.jsx)(N.Z, {
                                                          location: "PrivateChannel",
                                                          user: p,
                                                          activities: g,
                                                          voiceChannel: R,
                                                          applicationStream: x,
                                                          animateEmoji: ee || em || eO,
                                                          textClassName: er.activityStatusText,
                                                          iconClassName: ek ? er.mutedIcon : void 0,
                                                      })
                                                    : null,
                                            name: (0, r.jsx)(I.Z, {
                                                className: a()(er.overflowTooltip, { [er.withDisplayNameStyles]: e1 }),
                                                children: e$,
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, r.jsx)(S.Z, {
                                                      className: er.decorator,
                                                      type: S.Z.Types.SYSTEM_DM,
                                                      verified: !0,
                                                  })
                                                : null,
                                            withDisplayNameStyles: e1,
                                        }),
                                    },
                                ),
                            ),
                            (0, r.jsxs)("div", {
                                className: a()(er.iconsContainer, { [er.nameplated]: eG }),
                                children: [
                                    eL && !eO ? (0, r.jsx)(eu, {}) : null,
                                    eM ? (0, r.jsx)(ed, {}) : null,
                                    eD ? (0, r.jsx)(ep, {}) : null,
                                    eU && !e8
                                        ? (0, r.jsx)(b.u, {
                                              asContainer: !0,
                                              text: en.intl.string(eS ? en.t.Et8qws : en.t["d+e27u"]),
                                              delay: 500,
                                              targetElementRef: eF,
                                              children: (0, r.jsx)(ec, {
                                                  icon: O.xhG,
                                                  "aria-label": en.intl.string(en.t.PdRCRk),
                                                  onClick: (e) => {
                                                      eq(e);
                                                  },
                                                  onMouseDown: eY,
                                                  nameplate: Q,
                                                  forceShow: eO,
                                                  visibleElementRef: eF,
                                              }),
                                          })
                                        : (0, r.jsx)(ec, {
                                              icon: O.Dio,
                                              "aria-label": eS
                                                  ? en.intl.string(en.t["26C4oq"])
                                                  : en.intl.string(en.t.jsvgc3),
                                              onClick: eS ? eJ : eW,
                                              onMouseDown: eY,
                                              nameplate: Q,
                                              reducedClickTarget: !0,
                                              visibleElementRef: eF,
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
    12633 == n.j
        ? (e) => {
              var { channel: t, selected: n } = e,
                  i = ea(e, ["channel", "selected"]);
              let l = (0, m.e7)([X.default], () => X.default.getUser(t.getRecipientId())),
                  {
                      isStatusIndicatorEnabled: a,
                      isTypingIndicatorEnabled: o,
                      isFacepileEnabled: s,
                  } = R.Z.useExperiment({ location: "private_channel" }, { autoTrackExposure: !0 }),
                  c = null == l ? void 0 : l.id,
                  u = (0, m.cj)([Q.Z, W.Z], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          if (a) {
                              let n = Q.Z.getState().statuses;
                              t.recipients.some((e) => n[e] === et.Skl.ONLINE) && (e = et.Skl.ONLINE);
                          }
                      } else null != c && (e = Q.Z.getStatus(c));
                      return {
                          status: e,
                          activities: null != c ? Q.Z.getActivities(c) : null,
                          applicationStream: null != c ? W.Z.getAnyStreamForUser(c) : null,
                          isMobile: null != c && Q.Z.isMobileOnline(c),
                      };
                  }, [t, c, a]),
                  { voiceActivityStatusEnabled: d } = (0, g.U)({ location: "PrivateChannel" }),
                  { voiceChannel: p } = (0, x.Z)({ userId: c }),
                  f = (0, F.K)({ user: l }),
                  b = (0, m.e7)([X.default, q.Z], () => {
                      if (t.isMultiUserDM())
                          if (o)
                              return $.default.keys(q.Z.getTypingUsers(t.id)).some((e) => {
                                  var t;
                                  return e !== (null == (t = X.default.getCurrentUser()) ? void 0 : t.id);
                              });
                          else return !1;
                      return null != l && q.Z.isTyping(t.id, t.getRecipientId());
                  }, [t, l, o]);
              return t.isMultiUserDM()
                  ? (0, r.jsx)(
                        em,
                        ei(
                            {
                                channel: t,
                                selected: n,
                                isTyping: b,
                                status: u.status === et.Skl.ONLINE ? et.Skl.ONLINE : void 0,
                                isGDMFacepileEnabled: s,
                            },
                            i,
                        ),
                    )
                  : (0, r.jsx)(
                        em,
                        ei(
                            {
                                channel: t,
                                selected: n,
                                user: l,
                                voiceChannel: d ? p : void 0,
                                isTyping: b,
                                nameplate: f,
                            },
                            i,
                            u,
                        ),
                    );
          }
        : null;

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
    o = n.n(l),
    s = n(512722),
    a = n.n(s),
    c = n(799899),
    u = n(990547),
    d = n(91192),
    p = n(873546),
    f = n(893999),
    m = n(442837),
    b = n(28664),
    y = n(481060),
    O = n(493683),
    v = n(239091),
    g = n(420660),
    h = n(468363),
    j = n(326255),
    S = n(956221),
    N = n(771173),
    x = n(385499),
    E = n(570908),
    P = n(702321),
    C = n(201895),
    w = n(43267),
    T = n(933557),
    Z = n(163889),
    I = n(111028),
    M = n(181430),
    k = n(821795),
    D = n(892567),
    _ = n(853856),
    R = n(93687),
    L = n(489618),
    A = n(785232),
    G = n(172751),
    U = n(850020),
    B = n(379839),
    F = n(359135),
    z = n(516817),
    H = n(986081),
    K = n(518950),
    V = n(199902),
    Y = n(158776),
    W = n(306680),
    Q = n(699516),
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
function eo(e, t) {
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
let es = ee.ZP.getEnableHardwareAcceleration() ? y.Xo$ : y.qEK,
    ea = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4,
        },
    },
    ec = (e) => {
        var { nameplate: t, icon: n, forceShow: i = !1, reducedClickTarget: l = !1, visibleElementRef: s } = e,
            a = eo(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
        let c = (0, B.A)(t);
        return (0, r.jsx)(
            y.P3F,
            el(
                ei(
                    {
                        className: o()(er.closeButton, {
                            [er.closeButtonPlated]: null != t,
                            [er.closeButtonForceShow]: i,
                            [er.reducedClickTarget]: l,
                        }),
                        style: c,
                    },
                    a,
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
                        ref: s,
                        className: o()({ [er.innerCloseButtonPlated]: null != t }),
                        children: (0, r.jsx)(n, {
                            size: "sm",
                            color: "currentColor",
                            className: o()(er.closeIcon, { [er.closeIconPlated]: null != t }),
                        }),
                    }),
                },
            ),
        );
    },
    eu = () =>
        (0, r.jsx)(y.r7p, {
            size: "xs",
            color: "currentColor",
            className: er.favoriteIcon,
        }),
    ed = () =>
        (0, r.jsx)(y.kZF, {
            size: "xs",
            color: "currentColor",
            className: er.favoriteIcon,
        }),
    ep = () =>
        (0, r.jsx)(y.t6m, {
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
                interactiveClassName: s,
                text: a,
                children: u,
                locationState: d,
                onClick: f,
                className: m,
                role: b,
                "aria-posinset": O,
                "aria-setsize": v,
                listItemRef: g,
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
            className: o()(er.channel, { [er.fullWidth]: p.tq }, m),
            onClick: f,
            role: b,
            focusProps: ei({ within: !0 }, ea),
            "aria-posinset": O,
            "aria-setsize": v,
            ref: g,
            children: (0, r.jsx)(y.vjx, {
                as: "div",
                selected: n,
                className: o()(s, er.interactive, er.linkButton, { [er.interactiveSelected]: n }),
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
                            h,
                        ),
                        {
                            children: [
                                (0, r.jsx)(E.Z, {
                                    muted: !1,
                                    avatar: (0, r.jsx)(i, {
                                        size: "refresh_sm",
                                        className: o()(er.linkButtonIcon, l),
                                        color: "currentColor",
                                    }),
                                    name: a,
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
            selected: s = !1,
            user: p,
            activities: h,
            applicationStream: S,
            voiceChannel: R,
            isTyping: U,
            status: B,
            isMobile: V,
            nameplate: Y,
            ref: q,
            "aria-posinset": X,
            "aria-setsize": $,
        } = e,
        [ee, ef] = i.useState(!1),
        [em, eb] = i.useState(!1),
        [ey, eO] = i.useState(!1),
        ev = i.useRef(null),
        eg = i.useRef(null),
        eh = null != q ? q : eg,
        {
            avatarSrc: ej,
            avatarDecorationSrc: eS,
            eventHandlers: eN,
        } = (0, K.Z)({
            userId: null == p ? void 0 : p.id,
            size: y.EFr.SIZE_32,
            animateOnHover: !(s || ee || em || ey),
        }),
        ex = t.isMultiUserDM(),
        eE = t.isSystemDM(),
        eP = (0, H.Q)(),
        eC = !ex && !eE && t.type === et.d4z.DM,
        ew = eC && (null == p ? void 0 : p.primaryGuild) != null,
        eT = (0, m.e7)([J.ZP], () => J.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eZ, blocked: eI } = (0, m.cj)([Q.Z], () => ({
            ignored: Q.Z.isIgnored(t.getRecipientId()),
            blocked: Q.Z.isBlocked(t.getRecipientId()),
        })),
        eM = eC && eZ,
        ek = eC && eI,
        eD = (eT || eM || ek) && !(s || ee),
        e_ = (0, m.e7)([W.ZP], () => W.ZP.getMentionCount(t.id) > 0),
        eR = (0, T.ZP)(t),
        eL = (0, m.e7)([_.Z], () => _.Z.isFavorite(t.id)),
        { dotsInsteadOfCloseButton: eA, rearrangeContextMenu: eG } = L.Z.useExperiment(
            { location: "private_channel" },
            { autoTrackExposure: !0 },
        ),
        eU = i.useRef(null),
        eB = null != Y && (s || ee || ey),
        eF = () => {
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
        eV = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), O.Z.closePrivateChannel(t.id, s, n);
        },
        eY = () => {
            O.Z.preload(et.ME, t.id);
        },
        eW = (e) => {
            e.stopPropagation();
        },
        eQ = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = ev.current) || t.click();
            }
        },
        eq = (e) => {
            let i = "contextmenu" === e.type,
                l = eG && !i,
                o = i ? u.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : u.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eO(!0),
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
                                      el(ei({}, n), {
                                          channel: t,
                                          selected: s,
                                      }),
                                  );
                          },
                          {
                              impressionName: o,
                              noBlurEvent: !0,
                              onClose: () => eO(!1),
                          },
                      )
                    : (0, v.jW)(
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
                                        n.e("24140"),
                                    ]).then(n.bind(n, 131404));
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      el(ei({}, n), {
                                          user: p,
                                          channel: t,
                                          channelSelected: s,
                                      }),
                                  );
                          },
                          {
                              impressionName: o,
                              onClose: () => eO(!1),
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
                (0, y.ZDy)(async () => {
                    let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            ei(
                                {
                                    header: i,
                                    body: l,
                                    onSubmit: eV,
                                },
                                t,
                            ),
                        );
                });
        },
        eX = (0, r.jsx)(D.Z, {
            userName: eR,
            displayNameStyles: null == p ? void 0 : p.displayNameStyles,
            effectDisplayType: ee || s || ey ? k.F.ANIMATED : k.F.PLAIN,
            loop: ee,
            boldFontOpacity: 0.9,
        }),
        e$ = ew
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      eX,
                      (0, r.jsx)(G.ZP, {
                          primaryGuild: null == p ? void 0 : p.primaryGuild,
                          userId: null == p ? void 0 : p.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: o()(er.clanTag, { [er.clanTagMuted]: eD }),
                      }),
                  ],
              })
            : eX,
        e0 = i.useRef(null),
        e1 = (0, M.Y)({ location: "PrivateChannel" }) && (null == p ? void 0 : p.displayNameStyles) != null,
        e5 = (0, f.Z)();
    return (0, r.jsx)(d.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                i = eo(e, ["role"]);
            return (0, r.jsxs)(Z.Z, {
                className: o()(er.channel, er.dm),
                role: n,
                focusProps: el(ei({}, ea), {
                    focusTarget: ev,
                    ringTarget: eh,
                }),
                ref: eh,
                onMouseEnter: eF,
                onMouseLeave: ez,
                onMouseDown: eY,
                onFocus: eH,
                onBlur: eK,
                onContextMenu: eq,
                "aria-setsize": $,
                "aria-posinset": X,
                children: [
                    e_ ? (0, r.jsx)("div", { className: o()(er.unreadPill, { [er.muted]: eD }) }) : null,
                    (0, r.jsxs)(y.vjx, {
                        className: o()(er.interactive, {
                            [er.interactiveSystemDM]: eP && eE,
                            [er.interactiveSelected]: s || ey,
                        }),
                        as: "div",
                        onClick: eQ,
                        muted: eD,
                        selected: s,
                        children: [
                            (0, r.jsx)(z.Z, {
                                nameplate: eB ? Y : void 0,
                                selected: s,
                                hovered: ee,
                                content: e0,
                                placement: F.i.CHANNEL,
                            }),
                            (0, r.jsx)(
                                c.rU,
                                el(
                                    ei(
                                        {
                                            innerRef: ev,
                                            to: et.Z5c.CHANNEL(et.ME, t.id),
                                            className: er.link,
                                            "aria-label": (0, C.ZP)({
                                                channel: t,
                                                unread: e_,
                                            }),
                                        },
                                        i,
                                    ),
                                    {
                                        children: (0, r.jsx)(E.Z, {
                                            ref: e0,
                                            avatar: (() => {
                                                let e = y.EFr.SIZE_32;
                                                if (t.isMultiUserDM())
                                                    if (t.recipients.length >= 2 && l && null == t.icon)
                                                        return (0, r.jsx)(A.Z, {
                                                            "aria-hidden": !0,
                                                            recipients: t.recipients,
                                                            size: e,
                                                            isTyping: U,
                                                            status: B,
                                                        });
                                                    else
                                                        return (0, r.jsx)(
                                                            es,
                                                            el(ei({}, eN), {
                                                                src: (0, w.x)(t),
                                                                "aria-hidden": !0,
                                                                size: e,
                                                                status: U ? et.Skl.ONLINE : B,
                                                                isTyping: U,
                                                            }),
                                                        );
                                                a()(
                                                    null != p,
                                                    "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                                );
                                                let n = null;
                                                return (
                                                    p.isSystemUser() || (n = (0, g.Z)(h) ? et.Skl.STREAMING : B),
                                                    (0, r.jsx)(
                                                        es,
                                                        el(ei({}, eN), {
                                                            size: y.EFr.SIZE_32,
                                                            src: ej,
                                                            avatarDecoration: eS,
                                                            status: n,
                                                            isMobile: V,
                                                            isTyping: U,
                                                            "aria-label": p.username,
                                                            statusTooltip: !0,
                                                        }),
                                                    )
                                                );
                                            })(),
                                            highlighted: e_ && !eD,
                                            muted: eD,
                                            subText: t.isSystemDM()
                                                ? (0, r.jsx)("div", {
                                                      className: er.subtext,
                                                      children: (0, P.Z)(t.id)
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
                                                          activities: h,
                                                          status: B,
                                                          applicationStream: S,
                                                          voiceChannel: R,
                                                      })
                                                    ? (0, r.jsx)(N.Z, {
                                                          location: "PrivateChannel",
                                                          user: p,
                                                          activities: h,
                                                          voiceChannel: R,
                                                          applicationStream: S,
                                                          animateEmoji: ee || em || ey,
                                                          textClassName: er.activityStatusText,
                                                          iconClassName: eD ? er.mutedIcon : void 0,
                                                      })
                                                    : null,
                                            name: (0, r.jsx)(I.Z, {
                                                className: o()(er.overflowTooltip, { [er.withDisplayNameStyles]: e1 }),
                                                children: e$,
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, r.jsx)(x.Z, {
                                                      className: er.decorator,
                                                      type: x.Z.Types.SYSTEM_DM,
                                                      verified: !0,
                                                  })
                                                : null,
                                            withDisplayNameStyles: e1,
                                        }),
                                    },
                                ),
                            ),
                            (0, r.jsxs)("div", {
                                className: o()(er.iconsContainer, { [er.nameplated]: eB }),
                                children: [
                                    eL && !ey ? (0, r.jsx)(eu, {}) : null,
                                    eM ? (0, r.jsx)(ed, {}) : null,
                                    ek ? (0, r.jsx)(ep, {}) : null,
                                    eA && !e5
                                        ? (0, r.jsx)(b.u, {
                                              asContainer: !0,
                                              text: en.intl.string(ex ? en.t.Et8qws : en.t["d+e27u"]),
                                              delay: 500,
                                              targetElementRef: eU,
                                              children: (0, r.jsx)(ec, {
                                                  icon: y.xhG,
                                                  "aria-label": en.intl.string(en.t.PdRCRk),
                                                  onClick: (e) => {
                                                      eq(e);
                                                  },
                                                  onMouseDown: eW,
                                                  nameplate: Y,
                                                  forceShow: ey,
                                                  visibleElementRef: eU,
                                              }),
                                          })
                                        : (0, r.jsx)(ec, {
                                              icon: y.Dio,
                                              "aria-label": ex
                                                  ? en.intl.string(en.t["26C4oq"])
                                                  : en.intl.string(en.t.jsvgc3),
                                              onClick: ex ? eJ : eV,
                                              onMouseDown: eW,
                                              nameplate: Y,
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
let eb =
    12633 == n.j
        ? (e) => {
              var { channel: t, selected: n } = e,
                  i = eo(e, ["channel", "selected"]);
              let l = (0, m.e7)([X.default], () => X.default.getUser(t.getRecipientId())),
                  {
                      isStatusIndicatorEnabled: o,
                      isTypingIndicatorEnabled: s,
                      isFacepileEnabled: a,
                  } = R.Z.useExperiment({ location: "private_channel" }, { autoTrackExposure: !0 }),
                  c = null == l ? void 0 : l.id,
                  u = (0, m.cj)([Y.Z, V.Z], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          if (o) {
                              let n = Y.Z.getState().statuses;
                              t.recipients.some((e) => n[e] === et.Skl.ONLINE) && (e = et.Skl.ONLINE);
                          }
                      } else null != c && (e = Y.Z.getStatus(c));
                      return {
                          status: e,
                          activities: null != c ? Y.Z.getActivities(c) : null,
                          applicationStream: null != c ? V.Z.getAnyStreamForUser(c) : null,
                          isMobile: null != c && Y.Z.isMobileOnline(c),
                      };
                  }, [t, c, o]),
                  { voiceActivityStatusEnabled: d } = (0, h.U)({ location: "PrivateChannel" }),
                  { voiceChannel: p } = (0, S.Z)({ userId: c }),
                  f = (0, U.K)({ user: l }),
                  b = (0, m.e7)([X.default, q.Z], () => {
                      if (t.isMultiUserDM())
                          if (s)
                              return $.default.keys(q.Z.getTypingUsers(t.id)).some((e) => {
                                  var t;
                                  return e !== (null == (t = X.default.getCurrentUser()) ? void 0 : t.id);
                              });
                          else return !1;
                      return null != l && q.Z.isTyping(t.id, t.getRecipientId());
                  }, [t, l, s]);
              return t.isMultiUserDM()
                  ? (0, r.jsx)(
                        em,
                        ei(
                            {
                                channel: t,
                                selected: n,
                                isTyping: b,
                                status: u.status === et.Skl.ONLINE ? et.Skl.ONLINE : void 0,
                                isGDMFacepileEnabled: a,
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

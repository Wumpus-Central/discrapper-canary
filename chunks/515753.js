n.d(t, {
    Qj: () => ef,
    RS: () => em,
    ZP: () => eb,
    bU: () => ec,
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
    b = n(28664),
    O = n(481060),
    y = n(493683),
    v = n(239091),
    g = n(420660),
    h = n(468363),
    j = n(326255),
    N = n(956221),
    x = n(771173),
    S = n(385499),
    E = n(570908),
    P = n(702321),
    C = n(201895),
    I = n(43267),
    T = n(933557),
    Z = n(163889),
    w = n(111028),
    M = n(181430),
    D = n(821795),
    _ = n(892567),
    k = n(853856),
    R = n(93687),
    L = n(489618),
    A = n(785232),
    G = n(172751),
    U = n(850020),
    F = n(379839),
    B = n(359135),
    z = n(516817),
    H = n(986081),
    Y = n(518950),
    W = n(199902),
    K = n(158776),
    Q = n(306680),
    V = n(699516),
    q = n(111583),
    J = n(9156),
    X = n(594174),
    $ = n(709054),
    ee = n(998502),
    et = n(981631),
    en = n(388032),
    er = n(800525);
function el(e) {
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
function ei(e, t) {
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
let eo = ee.ZP.getEnableHardwareAcceleration() ? O.Xo$ : O.qEK,
    es = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4,
        },
    },
    ec = (e) => {
        var { nameplate: t, icon: n, forceShow: l = !1, reducedClickTarget: i = !1, visibleElementRef: o } = e,
            s = ea(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
        let c = (0, F.A)(t);
        return (0, r.jsx)(
            O.P3F,
            ei(
                el(
                    {
                        className: a()(er.closeButton, {
                            [er.closeButtonPlated]: null != t,
                            [er.closeButtonForceShow]: l,
                            [er.reducedClickTarget]: i,
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
                icon: l,
                iconClassName: i,
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
            h = ea(e, [
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
            className: a()(er.channel, { [er.fullWidth]: p.tq }, m),
            onClick: f,
            role: b,
            focusProps: el({ within: !0 }, es),
            "aria-posinset": y,
            "aria-setsize": v,
            ref: g,
            children: (0, r.jsx)(O.vjx, {
                as: "div",
                selected: n,
                className: a()(o, er.interactive, er.linkButton, { [er.interactiveSelected]: n }),
                children: (0, r.jsxs)(
                    c.rU,
                    ei(
                        el(
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
                                    avatar: (0, r.jsx)(l, {
                                        size: "refresh_sm",
                                        className: a()(er.linkButtonIcon, i),
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
            isGDMFacepileEnabled: i,
            selected: o = !1,
            user: p,
            activities: h,
            applicationStream: N,
            voiceChannel: R,
            isTyping: U,
            status: F,
            isMobile: W,
            nameplate: K,
            ref: q,
            "aria-posinset": X,
            "aria-setsize": $,
        } = e,
        [ee, ef] = l.useState(!1),
        [em, eb] = l.useState(!1),
        [eO, ey] = l.useState(!1),
        ev = l.useRef(null),
        eg = l.useRef(null),
        eh = null != q ? q : eg,
        {
            avatarSrc: ej,
            avatarDecorationSrc: eN,
            eventHandlers: ex,
        } = (0, Y.Z)({
            userId: null == p ? void 0 : p.id,
            size: O.EFr.SIZE_32,
            animateOnHover: !(o || ee || em || eO),
        }),
        eS = t.isMultiUserDM(),
        eE = t.isSystemDM(),
        eP = (0, H.Q)(),
        eC = !eS && !eE && t.type === et.d4z.DM,
        eI = eC && (null == p ? void 0 : p.primaryGuild) != null,
        eT = (0, m.e7)([J.ZP], () => J.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eZ, blocked: ew } = (0, m.cj)([V.Z], () => ({
            ignored: V.Z.isIgnored(t.getRecipientId()),
            blocked: V.Z.isBlocked(t.getRecipientId()),
        })),
        eM = eC && eZ,
        eD = eC && ew,
        e_ = (eT || eM || eD) && !(o || ee),
        ek = (0, m.e7)([Q.ZP], () => Q.ZP.getMentionCount(t.id) > 0),
        eR = (0, T.ZP)(t),
        eL = (0, m.e7)([k.Z], () => k.Z.isFavorite(t.id)),
        { dotsInsteadOfCloseButton: eA, rearrangeContextMenu: eG } = L.Z.useExperiment(
            { location: "private_channel" },
            { autoTrackExposure: !0 },
        ),
        eU = l.useRef(null),
        eF = null != K && (o || ee || eO),
        eB = () => {
            ef(!0);
        },
        ez = () => {
            ef(!1);
        },
        eH = () => {
            eb(!0);
        },
        eY = () => {
            eb(!1);
        },
        eW = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), y.Z.closePrivateChannel(t.id, o, n);
        },
        eK = () => {
            y.Z.preload(et.ME, t.id);
        },
        eQ = (e) => {
            e.stopPropagation();
        },
        eV = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = ev.current) || t.click();
            }
        },
        eq = (e) => {
            let l = "contextmenu" === e.type,
                i = eG && !l,
                a = l ? u.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : u.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ey(!0),
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
                                      ei(el({}, n), {
                                          channel: t,
                                          selected: o,
                                      }),
                                  );
                          },
                          {
                              impressionName: a,
                              noBlurEvent: !0,
                              onClose: () => ey(!1),
                          },
                      )
                    : (0, v.jW)(
                          e,
                          async () => {
                              let { default: e } = i
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
                                      ei(el({}, n), {
                                          user: p,
                                          channel: t,
                                          channelSelected: o,
                                      }),
                                  );
                          },
                          {
                              impressionName: a,
                              onClose: () => ey(!1),
                          },
                      );
        },
        eJ = (e) => {
            e.preventDefault(), e.stopPropagation();
            let l = en.intl.formatToPlainString(en.t.hJ5Ap4, { name: eR }),
                i = en.intl.format(en.t.SSIVOu, { name: eR });
            t.isManaged() &&
                ((l = en.intl.formatToPlainString(en.t.hVGjEW, { name: eR })),
                (i = en.intl.format(en.t.IK1Qvs, { name: eR }))),
                (0, O.ZDy)(async () => {
                    let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            el(
                                {
                                    header: l,
                                    body: i,
                                    onSubmit: eW,
                                },
                                t,
                            ),
                        );
                });
        },
        eX = (0, r.jsx)(_.Z, {
            userName: eR,
            displayNameStyles: null == p ? void 0 : p.displayNameStyles,
            effectDisplayType: ee || o || eO ? D.F.ANIMATED : D.F.PLAIN,
            loop: ee,
            boldFontOpacity: 0.9,
        }),
        e$ = eI
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      eX,
                      (0, r.jsx)(G.ZP, {
                          primaryGuild: null == p ? void 0 : p.primaryGuild,
                          userId: null == p ? void 0 : p.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: a()(er.clanTag, { [er.clanTagMuted]: e_ }),
                      }),
                  ],
              })
            : eX,
        e0 = l.useRef(null),
        e1 = (0, M.Y)({ location: "PrivateChannel" }) && (null == p ? void 0 : p.displayNameStyles) != null,
        e8 = (0, f.Z)();
    return (0, r.jsx)(d.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                l = ea(e, ["role"]);
            return (0, r.jsxs)(Z.Z, {
                className: a()(er.channel, er.dm),
                role: n,
                focusProps: ei(el({}, es), {
                    focusTarget: ev,
                    ringTarget: eh,
                }),
                ref: eh,
                onMouseEnter: eB,
                onMouseLeave: ez,
                onMouseDown: eK,
                onFocus: eH,
                onBlur: eY,
                onContextMenu: eq,
                "aria-setsize": $,
                "aria-posinset": X,
                children: [
                    ek ? (0, r.jsx)("div", { className: a()(er.unreadPill, { [er.muted]: e_ }) }) : null,
                    (0, r.jsxs)(O.vjx, {
                        className: a()(er.interactive, {
                            [er.interactiveSystemDM]: eP && eE,
                            [er.interactiveSelected]: o || eO,
                        }),
                        as: "div",
                        onClick: eV,
                        muted: e_,
                        selected: o,
                        children: [
                            (0, r.jsx)(z.Z, {
                                nameplate: eF ? K : void 0,
                                selected: o,
                                hovered: ee,
                                content: e0,
                                placement: B.i.CHANNEL,
                            }),
                            (0, r.jsx)(
                                c.rU,
                                ei(
                                    el(
                                        {
                                            innerRef: ev,
                                            to: et.Z5c.CHANNEL(et.ME, t.id),
                                            className: er.link,
                                            "aria-label": (0, C.ZP)({
                                                channel: t,
                                                unread: ek,
                                            }),
                                        },
                                        l,
                                    ),
                                    {
                                        children: (0, r.jsx)(E.Z, {
                                            ref: e0,
                                            avatar: (() => {
                                                let e = O.EFr.SIZE_32;
                                                if (t.isMultiUserDM())
                                                    if (t.recipients.length >= 2 && i && null == t.icon)
                                                        return (0, r.jsx)(A.Z, {
                                                            "aria-hidden": !0,
                                                            recipients: t.recipients,
                                                            size: e,
                                                            isTyping: U,
                                                            status: F,
                                                        });
                                                    else
                                                        return (0, r.jsx)(
                                                            eo,
                                                            ei(el({}, ex), {
                                                                src: (0, I.x)(t),
                                                                "aria-hidden": !0,
                                                                size: e,
                                                                status: U ? et.Skl.ONLINE : F,
                                                                isTyping: U,
                                                            }),
                                                        );
                                                s()(
                                                    null != p,
                                                    "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                                                );
                                                let n = null;
                                                return (
                                                    p.isSystemUser() || (n = (0, g.Z)(h) ? et.Skl.STREAMING : F),
                                                    (0, r.jsx)(
                                                        eo,
                                                        ei(el({}, ex), {
                                                            size: O.EFr.SIZE_32,
                                                            src: ej,
                                                            avatarDecoration: eN,
                                                            status: n,
                                                            isMobile: W,
                                                            isTyping: U,
                                                            "aria-label": p.username,
                                                            statusTooltip: !0,
                                                        }),
                                                    )
                                                );
                                            })(),
                                            highlighted: ek && !e_,
                                            muted: e_,
                                            subText: t.isSystemDM()
                                                ? (0, r.jsx)("div", {
                                                      className: er.subtext,
                                                      children: (0, P.Z)(t.id)
                                                          ? en.intl.string(en.t.FL5T01)
                                                          : en.intl.string(en.t.NnY5lc),
                                                  })
                                                : t.isMultiUserDM()
                                                  ? (0, r.jsx)("div", {
                                                        className: er.subtext,
                                                        children: en.intl.format(en.t.CxSA5N, {
                                                            members: t.recipients.length + 1,
                                                        }),
                                                    })
                                                  : (0, j.Z)({
                                                          activities: h,
                                                          status: F,
                                                          applicationStream: N,
                                                          voiceChannel: R,
                                                      })
                                                    ? (0, r.jsx)(x.Z, {
                                                          location: "PrivateChannel",
                                                          user: p,
                                                          activities: h,
                                                          voiceChannel: R,
                                                          applicationStream: N,
                                                          animateEmoji: ee || em || eO,
                                                          textClassName: er.activityStatusText,
                                                          iconClassName: e_ ? er.mutedIcon : void 0,
                                                      })
                                                    : null,
                                            name: (0, r.jsx)(w.Z, {
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
                                className: a()(er.iconsContainer, { [er.nameplated]: eF }),
                                children: [
                                    eL && !eO ? (0, r.jsx)(eu, {}) : null,
                                    eM ? (0, r.jsx)(ed, {}) : null,
                                    eD ? (0, r.jsx)(ep, {}) : null,
                                    eA && !e8
                                        ? (0, r.jsx)(b.u, {
                                              asContainer: !0,
                                              text: en.intl.string(eS ? en.t.Et8qwj : en.t["d+e27s"]),
                                              delay: 500,
                                              targetElementRef: eU,
                                              children: (0, r.jsx)(ec, {
                                                  icon: O.xhG,
                                                  "aria-label": en.intl.string(en.t.PdRCRg),
                                                  onClick: (e) => {
                                                      eq(e);
                                                  },
                                                  onMouseDown: eQ,
                                                  nameplate: K,
                                                  forceShow: eO,
                                                  visibleElementRef: eU,
                                              }),
                                          })
                                        : (0, r.jsx)(ec, {
                                              icon: O.Dio,
                                              "aria-label": eS
                                                  ? en.intl.string(en.t["26C4oi"])
                                                  : en.intl.string(en.t.jsvgc3),
                                              onClick: eS ? eJ : eW,
                                              onMouseDown: eQ,
                                              nameplate: K,
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
                  l = ea(e, ["channel", "selected"]);
              let i = (0, m.e7)([X.default], () => X.default.getUser(t.getRecipientId())),
                  {
                      isStatusIndicatorEnabled: a,
                      isTypingIndicatorEnabled: o,
                      isFacepileEnabled: s,
                  } = R.Z.useExperiment({ location: "private_channel" }, { autoTrackExposure: !0 }),
                  c = null == i ? void 0 : i.id,
                  u = (0, m.cj)([K.Z, W.Z], () => {
                      let e;
                      if (t.isMultiUserDM()) {
                          if (a) {
                              let n = K.Z.getState().statuses;
                              t.recipients.some((e) => n[e] === et.Skl.ONLINE) && (e = et.Skl.ONLINE);
                          }
                      } else null != c && (e = K.Z.getStatus(c));
                      return {
                          status: e,
                          activities: null != c ? K.Z.getActivities(c) : null,
                          applicationStream: null != c ? W.Z.getAnyStreamForUser(c) : null,
                          isMobile: null != c && K.Z.isMobileOnline(c),
                      };
                  }, [t, c, a]),
                  { voiceActivityStatusEnabled: d } = (0, h.U)({ location: "PrivateChannel" }),
                  { voiceChannel: p } = (0, N.Z)({ userId: c }),
                  f = (0, U.K)({ user: i }),
                  b = (0, m.e7)([X.default, q.Z], () => {
                      if (t.isMultiUserDM())
                          if (o)
                              return $.default.keys(q.Z.getTypingUsers(t.id)).some((e) => {
                                  var t;
                                  return e !== (null == (t = X.default.getCurrentUser()) ? void 0 : t.id);
                              });
                          else return !1;
                      return null != i && q.Z.isTyping(t.id, t.getRecipientId());
                  }, [t, i, o]);
              return t.isMultiUserDM()
                  ? (0, r.jsx)(
                        em,
                        el(
                            {
                                channel: t,
                                selected: n,
                                isTyping: b,
                                status: u.status === et.Skl.ONLINE ? et.Skl.ONLINE : void 0,
                                isGDMFacepileEnabled: s,
                            },
                            l,
                        ),
                    )
                  : (0, r.jsx)(
                        em,
                        el(
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

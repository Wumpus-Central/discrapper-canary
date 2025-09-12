n.d(t, {
    Qj: () => em,
    RS: () => eg,
    ZP: () => eE,
    bU: () => ef,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(799899),
    u = n(990547),
    d = n(91192),
    f = n(873546),
    _ = n(893999),
    p = n(442837),
    h = n(481060),
    m = n(493683),
    g = n(239091),
    E = n(420660),
    b = n(468363),
    y = n(326255),
    O = n(956221),
    v = n(771173),
    I = n(385499),
    T = n(570908),
    S = n(702321),
    A = n(201895),
    C = n(43267),
    N = n(933557),
    R = n(163889),
    P = n(111028),
    w = n(181430),
    D = n(821795),
    x = n(892567),
    L = n(853856),
    j = n(93687),
    M = n(489618),
    k = n(785232),
    U = n(172751),
    G = n(850020),
    B = n(379839),
    Z = n(359135),
    F = n(516817),
    V = n(878857),
    H = n(518950),
    Y = n(199902),
    W = n(158776),
    K = n(306680),
    z = n(699516),
    q = n(111583),
    X = n(9156),
    Q = n(594174),
    J = n(709054),
    $ = n(998502),
    ee = n(981631),
    et = n(388032),
    en = n(800525);
function er(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
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
                er(e, t, n[t]);
            });
    }
    return e;
}
function ea(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eo(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ea(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function es(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = el(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function el(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let ec = $.ZP.getEnableHardwareAcceleration() ? h.Xo$ : h.qEK,
    eu = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4,
        },
    },
    ed = 500,
    ef = (e) => {
        var { nameplate: t, icon: n, forceShow: i = !1, reducedClickTarget: a = !1, visibleElementRef: s } = e,
            l = es(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]);
        let c = (0, B.A)(t);
        return (0, r.jsx)(
            h.P3F,
            eo(
                ei(
                    {
                        className: o()(en.closeButton, {
                            [en.closeButtonPlated]: null != t,
                            [en.closeButtonForceShow]: i,
                            [en.reducedClickTarget]: a,
                        }),
                        style: c,
                    },
                    l,
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
                        className: o()({ [en.innerCloseButtonPlated]: null != t }),
                        children: (0, r.jsx)(n, {
                            size: "sm",
                            color: "currentColor",
                            className: o()(en.closeIcon, { [en.closeIconPlated]: null != t }),
                        }),
                    }),
                },
            ),
        );
    },
    e_ = () =>
        (0, r.jsx)(h.r7p, {
            size: "xs",
            color: "currentColor",
            className: en.favoriteIcon,
        }),
    ep = () =>
        (0, r.jsx)(h.kZF, {
            size: "xs",
            color: "currentColor",
            className: en.favoriteIcon,
        }),
    eh = () =>
        (0, r.jsx)(h.t6m, {
            size: "xs",
            color: "currentColor",
            className: en.favoriteIcon,
        }),
    em = (e) => {
        var {
                route: t,
                selected: n,
                icon: i,
                iconClassName: a,
                interactiveClassName: s,
                text: l,
                children: u,
                locationState: d,
                onClick: _,
                className: p,
                role: m,
                "aria-posinset": g,
                "aria-setsize": E,
                listItemRef: b,
            } = e,
            y = es(e, [
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
        return (0, r.jsx)(R.Z, {
            className: o()(en.channel, { [en.fullWidth]: f.tq }, p),
            onClick: _,
            role: m,
            focusProps: ei({ within: !0 }, eu),
            "aria-posinset": g,
            "aria-setsize": E,
            ref: b,
            children: (0, r.jsx)(h.vjx, {
                as: "div",
                selected: n,
                className: o()(s, en.interactive, en.linkButton, { [en.interactiveSelected]: n }),
                children: (0, r.jsxs)(
                    c.rU,
                    eo(
                        ei(
                            {
                                to: {
                                    pathname: t,
                                    state: d,
                                },
                                className: en.link,
                            },
                            y,
                        ),
                        {
                            children: [
                                (0, r.jsx)(T.Z, {
                                    muted: !1,
                                    avatar: (0, r.jsx)(i, {
                                        size: "refresh_sm",
                                        className: o()(en.linkButtonIcon, a),
                                        color: "currentColor",
                                    }),
                                    name: l,
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
function eg(e) {
    let {
            channel: t,
            isGDMFacepileEnabled: a,
            selected: s = !1,
            user: f,
            activities: b,
            applicationStream: O,
            voiceChannel: j,
            isTyping: G,
            status: B,
            isMobile: Y,
            nameplate: W,
            ref: q,
            "aria-posinset": Q,
            "aria-setsize": J,
        } = e,
        [$, er] = i.useState(!1),
        [ea, el] = i.useState(!1),
        [em, eg] = i.useState(!1),
        eE = i.useRef(null),
        eb = i.useRef(null),
        ey = null != q ? q : eb,
        {
            avatarSrc: eO,
            avatarDecorationSrc: ev,
            eventHandlers: eI,
        } = (0, H.Z)({
            userId: null == f ? void 0 : f.id,
            size: h.EFr.SIZE_32,
            animateOnHover: !(s || $ || ea || em),
        }),
        eT = t.isMultiUserDM(),
        eS = t.isSystemDM(),
        eA = (0, V.Q)(),
        eC = !eT && !eS && t.type === ee.d4z.DM,
        eN = eC && (null == f ? void 0 : f.primaryGuild) != null,
        eR = (0, p.e7)([X.ZP], () => X.ZP.isChannelMuted(t.getGuildId(), t.id)),
        { ignored: eP, blocked: ew } = (0, p.cj)([z.Z], () => ({
            ignored: z.Z.isIgnored(t.getRecipientId()),
            blocked: z.Z.isBlocked(t.getRecipientId()),
        })),
        eD = eC && eP,
        ex = eC && ew,
        eL = (eR || eD || ex) && !(s || $),
        ej = (0, p.e7)([K.ZP], () => K.ZP.getMentionCount(t.id) > 0),
        eM = (0, N.ZP)(t),
        ek = (0, p.e7)([L.Z], () => L.Z.isFavorite(t.id)),
        { dotsInsteadOfCloseButton: eU, rearrangeContextMenu: eG } = M.Z.useExperiment(
            { location: "private_channel" },
            { autoTrackExposure: !0 },
        ),
        eB = i.useRef(null),
        eZ = null != W && (s || $ || em),
        eF = () => {
            er(!0);
        },
        eV = () => {
            er(!1);
        },
        eH = () => {
            el(!0);
        },
        eY = () => {
            el(!1);
        },
        eW = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), m.Z.closePrivateChannel(t.id, s, n);
        },
        eK = () => {
            m.Z.preload(ee.ME, t.id);
        },
        ez = (e) => {
            e.stopPropagation();
        },
        eq = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null == (t = eE.current) || t.click();
            }
        },
        eX = (e) => {
            let i = "contextmenu" === e.type,
                a = eG && !i,
                o = i ? u.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : u.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            eg(!0),
                t.isMultiUserDM()
                    ? (0, g.jW)(
                          e,
                          async () => {
                              let { default: e } = await Promise.all([n.e("79695"), n.e("90508"), n.e("25421")]).then(
                                  n.bind(n, 354741),
                              );
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      eo(ei({}, n), {
                                          channel: t,
                                          selected: s,
                                      }),
                                  );
                          },
                          {
                              impressionName: o,
                              noBlurEvent: !0,
                              onClose: () => eg(!1),
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
                                        n.e("98783"),
                                        n.e("56826"),
                                        n.e("8074"),
                                    ]).then(n.bind(n, 131404));
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      eo(ei({}, n), {
                                          user: f,
                                          channel: t,
                                          channelSelected: s,
                                      }),
                                  );
                          },
                          {
                              impressionName: o,
                              onClose: () => eg(!1),
                          },
                      );
        },
        eQ = (e) => {
            e.preventDefault(), e.stopPropagation();
            let i = et.intl.formatToPlainString(et.t.hJ5Ap6, { name: eM }),
                a = et.intl.format(et.t.SSIVOj, { name: eM });
            t.isManaged() &&
                ((i = et.intl.formatToPlainString(et.t.hVGjER, { name: eM })),
                (a = et.intl.format(et.t.IK1Qvr, { name: eM }))),
                (0, h.ZDy)(async () => {
                    let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            ei(
                                {
                                    header: i,
                                    body: a,
                                    onSubmit: eW,
                                },
                                t,
                            ),
                        );
                });
        },
        eJ = () =>
            t.isSystemDM()
                ? (0, r.jsx)("div", {
                      className: en.subtext,
                      children: (0, S.Z)(t.id) ? et.intl.string(et.t.FL5T09) : et.intl.string(et.t.NnY5lZ),
                  })
                : t.isMultiUserDM()
                  ? (0, r.jsx)("div", {
                        className: en.subtext,
                        children: et.intl.format(et.t.CxSA5O, { members: t.recipients.length + 1 }),
                    })
                  : (0, y.Z)({
                          activities: b,
                          status: B,
                          applicationStream: O,
                          voiceChannel: j,
                      })
                    ? (0, r.jsx)(v.Z, {
                          location: "PrivateChannel",
                          user: f,
                          activities: b,
                          voiceChannel: j,
                          applicationStream: O,
                          animateEmoji: $ || ea || em,
                          textClassName: en.activityStatusText,
                          iconClassName: eL ? en.mutedIcon : void 0,
                      })
                    : null,
        e$ = () => {
            let e = h.EFr.SIZE_32;
            if (t.isMultiUserDM())
                if (t.recipients.length >= 2 && a && null == t.icon)
                    return (0, r.jsx)(k.Z, {
                        "aria-hidden": !0,
                        recipients: t.recipients,
                        size: e,
                        isTyping: G,
                        status: B,
                    });
                else
                    return (0, r.jsx)(
                        ec,
                        eo(ei({}, eI), {
                            src: (0, C.x)(t),
                            "aria-hidden": !0,
                            size: e,
                            status: G ? ee.Skl.ONLINE : B,
                            isTyping: G,
                        }),
                    );
            l()(null != f, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
            let n = null;
            return (
                f.isSystemUser() || (n = (0, E.Z)(b) ? ee.Skl.STREAMING : B),
                (0, r.jsx)(
                    ec,
                    eo(ei({}, eI), {
                        size: h.EFr.SIZE_32,
                        src: eO,
                        avatarDecoration: ev,
                        status: n,
                        isMobile: Y,
                        isTyping: G,
                        "aria-label": f.username,
                        statusTooltip: !0,
                    }),
                )
            );
        },
        e0 = (0, r.jsx)(x.Z, {
            userName: eM,
            displayNameStyles: null == f ? void 0 : f.displayNameStyles,
            effectDisplayType: $ || s || em ? D.F.ANIMATED : D.F.PLAIN,
            loop: $,
            boldFontOpacity: 0.9,
        }),
        e1 = eN
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      e0,
                      (0, r.jsx)(U.ZP, {
                          primaryGuild: null == f ? void 0 : f.primaryGuild,
                          userId: null == f ? void 0 : f.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: o()(en.clanTag, { [en.clanTagMuted]: eL }),
                      }),
                  ],
              })
            : e0,
        e2 = i.useRef(null),
        e3 = (0, w.Y)({ location: "PrivateChannel" }) && (null == f ? void 0 : f.displayNameStyles) != null,
        e4 = (0, _.Z)();
    return (0, r.jsx)(d.mh, {
        id: t.id,
        children: (e) => {
            var { role: n } = e,
                i = es(e, ["role"]);
            return (0, r.jsxs)(R.Z, {
                className: o()(en.channel, en.dm),
                role: n,
                focusProps: eo(ei({}, eu), {
                    focusTarget: eE,
                    ringTarget: ey,
                }),
                ref: ey,
                onMouseEnter: eF,
                onMouseLeave: eV,
                onMouseDown: eK,
                onFocus: eH,
                onBlur: eY,
                onContextMenu: eX,
                "aria-setsize": J,
                "aria-posinset": Q,
                children: [
                    ej ? (0, r.jsx)("div", { className: o()(en.unreadPill, { [en.muted]: eL }) }) : null,
                    (0, r.jsxs)(h.vjx, {
                        className: o()(en.interactive, {
                            [en.interactiveSystemDM]: eA && eS,
                            [en.interactiveSelected]: s || em,
                        }),
                        as: "div",
                        onClick: eq,
                        muted: eL,
                        selected: s,
                        children: [
                            (0, r.jsx)(F.Z, {
                                nameplate: eZ ? W : void 0,
                                selected: s,
                                hovered: $,
                                content: e2,
                                placement: Z.i.CHANNEL,
                            }),
                            (0, r.jsx)(
                                c.rU,
                                eo(
                                    ei(
                                        {
                                            innerRef: eE,
                                            to: ee.Z5c.CHANNEL(ee.ME, t.id),
                                            className: en.link,
                                            "aria-label": (0, A.ZP)({
                                                channel: t,
                                                unread: ej,
                                            }),
                                        },
                                        i,
                                    ),
                                    {
                                        children: (0, r.jsx)(T.Z, {
                                            ref: e2,
                                            avatar: e$(),
                                            highlighted: ej && !eL,
                                            muted: eL,
                                            subText: eJ(),
                                            name: (0, r.jsx)(P.Z, {
                                                className: o()(en.overflowTooltip, { [en.withDisplayNameStyles]: e3 }),
                                                children: e1,
                                            }),
                                            decorators: t.isSystemDM()
                                                ? (0, r.jsx)(I.Z, {
                                                      className: en.decorator,
                                                      type: I.Z.Types.SYSTEM_DM,
                                                      verified: !0,
                                                  })
                                                : null,
                                            withDisplayNameStyles: e3,
                                        }),
                                    },
                                ),
                            ),
                            (0, r.jsxs)("div", {
                                className: o()(en.iconsContainer, { [en.nameplated]: eZ }),
                                children: [
                                    ek && !em ? (0, r.jsx)(e_, {}) : null,
                                    eD ? (0, r.jsx)(ep, {}) : null,
                                    ex ? (0, r.jsx)(eh, {}) : null,
                                    eU && !e4
                                        ? (0, r.jsx)(h.ua7, {
                                              text: et.intl.string(eT ? et.t.Et8qws : et.t["d+e27u"]),
                                              delay: ed,
                                              targetElementRef: eB,
                                              children: (e) => {
                                                  var { onClick: t } = e,
                                                      n = es(e, ["onClick"]);
                                                  return (0, r.jsx)(
                                                      ef,
                                                      eo(ei({}, n), {
                                                          icon: h.xhG,
                                                          "aria-label": et.intl.string(et.t.PdRCRk),
                                                          onClick: (e) => {
                                                              null == t || t(), eX(e);
                                                          },
                                                          onMouseDown: ez,
                                                          nameplate: W,
                                                          forceShow: em,
                                                          visibleElementRef: eB,
                                                      }),
                                                  );
                                              },
                                          })
                                        : (0, r.jsx)(ef, {
                                              icon: h.Dio,
                                              "aria-label": eT
                                                  ? et.intl.string(et.t["26C4oq"])
                                                  : et.intl.string(et.t.jsvgc3),
                                              onClick: eT ? eQ : eW,
                                              onMouseDown: ez,
                                              nameplate: W,
                                              reducedClickTarget: !0,
                                              visibleElementRef: eB,
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
let eE = (e) => {
    var { channel: t, selected: n } = e,
        i = es(e, ["channel", "selected"]);
    let a = (0, p.e7)([Q.default], () => Q.default.getUser(t.getRecipientId())),
        {
            isStatusIndicatorEnabled: o,
            isTypingIndicatorEnabled: s,
            isFacepileEnabled: l,
        } = j.Z.useExperiment({ location: "private_channel" }, { autoTrackExposure: !0 }),
        c = null == a ? void 0 : a.id,
        u = (0, p.cj)([W.Z, Y.Z], () => {
            let e;
            if (t.isMultiUserDM()) {
                if (o) {
                    let n = W.Z.getState().statuses;
                    t.recipients.some((e) => n[e] === ee.Skl.ONLINE) && (e = ee.Skl.ONLINE);
                }
            } else null != c && (e = W.Z.getStatus(c));
            return {
                status: e,
                activities: null != c ? W.Z.getActivities(c) : null,
                applicationStream: null != c ? Y.Z.getAnyStreamForUser(c) : null,
                isMobile: null != c && W.Z.isMobileOnline(c),
            };
        }, [t, c, o]),
        { voiceActivityStatusEnabled: d } = (0, b.U)({ location: "PrivateChannel" }),
        { voiceChannel: f } = (0, O.Z)({ userId: c }),
        _ = (0, G.K)({ user: a }),
        h = (0, p.e7)([Q.default, q.Z], () => {
            if (t.isMultiUserDM())
                if (s)
                    return J.default.keys(q.Z.getTypingUsers(t.id)).some((e) => {
                        var t;
                        return e !== (null == (t = Q.default.getCurrentUser()) ? void 0 : t.id);
                    });
                else return !1;
            return null != a && q.Z.isTyping(t.id, t.getRecipientId());
        }, [t, a, s]);
    return t.isMultiUserDM()
        ? (0, r.jsx)(
              eg,
              ei(
                  {
                      channel: t,
                      selected: n,
                      isTyping: h,
                      status: u.status === ee.Skl.ONLINE ? ee.Skl.ONLINE : void 0,
                      isGDMFacepileEnabled: l,
                  },
                  i,
              ),
          )
        : (0, r.jsx)(
              eg,
              ei(
                  {
                      channel: t,
                      selected: n,
                      user: a,
                      voiceChannel: d ? f : void 0,
                      isTyping: h,
                      nameplate: _,
                  },
                  i,
                  u,
              ),
          );
};

n.d(t, {
    Z: () => X,
    x: () => Z,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(477690),
    c = n(481060),
    u = n(420660),
    d = n(468363),
    f = n(326255),
    _ = n(956221),
    p = n(771173),
    h = n(385499),
    m = n(693728),
    g = n(554300),
    E = n(558602),
    b = n(821795),
    y = n(892567),
    O = n(7284),
    v = n(172751),
    I = n(736144),
    T = n(884902),
    S = n(113434),
    A = n(553393),
    C = n(518950),
    N = n(624138),
    R = n(51144),
    P = n(981631),
    w = n(674563),
    D = n(524484),
    L = n(388032),
    x = n(894723);
function M(e, t, n) {
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
function j(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = B(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let Z = (0, N.Mg)(l.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    F = 3,
    V = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(s.u, {
                  __unsupportedReactNodeAsText: null != i ? i : L.intl.string(L.t.pclUFB),
                  children: (0, r.jsx)(c.CEn, {
                      size: "md",
                      color: "currentColor",
                      className: x.ownerIcon,
                  }),
              })
            : null;
    }),
    H = i.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, r.jsx)(s.u, {
                  text: L.intl.formatToPlainString(L.t.IWkAq6, { date: t }),
                  asContainer: !0,
                  children: (0, r.jsx)(c.P3F, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, r.jsx)(c.$Eu, {
                          color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                          className: x.premiumIcon,
                      }),
                  }),
              });
    }),
    Y = i.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = w.Hb.BOT;
        return (0, r.jsx)(h.Z, {
            className: x.botTag,
            type: n,
            verified: t.isVerifiedBot(),
        });
    }),
    W = i.memo(function (e) {
        let {
            user: t,
            isOwner: n,
            lostPermissionTooltipText: i,
            ownerTooltipText: a,
            premiumSince: o,
            onClickPremiumGuildIcon: s,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(Y, { user: t }),
                (0, r.jsx)(V, {
                    isOwner: n,
                    lostPermissionTooltipText: i,
                    ownerTooltipText: a,
                }),
                (0, r.jsx)(H, {
                    premiumSince: o,
                    onClickPremiumGuildIcon: s,
                }),
            ],
        });
    }),
    K = i.memo(function (e) {
        let {
                colorRoleName: t,
                colorString: n,
                colorStrings: i,
                name: a,
                hideClanTag: o,
                user: s,
                guildId: l,
                isHovering: u,
            } = e,
            d = (0, O.j)({ displayNameStyles: null == s ? void 0 : s.displayNameStyles }),
            f = null == l && (null == s ? void 0 : s.displayNameStyles) != null;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                f
                    ? (0, r.jsx)(y.Z, {
                          userName: null != a ? a : "",
                          displayNameStyles: s.displayNameStyles,
                          effectDisplayType: u ? b.F.ANIMATED : b.F.STATIC,
                          loop: !0,
                      })
                    : (0, r.jsx)(c.PUh, {
                          roleName: t,
                          colorString: n,
                          colorStrings: i,
                          name: a,
                          className: x.name,
                          displayNameStylesFont: d,
                          animateRoleGradient: u,
                      }),
                !o &&
                    (0, r.jsx)(v.ZP, {
                        primaryGuild: null == s ? void 0 : s.primaryGuild,
                        userId: null == s ? void 0 : s.id,
                        contextGuildId: l,
                        disableGuildProfile: !0,
                        className: x.clanTag,
                    }),
            ],
        });
    }),
    z = i.memo(function (e) {
        let {
                user: t,
                shouldAnimateStatus: n,
                activities: i,
                status: a,
                eventHandlers: o,
                avatarSrc: s,
                isMobile: l,
                isTyping: d,
                avatarDecorationSrc: f,
                handleSetTypingRef: _,
                typingRef: p,
                currentUser: h,
            } = e,
            m = a === P.Skl.OFFLINE,
            g = n ? c.Xo$ : c.qEK,
            E = (0, u.Z)(i) ? P.Skl.STREAMING : a;
        return (
            (E = m ? void 0 : E),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(
                        g,
                        U(j({}, o), {
                            size: c.EFr.SIZE_32,
                            src: s,
                            isMobile: l,
                            isTyping: d,
                            status: E,
                            "aria-label": t.username,
                            statusTooltip: !0,
                            avatarDecoration: f,
                            typingIndicatorRef: _,
                        }),
                    ),
                    (0, r.jsx)(I.Z, {
                        confettiSpawnRef: p,
                        shouldFire: d && null != h && t.id !== h.id,
                        confettiLocation: D.Hn.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    q = i.memo(function (e) {
        let {
                hideSubtext: t,
                hideTooltip: n = !1,
                activities: a,
                status: o,
                applicationStream: s,
                voiceStatusChannel: l,
                user: c,
                channel: u,
                isHoveringOrFocusing: d,
                quest: _,
            } = e,
            h = i.useMemo(
                () =>
                    (0, f.Z)({
                        activities: a,
                        status: o,
                        applicationStream: s,
                        voiceChannel: l,
                    }),
                [a, o, s, l],
            ),
            m = i.useMemo(
                () =>
                    !(0, E.Z)({
                        activity:
                            null == a
                                ? void 0
                                : a.find((e) => {
                                      let { type: t } = e;
                                      return t === P.IIU.CUSTOM_STATUS;
                                  }),
                        user: c,
                        channel: u,
                    }),
                [a, c, u],
            );
        return t || !h
            ? null
            : (0, r.jsx)(p.Z, {
                  location: "MemberListSubtext",
                  user: c,
                  activities: a,
                  applicationStream: s,
                  voiceChannel: l,
                  animateEmoji: d,
                  hideEmoji: m,
                  hasQuest: null != _,
                  hideTooltip: n,
              });
    }),
    X = i.memo(function (e) {
        let {
                selected: t = !1,
                colorString: n,
                colorStrings: a,
                colorRoleName: l,
                isOwner: u,
                ownerTooltipText: f,
                lostPermissionTooltipText: p,
                isTyping: h = !1,
                nick: E,
                user: b,
                currentUser: y,
                activities: O,
                applicationStream: v,
                status: I,
                shouldAnimateStatus: N = !1,
                isMobile: w,
                premiumSince: D,
                channel: L,
                guildId: M,
                className: k,
                nameplate: B,
                hideClanTag: Z = !1,
                hideSubtext: V = !1,
                hideTooltip: H = !1,
                onMouseDown: Y,
                onKeyDown: X,
                onClick: Q,
                onContextMenu: J,
                onClickPremiumGuildIcon: $,
                "aria-controls": ee,
                "aria-expanded": et,
                "aria-posinset": en,
                "aria-setsize": er,
                id: ei,
                tabIndex: ea,
                itemProps: eo,
                ref: es,
            } = e,
            el = null == b ? void 0 : b.id,
            ec = R.ZP.useName(b),
            eu = i.useRef(null),
            ed = null != es ? es : eu,
            [ef, e_] = i.useState(!1),
            [ep, eh] = i.useState(!1),
            [em, eg] = i.useState(null),
            { voiceChannel: eE } = (0, _.Z)({
                userId: el,
                guildId: M,
            }),
            { voiceActivityStatusEnabled: eb } = (0, d.U)({ location: "MemberListItem" }),
            ey = eb ? eE : void 0,
            {
                avatarDecorationSrc: eO,
                avatarSrc: ev,
                eventHandlers: eI,
            } = (0, C.Z)({
                userId: el,
                size: c.EFr.SIZE_32,
                animateOnHover: !(t || ef),
                guildId: M,
            }),
            eT = null != eo ? eo : {},
            { onFocus: eS } = eT,
            eA = G(eT, ["onFocus"]),
            eC = (0, T.X7)(M, el, null != a ? a : null),
            [eN, eR] = i.useState(!1);
        i.useEffect(() => {
            t && eR(!1);
        }, [t]);
        let eP = (0, S.fN)(O),
            ew = (0, S.Wi)(eP, v, el) && t && !eN,
            eD = i.useCallback(() => {
                e_(!0);
            }, []),
            eL = i.useCallback(() => {
                e_(!1);
            }, []),
            ex = i.useCallback(() => {
                eh(!0), null == eS || eS();
            }, [eS]),
            eM = i.useCallback(() => {
                eh(!1);
            }, []),
            ej = i.useCallback((e) => {
                eg(e);
            }, []),
            ek = i.useCallback(
                (e) =>
                    null == eP
                        ? null
                        : (0, r.jsx)(
                              A.Z,
                              U(
                                  j(
                                      {
                                          name: null != E ? E : ec,
                                          quest: eP,
                                          memberListItemRef: ed,
                                          applicationStream: v,
                                      },
                                      e,
                                  ),
                                  { closePopout: () => eR(!0) },
                              ),
                          ),
                [eP, ed, v, E, ec],
            );
        return null == b
            ? (0, r.jsx)(m.Z, {
                  avatarSize: c.EFr.SIZE_32,
                  className: x.placeholder,
              })
            : (0, r.jsx)(c.yRy, {
                  targetElementRef: ed,
                  renderPopout: ek,
                  position: "bottom",
                  shouldShow: ew,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: c.yRy.Animation.NONE,
                  spacing: -F,
                  children: () =>
                      (0, r.jsx)(
                          g.Z,
                          j(
                              {
                                  ref: ed,
                                  selected: t,
                                  className: o()(x.member, k, {
                                      [x.offline]: I === P.Skl.OFFLINE && !t,
                                      [x.flatBottom]: ew,
                                  }),
                                  innerClassName: x.memberInner,
                                  onClick: Q,
                                  onKeyDown: X,
                                  onMouseDown: Y,
                                  onContextMenu: J,
                                  onMouseEnter: eD,
                                  onMouseLeave: eL,
                                  onBlur: eM,
                                  hovered: ef,
                                  name:
                                      null == p
                                          ? (0, r.jsx)("span", {
                                                className: x.username,
                                                children: (0, r.jsx)(K, {
                                                    colorRoleName: l,
                                                    colorString: null != n ? n : null,
                                                    name: null != E ? E : ec,
                                                    colorStrings: eC,
                                                    hideClanTag: Z,
                                                    user: b,
                                                    guildId: M,
                                                    isHovering: ef,
                                                }),
                                            })
                                          : (0, r.jsx)(s.u, {
                                                text: p,
                                                children: (0, r.jsx)("span", {
                                                    className: o()(x.username, x.lostPermission),
                                                    children: (0, r.jsx)(K, {
                                                        colorRoleName: l,
                                                        colorString: null != n ? n : null,
                                                        name: null != E ? E : ec,
                                                        colorStrings: eC,
                                                        hideClanTag: Z,
                                                        user: b,
                                                        guildId: M,
                                                        isHovering: ef,
                                                    }),
                                                }),
                                            }),
                                  avatar: (0, r.jsx)(z, {
                                      user: b,
                                      shouldAnimateStatus: N,
                                      activities: O,
                                      status: I,
                                      eventHandlers: eI,
                                      avatarSrc: ev,
                                      isMobile: w,
                                      isTyping: h,
                                      avatarDecorationSrc: eO,
                                      handleSetTypingRef: ej,
                                      typingRef: em,
                                      currentUser: y,
                                  }),
                                  nameplate: B,
                                  subText: (0, r.jsx)(q, {
                                      hideSubtext: V,
                                      activities: O,
                                      status: I,
                                      applicationStream: v,
                                      voiceStatusChannel: ey,
                                      user: b,
                                      channel: L,
                                      isHoveringOrFocusing: ef || ep,
                                      quest: eP,
                                      hideTooltip: H,
                                  }),
                                  decorators: (0, r.jsx)(W, {
                                      user: b,
                                      isOwner: u,
                                      lostPermissionTooltipText: p,
                                      ownerTooltipText: f,
                                      premiumSince: D,
                                      onClickPremiumGuildIcon: $,
                                  }),
                                  "aria-controls": ee,
                                  "aria-expanded": et,
                                  "aria-setsize": er,
                                  "aria-posinset": en,
                                  id: ei,
                                  tabIndex: ea,
                                  onFocus: ex,
                                  focusProps: {
                                      offset: {
                                          top: 4,
                                          bottom: 4,
                                          left: 4,
                                          right: 4,
                                      },
                                  },
                              },
                              eA,
                          ),
                      ),
              });
    });

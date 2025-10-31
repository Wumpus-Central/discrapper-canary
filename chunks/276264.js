n.d(t, {
    Z: () => Q,
    x: () => F,
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
    b = n(386725),
    y = n(821795),
    O = n(892567),
    v = n(7284),
    I = n(172751),
    T = n(736144),
    S = n(884902),
    A = n(113434),
    C = n(553393),
    N = n(518950),
    R = n(624138),
    P = n(51144),
    w = n(981631),
    D = n(674563),
    x = n(524484),
    L = n(388032),
    M = n(894723);
function j(e, t, n) {
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
function k(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = Z(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let F = (0, R.Mg)(l.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    V = 3,
    H = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(s.u, {
                  __unsupportedReactNodeAsText: null != i ? i : L.intl.string(L.t.pclUFJ),
                  children: (0, r.jsx)(c.CEn, {
                      size: "md",
                      color: "currentColor",
                      className: M.ownerIcon,
                  }),
              })
            : null;
    }),
    Y = i.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, r.jsx)(s.u, {
                  text: L.intl.formatToPlainString(L.t.IWkAq7, { date: t }),
                  asContainer: !0,
                  children: (0, r.jsx)(c.P3F, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, r.jsx)(c.Ucv, {
                          color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                          className: M.premiumIcon,
                      }),
                  }),
              });
    }),
    W = i.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = D.Hb.BOT;
        return (0, r.jsx)(h.Z, {
            className: M.botTag,
            type: n,
            verified: t.isVerifiedBot(),
        });
    }),
    K = i.memo(function (e) {
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
                (0, r.jsx)(W, { user: t }),
                (0, r.jsx)(H, {
                    isOwner: n,
                    lostPermissionTooltipText: i,
                    ownerTooltipText: a,
                }),
                (0, r.jsx)(Y, {
                    premiumSince: o,
                    onClickPremiumGuildIcon: s,
                }),
            ],
        });
    }),
    z = i.memo(function (e) {
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
            d = (0, b.Z)({
                userId: null == s ? void 0 : s.id,
                guildId: l,
            }),
            f = (0, v.j)({ displayNameStyles: d }),
            _ = null == l && null != d;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                _
                    ? (0, r.jsx)(O.Z, {
                          userName: null != a ? a : "",
                          displayNameStyles: d,
                          effectDisplayType: u ? y.F.ANIMATED : y.F.STATIC,
                          loop: !0,
                      })
                    : (0, r.jsx)(c.PUh, {
                          roleName: t,
                          colorString: n,
                          colorStrings: i,
                          name: a,
                          className: M.name,
                          displayNameStylesFont: f,
                          animateRoleGradient: u,
                      }),
                !o &&
                    (0, r.jsx)(I.ZP, {
                        primaryGuild: null == s ? void 0 : s.primaryGuild,
                        userId: null == s ? void 0 : s.id,
                        contextGuildId: l,
                        disableGuildProfile: !0,
                        className: M.clanTag,
                    }),
            ],
        });
    }),
    q = i.memo(function (e) {
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
            m = a === w.Skl.OFFLINE,
            g = n ? c.Xo$ : c.qEK,
            E = (0, u.Z)(i) ? w.Skl.STREAMING : a;
        return (
            (E = m ? void 0 : E),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(
                        g,
                        G(k({}, o), {
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
                    (0, r.jsx)(T.Z, {
                        confettiSpawnRef: p,
                        shouldFire: d && null != h && t.id !== h.id,
                        confettiLocation: x.Hn.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    X = i.memo(function (e) {
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
                                      return t === w.IIU.CUSTOM_STATUS;
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
    Q = i.memo(function (e) {
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
                shouldAnimateStatus: T = !1,
                isMobile: R,
                premiumSince: D,
                channel: x,
                guildId: L,
                className: j,
                nameplate: U,
                hideClanTag: Z = !1,
                hideSubtext: F = !1,
                hideTooltip: H = !1,
                onMouseDown: Y,
                onKeyDown: W,
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
            ec = P.ZP.useName(b),
            eu = i.useRef(null),
            ed = null != es ? es : eu,
            [ef, e_] = i.useState(!1),
            [ep, eh] = i.useState(!1),
            [em, eg] = i.useState(null),
            { voiceChannel: eE } = (0, _.Z)({
                userId: el,
                guildId: L,
            }),
            { voiceActivityStatusEnabled: eb } = (0, d.U)({ location: "MemberListItem" }),
            ey = eb ? eE : void 0,
            {
                avatarDecorationSrc: eO,
                avatarSrc: ev,
                eventHandlers: eI,
            } = (0, N.Z)({
                userId: el,
                size: c.EFr.SIZE_32,
                animateOnHover: !(t || ef),
                guildId: L,
            }),
            eT = null != eo ? eo : {},
            { onFocus: eS } = eT,
            eA = B(eT, ["onFocus"]),
            eC = (0, S.X7)(L, el, null != a ? a : null),
            [eN, eR] = i.useState(!1);
        i.useEffect(() => {
            t && eR(!1);
        }, [t]);
        let eP = (0, A.fN)(O),
            ew = (0, A.Wi)(eP, v, el) && t && !eN,
            eD = i.useCallback(() => {
                e_(!0);
            }, []),
            ex = i.useCallback(() => {
                e_(!1);
            }, []),
            eL = i.useCallback(() => {
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
                              C.Z,
                              G(
                                  k(
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
                  className: M.placeholder,
              })
            : (0, r.jsx)(c.yRy, {
                  targetElementRef: ed,
                  renderPopout: ek,
                  position: "bottom",
                  shouldShow: ew,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: c.yRy.Animation.NONE,
                  spacing: -V,
                  children: () =>
                      (0, r.jsx)(
                          g.Z,
                          k(
                              {
                                  ref: ed,
                                  selected: t,
                                  className: o()(M.member, j, {
                                      [M.offline]: I === w.Skl.OFFLINE && !t,
                                      [M.flatBottom]: ew,
                                  }),
                                  innerClassName: M.memberInner,
                                  onClick: Q,
                                  onKeyDown: W,
                                  onMouseDown: Y,
                                  onContextMenu: J,
                                  onMouseEnter: eD,
                                  onMouseLeave: ex,
                                  onBlur: eM,
                                  hovered: ef,
                                  name:
                                      null == p
                                          ? (0, r.jsx)("span", {
                                                className: M.username,
                                                children: (0, r.jsx)(z, {
                                                    colorRoleName: l,
                                                    colorString: null != n ? n : null,
                                                    name: null != E ? E : ec,
                                                    colorStrings: eC,
                                                    hideClanTag: Z,
                                                    user: b,
                                                    guildId: L,
                                                    isHovering: ef,
                                                }),
                                            })
                                          : (0, r.jsx)(s.u, {
                                                text: p,
                                                children: (0, r.jsx)("span", {
                                                    className: o()(M.username, M.lostPermission),
                                                    children: (0, r.jsx)(z, {
                                                        colorRoleName: l,
                                                        colorString: null != n ? n : null,
                                                        name: null != E ? E : ec,
                                                        colorStrings: eC,
                                                        hideClanTag: Z,
                                                        user: b,
                                                        guildId: L,
                                                        isHovering: ef,
                                                    }),
                                                }),
                                            }),
                                  avatar: (0, r.jsx)(q, {
                                      user: b,
                                      shouldAnimateStatus: T,
                                      activities: O,
                                      status: I,
                                      eventHandlers: eI,
                                      avatarSrc: ev,
                                      isMobile: R,
                                      isTyping: h,
                                      avatarDecorationSrc: eO,
                                      handleSetTypingRef: ej,
                                      typingRef: em,
                                      currentUser: y,
                                  }),
                                  nameplate: U,
                                  subText: (0, r.jsx)(X, {
                                      hideSubtext: F,
                                      activities: O,
                                      status: I,
                                      applicationStream: v,
                                      voiceStatusChannel: ey,
                                      user: b,
                                      channel: x,
                                      isHoveringOrFocusing: ef || ep,
                                      quest: eP,
                                      hideTooltip: H,
                                  }),
                                  decorators: (0, r.jsx)(K, {
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
                                  onFocus: eL,
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

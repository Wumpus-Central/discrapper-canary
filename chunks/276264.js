n.d(t, {
    Z: () => q,
    x: () => B,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(477690),
    l = n(481060),
    c = n(420660),
    u = n(468363),
    d = n(326255),
    f = n(956221),
    _ = n(771173),
    p = n(385499),
    h = n(693728),
    m = n(554300),
    g = n(558602),
    E = n(821795),
    b = n(892567),
    y = n(7284),
    O = n(172751),
    v = n(736144),
    I = n(884902),
    T = n(113434),
    S = n(553393),
    A = n(518950),
    C = n(624138),
    N = n(51144),
    R = n(981631),
    P = n(674563),
    w = n(524484),
    D = n(388032),
    x = n(894723);
function L(e, t, n) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = G(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let B = (0, C.Mg)(s.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    Z = 3,
    F = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(l.ua7, {
                  text: null != i ? i : D.intl.string(D.t.pclUFB),
                  children: (e) =>
                      (0, r.jsx)(
                          l.CEn,
                          k(
                              j(
                                  {
                                      size: "md",
                                      color: "currentColor",
                                  },
                                  e,
                              ),
                              { className: x.ownerIcon },
                          ),
                      ),
              })
            : null;
    }),
    V = i.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, r.jsx)(l.ua7, {
                  text: D.intl.formatToPlainString(D.t.IWkAq6, { date: t }),
                  children: (e) =>
                      (0, r.jsx)(l.P3F, {
                          onClick: n,
                          tabIndex: -1,
                          children: (0, r.jsx)(
                              l.$Eu,
                              k(j({}, e), {
                                  color: l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  className: x.premiumIcon,
                              }),
                          ),
                      }),
              });
    }),
    H = i.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = P.Hb.BOT;
        return (0, r.jsx)(p.Z, {
            className: x.botTag,
            type: n,
            verified: t.isVerifiedBot(),
        });
    }),
    Y = i.memo(function (e) {
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
                (0, r.jsx)(H, { user: t }),
                (0, r.jsx)(F, {
                    isOwner: n,
                    lostPermissionTooltipText: i,
                    ownerTooltipText: a,
                }),
                (0, r.jsx)(V, {
                    premiumSince: o,
                    onClickPremiumGuildIcon: s,
                }),
            ],
        });
    }),
    W = i.memo(function (e) {
        let {
                colorRoleName: t,
                colorString: n,
                colorStrings: i,
                name: a,
                hideClanTag: o,
                user: s,
                guildId: c,
                isHovering: u,
            } = e,
            d = (0, y.j)({ displayNameStyles: null == s ? void 0 : s.displayNameStyles }),
            f = null == c && (null == s ? void 0 : s.displayNameStyles) != null;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                f
                    ? (0, r.jsx)(b.Z, {
                          userName: null != a ? a : "",
                          displayNameStyles: s.displayNameStyles,
                          effectDisplayType: u ? E.F.ANIMATED : E.F.STATIC,
                          loop: !0,
                      })
                    : (0, r.jsx)(l.PUh, {
                          roleName: t,
                          colorString: n,
                          colorStrings: i,
                          name: a,
                          className: x.name,
                          displayNameStylesFont: d,
                          animateRoleGradient: u,
                      }),
                !o &&
                    (0, r.jsx)(O.ZP, {
                        primaryGuild: null == s ? void 0 : s.primaryGuild,
                        userId: null == s ? void 0 : s.id,
                        contextGuildId: c,
                        disableGuildProfile: !0,
                        className: x.clanTag,
                    }),
            ],
        });
    }),
    K = i.memo(function (e) {
        let {
                user: t,
                shouldAnimateStatus: n,
                activities: i,
                status: a,
                eventHandlers: o,
                avatarSrc: s,
                isMobile: u,
                isTyping: d,
                avatarDecorationSrc: f,
                handleSetTypingRef: _,
                typingRef: p,
                currentUser: h,
            } = e,
            m = a === R.Skl.OFFLINE,
            g = n ? l.Xo$ : l.qEK,
            E = (0, c.Z)(i) ? R.Skl.STREAMING : a;
        return (
            (E = m ? void 0 : E),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(
                        g,
                        k(j({}, o), {
                            size: l.EFr.SIZE_32,
                            src: s,
                            isMobile: u,
                            isTyping: d,
                            status: E,
                            "aria-label": t.username,
                            statusTooltip: !0,
                            avatarDecoration: f,
                            typingIndicatorRef: _,
                        }),
                    ),
                    (0, r.jsx)(v.Z, {
                        confettiSpawnRef: p,
                        shouldFire: d && null != h && t.id !== h.id,
                        confettiLocation: w.Hn.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    z = i.memo(function (e) {
        let {
                hideSubtext: t,
                hideTooltip: n = !1,
                activities: a,
                status: o,
                applicationStream: s,
                voiceStatusChannel: l,
                user: c,
                channel: u,
                isHoveringOrFocusing: f,
                quest: p,
            } = e,
            h = i.useMemo(
                () =>
                    (0, d.Z)({
                        activities: a,
                        status: o,
                        applicationStream: s,
                        voiceChannel: l,
                    }),
                [a, o, s, l],
            ),
            m = i.useMemo(
                () =>
                    !(0, g.Z)({
                        activity:
                            null == a
                                ? void 0
                                : a.find((e) => {
                                      let { type: t } = e;
                                      return t === R.IIU.CUSTOM_STATUS;
                                  }),
                        user: c,
                        channel: u,
                    }),
                [a, c, u],
            );
        return t || !h
            ? null
            : (0, r.jsx)(_.Z, {
                  location: "MemberListSubtext",
                  user: c,
                  activities: a,
                  applicationStream: s,
                  voiceChannel: l,
                  animateEmoji: f,
                  hideEmoji: m,
                  hasQuest: null != p,
                  hideTooltip: n,
              });
    }),
    q = i.memo(function (e) {
        let {
                selected: t = !1,
                colorString: n,
                colorStrings: a,
                colorRoleName: s,
                isOwner: c,
                ownerTooltipText: d,
                lostPermissionTooltipText: _,
                isTyping: p = !1,
                nick: g,
                user: E,
                currentUser: b,
                activities: y,
                applicationStream: O,
                status: v,
                shouldAnimateStatus: C = !1,
                isMobile: P,
                premiumSince: w,
                channel: D,
                guildId: L,
                className: M,
                nameplate: G,
                hideClanTag: B = !1,
                hideSubtext: F = !1,
                hideTooltip: V = !1,
                onMouseDown: H,
                onKeyDown: q,
                onClick: X,
                onContextMenu: Q,
                onClickPremiumGuildIcon: J,
                "aria-controls": $,
                "aria-expanded": ee,
                "aria-posinset": et,
                "aria-setsize": en,
                id: er,
                tabIndex: ei,
                itemProps: ea,
                ref: eo,
            } = e,
            es = null == E ? void 0 : E.id,
            el = N.ZP.useName(E),
            ec = i.useRef(null),
            eu = null != eo ? eo : ec,
            [ed, ef] = i.useState(!1),
            [e_, ep] = i.useState(!1),
            [eh, em] = i.useState(null),
            { voiceChannel: eg } = (0, f.Z)({
                userId: es,
                guildId: L,
            }),
            { voiceActivityStatusEnabled: eE } = (0, u.U)({ location: "MemberListItem" }),
            eb = eE ? eg : void 0,
            {
                avatarDecorationSrc: ey,
                avatarSrc: eO,
                eventHandlers: ev,
            } = (0, A.Z)({
                userId: es,
                size: l.EFr.SIZE_32,
                animateOnHover: !(t || ed),
                guildId: L,
            }),
            eI = null != ea ? ea : {},
            { onFocus: eT } = eI,
            eS = U(eI, ["onFocus"]),
            eA = (0, I.X7)(L, es, null != a ? a : null),
            [eC, eN] = i.useState(!1);
        i.useEffect(() => {
            t && eN(!1);
        }, [t]);
        let eR = (0, T.fN)(y),
            eP = (0, T.Wi)(eR, O, es) && t && !eC,
            ew = i.useCallback(() => {
                ef(!0);
            }, []),
            eD = i.useCallback(() => {
                ef(!1);
            }, []),
            ex = i.useCallback(() => {
                ep(!0), null == eT || eT();
            }, [eT]),
            eL = i.useCallback(() => {
                ep(!1);
            }, []),
            ej = i.useCallback((e) => {
                em(e);
            }, []),
            eM = i.useCallback(
                (e) =>
                    null == eR
                        ? null
                        : (0, r.jsx)(
                              S.Z,
                              k(
                                  j(
                                      {
                                          name: null != g ? g : el,
                                          quest: eR,
                                          memberListItemRef: eu,
                                          applicationStream: O,
                                      },
                                      e,
                                  ),
                                  { closePopout: () => eN(!0) },
                              ),
                          ),
                [eR, eu, O, g, el],
            );
        return null == E
            ? (0, r.jsx)(h.Z, {
                  avatarSize: l.EFr.SIZE_32,
                  className: x.placeholder,
              })
            : (0, r.jsx)(l.yRy, {
                  targetElementRef: eu,
                  renderPopout: eM,
                  position: "bottom",
                  shouldShow: eP,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: l.yRy.Animation.NONE,
                  spacing: -Z,
                  children: () =>
                      (0, r.jsx)(
                          m.Z,
                          j(
                              {
                                  ref: eu,
                                  selected: t,
                                  className: o()(x.member, M, {
                                      [x.offline]: v === R.Skl.OFFLINE && !t,
                                      [x.flatBottom]: eP,
                                  }),
                                  innerClassName: x.memberInner,
                                  onClick: X,
                                  onKeyDown: q,
                                  onMouseDown: H,
                                  onContextMenu: Q,
                                  onMouseEnter: ew,
                                  onMouseLeave: eD,
                                  onBlur: eL,
                                  hovered: ed,
                                  name:
                                      null == _
                                          ? (0, r.jsx)("span", {
                                                className: x.username,
                                                children: (0, r.jsx)(W, {
                                                    colorRoleName: s,
                                                    colorString: null != n ? n : null,
                                                    name: null != g ? g : el,
                                                    colorStrings: eA,
                                                    hideClanTag: B,
                                                    user: E,
                                                    guildId: L,
                                                    isHovering: ed,
                                                }),
                                            })
                                          : (0, r.jsx)(l.ua7, {
                                                text: _,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        "span",
                                                        k(j({}, e), {
                                                            className: o()(x.username, x.lostPermission),
                                                            children: (0, r.jsx)(W, {
                                                                colorRoleName: s,
                                                                colorString: null != n ? n : null,
                                                                name: null != g ? g : el,
                                                                colorStrings: eA,
                                                                hideClanTag: B,
                                                                user: E,
                                                                guildId: L,
                                                                isHovering: ed,
                                                            }),
                                                        }),
                                                    ),
                                            }),
                                  avatar: (0, r.jsx)(K, {
                                      user: E,
                                      shouldAnimateStatus: C,
                                      activities: y,
                                      status: v,
                                      eventHandlers: ev,
                                      avatarSrc: eO,
                                      isMobile: P,
                                      isTyping: p,
                                      avatarDecorationSrc: ey,
                                      handleSetTypingRef: ej,
                                      typingRef: eh,
                                      currentUser: b,
                                  }),
                                  nameplate: G,
                                  subText: (0, r.jsx)(z, {
                                      hideSubtext: F,
                                      activities: y,
                                      status: v,
                                      applicationStream: O,
                                      voiceStatusChannel: eb,
                                      user: E,
                                      channel: D,
                                      isHoveringOrFocusing: ed || e_,
                                      quest: eR,
                                      hideTooltip: V,
                                  }),
                                  decorators: (0, r.jsx)(Y, {
                                      user: E,
                                      isOwner: c,
                                      lostPermissionTooltipText: _,
                                      ownerTooltipText: d,
                                      premiumSince: w,
                                      onClickPremiumGuildIcon: J,
                                  }),
                                  "aria-controls": $,
                                  "aria-expanded": ee,
                                  "aria-setsize": en,
                                  "aria-posinset": et,
                                  id: er,
                                  tabIndex: ei,
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
                              eS,
                          ),
                      ),
              });
    });

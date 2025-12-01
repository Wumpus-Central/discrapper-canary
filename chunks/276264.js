n.d(t, {
    Z: () => X,
    x: () => F,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(477690),
    c = n(481060),
    u = n(420660),
    d = n(468363),
    f = n(326255),
    p = n(956221),
    _ = n(771173),
    m = n(385499),
    h = n(693728),
    g = n(554300),
    E = n(558602),
    b = n(386725),
    y = n(821795),
    O = n(892567),
    v = n(7284),
    S = n(172751),
    I = n(736144),
    T = n(884902),
    A = n(313481),
    C = n(664385),
    N = n(518950),
    P = n(624138),
    R = n(51144),
    w = n(981631),
    D = n(674563),
    x = n(524484),
    L = n(388032),
    j = n(894723);
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
                M(e, t, n[t]);
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
function Z(e, t) {
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
let F = (0, P.Mg)(l.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    V = 3,
    H = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(s.u, {
                  __unsupportedReactNodeAsText: null != i ? i : L.intl.string(L.t.pclUFJ),
                  children: (0, r.jsx)(c.CEn, {
                      size: "md",
                      color: "currentColor",
                      className: j.ownerIcon,
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
                          className: j.premiumIcon,
                      }),
                  }),
              });
    }),
    W = i.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = D.Hb.BOT;
        return (0, r.jsx)(m.Z, {
            className: j.botTag,
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
            p = null == l && null != d;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                p
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
                          className: j.name,
                          displayNameStylesFont: f,
                          animateRoleGradient: u,
                      }),
                !o &&
                    (0, r.jsx)(S.ZP, {
                        primaryGuild: null == s ? void 0 : s.primaryGuild,
                        userId: null == s ? void 0 : s.id,
                        contextGuildId: l,
                        disableGuildProfile: !0,
                        className: j.clanTag,
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
                handleSetTypingRef: p,
                typingRef: _,
                currentUser: m,
            } = e,
            h = a === w.Skl.OFFLINE,
            g = n ? c.Xo$ : c.qEK,
            E = (0, u.Z)(i) ? w.Skl.STREAMING : a;
        return (
            (E = h ? void 0 : E),
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
                            typingIndicatorRef: p,
                        }),
                    ),
                    (0, r.jsx)(I.Z, {
                        confettiSpawnRef: _,
                        shouldFire: d && null != m && t.id !== m.id,
                        confettiLocation: x.Hn.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    Q = i.memo(function (e) {
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
                quest: p,
            } = e,
            m = i.useMemo(
                () =>
                    (0, f.Z)({
                        activities: a,
                        status: o,
                        applicationStream: s,
                        voiceChannel: l,
                    }),
                [a, o, s, l],
            ),
            h = i.useMemo(
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
        return t || !m
            ? null
            : (0, r.jsx)(_.Z, {
                  location: "MemberListSubtext",
                  user: c,
                  activities: a,
                  applicationStream: s,
                  voiceChannel: l,
                  animateEmoji: d,
                  hideEmoji: h,
                  hasQuest: null != p,
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
                lostPermissionTooltipText: _,
                isTyping: m = !1,
                nick: E,
                user: b,
                currentUser: y,
                activities: O,
                applicationStream: v,
                status: S,
                shouldAnimateStatus: I = !1,
                isMobile: P,
                premiumSince: D,
                channel: x,
                guildId: L,
                className: M,
                nameplate: U,
                hideClanTag: B = !1,
                hideSubtext: F = !1,
                hideTooltip: H = !1,
                onMouseDown: Y,
                onKeyDown: W,
                onClick: X,
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
            [ef, ep] = i.useState(!1),
            [e_, em] = i.useState(!1),
            [eh, eg] = i.useState(null),
            { voiceChannel: eE } = (0, p.Z)({
                userId: el,
                guildId: L,
            }),
            { voiceActivityStatusEnabled: eb } = (0, d.U)({ location: "MemberListItem" }),
            ey = eb ? eE : void 0,
            {
                avatarDecorationSrc: eO,
                avatarSrc: ev,
                eventHandlers: eS,
            } = (0, N.Z)({
                userId: el,
                size: c.EFr.SIZE_32,
                animateOnHover: !(t || ef),
                guildId: L,
            }),
            eI = null != eo ? eo : {},
            { onFocus: eT } = eI,
            eA = Z(eI, ["onFocus"]),
            eC = (0, T.X7)(L, el, null != a ? a : null),
            [eN, eP] = i.useState(!1);
        i.useEffect(() => {
            t && eP(!1);
        }, [t]);
        let eR = (0, A.fN)(O),
            ew = (0, A.Wi)(eR, v, el) && t && !eN,
            eD = i.useCallback(() => {
                ep(!0);
            }, []),
            ex = i.useCallback(() => {
                ep(!1);
            }, []),
            eL = i.useCallback(() => {
                em(!0), null == eT || eT();
            }, [eT]),
            ej = i.useCallback(() => {
                em(!1);
            }, []),
            eM = i.useCallback((e) => {
                eg(e);
            }, []),
            ek = i.useCallback(
                (e) =>
                    null == eR
                        ? null
                        : (0, r.jsx)(
                              C.Z,
                              G(
                                  k(
                                      {
                                          name: null != E ? E : ec,
                                          quest: eR,
                                          memberListItemRef: ed,
                                          applicationStream: v,
                                      },
                                      e,
                                  ),
                                  { closePopout: () => eP(!0) },
                              ),
                          ),
                [eR, ed, v, E, ec],
            );
        return null == b
            ? (0, r.jsx)(h.Z, {
                  avatarSize: c.EFr.SIZE_32,
                  className: j.placeholder,
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
                                  className: o()(j.member, M, {
                                      [j.offline]: S === w.Skl.OFFLINE && !t,
                                      [j.flatBottom]: ew,
                                  }),
                                  innerClassName: j.memberInner,
                                  onClick: X,
                                  onKeyDown: W,
                                  onMouseDown: Y,
                                  onContextMenu: J,
                                  onMouseEnter: eD,
                                  onMouseLeave: ex,
                                  onBlur: ej,
                                  hovered: ef,
                                  name:
                                      null == _
                                          ? (0, r.jsx)("span", {
                                                className: j.username,
                                                children: (0, r.jsx)(z, {
                                                    colorRoleName: l,
                                                    colorString: null != n ? n : null,
                                                    name: null != E ? E : ec,
                                                    colorStrings: eC,
                                                    hideClanTag: B,
                                                    user: b,
                                                    guildId: L,
                                                    isHovering: ef,
                                                }),
                                            })
                                          : (0, r.jsx)(s.u, {
                                                text: _,
                                                children: (0, r.jsx)("span", {
                                                    className: o()(j.username, j.lostPermission),
                                                    children: (0, r.jsx)(z, {
                                                        colorRoleName: l,
                                                        colorString: null != n ? n : null,
                                                        name: null != E ? E : ec,
                                                        colorStrings: eC,
                                                        hideClanTag: B,
                                                        user: b,
                                                        guildId: L,
                                                        isHovering: ef,
                                                    }),
                                                }),
                                            }),
                                  avatar: (0, r.jsx)(q, {
                                      user: b,
                                      shouldAnimateStatus: I,
                                      activities: O,
                                      status: S,
                                      eventHandlers: eS,
                                      avatarSrc: ev,
                                      isMobile: P,
                                      isTyping: m,
                                      avatarDecorationSrc: eO,
                                      handleSetTypingRef: eM,
                                      typingRef: eh,
                                      currentUser: y,
                                  }),
                                  nameplate: U,
                                  subText: (0, r.jsx)(Q, {
                                      hideSubtext: F,
                                      activities: O,
                                      status: S,
                                      applicationStream: v,
                                      voiceStatusChannel: ey,
                                      user: b,
                                      channel: x,
                                      isHoveringOrFocusing: ef || e_,
                                      quest: eR,
                                      hideTooltip: H,
                                  }),
                                  decorators: (0, r.jsx)(K, {
                                      user: b,
                                      isOwner: u,
                                      lostPermissionTooltipText: _,
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

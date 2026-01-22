n.d(t, {
    A: () => Q,
    b: () => B,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(319060),
    c = n(397927),
    u = n(960076),
    d = n(901517),
    f = n(397244),
    p = n(714114),
    _ = n(729551),
    h = n(709066),
    m = n(295160),
    g = n(193663),
    E = n(490427),
    b = n(609425),
    y = n(922301),
    O = n(750112),
    A = n(73392),
    v = n(534400),
    S = n(835759),
    I = n(967144),
    T = n(890687),
    C = n(198525),
    N = n(854627),
    R = n(240248),
    w = n(427262),
    P = n(652215),
    D = n(705751),
    x = n(31408),
    L = n(985018),
    j = n(645576);
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
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = F(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let B = (0, R.xI)(l.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    H = 3,
    Y = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(o.m, {
                  __unsupportedReactNodeAsText: null != i ? i : L.intl.string(L.t.pclUFJ),
                  children: (0, r.jsx)(c.pw5, {
                      size: "md",
                      color: "currentColor",
                      className: j.Dd,
                  }),
              })
            : null;
    }),
    W = i.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, r.jsx)(o.m, {
                  text: L.intl.formatToPlainString(L.t.IWkAq7, { date: t }),
                  asContainer: !0,
                  children: (0, r.jsx)(c.DUT, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, r.jsx)(c._Jp, {
                          color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                          className: j.PC,
                      }),
                  }),
              });
    }),
    K = i.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = D.nu.BOT;
        return (0, r.jsx)(h.A, {
            className: j.AO,
            type: n,
            verified: t.isVerifiedBot(),
        });
    }),
    z = i.memo(function (e) {
        let {
            user: t,
            isOwner: n,
            lostPermissionTooltipText: i,
            ownerTooltipText: a,
            premiumSince: s,
            onClickPremiumGuildIcon: o,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(K, { user: t }),
                (0, r.jsx)(Y, {
                    isOwner: n,
                    lostPermissionTooltipText: i,
                    ownerTooltipText: a,
                }),
                (0, r.jsx)(W, {
                    premiumSince: s,
                    onClickPremiumGuildIcon: o,
                }),
            ],
        });
    }),
    q = i.memo(function (e) {
        let {
                colorRoleName: t,
                colorString: n,
                colorStrings: i,
                name: a,
                hideClanTag: s,
                user: o,
                guildId: l,
                isHovering: u,
            } = e,
            d = (0, b.A)({
                userId: null == o ? void 0 : o.id,
                guildId: l,
            }),
            f = (0, A.a)({ displayNameStyles: d }),
            p = null == l && null != d;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                p
                    ? (0, r.jsx)(O.A, {
                          userName: null != a ? a : "",
                          displayNameStyles: d,
                          effectDisplayType: u ? y.G.ANIMATED : y.G.STATIC,
                          loop: !0,
                      })
                    : (0, r.jsx)(c.gyj, {
                          roleName: t,
                          colorString: n,
                          colorStrings: i,
                          name: a,
                          className: j.UU,
                          displayNameStylesFont: f,
                          animateRoleGradient: u,
                      }),
                !s &&
                    (0, r.jsx)(v.Ay, {
                        primaryGuild: null == o ? void 0 : o.primaryGuild,
                        userId: null == o ? void 0 : o.id,
                        contextGuildId: l,
                        disableGuildProfile: !0,
                        className: j.fc,
                    }),
            ],
        });
    }),
    X = i.memo(function (e) {
        let {
                user: t,
                shouldAnimateStatus: n,
                activities: i,
                status: a,
                eventHandlers: s,
                avatarSrc: o,
                isMobile: l,
                isTyping: d,
                avatarDecorationSrc: f,
                handleSetTypingRef: p,
                typingRef: _,
                currentUser: h,
            } = e,
            m = a === P.clD.OFFLINE,
            g = n ? c.JsQ : c.euF,
            E = (0, u.A)(i) ? P.clD.STREAMING : a;
        return (
            (E = m ? void 0 : E),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(
                        g,
                        G(k({}, s), {
                            size: c._3J.SIZE_32,
                            src: o,
                            isMobile: l,
                            isTyping: d,
                            status: E,
                            "aria-label": t.username,
                            statusTooltip: !0,
                            avatarDecoration: f,
                            typingIndicatorRef: p,
                        }),
                    ),
                    (0, r.jsx)(S.A, {
                        confettiSpawnRef: _,
                        shouldFire: d && null != h && t.id !== h.id,
                        confettiLocation: x.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    Z = i.memo(function (e) {
        let {
                hideSubtext: t,
                hideTooltip: n = !1,
                activities: a,
                status: s,
                applicationStream: o,
                voiceStatusChannel: l,
                user: c,
                channel: u,
                isHoveringOrFocusing: d,
                quest: p,
            } = e,
            h = i.useMemo(
                () =>
                    (0, f.A)({
                        activities: a,
                        status: s,
                        applicationStream: o,
                        voiceChannel: l,
                    }),
                [a, s, o, l],
            ),
            m = i.useMemo(
                () =>
                    !(0, E.A)({
                        activity:
                            null == a
                                ? void 0
                                : a.find((e) => {
                                      let { type: t } = e;
                                      return t === P.$pd.CUSTOM_STATUS;
                                  }),
                        user: c,
                        channel: u,
                    }),
                [a, c, u],
            );
        return t || !h
            ? null
            : (0, r.jsx)(_.A, {
                  user: c,
                  activities: a,
                  applicationStream: o,
                  voiceChannel: l,
                  animateEmoji: d,
                  hideEmoji: m,
                  hasQuest: null != p,
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
                lostPermissionTooltipText: _,
                isTyping: h = !1,
                nick: E,
                user: b,
                currentUser: y,
                activities: O,
                applicationStream: A,
                status: v,
                shouldAnimateStatus: S = !1,
                isMobile: R,
                premiumSince: D,
                channel: x,
                guildId: L,
                className: M,
                nameplate: U,
                hideClanTag: F = !1,
                hideSubtext: B = !1,
                hideTooltip: Y = !1,
                onMouseDown: W,
                onKeyDown: K,
                onClick: Q,
                onContextMenu: $,
                onClickPremiumGuildIcon: J,
                "aria-controls": ee,
                "aria-expanded": et,
                "aria-posinset": en,
                "aria-setsize": er,
                id: ei,
                tabIndex: ea,
                itemProps: es,
                ref: eo,
            } = e,
            el = null == b ? void 0 : b.id,
            ec = w.Ay.useName(b),
            eu = i.useRef(null),
            ed = null != eo ? eo : eu,
            [ef, ep] = i.useState(!1),
            [e_, eh] = i.useState(!1),
            [em, eg] = i.useState(null),
            { voiceChannel: eE } = (0, p.A)({
                userId: el,
                guildId: L,
            }),
            { voiceActivityStatusEnabled: eb } = (0, d.G)({ location: "MemberListItem" }),
            ey = eb ? eE : void 0,
            {
                avatarDecorationSrc: eO,
                avatarSrc: eA,
                eventHandlers: ev,
            } = (0, N.A)({
                userId: el,
                size: c._3J.SIZE_32,
                animateOnHover: !(t || ef),
                guildId: L,
            }),
            eS = null != es ? es : {},
            { onFocus: eI } = eS,
            eT = V(eS, ["onFocus"]),
            eC = (0, I.gn)(L, el, null != a ? a : null),
            [eN, eR] = i.useState(!1);
        i.useEffect(() => {
            t && eR(!1);
        }, [t]);
        let ew = (0, T.YW)(O),
            eP = (0, T.Yl)(ew, A, el) && t && !eN,
            eD = i.useCallback(() => {
                ep(!0);
            }, []),
            ex = i.useCallback(() => {
                ep(!1);
            }, []),
            eL = i.useCallback(() => {
                eh(!0), null == eI || eI();
            }, [eI]),
            ej = i.useCallback(() => {
                eh(!1);
            }, []),
            eM = i.useCallback((e) => {
                eg(e);
            }, []),
            ek = i.useCallback(
                (e) =>
                    null == ew
                        ? null
                        : (0, r.jsx)(
                              C.A,
                              G(
                                  k(
                                      {
                                          name: null != E ? E : ec,
                                          quest: ew,
                                          memberListItemRef: ed,
                                          applicationStream: A,
                                      },
                                      e,
                                  ),
                                  { closePopout: () => eR(!0) },
                              ),
                          ),
                [ew, ed, A, E, ec],
            );
        return null == b
            ? (0, r.jsx)(m.A, {
                  avatarSize: c._3J.SIZE_32,
                  className: j.qf,
              })
            : (0, r.jsx)(c.YNO, {
                  targetElementRef: ed,
                  renderPopout: ek,
                  position: "bottom",
                  shouldShow: eP,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: c.YNO.Animation.NONE,
                  spacing: -H,
                  children: () =>
                      (0, r.jsx)(
                          g.A,
                          k(
                              {
                                  ref: ed,
                                  selected: t,
                                  className: s()(j.Dc, M, {
                                      [j.WK]: v === P.clD.OFFLINE && !t,
                                      [j.PJ]: eP,
                                  }),
                                  innerClassName: j.Hz,
                                  onClick: Q,
                                  onKeyDown: K,
                                  onMouseDown: W,
                                  onContextMenu: $,
                                  onMouseEnter: eD,
                                  onMouseLeave: ex,
                                  onBlur: ej,
                                  hovered: ef,
                                  name:
                                      null == _
                                          ? (0, r.jsx)("span", {
                                                className: j.Xh,
                                                children: (0, r.jsx)(q, {
                                                    colorRoleName: l,
                                                    colorString: null != n ? n : null,
                                                    name: null != E ? E : ec,
                                                    colorStrings: eC,
                                                    hideClanTag: F,
                                                    user: b,
                                                    guildId: L,
                                                    isHovering: ef,
                                                }),
                                            })
                                          : (0, r.jsx)(o.m, {
                                                text: _,
                                                children: (0, r.jsx)("span", {
                                                    className: s()(j.Xh, j.oj),
                                                    children: (0, r.jsx)(q, {
                                                        colorRoleName: l,
                                                        colorString: null != n ? n : null,
                                                        name: null != E ? E : ec,
                                                        colorStrings: eC,
                                                        hideClanTag: F,
                                                        user: b,
                                                        guildId: L,
                                                        isHovering: ef,
                                                    }),
                                                }),
                                            }),
                                  avatar: (0, r.jsx)(X, {
                                      user: b,
                                      shouldAnimateStatus: S,
                                      activities: O,
                                      status: v,
                                      eventHandlers: ev,
                                      avatarSrc: eA,
                                      isMobile: R,
                                      isTyping: h,
                                      avatarDecorationSrc: eO,
                                      handleSetTypingRef: eM,
                                      typingRef: em,
                                      currentUser: y,
                                  }),
                                  nameplate: U,
                                  subText: (0, r.jsx)(Z, {
                                      hideSubtext: B,
                                      activities: O,
                                      status: v,
                                      applicationStream: A,
                                      voiceStatusChannel: ey,
                                      user: b,
                                      channel: x,
                                      isHoveringOrFocusing: ef || e_,
                                      quest: ew,
                                      hideTooltip: Y,
                                  }),
                                  decorators: (0, r.jsx)(z, {
                                      user: b,
                                      isOwner: u,
                                      lostPermissionTooltipText: _,
                                      ownerTooltipText: f,
                                      premiumSince: D,
                                      onClickPremiumGuildIcon: J,
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
                              eT,
                          ),
                      ),
              });
    });

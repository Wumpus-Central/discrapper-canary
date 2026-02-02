n.d(t, {
    A: () => X,
    b: () => B,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(990078),
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
    y = n(609425),
    b = n(922301),
    O = n(750112),
    v = n(73392),
    A = n(534400),
    I = n(835759),
    S = n(967144),
    T = n(890687),
    C = n(198525),
    N = n(854627),
    w = n(240248),
    R = n(427262),
    P = n(652215),
    D = n(705751),
    L = n(31408),
    x = n(985018),
    M = n(645576);

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
let B = (0, w.xI)(l.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    H = 3,
    Y = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(s.m, {
                  __unsupportedReactNodeAsText: null != i ? i : x.intl.string(x.t.pclUFJ),
                  children: (0, r.jsx)(c.pw5, {
                      size: "md",
                      color: "currentColor",
                      className: M.Dd,
                  }),
              })
            : null;
    }),
    W = i.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, r.jsx)(s.m, {
                  text: x.intl.formatToPlainString(x.t.IWkAq7, {
                      date: t,
                  }),
                  asContainer: !0,
                  children: (0, r.jsx)(c.DUT, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, r.jsx)(c._Jp, {
                          color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                          className: M.PC,
                      }),
                  }),
              });
    }),
    K = i.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = D.nu.BOT;
        return (0, r.jsx)(h.A, {
            className: M.AO,
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
            premiumSince: o,
            onClickPremiumGuildIcon: s,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(K, {
                    user: t,
                }),
                (0, r.jsx)(Y, {
                    isOwner: n,
                    lostPermissionTooltipText: i,
                    ownerTooltipText: a,
                }),
                (0, r.jsx)(W, {
                    premiumSince: o,
                    onClickPremiumGuildIcon: s,
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
                hideClanTag: o,
                user: s,
                guildId: l,
                isHovering: u,
            } = e,
            d = (0, y.A)({
                userId: null == s ? void 0 : s.id,
                guildId: l,
            }),
            f = (0, v.a)({
                displayNameStyles: d,
            }),
            p = null == l && null != d;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                p
                    ? (0, r.jsx)(O.A, {
                          userName: null != a ? a : "",
                          displayNameStyles: d,
                          effectDisplayType: u ? b.G.ANIMATED : b.G.STATIC,
                          loop: !0,
                      })
                    : (0, r.jsx)(c.gyj, {
                          roleName: t,
                          colorString: n,
                          colorStrings: i,
                          name: a,
                          className: M.UU,
                          displayNameStylesFont: f,
                          animateRoleGradient: u,
                      }),
                !o &&
                    (0, r.jsx)(A.Ay, {
                        primaryGuild: null == s ? void 0 : s.primaryGuild,
                        userId: null == s ? void 0 : s.id,
                        contextGuildId: l,
                        disableGuildProfile: !0,
                        className: M.fc,
                    }),
            ],
        });
    }),
    Z = i.memo(function (e) {
        let {
                user: t,
                shouldAnimateStatus: n,
                activities: i,
                status: a,
                eventHandlers: o,
                avatarSrc: s,
                isMobile: l,
                isVR: d,
                isTyping: f,
                avatarDecorationSrc: p,
                handleSetTypingRef: _,
                typingRef: h,
                currentUser: m,
            } = e,
            g = a === P.clD.OFFLINE,
            E = n ? c.JsQ : c.euF,
            y = (0, u.A)(i) ? P.clD.STREAMING : a;
        return (
            (y = g ? void 0 : y),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(
                        E,
                        G(k({}, o), {
                            size: c._3J.SIZE_32,
                            src: s,
                            isMobile: l,
                            isVR: d,
                            isTyping: f,
                            status: y,
                            "aria-label": t.username,
                            statusTooltip: !0,
                            avatarDecoration: p,
                            typingIndicatorRef: _,
                        }),
                    ),
                    (0, r.jsx)(I.A, {
                        confettiSpawnRef: h,
                        shouldFire: f && null != m && t.id !== m.id,
                        confettiLocation: L.k.MEMBER_USER,
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
            h = i.useMemo(
                () =>
                    (0, f.A)({
                        activities: a,
                        status: o,
                        applicationStream: s,
                        voiceChannel: l,
                    }),
                [a, o, s, l],
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
                  applicationStream: s,
                  voiceChannel: l,
                  animateEmoji: d,
                  hideEmoji: m,
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
                isTyping: h = !1,
                nick: E,
                user: y,
                currentUser: b,
                activities: O,
                applicationStream: v,
                status: A,
                shouldAnimateStatus: I = !1,
                isMobile: w,
                isVR: D,
                premiumSince: L,
                channel: x,
                guildId: j,
                className: U,
                nameplate: F,
                hideClanTag: B = !1,
                hideSubtext: Y = !1,
                hideTooltip: W = !1,
                onMouseDown: K,
                onKeyDown: X,
                onClick: J,
                onContextMenu: $,
                onClickPremiumGuildIcon: ee,
                "aria-controls": et,
                "aria-expanded": en,
                "aria-posinset": er,
                "aria-setsize": ei,
                id: ea,
                tabIndex: eo,
                itemProps: es,
                ref: el,
            } = e,
            ec = null == y ? void 0 : y.id,
            eu = R.Ay.useName(y),
            ed = i.useRef(null),
            ef = null != el ? el : ed,
            [ep, e_] = i.useState(!1),
            [eh, em] = i.useState(!1),
            [eg, eE] = i.useState(null),
            { voiceChannel: ey } = (0, p.A)({
                userId: ec,
                guildId: j,
            }),
            { voiceActivityStatusEnabled: eb } = (0, d.G)({
                location: "MemberListItem",
            }),
            eO = eb ? ey : void 0,
            {
                avatarDecorationSrc: ev,
                avatarSrc: eA,
                eventHandlers: eI,
            } = (0, N.A)({
                userId: ec,
                size: c._3J.SIZE_32,
                animateOnHover: !(t || ep),
                guildId: j,
            }),
            eS = null != es ? es : {},
            { onFocus: eT } = eS,
            eC = V(eS, ["onFocus"]),
            eN = (0, S.gn)(j, ec, null != a ? a : null),
            [ew, eR] = i.useState(!1);
        i.useEffect(() => {
            t && eR(!1);
        }, [t]);
        let eP = (0, T.YW)(O),
            eD = (0, T.Yl)(eP, v, ec) && t && !ew,
            eL = i.useCallback(() => {
                e_(!0);
            }, []),
            ex = i.useCallback(() => {
                e_(!1);
            }, []),
            eM = i.useCallback(() => {
                em(!0), null == eT || eT();
            }, [eT]),
            ej = i.useCallback(() => {
                em(!1);
            }, []),
            ek = i.useCallback((e) => {
                eE(e);
            }, []),
            eU = i.useCallback(
                (e) =>
                    null == eP
                        ? null
                        : (0, r.jsx)(
                              C.A,
                              G(
                                  k(
                                      {
                                          name: null != E ? E : eu,
                                          quest: eP,
                                          memberListItemRef: ef,
                                          applicationStream: v,
                                      },
                                      e,
                                  ),
                                  {
                                      closePopout: () => eR(!0),
                                  },
                              ),
                          ),
                [eP, ef, v, E, eu],
            );
        return null == y
            ? (0, r.jsx)(m.A, {
                  avatarSize: c._3J.SIZE_32,
                  className: M.qf,
              })
            : (0, r.jsx)(c.YNO, {
                  targetElementRef: ef,
                  renderPopout: eU,
                  position: "bottom",
                  shouldShow: eD,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: c.YNO.Animation.NONE,
                  spacing: -H,
                  children: () =>
                      (0, r.jsx)(
                          g.A,
                          k(
                              {
                                  ref: ef,
                                  selected: t,
                                  className: o()(M.Dc, U, {
                                      [M.WK]: A === P.clD.OFFLINE && !t,
                                      [M.PJ]: eD,
                                  }),
                                  innerClassName: M.Hz,
                                  onClick: J,
                                  onKeyDown: X,
                                  onMouseDown: K,
                                  onContextMenu: $,
                                  onMouseEnter: eL,
                                  onMouseLeave: ex,
                                  onBlur: ej,
                                  hovered: ep,
                                  name:
                                      null == _
                                          ? (0, r.jsx)("span", {
                                                className: M.Xh,
                                                children: (0, r.jsx)(q, {
                                                    colorRoleName: l,
                                                    colorString: null != n ? n : null,
                                                    name: null != E ? E : eu,
                                                    colorStrings: eN,
                                                    hideClanTag: B,
                                                    user: y,
                                                    guildId: j,
                                                    isHovering: ep,
                                                }),
                                            })
                                          : (0, r.jsx)(s.m, {
                                                text: _,
                                                children: (0, r.jsx)("span", {
                                                    className: o()(M.Xh, M.oj),
                                                    children: (0, r.jsx)(q, {
                                                        colorRoleName: l,
                                                        colorString: null != n ? n : null,
                                                        name: null != E ? E : eu,
                                                        colorStrings: eN,
                                                        hideClanTag: B,
                                                        user: y,
                                                        guildId: j,
                                                        isHovering: ep,
                                                    }),
                                                }),
                                            }),
                                  avatar: (0, r.jsx)(Z, {
                                      user: y,
                                      shouldAnimateStatus: I,
                                      activities: O,
                                      status: A,
                                      eventHandlers: eI,
                                      avatarSrc: eA,
                                      isMobile: w,
                                      isVR: D,
                                      isTyping: h,
                                      avatarDecorationSrc: ev,
                                      handleSetTypingRef: ek,
                                      typingRef: eg,
                                      currentUser: b,
                                  }),
                                  nameplate: F,
                                  subText: (0, r.jsx)(Q, {
                                      hideSubtext: Y,
                                      activities: O,
                                      status: A,
                                      applicationStream: v,
                                      voiceStatusChannel: eO,
                                      user: y,
                                      channel: x,
                                      isHoveringOrFocusing: ep || eh,
                                      quest: eP,
                                      hideTooltip: W,
                                  }),
                                  decorators: (0, r.jsx)(z, {
                                      user: y,
                                      isOwner: u,
                                      lostPermissionTooltipText: _,
                                      ownerTooltipText: f,
                                      premiumSince: L,
                                      onClickPremiumGuildIcon: ee,
                                  }),
                                  "aria-controls": et,
                                  "aria-expanded": en,
                                  "aria-setsize": ei,
                                  "aria-posinset": er,
                                  id: ea,
                                  tabIndex: eo,
                                  onFocus: eM,
                                  focusProps: {
                                      offset: {
                                          top: 4,
                                          bottom: 4,
                                          left: 4,
                                          right: 4,
                                      },
                                  },
                              },
                              eC,
                          ),
                      ),
              });
    });

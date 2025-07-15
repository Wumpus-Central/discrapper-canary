(n.d(t, {
    Z: () => Q,
    x: () => F
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
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
    b = n(7284),
    y = n(172751),
    O = n(736144),
    v = n(884902),
    I = n(113434),
    T = n(569984),
    S = n(553393),
    A = n(518950),
    N = n(594174),
    C = n(709586),
    R = n(624138),
    P = n(51144),
    w = n(981631),
    D = n(674563),
    L = n(524484),
    x = n(388032),
    M = n(938159);
function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                k(e, t, n[t]);
            }));
    }
    return e;
}
function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
        i = V(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let F = (0, R.Mg)(l.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    Z = 3,
    H = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(c.ua7, {
                  text: null != i ? i : x.intl.string(x.t.pclUFB),
                  children: (e) =>
                      (0, r.jsx)(
                          c.CEn,
                          G(
                              j(
                                  {
                                      size: 'md',
                                      color: 'currentColor'
                                  },
                                  e
                              ),
                              { className: M.ownerIcon }
                          )
                      )
              })
            : null;
    }),
    Y = i.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, r.jsx)(c.ua7, {
                  text: x.intl.formatToPlainString(x.t.IWkAq6, { date: t }),
                  children: (e) =>
                      (0, r.jsx)(c.P3F, {
                          onClick: n,
                          tabIndex: -1,
                          children: (0, r.jsx)(C.Z, G(j({}, e), { className: M.premiumIcon }))
                      })
              });
    }),
    W = i.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = D.Hb.BOT;
        return (0, r.jsx)(h.Z, {
            className: M.botTag,
            type: n,
            verified: t.isVerifiedBot()
        });
    }),
    K = i.memo(function (e) {
        let { user: t, isOwner: n, lostPermissionTooltipText: i, ownerTooltipText: a, premiumSince: o, onClickPremiumGuildIcon: s } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(W, { user: t }),
                (0, r.jsx)(H, {
                    isOwner: n,
                    lostPermissionTooltipText: i,
                    ownerTooltipText: a
                }),
                (0, r.jsx)(Y, {
                    premiumSince: o,
                    onClickPremiumGuildIcon: s
                })
            ]
        });
    }),
    z = i.memo(function (e) {
        let { colorRoleName: t, colorString: n, name: i, roleColorStrings: a, hideClanTag: o, user: s, guildId: l, isHovering: u } = e,
            d = (0, b.j)({ displayNameStyles: null == s ? void 0 : s.displayNameStyles });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.PUh, {
                    roleName: t,
                    color: null != n ? n : void 0,
                    name: i,
                    className: M.name,
                    nameTextClassName: d,
                    roleColors: a,
                    animateRoleGradient: u
                }),
                !o &&
                    (0, r.jsx)(y.ZP, {
                        primaryGuild: null == s ? void 0 : s.primaryGuild,
                        userId: null == s ? void 0 : s.id,
                        contextGuildId: l,
                        disableGuildProfile: !0,
                        className: M.clanTag
                    })
            ]
        });
    }),
    q = i.memo(function (e) {
        let { user: t, shouldAnimateStatus: n, activities: i, status: a, eventHandlers: o, avatarSrc: s, isMobile: l, isTyping: d, avatarDecorationSrc: f, handleSetTypingRef: _, typingRef: p, currentUser: h } = e,
            m = a === w.Skl.OFFLINE,
            g = n ? c.Xo$ : c.qEK,
            E = (0, u.Z)(i) ? w.Skl.STREAMING : a;
        return (
            (E = m ? void 0 : E),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(
                        g,
                        G(j({}, o), {
                            size: c.EFr.SIZE_32,
                            src: s,
                            isMobile: l,
                            isTyping: d,
                            status: E,
                            'aria-label': t.username,
                            statusTooltip: !0,
                            avatarDecoration: f,
                            typingIndicatorRef: _
                        })
                    ),
                    (0, r.jsx)(O.Z, {
                        confettiSpawnRef: p,
                        shouldFire: d && null != h && t.id !== h.id,
                        confettiLocation: L.Hn.MEMBER_USER
                    })
                ]
            })
        );
    }),
    X = i.memo(function (e) {
        let { hideSubtext: t, hideTooltip: n = !1, activities: a, status: o, applicationStream: s, voiceStatusChannel: l, user: c, channel: u, isHoveringOrFocusing: d, quest: _ } = e,
            h = i.useMemo(
                () =>
                    (0, f.Z)({
                        activities: a,
                        status: o,
                        applicationStream: s,
                        voiceChannel: l
                    }),
                [a, o, s, l]
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
                        channel: u
                    }),
                [a, c, u]
            );
        return t || !h
            ? null
            : (0, r.jsx)(p.Z, {
                  location: 'MemberListSubtext',
                  user: c,
                  activities: a,
                  applicationStream: s,
                  voiceChannel: l,
                  animateEmoji: d,
                  hideEmoji: m,
                  hasQuest: null != _,
                  hideTooltip: n
              });
    }),
    Q = i.memo(function (e) {
        var t;
        let { selected: n = !1, colorString: a, colorStrings: l, colorRoleName: u, isOwner: f, ownerTooltipText: p, lostPermissionTooltipText: h, isTyping: E = !1, nick: b, user: y, currentUser: O, activities: C, applicationStream: R, status: D, shouldAnimateStatus: L = !1, isMobile: x, premiumSince: k, channel: U, guildId: V, className: F, nameplate: H, hideClanTag: Y = !1, hideSubtext: W = !1, hideTooltip: Q = !1, onMouseDown: J, onKeyDown: $, onClick: ee, onContextMenu: et, onClickPremiumGuildIcon: en, 'aria-controls': er, 'aria-expanded': ei, 'aria-posinset': ea, 'aria-setsize': eo, id: es, tabIndex: el, itemProps: ec, ref: eu } = e,
            ed = null == y ? void 0 : y.id,
            ef = P.ZP.useName(y),
            e_ = (null == (t = N.default.getCurrentUser()) ? void 0 : t.id) === ed,
            ep = i.useRef(null),
            eh = null != eu ? eu : ep,
            [em, eg] = i.useState(!1),
            [eE, eb] = i.useState(!1),
            [ey, eO] = i.useState(null),
            { voiceChannel: ev } = (0, _.Z)({
                userId: ed,
                guildId: V
            }),
            { voiceActivityStatusEnabled: eI } = (0, d.U)({ location: 'MemberListItem' }),
            eT = eI ? ev : void 0,
            {
                avatarDecorationSrc: eS,
                avatarSrc: eA,
                eventHandlers: eN
            } = (0, A.Z)({
                userId: ed,
                size: c.EFr.SIZE_32,
                animateOnHover: !(n || em),
                guildId: V
            }),
            eC = null != ec ? ec : {},
            { onFocus: eR } = eC,
            eP = B(eC, ['onFocus']),
            ew = (0, v.X7)(V, ed, l),
            eD = (0, s.e7)([T.Z], () => null != T.Z.questEnrollmentBlockedUntil, []),
            [eL, ex] = i.useState(!1);
        i.useEffect(() => {
            n && ex(!1);
        }, [n]);
        let eM = (0, I.fN)(C),
            ek = null != eM && !e_ && n && !eL,
            ej = i.useCallback(() => {
                eg(!0);
            }, []),
            eU = i.useCallback(() => {
                eg(!1);
            }, []),
            eG = i.useCallback(() => {
                (eb(!0), null == eR || eR());
            }, [eR]),
            eB = i.useCallback(() => {
                eb(!1);
            }, []),
            eV = i.useCallback((e) => {
                eO(e);
            }, []),
            eF = i.useCallback(
                (e) =>
                    (0, r.jsx)(
                        S.Z,
                        G(
                            j(
                                {
                                    name: null != b ? b : ef,
                                    quest: eM,
                                    memberListItemRef: eh,
                                    applicationStream: R,
                                    isQuestEnrollmentBlocked: eD
                                },
                                e
                            ),
                            { closePopout: () => ex(!0) }
                        )
                    ),
                [eM, eh, R, eD, b, ef]
            );
        return null == y
            ? (0, r.jsx)(m.Z, {
                  avatarSize: c.EFr.SIZE_32,
                  className: M.placeholder
              })
            : (0, r.jsx)(c.yRy, {
                  targetElementRef: eh,
                  renderPopout: eF,
                  position: 'bottom',
                  shouldShow: ek,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: c.yRy.Animation.NONE,
                  spacing: -Z,
                  children: () =>
                      (0, r.jsx)(
                          g.Z,
                          j(
                              {
                                  ref: eh,
                                  selected: n,
                                  className: o()(M.member, F, {
                                      [M.offline]: D === w.Skl.OFFLINE && !n,
                                      [M.flatBottom]: ek
                                  }),
                                  innerClassName: M.memberInner,
                                  onClick: ee,
                                  onKeyDown: $,
                                  onMouseDown: J,
                                  onContextMenu: et,
                                  onMouseEnter: ej,
                                  onMouseLeave: eU,
                                  onBlur: eB,
                                  hovered: em,
                                  name:
                                      null == h
                                          ? (0, r.jsx)('span', {
                                                className: M.username,
                                                children: (0, r.jsx)(z, {
                                                    colorRoleName: u,
                                                    colorString: a,
                                                    name: null != b ? b : ef,
                                                    roleColorStrings: ew,
                                                    hideClanTag: Y,
                                                    user: y,
                                                    guildId: V,
                                                    isHovering: em
                                                })
                                            })
                                          : (0, r.jsx)(c.ua7, {
                                                text: h,
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        'span',
                                                        G(j({}, e), {
                                                            className: o()(M.username, M.lostPermission),
                                                            children: (0, r.jsx)(z, {
                                                                colorRoleName: u,
                                                                colorString: a,
                                                                name: null != b ? b : ef,
                                                                roleColorStrings: ew,
                                                                hideClanTag: Y,
                                                                user: y,
                                                                guildId: V,
                                                                isHovering: em
                                                            })
                                                        })
                                                    )
                                            }),
                                  avatar: (0, r.jsx)(q, {
                                      user: y,
                                      shouldAnimateStatus: L,
                                      activities: C,
                                      status: D,
                                      eventHandlers: eN,
                                      avatarSrc: eA,
                                      isMobile: x,
                                      isTyping: E,
                                      avatarDecorationSrc: eS,
                                      handleSetTypingRef: eV,
                                      typingRef: ey,
                                      currentUser: O
                                  }),
                                  nameplate: H,
                                  subText: (0, r.jsx)(X, {
                                      hideSubtext: W,
                                      activities: C,
                                      status: D,
                                      applicationStream: R,
                                      voiceStatusChannel: eT,
                                      user: y,
                                      channel: U,
                                      isHoveringOrFocusing: em || eE,
                                      quest: eM,
                                      hideTooltip: Q
                                  }),
                                  decorators: (0, r.jsx)(K, {
                                      user: y,
                                      isOwner: f,
                                      lostPermissionTooltipText: h,
                                      ownerTooltipText: p,
                                      premiumSince: k,
                                      onClickPremiumGuildIcon: en
                                  }),
                                  'aria-controls': er,
                                  'aria-expanded': ei,
                                  'aria-setsize': eo,
                                  'aria-posinset': ea,
                                  id: es,
                                  tabIndex: el,
                                  onFocus: eG,
                                  focusProps: {
                                      offset: {
                                          top: 4,
                                          bottom: 4,
                                          left: 4,
                                          right: 4
                                      }
                                  }
                              },
                              eP
                          )
                      )
              });
    });
